// Handle showing forms based on department selection
function showComplaintForm() {
    const department = document.getElementById('department').value;
    const categoryContainer = document.getElementById('category-container');
    let categories = [];
  
    if (department === 'water') {
      categories = ['Water Shortage', 'Leakage', 'Water Contamination'];
    } else if (department === 'electricity') {
      categories = ['Power Outage', 'Voltage Fluctuation', 'Meter Issues'];
    } else if (department === 'garbage') {
      categories = ['Uncollected Waste', 'Street Cleaning', 'Recycling Issues'];
    }
  
    if (categories.length > 0) {
      categoryContainer.innerHTML = `
        <label for="category">Select Category:</label>
        <select id="category" required>
          <option value="">Select Category</option>
          ${categories.map(category => `<option value="${category}">${category}</option>`).join('')}
        </select>
      `;
      categoryContainer.style.display = 'block';
    } else {
      categoryContainer.style.display = 'none';
    }
  }
  
  // Handle form submission for complaints
  function submitComplaint(event) {
    event.preventDefault();
    const department = document.getElementById('department').value;
    const category = document.getElementById('category').value;
    const details = document.getElementById('complaint-details').value;
  
    if (!department || !category || !details) {
      alert('Please fill all fields');
      return;
    }
  
    alert(`Complaint submitted for ${department} - ${category}\nDetails: ${details}`);
  }
  
  // Handle login
  function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;
  
    if (username && password) {
      alert('Login successful');
      closeModal('login');
    } else {
      alert('Please fill all fields');
    }
  }
  
  // Handle registration
  function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username-register').value;
    const password = document.getElementById('password-register').value;
  
    if (username && password) {
      alert('Registration successful');
      closeModal('register');
    } else {
      alert('Please fill all fields');
    }
  }
  
  // Open and close modals
  document.getElementById('login-btn').onclick = () => openModal('login');
  document.getElementById('register-btn').onclick = () => openModal('register');
  
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  

  //Image
  function uploadImage(event) {
    event.preventDefault();
  
    // Get the selected file
    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Please select an image to upload.');
      return;
    }
  
    // Create a FormData object to send the file via AJAX
    const formData = new FormData();
    formData.append('image', file);
  
    // Example: using fetch to upload the image to the server
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Image uploaded successfully!');
        } else {
          alert('Error uploading image.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error uploading image.');
      });
  }
  