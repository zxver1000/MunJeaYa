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
import naegi_button from "../assets/createpaper/01-21.png";
import quest_easy from "../assets/createpaper/01-15.png";
import last_image from "../assets/createpaper/01-20.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonDataFirst = [
  {
    title: "SET",
    summary: "학원 및 학생 분류에 맞게 문제 출제 설정",
    imagename: data_set,
  },

  {
    title: "시험지 만들기 설정",
    summary: "",
    imagename: main_image,
    message: "시험지 설정이 완료되었습니다.",
  },
  {
    title: "카테고리 선택",
    summary: "원하시는 카테고리를 선택하실수 있습니다.",
    imagename: category_select,
  },

  {
    title: "시험지명 입력",
    summary: "시험지 이름을 자유롭게 설정하실수있습니다.",
    imagename: test_name,
  },
  {
    title: "난이도별 출제",
    summary: "유형 또는 출제 범위 카테고리 선택 후 문항 수 설정",
    imagename: difficulty_level,
  },
  {
    title: "유형별 출제",
    summary: "유형을 카테고리에서 선택 후 문항 수 설정",
    imagename: test_type,
  },
  {
    title: "문제 선택 출제",
    summary: [
      "카테고리 유형을 더블클릭하면 문제 선택",
      <br />,
      "문제 선택 순서대로 저장되므로 교재 작업 시 교재연동 시킬 시 유용",
      <br />,
      "윈도우와 한글의 충돌로 튕김 현상이 발생할 수 있습니다.",
    ],
    imagename: test_select,
  },
];
const InitButtonDataSecond = [
  {
    title: "2문제 씩 출제",
    summary: "시험지 한페이지에 2문제씩 출제하도록 변경합니다",
    imagename: quest_2,
  },
  {
    title: "4문제 씩 출제",
    summary: "시험지 한페이지에 4문제씩 출제하도록 변경합니다",
    imagename: quest_4,
  },
  {
    title: "6문제 씩 출제",
    summary: "시험지 한페이지에 6문제씩 출제하도록 변경합니다",
    imagename: quest_6,
  },
  {
    title: "내지 선택",
    summary: [
      "마음에드는 시험지 배경을 선택하실수있습니다.",
      <br />,
      "10가지 내지는 기본으로 제공됩니다",
    ],
    imagename: naegi_button,
  },
  {
    title: "문제 정렬",
    summary: "원하시는 정렬에 따라 시험지를 만드실수있습니다.",
    imagename: quest_easy,
  },

  {
    title: "시험지 저장 및 배포",
    summary: "",
    imagename: last_image,
    summary: [
      "시험지는 배포시 자동 한글 파일로 저장되어집니다.",
      <br />,
      "저장된시험지는 QuizPaper 폴더에서 확인하실수있습니다",
      <br />,
      "PDF,HWP파일로 저장할수있습니다.",
    ],
    message: "학생들에게 시험지가 배포되었습니다.",
  },
];
const CreatePaper = () => {
  const [buttonType, setButtonType] = useState(false);
  const [mainImage, setMainImage] = useState(main_image);
  const [mainSummary, setMainSummary] = useState([
    "안전한 구현을 위해서 시험지 1개에 200문항으로 제한",
    <br />,
    "책 만들기에서는 제한 없이 적용",
  ]);

  let [지금누름, 지금누른거변경] = useState(0);
  let [왼쪽버튼, 왼쪽버튼누른거변경] = useState(0);
  function 오른쪽버튼색변경(idx, total, button_num) {
    if (button_num == 0) {
      let 누른거 = InitButtonDataFirst[idx].title;
      누른거 = document.getElementById(누른거);
      누른거.style.backgroundColor = "rgb(159, 169, 216)";
      for (let i = 0; i < total; i++) {
        if (i == idx) {
          continue;
        }
        let 누른거 = document.getElementById(InitButtonDataFirst[i].title);
        누른거.style.backgroundColor = "white";
      }
    } else {
      let 누른거 = InitButtonDataSecond[idx].title;
      누른거 = document.getElementById(누른거);
      누른거.style.backgroundColor = "rgb(159, 169, 216)";
      for (let i = 0; i < total; i++) {
        if (i == idx) {
          continue;
        }
        let 누른거 = document.getElementById(InitButtonDataSecond[i].title);
        누른거.style.backgroundColor = "white";
      }
    }
  }
  function 왼쪽버튼색변경(idx, total) {
    let 누른거 = "left_button" + idx;
    누른거 = document.getElementById(누른거);
    누른거.style.backgroundColor = "rgb(159, 169, 216)";
    for (let i = 1; i <= total; i++) {
      if (i == idx) {
        continue;
      }
      let 누른거 = "left_button" + i;
      누른거 = document.getElementById(누른거);
      누른거.style.backgroundColor = "white";
    }
  }

  return (
    <div className="createpaper">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img
          className="createpaper-image left"
          style={{ borderRadius: "15px" }}
          src={main_icon12_hover}
        />
        <section className="buttons">
          아래 버튼을 클릭하여 시험지 만드는 방법을 알 수 있습니다.
          <button
            id="left_button1"
            className="button"
            style={{ backgroundColor: "rgb(159, 169, 216)" }}
            onClick={() => {
              setButtonType(false);
              setMainImage(main_image);
              왼쪽버튼색변경(1, 2);
            }}
          >
            <div className="button-value">(1) 시험지 만들기 설정</div>
          </button>
          <button
            id="left_button2"
            className="button"
            onClick={() => {
              setButtonType(true);
              setMainImage(new_main_image);
              setMainSummary([
                "시험지 출제 양식 설정창입니다.",
                <br />,
                "시험지 저장 및 배포 시 저장 된 시험지들은 자동으로 QUIZ-PAPER폴더로 한글파일로 저장",
                <br />,
                "PDF파일로 저장을 원하시면 아이콘 클릭",
                <br />,
                "내지는 취향에 맞춰서 선택 사용하고 변경됩니다. [변경이나 추가를 원하시면 별도 문의]",
                <br />,
                "유사문항 : 카테고리 내 다른 문항 검색 변경",
                <br />,
                "오류신고 : 입력 후 문제수정 메뉴 접속하면 정보 알림 기능",
                <br />,
                "매쓰키 : 문제 핵심 키워드 작성 위한 배치",
              ]);
              왼쪽버튼색변경(2, 2);
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
        <div className="right" style={{ borderRadius: "15px" }}>
          기능 리스트
        </div>
        <section className="buttons">
          아래 버튼을 클릭하면 가운데 실행화면을 볼 수 있습니다.
          {buttonType == false
            ? InitButtonDataFirst.map((item, index) => {
                return (
                  <button
                    id={InitButtonDataFirst[index].title}
                    className="button"
                    key={"button-first" + index}
                    onClick={() => {
                      setMainImage(item.imagename);
                      setMainSummary(item.summary);
                      if (item.message != null) alert(item.message);
                      오른쪽버튼색변경(index, InitButtonDataFirst.length, 0);
                    }}
                  >
                    <div className="button-value">{item.title}</div>
                  </button>
                );
              })
            : InitButtonDataSecond.map((item, index) => {
                return (
                  <button
                    id={InitButtonDataSecond[index].title}
                    className="button"
                    key={"button-second" + index}
                    onClick={() => {
                      setMainImage(item.imagename);
                      setMainSummary(item.summary);
                      오른쪽버튼색변경(index, InitButtonDataSecond.length, 1);
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
