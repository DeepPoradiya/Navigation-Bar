
// Fetch the JSON data
fetch("product.json")
  .then((response) => response.json())
  .then((data) => {

    var result = data.result;
    var productContainer = document.getElementById("productContainer");
  
    var countDisplay = document.getElementById("all_cards");
    var approve = result.filter(function (product) {
      return product.status === "approved";
    });
    countDisplay.innerHTML = `Approve Status: ${approve.length}`;
    countDisplay.addEventListener("click", function () {
      renderProductCards(approve);
    });

    // Only Show Reviews
    var clickReviews = document.getElementById("good_reviews");
    var emptyReviews = result.filter(function (product) {
      return product.status === "pending";
    });
    clickReviews.innerHTML = `Pending status: ${emptyReviews.length}`;
    clickReviews.addEventListener("click", function () {
      renderProductCards(emptyReviews);
    });
    // Only Show NoReviews
    var clickShowBadReview = document.getElementById("bad_reviews");
    var badReviews = result.filter(function (product) {
      return product.status === "decline";
    });
    clickShowBadReview.innerHTML = `Declinne status: ${badReviews.length}`;

    clickShowBadReview.addEventListener("click", function () {
      var noReviews = result.filter(function (product) {
        return product.status === "decline";
      });
      renderProductCards(noReviews);
    });

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
  renderProductCards(result);
  })
  .catch((error) => console.log(error));

 
  