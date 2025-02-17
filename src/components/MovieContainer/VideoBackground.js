import React from "react";

const VideoBackground = () => {
  return (
    <div>
      <video autoPlay loop muted className="w-screen aspect-video">
        <source
          src="https://imdb-video.media-imdb.com/vi3877612057/1434659607842-pgv4ql-1616202333253.mp4?Expires=1739863643&Signature=FyhiuuCoOjH0jHDxw9hxkklmO9Ug~shJebqPSzGqO-Z4Ptd3ETdDX5MrQ7wR8tqWRniJMsW4UkZytnngDuhDLMJ7-hgFpD9VYW8FqxObBb1ihDIstNm-LKAAdVOl1L4ZUlC92XNFbeVzkRMwNXPju2qaOft7ONmA1d7A4XqQ8PwLKWlU3ozICMxbUe2XoGGyQXdnrpvAzjagzN-fjI24Ph08jEaJkk4AN0l1cQ3qHRo0DtaIn7NbvlUh8j0b2vjbcDPPFwxljeW-Vkpc2ww2PWuc3hbkcNFlWHWigL8VOWDmUNrxbHKJOdjIU7cxGKs8Xo2ZG~8YE6u3KC-ysoglyw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
