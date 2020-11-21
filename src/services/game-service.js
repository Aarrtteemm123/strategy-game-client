import http from "../http-common"

class GameService {

    getAll(userId)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        return http.get(`/game/${userId}`)
    }

    changeTax(userId,nameTax,newValue)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_tax : nameTax,
            new_value : newValue
        }
        return http.put(`/game/change_taxes/${userId}`,data)
    }

    upgradeTechnology(userId,nameTechnology)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_technology:nameTechnology
        }
        return http.put(`/game/upgrade_technology/${userId}`,data)
    }

    buildIndustry(userId,nameBuilding)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_building:nameBuilding
        }
        return http.put(`/game/build_industry/${userId}`,data)
    }

    removeIndustry(userId,nameBuilding)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_building:nameBuilding
        }
        return http.put(`/game/remove_industry/${userId}`,data)
    }

    upgradeWarehouse(userId,nameWarehouse)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_warehouse:nameWarehouse
        }
        return http.put(`/game/upgrade_warehouse/${userId}`,data)
    }

    setPoliticsLaw(userId,nameLaw)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_law:nameLaw
        }
        return http.put(`/game/set_law/${userId}`,data)
    }

    cancelPoliticsLaw(userId,nameLaw)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_law:nameLaw
        }
        return http.put(`/game/cancel_law/${userId}`,data)
    }

    buyGoods(userId,nameGoods,number)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/buy_goods/${userId}`,data)
    }

    sellGoods(userId,nameGoods,number)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/sell_goods/${userId}`,data)
    }

    editArmy(userId,nameUnit,newNumber)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        let data = {
            name_unit:nameUnit,
            new_number:newNumber
        }
        return http.put(`/game/edit_army/${userId}`,data)
    }

    calculateWar(userId,defendingPlayerName)
    {
        userId = '5fb9425dd57895300fc7a8a7'
        return http.post(`/game/calculate_war/${userId}/${defendingPlayerName}`)
    }

}

export default new GameService()
