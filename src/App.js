import React, { useState } from 'react';

import TableFilter from './components/TableFilter'
import TableOrder from './components/TableOrder'
import TableList from './components/TableList'

import employees from './employees.json'

function App() {
    const [ tableManager, setList ]= useState( { list: employees, filter: '', order: 'id', orderAscDec:'ascending' } )
    // console.log( `Updated list check`, tableManager.list )

    // function update name filter
    function updateFilter( filter ){
      const filterList = employees.filter( employee => employee.name.toLowerCase().indexOf( filter.toLowerCase() )>-1 )
      setList( { ...tableManager, filter, list: filterList })
    }



    // function to update the order of the table
    function updateOrder( order ){
      const newOrderForList = tableManager.list.sort(function(a, b) {        
          return a[order] > b[order] ? 1 : -1;
      })
      setList( { ...tableManager, order, list: newOrderForList })
    }

    return(
      <>
        <nav className="container-fluid myNav text-center justify-content-center">
          <h1>RANDZE's</h1>
          <h2>employee list</h2>
        </nav>
          <div className="container" style={{maxWidth:'720px'}} >
            <form>
                <TableFilter filter={tableManager.filter} updateFilter={updateFilter} />
                <TableOrder order={tableManager.order} updateOrder={updateOrder} />
            </form>

            <TableList employees={tableManager.list} />
          </div>
      </>
    )
}

export default App;
