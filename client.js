const employees = [{
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

for (let i = 0; i < employees.length; i++) {
  console.log(bonusCalculator(employees[i]))
};

function bonusCalculator(employee) {
  let percentage;
  let totalComp;
  let bonusAmount;

  if (employee.reviewRating <= 2) {
    percentage = 0;
  } else if (employee.reviewRating == 3) {
    percentage = 4;
  } else if (employee.reviewRating == 4) {
    percentage = 6;
  } else {
    percentage = 10;
  }

  if (employee.employeeNumber.length == 4) {
    percentage += 5;
  }

  if (employee.annualSalary > 65000) {
    percentage -= 1;
  }

  if (percentage > 13) {
    percentage = 13;
  } else if (percentage < 0) {
    percentage = 0;
  }

  bonusAmount = Math.round(percentage * employee.annualSalary * .01);
  totalComp = bonusAmount + Number(employee.annualSalary);

  let output = {
    name: employee.name,
    bonusPercentage: percentage,
    totalCompensation: totalComp,
    totalBonus: bonusAmount
  }
  return output;
}