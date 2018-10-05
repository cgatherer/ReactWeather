var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

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
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by weather name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
