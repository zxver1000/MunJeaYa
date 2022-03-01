import "../style/basicinformation.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon12_hover from "../assets/main_icons/main_icon12_hover.png";
import go_main from "../assets/goMain.png";
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
    title: "처음 화면",
    summary: "회원(학원)정보의 회원 정보를 입력할 수 있습니다.",
    imagename: insert_info,
  },
  {
    title: "회원(학원) 정보 수정",
    summary: "회원(학원)정보의 회원 정보를 수정할 수 있습니다.",
    imagename: modify_info,
  },
];

const BasicInformation = () => {
  const [mainImage, setMainImage] = useState(reset_info);

  const [mainSummary, setMainSummary] = useState(
    "로고 파일은 사전 전달되면 최적화 후 입력"
  );

  function 처음셋팅() {
    var array = [];

    for (let i = 0; i < InitButtonData.length; i++) {
      if (i == 0) {
        array.push(
          <button
            id={i}
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            className="button"
            onClick={() => {
              setMainImage(InitButtonData[i].imagename);
              setMainSummary(InitButtonData[i].summary);
              지금누른거변경(i);
              버튼색변경(i, InitButtonData.length);
            }}
          >
            <div className="button-value">{InitButtonData[i].title}</div>
          </button>
        );
      } else {
        array.push(
          <button
            id={i}
            className="button"
            onClick={() => {
              setMainImage(InitButtonData[i].imagename);

              setMainSummary(InitButtonData[i].summary);
              지금누른거변경(i);
              버튼색변경(i, InitButtonData.length);
            }}
          >
            <div className="button-value">{InitButtonData[i].title}</div>
          </button>
        );
      }
    }

    return array;
  }

  let [지금누름, 지금누른거변경] = useState(0);
  function 버튼색변경(idx, total) {
    let 누른거 = document.getElementById(idx);
    누른거.style.backgroundColor = "rgb(159, 169, 216)";
    console.log(total);
    for (let i = 0; i < total; i++) {
      if (i == idx) {
        continue;
      }
      let 누른거 = document.getElementById(i);
      누른거.style.backgroundColor = "white";
    }
  }

  return (
    <div className="basicinformation">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="basicinformation-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="basicinformation-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        {/* <Link to="/main">
          <img className="basicinformation-image right" src={go_main} />
        </Link> */}
        <div className="right">기능 리스트</div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {처음셋팅()}
        </section>
      </aside>
    </div>
  );
};

export default BasicInformation;
