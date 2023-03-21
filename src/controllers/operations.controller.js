const icosaedro = async (req, res, next) => {
  try {
    const { arista } = req.body;
    const vol = ((5 * (3 + Math.sqrt(5))) / 12) * Math.pow(arista, 3);
    res.status(200).json({ volumen: vol });
  } catch (error) {
    next(error);
  }
};

const Sphere = async (req, res, next) => {
  try {
    const { radio } = req.body;
    const vol = (4 * Math.PI * Math.pow(radio, 3))/3;
    res.status(200).json({ volumen: vol });
  } catch (error) {
    next(error);
  }
};

const Einstein1 = async (req, res, next) => {
  try {
    // e=m * c^2 (usar gramos)
    const { gr } = req.body;
    const c = 3*Math.pow(10,8);
    const masa = gr / 1000;
    const energy = masa * Math.pow(c, 2);

    res.status(200).json({ energia: energy });
  } catch (error) {
    next(error);
  }
};

const Einstein2 = async (req, res, next) => {
  try {
    // e=m * c^2 (usar gramos)
    const { kg: masa } = req.body;
    const c = 3*Math.pow(10,8);
    const energy = masa * Math.pow(c, 2);

    res.status(200).json({ energia: energy });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  icosaedro,
  Sphere,
  Einstein1,
  Einstein2,
};
