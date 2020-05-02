const opt = {
  base: {
    demand: true,
    alias:'b'
  },
  limite: {
      alias: 'l',
      default: 10
  }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
                .command('crear', 'Crea un archivo de texto de una tabla de multiplicar segun base y limite', opt)
                .help()
                .argv;

module.exports = {
  argv
}                