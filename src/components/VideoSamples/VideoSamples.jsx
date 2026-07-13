import React from 'react';
import { FaPlay } from 'react-icons/fa';
import './VideoSamples.css';

// ------------------------------------------------------------------
// Add your AI ad reels here.
//
// OPTION 1 — Local video file (best if the file is small, <20MB or so):
//   1. Drop your .mp4 file into the `public/videos/` folder
//      (create that folder if it doesn't exist yet)
//   2. Set `src` below to '/videos/your-file-name.mp4'
//
// OPTION 2 — YouTube (best for larger files, no size limit):
//   1. Upload the video to YouTube, set visibility to "Unlisted"
//   2. Copy the video ID from the URL:
//      https://www.youtube.com/watch?v=COPY_THIS_PART
//   3. Paste that ID as the youtubeId below
//
// OPTION 3 — Google Drive (fallback, needs "Anyone with the link" sharing):
//   1. In Drive, right-click the video -> Share -> "Anyone with the link" -> Viewer
//   2. Copy the file's ID from the share URL:
//      https://drive.google.com/file/d/COPY_THIS_PART/view
//   3. Paste that ID as the driveId below.
//
// Priority if multiple are filled in: src > youtubeId > driveId.
// Leave all three empty ('') to show a placeholder card until ready.
// ------------------------------------------------------------------
const videoSamples = [
  {
    id: 1,
    title: 'Street Interview',
    client: 'Client / Brand',
    platform: 'TikTok',
    src: '', // e.g. '/videos/street-interview.mp4'
    youtubeId: '', // e.g. 'dQw4w9WgXcQ'
    driveId: '1FJ7tTVVecOwyIwcLyzygibb2lWHpxwpk',
  },
  {
    id: 2,
    title: 'UGC Style Ad',
    client: 'Client / Brand',
    platform: 'Shopee',
    src: '', // e.g. '/videos/ugc-style-ad.mp4'
    youtubeId: '', // e.g. 'dQw4w9WgXcQ'
    driveId: '1h9hmoymeNur6ipYPMXj5c2Ic1jDnTDbI',
  },
  {
    id: 3,
    title: 'Podcast Clip',
    client: 'Client / Brand',
    platform: 'TikTok',
    src: '', // e.g. '/videos/podcast-clip.mp4'
    youtubeId: '', // e.g. 'dQw4w9WgXcQ'
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
            ) : video.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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
                <small>Add a video file, YouTube ID, or Drive file ID</small>
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
