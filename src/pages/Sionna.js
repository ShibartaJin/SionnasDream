import React from 'react'
import {useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import "../styles/Sionna.css";
import "../styles/Spear.css";
import SionnaCover from "../assets/Sionna720.jpg";
import arrowHead from "../assets/arrowHeadRight.png";
import SpearSeperator from '../components/SpearSeperator';


//import SionnaCoverSmall from "../assets/SionnaCoverSmall.jpg"
function PropicReturn(){
  /* */
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        //window.innerHeight,
      ]);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
      
  
    if(windowSize[0] > 600) {
      
      return SionnaCover;
    
    } 
    else{
      return SionnaCover;
      
    }
  
}

function ScrollSensitiveDiv({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0 && window.innerWidth < 1100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    function handleResize() {
      handleScroll();
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Set up the jumping effect interval
    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500); // Reset after 500ms
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearInterval(jumpInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`scroll-sensitive-div ${isJumping ? 'jumping' : ''}`}>
      {children}
    </div>
  );
}

// Usage

function Sionna() {

  // Function to generate chapter length bars
  const generateChapterLengthBars = (numBars) => {
    return Array(numBars).fill().map((_, index) => (
      <div key={index} className="length-bar">
        <div className="length-bar-shade"></div>
      </div>
    ));
  };

  return (
    <div className="SionnaMain">
      <div className="about">
          <div className="bg-image"></div>

          <div className="propic">
            <div className='img-container'>
              <img src={PropicReturn()} alt="Profile Picture" />
            </div>
          </div>

          <ScrollSensitiveDiv>
            <img src={arrowHead}></img>

          </ScrollSensitiveDiv>

      </div>
      
      <div className="contentPage">

        <h1>最新消息</h1>
        <p>休刊中，預計下一章推出時間: 11月29日(五)<br/>
        目前僅為初稿，時有修改，只供朋友間傳閱<br/>
        謝謝你打開了我
        </p>

        <h1>目錄</h1>

        <SpearSeperator/>

        <ul className="chapterList">
          <h3>第一篇：綠林與石堡</h3>

          <ul className="eachAct act1">
            <li><div class="chapter-link"><Link to="/SionnasDream/0" className="link">零‧夢的鬧鐘 (新!)</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(427 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/1" className="link">一‧女王夢</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(4801 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/2" className="link">二‧靈魂請了假</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(3294 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/3" className="link">三‧為不運動而熱身</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(2696 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/4" className="link">四‧窗外的樹</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(3257 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/5" className="link">五‧騎士與女王</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(4972 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/6" className="link">六‧不想走的路</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(4751 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/7" className="link">七‧這是遊戲啊</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(4982 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/8" className="link">八‧征伐、戰爭、温飽、生活 (新!)</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(3157 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/9" className="link">九‧要愛情、也要戰爭 (新!)</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(8202 / 1000))}</div>
            </li>
            <li><div class="chapter-link"><Link to="/SionnasDream/9x" className="link">後‧夢境(新!)</Link></div>
            <div class="chapter-length">{generateChapterLengthBars(Math.ceil(199 / 1000))}</div>
            </li>

          </ul>

        </ul>

        <div className="credits">
        <h1>鳴謝</h1>
        <p>Herr Issac (首位讀者)<br />
           Xenia the Senior<br />
           冰<br />
           Annie<br />
           Michelle<br />
           Chloe<br />
           Thomas the Engine</p>
        </div>

      </div>

    </div>


  )
}

export default Sionna