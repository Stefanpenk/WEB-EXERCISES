const getUsers = (e) => {
  e.preventDefault();

  const usersNumber = document.querySelector("[name = 'users-number']").value;
  const usersGender = document.querySelector("[name = 'gender']").value;
  // console.log(usersNumber, usersGender);

  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;

  //FETCH() method inside WINDOW - window.fetch(). It is async. If we want to use GET() then we put only one argument, which is URL. Request is sent to our URL, which creates promise. Promise is pending.
  fetch(url)
    // We creates settlements.
    //We set .then() for positive response. Positive response is also 404. Then() creates new promise which can be settled.
    .then((response) => {
      // console.log(response);
      if (response.status !== 200) {
        // We can set condition if response is different then 200.
        throw Error('Response is different than 200');
      } else {
        return response.json(); //json() method which isolates json from body and pars it into object.
      }
    })
    .then(json => showUsers(json.results))
    //We set .catch() for negative response.
    .catch(error => console.log(error))
}

const showUsers = (users) => {
  // console.log(users);
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = "";
  users.forEach((user) => {
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `
    <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first} ${user.name.last}</div>
    <img class="user__image" src="${user.picture.medium}">
    `
    resultArea.appendChild(item);
  })
}

document.querySelector('.generator').addEventListener('submit', getUsers);