import HTMLFlipBook from 'react-pageflip'
import React, { useState } from 'react'
import '../../../assets/notebook.css'
import pageCoverImage from '../../../assets/pageCovers/pageCover2.jpg'
import pageImage from '../../../assets/pages/page1.jpg'

import pageCover1 from '../../../assets/pageCovers/pageCover1.jpg'
import pageCover2 from '../../../assets/pageCovers/pageCover2.jpg'
import pageCover4 from '../../../assets/pageCovers/pageCover4.jpg'
import pageCover5 from '../../../assets/pageCovers/pageCover5.jpg'
import pageCover6 from '../../../assets/pageCovers/pageCover6.jpg'
import pageCover7 from '../../../assets/pageCovers/pageCover7.jpg'
import pageCover8 from '../../../assets/pageCovers/pageCover8.jpg'
import pageCover9 from '../../../assets/pageCovers/pageCover9.jpg'
import pageCover10 from '../../../assets/pageCovers/pageCover10.jpg'
import pageCover11 from '../../../assets/pageCovers/pageCover11.jpg'
import pageCover12 from '../../../assets/pageCovers/pageCover12.jpg'
import pageCover13 from '../../../assets/pageCovers/pageCover13.jpg'
import pageCover14 from '../../../assets/pageCovers/pageCover14.jpg'

import page1 from '../../../assets/pages/page1.jpg'
import page2 from '../../../assets/pages/page2.jpg'
import page3 from '../../../assets/pages/page3.jpg'
import page4 from '../../../assets/pages/page4.jpg'
import page5 from '../../../assets/pages/page5.jpg'
import page6 from '../../../assets/pages/page6.jpg'
import page7 from '../../../assets/pages/page7.jpg'
import Todo from './NotebookItems/Todo'
import Notes from './NotebookItems/Notes'
import Important from './NotebookItems/Important'
import MainGoals from './NotebookItems/MainGoals'
import Water from './NotebookItems/Water'

const PageCovers = [
  pageCover1,
  pageCover2,
  pageCover4,
  pageCover5,
  pageCover6,
  pageCover7,
  pageCover8,
  pageCover9,
  pageCover10,
  pageCover11,
  pageCover12,
  pageCover13,
  pageCover14
]
const Pages = [page1, page2, page3, page4, page5, page6, page7]

const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="demoPage"
      ref={ref}
      style={{
        display: 'flex',
        margin: '0',
        padding: '0',
        height: '800px',
        width: '600px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Full Cover Background Image */}
      <div
        style={{
          backgroundImage: `url(${props.imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />

      {/* Overlay Content */}
      <div
        style={{
          margin: '30px',
          height: '92%',
          width: '90%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            gap: '20px'
          }}
        >
          <Todo />
          <Notes />
        </div>

        {/* Right Column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flex: '1'
          }}
        >
          <Important />
          <MainGoals />
          <Water />
        </div>
      </div>
    </div>
  )
})

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className="page page-cover"
      ref={ref}
      style={{
        position: 'relative',
        perspective: '1000px',
        height: '100%' // Ensure it fills the page
      }}
    >
      <div
        className="page-content"
        style={{
          transform: 'rotateY(0deg)',
          transition: 'transform 0.6s',
          height: '100%',
          width: '100%' // Ensure it fills the page
        }}
      >
        <img
          src={props.imageSrc}
          alt="Cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
})

function Notebook(props) {
  const [activeBoxIndex, setActiveBoxIndex] = useState(null)
  const [selectedImage, setSelectedImage] = useState(pageCoverImage)
  const [activeBoxIndexPage, setActiveBoxIndexPage] = useState(null)
  const [selectedPageImage, setSelectedPageImage] = useState(pageImage)

  const handleImageClick = (image) => {
    setSelectedImage(image)
    console.log(selectedPageImage, selectedImage)
  }

  const handleImageClickPage = (image) => {
    setSelectedPageImage(image)
    console.log(selectedPageImage, selectedImage)
  }

  return (
    <>
      <HTMLFlipBook
        width={600}
        height={800}
        showCover={true}
        clickEventForward={false}
        disableFlipByClick={true}
      >
        <PageCover imageSrc={selectedImage} />
        <Page imageSrc={selectedImage} number="2"></Page>
        <Page imageSrc={selectedPageImage} number="3"></Page>
        <Page imageSrc={selectedPageImage} number="4"></Page>
        <Page imageSrc={selectedPageImage} number="5"></Page>
        <Page imageSrc={selectedPageImage} number="6"></Page>
        <Page imageSrc={selectedPageImage} number="7"></Page>

        <PageCover imageSrc={selectedImage} />
      </HTMLFlipBook>
      <div className="relative grid gap-4 grid-cols-2">
        <button
          onClick={() => setActiveBoxIndex(activeBoxIndex === null ? 0 : null)}
          className="absolute top-4 left-0 bg-blue-500 text-white p-2 rounded"
        >
          {activeBoxIndex === null ? 'Choose Image' : 'Close'}
        </button>
        <button
          onClick={() => setActiveBoxIndexPage(activeBoxIndexPage === null ? 0 : null)}
          className="absolute top-4 left-32 bg-blue-500 text-white p-2 rounded"
        >
          {activeBoxIndexPage === null ? 'Choose Image' : 'Close'}
        </button>

        {activeBoxIndex !== null && (
          <div className="absolute bottom-16 right-8 transform -translate-x-1/2 bg-transparent backdrop-blur p-4 rounded-lg shadow-lg z-10 w-48 overflow-auto">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Images</h2>
              <button
                className="text-xl font-bold"
                onClick={() => setActiveBoxIndex(null)} // Close box
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {PageCovers.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        )}

        {activeBoxIndexPage !== null && (
          <div className="absolute bottom-16 right-32 transform -translate-x-1/2 bg-transparent backdrop-blur p-4 rounded-lg shadow-lg z-10 w-48 overflow-auto">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Images</h2>
              <button
                className="text-xl font-bold"
                onClick={() => setActiveBoxIndexPage(null)} // Close box
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {Pages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => handleImageClickPage(image)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Notebook
