var BlogController = function() {
  var index = function(posts) {
    return console.log(posts);
  };

  var show = function(post) {
    return Views.show(post);
  };

  var create = function(attrs) {
    return Db.create(attrs);
  };

  var update = function(post, attrs) {
    return Db.update(post, attrs);
  };

  var destroy = function(post) {
    return Db.destroy(post);
  };

  return {
    index: index,
    show: show,
    create: create,
    update: update,
    destroy: destroy,
  };
};


var z = BlogController()
z.index("Kupa")