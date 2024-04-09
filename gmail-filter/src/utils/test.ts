//TODO: TEST
enum CardinalDirections {
  North = "North Way",
  East = "East Way",
  South = "South Way",
  West = "West Way",
}

// logs "North"
console.log(CardinalDirections.North);

// logs "West"
console.log(CardinalDirections.West);

const test = {
  name: "test",
  way: "East",
};

console.log("Way of: "+test.name + " is " + 
CardinalDirections[test.way as keyof typeof CardinalDirections]);

const strWay = "South"

console.log("strWay is: " + CardinalDirections[strWay as keyof typeof CardinalDirections]);



