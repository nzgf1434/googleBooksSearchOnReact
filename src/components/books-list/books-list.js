import React, { Component } from 'react';
import './books-list.css';
import BooksItem from '../books-item/';
import { withRouter } from 'react-router-dom';


 const BooksList = (props) => {

    const { list, onDetailsClick, history } = props;
  
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
                        onDetailsClick = {() => {
                           history.push(`/list/${id}`);
                           console.log('history.push: ', history);
                            return onDetailsClick(id)
                        }}
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
};
export default withRouter(BooksList);
