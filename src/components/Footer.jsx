import socmed from "../data/socmed";

function Footer() {
  return (
    <div id="footer">
      <footer className="footer animate-bottom footer-icon">
        <div>
          <ul>
            {socmed.map((socmedDatum, index) => {
              return (
                <li key={index}>
                  <a href={socmedDatum.link}>
                    <i className={`fa fa-${socmedDatum.type}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;