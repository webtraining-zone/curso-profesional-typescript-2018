import * as d3 from 'd3';

class App {
    data = [150, 230, 180, 90];
    selector = "#container"

    render() {
        const svg = d3.select(this.selector)
            .append("svg")
            .attr("width", 300)
            .attr("height", 200);

        svg.selectAll(".bar")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("width", function (d) {
                return d;
            })
            .attr("height", "40")
            .attr("y", function (d, i) {
                return i * 50 + 10;
            })
            .attr("x", "10");
    }
}

new App().render();