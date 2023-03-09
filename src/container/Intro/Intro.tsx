import React, { useRef, useState } from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo)

    if(playVideo)
      vidRef.current?.pause();
    else
      vidRef.current?.play();
  }

  return (
    <div className='app__video'>
      <video src={meal} ref={vidRef} loop controls={false} muted />
      <div className={`app__video_overlay flex__center ${playVideo && 'video__active'}`}>
        <div className='app__video_overlay_circle flex__center'  onClick={handleVideo}>
          {playVideo 
            ? <BsPauseFill color='#fff' fontSize={30} />  
            : <BsPlayFill color='#fff' fontSize={30} />
          }
        </div>
      </div>
    </div>
  )
};

export default Intro;
