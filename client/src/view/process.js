import react from "react";

function process() {
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
                            <h1>Our Process</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li className="active">Process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb --> */}

            {/* <!-- Start Tabs ============================================= --> */}
            <div className="tabs-content-area default-padding">
                <div className="container">
                    <div className="center-tabs">
                        <div className="row">
                            <div className="col-lg-4">
                                <ul id="tabs" className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#" data-target="#tab1" data-toggle="tab" className="active nav-link">Our Mission</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" data-target="#tab2" data-toggle="tab" className="nav-link">Our Vission</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" data-target="#tab3" data-toggle="tab" className="nav-link">Success Rate</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8">
                                <div id="tabsContent" className="tab-content wow fadeInUp" data-wow-delay="0.5s">
                                    <div id="tab1" className="tab-pane fade active show">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Our Mission</h5>
                                                <h2>Data Visualization Research <br /> technique & Solution</h2>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab2" className="tab-pane fade">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Our Vission</h5>
                                                <h3>Collect Ongoing Big Data <br /> Design And Strategy</h3>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab3" className="tab-pane fade">
                                        <div className="row align-center">
                                            <div className="col-lg-12 info">
                                                <h5>Success Rate</h5>
                                                <h2>These entrepreneurs feel <br /> bright and full of hope. </h2>
                                                <p>
                                                    Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.
                                                </p>
                                                <a className="btn-simple" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Tabs --> */}

            {/* <!-- Start Process Area  ============================================= --> */}
            <div className="process-area default-padding-bottom">
                {/* <!-- Fixed Shape  --> */}
                <div className="shape-left-top shape opacity-default">
                    <img src="assets/img/shape/4.png" alt="Shape" />
                </div>
                {/* <!-- Fixed Shape  --> */}
                <div className="container">
                    <div className="process-items">
                        <div className="row align-center">

                            <div className="col-lg-6 thumb wow fadeInLeft">
                                <img src="assets/img/illustration/3.png" alt="Thumb" />
                            </div>

                            <div className="col-lg-6 info wow fadeInUp">
                                <h2>We love What we Do  <strong>And Helping others Succeed</strong></h2>
                                <div className="content">
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>01.</strong> Research</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>02.</strong> Data Collection</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
                                    </div>
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                        <h4><strong>03.</strong> Targeting</h4>
                                        <p>
                                            Welcome fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Process Area --> */}
        </>
    );
}

export default process;