//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {

            let block = document.getElementById("block_id").value;
            let color = document.getElementById("colour_id").value;

            let items = document.querySelectorAll(".grid-item");
            items.forEach(item => item.style.backgroundColor = "transparent");

            if (block >= 1 && block <= 9) {
                document.getElementById(block).style.backgroundColor = color;
            } else {
                alert("Please enter a block ID from 1 to 9");
            }
        });

 document.getElementById("Reset").addEventListener("click", function() {
            let items = document.querySelectorAll(".grid-item");
            items.forEach(item => item.style.backgroundColor = "transparent");
        });