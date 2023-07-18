#SQL Query Runner

The SQL Query Runner is a React component that allows users to run predefined SQL queries and display the results in a table format. It provides a simple user interface where users can select a query, enter a custom query, and view the results instantly.

#Features

Predefined Queries: The component comes with three predefined queries (Query 1, Query 2, and Query 3), each having its own set of columns and rows of data.
Custom Query: Users can also enter their own SQL query in a text area and execute it.
Result Display: The results of the executed query are displayed in a table format below the query input area.

#Usage

Clone the repository or integrate the SQLQueryRunner component into your React project.
Ensure that the necessary CSS file (sqlcss.css) is imported or included in your project.
Add the SQLQueryRunner component to the desired location in your React application.
Customize the predefined queries (queryData) with your own data or add new queries as needed.
Run your React application, and you should see the SQL Query Runner interface.
Select a predefined query from the dropdown or enter a custom query in the text area.
Click the "Run Query" button to execute the selected/custom query.
The results will be displayed in a table format below the query input area.


#Dependencies

The component has the following dependencies:

React: "^18.0.27"
Make sure to have these dependencies installed and properly configured in your project.

#Notes

The component currently supports only basic SQL queries and is intended for demonstration and learning purposes. It does not connect to a database or execute queries on a server.
Styling can be customized by modifying the sqlcss.css file or by adding your own CSS styles.
