import "../styles/home.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";

const Home=()=>{
    return(
        <div className="home">
            <Nav />
            <HomeTop />
            <Parteners />
        </div>
    )
}
export default Home;