# localforage-driver-session-storage

sessionStorage support for localForage

[![NpmVersion](https://img.shields.io/npm/v/localforage-session-storage.svg?style=flat-square)](https://www.npmjs.com/package/localforage-session-storage)
[![Travis (.com) branch](https://img.shields.io/travis/com/Alorel/localforage-session-storage/1.0.0.svg?style=flat-square)](https://travis-ci.com/Alorel/localforage-session-storage)
[![Coveralls github branch](https://img.shields.io/coveralls/github/Alorel/localforage-session-storage/1.0.0.svg?style=flat-square)](https://coveralls.io/github/Alorel/localforage-session-storage)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/localforage-session-storage.svg)](https://greenkeeper.io/)

UMD global name: **localforageDriverSessionStorage**

---

# Installation

```bash
npm install localforage-driver-session-storage
```

# Usage

```javascript
import * as localforage from 'localforage';
import * as sessionStorageDriver from 'localforage-driver-session-storage';

localforage.defineDriver(sessionStorageDriver);
localforage.setDriver(sessionStorageDriver._driver);

```

