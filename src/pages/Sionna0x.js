import React from 'react';
import "../styles/SionnaPages.css";
import "../styles/Spear.css";
import { useNavigate } from 'react-router-dom'
import arrowHead from "../assets/arrowHeadRight.png";

const chapterID = 0;

function Sionna0x() {

  const navigate = useNavigate();

  return (
    <div className="SionnaPages">
      <div className="storyContent">


        <div className="actTitleCard">
          <h1 className="BookTitle">施安娜的女王夢</h1>
          <h3 className="actTitle">第一篇：「綠林與石堡」</h3>

        </div>

        <div className="chapterHeading chapterHeadingBottom">
          <div className="previousButton navButton" onClick={() => {navigate("/SionnasDream/0")}}>
              <img src={arrowHead}></img>
          </div>
          <div className="navButton" onClick={() => {navigate("/SionnasDream")}}>
            <h2 className="chapterTitle">回主目錄</h2>
          </div>
          <div className="nextButton navButton" onClick={() => {navigate("/SionnasDream/"+ (chapterID + 1))}}>
              <img src={arrowHead}></img>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Sionna0x