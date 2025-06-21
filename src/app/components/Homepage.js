import Image from 'next/image';
import Card from './Card';

const games = [
    {
        id: 'miawdoku',
        name: 'MiawDoku!',
        image: '/Miawdoku_newLogo.png',
        iosLink: 'https://apps.apple.com/us/app/miawdoku/id6738445722',
        androidLink: 'https://play.google.com/store/apps/details?id=com.SqueakyGames.catdoku',
    }
];

const Homepage = () => {
    return (
        <div>
            <div className="relative w-full">
                <Image
                    src="/homepageBg.jpg?=v2"
                    alt="Hero Background"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />

                <div className="absolute inset-0 bg-black opacity-50 z-0" />

                <div className="absolute inset-0 flex flex-col z-10 md:flex-row items-center justify-end h-full text-center md:items-end md:justify-center pb-4 md:pb-8 space-y-4 md:space-y-0 md:space-x-4">
                    {/* <Image
                        src="/squeaky_games_logo_noBg.png"
                        alt="logo"
                        width={100}
                        height={100}
                    /> */}

                    <p className="text-white text-md md:text-2xl break-words whitespace-normal px-4 md:px-0 max-w-xs md:max-w-xl">
                        Find the cutest games here on Squeaky's page!
                    </p>
                </div>
            </div>

            <h1 className='text-black text-center font-extrabold text-3xl p-4 mt-2'>OUR GAMES</h1>

            <div className='flex items-center justify-center pt-6 mb-6'>
                <div className="grid gap-4 md:gap-6 ">
                    {games.map((game) => (
                        <Card key={game.id} game={game} />
                    ))}
                </div>
            </div>

        </div>
    );



}

export default Homepage;