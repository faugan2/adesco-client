import "../styles/home.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
const Home=()=>{
    return(
        <div className="home">
            <Nav />
            <HomeTop />
            <Parteners />
            <Engagements />
            <Who />
        </div>
    )
}
export default Home;