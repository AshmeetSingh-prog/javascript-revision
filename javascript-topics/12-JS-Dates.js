/* 
0-11 MOnths 
1-31 date 
0-6 days
// Current Date & Time
let d1 = new Date();

// Milliseconds since 1 Jan 1970 not used 
let d2 = new Date(milliseconds);

// Date String
let d3 = new Date("2026-01-15");

// Year, Month
let d4 = new Date(year, month);

// Year, Month, Day
let d5 = new Date(year, month, day);

// Year, Month, Day, Hour, Minute, Second
let d6 = new Date(year, month, day, hour, minute, second); 
*/

// 1. Date In JavaScript
// Used to work with date and time.
let date11 = new Date();
console.log(date11);
/*
Current Date & Time
*/

// ==========================================
// 2. Date Object Type
let date22 = new Date();
console.log(typeof date22);
/*
object
*/

// ==========================================
// 3. Unix Epoch
// All dates are stored as milliseconds
// since 1 Jan 1970 UTC.
let date33 = new Date(0);
console.log(date33);
/*
1970-01-01T00:00:00.000Z
*/

// ==========================================
// 4. Using Milliseconds
let date44 = new Date(1000);
console.log(date44);
/*
1970-01-01T00:00:01.000Z
*/

// ==========================================
// 5. Using Date String
let date55 = new Date("2026-01-15");
console.log(date55);
/*
2026-01-15T00:00:00.000Z
*/

// ==========================================
// 6. Using Year, Month
// Month: 0-11
let date66 = new Date(2026, 0);
console.log(date66);
/*
Jan 01 2026
*/

// ==========================================
// 7. Using Year, Month, Day
let date77 = new Date(2026, 0, 15);
console.log(date77);
/*
Jan 15 2026
*/

// =========================================
// 8. Full Date
let date88 = new Date(2026, 0, 15, 10, 30, 45);
console.log(date88);
/*
Jan 15 2026 10:30:45
*/

// ==========================================
// 9. Month Index
// Jan = 0
// Feb = 1
// Dec = 11
let jan = new Date(2026, 0, 1);
let dec = new Date(2026, 11, 1);

// ==========================================
// 10. Invalid Date

let wrongDate = new Date("Hello");
console.log(wrongDate);
/*
Invalid Date
*/

// ==========================================
// 11. Date Comparison
let first = new Date("2026-01-01");
let second = new Date("2027-01-01");
console.log(first < second);
/*
true
*/

// ==========================================
// 12. Date Objects Are Different
let d1 = new Date("2026-01-01");
let d2 = new Date("2026-01-01");
console.log(d1 === d2);
/*
false
*/

// ==========================================
// 13. Negative Month
let previous = new Date(2026, -1, 1);
console.log(previous);
/*
Dec 01 2025
*/

// ==========================================
// DATE METHODS IN JAVASCRIPT
// =============================


// ==========================================
// 1. getDate()
// Syntax - date.getDate()
// Returns day of month (1-31)
let date1 = new Date("2026-01-15");
console.log(date1.getDate());
/*
15
*/

// ===========================================
// 2. getDay()
// Syntax - date.getDay()
// Returns day of week
// 0=Sun, 1=Mon, ..., 6=Sat
let date2 = new Date("2026-01-15");
console.log(date2.getDay());
/*
4
*/

// ==========================================
// 3. getMonth()
// Syntax - date.getMonth()
// Returns month index (0-11)
// Jan=0, Dec=11
let date3 = new Date("2026-01-15");
console.log(date3.getMonth());
/*
0
*/

// ==========================================
// 4. getFullYear()
// Syntax - date.getFullYear()
// Returns complete year
let date4 = new Date("2026-01-15");
console.log(date4.getFullYear());
/*
2026
*/

// ==========================================
// 5. getHours()
// Syntax - date.getHours()
// Returns hour (0-23)
let date5 = new Date();
console.log(date5.getHours());

// ==========================================
// 6. getMinutes()
// Syntax - date.getMinutes()
// Returns minutes (0-59)
let date6 = new Date();
console.log(date6.getMinutes());

// ==========================================
// 7. getSeconds()
// Syntax - date.getSeconds()
// Returns seconds (0-59)
let date7 = new Date();
console.log(date7.getSeconds());

// ==========================================
// 8. getMilliseconds()
// Syntax - date.getMilliseconds()
// Returns milliseconds (0-999)
let date8 = new Date();
console.log(date8.getMilliseconds());

// ==========================================
// 9. getTime()
// Syntax - date.getTime()
// Returns milliseconds since
// 1 Jan 1970 UTC
let date9 = new Date();
console.log(date9.getTime());

// ==========================================
// 10. Date.now()
// Syntax - Date.now()
// Returns current timestamp
// without creating Date object
console.log(Date.now());
// 0845298508080 miliseconds

// ==========================================
// 11. setDate()
// Syntax - date.setDate(day)
// Changes day of month
// Edge Case:
// setDate(32) -> Next Month

let date11 = new Date("2026-01-15");
date11.setDate(20);
console.log(date11);
/*
2026-01-20...
*/

// ==========================================
// 12. setMonth()
// Syntax - date.setMonth(month)
// Changes month
// Edge Case:
// setMonth(13) -> Next Year
let date12 = new Date("2026-01-15");
date12.setMonth(11);
console.log(date12);
/*
Dec 15 2026
*/

// ==========================================
// 13. setFullYear()
// Syntax - date.setFullYear(year)
// Changes year
let date13 = new Date("2026-01-15");
date13.setFullYear(2030);
console.log(date13);
/*
2030-01-15...
*/

// ==========================================
// 14. toDateString()
// Syntax - date.toDateString()
// Returns readable date
let date14 = new Date("2026-01-15");
console.log(date14.toDateString());
/*
Thu Jan 15 2026
*/

// ==========================================
// 15. toTimeString()
// Syntax - date.toTimeString()
// Returns readable time
let date15 = new Date();
console.log(date15.toTimeString());
// 18:41:00 GMT+0530 (India Standard Time)

// ==========================================
// 16. toISOString()
// Syntax - date.toISOString()
// Returns ISO format
// Useful for APIs & Databases
let date16 = new Date("2026-01-15");
console.log(date16.toISOString());
/*
2026-01-15T00:00:00.000Z
*/

// ==========================================
// 16. toLocaleString()
// Syntax - date.toLocaleString()
// Returns date and time according
// to local format
// Useful for showing date & time together
let date19 = new Date("2026-01-15T10:30:45");
console.log(date19.toLocaleString());
/*
15/1/2026, 10:30:45 am
(May vary by system and region)
*/

// ==========================================
// 17. toLocaleDateString()
// Syntax - date.toLocaleDateString()
// Returns date according
// to local format
let date17 = new Date("2026-01-15");
console.log(date17.toLocaleDateString());
/*
15/1/2026
(May vary by system)
*/

// ==========================================
// 18. toLocaleTimeString()
// Syntax - date.toLocaleTimeString()
// Returns time according
// to local format
let date18 = new Date();
console.log(date18.toLocaleTimeString());
/*
May vary by system
*/

// ==========================================
// IMPORTANT NOTES
// ==========================================

// getDate()  -> Day of Month (1-31)
// getDay()   -> Day of Week (0-6)
// getMonth() -> Month Index (0-11)

let sample = new Date("2026-01-15");
console.log(sample.getDate());   // 15
console.log(sample.getDay());    // 4
console.log(sample.getMonth());  // 0
