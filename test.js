import { db } from "./pgAdaptor";

db.one('select * from users')
    .then(res => {
        console.log(res);
    });