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

    fetchItemsByOrder = async (status,order) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/item/getOrder/'+status+'/'+order,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateQty = async (id,body)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.put('/item/updateQty/'+id,body)
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

    updateCart = async (id,data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.put(`/cart/update/${id}`,data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getCart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/cart/get/userBy/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getACart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/cart/get/'+id,{
            })
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

    savePayment = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/payment/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    saveUser = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/user/register',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    userLogin = async (email,password) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/user/login/'+email+'/'+password)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getUser = async (email,password) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/user/get/'+email+'/'+password)
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