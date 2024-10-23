import React from 'react';

const Filter = ({ setFilter }) => {
    return (
        <div>
            <button id='filterButton' onClick={() => setFilter('all')}>Wszystkie zadania</button>
            <button id='filterButton' onClick={() => setFilter('completed')}>Zadania wykonane</button>
            <button id='filterButton' onClick={() => setFilter('incomplete')}>Zadania niewykonane</button>
        </div>
    );
};

export default Filter;