import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jorgito Paiva',
        email: 'jorgito@gmail.com'
    },
    {
        id: 2,
        name: 'Bruna Santos',
        email: 'bruna_santos@gmail.com'
    }
]
 
const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): User
    }
` ;

const resolvers = {
    User: {
        id: (user) => {
            return user.id;
        },
        name: (user) => {
            return user.name;
        },
        email: (user) => {
            return user.email;
        }
    },
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length + 1}, args);
            users.push(newUser);
            return newUser;
        }
    }    
};

export default makeExecutableSchema({typeDefs, resolvers});