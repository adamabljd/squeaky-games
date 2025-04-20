import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fdf0d5] min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}
