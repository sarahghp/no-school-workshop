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

// noise (scale, offset)
noise(3, .4).out(o0)

noise(3, .4)
// blending a solid is not quite 
// the same as calling color 
// .color(.8, .6, 1)
.blend(solid(.8, .6, 1))
// try a different fn or
// more voronoi bins
.blend(voronoi())
.out(o1)

src(o1)
// .blend(voronoi())
.mask(noise(20, .4))
.out(o2)

src(o2)
  .modulateRotate(
    src(o3)
  )
.out(o3)

src(o2)
  .modulateRotate(
    src(o3)
  )
  // what are these arguments in modulatePixelate?
  // let's pass arrays to explore
  .modulatePixelate(src(o3), 10, 12 )
.out(o3)
