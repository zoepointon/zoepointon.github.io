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
    .attr("viewBox", "0 0 960 580");

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
      .attr("cy", "280");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","220")
      .attr("y","55")
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
        .attr("y","285")
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
      .attr("cy","120");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","740")
      .attr("y","80")
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
        .attr("y","125")
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
      .attr("cy","180");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","900")
      .attr("y","132")
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
        .attr("y","185")
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
      .attr("cy","280");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","780")
      .attr("y","250")
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
        .attr("y","285")
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
      .attr("cy", "380");

    svg.append("text")
      .attr("class","nobreeds")
      .attr("x","890")
      .attr("y","340")
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
        .attr("y","385")
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
        .attr("cy","450");

    svg.append("text")
        .attr("class","nobreeds")
        .attr("x","750")
        .attr("y","410")
        .text(">10 Breeds")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "24px")
        .style("fill","#fff");
        svg.append("text")
          .attr("class","percentage")
          .attr("x","750")
          .attr("y","455")
          .text("1%")
          .attr("text-anchor", "middle")
          .style("font-family", "Palanquin")
          .style("text-transform", "capitalize")
          .style("letter-spacing", "2px")
          .style("font-size", "20px")
          .style("fill", "#fff");


          svg.append("text")
            .attr('class', 'label')
            .attr("x","340")
            .attr("y","20")
            .text("Normal")
            .attr("text-anchor", "middle")
            .style("font-family", "Palanquin")
            .style("text-transform", "capitalize")
            .style("letter-spacing", "2px")
            .style("font-size", "26px")
            .style("font-weight","400")
            .style("fill", "#fff");
            svg.append("text")
              .attr('class', 'label')
              .attr("x","840")
              .attr("y","20")
              .text("Worrying")
              .attr("text-anchor", "middle")
              .style("font-family", "Palanquin")
              .style("text-transform", "capitalize")
              .style("letter-spacing", "2px")
              .style("font-size", "26px")
              .style("font-weight","400")
              .style("fill", "#fff");

        // Key
        svg.append("text")
          .attr("class","nobreeds")
          .attr("x","40")
          .attr("y","563")
          .text("= Percentage of Advertisers")
          .style("fill", "#fff");

        svg.append("rect")
          .attr("x","0")
          .attr("y","540")
          .attr("width", "30px")
          .attr("height", "30px")
          .attr("rx", "15")
          .attr("ry", "15")
          .style("fill","#E2C18D");

});
}())// set the dimensions and margins of the graph
