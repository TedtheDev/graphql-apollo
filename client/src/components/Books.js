import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Book from './Book';

const GET_BOOKS = gql`
    query {
        books {
            title
            author
            comments {
                comment
            }
        }
    }
`;

const BooksDiv = styled.div`
    grid-area: main;
`;

class Books extends Component {
    render() {
        return (
            <Query query={GET_BOOKS} >
                {
                    ({ data, loading, error}) => {
                        console.log(error)
                        if(loading) return <div>Loading...</div>;
                        if(error) return <div>Error</div>;
                        return (
                            <BooksDiv>
                                {
                                    data.books.map(book => <Book title={book.title} author={book.author} comments={book.comments}/>)
                                }
                            </BooksDiv>
                        )
                    }
                }
            </Query>
        )
    }
}

export default Books;