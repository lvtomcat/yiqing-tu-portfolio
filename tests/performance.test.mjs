import test from "node:test";
import assert from "node:assert/strict";
import { formatCell, renderWorkbook } from "../scripts/generate-performance.mjs";

test("Excel display formats preserve percentages, dates, zero and calculated values", () => {
  const number = (value, format) => formatCell({ kind: "number", value, format });
  assert.equal(number(0.1234, "0.00%"), "12.34%");
  assert.equal(number(45292, "yyyy-mm-dd"), "2024-01-01");
  assert.equal(number(1234.5, '"$"#,##0.00'), "$1,234.50");
  assert.equal(number(-1234, "#,##0;(#,##0)"), "(1,234)");
  assert.equal(number(0, "0.00"), "0.00");
  assert.equal(formatCell({ kind: "number", value: 30, format: "0.0", formula: true }), "30.0");
  assert.equal(formatCell({ kind: "text", value: "6.6M", format: "General" }), "6.6M");
});

test("Multiple sheets, merged cells, empty cells and text are retained in safe HTML", () => {
  const cell = (address, value, span = [1, 1]) => ({address,value,span,kind:value === null ? "blank" : "text",format:"General",style:{color:"#000000"}});
  const html = renderWorkbook({sheets:[
    {name:"One",rows:2,columns:2,widths:[100,100],data:[{height:15,cells:[cell("A1","<script>original text</script>",[1,2])]},{height:15,cells:[cell("A2",null),cell("B2","end")]}]},
    {name:"Two",rows:1,columns:1,widths:[100],data:[{height:15,cells:[cell("A1","second sheet")]}]}
  ]});
  assert.equal((html.match(/<table /g) || []).length, 2);
  assert.match(html, /colspan="2"/);
  assert.match(html, /data-cell="A2"/);
  assert.match(html, /&lt;script&gt;original text&lt;\/script&gt;/);
  assert.match(html, /second sheet/);
});
