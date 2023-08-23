requirejs(['modules/header', 'modules/table','modules/app'], (Header, Table) => {
  
  let header = new Header({ el: '#header' })
  let table = new Table({ el: '#main' })
  header.render()
  table.render()
})
