function Footer() {
  return (
    <div className="footer">
      <div className="footer-container ">
        <div className="row">
          <div className="col-md-4 left d-flex align-items-center">
            <div className="social">
              <span class="f-social">
                <a
                  href="https://facebook.com/tegar7jr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </span>

              <span class="f-social">
                <a
                  href="https://twitter.com/kaktegar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </span>
              <span class="f-social">
                <a
                  href="https://facebook.com/tegar7jr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </span>
              <span class="f-social">
                <a
                  href="https://instagram.com/kaktegar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-4 mid text-center d-flex align-items-center justify-content-center">
            <span>Portofolio</span>
          </div>
          <div className="col-md-4 right d-flex align-items-center justify-content-end">
            <div className="copyright text-end">
              <span>
                Copyright © 2022
                <span className="name">&nbsp;Tegar Saputra</span>
                <br />
                tegaracs.ti@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
