// your JS code here. If required.
(function () {
  const changeBtn = document.getElementById("change_button");
  const resetBtn = document.getElementById("Reset");

  function clearAll() {
    const items = document.querySelectorAll(".grid-item");
    items.forEach(item => item.style.backgroundColor = "transparent");
  }

  changeBtn.addEventListener("click", function () {
    clearAll();

    const blockValue = document.getElementById("block_id").value;
    const colourValue = document.getElementById("colour_id").value.trim();

    // parseInt ensures numeric comparison and avoids empty-string issues
    const blockNum = parseInt(blockValue, 10);

    if (!blockValue || Number.isNaN(blockNum) || blockNum < 1 || blockNum > 9) {
      alert("Please enter a Block ID between 1 and 9.");
      return;
    }

    if (!colourValue) {
      alert("Please enter a colour (name or hex).");
      return;
    }

    const target = document.getElementById(String(blockNum));
    if (target) {
      // set background color — let browser validate the color string
      target.style.backgroundColor = colourValue;
    } else {
      // shouldn't happen, but safe fallback
      alert("Selected block not found.");
    }
  });

  resetBtn.addEventListener("click", function () {
    clearAll();
    // also clear inputs optionally:
    // document.getElementById("block_id").value = "";
    // document.getElementById("colour_id").value = "";
  });
})();
