# localforage-driver-session-storage

sessionStorage support for localForage

[![NpmVersion](https://img.shields.io/npm/v/localforage-driver-session-storage.svg?style=flat-square)](https://www.npmjs.com/package/localforage-driver-session-storage)
[![Travis (.com) branch](https://img.shields.io/travis/com/Alorel/localforage-driver-session-storage/1.0.2.svg?style=flat-square)](https://travis-ci.com/Alorel/localforage-driver-session-storage)
[![Coveralls github branch](https://img.shields.io/coveralls/github/Alorel/localforage-driver-session-storage/1.0.2.svg?style=flat-square)](https://coveralls.io/github/Alorel/localforage-driver-session-storage)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/localforage-driver-session-storage.svg)](https://greenkeeper.io/)

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

