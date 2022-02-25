import "../style/createpaper.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon12_hover from "../assets/main_icons/main_icon1_hover.png";
import function_list from "../assets/function_list.png";
import main_image from "../assets/createpaper/01-01.png";
import category_select from "../assets/createpaper/01-02.png";
import data_set from "../assets/createpaper/01-03.png";
import data_change from "../assets/createpaper/01-04.png";
import data_set_complate from "../assets/createpaper/01-05.png";
import test_name from "../assets/createpaper/01-06.png";
import difficulty_level from "../assets/createpaper/01-07.png";
import test_type from "../assets/createpaper/01-08.png";
import test_select from "../assets/createpaper/01-09.png";

import new_main_image from "../assets/createpaper/01-10.png";
import quest_2 from "../assets/createpaper/01-11.png";
import quest_4 from "../assets/createpaper/01-12.png";
import quest_6 from "../assets/createpaper/01-13.png";
import naegi_button from "../assets/createpaper/01-14.png";
import quest_easy from "../assets/createpaper/01-15.png";
import quest_difficult from "../assets/createpaper/01-16.png";
import quest_type from "../assets/createpaper/01-17.png";
import quest_random from "../assets/createpaper/01-18.png";
import quest_short_answer from "../assets/createpaper/01-19.png";
import quest_select_answer from "../assets/createpaper/01-20.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonDataFirst = [
  {
    title: "카테고리 선택",
    summary: "입력",
    imagename: category_select,
  },
  {
    title: "SET",
    summary: "입력",
    imagename: data_set,
  },
  {
    title: "데이터 변경",
    summary: "입력",
    imagename: data_change,
  },
  {
    title: "시험지 만들기 설정",
    summary: "입력",
    imagename: data_set_complate,
    message: "시험지 설정이 완료되었습니다.",
  },
  {
    title: "시험지명 입력",
    summary: "입력",
    imagename: test_name,
  },
  {
    title: "난이도별 출제",
    summary: "입력",
    imagename: difficulty_level,
  },
  {
    title: "유형별 출제",
    summary: "입력",
    imagename: test_type,
  },
  {
    title: "문제 선택 출제",
    summary: "입력",
    imagename: test_select,
  },
];
const InitButtonDataSecond = [
  {
    title: "2문제 씩 출제",
    summary: "입력",
    imagename: quest_2,
  },
  {
    title: "4문제 씩 출제",
    summary: "입력",
    imagename: quest_4,
  },
  {
    title: "6문제 씩 출제",
    summary: "입력",
    imagename: quest_6,
  },
  {
    title: "내지 선택",
    summary: "입력",
    imagename: naegi_button,
  },
  {
    title: "쉬운 순 문제 정렬",
    summary: "입력",
    imagename: quest_easy,
  },
  {
    title: "어려운 순 문제 정렬",
    summary: "입력",
    imagename: quest_difficult,
  },
  {
    title: "유형 순 문제 정렬",
    summary: "입력",
    imagename: quest_type,
  },
  {
    title: "랜덤 문제 정렬",
    summary: "입력",
    imagename: quest_random,
  },

  {
    title: "주관식 우선 출제",
    summary: "입력",
    imagename: quest_short_answer,
  },
  {
    title: "객관식 우선 출제",
    summary: "입력",
    imagename: quest_select_answer,
  },
  {
    title: "시험지 저장 및 배포",
    summary: "입력",
    imagename: new_main_image,
    message: "시험지가 저장, 학생들에게 배포되었습니다.",
  },
];
const CreatePaper = () => {
  const [buttonType, setButtonType] = useState(false);
  const [mainImage, setMainImage] = useState(main_image);
  const [mainSummary, setMainSummary] = useState("");
  return (
    <div className="createpaper">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="createpaper-image left" src={main_icon12_hover} />
        <section className="buttons">
          아래 버튼을 클릭하여 시험지 만드는 방법을 알 수 있습니다.
          <button
            className="button"
            onClick={() => {
              setButtonType(false);
              setMainImage(main_image);
            }}
          >
            <div className="button-value">(1) 시험지 만들기 설정</div>
          </button>
          <button
            className="button"
            onClick={() => {
              setButtonType(true);
              setMainImage(new_main_image);
            }}
          >
            <div className="button-value">(2) 새로운 시험지 만들기</div>
          </button>
        </section>
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="createpaper-main description">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <div className="right">기능 리스트</div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {buttonType == false
            ? InitButtonDataFirst.map((item, index) => {
                return (
                  <button
                    className="button"
                    key={"button-first" + index}
                    onClick={() => {
                      setMainImage(item.imagename);
                      setMainSummary(item.summary);
                      if (item.message != null) alert(item.message);
                    }}
                  >
                    <div className="button-value">{item.title}</div>
                  </button>
                );
              })
            : InitButtonDataSecond.map((item, index) => {
                return (
                  <button
                    className="button"
                    key={"button-second" + index}
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

export default CreatePaper;
