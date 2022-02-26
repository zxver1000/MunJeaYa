import "../style/recordingcards.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon4_hover from "../assets/main_icons/main_icon4_hover.png";
import go_main from "../assets/goMain.png";

import recording_cards_01 from "../assets/recodingcards/04-01.png";
import recording_cards_02 from "../assets/recodingcards/04-02.png";
import recording_cards_03 from "../assets/recodingcards/04-03.png";
import recording_cards_04 from "../assets/recodingcards/04-04.png";
import recording_cards_05 from "../assets/recodingcards/04-05.png";
import recording_cards_06 from "../assets/recodingcards/04-06.png";
import recording_cards_07 from "../assets/recodingcards/04-07.png";
import recording_cards_08 from "../assets/recodingcards/04-08.png";
import recording_cards_09 from "../assets/recodingcards/04-09.png";
import recording_cards_10 from "../assets/recodingcards/04-10.png";
import recording_cards_11 from "../assets/recodingcards/04-11.png";
import recording_cards_12 from "../assets/recodingcards/04-12.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "반, 학생 선택하기",
    summary: "",
    imagename: recording_cards_02,
  },
  {
    title: "시험지 선택",
    summary: "학생 보고서 작성할 시험지 선택하기",
    imagename: recording_cards_03,
  },
  {
    title: "성적표 만들기",
    summary: "",
    imagename: recording_cards_04,
  },
  {
    title: "종합 성취도",
    summary: "",
    imagename: recording_cards_05,
  },
  {
    title: "요일별 학습 내용",
    summary: "",
    imagename: recording_cards_06,
  },
  {
    title: "단원별 학습 내용",
    summary: "",
    imagename: recording_cards_07,
  },
  {
    title: "학습한 단원별 정답률",
    summary: "",
    imagename: recording_cards_08,
  },
  {
    title: "유형별 학습 내용",
    summary: "",
    imagename: recording_cards_09,
  },
  {
    title: "취약한 학습 유형",
    summary: "",
    imagename: recording_cards_10,
  },
  {
    title: "학습 평가 SUMMARY",
    summary: "",
    imagename: recording_cards_11,
  },
  {
    title: "학습 평가 SUMMARY2",
    summary: "",
    imagename: recording_cards_12,
  },
  {
    title: "성적표 저장",
    summary: "",
    imagename: recording_cards_12,
    alertMessage: "성적표가 저장되었습니다.",
  },
  {
    title: "성적표 인쇄",
    summary: "",
    imagename: recording_cards_12,
    alertMessage: "성적표가 인쇄되었습니다.",
  },
];

function 오른쪽버튼색변경(idx, total, button_num) {
  let 누른거 = InitButtonData[idx].title;
  누른거 = document.getElementById(누른거);
  누른거.style.backgroundColor = "gainsboro";
  for (let i = 0; i < total; i++) {
    if (i == idx) {
      continue;
    }
    let 누른거 = document.getElementById(InitButtonData[i].title);
    누른거.style.backgroundColor = "white";
  }
}

const RecordingCards = () => {
  const [mainImage, setMainImage] = useState(recording_cards_01);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="recordingcards">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="recordingcards-image left" src={main_icon4_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="recordingcards-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <div className="right">기능 리스트</div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                id={InitButtonData[index].title}
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                  오른쪽버튼색변경(index, InitButtonData.length, 0);
                  if (item.alertMessage != null) alert(item.alertMessage);
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

export default RecordingCards;
