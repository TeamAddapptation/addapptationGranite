function granite_data_visualization(dataVisualizationBlock, jsonTheme){
    const id = dataVisualizationBlock.id;
    const cssId = "#" + dataVisualizationBlock.id;
    const o = dataVisualizationBlock.options;
    const r = dataVisualizationBlock.records;
    const t = jsonTheme
    /*---------------------------------------------
    Add Font Family To Header
    ---------------------------------------------*/
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
    /*---------------------------------------------
    AnyChart Script
    ---------------------------------------------*/
    var anyChartScript = document.createElement('script');
    anyChartScript.type = 'text/javascript';
    anyChartScript.id = "granite-anychart"
    anyChartScript.src = 'https://cdn.anychart.com/releases/8.7.1/js/anychart-base.min.js';
    document.head.appendChild(anyChartScript);
    const anychart_include = document.getElementById('granite-anychart');
    console.log(anychart_include);

    /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
    var dataVisualization = document.createElement('style');

    dataVisualization.innerHTML = `
    html, body, ${cssId} {
        width: 100%;
        height: 100%;
    }
    ${cssId} {
      height: 600px;
      width: auto;
  }
    `
    document.head.appendChild(dataVisualization);

    const LISTENER_DOUBLE_CLICK = "double_click";
    const LISTENER_POINT_SELECT = "point_select";
    const CHART_TYPE_LINE = "line";
    const CHART_TYPE_BAR = "bar";
    const CHART_TYPE_PIE = "pie";
    const CHART_TYPE_DRILLDOWN = "drilldown";
    const CHART_TYPE_VERTICAL_BAR = "vertical";
    const CHART_TYPE_COLUMN = "column";
    const CHART_TYPE_PYRAMID = "pyramid"

    let attr__container_id = id || '';
    let attr__records = dataVisualizationBlock.records || [];
    let attr__title = dataVisualizationBlock.options.title || '';
    let attr__title_color = dataVisualizationBlock.options.title_color || '#212529';
    let attr__title2 = dataVisualizationBlock.options.title2 || '';                       // used with drilldown chart
    let attr__title2_color = dataVisualizationBlock.options.title2_color || '#212529';    // used with drilldown chart
    let attr__label = dataVisualizationBlock.options.label || '';
    let attr__label_color = dataVisualizationBlock.options.label_color || '#60727b';
    let attr__inner_radius = dataVisualizationBlock.options.inner_radius || '';
    let attr__label_position = dataVisualizationBlock.options.label_position || 'outside';
    let attr__listener = dataVisualizationBlock.options.listener || '';
    let attr__chart_type = dataVisualizationBlock.options.chart_type || 'pie';
    let attr__bar_chart_vertical = dataVisualizationBlock.options.bar_chart_vertical || false;
    let attr__drilldown_chart_types = dataVisualizationBlock.options.drilldown_chart_types || []; // used with drilldown chart
    let attr__drilldown_details_field_name = dataVisualizationBlock.options.drilldown_details_field_name || "total";
    let attr__enable_legend = dataVisualizationBlock.options.enable_legend || true;
    let attr__legend_color = '';
    let attr__series_titles = dataVisualizationBlock.options.series_titles || [];
    let attr__series_name = dataVisualizationBlock.options.series_name || '';
    let attr__xAxis_title = dataVisualizationBlock.options.x_axis_title || '';
    let attr__yAxis_title = dataVisualizationBlock.options.y_axis_title || '';

      anychart.onDocumentLoad(function () {
        var colors = [
          '#0072A5',
          '#3BBA7B',
          '#FFCD61',
          '#FA5446',
          '#7D58BD',
          '#29D8D5'
        ];

        // create an instance of a pie chart
        var chart;
        var data;
        var stage;
        var draw_chart = true; // We might have to draw our charts in a custom function

        const process_selected_fill = function(my_chart, chart_type, fill_color) {
            // Deal with selected state fill colors.
            switch(chart_type) {
              case CHART_TYPE_COLUMN:
              case CHART_TYPE_BAR:
              case CHART_TYPE_VERTICAL_BAR:
                var i=0;
                // create a loop
                while (my_chart.getSeriesAt(i)){
                  // rename each series
                  my_chart.getSeriesAt(i).selected().fill(fill_color);
                  i++;
                }
                break;
              default:
               // do nothing
            }
        }

        switch(attr__chart_type) {
          case CHART_TYPE_LINE:
            console.log(attr__records);
            console.log(attr__records[0].line_values);
            chart = anychart.line();
            var line_data = []
            for(var i=0; i < attr__records.length; i++){
              line_data.push(attr__records[i].line_values);
            }
            var data = anychart.data.set(line_data);
            for(var i=1; i <= line_data.length; i++){
              chart.line(data.mapAs({x: 0, value: i}));
            }

            // set scale mode
            chart.xScale().mode('continuous');

          break;
          case CHART_TYPE_PIE:
            chart = anychart.pie();
            // set the data. The 'normal' key with the 'fill' option sets the color of the bars
            chart.data(attr__records);

            // set the start angle
            chart.startAngle(-90);

            // configure connectors
            chart.connectorStroke({color: "#101010", thickness: 5, dash:"2 2"});
            chart.palette().items(colors);
            if(!!attr__inner_radius) {
              //set the inner radius to form the doughnut shape
              chart.innerRadius(attr__inner_radius);
            }

          break;
          case CHART_TYPE_BAR:
            chart = anychart.bar();

            // Use Theme colors
            for(var i=0;i<attr__records.length;i++) {
              attr__records[i].fill = colors[i];
              console.log(attr__records[i].fill);
            }

            // Set the data and map it
            data = anychart.data.set(attr__records);
            chart.bar(data.mapAs({x: 0, value: 1}));


            // set the titles of the axes
            if(!!attr__xAxis_title) {
              let xAxis = chart.xAxis();
              xAxis.title(attr__xAxis_title);
            }
            if(!!attr__yAxis_title) {
              let yAxis = chart.yAxis();
              yAxis.title(attr__yAxis_title);
            }
            chart.isVertical(false);
            console.log(attr__bar_chart_vertical);

            // Loop for Bar Series
            // The 0 index for records if the name of the Y axis label, but the series titles uses a 0 index base
            // for(var i=1;i<=attr__records.length;i++) {
            //   // chart.bar(data.mapAs({x: 0, value: i}));
            //   chart.bar(data.mapAs({x: 0, value: i})).name(attr__series_titles[i-1]);
            // }

          break;
          case CHART_TYPE_VERTICAL_BAR:
            chart = anychart.vertical();
            data = anychart.data.set(attr__records);



            console.log("vertical bar chart data set:");
            console.log(attr__records);

            var series = chart.bar(data);
              series.name(attr__series_name);

              // disable the stroke
            series.stroke("none");

          break;
          case CHART_TYPE_PYRAMID:
            var data = anychart.data.set(attr__records);
            var chart = anychart.pyramid(data);

          // Set connector stroke.
          chart.connectorStroke('#607D8B', 1.5, '5 2', 'round');

          break;
          case CHART_TYPE_DRILLDOWN:
            let details_chart;
            let chart_type_main = attr__drilldown_chart_types[0];
            let chart_type_details = attr__drilldown_chart_types[1];

            let drillDownFunction = function() {
                // clear the chart with details
                details_chart.removeAllSeries();

                // points = e.points;
                points = chart.getSelectedPoints();

                console.log(points[0].get(attr__drilldown_details_field_name));
                console.log("about to get points for " + attr__drilldown_details_field_name);

                // go through selected points and add proper data
                for (i=0;i<points.length;i++){
                  switch(chart_type_details) {
                    case CHART_TYPE_LINE:
                      details_chart.line(points[i].get(attr__drilldown_details_field_name)).name(points[i].get('x'));
                      break;
                    case CHART_TYPE_BAR:
                      details_chart.bar(points[i].get(attr__drilldown_details_field_name)).name(points[i].get('x'));
                      break;
                    default:
                      // do nothing
                  }
                };
            }

            stage = anychart.graphics.create(attr__container_id);

            switch(chart_type_main) {
              case CHART_TYPE_BAR:
                chart = anychart.bar();
                chart.bar(attr__records); // .name("Subject Interactions:");
              break;
              case CHART_TYPE_COLUMN:
                chart = anychart.column();
                chart.column(attr__records); // .name("Subject Interactions:");
              break;
              case CHART_TYPE_PIE:
                chart = anychart.pie();
                // set the data. The 'normal' key with the 'fill' option sets the color of the bars
                chart.data(attr__records);

                // set the start angle
                chart.startAngle(-90);

                // configure connectors
                chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});

                if(!!attr__inner_radius) {
                  //set the inner radius to form the doughnut shape
                  chart.innerRadius(attr__inner_radius);
                }
              break;
              default:
                // do nothing
            }

            process_selected_fill(chart, chart_type_main, "none");

            // Everything we normally do to chart outside of the select, we have to do here for the details chart.
            switch(chart_type_details) {
              case CHART_TYPE_LINE:
                details_chart = anychart.line();
              break;
              case CHART_TYPE_BAR:
                details_chart = anychart.bar();
              break;
              default:
                // do nothing
            }

            // Details chart config
            if(!!attr__title2) {
              details_chart.title(attr__title2);
            }
            if(!!attr__enable_legend) {
              details_chart.legend(true);
            }
            else {
              details_chart.legend(false);
            }
            //dissable credits watermark
            details_chart.credits().enabled(false);

            // Bind some listeners to the chart
            switch(attr__listener) {
              case LISTENER_POINT_SELECT:
                  //add a listener
                  chart.listen("pointsSelect", drillDownFunction);
                break;
              default:
                // do nothing
            }

            chart.bounds("0", "0", "40%", "100%");
            details_chart.bounds("50%", "0", "40%", "100%");

            chart.container(stage).draw();
            details_chart.container(stage).draw();
            draw_chart = false;

            // select a point and draw for the first time
            switch(chart_type_main) {
              case CHART_TYPE_PIE:
                chart.select(0);
                break;
              case CHART_TYPE_BAR:
                chart.getSeries(0).select(0);
                break;
              case CHART_TYPE_COLUMN:
                chart.getSeries(0).select(0);
                break;
              default:
            }
            drillDownFunction();

          break;
          default:
            chart = anychart.pie();
        }


        // set the tooltip styles
        var tooltipBackground = chart.tooltip().background();
        tooltipBackground.fill("#406181");
        tooltipBackground.stroke("white");
        tooltipBackground.cornerType("round");
        tooltipBackground.corners(4);

        if(!!attr__title) {
         // set chart title
          var title = chart.title();
          title.enabled(true);
          title.text(attr__title);
          title.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')
          title.fontWeight(300);
          title.fontColor(attr__title_color);
          title.fontSize(30);
          //dissable credits watermark
          var credits = chart.credits();
          credits.enabled(false);
        }

        if(!!attr__label) {
          var label = anychart.standalones.label();
          //set the inner percentage display
          label.text(attr__label);
          label.width("100%");
          label.height("100%");
          title.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji')
          title.fontWeight(300);
          label.fontColor(attr__label_color);
          label.fontSize(24);
          label.hAlign("center");
          label.vAlign("middle");

          // set the label as the center content
          chart.center().content(label);
        }

        if(!!attr__label_position) {
          // set the position of labels
          chart.labels().position(attr__label_position);
        }

        //legend styling
        var legend = chart.legend();
        if(!!attr__enable_legend) {
            legend.fontFamily('hero-new', 'sans-serif', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji');
            legend.fontWeight(300);
            legend.fontColor("#60727b");
            legend.fontSize(16);
        }
        else {
          legend.enabled(false);
        }

        if(!!attr__listener) {
          // Bind some listeners to the chart
          switch(attr__listener) {
            case LISTENER_DOUBLE_CLICK:
                //add a listener
                chart.listen("pointDblClick", function(e){
                    var new_value = e.iterator.get("url");
                    window.open(new_value,"_self");
                });
              break;
            default:
              // do nothing
          }
        }

        process_selected_fill(chart, attr__chart_type, "none");

        if(draw_chart) {
          // set the container element
          chart.container(attr__container_id);
          // initiate chart display
          chart.draw();
        }

      });



};