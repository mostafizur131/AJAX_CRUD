// Create Data
async function createData() {
  let ProductName = document.getElementById("ProductName").value;
  let ProductCode = document.getElementById("ProductCode").value;
  let ProductImg = document.getElementById("ProductImg").value;
  let UnitPrice = document.getElementById("UnitPrice").value;
  let ProductQty = document.getElementById("ProductQty").value;
  let ProductTotal = document.getElementById("ProductTotal").value;

  let URL = `https://crud.teamrabbil.com/api/v1/CreateProduct/`;

  document.getElementById("loader").classList.remove("d-none");

  let res = await axios.post(URL, {
    Img: ProductImg,
    ProductCode: ProductCode,
    ProductName: ProductName,
    Qty: ProductQty,
    TotalPrice: ProductTotal,
    UnitPrice: UnitPrice,
  });

  document.getElementById("loader").classList.add("d-none");

  if (res.status === 200) {
    window.location = "index.html";
  } else {
    alert("error");
  }
}
