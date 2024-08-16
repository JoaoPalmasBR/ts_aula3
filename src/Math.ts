export class Math {
  public sum(x: number, y: number): number {
    return x + y;
  }

  public sub(x: number, y: number): number {
    return x - y;
  }

  public mult(x: number, y: number): number {
    return x * y;
  }

  public div(x: number, y: number): number {
    // TODO: Criar validação e testes para divisão por 0
    return x / y;
  }
}
