SELECT sum(assignment_submissions.duration) as total_duration
FROM assignment_submissions
JOIN students on student_id = students.id
JOIN cohorts on students.cohort_id = cohorts.id
WHERE cohorts.name = 'FEB12';