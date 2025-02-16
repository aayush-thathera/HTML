const fs= require("fs");
fs.readFile ('intput.text',funtion (error,data){
    if (err) return console.error(err);
    console.log (data.toString());
});
console.log("End of Program execution");