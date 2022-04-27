# RESTy

RESty app is an API testing tool allowing a user to easily interact with APIs in a familiar interface:

- phase 1 : the base of RESty app, just redering the method and URL input
- phase 2 : converted all css extensions to scss, render response from url requests, and also rendered headers
  - to test use the following routes :
    - get: <https://movies-js-course.herokuapp.com/tv>
    - get: <https://movies-js-course.herokuapp.com/getMovies>
    - post: <https://movies-js-course.herokuapp.com/addMovie>
    ```json
      {
    "title": "Peaky Blinders",
    "release_date": "2013-09-12",
    "poster_path": "/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    "overview": "A gangster family epic set in 1919 Birmingham, England and centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby, who means to move up in the world.",
    "comment": "HII"
      }
    ````
    - put: <https://movies-js-course.herokuapp.com/UPDATE/:id>
    - delete: <https://movies-js-course.herokuapp.com/DELETE/:id>

## UML

![uml diagram](./assets/UML%20-%20diagram%201.png)

## [PR link](https://github.com/Mhsalameh/resty/pull/4)

## [live URL](https://iridescent-swan-3a2e65.netlify.app)
