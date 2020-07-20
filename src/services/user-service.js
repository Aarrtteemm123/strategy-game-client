import http from "../http-common"

class UserService {

    login(data)
    {
        return http.post("/login", data);
    }

    logout(id)
    {
        return http.post(`/game/${id}`);
    }

    register(username,password,email,countryName,linkOnFlag)
    {
        let data = {
            username : username,
            password : password,
            email : email,
            countryName : countryName,
            linkOnFlag : linkOnFlag
        }
        return http.post('/register',data)
    }

    delete(user_id)
    {
        return http.delete(`/game/delete_account/${user_id}`)
    }
}

export default new UserService()
