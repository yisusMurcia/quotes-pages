import React from 'react';

const OptionAuthor = (authorName, id) => {
    return (
        <option key= {id}>
            {authorName}
        </option>
    );
}

export default OptionAuthor;
