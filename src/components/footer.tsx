import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-6 pb-4 bg-[#F1F2F3]">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] px-4 py-12">
        <div className="max-w-100 mx-auto flex flex-col justify-center items-center">
          <Link href="/" className="flex gap-2">
            <div className="relative w-23.25 h-20">
              <Image 
                src="/logo_2.svg"
                alt="MA Digitize Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className='w-full h-px bg-[#00000014] my-4 md:my-6'></div>
          <p className='text-[#0000008F] text-[14px] leading-[150%] tracking-[0px]'>© 2026 MA Digitize. All rights reserved.</p>
          <div className='flex flex-nowrap justify-around items-center gap-2 xs:gap-4 mt-4 md:mt-6'>
            <Link href="/privacy" className="flex gap-2">
              <span className='text-[#6C757D] text-[14px] leading-[150%] tracking-[0px] underline'>Privacy Policy</span>
            </Link>
            <span className='text-[#0000008F]'>•</span>
            <Link href="/terms" className="flex gap-2">
              <span className='text-[#6C757D] text-[14px] leading-[150%] tracking-[0px] underline'>Terms & Conditions</span>
            </Link>
            <div className='w-px h-4 bg-[#E1E3E5]'></div>
            <Link href="https://www.linkedin.com">
              <div className="relative w-8 h-8">
                <Image 
                  src="/icons/linkedin.svg"
                  alt="MA Digitize Linkedin"
                  fill
                  className="w-8 h-8 object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
