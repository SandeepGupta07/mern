import react from "react";

function contact(){

    return (
        <>

            {/* <!-- Start Breadcrumb ============================================= --> */}
            <div className="breadcrumb-area bg-gradient text-center">
                {/* <!-- Fixed BG --> */}
                <div className="fixed-bg" ></div>
                {/* <!-- Fixed BG --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Contact Us</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li className="active">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb --> */}

            {/* <!-- Start Contact Area  ============================================= --> */}
            <div id="contact" className="contact-us-area default-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 wow fadeInUp address text-light">
                            <div className="address-items">
                                <div className="item">
                                    <h4>Office Location</h4>
                                    <div className="info">
                                        <p>22 Baker Street,<br /> Jalandhar, Punjab,<br /> PB 144027</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <h4>Contact Info</h4>
                                    <div className="info">
                                        <ul>
                                            <li>Phone: <span>+91-83-6002-28330</span></li>
                                            {/* <li>Fax: <span>+44-20-7328-4499</span></li> */}
                                            <li>Email: <span>info@coderaksh.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 wow fadeInLeft contact-form">
                            <h2>Need help? <strong>Let's ask your questions</strong></h2>
                            <form action="https://webhunt.store/themeforest/digilab/assets/mail/contact.php" method="POST" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Send Message <i className="fa fa-paper-plane"></i>
                                        </button>
                                    </div>
                                    {/* <!-- Alert Message --> */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- End Contact --> */}

            {/* <!-- Start Google Maps  ============================================= --> */}
            <div className="maps-area">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>
                </div>
            </div>
            {/* <!-- End Google Maps --> */}

        </>

    );
}

export default contact;