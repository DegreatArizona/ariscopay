document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("regForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get form data
      const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
      };
  
      // Convert data to JSON
      const jsonData = JSON.stringify(formData, null, 2);
  
      // Create a Blob and download as file
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "formData.json"; // File name
      a.click();
  
      // Clean up
      URL.revokeObjectURL(url);
      alert("JSON file downloaded!");
      form.reset();
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("regForm");
    const output = document.getElementById("output");

    // Save data to localStorage on form submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        };

        // Save to localStorage
        let savedData = JSON.parse(localStorage.getItem("formData")) || [];
        savedData.push(formData);
        localStorage.setItem("formData", JSON.stringify(savedData));

        // Clear form
        form.reset();

        // Display confirmation
        alert("Data saved successfully!");
    });

    // Retrieve and display data
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    if (savedData.length > 0) {
        savedData.forEach((data) => {
        const div = document.createElement("div");
        div.textContent = `Name: ${data.name}, Email: ${data.email}`;
        output.appendChild(div);
        });
    }
    });