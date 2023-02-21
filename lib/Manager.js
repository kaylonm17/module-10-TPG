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
        message: "What is the managers id"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the managers email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the managers office number?"
    },

]
class Manager extends Employee {
    
}