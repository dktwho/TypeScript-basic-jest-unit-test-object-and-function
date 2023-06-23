export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<GovernmentBuildings>,
    citizensNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType

}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GovernmentBuildings = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressGovernmentBuildingType
}

export type AddressGovernmentBuildingType = {
    street: StreetGovernmentBuildingType
}

export type StreetGovernmentBuildingType = {
    title: string
}