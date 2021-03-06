import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
query Query($id: ID!) {
  getSingleUser(_id: $id) {
    _id
    username
    email
    password
    savedBooks {
      title
      _id
      authors
      description
      bookId
      image
      link
    }
  }
}
`;

export const MUTATION_CREATE_USER = gql`
mutation Signup($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) 
}
      
`;

export const MUTATION_SAVE_BOOK = gql`
mutation Mutation($id: ID!, $book: inputBook) {
  saveBook(_id: $id, book: $book) {
    _id
    username
    email
    password
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`;

export const MUTATION_DELETE_BOOK = gql`
mutation Mutation($id: ID!, $bookId: ID!) {
    deleteBook(_id: $id, bookId: $bookId) {
      username
      savedBooks {
        title
      }
    }
  }
`;

export const MUTATION_LOGIN = gql`
mutation Mutation($email: String, $password: String) {
  login(email: $email, password: $password)
}
`