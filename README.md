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
The following core concepts constitute the foundation of development of all new and existing micros within Granite.js

> **One Flavor - Vanilla:** Granite.js is based on the best of breed usage of HTML, CSS, and JavaScript. To keep everything as atomic as possible, Granite.js leverages the native strengths of each language or protocol with no special flavors except vanilla. 

> **block:** a Granite.js UI element is called a block, and consists of an HTML tag with an _id_.

> **Function:** Server-side logic request the micro and calls the micro function. The final build is then appended to the unique _id_ on the page.

> **JSON:** Granite.js relies on two valid JSON files. The first JSON file, [microName]Block holds the id, options and records, see options and records section for more detailed information. The second file, themeBlock, holds the global UI settings from the platform. This included the primary color, secondary color and mode (standard or midnight).

## Release Notes

|Version         |Features                          |Date                         |
|----------------|-------------------------------|-----------------------------|
|1.0.0 |Tiles | August 17, 2020|
|1.0.0 |Navigation| August 17, 2020|
|1.0.0 |Content | August 17, 2020|
|1.0.0 |Cards | August 17, 2020|
|1.1.0 |Tabs | September 9, 2020|
|1.1.0 |Hero | September 9, 2020|
