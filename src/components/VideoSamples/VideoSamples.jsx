import React, { useState } from 'react';
import { FaPlay, FaArrowRight, FaFolderOpen } from 'react-icons/fa';
import './VideoSamples.css';

// ------------------------------------------------------------------
// HOW TO EDIT THIS SECTION
//
// 1. Each category below has a `moreUrl`. Paste the Google Drive FOLDER
//    link for that category there. The "More videos" button opens it.
//    (Drive: right-click folder -> Share -> "Anyone with the link" -> Copy link)
//
// 2. Each video needs a `driveId`: the part of the file's share link
//    https://drive.google.com/file/d/COPY_THIS_PART/view
//    The file must be shared as "Anyone with the link" -> Viewer.
//
// 3. Leave `driveId` as '' to show an empty "coming soon" slot.
// ------------------------------------------------------------------
const MORE_ADS = 'https://drive.google.com/drive/folders/1g_PSCW0gepwx59tEHbiwpp55g5r8dvw3?usp=drive_link';

const categories = [
  {
    id: 'vsl',
    title: 'VSL',
    desc: 'Long-form video sales letters built to hold attention and convert.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'VSL #1', platform: 'Meta', driveId: '1MIscvsgA7_1Rqzar1Ivqzk2zDRTU_1Ks' },
      { title: 'VSL #2', platform: 'Meta', driveId: '1gCaBiEyAEJOSkZ8IZ0VlRI_yZ0z9vqeq' },
    ],
  },
  {
    id: 'doctor-ugc',
    title: 'Doctor / Herbalist UGC',
    desc: 'Authority-led AI doctor and herbalist presenters for health & wellness ads.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'Doctor UGC #1', platform: 'Meta', driveId: '1-HLwlYcEIZdg0qtSM890RSuL_jT3RQNx' },
      { title: 'Doctor UGC #2', platform: 'Meta', driveId: '131eJu-cfWTjpPIm4w4yGCLNGEc_GUb1v' },
      { title: 'Doctor UGC #3', platform: 'Meta', driveId: '1YtUX4RsOvkON9E0GdrBDIushdg0JQmHU' },
    ],
  },
  {
    id: 'realism-ugc',
    title: 'Realism UGC / Mini VSL',
    desc: 'Ads that look and feel like real creators filming on a phone.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'Realism UGC #1', platform: 'Meta', driveId: '1Udjp6Zj0wNA_1-5bxs1hoKY7-V8p_g7e' },
      { title: 'Realism UGC #2', platform: 'Meta', driveId: '11YhbtfVRhrNtBwsOPk5L76Y5AQQ2O0bp' },
      { title: 'Mini VSL', platform: 'Meta', driveId: '1hrImvr5n6XFSh0SWzYkwL4vY5ZvrnoFP' },
    ],
  },
  {
    id: 'pixar',
    title: 'Pixar / 3D Animation',
    desc: 'Animated 3D character ads with a stylized, story-first look.',
    moreUrl: 'https://drive.google.com/drive/folders/1fTHzUve2XGtLuFv-vCMW2XExGBMdCr5K?usp=drive_link',
    videos: [
      { title: 'Pixar-Style #1', platform: 'Meta', driveId: '1gCaBiEyAEJOSkZ8IZ0VlRI_yZ0z9vqeq' },
      { title: 'Pixar-Style #2', platform: 'Meta', driveId: '1Mc8Q_IiKRbR__1hdqd0cfIQ1TT7ZCmrp' },
    ],
  },
  {
    id: 'before-after',
    title: 'Before & After UGC',
    desc: 'Transformation-driven ads that show the result, not just the claim.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'Before & After #1', platform: 'Meta', driveId: '15RvxKmS_5lUgH6kgK73rYelh8Fj0B2bG' },
      { title: 'Before & After #2', platform: 'Meta', driveId: '1bPUI5Qw012MgkY-ULl8SFTkd9as3PxFg' },
      { title: 'Before & After #3', platform: 'Meta', driveId: '1ssUXXWGPHVU0gW9OVvituxFEkIVOirFs' },
    ],
  },
  {
    id: 'static-ads',
    type: 'image',
    title: 'Static Ads',
    desc: 'Scroll-stopping image ads designed for Meta feeds and stories.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'Static Ad #1', platform: 'Meta', driveId: '1I_cfsgr3BZ3vpLtdDXY51OO-rwpS0xAI' },
      { title: 'Static Ad #2', platform: 'Meta', driveId: '1pORuj98d5Mfh7J-Vh6uecYVp_s31ST5k' },
      { title: 'Static Ad #3', platform: 'Meta', driveId: '1UWPXDXjz1nNlfte0_X5yhIUp3HCp62-Z' },
      { title: 'Static Ad #4', platform: 'Meta', driveId: '1GL98C_LJyMORZwOD07AjcEqB7pjTJEhN' },
      { title: 'Static Ad #5', platform: 'Meta', driveId: '1EfGxW2NedMg78zpyrrYX4KyLyw3bBXdU' },
    ],
  },
  {
    id: 'crypto',
    title: 'Crypto Ads',
    desc: 'Raw cuts from crypto client work. The polished final edits are under NDA and can\'t be shared.',
    moreUrl: MORE_ADS,
    videos: [
      { title: 'Crypto Ad #1 (raw)', platform: 'Meta', driveId: '16AmVLQrnJTbXAiS-OGrCtrmjPkanAHGF' },
      { title: 'Crypto Ad #2 (raw)', platform: 'Meta', driveId: '1hZEX613Bu8Jr7OrTEiJBJd7xiGwpxort' },
      { title: 'Crypto Ad #3 (raw)', platform: 'Meta', driveId: '1-J9-NKzilQf1DJ7Um6aGvwHgIBWl5B-z' },
    ],
  },
];

// Click-to-play card: shows a Drive thumbnail first, loads the player only on click.
// This keeps the page fast even with 13 videos.
const VideoCard = ({ video }) => {
  const [playing, setPlaying] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);

  return (
    <div className="video-card">
      <div className="video-frame">
        {video.folderUrl ? (
          <a
            className="video-folder"
            href={video.folderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFolderOpen />
            <p>{video.title}</p>
            <small>Open folder <FaArrowRight /></small>
          </a>
        ) : !video.driveId ? (
          <div className="video-placeholder">
            <FaPlay />
            <p>{video.title}</p>
            <small>Coming soon</small>
          </div>
        ) : playing ? (
          <iframe
            src={`https://drive.google.com/file/d/${video.driveId}/preview`}
            title={video.title}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            {thumbOk && (
              <img
                src={`https://drive.google.com/thumbnail?id=${video.driveId}&sz=w600`}
                alt=""
                loading="lazy"
                onError={() => setThumbOk(false)}
              />
            )}
            <span className="video-play-btn"><FaPlay /></span>
          </button>
        )}
      </div>
      <div className="video-info">
        <h4>{video.title}</h4>
        <span className="pill">{video.platform}</span>
      </div>
    </div>
  );
};

// Static ads: show the image itself; clicking opens the full-size file in Drive.
const ImageCard = ({ item }) => {
  const [ok, setOk] = useState(true);
  return (
    <div className="video-card">
      <a
        className="image-frame"
        href={`https://drive.google.com/file/d/${item.driveId}/view`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.title}`}
      >
        {ok ? (
          <img
            src={`https://drive.google.com/thumbnail?id=${item.driveId}&sz=w800`}
            alt={item.title}
            loading="lazy"
            onError={() => setOk(false)}
          />
        ) : (
          <span className="image-fallback">View ad</span>
        )}
      </a>
      <div className="video-info">
        <h4>{item.title}</h4>
        <span className="pill">{item.platform}</span>
      </div>
    </div>
  );
};

const VideoSamples = () => {
  return (
    <div className="video-categories">
      {categories.map((cat) => (
        <div className="video-category" key={cat.id}>
          <div className="video-category-head">
            <div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
            {cat.moreUrl && (
              <a
                className="more-videos-btn"
                href={cat.moreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                More videos <FaArrowRight />
              </a>
            )}
          </div>
          <div className={cat.type === 'image' ? 'video-grid image-grid' : 'video-grid'}>
            {cat.videos.map((video, i) =>
              cat.type === 'image' ? (
                <ImageCard item={video} key={`${cat.id}-${i}`} />
              ) : (
                <VideoCard video={video} key={`${cat.id}-${i}`} />
              )
            )}
          </div>
        </div>
      ))}

      <div className="more-ads-cta">
        <div>
          <h3>Want to see more?</h3>
          <p>Browse the full library of AI video ads.</p>
        </div>
        <a
          className="more-videos-btn more-ads-btn"
          href={MORE_ADS}
          target="_blank"
          rel="noopener noreferrer"
        >
          More ads <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default VideoSamples;
