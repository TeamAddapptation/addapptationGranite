function granite_tabs_v4(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const style = o.style || 'tabs';
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tabParam = urlParams.get('tab');
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
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  // Design
  let fontActive = o.highlight_color || fontActiveMode;
  let fontColor = o.font_color || fontColorMode;
  let linkBkgColor = o.Link_background_color || '#fddbee';
  // Stepper
  let stepSize = o.stepSize || "50px";
  // Layout
  let width = o.style === "tabs" ? "inline-flex" : "flex";
  let direction = o.direction || "row";
  // Layout
  let font = "hero-new, sans-serif;";
  let fontWeight = 300;
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
  let tabStyles = document.createElement('style');
    tabStyles.innerHTML = `
    /* ------------------------------
    Granite Div
    -------------------------------*/
    ${cssId}{
      margin-top: ${o.container_top_padding || '25px'};
      margin-bottom: ${o.container_bottom_padding || '25px'};
      position:relative;
    }
    /* ------------------------------
    Tabs Container
    -------------------------------*/
    ${cssId} .g__tabs_container{
      display: inline-flex;
      flex-direction: ${direction};
      justify-content: space-between;
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
    /* ------------------------------
    Tabs
    -------------------------------*/
    /*--- Tabs Line ---*/
    ${cssId} .g__tab_line .g__tab_wrap{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 20px;
    }
    ${cssId} .g__tab_line a.g__tab_link{
      display: flex;
      position: relative;
      color: ${fontColor};
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_wrap i{
      margin-right: 10px;
      color: ${fontColor};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_wrap:hover a.g__tab_link,
    ${cssId} .g__tab_line .g__tab_wrap:hover i{
      color: ${fontActive};
    }
    ${cssId} .g__tab_line .g__active a.g__tab_link{
      color: ${fontActive};
    }
    ${cssId} .g__tab_line .g__tab_wrap.g__active i{
      color: ${fontActive};
    }
    ${cssId} .g__tab_line .g__active{
      color: ${fontActive};
      border-bottom: 2px solid ${fontActive};
    }

    /*--- Tabs Block ---*/
    ${cssId} .g__tab_block .g__tab_wrap{
      display: flex;
      position: relative;
      padding: 10px 20px;
      margin: 5px;
      color: ${fontColor};
      text-decoration: none;
      background: ${linkBkgColor};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_block a.g__tab_link:hover{
      background: #054a5c;
    }

    /* ------------------------------
    Stepper
    -------------------------------*/
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
      color: ${fontColor};
      background: #a1a1a1;
      z-index: 5;
      width: ${stepSize};
      height: ${stepSize};
      transition: transform .5s ease;
    }
    ${cssId} .g__step:hover{
      transform: scale(1.10);
      cursor: pointer;
    }
    ${cssId} h3.g__step_title{
      color: ${fontColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: 1.5rem;
      margin-top: 10px;
    }
    ${cssId} p.g__step_desc{
      color: ${fontColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: .8rem;
    }
    /*---------- Stepper Horizontal ----------*/
    ${cssId} .g__step_container.g__step_horizontal:not(:last-child):after{
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      top: 25px;
      left: 100px;
      background: #a1a1a1;
    }
    ${cssId} .g__step_container.g__step_horizontal{
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      width: 200px;
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
    ${cssId} .g__step_container.g__step_vertical:not(:last-child):after{
      content: "";
      height: 100%;
      width: 3px;
      position: absolute;
      top: 100px;
      left: 25px;
      background: #a1a1a1;
    }
    ${cssId} .g__step_container.g__step_vertical{
      flex-direction: row;
      align-items: center;
      height: 150px;
    }
    ${cssId} .g__step_vertical .g__step_content{
      margin-left: 20px;
    }
    ${cssId} .g__step_vertical h3.g__step_title{
      text-align: left;
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
      z-index: 10;
    }
    ${cssId} .pn-advancer:focus {
      outline: 0;
    }
    ${cssId} .pn-advancer_left {
      left: 0;
      color: ${fontColor};
    }
    ${cssId} .pn-advancer_right {
      right: 0;
      color: ${fontColor};
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
    `
    document.head.appendChild(tabStyles);

    /*---------------------------------------------
    Tabs action row
    ---------------------------------------------*/
    let tabsActionRow = document.createElement('div');
    tabsActionRow.classList.add('g__tabs_action_row');

    if(o.title){
        let title = document.createElement('h2');
        title.classList.add('g__title');
        title.innerHTML = o.title;
        tabsActionRow.appendChild(title);
    }
    if(o.description){
        let description = document.createElement('p');
        description.classList.add('g__description');
        description.innerHTML = o.description;
        tabsActionRow.appendChild(description);
    }

    /*---------------------------------------------
    Tabs Build
    ---------------------------------------------*/
    granite_div.classList.add('g__' + style + '_style');

    let tabsWrapper = document.createElement('div');
    tabsWrapper.classList.add('g__tabs_wrapper');

    let tabsContainer = document.createElement('div');
    !!o.id ? tabsContainer.setAttribute('id', o.id) : '';
    tabsContainer.classList.add('g__tabs_container');
    style === "line_tabs" ? tabsContainer.classList.add('g__tab_line') : tabsContainer.classList.add('g__tab_block');
    !!o.classes ? tabsContainer.classList.add(o.classes) : "";
    tabsWrapper.appendChild(tabsContainer);

    //Loop through each record
    r.forEach( (r, count) => {
      switch(style) {
        case "step":
            let stepContainer = document.createElement('a');
            stepContainer.classList.add('g__step_container')
            stepContainer.href = tabHref(r.href, count);
            direction === "row" ? stepContainer.classList.add('g__step_horizontal') : stepContainer.classList.add('g__step_vertical');
            let stepLink = document.createElement('div');
            stepLink.classList.add('g__step');
            stepLink.innerHTML = count;
            stepContainer.appendChild(stepLink);
            if(r.name || r.desc){
              let stepContent = document.createElement('div');
              stepContent.classList.add('g__step_content');
              if(r.name){
                let stepTitle = document.createElement('h3');
                stepTitle.classList.add('g__step_title');
                stepTitle.innerHTML = r.name;
                stepContent.appendChild(stepTitle);
              }
              if(r.desc){
                let stepDesc = document.createElement('p');
                stepDesc.classList.add('g__step_desc');
                stepDesc.innerHTML = r.desc;
                stepContent.appendChild(stepDesc);
              }
              stepContainer.appendChild(stepContent);
            }
            tabsContainer.appendChild(stepContainer);
          break;
          case "line_tabs":
          case "tabs":
            let tabWrap = document.createElement('div');
            tabWrap.classList.add('g__tab_wrap');
            activeTab(r, count) ? tabWrap.classList.add('g__active') : "";

            if(!!r.icon){
              let tabIcon = document.createElement('i');
              tabIcon.setAttribute('class',r.icon);
              tabWrap.appendChild(tabIcon);
            }

            let tabLink = document.createElement('a') ;
            tabLink.classList.add('g__tab_link');
            tabLink.href = tabHref(r.href, count);
            tabLink.innerHTML = r.name || count;
            tabWrap.appendChild(tabLink)

            tabsContainer.appendChild(tabWrap)
          break;
        default:
          console.error('no style')
      }
    })

    granite_div.appendChild(tabsWrapper);
    /*---------------------------------------------
    Advancer Arrows
    ---------------------------------------------*/
    let leftAdvancer = document.createElement('button');
    leftAdvancer.setAttribute('class', 'pn-advancer pn-advancer_left');
    leftAdvancer.type = "button";
    leftAdvancer.innerHTML = "<i class='far fa-chevron-left'></i>"
    granite_div.appendChild(leftAdvancer);

    let rightAdvancer = document.createElement('button');
    rightAdvancer.setAttribute('class', 'pn-advancer pn-advancer_right');
    rightAdvancer.type = "button";
    rightAdvancer.innerHTML = "<i class='far fa-chevron-right'></i>";
    granite_div.appendChild(rightAdvancer);

    /*---------------------------------------------
    Build HREF
    ---------------------------------------------*/
    function tabHref(href, val){
      let ival = val + 1;
      let tval = ival;
      if(!!href && href.includes("tab=")){
        href = (!!href && href.length) ?
               (href.includes("?") ? href.replace(`tab=${tabParam}`, `tab=${tval}`) : href + `?tab=${tval}`)
               : queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
      } else {
        if(!!href && href.length){
          href = href.includes("?") ? href + `&tab=${tval}` : href + `?tab=${tval}`;
        } else {
          if(queryString.includes("tab=")){
            var x = queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
          } else {
              var x = queryString.includes("?") ? queryString + `&tab=${tval}` : queryString + `?tab=${tval}`
          }
        href = x;
        }
      }
      return href;
    }
    /*---------------------------------------------
    Active
    ---------------------------------------------*/
    function activeTab(r, val){
      let ival = val + 1;
      let href = tabHref(r.href, val);
      let isActive = (ival == tabParam) || (val == 0 && tabParam == null) || (!!tabParam && tabParam.includes(ival));
      return isActive
    }
    /*---------------------------------------------
    Overflow Arrows
    ---------------------------------------------*/
    var SETTINGS = {
      navBarTravelling: false,
      navBarDirection: "",
      navBarTravelDistance: 10
    }
    let gTabsContainer = granite_div.querySelector('.g__tabs_wrapper');
    let gContents = granite_div.querySelector(".g__tabs_container");
    var pnAdvancerLeft = granite_div.querySelector(".pn-advancer_left");
    var pnAdvancerRight = granite_div.querySelector(".pn-advancer_right");
    gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    // Handle the scroll of the horizontal container
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
      gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
    }

    gTabsContainer.addEventListener("scroll", function() {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                doSomething(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    });
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
    }

 // End main function
}