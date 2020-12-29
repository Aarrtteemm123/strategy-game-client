import http from "../http-common"

class UserService {

    login(username,password)
    {
        return http.post(`/login/${username}/${password}`);
    }

    logout(userId)
    {
        return http.post(`/logout/${userId}`);
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
        userId = '5fe23834c34647d8fb3b9a99'
        let data = {
            username : username,
            password : password,
            country_name : countryName,
            link_on_flag : linkOnFlag
        }
        return http.put(`/game/change_user_data/${userId}`,data)
    }

    delete(userId,password)
    {
        userId = '5fe23834c34647d8fb3b9a99'
        return http.delete(`/game/delete_account/${userId}/${password}`)
    }
}

export default new UserService()
