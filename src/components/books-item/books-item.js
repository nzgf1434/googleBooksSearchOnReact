import React from 'react';
import './books-item.css';
import defaults from '../../defaultSettings';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function BooksItem(props) {

    const {defaultSmallThumbnail, defaultTitle, defaultAuthor, defaultDate} = defaults;
    const {title = defaultTitle, author = defaultAuthor, date = defaultDate, picture = defaultSmallThumbnail, onDetailsClick} = props;
    return (
        <Router>
            <div className="item row align-items-center">
                <div className="col-6">
                    <p>Title: <span className="bold">{title}</span></p>
                    <p>Author(s): <span className="bold">{author}</span></p>
                    <p>Published date: <span className="bold">{date}</span></p>
                </div>
                <div className="col-4">
                    <img src={picture} alt=" for book" className="smallThumbnail"/>
                </div>
                <div className="col-2"><Link to="/list" className="btn btn-primary" onClick={onDetailsClick}>...details</Link></div>
            </div>
        </Router>
    )
}
