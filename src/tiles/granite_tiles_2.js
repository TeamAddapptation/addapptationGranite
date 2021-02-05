function granite_tiles_2(jsonTiles, jsonTheme) {
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonTiles.id;
    const o = jsonTiles.options;
    const r = jsonTiles.records;
    const t = jsonTheme;
    const cssId = "#" + id;
    const granite_div = document.getElementById(id);
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
    }
    ${cssId} .g__tiles_body{
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
    ${cssId} .g__tile_body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
        height: var(--height);
        background: green;
        width: 100%;
        overflow: auto;
    }
    `
    document.head.appendChild(tilesStyles);

    /*---------------------------------------------
    Tiles body
    ---------------------------------------------*/
    let tile_wrapper = document.createElement('div');
    tile_wrapper.classList.add('g__tiles_body');


    r.forEach( (r) => {
        let tile_container = document.createElement('div');
        tile_container.classList.add('g__tile_container');

        let tile_link = !!r.href ? document.createElement('a') : document.createElement('div');
        tile_link.classList.add('g__tile_body');
        !!r.href ? tile_link.href = r.href : '';
        !!r.target ? tile_link.target = r.target : '';

        let tile_content = document.createElement('div');
        tile_content.classList.add('g__tile_content');

        let tile_title = document.createElement('h3');
        tile_title.classList.add('g__tile_title')
        tile_title.innerHTML = r.title;

        let tile_desc = document.createElement('p');
        tile_desc.classList.add('g__tile_desc')
        tile_desc.innerHTML = r.description;

        tile_container.appendChild(tile_link)
            tile_link.appendChild(tile_content)
                tile_content.appendChild(tile_title)
                    tile_content.appendChild(tile_desc)

        tile_wrapper.appendChild(tile_container);
    })

    /*---------------------------------------------
    Append Tile Body to Granite Div
    ---------------------------------------------*/
    granite_div.appendChild(tile_wrapper);
}