function granite_form(formsBlock, jsonTheme){
    const id = formsBlock.id;
    const o = formsBlock.options;
    const r = formsBlock.records;
    const t = jsonTheme;
    const mode = !!t.mode ? t.mode : "midnight";
    const cssId = '#' + id;
    // micro settings attributes
    const attr__action = o.addapptation_action || '';
    const attr__form_id = o.form_id || '';
    const attr__method = o.method || 'POST';
    const attr__enctype = o.enctype || 'application/x-www-form-urlencoded';
    /* -------------------- Check Alignment & Set Mode ----------------------*/
    let granite_div = document.getElementById(id);
    if (granite_div === null){
        console.error('Object ID and Granite Div ID Do Not Match')
    } else {
        granite_div.setAttribute('mode', mode);
    }
    /* -------------------- Fonts ----------------------*/
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
    /* -------------------- Safari Check ----------------------*/
    var is_safari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    console.log(is_safari);
    /* -------------------- CSS ----------------------*/
    let primary = t.primary || "#D44697";

    let formStyles = document.createElement('style');
    formStyles.innerHTML = `
    /* ------------------------ Global Styles ------------------------*/
    ${cssId}{
        /* Standard */
        --primary: ${primary};
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
        --border-radius: 2px;
        --field-padding: 0.375rem 0.75rem;
        --field-height: 37px;
        --error-color: #ea386e;

        /* Mode Dependent */
        --background: #eaeaea;
        --background-reverse: #000000;
        --background-range: #eaeaea;
        --background-hover: #eeeeee;
        --body: #ffffff;
        --font-color-reverse: #f5f5f5;
        --border: 0px solid #5d5d5d;
        --font-color: #5d5d5d;

        /* css */
        padding: 15px;
    }
    ${cssId}[mode="midnight"],
    #ui-datepicker-div[mode="midnight"]{
        --background: #2a2a2a;
        --background-reverse: #ffffff;
        --background-range: #2a2a2a;
        --background-hover: #3b3b3b;
        --body: #101010;
        --border: 1px solid #2a2a2a;
        --font-color: #ffffff;
    }
    /* ------------------------ Global Field Styles ------------------------*/
    ${cssId} .g__inline_row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    ${cssId} .g__form_field{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        display: flex;
        flex-direction: column;
        margin: 15px;
        flex: 1;
    }
    ${cssId} .g__field_info{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    ${cssId} .g__form_field label{
        position: relative;
        color: var(--font-color);
        justify-content: flex-start;
        margin-bottom: 5px;
    }
    ${cssId} .g__char_remain{
        display: flex;
        margin-left: auto;
        padding: 0;
        color: var(--font-color);
        font-size: .8rem;
        margin-bottom: 5px;
    }
    ${cssId} .required:after{
        content:" *";
        font-size: .7rem;
        position: absolute;
        margin-left: 4px;
        color: var(--font-color);
      }
    ${cssId} .g__form_field input.invalid{
        border-right: 1px solid var(--error-color);;
    }
    ${cssId} .g__form_field input.valid{
        border-bottom: 1px solid green;
    }
    ${cssId} .g__error_msg{
        display: flex;
        justify-content: flex-end;
        padding: 5px 0;
        color: var(--error-color);
        font-size: .8rem;
    }
    ${cssId} .g__form_field input:disabled {
        color: #202020;
        background: #202020;
    }
    ${cssId} .g__form_field input{
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        color: var(--font-color);
        font-size: 1rem;
        padding: 0.375rem 0.75rem;
        outline: none;
    }

    ${cssId} button{
        cursor: pointer;
    }
    ${cssId} #g__submit_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: var(--primary);
        padding: 10px 50px;
        color: #ffffff;
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
    }
    ${cssId} #g__cancel_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: #5d5d5d;
        padding: 10px 50px;
        color: #ffffff;
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
    }
    ${cssId} input:-webkit-autofill,
    ${cssId} input:-webkit-autofill:hover,
    ${cssId} input:-webkit-autofill:focus{
        border: var(--border);
        -webkit-text-fill-color: var(--font-color);
        -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    /* ------------------------ Content ------------------------------*/
    ${cssId} .g__form_header{
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
    }
    ${cssId} .g__form_description{
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
    }
    /* ------------------------ Section ------------------------------*/
    ${cssId} .g__form_section_container{
        margin-top: 50px;
    }
    ${cssId} .g__form_section{
        max-height: 0;
        overflow: hidden;
        margin: 0 15px;
        transition: max-height 0.5s ease-out;
    }
    ${cssId} .g__form_section.active{
        display: block;
        margin: 0 15px;
    }
    ${cssId} .g__section_header{
        display: flex;
        flex-direction: row;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
        color: var(--font-color);
        margin: 15px;
    }
    ${cssId} .g__section_header .g__section_title{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        flex-direction: row;
    }
    ${cssId} .g__section_header .g__section_line{
        flex: 1;
        height: 2px;
        background: var(--font-color);
        margin-left: 25px;
        margin-right: 25px;
    }
    ${cssId} .g__section_header .g__section_icon{
        transition: transform 0.3s;
        color: var(--font-color);
    }
    ${cssId} .g__section_header.active .g__section_icon{
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
    }
    /* ------------------------ Dependency ------------------------------*/
    ${cssId} .dep_hide{
        display: none;
    }
    ${cssId} .dep_show{
        display: block;
    }
    /* ------------------------ Number ------------------------------*/
    ${cssId} .g__field_number[type=number] {
        -moz-appearance: textfield;
    }
    ${cssId} .g__field_number::-webkit-outer-spin-button,
    ${cssId} .g__field_number::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ${cssId} .g__number_container{
        display: flex;
        align-items: center;
        position: relative;
    }
    ${cssId} .g__field_number{
        flex: 1;
    }
    ${cssId} .g__number_plus_minus{
        position: absolute;
        bottom: 0;
        right: 1px;
        border-radius: 0 3px 3px 0;
        width: 20px;
        height: var(--field-height);
        border-left: 1px solid var(--body);
    }
    ${cssId} .g__number_increase{
        width: 100%;
        height: 50%;
        position: relative;
    }
    ${cssId} .g__number_increase:active{
        background: #dce2e8;
    }
    ${cssId} .g__number_increase:before{
        position: absolute;
        content: " ";
        left: 6px;
        top: 6px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 5px solid var(--font-color);
    }
    ${cssId} .g__number_decrease:active{
        background: #dce2e8;
    }
    ${cssId} .g__number_decrease:before{
        position: absolute;
        content: " ";
        width: 0;
        height: 0;
        left: 6px;
        top: 4px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid var(--font-color);
    }
    ${cssId} .g__number_decrease{
        width: 100%;
        height: 50%;
        position: relative;
    }
    @media only screen and (max-width: 768px) {
        ${cssId} .g__number_plus_minus{
            display: none;
        }
        ${cssId} .g__field_number[type=number] {
            -moz-appearance: textfield;
        }
        ${cssId} .g__field_number::-webkit-outer-spin-button,
        ${cssId} .g__field_number::-webkit-inner-spin-button {
            -webkit-appearance: block;
            margin: 0;
        }
    }
    /* ------------------------ Range ------------------------------*/
    ${cssId} .g__range_container{
        display: flex;
        align-items: center;
    }
    ${cssId} .g__range_output{
        width: 100px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        color: var(--font-color);
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        padding: 5px 10px;
        margin-left: 20px;
    }
    ${cssId} .g__range_output[type=number] {
        -moz-appearance: textfield;
    }
    ${cssId} .g__range_output::-webkit-outer-spin-button,
    ${cssId} .g__range_output::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ${cssId} .g__range_unit{
        position: absolute;
        bottom: 0;
        right: 30px;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: var(--field-height);
        color: var(--font-color);
        opacity: .4;
    }
    ${cssId} .g__range_plus_minus{
        position: absolute;
        bottom: 0;
        right: 1px;
        border-radius: 0 3px 3px 0;
        width: 20px;
        height: var(--field-height);
        border-left: 1px solid var(--body);
    }
    ${cssId} .g__range_increase{
        width: 100%;
        height: 50%;
        position: relative;
    }
    ${cssId} .g__range_increase:active{
        background: #dce2e8;
    }
    ${cssId} .g__range_increase:before{
        position: absolute;
        content: " ";
        left: 6px;
        top: 6px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 5px solid var(--font-color);
    }
    ${cssId} .g__range_decrease:active{
        background: #dce2e8;
    }
    ${cssId} .g__range_decrease:before{
        position: absolute;
        content: " ";
        width: 0;
        height: 0;
        left: 6px;
        top: 4px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid var(--font-color);
    }
    ${cssId} .g__range_decrease{
        width: 100%;
        height: 50%;
        position: relative;
    }
    ${cssId} .g__field_range{
        -webkit-appearance: none;
    }
    ${cssId} .g__form_field input.g__field_range{
        width: 100%;
        padding: 0;
        height: 9px;
        background-color: var(--background-range);
        border: 0;
        border-radius: 5px;
    }
    ${cssId} .g__field_range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: var(--font-color);
        border-radius: 15px;
        cursor: pointer;
    }
    ${cssId} .g__field_range::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 15px;
        cursor: pointer;
    }
    /* ------------------------ Quil ------------------------------*/
    ${cssId} .ql-toolbar {
        border-right: 0;
        border-left: 0;
        border-top: 0;
        background: var(--background);
        border-bottom: 2px solid var(--body);
    }
    ${cssId} .ql-container {
       border-right: 0;
       border-left: 0;
       border-bottom: 0;
    }
    ${cssId} .ql-editor {
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
        background: var(--background);
        height: 200px;
    }
    ${cssId} .ql-stroke{
        stroke: var(--font-color);
    }
    ${cssId} .ql-picker-item::before{
        color: var(--font-color);
    }
    ${cssId} .ql-picker-options{
        background: var(--background);
    }
    /* ------------------------ Textarea ------------------------------*/
    ${cssId} textarea{
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        color: var(--font-color);
        font-family: var(--font-regular);
        font-weight: 300;
        padding: 5px;
        outline: none;
    }
    /* ------------------------ DateTime ------------------------------*/
    input[type="datetime-local"] {
        min-height: 2.5rem;
    }
    /* ------------------------ Date ------------------------------*/
    ${cssId} .g__date_container{
        position: relative;
        display: flex;
    }
    ${cssId} .g__date_field{
        line-height: var(--height);
        flex: 1;
    }
    ${cssId} .g__date_field::-webkit-calendar-picker-indicator {
        color: rgba(0, 0, 0, 0);
        opacity: 1;
      }
    ${cssId} .g__calendar_icon{
        position: absolute;
        border-left: 1px solid var(--body);
        color: var(--font-color);
        font-size: 1.4rem;
        padding: 8px 0 8px 15px;
        right: 15px;
    }
    #ui-datepicker-div{
        background: var(--background);
        color: var(--font-color);
        padding: 15px;
        margin-top: 2px;
        border: var(--border);
    }
    .ui-datepicker-header{
        color: var(--font-color);
        background: none;
        border: none;
    }
    .ui-datepicker td a.ui-state-default{
        text-align:center;
        color: var(--font-color);
        background: none;
        border: none;
    }
    .ui-datepicker td a.ui-state-default.ui-state-active {
        border: 0;
        background: var(--primary);
        color: var(--font-color);
        border-radius: 50px;
    }
    .ui-datepicker select.ui-datepicker-month,
    .ui-datepicker select.ui-datepicker-year{
        width: 45%;
        background: transparent;
        border: 0;
        width: 40%;
        margin: 0 5px;
        color: var(--font-color);
    }
    .datepicker .ui-datepicker-header .ui-datepicker-prev,
    .datepicker .ui-datepicker-header .ui-datepicker-next {
        display: inline;
        float: left;
        cursor: pointer;
        font-size: 1.4em;
        padding: 0 10px;
        margin-top: -10px;
        color: #CCC;
    }
    .ui-datepicker-next {
        float: right;
    }
    /* ------------------------ Color ------------------------------*/
    ${cssId} .g__form_field .g__color_container {
        display: flex;
        position:relative;
    }
    ${cssId} .g__color_container input.g__hex_value{
        padding-left: 50px;
        flex: 1;
    }
    ${cssId} .g__form_field input[type=color] {
        padding: 0;
        position: absolute;
        background: transparent;
        border: 0;
        left: 2px;
        border-radius: var(--border-radius);
        height: 38px;
    }
    /* ------------------------ radio ------------------------------*/
    ${cssId} .g__radio_container {
        display: block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ${cssId} .g__radio_container {
        display: flex;
        position: relative;
    }
    ${cssId} .g__field_radio{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 25px;
        width: 25px;
    }
    ${cssId} .g__radio {
        display: flex;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
    }
    ${cssId} .g__radio_container:hover input ~ .g__radio {
        background-color: #ccc;
    }
    ${cssId} .g__radio_container input:checked ~ .g__radio {
        background-color: #00B28B;
    }
    ${cssId} .g__radio:after {
        content: "";
        position: absolute;
        display: none;
    }
    ${cssId} .g__check_container input:checked ~ .g__radio:after {
        display: block;
    }
    ${cssId} .g__check_container .g__radio:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
   }
    /* ------------------------ checkbox ------------------------------*/
    ${cssId} .g__check_container {
        display: block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ${cssId} .g__check_container {
        display: flex;
        position: relative;
    }
    ${cssId} .g__field_checkbox {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 25px;
        width: 25px;
    }
    ${cssId} .g__checkmark {
        display: flex;
        height: 25px;
        width: 25px;
        background-color: var(--background);
    }
    ${cssId} .g__check_container:hover input ~ .g__checkmark {
        background-color: #ccc;
    }
    ${cssId} .g__check_container input:checked ~ .g__checkmark {
        background-color: #00B28B;
    }
    ${cssId} .g__checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
    ${cssId} .g__check_container input:checked ~ .g__checkmark:after {
        display: block;
      }
    ${cssId} .g__check_container .g__checkmark:after {
        left: 9px;
        top: 5px;
        width: 7px;
        height: 12px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

    /* ------------------------ File ------------------------------*/
    ${cssId} .g__file_container{
        display: flex;
        flex-direction: row;
    }
    ${cssId} .g__file_btn {
        padding: var(--field-padding);
        height: var(--field-height);
        color: var(--font-color);
        background: var(--background);
        border: var(--border);
        border-radius: var(border-radius);
        cursor: pointer;
    }
    ${cssId} .g__file_text{
        flex: 1;
        overflow: hidden;
        padding: var(--field-padding);
        color: var(--font-color);
        height: var(--field-height);
        background: var(--background);
        border: var(--border);
        border-radius: var(border-radius);
        border-left: 1px solid var(--body);
    }
    ${cssId} .g__file_delete{
        overflow: hidden;
        padding: var(--field-padding);
        color: var(--font-color);
        height: var(--field-height);
        background: var(--background);
        border: var(--border);
        border-radius: var(border-radius);
        border-left: 1px solid var(--body);
    }
    ${cssId} .g__file_delete:hover{
        cursor: pointer;
        background: var(--background-hover);
    }

    /* ------------------------ Picklist ------------------------------*/
    ${cssId} .g__picklist {
        position: relative;
    }
    ${cssId} .g__picklist select {
        display: none; /*hide original SELECT element: */
    }
    ${cssId} .g__picklist{
        background-color: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
    }
    /* Style the arrow inside the select element: */
    ${cssId} .select-selected:after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: var(--font-color) transparent transparent transparent;
    }
    /* Point the arrow upwards when the select box is open (active): */
    ${cssId} .select-selected.select-arrow-active:after {
        border-color: transparent transparent var(--font-color) transparent;
        top: 7px;
    }
    /* style the items (options), including the selected item: */
    ${cssId} .select-items div,.select-selected {
        color: var(--font-color);
        padding: var(--field-padding);
        cursor: pointer;
    }
    /* Style items (options): */
    ${cssId} .select-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        background: var(--background);
        border: var(--border);
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
    }
    ${cssId} .select-items .g__select_search {
        background: var(--background);
        border: 1px solid white;
        margin: var(--field-padding);
        border-radius: var(--border-radius);
    }
    /* Hide the items when the select box is closed: */
    ${cssId} .select-hide {
        display: none;
    }
    ${cssId} .select-items div:hover, .same-as-selected {
        background-color: rgba(0, 0, 0, 0.1);
    }
    @media only screen and (max-width: 768px) {
        ${cssId} .g__picklist select {
            display: flex;
        }
        ${cssId} .g__select_default {
            display: block;
            position: relative;
            width: 100%;
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
        ${cssId} .g__picklist:after {
            position: absolute;
            content: "";
            top: 16px;
            right: 10px;
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-color: var(--font-color) transparent transparent transparent;
        }
        ${cssId} .select-selected {
            display: none;
        }
        ${cssId} .select-items {
            display: none;
        }
      }
    `
    document.head.appendChild(formStyles);
    /* -------------------- Regex Expressions ----------------------*/
    const patterns = {
        tel: '[0-9]{2}\/[0-9]{2}\/[0-9]{4}',
        number: '[0-9]*',
        email: '[-a-zA-Z0-9.-_]{1,}@[-a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z0-9]{2,}[a-zA-Z0-9.]{0,}'
        //             yourname @ domain   .  com          ( .uk )
    };

    /* -------------------- Form Container ----------------------*/
    const form_container = document.createElement('form');
    // conditional attributes
    !!attr__action ? form_container.setAttribute('action', attr__action) : "";
    !!attr__form_id ? form_container.setAttribute('id', attr__form_id) : "";
    // static attributes
    form_container.setAttribute('method', attr__method);
    form_container.setAttribute('enctype', attr__enctype);
    form_container.setAttribute('novalidate', 'false');

    /* -------------------- Standard Field Attributes ----------------------*/
    function basicAttributes(r, input, class_name){
        input.setAttribute('class', class_name);
        !!r.type ? input.setAttribute('type', r.type) : "";
        !!attr__form_id ? input.setAttribute('form_id', attr__form_id) : "";
        !!r.name ? input.setAttribute('name', r.name) : "";
        !!r.value ? input.setAttribute('value', r.value) : input.setAttribute('value', '');
        !!r.title ? input.setAttribute('title', r.title) : "";
        !!r.length ? input.setAttribute('maxlength', r.length) : "";
        !!r.placeholder ? input.setAttribute('placeholder', r.placeholder) : "";
        !!r.invalid_message ? input.setAttribute('oninvalid', `this.setCustomValidity("${r.invalid_message}")`) : "";
        input.required = r.required;
        input.disabled = r.disabled;
        return input
    }
    /* -------------------- Hidden Fields ----------------------*/
    function hiddenFields(hidden, name, value){
        hidden.setAttribute('type', 'hidden');
        hidden.setAttribute('form_id', attr__form_id);
        hidden.setAttribute('name', name);
        hidden.setAttribute('value', value);
        return hidden
    }


    /* -------------------- Form Fields (Record Loop) ----------------------*/
    // Section attributes
    let section = false;
    let section_count = 0;
    let section_title = '';
    let section_group = [];

    // Inline attributes
    let is_inline = false;
    let inline_arr = [];

    r.forEach(function(r, num){

        /* -------------------- Error Field ----------------------*/
        let error_field = document.createElement('div');
        error_field.setAttribute('class', 'g__error_msg');

        r.id = !!r.id ? r.id : "a__" + Math.random().toString(36).substring(2, 15);
        let class_name = "g__field_" + r.type;

        //Create field wrapper
        form_field = document.createElement('div');
        form_field.setAttribute('class', "g__form_field");
        //Global labels and character counter
        if(!!r.title || !!r.length){
            let field_info_container = document.createElement('div');
                field_info_container.setAttribute('class', 'g__field_info')
            form_field.appendChild(field_info_container);
            if (!!r.title){
                let label = document.createElement('label');
                    !!r.required ? label.classList.add('required'): '';
                    label.setAttribute('for', r.name);
                    label.innerText = r.title;
                field_info_container.appendChild(label);
            }
            if (r.length > 0){
                let count_container = document.createElement('div');
                    count_container.setAttribute('class', 'g__char_remain')
                    count_container.innerText = '0/' + r.length;
                field_info_container.appendChild(count_container);
            }
        }


        //build each field depending on the type
        let input;
        switch (r.type){
            case "checkbox":
                check_container = document.createElement('div');
                check_container.setAttribute('class', 'g__check_container');
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name);
                let check = document.createElement('span');
                check.setAttribute('class', 'g__checkmark');
                check_container.appendChild(input);
                check_container.appendChild(check);
                form_field.appendChild(check_container);
                form_field.appendChild(error_field);
            break;
            case "color":
                let color_container = document.createElement('div');
                color_container.setAttribute('class', 'g__color_container');
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name);
                input.setAttribute('pattern', '^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$');
                var hex_display = document.createElement('input');
                hex_display.setAttribute('class', 'g__hex_value');
                hex_display.setAttribute('value', '#101010');
                hex_display.setAttribute('pattern', '^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$');
                color_container.appendChild(input)
                color_container.appendChild(hex_display);
                form_field.appendChild(color_container);
                form_field.appendChild(error_field);
            break;
            case "currency":
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name);
                input.setAttribute('type', 'text');
                form_field.appendChild(input);
                form_field.appendChild(error_field);
            break;
            case "date":
                let date_container = document.createElement('div');
                date_container.setAttribute('class', 'g__date_container')
                input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('class', 'g__date_field');
                input.setAttribute('id', r.id);
                let calendar_icon = document.createElement('i')
                calendar_icon.setAttribute('class', 'fal fa-calendar-alt g__calendar_icon')
                !!attr__form_id ? input.setAttribute('form_id', attr__form_id) : "";
                !!r.name ? input.setAttribute('name', r.name) : "";
                !!r.value ? input.setAttribute('value', r.value) : "";
                !!r.placeholder ? input.setAttribute('placeholder', r.placeholder) : "";
                input.required = r.required;
                input.disabled = r.disabled;
                input.autocomplete = "false"
                date_container.appendChild(input);
                date_container.appendChild(calendar_icon);
                form_field.appendChild(date_container);
                form_field.appendChild(error_field);
            break;
            case "description":
                let desc = document.createElement('p');
                desc.setAttribute('class', 'g__form_description');
                desc.setAttribute('style', `font-size:${r.font_size};`);
                desc.innerHTML = r.value;
                form_field.appendChild(desc);
            break;
            case "email":
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                input.setAttribute('pattern', patterns.email);
                !!r.pattern ? input.setAttribute('pattern', r.pattern) : input.setAttribute('pattern', patterns.email);
                basicAttributes(r, input, class_name)
                input.setAttribute('form', attr__form_id);
                form_field.appendChild(input);
                form_field.appendChild(error_field);
            break;
            case "file":
                let file_container = document.createElement('div');
                file_container.setAttribute('class', 'g__file_container');
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                input.setAttribute('hidden', 'hidden');
                basicAttributes(r, input, class_name)
                file_btn = document.createElement('button');
                file_btn.setAttribute('type', 'button');
                file_btn.setAttribute('class', 'g__file_btn');
                file_btn.innerText = 'Choose File';
                file_text = document.createElement('div');
                file_text.setAttribute('class', 'g__file_text');
                file_text.innerText = 'No file chosen, yet.';
                let file_delete = document.createElement('div');
                file_delete.setAttribute('class', 'g__file_delete');
                file_delete.innerText = 'X';
                file_container.appendChild(input);
                file_container.appendChild(file_btn);
                file_container.appendChild(file_text);
                file_container.appendChild(file_delete);
                form_field.appendChild(file_container);
                form_field.appendChild(error_field);
            break;
            case "number":
                let num_min = r.min || 0;
                let num_max = r.max || 100;
                let num_container = document.createElement('div');
                num_container.setAttribute('class', "g__number_container");
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name)
                !!r.pattern ? input.setAttribute('pattern', r.pattern) : input.setAttribute('pattern', patterns.number);
                // Increase decrease container
                let num_counter = document.createElement('div');
                num_counter.setAttribute('class', 'g__number_plus_minus');
                // Increase container
                let num_increase = document.createElement('div');
                num_increase.setAttribute('class', 'g__number_increase');
                num_counter.appendChild(num_increase);
                // Decrease container
                let num_decrease = document.createElement('div');
                num_decrease.setAttribute('class', 'g__number_decrease');
                num_counter.appendChild(num_decrease);
                //Append the parent elements
                num_container.appendChild(input);
                num_container.appendChild(num_counter);
                form_field.appendChild(num_container)
                form_field.appendChild(error_field);
            break;
            case "subheader":
                let subhead = document.createElement('h2');
                subhead.setAttribute('class', 'g__form_header');
                subhead.innerText = r.value;
                form_field.appendChild(subhead);
            break;
            case "picklist":
                const picklist_options = r.options;
                input = document.createElement('div');
                input.setAttribute('id', r.id);
                input.setAttribute('class', 'g__picklist')
                let select = document.createElement('select');
                select.setAttribute('class', 'g__select_default');
                basicAttributes(r, select, class_name)
                for(let i = 0; i < picklist_options.length; i++){
                    let option = document.createElement('option');
                    option.setAttribute('value', picklist_options[i])
                    option.innerHTML = picklist_options[i];
                    select.appendChild(option);
                }
                input.appendChild(select);
                form_field.appendChild(input);
                form_field.appendChild(error_field);
            break;
            case "radio":
                radio_container = document.createElement('div');
                radio_container.setAttribute('class', 'g__radio_container');
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name);
                let radio = document.createElement('span');
                radio.setAttribute('class', 'g__radio');
                radio_container.appendChild(input);
                radio_container.appendChild(radio);
                radio_container.appendChild(error_field);
                form_field.appendChild(radio_container);
                form_field.appendChild(error_field);
            break;
            case "range":
                let min = r.min || 0;
                let max = r.max || 100;
                let range_container = document.createElement('div');
                range_container.setAttribute('class', "g__range_container");
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name)
                input.setAttribute('min', min);
                input.setAttribute('max', max);
                let output = document.createElement('input');
                output.setAttribute('class', 'g__range_output');
                output.setAttribute('type', 'number');
                // Unit indicator
                let unit = document.createElement('div');
                unit.setAttribute('class', 'g__range_unit');
                unit.innerHTML = "px";
                // Increase decrease container
                let plusMinus = document.createElement('div');
                plusMinus.setAttribute('class', 'g__range_plus_minus');
                // Increase container
                let increase = document.createElement('div');
                increase.setAttribute('class', 'g__range_increase');
                plusMinus.appendChild(increase);
                // Decrease container
                let decrease = document.createElement('div');
                decrease.setAttribute('class', 'g__range_decrease');
                plusMinus.appendChild(decrease);
                //Append the parent elements
                range_container.appendChild(input);
                range_container.appendChild(output);
                range_container.appendChild(unit);
                range_container.appendChild(plusMinus);
                form_field.appendChild(error_field);
                form_field.appendChild(range_container)
            break;
            case "section":
                section_title = r.title;
                section = true;
                section_count = parseInt(r.number_fields);
            break;
            case "tel":
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name)
                input.setAttribute('form', attr__form_id);
                form_field.appendChild(input);
                form_field.appendChild(error_field);
            break;
            case "textarea":
                input = document.createElement('textarea');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name)
                input.setAttribute('rows', '4');
                input.setAttribute('cols', '50');
                input.setAttribute('form', attr__form_id);
                form_field.appendChild(input);
                form_field.appendChild(error_field);
            break;
            case "quill":
                let quil = document.createElement('div');
                quil.setAttribute('class', 'g__quil_field');
                quil.setAttribute('id', r.id);
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name)
                input.setAttribute('type', 'hidden')
                form_field.appendChild(quil);
                form_field.appendChild(input);
                form_field.appendChild(error_field);

            break;
            default:
                input = document.createElement('input');
                input.setAttribute('id', r.id);
                basicAttributes(r, input, class_name);
                form_field.appendChild(input);
                form_field.appendChild(error_field);
        }


        if (r.inline_field || inline_arr.length){
                if(r.inline_field){
                    inline_arr.push(form_field)
                } else if (inline_arr.length > 0){
                    inline_arr.push(form_field)
                    let inline_row = document.createElement('div');
                    inline_row.setAttribute('class', "g__inline_row");
                    inline_arr.forEach( (field) => {
                        inline_row.appendChild(field);
                    });
                    inline_arr = [];
                    form_container.appendChild(inline_row);
                }
            } else if (section){
                if(r.type != 'section'){
                    section_group.push(form_field);
                    section_count--;
                }
                section_count ? section = true : section = false;
                if(!section){
                    let form_section_container = document.createElement('div');
                    form_section_container.setAttribute('class', "g__form_section_container");

                    //Form text
                    let section_header = document.createElement('div');
                    section_header.setAttribute('class', 'g__section_header');
                    form_section_container.appendChild(section_header);
                    let title = document.createElement('h3');
                    title.setAttribute('class', 'g__section_title');
                    title.innerText = section_title || 'Section'
                    let line = document.createElement('div');
                    line.setAttribute('class', 'g__section_line');
                    let icon = document.createElement('div');
                    icon.setAttribute('class', 'g__section_icon');
                    icon.innerHTML = '<i class="far fa-chevron-right"></i>'
                    section_header.appendChild(title);
                    section_header.appendChild(line);
                    section_header.appendChild(icon);

                    //Form Section
                    let form_section = document.createElement('div');
                    form_section.setAttribute('class', "g__form_section");
                    form_section_container.appendChild(form_section);

                    section_group.forEach( (field) => {
                        form_section.appendChild(field);
                    })
                    section_group = [];
                    section_title = '';
                    form_container.appendChild(form_section_container);
                }
            } else {
                if(r.type != 'section'){
                    form_container.appendChild(form_field);
                }

            }

    });
    /* -------------------- Hidden Fields ----------------------*/
    if(!!o.db_id){
        hidden = document.createElement('input');
        hiddenFields(hidden, "id", o.db_id)
        form_container.appendChild(hidden);
    }
    if(!!o.db_object){
        hidden = document.createElement('input');
        hiddenFields(hidden, "object", o.db_object)
        form_container.appendChild(hidden);
    }
    if(!!o.db_action){
        hidden = document.createElement('input');
        hiddenFields(hidden, "submit_form", o.db_action)
        form_container.appendChild(hidden);
    }
    if(!!o.db_redirect){
        hidden = document.createElement('input');
        hiddenFields(hidden, "redirect_to", o.db_redirect)
        form_container.appendChild(hidden);
    }

    // Submit & Cancel Button
    if(!!o.submit_label){
        let submit = document.createElement('button');
        submit.setAttribute('id', 'g__submit_btn');
        submit.setAttribute('type', 'submit');
        submit.innerText = o.submit_label;
        form_container.appendChild(submit);
    }
    if(!!o.cancel_label){
        let cancel = document.createElement('button');
        cancel.setAttribute('id', 'g__cancel_btn');
        cancel.setAttribute('type', 'reset');
        cancel.innerText = o.cancel_label;
        form_container.appendChild(cancel);
    }

    // append the form to the page
    document.getElementById(id).appendChild(form_container);


    /* -------------------- Submit ----------------------*/
    let form = document.getElementById(attr__form_id);
    form.addEventListener('submit', e => {
        e.preventDefault();
        let all_field_containers = document.querySelectorAll('.g__form_field');
        let all_sections = document.querySelectorAll('.g__form_section_container');
        let errors_arr = [];
        all_field_containers.forEach((field) => {
            let input = field.querySelector('input');
            let error_msg = field.querySelector('.g__error_msg');
            if(input){
                if(!input.checkValidity()){
                    input.classList.add('invalid');
                    errors_arr.push(input);
                    error_msg.innerText = input.validationMessage;
                }
            }
        })
        console.log(errors_arr.length);
        if(all_sections.length){
            all_sections.forEach((section) => {
                let errors = section.querySelectorAll('.g__error_msg');
                let header = section.querySelector('.g__section_header');
                let section_content = section.querySelector('.g__form_section');
                errors.forEach((msg) => {
                    let content = msg.innerHTML;
                    if(content){
                        header.classList.add('active');
                        section_content.classList.add('active');
                        section_content.style.maxHeight = section_content.scrollHeight + "px";
                    }
                })
            })
        }
        if(!errors_arr.length){
            form.submit();
        }

    });
    /* -------------------- Currency Field ----------------------*/
    let all_currency = document.querySelectorAll('.g__field_currency');

    all_currency.forEach(curr => {
        curr.addEventListener('input', () => {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
              })
        })
    })
    /* -------------------- File Enctype Change ----------------------*/
    let all_input = form.querySelectorAll('input')
    all_input.forEach( (field) => {
        let type = field.type;
        if (type === 'file'){
            form.enctype = 'multipart/form-data';
        }
    })
    /* -------------------- File Upload ----------------------*/
    let all_files = document.querySelectorAll('.g__file_container');
    all_files.forEach((file) => {
        let real_file_field = file.querySelector('.g__field_file');
        let file_btn = file.querySelector('.g__file_btn');
        let file_text = file.querySelector('.g__file_text');
        let file_delete = file.querySelector('.g__file_delete');

        // Activate the real file field on click
        file_btn.addEventListener('click', () => {
            real_file_field.click();
        })

        real_file_field.addEventListener("change", () => {
            if (real_file_field.value) {
                file_text.innerHTML = real_file_field.value.match(
                /[\/\\]([\w\d\s\.\-\(\)]+)$/
              )[1];
            } else {
                file_text.innerText = "No file chosen, yet.";
            }
          });

          file_delete.addEventListener('click', () => {
            if (real_file_field.value) {
                file_text.innerHTML = "";
                file_text.innerText = "No file chosen, yet.";
            }
          })

    })

    /* -------------------- Section ----------------------*/
    const all_sections = document.querySelectorAll('.g__section_header');

    all_sections.forEach(section => {
        section.addEventListener('click', () => {
            const section_header = section.nextSibling;
            section.classList.toggle('active');
            section_header.classList.toggle('active');
            if (section_header.style.maxHeight) {
                section_header.style.maxHeight = null;
              } else {
                section_header.style.maxHeight = section_header.scrollHeight + "px";
              }
        } )
    })
    /* -------------------- Number ----------------------*/
    let all_numbers = document.querySelectorAll(".g__number_container");
    all_numbers.forEach(wrap => {
        const output = wrap.querySelector(".g__field_number");
        const increase = wrap.querySelector(".g__number_increase");
        const decrease = wrap.querySelector(".g__number_decrease");
        increase.addEventListener('click', () => {
            const val = parseInt(output.value);
            output.value = val + 1;
        });
        decrease.addEventListener('click', () => {
            const val = parseInt(output.value);
            output.value = val - 1;
        });
    })
    /* -------------------- Range Output ----------------------*/
    let all_ranges = document.querySelectorAll(".g__range_container");
    let all_range_increase = document.querySelectorAll(".g__range_increase");

    all_ranges.forEach(wrap => {
        const range = wrap.querySelector(".g__field_range");
        const output = wrap.querySelector(".g__range_output");
        const increase = wrap.querySelector(".g__range_increase");
        const decrease = wrap.querySelector(".g__range_decrease");

        increase.addEventListener('click', () => {
            const val = parseInt(output.value);
            output.value = val + 1;
            setRange(range, output.value);
        });
        decrease.addEventListener('click', () => {
            const val = parseInt(output.value);
            output.value = val - 1;
            setRange(range, output.value);
        });

        output.addEventListener('change', () => {
            const val = output.value;
            range.value = val;
        });
        range.addEventListener('input', () => {
            setOutput(range, output);
        });

    setOutput(range, output);

    });
    function setRange(range, val){
        range.value = val;
    }
    function setOutput(range, output) {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        output.value = val;
    };

    /* -------------------- Pattern Check ----------------------*/
    let all_field_containers = document.querySelectorAll('.g__form_field');
    all_field_containers.forEach((field) => {
        let input = field.querySelector('input');
        let error_msg = field.querySelector('.g__error_msg');
        if(input){
            input.addEventListener('change', (e) => {
                let valid_input = input.checkValidity();
                if(valid_input){
                    input.classList.add('valid');
                    input.classList.remove('invalid');
                    error_msg.innerText = '';
                } else {
                    input.classList.add('invalid');
                }
            });
        }
    });

    /* -------------------- Quil Editors ----------------------*/
    let quil_fields = document.getElementsByClassName('g__quil_field');
    if(quil_fields.length){
        for(let i = 0; i < quil_fields.length; i++){
            let quil_id = '#' + quil_fields[i].id;
            let quil = document.getElementById(quil_fields[i].id);
            let quil_hidden_field = quil.nextSibling;
            let disabled = quil_hidden_field.disabled;
            var quill = new Quill(quil_id, {
                debug: 'false',
                modules: {
                    history: {'userOnly': true, 'delay': 1000}
                },
                theme: 'snow',
                readOnly: quil_hidden_field.disabled,
                placeholder: quil_hidden_field.placeholder,
            });
            let quil_text_field = quil.querySelector('.ql-editor');
            quil_text_field.addEventListener('input', (field) => {
                quil_hidden_field.value = quil_text_field.innerHTML;
            })
        }
    }
    /* -------------------- Character Limit ----------------------*/
    let char_count_field_arr = document.querySelectorAll('.g__form_field');
    char_count_field_arr.forEach((field) => {
        let input = field.querySelector('input');
        if(input){
            let char_limit = input.getAttribute('maxlength');
            if(char_limit > 0){
            input.addEventListener('keyup', () => {
                let counter_div = field.querySelector('.g__char_remain');
                let text = input.value;
                let count = text.length;
                counter_div.innerText = count + '/' + char_limit;
            })

        }
    }
    })

    /* -------------------- Color field values ----------------------*/
    let color_fields = document.getElementsByClassName('g__hex_value');
    for(let i = 0; i < color_fields.length; i++){
        color_fields[i].addEventListener('keydown', function(){
            let color = this.value;
            this.previousSibling.value = color;
        });
    }
    let color_pickers = document.getElementsByClassName('g__field_color');
    for(let i = 0; i < color_pickers.length; i++){
        color_pickers[i].addEventListener('change', function(){
            let color = this.value;
            this.nextSibling.value = color;
        });
    }

    /* -------------------- Datepicker **jQuery** ----------------------*/
        let date_fields = document.getElementsByClassName('g__date_field');
        for(let i = 0; i < date_fields.length; i++){
            let date_id = '#' + date_fields[i].id;
            $( date_id ).datepicker({
                format: "yyyy-mm-dd",
                autoclose: true,
                startDate: '+1d',
                showAnim: "slideDown",
                changeMonth: true,
                changeYear: true,
                prevText: '<i class="far fa-fw fa-chevron-left"></i>',
                nextText: '<i class="far fa-fw fa-chevron-right"></i>'
            });
        }
        $( ".g__calendar_icon" ).on( "click", function(field) {
            let date = $(this).prev();
            date.datepicker('show');
        });
        $( '#ui-datepicker-div' ).attr("mode", mode);

    /* -------------------- Custom Select Field ----------------------*/
    var x, i, j, l, ll, selElmnt, a, b, c, search_container, search;
    /* Look for any elements with the class "g__picklist": */
    x = document.getElementsByClassName("g__picklist");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");
    search = document.createElement("input");
    search.setAttribute('type', 'text');
    search.setAttribute('class', 'g__select_search');
    search.setAttribute('placeholder', 'Search');
    search.addEventListener("click", function(e) {
        e.stopPropagation();
    });
    b.appendChild(search);
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("div");
        c.setAttribute('class', 'g__select_option')
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                s.value = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    search.addEventListener("keyup", function(value) {
        console.log('searching...')
        let input = this.value.toUpperCase();
        let options_container = this.parentElement;
        let options_arr = options_container.querySelectorAll('.g__select_option');
        for (i = 0; i < options_arr.length; i++) {
            let txtValue = options_arr[i].textContent || options_arr[i].innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                options_arr[i].style.display = "";
            } else {
                options_arr[i].style.display = "none";
            }
          }
    });

    function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
    /* -------------------- checkbox ----------------------*/
    const all_checkboxes = document.querySelectorAll('.g__field_checkbox');

    all_checkboxes.forEach((field) => {
        let is_checked = field.checked;
        is_checked ? field.value = 'true' : field.value = 'false';

        field.addEventListener('change', () => {
            let is_checked = field.checked;
            is_checked ? field.value = 'true' : field.value = 'false';
        })
    })
    /* -------------------- Auto Save ----------------------*/
    if(o.autosave){
        let auto_save_count = 0;
        let auto_save_wait;
        let forms_arr = [];

        let arr_fields = document.querySelectorAll('.g__field_text, .g__field_number, .g__field_email, .g__field_quill, .g__field_file, .g__field_picklist');
        arr_fields.forEach((field) => {
            field.addEventListener('input', () => {
                let form_id = field.getAttribute('form_id');
                start_auto_save(form_id);
                is_duplicate = forms_arr.includes(form_id);
                if(!is_duplicate){
                    forms_arr.push(form_id);
                };
            });
        });

        let arr_selects = document.querySelectorAll('.g__field_picklist');
        arr_selects.forEach((field) => {
            field.addEventListener('click', () => {
                console.log('changed');
                let form_id = field.getAttribute('form_id');
                start_auto_save(form_id);
                is_duplicate = forms_arr.includes(form_id);
                if(!is_duplicate){
                    forms_arr.push(form_id);
                };
            });
        });

        let arr_quil_fields = document.querySelectorAll('.ql-editor');
        arr_quil_fields.forEach((field) => {
            field.addEventListener('input', () => {
                let form_id = field.parentElement.nextSibling.getAttribute('form_id');
                start_auto_save(form_id);
                is_duplicate = forms_arr.includes(form_id);
                if(!is_duplicate){
                    forms_arr.push(form_id);
                };
            });
        });

        function start_auto_save(form_id){
            if(auto_save_count > 0){
                clearTimeout(auto_save_wait);
                auto_save_count = 0;
            }
            if(auto_save_count == 0){
                auto_save_wait = setTimeout(auto_save, 3500, forms_arr);
                auto_save_count = 1;
            }
        }

        function auto_save(forms_arr){
            $.each( forms_arr, function( index, form_id ){
            form_data = {}
                console.log(form_id);
            $(`input[form_id="${form_id}"]`).each(function(){
                if($(this).attr('type') != 'file'){
                form_data[$(this).attr('name')] = $(this).val();
                }
            });

            $(`select[form_id="${form_id}"]`).each(function(){
                console.log($(this).attr('name'));
                form_data[$(this).attr('name')] = $(this).val();
            });

            console.log(`FORM DATA: ${JSON.stringify(form_data, null, 4)}`)

            // $.ajax({
            //     type: o.method,
            //     url: o.action,
            //     data: form_data
            // })
            // .done(function(data) {
            //     console.log("autosave successful")
            // })
            // .fail(function(data) {
            //     console.log("autosave failed")
            // });
            // forms = [];
            // count = 0;
            });
            return false;
        }
    }

    /* -------------------- Dependency Field ----------------------*/
    r.forEach(function(r, num){
        if(!!r.dependency_field && (!!r.dependency_values || !!r.dependency_not_blank)){

            let dep_master_field_value = document.getElementsByName(r.dependency_field);
            let dep_field_id = dep_master_field_value[0].id
            let dep_master_field = document.getElementById(dep_field_id);
            // let dep_master_field_type = dep_master_field.getAttribute('type');
            // let dep_master_field_selected = dep_master_field.querySelector('.select-selected').innerHTML;
            let dep_master_value = dep_master_field.value;
            let dep_child_values = r.dependency_values;
            let dep_child_arr;



            if(typeof dep_child_values === 'boolean' ){
                dep_child_type = 'boolean';
                console.log(dep_child_type)
            }else if (dep_child_values.includes(',')){
                dep_child_type = 'array';
                dep_child_arr = dep_child_values.split(', ')
                console.log(dep_child_type)
            }else{
                dep_child_type = 'single';
            }

            let dep_child_field = document.getElementById(r.id);
            let dep_child_container = dep_child_field.closest('.g__form_field');
            switch (dep_child_type) {
                case 'boolean':
                  if(dep_master_field.checked && (dep_child_values)){
                    dep_child_container.classList.remove('dep_hide');
                  } else {
                    dep_child_container.classList.add('dep_hide');
                  };
                  break;
                case 'single':
                    if(dep_master_field.value === val){
                        dep_child_container.classList.remove('dep_hide');
                    } else {
                        dep_child_container.classList.add('dep_hide');
                    };
                break;
                case 'array':
                    dep_child_arr.forEach((val) => {
                        if(dep_master_field.value === val){
                            dep_child_container.classList.remove('dep_hide');
                        } else {
                            dep_child_container.classList.add('dep_hide');
                        };
                    })
                break;
              }

            dep_master_field.addEventListener('input', (val) => {
                switch (dep_child_type) {
                    case 'boolean':
                      if(dep_master_field.checked && dep_child_values){
                        dep_child_container.classList.remove('dep_hide');
                      } else {
                        dep_child_container.classList.add('dep_hide');
                      };
                      break;
                    case 'number':
                        if(dep_master_field.value === dep_child_values){
                            dep_child_container.classList.remove('dep_hide');
                          } else {
                            dep_child_container.classList.add('dep_hide');
                          };
                    break;
                    case 'array':
                        let is_match;
                        dep_child_arr.forEach((val) => {
                            if(dep_master_field.value === val){
                                is_match = true;
                                dep_child_container.classList.remove('dep_hide');
                            } else if (!is_match) {
                                dep_child_container.classList.add('dep_hide');
                            };
                        })
                    break;
                  }
            })
        }
    })
}