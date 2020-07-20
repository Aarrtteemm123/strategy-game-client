import http from "@/http-common";

class SystemService {
    getNews(userId)
    {
        return http.get(`/game/get_news/${userId}`);
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
