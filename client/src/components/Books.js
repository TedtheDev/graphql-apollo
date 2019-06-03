import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Book from './Book';

const GET_BOOKS = gql`
    query {
        books {
            title
            author
        }
    }
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
                            <div>
                                {
                                    data.books.map(book => <Book title={book.title} author={book.author} />)
                                }
                            </div>
                        )
                    }
                }
            </Query>
        )
    }
}

export default Books;