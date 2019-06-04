import React from 'react';
import styled from 'styled-components';

import CommentForm from './CommentForm';

const BookDiv = styled.div`
    border: 1px solid #d61baa;
    border-radius: 5px;
    margin: 20px 0;
    padding: 15px;
`;

const CommentListItem = styled.li`
    list-style: none;
    font-size: 1.2rem;
`;

const CommentSection = styled.div`
    margin: .5rem 0;
    & span {
        font-size: 1.2rem;
    }
    & ul {
        margin: 0;
    }
`;

const Book = ({ title, author, comments }) => {
    return (
        <BookDiv>
            <div>{title}</div>
            <div>{author}</div>
            <CommentSection>
                <span>Comments:</span>
                <ul>
                    {
                        comments && comments.map(comment => <CommentListItem>-{comment.comment}-</CommentListItem>)
                    }
                </ul>
            </CommentSection>
            <CommentForm />
        </BookDiv>
    )
}

export default Book;