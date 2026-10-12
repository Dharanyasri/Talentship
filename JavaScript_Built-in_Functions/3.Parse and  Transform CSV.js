// Problem: Convert the CSV string into an array of objects. Trim whitespace and convert numeric values to numbers.

const csv = `name,age,score
 Alice , 22 , 88
Bob,30,92
Carol, 25 , not-a-number`;

// Expected Output:

// [
//   { name: "Alice", age: 22, score: 88 },
//   { name: "Bob", age: 30, score: 92 },
//   { name: "Carol", age: 25, score: "not-a-number" }
// ]

const rows = csv.split("\n");

const headers = rows[0]
    .split(",")
    .map(header => header.trim());

const result = rows.slice(1).map(row => {

    const values = row
        .split(",")
        .map(value => value.trim());

    return headers.reduce((obj, header, index) => {

        const value = values[index];

        obj[header] = isNaN(value) ? value : Number(value);

        return obj;

    }, {});

});

console.log(result); 