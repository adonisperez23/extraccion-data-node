import fs from 'fs';
import axios from 'axios';

function Localidad(nombreLocalidad, idArea) {
  this.nombreLocalidad = nombreLocalidad
  this.idArea = idArea;
}

export async function crearEstadosChileInDatabaBase(endpoint){
  const chileData = fs.readFileSync('./chile/Regiones_Provincias_Comunas_Chile_Completo.json')
  const jsonChileData = JSON.parse(chileData)

  const estadosChile = Object.keys(jsonChileData)
  console.log(estadosChile)

}

export async function crearLocalidadChileInDatabaBase(endpoint,region,provincia,idArea){
    const listaLocalidades = listaLocalidadesPorArea(region,provincia)

    listaLocalidades.forEach((nombreLocalidad, i) => {
      const localidad = new Localidad(nombreLocalidad,idArea)
      console.log("localidad",localidad)
      axios.post(endpoint,localidad)
        .then((res)=>{
          console.log('Localidad creada con exito',res.data)
        })
        .catch((err)=>{
          console.log('error ocurrido',err)
        })
    });
}

export function listaLocalidadesPorArea(region,provincia){
  const chileData = fs.readFileSync('./chile/Regiones_Provincias_Comunas_Chile_Completo.json')
  const jsonChileData = JSON.parse(chileData)

  const listaLocalidadesPorRegionProvincia = jsonChileData[region][provincia].map((localidad)=>{ return localidad})

  return listaLocalidadesPorRegionProvincia
}
