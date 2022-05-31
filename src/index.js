// requests
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// courses
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] }
];

// function to filter
const findCourse = (range) => {
  let result = [];
  for (let i = range[0]; i <= range[1]; i++) result.push(i);

  const finded = courses.filter((el) =>
    el.prices.find((num) => {
      num = result.includes(num);
      return num;
    })
  );
  return finded.sort((a, b) => (a.name > b.name ? 1 : -1));
};

// to watch result in concole
console.log(findCourse(requiredRange1));
