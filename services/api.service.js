"use strict";

const ApiGateway 	= require("moleculer-web");
const { ApolloService } = require("moleculer-apollo-server");

module.exports = {
    name: "api",

    mixins: [
        ApiGateway,

        ApolloService({
            authorization: true, // Feature request
            typeDefs: ``,
            resolvers: {},
            routeOptions: {
                path: "/graphql",
                cors: true,
                mappingPolicy: "restrict"
            },
        })
    ],

    methods: {
      authorize(ctx, route, req) {
          return Promise.resolve(() => ({ admin: true }))
      }
    }
};