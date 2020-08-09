let mwContent = document.getElementById("mw-content-text")
let content = document.getElementById("content")
let table1 = document.getElementById("table1")


let graph1 = document.createElement("canvas")
graph1.setAttribute("id", "graph1")
graph1.setAttribute("width", "400px")
graph1.setAttribute("height", "400px")
graph1.style.border = "solid 2px black"
mwContent.insertBefore(graph1, table1)

// Transform table data to arrays graph1
function table_to_array(table1) {
        
    myData = document.getElementById(table1).rows
    my_list = []
    for (i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (j = 0; j < el.length; j++) {  
                    my_el.push(el[j].innerText.replace(",", "."));
            }
            my_list.push(my_el)
    }

    return my_list
    
}

table_to_array("table1")

// années graph1
let anneesGraph1 = my_list.slice()
let anneeGraph1 = anneesGraph1[1]
let removedItems = anneeGraph1.splice(0, 2);

// chiffres graph1
let chiffresGraph1 = my_list.slice()
let elementsSsupprime = chiffresGraph1.splice(0, 2);
let pays = []
let chiffres = []
let chiffreUnique = []

for (i=0;i<chiffresGraph1.length;i++){
    pays.push(chiffresGraph1[i].splice(0,2))
}

let a = 0
while (a<chiffresGraph1.length){
for (o=0;o<11;o++){
    chiffresGraph1[a][o] = parseFloat(chiffresGraph1[a][o])
    
    }
    
    a++
}

// random colors graph1
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

var color = random_rgba();

// Data of graph1
let datas = []
let obj
for (i=0;i<chiffresGraph1.length;i++){
    obj = {   
        label: pays[i],
        data: chiffresGraph1[i],
        backgroundColor: random_rgba(),
        borderWidth: 1
    }
    datas.push(obj)
}


// graph1
var ctx = document.getElementById('graph1').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: anneeGraph1,
        datasets: datas,
        
        
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/* Graphic 2 */

let table2 = document.getElementById("table2");

let graph2 = document.createElement("canvas");
graph2.setAttribute("id", "graph2");
graph2.setAttribute("width", "400px");
graph2.setAttribute("height", "400px");
graph2.style.border = "solid 2px black";
mwContent.insertBefore(graph2, table2);

// Make array from table; homi = homicide
function arrayFromHomi(table2) {
  homiRows = document.getElementById("table2").rows;
  homiArray = [];
  // Loop for rows
  for (i = 0; i < homiRows.length; i++) {
    tempVar = homiRows[i].children;
    tempArr = [];
    // loop for columns iterating for each row
    for (j = 0; j < tempVar.length; j++) {
      tempArr.push(tempVar[j].innerText);
    }
    homiArray.push(tempArr);
  }
  return homiArray;
}

arrayFromHomi();
console.log(homiArray);

// Get years
let graph2rows = homiArray.slice();
let graph2years = graph2rows[0];
let removedElements = graph2years.splice(0, 2);
console.log(graph2years);

// Get values from homiArray and remove first row of data
let graph2Values = homiArray.slice();
let removedValues2 = graph2Values.splice(0, 1);
console.log(graph2Values);

// Get countries from graph2values
let homiCountries = [];
for (i = 0; i < graph2Values.length; i++) {
  homiCountries.push(graph2Values[i].splice(1, 1));
}
console.log(homiCountries);

// Iterating through each value and converting from string to integer
let b = 0;
while (b < graph2Values.length) {
  let removeDiv = graph2Values[b].shift(); //removing first div element (1-37)
  for (i = 0; i < 2; i++) {
    graph2Values[b][i] = parseInt(graph2Values[b][i]);
  }
  b++;
}
console.log(graph2Values);

// Dividing the first set by years 2007-2009
let firstSet = [];
for (i = 0; i < 30; i++) {
  firstSet.push(graph2Values[i].splice(0, 1));
}
console.log(firstSet);

// Converting firstSet from 2d to 1d array
let firstSetArr = [];
for (i = 0; i < firstSet.length; i++) {
  firstSetArr = firstSetArr.concat(firstSet[i]);
}
console.log(firstSetArr);

// Set objects for 2007-2009 per country to display in graph2
let data2007 = [];
for (i = 0; i < firstSet.length; i++) {
  data2007 = {
    label: graph2years[0],
    data: firstSetArr,
    backgroundColor: "rgba(0, 99, 132, 0.6)",
    borderColor: "rgba(0, 99, 132, 1)",
    // yAxisID: "y-2007",
  };
}

// Dividing the second set by years 2010-2012
let secondSet = [];
for (i = 0; i < graph2Values.length; i++) {
  secondSet.push(graph2Values[i].splice(0, 1));
}

// Converting firstSet from 2d to 1d array
let secondSetArr = [];
for (i = 0; i < secondSet.length; i++) {
  secondSetArr = secondSetArr.concat(secondSet[i]);
}
console.log(secondSetArr);

// Set objects for 2010-2012 per country to display in graph2
let data2010;
data2010 = {
  label: graph2years[1],
  data: secondSetArr,
  backgroundColor: "rgba(99, 132, 0, 0.6)",
  borderColor: "rgba(99, 132, 0, 1)",
};
console.log(data2010);

// Visualise graph2
let context2 = document.getElementById("graph2").getContext("2d");

let homicide = new Chart(context2, {
  type: "bar",
  data: {
    labels: homiCountries,
    datasets: [data2007, data2010],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

/* Graphic 3 */

function insertGraph (contentName, tableName, graphName) {
  let content = document.getElementById (contentName);
  let table = document.getElementById (tableName);
  let graph = document.createElement ('canvas');
  content.insertBefore (graph, table);
  graph.setAttribute ('id', graphName);
  graph.style.border = 'solid 2px black';
}

insertGraph ('content', 'bodyContent', 'graph3');

let donneesx = [];
let donneesy = [];
let plusUn = 10;
let plusUn2 = 0;

async function makeGraph () {

  let donnee = await fetch (

    'https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json'

  );

  let donnees = await donnee.json ();

  for (i = 0; i < donnees.length; i++) {

    donneesy.push (donnees[i][1]);

    if (plusUn2 == 0) {

      donneesx.push (donnees[i][0]);

    } else if (plusUn2 > 0 && i == donnees.length - 1) {

      donneesx.push (donnees[donnees.length - 1][0] + plusUn2);

    }

  }

  let donneesy2 = donneesy.slice (0, plusUn);
  let donneesx2 = donneesx.slice (0, plusUn);
  plusUn++;
  plusUn2++;

  let ctx3 = document.getElementById('graph3').getContext('2d');

  let myChart3 = new Chart (ctx3, {

    type: 'line',
    data: {

      labels: donneesx2,

      datasets: [
        {
          label: '# of Votes',
          data: donneesy2,
          borderColor: ['rgba(1, 1, 1, 1)'],
          fill: false,
          borderWidth: 1,

        },
      ],

    },

    options: {

      animation: {

        duration: 0,
      },
      scales: {

        yAxes: [
          {
            ticks: {

              beginAtZero: true,

            },
          },
        ],
      },
    },
  });
}

setInterval (makeGraph, 1000);

