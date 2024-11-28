/**
 * Deep Copy and Shallow Copy
 */
let employeeDetails = {
    name: 'Ashish',
    empId: 2231,
    location: 'Delhi',
    project : {
        pName: 'Frontend'
    }
}
//shallow Copy
// let employeeCopy = employeeDetails;
//Object.assign
// let employeeCopy = Object.assign({}, employeeDetails);
//spread operator
// let employeeCopy = {...employeeDetails};
// employeeCopy.empId = 2235;
// employeeCopy.location = 'Mumbai';
// employeeCopy.name = 'Arun';
// employeeCopy.project.pName = 'Backend';
// console.log('employeeDetails',employeeDetails);
// console.log('employeeCopy',employeeCopy);

//Deep Copy JSON way
let employeeCopy = JSON.parse(JSON.stringify(employeeDetails));
employeeCopy.name = 'Arun';
employeeCopy.project.pName = 'Backend';
console.log('employeeDetails',employeeDetails);
console.log('employeeCopy',employeeCopy);

