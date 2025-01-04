import Marquee from "react-fast-marquee";

import bc1 from "../../../assets/BeautyCategory/bc-01.png";
import bc2 from "../../../assets/BeautyCategory/bc-02.png";
import bc3 from "../../../assets/BeautyCategory/bc-03.png";
import bc4 from "../../../assets/BeautyCategory/bc-04.png";
import bc5 from "../../../assets/BeautyCategory/bc-05.png";
import bc6 from "../../../assets/BeautyCategory/bc-06.png";

const data = [bc1, bc2, bc3, bc4, bc5, bc6];

const BeautyCategory = () => {
  return (
    <div className="my-10">
      <Marquee pauseOnHover className="flex items-center gap-10">
        {data.map((item, i) => (
          <figure key={i}>
            <img
              src={item}
              alt="beauty category"
              className="w-32 md:w-52 hover:scale-95 transition-transform mx-2"
            />
          </figure>
        ))}
      </Marquee>
    </div>
  );
};

export default BeautyCategory;
