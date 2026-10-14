import React, { useState } from 'react';
import './Tools.css';

// Logos are pulled from each tool's website favicon (no files to manage).
// To use a custom logo instead, drop an image in src/assets/logos/ and
// import it, then set `logo` on that tool (it wins over the favicon).
const tools = [
  { name: 'Kling AI',    domain: 'klingai.com',        use: 'Realistic human animation and image-to-video' },
  { name: 'Seedance',    domain: 'seed.bytedance.com', use: 'Natural body movement and expressive scenes' },
  { name: 'Google Veo',  domain: 'deepmind.google',    use: 'Realistic video generation and B-roll' },
  { name: 'Google Flow', domain: 'labs.google',        use: 'Creating and organizing AI-generated video scenes' },
  { name: 'Kie.ai',      domain: 'kie.ai',             use: 'Accessing multiple AI generation models' },
  { name: 'Grok Imagine',domain: 'grok.com',           use: 'AI image animation and video generation' },
  { name: 'Higgsfield',  domain: 'higgsfield.ai',      use: 'AI UGC ads and creative video workflows' },
  { name: 'HeyGen',      domain: 'heygen.com',         use: 'Talking avatars and lip-sync videos' },
  { name: 'Runway',      domain: 'runwayml.com',       use: 'AI video generation and visual editing' },
  { name: 'ElevenLabs',  domain: 'elevenlabs.io',      use: 'AI voice-overs, voice cloning, and multilingual narration' },
  { name: 'Suno',        domain: 'suno.com',           use: 'AI-generated background music, songs, and instrumentals' },
  { name: 'CapCut',      domain: 'capcut.com',         use: 'Editing, captions, sound effects, and final ad assembly' },
];

const ToolLogo = ({ tool }) => {
  const [failed, setFailed] = useState(false);
  const src = tool.logo || `https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`;

  if (failed) {
    return <span className="tool-logo-fallback">{tool.name.charAt(0)}</span>;
  }
  return (
    <img
      src={src}
      alt={`${tool.name} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

const Tools = () => (
  <div className="tools-grid">
    {tools.map((tool, i) => (
      <a
        key={tool.name}
        className="tool-card"
        href={`https://${tool.domain}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="tool-num">{String(i + 1).padStart(2, '0')}</span>
        <div className="tool-logo">
          <ToolLogo tool={tool} />
        </div>
        <h3>{tool.name}</h3>
        <p>{tool.use}</p>
      </a>
    ))}
  </div>
);

export default Tools;
