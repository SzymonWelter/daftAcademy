const fib = require('./fib');
test('string param', () => {
    expect(()=>{
        fib("string");
    }).toThrow();
});
test("negative number",() => {
    expect(()=>{
        fib(-5);
    }).toThrow();
});

test('length of array',() =>{
    for(let i = 0; i < 100; i++){
        expect(fib(i).length).toBe(i);
    }
})
test('correctness of results', ()=>{
    var ref = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    for(let i = 0; i <= 10; i++)
        expect(fib(i)).toEqual(ref.slice(0,i));
})
