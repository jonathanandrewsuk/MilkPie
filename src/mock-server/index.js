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
      this.get('/api/photos', function(request){
        var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
        return [200, {"Content-Type": "application/json"}, all]
      });

      this.get('/photos/:id', function(request){
        return [200, {"Content-Type": "application/json"}, JSON.stringify(PHOTOS[request.params.id])]
      });
    });
    console.log('[mock-server] Pretender', server)
  },
  off: () => server && server.shutdown()
};
