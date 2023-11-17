export class ArrayUtils {
  public createFromNumber(number: number) {
    const output = [];
    for (let index = 0; index < number; index++) {
      output.push(index);
    }

    return output;
  }
}

export const arrayUtils = new ArrayUtils();
