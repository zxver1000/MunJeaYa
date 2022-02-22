import "../style/paperregistration.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { LooksOneIcon, LooksTwoIcon } from "./components/Icon";

const PaperRegistration = () => {
  const [mainImage, setMainImage] = useState(paperregistration_before);
  return (
    <div className="paperregistration">
      {/* aside left :: 해당 페이지 정보 이미지로 표기하는 부분 */}
      <aside className="left">
        <img className="paperregistration-image left" src={main_icon12_hover} />
      </aside>
      {/* pagename-main :: 해당 페이지의 주 내용 부분이 담기는 부분 */}
      <div className="paperregistration-main"></div>
      {/* aside right :: 해당 페이지의 Flow를 설명하는 부분 + 메인으로 돌아가는 버튼 존재 */}
      <aside className="right">
        <Link to="/main">
          <img
            className="paperregistration-image right"
            src={main_icon12_hover}
          />
        </Link>
        <section>
          번호가 입력된 부분을 클릭하면 다음을 실행할 수 있습니다.
          <article>
            <LooksOneIcon></LooksOneIcon>회원 정보를 입력할 수 있습니다.
          </article>
          <article>
            <LooksTwoIcon></LooksTwoIcon>회원 정보를 입력할 수 있습니다.
          </article>
        </section>
      </aside>
    </div>
  );
};

export default PaperRegistration;
