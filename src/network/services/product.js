import axios from "axios"
const baseUrl = "https://jomgiftapi.gaincue.com/api/v1"

// get asingle product
const get = async (id) => {
    return await axios.get(`${baseUrl}/products/${id}`)
}

// get all products
const getAll = async () => {
    return await axios.get(baseUrl + "/products")
}

export default {
    get, getAll
}