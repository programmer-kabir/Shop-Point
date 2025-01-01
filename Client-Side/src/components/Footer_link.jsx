import React from "react";

const Footer_link = ({menu, title}) => {
    const menu_split = menu.split(',')
    
  return (
    <>
      <h4 className="text-white mb-[14px] font-bold text-2xl tracking-[4%] ">
        {title}
      </h4>

      <ul className="flex flex-col gap-3">

        {
            menu_split.map((menu, index)=> <li key={index}><a className="text-white" href="">{menu}</a></li>)
        }

      </ul>
    </>
  );
};

export default Footer_link;
