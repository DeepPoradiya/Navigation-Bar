
// Fetch the JSON data
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {

    var result = data.result;
    var productContainer = document.getElementById("productContainer");
    
    function updateCountAndRender(status, elementId) {
      var countDisplay = document.getElementById(elementId);
      var filteredProducts=result;
      if (status !== "result") {
        filteredProducts = result.filter(function (product) {
          return product.status === status;
        });
      }
      countDisplay.innerHTML = `${status} Status: ${filteredProducts.length}`;
      countDisplay.addEventListener("click", function () {
        return renderProductCards(filteredProducts);
      });
    }

    
    function renderProductCards(products) {
      productContainer.innerHTML = "";
    products.forEach(function (product) {
        var ratestar="";
        var fillstar=product.property_reviews;
        var empstar=5 - fillstar;
    
        for(var i=0;i<fillstar;i++ )
        {
            ratestar+='<i class="fa-solid fa-star" style="color: orange;"></i>';
    
        }
        for(var i=0;i < empstar;i++ )
        {
            ratestar+='<i class="fa-regular fa-star" style="color: #808080;"></i>';
      
        }
        var date = new Date(product.createdAt);
        var card = document.createElement("div");
        card.innerHTML= `<div class="product-card">
        <div class="img">
        <img class="dis_image" src="${product.image[0]}">
        </div>
        <div class="dis">
        <div class="title_price">
          <div class="title">${product.title}</div>
          <div>
          <span class="price">${product.price.map((x)=>x.number)}$</span></div>
        </div>
        <div class="location">${product.location}</div>
        <div class="time_rate">
          <div class="time">${date.toDateString()}</div>
          <div class="rate">${ratestar}</div>
        </div>
        </div>
      </div>  ` 

      productContainer.appendChild(card);
    });
  }
  updateCountAndRender("result", "defaults")
  updateCountAndRender("approved", "approved");
  updateCountAndRender("pending", "good_reviews");
  updateCountAndRender("decline", "bad_reviews");
  renderProductCards(result);
  })
  .catch((error) => console.log(error));

 
  