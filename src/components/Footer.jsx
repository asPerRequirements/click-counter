import { useState } from "react";

const Footer = ({ showCooie, setShowCookie, count, setCount }) => {

    const [combo , setCombo] =useState(1)

    const getPerk = () => {
        setCount(count + (10*combo));
        setShowCookie(!showCooie)
        setCombo(combo + 1)
    }

    return (
        <>
            <footer>
                <div></div>
                <div>
                    <a href="//github.com/scorcism" rel="noreferrer" target="_blank">scorcism</a>&nbsp;&nbsp;-&nbsp;&nbsp;<a href="https://github.com/asPerReqirements" rel="noreferrer" target="_blank">asPerReqirements</a>
                </div>
                <div>
                    {
                        showCooie &&
                        <img onClick={getPerk} id="cookie" src={`./cookie.svg`} alt="cookie" />
                    }
                </div>
            </footer>

        </>
    )
}

export default Footer;