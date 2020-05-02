// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================'.green);
    console.log(`== Tabla de ${base} ==`.yellow);
    console.log('======================'.blue);

    for(let i = base; i <= limite; i++) {
        console.log(`${base} * ${limite} = ${base * limite}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } 
        
        let data = '';

        for(let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }   


        // fs.writeFile('ubicacion', dataAGrabar, callback)

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.yellow)
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}


