
  voronoi()
    .color(0.494, 0.137, 0.961)
    .out(o0);

// first group 
shape()
	.color(0.494, 0.137, 0.961)
	.modulateHue(osc().color(1, 1, [0, .5, .7]), 100)
    .out(o1);

src(o0).modulateRotate(osc()).out(o2);
src(o0).modulateScale(osc()).out(o3);

// second group
src(o0).modulateKaleid(osc()).out(o2);
src(o0).modulatePixelate(osc()).out(o3);

// third group
src(o0).modulateRepeat(osc()).out(o1);
src(o0).modulateRepeatX(osc()).out(o2);
src(o0).modulateRepeatY(osc()).out(o3);

render()