let jsonTheme = {
    "primary": "#ff5d00",
    "secondary": "#3fd0d4",
    "mode": "midnight"
}
let form_range = {
    "id":"g-color-picker",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_1",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Color Picker",
            "name":"f_color",
            "type":"color",
            "value":"",
            "options":[

            ],
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
            "required":false,
            "inline":false,
            "use_options_from_database":false,
            "multiple":false,
            "collapsed":false,
            "disabled":false,
            "dependency_not_blank":false,
            "inline_field":false,
            "action":"hash_builder"
         },
    ]
}
let form_checkbox = {
    "id":"g-color-checkbox",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_2",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Checkbox",
            "name":"g_checkbox",
            "type":"checkbox",
            "value":"",
         },
    ]
}
let form_email = {
    "id":"g-color-email",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_92",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Email",
            "name":"g_email",
            "type":"email",
            "value":"",
         },
    ]
}
let form_dependency_picklist = {
    "id":"g-dependency",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_3",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Dependency Parent",
            "name":"states",
            "type":"picklist",
            "options": [
                ["", ""],
                ["NH", "New Hampshire"],
                ["TX", "Texas"],
                ["MT", "Montana"]
            ],
            "value":"",
         },
         {
            "title":"Dependency Field",
            "name":"dependent",
            "type":"text",
            "placeholder":"You selected Montana",
            "value":"",
            "dependency_field":"states",
            "dependency_values":"Montana",
            "dependency_not_blank": false
         },
         {
            "title":"Dependency Field",
            "name":"dependent",
            "type":"text",
            "placeholder":"You selected Texas",
            "value":"",
            "dependency_field":"states",
            "dependency_values":"Texas",
         }
    ]
}
let form_dependency_checkbox = {
    "id":"g-dependency-checkbox",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_4",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Dependency Parent",
            "name":"checkbox",
            "type":"checkbox",
            "value":"",
         },
         {
            "title":"Dependency Field",
            "name":"dependent",
            "type":"text",
            "placeholder":"You selected the checkbox",
            "value":"",
            "dependency_field":"checkbox",
            "dependency_values":"true",

         }
    ]
}
let form_dependency_text = {
    "id":"g-dependency-text",
    "options":{
       "title":"",
       "addapptation_action":"/",
       "description":"",
       "title_font_size":"40px",
       "description_font_size":"20px",
       "db_action":"",
       "db_object":"",
       "db_id":"",
       "db_redirect":"",
       "flash_message":"",
       "form_id":"g__test_5",
       "button_1_label":"",
       "button_1_href":"",
       "submit_label":"",
       "cancel_label":"",
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
            "title":"Dependency Parent",
            "name":"fruit",
            "type":"text",
            "value":"",
         },
         {
            "title":"Dependency Field",
            "name":"dependent",
            "type":"text",
            "placeholder":"You selected the checkbox",
            "value":"",
            "dependency_field":"fruit",
            "dependency_values":"Orange, Banana, Apple",
            "dependency_not_blank": false

         }
    ]
}