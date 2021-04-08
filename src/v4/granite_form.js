"use strict";
function granite_form(formsBlock, jsonTheme) {
  const id = formsBlock.id;
  const o = formsBlock.options;
  const r = formsBlock.records;
  const t = jsonTheme;
  const platform = true;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  // micro settings attributes
  const attr__action = o.addapptation_action || "";
  const attr__form_id =
    o.form_id || "g__" + Math.random().toString(36).substring(2, 15);
  const attr__method = o.method || "POST";
  const attr__enctype = o.enctype || "application/x-www-form-urlencoded";
  /* -------------------- Check Alignment & Set Mode ----------------------*/
  let granite_div = document.getElementById(id);
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
  /* -------------------- Fonts ----------------------*/
  const font_include = document.getElementById("g__font_stylesheet");
  if (!font_include) {
    var head = document.head;
    var fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }
  /* -------------------- Safari Check ----------------------*/
  var is_safari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    );
  /* -------------------- CSS ----------------------*/
  let primary = t.primary || "#D44697";

  let formStyles = document.createElement("style");
  formStyles.id = "g__css_" + id;
  formStyles.innerHTML = `
    /* ------------------------ Global Styles ------------------------*/
    ${cssId}{
        /* Standard */
        --primary: ${primary};
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
        --border-radius: 4px;
        --field-height: 37px;
        --field-padding: 6px 12px;
        --error-color: #ea386e;
        --green: #00B28B;

        /* Mode Dependent */
        --background: #ffffff;
        --background-darker: #ffffff;
        --background-reverse: #000000;
        --background-range: #eaeaea;
        --background-hover: #eeeeee;
        --inner-background: #ffffff;
        --body: #ffffff;
        --font-color-reverse: #f5f5f5;
        --font-color-placeholder: #a1a1a1;
        --border: 1px solid #a1a1a1;
        --border-disabled: 1px solid #eaeaea;
        --font-color: #5d5d5d;
        --font-color-btns: #ffffff;

        /* css */
        padding: 15px;
        max-width: ${o.max_width || "auto"};
    }
    ${cssId}[mode="midnight"],
    #ui-datepicker-div[mode="midnight"]{
        --background: #303030;
        --background-darker: #151515;
        --background-reverse: #ffffff;
        --background-range: #2a2a2a;
        --background-hover: #3b3b3b;
        --inner-background: #5d5d5d;
        --body: #101010;
        --border: 1px solid #a1a1a1;
        --border-disabled: 1px solid #5d5d5d;
        --font-color: #ffffff;
        --font-color-btns: #ffffff;
        --font-color-disabled: #5d5d5d;
        --font-color-placeholder: #a1a1a1;
        --btn-fill-disabled: #404040
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
        align-items: ${o.align_action_row || "flex-start"};
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
    ${cssId} .g__form_action_btn:hover{
      filter: brightness(85%);
     }
    /* ------------------------ Global Field Styles ------------------------*/
    ${cssId} {
      padding: ${o.form_padding || "15px"};
    }
    ${cssId} .g__inline_row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
    }
    ${cssId} .g__inline_row .g__form_field{
      position: relative;
      font-family: var(--font-regular);
      font-weight: 300;
      display: flex;
      flex-direction: column;
      padding: 10px;
      flex: 1 1 0;
  }
    ${cssId} .g__form_field{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        display: flex;
        flex-direction: column;
        padding: 10px;
        flex: 1 1 0;
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
    ${cssId} .g__disabled{
      opacity: .5;
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
        border: 2px solid var(--error-color);
    }
    ${cssId} .g__form_field textarea.invalid{
        border: 2px solid var(--error-color);
    }
    ${cssId} .g__error_msg.active{
        display: flex;
    }
    ${cssId} .g__error_msg{
        display: none;
        justify-content: flex-end;
        padding: 2px 0;
        color: var(--error-color);
        font-size: .8rem;
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
    ${cssId} .g__form_field input::placeholder {
      color: var(--font-color-placeholder);
    }
    ${cssId} button{
        cursor: pointer;
    }
    ${cssId} .g__button_container{
      display:flex;
      flex-direction: row;
    }
    ${cssId} #g__submit_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: var(--primary);
        padding: 10px 40px;
        color: var(--font-color-btns);
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
        transition: all .5s ease;
    }
    ${cssId} #g__submit_btn:hover{
     filter: brightness(75%);
    }
    ${cssId} #g__cancel_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: #5d5d5d;
        padding: 10px 40px;
        color: var(--font-color-btns);
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
        transition: all .5s ease;
    }
    ${cssId} #g__cancel_btn:hover{
      filter: brightness(75%);
     }
    ${cssId} .g__form_action_btn{
      display: inline-flex;
      justify-content: center;
      font-family: var(--font-regular);
      font-weight: 300;
      background: var(--inner-background);
      padding: 10px 40px;
      margin: 15px;
      color: var(--font-color);
      border: var(--border);
      border-radius: var(--border-radius);
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__form_action_btn:hover{
      filter: brightness(75%);
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
            align-items: initial;
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
        display: none;
        // max-height: 0;
        // overflow: hidden;
        margin: 0 15px;
        transition: max-height 0.5s ease-out;
    }
    ${cssId} .g__form_section.g__section_active{
        display: block;
        margin: 0 35px;
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
    ${cssId} .g__section_header h3.g__section_title{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        flex-direction: row;
        color: var(--font-color);
        margin: 5px;
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
    ${cssId} .g__section_header.g__section_active .g__section_icon{
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    /* ------------------------ Section Progess ------------------------------*/
    ${cssId} .g__form_progress_section{
      display: block;
      animation-duration: 1s;
      animation-name: slidein;
    }
    @keyframes slidein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    ${cssId} .g__form_progress_section.g__progress_hidden{
      display: none;
    }
    ${cssId} .g__form_progress_section .g__form_section{
      display: block;
      max-height: max-content;
      overflow: inherit;
      margin: 0 15px;
    }
    ${cssId} .g__form_progress_section .g__section_line{
      display: none;
    }
    ${cssId} .g__form_progress_section .g__section_icon{
      display: none;
    }
    ${cssId} .g__form_progress_section .g__btn_step_container{
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      margin-top: 15px;
      border-top: 1px solid var(--background);
    }
    ${cssId} .g__form_progress_section .g__next_btn{
      padding: 5px 15px;
      background: #D44697;
      border: 0;
      color: var(--font-color);
      margin-left: auto;
    }
    ${cssId} .g__form_progress_section .g__back_btn{
      padding: 5px 15px;
      background: var(--inner-background);
      border: 0;
      color: var(--font-color);
      margin-right: auto;
    }
    /* ------------------------ Dependency ------------------------------*/
    ${cssId} .dep_hide{
        display: none;
    }
    ${cssId} .dep_show{
        display: block;
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
    ${cssId} .g__disabled .g__password_show{
        pointer-events: none;
    }
    ${cssId} .g__password_show{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--font-color);
        padding: 0 5px;
        bottom: 1;
        right: 1px;
        border-radius: 0 3px 3px 0;
        height: calc(var(--field-height) - 1px);
        border-left: var(--border);
        background: var(--inner-background);
    }
    ${cssId} .g__password_show:hover{
        cursor: pointer;
    }
    ${cssId} .g__password_show i{
        width: 30px;
        text-align: center;
    }
    /* ------------------------ Currency ------------------------------*/
    ${cssId} .g__show_counter .g__field_currency[type=number] {
        -moz-appearance: textfield;
    }
    ${cssId} .g__show_counter .g__field_currency::-webkit-outer-spin-button,
    ${cssId} .g__show_counter .g__field_currency::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    ${cssId} .g__currency_container{
      display: flex;
      align-items: center;
      position: relative;
    }
    ${cssId} .g__form_field input.g__field_currency{
      flex: 1;
      padding-left: 25px;
    }
    ${cssId} .g__currency_format {
      position: absolute;
      left: 10px;
      color: var(--font-color);
      opacity: .5;
    }
    /* ------------------------ Number ------------------------------*/
    ${cssId} .g__show_counter .g__field_number[type=number] {
        -moz-appearance: textfield;
    }
    ${cssId} .g__show_counter .g__field_number::-webkit-outer-spin-button,
    ${cssId} .g__show_counter .g__field_number::-webkit-inner-spin-button {
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
        bottom: 1px;
        right: 1px;
        border-radius: 0 3px 3px 0;
        width: 20px;
        height: calc(var(--field-height) - 1px);
        border-left: var(--border);
        background: var(--inner-background);
    }
    ${cssId} .g__number_increase{
        width: 100%;
        height: 50%;
        position: relative;
        border-bottom: var(--border);
    }
    ${cssId} .g__number_increase:active{
        background: #dce2e8;
    }
    ${cssId} .g__number_increase:before{
        position: absolute;
        content: " ";
        left: 6px;
        top: 5px;
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
        top: 7px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid var(--font-color);
    }
    ${cssId} .g__number_decrease{
        width: 100%;
        height: 50%;
        position: relative;
    }
    // Disabled
    ${cssId} .g__disabled .g__number_decrease:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__number_plus_minus{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__number_plus_minus:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__number_increase:active{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__number_decrease:active{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__number_increase:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__number_decrease:before{
      border-top: 5px solid var(--font-color-disabled);
    }
    ${cssId} .g__disabled .g__number_increase:before{
      border-bottom: 5px solid var(--font-color-disabled);
    }
    @media only screen and (max-width: 768px) {
        ${cssId} .g__show_counter .g__number_plus_minus{
            display: none;
        }
        ${cssId} .g__show_counter .g__field_number[type=number] {
            -moz-appearance: textfield;
        }
        ${cssId} .g__show_counter .g__field_number::-webkit-outer-spin-button,
        ${cssId} .g__show_counter .g__field_number::-webkit-inner-spin-button {
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
        right: 40px;
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
        background: var(--inner-background);
        right: 11px;
        border-radius: 0 3px 3px 0;
        width: 20px;
        height: calc(var(--field-height) - 1px);
        border-left: var(--border);
    }
    ${cssId} .g__range_increase{
        width: 100%;
        height: 50%;
        position: relative;
        border-bottom: var(--border);
    }
    ${cssId} .g__range_increase:active{
        background: #dce2e8;
    }
    ${cssId} .g__range_increase:before{
        position: absolute;
        content: " ";
        left: 6px;
        top: 5px;
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
        top: 7px;
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
        border: var(--border);
        border-radius: 5px;
    }
    ${cssId} input[type='range']::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      color: #13bba4;
    }
    ${cssId} .g__field_range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: var(--font-color-placeholder);
        border-radius: 15px;
        cursor: pointer;
    }
    ${cssId} .g__field_range::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: var(--font-color-placeholder);
        border-radius: 15px;
        cursor: pointer;
    }
    // Disabled
    ${cssId} .g__disabled .g__range_decrease:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__range_plus_minus{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__range_plus_minus:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__range_increase:active{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__range_decrease:active{
      background: var(--btn-fill-disabled);
    }
    ${cssId} .g__disabled .g__range_increase:hover{
      pointer-events: none;
    }
    ${cssId} .g__disabled .g__range_decrease:before{
      border-top: 5px solid var(--font-color-disabled);
    }
    ${cssId} .g__disabled .g__range_increase:before{
      border-bottom: 5px solid var(--font-color-disabled);
    }
    /* ------------------------ Quil ------------------------------*/
    ${cssId} .ql-toolbar {
        background: var(--background);
        border-top: var(--border);
        border-right: var(--border);
        border-left: var(--border);
        border-bottom: 0;
        border-radius:  var(--border-radius) var(--border-radius) 0 0;
    }
    ${cssId} .ql-toolbar.invalid {
      border: 2px solid var(--error-color);
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
        border-radius: 0 0 var(--border-radius) var(--border-radius);
    }
    ${cssId} .ql-editor.invalid {
      border: 2px solid var(--error-color);
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
        height: var(--field-height);
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
        font-size: 1.2rem;
        padding: 4px 15px;
        right: 1px;
        top: 1px;
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
        background: var(--inner-background);
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
        width: 100%;
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
    ${cssId} .g__disabled .g__radio_container {
      pointer-events: none;
    }
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
        flex-wrap: wrap;
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
    ${cssId} .g__radio_option input.invalid ~ .g__radio {
      border: 2px solid var(--error-color)
  }
    ${cssId} .g__radio_option:hover input ~ .g__radio {
        background-color: #ccc;
        cursor: pointer;
    }
    ${cssId} .g__radio_container input:checked ~ .g__radio {
        background-color: var(--background);
        border: 1px solid #a1a1a1;
    }
    ${cssId} .g__radio_container input:checked ~ .g__radio:before {
        content: " ";
        position: absolute;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        top: 15px;
        left: 5px;
        bottom: 0;
        background: var(--green);
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
    ${cssId} .g__disabled .g__check_container{
      pointer-events: none;
    }
    ${cssId} .g__check_container [type="checkbox"].g__unchecked,
	  ${cssId} [type="checkbox"].g__checked {
      position: absolute;
      left: 0;
      opacity: 0.01;
    }
    ${cssId} .g__check_container [type="checkbox"].g__unchecked + label,
	  ${cssId} .g__check_container [type="checkbox"].g__checked + label {
      position: relative;
      padding-left: 2.3em;
      color: var(--font-color);
      line-height: 1.7;
      cursor: pointer;
    }
    ${cssId} [type="checkbox"].g__unchecked + label:before{
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
	${cssId} [type="checkbox"].g__checked + label:before {
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
  ${cssId} [type="checkbox"].g__unchecked:hover + label:before {
    background: var(--inner-background);
}
  ${cssId} [type="checkbox"].g__unchecked + label:after,
	${cssId} [type="checkbox"].g__checked + label:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 9px;
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
  ${cssId} [type="checkbox"].g__unchecked + label:after {
		opacity: 0;
	}

	${cssId} [type="checkbox"].g__checked + label:after {
		opacity: 1;
    }
  ${cssId} [type="checkbox"].g__unchecked:disabled + label:before,
	${cssId} [type="checkbox"].g__checked:disabled + label:before {
		box-shadow: none;
		border: var(--border-disabled);
	}

	${cssId} [type="checkbox"].g__checked:disabled + label:after {
		color: #777;
	}

	${cssId} .g__check_container [type="checkbox"]:disabled + label {
		color: var(--font-color-disabled);
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
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        cursor: pointer;
    }
    ${cssId} .g__file_text{
        flex: 1;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        overflow: hidden;
        padding: var(--field-padding);
        color: var(--font-color-placeholder);
        height: var(--field-height);
        background: var(--background);
        border: var(--border);
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
        border-left: 1px solid var(--body);
    }
    ${cssId} .g__selected_container{
      background: var(--background-darker);
      display: inline-flex;
      align-items: center;
      height: 25px;
      flex-direction: row;
      padding: 0px 10px;
      border-radius: var(--border-radius);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    ${cssId} .g__selected_file{
      font-size: .8rem;
      color: var(--font-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    ${cssId} .g__file_delete{
        padding-left: 10px;
        color: var(--font-color);
        font-size: .6rem;
    }
    ${cssId} .g__file_delete:hover{
        cursor: pointer;
        filter: brightness(85%);
    }
    /* ------------------------ Spacing ------------------------------*/
    ${cssId} .g__spacing_container{
        display: flex;
        flex-direction: row;
        margin-top: 5px;
    }
    ${cssId} .g__field_options{
        display: flex;
        margin-left: 20px;
        margin-bottom: 5px;
    }
    ${cssId} .g__field_options:hover{
        cursor: pointer;
    }
    ${cssId} .g__field_options .active i{
        opacity: 1;
    }
    ${cssId} .g__field_options i{
        color: var(--font-color);
        opacity: .3;
        padding-right: 15px;
        transition: opacity .3s ease;
    }
    ${cssId} .g__field_options i:hover{
        opacity: .7;
        cursor: pointer;
    }
    ${cssId} .g__link{
        color: var(--font-color);
        opacity: .5;
        padding-top: 13px;
        margin: 0 7px;
        font-size: .7rem;
        transition: opacity .3s ease;
    }
    ${cssId} .g__link.active{
        opacity: 1;
    }
    ${cssId} .g__link:hover{
        opacity: .7;
        cursor: pointer;
    }
    ${cssId} .g__space_field.g__top,
    ${cssId} .g__space_field.g__bottom,
    ${cssId} .g__space_field.g__left,
    ${cssId} .g__space_field.g__right{
        flex: 1;
    }
    ${cssId} .g__space_field.g__bottom{
        margin-right: 30px;
        border-right: 1px solid var(--font-color);
        padding-right: 30px;
    }
    ${cssId} .g__space_field input{
        width: 100%;
    }
    ${cssId} .g__space_field p{
        color: var(--font-color);
        margin-top: 4px;
        font-size: .8rem;
        margin-bottom: 0;
        text-align: center;
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
    ${cssId} .chosen-search-input.default{
      color: var(--font-color-placeholder);
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
    /* ------------------------ Multi Drag and Drop ------------------------------*/
    .g__select_main{
      display: flex;
      flex-direction: row;
      background: var(--background);
      border: var(--border);
    }

    .g__drag_parent{
      display: flex;
      align-items: center;
      flex-direction: column;
      padding:15px;
      flex: 1;
    }
    .g__select_home{
    }
    .g__select_drop{
    }
    .g__multi_option{
      width: 100%;
      padding: 10px;
      color: var(--font-color);
      margin-bottom: 10px;
      border: var(--border);
      background: var(--background-darker);
    }
    .g__add_options{
      background: transparent;
      border: 0;
      color: var(--font-color);
      margin: 0 auto;
    }
    .g__remove_options{
      background: transparent;
      border: 0;
      color: var(--font-color);
      margin: 0 auto;
    }
    .g__select_main .g__multi_option.g__selected{
      background: var(--primary);
    }
    .g__multi_option.drag{
      background: var(--background-hover);
    }
    /* ------------------------ Picklist ------------------------------*/
    /* Default picklist with no custom dropdown */
    ${cssId} .g__picklist.g__default_picklist select {
        display: flex;
    }
    ${cssId} .g__default_picklist .g__select_default {
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
    ${cssId} .g__disabled .g__select_selected{
      pointer-events: none;
    }
    ${cssId} .g__picklist.g__default_picklist:after {
        position: absolute;
        content: "";
        top: 16px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: var(--font-color) transparent transparent transparent;
    }
    /* Custom picklist with custom dropdown */
    ${cssId} .g__picklist {
        position: relative;
    }
    ${cssId} .g__picklist.g__custom_picklist select {
        display: none;
    }
    ${cssId} .g__picklist.g__custom_picklist{
        background-color: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        height: var(--field-height);
    }
    ${cssId} .g__picklist.g__custom_picklist.invalid{
      border: 2px solid var(--error-color);
    }
    /* Style the arrow inside the select element: */
    ${cssId} .g__select_selected:after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: var(--font-color) transparent transparent transparent;
    }
    ${cssId} .g__select_selected.invalid {
        border: 2px solid var(--error-color);
    }
    /* Point the arrow upwards when the select box is open (active): */
    ${cssId} .g__select_selected.select-arrow-active:after {
        border-color: transparent transparent var(--font-color) transparent;
        top: 7px;
    }
    /* style the items (options), including the selected item: */
    ${cssId} .select-items div,.g__select_selected {
        display: flex;
        align-items: center;
        color: var(--font-color);
        padding: var(--field-padding);
        cursor: pointer;
        height: var(--field-height);
    }
    ${cssId} .g__select_selected {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
    /* Style items (options): */
    ${cssId} .select-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        background: var(--background);
        border: var(--border);
        border-top: 1px solid var(--body);
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
    @media only screen and (max-width: 576px) {
        ${cssId} .g__inline_row{
          align-items: initial;
        }
        ${cssId} .g__picklist.g__custom_picklist select {
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
        ${cssId} .g__select_selected {
            display: none;
        }
        ${cssId} .select-items {
            display: none;
        }
      }
    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(formStyles);

  /* -------------------- Regex Expressions ----------------------*/
  const patterns = {
    tel: "[0-9]{2}/[0-9]{2}/[0-9]{4}",
    number: "[0-9]*",
    email:
      "[-a-zA-Z0-9.-_]{1,}@[-a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z0-9]{2,}[a-zA-Z0-9.]{0,}",
    //             yourname @ domain   .  com          ( .uk )
  };
  /* -------------------- Form Header ----------------------*/
  if (!!o.title || o.description || o.button_1_label) {
    const form_action_row = document.createElement("div");
    form_action_row.setAttribute("class", "g__form_action_row");

    if (!!o.title) {
      const form_title = document.createElement("h2");
      form_title.setAttribute("class", "g__form_action_title");
      form_title.innerHTML = o.title;
      form_action_row.appendChild(form_title);
    }

    if (!!o.description) {
      const form_description = document.createElement("p");
      form_description.setAttribute("class", "g__form_action_description");
      form_description.innerHTML = o.description;
      form_action_row.appendChild(form_description);
    }

    document.getElementById(id).appendChild(form_action_row);
  }

  /* -------------------- Form Container ----------------------*/
  const form_container = document.createElement("form");
  // conditional attributes
  !!attr__action ? form_container.setAttribute("action", attr__action) : "";
  !!attr__form_id ? form_container.setAttribute("id", attr__form_id) : "";
  // static attributes
  form_container.setAttribute("method", attr__method);
  form_container.setAttribute("enctype", attr__enctype);
  form_container.setAttribute("novalidate", "false");
  // /* -------------------- Labels and Info ----------------------*/
  function addLabels(field_info_container, r) {
    //Global labels and character counter
    if (!!r.title) {
      let label = document.createElement("label");
      !!r.required ? label.classList.add("required") : "";
      label.setAttribute("for", r.name);
      label.innerText = r.title;
      field_info_container.appendChild(label);
    }
    if (r.length > 0 && r.show_count) {
      let count_container = document.createElement("div");
      count_container.setAttribute("class", "g__char_remain");
      count_container.innerText = "0/" + r.length;
      field_info_container.appendChild(count_container);
    }
    if (r.type === "spacing") {
      let field_options = document.createElement("div");
      field_options.setAttribute("class", "g__field_options");
      field_options.innerHTML =
        '<div class="g__device_icon active"></i><i class="far fa-desktop-alt"></i></div><div class="g__device_icon"><i class="fas fa-mobile-android-alt"></div>';
      field_info_container.appendChild(field_options);
    }
    return field_info_container;
  }
  /* -------------------- Standard Field Attributes ----------------------*/
  function basicAttributes(r, input, class_name) {
    input.setAttribute("class", class_name);
    !!r.type ? input.setAttribute("type", r.type) : "";
    !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
    !!r.name ? input.setAttribute("name", r.name) : "";
    !!r.value
      ? input.setAttribute("value", r.value)
      : input.setAttribute("value", "");
    !!r.title ? input.setAttribute("title", r.title) : "";
    !!r.placeholder ? input.setAttribute("placeholder", r.placeholder) : "";
    parseInt(r.length) > 0 ? input.setAttribute("maxlength", r.length) : "";
    !!r.invalid_message
      ? input.setAttribute(
          "oninvalid",
          `this.setCustomValidity("${r.invalid_message}")`
        )
      : "";
    input.required = r.required;
    input.disabled = r.disabled;
    return input;
  }
  /* -------------------- Hidden Fields ----------------------*/
  function hiddenFields(hidden, name, value) {
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", name);
    hidden.setAttribute("form_id", attr__form_id);
    hidden.setAttribute("value", value);
    return hidden;
  }

  /* -------------------- Form Fields (Record Loop) ----------------------*/
  // Section attributes
  let section = false;
  let section_count;
  let section_title = "";
  let section_id = [];
  let section_group = [];
  let arr_section_titles = [];
  let section_num = 0;
  let section_collapsed = [];
  let total_sections = 0;
  r.forEach((r) => {
    r.type === "section" ? total_sections++ : "";
  });
  let section_obj = {
    record_count: r.length - 1,
    start: false,
    end: false,
    is_last_record: false,
  };

  // Inline attributes
  let is_inline = false;
  let inline_arr = [];
  let inline_count = 0;
  if (r.length > 0) {
    r.forEach(function (r, num) {
      /* -------------------- Last record boolean ----------------------*/
      section_obj.record_count === num
        ? (section_obj.is_last_record = true)
        : "";
      /* -------------------- Error Field ----------------------*/
      let error_field = document.createElement("div");
      error_field.setAttribute("class", "g__error_msg");

      r.id = !!r.id
        ? r.id
        : "a__" + Math.random().toString(36).substring(2, 15);
      let class_name = "g__field_" + r.type;

      let field_info_container;
      let form_field;
      if (
        r.type != "subheader" &&
        r.type != "description" &&
        r.type != "hidden"
      ) {
        form_field = document.createElement("div");
        form_field.setAttribute("class", "g__form_field");
        !!r.classes ? form_field.classList.add(r.classes) : "";
        r.disabled ? form_field.classList.add("g__disabled") : "";

        field_info_container = document.createElement("div");
        field_info_container.setAttribute("class", "g__field_info");
      } else if (r.type === "hidden") {
        form_field = document.createElement("div");
        form_field.setAttribute("class", "g__hidden_field");
      }

      //build each field depending on the type
      let input;
      switch (r.type) {
        case "boolean":
        case "checkbox":
          let check_container = document.createElement("div");
          check_container.setAttribute("class", "g__check_container");
          input = document.createElement("input");
          r.type === "boolean" ? (r.type = "checkbox") : "";
          input.setAttribute("class", class_name);
          input.setAttribute("id", r.id);
          input.setAttribute("type", r.type);
          input.setAttribute("form_id", attr__form_id);
          input.setAttribute("name", r.name);
          input.setAttribute("value", r.value);
          input.setAttribute("title", r.title);
          input.checked = r.value;
          input.required = r.required;
          r.required ? input.classList.add('g__required') : "";
          r.value ? input.classList.add('g__checked'): input.classList.add('g__unchecked');
          let label = document.createElement("label");
          label.setAttribute("for", r.id);
          label.innerHTML = r.title;
          !!r.required ? (label.innerHTML += "*") : "";
          check_container.appendChild(input);
          check_container.appendChild(label);
          form_field.appendChild(check_container);
          form_field.appendChild(error_field);
          break;
        case "color":
          form_field.appendChild(addLabels(field_info_container, r));
          let color_container = document.createElement("div");
          color_container.setAttribute("class", "g__color_container");
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.setAttribute("pattern", "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");
          var hex_display = document.createElement("input");
          hex_display.setAttribute("class", "g__hex_value");
          hex_display.setAttribute("value", "#101010");
          r.disabled ? (hex_display.disabled = true) : "";
          hex_display.setAttribute(
            "pattern",
            "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
          );
          color_container.appendChild(input);
          color_container.appendChild(hex_display);
          form_field.appendChild(color_container);
          form_field.appendChild(error_field);
          break;
        case "currency":
          form_field.appendChild(addLabels(field_info_container, r));
          let curr_container = document.createElement("div");
          curr_container.setAttribute("class", "g__currency_container");
          r.show_stepper_arrow
            ? curr_container.classList.add("g__show_counter")
            : curr_container.classList.add("g__hide_counter");
          let curr_format = document.createElement("div");
          curr_format.setAttribute("class", "g__currency_format");
          curr_format.innerHTML = r.curr_format || "$";
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          r.type = "number";
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.inputmode="decimal";
          !!r.max_number ? (input.max = r.max_number) : "";
          !!r.min_number ? (input.min = r.min_number) : "";
          !!r.step ? (input.step = r.step) : "";
          !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
          //Increase decrease container
          let curr_counter = document.createElement("div");
          curr_counter.setAttribute("class", "g__number_plus_minus");
          // Increase container
          let curr_increase = document.createElement("div");
          curr_increase.setAttribute("class", "g__number_increase");
          curr_counter.appendChild(curr_increase);
          // Decrease container
          let curr_decrease = document.createElement("div");
          curr_decrease.setAttribute("class", "g__number_decrease");
          curr_counter.appendChild(curr_decrease);
          //Append the parent elements
          curr_container.appendChild(curr_format);
          curr_container.appendChild(input);
          curr_container.appendChild(curr_counter);
          form_field.appendChild(curr_container);
          form_field.appendChild(error_field);
          break;
        case "date":
          form_field.appendChild(addLabels(field_info_container, r));
          let date_container = document.createElement("div");
          date_container.setAttribute("class", "g__date_container");
          input = document.createElement("input");
          input.setAttribute("type", "date");
          input.setAttribute("class", "g__date_field");
          input.setAttribute("id", r.id);
          !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
          !!r.name ? input.setAttribute("name", r.name) : "";
          !!r.value ? input.setAttribute("value", r.value) : "";
          dateRange(r, input);
          !!r.placeholder
            ? input.setAttribute("placeholder", r.placeholder)
            : "";
          input.required = r.required;
          r.required ? input.classList.add('g__required') : "";
          input.disabled = r.disabled;
          input.autocomplete = "false";
          let date_icon = document.createElement("div");
          date_icon.setAttribute("class", "g__calendar_icon");
          date_icon.innerHTML = "<i class='fal fa-calendar-alt'></i>";
          date_icon.style.display = "none";
          date_container.appendChild(input);
          date_container.appendChild(date_icon);
          form_field.appendChild(date_container);
          form_field.appendChild(error_field);
          break;
        case "description":
          form_field = document.createElement("p");
          form_field.setAttribute("class", "g__form_description");
          form_field.setAttribute("style", `font-size:${r.font_size};`);
          form_field.innerHTML = r.value || "Description";
          break;
        case "email":
          form_field.appendChild(addLabels(field_info_container, r));
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          form_field.appendChild(input);
          form_field.appendChild(error_field);
          break;
        case "file":
          form_field.appendChild(addLabels(field_info_container, r));
          let file_container = document.createElement("div");
          file_container.setAttribute("class", "g__file_container");
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          !!r.accepted_file_types
            ? input.setAttribute("accept", r.accepted_file_types)
            : "";
          r.multiple ? input.setAttribute("multiple", "true") : "";
          input.setAttribute("hidden", "hidden");
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          let file_btn = document.createElement("button");
          file_btn.setAttribute("type", "button");
          file_btn.setAttribute("class", "g__file_btn");
          file_btn.innerText = "Choose File";
          let file_text = document.createElement("div");
          file_text.setAttribute("class", "g__file_text");
          file_text.innerText = r.placeholder || "No file chosen, yet.";
          file_container.appendChild(input);
          file_container.appendChild(file_btn);
          file_container.appendChild(file_text);
          form_field.appendChild(file_container);
          form_field.appendChild(error_field);
          break;
        case "hidden":
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          form_field.appendChild(input);
          break;
        case "multi":
          form_field.appendChild(addLabels(field_info_container, r));
          let multi_container = document.createElement("div");
          multi_container.setAttribute("class", "g__multi_container");
          let multi_options = r.options;
          let multi_double_arr =
            Array.isArray(multi_options) && Array.isArray(multi_options[0]);
          let multi_select = document.createElement("select");
          multi_select.multiple = true;
          r.required ? multi_select.classList.add('g__required') : "";
          if (multi_double_arr) {
            for (let i = 0; i < multi_options.length; i++) {
              let option = document.createElement("option");
              option.setAttribute("value", multi_options[i][0]);
              option.innerHTML = multi_options[i][1];
              multi_select.appendChild(option);
            }
          } else {
            for (let i = 0; i < multi_options.length; i++) {
              let option = document.createElement("option");
              option.setAttribute("value", multi_options[i]);
              option.innerHTML = multi_options[i];
              multi_select.appendChild(option);
            }
          }
          multi_container.appendChild(multi_select);
          form_field.appendChild(multi_container);

          break;
        case "number":
          form_field.appendChild(addLabels(field_info_container, r));
          let num_container = document.createElement("div");
          num_container.setAttribute("class", "g__number_container");
          r.show_stepper_arrow
            ? num_container.classList.add("g__show_counter")
            : num_container.classList.add("g__hide_counter");
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          !!r.max_number ? (input.max = r.max_number) : "";
          !!r.min_number ? (input.min = r.min_number) : "";
          !!r.step ? (input.step = r.step) : "";
          !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
          // Increase decrease container
          let num_counter = document.createElement("div");
          num_counter.setAttribute("class", "g__number_plus_minus");
          // Increase container
          let num_increase = document.createElement("div");
          num_increase.setAttribute("class", "g__number_increase");
          num_counter.appendChild(num_increase);
          // Decrease container
          let num_decrease = document.createElement("div");
          num_decrease.setAttribute("class", "g__number_decrease");
          num_counter.appendChild(num_decrease);
          //Append the parent elements
          num_container.appendChild(input);
          num_container.appendChild(num_counter);
          form_field.appendChild(num_container);
          form_field.appendChild(error_field);
          break;
        case "password":
          form_field.appendChild(addLabels(field_info_container, r));
          let pass_container = document.createElement("div");
          pass_container.setAttribute("class", "g__password_container");
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
          let pass_show = document.createElement("div");
          pass_show.setAttribute("class", "g__password_show");
          r.show_password_option
            ? ""
            : pass_show.classList.add("g__hide_password_btn");
          pass_show.innerHTML = '<i class="far fa-eye"></i>';
          pass_container.appendChild(input);
          pass_container.appendChild(pass_show);
          form_field.appendChild(pass_container);
          form_field.appendChild(error_field);
          break;
        case "picklist":
          form_field.appendChild(addLabels(field_info_container, r));
          const picklist_options = r.options;
          const picklist_double_arr =
            Array.isArray(picklist_options) &&
            Array.isArray(picklist_options[0]);
          input = document.createElement("div");
          r.multiple
            ? input.classList.add("g__picklist_multiple")
            : input.classList.add("g__picklist");
          o.default_picklists
            ? input.classList.add("g__default_picklist")
            : input.classList.add("g__custom_picklist");
          r.picklist_search ? input.classList.add("g__search") : "";
          let select = document.createElement("select");
          basicAttributes(r, select, class_name);
          r.required ? select.classList.add('g__required') : "";
          select.setAttribute("id", r.id);
          r.multiple
            ? select.classList.add("g__select_multiple")
            : select.classList.add("g__select_default");
          r.multiple ? select.setAttribute("multiple", "true") : "";
          if (o.default_picklists && r.placeholder) {
            let option_placeholder = document.createElement("option");
            option_placeholder.disabled = true;
            option_placeholder.selected = true;
            option_placeholder.hidden = true;
            option_placeholder.innerHTML = r.placeholder;
            select.appendChild(option_placeholder);
          }
          if (picklist_double_arr) {
            for (let i = 0; i < picklist_options.length; i++) {
              let option = document.createElement("option");
              option.setAttribute("value", picklist_options[i][0]);
              if(r.value === picklist_options[i][0]){
                option.selected = true;
              }
              option.innerHTML = picklist_options[i][1];
              select.appendChild(option);
            }
          } else {
            for (let i = 0; i < picklist_options.length; i++) {
              let option = document.createElement("option");
              option.setAttribute("value", picklist_options[i]);
              if(r.value === picklist_options[i]){
                option.selected = true;
              }
              option.innerHTML = picklist_options[i];
              select.appendChild(option);
            }
          }

          input.appendChild(select);
          form_field.appendChild(input);
          form_field.appendChild(error_field);
          break;
        case "radio":
          form_field.appendChild(addLabels(field_info_container, r));
          const radio_options = r.options;
          radio_container = document.createElement("div");
          radio_container.setAttribute("class", "g__radio_container");
          for (let i = 0; i < radio_options.length; i++) {
            input_container = document.createElement("div");
            input_container.setAttribute("class", "g__radio_option");
            input = document.createElement("input");
            input.setAttribute("class", "g__field_radio");
            !!attr__form_id ? input.setAttribute("form_id", attr__form_id) : "";
            input.type = "radio";
            input.name = r.title;
            input.required = r.required;
            r.required ? input.classList.add('g__required') : "";
            input.disabled = r.disabled;
            input.id = radio_options[i];
            input.value = radio_options[i];
            let radio_label = document.createElement("label");
            radio_label.setAttribute("class", "g__radio_label");
            radio_label.id = radio_options[i];
            radio_label.innerHTML = radio_options[i];
            let radio = document.createElement("div");
            radio.setAttribute("class", "g__radio");
            input_container.appendChild(input);
            input_container.appendChild(radio);
            input_container.appendChild(radio_label);
            radio_container.appendChild(input_container);
          }
          form_field.appendChild(radio_container);
          form_field.appendChild(error_field);
          break;
        case "range":
          form_field.appendChild(addLabels(field_info_container, r));
          let min = r.min_number || 0;
          let max = r.max_number || 100;
          let range_container = document.createElement("div");
          range_container.setAttribute("class", "g__range_container");
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.setAttribute("min", min);
          input.setAttribute("max", max);
          let output = document.createElement("input");
          output.disabled = r.disabled;
          output.setAttribute("class", "g__range_output");
          output.setAttribute("type", "number");
          // Unit indicator
          let unit = document.createElement("div");
          unit.setAttribute("class", "g__range_unit");
          unit.innerHTML = r.range_unit || "px";
          // Increase decrease container
          let plusMinus = document.createElement("div");
          plusMinus.setAttribute("class", "g__range_plus_minus");
          // Increase container
          let increase = document.createElement("div");
          increase.setAttribute("class", "g__range_increase");
          plusMinus.appendChild(increase);
          // Decrease container
          let decrease = document.createElement("div");
          decrease.setAttribute("class", "g__range_decrease");
          plusMinus.appendChild(decrease);
          //Append the parent elements
          range_container.appendChild(input);
          range_container.appendChild(output);
          range_container.appendChild(unit);
          range_container.appendChild(plusMinus);
          form_field.appendChild(error_field);
          form_field.appendChild(range_container);
          break;
        case "section":
          section_title = r.title;
          section_id.push(r.id);
          arr_section_titles.push(r.title);
          section_collapsed.push(r.collapsed);
          console.log("Loop: ", section_collapsed);
          section = true;
          section_count = parseInt(r.number_fields);
          section_obj.start
            ? (section_obj.end = true)
            : (section_obj.end = false);
          !!r.number_fields
            ? (section_obj.start = false)
            : (section_obj.start = true);
          break;
        case "spacing":
          form_field.appendChild(addLabels(field_info_container, r));
          const spacing_arr = [
            "top",
            "link",
            "bottom",
            "left",
            "link",
            "right",
          ];
          const spacing_container = document.createElement("div");
          spacing_container.setAttribute("class", "g__spacing_container");
          //Desktop hidden field
          const hidden_desktop = document.createElement("input");
          hidden_desktop.setAttribute("class", "g__space_desktop_hidden");
          hidden_desktop.type = "hidden";
          !!attr__form_id
            ? hidden_desktop.setAttribute("form_id", attr__form_id)
            : "";
          !!r.name ? (hidden_desktop.name = r.name) : "";
          !!r.title ? (hidden_desktop.title = r.title) : "";
          spacing_container.appendChild(hidden_desktop);
          //mobile hidden field
          const hidden_mobile = document.createElement("input");
          hidden_mobile.setAttribute("class", "g__space_desktop_hidden");
          hidden_mobile.type = "hidden";
          !!attr__form_id
            ? hidden_mobile.setAttribute("form_id", attr__form_id)
            : "";
          !!r.name ? (hidden_mobile.name = r.name) : "";
          !!r.title ? (hidden_mobile.title = r.title) : "";
          spacing_container.appendChild(hidden_mobile);
          spacing_arr.forEach((val, num) => {
            if (val === "link") {
              let field_container = document.createElement("div");
              num === 1
                ? field_container.setAttribute("class", `g__link g__link_tb`)
                : field_container.setAttribute("class", `g__link g__link_lr`);
              spacing_container.appendChild(field_container);
              let link = document.createElement("div");
              link.setAttribute("class", "g__space_link");
              link.innerHTML = '<i class="far fa-link"></i>';
              field_container.appendChild(link);
              form_field.appendChild(spacing_container);
            } else {
              let field_container = document.createElement("div");
              field_container.setAttribute("class", `g__space_field g__${val}`);
              spacing_container.appendChild(field_container);
              let input = document.createElement("input");
              input.type = "text";
              input.setAttribute("class", `g__input_${val}`);
              input.setAttribute("data-side", `${val}`);
              field_container.appendChild(input);
              let label = document.createElement("p");
              label.setAttribute("class", `g__label_${val}`);
              label.innerText = val;
              field_container.appendChild(label);
              form_field.appendChild(spacing_container);
            }
          });
          break;
        case "subheader":
          form_field = document.createElement("h2");
          form_field.setAttribute("class", "g__form_header");
          form_field.innerHTML = r.value || "Header";
          break;
        case "tel":
          form_field.appendChild(addLabels(field_info_container, r));
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.setAttribute("form", attr__form_id);
          form_field.appendChild(input);
          form_field.appendChild(error_field);
          break;
        case "textarea":
          form_field.appendChild(addLabels(field_info_container, r));
          input = document.createElement("textarea");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.innerHTML = r.value || "";
          input.rows = r.rows || "4";
          input.setAttribute("cols", "50");
          input.setAttribute("form", attr__form_id);
          form_field.appendChild(input);
          form_field.appendChild(error_field);
          break;
        case "quill":
          form_field.appendChild(addLabels(field_info_container, r));
          let quil = document.createElement("div");
          quil.setAttribute("class", "g__quil_editor");
          quil.setAttribute("id", r.id);
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          input.setAttribute("type", "hidden");
          form_field.appendChild(quil);
          form_field.appendChild(input);
          form_field.appendChild(error_field);
          break;
        default:
          form_field.appendChild(addLabels(field_info_container, r));
          input = document.createElement("input");
          input.setAttribute("id", r.id);
          basicAttributes(r, input, class_name);
          r.required ? input.classList.add('g__required') : "";
          form_field.appendChild(input);
          form_field.appendChild(error_field);
      }

      let push_inline = !!r.inline_field && r.inline_field.toString() == "true" ? true : false;
      if (section) {
        if (r.type != "section") {
          if (r.inline_field || inline_arr.length) {
            if (r.inline_field) {
              inline_arr.push(form_field);
              section_count === "" ? "" : section_count--;
            } else if (inline_arr.length > 0) {
              inline_arr.push(form_field);
              let inline_row = document.createElement("div");
              inline_row.setAttribute("class", "g__inline_row");
              inline_arr.forEach((field) => {
                inline_row.appendChild(field);
              });
              inline_arr = [];
              section_group.push(inline_row);
              section_count === "" ? "" : section_count--;
            }
          } else {
            section_group.push(form_field);
            section_count === "" ? "" : section_count--;
          }
        }
        section_count || section_obj.start
          ? (section = true)
          : (section = false);
        if (!section || section_obj.end || section_obj.is_last_record) {
          let form_section_container = document.createElement("div");
          if (o.section_slider) {
            form_section_container.setAttribute(
              "class",
              "g__form_progress_section g__progress_hidden"
            );
            //Back and next button container
            let btn_container = document.createElement("div");
            btn_container.setAttribute("class", "g__btn_step_container");
            //Back button
            if (section_num) {
              let back_btn = document.createElement("button");
              back_btn.setAttribute("class", "g__back_btn");
              back_btn.type = "button";
              back_btn.innerHTML = "Back";
              btn_container.appendChild(back_btn);
            }
            //Next button
            if (section_num + 1 != total_sections) {
              let next_btn = document.createElement("button");
              next_btn.setAttribute("class", "g__next_btn");
              next_btn.type = "button";
              next_btn.innerHTML = "Next";
              btn_container.appendChild(next_btn);
            }
            //push button container to array
            section_group.push(btn_container);
          } else {
            form_section_container.setAttribute(
              "class",
              "g__form_section_container"
            );
            form_section_container.id = section_id[section_num];
          }
          //Form text
          let section_header = document.createElement("div");
          section_header.setAttribute("class", "g__section_header");

          form_section_container.appendChild(section_header);
          let title = document.createElement("h3");
          title.setAttribute("class", "g__section_title");
          title.innerHTML = arr_section_titles[section_num] || "Section";
          let line = document.createElement("div");
          line.setAttribute("class", "g__section_line");
          let icon = document.createElement("div");
          icon.setAttribute("class", "g__section_icon");
          icon.innerHTML = '<i class="far fa-chevron-up"></i>';
          section_header.appendChild(title);
          section_header.appendChild(line);
          section_header.appendChild(icon);

          //Form Section
          let form_section = document.createElement("div");
          form_section.setAttribute("class", "g__form_section");
          form_section_container.appendChild(form_section);
          section_group.forEach((field) => {
            form_section.appendChild(field);
          });
          console.log("Build: ", section_collapsed);
          if(!section_collapsed[section_num]){
            section_header.classList.add('g__section_active');
            form_section.classList.add('g__section_active');
          }

          section_group = [];
          section_title = "";
          section_obj.end = false;
          section_num += 1;
          form_container.appendChild(form_section_container);
        }

      } else if ((push_inline || inline_arr.length) && !section) {
        if (r.inline_field) {
          inline_arr.push(form_field);
          if (section){
            section_count === "" ? "" : section_count--;
          }
        } else if (inline_arr.length > 0) {
          inline_arr.push(form_field);
          let inline_row = document.createElement("div");
          inline_row.setAttribute("class", "g__inline_row");
          inline_arr.forEach((field) => {
            inline_row.appendChild(field);
          });
          inline_arr = [];
          if (section) {
            section_group.push(inline_row);
          } else {
            form_container.appendChild(inline_row);
            inline_count = 0;
          }
        }
      } else {
        if (r.type != "section") {
          form_container.appendChild(form_field);
        }
      }
    });

    /* -------------------- Hidden Option Fields ----------------------*/
    if (!!o.db_id || !!o.db_object || !!o.db_action || !!o.db_redirect) {
      let hidden_container = document.createElement("div");
      hidden_container.classList.add("g__hidden_field");
      if (!!o.db_id) {
        let hidden_db = document.createElement("input");
        hiddenFields(hidden_db, "Id", o.db_id);
        hidden_container.appendChild(hidden_db);
        form_container.appendChild(hidden_container);
      }
      if (!!o.db_object) {
        let hidden_object = document.createElement("input");
        hiddenFields(hidden_object, "object", o.db_object);
        hidden_container.appendChild(hidden_object);
        form_container.appendChild(hidden_container);
      }
      if (!!o.db_action) {
        let hidden_action = document.createElement("input");
        hiddenFields(hidden_action, "submit_form", o.db_action);
        hidden_container.appendChild(hidden_action);
        form_container.appendChild(hidden_container);
      }
      if (!!o.db_redirect) {
        let hidden_redirect = document.createElement("input");
        hiddenFields(hidden_redirect, "redirect_to", o.db_redirect);
        hidden_container.appendChild(hidden_redirect);
        form_container.appendChild(hidden_container);
      }
      if (!!o.flash_message) {
        let hidden_flash = document.createElement("input");
        hiddenFields(hidden_flash, "flash_message", o.flash_message);
        hidden_container.appendChild(hidden_flash);
        form_container.appendChild(hidden_container);
      }
    }
    // Submit & Cancal Container
    if (!o.hide_submit || o.allow_cancel) {
      let button_container = document.createElement("div");
      button_container.id = "g__submit_cancel";
      button_container.setAttribute("class", "g__button_container");
      // Submit & Cancel Button
      if (!o.hide_submit) {
        let submit = document.createElement("button");
        submit.setAttribute("id", "g__submit_btn");
        submit.setAttribute("type", "submit");
        o.show_loader ? submit.classList.add('show_loader') : "";
        submit.innerHTML = o.submit_label || "Submit";
        button_container.appendChild(submit);
      }
      if (o.allow_cancel) {
        let cancel = document.createElement("button");
        cancel.setAttribute("id", "g__cancel_btn");
        cancel.setAttribute("type", "reset");
        cancel.innerHTML = o.cancel_label;
        button_container.appendChild(cancel);
      }
      if (!!o.button_1_label) {
        const form_custom_btn = document.createElement("a");
        form_custom_btn.href = o.button_1_href;
        form_custom_btn.setAttribute("class", "g__form_action_btn");
        form_custom_btn.innerHTML = o.button_1_label;
        button_container.appendChild(form_custom_btn);
      }
      form_container.appendChild(button_container);
    }

    // append the form to the page
    document.getElementById(id).appendChild(form_container);
    /* -------------------- Submit ----------------------*/
    let form = document.getElementById(attr__form_id);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let all_field_containers = document.querySelectorAll(".g__form_field");
      let all_sections = document.querySelectorAll(
        ".g__form_section_container"
      );
      let errors_arr = [];

      all_field_containers.forEach((field) => {
        let input = field.querySelector(`input[form_id="${attr__form_id}"]`);
        let textarea = field.querySelector(
          `textarea[form_id="${attr__form_id}"]`
        );
        let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
        let error_msg = field.querySelector(".g__error_msg");
        let is_quill, is_required;
        if (!!input) {
          is_quill = input.classList.contains("g__field_quill");
          is_required = input.required;
        }
        if (is_quill && is_required) {
          let quill_toolbar = field.querySelector(".ql-toolbar");
          let quill_editor = field.querySelector(".ql-editor");
          let quill_content = quill_editor.innerHTML;
          if (quill_content === "<p><br></p>") {
            errors_arr.push(input);
            error_msg.classList.add("active");
            quill_toolbar.classList.add("invalid");
            quill_editor.classList.add("invalid");
            error_msg.innerHTML = "Enter a valid value.";
          } else {
            error_msg.classList.remove("active");
            quill_toolbar.classList.remove("invalid");
            quill_editor.classList.remove("invalid");
            quill_editor.classList.add("valid");
          }
        }
        if (!!input && input.type != "hidden") {
          if (!input.checkValidity()) {
            input.classList.remove("valid");
            input.classList.add("invalid");
            errors_arr.push(input);
            error_msg.classList.add("active");
            error_msg.innerHTML = input.validationMessage;
          } else {
            input.classList.add("valid");
            input.classList.remove("invalid");
            error_msg.classList.remove("active");
          }
        }
        if (!!textarea) {
          if (!textarea.checkValidity()) {
            textarea.classList.add("invalid");
            textarea.classList.remove("valid");
            errors_arr.push(textarea);
            error_msg.classList.add("active");
            error_msg.innerHTML = textarea.validationMessage;
          } else {
            textarea.classList.add("valid");
            textarea.classList.remove("invalid");
            error_msg.classList.remove("active");
          }
        }
        if (!!select) {
          let select_type;
          if (!select.checkValidity()) {
            select_type = select.parentElement.classList.contains(
              "g__custom_picklist"
            );
            if (select_type) {
              select.parentElement.classList.add("invalid");
            } else {
              select.classList.add("invalid");
            }
            errors_arr.push(select);
            error_msg.classList.add("active");
            error_msg.innerHTML = select.validationMessage;
          } else {
            if (select_type) {
              select.parentElement.classList.remove("invalid");
            } else {
              select.classList.remove("invalid");
            }
            error_msg.classList.remove("active");
          }
        }
      });
      if (all_sections.length) {
        all_sections.forEach((form_section) => {
          let errors = form_section.querySelectorAll(".g__error_msg");
          let header = form_section.querySelector(".g__section_header");
          let section_content = form_section.querySelector(".g__form_section");
          errors.forEach((msg) => {
            let content = msg.innerHTML;
            if (content) {
              header.classList.add("g__section_active");
              section_content.classList.add("g__section_active");
              section_content.style.maxHeight =
                section_content.scrollHeight + "px";
            }
          });
        });
      }
      if (!errors_arr.length) {
        form.submit();
      }
    });
    /* -------------------- Reset ----------------------*/
    if (o.allow_cancel) {
      let canel = document.getElementById("g__cancel_btn");
      canel.addEventListener("click", () => {
        window.history.back();
      });
    }

    /* -------------------- Currency Field ----------------------*/
    let all_curr = granite_div.querySelectorAll(".g__currency_container");
    all_curr.forEach((wrap) => {
      const output = wrap.querySelector(".g__field_currency");
      const step = output.step;
      const increase = wrap.querySelector(".g__number_increase");
      const decrease = wrap.querySelector(".g__number_decrease");
      increase.addEventListener("click", () => {
        let curr_num = output.value;
        const val = parseFloat(output.value);
        if (curr_num === "") {
          output.value = !!step ? parseFloat(step) : 1;
        } else if (!!step) {
          output.value = val + parseFloat(step);
        } else {
          output.value = val + 1;
        }
      });
      decrease.addEventListener("click", () => {
        let curr_num = output.value;
        const val = parseFloat(output.value);
        if (curr_num === "") {
          output.value = !!step ? parseFloat(step) : -1;
        } else if (!!step) {
          output.value = val - parseFloat(step);
        } else {
          output.value = val - 1;
        }
      });
    });
    /* -------------------- File Enctype Change ----------------------*/
    let all_input = form.querySelectorAll("input");
    all_input.forEach((field) => {
      let type = field.type;
      if (type === "file") {
        form.enctype = "multipart/form-data";
      }
    });
    /* -------------------- File Upload ----------------------*/
    let all_files = granite_div.querySelectorAll(".g__file_container");
    all_files.forEach((file) => {
      let real_file_field = file.querySelector(".g__field_file");
      let file_btn = file.querySelector(".g__file_btn");
      let file_text = file.querySelector(".g__file_text");
      // let file_delete = file.querySelector(".g__file_delete");

      // Activate the real file field on click
      file_btn.addEventListener("click", () => {
        real_file_field.click();
      });

      real_file_field.addEventListener("change", () => {
        if (real_file_field.value) {
          file_text.innerHTML = "";
          let file_container = document.createElement("div");
          file_container.classList.add("g__selected_container");
          let file_selected = document.createElement("div");
          file_selected.classList.add("g__selected_file");
          let file_delete = document.createElement("div");
          file_delete.innerHTML = "<i class='fal fa-times'></i>";
          file_delete.setAttribute("class", "g__file_delete");
          file_delete.addEventListener("click", () => {
            if (real_file_field.value) {
              file_selected.innerHTML = "";
              file_text.innerText = "No file chosen, yet.";
              real_file_field.value = "";
            }
          });
          file_selected.innerHTML = real_file_field.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
          )[1];
          file_container.appendChild(file_selected);
          file_container.appendChild(file_delete);
          file_text.appendChild(file_container);
        } else {
          file_text.innerText = "No file chosen, yet.";
        }
      });
    });

    /* -------------------- Section ----------------------*/
    if (o.section_slider) {
      const progress_section = granite_div.querySelectorAll(
        ".g__form_progress_section"
      );
      const submit = granite_div.querySelector("#g__submit_cancel");
      submit.remove();
      if (progress_section) {
        progress_section.forEach((section, count) => {
          count ? "" : section.classList.toggle("g__progress_hidden");
          let btn_container = section.querySelector(".g__btn_step_container");
          let next_btn = section.querySelector(".g__next_btn");
          let back_btn = section.querySelector(".g__back_btn");
          let next_section = section.nextSibling;
          let prev_section = section.previousSibling;
          if (next_btn) {
            next_btn.addEventListener("click", () => {
              section.classList.toggle("g__progress_hidden");
              next_section.classList.toggle("g__progress_hidden");
            });
          }
          if (back_btn) {
            back_btn.addEventListener("click", () => {
              section.classList.toggle("g__progress_hidden");
              prev_section.classList.toggle("g__progress_hidden");
            });
          }
          if (section_num - 1 === count) {
            btn_container.before(submit);
          }
        });
      }
    } else {
      const all_sections = granite_div.querySelectorAll(".g__section_header");
      if (all_sections) {
        all_sections.forEach((form_section) => {
          const section_header = form_section.nextSibling;
          form_section.addEventListener("click", () => {
            form_section.classList.toggle("g__section_active");
            section_header.classList.toggle("g__section_active");
            if (section_header.style.maxHeight) {
              section_header.style.maxHeight = null;
            } else {
              section_header.style.maxHeight =
                section_header.scrollHeight + "px";
            }
          });
        });
      }
    }

    /* -------------------- Number ----------------------*/
    let all_numbers = granite_div.querySelectorAll(".g__number_container");
    all_numbers.forEach((wrap) => {
      const output = wrap.querySelector(".g__field_number");
      const step = output.step;
      const increase = wrap.querySelector(".g__number_increase");
      const decrease = wrap.querySelector(".g__number_decrease");
      const max = output.max;
      const min = output.min;
      increase.addEventListener("click", () => {
        let curr_num = output.value;
        const val = parseInt(output.value);
        if (output.value < max || !max) {
          if (curr_num === "" && curr_num < min) {
            output.value = min;
          } else if (curr_num === "") {
            output.value = !!step ? parseInt(step) : 1;
          } else if (!!step) {
            output.value = val + parseInt(step);
          } else {
            output.value = val + 1;
          }
        }
      });
      decrease.addEventListener("click", () => {
        let curr_num = output.value;
        const val = parseInt(output.value);
        if (output.value > min) {
          if (curr_num === "") {
            output.value = !!step ? parseInt(step) : -1;
          } else if (!!step) {
            output.value = val - parseInt(step);
          } else {
            output.value = val - 1;
          }
        }
      });
    });
    /* -------------------- Spacing Values ----------------------*/
    let spacing_field_arr = document.querySelectorAll(".g__spacing_container");
    if (spacing_field_arr.length) {
      spacing_field_arr.forEach((space) => {
        let parent = space.parentNode;
        let fields_arr = parent.querySelectorAll(".g__space_field");
        let spacing_values = { top: "", right: "", bottom: "", left: "" };
        fields_arr.forEach((field) => {
          // Field input change
          field.addEventListener("input", (val) => {
            let desktop_hidden = parent.querySelector(
              ".g__space_desktop_hidden"
            );
            let focus_field = val.target;
            let side = focus_field.getAttribute("data-side");
            spacing_values[side] = focus_field.value;
            let is_linked = focus_field.parentElement.classList.contains(
              "g__linked"
            );

            desktop_hidden.value = `${!!spacing_values.top} ${!!spacing_values.right} ${!!spacing_values.bottom} ${!!spacing_values.left}`;
          });
        });
        // Link fields
        let link_arr = parent.querySelectorAll(".g__link");
        link_arr.forEach((link_field) => {
          link_field.addEventListener("click", () => {
            link_field.classList.toggle("active");
            link_field.previousSibling.classList.toggle("g__linked");
            link_field.nextSibling.classList.toggle("g__linked");
          });
        });
        // Device selector
        let device_icons = parent.querySelectorAll(".g__device_icon");
        device_icons.forEach((selected) => {
          selected.addEventListener("click", () => {
            let device_arr = selected.parentNode.children;
            for (let i = 0; i < device_arr.length; i++) {
              device_arr[i].classList.remove("active");
            }
            selected.classList.add("active");
          });
        });
      });
    }
    /* -------------------- Range Output ----------------------*/
    let all_ranges = granite_div.querySelectorAll(".g__range_container");
    let all_range_increase = document.querySelectorAll(".g__range_increase");

    all_ranges.forEach((wrap) => {
      const range = wrap.querySelector(".g__field_range");
      const output = wrap.querySelector(".g__range_output");
      const increase = wrap.querySelector(".g__range_increase");
      const decrease = wrap.querySelector(".g__range_decrease");
      const range_min = range.min;
      const range_max = range.max;

      increase.addEventListener("click", () => {
        const val = parseInt(output.value);
        if (val < range_max) {
          output.value = val + 1;
          setRange(range, output.value);
        }
      });
      decrease.addEventListener("click", () => {
        const val = parseInt(output.value);
        if (val > range_min) {
          output.value = val - 1;
          setRange(range, output.value);
        }
      });

      output.addEventListener("change", () => {
        const val = output.value;
        range.value = val;
      });
      range.addEventListener("input", () => {
        setOutput(range, output);
      });

      setOutput(range, output);
    });
    function setRange(range, val) {
      range.value = val;
    }
    function setOutput(range, output) {
      const val = range.value;
      const min = range.min ? range.min : 0;
      const max = range.max ? range.max : 100;
      output.value = val;
    }

    /* -------------------- Quil Editors ----------------------*/
    let quil_fields = granite_div.getElementsByClassName("g__quil_editor");
    if (quil_fields.length) {
      for (let i = 0; i < quil_fields.length; i++) {
        let quil_id = "#" + quil_fields[i].id;
        let quill_elm = document.getElementById(quil_fields[i].id);
        let quil_hidden_field = quill_elm.nextSibling;
        let disabled = quil_hidden_field.disabled;
        let value = quil_hidden_field.value;
        var quill = new Quill(quil_id, {
          debug: "false",
          modules: {
            history: { userOnly: true, delay: 1000 },
          },
          theme: "snow",
          readOnly: quil_hidden_field.disabled,
          placeholder: quil_hidden_field.placeholder,
        });
        let quil_text_field = quill_elm.querySelector(".ql-editor");
        quil_text_field.innerHTML = value;
        quil_text_field.addEventListener("input", (field) => {
          quil_hidden_field.value = quil_text_field.innerHTML;
        });
      }
    }
    /* -------------------- Character Limit ----------------------*/
    let char_count_field_arr = document.querySelectorAll(".g__form_field");
    char_count_field_arr.forEach((field) => {
      let input = field.querySelector("input, textarea");
      let quill = field.querySelector(".ql-editor");
      if (!!input) {
        let char_limit = input.getAttribute("maxlength");
        if (char_limit > 0) {
          input.addEventListener("keyup", () => {
            let counter_div = field.querySelector(".g__char_remain");
            let text = input.value;
            let count = text.length;
            let limit = parseInt(char_limit);
            if (!!counter_div) {
              counter_div.innerText = count + "/" + char_limit;
              if (count >= limit) {
                counter_div.classList.add("g__limit");
              } else {
                counter_div.classList.remove("g__limit");
              }
            }
          });
        }
      }
      //Quill Counter
      if (!!quill) {
        let quill_hidden = field.querySelector(".g__field_quill");
        let char_limit = quill_hidden.getAttribute("maxlength");
        if (char_limit > 0) {
          quill.addEventListener("input", () => {
            let counter_div = field.querySelector(".g__char_remain");
            let text = quill_hidden.value;
            let strippedString = text.replace(/(<([^>]+)>)/gi, "");
            let count = strippedString.length;
            let limit = parseInt(char_limit);
            if (!!counter_div) {
              counter_div.innerText = count + "/" + char_limit;
              if (count >= limit) {
                counter_div.classList.add("g__limit");
              } else {
                counter_div.classList.remove("g__limit");
              }
            }
          });
        }
      }
    });

    /* -------------------- Color field values ----------------------*/
    let color_fields = granite_div.getElementsByClassName("g__hex_value");
    for (let i = 0; i < color_fields.length; i++) {
      color_fields[i].addEventListener("keyup", function () {
        let first_char = this.value.substr(0, 1);
        first_char != "#" ? (this.value = "#" + this.value) : "";
        let color = this.value;
        this.previousSibling.value = color;
      });
    }
    let color_pickers = granite_div.getElementsByClassName("g__field_color");
    for (let i = 0; i < color_pickers.length; i++) {
      color_pickers[i].addEventListener("change", function () {
        let color = this.value;
        this.nextSibling.value = color;
      });
    }

    /* -------------------- Datepicker **jQuery** ----------------------*/
    function dateRange(r, input) {
      if (r.date_future || r.date_past || r.date_range) {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1; //January is 0!
        let year = date.getFullYear();
        if (month < 10) {
          month = "0" + month.toString();
        }
        if (day < 10) {
          day = "0" + day.toString();
        }
        let today = year + "-" + month + "-" + day;
        let range,
          date_min_max,
          range_day,
          range_month,
          range_year,
          range_full_date,
          is_range_pos;
        if (!!r.date_range) {
          var d = new Date();
          let range_num = parseInt(r.date_range);
          is_range_pos = range_num > 0;
          r.date_future ? d.setDate(d.getDate() - range_num) : "";
          r.date_past ? d.setDate(d.getDate() + range_num) : "";
          if (!r.date_future && !r.date_past && !!range_num) {
            d.setDate(d.getDate() + range_num);
          }
          range_day = d.getDate();
          range_month = d.getMonth() + 1;
          range_year = d.getFullYear();
          if (range_month < 10) {
            range_month = "0" + range_month.toString();
          }
          if (range_day < 10) {
            range_day = "0" + range_day.toString();
          }
          range_full_date = range_year + "-" + range_month + "-" + range_day;
        }

        if (!!r.date_range && r.date_future) {
          input.setAttribute("min", range_full_date);
          input.setAttribute("max", today);
        } else if (!!r.date_range && r.date_past) {
          input.setAttribute("max", range_full_date);
          input.setAttribute("min", today);
        } else if (r.date_future || r.date_past) {
          r.date_future ? input.setAttribute("max", today) : "";
          r.date_past ? input.setAttribute("min", today) : "";
        } else if (!!r.date_range && is_range_pos) {
          input.setAttribute("max", range_full_date);
        } else if (!!r.date_range && !is_range_pos) {
          input.setAttribute("min", range_full_date);
        }
        return input;
      }
    }
    let date_fields = granite_div.getElementsByClassName("g__date_field");
    for (let i = 0; i < date_fields.length; i++) {
      let type = date_fields[i].type;
      let icon = date_fields[i].nextSibling;
      if (type === "text") {
        icon.style.display = "block";
        let date_id = "#" + date_fields[i].id;
        $(date_id).datepicker({
          format: "yyyy-mm-dd",
          autoclose: true,
          startDate: "+1d",
          showAnim: "slideDown",
          changeMonth: true,
          changeYear: true,
          prevText: '<i class="far fa-fw fa-chevron-left"></i>',
          nextText: '<i class="far fa-fw fa-chevron-right"></i>',
        });
      }
      $(".g__calendar_icon").on("click", function (field) {
        let date = $(this).prev();
        date.datepicker("show");
      });
      $("#ui-datepicker-div").attr("mode", mode);
    }

    /* -------------------- Custom Multi Drag & Drop ----------------------*/
    let arr_multi = form.getElementsByClassName("g__multi_container");
    let length = arr_multi.length;
    if (length) {
      for (i = 0; i < length; i++) {
        let multi_elm = arr_multi[i].getElementsByTagName("select")[0];
        let options_length = multi_elm.length;
        let main_container = document.createElement("div");
        main_container.setAttribute("class", "g__select_main");

        let left_container = document.createElement("div");
        left_container.id = "g__select_home";
        left_container.setAttribute("class", "g__drag_parent");

        let add_btn = document.createElement("button");
        add_btn.type = "button";
        add_btn.setAttribute("class", "g__add_options");
        add_btn.innerHTML = "Add <i class='far fa-chevron-double-right'></i>";

        left_container.appendChild(add_btn);

        left_container.addEventListener("dragover", (event) => {
          event.preventDefault();
        });
        left_container.addEventListener("drop", (event) => {
          const id = event.dataTransfer.getData("text");
          const draggableElement = document.getElementById(id);
          const dropzone = left_container;
          dropzone.appendChild(draggableElement);
          event.dataTransfer.clearData();
          let options_left = left_container.children;
          options_left.length
            ? optionAddDrop(options_left, multi_elm, "unselected")
            : "";
        });

        let right_container = document.createElement("div");
        right_container.id = "g__select_drop";
        right_container.setAttribute("class", "g__drag_parent");

        let remove_btn = document.createElement("button");
        remove_btn.type = "button";
        remove_btn.setAttribute("class", "g__remove_options");
        remove_btn.innerHTML =
          "<i class='far fa-chevron-double-left'></i> Remove";
        right_container.appendChild(remove_btn);

        right_container.addEventListener("dragover", (event) => {
          event.preventDefault();
        });

        right_container.addEventListener("drop", (event) => {
          const id = event.dataTransfer.getData("text");
          const draggableElement = document.getElementById(id);
          const dropzone = right_container;
          dropzone.appendChild(draggableElement);
          event.dataTransfer.clearData();

          let options_right = right_container.children;
          options_right.length
            ? optionAddDrop(options_right, multi_elm, "selected")
            : "";
        });

        main_container.appendChild(left_container);
        main_container.appendChild(right_container);

        add_btn.addEventListener("click", (event) => {
          let home = event.target.parentElement;
          let drop = home.nextSibling;
          let arr_selected = [];
          let selected_fields = home.querySelectorAll(".g__selected");
          selected_fields.forEach((field) => {
            arr_selected.push(field);
            field.remove();
          });
          arr_selected.forEach((val) => {
            drop.appendChild(val);
            val.classList.remove("g__selected");
          });
          optionAddDrop(arr_selected, multi_elm, "selected");
        });

        remove_btn.addEventListener("click", (event) => {
          let drop = event.target.parentElement;
          let home = drop.previousSibling;
          let arr_selected = [];
          let selected_fields = drop.querySelectorAll(".g__selected");
          selected_fields.forEach((field) => {
            arr_selected.push(field);
            field.remove();
          });
          arr_selected.forEach((val) => {
            home.appendChild(val);
            val.classList.remove("g__selected");
          });
          optionAddDrop(arr_selected, multi_elm, "unselected");
        });

        let option_block;
        for (j = 0; j < options_length; j++) {
          option_block = document.createElement("div");
          option_block.id = "draggable-" + j;
          option_block.setAttribute("class", "g__multi_option");
          option_block.setAttribute("draggable", true);
          option_block.innerText = multi_elm.options[j].innerHTML;
          left_container.appendChild(option_block);

          option_block.addEventListener("click", (event) => {
            event.target.classList.toggle("g__selected");
          });

          option_block.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text/plain", event.target.id);
            event.currentTarget.classList.add("drag");
          });

          option_block.addEventListener("dragend", (event) => {
            // event.currentTarget.classList.add("drag");
          });
        }
        arr_multi[i].appendChild(main_container);
      }

      function optionAddDrop(options, original_list, side) {
        for (let option of options) {
          //loop through original select options
          for (let item of original_list) {
            if (option.innerHTML === item.innerHTML && side === "selected") {
              item.selected = true;
            } else if (
              option.innerHTML === item.innerHTML &&
              side === "unselected"
            ) {
              item.selected = false;
            }
          }
        }
        //print out selected values
        for (i = 0; i < original_list.length; i++) {
          if (original_list.options[i].selected === true) {
            console.log(original_list.options[i]);
          }
        }
      }
    }

    /* -------------------- Custom Select Field ----------------------*/
    if (!o.default_picklists) {
      var f, x, i, j, l, ll, selElmnt, a, b, c, search_container, search, select_val;
      /* Look for any elements with the class "g__picklist": */
      f = document.getElementById(id);
      x = f.getElementsByClassName("g__picklist");
      if (x.length > 0) {
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          /* For each element, create a new DIV that will act as the selected item: */
          a = document.createElement("div");
          a.setAttribute("class", "g__select_selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /* For each element, create a new DIV that will contain the option list: */
          b = document.createElement("div");
          b.setAttribute("class", "select-items select-hide");
          search = document.createElement("input");
          search.setAttribute("type", "text");
          search.setAttribute("class", "g__select_search");
          search.setAttribute("placeholder", "Search");
          search.addEventListener("click", function (e) {
            e.stopPropagation();
          });
          b.appendChild(search);
          for (j = 0; j < ll; j++) {
            /* For each option in the original select element,
                    create a new DIV that will act as an option item: */
            c = document.createElement("div");
            c.setAttribute("class", "g__select_option");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
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
                  s.value = s.options[i].value || s.options[i].innerHTML;
                  y = this.parentNode.getElementsByClassName(
                    "same-as-selected"
                  );
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
          a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
                    and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
          });
        }

        search.addEventListener("keyup", function (value) {
          let input = this.value.toUpperCase();
          let options_container = this.parentElement;
          let options_arr = options_container.querySelectorAll(
            ".g__select_option"
          );
          for (i = 0; i < options_arr.length; i++) {
            let txtValue =
              options_arr[i].textContent || options_arr[i].innerText;
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
          var x,
            y,
            i,
            xl,
            yl,
            arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("g__select_selected");
          xl = x.length;
          yl = y.length;
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i);
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
    }

    /* -------------------- Picklist Multi ----------------------*/
    let multiple_field = document.getElementsByClassName("g__select_multiple");
    if (multiple_field.length > 0) {
      $(".g__select_multiple").chosen({
        width: "auto",
      });
    }
    /* -------------------- checkbox ----------------------*/
    const all_checkboxes = form.querySelectorAll(".g__field_checkbox");
    all_checkboxes.forEach((field) => {
      field.addEventListener("change", (e) => {
        let is_checked = field.checked;
        if(is_checked){
          e.target.checked = "true";
          e.target.value = "true";
          e.target.classList.toggle('g__checked');
          e.target.classList.toggle('g__unchecked');
        }else{
          e.target.checked = "false";
          e.target.value = "false";
          e.target.classList.toggle('g__checked');
          e.target.classList.toggle('g__unchecked');
        }
      });
    });
    /* -------------------- Auto Save ----------------------*/
    if (o.autosave) {
      let auto_save_count = 0;
      let auto_save_wait;
      let input_arr = [];
      let select_arr = [];
      let textarea_arr = [];
      let save_data = {};
      let arr_form_fields = document.querySelectorAll(
        `${cssId} .g__form_field, ${cssId} .g__hidden_field`
      );
      arr_form_fields.forEach((field) => {
        let input = field.querySelector(`input[form_id="${attr__form_id}"]`);
        input_arr.push(input);
        let select = field.querySelector(`select[form_id="${attr__form_id}"]`);
        select_arr.push(select);
        let textarea = field.querySelector(`textarea[form_id="${attr__form_id}"]`);
        textarea_arr.push(textarea);
        if (!!input) {
          input.addEventListener("input", () => {
            start_auto_save(attr__form_id);
          });
          if (input.classList.contains('g__field_quill')){
            let quill = field.querySelector('.ql-editor');
            quill.addEventListener('input', () => {
              start_auto_save(attr__form_id);
            })
          }
        }
        if (!!select) {
          select.addEventListener("input", () => {
            start_auto_save(attr__form_id);
          });
        }
        if (!!textarea) {
          textarea.addEventListener("input", () => {
            start_auto_save(attr__form_id);
          });
        }
      });
      function start_auto_save(form_id) {
        if (auto_save_count > 0) {
          clearTimeout(auto_save_wait);
          auto_save_count = 0;
        }
        if (auto_save_count == 0) {
          auto_save_wait = setTimeout(save, 3500, form_id);
          auto_save_count = 1;
        }
      }
      function save(form_id) {
        input_arr.forEach((field) => {
          if (!!field && field.type != "file") {
            let property = field.name;
            let value = field.value;
            save_data[property] = value;
          }
        });
        select_arr.forEach((field) => {
          if (!!field) {
            let property = field.name;
            let value = field.value;
            save_data[property] = value;
          }
        });
        textarea_arr.forEach((field) => {
          if (!!field) {
            let property = field.name;
            let value = field.value;
            save_data[property] = value;
          }
        });
        if (typeof granite_data === "undefined" || granite_data === null) {
          var granite_data = {};
          var response = save_data;
          granite_data[form_id] = { response };
        }

        $.ajax({
          type: o.method,
          url: o.action,
          data: save_data,
        })
          .done(function (data) {
            console.log("autosave successful");
          })
          .fail(function (data) {
            console.log("autosave failed");
          });

        input_arr = [];
        select_arr = [];
        textarea_arr = [];
        count = 0;
        return false;
      }
    }
    /* -------------------- Show Password ----------------------*/
    let show_password = document.querySelectorAll(".g__password_show");
    if (show_password) {
      show_password.forEach((field) => {
        field.addEventListener("click", () => {
          let password = field.previousSibling;
          let type = password.type;
          if (type === "password") {
            password.type = "text";
            field.innerHTML = '<i class="far fa-eye-slash"></i>';
          } else {
            password.type = "password";
            field.innerHTML = '<i class="far fa-eye"></i>';
          }
        });
      });
    }
    /* -------------------- Platform Sections ----------------------*/
    if (platform) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const form_section = urlParams.get("form_section");
      if (form_section) {
        let selected_section = document.getElementById(form_section);
        let selected_content = selected_section.nextSibling;
        selected_section.classList.add("active");
        if (selected_content.style.maxHeight) {
          selected_content.style.maxHeight = null;
        } else {
          selected_content.style.maxHeight =
            selected_content.scrollHeight + "px";
        }
      }
    }
    /* -------------------- Pattern Check ----------------------*/
    if (o.inline_validation) {
      let all_field_containers = document.querySelectorAll(".g__form_field");
      all_field_containers.forEach((field) => {
        let input = field.querySelector("input");
        let select = field.querySelector("select");
        let select_desktop = field.querySelector(".g__select_selected");
        let error_msg = field.querySelector(".g__error_msg");
        if (!!input) {
          input.addEventListener("change", (e) => {
            let valid_input = input.checkValidity();
            if (valid_input) {
              input.classList.add("valid");
              input.classList.remove("invalid");
              error_msg.innerText = "";
            } else {
              input.classList.add("invalid");
            }
          });
        }
        if (!!select_desktop) {
          select_desktop.addEventListener("click", () => {
            let valid_input = select_desktop.previousSibling.checkValidity();
            if (valid_input) {
              select_desktop.classList.add("valid");
              select_desktop.classList.remove("invalid");
              error_msg.innerText = "";
            } else {
              select_desktop.classList.add("invalid");
            }
          });
        }
      });
    }
    /* -------------------- Dependency Field ----------------------*/
    r.forEach(function (r, num) {
      const is_dep =
        !!r.dependency_field &&
        (!!r.dependency_values || !!r.dependency_not_blank);
      if (is_dep) {
        let dep_name = document.getElementsByName(r.dependency_field);
        let dep_type = dep_name[0].type;
        let dep_parent = document.getElementById(dep_name[0].id);
        let dep_child = document.getElementById(r.id);
        const dep_child_required = !!dep_child ? dep_child.required : false;
        let is_child_sec = !!dep_child ? dep_child.classList.contains('g__form_section_container') : "";
        let dep_blank = r.dependency_not_blank;
        switch (dep_type) {
          case "select-one":
            dep_select(
              is_child_sec,
              dep_parent,
              dep_child,
              r.dependency_values,
              dep_blank
            );
            break;
          case "checkbox":
            checkbox_event(
              is_child_sec,
              dep_parent,
              dep_child,
              r.dependency_values,
              dep_child_required
              );
            checkbox(
              is_child_sec,
              dep_parent,
              dep_child,
              r.dependency_values,
              dep_child_required
              );
            break;
          case "text":
            text_event(
              is_child_sec,
              dep_parent,
              dep_child,
              r.dependency_values,
              dep_blank,
              dep_child_required
            );
            text(
              is_child_sec,
              dep_parent,
              dep_child,
              r.dependency_values,
              dep_blank,
              dep_child_required
            );
            break;
        }
      }
      function values_arr(values) {
        let arr = [];
        if (values.includes(",")) {
          arr = values.split(",");
        } else {
          arr.push(values);
        }
        return arr;
      }

      function text_event(type, parent, child, values, blank, required) {
        parent.addEventListener("keyup", () => {
          text(type, parent, child, values, blank, required);
        });
      }
      function text(is_section, parent, child, values, blank, required) {
        const arr_values = values_arr(values);
        const dep_text = parent.value.toUpperCase();
        const dep_child = child;
        const dep_blank = blank;
        let is_match;
        arr_values.forEach((val) => {
          let child_text = val.toUpperCase().trim();
          let container;
          if(is_section){
            container = child;
          } else if(!!dep_child) {
            container = dep_child.closest(".g__form_field");
          }
          if (dep_text === child_text) {
            is_match = true;
            container.classList.remove("dep_hide");
            if(is_section){
              sectionRequired(child, true)
            }else{
              dep_child.required = true
            }
          } else if (dep_text != "" && dep_blank) {
            is_match = true;
            container.classList.remove("dep_hide");
            if(is_section){
              sectionRequired(child, true)
            }else{
              dep_child.required = true
            }
          } else if (!is_match) {
            container.classList.add("dep_hide");
            if(is_section){
              sectionRequired(child, false)
            }else{
              dep_child.required = false
            }
          }
        });
      }
      function checkbox(is_section, parent, child, values, required) {
        const dep_values = values;
        const child_value = values === "true" ? true : false;
        const dep_checked = parent.classList.contains('g__checked');
        const dep_child = child;
        let container;
        if(is_section){
          container = child;
        } else if(!!dep_child) {
          container = dep_child.closest(".g__form_field");
        }
        if (dep_checked === child_value) {
          container.classList.remove("dep_hide");
          container.classList.add("dep_show");
          required ? dep_child.required = true : "";
          is_section ? sectionRequired(child, true) : "";
          if(is_section){
            sectionRequired(child, true)
          }else{
            dep_child.required = true
          }
        } else {
          container.classList.add("dep_hide");
          container.classList.remove("dep_show");
          required ? dep_child.required = false : "";
          is_section ? sectionRequired(child, false) : "";
          if(is_section){
            sectionRequired(child, false)
          }else{
            dep_child.required = false
          }
        }
      }
      function checkbox_event(is_section, parent, child, values, required) {
        parent.addEventListener("change", (e) => {
          // let parent = e.target.classList.contains('g__checked');
          checkbox(is_section, parent, child, values, required);
        });
      }
      function dep_select(is_section, parent, child, values, blank) {
        let dep_desktop_select = parent.nextSibling;
        if(dep_desktop_select){
          dep_desktop_select.addEventListener("click", () => {
            const dep_values = values;
            const arr_values = values_arr(values);
            const dep_selected = parent.nextSibling.innerText.toUpperCase();
            const dep_child = child;
            const dep_blank = blank;
            arr_values.forEach((val) => {
              let child_val = val.toUpperCase().trim();
              // check for the child form container
              let container;
              if(is_section){
                container = child;
              } else if(!!dep_child) {
                container = dep_child.closest(".g__form_field");
              }
              // compare the values and take action
              if(container){
                if (dep_selected === child_val) {
                  container.classList.remove("dep_hide");
                  container.classList.add("dep_show");
                  if(is_section){
                    sectionRequired(child, true)
                  }else{
                    dep_child.required = true
                  }
                } else if (dep_selected != "" && dep_blank) {
                  container.classList.remove("dep_hide");
                  container.classList.add("dep_show");
                  if(is_section){
                    sectionRequired(child, true)
                  }else{
                    dep_child.required = true
                  }
                } else {
                  container.classList.add("dep_hide");
                  container.classList.remove("dep_show");
                  if(is_section){
                    sectionRequired(child, false)
                  }else{
                    dep_child.required = false
                  }
                }
              }

            });
          });
          dep_desktop_select.click();
          dep_desktop_select.click();
        }

      }
    });
    /* -------------------- Remove required on hidden section fields ----------------------*/
    function sectionRequired(child, val){
      arr_fields = child.querySelectorAll('input, textarea, select')
      arr_fields.forEach(field => {
        let field_required = field.classList.contains('g__required');
        if(val && field_required){
          field.required = true;
        } else {
          field.required = false;
        }
      })
    }
  } else {
    let no_records = document.createElement("div");
    no_records.setAttribute("class", "g__no_records");
    no_records.innerHTML = "<h2>Form</h2>";
    form_container.appendChild(no_records);
    document.getElementById(id).appendChild(no_records);
  }
}
