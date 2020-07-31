var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');

var url = 'https://www.horoscopes-and-astrology.com/json';

var getResponse = (url, callback) => {
    request({
        url: url,
        method: "GET",
    },
        function (err, res, body) {
            if (!err) {
                if (typeof callback === 'function') {
                    return callback(null, body);
                }
            }
            if (typeof callback === 'function') {
                return callback(err);
            }
            console.log('callback not provided properly');
        }
    )
}

module.exports = {
    showHome: (req, res, next) => {
        getResponse(url, (err, result) => {
            if (err)
                console.log('Error returned', err)
            else {
                console.log('Response arrived')
                dailyHoroscope = JSON.parse(result)
                var rawHoro = dailyHoroscope['dailyhoroscope']
                if (Object.keys(rawHoro).length > 0) {
                res.render('index', {
                    Aries: rawHoro['Aries'].substr(0, rawHoro['Aries'].indexOf('<a href')),
                    Taurus: dailyHoroscope['dailyhoroscope']['Taurus'].substr(0, dailyHoroscope['dailyhoroscope']['Taurus'].indexOf('<a href')),
                    Gemini: dailyHoroscope['dailyhoroscope']['Gemini'].substr(0, dailyHoroscope['dailyhoroscope']['Gemini'].indexOf('<a href')),
                    Cancer: dailyHoroscope['dailyhoroscope']['Cancer'].substr(0, dailyHoroscope['dailyhoroscope']['Cancer'].indexOf('<a href')),
                    Leo: dailyHoroscope['dailyhoroscope']['Leo'].substr(0, dailyHoroscope['dailyhoroscope']['Leo'].indexOf('<a href')),
                    Virgo: dailyHoroscope['dailyhoroscope']['Virgo'].substr(0, dailyHoroscope['dailyhoroscope']['Virgo'].indexOf('<a href')),
                    Libra: dailyHoroscope['dailyhoroscope']['Libra'].substr(0, dailyHoroscope['dailyhoroscope']['Libra'].indexOf('<a href')),
                    Scorpio: dailyHoroscope['dailyhoroscope']['Scorpio'].substr(0, dailyHoroscope['dailyhoroscope']['Scorpio'].indexOf('<a href')),
                    Sagittarius: dailyHoroscope['dailyhoroscope']['Sagittarius'].substr(0, dailyHoroscope['dailyhoroscope']['Sagittarius'].indexOf('<a href')),
                    Capricorn: dailyHoroscope['dailyhoroscope']['Capricorn'].substr(0, dailyHoroscope['dailyhoroscope']['Capricorn'].indexOf('<a href')),
                    Aquarius: dailyHoroscope['dailyhoroscope']['Aquarius'].substr(0, dailyHoroscope['dailyhoroscope']['Aquarius'].indexOf('<a href')),
                    Pisces: dailyHoroscope['dailyhoroscope']['Pisces'].substr(0, dailyHoroscope['dailyhoroscope']['Pisces'].indexOf('<a href')),
                });
                } else {
                    res.render('error')
                }
            }
        })
    },
}