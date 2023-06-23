import {StudentType} from "./02";
import {addSkill, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
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
})

test('new stack skill should be added to student', () => {
    expect(student.stack.length).toBe(4);
    addSkill(student, 'Vue');
    expect(student.stack.length).toBe(5);
    expect(student.stack[4].title).toBe('Vue');
    expect(student.stack[4].id).toBeDefined();
})

test('student should be made active ', () => {
    expect(student.isActive).toBe(false);
    makeStudentActive(student);
    expect(student.isActive).toBe(true);

})