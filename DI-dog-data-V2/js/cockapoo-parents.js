(function chart1(){
  // set the dimensions and margins of the graph
  var margin = {top: 40, right: 0, bottom: 30, left: 100},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  // set the ranges
  var x = d3.scaleBand().range([0, width]).padding(0.1);
  var y = d3.scaleLinear().range([height, 0]);

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#cockapoo-parents").append("svg")
      //.attr("width", width + margin.left + margin.right)
      //.attr("height", height + margin.top + margin.bottom)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 500")
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  // get the data
  d3.csv("cockapooChart.csv", function(error, data) {
    if (error) throw error;

    // format the data
    data.forEach(function(d) {
      d.Total = +d.Total;
    });

    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.Breed; }));
    y.domain([0, d3.max(data, function(d) { return d.Total; })]);

    // append the rectangles for the bar chart
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.Breed); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Total); })
        .attr("height", function(d) { return height - y(d.Total); })
        .attr("rx", "20")
        .attr("ry", "20");


    svg.selectAll(".text")
        .data(data)
      .enter().append("text")
        .attr("text-anchor","middle")
        .attr("x", function(d) { return x(d.Breed); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.Total); })
        .attr("dx", "125")
        .attr("dy", "-20")
        .text(function(d) { return d.Total; });


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
      .attr("x","-85")
      .attr("y","200")
      .text("Number")
    svg.append("text")
      .attr('class', 'label')
      .attr("x","-78")
      .attr("y","230")
      .text("of Ads")

    // style
    d3.selectAll(".bar")
      .filter(function(d) { return d.Breed == "cockapoo"; })
      .style("fill", "#DEA683");

    d3.selectAll(".bar")
      .filter(function(d) { return d.Breed == "cocker spaniel"; })
      .style("fill", "#E59373");

    d3.selectAll(".bar")
      .filter(function(d) { return d.Breed == "poodle"; })
      .style("fill", "#414141");

    d3.selectAll("text")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");

  });
}())// set the dimensions and margins of the graph