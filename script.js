async function searchEmployee() {
    const query = document.getElementById('searchQuery').value;
    const url = `http://localhost:3000/solr/new_employee_data/select?q=Full_Name:"${encodeURIComponent(query)}"&wt=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
        if (data.response && data.response.docs) {
            displayResults(data.response.docs);
        } else {
            console.error("No results found.");
            document.getElementById('results').innerHTML = "<p>No results found.</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('results').innerHTML = "<p>Error fetching data.</p>";
    }
}
function displayResults(employees) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    if (!employees || employees.length === 0) {
        resultsDiv.innerHTML = "<p>No employees found.</p>";
        return;
    }

    const consolidatedEmployees = {};

    employees.forEach(employee => {
        const employeeId = employee.Employee_ID?.[0];
        if (!employeeId) return;
        if (!consolidatedEmployees[employeeId]) {
            consolidatedEmployees[employeeId] = { ...employee };
        } else {
            Object.keys(employee).forEach(key => {
                if (!consolidatedEmployees[employeeId][key] || consolidatedEmployees[employeeId][key][0] === "N/A") {
                    consolidatedEmployees[employeeId][key] = employee[key];
                }
            });
        }
    });

    Object.values(consolidatedEmployees).forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';

        const fullName = employee.Full_Name?.[0] || "N/A";
        const employeeId = employee.Employee_ID?.[0] || "N/A";
        const jobTitle = employee.Job_Title?.[0] || "N/A";
        const department = employee.Department?.[0] || "N/A";
        const gender = employee.Gender?.[0] || "N/A";
        const age = employee.Age?.[0] || "N/A";
        const ethnicity = employee.Ethnicity?.[0] || "N/A";
        const country = employee.Country?.[0] || "N/A";
        const city = employee.City?.[0] || "N/A";
        const salary = employee.Annual_Salary?.[0] || "N/A";
        const bonus = employee.Bonus__?.[0] || "N/A";
        const hireDate = employee.Hire_Date?.[0] || "N/A";

        employeeCard.innerHTML = `
            <strong>Name:</strong> ${fullName}<br>
            <strong>Employee ID:</strong> ${employeeId}<br>
            <strong>Job Title:</strong> ${jobTitle}<br>
            <strong>Department:</strong> ${department}<br>
            <strong>Gender:</strong> ${gender}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Ethnicity:</strong> ${ethnicity}<br>
            <strong>Country:</strong> ${country}<br>
            <strong>City:</strong> ${city}<br>
            <strong>Annual Salary:</strong> ${salary}<br>
            <strong>Bonus:</strong> ${bonus}<br>
            <strong>Hire Date:</strong> ${hireDate}<br>
        `;
        resultsDiv.appendChild(employeeCard);
    });
}
