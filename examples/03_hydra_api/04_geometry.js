// repeat
 
voronoi()
  .color(.2, .6, .6)
  .repeatX(4)
  .out(o0);
  
voronoi()
  .color(.2, .6, .6)
  .repeatY(2)
  .out(o1);

render();

// scroll

voronoi()
  .color(.2, .7, .4)
  .scrollX(.5, 1)
  .out(o0);
  
voronoi()
  .color(.2, .7, .4)
  .scrollY(.5, -1)
  .out(o1);
  
render();

// rotate and scale

voronoi()
  .color(.8, .4, .38)
  .rotate(() => time % 360)
  .out(o0);
  
voronoi()
  .color(.8, .4, .38)
  .scale(() => time % 5)
  .out(o1);
  
render();

// pixelate and kaleid

voronoi()
  .color(.94, .24, .56)
  .kaleid(6)
  .out(o0);
  
voronoi()
  .color(.94, .24, .56)
  .pixelate(10, 10)
  .out(o1);
  
render();