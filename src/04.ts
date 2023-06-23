import {GovernmentBuildings, HouseType} from "./022";
import {CityType} from "./022";


export const addMoneyToBudget = (building: GovernmentBuildings, budget: number) => {
    building.budget += budget
}

export const repairHouse = (city: HouseType) => {
    city.repaired = true
}

export const toFireStaff = (building: GovernmentBuildings, staffToFire: number) => {
    building.staffCount -= staffToFire
}

export const toHireStaff = (building: GovernmentBuildings, staffToIncrease: number) => {
    building.staffCount += staffToIncrease
}

export const createMessage = (city: CityType) => {
    return 'Hello New York citizens, for all 1000000'
}