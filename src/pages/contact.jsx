import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
			
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>
						<div className="contact-list">
							<div className="contact-element">
								<div className="contact-icon">
									<img 
										src="https://img.icons8.com/ios/50/000000/phone.png" 
										alt="phone" 
										
									/>
									
								</div>
								<div>
									<p>403.493.3371</p>
								</div>
							
							</div>
							<div className="contact-element">
								<div className="contact-icon">
									<img 
										src="https://img.icons8.com/ios/50/000000/email.png" 
										alt="email" 
										
									/>
								</div>
								<div>
									<p> Yassinenali01@gmail.com</p>
								</div>
							</div>
							<div className="contact-element">
								<div className="contact-icon">
									<img 
										src="https://img.icons8.com/ios/50/000000/address.png" 
										alt="address" 
										
									/>
								</div>
								<div>
									<p>Calgary, AB, Canada</p>
								</div>
							</div>

						</div>

						<div className="subtitle contact-subtitle">
							
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
