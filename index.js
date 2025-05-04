function fetchNum(event) {
  event.preventDefault();
  let input = document.getElementById('inputNum').value;
  let arr = input.split(',').map(Number);

  showBricksAndWater(arr);
  showOnlyWater(arr);
}

const waterSum = (finalCase) => {
  let sum = 0;
  for (let i = 0; i < finalCase.length; i++) {
      if (finalCase[i] !== '-') {
          sum += +finalCase[i];
      }
  }
  return sum;
};

const chartInstances = {}; // Global storage for all chart instances
  

function createChartTable(xAxis, outputArr, id) {
    const dom = document.getElementById(id);
    if (!dom) {
      console.error(`Element with id "${id}" not found.`);
      return;
    }
  
    const ctx = dom.getContext('2d');
  
    // Destroy previous chart instance if exists
    if (chartInstances[id]) {
      chartInstances[id].destroy();
    }
  
    const brickData = outputArr.map(item => (item.itemStyle?.color === '#ffff00' ? item.value : 0));
    const waterData = outputArr.map(item => (item.itemStyle?.color === '#00afef' ? item.value : 0));
  
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: xAxis,
        datasets: [
          {
            label: 'Brick',
            data: brickData,
            backgroundColor: '#ffff00',
            stack: 'combined',
          },
          {
            label: 'Water',
            data: waterData,
            backgroundColor: '#00afef',
            stack: 'combined',
          }
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true },
          y: { stacked: true, beginAtZero: true }
        }
      }
    });
  
    chartInstances[id] = chart;
  }
  
  




function showBricksAndWater(bricks) {
  let firstcase = [];
  let secondCase = [];
  let finalCase = [];
  let result = [];
  let leftMax = 0;
  let rightMax = 0;

  for (let i = 0; i < bricks.length; i++) {
      let brick = bricks[i];
      if (brick == 0) {
          firstcase.push(leftMax);
      } else {
          firstcase.push('-');
          leftMax = brick;
      }
  }

  for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (brick == 0) {
          secondCase[i] = rightMax;
      } else {
          secondCase[i] = '-';
          rightMax = brick;
      }
  }

  for (let i = 0; i < bricks.length; i++) {
      if (firstcase[i] == '-') {
          finalCase[i] = '-';
      } else {
          finalCase[i] = firstcase[i] - secondCase[i] > 0 ? secondCase[i] : firstcase[i];
      }
  }

  for (let i = 0; i < bricks.length; i++) {
      if (bricks[i] == 0) {
          result.push({
              value: finalCase[i],
              itemStyle: { color: '#00afef' }
          });
      } else {
          result.push({
              value: bricks[i],
              itemStyle: { color: '#ffff00' }
          });
      }
  }

  createChartTable(bricks, result, 'chart');
}

function showOnlyWater(water) {
  let firstcase = [];
  let secondCase = [];
  let finalCase = [];
  let result = [];
  let leftMax = 0;
  let rightMax = 0;

  for (let i = 0; i < water.length; i++) {
      let block = water[i];
      if (block == 0) {
          firstcase.push(leftMax);
      } else {
          firstcase.push('-');
          leftMax = block;
      }
  }

  for (let i = water.length - 1; i >= 0; i--) {
      let block = water[i];
      if (block == 0) {
          secondCase[i] = rightMax;
      } else {
          secondCase[i] = '-';
          rightMax = block;
      }
  }

  for (let i = 0; i < water.length; i++) {
      if (firstcase[i] == '-') {
          finalCase[i] = '-';
      } else {
          finalCase[i] = firstcase[i] - secondCase[i] > 0 ? secondCase[i] : firstcase[i];
      }
  }

  for (let i = 0; i < water.length; i++) {
      if (water[i] == 0) {
          result.push({
              value: finalCase[i],
              itemStyle: { color: '#00afef' }
          });
      } else {
          result.push({
              value: 0,
              itemStyle: { color: '#ffff00' }
          });
      }
  }

  createChartTable(water, result, 'chart1');

  let outputSpan = document.getElementById('waterunit');
  outputSpan.innerHTML = `Total Water Units = ${waterSum(finalCase)}`;
}
