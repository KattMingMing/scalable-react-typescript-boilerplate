import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    author: { type: GraphQLString },
    body: { type: GraphQLString },
    post: { type: new GraphQLNonNull(GraphQLID) },
  }),
});
