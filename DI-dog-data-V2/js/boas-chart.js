(function chart1(){
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 180, bottom: 60, left: 140},
    width = 960 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

  // set the ranges
  var y = d3.scaleBand()
          .range([height, 0])
          .padding(0.1);

  var x = d3.scaleLinear()
          .range([0, width]);

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#boas-chart").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 450")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // get the data
  d3.csv("pugChart.csv", function(error, data) {
    if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.Total = +d.Total;
  });

  // Scale the range of the data in the domains
  x.domain([0, d3.max(data, function(d){ return d.Total; })])
  y.domain(data.map(function(d) { return d.Nose; }));
  //y.domain([0, d3.max(data, function(d) { return d.sales; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("width", function(d) {return x(d.Total); } )
      .attr("y", function(d) { return y(d.Nose); })
      .attr("height", y.bandwidth())
      .attr("rx", "50")
      .attr("ry", "50");

  svg.selectAll(".text")
      .data(data)
    .enter().append("text")
      .attr("text-anchor","left")
      .attr("x", function(d) { return x(d.Total); })
      .attr("height", y.bandwidth())
      .attr("y", function(d) { return y(d.Nose); })
      .attr("dx", "50")
      .attr("dy", "80")
      .text(function(d) { return d.Total; });


  // Add the text label for the X axis
  svg.append("text")
    .attr('class', 'label')
    .attr("x","250")
    .attr("y","400")
    .text("Number of Ads");

  // long nose
  svg.append("rect")
    .attr("height","60")
    .attr("width","70")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","600")
    .attr("y","65")
    .style("fill", "#2E2E2E");
  svg.append("rect")
    .attr("height","25")
    .attr("width","20")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","620")
    .attr("y","80")
    .style("fill", "#000");
  svg.append("rect")
    .attr("height","25")
    .attr("width","20")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","645")
    .attr("y","80")
    .style("fill", "#000");

  // short nose
  svg.append("rect")
    .attr("height","60")
    .attr("width","70")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","100")
    .attr("y","240")
    .style("fill", "#2E2E2E");
  svg.append("rect")
    .attr("height","25")
    .attr("width","20")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","120")
    .attr("y","255")
    .style("fill", "#000");
  svg.append("rect")
    .attr("height","25")
    .attr("width","20")
    .attr("rx","35")
    .attr("ry","35")
    .attr("x","145")
    .attr("y","255")
    .style("fill", "#000");


  // add the x Axis
  //svg.append("g")
      //.attr("transform", "translate(0," + height + ")")
      //.call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
    .attr('class', 'yaxis')
    .call(d3.axisLeft(y));

  // style
  d3.selectAll(".bar")
      .filter(function(d) { return d.Nose == "other nose"; })
      .style("fill", "#8D8D8D");

  d3.selectAll(".bar")
      .filter(function(d) { return d.Nose == "flat nose"; })
      .style("fill", "#DDADA4");

  d3.selectAll("text")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
  });

}())// set the dimensions and margins of the graph
