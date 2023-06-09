// Various classes not data related and not UI related
export default class MegaMindAPI{
    constructor() {
        this.baseUrl = "http://localhost:3000";
    }

    is_connected = () => {

    }

    getOneUser = (label_user) => {
        console.log(label_user)
        return new Promise ((resolve, reject) =>{
            console.log(`${this.baseUrl}/users/${label_user}`)
            fetch(`${this.baseUrl}/users/${label_user}`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getUsers = () => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/users`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    authUser =  (label_user, mdp_user) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/auth/login`, {
                method : "POST",
                body : JSON.stringify({label_user, mdp_user}),
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    creaUser = (label_user, mdp_user) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/users`, {
                method : "POST",
                body : JSON.stringify({label_user, mdp_user}),
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 201) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    // PARTIE PROFIL


    creaProfil = (data) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/profil`, {
                method : "POST",
                body : JSON.stringify(data),
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }



    delProfil = (id_profil) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/profil/${id_profil}`, {
                method : "DELETE",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 204) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }
    getAllProfilsFromIdUser = (id_user) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/profil/${id_user}`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getAllPostOfFollowedProfil = (id_profil) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/post/${id_profil}`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getAllPostFromIdProfil = (id_profil) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/post/own/${id_profil}`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }


    getMostFollowedProfil = () => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/profil`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getMostComPosts = () => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/post/most/com`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getMostLikedPosts = () => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/post/most/like`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    getProfilByIdProfil = (id_profil) => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/profil/idprofil/${id_profil}`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }


    // LES ROUTES SENSIBILITE !
    getAllSensi = () => {
        return new Promise ((resolve, reject) =>{
            fetch(`${this.baseUrl}/sensibilite/`, {
                method : "GET",
                headers : {'content-type' : 'application/json'}
            }) .then(res => {
                if (res.status === 200) {
                    resolve(res.json())
                } else {
                    reject(res.status)
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

}