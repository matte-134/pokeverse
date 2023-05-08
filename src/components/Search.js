import React, { useEffect, useState } from 'react';
import {InputGroup, Form} from 'react-bootstrap';

function Search() {
console.log("search is called")
    return(
        <InputGroup>
            <InputGroup.Text>Search Pokemon</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Search Pokemon" />
        </InputGroup>
    );
}

export {Search};