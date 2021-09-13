SELECT cohorts.name as cohort_name, count(assignment_submissions.*) as total_submissions
FROM cohorts
JOIN students on cohorts.id = cohort_id
JOIN assignment_submissions on student_id = students.id
GROUP BY cohort_name
ORDER BY total_submissions DESC;