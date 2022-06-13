import "./style.css";
import logo from "../../assets/icons/logo.svg";
import wppicon from "../../assets/icons/whatsapp.png";
import linkedinicon from "../../assets/icons/linkedin.png";
import githubicon from "../../assets/icons/github.png";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Text__footer">Footer©</p>
      <img className="Logo__footer" src={logo} alt="Logo El Geladon" />
      <div className="Icons">
        <img className="Wpp__icon" src={wppicon} alt="Icon Whatsapp" />
        <img className="Linkedin__icon" src={linkedinicon} alt="Icon Email" />
        <img className="Github__icon" src={githubicon} alt="Icon Email" />
      </div>
    </div>
  );
};

export default Footer;
