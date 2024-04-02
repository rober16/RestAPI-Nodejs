//Leer un json en ESmodules recomendado por ahora
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path) 