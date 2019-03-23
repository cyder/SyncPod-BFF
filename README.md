# SyncPod-BFF | [![CircleCI](https://circleci.com/gh/cyder/SyncPod-BFF.svg?style=svg)](https://circleci.com/gh/cyder/SyncPod-BFF) [![codecov](https://codecov.io/gh/cyder/SyncPod-BFF/branch/master/graph/badge.svg)](https://codecov.io/gh/cyder/SyncPod-BFF)

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

### When publish schema to apollo platform

The schema is published automatically when the master branch is merged. So, don't publish schema from local to apollo platform. However, if there is a bottleneck according to the implementation of BFF, you can directory push schema from local to apollo.


```
cp .env.sample .env
vim .env # Set ENGINE_API_KEY

yarn serve:dev
yarn publish:schema
```

### Other

COMMING SOON...
