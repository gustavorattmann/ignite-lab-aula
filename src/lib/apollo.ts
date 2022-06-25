import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u4d5w90hz701tag2mh5jt8/master',
    cache: new InMemoryCache()
})