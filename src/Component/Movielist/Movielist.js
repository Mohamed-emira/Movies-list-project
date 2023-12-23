import React from 'react'
import CardMovie from '../CardMovie/CardMovie'
import PaginationComponent from '../Pagination/Pagination'

export default function Movielist({movies,getPage,pageCount}) {
  return (
    <div className='container'>
    {movies.length >=1 ?(movies.map((mov)=>{
    return(      <CardMovie mov={mov}/>
    )
    })):<h1>لايوجد افلام</h1>}
    <PaginationComponent getPage={getPage} pageCount={pageCount} />

      

    
    </div>
  )
}
