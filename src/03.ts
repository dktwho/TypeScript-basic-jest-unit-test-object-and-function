import {StudentType} from "./02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.stack.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}
