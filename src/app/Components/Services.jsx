import './Services.css'
import { FaRegListAlt } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiHandCoinsDuotone } from "react-icons/pi";

const Services = () => {
    return (
        <>
            <div class="container">
            <div className="services-main">
                <h2>HOW WE WORK</h2>
                <div class="row">

                    <div className="service-box-cards">

                        <div class="serviceBox">
                            <h3 class="title">Lorem</h3>
                            <div class="service-content">
                                <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div class="service-icon">
                                <span><FaRegListAlt /></span>
                            </div>
                        </div>



                        <div class="serviceBox">
                            <h3 class="title">Lorem</h3>
                            <div class="service-content">
                                <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div class="service-icon">
                                <span><HiOutlineClipboardDocumentList /></span>
                            </div>
                        </div>




                        <div class="serviceBox">
                            <h3 class="title">Lorem</h3>
                            <div class="service-content">
                                <p class="description">Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
                            </div>
                            <div class="service-icon">
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