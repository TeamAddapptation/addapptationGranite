function granite_column(jsonColumns, jsonTheme){
    const id = jsonColumns.id;
    const o = jsonColumns.options;
    const column_type = "-" + (!!o.type ? o.type : "md");
    const column_width = "-" + (!!o.width ? o.width :"");
    const offset_type = !!o.offset_type ? o.offset_type : "";
    const offset_width = !!o.offset_width ? o.offset_width : "";
    const hide_row = !!o.hide_row ? o.hide_row : "";
    const end_of_row = !!o.end_of_row ? o.end_of_row : false;
    column_present = false;

    // Column Container
    let container;
    if (!column_present){
        container = '<div class="container-fluid">';
        container += '<div class="row">';
        container += '<div class="col' + column_type + column_width + '">';
    } else {
        container = '</div>';
        container += '<div class="col' + column_type + column_width + '">';
    }
    if (end_of_row){
        container = '</div></div></div>'
    }
    var dom_nodes = $(container);
    console.log(dom_nodes);
    document.getElementById(id).outerHTML += container;
}