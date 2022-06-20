import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a href="https://linkedin.com/in/jamesxu1996" target="_blank">
				<BsLinkedin />
			</a>
		</div>
		<div>
			<a href="https://github.com/jamesxu1996" target="_blank">
				<BsGithub />
			</a>
		</div>
	</div>
);

export default SocialMedia;
