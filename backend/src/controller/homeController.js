const getHome = async (req, res) => {
  try {
    const result = `The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, websites, hybrids, or public HTTP APIs.
    Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.`;
    res.status(200).json({
      result,
      status: "SUCCESS",
      message: "Home Details find successfully",
    });
  } catch (error) {
    res.json({
      result,
      status: "ERROR",
      message: error?.message,
    });
  }
};

module.exports = { getHome };
