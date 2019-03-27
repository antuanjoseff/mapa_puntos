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
      "nombre": "Magí Pàmies",
      "border-color": "#0cfd07",
      "fill-color": "#fd6b00" 
    },
    "geometry": { //Les Borges del Camp
        "type": "Point",
        "coordinates": [
          1.0213727,
          41.1699419
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Ricard Cots",
      "border-color": "#496796",
      "fill-color": "#4286f4" 
    },
    "geometry": { //Menorca 39.98821, 4.09344
        "type": "Point",
        "coordinates": [
          4.09344,
          39.98821
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Federico Cheda",
      "border-color": "#000000",
      "fill-color": "#ffffff" 
    },
    "geometry": { //LUGO
        "type": "Point",
        "coordinates": [
          -7.55602,
          43.00992
        ]
      }
  }
]
}
