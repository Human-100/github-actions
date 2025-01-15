
import "./home.css"
// import { Link } from 'react-router-dom';





const Home = () => {

    return (
        <>

            <div className="containers">
            <h3>Instructions:</h3>
            <ol>
                <li>Be Respectful or You will Be Blocked</li>
                <li>Use Chrome Or Brave Browser</li>
                <li>Click On the Listen Button For Jhelum To Listen (You can Correct it As many Times as You like) and Then Click the Flow Button And Wait for the Response.</li>
                <li>The Response might take 5-30 Seconds Depending on the Load of Users on The Server.</li>
                <li>Jhelum Supports English & Hindi Languages.</li>
                <li>As it is My Personal Project & No Company Is Backing it My Server's Capabilities are Limited So try Not to Overload The Usage. </li>
            </ol>

            {/* <Link  to="/Jhelum" className="link">
            <button className="start">
            Start
        </button></Link> */}


            </div>


        </>
    );


};
export default Home;

