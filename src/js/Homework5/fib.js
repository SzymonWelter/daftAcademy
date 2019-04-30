function fib(num){
    if( !Number.isInteger(num) || num < 0 )
        throw new Error("wrong input: " + num);
    if(num == 0)
        return [];
    var res = [0];
    if(num == 1)
        return res;
    res.push(1);
    var i = 2;
    while(i < num){
        res.push(res[i-1]+res[i-2]);
        i++;
    }
    return res;     
}
module.exports = fib;