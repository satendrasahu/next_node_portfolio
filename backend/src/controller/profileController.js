const getProfile = async (req, res) => {
  try {
    const result = ""
    res.status(200).json({
      result,
      status: "SUCCESS",
      message: "",
    });
  } catch (error) {}
};

module.exports = { getProfile };
