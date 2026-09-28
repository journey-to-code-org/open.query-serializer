import test from "node:test";
import assert from "node:assert/strict";
import { stringifyQuery, parseQuery } from "../src/index.js";
test("serializes objects",()=>assert.equal(stringifyQuery({q:"hello world",page:2}),"q=hello+world&page=2"));
test("serializes repeated arrays",()=>assert.equal(stringifyQuery({tag:["a","b"]}),"tag=a&tag=b"));
test("parses repeated keys",()=>assert.deepEqual(parseQuery("?tag=a&tag=b"),{tag:["a","b"]}));
test("supports comma arrays",()=>assert.deepEqual(parseQuery("tag=a%2Cb",{arrayFormat:"comma"}),{tag:["a","b"]}));
