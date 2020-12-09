import http from "@/http-common";

class SystemService {

    getView(userId,nameView)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        return http.get(`/game/get_view/${userId}/${nameView}`)
    }

    setSetting(userId, settingList)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            setting_list: settingList
        }
        return http.put(`/game/set_setting/${userId}`,data)
    }

    sendFeedback(userId,rating,msg)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            rating:rating,
            msg:msg,
        }
        return http.post(`/game/feedback/${userId}`,data)
    }

    findPlayer(userId,namePlayer)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        return http.post(`/game/find/${userId}/${namePlayer}`)
    }
}

export default new SystemService()
