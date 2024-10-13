import React from 'react'
import {useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import "../styles/Sionna.css";
import "../styles/Spear.css";
import SionnaCover from "../assets/Sionna720.jpg";
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

/* 


          <ul className="act1">
            <li><a href="/SionnasDream/0">零‧夢的鬧鐘 (新!)</a></li>
            <li><a href="/SionnasDream/1">一‧女王夢</a></li>
            <li><a href="/SionnasDream/2">二‧靈魂請了假</a></li>
            <li><a href="/SionnasDream/3">三‧為不運動而熱身</a></li>
            <li><a href="/SionnasDream/4">四‧窗外的樹</a></li>
            <li><a href="/SionnasDream/5">五‧騎士與女王</a></li>
            <li><a href="/SionnasDream/6">六‧不想走的路</a></li>
            <li><a href="/SionnasDream/7">七‧這是遊戲啊</a></li>
            <li><a href="/SionnasDream/8">八‧征伐、戰爭、温飽、生活 (新!)</a></li>
            <li><a href="/SionnasDream/9">九‧要愛情、也要戰爭 (新!)</a></li>
            <li><a href="/SionnasDream/9x">後‧夢境(新!)</a></li>

          </ul>
*/

function Sionna() {
  return (
    <div className="SionnaMain">
      <div className="about">
          <div className="bg-image"></div>

          <div className="propic">
            <div className='img-container'>
              <img src={PropicReturn()} alt="Profile Picture" />
            </div>
          </div>

      </div>
      
      <div className="contentPage">

        <h1>目錄</h1>

        <div class="spear-container">
          <div class="spear spear-v2">
            <div class="spearhead">
              <div class="spearhead-shade"></div>
              <div class="spearDeco"></div>
              <div class="spearMidDeco"></div>
              <div class="spearEndDeco"></div>
            </div>
            <div class="shaft">
              <div class="shaft-shade"></div>
            </div>
          </div>
        </div>

        <ul className="list">
          <h3>第一篇：綠林與石堡</h3>

          <ul className="act1">
            <li><Link to="/SionnasDream/0" className="link"><a>零‧夢的鬧鐘 (新!)</a></Link></li>
            <li><Link to="/SionnasDream/1" className="link">一‧女王夢</Link></li>
            <li><Link to="/SionnasDream/2" className="link">二‧靈魂請了假</Link></li>
            <li><Link to="/SionnasDream/3" className="link">三‧為不運動而熱身</Link></li>
            <li><Link to="/SionnasDream/4" className="link">四‧窗外的樹</Link></li>
            <li><Link to="/SionnasDream/5" className="link">五‧騎士與女王</Link></li>
            <li><Link to="/SionnasDream/6" className="link">六‧不想走的路</Link></li>
            <li><Link to="/SionnasDream/7" className="link">七‧這是遊戲啊</Link></li>
            <li><Link to="/SionnasDream/8" className="link">八‧征伐、戰爭、温飽、生活 (新!)</Link></li>
            <li><Link to="/SionnasDream/9" className="link">九‧要愛情、也要戰爭 (新!)</Link></li>
            <li><Link to="/SionnasDream/9x" className="link">後‧夢境(新!)</Link></li>

          </ul>

        </ul>


      </div>

    </div>
  )
}

export default Sionna