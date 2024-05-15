import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">

                <div className="footer-main">
                    footer
                  <hr />
                    <div className="copyright">
                        &copy;Lorem ipsum {new Date().getFullYear()} .
                        All rights reserved.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer