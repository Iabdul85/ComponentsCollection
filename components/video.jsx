export function Video() {
    return (
      <video width="639" height="358" controls preload="true">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          autoPlay
          // kind="subtitles"
          // srcLang="en"
          // label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }