import "../styles/une.scss";
import "../styles/une_mobile.scss";
import banner from "./img/banner.webp";

const Une=()=>{
    return(
        <div className="une">
            <div className="top">
                <h1>A la une de l'assurance</h1>
                <h2>Actus et astuces pour en savoir plus.</h2>
                
            </div>
            <div className="content">
                <div>
                    <img src={banner} />
                    <h2>Assurance auto pas chere</h2>
                    <p>Notre société spécialisée dans le courtage en assurance est l’intermédiaire ...</p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Assurance auto pas chere</h2>
                    <p>Notre société spécialisée dans le courtage en assurance est l’intermédiaire ...</p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Assurance auto pas chere</h2>
                    <p>Notre société spécialisée dans le courtage en assurance est l’intermédiaire ...</p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Assurance auto pas chere</h2>
                    <p>Notre société spécialisée dans le courtage en assurance est l’intermédiaire ...</p>
                </div>
            </div>
        </div>
    );
}
export default Une;