function granite_forms(formsBlock, jsonTheme){
    const id = formsBlock.id;
    const o = formsBlock.options;
    const r = formsBlock.records;
    const t = jsonTheme;
    const cssId = "#" + id;
    // micro settings attributes
    const attr__action = o.addapptation_action || "";
    const attr__form_id = o.form_id || "";
    const attr__method = o.method || "POST";

    /* -------------------- Fonts ----------------------*/
    const font_include = document.getElementById('g__font_stylesheet');
    if (!font_include){
        var head = document.head;
        var fontLink = document.createElement("link");
        fontLink.type = "text/css";
        fontLink.rel = "stylesheet";
        fontLink.id = "g__font_stylesheet";
        fontLink.href = "https://use.typekit.net/ihq4dbs.css";
        head.appendChild(fontLink);
    }

    /* -------------------- CSS ----------------------*/
    let primary = t.primary || "#D44697";

    let formStyles = document.createElement('style');
    formStyles.innerHTML = `
    /* ------------------------ Global Styles ------------------------*/
    ${cssId}{
        /* Standard */
        --primary: ${primary};
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
        --border-radius: 2px;
        --field-padding: 0.375rem 0.75rem;

        /* Mode Dependent */
        --background: #ffffff;
        --background-reverse: #000000;
        --font-color-reverse: #ffffff;
        --border: 1px solid #5d5d5d;
        --font-color: #5d5d5d;

        /* css */
        padding: 50px;
    }
    ${cssId}[mode="midnight"]{
        --background: rgba(255, 255, 255, 0.15);
        --border: 1px solid #ffffff;
        --font-color: #ffffff;
    }
    /* ------------------------ Global Field Styles ------------------------*/
    ${cssId} .g__form_group{
        display: flex;
        flex-direction: row;

    }
    ${cssId} .g__form_field{
        position: relative;
        font-family: var(--font-regular);
        font-weight: 300;
        display: flex;
        flex-direction: column;
        margin: 15px;
        flex: 1;
    }
    ${cssId} .g__form_field label{
        color: var(--font-color);
    }
    ${cssId} .g__form_field input{
        background: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
        color: var(--font-color);
        font-size: 1rem;
        padding: 0.375rem 0.75rem;

    }
    ${cssId} .g__form_field input:invalid {
        border-color: red;
      }
    ${cssId} button{
        cursor: pointer;
    }
    ${cssId} #g__submit_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: var(--primary);
        padding: 10px 50px;
        color: #ffffff;
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
    }
    ${cssId} #g__cancel_btn{
        display: inline-flex;
        font-family: var(--font-regular);
        font-weight: 300;
        background: #5d5d5d;
        padding: 10px 50px;
        color: #ffffff;
        border: 0;
        border-radius: var(--border-radius);
        margin: 15px;
    }
    /* ------------------------ Picklist ------------------------------*/
    ${cssId} .g__field_range{
        -webkit-appearance: none;
    }
    ${cssId} .g__form_field input.g__field_range{
        width: 100%;
        padding: 0;
        height: 9px;
        background-color: var(--background);
        border: 0;
        border-radius: 5px;
    }
    ${cssId} .g__field_range::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 15px;
        cursor: pointer;
    }
    ${cssId} .g__field_range::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 15px;
        cursor: pointer;
    }
    /* ------------------------ File ------------------------------*/
    ::-webkit-file-upload-button{
        background: var(--background);
        position: abosolute;
        top: 0;
        right: 0;
        border: 0;
    }
    /* ------------------------ Picklist ------------------------------*/
    ${cssId} .g__picklist {
    position: relative;
    }
    ${cssId} .g__picklist select {
    display: none; /*hide original SELECT element: */
    }
    ${cssId} .g__picklist{
        background-color: var(--background);
        border: var(--border);
        border-radius: var(--border-radius);
    }
    /* Style the arrow inside the select element: */
    ${cssId} .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
    }
    /* Point the arrow upwards when the select box is open (active): */
    ${cssId} .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
    }
    /* style the items (options), including the selected item: */
    ${cssId} .select-items div,.select-selected {
    color: #ffffff;
    padding: var(--field-padding);
    cursor: pointer;
    }
    /* Style items (options): */
    ${cssId} .select-items {
    position: absolute;
    background: #101010;
    border: var(--border);
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
    }
    /* Hide the items when the select box is closed: */
    ${cssId} .select-hide {
    display: none;
    }
    ${cssId} .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
    }
    `
    document.head.appendChild(formStyles);

    /* -------------------- Mode ----------------------*/
    var g__container = document.getElementById(id);
    g__container.setAttribute('mode', t.mode);

    /* -------------------- Form Container ----------------------*/
    const form_container = document.createElement('form');
    // conditional attributes
    !!attr__action ? form_container.setAttribute('action', attr__action) : "";
    !!attr__form_id ? form_container.setAttribute('id', attr__form_id) : "";
    // static attributes
    form_container.setAttribute('method', attr__method)

    /* -------------------- Standard Field Attributes ----------------------*/
    function basicAttributes(r, input, class_name){
        !!r.type  ? input.setAttribute('type', r.type) : "";
        !!r.id    ? input.setAttribute('id', r.id) : "";
        !!r.name  ? input.setAttribute('name', r.name) : "";
        !!r.value ? input.setAttribute('value', r.value) : "";
        input.setAttribute('class', class_name);
        input.required = r.required;
        input.disabled = r.disabled;
        return input
    }
    function hiddenFields(hidden, name, value){
        hidden.setAttribute('type', 'hidden');
        hidden.setAttribute('form_id', attr__form_id);
        hidden.setAttribute('name', name);
        hidden.setAttribute('value', value);
        return hidden
    }
    /* -------------------- Form Fields (Record Loop) ----------------------*/
    let inline_field = false;
    let inline_group = [];
    r.forEach(function(r, num){
        let class_name = "g__field_" + r.type;
        inline_field = r.inline || false;

        //Create rows
        let form_field = document.createElement('div');
        form_field.setAttribute('class', "g__form_field");

        //Global labels
        let label = document.createElement('label');
        label.setAttribute('for', r.name);
        label.innerText = r.title;
        form_field.appendChild(label);

        //build each field depending on the type
        let input;
        switch (r.type){
            case "file":
                input = document.createElement('input');
                basicAttributes(r, input, class_name)
                form_field.appendChild(input);
            break;
            case "textarea":
            case "picklist":
                const picklist_options = r.options;
                input = document.createElement('div');
                basicAttributes(r, input, class_name)
                input.setAttribute('class', 'g__picklist')
                let select = document.createElement('select');
                for(let i = 0; i < picklist_options.length; i++){
                    let option = document.createElement('option');
                    option.setAttribute('value', picklist_options[i][0])
                    option.innerHTML = picklist_options[i][1];
                    select.appendChild(option);
                }
                input.appendChild(select);
                form_field.appendChild(input);
            break;
            case "range":
                let min = r.min || 0;
                let max = r.max || 100;
                input = document.createElement('input');
                basicAttributes(r, input, class_name)
                input.setAttribute('min', min);
                input.setAttribute('max', max);
                form_field.appendChild(input);
            break;
            default:
                input = document.createElement('input');
                basicAttributes(r, input, class_name)
                form_field.appendChild(input);
        }

        // append field to form
        if(inline_field){
            inline_group.push(form_field);
        }else{
            if(inline_group.length > 0){
                let form_group = document.createElement('div');
                form_group.setAttribute('class', "g__form_group");
                inline_group.map(function(val, num){
                    form_group.appendChild(val);
                })
                form_container.appendChild(form_group);
                inline_group = [];
                form_container.appendChild(form_field);
            }else{
                form_container.appendChild(form_field);
            }
        }

    });
    // Hidden Fields
    if(!!o.db_id){
        hidden = document.createElement('input');
        hiddenFields(hidden, "id", o.db_id)
        form_container.appendChild(hidden);
    }

    // Submit & Cancel Button
    if(!!o.submit_label){
        let submit = document.createElement('button');
        submit.setAttribute('id', 'g__submit_btn');
        submit.setAttribute('type', 'submit');
        submit.innerText = o.submit_label;
        form_container.appendChild(submit);
    }
    if(!!o.cancel_label){
        let cancel = document.createElement('button');
        cancel.setAttribute('id', 'g__cancel_btn');
        cancel.setAttribute('type', 'reset');
        cancel.innerText = o.cancel_label;
        form_container.appendChild(cancel);
    }
    // append the form to the page
    document.getElementById(id).appendChild(form_container);

    /* -------------------- Submit and Reset ----------------------*/
    const init = function(){
        document.getElementById('g__cancel_btn').addEventListener('click', reset);
        document.getElementById('g__submit_btn').addEventListener('click', send);
    }
    // programmatically reset the form and anything else we may want to do
    const reset = function(ev){
        ev.preventDefault();
        document.getElementById(attr__form_id).reset();
    }
    const send = function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        //or the click will travel to the form and the form will submit
        // let fails = validate();
        //IF we wanted to do some async things then use a Promise with .then and .catch
        if(fails.length === 0){
            //good to go
            document.getElementById(attr__form_id).submit();
        }else{
            //there are some errors to display
            //bad user
            //let err = document.querySelector('.error');
            //let input = err.querySelector('input');
            //err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
            fails.forEach(function(obj){
                let field = document.getElementById(obj.input);
                field.parentElement.classList.add('error');
                field.parentElement.setAttribute('data-errormsg', obj.msg);
            })
        }
    }
    const validate = function(ev){
        //let valid = true;
        let failures = [];
        //checkbox (or radio buttons grouped by name)
        let chk = document.getElementById('input-alive');
        // .checked .value
        if(!chk.checked){
            //valid = false;
            //chk.parentElement.classList.add('error');
            //chk.parentElement.setAttribute('data-errormsg', 'Must be alive to submit.');
            failures.push({input: 'input-alive', msg: 'Must be alive to submit.'})
        }

        //select
        let select = document.getElementById('input-age');
        // .selectedIndex  .options  .length   .selectedValue  .value
        if( select.selectedIndex === 0 ){
            failures.push({input:'input-age', msg:'Too young'})
        }

        //inputs for text, email, tel, color, number...
        let first = document.getElementById('input-first');
        let password = document.getElementById('input-password');
        let email = document.getElementById('input-email');
        //.value, .defaultValue, length of value
        if( first.value === ""){
            failures.push({input:'input-first', msg:'Required Field'})
        }
        if( password.value === "" || password.value.length < 8){
            failures.push({input:'input-password', msg:'Must be at least 8 chars'})
        }
        if( email.value === ""){
            failures.push({input:'input-email', msg:'Required Field'})
        }

        //return a boolean || an object with details about the failures
        return failures;
    }
    /* -------------------- Custom Select Field ----------------------*/
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "g__picklist": */
    x = document.getElementsByClassName("g__picklist");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
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
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }

    function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
}