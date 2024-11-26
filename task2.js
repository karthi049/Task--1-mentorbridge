//dataset for employees
export const employeeList = [
    { id: 101, name: "wayne", department: "HR", salary: 40000, bonusPercentage: 10 },
    { id: 102, name: "debbie", department: "Engineering", salary: 60000, bonusPercentage: 15, yearsOfExperience: 3 },
    { id: 103, name: "jordi", department: "Sales", salary: 50000, bonusPercentage: 5, sales: 120000 },
    { id: 101, name: "wayne", department: "HR", salary: 40000, bonusPercentage: 10 },
    { id: 104, name: "Eve", department: "Engineering", salary: 70000, bonusPercentage: 15, yearsOfExperience: 1 },
    { id: 105, name: "jenny", department: "Sales", salary: 45000, bonusPercentage: 5, sales: 80000 },
   
];


const uniqueSet = new Set();

const uniqueEmployeeList = [];

const chosenDepartment = "Engineering";

function removeDupliactes(){
    for(const employee of employeeList){
        if(!uniqueSet.has(employee.id)){
            uniqueSet.add(employee.id);
            uniqueEmployeeList.push(employee);
        }

    }
    // console.log( uniqueEmployeeList);
     return uniqueEmployeeList;
}

function filterChoosenDepartment(uniqueEmployee){
    return uniqueEmployee.filter(employee => chosenDepartment.includes(employee.department))
}

function calculateBonus(filteredDepartment){


    for(let employee of filteredDepartment ){
       
        let bonus = (employee.salary * employee.bonusPercentage)/100;

        if(employee.department == "HR"){
            if(employee.salary < 50000){
                bonus += (employee.salary*10)/100;
            }

            else if(employee.department == "Engineering"){
                if(yearsOfExperience > 2){
                    bonus += (employee.salary*15)/100;
                }

                else{
                switch(employee.department){
                    case 1:
                        (employee.sales < 100000)
                        bonus += (employee.salary*5)/100;
                        break;
                    case 2:
                        (employee.sales >= 100000 && employee.sales <= 500000 )
                        bonus += (employee.salary*10)/100;
                        break; 
                     case 3:
                            (employee.sales > 500000)
                            bonus += (employee.salary*20)/100;
                            break;     

                }
                }
          }

        }
    }
    employee.bonus = bonus;
    employee.totalCompensation = employee.salary + bonus;
    console.log(employee.bonus);
}

function report(){

}

function updatedEmployeeList(){
    removeDupliactes();
    const filteredDepartment = filterChoosenDepartment(uniqueEmployeeList);
    console.log(chosenDepartment);
    console.log(filteredDepartment);
    calculateBonus();

}

updatedEmployeeList();