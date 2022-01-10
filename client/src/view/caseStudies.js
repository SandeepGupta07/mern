import react from "react";

function caseStudies() {

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
                            <h1>Case Studies</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                {/* <li><a href="#">Pages</a></li> */}
                                <li className="active">Case Studes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb --> */}

            {/* <!-- Start Case Studies============================================= --> */}
            <div className="case-studies-area circle-shape-right default-padding bottom-less">
                <div className="container">
                    <div className="case-items">
                        <div className="row">
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="500ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/1.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Sales, Web
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Community Engagement</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="600ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/2.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Marketing
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Income growth</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/3.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                SEO, Optimize
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Traffic Management</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="500ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/4.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Sales, Web
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Community Engagement</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="600ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/5.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                Marketing
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Income growth</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                            {/* <!-- Single Item --> */}
                            <div className="single-item col-lg-4 col-md-6">
                                <div className="item wow fadeInUp" data-wow-delay="700ms">
                                    <div className="thumb">
                                        <img src="assets/img/case/6.jpg" alt="Thumb" />
                                        <div className="overlay">
                                            <a href="#"><i className="fas fa-link"></i></a>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <div className="cats">
                                            <p>
                                                SEO, Optimize
                                            </p>
                                        </div>
                                        <h5>
                                            <a href="#">Traffic Management</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Case Studies --> */}
        </>
    );
}
export default caseStudies;