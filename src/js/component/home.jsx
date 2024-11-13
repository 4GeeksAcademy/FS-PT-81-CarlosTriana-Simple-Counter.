import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Card } from "./card";

//create your first component
const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center">
			<Card digit={0} />
			<Card digit={0} />
			<Card digit={0} />
			<Card digit={0} />
			<Card digit={0} />
			<Card digit={0} />
			<Card digit={0} />
		</div>
	);
};

export default Home;
