import axios from 'axios'

class ProductService {

    constructor(){
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/product`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getProducts() {
        return this.api.get('/all')
    }
}

const productService = new ProductService()

export default productService