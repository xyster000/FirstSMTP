
var outbound = require('./outbound');

var plugin = this;

var to = 'xyster000@gmail.com';
var from = 'me@myfirstsmtp.dx.am';

var contents = [
    "From: " + from,
    "To: " + to,
    "MIME-Version: 1.0",
    "Content-type: text/plain; charset=us-ascii",
    "Subject: Some subject here",
    "",    "Some email body here",
    ""].join("\n");

    

outbound.send_email(from, to, contents);