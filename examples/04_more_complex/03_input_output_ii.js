// Defining functions can be a helpful way to reuse complex
// shapes throughout your code

// Using ES6 syntax we will define our function below
// function name = (parameters) => return statement
solid().out();

blob = () => shape(3,0.5,0.4)
.rotate( ()=>Math.PI )
.scrollX(0,0.1)
.scale(1.4, 3)
.rotate(0,-0.4)

// note, we will not need to put .out() at the end of
// our component above because it will be called when
// we build out our sketch later

// we can use our new component as a starting
// point and add additional modifiers
blob()
.mult(
  osc(1,0.3,900)
)
.rotate(0,0.3)
.scale(0.7,-1)
.scrollX(0,0.01)
.modulate(
  voronoi(2)
)
.saturate(10)
// modulateScale itself using itself as input 🤯
.modulate(
  blob().modulateScale(blob()),
  0.4
)
.modulate(
  src(o0)
  .kaleid(3)
  .thresh()
  .scrollX(0, 0.1)
)
.out(o0);
