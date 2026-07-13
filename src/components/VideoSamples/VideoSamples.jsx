import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './VideoSamples.css';

// ------------------------------------------------------------------
// Add your AI ad reels here.
//
// PREFERRED — Local video file:
//   1. Drop your .mp4 file into the `public/videos/` folder
//      (create that folder if it doesn't exist yet)
//   2. Set `src` below to '/videos/your-file-name.mp4'
//
// FALLBACK — Google Drive (only if you haven't uploaded the file yet):
//   1. In Drive, right-click the video -> Share -> "Anyone with the link" -> Viewer
//   2. Copy the file's ID from the share URL:
//      https://drive.google.com/file/d/COPY_THIS_PART/view
//   3. Paste that ID as the driveId below.
//
// Leave both `src` and `driveId` empty ('') to show a placeholder card
// until the video is ready.
// ------------------------------------------------------------------
const videoSamples = [
  {
    id: 1,
    title: 'Street Interview',
    client: 'Client / Brand',
    platform: 'TikTok',
    src: '', // e.g. '/videos/street-interview.mp4'
    driveId: '1FJ7tTVVecOwyIwcLyzygibb2lWHpxwpk',
  },
  {
    id: 2,
    title: 'UGC Style Ad',
    client: 'Client / Brand',
    platform: 'Shopee',
    src: '', // e.g. '/videos/ugc-style-ad.mp4'
    driveId: '1h9hmoymeNur6ipYPMXj5c2Ic1jDnTDbI',
  },
  {
    id: 3,
    title: 'Podcast Clip',
    client: 'Client / Brand',
    platform: 'TikTok',
    src: '', // e.g. '/videos/podcast-clip.mp4'
    driveId: '1pq-sV4WjKy7vFqgWlNN5KEAE1xJvTTrW',
  },
];

const VideoSamples = () => {
  return (
    <div className="video-grid">
      {videoSamples.map((video) => (
        <div className="video-card" key={video.id}>
          <div className="video-frame">
            {video.src ? (
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
              />
            ) : video.driveId ? (
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
                <small>Add a video file or Google Drive file ID</small>
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
