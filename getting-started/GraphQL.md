[//]: # "Title: GraphQL"
[//]: # "Weight: 1"
[//]:
  #
  "Description: Getting started with GraphQL API to integrate and build itinerary based applications and website functionality."

# GraphQL API

Welcome to Alpaca's GraphQL API documentation! We are excited to provide
developers with a powerful integration solution for their applications and
websites. With our GraphQL API, you can unlock a wide array of possibilities to
enhance user experiences and drive the success of your app or website.

By integrating Alpaca's GraphQL API into your projects, developers gain seamless
access to a comprehensive set of tools and features that enable you to
effortlessly display and plan itineraries. Whether you are building a website,
an iOS or Android application, or working alongside proprietary planning tools,
our API is designed to seamlessly integrate with any technology stack.

We understand that developers need flexibility and adaptability when it comes to
integrating new services into their projects. Alpaca's GraphQL API empowers you
to leverage the full potential of your chosen technology, enabling you to create
innovative, efficient, and engaging experiences for your users.

No matter the scale or complexity of your application, our GraphQL API offers a
streamlined and efficient solution to meet your specific needs. Whether you're a
seasoned developer or just starting your coding journey, our comprehensive
documentation and intuitive API design will ensure a smooth integration process,
allowing you to focus on what matters most: delivering exceptional value to your
users.

Join the growing community of developers who have already integrated Alpaca's
GraphQL API into their applications and websites, and embark on an exciting
journey of building extraordinary experiences. Let Alpaca be your partner in
driving innovation and success in your app or website. Start integrating today
and unlock the full potential of your projects!

## Endpoint

Alpaca's primary GraphQL endpoint:

```
https://graphql.withalpaca.travel/?accessToken=pk.XXX
```

<aside class="information">
  Your `accessToken` is a unique identifier that determines the scope of 
  services you can access. Tokens can be categorized as either secret or public,
  enabling you to use distinct keys for different purposes. Public keys are
  suitable for reading content on your public website, while secret keys provide
  broader access for write-related operations.
</aside>

## Request Example

GraphQL simplifies the process of making requests for developers, offering a
variety of options. To initiate a GraphQL request, you can utilize HTTP POST
calls, embedding your query within the request. The beauty of GraphQL lies in
its simplicity, as the query can be sent as plain text, enabling you to utilize
straightforward HTTP fetch requests.

Here's an example of how you can make a GraphQL request using a fetch call:

```typescript
// Your query describes exactly what you want returned. There are loads of
// examples in this documentation to help you out.
const query = `...`;

// Basic GraphQL calls are just a HTTP POST request with the query
const response = await fetch(
  `https://graphql.withalpaca.travel/?accessToken=pk.XXX`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }
);

// Access the response data
const { data } = await response.json();
console.log(data); // { ... }
```

When making a GraphQL call, it functions as an HTTP POST request, with the query
enclosed within the request. The response data is conveniently encapsulated
within the response body, allowing for seamless integration and straightforward
handling within your code.

To assist developers in utilizing our API effectively, we provide a
comprehensive set of [example operations](/example-operations/) that serve as
references. These examples cover a wide range of use cases, empowering you to
harness the full potential of our GraphQL API and effortlessly implement the
desired functionality in your application or website.

## Popular Clients

In addition to utilizing basic HTTP requests, you can take advantage of various
libraries that simplify the management of your GraphQL calls, providing enhanced
functionality and ease of integration.

Some popular libraries for working with GraphQL include:

- [Apollo GraphQL](https://www.apollographql.com/apollo-client): Apollo GraphQL
  offers a comprehensive set of tools and client libraries for various
  platforms, enabling seamless integration of GraphQL into your preferred
  technology stack.
- [GraphQL Request](https://github.com/jasonkuhrt/graphql-request): GraphQL
  Request is a lightweight and flexible library that facilitates making GraphQL
  queries and mutations in a straightforward manner.
- [Relay](https://relay.dev/): Relay is a powerful GraphQL client framework that
  optimizes data fetching and synchronization between the client and server,
  providing efficient data management capabilities.

These libraries are just a few examples of the extensive range of options
available. Whether you're working with PHP, Go, .NET, Java/Kotlin,
Swift/Objective-C, or other popular languages, you can explore a wealth of
alternative libraries tailored to your specific technology stack.

For a comprehensive list of code options and libraries across various languages,
you can refer to Code options for using GraphQL. This resource provides a wealth
of information and recommendations to assist you in finding the most suitable
GraphQL library for your development needs.

With these libraries at your disposal, you can confidently build and integrate
GraphQL into your projects, leveraging the power of existing tools and packages
to streamline your development process.
