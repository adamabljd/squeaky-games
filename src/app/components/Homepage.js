import Image from 'next/image';

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


            <div className="p-4 md:p-6 grid gird-rows gap-4 md:gap-6 md:grid-cols-2">
                {/* {games.map((game) => (
          <Card
            key={game.name}
            game={game}
            description={game.description}
            android={game.android}
            ios={game.ios}
          />
        ))} */}
            </div>
        </div>
    );



}

export default Homepage;