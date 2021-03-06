import "../style/errorcorrection.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import main_icon10_hover from "../assets/main_icons/main_icon10_hover.png";
import go_main from "../assets/goMain.png";

import error_correction_01 from "../assets/errorcorrection/10-01.png";
import error_correction_02 from "../assets/errorcorrection/10-02.png";
import error_correction_03 from "../assets/errorcorrection/10-03.png";
import error_correction_04 from "../assets/errorcorrection/10-04.png";
import error_correction_05 from "../assets/errorcorrection/10-05.png";
import error_correction_06 from "../assets/errorcorrection/10-06.png";
import error_correction_07 from "../assets/errorcorrection/10-07.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "유형 선택",
    summary: "",
    imagename: error_correction_02,
  },
  {
    title: "오류 문제 확인",
    summary: "시험지 만들기에서 오류 신고 된 문항이 나옵니다.",
    imagename: error_correction_03,
  },
  {
    title: "유형 문제 확인",
    summary: "",
    imagename: error_correction_04,
  },
  {
    title: "수정할 문제 데이터 입력",
    summary: "",
    imagename: error_correction_05,
  },
  {
    title: "수정 업로드",
    summary: "",
    imagename: error_correction_05,
    alertMessage: "문제가 수정되었습니다.",
  },
  {
    title: "문제 삭제",
    summary: "",
    imagename: error_correction_06,
    alertMessage: "문제가 삭제되었습니다.",
  },
  {
    title: "중복 문제 확인",
    summary: "",
    imagename: error_correction_07,
  },
  {
    title: "중복 문제 확인 완료",
    summary: "",
    imagename: error_correction_07,
    alertMessage: "중복 문제가 삭제되었습니다.",
  },
];

const ErrorCorrection = () => {
  const [mainImage, setMainImage] = useState(error_correction_01);
  const [mainSummary, setMainSummary] = useState("");

  function 오른쪽버튼색변경(idx, total, button_num) {
    let 누른거 = InitButtonData[idx].title;
    누른거 = document.getElementById(누른거);
    누른거.style.backgroundColor = "rgb(159, 169, 216)";
    for (let i = 0; i < total; i++) {
      if (i == idx) {
        continue;
      }
      let 누른거 = document.getElementById(InitButtonData[i].title);
      누른거.style.backgroundColor = "white";
    }
  }

  return (
    <div className="errorcorrection">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img
          className="errorcorrection-image left"
          style={{ borderRadius: "15px" }}
          src={main_icon10_hover}
        />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="errorcorrection-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <div className="right" style={{ borderRadius: "15px" }}>
          기능 리스트
        </div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                id={InitButtonData[index].title}
                className="button"
                key={"button" + index}
                onClick={() => {
                  if (item.alertMessage != null) alert(item.alertMessage);
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                  오른쪽버튼색변경(index, InitButtonData.length, 0);
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
