import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/products/";
    baseUrl = "https://mongo-api-server.onrender.com/api/";

    create(product){
        return axios.post(this.baseUrl+"products/create", product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl+"products").then(res => res.data);
    }

    update(product){
        return axios.put(this.baseUrl+"products/update/"+product._id, product).then(res => res.data);
    }

    delete(id){
        return axios.delete(this.baseUrl+"products/delete/"+id).then(res => res.data);
    }
}