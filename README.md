<p align = "center">
<img src="https://github.com/devjin0617/vue2-admin-lte/blob/master/vue2-admin-lte-logo.png?raw=true">
<br>
<img src="https://img.shields.io/badge/AdminLTE-2.3.11-blue.svg"> <img src="https://img.shields.io/badge/jquery-3.1.1-lightgrey.svg"> <img src="https://img.shields.io/badge/bootstrap-3.3.7-blue.svg"> <img src="https://img.shields.io/badge/vue-2.2.1-brightgreen.svg"> <img src="https://img.shields.io/badge/vuex-2.2.1-brightgreen.svg"> <img src="https://img.shields.io/badge/vue--router-2.3.0-green.svg">



<br>
<img src="https://img.shields.io/badge/npm-0.4.2-blue.svg">
</p>

# vue2-admin-lte ([Demo](https://devjin0617.github.io/vue2-admin-lte/))

> AdminLTE of Admin control panel template Based on Vuejs 2.x Front-end Framework.

![](https://github.com/devjin0617/vue2-admin-lte/blob/master/capture.png?raw=true)


## Demo Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests: coming soon
# npm run unit

# run e2e tests: coming soon
# npm run e2e

# run all tests: comping soon
# npm test
```

## How to use

First, npm install

```bash
$ npm i --save vue2-admin-lte
```

append alias config in webpack

```javascript
module.exports = {
  resolve: {
    alias: {
      'va': 'vue2-admin-lte/src'
    }
  }
}
```

import css and javascript files

```javascript
// css files
import 'va/lib/css'

// js files
import 'va/lib/script'
```

use the components in .vue

```vue
<template>
  <va-button
    name="Primary"
    theme="primary"
    size="btn-lg"
    :isFlat="true"
  ></va-button>
</template>

<script>
import VAButton from 'va/components/VAButton.vue'
export default {
  name: 'Button',
  components: {
    'va-button': VAButton
  }
}
</script>
```

## Example

```vue
<template>

  <va-direct-chat
    :talkList="talkList"
    :badgeCount="3"
    theme="primary"
    title="Direct Chat"
    placeholder="Type Messages ..."
  ></va-direct-chat>

</template>


<script>
import VADirectChat from '../path/to/components/VADirectChat.vue'

export default {
  name: 'App',
  data () {
    return {
      talkList: [
        {
          name: 'Alexander Pierce',
          date: new Date(),
          profileImage: 'http://path/to/image',
          message: `Is this template really for free? That's unbelievable`,
          isMine: false
        },
        {
          name: 'Sarah Bullock',
          date: new Date(),
          profileImage: 'http://path/to/image',
          message: `You better believe it!`,
          isMine: true
        }
    }
  },
  components: {
    'va-direct-chat': VADirectChat
  }
}

</script>
```

## how to start mock server

```javascript
node ./mock-server/index.js
```

## how to use Vuex

```javascript
// /vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
```

