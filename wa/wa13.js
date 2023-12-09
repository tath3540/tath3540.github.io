// Problem 1
console.log("Problem 1:");

const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];

const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};

console.log(company);

// Problem 2
console.log("\nProblem 2:");

const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

console.log(company);

// Problem 3
console.log("\nProblem 3:");

const totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);

// Problem 4
console.log("\nProblem 4:");

company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
});

console.log(company);

// Problem 5
console.log("\nProblem 5:");

const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

console.log(company);
