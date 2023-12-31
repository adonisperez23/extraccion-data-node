import axios from "axios"
import fs from "fs"

export async function obtenerProvinciasArgentina(endpoint){
  try {
    let provincias = await axios.get(endpoint)
    let stringData = null
    let jsonData = null
    if(provincias){
      stringData = JSON.stringify(provincias.data)
      fs.writeFile('argentina/provincias.json', JSON.stringify(provincias.data, null, 2), (err) => {
        if (err) throw err;
         console.log('Data written to file');
       });
      jsonData = JSON.parse(stringData)
      console.log("provincias", jsonData)
    } else{
      console.log("ha ocurrido un error")
    }
  } catch (e) {
    console.log("error",e)
  }
}

export async function obtenerDepartamentosPorProvincia(endpoint){
  try {
    let provincias = fs.readFileSync('./argentina/provincias.json')
    let provinciasJson = JSON.parse(provincias)
    provinciasJson.provincias.forEach((item, i) => {
      let stringData = null
      let jsonData = null

      axios.get(`${endpoint}${item.nombre}&max=200`)
        .then((res)=>{
          // stringData = JSON.stringify(res.data)
          // jsonData = JSON.parse(stringData)
          fs.writeFile(`departamentos-provincia-id-${item.id}.json`, JSON.stringify(res.data, null, 2), (err) => {
            if (err) throw err;
             console.log(`Data written to file ${i}`);
           });
        })
        .catch((err)=>{
          console.log('error al llamar departamentos',err)
        })

    });
  } catch (e) {
    console.log("error",e)
  }
}
export async function obtenerDepartamentosPorProvinciaIndividual(endpoint,objeto){
  try {
    // let provincias = fs.readFileSync('./argentina/provincias.json')
    // let provinciasJson = JSON.parse(provincias)

    axios.get(`${endpoint}${objeto.id}&max=200`)
        .then((res)=>{
          // stringData = JSON.stringify(res.data)
          // jsonData = JSON.parse(stringData)
          fs.writeFile(`departamentos-provincia-id-${objeto.id}.json`, JSON.stringify(res.data, null, 2), (err) => {
            if (err) throw err;
             console.log(`Data written to file`);
           });
        })
        .catch((err)=>{
          console.log('error al llamar departamentos',err)
        })

  } catch (e) {
    console.log("error",e)
  }
}


export async function obtenerLocalidadesPorDepartamento(endpoint,departamento,i){
  try {
    // let rawData = null
    let localidades = await axios.get(`${endpoint}${departamento.id}`)
    if(localidades){

      fs.writeFile(`argentina/localidades/localidades-departamento-id-${departamento.id}.json`, JSON.stringify(localidades.data, null, 2), (err) => {
        if (err) throw err;
         console.log(`Data written to file index ${i}`);
       });
    }

  } catch (e) {
    console.log("error al obtener localidades de argentina",e.request._options.search)
    fs.writeFile(`argentina/localidades/${e.request._options.search}.json`, JSON.stringify({error:`${e.config.url}`}, null, 2), (err) => {
      if (err) throw err;
       console.log(`Data written to error file index ${i}`);
     });
  }
}

export async function iteradorProvinciasJsonFile(endpoint,jsonUrl){
  try {
    let departamentos = fs.readFileSync(jsonUrl)
    let departamentosJson = JSON.parse(departamentos)

    departamentosJson.departamentos.forEach((departamento, i) => {
      setTimeout(()=>{
        obtenerLocalidadesPorDepartamento(endpoint,departamento,i)
      },3000)
    });




  } catch (e) {
    console.log("error",e)
  }
}
