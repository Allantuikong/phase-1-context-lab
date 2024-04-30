/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

// Function to create an employee record
function createEmployeeRecord(dataArray) {
  return {
    firstName: dataArray[0],
    familyName: dataArray[1],
    title: dataArray[2],
    payPerHour: dataArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

// Function to create employee records from an array of arrays
function createEmployeeRecords(employeesArray) {
  return employeesArray.map(createEmployeeRecord);
}

// Function to create a timeIn event for an employee
function createTimeInEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  });
  return this;
}

// Function to create a timeOut event for an employee
function createTimeOutEvent(dateStamp) {
  let [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  });
  return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
  let timeIn = this.timeInEvents.find((event) => event.date === date);
  let timeOut = this.timeOutEvents.find((event) => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
  let hoursWorked = hoursWorkedOnDate.call(this, date);
  return hoursWorked * this.payPerHour;
}

// Function to find an employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((employee) => employee.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employee) => {
    return totalPayroll + allWagesFor.call(employee);
  }, 0);
}
