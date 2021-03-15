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
  let fontColorMode = mode === "midnight" ? "#ffffff" : "#5d5d5d";
  let fontColorModeReverse = mode === "midnight" ? "#5d5d5d" : "#ffffff";
  let overlayColorMode = mode === "midnight" ? "#101010" : "#ffffff";
  let fontColor = o.font_color || fontColorMode;
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
  let tabStyles = document.createElement('style');
    tabStyles.innerHTML = `
    /* ------------------------ Global Styles ------------------------*/
    ${cssId}{
        /* Standard */
        --primary: #fff;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
        --height: ${o.height || '300px'};
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

        /* css */
        padding: 15px;
        margin-top: ${o.container_top_padding || '25px'};
        margin-bottom: ${o.container_bottom_padding || '25px'};
    }
    ${cssId} .g__tabs_container{
      display: inline-flex;
      flex-direction: column;
    }
    ${cssId} a.g__tab_link{
      display: flex;
      padding: 10px 20px;
      margin: 5px;
      color: ${fontColor};
      text-decoration: none;
      background: #08718c;
      transition: all .5s ease;
    }
    ${cssId} a.g__tab_link:hover{
      background: #054a5c;
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
    let tabsWrapper = document.createElement('div');
    !!o.id ? tabsWrapper.setAttribute('id', o.id) : '';
    tabsWrapper.classList.add('g__tabs');

    let tabsContainer = document.createElement('div');
    tabsContainer.classList.add('g__tabs_container');

    //Loop through each record
    r.forEach( (r, count) => {
      let tabLink
      switch(style) {
        case "stepper":
            tabLink = document.createElement('div') ;
            tabLink.classList.add('g__tab_step');
            tabLink.href = r.href || "#";
            tabLink.innerHTML = count;
          break;
        case "tabs":
            tabLink = document.createElement('a') ;
            tabLink.classList.add('g__tab_link');
            tabLink.href = r.href || "#";
            tabLink.innerHTML = r.name || count;
          break;
        default:
          console.error('no style')
      }


      tabsContainer.appendChild(tabLink)
    })

    granite_div.appendChild(tabsContainer);


 // End main function
}