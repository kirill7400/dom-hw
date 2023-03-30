class Table {
  constructor() {
    this.serverData = [
      { "id": 26, "title": "Побег из Шоушенка", "imdb": 9.30, "year": 1994 },
      { "id": 25, "title": "Крёстный отец", "imdb": 9.20, "year": 1972 },
      { "id": 27, "title": "Крёстный отец 2", "imdb": 9.00, "year": 1974 },
      { "id": 1047, "title": "Тёмный рыцарь", "imdb": 9.00, "year": 2008 },
      { "id": 223, "title": "Криминальное чтиво", "imdb": 8.90, "year": 1994 }
    ]

    this.tbody = document.querySelector('table').firstElementChild
  }

  tableForm(data) {
    if (this.tbody.querySelectorAll('tr.body').length) {
      for (let item of this.tbody.querySelectorAll('tr.body')) {
        item.parentElement.removeChild(item)
      }
    }

    data.forEach(item => {
      const tr = document.createElement('tr')

      const tdId = document.createElement('td')
      const tdTitle = document.createElement('td')
      const tdImdb = document.createElement('td')
      const tdYear = document.createElement('td')

      tdId.textContent = item.id
      tdTitle.textContent = item.title
      tdImdb.textContent = `imdb:${Number(item.imdb).toFixed(2)}`
      tdYear.textContent = `(${item.year})`

      tr.insertBefore(tdImdb, tr.firstElementChild);
      tr.insertBefore(tdYear, tr.firstElementChild);
      tr.insertBefore(tdTitle, tr.firstElementChild);
      tr.insertBefore(tdId, tr.firstElementChild);

      tr.setAttribute('data-id', item.id)
      tr.setAttribute('data-title', item.title)
      tr.setAttribute('data-imdb', item.imdb)
      tr.setAttribute('data-year', item.year)
      tr.classList.add('body')

      this.tbody.insertBefore(tr, this.tbody.lastElementChild.nextSibling);
    })
  }

  sortTable(field, e) {
    const trAll = Array.from(this.tbody.querySelectorAll('tr.body'))
    const desc = e.target.dataset.desc

    desc === '1' ? e.target.setAttribute('data-desc', 2) : e.target.setAttribute('data-desc', 1)

    trAll.sort((a, b)  => {
      if (!isNaN(Number(a.dataset[field]))) {
        return desc === '1' ? +a.dataset[field] > +b.dataset[field] ? 1 : -1 : +a.dataset[field] < +b.dataset[field] ? 1 : -1
      }
      return desc === '1' ? a.dataset[field] > b.dataset[field] ? 1 : -1 : a.dataset[field] < b.dataset[field] ? 1 : -1
    })

    const newTr = trAll.reduce((a, c) => {
      a.push(Object.assign({}, c.dataset))
      return a
    }, [])

    this.tableForm(newTr)
  }
}

export default Table
