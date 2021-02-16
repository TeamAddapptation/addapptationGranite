function granite_video(jsonVideo, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonVideo.id;
  const o = jsonVideo.options;
  const r = jsonVideo.records;
  const t = jsonTheme;
  const mode = t.mode || "midight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  console.log(id);
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/
  let defaultColor = mode == "midnight" ? "#fff" : "#000";
  //video type
  let video_format = o.video_format || "YouTube";
  let video_mp4 = o.video_mp4 || "";
  let video_ogg = o.video_ogg || "";
  let youtube_url = o.youtube_url || "";
  let vimeo_url = o.vimeo_url || "";
  // video controls
  let video_controls = o.video_controls || "true";
  let video_mute = o.video_mute || "false";
  let video_autoplay = o.video_autoplay || "false";
  if (video_format == "HTML") {
    video_controls = video_controls == "true" ? "controls" : "";
    video_mute = video_mute == "true" ? "muted" : "";
    video_autoplay = video_autoplay == "true" ? "autoplay" : "";
  } else {
    video_controls = video_controls == "true" ? "1" : "0";
  }
  let video_poster = o.video_poster || ""; // not an option for youtube/vimeo
  let video_width = o.video_width || "100%";
  let video_height = o.video_height || "100%";
  //layout
  let max_width = o.max_width || "100%";
  let video_padding = o.video_padding || "15px 15px 15px 15px";
  let video_margin = o.video_margin || "15px 15px 15px 15px";
  let align_video = o.align_video || "center";
  /*---------------------------------------------
  Video Elements
  ---------------------------------------------*/
  let html_video = `
      <video class='g__elm_video' ${video_controls} ${video_mute} ${video_autoplay} poster='${video_poster}'>
          <source src="${video_mp4}" type="video/mp4">
          <source src="${video_ogg}" type="video/ogg">
          Your browser does not support the video tag.
      </video>`;
  let youtube_video = `
  <div class="g__elm_video"><iframe width="100%" height="100%" src="${youtube_url}?controls=${video_controls}${
    video_mute == "true" ? "&mute=1" : ""
  }${
    video_autoplay == "true" ? "&autoplay=1" : ""
  }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  `;
  // I don't know the regex to do this properly.
  let vimeo_video = `
  <div class="g__elm_video"><iframe width="100%" height="100%" src="${vimeo_url
    .replace("//", "//player.")
    .replace(
      ".com/",
      ".com/video/"
    )}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" ></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
  `;
  /*---------------------------------------------
  CSS Block
  ---------------------------------------------*/
  var videoCss = document.createElement("style");
  videoCss.innerHTML = `
  /* ------------------- Video ------------------- */
  ${cssId}{
      display: flex;
      justify-content: ${align_video};
      align-items: center;
      padding: ${video_padding};
      margin: ${video_margin};
  }
  ${cssId} .g__elm_video_wrapper{
      max-width: ${max_width};
      flex: 1 0 0;
  }
  ${cssId} .g__elm_video{
      width: ${video_width};
      height: ${video_height};
  }
  `;
  document.head.appendChild(videoCss);
  /*---------------------------------------------
  Wrapper and Element
  ---------------------------------------------*/
  const video = document.createElement("div");
  video.setAttribute("class", "g__elm_video_wrapper");
  switch (video_format) {
    case "YouTube":
      video.innerHTML = youtube_video;
      break;
    case "Vimeo":
      video.innerHTML = vimeo_video;
      break;
    case "HTML":
      video.innerHTML = html_video;
      break;
    default:
      video.innerHTML = "No Video Format Selected";
      break;
  }
  /*---------------------------------------------
  Append micro to the DOM
  ---------------------------------------------*/
  granite_div.appendChild(video);
}
