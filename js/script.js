document.getElementById("btn").addEventListener("click", fillTable);
let arr = []

function checkData(d1, d2, d3, d4) {
    if (!/^[a-zA-Z]+$/.test(d1) || d1 == "") {
        alert("This Is Invalid data");
        return false
    }
    else if (!/^[1-9]\d*$/.test(d2) || d2 == "") {
        alert("This Is Invalid data");
        return false;
    }
    else if (d3.type != "file") {
        alert("you didn't make a choice");
        return false;
    }

    if (!d4) {
        alert("you didn't select which catagory")
        return false;
    }
    else {
        return true;
    }
}

function addProduct() {
    var product = document.getElementById("name");
    var price = document.getElementById("price");
    var select = document.getElementById("select1");
    var image = document.getElementById("img");
    var mytable=document.getElementById("mytable");


    var check =  checkData(product.value, price.value, select.value, image.value);

    if (!check) {
        alert("You didn't enter the data correctly!!");
    }
    else{
        fillTable(product.value, Number.parseInt(grade.value), select.value, image.value);

    let obj = {
        Troduct: product.value,
        tprice: price.value,
        tselect: select.value,
        image: img.value
    }

    arr.push(obj);/////i guess here is a promlem with storing

    localStorage.setItem("data", JSON.stringify(arr));

    }
    product.value="";
    price.value="";
    select.value=""
    image.value=""

}

function fillTable(){
 
//usser input
  


//table 


//creating HTML elements to the table part
let tr=document.createElement("tr");
let tdName=document.createElement("td");
let tdPrice=document.createElement("td");
let tdSelect=document.createElement("td");
let tdImage=document.createElement("td");
let labelProduct=document.createElement("label");
let labelPrice=document.createElement("label");
let imgInput=document.createElement("img");
let selectInput=document.createElement("select");
let optionInput=document.createElement('option');


selectInput.setAttribute('multiple','');
selectInput.appendChild(optionInput);

// now its time to give values to variebles

labelProduct.textContent=name_product.value;
labelPrice.textContent=price_p.value;
img_p.src=img.value;



tdName.appendChild(labelProduct);
tdPrice.appendChild(labelPrice);
tdImage.appendChild(imgInput);
tdSelect.appendChild(selectInput);

tr.appendChild(tdName);
tr.appendChild(tdPrice);
tr.appendChild(tdImage);
tr.appendChild(tdSelect);

mytable.appendChild(tr);




}