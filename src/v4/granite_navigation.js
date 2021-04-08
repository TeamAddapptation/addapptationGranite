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
  // Design
  let navBkg = o.background || navBkgMode;
  let headerLabelColor = o.header_label_color || fontColorMode;
  let headerLabelFontSize = o.header_label_font_size || "24px";
  let fontColor = o.font_color || fontColorMode;
  let fontColorHover = o.font_color_hover || fontHoverMode;
  let bkgColorHover = o.background_hover || hoverMode;

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
      padding: 15px;
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
      font-size: .8rem;
      padding: 5px 30px;
    }
    ${cssId} .g__top_bar .g__nav_main {
      display: flex;
      padding-left: 0;
      margin-bottom: 0;
      list-style: none;
    }
    ${cssId} .g__top_bar .g__nav_main .g__item {
      display: flex;
    }
    ${cssId} .g__top_bar .g__nav_main .g__item:hover {
      display: flex;
      background: ${bkgColorHover};
    }
    ${cssId} .g__top_bar .g__nav_main .g__item a {
      color: ${fontColor};
      padding: 10px 30px;
    }
    /* ------------------------------
    Top Bar Tablet
    -------------------------------*/
    @media (max-width: 991.98px) {
      .g_nav_cont{
        position: absolute;
      }
      .g_nav_cont .g__nav_utility{
        flex-direction: column
      }
      .g_nav_cont .g__nav_main{
        flex-direction: column
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
      color: ${fontColor};
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


    r.forEach((val) => {
      let item, link;
      switch(val.link_type) {
        case "utility":
          console.log("utility")
          item = document.createElement('li');
          item.classList.add('g__item_utility')

          link = document.createElement('a');
          link.classList.add('g__link_utility');
          link.innerHTML = val.label || "Link";
          item.appendChild(link)

          navUtility.appendChild(item);
          break;
        default:
          item = document.createElement('li');
          item.classList.add('g__item')

          link = document.createElement('a');
          link.classList.add('g__link');
          link.innerHTML = val.label || "Link";
          item.appendChild(link)

          navMain.appendChild(item);
      }
    })
    navCont.appendChild(navUtility);
    navCont.appendChild(navMain);

    topBarCont.appendChild(navCont);

    granite_div.appendChild(topBarCont);
    /*---------------------------------------------
    Functions
    ---------------------------------------------*/
    /* --------- Nav Height ------ */
    let nav = granite_div.querySelector('.g__top_bar');
    console.log(nav.offsetHeight);

 // End main function
}