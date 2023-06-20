// Get Data From REST API
async function getItemList() {
  document.getElementById("loader").classList.remove("d-none");
  const URL = "https://crud.teamrabbil.com/api/v1/ReadProduct";
  const res = await axios.get(URL);

  document.getElementById("loader").classList.add("d-none");

  if (res.status == 200) {
    const data = res.data["data"];
    data.forEach((item) => {
      document.getElementById("itemList").innerHTML += `
            <td>${item["ProductName"]}</td>
            <td>${item["ProductCode"]}</td>
            <td>${item["UnitPrice"]}</td>
            <td>${item["Qty"]}</td>
            <td>${item["TotalPrice"]}</td>
            <td><button onclick="getUpdateDataId('${item["_id"]}')">Update</button></td>
            <td><button onclick="deleteItem('${item["_id"]}')">Delete</button></td>
            `;
    });
  } else {
    console.log(error);
  }
}

// Data Delete Function
async function deleteItem(id) {
  const URL = `https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`;
  const res = await axios.get(URL);
  if (res.status == 200) {
    alert("Item Deleted Successfully");
    document.getElementById("itemList").innerHTML = "";
    getItemList();
  } else {
    alert(error);
  }
}

// Update Data
async function getUpdateDataId(id) {
  window.location = `update.html?id=${id}`;
}
getItemList();
