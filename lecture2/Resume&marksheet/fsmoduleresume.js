const fs = require("fs");
const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.statusCode = 200;
    const obj = url.parse(req.url, true).query;

    let resumeText = `    
    ${obj.name},
    Email : ${obj.email},
    Phone No. : ${obj.phone},

    Summary : 
    Experience Professional with skills in ${obj.prskills}

    Experience : 
    Company Name : ${obj.company} (${obj.comduration})
    Designation : ${obj.designation}

    Education : 
    ${obj.degree} in ${obj.branch} (${obj.year})
    - ${obj.university}

    Skills: 
    -  ${obj.skills}
    `;

    if (Object.keys(obj).length > 0) {
      //   fs.open("resume.txt", (err) => {
      //     if (err) throw err;
      //   });

      fs.writeFile("resume.txt", resumeText, (err) => {
        if (err) throw err;
        console.log("Resume Saved!");
      });
      // fs.appendFile("resume.txt", resumeText, (err) => {
      //   if (err) throw err;
      //   console.log("Saved!");
      // });
    }

    //   fs.readFile("resume.txt", (err, data) => {
    //     if (err) throw err;
    //     let array = data.toString().split(",");
    //     for (let i of array) {
    //       console.log(i);
    //     }
    //     console.log(array);
    //   });

    //   fs.rename("resume.txt", "resumeOne.txt", (err) => {
    //     if(err) throw err
    //     console.log('Name Changed')
    //   })

    //   fs.unlink("resumeOne.txt", (err) => {
    //     if (err) throw err;
    //     console.log("File Deleted");
    //   });

    res.setHeader("content-type", "text/html");
    res.write("<h3>To check the changes check resume.txt file</h3>");
    res.end();
  })
  .listen(3000);
