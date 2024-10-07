import HTMLFlipBook from 'react-pageflip'
import React, { useState } from 'react'
import '../../../assets/notebook.css'
import pageCoverImage from '../../../assets/pageCovers/pageCover2.jpg'

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

const images = [
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

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p>Page number: {props.number}</p>
    </div>
  )
})

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div
      className="page page-cover"
      ref={ref}
      data-density="hard"
      style={{
        position: 'relative',
        perspective: '1000px' // Derinlik hissi için
      }}
    >
      <div
        className="page-content"
        style={{
          transform: 'rotateY(0deg)',
          transition: 'transform 0.6s',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // Gölgelendirme
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

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  return (
    <>
      <HTMLFlipBook width={600} height={800} showCover={true}>
        <PageCover imageSrc={selectedImage} />
        <Page number="1">Page text</Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
        <Page number="5">Page text</Page>
        <Page number="6">Page text</Page>
        <PageCover imageSrc={selectedImage} />
      </HTMLFlipBook>
      <div className="relative">
        <button
          onClick={() => setActiveBoxIndex(activeBoxIndex === null ? 0 : null)}
          className="absolute top-4 left-4 bg-blue-500 text-white p-2 rounded"
        >
          {activeBoxIndex === null ? 'Choose Image' : 'Close'}
        </button>

        {activeBoxIndex !== null && (
          <div className="absolute bottom-16 right-32 transform -translate-x-1/2 bg-transparent backdrop-blur p-4 rounded-lg shadow-lg z-10 w-48 overflow-auto">
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
              {images.map((image, index) => (
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
      </div>
    </>
  )
}

export default Notebook
