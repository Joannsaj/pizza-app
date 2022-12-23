$(document).ready(function () {
    function Pizza(name,size) {
        this.name = name;
        this.size = size;
    }

    Pizza.prototype.getPizzaPrice = function () {
        return this.getSizePrice() + this.getPizzaName();
    };

    Pizza.prototype.getPizzaName = function () {
        if (this.name == "small-italian"||this.size == "medium-italian"||this.size == "large-italian") {
           return "Italian Pizza";
        }
        else if (this.size == "small-greek"||this.size == "medium-greek"||this.size == "large-greek") {
           return "Greek Pizza";
        }
        else if (this.size == "small-cheese"||this.size == "medium-greek"||this.size == "large-greek") {
            return "Cheesy Cheese Pizza";
        }
        else if (this.size == "small-american"||this.size == "medium-american"||this.size == "large-american") {
            return "American Pizza";
        }
        else if (this.size == "small-pie"||this.size == "medium-pie"||this.size == "large-pie") {
            return "Tomato Pie";
        }
        else if (this.size == "small-magherita"||this.size == "medium-magherita"||this.size == "magherita") {
            return "Magherita Pizza";
        }
        else if (this.size == "small-overload"||this.size == "medium-overload"||this.size == "large-overload") {
            return "Ultimate Overload Pizza";
        }
        else if (this.size == "small-pepperoni"||this.size == "medium-pepperoni"||this.size == "large-pepperoni") {
            return "Pepperoni Pizza";
        }
        else if (this.size == "small-hawaiian"||this.size == "medium-hawaiian"||this.size == "large-hawaiian") {
            return "Hawaiian Pizza";
        }
       
        
    };
    Pizza.prototype.getSizePrice = function () {
        if (this.size == "small-italian"||this.size == "small-greek"||this.size == "small-cheese"||this.size == "small-american"||this.size == "small-pie"||this.size == "small-magherita"||this.size == "small-overload"||this.size == "small-pepperoni"||this.size == "small-hawaiian") {
           return 15000;
        }
        else if (this.size == "medium-italian"||this.size == "medium-greek"||this.size == "medium-cheese"||this.size == "medium-american"||this.size == "medium-pie"||this.size == "medium-magherita"||this.size == "medium-overload"||this.size == "medium-pepperoni"||this.size == "medium-hawaiian") {
           return 20000;
        }
        else if(this.size == "large-italian"||this.size == "large-greek"||this.size == "large-cheese"||this.size == "large-american"||this.size == "large-pie"||this.size == "large-magherita"||this.size == "large-overload"||this.size == "large-pepperoni"||this.size == "large-hawaiian") {
           return 25000;
        }
        
    };
    var totalCost = 0;
    var pizzasOrdered = [];
    $("#pizza-form").submit(function (event) {
        event.preventDefault();
        var sizeSelected = $(this).find(".size").val();
        var nameSelected = $(this).find("#order").innerHTML;
        var newPizza = new Pizza(nameSelected, sizeSelected);
        
        pizzasOrdered.push(newPizza);

        totalCost = 0;

        for (let i = 0; i < pizzasOrdered.length; i++) {
            totalCost += pizzasOrdered[i].getPizzaPrice();
        }
        $("#order-summary").append(
            "<tr>" +
            "<td>" +
            newPizza.name +
            " - " +
            newPizza.getPizzaName() +
            "</td>" +
            "<td>" +
            newPizza.getPizzaPrice() +
            "</td>" +
            "</tr>"
        );
        console.log(totalCost);
        alert("Your order for a" + " " + newPizza.name + "" + " "+ "Your bill is UGX" + " " + totalCost);
        $(".deliver").show();
    });
    $("#continue").click(function () {
        $(".hide").show();
    });
    $(".address").submit(function (event) {
        event.preventDefault();
        var name = $("#new-name").val();
        var street = $(".new-street").val();
        var city = $(".new-city").val();
        var phone = $("#phone").val();
        $("#new-name").val();
        $(".new-street").val();
        $(".new-city").val();
        $("#phone").val();
        totalCost += 10000;
        alert(name + ": Your total bill is UGX. " + totalCost + ". Your order will be delivered to " + city + ", " + street + " in the next 2 hours" + " " + "We shall call you on" + " " + phone + " " + "to confirm our arrival.");
    });
});