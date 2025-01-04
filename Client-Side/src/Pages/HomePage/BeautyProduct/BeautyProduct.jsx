import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../hooks/axiosPublic";
import { FaStar } from "react-icons/fa";
import { Wallet } from "lucide-react";

const BeautyProduct = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["beauty-product"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/beautyproduct.json");
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  console.log(data);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data.map((item, index) => {
          return (
            <article
              key={index}
              className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <h3 className=" text-lg font-bold text-gray-700">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="mt-2 font-bold text-md/relaxed text-[#28A745]">
                    {item.price}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaStar className="text-[#FFA91D]" />
                    <span className="text-[#0F0E0EB2] font-bold">
                      {item.star}
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button className="px-10 py-2 rounded-full bg-[#28A745] text-white font-bold">
                    Buy Now
                  </button>
                  <span className=" border border-gray-300 rounded-full p-2">
                    <Wallet className="text-gray-500 text-sm" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BeautyProduct;
