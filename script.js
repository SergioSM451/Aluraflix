var listaPeliculas = [ "https://a.ltrbxd.com/resized/film-poster/5/1/7/8/1/51781-fargo-0-1000-0-1500-crop.jpg?v=44835e3b35","https://a.ltrbxd.com/resized/film-poster/2/6/5/4/3/9/265439-blade-runner-2049-0-1000-0-1500-crop.jpg?v=86735e0bb8","https://a.ltrbxd.com/resized/film-poster/4/2/2/0/3/5/422035-burning-0-1000-0-1500-crop.jpg?v=34c9bc6300","https://a.ltrbxd.com/resized/film-poster/5/1/5/1/8/51518-the-matrix-0-1000-0-1500-crop.jpg?v=fc7c366afe", "https://a.ltrbxd.com/resized/film-poster/1/1/4/5/6/3/114563-only-lovers-left-alive-0-1000-0-1500-crop.jpg?v=d6151d5d18",
"https://a.ltrbxd.com/resized/film-poster/4/7/4/4/7/4/474474-everything-everywhere-all-at-once-0-1000-0-1500-crop.jpg?v=281f1a041e","https://a.ltrbxd.com/resized/sm/upload/z2/5l/zn/to/uMcbu3qVseJGH24xUAyIVzmcQV4-0-1000-0-1500-crop.jpg?v=8bc488a9ff", "https://a.ltrbxd.com/resized/sm/upload/3u/dy/qd/qd/4Iu5f2nv7huqvuYkmZvSPOtbFjs-0-1000-0-1500-crop.jpg?v=0fc28fdf2c","https://a.ltrbxd.com/resized/film-poster/4/6/3/4/4/46344-fantastic-mr-fox-0-1000-0-1500-crop.jpg?v=3a2a858065","https://a.ltrbxd.com/resized/film-poster/4/8/8/3/9/9/488399-the-green-knight-0-1000-0-1500-crop.jpg?v=874a267b92","https://a.ltrbxd.com/resized/film-poster/6/4/7/0/0/8/647008-the-woman-king-0-1000-0-1500-crop.jpg?v=68c8f26b1a",
];
var nombrePeliculas = [
  "Fargo",
  "Blade Runner 2049",
  "Burning",
  "The Matrix",
  "Only Lovers Left Alive",
  "Everything Everywhere All at Once",
  "Isle of dogs",
  "Arrival",
  "Fantastic Mr. Fox",
  "The Green Knight",
  "Woman King",
];

document.write('<div class="movie_cover">');

for (var i = 0; i < listaPeliculas.length; i++) {
  document.write('<div class="movie_title">');
  document.write("<img src=" + listaPeliculas[i] + ">");
  document.write("<p>" + nombrePeliculas[i] + "<p/>");
  document.write("</div>");
}
document.write("</div>");

