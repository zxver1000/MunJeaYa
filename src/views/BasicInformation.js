import "../style/basicinformation.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import basicinformation_before from "../assets/basicinformation/12_basicinformation_before.png";
import basicinformation_after from "../assets/basicinformation/12_basicinformation_after.png";
import main_icon12_hover from "../assets/main_icons/main_icon12_hover.png";

import { LooksOneIcon, LooksTwoIcon } from "./components/Icon";

const BasicInformation = () => {
  const [mainImage, setMainImage] = useState(basicinformation_before);
  return (
    <div className="basicinformation">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="basicinformation-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="basicinformation-main">
        <img className="image" src={mainImage} />
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={() => setMainImage(basicinformation_after)}
          >
            <div className="button-value">
              회원(학원) 정보 입력
              <LooksOneIcon></LooksOneIcon>
            </div>
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              mainImage == basicinformation_before
                ? alert("정보를 입력해주세요.")
                : alert("수정 완료되었습니다.");
            }}
          >
            <div className="button-value">
              회원(학원) 정보 입력
              <LooksTwoIcon></LooksTwoIcon>
            </div>
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setMainImage(basicinformation_before)}
          >
            <div className="button-value">초기화</div>
          </button>
        </div>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img
            className="basicinformation-image right"
            src={main_icon12_hover}
          />
        </Link>
        <section>
          번호가 입력된 부분을 클릭하면 다음을 실행할 수 있습니다.
          <article>
            <LooksOneIcon></LooksOneIcon>회원 정보를 입력할 수 있습니다.
          </article>
          <article>
            <LooksTwoIcon></LooksTwoIcon>회원 정보를 입력할 수 있습니다.
          </article>
        </section>
      </aside>
    </div>
  );
};

export default BasicInformation;
