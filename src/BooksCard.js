import React from 'react';

class BooksCard extends React.Component {
  state = {
    value: this.props.shelf
   
  };
  handleChange = event => {
    const { value } = event.target;
    
    this.setState({
      value: this.props.shelf,
    });
    this.props.onMoveStat(this.props.book, value);
  };
    render() { 
      const { book} = this.props;
        return <div>   <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : 'icons/NoImage.png'
            })` }}></div>
            <div className="book-shelf-changer">
        <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>;
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
      </div>
        </div>
      </li></div>;
    }
}
 
export default BooksCard;