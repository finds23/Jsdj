/**
 * Prueba de ID: al abrir cualquier pelicula devuelve UN stream cuyo nombre
 * muestra los datos que Nuvio le paso al plugin. El video es solo de relleno.
 */
if (typeof globalThis.setTimeout !== "function") {
  globalThis.setTimeout = function () { return 1; };
  globalThis.clearTimeout = function () {};
}

async function getStreams(tmdbId, type, season, episode) {
  var dato = "id=" + String(tmdbId) + " tipo=" + String(type);
  return [{
    name: "PRUEBA " + dato,
    title: "Recibido: " + dato,
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    quality: dato,
    headers: {}
  }];
}

exports.getStreams = getStreams;
