
const url = 'http://localhost:3000/payroll'
fetch('http://localhost:3000/payroll')
.then(response => response.json())
.then(data => {

console.log(data);

const ul = document.querySelector('#time_sheet')
data.forEach(payroll => {
    const timeSheet = `${payroll.id} ${payroll.rate} ${payroll.overTime} ${payroll.firstName} ${payroll.lastName} ${payroll.jobTitle}`;
    const li = document.createElement('li')
    li.textContent = timeSheet
    ul.append(li);


    currentInfo = data
    const information = data.info

})

})

function postIndo(body) {
    return fetch('http://localhost:3000/payroll', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
  }




