import http from "../http-common"

class UserService {

    login(data)
    {
        return http.post("/login", data);
    }

    logout(userId)
    {
        return http.post(`/game/${userId}`);
    }

    register(username,password,email,countryName,linkOnFlag)
    {
        let data = {
            username : username,
            password : password,
            email : email,
            country_name : countryName,
            link_on_flag : linkOnFlag
        }
        return http.post('/register',data)
    }

    changeUserData(userId,username,password,email,countryName,linkOnFlag)
    {
        let data = {
            username : username,
            password : password,
            email : email,
            country_name : countryName,
            link_on_flag : linkOnFlag
        }
        return http.post(`/game/change_user_data/${userId}`,data)
    }

    delete(userId)
    {
        return http.delete(`/game/delete_account/${userId}`)
    }
}

export default new UserService()
