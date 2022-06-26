// set up our base layers

voronoi()
  .color(0.91, 0.361, 0.392)
  .out(o0);
  
noise()
  .color(0.329, 0.733, 0.706)
  .out(o1);
  
render();

// add and multiply
  
src(o0).add(o1).out(o2);
src(o0).mult(o1).out(o3);

// diff and mask

src(o0).diff(o1).out(o2);
src(o0).mask(o1).out(o3);

// more complex map example

shape(4)
  .scale(2.5)
  .color(0.91, 0.361, 0.392)
  .mask(o1)
  .repeat(5)
  .out(o3);
 
// blend and layer 
 
src(o0).layer(o1).out(o2);
src(o0).blend(o1).out(o3);
        
