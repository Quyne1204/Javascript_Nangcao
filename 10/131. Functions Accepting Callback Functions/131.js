const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...orthers] = str.split(" ");
  return [first.toUpperCase(), ...orthers].join(" ");
};
//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Tranformed string: ${fn(str)}`);
  console.log(`Tranformed by: ${fn.name}`);
};
transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);
//JS uses callbacks all the time
const high5 = function () {
  console.log("hi");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);
