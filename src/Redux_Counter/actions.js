function Increment() {
  return {
    type: "inc",
  };
}

function Decrement() {
  return {
    type: "dec",
  };
}

export { Increment, Decrement };
