const { ApolloServer, gql } = require('apollo-server');

const books = [
    {
        bookId: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        comments: [
            { comment: 'This book is pretty sweet' }
        ]
    },
    {
        bookId: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
        comments: [
            { comment: 'Now I am paranoid of dinosaurs.' }
        ]
    }
];

const typeDefs = gql`
    # Comments in GraphQL are defined with the hash (#) symbol.

    # This "Book" type can be used in other type declarations.
    type Book {
        bookId: Int
        title: String
        author: String
        comments: [Comment]
    }

    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
        books: [Book]
    }

    type Mutation {
        addComment(bookId: Int, comment: String): String
    }

    type Comment {
        comment: String
    }
`;

const resolvers = {
    Query: {
        books: () => books
    },
    Mutation: {
        addComment: (_, { bookId, comment }) => {
            const theBook = books.filter(book => bookId === book.bookId);
            theBook[0].comments.push({comment});
            return comment;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
    .then(({url})=> console.log(`Server ready at ${url}`))