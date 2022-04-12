import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import {Link} from "react-router-dom";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="content">
                <div>
                    <h4>titre</h4>
                    <ul>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>titre</h4>
                    <ul>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>titre</h4>
                    <ul>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>titre</h4>
                    <ul>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                        <li><Link to="/"><a>Lien</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;