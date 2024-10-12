import React from "react";
import ReactPlayer from "react-player";

interface Props {
  onEnded: () => void;
}

export const Player: React.FC<Props> = ({ onEnded }) => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ET8vjPxsTkc"
      onEnded={onEnded}
      config={{
        youtube: {
          playerVars: {
            controls: 0,
            autoplay: 1,
            playsinline: 1,
            rel: 0,
          },
        },
      }}
    />
  );
};
