// ↠ feedback example
speed = 1;

src(o0)
  .modulate(noise(3),0.005)
  .blend(shape(4), 0.01)
  .out(o0);

render(o0);


src(o0)
  .modulate(noise([3, 10, 100, 1]), 0.005)
  .blend(shape(4), 0.01)
  .out(o0)


// ↠ bpm exists now, talk about syncing
bpm = 120

src(o1)
  .modulate(noise(3), 0.005)
  .blend(shape([3, 4, 5]).scrollY([1, 2, 3 , 4]).scrollX(() => time * .6) ,0.01)
  .rotate(.01)
  .out(o1)

src(o2)
  .modulate(noise(10), 0.05)
  .blend(shape([4, 6, 9]).scrollX(() => time * .08) ,0.01)
  .blend(gradient())
  .rotate(.02)
  .out(o2)

src(o1)
    .modulateRotate(src(o2))
    .modulateRepeat(osc(4), 4, 4, 4, [10, 5, 1, 0.5, 0.1, 0.5, 1, 5])
    .blend(src(o2))
	.scrollX(() => -time * .06)
	.blend(solid(0, 0, 1))
    // .layer(src(o0).scale(2).mask(shape(4,0.5,0).scrollX(() => time * .6).scale(.4).repeat(3)).invert([0, 0, 0, 0.2]))
	.out(o0);

render(o1)
