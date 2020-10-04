import 'bootstrap/dist/css/bootstrap.css';
import regeneratorRuntime from "regenerator-runtime";

const tb = document.getElementById('tb');
const url = 'http://localhost:3333/api/users';
const myUrl = "https://mssem3.dk/devops-starter-1.0.1/api/person/all";
const urlId = "https://hulabulakongen.dk/Deploymentofpart1+2+3/api/person/";
const quoteUrl = " https://studypoints.info/jokes/api/jokes/period/hour";

fetch(myUrl)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const persons = data.all;
        const trs = persons.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td><td>${user.street}</td><td>${user.zip}</td><td>${user.city}</td></tr>`;
        });

        const trStr = trs.join('');
        tb.innerHTML = trStr;
    });

document.getElementById('btnId').onclick = () => {
    const id = document.getElementById('inpId').value;
    fetch(`${urlId}/${id}`)
        .then(res => fetchWithErrorCheck(res))
        .then(user => {
            const userStr = `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td><td>${user.street}</td><td>${user.zip}</td><td>${user.city}</td></tr>`;
            document.getElementById('divId').innerHTML = userStr;
        });
};


const getUser = async () => {
    const id = document.getElementById('inpId').value;
    const userResponse = await fetch(`${urlId}/${id}`);
    const userData = await fetchWithErrorCheck(userResponse);
    const userStr = `<tr><td>ID: ${userData.id} </td><td>First name: ${userData.firstName} </td><td>Last name: ${userData.lastName} </td><td>Phone number: ${userData.phone} </td><td>Street: ${userData.street} </td><td>Zip: ${userData.zip} </td><td>${userData.city} </td></tr>`;
    document.getElementById('divId').innerHTML = userStr;
}
document.getElementById('btnId').onclick = getUser;

function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}
//2.1 + 2.2 + 2.3 + 2.4
document.getElementById("findBtn").addEventListener("Click", findBtn.onclick);

findBtn.onclick = function () {
    fetch(quoteUrl)
        .then(res => fetchWithErrorCheck(res))
        .then((qoute) => {
            var joke = qoute.joke;
            document.getElementById("findDiv").innerHTML = joke;
        });
}
//2.6
document.getElementById("jokeBtn").addEventListener("Click", jokeBtn.onclick);

jokeBtn.onclick = function () {
    setInterval(alertFunc, 3000); // 3600000 hvis det skulle være hver time.
}

function alertFunc() {
    fetch(quoteUrl)
        .then(res => fetchWithErrorCheck(res))
        .then((qoute) => {
            var joke = qoute.joke;
            document.getElementById("jokeDiv").innerHTML = joke;
        });
}

//3.1 + 3.2 + 3.3

document.getElementById("north").addEventListener("Click", north.onclick);

north.onclick = function () {
    alert("North");
}

document.getElementById("east").addEventListener("Click", east.onclick);

east.onclick = function () {
    alert("East");
}

document.getElementById("south").addEventListener("Click", south.onclick);

south.onclick = function () {
    alert("South");
}

document.getElementById("west").addEventListener("Click", west.onclick);

west.onclick = function () {
    alert("West");
}