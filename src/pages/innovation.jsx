

import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";


const Innovation = () => {

    const currentSEO = SEO.find((item) => item.page === "innovations");
  return (
    <React.Fragment>
        <Helmet>
				<title>{`innovations | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
        </Helmet>
        <div className="page-content">

            <NavBar active="innovation" />
            <div className="content-wrapper">
               
               

                <div className="page-footer">
                    <Footer />
                </div>

            </div>




        </div>



    </React.Fragment>
  );
}

export default Innovation;