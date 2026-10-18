import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="site-shell min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}
