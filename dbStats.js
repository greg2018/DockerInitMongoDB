print("Running dbStats.js");

conn = new Mongo();
db = conn.getDB("dbtest");
db.auth("test02", "123456");
db.stats();