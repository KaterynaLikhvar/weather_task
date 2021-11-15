// console.log('file 2');
// //const id = document.querySelectorAll('.chart');

// function makeBarChart(data, width, height, barcolor) {
//   // Предусмотреть значения по умолчанию для необязательных аргументов
//   if (!width) width = 500;
//   if (!height) height = 500;
//   if (!barcolor) barcolor = "linear-gradient(180deg, rgba(57, 131, 255, 0.3) 0%, rgba(57, 131, 255, 0) 100%);";
//   // Аргументы width и height определяют общий размер гистограммы.
//   // Чтобы получить размер создаваемого элемента, необходимо вычесть
//   // из этих значений толщину рамок и величину отступов.
//   //width -= 24; // Вычесть 10px отступа и 2px толщины рамки слева и справа
//   //height -= 14; // Вычесть 10px отступа сверху и 2px толщины рамки сверху и снизу
//   // Создать элемент для размещения гистограммы. Обратите внимание:
//   // гистограмма позиционируется в относительных координатах, т. е.
//   // в ней могут располагаться дочерние элементы с абсолютным
//   // позиционированием, и отображаться при этом в нормальном потоке
//   // вывода элементов документа.
//   var chart = document.createElement("div");
//   chart.style.position = "relative"; // Относительное позиционирование
//   chart.style.width = width + "px"; // Ширина гистограммы
//   chart.style.height = height + "px"; // Высота гистограммы
//   //chart.style.border = "solid black 1px"; // Определить рамку
//   chart.style.paddingLeft = "10px"; // Добавить отступ слева
//   chart.style.paddingRight = "10px"; // Справа
//   chart.style.paddingTop = "10px"; // Сверху
//   chart.style.paddingBottom = "0px"; // Но не снизу
//   chart.style.backgroundColor = "white"; // Фон гистограммы - белый
//   // Рассчитать ширину каждого столбика
 
//   //var barwidth = Math.floor(width/data.length);
//   var barwidth = 52;
 
//   // Отыскать наибольшее число в массиве data[]. Обратите внимание
//   // на грамотное использование функции Function.apply().
//   var maxdata = Math.max.apply(this, data);
//   // Масштабирующий множитель: scale*data[i] дает высоту столбика
//   var scale = height/maxdata;
//   // Обойти в цикле массив с данными и создать столбики для всех элементов
//   for(var i = 0; i < data.length; i++) {
//    var bar = document.createElement("div"); // Создать столбик
//    var barheight = data[i] * scale; // Рассчитать высоту
//    bar.style.position = "absolute"; // Уст. размер и положение
//    bar.style.left = (barwidth*i+1+10)+"px"; // Добавить рамку столбика
//    // и отступ
//    bar.style.top = height-barheight+10+"px";// Добавить отступ
//    // гистограммы
//    bar.style.width = (barwidth-2) + "px"; // -2 - рамка столбика
//    bar.style.height = (barheight-1) + "px"; // -1 - рамка сверху
//    if (data[i] >= 50) bar.style.border = "solid transperant 1px"; // Стиль рамки столбика при значениях более 50
//    if (data[i] < 50) bar.style.background = "linear-gradient(180deg, rgba(57, 131, 255, 0.3) 0%, rgba(57, 131, 255, 0) 100%);"; // Стиль рамки столбика при значениях менее 50
//    bar.style.backgroundImage = '-webkit-gradient(linear, left bottom, left top, color-stop(0, rgba(57, 131, 255, 0)), color-stop(1, rgba(57, 131, 255, 0.3)))'; // Цвет столбика
//    bar.style.borderTop = "solid #3983FF 3px";
//    bar.style.fontSize = "0px"; // Учесть особенность IE
//    chart.appendChild(bar); // Добавить столбик
//    // в гистограмму
//   }
//   // В заключение вернуть элемент с гистограммой
//   console.log(scale, barheight)
//   return chart;
//  };

 

//  function drawChart1() {
//   let data = [28, 39, 61, 50];
//   let chart = makeBarChart(data, 213, 32);
//   let container1 = document.getElementById("chartContainer1");
//   let container2 = document.getElementById("chartContainer2");
//   let container3 = document.getElementById("chartContainer3");
//   container1.innerHTML = chart.outerHTML;
//   container2.innerHTML = chart.outerHTML;
//   container3.innerHTML = chart.outerHTML;
// }

// function drawChart2() {
//   let data = [28, 39, 61, 50];
//   let chart = makeBarChart(data, 213, 32);
//   let container1 = document.getElementById("chartContainer1");
//   let container2 = document.getElementById("chartContainer2");
//   let container3 = document.getElementById("chartContainer3");
//   container1.innerHTML = chart.outerHTML;
//   container2.innerHTML = chart.outerHTML;
//   container3.innerHTML = chart.outerHTML;
// }
//  window.onload(drawChart1());
//  window.onload(drawChart2());

