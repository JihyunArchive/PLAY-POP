import React from 'react';
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main ${className}`}>
      <div className="container">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="padding">
              <div className="image-parent">
                <img
                  className="image-icon"
                  loading="lazy"
                  alt=""
                  src="/PopUpPage_firstPost.png"
                />
                <div className="description">
                  <div className="title-container-parent">
                    <div className="title-container">
                      <button className="title-wrapper">
                        <div className="title-wrapper-child" />
                        <b className="b3">#모험</b>
                      </button>
                    </div>
                    <div className="movie-container">
                      <button className="movie-wrapper">
                        <div className="movie-wrapper-child" />
                        <b className="b4">#영화</b>
                      </button>
                    </div>
                    <div className="experience-container">
                      <button className="experience-wrapper">
                        <div className="experience-wrapper-child" />
                        <b className="b5">#체험</b>
                      </button>
                    </div>
                    <button className="unique-container">
                      <div className="unique-container-child" />
                      <b className="b6">#이색</b>
                    </button>
                  </div>
                  <div className="unique">
                    <h3 className="h32">소개글</h3>
                  </div>
                </div>
              </div>
              <div className="content-details">
                <div className="details-wrapper1">
                  <div className="details-container1">
                    <h1 className="h1">
                      해리포터가 돌아왔다! 비밀의 방을 찾아줘!
                    </h1>
                    <div className="info">
                      <div className="info-wrapper">
                        <div className="info-container1">
                          <div className="buttons">
                            <div className="button-wrapper">
                              <div className="button-container">
                                <div className="icons">
                                  <img
                                    className="pin-alt-fill-icon1"
                                    loading="lazy"
                                    alt=""
                                    src="/PopUpPage_lastPostPin.png"
                                  />
                                  <img
                                    className="date-range-fill-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/PopUpPage_date.png"
                                  />
                                </div>
                              </div>
                              <img
                                className="paper-fill-icon"
                                alt=""
                                src="/PopUpPage_free.png"
                              />
                            </div>
                            <img
                              className="time-fill-icon"
                              loading="lazy"
                              alt=""
                              src="/PopUpPage_time.png"
                            />
                          </div>
                        </div>
                        <div className="location1">
                          <div className="location-wrapper1">
                            <div className="div2">서울 더현대</div>
                            <div className="admission">
                              <div className="admission-wrapper">
                                <div className="free">
                                  2024/06/24 ~ 2024/09/03
                                </div>
                                <div className="admission-fee">
                                  <div className="div3">입장료 무료</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hours">
                            <div className="hours-wrapper">
                              <div className="div4">운영시간</div>
                              <div className="days">
                                <div className="div5">월 : 10:00 ~ 19:00</div>
                                <div className="weekdays">
                                  <div className="div6">화 : 10:00 ~ 19:00</div>
                                  <div className="div7">수 : 10:00 ~ 19:00</div>
                                  <div className="div8">목 : 10:00 ~ 19:00</div>
                                  <div className="div9">금 : 10:00 ~ 19:00</div>
                                  <div className="div10">
                                    토 : 10:00 ~ 19:00
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sunday">
                      <div className="div11">일 : 10:00 ~ 19:00</div>
                    </div>
                  </div>
                  <div className="tag">
                    <button className="tag-wrapper">
                      <div className="tag-wrapper-child" />
                      <b className="b7">#마법</b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img className="favorite-icon1" alt="" src="/PopUpPage_favorite1.svg" />
          </div>
        </div>
        <div className="story">
          <div className="story-wrapper">
            <div className="story-background" />
            <div className="div12">
              <span className="txt">
                <p className="p1">{`해리 포터에겐 이번 여름방학이 별로 즐겁질 못했다. 마법이라면 질색을 하는 페투니아 이모와 버논 이모부의 구박도 그렇지만, 무엇보다 속상한 건 단짝이었던 론 위즐리와 헤르미온느 `}</p>
                <p className="p2">
                  그레인저가 그 사이 자신을 까맣게 잊었는지 자신의 편지에 답장
                  한 통 없다는 것. 그러던 어느날 꼬마 집요정 도비가 해리의
                  침실에 나타나 뜻밖의 얘기를 한다. 호그와트 마법학교로
                </p>
                <p className="p3">{` 돌아가면 무서운 일을 당할 거라는 것.  도비는 해리를 학교에 못 가게 하려고 자신이 여태까지 론과 헤르미온느의 답장을 가로채 왔음을 고백한다. 그러나 도비와 더즐리 가족의 방해에도 `}</p>
                <p className="p4">
                  불구, 해리는 론과 그의 형제들이 타고 온 하늘을 나는 자동차를
                  타고 이모집을 탈출, 따뜻한 가족애가 넘치는 론 위즐리의 집으로
                  간다. 개학을 앞두고 학교에 가는 날, 론과 해리는 뭔가의
                </p>
                <p className="p5">
                  {" "}
                  방해로 9와 3/4 승강장에 못 들어가는 바람에 개학식에 지각할
                  위기에 처한다.
                  {testTxt}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

const testTxt="안녕하세여";

export default Main;
