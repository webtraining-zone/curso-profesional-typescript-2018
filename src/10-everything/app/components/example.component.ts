import * as d3 from "d3";
import {DataItem} from "../data/data-item.model";

import {DSVRowString} from "d3-dsv";

export class ExampleComponent {
    data: Array<number> = [];
    selector = "#svg-container";
    selectorSVG = '#svg-parent';

    renderMinimalBars() {
        this.data = [150, 230, 180, 90];

        const svg = d3.select(this.selector)
            .append("svg")
            .attr("width", 300)
            .attr("height", 200);

        svg.selectAll(".bar")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("class", "b-item")
            .attr("width", function (d) {
                return d;
            })
            .attr("height", "40")
            .attr("y", function (d, i) {
                return i * 50 + 10;
            })
            .attr("x", "10");
    }

    // https://bl.ocks.org/alanvillalobos/14e9f0d80ea6b0d8083ba95a9d571d13
    renderComplexBars() {
        // SETUP
        let svg = d3.select(this.selectorSVG),
            margin = {top: 20, right: 20, bottom: 30, left: 40},
            x = d3.scaleBand().padding(0.1),
            y = d3.scaleLinear();

        let backupData: any;

        let g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        g.append("g")
            .attr("class", "axis axis--x");

        g.append("g")
            .attr("class", "axis axis--y");

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");

        // DRAWING

        function draw(data: any) {

            const node = svg.node() as Element;
            let bounds = node.getBoundingClientRect(),
                width = bounds.width - margin.left - margin.right,
                height = bounds.height - margin.top - margin.bottom;

            console.warn(width, height);
            x.rangeRound([0, width]);
            y.rangeRound([height, 0]);

            g.select(".axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            g.select(".axis--y")
                .call(d3.axisLeft(y).ticks(10, "%"));

            let bars = g.selectAll(".bar")
                .data(data);

            // ENTER
            bars
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d: DataItem) {
                    return x(d.letter);
                })
                .attr("y", function (d: DataItem) {
                    return y(d.frequency);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d: DataItem) {
                    return height - y(d.frequency);
                });

            // UPDATE
            bars.attr("x", function (d: DataItem) {
                return x(d.letter);
            })
                .attr("y", function (d: DataItem) {
                    return y(d.frequency);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d: DataItem) {
                    return height - y(d.frequency);
                });

            // EXIT
            bars.exit()
                .remove();

        }

        // LOADING DATA
        // http://learnjsdata.com/read_data.html
        function loadData(tsvFile: string) {

            d3.tsv(tsvFile, null, function (d: DSVRowString) {

                let dataItem: DataItem;
                // Parsing: https://github.com/tomwanzek/d3-v4-definitelytyped/blob/master/tests/d3-dsv/d3-dsv-test.ts#L60
                dataItem = {
                    frequency: +d['frequency'],
                    letter: d['letter']
                };
                return dataItem;
            }).then((data) => {

                backupData = data;

                x.domain(data.map(function (d: DataItem) {
                    return d.letter;
                }));

                y.domain([0, d3.max(data, function (d: DataItem) {
                    return d.frequency;
                })]);

                draw(data);

            }).catch(error => {
                throw error;
            });
        }

        // START!
        window.addEventListener("resize", function () {
            draw(backupData);
        });

        loadData("/app/data/data-items-sample.tsv");
    }

}