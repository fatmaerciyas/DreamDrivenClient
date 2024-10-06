import HTMLFlipBook from 'react-pageflip'
import React from 'react'
import '../../../assets/notebook.css'

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <p>Page number: {props.number}</p>
    </div>
  )
})

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  )
})

function Notebook(props) {
  return (
    <HTMLFlipBook width={600} height={800} showCover={true}>
      <PageCover>BOOK TITLE</PageCover>
      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
      <PageCover>THE END</PageCover>
    </HTMLFlipBook>
  )
}

export default Notebook
