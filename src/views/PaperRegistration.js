import "../style/paperregistration.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon9_hover from "../assets/main_icons/main_icon9_hover.png";
import go_main from "../assets/goMain.png";
import basic from "../assets/paperregistration/9-01.png";
import category_insert from "../assets/paperregistration/9-02.png";
import etc from "../assets/paperregistration/9-03.png";
import problem_select from "../assets/paperregistration/9-04.png";
import problem_insert from "../assets/paperregistration/9-05.png";
import problem_check from "../assets/paperregistration/9-06.png";
import problem_upload from "../assets/paperregistration/9-07.png";
import problem_delete from "../assets/paperregistration/9-08.png";

import make_1 from "../assets/paperregistration/09-10.png";
import make_2 from "../assets/paperregistration/09-11.png";
import make_3 from "../assets/paperregistration/09-12.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonDataFirst = [
  {
    title: "(1) 자료 만들기",
    summary: "설명 쓰는 곳",
    imagename: make_1,
  },
  {
    title: "(2) 자료 만들기",
    summary: "설명 쓰는 곳",
    imagename: make_2,
  },
  {
    title: "(3) 자료 만들기",
    summary: "설명 쓰는 곳",
    imagename: make_3,
  },
];
const InitButtonDataSecond = [
  {
    title: "문제 등록 기본 화면",
    summary: "설명 쓰는 곳",
    imagename: basic,
  },
  {
    title: "카테고리 선택",
    summary: "설명 쓰는 곳",
    imagename: category_insert,
  },
  {
    title: "... (원본 시험지 추가)",
    summary: "설명 쓰는 곳",
    imagename: etc,
  },
  {
    title: "문제지 선택",
    summary: "설명 쓰는 곳",
    imagename: problem_select,
  },
  {
    title: "문제지 등록하기",
    summary: "설명 쓰는 곳",
    imagename: problem_insert,
  },
  {
    title: "문제 개수 확인",
    summary: "설명 쓰는 곳",
    imagename: problem_check,
  },
  {
    title: "문제지 추출 및 업로드",
    summary: "설명 쓰는 곳",
    imagename: problem_upload,
    message: "문제가 등록되었습니다.",
  },
  {
    title: "시험지 삭제",
    summary: "설명 쓰는 곳",
    imagename: problem_delete,
    message: "삭제되었습니다.",
  },
];
const PaperRegistration = () => {
  const [mainImage, setMainImage] = useState(basic);
  const [mainSummary, setMainSummary] = useState(
    "문제등록기능은 원하시는 문제지들을 프로그램에 등록하실수 있는 기능을담당합니다."
  );
  return (
    <div className="paperregistration">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="paperregistration-image left" src={main_icon9_hover} />
        <section className="buttons">
          아래 버튼을 클릭하여 문제를 만드는데 도움을 받을 수 있습니다.
          {InitButtonDataFirst.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                  if (item.message != null) alert(item.message);
                }}
              >
                <div className="button-value">{item.title}</div>
              </button>
            );
          })}
        </section>
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="paperregistration-main">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img className="paperregistration-image right" src={go_main} />
        </Link>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {InitButtonDataSecond.map((item, index) => {
            return (
              <button
                className="button"
                key={"button" + index}
                onClick={() => {
                  setMainImage(item.imagename);
                  setMainSummary(item.summary);
                  if (item.message != null) alert(item.message);
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

export default PaperRegistration;
