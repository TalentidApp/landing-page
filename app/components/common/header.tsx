import React from 'react';
import Arrow from '@/app/assets/arrow-right.svg';
import logo from '@/app/assets/logosaas.png'; // Assuming you'll replace this with your Staar logo
import Image from 'next/image';
import MenuIcon from '@/app/assets/menu.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='sticky z-20 top-0 backdrop-blur-sm bg-transparent'>
            <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
                <p className='text-white/60 hidden md:block'>
                    Boost your productivity with an AI that works with your flow—code, files, and more.
                </p>
                <div className="inline-flex gap-1 items-center">
                    <p>Download Staar AI for free now</p>
                    <Arrow className="h-4 w-4 inline-flex justify-center items-center" />
                </div>
            </div>
            <div className="p-5">
                <div className="">
                    <div className="flex items-center justify-between">
                        <Image src={logo} alt='Staar AI Logo' height={40} width={40} />
                        <MenuIcon className="h-5 w-5 md:hidden" />
                        <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                            <Link href="#home" className="hover:text-black transition-colors duration-200">Home</Link>
                            <Link href="#features" className="hover:text-black transition-colors duration-200">Features</Link>
                            <Link href="#download" className="hover:text-black transition-colors duration-200">Download</Link>
                            <Link href="#support" className="hover:text-black transition-colors duration-200">Support</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;