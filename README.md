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
- [x] add project
- [x] Get all project
- [x] edit project
- [ ] remove project
- [ ] add internet article
- [ ] get all internet articles
- [ ] edit internet article
- [ ] remove internet article
- [ ] add a story
- [ ] edit a story
- [ ] remove a story
- [ ] get all stories
- [ ] get one story.


## Queries
@ localhost:3000/graphql

## Projects
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
    docsUrl: "https://docs.com",
    secretKey: "sec_key"
  ) {
    id
    title
    category
    description
    stacks
    githubUrl
    externalUrl
    docsUrl
  }
}
```

### get project
request
```javascript
query {
    getProjects(secretKey: "sec_key") {
        id
        title
        category
        description
        stacks
        githubUrl
        externalUrl
        docsUrl
        
    }
}
```

### edit project
request
```javascript
mutation {
    editProject(
        id: 3,
        title: "Site V1",
        secretKey: "sec_key"
    ){
        id
        title
        category
    }
}
```

### remove project
request
```javascript
mutation {
    removeProject(id: 3, secretKey: "sec_key")
}
```

## Articles
### add articles
request
```javascript
mutation {
  editArticle(
    title: "article tite",
    author: "article author",
    category: "article category",
    link: "article link",
    summary: "article summary",
    imageUrl: "https://image.com",
    secretKey: "secret_key"
  ) {
    id
    title
    author
    category
    link
    summary
    imagUrl
  }
}
```
### edit articles
request
```javascript
mutation {
  addArticle(
    id: 2,
    secretkey: "sec_key
    author: "article author",
  ) {
    id
    title
    author
  }
}
```
### get articles
request
```javascript
mutation {
  getArticles(secretKey: "sec_key") {
        id
    title
    author
    category
    link
    summary
    imageUrl
  }
}
```
### remove articles
request
```javascript
mutation {
    removeArticle(id: 3, secretKey: "sec_key")
}
```
