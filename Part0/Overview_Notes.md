# Fundamentals of Web apps

Link to Page: https://fullstackopen.com/en/part0/fundamentals_of_web_apps

<!--## 0.1: HTML

Review the basics of HTML by reading this tutorial from Mozilla: HTML tutorial.

This exercise is not submitted to GitHub, it's enough to just read the tutorial

## 0.2: -->

## 0.1: HTML
Review the basics of HTML by reading this tutorial from [Mozilla: HTML tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

## 0.2: CSS 
Review the basics of CSS by reading this tutorial from [Mozilla: CSS tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

## 0.3: HTML forms
Learn about the basics of HTML forms by reading Mozilla's tutorial: [Your first form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)

## 0.4: new note

In chapter Loading a page containing JavaScript - review the chain of events caused by opening the page https://studies.cs.helsinki.fi/exampleapp/notes is depicted as a sequence diagram

The diagram was made using websequencediagrams service as follows:

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```
>(Created using: https://www.websequencediagrams.com/)

Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the *submit* button.

If necessary, show operations on the browser or on the server as comments on the diagram.

The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.

All necessary information for doing this, and the next two exercises, can be found from the text of this part. The idea of these exercises is to read the text through once more, and to think through what is going on there. Reading the application code is not necessary, but it is of course possible.

>My File Submission
<details>
    <summary> Sequence Diagram for Excersice 0.4 </summary>
<img src="0.4\Exercise_0.4-new_note.jpg">

Text code [here](0.4\0.4-WebSequenceDiagram.txt)
</details>


## 0.5: Single page app

Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

> My File Submission
<details>
    <summary> Sequence Diagram for Excersice 0.5 </summary>
<img src="0.5\Exercise_0.5-Single_page_app.jpg">

Text code [here](0.5\0.5-WebSequenceDiagram.txt)
</details>

## 0.6: New note

Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

> My File Submission
<details>
    <summary> Sequence Diagram for Excersice 0.6 </summary>
<img src="0.6\Exercise_0.6-New_note.jpg">
</details>