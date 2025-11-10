"use client";

import React, { useRef, useEffect } from "react";
import Button from "./Button";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const handlePlayDemo = () => {
    // Handle demo play functionality
    console.log("Play demo clicked");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handlePlayDemo();
    }
  };

  return (
    <>
      {/* Play Button */}

      {/* Video */}
      <div className="max-w-4xl mx-auto">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg pointer-events-none select-none"
          muted
          loop
          playsInline
        >
          <source src="/media/homepage_video.mp4" type="video/mp4" />
          <source src="/media/homepage_video.webm" type="video/webm" />
          <p className="text-center p-4">
            برای مشاهده این ویدیو، لطفاً JavaScript را فعال کنید و مرورگر خود را
            به‌روزرسانی کنید که
            <a
              href="https://videojs.com/html5-video-support/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-metabase-primary-dark underline"
            >
              از HTML5 video پشتیبانی کند
            </a>
          </p>
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
