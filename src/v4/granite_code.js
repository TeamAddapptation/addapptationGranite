function granite_code(jsonBlock, jsonTheme) {
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const granite_div = document.getElementById(id);
  let code_div = document.createElement("div");
  code_div.innerHTML = o.code;
  granite_div.appendChild(code_div);
}
