const AppFooter = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>L' Occitanerie</div>
        <div>Ferme pédagogique</div>
        <div>669 chemin des camparnals</div>
        <div>31340 le born</div>
      </div>
      <div className="footer-container">
        <div>Association loi 1901</div>
        <div>SIRET: 852 345 987 00012</div>
        <a
          className="facebook-link"
          href="https://www.facebook.com/Loccitanerie"
        >
          Page Facebook
        </a>
        <a
          className="facebook-link"
          href="https://www.instagram.com/l.occit.anerie"
        >
          Page Instagram
        </a>
      </div>
    </div>
  );
};

export default AppFooter;
