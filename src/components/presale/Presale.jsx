import Container from "../container/Container";
import Bg2 from "/presale-bg-2.jpg";
import BgMobile2 from "/presale-bg-2-mobile.png";
import BigButton from "../bigButton/BigButton";
import Stage from "../stage/Stage";

function Presale() {
    return (
        <>
            <div className="py-20 xl:pt-40 bg-presale-bg-1 bg-cover">
                <Container>
                    <h3 className="ribeye-regular text-white text-4xl text-center">PRESALE</h3>
                </Container>
            </div>
            <div className="relative bg-[#344853]">
                <div className="w-full lg:absolute lg:top-0 left-0">
                    <Container>
                        <div className="w-full max-w-[850px] mx-auto p-5 mb-5 rounded-[12px] bg-[#ffffff1c]">
                            <p className="open-sans-Medium text-white text-lg text-center mb-3">
                                The presale accounts for 3.76% of the total supply and is divided into 3 phases, with the token price varying in each phase.
                            </p>
                            <p className="open-sans-Medium text-light-red text-lg text-center">
                                Our plan is precise. We stick to our schedule without deviation, not even by a single day.
                            </p>
                            {/* <p className="open-sans-Medium text-white text-lg text-center mb-3">
                                Participants can join the Captain Hook presale on the PinkSale launchpad from December 3rd to December 6th, using Binance Coin (BNB) to purchase $CAPT tokens. To ensure fair participation and prevent oversaturation, the presale has a maximum purchase limit of 7 BNB per user. Hosting the presale on PinkSale ensures enhanced accessibility and transparency for all participants.
                            </p> */}
                            {/* <p className="open-sans-Medium text-light-red text-lg text-center">
                                Our plan is precise. We stick to our schedule without deviation, not even by a single day.
                            </p> */}
                        </div>
                        <div className="flex justify-center">
                            <BigButton text={"Buy $CAPT Now"} link={"#"} />
                        </div>
                        <div className="flex items-center flex-wrap justify-center gap-5 2xl:gap-10 mt-5 2xl:mt-20 translate-y-[150px] lg:translate-y-[0px]">
                            <Stage />
                        </div>
                    </Container>
                </div>
                <img src={Bg2} alt="presale background" loading="lazy" className="hidden lg:block" />
                <img src={BgMobile2} alt="presale background" loading="lazy" className="w-full lg:hidden" />
            </div>
        </>
    );
}

export default Presale;
