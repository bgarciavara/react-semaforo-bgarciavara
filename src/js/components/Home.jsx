
import TrafficLight from "./TrafficLight";
import "../../styles/TrafficLight.css"; 



//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <TrafficLight/>
		</div>
	);
};

export default Home;