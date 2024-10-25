interface student {
    firstName: string;
    lastName: string;
    age:    number;
    location: string;
}

const student1: student = {
    firstName: 'JOE',
    lastName: 'ONYONGO',
    age: 26,
    location: 'Kibera'
};

const student2: student = {
    firstName: 'ANTONY',
    lastName: 'ANEKEYA',
    age:  30,
    location: 'Lindi'
};

const studentList: student[] = [student1, student1];

//select the body /specific container to append the table
const body = document.querySelector('body');

//create the table element.
const table = document.createElement("table");

//append rows for each student.
studentList.forEach((student) => {
    const row = document.createElement("tr");

    //create a cell for firstname.
    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    row.appendChild(nameCell);

    //create cell for the student's location.
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    //Append the row to the table.
    table.appendChild(row);
});

//Append the table to the body/container.
body?.appendChild(table);