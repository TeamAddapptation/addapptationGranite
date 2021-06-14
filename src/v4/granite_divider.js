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
  /*---------------------------------------------
  Set The mode
  ---------------------------------------------*/
  granite_div.setAttribute("mode", mode);
  /*---------------------------------------------
  Default Attributes
  ---------------------------------------------*/
  !!o.background_color ? "" : (o.background_color = "#5d5d5d");
  !!o.dvdr_height ? "" : (o.dvdr_height = "2");
  !!o.dvdr_width ? "" : (o.dvdr_width = "90");
  !!o.dvdr_padding_top ? "" : (o.dvdr_padding_top = "25");
  !!o.dvdr_padding_bottom ? "" : (o.dvdr_padding_bottom = "25");
  //style
  let background_color = o.background_color;
  let dvdr_padding_top = o.dvdr_padding_top + "px";
  let dvdr_padding_bottom = o.dvdr_padding_bottom + "px";
  //layout
  let dvdr_width = o.dvdr_width + "%";
  let dvdr_height = o.dvdr_height + "px";
  /*---------------------------------------------
  CSS Block
  ---------------------------------------------*/
  let dvdrCss = document.createElement("style");
  dvdrCss.id = "g__css_" + id;
  dvdrCss.innerHTML = `
  ${cssId}{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: ${dvdr_padding_top};
      padding-bottom: ${dvdr_padding_bottom};
  }
  /* -- Standard Divider -- */
  ${cssId} .g__elm_divider{
      width: ${dvdr_width};
      height: ${dvdr_height};
      background-color: ${background_color};
  }
  `;

  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(dvdrCss);
  /*---------------------------------------------
  Wrapper and Element
  ---------------------------------------------*/
  let dvdr = document.createElement("div");
  !!o.divider_id ? (dvdr.id = divider_id) : "";
  dvdr.setAttribute("data-micro-id", id);
  dvdr.classList.add("g__elm_divider");
  !!o.divider_classes ? button.classList.add(divider_classes) : "";
  /*---------------------------------------------
  Append micro to the DOM
  ---------------------------------------------*/
  granite_div.appendChild(dvdr);
}
