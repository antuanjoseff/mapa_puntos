var datosGeoJSON = {
"type": "FeatureCollection",
"name": "puntos",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
  //LOCALIZACIÓN DEL SIGTE-UdG
  {
    "type": "Feature",
    "properties": {
      "nombre": "SIGTE" //NOMBRE QUE SE MOSTRARÁ EN FORMA DE POP-UP
    },
    "geometry": {
      "type": "Point", "coordinates": [
        2.827676362232693, 41.98521580774775
      ]
    }
  }
  //AQÚI DEBERÉIS AÑADIR VUESTRA UBICACIÓN PRECEDIDA DE UNA COMA
  //  ,
  // {
  // ....VUESTRA UBICACIÓN AQUÍ REPLICANDO LA ESTRUCTURA DE LA UBICACIÓN
  // DEL SIGTE
  //}
]
}
