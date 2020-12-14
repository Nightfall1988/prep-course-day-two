/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
    var strArray = str.split(' ');
    var fullStr = ''
    const newArray = []
    for (var i=0; i<strArray.length; i++) {
     var word = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1)
     newArray.push(word)
     fullStr = newArray.join(" ")
    }
    return fullStr
}

export { capitalize };
