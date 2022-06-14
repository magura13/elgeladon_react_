import "./style.css";
import logo from "../../assets/icons/logo.svg";
import wppicon from "../../assets/icons/whatsapp.png";
import linkedinicon from "../../assets/icons/linkedin.png";
import githubicon from "../../assets/icons/github.png";
import {toast} from "react-hot-toast"

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Text__footer">Footer©</p>
      <img className="Logo__footer" src={logo} alt="Logo El Geladon" />
      <div className="Icons">
        <img onClick={() => toast.error("Sessão em desenvolvimento")} className="Wpp__icon" src={wppicon} alt="Icon Whatsapp" />
        <img onClick={() => toast.error("Sessão em desenvolvimento")} className="Linkedin__icon" src={linkedinicon} alt="Icon Email" />
        <img onClick={() => toast.error("Sessão em desenvolvimento")} className="Github__icon" src={githubicon} alt="Icon Email" />
      </div>
    </div>
  );
};

export default Footer;
