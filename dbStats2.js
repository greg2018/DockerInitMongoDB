print("Running dbStats2.js");
if (databaseName=="dbtest"){
	print("+++++databaseName="+databaseName);
}
else{
	print("+++++databaseName is not dbtest");
}

print("testVar="+testVar);

conn = new Mongo();
print("+++++001");
db = conn.getDB(databaseName);
print("+++++002");
db.auth("test02", "123456");
print("+++++003");
 printjson(db.stats());
print("+++++004");