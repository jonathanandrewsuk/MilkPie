import Pretender from 'pretender';

var PHOTOS = {
  "10": {
    id: 'this is great, from the mock server',
    src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif'
  },
  "42": {
    id: 'its not a real api, but its still nice',
    src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif'
  }
};

export let server;

export default {
  on: () => {
    server = new Pretender(function(){
      this.get('api/v1/photos', function(request){
        var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
        return [200, {"Content-Type": "application/json"}, all]
      }, 1000);
    });
    console.log('[mock-server] Pretender', server)
  },
  off: () => server && server.shutdown()
};
