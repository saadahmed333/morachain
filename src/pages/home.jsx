import React from "react";
import Header from "../components/home/header";
import Morachain from "../components/home/morachain";
import Calculator from "../components/home/calculator";
import Tokenmora from "../components/home/token";
import Worldfirst from "../components/home/worldfirst";
import Tokenization from "../components/home/tokenization";
import Metaverse from "../components/home/metaverse";
import Whymorchain from "../components/home/whymorchain";
import Play from "../components/home/play";
import Fractional from "../components/home/fractional";
import Utility from "../components/home/utility";
import Footer from "../components/home/footer";
import saleBackground from "../assets/saleBackground.png";
const Home = () => {
  let bgImage = `url(${saleBackground})`;
  return (
    <>
      <div>
        <div
          style={{
            paddingTop: "10px",
            background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
            backgroundImage:
              "linear-gradient(90deg, rgb(225, 182, 70), rgb(146, 90, 6), rgb(225, 182, 70))",
          }}
          className="bg-slate-800 h-[110vh] md:h-[80vh] 2xl:h-[90vh]"
        >
          <div
            style={{
              backgroundImage: bgImage,
            }} className=" h-[110vh] md:h-[80vh] 2xl:h-[90vh]">
            <Header condition={true}/>
            <Morachain />
          </div>
        </div>
        <Calculator />
      </div>
      <div>
        <Tokenmora />
        <Worldfirst />
        <Tokenization />
        <Metaverse />
        <Play />
        <Whymorchain />
        <Fractional />
        <Utility />
        <Footer />
      </div>
    </>
  );
};

export default Home;
