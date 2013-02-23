function MainPage(node) {
  var doc = document.body;
  var docTop = 0;
  return {
    slideOut: function() {
      if (node.hasClass('main-page-out')) {
        return;
      }
      docTop = doc.scrollTop;
      setTimeout(function() {
      doc.scrollTop = 0;
      }, 10);
      node.addClass('main-page-out');
      _transitionEnd(node, function() {
        node.hide();
      });
    },
    slideIn: function() {
      node.show();
      node.addClass('main-page-before-in');
      setTimeout(function() {
        node.removeClass('main-page-out');
      }, 0);
      _transitionEnd(node, function() {
        setTimeout(function() {
          doc.scrollTop = docTop;
          doc.removeClass('main-page-before-in');
        }, 10);
        node.removeClass('main-page-out');
        node.show();
      });
    }
  };
}

function OffPage(node, related) {
  return {
    slideIn: function(fn) {
      if (node.hasClass('page-active')) {
        return;
      }
      node.addClass('page-active')
          .addClass('page-before-in');      
      setTimeout(function() {
        node.addClass('page-in');
        related.slideOut();
      }, 10);      
      _transitionEnd(node, function() {
        node.removeClass('page-in')
            .removeClass('page-before-in');
        if (fn) { fn(); }
      });
    },
    
    slideOut: function(fn) {
      node.addClass('page-before-out');
      setTimeout(function() {
        node.addClass('page-out');
      }, 10);
      related.slideIn();
      _transitionEnd(node, function() {
        node.removeClass('page-active')
            .removeClass('page-before-out')
            .removeClass('page-out');
        if (fn) { fn(); }
      });
    }
  };
}

function _transitionEnd(node, handle) {
  node.unbind('webkitTransitionEnd').bind('webkitTransitionEnd', handle);
}


module.exports.OffPage = OffPage;
module.exports.MainPage = MainPage;
