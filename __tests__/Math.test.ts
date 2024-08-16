import { Math } from '../src/Math';

describe('Testando Math', () => {
  const math: Math = new Math();

  describe('sum', () => {
      it('Deve retornar a soma para dois números positivos', () => {
          expect(math.sum(1, 1)).toBe(2);
      });
      it('Deve retornar a soma de um numero positivo com zero', () => {
          expect(math.sum(1, 0)).toBe(1);
      });
      it('Deve retornar a soma para dois zeros', () => {
          expect(math.sum(0, 0)).toBe(0);
      });
      it('Deve retornar a soma para um numero positivo e um negativo', () => {
          expect(math.sum(1, -1)).toBe(0);
      });
      it('Deve retornar a soma para dois números negativos', () => {
          expect(math.sum(-1, -1)).toBe(-2);
      });
      it('Deve retornar a soma para um numero negativo e zero', () => {
          expect(math.sum(-1, 0)).toBe(-1);
      });
  });
    describe('sub', () => {
        it('Deve retornar a subtração para dois números positivos', () => {
            expect(math.sub(1, 1)).toBe(0);
        });
        it('Deve retornar a subtração de um numero positivo com zero', () => {
            expect(math.sub(1, 0)).toBe(1);
        });
        it('Deve retornar a subtração para dois zeros', () => {
            expect(math.sub(0, 0)).toBe(0);
        });
        it('Deve retornar a subtração para um numero positivo e um negativo', () => {
            expect(math.sub(1, -1)).toBe(2);
        });
        it('Deve retornar a subtração para dois números negativos', () => {
            expect(math.sub(-1, -1)).toBe(0);
        });
        it('Deve retornar a subtração para um numero negativo e zero', () => {
            expect(math.sub(-1, 0)).toBe(-1);
        });
    });
    describe('mult', () => {
        it('Deve retornar a multiplicação para dois números positivos', () => {
            expect(math.mult(1, 1)).toBe(1);
        });
        it('Deve retornar a multiplicação de um numero positivo com zero', () => {
            expect(math.mult(1, 0)).toBe(0);
        });
        it('Deve retornar a multiplicação para dois zeros', () => {
            expect(math.mult(0, 0)).toBe(0);
        });
        it('Deve retornar a multiplicação para um numero positivo e um negativo', () => {
            expect(math.mult(1, -1)).toBe(-1);
        });
        it('Deve retornar a multiplicação para dois números negativos', () => {
            expect(math.mult(-1, -1)).toBe(1);
        });
        it('Deve retornar a multiplicação para um numero negativo e zero', () => {
            expect(math.mult(0, -5)).toBe(-0);

            // foi colocado resultado esperado -0 para tratamento de erro apresentado rodando o teste
            // anterior. Onde se encontra "expect(math.mult(0, -5)).toBe(-0);" estava
            // expect(math.mult(0, -5)).toBe(0); e rodando o test:coverage resultava na resposta do terminal:
            // "expect(received).toBe(expected) // Object.is equality
            //     Expected: 0
            //     Received: -0"
        });
    });
    describe('div', () => {
        it('Deve retornar a divisão para dois números positivos', () => {
            expect(math.div(1, 1)).toBe(1);
        });
        it('Deve retornar a divisão de um numero positivo com zero', () => {
            expect(math.div(1, 0)).toBe(0);
            // erro
            // Em pesquisa foi constatado que qualquer divisão por ZERO resultaria em retorno de
            // + infinito ou - infinito. Solução foi: colocar uma clausula dentro da função Math.div()
            // onde se a variavel X ou Y forem 0 automaticamente retorna 0 (zero) e encerra a função.
        });
        it('Deve retornar a divisão para dois zeros', () => {
            expect(math.div(0, 0)).toBe(0);
            // erro
        });
        it('Deve retornar a divisão para um numero positivo e um negativo', () => {
            expect(math.div(1, -1)).toBe(-1);
        });
        it('Deve retornar a divisão para dois números negativos', () => {
            expect(math.div(-1, -1)).toBe(1);
        });
        it('Deve retornar a divisão para um numero negativo e zero', () => {
            expect(math.div(-1, 0)).toBe(0);
            // erro
        });
    });
});
