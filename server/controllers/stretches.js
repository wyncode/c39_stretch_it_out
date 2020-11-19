const Stretch = require('../db/models/stretch');
const { stretches } = require('../db/seeds/data');

exports.getStretchesByBodyArea = async (req, res) => {
  try {
    const stretches = await Stretch.find({ area: req.params.bodyArea });
    res.json(stretches);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getBodyAreas = (_, res) => {
  const bodyAreas = stretches.map((stretch) => stretch.area);
  res.json(bodyAreas);
};

exports.getStretch = async (req, res) => {
  try {
    const stretch = await Stretch.findById(req.params.id);
    res.json(stretch);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
