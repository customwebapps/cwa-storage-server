const redis=require('redis');
const maria=require('mariasql');

var redisClient=redis.createClient();
var mariaClient=new maria({
  //host: 'localhost',
  user: 'root',
  unixSocket: '/var/run/mysqld/mysqld.sock',
// password: '',
})
mariaClient.connect(function() {
  console.log('connected to mariaDB')
  mariaClient.end()
})

var sphinxClient=new maria({
  host: '127.0.0.1',
  port: 9306,
  user: 'root',
// password: '',
})
sphinxClient.connect(function() {
  console.log('connected to SphinxSearch')
  sphinxClient.end()
})

// locking, are we the only daemon running?

// load views cache
// - pub/sub to tables
// - check cache, is it up to date? (has DB changed since last we ran
// create view
// query view (mark last used)
// save views cache

// read table
// - does view already exist?
//   - create view
// - send view as JSON
// write table
//   - manage redis, maria and sphinx
// - insert
// - update
// - delete

// view monitor

// lua/template or call webhook to expire/recreate
// identify public static pages to make

// full text search endpoint <= use sphinx directly
// basically non-cache queries, because the range is just too wild

redisClient.quit();
