# frontend client of productList-express-server

## productList-express-server details

https://protected-basin-78090.herokuapp.com/api/products/all
ttps://protected-basin-78090.herokuapp.com/api/products?offset=3&limit=5

## TODO

- [x] layout styling
- [x] implement react-paginate lib
- [ ] styling the react-paginate component
  - [x] active items
  - [x] disabled items
  - [x] responsive
- [x] use variables for css property
- [x] use .env to store url, etc.
- [ ] use & enable router to support absolute url of current page
- [ ] use context/hook to manage global state
  - [ ] add mock in global context
  - [ ] read it in root component
- [ ] use real api to replace mock api
- [ ] fix cors issue
- [ ] build a pagination component

## NOTES

- CSS variables

  - css variables works inside of the css selector, like
    ```javascript
    .myClass {
        font-size: var(--my-self-defined-size)
    }
    ```
  - not works in media query, like
    ```javascript
    @media (min-width: var(--my-self-defined-size)) {
      ...
    }
    ```
  - a few options there
    - sass or postCSS
    - use media query at root to assign different values to the same variable

  ```javascript
      :root {
      /* desktop vars */
      }
      @media screen and (max-width: 479px) {
          :root {
          /* mobile vars */
          }
      }
  ```
