import "../style/mypapers.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon2_hover from "../assets/main_icons/main_icon2_hover.png";
import go_main from "../assets/goMain.png";

import my_papers_01 from "../assets/mypapers/02-01.png";
import my_papers_02 from "../assets/mypapers/02-02.png";
import my_papers_03 from "../assets/mypapers/02-03.png";
import my_papers_04 from "../assets/mypapers/02-04.png";
import my_papers_05 from "../assets/mypapers/02-05.png";
import my_papers_06 from "../assets/mypapers/02-06.png";
import my_papers_07 from "../assets/mypapers/02-07.png";
import my_papers_08 from "../assets/mypapers/02-08.png";
import my_papers_09 from "../assets/mypapers/02-09.png";
import my_papers_10 from "../assets/mypapers/02-10.png";
import my_papers_11 from "../assets/mypapers/02-11.png";
import my_papers_12 from "../assets/mypapers/02-12.png";
import my_papers_13 from "../assets/mypapers/02-13.png";
import my_papers_14 from "../assets/mypapers/02-14.png";
import my_papers_15 from "../assets/mypapers/02-15.png";
import my_papers_16 from "../assets/mypapers/02-16.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "새로운 시험지 만들기",
    summary: "설명쓰세욤",
    imagename: my_papers_01,
    alertMessage: "메인페이지에서 [시험지만들기]를 누르면 확인하실 수 있습니다",
  },
  ,
  {
    title1: "오래된 순서로 정렬",
    title2: "최근 순서로 정렬",
    summary: "설명쓰세욤",
    imagename1: my_papers_02,
    imagename2: my_papers_01,
    flag: true,
  },
  {
    title: "시험지 보기",
    summary: "설명쓰세욤",
    imagename: my_papers_03,
  },
  {
    title: "검색할 반과 시험지 입력",
    summary: "설명쓰세욤",
    imagename: my_papers_04,
  },
  {
    title: "검색하기",
    summary: "설명쓰세욤",
    imagename: my_papers_05,
  },
  {
    title: "시험지 선택",
    summary: "설명쓰세욤",
    imagename: my_papers_06,
  },
  {
    title: "시험지 배포",
    summary: "설명쓰세욤",
    imagename: my_papers_07,
  },
  {
    title: "시험지 배포할 학생 입력",
    summary: "설명쓰세욤",
    imagename: my_papers_08,
  },
  {
    title: "선택된 학생에게 시험지 배포",
    summary: "설명쓰세욤",
    imagename: my_papers_09,
    alertMessage: "해당 학생에게 배포되었습니다.",
  },
  {
    title: "빠른 정답",
    summary: "설명쓰세욤",
    imagename: my_papers_10,
  },
  {
    title: "정답 + 해설",
    summary: "설명쓰세욤",
    imagename: my_papers_11,
  },
  {
    title: "문제만 출력",
    summary: "설명쓰세욤",
    imagename: my_papers_12,
  },
  {
    title: "전체 출력",
    summary: "설명쓰세욤",
    imagename: my_papers_13,
  },
  {
    title: "인쇄하기",
    summary: "설명쓰세욤",
    imagename: my_papers_14,
    alertMessage: "인쇄되었습니다.",
  },
  {
    title: "삭제할 시험지 선택",
    summary: "설명쓰세욤",
    imagename: my_papers_15,
  },
  {
    title: "시험지 삭제",
    summary: "설명쓰세욤",
    imagename: my_papers_16,
    alertMessage: "시험지가 삭제되었습니다.",
  },
];

const MyPapers = () => {
  const [mainImage, setMainImage] = useState(my_papers_01);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="mypapers">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="mypapers-image left" src={main_icon2_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="mypapers-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img className="mypapers-image right" src={go_main} />
        </Link>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonData.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  if (item.flag == null) {
                    setMainImage(item.imagename);
                    setMainSummary(item.summary);
                    if (item.alertMessage != null) alert(item.alertMessage);
                  } else {
                    item.flag
                      ? setMainImage(item.imagename1)
                      : setMainImage(item.imagename2);
                    item.flag = !item.flag;
                  }
                }}
              >
                {item.flag == null ? (
                  <div className="button-value">{item.title}</div>
                ) : item.flag ? (
                  <div className="button-value">{item.title1}</div>
                ) : (
                  <div className="button-value">{item.title2}</div>
                )}
              </button>
            );
          })}
        </section>
      </aside>
    </div>
  );
};

export default MyPapers;
