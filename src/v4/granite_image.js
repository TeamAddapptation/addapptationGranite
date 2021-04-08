function granite_image(jsonBlock, jsonTheme) {
  console.log("image")
  /*---------------------------------------------
    Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const mode = t.mode || "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);

  /*---------------------------------------------
    Add Font Family To Header
  ---------------------------------------------*/
  const font_include = document.getElementById("g__font_stylesheet");
  if (!font_include) {
    var head = document.head;
    var fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }

  /*---------------------------------------------
    Set The mode
  ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);

  /*---------------------------------------------
    Attributes
  ---------------------------------------------*/
  const img_url = o.img_url || "";

  //Image
  let img_max_width = o.img_max_width || "100%";
  let img_height = o.img_height || "auto";

  //layout
  let height = o.height || "auto";
  let vertical_align = o.vertical_align || "center";
  let horizontal_align = o.horizontal_align || "center";

  /*---------------------------------------------
    CSS Block
  ---------------------------------------------*/
  var imgCss = document.createElement("style");
  imgCss.innerHTML = `
    ${cssId}{
        display: flex;
        height: ${height};
        justify-content: ${vertical_align};
        align-items: ${horizontal_align};
    }
    ${cssId} .g__elm_img{
        max-width: ${img_max_width};
        height: ${img_height};
    }
    `;
  document.head.appendChild(imgCss);

  /*---------------------------------------------
    Wrapper
  ---------------------------------------------*/
  const img = document.createElement("img");
  img.classList.add("g__elm_img");
  img.src = img_url;

  let img_link;
  if (o.img_link) {
    img_link = document.createElement("a");
    img_link.classList.add("g__img_link");
    img_link.href = o.img_link;
    img_link.target = o.img_link_target ? "_blank" : "_self";
    img_link.appendChild(img);
  }

  /*---------------------------------------------
    Append micro to the DOM
  ---------------------------------------------*/
  !!o.img_link
    ? granite_div.appendChild(img_link)
    : granite_div.appendChild(img);
}
