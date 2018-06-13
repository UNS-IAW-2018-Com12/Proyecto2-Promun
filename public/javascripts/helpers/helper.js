function hbsHelpers(hbs) {
  return hbs.create({
    helpers: {
      ifCond: function(value1, value2, options) {
        console.log('reading it');
        if(v1 === v2) {
          return options.fn(this);
        }
          return options.inverse(this);
      }
    }
  });
}

module.exports = hbsHelpers;
