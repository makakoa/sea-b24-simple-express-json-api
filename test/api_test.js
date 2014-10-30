var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var server = require('../server.js')

describe('Simple JSON API', function() {
	it('should send the local time', function() {
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		if(m<10) {
			m = "0" + m;
		}
	  	chai.request('http://localhost:3000')
	  		.get('/time')
	  		.end(function(err, res) {
	  			chai.expect(err).to.be.null;
	  			chai.expect(res.body.hour).to.eql(h);
	  			chai.expect(res.body.minute).to.eql(m);
	  		});
	});
	it('should greet someone', function() {
  	chai.request('http://localhost:3000')
  		.get('/name')
  		.end(function(err, res) {
  			chai.expect(err).to.be.null;
  			chai.expect(res.body.msg).to.equal("Hello name!");
  		});
	});
});
