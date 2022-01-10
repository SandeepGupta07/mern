import react from "react";

function faq() {
    return (

        <>
            {/* <!-- Start Breadcrumb  ============================================= --> */}
            <div className="breadcrumb-area bg-gradient text-center">
                {/* <!-- Fixed BG --> */}
                <div className="fixed-bg"></div>
                {/* <!-- Fixed BG --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Question & Answer</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li className="active">faq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb --> */}

            {/* <!-- Star Faq ============================================= --> */}
            <div className="faq-area default-padding">
                <div className="container">
                    <div className="faq-items">
                        <div className="row align-center">

                            <div className="col-lg-6">
                                <div className="faq-content wow fadeInUp">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h4 className="mb-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Where can I get analytics help?
                                                </h4>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How much does data analytics costs?
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h4 className="mb-0 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What kind of data is needed for analysis?
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consectetur at, sunt maxime, quod alias ullam officiis, ex necessitatibus similique odio aut!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="thumb wow fadeInLeft" data-wow-delay="0.5s">
                                    <img src="assets/img/illustration/17.png" alt="Thumb" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Faq --> */}

            {/* <!-- Start Contact Area ============================================= --> */}
            <div id="contact" className="contact-us-area default-padding-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 address text-light">
                            <div className="address-items wow fadeInUp">
                                <div className="item">
                                    <h4>Office Location</h4>
                                    <div className="info">
                                        <p>22 Baker Street,<br /> London, United Kingdom,<br /> W1U 3BW</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <h4>Contact Info</h4>
                                    <div className="info">
                                        <ul>
                                            <li>Phone: <span>+44-20-7328-4499</span></li>
                                            <li>Fax: <span>+44-20-7328-4499</span></li>
                                            <li>Email: <span>info@digilab.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 contact-form wow fadeInLeft">
                            <h2>Still no luck? <strong>Let's ask your questions</strong></h2>
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
        </>
    );
}

export default faq;