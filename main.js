// Sample data, couple of events with title at index 0 and time at index 1.
var deadlines = [
  ["Back to university","2017-09-15 15:00"],
  ["DED","2017-09-15 15:00"],
  ["Exam: 3D Modelling and Animation","2018-05-16 09:00"],
  ["Coursework","2017-03-30 16:00"],
  ["Holiday Flight","2017-06-19 21:25"]
];

$( document ).ready(function() {
  // Create a calendar (build the main block).
  // Send true if you want a collapse/expand button.
  createCalendar(true);

  // Populate it with event data in the array 'deadlines' which holds
  // the titles at the index 0 and the times of the events at index 2.
  populateCalendar(deadlines.slice(), 0, 1);
});
