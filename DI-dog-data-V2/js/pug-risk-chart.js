(function chart1(){
  // set the dimensions and margins of the graph
  var margin = {top: 35, right: 0, bottom: 30, left: 170},
    width = 960 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

  // set the ranges
  var y = d3.scaleBand()
          .range([height, 0])
          .padding(0.3);

  var x = d3.scaleLinear()
          .range([0, width]);

  // append the svg object to the body of the page
  // append a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("#risk-chart").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 450")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // get the data
  d3.csv("pug-risk.csv", function(error, data) {
    if (error) throw error;

  // format the data
  data.forEach(function(d) {
    d.Percent = +d.Percent;
  });

  // Scale the range of the data in the domains
  x.domain([0, d3.max(data, function(d){ return d.Total; })])
  y.domain(data.map(function(d) { return d.Issue; }));
  //y.domain([0, d3.max(data, function(d) { return d.sales; })]);


  svg.selectAll(".bg")
      .data(data)
    .enter().append("rect")
      .attr("class", "bg")
      .attr("width", function(d) {return x(d.Total); } )
      .attr("y", function(d) { return y(d.Issue); })
      .attr("height", y.bandwidth())
      .attr("rx", "15")
      .attr("ry", "15")
      .style("fill", "#F6F0E1");

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("width", function(d) {return x(d.Percent); } )
      .attr("y", function(d) { return y(d.Issue); })
      .attr("height", y.bandwidth())
      .attr("rx", "15")
      .attr("ry", "15")
      .style("fill", "#353433");

  svg.selectAll(".text")
      .data(data)
    .enter().append("text")
      .attr("text-anchor","left")
      .attr("x", function(d) { return x(d.Percent); })
      .attr("height", y.bandwidth())
      .attr("y", function(d) { return y(d.Issue); })
      .attr("dx", "10")
      .attr("dy", "34")
      .text(function(d) { return d.Percent; });




  // Add the text label for the X axis
  svg.append("text")
    .attr('class', 'label')
    .attr("x","320")
    .attr("y","400")
    .text("Percentage of Ads");

  // Key
  svg.append("text")
    .attr("x","560")
    .attr("y","-15")
    .text("= Normal");

  svg.append("rect")
    .attr("x","520")
    .attr("y","-35")
    .attr("width", "30px")
    .attr("height", "30px")
    .attr("rx", "5")
    .attr("ry", "5")
    .style("fill","#353433");

  svg.append("text")
    .attr("x","695")
    .attr("y","-15")
    .text("= Worrying");

  svg.append("rect")
    .attr("x","655")
    .attr("y","-35")
    .attr("width", "30px")
    .attr("height", "30px")
    .attr("rx", "5")
    .attr("ry", "5")
    .style("fill","#DDADA4");





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
      .filter(function(d) { return d.Issue == "puppy farm"; })
      .style("fill", "#DDADA4");

  d3.selectAll(".bar")
      .filter(function(d) { return d.Issue == "un-natural colour"; })
      .style("fill", "#DDADA4");

  d3.selectAll(".bar")
      .filter(function(d) { return d.Issue == "rescue"; })
      .style("fill", "#DDADA4");

  d3.selectAll("text")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
  });

}())// set the dimensions and margins of the graph
