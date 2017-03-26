
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
module.exports=function (url, callback) {
    request({url,encoding:null},function (err, response, body) {
        body=iconv.decode(body,'gbk');
        var movies=[];
        var $=cheerio.load(body);
        $('.keyword .list-title').each(function () {
            var $this=$(this);
            var movie={
                name:$this.text(),
                url:$this.attr('href')
            }
            movies.push(movie);
        });
        callback(err,movies);
    })
};










