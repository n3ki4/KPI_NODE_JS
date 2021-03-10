module.exports = function min (arr){
    return console.log(arr.sort( (a,b) => {
        return a - b
    })[0])
};