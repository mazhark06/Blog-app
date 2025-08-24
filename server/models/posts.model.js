import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    pictures: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      enum: [
        "Lifestyle",
        "Travel",
        "Food & Cooking",
        "Health & Wellness",
        "Technology",
        "Business & Finance",
        "Fashion & Beauty",
        "Entertainment",
        "Parenting & Family",
        "DIY & Crafts",
        "Photography",
        "Sports",
        "Politics & Current Events",
        "Religion & Spirituality",
        "Environment & Sustainability",
        "Relationships & Dating",
        "Pet Care & Animals",
        "Cars & Automotive",
        "Education & E-Learning",
        "How-To Guides",
        "Product Reviews",
        "Inspiration & Motivation",
        "Opinion & Editorial",
        "Case Studies",
        "Q&A / FAQs",
        "Others",
      ],
      required:true
    },
    Date:{
        type:Date,
    },
  },
  { timestamps: true }
);
export const Post = mongoose.model('Post', postSchema)