goog.provide('nex.parser');
var module$node_modules$antlr4$dist$antlr4_web_cjs=shadow.js.require("module$node_modules$antlr4$dist$antlr4_web_cjs", {});
nex.parser.js_undefined_QMARK_ = (function nex$parser$js_undefined_QMARK_(v){
return (undefined === v);
});
nex.parser.resolve_module = (function nex$parser$resolve_module(m,name){
if((((m == null)) || (nex.parser.js_undefined_QMARK_(m)))){
throw (new Error((""+"Parser module missing: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+". Rebuild browser bundle and hard-refresh.")));
} else {
if((((!(nex.parser.js_undefined_QMARK_(m.default)))) && ((!((m.default == null)))))){
return m.default;
} else {
return m;

}
}
});
nex.parser.try_shadow_require = (function nex$parser$try_shadow_require(module_id){
try{var shadow_js = shadow.js;
if((((!((shadow_js == null)))) && ((!(nex.parser.js_undefined_QMARK_(shadow_js)))))){
return shadow_js.require(module_id,({}));
} else {
return null;
}
}catch (e6048){var _ = e6048;
return null;
}});
nex.parser.parse_tree__GT_sexpr = (function nex$parser$parse_tree__GT_sexpr(parser,node){
if((((node == null)) || (nex.parser.js_undefined_QMARK_(node)))){
return null;
} else {
if((((!((node.ruleIndex == null)))) && ((!(nex.parser.js_undefined_QMARK_(node.ruleIndex)))))){
var rule_name = (parser.ruleNames[node.ruleIndex]);
var child_count = node.getChildCount();
var children = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var G__6058 = parser;
var G__6059 = node.getChild(i);
return (nex.parser.parse_tree__GT_sexpr.cljs$core$IFn$_invoke$arity$2 ? nex.parser.parse_tree__GT_sexpr.cljs$core$IFn$_invoke$arity$2(G__6058,G__6059) : nex.parser.parse_tree__GT_sexpr.call(null,G__6058,G__6059));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(child_count))));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(rule_name)], null),children);
} else {
return node.getText();

}
}
});
nex.parser.parse = (function nex$parser$parse(input){
var antlr = nex.parser.resolve_module(module$node_modules$antlr4$dist$antlr4_web_cjs,"antlr4");
var lexer_mod = (function (){var or__5142__auto__ = module$nex$parser_js$grammar$nexlangLexer;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = window.__nexlangLexer;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((function (){var or__5142__auto____$2 = $CLJS;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return ({});
}
})()["module$nex$parser_js$grammar$nexlangLexer"]);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = ((function (){var or__5142__auto____$3 = $CLJS;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return ({});
}
})()["module$nex$parser_js$grammar$nexlangLexer.js"]);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = nex.parser.try_shadow_require("module$nex$parser_js$grammar$nexlangLexer");
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return nex.parser.try_shadow_require("module$nex$parser_js$grammar$nexlangLexer.js");
}
}
}
}
}
})();
var parser_mod = (function (){var or__5142__auto__ = module$nex$parser_js$grammar$nexlangParser;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = window.__nexlangParser;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((function (){var or__5142__auto____$2 = $CLJS;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return ({});
}
})()["module$nex$parser_js$grammar$nexlangParser"]);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = ((function (){var or__5142__auto____$3 = $CLJS;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return ({});
}
})()["module$nex$parser_js$grammar$nexlangParser.js"]);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = nex.parser.try_shadow_require("module$nex$parser_js$grammar$nexlangParser");
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return nex.parser.try_shadow_require("module$nex$parser_js$grammar$nexlangParser.js");
}
}
}
}
}
})();
var lexer_ctor = nex.parser.resolve_module(lexer_mod,"nexlangLexer");
var parser_ctor = nex.parser.resolve_module(parser_mod,"nexlangParser");
var chars = antlr.CharStreams.fromString(input);
var lexer = (new lexer_ctor(chars));
var tokens = (new antlr.CommonTokenStream(lexer));
var parser = (new parser_ctor(tokens));
var parse_tree = parser.program();
return nex.parser.parse_tree__GT_sexpr(parser,parse_tree);
});
nex.parser.ast = (function nex$parser$ast(input){
return nex.walker.walk_node(nex.parser.parse(input));
});

//# sourceMappingURL=nex.parser.js.map
