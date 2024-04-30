import React from "react";

function article_1() {
	return {
		
		title: "Generative AI",
		description:
			"Generative AI fascinates me with its ability to create new content and generate realistic outputs, ranging from art and music to text and images. Exploring deep learning models like GANs and variational autoencoders allows me to delve into the creative potential of artificial intelligence.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		
		title: "Machine Learning",
		description:
			"I have a keen interest in machine learning and its applications in various fields. From predictive analytics to computer vision and natural language processing. I enjoy exploring algorithms and techniques to extract insights from data and build intelligent systems.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
