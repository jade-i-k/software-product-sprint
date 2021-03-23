// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** MAPS API KEY: AIzaSyCl-9FOAIwfu6528CDDunRi4G33-N9A9xM */

google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {
       'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyCl-9FOAIwfu6528CDDunRi4G33-N9A9xM'});
google.charts.setOnLoadCallback(drawMarkersMap);
google.charts.setOnLoadCallback(drawChart);

/** Creates a Markers Map and adds it to the page */
function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['City'],
        ['Beijing'],
        ['Xian'],
        ['Shanghai'],
        ['Guilin'],
        ['Chengdu']
      ]);

      var options = {
        region: 'CN',
        displayMode: 'markers',
        colorAxis: {colors: ['green', 'blue']},
        width:450,
        height:250
      };

      var chart = new google.visualization.GeoChart(document.getElementById('markers_div'));
      chart.draw(data, options);
};

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Language');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Java', 3],
          ['Python', 2],
          ['C', 1],
          ['HTML', 1]          
        ]);

  const options = {
    title: 'Years Spent Learning CS',
    width:500,
    height:400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}

/**
 * Adds a random fact about me to the page.
 */

function addRandomGreeting() {
  const greetings =
      ['I\'m 19', 'I want to adopt a cat', 'I\'m learning Chinese in school',
      'I love the rain', 'My favorite season is early fall'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
