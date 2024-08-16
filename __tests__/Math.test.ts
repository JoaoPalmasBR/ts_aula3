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
});
