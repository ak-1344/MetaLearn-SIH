import Link from 'next/link';
import Image from 'next/image';
import logo from './Media/logo.png'
export default function Home() {
  return (
    <div className='overflow-y-hiddenhidden bg-white'>

      <div className='flex flex-row justify-between'>
        <div class="w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-[#2E85EC] rotate-90"></div>
        <div className='flex flex-row justify-between items-center text-black'>
          <div className='text-black text-3xl font-inter'>META</div>
          <div className='w-4'></div>
          <Image
            src={logo}
            alt="MetaLearn Logo"
            className='w-20 h-auto'
            priority
          />
          <div className='w-4'></div>
          <div className='text-black text-3xl font-inter'>LEARN</div>
        </div>
        <div class="w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-[#2E85EC] "></div>
      </div>
      <div className='bg-logo-gradient h-screen overflow-y-hidden flex flex-row items-center justify-between'>
        <div className='mx-24 h-screen w-screen flex flex-row items-center justify-between'>
          
          <Link href='./LogIn/Student' className='w-1/5 h-1/4 bg-white cursor-pointer rounded-5xl flex flex-col items-center justify-center text-[#2E85EC] text-3xl font-inter font-extrabold'>
              <div className='flex'>Student</div>
              <div className='flex'>Login</div>
          </Link>
          <Link href='./LogIn/Educator' className='w-1/5 h-1/4 bg-white cursor-pointer rounded-5xl flex flex-col items-center justify-center text-[#2E85EC] text-3xl font-inter font-extrabold'>
              <div className='flex'>Educator</div>
              <div className='flex'>Login</div>
          </Link>
          <Link href='./LogIn/Institute' className='w-1/5 h-1/4 bg-white cursor-pointer rounded-5xl flex flex-col items-center justify-center text-[#2E85EC] text-3xl font-inter font-extrabold'>
              <div className='flex'>Institute</div>
              <div className='flex'>Login</div>
          </Link>

        </div>
      </div>

    </div>
  );
}
