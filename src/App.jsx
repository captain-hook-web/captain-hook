import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Parallax from "./components/parallax/Parallax";
import RailSlider from "./components/railSlider/RailSlider";
import PRLogoSlider from "./components/railSlider/PRLogoSlider";
import Play from "./components/play/Play";
import Gear from "/gear.png";
import Gear2 from "/gear-2.png";
import Gear3 from "/gear-3.png";
import Gear4 from "/gear-4.png";
import About from "./components/about/AboutCH";
import Presale from "./components/presale/Presale";
import Capt from "./components/capt/Capt";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Faq from "./components/faq/Faq";
import pr1 from "/pr-logo-1.png"
import pr2 from "/pr-logo-2.png"
import pr3 from "/pr-logo-3.png"
import pr4 from "/pr-logo-4.png"
import pr5 from "/pr-logo-5.png"
import pr6 from "/pr-logo-6.png"
import pr7 from "/pr-logo-7.png"
import pr8 from "/pr-logo-8.png"
import pr9 from "/pr-logo-9.png"
import pr10 from "/pr-logo-10.png"
import pr11 from "/pr-logo-11.png"
import pr12 from "/pr-logo-12.png"
import img1 from "/1.png";
import img2 from "/2.png";
import img3 from "/3.png";
import img4 from "/4.png";
import img5 from "/5.png";
import img6 from "/6.png";
import img7 from "/7.png";
import Popup from "./components/popup/Popup";

import { initGA } from './analytics';
import { useEffect } from "react";

function App() {


  useEffect(() => {
    initGA('G-H3WDBJ820H');
  }, []);

  return (
    <main className="w-full max-w-[1920px] mx-auto overflow-hidden">
      <Popup />
      <Header />
      <Parallax />
      <PRLogoSlider
        gears={{ src1: Gear, src2: Gear, src3: Gear, }}
        imagesSlider={[pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12]}
      />
      <Play />
      <About />
      <RailSlider
        gears={{ src1: Gear2, src2: Gear3, src3: Gear4, }}
        imagesSlider={[img1, img6, img7, img1, img6, img7, img1, img6, img7]}
      />
      <Presale />
      <Capt />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;