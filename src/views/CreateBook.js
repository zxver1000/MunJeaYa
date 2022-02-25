import "../style/createbook.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon8_hover from "../assets/main_icons/main_icon8_hover.png";
import go_main from "../assets/goMain.png";

import create_book_01 from "../assets/createbook/08-01.png";
import create_book_02 from "../assets/createbook/08-02.png";
import create_book_03 from "../assets/createbook/08-03.png";
import create_book_04 from "../assets/createbook/08-04.png";
import create_book_05 from "../assets/createbook/08-05.png";
import create_book_06 from "../assets/createbook/08-06.png";
import create_book_07 from "../assets/createbook/08-07.png";
import create_book_08 from "../assets/createbook/08-08.png";
import create_book_09 from "../assets/createbook/08-09.png";
import create_book_10 from "../assets/createbook/08-10.png";
import create_book_11 from "../assets/createbook/08-11.png";
import create_book_12 from "../assets/createbook/08-12.png";
import create_book_13 from "../assets/createbook/08-13.png";
import create_book_14 from "../assets/createbook/08-14.png";
import create_book_15 from "../assets/createbook/08-15.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "문제집 만들기",
    summary: "설명쓰세욥",
    imagename: create_book_02,
  },
  {
    title: "원하는 시험지와 이름 입력하기",
    summary: "설명쓰세욥",
    imagename: create_book_03,
  },
  {
    title: "템플릿 고르기",
    summary: "설명쓰세욥",
    imagename: create_book_04,
  },
  {
    title: "원하는 템플릿 선택 - #4",
    summary: "설명쓰세욥",
    imagename: create_book_05,
  },
  {
    title: "문제집 만들기",
    summary: "설명쓰세욥",
    imagename: create_book_06,
  },
  {
    title: "문제집 배포",
    summary: "설명쓰세욥",
    imagename: create_book_07,
  },
  {
    title: "배포할 학생 입력하기",
    summary: "설명쓰세욥",
    imagename: create_book_08,
  },
  {
    title: "선택된 학생에게 문제집 배포",
    summary: "설명쓰세욥",
    imagename: create_book_09,
    alertMessage: "선택된 학생에게 문제집이 배포되었습니다.",
  },
  {
    title: "문제집 보기",
    summary: "설명쓰세욥",
    imagename: create_book_10,
  },
  {
    title: "인쇄 -> 인쇄",
    summary: "설명쓰세욥",
    imagename: create_book_11,
    alertMessage: "인쇄되었습니다.",
  },
  {
    title: "문제집 수정",
    summary: "설명쓰세욥",
    imagename: create_book_12,
  },
  {
    title: "수정할 데이터 입력",
    summary: "설명쓰세욥",
    imagename: create_book_13,
  },
  {
    title: "문제집 수정",
    summary: "설명쓰세욥",
    imagename: create_book_14,
  },
  {
    title: "문제집 삭제",
    summary: "설명쓰세욥",
    imagename: create_book_15,
    alertMessage: "문제집이 삭제되었습니다.",
  },
];
const CreateBook = () => {
  const [mainImage, setMainImage] = useState(create_book_01);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="createbook">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="createbook-image left" src={main_icon8_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="createbook-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img className="createbook-image right" src={go_main} />
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

export default CreateBook;
