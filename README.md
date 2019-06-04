# Exploring GraphQL with Apollo

## Sample GraphQL Query and Mutation

- Query
```
query{
  books {
    title,
    author,
    comments {
      comment
    }
  }
}
```

- Mutation
```
mutation {
  addComment(bookId: 2, comment: "I loved the dinosaurs!")
}
```