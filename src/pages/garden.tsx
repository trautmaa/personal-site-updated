import React from 'react';

export default () => {
  return (
    <div style={{ margin: '3rem' }}>
      <h1 style={{ textAlign: 'center' }}>🌸 Writing Garden 🌿</h1>
      <br />
      <div className='plot' style={{ maxWidth: '63rem', margin: 'auto' }}>
        <h2>8/1/20</h2>
        <h3>XSS / Cross-Site Scripting</h3>
        <p>
          Somehow hijacking a website by injecting code, which will then run in
          someone's browser.
        </p>
        <p>
          The problem is that the user may trust the website, and the attacker
          leverages that trust. Most commonly it's done with JavaScript, but it
          can been done in even something like CSS.
        </p>
        <p>
          The big screw-up as a developer would be running 'unsanitized' user
          input.
        </p>
        <p>
          One thing an attacker could do is grab the user's cookies, which might
          contain sensitive info. They could also use geolocation, webcam,
          microphone, or maybe even files from a user's computer.
        </p>
        <p>
          Example: rendering user input into the dom. Then attacker could add a{' '}
          <i>script</i> tag and they are off to the races.
        </p>
        <p>Example: Blog comments</p>
        <h3>CSRF: Cross Site Request Forgery</h3>
        <p>
          Basic idea is... once a user is legitimately authenticted somewhere
          (like their bank website), get them to open a link that makes a
          request to the bank. It will leverage their authentication cookie and
          go through, performing the attacker's intended action.
        </p>
        <h3>XHR: XML HTTP Request</h3>
        <p>
          You can do attacks similar to XSS. Conclusion here is sanitize all
          user input.
        </p>
        <h3>@mixin and @include in Sass</h3>
        <p>
          @mixin my-mixin defines a chunk of sass that can be reused inside
          other selectors with @include. Treats hypens and underscores the same.
        </p>
        <h3>Protected vs. Private</h3>
        <p>Private can only be accessed within the class. </p>
        <p>
          Protected can be accessed inside the class, and by an extending class.
        </p>
      </div>
      <div className='plot' style={{ maxWidth: '63rem', margin: 'auto' }}>
        <h2>7/21/20</h2>
        <h3>
          What's the difference between Promises and Observables in JavaScript?
        </h3>
        <p>
          First off, observables are <b>not</b> part of JavaScript yet. They are
          proposed, and they are implemented by a library called RXJS. But they
          are not part of the language as of July 2020!
        </p>
        <p>
          Promises are <i>eager</i> whereas observables are <i>lazy</i>.
        </p>
        <p>
          Promises are always asynchronous. Anything inside a .then will always
          be put onto a to-do-later queue, which will only be accessed when the
          current stack is empty.
        </p>
        <p>
          Observable is like a connection established between a producer and a
          subscriber. Something can synchronously subscribe to an observable
          with `.subscribe(callback)`. Then, when the observable calls
          `.next(value)` that value is passed into the subscriber's callback
          function.
        </p>
        <p>
          One distinction between a promise and an observable is that a promise
          will only return one thing, whereas an observable may return many
          things in a sequence. It could keep sending new values.
        </p>
        <p>Observable ends with `.complete`</p>
        <p>
          For observer we define three things: `next`, `error`, and `complete`,
          each with their own associated code to perform in each case.
        </p>
        <p>
          The observable has corresponding commands available. There's a
          callback, with a parameter `subscriber` on which you can do
          `subscriber.next`, `subscriber.error` and `subscriber.complete`. These
          correspond to the actions that an observer has set up.
        </p>
        <p>
          Synchronous code inside an observable runs synchronously, as if that
          observable were just another function.
        </p>
        <p>An observer can call unsubscribe() to stop getting values.</p>
      </div>
    </div>
  );
};
