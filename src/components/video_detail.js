import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video){
    return <div>Video is Loading...</div>
  }
  var {title,description} = video.snippet;
  console.log(title);
  var videoId = video.id.videoId;
  var videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}>
        </iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
