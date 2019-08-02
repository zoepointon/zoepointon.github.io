(function chart1(){
var diameter = 550, //max size of the bubbles
    format   = d3.format(",d"),
    color    = d3.scaleOrdinal(d3.schemeCategory20c); //color category

var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(5);

var svg = d3.select("#puppy-farm-2").append("svg")
    .attr("class", "bubble")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 550");

d3.csv("puppy-farm-2.csv", function(error, data){
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


    // Line
    bubbles.append("rect")
      .attr("height", "500")
      .attr("width","3")
      .style("fill","#414141")
      .attr("x","650")
      .attr("y", "0");

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
      .filter(function(d) { return d.data["Number"] == "one"; })
      .style("fill", "#E2C18D")
      .attr("cx","220")
      .attr("cy", "260");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","220")
      .attr("y","35")
      .text("1 Breed")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "24px")
      .style("fill","#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","220")
        .attr("y","265")
        .text("84%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Number"] == "two"; })
      .style("fill", "#E2C18D")
      .attr("cx","530")
      .attr("cy", "370");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","530")
      .attr("y","285")
      .text("2 Breeds")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size","24px")
      .style("fill", "#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","530")
        .attr("y","378")
        .text("8%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Number"] == "three"; })
      .style("fill","#414141")
      .attr("cx","740")
      .attr("cy","100");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","740")
      .attr("y","60")
      .text("3 Breeds")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "24px")
      .style("fill","#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","740")
        .attr("y","105")
        .text("1%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill","#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Number"] == "four"; })
      .style("fill","#414141")
      .attr("cx","900")
      .attr("cy","160");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","900")
      .attr("y","112")
      .text("4 Breeds")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "24px")
      .style("fill","#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","900")
        .attr("y","165")
        .text("2%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill", "#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Number"] == "six"; })
      .style("fill","#414141")
      .attr("cx","780")
      .attr("cy","260");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","780")
      .attr("y","220")
      .text("6 Breeds")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "24px")
      .style("fill","#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","780")
        .attr("y","265")
        .text("1%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill","#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Number"] == "seven"; })
      .style("fill", "#414141")
      .attr("cx","890")
      .attr("cy", "360");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","890")
      .attr("y","320")
      .text("7 Breeds")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "24px")
      .style("fill","#fff");
      svg.append("text")
        .attr("class","percentage")
        .attr("x","890")
        .attr("y","365")
        .text("1%")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill", "#fff");

    d3.selectAll("circle")
        .filter(function(d) { return d.data["Number"] == "ten"; })
        .style("fill","#414141")
        .attr("cx","750")
        .attr("cy","430");

    svg.append("text")
        .attr("class","nobreeds")
        .attr("x","750")
        .attr("y","390")
        .text("10 Breeds")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "24px")
        .style("fill","#fff");
        svg.append("text")
          .attr("class","percentage")
          .attr("x","750")
          .attr("y","435")
          .text("1%")
          .attr("text-anchor", "middle")
          .style("font-family", "Palanquin")
          .style("text-transform", "capitalize")
          .style("letter-spacing", "2px")
          .style("font-size", "20px")
          .style("fill", "#fff");

});
}())// set the dimensions and margins of the graph
