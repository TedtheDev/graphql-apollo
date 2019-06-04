import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import CommentForm from './components';

const ADD_COMMENT = gql`
  mutation addComment($bookId: Int, $comment: String) {
    addComment(bookId: $bookId, comment: $comment)
  }
`;

export default function Comment() {
  return (
    <Mutation mutation={ADD_COMMENT}>
      {(addComment, { data }) => <CommentForm handleSubmit={addComment}/>}
    </Mutation>
  )
}