import Table from "./class/Table";

const png = document.querySelector('img.image')
const itemsList = document.querySelectorAll('.game-item')

setInterval(() => {
  itemsList[getRandomId()].insertBefore(png, null)
}, 1000)

function getRandomId(min = 0, max = 15) {
  return Math.floor(Math.random() * (max - min) + min);
}


const table = new Table()
table.tableForm(table.serverData)
//table.sortTable('id')

document.querySelector('td.id').addEventListener('click', (e) => table.sortTable('id', e))
document.querySelector('td.title').addEventListener('click', (e) => table.sortTable('title', e))
document.querySelector('td.imdb').addEventListener('click', (e) => table.sortTable('imdb', e))
document.querySelector('td.year').addEventListener('click', (e) => table.sortTable('year', e))




