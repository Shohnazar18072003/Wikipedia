const card = document.querySelector(".card");

let url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
const search = document.querySelector(".search");

search.addEventListener("keyup", (e) => {
  let url = ` https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${e.target.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { search } = data.query;
      console.log(search);
      let title = ` 
      <p class="p2"><span>Title</span>:${search[0].title}</p>
      <p class="p1"><span>Info</span>:${search[0].snippet}</p>
      `;
      card.innerHTML = title;
    });
});
