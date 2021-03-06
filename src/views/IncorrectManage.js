import "../style/incorrectmanage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon12_hover from "../assets/main_icons/main_icon3_hover.png";
import go_main from "../assets/goMain.png";

import basic_main from "../assets/incorrectmanage/3-01.png";
import test_insert from "../assets/incorrectmanage/3-02.png";
import test_select from "../assets/incorrectmanage/3-03.png";
import test_mark from "../assets/incorrectmanage/3-04.png";
import test_mark_insert from "../assets/incorrectmanage/3-05.png";
import test_mark_complate from "../assets/incorrectmanage/3-06.png";

import test_wrong from "../assets/incorrectmanage/3-26.png";
import test_wrong_insert from "../assets/incorrectmanage/3-08.png";
import test_wrong_make from "../assets/incorrectmanage/3-09.png";
import test_wrong_similar_select from "../assets/incorrectmanage/3-10.png";
import test_wrong_similar_make from "../assets/incorrectmanage/3-11.png";
import test_wrong_similar_insert from "../assets/incorrectmanage/3-12.png";
import test_wrong_similar_done from "../assets/incorrectmanage/3-13.png";

import test_except_select from "../assets/incorrectmanage/3-14.png";
import test_except_make from "../assets/incorrectmanage/3-15.png";
import test_except_insert from "../assets/incorrectmanage/3-16.png";
import test_except_done from "../assets/incorrectmanage/3-17.png";

import order_recent from "../assets/incorrectmanage/3-18.png";
import order_old from "../assets/incorrectmanage/3-17.png";
import only_checked from "../assets/incorrectmanage/3-19.png";
import only_unchecked from "../assets/incorrectmanage/3-20.png";
import only_word from "../assets/incorrectmanage/3-21.png";
import only_fast from "../assets/incorrectmanage/3-22.png";
import view_explain from "../assets/incorrectmanage/3-23.png";
import view_test from "../assets/incorrectmanage/3-24.png";
import view_all from "../assets/incorrectmanage/3-25.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonDataFirst = [
  {
    title: "처음화면 변경",
    summary: "",
    imagename: basic_main,
  },
  {
    title: "학생, 반 선택하기",
    summary: "",
    imagename: test_insert,
  },
  {
    title: "시험지 선택",
    summary: "",
    imagename: test_select,
  },
  {
    title: "채점",
    summary: "",
    imagename: test_mark,
  },
  {
    title: "채점 데이터 입력",
    summary: "",
    imagename: test_mark_insert,
  },
  {
    title: "채점 완료",
    summary: "",
    imagename: test_mark_complate,
    message: "채점이 완료 되었습니다.",
  },
];
const InitButtonDataSecond = [
  {
    title: "틀린문제 버튼",
    summary: "",
    imagename: test_wrong,
  },
  {
    title: "틀린문제 시험지 이름 입력",
    summary: "",
    imagename: test_wrong_insert,
  },
  {
    title: "틀린문제 시험지 만들기",
    summary: "",
    imagename: test_wrong_make,
    message: "틀린문제 시험지가 완성되었습니다.",
  },
];
const InitButtonDataThird = [
  {
    title: "오답유사 버튼",
    summary: "",
    imagename: test_wrong_similar_select,
  },
  {
    title: "오답유사 시험지 만들기",
    summary: "",
    imagename: test_wrong_similar_make,
  },
  {
    title: "출제문제 배수, 시험지 이름 입력",
    summary: "",
    imagename: test_wrong_similar_insert,
  },
  {
    title: "시험지 만들기",
    summary: "",
    imagename: test_wrong_similar_done,
    message: "오답유사 시험지가 완성되었습니다.",
  },
];
const InitButtonDataFourth = [
  {
    title: "출제문제 제외 할 시험지 선택",
    summary: "",
    imagename: test_except_select,
  },
  {
    title: "출제문제 버튼",
    summary: "",
    imagename: test_except_make,
  },
  {
    title: "출제 방법, 시험지 이름 입력",
    summary: "",
    imagename: test_except_insert,
  },
  {
    title: "출제문제 제외 시험지 만들기",
    summary: "",
    imagename: test_except_done,
    message: "출제문제 제외 시험지가 완성되었습니다.",
  },
];
const InitButtonDataFifth = [
  {
    title: "최근 순서로 시험지 보기",
    summary: "",
    imagename: order_recent,
  },
  {
    title: "오래 된 순서로 시험지 보기",
    summary: "",
    imagename: order_old,
  },
  {
    title: "채점 한 시험지만 보기",
    summary: "",
    imagename: only_checked,
  },
  {
    title: "미채점 된 시험지만 보기",
    summary: "",
    imagename: only_unchecked,
  },
  {
    title: "단어검색 된 시험지 보기",
    summary: "",
    imagename: only_word,
  },
  {
    title: "빠른 정답 보기",
    summary: "",
    imagename: only_fast,
  },
  {
    title: "정답과 해설 보기",
    summary: "",
    imagename: view_explain,
  },
  {
    title: "문제만 출력",
    summary: "",
    imagename: view_test,
  },
  {
    title: "전체 출력",
    summary: "",
    imagename: view_all,
  },
];
const InitButton = [
  InitButtonDataFirst,
  InitButtonDataSecond,
  InitButtonDataThird,
  InitButtonDataFourth,
  InitButtonDataFifth,
];
const buttonData = [
  {
    id: 0,
    image: basic_main,
    value: "(1) 시험지 채점 하기",
    text: [
      "채점하기 : 학생에게 배부된 시험지 채점을 수동으로 수정 및 입력 가능",
      <br />,
      "학생 개별 생성 관리되며, 시험지 묶어서 출력 및 배부는 나의 시험지에서 일괄 선택",
      <br />,
      "자동으로 틀린 문제 시험지는 저장 되지 않고, 온라인 학생이 입력 시 자동 저장 되어 확인하실수있습니다.",
    ],
  },
  {
    id: 1,
    image: test_wrong,
    value: "(2) 틀린문제 시험지 만들기",
    text: "",
  },
  {
    id: 2,
    image: test_wrong_similar_select,
    value: "(3) 오답유사 시험지 만들기",
    text: "",
  },
  {
    id: 3,
    image: test_except_select,
    value: "(4) 출제문제 제외 시험지 만들기",
    text: "",
  },
  {
    id: 4,
    image: order_recent,
    value: "(5) 시험지 보기 추가기능",
    text: "",
  },
];

const IncorrectManage = () => {
  const [buttonType, setButtonType] = useState(0);
  const [mainImage, setMainImage] = useState(basic_main);
  const [mainSummary, setMainSummary] = useState([
    "채점하기 : 학생에게 배부된 시험지 채점을 수동으로 수정 및 입력 가능",
    <br />,
    "학생 개별 생성 관리되며, 시험지 묶어서 출력 및 배부는 나의 시험지에서 일괄 선택",
    <br />,
    "자동으로 틀린 문제 시험지는 저장 되지 않고, 온라인 학생이 입력 시 자동 저장 되어 확인하실수있습니다.",
  ]);

  function 오른쪽버튼색변경(idx, total, button_num) {
    let 누른거 = InitButton[button_num][idx].title;
    console.log(InitButton[button_num][idx].title);
    누른거 = document.getElementById(누른거);
    누른거.style.backgroundColor = "rgb(159, 169, 216)";
    for (let i = 0; i < total; i++) {
      if (i == idx) {
        continue;
      }
      let 누른거 = document.getElementById(InitButton[button_num][i].title);
      누른거.style.backgroundColor = "white";
    }
  }

  function 왼쪽버튼색변경(idx, total, button_num) {
    let 누른거 = buttonData[idx].id;
    누른거 = document.getElementById(누른거);
    누른거.style.backgroundColor = "rgb(159, 169, 216)";
    for (let i = 0; i < total; i++) {
      if (i == idx) {
        continue;
      }
      let 안누른거 = buttonData[i].id;

      안누른거 = document.getElementById(안누른거);
      안누른거.style.backgroundColor = "white";
    }
  }

  function 처음셋팅(buttonType) {
    var array = [];

    for (let i = 0; i < InitButton[buttonType].length; i++) {
      if (i == 0) {
        array.push(
          <button
            id={InitButton[buttonType][i].title}
            className="button"
            key={"button" + "-" + buttonType + "-" + i}
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            onClick={() => {
              setMainImage(InitButton[buttonType][i].imagename);
              오른쪽버튼색변경(i, InitButton[buttonType].length, buttonType);
              setMainSummary(InitButton[buttonType][i].summary);
              if (InitButton[buttonType][i].message != null)
                alert(InitButton[buttonType][i].message);
            }}
          >
            <div className="button-value">
              {InitButton[buttonType][i].title}
            </div>
          </button>
        );
      } else {
        array.push(
          <button
            id={InitButton[buttonType][i].title}
            className="button"
            key={"button" + "-" + buttonType + "-" + i}
            onClick={() => {
              setMainImage(InitButton[buttonType][i].imagename);
              오른쪽버튼색변경(i, InitButton[buttonType].length, buttonType);
              setMainSummary(InitButton[buttonType][i].summary);
              if (InitButton[buttonType][i].message != null)
                alert(InitButton[buttonType][i].message);
            }}
          >
            <div className="button-value">
              {InitButton[buttonType][i].title}
            </div>
          </button>
        );
      }
    }

    return array;
  }

  function 연습(buttonType) {
    var array = [];
    for (let i = 0; i < InitButton[buttonType].length; i++) {
      if (i == 0) {
        array.push(
          <button
            id={InitButton[buttonType][i].title}
            className="button"
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            key={"button" + "-" + buttonType + "-" + i}
            onClick={() => {
              setMainImage(InitButton[buttonType][i].imagename);
              오른쪽버튼색변경(i, InitButton[buttonType].length, buttonType);
              setMainSummary(InitButton[buttonType][i].summary);
              if (InitButton[buttonType][i].message != null)
                alert(InitButton[buttonType][i].message);
            }}
          >
            <div className="button-value">
              {InitButton[buttonType][i].title}
            </div>
          </button>
        );
      } else {
        array.push(
          <button
            id={InitButton[buttonType][i].title}
            className="button"
            key={"button" + "-" + buttonType + "-" + i}
            style={{ backgroundColor: "white" }}
            onClick={() => {
              setMainImage(InitButton[buttonType][i].imagename);
              오른쪽버튼색변경(i, InitButton[buttonType].length, buttonType);
              setMainSummary(InitButton[buttonType][i].summary);
              if (InitButton[buttonType][i].message != null)
                alert(InitButton[buttonType][i].message);
            }}
          >
            <div className="button-value">
              {InitButton[buttonType][i].title}
            </div>
          </button>
        );
      }
    }
    return array;
  }

  function 왼쪽꺼() {
    var array = [];

    for (let i = 0; i < buttonData.length; i++) {
      if (i == 0) {
        array.push(
          <button
            id={buttonData[i].id}
            className="button"
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            key={"button" + i}
            onClick={() => {
              왼쪽버튼색변경(i, buttonData.length, buttonData[i].id);
              setMainSummary(buttonData[i].text);
              setButtonType(buttonData[i].id);

              setMainImage(buttonData[i].image);
            }}
          >
            <div className="button-value">{buttonData[i].value}</div>
          </button>
        );
      } else {
        array.push(
          <button
            id={buttonData[i].id}
            className="button"
            key={"button" + i}
            onClick={() => {
              왼쪽버튼색변경(i, buttonData.length, buttonData[i].id);
              setMainSummary(buttonData[i].text);
              setButtonType(buttonData[i].id);

              setMainImage(buttonData[i].image);
            }}
          >
            <div className="button-value">{buttonData[i].value}</div>
          </button>
        );
      }
    }
    return array;
  }
  return (
    <div className="incorrectmanage">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img
          className="incorrectmanage-image left"
          style={{ borderRadius: "15px" }}
          src={main_icon12_hover}
        />
        <section className="buttons">
          아래 버튼을 클릭하여 시험지 만드는 방법을 알 수 있습니다.
          {왼쪽꺼()}
        </section>
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="incorrectmanage-main description">
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
          {연습(buttonType)}
        </section>
      </aside>
    </div>
  );
};

export default IncorrectManage;
