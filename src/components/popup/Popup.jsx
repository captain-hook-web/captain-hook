import Vip from "/vip-club.png";
import CountDownTimer from "../SmallComponents/Timer";
import "./style.css";
import { useEffect, useState } from "react";

function Popup({ onClosePopup, popup }) {
    
    return (
        <div className={`${popup ? "flex items-center justify-center w-full h-[100vh] bg-[#0b1023e6] fixed top-0 left-0 z-[1500]" : "hidden"}`}>
            <div className="relative bg-popup bg-no-repeat bg-[length:100%_100%] w-full max-w-[500px] h-auto pt-20 sm:pt-28 sm:pt-32  mt-10 scale-[.7] xl:scale-[1]">
                <img src={Vip} alt="Vip Club" loading="lazy" className="w-[100%] absolute left-0 top-[-120px]" />
                <h4 className="title-popup w-[85%] mx-auto text-white text-center text-[18px]">🎯 Exclusive Presale Last Stage Offer: More Tokens, More Rewards! 🎯</h4>
                <p className="w-[80%] mx-auto open-sans-Medium text-white text-center text-[16px] my-2">🔹 Special rewards for Stage 3 presale investors:</p>
                {/* <div className="w-[98%] mx-auto bg-[#00000060] py-2">
                    <div id="timer" className="w-[70%] mx-auto">
                        <CountDownTimer time={1730937540} />
                    </div>
                </div> */}
                <h4 className="open-sans-Medium w-[85%] mx-auto text-white text-[14px] my-2 text-center"> more buy, more bonus!</h4>
                <ul className="list-popup w-[70%] mx-auto text-white text-[18px] my-5">
                    <li><span>1.</span> <span className="text-lg">💰</span> Over $100: 10% bonus tokens</li>
                    <li><span>2.</span> <span className="text-lg">💰</span> Over $200: 30% bonus tokens</li>
                    <li><span>3.</span> <span className="text-lg">💰</span> Over $500: 60% bonus tokens</li>
                    <li><span>3.</span> <span className="text-lg">💰</span> Over $1000: 70% bonus tokens</li>
                    {/* <li><span>4.</span> <span className="text-lg">🗳️</span> Voice in Project Decisions!</li>
                    <li><span>5.</span> <span className="text-lg">📣</span> Early Access to News and Announcements!</li>
                    <li><span>6.</span> <span className="text-lg">🏅</span> Special Participation Badges!</li> */}
                </ul>
                <p className="w-[85%] mx-auto open-sans-Medium text-white text-[16px] mt-2 text-center">🌟 Stage 3 is your final chance to invest early and earn maximum rewards!</p>
                <div className="flex justify-center my-5">
                    <button onClick={onClosePopup} id="btn-popup" className="open-sans-Medium font-black text-lgg text-white bg-purple py-2 px-10 rounded-xl border-[1.5px] border-white transition-[1s] hover:-translate-y-1">OK</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;

