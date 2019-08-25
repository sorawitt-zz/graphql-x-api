import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose'

// TODO: import TypeDefs and Resolvers
import typeDefs from './typeDefs'
import resolvers from './resolvers'

// TODO: initial and connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('YOUR_MONGODB_URI', {useNewUrlParser: true});

// TODO: create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});