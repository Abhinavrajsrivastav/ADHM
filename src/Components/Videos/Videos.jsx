import React from 'react';
import './Videos.css';
import VideoC from './VideoC/VideoC';

function Videos() {
  return (
    <div className="Video-Container">
        <div className="Video-Head">
            <h2>Videos from Ayodhya</h2>
            <span>This section is dedicated to some wonderful content creators devoted to creating amazing and latest content on our city of faith.</span>
        </div>
        <div className="Videos-Body">
          <VideoC vId={'HPcWQG2yGlE'}/>
          <VideoC vId={'KEs9sPq0X04'}/>
          <VideoC vId={'MHQdFG62rGw'}/>
        </div>
        {/* <div className="Video-Fotter">
            © 2024 Ayodhya Dham Travel Guide. All rights reserved.
        </div> */}
    </div>
  )
}

export default Videos