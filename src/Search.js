import React from 'react';
import { Link } from 'react-router-dom';

import BooksCard from './BooksCard';
class Search extends React.Component {
  state = {
    value: '',
  };
  handleChange = event => {
    const val = event.target.value;
    this.setState({ value: val }, () => {
      this.props.onSearch(val);
    });
  };
  render() {
    const {
      searchBooks,
      books,
      onClearSearch,
      onMoveStat
    } = this.props;
    const updatedBooks = searchBooks.map(book => {
      books.map(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onClearSearch}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
        <input
          type="text"
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={this.handleChange}
          autoFocus
        />
      </div>
          
        </div>
        <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <BooksCard
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMoveStat={onMoveStat}
          />
        ))}
      </ol>
    </div>
      </div>
    );
  }
}
export default Search;