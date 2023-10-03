import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto"
const typeDefs = gql`
    type Query {
        users: [String!]!
    }

    type Mutation {
        createuser(name: String): String!
    }
`;


interface User {
    id: string
    name: string
}

const users: User[] = [];

const server = new ApolloServer({ 
    typeDefs, 
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },

        Mutation: {
            createuser: (_, args,) => {
                //console.log(args)
                const user = {
                    id: randomUUID(),
                    name: args.name
                }
                users.push(user)

                return args.name
            }
        },
    },
})

server.listen().then(({ url }: { url: string }) => {
    console.log('server url: ', url)
})
