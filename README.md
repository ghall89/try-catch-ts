# try-catch-wrapper

A type-safe try/catch wrapper

## Install

```bash
# npm
npm install try-catch-wrapper
# pnpm
pnpm add try-catch-wrapper
# yarn
yarn add try-catch-wrapper
# bun
bun add try-catch-wrapper
```

## Usage

There are 2 functions you can call, depending on if you'd like to wrap a syncronous or asyncronous function.

### Async

For asyncronous functions, simply import the `tryCatch()` function. It takes any asyncronous function as the first argument, and, optionally, a string to display when an error is thrown, and either returns the result of your function, or throws an error.

```javascript
import { tryCatch } from 'try-catch-wrapper'

async function yourAsyncFunction(id: string) {
  const res = await fetch(`https://example.com/api/item/${id}`)

  return res
}

const response = await tryCatch(() => yourAsyncFunction('123'), 'Error fetching item')
```

### Sync

For asyncronous functions, simply import the `tryCatch()` function. It takes any asyncronous function as the first argument, and, optionally, a string to display when an error is thrown, and either returns the result of your function, or throws an error.

```javascript
import { tryCatchSync } from 'try-catch-wrapper'

function yourSyncFunction(name: string) {
  const message = `Hello, ${name}!`

  return message
}

const response = await tryCatchSync(() => yourSyncFunction('Steve'), 'Error creating message')
```
