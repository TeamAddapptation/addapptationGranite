/*---------------------------------------------
Themes and Mode
---------------------------------------------*/
let jsonTheme = {
    "primary": "#3fd0d4",
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