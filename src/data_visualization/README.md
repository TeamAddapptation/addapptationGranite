# Data Visulization
You must include the AnyChart CDN. This is until I can find the login for AnyCharts
```js
<script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-bundle.min.js"></script>
```
## Aligning your data
Data can be aligned three different ways to accomidate our single series, multiple series and drilldown chart types.

# Single Series Data
#### Settings Level
Multiple Series: False
#### Record Level
Label (String)
```html
Apple
```
Value (Single Number)
```html
35
```
Series Name (String)
```html
Sales in Q3
```
#### Output
![Single Series Chart](../../screenshots/granite_dv_single_series.jpg)

# Multi Series Data
#### Settings Level
Multiple Series
```html
True
```
X Axis Labels (Array of values)
``` js
["January", "February", "March", "April", "May", "June", "July"]
```
#### Record Level
Label (String)
```html
Apple
```
Series Data (array)
```js
[120, 356, 45, 100, 276, 437, 134]
```
#### Output
![Multi Series Chart](../../screenshots/granite_dv_multi_series.jpg)

# Drilldown
#### Settings Level
Multiple Series: False
#### Record Level
Label (String)
```html
Apple
```
Value (Single Number)
```html
35
```
Series Name (String)
```html
Sales in Q3
```
Drilldown Data (Array of Objects)
``` js
[
{"x":"Q1","value":792026},
{"x":"Q2","value":610501},
{"x":"Q3","value":441843},
{"x":"Q4","value":350711}
]
```
#### Output
![Multi Series Chart](../../screenshots/granite_dv_drilldown.jpg)

