import "./style.css";
import logo from "../../assets/icons/logo.svg";
import wppicon from "../../assets/icons/whatsapp.png";
import emailicon from "../../assets/icons/email.png";
import instagramicon from "../../assets/icons/instagram.png";

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Text__footer">Footer©</p>
      <img className="Logo__footer" src={logo} alt="Logo El Geladon" />
      <div className="Icons">
        <img className="Wpp__icon" src={wppicon} alt="Icon Whatsapp" />
        <img className="Email__icon" src={instagramicon} alt="Icon Instagram" />
        <img className="Instagram__icon" src={emailicon} alt="Icon Email" />
      </div>
    </div>
  );
};

export default Footer;
