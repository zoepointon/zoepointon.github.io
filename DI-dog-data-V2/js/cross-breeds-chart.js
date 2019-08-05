(function chart1(){
  // set the dimensions and margins of the graph
  var margin = {top: 40, right: 170, bottom: 30, left: 80},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand().range([0, width]).padding(0.15);
  var y = d3.scaleLinear().range([height, 0]);

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#cross-breeds-chart").append("svg")
      //.attr("width", width + margin.left + margin.right)
      //.attr("height", height + margin.top + margin.bottom)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 500")
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // get the data
  d3.csv("cross-breeds.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
      d.Regular = +d.Regular;
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.Type; }));
    y.domain([0, d3.max(data, function(d) { return d.Regular; })]);





    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.Type); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Regular); })
        .attr("height", function(d) { return height - y(d.Regular); })
        .attr("rx", "20")
        .attr("ry", "20");


    svg.selectAll(".text")
        .data(data)
      .enter().append("text")
        .attr("class","text")
        .attr("text-anchor","middle")
        .attr("x", function(d) { return x(d.Type); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Regular); })
        .attr("dx", "140")
        .attr("dy", "-20")
        .text(function(d) { return d.Regular; });


        svg.selectAll(".bg")
            .data(data)
          .enter().append("rect")
            .attr("class", "bg")
            .attr("x", function(d) { return x(d.Type); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.Hybrid); })
            .attr("height", function(d) { return height - y(d.Hybrid); })
            .attr("rx", "20")
            .attr("ry", "20")
            .style("fill", "#6A503D");

    // add the x Axis
    svg.append("g")
        .attr('class', 'xaxis')
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    //svg.append("g")
        //.call(d3.axisLeft(y));

    // Add the text label for the Y axis
    svg.append("text")
      .attr('class', 'label')
      .attr("x","-75")
      .attr("y","200")
      .text("Number");
    svg.append("text")
      .attr('class', 'label')
      .attr("x","-68")
      .attr("y","230")
      .text("of Ads");


    svg.append("text")
      .attr('class', 'label')
      .attr("x","730")
      .attr("y","340")
      .text("Hybrid Breeds");

      // hybrid band
      svg.append("rect")
        .attr("x","705")
        .attr("y","312")
        .attr("width","2")
        .attr("height","43")
        .style("fill","#DEA683");
      svg.append("rect")
        .attr("x","700")
        .attr("y","312")
        .attr("width","12")
        .attr("height","2")
        .style("fill","#DEA683");
      svg.append("rect")
        .attr("x","700")
        .attr("y","355")
        .attr("width","12")
        .attr("height","2")
        .style("fill","#DEA683");

    // style
    d3.selectAll(".bar")
      .filter(function(d) { return d.Type == "pure breeds"; })
      .style("fill", "#414141");

    d3.selectAll(".bar")
      .filter(function(d) { return d.Type == "cross breeds"; })
      .style("fill", "#DEA683");


    d3.selectAll("text")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");

  });
}())// set the dimensions and margins of the graph
