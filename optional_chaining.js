/**
 * Optional chaining
 */
let employeeDetails = {
    name: 'Ashish',
    employeeId: 2333,
    salary: 44344,
    // address: {
    //     city: 'Delhi'
    // },
    getAddress: function() {
        console.log('Delhi');
    },
    'address details': 'Delhi'
}
//console.log(employeeDetails.name);
//console.log(employeeDetails.address.city);
// console.log(employeeDetails['address details']);
// if(employeeDetails.address !==  undefined) {
//     console.log(employeeDetails.address.city);
// }else {
//     console.log('address is not present');
// }

//console.log(employeeDetails?.address?.city);
employeeDetails.getAddress();
employeeDetails.getCity?.();

