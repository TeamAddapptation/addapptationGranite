function granite_table(tableBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = tableBlock.id;
  const o = tableBlock.options;
  const r = tableBlock.records;
  const t = jsonTheme;
  const cssId = "#" + id;
  /* -------------------- Table Container ----------------------*/

  const table_container = document.createElement('div');
  table_container.setAttribute('class', 'g__table_container');
  /* -------------------- Table element ----------------------*/

  const table = document.createElement('table');
  table.setAttribute('class', 'g__table');
  table_container.appendChild(table); // Build the table header

  const columns = r[0].columns;
  const thead = document.createElement('th');
  const tr = document.createElement('tr');
  columns.forEach(col => {
    const td = document.createElement('th');
    td.innerHTML = col;
    tr.appendChild(td);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  console.log(table_container);

  if (r.length) {}

  document.getElementById(id).appendChild(table_container);
}