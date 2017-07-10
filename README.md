# Event-Calendar - simple to incorporate web calendar with event display.


### [Preview](https://klaudijusm.github.io/Event-Calendar/index.html)


## What is it?

A HTML and JavaScript calendar that can be added into any existing website.

### Featuring
- Simple interaction - use your mouse or your keyboard arrows to scroll through the months
- Event display - marks the days that have an event with a customisable line
- Easy incorporation - allows to specify a place in your document where the calendar should appear.
- Event notification - when clicked on a date that has an event, a notification will appear with all of the events on that day.


## How to use it?

1. Download it.

2. Move the _calendar.css_, _calendar-tablets-mobile.css_ and the _calendar.js_
   files to the appropriate folders in your project.

3. Include the before mentioned files in your project.

4. Either add a
```
<div id="calendarContainer"></div>
```
   line in your html files
   where the calendar has to be created or leave it out and the calendar will be
   created at the bottom of the page.

5. Create the calendar in your javascript by adding the following line:
```
createCalendar(true);
```
_Note: Pass 'true' if you want the calendar to be expandable/collapsable with a
button click or false if not._

6. (Optional) Populate it with your data array by adding the following to your JS file.
```
populateCalendar(YOUR_ARRAY, TITLE_INDEX, TIME_INDEX);
```
_Note: Change 'YOUR_ARRAY' to your array variable, 'TITLE_INDEX' to the index of the
event title index in your array and the 'TIME_INDEX to the index of times in your array._

7. (Optional) Customise it by modifying the _calendar.css_ file.


## Where should I include it in my project?

First of you should add this to your HTML file specifically to where your want
your calendar to appear in your web page:
```
<div id="calendarContainer"></div>
```
_This can be skipped and the calendar will be created at the bottom of your first
body element_

Secondly you need to add this line to your JavaScript file, best to add it to
your function that is called when the document is created:
```
createCalendar(true);
```

Last but not least you can either choose to populate the calendar by adding this
line right bellow the previous line if you want to show events on your calendar:
```
populateCalendar(YOUR_ARRAY, TITLE_INDEX, TIME_INDEX);
```
_Note: Change 'YOUR_ARRAY' to your array variable, 'TITLE_INDEX' to the index of the
event title index in your array and the 'TIME_INDEX to the index of times in your array._


## Frequently Asked Questions (F.A.Q.)

### What are the _index.html_, _jquery_3.2.1.min.js_ and _main.js_ files used for?
They are there to help you better understand how to add this calendar to your project.

### Is Jquery needed?
No. Jquery is here for the sole purpose to showcase the calendar as soon as the page loads.

### Where can I find more info on how to pass event details etc.?
Check out the main.js file, it should give a better understanding of it.
