import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import ListBooks from './ListBooks';


const shelfBooks = [
  { id: 'currentlyReading', title: 'Currently Reading' },
  { id: 'wantToRead', title: 'Want to Read' },
  { id: 'read', title: 'Read' }
];
class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
  };

  componentDidMount(){
    this.getAllBooks ();
  }

  async getAllBooks () {
   const books = await BooksAPI.getAll();
      this.setState({ books });
    }
    updateShelfBook = async(book, shelf)=> {
      await BooksAPI.update(book, shelf);
      this.setState({
        books:this.state.books.map(b=>{
          if(b.id===book.id){
            b.shelf=shelf
          }
          return b
        })
      })
     
    };
 
  searchForBooks = async(query)=> {
    if (query.length > 0){
      const books = await BooksAPI.search(query);
      this.setState({ searchBooks: books  });
    }
  else{
    this.setState({ searchBooks: [] });
  }
     }

   
  
  ClearSearch = () => {
    this.setState({ searchBooks: [] });
  };
  render() {
    const { books,searchBooks } = this.state;
    return (
      <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <ListBooks shelfBooks={shelfBooks} books={books} onMoveStat={this.updateShelfBook}/>
        )}
      />
      <Route
        path="/Search"
        render={() => (
          <Search
          searchBooks={searchBooks}
          books={books}
          onSearch={this.searchForBooks}
          onMoveStat={this.updateShelfBook}
          onClearSearch={this.ClearSearch}
        />
          )}
      />
    </div>
    

   

    )
  }
}

export default BooksApp;
