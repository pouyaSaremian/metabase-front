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
      <Button
        onClick={handlePlayDemo}
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-metabase-primary border-4 border-metabase-primary-lighter rounded-full w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-metabase-primary"
        aria-label="پخش ویدیو دمو"
      >
        <svg
          width="33"
          height="33"
          viewBox="0 0 10 12"
          fill="white"
          className="mr-1"
        >
          <path d="M9.0625 5.02572C9.8125 5.45873 9.8125 6.54127 9.0625 6.97428L2.3125 10.8714C1.5625 11.3044 0.625001 10.7631 0.625001 9.89711L0.625002 2.10289C0.625002 1.23686 1.5625 0.695594 2.3125 1.12861L9.0625 5.02572Z"></path>
        </svg>
      </Button>

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
              className="text-blue-600 underline"
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
