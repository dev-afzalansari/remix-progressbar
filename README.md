# Remix-Progressbar

Progress Bar for Remix Applications.

# Installation

```sh
npm i remix-progressbar
```

# Usage

It's default exported so import it with the name you like.

Import and place it in the root of your app.

```typescript
// root.tsx

// ....

import Progressbar from 'remix-progressbar'

// .....

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {
          // ....
        }
        <ProgressBar />
        {
          // ....
        }
      </body>
    </html>
  );
}
```

# Configuration

Below are the options you can pass to configure the Component.

* ***color*** : Color of the bar and the spinner. Defaults to `#3366FF`.
* ***height*** : Just a number for the height of the bar in px. Defaults to 2 which means 2px.
* ***showSpinner*** : A boolean for the spinner defaults to `true`.
* ***delay*** : A number in milliseconds to delay the animation. Useful when you don't want to show the bar for the page which has no loader or might not take too much time for example `delay={200}`. If the page is loaded before the `delay` time is up the bar will not be displayed. Defaults to 0. 
* ***startFrom*** : Just a number for the starting point of the bar out of 100%. Defaults to 20 which means 20%.
* ***easing*** : A Css easing string for adjusting the easing animation of the bar. Defaults to `linear`.
* ***speed*** : A number in milliseconds to adjust the animation speed of the bar.
* ***trickle*** : A boolean to enable or disable the automatic incrementing behaviour of the bar. Defaults to `true`.
* ***trickleSpeed*** : A number in milliseconds to set the interval between trickles.
* ***customCSS*** : A callback which receives internal css string and returns style tag. Defaults to `customCSS={(css) => <style>{css}</style>}`

# License

[MIT License](https://github.com/dev-afzalansari/remix-progressbar/blob/main/LICENSE)