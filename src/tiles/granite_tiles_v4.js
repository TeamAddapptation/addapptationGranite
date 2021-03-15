function granite_tiles_v4(jsonTiles, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonTiles.id;
    const o = jsonTiles.options;
    const r = jsonTiles.records;
    const t = jsonTheme;
    const mode = !!t.mode ? t.mode : "midnight";
    const cssId = "#" + id;
    const granite_div = document.getElementById(id);
    const fillRow = o.fillRow ? 1 : 0;
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
    Dynamic Variables
    ---------------------------------------------*/
    let columns;
    switch (o.columns){
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
    let fontColorMode = mode === "midnight" ? "#ffffff" : "#5d5d5d";
    let fontColorModeReverse = mode === "midnight" ? "#5d5d5d" : "#ffffff";
    let overlayColorMode = mode === "midnight" ? "#101010" : "#ffffff";
    let titleColor = o.header_color || fontColorMode;
    let descColor = o.description_color || fontColorMode;
    let iconColor = o.icon_color || fontColorMode;
    let overlay = o.filter_one || overlayColorMode;
    let hoverColor = o.hover_color || overlayColorMode;
    //Action Row
    let actionTitleColor = o.action_header_color || fontColorMode;
    let actionDescColor = o.action_description_color || fontColorMode;
    let actionBorder = o.action_border ? "1px solid var(--background)" : "0";

    let tilesStyles = document.createElement('style');
    tilesStyles.innerHTML = `
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
    /* ------
    Action Row
    ------*/
    ${cssId} .g__tiles_action_row{
        padding-bottom: ${o.body_content_top_padding || "25px"};
        margin-bottom: 25px;
        border-bottom: ${actionBorder}
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
        justify-content: space-between;
    }
    /* ------
    General Styles
    ------*/
    ${cssId} .g__tiles_grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
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
        opacity: ${ o.filter_one_opacity || ".5"};
    }
    /* ---------- Tiles Body ---------- */
    ${cssId} .g__tile_body{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: ${o.padding || '5px'};
        padding: 15px;
        height: var(--height);
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
        align-items: center;
        font-style: var(--font-regular);
        font-weight: 300;
        z-index: 5;
    }
    ${cssId} .g__tile_body .g__tile_icon{
        color: ${iconColor};
        font-size: ${o.icon_size || '75px'};
        text-align: ${o.layout || "center"};
    }
    ${cssId} .g__tile_body .g__tile_title{
        font-family: var(--font-regular);
        font-weight: 300;
        color: ${titleColor};
        font-size: ${o.header_size || '28px'};
        text-align: ${o.layout || "center"};
        hyphens: auto;
        text-decoration: none;
        opacity: 1;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_cont{
        font-family: var(--font-regular);
        font-weight: 300;
        height: calc(var(--height) - 50%);
        overflow: auto;
        font-size: ${o.description_size};
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
        // background: rgba(0, 0, 0, .5);
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
        text-align: center;
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
        justify-content: ${o.pagination_info_text ? 'space-between' : 'flex-end'};
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
    `
    document.head.appendChild(tilesStyles);
    /*---------------------------------------------
    Tiles action row
    ---------------------------------------------*/
    let tileActionRow = document.createElement('div');
    tileActionRow.classList.add('g__tiles_action_row');

    if(o.title){
        let title = document.createElement('h2');
        title.classList.add('g__title');
        title.innerHTML = o.title;
        tileActionRow.appendChild(title);
    }
    if(o.description){
        let description = document.createElement('p');
        description.classList.add('g__description');
        description.innerHTML = o.description;
        tileActionRow.appendChild(description);
    }
    let tileFilters= document.createElement('div');
    tileFilters.classList.add('g__tiles_filters');

    /* Order By */
    let orderWrap = document.createElement('div');
    orderWrap.classList.add('g__tile_filter_wrap');
    let orderSelect = document.createElement('select');
    orderSelect.classList.add('g__tile_order_filter');
    const filterOptions = ["Order By", "Asc", "Desc"];
    filterOptions.forEach((val, count) => {
        let option = document.createElement("option");
        option.innerHTML = val;
        option.value = val;
        if(count === 0){
            option.hidden = true;
            option.disabled = true;
            option.selected = true;
        }
        orderSelect.appendChild(option);
    })
    orderSelect.addEventListener('change', (e) => {
        orderFilter(e.target.value)
    })
    orderWrap.appendChild(orderSelect);
    tileFilters.appendChild(orderWrap);
    tileActionRow.appendChild(tileFilters);

    /* Search */
    if(o.search){
        let searchWrap = document.createElement('div');
        searchWrap.classList.add('g__tile_search_wrap');
        let searchIcon = document.createElement('div');
        searchIcon.classList.add('g__search_icon');
        searchIcon.innerHTML = '<i class="far fa-search"></i>';
        searchWrap.appendChild(searchIcon);
        let searchBar = document.createElement("input");
        searchBar.type = 'text';
        searchBar.classList.add('g__tile_search');
        searchBar.addEventListener('focus', (e) => {
            tileIconFocus(e)
        });
        searchBar.addEventListener('focusout', (e) => {
            tileIconFocusOut(e)
        });
        searchBar.addEventListener('input', (e) => {
            tileSearch(e)
        });
        searchWrap.appendChild(searchBar);
        tileFilters.appendChild(searchWrap);
    }

    /*---------------------------------------------
    Tiles body
    ---------------------------------------------*/
    let tile_wrapper = document.createElement('div');
    !!o.id ? tile_wrapper.setAttribute('id', o.id) : '';
    tile_wrapper.classList.add('g__tiles_grid');

    r.forEach( (r) => {
        let tileContainer = document.createElement('div');
        !!r.id ? tileContainer.setAttribute('id', r.id) : '';
        tileContainer.classList.add('g__tile_container');
        !!r.classes ? tileContainer.classList.add(r.classes) : '';
        o.description_hover ? tileContainer.classList.add('g__desc_on_hover') : tileContainer.classList.add('g__desc_no_hover') ;
        !!r.description ? tileContainer.classList.add('g__desc_true') : '' ;

        let tileLink = !!r.href ? document.createElement('a') : document.createElement('div');
        tileLink.classList.add('g__tile_body');
        o.loader ? tileLink.classList.add('show_loader') : "";
        !!r.href ? tileLink.href = r.href : '';
        !!r.target ? tileLink.target = r.target : '';
        !!r.sidepane ? tileLink.classList.add('A__side_pane_link') : "";
        !!r.background_color ? tileLink.style.backgroundColor = r.background_color : '';
        !!r.background_image ? tileLink.style.backgroundImage = `url(${r.background_image})` : '';
        !!r.background_image ? tileLink.style.backgroundSize = 'cover' : '';
        tileContainer.appendChild(tileLink)

        if (!o.no_overlay){
            let overlay = document.createElement('div');
            overlay.classList.add('g__tile_overlay');
            tileLink.appendChild(overlay);
        }

        let tileContent = document.createElement('div');
        tileContent.classList.add('g__tile_content');
        tileLink.appendChild(tileContent)

        if (!!r.icon){
            var tileIcon = document.createElement('div');
            tileIcon.classList.add('class','g__tile_icon');
            var icon = document.createElement('i');
            icon.setAttribute('class',r.icon);
            tileIcon.append(icon);
            tileContent.appendChild(tileIcon)
        }
        if (!!r.title){
            let tile_title = document.createElement('h3');
            tile_title.classList.add('g__tile_title')
            tile_title.innerHTML = r.title;
            tileContent.appendChild(tile_title)
        }

        if (!!r.description){
            let descCont = document.createElement('div');
            descCont.classList.add('g__desc_cont')
            let desc = document.createElement('p');
            desc.classList.add('g__tile_desc')
            desc.innerHTML = r.description;
            descCont.appendChild(desc)
            tileContent.appendChild(descCont)
        }

        tile_wrapper.appendChild(tileContainer);
    })

    /*---------------------------------------------
    Append Tile Body to Granite Div
    ---------------------------------------------*/
    granite_div.appendChild(tileActionRow);
    granite_div.appendChild(tile_wrapper);

    /*---------------------------------------------
    Functions
    ---------------------------------------------*/

    /*----- Order Filter -----*/
    function orderFilter(order){
        let tileContainer = granite_div.querySelector('.g__tiles_grid');
        let allTiles = granite_div.querySelectorAll('.g__tile_container');
        let tileArr = []
        allTiles.forEach(tile => {
            let tileInfo = [];
            let title = tile.querySelector(".g__tile_title").innerHTML;
            tileInfo.push(title);
            tileInfo.push(tile);
            tileArr.push(tileInfo);
        })
        if(order === ("Asc" || "Dsc")){
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
              })
        }
        order === "Desc" ? tileArr.reverse() : "" ;
        // Update the DOM
        tileContainer.innerHTML = "";
        tileArr.forEach(tile => {
            tileContainer.appendChild(tile[1]);
        })
    }
    /*----- Search Bar Icon -----*/
    function tileIconFocus(e){
        let icon = e.target.previousElementSibling;
        icon.classList.add('search_active');
    }
    function tileIconFocusOut(e){
        let icon = e.target.previousElementSibling;
        let content = e.target.value.length;
        if(!content){
            icon.classList.remove('search_active');
        }
    }
    /*----- Search Bar -----*/
    function tileSearch(e){
        var input, filter, tiles, t, a, i, body, txtValue, bodyValue, parent, content;
        filter = e.target.value.toUpperCase();
        parent = document.getElementById(id);
        t = parent.getElementsByClassName('g__tile_container');
        for (i = 0; i < t.length; i++) {
            a = t[i].getElementsByClassName("g__tile_title")[0];
            body = t[i].getElementsByClassName("g__tile_desc")[0];
            content = ''
            if(a != undefined){
                txtValue = a.textContent || a.innerText;
                content += txtValue;
            }
            if(body != undefined){
                bodyValue = body.textContent || body.innerText;
                content += ' ' + bodyValue;
            }
            if (content.toUpperCase().indexOf(filter) > -1) {
                t[i].style.display = "";
                t[i].classList.remove('g__pagination_hidden');
                } else {
                t[i].style.display = "none";
            }
            content = '';
        }
    }
    /*---------------------------------------------
    Pagination
    ---------------------------------------------*/
    if(o.pagination){
        const tiles_per_page = parseInt(o.tiles_per_page) || 25;
        let current_page = 1;
        const arr_tiles = document.querySelectorAll('.g__tile_container');
        let page_count = Math.ceil(arr_tiles.length / tiles_per_page);

        let pagination_wrapper = document.createElement('div');
        pagination_wrapper.classList.add('g__pagination_wrapper');
        granite_div.appendChild(pagination_wrapper);

        if(o.pagination_info_text){
          let info_text = document.createElement('div');
          info_text.id = 'g__info_text';
          pagination_wrapper.appendChild(info_text);
        }

        let pagination_container = document.createElement('ul')
        pagination_container.classList.add('g__pagination_container');

        let paginated_back = document.createElement('li');
        paginated_back.id = 'g__pagination_back';
        paginated_back.innerHTML = '<i class="fal fa-angle-double-left"></i>';
        pagination_container.appendChild(paginated_back);
        for (let i = 1; i < page_count + 1; i++) {
          let paginated_button = document.createElement('li');
          paginated_button.classList.add('g__pagination_page')
          paginated_button.innerText = i;
          current_page == i ? paginated_button.classList.add('active'): '';
          pagination_container.appendChild(paginated_button);
          pagination_wrapper.appendChild(pagination_container);

          paginated_button.addEventListener('click', function () {
            let page_num = paginated_button.innerText;
            current_page = parseInt(page_num);
            displayTiles(current_page, arr_tiles, tiles_per_page);
            let current_btn = document.querySelector('.g__pagination_container li.active');
            current_btn.classList.remove('active');
            paginated_button.classList.add('active');
          });
        }
        let paginated_forward = document.createElement('li');
          paginated_forward.id = 'g__pagination_next';
          paginated_forward.innerHTML = '<i class="fal fa-angle-double-right"></i>';
          pagination_container.appendChild(paginated_forward);

        function displayTiles(current_page, arr_tiles, tiles_per_page){
          let tiles_max = current_page * tiles_per_page;
          let tiles_min = tiles_max - tiles_per_page;
          if(o.pagination_info_text){
            let info = document.getElementById('g__info_text');
            info.innerHTML = `<p>Showing ${tiles_min + 1} to ${tiles_max} of ${arr_tiles.length}</p>`
          }
          arr_tiles.forEach((tile, num) => {
            tile.classList.add('g__pagination_hidden');
            tile.classList.remove('g__pagination_show');
            if(num < tiles_max && num >= tiles_min){
              tile.classList.add('g__pagination_show');
            }
          })
        }
        function backNextBtn(btn, direction){
            btn.addEventListener('click', () => {
              let parent = btn.parentElement;
              let pages = parent.children;
              let page_count = pages.length - 2;
              let active_page;
              let next_page;
              for (let i = 1; i < pages.length; i++) {
                let is_active = pages[i].classList.contains('active');
                if(is_active){
                  active_page = pages[i].innerText;
                  next_page = direction ? pages[i+1] : pages[i-1];
                }
              }
              if((direction && active_page < page_count) || (!direction && active_page != 1)){
                current_page = direction ? parseInt(active_page) + 1 : parseInt(active_page) - 1;
                displayTiles(current_page, arr_tiles, tiles_per_page)
                let current_btn = document.querySelector('.g__pagination_container li.active');
                current_btn.classList.remove('active');
                next_page.classList.add('active');
              }
            })
          };

          let next_btn = document.getElementById('g__pagination_next');
          let back_btn = document.getElementById('g__pagination_back');
          backNextBtn(next_btn, true);
          backNextBtn(back_btn, false);


          displayTiles(current_page, arr_tiles, tiles_per_page)
    }
}