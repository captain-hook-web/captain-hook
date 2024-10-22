import Vip from "/vip-club.png";
import CountDownTimer from "../SmallComponents/Timer";
import "./style.css";
import { useEffect, useState } from "react";

function Popup({ onClosePopup, popup }) {

    return (
        <div className={`${popup ? "flex items-center justify-center w-full h-[100vh] bg-[#0b1023e6] fixed top-0 left-0 z-[1500]" : "hidden"}`}>
            <div className="relative bg-popup bg-no-repeat bg-[length:100%_100%] w-full max-w-[500px] h-auto pt-20 sm:pt-28 sm:pt-32  mt-10 scale-[.7] xl:scale-[1]">
                <img src={Vip} alt="Vip Club" loading="lazy" className="w-[100%] absolute left-0 top-[-120px]" />
                <h4 className="title-popup w-[85%] mx-auto text-white text-center text-[15px]">Join the VIP Club for Captain Hook Presale Stage 1!</h4>
                <p className="w-[70%] mx-auto open-sans-Medium text-white text-center text-[12px] my-2">For the FIRST TIME EVER, we're excited to launch our VIP Club for early participants!</p>
                <div className="w-[98%] mx-auto bg-[#00000060] py-2">
                    <div id="timer" className="w-[70%] mx-auto">
                        <CountDownTimer time={1729631906} />
                    </div>
                </div>
                <h4 className="title-popup w-[85%] mx-auto text-white text-[15px] my-2">VIP Benefits:</h4>
                <ul className="list-popup w-[70%] mx-auto text-white text-[12px]">
                    <li><span>1.</span> <span className="text-lg">🏖️</span> 5-Day Goa Trip with the Captain Hook Team for 10 Lucky $500+ Contributors! (Includes airfare and hotel)</li>
                    <li><span>2.</span> <span className="text-lg">💰</span> Raffle for $5,000 + 5 Ledger wallets! (For contributions over $50)</li>
                    <li><span>3.</span> <span className="text-lg">📈</span> 10% More Tokens!</li>
                    <li><span>4.</span> <span className="text-lg">🗳️</span> Voice in Project Decisions!</li>
                    <li><span>5.</span> <span className="text-lg">📣</span> Early Access to News and Announcements!</li>
                    <li><span>6.</span> <span className="text-lg">🏅</span> Special Participation Badges!</li>
                </ul>
                <p className="w-[85%] mx-auto open-sans-Medium text-white text-[12px] mt-2">Don’t miss this revolutionary opportunity! Join the VIP Club now and be part of the Captain Hook journey!</p>
                <div className="flex justify-center my-5">
                    <button onClick={onClosePopup} id="btn-popup" className="open-sans-Medium font-black text-lgg text-white bg-purple py-2 px-10 rounded-xl border-[1.5px] border-white transition-[1s] hover:-translate-y-1">OK</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;