import dis from "../../../assets/discover.png"

const Discover = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center bg-[#DFF9E4] px-5 py-10 gap-5 md:gap-2 rounded">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[#FD7E14] text-3xl md:text-5xl font-bold">
            Discover a kaleidoscope of cards
          </h2>
          <p className="text-sm md:text-base my-5 text-[#4F4F4F] md:mr-32">
          Build your collection of trading cards and collectible card games.
          </p>
          <button className="bg-green-600 px-10 py-3 rounded-full text-white">
            Find your favorites
          </button>
        </div>
        <div className="md:w-1/2">
          <figure>
            <img src={dis} alt='discover banner' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Discover;
