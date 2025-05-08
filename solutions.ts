function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true || toUpper === undefined) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result: { title: string; rating: number }[] = [];

  items.map((item: { title: string; rating: number }) => {
    if (item.rating >= 4) {
      result.push(item);
    }
  });

  return result;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (const arr of arrays) {
    result = [...result, ...arr];
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}
