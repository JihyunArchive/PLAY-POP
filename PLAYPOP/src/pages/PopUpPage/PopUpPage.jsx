import React from 'react';
import Page from '../../components/Page';
import Main from '../../components/Main';
import FrameComponent from '../../components/FrameComponent';
import Footer from '../../components/Footer';
import './PopUpPage.css';

const PopUpPage = () => {
  return (
    <div className="div">
      <img className="child" alt="" src="/ellipse-57@2x.png" />
      <div className="item" />
      <b className="b">#깔끔해요</b>
      <b className="b1">#이색 데이트</b>
      <Page />
      <main className="content">
        <section className="body">
          <Main />
          <div className="gallery">
            <div className="gallery-wrapper">
              <div className="gallery-title">
                <h3 className="h3">상세 이미지</h3>
              </div>
              <img
                className="gallery-image-icon"
                loading="lazy"
                alt=""
                src="/PopUpPage_post1.png"
              />
            </div>
          </div>
          <div className="image-container">
            <div className="images">
              <img
                className="image-pair-icon"
                loading="lazy"
                alt=""
                src="/PopUpPage_post2.png"
              />
              <img
                className="image-pair-icon1"
                loading="lazy"
                alt=""
                src="/PopUpPage_post3.png"
              />
            </div>
          </div>
          <div className="separator">
            <div className="separator-child" />
          </div>
          <div className="info-container-wrapper">
            <div className="info-container">
              <h3 className="h31">위치 정보</h3>
              <div className="details">
                <div className="details-container">
                  <div className="details-wrapper">
                    <div className="image-2-parent">
                      <img
                        className="image-2-icon"
                        alt=""
                        src="/image-2@2x.png"
                      />
                      <div className="title-elements">
                        <img
                          className="pin-duotone-line-icon"
                          loading="lazy"
                          alt=""
                          src="/PopUpPage_mapPing.png"
                        />
                      </div>
                      <div className="location-info">
                        <div className="location-container">
                          <div className="location-container-child" />
                          <div className="location-wrapper">
                            <b className="b2">해리포터가 돌아왔다</b>
                          </div>
                          <div className="blank">2024/06/23~2024/09/03</div>
                        </div>
                      </div>
                      <div className="title-elements1">
                        <img
                          className="pin-duotone-line-icon1"
                          alt=""
                          src="/PopUpPage_redPin.png"
                        />
                      </div>
                      <img
                        className="frame-child"
                        loading="lazy"
                        alt=""
                        src="/PopUpPage_mapTry.svg"
                      />
                    </div>
                  </div>
                  <div className="address">
                    <img
                      className="pin-alt-fill-icon"
                      alt=""
                      src="/PopUpPage_mapPin.png"
                    />
                    <div className="location">
                      <div className="div1">
                        서울 영등포구 여의대로 108 더현대 서울
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default PopUpPage;
