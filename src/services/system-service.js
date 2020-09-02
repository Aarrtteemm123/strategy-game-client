import http from "@/http-common";

class SystemService {

    getView(userId,nameView)
    {
        return http.get(`/game/get_view/${userId}/${nameView}`)
    }

    sendFeedback(userId,rating,msg)
    {
        let data = {
            rating:rating,
            msg:msg,
        }
        return http.post(`/game/feedback/${userId}`,data)
    }

}

export default new SystemService()
