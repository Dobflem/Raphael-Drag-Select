window.onload = function() {
    var paper = new Raphael("canvas", "100%", "100%");

    var options = {
        "stroke-dasharray": "100 20 0 20",
        "stroke": "#F00"
    };

    paper.dragSelect(function(set) {
        for(var i = 0; i < set.items.length; i++) {
            console.log("set["+i+"] - " + set.items[i].type);
        }
    }, options);

    paper.rect(10, 10, 10, 10);
}
