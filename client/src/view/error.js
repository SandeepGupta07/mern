import react from "react";
import {NavLink} from "react-router-dom";


function error ()
{
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
                    <h1>Error Page</h1>
                    <ul className="breadcrumb">
                        <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                        <li><a href="#">Pages</a></li>
                        <li className="active">404</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Breadcrumb --> */}

    {/* <!-- Start 404 ============================================= --> */}
    <div className="error-page-area default-padding">
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-6 thumb">
                    <img src="assets/img/illustration/404.png" alt="Thumb"/>
                </div>
                <div className="col-lg-6">
                    <div className="error-box">
                        <h2>Sorry Page Was Not Found!</h2>
                        <p>
                            Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous.
                        </p>
                        <NavLink className="btn circle btn-md btn-gradient" to="/">Back to home</ NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End 404 --> */}
        </>
    );
}

export default error;