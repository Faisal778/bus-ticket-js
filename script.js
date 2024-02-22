console.log("script.js connected");

const seatBtn = document.getElementsByClassName("seat-btn");

let seatCounter = 0;
for (const btn of seatBtn) {
  btn.addEventListener("click", function (event) {
    const seatName = event.target.innerText;
    let price = document.getElementById("price").innerText;
    price = parseInt(price);

    event.target.setAttribute("disabled", true);
    seatCounter = seatCounter + 1;
    if (seatCounter > 4) {
      alert("You have reached maximum seat limit");
    } else {
      document.getElementById("seat-count").innerText = seatCounter;
      document.getElementById("seat-remaining").innerText = 40 - seatCounter;

      event.target.style.backgroundColor = "#1DD100";
      event.target.style.color = "white";

      console.log(seatName, price);

      const appendDiv = document.getElementById("total-price");
      const div = document.createElement("div");
      div.classList.add("flex");
      div.classList.add("justify-between");
      div.classList.add("p-4");

      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");

      const economy = "Economy";
      p1.innerText = seatName;
      p2.innerText = economy;
      p3.innerText = price;

      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);

      appendDiv.appendChild(div);

      //calculate total //

      const previousSum = document.getElementById("total-sum").innerText;
      const intSum = parseInt(previousSum);
      const sum = intSum + price;
      document.getElementById("total-sum").innerText = sum;

      //update grand total with no coupon//
      document.getElementById("grand-total").innerText = sum;
    }
  });
}

function updateGrandtotal(id) {
  const totalSum = document.getElementById("total-sum").innerText;
  const intSum = parseInt(totalSum);
  const couponCode = document.getElementById("coupon-btn").value;
  let grandTotal = document.getElementById("grand-total");
  if (couponCode === "NEW15") {
    document.getElementById("coupon").style.display = "none";

    const discount = document.getElementById("discount");

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    div.appendChild(p1);
    div.appendChild(p2);
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("p-4");

    p1.innerText = "Discount";
    p2.innerText = intSum * 0.15;

    discount.appendChild(div);

    grandTotal = intSum - intSum * 0.15;
    console.log(grandTotal);
    document.getElementById("grand-total").innerText = grandTotal;
  } else if (couponCode === "Couple 20") {
    document.getElementById("coupon").style.display = "none";

    const discount = document.getElementById("discount");

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    div.appendChild(p1);
    div.appendChild(p2);
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.classList.add("p-4");

    p1.innerText = "Discount";
    p2.innerText = intSum * 0.2;

    discount.appendChild(div);

    grandTotal = intSum - intSum * 0.2;

    document.getElementById("grand-total").innerText = grandTotal;
  } else {
    alert("Please Enter a valid coupon");
  }
}
