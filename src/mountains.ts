export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(mountainArr: Mountain[]): string {
  if (mountainArr.length !== 0) {
    const max = mountainArr.reduce((acc, mountain) => acc = acc > mountain.height ? acc : mountain.height, 0);
    const mountain = mountainArr.find((element) => element.height === max);
    return mountain?.name ?? "";
  } else return "";
}

const result = findNameOfTallestMountain(mountains);
console.log(result);

