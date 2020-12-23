import React from "react";

function DateTitle({ datetitle }) {
  return (
    <div className="form__container">
      <div className="borderform">
        <div className="headline"> </div>
        <div id="headtitle">{datetitle}</div>
      </div>
      <div className="contentform">
        <h1 className="contenthead">
          ★등교(출근) 가능(제출전 페이지를 캡처해주세요) You can attend a
          school/work. (Please capture the page before the submission.)
        </h1>
        <div className="contentbody">
          <p className="content content1">
            - 마스크착용과 손씻기, 기침예절 준수 등 생활수칙을 준수해 주시고
            생활 속 거리두기를 꼭 실천하시기 바랍니다.^^
          </p>
          <p className="content content2">
            - Be sure to follow the guidelines such as wearing a mask, washing
            your hands, and cough etiquette, and be sure to keep your distance
            in daily life.
          </p>
        </div>
      </div>
      <div className="formbutton">
        <div className="button__container">
          <div className="button button_back">뒤로</div>
        </div>
        <div className="button__container">
          <div className="button button_submit">제출</div>
        </div>
      </div>

      <div className="bottomform">
        <p>Google 설문지를 통해 비밀번호를 제출하지 마세요.</p>
      </div>
      <div className="bottomform">
        <p className="bottom2">
          이 설문지는 고려대학교 내부에서 생성되었습니다.
          <u>악용사례 신고</u>
        </p>
      </div>
      <div className="footerlogo">
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg"
          alt="Google"
          className="logoimage"
        />
        <span className="footerlogo_text">설문지 </span>
      </div>
    </div>
  );
}

export default DateTitle;
