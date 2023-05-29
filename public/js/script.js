const valueArray = document.querySelectorAll('.stats-pokemon__left span');
const bars = document.querySelectorAll('.progress-bar');

const max = 180;

const results = Array.from(valueArray).map((value) => {
  return (value.textContent * 100 / max).toFixed();
});

results.forEach((result, index) => {
  bars[index].animate([
    { width: '0%' },
    { width: `${result}%` }
  ], {
    duration: 800,
  });

  bars[index].style.width = `${result}%`;
});
