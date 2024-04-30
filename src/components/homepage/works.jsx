import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
					 
						<div className="work">
							<img
								src="./concentrix_logo.jpeg"
								alt="concentrix"
								className="work-image"
							/>
							<div className="work-title">Concentrix</div>
							<div className="work-subtitle">
								Customer Service Representative
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
						<div className="work">
							<img
								src="./earls.png"
								alt="earls"
								className="work-image"
							/>
							<div className="work-title">Earls</div>
							<div className="work-subtitle">
								Cook
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>


					</div>

				}

			/>
		</div>
	);
};

export default Works;
