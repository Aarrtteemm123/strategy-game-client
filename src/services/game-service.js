import http from "../http-common"
class GameService {
    getAll(user_id)
    {
        return http.get(`/game/${user_id}`)
    }
}

export default new GameService()
