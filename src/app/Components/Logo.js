import Image from 'next/image';
import logoSrc from '../Media/logo.png'; // Adjust path if logo is different

export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-start h-full spcae-y-10  ">
            <div className='h-20'></div>
            <Image
                src={logoSrc}
                alt="Your Logo"
                className="w-32"
                priority
            />
            <div className='h-16'>

            </div>
            <div className='text-5xl font-michrome'>
                MetaLearn
            </div>
        </div>
    );
}
