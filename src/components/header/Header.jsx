import HeaderDesktop from "./HeaderDesktop";
import HambergerMenu from "./HambergerMenu";
import { useState, useEffect } from "react";
import "./style.css";
import Popup from "../popup/Popup";

function Header() {

    const [close, setClose] = useState(true);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        setPopup(true)
    }, [])

    function handleHideAndShowMenu(val) {
        setClose(val)
    }

    function handleClosePopup() {
        setPopup(preveState => !preveState);
    }

    return (
        <>
            <HeaderDesktop onShow={handleHideAndShowMenu} onClosePopup={handleClosePopup} />
            <HambergerMenu onClose={handleHideAndShowMenu} onClosePopup={handleClosePopup} isClose={close} />
            {/* <Popup onClosePopup={handleClosePopup} popup={popup} /> */}
        </>
    );
}

export default Header;