// markets table search for assets
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// faq accordion
var openCloseTab = document.getElementsByClassName("accordion-item__header");
var openCloseIcon = document.getElementsByClassName("open-close-icon");

for (var i = 0; i < openCloseTab.length; i++) {
  openCloseTab[i].addEventListener("click", function() {
    var textBlock = this.nextElementSibling;

    if (textBlock.style.maxHeight) {
      textBlock.style.maxHeight = null;
      this.style.backgroundColor = "#404040";
      this.firstElementChild.classList.remove("open");
    } else {
      this.style.backgroundColor = "#000000";
      textBlock.style.maxHeight = textBlock.scrollHeight + "px";
      this.firstElementChild.classList.add("open");
    }
  });
}
