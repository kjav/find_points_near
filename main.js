function getNear(points, to, distance) {
  var result = [];
  var distance2 = Math.pow(distance, 2);
  for (var i = 0; i < points.length; i += 2) {
    if (Math.pow(to[0] - points[i], 2) + Math.pow(to[1] - points[i+1], 2) <= distance2) {
      result.push(points[i]);
      result.push(points[i+1]);
    }
  }

  return result;
}

function near(points, to, distance) {
  var open = {},
    closed = {};

  var open_array = [];
  var result = [];

  var xs = getNear(points, to, distance);
  for (var i = 0; i < xs.length; i += 2) {
    open[xs[i] + ',' + xs[i+1]] = true;
    open_array.push(xs[i]);
    open_array.push(xs[i + 1]);
    result.push(xs[i]);
    result.push(xs[i + 1]);
  }

  while (open_array.length > 0) {
    var y = open_array.pop();
    var x = open_array.pop();
    var point = [x, y];

    open[point] = false;
    closed[point] = true;

    var xs = getNear(points, point, distance);
    for (var i = 0; i < xs.length; i += 2) {
      if (!(open[xs[i] + ',' + xs[i+1]] || closed[xs[i] + ',' + xs[i+1]])) {
        open[xs[i] + ',' + xs[i + 1]] = true;
        open_array.push(xs[i]);
        open_array.push(xs[i + 1]);
        result.push(xs[i]);
        result.push(xs[i + 1]);
      }
    }
  }

  return result;
}

var tests = 0, fails = 0;
function expectEq(a, b) {
  tests++;
  if (a.toString() != b.toString()) {
    fails++;
    console.log("Error: '" + a + "' not equal to '" + b + "'.");
  }
}

function test() {
  expectEq(near([], [1, 1], 0), []);
  expectEq(near([0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0], [5.5, 0], 1), [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]);
  expectEq(near([0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0], [5.5, 0], 0), []);
  expectEq(near([-1, 0, 1, 0, 2, 0, 4, 0], [1.5, 0], 1), [1, 0, 2, 0]);
}
