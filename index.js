import {
  provinciasArgentina,
  departamentosPorProvinciaArgentina,
  localidadesPorDepartamentoArgentina,
  crearEstadoChileEndpoint,
  crearAreaChileEndpoint,
  crearLocalidadChileEndpoint
} from './endpoints.js'
import {
  obtenerProvinciasArgentina,
  obtenerDepartamentosPorProvincia,
  obtenerDepartamentosPorProvinciaIndividual,
  obtenerLocalidadesPorDepartamento,
  iteradorProvinciasJsonFile,
} from './argentina/funcionesArgentina.js'
import venezuela from 'venezuela'
import {
  crearEstadosChileInDatabaBase,
  crearLocalidadChileInDatabaBase,
  listaLocalidadesPorArea,
} from './chile/metodosCrear.js'

// obtenerProvinciasArgentina(provinciasArgentina)
// obtenerDepartamentosPorProvincia(departamentosPorProvinciaArgentina)
// obtenerDepartamentosPorProvinciaIndividual(departamentosPorProvinciaArgentina,{id: "02"})
// iteradorProvinciasJsonFile(localidadesPorDepartamentoArgentina,'./argentina/departamentos/departamentos-provincia-id-94.json')
// obtenerLocalidadesPorDepartamento(localidadesPorDepartamentoArgentina,{id:'10077'},1)

// const paises = venezuela.estados

// console.log(paises)



// crearEstadosChileInDatabaBase(crearEstadoChileEndpoint)
// crearLocalidadChileInDatabaBase(crearLocalidadChileEndpoint,'Región Metropolitana de Santiago','Talagante',27)
// listaLocalidadesPorArea()
