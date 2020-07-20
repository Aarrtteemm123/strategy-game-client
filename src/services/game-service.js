import http from "../http-common"

class GameService {

    getAll(userId)
    {
        return http.get(`/game/${userId}`)
    }

    changeTax(userId,nameTax,newValue)
    {
        let data = {
            name_tax : nameTax,
            new_value : newValue
        }
        return http.post(`/game/change_taxes/${userId}`,data)
    }

    upgradeTechnology(userId,nameTechnology)
    {
        let data = {
            name_technology:nameTechnology
        }
        return http.post(`/game/upgrade_technology/${userId}`,data)
    }

    buildIndustry(userId,nameBuilding)
    {
        let data = {
            name_building:nameBuilding
        }
        return http.post(`/game/build_industry/${userId}`,data)
    }

    removeIndustry(userId,nameBuilding)
    {
        let data = {
            name_building:nameBuilding
        }
        return http.post(`/game/remove_industry/${userId}`,data)
    }

    upgradeWarehouse(userId,nameWarehouse)
    {
        let data = {
            name_warehouse:nameWarehouse
        }
        return http.post(`/game/upgrade_warehouse/${userId}`,data)
    }

    setPoliticsLaw(userId,nameLaw)
    {
        let data = {
            name_law:nameLaw
        }
        return http.post(`/game/set_law/${userId}`,data)
    }

    cancelPoliticsLaw(userId,nameLaw)
    {
        let data = {
            name_law:nameLaw
        }
        return http.post(`/game/cancel_law/${userId}`,data)
    }

    buyGoods(userId,nameGoods,number)
    {
        let data = {
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/buy_goods/${userId}`,data)
    }

    sellGoods(userId,nameGoods,number)
    {
        let data = {
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/sell_goods/${userId}`,data)
    }

    editArmy(userId,nameUnit,newNumber)
    {
        let data = {
            name_unit:nameUnit,
            new_number:newNumber
        }
        return http.post(`/game/edit_army/${userId}`,data)
    }

    calculateWar(userId,defendingPlayerId)
    {
        let data = {
            defending_player_id:defendingPlayerId,
        }
        return http.post(`/game/calculate_war/${userId}`,data)
    }

}

export default new GameService()
