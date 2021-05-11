import React from 'react'
/**
 * Shared component for pagination, which expect a page
 * @param {page} props page number
 * @param {pageDetails} props details of pagination like TotalPage, next, prev 
 */
const Pagination = (props) => {
    const { page, pageDetails } = props

    const { pages, next, prev } = pageDetails
    let pageArray = []
    let maxDisplayPage = page === 1 ? page + 11 : page + 10 // create array of pages for only 10 records
    if (maxDisplayPage > pages) {
        maxDisplayPage = pages - 1 // last page should always be n-1
    }
    for (let i = page ; i < maxDisplayPage; i++) {
        pageArray.push(i)
    }

    return (
        <div className="pagination">
            <span className={`${!prev ? 'disabled' : ''}`} onClick={props.prevPage}>&laquo;</span>
            {/* always show first page link */}
            {page >1 && <span className={`${1 === page ? 'active' : ''}`} onClick ={(e)=>props.setPage(1)}> 1</span>} 
            {pageArray.map((index) => {
                return (
                    <span className={`${index === page ? 'active' : ''}`} key={index} onClick ={(e)=>props.setPage(index)}> {index}</span>
                )
            })}
            {/* always show last page link */}
            <span className={`${pages === page ? 'active' : ''}`} onClick ={(e)=>props.setPage(pages)}> {pages}</span>
            <span className={`${!next ? 'disabled' : ''}`} onClick={(e)=>props.nextPage()}>&raquo;</span>
        </div>

    )
}

export default Pagination