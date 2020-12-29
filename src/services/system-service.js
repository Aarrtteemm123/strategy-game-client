import http from "@/http-common";

class SystemService {

    getView(userId,nameView)
    {
        userId = '5fe23834c34647d8fb3b9a99'
        return http.get(`/game/get_view/${userId}/${nameView}`)
    }

    setSetting(userId, settingList)
    {
        userId = '5fe23834c34647d8fb3b9a99'
        let data = {
            setting_list: settingList
        }
        return http.put(`/game/set_setting/${userId}`,data)
    }

    sendFeedback(userId,rating,msg)
    {
        userId = '5fe23834c34647d8fb3b9a99'
        let data = {
            rating:rating,
            msg:msg,
        }
        return http.post(`/game/feedback/${userId}`,data)
    }

    findPlayer(userId,namePlayer)
    {
        userId = '5fe23834c34647d8fb3b9a99'
        return http.post(`/game/find/${userId}/${namePlayer}`)
    }
}

export default new SystemService()
