if(process.env.NODE_ENV === 'production'){
  // Prod environment
  module.exports = require('./prod');
}else{
  // Dev environment
  module.exports = require('./dev');
}
