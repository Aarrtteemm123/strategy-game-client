import http from "@/http-common";

class SystemService {

    getView(userId,nameView)
    {
        userId = '5fb932dc71f0f0d774134cc6'
        return http.get(`/game/get_view/${userId}/${nameView}`)
    }

    sendFeedback(userId,rating,msg)
    {
        userId = '5fb92cde490b69cce9f464df'
        let data = {
            rating:rating,
            msg:msg,
        }
        return http.post(`/game/feedback/${userId}`,data)
    }

}

export default new SystemService()
