# Avatar Selection

A simple app to get a list of avatars, allow a user to pick one, provide their name and a superpower, and save it.

## Setup
1. Install node.js
2. Clone the repo
3. `cd service`
4. `npm install`
5. Create directory `credential` at the root level and create a file named `mongodb_creds.js`
```
module.exports = Object.freeze({
    MongoDB_Creds: "username:password",
    MongoDB_Cluster: "@cluster.name.here"
})
```
6. Run `npm start`
7. Use postman to test API endpoints