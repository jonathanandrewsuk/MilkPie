import Pretender from 'pretender';

var PHOTOS = {
  "10": {
    id: 10,
    src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif'
  },
  "42": {
    id: 42,
    src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif'
  }
};

export let server;

export default {
  on: () => {
    server = new Pretender(function(){
      this.get('/photos', function(request){
        var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
        return [200, {"Content-Type": "application/json"}, all]
      });
    });
    console.log('[mock-server] Pretender', server)
  },
  off: () => server && server.shutdown()
};
