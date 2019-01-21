import React, { Component } from 'react';
import './books-list.css';
import BooksItem from '../books-item/';
// import GoogleBooksService from '../../services/GoogleBooksService';


export default class BooksList extends Component {

//   state = {
//     //   itemsBooks: [{
//     //       id: 1,
//     //       volumeInfo:{
//     //         title: 'title',
//     //         authors: 'author',
//     //         publishedDate: '1/17/2019',
//     //         imageLinks: {
//     //             smallThumbnail: 'http://leyla-shop.com/wp-content/uploads/2014/11/%D0%A6%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D0%A2%D0%B0%D0%B1%D0%B0%D0%BA%D0%B0.png'
//     //         }
//     //     }  
//     //   }]
//     itemsBooks: null,
//     search: 'If' // это state из инпута!
//   }

//   componentDidMount(){
//     this.getBooks();
//   }

//   booksService = new GoogleBooksService();



//   getBooks = () => {
//     this.booksService.getSearchResult(this.state.search)
//     .then((res) => {
//         this.setState(() => {return {itemsBooks: res.items}});        
//     });
//   }

  render = () => {

    const { list } = this.props;
    
    if (list) {
       const elements = list.map((book) => {
            return (
                <li key={book.id} className="container">
                    <BooksItem 
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        date={book.volumeInfo.publishedDate}
                        picture={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                </li>
            )
        });
        return (
            <ul>
                { elements }
            </ul>
        )
    }
    else {
        return (
            <ul>
            </ul>
        )
    }
  }
}
