/*
 * Julia-set "latent walk" background.
 *
 * Renders a low-resolution grayscale Julia set behind the page and slowly
 * moves its parameter c along a loop near the boundary of the Mandelbrot set,
 * so the fractal keeps morphing. Pixels are scaled up with nearest-neighbour
 * sampling to match the pixelated look of the old spectrogram background.
 *
 * Pauses when the tab is hidden; shows a single still frame when the
 * visitor prefers reduced motion.
 */
(function () {
  var canvas = document.getElementById("fractal-bg");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  var PIXEL = 6;          // screen pixels per fractal pixel
  var MAX_ITER = 48;
  var FRAME_MS = 90;      // ~11 fps is plenty for a slow drift
  var SPEED = 0.00004;    // angular speed of the swing, per millisecond
  var BRIGHTNESS = 95;    // max grey value of the glow, keeps the stage dark
  var INSIDE = 30;        // grey of points inside the set (its silhouette)

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var w = 0, h = 0, image = null;

  function resize() {
    w = Math.max(1, Math.ceil(window.innerWidth / PIXEL));
    h = Math.max(1, Math.ceil(window.innerHeight / PIXEL));
    canvas.width = w;
    canvas.height = h;
    image = ctx.createImageData(w, h);
  }

  function render(t) {
    // c swings along an arc of the circle |c| = 0.7885, which runs close to
    // the Mandelbrot set boundary. The arc (about 1.7 to 4.5 rad) avoids the
    // angles where the Julia set breaks up into sparse dust.
    var a = 3.1 + 1.4 * Math.sin(t * SPEED);
    var cr = 0.7885 * Math.cos(a);
    var ci = 0.7885 * Math.sin(a);
    // fit ~3.4 units across the width so filaments reach the visible sides
    var scale = 3.4 / w;
    var data = image.data;
    var i = 0;
    for (var y = 0; y < h; y++) {
      var zi0 = (y - h / 2) * scale;
      for (var x = 0; x < w; x++) {
        var zr = (x - w / 2) * scale;
        var zi = zi0;
        var n = 0;
        var zr2 = zr * zr, zi2 = zi * zi;
        while (n < MAX_ITER && zr2 + zi2 < 16) {
          zi = 2 * zr * zi + ci;
          zr = zr2 - zi2 + cr;
          zr2 = zr * zr;
          zi2 = zi * zi;
          n++;
        }
        var v = INSIDE;
        if (n < MAX_ITER) {
          // smooth colouring, then a gamma curve so filaments stay thin
          var smooth = n + 1 - Math.log(Math.log(Math.sqrt(zr2 + zi2))) / Math.LN2;
          v = Math.pow(Math.max(0, smooth) / MAX_ITER, 0.75) * BRIGHTNESS;
        }
        data[i++] = v;
        data[i++] = v;
        data[i++] = v;
        data[i++] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
  }

  var start = performance.now() - 60000 * Math.random();
  var last = 0;
  function loop(now) {
    if (!document.hidden && now - last >= FRAME_MS) {
      last = now;
      render(now - start);
    }
    window.requestAnimationFrame(loop);
  }

  resize();
  document.documentElement.classList.add("has-fractal");
  window.addEventListener("resize", function () {
    resize();
    render(performance.now() - start);
  });

  // Always draw one frame right away, even in a background tab
  render(performance.now() - start);
  if (!reduceMotion) {
    window.requestAnimationFrame(loop);
  }
})();
