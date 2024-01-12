const fs = require("fs");

// fs.writeFile("demo.txt","Hello", () => {});
fs.unlink("demo.txt",() => {});
// async function getData() {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     console.log(data);
// }
// getData();