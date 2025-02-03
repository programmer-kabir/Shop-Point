import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/authenticationBtn/Button';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Signin = () => {
  return (
    <Container>
      <div className='text-right mt-2 mr-2'>
        <a type='_blank' href="">Tell us what you think</a>
      </div>
      <div className='mt-4 text-5xl'>Shop Point</div>
     <div className='flex flex-col min-h-screen items-center w-[355px] h-[517px] mx-auto mb-8'>
    <div className='text-center'>
    <div className='mb-6'>
        <h1 className='text-2xl font-semibold mb-2'>Sign in to your account</h1>
       <p className='mb-4'>New to Shop point?<Link to='/signup'className="text-red-500"> Create account</Link></p>
      </div>
      <label
  htmlFor="email"
  className="relative py-2 block bg-slate-100 rounded-md border border-gray-500 shadow-sm focus-within:border-gray-300 focus-within:ring-1 focus-within:ring-gray-300 w-96"
>
  <input
    type="text"
    id="email"
    className="peer text-xl w-full px-5 border-none bg-transparent placeholder-transparent outline-none"
    placeholder="Email or username"
  />

  <span
    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-slate-100 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
  >
   email or username
  </span>
</label>
<div className='bg-blue-500 text-white w-96 py-3 px-5 mt-8 rounded-full text-center text-lg font-bold'>
  <button>Continue</button>
</div>
    </div>
    <div className='flex justify-center items-center mt-8'>
      <div className='h-[1px] bg-slate-300 w-48'></div>
      <div className='pb-1 text-sm px-1'>or</div>
      <div className='h-[1px] bg-slate-300 w-48'></div>
    </div>
    <div>
    <Button name={"Continue with Google"} logo={<FcGoogle />}/>
    <Button name={"Continue with Facebook"} logo={<FaFacebook />}/>
    <Button name={"Continue with Apple"} logo={<FaApple />}/>
    </div>
    <div className='flex items-center justify-center mt-8 gap-2'>
    <input type="checkbox" name="staySignin" id="staySignin" />
    <p>Stay signed in</p>
    <IoMdInformationCircleOutline className='text-xl'/>
    </div>
     </div>
     <footer className='text-center mb-4 text-xs text-gray-700'>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by Shop Point</p>
     </footer>
    </Container>
  )
}

export default Signin