// Get the HTML elements that will show the clock information.
const timeElement = document.getElementById("time");
const periodElement = document.getElementById("period");
const dateElement = document.getElementById("date");
const timezoneElement = document.getElementById("timezone");

// Add a zero to numbers smaller than 10.
// For example, 7 becomes "07".
function addLeadingZero(number) {
	if (number < 10) {
		return "0" + number;
	}

	return number;
}

function updateClock() {
	// Create a Date object containing the current date and time.
	const now = new Date();

	// Get the current hour, minute, and second.
	let hours = now.getHours();
	const minutes = now.getMinutes();

    

	const seconds = now.getSeconds();

	// Use the 12-hour clock: 0 becomes 12, and 13 becomes 1.
	let period = "AM";

	if (hours >= 12) {
		period = "PM";
	}

	if (hours === 0) {
		hours = 12;
	} else if (hours > 12) {
		hours = hours - 12;
	}

	// Put the time into the page.
	timeElement.textContent = `${hours}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
	periodElement.textContent = period;

	// Put the date into the page in a readable format.
	dateElement.textContent = now.toLocaleDateString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric"
	});

	// Show the timezone selected by the visitor's computer.
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	timezoneElement.textContent = timezone.replace(/_/g, " ");
}

// Show the time as soon as the page loads.
updateClock();

// Update the time every 1,000 milliseconds, which is one second.
setInterval(updateClock, 1000);
