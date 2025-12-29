const refs = {
  wheel: document.querySelector(".wheel"),
  message: document.querySelector(".massage-on-wheel"),
  arrow: document.querySelector(".arrow"),
  show: document.querySelector(".show-result"),
};

const MAX_ROUNDS = 3600;

const wheelData = [
  { label: "test", color: "red" },
  { label: "2", color: "orange" },
  { label: "3", color: "yellow" },
  { label: "qwerty", color: "green" },
  { label: "5", color: "violet" },
  { label: "6", color: "skyblue" },
  { label: "7", color: "beige" },
];

function textOnWheel() {
  refs.message.style.display = "none";
}
refs.wheel.addEventListener("click", textOnWheel);

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
const POINTER_POSITION = 38;

const data = {
  labels: wheelData.map((e) => e.label),
  datasets: [
    {
      label: "Dataset 1",
      data: wheelData.map(() => 1),
      backgroundColor: wheelData.map((e) => e.color),
    },
  ],
};

console.log(data.labels);
console.log(data.datasets[0].backgroundColor);

const config = {
  type: "pie",
  data: data,
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Pie Chart",
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: "#000000ff",
        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
          size: 20,
        },
      },
    },
  },
};

(async function () {
  new Chart(document.getElementById("myChart"), {
    ...config,
  });
})();

let random = 0;

function onWheelClick() {
  refs.show.classList.remove("is-wisible");
  const randomDeg =
    Math.random() * (MAX_ROUNDS - (MAX_ROUNDS - 360)) + (MAX_ROUNDS - 360);

  refs.wheel.style.transition = `transform ${5}s cubic-bezier(.42,0,.58,1)`;

  random += randomDeg;
  refs.wheel.style.transform = `rotate(-${random}deg)`;

  showResult(data.labels.length, (random % 360) + POINTER_POSITION),
    console.log(
      `random -`,
      random % 360,
      `pointer -`,
      (random % 360) + POINTER_POSITION
    );
}

refs.wheel.addEventListener("click", onWheelClick);

function showResult(sectorCounts, deg) {
  let sectorSize = 360 / sectorCounts;
  setTimeout(() => refs.show.classList.add("is-wisible"), 5000);

  for (let i = 0; i <= sectorCounts; i++) {
    if ((deg >= 0 && deg < sectorSize) || deg > 360) {
      refs.show.innerHTML = `${wheelData[i].label}`;
      continue;
    }
    if (deg >= sectorSize * i && deg < sectorSize * i + sectorSize) {
      refs.show.innerHTML = `${wheelData[i].label}`;
    }
  }
}
