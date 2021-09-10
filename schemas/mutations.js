const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const { PostType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addProject: {
      type: PostType,
      args: {
        post_id: { type: GraphQLID },
        content: { type: GraphQLString },
        comments: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO project(post_id, content, comments) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.post_id,
          new Date(),
          args.content,
          args.comments
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;