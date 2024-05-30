const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  contact_no: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Submission', SubmissionSchema);
