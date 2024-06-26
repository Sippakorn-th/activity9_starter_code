import { BACKEND_URL } from "./config.js";

export async function getItems() {
  const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());

  return items;
}

export async function createItem(item) {
  await fetch(`${BACKEND_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

export async function deleteItem(id, item) {
  await fetch(`${BACKEND_URL}/items/${id}`, {
    method: "DELETE",
  });
}

export async function filterItems(filterName, lowerPrice, upperPrice) {
  // TODO3: implement this function
  // You may need to understand handleFilterItem() function in ./table.js before implementing this function.
  return /* return the filted items */;
}

export async function getMembers() {  
  const members = await fetch(`${BACKEND_URL}/members`, {
    method: "GET",
  }).then((r) => r.json());
  
  return members;
}

export async function createMember(member) {
  await fetch(`${BACKEND_URL}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
}

export async function deleteMember(id, item) {
  // TODO4: implement this function
}

export async function createScore(score) {
  await fetch(`${BACKEND_URL}/scores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(score),
  });
}

export async function getScores() {
  const scores = await fetch(`${BACKEND_URL}/scores`, {
    method: "GET",
  }).then((r) => r.json());

  return scores;
}
