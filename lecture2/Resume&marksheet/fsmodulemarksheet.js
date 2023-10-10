const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.statusCode = 200;
    const obj = url.parse(req.url, true).query;
    const { sub1, sub2, sub3, sub4, sub5 } = obj;
    let marks = {
      PHY: parseInt(sub1),
      CHEM: parseInt(sub2),
      MATH: parseInt(sub3),
      Eng: parseInt(sub4),
      Hindi: parseInt(sub5),
    };
    let totalmarks = 0;
    let count = 0;
    let result1 = "";
    let grace = 0;
    let per = 0;
    let dist = "";
    let message = "";

    for (let key in marks) {
      if (parseInt(marks[key]) < 0 || parseInt(marks[key]) > 100) {
        message = "Invalid Marks";
        break;
      }
      if (parseInt(marks[key]) < 33) {
        grace = parseInt(marks[key]);
        count++;
      }
      if (parseInt(marks[key]) >= 75) {
        dist += key + " ";
      }
      if (message == "") {
        if (count == 0 || (count == 1 && grace >= 28)) {
          result1 = "Pass";
          totalmarks += parseInt(marks[key]);
          per = totalmarks / 5;
          if (per >= 33 && per < 45) {
            result1 += " with third division";
          } else if (per < 60) {
            result1 += " with second division";
          } else {
            result1 += " with first division";
          }
          if (grace > 0) {
            result1 += " pass by grace and grace marks is " + (33 - grace);
          }
          if (dist != "") {
            result1 += " Distinction subject is " + dist;
          }
        } else if (count == 1) {
          result1 = "Suppl";
        } else {
          result1 = "Fail";
        }
      } else {
        result1 = "Subject Marks should be 0 to 100";
      }
    }

    const resultData = `

        Subject Name     Marks Obtained      Max Marks   
        
        Physics             ${sub1}               100    

        Chemistry           ${sub2}               100

        Math                ${sub3}               100    
        
        English             ${sub4}               100    
        
        Hindi               ${sub5}               100        


        Total Marks         ${totalmarks}              500

        Result : ${result1}        

        `;
    if (Object.keys(obj).length > 0) {
      // fs.open('printmarksheet.txt' , (err) => {
      //     if(err) throw err
      //     console.log('File Created')
      // })
      
      fs.writeFile("printmarksheet.txt", resultData, (err) => {
        if (err) throw err;
        console.log("Marksheet Saved!");
      });

      // fs.appendFile("printmarksheet.txt", resultData, (err) => {
      //   if (err) throw err;
      //   console.log("Marksheet Saved!");
      // });

      // fs.rename("printmarksheet.txt", "marksheetprint.txt", (err) => {
      //   if (err) throw err;
      //   console.log("File Renamed");
      // });

      // fs.unlink("printmarksheet.txt", (err) => {
      //   if (err) throw err;
      //   console.log("File Deleted");
      // });
    }

    res.setHeader("content-type", "text/html");
    res.write("<h3>To check the changes check printmarksheet.txt file</h3>");
    res.end();
  })
  .listen(2000);
