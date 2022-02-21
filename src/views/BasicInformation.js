import "../style/basicinformation.scss";
import React, { useState, useEffect } from "react";

import basicinformation_before from "../assets/basicinformation/12_basicinformation_before.png";
import basicinformation_after from "../assets/basicinformation/12_basicinformation_after.png";
import main_icon12_hover from "../assets/main_icons/main_icon12_hover.png";

const BasicInformation = () => {
  const [mainImage, setMainImage] = useState(basicinformation_before);
  return (
    <div className="basicinformation">
      <img className="basicinformation-image" src={main_icon12_hover} />
      <img className="basicinformation-main" src={mainImage} />
      <div className="basicinformation-buttons">
        <button
          className="basicinformation-button"
          type="button"
          onClick={() => setMainImage(basicinformation_after)}
        >
          회원(학원) 정보 입력
        </button>
        <button
          className="basicinformation-button"
          type="button"
          onClick={() => {
            alert("수정 완료되었습니다.");
          }}
        >
          회원(학원) 정보 수정
        </button>
        <button
          className="basicinformation-button"
          type="button"
          onClick={() => setMainImage(basicinformation_before)}
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default BasicInformation;
