<p>The Timestamp Microservice is a project from freeCodeCamp's Backend Development and APIs curriculum. It is designed to create a simple API that converts human-readable dates and UNIX timestamps, providing both formats as part of the response.</p>
<div>Features</div>
<ol>
<li>Timestamp Conversion:</li>

<ul>
<li>Accepts a date string or UNIX timestamp as a parameter</li>
<li>Returns both the UNIX timestamp and the UTC date format</li>
</ul>
<br>

<li>Default Timestamp:</li>
<ul>
<li>When no date is provided, it returns the current timestamp (UNIX and UTC).</li>
</ul>
<br>
<li>Error Handling:</li>
<ul>
 <li>Returns an error message for invalid date inputs.</li>
</ul
</ol>
  <br>
How It Works<br>
Input: A GET request with a date or timestamp parameter.<br><br>
Output: A JSON response containing:<br>
unix: The UNIX timestamp.<br>
utc: The UTC date format.

