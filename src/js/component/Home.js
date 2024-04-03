import React from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home = () => {
	
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="text-center">
					<Jumbotron />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Home;
