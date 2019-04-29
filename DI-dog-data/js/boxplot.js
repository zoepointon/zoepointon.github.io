{
  const w = 300, h = 20, root = d3.select(DOM.svg(w, h))
  const data = [1, 3, 3.4, 3.5, 3.6, 5, 6]
  const stats = d3.boxplotStats(data)
  const x = d3.scaleLinear()
    .domain(d3.extent(data))
    .range([10, w - 10])
  const boxplot = d3.boxplot()
    .jitter(0)
    .showInnerDots(false)
    .scale(x)
  root.datum(stats).call(boxplot)
  return root.node()
}
