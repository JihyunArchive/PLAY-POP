import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className = "" }) => {
  return (
    <header className={`page ${className}`}>
      <div className="page-child" />
      <div className="background-parent">
        <div className="background" />
        <div className="menu-parent">
          <img className="menu-icon" loading="lazy" alt="" src="/PopUpPage_menu.svg" />
          <a className="play-pop">
            <span className="play-pop-txt">
              <span className="p">P</span>
              <span className="l">L</span>
              <span className="a">A</span>
              <span>Y</span>
              <span className="span">-</span>
              <span>P</span>
              <span className="o">O</span>
              <span>P</span>
            </span>
          </a>
        </div>
        <div className="frame-wrapper">
          <div className="search-parent">
            <img
              className="search-icon"
              loading="lazy"
              alt=""
              src="/PopUpPage_search.svg"
            />
            <img
              className="favorite-icon"
              loading="lazy"
              alt=""
              src="/PopUpPage_favorite.svg"
            />
            <img className="bell-icon" loading="lazy" alt="" src="/PopUpPage_bell.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
