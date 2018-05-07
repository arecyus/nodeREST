port = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

//vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//seed

process.env.SEED = process.env.SEED || "secreto";