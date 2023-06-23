 export type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: AddressType;
    stack: Array<StackType>
}

type AddressType = {
    cityTitle: CityTitleType;
    streetTitle: string;
}

type CityTitleType = {
    title: string;
    country: string;
}

type StackType = {
    id: number;
    title: string;
}

 export const student = {
    id: 1,
    name: 'Bill',
    age: 32,
    isActive: false,
    address: {
        cityTitle: {
            title: 'Minsk',
            country: 'Belarus'
        },
        streetTitle: 'Supernova'
    },
    stack: [
        {id: 1, title: 'Html'},
        {id: 2, title: 'css'},
        {id: 3, title: 'react'},
        {id: 4, title: 'js'},
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.cityTitle.country)
console.log(student.stack[2].title)


