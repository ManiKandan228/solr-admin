# Employee Data Search System

## Overview
This project is an **Employee Data Search System** that uses **Apache Solr** for indexing and searching employee records. The system allows users to search for employees based on their name, retrieving detailed information such as department, gender, ethnicity, age, country, city, job title, salary, and hire date.

The front-end is developed using **HTML, CSS, and JavaScript**, and the back-end proxy server is built using **Node.js** to handle Cross-Origin Resource Sharing (CORS) issues when interacting with Solr.

## What
- **Solr Backend**: Apache Solr is used for indexing employee data and querying it efficiently.
- **Frontend UI**: The user interface allows users to search for employee details by name and displays the results dynamically.
- **CORS Proxy**: A Node.js proxy server is set up to handle CORS requests from the front-end to the Solr API.

## Why
The purpose of this project is to showcase how to integrate **Apache Solr** with a web application to build a fast and efficient search system. Solr's indexing capabilities allow for scalable search operations, which are vital in applications dealing with large amounts of structured data like employee records. By using this system, users can quickly search through employee data and retrieve relevant details in real-time.

## How
1. **Solr Setup**: Apache Solr is set up to index employee data. A collection (e.g., `new_employee_data`) is created in Solr, and employee documents are indexed.
2. **Node.js Proxy**: A proxy server built using Node.js handles the communication between the front-end and the Solr back-end, resolving CORS issues.
3. **Frontend Development**: The web interface allows users to input a name to search for an employee, with results displayed in a structured format using HTML and CSS for styling.
4. **JavaScript Integration**: JavaScript is used to fetch search results from the Node.js proxy and render them dynamically on the page.

## Features
- **Full-Name Search**: Users can search by full names of employees.
- **Detailed Employee Information**: On search, the system displays employee details like job title, salary, department, and hire date.
- **Responsive UI**: The user interface is styled to be simple, clean, and responsive.
- **CORS Handling**: A Node.js proxy is implemented to manage CORS-related issues when fetching data from Solr.

## Running the Project
1. Start the Solr server:
   ```bash
   solr start
