# SyncPod-BFF

```
------------------         -----------------           -------------------
| SyncPod-server |         |  SyncPod-BFF  |           | SyncPod-web-app |
|                | RESTful |               |           |                 |
|                |   API   |               |  GraphQL  |                 |
|                | <------ |               | <-------- |                 |
|     Rails      |         |      Node     |           |      React      |
|                |         |               |   Query   |                 |
|                |  JSON   |               |  Response |                 |
|                | ------> |               | --------> |                 |
|                |         |               |           |                 |
------------------         -----------------           -------------------
```

## Getting started

1. Install

```
git clone git@github.com:cyder/SyncPod-BFF.git
cd SyncPod-BFF
yarn install
```

2. Start-up server

```
yarn start
```

3. View GraphQL playground

```
open http://localhost:4000/graphql
```

## Deployment

COMMING SOON...
