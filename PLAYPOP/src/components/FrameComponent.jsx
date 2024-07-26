import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`review-header-wrapper ${className}`}>
      <div className="review-header">
        <div className="review-title">
          <div className="write-review">
            <div className="write">
              <div className="write-button">
                <div className="review-count">
                  <h3 className="h33">후기</h3>
                  <div className="counter">5</div>
                </div>
                <div className="review-form">
                  <div className="rating">
                    <div className="stars">
                      <img
                        className="star-fill-icon"
                        loading="lazy"
                        alt=""
                        src="/PopUpPage_reviewStar.svg"
                      />
                    </div>
                    <b className="rating-value">
                      <span>{`4.8 `}</span>
                      <span className="span1">/ 5</span>
                    </b>
                  </div>
                </div>
              </div>
              <div className="submit-review">
                <div className="submit-button">
                  <div className="div13" />
                  <b className="b8">글쓰기</b>
                  <div className="submit-icon">
                    <img className="icon" alt="" src="/PopUpPage_writeIcon.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-details">
            <div className="separator1" />
            <img
              className="divider-icon"
              loading="lazy"
              alt=""
              src="/PopUpPage_face.png"
            />
            <input className="expand-left" type="checkbox" />
            <div className="line-parent">
              <div className="frame-item" />
              <div className="div14">{`전체보기 `}</div>
              <div className="div15">2024.06.24</div>
              <img className="star-fill-icon1" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon2" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon3" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon4" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon5" alt="" src="/PopUpPage_fillStart.png" />
              <img
                className="frame-inner"
                alt=""
                src="/PopUpPage_review1.png"
              />
              <b className="b9">우와아아 정말 재밌었어요~~</b>
              <b className="b10">댓글 0</b>
              <b className="test">test</b>
              <img
                className="rectangle-icon"
                alt=""
                src="/rectangle-3969@2x.png"
              />
              <b className="b11">
                <span>
                  <p className="p6">분위기가 조아여 아주 굿</p>
                  <p className="p7">굿굿</p>
                  <p className="p8">굿</p>
                </span>
              </b>
              <b className="b12">#깔끔해요</b>
              <b className="b13">#이색 데이트</b>
              <img className="chat-icon" alt="" src="/chat.svg" />
              <div className="div16">2024.06.24</div>
              <img className="star-fill-icon6" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon7" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon8" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon9" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon10" alt="" src="/PopUpPage_fillStart.png" />
              <img
                className="frame-child1"
                alt=""
                src="/PopUpPage_review2.png"
              />
              <b className="b14">우와아아 정말 재밌었어요~~</b>
              <b className="b15">댓글 0</b>
              <b className="test1">test</b>
              <img className="ellipse-icon" alt="" src="/ellipse-57@2x.png" />
              <b className="b16">#깔끔해요</b>
              <b className="b17">#이색 데이트</b>
              <img className="chat-icon1" alt="" src="/chat.svg" />
              <div className="div17">2024.06.24</div>
              <img className="star-fill-icon11" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon12" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon13" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon14" alt="" src="/PopUpPage_fillStart.pngg" />
              <img className="star-fill-icon15" alt="" src="/PopUpPage_fillStart.png" />
              <b className="b18">댓글 0</b>
              <b className="test2">test</b>
              <div className="rectangle-div" />
              <img className="chat-icon2" alt="" src="/chat.svg" />
              <div className="div18">2024.06.24</div>
              <img className="star-fill-icon16" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon17" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon18" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon19" alt="" src="/PopUpPage_fillStart.png" />
              <img className="star-fill-icon20" alt="" src="/PopUpPage_fillStart.png" />
              <b className="b19">댓글 0</b>
              <b className="test3">test</b>
              <img className="frame-child2" alt="" src="/ellipse-57@2x.png" />
              <div className="frame-child3" />
              <div className="frame-child4" />
              <b className="b20">#신기해요</b>
              <b className="b21">#충동구매</b>
              <img className="chat-icon3" alt="" src="/chat.svg" />
              <div className="frame-child5" />
              <div className="fields">
                <div className="my-rating-wrapper">
                  <div className="my-rating">
                    <h3 className="h34">나의 별점</h3>
                    <div className="star-rating">
                      <div className="star-icons">
                        <img
                          className="star-icon"
                          loading="lazy"
                          alt=""
                          src="/PopUpPage_star5.svg"
                        />
                        <img className="star-icon1" alt="" src="/PopUpPage_star5.svg" />
                        <img className="star-icon2" alt="" src="/PopUpPage_star5.svg" />
                        <img className="star-icon3" alt="" src="/PopUpPage_star5.svg" />
                        <img className="star-icon4" alt="" src="/PopUpPage_star5.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fields-inner">
                  <div className="line-div" />
                </div>
                <div className="tags">
                  <div className="tag-list">
                    <h3 className="h35">태그</h3>
                    <div className="tag-items">
                      <div className="item1">
                        <div className="item-child" />
                        <div className="div19">#깔끔해요</div>
                      </div>
                      <div className="item2">
                        <div className="item-item" />
                        <div className="div20">#깔끔해요</div>
                      </div>
                      <div className="item3">
                        <div className="item-inner" />
                        <div className="div21">#깔끔해요</div>
                      </div>
                      <div className="item4">
                        <div className="item-child1" />
                        <div className="div22">#깔끔해요</div>
                      </div>
                      <div className="item5">
                        <div className="item-child2" />
                        <div className="div23">#깔끔해요</div>
                      </div>
                      <div className="item6">
                        <div className="item-child3" />
                        <div className="div24">#깔끔해요</div>
                      </div>
                      <div className="item7">
                        <div className="item-child4" />
                        <div className="div25">#깔끔해요</div>
                      </div>
                      <div className="item8">
                        <div className="item-child5" />
                        <div className="div26">#깔끔해요</div>
                      </div>
                      <div className="item9">
                        <div className="item-child6" />
                        <div className="div27">#깔끔해요</div>
                      </div>
                      <div className="item10">
                        <div className="item-child7" />
                        <div className="div28">#깔끔해요</div>
                      </div>
                      <div className="item11">
                        <div className="item-child8" />
                        <div className="div29">#깔끔해요</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="more-tag-items">
                  <div className="more-items">
                    <div className="items">
                      <div className="items-child" />
                      <div className="div30">#깔끔해요</div>
                    </div>
                    <div className="items1">
                      <div className="items-item" />
                      <div className="div31">#깔끔해요</div>
                    </div>
                    <div className="items2">
                      <div className="items-inner" />
                      <div className="div32">#깔끔해요</div>
                    </div>
                    <div className="items3">
                      <div className="items-child1" />
                      <div className="div33">#깔끔해요</div>
                    </div>
                    <div className="items4">
                      <div className="items-child2" />
                      <div className="div34">#깔끔해요</div>
                    </div>
                    <div className="items5">
                      <div className="items-child3" />
                      <div className="div35">#깔끔해요</div>
                    </div>
                    <div className="items6">
                      <div className="items-child4" />
                      <div className="div36">#깔끔해요</div>
                    </div>
                    <div className="items7">
                      <div className="items-child5" />
                      <div className="div37">#깔끔해요</div>
                    </div>
                    <div className="items8">
                      <div className="items-child6" />
                      <div className="div38">#깔끔해요</div>
                    </div>
                    <div className="items9">
                      <div className="items-child7" />
                      <div className="div39">#깔끔해요</div>
                    </div>
                    <div className="items10">
                      <div className="items-child8" />
                      <div className="div40">#깔끔해요</div>
                    </div>
                  </div>
                </div>
                <div className="field-labels">
                  <h3 className="h36">제목</h3>
                </div>
                <div className="vertical-separator">
                  <img
                    className="vertical-separator-child"
                    alt=""
                    src="/PopUpPage_postLine.svg"
                  />
                </div>
                <div className="field-labels1">
                  <h3 className="h37">내용</h3>
                </div>
              </div>
              <div className="image-upload">
                <div className="image-upload-inner">
                  <div className="frame-child6" />
                </div>
                <div className="upload-button">
                  <div className="upload-area">
                    <button className="camera-area">
                      <div className="div41" />
                      <div className="camera-icon">
                        <img
                          className="camera-fill-icon"
                          alt=""
                          src="/PopUpPage_postCamera.png"
                        />
                      </div>
                      <b className="b22">사진 첨부하기</b>
                    </button>
                  </div>
                  <div className="register-review">
                    <div className="div42" />
                    <b className="b23">리뷰 등록하기</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="similar-popups">
          <h3 className="h38">비슷한 팝업 스토어</h3>
          <div className="similar-list">
            <div className="popup-container">
              <div className="popup">
                <img
                  className="popup-background-icon"
                  loading="lazy"
                  alt=""
                  src="/PopUpPage_weatherPost.png"
                />
                <div className="popup-content">
                  <div className="title-container1">
                    <b className="b24">날씨의 아이</b>
                    <div className="frame">
                      <b className="b25">2019/03/25~2024/07/21</b>
                    </div>
                    <div className="location-container1">
                      <div className="pin-container">
                        <div className="pin-icon-container">
                          <img
                            className="pin-alt-fill-icon2"
                            alt=""
                            src="/PopUpPage_lastPostPin.png"
                          />
                        </div>
                        <div className="div43">서울 강서구</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="favorite-icon2"
                    alt=""
                    src="/PopUpPage_favorite2.svg"
                  />
                </div>
              </div>
              <div className="your-name-popup">
                <img
                  className="your-name-background"
                  loading="lazy"
                  alt=""
                  src="/PopUpPage_namePost.png"
                />
                <div className="your-name-content">
                  <div className="your-name-title">
                    <div className="parent">
                      <b className="b26">너의 이름은</b>
                      <div className="empty-your-name">
                        <b className="placeholder">2019/03/25~2024/07/21</b>
                      </div>
                      <div className="your-name-location">
                        <div className="your-name-pin">
                          <div className="your-name-icon">
                            <img
                              className="pin-alt-fill-icon3"
                              alt=""
                              src="/PopUpPage_lastPostPin.png"
                            />
                          </div>
                          <div className="div44">서울 마포구</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="favorite-icon3"
                    alt=""
                    src="/PopUpPage_favorite2.svg"
                  />
                </div>
              </div>
              <div className="suzume-popup">
                <div className="suzume-background">
                  <img
                    className="suzume-content-icon"
                    loading="lazy"
                    alt=""
                    src="/PopUpPage_doorPost.png"
                  />
                  <div className="suzume-title">
                    <div className="suzume-label-wrapper">
                      <div className="suzume-label">
                        <b className="b27">스즈메의 문단속</b>
                        <div className="empty-suzume">
                          <b className="suzume-placeholder">
                            2019/03/25~2024/07/21
                          </b>
                        </div>
                        <div className="suzume-location">
                          <div className="suzume-pin">
                            <div className="location-pin">
                              <img
                                className="pin-alt-fill-icon4"
                                alt=""
                                src="PopUpPage_lastPostPin.png"
                              />
                            </div>
                            <div className="div45">서울 강남구</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="favorite-icon4"
                      alt=""
                      src="/PopUpPage_favorite2.svg"
                    />
                  </div>
                </div>
                <div className="popup-card">
                  <img
                    className="image-placeholder-icon"
                    loading="lazy"
                    alt=""
                    src="/PopUpPage_voicePost.png"
                  />
                  <div className="card-content">
                    <div className="title-container2">
                      <b className="b28">언어의 장벽</b>
                      <div className="frame-div">
                        <b className="b29">2019/03/25~2024/07/21</b>
                      </div>
                      <div className="location-container2">
                        <div className="location-wrapper2">
                          <div className="pin-alt-fill-wrapper">
                            <img
                              className="pin-alt-fill-icon5"
                              alt=""
                              src="/PopUpPage_lastPostPin.png"
                            />
                          </div>
                          <div className="div46">서울 양서구</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="favorite-icon5"
                      alt=""
                      src="/PopUpPage_favorite2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
