const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: id
    firstName: String
    lastName: String
    email: String
    orders: {Order}
},
type Product {
_id: id
name: String
description: String
image: String
quantity: Int
price: Float
category: Category
},
 type Order {
    _id: id
    firstName: String
    lastName: String
    email: String
    orders: [Order]
 }, 
 type Checkout {
    session: ID
 },
 type Auth {
    token: ID
    user: User
 },
 type Category {
    _id: ID
    name: String
 },
 type Query {
categories: [Category]
products(category: ID, name: String): [Product]
product(_id:ID!): Product
user: User
order(_id:ID!): Order
checkout: (products: [ID]!): Checkout
 },

type Mutation {
    addUser(firstName: String!, lastName: String!, )
}
 }
`;

module.exports = typeDefs;