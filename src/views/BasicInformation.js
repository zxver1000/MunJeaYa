import "../style/basicinformation.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon12_hover from "../assets/main_icons/main_icon12_hover.png";
import basicinformation_before from "../assets/basicinformation/12_basicinformation_before.png";
import basicinformation_after from "../assets/basicinformation/12_basicinformation_after.png";

const InitButtonData = [
  {
    title: "회원(학원) 정보 입력",
    summary: "회원(학원)정보의 회원 정보를 입력할 수 있습니다.",
    imageurl: "12_basicinformation_before.png",
  },
  {
    title: "회원(학원) 정보 수정",
    summary: "회원(학원)정보의 회원 정보를 수정할 수 있습니다.",
    imageurl: "12_basicinformation_after.png",
  },
  {
    title: "초기화",
    summary: "회원(학원)정보의 회원 정보를 초기화 수 있습니다.",
    imageurl: "12_basicinformation_before.png",
  },
];
const BasicInformation = () => {
  const [mainImage, setMainImage] = useState(basicinformation_before);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="basicinformation">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="basicinformation-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="basicinformation-main">
        <img
          className="image"
          src={require("../assets/basicinformation" + mainImage)}
        />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img
            className="basicinformation-image right"
            src={main_icon12_hover}
          />
        </Link>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imageurl);
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

export default BasicInformation;
