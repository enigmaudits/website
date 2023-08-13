import { LogoHorizontal } from "../Logo";

import './Header.css';

const Header = () => (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      color-on-scroll="100"
    >
      <div className="container">
        <div className="navbar-translate">
          <a
            className="navbar-brand"
            href="/"
            rel="tooltip"
            title=""
            data-placement="bottom"
            target="_blank"
            data-original-title="Designed and Coded by Creative Tim"
          >
            <LogoHorizontal className="header-logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a>
                  Prices
                </a>
              </div>
              <div className="col-6 collapse-close text-right">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="tim-icons icon-simple-remove"></i>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href=""
                target="_blank"
                data-original-title="Follow us on Twitter"
              >
                <i className="fab fa-twitter"></i>
                <p className="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href=""
                target="_blank"
                data-original-title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square"></i>
                <p className="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
            <li className="nav-item p-0">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href=""
                target="_blank"
                data-original-title="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
                <p className="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#why-we"
              >
                Why we?
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener"
                href="https://forms.gle/QScihyf6DUJgoPCZ6"
              >
                Have an issue?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Header;