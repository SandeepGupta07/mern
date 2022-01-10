import react from "react";
import {NavLink} from "react-router-dom";

function header() {
    return (
        <div >


            {/* //    <!-- Preloader Start --> */}
            {/* <div id="site-preloader" className="site-preloader">
                <div className="loader-wrap">
                    <div className="ring">
                        <span></span>
                    </div>
                    <h2>Digilab</h2>
                </div>
            </div> */}
            {/* // <!-- Preloader Ends -->

            // <!-- Start Header Top 
            // ============================================= --> */}
            <div className="top-bar-area bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-7 address-info">
                            <div className="info box">
                                <ul>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> Jalandhar, PB 144027
                                    </li>
                                    <li>
                                        <i className="fas fa-envelope-open"></i> Info@coderaksh.com
                                    </li>
                                    <li>
                                        {/* <i className="fas fa-phone"></i> +8360028330 */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 text-right button">
                            <div className="item-flex">
                                <NavLink className="button" to="/contact"><i className="fas fa-chart-line"></i> Free Analysis</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- End Header Top -->

            // <!-- Header 
            // ============================================= --> */}
            <header id="home">

                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-default navbar-sticky dark attr-border bootsnav">

                    {/* <!-- Start Top Search --> */}
                    <div className="container">
                        <div className="row">
                            <div className="top-search">
                                <div className="input-group">
                                    <form action="#">
                                        <input type="text" name="text" className="form-control" placeholder="Search" />
                                        <button type="submit">
                                            <i className="ti-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Top Search --> */}

                    <div className="container">

                        {/* <!-- Start Atribute Navigation --> */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fas fa-search"></i></a></li>
                            </ul>
                        </div>
                        {/* <!-- End Atribute Navigation -->

                <!-- Start Header Navigation --> */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars"></i>
                            </button>
                            <NavLink className="navbar-brand" to="/">
                                <img src="assets/codeRaksh_logo.png" className="logo" alt="Logo" width={175} height={50} />
                            </NavLink>
                        </div>
                        {/* <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <NavLink to="/" className=" active" data-toggle="dropdown" >Home</NavLink>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Company</a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/about">About Company</NavLink></li>
                                        <li><NavLink to="/process">Our Process</NavLink></li>
                                        <li><NavLink to="/faq">Faq</NavLink></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <NavLink to="/services" className="dropdown-toggle" data-toggle="dropdown" >Services</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Web Development </a></li>
                                        <li><a href="#">PPC Adverties</a></li>
                                        <li><a href="#">Social Media arketing</a></li>
                                        <li><a href="#">Search Engine Optimization</a></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/case-studies">Case Studies</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- /.navbar-collapse --> */}
                    </div>

                </nav>
                {/* <!-- End Navigation --> */}

            </header>
            {/* <!-- End Header --> */}
        </div>
    );
}

export default header;
