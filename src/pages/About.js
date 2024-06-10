import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          src={profile}
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title">Lucius Brown</div>
          <div className="brief_description">
          Hey, my name is Lucius Brown and I'm a rising junior at Yale studying Mathematics and Computer Science.
          </div>

          <div className="brief_description">
          I'm also a member of the varsity men's swim team, specializing in the 50 freestyle and backstroke. 
          </div>
          <div className="brief_description">
          When I'm not studying or swimming, I enjoy playing the piano, chess, anime, surfing, golfing, and anything else that is outdoors and active.
          </div>
          <div>

          </div>
          </div>

          </div>
          </div>
      </div>
    )
  }
}