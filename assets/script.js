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

let table2 = document.getElementById("table2")

let graph2 = document.createElement("canvas")
graph2.setAttribute("id", "graph1")
graph2.setAttribute("width", "400px")
graph2.setAttribute("height", "400px")
graph2.style.border = "solid 2px black"
mwContent.insertBefore(graph2, table2)


