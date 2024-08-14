const Lesson = require('../model/Lesson')
const Student = require('../model/Student')

function capitalizeFirstLetterInArray(arr) {
  return arr.map((item) => {
    if (typeof item === 'string' && item.length > 0) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } else {
      return item; // If the element is not a string or an empty string, leave it unchanged
    }
  });
}

const getAllLessons = async (req, res) => {
  if (!req.body.id || !req.body.disabilities) return res.status(401).json({ 'message': 'ID and disabilities is required' })
  const id = req.body.id;
  const disabilities = capitalizeFirstLetterInArray(req.body.disabilities);
  const videoOnly = req.body.videoOnly;

  try {
    const foundSudent = await Student.findOne({ _id: id }).exec();
    if (!foundSudent) return res.status(401).json({ 'message': 'Student not found' })

    const teacherId = foundSudent.teacherID;
    const classId = foundSudent.classID;
    let result;

    if (videoOnly) {
      result = await Lesson.find({ teacherID: teacherId, classID: classId, fileType: { $eq: "mp4" }, categories: { $in: disabilities } })
    } else {
      result = await Lesson.find({ teacherID: teacherId, classID: classId, fileType: { $ne: "mp4" }, categories: { $in: disabilities } })
    }

    res.json(result)
  } catch (err) {
    res.status(400).json({ "message": err.message })

  }
}


module.exports = { getAllLessons }