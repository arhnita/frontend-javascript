interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Anita',
    lastName: 'Samuel',
    age: 32,
    location: 'Lagos, Nigeria'
}

const student2: Student = {
    firstName: "Uchechi",
    lastName: "Uche",
    age: 33,
    location: "Lagos, Nigeria"
}

const studentsList: Array<Student> = [student1, student2]

const body = document.body;
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row)
})

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);

//styling for table

table.style.borderCollapse = 'collapse';
table.style.width = '100%'
const cells = table.querySelectorAll('th, td');
cells.forEach(cell => {
    (cell as HTMLElement).style.border = '1px solid black';
    (cell as HTMLElement).style.padding = '8px';
    (cell as HTMLElement).style.textAlign = 'left';
})