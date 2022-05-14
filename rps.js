let rng = Math.floor(Math.random() * 3 + 1);

function random(rng) {
  if (rng > 2) {
    console.log(`rock`);
  }
  if ((rng = 2)) {
    console.log(`paper`);
  }
  if (rng < 2) {
    console.log(`scissors`);
  }
}
console.log(rng);
random(rng);
