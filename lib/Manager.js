const Employee = require('./Employee')

const managerQuestionArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the managers name?"
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did the manager attend?'
    },

]
class Manager extends Employee {
    
}