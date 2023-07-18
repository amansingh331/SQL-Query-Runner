import React, { useState } from 'react';
import './sqlcss.css';

const SQLQueryRunner = () => {
  const [selectedQuery, setSelectedQuery] = useState('');
  const [resultHtml, setResultHtml] = useState('');

  const queryData = {
    query1: {
      columns: ['ID', 'Name', 'Age'],
      rows: [
        [1, 'John Doe', 25],
        [2, 'Jane Smith', 30],
        [3, 'Alex Johnson', 35],
        [4, 'Michael Brown', 28],
        [5, 'Emma Wilson', 32],
        [6, 'James Anderson', 27],
        [7, 'Olivia Taylor', 31],
        [8, 'William Davis', 29],
        [9, 'Sophia Martinez', 26],
        [10, 'Benjamin Clark', 33],
      ],
    },
    query2: {
      columns: ['Product', 'Price'],
      rows: [
        ['Apple', 1.99],
        ['Orange', 0.99],
        ['Banana', 0.5],
        ['Mango', 2.49],
        ['Grapes', 1.79],
        ['Strawberries', 3.99],
        ['Pineapple', 2.99],
        ['Watermelon', 4.49],
        ['Peach', 1.29],
        ['Pear', 0.89],
      ],
    },
    query3: {
      columns: ['Country', 'Population'],
      rows: [
        ['USA', 331002651],
        ['China', 1439323776],
        ['India', 1380004385],
        ['Indonesia', 273523615],
        ['Pakistan', 225199937],
        ['Brazil', 213993437],
        ['Nigeria', 211400708],
        ['Bangladesh', 166303498],
        ['Russia', 145912025],
        ['Mexico', 130262216],
      ],
    },
  };

  const runQuery = () => {
    const trimmedQuery = selectedQuery.trim();
    if (trimmedQuery == "query1" || trimmedQuery == "query2" || trimmedQuery == "query3") {
      displayResult(trimmedQuery);
    } else {
      alert('Invalid Query');
    }

  };

  const displayResult = (selectedQuery) => {
    const queryResult = queryData[selectedQuery];
    let tableHtml = '<table>';
    tableHtml += '<tr>';
    for (const column of queryResult.columns) {
      tableHtml += `<th>${column}</th>`;
    }
    tableHtml += '</tr>';

    for (const row of queryResult.rows) {
      tableHtml += '<tr>';
      for (const cell of row) {
        tableHtml += `<td>${cell}</td>`;
      }
      tableHtml += '</tr>';
    }

    tableHtml += '</table>';

    setResultHtml(tableHtml);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>SQL Query Runner</h1>
      <textarea
        id="query-input"
        placeholder="Enter SQL query"
        value={selectedQuery}
        onChange={(e) => setSelectedQuery(e.target.value)}
      ></textarea>
      <select
        id="query-select"
        value={selectedQuery}
        onChange={(e) => setSelectedQuery(e.target.value)}
      >
        <option value="">Select a query</option>
        <option value="query1">Query 1</option>
        <option value="query2">Query 2</option>
        <option value="query3">Query 3</option>
      </select>
      <button id="run-query-btn" onClick={runQuery}>
        Run Query
      </button>
      <div
        id="result-container"
        dangerouslySetInnerHTML={{ __html: resultHtml }}
      ></div>
    </div>
  );
};

export default SQLQueryRunner;
