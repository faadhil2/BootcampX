const args = process.argv.slice(2);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests on teachers.id = teacher_id
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = '${args[0]}'
ORDER BY teachers.name;
`)
// .then(res => { console.log(res.rows)})
.then(res => {
  res.rows.forEach(obj => {
    console.log(`${obj.cohort}: ${obj.teacher}`);
  })
}).catch(err => console.error('query error', err.stack));