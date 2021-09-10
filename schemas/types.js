import graphql from "graphql";
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  type: "Query",
  fields: {
    user_id: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString }
  }
});

const PostType = new GraphQLObjectType({
  name: "Post",
  type: "Query",
  fields: {
    post_id: { type: GraphQLString },
    content: { type: GraphQLString },
    comments: { type: GraphQLString }
  }
});

/*const User_postType = new GraphQLObjectType({
  name: "User_post",
  type: "Query",
  fields: {
    post_id: { type: GraphQLString },
    user_id: { type: GraphQLString },
  }
});*/

const _UserType = UserType;
export { _UserType as UserType };
export const ProjectType = PostType;