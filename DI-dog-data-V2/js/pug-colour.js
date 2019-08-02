(function chart1(){
var diameter = 550, //max size of the bubbles
    format   = d3.format(",d"),
    color    = d3.scaleOrdinal(d3.schemeCategory20c); //color category

var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(5);

var svg = d3.select("#pug-colour").append("svg")
    .attr("class", "bubble")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 550");

d3.csv("pugColourChart.csv", function(error, data){
    if (error) throw error;

    //convert numerical values from strings to numbers
    data = data.map(function(d){ d.Total = +d["Total"]; return d; });

    //Sets up a hierarchy of data object
    var root = d3.hierarchy({children:data})
      .sum(function(d) { return d.Total; })
      .sort(function(a, b) {return -(a.value - b.value);});

    //Once we have hierarchal data, run bubble generator
    bubble(root);

    //setup the chart
    var bubbles = svg.selectAll(".bubble")
        .data(root.children)
        .enter();


    // natural group
    bubbles.append("rect")
      .attr("height", "500")
      .attr("width","680")
      .style("fill","#F6F0E1")
      .attr("cx","500")
      .attr("cy", "500")
      .attr("rx", "250")
      .attr("ry", "250");

    svg.append("text")
      .attr('class', 'label')
      .attr("x","340")
      .attr("y","75")
      .text("Natural")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "26px")
      .style("font-weight","400");

    //create the bubbles
    bubbles.append("circle")
        .attr("class", "circle")
        .attr("r", function(d){ return d.r; })
        .style("fill", function(d) { return color(d.Total); });

    //format the text for each bubble
    //bubbles.append("text")
      //  .attr("text-anchor", "middle")
        //.text(function(d){ return d.data["Colour"]; })
        //.style("font-family", "Palanquin")
        //.style("text-transform", "capitalize")
        //.style("letter-spacing", "2px")
        //.style("font-size", "18px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "fawn"; })
      .style("fill", "#F0E6CE")
      .attr("cx","180")
      .attr("cy", "260");

    svg.append("text")
      .attr("x","180")
      .attr("y","115")
      .text("Fawn")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","180")
        .attr("y","265")
        .text("619")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "black"; })
      .style("fill", "#000")
      .attr("cx","490")
      .attr("cy", "270");

    svg.append("text")
      .attr("x","490")
      .attr("y","110")
      .text("Black")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","490")
        .attr("y","275")
        .text("784")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill", "#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "pink"; })
      .style("fill", "#DDADA4")
      .attr("cx","900")
      .attr("cy", "450");

    svg.append("text")
      .attr("x","900")
      .attr("y","410")
      .text("Pink")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px")
      .style("fill","#000");
      svg.append("text")
        .attr("x","900")
        .attr("y","456")
        .text("32")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill","#000");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "silver"; })
      .style("fill", "#A0A4A5")
      .attr("cx","730")
      .attr("cy", "440");

    svg.append("text")
      .attr("x","730")
      .attr("y","380")
      .text("Silver")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","730")
        .attr("y","445")
        .text("86")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill", "#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "white"; })
      .style("fill", "#fff")
      .attr("cx","790")
      .attr("cy", "120");

    svg.append("text")
      .attr("x","790")
      .attr("y","20")
      .text("White")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","790")
        .attr("y","125")
        .text("263")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "merle"; })
      .style("fill", "#6A503D")
      .attr("cx","850")
      .attr("cy", "310");

    svg.append("text")
      .attr("x","850")
      .attr("y","240")
      .text("Merle")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","850")
        .attr("y","315")
        .text("106")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill", "#fff");


});
}())// set the dimensions and margins of the graph
