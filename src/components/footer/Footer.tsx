import logo from "../../assets/icons/main-logo.svg";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>
            Öğrencilerin sınav, stres ve motivasyon gibi konularda profesyonel
            destek alabileceği, psikolog ve eğitim koçlarıyla birebir görüşme
            imkânı sunan yenilikçi bir mentorluk platformuyuz.
          </p>
        </div>
        <div className="links">
          <h4>KEŞFET</h4>
          <a href="#">Anasayfa</a>
          <a href="#">Hakkımızda</a>
          <a href="#">Blog</a>
          <a href="#">İletişim</a>
          <a href="#">Gizlilik&Politikalar</a>
        </div>
        <div className="contact">
          <div>
            <h4>BİZE ULAŞIN</h4>
            <p>instagram | youtube | linkedIn</p>
            <p>pratikkoc@info.com</p>
          </div>
          <div className="copyright">@2025 Tüm hakları saklıdır.</div>
        </div>
      </div>
    </div>
  );
}
