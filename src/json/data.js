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

/*---------------------------------------------
Template Sample
---------------------------------------------*/
let templateBlock = {
    "id": "g__template",
    "feature": "template",
    "options": {
      "header": "Options Header"
    },
    "records": [
        {
            "header": "Record 1"
        },
        {
            "header": "Record 2"
        },
        {
            "header": "Record 3"
        }
    ]
};
/*---------------------------------------------
Navigation
---------------------------------------------*/
let navigationBlock = {
  "id": "granite-navigation",
  "feature": "navigation",
  // "records": [
  //     {"href": "addappter-nav-test.html", "label": "Home", "icon": ""},
  //     {"href": "addappter-table-test.html", "label": "Table"},
  //     {"href": "addappter-form-test.html", "label": "Form", "icon": ""},
  //     {"label": "Libraries 1", "icon": "", "submenu_header": true},
  //         {"href": "#sign_out", "icon": "", "label": "Sign Out", "submenu": true, "hide_if": "#{@hide_sign_out}"},
  //         {"href": "#sign_in", "icon": "", "label": "Sign In", "submenu": true},
  //         {"href": "#calendar", "icon": "", "label": "Calendar", "submenu": true},
  //     {"label": "Libraries 2", "submenu_header": true},
  //         {"href": "#architecture", "icon": "", "label": "Architecture", "submenu": true},
  //         {"href": "#credentials", "icon": "", "label": "Credentials", "submenu": true},
  //         {"href": "#design", "icon": "", "label": "Design", "submenu": true},
  //         {"href": "#schema_builder", "icon": "", "label": "Schema Builder", "submenu": true},
  //         {"href": "#roadmap", "icon": "", "label": "Roadmap", "submenu": true},
  //     {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "Sidepane", "icon": ""},
  //     {"href": "addappter-tabs-test.html", "label": "Tabs", "icon": ""},
  //     ],
  "records": [
    {"label": "Libraries 1 with a long link name", "icon": "fal fa-toolbox", "submenu_header": true},
          {"href": "#sign_out", "icon": "fal fa-sign-out", "label": "Sign Out", "submenu": true, "hide_if": "#{@hide_sign_out}"},
          {"href": "#sign_in", "icon": "fal fa-sign-in", "label": "Sign In", "submenu": true},
          {"href": "#calendar", "icon": "", "label": "Calendar with some more text and more", "submenu": true},
      {"href": "addappter-nav-test.html", "label": "Home", "icon": "fal fa-home", "classes": "custom_class_link"},
      {"href": "addappter-form-test.html", "type":"external", "label": "Form with a long label", "icon": "fal fa-clipboard-list-check"},

      {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "Sidepane", "icon": "fal fa-window-restore"},
      {"label": "Libraries 2", "submenu_header": true},
          {"href": "#architecture", "icon": "fal fa-sitemap", "label": "Architecture", "submenu": true},
          {"href": "#credentials", "icon": "fal fa-unlock-alt", "label": "Credentials", "submenu": true},
          {"href": "#design", "icon": "fal fa-palette", "label": "Design", "submenu": true},
          {"href": "#schema_builder", "icon": "fal fa-folder-tree", "label": "Schema Builder", "submenu": true},
          {"href": "#roadmap", "icon": "fal fa-map-marked", "label": "Roadmap", "submenu": true},
      {"href": "addappter-tabs-test.html", "label": "Tabs", "icon": "fal fa-layer-group"},
      ],
  // "records": [
  //     {"href": "addappter-nav-test.html", "label": "", "icon": "fal fa-home"},
  //     {"href": "addappter-form-test.html", "label": "", "icon": "fal fa-clipboard-list-check"},
  //     {"label": "", "icon": "fal fa-toolbox", "submenu_header": true},
  //         {"href": "#sign_out", "icon": "fal fa-sign-out", "label": "", "submenu": true, "hide_if": "#{@hide_sign_out}"},
  //         {"href": "#sign_in", "icon": "fal fa-sign-in", "label": "", "submenu": true},
  //         {"href": "#calendar", "icon": "fal fa-sign-in", "label": "", "submenu": true},
  //     {"label": "", "icon": "fal fa-sign-in", "submenu_header": true},
  //         {"href": "#architecture", "icon": "fal fa-sitemap", "label": "", "submenu": true},
  //         {"href": "#credentials", "icon": "fal fa-unlock-alt", "label": "", "submenu": true},
  //         {"href": "#design", "icon": "fal fa-palette", "label": "", "submenu": true},
  //         {"href": "#schema_builder", "icon": "fal fa-folder-tree", "label": "Schema ", "submenu": true},
  //         {"href": "#roadmap", "icon": "fal fa-map-marked", "label": "", "submenu": true},
  //     {"href": "https://teamaddapptation.github.io/granite/js/sidepane/sidepane.html", "label": "", "icon": "fal fa-window-restore"},
  //     {"href": "addappter-tabs-test.html", "label": "", "icon": "fal fa-layer-group"},
  //     ],
  "options": {
    "type": "sidebar",
    "background": "",
    "background_opacity": "",
    "mobile_menu": "topbar",
    "font_color": "#ffffff",
    "mobile_breakpoint": "550px",
    "font_size": "18px",
    "topbar_padding_right": "",
    "topbar_padding_left": "",
    "dropdown_font_size": "12px",
    "highlight": "",
    "no_break_link_item": true,
    "topbar_position": "right",
    "topbar_over_content": false,
    "topbar_font_size": "10px",
    "button_style": "transparentWhite",
    "cta_button_padding": "",
    "single_submenu": true,
    "hide_mobile_nav": false,
    "header_label": "<span id='addapptation'>addapptation</span>",
    "header_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    "header_link": "#test",
    "wrap_logo": false,
    "footer": "<a href='sign-out'>Sign Out</a>",
    "gradient": "",
    "topbar_gradient": "",
    "searching": false,
    "link_label": "Sign In",
    "link_url": "#",
    "link_target": false,
    "cta_link_left_margin": "300px",
    "cta_label": "Edit",
    "cta_url": "#",
    "cta_target": false,
    "hide_on": [],
    "item_height": "65px",
    "menu": false,
    // "menu_items": [
    //   {"label": "Menu Item Number 1", "icon": "search", "href": "#menu=1"},
    //   {"label": "Menu Item Number 2", "icon": "clipboard", "href": "#menu=2"},
    //   {"label": "Menu Item Number 3", "icon": "list", "href": "#menu=3"},
    //   {"label": "Menu Item Number 4", "icon": "home", "href": "#menu=4"},
    //   {"label": "Menu Item Number 5", "icon": "tools", "href": "#menu=5"},
    //   {"label": "Menu Item Number 6", "icon": "hammer", "href": "#menu=6"},
    // ],
    "menu_items": [
      {"label": "Menu Item Number 1", "icon": "search", "href": "#menu=1"},
      {"label": "Menu Item Number 2", "icon": "clipboard", "href": "#menu=2"},
      {"label": "Menu Item Number 3", "icon": "list", "href": "#menu=3"},
      {"label": "Menu Item Number 4", "icon": "home", "href": "#menu=4"},
      {"label": "Menu Item Number 5", "icon": "tools", "href": "#menu=5"},
      {"label": "Menu Item Number 6", "icon": "hammer", "href": "#menu=6"},
    ],
    // menu_1_label: "Menu Item Number 1",
    // menu_1_icon: "search",
    // menu_1_href: "/?menu=1",
    // menu_2_label: "Menu Item Number 2",
    // menu_2_icon: "clipboard",
    // menu_2_href: "/?menu=2",
    // menu_3_label: "Menu Item Number 3",
    // menu_3_icon: "list",
    // menu_3_href: "/?menu=3",
    // menu_4_label: "Menu Item Number 4",
    // menu_4_icon: "home",
    // menu_4_href: "/?menu=4",
    // menu_5_label: "Menu Item Number 5",
    // menu_5_icon: "tools",
    // menu_5_href: "/?menu=5",
    // menu_6_label: "Menu Item Number 6",
    // menu_6_icon: "hammer",
    // menu_6_href: "/?menu=6",
    "use_recent_items": true,
    "search_url": "search"
  }
};
/*---------------------------------------------
Hero
---------------------------------------------*/
let heroBlock = {
    "id": "hero-granite",
    "feature": "hero",
    "options": {
    "height": "",
    "header": "Header Text",
    "header_color": "",
    "description_color": "",
    "line_height": "",
    "desc": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
    "align_text": "center",
    "header_size": "",
    "header_bottom_margin": "",
    "desc_size": "",
    "background_image": "",
    "align_background_image": "right top",
    "background_color": "#202020",
    "button_top_margin": "200px",
    "button_url": "https://addapptation.com/",
    "button_text": "Hero Button",
    "same_window": true,
    "theme": "custom",
    "overlay_color": "red",
    "overlay_opacity": "",
    "button_style": "pink",
    "top_border_width": "",
    "top_border_color": "",
    "bottom_border_width": "",
    "bottom_border_color": ""
    },
    "records": [{}]
};
/*---------------------------------------------
Carousel
---------------------------------------------*/
let carouselBlock = {
    "id": "granite-carousel",
    "feature": "carousel",
    "options": {
      "background_color": "red",
    },
    "records": [
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/aerial.png",
        "description": "Image Description 1"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/asia.png",
        "description": "Image Description 2"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/backlit.png",
        "description": "Image Description 3"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/bridge.png",
        "description": "Image Description 4"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/deganwy.png",
        "description": "Image Description 5"
      },
      {
        "image": "https://addapptation.blob.core.windows.net/pictures/nature/italy.png",
        "description": "Image Description 6"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/backlit.png",
        "description": "Image Description 3"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/bridge.png",
        "description": "Image Description 4"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/deganwy.png",
        "description": "Image Description 5"
      },
      {
        "image_url": "https://addapptation.blob.core.windows.net/pictures/nature/italy.png",
        "description": "Image Description 6"
      },
    ]
    };
/*---------------------------------------------
Data 1
---------------------------------------------*/
let dataVisualizationBlock_1 = {
  "id": "data_visualization-granite",
  "classes": "",
  "options": {
    "title": "2019 Sales",
    "height": "500px",
    "ytitle": "Sales",
    "xtitle": "Quarter",
    "animate": true,
    "data_format": "currency",
    "bar_chart_vertical": true,
    "chart_style": "line",
    "ymax": 60,
    "palette": ["#EA386E","#BF458A","#FF8BCD","#FFA08C","#FFB866","#CCF0E8","#00B28B","#D44697","#FDDBEE"]
  },
  "records": [
    {"x": "Apples", "value": "68.84", "fill": "green"},
    {"x": "Oranges", "value": "128.14", "fill": "orange"},
  ]
}
/*---------------------------------------------
Data 2
---------------------------------------------*/
let dataVisualizationBlock = {
  "id": "data_visualization-granite",
  "classes": "",
  "options": {
    "title": "Granite Chart",
    "chart_type": "pie",
    "chart_height": "600px",
    "series_data": true,
    "colors": '["#C492B1", "#AF3B6E","#BCE7FD", "#424651", "#21FA90"]',
    // "colors":"",
    "inner_radius": "20%",
    "show_tooltip": true,
    "enable_legend": false,
    "label_position": "outside",
    "series_titles": [],
    "attr__series_titles": "Test Title",
    "export_excel": true,
    "export_pdf": true,
    "x_axis_title": "Month",
    "y_axis_title": "Sales",
    "y_axis_format": "$",
    "series_name": "November Sales",
    // Drilldown
    "drilldown_details_field_name": "drilldown",
    "drilldown_chart_one": "pie",
    "drilldown_chart_two": "line",
    "drilldown_chart_types": ["pie", "bar"],
    "listener": "point_select",
    "title2": "Interaction Type",
    // Legend
    "legend_horizontal_position": "right",
    "legend_vertical_position": "center",
    "legend_items_layout": "vertical",
    // x axis labels
    "x_axis_labels": '["January", "February", "March", "April", "May", "June"]',
    // action row
    "action_header": "Action Row Header",
    "action_description": "Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna. Maecenas aliquam tortor sed elementum venenatis. Vestibulum dolor quam, blandit a eros eget, dictum eleifend lorem. Sed non magna risus. Maecenas eget tellus urna.",
    // custom btn
    "custom_buttom_1_text": "New Button",
    "custom_buttom_1_url": "#"
  },
  "records": [
  //   {"x": "Microsoft", "value": "518.84", "fill": "#ffbe0b"},
  //   {"x": "Oracle", "value": "128.14", "fill": "#fb5607"},
  //   {"x": "HP", "value": "328.14", "fill": "#ff006e"},
  //   {"x": "Dell", "value": "328.14", "fill": "#8338ec"}
    {"x": "Microsoft", "value": "518.84", "series_values": [120, 356, 45, 100, 276, 437], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [10000, 9500, 12000, 7000], "drilldown_data": [
      {"x": "Q1", "value": 792026},
      {"x": "Q2", "value": 610501},
      {"x": "Q3", "value": 441843},
      {"x": "Q4", "value": 350711}
  ]},
    {"x": "Oracle", "value": "128.14", "series_values": "[543, 256, 345, 346, 472, 100]", "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [5000, 8900, 10000, 6000], "drilldown_data": [
      {"x": "Q1", "value": 1378786},
      {"x": "Q2", "value": 571063},
      {"x": "Q3", "value": 510493},
      {"x": "Q4", "value": 797105}
  ]},
    {"x": "HP", "value": "328.14", "series_values": [234, 763, 134, 872, 145, 592], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [9000, 9500, 6000, 10000], "drilldown_data": [
      {"x": "Q1", "value": 499299},
      {"x": "Q2", "value": 649963},
      {"x": "Q3", "value": 571176},
      {"x": "Q4", "value": 242969}
    ]},
  {"x": "Dell", "value": "328.14", "series_values": [434, 863, 20, 348, 243, 46], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [9800, 9000, 10000, 5000], "drilldown_data": '[{"x": "Q1", "value": 50},{"x": "Q2", "value": 600},{"x": "Q3", "value": 200},{"x": "Q4", "value": 320}]'},
  {"x": "Lenovo", "value": "328.14", "series_values": [34, 363, 720, 348, 453, 642], "drilldown_x": ["Q1", "Q2", "Q3", "Q4"], "drilldown_value": [4000, 9000, 7000, 6400], "drilldown_data": '[{"x": "Q1", "value": 50},{"x": "Q2", "value": 600},{"x": "Q3", "value": 200},{"x": "Q4", "value": 320}]'}
  ]};
/*---------------------------------------------
Tabs
---------------------------------------------*/
let tabsBlock = {
  "id":"granite-tabs",
  "options":{
     "style":"multi",
     "font_size":"10px",
     "highlight_color":"",
     "align":"center",
     "padding":"large",
     "full_width":true,
     "action_header":"",
     "action_header_size":"28px",
     "action_header_color":"#5d5d5d",
     "action_header_bottom_margin":"20px",
     "action_description":"",
     "action_description_size":"18px",
     "action_description_color":"#5d5d5d",
     "action_description_bottom_margin":"20px",
     "action_align_text":"left",
     "micro_top_margin":"150px",
     "action_bottom_margin":"25px",
     "action_border":true,
     "classes":"",
     "visibility_settings":"",
     "cursor_disabled":true,
     "action":"hash_builder"
  },
  "records":[
     {
        "name":"Super long step name",
        "href":"",
        "dropdown":true,
        "dropdown_item":[
           {
              "name":"Basic Info",
              "href":""
           },
           {
              "name":"Registration History",
              "href":""
           },
           {
              "name":"Sign Out",
              "href":""
           }
        ],
        "addapptation_component":true,
        "addapptation_name":"Step",
        "addapptation_type":"step",
        "addapptation_code_id":"a0R1I00000FfTXsUAN",
        "addapptation_id":"05952000947539011",
        "addapptation_navigation":"",
        "completed":false,
        "action":"hash_builder"
     },
     {
        "name":"Step 2",
        "icon":"",
        "href":"",
        "dropdown_item":"",
        "addapptation_component":true,
        "addapptation_name":"Step",
        "addapptation_type":"step",
        "addapptation_code_id":"a0R1I00000FfTXsUAN",
        "addapptation_id":"011691597196079817",
        "addapptation_navigation":"",
        "dropdown":false,
        "action":"hash_builder"
     },
     {
        "name":"Step 3",
        "href":"?id=",
        "dropdown_item":"",
        "addapptation_component":true,
        "addapptation_name":"Tab",
        "addapptation_type":"step",
        "addapptation_code_id":"a0R1I00000FfTXsUAN",
        "addapptation_id":"07800309315918004",
        "addapptation_navigation":"",
        "completed":false,
        "dropdown":false,
        "action":"hash_builder"
     }
  ]
}
/*---------------------------------------------
Tiles
---------------------------------------------*/
let tilesBlock = {
  "id": "granite-tiles",
  "feature": "tiles",
  "class": "a_custom",
    "options": {
      "title": "",
      // "description": "Etiam dapibus semper nisi, sit amet commodo quam elementum vitae. In hac habitasse platea dictumst. Curabitur sed erat quis nisi imperdiet molestie a ut massa. Phasellus lacinia ante eu risus rhoncus, at accumsan nisl viverra. Nam convallis magna sed lobortis auctor. Phasellus et nisl purus. Duis hendrerit justo eu sapien eleifend, quis maximus massa sodales. Vivamus a fringilla nisl, vel laoreet mauris. In a lacinia leo. Praesent sit amet massa dapibus, dictum lorem eu, elementum tortor.",
      "description_hover": true,
      "customOverlay": false,
      "container_top_padding": "50px",
      "container_bottom_padding": "50px",
      "body_content_top_padding": "30px",
      "layout": "center", //picklist: left, center, right
      "theme": "custom",
      "app_layout": false,
      "header_color": "",
      "header_size": "18px", //small, medium, large
      "description_color": "",
      "description_size": "", //small, medium, large
      "icon_color": "red",
      "columns": "4",
      "fillRow": false,
      "full_width": true,
      "icon_size": "",
      "height": "200px",
      "no_overlay": false,
      "filter_one": "",
      "filter_one_opacity": ".8",
      "filter_two": "",
      "filter_two_opacity": "0",
      "search": false,
      "classes": "tabs-class",
      "hover_color": "",
      "padding": "5px",
      "border_radius": "",
      "border": "",
      "border_color": "",
//             "buttons":[
//                 {"label": "Button 1", "href": "/datatables_dev_temp?selection=button1", "sidepane": "true"},
//                 {"label": "Button 2", "href": "/datatables_dev_temp?selection=button2", "sidepane": "false"}
//             ],
      "filter_label": "",
      "filter_tag_options": ["All", "Atlantic Ocean", "Pacific Ocean", "No Coastline"],
      "action_header_size": "50px",
      "action_header_color": "red",
      "action_header_bottom_margin": "50px",
      "action_description_size": "16px",
      "action_description_color": "orange",
      "action_description_bottom_margin": "50px",
      "action_description_line_height": "18px",
    },
    "records": [
      {
        "title":"kristina",
        "font_size":"",
        "title_color":"#fefcff",
        "background_color":"red",
        "background_image": "",
        "border":"2px solid #fff",
        "height":"150px",
        "description": 0,
        "text_color":"#101010",
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "icon":"",
        "icon_size":"",
        "icon_color":"",
        "link_name":"",
        "href":"",
        "target":"",
        "tags": ["Atlantic Ocean"],
        "hover_color":"light",
        "classes":"",
        "addapptation_component":"true",
        "addapptation_name":"Tile",
        "addapptation_type":"tile",
        "addapptation_code_id":"a0R1I000004BjOfUAK",
        "addapptation_id":"03091813838320976",
        "addapptation_navigation":"",
        "hover":"false",
        "center":"false",
        "side_pane":"false",
        "action":"hash_builder"
      },
      {
        "title":"Chris",
        "font_size":"",
        "title_color":"#fefcff",
        "background_color":"#6c13b3",
        "background_image": "",
        "border":"2px solid #fff",
        "height":"150px",
        "description":"This is description text",
        "text_color":"#101010",
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "icon":"",
        "icon_size":"",
        "icon_color":"",
        "tags": ["Pacific Ocean"],
        "link_name":"",
        "href":"/application?id=Augsburg",
        "target":"",
        "hover_color":"custom",
        "classes":"",
      },
      {
        "title": "Adam",
        "description": "",
        "background_color": "#6312a3",
        "background_image": "",
        "href": "",
        "link_name": "",
        "center": false,
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "buttons": [{"name": "View", "href": "/cards?selection=view"}],
        "icon": "",
        "icon_color": "",
        "icon_size": "",
        "title_color": "",
        "title_size": "",
        "description_color": "",
        "description_size": "",
        "hover_color": "",
        "target": false,
        "classes": "a__record_class"
      },
      {
        "title": "Sample",
        "description": "",
        "background_color": "#6c13b3",
        "background_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "buttons": [{"name": "View", "href": "/cards?selection=view"}],
        "icon": "",
        "icon_color": "",
        "icon_size": "30px",
        "title_color": "",
        "title_size": "",
        "description_color": "",
        "description_size": "",
        "hover_color": "#333",
        "target": false,
        "classes": "a__record_class"
      },
      {
        "title": "California",
        "description": "",
        "background_color": "#6312a3",
        "tags": ["apple", "orange", "banana"],
        "background_image": "",
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "padded_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "icon": "",
        "target": false
      },
      {
        "title": "",
        "description": "",
        "background_color": "#6312a3",
        "background_image": "",
        "padded_image": "",
        "image": "https://img.icons8.com/color/40/000000/full-image.png",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "buttons": [
          {"name": "Download", "href": "/cards?selection=view"},
          {"name": "Learn More", "href": "/cards?selection=view"}
        ],
        "icon": "",
        "center_image": "",
        "target": false
      }
    ]
};
/*---------------------------------------------
Cards
---------------------------------------------*/
let cardsBlock = {
  "id": "granite-cards",
  "feature": "cards",
  "class": "a_custom",
  "options":{
    "columns":"3",
    "style":"basic",
    "padding":"medium",
    "micro_top_padding":"50px",
    "micro_bottom_padding":"50px",
    "layout":"",
    "top_height":"250px",
    "inside_top_bottom_padding":"15px",
    "inside_left_right_padding":"15px",
    "bottom_background_color":"transparent",
    "border_color":"",
    "header_color":"",
    "header_size":"26px",
    "header_bottom_margin":"20px",
    "description_size":"18px",
    "description_color":"",
    "description_bottom_margin":"20px",
    "button_style":"color",
    "button_text_size":"14px",
    "button_top_margin":"15px",
    "align_buttons_bottom":true,
    "align_header_text":"left",
    "bottom_button_text":"",
    "bottom_button_link":"",
    "bottom_button_style":"color",
    "bottom_button_align":"",
    "bottom_button_top_margin":"25px",
    "bottom_button_text_size":"14px",
    "buttom_button_left_right_padding":"48px",
    "action_header":"",
    "action_header_size":"",
    "action_header_color":"",
    "action_description":"",
    "action_description_color":"",
    "action_description_size":"",
    "action_description_bottom_margin":"",
    "action_header_bottom_margin":"",
    "action_border":true,
    "classes":"",
    "visibility_settings":"",
    "fill_row":false,
    "match_height":true,
    "bottom_button_target":false,
    "search":false,
    "action":"hash_builder"
 },
 "records":[
    {
       "header":"New England",
       "description":"Description will go here that can be long. Description will go here that can be long Description will go here that can be long",
       "background_color":"#101010",
       "background_image":"https://cdn.addapptation.com/addapptation-asset-library/bg_business_meeting_2.jpg",
       "align_background_image":"center center",
       "overlay_color":"#101010",
       "overlay_opacity":".4",
       "thumb_image":"",
       "button_text":"Learn More",
       "button_link":"#",
       "addapptation_component":true,
       "addapptation_name":"Card",
       "addapptation_type":"card",
       "addapptation_code_id":"a0R1I00000J61K4UAJ",
       "addapptation_id":"03052686784498282",
       "addapptation_navigation":"",
       "target":false,
       "action":"hash_builder"
    },
    {
      "header":"New England",
      "description":"Description will go here that can be long. Description wil Description will go here that can be long. Description will go here that can be long Description will go here that can be longl go here that can be long Description will go here that can be long",
      "background_color":"#101010",
      "background_image":"https://cdn.addapptation.com/addapptation-asset-library/bg_business_meeting_2.jpg",
      "align_background_image":"center center",
      "overlay_color":"#101010",
      "overlay_opacity":".4",
      "thumb_image":"",
      "button_text":"Learn More",
      "button_link":"#",
      "addapptation_component":true,
      "addapptation_name":"Card",
      "addapptation_type":"card",
      "addapptation_code_id":"a0R1I00000J61K4UAJ",
      "addapptation_id":"03052686784498282",
      "addapptation_navigation":"",
      "target":false,
      "action":"hash_builder"
   },
   {
    "header":"New England",
    "description":"Description will go here that can be long. Description will go here that can be long Description will go here that can be long Description will go here that can be long. Description will go here that can be long Description will go here that can be long Description will go here that can be long. Description will go here that can be long Description will go here that can be long",
    "background_color":"#101010",
    "background_image":"https://cdn.addapptation.com/addapptation-asset-library/bg_business_meeting_2.jpg",
    "align_background_image":"center center",
    "overlay_color":"#101010",
    "overlay_opacity":".4",
    "thumb_image":"",
    "button_text":"Learn More",
    "button_link":"#",
    "addapptation_component":true,
    "addapptation_name":"Card",
    "addapptation_type":"card",
    "addapptation_code_id":"a0R1I00000J61K4UAJ",
    "addapptation_id":"03052686784498282",
    "addapptation_navigation":"",
    "target":false,
    "action":"hash_builder"
 }
 ]
};
/*---------------------------------------------
Content
---------------------------------------------*/
let contentBlock = {
  "id": "granite-content",
  "feature": "content",
  "options": {
    "height": "",
    "columns": "1",
    "fillRow": false,
    "top_padding": "50px",
    "bottom_padding": "50px",
    "left_padding": "50px",
    "right_padding": "50px",
    "body_top_padding": "50px",
    "background_image": "https://cdn.addapptation.com/addapptation-customer-assets/addapptation-micros/addapptation-micros-emerson/Rectangle%2027.png",
    "align_background_image": "center center",
    "background_color": "darkblue",
    "theme": "custom",
    "mobile_reverse_column": true,
    "overlay_color": "orange",
    "overlay_opacity": ".7",
    "mobile_margin_top": "50px",
    "mobile_margin_bottom": "50px",
    //"action_header": "Action Row",
    "action_header_size": "30px",
    "action_header_color": "white",
    "action_header_bottom_margin": "20px",
    "action_align_text": "left",
    //"action_description": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
    "action_description_size": "16px",
    "action_description_color": "white",
    "action_description_bottom_margin": "20px",
    "action_align_text": "left",
    "action_border": true

  },
  "records": [
    // {
    //   "align_content": "center",
    //   "align_text": "left",
    //   "max-width": "100%",
    //   "content_left_padding": "50px",
    //   "content_right_padding": "50px",
    //   "content_top_padding": "",
    //   "content_bottom_padding": "",
    //   "header": "Section 1",
    //   "header_size": "35px",
    //   "header_color": "",
    //   "header_bottom_margin": "25px",
    //   "description": "Pellentesque aliquam velit ut iaculis scelerisque. Nullam vel pulvinar diam, non pellentesque ipsum. Aenean non euismod nunc, pellentesque placerat leo. Curabitur non massa hendrerit, vehicula elit quis, ornare nisi. Proin mattis condimentum mollis. Pellentesque a elit et turpis faucibus fermentum.",
    //   "description_size": "18px",
    //   "description_color": "",
    //   "description_line_height": "25px",
    //   "description_bottom_margin": "25px",
    //   "button_style": "transparentWhite",
    //   "button_url": "https://addapptation.com/",
    //   "button_text": "Hero Button",
    //   "same_window": true,
    //   "button_top_margin": "50px",
    //   "button_align": "flex-start",
    //   "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    //   "featured_image_link": "",
    //   "featured_image_horizontal_align": "center",
    //   "featured_image_vertical_align": "center",
    //   "featured_image_max_width": "100px",
    //   "featured_image_bottom_margin": "25px",
    //   "featured_image_target": true,

    // },

    // {
    //   "align_content": "center",
    //   "align_text": "left",
    //   "content_left_padding": "50px",
    //   "content_right_padding": "50px",
    //   "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    //   "featured_image_link": "https://addapptation.com/",
    //   "featured_image_horizontal_align": "center",
    //   "featured_image_vertical_align": "center",
    //   "featured_image_max_width": "300px",
    //   "featured_image_bottom_margin": "25px",
    //   "featured_image_targer": false,

    // },
    {
      "align_content": "center",
      "align_text": "center",
      "max-width": "100%",
      "content_left_padding": "50px",
      "content_right_padding": "50px",
      "content_top_padding": "",
      "content_bottom_padding": "",
      "header": "Watch the video",
      "header_size": "35px",
      "header_color": "",
      "header_bottom_margin": "25px",
      "description": "",
      "description_size": "18px",
      "description_color": "green",
      "description_line_height": "25px",
      "description_bottom_margin": "25px",
      "button_style": "color",
      "button_url": "https://addapptation.com/",
      "button_text": "",
      "same_window": true,
      "button_top_margin": "50px",
      "button_align": "flex-start",
      //Image
      "featured_image": "",
      "featured_image_link": "https://addapptation.com/",
      "featured_image_horizontal_align": "center",
      "featured_image_vertical_align": "center",
      "featured_image_max_width": "100px",
      "featured_image_bottom_margin": "25px",
      "featured_image_targer": false,
      // Video
      "featured_video": "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
      "featured_video_poster": "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
      "video_order": true,
      "video_bottom_margin": "100px",
      "featured_video_controls": true,
      "featured_video_muted": true,
      "featured_video_autoplay": true,
      "featured_video_width": "80%",
      "featured_video_loop": true

    },
    // {
    //   "align_content": "center",
    //   "align_text": "left",
    //   "content_left_padding": "50px",
    //   "content_right_padding": "50px",
    //   "content_top_padding": "100px",
    //   "content_bottom_padding": "",
    //   "featured_image": "https://addapptation.blob.core.windows.net/logo/logo.png",
    //   "featured_image_link": "https://addapptation.com/",
    //   "featured_image_horizontal_align": "center",
    //   "featured_image_vertical_align": "center",
    //   "featured_image_max_width": "300px",
    //   "featured_image_bottom_margin": "25px",
    //   "featured_image_targer": false,

    // }
  ]
  };
/*---------------------------------------------
Heat Map
---------------------------------------------*/
let heatmapBlock = {
  "id": "g__jasdf8203r23j",
  "options": {
    "title": "Granite Heat Map"
  },
  "records": [
    {x: "2010", y: "A", heat: 15},
    {x: "2011", y: "A", heat: 17},
    {x: "2012", y: "A", heat: 21},
    {x: "2010", y: "B", heat: 34},
    {x: "2011", y: "B", heat: 33},
    {x: "2012", y: "B", heat: 32},
    {x: "2010", y: "C", heat: 51},
    {x: "2011", y: "C", heat: 50},
    {x: "2012", y: "C", heat: 47}
  ]
}
/*---------------------------------------------
Forms
---------------------------------------------*/
let formsBlock = {
  "id":"granite-form",
  "options":{
     "title":"",
     "addapptation_action":"/google.com",
     "description":"",
     "title_font_size":"40px",
     "description_font_size":"20px",
     "db_action":"",
     "db_object":"sales__object",
     "db_id":"record__id",
     "db_redirect":"redirect.com",
     "flash_message":"This is a flash message",
     "form_id":"granite_test_form",
     "button_1_label":"",
     "button_1_href":"",
     "submit_label":"Submit",
     "cancel_label":"Cancel",
     "max_width":"",
     "activate_recaptcha":true,
     "enctype":"application/x-www-form-urlencoded",
     "method":"POST",
     "visibility_settings":"",
     "hide_submit":false,
     "allow_cancel":false,
     "auto_superscript":false,
     "autosave":false,
     "action":"/google.com"
  },
  "records":[
  {
    "title":"Title",
    "name":"t__title",
    "type":"subheader",
    "value":"This is a header",
    "inline_field": false,
    "required":false,
  },
  {
    "title":"Description",
    "name":"t__description",
    "type":"description",
    "value":"This will be a long description",
    "inline_field": false,
    "required":false,
  },
  {
    "type":"section",
    "title":"Layout",
    "dependency_field":"",
    "dependency_values":"",
    "number_fields":"2",
    "collapsed":false,
    "dependency_not_blank":false,
    "action":"hash_builder"
  },
    {
    "title":"Top Padding",
    "name":"t__top_padding",
    "type":"text",
    "value":"",
    "inline_field": true,
    "required":false,
  },
  {
    "title":"Right Padding",
    "name":"t__right_padding",
    "type":"text",
    "value":"",
    "inline_field": false,
    "required":false,
  },
  {
    "title":"Style",
    "name":"t__style",
    "type":"text",
    "value":"",
    "required":false,
    "inline_field": false,
  },
  {
    "title":"Password",
    "name":"t__margin",
    "type":"password",
    "value":"",
    "required":false,
    "inline_field": false,
  },
  {
    "title":"Picklist",
    "name":"t__picklist",
    "type":"picklist",
    "value":"",
    "options": ["Option 1", "Option 2", "Option 3"],
    "required":false,
    "inline_field": false,
  },
  {
    "title":"Radio",
    "name":"radio",
    "type":"radio",
    "value":"",
    "options": ["Option 1", "Option 2", "Option 3"],
    "required":false,
    "inline_field": false,
  },
  {
    "title":"Range",
    "name":"t__range",
    "type":"range",
    "range_unit": "%",
    "value":"",
    "required":false,
    "inline_field": false,
  },
  {
    "type":"section",
    "section_id": "g__hero-title",
    "title":"Title",
    "dependency_field":"",
    "dependency_values":"",
    "number_fields":"3",
    "collapsed":false,
    "dependency_not_blank":false,
    "action":"hash_builder"
  },
  {
    "title":"Title",
    "name":"t__title",
    "type":"text",
    "value":"",
    "length": "10",
    "required":false,
  },
  {
    "title":"Font Size",
    "name":"t__title_size",
    "type":"range",
    "value":"",
    "required":false,
  },
  {
    "title":"Font Color",
    "name":"t__title_color",
    "type":"color",
    "value":"",
    "required":false,
  },
  {
    "type":"section",
    "section_id": "g__hero-description",
    "title":"Description",
    "dependency_field":"",
    "dependency_values":"",
    "number_fields":"3",
    "collapsed":false,
    "dependency_not_blank":false,
    "action":"hash_builder"
  },
  {
    "title":"Title",
    "name":"t__title",
    "type":"text",
    "value":"",
    "required":false,
  },
  {
    "title":"Font Size",
    "name":"t__title_size",
    "type":"range",
    "value":"",
    "required":false,
  },
  {
    "title":"Font Color",
    "name":"t__title_color",
    "type":"color",
    "value":"",
    "required":false,
  },
  {
    "title":"Quill",
    "name":"t__quill",
    "type":"quill",
    "value":"",
    "required":false,
  },
  {
    "title":"Date",
    "name":"t__quill",
    "type":"date",
    "value":"",
    "required":false,
  }
  ]
}

/*---------------------------------------------
Columns
---------------------------------------------*/
let columnsBlock = {
  "id":"granite-columns",
  "options":{
    "type": "md",
    "width": "6",
    "end_of_row": false,
  }
}