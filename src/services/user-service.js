import http from "../http-common"

class UserService {

    login(username,password)
    {
        return http.post(`/login/${username}/${password}`);
    }

    logout(userId,token)
    {
        let data = {
            token: token
        }
        return http.post(`/logout/${userId}`,data);
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

    changeUserData(userId,token,password,email,countryName,linkOnFlag)
    {
        let data = {
            token: token,
            password : password,
            country_name : countryName,
            link_on_flag : linkOnFlag
        }
        return http.put(`/game/change_user_data/${userId}`,data)
    }

    delete(userId,token,password)
    {
        let data = {
            token: token
        }
        return http.delete(`/game/delete_account/${userId}/${password}`,data)
    }
}

export default new UserService()
