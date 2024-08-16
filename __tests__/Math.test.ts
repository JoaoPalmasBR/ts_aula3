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
            expect(math.mult(-1, 0)).toBe(0);
        });
    });

});
