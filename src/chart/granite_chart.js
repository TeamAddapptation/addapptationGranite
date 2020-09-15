function granite_chart(chartBlock, jsonTheme){
    const id = chartBlock.id;
    const cssId = "#" + chartBlock.id;
    const o = chartBlock.options;
    const r = chartBlock.records;
    const t = jsonTheme

    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var chartCss = document.createElement('style');
    chartCss.innerHTML = `
    html, body, ${cssId} {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    `
    document.head.appendChild(chartCss);

    anychart.onDocumentLoad(function () {

        // create an instance of a pie chart
        var chart = anychart.line();
        // assign color palette
        chart.palette(o.palette);
        // set the data
        chart.data(r);
        // set chart title
        chart.title(o.title);
        // set the container element
        chart.container(id);
        // initiate chart display
        chart.draw();
      });


};