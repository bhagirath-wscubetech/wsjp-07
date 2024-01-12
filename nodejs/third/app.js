const fs = require('fs');
// writeFile
// fs.writeFile(
//     "demo.txt",
//     "Hello",
//     (err) => {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log('File created');
//         }
//     }
// )
// fs.readFile(
//     "demo.txt",
//     "utf-8",
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("data", data);
//         }
//     }
// )
// fs.writeFileSync("demo.txt", 'This is the testing data');
// const data = fs.readFileSync("demo.txt", "utf-8");

// fs.unlink("demo.txt", (err) => console.log(err));
// fs.unlinkSync("demo.txt");

fs.appendFile("demo.txt"," Hiiiiiiii", (err) => console.log(err));