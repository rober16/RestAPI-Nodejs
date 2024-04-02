import { randomUUID } from 'node:crypto';
import { readJSON } from '../utils.js'
const movies = readJSON('../movie.js')

export class MovieModel{
    static async getAll ({genre}) {
        if(genre){
            return movies.filter(
                movie => movie.genre.includes(genre)
            )
        }
        return movies
    }

    static async getById ({ id }) {
        const movie = movies.find(movie => movie.id === id)
        return movie
    }

    static async create ({ input }) {
        const newMovie = {
          id: randomUUID(),
          ...input
        }
    
        movies.push(newMovie)
    
        return newMovie
    }

    static async delete ({ id }) {
        const movieIndex = movies.findIndex(movie => movie.id === id)
        if (movieIndex === -1) return false
    
        movies.splice(movieIndex, 1)
        return true
    }
    
    static async update ({ id, input }) {
        const movieIndex = movies.findIndex(movie => movie.id === id)
        if (movieIndex === -1) return false
    
        movies[movieIndex] = {
          ...movies[movieIndex],
          ...input
        }
    
        return movies[movieIndex]
    }
}