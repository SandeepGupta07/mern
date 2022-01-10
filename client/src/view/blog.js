import react from "react";

function blog() {
    return (
        <>
            {/* <!-- Start Breadcrumb ============================================= --> */}
            <div className="breadcrumb-area bg-gradient text-center">
                {/* <!-- Fixed BG --> */}
                <div className="fixed-bg"></div>
                {/* <!-- Fixed BG --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Blog Grid</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li><a href="#">Blog</a></li>
                                <li className="active">Grid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Breadcrumb --> */}

            {/* <!-- Start Blog ============================================= --> */}
            <div className="blog-area full-blog blog-standard full-blog grid-colum default-padding">
                <div className="container">
                    <div className="blog-items content-less">
                        <div className="blog-content">
                            <div className="blog-item-box">
                                <div className="row">
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="500ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/1.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">Performance</a>
                                                    <a href="#">High</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 05 Dec, 2020</li>
                                                        <li>By <a href="#">Park Lee</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Lasting out end article express fortune demands own charmed</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="600ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/2.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">Affiliate</a>
                                                    <a href="#">Process</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 26 Sep, 2020</li>
                                                        <li>By <a href="#">Park Lee</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Surprise steepest recurred landlord mr wandered amounted of.</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="700ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/3.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">SEO</a>
                                                    <a href="#">Analysis</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 18 Nov, 2020</li>
                                                        <li>By <a href="#">Park Lee</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Old insipidity motionless continuing law shy partiality.</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="500ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/5.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">Progress</a>
                                                    <a href="#">Web</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 30 Dec, 2020</li>
                                                        <li>By <a href="#">John</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Inquietude simplicity terminated she compliment remarkably</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="600ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/6.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">Performance</a>
                                                    <a href="#">High</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 05 Dec, 2020</li>
                                                        <li>By <a href="#">Park Lee</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Lasting out end article express fortune demands own charmed</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                    {/* <!-- Single Item --> */}
                                    <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item wow fadeInUp" data-wow-delay="700ms">
                                            <div className="thumb">
                                                <a href="#">
                                                    <img src="assets/img/blog/1.jpg" alt="Thumb" />
                                                </a>
                                            </div>
                                            <div className="info">
                                                <div className="tags">
                                                    <a href="#">Affiliate</a>
                                                    <a href="#">Process</a>
                                                </div>
                                                <div className="meta">
                                                    <ul>
                                                        <li><i className="fas fa-calendar-alt"></i> 26 Sep, 2020</li>
                                                        <li>By <a href="#">Park Lee</a></li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#">Surprise steepest recurred landlord mr wandered amounted of.</a>
                                                </h4>
                                                <a className="btn circle btn-sm btn-gradient" href="#"><i className="fas fa-angle-right"></i> Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Item --> */}
                                </div>

                                {/* <!-- Pagination --> */}
                                <div className="row">
                                    <div className="col-md-12 pagi-area text-center">
                                        <nav aria-label="navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Blog --> */}
        </>
    );
}

export default blog;