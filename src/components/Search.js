import React, { useEffect, useState } from 'react';
import {InputGroup, Form} from 'react-bootstrap';

function Search({query, handleTyping}) {
    console.log("querys is: ",query);
    return(
        <div>
            <InputGroup size="mb-3">
                <InputGroup.Text>Filter</InputGroup.Text>
                <Form.Control
                    onChange={(e) => {console.log("e.target.value is: ", e.target.value); handleTyping(e.target.value);}}
                    value={query}
                    as="textarea"
                    aria-label="Pokemon" />
            </InputGroup>
        </div>
    );
};

export {Search};