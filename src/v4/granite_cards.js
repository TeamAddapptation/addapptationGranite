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
      !!o.g_card_background ? "" : (o.g_card_background = "#ffffff");
      !!o.g_title_color ? "" : (o.g_title_color = "#101010");
      !!o.g_description_color ? "" : (o.g_description_color = "#101010");
      !!o.g_card_border_color ? "" : (o.g_card_border_color = "#bfbfbf");
      !!o.g_btn_bkg_color ? "" : (o.g_btn_bkg_color = "#bfbfbf");
      !!o.g_btn_font_color ? "" : (o.g_btn_font_color = "#ffffff");
      !!o.g_btn_border_color ? "" : (o.g_btn_border_color = "#eaeaea");
      !!o.g_btn_bkg_color_hover ? "" : (o.g_btn_bkg_color_hover = "#a1a1a1");
      !!o.g_btn_font_color_hover ? "" : (o.g_btn_font_color_hover = "#ffffff");
      !!o.g_btn_border_hover_color
        ? ""
        : (o.g_btn_border_hover_color = "#a1a1a1");
      break;
    default:
      !!o.g_card_background ? "" : (o.g_card_background = "#202020");
      !!o.g_title_color ? "" : (o.g_title_color = "#ffffff");
      !!o.g_description_color ? "" : (o.g_description_color = "#ffffff");
      !!o.g_card_border_color ? "" : (o.g_card_border_color = "#5d5d5d");
      !!o.g_btn_bkg_color ? "" : (o.g_btn_bkg_color = "#5d5d5d");
      !!o.g_btn_font_color ? "" : (o.g_btn_font_color = "#ffffff");
      !!o.g_btn_border_color ? "" : (o.g_btn_border_color = "#101010");
      !!o.g_btn_bkg_color_hover ? "" : (o.g_btn_bkg_color_hover = "#a1a1a1");
      !!o.g_btn_font_color_hover ? "" : (o.g_btn_font_color_hover = "#ffffff");
      !!o.g_btn_border_hover_color
        ? ""
        : (o.g_btn_border_hover_color = "#a1a1a1");
      break;
  }
  !!o.g_columns ? "" : (o.g_columns = "3");
  !!o.g_display_list ? "" : (o.g_display_list = "vertical");

  !!o.g_title_size ? "" : (o.g_title_size = "26");
  !!o.title_top_padding ? "" : (o.title_top_padding = "5");
  !!o.g_title_bottom_padding ? "" : (o.g_title_bottom_padding = "5");
  !!o.g_description_size ? "" : (o.g_description_size = "18");
  !!o.description_top_padding ? "" : (o.description_top_padding = "5");
  !!o.g_description_bottom_padding
    ? ""
    : (o.g_description_bottom_padding = "5");

  !!o.g_margin ? "" : (o.g_margin = "5");
  !!o.g_card_padding ? "" : (o.g_card_padding = "0");
  !!o.g_content_padding ? "" : (o.g_content_padding = "15");
  !!o.g_img_padding ? "" : (o.g_img_padding = "0");
  !!o.g_card_border_width ? "" : (o.g_card_border_width = "0");
  !!o.g_img_border_radius ? "" : (o.g_img_border_radius = "2");
  !!o.g_card_border_radius ? "" : (o.g_card_border_radius = "2");

  !!o.g_btn_border_radius ? "" : (o.g_btn_border_radius = "2");
  !!o.g_btn_border_width ? "" : (o.g_btn_border_width = "0");
  !!o.g_btn_border_hover_width ? "" : (o.g_btn_border_hover_width = "0");

  !!o.padding_top ? "" : (o.padding_top = "0");
  !!o.padding_right ? "" : (o.padding_right = "0");
  !!o.padding_bottom ? "" : (o.padding_bottom = "0");
  !!o.padding_left ? "" : (o.padding_left = "0");

  !!o.margin_top ? "" : (o.margin_top = "0");
  !!o.margin_right ? "" : (o.margin_right = "0");
  !!o.margin_bottom ? "" : (o.margin_bottom = "0");
  !!o.margin_left ? "" : (o.margin_left = "0");

  // Action Row
  let headerFontColor = o.g_header_font_color || fontColorMode;
  let headerFontSize = o.g_header_font_size || "28px";
  let descriptionFontColor = o.g_description_font_color || fontColorMode;
  let descriptionFontSize = o.g_description_font_size || "16px";

  // Design
  let cardBkg = o.g_card_background;
  let cardBorderWidth = o.g_card_border_width + "px";
  let cardBorderColor = o.g_card_border_color;
  let titleColor = o.g_title_color;
  let descriptionColor = o.g_description_color;
  let titleSize = o.g_title_size + "px";
  let descriptionSize = o.g_description_size + "px";
  let cardBorderRadius = o.g_card_border_radius + "px";
  let imgBorderRadius = o.g_img_border_radius + "px";
  // Btn
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
  let btnCenter = String(o.g_btn_center) === "true" ? "0 auto" : "inherit";
  // Layout
  let columns = 100 / parseInt(o.g_columns) + "%";
  let fillRow = o.g_fill_row ? "1" : "0";
  let cardMargin = o.g_margin + "px";
  let columnGap = parseInt(cardMargin, 10) * 2 + "px";
  let cardPadding = o.g_card_padding + "px";
  let displayList = o.g_display_list;
  let imgPadding = o.g_img_padding + "px";
  let contentPadding = o.g_content_padding + "px";
  // Font
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
    let cardWrap,
      cardImgCont,
      cardImg,
      cardContent,
      cardTitle,
      cardDescription,
      btn,
      showMore;

    if (
      String(o.g_description_preview) === "true" &&
      displayList === "vertical"
    ) {
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
      close.addEventListener("click", (e) => {
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
        showMore.addEventListener("click", (e) => {
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
      displayList === "horizontal"
        ? cardWrap.classList.add("g__card_list")
        : "";

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
        o.g_description_preview
          ? cardDescription.classList.add("g__preview")
          : "";
        cardDescription.innerHTML = r.g_description;
        cardContent.appendChild(cardDescription);
        if (
          String(o.g_description_preview) === "true" &&
          displayList === "horizontal"
        ) {
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
        String(r.g_new_window) === "true"
          ? (btn.target = "_blank")
          : (btn.target = "_self");
        btn.innerHTML = r.g_btn_text;
        cardContent.appendChild(btn);
      }

      if (
        !!r.g_description &&
        String(o.g_description_preview) === "true" &&
        displayList === "horizontal"
      ) {
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
    cardContainer.appendChild(cardWrap);
    // End record loop
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
    if (
      String(o.g_description_preview) === "true" &&
      displayList === "vertical"
    ) {
      let fullDesc = granite_div.querySelectorAll(".g__full_description");
      if (fullDesc.length) {
        fullDesc.forEach((content) => {
          content.setAttribute(
            "data-height",
            content.parentElement.offsetHeight
          );
          content.style.top = content.parentElement.offsetHeight + "px";
          let showMore = content.previousSibling.querySelector(".g__show_more");
          let close = content.querySelector(".g__desc_close");
          if (!!showMore) {
            showMore.addEventListener("click", (e) => {
              content.classList.add("g__full_show");
              content.removeAttribute("style");
            });
          }
          if (!!close) {
            close.addEventListener("click", (e) => {
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
      showMore.forEach((showBtn) => {
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
      cards.forEach((card) => {
        let container = card.querySelector(".g__card_content_container");
        let content = card.querySelector(".g__card_content_slider");
        container.style.height = content.clientHeight + "px";
        content.style.height = content.clientHeight + "px";
      });
    }
  }
  // End main function
}
