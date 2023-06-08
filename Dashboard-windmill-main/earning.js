let TodaysEarning = (document.getElementById("tt1").innerHTML = "$00.00");
let TodaysPool = (document.getElementById("tt2").innerHTML = "$00.00");
let YourBalance = (document.getElementById("tt3").innerHTML = "$00.00");
let YourAssets = (document.getElementById("tt4").innerHTML = "$00.00");


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3,5,7,12,14,8,4,6,10,11,12,4,9,14,3,15,10,12,14,19,18,14,15,11,8,7,3,17,19],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });