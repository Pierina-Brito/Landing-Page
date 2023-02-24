import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
								<Card
									imageUrl="https://www.travelandleisure.com/thmb/w7OGjF3_ATF4UsrLJEocVhhphII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cameron-river-yellowknife-canada-northern-lights_CANORTHERNLIGHTS1122-0178607e73de44d8a0ba3e57ac32d824.jpg"
									cardTitle="Yukon, Canada"
									cardDescription="If you're hoping to see the northern lights, you might want to add Canada to the top of your travel list. As one of the northernmost countries in the world, Canada is home to regions that see the northern lights an average of 240 times a year. Technically, the northern lights are active all year round, but you might not always be able to see them. 
									The best time to see the northern lights in Canada is from September to March when there's enough darkness at night to view them."
									buttonUrl="https://www.travelyukon.com/en/things-to-do/article/northern-lights"
									buttonLabel="Oficial Page"
								/>
							</div>
							<div className="col-xl-3 col-md-4 col-lg-3">
									<Card 
									imageUrl="https://capturetheatlas.com/wp-content/uploads/2022/01/Northern-Lights-in-Finland-with-forest.jpg"
									cardTitle="Rovaniemi, Finland"
									cardDescription="Rovaniemi is known as the capital of Lapland, Finland. It is located on the Arctic Circle and notably known as the home of Santa Claus, where the magic of Lapland, arctic nature with excellent services are in the same city. During the day, the more adventurous visitors enjoy snowmobiling through the Arctic or guiding a team of huskies on a dog sledding experience that will pump up their adrenaline.
									However, at night, the real magic of the Arctic comes alive with the Aurora Borealis."
									buttonUrl="https://www.visitfinland.com/en/"
									buttonLabel="Oficial Page"
								/>
							</div>
							<div className="col-xl-3 col-md-4 col-lg-3">
								<Card
									imageUrl="https://travel2next.com/wp-content/uploads/southern-lights-tasmania-11.jpg"
									cardTitle="Tasmania, Australia"
									cardDescription="We always hear about the amazing ‘Northern Lights’, but did you know you can experience exactly the same phenomenon – the Aurora Australis – in Tasmania? Because of its distance from the south pole it is a little bit harder to see the Aurora Australis in Tasmania, but when the conditions are right the light show is spectacular!
									The reason the Northern Lights are often talked about more than the Southern Lights, is because there are far more vantage points accessible to see the Northern Lights"
									buttonUrl="https://lapoftasmania.com.au/southern-lights-in-tasmania/"
									buttonLabel="Oficial Page"
								/>
							</div>
							<div className="col-xl-3 col-md-4 col-lg-3">
								<Card
									imageUrl="https://images.rove.me/w_1920,q_85/kixro8os7cz1iedrqdqd/greenland-northern-lights.jpg"
									cardTitle="Greenland"
									cardDescription="Although winter in Greenland is long, dark, and cold, there is literally a bright side to it. Due to the country's small population and hence minimal light pollution, the island is considered the best place on the planet to view the northern lights or aurora borealis dancing over the night skies. Northern Lights in Greenland can be observed from end of August to beginning of April, but especially deep 
									in the winter. If you are travelling to Greenland during that time you have great chances of seeing these multicoloured lights dancing through an arctic night."
									buttonUrl="https://rove.me/to/greenland/northern-lights"
									buttonLabel="Oficial Page"
								/>
							</div>
						</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with ❤️ using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;