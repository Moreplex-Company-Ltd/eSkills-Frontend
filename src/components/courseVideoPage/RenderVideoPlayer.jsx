import React from 'react';
import VideoJS from '../../utils/Video';
import videojs from 'video.js';

const RenderVideoPlayer = () => {
    const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://moreplex-eskills-storage.s3.amazonaws.com/Courses/mesa_course_1/module_2/course1_intro.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
    <>
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady}  />
    </>
  )
}

export default RenderVideoPlayer