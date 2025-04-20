import Image from 'next/image';
import Card from './Card';

const games = [
    {
        id: 'miawdoku',
        name: 'MiawDoku!',
        image: '/squeaky_games_logo.png',
        iosLink: 'https://apps.apple.com/app/id1234567890',
        androidLink: 'https://play.google.com/store/apps/details?id=com.squeaky.miawdoku',
    },
    {
        id: 'catventure',
        name: 'Catventure Island',
        image: '/ios_icon.png',
        iosLink: 'https://apps.apple.com/app/id1234567890',

        androidLink: 'https://play.google.com/store/apps/details?id=com.squeaky.catventure',
    },
    {
        id: 'purrfectmatch',
        name: 'Purrfect Match',
        image: '/1_4_bg.png',
        iosLink: 'https://apps.apple.com/app/id0987654321',
    },
    {
        id: 'miawdoku',
        name: 'MiawDoku!',
        image: '/squeaky_games_logo.png',
        iosLink: 'https://apps.apple.com/app/id1234567890',
        androidLink: 'https://play.google.com/store/apps/details?id=com.squeaky.miawdoku',
    },
    {
        id: 'catventure',
        name: 'Catventure Island',
        image: '/squeaky_games_logo.png',
        androidLink: 'https://play.google.com/store/apps/details?id=com.squeaky.catventure',
    },
    {
        id: 'purrfectmatch',
        name: 'Purrfect Match',
        image: '/squeaky_games_logo.png',
        iosLink: 'https://apps.apple.com/app/id0987654321',
    },
];

const Homepage = () => {
    return (
        <div>
            <div className="relative h-96 bg-auto md:bg-cover bg-center p-4 md:p-8"
                style={{
                    backgroundImage: `url('/1_4_bg.png')`,
                    backgroundSize: "cover", // optional fallback to make sure it's covered
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col md:flex-row items-center justify-center h-full text-center space-y-4 md:space-y-0 md:space-x-4">
                    <Image
                        src="/squeaky_games_logo_noBg.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />


                    <p className="text-white text-md md:text-2xl break-words whitespace-normal px-4 md:px-0 max-w-xs md:max-w-xl">
                        Find the cutest games here on Squeaky's page!
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-center pt-6'>
                <div className="grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {games.map((game) => (
                        <Card key={game.id} game={game} />
                    ))}
                </div>
            </div>

        </div>
    );



}

export default Homepage;