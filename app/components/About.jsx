var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather appication built in React.
        Please see the resource links below for the
        different tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by weather name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
