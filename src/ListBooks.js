import React from 'react'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
class ListBooks extends React.Component {
    render() { 

        const { shelfBooks, books, onMoveStat } = this.props;
        return <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {shelfBooks.map(shelf => (
              <BookShelf key={shelf.id} shelf={shelf} book={books} onMoveStat={onMoveStat} />
            ))}
              </div>
            </div>
            
            <div className="open-search">
            <Link to="Search">
            <button>Add a book</button>
          </Link>
              
            </div>
        </div>;
    }
}

export default ListBooks;
