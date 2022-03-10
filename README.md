# Test task

This is a test task which i made 

The task:

You need to implement a page with a "+" button and a search input field (disabled by default).

Clicking the button opens a modal window.

In a modal window, a form containing fields:
- E-mail (input field);
- Text message (textarea field).

The email field must contain a valid email;
The text field must not contain special characters.

Below the form in the modal window is the "Save" button. After clicking this button, the modal window closes, and the text and email get on the page.

If you repeat the procedure from the beginning, then the text will be added to the previous one (that is, as individual messages in the chat will be under each other).

After we enter the first 3 characters, the entries on the page are sorted by content match (exact match, only beginning match, partial match).

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```
