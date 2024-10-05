import React from 'react'

function Pagination({ page, lastPage, setPage }) {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {

        setPage((prevState) => prevState - 1)
        scrollTop()

    }
    const handleLastPage = () => {
        setPage((prevState) => lastPage)
        scrollTop()
    }
    const handleFirstPage = () => {
        setPage((prevState) => page - page + 1)
        scrollTop()
    }

    return (
        <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl '>


            <button onClick={handleFirstPage} className='transition-all hover:text-color-accent'> {'<<'} </button>
            {page <= 1 ? null : <button onClick={handlePrevPage} className='transition-all hover:text-color-accent'>Prev</button>}
            <button> {page} of {lastPage} </button>
            {page >= lastPage  ? null : <button onClick={handleNextPage} className='transition-all hover:text-color-accent'>Next</button>
            }
            
            <button onClick={handleLastPage} className='transition-all hover:text-color-accent'> {'>>'} </button>
        </div>
    )
}

export default Pagination