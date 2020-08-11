const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Land",
    author: "Mildred D. Taylor",
    description: "Roll of Thunder, Hear My Cry is the classic story of a girl growing up in the deep South.'We have no choice of what colour we're born or who our parents are or whether we're rich or poor. What we do have is some choice over what we make of our lives once we're here.'The Mississippi of the 1930s was a hard place for a black child to grow up in, but still Cassie didn't understand why farming his own land meant so much to her father. During that year, though, when the night riders were carrying hatred and destruction among her people, she learned about the great differences that divided them, and when it was worth fighting for a principle even if it brought terrible hardships."
    image: 
    link: "https://www.google.com/books/edition/Roll_of_Thunder_Hear_My_Cry/7s61bwAACAAJ?hl=en"
  {
    title: "The Land",
    date: new Date(Date.now())
  },
  {
    title: "The Year of Yes",
    author: "Shonda Rhimes",
    description: "This poignant, intimate, and hilarious memoir explores Shonda’s life before her Year of Yes—from her nerdy, book-loving childhood creating imaginary friends to her devotion to creating television characters who reflected the world she saw around her (like Cristina Yang, whose ultimate goal wasn’t marriage, and Cyrus Beene, who is a Republican and gay). And it chronicles her life after her Year of Yes had begun—when Shonda forced herself out of the house and onto the stage, appearing on Jimmy Kimmel Live, and giving the Dartmouth Commencement speech; when she learned to say yes to her health, yes to play and she stepped out of the shadows and into the sun; when she learned to explore, empower, applaud, and love her truest self. Yes."
    image: 
    link: "https://www.google.com/books/edition/Year_of_Yes/RI3qCgAAQBAJ?hl=en&gbpv=0"
    date: new Date(Date.now())
  },
  {
    title: "Life's Golden Ticket",
    author: "Brendon Burchard",
    description: "What if you were handed a golden ticket that could magically start your life anew? That question is at the heart of Life’s Golden Ticket. Brendon Burchard tells the story of a man who is so trapped in the prison of his past that he cannot see the possibilities, the choices, and the gifts before him. To soothe his fiancée Mary, clinging to life in a hospital bed, the man takes the envelope she offers and heads to an old, abandoned amusement park that she begs him to visit."
    image: 
    link: "https://www.google.com/books/edition/Life_s_Golden_Ticket/RV5vw8Vh0NcC?hl=en&gbpv=0"
    date: new Date(Date.now())
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });