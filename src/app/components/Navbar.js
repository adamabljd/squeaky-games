import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="p-4 flex items-center justify-center max-h-full bg-[#780000]">

            <div className='flex items-center space-x-2'>
                <Image
                    src="/squeaky_games_logo_noBg.png"
                    alt="logo"
                    width={100}
                    height={100}
                />
                <p className='font-bold text-2xl'>Squeaky Games</p>
            </div>
        </nav>
    )
}

export default Navbar;