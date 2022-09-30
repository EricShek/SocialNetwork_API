const { Schema, Types, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const responseSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
      //unique: true, *************
      //trim: true,  ************
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const thoughtSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    responseBody: {
      type: String,
      required: true,
      maxlength: 280,
      //unique: true, *************
      //trim: true,  ************
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Response = model('Response', responseSchema)
const Thought = model('Thought', thoughtSchema)

module.exports = { Response, Thought };
