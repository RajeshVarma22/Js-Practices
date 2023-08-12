let employees = [{id : 1, name : "SRAVAN", age : 21},
                 {id : 2, name : "RAGHAVAN", age : 22},
                 {id : 3, name : "SUDHAN", age : 23}]

let createEmployee = (employee) => {
    return new Promise( (resolve , reject) => {
        employees.push(employee)
        isDone =  true;
        if (isDone) {
            resolve();
        }
        else {
            reject('Creation was not done successfully')
        }
    });
};

let getEmployees = () => {
    let employeeRows = '';
    employees.forEach(employee => {
        employeeRows += `<tr>
                            <td>${employee.id}</td>     
                            <td>${employee.name}</td>     
                            <td>${employee.age}</td>
                        </tr>`     
    });
    document.querySelector('#empData').innerHTML = employeeRows;
};

createEmployee({id : 4, name : "SUJAN", age : 24}).then( () => {
    setTimeout( ()=> {
        getEmployees();
    },2000)
}).catch( (msg)=> {
    document.querySelector('#err').innerHTML = msg;
});
