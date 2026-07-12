
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './VideoSamples.css';

// ------------------------------------------------------------------
// Add your AI ad reels here.
//
// For a Google Drive video:
//   1. In Drive, right-click the video -> Share -> "Anyone with the link" -> Viewer
//   2. Copy the file's ID from the share URL:
//      https://drive.google.com/file/d/COPY_THIS_PART/view
//   3. Paste that ID as the driveId below.
//
// Leave driveId empty ('') to show a placeholder card until the video is ready.
// ------------------------------------------------------------------
const videoSamples = [
  {
    id: 1,
    title: 'Ad Sample 1',
    client: 'Client / Brand',
    platform: 'TikTok',
    driveId: '',
  },
  {
    id: 2,
    title: 'Ad Sample 2',
    client: 'Client / Brand',
    platform: 'Shopee',
    driveId: '',
  },
  {
    id: 3,
    title: 'Ad Sample 3',
    client: 'Client / Brand',
    platform: 'TikTok',
    driveId: '',
  },
];

const VideoSamples = () => {
  return (
    <div className="video-grid">
      {videoSamples.map((video) => (
        <div className="video-card" key={video.id}>
          <div className="video-frame">
            {video.driveId ? (
              <iframe
                src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                title={video.title}
                allow="autoplay"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">
                <FaPlay />
                <p>{video.title}</p>
                <small>Add a Google Drive file ID</small>
              </div>
            )}
          </div>
          <div className="video-info">
            <h3>{video.title}</h3>
            <div className="pill-container">
              <span className="pill">{video.client}</span>
              <span className="pill">{video.platform}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoSamples;
