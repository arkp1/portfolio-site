import React, { useEffect, useState } from "react";

export default function Player() {
  const [song, setSong] = useState<any>(null);
  const musicData = async () => {
    try {
      const res = await fetch("/api/spotify");
      const data = await res.json();
      setSong(data);
      console.log(data);
    } catch (err) {
      console.log("music data fetch error", err);
    }
  };

  useEffect(() => {
    musicData();
    const timer = setInterval(musicData, 300000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative border-2 border-gray-500 rounded-lg p-2 backdrop-blur-md">
        <div className="flex justify-center items-center">
          <img
            src={song?.recenttracks?.track?.[0]?.image?.[2]?.["#text"]}
            alt="Album Cover"
            className="w-16 h-16 rounded-md mr-4"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="text-gray-400 text-sm font-normal">Last Played</p>
            <h1 className="font-bold">
              {song?.recenttracks?.track?.[0]?.name || "Not Available"}
            </h1>
            <h2 className="font-medium">
              {song?.recenttracks?.track?.[0]?.artist?.["#text"]}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
