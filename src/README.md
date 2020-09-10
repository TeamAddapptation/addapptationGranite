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
