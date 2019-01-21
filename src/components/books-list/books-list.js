import React, { Component } from 'react';
import './books-list.css';
import BooksItem from '../books-item/';


export default class BooksList extends Component {

  render = () => {

    const { list, onDetailsClick } = this.props;
    
    if (list) {
       const elements = list.map((
           {id, volumeInfo: {title, authors, publishedDate, imageLinks = {}}}) => {
            return (
                <li key={id} className="container">
                    <BooksItem 
                        title={title}
                        author={authors}
                        date={publishedDate}
                        picture={imageLinks.smallThumbnail}
                        onDetailsClick = {() => onDetailsClick(id)}
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
