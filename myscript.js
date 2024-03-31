let form = document.getElementById('userForm');
let clearBtn = document.getElementById('clearBtn');
let userDataDiv = document.getElementById('userData');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    displayUserData();
    form.reset();
  });

  function displayUserData() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;

    let card = document.createElement('div');
    card.classList.add('card', 'mb-3', 'col-3'); // Added 'mx-2' for margin-x: 0.5rem
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${firstName} ${lastName}</h5>
        <p class="card-text"><strong>Email:</strong> ${email}</p>
        <p class="card-text"><strong>Phone:</strong> ${phone}</p>
        <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
        <p class="card-text"><strong>Gender:</strong> ${gender}</p>
        <p class="card-text"><strong>Address:</strong> ${address}</p>
      </div>
    `;
    userDataDiv.appendChild(card);
}

  clearBtn.addEventListener('click', () => {
    userDataDiv.innerHTML = ''; 
    form.reset();
  });