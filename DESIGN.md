# FAOnline

FA = Favorite Author

Helping people find cheap books written by their favorite authors.

## Flow:

A **buyer** tells "FAOnline" the *name* of the author.
"FAOnline" sends this *name* to registered **bookStores**.
Each **bookStore** responds with a *price* amount that they sell the author's book for.

## Store Model: (using Spoke terminology)
This will help us create the initial state of our app.

* **buyer** is a `Spoke client` that can create `Request for Quotes (rfq)` and receive `Quotes`
```typescript
// A buyer gives us the name, so we create an rfq for using this info.
namespace buyer { // buyer becomes a redux slice
  interface Rfqs {
    [rfqId: string]: Rfq
  }
  interface Quotes {
    [quoteId: string]: Quote
  }
}

interface Rfq {
  rfqId: string
  author: string
}
interface Quote {
  rfqId: string
  quoteId: string
  price: number
}
```

* **bookStore** is a `Spoke provider` that listens for `rfq's` and create `Quotes`
```typescript
// A bookstore gives us the price, so we create a quote using this info
namespace bookStore {
  interface Quotes {
    [quoteId: string]: Quote
  }
  interface Rfqs { // bookstore has to view received rfq's before creating the quote
    [rfqId: string]: Rfq
  }
}
```
