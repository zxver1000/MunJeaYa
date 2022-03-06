import "../style/coursemanage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon5_hover from "../assets/main_icons/main_icon5_hover.png";
import go_main from "../assets/goMain.png";
import course_manage_01 from "../assets/coursemanage/05-01.png";
import course_manage_02 from "../assets/coursemanage/05-02.png";
import course_manage_03 from "../assets/coursemanage/05-03.png";
import course_manage_04 from "../assets/coursemanage/05-04.png";
import course_manage_05 from "../assets/coursemanage/05-05.png";
import course_manage_06 from "../assets/coursemanage/05-06.png";
import course_manage_07 from "../assets/coursemanage/05-07.png";
import course_manage_08 from "../assets/coursemanage/05-08.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "반 만들기",
    summary: "",
    imagename: course_manage_02,
  },
  {
    title: "반 정보입력",
    summary: "",
    imagename: course_manage_03,
  },
  {
    title: "새로운 반 생성",
    summary: "",
    imagename: course_manage_04,
  },
  {
    title: "반 수정하기",
    summary: "",
    imagename: course_manage_05,
  },
  {
    title: "수정 데이터 입력",
    summary: "",
    imagename: course_manage_06,
  },
  {
    title: "반 정보 수정하기",
    summary: "",
    imagename: course_manage_07,
  },
  {
    title: "반 삭제하기",
    summary: "",
    imagename: course_manage_08,
    alertMessage: "반이 삭제되었습니다",
  },
];

const CourseManage = () => {
  const [mainImage, setMainImage] = useState(course_manage_01);
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
    <div className="coursemanage">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img
          className="coursemanage-image left"
          style={{ borderRadius: "15px" }}
          src={main_icon5_hover}
        />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="coursemanage-mai description">
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

export default CourseManage;
