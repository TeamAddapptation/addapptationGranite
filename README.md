# Granite.js

Granite.js is a front-end component library from addapptation, built to render formatted JSON as PWA-ready DOM elements.

## Getting Started

addapptations server-side logic calls the requested micro(s) and writes a DOM element with a unique id.
```html

<div id='a0R1I00000FfTXsUAN-granite'></div>

```
Sample function call:
```js

granite_template(templateBlock, jsonTheme);

```
...and those JSON objects might look like this:

```js
//Block JSON
templateBlock =
     {
      "id": "a0R1I00000FfTXsUAN-granite", //matches DOM element id
      "options": {
        "title": "Header",
        "description": "Ibid ipsum lorem",
        "style": "basic",
        "layout": "center",
        "theme": "custom",
        "header_color": "",
        "header_size": "medium",
        "description_color": "",
        "description_size": "medium",
        "height": "150px",
        "padding": "small"
      },
      "records": [
        {
          "title": "Vermont",
          "description": "Donec sed urna at ligula maximus accumsan a tempor orci.",
          "background_color": "#333",
          "background_image": "https://picsum.photos/id/1002/400",
          "href": "https://addapptation.com/",
          "center": false,
          "icon": "fas fa-dog",
          "hover_color": "#333",
          "target": false,
          "classes": "a__record_class"
        },
        {
          "title": "New Hampshire",
          "description": "",
          "background_color": "orange",
          "background_image": "",
          "href": "https://addapptation.com/",
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
        }
      ]
     }

//Theme JSON
jsonTheme =
     {
     "primary": "#3fd0d4",
     "secondary": "#3fd0d4",
     "mode": "midnight"
     }

```
# Understanding Granite.js

## Release Notes

|Version         |Features                          |Date                         |
|----------------|-------------------------------|-----------------------------|
|1.0.0 |Tiles | August 17, 2020|
|1.1.0 |Hero | September 9, 2020|
