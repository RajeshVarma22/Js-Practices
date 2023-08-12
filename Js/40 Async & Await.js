let employees = [{id : 1, name : "RAGHAV 1", age : 22},
                {id : 2, name : "RAGHAV 2", age : 23},
                {id : 3, name : "RAGHAV 3", age : 24}]

let createEmployee = (employye) => {
    setTimeout( () => {
        return new Promise( (resolve , reject) => {
            employees.push(employye);
            isDone = true;
            if(isDone) {
                resolve();
            }
            else {
                reject("Creation was not done successfully");
            }
        });
     },2000);
};

let showEmployee = () => {
    setTimeout( () => {
        let list = '';
        employees.forEach( (employee) => {
            //Here you can use for of like this for(let employee of employees){ ... } if you use forin then the values will be undefined. 
            list += `<tr>
                    <td>${employee.id}</td> 
                    <td>${employee.name}</td> 
                    <td>${employee.age}</td>` 
        });
        document.querySelector('#table').innerHTML = list;
    },1000);
}

// createEmployee({id : 4, name : "RAGHAV 4", age : 25}).then( (msg) => {
//     showEmployee();
//     document.querySelector('#message').innerText = msg;
// }).catch( (msg) => {
//     document.querySelector('#message').innerText = msg;
// });

let someFun = async () => {
    let result = await createEmployee({ id: 4, name: "RAGHAV 4", age: 25 });
    showEmployee();
};
someFun();

// createEmployee({ id: 4, name: "RAGHAV 4", age: 25 });
// showEmployee();