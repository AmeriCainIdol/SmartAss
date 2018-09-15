//trivia api helper functions
const request = require('request');

//generic trivia api url
const apiUrl = "https://opentdb.com/api.php?amount=10";

//trivia categories from the api
const trivia_categories = [
  { "id": 9, "name": "General Knowledge" },
  { "id": 10, "name": "Entertainment: Books" },
  { "id": 11, "name": "Entertainment: Film" },
  { "id": 12, "name": "Entertainment: Music" },
  { "id": 13, "name": "Entertainment: Musicals & Theatres" },
  { "id": 14, "name": "Entertainment: Television" },
  { "id": 15, "name": "Entertainment: Video Games" },
  { "id": 16, "name": "Entertainment: Board Games" },
  { "id": 17, "name": "Science & Nature" },
  { "id": 18, "name": "Science: Computers" },
  { "id": 19, "name": "Science: Mathematics" },
  { "id": 20, "name": "Mythology" },
  { "id": 21, "name": "Sports" },
  { "id": 22, "name": "Geography" },
  { "id": 23, "name": "History" },
  { "id": 24, "name": "Politics" },
  { "id": 25, "name": "Art" },
  { "id": 26, "name": "Celebrities" },
  { "id": 27, "name": "Animals" },
  { "id": 28, "name": "Vehicles" },
  { "id": 29, "name": "Entertainment: Comics" },
  { "id": 30, "name": "Science: Gadgets" },
  { "id": 31, "name": "Entertainment: Japanese Anime & Manga" },
  { "id": 32, "name": "Entertainment: Cartoon & Animations" }
]

//counts each question in a category
const countQuestionsPerCategory = (categoryId, callback) => {
  let options = {
    method: `GET`,
    url: `https://opentdb.com/api_count.php?category=${categoryId}`
  }
  request(options, callback)
}

//counts all questions in all categories
const allQuestionsAllCategories = (callback) => {
  let options = {
    method: `GET`,
    url: `https://opentdb.com/api_count_global.php`
  }
  request(options, callback)
}

//this http request will return 10 questions of a given difficulty in a given category
//categoryId is the id of a certain category 9-32
//difficulty is easy, medium or hard
const getQuestionsForCategoryAndDifficulty = (categoryId, difficulty, callback) => {
  let options = {
    method: `GET`,
    url: `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}`
  }
  request(options, callback)
}

const triviaHelpers = {
  countQuestionsPerCategory,
  allQuestionsAllCategories,
  getQuestionsForCategoryAndDifficulty,
  trivia_categories,
}

module.exports.triviaHelpers = triviaHelpers;