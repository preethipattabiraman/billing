$(document).on('click', '.add', function(e) {
	addRow();
});

$(document).on('click', '.remove', (e) => {
    removeRow(e.target);
});

$(document).on('click', '.individualCost', (e) => {
    calculateCost(e.target);
});

$(document).on('click', '#generateBill', (e) => {
    displayBill();
});

$(document).on('click', '#payAmount', (e) => {
    generateBill();
});

//Methods
addRow = () => {
    let tbody = $("#table tbody");
    let newRow = tbody.append($("#table .row:last").clone());
    $("#table .row:last").find("input").val("");        //Reset the new last row
}

removeRow = (e) => {
    let numberOfRows = $("#table .row").length;
    if(numberOfRows > 1) {
        $(e).closest('tr').remove();
    }
    else {
        window.alert("There should be at least one item!");
    }
}

calculateCost = (e) => {
    let quantity = $(e).parent().siblings().find('.quantity').val();
    let rate = $(e).parent().siblings().find('.rate').val();
    $(e).val(quantity * rate);
}

displayBill = () => {
    $(".taxes").css({'display': 'block'});
}

generateBill = () => {
    let tax = parseInt($(".tax").val());
    let totalCost = 0;
    let costs = $("input.individualCost");
    for(let i = 0; i < costs.length; i++) {
        totalCost += parseInt(costs[i].value);
    }
    $("#payAmount").val(totalCost + (totalCost * tax/100));
}