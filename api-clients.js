async function getTasks() {
  try {
    const apiUrl =
      "https://wincacademydatabase.firebaseio.com/eldin/tasks.json";

    const result = await fetch(apiUrl, { method: "GET" }).then((response) =>
      response.json()
    );

    let tasks = Object.keys(result).map((key) => ({
      id: key,
      description: result[key].description,
      done: result[key].done,
    }));
    return tasks;
  } catch (e) {
    console.log("Niet gelukt");
  }
}

//Post request om data te posten
async function postTask() {
  let description = document.getElementById("new-task").value;
  const response = await fetch(
    "https://wincacademydatabase.firebaseio.com/eldin/tasks.json",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: description,
        done: true,
      }),
    }
  );
}

//Delete request om task te verwijderen
async function deleteTask(id) {
  const result = fetch(
    `https://wincacademydatabase.firebaseio.com/eldin/tasks/${id}.json`,
    {
      method: "DELETE",
    }
  );
}
