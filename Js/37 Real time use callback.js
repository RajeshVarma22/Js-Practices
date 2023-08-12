let employees = [{id : 1, name : "RV", age : 22},
                {id : 2, name : "RV", age : 23},
                {id : 3, name : "RV", age : 24}];

let createEmployee = (employee, callback1, a) => {
    setTimeout( () => {
        employees.push(employee);
        callback1();
    }, 2000);
    //if you write the below code then you will get the same result.
    // setTimeout ( () => {
    //     getEmployee();
    // },3000);
};

let getEmployee = () => {
    setTimeout( () => {
        let employeeRows = '';
        employees.forEach((employee) => {
            employeeRows += `<tr class = "text-danger">
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.age}</td>
                            </tr>`
        });
        document.querySelector('#table-body').innerHTML = employeeRows;
    },1000)
};

getEmployee();
createEmployee({id : 4, name : "RV", age : 25}, getEmployee);

