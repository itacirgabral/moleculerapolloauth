"use strict";

const ApiGateway 	= require("moleculer-web");
const { ApolloService } = require("moleculer-apollo-server");

module.exports = {
    name: "api",

    mixins: [
        ApiGateway,

        ApolloService({
            typeDefs: ``,
            resolvers: {},
            routeOptions: {
                path: "/graphql",
                cors: true,
                mappingPolicy: "restrict"
            },
            // https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server.html
            serverOptions: {
                tracing: true,
            }
        })
    ]
};