function granite_button(jsonButton, jsonTheme){
    /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
    const id = jsonButton.id;
    const o = jsonButton.options;
    const r = jsonButton.records;
    const t = jsonTheme;
    const mode = t.mode || 'midnight';
    const cssId = "#" + id;
    const granite_div = document.getElementById(id);

    /*---------------------------------------------
    Set The mode
    ---------------------------------------------*/
    granite_div.setAttribute('mode', mode);

    /*---------------------------------------------
    Attributes
    ---------------------------------------------*/
    //text
    let btn_text = o.btn_text || 'Click Here';
    let text_color = o.text_color || '#ffffff';
    let font_style = o.font_style || 'hero-new, sans-serif';
    let font_weight = o.font_weight || '300';

    //style
    let btn_color = o.button_color || t.primary || '#D44697';
    let border_width = o.border_width || '2px';
    let border_color = o.border_color || btn_color;
    let border_radius = o.border_radius || '4px';
    let btn_padding_top = o.btn_padding_top || '10px';
    let btn_padding_right = o.btn_padding_right || '25px';
    let btn_padding_bottom = o.btn_padding_bottom || '10px';
    let btn_padding_left = o.btn_padding_left || '25px';
    let btn_margin_top = o.btn_margin_top || '5px';
    let btn_margin_right = o.btn_margin_right || '5px';
    let btn_margin_bottom = o.btn_margin_bottom || '5px';
    let btn_margin_left = o.btn_margin_left || '5px';

    //hover
    let btn_color_hover = o.button_color_hover || t.secondary || '#FF8BCD';
    let text_color_hover = o.text_color_hover || '#ffffff';
    let border_width_hover = o.border_width_hover || '2px';
    let border_color_hover = o.border_color_hover || btn_color;

    //layout
    let align_btn = o.align_btn || "flex-start";
    let btn_width = o.btn_width || 'auto';

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
    var buttonCss = document.createElement('style');
    buttonCss.innerHTML = `
    ${cssId}{
        display: flex;
        justify-content: ${align_btn};
    }
    ${cssId} .g__elm_btn{
        font-style: ${font_style};
        font-weight: ${font_weight};
        color: ${text_color};
        width: ${btn_width};
        padding-top: ${btn_padding_top};
        padding-right: ${btn_padding_right};
        padding-bottom: ${btn_padding_bottom};
        padding-left: ${btn_padding_left};
        margin-top: ${btn_margin_top};
        margin-right: ${btn_margin_right};
        margin-bottom: ${btn_margin_bottom};
        margin-left: ${btn_margin_left};
        border-radius: ${border_radius};
        border: ${border_width} solid ${border_color};
        background: ${btn_color};
        transition: all .5s ease;
    }
    ${cssId} .g__elm_btn:hover{
        background: ${btn_color_hover};
        color: ${text_color_hover};
        border: ${border_width_hover} solid ${border_color_hover};
        cursor: pointer;
    }
    `
    document.head.appendChild(buttonCss);
    /*---------------------------------------------
    Wrapper
    ---------------------------------------------*/
    const button = document.createElement('a');
    button.setAttribute('class','g__elm_btn');
    button.innerHTML = btn_text;

    /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
    granite_div.appendChild(button);
}