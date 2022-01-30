import React, { useState, useEffect } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [sortedArticles, setSortedArticles] = useState(articles);
    const [sortedBy, setSortedBy] = useState(null);

    // TODO: Play with this in the future to learn more and make it more reusable and cover more use-cases.
    useEffect(() => {
        setSortedArticles([...articles.sort((a, b) => {
            if (sortedBy === 'date') {
                return new Date(b.date)- new Date(a.date);
            }
            return b.upvotes - a.upvotes;
        })]);
    }, [articles, sortedBy]);
    
    return (
        <div className="App">
            <h8k-navbar header={title} />
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => setSortedBy('upvotes')}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => setSortedBy('date')}>Most Recent</button>
            </div>
            <Articles articles={sortedArticles}/>
        </div>
    );

}

export default App;
