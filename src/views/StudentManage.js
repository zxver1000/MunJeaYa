import "../style/coursemanage.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import main_icon6_hover from "../assets/main_icons/main_icon6_hover.png";

import student_manage_01 from "../assets/studentmanage/06-01.png";
import student_manage_02 from "../assets/studentmanage/06-02.png";
import student_manage_03 from "../assets/studentmanage/06-03.png";
import student_manage_04 from "../assets/studentmanage/06-04.png";
import student_manage_05 from "../assets/studentmanage/06-05.png";
import student_manage_06 from "../assets/studentmanage/06-06.png";
import student_manage_07 from "../assets/studentmanage/06-07.png";
import student_manage_08 from "../assets/studentmanage/06-08.png";
import student_manage_09 from "../assets/studentmanage/06-09.png";
import student_manage_10 from "../assets/studentmanage/06-10.png";
import student_manage_11 from "../assets/studentmanage/06-11.png";
import student_manage_12 from "../assets/studentmanage/06-12.png";
import student_manage_13 from "../assets/studentmanage/06-13.png";
import student_manage_14 from "../assets/studentmanage/06-14.png";
import student_manage_15 from "../assets/studentmanage/06-15.png";
import student_manage_16 from "../assets/studentmanage/06-16.png";

/*
  하단 title, summary, imagename 작성하여 개수만 늘려주면 됨
  title     : 버튼이름
  summary   : 버튼을 눌렀을 때, 나오는 설명
  imagename : import된 이름만 작성(경로, .png 작성 X)
 */
const InitButtonData = [
  {
    title: "excel 일괄등록",
    summary: "엑셀에 있는 학생들 정보를 저장할수 있는 기능입니다.",
    imagename: student_manage_02,
    alertMessage: "1명의 학생을 등록하였습니다",
  },
  {
    title: "신규 학생 등록",
    summary: "신규 학생을 등록하는 기능입니다.",
    imagename: student_manage_03,
  },
  {
    title: "학생 정보 입력",
    summary: "학생 정보 입력",
    imagename: student_manage_04,
  },
  {
    title: "학생 등록하기",
    summary: "학생정보가 등록된것을 확인하실수 있습니다.",
    imagename: student_manage_05,
  },
  {
    title: "학생 정보 수정",
    summary: "학생정보를 수정할수있는 기능입니다",
    imagename: student_manage_06,
  },
  {
    title: "수정 데이터 입력",
    summary: "수정할 데이터 입력",
    imagename: student_manage_07,
  },
  {
    title: "학생 정보 수정",
    summary: "학생 정보 수정",
    imagename: student_manage_08,
  },
  {
    title: "신규 수강 등록",
    summary: "학생이 수강할 Class를 등록하는 기능입니다.",
    imagename: student_manage_09,
  },
  {
    title: "수강 반 입력",
    summary: "수강할 Class 입력",
    imagename: student_manage_10,
  },
  {
    title: "수강 등록하기",
    summary: "수강 등록이 되신것을 확인하실수 있습니다.",
    imagename: student_manage_11,
  },
  {
    title: "수강 등록 수정",
    summary: "수강신청한 Class를 변경하는 기능입니다.",
    imagename: student_manage_12,
  },
  {
    title: "수정할 수강 반 데이터 입력",
    summary: "변경할 데이터 입력하기",
    imagename: student_manage_13,
  },
  {
    title: "수강 등록 수정",
    summary: "수강 등록 수정이 되신것을 알수있습니다.",
    imagename: student_manage_14,
  },
  {
    title: "수강 등록 삭제",
    summary: "등록한 Class를 삭제할수있는 기능입니다.",
    imagename: student_manage_15,
    alertMessage: "수강 반이 삭제되었습니다.",
  },
  {
    title: "학생 정보 삭제",
    summary: "학생정보를 삭제할수있는 기능입니다.",
    imagename: student_manage_16,
    alertMessage: "학생 정보가 삭제되었습니다.",
  },
];
const CourseManage = () => {
  const [mainImage, setMainImage] = useState(student_manage_01);
  const [mainSummary, setMainSummary] = useState(
    "수강생 관리기능은 학생과 수강반을 등록,삭제,수정기능을 담당하고있습니다."
  );
  return (
    <div className="coursemanage">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="coursemanage-image left" src={main_icon6_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="coursemanage-main">
        <img className="image" src={mainImage} />
        <article className="summary">{mainSummary}</article>
      </div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img className="coursemanage-image right" src={main_icon6_hover} />
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

export default CourseManage;
