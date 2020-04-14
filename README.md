# armadillo
my personal backend server for any and all sites or site extensions

## :wrench: Installation
Clone repo and navigate to project
```
git clone https://github.com/dchima/armadillo.git && cd ariel
```
Install latest version of node
```
nvm install
```
Install dependencies
```
npm i
```
Run development server
```
npm run start:dev
```

## Tasks
The client side should be able to
- [ ] add project
- [ ] Get all project
- [ ] edit project
- [ ] remove project

## Queries
@ localhost:3000/graphql

### add project
request
```javascript
mutation {
  addProject(
    title: "project tite",
    category: "project category",
    description: "project description",
    stacks: ["stack", "stack"],
    githubUrl: "github.com/url",
    extenralUrl: "https://example.com",
    documentUrl: "https://docs.com"
  ) {
    id
    title
    category
    description
    stacks
    githubUrl
    externalUrl
    documentUrl
  }
}
```