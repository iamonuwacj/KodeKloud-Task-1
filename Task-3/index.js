const fs = require("fs");


const html_content = `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="./css/style.css">

<title>Document</title>

</head>

<body>

<h1>Welcome</h1>

<script src="./js/script.js"></script>

</body>

</html>`

const js_content = 'alert("Welcome")';

const css_content = `h1 {

    text-align:center;
    
    }`

try {
    fs.mkdirSync('frontend-scaffold');

    fs.open('frontend-scaffold/index.html', 'w', function (err) {
        fs.writeFileSync('frontend-scaffold/index.html', html_content)
        if (err) throw err;
    });
}  
catch (err) {
    if (err == "Error: EEXIST: file already exists, mkdir 'frontend-scaffold'"){
        null;
    } else {
        throw err;
    }
}

finally {
    fs.mkdir("frontend-scaffold/css", (err) => {
        if (err == "Error: EEXIST: file already exists, mkdir 'frontend-scaffold/css'") {
            null
        } 

        fs.open('frontend-scaffold/css/style.css', 'w', function (err) {
            fs.writeFileSync('frontend-scaffold/css/style.css', css_content)
            if (err) throw err;
        });

    });

    fs.mkdir("frontend-scaffold/js", (err) => {
        if (err == "Error: EEXIST: file already exists, mkdir 'frontend-scaffold/js'") {
            null
        }

        fs.open('frontend-scaffold/js/script.js', 'w', function (err) {
            fs.writeFileSync('frontend-scaffold/js/script.js', js_content)
            if (err) throw err;
        });
    });

    fs.mkdir("frontend-scaffold/images", (err) => {
        if (err == "Error: EEXIST: file already exists, mkdir 'frontend-scaffold/images'") {
            null
        } 
    })
    console.log("\nFrontend scaffold created successfully!\n")
}