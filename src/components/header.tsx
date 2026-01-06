"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleJoinNow = () => {
    if (pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push('/');
      
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-22 backdrop-blur-md px-4 md:px-6 pt-4">
      <div className="w-full bg-white rounded-2xl border-[1.5px] border-[#E1E3E5] p-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-2">
            <div className="relative w-35.75 h-10">
              <Image 
                src="/logo.svg"
                alt="MA Digitize Logo"
                fill
                priority
                fetchPriority="high"
                className="object-contain"
              />
            </div>
          </Link>
          <div className="w-[103px] min-w-[103px]">
            <Button
              onClick={handleJoinNow}
              classNames='px-5 h-10'
            >
              <span className="text-[#FFFFFFFA] text-[14px] font-bold leading-[170%] tracking-[0%]">
                Join Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
