var fs = require( 'fs' );
var oci = require( './oci' );

//
// default callback function
//
var callback = function(data) { console.log( data ); };

//
// Set up the auth object
//
var auth={
    tenancyId : 'ocid1.tenancy.oc1..aaaaaaaadk6oqaewq2esjb25cuju77mswob7v4ocngt6nsr72o2few4pq3ta',
    userId : 'ocid1.user.oc1..aaaaaaaa2up435zuyoew6uw2yltyly7vcdkifmz3bhtxmtazcvtztkh3vdda',
    keyFingerprint : 'f5:0f:39:c3:ea:8c:21:ee:46:f8:ed:f5:ea:67:a3:7d',
    RESTversion : '/20160918',
    region: 'us-phoenix-1',
    //privateKey: 'MIIEpAIBAAKCAQEA4UfJKGew1+7X/vbhldiDW9yky3DOWA33bcAGAiGCZP02bAHU/XAHcBLxyefxNTTGRKCj7cCgL6OX4tY5ZMbsW+mRB9UDJg/JyeWaan4htm/ZC6LMspK3eWR6so3YOO4019t1M8lW6xftnZHntHpydtX/nfFZNmu8v4Jdg3qSFFfjqTQf+ZAzBoD24I8e/XztHy9VS2E0FrPP6Zv41GibBbdjHJXZfKLQEoOkQTmkAxuH0qJ/zHNEVbQ21/hUZlhacjRLVbi2dF0wLZ5mEr1P6BJNDXX1WWL23TwAseLMtyiGYmX5E5e40YSRvYo/7sy2uCbFKNGxAEW8W4Pp66U4KQIDAQABAoIBAQCGLXV4ZVoFIrLvnyf5Uf3bJu3YZhXgiGEIs0hg2IiLke1qIyUy1hj3/bCZa1ZVNFuq4GsC3qoJ9cwvRRzmEz0P+WtyWMMJVnn/kIuKRhnaSX/i2FJHQe+Zk+kolCdmsSo0Lvf9ojvsxlG2egKhkhS/BvK6pddW/JBtGD6OYuDCz//1TphG2gGLUokUb3JsNh5lVejU7m/H5r8W5lNke+kMumV7yYjJZXozySy0SiDAExI8p4IfDwKI/JgZ6gtCPIZhNEJoo8uxVKWEi65jVAO5Qfx5K7652Q88POSL/manthGlRW1VI8+0Sp5gxCcvSeqoKyT6nF4p/Ltiy7cIT2UBAoGBAPmqglPojDVE5l8te9/fLDgW4pL26wtqok4uLh/mqUPv6qAHQiofOOX64g2atQjmmsQQ0HQ5Quidh3ab91wsioGtfuclVAXUHm+fIQ1C8NGyXT14W66OVTje9ez5Ab7vyhkdHlB3bR5KyalZ+0EfQJzGNs3EFZijZw4V61PSR/vxAoGBAOb+5phI+6V4wLhrY3no9z8ui9zfbOgpYe6rU1Yi1edxsxdUxBrnN38GYwFRze9YjX+/mv0x/HiTi54MexQ9ywJt1P4A5WpuRJwcQsz3mwXUL5zUT5jNSPG0RKEJVMdhXjv7bOte4/baxGMFiLnR93ZkOZ9lCmxmS4Bn1jJpVZe5AoGAPgnVmr4VYQM+73Wg629MUJ+3K2e53jtgG2c0RO8PLneGaL+E/GyHufYOh+zigVS0LnYzJj44Vw8V4y48WCYlQLX4670F1PDxozD6iI4Swzi8HJM0zPpHSPt2Rq1VdrmlEXp/1uTmM3nIBJH8ciEu8AX9BkJsT2KDMCfYMxr0kjECgYEA3xKAK8YnRogTTMVgHmXNBzXzGUymhpkYGv1WkFM50LVrZveUHgr1+/R1/ds7DY2tsBWgHi18jBCofuu8nDKEbwcT7mt9IUf1d/COzhO7oGhlxoT9jSmJ7OjScdVqCtVLxI8sgyxy53witSGuBQzwdmOZhgV0iHRNK2abYrl4T/kCgYAQP1mTQPq/sakS551IHsryoS2PMiGAieex8KJOEgoTzrqAmLvnQ8yV4HOdKaowv/Uf5JRTpurRM+puU1FDmZVKOB8tXMTuiGBJbNKWk43srP8Tf/2RhgGdGQVf9DpWrfIboUzj6LoHPGg5BOThOTq2xIxJ7ny92ox/Q2UGma7y3g=='
};
auth.privateKey = fs.readFileSync('/home/opc/nodejs_demo/OCI-Rest-APIs-nodejs/demoatp.pem', 'ascii');

//
// set up parameters object
//
var parameters = {
  compartmentId : 'ocid1.compartment.oc1..aaaaaaaaiosw3bgps7sfm4lzvxsnyqo4shaw2fs5jktboinullbv62qqon3a'
};

//
// List autonomous datawarehouses
//
oci.database.autonomousDataWarehouse.list( auth, parameters, callback );

/*
//
// List autonomous datawarehouses and get first id
//
var adwId = '';
oci.database.autonomousDataWarehouse.list( auth, parameters, function(data){
  adwId = data[0].id;
} );
//wait until async call finishes
require( 'deasync' ).loopWhile(function(){return adwId == '';})
console.log( 'autonomous database id: ' + adwId );

//
// change the freeform tags for autonomous datawarehouse using adwID above
//

// set up new parameters
var tags = { "freeformTags" : {"tag1": 123456, "tag2": "yyy", "anotherTag": "aaa" }};
parameters = {
    body : tags,
    autonomousDataWarehouseId : adwId
}
oci.database.autonomousDataWarehouse.update( auth, parameters, callback );

//
//  list all resource Types
//

// Need to change the REST version
auth.RESTversion = '/20180409';
oci.search.resourceType.list( auth, parameters, function(data){console.log(JSON.stringify(data[0]));}  );


//
//  List all available shapes
//
parameters = {
  compartmentId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq'
};
auth.RESTversion = '/20160918';
oci.core.shape.list( auth, parameters, callback );


//
// Upload file to objectStore
//

// set up the parameter object
parameters = {
      objectName : 'scrown.jpg',
      namespaceName: 'gse00014467',
      bucketName : 'chris_bucket'
    };
parameters.body = fs.readFileSync( '/Users/clbeck/Desktop/images/scrown.jpg');
oci.objectStore.obj.put( auth, parameters, callback );

//
//  List files in objectStore bucket
//

oci.objectStore.obj.list( auth, parameters, function(data){
  for(var i=0; i<data.objects.length; i++ )
    console.log( data.objects[i].name );
} );


//
//  Rename file in objectstore bucket
//

// add body element to parameters
parameters.body = { sourceName : '94927a.jpg', newName : 'xyz.jpg' };
oci.objectStore.obj.rename( auth, parameters, callback );
*/
