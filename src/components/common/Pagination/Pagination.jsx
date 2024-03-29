import React, {  useState } from 'react'
import { Button } from '../Button'

function Pagination({children,recordsPerPage,data}) {
const [currentPage,setCurrentPage] = useState(1)

const lastIndex = currentPage*recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const lastPage = data.length/recordsPerPage;
console.log(typeof recordsPerPage);
function prevPage () {
    {currentPage !== 1 ?setCurrentPage(currentPage-1):null}

}
function nextPage () {
    {currentPage !== lastPage ?setCurrentPage(currentPage+1):null}
    }
    return (

    <div>
     
      {data && data.length?(data.slice(firstIndex,lastIndex).map((number,index)=>

 (
<div key={index+1}>number {number}</div>)
)):(<div>no data in children</div>)} 
     
    
    

<Button variant='primary' onClick={prevPage}>prev</Button>
{currentPage} of {lastPage}
<Button variant='primary' onClick={nextPage}>next</Button>

    </div>
  )
}

export default Pagination
