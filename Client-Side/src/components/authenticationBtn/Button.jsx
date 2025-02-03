
const Button = ({name, logo}) => {
    return (
        <div className="border border-black text-slate-700 font-bold hover:bg-slate-200 w-96 py-2 px-5 mt-8 rounded-full">
          <button className='flex items-center gap-16 text-lg'>{logo}{name}</button>
        </div>
    );
};

export default Button;