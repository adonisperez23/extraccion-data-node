import {
  provinciasArgentina,
  departamentosPorProvinciaArgentina,
  localidadesPorDepartamentoArgentina
} from './endpoints.js'
import {
  obtenerProvinciasArgentina,
  obtenerDepartamentosPorProvincia,
  obtenerDepartamentosPorProvinciaIndividual,
  obtenerLocalidadesPorDepartamento,
  iteradorProvinciasJsonFile,
} from './argentina/funcionesArgentina.js'

// obtenerProvinciasArgentina(provinciasArgentina)
// obtenerDepartamentosPorProvincia(departamentosPorProvinciaArgentina)
// obtenerDepartamentosPorProvinciaIndividual(departamentosPorProvinciaArgentina,{id: "02"})
// iteradorProvinciasJsonFile(localidadesPorDepartamentoArgentina,'./argentina/departamentos/departamentos-provincia-id-94.json')
// obtenerLocalidadesPorDepartamento(localidadesPorDepartamentoArgentina,{id:'10077'},1)
