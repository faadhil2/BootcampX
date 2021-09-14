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

## A student will have the following attributes:

id: A unique identifier
name: The full name of the student
email: The students' email address
phone: The students' phone number
github: The students' github profile url
start_date: The students' start date of the Bootcamp
end_date: The students' end date of the Bootcamp
cohort_id: The id of the cohort that the student is enrolled in

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

## A teacher will have the following attributes:

id: A unique identifier
name: The name of the teacher
start_date: The date that the teacher started working.
end_date: The date that the teacher stopped working.
is_active: If the teacher is actively teaching right now.

## An assistance_request will have the following attributes:

id: A unique identifier
assignment_id: The id of the assignment the request was made from
student_id: The id of the student making the request
teacher_id: The id of the teacher responding to the request
created_at: The timestamp when the request was made
started_at: The timestamp when the assistance started
completed_at: The timestamp when the assistance was completed
student_feedback: Feedback about the student given by the teacher
teacher_feedback: Feedback about the teacher given by the student