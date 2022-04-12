import "../styles/home_top.scss";
import "../styles/home_top_mobile.scss";
import banner from "./img/banner.webp";
import AirplayIcon from '@material-ui/icons/Airplay';
const HomeTop=()=>{
    return(
        <div className="home_top" style={{backgroundImage:`url(${banner})`,backgroundRepeat: 'no-repeat',}}>
            <div className="top">
                <h1></h1>
                <h1 className="content">BIENVENUE CHEZ CCM EXPRESS</h1>
            </div>
            <div className="center">
                <div></div>
                <div className="content">
                    <h2>titre de ce que nous faisons</h2>
                    <button>first button
                        <div>
                            <AirplayIcon  />
                        </div>
                    </button>
                    <div>
                        <button>button2
                        <div>
                            <AirplayIcon  />
                        </div>
                        </button>
                        <button>button3
                        <div>
                            <AirplayIcon  />
                        </div>
                        </button>
                        <button>button4
                        <div>
                            <AirplayIcon  />
                        </div>
                        </button>
                        <button>button5
                        <div>
                            <AirplayIcon  />
                        </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>Quelle assurance recherchez-vous ?</h2>
                    <select>
                        <option>Particulier</option>
                    </select>
                    <select>
                        <option>choisir</option>
                    </select>
                    <button>Nous conacter</button>
                </div>
                
            </div>
        </div>
    );
}

export default HomeTop;