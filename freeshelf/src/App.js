import React from 'react'
import './App.css'
import books from './books.json'

function App () {
  console.log(books)

  let bgColor = "lavender"

  return (
    <div className='App'>
      <h1>Book List</h1>
      <div>
        {books.map(book => <BookComponent key={book.title} bgColor={bgColor} book={book} />)}
      </div>
    </div>
  )
}


class BookComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  render () {
    const book = this.props.book

    return (
      (
        <div className="Book" style={{backgroundColor: this.props.bgColor}}>
          <div><strong>{book.title}</strong></div>
          <div>{book.author}</div>
          <div>{book.shortDescription}</div>
          <div><img style={{height: '100px'}} src={book.coverImageUrl} /></div>
          <div>
            {this.state.expanded 
              ? <button onClick={() => this.setState({ expanded: false })}>Hide Details</button>
              : <button onClick={() => this.setState({ expanded: true })}>Show Details</button>
            }
          </div>
          {this.state.expanded && (
            <div>
              <div><i>{book.detailedDescription}</i></div>
              {book.publisher && <div><strong>Publisher:</strong> {book.publisher}</div>}
              <div> <strong>URL:</strong><u>{book.url}</u></div>
              {book.publicationDate && <div><strong>Publication Date:</strong> {book.publicationDate} </div>}
            </div>
          )}
        </div>
      )
    )
  }
}

export default App;
