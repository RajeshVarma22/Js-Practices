//While declaring the main js file you have towrite type = "module" in HTML file

import { Employee } from "../34 Modules/Employee.js";
import { Customer } from "../34 Modules/Customer.js";
import { MyDetails } from "../33 Subclasses, Inheritance.js";
import { ExtraDetails } from "../33 Subclasses, Inheritance.js";
import { WorkDetails } from "../33 Subclasses, Inheritance.js";

let employee = new Employee('Jhon', 'Doe', 34, 'Software Developer');
console.log(employee);
console.table(employee);

let cutomerDeatils = new Customer('Ringee', 'Villey', 21 , 'Data Analyst', 'Bengaluru, India')
console.log(cutomerDeatils)
cutomerDeatils.greet();

let myDeatials = new MyDetails("Gireesh", "Poojari", 21);
myDeatials.greet();
console.log(myDeatials);

let workingDetails =  new WorkDetails("Gireesh", "Poojari", 21, "Gorantla", "Software Engineer")
console.log(workingDetails);

let extarDetails = new ExtraDetails("Gireesh", "Poojari", 21, "Gorantla")
console.log(extarDetails);


let allDeatails = [employee, cutomerDeatils, myDeatials, workingDetails, extarDetails];
console.log(allDeatails);
console.table(allDeatails);