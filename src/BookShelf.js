import React from 'react';
import PropTypes from 'prop-types';
import BooksCard from './BooksCard';

class BookShelf extends React.Component {
  static propTypes = {
    book: PropTypes.array.isRequired,
  };
    render() { 
    
        const { book ,shelf,onMoveStat} = this.props;
        return  <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
         
          <ol className="books-grid">
          {book.filter(book => book.shelf === shelf.id).map(book => (
            <BooksCard key={book.id} book={book} shelf={shelf.id} onMoveStat={onMoveStat} />
          ))}
        </ol>
        </div>
      </div>;
    }
}
 
export default BookShelf;