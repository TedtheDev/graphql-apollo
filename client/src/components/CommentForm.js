import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`

`;

const Input = styled.input`
    border: 2px solid green;
    border-top: transparent;
    border-right: transparent;
    border-left: transparent;
    background: none;
    padding: .5rem;
`;

const Button = styled.button`
    border: none;
    background: none;
    color: #fff;
    padding: 1rem;
    margin: 0 1rem;
    cursor: pointer;
`;

const handleSubmit = (event) => {
    event.preventDefault();
//this.props.addComment({variables: { comment}})
    //TODO: add code here
}

const Comment = (props) => {
    const [comment, setComment] = useState('');

    return ( 
        <Form onSubmit={handleSubmit}>
            <Input id="comment" type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <Button type="submit" value="Comment">Comment</Button>
        </Form>
    )
}

export default Comment;