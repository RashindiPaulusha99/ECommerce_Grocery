import axios from "../data/axios";

class HomeService {

    cartPost = async (data) =>{
        console.log(data)
        const promise = new Promise((resolve, reject) =>{
            axios.post('carts',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }


    fetchBrand = async () =>{
        const promise = new Promise((resolve, reject) =>{

            axios.get('brand/getAll')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchCategory = async ()=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/category/getAll',{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }
}

export default new HomeService();