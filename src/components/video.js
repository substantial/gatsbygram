import React from 'react'

const cdnUrl = (id, extension) =>
  `https://res.cloudinary.com/schmitzc/image/upload/${id}.${extension}`

const Video = ({ videoId}) => (
  <video
    autoPlay
    loop
    playsInline
    muted
    poster={cdnUrl(videoId, 'jpg')}
  >
    <source src={cdnUrl(videoId, 'webm')} type="video/webm" />
    Your browser does not support the HTML5 video tag.
  </video>
)

export default Video