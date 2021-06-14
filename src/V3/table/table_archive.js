

/* Append CSS */
// var s = document.createElement("link");
// s.rel = "stylesheet";
// // s.href = "table-styles.css";
// s.href = "https://teamaddapptation.github.io/PlatformDev/public/assets/js/table-styles.css";
// document.head.appendChild(s);

/* Append Moment */
var m = document.createElement("script");
m.type = "text/javascript";
m.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js";
document.head.appendChild(m);

/* Append Datepicker */
var m = document.createElement("script");
m.type = "text/javascript";
m.src = "https://teamaddapptation.github.io/PlatformDev/public/assets/js/addappter-datepicker.js";
document.head.appendChild(m);

/* Create inital table*/
var elem = document.createElement('table');
           elem.classList.add('a__table');
document.body.appendChild(elem);


/* Datatable build */
(function(root, factory) {
    var plugin = "DataTable";

    if (typeof exports === "object") {
        module.exports = factory(plugin);
    } else if (typeof define === "function" && define.amd) {
        define([], factory(plugin));
    } else {
        root[plugin] = factory(plugin);
    }
})(typeof global !== 'undefined' ? global : this.window || this.global, function(plugin) {
    "use strict";
    var win = window,
        doc = document,
        body = doc.body;

    /**
     * Default configuration
     * @typ {Object}
     */
    var defaultConfig = {};

    /**
     * Check is item is object
     * @return {Boolean}
     */
    var isObject = function (val) {
        return Object.prototype.toString.call(val) === "[object Object]";
    };

    /**
     * Check is item is array
     * @return {Boolean}
     */
    var isArray = function (val) {
        return Array.isArray(val);
    };

    /**
     * Check for valid JSON string
     * @param  {String}   str
     * @return {Boolean|Array|Object}
     */
    var isJson = function (str) {
        var t = !1;
        try {
            t = JSON.parse(str);
        } catch (e) {
            return !1;
        }
        return !(null === t || (!isArray(t) && !isObject(t))) && t;
    };

    /**
     * Merge objects (reccursive)
     * @param  {Object} r
     * @param  {Object} t
     * @return {Object}
     */
    var extend = function (src, props) {
        for (var prop in props) {
            if (props.hasOwnProperty(prop)) {
                var val = props[prop];
                if (val && isObject(val)) {
                    src[prop] = src[prop] || {};
                    extend(src[prop], val);
                } else {
                    src[prop] = val;
                }
            }
        }
        return src;
    };

    /**
     * Iterator helper
     * @param  {(Array|Object)}   arr     Any object, array or array-like collection.
     * @param  {Function}         fn      Callback
     * @param  {Object}           scope   Change the value of this
     * @return {Void}
     */
    var each = function (arr, fn, scope) {
        var n;
        if (isObject(arr)) {
            for (n in arr) {
                if (Object.prototype.hasOwnProperty.call(arr, n)) {
                    fn.call(scope, arr[n], n);
                }
            }
        } else {
            for (n = 0; n < arr.length; n++) {
                fn.call(scope, arr[n], n);
            }
        }
    };

    /**
     * Add event listener to target
     * @param  {Object} el
     * @param  {String} e
     * @param  {Function} fn
     */
    var on = function (el, e, fn) {
        el.addEventListener(e, fn, false);
    };

    /**
     * Create DOM element node
     * @param  {String}   a nodeName
     * @param  {Object}   b properties and attributes
     * @return {Object}
     */
    var createElement = function (a, b) {
        var d = doc.createElement(a);
        if (b && "object" == typeof b) {
            var e;
            for (e in b) {
                if ("html" === e) {
                    d.innerHTML = b[e];
                } else {
                    d.setAttribute(e, b[e]);
                }
            }
        }
        return d;
    };

    var flush = function (el, ie) {
        if (el instanceof NodeList) {
            each(el, function (e) {
                flush(e, ie);
            });
        } else {
            if (ie) {
                while (el.hasChildNodes()) {
                    el.removeChild(el.firstChild);
                }
            } else {
                el.innerHTML = "";
            }
        }
    };

    /**
     * Create button helper
     * @param  {String}   c
     * @param  {Number}   p
     * @param  {String}   t
     * @return {Object}
     */
    var button = function (c, p, t) {
        return createElement("li", {
            class: c,
            html: '<a href="#" data-page="' + p + '">' + t + "</a>"
        });
    };

    /**
     * classList shim
     * @type {Object}
     */
    var classList = {
        add: function (s, a) {
            if (s.classList) {
                s.classList.add(a);
            } else {
                if (!classList.contains(s, a)) {
                    s.className = s.className.trim() + " " + a;
                }
            }
        },
        remove: function (s, a) {
            if (s.classList) {
                s.classList.remove(a);
            } else {
                if (classList.contains(s, a)) {
                    s.className = s.className.replace(
                        new RegExp("(^|\\s)" + a.split(" ").join("|") + "(\\s|$)", "gi"),
                        " "
                    );
                }
            }
        },
        contains: function (s, a) {
            if (s)
                return s.classList ?
                    s.classList.contains(a) :
                    !!s.className &&
                    !!s.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"));
        }
    };

    /**
     * Bubble sort algorithm
     */
    var sortItems = function (a, b) {
        var c, d;
        if (1 === b) {
            c = 0;
            d = a.length;
        } else {
            if (b === -1) {
                c = a.length - 1;
                d = -1;
            }
        }
        for (var e = !0; e;) {
            e = !1;
            for (var f = c; f != d; f += b) {
                if (a[f + b] && a[f].value > a[f + b].value) {
                    var g = a[f],
                        h = a[f + b],
                        i = g;
                    a[f] = h;
                    a[f + b] = i;
                    e = !0;
                }
            }
        }
        return a;
    };

    /**
     * Pager truncation algorithm
     */
    var truncate = function (a, b, c, d, ellipsis) {
        d = d || 2;
        var j,
            e = 2 * d,
            f = b - d,
            g = b + d,
            h = [],
            i = [];
        if (b < 4 - d + e) {
            g = 3 + e;
        } else if (b > c - (3 - d + e)) {
            f = c - (2 + e);
        }
        for (var k = 1; k <= c; k++) {
            if (1 == k || k == c || (k >= f && k <= g)) {
                var l = a[k - 1];
                classList.remove(l, "active");
                h.push(l);
            }
        }
        each(h, function (c) {
            var d = c.children[0].getAttribute("data-page");
            if (j) {
                var e = j.children[0].getAttribute("data-page");
                if (d - e == 2) i.push(a[e]);
                else if (d - e != 1) {
                    var f = createElement("li", {
                        class: "ellipsis",
                        html: '<a href="#">' + ellipsis + "</a>"
                    });
                    i.push(f);
                }
            }
            i.push(c);
            j = c;
        });

        return i;
    };
    /**
     * HTML table type
     */
    function cellFormat(record){
        var cell;
        var id = record['id'] === "" ? "" : record['id'];
        var value = record['value'] === "" ? "" : record['value'];
        var placeholder = record['placeholder'] === "" ? "" : record["placeholder"];
        var disabled = record['editable'] === true ? "" : "disabled";
        var target = record['target'] === true ? `target=${record['target']}` : '';
        switch(record['type']) {
            case 'link':
                var classes = `${record['classes']} ${record['sidebar']}`
                cell = `<a ${target} href="${record['href']}" class="${record['side_pane'] ? "a__side_pane_link" : ""}">${record['value']}</a>`
            break;
            case 'picklist':
                var options = record['options'];
                var editable = record['editable'] === true ? `<i class='fal fa-angle-down a__select_icon a__editable_shown'</i>` : "";
                var hidden = `<span class='a__hidden_input_value'>${value}</span>`;
                cell = `<div id="${id}" class='custom-select'><select>${options.map(selectOptions).join(" ")}</select></div>`
            break;
            case 'string':
                var length = record['value'].length;
                var tooltip = length > 18 ? `data-toggle="tooltip" data-placement="top" title="${value}"` : "";
                var editIcon = ((record['editable'] === true)) ? "<i class='fas fa-pencil-alt a__edit_btn' onclick='inputEdit(this)'></i>" : "";
                cell = `<input type="text" class="a__inline_input" data-content="${value}" ${tooltip} value="${value}" ${disabled}> ${editIcon}`;
                break;
            case 'html':
                cell = `<span class='a__hidden_input_value'>${value}</span>${value}`;
              break;
            case 'date':
                // var format = "M/D/Y";
                // var val = new Date(record['value']);
                // var date = parseDate(val, format);
                // var hidden = `<span class='a__hidden_input_value'>${date}</span>`;
                var editable = record['editable'] === true ? `<i class="far fa-calendar-alt a__calendar_btn"></i>` : "";
                // cell = `${hidden}<input class="a__inline_input" id='${id}' type="text" value="${date}">${editable}`;
                cell = `${editable}<input type="text" data-content="${value}" class="a__inline_input a__date_selector" ${disabled} value="${value}">`;
              break;
            case 'delete':
                cell = "<i class='fas fa-trash-alt a__delete_btn notify'></i>";
              break;
            case 'number':
                var editIcon = ((record['editable'] === true) && (record['editable_shown'] === true)) ? "<i class='fas fa-pencil-alt a__edit_btn' onclick='inputEdit(this)'></i>" : "";
                var hidden = `<span class='a__hidden_input_value'>${value}</span>`;
                cell = `${hidden}<input type="number" data-content="${value}" class="a__inline_input" value="${value}" ${disabled}>${editIcon}`;
                break
            case 'currency':
                var editIcon = ((record['editable'] === "true") && (record['editable_shown'] === "true")) ? "<i class='fas fa-pencil-alt a__edit_btn' onclick='inputEdit(this)'></i>" : "";
                var hidden = `<span class='a__hidden_input_value'>${value}</span>`;
                cell = `${hidden}<input type="text" data-content="${value}" class="a__inline_input" value="${formatter.format(value)}" ${disabled}>${editIcon}`;
              break;
            case 'checkbox':
                var checked = record['checked'] === true ? "checked" : "";
                var input = `<label class="custom-control-label ${disabled}" onclick="checkboxClick(this)"></label>`
                var cell = `<label class="checkbox-label"><input ${checked} type="checkbox" ${disabled}><span class="checkbox-custom rectangular"></span></label>`
            break;
            default:
              console.log('No matching attribute');
          }
          return cell;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });
    /**
     * Picklist options
     */
    function selectOptions(val, count) {
        var item = `<option value='${count}'>${val}</option>`;
        return item;
      }

    /**
     * Parse data to HTML table
     */
    var dataToTable = function (data) {
        var thead = false,
            tbody = false;

        data = data || this.options.data;
        var columns = data.records[0].columns;
        var records = data.records;

        if (columns) {
            thead = createElement("thead");
            var tr = createElement("tr");
            each(columns, function (col) {
                var td = createElement("th", {
                    html: col,
                });
                tr.appendChild(td);
            });

            thead.appendChild(tr);
        }
        if (records && records.length) {
            tbody = createElement("tbody");
            var header = records[0].columns;
            each(records, function (rows, index) {
                if (!rows.columns) {
                    var tr = createElement("tr", {
                        'data-content': index,
                    });
                    each(rows, function (value, index) {
                        var td = createElement("td", {
                            html: cellFormat(value),
                            'data-type': value.type,
                            'class': `a__${value.type}`,
                            'data-label': `${header[index]}`
                        });
                        if (index === 0) {
                            td.classList.add('mobileDropdown')
                        }
                        tr.appendChild(td);
                    });
                tbody.appendChild(tr);
                }
            });
        }

        if (thead) {
            if (this.table.tHead !== null) {
                this.table.removeChild(this.table.tHead);
            }
            this.table.appendChild(thead);
        }

        if (tbody) {
            if (this.table.tBodies.length) {
                this.table.removeChild(this.table.tBodies[0]);
            }
            this.table.appendChild(tbody);
        }
    };

    /**
     * Use moment.js to parse cell contents for sorting
     * @param  {String} content     The datetime string to parse
     * @param  {String} format      The format for moment to use
     * @return {String|Boolean}     Datatime string or false
     */
    var parseDate = function (content, format) {
        var date = false;
        // moment() throws a fit if the string isn't a valid datetime string
        // Supply the format to the constructor (https://momentjs.com/docs/#/parsing/string-format/)

        // Converting to YYYYMMDD ensures we can accurately sort the column numerically

        if (format) {
            switch (format) {
            case "M/D/Y":
                date = moment(content).format('l');
                break;
            case "MM D YY":
                date = moment(content).format('ll');
                break;
            default:
                date = moment(content, format).format("YYYYMMDD");
                break;
            }
        }

        return date;
    };

    /**
     * Columns API
     * @param {Object} instance DataTable instance
     * @param {Mixed} columns  Column index or array of column indexes
     */
    var Columns = function (dt) {
        this.dt = dt;
        return this;
    };

    /**
     * Swap two columns
     * @return {Void}
     */

    Columns.prototype.swap = function (columns) {
        if (columns.length && columns.length === 2) {
            var cols = [];

            // Get the current column indexes
            each(this.dt.headings, function (h, i) {
                cols.push(i);
            });

            var x = columns[0];
            var y = columns[1];
            var b = cols[y];
            cols[y] = cols[x];
            cols[x] = b;

            this.order(cols);
        }
    };

    /**
     * Reorder the columns
     * @return {Array} columns  Array of ordered column indexes
     */
    Columns.prototype.order = function (columns) {

        var a, b, c, d, h, s, cell,
            temp = [
                [],
                [],
                [],
                []
            ],
            dt = this.dt;

        // Order the headings
        each(columns, function (column, x) {
            h = dt.headings[column];
            s = h.getAttribute("data-sortable") !== "false";
            a = h.cloneNode(true);
            a.originalCellIndex = x;
            a.sortable = s;

            temp[0].push(a);

            if (dt.hiddenColumns.indexOf(column) < 0) {
                b = h.cloneNode(true);
                b.originalCellIndex = x;
                b.sortable = s;

                temp[1].push(b);
            }
        });

        // Order the row cells
        each(dt.data, function (row, i) {
            c = row.cloneNode();
            d = row.cloneNode();

            c.dataIndex = d.dataIndex = i;

            if (row.searchIndex !== null && row.searchIndex !== undefined) {
                c.searchIndex = d.searchIndex = row.searchIndex;
            }

            // Append the cell to the fragment in the correct order
            each(columns, function (column, x) {
                cell = row.cells[column].cloneNode(true);
                cell.data = row.cells[column].data;
                c.appendChild(cell);

                if (dt.hiddenColumns.indexOf(column) < 0) {
                    cell = row.cells[column].cloneNode(true);
                    cell.data = row.cells[column].data;
                    d.appendChild(cell);
                }
            });

            temp[2].push(c);
            temp[3].push(d);
        });

        dt.headings = temp[0];
        dt.activeHeadings = temp[1];

        dt.data = temp[2];
        dt.activeRows = temp[3];

        // Update
        dt.update();
    };

    /**
     * Hide columns
     * @return {Void}
     */
    Columns.prototype.hide = function (columns) {
        if (columns.length) {
            var dt = this.dt;

            each(columns, function (column) {
                if (dt.hiddenColumns.indexOf(column) < 0) {
                    dt.hiddenColumns.push(column);
                }
            });

            this.rebuild();
        }
    };

    /**
     * Show columns
     * @return {Void}
     */
    Columns.prototype.show = function (columns) {
        if (columns.length) {
            var index, dt = this.dt;

            each(columns, function (column) {
                index = dt.hiddenColumns.indexOf(column);
                if (index > -1) {
                    dt.hiddenColumns.splice(index, 1);
                }
            });

            this.rebuild();
        }
    };

    /**
     * Check column(s) visibility
     * @return {Boolean}
     */
    Columns.prototype.visible = function (columns) {
        var cols, dt = this.dt;

        columns = columns || dt.headings.map(function (th) {
            return th.originalCellIndex;
        });

        if (!isNaN(columns)) {
            cols = dt.hiddenColumns.indexOf(columns) < 0;
        } else if (isArray(columns)) {
            cols = [];
            each(columns, function (column) {
                cols.push(dt.hiddenColumns.indexOf(column) < 0);
            });
        }

        return cols;
    };

    /**
     * Add a new column
     * @param {Object} data
     */
    Columns.prototype.add = function (data) {
        var that = this,
            td, th = document.createElement("th");

        if (!this.dt.headings.length) {
            this.dt.insert({
                headings: [data.heading],
                data: data.data.map(function (i) {
                    return [i];
                })
            });
            this.rebuild();
            return;
        }

        if (!this.dt.hiddenHeader) {
            if (data.heading.nodeName) {
                th.appendChild(data.heading);
            } else {
                th.innerHTML = data.heading;
            }
        } else {
            th.innerHTML = "";
        }

        this.dt.headings.push(th);

        each(this.dt.data, function (row, i) {
            if (data.data[i]) {
                td = document.createElement("td");

                if (data.data[i].nodeName) {
                    td.appendChild(data.data[i]);
                } else {
                    td.innerHTML = data.data[i];
                }

                td.data = td.innerHTML;

                if (data.render) {
                    td.innerHTML = data.render.call(that, td.data, td, row);
                }

                row.appendChild(td);
            }
        });
        if (data.type) {
            th.setAttribute("data-type", data.type);
        }
        if (data.format) {
            th.setAttribute("data-format", data.format);
        }

        if (data.hasOwnProperty("sortable")) {
            th.sortable = data.sortable;
            th.setAttribute("data-sortable", data.sortable === true ? "true" : "false");
        }

        this.rebuild();

        this.dt.renderHeader();
    };

    /**
     * Remove column(s)
     * @param  {Array|Number} select
     * @return {Void}
     */
    Columns.prototype.remove = function (select) {
        if (isArray(select)) {
            // Remove in reverse otherwise the indexes will be incorrect
            select.sort(function (a, b) {
                return b - a;
            });

            each(select, function (column) {
                this.remove(column);
            }, this);
        } else {
            this.dt.headings.splice(select, 1);

            each(this.dt.data, function (row) {
                row.removeChild(row.cells[select]);
            });
        }

        this.rebuild();
    };

    /**
     * Sort by column
     * @param  {int} column - The column no.
     * @param  {string} direction - asc or desc
     * @return {void}
     */
    Columns.prototype.sort = function (column, direction, init) {
        var dt = this.dt;

        // Check column is present
        if (dt.hasHeadings && (column < 1 || column > dt.activeHeadings.length)) {
            return false;
        }

        dt.sorting = true;

        // Convert to zero-indexed
        column = column - 1;

        var dir,
            rows = dt.data,
            alpha = [],
            numeric = [],
            a = 0,
            n = 0,
            th = dt.activeHeadings[column];

        column = th.originalCellIndex;

        each(rows, function (tr) {
            var cell = tr.cells[column];
            var content = cell.hasAttribute('data-content') ? cell.getAttribute('data-content') : cell.data;
            var num = content.replace(/(\$|\,|\s|%)/g, "");

            // Check for date format and moment.js
            if (th.getAttribute("data-type") === "date" && win.moment) {
                var format = false,
                    formatted = th.hasAttribute("data-format");

                if (formatted) {
                    format = th.getAttribute("data-format");
                }

                num = parseDate(content, format);
            }

            if (parseFloat(num) == num) {
                numeric[n++] = {
                    value: Number(num),
                    row: tr
                };
            } else {
                alpha[a++] = {
                    value: content,
                    row: tr
                };
            }
        });

        /* Sort according to direction (ascending or descending) */
        var top, btm;
        if (classList.contains(th, "asc") || direction == "asc") {
            top = sortItems(alpha, -1);
            btm = sortItems(numeric, -1);
            dir = "descending";
            classList.remove(th, "asc");
            classList.add(th, "desc");
        } else {
            top = sortItems(numeric, 1);
            btm = sortItems(alpha, 1);
            dir = "ascending";
            classList.remove(th, "desc");
            classList.add(th, "asc");
        }

        /* Clear asc/desc class names from the last sorted column's th if it isn't the same as the one that was just clicked */
        if (dt.lastTh && th != dt.lastTh) {
            classList.remove(dt.lastTh, "desc");
            classList.remove(dt.lastTh, "asc");
        }

        dt.lastTh = th;

        /* Reorder the table */
        rows = top.concat(btm);

        dt.data = [];
        var indexes = [];

        each(rows, function (v, i) {
            dt.data.push(v.row);

            if (v.row.searchIndex !== null && v.row.searchIndex !== undefined) {
                indexes.push(i);
            }
        }, dt);

        dt.searchData = indexes;

        this.rebuild();

        dt.update();

        if (!init) {
            dt.emit("datatable.sort", column, dir);
        }
    };

    /**
     * Rebuild the columns
     * @return {Void}
     */
    Columns.prototype.rebuild = function () {
        var a, b, c, d, dt = this.dt,
            temp = [];

        dt.activeRows = [];
        dt.activeHeadings = [];

        each(dt.headings, function (th, i) {
            th.originalCellIndex = i;
            th.sortable = th.getAttribute("data-sortable") !== "false";
            if (dt.hiddenColumns.indexOf(i) < 0) {
                dt.activeHeadings.push(th);
            }
        }, this);

        // Loop over the rows and reorder the cells
        each(dt.data, function (row, i) {
            a = row.cloneNode();
            b = row.cloneNode();

            a.dataIndex = b.dataIndex = i;

            if (row.searchIndex !== null && row.searchIndex !== undefined) {
                a.searchIndex = b.searchIndex = row.searchIndex;
            }

            // Append the cell to the fragment in the correct order
            each(row.cells, function (cell) {
                c = cell.cloneNode(true);
                c.data = cell.data;
                a.appendChild(c);

                if (dt.hiddenColumns.indexOf(cell.cellIndex) < 0) {
                    d = cell.cloneNode(true);
                    d.data = cell.data;
                    b.appendChild(d);
                }
            });

            // Append the fragment with the ordered cells
            temp.push(a);
            dt.activeRows.push(b);
        });

        dt.data = temp;

        dt.update();
    };

    /**
     * Rows API
     * @param {Object} instance DataTable instance
     * @param {Array} rows
     */
    var Rows = function (dt, rows) {
        this.dt = dt;
        this.rows = rows;

        return this;
    };

    /**
     * Build a new row
     * @param  {Array} row
     * @return {HTMLElement}
     */
    Rows.prototype.build = function (row) {
        var td, tr = createElement("tr");

        var headings = this.dt.headings;

        if (!headings.length) {
            headings = row.map(function () {
                return "";
            });
        }

        each(headings, function (h, i) {
            td = createElement("td");

            // Fixes #29
            if (!row[i] && !row[i].length) {
                row[i] = "";
            }

            td.innerHTML = row[i];

            td.data = row[i];

            tr.appendChild(td);
        });

        return tr;
    };

    Rows.prototype.render = function (row) {
        return row;
    };

    /**
     * Add new row
     * @param {Array} select
     */
    Rows.prototype.add = function (data) {

        if (isArray(data)) {
            var dt = this.dt;
            // Check for multiple rows
            if (isArray(data[0])) {
                each(data, function (row, i) {
                    dt.data.push(this.build(row));
                }, this);
            } else {
                dt.data.push(this.build(data));
            }

            // We may have added data to an empty table
            if ( dt.data.length ) {
                dt.hasRows = true;
            }


            this.update();

            dt.columns().rebuild();
        }
    };

    /**
     * Remove row(s)
     * @param  {Array|Number} select
     * @return {Void}
     */
    Rows.prototype.remove = function (select) {

        var dt = this.dt;

        if (isArray(select)) {
            // Remove in reverse otherwise the indexes will be incorrect
            select.sort(function (a, b) {
                return b - a;
            });

            each(select, function (row, i) {
                dt.data.splice(row, 1);
            });
        } else {
            dt.data.splice(select, 1);
        }

        this.update();
        dt.columns().rebuild();
    };

    /**
     * Update row indexes
     * @return {Void}
     */
    Rows.prototype.update = function () {
        each(this.dt.data, function (row, i) {
            row.dataIndex = i;
        });
    };

    ////////////////////
    //    MAIN LIB    //
    ////////////////////

    var DataTable = function (table, options) {
        this.initialized = false;
        // user options
        this.options = extend(defaultConfig, options);
        if (typeof table === "string") {
            table = document.querySelector(table);
        }
        this.initialLayout = table.innerHTML;
        this.initialSortable = this.options.sortable;

        // Disable manual sorting if no header is present (#4)
        if (!this.options.header) {
            this.options.sortable = false;
        }

        if (table.tHead === null) {
            if (!this.options.data ||
                (this.options.data && !this.options.data.records)
            ) {
                this.options.sortable = false;
            }
        }

        if (table.tBodies.length && !table.tBodies[0].rows.length) {
            if (this.options.data) {
                if (!this.options.data.data) {
                    throw new Error(
                        "You seem to be using the data option, but you've not defined any rows."
                    );
                }
            }
        }

        this.table = table;

        this.init();
    };

    /**
     * Add custom property or method to extend DataTable
     * @param  {String} prop    - Method name or property
     * @param  {Mixed} val      - Function or property value
     * @return {Void}
     */
    DataTable.extend = function(prop, val) {
        if (typeof val === "function") {
            DataTable.prototype[prop] = val;
        } else {
            DataTable[prop] = val;
        }
    };

    var proto = DataTable.prototype;

    /**
     * Initialize the instance
     * @param  {Object} options
     * @return {Void}
     */
    proto.init = function (options) {
        if (this.initialized || classList.contains(this.table, "dataTable-table")) {
            return false;
        }

        var that = this;

        this.options = extend(this.options, options || {});

        // IE detection
        this.isIE = !!/(msie|trident)/i.test(navigator.userAgent);

        this.currentPage = 1;
        this.onFirstPage = true;

        this.hiddenColumns = [];
        this.columnRenderers = [];
        this.selectedColumns = [];

        this.render();

        setTimeout(function () {
            that.emit("datatable.init");
            that.initialized = true;

            if (that.options.plugins) {
                each(that.options.plugins, function(options, plugin) {
                    if (that[plugin] && typeof that[plugin] === "function") {
                        that[plugin] = that[plugin](options, {
                            each: each,
                            extend: extend,
                            classList: classList,
                            createElement: createElement
                        });

                        // Init plugin
                        if (options.enabled && that[plugin].init && typeof that[plugin].init === "function") {
                            that[plugin].init();
                        }
                    }
                });
            }
        }, 10);
    };

    /**
     * Render the instance
     * @param  {String} type
     * @return {Void}
     */
    proto.render = function (type) {
        if (type) {
            switch (type) {
            case "page":
                this.renderPage();
                break;
            case "pager":
                this.renderPager();
                break;
            case "header":
                this.renderHeader();
                break;
            }

            return false;
        }

        var that = this,
            o = that.options,
            template = "";

        // Convert data to HTML
        if (o.data) {
            dataToTable.call(that);
        }

        if (o.ajax) {
            var ajax = o.ajax;
            var xhr = new XMLHttpRequest();

            var xhrProgress = function (e) {
                that.emit("datatable.ajax.progress", e, xhr);
            };

            var xhrLoad = function (e) {
                if (xhr.readyState === 4) {
                    that.emit("datatable.ajax.loaded", e, xhr);

                    if (xhr.status === 200) {
                        var obj = {};
                        obj.data = ajax.load ? ajax.load.call(that, xhr) : xhr.responseText;

                        obj.type = "json";

                        if (ajax.content && ajax.content.type) {
                            obj.type = ajax.content.type;

                            obj = extend(obj, ajax.content);
                        }

                        that.import(obj);

                        that.setColumns(true);

                        that.emit("datatable.ajax.success", e, xhr);
                    } else {
                        that.emit("datatable.ajax.error", e, xhr);
                    }
                }
            };

            var xhrFailed = function (e) {
                that.emit("datatable.ajax.error", e, xhr);
            };

            var xhrCancelled = function (e) {
                that.emit("datatable.ajax.abort", e, xhr);
            };

            on(xhr, "progress", xhrProgress);
            on(xhr, "load", xhrLoad);
            on(xhr, "error", xhrFailed);
            on(xhr, "abort", xhrCancelled);

            that.emit("datatable.ajax.loading", xhr);

            xhr.open("GET", typeof ajax === "string" ? o.ajax : o.ajax.url);
            xhr.send();
        }

        // Store references
        that.body = that.table.tBodies[0];
        that.head = that.table.tHead;
        that.foot = that.table.tFoot;

        if (!that.body) {
            that.body = createElement("tbody");

            that.table.appendChild(that.body);
        }

        that.hasRows = that.body.rows.length > 0;

        // Make a tHead if there isn't one (fixes #8)
        if (!that.head) {
            var h = createElement("thead");
            var t = createElement("tr");

            if (that.hasRows) {
                each(that.body.rows[0].cells, function () {
                    t.appendChild(createElement("th"));
                });

                h.appendChild(t);
            }

            that.head = h;

            that.table.insertBefore(that.head, that.body);

            that.hiddenHeader = !o.ajax;
        }

        that.headings = [];
        that.hasHeadings = that.head.rows.length > 0;

        if (that.hasHeadings) {
            that.header = that.head.rows[0];
            that.headings = [].slice.call(that.header.cells);
        }

        // Header
        if (!o.header) {
            if (that.head) {
                that.table.removeChild(that.table.tHead);
            }
        }

        // Footer
        if (o.footer) {
            if (that.head && !that.foot) {
                that.foot = createElement("tfoot", {
                    html: that.head.innerHTML
                });
                that.table.appendChild(that.foot);
            }
        } else {
            if (that.foot) {
                that.table.removeChild(that.table.tFoot);
            }
        }

        // Build
        that.wrapper = createElement("div", {
          id: "test",
          class: "a__datatable_wrapper dataTable-wrapper dataTable-loading"
        });



    /* HEADER START */

      var g_header = createElement('div', {class: "a__datatable_header"});
      var dt_header = '';
      if (!!options.title && options.title.length) {
        var dt_header = `<h2>${options.title}</h2>`;
      }
      var dt_desc = '';
      if (!!options.description && options.description.length) {
        var dt_desc = `<p>${options.description}</p>`;
      }
      dt_header += dt_desc;
      g_header.innerHTML = dt_header;

    /* HEADER END */




    /* BUILD TEMPLATE START */
      // Template for custom layouts
      template += g_header.outerHTML;
      template += "<div class='dataTable-top'>";
      template += o.layout.top;
      template += "</div>";
      template += "<hr>";
      template += "<div id='a__table_body' class='dataTable-container'></div>";
      template += "<div class='dataTable-bottom'>";
      template += o.layout.bottom;
      template += "</div>";
    /* BUILD TEMPLATE END */





    /* ACTION ROW START */

      // Per Page Select
        if (o.perPageSelect) {
          var wrap = "<div class='dataTable-dropdown'><label>";
          wrap += o.labels.perPage;
          wrap += "</label></div>";

          // Create the select
          var select = createElement("select", {
              class: "dataTable-selector"
          });

          // Create the options
          each(o.perPageSelect, function (val) {
            var selected = val === o.perPage;
            var option = new Option(val, val, selected, selected);
            select.add(option);
          });

          // Custom label
          wrap = wrap.replace("{select}", select.outerHTML);

          // Selector placement
          template = template.replace("{select}", wrap);
        } else {
          template = template.replace("{select}", "");
        }

      // Searchable
        var search_container = `<div class="search-container"><span class="icon"><i class="fal fa-search"></i></span><input type="text" id="search" class="dataTable-input"/></div>`;
        var form = o.searchable ? search_container : "";
        template = template.replace("{search}", form);

      // BUTTONS
        var button_container = createElement("div", {class: "a__button_container mr-2"});
        var button_container_html = ""
        if(options.button_1_label){
          button_container_html += `<a class='a__custom_button ${options.button_1_sidepane ? "a__side_pane_link" : ""}' href='${options.button_1_href}'>${options.button_1_label}</a>`
        }
        if(options.button_2_label){
          button_container_html += `<a class='a__custom_button ${options.button_2_sidepane ? "a__side_pane_link" : ""}' href='${options.button_2_href}'>${options.button_2_label}</a>`
        }
        if(options.button_3_label){
          button_container_html += `<a class='a__custom_button ${options.button_3_sidepane ? "a__side_pane_link" : ""}' href='${options.button_3_href}'>${options.button_3_label}</a>`
        }
        if(options.button_4_label){
          button_container_html += `<a class='a__custom_button ${options.button_4_sidepane ? "a__side_pane_link" : ""}' href='${options.button_4_href}'>${options.button_4_label}</a>`
        }
        if(options.button_5_label){
          button_container_html += `<a class='a__custom_button ${options.button_5_sidepane ? "a__side_pane_link" : ""}' href='${options.button_5_href}'>${options.button_5_label}</a>`
        }
        button_container.innerHTML = button_container_html
        template = template.replace("{button_container}", button_container.outerHTML);

      // Exportable
        if (o.csv || o.pdf || o.print) {
          var csv = o.csv === true ? "<button type='button' class='export a__export-btn buttons-excel' data-type='csv'>CSV</button>" : "";
          var pdf = o.pdf === true ? "<button type='button' class='export a__export-btn buttons-pdf' data-type='pdf'>PDF</button>" : "";
          var print = o.print === true ? "<button type='button' class='export a__export-btn buttons-print' data-type='print'>Print</button>" : "";
          var test = `<div class='dt-buttons btn-group'>${csv}${pdf}${print}</div>`;
          template = template.replace("{export}", test);
        } else {
          template = template.replace("{export}", "");
        }

    /* ACTION ROW END */





    /* FOOTER START */

      // Info placement
        template = template.replace("{info}", "<div class='dataTable-info'></div>");

    /* FOOTER END */




        // Sortable
          if (that.hasHeadings) {
              this.render("header");
          }

        // Add table class and id
        that.table.setAttribute("id", "a__table");
        classList.add(that.table, "dataTable-table");

        if (o.striped) {
          classList.add(that.table, "table-striped");
        }

        if (o.fixedHeaer) {
          classList.add(that.table, "table-fixed");
        }
        o.padded ? classList.add(that.table, "table-padded"): classList.add(that.table, "table-normal");

        // Paginator
        var w = createElement("div", {
          class: "dataTable-pagination"
        });
        var paginator = createElement("ul");
        w.appendChild(paginator);

        // Pager(s) placement
        template = template.replace(/\{pager\}/g, w.outerHTML);

        that.wrapper.innerHTML = template;

        that.container = that.wrapper.querySelector(".dataTable-container");

        if (o.responsive){
            that.container.classList.add('table-responsive');
        }

        that.pagers = that.wrapper.querySelectorAll(".dataTable-pagination");

        that.label = that.wrapper.querySelector(".dataTable-info");

        // Insert in to DOM tree
        that.table.parentNode.replaceChild(that.wrapper, that.table);
        that.container.appendChild(that.table);

        // Store the table dimensions
        that.rect = that.table.getBoundingClientRect();

        // Convert rows to array for processing
        that.data = [].slice.call(that.body.rows);
        that.activeRows = that.data.slice();
        that.activeHeadings = that.headings.slice();

        // Update
        that.update();

        if (!o.ajax) {
            that.setColumns();
        }

        // Fix height
        this.fixHeight();

        // Fix columns
        that.fixColumns();

        // Class names
        if (!o.header) {
            classList.add(that.wrapper, "no-header");
        }

        if (!o.footer) {
            classList.add(that.wrapper, "no-footer");
        }

        if (o.sortable) {
            classList.add(that.wrapper, "sortable");
        }

        if (o.searchable) {
            classList.add(that.wrapper, "searchable");
        }
        if (o.container) {
            classList.add(that.wrapper, "container");
        }

        if (o.fixedHeight) {
            classList.add(that.wrapper, "fixed-height");
        }

        if (o.fixedColumns) {
            classList.add(that.wrapper, "fixed-columns");
        }

        that.bindEvents();
    };

    /**
     * Render the page
     * @return {Void}
     */
    proto.renderPage = function () {
        if (this.hasRows && this.totalPages) {
            if (this.currentPage > this.totalPages) {
                this.currentPage = 1;
            }

            // Use a fragment to limit touching the DOM
            var index = this.currentPage - 1,
                frag = doc.createDocumentFragment();

            if (this.hasHeadings) {
                flush(this.header, this.isIE);

                each(this.activeHeadings, function (th) {
                    this.header.appendChild(th);
                }, this);
            }

            each(this.pages[index], function (row) {
                frag.appendChild(this.rows().render(row));
            }, this);

            this.clear(frag);

            this.onFirstPage = this.currentPage === 1;
            this.onLastPage = this.currentPage === this.lastPage;
        } else {
            this.clear();
        }

        // Update the info
        var current = 0,
            f = 0,
            t = 0,
            items;

        if (this.totalPages) {
            current = this.currentPage - 1;
            f = current * this.options.perPage;
            t = f + this.pages[current].length;
            f = f + 1;
            items = !!this.searching ? this.searchData.length : this.data.length;
        }

        if (this.label && this.options.labels.info.length) {
            // CUSTOM LABELS
            var string = this.options.labels.info
                .replace("{start}", f)
                .replace("{end}", t)
                .replace("{page}", this.currentPage)
                .replace("{pages}", this.totalPages)
                .replace("{rows}", items);

            this.label.innerHTML = items ? string : "";
        }

        if (this.currentPage == 1) {
            this.fixHeight();
        }
    };

    /**
     * Render the pager(s)
     * @return {Void}
     */
    proto.renderPager = function () {
        flush(this.pagers, this.isIE);

        if (this.totalPages > 1) {
            var c = "pager",
                frag = doc.createDocumentFragment(),
                prev = this.onFirstPage ? 1 : this.currentPage - 1,
                next = this.onlastPage ? this.totalPages : this.currentPage + 1;

            // first button
            if (this.options.firstLast) {
                frag.appendChild(button(c, 1, this.options.firstText));
            }

            // prev button
            if (this.options.nextPrev) {
                frag.appendChild(button(c, prev, this.options.prevText));
            }

            var pager = this.links;

            // truncate the links
            if (this.options.truncatePager) {
                pager = truncate(
                    this.links,
                    this.currentPage,
                    this.pages.length,
                    this.options.pagerDelta,
                    this.options.ellipsisText
                );
            }

            // active page link
            classList.add(this.links[this.currentPage - 1], "active");

            // append the links
            each(pager, function (p) {
                classList.remove(p, "active");
                frag.appendChild(p);
            });

            classList.add(this.links[this.currentPage - 1], "active");

            // next button
            if (this.options.nextPrev) {
                frag.appendChild(button(c, next, this.options.nextText));
            }

            // first button
            if (this.options.firstLast) {
                frag.appendChild(button(c, this.totalPages, this.options.lastText));
            }

            // We may have more than one pager
            each(this.pagers, function (pager) {
                pager.appendChild(frag.cloneNode(true));
            });
        }
    };

    /**
     * Render the header
     * @return {Void}
     */
    proto.renderHeader = function () {
        var that = this;
        that.labels = [];

        if (that.headings && that.headings.length) {
            each(that.headings, function (th, i) {
                that.labels[i] = th.textContent;

                if (classList.contains(th.firstElementChild, "dataTable-sorter")) {
                    th.innerHTML = th.firstElementChild.innerHTML;
                }

                th.sortable = th.getAttribute("data-sortable") !== "false";

                th.originalCellIndex = i;

                if (that.options.sortable && th.sortable) {
                    var link = createElement("a", {
                        href: "#",
                        class: "dataTable-sorter",
                        html: th.innerHTML
                    });

                    th.innerHTML = "";
                    th.setAttribute("data-sortable", "");
                    th.appendChild(link);
                }
            });
        }

        that.fixColumns();
    };

    /**
     * Bind event listeners
     * @return {[type]} [description]
     */
    proto.bindEvents = function () {
        var that = this,
            o = that.options;

        // Per page selector
        if (o.perPageSelect) {
          var selector = that.wrapper.querySelector(".dataTable-selector");
          if(selector) {
            on(selector, "change", function (e) {
              o.perPage = parseInt(this.value, 10);
              if(this.value === "All"){
                that.update();
                that.fixHeight();
                that.emit("datatable.perpage", o.perPage);
              } else {
                that.update();
                that.fixHeight();
                that.emit("datatable.perpage", o.perPage);
              }
            });
          }
        }

        // Search input
        if (o.searchable) {
            that.input = that.wrapper.querySelector(".dataTable-input");
            if (that.input) {
                on(that.input, "keyup", function (e) {
                    that.search(this.value);
                });
            }
        }

        // Pager(s) / sorting
        on(that.wrapper, "click", function (e) {
            var t = e.target;
            if (t.nodeName.toLowerCase() === "a") {
                if (t.hasAttribute("data-page")) {
                    that.page(t.getAttribute("data-page"));
                    e.preventDefault();
                } else if (
                    o.sortable &&
                    classList.contains(t, "dataTable-sorter") &&
                    t.parentNode.getAttribute("data-sortable") != "false"
                ) {
                    that.columns().sort(that.activeHeadings.indexOf(t.parentNode) + 1);
                    e.preventDefault();
                }
            }
        });
    };

    /**
     * Set up columns
     * @return {[type]} [description]
     */
    proto.setColumns = function (ajax) {

        var that = this;

        if (!ajax) {
            each(that.data, function (row) {
                each(row.cells, function (cell) {
                    cell.data = cell.innerHTML;
                });
            });
        }

        // Check for the columns option
        if (that.options.columns && that.headings.length) {

            each(that.options.columns, function (data) {

                // convert single column selection to array
                if (!isArray(data.select)) {
                    data.select = [data.select];
                }

                if (data.hasOwnProperty("render") && typeof data.render === "function") {
                    that.selectedColumns = that.selectedColumns.concat(data.select);

                    that.columnRenderers.push({
                        columns: data.select,
                        renderer: data.render
                    });
                }

                // Add the data attributes to the th elements
                each(data.select, function (column) {
                    var th = that.headings[column];
                    if (data.type) {
                        th.setAttribute("data-type", data.type);
                    }
                    if (data.format) {
                        th.setAttribute("data-format", data.format);
                    }
                    if (data.hasOwnProperty("sortable")) {
                        th.setAttribute("data-sortable", data.sortable);
                    }

                    if (data.hasOwnProperty("hidden")) {
                        if (data.hidden !== false) {
                            that.columns().hide(column);
                        }
                    }

                    if (data.hasOwnProperty("sort") && data.select.length === 1) {
                        that.columns().sort(data.select[0] + 1, data.sort, true);
                    }
                });
            });
        }

        if (that.hasRows) {
            each(that.data, function (row, i) {
                row.dataIndex = i;
                each(row.cells, function (cell) {
                    cell.data = cell.innerHTML;
                });
            });

            if (that.selectedColumns.length) {
                each(that.data, function (row) {
                    each(row.cells, function (cell, i) {
                        if (that.selectedColumns.indexOf(i) > -1) {
                            each(that.columnRenderers, function (o) {
                                if (o.columns.indexOf(i) > -1) {
                                    cell.innerHTML = o.renderer.call(that, cell.data, cell, row);
                                }
                            });
                        }
                    });
                });
            }

            that.columns().rebuild();
        }

        that.render("header");
    };

    /**
     * Destroy the instance
     * @return {void}
     */
    proto.destroy = function () {
        this.table.innerHTML = this.initialLayout;

        // Remove the className
        classList.remove(this.table, "dataTable-table");

        // Remove the containers
        this.wrapper.parentNode.replaceChild(this.table, this.wrapper);

        this.initialized = false;
    };

    /**
     * Update the instance
     * @return {Void}
     */
    proto.update = function () {
        classList.remove(this.wrapper, "dataTable-empty");

        this.paginate(this);
        this.render("page");

        this.links = [];

        var i = this.pages.length;
        while (i--) {
            var num = i + 1;
            this.links[i] = button(i === 0 ? "active" : "", num, num);
        }

        this.sorting = false;

        this.render("pager");

        this.rows().update();

        this.emit("datatable.update");
    };

    /**
     * Sort rows into pages
     * @return {Number}
     */
    proto.paginate = function () {
        var perPage = this.options.perPage,
            rows = this.activeRows;

        if (this.searching) {
            rows = [];

            each(this.searchData, function (index) {
                rows.push(this.activeRows[index]);
            }, this);
        }

        // Check for hidden columns
        this.pages = rows
            .map(function (tr, i) {
                return i % perPage === 0 ? rows.slice(i, i + perPage) : null;
            })
            .filter(function (page) {
                return page;
            });

        this.totalPages = this.lastPage = this.pages.length;

        return this.totalPages;
    };

    /**
     * Fix column widths
     * @return {Void}
     */
    proto.fixColumns = function () {

        if (this.options.fixedColumns && this.activeHeadings && this.activeHeadings.length) {

            var cells,
                hd = false;

            this.columnWidths = [];

            // If we have headings we need only set the widths on them
            // otherwise we need a temp header and the widths need applying to all cells
            if (this.table.tHead) {
                // Reset widths
                each(this.activeHeadings, function (cell) {
                    cell.style.width = "";
                }, this);

                each(this.activeHeadings, function (cell, i) {
                    var ow = cell.offsetWidth;
                    var w = ow / this.rect.width * 100;
                    cell.style.width = w + "%";
                    this.columnWidths[i] = ow;
                }, this);
            } else {
                cells = [];

                // Make temperary headings
                hd = createElement("thead");
                var r = createElement("tr");
                var c = this.table.tBodies[0].rows[0].cells;
                each(c, function () {
                    var th = createElement("th");
                    r.appendChild(th);
                    cells.push(th);
                });

                hd.appendChild(r);
                this.table.insertBefore(hd, this.body);

                var widths = [];
                each(cells, function (cell, i) {
                    var ow = cell.offsetWidth;
                    var w = ow / this.rect.width * 100;
                    widths.push(w);
                    this.columnWidths[i] = ow;
                }, this);

                each(this.data, function (row) {
                    each(row.cells, function (cell, i) {
                        if (this.columns(cell.cellIndex).visible())
                            cell.style.width = widths[i] + "%";
                    }, this);
                }, this);

                // Discard the temp header
                this.table.removeChild(hd);
            }
        }
    };

    /**
     * Fix the container height;
     * @return {Void}
     */
    proto.fixHeight = function () {
        if (this.options.fixedHeight) {
            this.container.style.height = null;
            // this.rect = this.container.getBoundingClientRect();
            var height = this.options.fixedHeight;
            this.container.style.height = height + "px";
        }
    };

    /**
     * Perform a search of the data set
     * @param  {string} query
     * @return {void}
     */
    proto.search = function (query) {
        if (!this.hasRows) return false;

        var that = this;

        query = query.toLowerCase();

        this.currentPage = 1;
        this.searching = true;
        this.searchData = [];

        if (!query.length) {
            this.searching = false;
            this.update();
            this.emit("datatable.search", query, this.searchData);
            classList.remove(this.wrapper, "search-results");
            return false;
        }

        this.clear();

        each(this.data, function (row, idx) {
            var inArray = this.searchData.indexOf(row) > -1;
            var doesQueryMatch = query.split(" ").reduce(function (bool, word) {
                var includes = false,
                    cell = null,
                    content = null;

                for (var x = 0; x < row.cells.length; x++) {
                    cell = row.cells[x];
                    content = cell.hasAttribute('data-content') ? cell.getAttribute('data-content') : cell.textContent;

                    if (
                        content.toLowerCase().indexOf(word) > -1 &&
                        that.columns(cell.cellIndex).visible()
                    ) {
                        includes = true;
                        break;
                    }
                }

                return bool && includes;
            }, true);

            if (doesQueryMatch && !inArray) {
                row.searchIndex = idx;
                this.searchData.push(idx);
            } else {
                row.searchIndex = null;
            }
        }, this);

        classList.add(this.wrapper, "search-results");

        if (!that.searchData.length) {
            classList.remove(that.wrapper, "search-results");

            that.setMessage(that.options.labels.noRows);
        } else {
            that.update();
        }

        this.emit("datatable.search", query, this.searchData);
    };

    /**
     * Change page
     * @param  {int} page
     * @return {void}
     */
    proto.page = function (page) {
        // We don't want to load the current page again.
        if (page == this.currentPage) {
            return false;
        }

        if (!isNaN(page)) {
            this.currentPage = parseInt(page, 10);
        }

        if (page > this.pages.length || page < 0) {
            return false;
        }

        this.render("page");
        this.render("pager");

        this.emit("datatable.page", page);
    };

    /**
     * Sort by column
     * @param  {int} column - The column no.
     * @param  {string} direction - asc or desc
     * @return {void}
     */
    proto.sortColumn = function (column, direction) {
        // Use columns API until sortColumn method is removed
        this.columns().sort(column, direction);
    };

    /**
     * Add new row data
     * @param {object} data
     */
    proto.insert = function (data) {

        var that = this,
            rows = [];
        if (isObject(data)) {
            if (data.headings) {
                if (!that.hasHeadings && !that.hasRows) {
                    var tr = createElement("tr"),
                        th;
                    each(data.headings, function (heading) {
                        th = createElement("th", {
                            html: heading
                        });

                        tr.appendChild(th);
                    });
                    that.head.appendChild(tr);

                    that.header = tr;
                    that.headings = [].slice.call(tr.cells);
                    that.hasHeadings = true;

                    // Re-enable sorting if it was disabled due
                    // to missing header
                    that.options.sortable = that.initialSortable;

                    // Allow sorting on new header
                    that.render("header");
                }
            }

            if (data.data && isArray(data.data)) {
                rows = data.data;
            }
        } else if (isArray(data)) {
            each(data, function (row) {
                var r = [];
                each(row, function (cell, heading) {

                    var index = that.labels.indexOf(heading);

                    if (index > -1) {
                        r[index] = cell;
                    }
                });
                rows.push(r);
            });
        }

        if (rows.length) {
            that.rows().add(rows);

            that.hasRows = true;
        }

        that.update();

        that.fixColumns();
    };

    /**
     * Refresh the instance
     * @return {void}
     */
    proto.refresh = function () {
        if (this.options.searchable) {
            this.input.value = "";
            this.searching = false;
        }
        this.currentPage = 1;
        this.onFirstPage = true;
        this.update();

        this.emit("datatable.refresh");
    };

    /**
     * Truncate the table
     * @param  {mixes} html - HTML string or HTMLElement
     * @return {void}
     */
    proto.clear = function (html) {
        if (this.body) {
            flush(this.body, this.isIE);
        }

        var parent = this.body;
        if (!this.body) {
            parent = this.table;
        }

        if (html) {
            if (typeof html === "string") {
                var frag = doc.createDocumentFragment();
                frag.innerHTML = html;
            }

            parent.appendChild(html);
        }
    };

    /**
     * Export table to various formats (csv, txt or sql)
     * @param  {Object} options User options
     * @return {Boolean}
     */
    proto.export = function (options) {
        if (!this.hasHeadings && !this.hasRows) return false;

        var headers = this.activeHeadings,
            rows = [],
            arr = [],
            i,
            x,
            str,
            link;

        var defaults = {
            download: true,
            skipColumn: [],

            // csv
            lineDelimiter: "\n",
            columnDelimiter: ",",

            // sql
            tableName: "myTable",

            // json
            replacer: null,
            space: 4
        };

        // Check for the options object
        if (!isObject(options)) {
            return false;
        }

        var o = extend(defaults, options);

        if (o.type) {
            if (o.type === "txt" || o.type === "csv") {
                // Include headings
                rows[0] = this.header;
            }

            // Selection or whole table
            if (o.selection) {
                // Page number
                if (!isNaN(o.selection)) {
                    rows = rows.concat(this.pages[o.selection - 1]);
                } else if (isArray(o.selection)) {
                    // Array of page numbers
                    for (i = 0; i < o.selection.length; i++) {
                        rows = rows.concat(this.pages[o.selection[i] - 1]);
                    }
                }
            } else {
                rows = rows.concat(this.activeRows);
            }

            // Only proceed if we have data
            if (rows.length) {
                if (o.type === "txt" || o.type === "csv") {
                    str = "";

                    for (i = 0; i < rows.length; i++) {
                        for (x = 0; x < rows[i].cells.length; x++) {
                            // Check for column skip and visibility
                            if (
                                o.skipColumn.indexOf(headers[x].originalCellIndex) < 0 &&
                                this.columns(headers[x].originalCellIndex).visible()
                            ) {
                                var text = rows[i].cells[x].textContent;
                                text = text.trim();
                                text = text.replace(/\s{2,}/g, ' ');
                                text = text.replace(/\n/g, '  ');
                                text = text.replace(/"/g, '""');
                                if (text.indexOf(",") > -1)
                                    text = '"' + text + '"';


                                str += text + o.columnDelimiter;
                            }
                        }
                        // Remove trailing column delimiter
                        str = str.trim().substring(0, str.length - 1);

                        // Apply line delimiter
                        str += o.lineDelimiter;
                    }

                    // Remove trailing line delimiter
                    str = str.trim().substring(0, str.length - 1);

                    if (o.download) {
                        str = "data:text/csv;charset=utf-8," + str;
                    }
                } else if (o.type === "sql") {
                    // Begin INSERT statement
                    str = "INSERT INTO `" + o.tableName + "` (";

                    // Convert table headings to column names
                    for (i = 0; i < headers.length; i++) {
                        // Check for column skip and column visibility
                        if (
                            o.skipColumn.indexOf(headers[i].originalCellIndex) < 0 &&
                            this.columns(headers[i].originalCellIndex).visible()
                        ) {
                            str += "`" + headers[i].textContent + "`,";
                        }
                    }

                    // Remove trailing comma
                    str = str.trim().substring(0, str.length - 1);

                    // Begin VALUES
                    str += ") VALUES ";

                    // Iterate rows and convert cell data to column values
                    for (i = 0; i < rows.length; i++) {
                        str += "(";

                        for (x = 0; x < rows[i].cells.length; x++) {
                            // Check for column skip and column visibility
                            if (
                                o.skipColumn.indexOf(headers[x].originalCellIndex) < 0 &&
                                this.columns(headers[x].originalCellIndex).visible()
                            ) {
                                str += '"' + rows[i].cells[x].textContent + '",';
                            }
                        }

                        // Remove trailing comma
                        str = str.trim().substring(0, str.length - 1);

                        // end VALUES
                        str += "),";
                    }

                    // Remove trailing comma
                    str = str.trim().substring(0, str.length - 1);

                    // Add trailing colon
                    str += ";";

                    if (o.download) {
                        str = "data:application/sql;charset=utf-8," + str;
                    }
                } else if (o.type === "json") {
                    // Iterate rows
                    for (x = 0; x < rows.length; x++) {
                        arr[x] = arr[x] || {};
                        // Iterate columns
                        for (i = 0; i < headers.length; i++) {
                            // Check for column skip and column visibility
                            if (
                                o.skipColumn.indexOf(headers[i].originalCellIndex) < 0 &&
                                this.columns(headers[i].originalCellIndex).visible()
                            ) {
                                arr[x][headers[i].textContent] = rows[x].cells[i].textContent;
                            }
                        }
                    }

                    // Convert the array of objects to JSON string
                    str = JSON.stringify(arr, o.replacer, o.space);

                    if (o.download) {
                        str = "data:application/json;charset=utf-8," + str;
                    }
                }

                // Download
                if (o.download) {
                    // Filename
                    o.filename = o.filename || "datatable_export";
                    o.filename += "." + o.type;

                    str = encodeURI(str);

                    // Create a link to trigger the download
                    link = document.createElement("a");
                    link.href = str;
                    link.download = o.filename;

                    // Append the link
                    body.appendChild(link);

                    // Trigger the download
                    link.click();

                    // Remove the link
                    body.removeChild(link);
                }

                return str;
            }
        }

        return false;
    };

    /**
     * Import data to the table
     * @param  {Object} options User options
     * @return {Boolean}
     */
    proto.import = function (options) {
        var obj = false;
        var defaults = {
            // csv
            lineDelimiter: "\n",
            columnDelimiter: ","
        };

        // Check for the options object
        if (!isObject(options)) {
            return false;
        }

        options = extend(defaults, options);

        if (options.data.length || isObject(options.data)) {
            // Import CSV
            if (options.type === "csv") {
                obj = {
                    data: []
                };

                // Split the string into rows
                var rows = options.data.split(options.lineDelimiter);

                if (rows.length) {

                    if (options.headings) {
                        obj.headings = rows[0].split(options.columnDelimiter);

                        rows.shift();
                    }

                    each(rows, function (row, i) {
                        obj.data[i] = [];

                        // Split the rows into values
                        var values = row.split(options.columnDelimiter);

                        if (values.length) {
                            each(values, function (value) {
                                obj.data[i].push(value);
                            });
                        }
                    });
                }
            } else if (options.type === "json") {
                var json = isJson(options.data);

                // Valid JSON string
                if (json) {
                    obj = {
                        headings: [],
                        data: []
                    };

                    each(json, function (data, i) {
                        obj.data[i] = [];
                        each(data, function (value, column) {
                            if (obj.headings.indexOf(column) < 0) {
                                obj.headings.push(column);
                            }

                            obj.data[i].push(value);
                        });
                    });
                } else {
                    console.warn("That's not valid JSON!");
                }
            }

            if (isObject(options.data)) {
                obj = options.data;
            }

            if (obj) {
                // Add the rows
                this.insert(obj);
            }
        }

        return false;
    };
    /**
     * Print the table
     * @return {void}
     */
    proto.print = function () {
        var headings = this.activeHeadings;
        var rows = this.activeRows;
        var table = createElement("table");
        var thead = createElement("thead");
        var tbody = createElement("tbody");

        var tr = createElement("tr");
        each(headings, function (th) {
            tr.appendChild(
                createElement("th", {
                    html: th.textContent
                })
            );
        });

        thead.appendChild(tr);

        each(rows, function (row) {
            var tr = createElement("tr");
            each(row.cells, function (cell) {
                tr.appendChild(
                    createElement("td", {
                        html: cell.textContent
                    })
                );
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);

        // Open new window
        var w = win.open();

        // Append the table to the body
        w.document.body.appendChild(table);

        // Print
        w.print();
    };

    /**
     * Show a message in the table
     * @param {string} message
     */
    proto.setMessage = function (message) {
        var colspan = 1;

        if (this.hasRows) {
            colspan = this.data[0].cells.length;
        }

        classList.add(this.wrapper, "dataTable-empty");

        this.clear(
            createElement("tr", {
                html: '<td class="dataTables-empty" colspan="' +
                    colspan +
                    '">' +
                    message +
                    "</td>"
            })
        );
    };

    /**
     * Columns API access
     * @return {Object} new Columns instance
     */
    proto.columns = function (columns) {
        return new Columns(this, columns);
    };

    /**
     * Rows API access
     * @return {Object} new Rows instance
     */
    proto.rows = function (rows) {
        return new Rows(this, rows);
    };

    /**
     * Add custom event listener
     * @param  {String} event
     * @param  {Function} callback
     * @return {Void}
     */
    proto.on = function (event, callback) {
        this.events = this.events || {};
        this.events[event] = this.events[event] || [];
        this.events[event].push(callback);
    };

    /**
     * Remove custom event listener
     * @param  {String} event
     * @param  {Function} callback
     * @return {Void}
     */
    proto.off = function (event, callback) {
        this.events = this.events || {};
        if (event in this.events === false) return;
        this.events[event].splice(this.events[event].indexOf(callback), 1);
    };

    /**
     * Fire custom event
     * @param  {String} event
     * @return {Void}
     */
    proto.emit = function (event) {
        this.events = this.events || {};
        if (event in this.events === false) return;
        for (var i = 0; i < this.events[event].length; i++) {
            this.events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return DataTable;

});


/*---------------------------------------------
Declare table
---------------------------------------------*/
    var json = window['datatable'];
    var options = json.options;

    var datatable = new DataTable('.a__table', {
        data: window['datatable'],
        container: true,
        padded: options.padded,
        striped: options.striped,
        responsive: options.responsive,
        fixedHeaer: options.fixedheader,
        perPage: options.page_length,
        perPageSelect: [10, 15, 25, 50, 100, "All"],
        searchable: options.searching,
        sortable: true,
        sorting: true,
        csv: options.export_excel,
        pdf: options.export_pdf,
        print: options.export_print,

        // Pagination
        nextPrev: true,
        firstLast: false,
        prevText: "&lsaquo;",
        nextText: "&rsaquo;",
        firstText: "&laquo;",
        lastText: "&raquo;",
        ellipsisText: "&hellip;",
        ascText: "▴",
        descText: "▾",
        truncatePager: true,
        pagerDelta: 2,

        // fixedColumns: false,
        fixedHeight: "",
        header: true,
        footer: false,

        // Customise the display text
        labels: {
            placeholder: "Icon Here", // The search input placeholder
            perPage: "Show {select} Entries", // per-page dropdown label
            noRows: "No entries found", // Message shown when there are no search results
            info: "Showing {start} to {end} of {rows} entries" //
        },

        // Customise the action row and footer layout
        layout: {
            top: "<div class='a__top-left'>{search}{select}</div><div class='a__top-left'>{button_container}{export}</div>",
            bottom: "{info}{pager}"
        }
    });


/*---------------------------------------------
Tooltip
---------------------------------------------*/
$('.a__inline_input').tooltip();

/*---------------------------------------------
Export Options
---------------------------------------------*/
document.querySelectorAll(".export").forEach(function(el) {
    el.addEventListener("click", function(e) {
        var type = el.dataset.type;

        var data = {
            type: type,
            filename: "addapptation-export-" + type,
        };

        if ( type === "csv" ) {
            data.columnDelimiter = ",";
        }

        datatable.export(data);
    });
});

/*---------------------------------------------
Edit Icon
---------------------------------------------*/
  function inputEdit(btn){
    btn.classList.add("active");
    btn.previousElementSibling.focus();
    var input = btn.previousElementSibling;
    input.classList.add("a__editable_shown");
    input.addEventListener("focusout", function(){
        btn.classList.remove("active");
        input.classList.remove("a__editable_shown");
    });
  };

/*---------------------------------------------
Date Edit
---------------------------------------------*/
var input = document.getElementsByClassName('a__date_selector');
for (i = 0; i < input.length; i++) {
    var cal = input[i];
    var date = input[i].value;
    var datepicker = new TheDatepicker.Datepicker(cal);
    datepicker.options.setInputFormat("n/j/Y");
    datepicker.options.setInitialDate(date);
    datepicker.options.setShowDeselectButton(false);
    datepicker.options.setShowCloseButton();
    datepicker.render();
}
var elements = document.getElementsByClassName("a__calendar_btn");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    this.nextSibling.focus();
  });
}

/*---------------------------------------------
Picklist
---------------------------------------------*/
  var x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

/*---------------------------------------------
Mobile first tr selector
---------------------------------------------*/
function mobileDrop(val){
    val.classList.toggle('active');
}

var firstTd = document.getElementsByClassName('mobileDropdown');
for (i = 0; i < firstTd.length; i++) {
    firstTd[i].addEventListener("click", function() {
        var el = this.nextSibling;
        while (el) {
            el.classList.toggle('active');
            el = el.nextSibling;
          }

    })
}


/*---------------------------------------------
SEARCH EVENT LISTENER
---------------------------------------------*/
  var dt_search = document.querySelectorAll('.search-container .dataTable-input');
  // console.log(dt_search.length)
  for (i = 0; i < dt_search.length; i++){
    var search_input = dt_search[i];
    search_input.addEventListener('focus', function(){
      var search = this;
      search.parentNode.classList.add('active');
      setTimeout(function(){
        search.classList.add('active');
      }, 300);
    });
    search_input.addEventListener('focusout', function(){
      var search = this;
      var val = this.value;
      if(val.length == 0){
        search.parentNode.classList.remove('active');
        setTimeout(function(){
          search.classList.remove('active');
        }, 300);
      }
    });
  }
