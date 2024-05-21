import './Services.css'
import { FaRegListAlt } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiHandCoinsDuotone } from "react-icons/pi";

const Services = () => {
    return (
        <>
            <div className="container">
            <div className="services-main">
                <h2>HOW WE WORK</h2>
                <div className="row">

                    <div className="service-box-cards">

                        <div className="serviceBox">
                            <h3 className="title">Lorem</h3>
                            <div className="service-content">
                                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div className="service-icon">
                                <span><FaRegListAlt /></span>
                            </div>
                        </div>



                        <div className="serviceBox">
                            <h3 className="title">Lorem</h3>
                            <div className="service-content">
                                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div className="service-icon">
                                <span><HiOutlineClipboardDocumentList /></span>
                            </div>
                        </div>




                        <div className="serviceBox">
                            <h3 className="title">Lorem</h3>
                            <div className="service-content">
                                <p className="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div className="service-icon">
                                <span><PiHandCoinsDuotone /></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Services