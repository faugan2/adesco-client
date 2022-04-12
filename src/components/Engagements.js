import "../styles/engagements.scss";
import "../styles/engagements_mobile.scss";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessIcon from '@material-ui/icons/Business';
const Engagements=()=>{
    return(
        <div className="engagements">
            <div className="top">
                <h2>Nos engagements</h2>
            </div>
            <div className="content">
                <div>
                    <AssignmentTurnedInIcon />
                    <p>Votre fidélité récompensée</p>
                </div>


                <div>
                    <GroupWorkIcon />
                    <p>Notre équipe à votre écoute</p>
                </div>

                <div>
                    <AccountBoxIcon />
                    <p>Des assurances adaptées à vos besoins</p>
                </div>

                <div>
                    <BusinessIcon />
                    <p>Notre professionnalisme, gage de votre confiance</p>
                </div>
            </div>
        </div>
    );
}
export default Engagements;