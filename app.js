var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const dashboardRouter = require("./components/dashboard/admin/router");
const categoryRouter = require("./components/category/admin/router");
const bankRouter = require("./components/bank/admin/router");
const itemRouter = require("./components/item/admin/router");
const bookingRouter = require("./components/booking/admin/router");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "components"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/layouts",
  express.static(path.join(__dirname, "node_modules/startbootstrap-sb-admin-2"))
);

app.use(
  "/",
  categoryRouter,
  dashboardRouter,
  bankRouter,
  itemRouter,
  bookingRouter
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
