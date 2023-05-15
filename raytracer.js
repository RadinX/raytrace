// This is a simple raytracer written in JavaScript.
// It draws a sphere on an HTML5 canvas.

// The canvas element.
var canvas = document.getElementById("canvas");

// The width and height of the canvas.
var width = canvas.width;
var height = canvas.height;

// The camera position.
var camera = {
  x: width / 2,
  y: height / 2,
  z: 15
};

// The sphere radius.
var radius = 2;

// The canvas context.
var ctx = canvas.getContext("2d");

// This function draws a ray from the camera to the given point.
function ray(x, y) {
  // The direction vector of the ray.
  var direction = {
    x: x - camera.x,
    y: y - camera.y,
    z: -camera.z
  };

  // The distance to the intersection of the ray with the sphere.
  var t = Math.sqrt(direction.x * direction.x + direction.y * direction.y + direction.z * direction.z) / radius;

  // The point of intersection.
  var point = {
    x: camera.x + direction.x * t,
    y: camera.y + direction.y * t,
    z: camera.z + direction.z * t
  };

  // Draw a point at the intersection point.
  ctx.fillRect(point.x, point.y, 1, 1);
}

// This function renders the scene.
function render() {
  // Clear the canvas.
  ctx.clearRect(0, 0, width, height);

  // For each pixel in the canvas...
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      // ...cast a ray from the camera to the pixel.
      ray(x, y);
    }
  }
}

// Start rendering the scene.
render();
