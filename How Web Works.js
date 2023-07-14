Part One: Solidify Terminology

     //What is HTTP?
"Hyper Text Transfer Protocol" 
//how clients get data from, or send data to, a server.

    //What is a URL?
"Uniform Resource Locator"
//an address from an internet resource.

    //What is DNS?
"Domain Name System"
//System that takes human related URLs and converts to an IP address.

    //What is a query string?
"A query string is a part of a web address (URL) that has data/instructions for the server."
"It comes after a question mark (?) and includes key-value pairs separated by ampersands (&)."
"The key-value pairs provide specific information related to the request. "
"For example, in the URL 'https://www.example.com/search?q=apple&category=fruits', "
"the query string '?q=apple&category=fruits' tells the server to search for the term 'apple' in the category 'fruits'. The server uses this information to generate a response or perform actions accordingly."

    //What are two HTTP verbs and how are they different?
// GET
"Requests using GET should only retrieve data."
// HEAD
"The HEAD method asks for a response identical to a GET request, but without the response body."
// POST
"The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server."
// PUT
"The PUT method replaces all current representations of the target resource with the request payload."
// DELETE
"The DELETE method deletes the specified resource."
// CONNECT
"The CONNECT method establishes a tunnel to the server identified by the target resource."
// OPTIONS
"The OPTIONS method describes the communication options for the target resource."
// TRACE
"The TRACE method performs a message loop-back test along the path to the target resource."
// PATCH
"The PATCH method applies partial modifications to a resource."

    //What is an HTTP request?
"An HTTP request is a request from the client to the server which follows the HTTP protocol"
"ex: request for HTML/CSS/JS from google.com"

    //What is an HTTP response?
"An HTTP response is a response from a server to a client which follows the HTTP protocol"
"ex: sending back HTML/CSS/JS"

    //What is an HTTP header? Give a couple examples of request and response headers you have seen.

"Headers provide additional information about the request or the response"
// "Request Header: "User-Agent"
"Purpose: Identifies the client (usually a web browser) that is making the request."
"Example: 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' "
//Response Header: 'Content-Type' 
"Purpose: Informs the client about the type and format of the content being sent in the response."
"Example: 'Content-Type: application/json' "
// Request Header: "Authorization"
"Purpose: Contains authentication credentials to access protected resources."
"Example: 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' "
// Response Header: "Cache-Control"
"Purpose: Provides caching directives to specify how the client or intermediary should cache the response."
"Example: 'Cache-Control: max-age=3600' "

    //What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
"1. Your browser 'resolves' the name into an IP address using DNS"
"2. Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)"
"3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)"
"4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)"
"5. The browser makes separate HTTP requests for those resources and receives response from the server for each"

Part Two: Practice Tools

//Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
curl "https://icanhazdadjoke.com/search?term=pirate"

curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"
//Use dig to find what the IP address is for icanhazdadjoke.com
dig icanhazdadjoke.com +short
//Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
cd to file, run command
//


Part Three: Explore Dev Tools

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

Edit the page to change the form type to POST, 
refresh in the browser and re-submit. Do you still see the field in the query string? 
Explore in Chrome how you can view the request and response headers, as well as the form data.

//field will not be in query string for the POST method. - When using the POST method, the form data is sent as part of the request payload instead of being included in the query string. 


