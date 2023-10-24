import mongoose, { Schema } from 'mongoose';

const topicScheme = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicScheme);

export default Topic;
