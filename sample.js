const axios = require("axios");

const getArticle = async () => {
  const pageNum = 2;
  let page = (await axios.get("https://jsonmock.hackerrank.com/api/articles?page=" + pageNum)).data;
  console.log(`page: ${page.page}`);
  console.log(`total_pages: ${page.total_pages}`);
  console.log(`data[0]: ${page.data[0]}`);
};

if (module === require.main) {
  getArticle()
    .then(() => console.log(`\nREST API query completed successfully\n`))
    .catch(err => console.error(err.message));
}
