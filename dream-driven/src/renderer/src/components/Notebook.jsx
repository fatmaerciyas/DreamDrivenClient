import { useState } from 'react'
import '../../../assets/notebook.css'

const Notebook = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState(['', '']) // Two editable pages
  const [isFlipped, setIsFlipped] = useState(false)

  const handleChange = (e) => {
    const updatedPages = [...pages]
    updatedPages[currentPage] = e.target.value
    setPages(updatedPages)
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1)
      setIsFlipped(true)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
      setIsFlipped(true)
    }
  }

  const handleClickImage = () => {
    setIsFlipped(false) // Reset flip state to show pages
    setCurrentPage(0) // Reset to first page
  }

  return (
    <div className="notebook">
      <div className={`notebook-container ${isFlipped ? 'flip' : ''}`}>
        <div className="notebook-page image-page" onClick={handleClickImage}>
          <img src="your-image-url.jpg" alt="Notebook Cover" />
        </div>
        <div className="notebook-page">
          <textarea
            className="notebook-textarea"
            value={pages[0]}
            onChange={handleChange}
            placeholder="Write something..."
          />
        </div>
        <div className="notebook-page">
          <textarea
            className="notebook-textarea"
            value={pages[1]}
            onChange={handleChange}
            placeholder="Write something..."
          />
        </div>
      </div>
      <div className="notebook-header">
        <button onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Notebook
