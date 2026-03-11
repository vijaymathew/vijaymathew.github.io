goog.provide('nex.walker');
/**
 * Extract text from a token node (strings pass through).
 */
nex.walker.token_text = (function nex$walker$token_text(node){
if(typeof node === 'string'){
return node;
} else {
return null;
}
});
/**
 * Walk all children of a node, skipping the node type tag.
 */
nex.walker.walk_children = (function nex$walker$walk_children(node){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.rest(node));
});
/**
 * Extract clj-antlr position metadata from a parse node.
 */
nex.walker.node_pos = (function nex$walker$node_pos(node){
var or__5142__auto__ = new cljs.core.Keyword("clj-antlr","position","clj-antlr/position",-361347529).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword("clj-antlr","position","clj-antlr/position",-361347529).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(node));
}
});
/**
 * Attach 1-based debug line/column metadata to AST maps.
 */
nex.walker.attach_debug_pos = (function nex$walker$attach_debug_pos(ast_node,parse_node){
if(((cljs.core.map_QMARK_(ast_node)) && (cljs.core.contains_QMARK_(ast_node,new cljs.core.Keyword(null,"type","type",1174270348))))){
var temp__5821__auto__ = nex.walker.node_pos(parse_node);
if(cljs.core.truth_(temp__5821__auto__)){
var map__6047 = temp__5821__auto__;
var map__6047__$1 = cljs.core.__destructure_map(map__6047);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6047__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6047__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__6051 = ast_node;
var G__6051__$1 = ((cljs.core.integer_QMARK_(row))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6051,new cljs.core.Keyword("dbg","line","dbg/line",212442094),(row + (1))):G__6051);
if(cljs.core.integer_QMARK_(column)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6051__$1,new cljs.core.Keyword("dbg","col","dbg/col",-1960246789),(column + (1)));
} else {
return G__6051__$1;
}
} else {
return ast_node;
}
} else {
return ast_node;
}
});
/**
 * Creates a handler for binary operators that handles operator precedence.
 * For nodes with fixed operators (like 'and', 'or'), pass the operator string.
 * For nodes with variable operators, pass nil.
 */
nex.walker.make_binary_op_handler = (function nex$walker$make_binary_op_handler(fixed_operator){
return (function (p__6061){
var vec__6062 = p__6061;
var seq__6063 = cljs.core.seq(vec__6062);
var first__6064 = cljs.core.first(seq__6063);
var seq__6063__$1 = cljs.core.next(seq__6063);
var _ = first__6064;
var first__6064__$1 = cljs.core.first(seq__6063__$1);
var seq__6063__$2 = cljs.core.next(seq__6063__$1);
var left = first__6064__$1;
var rest = seq__6063__$2;
if(cljs.core.empty_QMARK_(rest)){
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(left) : nex.walker.transform_node.call(null,left));
} else {
if(cljs.core.truth_(fixed_operator)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,operand){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),fixed_operator,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(operand) : nex.walker.transform_node.call(null,operand))], null);
}),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(left) : nex.walker.transform_node.call(null,left)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,rest));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6068){
var vec__6070 = p__6068;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,(0),null);
var operand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6070,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),op,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(operand) : nex.walker.transform_node.call(null,operand))], null);
}),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(left) : nex.walker.transform_node.call(null,left)),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest));
}
}
});
});
/**
 * Creates a handler that wraps children in a typed map.
 */
nex.walker.make_simple_container_handler = (function nex$walker$make_simple_container_handler(type_keyword,children_key){
return (function (p__6076){
var vec__6077 = p__6076;
var seq__6078 = cljs.core.seq(vec__6077);
var first__6079 = cljs.core.first(seq__6078);
var seq__6078__$1 = cljs.core.next(seq__6078);
var _ = first__6079;
var children = seq__6078__$1;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([type_keyword,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,children)]);
});
});
nex.walker.special_char_codes = new cljs.core.PersistentArrayMap(null, 5, ["nul","\u0000","space"," ","newline","\n","return","\r","tab","\t"], null);
nex.walker.maybe_transform_special_char = (function nex$walker$maybe_transform_special_char(v){
if(((typeof v === 'string') && ((cljs.core.count(v) > (1))))){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.walker.special_char_codes,v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
} else {
return v;
}
});
nex.walker.next_fn_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
nex.walker.generate_unique_fn_name = (function nex$walker$generate_unique_fn_name(){
return (""+"AnonymousFunction_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nex.walker.next_fn_id,cljs.core.inc)));
});
nex.walker.node_handlers = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"importStmt","importStmt",-122761632),new cljs.core.Keyword(null,"createExpression","createExpression",-1711994944),new cljs.core.Keyword(null,"primaryExpr","primaryExpr",1863986241),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"paramList","paramList",1920214497),new cljs.core.Keyword(null,"inheritClause","inheritClause",-1388742943),new cljs.core.Keyword(null,"comparison","comparison",-986182462),new cljs.core.Keyword(null,"featureMember","featureMember",-1708608318),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"acrossStatement","acrossStatement",1577312994),new cljs.core.Keyword(null,"equality","equality",-484089949),new cljs.core.Keyword(null,"callSuffix","callSuffix",-622708668),new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"constructorDecl","constructorDecl",-54061468),new cljs.core.Keyword(null,"methodDecl","methodDecl",529183941),new cljs.core.Keyword(null,"realLiteral","realLiteral",1243957093),new cljs.core.Keyword(null,"memberAccess","memberAccess",150842502),new cljs.core.Keyword(null,"loopStatement","loopStatement",-872577882),new cljs.core.Keyword(null,"unaryMinus","unaryMinus",289221990),new cljs.core.Keyword(null,"rescueClause","rescueClause",600913254),new cljs.core.Keyword(null,"selectStatement","selectStatement",-2102995258),new cljs.core.Keyword(null,"logicalAnd","logicalAnd",-1041453082),new cljs.core.Keyword(null,"fieldDecl","fieldDecl",174515719),new cljs.core.Keyword(null,"selectClause","selectClause",-263311481),new cljs.core.Keyword(null,"timeoutClause","timeoutClause",23455655),new cljs.core.Keyword(null,"addition","addition",1756544008),new cljs.core.Keyword(null,"charLiteral","charLiteral",884993224),new cljs.core.Keyword(null,"repeatStatement","repeatStatement",-809819384),new cljs.core.Keyword(null,"noteClause","noteClause",1731029065),new cljs.core.Keyword(null,"ifStatement","ifStatement",-652394711),new cljs.core.Keyword(null,"genericArgs","genericArgs",-1550176950),new cljs.core.Keyword(null,"logicalOr","logicalOr",-1086835094),new cljs.core.Keyword(null,"variantClause","variantClause",717349707),new cljs.core.Keyword(null,"featureSection","featureSection",1576720331),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"booleanLiteral","booleanLiteral",-1526934100),new cljs.core.Keyword(null,"invariantClause","invariantClause",-340965908),new cljs.core.Keyword(null,"nilLiteral","nilLiteral",1962744524),new cljs.core.Keyword(null,"unaryNot","unaryNot",1495679693),new cljs.core.Keyword(null,"localVarDecl","localVarDecl",-74877682),new cljs.core.Keyword(null,"arrayLiteral","arrayLiteral",-73048658),new cljs.core.Keyword(null,"postfix","postfix",-571724593),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"withStatement","withStatement",-618505745),new cljs.core.Keyword(null,"requireClause","requireClause",586790511),new cljs.core.Keyword(null,"convertExpression","convertExpression",1131298511),new cljs.core.Keyword(null,"mapLiteral","mapLiteral",-869198065),new cljs.core.Keyword(null,"methodCall","methodCall",686772144),new cljs.core.Keyword(null,"subscript","subscript",-1484665872),new cljs.core.Keyword(null,"visibilityModifier","visibilityModifier",476641264),new cljs.core.Keyword(null,"mapEntry","mapEntry",920267986),new cljs.core.Keyword(null,"postfixPart","postfixPart",-1948456558),new cljs.core.Keyword(null,"genericParam","genericParam",-1005589710),new cljs.core.Keyword(null,"functionDecl","functionDecl",162173395),new cljs.core.Keyword(null,"caseStatement","caseStatement",-1210754445),new cljs.core.Keyword(null,"multiplication","multiplication",1090197524),new cljs.core.Keyword(null,"classDecl","classDecl",-295119787),new cljs.core.Keyword(null,"argumentList","argumentList",1845382549),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"retryStatement","retryStatement",-1718868778),new cljs.core.Keyword(null,"genericParams","genericParams",-1575471754),new cljs.core.Keyword(null,"typeArgs","typeArgs",2045861622),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"genericArg","genericArg",-1445056392),new cljs.core.Keyword(null,"unary","unary",-989314568),new cljs.core.Keyword(null,"inheritEntry","inheritEntry",1587500888),new cljs.core.Keyword(null,"caseClause","caseClause",650225817),new cljs.core.Keyword(null,"spawnExpression","spawnExpression",-323972743),new cljs.core.Keyword(null,"setLiteral","setLiteral",1114918938),new cljs.core.Keyword(null,"oldExpression","oldExpression",778636442),new cljs.core.Keyword(null,"integerLiteral","integerLiteral",1324747962),new cljs.core.Keyword(null,"scopedBlock","scopedBlock",-2093493958),new cljs.core.Keyword(null,"raiseStatement","raiseStatement",524671355),new cljs.core.Keyword(null,"callChain","callChain",952258971),new cljs.core.Keyword(null,"internStmt","internStmt",277095099),new cljs.core.Keyword(null,"whenExpression","whenExpression",1993649436),new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"ensureClause","ensureClause",1776907998),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"postfixExpr","postfixExpr",594427999),new cljs.core.Keyword(null,"constructorSection","constructorSection",29480447),new cljs.core.Keyword(null,"anonymousFunction","anonymousFunction",-1280336929)],[(function (p__6214){
var vec__6216 = p__6214;
var seq__6217 = cljs.core.seq(vec__6216);
var first__6218 = cljs.core.first(seq__6217);
var seq__6217__$1 = cljs.core.next(seq__6217);
var _ = first__6218;
var first__6218__$1 = cljs.core.first(seq__6217__$1);
var seq__6217__$2 = cljs.core.next(seq__6217__$1);
var _import_kw = first__6218__$1;
var tokens = seq__6217__$2;
var has_from_QMARK_ = cljs.core.some((function (p1__6095_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("from",p1__6095_SHARP_);
}),tokens);
var main_parts = (cljs.core.truth_(has_from_QMARK_)?cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__6099_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("from",p1__6099_SHARP_);
}),tokens):tokens);
var source = (cljs.core.truth_(has_from_QMARK_)?cljs.core.last(tokens):null);
var name_parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6100_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",p1__6100_SHARP_);
}),main_parts);
var qualified_name = (cljs.core.truth_(has_from_QMARK_)?cljs.core.first(name_parts):clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",name_parts));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846),qualified_name,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
}),(function (p__6219){
var vec__6220 = p__6219;
var seq__6221 = cljs.core.seq(vec__6220);
var first__6222 = cljs.core.first(seq__6221);
var seq__6221__$1 = cljs.core.next(seq__6221);
var _ = first__6222;
var first__6222__$1 = cljs.core.first(seq__6221__$1);
var seq__6221__$2 = cljs.core.next(seq__6221__$1);
var _create_kw = first__6222__$1;
var first__6222__$2 = cljs.core.first(seq__6221__$2);
var seq__6221__$3 = cljs.core.next(seq__6221__$2);
var class_name = first__6222__$2;
var rest = seq__6221__$3;
var generic_args_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6210_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6210_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"genericArgs","genericArgs",-1550176950),cljs.core.first(p1__6210_SHARP_))));
}),rest));
var generic_args = (cljs.core.truth_(generic_args_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(generic_args_node) : nex.walker.transform_node.call(null,generic_args_node)):null);
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6211_SHARP_){
var or__5142__auto__ = (function (){var fexpr__6223 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [")",null,"(",null,".",null], null), null);
return (fexpr__6223.cljs$core$IFn$_invoke$arity$1 ? fexpr__6223.cljs$core$IFn$_invoke$arity$1(p1__6211_SHARP_) : fexpr__6223.call(null,p1__6211_SHARP_));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ((cljs.core.sequential_QMARK_(p1__6211_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"genericArgs","genericArgs",-1550176950),cljs.core.first(p1__6211_SHARP_))));
}
}),rest);
var has_constructor_QMARK_ = cljs.core.seq(cleaned);
var constructor_name = ((has_constructor_QMARK_)?cljs.core.first(cleaned):null);
var args_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6212_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6212_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"argumentList","argumentList",1845382549),cljs.core.first(p1__6212_SHARP_))));
}),rest));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"class-name","class-name",945142584),nex.walker.token_text(class_name),new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015),generic_args,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),((has_constructor_QMARK_)?constructor_name:null),new cljs.core.Keyword(null,"args","args",1315556576),(cljs.core.truth_(args_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(args_node) : nex.walker.transform_node.call(null,args_node)):cljs.core.PersistentVector.EMPTY)], null);
}),(function (p__6225){
var vec__6227 = p__6225;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6227,(0),null);
var primary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6227,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(primary) : nex.walker.transform_node.call(null,primary));
}),(function (p__6230){
var vec__6232 = p__6230;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(0),null);
var stmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6232,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(stmt) : nex.walker.transform_node.call(null,stmt));
}),(function (p__6235){
var vec__6236 = p__6235;
var seq__6237 = cljs.core.seq(vec__6236);
var first__6238 = cljs.core.first(seq__6237);
var seq__6237__$1 = cljs.core.next(seq__6237);
var _ = first__6238;
var params = seq__6237__$1;
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6163_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",p1__6163_SHARP_);
}),params))));
}),(function (p__6239){
var vec__6240 = p__6239;
var seq__6241 = cljs.core.seq(vec__6240);
var first__6242 = cljs.core.first(seq__6241);
var seq__6241__$1 = cljs.core.next(seq__6241);
var _ = first__6242;
var first__6242__$1 = cljs.core.first(seq__6241__$1);
var seq__6241__$2 = cljs.core.next(seq__6241__$1);
var _inherit_kw = first__6242__$1;
var entries = seq__6241__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6136_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6136_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inheritEntry","inheritEntry",1587500888),cljs.core.first(p1__6136_SHARP_))));
}),entries));
}),nex.walker.make_binary_op_handler(null),(function (p__6246){
var vec__6247 = p__6246;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(member) : nex.walker.transform_node.call(null,member));
}),(function (p__6250){
var vec__6251 = p__6250;
var seq__6252 = cljs.core.seq(vec__6251);
var first__6253 = cljs.core.first(seq__6252);
var seq__6252__$1 = cljs.core.next(seq__6252);
var _ = first__6253;
var statements = seq__6252__$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,statements);
}),(function (p__6254){
var vec__6255 = p__6254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(0),null);
var _across_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(1),null);
var collection_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(2),null);
var _as_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(3),null);
var alias_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(4),null);
var _do_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(5),null);
var body_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(6),null);
var _end_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255,(7),null);
var cursor_name = (""+"__across_c_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nex.walker.next_fn_id,cljs.core.inc))+"__");
var cursor_id = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"name","name",1843675177),cursor_name], null);
var collection_ast = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(collection_expr) : nex.walker.transform_node.call(null,collection_expr));
var alias = nex.walker.token_text(alias_name);
var body_stmts = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(body_block) : nex.walker.transform_node.call(null,body_block));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),cursor_name,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),collection_ast,new cljs.core.Keyword(null,"method","method",55703592),"cursor",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),cursor_name,new cljs.core.Keyword(null,"method","method",55703592),"start",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null,new cljs.core.Keyword(null,"variant","variant",-424354234),null,new cljs.core.Keyword(null,"until","until",-1189166390),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),cursor_name,new cljs.core.Keyword(null,"method","method",55703592),"at_end",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),alias,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862),true,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),cursor_name,new cljs.core.Keyword(null,"method","method",55703592),"item",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null)], null)], null),body_stmts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),cursor_name,new cljs.core.Keyword(null,"method","method",55703592),"next",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null)], null)], 0)))], null);
}),nex.walker.make_binary_op_handler(null),(function (p__6260){
var vec__6261 = p__6260;
var seq__6262 = cljs.core.seq(vec__6261);
var first__6263 = cljs.core.first(seq__6262);
var seq__6262__$1 = cljs.core.next(seq__6262);
var _ = first__6263;
var rest = seq__6262__$1;
var args_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6203_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6203_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"argumentList","argumentList",1845382549),cljs.core.first(p1__6203_SHARP_))));
}),rest));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call-suffix","call-suffix",-1925078430),new cljs.core.Keyword(null,"args","args",1315556576),(cljs.core.truth_(args_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(args_node) : nex.walker.transform_node.call(null,args_node)):cljs.core.PersistentVector.EMPTY)], null);
}),(function (p__6264){
var vec__6265 = p__6264;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6265,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6265,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr));
}),(function (p__6268){
var vec__6269 = p__6268;
var seq__6270 = cljs.core.seq(vec__6269);
var first__6271 = cljs.core.first(seq__6270);
var seq__6270__$1 = cljs.core.next(seq__6270);
var _ = first__6271;
var children = seq__6270__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))){
var child = cljs.core.first(children);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child,"this")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"this","this",-611633625)], null);
} else {
if(((typeof child === 'string') && (cljs.core.not(child.startsWith("\""))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"name","name",1843675177),child], null);
} else {
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(child) : nex.walker.transform_node.call(null,child));

}
}
} else {
var G__6272 = cljs.core.second(children);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6272) : nex.walker.transform_node.call(null,G__6272));
}
}),(function (p__6273){
var vec__6274 = p__6273;
var seq__6275 = cljs.core.seq(vec__6274);
var first__6276 = cljs.core.first(seq__6275);
var seq__6275__$1 = cljs.core.next(seq__6275);
var _ = first__6276;
var first__6276__$1 = cljs.core.first(seq__6275__$1);
var seq__6275__$2 = cljs.core.next(seq__6275__$1);
var name = first__6276__$1;
var rest = seq__6275__$2;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6148_SHARP_){
var fexpr__6277 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [")",null,"(",null,"do",null,"end",null], null), null);
return (fexpr__6277.cljs$core$IFn$_invoke$arity$1 ? fexpr__6277.cljs$core$IFn$_invoke$arity$1(p1__6148_SHARP_) : fexpr__6277.call(null,p1__6148_SHARP_));
}),rest);
var params = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6149_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6149_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paramList","paramList",1920214497),cljs.core.first(p1__6149_SHARP_))));
}),cleaned));
var require_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6150_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6150_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requireClause","requireClause",586790511),cljs.core.first(p1__6150_SHARP_))));
}),cleaned));
var ensure_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6151_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6151_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ensureClause","ensureClause",1776907998),cljs.core.first(p1__6151_SHARP_))));
}),cleaned));
var rescue_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6152_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6152_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rescueClause","rescueClause",600913254),cljs.core.first(p1__6152_SHARP_))));
}),cleaned));
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6153_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6153_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6153_SHARP_))));
}),cleaned));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(params)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(params) : nex.walker.transform_node.call(null,params)):null),new cljs.core.Keyword(null,"require","require",-468001333),(cljs.core.truth_(require_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(require_clause) : nex.walker.transform_node.call(null,require_clause)):null),new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block)),new cljs.core.Keyword(null,"ensure","ensure",-439171367),(cljs.core.truth_(ensure_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(ensure_clause) : nex.walker.transform_node.call(null,ensure_clause)):null),new cljs.core.Keyword(null,"rescue","rescue",1135767523),(cljs.core.truth_(rescue_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(rescue_clause) : nex.walker.transform_node.call(null,rescue_clause)):null)], null);
}),(function (p__6280){
var vec__6281 = p__6280;
var seq__6282 = cljs.core.seq(vec__6281);
var first__6283 = cljs.core.first(seq__6282);
var seq__6282__$1 = cljs.core.next(seq__6282);
var _ = first__6283;
var first__6283__$1 = cljs.core.first(seq__6282__$1);
var seq__6282__$2 = cljs.core.next(seq__6282__$1);
var name = first__6283__$1;
var rest = seq__6282__$2;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6154_SHARP_){
var fexpr__6284 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [")",null,"(",null,":",null,"do",null,"end",null], null), null);
return (fexpr__6284.cljs$core$IFn$_invoke$arity$1 ? fexpr__6284.cljs$core$IFn$_invoke$arity$1(p1__6154_SHARP_) : fexpr__6284.call(null,p1__6154_SHARP_));
}),rest);
var params = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6155_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6155_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paramList","paramList",1920214497),cljs.core.first(p1__6155_SHARP_))));
}),cleaned));
var return_type = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6156_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6156_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first(p1__6156_SHARP_))));
}),cleaned));
var note_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6157_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6157_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noteClause","noteClause",1731029065),cljs.core.first(p1__6157_SHARP_))));
}),cleaned));
var require_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6158_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6158_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requireClause","requireClause",586790511),cljs.core.first(p1__6158_SHARP_))));
}),cleaned));
var ensure_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6159_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6159_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ensureClause","ensureClause",1776907998),cljs.core.first(p1__6159_SHARP_))));
}),cleaned));
var rescue_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6160_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6160_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rescueClause","rescueClause",600913254),cljs.core.first(p1__6160_SHARP_))));
}),cleaned));
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6161_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6161_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6161_SHARP_))));
}),cleaned));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"ensure","ensure",-439171367),new cljs.core.Keyword(null,"body","body",-2049205669)],[(cljs.core.truth_(rescue_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(rescue_clause) : nex.walker.transform_node.call(null,rescue_clause)):null),(cljs.core.truth_(return_type)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(return_type) : nex.walker.transform_node.call(null,return_type)):null),nex.walker.token_text(name),(cljs.core.truth_(require_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(require_clause) : nex.walker.transform_node.call(null,require_clause)):null),(cljs.core.truth_(params)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(params) : nex.walker.transform_node.call(null,params)):null),new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(note_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(note_clause) : nex.walker.transform_node.call(null,note_clause)):null),(cljs.core.truth_(ensure_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(ensure_clause) : nex.walker.transform_node.call(null,ensure_clause)):null),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block))]);
}),(function (p__6285){
var vec__6286 = p__6285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6286,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6286,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"real","real",388296937),new cljs.core.Keyword(null,"value","value",305978217),parseFloat(value)], null);
}),(function (p__6289){
var vec__6290 = p__6289;
var seq__6291 = cljs.core.seq(vec__6290);
var first__6292 = cljs.core.first(seq__6291);
var seq__6291__$1 = cljs.core.next(seq__6291);
var _ = first__6292;
var first__6292__$1 = cljs.core.first(seq__6291__$1);
var seq__6291__$2 = cljs.core.next(seq__6291__$1);
var _dot = first__6292__$1;
var first__6292__$2 = cljs.core.first(seq__6291__$2);
var seq__6291__$3 = cljs.core.next(seq__6291__$2);
var name = first__6292__$2;
var rest = seq__6291__$3;
var has_parens = cljs.core.boolean$(cljs.core.some((function (p1__6201_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__6201_SHARP_);
}),rest));
var args_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6202_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6202_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"argumentList","argumentList",1845382549),cljs.core.first(p1__6202_SHARP_))));
}),rest));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-access","member-access",1005657075),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens,new cljs.core.Keyword(null,"args","args",1315556576),(cljs.core.truth_(args_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(args_node) : nex.walker.transform_node.call(null,args_node)):cljs.core.PersistentVector.EMPTY)], null);
}),(function (p__6293){
var vec__6294 = p__6293;
var seq__6295 = cljs.core.seq(vec__6294);
var first__6296 = cljs.core.first(seq__6295);
var seq__6295__$1 = cljs.core.next(seq__6295);
var _ = first__6296;
var first__6296__$1 = cljs.core.first(seq__6295__$1);
var seq__6295__$2 = cljs.core.next(seq__6295__$1);
var _from_kw = first__6296__$1;
var first__6296__$2 = cljs.core.first(seq__6295__$2);
var seq__6295__$3 = cljs.core.next(seq__6295__$2);
var init_block = first__6296__$2;
var rest = seq__6295__$3;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6187_SHARP_){
var fexpr__6297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["until",null,"do",null,"end",null], null), null);
return (fexpr__6297.cljs$core$IFn$_invoke$arity$1 ? fexpr__6297.cljs$core$IFn$_invoke$arity$1(p1__6187_SHARP_) : fexpr__6297.call(null,p1__6187_SHARP_));
}),rest);
var invariant_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6188_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6188_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invariantClause","invariantClause",-340965908),cljs.core.first(p1__6188_SHARP_))));
}),cleaned));
var variant_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6189_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6189_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variantClause","variantClause",717349707),cljs.core.first(p1__6189_SHARP_))));
}),cleaned));
var until_expr = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6190_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6190_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.first(p1__6190_SHARP_))));
}),cleaned));
var body_block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6191_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6191_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6191_SHARP_))));
}),cleaned));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(init_block) : nex.walker.transform_node.call(null,init_block)),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),(cljs.core.truth_(invariant_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(invariant_clause) : nex.walker.transform_node.call(null,invariant_clause)):null),new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(variant_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(variant_clause) : nex.walker.transform_node.call(null,variant_clause)):null),new cljs.core.Keyword(null,"until","until",-1189166390),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(until_expr) : nex.walker.transform_node.call(null,until_expr)),new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(body_block) : nex.walker.transform_node.call(null,body_block))], null);
}),(function (p__6305){
var vec__6306 = p__6305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(0),null);
var _minus = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unary","unary",-989314568),new cljs.core.Keyword(null,"operator","operator",-1860875338),"-",new cljs.core.Keyword(null,"expr","expr",745722291),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6309){
var vec__6310 = p__6309;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(0),null);
var _rescue_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(1),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6310,(2),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block));
}),(function (p__6313){
var vec__6314 = p__6313;
var seq__6315 = cljs.core.seq(vec__6314);
var first__6316 = cljs.core.first(seq__6315);
var seq__6315__$1 = cljs.core.next(seq__6315);
var _ = first__6316;
var first__6316__$1 = cljs.core.first(seq__6315__$1);
var seq__6315__$2 = cljs.core.next(seq__6315__$1);
var _select_kw = first__6316__$1;
var rest = seq__6315__$2;
var tokens = cljs.core.vec(rest);
var clauses = cljs.core.filterv((function (p1__6179_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6179_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selectClause","selectClause",-263311481),cljs.core.first(p1__6179_SHARP_))));
}),tokens);
var timeout_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6180_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6180_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timeoutClause","timeoutClause",23455655),cljs.core.first(p1__6180_SHARP_))));
}),tokens));
var has_else_QMARK_ = cljs.core.some((function (p1__6181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("else",p1__6181_SHARP_);
}),tokens);
var else_block = (cljs.core.truth_(has_else_QMARK_)?(function (){var after_else = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__6182_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("else",p1__6182_SHARP_);
}),tokens));
if(((cljs.core.sequential_QMARK_(after_else)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(after_else))))){
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(after_else) : nex.walker.transform_node.call(null,after_else));
} else {
return null;
}
})():null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,clauses),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(cljs.core.truth_(timeout_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(timeout_clause) : nex.walker.transform_node.call(null,timeout_clause)):null),new cljs.core.Keyword(null,"else","else",-1508377146),else_block], null);
}),nex.walker.make_binary_op_handler("and"),(function (p__6323){
var vec__6324 = p__6323;
var seq__6325 = cljs.core.seq(vec__6324);
var first__6326 = cljs.core.first(seq__6325);
var seq__6325__$1 = cljs.core.next(seq__6325);
var _ = first__6326;
var tokens = seq__6325__$1;
var name = cljs.core.first(tokens);
var has_colon_QMARK_ = cljs.core.some((function (p1__6146_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",p1__6146_SHARP_);
}),tokens);
var eq_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",v)){
return i;
} else {
return null;
}
}),tokens));
var note_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6147_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6147_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noteClause","noteClause",1731029065),cljs.core.first(p1__6147_SHARP_))));
}),tokens));
if(cljs.core.truth_(has_colon_QMARK_)){
var type_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(2));
var value_node = (cljs.core.truth_(eq_idx)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(eq_idx + (1))):null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"field-type","field-type",2075623493),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(type_node) : nex.walker.transform_node.call(null,type_node)),new cljs.core.Keyword(null,"constant?","constant?",116434182),cljs.core.boolean$(value_node),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(value_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(value_node) : nex.walker.transform_node.call(null,value_node)):null),new cljs.core.Keyword(null,"note","note",1426297904),(cljs.core.truth_(note_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(note_clause) : nex.walker.transform_node.call(null,note_clause)):null)], null);
} else {
var value_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(2));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"field-type","field-type",2075623493),null,new cljs.core.Keyword(null,"constant?","constant?",116434182),true,new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(value_node) : nex.walker.transform_node.call(null,value_node)),new cljs.core.Keyword(null,"note","note",1426297904),(cljs.core.truth_(note_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(note_clause) : nex.walker.transform_node.call(null,note_clause)):null)], null);
}
}),(function (p__6334){
var vec__6335 = p__6334;
var seq__6336 = cljs.core.seq(vec__6335);
var first__6337 = cljs.core.first(seq__6336);
var seq__6336__$1 = cljs.core.next(seq__6336);
var _ = first__6337;
var first__6337__$1 = cljs.core.first(seq__6336__$1);
var seq__6336__$2 = cljs.core.next(seq__6336__$1);
var _when_kw = first__6337__$1;
var first__6337__$2 = cljs.core.first(seq__6336__$2);
var seq__6336__$3 = cljs.core.next(seq__6336__$2);
var expr = first__6337__$2;
var rest = seq__6336__$3;
var tokens = cljs.core.vec(rest);
var alias = (cljs.core.truth_(cljs.core.some((function (p1__6183_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("as",p1__6183_SHARP_);
}),tokens))?nex.walker.token_text(cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__6184_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("as",p1__6184_SHARP_);
}),tokens))):null);
var then_block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6185_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6185_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6185_SHARP_))));
}),tokens));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expr","expr",745722291),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr)),new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(then_block) : nex.walker.transform_node.call(null,then_block))], null);
}),(function (p__6343){
var vec__6344 = p__6343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(0),null);
var _timeout_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(1),null);
var duration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(2),null);
var _then_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(3),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6344,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(duration) : nex.walker.transform_node.call(null,duration)),new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block))], null);
}),nex.walker.make_binary_op_handler(null),(function (p__6348){
var vec__6349 = p__6348;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6349,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6349,(1),null);
var v0 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(1));
var is_code = cljs.core.re_matches(/\d+/,v0);
var v = (cljs.core.truth_(is_code)?v0:nex.walker.maybe_transform_special_char(v0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(is_code)?String.fromCharCode(parseInt(v)):cljs.core.first(v))], null);
}),(function (p__6356){
var vec__6357 = p__6356;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(0),null);
var _repeat_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(1),null);
var count_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(2),null);
var _do_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(3),null);
var body_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(4),null);
var _end_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6357,(5),null);
var counter_name = "__repeat_i__";
var counter_id = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"name","name",1843675177),counter_name], null);
var count_ast = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(count_expr) : nex.walker.transform_node.call(null,count_expr));
var body_stmts = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(body_block) : nex.walker.transform_node.call(null,body_block));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),counter_name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null,new cljs.core.Keyword(null,"variant","variant",-424354234),null,new cljs.core.Keyword(null,"until","until",-1189166390),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),"=",new cljs.core.Keyword(null,"left","left",-399115937),counter_id,new cljs.core.Keyword(null,"right","right",-452581833),count_ast], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(body_stmts),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),counter_name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),"+",new cljs.core.Keyword(null,"left","left",-399115937),counter_id,new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"text","text",-1790561697),"1"], null)], null)], null))], null);
}),(function (p__6360){
var vec__6361 = p__6360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6361,(0),null);
var _note_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6361,(1),null);
var string_literal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6361,(2),null);
var s = nex.walker.token_text(string_literal);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
}),(function (p__6365){
var vec__6366 = p__6365;
var seq__6367 = cljs.core.seq(vec__6366);
var first__6368 = cljs.core.first(seq__6367);
var seq__6367__$1 = cljs.core.next(seq__6367);
var _ = first__6368;
var first__6368__$1 = cljs.core.first(seq__6367__$1);
var seq__6367__$2 = cljs.core.next(seq__6367__$1);
var _if_kw = first__6368__$1;
var rest = seq__6367__$2;
var tokens = cljs.core.vec(rest);
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(0));
var then_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(2));
var remaining = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(tokens,(3));
var vec__6369 = (function (){var toks = remaining;
var elseifs = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(toks)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("end",cljs.core.first(toks))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elseifs,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("elseif",cljs.core.first(toks))){
var G__6900 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(toks),(4));
var G__6901 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elseifs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"condition","condition",1668437652),(function (){var G__6377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(toks,(1));
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6377) : nex.walker.transform_node.call(null,G__6377));
})(),new cljs.core.Keyword(null,"then","then",460598070),(function (){var G__6378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(toks,(3));
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6378) : nex.walker.transform_node.call(null,G__6378));
})()], null));
toks = G__6900;
elseifs = G__6901;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("else",cljs.core.first(toks))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elseifs,(function (){var G__6379 = cljs.core.second(toks);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6379) : nex.walker.transform_node.call(null,G__6379));
})()], null);
} else {
var G__6908 = (rest.cljs$core$IFn$_invoke$arity$1 ? rest.cljs$core$IFn$_invoke$arity$1(toks) : rest.call(null,toks));
var G__6909 = elseifs;
toks = G__6908;
elseifs = G__6909;
continue;

}
}
}
break;
}
})();
var elseif_clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(0),null);
var else_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(condition) : nex.walker.transform_node.call(null,condition)),new cljs.core.Keyword(null,"then","then",460598070),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(then_block) : nex.walker.transform_node.call(null,then_block)),new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif_clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else_block], null);
}),(function (p__6382){
var vec__6383 = p__6382;
var seq__6384 = cljs.core.seq(vec__6383);
var first__6385 = cljs.core.first(seq__6384);
var seq__6384__$1 = cljs.core.next(seq__6384);
var _ = first__6385;
var first__6385__$1 = cljs.core.first(seq__6384__$1);
var seq__6384__$2 = cljs.core.next(seq__6384__$1);
var _open_bracket = first__6385__$1;
var args = seq__6384__$2;
var arg_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6170_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6170_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"genericArg","genericArg",-1445056392),cljs.core.first(p1__6170_SHARP_))));
}),args);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,arg_nodes);
}),nex.walker.make_binary_op_handler("or"),(function (p__6386){
var vec__6387 = p__6386;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6387,(0),null);
var _variant_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6387,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6387,(2),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr));
}),(function (p__6391){
var vec__6392 = p__6391;
var seq__6393 = cljs.core.seq(vec__6392);
var first__6394 = cljs.core.first(seq__6393);
var seq__6393__$1 = cljs.core.next(seq__6393);
var _ = first__6394;
var first__6394__$1 = cljs.core.first(seq__6393__$1);
var seq__6393__$2 = cljs.core.next(seq__6393__$1);
var first_elem = first__6394__$1;
var remaining = seq__6393__$2;
var has_visibility_QMARK_ = ((cljs.core.sequential_QMARK_(first_elem)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visibilityModifier","visibilityModifier",476641264),cljs.core.first(first_elem))));
var visibility = ((has_visibility_QMARK_)?(function (){var modifier = first_elem;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("private",nex.walker.token_text(cljs.core.second(modifier)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"private","private",-558947994)], null);
} else {
var class_names = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6145_SHARP_){
return ((typeof p1__6145_SHARP_ === 'string') && (cljs.core.not((function (){var fexpr__6401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["->",null,",",null], null), null);
return (fexpr__6401.cljs$core$IFn$_invoke$arity$1 ? fexpr__6401.cljs$core$IFn$_invoke$arity$1(p1__6145_SHARP_) : fexpr__6401.call(null,p1__6145_SHARP_));
})())));
}),cljs.core.rest(modifier));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"selective","selective",-1827871275),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.vec(class_names)], null);
}
})():null);
var members_list = ((has_visibility_QMARK_)?cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),remaining):remaining);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),(function (){var or__5142__auto__ = visibility;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null);
}
})(),new cljs.core.Keyword(null,"members","members",159001018),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,members_list)], null);
}),(function (p__6402){
var vec__6403 = p__6402;
var seq__6404 = cljs.core.seq(vec__6403);
var first__6405 = cljs.core.first(seq__6404);
var seq__6404__$1 = cljs.core.next(seq__6404);
var _ = first__6405;
var first__6405__$1 = cljs.core.first(seq__6404__$1);
var seq__6404__$2 = cljs.core.next(seq__6404__$1);
var first_node = first__6405__$1;
var rest = seq__6404__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",first_node)){
var inner = (function (){var G__6406 = cljs.core.first(rest);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6406) : nex.walker.transform_node.call(null,G__6406));
})();
if(cljs.core.map_QMARK_(inner)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),inner,new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null);
}
} else {
var type_name = first_node;
var type_args_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6171_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6171_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typeArgs","typeArgs",2045861622),cljs.core.first(p1__6171_SHARP_))));
}),rest));
if(cljs.core.truth_(type_args_node)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),nex.walker.token_text(type_name),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(type_args_node) : nex.walker.transform_node.call(null,type_args_node))], null);
} else {
return nex.walker.token_text(type_name);
}
}
}),(function (p__6407){
var vec__6408 = p__6407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"value","value",305978217),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"true")], null);
}),(function (p__6413){
var vec__6414 = p__6413;
var seq__6415 = cljs.core.seq(vec__6414);
var first__6416 = cljs.core.first(seq__6415);
var seq__6415__$1 = cljs.core.next(seq__6415);
var _ = first__6416;
var first__6416__$1 = cljs.core.first(seq__6415__$1);
var seq__6415__$2 = cljs.core.next(seq__6415__$1);
var _invariant_kw = first__6416__$1;
var assertions = seq__6415__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,assertions);
}),(function (p__6418){
var vec__6419 = p__6418;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6419,(0),null);
var _value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6419,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nil","nil",99600501)], null);
}),(function (p__6422){
var vec__6423 = p__6422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6423,(0),null);
var _not = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6423,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6423,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unary","unary",-989314568),new cljs.core.Keyword(null,"operator","operator",-1860875338),"not",new cljs.core.Keyword(null,"expr","expr",745722291),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6427){
var vec__6429 = p__6427;
var seq__6430 = cljs.core.seq(vec__6429);
var first__6431 = cljs.core.first(seq__6430);
var seq__6430__$1 = cljs.core.next(seq__6430);
var _ = first__6431;
var first__6431__$1 = cljs.core.first(seq__6430__$1);
var seq__6430__$2 = cljs.core.next(seq__6430__$1);
var _let = first__6431__$1;
var first__6431__$2 = cljs.core.first(seq__6430__$2);
var seq__6430__$3 = cljs.core.next(seq__6430__$2);
var name = first__6431__$2;
var rest = seq__6430__$3;
var has_type_QMARK_ = (((cljs.core.count(rest) >= (4))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(rest))));
var var_type = ((has_type_QMARK_)?(function (){var type_node = cljs.core.second(rest);
if(cljs.core.sequential_QMARK_(type_node)){
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(type_node) : nex.walker.transform_node.call(null,type_node));
} else {
return type_node;
}
})():null);
var assign_idx = ((has_type_QMARK_)?(2):(0));
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rest,(assign_idx + (1)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"var-type","var-type",-1876390632),var_type,new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6435){
var vec__6436 = p__6435;
var seq__6437 = cljs.core.seq(vec__6436);
var first__6438 = cljs.core.first(seq__6437);
var seq__6437__$1 = cljs.core.next(seq__6437);
var _ = first__6438;
var first__6438__$1 = cljs.core.first(seq__6437__$1);
var seq__6437__$2 = cljs.core.next(seq__6437__$1);
var _open_bracket = first__6438__$1;
var elements = seq__6437__$2;
var expr_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6205_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6205_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.first(p1__6205_SHARP_))));
}),elements);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,expr_nodes)], null);
}),(function (p__6439){
var vec__6441 = p__6439;
var seq__6442 = cljs.core.seq(vec__6441);
var first__6443 = cljs.core.first(seq__6442);
var seq__6442__$1 = cljs.core.next(seq__6442);
var _ = first__6443;
var first__6443__$1 = cljs.core.first(seq__6442__$1);
var seq__6442__$2 = cljs.core.next(seq__6442__$1);
var primary_node = first__6443__$1;
var parts = seq__6442__$2;
var base = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(primary_node) : nex.walker.transform_node.call(null,primary_node));
var parts__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,parts));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var G__6445 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(part);
var G__6445__$1 = (((G__6445 instanceof cljs.core.Keyword))?G__6445.fqn:null);
switch (G__6445__$1) {
case "member-access":
var G__6446 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),((((cljs.core.map_QMARK_(acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc)))))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(acc):acc),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part)], null);
if((!((new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(part) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6446,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(part));
} else {
return G__6446;
}

break;
case "call-suffix":
if(((cljs.core.map_QMARK_(acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], null);
} else {
if(((cljs.core.map_QMARK_(acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc))) && ((((!((new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(acc) == null)))) && (cljs.core.not(new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(acc))))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),acc,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], null);

}
}

break;
case "subscript":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"subscript","subscript",-1484665872),new cljs.core.Keyword(null,"target","target",253001721),acc,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(part)], null);

break;
default:
return acc;

}
}),base,parts__$1);
}),(function (p__6456){
var vec__6457 = p__6456;
var seq__6458 = cljs.core.seq(vec__6457);
var first__6459 = cljs.core.first(seq__6458);
var seq__6458__$1 = cljs.core.next(seq__6458);
var _ = first__6459;
var parts = seq__6458__$1;
var type_node = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,parts));
var identifiers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6165_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",p1__6165_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__6164_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(":",p1__6164_SHARP_);
}),parts)));
var param_type = (cljs.core.truth_(type_node)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(type_node) : nex.walker.transform_node.call(null,type_node)):"Any");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"type","type",1174270348),param_type], null);
}),identifiers);
}),(function (p__6462){
var vec__6464 = p__6462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(0),null);
var _with_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(1),null);
var target_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(2),null);
var _do_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(3),null);
var body_block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(4),null);
var _end_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6464,(5),null);
var target = (function (){var s = nex.walker.token_text(target_string);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(body_block) : nex.walker.transform_node.call(null,body_block))], null);
}),(function (p__6472){
var vec__6473 = p__6472;
var seq__6474 = cljs.core.seq(vec__6473);
var first__6475 = cljs.core.first(seq__6474);
var seq__6474__$1 = cljs.core.next(seq__6474);
var _ = first__6475;
var first__6475__$1 = cljs.core.first(seq__6474__$1);
var seq__6474__$2 = cljs.core.next(seq__6474__$1);
var _require_kw = first__6475__$1;
var assertions = seq__6474__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,assertions);
}),(function (p__6476){
var vec__6477 = p__6476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(0),null);
var _convert_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(1),null);
var value_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(2),null);
var _to_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(3),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(4),null);
var _colon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(5),null);
var type_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6477,(6),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"convert","convert",912478626),new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(value_expr) : nex.walker.transform_node.call(null,value_expr)),new cljs.core.Keyword(null,"var-name","var-name",-574747624),nex.walker.token_text(var_name),new cljs.core.Keyword(null,"target-type","target-type",-1795727181),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(type_expr) : nex.walker.transform_node.call(null,type_expr))], null);
}),(function (p__6480){
var vec__6481 = p__6480;
var seq__6482 = cljs.core.seq(vec__6481);
var first__6483 = cljs.core.first(seq__6482);
var seq__6482__$1 = cljs.core.next(seq__6482);
var _ = first__6483;
var first__6483__$1 = cljs.core.first(seq__6482__$1);
var seq__6482__$2 = cljs.core.next(seq__6482__$1);
var _open_brace = first__6483__$1;
var entries = seq__6482__$2;
var entry_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6207_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6207_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mapEntry","mapEntry",920267986),cljs.core.first(p1__6207_SHARP_))));
}),entries);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,entry_nodes)], null);
}),(function (p__6484){
var vec__6485 = p__6484;
var seq__6486 = cljs.core.seq(vec__6485);
var first__6487 = cljs.core.first(seq__6486);
var seq__6486__$1 = cljs.core.next(seq__6486);
var _ = first__6487;
var rest = seq__6486__$1;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(rest))) && (typeof cljs.core.first(rest) === 'string'))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first(rest),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),false], null);
} else {
var vec__6488 = rest;
var primary_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(0),null);
var call_chain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6488,(1),null);
var base = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(primary_node) : nex.walker.transform_node.call(null,primary_node));
var parts = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(call_chain) : nex.walker.transform_node.call(null,call_chain));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var G__6491 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(part);
var G__6491__$1 = (((G__6491 instanceof cljs.core.Keyword))?G__6491.fqn:null);
switch (G__6491__$1) {
case "member-access":
var G__6492 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),((((cljs.core.map_QMARK_(acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc)))))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(acc):acc),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part)], null);
if((!((new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(part) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6492,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(part));
} else {
return G__6492;
}

break;
case "call-suffix":
if(((cljs.core.map_QMARK_(acc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),null,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], null);
} else {
if(((cljs.core.map_QMARK_(acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(acc))) && ((((!((new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(acc) == null)))) && (cljs.core.not(new cljs.core.Keyword(null,"has-parens","has-parens",454405713).cljs$core$IFn$_invoke$arity$1(acc))))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),acc,new cljs.core.Keyword(null,"method","method",55703592),null,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(part),new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], null);

}
}

break;
case "subscript":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"subscript","subscript",-1484665872),new cljs.core.Keyword(null,"target","target",253001721),acc,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(part)], null);

break;
default:
return acc;

}
}),base,parts);

}
}),(function (p__6496){
var vec__6497 = p__6496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(0),null);
var _open_bracket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(2),null);
var _close_bracket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"subscript","subscript",-1484665872),new cljs.core.Keyword(null,"index","index",-1531685915),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (node){
return node;
}),(function (p__6503){
var vec__6504 = p__6503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(1),null);
var _colon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(2),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),((typeof key === 'string')?(cljs.core.truth_(key.startsWith("\""))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(key,(1),(((key).length) - (1)))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"value","value",305978217),key], null)):(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(key) : nex.walker.transform_node.call(null,key))),new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(value) : nex.walker.transform_node.call(null,value))], null);
}),(function (p__6507){
var vec__6508 = p__6507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(0),null);
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(part) : nex.walker.transform_node.call(null,part));
}),(function (p__6511){
var vec__6512 = p__6511;
var seq__6513 = cljs.core.seq(vec__6512);
var first__6514 = cljs.core.first(seq__6513);
var seq__6513__$1 = cljs.core.next(seq__6513);
var _ = first__6514;
var first__6514__$1 = cljs.core.first(seq__6513__$1);
var seq__6513__$2 = cljs.core.next(seq__6513__$1);
var first_node = first__6514__$1;
var nodes = seq__6513__$2;
var vec__6515 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",first_node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.first(nodes),cljs.core.rest(nodes)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,first_node,nodes], null));
var detachable_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6515,(0),null);
var param_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6515,(1),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6515,(2),null);
var has_constraint_QMARK_ = cljs.core.some((function (p1__6167_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("->",p1__6167_SHARP_);
}),tail);
var constraint = (cljs.core.truth_(has_constraint_QMARK_)?(function (){var after_arrow = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__6168_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("->",p1__6168_SHARP_);
}),tail);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6169_SHARP_){
return ((typeof p1__6169_SHARP_ === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("->",p1__6169_SHARP_)));
}),after_arrow));
})():null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(param_name),new cljs.core.Keyword(null,"constraint","constraint",1725147424),constraint,new cljs.core.Keyword(null,"detachable","detachable",715380987),detachable_QMARK_], null);
}),(function (p__6522){
var vec__6523 = p__6522;
var seq__6524 = cljs.core.seq(vec__6523);
var first__6525 = cljs.core.first(seq__6524);
var seq__6524__$1 = cljs.core.next(seq__6524);
var _ = first__6525;
var first__6525__$1 = cljs.core.first(seq__6524__$1);
var seq__6524__$2 = cljs.core.next(seq__6524__$1);
var _function_kw = first__6525__$1;
var first__6525__$2 = cljs.core.first(seq__6524__$2);
var seq__6524__$3 = cljs.core.next(seq__6524__$2);
var name = first__6525__$2;
var rest = seq__6524__$3;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6112_SHARP_){
var fexpr__6526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [")",null,"(",null,":",null,"do",null,"end",null], null), null);
return (fexpr__6526.cljs$core$IFn$_invoke$arity$1 ? fexpr__6526.cljs$core$IFn$_invoke$arity$1(p1__6112_SHARP_) : fexpr__6526.call(null,p1__6112_SHARP_));
}),rest);
var params = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6114_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6114_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paramList","paramList",1920214497),cljs.core.first(p1__6114_SHARP_))));
}),cleaned));
var return_type = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6116_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6116_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first(p1__6116_SHARP_))));
}),cleaned));
var note_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6118_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6118_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noteClause","noteClause",1731029065),cljs.core.first(p1__6118_SHARP_))));
}),cleaned));
var require_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6119_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6119_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requireClause","requireClause",586790511),cljs.core.first(p1__6119_SHARP_))));
}),cleaned));
var ensure_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6120_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6120_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ensureClause","ensureClause",1776907998),cljs.core.first(p1__6120_SHARP_))));
}),cleaned));
var rescue_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6121_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6121_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rescueClause","rescueClause",600913254),cljs.core.first(p1__6121_SHARP_))));
}),cleaned));
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6123_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6123_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6123_SHARP_))));
}),cleaned));
var params_v = (cljs.core.truth_(params)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(params) : nex.walker.transform_node.call(null,params)):null);
var return_type_v = (cljs.core.truth_(return_type)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(return_type) : nex.walker.transform_node.call(null,return_type)):null);
var body = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block));
var fn_name = nex.walker.token_text(name);
var class_name = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)+"_Function");
var method_name = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_v)));
var method_def = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rescue","rescue",1135767523),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"note","note",1426297904),new cljs.core.Keyword(null,"ensure","ensure",-439171367),new cljs.core.Keyword(null,"body","body",-2049205669)],[(cljs.core.truth_(rescue_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(rescue_clause) : nex.walker.transform_node.call(null,rescue_clause)):null),return_type_v,method_name,(cljs.core.truth_(require_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(require_clause) : nex.walker.transform_node.call(null,require_clause)):null),params_v,new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(note_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(note_clause) : nex.walker.transform_node.call(null,note_clause)):null),(cljs.core.truth_(ensure_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(ensure_clause) : nex.walker.transform_node.call(null,ensure_clause)):null),body]);
var class_def = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),class_name,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Function"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [method_def], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"name","name",1843675177),fn_name,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"params","params",710516235),params_v,new cljs.core.Keyword(null,"return-type","return-type",1172480871),return_type_v,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"class-def","class-def",-524108044),class_def], null);
}),(function (p__6527){
var vec__6530 = p__6527;
var seq__6531 = cljs.core.seq(vec__6530);
var first__6532 = cljs.core.first(seq__6531);
var seq__6531__$1 = cljs.core.next(seq__6531);
var _ = first__6532;
var first__6532__$1 = cljs.core.first(seq__6531__$1);
var seq__6531__$2 = cljs.core.next(seq__6531__$1);
var _case_kw = first__6532__$1;
var first__6532__$2 = cljs.core.first(seq__6531__$2);
var seq__6531__$3 = cljs.core.next(seq__6531__$2);
var expr = first__6532__$2;
var first__6532__$3 = cljs.core.first(seq__6531__$3);
var seq__6531__$4 = cljs.core.next(seq__6531__$3);
var _of_kw = first__6532__$3;
var rest = seq__6531__$4;
var tokens = cljs.core.vec(rest);
var clauses = cljs.core.filterv((function (p1__6176_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6176_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"caseClause","caseClause",650225817),cljs.core.first(p1__6176_SHARP_))));
}),tokens);
var has_else_QMARK_ = cljs.core.some((function (p1__6177_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("else",p1__6177_SHARP_);
}),tokens);
var else_stmt = (cljs.core.truth_(has_else_QMARK_)?(function (){var after_else = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__6178_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("else",p1__6178_SHARP_);
}),tokens));
if(((cljs.core.sequential_QMARK_(after_else)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("end",after_else)))){
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(after_else) : nex.walker.transform_node.call(null,after_else));
} else {
return null;
}
})():null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr)),new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,clauses),new cljs.core.Keyword(null,"else","else",-1508377146),else_stmt], null);
}),nex.walker.make_binary_op_handler(null),(function (p__6534){
var vec__6535 = p__6534;
var seq__6536 = cljs.core.seq(vec__6535);
var first__6537 = cljs.core.first(seq__6536);
var seq__6536__$1 = cljs.core.next(seq__6536);
var _ = first__6537;
var tokens = seq__6536__$1;
var vec__6538 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("deferred",nex.walker.token_text(cljs.core.first(tokens))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.second(tokens),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tokens,(2)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),tokens)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.first(tokens),cljs.core.second(tokens),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),tokens)], null));
var deferred_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6538,(0),null);
var _class_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6538,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6538,(2),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6538,(3),null);
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6105_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("end",p1__6105_SHARP_);
}),rest);
var generic_params = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6106_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6106_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"genericParams","genericParams",-1575471754),cljs.core.first(p1__6106_SHARP_))));
}),cleaned));
var note_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6107_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6107_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"noteClause","noteClause",1731029065),cljs.core.first(p1__6107_SHARP_))));
}),cleaned));
var inherit_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6108_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6108_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inheritClause","inheritClause",-1388742943),cljs.core.first(p1__6108_SHARP_))));
}),cleaned));
var class_body = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6109_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6109_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classBody","classBody",-1810895917),cljs.core.first(p1__6109_SHARP_))));
}),cleaned));
var invariant_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6110_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6110_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invariantClause","invariantClause",-340965908),cljs.core.first(p1__6110_SHARP_))));
}),cleaned));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),nex.walker.token_text(name),new cljs.core.Keyword(null,"deferred?","deferred?",716798715),deferred_QMARK_,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),(cljs.core.truth_(generic_params)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(generic_params) : nex.walker.transform_node.call(null,generic_params)):null),new cljs.core.Keyword(null,"note","note",1426297904),(cljs.core.truth_(note_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(note_clause) : nex.walker.transform_node.call(null,note_clause)):null),new cljs.core.Keyword(null,"parents","parents",-2027538891),(cljs.core.truth_(inherit_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(inherit_clause) : nex.walker.transform_node.call(null,inherit_clause)):null),new cljs.core.Keyword(null,"body","body",-2049205669),nex.walker.walk_children(class_body),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),(cljs.core.truth_(invariant_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(invariant_clause) : nex.walker.transform_node.call(null,invariant_clause)):null)], null);
}),(function (p__6547){
var vec__6548 = p__6547;
var seq__6549 = cljs.core.seq(vec__6548);
var first__6550 = cljs.core.first(seq__6549);
var seq__6549__$1 = cljs.core.next(seq__6549);
var _ = first__6550;
var args = seq__6549__$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6198_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",p1__6198_SHARP_);
}),args));
}),(function (p__6551){
var vec__6552 = p__6551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(0),null);
var lit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(1),null);
if(typeof lit === 'string'){
if(cljs.core.truth_(lit.startsWith("\""))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(lit,(1),(((lit).length) - (1)))], null);
} else {
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(lit) : nex.walker.transform_node.call(null,lit));
}
} else {
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(lit) : nex.walker.transform_node.call(null,lit));
}
}),(function (p__6555){
var vec__6556 = p__6555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(0),null);
var _retry_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"retry","retry",-614012896)], null);
}),(function (p__6562){
var vec__6563 = p__6562;
var seq__6564 = cljs.core.seq(vec__6563);
var first__6565 = cljs.core.first(seq__6564);
var seq__6564__$1 = cljs.core.next(seq__6564);
var _ = first__6565;
var first__6565__$1 = cljs.core.first(seq__6564__$1);
var seq__6564__$2 = cljs.core.next(seq__6564__$1);
var _open_bracket = first__6565__$1;
var params = seq__6564__$2;
var param_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6166_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6166_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"genericParam","genericParam",-1005589710),cljs.core.first(p1__6166_SHARP_))));
}),params);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,param_nodes);
}),(function (p__6567){
var vec__6569 = p__6567;
var seq__6570 = cljs.core.seq(vec__6569);
var first__6571 = cljs.core.first(seq__6570);
var seq__6570__$1 = cljs.core.next(seq__6570);
var _ = first__6571;
var first__6571__$1 = cljs.core.first(seq__6570__$1);
var seq__6570__$2 = cljs.core.next(seq__6570__$1);
var _open_bracket = first__6571__$1;
var args = seq__6570__$2;
var type_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6172_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6172_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first(p1__6172_SHARP_))));
}),args);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,type_nodes);
}),(function (p__6577){
var vec__6578 = p__6577;
var seq__6579 = cljs.core.seq(vec__6578);
var first__6580 = cljs.core.first(seq__6579);
var seq__6579__$1 = cljs.core.next(seq__6579);
var _ = first__6580;
var first__6580__$1 = cljs.core.first(seq__6579__$1);
var seq__6579__$2 = cljs.core.next(seq__6579__$1);
var first_token = first__6580__$1;
var rest = seq__6579__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_token,"this")){
var vec__6583 = rest;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6583,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6583,(1),null);
var _assign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6583,(2),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6583,(3),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),new cljs.core.Keyword(null,"this","this",-611633625),new cljs.core.Keyword(null,"field","field",-1302436500),nex.walker.token_text(field_name),new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
} else {
var vec__6592 = rest;
var _assign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6592,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),nex.walker.token_text(first_token),new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}
}),(function (p__6597){
var vec__6598 = p__6597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6598,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6598,(1),null);
if(cljs.core.sequential_QMARK_(arg)){
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(arg) : nex.walker.transform_node.call(null,arg));
} else {
return nex.walker.token_text(arg);
}
}),(function (p__6601){
var vec__6602 = p__6601;
var seq__6603 = cljs.core.seq(vec__6602);
var first__6604 = cljs.core.first(seq__6603);
var seq__6603__$1 = cljs.core.next(seq__6603);
var _ = first__6604;
var first__6604__$1 = cljs.core.first(seq__6603__$1);
var seq__6603__$2 = cljs.core.next(seq__6603__$1);
var first_child = first__6604__$1;
var rest_children = seq__6603__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_child,"-")){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unary","unary",-989314568),new cljs.core.Keyword(null,"operator","operator",-1860875338),"-",new cljs.core.Keyword(null,"expr","expr",745722291),(function (){var G__6607 = cljs.core.first(rest_children);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6607) : nex.walker.transform_node.call(null,G__6607));
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_child,"not")){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unary","unary",-989314568),new cljs.core.Keyword(null,"operator","operator",-1860875338),"not",new cljs.core.Keyword(null,"expr","expr",745722291),(function (){var G__6610 = cljs.core.first(rest_children);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6610) : nex.walker.transform_node.call(null,G__6610));
})()], null);
} else {
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(first_child) : nex.walker.transform_node.call(null,first_child));

}
}
}),(function (p__6613){
var vec__6614 = p__6613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614,(0),null);
var parent_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),nex.walker.token_text(parent_name)], null);
}),(function (p__6619){
var vec__6620 = p__6619;
var seq__6621 = cljs.core.seq(vec__6620);
var first__6622 = cljs.core.first(seq__6621);
var seq__6621__$1 = cljs.core.next(seq__6621);
var _ = first__6622;
var tokens = seq__6621__$1;
var parts = cljs.core.vec(tokens);
var then_idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("then",v)){
return i;
} else {
return null;
}
}),parts));
var literals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6186_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",p1__6186_SHARP_);
}),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(parts,(0),then_idx)));
var body = (function (){var G__6625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(then_idx + (1)));
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(G__6625) : nex.walker.transform_node.call(null,G__6625));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),literals,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
}),(function (p__6626){
var vec__6627 = p__6626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627,(0),null);
var _spawn_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627,(1),null);
var _do_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627,(2),null);
var block = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627,(3),null);
var _end_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block))], null);
}),(function (p__6630){
var vec__6631 = p__6630;
var seq__6632 = cljs.core.seq(vec__6631);
var first__6633 = cljs.core.first(seq__6632);
var seq__6632__$1 = cljs.core.next(seq__6632);
var _ = first__6633;
var first__6633__$1 = cljs.core.first(seq__6632__$1);
var seq__6632__$2 = cljs.core.next(seq__6632__$1);
var _open_brace = first__6633__$1;
var elements = seq__6632__$2;
var expr_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6206_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6206_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.first(p1__6206_SHARP_))));
}),elements);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),new cljs.core.Keyword(null,"elements","elements",657646735),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,expr_nodes)], null);
}),(function (p__6634){
var vec__6635 = p__6634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6635,(0),null);
var _old_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6635,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6635,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.Keyword(null,"expr","expr",745722291),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6642){
var vec__6646 = p__6642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"value","value",305978217),parseInt(value)], null);
}),(function (p__6649){
var vec__6650 = p__6649;
var seq__6651 = cljs.core.seq(vec__6650);
var first__6652 = cljs.core.first(seq__6651);
var seq__6651__$1 = cljs.core.next(seq__6651);
var _ = first__6652;
var first__6652__$1 = cljs.core.first(seq__6651__$1);
var seq__6651__$2 = cljs.core.next(seq__6651__$1);
var _do_kw = first__6652__$1;
var rest = seq__6651__$2;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6173_SHARP_){
var fexpr__6653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["do",null,"end",null], null), null);
return (fexpr__6653.cljs$core$IFn$_invoke$arity$1 ? fexpr__6653.cljs$core$IFn$_invoke$arity$1(p1__6173_SHARP_) : fexpr__6653.call(null,p1__6173_SHARP_));
}),rest);
var rescue_clause = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6174_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6174_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rescueClause","rescueClause",600913254),cljs.core.first(p1__6174_SHARP_))));
}),cleaned));
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6175_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6175_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6175_SHARP_))));
}),cleaned));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block)),new cljs.core.Keyword(null,"rescue","rescue",1135767523),(cljs.core.truth_(rescue_clause)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(rescue_clause) : nex.walker.transform_node.call(null,rescue_clause)):null)], null);
}),(function (p__6657){
var vec__6658 = p__6657;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6658,(0),null);
var _raise_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6658,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6658,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"raise","raise",184141061),new cljs.core.Keyword(null,"value","value",305978217),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6664){
var vec__6665 = p__6664;
var seq__6666 = cljs.core.seq(vec__6665);
var first__6667 = cljs.core.first(seq__6666);
var seq__6666__$1 = cljs.core.next(seq__6666);
var _ = first__6667;
var parts = seq__6666__$1;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,parts));
}),(function (p__6668){
var vec__6669 = p__6668;
var seq__6670 = cljs.core.seq(vec__6669);
var first__6671 = cljs.core.first(seq__6670);
var seq__6670__$1 = cljs.core.next(seq__6670);
var _ = first__6671;
var first__6671__$1 = cljs.core.first(seq__6670__$1);
var seq__6670__$2 = cljs.core.next(seq__6670__$1);
var _intern_kw = first__6671__$1;
var tokens = seq__6670__$2;
var parts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6092_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",p1__6092_SHARP_);
}),tokens);
var has_alias_QMARK_ = cljs.core.some((function (p1__6093_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("as",p1__6093_SHARP_);
}),parts);
var main_parts = (cljs.core.truth_(has_alias_QMARK_)?cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__6094_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("as",p1__6094_SHARP_);
}),parts):parts);
var alias = (cljs.core.truth_(has_alias_QMARK_)?cljs.core.last(parts):null);
var class_name = cljs.core.last(main_parts);
var path_parts = cljs.core.butlast(main_parts);
var path = ((cljs.core.seq(path_parts))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",path_parts):null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intern","intern",23820624),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null);
}),(function (p__6677){
var vec__6678 = p__6677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(0),null);
var _when_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(1),null);
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(2),null);
var consequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(3),null);
var _else_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(4),null);
var alternative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(5),null);
var _end_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678,(6),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"condition","condition",1668437652),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(condition) : nex.walker.transform_node.call(null,condition)),new cljs.core.Keyword(null,"consequent","consequent",234514643),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(consequent) : nex.walker.transform_node.call(null,consequent)),new cljs.core.Keyword(null,"alternative","alternative",51666308),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(alternative) : nex.walker.transform_node.call(null,alternative))], null);
}),(function (p__6683){
var vec__6686 = p__6683;
var seq__6687 = cljs.core.seq(vec__6686);
var first__6688 = cljs.core.first(seq__6687);
var seq__6687__$1 = cljs.core.next(seq__6687);
var _ = first__6688;
var nodes = seq__6687__$1;
var cleaned_nodes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,nodes);
var transformed = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,cleaned_nodes);
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6082_SHARP_));
}),transformed);
var functions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6087_SHARP_));
}),transformed);
var interns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6088_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intern","intern",23820624),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6088_SHARP_));
}),transformed);
var imports = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6089_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6089_SHARP_));
}),transformed);
var statements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6090_SHARP_){
return cljs.core.not((function (){var G__6695 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6090_SHARP_);
var fexpr__6694 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"function","function",-2127255473),null,new cljs.core.Keyword(null,"intern","intern",23820624),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null);
return (fexpr__6694.cljs$core$IFn$_invoke$arity$1 ? fexpr__6694.cljs$core$IFn$_invoke$arity$1(G__6695) : fexpr__6694.call(null,G__6695));
})());
}),transformed);
var calls = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6091_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6091_SHARP_));
}),statements);
var function_classes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-def","class-def",-524108044),functions);
var all_classes = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(classes,function_classes));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.vec(imports),new cljs.core.Keyword(null,"interns","interns",693699831),cljs.core.vec(interns),new cljs.core.Keyword(null,"classes","classes",2037804510),all_classes,new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.vec(functions),new cljs.core.Keyword(null,"statements","statements",600349855),cljs.core.vec(statements),new cljs.core.Keyword(null,"calls","calls",-433802344),cljs.core.vec(calls)], null);
}),(function (p__6701){
var vec__6703 = p__6701;
var seq__6705 = cljs.core.seq(vec__6703);
var first__6707 = cljs.core.first(seq__6705);
var seq__6705__$1 = cljs.core.next(seq__6705);
var _ = first__6707;
var first__6707__$1 = cljs.core.first(seq__6705__$1);
var seq__6705__$2 = cljs.core.next(seq__6705__$1);
var _ensure_kw = first__6707__$1;
var assertions = seq__6705__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,assertions);
}),(function (p__6708){
var vec__6709 = p__6708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(1),null);
var _colon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(2),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),nex.walker.token_text(label),new cljs.core.Keyword(null,"condition","condition",1668437652),(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(expr) : nex.walker.transform_node.call(null,expr))], null);
}),(function (p__6712){
var vec__6713 = p__6712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6713,(0),null);
var postfix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6713,(1),null);
return (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(postfix) : nex.walker.transform_node.call(null,postfix));
}),(function (p__6719){
var vec__6720 = p__6719;
var seq__6721 = cljs.core.seq(vec__6720);
var first__6722 = cljs.core.first(seq__6721);
var seq__6721__$1 = cljs.core.next(seq__6721);
var _ = first__6722;
var first__6722__$1 = cljs.core.first(seq__6721__$1);
var seq__6721__$2 = cljs.core.next(seq__6721__$1);
var _constructors_kw = first__6722__$1;
var ctors = seq__6721__$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.walker.transform_node,ctors)], null);
}),(function (p__6723){
var vec__6724 = p__6723;
var seq__6725 = cljs.core.seq(vec__6724);
var first__6726 = cljs.core.first(seq__6725);
var seq__6725__$1 = cljs.core.next(seq__6725);
var _ = first__6726;
var first__6726__$1 = cljs.core.first(seq__6725__$1);
var seq__6725__$2 = cljs.core.next(seq__6725__$1);
var _fn_kw = first__6726__$1;
var rest = seq__6725__$2;
var cleaned = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6130_SHARP_){
var fexpr__6730 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [")",null,"(",null,":",null,"do",null,"end",null], null), null);
return (fexpr__6730.cljs$core$IFn$_invoke$arity$1 ? fexpr__6730.cljs$core$IFn$_invoke$arity$1(p1__6130_SHARP_) : fexpr__6730.call(null,p1__6130_SHARP_));
}),rest);
var params = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6131_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6131_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paramList","paramList",1920214497),cljs.core.first(p1__6131_SHARP_))));
}),cleaned));
var return_type = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6133_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6133_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.first(p1__6133_SHARP_))));
}),cleaned));
var block = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6134_SHARP_){
return ((cljs.core.sequential_QMARK_(p1__6134_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),cljs.core.first(p1__6134_SHARP_))));
}),cleaned));
var params_v = (cljs.core.truth_(params)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(params) : nex.walker.transform_node.call(null,params)):null);
var return_type_v = (cljs.core.truth_(return_type)?(nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(return_type) : nex.walker.transform_node.call(null,return_type)):null);
var body = (nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1 ? nex.walker.transform_node.cljs$core$IFn$_invoke$arity$1(block) : nex.walker.transform_node.call(null,block));
var class_name = nex.walker.generate_unique_fn_name();
var method_name = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_v)));
var method_def = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),method_name,new cljs.core.Keyword(null,"params","params",710516235),params_v,new cljs.core.Keyword(null,"return-type","return-type",1172480871),return_type_v,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null);
var class_def = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),class_name,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Function"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [method_def], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"params","params",710516235),params_v,new cljs.core.Keyword(null,"return-type","return-type",1172480871),return_type_v,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"class-def","class-def",-524108044),class_def], null);
})]);
/**
 * Main tree transformation dispatcher. Uses a data-driven approach
 * with the node-handlers map for transformation.
 */
nex.walker.transform_node = (function nex$walker$transform_node(node){
if((!(cljs.core.sequential_QMARK_(node)))){
return node;
} else {
if(cljs.core.empty_QMARK_(node)){
return null;
} else {
var node_type = cljs.core.first(node);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.walker.node_handlers,node_type);
if(cljs.core.truth_(handler)){
return nex.walker.attach_debug_pos((handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(node) : handler.call(null,node)),node);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unhandled node type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_type)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node-type","node-type",129492462),node_type,new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

}
}
});
/**
 * Transform an ANTLR parse tree into a clean AST.
 * This is the main entry point for tree transformation.
 */
nex.walker.walk_node = (function nex$walker$walk_node(parse_tree){
try{return nex.walker.transform_node(parse_tree);
}catch (e6753){var e = e6753;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to transform parse tree",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parse-tree","parse-tree",-942256622),parse_tree,new cljs.core.Keyword(null,"cause","cause",231901252),e.message], null),e);
}});

//# sourceMappingURL=nex.walker.js.map
