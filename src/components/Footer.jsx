const Footer = ({ showCooie, setShowCookie, count, setCount }) => {

    const getPerk = () => {
        setCount(count + 10);
        setShowCookie(!showCooie)
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