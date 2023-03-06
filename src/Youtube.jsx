import React, { useState, useEffect } from "react";
import axios from "axios";

const YOUTUBE_API_KEY = "AIzaSyBsg4MV7HAH1fhl7P2DBqUPjg0HLrs8-mY";

function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("bidar");

  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            q: searchTerm,
            key: YOUTUBE_API_KEY,
            type: "video",
          },
        }
      );

      const videos = response.data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setVideos(videos);
      console.log(videos)
    }

    getVideos();
  }, [searchTerm]);

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="container" style={{color:"red"}}>YouTube Videos</h1>
      <form>
        <label>
          Search:
          <input className="form-control"
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </label>
        <button className="btn btn-danger m-2" type="submit">Search</button>
      </form>
      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <iframe
            title="My YouTube Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="15"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default YouTubeVideos;
