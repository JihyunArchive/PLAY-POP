import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="footer-content">
        <div className="footer-links" />
        <div className="footer-links1">
          <div className="link-items-parent">
            <div className="link-items">
              <div className="div47">브랜드 홈페이지 바로가기</div>
            </div>
            <img
              className="expand-right-icon"
              loading="lazy"
              alt=""
              src="/PopUpPage_right.svg"
            />
          </div>
        </div>
        <div className="footer-links2" />
        <div className="footer-links3">
          <div className="frame-parent">
            <div className="sns-wrapper">
              <div className="sns">SNS 바로가기</div>
            </div>
            <img
              className="expand-right-icon1"
              alt=""
              src="/PopUpPage_right.svg"
            />
          </div>
        </div>
        <div className="footer-links4" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
