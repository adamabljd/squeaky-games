'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#780000] text-white px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                {/* Left Section */}
                <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image src="/squeaky_games_logo_noBg.png" alt="Logo" width={100} height={100} className='w-16 aspect-square'/>
                        <span className="font-bold text-xl">SQUEAKY GAMES</span>
                    </div>

                    {/* Social */}
                    <p className="font-semibold">Follow us on:</p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/squeaky.games/" target="_blank" rel="noopener noreferrer">
                            <Image src="/Instagram_logo.png" alt="Instagram" width={100} height={100} className="w-10 aspect-square"/>
                        </a>
                        <a href="https://www.tiktok.com/@squeaky.games" target="_blank" rel="noopener noreferrer">
                            <Image src="/tiktok_logo0.png" alt="TikTok" width={100} height={100} className="w-10 aspect-square" />
                        </a>
                        <a href="https://twitter.com/squeakygamesinc/" target="_blank" rel="noopener noreferrer">
                            <Image src="/x_logo.png?v=2" alt="x" width={100} height={100} className="w-10 aspect-square" />
                        </a>
                    </div>

                    <div className="border-t border-dashed border-gray-400 w-full max-w-xs my-2" />

                    {/* App Store Buttons */}
                    <div className="flex space-x-4">
                        <a href="https://apps.apple.com/us/developer/adam-el-sayed-abou-el-joud/id1780876046" target="_blank" rel="noopener noreferrer">
                            <Image src="/app_store_bt.svg" alt="App Store" width={100} height={100} className="h-10 w-auto object-contain" />
                        </a>
                        <a href="https://play.google.com/store/apps/developer?id=Squeaky+Games" target="_blank" rel="noopener noreferrer">
                            <Image src="/google_play_bt.svg" alt="Google Play" width={100} height={100} className="h-10 w-auto object-contain"/>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="uppercase font-bold text-white mb-2 pl-2">Contact Us</h3>

                    <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                        <Image src="/ic_adress.png?v=2" alt="Address" width={100} height={100} className='w-8 aspect-square' />
                        <div className="text-gray-300">
                            <p className="font-semibold text-sm">Address</p>
                            <p className="text-sm">Toulouse, France (31000)</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                        <Image src="/ic_phone.png" alt="Email" width={100} height={100} className='w-8 aspect-square'/>
                        <div className="text-gray-300">
                            <p className="font-semibold text-sm">Contact</p>
                            <p className="text-sm">squeakygamesinc@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
