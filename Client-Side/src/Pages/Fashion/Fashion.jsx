import React, { useState } from "react";
import { Logs, ChevronDown, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../hooks/axiosPublic";

// FilterSelect Component remains the same
const FilterSelect = ({ label, options, value, onChange }) => (
  <div className="w-full">
    <div className="relative">
      <select
        value={value || ""}
        onChange={onChange}
        className="w-full appearance-none bg-green-50 hover:bg-green-100 transition-colors p-3 rounded-lg border border-green-200 text-gray-700 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none h-4 w-4" />
    </div>
  </div>
);

// ProductCard Component remains the same
const ProductCard = ({ product }) => (
  <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <img
      src={product.image}
      alt={product.name}
      className="h-56 w-full object-cover"
    />

    <div className="bg-white p-4 sm:p-6">
      <h3 className="mt-0.5 text-lg text-gray-900">{product.name}</h3>
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        {product.description}
      </p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-500">{product.condition}</span>
      </div>
    </div>
  </article>
);

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-48 w-full rounded-lg"></div>
    <div className="p-4 space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  </div>
);

const Fashion = () => {
  // State management
  const [activeTab, setActiveTab] = useState("All Listing");
  const [sortOption, setSortOption] = useState("Best Match");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [activeFilters, setActiveFilters] = useState([]);

  // Fetch products using React Query
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosPublic.get("/fashion.json");
      return response.data;
    },
  });

  // Filter and sort products
  const getFilteredProducts = () => {
    if (!products) return [];

    let filteredProducts = [...products];

    // Apply filters
    Object.entries(selectedFilters).forEach(([key, value]) => {
      switch (key) {
        case "Metal":
          filteredProducts = filteredProducts.filter((p) =>
            p.description.toLowerCase().includes(value.toLowerCase())
          );
          break;
        case "Type":
          filteredProducts = filteredProducts.filter((p) =>
            p.name.toLowerCase().includes(value.toLowerCase())
          );
          break;
        case "Condition":
          filteredProducts = filteredProducts.filter(
            (p) => p.condition.toLowerCase() === value.toLowerCase()
          );
          break;
        case "Price Range":
          const [min, max] = value.split("-").map(Number);
          filteredProducts = filteredProducts.filter((p) => {
            if (max) {
              return p.price >= min && p.price <= max;
            }
            return p.price >= min;
          });
          break;
        default:
          break;
      }
    });

    // Apply sorting
    switch (sortOption) {
      case "Price: Low to High":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  // Constants
  const tabs = ["All Listing", "Action", "Buy It Now"];
  const filterGroups = [
    {
      label: "Metal",
      options: [
        { value: "gold", label: "Gold" },
        { value: "silver", label: "Silver" },
        { value: "platinum", label: "Platinum" },
      ],
    },
    {
      label: "Type",
      options: [
        { value: "necklace", label: "Necklace" },
        { value: "bracelet", label: "Bracelet" },
        { value: "ring", label: "Ring" },
        { value: "earrings", label: "Earrings" },
      ],
    },
    {
      label: "Condition",
      options: [
        { value: "new", label: "New" },
        { value: "vintage", label: "Vintage" },
      ],
    },
    {
      label: "Price Range",
      options: [
        { value: "0-100", label: "Under $100" },
        { value: "100-500", label: "$100-$500" },
        { value: "500-1000", label: "$500-$1000" },
        { value: "1000", label: "$1000+" },
      ],
    },
  ];

  const sortOptions = [
    "Best Match",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
  ];

  // Handler functions
  const handleFilterChange = (label, value) => {
    if (value) {
      const option = filterGroups
        .find((group) => group.label === label)
        ?.options.find((opt) => opt.value === value);

      if (option) {
        setSelectedFilters((prev) => ({
          ...prev,
          [label]: value,
        }));

        setActiveFilters((prev) => {
          const filtered = prev.filter((filter) => filter.label !== label);
          return [...filtered, { label, value, displayText: option.label }];
        });
      }
    }
  };

  const removeFilter = (label) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[label];
      return newFilters;
    });

    setActiveFilters((prev) => prev.filter((filter) => filter.label !== label));
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setActiveFilters([]);
  };

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          Error loading products. Please try again later.
        </div>
      </div>
    );
  }

  const filteredProducts = getFilteredProducts();

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row justify-between items-start gap-4 py-6">
        <div className="w-full lg:w-1/4">
          <p className="text-sm text-gray-500">Shop Point &gt; Fashion</p>
          <h1 className="text-3xl font-bold text-gray-900">Fashion</h1>
        </div>

        <div className="w-full lg:w-3/4 space-y-4">
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
            <div className="w-full sm:w-auto">
              {/* Mobile Tabs */}
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="sm:hidden w-full rounded-lg border-green-200 bg-green-50 p-2 text-gray-700 shadow-sm outline-none"
              >
                {tabs.map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>

              {/* Desktop Tabs */}
              <nav
                className="hidden sm:flex items-center gap-2"
                aria-label="Tabs"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <span className="ml-4 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600">
                  {filteredProducts.length} Results
                </span>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-lg bg-green-50 border border-green-200 p-2 text-gray-700 shadow-sm outline-none hover:bg-green-100 transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button className="p-2 bg-green-50 hover:bg-green-100 transition-colors rounded-lg">
                <Logs className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filterGroups.map((filter) => (
                <FilterSelect
                  key={filter.label}
                  label={filter.label}
                  options={filter.options}
                  value={selectedFilters[filter.label] || ""}
                  onChange={(e) =>
                    handleFilterChange(filter.label, e.target.value)
                  }
                />
              ))}
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <div
                    key={filter.label}
                    className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-sm text-green-700"
                  >
                    <span>
                      {filter.label}: {filter.displayText}
                    </span>
                    <button
                      onClick={() => removeFilter(filter.label)}
                      className="hover:text-green-900"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <main className="mt-6">
        {activeTab === "All Listing" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {isLoading
              ? Array(8)
                  .fill(null)
                  .map((_, index) => <LoadingSkeleton key={index} />)
              : filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        )}
        {activeTab === "Action" && <div>Action Content</div>}
        {activeTab === "Buy It Now" && <div>Buy It Now Content</div>}
      </main>
    </div>
  );
};

export default Fashion;
