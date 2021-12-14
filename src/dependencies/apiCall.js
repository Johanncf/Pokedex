import axios from 'axios';

const request = axios.create({baseURL: "https://pokeapi.co/api/v2/pokemon/"})

export const getPokemons =  async (url) => {

    try {
        let response = await request.get(url)
        return response.data

    } catch (e) {
        console.log(e)
    }

}

export const getStats = async (url) => {

    try {
        let response = await request.get(url)
        return response.data
        
    } catch (e) {
        console.log(e)
    }
    
}
