import './Footer.css';
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (


        <div className="footer-wrapper">


            <div className="container">


                <div className="row footer-content">
                    <div className="col-12">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, mag</h4>
                    </div>


                    <div className="col-4">
                        <div className="footer-col1">
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="footer-col2">
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="footer-col3">
                            <ul>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                                <li>lorem</li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div>

            <div className="footer">

            </div>


            <div class="social-menu">
                <ul>
                    <Link href='https://www.facebook.com/'><li><FaFacebookF className='fab' /></li></Link>
                    <Link href='https://www.instagram.com/'><li><GrInstagram className='fab' /></li></Link>
                    <Link href='https://in.linkedin.com/'><li><GrLinkedinOption className='fab' /></li></Link>
                    <Link href='https://twitter.com/?lang=en'><li><FaXTwitter className='fab' /></li></Link>
                </ul>
            </div>


            <div className="footer-cities">
                <div className="container">
                    <ul>
                        <li>Germany</li>
                        <li>united states</li>
                        <li>india</li>
                        <li>uae</li>
                        <li>united kingdom</li>
                        <li>france</li>
                        <li>italy</li>
                        <li>netherland</li>
                        <li>spain</li>
                        <li>switzerland</li>
                        <li>turkey</li>
                        <li>belgium</li>
                    </ul>
                </div>
            </div>

            
            <div className="copyrigt">
                <p>  Lorem ipsem  &copy; {new Date().getFullYear()} .All rights reserved.</p>
            </div>


        </div>

    )
}

export default Footer