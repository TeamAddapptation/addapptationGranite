/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#ff5d00",
    "secondary": "#3fd0d4",
    "mode": "midnight"
}
if(jsonTheme.mode === "midnight"){
    document.body.style.backgroundColor = "#101010";
}

let formDev = {
    "id":"granite-form-dev",
    "options": {
       "title":"Header",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"Submit",
       "cancel_label":"Cancel",
       "max_width":"",
       "enctype":"application/x-www-form-urlencoded",
       "method":"POST",
       "visibility_settings":"",
       "hide_submit":false,
       "allow_cancel":false,
       "activate_recaptcha":false,
       "auto_superscript":false,
       "autosave":false,
       "action":"/"
    },
    "records": [
        {
            "title":"Padding",
            "name":"header_padding",
            "type":"spacing",
            "mobile_spacing": true,
            "value":"",
            "placeholder":"",
            "autocomplete":"on",
            "length":"0",
            "rows":"",
            "classes":"",
            "id":"",
            "super_text":true,
            "dependency_field":"",
            "dependency_values":"",
            "pattern":"",
            "invalid_message":"",
            "addapptation_component":true,
            "addapptation_name":"Custom Field",
            "addapptation_type":"custom_field",
            "addapptation_code_id":"a0R1I00000J7p9iUAB",
            "addapptation_id":"03613487003978322",
            "addapptation_navigation":"",
            "required":false,
            "inline":false,
            "use_options_from_database":false,
            "multiple":false,
            "collapsed":false,
            "disabled":false,
            "dependency_not_blank":false,
            "inline_field":false,
            "action":"hash_builder"
         }
    ]
}