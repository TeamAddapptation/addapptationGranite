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
    //action
    let btn_url = o.btn_url || '';
    let btn_target = o.btn_target ? '_blank' : '_self';
    let btn_classes = o.btn_classes;
    let btn_id = o.btn_id;

    //text
    let btn_text = o.btn_text || 'Click Here';
    let text_color = o.text_color || '#ffffff';
    let font_size = o.text_size || '16px';
    let font_style = o.font_style || 'hero-new, sans-serif';
    let font_weight = o.font_weight || '300';

    //style
    let btn_color = o.button_color || t.primary || '#D44697';
    let border_width = o.border_width || '2px';
    let border_color = o.border_color || btn_color;
    let border_radius = o.border_radius || '4px';
    let btn_padding = o.btn_padding || '10px 25px';
    let btn_margin = o.btn_margin || '5px 5px 5px 5px';

    //hover
    let btn_color_hover = o.btn_color_hover || t.secondary || '#FF8BCD';
    let text_color_hover = o.text_color_hover || '#ffffff';
    let border_width_hover = o.border_width_hover || '2px';
    let border_color_hover = o.border_color_hover || btn_color_hover;

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
        font-size: ${font_size};
        color: ${text_color};
        width: ${btn_width};
        padding: ${btn_padding};
        margin: ${btn_margin};
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
    let button;
    if(!!btn_url){
        button = document.createElement('a');
        !!o.btn_classes ? button.setAttribute('class', o.btn_classes): '';
        button.classList.add('g__elm_btn');
        !!o.btn_id ? button.id = o.btn_id : '';
        o.btn_disabled ? button.disabled = o.btn_disabled  : '';
        button.href = btn_url;
        button.target = btn_target;
        button.innerHTML = btn_text;
    } else {
        button = document.createElement('button');
        !!o.btn_classes ? button.setAttribute('class', o.btn_classes): '';
        button.classList.add('g__elm_btn');
        !!o.btn_id ? button.id = o.btn_id : '';
        button.type = btn_type;
        button.target = btn_target;
        button.innerHTML = btn_text;
    }


    /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
    granite_div.appendChild(button);
}