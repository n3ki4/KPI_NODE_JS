module.exports = function sum (array){
    let summary = 0
    for (let i = 0; i<array.length; i++){
        summary += array[i]
    }
    return console.log(summary)
}