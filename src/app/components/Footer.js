import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  ['Instagram', '/Instagram_logo.png', 'https://www.instagram.com/squeaky.games/'],
  ['TikTok', '/tiktok_logo0.png', 'https://www.tiktok.com/@squeaky.games'],
  ['X / Twitter', '/x_logo.png', 'https://twitter.com/squeakygamesinc/'],
];
const storeLinks = [
  ['App Store', '/app_store_bt.svg', 'https://apps.apple.com/us/developer/adam-el-sayed-abou-el-joud/id1780876046'],
  ['Google Play', '/google_play_bt.svg', 'https://play.google.com/store/apps/developer?id=Squeaky+Games'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-brand-lockup">
            <Image src="/squeaky-icon.png" alt="" width={96} height={96} />
            <span className="site-wordmark">Squeaky<br />Games</span>
          </Link>
          <span>Toulouse, France</span>
        </div>
        <div className="footer-column">
          <h2>Say hello</h2>
          <a className="footer-email" href="mailto:squeakygamesinc@gmail.com">squeakygamesinc@gmail.com</a>
          <div className="footer-socials">
            {socialLinks.map(([label, icon, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Image src={icon} alt={label} width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <h2>Find your next game</h2>
          <div className="footer-stores">
            {storeLinks.map(([label, icon, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Image src={icon} alt={`Download on ${label}`} width={140} height={44} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Squeaky Games</small>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
      </div>
    </footer>
  );
}
