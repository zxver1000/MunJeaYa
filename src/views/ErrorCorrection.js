import "../style/errorcorrection.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import main_icon12_hover from "../assets/main_icons/main_icon12_hover.png";
import insert_info from "../assets/basicinformation/12_basicinformation_before.png";
import modify_info from "../assets/basicinformation/12_basicinformation_after.png";
import reset_info from "../assets/basicinformation/12_basicinformation_before.png";
/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "회원(학원) 정보 입력",
    summary: "회원(학원)정보의 회원 정보를 입력할 수 있습니다.",
    imagename: insert_info,
  },
  {
    title: "회원(학원) 정보 수정",
    summary: "회원(학원)정보의 회원 정보를 수정할 수 있습니다.",
    imagename: modify_info,
  },
  {
    title: "초기화",
    summary: "회원(학원)정보의 회원 정보를 초기화 수 있습니다.",
    imagename: reset_info,
  },
];
const ErrorCorrection = () => {
  const [mainImage, setMainImage] = useState(reset_info);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="errorcorrection">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="errorcorrection-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="errorcorrection-main">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <FontAwesomeIcon icon={faHouseChimney} size="3x" />
        </Link>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                }}
              >
                <div className="button-value">{item.title}</div>
              </button>
            );
          })}
        </section>
      </aside>
    </div>
  );
};

export default ErrorCorrection;
