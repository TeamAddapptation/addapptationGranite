function granite_navigation(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
  const style = o.style || 'top_bar';
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  !!o.classes ? granite_div.setAttribute('class', o.classes) : '';
  /*---------------------------------------------
  Verify Div ID and Div Alignment - Set Mode
  ---------------------------------------------*/
  if (granite_div === null){
      console.error('Object ID and Granite Div ID Do Not Match')
  } else {
      granite_div.setAttribute('mode', mode);
  }
  /*---------------------------------------------
  Add Font Family To Header
  ---------------------------------------------*/
  const font_include = document.getElementById('g__font_stylesheet');
  if (!font_include){
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
  // Mode Defaults
  let bodyBkg = mode === "midnight" ? "#101010" : "#ffffff";
  let navBkgMode = mode === "midnight" ? "#353535" : "#eaeaea";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let activeMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  let lightGray = "#5d5d5d";
  // Layout
  let navHeight = o.nav_height || "75px";
  let mobilePadding = o.mobile_padding || "10px 15px";
  let desktopPadding = o.desktop_padding || "5px 30px";

  // Design
  let navBkg = o.background || navBkgMode;
  let headerLabelColor = o.header_label_color || fontColorMode;
  let logoFontSize = o.logo_font_size || "24px";
  let headerLabelFontSize = o.header_label_font_size || "20px";
  let subLabelFontSize = o.sub_label_font_size || "18px";
  let bkgColorHover = o.background_hover || hoverMode;
  let dividerLineColor = o.divider_line_color || lightGray;
  let utilityBkgColor = o.utility_cta_background || lightGray;
  let utilityBkgColorHover = o.utility_cta_background_hover || hoverMode;

  //mobile
  let bottomCtaBkg = o.bottom_cta_bkg || navBkg;

  // Font
  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
  let fontColor = o.font_color || fontColorMode;
  let fontColorHover = o.font_color_hover || fontHoverMode;
  let utilityFontSize = o.utility_font_size || "12px";
  let mobileBottomFontSize = o.mobile_bottom_font_size || "10px";
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
  let navStyles = document.createElement('style');
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
    ${cssId} .g__top_bar{
      display: flex;
      height: ${navHeight};
      position: relative;
      background: ${navBkg};
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }
    ${cssId} .g__top_bar .g__logo_cont{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    ${cssId} .g__top_bar .g__logo{
      width: 50px;
      height: auto;
    }
    ${cssId} .g__top_bar .g__logo_label{
      color: ${headerLabelColor};
      font-size: ${logoFontSize};
      margin-left: 15px;
    }
    ${cssId} .g__top_bar .g__nav_cont {
      display: flex;
      flex-direction: column;
    }
    ${cssId} .g__top_bar .g__nav_utility {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      height: 25px;
      list-style: none;
      justify-content: flex-end;
    }
    ${cssId} .g__top_bar .g__nav_utility .g__item_utility {
      display: flex;
      color: ${fontColor};
      order: 1;
      font-size: ${utilityFontSize};
      padding: 5px 30px;
    }
    ${cssId} .g__top_bar .g__nav_main {
      display: flex;
      order: 2;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    ${cssId} .g__top_bar .g__nav_main .g__item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: ${desktopPadding};
    }
    ${cssId} .g__top_bar .g__nav_main .g__item.g__icon_center{
      flex-direction: column;
      justify-content: flex-end;
    }
    ${cssId} .g__top_bar .g__nav_main .g__item.g__icon_center i{
      padding-right: 0;
    }

    ${cssId} .g__top_bar .g__nav_main .g__item:hover {
      display: flex;
      cursor: pointer;
      background: ${bkgColorHover};
    }
    ${cssId} .g__top_bar .g__nav_main .g__item i {
      color: ${fontColor};
      font-size: ${headerLabelFontSize};
      padding-right: 10px;
    }
    ${cssId} .g__top_bar .g__nav_main .g__item a {
      color: ${fontColor};
      font-size: ${headerLabelFontSize};
    }
    /* -------------------------Top Bar Dropdown --------------------------*/
    ${cssId} .g__top_bar .g__cta_btn{
      background: ${utilityBkgColor};
      border-radius: 5px;
    }
    ${cssId} .g__top_bar .g__cta_btn:hover{
      cursor: pointer;
      background: ${utilityBkgColorHover};
      border-radius: 5px;
    }
    /* -------------------------Top Bar Dropdown --------------------------*/
    ${cssId} .g__top_bar ul.g__dropdown_menu{
      position: absolute;
      top: 40px;
      left: 0;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      opacity: 1;
      background: ${navBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__top_bar .g__dd_item_container{
      display: flex;
      align-items: center;
    }
    ${cssId} .g__top_bar .g__dd_item_container i{
      color: ${fontColor};
      padding: 0 10px;
    }
    ${cssId} .g__top_bar ul.g__dropdown_menu .g__sub_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${desktopPadding};
      border-top: 1px solid ${dividerLineColor};
    }
    ${cssId} .g__top_bar ul.g__dropdown_menu .g__sub_item i {
      font-size: ${subLabelFontSize};
    }
    ${cssId} .g__top_bar ul.g__dropdown_menu .g__sub_item a.g__sub_link {
      font-size: ${subLabelFontSize};
      display: flex;
    }
    ${cssId} .g__top_bar ul.g__dropdown_menu.g__hidden{
      opacity: 0;
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
      width: 250px;
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
      font-size: ${headerLabelFontSize};
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
      order: 0;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item .g__icon_container{
      order: 1;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item:hover{
      cursor: pointer;
      background: ${bkgColorHover};
    }
    ${cssId} .g__sidebar .g__sidebar_collapse{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: auto;
      margin-left: auto;
      margin-right: 15px;
      margin-bottom: 15px;
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
    /* ------------------------- Sidebar collapsed --------------------------*/
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
    ${cssId} .g__sidebar.g__collapse_active .g__dd_item_container{
    }
    /* -------------------------Sidebar Dropdown --------------------------*/

    ${cssId} .g__sidebar .g__nav_main .g__item.g__item_dropdown {
      flex-direction: column;
    }
    ${cssId} .g__dd_item_container{
      display: flex;
      width: 100%;
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
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      justify-content: space-between;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item a{
      display: flex;
      order: 0;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item i{
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
      ${cssId} .g__mobile_top .g__sidebar_collapse{
        display: none;
      }
      ${cssId} .g__mobile_top .g__logo_cont{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
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
        top: ${navHeight};
        right: 0;
        left: 0;
        background: ${navBkg};
        height: calc(100vh - ${navHeight});
        opacity: 0;
        transform: translateX(-100%);
        transition: all 1s ease;
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont{
        height: calc(100vh - (${navHeight} * 2));
      }
      ${cssId} .g__mobile_top .g__nav_cont.g__nav_active{
        opacity: 1;
        transform: translateX(0);
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_utility{
        order: 2;
        flex-direction: column;
        margin-top: auto;
        align-items: center;
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
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont .g__nav_utility .g__item_utility:first-of-type{
        border-top: 1px solid ${dividerLineColor};
      }
      ${cssId} .g__mobile_top.g__mobile_bottom .g__nav_cont .g__nav_utility .g__item_utility{
        display: flex;
        width: 100%;
        border-bottom: 1px solid ${dividerLineColor};
        padding: 20px 10px;
        justify-content: center;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main{
        order: 1;
        flex-direction: column;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item{
        border-bottom: 1px solid ${dividerLineColor};
        flex-direction: row;
        justify-content: space-between;
        padding: ${mobilePadding};
      }
      ${cssId} .g__top_bar.g__mobile_bottom .g__nav_utility .g__item_utility{
        border-bottom: 1px solid ${dividerLineColor};
        flex-direction: row;
        justify-content: space-between;
        padding: ${mobilePadding};
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item a{
        order: 0;
      }
      ${cssId} .g__mobile_top .g__nav_cont .g__nav_main .g__item i{
        order: 1;
      }
      /* -------------------------Top Bar Dropdown Tablet --------------------------*/
      ${cssId} .g__mobile_top .g__item_dropdown{
        display: flex;
      }
      ${cssId} .g__mobile_top .g__item_dropdown i{
        margin-left: auto;
      }
      ${cssId} .g__mobile_top .g__item.g__item_dropdown {
        padding: 0;
      }
      ${cssId} .g__mobile_top .g__item.g__item_dropdown .g__dd_item_container{
        padding: ${mobilePadding};
      }
      ${cssId} .g__mobile_top ul.g__dropdown_menu{
        position: relative;
        display: flex;
        top: 0;
        flex-direction: column;
      }
      ${cssId} .g__mobile_top ul.g__dropdown_menu.g__hidden{
        opacity: 0;
        max-height: 0;
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
      height: ${navHeight};
      position: fixed;
      width: 100%;
      bottom: 0;
      background: ${navBkg};
      justify-content: space-between;
      align-items: center;
      padding: 15px;
    }
    ${cssId} .g__nav__bottom_cont .g__nav_main {
      display: flex;
      justify-content: space-between;
      flex: 1;
      height: auto;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      z-index: 99;
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
      font-size: ${mobileBottomFontSize};
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
      font-size: 40px;
      color: ${fontColor};
    }
    /* ------------------------- Bottom Slide Menu --------------------------*/
    ${cssId} .g__nav__bottom_cont .g__bottom_menu{
      position: absolute;
      transform: translateY(120%);
      display: flex;
      flex-direction: column;
      width: 100vw;
      left: 0;
      height: calc(100vh - (${navHeight} * 2));
      bottom: 0;
      margin-bottom: ${navHeight};
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
      opacity: 1;
      background: ${navBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu .g__dd_item_container{
      display: flex;
      align-items: center;
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
      font-size: ${subLabelFontSize};
      color: ${fontColor};
      order: 1;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu .g__sub_item a.g__sub_link {
      font-size: ${subLabelFontSize};
      color: ${fontColor};
      display: flex;
      order: 0;
    }
    ${cssId} .g__nav__bottom_cont .g__bottom_menu ul.g__dropdown_menu.g__hidden{
      opacity: 0;
    }
    `
    document.head.appendChild(navStyles);
    /*---------------------------------------------
    Check for records
    ---------------------------------------------*/
    // if(!rCount){
    //   granite_div.classList.add('g__no_records');
    //   granite_div.innerHTML = "<h2>Navigation</h2>";
    //   return;
    // }
    /*---------------------------------------------
    Navigation builder
    ---------------------------------------------*/
    let topBarCont = document.createElement('div');
    topBarCont.classList.add(`g__${style}`);
    topBarCont.classList.add('g__mobile_top');
    o.mobile_menu_style === "bottom" ? topBarCont.classList.add(`g__mobile_bottom`) : "";
    /* ------------ Top Section Container -----------*/
    let topSection = document.createElement('div')
    topSection.classList.add('g__top_container');

    /* ------------ Logo -----------*/
    let logoCont = document.createElement('div')
    logoCont.classList.add('g__logo_cont');

    if(o.header_image){
      let logoLink = document.createElement('a');
      logoLink.href = o.header_link || '/';
      logoCont.appendChild(logoLink);

      let logo = document.createElement('img');
      logo.classList.add('g__logo')
      logo.src = o.header_image;
      logo.alt = o.header_label || "";
      logoLink.appendChild(logo);
    }
    if(o.header_label){
      let logoLabel = document.createElement('div');
      logoLabel.classList.add('g__logo_label')
      logoLabel.innerHTML = o.header_label || "";
      logoCont.appendChild(logoLabel);
    }
    topSection.appendChild(logoCont)
    topBarCont.appendChild(topSection);

    if(o.style === "sidebar"){
      var utilityCont = document.createElement('div')
      utilityCont.classList.add('g__utility_cont');
      utilityCont.innerHTML = '<i class="far fa-ellipsis-h"></i>'

      utilityCont.addEventListener('click', () => {
        utilityCont.classList.toggle('g__utility_active');
      })

      topSection.appendChild(utilityCont);
    };

    /* ------------ Hamburger Div -----------*/
    let hamburger = document.createElement('div');
    hamburger.classList.add('g__nav_hamburger');
    topBarCont.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('g__nav_active');
      hamburger.nextSibling.classList.toggle('g__nav_active');
    })

    for(let i = 1; i < 4; i++){
      let bar = document.createElement('div');
      bar.setAttribute('class', `g__bar_${i}`)
      hamburger.appendChild(bar);
    }

    /* ------------ Links -----------*/
    let navCont = document.createElement('div');
    navCont.classList.add('g__nav_cont')

    let navMain = document.createElement('ul');
    navMain.classList.add('g__nav_main');

    let navUtility = document.createElement('ul');
    navUtility.classList.add('g__nav_utility');

    /* ------------ Dropdown -----------*/
    let dd = false;
    let ddLabel = "";
    let ddIcon = "";
    let arrDdItems = [];

    /* ------------ Main Loop -----------*/
    r.forEach( (r, num) => {
      String(r.submenu_header) === 'true' ? r.link_type = "ddHeader" :  "" ;
      String(r.submenu) === 'true' ? r.link_type = "ddItem" :  "" ;
      let item, link, iconCont, iconLink;
      switch(r.link_type) {
        case "utility":
          item = document.createElement('li');
          item.classList.add('g__item_utility')
          String(r.cta_button) === 'true' ? item.classList.add('g__cta_btn'): "";

          link = document.createElement('a');
          link.classList.add('g__link_utility');
          link.innerHTML = r.label || "Link";
          item.appendChild(link)

          navUtility.appendChild(item);
          break;
        case "ddHeader":
          ddLabel = r.label || "Dropdown";
          dd = true;
          ddIcon = r.icon;
        break;
        case "ddItem":
          dd = true;
          let subItem = document.createElement('li');
          subItem.classList.add('g__sub_item')

          if (r.icon){
            iconLink = document.createElement('i');
            iconLink.setAttribute('class', r.icon);
            subItem.appendChild(iconLink);
          }

          subLink = document.createElement('a');
          subLink.classList.add('g__sub_link');
          subLink.innerHTML = r.label || "Link";
          subItem.appendChild(subLink);

          arrDdItems.push(subItem);
        break;
        default:
          if(dd){
            let ddMenu = buildDd();
            navMain.appendChild(ddMenu);
            // Reset Values
            dd = false;
            arrDdItems = [];
            ddLabel = "";
            ddIcon = "";
          }
          item = document.createElement('li');
          item.classList.add('g__item')
          !!r.icon ? "" : item.classList.add('g__no_icon');
          if((String(o.icon_top) === "true") && (o.style === "top_bar")) {
            item.classList.add('g__icon_center')
          };

          if(!!r.icon){
            iconCont = document.createElement('div');
            iconCont.classList.add('g__icon_container');

            iconLink = document.createElement('i');
            iconLink.setAttribute('class', r.icon);
            iconCont.appendChild(iconLink);
            item.appendChild(iconCont);
          }

          link = document.createElement('a');
          link.classList.add('g__link');
          link.innerHTML = r.label || "Link";

          item.appendChild(link)

          navMain.appendChild(item);
          }
    });

    /*---------------------------------------------
    Build DOM Structure
    ---------------------------------------------*/
    navCont.appendChild(navMain);
    if(o.mobile_menu_style === "bottom"){
      var bottomNavCont = document.createElement('div');
      bottomNavCont.classList.add('g__nav__bottom_cont')
    }

    if(o.style === 'sidebar'){
      let collapseCont = document.createElement('div');
      collapseCont.classList.add('g__sidebar_collapse')

      collapseCont.addEventListener('click', () => {
      collapseCont.parentElement.parentElement.classList.toggle('g__collapse_active');
      iconCheck();
    })
      let collpaseIcon = document.createElement('i');
      collpaseIcon.setAttribute('class', 'far fa-chevron-left');
      collapseCont.appendChild(collpaseIcon);
      navCont.appendChild(collapseCont);
    }

    // Append the utility nav based on style
    switch(o.style) {
      case "sidebar":
        utilityCont.appendChild(navUtility);
        break;
      case "top_bar":
        navCont.appendChild(navUtility);
        break;
    }


    topBarCont.appendChild(navCont);

    granite_div.appendChild(topBarCont);
    granite_div.appendChild(bottomNavCont);
    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    // Build DD function
    function buildDd(){
      ddItem = document.createElement('li');
      ddItem.classList.add('g__item');
      ddItem.classList.add('g__item_dropdown');

      let ddItemCont = document.createElement('div');
      ddItemCont.classList.add('g__dd_item_container');
      ddItem.appendChild(ddItemCont);

      let ddlink = document.createElement('a');
      ddlink.classList.add('g__link');
      ddlink.innerHTML = ddLabel || "Link";
      ddItemCont.appendChild(ddlink);

      let ddArrow
      if (!!ddIcon){
        let ddIconArrow = document.createElement('div');
        ddIconArrow.classList.add('g__dd_icon_arrow');

        let icon = ddIcon;
        ddIcon = document.createElement('i');
        ddIcon.setAttribute('class', icon);
        ddIconArrow.appendChild(ddIcon);

        ddArrow = document.createElement('i');
        ddArrow.setAttribute('class', 'far fa-chevron-right g__dd_arrow');
        ddIconArrow.appendChild(ddArrow);

        ddItemCont.appendChild(ddIconArrow);
      } else {
        ddArrow = document.createElement('i');
        ddArrow.setAttribute('class', 'far fa-chevron-right');
        ddItemCont.appendChild(ddArrow);
      }

      let dropdownMenu = document.createElement('ul');
      dropdownMenu.classList.add('g__dropdown_menu');

      // Event Listener for dropdowns
      arrDdItems.forEach(item => {
        dropdownMenu.appendChild(item);
      });
      ddItem.appendChild(dropdownMenu);

      ddItem.addEventListener('click', function() {
        // dropdownMenu.classList.toggle('g__dd_active');
        dropdownMenu.parentElement.classList.toggle('g__dd_active');
      })

      return ddItem;
    }
    // Bottom nav CTA circle button
    if(String(o.mobile_bottom_cta) === "true" && o.mobile_menu_style === "bottom"){
      let navCont = granite_div.querySelector('.g__nav__bottom_cont');
      let nav = granite_div.querySelector('.g__nav_main');
      let navLinks = nav.children;

      let cta = document.createElement('li');
      cta.setAttribute('class', 'g__bottom_cta')

      let bottomIcon = o.mobile_bottom_icon || "fal fa-plus";
      let iconCta = document.createElement('i');
      iconCta.setAttribute('class', bottomIcon);
      cta.appendChild(iconCta);
      if(String(o.mobile_bottom_menu) === "true"){
        navCont.appendChild(cta);
        navCont.classList.add('g__bottom_menu');
      } else {
        if(navLinks.length > 2){
          nav.insertBefore(cta, navLinks[2]);
        }
        if(navLinks.length === 2){
          nav.style.justifyContent = "space-around";
          nav.insertBefore(cta, navLinks[1]);
        }
        if(navLinks.length === 0){
          nav.style.justifyContent = "center";
          nav.appendChild(cta);
        }
      }


    }
    // Bottom Moble Nav
    if(o.mobile_menu_style === "bottom"){
      bottomNav();
      window.onresize = bottomNav;
      function bottomNav(){
        console.log('resize');
        let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        if (viewportWidth < 991.98) {
            let navCont = granite_div.querySelector('.g__nav_cont');
            let mainNav = granite_div.querySelector('.g__nav_main');
            let utilityNav = granite_div.querySelector('.g__nav_utility');
            let navChildren = mainNav.children;
            let bottomCont = granite_div.querySelector('.g__nav__bottom_cont');

            bottomCont.appendChild(mainNav);
            // If sidebar - move the utility menu back into the nav container
            if(o.style === 'sidebar'){
              navCont.appendChild(utilityNav);
            }
            // Count the number of items excluding CTA.
            let linkCount = 0;
            let arrLinks =
            Array.from(navChildren).forEach(link => {
              let isCta = link.classList.contains('g__bottom_cta');
              if(!isCta){
                linkCount++;
              }
            });
            if (linkCount >= 5){
              let bottomMenu = document.createElement('ul');
              bottomMenu.classList.add('g__bottom_menu');

              Array.from(navChildren).forEach((link, count) => {
                let isCta = link.classList.contains('g__bottom_cta');
                if(!isCta && count > 3){
                  bottomMenu.appendChild(link)
                }
                if(count === 3){
                  let elipsisLink = document.createElement('li');
                  elipsisLink.classList.add('g__item');
                  elipsisLink.classList.add('g__bottom_ellipsis');
                  elipsisLink.innerHTML = '<i class="far fa-ellipsis-h"></i>';
                  mainNav.insertBefore(elipsisLink, mainNav[2]);
                  elipsisLink.addEventListener('click', () => {
                    bottomCont.classList.toggle('g__bottom_active');
                  })
                }
              })
              bottomCont.appendChild(bottomMenu);
            }
          }
        }
      }
      // Check for
      function iconCheck(){
        let arrLink = document.querySelectorAll('.g__item');
        arrLink.forEach( link => {
          let icon = link.nextSibling;
          if (!!icon){

          }
        })
      }


 // End main function
}