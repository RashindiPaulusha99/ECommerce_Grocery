import axios from "../data/axios";

class HomeService {

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
    
    fetchItems = async (status)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/item/getAll/'+status,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchItem = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/item/get/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    saveCart = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/cart/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getCart = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/cart/getAll')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteCart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/cart/delete/'+id,{
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