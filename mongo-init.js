db.createUser(
        {
            user: "test01",
            pwd: "123456",
            roles: [
                {
                    role: "readWrite",
                    db: "admin"
                }
            ]
        }
);