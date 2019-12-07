let n = 0

module.exports = {
  name: "greeter", 

  actions: {
      hello: {
          graphql: {
              query: "hello: String"
          },
          handler(context) {
              console.dir(context)
              return `context.ctx = ${ JSON.stringify(context.ctx)}`
          }
      }
  }
};