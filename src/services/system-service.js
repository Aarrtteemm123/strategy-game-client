import http from "@/http-common";

class SystemService {

    getView(userId,token,nameView)
    {
        let data = {
            token: token,
        }
        return http.post(`/game/get_view/${userId}/${nameView}`,data)
    }

    setSetting(userId, token, settingList)
    {
        let data = {
            token: token,
            setting_list: settingList
        }
        return http.put(`/game/set_setting/${userId}`,data)
    }

    sendFeedback(userId,token,rating,msg)
    {
        let data = {
            token: token,
            rating:rating,
            msg:msg,
        }
        return http.post(`/game/feedback/${userId}`,data)
    }

    findPlayer(userId,token,namePlayer)
    {
        let data = {
            token: token
        }
        return http.post(`/game/find/${userId}/${namePlayer}`,data)
    }
}

export default new SystemService()
