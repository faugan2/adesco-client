import "../styles/informer.scss";
import "../styles/informer_mobile.scss";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Informer=()=>{
    return(
        <div className="informer">
            <div className="top">
                <button>
                    <MenuBookIcon />
                </button>
                <h1>Nous vous informons <hr /></h1>
                <button className="btn_all">
                    <MoreHorizIcon style={{color:"white"}}/>
                    <span>
                    Toutes les actualités de l'assurance</span>
                </button>
            </div>
            <div className="content">
                <div>
                    <div>
                        <button>08/04/2020</button>
                        <h3>ues pharmaciens d’officine pourront prochainement administrer tous les vaccins</h3>
                    </div>
                    <p>
                    Après le vaccin contre la grippe et le Covid-19, 
                    les pharmaciens seront bientôt habilités à administrer la quasi-totalité des vaccins. Cette avancée ...
                    </p>
                </div>

                <div>
                    <div>
                        <button>08/04/2020</button>
                        <h3>ues pharmaciens d’officine pourront prochainement administrer tous les vaccins</h3>
                    </div>
                    <p>
                    Après le vaccin contre la grippe et le Covid-19, 
                    les pharmaciens seront bientôt habilités à administrer la quasi-totalité des vaccins. Cette avancée ...
                    </p>
                </div>
                <div>
                    <div>
                        <button>08/04/2020</button>
                        <h3>ues pharmaciens d’officine pourront prochainement administrer tous les vaccins</h3>
                    </div>
                    <p>
                    Après le vaccin contre la grippe et le Covid-19, 
                    les pharmaciens seront bientôt habilités à administrer la quasi-totalité des vaccins. Cette avancée ...
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Informer;