import React from 'react';
import "../styles/SionnaPages.css";
import { useNavigate } from 'react-router-dom'
import arrowHead from "../assets/arrowHeadRight.png";
import SpearSeperator from '../components/SpearSeperator';

const chapterID = 1;

function Sionna1() {

  FetchTextFile();
  const navigate = useNavigate();

  return (
    <div className="SionnaPages">
      <div className="storyContent">

        <div className="chapterHeading">
          <div className="previousButton navButton" onClick={() => {navigate("/SionnasDream/" + 0.1)}}>
              <img src={arrowHead}></img>
          </div>
          <h2 className="chapterTitle">一‧女王夢</h2>
          <div className="nextButton navButton" onClick={() => {navigate("/SionnasDream/" + (chapterID + 1))}}>
              <img src={arrowHead}></img>
          </div>
        </div>

        <SpearSeperator/>

        <div className="fictionTextBox">
          <div id="fictionText" class="fictionText"></div>


        </div>
        
        <div className="chapterHeading">
          <div className="previousButton navButton" onClick={() => {navigate("/SionnasDream/" + 0.1)}}>
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

function FetchTextFile(){
  fetch('./text/sionna' + chapterID + '.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('fictionText').innerHTML = formatText(text);
    })
    .catch(error => console.error('Error:', error));  
}

function formatText(text) {
  text = text.replace(/(?<!\n)\n(?!\n)/g, '<br>');  // Replace single newlines with <br> tags
  text = text.replace(/\n\n/g, '</p><p>');  // Replace double newlines with paragraph tags
  text = '<p>' + text + '</p>';    // Wrap the entire text in paragraph tags
  text = text.replace(/\n{3,}/g, '<br></p><p>&nbsp;</p><p>');  // Replace triple or more newlines with <br> tags and an empty paragraph
  
  const sceneBreak = "</p><span class=\"sceneBreak\">* &nbsp* &nbsp*</span><p>";
  text = text.replace(/\*\s*\*\s*\*/g, sceneBreak);

  return text;
}

export default Sionna1