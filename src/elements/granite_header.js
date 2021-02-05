function granite_header(jsonHeader, jsonTheme){
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonHeader.id;
    const o = jsonHeader.options;
    const r = jsonHeader.records;
    const t = jsonTheme;
    const mode = t.mode || 'midight';
    const cssId = "#" + id;
    const granite_div = document.getElementById(id);
    /*---------------------------------------------
    Set The mode
    ---------------------------------------------*/
    granite_div.setAttribute('mode', mode);
    /*---------------------------------------------
    Attributes
    ---------------------------------------------*/
    //mode
    let font_color = mode === 'midnight' ? '#ffffff' : '#101010';
    //text
    let header_size = o.header_size || 'h2';
    let header_text = o.header_text || 'Heading';
    let text_color = o.text_color || font_color;
    let font_style = o.font_style || 'hero-new, sans-serif';
    let font_weight = o.font_weight || '300';
    //style
    let background_color = o.background_color || 'transparent';
    let border_width = o.border_width || 'none';
    let border_color = o.border_color || 'none';
    let border_radius = o.border_radius || '0';
    let header_padding_top = o.header_padding_top || '10px';
    let header_padding_right = o.header_padding_right || '25px';
    let header_padding_bottom = o.header_padding_bottom || '10px';
    let header_padding_left = o.header_padding_left || '25px';
    let header_margin_top = o.header_margin_top || '5px';
    let header_margin_right = o.header_margin_right || '5px';
    let header_margin_bottom = o.header_margin_bottom || '5px';
    let header_margin_left = o.header_margin_left || '5px';
    //layout
    let vertical_align = o.vertical_align || 'flex-start';
    let horizontal_align = o.horizontal_align || 'flex-start';
    let align_header = o.align_header || 'center'; //left,right, center
    let header_width = o.header_width || 'auto';
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
    CSS Block
    ---------------------------------------------*/
    var headerCss = document.createElement('style');
    headerCss.innerHTML = `
    ${cssId}{
        display: flex;
        justify-content: ${vertical_align};
        align-items: ${horizontal_align};
    }
    ${cssId} .g__elm_header{
        font-style: ${font_style};
        font-weight: ${font_weight};
        color: ${text_color};
        width: ${header_width};
        padding-top: ${header_padding_top};
        padding-right: ${header_padding_right};
        padding-bottom: ${header_padding_bottom};
        padding-left: ${header_padding_left};
        margin-top: ${header_margin_top};
        margin-right: ${header_margin_right};
        margin-bottom: ${header_margin_bottom};
        margin-left: ${header_margin_left};
        border-radius: ${border_radius};
        border: ${border_width} solid ${border_color};
        background: ${background_color};
    }
    `
    document.head.appendChild(headerCss);
    /*---------------------------------------------
    Wrapper and Element
    ---------------------------------------------*/
    const header = document.createElement(header_size);
    header.setAttribute('class','g__elm_header');
    header.innerHTML = header_text;
    /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
    granite_div.appendChild(header);
}