import "../style/errorcorrection.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import main_icon10_hover from "../assets/main_icons/main_icon10_hover.png";
import go_main from "../assets/goMain.png";

const Premium_product = () => {
  const [mainSummary, setMainSummary] = useState("");

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h3>준비중입니다</h3>
      <h3>자세한문의는 010-2004-1484로 부탁드립니다</h3>
    </div>
  );
};

export default Premium_product;
