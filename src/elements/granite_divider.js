function granite_divider(jsonDivider, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonDivider.id;
  const o = jsonDivider.options;
  const r = jsonDivider.records;
  const t = jsonTheme;
  const mode = t.mode || "midight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  console.log(cssId);
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/
  //text
  let dvdr_text = o.dvdr_text || "";
  let text_color = o.text_color || "#ffffff";
  let font_style = o.font_style || "hero-new, sans-serif";
  let font_weight = o.font_weight || "300";
  let font_size = o.font_size || "24px";
  //style
  let dvdr_class = o.dvdr_class || "g__elm_divider";
  let background_color = o.background_color || "#ffffff";
  let dvdr_margin_top = o.dvdr_margin_top || "45px";
  let dvdr_margin_bottom = o.dvdr_margin_bottom || "45px";
  let border_radius = o.border_radius || "0px";
  //layout
  let dvdr_width = o.dvdr_width || "90%";
  let dvdr_height = o.dvdr_height || "5px";
  /*---------------------------------------------
  CSS Block
  ---------------------------------------------*/
  var dvdrCss = document.createElement("style");
  dvdrCss.innerHTML = `
  ${cssId}{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  /* -- Spacer -- */
  ${cssId} .g__elm_spacer{
      width: 100%;
      background-color: transparent;
      border: none;
      margin-top: 5px;
      margin-bottom: 5px;
      height: ${dvdr_height};
  }
  /* -- Standard Divider -- */
  ${cssId} .g__elm_divider{
      width: ${dvdr_width};
      height: ${dvdr_height};
      margin-top: ${dvdr_margin_top};
      margin-bottom: ${dvdr_margin_bottom};
      background-color: ${background_color};
      border-radius: ${border_radius};
  }
  /* -- Faded Edge Divider -- */
  ${cssId} .g__elm_fade_divider {
      width: ${dvdr_width};
      height: ${dvdr_height};
      margin-top: ${dvdr_margin_top};
      margin-bottom: ${dvdr_margin_bottom};
      background-image: linear-gradient(to right, rgba(240,240,240,0), ${background_color} 40%, ${background_color} 60%, rgba(240,240,240,0));
      border-radius: 50%;
  }
  /* -- Faded Edge Divider With Text -- */
  ${cssId} .g__elm_txt_divider {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      margin-top: ${dvdr_margin_top};
      margin-bottom: ${dvdr_margin_bottom};
      color: ${text_color};
      font-weight: ${font_weight};
      font-style: ${font_style};
      font-size: ${font_size};
  }
  ${cssId} .g__elm_txt_divider:before, ${cssId} .g__elm_txt_divider:after{
      content: '';
      display: block;
      height: ${dvdr_height};
      min-width: 30vw;
  }
  ${cssId} .g__elm_txt_divider:before{
      background: linear-gradient(to right, rgba(240,240,240,0), #fff);
      margin-right: 4vh;
  }
  ${cssId} .g__elm_txt_divider:after{
      background: linear-gradient(to left, rgba(240,240,240,0), #fff);
      margin-left: 4vh;
  }
  `;
  document.head.appendChild(dvdrCss);
  /*---------------------------------------------
  Wrapper and Element
  ---------------------------------------------*/
  const dvdr = document.createElement("div");
  dvdr.setAttribute("class", dvdr_class);
  if (dvdr_class == "g__elm_txt_divider") {
    dvdr.innerHTML = dvdr_text;
  }
  /*---------------------------------------------
  Append micro to the DOM
  ---------------------------------------------*/
  granite_div.appendChild(dvdr);
}
