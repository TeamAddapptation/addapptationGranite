function granite_text(jsonText, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonText.id;
  const o = jsonText.options;
  const r = jsonText.records;
  const t = jsonTheme;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;

  /*---------------------------------------------
    Check Alignment & Set Mode
    ---------------------------------------------*/
  let granite_div = graniteDocument.getElementById(id);
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
  /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
  const font_include = graniteDocument.getElementById("g__font_stylesheet");
  if (!font_include) {
    var head = graniteDocument.head;
    var fontLink = graniteDocument.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }
  /*---------------------------------------------
    Defaults
    ---------------------------------------------*/
  switch (t.mode) {
    case "standard":
      !!o.font_color ? "" : (o.font_color = "#000000");
      break;
    default:
      !!o.font_color ? "" : (o.font_color = "#ffffff");
      break;
  }
  !!o.g_font_size ? "" : (o.g_font_size = "16");
  !!o.max_width ? "" : (o.max_width = "auto");
  !!o.align_content ? "" : (o.align_content = "flex-start");

  !!o.padding_top ? "" : (o.padding_top = "0");
  !!o.padding_right ? "" : (o.padding_right = "0");
  !!o.padding_bottom ? "" : (o.padding_bottom = "0");
  !!o.padding_left ? "" : (o.padding_left = "0");

  !!o.margin_top ? "" : (o.margin_top = "0");
  !!o.margin_right ? "" : (o.margin_right = "0");
  !!o.margin_bottom ? "" : (o.margin_bottom = "0");
  !!o.margin_left ? "" : (o.margin_left = "0");

  // Font
  let fontSize = o.g_font_size + "px";
  let fontColor = o.font_color;
  let font = "hero-new, sans-serif;";
  let fontWeight = 300;

  let maxWidth = o.max_width;
  let alignContent = o.align_content;

  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px";

  /*---------------------------------------------
    CSS
    ---------------------------------------------*/
  var textCss = graniteDocument.createElement("style");
  textCss.innerHTML = `
    /*---------------------------------------------
    No Records
    ---------------------------------------------*/
    ${cssId} {
        display: flex;
        flex-wrap: wrap;
        justify-content: ${alignContent};
    }
    ${cssId} .g__no_records{
        display: flex;
        justify-content: center;
        background: transparent;
        align-items: center;
        color: var(--font-color);
        height: 225px;
        flex: 0 0 100%;
        margin: 15px;
        border: 2px dashed #5d5d5d;
    }
    ${cssId} .g__no_records h2{
        font-family: ${font};
        font-weight: ${fontWeight};
        font-size: 2rem;
        color: ${fontColor};
    }
    ${cssId} .g__text_block{
        font-family: ${font};
        font-weight: ${fontWeight};
        padding-top: ${paddingTop};
        padding-right: ${paddingRight};
        padding-bottom: ${paddingBottom};
        padding-left: ${paddingLeft};
        margin-top: ${marginTop};
        margin-right: ${marginRight};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
        max-width: ${maxWidth};
        border: ${o.border || "none"};
        text-align: ${o.text_align || "left"};
        font-size: ${fontSize} !important;
        color: ${fontColor};
    }
    ${cssId} .g__text_block p{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${o.font_color || "var(--font-color)"} !important;
    }
    @media only screen and (max-width: 768px) {
        ${cssId} .g__text_block{
          max-width: 100%;
        }
      }
    `;
  graniteDocument.head.appendChild(textCss);

  let text_container;
  if (o.text.length > 0) {
    text_container = graniteDocument.createElement("div");
    !!o.id ? (text_container.id = o.id) : "";
    text_container.setAttribute("class", "g__text_block");
    !!o.classes ? text_container.classList.add(o.classes) : "";
    text_container.innerHTML = o.text;
  } else {
    text_container = graniteDocument.createElement("div");
    text_container.setAttribute("class", "g__no_records");
    text_container.style.flex = "0 0 100%";
    text_container.innerHTML = "<h2>Text Block</h2>";
  }

  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
  granite_div.appendChild(text_container);
}
