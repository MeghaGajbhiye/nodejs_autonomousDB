# List and update Autonomous Database instance in your cloud environment from Rest API using nodejs.

# Objective:

Oracle Cloud Infrastructure REST APIs implemented in node.js to list, and update an autonomous database instance.  

## Prerequisites:

- Make sure that you have an Autonomous Database up and running.  
- Make sure that you have nodejs configured in your machine.

## Change the following parameters:

Navigate to test.js and change a few parameters:

- Change the following in this part of the code: 

  **var auth={  
      tenancyId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq',  
      userId : 'ocid1.user.oc1..aaaaaaaaot7m2xmy4kk55bltdtuyt32eaht7s7aoc2le6ui4xgg56qcw272a',  
      keyFingerprint : 'a1:84:3b:8a:28:8a:d6:dc:8e:28:33:26:a6:bf:1b:a9',  
      RESTversion : '/20160918',  
      region: 'eu-frankfurt-1'  
  };**  
  
  1. **tenancyId** : Your Tenancy OCID. 
  2. **userID** : Your user OCID. 
  3. **keyFingerprint** : Your key fingerprint which is generated while creating private key.  
  4. **region** : Region where your autonomous database instance is up and running.   

- Change the following in this part of the code:  
  
  **auth.privateKey = fs.readFileSync('path to your .pem', 'ascii');  **

  1. **path to your .pem** : Change this to the path of your private key .pem.  
  
- Change the following in this part of the code:  

**var parameters = {    
   compartmentId : 'ocid1.tenancy.oc1..aaaaaaaa3hjb76kw5fmhm6y4tcl5whv2uer6fz2bbfctfxvbdrtwddfdo6qq'  
};**  

  1. **compartmentId** : your compartment OCID.
  
See the test.js and files in the examples directory for other examples of how to setup the auth an how to call/use the API.

## Run the script.

Now run the script by typing the following:

**node test.js** 

you should be able to see all the autonomous database running in your instance. 

## Update your autonomous instance. 

Uncomment the following part of the code:

**var tags = { "freeformTags" : {"tag1": 123456, "tag2": "yyy", "anotherTag": "aaa" }};  
  parameters = {  
    body : tags,  
    autonomousDataWarehouseId : adwId  
}  
oci.database.autonomousDataWarehouse.update( auth, parameters, callback );**  

And change the following parameter: 

 1. **autonomousDataWarehouseId**: OCID of your Autonomous Database. 
 
Run the script, and you will see that further tags are added.



