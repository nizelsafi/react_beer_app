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
            pageRangeDisplayed={5}
            pageCount={13}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination
