import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'; 


export default function PaginationComponent({getPage,pageCount}) {
  const handlePageClick=(data)=>{
    getPage(data.selected +1)
  }
  return (
    <div className='container'>
      <div className='paginate'>
    <ReactPaginate
        breakLabel="..."
        nextLabel=" التالى"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName='C'
        pageClassName='P'
        pageLinkClassName='L'
        previousClassName='Pr'
        nextClassName='N'
        breakClassName='b'
        previousLinkClassName='PL'
        nextLinkClassName='NL'
        activeClassName='active'

      /> 
      </div> 
    </div>
  )
}
