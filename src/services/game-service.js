import http from "../http-common"

class GameService {

    changeTax(userId,token,nameTax,newValue)
    {
        let data = {
            token: token,
            name_tax : nameTax,
            new_value : newValue
        }
        return http.put(`/game/change_taxes/${userId}`,data)
    }

    upgradeTechnology(userId,token,nameTechnology)
    {
        let data = {
            token: token,
            name_technology:nameTechnology
        }
        return http.put(`/game/upgrade_technology/${userId}`,data)
    }

    buildIndustry(userId,token,nameBuilding)
    {
        let data = {
            token: token,
            name_building:nameBuilding
        }
        return http.put(`/game/build_industry/${userId}`,data)
    }

    removeIndustry(userId,token,nameBuilding)
    {
        let data = {
            token: token,
            name_building:nameBuilding
        }
        return http.put(`/game/remove_industry/${userId}`,data)
    }

    upgradeWarehouse(userId,token,nameWarehouse)
    {
        let data = {
            token: token,
            name_warehouse:nameWarehouse
        }
        return http.put(`/game/upgrade_warehouse/${userId}`,data)
    }

    setPoliticsLaw(userId,token,nameLaw)
    {
        let data = {
            token: token,
            name_law:nameLaw
        }
        return http.put(`/game/set_law/${userId}`,data)
    }

    cancelPoliticsLaw(userId,token,nameLaw)
    {
        let data = {
            token: token,
            name_law:nameLaw
        }
        return http.put(`/game/cancel_law/${userId}`,data)
    }

    buyGoods(userId,token,nameGoods,number)
    {
        let data = {
            token: token,
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/buy_goods/${userId}`,data)
    }

    sellGoods(userId,token,nameGoods,number)
    {
        let data = {
            token: token,
            name_goods:nameGoods,
            number:number
        }
        return http.post(`/game/sell_goods/${userId}`,data)
    }

    editArmy(userId,token,nameUnit,newNumber)
    {
        let data = {
            token: token,
            name_unit:nameUnit,
            new_number:newNumber
        }
        return http.put(`/game/edit_army/${userId}`,data)
    }

    calculateWar(userId,token,defendingPlayerName)
    {
        let data = {
            token: token
        }
        return http.post(`/game/calculate_war/${userId}/${defendingPlayerName}`,data)
    }

}

export default new GameService()
