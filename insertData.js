// we use pg library to
// request connection pool from postgres database
// psql -h traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com -d postgres -U traineeUser password is traineePassword
const { Pool } = require('pg')

// we connect to pg using pool we requested
const pool = new Pool({
  user: 'traineeUser',
  host: 'traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com',
  password: 'traineePassword',
  database: 'postgres',
  port: 5432,
  multipleStatements: true
})

// the pool emits an error on behalf of any idle clients
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// if no error on idel client, pool connects to database
pool.connect((err, client, done) => {
    //if there is an error with our database connection strings
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    //if no error then we have successfully connected 
    console.log('Connected to database');
    // do not call done(); - because we want to use this connection 
    // to create/insert/delete or select records from our database
    // sometime we might also want to export this connection for other resources
});

// insert a record into our table
pool.query(
    `INSERT INTO UserChukwuemeka2021 
                 ( ID, FIRSTNAME, LASTNAME, EMAIL, PASSWORD, MOBILE_NUMBER, COMPANY_NAME, COMPANY_ZIP_CODE, INDUSTRY, POSITION, SALARY, DATE_OF_BIRTH, LANGUAGE, ADDRESS, CITY, STATE, COUNTRY)
                 VALUES 
                 ('1', 'Emeka', 'Anyanwu', 'eme42c@gmail.com', 'Cemeka5%' , '07033548895', 'Thrive Consults', '38501', 'Professional Services',
                 'Manager', '80', '1994-04-04', 'English', '16 Grey Street', 'Warri', 'Delta', 'Nigeria' ),
                 ('2', 'Shola', 'Tope', 'sholdzy@gmail.com', 'Sgt5%y7t' , '07035214480', 'Kooban', '32234', 'Fitness/Beauty',
                 'Driver', '25', '1990-06-14', 'Yoruba', '20 Fade Street', 'Ikeja', 'Lagos', 'Nigeria' ),
                 ('3', 'Musa', 'Yahib', 'myahib@yahoo.com', '3#rew782' , '08181080315', 'Fairness Group', '22347', 'Professional Care',
                 'Cashier', '30', '1996-12-23', 'Hausa', '3 Zungairu Street', 'Kano', 'Kano', 'Nigeria' ),
                 ('4', 'Jones', 'Stones', 'stonyJ@gmail.com', 'St80on$' , '14104972886', 'Chilli Tech', '474961', 'Professional Services',
                 'Manager', '100', '1985-04-24', 'English', '3 Memorial Drive', 'Baltimore', 'Maryland', 'USA' ),
                 ('5', 'Mellisa', 'Ugrey', 'mellisag@outlook.com', 'me!ine45' , '16472244387', 'Mety Health', '96911', 'Health Care',
                 'Director', '120', '1993-03-29', 'English', '7 South Clay Drive', 'Ontario', 'First Fruness', 'Canada' )
                 `,
    (err, res) => {
      if(err) {
        console.log('Error or issue with table creation');
        console.log(err);
    } else {
        console.log('Inserted data into table successfully')
        console.log(res);
   }
  } 
);

pool.end();


// export connection
module.exports = pool;