

function near(points, to, distance) {
  
}

var tests = 0, fails = 0;
function expectEq(a, b) {
  tests++;
  if (a != b) {
    fails++;
    console.log("Error: '" + a + "' not equal to '" + b + "'.");
  }
}

function test() {
  expectEq(near([], [1, 1], 0), []);
  expectEq(near([0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0], 1), [5.5, 0], [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]);
  expectEq(near([0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0], 0), [5.5, 0], []);
  expectEq(near([-1, 0, 1, 0, 2, 0, 4, 0], 1), [1.5, 0], [1, 0, 2, 0]);
}
