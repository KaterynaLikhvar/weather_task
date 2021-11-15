//const id = document.querySelectorAll('.chart');

function makeBarChart(data, width, height, barcolor) {
  // Предусмотреть значения по умолчанию для необязательных аргументов
  if (!width) width = 500;
  if (!height) height = 500;
  if (!barcolor) barcolor = "linear-gradient(180deg, rgba(57, 131, 255, 0.3) 0%, rgba(57, 131, 255, 0) 100%);";
  // Аргументы width и height определяют общий размер гистограммы.
  // Чтобы получить размер создаваемого элемента, необходимо вычесть
  // из этих значений толщину рамок и величину отступов.
  //width -= 24; // Вычесть 10px отступа и 2px толщины рамки слева и справа
  //height -= 14; // Вычесть 10px отступа сверху и 2px толщины рамки сверху и снизу
  // Создать элемент для размещения гистограммы. Обратите внимание:
  // гистограмма позиционируется в относительных координатах, т. е.
  // в ней могут располагаться дочерние элементы с абсолютным
  // позиционированием, и отображаться при этом в нормальном потоке
  // вывода элементов документа.
  var chart = document.createElement("div");
  chart.style.position = "relative"; // Относительное позиционирование
  chart.style.width = width + "px"; // Ширина гистограммы
  chart.style.height = height + "px"; // Высота гистограммы
  //chart.style.border = "solid black 1px"; // Определить рамку
  chart.style.paddingLeft = "10px"; // Добавить отступ слева
  chart.style.paddingRight = "10px"; // Справа
  chart.style.paddingTop = "10px"; // Сверху
  chart.style.paddingBottom = "0px"; // Но не снизу
  chart.style.backgroundColor = "white"; // Фон гистограммы - белый
  // Рассчитать ширину каждого столбика
 
  //var barwidth = Math.floor(width/data.length);
  var barwidth = 52;
 
  // Отыскать наибольшее число в массиве data[]. Обратите внимание
  // на грамотное использование функции Function.apply().
  var maxdata = Math.max.apply(this, data);
  // Масштабирующий множитель: scale*data[i] дает высоту столбика
  var scale = height/maxdata;
  // Обойти в цикле массив с данными и создать столбики для всех элементов
  for(var i = 0; i < data.length; i++) {
   var bar = document.createElement("div"); // Создать столбик
   var barheight = data[i] * scale; // Рассчитать высоту
   bar.style.position = "absolute"; // Уст. размер и положение
   bar.style.left = (barwidth*i+1+10)+"px"; // Добавить рамку столбика
   // и отступ
   bar.style.top = height-barheight+10+"px";// Добавить отступ
   // гистограммы
   bar.style.width = (barwidth-2) + "px"; // -2 - рамка столбика
   bar.style.height = (barheight-1) + "px"; // -1 - рамка сверху
   if (data[i] >= 50) bar.style.border = "solid transperant 1px"; // Стиль рамки столбика при значениях более 50
   if (data[i] < 50) bar.style.background = "linear-gradient(180deg, rgba(57, 131, 255, 0.3) 0%, rgba(57, 131, 255, 0) 100%);"; // Стиль рамки столбика при значениях менее 50
   bar.style.backgroundImage = '-webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(57, 131, 255, 0)), color-stop(1, rgba(57, 131, 255, 0.3)))'; // Цвет столбика
   bar.style.borderTop = "solid #3983FF 3px";
   bar.style.fontSize = "0px"; // Учесть особенность IE
   chart.appendChild(bar); // Добавить столбик
   // в гистограмму
  }
  // В заключение вернуть элемент с гистограммой
  console.log(scale, barheight)
  return chart;
 };

 let data = [];
 let chart;
 function drawChart1() {
  data = [28, 39, 61, 50];
  chart = makeBarChart(data, 213, 32);
  let container1 = document.getElementById("chartContainer1");
  let container2 = document.getElementById("chartContainer2");
  let container3 = document.getElementById("chartContainer3");
  container1.innerHTML = chart.outerHTML;
  container2.innerHTML = chart.outerHTML;
  container3.innerHTML = chart.outerHTML;
}

function drawChart2() {
  data1 = [28, 39, 61, 50];
  data2 = [4, 2, 2, 4];
  data3 = [9, 6, 4, 2];
  chart1 = makeBarChart(data1, 213, 32);
  chart2 = makeBarChart(data2, 213, 32);
  chart3 = makeBarChart(data3, 213, 32);

  let container4 = document.getElementById("chartContainer4");
  let container5 = document.getElementById("chartContainer5");
  let container6 = document.getElementById("chartContainer6");
  container4.innerHTML = chart1.outerHTML;
  container5.innerHTML = chart2.outerHTML;
  container6.innerHTML = chart3.outerHTML;
}
function drawChart3() {
  data1 = [28, 39, 61, 50];
  data2 = [4, 2, 2, 4];
  data3 = [9, 6, 4, 2];
  chart1 = makeBarChart(data1, 213, 32);
  chart2 = makeBarChart(data2, 213, 32);
  chart3 = makeBarChart(data3, 213, 32);
  let container7 = document.getElementById("chartContainer7");
  let container8 = document.getElementById("chartContainer8");
  let container9 = document.getElementById("chartContainer9");
  container7.innerHTML = chart1.outerHTML;
  container8.innerHTML = chart2.outerHTML;
  container9.innerHTML = chart3.outerHTML;
}
 window.onload(drawChart1(), drawChart2(), drawChart3());
















// console.log('canvas'); 33333333333333333333333333333333
// let myCanvas = document.getElementById('myCanvas');
// myCanvas.width = 213;
// myCanvas.height = 213;

// let ctx = myCanvas.getContext('2d');

// let myVinyls = {
//   '1': 28,
//   '2': 29,
//   '3': 32,
//   '4': 30
// };

// function drawLine(ctx, startX, startY, endX, endY, color) {
//   ctx.save();
//   ctx.strokeStyle = color;
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(endX, endY);
//   ctx.stroke();
//   ctx.restore();
// }

// function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
//   ctx.save();
//   ctx.fillStyle = color;
//   ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
//   ctx.restore();
// }

// let Barchart = function (options) {
//   this.options = options;
//   this.canvas = options.canvas;
//   this.ctx = this.canvas.getContext('2d');
//   this.colors = options.colors;

//   this.draw = function () {
//     let maxValue = 0;
//     for (let categ in this.options.data) {
//       maxValue = Math.max(maxValue, this.options.data[categ]);
//     }
//     let canvasActualHeight = this.canvas.height - this.options.padding * 2;
//     let canvasActualWidth = this.canvas.width - this.options.padding * 2;

//     //drawing the grid lines
//     let gridValue = 0;
//     while (gridValue <= maxValue) {
//       let gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;
//       drawLine(
//         this.ctx,
//         0,
//         gridY,
//         this.canvas.width,
//         gridY,
//         this.options.gridColor
//       );

//       //writing grid markers
//       this.ctx.save();
//       this.ctx.fillStyle = this.options.gridColor;
//       this.ctx.font = 'bold 10px Arial';
//       this.ctx.fillText(gridValue, 10, gridY - 2);
//       this.ctx.restore();

//       gridValue += this.options.gridScale;
//     }

//     //drawing the bars
//     let barIndex = 0;
//     let numberOfBars = Object.keys(this.options.data).length;
//     let barSize = (canvasActualWidth) / numberOfBars;

//     for (categ in this.options.data) {
//       let val = this.options.data[categ];
//       let barHeight = Math.round(canvasActualHeight * val / maxValue);
//       drawBar(
//         this.ctx,
//         this.options.padding + barIndex * barSize,
//         this.canvas.height - barHeight - this.options.padding,
//         barSize,
//         barHeight,
//         this.colors[barIndex % this.colors.length]
//       );

//       barIndex++;

//       this.ctx.save();
//       this.ctx.textBaseline = 'bottom';
//       this.ctx.textAlign = 'center';
//       this.ctx.fillStyle = '#000000';
//       this.ctx.font = 'bold 14px Arial';
//       this.ctx.fillText(this.options.seriesName, this.canvas.width / 2, this.canvas.height);
//       this.ctx.restore();
//     }

//   }
// }

// //drawing series name


// let myBarchart = new Barchart(
//   {
//     canvas: myCanvas,
//     padding: 20,
//     gridScale: 5,
//     gridColor: '#eeeeee',
//     data: myVinyls,
//     colors: ['#a55ca5', '#67b6c7', '#bccd7a', '#eb9743']
//   }
// );
// myBarchart.draw();