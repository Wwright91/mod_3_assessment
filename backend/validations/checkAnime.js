const checkNameExists = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required!" });
  } else {
    next();
  }
};

const checkDescriptionExists = (req, res, next) => {
  if (!req.body.description) {
    res.status(400).json({ error: "Description is required!" });
  } else {
    next();
  }
};

module.exports = { checkNameExists, checkDescriptionExists };
