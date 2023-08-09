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
                    <a href="//github.com/scorcism" rel="noreferrer" target="_blank">scorcism</a>&nbsp;&nbsp;-&nbsp;&nbsp;<a href="//github.com/DevOpsProjectOps" rel="noreferrer" target="_blank">DevOpsProjectOps</a>
                </div>
                <div>
                    {
                        showCooie &&
                        <img onClick={getPerk} id="cookie" src={`/cookie.svg`} alt="cookie" />
                    }
                </div>
            </footer>

        </>
    )
}

export default Footer;