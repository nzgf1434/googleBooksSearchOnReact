import React from 'react';
import './books-item.css';
import defaults from '../../defaultSettings';

export default function BooksItem(props) {

    const {defaultSmallThumbnail, defaultTitle, defaultAuthor, defaultDate} = defaults;
    
    const {title = defaultTitle, author = defaultAuthor, date = defaultDate, picture = defaultSmallThumbnail} = props;
    return (
    <div className="item row align-items-center">
        <div className="col-6">
            <p>Title: <span className="bold">{title}</span></p>
            <p>Author(s): <span className="bold">{author}</span></p>
            <p>Published date: <span className="bold">{date}</span></p>
        </div>
        <div className="col-4">
            <img src={picture} alt=" for book" className="smallThumbnail"/>
        </div>
        <div className="col-2"><button className="btn btn-primary">...more</button></div>
    </div>
  )
}
