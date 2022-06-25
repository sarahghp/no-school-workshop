// resets & setup — evaluate once

resetBuffer = (buffer) => solid().out(buffer);

resetAll = () => {
  [o0, o1, o2, o3].forEach(
    (buffer) => {
      solid().out(buffer)
    }
  )
};



// base voronoi
voronoi().out(o0);
render();

// voronoi(scale [5], speed [.3], blending [.3])
voronoi(10, 1).out(o1)

// change blending with array
voronoi(10, 1, [.3, .5, 1, 10, -1, -10])
.out(o2)

// change color with array
voronoi(10, 1, [.3, .5, 1, 10, -1, -10])
.color(
  // R
  [1, .6, .8, .5, 0],
  // G
  [.8, .5, 0, 1, .6],
  // B
  [.5, 0, 1, .6, .8],
)
.out(o3)

// now they are on the same pace!
// speed it up or slow it down with .fast()
voronoi(10, 1, [.3, .5, 1, 10, -1, -10].fast(3))
.out(o2)

// globally change time

bpm(8);

bpm(120);

resetBuffer(o2)

// more subtle effects change color with time
voronoi()
  .color(
    .5,
    .5,
    () => Math.sin(time)
  )
.out(o3)

// just look at o3
render(o3)

// using the mouse!
// scale is the first value passed
// to voronoi
// voronoi(scale [5], speed [.3], blending [.3])
voronoi(() => mouse.x).out(o3)

voronoi(() => mouse.x - 600).out(o3)

voronoi(() => (mouse.x - 600) / 100).out(o3)

voronoi(() => mouse.x / 50)
.color(.2, () => mouse.y, .5)
.out(o3)

// note: this example may not work in atom! try mapping the
// y value to something else, or diving by how tall you
// expect your screen is
voronoi(() => mouse.x / 50)
.color(.2, () => (mouse.y / document.body.clientHeight), .5)
.out(o3)
