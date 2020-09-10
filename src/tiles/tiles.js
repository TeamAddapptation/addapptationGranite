function granite_tiles(jsonTiles, jsonTheme){
    /*---------------------------------------------
    Theme Case Block
    ---------------------------------------------*/
    var heroCss = document.createElement('style');
    heroCss.innerHTML = `
    ${cssID}.g__hero_wrapper{
        --primary: 212, 70, 151;
        --background: #ffffff;
        --bottom-background: #ffffff;
        --font-color: #101010;
        --header-color: #101010;
        --description-color: #101010;
        --overlay: #ffffff;
        --border-color: #bfbfbf;
        --font-hairline: hero-new-hairline, sans-serif;
        --font-regular: hero-new, sans-serif;
        --font-bold: hero-new, sans-serif;
    }`
    document.head.appendChild(heroCss);

    /* Hero Wrapper */
    const hero_wrapper = document.createElement('div');
    hero_wrapper.setAttribute('id', "granite-123");
    hero_wrapper.setAttribute('class','g__hero_wrapper');

    /* Hero Header */
    const hero_header = document.createElement('h2');
        hero_header.setAttribute('class','g__hero_header');
        hero_header.innerHTML = "Granite Test";
        hero_wrapper.appendChild(hero_header);

    /* Append to the DOM */
    document.getElementById("granite-123").appendChild(hero_wrapper);
}