const axios = require("axios");

const getArticle = async (pageNum) => {
  let page = (await axios.get("https://jsonmock.hackerrank.com/api/articles?page=" + pageNum)).data;
  console.log(`page: ${page.page}`);
  console.log(`total_pages: ${page.total_pages}`);
  console.log('data[0]:', page.data[0]);
};

if (module === require.main) {
  getArticle(2)
    .then(() => console.log(`\nREST API query completed successfully\n`))
    .catch(err => console.error(err.message));
}
