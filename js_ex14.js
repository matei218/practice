// Write a JavaScript exercise to get the filename extension.  

const getFileExtension = () =>{
    let fileName = 'text.txt'
    let extension = fileName.split('.').pop();
    console.log('File extenstion: ' + extension)
}

getFileExtension();

// using slide and indexOf

function getFileExtension() {
    let fileName = 'text.txt';
    let extension = fileName.slice(fileName.lastIndexOf('.') + 1);
    console.log('File extension: ' + extension);
}

getFileExtension();