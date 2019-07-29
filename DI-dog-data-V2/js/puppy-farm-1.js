(function chart1(){
// Set the dimensions of the canvas / graph
var margin = {top: 60, right: 20, bottom: 60, left: 130},
  width = 960 - margin.left - margin.right,
  height = 490 - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


// Adds the svg canvas
var svg = d3.select("#puppy-farm-1").append("svg")
    //.attr("width", width + margin.left + margin.right)
    //.attr("height", height + margin.top + margin.bottom)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 500")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("breedersFrequPriceChart.csv", function(error, data) {
  data.forEach(function(d) {
      d.Frequency = +d.Frequency;
      d.AveragePrice = +d.AveragePrice;
  });

// Scale the range of the data
x.domain(d3.extent(data, function(d) { return d.Frequency; }));
y.domain([0, d3.max(data, function(d) { return d.AveragePrice; })]);

// under 5
svg.append("rect")
  .attr("x","0")
  .attr("y","-30")
  .attr("width","16.25")
  .attr("height","2")
  .style("fill","#E2C18D");
svg.append("rect")
  .attr("x","0")
  .attr("y","-34")
  .attr("width","2")
  .attr("height","10")
  .style("fill","#E2C18D");
svg.append("rect")
  .attr("x","16.25")
  .attr("y","-34")
  .attr("width","2")
  .attr("height","10")
  .style("fill","#E2C18D");

svg.append("text")
  .attr('class', 'label')
  .attr("x","40")
  .attr("y","-25")
  .text("Advertisers Under 5 Ads")


  // Advertiser Key
  svg.append("rect")
    .attr("x","700")
    .attr("y","-31")
    .attr("height","6")
    .attr("width", "6")
    .style("fill","#414141")
    .attr("rx", "3")
    .attr("ry", "3");

  svg.append("text")
    .attr('class', 'label')
    .attr("x","720")
    .attr("y","-25")
    .text("= Advertisers")


// rectangle
svg.append("rect")
  .attr("cx","0")
  .attr("cy","0")
  .attr("height","371")
  .attr("width","830")
  .style("fill","#EFEFEF");

svg.append("rect")
  .attr("cx","0")
  .attr("cy","0")
  .attr("height","371")
  .attr("width","16.25")
  .style("fill","#E2C18D");

// add the x Axis
svg.append("g")
  .attr('class', 'xaxis')
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .call(g => g.select(".domain").remove());

// add the y Axis
svg.append("g")
  .attr("class","yaxis")
  .call(d3.axisLeft(y))
  .call(g => g.select(".domain").remove());

// Add the text label for the Y axis
svg.append("text")
  .attr('class', 'label')
  .attr("x","-130")
  .attr("y","180")
  .text("Average")
svg.append("text")
  .attr('class', 'label')
  .attr("x","-130")
  .attr("y","200")
  .text("Price (£)")

// label X axis
svg.append("text")
  .attr('class', 'label')
  .attr("x","340")
  .attr("y","420")
  .text("Number of Ads")

// style
d3.selectAll("text")
  .style("font-family", "Palanquin")
  .style("text-transform", "capitalize")
  .style("letter-spacing", "2px")
  .style("font-size", "14px");

// puppy farm text
svg.append("text")
  .attr("x","80")
  .attr("y","220")
  .text("PUPPY FARM ZONE")
  .style("font-size","80px")
  .style("font-weight","900")
  .style("letter-spacing","-2px")
  .style("fill","#9FB0B4");

// Add the scatterplot
svg.selectAll("dot")
  .data(data)
  .enter().append("circle")
  .attr("r", 2)
  .attr("cx", function(d) { return x(d.Frequency); })
  .attr("cy", function(d) { return y(d.AveragePrice); })
  .style("fill","#414141")
  .style("opacity","0.5");

// Yellow Line
//svg.append("rect")
  //.attr("x","16.25")
  //.attr("y","0")
  //.attr("height","371")
  //.attr("width","1")
  //.style("fill","#EFEFEF");

});
}())// set the dimensions and margins of the graph
