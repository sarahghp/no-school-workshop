// resets & setup — evaluate once

resetBuffer = (buffer) => solid().out(buffer);

resetAll = () => {
  [o0, o1, o2, o3].forEach(
    (buffer) => {
      solid().out(buffer)
    }
  );
  [s0, s1, s2, s3].forEach(
    (source) => {
      source.clear()
    }
  );
  a.hide();
};

resetAll()

// in our last example, we looked at modulation based on other output buffers
// one of my favorite sources to use is the external screen

s0.initScreen();

src(s0).out(o0)

src(s0)
  .modulateKaleid(osc(110,0.5,0),2)
.out()

src(s0)
  .modulateRotate(osc(11,0.5,0),2)
  .modulateKaleid(src(s0))
.out()

render(o0);

resetAll();

// we can also use an image (and video)

s1.initImage('/Users/littoral/codex/livecode_workshop/examples/__img/rotate-away-5.gif');
s2.initVideo('/Users/littoral/codex/livecode_workshop/examples/__img/rotate-away-5.mp4');

src(s1)
.scrollX(0, 0.01)
.kaleid(4)
.out(o1);


src(s2)
.scrollX(0, 0.01)
// .modulateScrollY(osc(100, .4, 20).rotate(1, 2))
.modulateKaleid(o2, -1)
// .modulateRepeatX(src(o0).rotate(1, 4))
// .modulate(o0)
// .kaleid(4)
.scrollX(() => time * .4)
.out(o2);

render(o2)

s1.clear();
speed = .1
