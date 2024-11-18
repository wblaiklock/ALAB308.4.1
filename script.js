////Part 1+2////

const str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

let columns = str.split('\n');
let rows = [];    //2D Array;

for(let i = 0; i < columns.length; i++)
    rows[i] = columns[i].split(',');


////Part 3////

let objects = [];

for(let i = 1; i < rows.length; i++)
    objects[i-1] = {id:rows[i][0], name:rows[i][1],occupation:rows[i][2],age:rows[i][3]};


////Part 4////

objects.pop();

objects.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" });

objects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


////Part 5////

let CSVstr = "";

for(const obj of objects)
{
    for(const o in obj)
        CSVstr += obj[o] + ",";

    CSVstr = CSVstr.slice(0,-1);
    CSVstr += '\n';
}

console.log(CSVstr);