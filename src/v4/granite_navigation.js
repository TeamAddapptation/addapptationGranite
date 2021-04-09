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
  let headerLabelFontSize = o.header_label_font_size || "24px";
  let fontColor = o.font_color || fontColorMode;
  let fontColorHover = o.font_color_hover || fontHoverMode;
  let bkgColorHover = o.background_hover || hoverMode;
  let dividerLineColor = o.divider_line_color || lightGray;

  // Font
  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
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
    Top Bar
    -------------------------------*/
    ${cssId} .g__top_bar{
      display: flex;
      height: ${navHeight};
      position: relative;
      background: ${navBkg};
      justify-content: space-between;
      align-items: center;
    }
    ${cssId} .g__top_bar .g__logo_cont{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 15px;
    }
    ${cssId} .g__top_bar .g__logo{
      width: 50px;
      height: auto;
    }
    ${cssId} .g__top_bar .g__logo_label{
      color: ${headerLabelColor};
      font-size: ${headerLabelFontSize};
      margin-left: 15px;
    }
    ${cssId} .g__top_bar .g_nav_cont {
      display: flex;
      flex-direction: column;
    }
    ${cssId} .g__top_bar .g__nav_utility {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      justify-content: flex-end;
    }
    ${cssId} .g__top_bar .g__nav_utility .g__item_utility {
      display: flex;
      color: ${fontColor};
      order: 1;
      font-size: .8rem;
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
      position: relative
    }
    ${cssId} .g__top_bar .g__nav_main .g__item:hover {
      display: flex;
      background: ${bkgColorHover};
    }
    ${cssId} .g__top_bar .g__nav_main .g__item a {
      color: ${fontColor};
      padding: ${desktopPadding};
    }
    /* -------------------------Top Bar Dropdown --------------------------*/
    ${cssId} .g__top_bar ul.g__dropdown_menu{
      position: absolute;
      top: 30px;
      left: 0;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      background: ${navBkg};
    }
    /* ------------------------------
    Top Bar Tablet
    -------------------------------*/
    @media (max-width: 991.98px) {
      ${cssId} .g__top_bar .g_nav_cont{
        position: absolute;
        flex-direction: column;
        top: ${navHeight};
        right: 0;
        left: 0;
        background: ${navBkg};
        height: calc(100vh - ${navHeight})
      }
      ${cssId} .g_nav_cont .g__nav_utility{
        order: 2;
        flex-direction: column;
        margin-top: auto;
        align-items: center;
      }
      ${cssId} .g_nav_cont .g__nav_main{
        order: 1;
        flex-direction: column;
      }
      ${cssId} .g_nav_cont .g__nav_main .g__item{
        border-bottom: 1px solid ${dividerLineColor};
      }
      ${cssId} .g_nav_cont .g__nav_main .g__item a{
        padding: ${mobilePadding};
      }
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
    }
    ${cssId} .g__sidebar .g__logo_cont{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }
    ${cssId} .g__sidebar .g__logo{
      width: 50px;
      height: auto;
    }
    ${cssId} .g__sidebar .g__logo_label{
      color: ${headerLabelColor};
      font-size: ${headerLabelFontSize};
      margin-left: 15px;
    }
    ${cssId} .g__sidebar .g_nav_cont {
      display: flex;
      flex-direction: column-reverse;
    }
    ${cssId} .g__sidebar .g__nav_utility {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
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
      margin-bottom: 0;
      list-style: none;
    }
    ${cssId} .g__sidebar .g__nav_main .g__item {
      display: flex;
      flex-direction: column;
      color: ${fontColor};
      padding: 5px 10px;
    }
    /* -------------------------Sidebar Dropdown --------------------------*/
    ${cssId} .g__sidebar ul.g__dropdown_menu{
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
      background: ${navBkg};
      max-height: 300px;
      opacity: 1;
      visibility: visible;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu.g__hidden{
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      transition: all .5s ease;
    }
    ${cssId} .g__sidebar ul.g__dropdown_menu .g__sub_item a{
      display: flex;
      padding: 5px 10px;
    }

    `
    document.head.appendChild(navStyles);
    /*---------------------------------------------
    Check for records
    ---------------------------------------------*/
    if(!rCount){
      granite_div.classList.add('g__no_records');
      granite_div.innerHTML = "<h2>Navigation</h2>";
      return;
    }
    /*---------------------------------------------
    Navigation builder
    ---------------------------------------------*/
    let topBarCont = document.createElement('div');
    topBarCont.classList.add(`g__${style}`);

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


    topBarCont.appendChild(logoCont);

    /* ------------ Links -----------*/
    let navCont = document.createElement('div');
    navCont.classList.add('g_nav_cont')

    let navMain = document.createElement('ul');
    navMain.classList.add('g__nav_main');

    let navUtility = document.createElement('ul');
    navUtility.classList.add('g__nav_utility');

    /* ------------ Dropdown -----------*/
    let dd = false;
    let ddLabel;
    let arrDdItems = [];

    /* ------------ Main Loop -----------*/
    r.forEach( r => {
      String(r.submenu_header) === 'true' ? r.link_type = "ddHeader" :  "" ;
      String(r.submenu) === 'true' ? r.link_type = "ddItem" :  "" ;
      let item, link;
      switch(r.link_type) {
        case "utility":
          item = document.createElement('li');
          item.classList.add('g__item_utility')

          link = document.createElement('a');
          link.classList.add('g__link_utility');
          link.innerHTML = r.label || "Link";
          item.appendChild(link)

          navUtility.appendChild(item);
          break;
        case "ddHeader":
          ddLabel = r.label || "Dropdown";
          dd = true;
        break;
        case "ddItem":
          dd = true;
          let subItem = document.createElement('li');
          subItem.classList.add('g__sub_item')

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
            dd = false;
            arrDdItems = [];
            ddLabel = "";
          }
          item = document.createElement('li');
          item.classList.add('g__item')

          link = document.createElement('a');
          link.classList.add('g__link');
          link.innerHTML = r.label || "Link";

          item.appendChild(link)

          navMain.appendChild(item);
          }
    });
    navCont.appendChild(navUtility);
    navCont.appendChild(navMain);

    topBarCont.appendChild(navCont);

    granite_div.appendChild(topBarCont);
    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    function buildDd(){
      console.log("dd Function")
      ddItem = document.createElement('li');
      ddItem.classList.add('g__item');
      ddItem.classList.add('g__item_dropdown');

      let ddlink = document.createElement('a');
      ddlink.classList.add('g__link');
      ddlink.innerHTML = ddLabel || "Link";
      ddItem.appendChild(ddlink);

      let dropdownMenu = document.createElement('ul');
      dropdownMenu.classList.add('g__dropdown_menu');
      dropdownMenu.classList.add('g__hidden');
      arrDdItems.forEach(item => {
        dropdownMenu.appendChild(item);
      });
      ddItem.appendChild(dropdownMenu);

      ddItem.addEventListener('click', function() {
        dropdownMenu.classList.toggle('g__hidden');
      })

      return ddItem;
    }
 // End main function
}