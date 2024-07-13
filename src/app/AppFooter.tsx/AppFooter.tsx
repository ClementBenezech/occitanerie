import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppFooter = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>Ferme pédagogique L’Occit’Ânerie</p>
        <p>Association loi 1901</p>
        <p>31340 le born</p>
        <p>06.71.25.00.21</p>
        <p>SIRET: 897 734 919 00029</p>
      </div>
      <div className="footer-container">
        <div className="social-networks">
          <a
            className="facebook-link"
            href="https://www.facebook.com/Loccitanerie"
          >
            <FontAwesomeIcon className="app-footer__icon" icon={faFacebook} />
            Facebook
          </a>
          <a
            className="facebook-link"
            href="https://www.instagram.com/loccitanerie_ferme_pedagogique"
          >
            <FontAwesomeIcon className="app-footer__icon" icon={faInstagram} />
            Instagram
          </a>
          <a className="facebook-link" href="mailto:loccitanerie@gmail.com">
            <FontAwesomeIcon className="app-footer__icon" icon={faAt} />
            Ecrivez nous!
          </a>
          <a className="creditsLink" href="https://clementbenezech.vercel.app/">
            Design & developpement: Clement Benezech
          </a>
        </div>
      </div>

      {/*<a href="https://www.flaticon.com/free-icons/donkey" title="donkey icons">
        Favicon created by Freepik - Flaticon
  </a>*/}
    </div>
  );
};

export default AppFooter;
