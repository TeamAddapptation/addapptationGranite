function granite_image(jsonBlock, jsonTheme) {
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
  !!o.img_field_max_width ? "" : (o.img_field_max_width = "100");
  !!o.img_field_max_width_mobile ? "" : (o.img_field_max_width_mobile = "100");
  !!o.justify_content ? "" : (o.justify_content = "center");

  !!o.padding_top ? "" : (o.padding_top = "15");
  !!o.padding_right ? "" : (o.padding_right = "15");
  !!o.padding_bottom ? "" : (o.padding_bottom = "15");
  !!o.padding_left ? "" : (o.padding_left = "15");

  !!o.margin_top ? "" : (o.margin_top = "15");
  !!o.margin_right ? "" : (o.margin_right = "15");
  !!o.margin_bottom ? "" : (o.margin_botttom = "15");
  !!o.margin_left ? "" : (o.margin_left = "15");

  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  const img_url = o.img_url || "";

  //Image
  let img_max_width = o.img_field_max_width + "%";
  let img_max_width_mobile = o.img_field_max_width_mobile + "%";

  //layout
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px";
  let justify_content = o.justify_content || "center";

  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var imgCss = document.createElement("style");
  imgCss.id = "g__css_" + id;
  imgCss.innerHTML = `
  ${cssId}.g__no_records{
    display: flex;
    justify-content: center;
    background: transparent;
    align-items: center;
    color: ${fontColorMode};
    height: 225px;
    border: 2px dashed #5d5d5d;
  }
  ${cssId}.g__no_records h2{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: 2rem;
      color: var(--font-color);

  }
  ${cssId}{
      display: flex;
      justify-content: ${justify_content};
  }
  ${cssId} .g__elm_img{
      max-width: ${img_max_width};
      height: auto;
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
      z-index: 15;
  }
    @media only screen and (max-width: 768px) {
      ${cssId} .g__elm_img{
        max-width: ${img_max_width_mobile};
      }
    }

    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(imgCss);
  /*---------------------------------------------
    Check for records
  ---------------------------------------------*/
  if (img_url === "") {
    granite_div.classList.add("g__no_records");
    granite_div.innerHTML = "<h2>Image</h2>";
    return;
  }

  /*---------------------------------------------
    Wrapper
  ---------------------------------------------*/
  let img = document.createElement("img");
  img.classList.add("g__elm_img");
  !!o.img_id ? (img.id = img_id) : "";
  !!o.img_classes ? img.classList.add(o.img_classes) : "";
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
  granite_div.classList.remove("g__no_records");
  !!o.img_link
    ? granite_div.appendChild(img_link)
    : granite_div.appendChild(img);
}
