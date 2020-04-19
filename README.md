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
- [x] remove project
- [x] add internet article
- [x] get all internet articles
- [x] edit internet article
- [x] remove internet article
- [x] add a story
- [x] edit a story
- [x] remove a story
- [x] get all stories
- [x] get one story.


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
  addArticle(
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
    imageUrl
  }
}
```
### edit articles
request
```javascript
mutation {
  editArticle(
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

## Publications
### add publication
request
```javascript
mutation {
  addPublication(
    title: "publication title",
    author: "publication author",
    category: "category",
    description: "publication description",
    body: "<p>publication body</p>"
    imageUrl: "https://image.com",
    secretKey: "sec_key"
  ) {
    id
    title
    author
    category
    description
    body
    imageUrl
  }
}
```
### edit publication
request
```javascript
mutation {
    editPublication(
        id: 1,
        description: "new publication description",
        secretKey: "sec_key"
    ){
        id
        title
        category
    }
}
```
### remode publication
request
```javascript
mutation {
    removePublication(id: 1, secretKey: "sec_key")
}
```
### get publications
request
```javascript
query {
    getPublications {
        title
        id
        author
        category
        description
        slug
    }
}
```
### get sinlge publication
request
```javascript
// slug or id
query {
    getPublication(slug: "welcome-home") {
        title
        id
        author
        category
        description
        slug
    }
}
```
