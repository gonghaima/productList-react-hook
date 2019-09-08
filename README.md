# frontend client of productList-express-server

## productList-express-server details

- source code

<https://github.com/gonghaima/productList-express-server>

- hosted on

<https://protected-basin-78090.herokuapp.com/api/products/all>
<https://protected-basin-78090.herokuapp.com/api/products?offset=3&limit=5>

## productList-express-client details

- source code

<https://github.com/gonghaima/productList-react-hook>

- hosted on
<https://productlist-client.herokuapp.com>

## orginal data source

 <https://raw.githubusercontent.com/gonghaima/data/master/products.json>

## TODO

- [x] layout styling
- [x] implement react-paginate lib
- [x] styling the react-paginate component
  - [x] active items
  - [x] disabled items
  - [x] responsive
- [x] use variables for css property
- [x] use .env to store url, etc.
- [x] pass state to pagination component, so pagination reflect the status of data
- [x] pagination - dispatch an event onPageChange
- [x] pagination - dispatch an event onPageChange
- [x] pagination - dispatch data and make api calls
- [x] pagination - set up initial page
- [x] pagination - position at bottom of the page, even only 4 items per page
- [x] select - dispatch an action on change
- [x] select - with real data
- [x] product list - use fetched data from real api
- [x] make header into seperate component
- [x] make product list into main component
- [x] move select values into config
- [x] use suspense with loader
  - [x] Notes from react org: Suspense lets components “wait” for something before rendering. Today, Suspense only supports one use case: loading components dynamically with React.lazy. In the future, it will support other use cases like data fetching.
  - [x] Use library to enable data fetching - not required. The current implementation of reac-cache does not fit well into my redux like architecture, will keep my own loading state for now.
  - [x] Create loading state / loader
- [x] use & enable router to support absolute url of current page
- [x] use context/hook to manage global state
  - [x] add mock in global context
  - [x] read it in root component
- [x] use real api to replace mock api
- [x] smooth transition on list item
- [ ] error handle for page out of range
- [x] fix cors issue
- [ ] add unit test
- [x] deploy to a cloud server
  - [x] to Heroku cloud
- [ ] build a pagination component

## FEATURES

~~~~javascript
* React context api
* Hook
* Redux pattern
* CSS module
~~~~

## NOTES

- Heroku deployment

```code
npx create-react-app@2.x $APP_NAME
cd $APP_NAME
git init
heroku create $APP_NAME --buildpack mars/create-react-app
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```

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

- Long running promise simulation

  - a function sleep

    ```javascript
    const sleep = duration => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    };
    ```

  - call it like

    ```javascript
    sleep(8000);
    ```

  - an example

  ```javascript
      export const fetchDataAction = async (dispatch, url, offset, limit) => {
        dispatch({
          type: "FETCHING_DATA",
          payload: {}
        });
        await sleep(8000);
        const data = await fetch(urlBuilder(url, offset, limit));
        const dataJSON = await data.json();
        dispatch({
          type: "INITIATING_DATA",
          payload: { ...dataJSON, ...{ currentLimit: limit, currentOffset: offset } }
        });
      };
  ```
