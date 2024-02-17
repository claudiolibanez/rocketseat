// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1GB - 1.0000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserção no banco de dados

// 10mb/s -> 10.000 linhas

// Readable Streams / Writable Streams

// Readable Streams - Lendo aos poucos
// Writable Streams - Enviando aos poucos

// Strams -> 

// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, enconding, callback) {
    const transformed = Number(chunk.toString()) * -1
    const buf = Buffer.from(String(transformed))

    callback(null, buf)
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, enconding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())