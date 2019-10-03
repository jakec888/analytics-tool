import mongoose from "mongoose";

export const Link = mongoose.model(
  "Link", 
  {   
    userId: String,
    redirectId: String,
    redirectURL: String,
    link: String,
    title: String,
    date: String,
    data: []
  }
);
