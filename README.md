# 💅 React-table front-end coding challenge with github actions

This will have interaction with the table like filtering and sorting

### 🎁 Installing dependencies

This project uses `yarn`.
You can run the following command to install all dependencies.

```sh
yarn install
```

### 🛠️ Running the dev server

To see what you're building run the following command:

```sh
yarn start
```

It will start the dev-server and open a page in your default browser.

### 🧪 Testing

This project uses [`jest`](https://jestjs.io/) as a test runner.
The tests are written using [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro).
Also, we have enhanced the `expects` with [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) to give you some more explicit assertions.

You can run all tests with the following command:

```sh
yarn test
```

### 📦 Example data

Since there is no backend in this exercise all data comes from `./src/data.json`.

---

## 🔍 Things to notice in the app-

- folder structure update
- number of rows at the end of the table to know the count
- documentation throughout the code
- styling with scss
- meaningful test cases
- initial sort in number column
- shuffeling between ascending and descending sorting
- debounce filter input
- filter the "%s" column, can be seen by 4 types(substring match, exact string match, fuzzy match, faceting)
- imported provided svg icon to display sorting in the column header
- fix date sort column
- adjusted in built filter features and added new as per the requirements in the test cases(no number min max input, and just one search box, with custom filter method)
- dark theme
- analysis on library selection

| Factors                | React table                | data grid                   | glide data grid | material table                              | MUI data table                  | Ag-grid  |
| ---------------------- | -------------------------- | --------------------------- | --------------- | ------------------------------------------- | ------------------------------- | -------- |
| stars                  | 21k                        | 3.5k                        | 2.5k            | 2.3k                                        | 2.6k                            | paid, no |
| downloads              | 1.5m                       | 1 lac                       | 12k             | 3.8lac                                      | 62k                             |          |
| documentation          | 1                          | 1                           | 0               | 1                                           | 1                               |          |
| Up to date             | 1                          | 1                           | 1               | .5                                          | 1                               |          |
| size                   | 940kb                      | 691kb                       | 2.9mb           | 336kb                                       | 585kb                           |          |
| number of dependencies | 0                          | 1                           | 2               | 12                                          | 18                              |          |
| open source            | 1                          | 1                           | 1               | 1                                           | 1                               |          |
| feature rich           | 1                          | 1                           | -               | 1                                           | 1                               |          |
| ts-support             | 1                          | 1                           | 1               | 1                                           | 1                               |          |
| speed                  | 1                          | 1                           | 1               | .5                                          | .5                              |          |
| responsive             | 0                          | -                           | -               | 1                                           | 1                               |          |
| comment                | fast, lightweight, popular | suitable for large data set | Read below\*    | not updated as frequent, very simple to use | number of issues are more-buggy |          |

\*very beautiful, but heavy, and might have features which are not needed, poor documentation

Reason behind react table library selection-

- no styling is there- headless ui, will not intervene in branding
- super fast
- lightweight
- opensource, well maintained, free
- most popular -> big community -> big support in terms of collabarators

helpful links other than npm and github for selecting the library-

- https://npmcompare.com/compare/react-data-grid,react-table,slickgrid
- https://npmtrends.com/ag-grid-vs-react-data-grid-vs-react-table-vs-react-virtualized

## Improvements that can be done-

- write more test cases
- typescript
- responsive and styling
- debug mode- environment specific. on, when development mode. off, when production mode.

---

<div id="header" align="center">
  <img src="https://media.giphy.com/media/fo0HtwcJzNUcOlRdFc/giphy.gif" width="100"/>
</div>

### :woman_technologist: About Me :

I am a Frontend Developer <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> from India, lives in Germany. I am a hands-on learner, hence prefer learning new technologies through development.

- :telescope: I’m working as a Software Engineer and contributing to frontend and backend for building web applications.
- :seedling: Exploring new ideas and tech for beautiful projects.
- :zap: In my free time, I solve problems on GeeksforGeeks and Leetcode.
- 👯‍♂️ Kindly visit this project specially, a part of a big monorepo, to know more about me- https://github.com/avaniklsjoshi/mama-repo/tree/main/apps/frontend-joshi

<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/joshi-avani/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://github.com/avaniklsjoshi">
    <img src="https://img.shields.io/badge/GitHub-red?style=for-the-badge&logo=github&logoColor=white" alt="Github Badge"/>
  </a>
  <a href="https://twitter.com/avaniklsjoshi">
    <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>

<h3> 🤞 I really enjoyed, I hope that you also like it.</h3>
