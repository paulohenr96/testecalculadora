const Calculadora=require('./Calculadora');


describe('Calculadora',()=>{

    let calc;
    beforeEach(()=>{
        calc=new Calculadora();
    })

    describe('adicionar',()=>{
        test('Retorna o nume 37',()=>{
            expect(calc.adicionar(17,20)).toBe(37)
        })
    })

    describe('substrair',()=>{
        test('Retorna o numero 5',()=>{
            expect(calc.subtrair(900,895)).toBe(5);
        })
    })

    describe('Dividir',()=>{
        test('Retorna o numero 25',()=>{
            expect(calc.dividir(100,4)).toBe(25);
        })
    })

    describe('Multiplicar',()=>{
        test('Retorna o numero 1000',()=>{
            expect(calc.multiplicar(100,10)).toBe(1000);
        })
    })


})