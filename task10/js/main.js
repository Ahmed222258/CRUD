var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCateg = document.getElementById("productCateg");
var productDesc = document.getElementById("productDesc");
var productOld = document.getElementById("oldPrice");
var productContainer;
var btnStatue = "create";
var img1;

var productImg = document.getElementById("productImage");
console.log(productImg);

var proId;
if (localStorage.getItem("ourProducts") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("ourProducts"));
  displayProduct();
}

function addProduct() {
  var product = {
    Prodname: productName.value,
    price: productPrice.value,
    categ: productCateg.value,
    desc: productDesc.value,
    oPrice: productOld.value,

    img: `img/${productImg.files[0].name}`,
  };
  // img1 = product[proId].img;
  if (btnStatue === "create") {
    productContainer.push(product);
    localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  } else if (btnStatue === "edit") {
    productContainer[proId] = product;

    btnStatue = "create";
    document.getElementById("addId").textContent = "Add Product";
  }

  displayProduct();
  emptyInput();
}

function displayProduct() {
  var cartoona = "";
  for (var i = 0; i < productContainer.length; i++) {
    cartoona += `
            <div class="col-sm-6 col-md-6 col-lg-3 mt-5">
            <div class="c">
              <div class="Cimage">

                <img   src="${productContainer[i].img}"  />
              </div>
              <div class="CText textallign">
                <h2 class="heading">${productContainer[i].Prodname}</h2>
                 <h5 class="categ">${productContainer[i].categ}</h5>
                 <del class="delete">${productContainer[i].oPrice}</del>
                    <span class="price">${productContainer[i].price}</span>
                <p class="prag">${productContainer[i].desc}</p>

                <button class="btn btn-danger " onclick="deleteRow(${i})" >
                  Delete
              </button>
              <button class="btn btn-warning " onclick="update(${i})" >
                  update
              </button>

              </div>

            </div>
          </div>

        `;

    document.getElementById("r").innerHTML = cartoona;
  }
}

function emptyInput() {
  productImage.value = null;
  productName.value = null;
  productPrice.value = null;
  productCateg.value = null;
  productDesc.value = null;
}

function deleteAll() {
  productContainer.splice(0);
  // productContainer = [];

  localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  displayProduct();
}

function deleteRow(i) {
  productContainer.splice(i, 1);
  localStorage.setItem("ourProducts", JSON.stringify(productContainer));
  displayProduct();
}

function update(i) {
  document.getElementById("addId").textContent = "Update Product";

  document.getElementById("productName").value = productContainer[i].Prodname;
  document.getElementById("productPrice").value = productContainer[i].price;

  document.getElementById("productCateg").value = productContainer[i].categ;
  document.getElementById("productDesc").value = productContainer[i].desc;
  document.getElementById("oldPrice").value = productContainer[i].oPrice;

  document.getElementById("productImage").value = img1;

  // console.log(productContainer[i].img);

  btnStatue = "edit";
  proId = i;
}
