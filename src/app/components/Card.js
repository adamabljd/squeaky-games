import Image from 'next/image';

export default function Card({ game }) {
  const platforms = [
    game.webLink && { label: 'Play', url: game.webLink },
    game.iosLink && { label: 'iOS', url: game.iosLink },
    game.androidLink && { label: 'Android', url: game.androidLink },
  ].filter(Boolean);

  return (
    <article className="game-card" style={{ '--game-accent': game.accent }}>
      <div className="game-artwork">
        <Image
          src={game.image}
          alt={game.name}
          fill
          sizes="(max-width: 1000px) 45vw, 23vw"
          className="game-image"
        />
      </div>
      <span className="game-genre">{game.genre}</span>
      <h3 className="game-name">{game.name}</h3>
      <div className="game-platforms" aria-label={`${game.name} platforms`}>
        {platforms.map(({ label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${game.name} — ${label} (opens in a new tab)`}
          >
            {label}<span aria-hidden="true"> ↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}
