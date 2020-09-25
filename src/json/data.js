/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#df0284",
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
    "id": "granite-template",
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
    "chart_type": "line",
    "drilldown_chart_types": ["pie", "line"],
    "drilldown_details_field_name": "type_breakdown",
    "inner_radius": "70%",
    "label_position": "inside",
    "listener": "point_select",
    "series_titles": [],
    "attr__series_titles": "Test Title",
    "title2": "Interaction Type",
    "x_axis_title": "Company",
    "y_axis_title": "Sales",
  },
  "records": [
    {"x": "Microsoft", "name": "Detective", "value": "518.84", "line_values": ["January", 120, 356, 45, 100], "fill": "#3BBA7B", "type_breakdown": [
      {"x": "Q1", "value": 792026},
      {"x": "Q2", "value": 610501},
      {"x": "Q3", "value": 441843},
      {"x": "Q4", "value": 350711}
  ]},
    {"x": "Oracle", "name": "Classics", "value": "128.14", "line_values": ["February", 543, 256, 345, 346], "fill": "#3BBA7B", "type_breakdown": [
      {"x": "Q1", "value": 1378786},
      {"x": "Q2", "value": 571063},
      {"x": "Q3", "value": 510493},
      {"x": "Q4", "value": 797105}
  ]},
    {"x": "HP", "name": "Textbooks", "value": "328.14", "line_values": ["March", 234, 763, 134,872], "fill": "#3BBA7B", "type_breakdown": [
      {"x": "Q1", "value": 499299},
      {"x": "Q2", "value": 649963},
      {"x": "Q3", "value": 571176},
      {"x": "Q4", "value": 242969}
    ]},
  {"x": "Dell", "name": "Textbooks", "value": "328.14", "line_values": ["April", 34, 363, 720, 348], "fill": "#3BBA7B", "type_breakdown": [
    {"x": "Q1", "value": 499299},
    {"x": "Q2", "value": 649963},
    {"x": "Q3", "value": 571176},
    {"x": "Q4", "value": 242969}
    ]}
  ]}

/*---------------------------------------------
Tiles
---------------------------------------------*/
let tilesBlock = {
  "id": "granite-tiles",
  "feature": "tiles",
  "class": "a_custom",
    "options": {
      "title": "Header",
      // "description": "Etiam dapibus semper nisi, sit amet commodo quam elementum vitae. In hac habitasse platea dictumst. Curabitur sed erat quis nisi imperdiet molestie a ut massa. Phasellus lacinia ante eu risus rhoncus, at accumsan nisl viverra. Nam convallis magna sed lobortis auctor. Phasellus et nisl purus. Duis hendrerit justo eu sapien eleifend, quis maximus massa sodales. Vivamus a fringilla nisl, vel laoreet mauris. In a lacinia leo. Praesent sit amet massa dapibus, dictum lorem eu, elementum tortor.",
      "style": "basic",
      "descHover": true,
      "customOverlay": false,
      "container_top_padding": "50px",
      "container_bottom_padding": "50px",
      "body_content_top_padding": "30px",
      "layout": "center", //picklist: left, center, right
      "theme": "custom",
      "header_color": "",
      "header_size": "30px", //small, medium, large
      "description_color": "",
      "description_size": "", //small, medium, large
      "icon_color": "",
      "columns": "4",
      "fillRow": true,
      "icon_size": "",
      "height": "200px",
      "filter_one": "",
      "filter_two": "",
      "search": true,
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
      "filter_label": "Coastline",
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
        "description":"This is description text",
        "text_color":"#101010",
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
        "description":"",
        "text_color":"#101010",
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
        "description": "This is a description",
        "background_color": "#6c13b3",
        "background_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "buttons": [{"name": "View", "href": "/cards?selection=view"}],
        "icon": "fas fa-dog",
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
        "description": "Vivamus justo nisi, convallis id volutpat ac, aliquet non massa.",
        "background_color": "#6312a3",
        "tags": ["apple", "orange", "banana"],
        "background_image": "",
        "padded_image": "",
        "href": "https://addapptation.com/",
        "link_name": "Button",
        "center": false,
        "icon": "fas fa-check",
        "target": false
      },
      {
        "title": "",
        "description": "",
        "background_color": "#6312a3",
        "background_image": "",
        "padded_image": "",
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