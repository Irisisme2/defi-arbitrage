

// Consumption Users Reports

export const barChartDataConsumption = [
  {
    name: "UniSwap",
    data: [5, 0, 5, 4, 0, 4, 1, 8, 14],
  },
  {
    name: "SushiSwap ",
    data: [3, 6, 3, 12, 2, 0, 0, 2, 11],
  },
  {
    name: "CurveFinance",
    data: [2, 34, 1, 0, 0, 4, 0, 0, 1],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const pieChartOptions = {
  labels: ["Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [63, 25, 12];

// Total Spent Default

export const lineChartDataTokenPrices = {
  BTC: [
    {
      name: "Uniswap",
      data: [40000, 42000, 41000, 41500, 40500, 42500], // Przykładowe ceny BTC na Uniswap w kolejnych miesiącach
    },
    {
      name: "SushiSwap",
      data: [40200, 41500, 40000, 41000, 41200, 42000], // Przykładowe ceny BTC na SushiSwap w kolejnych miesiącach
    },
    {
      name: "Curve Finance",
      data: [41000, 42500, 41500, 42000, 40800, 43000], // Przykładowe ceny BTC na Curve Finance w kolejnych miesiącach
    },
  ],
  ETH: [
    {
      name: "Uniswap",
      data: [3000, 3200, 3100, 3150, 3050, 3250], // Przykładowe ceny ETH na Uniswap w kolejnych miesiącach
    },
    {
      name: "SushiSwap",
      data: [3020, 3150, 3000, 3100, 3120, 3200], // Przykładowe ceny ETH na SushiSwap w kolejnych miesiącach
    },
    {
      name: "Curve Finance",
      data: [3100, 3250, 3150, 3200, 3080, 3300], // Przykładowe ceny ETH na Curve Finance w kolejnych miesiącach
    },
  ],
  DOGE: [
    {
      name: "Uniswap",
      data: [0.3, 0.32, 0.31, 0.315, 0.305, 0.325], // Przykładowe ceny DOGE na Uniswap w kolejnych miesiącach
    },
    {
      name: "SushiSwap",
      data: [0.302, 0.315, 0.3, 0.31, 0.312, 0.32], // Przykładowe ceny DOGE na SushiSwap w kolejnych miesiącach
    },
    {
      name: "Curve Finance",
      data: [0.31, 0.325, 0.315, 0.32, 0.308, 0.33], // Przykładowe ceny DOGE na Curve Finance w kolejnych miesiącach
    },
  ],
};

// Dostosowana opcja wykresu dla różnych kryptowalut i giełd
export const lineChartOptionsTokenPrices = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"], // Przykładowe miesiące
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF", "#FF5733"], // Kolory odpowiadające różnym giełdom
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF", "#FF5733"], // Kolory odpowiadające różnym giełdom
};
