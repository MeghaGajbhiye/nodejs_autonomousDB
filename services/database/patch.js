var ocirest = require('../../utils/ocirest.js');
var endpoint = require('../../configs/endpoints.js');

function getDbHome( auth, parameters, callback ) {
  var possibleHeaders = [];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/dbHomes/' + encodeURIComponent(parameters.dbHomeId)+
                            '/patches/' + encodeURIComponent(parameters.patchId),
                     host : endpoint.service.database[auth.region],
                     headers : headers,
                     method : 'GET' },
                   callback );
  };

function getDbSystem( auth, parameters, callback ) {
  var possibleHeaders = [];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/dbSystems/' + encodeURIComponent(parameters.dbSystemId)+
                            '/patches/' + encodeURIComponent(parameters.patchId),
                     host : endpoint.service.database[auth.region],
                     headers : headers,
                     method : 'GET' },
                   callback );
  };


function listDbSystem( auth, parameters, callback ) {
  var possibleHeaders = [];
  var possibleQueryStrings = ['limit', 'page'];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  var queryString = ocirest.buildQueryString( possibleQueryStrings, parameters );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/dbSystems' + encodeURIComponent(parameters.dbSystemId) + '/patches' +
                            queryString,
                     host : endpoint.service.database[auth.region],
                     headers : headers,
                     method : 'GET' },
                   callback );
  };

function listDbHome( auth, parameters, callback ) {
  var possibleHeaders = [];
  var possibleQueryStrings = ['limit', 'page'];
  var headers = ocirest.buildHeaders( possibleHeaders, parameters );
  var queryString = ocirest.buildQueryString( possibleQueryStrings, parameters );
  ocirest.process( auth,
                   { path : auth.RESTversion + 
                            '/dbHomes' + encodeURIComponent(parameters.dbHomeId) + '/patches' +
                            queryString,
                     host : endpoint.service.database[auth.region],
                     headers : headers,
                     method : 'GET' },
                   callback );
  };


module.exports = {
    getDbHome: getDbHome,
    getDbSystem: getDbSystem,
    listDbHome: listDbHome,
    listDbSystem: listDbSystem
}