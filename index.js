
    document.getElementById("go").addEventListener('click', calculateAmount);

    function calculateAmount(e) {
      e.preventDefault();

      let monthlyAmount = parseInt(document.getElementById("amount").value);
      let days = parseInt(document.getElementById("days").value);

      if (isNaN(monthlyAmount) || isNaN(days)) {
        document.getElementById("output").innerHTML = "⚠️ Please enter valid numbers.";
        return;
      }

      let finalValue = (monthlyAmount / 22) * days;
      document.getElementById("output").innerHTML = "💰 Estimated Cost: R " + finalValue.toFixed(2);
    }