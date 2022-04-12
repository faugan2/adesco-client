import "../styles/home.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";

const Home=()=>{
    return(
        <div className="home">
            <Nav />
            <HomeTop />
        </div>
    )
}
export default Home;