class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (a*b >= 0) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    console.log(primitiveMultiply(a,b));
}

console.log(reliableMultiply(8, 8));