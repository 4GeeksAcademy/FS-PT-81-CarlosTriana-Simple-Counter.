import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Card } from "./card";
import { Icono } from "./icono";

//create your first component
const Home = ({ uno, dos, tres, cuatro, cinco, seis, siete }) => {
	return (
		<div className="text-center d-flex justify-content-center align-items-center vh-100 w-100">
			<div className="d-flex justify-content-center align-items-center">
				<Icono />
				<Card digit={siete} />
				<Card digit={seis} />
				<Card digit={cinco} />
				<Card digit={cuatro} />
				<Card digit={tres} />
				<Card digit={dos} />
				<Card digit={uno} />
			</div>
		</div>
	);
};

export default Home;
