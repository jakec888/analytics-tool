import mongoose from "mongoose";

export const Links = mongoose.model(
  "Links", 
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
