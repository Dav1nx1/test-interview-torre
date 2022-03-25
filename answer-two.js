function squared(data){
    var roots = data.map( num => {
        return Math.abs(num) * Math.abs(num);
    } );

    return roots
}

console.log(squared([2, 1]))
