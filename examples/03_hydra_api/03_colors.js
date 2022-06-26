
// color
osc().color(1, 1, 0).out(o0);
osc().color(1, 0, 1).out(o1);
osc().color(0, 1, 1).out(o2);
osc().color(0, 0, 1).out(o3);
render()

// colorama
osc(11).color(.3, .3, .4).out(o0);
osc(11).colorama(4).out(o1);
render();

// contrast and threshold
voronoi()
  .color(.7, .9, .4)
  .contrast()
  .out(o0);
voronoi()
  .color(.7, .9, .4)
  .thresh()
  .out(o1);
render()

// posterize and invert
voronoi()
  .color(.7, .9, .4)
  .posterize()
  .out(o0);
voronoi()
  .color(.7, .9, .4)
  .invert()
  .out(o1);
render()

// brightness and saturation
voronoi()
  .color(.7, .9, .4)
  .brightness()
  .out(o0);
voronoi()
  .color(.2, .7, .4)
  .saturate()
  .out(o1);
render()