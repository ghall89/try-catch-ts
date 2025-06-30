# try-catcher-ts

A type-safe try/catch wrapper

## Install

```bash
# npm
npm install try-catcher-ts
# pnpm
pnpm add try-catcher-ts
# yarn
yarn add try-catcher-ts
# bun
bun add try-catcher-ts
```

## Usage

There are 2 functions you can call, depending on if you'd like to wrap a syncronous or asyncronous function.

### Async

For asyncronous functions, simply import the `tryCatch()` function. It takes any asyncronous function as the first argument, and, optionally, a string to display when an error is thrown, and either returns the result of your function, or throws an error.

```javascript
import { tryCatch } from 'try-catcher-ts'

async function yourAsyncFunction(id: string) {
  const res = await fetch(`https://example.com/api/item/${id}`)

  return res
}

const response = await tryCatch(() => yourAsyncFunction('123'), 'Error fetching item')
```

### Sync

For asyncronous functions, simply import the `tryCatch()` function. It takes any asyncronous function as the first argument, and, optionally, a string to display when an error is thrown, and either returns the result of your function, or throws an error.

```javascript
import { tryCatchSync } from 'try-catcher-ts'

function yourSyncFunction(name: string) {
  const message = `Hello, ${name}!`

  return message
}

const response = tryCatchSync(() => yourSyncFunction('Steve'), 'Error creating message')
```
