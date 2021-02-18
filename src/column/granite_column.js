function granite_column(jsonBlock, jsonTheme) {
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const hide_row = !!o.hide_row ? o.hide_row : "";

  const padding = o.padding || "15px";
  const margin = o.margin || "15px";

  const bkg_img = o.bkg_img || "image/url.jpg";
  const bkg_size = o.bkg_size || "";
  const bkg_repeat = o.bkg_repeat || "";
  const bkg_position = o.bkg_position || "";

  const bkg_color = o.bkg_color || "transparent";

  // Column Container
  let column = document.createElement("div");
  column.style.padding = padding;
  column.style.margin = margin;
  !!bkg_img ? (column.style.backgroundImage = bkg_img) : "";
  column.style.backgroundColor = bkg_color;
  column.setAttribute("class", "g__column");

  console.log(column);
}
