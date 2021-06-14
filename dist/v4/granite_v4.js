function granite_button(jsonButton, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonButton.id;
  const o = jsonButton.options;
  const r = jsonButton.records;
  const t = jsonTheme;
  const mode = t.mode || "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/

  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/

  switch (t.mode) {
    case "standard":
      !!o.btn_color ? "" : o.btn_color = "#eaeaea";
      !!o.text_color ? "" : o.text_color = "#000000";
      !!o.border_color ? "" : o.border_color = "#000000";
      !!o.btn_color_hover ? "" : o.btn_color_hover = "#cccccc";
      !!o.text_color_hover ? "" : o.text_color_hover = "#000000";
      !!o.border_color_hover ? "" : o.border_color_hover = "#000000";
      break;

    default:
      !!o.btn_color ? "" : o.btn_color = "#303030";
      !!o.text_color ? "" : o.text_color = "#ffffff";
      !!o.border_color ? "" : o.border_color = "#ffffff";
      !!o.btn_color_hover ? "" : o.btn_color_hover = "#4c4c4c";
      !!o.text_color_hover ? "" : o.text_color_hover = "#ffffff";
      !!o.border_color_hover ? "" : o.border_color_hover = "#ffffff";
      break;
  }

  !!o.btn_target ? "" : o.btn_target = "_self";
  !!o.text_size ? "" : o.text_size = "16";
  !!o.border_radius ? "" : o.border_radius = "0";
  !!o.border_width ? "" : o.border_width = "0";
  !!o.border_width_hover ? "" : o.border_width_hover = "0";
  !!o.btn_width ? "" : o.btn_width = "auto";
  !!o.padding_top ? "" : o.padding_top = "15";
  !!o.padding_right ? "" : o.padding_right = "15";
  !!o.padding_bottom ? "" : o.padding_bottom = "15";
  !!o.padding_left ? "" : o.padding_left = "15";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0"; //action

  let btn_url = o.btn_url || "";
  let btn_target = o.btn_target;
  let btn_classes = o.btn_classes;
  let btn_id = o.btn_id; //text

  let btn_text = o.btn_text || "Click Here";
  let font_size = o.text_size + "px";
  let text_color = o.text_color;
  let font_style = o.font_style || "hero-new, sans-serif";
  let font_weight = o.font_weight || "300"; //style

  let btn_color = o.btn_color;
  let border_width = o.border_width + "px";
  let border_color = o.border_color;
  let border_radius = o.border_radius + "4px";
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px"; //hover

  let btn_color_hover = o.btn_color_hover;
  let text_color_hover = o.text_color_hover;
  let border_width_hover = o.border_width_hover + "px";
  let border_color_hover = o.border_color_hover; //Active

  let btn_color_active = o.btn_color_active;
  let text_color_active = o.text_color_active;
  let border_width_active = o.border_width_active + "px";
  let border_color_active = o.border_color_active; //layout

  let align_btn = o.align_btn || "flex-start";
  let btn_width = o.btn_width;
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
  CSS Block
  ---------------------------------------------*/


  var buttonCss = document.createElement("style");
  buttonCss.id = "g__css_" + id;
  buttonCss.innerHTML = `
  ${cssId}{
      display: flex;
      height: auto;
      justify-content: ${align_btn};
  }
  ${cssId} .g__elm_btn{
      display: flex;
      justify-content: center;
      font-family: ${font_style};
      font-weight: ${font_weight};
      font-size: ${font_size};
      color: ${text_color};
      width: ${btn_width};
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
      border-radius: ${border_radius};
      border: ${border_width} solid ${border_color};
      background: ${btn_color};
      transition: all .5s ease;
  }
  ${cssId} .g__elm_btn:hover{
      background: ${btn_color_hover};
      color: ${text_color_hover};
      border: ${border_width_hover} solid ${border_color_hover};
      cursor: pointer;
  }
  ${cssId} .g__elm_btn:active{
      background: ${btn_color_active};
      color: ${text_color_active};
      border: ${border_width_active} solid ${border_color_active};
      cursor: pointer;
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(buttonCss);
  /*---------------------------------------------
  Wrapper
  ---------------------------------------------*/

  let button;

  if (!!btn_url) {
    button = document.createElement("a");
    !!o.btn_classes ? button.setAttribute("class", btn_classes) : "";
    button.classList.add("g__elm_btn");
    !!o.btn_id ? button.id = btn_id : "";
    o.btn_disabled ? button.disabled = o.btn_disabled : "";
    button.href = btn_url;
    button.target = btn_target;
    button.innerHTML = btn_text;
  } else {
    button = document.createElement("button");
    !!o.btn_classes ? button.setAttribute("class", btn_classes) : "";
    button.classList.add("g__elm_btn");
    !!o.btn_id ? button.id = btn_id : "";
    button.type = "button";
    button.target = btn_target;
    button.innerHTML = btn_text;
  }
  /*---------------------------------------------
  Append micro to the DOM
  ---------------------------------------------*/


  granite_div.appendChild(button);
}
/*---------------------------------------------
Block Name: Granite.js Cards Block
---------------------------------------------*/
function granite_cards(jsonBlock, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  !!o.g_classes ? granite_div.setAttribute("class", o.g_classes) : "";
  /*---------------------------------------------
    Verify Div ID and Div Alignment - Set Mode
    ---------------------------------------------*/

  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
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
    Defaults
    ---------------------------------------------*/
  // Mode Defaults


  let bodyBkg = mode === "midnight" ? "#101010" : "#ffffff";
  let cardBkgMode = mode === "midnight" ? "#303030" : "#ffffff";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let medGray = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let lightGray = "#eaeaea";
  let fontColorMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  /*---------------------------------------------
    Attributes
    ---------------------------------------------*/

  switch (t.mode) {
    case "standard":
      !!o.g_card_background ? "" : o.g_card_background = "#ffffff";
      !!o.g_title_color ? "" : o.g_title_color = "#101010";
      !!o.g_description_color ? "" : o.g_description_color = "#101010";
      !!o.g_card_border_color ? "" : o.g_card_border_color = "#bfbfbf";
      !!o.g_btn_bkg_color ? "" : o.g_btn_bkg_color = "#bfbfbf";
      !!o.g_btn_font_color ? "" : o.g_btn_font_color = "#ffffff";
      !!o.g_btn_border_color ? "" : o.g_btn_border_color = "#eaeaea";
      !!o.g_btn_bkg_color_hover ? "" : o.g_btn_bkg_color_hover = "#a1a1a1";
      !!o.g_btn_font_color_hover ? "" : o.g_btn_font_color_hover = "#ffffff";
      !!o.g_btn_border_hover_color ? "" : o.g_btn_border_hover_color = "#a1a1a1";
      break;

    default:
      !!o.g_card_background ? "" : o.g_card_background = "#202020";
      !!o.g_title_color ? "" : o.g_title_color = "#ffffff";
      !!o.g_description_color ? "" : o.g_description_color = "#ffffff";
      !!o.g_card_border_color ? "" : o.g_card_border_color = "#5d5d5d";
      !!o.g_btn_bkg_color ? "" : o.g_btn_bkg_color = "#5d5d5d";
      !!o.g_btn_font_color ? "" : o.g_btn_font_color = "#ffffff";
      !!o.g_btn_border_color ? "" : o.g_btn_border_color = "#101010";
      !!o.g_btn_bkg_color_hover ? "" : o.g_btn_bkg_color_hover = "#a1a1a1";
      !!o.g_btn_font_color_hover ? "" : o.g_btn_font_color_hover = "#ffffff";
      !!o.g_btn_border_hover_color ? "" : o.g_btn_border_hover_color = "#a1a1a1";
      break;
  }

  !!o.g_columns ? "" : o.g_columns = "3";
  !!o.g_display_list ? "" : o.g_display_list = "vertical";
  !!o.g_title_size ? "" : o.g_title_size = "26";
  !!o.title_top_padding ? "" : o.title_top_padding = "5";
  !!o.g_title_bottom_padding ? "" : o.g_title_bottom_padding = "5";
  !!o.g_description_size ? "" : o.g_description_size = "18";
  !!o.description_top_padding ? "" : o.description_top_padding = "5";
  !!o.g_description_bottom_padding ? "" : o.g_description_bottom_padding = "5";
  !!o.g_margin ? "" : o.g_margin = "5";
  !!o.g_card_padding ? "" : o.g_card_padding = "0";
  !!o.g_content_padding ? "" : o.g_content_padding = "15";
  !!o.g_img_padding ? "" : o.g_img_padding = "0";
  !!o.g_card_border_width ? "" : o.g_card_border_width = "0";
  !!o.g_img_border_radius ? "" : o.g_img_border_radius = "2";
  !!o.g_card_border_radius ? "" : o.g_card_border_radius = "2";
  !!o.g_btn_border_radius ? "" : o.g_btn_border_radius = "2";
  !!o.g_btn_border_width ? "" : o.g_btn_border_width = "0";
  !!o.g_btn_border_hover_width ? "" : o.g_btn_border_hover_width = "0";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0"; // Action Row

  let headerFontColor = o.g_header_font_color || fontColorMode;
  let headerFontSize = o.g_header_font_size || "28px";
  let descriptionFontColor = o.g_description_font_color || fontColorMode;
  let descriptionFontSize = o.g_description_font_size || "16px"; // Design

  let cardBkg = o.g_card_background;
  let cardBorderWidth = o.g_card_border_width + "px";
  let cardBorderColor = o.g_card_border_color;
  let titleColor = o.g_title_color;
  let descriptionColor = o.g_description_color;
  let titleSize = o.g_title_size + "px";
  let descriptionSize = o.g_description_size + "px";
  let cardBorderRadius = o.g_card_border_radius + "px";
  let imgBorderRadius = o.g_img_border_radius + "px"; // Btn

  let btnFontColor = o.g_btn_font_color;
  let btnFontHoverColor = o.g_btn_font_color_hover;
  let btnBkgColor = o.g_btn_bkg_color;
  let btnBkgHoverColor = o.g_btn_bkg_color_hover;
  let btnBorderRadius = o.g_btn_border_radius + "px";
  let btnBorderWidth = o.g_btn_border_width + "px";
  let btnBorderColor = o.g_btn_border_color;
  let btnBorderHoverWidth = o.g_btn_border_hover_width + "px";
  let btnBorderHoverColor = o.g_btn_border_hover_color;
  let alignBtn = String(o.g_bottom_align_btn) === "true" ? "auto" : "initial";
  let btnCenter = String(o.g_btn_center) === "true" ? "0 auto" : "inherit"; // Layout

  let columns = 100 / parseInt(o.g_columns) + "%";
  let fillRow = o.g_fill_row ? "1" : "0";
  let cardMargin = o.g_margin + "px";
  let columnGap = parseInt(cardMargin, 10) * 2 + "px";
  let cardPadding = o.g_card_padding + "px";
  let displayList = o.g_display_list;
  let imgPadding = o.g_img_padding + "px";
  let contentPadding = o.g_content_padding + "px"; // Font

  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
  let titleTopPadding = o.g_title_top_padding + "px";
  let titleBottomPadding = o.g_title_bottom_padding + "px";
  let descriptionTopPadding = o.g_description_top_padding + "px";
  let descriptionBottomPadding = o.g_description_bottom_padding + "px";
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

  let cardStyles = document.createElement("style");
  cardStyles.id = "g__css_" + id;
  cardStyles.innerHTML = `
      /* ------------------------------
      Granite Div
      -------------------------------*/
      ${cssId}{
        padding-top: ${paddingTop};
        padding-right: ${paddingRight};
        padding-bottom: ${paddingBottom};
        padding-left: ${paddingLeft};
        margin-top: ${marginTop};
        margin-right: ${marginRight};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
      }
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
      /* ------------------------------------------------------------
      Action Row
      -------------------------------------------------------------*/
      ${cssId} .g__action_row{
        margin-bottom: 25px;
        margin-left: 15px;
        margin-right: 15px;
        padding-bottom: 25px;
        border-bottom: 1px solid ${lightGray};
      }
      ${cssId} .g__action_row .g__header{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${headerFontColor};
        font-size: ${headerFontSize};
      }
      ${cssId} .g__action_row .g__description{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${descriptionFontColor};
        font-size: ${descriptionFontSize};
        margin-bottom: 0;
      }
      /* ------------------------------------------------------------
      Card Container
      -------------------------------------------------------------*/
      ${cssId} .g__card_container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      /* ------------------------------------------------------------
      Card Basic
      -------------------------------------------------------------*/
      ${cssId} .g__card{
        display: flex;
        position: relative;
        flex-direction: column;
        background: ${cardBkg};
        padding: ${cardPadding};
        margin: ${cardMargin};
        border-radius: ${cardBorderRadius};
        border: ${cardBorderWidth} solid ${cardBorderColor};
        flex: ${fillRow} 1 calc(${columns} - ${columnGap});
      }
      ${cssId} .g__card_img_cont{
        overflow: hidden;
        min-height: 300px;
        max-height: 300px;
        background: #a1a1a1;
        margin: ${imgPadding};
        border-radius: ${imgBorderRadius};
        flex: 1;
      }
      ${cssId} .g__card_img{
        display: block;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
      }
      ${cssId} .g__card_content{
        padding: ${contentPadding};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
      }
      ${cssId} .g__card_title{
        font-family: ${font};
        font-weight: ${fontWeight};
        padding-top: ${titleTopPadding};
        padding-bottom: ${titleBottomPadding};
        color: ${titleColor} !important;
        font-size: ${titleSize}
      }
      ${cssId} .g__card_description{
        font-family: ${font};
        font-weight: ${fontWeight};
        padding-top: ${descriptionTopPadding};
        padding-bottom: ${descriptionBottomPadding};
        color: ${descriptionColor} !important;
        font-size: ${descriptionSize}
      }
      ${cssId} .g__card_description p{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${descriptionColor} !important;
        font-size: ${descriptionSize}
      }
      ${cssId} .g__card_description.g__preview{
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      /* ------------------------------------------------------------
      List Style - Basic
      -------------------------------------------------------------*/
      ${cssId} .g__card.g__card_list{
        flex-direction: row;
      }
      ${cssId} .g__card.g__card_list .g__card_img_cont{
        max-height: none;
        min-height: auto;
        flex: 1;
        background: #a1a1a1;
      }
      ${cssId} .g__card.g__card_list .g__card_img{
        width: 100%;
        height: 100%;
        max-height: none;
        min-height: initial;
      }
      ${cssId} .g__card .g__full_description{
        opacity:0;
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: ${cardBkg};
        padding: 15px;
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${descriptionColor};
        font-size: ${descriptionSize};
        border-radius: ${cardBorderRadius};
        border: ${cardBorderWidth} solid ${cardBorderColor};
        transition: all 1s ease;
      }
      ${cssId} .g__card .g__full_description i{
        margin-left: auto;
        color: ${fontColorMode};
        paddding:5px;
        font-size: 24px;
      }
      ${cssId} .g__card .g__full_description p{
        overflow: auto;
      }
      ${cssId} .g__card .g__full_description.g__full_show{
        opacity: 1;
        top: 0;
        transition: all 1s ease;
      }
      /* ------------------------------------------------------------
      Card Slider
      -------------------------------------------------------------*/
      ${cssId} .g__card_slide{
        position: relative;
        display: flex;
        flex-direction: column;
        background: ${cardBkg};
        padding: ${cardPadding};
        margin: ${cardMargin};
        border-radius: ${cardBorderRadius};
        border: ${cardBorderWidth} solid ${cardBorderColor};
        flex: ${fillRow} 1 calc(${columns} - ${columnGap});
      }
      ${cssId} .g__card_img_cont_slide{
        overflow: hidden;
        min-height: 300px;
        max-height: 300px;
        background: #a1a1a1;
        padding: ${imgPadding};
        border-radius: ${imgBorderRadius};
        flex: 1;
      }
      ${cssId} .g__card_img_slide{
        display: block;
        object-fit: cover;
        object-position: 50% 50%;
        width: 100%;
        height: 100%;
      }
      ${cssId} .g__card_content_container{
        height: 200px;
        border-radius: ${cardBorderRadius};
      }
      ${cssId} .g__card_content_slider{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: ${cardBkg};
        padding: ${contentPadding};
        position: absolute;
        transition: all 1s ease;
        top: 300px;
        border-radius: ${cardBorderRadius};
        left: ${cardPadding};
        right: ${cardPadding};
      }
      ${cssId} .g__card_content_slider.g__open{
        top: 0;
        height: 100%;
      }
      ${cssId} .g__card_title_slide{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${titleColor};
        font-size: ${titleSize}
      }
      ${cssId} .g__card_description_slide{
        font-family: ${font};
        font-weight: ${fontWeight};
        color: ${descriptionColor};
        font-size: ${descriptionSize};
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        transition-delay: 1s;
        transition: all 1s ease;
      }
      ${cssId} .g__open .g__card_description_slide{
        height: auto;
        display: -webkit-box;
        -webkit-line-clamp: initial;
        transition-delay: 1s;
        overflow: auto;
        transition: all 1s ease;
      }
      ${cssId} .g__close{
        color: ${fontColorMode};
        margin-left: auto;
        font-size: 0;
        visibility: hidden;
        opacity: 0;
        transition: all .5s ease;
      }
      ${cssId} .g__close:hover{
        cursor: pointer;
      }
      ${cssId} .g__open .g__close{
        opacity: 1;
        font-size: 24px;
        visibility: visible;
        padding: 5px;
      }
      ${cssId} .g__show_more{
        color: ${fontColorMode};
        margin-left: auto;
        font-size: 11px;
        padding-bottom: 10px;
        display: none;
      }
      ${cssId} .g__show_more.g__show{
        display: block;
      }
      ${cssId} .g__show_more:hover{
        cursor: pointer;
      }
      ${cssId} .g__open .g__show_more{
        display: none;
      }
      /* ------------------------------------------------------------
      Button
      -------------------------------------------------------------*/
      ${cssId} .g__card_btn{
        display: inline-block;
        padding: 10px 30px;
        background: ${btnBkgColor};
        color: ${btnFontColor};
        border-radius: ${btnBorderRadius};
        border: ${btnBorderWidth} solid ${btnBorderColor};
        text-decoration: none;
        margin: ${btnCenter};
        margin-top: ${alignBtn};
        transition: all .5s ease;
      }
      ${cssId} .g__card_btn:hover{
        background: ${btnBkgHoverColor};
        color: ${btnFontHoverColor};
        text-decoration: none;
        border: ${btnBorderHoverWidth} solid ${btnBorderHoverColor};
      }
      /* ------------------------------------------------------------
      Tablet -- 767.98px
      -------------------------------------------------------------*/
      @media screen and (max-width: 767.98px) {
        ${cssId} .g__card{
          flex: ${fillRow} 1 calc(50% - ${columnGap});
        }
        ${cssId} .g__card_slide{
          flex: ${fillRow} 1 calc(50% - ${columnGap});
        }
      }
      /* ------------------------------------------------------------
      Mobile -- 576.98px
      -------------------------------------------------------------*/
      @media screen and (max-width: 576.98px) {
        ${cssId} .g__card{
          flex: ${fillRow} 1 100%;
        }
        ${cssId} .g__card_slide{
          flex: ${fillRow} 1 100%;
        }
      }
      `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(cardStyles);
  /*---------------------------------------------
    Check for records
    ---------------------------------------------*/

  if (rCount === 0) {
    granite_div.classList.add("g__no_records");
    granite_div.innerHTML = "<h2>Cards</h2>";
    return;
  }
  /*---------------------------------------------
    Tiles action row
    ---------------------------------------------*/


  let actionRow;

  if (o.g_header || o.g_description) {
    actionRow = document.createElement("div");
    actionRow.classList.add("g__action_row");

    if (o.g_header) {
      let g_header = document.createElement("h2");
      g_header.classList.add("g__header");
      g_header.innerHTML = o.g_header;
      actionRow.appendChild(g_header);
    }

    if (o.g_description) {
      let g_description = document.createElement("p");
      g_description.classList.add("g__description");
      g_description.innerHTML = o.g_description;
      actionRow.appendChild(g_description);
    }

    granite_div.appendChild(actionRow);
  }
  /*---------------------------------------------
    Card Build
    ---------------------------------------------*/


  let cardContainer = document.createElement("div");
  cardContainer.classList.add("g__card_container");
  r.forEach((r, count) => {
    let cardWrap, cardImgCont, cardImg, cardContent, cardTitle, cardDescription, btn, showMore;

    if (String(o.g_description_preview) === "true" && displayList === "vertical") {
      cardWrap = document.createElement("div");
      cardWrap.classList.add("g__card_slide");
      cardWrap.setAttribute("data-micro-id", id);
      cardWrap.setAttribute("data-record-id", r.addapptation_id);
      displayList ? cardWrap.classList.add("g__card_list") : "";
      cardImgCont = document.createElement("div");
      cardImgCont.classList.add("g__card_img_cont_slide");
      cardWrap.appendChild(cardImgCont);

      if (!!r.g_image) {
        cardImg = document.createElement("img");
        cardImg.classList.add("g__card_img_slide");
        cardImg.src = r.g_image || "#";
        cardImgCont.appendChild(cardImg);
      }

      cardContent = document.createElement("div");
      cardContent.classList.add("g__card_content_container");
      cardWrap.appendChild(cardContent);
      let cardSlider = document.createElement("div");
      cardSlider.classList.add("g__card_content_slider");
      cardContent.appendChild(cardSlider);
      let close = document.createElement("i");
      close.setAttribute("class", "far fa-times g__close");
      close.addEventListener("click", e => {
        showMoreBtn(e);
      });
      cardSlider.appendChild(close);

      if (!!r.g_title) {
        cardTitle = document.createElement("h3");
        cardTitle.classList.add("g__card_title_slide");
        cardTitle.innerHTML = r.g_title;
        cardSlider.appendChild(cardTitle);
      }

      if (!!r.g_description) {
        cardDescription = document.createElement("p");
        cardDescription.classList.add("g__card_description_slide");
        cardDescription.innerHTML = r.g_description;
        cardSlider.appendChild(cardDescription);
        showMore = document.createElement("div");
        showMore.classList.add("g__show_more");
        showMore.innerHTML = "Show More <i class='far fa-chevron-down'></i>";
        showMore.addEventListener("click", e => {
          showMoreBtn(e);
        });
        cardSlider.appendChild(showMore);
      }

      if (!!r.g_btn_text) {
        btn = document.createElement("a");
        btn.classList.add("g__card_btn");
        btn.href = r.g_href || "#";
        btn.new_window ? "_blank" : "_self";
        btn.innerHTML = r.g_btn_text;
        cardSlider.appendChild(btn);
      }
    } else {
      cardWrap = document.createElement("div");
      cardWrap.classList.add("g__card");
      cardWrap.setAttribute("data-micro-id", id);
      cardWrap.setAttribute("data-record-id", r.addapptation_id);
      displayList === "horizontal" ? cardWrap.classList.add("g__card_list") : "";
      cardImgCont = document.createElement("div");
      cardImgCont.classList.add("g__card_img_cont");
      cardWrap.appendChild(cardImgCont);

      if (!!r.g_image) {
        cardImg = document.createElement("img");
        cardImg.classList.add("g__card_img");
        cardImg.src = r.g_image || "#";
        cardImgCont.appendChild(cardImg);
      }

      cardContent = document.createElement("div");
      cardContent.classList.add("g__card_content");
      cardWrap.appendChild(cardContent);

      if (!!r.g_title) {
        cardTitle = document.createElement("h3");
        cardTitle.classList.add("g__card_title");
        cardTitle.innerHTML = r.g_title;
        cardContent.appendChild(cardTitle);
      }

      if (!!r.g_description) {
        cardDescription = document.createElement("div");
        cardDescription.classList.add("g__card_description");
        o.g_description_preview ? cardDescription.classList.add("g__preview") : "";
        cardDescription.innerHTML = r.g_description;
        cardContent.appendChild(cardDescription);

        if (String(o.g_description_preview) === "true" && displayList === "horizontal") {
          showMore = document.createElement("div");
          showMore.classList.add("g__show_more");
          showMore.innerHTML = "Show More <i class='far fa-chevron-down'></i>";
          cardContent.appendChild(showMore);
        }
      }

      if (!!r.g_btn_text) {
        btn = document.createElement("a");
        btn.classList.add("g__card_btn");
        btn.href = r.g_href || "#";
        String(r.g_new_window) === "true" ? btn.target = "_blank" : btn.target = "_self";
        btn.innerHTML = r.g_btn_text;
        cardContent.appendChild(btn);
      }

      if (!!r.g_description && String(o.g_description_preview) === "true" && displayList === "horizontal") {
        fullDesc = document.createElement("div");
        fullDesc.classList.add("g__full_description");
        let closeIcon = document.createElement("i");
        closeIcon.setAttribute("class", "far fa-times g__desc_close");
        fullDesc.appendChild(closeIcon);
        let desc = document.createElement("p");
        desc.innerHTML = r.g_description;
        fullDesc.appendChild(desc);
        cardWrap.appendChild(fullDesc);
      }
    }

    cardContainer.appendChild(cardWrap); // End record loop
  });
  /*---------------------------------------------
    Append DIV to DOM
    ---------------------------------------------*/

  granite_div.classList.remove("g__no_records");
  granite_div.appendChild(cardContainer);
  /*---------------------------------------------
      Functions
    ---------------------------------------------*/

  /* Show More Open */

  function showMoreBtn(e) {
    let contentCont = e.target.parentNode;
    contentCont.classList.toggle("g__open");
    contentCont.removeAttribute("style");
  }
  /* Show More List */


  setTimeout(function () {
    if (String(o.g_description_preview) === "true" && displayList === "vertical") {
      let fullDesc = granite_div.querySelectorAll(".g__full_description");

      if (fullDesc.length) {
        fullDesc.forEach(content => {
          content.setAttribute("data-height", content.parentElement.offsetHeight);
          content.style.top = content.parentElement.offsetHeight + "px";
          let showMore = content.previousSibling.querySelector(".g__show_more");
          let close = content.querySelector(".g__desc_close");

          if (!!showMore) {
            showMore.addEventListener("click", e => {
              content.classList.add("g__full_show");
              content.removeAttribute("style");
            });
          }

          if (!!close) {
            close.addEventListener("click", e => {
              content.classList.remove("g__full_show");
              content.style.top = content.parentElement.offsetHeight + "px";
            });
          }
        });
      }
    }
  }, 1000);
  /* Show More */

  if (o.g_description_preview) {
    let showMore = granite_div.querySelectorAll(".g__show_more");

    if (!!showMore) {
      showMore.forEach(showBtn => {
        let desc = showBtn.previousElementSibling;
        let scroll = desc.scrollHeight;
        let height = desc.clientHeight;

        if (scroll > height) {
          showBtn.classList.add("g__show");
        }
      });
    }
  }
  /* Slide Height */


  if (String(o.g_display_list) === "vertical") {
    let cards = granite_div.querySelectorAll(".g__card_slide");

    if (cards.length) {
      cards.forEach(card => {
        let container = card.querySelector(".g__card_content_container");
        let content = card.querySelector(".g__card_content_slider");
        container.style.height = content.clientHeight + "px";
        content.style.height = content.clientHeight + "px";
      });
    }
  } // End main function

}
function granite_code(jsonBlock, jsonTheme) {
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const granite_div = document.getElementById(id);
  let code_div = document.createElement("div");
  code_div.innerHTML = o.code;
  granite_div.appendChild(code_div);
}
function granite_divider(jsonDivider, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonDivider.id;
  const o = jsonDivider.options;
  const r = jsonDivider.records;
  const t = jsonTheme;
  const mode = t.mode || "midight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/

  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Default Attributes
  ---------------------------------------------*/

  !!o.background_color ? "" : o.background_color = "#5d5d5d";
  !!o.dvdr_height ? "" : o.dvdr_height = "2";
  !!o.dvdr_width ? "" : o.dvdr_width = "90";
  !!o.dvdr_padding_top ? "" : o.dvdr_padding_top = "25";
  !!o.dvdr_padding_bottom ? "" : o.dvdr_padding_bottom = "25"; //style

  let background_color = o.background_color;
  let dvdr_padding_top = o.dvdr_padding_top + "px";
  let dvdr_padding_bottom = o.dvdr_padding_bottom + "px"; //layout

  let dvdr_width = o.dvdr_width + "%";
  let dvdr_height = o.dvdr_height + "px";
  /*---------------------------------------------
  CSS Block
  ---------------------------------------------*/

  let dvdrCss = document.createElement("style");
  dvdrCss.id = "g__css_" + id;
  dvdrCss.innerHTML = `
  ${cssId}{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: ${dvdr_padding_top};
      padding-bottom: ${dvdr_padding_bottom};
  }
  /* -- Standard Divider -- */
  ${cssId} .g__elm_divider{
      width: ${dvdr_width};
      height: ${dvdr_height};
      background-color: ${background_color};
  }
  `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(dvdrCss);
  /*---------------------------------------------
  Wrapper and Element
  ---------------------------------------------*/

  let dvdr = document.createElement("div");
  !!o.divider_id ? dvdr.id = divider_id : "";
  dvdr.setAttribute("data-micro-id", id);
  dvdr.classList.add("g__elm_divider");
  !!o.divider_classes ? button.classList.add(divider_classes) : "";
  /*---------------------------------------------
  Append micro to the DOM
  ---------------------------------------------*/

  granite_div.appendChild(dvdr);
}
"use strict";

function granite_form(formsBlock, jsonTheme) {
  const id = formsBlock.id;
  const granite_id = formsBlock.id;
  const o = formsBlock.options;
  const r = formsBlock.records;
  const totalRecords = r.length;
  const t = jsonTheme;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id; // micro settings attributes

  const attr__action = o.addapptation_action || "";
  const attr__form_id = o.form_id || "g__" + Math.random().toString(36).substring(2, 15);
  const attr__method = o.method || "POST";
  const attr__enctype = o.enctype || "application/x-www-form-urlencoded";
  /* -------------------- Check Alignment & Set Mode ----------------------*/

  let granite_div = document.getElementById(id);

  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
  /* -------------------- Fonts ----------------------*/


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
  /* -------------------- CSS ----------------------*/


  let primary = t.primary || "#D44697";
  let secondary = t.secondary || "#ff8bcd";
  let sectionFontColor; //Section Attributes

  switch (t.mode) {
    case "standard":
      sectionFontColor = o.section_font_color || "#101010";
      !!o.field_bkg_color ? "" : o.field_bkg_color = "#ffffff";
      !!o.field_border_color ? "" : o.field_border_color = "#a1a1a1";
      !!o.field_label_color ? "" : o.field_label_color = "#101010";
      !!o.field_font_color ? "" : o.field_font_color = "#101010";
      !!o.heading_font_color ? "" : o.heading_font_color = "#101010";
      !!o.description_font_color ? "" : o.description_font_color = "#101010";
      !!o.prev_font_color ? "" : o.prev_font_color = "#ffffff";
      !!o.next_font_color ? "" : o.next_font_color = "#ffffff";
      !!o.prev_bkg_color ? "" : o.prev_bkg_color = "#5d5d5d";
      !!o.next_bkg_color ? "" : o.next_bkg_color = "#00B28B";
      !!o.prev_font_color_hover ? "" : o.prev_font_color_hover = "#101010";
      !!o.next_font_color_hover ? "" : o.next_font_color_hover = "#101010";
      !!o.prev_bkg_color_hover ? "" : o.prev_bkg_color_hover = "#868686";
      !!o.next_bkg_color_hover ? "" : o.next_bkg_color_hover = "#868686";
      !!o.section_background ? "" : o.section_background = "transparent";
      !!o.radio_btn_bkg ? "" : o.radio_btn_bkg = "#ffffff";
      !!o.radio_btn_bkg_hover ? "" : o.radio_btn_bkg_hover = "#868686";
      !!o.radio_font_color ? "" : o.radio_font_color = "#101010";
      !!o.radio_font_color_hover ? "" : o.radio_font_color_hover = "#101010";
      !!o.radio_border_color ? "" : o.radio_border_color = "#a1a1a1";
      break;

    default:
      sectionFontColor = o.section_font_color || "#ffffff";
      !!o.field_bkg_color ? "" : o.field_bkg_color = "#303030";
      !!o.field_border_color ? "" : o.field_border_color = "#a1a1a1";
      !!o.field_label_color ? "" : o.field_label_color = "#ffffff";
      !!o.field_font_color ? "" : o.field_font_color = "#ffffff";
      !!o.heading_font_color ? "" : o.heading_font_color = "#ffffff";
      !!o.description_font_color ? "" : o.description_font_color = "#ffffff";
      !!o.prev_font_color ? "" : o.prev_font_color = "#ffffff";
      !!o.next_font_color ? "" : o.next_font_color = "#ffffff";
      !!o.prev_bkg_color ? "" : o.prev_bkg_color = "#5D5D5D";
      !!o.next_bkg_color ? "" : o.next_bkg_color = "#00B28B";
      !!o.prev_font_color_hover ? "" : o.prev_font_color_hover = "#ffffff";
      !!o.next_font_color_hover ? "" : o.next_font_color_hover = "#ffffff";
      !!o.prev_bkg_color_hover ? "" : o.prev_bkg_color_hover = "#868686";
      !!o.next_bkg_color_hover ? "" : o.next_bkg_color_hover = "#66c2a9";
      !!o.section_background ? "" : o.section_background = "transparent";
      !!o.radio_btn_bkg ? "" : o.radio_btn_bkg = "#303030";
      !!o.radio_btn_bkg_hover ? "" : o.radio_btn_bkg_hover = "#868686";
      !!o.radio_font_color ? "" : o.radio_font_color = "#ffffff";
      !!o.radio_font_color_hover ? "" : o.radio_font_color_hover = "#ffffff";
      !!o.radio_border_color ? "" : o.radio_border_color = "#a1a1a1";
      break;
  } //Submit Button


  !!o.submit_font_size ? "" : o.submit_font_size = "16";
  !!o.submit_bkg_color ? "" : o.submit_bkg_color = primary;
  !!o.submit_font_color ? "" : o.submit_font_color = "#ffffff";
  !!o.submit_border_color ? "" : o.submit_border_color = primary;
  !!o.submit_border_width ? "" : o.submit_border_width = "0";
  !!o.submit_border_radius ? "" : o.submit_border_radius = "2";
  !!o.submit_bkg_color_hover ? "" : o.submit_bkg_color_hover = secondary;
  !!o.submit_font_color_hover ? "" : o.submit_font_color_hover = "#ffffff";
  !!o.submit_border_color_hover ? "" : o.submit_border_color_hover = secondary;
  !!o.submit_border_width_hover ? "" : o.submit_border_width_hover = "0"; //Submit Button

  !!o.cancel_font_size ? "" : o.cancel_font_size = "16";
  !!o.cancel_bkg_color ? "" : o.cancel_bkg_color = "#a1a1a1";
  !!o.cancel_font_color ? "" : o.cancel_font_color = "#ffffff";
  !!o.cancel_border_color ? "" : o.cancel_border_color = "#a1a1a1";
  !!o.cancel_border_width ? "" : o.cancel_border_width = "0";
  !!o.cancel_border_radius ? "" : o.cancel_border_radius = "2";
  !!o.cancel_bkg_color_hover ? "" : o.cancel_bkg_color_hover = "#5d5d5d";
  !!o.cancel_font_color_hover ? "" : o.cancel_font_color_hover = "#a1a1a1";
  !!o.cancel_border_color_hover ? "" : o.cancel_border_color_hover = "#5d5d5d";
  !!o.cancel_border_width_hover ? "" : o.cancel_border_width_hover = "0"; //Radio Button

  !!o.radio_border_width ? "" : o.radio_border_width = "0";
  !!o.padding_top_radio ? "" : o.padding_top_radio = "10";
  !!o.padding_right_radio ? "" : o.padding_right_radio = "15";
  !!o.padding_bottom_radio ? "" : o.padding_bottom_radio = "10";
  !!o.padding_left_radio ? "" : o.padding_left_radio = "15";
  !!o.margin_top_radio ? "" : o.margin_top_radio = "0";
  !!o.margin_right_radio ? "" : o.margin_right_radio = "10";
  !!o.margin_bottom_radio ? "" : o.margin_bottom_radio = "0";
  !!o.margin_left_radio ? "" : o.margin_left_radio = "0"; //Field Settings

  !!o.field_border_width ? "" : o.field_border_width = "1";
  !!o.field_label_size ? "" : o.field_label_size = "16";
  !!o.heading_font_size ? "" : o.heading_font_size = "24";
  !!o.description_font_size ? "" : o.description_font_size = "18"; //Section Settings

  !!o.section_font_size ? "" : o.section_font_size = "22";
  !!o.section_icon_size ? "" : o.section_icon_size = "22"; //Step

  !!o.prev_next_position ? "" : o.prev_next_position = "space-between";
  !!o.indicator_size ? "" : o.indicator_size = "15";
  !!o.indicator_position ? "" : o.indicator_position = "top";
  !!o.indicator_color ? "" : o.indicator_color = "#d5d5d5";
  !!o.indicator_color_active ? "" : o.indicator_color_active = "#aaaaaa";
  !!o.next_font_size ? "" : o.next_font_size = "16";
  !!o.prev_font_size ? "" : o.prev_font_size = "16";
  !!o.indicator_bottom_margin ? "" : o.indicator_bottom_margin = "25";
  !!o.indicator_spacing ? "" : o.indicator_spacing = "2";
  !!o.padding_top_next ? "" : o.padding_top_next = "5";
  !!o.padding_right_next ? "" : o.padding_right_next = "15";
  !!o.padding_bottom_next ? "" : o.padding_bottom_next = "5";
  !!o.padding_left_next ? "" : o.padding_left_next = "15";
  !!o.margin_top_next ? "" : o.margin_top_next = "5";
  !!o.margin_right_next ? "" : o.margin_right_next = "5";
  !!o.margin_bottom_next ? "" : o.margin_bottom_next = "5";
  !!o.margin_left_next ? "" : o.margin_left_next = "5"; //Padding and Margins

  !!o.position_form ? "" : o.position_form = "flex-start";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0";
  let submitFontSize = o.submit_font_size + "px";
  let submitBkgColor = o.submit_bkg_color;
  let submitFontColor = o.submit_font_color;
  let submitBorderColor = o.submit_border_color;
  let submitBorderWidth = o.submit_border_width + "px";
  let submitBorderRadius = o.submit_border_radius + "px";
  let submitBkgColorHover = o.submit_bkg_color_hover;
  let submitFontColorHover = o.submit_font_color_hover;
  let submitBorderColorHover = o.submit_border_color_hover;
  let submitBorderWidthHover = o.submit_border_width_hover + "px";
  let cancelFontSize = o.cancel_font_size + "px";
  let cancelBkgColor = o.cancel_bkg_color;
  let cancelFontColor = o.cancel_font_color;
  let cancelBorderColor = o.cancel_border_color;
  let cancelBorderWidth = o.cancel_border_width + "px";
  let cancelBorderRadius = o.cancel_border_radius + "px";
  let cancelBkgColorHover = o.cancel_bkg_color_hover;
  let cancelFontColorHover = o.cancel_font_color_hover;
  let cancelBorderColorHover = o.cancel_border_color_hover;
  let cancelBorderWidthHover = o.cancel_border_width_hover + "px";
  let sectionFontsize = o.section_font_size + "px";
  let sectionIconSize = o.section_icon_size + "px";
  let sectionBkg = o.section_background;
  let sectionLineWidth = (o.section_line_width || "2") + "px";
  let indicatorSize = o.indicator_size + "px";
  let indicatorColor = o.indicator_color;
  let indicatorColorActive = o.indicator_color_active;
  let indicatorBottomMargin = o.indicator_bottom_margin + "px";
  let indicatorSpacing = o.indicator_spacing + "px";
  let stepPrevText = o.step_prev_text || "Back";
  let prevFontColor = o.prev_font_color;
  let prevFontColorHover = o.prev_font_color_hover;
  let prevFontSize = o.prev_font_size + "px";
  let prevBkgColor = o.prev_bkg_color;
  let prevBkgColorHover = o.prev_bkg_color_hover;
  let stepNextText = o.step_next_text || "Next";
  let nextFontColor = o.next_font_color;
  let nextFontColorHover = o.next_font_color_hover;
  let nextFontSize = o.next_font_size + "px";
  let nextBkgColor = o.next_bkg_color;
  let nextBkgColorHover = o.next_bkg_color_hover;
  let paddingTopNext = o.padding_top_next + "px";
  let paddingRightNext = o.padding_right_next + "px";
  let paddingBottomNext = o.padding_bottom_next + "px";
  let paddingLeftNext = o.padding_left_next + "px";
  let marginTopNext = o.margin_top_next + "px";
  let marginRightNext = o.margin_right_next + "px";
  let marginBottomNext = o.margin_bottom_next + "px";
  let marginLeftNext = o.margin_left_next + "px";
  let paddingTopPrev = o.padding_top_prev + "px" || "5px";
  let paddingRightPrev = o.padding_right_prev + "px" || "10px";
  let paddingBottomPrev = o.padding_bottom_prev + "px" || "5px";
  let paddingLeftPrev = o.padding_left_prev + "px" || "10px";
  let marginTopPrev = o.margin_top_prev + "px" || "5px";
  let marginRightPrev = o.margin_right_prev + "px" || "5px";
  let marginBottomPrev = o.margin_bottom_prev + "px" || "5px";
  let marginLeftPrev = o.margin_left_prev + "px" || "5px";
  let prevNextPosition = o.prev_next_position;
  let fieldBkgColor = o.field_bkg_color;
  let fieldFontColor = o.field_font_color;
  let fieldBorderColor = o.field_border_color;
  let fieldBorderWidth = o.field_border_width + "px";
  let labelFontSize = o.field_label_size + "px";
  let labelFontColor = o.field_label_color;
  let headingFontColor = o.heading_font_color;
  let headingFontSize = o.heading_font_size + "px";
  let descriptionFontColor = o.description_font_color;
  let descriptionFontSize = o.description_font_size + "px";
  let PositionForm = o.position_form;
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px"; //Radio

  let radioBkg = o.radio_btn_bkg;
  let radioBkgHover = o.radio_btn_bkg_hover;
  let radioFontColor = o.radio_font_color;
  let radioFontColorHover = o.radio_font_color_hover;
  let radioBorderColor = o.radio_border_color;
  let radioBorderWidth = o.radio_border_width + "px";
  let paddingTopRadio = o.padding_top_radio + "px";
  let paddingRightRadio = o.padding_right_radio + "px";
  let paddingBottomRadio = o.padding_bottom_radio + "px";
  let paddingLeftRadio = o.padding_left_radio + "px";
  let marginTopRadio = o.margin_top_radio + "px";
  let marginRightRadio = o.margin_right_radio + "px";
  let marginBottomRadio = o.margin_bottom_radio + "px";
  let marginLeftRadio = o.margin_left_radio + "px";
  let formStyles = document.createElement("style");
  formStyles.id = "g__css_" + id;
  formStyles.innerHTML = `
  /* ------------------------ Global Styles ------------------------*/
  ${cssId}{
      /* Standard */
      --primary: ${primary};
      --font-regular: hero-new, sans-serif;
      --font-bold: hero-new, sans-serif;
      --border-radius: 4px;
      --field-height: 37px;
      --field-padding: 6px 12px;
      --error-color: #ea386e;
      --green: #00B28B;

      /* Mode Dependent */
      --background: #ffffff;
      --background-darker: #ffffff;
      --background-reverse: #000000;
      --background-range: #eaeaea;
      --background-hover: #eeeeee;
      --inner-background: #ffffff;
      --body: #ffffff;
      --font-color-reverse: #f5f5f5;
      --font-color-placeholder: #a1a1a1;
      --border: 1px solid #a1a1a1;

      --border-disabled: 1px solid #eaeaea;
      --font-color: #5d5d5d;
      --font-color-btns: #ffffff;
  }
  ${cssId}[mode="midnight"],
  #ui-datepicker-div[mode="midnight"]{
      --background: #303030;
      --background-darker: #151515;
      --background-reverse: #ffffff;
      --background-range: #2a2a2a;
      --background-hover: #3b3b3b;
      --inner-background: #5d5d5d;
      --body: #101010;
      --border: 1px solid #a1a1a1;
      --border-disabled: 1px solid #5d5d5d;
      --font-color: #ffffff;
      --font-color-btns: #ffffff;
      --font-color-disabled: #5d5d5d;
      --font-color-placeholder: #a1a1a1;
      --btn-fill-disabled: #404040
  }
  /*---------------------------------------------
  No Records
  ---------------------------------------------*/
  ${cssId} .g__no_records{
      display: flex;
      justify-content: center;
      background: transparent;
      align-items: center;
      flex: 0 0 100%;
      color: var(--font-color);
      height: 225px;
      margin-top: 50px;
      border: 2px dashed #5d5d5d;
  }
  ${cssId} .g__no_records h2{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: 2rem;
      color: var(--font-color);

  }
  /* ------------------------ Action Row ------------------------*/
  ${cssId} .g__form_action_row{
      display: flex;
      flex-direction: column;
      align-items: ${o.align_action_row || "flex-start"};
      margin-left: 15px;
      margin-right: 15px
  }
  ${cssId} .g__form_action_title{
      font-family: var(--font-regular);
      color: var(--font-color);
      font-weight: 300;
      font-size: ${o.title_font_size || "36px"}
  }
  ${cssId} .g__form_action_description{
      font-family: var(--font-regular);
      font-weight: 300;
      color: var(--font-color);
      font-size: ${o.description_font_size || "16px"}
  }
  ${cssId} .g__form_action_btn:hover{
    filter: brightness(85%);
   }
  /* ------------------------ Global Field Styles ------------------------*/
  ${cssId} {
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
      justify-content: ${PositionForm};
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
  }
  ${cssId} form{
    flex: 0 0 100%;
    max-width: ${o.max_width || "auto"};
  }
  ${cssId} .g__inline_row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
  }
  .g__inline_row .g__check_container {
    margin-top: 30px;
}
  ${cssId} .g__inline_row .g__form_field{
    position: relative;
    font-family: var(--font-regular);
    font-weight: 300;
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex: 1 1 0;
}
  ${cssId} .g__form_field{
      position: relative;
      font-family: var(--font-regular);
      font-weight: 300;
      display: flex;
      flex-direction: column;
      padding: 10px;
      flex: 1 1 0;
  }
  ${cssId} .g__form_copy{
      position: relative;
      font-family: var(--font-regular);
      font-weight: 300;
      display: flex;
      flex-direction: column;
      flex: 1;
  }
  ${cssId} .g__field_info{
      display: flex;
      flex-direction: row;
      align-items: center;
  }
  ${cssId} .g__form_field label{
      position: relative;
      color: ${labelFontColor};
      font-size: ${labelFontSize};
      justify-content: flex-start;
      margin-bottom: 5px;
  }
  ${cssId} .g__disabled{
    opacity: .5;
  }
  ${cssId} .g__char_remain{
      display: flex;
      margin-left: auto;
      padding: 0;
      color: var(--font-color);
      font-size: .8rem;
      margin-bottom: 5px;
      transition: color .5s;
  }
  ${cssId} .g__char_remain.g__limit{
      color: var(--error-color);
  }
  ${cssId} .required:after{
      content:" *";
      font-size: .7rem;
      position: absolute;
      margin-left: 4px;
      color: var(--font-color);
    }
  ${cssId} .g__form_field input.invalid{
      border: 2px solid var(--error-color);
  }
  ${cssId} .g__form_field textarea.invalid{
      border: 2px solid var(--error-color);
  }
  ${cssId} .g__error_msg.active{
      display: flex;
  }
  ${cssId} .g__error_msg{
      display: none;
      justify-content: flex-end;
      padding: 2px 0;
      color: var(--error-color);
      font-size: .8rem;
  }
  ${cssId} .g__form_field input{
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      color: ${fieldFontColor};
      font-size: 1rem;
      padding: var(--field-padding);
      outline: none;
  }
  ${cssId} .g__form_field input::placeholder {
    color: var(--font-color-placeholder);
  }
  ${cssId} button{
      cursor: pointer;
  }
  ${cssId} .g__button_container{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
  }
  ${cssId} #g__submit_btn{
      display: inline-flex;
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: ${submitFontSize};
      background: ${submitBkgColor};
      padding: 10px 40px;
      color: ${submitFontColor};
      border: ${submitBorderWidth} solid ${submitBorderColor};
      border-radius: ${submitBorderRadius};
      margin: 15px;
      transition: all .5s ease;
  }
  ${cssId} .g__step_btns #g__submit_btn{
    padding: 5px 15px;
    margin: 0;
  }
  ${cssId} #g__submit_btn:hover{
    background: ${submitBkgColorHover};
    color: ${submitFontColorHover};
    border: ${submitBorderWidthHover} solid ${submitBorderColorHover};
  }
  ${cssId} #g__cancel_btn{
    display: inline-flex;
    font-family: var(--font-regular);
    font-weight: 300;
    font-size: ${cancelFontSize};
    background: ${cancelBkgColor};
    padding: 10px 40px;
    color: ${cancelFontColor};
    border: ${cancelBorderWidth} solid ${cancelBorderColor};
    border-radius: ${cancelBorderRadius};
    margin: 15px;
    transition: all .5s ease;
  }
  ${cssId} #g__cancel_btn:hover{
    background: ${cancelBkgColorHover};
    color: ${cancelFontColorHover};
    border: ${cancelBorderWidthHover} solid ${cancelBorderColorHover};
   }
  ${cssId} .g__form_action_btn{
    display: inline-flex;
    justify-content: center;
    font-family: var(--font-regular);
    font-weight: 300;
    background: var(--inner-background);
    padding: 10px 40px;
    margin: 15px;
    color: var(--font-color);
    border: ${fieldBorderWidth} solid ${fieldBorderColor};
    border-radius: var(--border-radius);
    text-decoration: none;
    transition: all .5s ease;
  }
  ${cssId} .g__form_action_btn:hover{
    filter: brightness(75%);
   }
  ${cssId} input:-webkit-autofill,
  ${cssId} input:-webkit-autofill:hover,
  ${cssId} input:-webkit-autofill:focus{
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      -webkit-text-fill-color: var(--font-color);
      -webkit-box-shadow: 0 0 0px 1000px ${fieldBkgColor} inset;
      transition: background-color 5000s ease-in-out 0s;
  }
  @media only screen and (max-width: 768px) {
      ${cssId} .g__inline_row {
          display: flex;
          flex-direction: column;
          flex-wrap: no-wrap;
          align-items: initial;
      }
  }
  /* ------------------------ Content ------------------------------*/
  ${cssId} .g__form_header{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: ${headingFontSize};
      margin-top: 20px;
      color: ${headingFontColor};
      margin-left: 10px;
      margin-right: 10px;
  }
  ${cssId} .g__form_description{
      font-family: var(--font-regular);
      font-weight: 300;
      font-size: ${descriptionFontSize};
      color: ${descriptionFontColor};
      margin-left: 10px;
      margin-right: 10px;
  }
  /* ------------------------ Section ------------------------------*/
  ${cssId} .g__form_section{
      display: none;
      margin: 0 15px;
      transition: max-height 0.5s ease-out;
  }
  ${cssId} .g__form_section.g__section_active{
      display: block;
      margin: 0;
  }
  ${cssId} .g__section_header{
      display: flex;
      flex-direction: row;
      background: ${sectionBkg};
      cursor: pointer;
      justify-content: space-between;
      align-items: center;
      color: var(--font-color);
      padding: 10px;
  }
  ${cssId} .g__section_header .g__section_title{
      position: relative;
      font-family: var(--font-regular);
      font-size: ${sectionFontsize};
      font-weight: 300;
      flex-direction: row;
      color: ${sectionFontColor};
      margin-top: 2px;
      margin-bottom: 2px;
  }
  ${cssId} .g__section_header .g__section_line{
      flex: 1;
      height: ${sectionLineWidth};
      background: ${sectionFontColor};
      margin-left: 25px;
      margin-right: 25px;
  }
  ${cssId} .g__section_header .g__section_icon{
      transition: transform 0.3s;
      font-size: ${sectionIconSize};
      color: ${sectionFontColor};
  }
  ${cssId} .g__section_header.g__section_active .g__section_icon{
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
  }
  /* ------------------------ Step -----------------------------*/
  ${cssId} .g__form_progress_section{
    display: block;
    animation-duration: 1s;
    animation-name: slidein;
  }
  @keyframes slidein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ${cssId} .g__step{
    display: none;
  }
  ${cssId} .g__show_steps .g__step{
    display: block;
    border-top: 15px solid #808080;
    margin: 50px 0;
  }
  ${cssId} .g__step_btns{
    display: flex;
    justify-content: ${prevNextPosition};
    align-items: flex-start;
    padding: 15px 0;
    margin-top: 15px;
  }
  ${cssId} .g__step_btns #g__next_btn{
    background: ${nextBkgColor};
    border: 0;
    border-radius: 3px;
    color: ${nextFontColor};
    font-size: ${nextFontSize};
    padding-top: ${paddingTopNext};
    padding-bottom: ${paddingBottomNext};
    padding-left: ${paddingLeftNext};
    padding-right: ${paddingRightNext};
    margin-top: ${marginTopNext};
    margin-bottom: ${marginBottomNext};
    margin-left: ${marginLeftNext};
    margin-right: ${marginRightNext};
    transition: all .5s ease;
  }
  ${cssId} .g__step_btns #g__next_btn:hover{
    background: ${nextBkgColorHover};
    color: ${nextFontColorHover};
  }
  ${cssId} .g__step_btns #g__prev_btn{
    padding: 5px 15px;
    background: ${prevBkgColor};
    border: 0;
    border-radius: 3px;
    color: ${prevFontColor};
    font-size: ${prevFontSize};
    padding-top: ${paddingTopPrev};
    padding-bottom: ${paddingBottomPrev};
    padding-left: ${paddingLeftPrev};
    padding-right: ${paddingRightPrev};
    margin-top: ${marginTopPrev};
    margin-bottom: ${marginBottomPrev};
    margin-left: ${marginLeftPrev};
    margin-right: ${marginRightPrev};
    transition: all .5s ease;
  }
  ${cssId} .g__step_btns #g__prev_btn:hover{
    background: ${prevBkgColorHover};
    color: ${prevFontColorHover};
  }
  ${cssId} .g__progress_container{
    display: flex;
    justify-content: center;
    margin-bottom: ${indicatorBottomMargin};
  }
  ${cssId} .g__progress{
    height: ${indicatorSize};
    width: ${indicatorSize};
    margin: 0 ${indicatorSpacing};
    background-color: ${indicatorColor};
    border: none;
    border-radius: 50%;
    display: inline-block;
  }
  ${cssId} .g__progress.active {
    background-color: ${indicatorColorActive};
  }


  /* ------------------------ Dependency ------------------------------*/
  ${cssId} .dep_hide{
      display: none;
  }
  ${cssId} .dep_show{
      display: flex;
      flex-direction: column;
  }
  ${cssId} .g__inline_row .dep_hide{
    display: none;
  }
  ${cssId} .g__inline_row .dep_show{
    display: flex;
    flex-direction: column;
  }
  /* ------------------------ Divider ------------------------------*/
  ${cssId} .g__form_divider{
    display: flex;
    height: 2px;
    background: #000000;
    margin: 25px 0;
  }
  /* ------------------------ Password ------------------------------*/
  ${cssId} .g__password_container{
      display: flex;
      align-items: center;
      position: relative;
  }
  ${cssId} .g__field_password{
      flex: 1;
  }
  ${cssId} .g__password_container .g__hide_password_btn{
      display: none;
  }
  ${cssId} .g__disabled .g__password_show{
      pointer-events: none;
  }
  ${cssId} .g__password_show{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--font-color);
      padding: 0 5px;
      bottom: 1;
      right: 1px;
      border-radius: 0 3px 3px 0;
      height: calc(var(--field-height) - 1px);
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
      background: var(--inner-background);
  }
  ${cssId} .g__password_show:hover{
      cursor: pointer;
  }
  ${cssId} .g__password_show i{
      width: 30px;
      text-align: center;
  }
  /* ------------------------ Currency ------------------------------*/
  ${cssId} .g__show_counter .g__field_currency[type=number] {
      -moz-appearance: textfield;
  }
  ${cssId} .g__show_counter .g__field_currency::-webkit-outer-spin-button,
  ${cssId} .g__show_counter .g__field_currency::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  ${cssId} .g__currency_container{
    display: flex;
    align-items: center;
    position: relative;
  }
  ${cssId} .g__form_field input.g__field_currency{
    flex: 1;
    padding-left: 25px;
  }
  ${cssId} .g__currency_format {
    position: absolute;
    left: 10px;
    color: var(--font-color);
    opacity: .5;
  }
  /* ------------------------ Number ------------------------------*/
  ${cssId} .g__show_counter .g__field_number[type=number] {
      -moz-appearance: textfield;
  }
  ${cssId} .g__show_counter .g__field_number::-webkit-outer-spin-button,
  ${cssId} .g__show_counter .g__field_number::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  ${cssId} .g__number_container{
      display: flex;
      align-items: center;
      position: relative;
  }
  ${cssId} .g__number_container .g__num_unit{
    position: absolute;
    right: 35px;
    color: var(--font-color);
    opacity: .4;
}
  ${cssId} .g__hide_counter .g__number_plus_minus{
      display: none;
  }
  ${cssId} .g__field_number{
      flex: 1;
  }
  ${cssId} .g__number_plus_minus{
      position: absolute;
      bottom: 1px;
      right: 1px;
      border-radius: 0 3px 3px 0;
      width: 20px;
      height: calc(var(--field-height) - 1px);
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
      background: var(--inner-background);
  }
  ${cssId} .g__number_increase{
      width: 100%;
      height: 50%;
      position: relative;
      border-bottom: ${fieldBorderWidth} solid ${fieldBorderColor};
  }
  ${cssId} .g__number_increase:active{
      background: #dce2e8;
  }
  ${cssId} .g__number_increase:before{
      position: absolute;
      content: " ";
      left: 6px;
      top: 5px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 5px solid var(--font-color);
  }
  ${cssId} .g__number_decrease:active{
      background: #dce2e8;
  }
  ${cssId} .g__number_decrease:before{
      position: absolute;
      content: " ";
      width: 0;
      height: 0;
      left: 6px;
      top: 7px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid var(--font-color);
  }
  ${cssId} .g__number_decrease{
      width: 100%;
      height: 50%;
      position: relative;
  }
  // Disabled
  ${cssId} .g__disabled .g__number_decrease:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__number_plus_minus{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__number_plus_minus:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__number_increase:active{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__number_decrease:active{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__number_increase:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__number_decrease:before{
    border-top: 5px solid var(--font-color-disabled);
  }
  ${cssId} .g__disabled .g__number_increase:before{
    border-bottom: 5px solid var(--font-color-disabled);
  }
  @media only screen and (max-width: 768px) {
      ${cssId} .g__show_counter .g__number_plus_minus{
          display: none;
      }
      ${cssId} .g__show_counter .g__field_number[type=number] {
          -moz-appearance: textfield;
      }
      ${cssId} .g__show_counter .g__field_number::-webkit-outer-spin-button,
      ${cssId} .g__show_counter .g__field_number::-webkit-inner-spin-button {
          -webkit-appearance: block;
          margin: 0;
      }
  }
  /* ------------------------ Range ------------------------------*/
  ${cssId} .g__range_container{
      display: flex;
      align-items: center;
  }
  ${cssId} .g__range_output{
      width: 100px;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      color: var(--font-color);
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      padding: 5px 10px;
      margin-left: 20px;
  }
  ${cssId} .g__range_output[type=number] {
      -moz-appearance: textfield;
  }
  ${cssId} .g__range_output::-webkit-outer-spin-button,
  ${cssId} .g__range_output::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  ${cssId} .g__range_unit{
      position: absolute;
      right: 40px;
      display:flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      height: var(--field-height);
      color: var(--font-color);
      opacity: .4;
  }
  ${cssId} .g__range_plus_minus{
      position: absolute;
      background: var(--inner-background);
      right: 11px;
      border-radius: 0 3px 3px 0;
      width: 20px;
      height: calc(var(--field-height) - 1px);
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
  }
  ${cssId} .g__range_increase{
      width: 100%;
      height: 50%;
      position: relative;
      border-bottom: ${fieldBorderWidth} solid ${fieldBorderColor};
  }
  ${cssId} .g__range_increase:active{
      background: #dce2e8;
  }
  ${cssId} .g__range_increase:before{
      position: absolute;
      content: " ";
      left: 6px;
      top: 5px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 5px solid var(--font-color);
  }
  ${cssId} .g__range_decrease:active{
      background: #dce2e8;
  }
  ${cssId} .g__range_decrease:before{
      position: absolute;
      content: " ";
      width: 0;
      height: 0;
      left: 6px;
      top: 7px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid var(--font-color);
  }
  ${cssId} .g__range_decrease{
      width: 100%;
      height: 50%;
      position: relative;
  }
  ${cssId} .g__field_range{
      -webkit-appearance: none;
  }
  ${cssId} .g__form_field input.g__field_range{
      width: 100%;
      padding: 0;
      height: 9px;
      background-color: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: 5px;
  }
  ${cssId} input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    color: #13bba4;
  }
  ${cssId} .g__field_range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: var(--font-color-placeholder);
      border-radius: 15px;
      cursor: pointer;
  }
  ${cssId} .g__field_range::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: var(--font-color-placeholder);
      border-radius: 15px;
      cursor: pointer;
  }
  // Disabled
  ${cssId} .g__disabled .g__range_decrease:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__range_plus_minus{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__range_plus_minus:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__range_increase:active{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__range_decrease:active{
    background: var(--btn-fill-disabled);
  }
  ${cssId} .g__disabled .g__range_increase:hover{
    pointer-events: none;
  }
  ${cssId} .g__disabled .g__range_decrease:before{
    border-top: 5px solid var(--font-color-disabled);
  }
  ${cssId} .g__disabled .g__range_increase:before{
    border-bottom: 5px solid var(--font-color-disabled);
  }
  /* ------------------------ Quil ------------------------------*/
  ${cssId} .ql-toolbar {
      background: ${fieldBkgColor};
      border-top: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-right: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-bottom: 0;
      border-radius:  var(--border-radius) var(--border-radius) 0 0;
  }
  ${cssId} .ql-toolbar.invalid {
    border: 2px solid var(--error-color);
  }
  ${cssId} .ql-container {
     border-right: 0;
     border-left: 0;
     border-bottom: 0;
  }
  ${cssId} .ql-editor {
      font-family: var(--font-regular);
      font-weight: 300;
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      color: var(--font-color);
      background: ${fieldBkgColor};
      height: 200px;
      border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  ${cssId} .ql-editor.invalid {
    border: 2px solid var(--error-color);
  }
  ${cssId} .ql-stroke{
      stroke: var(--font-color);
  }
  ${cssId} .ql-picker-item::before{
      color: var(--font-color);
  }
  ${cssId} .ql-picker-options{
      background: ${fieldBkgColor};
  }
  /* ------------------------ Textarea ------------------------------*/
  ${cssId} textarea{
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      color: var(--font-color);
      font-family: var(--font-regular);
      font-weight: 300;
      padding: 5px;
      outline: none;
  }
  /* ------------------------ DateTime ------------------------------*/
  input[type="datetime-local"] {
      min-height: 2.5rem;
  }
  /* ------------------------ Date ------------------------------*/
  ${cssId} .g__date_container{
      position: relative;
      display: flex;
  }
  ${cssId} .g__date_field{
      height: var(--field-height);
      flex: 1;
  }
  ${cssId} .g__date_field::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
    }
  ${cssId} .g__calendar_icon{
      position: absolute;
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
      color: var(--font-color);
      font-size: 1.2rem;
      padding: 4px 15px;
      right: 1px;
      top: 1px;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      background: var(--inner-background);
  }
  #ui-datepicker-div{
      background: ${fieldBkgColor};
      color: var(--font-color);
      padding: 15px;
      margin-top: 2px;
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
  }
  .ui-datepicker-header{
      color: var(--font-color);
      background: none;
      border: none;
  }
  .ui-datepicker td a.ui-state-default{
      text-align:center;
      color: var(--font-color);
      background: none;
      border: none;
  }
  .ui-datepicker td a.ui-state-default.ui-state-active {
      border: 0;
      background: var(--primary);
      color: var(--font-color);
      border-radius: 50px;
  }
  .ui-datepicker select.ui-datepicker-month,
  .ui-datepicker select.ui-datepicker-year{
      width: 45%;
      background: transparent;
      border: 0;
      width: 40%;
      margin: 0 5px;
      color: var(--font-color);
  }
  .datepicker .ui-datepicker-header .ui-datepicker-prev,
  .datepicker .ui-datepicker-header .ui-datepicker-next {
      display: inline;
      float: left;
      cursor: pointer;
      font-size: 1.4em;
      padding: 0 10px;
      margin-top: -10px;
      color: #CCC;
  }
  .ui-datepicker-next {
      float: right;
  }
  /* ------------------------ Color ------------------------------*/
  ${cssId} .g__form_field .g__color_container {
      display: flex;
      position:relative;
  }
  ${cssId} .g__color_container input.g__hex_value{
      padding-left: 50px;
      width: 100%;
  }
  ${cssId} .g__form_field input[type=color] {
      padding: 0;
      position: absolute;
      background: transparent;
      border: 0;
      left: 2px;
      border-radius: var(--border-radius);
      height: 38px;
  }
  /* ------------------------ radio ------------------------------*/
  ${cssId} .g__disabled .g__radio_container {
    pointer-events: none;
  }
  ${cssId} .g__radio_container {
      display: block;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  ${cssId} .g__radio_option{
      display: flex;
      align-items: center;
      position: relative;
      flex-direction: row;
      padding-right: 25px;
      padding-top: 10px;
      padding-bottom: 10px;
  }

  ${cssId} .g__radio_container {
      display: flex;
      position: relative;
      flex-wrap: wrap;
  }
  ${cssId} .g__field_radio{
      position:absolute;
      opacity: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #eee;
  }
  ${cssId} .g__field_radio:hover {
      cursor: pointer;
  }
  ${cssId} .g__form_field .g__radio_label{
      font-size: .8rem;
      margin: 0;
      padding-left: 10px;
  }
  ${cssId} .g__radio {
      height: 20px;
      width: 20px;
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      background-color: ${fieldBkgColor};
      border-radius: 50%;
  }
  ${cssId} .g__radio_option input.invalid ~ .g__radio {
    border: 2px solid var(--error-color)
}
  ${cssId} .g__radio_option:hover input ~ .g__radio {
      background-color: #ccc;
      cursor: pointer;
  }
  ${cssId} .g__radio_container input:checked ~ .g__radio {
      background-color: ${fieldBkgColor};
      border: 1px solid #a1a1a1;
  }
  ${cssId} .g__radio_container input:checked ~ .g__radio:before {
      content: " ";
      position: absolute;
      height: 14px;
      width: 14px;
      border-radius: 50%;
      top: 13px;
      left: 3px;
      bottom: 0;
      background: var(--green);
  }
  ${cssId} .g__radio:after {
      content: "";
      position: absolute;
      display: none;
  }
  ${cssId} .g__check_container input:checked ~ .g__radio:after {
      display: block;
  }
  ${cssId} .g__check_container .g__radio:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
 }
 /* Button Style */
 ${cssId} .g__radio_btn .g__radio_option{
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
${cssId} .g__radio_btn .g__radio_option input + .g__radio_label{
  color: ${radioFontColor};
  background: ${radioBkg};
  border: ${radioBorderWidth} solid ${radioBorderColor};
  margin-right: 5px;
  padding-top: ${paddingTopRadio};
  padding-right: ${paddingRightRadio};
  padding-bottom: ${paddingBottomRadio};
  padding-left: ${paddingLeftRadio};
  margin-top: ${marginTopRadio};
  margin-right: ${marginRightRadio};
  margin-bottom: ${marginBottomRadio};
  margin-left: ${marginLeftRadio};
}
${cssId} .g__radio_btn .g__radio_option .g__radio_label:hover{
  cursor: pointer;
  color: ${radioFontColorHover};
  background: ${radioBkgHover};
}
${cssId} .g__radio_btn .g__radio_option input:checked + .g__radio_label{
  color: ${radioFontColorHover};
  background: ${radioBkgHover};
}
 @media only screen and (max-width: 768px) {
  ${cssId} .g__radio_container{
      flex-direction: column;
  }
 }
 /* ------------------------ checkbox Switch ------------------------------*/
 ${cssId} .g__check_container_switch{
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
${cssId} .g__check_container_switch input {
  left: 0;
  opacity: 0.01;
}
${cssId} .g__check_container_switch label {
  position: absolute;
  left: 80px;
  top: 6px;
}
${cssId} .g__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: ${fieldBkgColor};
  -webkit-transition: .4s;
  transition: .4s;
}
${cssId} .g__slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  border-radius: 34px;
  background-color: var(--font-color);
  -webkit-transition: .4s;
  transition: .4s;
}
${cssId} .g__check_container_switch input.g__checked + .g__slider {
  background-color: var(--green);
}

${cssId} .g__check_container_switch input:focus + .g__slider {
  box-shadow: 0 0 1px #2196F3;
}

${cssId} .g__check_container_switch input.g__checked + .g__slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}


 /* ------------------------ checkbox ------------------------------*/
  ${cssId} .g__disabled .g__check_container{
    pointer-events: none;
  }
  ${cssId} .g__check_container [type="checkbox"].g__unchecked,
  ${cssId} [type="checkbox"].g__checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  ${cssId} .g__check_container [type="checkbox"].g__unchecked + label,
  ${cssId} .g__check_container [type="checkbox"].g__checked + label {
    position: relative;
    padding-left: 2.3em;
    color: var(--font-color);
    line-height: 1.7;
    cursor: pointer;
  }
  ${cssId} [type="checkbox"].g__unchecked + label:before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border: ${fieldBorderWidth} solid ${fieldBorderColor};
    background: ${fieldBkgColor};
    border-radius: var(--border-radius);
    box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
    -webkit-transition: all .275s;
      transition: all .275s;
  }
${cssId} [type="checkbox"].g__checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border: ${fieldBorderWidth} solid ${fieldBorderColor};
    background: var(--green);
    border-radius: var(--border-radius);
    box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
    -webkit-transition: all .275s;
    transition: all .275s;
}
${cssId} [type="checkbox"].g__unchecked:hover + label:before {
  background: var(--inner-background);
}
${cssId} [type="checkbox"].g__unchecked + label:after,
${cssId} [type="checkbox"].g__checked + label:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 9px;
    font-size: 1.375em;
    color: #fff;
    background-color: var(--green);
    line-height: 0;
    border: solid white;
    width: 8px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .2s;
    transition: all .2s;
  }
${cssId} [type="checkbox"].g__unchecked + label:after {
  opacity: 0;
}

${cssId} [type="checkbox"].g__checked + label:after {
  opacity: 1;
  }
${cssId} [type="checkbox"].g__unchecked:disabled + label:before,
${cssId} [type="checkbox"].g__checked:disabled + label:before {
  box-shadow: none;
  border: var(--border-disabled);
}

${cssId} [type="checkbox"].g__checked:disabled + label:after {
  color: #777;
}

${cssId} .g__check_container [type="checkbox"]:disabled + label {
  color: var(--font-color-disabled);
}


  /* ------------------------ File ------------------------------*/
  ${cssId} .g__file_container{
      display: flex;
      flex-direction: row;
  }
  ${cssId} .g__file_btn {
      padding: var(--field-padding);
      height: var(--field-height);
      color: var(--font-color);
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      cursor: pointer;
  }
  ${cssId} .g__file_text{
      flex: 1;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
      padding: var(--field-padding);
      color: var(--font-color-placeholder);
      height: var(--field-height);
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      border-left: 1px solid var(--body);
  }
  ${cssId} .g__selected_container{
    background: var(--background-darker);
    display: inline-flex;
    align-items: center;
    height: 25px;
    flex-direction: row;
    padding: 0px 10px;
    border-radius: var(--border-radius);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${cssId} .g__selected_file{
    font-size: .8rem;
    color: var(--font-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${cssId} .g__file_delete{
      padding-left: 10px;
      color: var(--font-color);
      font-size: .6rem;
  }
  ${cssId} .g__file_delete:hover{
      cursor: pointer;
      filter: brightness(85%);
  }
  /* ------------------------ Spacing ------------------------------*/
  ${cssId} .g__spacing_container{
      display: flex;
      flex-direction: row;
      margin-top: 5px;
  }
  ${cssId} .g__field_options{
      display: flex;
      margin-left: 20px;
      margin-bottom: 5px;
  }
  ${cssId} .g__field_options:hover{
      cursor: pointer;
  }
  ${cssId} .g__field_options .active i{
      opacity: 1;
  }
  ${cssId} .g__field_options i{
      color: var(--font-color);
      opacity: .3;
      padding-right: 15px;
      transition: opacity .3s ease;
  }
  ${cssId} .g__field_options i:hover{
      opacity: .7;
      cursor: pointer;
  }
  ${cssId} .g__link{
      color: var(--font-color);
      opacity: .5;
      padding-top: 13px;
      margin: 0 7px;
      font-size: .7rem;
      transition: opacity .3s ease;
  }
  ${cssId} .g__link.active{
      opacity: 1;
  }
  ${cssId} .g__link:hover{
      opacity: .7;
      cursor: pointer;
  }
  ${cssId} .g__space_field.g__top,
  ${cssId} .g__space_field.g__bottom,
  ${cssId} .g__space_field.g__left,
  ${cssId} .g__space_field.g__right{
      flex: 1;
  }
  ${cssId} .g__space_field.g__bottom{
      margin-right: 30px;
      border-right: 1px solid var(--font-color);
      padding-right: 30px;
  }
  ${cssId} .g__space_field input{
      width: 100%;
  }
  ${cssId} .g__space_field p{
      color: var(--font-color);
      margin-top: 4px;
      font-size: .8rem;
      margin-bottom: 0;
      text-align: center;
  }
  /* ------------------------ Picklist Multiple ------------------------------*/
  ${cssId} .chosen-container-multi{
      display: flex;
      background-color: ${fieldBkgColor};
      border-radius: var(--border-radius);
  }
  ${cssId} .chosen-container-multi .chosen-choices{
      display: flex;
      align-items:center;
      background-color: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      height: var(--field-height);
      background-image: none;
  }
  ${cssId} .chosen-container .chosen-drop{
      background: ${fieldBkgColor};
      box-shadow: none;
      border-bottom: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-right: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-left: ${fieldBorderWidth} solid ${fieldBorderColor};
  }
  ${cssId} .chosen-search-input.default{
    color: var(--font-color-placeholder);
  }
  ${cssId} .chosen-container .chosen-results{
      color: var(--font-color) !important;
  }
  ${cssId} .chosen-container .chosen-results li{
      color: var(--font-color);
      padding: var(--field-padding);
      cursor: pointer;
  }
  ${cssId} .chosen-container .chosen-results li.highlighted{
      background-image: none;
      background-color: rgba(0, 0, 0, 0.2);
  }
  ${cssId} .chosen-container-multi .chosen-drop .result-selected{
      color: var(--background-darker);
  }
  ${cssId} .chosen-container-multi .chosen-choices li.search-field{
      display: flex;
      align-items: center;
  }
  ${cssId} .chosen-container-multi .chosen-choices li.search-field input[type="text"]{
      color: var(--font-color) !important;
  }
  ${cssId} .chosen-container-multi .chosen-choices li.search-choice{
      display: flex;
      align-items: center;
      flex-direction: row;
      background-color: var(--background-darker);
      border: none;
      border-radius: var(--border-radius);
      color: var(--font-color);
      background-image: none;
      height: calc(var(--field-height) - 10px);
      padding: 5px 10px;
      box-shadow: none;
  }
  ${cssId} .chosen-container-multi .chosen-choices li.search-choice .search-choice-close{
      position: relative;
      display: block;
      top: auto;
      right: auto;
      margin-left: 10px;
      width: 12px;
      height: 12px;
      background: url(https://cdn.addapptation.com/addapptation-customer-assets/addapptation-micros/granite/chosen-sprite.png) -42px 1px no-repeat;
      font-size: 1px;
  }
  @media only screen and (max-width: 768px) {
      ${cssId} .g__picklist_multiple select {
          display: flex;
      }
      ${cssId} .g__select_multiple {
          flex: 1;
          display: block;
          position: relative;
          width: 100%;
          padding: var(--field-padding);
          line-height: 1.5;
          background: ${fieldBkgColor};
          border: ${fieldBorderWidth} solid ${fieldBorderColor};
          border-radius: var(--border-radius);
          color: var(--font-color);
          font-family: var(--font-regular);
          font-weight: 300;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
      }
      ${cssId} .g__picklist_multiple:after {
          display: none;
      }
      ${cssId} .chosen-container {
          display: none;
      }
  }
  /* ------------------------ Multi Drag and Drop ------------------------------*/
  .g__select_main{
    display: flex;
    flex-direction: row;
    background: ${fieldBkgColor};
    border: ${fieldBorderWidth} solid ${fieldBorderColor};
  }

  .g__drag_parent{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding:15px;
    flex: 1;
  }
  .g__select_home{
  }
  .g__select_drop{
  }
  .g__multi_option{
    width: 100%;
    padding: 10px;
    color: var(--font-color);
    margin-bottom: 10px;
    border: ${fieldBorderWidth} solid ${fieldBorderColor};
    background: var(--background-darker);
  }
  .g__add_options{
    background: transparent;
    border: 0;
    color: var(--font-color);
    margin: 0 auto;
  }
  .g__remove_options{
    background: transparent;
    border: 0;
    color: var(--font-color);
    margin: 0 auto;
  }
  .g__select_main .g__multi_option.g__selected{
    background: var(--primary);
  }
  .g__multi_option.drag{
    background: var(--background-hover);
  }
  /* ------------------------ Picklist ------------------------------*/
  ${cssId} #mobile_menu{
    transform: translatey(0);
    height: auto;
  }
  /* Default picklist with no custom dropdown */
  ${cssId} .g__picklist.g__default_picklist select {
      display: flex;
  }
  ${cssId} .g__default_picklist .g__select_default {
      display: block;
      position: relative;
      width: 100%;
      padding: var(--field-padding);
      line-height: 1.5;
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      color: var(--font-color);
      font-family: var(--font-regular);
      font-weight: 300;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
  ${cssId} .g__default_picklist .g__select_selected{
    display: none;
  }
  ${cssId} .g__disabled .g__select_selected{
    pointer-events: none;
  }
  ${cssId} .g__picklist.g__default_picklist:after {
      position: absolute;
      content: "";
      top: 16px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: var(--font-color) transparent transparent transparent;
  }
  /* Custom picklist with custom dropdown */
  ${cssId} .g__picklist {
      position: relative;
  }
  ${cssId} .g__picklist.g__custom_picklist select {
      display: none;
  }
  ${cssId} .g__picklist.g__custom_picklist{
      background-color: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-radius: var(--border-radius);
      height: var(--field-height);
  }
  ${cssId} .g__picklist.g__custom_picklist.invalid{
    border: 2px solid var(--error-color);
  }
  /* Style the arrow inside the select element: */
  ${cssId} .g__select_selected:after {
      position: absolute;
      content: "";
      top: 14px;
      right: 10px;
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-color: var(--font-color) transparent transparent transparent;
  }
  ${cssId} .g__select_selected.invalid {
      border: 2px solid var(--error-color);
  }
  /* Point the arrow upwards when the select box is open (active): */
  ${cssId} .g__select_selected.select-arrow-active:after {
      border-color: transparent transparent var(--font-color) transparent;
      top: 7px;
  }
  /* style the items (options), including the selected item: */
  ${cssId} .select-items div,.g__select_selected {
      display: flex;
      align-items: center;
      color: var(--font-color);
      padding: var(--field-padding);
      cursor: pointer;
      height: var(--field-height);
  }
  ${cssId} .g__select_selected {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
  /* Style items (options): */
  ${cssId} .select-items {
      position: absolute;
      display: flex;
      flex-direction: column;
      background: ${fieldBkgColor};
      border: ${fieldBorderWidth} solid ${fieldBorderColor};
      border-top: 1px solid var(--body);
      top: 100%;
      left: 0;
      right: 0;
      z-index: 99;
      max-height: 50vh;
      overflow: auto;
  }
  ${cssId} .g__search .g__select_search{
      display: block;
  }
  ${cssId} .g__select_search{
      display: none;
  }
  ${cssId} .select-items .g__select_search {
      background: var(--background-darker);
      margin: var(--field-padding);
      border-radius: var(--border-radius);
  }
  /* Hide the items when the select box is closed: */
  ${cssId} .select-hide {
      display: none;
  }
  ${cssId} .select-items div:hover, .same-as-selected {
      background-color: rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 576px) {
      ${cssId} .g__inline_row{
        align-items: initial;
      }
      ${cssId} .g__picklist.g__custom_picklist select {
          display: flex;
      }
      ${cssId} .g__select_default {
          display: block;
          position: relative;
          width: 100%;
          padding: var(--field-padding);
          line-height: 1.5;
          background: ${fieldBkgColor};
          border: ${fieldBorderWidth} solid ${fieldBorderColor};
          border-radius: var(--border-radius);
          color: var(--font-color);
          font-family: var(--font-regular);
          font-weight: 300;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
      }
      ${cssId} .g__picklist:after {
          position: absolute;
          content: "";
          top: 16px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: var(--font-color) transparent transparent transparent;
      }
      ${cssId} .g__select_selected {
          display: none;
      }
      ${cssId} .select-items {
          display: none;
      }
    }
  `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(formStyles);
  /* -------------------- Regex Expressions ----------------------*/

  const patterns = {
    tel: "[0-9]{2}/[0-9]{2}/[0-9]{4}",
    number: "[0-9]*",
    email: "[-a-zA-Z0-9.-_]{1,}@[-a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z0-9]{2,}[a-zA-Z0-9.]{0,}" //             yourname @ domain   .  com          ( .uk )

  };
  /* -------------------- Form Container ----------------------*/

  let form_container = document.createElement("form"); // conditional attributes

  !!attr__action ? form_container.setAttribute("action", attr__action) : "";
  !!attr__form_id ? form_container.setAttribute("id", attr__form_id) : ""; // static attributes

  form_container.setAttribute("method", attr__method);
  form_container.setAttribute("enctype", attr__enctype);
  form_container.setAttribute("novalidate", "false");
  /* -------------------- Check for step no records or step ----------------------*/

  if (r[0].children) {
    let children = r[0].children.length;

    if (totalRecords === 1 && children === 0) {
      let empty = document.createElement("div");
      empty.setAttribute("class", "g__no_records");
      empty.innerHTML = "<h2>Form</h2>";
      form_container.appendChild(empty);
      granite_div.appendChild(empty);
      return;
    }
  }
  /* -------------------- Labels and Info ----------------------*/


  function addLabels(field_info_container, r) {
    //Global labels and character counter
    if (!!r.title) {
      let label = document.createElement("label");
      String(r.required) === "true" ? label.classList.add("required") : "";
      label.setAttribute("for", r.name);
      label.innerHTML = r.title;
      field_info_container.appendChild(label);
    }

    if (r.length > 0 && r.show_count) {
      let count_container = document.createElement("div");
      count_container.setAttribute("class", "g__char_remain");
      count_container.innerText = "0/" + r.length;
      field_info_container.appendChild(count_container);
    }

    if (r.g_type === "spacing") {
      let field_options = document.createElement("div");
      field_options.setAttribute("class", "g__field_options");
      field_options.innerHTML = '<div class="g__device_icon active"></i><i class="far fa-desktop-alt"></i></div><div class="g__device_icon"><i class="fas fa-mobile-android-alt"></div>';
      field_info_container.appendChild(field_options);
    }

    return field_info_container;
  }
  /* -------------------- Standard Field Attributes ----------------------*/


  function basicAttributes(r, input, class_name) {
    input.setAttribute("class", class_name);
    !!r.g_type ? input.setAttribute("type", r.g_type) : "";
    !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
    !!r.name ? input.setAttribute("name", r.name) : "";
    !!r.value ? input.setAttribute("value", r.value) : input.setAttribute("value", "");
    !!r.title ? input.setAttribute("title", r.title) : "";
    !!r.placeholder ? input.setAttribute("placeholder", r.placeholder) : "";
    parseInt(r.length) > 0 ? input.setAttribute("maxlength", r.length) : "";
    !!r.invalid_message ? input.setAttribute("oninvalid", `this.setCustomValidity("${r.invalid_message}")`) : "";
    input.required = r.required;
    String(r.disabled) === "true" ? input.disabled = true : input.disabled = false;
    return input;
  }
  /* -------------------- Hidden Fields ----------------------*/


  function hiddenFields(hidden, name, value) {
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", name);
    hidden.setAttribute("form_id", attr__form_id);
    hidden.setAttribute("value", value);
    return hidden;
  }
  /* -------------------- Form Fields (Record Loop) ----------------------*/
  // Section attributes


  let section_num = 0;
  let total_sections = 0;
  r.forEach(r => {
    r.g_type === "section" ? total_sections++ : "";
  }); // Inline variables

  let arrInline = [];
  /* -------------------- Step ----------------------*/

  let indicator = document.createElement("div");
  indicator.classList.add("g__progress_container");
  let currStep = 0;
  let isStep = false;
  let stepCount = 0;

  if (o.indicator_position === "top" && stepCount > 1) {
    form_container.appendChild(indicator);
  }

  let arr_fields = parseRecord(r);

  function parseRecord(r) {
    let formFields = [];
    r.forEach(function (r, num) {
      switch (r.g_type) {
        case "pane_start":
        case "section":
          let form_section_container = document.createElement("div");
          form_section_container.id = r.id;
          form_section_container.setAttribute("data-micro-id", id);
          form_section_container.setAttribute("class", "g__form_section_container");
          let section_header = document.createElement("div");
          section_header.setAttribute("class", "g__section_header");
          String(r.collapsed) === "true" ? "" : section_header.classList.add("g__section_active");
          form_section_container.appendChild(section_header);
          let title = document.createElement("div");
          title.setAttribute("class", "g__section_title");
          title.innerHTML = r.title || "Section";
          let line = document.createElement("div");
          line.setAttribute("class", "g__section_line");
          let icon = document.createElement("div");
          icon.setAttribute("class", "g__section_icon");
          icon.innerHTML = '<i class="far fa-chevron-up"></i>';
          section_header.appendChild(title);
          section_header.appendChild(line);
          section_header.appendChild(icon);
          let form_section = document.createElement("div");
          form_section.setAttribute("class", "g__form_section");
          String(r.collapsed) === "true" ? "" : form_section.classList.add("g__section_active");
          form_section_container.appendChild(form_section);

          if (!!r.children) {
            let sectionChild = parseRecord(r.children);
            sectionChild.forEach(childField => {
              form_section.appendChild(childField);
            });
          }

          formFields.push(form_section_container);
          break;

        case "step":
          String(o.show_steps) === "true" ? form_container.classList.add("g__show_steps") : "";
          stepCount++;
          stepCount > 1 ? isStep = true : isStep = false;
          let progress = document.createElement("div");
          progress.classList.add("g__progress");
          indicator.appendChild(progress);
          let form_step = document.createElement("div");
          form_step.setAttribute("class", "g__step");
          form_step.setAttribute("data-step", stepCount);

          if (!!r.children) {
            let stepChild = parseRecord(r.children);
            stepChild.forEach(childField => {
              form_step.appendChild(childField);
            });
          }

          formFields.push(form_step);
          break;

        default:
          let field = buildRecord(r, num);

          if (!!field) {
            formFields.push(field);
          }

      }
    });
    return formFields;
  } // Push formFields array to form_container


  arr_fields.forEach(field => {
    form_container.appendChild(field);
  }); // Step next and prev button

  if (isStep && stepCount > 1) {
    let progressBtns = document.createElement("div");
    progressBtns.classList.add("g__step_btns");
    let prev = document.createElement("button");
    prev.id = "g__prev_btn";
    prev.type = "button";
    prev.innerHTML = stepPrevText;
    prev.addEventListener("click", () => {
      nextPrev(-1);
    });
    let next = document.createElement("button");
    next.id = "g__next_btn";
    next.type = "button";
    next.innerHTML = stepNextText;
    next.addEventListener("click", () => {
      nextPrev(1);
    });

    if (prevNextPosition === "space-between") {
      prev.style.marginRight = "auto";
      next.style.marginLeft = "auto";
    }

    progressBtns.appendChild(prev);
    progressBtns.appendChild(next);
    form_container.appendChild(progressBtns);
  } // Append the step indicator to the proper location


  if (o.indicator_position === "bottom" && stepCount > 1) {
    form_container.append(indicator);
  } else {
    form_container.prepend(indicator);
  }

  function buildRecord(r, num) {
    /* -------------------- Error Field ----------------------*/
    let error_field = document.createElement("div");
    error_field.setAttribute("class", "g__error_msg");
    r.id = !!r.id ? r.id : "a__" + Math.random().toString(36).substring(2, 15);
    let class_name = "g__field_" + r.g_type;
    let field_info_container;
    let form_field;

    if (r.g_type != "subheader" && r.g_type != "description" && r.g_type != "hidden" && r.g_type != "divider") {
      form_field = document.createElement("div");
      form_field.setAttribute("class", "g__form_field");
      !!r.field_max_width ? form_field.style.maxWidth = r.field_max_width : "";
      form_field.setAttribute("data-micro-id", id);
      !!r.addapptation_id ? form_field.setAttribute("data-record-id", r.addapptation_id) : "";
      !!r.classes ? form_field.classList.add(r.classes) : "";
      String(r.disabled) === "true" ? form_field.classList.add("g__disabled") : "";
      field_info_container = document.createElement("div");
      field_info_container.setAttribute("class", "g__field_info");
    } else if (r.g_type === "hidden") {
      form_field = document.createElement("div");
      form_field.setAttribute("class", "g__hidden_field");
    } //build each field depending on the type


    let input;

    switch (r.g_type) {
      case "boolean":
      case "checkbox":
        let check_container = document.createElement("div");
        String(r.switch) === "true" ? check_container.setAttribute("class", "g__check_container_switch") : check_container.setAttribute("class", "g__check_container");
        input = document.createElement("input");
        r.g_type === "boolean" ? r.g_type = "checkbox" : "";
        input.setAttribute("class", class_name);
        input.setAttribute("id", r.id);
        input.setAttribute("type", r.g_type);
        input.setAttribute("form_id", attr__form_id);
        input.setAttribute("name", r.name);
        input.setAttribute("title", r.title);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.value) === "true" ? input.setAttribute("value", r.value) : input.setAttribute("value", "false");
        String(r.value) === "true" ? input.checked = true : input.checked = false;
        String(r.value) === "true" ? input.classList.add("g__checked") : input.classList.add("g__unchecked");
        input.required = String(r.required) === "true";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        check_container.appendChild(input);

        if (String(r.switch) === "true") {
          let slider = document.createElement("span");
          slider.classList.add("g__slider");
          check_container.appendChild(slider);
        }

        let label = document.createElement("label");
        label.setAttribute("for", r.id);
        label.innerHTML = r.title;
        String(r.required) === "true" ? label.innerHTML += "*" : "";
        check_container.appendChild(label);
        form_field.appendChild(check_container);
        form_field.appendChild(error_field);
        break;

      case "color":
        form_field.appendChild(addLabels(field_info_container, r));
        let color_container = document.createElement("div");
        color_container.setAttribute("class", "g__color_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        input.setAttribute("pattern", "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");
        var hex_display = document.createElement("input");
        hex_display.type = "text";
        hex_display.setAttribute("class", "g__hex_value");
        let color_value = !!r.value ? r.value : "#ffffff";
        hex_display.setAttribute("value", color_value);
        !!r.name ? hex_display.setAttribute("data-attr", r.name) : "";
        String(r.disabled) === "true" ? hex_display.disabled = true : "";
        hex_display.setAttribute("pattern", "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");
        color_container.appendChild(input);
        color_container.appendChild(hex_display);
        form_field.appendChild(color_container);
        form_field.appendChild(error_field);
        break;

      case "currency":
        form_field.appendChild(addLabels(field_info_container, r));
        let curr_container = document.createElement("div");
        curr_container.setAttribute("class", "g__currency_container");
        r.show_stepper_arrow ? curr_container.classList.add("g__show_counter") : curr_container.classList.add("g__hide_counter");
        let curr_format = document.createElement("div");
        curr_format.setAttribute("class", "g__currency_format");
        curr_format.innerHTML = r.curr_format || "$";
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        r.type = "number";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.inputmode = "decimal";
        !!r.max_number ? input.max = r.max_number : "";
        !!r.min_number ? input.min = r.min_number : "";
        !!r.step ? input.step = r.step : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : ""; //Increase decrease container

        let curr_counter = document.createElement("div");
        curr_counter.setAttribute("class", "g__number_plus_minus"); // Increase container

        let curr_increase = document.createElement("div");
        curr_increase.setAttribute("class", "g__number_increase");
        curr_counter.appendChild(curr_increase); // Decrease container

        let curr_decrease = document.createElement("div");
        curr_decrease.setAttribute("class", "g__number_decrease");
        curr_counter.appendChild(curr_decrease); //Append the parent elements

        curr_container.appendChild(curr_format);
        curr_container.appendChild(input);
        curr_container.appendChild(curr_counter);
        form_field.appendChild(curr_container);
        form_field.appendChild(error_field);
        break;

      case "date":
        form_field.appendChild(addLabels(field_info_container, r));
        let date_container = document.createElement("div");
        date_container.setAttribute("class", "g__date_container");
        input = document.createElement("input");
        input.setAttribute("type", "date");
        input.setAttribute("class", "g__date_field");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
        !!r.name ? input.setAttribute("name", r.name) : "";
        !!r.value ? input.setAttribute("value", r.value) : "";
        dateRange(r, input);
        !!r.placeholder ? input.setAttribute("placeholder", r.placeholder) : "";
        input.required = r.required;
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        String(r.disabled) === "true" ? input.disabled = true : "";
        input.autocomplete = "false";
        let date_icon = document.createElement("div");
        date_icon.setAttribute("class", "g__calendar_icon");
        date_icon.innerHTML = "<i class='fal fa-calendar-alt'></i>";
        date_icon.style.display = "none";
        date_container.appendChild(input);
        date_container.appendChild(date_icon);
        form_field.appendChild(date_container);
        form_field.appendChild(error_field);
        break;

      case "divider":
        form_field = document.createElement("div");
        form_field.classList.add("g__form_divider");
        break;

      case "description":
        form_field = document.createElement("p");
        form_field.setAttribute("data-micro-id", id);
        !!r.addapptation_id ? form_field.setAttribute("data-record-id", r.addapptation_id) : "";
        form_field.setAttribute("class", "g__form_description");
        !!r.description_font_size ? form_field.style.fontSize = r.description_font_size : "";
        !!r.description_top_padding ? form_field.style.paddingTop = r.description_top_padding + "px" : "";
        !!r.description_bottom_padding ? form_field.style.paddingBottom = r.description_bottom_padding + "px" : "";
        form_field.innerHTML = r.value || "Description";
        break;

      case "email":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;

      case "file":
        form_field.appendChild(addLabels(field_info_container, r));
        let file_container = document.createElement("div");
        file_container.setAttribute("class", "g__file_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!r.accepted_file_types ? input.setAttribute("accept", r.accepted_file_types) : "";
        r.multiple ? input.setAttribute("multiple", "true") : "";
        input.setAttribute("hidden", "hidden");
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        let file_btn = document.createElement("button");
        file_btn.setAttribute("type", "button");
        file_btn.setAttribute("class", "g__file_btn");
        file_btn.innerText = "Choose File";
        let file_text = document.createElement("div");
        file_text.setAttribute("class", "g__file_text");
        file_text.innerText = r.placeholder || "No file chosen, yet.";
        file_container.appendChild(input);
        file_container.appendChild(file_btn);
        file_container.appendChild(file_text);
        form_field.appendChild(file_container);
        form_field.appendChild(error_field);
        break;

      case "hidden":
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        form_field.appendChild(input);
        break;

      case "multi":
        form_field.appendChild(addLabels(field_info_container, r));
        let multi_container = document.createElement("div");
        multi_container.setAttribute("class", "g__multi_container");
        let multi_options = r.options;
        let multi_double_arr = Array.isArray(multi_options) && Array.isArray(multi_options[0]);
        let multi_select = document.createElement("select");
        !!r.name ? multi_select.setAttribute("data-attr", r.name) : "";
        multi_select.multiple = true;
        String(r.required) === "true" ? multi_select.classList.add("g__required") : "";

        if (multi_double_arr) {
          for (let i = 0; i < multi_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", multi_options[i][0]);
            option.innerHTML = multi_options[i][1];
            multi_select.appendChild(option);
          }
        } else {
          for (let i = 0; i < multi_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", multi_options[i]);
            option.innerHTML = multi_options[i];
            multi_select.appendChild(option);
          }
        }

        multi_container.appendChild(multi_select);
        form_field.appendChild(multi_container);
        break;

      case "number":
        form_field.appendChild(addLabels(field_info_container, r));
        let num_container = document.createElement("div");
        num_container.setAttribute("class", "g__number_container");
        String(r.show_stepper_arrow === "true") ? num_container.classList.add("g__show_counter") : num_container.classList.add("g__hide_counter");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.max_number ? input.max = r.max_number : "";
        !!r.min_number ? input.min = r.min_number : "";
        !!r.step ? input.step = r.step : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";

        if (!!r.num_unit) {
          let unit = document.createElement("div");
          unit.classList.add("g__num_unit");
          unit.innerHTML = r.num_unit;
          num_container.appendChild(unit);
        } // Increase decrease container


        let num_counter = document.createElement("div");
        num_counter.setAttribute("class", "g__number_plus_minus"); // Increase container

        let num_increase = document.createElement("div");
        num_increase.setAttribute("class", "g__number_increase");
        !!r.name ? num_increase.setAttribute("data-attr", r.name) : "";
        num_counter.appendChild(num_increase); // Decrease container

        let num_decrease = document.createElement("div");
        num_decrease.setAttribute("class", "g__number_decrease");
        !!r.name ? num_decrease.setAttribute("data-attr", r.name) : "";
        num_counter.appendChild(num_decrease); //Append the parent elements

        num_container.appendChild(input);
        num_container.appendChild(num_counter);
        form_field.appendChild(num_container);
        form_field.appendChild(error_field);
        break;

      case "password":
        form_field.appendChild(addLabels(field_info_container, r));
        let pass_container = document.createElement("div");
        pass_container.setAttribute("class", "g__password_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        let pass_show = document.createElement("div");
        pass_show.setAttribute("class", "g__password_show");
        r.show_password_option ? "" : pass_show.classList.add("g__hide_password_btn");
        pass_show.innerHTML = '<i class="far fa-eye"></i>';
        pass_container.appendChild(input);
        pass_container.appendChild(pass_show);
        form_field.appendChild(pass_container);
        form_field.appendChild(error_field);
        break;

      case "picklist":
        form_field.appendChild(addLabels(field_info_container, r));
        let picklist_options = !!r.options ? r.options : ["option 1", "option 2"];
        let picklist_double_arr = Array.isArray(picklist_options) && Array.isArray(picklist_options[0]);
        input = document.createElement("div");

        if (String(r.multiple) === "true") {
          input.setAttribute("multiple", "true");
          input.classList.add("g__picklist_multiple");
        }

        input.classList.add("g__picklist");
        String(o.default_picklists) === "true" ? input.classList.add("g__default_picklist") : input.classList.add("g__custom_picklist");
        String(r.picklist_search) === "true" ? input.classList.add("g__search") : "";
        let select = document.createElement("select");
        !!r.name ? select.setAttribute("data-attr", r.name) : "";
        select.setAttribute("class", class_name);
        !!r.g_type ? select.setAttribute("type", r.g_type) : "";
        !!attr__form_id ? select.setAttribute("form_id", attr__form_id) : "";
        !!r.name ? select.setAttribute("name", r.name) : "";
        !!r.title ? select.setAttribute("title", r.title) : "";
        !!r.placeholder ? select.setAttribute("placeholder", r.placeholder) : "";
        select.required = r.required;
        String(r.disabled) === "true" ? select.disabled = true : select.disabled = false;
        String(r.required) === "true" ? select.classList.add("g__required") : "";
        select.setAttribute("id", r.id);
        String(r.multiple) === "true" ? select.classList.add("g__select_multiple") : select.classList.add("g__select_default");
        String(r.multiple) === "true" ? select.setAttribute("multiple", "true") : "";

        if (String(o.default_picklists) === "true" && r.placeholder) {
          let option_placeholder = document.createElement("option");
          option_placeholder.disabled = true;
          option_placeholder.selected = true;
          option_placeholder.hidden = true;
          option_placeholder.innerHTML = r.placeholder;
          select.appendChild(option_placeholder);
        }

        if (picklist_double_arr) {
          for (let i = 0; i < picklist_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", picklist_options[i][0]);

            if (r.value === picklist_options[i][0]) {
              option.selected = true;
            }

            option.innerHTML = picklist_options[i][1];
            select.appendChild(option);
          }
        } else {
          for (let i = 0; i < picklist_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", picklist_options[i]);

            if (r.value === picklist_options[i]) {
              option.selected = true;
            }

            option.innerHTML = picklist_options[i];
            select.appendChild(option);
          }
        }

        input.appendChild(select);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;

      case "radio":
        form_field.appendChild(addLabels(field_info_container, r));
        let radio_options = !!r.options ? r.options : ["Radio 1", "Radio 2"];
        let is_array = Array.isArray(radio_options);

        if (!is_array) {
          let arr_options = radio_options.split(",");
          radio_options = arr_options;
        }

        let is_double_array = Array.isArray(radio_options) && Array.isArray(radio_options[0]);
        let radio_container = document.createElement("div");
        radio_container.setAttribute("class", "g__radio_container");
        r.radio_style === "button" ? radio_container.classList.add("g__radio_btn") : "";
        radio_container.id = r.id;

        for (let i = 0; i < radio_options.length; i++) {
          let input_container = document.createElement("div");
          input_container.setAttribute("class", "g__radio_option");
          input = document.createElement("input");
          input.setAttribute("class", "g__field_radio");
          !!r.name ? input.setAttribute("data-attr", r.name) : "";
          !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
          String(r.next_on_click) === "true" ? input.addEventListener("click", () => {
            nextPrev(currStep);
          }) : "";
          input.type = "radio";
          input.name = r.name;
          input.required = r.required;
          String(r.required) ? input.classList.add("g__required") : "";
          String(r.disabled) === "true" ? input.disabled = "true" : "";
          let radio_label = document.createElement("label");
          radio_label.setAttribute("class", "g__radio_label");

          if (is_double_array) {
            input.id = radio_options[i][0];
            input.value = radio_options[i][0];
            r.value === radio_options[i][0] ? input.setAttribute("checked", "true") : "";
            radio_label.id = radio_options[i][0];
            radio_label.setAttribute("for", radio_options[i][0]);
            radio_label.innerHTML = radio_options[i][1];
          } else {
            let cleanId = radio_options[i].replace(/ /g, "");
            input.id = cleanId;
            input.value = radio_options[i];
            r.value === radio_options[i] ? input.setAttribute("checked", "true") : "";
            radio_label.id = cleanId;
            radio_label.setAttribute("for", cleanId);
            radio_label.innerHTML = radio_options[i];
          }

          input_container.appendChild(input);

          if (String(r.radio_style) != "button") {
            let radio = document.createElement("div");
            radio.setAttribute("class", "g__radio");
            input_container.appendChild(radio);
          }

          input_container.appendChild(radio_label);
          radio_container.appendChild(input_container);
        }

        form_field.appendChild(radio_container);
        form_field.appendChild(error_field);
        break;

      case "range":
        form_field.appendChild(addLabels(field_info_container, r));
        let min = r.min_number || 0;
        let max = r.max_number || 100;
        let range_container = document.createElement("div");
        range_container.setAttribute("class", "g__range_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        input.setAttribute("min", min);
        input.setAttribute("max", max);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        let output = document.createElement("input");
        String(r.disabled) === "true" ? output.disabled = true : "";
        output.setAttribute("class", "g__range_output");
        output.setAttribute("type", "number");
        !!r.value ? output.setAttribute("value", r.value) : "";
        !!r.name ? output.setAttribute("data-attr", r.name) : ""; // Unit indicator

        let unit = document.createElement("div");
        unit.setAttribute("class", "g__range_unit");
        unit.innerHTML = r.range_unit || "px"; // Increase decrease container

        let plusMinus = document.createElement("div");
        plusMinus.setAttribute("class", "g__range_plus_minus"); // Increase container

        let increase = document.createElement("div");
        increase.setAttribute("class", "g__range_increase");
        !!r.name ? increase.setAttribute("data-attr", r.name) : "";
        plusMinus.appendChild(increase); // Decrease container

        let decrease = document.createElement("div");
        decrease.setAttribute("class", "g__range_decrease");
        !!r.name ? decrease.setAttribute("data-attr", r.name) : "";
        plusMinus.appendChild(decrease); //Append the parent elements

        range_container.appendChild(input);
        range_container.appendChild(output);
        range_container.appendChild(unit);
        range_container.appendChild(plusMinus);
        form_field.appendChild(error_field);
        form_field.appendChild(range_container);
        break;

      case "spacing":
        form_field.appendChild(addLabels(field_info_container, r));
        const spacing_arr = ["top", "link", "bottom", "left", "link", "right"];
        const spacing_container = document.createElement("div");
        spacing_container.setAttribute("class", "g__spacing_container"); //Desktop hidden field

        const hidden_desktop = document.createElement("input");
        hidden_desktop.setAttribute("class", "g__space_desktop_hidden");
        hidden_desktop.type = "hidden";
        !!attr__form_id ? hidden_desktop.setAttribute("form_id", attr__form_id) : "";
        !!r.name ? hidden_desktop.name = r.name : "";
        !!r.title ? hidden_desktop.title = r.title : "";
        spacing_container.appendChild(hidden_desktop); //mobile hidden field

        const hidden_mobile = document.createElement("input");
        hidden_mobile.setAttribute("class", "g__space_desktop_hidden");
        hidden_mobile.type = "hidden";
        !!attr__form_id ? hidden_mobile.setAttribute("form_id", attr__form_id) : "";
        !!r.name ? hidden_mobile.name = r.name : "";
        !!r.title ? hidden_mobile.title = r.title : "";
        spacing_container.appendChild(hidden_mobile);
        spacing_arr.forEach((val, num) => {
          if (val === "link") {
            let field_container = document.createElement("div");
            num === 1 ? field_container.setAttribute("class", `g__link g__link_tb`) : field_container.setAttribute("class", `g__link g__link_lr`);
            spacing_container.appendChild(field_container);
            let link = document.createElement("div");
            link.setAttribute("class", "g__space_link");
            link.innerHTML = '<i class="far fa-link"></i>';
            field_container.appendChild(link);
            form_field.appendChild(spacing_container);
          } else {
            let field_container = document.createElement("div");
            field_container.setAttribute("class", `g__space_field g__${val}`);
            spacing_container.appendChild(field_container);
            let input = document.createElement("input");
            input.type = "text";
            input.setAttribute("class", `g__input_${val}`);
            input.setAttribute("data-side", `${val}`);
            field_container.appendChild(input);
            let label = document.createElement("p");
            label.setAttribute("class", `g__label_${val}`);
            label.innerHTML = val;
            field_container.appendChild(label);
            form_field.appendChild(spacing_container);
          }
        });
        break;

      case "header":
      case "subheader":
        form_field = document.createElement("h2");
        form_field.setAttribute("class", "g__form_header");
        form_field.setAttribute("data-micro-id", id);
        form_field.setAttribute("type", "header");
        !!r.name ? form_field.setAttribute("data-attr", r.name) : "";
        !!r.addapptation_id ? form_field.setAttribute("data-record-id", r.addapptation_id) : "";
        !!r.heading_font_size ? form_field.style.fontSize = r.heading_font_size + "px" : "";
        !!r.heading_top_padding ? form_field.style.paddingTop = r.heading_top_padding + "px" : "";
        !!r.heading_bottom_padding ? form_field.style.paddingBottom = r.heading_bottom_padding + "px" : "";
        form_field.innerHTML = r.title || "Heading";
        break;

      case "tel":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.setAttribute("form", attr__form_id);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;

      case "textarea":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("textarea");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.innerHTML = r.value || "";
        input.rows = r.rows || "4";
        input.setAttribute("cols", "50");
        input.setAttribute("form", attr__form_id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;

      case "quill":
        form_field.appendChild(addLabels(field_info_container, r));
        let quil = document.createElement("div");
        quil.setAttribute("class", "g__quil_editor");
        let quill_id = "quill_" + num;
        quil.setAttribute("id", quill_id);
        input = document.createElement("input");
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        input.setAttribute("id", quill_id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.setAttribute("type", "hidden");
        form_field.appendChild(quil);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;

      default:
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
    } // Check if current field is inline or if previous field was inline


    if (String(r.inline_field) === "true") {
      arrInline.push(form_field);
    } else if (arrInline.length) {
      arrInline.push(form_field);
      let inlineRow = document.createElement("div");
      inlineRow.setAttribute("class", "g__inline_row");
      arrInline.forEach((field, count) => {
        inlineRow.appendChild(field);
      });
      arrInline = [];
      return inlineRow;
    } else {
      return form_field;
    }
  }
  /* -------------------- Hidden Option Fields ----------------------*/


  if (!!o.db_id || !!o.db_object || !!o.db_action || !!o.db_redirect) {
    let hidden_container = document.createElement("div");
    hidden_container.classList.add("g__hidden_field");

    if (!!o.db_id) {
      let hidden_db = document.createElement("input");
      hiddenFields(hidden_db, "Id", o.db_id);
      hidden_container.appendChild(hidden_db);
      form_container.appendChild(hidden_container);
    }

    if (!!o.db_object) {
      let hidden_object = document.createElement("input");
      hiddenFields(hidden_object, "object", o.db_object);
      hidden_container.appendChild(hidden_object);
      form_container.appendChild(hidden_container);
    }

    if (!!o.db_action) {
      let hidden_action = document.createElement("input");
      hiddenFields(hidden_action, "submit_form", o.db_action);
      hidden_container.appendChild(hidden_action);
      form_container.appendChild(hidden_container);
    }

    if (!!o.db_redirect) {
      let hidden_redirect = document.createElement("input");
      hiddenFields(hidden_redirect, "redirect_to", o.db_redirect);
      hidden_container.appendChild(hidden_redirect);
      form_container.appendChild(hidden_container);
    }

    if (!!o.flash_message) {
      let hidden_flash = document.createElement("input");
      hiddenFields(hidden_flash, "flash_message", o.flash_message);
      hidden_container.appendChild(hidden_flash);
      form_container.appendChild(hidden_container);
    }
  } // Submit & Cancal Container


  if ((!o.hide_submit || o.allow_cancel) && isStep != true) {
    let button_container = document.createElement("div");
    button_container.id = "g__submit_cancel";
    button_container.setAttribute("class", "g__button_container"); // Submit & Cancel Button

    if (!o.hide_submit) {
      let submit = document.createElement("button");
      submit.setAttribute("id", "g__submit_btn");
      submit.setAttribute("type", "submit");
      o.show_loader ? submit.classList.add("show_loader") : "";
      submit.innerHTML = o.submit_label || "Submit";
      button_container.appendChild(submit);
    }

    if (String(o.allow_cancel) === "true") {
      let cancel = document.createElement("button");
      cancel.setAttribute("id", "g__cancel_btn");
      cancel.setAttribute("type", "reset");
      cancel.innerHTML = o.cancel_label;
      button_container.appendChild(cancel);
    }

    if (!!o.button_1_label) {
      let form_custom_btn = document.createElement("a");
      form_custom_btn.href = o.button_1_href;
      form_custom_btn.setAttribute("class", "g__form_action_btn");
      form_custom_btn.innerHTML = o.button_1_label;
      button_container.appendChild(form_custom_btn);
    }

    form_container.appendChild(button_container);
  } // append the form to the page


  document.getElementById(granite_id).appendChild(form_container);
  /* -------------------- Submit on Enter ----------------------*/

  if (String(o.submit_on_enter) === "false") {
    document.getElementById(granite_id).onkeypress = function (e) {
      var key = e.charCode || e.keyCode || 0;

      if (key == 13) {
        e.preventDefault();
      }
    };
  }
  /* -------------------- Submit ----------------------*/


  let form = document.getElementById(attr__form_id);
  form.addEventListener("submit", e => {
    e.preventDefault();
    validate();
  });

  function validate() {
    let all_field_containers = document.querySelectorAll(".g__form_field");
    let all_sections = document.querySelectorAll(".g__form_section_container");
    let errors_arr = [];
    all_field_containers.forEach(field => {
      let input = field.querySelector(`input[form_id="${attr__form_id}"]`);
      let textarea = field.querySelector(`textarea[form_id="${attr__form_id}"]`);
      let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
      let error_msg = field.querySelector(".g__error_msg");
      let is_quill, is_required;

      if (!!input) {
        is_quill = input.classList.contains("g__field_quill");
        is_required = input.required;
      }

      if (is_quill && is_required) {
        let quill_toolbar = field.querySelector(".ql-toolbar");
        let quill_editor = field.querySelector(".ql-editor");
        let quill_content = quill_editor.innerHTML;

        if (quill_content === "<p><br></p>") {
          errors_arr.push(input);
          error_msg.classList.add("active");
          quill_toolbar.classList.add("invalid");
          quill_editor.classList.add("invalid");
          error_msg.innerHTML = "Enter a valid value.";
        } else {
          error_msg.classList.remove("active");
          quill_toolbar.classList.remove("invalid");
          quill_editor.classList.remove("invalid");
          quill_editor.classList.add("valid");
        }
      }

      if (!!input && input.type != "hidden") {
        if (!input.checkValidity()) {
          input.classList.remove("valid");
          input.classList.add("invalid");
          errors_arr.push(input);
          error_msg.classList.add("active");
          error_msg.innerHTML = input.validationMessage;
        } else {
          input.classList.add("valid");
          input.classList.remove("invalid");
          error_msg.classList.remove("active");
        }
      }

      if (!!textarea) {
        if (!textarea.checkValidity()) {
          textarea.classList.add("invalid");
          textarea.classList.remove("valid");
          errors_arr.push(textarea);
          error_msg.classList.add("active");
          error_msg.innerHTML = textarea.validationMessage;
        } else {
          textarea.classList.add("valid");
          textarea.classList.remove("invalid");
          error_msg.classList.remove("active");
        }
      }

      if (!!select) {
        let select_type;

        if (!select.checkValidity()) {
          select_type = select.parentElement.classList.contains("g__custom_picklist");

          if (select_type) {
            select.parentElement.classList.add("invalid");
          } else {
            select.classList.add("invalid");
          }

          errors_arr.push(select);
          error_msg.classList.add("active");
          error_msg.innerHTML = select.validationMessage;
        } else {
          if (select_type) {
            select.parentElement.classList.remove("invalid");
          } else {
            select.classList.remove("invalid");
          }

          error_msg.classList.remove("active");
        }
      }
    });

    if (all_sections.length) {
      all_sections.forEach(form_section => {
        let errors = form_section.querySelectorAll(".g__error_msg");
        let header = form_section.querySelector(".g__section_header");
        let section_content = form_section.querySelector(".g__form_section");
        errors.forEach(msg => {
          let content = msg.innerHTML;

          if (content) {
            header.classList.add("g__section_active");
            section_content.classList.add("g__section_active"); // section_content.style.maxHeight =
            // section_content.scrollHeight + "px";
          }
        });
      });
    }

    if (!errors_arr.length) {
      form.submit();
    }
  }
  /* -------------------- Back Cancel Button ----------------------*/


  if (o.allow_cancel) {
    let cancel = document.getElementById("g__cancel_btn");

    if (!!cancel) {
      cancel.addEventListener("click", () => {
        window.history.back();
      });
    }
  }
  /* -------------------- Currency Field ----------------------*/


  let all_curr = granite_div.querySelectorAll(".g__currency_container");
  all_curr.forEach(wrap => {
    const output = wrap.querySelector(".g__field_currency");
    const step = output.step;
    const increase = wrap.querySelector(".g__number_increase");
    const decrease = wrap.querySelector(".g__number_decrease");
    increase.addEventListener("click", () => {
      let curr_num = output.value;
      const val = parseFloat(output.value);

      if (curr_num === "") {
        output.value = !!step ? parseFloat(step) : 1;
      } else if (!!step) {
        output.value = val + parseFloat(step);
      } else {
        output.value = val + 1;
      }

      const e = new Event("input", {
        bubbles: true
      });
      output.dispatchEvent(e);
    });
    decrease.addEventListener("click", () => {
      let curr_num = output.value;
      const val = parseFloat(output.value);

      if (curr_num === "") {
        output.value = !!step ? parseFloat(step) : -1;
      } else if (!!step) {
        output.value = val - parseFloat(step);
      } else {
        output.value = val - 1;
      }

      const e = new Event("input", {
        bubbles: true
      });
      output.dispatchEvent(e);
    });
  });
  /* -------------------- File Enctype Change ----------------------*/

  let all_input = form.querySelectorAll("input");
  all_input.forEach(field => {
    let type = field.type;

    if (type === "file") {
      form.enctype = "multipart/form-data";
    }
  });
  /* -------------------- File Upload ----------------------*/

  let all_files = granite_div.querySelectorAll(".g__file_container");
  all_files.forEach(file => {
    let real_file_field = file.querySelector(".g__field_file");
    let g_file_btn = file.querySelector(".g__file_btn");
    let g_file_text = file.querySelector(".g__file_text"); // Activate the real file field on click

    g_file_btn.addEventListener("click", () => {
      real_file_field.click();
    });
    real_file_field.addEventListener("change", () => {
      if (real_file_field.value) {
        g_file_text.innerHTML = "";
        let file_container = document.createElement("div");
        file_container.classList.add("g__selected_container");
        let file_selected = document.createElement("div");
        file_selected.classList.add("g__selected_file");
        let file_delete = document.createElement("div");
        file_delete.innerHTML = "<i class='fal fa-times'></i>";
        file_delete.setAttribute("class", "g__file_delete");
        file_delete.addEventListener("click", () => {
          if (real_file_field.value) {
            file_selected.innerHTML = "";
            g_file_text.innerText = "No file chosen, yet.";
            real_file_field.value = "";
          }
        });
        file_selected.innerHTML = real_file_field.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        file_container.appendChild(file_selected);
        file_container.appendChild(file_delete);
        g_file_text.appendChild(file_container);
      } else {
        g_file_text.innerText = "No file chosen, yet.";
      }
    });
  });
  /* -------------------- Step ----------------------*/

  if (isStep) {
    showTab(currStep);
  } else {
    let singleStep = granite_div.querySelector(".g__step");

    if (!!singleStep) {
      singleStep.style.display = "inline";
    }
  }

  function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = granite_div.querySelectorAll(".g__step");
    x[n].style.display = "block"; // ... and fix the Previous/Next buttons:

    if (n == 0) {
      granite_div.querySelector("#g__prev_btn").style.display = "none";
    } else {
      granite_div.querySelector("#g__prev_btn").style.display = "inline";
    }

    if (n == x.length - 1) {
      granite_div.querySelector("#g__next_btn").style.display = "none";
      let btnContainer = granite_div.querySelector(".g__step_btns");
      let submitBtn = granite_div.querySelector("#g__submit_btn");

      if (!submitBtn) {
        let stepSubmit = document.createElement("button");
        stepSubmit.setAttribute("id", "g__submit_btn");
        stepSubmit.setAttribute("type", "submit");
        o.show_loader ? stepSubmit.classList.add("show_loader") : "";
        stepSubmit.innerHTML = o.submit_label || "Submit";
        btnContainer.appendChild(stepSubmit);
      } else {
        granite_div.querySelector("#g__submit_btn").style.display = "inline";
      }
    } else {
      let submitBtn = granite_div.querySelector("#g__submit_btn");

      if (!!submitBtn) {
        submitBtn.style.display = "none";
      }

      granite_div.querySelector("#g__next_btn").style.display = "inline";
    } // ... and run a function that displays the correct step indicator:


    fixStepIndicator(n);
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = granite_div.querySelectorAll(".g__step"); // Hide the current tab:

    x[currStep].style.display = "none"; // Increase or decrease the current tab by 1:

    currStep = currStep + n; // if you have reached the end of the form... :

    if (currStep >= x.length) {
      //...the form gets submitted:
      granite_div.getElementById("regForm").submit();
      return false;
    } // Otherwise, display the correct tab:


    showTab(currStep);
  } // function validateForm() {
  //   // This function deals with validation of the form fields
  //   var x, y, i, valid = true;
  //   x = document.getElementsByClassName("g__step");
  //   y = x[currStep].getElementsByTagName("input");
  //   // A loop that checks every input field in the current tab:
  //   for (i = 0; i < y.length; i++) {
  //     // If a field is empty...
  //     if (y[i].value == "") {
  //       // add an "invalid" class to the field:
  //       y[i].className += " invalid";
  //       // and set the current valid status to false:
  //       valid = false;
  //     }
  //   }
  //   // If the valid status is true, mark the step as finished and valid:
  //   if (valid) {
  //     document.getElementsByClassName("g__step")[currStep].className += " finish";
  //   }
  //   return valid; // return the valid status
  // }


  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
        x = document.getElementsByClassName("g__progress");

    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    } //... and adds the "active" class to the current step:


    x[n].className += " active";
  }
  /* -------------------- Sections ----------------------*/


  const all_sections = granite_div.querySelectorAll(".g__section_header");

  if (all_sections) {
    all_sections.forEach(form_section => {
      const section_header = form_section.nextSibling;
      form_section.addEventListener("click", () => {
        form_section.classList.toggle("g__section_active");
        section_header.classList.toggle("g__section_active"); // if (section_header.style.maxHeight) {
        //   section_header.style.maxHeight = null;
        // } else {
        //   section_header.style.maxHeight =
        //     section_header.scrollHeight + "px";
        // }
      });
    });
  }
  /* -------------------- Number ----------------------*/


  let all_numbers = granite_div.querySelectorAll(".g__number_container");
  all_numbers.forEach(wrap => {
    const output = wrap.querySelector(".g__field_number");
    const step = output.step;
    const increase = wrap.querySelector(".g__number_increase");
    const decrease = wrap.querySelector(".g__number_decrease");
    const max = output.max;
    const min = output.min;
    increase.addEventListener("click", () => {
      let curr_num = output.value;
      const val = parseInt(output.value);

      if (output.value < max || !max) {
        if (curr_num === "" && curr_num < min) {
          output.value = min;
        } else if (curr_num === "") {
          output.value = !!step ? parseInt(step) : 1;
        } else if (!!step) {
          output.value = val + parseInt(step);
        } else {
          output.value = val + 1;
        }
      }

      const e = new Event("input", {
        bubbles: true
      });
      output.dispatchEvent(e);
    });
    decrease.addEventListener("click", () => {
      let curr_num = output.value;
      const val = parseInt(output.value);

      if (output.value > min) {
        if (curr_num === "") {
          output.value = !!step ? parseInt(step) : -1;
        } else if (!!step) {
          output.value = val - parseInt(step);
        } else {
          output.value = val - 1;
        }
      }

      const e = new Event("input", {
        bubbles: true
      });
      output.dispatchEvent(e);
    });
  });
  /* -------------------- Spacing Values ----------------------*/

  let spacing_field_arr = document.querySelectorAll(".g__spacing_container");

  if (spacing_field_arr.length) {
    spacing_field_arr.forEach(space => {
      let parent = space.parentNode;
      let fields_arr = parent.querySelectorAll(".g__space_field");
      let spacing_values = {
        top: "",
        right: "",
        bottom: "",
        left: ""
      };
      fields_arr.forEach(field => {
        // Field input change
        field.addEventListener("input", val => {
          let desktop_hidden = parent.querySelector(".g__space_desktop_hidden");
          let focus_field = val.target;
          let side = focus_field.getAttribute("data-side");
          spacing_values[side] = focus_field.value;
          let is_linked = focus_field.parentElement.classList.contains("g__linked");
          desktop_hidden.value = `${!!spacing_values.top} ${!!spacing_values.right} ${!!spacing_values.bottom} ${!!spacing_values.left}`;
        });
      }); // Link fields

      let link_arr = parent.querySelectorAll(".g__link");
      link_arr.forEach(link_field => {
        link_field.addEventListener("click", () => {
          link_field.classList.toggle("active");
          link_field.previousSibling.classList.toggle("g__linked");
          link_field.nextSibling.classList.toggle("g__linked");
        });
      }); // Device selector

      let device_icons = parent.querySelectorAll(".g__device_icon");
      device_icons.forEach(selected => {
        selected.addEventListener("click", () => {
          let device_arr = selected.parentNode.children;

          for (let i = 0; i < device_arr.length; i++) {
            device_arr[i].classList.remove("active");
          }

          selected.classList.add("active");
        });
      });
    });
  }
  /* -------------------- Radio ----------------------*/


  let arr_radio = granite_div.querySelectorAll(".g__radio_container");

  if (arr_radio) {
    arr_radio.forEach(wrap => {
      let options = wrap.querySelectorAll(".g__radio_option");
      options.forEach(option => {
        let label = option.querySelector(".g__radio_label");
        let input = option.querySelector(".g__field_radio");
        label.addEventListener("click", () => {
          input.click();
        });
      }); // let input = options.querySelector('.g__field_radio');
      // let radio = options.querySelector('.g__radio');
    });
  }
  /* -------------------- Range Output ----------------------*/


  let all_ranges = granite_div.querySelectorAll(".g__range_container");
  all_ranges.forEach(wrap => {
    const range = wrap.querySelector(".g__field_range");
    const output = wrap.querySelector(".g__range_output");
    const increase = wrap.querySelector(".g__range_increase");
    const decrease = wrap.querySelector(".g__range_decrease");
    const range_min = range.min;
    const range_max = range.max;
    const value = range.value;
    range.addEventListener("load", () => {
      range.value = value;
    });
    increase.addEventListener("click", () => {
      const val = parseInt(output.value);

      if (val < range_max) {
        output.value = val + 1;
        setRange(range, output.value);
        start_auto_save(attr__form_id);
      }
    });
    decrease.addEventListener("click", () => {
      const val = parseInt(output.value);

      if (val > range_min) {
        output.value = val - 1;
        setRange(range, output.value);
        start_auto_save(attr__form_id);
      }
    });
    output.addEventListener("input", () => {
      const val = output.value;
      range.value = val;
      start_auto_save(attr__form_id);
    });
    range.addEventListener("input", () => {
      setOutput(range, output);
    });
    setOutput(range, output);
  });

  function setRange(range, val) {
    range.value = val;
    const e = new Event("change", {
      bubbles: true
    });
    range.dispatchEvent(e); // triggerEvent(range, 'change');
  }

  function setOutput(range, output) {
    const val = range.value;
    output.value = val;
  }
  /* -------------------- Quil Editors ----------------------*/


  let quil_fields = granite_div.getElementsByClassName("g__quil_editor");

  if (quil_fields.length) {
    for (let i = 0; i < quil_fields.length; i++) {
      let quill_id = "#" + quil_fields[i].id;
      let quill_elm = document.getElementById(quil_fields[i].id);
      let quil_hidden_field = quill_elm.nextSibling;
      var quill = new Quill(quill_elm, {
        debug: "false",
        modules: {
          history: {
            userOnly: true,
            delay: 1000
          }
        },
        theme: "snow",
        readOnly: quil_hidden_field.disabled,
        placeholder: quil_hidden_field.placeholder
      }); //populate quill with the value

      let quil_text_field = quill_elm.querySelector(".ql-editor");
      let value = quil_hidden_field.value;

      if (!!quil_text_field) {
        quil_text_field.innerHTML = value;
        quil_text_field.addEventListener("input", field => {
          quil_hidden_field.value = quil_text_field.innerHTML;
        });
      }
    }
  }
  /* -------------------- Character Limit ----------------------*/


  let char_count_field_arr = granite_div.querySelectorAll(".g__form_field");
  char_count_field_arr.forEach(field => {
    let input = field.querySelector("input, textarea");
    let quill = field.querySelector(".ql-editor");

    if (!!input) {
      let has_limit = input.hasAttribute("maxlength");
      let char_limit = has_limit ? input.getAttribute("maxlength") : "";

      if (char_limit > 0) {
        input.addEventListener("keyup", () => {
          let counter_div = field.querySelector(".g__char_remain");
          let text = input.value;
          let count = text.length;
          let limit = parseInt(char_limit);

          if (!!counter_div) {
            counter_div.innerText = count + "/" + char_limit;

            if (count >= limit) {
              counter_div.classList.add("g__limit");
            } else {
              counter_div.classList.remove("g__limit");
            }
          }
        });
      }
    } //Quill Counter


    if (!!quill) {
      let quill_hidden = field.querySelector(".g__field_quill");
      let has_limit = input.hasAttribute("maxlength");
      let char_limit = has_limit ? quill_hidden.getAttribute("maxlength") : "";

      if (char_limit > 0) {
        quill.addEventListener("input", () => {
          let counter_div = field.querySelector(".g__char_remain");
          let text = quill_hidden.value;
          let strippedString = text.replace(/(<([^>]+)>)/gi, "");
          let count = strippedString.length;
          let limit = parseInt(char_limit);

          if (!!counter_div) {
            counter_div.innerText = count + "/" + char_limit;

            if (count >= limit) {
              counter_div.classList.add("g__limit");
            } else {
              counter_div.classList.remove("g__limit");
            }
          }
        });
      }
    }
  });
  /* -------------------- Color field values ----------------------*/

  let color_fields = granite_div.getElementsByClassName("g__hex_value");

  for (let i = 0; i < color_fields.length; i++) {
    color_fields[i].addEventListener("keyup", function () {
      let first_char = this.value.substr(0, 1);
      first_char != "#" ? this.value = "#" + this.value : "";
      let color = this.value;
      this.previousSibling.value = color;
      start_auto_save(attr__form_id);
    });
  }

  let color_pickers = granite_div.getElementsByClassName("g__field_color");

  for (let i = 0; i < color_pickers.length; i++) {
    color_pickers[i].addEventListener("change", function () {
      let color = this.value;
      this.nextSibling.value = color;
    });
  }
  /* -------------------- Datepicker **jQuery** ----------------------*/


  function dateRange(r, input) {
    if (r.date_future || r.date_past || r.date_range) {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1; //January is 0!

      let year = date.getFullYear();

      if (month < 10) {
        month = "0" + month.toString();
      }

      if (day < 10) {
        day = "0" + day.toString();
      }

      let today = year + "-" + month + "-" + day;
      let range, date_min_max, range_day, range_month, range_year, range_full_date, is_range_pos;

      if (!!r.date_range) {
        var d = new Date();
        let range_num = parseInt(r.date_range);
        is_range_pos = range_num > 0;
        r.date_future ? d.setDate(d.getDate() - range_num) : "";
        r.date_past ? d.setDate(d.getDate() + range_num) : "";

        if (!r.date_future && !r.date_past && !!range_num) {
          d.setDate(d.getDate() + range_num);
        }

        range_day = d.getDate();
        range_month = d.getMonth() + 1;
        range_year = d.getFullYear();

        if (range_month < 10) {
          range_month = "0" + range_month.toString();
        }

        if (range_day < 10) {
          range_day = "0" + range_day.toString();
        }

        range_full_date = range_year + "-" + range_month + "-" + range_day;
      }

      if (!!r.date_range && r.date_future) {
        input.setAttribute("min", range_full_date);
        input.setAttribute("max", today);
      } else if (!!r.date_range && r.date_past) {
        input.setAttribute("max", range_full_date);
        input.setAttribute("min", today);
      } else if (r.date_future || r.date_past) {
        r.date_future ? input.setAttribute("max", today) : "";
        r.date_past ? input.setAttribute("min", today) : "";
      } else if (!!r.date_range && is_range_pos) {
        input.setAttribute("max", range_full_date);
      } else if (!!r.date_range && !is_range_pos) {
        input.setAttribute("min", range_full_date);
      }

      return input;
    }
  }

  let date_fields = granite_div.getElementsByClassName("g__date_field");

  for (let i = 0; i < date_fields.length; i++) {
    let type = date_fields[i].type;
    let icon = date_fields[i].nextSibling;

    if (type === "text") {
      icon.style.display = "block";
      let date_id = "#" + date_fields[i].id;
      $(date_id).datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        startDate: "+1d",
        showAnim: "slideDown",
        changeMonth: true,
        changeYear: true,
        prevText: '<i class="far fa-fw fa-chevron-left"></i>',
        nextText: '<i class="far fa-fw fa-chevron-right"></i>'
      });
    }

    $(".g__calendar_icon").on("click", function (field) {
      let date = $(this).prev();
      date.datepicker("show");
    });
    $("#ui-datepicker-div").attr("mode", mode);
  }
  /* -------------------- Custom Multi Drag & Drop ----------------------*/
  // let arr_multi = form.getElementsByClassName("g__multi_container");
  // let length = arr_multi.length;
  // if (length) {
  //   for (i = 0; i < length; i++) {
  //     let multi_elm = arr_multi[i].getElementsByTagName("select")[0];
  //     let options_length = multi_elm.length;
  //     let main_container = document.createElement("div");
  //     main_container.setAttribute("class", "g__select_main");
  //     let left_container = document.createElement("div");
  //     left_container.id = "g__select_home";
  //     left_container.setAttribute("class", "g__drag_parent");
  //     let add_btn = document.createElement("button");
  //     add_btn.type = "button";
  //     add_btn.setAttribute("class", "g__add_options");
  //     add_btn.innerHTML = "Add <i class='far fa-chevron-double-right'></i>";
  //     left_container.appendChild(add_btn);
  //     left_container.addEventListener("dragover", (event) => {
  //       event.preventDefault();
  //     });
  //     left_container.addEventListener("drop", (event) => {
  //       const id = event.dataTransfer.getData("text");
  //       const draggableElement = document.getElementById(id);
  //       const dropzone = left_container;
  //       dropzone.appendChild(draggableElement);
  //       event.dataTransfer.clearData();
  //       let options_left = left_container.children;
  //       options_left.length
  //         ? optionAddDrop(options_left, multi_elm, "unselected")
  //         : "";
  //     });
  //     let right_container = document.createElement("div");
  //     right_container.id = "g__select_drop";
  //     right_container.setAttribute("class", "g__drag_parent");
  //     let remove_btn = document.createElement("button");
  //     remove_btn.type = "button";
  //     remove_btn.setAttribute("class", "g__remove_options");
  //     remove_btn.innerHTML =
  //       "<i class='far fa-chevron-double-left'></i> Remove";
  //     right_container.appendChild(remove_btn);
  //     right_container.addEventListener("dragover", (event) => {
  //       event.preventDefault();
  //     });
  //     right_container.addEventListener("drop", (event) => {
  //       const id = event.dataTransfer.getData("text");
  //       const draggableElement = document.getElementById(id);
  //       const dropzone = right_container;
  //       dropzone.appendChild(draggableElement);
  //       event.dataTransfer.clearData();
  //       let options_right = right_container.children;
  //       options_right.length
  //         ? optionAddDrop(options_right, multi_elm, "selected")
  //         : "";
  //     });
  //     main_container.appendChild(left_container);
  //     main_container.appendChild(right_container);
  //     add_btn.addEventListener("click", (event) => {
  //       let home = event.target.parentElement;
  //       let drop = home.nextSibling;
  //       let arr_selected = [];
  //       let selected_fields = home.querySelectorAll(".g__selected");
  //       selected_fields.forEach((field) => {
  //         arr_selected.push(field);
  //         field.remove();
  //       });
  //       arr_selected.forEach((val) => {
  //         drop.appendChild(val);
  //         val.classList.remove("g__selected");
  //       });
  //       optionAddDrop(arr_selected, multi_elm, "selected");
  //     });
  //     remove_btn.addEventListener("click", (event) => {
  //       let drop = event.target.parentElement;
  //       let home = drop.previousSibling;
  //       let arr_selected = [];
  //       let selected_fields = drop.querySelectorAll(".g__selected");
  //       selected_fields.forEach((field) => {
  //         arr_selected.push(field);
  //         field.remove();
  //       });
  //       arr_selected.forEach((val) => {
  //         home.appendChild(val);
  //         val.classList.remove("g__selected");
  //       });
  //       optionAddDrop(arr_selected, multi_elm, "unselected");
  //     });
  //     let option_block;
  //     for (j = 0; j < options_length; j++) {
  //       option_block = document.createElement("div");
  //       option_block.id = "draggable-" + j;
  //       option_block.setAttribute("class", "g__multi_option");
  //       option_block.setAttribute("draggable", true);
  //       option_block.innerText = multi_elm.options[j].innerHTML;
  //       left_container.appendChild(option_block);
  //       option_block.addEventListener("click", (event) => {
  //         event.target.classList.toggle("g__selected");
  //       });
  //       option_block.addEventListener("dragstart", (event) => {
  //         event.dataTransfer.setData("text/plain", event.target.id);
  //         event.currentTarget.classList.add("drag");
  //       });
  //       option_block.addEventListener("dragend", (event) => {
  //         // event.currentTarget.classList.add("drag");
  //       });
  //     }
  //     arr_multi[i].appendChild(main_container);
  //   }
  //   function optionAddDrop(options, original_list, side) {
  //     for (let option of options) {
  //       //loop through original select options
  //       for (let item of original_list) {
  //         if (option.innerHTML === item.innerHTML && side === "selected") {
  //           item.selected = true;
  //         } else if (
  //           option.innerHTML === item.innerHTML &&
  //           side === "unselected"
  //         ) {
  //           item.selected = false;
  //         }
  //       }
  //     }
  //     //print out selected values
  //     for (i = 0; i < original_list.length; i++) {
  //       if (original_list.options[i].selected === true) {
  //         console.log(original_list.options[i]);
  //       }
  //     }
  //   }
  // }

  /* -------------------- Custom Select Field ----------------------*/


  if (String(o.default_picklists) === "false") {
    var f, x, i, j, l, ll, selElmnt, a, b, c, search_container, search, select_val;
    /* Look for any elements with the class "g__picklist": */

    f = document.getElementById(id);
    x = f.getElementsByClassName("g__picklist");

    if (x.length > 0) {
      l = x.length;

      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */

        a = document.createElement("div");
        a.setAttribute("class", "g__select_selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */

        b = document.createElement("div");
        b.setAttribute("class", "select-items select-hide");
        search = document.createElement("input");
        search.setAttribute("type", "text");
        search.setAttribute("class", "g__select_search");
        search.setAttribute("placeholder", "Search");
        search.addEventListener("click", function (e) {
          e.stopPropagation();
        });
        b.appendChild(search);

        for (j = 0; j < ll; j++) {
          /* For each option in the original select element,
                    create a new DIV that will act as an option item: */
          c = document.createElement("div");
          c.setAttribute("class", "g__select_option");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
                        and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;

            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                s.value = this.innerHTML;
                s.value = s.options[i].value || s.options[i].innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;

                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }

                this.setAttribute("class", "same-as-selected");
                break;
              }
            }

            h.click();
          });
          b.appendChild(c);
        }

        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
          /* When the select box is clicked, close any other select boxes,
                    and open/close the current select box: */
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }

      search.addEventListener("keyup", function (value) {
        let input = this.value.toUpperCase();
        let options_container = this.parentElement;
        let options_arr = options_container.querySelectorAll(".g__select_option");

        for (i = 0; i < options_arr.length; i++) {
          let txtValue = options_arr[i].textContent || options_arr[i].innerText;

          if (txtValue.toUpperCase().indexOf(input) > -1) {
            options_arr[i].style.display = "";
          } else {
            options_arr[i].style.display = "none";
          }
        }
      });

      function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
            except the current select box: */
        var x,
            y,
            i,
            xl,
            yl,
            arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("g__select_selected");
        xl = x.length;
        yl = y.length;

        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i);
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }

        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      /* If the user clicks anywhere outside the select box,
            then close all select boxes: */


      document.addEventListener("click", closeAllSelect);
    }
  }
  /* -------------------- Picklist Multi ----------------------*/


  let multiple_field = document.getElementsByClassName("g__select_multiple");

  if (multiple_field.length > 0) {
    $(".g__select_multiple").chosen({
      width: "auto"
    });
  }
  /* -------------------- checkbox ----------------------*/


  let all_checkboxes = granite_div.querySelectorAll(".g__field_checkbox, .g__field_boolean");

  if (all_checkboxes.length) {
    all_checkboxes.forEach(field => {
      field.addEventListener("change", e => {
        let is_checked = e.target.checked;

        if (is_checked) {
          e.target.checked = true;
          e.target.value = "true";
          e.target.classList.toggle("g__checked");
          e.target.classList.toggle("g__unchecked");
        } else {
          e.target.checked = false;
          e.target.value = "false";
          e.target.classList.toggle("g__checked");
          e.target.classList.toggle("g__unchecked");
        }
      });
    });
  }
  /* -------------------- checkbox Switch ----------------------*/


  let all_checkboxesSwitch = granite_div.querySelectorAll(".g__check_container_switch");

  if (all_checkboxesSwitch.length) {
    all_checkboxesSwitch.forEach(field => {
      field.addEventListener("click", e => {
        let parent = e.target.parentElement;
        let input = parent.querySelector("input");
        let is_active = input.classList.contains("g__checked");

        if (is_active) {
          input.classList.remove("g__checked");
          input.classList.add("g__unchecked");
        } else {
          input.classList.remove("g__unchecked");
          input.classList.add("g__checked");
        }
      });
    });
  }
  /* -------------------- Auto Save ----------------------*/


  let autosave_time = !!o.autosave_time ? parseInt(o.autosave_time) : 3000;
  let auto_save_count = 0;
  let auto_save_wait;

  function start_auto_save(form_id) {
    if (auto_save_count > 0) {
      clearTimeout(auto_save_wait);
      auto_save_count = 0;
      document.getElementById("save_notice").innerHTML = "Saving...";
    }

    if (auto_save_count == 0) {
      auto_save_wait = setTimeout(save, autosave_time, form_id);
      auto_save_count = 1;
      document.getElementById("save_notice").innerHTML = "Saving...";
    }
  }

  function save(form_id) {
    const formSave = document.getElementById(attr__form_id);
    const formData = new FormData(formSave);

    if (all_checkboxes.length) {
      all_checkboxes.forEach(check => {
        formData.append(check.name, check.value);
      });
    }

    $.ajax({
      type: o.method,
      url: o.action,
      processData: false,
      contentType: false,
      data: formData
    }).done(function (data) {
      console.debug("autosave successful");
      document.getElementById("save_notice").innerHTML = "Saved";
    }).fail(function (data) {
      console.debug("autosave failed");
      document.getElementById("save_notice").innerHTML = "A problem occurred, please try again.";
    });
    return false;
  }

  if (o.autosave) {
    let input_arr = [];
    let select_arr = [];
    let textarea_arr = [];
    let arr_form_fields = document.querySelectorAll(`${cssId} .g__form_field, ${cssId} .g__hidden_field`);
    arr_form_fields.forEach(field => {
      let input = field.querySelectorAll(`input[form_id="${attr__form_id}"]`);
      input_arr.push(input);
      let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
      select_arr.push(select);
      let textarea = field.querySelector(`textarea[form_id="${attr__form_id}"]`);
      textarea_arr.push(textarea);

      if (!!input) {
        input.forEach(inp => {
          inp.addEventListener("input", () => {
            start_auto_save(attr__form_id);
          });

          if (inp.classList.contains("g__field_quill")) {
            let quill = field.querySelector(".ql-editor");
            quill.addEventListener("input", () => {
              start_auto_save(attr__form_id);
            });
            quill.addEventListener("change", () => {
              start_auto_save(attr__form_id);
            });
          }
        });
      }

      if (!!select) {
        select.addEventListener("input", () => {
          start_auto_save(attr__form_id);
        });
      }

      if (!!textarea) {
        textarea.addEventListener("input", () => {
          start_auto_save(attr__form_id);
        });
      }
    });
  }
  /* -------------------- Show Password ----------------------*/


  let show_password = document.querySelectorAll(".g__password_show");

  if (show_password) {
    show_password.forEach(field => {
      field.addEventListener("click", () => {
        let password = field.previousSibling;
        let type = password.type;

        if (type === "password") {
          password.type = "text";
          field.innerHTML = '<i class="far fa-eye-slash"></i>';
        } else {
          password.type = "password";
          field.innerHTML = '<i class="far fa-eye"></i>';
        }
      });
    });
  }
  /* -------------------- Pattern Check ----------------------*/


  if (o.inline_validation) {
    let all_field_containers = document.querySelectorAll(".g__form_field");
    all_field_containers.forEach(field => {
      let input = field.querySelector("input");
      let select = field.querySelector("select");
      let select_desktop = field.querySelector(".g__select_selected");
      let error_msg = field.querySelector(".g__error_msg");

      if (!!input) {
        input.addEventListener("change", e => {
          let valid_input = input.checkValidity();

          if (valid_input) {
            input.classList.add("valid");
            input.classList.remove("invalid");
            error_msg.innerText = "";
          } else {
            input.classList.add("invalid");
          }
        });
      }

      if (!!select_desktop) {
        select_desktop.addEventListener("click", () => {
          let valid_input = select_desktop.previousSibling.checkValidity();

          if (valid_input) {
            select_desktop.classList.add("valid");
            select_desktop.classList.remove("invalid");
            error_msg.innerText = "";
          } else {
            select_desktop.classList.add("invalid");
          }
        });
      }
    });
  }
  /* -------------------- Dependency Field ----------------------*/


  r.forEach(function (r, num) {
    depCheck(r, num);

    if (r.children) {
      let childRecords = r.children;
      childRecords.forEach(function (r, num) {
        depCheck(r, num);
      });
    }
  });

  function depCheck(r, num) {
    const is_dep = !!r.dependency_field && (!!r.dependency_values || String(r.dependency_not_blank) != true);

    if (is_dep) {
      let dep_name = document.getElementsByName(r.dependency_field);
      let dep_type;
      let dep_parent;

      if (!!dep_name) {
        if (!!dep_name[0]) {
          dep_type = dep_name[0].type;

          if (dep_type === "radio") {
            dep_parent = dep_name;
          } else {
            dep_parent = document.getElementById(dep_name[0].id);
          }
        }
      } else {
        console.log("Dependency field name does not exist");
      }

      let dep_child = document.getElementById(r.id);
      const dep_child_required = !!dep_child ? dep_child.required : false;
      let is_child_sec = !!dep_child ? dep_child.classList.contains("g__form_section_container") : "";
      let dep_blank = String(r.dependency_not_blank) === "true" ? true : false;

      switch (dep_type) {
        case "select-one":
          dep_select(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_blank);
          break;

        case "checkbox":
          checkbox_event(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_child_required);
          checkbox(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_child_required);
          break;

        case "radio":
          radio_event(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_blank, dep_child_required);
          radio(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_blank, dep_child_required);
          break;

        case "text":
          text_event(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_blank, dep_child_required);
          text(is_child_sec, dep_parent, dep_child, r.dependency_values, dep_blank, dep_child_required);
          break;
      }
    }

    function values_arr(values) {
      let arr = [];

      if (values.includes(",")) {
        arr = values.split(",");
      } else {
        arr.push(values);
      }

      return arr;
    }

    function radio_event(type, parent, child, values, blank, required) {
      parent.forEach(field => {
        field.addEventListener("change", () => {
          console.log("radio change");
          radio(type, parent, child, values, blank, required);
        });
      });
    }

    function radio(is_section, parent, child, values, blank, required) {
      const arr_values = values_arr(values);
      let radio_value;
      parent.forEach(field => {
        if (field.checked) {
          radio_value = field.value;
        }
      });
      let dep_text;

      if (radio_value) {
        dep_text = radio_value.toUpperCase();
      }

      const dep_child = child;
      const dep_blank = blank;
      let is_match;

      if (!!arr_values) {
        arr_values.forEach(val => {
          let child_text = val.toUpperCase().trim();
          let container;

          if (is_section) {
            container = child;
          } else if (!!dep_child) {
            container = dep_child.closest(".g__form_field");
          }

          console.log(dep_text);
          console.log(child_text);

          if (dep_text === child_text) {
            is_match = true;
            container.classList.remove("dep_hide");

            if (is_section) {
              sectionRequired(child, true);
            } else {
              dep_child.required = true;
            }
          } else if (dep_text != "" && dep_blank) {
            is_match = true;
            container.classList.remove("dep_hide");

            if (is_section) {
              sectionRequired(child, true);
            } else {
              dep_child.required = true;
            }
          } else if (!is_match) {
            container.classList.add("dep_hide");

            if (is_section) {
              sectionRequired(child, false);
            } else {
              dep_child.required = false;
            }
          }
        });
      }
    }

    function text_event(type, parent, child, values, blank, required) {
      parent.addEventListener("keyup", () => {
        text(type, parent, child, values, blank, required);
      });
    }

    function text(is_section, parent, child, values, blank, required) {
      const arr_values = values_arr(values);
      const dep_text = parent.value.toUpperCase();
      const dep_child = child;
      const dep_blank = blank;
      let is_match;

      if (!!arr_values) {
        arr_values.forEach(val => {
          let child_text = val.toUpperCase().trim();
          let container;

          if (is_section) {
            container = child;
          } else if (!!dep_child) {
            container = dep_child.closest(".g__form_field");
          }

          if (dep_text === child_text) {
            is_match = true;
            container.classList.remove("dep_hide");

            if (is_section) {
              sectionRequired(child, true);
            } else {
              dep_child.required = true;
            }
          } else if (dep_text != "" && dep_blank) {
            is_match = true;
            container.classList.remove("dep_hide");

            if (is_section) {
              sectionRequired(child, true);
            } else {
              dep_child.required = true;
            }
          } else if (!is_match) {
            container.classList.add("dep_hide");

            if (is_section) {
              sectionRequired(child, false);
            } else {
              dep_child.required = false;
            }
          }
        });
      }
    }

    function checkbox(is_section, parent, child, values, required) {
      const dep_values = values;
      const child_value = values === "true" ? true : false;
      const dep_checked = parent.classList.contains("g__checked");
      const dep_child = child;
      let container;

      if (is_section) {
        container = child;
      } else if (!!dep_child) {
        container = dep_child.closest(".g__form_field");
      }

      if (dep_checked === child_value) {
        container.classList.remove("dep_hide");
        container.classList.add("dep_show");
        required ? dep_child.required = true : "";
        is_section ? sectionRequired(child, true) : "";

        if (is_section) {
          sectionRequired(child, true);
        } else {
          dep_child.required = true;
        }
      } else {
        container.classList.add("dep_hide");
        container.classList.remove("dep_show");
        required ? dep_child.required = false : "";
        is_section ? sectionRequired(child, false) : "";

        if (is_section) {
          sectionRequired(child, false);
        } else {
          dep_child.required = false;
        }
      }
    }

    function checkbox_event(is_section, parent, child, values, required) {
      parent.addEventListener("change", e => {
        // let parent = e.target.classList.contains('g__checked');
        checkbox(is_section, parent, child, values, required);
      });
    }

    function dep_select(is_section, parent, child, values, blank) {
      if (parent) {
        parent.addEventListener("change", e => {
          const arr_values = values_arr(values);
          const dep_selected = parent.value.toUpperCase();
          const dep_child = child;
          let arrCheck = picklistCompare(arr_values, dep_child, dep_selected); // check for the child form container

          let container;

          if (is_section) {
            container = child;
          } else if (!!dep_child) {
            container = dep_child.closest(".g__form_field");
          }

          let isMatch = arrCheck.includes(true);

          if (isMatch) {
            if (container) {
              container.classList.remove("dep_hide");
              container.classList.add("dep_show");
            }

            if (is_section) {
              sectionRequired(child, true);
            } else {
              dep_child.required = true;
            }
          } else {
            if (container) {
              container.classList.remove("dep_show");
              container.classList.add("dep_hide");
            }

            if (is_section) {
              sectionRequired(child, false);
            } else {
              dep_child.required = false;
            }
          }
        });
        parent.dispatchEvent(new Event("change"));
      }
    }
  }
  /* -------------------- Check Values and build array with booleans ----------------------*/


  function picklistCompare(arr_values, dep_child, dep_selected) {
    let arrCheck = [];

    if (!!arr_values) {
      arr_values.forEach(val => {
        let child_val = val.toUpperCase().trim();
        let check = child_val === dep_selected ? true : false;
        arrCheck.push(check);
      });
    }

    return arrCheck;
  }
  /* -------------------- Remove required on hidden section fields ----------------------*/


  function sectionRequired(child, val) {
    let arr_fields = child.querySelectorAll("input, textarea, select");
    arr_fields.forEach(field => {
      let field_required = field.classList.contains("g__required");

      if (val && field_required) {
        field.required = true;
      } else {
        field.required = false;
      }
    });
  }
}
function granite_header(jsonHeader, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonHeader.id;
  const o = jsonHeader.options;
  const r = jsonHeader.records;
  const t = jsonTheme;
  const mode = t.mode || "midight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  /*---------------------------------------------
  Convert Hex to RGB
  ---------------------------------------------*/

  function hexToRgb(hex) {
    var c;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");

      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }

      c = "0x" + c.join("");
      return [c >> 16 & 255, c >> 8 & 255, c & 255].join(",");
    }

    return `${hex} is not a valid Hex code.`;
  }
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/


  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/
  //mode

  let font_color = mode === "midnight" ? "#ffffff" : "#101010"; //text

  let header_size = o.header_size || "h1";
  let font_size;

  switch (header_size) {
    case "h1":
      font_size = !!o.font_size ? o.font_size : "38";
      break;

    case "h2":
      font_size = !!o.font_size ? o.font_size : "32";
      break;

    case "h3":
      font_size = !!o.font_size ? o.font_size : "28";
      break;

    case "h4":
      font_size = !!o.font_size ? o.font_size : "26";
      break;

    case "h5":
      font_size = !!o.font_size ? o.font_size : "20";
      break;

    case "h6":
      font_size = !!o.font_size ? o.font_size : "10";
      break;
  }

  switch (t.mode) {
    case "standard":
      !!o.text_color ? "" : o.text_color = "#000000";
      break;

    default:
      !!o.text_color ? "" : o.text_color = "#ffffff";
      break;
  }

  !!o.background_color ? "" : o.background_color = "#ffffff";
  !!o.background_opacity ? "" : o.background_opacity = "0";
  !!o.border_color ? "" : o.border_color = "#ffffff";
  !!o.border_width ? "" : o.border_width = "0";
  !!o.border_radius ? "" : o.border_radius = "5";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0";
  let header_text = o.header_text || "Heading";
  let text_color = o.text_color;
  let font_style = "hero-new, sans-serif";
  let font_weight = String(o.font_weight) === "true" ? "bold" : "300";
  let italic = o.italic ? "italic" : "normal"; //style

  let background_color = hexToRgb(o.background_color);
  let background_opacity = parseInt(o.background_opacity) / 100;
  let border_width = o.border_width + "px";
  let border_color = o.border_color;
  let border_radius = o.border_radius + "px";
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px"; //layout

  let alignContent = o.align_content || "flex-start";
  let alignText = o.align_text || "left";
  let horizontal_align = o.horizontal_align || "flex-start";
  let header_width = o.header_width || "auto"; // Font

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
    CSS Block
    ---------------------------------------------*/


  var headerCss = document.createElement("style");
  headerCss.id = "g__css_" + id;
  headerCss.innerHTML = `
    ${cssId}{
        display: flex;
        flex-wrap: wrap;
        justify-content: ${alignContent};
    }
    ${cssId} .g__elm_header{
        font-family: ${font_style};
        font-weight: ${font_weight};
        font-style: ${italic};
        color: ${text_color} !important;
        font-size: ${font_size + "px"};
        text-align: ${alignText};
        width: ${header_width};
        padding-top: ${paddingTop};
        padding-right: ${paddingRight};
        padding-bottom: ${paddingBottom};
        padding-left: ${paddingLeft};
        margin-top: ${marginTop};
        margin-right: ${marginRight};
        margin-bottom: ${marginBottom};
        margin-left: ${marginLeft};
        border-radius: ${border_radius};
        border: ${border_width} solid ${border_color};
        background: rgba(${background_color}, ${background_opacity});
    }
    `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(headerCss);
  /*---------------------------------------------
    Wrapper and Element
    ---------------------------------------------*/

  const header = document.createElement(header_size);
  !!o.id ? header.id = o.id : "";
  header.setAttribute("class", "g__elm_header");
  !!o.classes ? header.classList.add(o.classes) : "";
  header.setAttribute("data-micro-id", id);
  !!r.addapptation_id ? header.setAttribute("data-record-id", r.addapptation_id) : "";
  header.innerHTML = header_text;
  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/

  granite_div.appendChild(header);
}
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

  !!o.img_field_max_width ? "" : o.img_field_max_width = "100";
  !!o.img_field_max_width_mobile ? "" : o.img_field_max_width_mobile = "100";
  !!o.justify_content ? "" : o.justify_content = "center";
  !!o.padding_top ? "" : o.padding_top = "15";
  !!o.padding_right ? "" : o.padding_right = "15";
  !!o.padding_bottom ? "" : o.padding_bottom = "15";
  !!o.padding_left ? "" : o.padding_left = "15";
  !!o.margin_top ? "" : o.margin_top = "15";
  !!o.margin_right ? "" : o.margin_right = "15";
  !!o.margin_bottom ? "" : o.margin_botttom = "15";
  !!o.margin_left ? "" : o.margin_left = "15";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  const img_url = o.img_url || ""; //Image

  let img_max_width = o.img_field_max_width + "%";
  let img_max_width_mobile = o.img_field_max_width_mobile + "%"; //layout

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
  !!o.img_id ? img.id = img_id : "";
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
  !!o.img_link ? granite_div.appendChild(img_link) : granite_div.appendChild(img);
}
function granite_navigation(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
  const style = o.type || "topbar";
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  !!o.classes ? granite_div.setAttribute("class", o.classes) : "";
  /*---------------------------------------------
    Check for no navigation option
  ---------------------------------------------*/

  if (style === "none") {
    document.body.setAttribute("style", "");
    return;
  }
  /*---------------------------------------------
  Verify Div ID and Div Alignment - Set Mode
  ---------------------------------------------*/


  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
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
  Convert Hex to RGB
  ---------------------------------------------*/


  function hexToRgb(hex) {
    var c;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split("");

      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }

      c = "0x" + c.join("");
      return [c >> 16 & 255, c >> 8 & 255, c & 255].join(",");
    }

    return `${hex} is not a valid Hex code.`;
  }
  /*---------------------------------------------
  Default Attributes
  ---------------------------------------------*/


  switch (t.mode) {
    case "standard":
      !!o.background ? "" : o.background = " #eaeaea";
      !!o.font_color ? "" : o.font_color = "#000000";
      !!o.hover_text_color ? "" : o.hover_text_color = "#000000";
      !!o.utility_cta_font_color ? "" : o.utility_cta_font_color = "#ffffff";
      !!o.utility_cta_font_color_hover ? "" : o.utility_cta_font_color_hover = "#000000";
      !!o.utility_cta_border_color_hover ? "" : o.utility_cta_border_color_hover = "#000000";
      !!o.utility_cta_background_color ? "" : o.utility_cta_background_color = "#000000";
      !!o.utility_cta_font_background_hover ? "" : o.utility_cta_font_background_hover = "#161616";
      !!o.utility_cta_border_color ? "" : o.utility_cta_border_color = "#000000";
      break;

    default:
      !!o.background ? "" : o.background = " #303030";
      !!o.font_color ? "" : o.font_color = "#ffffff";
      !!o.hover_text_color ? "" : o.hover_text_color = "#ffffff";
      !!o.utility_cta_font_color ? "" : o.utility_cta_font_color = "#000000";
      !!o.utility_cta_font_color_hover ? "" : o.utility_cta_font_color_hover = "#ffffff";
      !!o.utility_cta_border_color_hover ? "" : o.utility_cta_border_color_hover = "#ffffff";
      !!o.utility_cta_font_background ? "" : o.utility_cta_font_background = "#ffffff";
      !!o.utility_cta_font_background_hover ? "" : o.utility_cta_font_background_hover = "#f5f5f5";
      !!o.utility_cta_border_color ? "" : o.utility_cta_border_color = "#ffffff";
      break;
  }

  !!o.nav_height ? "" : o.nav_height = "75";
  !!o.background_opacity ? "" : o.background_opacity = "100";
  !!o.nav_layout ? "" : o.nav_layout = "row";
  !!o.topbar_position ? "" : o.topbar_position = "right";
  !!o.topbar_font_size ? "" : o.topbar_font_size = "20";
  !!o.dropdown_font_size ? "" : o.dropdown_font_size = "14px"; // Hover

  !!o.hover_style ? "" : o.hover_style = "bottom_border";
  !!o.hover_bkg_color ? "" : o.hover_bkg_color = "transparent"; //Utility

  !!o.utility_font_size ? "" : o.utility_font_size = "12";
  !!o.utility_cta_border_radius ? "" : o.utility_cta_border_radius = "2";
  !!o.utility_cta_background ? "" : o.utility_cta_background = "#5d5d5d";
  !!o.utility_cta_border_size ? "" : o.utility_cta_border_size = "0"; // Mobile

  !!o.mobile_font_size ? "" : o.mobile_font_size = "16";
  !!o.center_button_size ? "" : o.center_button_size = "40";
  !!o.mobile_slide_in ? "" : o.mobile_slide_in = "translateX(200%)"; // Logo

  !!o.header_label_size ? "" : o.header_label_size = "24";
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/
  // Mode Defaults

  let bodyBkg = mode === "midnight" ? "#101010" : "#ffffff";
  let navBkgMode = mode === "midnight" ? "#353535" : "#eaeaea";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let activeMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  let lightGray = "#5d5d5d"; // Layout

  let navHeight = o.nav_height + "px";
  let sidebarWidth = o.sidebar_width || "250px";
  let topBarPosition = o.topbar_position;
  let mobilePadding = o.mobile_padding || "10px 15px";
  let desktopPadding = o.desktop_padding || "5px 30px"; // Design

  let navTopBarBkg = hexToRgb(o.background) || navBkgMode;
  let navBkg = o.background;
  let navBkgTopOpacity = parseInt(o.background_opacity) / 100;
  let headerLabelColor = o.header_label_color || fontColorMode;
  let headerLabelSize = o.header_label_size + "px";
  let logoFontSize = o.logo_font_size || "24px";
  let dividerLineColor = o.divider_line_color || lightGray; //mobile

  let mobileFontSize = o.mobile_bottom_font_size || "10px";
  let bottomCtaBkg = o.bottom_cta_bkg || navBkg;
  let centerButtonSize = o.center_button_size + "px";
  let mobileSlideIn = o.mobile_slide_in; // Font

  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
  let navFontSize = o.topbar_font_size + "px";
  let ddFontSize = o.dropdown_font_size = "px";
  let mobileTopFontSize = o.mobile_font_size + "px";
  let fontColor = o.font_color;
  let fontColorHover = o.hover_text_color;
  let fillColorHover = o.hover_bkg_color; // Utility

  let utilityFontSize = o.utility_font_size + "px";
  let utilityCtaBorderRadius = o.utility_cta_border_radius + "px";
  let utilityCtaFontSize = o.utility_cta_font_size + "px";
  let utilityCtaBkgColor = o.utility_cta_background_color;
  let utilityCtaFontColor = o.utility_cta_font_color;
  let utilityCtaBorderSize = o.utility_cta_border_size + "px";
  let utilityCtaBorderColor = o.utility_cta_border_color;
  let utilityCtaBkgColorHover = o.utility_cta_background_hover;
  let utilityCtaFontColorHover = o.utility_cta_font_color_hover;
  let utilityCtaBorderColorHover = o.utility_cta_border_color_hover;
  /*---------------------------------------------
  Adjust body margins
  ---------------------------------------------*/

  if (style === "topbar") {
    document.body.style.marginTop = navHeight;
    document.body.style.marginLeft = "0";
    granite_div.style.display = "block";
    granite_div.style.width = "auto";
  }

  if (style === "sidebar") {
    granite_div.style.display = "inline-block";
    granite_div.style.width = "250px";
    sidebarMargin();

    function sidebarMargin() {
      let currWidth = window.innerWidth || document.documentElement.clientWidth;

      if (currWidth > 991.98) {
        document.body.style.marginLeft = sidebarWidth;
        document.body.style.marginTop = "0";
      }

      if (currWidth < 991.98) {
        granite_div.style.display = "block";
        granite_div.style.width = "auto";
      }
    }

    window.addEventListener("resize", sidebarMargin());
  }
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/


  let navStyles = document.createElement("style");
  navStyles.id = "g__css_" + id;
  navStyles.innerHTML = `
    /* ------------------------------
    Granite Div
    -------------------------------*/
    ${cssId}{
      position:relative;
    }
    ${cssId}.g__no_records{
      display: flex;
      justify-content: center;
      background: transparent;
      align-items: center;
      color: ${fontColorMode};
      height: 225px;
      margin: 25px;
      border: 2px dashed #5d5d5d;
    }
    ${cssId}.g__no_records h2{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size: 2rem;
        color: var(--font-color);

    }
    /* ------------------------------
    Hide Mobile Elements
    -------------------------------*/
    ${cssId} .g__nav_cont .g__nav_main .g__item.g__bottom_cta{
      display: none;
    }
    /* ------------------------------
    Top Bar
    -------------------------------*/
    ${cssId} .g__topbar{
      display: flex;
      height: ${navHeight};
      position: relative;
      flex-direction: ${o.nav_layout};
      background: rgba(${navTopBarBkg}, ${navBkgTopOpacity});
      align-items: center;
      padding: 15px;
    }
    ${cssId} .g__topbar .g__logo_cont{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    ${cssId} .g__topbar .g__logo{
      width: 50px;
      height: auto;
    }
    ${cssId} .g__topbar .g__logo_label{
      color: ${headerLabelColor};
      font-size: ${headerLabelSize};
      font-family: ${font};
      font-weight: ${fontWeight};
      margin-left: 15px;
    }
    ${cssId} .g__topbar .g__nav_cont {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    ${cssId} .g__topbar .g__icon_container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ${cssId} .g__topbar .g__nav_utility {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      height: 25px;
      list-style: none;
      align-items: center;
      justify-content: flex-end;
    }
    ${cssId} .g__topbar .g__nav_utility .g__item_utility {
      display: flex;
      color: ${fontColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      order: 1;
      font-size: ${utilityFontSize};
      padding: 5px 30px;
    }
    ${cssId} .g__topbar .g__nav_main {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    ${cssId} .g__topbar .g__nav_main .g__item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      border: 2px solid transparent;
      padding: ${desktopPadding};
    }
    ${cssId} .g__topbar .g__nav_main .g__item.g__icon_center{
      flex-direction: column;
      justify-content: flex-end;
    }
    ${cssId} .g__topbar .g__nav_main .g__item.g__icon_center i{
      padding-right: 0;
    }
    ${cssId} .g__topbar .g__nav_main .g__item i {
      color: ${fontColor};
      font-size: ${navFontSize};
      padding-right: 10px;
    }
    ${cssId} .g__topbar .g__nav_main .g__item a {
      font-family: ${font};
      font-weight: ${fontWeight};
      color: ${fontColor};
      font-size: ${navFontSize};
    }


    /* ----- Top Bar Hover Styles ----- */
    ${cssId} .g__topbar .g__nav_main .g__item.g__bottom_border:hover {
      display: flex;
      cursor: pointer;
      color: ${fontColorHover};
      border-bottom: 2px solid ${fillColorHover};
    }
    ${cssId} .g__topbar .g__nav_main .g__item.g__top_border:hover {
      display: flex;
      cursor: pointer;
      color: ${fontColorHover};
      border-top: 2px solid ${fillColorHover};
    }
    ${cssId} .g__topbar .g__nav_main .g__item.g__bkg_fill:hover {
      display: flex;
      cursor: pointer;
      color: ${fontColorHover};
      background: ${fillColorHover};
    }
    ${cssId} .g__topbar .g__nav_main .g__item:hover i{
      color: ${fontColorHover};
    }
    ${cssId} .g__topbar .g__nav_main .g__item:hover a{
      color: ${fontColorHover};
    }

    /* ----- Top Bar CTA ----- */
    ${cssId} .g__topbar .g__cta_btn{
      font-size: ${utilityCtaFontSize};
      color: ${utilityCtaFontColor};
      background: ${utilityCtaBkgColor};
      border: ${utilityCtaBorderColor} solid ${utilityCtaBorderSize};
      border-radius: ${utilityCtaBorderRadius};
    }
    ${cssId} .g__topbar .g__cta_btn:hover{
      cursor: pointer;
      color: ${utilityCtaFontColorHover};
      background: ${utilityCtaBkgColorHover};
      border: ${utilityCtaBorderColorHover} solid ${utilityCtaBorderSize};
    }


    /* ----- Top Bar Dropdown ------ */
    ${cssId} .g__topbar ul.g__dropdown_menu{
      opacity: 0;
      max-height: 0;
      position: absolute;
      left: 0;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      background: ${navBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__topbar .g__dd_active ul.g__dropdown_menu{
      opacity: 1;
      max-height: 400px;
    }
    ${cssId} .g__topbar .g__dd_item_container{
      display: flex;
      align-items: center;
    }
    ${cssId} .g__topbar .g__dd_item_container i{
      color: ${fontColor};
      padding: 0 10px;
    }
    ${cssId} .g__topbar ul.g__dropdown_menu .g__sub_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-top: 1px solid ${dividerLineColor};
    }
    ${cssId} .g__topbar ul.g__dropdown_menu .g__sub_item i {
      order: 1;
      font-size: ${ddFontSize};
    }
    ${cssId} .g__topbar ul.g__dropdown_menu .g__sub_item a.g__sub_link {
      order: 0;
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${ddFontSize};
      display: flex;
    }

    ${cssId} .g__nav_hamburger .g__bar_1,
    ${cssId} .g__nav_hamburger .g__bar_2,
    ${cssId} .g__nav_hamburger .g__bar_3{
      display: none;
    }
    /* ------------------------------
    Sidebar
    -------------------------------*/
    ${cssId} .g__sidebar{
      display: flex;
      flex-direction: column;
      background: ${navBkg};
      width: ${sidebarWidth};
      height: 100vh;
      transform: translateX(0);
      transition: all .5s ease;
    }
    ${cssId} .g__mobile_bottom .g__bottom_cta{
      display: none;
    }
    ${cssId} .g__sidebar.g__collapse_active{
      display: flex;
      flex-direction: column;
      background: ${navBkg};
      width: 250px;
      height: 100vh;
      transform: translateX(-190px);
    }
    ${cssId} .g__sidebar .g__top_container{
      padding-top: 25px;
      padding-bottom: 25px;
    }
    ${cssId} .g__sidebar .g__logo_cont{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-bottom: 15px;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__logo{
      width: 50px;
      height: auto;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__logo_label{
      color: ${headerLabelColor};
      font-size: ${headerLabelSize};
      margin-left: 0;
      opacity: 1;
    }
    ${cssId} .g__sidebar .g__nav_cont {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    ${cssId} .g__sidebar .g__utility_cont{
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${fontColor};
      margin: 0 auto;
      font-size: 20px;
      position: relative;
    }
    ${cssId} .g__sidebar .g__utility_cont i{
      width: 30px;
      height: 30px;
      padding-top: 5px;
      text-align: center;
      border-radius: 50px;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__utility_cont i:hover{
      cursor: pointer;
      border-radius: 50px;
      background: rgba(255, 255, 255, .2);
    }
    ${cssId} .g__sidebar .g__nav_utility {
      display: none;
      position: absolute;
      top: 20px;
      border: 1px solid ${dividerLineColor};
      flex-direction: column;
      background: ${navBkg};
      align-items: center;
      justify-content: center;
      padding-left: 0;
      list-style: none;
    }
    ${cssId} .g__sidebar .g__utility_active .g__nav_utility{
      display: flex;
    }
    ${cssId} .g__sidebar .g__nav_utility .g__item_utility {
      display: flex;
      color: ${fontColor};
      font-size: .8rem;
      padding: 5px 10px;
    }
    ${cssId} .g__sidebar .g__nav_main {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      list-style: none;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item:first-of-type{
      border-top: 1px solid ${dividerLineColor};
    }
    ${cssId} .g__sidebar .g__nav_main .g__item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: ${fontColor};
      padding: 15px 10px;
      border-bottom: 1px solid ${dividerLineColor};
      transition: justify-content .5s ease;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item a{
      font-size: ${navFontSize};
      order: 0;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item .g__icon_container{
      font-size: ${navFontSize};
      order: 1;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item:hover{
      cursor: pointer;
      background: ${fillColorHover};
      font-color: ${fontColorHover};
    }
    ${cssId} .g__sidebar .g__nav_main .g__item:hover i{
      font-color: ${fontColorHover};
    }
    ${cssId} .g__sidebar .g__nav_main .g__item:hover a{
      font-color: ${fontColorHover};
    }
    ${cssId} .g__sidebar .g__sidebar_collapse{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto;
      margin-left: auto;
      margin-right: 15px;
      margin-bottom: 15px;
      border-radius: 50%;
      border: 1px solid transparent;
      width: 40px;
      height: 40px;
      font-size: 24px;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__sidebar_collapse:hover{
      cursor: pointer;
      background: rgba(255, 255, 255, .1);
      border-radius: 50%;
      border: 1px solid #fff;
    }
    ${cssId} .g__sidebar .g__sidebar_collapse i{
      font-size: 20px;
      color: ${fontColor};
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__sidebar_collapse i{
      transform: rotate(180deg);
    }


    /* ----- Sidebar collapsed ----- */
    ${cssId} .g__sidebar.g__collapse_active .g__logo_cont{
      align-items: flex-end;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__logo_cont a{
      display: flex;
      justify-content: center;
      width: 60px;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__utility_cont{
      justify-content: flex-end;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__utility_cont i{
      width: 60px;
      text-align: center;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__logo_cont .g__logo{
      padding: 5px;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__logo_cont .g__logo_label{
      opacity: 0;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__item{
      padding-right:0;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__item.g__no_icon{
      justify-content: flex-end;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__item.g__no_icon .g__link{
      width: 50px;
      padding: 5px;
      font-size: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__item .g__icon_container{
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__item .g__dd_item_container i{
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ${cssId} .g__sidebar.g__collapse_active .g__dd_item_container{
    }
    /* -------------------------Sidebar Dropdown --------------------------*/

    ${cssId} .g__sidebar .g__nav_main .g__item.g__item_dropdown {
      flex-direction: column;
      padding: 0;
    }
    ${cssId} .g__dd_item_container{
      display: flex;
      width: 100%;
      padding: 15px 10px;
      justify-content:space-between;
      align-items: center;
    }
    ${cssId} .g__dd_active .g__dd_item_container i{
      transform: rotate(90deg);
    }
    ${cssId} .g__dd_item_container .g__dd_arrow{
      padding-left: 5px;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu{
      padding-left: 0;
      padding-top: 10px;
      margin-bottom: 0;
      list-style: none;
      width: 100%;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__dd_active ul.g__dropdown_menu{
      max-height: 500px;
      opacity: 1;
      visibility: visible;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu{
      max-height: 0;
      opacity: 0;
      padding-top: 0;
      visibility: hidden;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 10px;
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      justify-content: space-between;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item a{
      font-size: ${ddFontSize}
      display: flex;
      order: 0;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item i{
      font-size: ${ddFontSize}
      order: 1;
    }
    /* ------------------------------ Active styles ------------------------------*/
    ${cssId} .g__sidebar .g__dd_active{
      background: rgba(255, 255, 255, .2);
    }
    ${cssId} .g__sidebar .g__nav_main .g__item.g__dd_active:hover{
      background: rgba(255, 255, 255, .2);
    }
    ${cssId} .g__sidebar .g__nav_main .g__item.g__dd_active .g__sub_item:hover{
      background: rgba(255, 255, 255, .4);
    }
    /* ------------------------------
    Top Bar Mobile
    -------------------------------*/
    @media (max-width: 991.98px) {
      ${cssId} .g__mobile_top{
        display: flex;
        flex-direction: row;
        width: auto;
        height: ${navHeight};
        position: relative;
        background: ${navBkg};
        justify-content: space-between;
        align-items: center;
        padding: 15px;
      }
      ${cssId} .g__mobile_top .g__utility_cont{
        display: none;
      }
      ${cssId} .g__mobile_top .g__sidebar_collapse{
        display: none;
      }
      ${cssId} .g__mobile_top .g__logo_cont{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        padding: 0;
      }
      ${cssId} .g__mobile_top .g__logo{
        width: 50px;
        height: auto;
      }
      ${cssId} .g__mobile_top .g__logo_label{
        color: ${headerLabelColor};
        font-size: ${logoFontSize};
        margin-left: 15px;
      }
      ${cssId} .g__mobile_top .g__nav_cont{
        position: absolute;
        flex-direction: column;
        align-items: stretch;
        top: ${navHeight};
        right: 0;
        left: 0;
        background: ${navBkg};
        height: calc(100vh - ${navHeight});
        opacity: 0;
        transform: ${mobileSlideIn};
        transition: all 1s ease;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main{
        order: 1;
        align-items: stretch;
        flex-direction: column;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_utility{
        order: 2;
        flex-direction: column;
        margin-top: auto;
        align-items: center;
        margin-bottom: 20px;
        align-items: stretch;
        margin-left: 15px;
        margin-right: 15px;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont{
        height: calc(100vh - (${navHeight} + 90px));
      }
      ${cssId} .g__mobile_top .g__nav_cont.g__nav_active{
        opacity: 1;
        transform: translateX(0);
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_utility .g__item_utility{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_utility .g__item_utility.g__cta_btn a{
        text-align: center;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__utility_cont{
        display: none;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont .g__nav_utility{
        display: flex;
        flex-direction: column;
        position: relative;
        border: 0;
        margin-top: initial;
        align-items: center;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__logo_cont{
        padding: 0;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont .g__nav_utility .g__item_utility:first-of-type{
        border-top: 1px solid ${dividerLineColor};
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont .g__nav_utility .g__item_utility{
        display: flex;
        width: 100%;
        border-bottom: 1px solid ${dividerLineColor};
        padding: 20px 10px;
        justify-content: center;
        margin-top: 0;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item{
        border-bottom: 1px solid ${dividerLineColor};
        flex-direction: row;
        justify-content: space-between;
        padding: ${mobilePadding};
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item i,
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item a{
        font-size: ${mobileTopFontSize};
      }


      ${cssId} .g__topbar.g__mobile_bottom .g__nav_utility .g__item_utility{
        border-bottom: 1px solid ${dividerLineColor};
        flex-direction: row;
        justify-content: space-between;
        padding: ${mobilePadding};
      }
      ${cssId} .g__topbar.g__mobile_top  .g__icon_container{
        order: 1;
      }


      /* ----- Top Bar Dropdown Mobile ------ */
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item.g__item_dropdown{
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item.g__item_dropdown .g__dd_item_container{
        padding: ${mobilePadding};
      }
      ${cssId} .g__mobile_top ul.g__dropdown_menu .g__sub_item{
        border: 0;
        padding: ${mobilePadding};
      }
      ${cssId} .g__mobile_top .g__item_dropdown i{
        margin-left: auto;
        font-size: ${ddFontSize};
      }
      ${cssId} .g__mobile_top .g__item_dropdown .g__link{
        font-size: ${ddFontSize};
      }
      ${cssId} .g__mobile_top ul.g__dropdown_menu{
        position: relative;
        width: 100%;
      }
      /* ------------------------- Hamburger --------------------------*/
      ${cssId} .g__nav_hamburger .g__bar_1,
      ${cssId} .g__nav_hamburger .g__bar_2,
      ${cssId} .g__nav_hamburger .g__bar_3{
        width: 25px;
        height: 3px;
        background-color: #fff;
        margin: 6px 0;
        transition: 0.4s;
        display: flex;
        flex-direction: column;
      }
      ${cssId} .g__nav_hamburger.g__nav_active .g__bar_1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
      }
      ${cssId} .g__nav_hamburger.g__nav_active .g__bar_2{
        opacity: 0;
      }
      ${cssId} .g__nav_hamburger.g__nav_active .g__bar_3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-6px, -4px);
      }
    /* ------------------------------
    Bottom Bar Mobile
    -------------------------------*/
    ${cssId} .g__nav__bottom_cont{
      display: flex;
      flex-direction: row;
      height: 90px;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main {
      display: flex;
      justify-content: space-between;
      flex: 0 0 100%;
      background: ${navBkg};
      height: auto;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      padding: 15px;
      z-index: 5;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main .g__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    ${cssId} .g__nav__bottom_cont .g__sidebar_collapse{
      display: none;
    }
    ${cssId} .g__nav__bottom_cont .g__logo_cont{
      display: flex;
      flex-direction: row;
      align-items: center;
      display: none;
      margin: 0;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_cont{
      display: flex;
      flex-direction: row;
      flex: 1;
      top: ${navHeight};
      background: ${navBkg};
    }
    ${cssId} .g__nav__bottom_cont{
      opacity: 1;
      transform: translateX(0);
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main{
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main .g__item{
      border: 0px solid ${dividerLineColor};
      flex-direction: column;
      justify-content: center;
      align-items: flex-bottom;
      padding: ${mobilePadding};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main .g__item.g__bottom_ellipsis{
      font-size: 20px;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main .g__item i{
      padding-right: 0;
      color: ${fontColor};
      padding-bottom: 5px;
      order: 0;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main .g__item a{
      font-size: ${mobileFontSize};
      color: ${fontColor};
      order: 1;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_cta{
      border: 3px solid #f5f5f5;
      background: ${bottomCtaBkg};
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      margin-top: -40px;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_cta i{
      font-size: ${centerButtonSize};
      color: ${fontColor};
    }
    /* ------------------------- Bottom Slide Menu --------------------------*/
    ${cssId} .g__nav__bottom_cont .g__bottom_menu{
      position: absolute;
      transform: translateY(140%);
      display: flex;
      flex-direction: column;
      width: 100vw;
      left: 0;
      height: calc(100vh - (${navHeight} + 90px));
      bottom: 0;
      margin-bottom: 90px;
      background: ${navBkg};
      z-index: 0;
      padding-left: 0;
      list-style: none;
      transition: all 1s ease;
    }
    ${cssId} .g__nav__bottom_cont.g__bottom_active .g__bottom_menu{
      transform: translateY(1px);
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__item{
      display: flex;
      border-bottom: 1px solid ${dividerLineColor};
      flex-direction: row;
      color: ${fontColor};
      justify-content: space-between;
      padding: ${mobilePadding};
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__item.g__item_dropdown{
      display: flex;
      position: relative;
      flex-direction: column;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu{
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      opacity: 0;
      max-height: 0;
      background: ${navBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__item.g__dd_active ul.g__dropdown_menu  {
      opacity: 1;
      max-height: 500px;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__dd_item_container{
      display: flex;
      align-items: center;
      padding: 0;
      color: ${fontColor};
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__dd_item_container i{
      color: ${fontColor};
      padding: 0 10px;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu .g__sub_item {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      padding-bottom: 10px;
      align-items: center;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu .g__sub_item i {
      font-size: ${ddFontSize};
      color: ${fontColor};
      order: 1;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu .g__sub_item a.g__sub_link {
      font-size: ${ddFontSize};
      color: ${fontColor};
      display: flex;
      order: 0;
    }

    `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(navStyles);
  /*---------------------------------------------
    Navigation builder
    ---------------------------------------------*/

  let topBarCont = document.createElement("div");
  topBarCont.classList.add(`g__${style}`);
  topBarCont.classList.add("g__mobile_top");
  o.mobile_menu_style === "bottom" ? topBarCont.classList.add(`g__mobile_bottom`) : "";
  /* ------------ Top Section Container -----------*/

  let topSection = document.createElement("div");
  topSection.classList.add("g__top_container");
  /* ------------ Logo -----------*/

  let logoCont = document.createElement("div");
  logoCont.classList.add("g__logo_cont");

  if (o.header_image) {
    let logoLink = document.createElement("a");
    logoLink.href = o.header_link || "/";
    logoCont.appendChild(logoLink);
    let logo = document.createElement("img");
    logo.classList.add("g__logo");
    logo.src = o.header_image;
    logo.alt = o.header_label || "";
    logoLink.appendChild(logo);
  }

  if (o.header_label) {
    let logoLabel = document.createElement("div");
    logoLabel.classList.add("g__logo_label");
    logoLabel.innerHTML = o.header_label || "";
    logoCont.appendChild(logoLabel);
  }

  topSection.appendChild(logoCont);
  topBarCont.appendChild(topSection);

  if (style === "sidebar") {
    var utilityCont = document.createElement("div");
    utilityCont.classList.add("g__utility_cont");
    utilityCont.innerHTML = '<i class="far fa-ellipsis-h"></i>';
    utilityCont.addEventListener("click", () => {
      utilityCont.classList.toggle("g__utility_active");
    });
    topSection.appendChild(utilityCont);
  }
  /* ------------ Hamburger Div -----------*/


  let hamburger = document.createElement("div");
  hamburger.classList.add("g__nav_hamburger");
  topBarCont.appendChild(hamburger);
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("g__nav_active");
    hamburger.nextSibling.classList.toggle("g__nav_active");
  });

  for (let i = 1; i < 4; i++) {
    let bar = document.createElement("div");
    bar.setAttribute("class", `g__bar_${i}`);
    hamburger.appendChild(bar);
  }
  /* ------------ Links -----------*/


  let navCont = document.createElement("div");
  navCont.classList.add("g__nav_cont");

  if (style === "topbar" && o.nav_layout != "column") {
    switch (topBarPosition) {
      case "left":
        navCont.style.marginRight = "auto";
        break;

      case "center":
        navCont.style.margin = "0 auto";
        break;

      default:
        navCont.style.marginLeft = "auto";
    }
  }

  let navMain = document.createElement("ul");
  navMain.classList.add("g__nav_main");
  let navUtility = document.createElement("ul");
  navUtility.classList.add("g__nav_utility");
  /* ------------ Dropdown -----------*/

  let dd = false;
  let ddLabel = "";
  let ddIcon = "";
  let arrDdItems = [];
  /* ------------ Main Loop -----------*/

  r.forEach((r, num) => {
    String(r.submenu_header) === "true" ? r.link_type = "ddHeader" : "";
    String(r.submenu) === "true" ? r.link_type = "ddItem" : "";
    let item, link, iconCont, iconLink;

    switch (r.link_type) {
      case "utility":
        item = document.createElement("li");
        item.classList.add("g__item_utility");
        !!o.hover_style ? item.classList.add(`g__${o.hover_style}`) : item.classList.add(`g__bottom_border`);
        String(r.cta_button) === "true" ? item.classList.add("g__cta_btn") : "";
        link = document.createElement("a");
        link.classList.add("g__link_utility");
        link.innerHTML = r.label || "Link";
        item.appendChild(link);
        navUtility.appendChild(item);
        break;

      case "ddHeader":
        ddLabel = r.label || "Dropdown";
        dd = true;
        ddIcon = r.icon;
        break;

      case "ddItem":
        dd = true;
        let subItem = document.createElement("li");
        subItem.classList.add("g__sub_item");

        if (r.icon) {
          iconLink = document.createElement("i");
          iconLink.setAttribute("class", r.icon);
          subItem.appendChild(iconLink);
        }

        let subLink = document.createElement("a");
        subLink.classList.add("g__sub_link");
        subLink.innerHTML = r.label || "Link";
        subItem.appendChild(subLink);
        arrDdItems.push(subItem);
        break;

      default:
        if (dd) {
          let ddMenu = buildDd();
          navMain.appendChild(ddMenu); // Reset Values

          dd = false;
          arrDdItems = [];
          ddLabel = "";
          ddIcon = "";
        }

        item = document.createElement("li");
        item.classList.add("g__item");
        !!r.icon ? "" : item.classList.add("g__no_icon");
        !!o.hover_style ? item.classList.add(`g__${o.hover_style}`) : item.classList.add(`g__bottom_border`);

        if (String(o.icon_top) === "true" && style === "topbar") {
          item.classList.add("g__icon_center");
        }

        let active = itemActive(r.href);

        if (!!r.icon) {
          iconCont = document.createElement("div");
          iconCont.classList.add("g__icon_container");
          iconLink = document.createElement("i");
          iconLink.setAttribute("class", r.icon);
          iconCont.appendChild(iconLink);
          item.appendChild(iconCont);
        }

        link = document.createElement("a");
        link.classList.add("g__link");
        link.innerHTML = r.label || "Link";
        item.appendChild(link);
        navMain.appendChild(item);
    }
  });
  /*---------------------------------------------
    Build DOM Structure
    ---------------------------------------------*/

  navCont.appendChild(navMain);

  if (o.mobile_menu_style === "bottom") {
    var bottomNavCont = document.createElement("div");
    bottomNavCont.classList.add("g__nav__bottom_cont");
  }

  if (style === "sidebar") {
    let collapseCont = document.createElement("div");
    collapseCont.classList.add("g__sidebar_collapse");
    collapseCont.addEventListener("click", () => {
      collapseCont.parentElement.parentElement.classList.toggle("g__collapse_active");
      document.body.style.marginLeft = "60px";
      iconCheck();
    });
    let collpaseIcon = document.createElement("i");
    collpaseIcon.setAttribute("class", "far fa-chevron-left");
    collapseCont.appendChild(collpaseIcon);
    navCont.appendChild(collapseCont);
  } // Append the utility nav based on style


  switch (style) {
    case "sidebar":
      utilityCont.appendChild(navUtility);
      break;

    case "topbar":
      navCont.appendChild(navUtility);
      break;
  }

  topBarCont.appendChild(navCont);
  granite_div.appendChild(topBarCont);

  if (o.mobile_menu_style === "bottom") {
    granite_div.appendChild(bottomNavCont);
  }
  /*---------------------------------------------
    Functions
    ---------------------------------------------*/
  // Active item


  function itemActive(href) {
    let path = window.location.pathname.split("/").pop();

    if (href === "path") {
      return true;
    } else {
      return false;
    }
  } // Build DD function


  function buildDd() {
    let ddItem = document.createElement("li");
    ddItem.classList.add("g__item");
    ddItem.classList.add("g__item_dropdown");
    !!o.hover_style ? ddItem.classList.add(`g__${o.hover_style}`) : ddItem.classList.add(`g__bottom_border`);
    let ddItemCont = document.createElement("div");
    ddItemCont.classList.add("g__dd_item_container");
    ddItem.appendChild(ddItemCont);
    let ddlink = document.createElement("a");
    ddlink.classList.add("g__link");
    ddlink.innerHTML = ddLabel || "Link";
    ddItemCont.appendChild(ddlink);
    let ddArrow;

    if (!!ddIcon) {
      let ddIconArrow = document.createElement("div");
      ddIconArrow.classList.add("g__dd_icon_arrow");
      let icon = ddIcon;
      ddIcon = document.createElement("i");
      ddIcon.setAttribute("class", icon);
      ddIconArrow.appendChild(ddIcon);
      ddArrow = document.createElement("i");
      ddArrow.setAttribute("class", "far fa-chevron-right g__dd_arrow");
      ddIconArrow.appendChild(ddArrow);
      ddItemCont.appendChild(ddIconArrow);
    } else {
      ddArrow = document.createElement("i");
      ddArrow.setAttribute("class", "far fa-chevron-right");
      ddItemCont.appendChild(ddArrow);
    }

    let dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("g__dropdown_menu"); // Event Listener for dropdowns

    arrDdItems.forEach(item => {
      dropdownMenu.appendChild(item);
    });
    ddItem.appendChild(dropdownMenu);
    ddItem.addEventListener("click", function () {
      // dropdownMenu.classList.toggle('g__dd_active');
      let currentWidth = window.innerWidth || document.documentElement.clientWidth;
      dropdownMenu.parentElement.classList.toggle("g__dd_active");

      if (style === "topbar" && currentWidth > 991.98) {
        dropdownMenu.style.minWidth = ddItem.clientWidth + "px";
        dropdownMenu.style.top = ddItem.clientHeight + "px";
      } else {
        dropdownMenu.style.minWidth = "inherit";
        dropdownMenu.style.top = "inherit";
      }
    });
    return ddItem;
  } // Bottom nav CTA circle button


  if (String(o.mobile_bottom_cta) === "true" && o.mobile_menu_style === "bottom") {
    let navCont = granite_div.querySelector(".g__nav__bottom_cont");
    let nav = granite_div.querySelector(".g__nav_main");
    let navLinks = nav.children;
    let cta = document.createElement("li");
    cta.setAttribute("class", "g__bottom_cta");
    let bottomIcon = o.mobile_bottom_icon || "fal fa-plus";
    let iconCta = document.createElement("i");
    iconCta.setAttribute("class", bottomIcon);
    cta.appendChild(iconCta);

    if (String(o.mobile_bottom_menu) === "true") {
      navCont.appendChild(cta);
      navCont.classList.add("g__bottom_menu");
    } else {
      if (navLinks.length > 2) {
        nav.insertBefore(cta, navLinks[2]);
      }

      if (navLinks.length === 2) {
        nav.style.justifyContent = "space-around";
        nav.insertBefore(cta, navLinks[1]);
      }

      if (navLinks.length === 0) {
        nav.style.justifyContent = "center";
        nav.appendChild(cta);
      }
    }
  } // Bottom Moble Nav


  if (o.mobile_menu_style === "bottom") {
    bottomNav();
    window.onresize = bottomNav;

    function bottomNav() {
      if (viewportWidth < 991.98) {
        let navCont = granite_div.querySelector(".g__nav_cont");
        let mainNav = granite_div.querySelector(".g__nav_main");
        let utilityNav = granite_div.querySelector(".g__nav_utility");
        let navChildren = mainNav.children;
        let bottomCont = granite_div.querySelector(".g__nav__bottom_cont");
        bottomCont.appendChild(mainNav); // If sidebar - move the utility menu back into the nav container

        if (style === "sidebar") {
          navCont.appendChild(utilityNav);
        } // Count the number of items excluding CTA.


        let linkCount = 0;
        let arrLinks = Array.from(navChildren).forEach(link => {
          let isCta = link.classList.contains("g__bottom_cta");

          if (!isCta) {
            linkCount++;
          }
        });

        if (linkCount >= 5) {
          let bottomMenu = document.createElement("ul");
          bottomMenu.classList.add("g__bottom_menu");
          Array.from(navChildren).forEach((link, count) => {
            let isCta = link.classList.contains("g__bottom_cta");

            if (!isCta && count > 3) {
              bottomMenu.appendChild(link);
            }

            if (count === 3) {
              let elipsisLink = document.createElement("li");
              elipsisLink.classList.add("g__item");
              elipsisLink.classList.add("g__bottom_ellipsis");
              elipsisLink.innerHTML = '<i class="far fa-ellipsis-h"></i>';
              mainNav.insertBefore(elipsisLink, mainNav[2]);
              elipsisLink.addEventListener("click", () => {
                bottomCont.classList.toggle("g__bottom_active");
              });
            }
          });
          bottomCont.appendChild(bottomMenu);
        }
      }
    }
  } // Check for


  function iconCheck() {
    let arrLink = document.querySelectorAll(".g__item");
    arrLink.forEach(link => {
      let icon = link.nextSibling;

      if (!!icon) {}
    });
  }
}
function granite_tabs(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
  !!o.g_style ? "" : o.g_style = "line";
  const style = o.g_style;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tabParam = urlParams.get("tab");
  !!o.classes ? granite_div.setAttribute("class", o.classes) : "";
  /*---------------------------------------------
  Verify Div ID and Div Alignment - Set Mode
  ---------------------------------------------*/

  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
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
  Attributes
  ---------------------------------------------*/


  switch (t.mode) {
    case "standard":
      !!o.g_font_color ? "" : o.g_font_color = "#000000";
      !!o.g_step_number_color ? "" : o.g_step_number_color = "#000000";
      !!o.g_title_color ? "" : o.g_title_color = "#000000";
      !!o.g_description_color ? "" : o.g_description_color = "#000000";
      !!o.g_background_hover_color ? "" : o.g_background_hover_color = "#5d5d5d";
      !!o.g_highlight_color ? "" : o.g_highlight_color = "#bababa";
      !!o.g_background_active_color ? "" : o.g_background_active_color = "#5d5d5d";
      !!o.g_border_color ? "" : o.g_border_color = "#bfbfbf";
      !!o.g_background_color ? "" : o.g_background_color = "#bfbfbf";
      !!o.g_font_hover_color ? "" : o.g_font_hover_color = "#a1a1a1";
      break;

    default:
      !!o.g_font_color ? "" : o.g_font_color = "#ffffff";
      !!o.g_step_number_color ? "" : o.g_step_number_color = "#ffffff";
      !!o.g_title_color ? "" : o.g_title_color = "#ffffff";
      !!o.g_description_color ? "" : o.g_description_color = "#ffffff";
      !!o.g_background_hover_color ? "" : o.g_background_hover_color = "#5d5d5d";
      !!o.g_highlight_color ? "" : o.g_highlight_color = "#bababa";
      !!o.g_background_active_color ? "" : o.g_background_active_color = "#5d5d5d";
      !!o.g_border_color ? "" : o.g_border_color = "#5d5d5d";
      !!o.g_background_color ? "" : o.g_background_color = "#5d5d5d";
      !!o.g_font_hover_color ? "" : o.g_font_hover_color = "#a1a1a1";
      break;
  }

  !!o.g_font_size ? "" : o.g_font_size = "16";
  !!o.g_icon_size ? "" : o.g_icon_size = "20";
  !!o.g_title_size ? "" : o.g_title_size = "16";
  !!o.g_description_size ? "" : o.g_description_size = "14";
  !!o.g_align_icon ? "" : o.g_align_icon = false;
  !!o.g_border_width ? "" : o.g_border_width = "0";
  !!o.g_border_radius ? "" : o.g_border_radius = "0";
  !!o.g_tab_left_padding ? "" : o.g_tab_left_padding = "15";
  !!o.g_tab_right_padding ? "" : o.g_tab_right_padding = "15";
  !!o.g_tab_left_margin ? "" : o.g_tab_left_margin = "0";
  !!o.g_tab_right_margin ? "" : o.g_tab_right_margin = "0";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0"; // Mode Defaults

  let bodyBkg = mode === "midnight" ? "#101010" : "#ffffff";
  let tabBkgMode = mode === "midnight" ? "#353535" : "#eaeaea";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let activeMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010"; // Design

  let fontColor = o.g_font_color;
  let fontSize = o.g_font_size + "px";
  let titleSize = o.g_title_size + "px";
  let descSize = o.g_description_size + "px";
  let iconSize = o.g_icon_size + "px";
  let fontActiveColor = o.g_highlight_color;
  let titleColor = o.g_title_color;
  let stepNumberColor = o.g_step_number_color;
  let descriptionColor = o.g_description_color;
  let fontHoverColor = o.g_font_hover_color;
  let tabBkg = o.g_background_color;
  let hoverColor = o.g_background_hover_color;
  let activeColor = o.g_background_active_color;
  let borderWidth = o.g_border_width + "px";
  let borderColor = o.g_border_color;
  let borderRadius = o.g_border_radius + "px"; // Stepper

  let stepSize = o.g_stepSize || "40px";
  let stepConnPos = connPos(stepSize) || "20px"; // Layout

  let alignTabs = o.g_align_tabs || "center";
  let width = o.g_style === "tabs" ? "inline-flex" : "flex";
  let direction = o.g_direction ? "column" : "row";
  let padding = o.g_padding || "10px 20px";
  let margin = o.g_margin || "0px 5px";
  let alignIcon = o.g_align_icon;
  let leftPadding = o.g_tab_left_padding + "px";
  let rightPadding = o.g_tab_right_padding + "px";
  let leftMargin = o.g_tab_left_margin + "px";
  let rightMargin = o.g_tab_right_margin + "px"; // Font

  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
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

  let tabStyles = document.createElement("style");
  tabStyles.id = "g__css_" + id;
  tabStyles.innerHTML = `
    /* ------------------------------
    Granite Div
    -------------------------------*/
    ${cssId}{
      margin-top: ${o.container_top_padding || "25px"};
      margin-bottom: ${o.container_bottom_padding || "25px"};
      position:relative;
      display: flex;
      justify-content: ${alignTabs};
    }
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
    /* ------------------------------------------------------------
    Tabs Container
    -------------------------------------------------------------*/
    ${cssId} .g__tabs_container{
      display: inline-flex;
      flex-direction: ${direction};
      justify-content: space-between;
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
    }
    ${cssId} .g__contents-no-transition {
      transition: none;
    }
    ${cssId} .g__tabs_wrapper{
      padding: 15px;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      position: relative;
    }
    ${cssId} .g__tabs_wrapper .g__disabled{
      opacity: .6;
      pointer-events: none;
    }
    ${cssId} .g__tabs_wrapper::-webkit-scrollbar {
      display: none;
    }
    /*--- Line Tabs Container ---*/
    ${cssId} .g__tabs_container.g__tab_line{
      float: left;
      justify-content: start;
      border-bottom: 2px solid ${fontColor};
      transition: transform .2s ease-in-out;
    }
    ${cssId} .pn-ProductNav_Contents-no-transition {
      transition: none;
    }
    ${cssId} .g__ellipsis{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* ------------------------------------------------------------
    Tabs Line
    -------------------------------------------------------------*/
    /*--- Tabs Line ---*/
    ${cssId} .g__tab_line .g__tab_line_wrap{
      display: flex;
      flex-direction: ${alignIcon ? "column" : "row"};
      justify-content: ${alignIcon ? "flex-end" : "center"};
      align-items: center;
      padding-left: ${leftPadding};
      padding-right: ${rightPadding};
    }
    ${cssId} .g__tab_line a.g__tab_line_link{
      display: flex;
      position: relative;
      color: ${fontColor};
      font-size: ${fontSize};
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_line_wrap i{
      margin-right: 10px;
      font-size: ${iconSize};
      color: ${fontColor};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_line_wrap:hover a.g__tab_line_link,
    ${cssId} .g__tab_line .g__tab_line_wrap:hover i{
      color: ${hoverColor};
    }
    ${cssId} .g__tab_line .g__tab_line_wrap.g__active a.g__tab_line_link,
    ${cssId} .g__tab_line .g__tab_line_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tabLine_line .g__tab_line_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_line{
      border-bottom: 4px solid transparent;
    }
    ${cssId} .g__tab_line .g__active{
      color: ${activeColor};
      border-bottom: 4px solid ${fontActiveColor};
    }

    /* ------------------------------------------------------------
    Tabs Block
    -------------------------------------------------------------*/
    ${cssId} .g__tab_block a.g__tab_block_wrap{
      display: flex;
      flex-direction: ${alignIcon ? "column" : "row"};
      justify-content: ${alignIcon ? "flex-end" : "center"};
      align-items: center;
      position: relative;
      padding-left: ${leftPadding};
      padding-right: ${rightPadding};
      margin-left: ${leftMargin};
      margin-right: ${rightMargin};
      color: ${fontColor};
      border-radius: ${borderRadius};
      border: ${borderWidth} solid ${borderColor};
      text-decoration: none;
      font-size: ${fontSize};
      background: ${tabBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_block .g__tab_block_wrap i{
      font-size: ${iconSize};
      color: ${fontColor};
      margin-right: 5px;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap:hover{
      color: ${fontHoverColor};
      background: ${hoverColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap:hover i{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap.g__active{
      background: ${activeColor};
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_block .g__tab_block_wrap p{
      margin-bottom: 2px;
    }
    ${cssId} .g__tab_block a.g__tab_block_link:hover{
      background: #054a5c;
    }
    /* ------------------------------------------------------------
    Chevron
    -------------------------------------------------------------*/
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-family: ${font};
      font-weight: ${fontWeight};
      color: ${fontColor};
      background: ${tabBkg};
      height: 50px;
      text-align: center;
      padding: 15px 15px 15px 50px;
      position: relative;
      margin-left: 10px;
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover{
      background: ${hoverColor};
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap.g__active{
      background: ${activeColor};
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap .g__tab_chevron_text{
      color: ${fontColor};
      margin-bottom: 0;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover .g__tab_chevron_text{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap i{
      color: ${fontColor};
      margin-right: 5px;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover i{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:not(:last-child):before {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${bodyBkg};
      top:0px;
      right: -60px;
    }

    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${tabBkg};
      top:0px;
      right: -50px;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:hover:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${hoverColor};
      top:0px;
      right: -50px;
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap.g__active:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${activeColor};
      top:0px;
      right: -50px;
    }


    /* ------------------------------------------------------------
    Stepper
    -------------------------------------------------------------*/
    ${cssId}.g__step_style .g__tabs_wrapper{
      white-space: initial;
    }
    ${cssId} .g__step_container{
      display: flex;
      position: relative;
      text-decoration: none;
    }
    ${cssId} .g__step_container:hover{
      text-decoration: none;
    }
    ${cssId} .g__step{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${font};
      font-weight: ${fontWeight};
      border-radius: 50%;
      font-size: 21px;
      color: ${stepNumberColor};
      background: ${tabBkg};
      border: ${borderWidth} solid ${borderColor};
      z-index: 5;
      width: ${stepSize};
      height: ${stepSize};
      transition: all .5s ease;
    }
    ${cssId} .g__active .g__step{
      background: ${activeColor};
    }
    ${cssId} .g__complete .g__step{
      background: ${activeColor};
    }
    ${cssId} .g__step:hover{
      background: ${hoverColor};
      transform: scale(1.10);
      cursor: pointer;
    }
    ${cssId} h3.g__step_title{
      color: ${titleColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${titleSize};
      margin-top: 10px;
    }
    ${cssId} p.g__step_desc{
      color: ${descriptionColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${descSize};
    }
    /*---------- Stepper Horizontal ----------*/
    ${cssId} .g__step_horizontal .g__step_container:not(:last-child):after{
      content: "";
      width: calc(100% - ${stepSize});
      height: 3px;
      position: absolute;
      top: ${stepConnPos};
      left: calc(50% + ${stepConnPos});
      background: ${tabBkg};
    }
    ${cssId} .g__step_horizontal .g__complete:not(:last-child):after{
      background: ${activeColor};
    }
    ${cssId} .g__step_horizontal .g__step_container{
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      flex: 1;
      min-width: 200px;
    }
    ${cssId} .g__step_horizontal h3.g__step_title{
      text-align: center;
    }
    ${cssId} .g__step_horizontal p.g__step_desc{
      text-align: center;
    }
    ${cssId}.g__step_style .pn-advancer {
      top: 25px;
      bottom: initial;
    }
    /*---------- Stepper Vertical ----------*/
    ${cssId} .g__step_vertical .g__step_container:not(:last-child):after{
      content: "";
      height: 100%;
      width: 3px;
      position: absolute;
      top: ${stepSize};
      left: ${stepConnPos};
      background: ${tabBkg};
    }
    ${cssId} .g__step_vertical .g__step_container.g__complete:not(:last-child):after{
      background: ${activeColor};
    }
    ${cssId} .g__step_vertical .g__step_container{
      flex-direction: row;
      height: 150px;
    }
    ${cssId} .g__step_vertical .g__step_content{
      margin-left: 20px;
    }
    ${cssId} .g__step_vertical h3.g__step_title{
      text-align: left;
      margin-top: 0;
    }
    ${cssId} .g__step_vertical p.g__step_desc{
      text-align: left;
    }
    /* ------------------------------
    Advancer Arrows
    -------------------------------*/
    ${cssId} .pn-advancer {
      /* Reset the button */
      appearance: none;
      background: ${bodyBkg};
      font-size: 1.4rem;
      padding: 0 5px;
      border: 0;
      opacity: 0;
      /* Now style it as needed */
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 999;
    }
    ${cssId} .pn-advancer:focus {
      outline: 0;
    }
    ${cssId} .pn-advancer_left {
      left: 0;
      color: ${fontColorMode};
    }
    ${cssId} .pn-advancer_right {
      right: 0;
      color: ${fontColorMode};
    }
    ${cssId} .pn-advancer_icon {
      width: 20px;
      height: 44px;
      fill: #bbb;
    }
    ${cssId} [data-overflowing="both"] ~ .pn-advancer_left,
    ${cssId} [data-overflowing="left"] ~ .pn-advancer_left {
      opacity: 1;
    }
    ${cssId} [data-overflowing="both"] ~ .pn-advancer_right,
    ${cssId} [data-overflowing="right"] ~ .pn-advancer_right {
      opacity: 1;
    }
    `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(tabStyles);
  /*---------------------------------------------
    Check for records
    ---------------------------------------------*/

  if (!rCount) {
    granite_div.classList.add("g__no_records");
    granite_div.innerHTML = "<h2>Tabs</h2>";
    return;
  }
  /*---------------------------------------------
    Tabs action row
    ---------------------------------------------*/


  let tabsActionRow = document.createElement("div");
  tabsActionRow.classList.add("g__tabs_action_row");

  if (o.g_action_header) {
    let title = document.createElement("h2");
    title.classList.add("g__title");
    title.innerHTML = o.title;
    tabsActionRow.appendChild(title);
  }

  if (o.g_action_description) {
    let description = document.createElement("p");
    description.classList.add("g__description");
    description.innerHTML = o.description;
    tabsActionRow.appendChild(description);
  }
  /*---------------------------------------------
    Tabs Build
    ---------------------------------------------*/


  granite_div.classList.add("g__" + style + "_style");
  let tabsWrapper = document.createElement("div");
  tabsWrapper.classList.add("g__tabs_wrapper");
  let tabsContainer = document.createElement("div");
  !!o.id ? tabsContainer.setAttribute("id", o.id) : "";
  tabsContainer.classList.add("g__tabs_container");
  direction === "row" ? tabsContainer.classList.add("g__step_horizontal") : tabsContainer.classList.add("g__step_vertical");

  if (style === "line") {
    tabsContainer.classList.add("g__tab_line");
  } else if (style === "block") {
    tabsContainer.classList.add("g__tab_block");
  } else if (style === "chevron") {
    tabsContainer.classList.add("g__tab_chevron");
  }

  !!o.classes ? tabsContainer.classList.add(o.classes) : "";
  tabsWrapper.appendChild(tabsContainer); //Loop through each record

  r.forEach((r, count) => {
    switch (style) {
      case "step":
        let isComplete = complete(count);
        let stepContainer = document.createElement("a");
        stepContainer.classList.add("g__step_container");
        stepContainer.setAttribute("data-micro-id", id);
        !!r.addapptation_id ? stepContainer.setAttribute("data-record-id", r.addapptation_id) : "";
        activeTab(r, count) ? stepContainer.classList.add("g__active") : "";
        r.disabled ? stepContainer.classList.add("g__disabled") : "";
        isComplete ? stepContainer.classList.add("g__complete") : "";
        stepContainer.href = tabHref(r.href, count);
        let stepLink = document.createElement("div");
        stepLink.classList.add("g__step");
        stepLink.innerHTML = isComplete ? "<i class='far fa-check'></i>" : count + 1;
        stepContainer.appendChild(stepLink);

        if (r.name || r.desc) {
          let stepContent = document.createElement("div");
          stepContent.classList.add("g__step_content");

          if (r.name) {
            let stepTitle = document.createElement("h3");
            stepTitle.classList.add("g__step_title");
            stepTitle.innerHTML = r.name;
            stepContent.appendChild(stepTitle);
          }

          if (r.desc) {
            let stepDesc = document.createElement("p");
            stepDesc.classList.add("g__step_desc");
            stepDesc.innerHTML = r.desc;
            stepContent.appendChild(stepDesc);
          }

          stepContainer.appendChild(stepContent);
        }

        tabsContainer.appendChild(stepContainer);
        break;

      case "line":
        let tabLineWrap = document.createElement("div");
        tabLineWrap.classList.add("g__tab_line_wrap");
        tabLineWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id ? tabLineWrap.setAttribute("data-record-id", r.addapptation_id) : "";
        o.g_align === "left" ? tabLineWrap.style.paddingLeft = "10px" : "";
        o.g_align === "right" ? tabLineWrap.style.paddingRight = "10px" : "";
        activeTab(r, count) ? tabLineWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let tabLineIcon = document.createElement("i");
          tabLineIcon.setAttribute("class", r.icon);
          tabLineWrap.appendChild(tabLineIcon);
        }

        let tabLineLink = document.createElement("a");
        tabLineLink.classList.add("g__tab_line_link");
        tabLineLink.href = tabHref(r.href, count);
        tabLineLink.innerHTML = r.name || count;
        tabLineWrap.appendChild(tabLineLink);
        tabsContainer.appendChild(tabLineWrap);
        break;

      case "block":
        let tabWrap = document.createElement("a");
        tabWrap.classList.add("g__tab_block_wrap");
        tabWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id ? tabWrap.setAttribute("data-record-id", r.addapptation_id) : "";
        tabWrap.href = tabHref(r.href, count);
        o.g_align === "left" ? tabWrap.style.paddingLeft = "10px" : "";
        o.g_align === "right" ? tabWrap.style.paddingRight = "10px" : "";
        r.disabled ? tabWrap.classList.add("g__disabled") : "";
        activeTab(r, count) ? tabWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let tabIcon = document.createElement("i");
          tabIcon.setAttribute("class", r.icon);
          tabWrap.appendChild(tabIcon);
        }

        let tabLink = document.createElement("p");
        tabLink.classList.add("g__tab_block_text");
        tabLink.innerHTML = r.name || count;
        tabWrap.appendChild(tabLink);
        tabsContainer.appendChild(tabWrap);
        break;

      case "chevron":
        let chevWrap = document.createElement("a");
        chevWrap.classList.add("g__tab_chevron_wrap");
        chevWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id ? chevWrap.setAttribute("data-record-id", r.addapptation_id) : "";
        chevWrap.href = tabHref(r.href, count);
        chevWrap.style.zIndex = (rCount - (count + 1)) * 10;
        r.disabled ? chevWrap.classList.add("g__disabled") : "";
        activeTab(r, count) ? chevWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let chevIcon = document.createElement("i");
          chevIcon.setAttribute("class", r.icon);
          chevWrap.appendChild(chevIcon);
        }

        let chevLink = document.createElement("p");
        chevLink.classList.add("g__tab_chevron_text");
        chevLink.innerHTML = r.name || count;
        chevWrap.appendChild(chevLink);
        tabsContainer.appendChild(chevWrap);
        break;

      default:
        console.error("no style");
    }
  });
  /*---------------------------------------------
    Append DIV to DOM
    ---------------------------------------------*/

  granite_div.classList.remove("g__no_records");
  granite_div.appendChild(tabsWrapper);
  /*---------------------------------------------
    Advancer Arrows
    ---------------------------------------------*/

  let leftAdvancer = document.createElement("button");
  leftAdvancer.setAttribute("class", "pn-advancer pn-advancer_left");
  leftAdvancer.type = "button";
  leftAdvancer.innerHTML = "<i class='far fa-chevron-left'></i>";
  granite_div.appendChild(leftAdvancer);
  let rightAdvancer = document.createElement("button");
  rightAdvancer.setAttribute("class", "pn-advancer pn-advancer_right");
  rightAdvancer.type = "button";
  rightAdvancer.innerHTML = "<i class='far fa-chevron-right'></i>";
  granite_div.appendChild(rightAdvancer);
  /*---------------------------------------------
    Build HREF
    ---------------------------------------------*/

  function tabHref(href, val) {
    let ival = val + 1;
    let tval = ival;

    if (!!href && href.includes("tab=")) {
      href = !!href && href.length ? href.includes("?") ? href.replace(`tab=${tabParam}`, `tab=${tval}`) : href + `?tab=${tval}` : queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
    } else {
      if (!!href && href.length) {
        href = href.includes("?") ? href + `&tab=${tval}` : href + `?tab=${tval}`;
      } else {
        if (queryString.includes("tab=")) {
          var x = queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
        } else {
          var x = queryString.includes("?") ? queryString + `&tab=${tval}` : queryString + `?tab=${tval}`;
        }

        href = x;
      }
    }

    return href;
  }
  /*---------------------------------------------
    Connector position for step
    ---------------------------------------------*/


  function connPos(stepSize) {
    let size = stepSize.slice(0, -2);
    let fromTop = size / 2 + "px";
    return fromTop;
  }
  /*---------------------------------------------
    Active
    ---------------------------------------------*/


  function activeTab(r, val) {
    let ival = val + 1;
    let href = tabHref(r.href, val);
    let isActive = ival == tabParam || val == 0 && tabParam == null || !!tabParam && tabParam.includes(ival);
    return isActive;
  }
  /*---------------------------------------------
    Complete
    ---------------------------------------------*/


  function complete(val) {
    var ival = val + 1;
    var is_complete = ival < tabParam ? true : false;
    return is_complete;
  }
  /*---------------------------------------------
    Overflow Arrows
    ---------------------------------------------*/


  var SETTINGS = {
    navBarTravelling: false,
    navBarDirection: "",
    navBarTravelDistance: 100
  };
  let gTabsContainer = granite_div.querySelector(".g__tabs_wrapper");
  let gContents = granite_div.querySelector(".g__tabs_container");
  var pnAdvancerLeft = granite_div.querySelector(".pn-advancer_left");
  var pnAdvancerRight = granite_div.querySelector(".pn-advancer_right");
  gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer)); // Handle the scroll of the horizontal container

  var last_known_scroll_position = 0;
  var ticking = false;

  function doSomething(scroll_pos) {
    gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
  }

  gTabsContainer.addEventListener("scroll", function () {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }

    ticking = true;
  });

  if (!!pnAdvancerLeft) {
    pnAdvancerLeft.addEventListener("click", function () {
      if (SETTINGS.navBarTravelling === true) {
        return;
      }

      if (determineOverflow(gContents, gTabsContainer) === "left" || determineOverflow(gContents, gTabsContainer) === "both") {
        var availableScrollLeft = gTabsContainer.scrollLeft;

        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
          gContents.style.transform = "translateX(" + availableScrollLeft + "px)";
        } else {
          gContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
        }

        gContents.classList.remove("g__contents-no-transition");
        SETTINGS.navBarTravelDirection = "left";
        SETTINGS.navBarTravelling = true;
      }

      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
      arrowReset();
    });
  }

  if (!!pnAdvancerRight) {
    pnAdvancerRight.addEventListener("click", function () {
      if (SETTINGS.navBarTravelling === true) {
        return;
      }

      if (determineOverflow(gContents, gTabsContainer) === "right" || determineOverflow(gContents, gTabsContainer) === "both") {
        var navBarRightEdge = gContents.getBoundingClientRect().right;
        var navBarScrollerRightEdge = gTabsContainer.getBoundingClientRect().right;
        var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);

        if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
          gContents.style.transform = "translateX(-" + availableScrollRight + "px)";
        } else {
          gContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
        }

        gContents.classList.remove("g__contents-no-transition");
        SETTINGS.navBarTravelDirection = "right";
        SETTINGS.navBarTravelling = true;
      } // Now update the attribute in the DOM


      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
      arrowReset();
    });
  }

  function arrowReset() {
    var styleOfTransform = window.getComputedStyle(gContents, null);
    var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
    var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
    gContents.style.transform = "none";
    gContents.classList.add("g__contents-no-transition");

    if (SETTINGS.navBarTravelDirection === "left") {
      gTabsContainer.scrollLeft = gTabsContainer.scrollLeft - amount;
    } else {
      gTabsContainer.scrollLeft = gTabsContainer.scrollLeft + amount;
    }

    SETTINGS.navBarTravelling = false;
  }

  function determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsRight = Math.floor(containerMetrics.right);
    var containerMetricsLeft = Math.floor(containerMetrics.left);
    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsRight = Math.floor(contentMetrics.right);
    var contentMetricsLeft = Math.floor(contentMetrics.left);

    if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
      return "both";
    } else if (contentMetricsLeft < containerMetricsLeft) {
      return "left";
    } else if (contentMetricsRight > containerMetricsRight) {
      return "right";
    } else {
      return "none";
    }
  } // End main function

}
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
      !!o.font_color ? "" : o.font_color = "#000000";
      break;

    default:
      !!o.font_color ? "" : o.font_color = "#ffffff";
      break;
  }

  !!o.g_font_size ? "" : o.g_font_size = "16";
  !!o.max_width ? "" : o.max_width = "auto";
  !!o.align_content ? "" : o.align_content = "flex-start";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0"; // Font

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
    !!o.id ? text_container.id = o.id : "";
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
/*---------------------------------------------
Block Name: Granite.js Tile Block
---------------------------------------------*/
function granite_tiles(jsonTiles, jsonTheme) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonTiles.id;
  const o = jsonTiles.options;
  const r = jsonTiles.records;
  const t = jsonTheme;
  const rCount = r.length;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  const fillRow = String(o.fillRow) === "true" ? 1 : 0;
  !!o.classes ? granite_div.setAttribute("class", o.classes) : "";
  /*---------------------------------------------
    Verify Div ID and Div Alignment - Set Mode
    ---------------------------------------------*/

  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
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
    Dynamic Variables
    ---------------------------------------------*/


  let columns;

  switch (o.columns) {
    case "1":
      columns = "100%";
      break;

    case "2":
      columns = "50%";
      break;

    case "3":
      columns = "33.33%";
      break;

    case "4":
      columns = "25%";
      break;

    case "5":
      columns = "20%";
      break;

    case "6":
      columns = "16.66%";
      break;

    case "7":
      columns = "14.28%";
      break;

    case "8":
      columns = "12.5%";
      break;

    default:
      columns = "25%";
      break;
  }

  let flexLayout;

  switch (o.layout) {
    case "left":
      flexLayout = "flex-start";
      break;

    case "right":
      flexLayout = "flex-end";
      break;

    default:
      flexLayout = "center";
  }

  let fontColorMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontColorModeReverse = mode === "midnight" ? "#5d5d5d" : "#ffffff";
  let overlayColorMode = mode === "midnight" ? "#101010" : "#ffffff";

  switch (t.mode) {
    case "standard":
      !!o.header_color ? "" : o.header_color = "#101010";
      !!o.description_color ? "" : o.description_color = "#101010";
      !!o.icon_color ? "" : o.icon_color = "#101010";
      !!o.filter_one ? "" : o.filter_one = "#ffffff";
      !!o.filter_one_opacity ? "" : o.filter_one_opacity = "75";
      !!o.filter_two ? "" : o.filter_two = "#ffffff";
      !!o.filter_two_opacity ? "" : o.filter_two_opacity = "0";
      !!o.hover_color ? "" : o.hover_color = "#ffffff";
      break;

    default:
      !!o.header_color ? "" : o.header_color = "#ffffff";
      !!o.description_color ? "" : o.description_color = "#ffffff";
      !!o.icon_color ? "" : o.icon_color = "#ffffff";
      !!o.filter_one ? "" : o.filter_one = "#000000";
      !!o.filter_one_opacity ? "" : o.filter_one_opacity = "60";
      !!o.filter_two ? "" : o.filter_two = "#000000";
      !!o.filter_two_opacity ? "" : o.filter_two_opacity = "0";
      !!o.hover_color ? "" : o.hover_color = "#000000";
      break;
  }

  !!o.alignTiles ? "" : o.alignTiles = "flex-start";
  !!o.height ? "" : o.height = "250";
  !!o.max_width ? "" : o.max_width = "100%";
  !!o.header_size ? "" : o.header_size = "36";
  !!o.description_size ? "" : o.description_size = "24";
  !!o.icon_size ? "" : o.icon_size = "36";
  !!o.icon_bottom_padding ? "" : o.icon_bottom_padding = "15";
  !!o.padding ? "" : o.padding = "5";
  !!o.overlay ? "" : o.overlay = "false";
  !!o.padding_top ? "" : o.padding_top = "0";
  !!o.padding_right ? "" : o.padding_right = "0";
  !!o.padding_bottom ? "" : o.padding_bottom = "0";
  !!o.padding_left ? "" : o.padding_left = "0";
  !!o.margin_top ? "" : o.margin_top = "0";
  !!o.margin_right ? "" : o.margin_right = "0";
  !!o.margin_bottom ? "" : o.margin_bottom = "0";
  !!o.margin_left ? "" : o.margin_left = "0";
  let tileHeight = o.height + "px";
  let tileMaxWidth = o.max_width;
  let alignTiles = o.alignTiles;
  let tileSpacing = o.padding + "px";
  let titleColor = o.header_color;
  let titleSize = o.header_size + "px";
  let descSize = o.description_size + "px";
  let descColor = o.description_color;
  let iconColor = o.icon_color;
  let iconSize = o.icon_size + "px";
  let iconBottomPadding = o.icon_bottom_padding + "px";
  let overlay = o.filter_one;
  let filterOneOpacity = parseInt(o.filter_one_opacity) / 100;
  let overlayTwo = o.filter_two;
  let filterTwoOpacity = parseInt(o.filter_two_opacity) / 100;
  let hoverColor = o.hover_color;
  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px"; //Action Row

  let actionTitleColor = o.action_header_color || fontColorMode;
  let actionDescColor = o.action_description_color || fontColorMode;
  let actionBorder = o.action_border === "true" ? "1px solid var(--background)" : "0";
  let tilesStyles = document.createElement("style");
  tilesStyles.id = "g__css_" + id;
  tilesStyles.innerHTML = `
    /* ------------------------ Global Styles ------------------------*/
    ${cssId}{
        /* Standard */
        --primary: #fff;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
        --border-radius: 4px;
        --field-padding: 6px 12px;
        --field-height: 37px;
        --error-color: #ea386e;
        --green: #00B28B;

        /* Mode Dependent */
        --background: #eaeaea;
        --background-darker: #ffffff;
        --background-reverse: #000000;
        --background-range: #eaeaea;
        --background-hover: #eeeeee;
        --body: #ffffff;
        --font-color-reverse: #f5f5f5;
        --border: 1px solid #a1a1a1;
        --font-color: #5d5d5d;
    }
        ${cssId}[mode="midnight"]{
        --background: #303030;
        --background-darker: #151515;
        --background-reverse: #ffffff;
        --background-range: #2a2a2a;
        --background-hover: #3b3b3b;
        --body: #101010;
        --border: 1px solid #a1a1a1;
        --font-color: #ffffff;
    }
    ${cssId} a:hover{
        text-decoration: none;
    }
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
    /* ------
    Action Row
    ------*/
    ${cssId} .g__tiles_action_row{
        padding-bottom: ${o.body_content_top_padding || "25px"};
        margin-bottom: 25px;
        border-bottom: 0;
    }
    ${cssId} .g__title{
        font-family: var(--font-regular);
        font-weight: 300;
        color: ${actionTitleColor};
        font-size: ${o.action_header_size || "28px"};
        margin-bottom: ${o.action_header_bottom_margin || "25px"}
    }
    ${cssId} .g__description{
        font-family: var(--font-regular);
        font-weight: 300;
        color: ${actionDescColor};
        font-size: ${o.action_description_size || "18px"};
        margin-bottom: ${o.action_description_bottom_margin || "25px"};
        line-height: ${o.action_description_line_height || o.action_description_size};
    }
    ${cssId} .g__tiles_filters{
        display: flex;
        margin-top: 25px;
    }
    /* ------
    General Styles
    ------*/
    ${cssId} {
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
      display: flex;
      justify-content: ${alignTiles};
    }
    ${cssId} .g__tiles_grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: ${tileMaxWidth};
    }
    ${cssId} .g__tile_container{
        display: flex;
        flex: ${fillRow} 0 ${columns};
        box-sizing: border-box;
        overflow: hidden;

    }
    /* ---------- Overlay ---------- */
    .g__tile_overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${overlay};
        opacity: ${filterOneOpacity};
    }
    .g__tile_overlay_two{
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${overlayTwo};
      opacity: ${filterTwoOpacity};
  }
    /* ---------- Tiles Body ---------- */
    ${cssId} .g__tile_body{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${flexLayout || "center"};
        margin: ${tileSpacing};
        height: ${tileHeight};
        background: var(--background);
        width: 100%;
        transition: all .5s ease;
    }
    ${cssId} .g__desc_no_hover a.g__tile_body:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${hoverColor};
        opacity: 0;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_no_hover a.g__tile_body:hover:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${hoverColor};
        opacity: .6;
    }
    ${cssId} .g__tile_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${flexLayout || "center"};
        text-align: ${o.layout || "center"};
        font-style: var(--font-regular);
        font-weight: 300;
        padding: 15px;
        z-index: 5;
    }
    ${cssId} .g__tile_body .g__tile_icon{
        color: ${iconColor};
        font-size: ${iconSize};
        text-align: ${o.layout || "center"};
        padding-bottom: ${iconBottomPadding};
    }
    ${cssId} .g__tile_body .g__tile_title{
        font-family: var(--font-regular);
        font-weight: 300;
        color: ${titleColor};
        font-size: ${titleSize};
        hyphens: auto;
        text-align: ${o.layout || "center"};
        text-decoration: none;
        opacity: 1;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_cont{
        font-family: var(--font-regular);
        font-weight: 300;
        text-align: ${o.layout || "center"};
        height: calc(${tileHeight} - (${tileHeight} - 50px));
        overflow: auto;
        font-size: ${descSize};
        color: ${descColor};
    }
    /* ------
    Show description on hover and hide header/icon
    ------*/
    ${cssId} .g__desc_on_hover .g__desc_cont {
        content: '';
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        height: 100%;
        padding: 15px;
        color: ${descColor};
        opacity: 0;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_on_hover .g__tile_body:hover:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${hoverColor};
        opacity: 0;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_on_hover .g__tile_body:hover:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${hoverColor};
        opacity: .6;
    }
    /* --- Hide Header and Icon on Hover ----*/
    ${cssId} .g__desc_on_hover.g__desc_true .g__tile_body:hover .g__desc_cont {
        opacity: 1;
    }
    ${cssId} .g__desc_on_hover.g__desc_true .g__tile_body:hover .g__tile_title,
    ${cssId} .g__desc_on_hover.g__desc_true .g__tile_body:hover .g__tile_icon {
        opacity: 0;
    }
    ${cssId} .g__tile_body p{
        color: ${descColor};
    }
    /* ------
    Order Filter
    ------*/
    ${cssId} .g__tile_filter_wrap {
        display: flex;
        position: relative;
    }
    ${cssId} .g__tile_order_filter {
        display: block;
        position: relative;
        width: 200px;
        padding: var(--field-padding);
        line-height: 1.5;
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        color: var(--font-color);
        font-family: var(--font-regular);
        font-weight: 300;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    ${cssId} .g__tile_filter_wrap::after {
        position: absolute;
        content: "";
        top: 16px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: var(--font-color) transparent transparent transparent;
    }
    /* ------
    Search Bar
    ------*/
    ${cssId} .g__tile_search_wrap{
        display: block;
        position: relative;
        margin-left: auto;
    }
    ${cssId} .g__tile_search{
        display: block;
        position: relative;
        width: 300px;
        padding: var(--field-padding);
        line-height: 1.5;
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        color: var(--font-color);
        font-family: var(--font-regular);
        font-weight: 300;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    ${cssId} .g__search_icon{
        position: absolute;
        content: "";
        top: 7px;
        left: 10px;
        color: var(--font-color);
        z-index: 1;
        transition: all .4s ease;
    }
    ${cssId} .g__search_icon.search_active{
        transform: scaleX(0) rotate(45deg);
    }
    /*---------------------------------------------
      Pagination
    ---------------------------------------------*/
    ${cssId} .g__pagination_wrapper{
        display: flex;
        flex-direction: row;
        justify-content: ${o.pagination_info_text ? "space-between" : "flex-end"};
        align-items: center;
        margin: 30px 15px;
    }
    ${cssId} .g__pagination_wrapper #g__info_text p{
        font-family: var(--font-regular);
        font-weight: 300;
        margin: 0;
        color: ${fontColorMode};
    }
    ${cssId} ul.g__pagination_container{
        font-family: var(--font-regular);
        font-weight: 300;
        list-style-type: none;
        display: flex;
        overflow: auto;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin: 0;
    }
    ${cssId} ul.g__pagination_container li{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${fontColorMode};
        font-size: 1rem;
        border-top: var(--border);
        border-bottom: var(--border);
        border-right: var(--border);
        height: 30px;
        min-width: 30px;
        transition: background .3s ease;
    }
    ${cssId} ul.g__pagination_container li:first-child{
        border: var(--border);
        border-radius: 4px 0 0 4px;
    }
    ${cssId} ul.g__pagination_container li:last-child{
        border-radius: 0 4px 4px 0;
    }
    ${cssId} ul.g__pagination_container li:hover{
        cursor: pointer;
        background: var(--background);
    }
    ${cssId} ul.g__pagination_container li.active{
        background: #eaeaea;
        color: ${fontColorModeReverse};
    }
    ${cssId} .g__pagination_hidden{
        display: none;
    }
    ${cssId} .g__pagination_show{
        display: flex;
    }
    /*---------------------------------------------
      Mobile
    ---------------------------------------------*/
    @media (max-width: 991.98px) {
        ${cssId} .g__tile_container{
            flex: ${fillRow} 0 50%;
        }
    }
    @media only screen and (max-width: 767.98px) {
        ${cssId} .g__tile_container{
            flex: 0 0 100%;
        }
    }
    `;
  let granite_css = document.getElementById("g__css_" + id);

  if (granite_css) {
    granite_css.remove();
  }

  document.head.appendChild(tilesStyles);
  /*---------------------------------------------
      Check for records
      ---------------------------------------------*/

  if (rCount === 0) {
    granite_div.classList.add("g__no_records");
    granite_div.innerHTML = "<h2>Tiles</h2>";
    return;
  }
  /*---------------------------------------------
    Tiles action row
    ---------------------------------------------*/
  //   let tileActionRow;
  //   if(!!o.title || !!o.description || !!o.orderFilter || !!o.search){
  //       tileActionRow = document.createElement('div');
  //       tileActionRow.classList.add('g__tiles_action_row');
  //       if(o.title){
  //           let title = document.createElement('h2');
  //           title.classList.add('g__title');
  //           title.innerHTML = o.title;
  //           tileActionRow.appendChild(title);
  //       }
  //       if(o.description){
  //           let description = document.createElement('p');
  //           description.classList.add('g__description');
  //           description.innerHTML = o.description;
  //           tileActionRow.appendChild(description);
  //       }
  //       granite_div.appendChild(tileActionRow);
  //   }


  if (String(o.orderFilter) === "true" || String(o.search) === "true") {
    let tileFilters = document.createElement("div");
    tileFilters.classList.add("g__tiles_filters");
    /* Order By */

    if (String(o.orderFilter) === "true") {
      let orderWrap = document.createElement("div");
      orderWrap.classList.add("g__tile_filter_wrap");
      let orderSelect = document.createElement("select");
      orderSelect.classList.add("g__tile_order_filter");
      const filterOptions = ["Order By", "Asc", "Desc"];
      filterOptions.forEach((val, count) => {
        let option = document.createElement("option");
        option.innerHTML = val;
        option.value = val;

        if (count === 0) {
          option.hidden = true;
          option.disabled = true;
          option.selected = true;
        }

        orderSelect.appendChild(option);
      });
      orderSelect.addEventListener("change", e => {
        orderFilter(e.target.value);
      });
      orderWrap.appendChild(orderSelect);
      tileFilters.appendChild(orderWrap);
    }
    /* Search */


    if (String(o.search) === "true") {
      let searchWrap = document.createElement("div");
      searchWrap.classList.add("g__tile_search_wrap");
      let searchIcon = document.createElement("div");
      searchIcon.classList.add("g__search_icon");
      searchIcon.innerHTML = '<i class="far fa-search"></i>';
      searchWrap.appendChild(searchIcon);
      let searchBar = document.createElement("input");
      searchBar.type = "text";
      searchBar.classList.add("g__tile_search");
      searchBar.addEventListener("focus", e => {
        tileIconFocus(e);
      });
      searchBar.addEventListener("focusout", e => {
        tileIconFocusOut(e);
      });
      searchBar.addEventListener("input", e => {
        tileSearch(e);
      });
      searchWrap.appendChild(searchBar);
      tileFilters.appendChild(searchWrap);
    }

    tileActionRow.appendChild(tileFilters);
  }
  /*---------------------------------------------
    Tiles body
    ---------------------------------------------*/


  let tile_wrapper = document.createElement("div");
  !!o.id ? tile_wrapper.setAttribute("id", o.id) : "";
  tile_wrapper.classList.add("g__tiles_grid");
  r.forEach(r => {
    let tileContainer = document.createElement("div");
    !!r.id ? tileContainer.setAttribute("id", r.id) : "";
    tileContainer.classList.add("g__tile_container");
    !!r.classes ? tileContainer.classList.add(r.classes) : "";
    tileContainer.setAttribute("data-micro-id", id);
    !!r.addapptation_id ? tileContainer.setAttribute("data-record-id", r.addapptation_id) : "";
    String(o.description_hover) === "true" ? tileContainer.classList.add("g__desc_on_hover") : tileContainer.classList.add("g__desc_no_hover");
    !!r.description ? tileContainer.classList.add("g__desc_true") : "";
    let tileLink = !!r.href ? document.createElement("a") : document.createElement("div");
    tileLink.classList.add("g__tile_body");
    String(o.loader) === "true" ? tileLink.classList.add("show_loader") : "";
    !!r.href ? tileLink.href = r.href : "";
    !!r.target ? tileLink.target = r.target : "";
    String(r.side_pane) === "true" ? tileLink.classList.add("a__side_pane_link") : "";
    !!r.background_color ? tileLink.style.backgroundColor = r.background_color : "";
    !!r.background_image ? tileLink.style.backgroundImage = `url(${r.background_image})` : "";
    !!r.background_image ? tileLink.style.backgroundSize = "cover" : "";
    tileContainer.appendChild(tileLink);

    if (String(o.overlay) === "true") {
      let overlay = document.createElement("div");
      overlay.classList.add("g__tile_overlay");
      tileLink.appendChild(overlay);
      let overlayTwo = document.createElement("div");
      overlayTwo.classList.add("g__tile_overlay_two");
      tileLink.appendChild(overlayTwo);
    }

    let tileContent = document.createElement("div");
    tileContent.classList.add("g__tile_content");
    tileLink.appendChild(tileContent);

    if (!!r.icon) {
      var tileIcon = document.createElement("div");
      tileIcon.classList.add("g__tile_icon");
      tileIcon.setAttribute("data-record-id", "icon");
      tileIcon.setAttribute("data-editable", "record");
      var icon = document.createElement("i");
      icon.setAttribute("class", r.icon);
      tileIcon.append(icon);
      tileContent.appendChild(tileIcon);
    }

    if (!!r.title) {
      let tile_title = document.createElement("div");
      tile_title.classList.add("g__tile_title");
      tile_title.setAttribute("data-record-id", "title");
      tile_title.setAttribute("data-editable", "record");
      tile_title.innerHTML = r.title;
      tileContent.appendChild(tile_title);
    }

    if (!!r.description) {
      let descCont = document.createElement("div");
      descCont.classList.add("g__desc_cont");
      descCont.setAttribute("data-record-id", "description");
      descCont.setAttribute("data-editable", "record");
      let desc = document.createElement("div");
      desc.classList.add("g__tile_desc");
      desc.innerHTML = r.description;
      descCont.appendChild(desc);
      tileContent.appendChild(descCont);
    }

    tile_wrapper.appendChild(tileContainer);
  });
  /*---------------------------------------------
    Append Tile Body to Granite Div
    ---------------------------------------------*/

  granite_div.classList.remove("g__no_records");
  granite_div.appendChild(tile_wrapper);
  /*---------------------------------------------
    Functions
    ---------------------------------------------*/

  /*----- Order Filter -----*/

  function orderFilter(order) {
    let tileContainer = granite_div.querySelector(".g__tiles_grid");
    let allTiles = granite_div.querySelectorAll(".g__tile_container");
    let tileArr = [];
    allTiles.forEach(tile => {
      let tileInfo = [];
      let title = tile.querySelector(".g__tile_title").innerHTML;
      tileInfo.push(title);
      tileInfo.push(tile);
      tileArr.push(tileInfo);
    });

    if (order === ("Asc" || "Dsc")) {
      tileArr.sort(function sortThings(a, b) {
        a = a[0].toLowerCase();
        b = b[0].toLowerCase();

        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else if (a === b) {
          return 0;
        }
      });
    }

    order === "Desc" ? tileArr.reverse() : ""; // Update the DOM

    tileContainer.innerHTML = "";
    tileArr.forEach(tile => {
      tileContainer.appendChild(tile[1]);
    });
  }
  /*----- Search Bar Icon -----*/


  function tileIconFocus(e) {
    let icon = e.target.previousElementSibling;
    icon.classList.add("search_active");
  }

  function tileIconFocusOut(e) {
    let icon = e.target.previousElementSibling;
    let content = e.target.value.length;

    if (!content) {
      icon.classList.remove("search_active");
    }
  }
  /*----- Search Bar -----*/


  function tileSearch(e) {
    var input, filter, tiles, t, a, i, body, txtValue, bodyValue, parent, content;
    filter = e.target.value.toUpperCase();
    parent = document.getElementById(id);
    t = parent.getElementsByClassName("g__tile_container");

    for (i = 0; i < t.length; i++) {
      a = t[i].getElementsByClassName("g__tile_title")[0];
      body = t[i].getElementsByClassName("g__tile_desc")[0];
      content = "";

      if (a != undefined) {
        txtValue = a.textContent || a.innerText;
        content += txtValue;
      }

      if (body != undefined) {
        bodyValue = body.textContent || body.innerText;
        content += " " + bodyValue;
      }

      if (content.toUpperCase().indexOf(filter) > -1) {
        t[i].style.display = "";
        t[i].classList.remove("g__pagination_hidden");
      } else {
        t[i].style.display = "none";
      }

      content = "";
    }
  }
  /*---------------------------------------------
    Pagination
    ---------------------------------------------*/


  if (String(o.pagination) === "true") {
    const tiles_per_page = parseInt(o.tiles_per_page) || 25;
    let current_page = 1;
    const arr_tiles = document.querySelectorAll(".g__tile_container");
    let page_count = Math.ceil(arr_tiles.length / tiles_per_page);
    let pagination_wrapper = document.createElement("div");
    pagination_wrapper.classList.add("g__pagination_wrapper");
    granite_div.appendChild(pagination_wrapper);

    if (String(o.pagination_info_text) === "true") {
      let info_text = document.createElement("div");
      info_text.id = "g__info_text";
      pagination_wrapper.appendChild(info_text);
    }

    let pagination_container = document.createElement("ul");
    pagination_container.classList.add("g__pagination_container");
    let paginated_back = document.createElement("li");
    paginated_back.id = "g__pagination_back";
    paginated_back.innerHTML = '<i class="fal fa-angle-double-left"></i>';
    pagination_container.appendChild(paginated_back);

    for (let i = 1; i < page_count + 1; i++) {
      let paginated_button = document.createElement("li");
      paginated_button.classList.add("g__pagination_page");
      paginated_button.innerText = i;
      current_page == i ? paginated_button.classList.add("active") : "";
      pagination_container.appendChild(paginated_button);
      pagination_wrapper.appendChild(pagination_container);
      paginated_button.addEventListener("click", function () {
        let page_num = paginated_button.innerText;
        current_page = parseInt(page_num);
        displayTiles(current_page, arr_tiles, tiles_per_page);
        let current_btn = document.querySelector(".g__pagination_container li.active");
        current_btn.classList.remove("active");
        paginated_button.classList.add("active");
      });
    }

    let paginated_forward = document.createElement("li");
    paginated_forward.id = "g__pagination_next";
    paginated_forward.innerHTML = '<i class="fal fa-angle-double-right"></i>';
    pagination_container.appendChild(paginated_forward);

    function displayTiles(current_page, arr_tiles, tiles_per_page) {
      let tiles_max = current_page * tiles_per_page;
      let tiles_min = tiles_max - tiles_per_page;

      if (String(o.pagination_info_text) === "true") {
        let info = document.getElementById("g__info_text");
        info.innerHTML = `<p>Showing ${tiles_min + 1} to ${tiles_max} of ${arr_tiles.length}</p>`;
      }

      arr_tiles.forEach((tile, num) => {
        tile.classList.add("g__pagination_hidden");
        tile.classList.remove("g__pagination_show");

        if (num < tiles_max && num >= tiles_min) {
          tile.classList.add("g__pagination_show");
        }
      });
    }

    function backNextBtn(btn, direction) {
      btn.addEventListener("click", () => {
        let parent = btn.parentElement;
        let pages = parent.children;
        let page_count = pages.length - 2;
        let active_page;
        let next_page;

        for (let i = 1; i < pages.length; i++) {
          let is_active = pages[i].classList.contains("active");

          if (is_active) {
            active_page = pages[i].innerText;
            next_page = direction ? pages[i + 1] : pages[i - 1];
          }
        }

        if (direction && active_page < page_count || !direction && active_page != 1) {
          current_page = direction ? parseInt(active_page) + 1 : parseInt(active_page) - 1;
          displayTiles(current_page, arr_tiles, tiles_per_page);
          let current_btn = document.querySelector(".g__pagination_container li.active");
          current_btn.classList.remove("active");
          next_page.classList.add("active");
        }
      });
    }

    let next_btn = document.getElementById("g__pagination_next");
    let back_btn = document.getElementById("g__pagination_back");
    backNextBtn(next_btn, true);
    backNextBtn(back_btn, false);
    displayTiles(current_page, arr_tiles, tiles_per_page);
  } //end tile function

}