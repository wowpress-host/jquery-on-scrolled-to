# jquery-on-scrolled-to

jQuery plugin to execute code when specific element becomes visible.

I.e. when it reaches viewport, visitor scrolls to it or window resized so that element becomes visible.

# Demo

[https://wowpress.host/jquery-on-scrolled-to/](https://wowpress.host/jquery-on-scrolled-to/)

# Install

Available via [npm](https://www.npmjs.org/package/jquery-on-scrolled-to)

```bash
npm install jquery-on-scrolled-to
```

# Usage

Basic example

```javascript
$('.my-div').onScrolledTo(0.5, function() {
   this.html('fired');
});
```

Where 0.5 is the portion of .my-div that has become visible before firing callback.
Event is executed only once.

# License

MIT
