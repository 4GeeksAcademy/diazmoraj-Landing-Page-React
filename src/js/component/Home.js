import React from "react";

import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import { array } from "prop-types";

const Home = () => {
	let data = [
		{title: "Crazy Dog", 
		url: "https://w0.peakpx.com/wallpaper/445/263/HD-wallpaper-crazy-dog-funny-crazy-animals-dogs.jpg", 
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corporis aspernatur doloribus eveniet rem provident."},
		{title: "Smart Home", 
		url: "https://www.securitysales.com/wp-content/uploads/2020/09/smart-home_small.jpg", 
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corporis aspernatur doloribus eveniet rem provident."},
		{title: "Motocross", 
		url: "https://galfer.eu/moto/wp-content/uploads/sites/2/mz26635-500x300-c-default.jpg", 
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corporis aspernatur doloribus eveniet rem provident."},
		{title: "Sunset", 
		url: "https://as1.ftcdn.net/v2/jpg/02/98/03/66/500_F_298036661_9mqlHxn0vh6pVmrzFxBu31vTGqY7GTYF.jpg", 
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur corporis aspernatur doloribus eveniet rem provident."}
	]
	return (
		<>
			<Navbar />
			<div className="container">
				<div className="text-center">
					<Jumbotron />
				</div>
				<div className="d-md-inline-flex">
					{data.map((value, index, array) => {
						return <Card key={index} title={value.title} url={value.url} description={value.description}/>
					})}
				</div>
			</div>
		</>
	);
};

export default Home;
