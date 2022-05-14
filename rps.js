let rng = Math.floor(Math.random() * 3 + 1);

function random(rng) {
  if (rng === 3) {
    console.log(`rock`);
  } else if (rng === 2) {
    console.log(`paper`);
  } else if (rng === 1) {
    console.log(`scissors`);
  }
}
console.log(rng);
random(rng);
