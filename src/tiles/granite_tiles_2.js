function granite_tiles_2(jsonTiles, jsonTheme) {
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
    ${cssId} .g__tiles_grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
    }
    ${cssId} .g__tile_container{
        display: flex;
        flex: 25% 0 0;
        box-sizing: border-box;
    }
    /* ----- Tiles Body ----- */
    ${cssId} .g__tile_body{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
        padding: ${o.padding || '15px'};
        height: var(--height);
        background: var(--background);
        width: 100%;
    }
    ${cssId} .g__tile_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-style: var(--font-regular);
        font-weight: 300;
    }
    ${cssId} .g__tile_body .g__tile_title{
        color: var(--font-color);
        font-size: ${o.header_size || '28px'}
        text-decoration: none;
        opacity: 1;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_cont{
        height: calc(var(--height) - 50%);
        overflow: auto;
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
        background: rgba(0, 0, 0, .5);
        color: var(--font-color);
        opacity: 0;
        transition: opacity .5s ease;
    }
    ${cssId} .g__desc_on_hover.g__desc_true .g__tile_body:hover .g__desc_cont {
        opacity: 1;
    }
    ${cssId} .g__desc_on_hover.g__desc_true .g__tile_body:hover .g__tile_title {
        opacity: 0;
    }
    ${cssId} .g__tile_body p{
        color: var(--font-color);
        text-align: center;
    }
    `
    document.head.appendChild(tilesStyles);

    /*---------------------------------------------
    Tiles body
    ---------------------------------------------*/
    let tile_wrapper = document.createElement('div');
    tile_wrapper.classList.add('g__tiles_grid');


    r.forEach( (r) => {
        let tile_container = document.createElement('div');
        tile_container.classList.add('g__tile_container');
        o.description_hover ? tile_container.classList.add('g__desc_on_hover') : '' ;
        !!r.description ? tile_container.classList.add('g__desc_true') : '' ;

        let tile_link = !!r.href ? document.createElement('a') : document.createElement('div');
        tile_link.classList.add('g__tile_body');
        !!r.href ? tile_link.href = r.href : '';
        !!r.target ? tile_link.target = r.target : '';
        !!r.background_color ? tile_link.style.backgroundColor = r.background_color : '';
        !!r.background_image ? tile_link.style.backgroundImage = `url(${r.background_image})` : '';
        !!r.background_image ? tile_link.style.backgroundSize = 'cover' : '';
        tile_container.appendChild(tile_link)

        let tile_content = document.createElement('div');
        tile_content.classList.add('g__tile_content');
        tile_link.appendChild(tile_content)

        if (!!r.icon){
            var tile_icon = document.createElement('div');
            tile_icon.classList.add('class','g__tile_icon');
            var icon = document.createElement('i');
            icon.setAttribute('class',r.icon);
            tile_icon.append(icon);
            tile_content.appendChild(tile_icon)
        }
        if (!!r.title){
            let tile_title = document.createElement('h3');
            tile_title.classList.add('g__tile_title')
            tile_title.innerHTML = r.title;
            tile_content.appendChild(tile_title)
        }

        if (!!r.description){
            let desc_cont = document.createElement('div');
            desc_cont.classList.add('g__desc_cont')
            let desc = document.createElement('p');
            desc.classList.add('g__tile_desc')
            desc.innerHTML = r.description;
            desc_cont.appendChild(desc)
            tile_content.appendChild(desc_cont)
        }

        tile_wrapper.appendChild(tile_container);
    })

    /*---------------------------------------------
    Append Tile Body to Granite Div
    ---------------------------------------------*/
    granite_div.appendChild(tile_wrapper);
}