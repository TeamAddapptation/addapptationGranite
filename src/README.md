# Micro Development

This section of the article goes through the steps you need to follow – and some things you need to consider – when creating a well-structured addapptation Adapter.

## Basic Micro Function
```js
granite_[microName]([microName]Block, jsonTheme){
  Micro Code
}
```

## Global Variables
All micros are unique and require different varaibles. That being said we try keeping a few variables consistant across all micros:
```js
const id = jsonTemplate.id;
const o = jsonTemplate.options;
const r = jsonTemplate.records;
const t = jsonTheme
```
## Block Level CSS in JS
```js
var heroCss = document.createElement('style');
heroCss.innerHTML = `
.g__micro_wrapper{
    display: flex;
    flex-direction: row;
    --primary: 212, 70, 151;
    --background: #ffffff;
    --bottom-background: #ffffff;
    --font-color: #101010;
    --header-color: #101010;
    --description-color: #101010;
    --font-hairline: hero-new-hairline, sans-serif;
    --font-regular: hero-new, sans-serif;
    --font-bold: hero-new, sans-serif;
}
.g__micro_wrapper[mode="midnight"]{
    --primary: 212, 70, 151;
    --background: #101010;
    --bottom-background: #ffffff;
    --font-color: #ffffff;
    --header-color: #ffffff;
    --description-color: #ffffff;
}
.g__micro_container{
    padding: 50px;
    margin: 15px;
    border: 2px solid #b4b4b4;
    background:var(--background);
}
.g__micro_header{
    color:var(--header-color);
    font-family: var(--font-regular);
    font-weight: 300;
}
`
document.head.appendChild(heroCss);
```
## Wrapper
```js
/*---------------------------------------------
Wrapper
---------------------------------------------*/
const hero_wrapper = document.createElement('div');
hero_wrapper.setAttribute('id', "granite-123");
hero_wrapper.setAttribute('class','g__micro_wrapper');
hero_wrapper.setAttribute('mode','midnight');
```
