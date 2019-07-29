(function chart1(){
var diameter = 550, //max size of the bubbles
    format   = d3.format(",d"),
    color    = d3.scaleOrdinal(d3.schemeCategory20c); //color category

var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(5);

var svg = d3.select("#frenchbull-colour").append("svg")
    .attr("class", "bubble")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 960 550");

d3.csv("frenchieChart.csv", function(error, data){
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
      .attr("width","500")
      .style("fill","#F3F5F5")
      .attr("cx","500")
      .attr("cy", "500")
      .attr("rx", "250")
      .attr("ry", "250");;

    svg.append("text")
      .attr('class', 'label')
      .attr("x","250")
      .attr("y","100")
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
      .attr("cx","270")
      .attr("cy", "360");

    svg.append("text")
      .attr("x","270")
      .attr("y","250")
      .text("Fawn")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","270")
        .attr("y","370")
        .text("809")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "pied"; })
      .style("fill", "#fff")
      .attr("cx","390")
      .attr("cy", "220");

    svg.append("text")
      .attr("x","390")
      .attr("y","163")
      .text("Pied")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","390")
        .attr("y","228")
        .text("175")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "brindle"; })
      .style("fill", "#000000")
      .attr("cx","120")
      .attr("cy", "240");

    svg.append("text")
      .attr("x","120")
      .attr("y","178")
      .text("Brindle")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px")
      .style("fill","#000");
      svg.append("text")
        .attr("x","120")
        .attr("y","248")
        .text("223")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px")
        .style("fill","#fff");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "blue"; })
      .style("fill", "#9FB0B4")
      .attr("cx","690")
      .attr("cy", "380");

    svg.append("text")
      .attr("x","690")
      .attr("y","210")
      .text("Blue")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","690")
        .attr("y","390")
        .text("2245")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "lilac"; })
      .style("fill", "#9FA1B4")
      .attr("cx","580")
      .attr("cy", "100");

    svg.append("text")
      .attr("x","580")
      .attr("y","20")
      .text("Lilac")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","580")
        .attr("y","110")
        .text("447")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("circle")
      .filter(function(d) { return d.data["Colour"] == "tan"; })
      .style("fill", "#A56C43")
      .attr("cx","860")
      .attr("cy", "130");

    svg.append("text")
      .attr("x","860")
      .attr("y","20")
      .text("Tan")
      .attr("text-anchor", "middle")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "20px");
      svg.append("text")
        .attr("x","860")
        .attr("y","140")
        .text("863")
        .attr("text-anchor", "middle")
        .style("font-family", "Palanquin")
        .style("text-transform", "capitalize")
        .style("letter-spacing", "2px")
        .style("font-size", "20px");

    d3.selectAll("text")
      .filter(function(d) { return d.data["Colour"] == "brindle"; })
      .style("fill", "#fff")
      .attr("x","130")
      .attr("y","200");

    d3.selectAll("text")
      .style("font-family", "Palanquin")
      .style("text-transform", "capitalize")
      .style("letter-spacing", "2px")
      .style("font-size", "18px");

});
}())// set the dimensions and margins of the graph
