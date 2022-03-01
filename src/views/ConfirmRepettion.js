import "../style/confirmrepetition.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon12_hover from "../assets/main_icons/main_icon11_hover.png";
import go_main from "../assets/goMain.png";
import insert_info from "../assets/confirmrepettion/11-04.png";
import modify_info from "../assets/confirmrepettion/11-03.png";
import reset_info from "../assets/basicinformation/12_basicinformation_before.png";
/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "처음 화면",
    summary: "",
    imagename: insert_info,
  },
  {
    title: "중복 문제 확인",
    summary: "",
    imagename: modify_info,
  },
];
const ConfirmRepetition = () => {
  const [mainImage, setMainImage] = useState(insert_info);
  const [mainSummary, setMainSummary] = useState("");

  function 오른쪽버튼색변경(idx, total) {
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
  function 처음셋팅() {
    var array = [];
    for (let i = 0; i < InitButtonData.length; i++) {
      if (i == 0) {
        array.push(
          <button
            id={InitButtonData[i].title}
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            className="button"
            onClick={() => {
              setMainImage(InitButtonData[i].imagename);
              setMainSummary(InitButtonData[i].summary);
              오른쪽버튼색변경(i, InitButtonData.length);
            }}
          >
            <div className="button-value">{InitButtonData[i].title}</div>
          </button>
        );
      } else {
        array.push(
          <button
            id={InitButtonData[i].title}
            className="button"
            onClick={() => {
              setMainImage(InitButtonData[i].imagename);
              setMainSummary(InitButtonData[i].summary);
              오른쪽버튼색변경(i, InitButtonData.length);
            }}
          >
            <div className="button-value">{InitButtonData[i].title}</div>
          </button>
        );
      }
    }

    return array;
  }
  return (
    <div className="confirmrepetition">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="confirmrepetition-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="confirmrepetition-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <div className="right">기능 리스트</div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {처음셋팅()}
        </section>
      </aside>
    </div>
  );
};

export default ConfirmRepetition;
