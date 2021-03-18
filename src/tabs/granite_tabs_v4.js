function granite_tabs_v4(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
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
  let tabBkgMode = mode === "midnight" ? "#353535" : "#eaeaea";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let activeMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  // Design
  let fontSize = o.font_size || "16px";
  let titleSize = o.title_size || "18px";
  let descSize = o.description_size || "12px";
  let iconSize = o.icon_size || fontSize;
  let fontActiveColor = o.highlight_color || fontActiveMode;
  let fontColor = o.font_color || fontColorMode;
  let fontHoverColor = o.font_hover_color || fontHoverMode;
  let linkBkgColor = o.Link_background_color || '#fddbee';
  let tabBkg = o.background_color || tabBkgMode;
  let hoverColor = o.background_hover_color || hoverMode;
  let activeColor = o.background_active_color || activeMode;
  let borderWidth = o.border_width || "0";
  let borderColor = o.border_color || "transparent";
  // Stepper
  let stepSize = o.stepSize || "50px";
  // Layout
  let width = o.style === "tabs" ? "inline-flex" : "flex";
  let direction = o.direction || "row";
  let padding = o.padding || "10px 20px";
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
    /* ------------------------------------------------------------
    Tabs Container
    -------------------------------------------------------------*/
    ${cssId} .g__tabs_container{
      display: inline-flex;
      flex-direction: ${direction};
      justify-content: space-between;
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
    /* ------------------------------------------------------------
    Tabs Line
    -------------------------------------------------------------*/
    /*--- Tabs Line ---*/
    ${cssId} .g__tab_line .g__tab_line_wrap{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: ${padding};
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
    ${cssId} .g__tab_line .g__active a.g__tab_line_link,
    ${cssId} .g__tab_line .g__active.g__tab_line_wrap i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tabLine_line .g__tab_line_wrap.g__active i{
      color: ${activeColor};
    }
    ${cssId} .g__tab_line .g__active{
      color: ${activeColor};
      border-bottom: 2px solid ${fontActiveColor};
    }

    /* ------------------------------------------------------------
    Tabs Block
    -------------------------------------------------------------*/
    ${cssId} .g__tab_block a.g__tab_block_wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: ${padding};
      margin: 5px;
      color: ${fontColor};
      border-radius: 20px;
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
      background: ${fontActiveColor};
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
      color: ${fontColor};
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
      color: ${fontColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${titleSize};
      margin-top: 10px;
    }
    ${cssId} p.g__step_desc{
      color: ${fontColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${descSize};
    }
    /*---------- Stepper Horizontal ----------*/
    ${cssId} .g__step_container.g__step_horizontal:not(:last-child):after{
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      top: 25px;
      left: 100px;
      background: ${tabBkg};
    }
    ${cssId} .g__step_container.g__complete.g__step_horizontal:not(:last-child):after{
      background: ${activeColor};
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
      background: ${tabBkg};
    }
    ${cssId} .g__step_container.g__complete.g__step_vertical:not(:last-child):after{
      background: ${activeColor};
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
      z-index: 999;
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
    if(style === "line"){
      tabsContainer.classList.add('g__tab_line')
    } else if (style === "block"){
      tabsContainer.classList.add('g__tab_block')
    } else if(style === "chevron"){
      tabsContainer.classList.add('g__tab_chevron')
    }
    !!o.classes ? tabsContainer.classList.add(o.classes) : "";
    tabsWrapper.appendChild(tabsContainer);

    //Loop through each record
    r.forEach( (r, count) => {
      switch(style) {
        case "step":
            let isComplete = complete(count);
            let stepContainer = document.createElement('a');
            stepContainer.classList.add('g__step_container')
            activeTab(r, count) ? stepContainer.classList.add('g__active') : "";
            r.disabled ? stepContainer.classList.add('g__disabled') : "";
            isComplete ? stepContainer.classList.add('g__complete') : "";
            stepContainer.href = tabHref(r.href, count);
            direction === "row" ? stepContainer.classList.add('g__step_horizontal') : stepContainer.classList.add('g__step_vertical');
            let stepLink = document.createElement('div');
            stepLink.classList.add('g__step');
            stepLink.innerHTML = isComplete ? "<i class='far fa-check'></i>" : count + 1;
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
          case "line":
            let tabLineWrap = document.createElement('div');
            tabLineWrap.classList.add('g__tab_line_wrap');
            activeTab(r, count) ? tabLineWrap.classList.add('g__active') : "";

            if(!!r.icon){
              let tabLineIcon = document.createElement('i');
              tabLineIcon.setAttribute('class',r.icon);
              tabLineWrap.appendChild(tabLineIcon);
            }

            let tabLineLink = document.createElement('a') ;
            tabLineLink.classList.add('g__tab_line_link');
            tabLineLink.href = tabHref(r.href, count);
            tabLineLink.innerHTML = r.name || count;
            tabLineWrap.appendChild(tabLineLink)

            tabsContainer.appendChild(tabLineWrap)
          break;
          case "block":
            let tabWrap = document.createElement('a');
            tabWrap.classList.add('g__tab_block_wrap');
            tabWrap.href = tabHref(r.href, count);
            r.disabled ? tabWrap.classList.add('g__disabled') : "";
            activeTab(r, count) ? tabWrap.classList.add('g__active') : "";

            if(!!r.icon){
              let tabIcon = document.createElement('i');
              tabIcon.setAttribute('class',r.icon);
              tabWrap.appendChild(tabIcon);
            }
            let tabLink = document.createElement('p') ;
            tabLink.classList.add('g__tab_block_text');
            tabLink.innerHTML = r.name || count;
            tabWrap.appendChild(tabLink)

            tabsContainer.appendChild(tabWrap)
          break;
          case "chevron":
            let chevWrap = document.createElement('a');
            chevWrap.classList.add('g__tab_chevron_wrap');
            chevWrap.href = tabHref(r.href, count);
            chevWrap.style.zIndex = ((rCount - (count + 1)) * 10);
            r.disabled ? chevWrap.classList.add('g__disabled') : "";
            activeTab(r, count) ? chevWrap.classList.add('g__active') : "";

            if(!!r.icon){
              let chevIcon = document.createElement('i');
              chevIcon.setAttribute('class',r.icon);
              chevWrap.appendChild(chevIcon);
            }
            let chevLink = document.createElement('p') ;
            chevLink.classList.add('g__tab_chevron_text');
            chevLink.innerHTML = r.name || count;
            chevWrap.appendChild(chevLink)

            tabsContainer.appendChild(chevWrap)
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
    Complete
    ---------------------------------------------*/
    function complete(val){
      var ival = val + 1
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

    if(!!pnAdvancerLeft){
      pnAdvancerLeft.addEventListener("click", function() {
        console.log("Left " + SETTINGS.navBarTravelling)
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
        arrowReset()
      });

    }


    if(!!pnAdvancerRight){
      pnAdvancerRight.addEventListener("click", function() {
        console.log("Right " + SETTINGS.navBarTravelling)
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
        }
        // Now update the attribute in the DOM
        gTabsContainer.setAttribute("data-overflowing", determineOverflow(gContents, gTabsContainer));
        arrowReset()
      });

    }

      function arrowReset() {
        console.log('reset');
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
    }

 // End main function
}