function granite_text(jsonText, jsonTheme){
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonText.id;
    const o = jsonText.options;
    const r = jsonText.records;
    const t = jsonTheme;
    const mode = !!t.mode ? t.mode : "midnight";
    const cssId = "#" + id;

    /*---------------------------------------------
    Check Alignment & Set Mode
    ---------------------------------------------*/
    let granite_div = document.getElementById(id);
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
    CSS
    ---------------------------------------------*/
    var textCss = document.createElement('style');
    textCss.innerHTML = `
    ${cssId}{
        --font-color: #101010;
    }

    ${cssId}[mode="midnight"]{
        --font-color: #ffffff;
    }

    ${cssId} .g__text_block{
        width: ${o.width || "auto"};
        padding: ${o.padding || "25px"};
        margin: ${o.padding || "25px"};
        border: ${o.border || "none"};
        color: var(--font-color);
    }
    `
    document.head.appendChild(textCss);

    let text_container = document.createElement('div');
        text_container.setAttribute('class', 'g__text_block');
        !!o.classes ? text_container.classList.add(o.classes) : "";
        text_container.innerHTML = o.text;

    /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
    granite_div.appendChild(text_container);
}