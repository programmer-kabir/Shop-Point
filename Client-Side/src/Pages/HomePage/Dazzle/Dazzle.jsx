import d from "../../../assets/dazzle.png";

const Dazzle = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 my-16">
      <div className="md:w-1/2">
        <h2 className="text-5xl/relaxed md:text-5xl/relaxed font-bold">
          Luxury that really dazzle
        </h2>
        <p className="text-base text-[#4B4B4B] my-5">
          Shop luxury fashion for sparkling accessories from top brands.
        </p>
        <button className="bg-[#28A745] px-10 py-3 rounded-full text-white">
          Explore luxury{" "}
        </button>
      </div>
      <div className="md:w-1/2">
        <figure>
          <img src={d} alt="banner" />
        </figure>
      </div>
    </div>
  );
};

export default Dazzle;
