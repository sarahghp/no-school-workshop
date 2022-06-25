// resets & setup — evaluate once

resetBuffer = (buffer) => solid().out(buffer);

resetAll = () => {
  [o0, o1, o2, o3].forEach(
    (buffer) => {
      solid().out(buffer)
    }
  )
};

resetAll()

// back to our old friend again
voronoi().out(o0);
render();

// dress her up
voronoi()
  .color(1, .5, .7)
  // .kaleid(1)
  // .pixelate(3, 3)
  // .invert(() => Math.cos(time * .1))
  // .posterize( 5 , 0.5 )
  .out(o0)

// we can add a solid to output #1
solid(.2, .2, .4).out(o1)

// then things are going to get fun
voronoi()
  .add(o1)
  .repeat(4)
  .mask(shape(3)
    .scale(4)
    .repeat(13, 10))
  .out(o2)


  // order matters!
voronoi()
  .add(o1)
  .repeat(4)
  // switch repeat and scale
  .mask(shape(8).repeat(13, 10).scale(4))
.out(o3)

src(o1).add(o2).out(o3)

src(o0)
.modulateScale(
  src(o0).scrollX(0,0.1)
)
.saturate(0.5)
.out(o1);
