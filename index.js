import {
  provinciasArgentina,
  departamentosPorProvinciaArgentina,
  localidadesPorDepartamentoArgentina
} from './endpoints.js'
import {
  obtenerProvinciasArgentina,
  obtenerDepartamentosPorProvincia,
  iteradorProvinciasJsonFile
} from './argentina/funcionesArgentina.js'

// obtenerProvinciasArgentina(provinciasArgentina)
obtenerDepartamentosPorProvincia(departamentosPorProvinciaArgentina)
iteradorProvinciasJsonFile(localidadesPorDepartamentoArgentina)
