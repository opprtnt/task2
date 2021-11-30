function createCalendar(elem, year, month) {

  let mon = +month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table = '<table><tr class="calendar__table-days"><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr><tr>';

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  let lastDays = new Date(year, mon, 0)
  for (let i = 0; i < getDay(d); i++) {
    table += `<td class="calendar__table-disabled-days">${lastDays.getDate() - getDay(d) + 1 + i}</td>`;
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *

  if (getDay(d) != 0) {
    let nextDay = 1;
    for (let i = getDay(d); i < 7; i++) {
      table += `<td class="calendar__table-disabled-days">${nextDay++}</td>`;
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;

}


function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

const calendar = document.querySelector('.calendar__table');

createCalendar(calendar, 2019, '08');

$('.calendar__table').on('click', function (e) {
  if (e.target.tagName !== 'TD') return;
  $(e.target).toggleClass('calendar__day_selected')
})

let currentTarget;

$('.calendar__table').on('click', function (e) {
  if (e.target.tagName !== 'TD') return;
  currentTarget = e.target;
})
$('.calendar__table td').on('mouseenter', function (e) {
  if (!currentTarget) return;
  console.log(currentTarget)
  $(e.target).prevUntil(currentTarget).addClass('calendar__table_enter');
})

function getCalendarDate() {


}