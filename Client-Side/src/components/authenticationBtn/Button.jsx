
const Button = ({name, logo}) => {
    return (
        <div className="border border-black text-slate-800 font-bold hover:bg-slate-200 w-96 py-2 px-5 mt-8 -mb-4 rounded-full">
          <button className='flex items-center gap-12'><span className="text-2xl">{logo}</span>{name}</button>
        </div>
    );
};

export default Button;