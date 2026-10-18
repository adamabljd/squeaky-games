import Image from 'next/image';
import Card from './Card';

const games = [
    {
        id: 'zombies-rush',
        name: 'Zombie Craze Survival',
        genre: 'Survival / Action',
        accent: '#98ae75',
        image: '/zombie_craze_logo.png',
        iosLink: 'https://apps.apple.com/fr/app/zombie-craze-survival-2d-game/id6761763726?l=en-GB',
        webLink: 'https://squeakygamesinc.itch.io/zombie-rush',
    },
    {
        id: 'uphill-grocery-cook-off',
        name: 'Uphill Grocery: Cooking Game',
        genre: 'Sim / Party',
        accent: '#e77960',
        image: '/uphill_logo.png',
        iosLink: 'https://apps.apple.com/fr/app/uphill-grocery-cooking-game/id6803160499?l=en-GB',
        webLink: 'https://squeakygamesinc.itch.io/uphill-grocery-cook-off',
    },
    {
        id: 'kitty Mahjong',
        name: 'Kitty Mahjong',
        genre: 'Puzzle / Casual',
        accent: '#dfa2ac',
        image: '/Kitty_mahjong_logo.png',
        iosLink: 'https://apps.apple.com/fr/app/cat-mahjong-tile-match-defense/id6755239014?l=en-GB',
        androidLink: 'https://play.google.com/store/apps/details?id=com.SqueakyGames.KittyMahjong&pcampaignid=web_share',
    },
    {
        id: 'miawdoku',
        name: 'MiawDoku!',
        genre: 'Brain / Puzzle',
        accent: '#75a5aa',
        image: '/miawdoku_logo.png',
        iosLink: 'https://apps.apple.com/us/app/miawdoku/id6738445722',
        androidLink: 'https://play.google.com/store/apps/details?id=com.SqueakyGames.catdoku',
    }
];

const Homepage = () => {
    return (
        <div>
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-copy">
                <h1 id="hero-title" className="hero-title">
                    <span>Press play.</span>
                    <span>Get hooked.</span>
                </h1>
                <div className="hero-actions">
                    <a className="explore-button" href="#games">Explore the games</a>
                    <p className="studio-label">Independent game studio · Toulouse, France</p>
                </div>
                </div>
                <div className="hero-artwork">
                    <Image
                        src="/squeaky-icon.png"
                        alt="Squeaky the cat wearing sunglasses, headphones, and a red bandana"
                        width={3072}
                        height={3072}
                        sizes="(max-width: 700px) 130px, 340px"
                        className="hero-cat"
                        priority
                    />
                </div>
            </section>

            <section id="games" className="games-section" aria-labelledby="games-title">
            <h2 id="games-title" className="games-title">The lineup</h2>

            <div className="games-grid">

                    {games.map((game) => (
                        <Card key={game.id} game={game} />
                    ))}
            </div>
            </section>

        </div>
    );



}

export default Homepage;
