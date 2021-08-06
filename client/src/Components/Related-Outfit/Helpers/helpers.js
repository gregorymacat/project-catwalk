module.exports = {
  generateId: function() {
    var id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
    for (var i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}