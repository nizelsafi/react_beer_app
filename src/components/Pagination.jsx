import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    const { onPageChange } = props

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={onPageChange}
            pageCount={13}
            previousLabel="< previous"
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}      
        />
    )
}

export default Pagination
