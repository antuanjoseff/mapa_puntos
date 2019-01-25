var datosGeoJSON = {
"type": "FeatureCollection",
"name": "puntos",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
  //LOCALIZACIÓN DEL SIGTE-UdG
  {
    "type": "Feature",
    "properties": {
      "nombre": "SIGTE", //NOMBRE QUE SE MOSTRARÁ EN FORMA DE POP-UP
      "border-color": "#c3a3a3", //COLOR DEL BORDE
      "fill-color": "green" //COLOR DE RELLENO
    },
    "geometry": { 
      "type": "Point", "coordinates": [
        2.827676362232693, 41.98521580774775
      ]
    }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "John Doe",
      "border-color": "#f300a3",
      "fill-color": "red" 
    },
    "geometry": { //MADRID
        "type": "Point",
        "coordinates": [
          -3.751144409179687,
          40.33573338834914
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Jane Doe",
      "border-color": "#f300a3",
      "fill-color": "green" 
    },
    "geometry": { //MADRID
        "type": "Point",
        "coordinates": [
          -0.37490844726562494,
          39.46588451142044
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Jane Doe",
      "border-color": "#f300a3",
      "fill-color": "green" 
    },
    "geometry": { //MADRID
        "type": "Point",
        "coordinates": [
          -0.391387939453125,
          39.4637641090409
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
