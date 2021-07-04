$(".stats-number").counterUp({
  delay: 10,
  time: 3000,
  offset: 70,

  formatter: function (n) {
    return n.replace(/,/g, ".");
  },
});