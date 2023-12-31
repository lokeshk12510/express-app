const Tour = require('../models/tourModels');

// exports.checkId = (req, res, next, val) => {
//   const id = req.params.id * 1;
//   const tour = tours.find(el => el.id === id);
//   if (!tour) {
//     return res
//       .status(404)
//       .json({ message: 'Invaid ID', success: false, data: null });
//   }
//   next();
// };

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      data: tours
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error
    });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: tour
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      message: error
    });
  }
};

exports.addTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newTour
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: updatedTour
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: updatedTour
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error
    });
  }
};
