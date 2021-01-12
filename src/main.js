// let editable_arr = document.querySelectorAll('[data-section]');
// editable_arr.forEach((field) => {
//     field.addEventListener('click', () => {
//         let selected_field = field.getAttribute('data-section');
//         let selected_section = document.getElementById(selected_field);
//         let selected_content = selected_section.nextSibling;
//         selected_section.classList.add('active');
//         if (selected_content.style.maxHeight) {
//             selected_content.style.maxHeight = null;
//           } else {
//             selected_content.style.maxHeight = selected_content.scrollHeight + "px";
//         }
//     });
// });
let editable_arr = document.querySelectorAll('[data-section]');
editable_arr.forEach((field) => {
    field.addEventListener('click', () => {
        let selected_field = field.getAttribute('data-section');
        const searchParams = window.location.search;
        const params = new URLSearchParams(searchParams)
        window.history.pushState(null, null, `?form_section=${selected_field}`);
    });
});