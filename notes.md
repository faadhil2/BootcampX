# The main entities for this application will be:

students
cohorts
assignments
assignment_submissions
teachers
assistance_requests

## A cohort will have the following attributes:
id: A unique identifier
name: The name of the cohort
start_date: The cohorts' start date
end_date: The cohorts' end date

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  start_date DATE,
  end_date DATE
);



## A student will have the following attributes:
id: A unique identifier
name: The full name of the student
email: The students' email address
phone: The students' phone number
github: The students' github profile url
start_date: The students' start date of the Bootcamp
end_date: The students' end date of the Bootcamp
cohort_id: The id of the cohort that the student is enrolled in


CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(32),
  github VARCHAR(255),
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE CASCADE,
);

## An assignment will have the following attributes:
id: A unique identifier
name: The name of the assignment
content: The written content body of the assignment
day: The day that the assignment appears on
chapter: The order that the assignment will appear in the day.
duration: The average time it takes a student to finish

## An assignment_submission will have the following attributes:
id: A unique identifier
assignment_id: The id of the assignment
student_id: The id of the student
duration: The time it took the student to complete the assignment
submission_date: The date is was submitted