const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: id
    firstName: String
    lastName: String
    email: String
    orders: {Order}
}
`;

module.exports = typeDefs;