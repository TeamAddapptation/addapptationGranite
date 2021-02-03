function granite_form(formsBlock, jsonTheme){
    const id = formsBlock.id;
    const o = formsBlock.options;
    const r = formsBlock.records;
    const t = jsonTheme;
    const platform = true;
    const mode = !!t.mode ? t.mode : "midnight";
    const cssId = '#' + id;
    // micro settings attributes
    const attr__action = o.addapptation_action || '';
    const attr__form_id = o.form_id || 'g__' + Math.random().toString(36).substring(2, 15);
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
    ${cssId}[mode="midnight"],
    #ui-datepicker-div[mode="midnight"]{
        --background: #303030;
        --background-darker: #151515;
        --background-reverse: #ffffff;
        --background-range: #2a2a2a;
        --background-hover: #3b3b3b;
        --body: #101010;
        --border: 1px solid #a1a1a1;
        --font-color: #ffffff;
    }
    /*---------------------------------------------
    No Records
    ---------------------------------------------*/
    ${cssId} .g__no_records{
        display: flex;
        justify-content: center;
        background: transparent;
        align-items: center;
        color: var(--font-color);
        height: 225px;
        margin-top: 50px;
        border: 2px dashed #5d5d5d;
    }
    ${cssId} .g__no_records h2{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size: 2rem;
        color: var(--font-color);

    }
    /* ------------------------ Action Row ------------------------*/
    ${cssId} .g__form_action_row{
        display: flex;
        flex-direction: column;
        align-items: ${o.align_action_row || 'flex-start'};
        margin-left: 15px;
        margin-right: 15px
    }
    ${cssId} .g__form_action_title{
        font-family: var(--font-regular);
        color: var(--font-color);
        font-weight: 300;
        font-size: ${o.title_font_size || "36px"}
    }
    ${cssId} .g__form_action_description{
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
        font-size: ${o.description_font_size || "16px"}
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
    ${cssId} .g__form_copy{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        display: flex;
        flex-direction: column;
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
        transition: color .5s;
    }
    ${cssId} .g__char_remain.g__limit{
        color: var(--error-color);
    }
    ${cssId} .required:after{
        content:" *";
        font-size: .7rem;
        position: absolute;
        margin-left: 4px;
        color: var(--font-color);
      }
    ${cssId} .g__form_field input.invalid{
        border-right: 2px solid var(--error-color);
    }
    ${cssId} .g__form_field textarea.invalid{
        border-right: 2px solid var(--error-color);
    }
    ${cssId} .g__form_field input.valid{
        border-right: 2px solid green;
    }
    ${cssId} .g__form_field textarea.valid{
        border-right: 2px solid green;
    }
    ${cssId} .g__error_msg.active{
        display: flex;
    }
    ${cssId} .g__error_msg{
        display: none;
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
        padding: var(--field-padding);
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
    @media only screen and (max-width: 768px) {
        ${cssId} .g__inline_row {
            display: flex;
            flex-direction: column;
            flex-wrap: no-wrap;
        }
    }
    /* ------------------------ Content ------------------------------*/
    ${cssId} .g__form_header{
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
        margin-left: 15px;
        margin-right: 15px;
    }
    ${cssId} .g__form_description{
        font-family: var(--font-regular);
        font-weight: 300;
        color: var(--font-color);
        margin-left: 15px;
        margin-right: 15px;
    }
    /* ------------------------ Section ------------------------------*/
    ${cssId} .g__form_section_container{
        margin-top: 25px;
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
        display: flex;
    }
    /* ------------------------ Password ------------------------------*/
    ${cssId} .g__password_container{
        display: flex;
        align-items: center;
        position: relative;
    }
    ${cssId} .g__field_password{
        flex: 1;
    }
    ${cssId} .g__password_container .g__hide_password_btn{
        display: none;
    }
    ${cssId} .g__password_show{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--font-color);
        padding: 0 5px;
        bottom: 0;
        right: 1px;
        border-radius: 0 3px 3px 0;
        height: var(--field-height);
        border-left: var(--border);
    }
    ${cssId} .g__password_show:hover{
        cursor: pointer;
    }
    ${cssId} .g__password_show i{
        width: 30px;
        text-align: center;
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
    ${cssId} .g__hide_counter .g__number_plus_minus{
        display: none;
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
        border-left: var(--border);
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
        border-left: var(--border);
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
        border-top: var(--border);
        border-right: var(--border);
        border-left: var(--border);
    }
    ${cssId} .ql-container {
       border-right: 0;
       border-left: 0;
       border-bottom: 0;
    }
    ${cssId} .ql-editor {
        font-family: var(--font-regular);
        font-weight: 300;
        border: var(--border);
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
        border-left: var(--border);
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    ${cssId} .g__radio_option{
        display: flex;
        align-items: center;
        position: relative;
        flex-direction: row;
        padding-right: 25px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    ${cssId} .g__radio_container {
        display: flex;
        position: relative;
    }
    ${cssId} .g__field_radio{
        position:absolute;
        opacity: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #eee;
    }
    ${cssId} .g__field_radio:hover {
        cursor: pointer;
    }
    ${cssId} .g__form_field .g__radio_label{
        font-size: .8rem;
        margin: 0;
        padding-left: 10px;
    }
    ${cssId} .g__radio {
        height: 20px;
        width: 20px;
        border: var(--border);
        background-color: var(--background);
        border-radius: 50%;
    }
    ${cssId} .g__radio_option:hover input ~ .g__radio {
        background-color: #ccc;
        cursor: pointer;
    }
    ${cssId} .g__radio_container input:checked ~ .g__radio {
        background-color: var(--primary);
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
   @media only screen and (max-width: 768px) {
    ${cssId} .g__radio_container{
        flex-direction: column;
    }
   }
    /* ------------------------ checkbox ------------------------------*/
    ${cssId} .g__check_container {
        margin-top: 15px;
        margin-bottom: 15px;
    }
    ${cssId} .g__check_container [type="checkbox"]:not(:checked),
	${cssId} [type="checkbox"]:checked {
		position: absolute;
		left: 0;
		opacity: 0.01;
    }
    ${cssId} .g__check_container [type="checkbox"]:not(:checked) + label,
	${cssId} .g__check_container [type="checkbox"]:checked + label {
		position: relative;
		padding-left: 2.3em;
		color: var(--font-color);
		line-height: 1.7;
		cursor: pointer;
    }
    ${cssId} [type="checkbox"]:not(:checked) + label:before{
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 25px;
		height: 25px;
		border: var(--border);
		background: var(--background);
		border-radius: var(--border-radius);
		box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
		-webkit-transition: all .275s;
				transition: all .275s;
    }
	${cssId} [type="checkbox"]:checked + label:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 25px;
		height: 25px;
		border: var(--border);
		background: var(--green);
		border-radius: var(--border-radius);
		box-shadow: inset 0 1px 3px rgba(0,0,0, .1), 0 0 0 rgba(203, 34, 237, .2);
		-webkit-transition: all .275s;
				transition: all .275s;
    }
    ${cssId} [type="checkbox"]:not(:checked) + label:after,
	${cssId} [type="checkbox"]:checked + label:after {
		content: '';
		position: absolute;
		top: 4px;
		left: 6px;
		font-size: 1.375em;
        color: #fff;
        background-color: var(--green);
        line-height: 0;
        border: solid white;
        width: 8px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
		-webkit-transition: all .2s;
				transition: all .2s;
    }
    ${cssId} [type="checkbox"]:not(:checked) + label:after {
		opacity: 0;
	}

	${cssId} [type="checkbox"]:checked + label:after {
		opacity: 1;
    }
    ${cssId} [type="checkbox"]:disabled:not(:checked) + label:before,
	${cssId} [type="checkbox"]:disabled:checked + label:before {
		box-shadow: none;
		border-color: #bbb;
		background-color: #e9e9e9;
	}

	${cssId} [type="checkbox"]:disabled:checked + label:after {
		color: #777;
	}

	${cssId} [type="checkbox"]:disabled + label {
		color: #aaa;
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
        box-sizing: border-box;
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
        box-sizing: border-box;
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
    /* ------------------------ Picklist Multiple ------------------------------*/
    ${cssId} .chosen-container-multi{
        display: flex;
        background-color: var(--background);
        border-radius: var(--border-radius);
    }
    ${cssId} .chosen-container-multi .chosen-choices{
        display: flex;
        align-items:center;
        background-color: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        height: var(--field-height);
        background-image: none;
    }
    ${cssId} .chosen-container .chosen-drop{
        background: var(--background);
        box-shadow: none;
        border-bottom: var(--border);
        border-right: var(--border);
        border-left: var(--border);
    }
    ${cssId} .chosen-container .chosen-results{
        color: var(--font-color) !important;
    }
    ${cssId} .chosen-container .chosen-results li{
        color: var(--font-color);
        padding: var(--field-padding);
        cursor: pointer;
    }
    ${cssId} .chosen-container .chosen-results li.highlighted{
        background-image: none;
        background-color: rgba(0, 0, 0, 0.2);
    }
    ${cssId} .chosen-container-multi .chosen-drop .result-selected{
        color: var(--background-darker);
    }
    ${cssId} .chosen-container-multi .chosen-choices li.search-field{
        display: flex;
        align-items: center;
    }
    ${cssId} .chosen-container-multi .chosen-choices li.search-field input[type="text"]{
        color: var(--font-color) !important;
    }
    ${cssId} .chosen-container-multi .chosen-choices li.search-choice{
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: var(--background-darker);
        border: none;
        border-radius: var(--border-radius);
        color: var(--font-color);
        background-image: none;
        height: calc(var(--field-height) - 10px);
        padding: 5px 10px;
        box-shadow: none;
    }
    ${cssId} .chosen-container-multi .chosen-choices li.search-choice .search-choice-close{
        position: relative;
        display: block;
        top: auto;
        right: auto;
        margin-left: 10px;
        width: 12px;
        height: 12px;
        background: url(https://cdn.addapptation.com/addapptation-customer-assets/addapptation-micros/granite/chosen-sprite.png) -42px 1px no-repeat;
        font-size: 1px;
    }
    @media only screen and (max-width: 768px) {
        ${cssId} .g__picklist_multiple select {
            display: flex;
        }
        ${cssId} .g__select_multiple {
            flex: 1;
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
        ${cssId} .g__picklist_multiple:after {
            display: none;
        }
        ${cssId} .chosen-container {
            display: none;
        }
    }
    /* ------------------------ Picklist ------------------------------*/
    ${cssId} .g__picklist {
        position: relative;
    }
    ${cssId} .g__picklist select {
        display: none;
    }
    ${cssId} .g__picklist{
        background-color: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        height: var(--field-height);
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
    ${cssId} .select-selected.invalid {
        border-right: 2px solid var(--error-color);
    }
    /* Point the arrow upwards when the select box is open (active): */
    ${cssId} .select-selected.select-arrow-active:after {
        border-color: transparent transparent var(--font-color) transparent;
        top: 7px;
    }
    /* style the items (options), including the selected item: */
    ${cssId} .select-items div,.select-selected {
        display: flex;
        align-items: center;
        color: var(--font-color);
        padding: var(--field-padding);
        cursor: pointer;
        height: var(--field-height);
    }
    /* Style items (options): */
    ${cssId} .select-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        background: var(--background);
        border: var(--border);
        border-top: 1px solid var(--body);
        border-bottom: 1px solid var(--background-darker);
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        max-height: 50vh;
        overflow: auto;
    }
    ${cssId} .g__search .g__select_search{
        display: block;
    }
    ${cssId} .g__select_search{
        display: none;
    }
    ${cssId} .select-items .g__select_search {
        background: var(--background-darker);
        margin: var(--field-padding);
        border-radius: var(--border-radius);
    }
    /* Hide the items when the select box is closed: */
    ${cssId} .select-hide {
        display: none;
    }
    ${cssId} .select-items div:hover, .same-as-selected {
        background-color: rgba(0, 0, 0, 0.2);
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
    /* -------------------- Form Header ----------------------*/
    if (!!o.title || o.description){
        const form_action_row = document.createElement('div');
        form_action_row.setAttribute('class', 'g__form_action_row');

        if (!!o.title){
            const form_title = document.createElement('h2');
            form_title.setAttribute('class', 'g__form_action_title');
            form_title.innerHTML = o.title;
            form_action_row.appendChild(form_title);
        }

        if (!!o.description){
            const form_description = document.createElement('p');
            form_description.setAttribute('class', 'g__form_action_description');
            form_description.innerHTML = o.description;
            form_action_row.appendChild(form_description);
        }

        document.getElementById(id).appendChild(form_action_row);
    }


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
        !!r.placeholder ? input.setAttribute('placeholder', r.placeholder) : "";
        r.length > 0 ? input.setAttribute('maxlength', r.length) : "";
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
    let section_id = '';
    let section_group = [];

    // Inline attributes
    let is_inline = false;
    let inline_arr = [];
    let inline_count = 0;
    if(r.length > 0){
        r.forEach(function(r, num){

            /* -------------------- Error Field ----------------------*/
            let error_field = document.createElement('div');
            error_field.setAttribute('class', 'g__error_msg');

            r.id = !!r.id ? r.id : "a__" + Math.random().toString(36).substring(2, 15);
            let class_name = "g__field_" + r.type;

            //Create field wrapper
            if ((r.type != 'subheader') && (r.type != 'description') && (r.type != 'hidden')){
                form_field = document.createElement('div');
                form_field.setAttribute('class', "g__form_field");

                //Global labels and character counter
                if((!!r.title || !!r.length) && (r.type != 'checkbox') && (r.type != 'hidden')){
                    let field_info_container = document.createElement('div');
                        field_info_container.setAttribute('class', 'g__field_info')
                    form_field.appendChild(field_info_container);
                    if (!!r.title){
                        let label = document.createElement('label');
                            !!r.required ? label.classList.add('required'): '';
                            label.setAttribute('for', r.name);
                            label.innerHTML = r.title;
                        field_info_container.appendChild(label);
                    }
                    if (r.length > 0 && r.show_count){
                        let count_container = document.createElement('div');
                            count_container.setAttribute('class', 'g__char_remain')
                            count_container.innerHTML = '0/' + r.length;
                        field_info_container.appendChild(count_container);
                    }
                }
            } else if (r.type === 'hidden'){
                form_field = document.createElement('div');
                form_field.setAttribute('class', "g__hidden_field");
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
                    let label = document.createElement('label');
                    !!r.required ? label.classList.add('required'): '';
                    label.setAttribute('for', r.id);
                    label.innerHTML = r.title;
                    check_container.appendChild(input);
                    check_container.appendChild(label);
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
                    form_field = document.createElement('p');
                    form_field.setAttribute('class', 'g__form_description');
                    form_field.setAttribute('style', `font-size:${r.font_size};`);
                    form_field.innerHTML = r.value;
                break;
                case "email":
                    input = document.createElement('input');
                    input.setAttribute('id', r.id);
                    !!r.pattern ? input.setAttribute('pattern', r.pattern) : "";
                    basicAttributes(r, input, class_name)
                    form_field.appendChild(input);
                    form_field.appendChild(error_field);
                break;
                case "file":
                    let file_container = document.createElement('div');
                    file_container.setAttribute('class', 'g__file_container');
                    input = document.createElement('input');
                    input.setAttribute('id', r.id);
                    !!r.accepted_file_types ? input.setAttribute('accept', r.accepted_file_types) : '';
                    r.multiple ? input.setAttribute('multiple', 'true') : '';
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
                case 'hidden':
                    input = document.createElement('input');
                    input.setAttribute('id', r.id);
                    basicAttributes(r, input, class_name);
                    form_field.appendChild(input);
                break;
                case "number":
                    let num_container = document.createElement('div');
                    num_container.setAttribute('class', "g__number_container");
                    r.show_counter ? '' : num_container.classList.add('g__hide_counter');
                    input = document.createElement('input');
                    input.setAttribute('id', r.id);
                    basicAttributes(r, input, class_name)
                    !!r.max_number ? input.max = r.max_number : '';
                    !!r.min_number ? input.min = r.min_number : '';
                    !!r.step ? input.step = r.step : '';
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
                case "password":
                    let pass_container = document.createElement('div');
                    pass_container.setAttribute('class', "g__password_container");
                    input = document.createElement('input');
                    input.setAttribute('id', r.id);
                    basicAttributes(r, input, class_name)
                    !!r.pattern ? input.setAttribute('pattern', r.pattern) : "";
                    let pass_show = document.createElement('div');
                    pass_show.setAttribute('class', 'g__password_show');
                    r.show_password_option ? '' : pass_show.classList.add('g__hide_password_btn');
                    pass_show.innerHTML = '<i class="far fa-eye"></i>'
                    pass_container.appendChild(input);
                    pass_container.appendChild(pass_show)
                    form_field.appendChild(pass_container);
                    form_field.appendChild(error_field);
                break;
                case "picklist":
                    const picklist_options = r.options;
                    const picklist_double_arr = (Array.isArray(picklist_options)) && (Array.isArray(picklist_options[0]));
                    input = document.createElement('div');
                    r.multiple ? input.setAttribute('class', 'g__picklist_multiple') : input.setAttribute('class', 'g__picklist');
                    r.picklist_search ? input.classList.add('g__search'): "";
                    let select = document.createElement('select');
                    basicAttributes(r, select, class_name)
                    select.setAttribute('id', r.id);
                    r.multiple ? select.setAttribute('class', 'g__select_multiple') : select.setAttribute('class', 'g__select_default');
                    r.multiple ? select.setAttribute('multiple', 'true') : '' ;
                    if(picklist_double_arr){
                        for(let i = 0; i < picklist_options.length; i++){
                            let option = document.createElement('option');
                            option.setAttribute('value', picklist_options[i][0])
                            option.innerHTML = picklist_options[i][1];
                            select.appendChild(option);
                        }
                    } else {
                        for(let i = 0; i < picklist_options.length; i++){
                            let option = document.createElement('option');
                            option.setAttribute('value', picklist_options[i])
                            option.innerHTML = picklist_options[i];
                            select.appendChild(option);
                        }
                    }

                    input.appendChild(select);
                    form_field.appendChild(input);
                    form_field.appendChild(error_field);
                break;
                case "radio":
                    const radio_options = r.options;
                    radio_container = document.createElement('div');
                    radio_container.setAttribute('class', 'g__radio_container');
                    for(let i = 0; i < radio_options.length; i++){
                        input_container = document.createElement('div');
                        input_container.setAttribute('class', 'g__radio_option');
                        input = document.createElement('input');
                        input.setAttribute('class', 'g__field_radio');
                        !!attr__form_id ? input.setAttribute('form_id', attr__form_id) : "";
                        input.type = 'radio';
                        input.name = r.title;
                        input.id = radio_options[i];
                        input.value = radio_options[i];
                        let radio_label = document.createElement('label');
                        radio_label.setAttribute('class', 'g__radio_label');
                        radio_label.id = radio_options[i];
                        radio_label.innerHTML = radio_options[i];
                        let radio = document.createElement('div');
                        radio.setAttribute('class', 'g__radio');
                        input_container.appendChild(input);
                        input_container.appendChild(radio);
                        input_container.appendChild(radio_label);
                        radio_container.appendChild(input_container);
                        ;
                    }
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
                    unit.innerHTML = r.range_unit || "";
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
                    section_id = r.section_id;
                    section = true;
                    section_count = parseInt(r.number_fields);
                break;
                case "subheader":
                    form_field = document.createElement('h2');
                    form_field.setAttribute('class', 'g__form_header');
                    form_field.innerHTML = r.value;
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
                    quil.setAttribute('class', 'g__quil_editor');
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

            let push_inline = !!r.inline_field && (r.inline_field.toString() == 'true') ? true : false;

            if (section){
                if(r.type != 'section'){
                    if (r.inline_field || inline_arr.length){
                        if(r.inline_field){
                            inline_arr.push(form_field)
                            section_count--;
                        } else if (inline_arr.length > 0){
                            inline_arr.push(form_field)
                            let inline_row = document.createElement('div');
                            inline_row.setAttribute('class', "g__inline_row");
                            inline_arr.forEach( (field) => {
                                inline_row.appendChild(field);
                            });
                            inline_arr = [];
                            section_group.push(inline_row);
                            section_count--;
                        }
                    } else {
                        section_group.push(form_field);
                        section_count--;
                    }

                }
                section_count ? section = true : section = false;
                if(!section){
                    let form_section_container = document.createElement('div');
                    form_section_container.setAttribute('class', "g__form_section_container");

                    //Form text
                    let section_header = document.createElement('div');
                    section_header.setAttribute('class', 'g__section_header');
                    !!section_id ? section_header.setAttribute('id', section_id) : "";
                    form_section_container.appendChild(section_header);
                    let title = document.createElement('h3');
                    title.setAttribute('class', 'g__section_title');
                    title.innerHTML = section_title || 'Section'
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
            } else if ((push_inline || inline_arr.length) && !section){
                if(r.inline_field){
                    inline_arr.push(form_field)
                    section ? section_count-- : "";
                } else if (inline_arr.length > 0){
                    inline_arr.push(form_field)
                    let inline_row = document.createElement('div');
                    inline_row.setAttribute('class', "g__inline_row");
                    inline_arr.forEach( (field) => {
                        inline_row.appendChild(field);
                    });
                    inline_arr = [];
                    if (section){
                        section_group.push(inline_row);
                    } else {
                        form_container.appendChild(inline_row);
                        inline_count = 0;
                    }
                }
            } else {
                if(r.type != 'section'){
                    form_container.appendChild(form_field);
                }

            }

        });

    /* -------------------- Hidden Option Fields ----------------------*/
    if(!!o.db_id || !!o.db_object || !!o.db_action || !!o.db_redirect){
        let hidden_container = document.createElement('div');
            hidden_container.classList.add('g__hidden_field');
        if(!!o.db_id){
            hidden = document.createElement('input');
            hiddenFields(hidden, "db_id", o.db_id);
            hidden_container.appendChild(hidden);
            form_container.appendChild(hidden_container);
        }
        if(!!o.db_object){
            hidden = document.createElement('input');
            hiddenFields(hidden, "db_object", o.db_object)
            hidden_container.appendChild(hidden);
            form_container.appendChild(hidden_container);
        }
        if(!!o.db_action){
            hidden = document.createElement('input');
            hiddenFields(hidden, "db_action", o.db_action)
            hidden_container.appendChild(hidden);
            form_container.appendChild(hidden_container);
        }
        if(!!o.db_redirect){
            hidden = document.createElement('input');
            hiddenFields(hidden, "redirect_to", o.db_redirect)
            hidden_container.appendChild(hidden);
            form_container.appendChild(hidden_container);
        }
    }

    // Submit & Cancel Button
    if(!o.hide_submit){
        let submit = document.createElement('button');
        submit.setAttribute('id', 'g__submit_btn');
        submit.setAttribute('type', 'submit');
        submit.innerHTML = o.submit_label || 'Submit';
        form_container.appendChild(submit);
    }
    if(o.allow_cancel){
        let cancel = document.createElement('button');
        cancel.setAttribute('id', 'g__cancel_btn');
        cancel.setAttribute('type', 'reset');
        cancel.innerHTML = o.cancel_label;
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
            let input = field.querySelector(`input[form_id="${attr__form_id}"]`);
            let textarea = field.querySelector(`textarea[form_id="${attr__form_id}"]`);
            let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
            let error_msg = field.querySelector('.g__error_msg');
            if(!!input && input.type != 'hidden'){
                if(!input.checkValidity()){
                    input.classList.add('invalid');
                    errors_arr.push(input);
                    error_msg.classList.add('active');
                    error_msg.innerHTML = input.validationMessage;
                } else {
                    input.classList.add('valid');
                    error_msg.classList.remove('active');
                }
            }
            if(!!textarea){
                if(!textarea.checkValidity()){
                    textarea.classList.add('invalid');
                    errors_arr.push(textarea);
                    error_msg.classList.add('active');
                    error_msg.innerHTML = textarea.validationMessage;
                } else {
                    textarea.classList.add('valid');
                    error_msg.classList.remove('active');
                }
            }
            if(!!select){
                    if(!select.checkValidity()){
                        select.nextSibling.classList.add('invalid');
                        errors_arr.push(select);
                        error_msg.classList.add('active');
                        error_msg.innerHTML = select.validationMessage;
                    } else {
                        select.nextSibling.classList.remove('invalid');
                        error_msg.classList.remove('active');
                    }
            }
        })
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
            console.log('sending');
            form.submit();
        }
    });
    /* -------------------- Reset ----------------------*/
    if(o.allow_cancel){
        let canel = document.getElementById('g__cancel_btn')
        canel.addEventListener('click', () => {
            form.reset();
        })
    }

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
        const step = output.step;
        const increase = wrap.querySelector(".g__number_increase");
        const decrease = wrap.querySelector(".g__number_decrease");
        increase.addEventListener('click', () => {

            let curr_num = output.value;
            const val = parseInt(output.value);
            if (curr_num === ''){
                output.value = !!step ? parseInt(step) : 1;
            } else if (!!step){
                output.value = val + parseInt(step);
            } else {
                output.value = val + 1;
            }
        });
        decrease.addEventListener('click', () => {

            let curr_num = output.value;
            const val = parseInt(output.value);
            if (curr_num === ''){
                output.value = !!step ? parseInt(step) : -1;
            } else if(!!step){
                output.value = val - parseInt(step);
            } else {
                output.value = val - 1;
            }
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

    /* -------------------- Quil Editors ----------------------*/
    let quil_fields = document.getElementsByClassName('g__quil_editor');
    if(quil_fields.length){
        for(let i = 0; i < quil_fields.length; i++){
            let quil_id = '#' + quil_fields[i].id;
            let quill_elm = document.getElementById(quil_fields[i].id);
            let quil_hidden_field = quill_elm.nextSibling;
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
            let quil_text_field = quill_elm.querySelector('.ql-editor');
            quil_text_field.addEventListener('input', (field) => {
                quil_hidden_field.value = quil_text_field.innerHTML;
            })
        }
    }
    /* -------------------- Character Limit ----------------------*/
    let char_count_field_arr = document.querySelectorAll('.g__form_field');
    char_count_field_arr.forEach((field) => {
        let input = field.querySelector('input');
        if(!!input){
            let char_limit = input.getAttribute('maxlength');
            if(char_limit > 0){
            input.addEventListener('keyup', () => {
                let counter_div = field.querySelector('.g__char_remain');
                let text = input.value;
                let count = text.length;
                let limit = parseInt(char_limit);
                counter_div.innerText = count + '/' + char_limit;
                if(count >= limit){
                    counter_div.classList.add('g__limit')
                } else {
                    counter_div.classList.remove('g__limit')
                }
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
    var f, x, i, j, l, ll, selElmnt, a, b, c, search_container, search;
    /* Look for any elements with the class "g__picklist": */
    f = document.getElementById(id);
    x = f.getElementsByClassName("g__picklist");
    if(x.length > 0){
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
    }
    /* -------------------- Picklist Multi ----------------------*/
    let multiple_field = document.getElementsByClassName("g__select_multiple");
    if(multiple_field.length > 0){
        $('.g__select_multiple').chosen({
            width: "auto"
        });
    }
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
        let input_arr = [];
        let select_arr = [];
        let textarea_arr = [];
        let save_data = {};
        let arr_form_fields = document.querySelectorAll(`${cssId} .g__form_field`);
        arr_form_fields.forEach((field) => {
            let input = field.querySelector(`input[form_id="${attr__form_id}"]`);
            input_arr.push(input);
            let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
            select_arr.push(select);
            let textarea = field.querySelector(`textarea[form_id="${attr__form_id}"]`);
            textarea_arr.push(textarea);
            if(!!input){
                input.addEventListener('input', () => {
                    start_auto_save(attr__form_id);
                });
            }
        })
        function start_auto_save(form_id){
            if(auto_save_count > 0){
                clearTimeout(auto_save_wait);
                auto_save_count = 0;
            }
            if(auto_save_count == 0){
                auto_save_wait = setTimeout(save, 3500, form_id);
                auto_save_count = 1;
            }
        }
        function save(form_id){
            input_arr.forEach(field => {
                if(!!field && field.type != 'file'){
                    let property = field.name;
                    let value = field.value;
                    save_data[property] = value
                }
            })
            select_arr.forEach(field => {
                if(!!field){
                    let property = field.name;
                    let value = field.value;
                    save_data[property] = value
                }
            })
            textarea_arr.forEach(field => {
                if(!!field){
                    let property = field.name;
                    let value = field.value;
                    save_data[property] = value
                }
            })
            $.ajax({
                type: o.method,
                url: o.action,
                data: save_data
            })
            .done(function(data) {
                console.log("autosave successful")
            })
            .fail(function(data) {
                console.log("autosave failed")
            });

            input_arr = [];
            select_arr = [];
            textarea_arr = [];
            count = 0;
            return false;
        }
    }
    /* -------------------- Show Password ----------------------*/
    let show_password = document.querySelectorAll('.g__password_show')
    if (show_password){
        show_password.forEach((field) => {
            field.addEventListener('click', () => {
                let password = field.previousSibling;
                let type = password.type;
                if (type === 'password'){
                    password.type = 'text';
                    field.innerHTML = '<i class="far fa-eye-slash"></i>';
                } else {
                    password.type = 'password';
                    field.innerHTML = '<i class="far fa-eye"></i>';
                }
            })
        })
    }
    /* -------------------- Platform Sections ----------------------*/
    if(platform){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const form_section = urlParams.get('form_section')
        if(form_section){
            let selected_section = document.getElementById(form_section);
            let selected_content = selected_section.nextSibling;
            selected_section.classList.add('active');
            if (selected_content.style.maxHeight) {
                selected_content.style.maxHeight = null;
            } else {
                selected_content.style.maxHeight = selected_content.scrollHeight + "px";
            }
        }
    }
    /* -------------------- Pattern Check ----------------------*/
    if(o.inline_validation){
        let all_field_containers = document.querySelectorAll('.g__form_field');
        all_field_containers.forEach((field) => {
        let input = field.querySelector('input');
        let select = field.querySelector('select');
        let select_desktop = field.querySelector('.select-selected');
        let error_msg = field.querySelector('.g__error_msg');
        if(!!input){
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
        if(!!select_desktop){
            select_desktop.addEventListener('click', () => {
                let valid_input = select_desktop.previousSibling.checkValidity();
                if(valid_input){
                    select_desktop.classList.add('valid');
                    select_desktop.classList.remove('invalid');
                    error_msg.innerText = '';
                } else {
                    select_desktop.classList.add('invalid');
                }
            });

            }
        });
    }
    /* -------------------- Dependency Field ----------------------*/
    r.forEach(function(r, num){
        const is_dep = (!!r.dependency_field && (!!r.dependency_values || !!r.dependency_not_blank));
        if (is_dep){
            let dep_name = document.getElementsByName(r.dependency_field);
            let dep_type = dep_name[0].type;
            let dep_parent = document.getElementById(dep_name[0].id);
            let dep_child = document.getElementById(r.id);
            let dep_blank = r.dependency_not_blank;
                switch (dep_type) {
                    case 'select-one':
                        dep_select(dep_type, dep_parent, dep_child, r.dependency_values, dep_blank)
                    break;
                    case 'checkbox':
                        checkbox_event(dep_type, dep_parent, dep_child, r.dependency_values)
                        checkbox(dep_type, dep_parent, dep_child, r.dependency_values)
                    break;
                    case 'text':
                        text_event(dep_type, dep_parent, dep_child, r.dependency_values, dep_blank)
                        text(dep_type, dep_parent, dep_child, r.dependency_values, dep_blank)
                    break;
            }
        }
        function values_arr(values){
            let arr = [];
            if(values.includes(',')){
                arr = values.split(',');
            } else {
                arr.push(values);
            }
            return arr;
        }

        function text_event(type, parent, child, values, blank){
            parent.addEventListener('keyup', () => {
                text(type, parent, child, values, blank)
            })
        }
        function text(type, parent, child, values, blank){
            const arr_values = values_arr(values);
                const dep_text = parent.value.toUpperCase();
                const dep_child = child;
                const dep_blank = blank;
                let is_match;
                arr_values.forEach((val) => {
                    let child_text = val.toUpperCase().trim();
                    let container = dep_child.closest('.g__form_field');
                    if(dep_text === child_text){
                        is_match = true;
                        container.classList.remove('dep_hide');
                    } else if((dep_text != "") && dep_blank){
                        is_match = true;
                        container.classList.remove('dep_hide');
                    } else if (!is_match) {
                        container.classList.add('dep_hide');
                    }
                })
        }
        function checkbox(type, parent, child, values){
            const dep_values = values;
                const child_value = (values === 'true') ? true : false;
                const dep_checked = parent.checked;
                const dep_child = child;
                let container = dep_child.closest('.g__form_field');
                if(dep_checked === child_value){
                    container.classList.remove('dep_hide');
                    container.classList.add('dep_show');
                } else {
                    container.classList.add('dep_hide');
                    container.classList.remove('dep_show');
                }
        }
        function checkbox_event(type, parent, child, values){
            parent.addEventListener('click', () => {
                checkbox(type, parent, child, values)
            })
        }
        function dep_select(type, parent, child, values, blank){
            let dep_desktop_select = parent.nextSibling;
            dep_desktop_select.addEventListener('click', () => {
                const dep_values = values;
                const arr_values = values_arr(values);
                const dep_selected = parent.nextSibling.innerText.toUpperCase();
                const dep_child = child;
                const dep_blank = blank;
                arr_values.forEach((val) => {
                    let child = val.toUpperCase().trim();
                    let container = dep_child.closest('.g__form_field');
                    if(dep_selected === child){
                        container.classList.remove('dep_hide');
                        container.classList.add('dep_show');
                    } else if ((dep_selected != "") && dep_blank){
                        container.classList.remove('dep_hide');
                        container.classList.add('dep_show');
                    } else {
                        container.classList.add('dep_hide');
                        container.classList.remove('dep_show');
                    }
                })
            })
            dep_desktop_select.click();
            dep_desktop_select.click();
        }
    })
    }else{
        let no_records = document.createElement('div');
        no_records.setAttribute('class', 'g__no_records');
        no_records.innerHTML = '<h2>Form</h2>'
        form_container.appendChild(no_records);
        document.getElementById(id).appendChild(no_records);
    }
}