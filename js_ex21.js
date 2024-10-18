// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

// v1
const modifyString = (givenString) => {
    let firstLetters = givenString.slice(0, 2);
    if (firstLetters !== "Py") {
        return "Py" + givenString;
    } else {
        return givenString;
    }
};

// v2

function addPy(str) {
    if (str.startsWith("Py")) {
        return str;
    } else {
        return "Py" + str;
    }
}


// v3

function addPy(str) {
    return str.startsWith("Py") ? str : "Py" + str;
}

// v4

const string_check = (str1) => (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py' ? str1 : `Py${str1}`);

// fiddle | to come

