import useragent from "express-useragent";
app.use(useragent.express());

app.use((req, res, next) => {
  const visit = {
    ip: req.ip,
    path: req.originalUrl,
    browser: req.useragent.browser,
    os: req.useragent.os,
    time: new Date(),
  };
  // Save to MongoDB
  db.collection("visitors").insertOne(visit);
  next();
});
