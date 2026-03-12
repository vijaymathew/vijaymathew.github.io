goog.provide('nex.interpreter');
nex.interpreter.nex_array = (function nex$interpreter$nex_array(){
return [];
});
nex.interpreter.nex_array_from = (function nex$interpreter$nex_array_from(coll){
return Array.from(cljs.core.to_array(coll));
});
nex.interpreter.nex_array_QMARK_ = (function nex$interpreter$nex_array_QMARK_(v){
return cljs.core.array_QMARK_(v);
});
nex.interpreter.nex_array_get = (function nex$interpreter$nex_array_get(arr,idx){
return (arr[idx]);
});
nex.interpreter.nex_array_add = (function nex$interpreter$nex_array_add(arr,val){
return arr.push(val);
});
nex.interpreter.nex_array_add_at = (function nex$interpreter$nex_array_add_at(arr,idx,val){
return arr.splice(idx,(0),val);
});
nex.interpreter.nex_array_set = (function nex$interpreter$nex_array_set(arr,idx,val){
return (arr[idx] = val);
});
nex.interpreter.nex_array_size = (function nex$interpreter$nex_array_size(arr){
return arr.length;
});
nex.interpreter.nex_array_empty_QMARK_ = (function nex$interpreter$nex_array_empty_QMARK_(arr){
return (arr.length === (0));
});
nex.interpreter.nex_array_contains = (function nex$interpreter$nex_array_contains(arr,elem){
return arr.includes(elem);
});
nex.interpreter.nex_array_index_of = (function nex$interpreter$nex_array_index_of(arr,elem){
return arr.indexOf(elem);
});
nex.interpreter.nex_array_remove = (function nex$interpreter$nex_array_remove(arr,idx){
return arr.splice(idx,(1));
});
nex.interpreter.nex_array_reverse = (function nex$interpreter$nex_array_reverse(arr){
return Array.from(arr.slice().reverse());
});
nex.interpreter.nex_array_sort = (function nex$interpreter$nex_array_sort(arr){
return arr.sort();
});
nex.interpreter.nex_array_slice = (function nex$interpreter$nex_array_slice(arr,start,end){
return arr.slice(start,end);
});
nex.interpreter.nex_array_str = (function nex$interpreter$nex_array_str(arr){
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(arr))))+"]");
});
nex.interpreter.nex_map = (function nex$interpreter$nex_map(){
return (new Map());
});
nex.interpreter.nex_map_from = (function nex$interpreter$nex_map_from(pairs){
return (new Map(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,pairs))));
});
nex.interpreter.nex_map_QMARK_ = (function nex$interpreter$nex_map_QMARK_(v){
return (v instanceof Map);
});
nex.interpreter.nex_map_get = (function nex$interpreter$nex_map_get(m,key){
return m.get(key);
});
nex.interpreter.nex_map_put = (function nex$interpreter$nex_map_put(m,key,val){
return m.set(key,val);
});
nex.interpreter.nex_map_size = (function nex$interpreter$nex_map_size(m){
return m.size;
});
nex.interpreter.nex_map_empty_QMARK_ = (function nex$interpreter$nex_map_empty_QMARK_(m){
return (m.size === (0));
});
nex.interpreter.nex_map_contains_key = (function nex$interpreter$nex_map_contains_key(m,key){
return m.has(key);
});
nex.interpreter.nex_map_keys = (function nex$interpreter$nex_map_keys(m){
return cljs.core.vec(cljs.core.es6_iterator_seq(m.keys()));
});
nex.interpreter.nex_map_values = (function nex$interpreter$nex_map_values(m){
return cljs.core.vec(cljs.core.es6_iterator_seq(m.values()));
});
nex.interpreter.nex_map_remove = (function nex$interpreter$nex_map_remove(m,key){
return m.delete(key);
});
nex.interpreter.nex_map_str = (function nex$interpreter$nex_map_str(m){
var entries = (function (){var iter__5628__auto__ = (function nex$interpreter$nex_map_str_$_iter__6082(s__6083){
return (new cljs.core.LazySeq(null,(function (){
var s__6083__$1 = s__6083;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6083__$1);
if(temp__5823__auto__){
var s__6083__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6083__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6083__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6085 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6084 = (0);
while(true){
if((i__6084 < size__5627__auto__)){
var vec__6086 = cljs.core._nth(c__5626__auto__,i__6084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6086,(1),null);
cljs.core.chunk_append(b__6085,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(k) : nex.interpreter.nex_format_value.call(null,k)))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_format_value.call(null,v)))));

var G__7033 = (i__6084 + (1));
i__6084 = G__7033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6085),nex$interpreter$nex_map_str_$_iter__6082(cljs.core.chunk_rest(s__6083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6085),null);
}
} else {
var vec__6089 = cljs.core.first(s__6083__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(1),null);
return cljs.core.cons((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(k) : nex.interpreter.nex_format_value.call(null,k)))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_format_value.call(null,v)))),nex$interpreter$nex_map_str_$_iter__6082(cljs.core.rest(s__6083__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.es6_iterator_seq(m.entries()));
})();
return (""+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",entries))+"}");
});
nex.interpreter.nex_set = (function nex$interpreter$nex_set(){
return (new Set());
});
nex.interpreter.nex_set_from = (function nex$interpreter$nex_set_from(coll){
return (new Set(cljs.core.to_array(coll)));
});
nex.interpreter.nex_set_QMARK_ = (function nex$interpreter$nex_set_QMARK_(v){
return (v instanceof Set);
});
nex.interpreter.nex_set_contains = (function nex$interpreter$nex_set_contains(s,v){
return s.has(v);
});
nex.interpreter.nex_set_size = (function nex$interpreter$nex_set_size(s){
return s.size;
});
nex.interpreter.nex_set_empty_QMARK_ = (function nex$interpreter$nex_set_empty_QMARK_(s){
return (s.size === (0));
});
nex.interpreter.nex_set_union = (function nex$interpreter$nex_set_union(a,b){
return nex.interpreter.nex_set_from(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.es6_iterator_seq(a.values()),cljs.core.es6_iterator_seq(b.values())));
});
nex.interpreter.nex_set_difference = (function nex$interpreter$nex_set_difference(a,b){
return nex.interpreter.nex_set_from(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6093_SHARP_){
return b.has(p1__6093_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_intersection = (function nex$interpreter$nex_set_intersection(a,b){
return nex.interpreter.nex_set_from(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6094_SHARP_){
return b.has(p1__6094_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_symmetric_difference = (function nex$interpreter$nex_set_symmetric_difference(a,b){
return nex.interpreter.nex_set_from(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6095_SHARP_){
return b.has(p1__6095_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6096_SHARP_){
return a.has(p1__6096_SHARP_);
}),cljs.core.es6_iterator_seq(b.values()))));
});
nex.interpreter.nex_set_str = (function nex$interpreter$nex_set_str(s){
return (""+"#{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,cljs.core.es6_iterator_seq(s.values()))))+"}");
});
nex.interpreter.int32 = (function nex$interpreter$int32(n){
return (n | (0));
});
nex.interpreter.bit_index = (function nex$interpreter$bit_index(n){
return (n & (31));
});
nex.interpreter.nex_bitwise_left_shift = (function nex$interpreter$nex_bitwise_left_shift(n,shift){
return nex.interpreter.int32((nex.interpreter.int32(n) << nex.interpreter.bit_index(shift)));
});
nex.interpreter.nex_bitwise_right_shift = (function nex$interpreter$nex_bitwise_right_shift(n,shift){
return nex.interpreter.int32((nex.interpreter.int32(n) >> nex.interpreter.bit_index(shift)));
});
nex.interpreter.nex_bitwise_logical_right_shift = (function nex$interpreter$nex_bitwise_logical_right_shift(n,shift){
return (nex.interpreter.int32(n) >>> nex.interpreter.bit_index(shift));
});
nex.interpreter.nex_bitwise_rotate_left = (function nex$interpreter$nex_bitwise_rotate_left(n,shift){
var x = nex.interpreter.int32(n);
var s = nex.interpreter.bit_index(shift);
return nex.interpreter.int32(((x << s) | (x >>> ((32) - s))));
});
nex.interpreter.nex_bitwise_rotate_right = (function nex$interpreter$nex_bitwise_rotate_right(n,shift){
var x = nex.interpreter.int32(n);
var s = nex.interpreter.bit_index(shift);
return nex.interpreter.int32(((x >>> s) | (x << ((32) - s))));
});
nex.interpreter.nex_bitwise_and = (function nex$interpreter$nex_bitwise_and(n,other){
return nex.interpreter.int32((nex.interpreter.int32(n) & nex.interpreter.int32(other)));
});
nex.interpreter.nex_bitwise_or = (function nex$interpreter$nex_bitwise_or(n,other){
return nex.interpreter.int32((nex.interpreter.int32(n) | nex.interpreter.int32(other)));
});
nex.interpreter.nex_bitwise_xor = (function nex$interpreter$nex_bitwise_xor(n,other){
return nex.interpreter.int32((nex.interpreter.int32(n) ^ nex.interpreter.int32(other)));
});
nex.interpreter.nex_bitwise_not = (function nex$interpreter$nex_bitwise_not(n){
return nex.interpreter.int32((~ nex.interpreter.int32(n)));
});
nex.interpreter.nex_bitwise_is_set = (function nex$interpreter$nex_bitwise_is_set(n,idx){
return (!(((nex.interpreter.int32(n) & ((1) << nex.interpreter.bit_index(idx))) === (0))));
});
nex.interpreter.nex_bitwise_set = (function nex$interpreter$nex_bitwise_set(n,idx){
return nex.interpreter.int32((nex.interpreter.int32(n) | ((1) << nex.interpreter.bit_index(idx))));
});
nex.interpreter.nex_bitwise_unset = (function nex$interpreter$nex_bitwise_unset(n,idx){
return nex.interpreter.int32((nex.interpreter.int32(n) & (~ ((1) << nex.interpreter.bit_index(idx)))));
});
nex.interpreter.nex_abs = (function nex$interpreter$nex_abs(n){
return Math.abs(n);
});
nex.interpreter.nex_round = (function nex$interpreter$nex_round(n){
return Math.round(n);
});
/**
 * Raise an integral base to an integral exponent, preserving an integral result.
 * Negative exponents are rejected because they cannot be represented as integers.
 */
nex.interpreter.nex_int_pow = (function nex$interpreter$nex_int_pow(base,exponent){
if((exponent < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Integral exponentiation requires a non-negative exponent",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),base,new cljs.core.Keyword(null,"exponent","exponent",2083463617),exponent], null));
} else {
}

var acc = (1);
var b = base;
var e = exponent;
while(true){
if((e === (0))){
return acc;
} else {
var G__7039 = ((cljs.core.odd_QMARK_(e))?(acc * b):acc);
var G__7040 = (b * b);
var G__7041 = cljs.core.quot(e,(2));
acc = G__7039;
b = G__7040;
e = G__7041;
continue;
}
break;
}
});
nex.interpreter.nex_console_print = (function nex$interpreter$nex_console_print(msg){
return process.stdout.write((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));
});
nex.interpreter.nex_console_println = (function nex$interpreter$nex_console_println(msg){
return console.log(msg);
});
nex.interpreter.nex_console_error = (function nex$interpreter$nex_console_error(msg){
return console.error(msg);
});
nex.interpreter.nex_console_newline = (function nex$interpreter$nex_console_newline(){
return console.log("");
});
nex.interpreter.nex_console_read_line = (function nex$interpreter$nex_console_read_line(){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("read-line not supported in ClojureScript",cljs.core.PersistentArrayMap.EMPTY);
});
nex.interpreter.nex_parse_integer64_string = (function nex$interpreter$nex_parse_integer64_string(s){
var trimmed = clojure.string.trim(s);
var negative_QMARK_ = clojure.string.starts_with_QMARK_(trimmed,"-");
var unsigned = ((negative_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,(1)):trimmed);
var normalized = clojure.string.replace(unsigned,"_","");
var vec__6097 = ((clojure.string.starts_with_QMARK_(normalized,"0b"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(normalized,(2))], null):((clojure.string.starts_with_QMARK_(normalized,"0o"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(normalized,(2))], null):((clojure.string.starts_with_QMARK_(normalized,"0x"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(normalized,(2))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),normalized], null)
)));
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6097,(0),null);
var digits = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6097,(1),null);
var parsed = parseInt(digits,radix);
if(negative_QMARK_){
return (- parsed);
} else {
return parsed;
}
});
nex.interpreter.nex_parse_integer = (function nex$interpreter$nex_parse_integer(s){
return nex.interpreter.nex_parse_integer64_string(s);
});
nex.interpreter.nex_parse_real = (function nex$interpreter$nex_parse_real(s){
return parseFloat(s);
});
nex.interpreter.nex_file_read = (function nex$interpreter$nex_file_read(path){
return require("fs").readFileSync(path,"utf8").toString();
});
nex.interpreter.nex_file_write = (function nex$interpreter$nex_file_write(path,content){
return require("fs").writeFileSync(path,content,"utf8");
});
nex.interpreter.nex_file_append = (function nex$interpreter$nex_file_append(path,content){
return require("fs").appendFileSync(path,content,"utf8");
});
nex.interpreter.nex_file_exists_QMARK_ = (function nex$interpreter$nex_file_exists_QMARK_(path){
return require("fs").existsSync(path);
});
nex.interpreter.nex_file_delete = (function nex$interpreter$nex_file_delete(path){
return require("fs").unlinkSync(path);
});
nex.interpreter.nex_file_lines = (function nex$interpreter$nex_file_lines(path){
return nex.interpreter.nex_array_from(require("fs").readFileSync(path,"utf8").toString().split("\n"));
});
nex.interpreter.nex_process_getenv = (function nex$interpreter$nex_process_getenv(name){
return (process.env[name]);
});
nex.interpreter.nex_process_setenv = (function nex$interpreter$nex_process_setenv(name,value){
return (process.env[name] = value);
});
nex.interpreter.nex_process_command_line = (function nex$interpreter$nex_process_command_line(){
return nex.interpreter.nex_array_from(cljs.core.vec(process.argv));
});
nex.interpreter.nex_console_QMARK_ = (function nex$interpreter$nex_console_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Console","Console",-423236809))));
});
nex.interpreter.nex_file_QMARK_ = (function nex$interpreter$nex_file_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"File","File",-1707525042))));
});
nex.interpreter.nex_process_QMARK_ = (function nex$interpreter$nex_process_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Process","Process",-799294660))));
});
nex.interpreter.nex_window_QMARK_ = (function nex$interpreter$nex_window_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Window","Window",-1779391782))));
});
nex.interpreter.nex_turtle_QMARK_ = (function nex$interpreter$nex_turtle_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Turtle","Turtle",572208937))));
});
nex.interpreter.nex_image_QMARK_ = (function nex$interpreter$nex_image_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Image","Image",-1429161147))));
});
nex.interpreter.nex_task_QMARK_ = (function nex$interpreter$nex_task_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Task","Task",-409968362))));
});
nex.interpreter.nex_channel_QMARK_ = (function nex$interpreter$nex_channel_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"Channel","Channel",1087781355))));
});
nex.interpreter.nex_array_cursor_QMARK_ = (function nex$interpreter$nex_array_cursor_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167))));
});
nex.interpreter.nex_string_cursor_QMARK_ = (function nex$interpreter$nex_string_cursor_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462))));
});
nex.interpreter.nex_map_cursor_QMARK_ = (function nex$interpreter$nex_map_cursor_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766))));
});
nex.interpreter.nex_set_cursor_QMARK_ = (function nex$interpreter$nex_set_cursor_QMARK_(v){
return ((cljs.core.map_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688))));
});
nex.interpreter.nex_coll_get = (function nex$interpreter$nex_coll_get(coll,idx){
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(coll))){
return nex.interpreter.nex_array_get(coll,idx);
} else {
if(nex.interpreter.nex_map_QMARK_(coll)){
return nex.interpreter.nex_map_get(coll,idx);
} else {
return (coll[idx]);

}
}
});
nex.interpreter.nex_char_QMARK_ = (function nex$interpreter$nex_char_QMARK_(v){
return ((typeof v === 'string') && ((v.length === (1))));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
nex.interpreter.Environment = (function (bindings,parent,__meta,__extmap,__hash){
this.bindings = bindings;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6101,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6105 = k6101;
var G__6105__$1 = (((G__6105 instanceof cljs.core.Keyword))?G__6105.fqn:null);
switch (G__6105__$1) {
case "bindings":
return self__.bindings;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6101,else__5451__auto__);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6106){
var vec__6107 = p__6106;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6107,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(nex.interpreter.Environment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#nex.interpreter.Environment{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6100){
var self__ = this;
var G__6100__$1 = this;
return (new cljs.core.RecordIter((0),G__6100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nex.interpreter.Environment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(nex.interpreter.Environment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
}));

(nex.interpreter.Environment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (354670208 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(nex.interpreter.Environment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6102,other6103){
var self__ = this;
var this6102__$1 = this;
return (((!((other6103 == null)))) && ((((this6102__$1.constructor === other6103.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6102__$1.bindings,other6103.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6102__$1.parent,other6103.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6102__$1.__extmap,other6103.__extmap)))))))));
}));

(nex.interpreter.Environment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6101){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6110 = k6101;
var G__6110__$1 = (((G__6110 instanceof cljs.core.Keyword))?G__6110.fqn:null);
switch (G__6110__$1) {
case "bindings":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6101);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6100){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6111 = cljs.core.keyword_identical_QMARK_;
var expr__6112 = k__5457__auto__;
if(cljs.core.truth_((pred__6111.cljs$core$IFn$_invoke$arity$2 ? pred__6111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6112) : pred__6111.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6112)))){
return (new nex.interpreter.Environment(G__6100,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6111.cljs$core$IFn$_invoke$arity$2 ? pred__6111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6112) : pred__6111.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6112)))){
return (new nex.interpreter.Environment(self__.bindings,G__6100,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6100),null));
}
}
}));

(nex.interpreter.Environment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6100){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,G__6100,self__.__extmap,self__.__hash));
}));

(nex.interpreter.Environment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(nex.interpreter.Environment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
}));

(nex.interpreter.Environment.cljs$lang$type = true);

(nex.interpreter.Environment.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"nex.interpreter/Environment",null,(1),null));
}));

(nex.interpreter.Environment.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"nex.interpreter/Environment");
}));

/**
 * Positional factory function for nex.interpreter/Environment.
 */
nex.interpreter.__GT_Environment = (function nex$interpreter$__GT_Environment(bindings,parent){
return (new nex.interpreter.Environment(bindings,parent,null,null,null));
});

/**
 * Factory function for nex.interpreter/Environment, taking a map of keywords to field values.
 */
nex.interpreter.map__GT_Environment = (function nex$interpreter$map__GT_Environment(G__6104){
var extmap__5490__auto__ = (function (){var G__6114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6104,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__6104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6114);
} else {
return G__6114;
}
})();
return (new nex.interpreter.Environment(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__6104),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__6104),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new environment, optionally with a parent scope.
 */
nex.interpreter.make_env = (function nex$interpreter$make_env(var_args){
var G__6116 = arguments.length;
switch (G__6116) {
case 0:
return nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(null);
}));

(nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return nex.interpreter.__GT_Environment(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),parent);
}));

(nex.interpreter.make_env.cljs$lang$maxFixedArity = 1);

/**
 * Look up a variable in the environment, searching parent scopes if needed.
 */
nex.interpreter.env_lookup = (function nex$interpreter$env_lookup(env,var_name){
var bindings = cljs.core.deref(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.contains_QMARK_(bindings,var_name)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings,var_name);
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5821__auto__)){
var parent = temp__5821__auto__;
return (nex.interpreter.env_lookup.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.env_lookup.cljs$core$IFn$_invoke$arity$2(parent,var_name) : nex.interpreter.env_lookup.call(null,parent,var_name));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name], null));
}
}
});
/**
 * Define a variable in the current environment.
 */
nex.interpreter.env_define = (function nex$interpreter$env_define(env,var_name,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,var_name,value);

return value;
});
/**
 * Set a variable in the environment where it's defined.
 */
nex.interpreter.env_set_BANG_ = (function nex$interpreter$env_set_BANG_(env,var_name,value){
if(cljs.core.contains_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(env)),var_name)){
return nex.interpreter.env_define(env,var_name,value);
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5821__auto__)){
var parent = temp__5821__auto__;
return (nex.interpreter.env_set_BANG_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.env_set_BANG_.cljs$core$IFn$_invoke$arity$3(parent,var_name,value) : nex.interpreter.env_set_BANG_.call(null,parent,var_name,value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),var_name], null));
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
nex.interpreter.Context = (function (classes,globals,current_env,output,imports,specialized_classes,__meta,__extmap,__hash){
this.classes = classes;
this.globals = globals;
this.current_env = current_env;
this.output = output;
this.imports = imports;
this.specialized_classes = specialized_classes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6118,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6122 = k6118;
var G__6122__$1 = (((G__6122 instanceof cljs.core.Keyword))?G__6122.fqn:null);
switch (G__6122__$1) {
case "classes":
return self__.classes;

break;
case "globals":
return self__.globals;

break;
case "current-env":
return self__.current_env;

break;
case "output":
return self__.output;

break;
case "imports":
return self__.imports;

break;
case "specialized-classes":
return self__.specialized_classes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6118,else__5451__auto__);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6123){
var vec__6124 = p__6123;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6124,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(nex.interpreter.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#nex.interpreter.Context{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"classes","classes",2037804510),self__.classes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"globals","globals",1713542270),self__.globals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current-env","current-env",-1321489691),self__.current_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output","output",-1105869043),self__.output],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"imports","imports",-1249933394),self__.imports],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),self__.specialized_classes],null))], null),self__.__extmap));
}));

(nex.interpreter.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6117){
var self__ = this;
var G__6117__$1 = this;
return (new cljs.core.RecordIter((0),G__6117__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nex.interpreter.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(nex.interpreter.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,self__.__hash));
}));

(nex.interpreter.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(nex.interpreter.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-171460852 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(nex.interpreter.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6119,other6120){
var self__ = this;
var this6119__$1 = this;
return (((!((other6120 == null)))) && ((((this6119__$1.constructor === other6120.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.classes,other6120.classes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.globals,other6120.globals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.current_env,other6120.current_env)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.output,other6120.output)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.imports,other6120.imports)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.specialized_classes,other6120.specialized_classes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6119__$1.__extmap,other6120.__extmap)))))))))))))))));
}));

(nex.interpreter.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-env","current-env",-1321489691),null,new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"imports","imports",-1249933394),null,new cljs.core.Keyword(null,"globals","globals",1713542270),null,new cljs.core.Keyword(null,"classes","classes",2037804510),null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6118){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6127 = k6118;
var G__6127__$1 = (((G__6127 instanceof cljs.core.Keyword))?G__6127.fqn:null);
switch (G__6127__$1) {
case "classes":
case "globals":
case "current-env":
case "output":
case "imports":
case "specialized-classes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6118);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6117){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6128 = cljs.core.keyword_identical_QMARK_;
var expr__6129 = k__5457__auto__;
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6129)))){
return (new nex.interpreter.Context(G__6117,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6129)))){
return (new nex.interpreter.Context(self__.classes,G__6117,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6129)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,G__6117,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__6129)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,G__6117,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6129)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,G__6117,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6128.cljs$core$IFn$_invoke$arity$2 ? pred__6128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6129) : pred__6128.call(null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6129)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,G__6117,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6117),null));
}
}
}
}
}
}
}));

(nex.interpreter.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"classes","classes",2037804510),self__.classes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"globals","globals",1713542270),self__.globals,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),self__.current_env,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"output","output",-1105869043),self__.output,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"imports","imports",-1249933394),self__.imports,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),self__.specialized_classes,null))], null),self__.__extmap));
}));

(nex.interpreter.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6117){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,G__6117,self__.__extmap,self__.__hash));
}));

(nex.interpreter.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(nex.interpreter.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"classes","classes",-616631259,null),new cljs.core.Symbol(null,"globals","globals",-940893499,null),new cljs.core.Symbol(null,"current-env","current-env",319041836,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"imports","imports",390598133,null),new cljs.core.Symbol(null,"specialized-classes","specialized-classes",-968311579,null)], null);
}));

(nex.interpreter.Context.cljs$lang$type = true);

(nex.interpreter.Context.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"nex.interpreter/Context",null,(1),null));
}));

(nex.interpreter.Context.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"nex.interpreter/Context");
}));

/**
 * Positional factory function for nex.interpreter/Context.
 */
nex.interpreter.__GT_Context = (function nex$interpreter$__GT_Context(classes,globals,current_env,output,imports,specialized_classes){
return (new nex.interpreter.Context(classes,globals,current_env,output,imports,specialized_classes,null,null,null));
});

/**
 * Factory function for nex.interpreter/Context, taking a map of keywords to field values.
 */
nex.interpreter.map__GT_Context = (function nex$interpreter$map__GT_Context(G__6121){
var extmap__5490__auto__ = (function (){var G__6131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6121,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], 0));
if(cljs.core.record_QMARK_(G__6121)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6131);
} else {
return G__6131;
}
})();
return (new nex.interpreter.Context(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(G__6121),new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(G__6121),new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(G__6121),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__6121),new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(G__6121),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(G__6121),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create the built-in Function base class definition.
 */
nex.interpreter.build_function_base_class = (function nex$interpreter$build_function_base_class(){
var make_method = (function (n){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"params","params",710516235),((((0) === (0)))?cljs.core.PersistentVector.EMPTY:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null);
});
var methods$ = cljs.core.vec(cljs.core.cons(make_method((0)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(make_method,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(33)))));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Function",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),methods$], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create the built-in Cursor base class definition.
 * Cursor defines the iteration interface: start, item, next, at_end.
 * Array, String, and Map are conceptual subclasses.
 */
nex.interpreter.build_cursor_base_class = (function nex$interpreter$build_cursor_base_class(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Cursor",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"item",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"next",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"at_end",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null)], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create the built-in deferred Comparable class.
 */
nex.interpreter.build_comparable_base_class = (function nex$interpreter$build_comparable_base_class(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Comparable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"compare",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null)], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create the built-in Any root class definition.
 */
nex.interpreter.build_any_base_class = (function nex$interpreter$build_any_base_class(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Any",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create the built-in deferred Hashable class.
 */
nex.interpreter.build_hashable_base_class = (function nex$interpreter$build_hashable_base_class(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Hashable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"hash",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null)], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create a built-in scalar class definition that implements Comparable and Hashable.
 */
nex.interpreter.build_builtin_scalar_class = (function nex$interpreter$build_builtin_scalar_class(name){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Any"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create a new runtime context.
 */
nex.interpreter.make_context = (function nex$interpreter$make_context(){
var globals = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$0();
var ctx = nex.interpreter.__GT_Context(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),globals,globals,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__6132_7055 = ctx;
var G__6133_7056 = nex.interpreter.build_any_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6132_7055,G__6133_7056) : nex.interpreter.register_class.call(null,G__6132_7055,G__6133_7056));

var G__6134_7057 = ctx;
var G__6135_7058 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6134_7057,G__6135_7058) : nex.interpreter.register_class.call(null,G__6134_7057,G__6135_7058));

var G__6136_7059 = ctx;
var G__6137_7060 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6136_7059,G__6137_7060) : nex.interpreter.register_class.call(null,G__6136_7059,G__6137_7060));

var G__6138_7061 = ctx;
var G__6139_7062 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6138_7061,G__6139_7062) : nex.interpreter.register_class.call(null,G__6138_7061,G__6139_7062));

var G__6140_7063 = ctx;
var G__6141_7064 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6140_7063,G__6141_7064) : nex.interpreter.register_class.call(null,G__6140_7063,G__6141_7064));

var seq__6142_7065 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6143_7066 = null;
var count__6144_7067 = (0);
var i__6145_7068 = (0);
while(true){
if((i__6145_7068 < count__6144_7067)){
var scalar_7069 = chunk__6143_7066.cljs$core$IIndexed$_nth$arity$2(null,i__6145_7068);
var G__6150_7070 = ctx;
var G__6151_7071 = nex.interpreter.build_builtin_scalar_class(scalar_7069);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6150_7070,G__6151_7071) : nex.interpreter.register_class.call(null,G__6150_7070,G__6151_7071));


var G__7072 = seq__6142_7065;
var G__7073 = chunk__6143_7066;
var G__7074 = count__6144_7067;
var G__7075 = (i__6145_7068 + (1));
seq__6142_7065 = G__7072;
chunk__6143_7066 = G__7073;
count__6144_7067 = G__7074;
i__6145_7068 = G__7075;
continue;
} else {
var temp__5823__auto___7076 = cljs.core.seq(seq__6142_7065);
if(temp__5823__auto___7076){
var seq__6142_7077__$1 = temp__5823__auto___7076;
if(cljs.core.chunked_seq_QMARK_(seq__6142_7077__$1)){
var c__5673__auto___7078 = cljs.core.chunk_first(seq__6142_7077__$1);
var G__7079 = cljs.core.chunk_rest(seq__6142_7077__$1);
var G__7080 = c__5673__auto___7078;
var G__7081 = cljs.core.count(c__5673__auto___7078);
var G__7082 = (0);
seq__6142_7065 = G__7079;
chunk__6143_7066 = G__7080;
count__6144_7067 = G__7081;
i__6145_7068 = G__7082;
continue;
} else {
var scalar_7083 = cljs.core.first(seq__6142_7077__$1);
var G__6152_7084 = ctx;
var G__6153_7085 = nex.interpreter.build_builtin_scalar_class(scalar_7083);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6152_7084,G__6153_7085) : nex.interpreter.register_class.call(null,G__6152_7084,G__6153_7085));


var G__7086 = cljs.core.next(seq__6142_7077__$1);
var G__7087 = null;
var G__7088 = (0);
var G__7089 = (0);
seq__6142_7065 = G__7086;
chunk__6143_7066 = G__7087;
count__6144_7067 = G__7088;
i__6145_7068 = G__7089;
continue;
}
} else {
}
}
break;
}

return ctx;
});
/**
 * Register a class definition in the context.
 */
nex.interpreter.register_class = (function nex$interpreter$register_class(ctx,class_def){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def),class_def);
});
/**
 * Look up a class definition by name.
 */
nex.interpreter.lookup_class = (function nex$interpreter$lookup_class(ctx,class_name){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}
}
});
/**
 * Look up a class definition by name, or nil if not found.
 */
nex.interpreter.lookup_class_if_exists = (function nex$interpreter$lookup_class_if_exists(ctx,class_name){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
}
});
/**
 * Register a specialized (type-realized) class in the context.
 */
nex.interpreter.register_specialized_class = (function nex$interpreter$register_specialized_class(ctx,class_def){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def),class_def);
});
/**
 * Look up a specialized class definition by name.
 */
nex.interpreter.lookup_specialized_class = (function nex$interpreter$lookup_specialized_class(ctx,class_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
});
/**
 * Build a specialized class name like Box[Integer].
 */
nex.interpreter.specialized_class_name = (function nex$interpreter$specialized_class_name(base_name,type_args){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_name)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",type_args))+"]");
});
/**
 * Replace type parameter strings with concrete types using type-map.
 */
nex.interpreter.substitute_type = (function nex$interpreter$substitute_type(type_expr,type_map){
if(typeof type_expr === 'string'){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,type_expr,type_expr);
} else {
if(cljs.core.map_QMARK_(type_expr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type_expr,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6154_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6154_SHARP_,p1__6154_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (args){
if(cljs.core.truth_(args)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6155_SHARP_){
return (nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2(p1__6155_SHARP_,type_map) : nex.interpreter.substitute_type.call(null,p1__6155_SHARP_,type_map));
}),args);
} else {
return null;
}
}));
} else {
return type_expr;

}
}
});
/**
 * Walk class body sections, substituting types using type-map.
 */
nex.interpreter.substitute_in_body = (function nex$interpreter$substitute_in_body(body,type_map){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(section,new cljs.core.Keyword(null,"members","members",159001018),(function (members){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (member){
var G__6159 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member);
var G__6159__$1 = (((G__6159 instanceof cljs.core.Keyword))?G__6159.fqn:null);
switch (G__6159__$1) {
case "field":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"field-type","field-type",2075623493),(function (p1__6156_SHARP_){
return nex.interpreter.substitute_type(p1__6156_SHARP_,type_map);
}));

break;
case "method":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6157_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6157_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
return nex.interpreter.substitute_type(t,type_map);
}));
}),params);
} else {
return null;
}
})),new cljs.core.Keyword(null,"return-type","return-type",1172480871),(function (rt){
if(cljs.core.truth_(rt)){
return nex.interpreter.substitute_type(rt,type_map);
} else {
return null;
}
}));

break;
default:
return member;

}
}),members);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(section,new cljs.core.Keyword(null,"constructors","constructors",1994499075),(function (ctors){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (ctor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctor,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6158_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6158_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
return nex.interpreter.substitute_type(t,type_map);
}));
}),params);
} else {
return null;
}
}));
}),ctors);
}));
} else {
return section;

}
}
}),body);
});
/**
 * Create a specialized version of a generic class with concrete type args.
 */
nex.interpreter.specialize_class = (function nex$interpreter$specialize_class(generic_class_def,type_args){
var generic_params = new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(generic_class_def);
var type_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (param,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg], null);
}),generic_params,type_args));
var spec_name = nex.interpreter.specialized_class_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def),type_args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(generic_class_def,new cljs.core.Keyword(null,"name","name",1843675177),spec_name),new cljs.core.Keyword(null,"template-name","template-name",271241761),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def)),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null),new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__6160_SHARP_){
return nex.interpreter.substitute_in_body(p1__6160_SHARP_,type_map);
}));
});
/**
 * Add output to the context (for print statements).
 */
nex.interpreter.add_output = (function nex$interpreter$add_output(ctx,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,value);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
nex.interpreter.NexObject = (function (class_name,fields,closure_env,__meta,__extmap,__hash){
this.class_name = class_name;
this.fields = fields;
this.closure_env = closure_env;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6162,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6166 = k6162;
var G__6166__$1 = (((G__6166 instanceof cljs.core.Keyword))?G__6166.fqn:null);
switch (G__6166__$1) {
case "class-name":
return self__.class_name;

break;
case "fields":
return self__.fields;

break;
case "closure-env":
return self__.closure_env;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6162,else__5451__auto__);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6167){
var vec__6168 = p__6167;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6168,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6168,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(nex.interpreter.NexObject.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#nex.interpreter.NexObject{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env],null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6161){
var self__ = this;
var G__6161__$1 = this;
return (new cljs.core.RecordIter((0),G__6161__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(nex.interpreter.NexObject.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,self__.__hash));
}));

(nex.interpreter.NexObject.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (1166685165 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6163,other6164){
var self__ = this;
var this6163__$1 = this;
return (((!((other6164 == null)))) && ((((this6163__$1.constructor === other6164.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6163__$1.class_name,other6164.class_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6163__$1.fields,other6164.fields)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6163__$1.closure_env,other6164.closure_env)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6163__$1.__extmap,other6164.__extmap)))))))))));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"closure-env","closure-env",825340360),null,new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"class-name","class-name",945142584),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6162){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6171 = k6162;
var G__6171__$1 = (((G__6171 instanceof cljs.core.Keyword))?G__6171.fqn:null);
switch (G__6171__$1) {
case "class-name":
case "fields":
case "closure-env":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6162);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6161){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6172 = cljs.core.keyword_identical_QMARK_;
var expr__6173 = k__5457__auto__;
if(cljs.core.truth_((pred__6172.cljs$core$IFn$_invoke$arity$2 ? pred__6172.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6173) : pred__6172.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6173)))){
return (new nex.interpreter.NexObject(G__6161,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6172.cljs$core$IFn$_invoke$arity$2 ? pred__6172.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6173) : pred__6172.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6173)))){
return (new nex.interpreter.NexObject(self__.class_name,G__6161,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6172.cljs$core$IFn$_invoke$arity$2 ? pred__6172.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6173) : pred__6172.call(null,new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6173)))){
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,G__6161,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6161),null));
}
}
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env,null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6161){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,G__6161,self__.__extmap,self__.__hash));
}));

(nex.interpreter.NexObject.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(nex.interpreter.NexObject.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"class-name","class-name",-1709293185,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"closure-env","closure-env",-1829095409,null)], null);
}));

(nex.interpreter.NexObject.cljs$lang$type = true);

(nex.interpreter.NexObject.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"nex.interpreter/NexObject",null,(1),null));
}));

(nex.interpreter.NexObject.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"nex.interpreter/NexObject");
}));

/**
 * Positional factory function for nex.interpreter/NexObject.
 */
nex.interpreter.__GT_NexObject = (function nex$interpreter$__GT_NexObject(class_name,fields,closure_env){
return (new nex.interpreter.NexObject(class_name,fields,closure_env,null,null,null));
});

/**
 * Factory function for nex.interpreter/NexObject, taking a map of keywords to field values.
 */
nex.interpreter.map__GT_NexObject = (function nex$interpreter$map__GT_NexObject(G__6165){
var extmap__5490__auto__ = (function (){var G__6175 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6165,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], 0));
if(cljs.core.record_QMARK_(G__6165)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6175);
} else {
return G__6175;
}
})();
return (new nex.interpreter.NexObject(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(G__6165),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__6165),new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(G__6165),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new object instance.
 */
nex.interpreter.make_object = (function nex$interpreter$make_object(var_args){
var G__6177 = arguments.length;
switch (G__6177) {
case 2:
return nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2 = (function (class_name,field_values){
return nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name,field_values,null);
}));

(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3 = (function (class_name,field_values,closure_env){
return nex.interpreter.__GT_NexObject(class_name,field_values,closure_env);
}));

(nex.interpreter.make_object.cljs$lang$maxFixedArity = 3);

nex.interpreter.shutdown_runtime_BANG_ = (function nex$interpreter$shutdown_runtime_BANG_(){
return null;
});
/**
 * Check if a value is a Nex object instance.
 */
nex.interpreter.nex_object_QMARK_ = (function nex$interpreter$nex_object_QMARK_(v){
return (((v instanceof nex.interpreter.NexObject)) || (((cljs.core.map_QMARK_(v)) && (((cljs.core.contains_QMARK_(v,new cljs.core.Keyword(null,"class-name","class-name",945142584))) && (cljs.core.contains_QMARK_(v,new cljs.core.Keyword(null,"fields","fields",-1932066230))))))));
});
nex.interpreter.channel_closed_signal = new cljs.core.Keyword("nex.interpreter","channel-closed","nex.interpreter/channel-closed",1858162699);
nex.interpreter.channel_timeout_signal = new cljs.core.Keyword("nex.interpreter","channel-timeout","nex.interpreter/channel-timeout",-750309256);
nex.interpreter.task_timeout_signal = new cljs.core.Keyword("nex.interpreter","task-timeout","nex.interpreter/task-timeout",-556335625);
nex.interpreter.current_time_ms = (function nex$interpreter$current_time_ms(){
return Date.now();
});
nex.interpreter.timeout_ms = (function nex$interpreter$timeout_ms(v){
var n = ((cljs.core.integer_QMARK_(v))?v:((typeof v === 'number')?cljs.core.long$(v):null
));
if((((n == null)) || ((n < (0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timeout must be a non-negative Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),v], null));
} else {
}

return n;
});
nex.interpreter.promise_QMARK_ = (function nex$interpreter$promise_QMARK_(v){
return (v instanceof Promise);
});
nex.interpreter.__GT_promise = (function nex$interpreter$__GT_promise(v){
if(nex.interpreter.promise_QMARK_(v)){
return v;
} else {
return Promise.resolve(v);
}
});
nex.interpreter.promise_all = (function nex$interpreter$promise_all(values){
return Promise.all(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.__GT_promise,values))).then((function (arr){
return cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(arr));
}));
});
nex.interpreter.promise_reduce = (function nex$interpreter$promise_reduce(items,init,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,item){
return nex.interpreter.__GT_promise(acc).then((function (state){
return nex.interpreter.__GT_promise((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,item) : f.call(null,state,item)));
}));
}),nex.interpreter.__GT_promise(init),items);
});
nex.interpreter.make_task = (function nex$interpreter$make_task(promise){
var done_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cancelled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var cancel_reject = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var cancel_promise = (new Promise((function (_resolve,reject){
return cljs.core.reset_BANG_(cancel_reject,reject);
})));
var wrapped = Promise.race(cljs.core.to_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.__GT_promise(promise),cancel_promise], null))).then((function (value){
cljs.core.reset_BANG_(done_QMARK_,true);

return value;
}),(function (err){
cljs.core.reset_BANG_(done_QMARK_,true);

return Promise.reject(err);
}));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Task","Task",-409968362),new cljs.core.Keyword(null,"promise","promise",1767129287),wrapped,new cljs.core.Keyword(null,"done?","done?",-1847001718),done_QMARK_,new cljs.core.Keyword(null,"cancelled?","cancelled?",-293098402),cancelled_QMARK_,new cljs.core.Keyword(null,"cancel!","cancel!",-676538519),(function (){
if(cljs.core.truth_(cljs.core.deref(done_QMARK_))){
return false;
} else {
cljs.core.reset_BANG_(cancelled_QMARK_,true);

cljs.core.reset_BANG_(done_QMARK_,true);

var temp__5823__auto___7096 = cljs.core.deref(cancel_reject);
if(cljs.core.truth_(temp__5823__auto___7096)){
var reject_7097 = temp__5823__auto___7096;
var G__6178_7098 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Task cancelled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null));
(reject_7097.cljs$core$IFn$_invoke$arity$1 ? reject_7097.cljs$core$IFn$_invoke$arity$1(G__6178_7098) : reject_7097.call(null,G__6178_7098));
} else {
}

return true;
}
})], null);
});
nex.interpreter.make_channel = (function nex$interpreter$make_channel(var_args){
var G__6180 = arguments.length;
switch (G__6180) {
case 0:
return nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$0 = (function (){
return nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$1((0));
}));

(nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$1 = (function (capacity){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Channel","Channel",1087781355),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"closed?","closed?",-1408769040),false,new cljs.core.Keyword(null,"capacity","capacity",72689734),capacity,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"receivers","receivers",815358409),cljs.core.PersistentVector.EMPTY], null))], null);
}));

(nex.interpreter.make_channel.cljs$lang$maxFixedArity = 1);

nex.interpreter.task_await = (function nex$interpreter$task_await(var_args){
var G__6182 = arguments.length;
switch (G__6182) {
case 1:
return nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1 = (function (task){
return new cljs.core.Keyword(null,"promise","promise",1767129287).cljs$core$IFn$_invoke$arity$1(task);
}));

(nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2 = (function (task,timeout){
return Promise.race(cljs.core.to_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"promise","promise",1767129287).cljs$core$IFn$_invoke$arity$1(task),(new Promise((function (resolve,_reject){
return setTimeout((function (){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(nex.interpreter.task_timeout_signal) : resolve.call(null,nex.interpreter.task_timeout_signal));
}),nex.interpreter.timeout_ms(timeout));
})))], null))).then(cljs.core.identity);
}));

(nex.interpreter.task_await.cljs$lang$maxFixedArity = 2);

nex.interpreter.task_done_QMARK_ = (function nex$interpreter$task_done_QMARK_(task){
return cljs.core.deref(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(task));
});
nex.interpreter.await_all_tasks = (function nex$interpreter$await_all_tasks(tasks){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.task_await,tasks)).then((function (results){
return nex.interpreter.nex_array_from(results);
}));
});
nex.interpreter.await_any_task = (function nex$interpreter$await_any_task(tasks){
if(cljs.core.empty_QMARK_(tasks)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires at least one task",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return Promise.race(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.task_await,tasks)));
});
nex.interpreter.task_cancel = (function nex$interpreter$task_cancel(task){
var fexpr__6184 = new cljs.core.Keyword(null,"cancel!","cancel!",-676538519).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__6184.cljs$core$IFn$_invoke$arity$0 ? fexpr__6184.cljs$core$IFn$_invoke$arity$0() : fexpr__6184.call(null));
});
nex.interpreter.task_cancelled_QMARK_ = (function nex$interpreter$task_cancelled_QMARK_(task){
return cljs.core.deref(new cljs.core.Keyword(null,"cancelled?","cancelled?",-293098402).cljs$core$IFn$_invoke$arity$1(task));
});
nex.interpreter.channel_send = (function nex$interpreter$channel_send(var_args){
var G__6190 = arguments.length;
switch (G__6190) {
case 2:
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2 = (function (ch,value){
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3(ch,value,null);
}));

(nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3 = (function (ch,value,timeout){
return (new Promise((function (resolve,reject){
var timed_QMARK_ = (!((timeout == null)));
var finish = (function (v){
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(v) : resolve.call(null,v));
});
var map__6191 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6191__$1 = cljs.core.__destructure_map(map__6191);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6191__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6191__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6191__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6191__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
var G__6192 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6192) : reject.call(null,G__6192));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6187_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6187_SHARP_));
}));

var fexpr__6193_7104 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6193_7104.cljs$core$IFn$_invoke$arity$1 ? fexpr__6193_7104.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6193_7104.call(null,value));

return finish(((timed_QMARK_)?true:null));
} else {
if((cljs.core.count(buffer) < capacity)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return finish(((timed_QMARK_)?true:null));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__send")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (_){
var temp__5823__auto___7105 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7105)){
var timer_7106 = temp__5823__auto___7105;
clearTimeout(timer_7106);
} else {
}

return finish(((timed_QMARK_)?true:null));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___7107 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7107)){
var timer_7108 = temp__5823__auto___7107;
clearTimeout(timer_7108);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (senders){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6188_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6188_SHARP_),id);
}),senders));
}));

return finish(false);
}),nex.interpreter.timeout_ms(timeout)));
} else {
return null;
}

}
}
}
})));
}));

(nex.interpreter.channel_send.cljs$lang$maxFixedArity = 3);

nex.interpreter.channel_try_send = (function nex$interpreter$channel_try_send(ch,value){
var map__6195 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6195__$1 = cljs.core.__destructure_map(map__6195);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6194_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6194_SHARP_));
}));

var fexpr__6196_7109 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6196_7109.cljs$core$IFn$_invoke$arity$1 ? fexpr__6196_7109.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6196_7109.call(null,value));

return true;
} else {
if((cljs.core.count(buffer) < capacity)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return true;
} else {
return false;

}
}
}
});
nex.interpreter.channel_receive = (function nex$interpreter$channel_receive(var_args){
var G__6202 = arguments.length;
switch (G__6202) {
case 1:
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2 = (function (ch,timeout){
return (new Promise((function (resolve,reject){
var timed_QMARK_ = (!((timeout == null)));
var map__6203 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6203__$1 = cljs.core.__destructure_map(map__6203);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6203__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6203__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6203__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6203__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6197_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6197_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6204_7112 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6204_7113__$1 = cljs.core.__destructure_map(map__6204_7112);
var sender_value_7114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6204_7113__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6204_7113__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6198_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6198_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7114);
}));

(sender_resolve_7115.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7115.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7115.call(null,null));
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(buffered_value) : resolve.call(null,buffered_value));
} else {
if(cljs.core.seq(senders)){
var map__6205 = cljs.core.first(senders);
var map__6205__$1 = cljs.core.__destructure_map(map__6205);
var sender = map__6205__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6205__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6199_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6199_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
} else {
if(cljs.core.truth_(closed_QMARK_)){
var G__6206 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6206) : reject.call(null,G__6206));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__recv")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (value){
var temp__5823__auto___7120 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7120)){
var timer_7121 = temp__5823__auto___7120;
clearTimeout(timer_7121);
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___7122 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7122)){
var timer_7123 = temp__5823__auto___7122;
clearTimeout(timer_7123);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (receivers){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6200_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6200_SHARP_),id);
}),receivers));
}));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(null) : resolve.call(null,null));
}),nex.interpreter.timeout_ms(timeout)));
} else {
return null;
}

}
}
}
})));
}));

(nex.interpreter.channel_receive.cljs$lang$maxFixedArity = 2);

nex.interpreter.channel_try_receive = (function nex$interpreter$channel_try_receive(ch){
var map__6210 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6210__$1 = cljs.core.__destructure_map(map__6210);
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6210__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6210__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6210__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6207_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6207_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6211_7124 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6211_7125__$1 = cljs.core.__destructure_map(map__6211_7124);
var sender_value_7126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6211_7125__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6211_7125__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6208_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6208_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7126);
}));

(sender_resolve_7127.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7127.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7127.call(null,null));
} else {
}

return buffered_value;
} else {
if(cljs.core.seq(senders)){
var map__6212 = cljs.core.first(senders);
var map__6212__$1 = cljs.core.__destructure_map(map__6212);
var sender = map__6212__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6209_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6209_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return value;
} else {
return null;

}
}
});
nex.interpreter.channel_close = (function nex$interpreter$channel_close(ch){
var map__6213 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6213__$1 = cljs.core.__destructure_map(map__6213);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6213__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.assoc,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"receivers","receivers",815358409),((cljs.core.seq(buffer))?receivers:cljs.core.PersistentVector.EMPTY)], 0));

var seq__6214_7128 = cljs.core.seq(senders);
var chunk__6215_7129 = null;
var count__6216_7130 = (0);
var i__6217_7131 = (0);
while(true){
if((i__6217_7131 < count__6216_7130)){
var map__6222_7132 = chunk__6215_7129.cljs$core$IIndexed$_nth$arity$2(null,i__6217_7131);
var map__6222_7133__$1 = cljs.core.__destructure_map(map__6222_7132);
var reject_7134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6222_7133__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6223_7135 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7134.cljs$core$IFn$_invoke$arity$1 ? reject_7134.cljs$core$IFn$_invoke$arity$1(G__6223_7135) : reject_7134.call(null,G__6223_7135));


var G__7136 = seq__6214_7128;
var G__7137 = chunk__6215_7129;
var G__7138 = count__6216_7130;
var G__7139 = (i__6217_7131 + (1));
seq__6214_7128 = G__7136;
chunk__6215_7129 = G__7137;
count__6216_7130 = G__7138;
i__6217_7131 = G__7139;
continue;
} else {
var temp__5823__auto___7140 = cljs.core.seq(seq__6214_7128);
if(temp__5823__auto___7140){
var seq__6214_7141__$1 = temp__5823__auto___7140;
if(cljs.core.chunked_seq_QMARK_(seq__6214_7141__$1)){
var c__5673__auto___7142 = cljs.core.chunk_first(seq__6214_7141__$1);
var G__7143 = cljs.core.chunk_rest(seq__6214_7141__$1);
var G__7144 = c__5673__auto___7142;
var G__7145 = cljs.core.count(c__5673__auto___7142);
var G__7146 = (0);
seq__6214_7128 = G__7143;
chunk__6215_7129 = G__7144;
count__6216_7130 = G__7145;
i__6217_7131 = G__7146;
continue;
} else {
var map__6224_7147 = cljs.core.first(seq__6214_7141__$1);
var map__6224_7148__$1 = cljs.core.__destructure_map(map__6224_7147);
var reject_7149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6224_7148__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6225_7150 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7149.cljs$core$IFn$_invoke$arity$1 ? reject_7149.cljs$core$IFn$_invoke$arity$1(G__6225_7150) : reject_7149.call(null,G__6225_7150));


var G__7151 = cljs.core.next(seq__6214_7141__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__6214_7128 = G__7151;
chunk__6215_7129 = G__7152;
count__6216_7130 = G__7153;
i__6217_7131 = G__7154;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(buffer)){
} else {
var seq__6226_7155 = cljs.core.seq(receivers);
var chunk__6227_7156 = null;
var count__6228_7157 = (0);
var i__6229_7158 = (0);
while(true){
if((i__6229_7158 < count__6228_7157)){
var map__6234_7159 = chunk__6227_7156.cljs$core$IIndexed$_nth$arity$2(null,i__6229_7158);
var map__6234_7160__$1 = cljs.core.__destructure_map(map__6234_7159);
var reject_7161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6234_7160__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6235_7162 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7161.cljs$core$IFn$_invoke$arity$1 ? reject_7161.cljs$core$IFn$_invoke$arity$1(G__6235_7162) : reject_7161.call(null,G__6235_7162));


var G__7163 = seq__6226_7155;
var G__7164 = chunk__6227_7156;
var G__7165 = count__6228_7157;
var G__7166 = (i__6229_7158 + (1));
seq__6226_7155 = G__7163;
chunk__6227_7156 = G__7164;
count__6228_7157 = G__7165;
i__6229_7158 = G__7166;
continue;
} else {
var temp__5823__auto___7167 = cljs.core.seq(seq__6226_7155);
if(temp__5823__auto___7167){
var seq__6226_7168__$1 = temp__5823__auto___7167;
if(cljs.core.chunked_seq_QMARK_(seq__6226_7168__$1)){
var c__5673__auto___7169 = cljs.core.chunk_first(seq__6226_7168__$1);
var G__7170 = cljs.core.chunk_rest(seq__6226_7168__$1);
var G__7171 = c__5673__auto___7169;
var G__7172 = cljs.core.count(c__5673__auto___7169);
var G__7173 = (0);
seq__6226_7155 = G__7170;
chunk__6227_7156 = G__7171;
count__6228_7157 = G__7172;
i__6229_7158 = G__7173;
continue;
} else {
var map__6236_7174 = cljs.core.first(seq__6226_7168__$1);
var map__6236_7175__$1 = cljs.core.__destructure_map(map__6236_7174);
var reject_7176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6236_7175__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6237_7177 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7176.cljs$core$IFn$_invoke$arity$1 ? reject_7176.cljs$core$IFn$_invoke$arity$1(G__6237_7177) : reject_7176.call(null,G__6237_7177));


var G__7178 = cljs.core.next(seq__6226_7168__$1);
var G__7179 = null;
var G__7180 = (0);
var G__7181 = (0);
seq__6226_7155 = G__7178;
chunk__6227_7156 = G__7179;
count__6228_7157 = G__7180;
i__6229_7158 = G__7181;
continue;
}
} else {
}
}
break;
}
}
}

return null;
});
nex.interpreter.select_op_call = (function nex$interpreter$select_op_call(expr){
if(((cljs.core.map_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr))))){
return expr;
} else {
return null;
}
});
nex.interpreter.eval_select_target = (function nex$interpreter$eval_select_target(ctx,target){
var target_name = ((typeof target === 'string')?target:null);
var class_target = (cljs.core.truth_(target_name)?nex.interpreter.lookup_class_if_exists(ctx,target_name):null);
if(cljs.core.truth_(class_target)){
return null;
} else {
if(cljs.core.truth_(target_name)){
return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name);
} else {
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target) : nex.interpreter.eval_node.call(null,ctx,target));
}
}
});
nex.interpreter.eval_select_target_async = (function nex$interpreter$eval_select_target_async(ctx,target){
var target_name = ((typeof target === 'string')?target:null);
var class_target = (cljs.core.truth_(target_name)?nex.interpreter.lookup_class_if_exists(ctx,target_name):null);
if(cljs.core.truth_(class_target)){
return Promise.resolve(null);
} else {
if(cljs.core.truth_(target_name)){
return Promise.resolve(nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name));
} else {
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,target) : nex.interpreter.eval_node_async.call(null,ctx,target));
}
}
});
nex.interpreter.prepare_select_clause = (function nex$interpreter$prepare_select_clause(ctx,p__6239){
var map__6240 = p__6239;
var map__6240__$1 = cljs.core.__destructure_map(map__6240);
var clause = map__6240__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6240__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6240__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6240__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6241 = nex.interpreter.select_op_call(expr);
var map__6241__$1 = cljs.core.__destructure_map(map__6241);
var call = map__6241__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),nex.interpreter.eval_select_target(ctx,target),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6238_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6238_SHARP_) : nex.interpreter.eval_node.call(null,ctx,p1__6238_SHARP_));
}),args)], null);
});
nex.interpreter.prepare_select_clause_async = (function nex$interpreter$prepare_select_clause_async(ctx,p__6243){
var map__6244 = p__6243;
var map__6244__$1 = cljs.core.__destructure_map(map__6244);
var clause = map__6244__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6245 = nex.interpreter.select_op_call(expr);
var map__6245__$1 = cljs.core.__destructure_map(map__6245);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6245__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6245__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6245__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.eval_select_target_async(ctx,target).then((function (target_val){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6242_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6242_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6242_SHARP_));
}),args)).then((function (arg_vals){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),target_val,new cljs.core.Keyword(null,"args","args",1315556576),arg_vals], null);
}));
}));
});
nex.interpreter.execute_select_body = (function nex$interpreter$execute_select_body(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6247 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6247,alias,value);

return G__6247;
})()):ctx);
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6246_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6246_SHARP_) : nex.interpreter.eval_node.call(null,body_ctx,p1__6246_SHARP_));
}),body));
});
nex.interpreter.execute_select_body_async = (function nex$interpreter$execute_select_body_async(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6248 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6248,alias,value);

return G__6248;
})()):ctx);
return (nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2(body_ctx,body) : nex.interpreter.eval_body_async.call(null,body_ctx,body));
});
nex.interpreter.attempt_select_clause = (function nex$interpreter$attempt_select_clause(p__6249){
var map__6250 = p__6249;
var map__6250__$1 = cljs.core.__destructure_map(map__6250);
var prepared = map__6250__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"target","target",253001721));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"Task","Task",-409968362))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await")))){
if(cljs.core.truth_(nex.interpreter.task_done_QMARK_(target))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(target)], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_receive",null,"receive",null], null), null);
return (fexpr__6251.cljs$core$IFn$_invoke$arity$1 ? fexpr__6251.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6251.call(null,method));
})())){
var value = nex.interpreter.channel_try_receive(target);
if((!((value == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_send",null,"send",null], null), null);
return (fexpr__6252.cljs$core$IFn$_invoke$arity$1 ? fexpr__6252.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6252.call(null,method));
})())){
if(nex.interpreter.channel_try_send(target,cljs.core.first(args))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true], null);
} else {
return null;
}
} else {
return null;

}
}
}
});
nex.interpreter.attempt_select_clause_async = (function nex$interpreter$attempt_select_clause_async(prepared){
var map__6253 = prepared;
var map__6253__$1 = cljs.core.__destructure_map(map__6253);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6253__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6253__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"Task","Task",-409968362))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await")))){
if(cljs.core.truth_(nex.interpreter.task_done_QMARK_(target))){
return nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(target).then((function (value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),value], null);
}));
} else {
return Promise.resolve(null);
}
} else {
return Promise.resolve(nex.interpreter.attempt_select_clause(prepared));

}
});
nex.interpreter.sleep_select_step_BANG_ = (function nex$interpreter$sleep_select_step_BANG_(){
return null;
});
nex.interpreter.sleep_select_step_async = (function nex$interpreter$sleep_select_step_async(){
return (new Promise((function (resolve,_reject){
return setTimeout(resolve,(0));
})));
});
nex.interpreter.debuggable_node_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"retry","retry",-614012896),null,new cljs.core.Keyword(null,"let","let",-1282412701),null,new cljs.core.Keyword(null,"raise","raise",184141061),null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"if","if",-458814265),null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),null,new cljs.core.Keyword(null,"loop","loop",-395552849),null,new cljs.core.Keyword(null,"assign","assign",-1590426222),null,new cljs.core.Keyword(null,"case","case",1143702196),null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),null], null), null);
/**
 * Whether this node should trigger debugger pause checks.
 */
nex.interpreter.debuggable_node_QMARK_ = (function nex$interpreter$debuggable_node_QMARK_(node){
return ((cljs.core.map_QMARK_(node)) && (cljs.core.contains_QMARK_(nex.interpreter.debuggable_node_types,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))));
});
/**
 * Invoke optional debugger hook before executing a debuggable node.
 */
nex.interpreter.maybe_debug_pause = (function nex$interpreter$maybe_debug_pause(ctx,node){
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.interpreter.debuggable_node_QMARK_(node);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5140__auto__;
}
})())){
var fexpr__6254 = new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
return (fexpr__6254.cljs$core$IFn$_invoke$arity$2 ? fexpr__6254.cljs$core$IFn$_invoke$arity$2(ctx,node) : fexpr__6254.call(null,ctx,node));
} else {
return null;
}
});
nex.interpreter.Precondition = "Precondition";
nex.interpreter.Postcondition = "Postcondition";
nex.interpreter.Loop_invariant = "Loop invariant";
nex.interpreter.Class_invariant = "Class invariant";
nex.interpreter.report_contract_violation = (function nex$interpreter$report_contract_violation(contract_type,label,condition){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(contract_type)+" violation: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"contract-type","contract-type",-585196394),contract_type,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"condition","condition",1668437652),condition], null));
});
/**
 * Check a list of assertions. Throws exception if any fail.
 */
nex.interpreter.check_assertions = (function nex$interpreter$check_assertions(ctx,assertions,contract_type){
var seq__6255 = cljs.core.seq(assertions);
var chunk__6256 = null;
var count__6257 = (0);
var i__6258 = (0);
while(true){
if((i__6258 < count__6257)){
var map__6261 = chunk__6256.cljs$core$IIndexed$_nth$arity$2(null,i__6258);
var map__6261__$1 = cljs.core.__destructure_map(map__6261);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7185 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7185)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7186 = seq__6255;
var G__7187 = chunk__6256;
var G__7188 = count__6257;
var G__7189 = (i__6258 + (1));
seq__6255 = G__7186;
chunk__6256 = G__7187;
count__6257 = G__7188;
i__6258 = G__7189;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6255);
if(temp__5823__auto__){
var seq__6255__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6255__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6255__$1);
var G__7190 = cljs.core.chunk_rest(seq__6255__$1);
var G__7191 = c__5673__auto__;
var G__7192 = cljs.core.count(c__5673__auto__);
var G__7193 = (0);
seq__6255 = G__7190;
chunk__6256 = G__7191;
count__6257 = G__7192;
i__6258 = G__7193;
continue;
} else {
var map__6262 = cljs.core.first(seq__6255__$1);
var map__6262__$1 = cljs.core.__destructure_map(map__6262);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6262__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6262__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7194 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7194)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7195 = cljs.core.next(seq__6255__$1);
var G__7196 = null;
var G__7197 = (0);
var G__7198 = (0);
seq__6255 = G__7195;
chunk__6256 = G__7196;
count__6257 = G__7197;
i__6258 = G__7198;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Check the class invariant for an object or class context.
 */
nex.interpreter.check_class_invariant = (function nex$interpreter$check_class_invariant(ctx,class_def){
var collect_invariants = (function nex$interpreter$check_class_invariant_$_collect_invariants(class_def__$1,seen){
var class_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def__$1);
var already_seen_QMARK_ = (function (){var and__5140__auto__ = class_name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(seen,class_name);
} else {
return and__5140__auto__;
}
})();
var seen_SINGLEQUOTE_ = (cljs.core.truth_(class_name)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,class_name):seen);
if(cljs.core.truth_(already_seen_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen], null);
} else {
var vec__6275 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6278,p__6279){
var vec__6280 = p__6278;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6280,(1),null);
var map__6283 = p__6279;
var map__6283__$1 = cljs.core.__destructure_map(map__6283);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6283__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6284 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6284,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6284,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275,(1),null);
var local_invariants = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"invariant","invariant",-1658446508).cljs$core$IFn$_invoke$arity$1(class_def__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_invariants,local_invariants)),seen_SINGLEQUOTE__SINGLEQUOTE_], null);
}
});
var vec__6287 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(1),null);
if(cljs.core.seq(invariant_assertions)){
return nex.interpreter.check_assertions(ctx,invariant_assertions,nex.interpreter.Class_invariant);
} else {
return null;
}
});
/**
 * Get the list of parent class definitions for a class.
 */
nex.interpreter.get_parent_classes = (function nex$interpreter$get_parent_classes(ctx,class_def){
var temp__5823__auto__ = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (parent_info){
var parent_class = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent_info));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent_info,new cljs.core.Keyword(null,"class-def","class-def",-524108044),parent_class);
}),parents);
} else {
return null;
}
});
/**
 * Return feature members with section visibility copied onto each member.
 */
nex.interpreter.feature_members = (function nex$interpreter$feature_members(class_def){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6290_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6290_SHARP_))){
return p1__6290_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6290_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
}
}),new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)], 0));
});
nex.interpreter.public_member_QMARK_ = (function nex$interpreter$public_member_QMARK_(member){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(member)));
});
/**
 * Collect accessible constants for a class:
 * inherited public constants first, then local constants.
 */
nex.interpreter.get_all_constants = (function nex$interpreter$get_all_constants(ctx,class_def){
var parent_constants = (function (){var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6293){
var map__6294 = p__6293;
var map__6294__$1 = cljs.core.__destructure_map(map__6294);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6294__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(nex.interpreter.public_member_QMARK_,(nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_all_constants.call(null,ctx,class_def__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var local_constants = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6292_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6292_SHARP_,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993),class_def);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6291_SHARP_){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6291_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6291_SHARP_);
} else {
return and__5140__auto__;
}
}),nex.interpreter.feature_members(class_def)));
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,constant){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),constant);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_constants,local_constants));
return cljs.core.vals(merged);
});
/**
 * Look up a constant on a class and its parent chain.
 * Local constants always apply; inherited constants must be public.
 */
nex.interpreter.lookup_class_constant = (function nex$interpreter$lookup_class_constant(ctx,class_def,constant_name){
var local_constant = cljs.core.some((function (member){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member);
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),constant_name);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993),class_def);
} else {
return null;
}
}),nex.interpreter.feature_members(class_def));
var or__5142__auto__ = local_constant;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (p__6295){
var map__6296 = p__6295;
var map__6296__$1 = cljs.core.__destructure_map(map__6296);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6296__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return cljs.core.some((function (member){
if(((nex.interpreter.public_member_QMARK_(member)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),constant_name)))){
return member;
} else {
return null;
}
}),nex.interpreter.get_all_constants(ctx,class_def__$1));
}),parents);
} else {
return null;
}
}
});
/**
 * Look up a method in a specific class (without searching parents).
 */
nex.interpreter.lookup_method_in_class = (function nex$interpreter$lookup_method_in_class(class_def,method_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6298_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6298_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6297_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6297_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"method","method",55703592))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [section], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)], 0)))));
});
/**
 * Look up a method in a class, searching parent classes if needed.
 */
nex.interpreter.lookup_method_with_inheritance = (function nex$interpreter$lookup_method_with_inheritance(ctx,class_def,method_name){
var temp__5821__auto__ = nex.interpreter.lookup_method_in_class(class_def,method_name);
if(cljs.core.truth_(temp__5821__auto__)){
var method = temp__5821__auto__;
var base_lookup = (function (){var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6299 = ctx;
var G__6300 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6301 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6299,G__6300,G__6301) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6299,G__6300,G__6301));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6302 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6303 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6302,G__6303) : nex.interpreter.combine_preconditions.call(null,G__6302,G__6303));
})();
var effective_ensure = (function (){var G__6304 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6305 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6304,G__6305) : nex.interpreter.combine_assertions.call(null,G__6304,G__6305));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6306 = ctx;
var G__6307 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6308 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6306,G__6307,G__6308) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6306,G__6307,G__6308));
}),parents);
} else {
return null;
}
}
});
/**
 * Check if parent-name appears in the parent chain of class-name.
 */
nex.interpreter.is_parent_QMARK_ = (function nex$interpreter$is_parent_QMARK_(ctx,class_name,parent_name){
var temp__5823__auto__ = nex.interpreter.lookup_class_if_exists(ctx,class_name);
if(cljs.core.truth_(temp__5823__auto__)){
var class_def = temp__5823__auto__;
var temp__5823__auto____$1 = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def);
if(cljs.core.truth_(temp__5823__auto____$1)){
var parents = temp__5823__auto____$1;
var or__5142__auto__ = cljs.core.some((function (p1__6309_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6309_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6310_SHARP_){
var G__6311 = ctx;
var G__6312 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6310_SHARP_);
var G__6313 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6311,G__6312,G__6313) : nex.interpreter.is_parent_QMARK_.call(null,G__6311,G__6312,G__6313));
}),parents);
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Return runtime type/class name as string for convert checks.
 */
nex.interpreter.runtime_type_name = (function nex$interpreter$runtime_type_name(value){
if((value == null)){
return "Nil";
} else {
if(nex.interpreter.nex_object_QMARK_(value)){
return new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(value);
} else {
var G__6314 = (nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.get_type_name.call(null,value));
if((G__6314 == null)){
return null;
} else {
return cljs.core.name(G__6314);
}

}
}
});
/**
 * Runtime numeric widening chain used by type_is:
 * Integer <: Integer64 <: Real <: Decimal.
 */
nex.interpreter.numeric_subtype_runtime_QMARK_ = (function nex$interpreter$numeric_subtype_runtime_QMARK_(runtime_type,target_type){
var or__5142__auto__ = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer");
if(and__5140__auto__){
var fexpr__6315 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Real",null,"Decimal",null,"Integer64",null], null), null);
return (fexpr__6315.cljs$core$IFn$_invoke$arity$1 ? fexpr__6315.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6315.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer64");
if(and__5140__auto__){
var fexpr__6316 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Real",null,"Decimal",null], null), null);
return (fexpr__6316.cljs$core$IFn$_invoke$arity$1 ? fexpr__6316.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6316.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Real")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"Decimal")));
}
}
});
nex.interpreter.cursor_subtype_runtime_QMARK_ = (function nex$interpreter$cursor_subtype_runtime_QMARK_(runtime_type,target_type){
var and__5140__auto__ = (function (){var fexpr__6317 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrayCursor",null,"StringCursor",null,"MapCursor",null,"SetCursor",null], null), null);
return (fexpr__6317.cljs$core$IFn$_invoke$arity$1 ? fexpr__6317.cljs$core$IFn$_invoke$arity$1(runtime_type) : fexpr__6317.call(null,runtime_type));
})();
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"Cursor");
} else {
return and__5140__auto__;
}
});
/**
 * Whether value's runtime type is target-type or subtype of target-type.
 */
nex.interpreter.runtime_type_is_QMARK_ = (function nex$interpreter$runtime_type_is_QMARK_(ctx,target_type,value){
var runtime_type = nex.interpreter.runtime_type_name(value);
if((!(typeof target_type === 'string'))){
return false;
} else {
if((runtime_type == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"Any")){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,target_type)){
return true;
} else {
if(cljs.core.truth_(nex.interpreter.numeric_subtype_runtime_QMARK_(runtime_type,target_type))){
return true;
} else {
if(cljs.core.truth_(nex.interpreter.cursor_subtype_runtime_QMARK_(runtime_type,target_type))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = runtime_type;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.is_parent_QMARK_(ctx,runtime_type,target_type);
} else {
return and__5140__auto__;
}
})())){
return true;
} else {
return false;

}
}
}
}
}
}
}
});
/**
 * Java-style runtime conversion relation:
 * value must be an instance of target type (or target supertype).
 */
nex.interpreter.convert_compatible_runtime_QMARK_ = (function nex$interpreter$convert_compatible_runtime_QMARK_(ctx,runtime_type,target_type){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_type,"Any");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,target_type);
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var and__5140__auto__ = runtime_type;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.is_parent_QMARK_(ctx,runtime_type,target_type);
} else {
return and__5140__auto__;
}
}
}
});
/**
 * Evaluate a class constant value with inherited constant bindings available.
 */
nex.interpreter.eval_class_constant = (function nex$interpreter$eval_class_constant(var_args){
var G__6319 = arguments.length;
switch (G__6319) {
case 3:
return nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3 = (function (ctx,class_def,constant_name){
return nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$4(ctx,class_def,constant_name,(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"constant-visiting","constant-visiting",-1821831472).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})());
}));

(nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$4 = (function (ctx,class_def,constant_name,visiting){
var visit_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def),constant_name], null);
if(cljs.core.contains_QMARK_(visiting,visit_key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cyclic constant definition: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constant_name)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def),new cljs.core.Keyword(null,"constant","constant",-379609303),constant_name], null));
} else {
}

var constant = nex.interpreter.lookup_class_constant(ctx,class_def,constant_name);
if(cljs.core.truth_(constant)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constant_name)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def),new cljs.core.Keyword(null,"constant","constant",-379609303),constant_name], null));
}

var source_class = new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def);
var const_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(ctx));
var next_visiting = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visiting,visit_key);
var eval_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),const_env,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(source_class),new cljs.core.Keyword(null,"constant-visiting","constant-visiting",-1821831472),next_visiting], 0));
var G__6320 = eval_ctx;
var G__6321 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(constant);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6320,G__6321) : nex.interpreter.eval_node.call(null,G__6320,G__6321));
}));

(nex.interpreter.eval_class_constant.cljs$lang$maxFixedArity = 4);

/**
 * Bind all constants visible from class-def into env.
 */
nex.interpreter.bind_class_constants_BANG_ = (function nex$interpreter$bind_class_constants_BANG_(ctx,env,class_def){
var seq__6322 = cljs.core.seq(nex.interpreter.get_all_constants(ctx,class_def));
var chunk__6323 = null;
var count__6324 = (0);
var i__6325 = (0);
while(true){
if((i__6325 < count__6324)){
var constant = chunk__6323.cljs$core$IIndexed$_nth$arity$2(null,i__6325);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__7217 = seq__6322;
var G__7218 = chunk__6323;
var G__7219 = count__6324;
var G__7220 = (i__6325 + (1));
seq__6322 = G__7217;
chunk__6323 = G__7218;
count__6324 = G__7219;
i__6325 = G__7220;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6322);
if(temp__5823__auto__){
var seq__6322__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6322__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6322__$1);
var G__7221 = cljs.core.chunk_rest(seq__6322__$1);
var G__7222 = c__5673__auto__;
var G__7223 = cljs.core.count(c__5673__auto__);
var G__7224 = (0);
seq__6322 = G__7221;
chunk__6323 = G__7222;
count__6324 = G__7223;
i__6325 = G__7224;
continue;
} else {
var constant = cljs.core.first(seq__6322__$1);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__7225 = cljs.core.next(seq__6322__$1);
var G__7226 = null;
var G__7227 = (0);
var G__7228 = (0);
seq__6322 = G__7225;
chunk__6323 = G__7226;
count__6324 = G__7227;
i__6325 = G__7228;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Combine assertions from parent and child methods (for contracts).
 */
nex.interpreter.combine_assertions = (function nex$interpreter$combine_assertions(parent_assertions,child_assertions){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var or__5142__auto__ = parent_assertions;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__5142__auto__ = child_assertions;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
});
/**
 * Collapse a list of assertions into a single condition using logical AND.
 */
nex.interpreter.assertions__GT_condition = (function nex$interpreter$assertions__GT_condition(assertions){
if(cljs.core.seq(assertions)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6326){
var map__6327 = p__6326;
var map__6327__$1 = cljs.core.__destructure_map(map__6327);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6327__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
if(cljs.core.truth_(acc)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),"and",new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),condition], null);
} else {
return condition;
}
}),null,assertions);
} else {
return null;
}
});
/**
 * Combine parent and child preconditions as:
 * (parent-require) OR (child-require).
 */
nex.interpreter.combine_preconditions = (function nex$interpreter$combine_preconditions(parent_assertions,child_assertions){
var parent_assertions__$1 = cljs.core.seq(parent_assertions);
var child_assertions__$1 = cljs.core.seq(child_assertions);
if(((parent_assertions__$1) && (child_assertions__$1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"inherited_or_local_require",new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"operator","operator",-1860875338),"or",new cljs.core.Keyword(null,"left","left",-399115937),nex.interpreter.assertions__GT_condition(parent_assertions__$1),new cljs.core.Keyword(null,"right","right",-452581833),nex.interpreter.assertions__GT_condition(child_assertions__$1)], null)], null)], null);
} else {
if(parent_assertions__$1){
return cljs.core.vec(parent_assertions__$1);
} else {
if(child_assertions__$1){
return cljs.core.vec(child_assertions__$1);
} else {
return null;

}
}
}
});
/**
 * Format a value as-per Nex syntax rules.
 */
nex.interpreter.nex_format_value = (function nex$interpreter$nex_format_value(value){
if((value instanceof nex.interpreter.NexObject)){
return (""+"#<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value.class_name)+" object>");
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())){
return (""+"#<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(value)))+">");
} else {
if(typeof value === 'string'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""));
} else {
if(typeof value === 'number'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
if(cljs.core.boolean_QMARK_(value)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
if((value == null)){
return "nil";
} else {
if(nex.interpreter.nex_map_QMARK_(value)){
return nex.interpreter.nex_map_str(value);
} else {
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(value))){
return nex.interpreter.nex_array_str(value);
} else {
if(nex.interpreter.nex_set_QMARK_(value)){
return nex.interpreter.nex_set_str(value);
} else {
if(cljs.core.coll_QMARK_(value)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
if(cljs.core.char_QMARK_(value)){
return (""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

}
}
}
}
}
}
}
}

}
}
}
});
nex.interpreter.nex_clone_value = (function nex$interpreter$nex_clone_value(value){
if((value instanceof nex.interpreter.NexObject)){
return nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(value.class_name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6329){
var vec__6330 = p__6329;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_clone_value.call(null,v))], null);
}),value.fields)),value.closure_env);
} else {
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(value))){
return nex.interpreter.nex_array_from(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_clone_value,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(value)));
} else {
if(nex.interpreter.nex_map_QMARK_(value)){
return (new Map(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6333){
var vec__6334 = p__6333;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6334,(1),null);
return cljs.core.to_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1(k) : nex.interpreter.nex_clone_value.call(null,k)),(nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_clone_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_clone_value.call(null,v))], null));
}),cljs.core.es6_iterator_seq(value.entries())))));
} else {
if(nex.interpreter.nex_set_QMARK_(value)){
return (new Set(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_clone_value,cljs.core.es6_iterator_seq(value.values())))));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,value);
} else {
return value;

}
}
}
}
}
});
nex.interpreter.nex_map_entry_match_QMARK_ = (function nex$interpreter$nex_map_entry_match_QMARK_(m2,k1,v1){
return cljs.core.some((function (p__6337){
var vec__6338 = p__6337;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6338,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6338,(1),null);
var and__5140__auto__ = (nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2(k1,k2) : nex.interpreter.nex_deep_equals_QMARK_.call(null,k1,k2));
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,v2) : nex.interpreter.nex_deep_equals_QMARK_.call(null,v1,v2));
} else {
return and__5140__auto__;
}
}),cljs.core.es6_iterator_seq(m2.entries()));
});
nex.interpreter.nex_deep_equals_QMARK_ = (function nex$interpreter$nex_deep_equals_QMARK_(a,b){
if((((a instanceof nex.interpreter.NexObject)) && ((b instanceof nex.interpreter.NexObject)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(b))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(a))),cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(b))))) && (cljs.core.every_QMARK_((function (k){
var G__6342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(a),k);
var G__6343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(b),k);
return (nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2(G__6342,G__6343) : nex.interpreter.nex_deep_equals_QMARK_.call(null,G__6342,G__6343));
}),cljs.core.keys(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(a)))))));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.interpreter.nex_array_QMARK_(a);
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.nex_array_QMARK_(b);
} else {
return and__5140__auto__;
}
})())){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_array_size(a),nex.interpreter.nex_array_size(b))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(nex.interpreter.nex_deep_equals_QMARK_,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(a),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(b)))));
} else {
if(((nex.interpreter.nex_map_QMARK_(a)) && (nex.interpreter.nex_map_QMARK_(b)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_map_size(a),nex.interpreter.nex_map_size(b))) && (cljs.core.every_QMARK_((function (p__6344){
var vec__6345 = p__6344;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6345,(1),null);
return nex.interpreter.nex_map_entry_match_QMARK_(b,k,v);
}),cljs.core.es6_iterator_seq(a.entries()))));
} else {
if(((nex.interpreter.nex_set_QMARK_(a)) && (nex.interpreter.nex_set_QMARK_(b)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_set_size(a),nex.interpreter.nex_set_size(b))) && (cljs.core.every_QMARK_((function (v1){
return cljs.core.some((function (p1__6341_SHARP_){
return (nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.nex_deep_equals_QMARK_.cljs$core$IFn$_invoke$arity$2(v1,p1__6341_SHARP_) : nex.interpreter.nex_deep_equals_QMARK_.call(null,v1,p1__6341_SHARP_));
}),cljs.core.es6_iterator_seq(b.values()));
}),cljs.core.es6_iterator_seq(a.values()))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);

}
}
}
}
});
/**
 * Format a value for Console output.
 * Scalars keep their user-facing form; structured values use Nex syntax.
 */
nex.interpreter.nex_display_value = (function nex$interpreter$nex_display_value(value){
if(cljs.core.truth_((function (){var or__5142__auto__ = nex.interpreter.nex_map_QMARK_(value);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = nex.interpreter.nex_array_QMARK_(value);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = nex.interpreter.nex_set_QMARK_(value);
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (value == null);
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = nex.interpreter.nex_object_QMARK_(value);
if(or__5142__auto____$4){
return or__5142__auto____$4;
} else {
var and__5140__auto__ = cljs.core.map_QMARK_(value);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(value);
} else {
return and__5140__auto__;
}
}
}
}
}
}
})())){
return nex.interpreter.nex_format_value(value);
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

}
});
nex.interpreter.builtins = new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__7233__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7233 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7234__i = 0, G__7234__a = new Array(arguments.length -  1);
while (G__7234__i < G__7234__a.length) {G__7234__a[G__7234__i] = arguments[G__7234__i + 1]; ++G__7234__i;}
  args = new cljs.core.IndexedSeq(G__7234__a,0,null);
} 
return G__7233__delegate.call(this,ctx,args);};
G__7233.cljs$lang$maxFixedArity = 1;
G__7233.cljs$lang$applyTo = (function (arglist__7235){
var ctx = cljs.core.first(arglist__7235);
var args = cljs.core.rest(arglist__7235);
return G__7233__delegate(ctx,args);
});
G__7233.cljs$core$IFn$_invoke$arity$variadic = G__7233__delegate;
return G__7233;
})()
,"println",(function() { 
var G__7236__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7236 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7237__i = 0, G__7237__a = new Array(arguments.length -  1);
while (G__7237__i < G__7237__a.length) {G__7237__a[G__7237__i] = arguments[G__7237__i + 1]; ++G__7237__i;}
  args = new cljs.core.IndexedSeq(G__7237__a,0,null);
} 
return G__7236__delegate.call(this,ctx,args);};
G__7236.cljs$lang$maxFixedArity = 1;
G__7236.cljs$lang$applyTo = (function (arglist__7238){
var ctx = cljs.core.first(arglist__7238);
var args = cljs.core.rest(arglist__7238);
return G__7236__delegate(ctx,args);
});
G__7236.cljs$core$IFn$_invoke$arity$variadic = G__7236__delegate;
return G__7236;
})()
,"type_of",(function() { 
var G__7239__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__7239 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7240__i = 0, G__7240__a = new Array(arguments.length -  1);
while (G__7240__i < G__7240__a.length) {G__7240__a[G__7240__i] = arguments[G__7240__i + 1]; ++G__7240__i;}
  args = new cljs.core.IndexedSeq(G__7240__a,0,null);
} 
return G__7239__delegate.call(this,ctx,args);};
G__7239.cljs$lang$maxFixedArity = 1;
G__7239.cljs$lang$applyTo = (function (arglist__7241){
var ctx = cljs.core.first(arglist__7241);
var args = cljs.core.rest(arglist__7241);
return G__7239__delegate(ctx,args);
});
G__7239.cljs$core$IFn$_invoke$arity$variadic = G__7239__delegate;
return G__7239;
})()
,"type_is",(function() { 
var G__7242__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6348 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6348,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__7242 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7243__i = 0, G__7243__a = new Array(arguments.length -  1);
while (G__7243__i < G__7243__a.length) {G__7243__a[G__7243__i] = arguments[G__7243__i + 1]; ++G__7243__i;}
  args = new cljs.core.IndexedSeq(G__7243__a,0,null);
} 
return G__7242__delegate.call(this,ctx,args);};
G__7242.cljs$lang$maxFixedArity = 1;
G__7242.cljs$lang$applyTo = (function (arglist__7244){
var ctx = cljs.core.first(arglist__7244);
var args = cljs.core.rest(arglist__7244);
return G__7242__delegate(ctx,args);
});
G__7242.cljs$core$IFn$_invoke$arity$variadic = G__7242__delegate;
return G__7242;
})()
,"await_all",(function() { 
var G__7245__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6351_7246 = cljs.core.seq(tasks);
var chunk__6352_7247 = null;
var count__6353_7248 = (0);
var i__6354_7249 = (0);
while(true){
if((i__6354_7249 < count__6353_7248)){
var task_7250 = chunk__6352_7247.cljs$core$IIndexed$_nth$arity$2(null,i__6354_7249);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7250),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7250)], null));
}


var G__7251 = seq__6351_7246;
var G__7252 = chunk__6352_7247;
var G__7253 = count__6353_7248;
var G__7254 = (i__6354_7249 + (1));
seq__6351_7246 = G__7251;
chunk__6352_7247 = G__7252;
count__6353_7248 = G__7253;
i__6354_7249 = G__7254;
continue;
} else {
var temp__5823__auto___7255 = cljs.core.seq(seq__6351_7246);
if(temp__5823__auto___7255){
var seq__6351_7256__$1 = temp__5823__auto___7255;
if(cljs.core.chunked_seq_QMARK_(seq__6351_7256__$1)){
var c__5673__auto___7257 = cljs.core.chunk_first(seq__6351_7256__$1);
var G__7258 = cljs.core.chunk_rest(seq__6351_7256__$1);
var G__7259 = c__5673__auto___7257;
var G__7260 = cljs.core.count(c__5673__auto___7257);
var G__7261 = (0);
seq__6351_7246 = G__7258;
chunk__6352_7247 = G__7259;
count__6353_7248 = G__7260;
i__6354_7249 = G__7261;
continue;
} else {
var task_7262 = cljs.core.first(seq__6351_7256__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7262),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7262)], null));
}


var G__7263 = cljs.core.next(seq__6351_7256__$1);
var G__7264 = null;
var G__7265 = (0);
var G__7266 = (0);
seq__6351_7246 = G__7263;
chunk__6352_7247 = G__7264;
count__6353_7248 = G__7265;
i__6354_7249 = G__7266;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_all_tasks(tasks);
};
var G__7245 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7267__i = 0, G__7267__a = new Array(arguments.length -  1);
while (G__7267__i < G__7267__a.length) {G__7267__a[G__7267__i] = arguments[G__7267__i + 1]; ++G__7267__i;}
  args = new cljs.core.IndexedSeq(G__7267__a,0,null);
} 
return G__7245__delegate.call(this,_ctx,args);};
G__7245.cljs$lang$maxFixedArity = 1;
G__7245.cljs$lang$applyTo = (function (arglist__7268){
var _ctx = cljs.core.first(arglist__7268);
var args = cljs.core.rest(arglist__7268);
return G__7245__delegate(_ctx,args);
});
G__7245.cljs$core$IFn$_invoke$arity$variadic = G__7245__delegate;
return G__7245;
})()
,"await_any",(function() { 
var G__7269__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6355_7270 = cljs.core.seq(tasks);
var chunk__6356_7271 = null;
var count__6357_7272 = (0);
var i__6358_7273 = (0);
while(true){
if((i__6358_7273 < count__6357_7272)){
var task_7274 = chunk__6356_7271.cljs$core$IIndexed$_nth$arity$2(null,i__6358_7273);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7274),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7274)], null));
}


var G__7279 = seq__6355_7270;
var G__7280 = chunk__6356_7271;
var G__7281 = count__6357_7272;
var G__7282 = (i__6358_7273 + (1));
seq__6355_7270 = G__7279;
chunk__6356_7271 = G__7280;
count__6357_7272 = G__7281;
i__6358_7273 = G__7282;
continue;
} else {
var temp__5823__auto___7283 = cljs.core.seq(seq__6355_7270);
if(temp__5823__auto___7283){
var seq__6355_7284__$1 = temp__5823__auto___7283;
if(cljs.core.chunked_seq_QMARK_(seq__6355_7284__$1)){
var c__5673__auto___7285 = cljs.core.chunk_first(seq__6355_7284__$1);
var G__7286 = cljs.core.chunk_rest(seq__6355_7284__$1);
var G__7287 = c__5673__auto___7285;
var G__7288 = cljs.core.count(c__5673__auto___7285);
var G__7289 = (0);
seq__6355_7270 = G__7286;
chunk__6356_7271 = G__7287;
count__6357_7272 = G__7288;
i__6358_7273 = G__7289;
continue;
} else {
var task_7290 = cljs.core.first(seq__6355_7284__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7290),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7290)], null));
}


var G__7291 = cljs.core.next(seq__6355_7284__$1);
var G__7292 = null;
var G__7293 = (0);
var G__7294 = (0);
seq__6355_7270 = G__7291;
chunk__6356_7271 = G__7292;
count__6357_7272 = G__7293;
i__6358_7273 = G__7294;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_any_task(tasks);
};
var G__7269 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7295__i = 0, G__7295__a = new Array(arguments.length -  1);
while (G__7295__i < G__7295__a.length) {G__7295__a[G__7295__i] = arguments[G__7295__i + 1]; ++G__7295__i;}
  args = new cljs.core.IndexedSeq(G__7295__a,0,null);
} 
return G__7269__delegate.call(this,_ctx,args);};
G__7269.cljs$lang$maxFixedArity = 1;
G__7269.cljs$lang$applyTo = (function (arglist__7296){
var _ctx = cljs.core.first(arglist__7296);
var args = cljs.core.rest(arglist__7296);
return G__7269__delegate(_ctx,args);
});
G__7269.cljs$core$IFn$_invoke$arity$variadic = G__7269__delegate;
return G__7269;
})()
,"sleep",(function() { 
var G__7297__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sleep expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"sleep",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}


return null;
};
var G__7297 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7298__i = 0, G__7298__a = new Array(arguments.length -  1);
while (G__7298__i < G__7298__a.length) {G__7298__a[G__7298__i] = arguments[G__7298__i + 1]; ++G__7298__i;}
  args = new cljs.core.IndexedSeq(G__7298__a,0,null);
} 
return G__7297__delegate.call(this,_ctx,args);};
G__7297.cljs$lang$maxFixedArity = 1;
G__7297.cljs$lang$applyTo = (function (arglist__7299){
var _ctx = cljs.core.first(arglist__7299);
var args = cljs.core.rest(arglist__7299);
return G__7297__delegate(_ctx,args);
});
G__7297.cljs$core$IFn$_invoke$arity$variadic = G__7297__delegate;
return G__7297;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6359 = op;
switch (G__6359) {
case "+":
if((((!(typeof left === 'string'))) && ((!(typeof right === 'string'))))){
return (left + right);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("String concatenation requires evaluation context",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),op,new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"right","right",-452581833),right], null));
}

break;
case "-":
return (left - right);

break;
case "*":
return (left * right);

break;
case "/":
if((right === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Division by zero",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"right","right",-452581833),right], null));
} else {
if(((cljs.core.integer_QMARK_(left)) && (cljs.core.integer_QMARK_(right)))){
return Math.trunc((left / right));
} else {
return (left / right);
}
}

break;
case "^":
if(((cljs.core.integer_QMARK_(left)) && (cljs.core.integer_QMARK_(right)))){
return nex.interpreter.nex_int_pow(left,right);
} else {
return Math.pow(left,right);
}

break;
case "%":
if((right === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Division by zero",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"right","right",-452581833),right], null));
} else {
return cljs.core.mod(left,right);
}

break;
case "=":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,right);

break;
case "/=":
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left,right);

break;
case "<":
return (left < right);

break;
case "<=":
return (left <= right);

break;
case ">":
return (left > right);

break;
case ">=":
return (left >= right);

break;
case "and":
var and__5140__auto__ = left;
if(cljs.core.truth_(and__5140__auto__)){
return right;
} else {
return and__5140__auto__;
}

break;
case "or":
var or__5142__auto__ = left;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return right;
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown binary operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),op], null));

}
});
/**
 * Convert a runtime value to the string form used by String concatenation.
 * If a Nex object implements to_string, invoke it; otherwise use the built-in
 * Any/to_string formatting path.
 */
nex.interpreter.concat_string_value = (function nex$interpreter$concat_string_value(ctx,value){
if(typeof value === 'string'){
return value;
} else {
if(nex.interpreter.nex_object_QMARK_(value)){
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(value));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,"to_string");
if(cljs.core.truth_(method_lookup)){
var result = (function (){var G__6360 = ctx;
var G__6361 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"method","method",55703592),"to_string",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6360,G__6361) : nex.interpreter.eval_node.call(null,G__6360,G__6361));
})();
if(typeof result === 'string'){
return result;
} else {
return nex.interpreter.nex_format_value(result);
}
} else {
var G__6362 = null;
var G__6363 = value;
var G__6364 = "to_string";
var G__6365 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6362,G__6363,G__6364,G__6365) : nex.interpreter.call_builtin_method.call(null,G__6362,G__6363,G__6364,G__6365));
}
} else {
var G__6366 = null;
var G__6367 = value;
var G__6368 = "to_string";
var G__6369 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6366,G__6367,G__6368,G__6369) : nex.interpreter.call_builtin_method.call(null,G__6366,G__6367,G__6368,G__6369));

}
}
});
/**
 * Async variant of concat-string-value for the browser interpreter.
 */
nex.interpreter.concat_string_value_async = (function nex$interpreter$concat_string_value_async(ctx,value){
if(typeof value === 'string'){
return Promise.resolve(value);
} else {
if(nex.interpreter.nex_object_QMARK_(value)){
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(value));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,"to_string");
if(cljs.core.truth_(method_lookup)){
return nex.interpreter.__GT_promise((function (){var G__6370 = ctx;
var G__6371 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"method","method",55703592),"to_string",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6370,G__6371) : nex.interpreter.eval_node_async.call(null,G__6370,G__6371));
})()).then((function (result){
if(typeof result === 'string'){
return result;
} else {
return nex.interpreter.nex_format_value(result);
}
}));
} else {
return Promise.resolve((function (){var G__6372 = null;
var G__6373 = value;
var G__6374 = "to_string";
var G__6375 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6372,G__6373,G__6374,G__6375) : nex.interpreter.call_builtin_method.call(null,G__6372,G__6373,G__6374,G__6375));
})());
}
} else {
return Promise.resolve((function (){var G__6376 = null;
var G__6377 = value;
var G__6378 = "to_string";
var G__6379 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6376,G__6377,G__6378,G__6379) : nex.interpreter.call_builtin_method.call(null,G__6376,G__6377,G__6378,G__6379));
})());

}
}
});
/**
 * Apply a unary operator to a value.
 */
nex.interpreter.apply_unary_op = (function nex$interpreter$apply_unary_op(op,value){
var G__6380 = op;
switch (G__6380) {
case "-":
return (- value);

break;
case "not":
return cljs.core.not(value);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown unary operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"operator","operator",-1860875338),op], null));

}
});
/**
 * Get default value for a field type
 */
nex.interpreter.get_default_field_value = (function nex$interpreter$get_default_field_value(field_type){
if(cljs.core.map_QMARK_(field_type)){
var G__6381 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6381) {
case "Array":
return nex.interpreter.nex_array();

break;
case "Map":
return nex.interpreter.nex_map();

break;
case "Set":
return nex.interpreter.nex_set();

break;
default:
return null;

}
} else {
if(typeof field_type === 'string'){
var G__6382 = field_type;
switch (G__6382) {
case "Integer":
return (0);

break;
case "Integer64":
return (0);

break;
case "Real":
return 0.0;

break;
case "Decimal":
return 0.0;

break;
case "Char":
return "0";

break;
case "Boolean":
return false;

break;
case "String":
return "";

break;
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
return null;

break;
case "Process":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Process","Process",-799294660)], null);

break;
case "Task":
return null;

break;
case "Channel":
return null;

break;
case "Window":
return null;

break;
case "Turtle":
return null;

break;
case "Image":
return null;

break;
default:
return null;

}
} else {
return null;

}
}
});
/**
 * Methods available on built-in types
 */
nex.interpreter.builtin_type_methods = (function (){var nex_compare = (function nex$interpreter$nex_compare(x,y){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return (0);
} else {
try{var c = cljs.core.compare(x,y);
if((c < (0))){
return (-1);
} else {
if((c > (0))){
return (1);
} else {
return (0);

}
}
}catch (e6384){var _ = e6384;
var sx = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var sy = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sx,sy)){
return (0);
} else {
if((cljs.core.compare(sx,sy) < (0))){
return (-1);
} else {
return (1);

}
}
}
}
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"Array","Array",-2064027806),new cljs.core.Keyword(null,"Integer64","Integer64",-1582960571),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"Any","Any",-363039258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"Map","Map",-197728088),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"Set","Set",-1553598550),new cljs.core.Keyword(null,"Channel","Channel",1087781355),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"Integer","Integer",-641373298),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604),new cljs.core.Keyword(null,"Task","Task",-409968362),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"Console","Console",-423236809),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"Char","Char",2025763229),new cljs.core.Keyword(null,"Real","Real",-1266238786),new cljs.core.Keyword(null,"String","String",584378334)],[new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7306__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c),cljs.core.vec(cljs.core.es6_iterator_seq(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c).values())));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7306 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7307__i = 0, G__7307__a = new Array(arguments.length -  1);
while (G__7307__i < G__7307__a.length) {G__7307__a[G__7307__i] = arguments[G__7307__i + 1]; ++G__7307__i;}
  _ = new cljs.core.IndexedSeq(G__7307__a,0,null);
} 
return G__7306__delegate.call(this,c,_);};
G__7306.cljs$lang$maxFixedArity = 1;
G__7306.cljs$lang$applyTo = (function (arglist__7308){
var c = cljs.core.first(arglist__7308);
var _ = cljs.core.rest(arglist__7308);
return G__7306__delegate(c,_);
});
G__7306.cljs$core$IFn$_invoke$arity$variadic = G__7306__delegate;
return G__7306;
})()
,"item",(function() { 
var G__7309__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vals,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7309 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7310__i = 0, G__7310__a = new Array(arguments.length -  1);
while (G__7310__i < G__7310__a.length) {G__7310__a[G__7310__i] = arguments[G__7310__i + 1]; ++G__7310__i;}
  _ = new cljs.core.IndexedSeq(G__7310__a,0,null);
} 
return G__7309__delegate.call(this,c,_);};
G__7309.cljs$lang$maxFixedArity = 1;
G__7309.cljs$lang$applyTo = (function (arglist__7311){
var c = cljs.core.first(arglist__7311);
var _ = cljs.core.rest(arglist__7311);
return G__7309__delegate(c,_);
});
G__7309.cljs$core$IFn$_invoke$arity$variadic = G__7309__delegate;
return G__7309;
})()
,"next",(function() { 
var G__7312__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7312 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7313__i = 0, G__7313__a = new Array(arguments.length -  1);
while (G__7313__i < G__7313__a.length) {G__7313__a[G__7313__i] = arguments[G__7313__i + 1]; ++G__7313__i;}
  _ = new cljs.core.IndexedSeq(G__7313__a,0,null);
} 
return G__7312__delegate.call(this,c,_);};
G__7312.cljs$lang$maxFixedArity = 1;
G__7312.cljs$lang$applyTo = (function (arglist__7314){
var c = cljs.core.first(arglist__7314);
var _ = cljs.core.rest(arglist__7314);
return G__7312__delegate(c,_);
});
G__7312.cljs$core$IFn$_invoke$arity$variadic = G__7312__delegate;
return G__7312;
})()
,"at_end",(function() { 
var G__7315__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7315 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7316__i = 0, G__7316__a = new Array(arguments.length -  1);
while (G__7316__i < G__7316__a.length) {G__7316__a[G__7316__i] = arguments[G__7316__i + 1]; ++G__7316__i;}
  _ = new cljs.core.IndexedSeq(G__7316__a,0,null);
} 
return G__7315__delegate.call(this,c,_);};
G__7315.cljs$lang$maxFixedArity = 1;
G__7315.cljs$lang$applyTo = (function (arglist__7317){
var c = cljs.core.first(arglist__7317);
var _ = cljs.core.rest(arglist__7317);
return G__7315__delegate(c,_);
});
G__7315.cljs$core$IFn$_invoke$arity$variadic = G__7315__delegate;
return G__7315;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["put","is_empty","to_string","reverse","contains","add_at","sort","cursor","remove","length","slice","clone","add","index_of","get","equals"],[(function() { 
var G__7318__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__7318 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7319__i = 0, G__7319__a = new Array(arguments.length -  3);
while (G__7319__i < G__7319__a.length) {G__7319__a[G__7319__i] = arguments[G__7319__i + 3]; ++G__7319__i;}
  _ = new cljs.core.IndexedSeq(G__7319__a,0,null);
} 
return G__7318__delegate.call(this,arr,index,value,_);};
G__7318.cljs$lang$maxFixedArity = 3;
G__7318.cljs$lang$applyTo = (function (arglist__7320){
var arr = cljs.core.first(arglist__7320);
arglist__7320 = cljs.core.next(arglist__7320);
var index = cljs.core.first(arglist__7320);
arglist__7320 = cljs.core.next(arglist__7320);
var value = cljs.core.first(arglist__7320);
var _ = cljs.core.rest(arglist__7320);
return G__7318__delegate(arr,index,value,_);
});
G__7318.cljs$core$IFn$_invoke$arity$variadic = G__7318__delegate;
return G__7318;
})()
,(function() { 
var G__7321__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__7321 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7322__i = 0, G__7322__a = new Array(arguments.length -  1);
while (G__7322__i < G__7322__a.length) {G__7322__a[G__7322__i] = arguments[G__7322__i + 1]; ++G__7322__i;}
  _ = new cljs.core.IndexedSeq(G__7322__a,0,null);
} 
return G__7321__delegate.call(this,arr,_);};
G__7321.cljs$lang$maxFixedArity = 1;
G__7321.cljs$lang$applyTo = (function (arglist__7323){
var arr = cljs.core.first(arglist__7323);
var _ = cljs.core.rest(arglist__7323);
return G__7321__delegate(arr,_);
});
G__7321.cljs$core$IFn$_invoke$arity$variadic = G__7321__delegate;
return G__7321;
})()
,(function() { 
var G__7324__delegate = function (arr,_){
return nex.interpreter.nex_array_str(arr);
};
var G__7324 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7325__i = 0, G__7325__a = new Array(arguments.length -  1);
while (G__7325__i < G__7325__a.length) {G__7325__a[G__7325__i] = arguments[G__7325__i + 1]; ++G__7325__i;}
  _ = new cljs.core.IndexedSeq(G__7325__a,0,null);
} 
return G__7324__delegate.call(this,arr,_);};
G__7324.cljs$lang$maxFixedArity = 1;
G__7324.cljs$lang$applyTo = (function (arglist__7326){
var arr = cljs.core.first(arglist__7326);
var _ = cljs.core.rest(arglist__7326);
return G__7324__delegate(arr,_);
});
G__7324.cljs$core$IFn$_invoke$arity$variadic = G__7324__delegate;
return G__7324;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__7327__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__7327 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7328__i = 0, G__7328__a = new Array(arguments.length -  2);
while (G__7328__i < G__7328__a.length) {G__7328__a[G__7328__i] = arguments[G__7328__i + 2]; ++G__7328__i;}
  _ = new cljs.core.IndexedSeq(G__7328__a,0,null);
} 
return G__7327__delegate.call(this,arr,elem,_);};
G__7327.cljs$lang$maxFixedArity = 2;
G__7327.cljs$lang$applyTo = (function (arglist__7329){
var arr = cljs.core.first(arglist__7329);
arglist__7329 = cljs.core.next(arglist__7329);
var elem = cljs.core.first(arglist__7329);
var _ = cljs.core.rest(arglist__7329);
return G__7327__delegate(arr,elem,_);
});
G__7327.cljs$core$IFn$_invoke$arity$variadic = G__7327__delegate;
return G__7327;
})()
,(function() { 
var G__7330__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__7330 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7331__i = 0, G__7331__a = new Array(arguments.length -  3);
while (G__7331__i < G__7331__a.length) {G__7331__a[G__7331__i] = arguments[G__7331__i + 3]; ++G__7331__i;}
  _ = new cljs.core.IndexedSeq(G__7331__a,0,null);
} 
return G__7330__delegate.call(this,arr,index,value,_);};
G__7330.cljs$lang$maxFixedArity = 3;
G__7330.cljs$lang$applyTo = (function (arglist__7332){
var arr = cljs.core.first(arglist__7332);
arglist__7332 = cljs.core.next(arglist__7332);
var index = cljs.core.first(arglist__7332);
arglist__7332 = cljs.core.next(arglist__7332);
var value = cljs.core.first(arglist__7332);
var _ = cljs.core.rest(arglist__7332);
return G__7330__delegate(arr,index,value,_);
});
G__7330.cljs$core$IFn$_invoke$arity$variadic = G__7330__delegate;
return G__7330;
})()
,(function() { 
var G__7333__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__7333 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7334__i = 0, G__7334__a = new Array(arguments.length -  1);
while (G__7334__i < G__7334__a.length) {G__7334__a[G__7334__i] = arguments[G__7334__i + 1]; ++G__7334__i;}
  _ = new cljs.core.IndexedSeq(G__7334__a,0,null);
} 
return G__7333__delegate.call(this,arr,_);};
G__7333.cljs$lang$maxFixedArity = 1;
G__7333.cljs$lang$applyTo = (function (arglist__7335){
var arr = cljs.core.first(arglist__7335);
var _ = cljs.core.rest(arglist__7335);
return G__7333__delegate(arr,_);
});
G__7333.cljs$core$IFn$_invoke$arity$variadic = G__7333__delegate;
return G__7333;
})()
,(function() { 
var G__7336__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7336 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7337__i = 0, G__7337__a = new Array(arguments.length -  1);
while (G__7337__i < G__7337__a.length) {G__7337__a[G__7337__i] = arguments[G__7337__i + 1]; ++G__7337__i;}
  _ = new cljs.core.IndexedSeq(G__7337__a,0,null);
} 
return G__7336__delegate.call(this,arr,_);};
G__7336.cljs$lang$maxFixedArity = 1;
G__7336.cljs$lang$applyTo = (function (arglist__7338){
var arr = cljs.core.first(arglist__7338);
var _ = cljs.core.rest(arglist__7338);
return G__7336__delegate(arr,_);
});
G__7336.cljs$core$IFn$_invoke$arity$variadic = G__7336__delegate;
return G__7336;
})()
,(function() { 
var G__7339__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__7339 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7340__i = 0, G__7340__a = new Array(arguments.length -  2);
while (G__7340__i < G__7340__a.length) {G__7340__a[G__7340__i] = arguments[G__7340__i + 2]; ++G__7340__i;}
  _ = new cljs.core.IndexedSeq(G__7340__a,0,null);
} 
return G__7339__delegate.call(this,arr,idx,_);};
G__7339.cljs$lang$maxFixedArity = 2;
G__7339.cljs$lang$applyTo = (function (arglist__7341){
var arr = cljs.core.first(arglist__7341);
arglist__7341 = cljs.core.next(arglist__7341);
var idx = cljs.core.first(arglist__7341);
var _ = cljs.core.rest(arglist__7341);
return G__7339__delegate(arr,idx,_);
});
G__7339.cljs$core$IFn$_invoke$arity$variadic = G__7339__delegate;
return G__7339;
})()
,(function() { 
var G__7342__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__7342 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7343__i = 0, G__7343__a = new Array(arguments.length -  1);
while (G__7343__i < G__7343__a.length) {G__7343__a[G__7343__i] = arguments[G__7343__i + 1]; ++G__7343__i;}
  _ = new cljs.core.IndexedSeq(G__7343__a,0,null);
} 
return G__7342__delegate.call(this,arr,_);};
G__7342.cljs$lang$maxFixedArity = 1;
G__7342.cljs$lang$applyTo = (function (arglist__7344){
var arr = cljs.core.first(arglist__7344);
var _ = cljs.core.rest(arglist__7344);
return G__7342__delegate(arr,_);
});
G__7342.cljs$core$IFn$_invoke$arity$variadic = G__7342__delegate;
return G__7342;
})()
,(function() { 
var G__7345__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__7345 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7346__i = 0, G__7346__a = new Array(arguments.length -  3);
while (G__7346__i < G__7346__a.length) {G__7346__a[G__7346__i] = arguments[G__7346__i + 3]; ++G__7346__i;}
  _ = new cljs.core.IndexedSeq(G__7346__a,0,null);
} 
return G__7345__delegate.call(this,arr,start,end,_);};
G__7345.cljs$lang$maxFixedArity = 3;
G__7345.cljs$lang$applyTo = (function (arglist__7347){
var arr = cljs.core.first(arglist__7347);
arglist__7347 = cljs.core.next(arglist__7347);
var start = cljs.core.first(arglist__7347);
arglist__7347 = cljs.core.next(arglist__7347);
var end = cljs.core.first(arglist__7347);
var _ = cljs.core.rest(arglist__7347);
return G__7345__delegate(arr,start,end,_);
});
G__7345.cljs$core$IFn$_invoke$arity$variadic = G__7345__delegate;
return G__7345;
})()
,(function() { 
var G__7348__delegate = function (arr,_){
return nex.interpreter.nex_clone_value(arr);
};
var G__7348 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7349__i = 0, G__7349__a = new Array(arguments.length -  1);
while (G__7349__i < G__7349__a.length) {G__7349__a[G__7349__i] = arguments[G__7349__i + 1]; ++G__7349__i;}
  _ = new cljs.core.IndexedSeq(G__7349__a,0,null);
} 
return G__7348__delegate.call(this,arr,_);};
G__7348.cljs$lang$maxFixedArity = 1;
G__7348.cljs$lang$applyTo = (function (arglist__7350){
var arr = cljs.core.first(arglist__7350);
var _ = cljs.core.rest(arglist__7350);
return G__7348__delegate(arr,_);
});
G__7348.cljs$core$IFn$_invoke$arity$variadic = G__7348__delegate;
return G__7348;
})()
,(function() { 
var G__7351__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__7351 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7352__i = 0, G__7352__a = new Array(arguments.length -  2);
while (G__7352__i < G__7352__a.length) {G__7352__a[G__7352__i] = arguments[G__7352__i + 2]; ++G__7352__i;}
  _ = new cljs.core.IndexedSeq(G__7352__a,0,null);
} 
return G__7351__delegate.call(this,arr,value,_);};
G__7351.cljs$lang$maxFixedArity = 2;
G__7351.cljs$lang$applyTo = (function (arglist__7353){
var arr = cljs.core.first(arglist__7353);
arglist__7353 = cljs.core.next(arglist__7353);
var value = cljs.core.first(arglist__7353);
var _ = cljs.core.rest(arglist__7353);
return G__7351__delegate(arr,value,_);
});
G__7351.cljs$core$IFn$_invoke$arity$variadic = G__7351__delegate;
return G__7351;
})()
,(function() { 
var G__7354__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__7354 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7356__i = 0, G__7356__a = new Array(arguments.length -  2);
while (G__7356__i < G__7356__a.length) {G__7356__a[G__7356__i] = arguments[G__7356__i + 2]; ++G__7356__i;}
  _ = new cljs.core.IndexedSeq(G__7356__a,0,null);
} 
return G__7354__delegate.call(this,arr,elem,_);};
G__7354.cljs$lang$maxFixedArity = 2;
G__7354.cljs$lang$applyTo = (function (arglist__7357){
var arr = cljs.core.first(arglist__7357);
arglist__7357 = cljs.core.next(arglist__7357);
var elem = cljs.core.first(arglist__7357);
var _ = cljs.core.rest(arglist__7357);
return G__7354__delegate(arr,elem,_);
});
G__7354.cljs$core$IFn$_invoke$arity$variadic = G__7354__delegate;
return G__7354;
})()
,(function() { 
var G__7358__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__7358 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7359__i = 0, G__7359__a = new Array(arguments.length -  2);
while (G__7359__i < G__7359__a.length) {G__7359__a[G__7359__i] = arguments[G__7359__i + 2]; ++G__7359__i;}
  _ = new cljs.core.IndexedSeq(G__7359__a,0,null);
} 
return G__7358__delegate.call(this,arr,index,_);};
G__7358.cljs$lang$maxFixedArity = 2;
G__7358.cljs$lang$applyTo = (function (arglist__7360){
var arr = cljs.core.first(arglist__7360);
arglist__7360 = cljs.core.next(arglist__7360);
var index = cljs.core.first(arglist__7360);
var _ = cljs.core.rest(arglist__7360);
return G__7358__delegate(arr,index,_);
});
G__7358.cljs$core$IFn$_invoke$arity$variadic = G__7358__delegate;
return G__7358;
})()
,(function() { 
var G__7361__delegate = function (arr,other,_){
return nex.interpreter.nex_deep_equals_QMARK_(arr,other);
};
var G__7361 = function (arr,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7362__i = 0, G__7362__a = new Array(arguments.length -  2);
while (G__7362__i < G__7362__a.length) {G__7362__a[G__7362__i] = arguments[G__7362__i + 2]; ++G__7362__i;}
  _ = new cljs.core.IndexedSeq(G__7362__a,0,null);
} 
return G__7361__delegate.call(this,arr,other,_);};
G__7361.cljs$lang$maxFixedArity = 2;
G__7361.cljs$lang$applyTo = (function (arglist__7363){
var arr = cljs.core.first(arglist__7363);
arglist__7363 = cljs.core.next(arglist__7363);
var other = cljs.core.first(arglist__7363);
var _ = cljs.core.rest(arglist__7363);
return G__7361__delegate(arr,other,_);
});
G__7361.cljs$core$IFn$_invoke$arity$variadic = G__7361__delegate;
return G__7361;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__7364__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7364 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7365__i = 0, G__7365__a = new Array(arguments.length -  2);
while (G__7365__i < G__7365__a.length) {G__7365__a[G__7365__i] = arguments[G__7365__i + 2]; ++G__7365__i;}
  _ = new cljs.core.IndexedSeq(G__7365__a,0,null);
} 
return G__7364__delegate.call(this,n,other,_);};
G__7364.cljs$lang$maxFixedArity = 2;
G__7364.cljs$lang$applyTo = (function (arglist__7366){
var n = cljs.core.first(arglist__7366);
arglist__7366 = cljs.core.next(arglist__7366);
var other = cljs.core.first(arglist__7366);
var _ = cljs.core.rest(arglist__7366);
return G__7364__delegate(n,other,_);
});
G__7364.cljs$core$IFn$_invoke$arity$variadic = G__7364__delegate;
return G__7364;
})()
,(function() { 
var G__7367__delegate = function (n,other,_){
return (n <= other);
};
var G__7367 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7368__i = 0, G__7368__a = new Array(arguments.length -  2);
while (G__7368__i < G__7368__a.length) {G__7368__a[G__7368__i] = arguments[G__7368__i + 2]; ++G__7368__i;}
  _ = new cljs.core.IndexedSeq(G__7368__a,0,null);
} 
return G__7367__delegate.call(this,n,other,_);};
G__7367.cljs$lang$maxFixedArity = 2;
G__7367.cljs$lang$applyTo = (function (arglist__7369){
var n = cljs.core.first(arglist__7369);
arglist__7369 = cljs.core.next(arglist__7369);
var other = cljs.core.first(arglist__7369);
var _ = cljs.core.rest(arglist__7369);
return G__7367__delegate(n,other,_);
});
G__7367.cljs$core$IFn$_invoke$arity$variadic = G__7367__delegate;
return G__7367;
})()
,(function() { 
var G__7370__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7370 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7371__i = 0, G__7371__a = new Array(arguments.length -  2);
while (G__7371__i < G__7371__a.length) {G__7371__a[G__7371__i] = arguments[G__7371__i + 2]; ++G__7371__i;}
  _ = new cljs.core.IndexedSeq(G__7371__a,0,null);
} 
return G__7370__delegate.call(this,n,other,_);};
G__7370.cljs$lang$maxFixedArity = 2;
G__7370.cljs$lang$applyTo = (function (arglist__7372){
var n = cljs.core.first(arglist__7372);
arglist__7372 = cljs.core.next(arglist__7372);
var other = cljs.core.first(arglist__7372);
var _ = cljs.core.rest(arglist__7372);
return G__7370__delegate(n,other,_);
});
G__7370.cljs$core$IFn$_invoke$arity$variadic = G__7370__delegate;
return G__7370;
})()
,(function() { 
var G__7373__delegate = function (n,other,_){
return (n < other);
};
var G__7373 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7374__i = 0, G__7374__a = new Array(arguments.length -  2);
while (G__7374__i < G__7374__a.length) {G__7374__a[G__7374__i] = arguments[G__7374__i + 2]; ++G__7374__i;}
  _ = new cljs.core.IndexedSeq(G__7374__a,0,null);
} 
return G__7373__delegate.call(this,n,other,_);};
G__7373.cljs$lang$maxFixedArity = 2;
G__7373.cljs$lang$applyTo = (function (arglist__7375){
var n = cljs.core.first(arglist__7375);
arglist__7375 = cljs.core.next(arglist__7375);
var other = cljs.core.first(arglist__7375);
var _ = cljs.core.rest(arglist__7375);
return G__7373__delegate(n,other,_);
});
G__7373.cljs$core$IFn$_invoke$arity$variadic = G__7373__delegate;
return G__7373;
})()
,(function() { 
var G__7376__delegate = function (n,other,_){
return (n + other);
};
var G__7376 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7377__i = 0, G__7377__a = new Array(arguments.length -  2);
while (G__7377__i < G__7377__a.length) {G__7377__a[G__7377__i] = arguments[G__7377__i + 2]; ++G__7377__i;}
  _ = new cljs.core.IndexedSeq(G__7377__a,0,null);
} 
return G__7376__delegate.call(this,n,other,_);};
G__7376.cljs$lang$maxFixedArity = 2;
G__7376.cljs$lang$applyTo = (function (arglist__7378){
var n = cljs.core.first(arglist__7378);
arglist__7378 = cljs.core.next(arglist__7378);
var other = cljs.core.first(arglist__7378);
var _ = cljs.core.rest(arglist__7378);
return G__7376__delegate(n,other,_);
});
G__7376.cljs$core$IFn$_invoke$arity$variadic = G__7376__delegate;
return G__7376;
})()
,(function() { 
var G__7379__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7379 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7380__i = 0, G__7380__a = new Array(arguments.length -  1);
while (G__7380__i < G__7380__a.length) {G__7380__a[G__7380__i] = arguments[G__7380__i + 1]; ++G__7380__i;}
  _ = new cljs.core.IndexedSeq(G__7380__a,0,null);
} 
return G__7379__delegate.call(this,n,_);};
G__7379.cljs$lang$maxFixedArity = 1;
G__7379.cljs$lang$applyTo = (function (arglist__7381){
var n = cljs.core.first(arglist__7381);
var _ = cljs.core.rest(arglist__7381);
return G__7379__delegate(n,_);
});
G__7379.cljs$core$IFn$_invoke$arity$variadic = G__7379__delegate;
return G__7379;
})()
,(function() { 
var G__7382__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7382 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7383__i = 0, G__7383__a = new Array(arguments.length -  1);
while (G__7383__i < G__7383__a.length) {G__7383__a[G__7383__i] = arguments[G__7383__i + 1]; ++G__7383__i;}
  _ = new cljs.core.IndexedSeq(G__7383__a,0,null);
} 
return G__7382__delegate.call(this,n,_);};
G__7382.cljs$lang$maxFixedArity = 1;
G__7382.cljs$lang$applyTo = (function (arglist__7384){
var n = cljs.core.first(arglist__7384);
var _ = cljs.core.rest(arglist__7384);
return G__7382__delegate(n,_);
});
G__7382.cljs$core$IFn$_invoke$arity$variadic = G__7382__delegate;
return G__7382;
})()
,(function() { 
var G__7385__delegate = function (n,other,_){
return (n > other);
};
var G__7385 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7386__i = 0, G__7386__a = new Array(arguments.length -  2);
while (G__7386__i < G__7386__a.length) {G__7386__a[G__7386__i] = arguments[G__7386__i + 2]; ++G__7386__i;}
  _ = new cljs.core.IndexedSeq(G__7386__a,0,null);
} 
return G__7385__delegate.call(this,n,other,_);};
G__7385.cljs$lang$maxFixedArity = 2;
G__7385.cljs$lang$applyTo = (function (arglist__7387){
var n = cljs.core.first(arglist__7387);
arglist__7387 = cljs.core.next(arglist__7387);
var other = cljs.core.first(arglist__7387);
var _ = cljs.core.rest(arglist__7387);
return G__7385__delegate(n,other,_);
});
G__7385.cljs$core$IFn$_invoke$arity$variadic = G__7385__delegate;
return G__7385;
})()
,(function() { 
var G__7388__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7388 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7389__i = 0, G__7389__a = new Array(arguments.length -  2);
while (G__7389__i < G__7389__a.length) {G__7389__a[G__7389__i] = arguments[G__7389__i + 2]; ++G__7389__i;}
  _ = new cljs.core.IndexedSeq(G__7389__a,0,null);
} 
return G__7388__delegate.call(this,n,other,_);};
G__7388.cljs$lang$maxFixedArity = 2;
G__7388.cljs$lang$applyTo = (function (arglist__7390){
var n = cljs.core.first(arglist__7390);
arglist__7390 = cljs.core.next(arglist__7390);
var other = cljs.core.first(arglist__7390);
var _ = cljs.core.rest(arglist__7390);
return G__7388__delegate(n,other,_);
});
G__7388.cljs$core$IFn$_invoke$arity$variadic = G__7388__delegate;
return G__7388;
})()
,(function() { 
var G__7391__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7391 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7392__i = 0, G__7392__a = new Array(arguments.length -  2);
while (G__7392__i < G__7392__a.length) {G__7392__a[G__7392__i] = arguments[G__7392__i + 2]; ++G__7392__i;}
  _ = new cljs.core.IndexedSeq(G__7392__a,0,null);
} 
return G__7391__delegate.call(this,n,other,_);};
G__7391.cljs$lang$maxFixedArity = 2;
G__7391.cljs$lang$applyTo = (function (arglist__7393){
var n = cljs.core.first(arglist__7393);
arglist__7393 = cljs.core.next(arglist__7393);
var other = cljs.core.first(arglist__7393);
var _ = cljs.core.rest(arglist__7393);
return G__7391__delegate(n,other,_);
});
G__7391.cljs$core$IFn$_invoke$arity$variadic = G__7391__delegate;
return G__7391;
})()
,(function() { 
var G__7394__delegate = function (n,other,_){
return (n - other);
};
var G__7394 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7395__i = 0, G__7395__a = new Array(arguments.length -  2);
while (G__7395__i < G__7395__a.length) {G__7395__a[G__7395__i] = arguments[G__7395__i + 2]; ++G__7395__i;}
  _ = new cljs.core.IndexedSeq(G__7395__a,0,null);
} 
return G__7394__delegate.call(this,n,other,_);};
G__7394.cljs$lang$maxFixedArity = 2;
G__7394.cljs$lang$applyTo = (function (arglist__7396){
var n = cljs.core.first(arglist__7396);
arglist__7396 = cljs.core.next(arglist__7396);
var other = cljs.core.first(arglist__7396);
var _ = cljs.core.rest(arglist__7396);
return G__7394__delegate(n,other,_);
});
G__7394.cljs$core$IFn$_invoke$arity$variadic = G__7394__delegate;
return G__7394;
})()
,(function() { 
var G__7397__delegate = function (n,other,_){
return (n * other);
};
var G__7397 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7398__i = 0, G__7398__a = new Array(arguments.length -  2);
while (G__7398__i < G__7398__a.length) {G__7398__a[G__7398__i] = arguments[G__7398__i + 2]; ++G__7398__i;}
  _ = new cljs.core.IndexedSeq(G__7398__a,0,null);
} 
return G__7397__delegate.call(this,n,other,_);};
G__7397.cljs$lang$maxFixedArity = 2;
G__7397.cljs$lang$applyTo = (function (arglist__7399){
var n = cljs.core.first(arglist__7399);
arglist__7399 = cljs.core.next(arglist__7399);
var other = cljs.core.first(arglist__7399);
var _ = cljs.core.rest(arglist__7399);
return G__7397__delegate(n,other,_);
});
G__7397.cljs$core$IFn$_invoke$arity$variadic = G__7397__delegate;
return G__7397;
})()
,(function() { 
var G__7401__delegate = function (n,other,_){
return (n / other);
};
var G__7401 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7402__i = 0, G__7402__a = new Array(arguments.length -  2);
while (G__7402__i < G__7402__a.length) {G__7402__a[G__7402__i] = arguments[G__7402__i + 2]; ++G__7402__i;}
  _ = new cljs.core.IndexedSeq(G__7402__a,0,null);
} 
return G__7401__delegate.call(this,n,other,_);};
G__7401.cljs$lang$maxFixedArity = 2;
G__7401.cljs$lang$applyTo = (function (arglist__7403){
var n = cljs.core.first(arglist__7403);
arglist__7403 = cljs.core.next(arglist__7403);
var other = cljs.core.first(arglist__7403);
var _ = cljs.core.rest(arglist__7403);
return G__7401__delegate(n,other,_);
});
G__7401.cljs$core$IFn$_invoke$arity$variadic = G__7401__delegate;
return G__7401;
})()
,(function() { 
var G__7404__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7404 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7405__i = 0, G__7405__a = new Array(arguments.length -  1);
while (G__7405__i < G__7405__a.length) {G__7405__a[G__7405__i] = arguments[G__7405__i + 1]; ++G__7405__i;}
  _ = new cljs.core.IndexedSeq(G__7405__a,0,null);
} 
return G__7404__delegate.call(this,n,_);};
G__7404.cljs$lang$maxFixedArity = 1;
G__7404.cljs$lang$applyTo = (function (arglist__7406){
var n = cljs.core.first(arglist__7406);
var _ = cljs.core.rest(arglist__7406);
return G__7404__delegate(n,_);
});
G__7404.cljs$core$IFn$_invoke$arity$variadic = G__7404__delegate;
return G__7404;
})()
,(function() { 
var G__7407__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7407 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7408__i = 0, G__7408__a = new Array(arguments.length -  2);
while (G__7408__i < G__7408__a.length) {G__7408__a[G__7408__i] = arguments[G__7408__i + 2]; ++G__7408__i;}
  _ = new cljs.core.IndexedSeq(G__7408__a,0,null);
} 
return G__7407__delegate.call(this,n,other,_);};
G__7407.cljs$lang$maxFixedArity = 2;
G__7407.cljs$lang$applyTo = (function (arglist__7409){
var n = cljs.core.first(arglist__7409);
arglist__7409 = cljs.core.next(arglist__7409);
var other = cljs.core.first(arglist__7409);
var _ = cljs.core.rest(arglist__7409);
return G__7407__delegate(n,other,_);
});
G__7407.cljs$core$IFn$_invoke$arity$variadic = G__7407__delegate;
return G__7407;
})()
,(function() { 
var G__7410__delegate = function (n,other,_){
return (n >= other);
};
var G__7410 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7411__i = 0, G__7411__a = new Array(arguments.length -  2);
while (G__7411__i < G__7411__a.length) {G__7411__a[G__7411__i] = arguments[G__7411__i + 2]; ++G__7411__i;}
  _ = new cljs.core.IndexedSeq(G__7411__a,0,null);
} 
return G__7410__delegate.call(this,n,other,_);};
G__7410.cljs$lang$maxFixedArity = 2;
G__7410.cljs$lang$applyTo = (function (arglist__7412){
var n = cljs.core.first(arglist__7412);
arglist__7412 = cljs.core.next(arglist__7412);
var other = cljs.core.first(arglist__7412);
var _ = cljs.core.rest(arglist__7412);
return G__7410__delegate(n,other,_);
});
G__7410.cljs$core$IFn$_invoke$arity$variadic = G__7410__delegate;
return G__7410;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__7413__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__7413 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7414__i = 0, G__7414__a = new Array(arguments.length -  1);
while (G__7414__i < G__7414__a.length) {G__7414__a[G__7414__i] = arguments[G__7414__i + 1]; ++G__7414__i;}
  _ = new cljs.core.IndexedSeq(G__7414__a,0,null);
} 
return G__7413__delegate.call(this,img,_);};
G__7413.cljs$lang$maxFixedArity = 1;
G__7413.cljs$lang$applyTo = (function (arglist__7415){
var img = cljs.core.first(arglist__7415);
var _ = cljs.core.rest(arglist__7415);
return G__7413__delegate(img,_);
});
G__7413.cljs$core$IFn$_invoke$arity$variadic = G__7413__delegate;
return G__7413;
})()
,"height",(function() { 
var G__7416__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__7416 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7417__i = 0, G__7417__a = new Array(arguments.length -  1);
while (G__7417__i < G__7417__a.length) {G__7417__a[G__7417__i] = arguments[G__7417__i + 1]; ++G__7417__i;}
  _ = new cljs.core.IndexedSeq(G__7417__a,0,null);
} 
return G__7416__delegate.call(this,img,_);};
G__7416.cljs$lang$maxFixedArity = 1;
G__7416.cljs$lang$applyTo = (function (arglist__7418){
var img = cljs.core.first(arglist__7418);
var _ = cljs.core.rest(arglist__7418);
return G__7416__delegate(img,_);
});
G__7416.cljs$core$IFn$_invoke$arity$variadic = G__7416__delegate;
return G__7416;
})()
], null),new cljs.core.PersistentArrayMap(null, 3, ["to_string",(function() { 
var G__7419__delegate = function (v,_){
return nex.interpreter.nex_format_value(v);
};
var G__7419 = function (v,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7420__i = 0, G__7420__a = new Array(arguments.length -  1);
while (G__7420__i < G__7420__a.length) {G__7420__a[G__7420__i] = arguments[G__7420__i + 1]; ++G__7420__i;}
  _ = new cljs.core.IndexedSeq(G__7420__a,0,null);
} 
return G__7419__delegate.call(this,v,_);};
G__7419.cljs$lang$maxFixedArity = 1;
G__7419.cljs$lang$applyTo = (function (arglist__7421){
var v = cljs.core.first(arglist__7421);
var _ = cljs.core.rest(arglist__7421);
return G__7419__delegate(v,_);
});
G__7419.cljs$core$IFn$_invoke$arity$variadic = G__7419__delegate;
return G__7419;
})()
,"equals",(function() { 
var G__7422__delegate = function (v,other,_){
return Object.is(v,other);
};
var G__7422 = function (v,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7423__i = 0, G__7423__a = new Array(arguments.length -  2);
while (G__7423__i < G__7423__a.length) {G__7423__a[G__7423__i] = arguments[G__7423__i + 2]; ++G__7423__i;}
  _ = new cljs.core.IndexedSeq(G__7423__a,0,null);
} 
return G__7422__delegate.call(this,v,other,_);};
G__7422.cljs$lang$maxFixedArity = 2;
G__7422.cljs$lang$applyTo = (function (arglist__7424){
var v = cljs.core.first(arglist__7424);
arglist__7424 = cljs.core.next(arglist__7424);
var other = cljs.core.first(arglist__7424);
var _ = cljs.core.rest(arglist__7424);
return G__7422__delegate(v,other,_);
});
G__7422.cljs$core$IFn$_invoke$arity$variadic = G__7422__delegate;
return G__7422;
})()
,"clone",(function() { 
var G__7425__delegate = function (v,_){
return nex.interpreter.nex_clone_value(v);
};
var G__7425 = function (v,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7426__i = 0, G__7426__a = new Array(arguments.length -  1);
while (G__7426__i < G__7426__a.length) {G__7426__a[G__7426__i] = arguments[G__7426__i + 1]; ++G__7426__i;}
  _ = new cljs.core.IndexedSeq(G__7426__a,0,null);
} 
return G__7425__delegate.call(this,v,_);};
G__7425.cljs$lang$maxFixedArity = 1;
G__7425.cljs$lang$applyTo = (function (arglist__7427){
var v = cljs.core.first(arglist__7427);
var _ = cljs.core.rest(arglist__7427);
return G__7425__delegate(v,_);
});
G__7425.cljs$core$IFn$_invoke$arity$variadic = G__7425__delegate;
return G__7425;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7428__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7428 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7429__i = 0, G__7429__a = new Array(arguments.length -  1);
while (G__7429__i < G__7429__a.length) {G__7429__a[G__7429__i] = arguments[G__7429__i + 1]; ++G__7429__i;}
  _ = new cljs.core.IndexedSeq(G__7429__a,0,null);
} 
return G__7428__delegate.call(this,c,_);};
G__7428.cljs$lang$maxFixedArity = 1;
G__7428.cljs$lang$applyTo = (function (arglist__7430){
var c = cljs.core.first(arglist__7430);
var _ = cljs.core.rest(arglist__7430);
return G__7428__delegate(c,_);
});
G__7428.cljs$core$IFn$_invoke$arity$variadic = G__7428__delegate;
return G__7428;
})()
,"item",(function() { 
var G__7431__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7431 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7432__i = 0, G__7432__a = new Array(arguments.length -  1);
while (G__7432__i < G__7432__a.length) {G__7432__a[G__7432__i] = arguments[G__7432__i + 1]; ++G__7432__i;}
  _ = new cljs.core.IndexedSeq(G__7432__a,0,null);
} 
return G__7431__delegate.call(this,c,_);};
G__7431.cljs$lang$maxFixedArity = 1;
G__7431.cljs$lang$applyTo = (function (arglist__7433){
var c = cljs.core.first(arglist__7433);
var _ = cljs.core.rest(arglist__7433);
return G__7431__delegate(c,_);
});
G__7431.cljs$core$IFn$_invoke$arity$variadic = G__7431__delegate;
return G__7431;
})()
,"next",(function() { 
var G__7434__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7434 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7435__i = 0, G__7435__a = new Array(arguments.length -  1);
while (G__7435__i < G__7435__a.length) {G__7435__a[G__7435__i] = arguments[G__7435__i + 1]; ++G__7435__i;}
  _ = new cljs.core.IndexedSeq(G__7435__a,0,null);
} 
return G__7434__delegate.call(this,c,_);};
G__7434.cljs$lang$maxFixedArity = 1;
G__7434.cljs$lang$applyTo = (function (arglist__7436){
var c = cljs.core.first(arglist__7436);
var _ = cljs.core.rest(arglist__7436);
return G__7434__delegate(c,_);
});
G__7434.cljs$core$IFn$_invoke$arity$variadic = G__7434__delegate;
return G__7434;
})()
,"at_end",(function() { 
var G__7437__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7437 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7438__i = 0, G__7438__a = new Array(arguments.length -  1);
while (G__7438__i < G__7438__a.length) {G__7438__a[G__7438__i] = arguments[G__7438__i + 1]; ++G__7438__i;}
  _ = new cljs.core.IndexedSeq(G__7438__a,0,null);
} 
return G__7437__delegate.call(this,c,_);};
G__7437.cljs$lang$maxFixedArity = 1;
G__7437.cljs$lang$applyTo = (function (arglist__7439){
var c = cljs.core.first(arglist__7439);
var _ = cljs.core.rest(arglist__7439);
return G__7437__delegate(c,_);
});
G__7437.cljs$core$IFn$_invoke$arity$variadic = G__7437__delegate;
return G__7437;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","to_string","try_get","cursor","remove","clone","size","get","equals","contains_key"],[(function() { 
var G__7440__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__7440 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7441__i = 0, G__7441__a = new Array(arguments.length -  1);
while (G__7441__i < G__7441__a.length) {G__7441__a[G__7441__i] = arguments[G__7441__i + 1]; ++G__7441__i;}
  _ = new cljs.core.IndexedSeq(G__7441__a,0,null);
} 
return G__7440__delegate.call(this,m,_);};
G__7440.cljs$lang$maxFixedArity = 1;
G__7440.cljs$lang$applyTo = (function (arglist__7442){
var m = cljs.core.first(arglist__7442);
var _ = cljs.core.rest(arglist__7442);
return G__7440__delegate(m,_);
});
G__7440.cljs$core$IFn$_invoke$arity$variadic = G__7440__delegate;
return G__7440;
})()
,(function() { 
var G__7443__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__7443 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7444__i = 0, G__7444__a = new Array(arguments.length -  1);
while (G__7444__i < G__7444__a.length) {G__7444__a[G__7444__i] = arguments[G__7444__i + 1]; ++G__7444__i;}
  _ = new cljs.core.IndexedSeq(G__7444__a,0,null);
} 
return G__7443__delegate.call(this,m,_);};
G__7443.cljs$lang$maxFixedArity = 1;
G__7443.cljs$lang$applyTo = (function (arglist__7445){
var m = cljs.core.first(arglist__7445);
var _ = cljs.core.rest(arglist__7445);
return G__7443__delegate(m,_);
});
G__7443.cljs$core$IFn$_invoke$arity$variadic = G__7443__delegate;
return G__7443;
})()
,(function() { 
var G__7446__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__7446 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7447__i = 0, G__7447__a = new Array(arguments.length -  3);
while (G__7447__i < G__7447__a.length) {G__7447__a[G__7447__i] = arguments[G__7447__i + 3]; ++G__7447__i;}
  _ = new cljs.core.IndexedSeq(G__7447__a,0,null);
} 
return G__7446__delegate.call(this,m,key,val,_);};
G__7446.cljs$lang$maxFixedArity = 3;
G__7446.cljs$lang$applyTo = (function (arglist__7448){
var m = cljs.core.first(arglist__7448);
arglist__7448 = cljs.core.next(arglist__7448);
var key = cljs.core.first(arglist__7448);
arglist__7448 = cljs.core.next(arglist__7448);
var val = cljs.core.first(arglist__7448);
var _ = cljs.core.rest(arglist__7448);
return G__7446__delegate(m,key,val,_);
});
G__7446.cljs$core$IFn$_invoke$arity$variadic = G__7446__delegate;
return G__7446;
})()
,(function() { 
var G__7449__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__7449 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7450__i = 0, G__7450__a = new Array(arguments.length -  1);
while (G__7450__i < G__7450__a.length) {G__7450__a[G__7450__i] = arguments[G__7450__i + 1]; ++G__7450__i;}
  _ = new cljs.core.IndexedSeq(G__7450__a,0,null);
} 
return G__7449__delegate.call(this,m,_);};
G__7449.cljs$lang$maxFixedArity = 1;
G__7449.cljs$lang$applyTo = (function (arglist__7451){
var m = cljs.core.first(arglist__7451);
var _ = cljs.core.rest(arglist__7451);
return G__7449__delegate(m,_);
});
G__7449.cljs$core$IFn$_invoke$arity$variadic = G__7449__delegate;
return G__7449;
})()
,(function() { 
var G__7452__delegate = function (m,_){
return nex.interpreter.nex_map_str(m);
};
var G__7452 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7453__i = 0, G__7453__a = new Array(arguments.length -  1);
while (G__7453__i < G__7453__a.length) {G__7453__a[G__7453__i] = arguments[G__7453__i + 1]; ++G__7453__i;}
  _ = new cljs.core.IndexedSeq(G__7453__a,0,null);
} 
return G__7452__delegate.call(this,m,_);};
G__7452.cljs$lang$maxFixedArity = 1;
G__7452.cljs$lang$applyTo = (function (arglist__7454){
var m = cljs.core.first(arglist__7454);
var _ = cljs.core.rest(arglist__7454);
return G__7452__delegate(m,_);
});
G__7452.cljs$core$IFn$_invoke$arity$variadic = G__7452__delegate;
return G__7452;
})()
,(function() { 
var G__7455__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__7455 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7456__i = 0, G__7456__a = new Array(arguments.length -  3);
while (G__7456__i < G__7456__a.length) {G__7456__a[G__7456__i] = arguments[G__7456__i + 3]; ++G__7456__i;}
  _ = new cljs.core.IndexedSeq(G__7456__a,0,null);
} 
return G__7455__delegate.call(this,m,key,default$,_);};
G__7455.cljs$lang$maxFixedArity = 3;
G__7455.cljs$lang$applyTo = (function (arglist__7457){
var m = cljs.core.first(arglist__7457);
arglist__7457 = cljs.core.next(arglist__7457);
var key = cljs.core.first(arglist__7457);
arglist__7457 = cljs.core.next(arglist__7457);
var default$ = cljs.core.first(arglist__7457);
var _ = cljs.core.rest(arglist__7457);
return G__7455__delegate(m,key,default$,_);
});
G__7455.cljs$core$IFn$_invoke$arity$variadic = G__7455__delegate;
return G__7455;
})()
,(function() { 
var G__7458__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7458 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7459__i = 0, G__7459__a = new Array(arguments.length -  1);
while (G__7459__i < G__7459__a.length) {G__7459__a[G__7459__i] = arguments[G__7459__i + 1]; ++G__7459__i;}
  _ = new cljs.core.IndexedSeq(G__7459__a,0,null);
} 
return G__7458__delegate.call(this,m,_);};
G__7458.cljs$lang$maxFixedArity = 1;
G__7458.cljs$lang$applyTo = (function (arglist__7460){
var m = cljs.core.first(arglist__7460);
var _ = cljs.core.rest(arglist__7460);
return G__7458__delegate(m,_);
});
G__7458.cljs$core$IFn$_invoke$arity$variadic = G__7458__delegate;
return G__7458;
})()
,(function() { 
var G__7461__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__7461 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7462__i = 0, G__7462__a = new Array(arguments.length -  2);
while (G__7462__i < G__7462__a.length) {G__7462__a[G__7462__i] = arguments[G__7462__i + 2]; ++G__7462__i;}
  _ = new cljs.core.IndexedSeq(G__7462__a,0,null);
} 
return G__7461__delegate.call(this,m,key,_);};
G__7461.cljs$lang$maxFixedArity = 2;
G__7461.cljs$lang$applyTo = (function (arglist__7463){
var m = cljs.core.first(arglist__7463);
arglist__7463 = cljs.core.next(arglist__7463);
var key = cljs.core.first(arglist__7463);
var _ = cljs.core.rest(arglist__7463);
return G__7461__delegate(m,key,_);
});
G__7461.cljs$core$IFn$_invoke$arity$variadic = G__7461__delegate;
return G__7461;
})()
,(function() { 
var G__7464__delegate = function (m,_){
return nex.interpreter.nex_clone_value(m);
};
var G__7464 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7465__i = 0, G__7465__a = new Array(arguments.length -  1);
while (G__7465__i < G__7465__a.length) {G__7465__a[G__7465__i] = arguments[G__7465__i + 1]; ++G__7465__i;}
  _ = new cljs.core.IndexedSeq(G__7465__a,0,null);
} 
return G__7464__delegate.call(this,m,_);};
G__7464.cljs$lang$maxFixedArity = 1;
G__7464.cljs$lang$applyTo = (function (arglist__7466){
var m = cljs.core.first(arglist__7466);
var _ = cljs.core.rest(arglist__7466);
return G__7464__delegate(m,_);
});
G__7464.cljs$core$IFn$_invoke$arity$variadic = G__7464__delegate;
return G__7464;
})()
,(function() { 
var G__7467__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__7467 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7468__i = 0, G__7468__a = new Array(arguments.length -  1);
while (G__7468__i < G__7468__a.length) {G__7468__a[G__7468__i] = arguments[G__7468__i + 1]; ++G__7468__i;}
  _ = new cljs.core.IndexedSeq(G__7468__a,0,null);
} 
return G__7467__delegate.call(this,m,_);};
G__7467.cljs$lang$maxFixedArity = 1;
G__7467.cljs$lang$applyTo = (function (arglist__7469){
var m = cljs.core.first(arglist__7469);
var _ = cljs.core.rest(arglist__7469);
return G__7467__delegate(m,_);
});
G__7467.cljs$core$IFn$_invoke$arity$variadic = G__7467__delegate;
return G__7467;
})()
,(function() { 
var G__7470__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__7470 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7471__i = 0, G__7471__a = new Array(arguments.length -  2);
while (G__7471__i < G__7471__a.length) {G__7471__a[G__7471__i] = arguments[G__7471__i + 2]; ++G__7471__i;}
  _ = new cljs.core.IndexedSeq(G__7471__a,0,null);
} 
return G__7470__delegate.call(this,m,key,_);};
G__7470.cljs$lang$maxFixedArity = 2;
G__7470.cljs$lang$applyTo = (function (arglist__7472){
var m = cljs.core.first(arglist__7472);
arglist__7472 = cljs.core.next(arglist__7472);
var key = cljs.core.first(arglist__7472);
var _ = cljs.core.rest(arglist__7472);
return G__7470__delegate(m,key,_);
});
G__7470.cljs$core$IFn$_invoke$arity$variadic = G__7470__delegate;
return G__7470;
})()
,(function() { 
var G__7473__delegate = function (m,other,_){
return nex.interpreter.nex_deep_equals_QMARK_(m,other);
};
var G__7473 = function (m,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7474__i = 0, G__7474__a = new Array(arguments.length -  2);
while (G__7474__i < G__7474__a.length) {G__7474__a[G__7474__i] = arguments[G__7474__i + 2]; ++G__7474__i;}
  _ = new cljs.core.IndexedSeq(G__7474__a,0,null);
} 
return G__7473__delegate.call(this,m,other,_);};
G__7473.cljs$lang$maxFixedArity = 2;
G__7473.cljs$lang$applyTo = (function (arglist__7475){
var m = cljs.core.first(arglist__7475);
arglist__7475 = cljs.core.next(arglist__7475);
var other = cljs.core.first(arglist__7475);
var _ = cljs.core.rest(arglist__7475);
return G__7473__delegate(m,other,_);
});
G__7473.cljs$core$IFn$_invoke$arity$variadic = G__7473__delegate;
return G__7473;
})()
,(function() { 
var G__7476__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__7476 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7477__i = 0, G__7477__a = new Array(arguments.length -  2);
while (G__7477__i < G__7477__a.length) {G__7477__a[G__7477__i] = arguments[G__7477__i + 2]; ++G__7477__i;}
  _ = new cljs.core.IndexedSeq(G__7477__a,0,null);
} 
return G__7476__delegate.call(this,m,key,_);};
G__7476.cljs$lang$maxFixedArity = 2;
G__7476.cljs$lang$applyTo = (function (arglist__7478){
var m = cljs.core.first(arglist__7478);
arglist__7478 = cljs.core.next(arglist__7478);
var key = cljs.core.first(arglist__7478);
var _ = cljs.core.rest(arglist__7478);
return G__7476__delegate(m,key,_);
});
G__7476.cljs$core$IFn$_invoke$arity$variadic = G__7476__delegate;
return G__7476;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__7479__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__7479 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7480__i = 0, G__7480__a = new Array(arguments.length -  1);
while (G__7480__i < G__7480__a.length) {G__7480__a[G__7480__i] = arguments[G__7480__i + 1]; ++G__7480__i;}
  _ = new cljs.core.IndexedSeq(G__7480__a,0,null);
} 
return G__7479__delegate.call(this,t,_);};
G__7479.cljs$lang$maxFixedArity = 1;
G__7479.cljs$lang$applyTo = (function (arglist__7481){
var t = cljs.core.first(arglist__7481);
var _ = cljs.core.rest(arglist__7481);
return G__7479__delegate(t,_);
});
G__7479.cljs$core$IFn$_invoke$arity$variadic = G__7479__delegate;
return G__7479;
})()
,(function() { 
var G__7482__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__7482 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7483__i = 0, G__7483__a = new Array(arguments.length -  2);
while (G__7483__i < G__7483__a.length) {G__7483__a[G__7483__i] = arguments[G__7483__i + 2]; ++G__7483__i;}
  _ = new cljs.core.IndexedSeq(G__7483__a,0,null);
} 
return G__7482__delegate.call(this,t,angle,_);};
G__7482.cljs$lang$maxFixedArity = 2;
G__7482.cljs$lang$applyTo = (function (arglist__7484){
var t = cljs.core.first(arglist__7484);
arglist__7484 = cljs.core.next(arglist__7484);
var angle = cljs.core.first(arglist__7484);
var _ = cljs.core.rest(arglist__7484);
return G__7482__delegate(t,angle,_);
});
G__7482.cljs$core$IFn$_invoke$arity$variadic = G__7482__delegate;
return G__7482;
})()
,(function() { 
var G__7485__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__7485 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7486__i = 0, G__7486__a = new Array(arguments.length -  1);
while (G__7486__i < G__7486__a.length) {G__7486__a[G__7486__i] = arguments[G__7486__i + 1]; ++G__7486__i;}
  _ = new cljs.core.IndexedSeq(G__7486__a,0,null);
} 
return G__7485__delegate.call(this,t,_);};
G__7485.cljs$lang$maxFixedArity = 1;
G__7485.cljs$lang$applyTo = (function (arglist__7487){
var t = cljs.core.first(arglist__7487);
var _ = cljs.core.rest(arglist__7487);
return G__7485__delegate(t,_);
});
G__7485.cljs$core$IFn$_invoke$arity$variadic = G__7485__delegate;
return G__7485;
})()
,(function() { 
var G__7488__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__7488 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7489__i = 0, G__7489__a = new Array(arguments.length -  2);
while (G__7489__i < G__7489__a.length) {G__7489__a[G__7489__i] = arguments[G__7489__i + 2]; ++G__7489__i;}
  _ = new cljs.core.IndexedSeq(G__7489__a,0,null);
} 
return G__7488__delegate.call(this,t,s,_);};
G__7488.cljs$lang$maxFixedArity = 2;
G__7488.cljs$lang$applyTo = (function (arglist__7490){
var t = cljs.core.first(arglist__7490);
arglist__7490 = cljs.core.next(arglist__7490);
var s = cljs.core.first(arglist__7490);
var _ = cljs.core.rest(arglist__7490);
return G__7488__delegate(t,s,_);
});
G__7488.cljs$core$IFn$_invoke$arity$variadic = G__7488__delegate;
return G__7488;
})()
,(function() { 
var G__7491__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__7491 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7492__i = 0, G__7492__a = new Array(arguments.length -  2);
while (G__7492__i < G__7492__a.length) {G__7492__a[G__7492__i] = arguments[G__7492__i + 2]; ++G__7492__i;}
  _ = new cljs.core.IndexedSeq(G__7492__a,0,null);
} 
return G__7491__delegate.call(this,t,s,_);};
G__7491.cljs$lang$maxFixedArity = 2;
G__7491.cljs$lang$applyTo = (function (arglist__7493){
var t = cljs.core.first(arglist__7493);
arglist__7493 = cljs.core.next(arglist__7493);
var s = cljs.core.first(arglist__7493);
var _ = cljs.core.rest(arglist__7493);
return G__7491__delegate(t,s,_);
});
G__7491.cljs$core$IFn$_invoke$arity$variadic = G__7491__delegate;
return G__7491;
})()
,(function() { 
var G__7494__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__7494 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7495__i = 0, G__7495__a = new Array(arguments.length -  1);
while (G__7495__i < G__7495__a.length) {G__7495__a[G__7495__i] = arguments[G__7495__i + 1]; ++G__7495__i;}
  _ = new cljs.core.IndexedSeq(G__7495__a,0,null);
} 
return G__7494__delegate.call(this,t,_);};
G__7494.cljs$lang$maxFixedArity = 1;
G__7494.cljs$lang$applyTo = (function (arglist__7496){
var t = cljs.core.first(arglist__7496);
var _ = cljs.core.rest(arglist__7496);
return G__7494__delegate(t,_);
});
G__7494.cljs$core$IFn$_invoke$arity$variadic = G__7494__delegate;
return G__7494;
})()
,(function() { 
var G__7497__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__7497 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7498__i = 0, G__7498__a = new Array(arguments.length -  2);
while (G__7498__i < G__7498__a.length) {G__7498__a[G__7498__i] = arguments[G__7498__i + 2]; ++G__7498__i;}
  _ = new cljs.core.IndexedSeq(G__7498__a,0,null);
} 
return G__7497__delegate.call(this,t,dist,_);};
G__7497.cljs$lang$maxFixedArity = 2;
G__7497.cljs$lang$applyTo = (function (arglist__7499){
var t = cljs.core.first(arglist__7499);
arglist__7499 = cljs.core.next(arglist__7499);
var dist = cljs.core.first(arglist__7499);
var _ = cljs.core.rest(arglist__7499);
return G__7497__delegate(t,dist,_);
});
G__7497.cljs$core$IFn$_invoke$arity$variadic = G__7497__delegate;
return G__7497;
})()
,(function() { 
var G__7500__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__7500 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7501__i = 0, G__7501__a = new Array(arguments.length -  1);
while (G__7501__i < G__7501__a.length) {G__7501__a[G__7501__i] = arguments[G__7501__i + 1]; ++G__7501__i;}
  _ = new cljs.core.IndexedSeq(G__7501__a,0,null);
} 
return G__7500__delegate.call(this,t,_);};
G__7500.cljs$lang$maxFixedArity = 1;
G__7500.cljs$lang$applyTo = (function (arglist__7502){
var t = cljs.core.first(arglist__7502);
var _ = cljs.core.rest(arglist__7502);
return G__7500__delegate(t,_);
});
G__7500.cljs$core$IFn$_invoke$arity$variadic = G__7500__delegate;
return G__7500;
})()
,(function() { 
var G__7503__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__7503 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7504__i = 0, G__7504__a = new Array(arguments.length -  1);
while (G__7504__i < G__7504__a.length) {G__7504__a[G__7504__i] = arguments[G__7504__i + 1]; ++G__7504__i;}
  _ = new cljs.core.IndexedSeq(G__7504__a,0,null);
} 
return G__7503__delegate.call(this,t,_);};
G__7503.cljs$lang$maxFixedArity = 1;
G__7503.cljs$lang$applyTo = (function (arglist__7505){
var t = cljs.core.first(arglist__7505);
var _ = cljs.core.rest(arglist__7505);
return G__7503__delegate(t,_);
});
G__7503.cljs$core$IFn$_invoke$arity$variadic = G__7503__delegate;
return G__7503;
})()
,(function() { 
var G__7506__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__7506 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7507__i = 0, G__7507__a = new Array(arguments.length -  1);
while (G__7507__i < G__7507__a.length) {G__7507__a[G__7507__i] = arguments[G__7507__i + 1]; ++G__7507__i;}
  _ = new cljs.core.IndexedSeq(G__7507__a,0,null);
} 
return G__7506__delegate.call(this,t,_);};
G__7506.cljs$lang$maxFixedArity = 1;
G__7506.cljs$lang$applyTo = (function (arglist__7508){
var t = cljs.core.first(arglist__7508);
var _ = cljs.core.rest(arglist__7508);
return G__7506__delegate(t,_);
});
G__7506.cljs$core$IFn$_invoke$arity$variadic = G__7506__delegate;
return G__7506;
})()
,(function() { 
var G__7509__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__7509 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7510__i = 0, G__7510__a = new Array(arguments.length -  1);
while (G__7510__i < G__7510__a.length) {G__7510__a[G__7510__i] = arguments[G__7510__i + 1]; ++G__7510__i;}
  _ = new cljs.core.IndexedSeq(G__7510__a,0,null);
} 
return G__7509__delegate.call(this,t,_);};
G__7509.cljs$lang$maxFixedArity = 1;
G__7509.cljs$lang$applyTo = (function (arglist__7511){
var t = cljs.core.first(arglist__7511);
var _ = cljs.core.rest(arglist__7511);
return G__7509__delegate(t,_);
});
G__7509.cljs$core$IFn$_invoke$arity$variadic = G__7509__delegate;
return G__7509;
})()
,(function() { 
var G__7512__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__7512 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7513__i = 0, G__7513__a = new Array(arguments.length -  1);
while (G__7513__i < G__7513__a.length) {G__7513__a[G__7513__i] = arguments[G__7513__i + 1]; ++G__7513__i;}
  _ = new cljs.core.IndexedSeq(G__7513__a,0,null);
} 
return G__7512__delegate.call(this,t,_);};
G__7512.cljs$lang$maxFixedArity = 1;
G__7512.cljs$lang$applyTo = (function (arglist__7514){
var t = cljs.core.first(arglist__7514);
var _ = cljs.core.rest(arglist__7514);
return G__7512__delegate(t,_);
});
G__7512.cljs$core$IFn$_invoke$arity$variadic = G__7512__delegate;
return G__7512;
})()
,(function() { 
var G__7515__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__7515 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7516__i = 0, G__7516__a = new Array(arguments.length -  1);
while (G__7516__i < G__7516__a.length) {G__7516__a[G__7516__i] = arguments[G__7516__i + 1]; ++G__7516__i;}
  _ = new cljs.core.IndexedSeq(G__7516__a,0,null);
} 
return G__7515__delegate.call(this,t,_);};
G__7515.cljs$lang$maxFixedArity = 1;
G__7515.cljs$lang$applyTo = (function (arglist__7517){
var t = cljs.core.first(arglist__7517);
var _ = cljs.core.rest(arglist__7517);
return G__7515__delegate(t,_);
});
G__7515.cljs$core$IFn$_invoke$arity$variadic = G__7515__delegate;
return G__7515;
})()
,(function() { 
var G__7518__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__7518 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7519__i = 0, G__7519__a = new Array(arguments.length -  2);
while (G__7519__i < G__7519__a.length) {G__7519__a[G__7519__i] = arguments[G__7519__i + 2]; ++G__7519__i;}
  _ = new cljs.core.IndexedSeq(G__7519__a,0,null);
} 
return G__7518__delegate.call(this,t,s,_);};
G__7518.cljs$lang$maxFixedArity = 2;
G__7518.cljs$lang$applyTo = (function (arglist__7520){
var t = cljs.core.first(arglist__7520);
arglist__7520 = cljs.core.next(arglist__7520);
var s = cljs.core.first(arglist__7520);
var _ = cljs.core.rest(arglist__7520);
return G__7518__delegate(t,s,_);
});
G__7518.cljs$core$IFn$_invoke$arity$variadic = G__7518__delegate;
return G__7518;
})()
,(function() { 
var G__7521__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__7521 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7522__i = 0, G__7522__a = new Array(arguments.length -  2);
while (G__7522__i < G__7522__a.length) {G__7522__a[G__7522__i] = arguments[G__7522__i + 2]; ++G__7522__i;}
  _ = new cljs.core.IndexedSeq(G__7522__a,0,null);
} 
return G__7521__delegate.call(this,t,r,_);};
G__7521.cljs$lang$maxFixedArity = 2;
G__7521.cljs$lang$applyTo = (function (arglist__7523){
var t = cljs.core.first(arglist__7523);
arglist__7523 = cljs.core.next(arglist__7523);
var r = cljs.core.first(arglist__7523);
var _ = cljs.core.rest(arglist__7523);
return G__7521__delegate(t,r,_);
});
G__7521.cljs$core$IFn$_invoke$arity$variadic = G__7521__delegate;
return G__7521;
})()
,(function() { 
var G__7524__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__7524 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7525__i = 0, G__7525__a = new Array(arguments.length -  2);
while (G__7525__i < G__7525__a.length) {G__7525__a[G__7525__i] = arguments[G__7525__i + 2]; ++G__7525__i;}
  _ = new cljs.core.IndexedSeq(G__7525__a,0,null);
} 
return G__7524__delegate.call(this,t,dist,_);};
G__7524.cljs$lang$maxFixedArity = 2;
G__7524.cljs$lang$applyTo = (function (arglist__7526){
var t = cljs.core.first(arglist__7526);
arglist__7526 = cljs.core.next(arglist__7526);
var dist = cljs.core.first(arglist__7526);
var _ = cljs.core.rest(arglist__7526);
return G__7524__delegate(t,dist,_);
});
G__7524.cljs$core$IFn$_invoke$arity$variadic = G__7524__delegate;
return G__7524;
})()
,(function() { 
var G__7527__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7527 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7528__i = 0, G__7528__a = new Array(arguments.length -  2);
while (G__7528__i < G__7528__a.length) {G__7528__a[G__7528__i] = arguments[G__7528__i + 2]; ++G__7528__i;}
  _ = new cljs.core.IndexedSeq(G__7528__a,0,null);
} 
return G__7527__delegate.call(this,t,c,_);};
G__7527.cljs$lang$maxFixedArity = 2;
G__7527.cljs$lang$applyTo = (function (arglist__7529){
var t = cljs.core.first(arglist__7529);
arglist__7529 = cljs.core.next(arglist__7529);
var c = cljs.core.first(arglist__7529);
var _ = cljs.core.rest(arglist__7529);
return G__7527__delegate(t,c,_);
});
G__7527.cljs$core$IFn$_invoke$arity$variadic = G__7527__delegate;
return G__7527;
})()
,(function() { 
var G__7530__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__7530 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7531__i = 0, G__7531__a = new Array(arguments.length -  3);
while (G__7531__i < G__7531__a.length) {G__7531__a[G__7531__i] = arguments[G__7531__i + 3]; ++G__7531__i;}
  _ = new cljs.core.IndexedSeq(G__7531__a,0,null);
} 
return G__7530__delegate.call(this,t,x,y,_);};
G__7530.cljs$lang$maxFixedArity = 3;
G__7530.cljs$lang$applyTo = (function (arglist__7532){
var t = cljs.core.first(arglist__7532);
arglist__7532 = cljs.core.next(arglist__7532);
var x = cljs.core.first(arglist__7532);
arglist__7532 = cljs.core.next(arglist__7532);
var y = cljs.core.first(arglist__7532);
var _ = cljs.core.rest(arglist__7532);
return G__7530__delegate(t,x,y,_);
});
G__7530.cljs$core$IFn$_invoke$arity$variadic = G__7530__delegate;
return G__7530;
})()
,(function() { 
var G__7533__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__7533 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7534__i = 0, G__7534__a = new Array(arguments.length -  2);
while (G__7534__i < G__7534__a.length) {G__7534__a[G__7534__i] = arguments[G__7534__i + 2]; ++G__7534__i;}
  _ = new cljs.core.IndexedSeq(G__7534__a,0,null);
} 
return G__7533__delegate.call(this,t,angle,_);};
G__7533.cljs$lang$maxFixedArity = 2;
G__7533.cljs$lang$applyTo = (function (arglist__7535){
var t = cljs.core.first(arglist__7535);
arglist__7535 = cljs.core.next(arglist__7535);
var angle = cljs.core.first(arglist__7535);
var _ = cljs.core.rest(arglist__7535);
return G__7533__delegate(t,angle,_);
});
G__7533.cljs$core$IFn$_invoke$arity$variadic = G__7533__delegate;
return G__7533;
})()
]),cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","contains","union","cursor","intersection","clone","size","difference","equals","symmetric_difference"],[(function() { 
var G__7536__delegate = function (s,_){
return nex.interpreter.nex_set_empty_QMARK_(s);
};
var G__7536 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7537__i = 0, G__7537__a = new Array(arguments.length -  1);
while (G__7537__i < G__7537__a.length) {G__7537__a[G__7537__i] = arguments[G__7537__i + 1]; ++G__7537__i;}
  _ = new cljs.core.IndexedSeq(G__7537__a,0,null);
} 
return G__7536__delegate.call(this,s,_);};
G__7536.cljs$lang$maxFixedArity = 1;
G__7536.cljs$lang$applyTo = (function (arglist__7538){
var s = cljs.core.first(arglist__7538);
var _ = cljs.core.rest(arglist__7538);
return G__7536__delegate(s,_);
});
G__7536.cljs$core$IFn$_invoke$arity$variadic = G__7536__delegate;
return G__7536;
})()
,(function() { 
var G__7539__delegate = function (s,_){
return nex.interpreter.nex_set_str(s);
};
var G__7539 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7540__i = 0, G__7540__a = new Array(arguments.length -  1);
while (G__7540__i < G__7540__a.length) {G__7540__a[G__7540__i] = arguments[G__7540__i + 1]; ++G__7540__i;}
  _ = new cljs.core.IndexedSeq(G__7540__a,0,null);
} 
return G__7539__delegate.call(this,s,_);};
G__7539.cljs$lang$maxFixedArity = 1;
G__7539.cljs$lang$applyTo = (function (arglist__7541){
var s = cljs.core.first(arglist__7541);
var _ = cljs.core.rest(arglist__7541);
return G__7539__delegate(s,_);
});
G__7539.cljs$core$IFn$_invoke$arity$variadic = G__7539__delegate;
return G__7539;
})()
,(function() { 
var G__7542__delegate = function (s,value,_){
return nex.interpreter.nex_set_contains(s,value);
};
var G__7542 = function (s,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7543__i = 0, G__7543__a = new Array(arguments.length -  2);
while (G__7543__i < G__7543__a.length) {G__7543__a[G__7543__i] = arguments[G__7543__i + 2]; ++G__7543__i;}
  _ = new cljs.core.IndexedSeq(G__7543__a,0,null);
} 
return G__7542__delegate.call(this,s,value,_);};
G__7542.cljs$lang$maxFixedArity = 2;
G__7542.cljs$lang$applyTo = (function (arglist__7544){
var s = cljs.core.first(arglist__7544);
arglist__7544 = cljs.core.next(arglist__7544);
var value = cljs.core.first(arglist__7544);
var _ = cljs.core.rest(arglist__7544);
return G__7542__delegate(s,value,_);
});
G__7542.cljs$core$IFn$_invoke$arity$variadic = G__7542__delegate;
return G__7542;
})()
,(function() { 
var G__7545__delegate = function (s,other,_){
return nex.interpreter.nex_set_union(s,other);
};
var G__7545 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7546__i = 0, G__7546__a = new Array(arguments.length -  2);
while (G__7546__i < G__7546__a.length) {G__7546__a[G__7546__i] = arguments[G__7546__i + 2]; ++G__7546__i;}
  _ = new cljs.core.IndexedSeq(G__7546__a,0,null);
} 
return G__7545__delegate.call(this,s,other,_);};
G__7545.cljs$lang$maxFixedArity = 2;
G__7545.cljs$lang$applyTo = (function (arglist__7547){
var s = cljs.core.first(arglist__7547);
arglist__7547 = cljs.core.next(arglist__7547);
var other = cljs.core.first(arglist__7547);
var _ = cljs.core.rest(arglist__7547);
return G__7545__delegate(s,other,_);
});
G__7545.cljs$core$IFn$_invoke$arity$variadic = G__7545__delegate;
return G__7545;
})()
,(function() { 
var G__7548__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.es6_iterator_seq(s.values()))),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7548 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7549__i = 0, G__7549__a = new Array(arguments.length -  1);
while (G__7549__i < G__7549__a.length) {G__7549__a[G__7549__i] = arguments[G__7549__i + 1]; ++G__7549__i;}
  _ = new cljs.core.IndexedSeq(G__7549__a,0,null);
} 
return G__7548__delegate.call(this,s,_);};
G__7548.cljs$lang$maxFixedArity = 1;
G__7548.cljs$lang$applyTo = (function (arglist__7550){
var s = cljs.core.first(arglist__7550);
var _ = cljs.core.rest(arglist__7550);
return G__7548__delegate(s,_);
});
G__7548.cljs$core$IFn$_invoke$arity$variadic = G__7548__delegate;
return G__7548;
})()
,(function() { 
var G__7551__delegate = function (s,other,_){
return nex.interpreter.nex_set_intersection(s,other);
};
var G__7551 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7552__i = 0, G__7552__a = new Array(arguments.length -  2);
while (G__7552__i < G__7552__a.length) {G__7552__a[G__7552__i] = arguments[G__7552__i + 2]; ++G__7552__i;}
  _ = new cljs.core.IndexedSeq(G__7552__a,0,null);
} 
return G__7551__delegate.call(this,s,other,_);};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7553){
var s = cljs.core.first(arglist__7553);
arglist__7553 = cljs.core.next(arglist__7553);
var other = cljs.core.first(arglist__7553);
var _ = cljs.core.rest(arglist__7553);
return G__7551__delegate(s,other,_);
});
G__7551.cljs$core$IFn$_invoke$arity$variadic = G__7551__delegate;
return G__7551;
})()
,(function() { 
var G__7554__delegate = function (s,_){
return nex.interpreter.nex_clone_value(s);
};
var G__7554 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7555__i = 0, G__7555__a = new Array(arguments.length -  1);
while (G__7555__i < G__7555__a.length) {G__7555__a[G__7555__i] = arguments[G__7555__i + 1]; ++G__7555__i;}
  _ = new cljs.core.IndexedSeq(G__7555__a,0,null);
} 
return G__7554__delegate.call(this,s,_);};
G__7554.cljs$lang$maxFixedArity = 1;
G__7554.cljs$lang$applyTo = (function (arglist__7556){
var s = cljs.core.first(arglist__7556);
var _ = cljs.core.rest(arglist__7556);
return G__7554__delegate(s,_);
});
G__7554.cljs$core$IFn$_invoke$arity$variadic = G__7554__delegate;
return G__7554;
})()
,(function() { 
var G__7557__delegate = function (s,_){
return nex.interpreter.nex_set_size(s);
};
var G__7557 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7558__i = 0, G__7558__a = new Array(arguments.length -  1);
while (G__7558__i < G__7558__a.length) {G__7558__a[G__7558__i] = arguments[G__7558__i + 1]; ++G__7558__i;}
  _ = new cljs.core.IndexedSeq(G__7558__a,0,null);
} 
return G__7557__delegate.call(this,s,_);};
G__7557.cljs$lang$maxFixedArity = 1;
G__7557.cljs$lang$applyTo = (function (arglist__7559){
var s = cljs.core.first(arglist__7559);
var _ = cljs.core.rest(arglist__7559);
return G__7557__delegate(s,_);
});
G__7557.cljs$core$IFn$_invoke$arity$variadic = G__7557__delegate;
return G__7557;
})()
,(function() { 
var G__7560__delegate = function (s,other,_){
return nex.interpreter.nex_set_difference(s,other);
};
var G__7560 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7561__i = 0, G__7561__a = new Array(arguments.length -  2);
while (G__7561__i < G__7561__a.length) {G__7561__a[G__7561__i] = arguments[G__7561__i + 2]; ++G__7561__i;}
  _ = new cljs.core.IndexedSeq(G__7561__a,0,null);
} 
return G__7560__delegate.call(this,s,other,_);};
G__7560.cljs$lang$maxFixedArity = 2;
G__7560.cljs$lang$applyTo = (function (arglist__7562){
var s = cljs.core.first(arglist__7562);
arglist__7562 = cljs.core.next(arglist__7562);
var other = cljs.core.first(arglist__7562);
var _ = cljs.core.rest(arglist__7562);
return G__7560__delegate(s,other,_);
});
G__7560.cljs$core$IFn$_invoke$arity$variadic = G__7560__delegate;
return G__7560;
})()
,(function() { 
var G__7563__delegate = function (s,other,_){
return nex.interpreter.nex_deep_equals_QMARK_(s,other);
};
var G__7563 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7564__i = 0, G__7564__a = new Array(arguments.length -  2);
while (G__7564__i < G__7564__a.length) {G__7564__a[G__7564__i] = arguments[G__7564__i + 2]; ++G__7564__i;}
  _ = new cljs.core.IndexedSeq(G__7564__a,0,null);
} 
return G__7563__delegate.call(this,s,other,_);};
G__7563.cljs$lang$maxFixedArity = 2;
G__7563.cljs$lang$applyTo = (function (arglist__7565){
var s = cljs.core.first(arglist__7565);
arglist__7565 = cljs.core.next(arglist__7565);
var other = cljs.core.first(arglist__7565);
var _ = cljs.core.rest(arglist__7565);
return G__7563__delegate(s,other,_);
});
G__7563.cljs$core$IFn$_invoke$arity$variadic = G__7563__delegate;
return G__7563;
})()
,(function() { 
var G__7566__delegate = function (s,other,_){
return nex.interpreter.nex_set_symmetric_difference(s,other);
};
var G__7566 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7567__i = 0, G__7567__a = new Array(arguments.length -  2);
while (G__7567__i < G__7567__a.length) {G__7567__a[G__7567__i] = arguments[G__7567__i + 2]; ++G__7567__i;}
  _ = new cljs.core.IndexedSeq(G__7567__a,0,null);
} 
return G__7566__delegate.call(this,s,other,_);};
G__7566.cljs$lang$maxFixedArity = 2;
G__7566.cljs$lang$applyTo = (function (arglist__7568){
var s = cljs.core.first(arglist__7568);
arglist__7568 = cljs.core.next(arglist__7568);
var other = cljs.core.first(arglist__7568);
var _ = cljs.core.rest(arglist__7568);
return G__7566__delegate(s,other,_);
});
G__7566.cljs$core$IFn$_invoke$arity$variadic = G__7566__delegate;
return G__7566;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["send",(function() { 
var G__7569__delegate = function (ch,value,p__6385){
var vec__6386 = p__6385;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6386,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3(ch,value,timeout);
} else {
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2(ch,value);
}
};
var G__7569 = function (ch,value,var_args){
var p__6385 = null;
if (arguments.length > 2) {
var G__7570__i = 0, G__7570__a = new Array(arguments.length -  2);
while (G__7570__i < G__7570__a.length) {G__7570__a[G__7570__i] = arguments[G__7570__i + 2]; ++G__7570__i;}
  p__6385 = new cljs.core.IndexedSeq(G__7570__a,0,null);
} 
return G__7569__delegate.call(this,ch,value,p__6385);};
G__7569.cljs$lang$maxFixedArity = 2;
G__7569.cljs$lang$applyTo = (function (arglist__7571){
var ch = cljs.core.first(arglist__7571);
arglist__7571 = cljs.core.next(arglist__7571);
var value = cljs.core.first(arglist__7571);
var p__6385 = cljs.core.rest(arglist__7571);
return G__7569__delegate(ch,value,p__6385);
});
G__7569.cljs$core$IFn$_invoke$arity$variadic = G__7569__delegate;
return G__7569;
})()
,"try_send",(function() { 
var G__7572__delegate = function (ch,value,_){
return nex.interpreter.channel_try_send(ch,value);
};
var G__7572 = function (ch,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7573__i = 0, G__7573__a = new Array(arguments.length -  2);
while (G__7573__i < G__7573__a.length) {G__7573__a[G__7573__i] = arguments[G__7573__i + 2]; ++G__7573__i;}
  _ = new cljs.core.IndexedSeq(G__7573__a,0,null);
} 
return G__7572__delegate.call(this,ch,value,_);};
G__7572.cljs$lang$maxFixedArity = 2;
G__7572.cljs$lang$applyTo = (function (arglist__7574){
var ch = cljs.core.first(arglist__7574);
arglist__7574 = cljs.core.next(arglist__7574);
var value = cljs.core.first(arglist__7574);
var _ = cljs.core.rest(arglist__7574);
return G__7572__delegate(ch,value,_);
});
G__7572.cljs$core$IFn$_invoke$arity$variadic = G__7572__delegate;
return G__7572;
})()
,"receive",(function() { 
var G__7575__delegate = function (ch,p__6389){
var vec__6390 = p__6389;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6390,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2(ch,timeout);
} else {
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1(ch);
}
};
var G__7575 = function (ch,var_args){
var p__6389 = null;
if (arguments.length > 1) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  1);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 1]; ++G__7576__i;}
  p__6389 = new cljs.core.IndexedSeq(G__7576__a,0,null);
} 
return G__7575__delegate.call(this,ch,p__6389);};
G__7575.cljs$lang$maxFixedArity = 1;
G__7575.cljs$lang$applyTo = (function (arglist__7577){
var ch = cljs.core.first(arglist__7577);
var p__6389 = cljs.core.rest(arglist__7577);
return G__7575__delegate(ch,p__6389);
});
G__7575.cljs$core$IFn$_invoke$arity$variadic = G__7575__delegate;
return G__7575;
})()
,"try_receive",(function() { 
var G__7578__delegate = function (ch,_){
return nex.interpreter.channel_try_receive(ch);
};
var G__7578 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7579__i = 0, G__7579__a = new Array(arguments.length -  1);
while (G__7579__i < G__7579__a.length) {G__7579__a[G__7579__i] = arguments[G__7579__i + 1]; ++G__7579__i;}
  _ = new cljs.core.IndexedSeq(G__7579__a,0,null);
} 
return G__7578__delegate.call(this,ch,_);};
G__7578.cljs$lang$maxFixedArity = 1;
G__7578.cljs$lang$applyTo = (function (arglist__7580){
var ch = cljs.core.first(arglist__7580);
var _ = cljs.core.rest(arglist__7580);
return G__7578__delegate(ch,_);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
,"close",(function() { 
var G__7581__delegate = function (ch,_){
return nex.interpreter.channel_close(ch);
};
var G__7581 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7582__i = 0, G__7582__a = new Array(arguments.length -  1);
while (G__7582__i < G__7582__a.length) {G__7582__a[G__7582__i] = arguments[G__7582__i + 1]; ++G__7582__i;}
  _ = new cljs.core.IndexedSeq(G__7582__a,0,null);
} 
return G__7581__delegate.call(this,ch,_);};
G__7581.cljs$lang$maxFixedArity = 1;
G__7581.cljs$lang$applyTo = (function (arglist__7583){
var ch = cljs.core.first(arglist__7583);
var _ = cljs.core.rest(arglist__7583);
return G__7581__delegate(ch,_);
});
G__7581.cljs$core$IFn$_invoke$arity$variadic = G__7581__delegate;
return G__7581;
})()
,"is_closed",(function() { 
var G__7584__delegate = function (ch,_){
return new cljs.core.Keyword(null,"closed?","closed?",-1408769040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7584 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7585__i = 0, G__7585__a = new Array(arguments.length -  1);
while (G__7585__i < G__7585__a.length) {G__7585__a[G__7585__i] = arguments[G__7585__i + 1]; ++G__7585__i;}
  _ = new cljs.core.IndexedSeq(G__7585__a,0,null);
} 
return G__7584__delegate.call(this,ch,_);};
G__7584.cljs$lang$maxFixedArity = 1;
G__7584.cljs$lang$applyTo = (function (arglist__7586){
var ch = cljs.core.first(arglist__7586);
var _ = cljs.core.rest(arglist__7586);
return G__7584__delegate(ch,_);
});
G__7584.cljs$core$IFn$_invoke$arity$variadic = G__7584__delegate;
return G__7584;
})()
,"capacity",(function() { 
var G__7587__delegate = function (ch,_){
return new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7587 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7588__i = 0, G__7588__a = new Array(arguments.length -  1);
while (G__7588__i < G__7588__a.length) {G__7588__a[G__7588__i] = arguments[G__7588__i + 1]; ++G__7588__i;}
  _ = new cljs.core.IndexedSeq(G__7588__a,0,null);
} 
return G__7587__delegate.call(this,ch,_);};
G__7587.cljs$lang$maxFixedArity = 1;
G__7587.cljs$lang$applyTo = (function (arglist__7589){
var ch = cljs.core.first(arglist__7589);
var _ = cljs.core.rest(arglist__7589);
return G__7587__delegate(ch,_);
});
G__7587.cljs$core$IFn$_invoke$arity$variadic = G__7587__delegate;
return G__7587;
})()
,"size",(function() { 
var G__7590__delegate = function (ch,_){
return cljs.core.count(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
};
var G__7590 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7591__i = 0, G__7591__a = new Array(arguments.length -  1);
while (G__7591__i < G__7591__a.length) {G__7591__a[G__7591__i] = arguments[G__7591__i + 1]; ++G__7591__i;}
  _ = new cljs.core.IndexedSeq(G__7591__a,0,null);
} 
return G__7590__delegate.call(this,ch,_);};
G__7590.cljs$lang$maxFixedArity = 1;
G__7590.cljs$lang$applyTo = (function (arglist__7592){
var ch = cljs.core.first(arglist__7592);
var _ = cljs.core.rest(arglist__7592);
return G__7590__delegate(ch,_);
});
G__7590.cljs$core$IFn$_invoke$arity$variadic = G__7590__delegate;
return G__7590;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__7593__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__7593 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7594__i = 0, G__7594__a = new Array(arguments.length -  1);
while (G__7594__i < G__7594__a.length) {G__7594__a[G__7594__i] = arguments[G__7594__i + 1]; ++G__7594__i;}
  _ = new cljs.core.IndexedSeq(G__7594__a,0,null);
} 
return G__7593__delegate.call(this,b,_);};
G__7593.cljs$lang$maxFixedArity = 1;
G__7593.cljs$lang$applyTo = (function (arglist__7595){
var b = cljs.core.first(arglist__7595);
var _ = cljs.core.rest(arglist__7595);
return G__7593__delegate(b,_);
});
G__7593.cljs$core$IFn$_invoke$arity$variadic = G__7593__delegate;
return G__7593;
})()
,"and",(function() { 
var G__7596__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__7596 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7597__i = 0, G__7597__a = new Array(arguments.length -  2);
while (G__7597__i < G__7597__a.length) {G__7597__a[G__7597__i] = arguments[G__7597__i + 2]; ++G__7597__i;}
  _ = new cljs.core.IndexedSeq(G__7597__a,0,null);
} 
return G__7596__delegate.call(this,b,other,_);};
G__7596.cljs$lang$maxFixedArity = 2;
G__7596.cljs$lang$applyTo = (function (arglist__7598){
var b = cljs.core.first(arglist__7598);
arglist__7598 = cljs.core.next(arglist__7598);
var other = cljs.core.first(arglist__7598);
var _ = cljs.core.rest(arglist__7598);
return G__7596__delegate(b,other,_);
});
G__7596.cljs$core$IFn$_invoke$arity$variadic = G__7596__delegate;
return G__7596;
})()
,"or",(function() { 
var G__7599__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__7599 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7600__i = 0, G__7600__a = new Array(arguments.length -  2);
while (G__7600__i < G__7600__a.length) {G__7600__a[G__7600__i] = arguments[G__7600__i + 2]; ++G__7600__i;}
  _ = new cljs.core.IndexedSeq(G__7600__a,0,null);
} 
return G__7599__delegate.call(this,b,other,_);};
G__7599.cljs$lang$maxFixedArity = 2;
G__7599.cljs$lang$applyTo = (function (arglist__7601){
var b = cljs.core.first(arglist__7601);
arglist__7601 = cljs.core.next(arglist__7601);
var other = cljs.core.first(arglist__7601);
var _ = cljs.core.rest(arglist__7601);
return G__7599__delegate(b,other,_);
});
G__7599.cljs$core$IFn$_invoke$arity$variadic = G__7599__delegate;
return G__7599;
})()
,"not",(function() { 
var G__7602__delegate = function (b,_){
return cljs.core.not(b);
};
var G__7602 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7603__i = 0, G__7603__a = new Array(arguments.length -  1);
while (G__7603__i < G__7603__a.length) {G__7603__a[G__7603__i] = arguments[G__7603__i + 1]; ++G__7603__i;}
  _ = new cljs.core.IndexedSeq(G__7603__a,0,null);
} 
return G__7602__delegate.call(this,b,_);};
G__7602.cljs$lang$maxFixedArity = 1;
G__7602.cljs$lang$applyTo = (function (arglist__7604){
var b = cljs.core.first(arglist__7604);
var _ = cljs.core.rest(arglist__7604);
return G__7602__delegate(b,_);
});
G__7602.cljs$core$IFn$_invoke$arity$variadic = G__7602__delegate;
return G__7602;
})()
,"equals",(function() { 
var G__7605__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7605 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7606__i = 0, G__7606__a = new Array(arguments.length -  2);
while (G__7606__i < G__7606__a.length) {G__7606__a[G__7606__i] = arguments[G__7606__i + 2]; ++G__7606__i;}
  _ = new cljs.core.IndexedSeq(G__7606__a,0,null);
} 
return G__7605__delegate.call(this,b,other,_);};
G__7605.cljs$lang$maxFixedArity = 2;
G__7605.cljs$lang$applyTo = (function (arglist__7607){
var b = cljs.core.first(arglist__7607);
arglist__7607 = cljs.core.next(arglist__7607);
var other = cljs.core.first(arglist__7607);
var _ = cljs.core.rest(arglist__7607);
return G__7605__delegate(b,other,_);
});
G__7605.cljs$core$IFn$_invoke$arity$variadic = G__7605__delegate;
return G__7605;
})()
,"not_equals",(function() { 
var G__7608__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7608 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7609__i = 0, G__7609__a = new Array(arguments.length -  2);
while (G__7609__i < G__7609__a.length) {G__7609__a[G__7609__i] = arguments[G__7609__i + 2]; ++G__7609__i;}
  _ = new cljs.core.IndexedSeq(G__7609__a,0,null);
} 
return G__7608__delegate.call(this,b,other,_);};
G__7608.cljs$lang$maxFixedArity = 2;
G__7608.cljs$lang$applyTo = (function (arglist__7610){
var b = cljs.core.first(arglist__7610);
arglist__7610 = cljs.core.next(arglist__7610);
var other = cljs.core.first(arglist__7610);
var _ = cljs.core.rest(arglist__7610);
return G__7608__delegate(b,other,_);
});
G__7608.cljs$core$IFn$_invoke$arity$variadic = G__7608__delegate;
return G__7608;
})()
,"compare",(function() { 
var G__7611__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__7611 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7612__i = 0, G__7612__a = new Array(arguments.length -  2);
while (G__7612__i < G__7612__a.length) {G__7612__a[G__7612__i] = arguments[G__7612__i + 2]; ++G__7612__i;}
  _ = new cljs.core.IndexedSeq(G__7612__a,0,null);
} 
return G__7611__delegate.call(this,b,other,_);};
G__7611.cljs$lang$maxFixedArity = 2;
G__7611.cljs$lang$applyTo = (function (arglist__7613){
var b = cljs.core.first(arglist__7613);
arglist__7613 = cljs.core.next(arglist__7613);
var other = cljs.core.first(arglist__7613);
var _ = cljs.core.rest(arglist__7613);
return G__7611__delegate(b,other,_);
});
G__7611.cljs$core$IFn$_invoke$arity$variadic = G__7611__delegate;
return G__7611;
})()
,"hash",(function() { 
var G__7614__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__7614 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7615__i = 0, G__7615__a = new Array(arguments.length -  1);
while (G__7615__i < G__7615__a.length) {G__7615__a[G__7615__i] = arguments[G__7615__i + 1]; ++G__7615__i;}
  _ = new cljs.core.IndexedSeq(G__7615__a,0,null);
} 
return G__7614__delegate.call(this,b,_);};
G__7614.cljs$lang$maxFixedArity = 1;
G__7614.cljs$lang$applyTo = (function (arglist__7616){
var b = cljs.core.first(arglist__7616);
var _ = cljs.core.rest(arglist__7616);
return G__7614__delegate(b,_);
});
G__7614.cljs$core$IFn$_invoke$arity$variadic = G__7614__delegate;
return G__7614;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__7617__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7617 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7618__i = 0, G__7618__a = new Array(arguments.length -  1);
while (G__7618__i < G__7618__a.length) {G__7618__a[G__7618__i] = arguments[G__7618__i + 1]; ++G__7618__i;}
  _ = new cljs.core.IndexedSeq(G__7618__a,0,null);
} 
return G__7617__delegate.call(this,f,_);};
G__7617.cljs$lang$maxFixedArity = 1;
G__7617.cljs$lang$applyTo = (function (arglist__7619){
var f = cljs.core.first(arglist__7619);
var _ = cljs.core.rest(arglist__7619);
return G__7617__delegate(f,_);
});
G__7617.cljs$core$IFn$_invoke$arity$variadic = G__7617__delegate;
return G__7617;
})()
,"write",(function() { 
var G__7620__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7620 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7621__i = 0, G__7621__a = new Array(arguments.length -  2);
while (G__7621__i < G__7621__a.length) {G__7621__a[G__7621__i] = arguments[G__7621__i + 2]; ++G__7621__i;}
  _ = new cljs.core.IndexedSeq(G__7621__a,0,null);
} 
return G__7620__delegate.call(this,f,content,_);};
G__7620.cljs$lang$maxFixedArity = 2;
G__7620.cljs$lang$applyTo = (function (arglist__7622){
var f = cljs.core.first(arglist__7622);
arglist__7622 = cljs.core.next(arglist__7622);
var content = cljs.core.first(arglist__7622);
var _ = cljs.core.rest(arglist__7622);
return G__7620__delegate(f,content,_);
});
G__7620.cljs$core$IFn$_invoke$arity$variadic = G__7620__delegate;
return G__7620;
})()
,"append",(function() { 
var G__7623__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7623 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7624__i = 0, G__7624__a = new Array(arguments.length -  2);
while (G__7624__i < G__7624__a.length) {G__7624__a[G__7624__i] = arguments[G__7624__i + 2]; ++G__7624__i;}
  _ = new cljs.core.IndexedSeq(G__7624__a,0,null);
} 
return G__7623__delegate.call(this,f,content,_);};
G__7623.cljs$lang$maxFixedArity = 2;
G__7623.cljs$lang$applyTo = (function (arglist__7625){
var f = cljs.core.first(arglist__7625);
arglist__7625 = cljs.core.next(arglist__7625);
var content = cljs.core.first(arglist__7625);
var _ = cljs.core.rest(arglist__7625);
return G__7623__delegate(f,content,_);
});
G__7623.cljs$core$IFn$_invoke$arity$variadic = G__7623__delegate;
return G__7623;
})()
,"exists",(function() { 
var G__7626__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7626 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7627__i = 0, G__7627__a = new Array(arguments.length -  1);
while (G__7627__i < G__7627__a.length) {G__7627__a[G__7627__i] = arguments[G__7627__i + 1]; ++G__7627__i;}
  _ = new cljs.core.IndexedSeq(G__7627__a,0,null);
} 
return G__7626__delegate.call(this,f,_);};
G__7626.cljs$lang$maxFixedArity = 1;
G__7626.cljs$lang$applyTo = (function (arglist__7628){
var f = cljs.core.first(arglist__7628);
var _ = cljs.core.rest(arglist__7628);
return G__7626__delegate(f,_);
});
G__7626.cljs$core$IFn$_invoke$arity$variadic = G__7626__delegate;
return G__7626;
})()
,"delete",(function() { 
var G__7629__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__7629 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7630__i = 0, G__7630__a = new Array(arguments.length -  1);
while (G__7630__i < G__7630__a.length) {G__7630__a[G__7630__i] = arguments[G__7630__i + 1]; ++G__7630__i;}
  _ = new cljs.core.IndexedSeq(G__7630__a,0,null);
} 
return G__7629__delegate.call(this,f,_);};
G__7629.cljs$lang$maxFixedArity = 1;
G__7629.cljs$lang$applyTo = (function (arglist__7631){
var f = cljs.core.first(arglist__7631);
var _ = cljs.core.rest(arglist__7631);
return G__7629__delegate(f,_);
});
G__7629.cljs$core$IFn$_invoke$arity$variadic = G__7629__delegate;
return G__7629;
})()
,"lines",(function() { 
var G__7632__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7632 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7634__i = 0, G__7634__a = new Array(arguments.length -  1);
while (G__7634__i < G__7634__a.length) {G__7634__a[G__7634__i] = arguments[G__7634__i + 1]; ++G__7634__i;}
  _ = new cljs.core.IndexedSeq(G__7634__a,0,null);
} 
return G__7632__delegate.call(this,f,_);};
G__7632.cljs$lang$maxFixedArity = 1;
G__7632.cljs$lang$applyTo = (function (arglist__7635){
var f = cljs.core.first(arglist__7635);
var _ = cljs.core.rest(arglist__7635);
return G__7632__delegate(f,_);
});
G__7632.cljs$core$IFn$_invoke$arity$variadic = G__7632__delegate;
return G__7632;
})()
,"close",(function() { 
var G__7636__delegate = function (_,___$1){
return null;
};
var G__7636 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7637__i = 0, G__7637__a = new Array(arguments.length -  1);
while (G__7637__i < G__7637__a.length) {G__7637__a[G__7637__i] = arguments[G__7637__i + 1]; ++G__7637__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7637__a,0,null);
} 
return G__7636__delegate.call(this,_,___$1);};
G__7636.cljs$lang$maxFixedArity = 1;
G__7636.cljs$lang$applyTo = (function (arglist__7638){
var _ = cljs.core.first(arglist__7638);
var ___$1 = cljs.core.rest(arglist__7638);
return G__7636__delegate(_,___$1);
});
G__7636.cljs$core$IFn$_invoke$arity$variadic = G__7636__delegate;
return G__7636;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","bitwise_set","less_than","bitwise_or","plus","to_string","hash","greater_than","bitwise_logical_right_shift","pick","max","not_equals","bitwise_unset","minus","times","bitwise_and","bitwise_right_shift","divided_by","abs","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","equals","greater_than_or_equal","bitwise_rotate_left","bitwise_xor"],[(function() { 
var G__7643__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7643 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7644__i = 0, G__7644__a = new Array(arguments.length -  2);
while (G__7644__i < G__7644__a.length) {G__7644__a[G__7644__i] = arguments[G__7644__i + 2]; ++G__7644__i;}
  _ = new cljs.core.IndexedSeq(G__7644__a,0,null);
} 
return G__7643__delegate.call(this,n,other,_);};
G__7643.cljs$lang$maxFixedArity = 2;
G__7643.cljs$lang$applyTo = (function (arglist__7649){
var n = cljs.core.first(arglist__7649);
arglist__7649 = cljs.core.next(arglist__7649);
var other = cljs.core.first(arglist__7649);
var _ = cljs.core.rest(arglist__7649);
return G__7643__delegate(n,other,_);
});
G__7643.cljs$core$IFn$_invoke$arity$variadic = G__7643__delegate;
return G__7643;
})()
,(function() { 
var G__7650__delegate = function (n,other,_){
return (n <= other);
};
var G__7650 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7652__i = 0, G__7652__a = new Array(arguments.length -  2);
while (G__7652__i < G__7652__a.length) {G__7652__a[G__7652__i] = arguments[G__7652__i + 2]; ++G__7652__i;}
  _ = new cljs.core.IndexedSeq(G__7652__a,0,null);
} 
return G__7650__delegate.call(this,n,other,_);};
G__7650.cljs$lang$maxFixedArity = 2;
G__7650.cljs$lang$applyTo = (function (arglist__7653){
var n = cljs.core.first(arglist__7653);
arglist__7653 = cljs.core.next(arglist__7653);
var other = cljs.core.first(arglist__7653);
var _ = cljs.core.rest(arglist__7653);
return G__7650__delegate(n,other,_);
});
G__7650.cljs$core$IFn$_invoke$arity$variadic = G__7650__delegate;
return G__7650;
})()
,(function() { 
var G__7654__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7654 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7655__i = 0, G__7655__a = new Array(arguments.length -  2);
while (G__7655__i < G__7655__a.length) {G__7655__a[G__7655__i] = arguments[G__7655__i + 2]; ++G__7655__i;}
  _ = new cljs.core.IndexedSeq(G__7655__a,0,null);
} 
return G__7654__delegate.call(this,n,other,_);};
G__7654.cljs$lang$maxFixedArity = 2;
G__7654.cljs$lang$applyTo = (function (arglist__7656){
var n = cljs.core.first(arglist__7656);
arglist__7656 = cljs.core.next(arglist__7656);
var other = cljs.core.first(arglist__7656);
var _ = cljs.core.rest(arglist__7656);
return G__7654__delegate(n,other,_);
});
G__7654.cljs$core$IFn$_invoke$arity$variadic = G__7654__delegate;
return G__7654;
})()
,(function() { 
var G__7657__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_set(n,idx);
};
var G__7657 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7658__i = 0, G__7658__a = new Array(arguments.length -  2);
while (G__7658__i < G__7658__a.length) {G__7658__a[G__7658__i] = arguments[G__7658__i + 2]; ++G__7658__i;}
  _ = new cljs.core.IndexedSeq(G__7658__a,0,null);
} 
return G__7657__delegate.call(this,n,idx,_);};
G__7657.cljs$lang$maxFixedArity = 2;
G__7657.cljs$lang$applyTo = (function (arglist__7659){
var n = cljs.core.first(arglist__7659);
arglist__7659 = cljs.core.next(arglist__7659);
var idx = cljs.core.first(arglist__7659);
var _ = cljs.core.rest(arglist__7659);
return G__7657__delegate(n,idx,_);
});
G__7657.cljs$core$IFn$_invoke$arity$variadic = G__7657__delegate;
return G__7657;
})()
,(function() { 
var G__7660__delegate = function (n,other,_){
return (n < other);
};
var G__7660 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7665__i = 0, G__7665__a = new Array(arguments.length -  2);
while (G__7665__i < G__7665__a.length) {G__7665__a[G__7665__i] = arguments[G__7665__i + 2]; ++G__7665__i;}
  _ = new cljs.core.IndexedSeq(G__7665__a,0,null);
} 
return G__7660__delegate.call(this,n,other,_);};
G__7660.cljs$lang$maxFixedArity = 2;
G__7660.cljs$lang$applyTo = (function (arglist__7666){
var n = cljs.core.first(arglist__7666);
arglist__7666 = cljs.core.next(arglist__7666);
var other = cljs.core.first(arglist__7666);
var _ = cljs.core.rest(arglist__7666);
return G__7660__delegate(n,other,_);
});
G__7660.cljs$core$IFn$_invoke$arity$variadic = G__7660__delegate;
return G__7660;
})()
,(function() { 
var G__7667__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_or(n,other);
};
var G__7667 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7668__i = 0, G__7668__a = new Array(arguments.length -  2);
while (G__7668__i < G__7668__a.length) {G__7668__a[G__7668__i] = arguments[G__7668__i + 2]; ++G__7668__i;}
  _ = new cljs.core.IndexedSeq(G__7668__a,0,null);
} 
return G__7667__delegate.call(this,n,other,_);};
G__7667.cljs$lang$maxFixedArity = 2;
G__7667.cljs$lang$applyTo = (function (arglist__7669){
var n = cljs.core.first(arglist__7669);
arglist__7669 = cljs.core.next(arglist__7669);
var other = cljs.core.first(arglist__7669);
var _ = cljs.core.rest(arglist__7669);
return G__7667__delegate(n,other,_);
});
G__7667.cljs$core$IFn$_invoke$arity$variadic = G__7667__delegate;
return G__7667;
})()
,(function() { 
var G__7670__delegate = function (n,other,_){
return (n + other);
};
var G__7670 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7675__i = 0, G__7675__a = new Array(arguments.length -  2);
while (G__7675__i < G__7675__a.length) {G__7675__a[G__7675__i] = arguments[G__7675__i + 2]; ++G__7675__i;}
  _ = new cljs.core.IndexedSeq(G__7675__a,0,null);
} 
return G__7670__delegate.call(this,n,other,_);};
G__7670.cljs$lang$maxFixedArity = 2;
G__7670.cljs$lang$applyTo = (function (arglist__7676){
var n = cljs.core.first(arglist__7676);
arglist__7676 = cljs.core.next(arglist__7676);
var other = cljs.core.first(arglist__7676);
var _ = cljs.core.rest(arglist__7676);
return G__7670__delegate(n,other,_);
});
G__7670.cljs$core$IFn$_invoke$arity$variadic = G__7670__delegate;
return G__7670;
})()
,(function() { 
var G__7677__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7677 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7682__i = 0, G__7682__a = new Array(arguments.length -  1);
while (G__7682__i < G__7682__a.length) {G__7682__a[G__7682__i] = arguments[G__7682__i + 1]; ++G__7682__i;}
  _ = new cljs.core.IndexedSeq(G__7682__a,0,null);
} 
return G__7677__delegate.call(this,n,_);};
G__7677.cljs$lang$maxFixedArity = 1;
G__7677.cljs$lang$applyTo = (function (arglist__7683){
var n = cljs.core.first(arglist__7683);
var _ = cljs.core.rest(arglist__7683);
return G__7677__delegate(n,_);
});
G__7677.cljs$core$IFn$_invoke$arity$variadic = G__7677__delegate;
return G__7677;
})()
,(function() { 
var G__7684__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7684 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7685__i = 0, G__7685__a = new Array(arguments.length -  1);
while (G__7685__i < G__7685__a.length) {G__7685__a[G__7685__i] = arguments[G__7685__i + 1]; ++G__7685__i;}
  _ = new cljs.core.IndexedSeq(G__7685__a,0,null);
} 
return G__7684__delegate.call(this,n,_);};
G__7684.cljs$lang$maxFixedArity = 1;
G__7684.cljs$lang$applyTo = (function (arglist__7686){
var n = cljs.core.first(arglist__7686);
var _ = cljs.core.rest(arglist__7686);
return G__7684__delegate(n,_);
});
G__7684.cljs$core$IFn$_invoke$arity$variadic = G__7684__delegate;
return G__7684;
})()
,(function() { 
var G__7691__delegate = function (n,other,_){
return (n > other);
};
var G__7691 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7692__i = 0, G__7692__a = new Array(arguments.length -  2);
while (G__7692__i < G__7692__a.length) {G__7692__a[G__7692__i] = arguments[G__7692__i + 2]; ++G__7692__i;}
  _ = new cljs.core.IndexedSeq(G__7692__a,0,null);
} 
return G__7691__delegate.call(this,n,other,_);};
G__7691.cljs$lang$maxFixedArity = 2;
G__7691.cljs$lang$applyTo = (function (arglist__7693){
var n = cljs.core.first(arglist__7693);
arglist__7693 = cljs.core.next(arglist__7693);
var other = cljs.core.first(arglist__7693);
var _ = cljs.core.rest(arglist__7693);
return G__7691__delegate(n,other,_);
});
G__7691.cljs$core$IFn$_invoke$arity$variadic = G__7691__delegate;
return G__7691;
})()
,(function() { 
var G__7694__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_logical_right_shift(n,shift);
};
var G__7694 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7695__i = 0, G__7695__a = new Array(arguments.length -  2);
while (G__7695__i < G__7695__a.length) {G__7695__a[G__7695__i] = arguments[G__7695__i + 2]; ++G__7695__i;}
  _ = new cljs.core.IndexedSeq(G__7695__a,0,null);
} 
return G__7694__delegate.call(this,n,shift,_);};
G__7694.cljs$lang$maxFixedArity = 2;
G__7694.cljs$lang$applyTo = (function (arglist__7696){
var n = cljs.core.first(arglist__7696);
arglist__7696 = cljs.core.next(arglist__7696);
var shift = cljs.core.first(arglist__7696);
var _ = cljs.core.rest(arglist__7696);
return G__7694__delegate(n,shift,_);
});
G__7694.cljs$core$IFn$_invoke$arity$variadic = G__7694__delegate;
return G__7694;
})()
,(function() { 
var G__7697__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__7697 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7698__i = 0, G__7698__a = new Array(arguments.length -  1);
while (G__7698__i < G__7698__a.length) {G__7698__a[G__7698__i] = arguments[G__7698__i + 1]; ++G__7698__i;}
  _ = new cljs.core.IndexedSeq(G__7698__a,0,null);
} 
return G__7697__delegate.call(this,n,_);};
G__7697.cljs$lang$maxFixedArity = 1;
G__7697.cljs$lang$applyTo = (function (arglist__7699){
var n = cljs.core.first(arglist__7699);
var _ = cljs.core.rest(arglist__7699);
return G__7697__delegate(n,_);
});
G__7697.cljs$core$IFn$_invoke$arity$variadic = G__7697__delegate;
return G__7697;
})()
,(function() { 
var G__7700__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7700 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7701__i = 0, G__7701__a = new Array(arguments.length -  2);
while (G__7701__i < G__7701__a.length) {G__7701__a[G__7701__i] = arguments[G__7701__i + 2]; ++G__7701__i;}
  _ = new cljs.core.IndexedSeq(G__7701__a,0,null);
} 
return G__7700__delegate.call(this,n,other,_);};
G__7700.cljs$lang$maxFixedArity = 2;
G__7700.cljs$lang$applyTo = (function (arglist__7702){
var n = cljs.core.first(arglist__7702);
arglist__7702 = cljs.core.next(arglist__7702);
var other = cljs.core.first(arglist__7702);
var _ = cljs.core.rest(arglist__7702);
return G__7700__delegate(n,other,_);
});
G__7700.cljs$core$IFn$_invoke$arity$variadic = G__7700__delegate;
return G__7700;
})()
,(function() { 
var G__7703__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7703 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7704__i = 0, G__7704__a = new Array(arguments.length -  2);
while (G__7704__i < G__7704__a.length) {G__7704__a[G__7704__i] = arguments[G__7704__i + 2]; ++G__7704__i;}
  _ = new cljs.core.IndexedSeq(G__7704__a,0,null);
} 
return G__7703__delegate.call(this,n,other,_);};
G__7703.cljs$lang$maxFixedArity = 2;
G__7703.cljs$lang$applyTo = (function (arglist__7705){
var n = cljs.core.first(arglist__7705);
arglist__7705 = cljs.core.next(arglist__7705);
var other = cljs.core.first(arglist__7705);
var _ = cljs.core.rest(arglist__7705);
return G__7703__delegate(n,other,_);
});
G__7703.cljs$core$IFn$_invoke$arity$variadic = G__7703__delegate;
return G__7703;
})()
,(function() { 
var G__7706__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_unset(n,idx);
};
var G__7706 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7707__i = 0, G__7707__a = new Array(arguments.length -  2);
while (G__7707__i < G__7707__a.length) {G__7707__a[G__7707__i] = arguments[G__7707__i + 2]; ++G__7707__i;}
  _ = new cljs.core.IndexedSeq(G__7707__a,0,null);
} 
return G__7706__delegate.call(this,n,idx,_);};
G__7706.cljs$lang$maxFixedArity = 2;
G__7706.cljs$lang$applyTo = (function (arglist__7708){
var n = cljs.core.first(arglist__7708);
arglist__7708 = cljs.core.next(arglist__7708);
var idx = cljs.core.first(arglist__7708);
var _ = cljs.core.rest(arglist__7708);
return G__7706__delegate(n,idx,_);
});
G__7706.cljs$core$IFn$_invoke$arity$variadic = G__7706__delegate;
return G__7706;
})()
,(function() { 
var G__7709__delegate = function (n,other,_){
return (n - other);
};
var G__7709 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7710__i = 0, G__7710__a = new Array(arguments.length -  2);
while (G__7710__i < G__7710__a.length) {G__7710__a[G__7710__i] = arguments[G__7710__i + 2]; ++G__7710__i;}
  _ = new cljs.core.IndexedSeq(G__7710__a,0,null);
} 
return G__7709__delegate.call(this,n,other,_);};
G__7709.cljs$lang$maxFixedArity = 2;
G__7709.cljs$lang$applyTo = (function (arglist__7711){
var n = cljs.core.first(arglist__7711);
arglist__7711 = cljs.core.next(arglist__7711);
var other = cljs.core.first(arglist__7711);
var _ = cljs.core.rest(arglist__7711);
return G__7709__delegate(n,other,_);
});
G__7709.cljs$core$IFn$_invoke$arity$variadic = G__7709__delegate;
return G__7709;
})()
,(function() { 
var G__7712__delegate = function (n,other,_){
return (n * other);
};
var G__7712 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7713__i = 0, G__7713__a = new Array(arguments.length -  2);
while (G__7713__i < G__7713__a.length) {G__7713__a[G__7713__i] = arguments[G__7713__i + 2]; ++G__7713__i;}
  _ = new cljs.core.IndexedSeq(G__7713__a,0,null);
} 
return G__7712__delegate.call(this,n,other,_);};
G__7712.cljs$lang$maxFixedArity = 2;
G__7712.cljs$lang$applyTo = (function (arglist__7714){
var n = cljs.core.first(arglist__7714);
arglist__7714 = cljs.core.next(arglist__7714);
var other = cljs.core.first(arglist__7714);
var _ = cljs.core.rest(arglist__7714);
return G__7712__delegate(n,other,_);
});
G__7712.cljs$core$IFn$_invoke$arity$variadic = G__7712__delegate;
return G__7712;
})()
,(function() { 
var G__7715__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_and(n,other);
};
var G__7715 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7716__i = 0, G__7716__a = new Array(arguments.length -  2);
while (G__7716__i < G__7716__a.length) {G__7716__a[G__7716__i] = arguments[G__7716__i + 2]; ++G__7716__i;}
  _ = new cljs.core.IndexedSeq(G__7716__a,0,null);
} 
return G__7715__delegate.call(this,n,other,_);};
G__7715.cljs$lang$maxFixedArity = 2;
G__7715.cljs$lang$applyTo = (function (arglist__7717){
var n = cljs.core.first(arglist__7717);
arglist__7717 = cljs.core.next(arglist__7717);
var other = cljs.core.first(arglist__7717);
var _ = cljs.core.rest(arglist__7717);
return G__7715__delegate(n,other,_);
});
G__7715.cljs$core$IFn$_invoke$arity$variadic = G__7715__delegate;
return G__7715;
})()
,(function() { 
var G__7718__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_right_shift(n,shift);
};
var G__7718 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7719__i = 0, G__7719__a = new Array(arguments.length -  2);
while (G__7719__i < G__7719__a.length) {G__7719__a[G__7719__i] = arguments[G__7719__i + 2]; ++G__7719__i;}
  _ = new cljs.core.IndexedSeq(G__7719__a,0,null);
} 
return G__7718__delegate.call(this,n,shift,_);};
G__7718.cljs$lang$maxFixedArity = 2;
G__7718.cljs$lang$applyTo = (function (arglist__7720){
var n = cljs.core.first(arglist__7720);
arglist__7720 = cljs.core.next(arglist__7720);
var shift = cljs.core.first(arglist__7720);
var _ = cljs.core.rest(arglist__7720);
return G__7718__delegate(n,shift,_);
});
G__7718.cljs$core$IFn$_invoke$arity$variadic = G__7718__delegate;
return G__7718;
})()
,(function() { 
var G__7721__delegate = function (n,other,_){
return (n / other);
};
var G__7721 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7722__i = 0, G__7722__a = new Array(arguments.length -  2);
while (G__7722__i < G__7722__a.length) {G__7722__a[G__7722__i] = arguments[G__7722__i + 2]; ++G__7722__i;}
  _ = new cljs.core.IndexedSeq(G__7722__a,0,null);
} 
return G__7721__delegate.call(this,n,other,_);};
G__7721.cljs$lang$maxFixedArity = 2;
G__7721.cljs$lang$applyTo = (function (arglist__7723){
var n = cljs.core.first(arglist__7723);
arglist__7723 = cljs.core.next(arglist__7723);
var other = cljs.core.first(arglist__7723);
var _ = cljs.core.rest(arglist__7723);
return G__7721__delegate(n,other,_);
});
G__7721.cljs$core$IFn$_invoke$arity$variadic = G__7721__delegate;
return G__7721;
})()
,(function() { 
var G__7724__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7724 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7725__i = 0, G__7725__a = new Array(arguments.length -  1);
while (G__7725__i < G__7725__a.length) {G__7725__a[G__7725__i] = arguments[G__7725__i + 1]; ++G__7725__i;}
  _ = new cljs.core.IndexedSeq(G__7725__a,0,null);
} 
return G__7724__delegate.call(this,n,_);};
G__7724.cljs$lang$maxFixedArity = 1;
G__7724.cljs$lang$applyTo = (function (arglist__7726){
var n = cljs.core.first(arglist__7726);
var _ = cljs.core.rest(arglist__7726);
return G__7724__delegate(n,_);
});
G__7724.cljs$core$IFn$_invoke$arity$variadic = G__7724__delegate;
return G__7724;
})()
,(function() { 
var G__7727__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_right(n,shift);
};
var G__7727 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7728__i = 0, G__7728__a = new Array(arguments.length -  2);
while (G__7728__i < G__7728__a.length) {G__7728__a[G__7728__i] = arguments[G__7728__i + 2]; ++G__7728__i;}
  _ = new cljs.core.IndexedSeq(G__7728__a,0,null);
} 
return G__7727__delegate.call(this,n,shift,_);};
G__7727.cljs$lang$maxFixedArity = 2;
G__7727.cljs$lang$applyTo = (function (arglist__7729){
var n = cljs.core.first(arglist__7729);
arglist__7729 = cljs.core.next(arglist__7729);
var shift = cljs.core.first(arglist__7729);
var _ = cljs.core.rest(arglist__7729);
return G__7727__delegate(n,shift,_);
});
G__7727.cljs$core$IFn$_invoke$arity$variadic = G__7727__delegate;
return G__7727;
})()
,(function() { 
var G__7730__delegate = function (n,_){
return nex.interpreter.nex_bitwise_not(n);
};
var G__7730 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7731__i = 0, G__7731__a = new Array(arguments.length -  1);
while (G__7731__i < G__7731__a.length) {G__7731__a[G__7731__i] = arguments[G__7731__i + 1]; ++G__7731__i;}
  _ = new cljs.core.IndexedSeq(G__7731__a,0,null);
} 
return G__7730__delegate.call(this,n,_);};
G__7730.cljs$lang$maxFixedArity = 1;
G__7730.cljs$lang$applyTo = (function (arglist__7732){
var n = cljs.core.first(arglist__7732);
var _ = cljs.core.rest(arglist__7732);
return G__7730__delegate(n,_);
});
G__7730.cljs$core$IFn$_invoke$arity$variadic = G__7730__delegate;
return G__7730;
})()
,(function() { 
var G__7733__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_left_shift(n,shift);
};
var G__7733 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7734__i = 0, G__7734__a = new Array(arguments.length -  2);
while (G__7734__i < G__7734__a.length) {G__7734__a[G__7734__i] = arguments[G__7734__i + 2]; ++G__7734__i;}
  _ = new cljs.core.IndexedSeq(G__7734__a,0,null);
} 
return G__7733__delegate.call(this,n,shift,_);};
G__7733.cljs$lang$maxFixedArity = 2;
G__7733.cljs$lang$applyTo = (function (arglist__7735){
var n = cljs.core.first(arglist__7735);
arglist__7735 = cljs.core.next(arglist__7735);
var shift = cljs.core.first(arglist__7735);
var _ = cljs.core.rest(arglist__7735);
return G__7733__delegate(n,shift,_);
});
G__7733.cljs$core$IFn$_invoke$arity$variadic = G__7733__delegate;
return G__7733;
})()
,(function() { 
var G__7736__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_is_set(n,idx);
};
var G__7736 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7737__i = 0, G__7737__a = new Array(arguments.length -  2);
while (G__7737__i < G__7737__a.length) {G__7737__a[G__7737__i] = arguments[G__7737__i + 2]; ++G__7737__i;}
  _ = new cljs.core.IndexedSeq(G__7737__a,0,null);
} 
return G__7736__delegate.call(this,n,idx,_);};
G__7736.cljs$lang$maxFixedArity = 2;
G__7736.cljs$lang$applyTo = (function (arglist__7738){
var n = cljs.core.first(arglist__7738);
arglist__7738 = cljs.core.next(arglist__7738);
var idx = cljs.core.first(arglist__7738);
var _ = cljs.core.rest(arglist__7738);
return G__7736__delegate(n,idx,_);
});
G__7736.cljs$core$IFn$_invoke$arity$variadic = G__7736__delegate;
return G__7736;
})()
,(function() { 
var G__7739__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7739 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7740__i = 0, G__7740__a = new Array(arguments.length -  2);
while (G__7740__i < G__7740__a.length) {G__7740__a[G__7740__i] = arguments[G__7740__i + 2]; ++G__7740__i;}
  _ = new cljs.core.IndexedSeq(G__7740__a,0,null);
} 
return G__7739__delegate.call(this,n,other,_);};
G__7739.cljs$lang$maxFixedArity = 2;
G__7739.cljs$lang$applyTo = (function (arglist__7741){
var n = cljs.core.first(arglist__7741);
arglist__7741 = cljs.core.next(arglist__7741);
var other = cljs.core.first(arglist__7741);
var _ = cljs.core.rest(arglist__7741);
return G__7739__delegate(n,other,_);
});
G__7739.cljs$core$IFn$_invoke$arity$variadic = G__7739__delegate;
return G__7739;
})()
,(function() { 
var G__7742__delegate = function (n,other,_){
return (n >= other);
};
var G__7742 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7743__i = 0, G__7743__a = new Array(arguments.length -  2);
while (G__7743__i < G__7743__a.length) {G__7743__a[G__7743__i] = arguments[G__7743__i + 2]; ++G__7743__i;}
  _ = new cljs.core.IndexedSeq(G__7743__a,0,null);
} 
return G__7742__delegate.call(this,n,other,_);};
G__7742.cljs$lang$maxFixedArity = 2;
G__7742.cljs$lang$applyTo = (function (arglist__7744){
var n = cljs.core.first(arglist__7744);
arglist__7744 = cljs.core.next(arglist__7744);
var other = cljs.core.first(arglist__7744);
var _ = cljs.core.rest(arglist__7744);
return G__7742__delegate(n,other,_);
});
G__7742.cljs$core$IFn$_invoke$arity$variadic = G__7742__delegate;
return G__7742;
})()
,(function() { 
var G__7745__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_left(n,shift);
};
var G__7745 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7746__i = 0, G__7746__a = new Array(arguments.length -  2);
while (G__7746__i < G__7746__a.length) {G__7746__a[G__7746__i] = arguments[G__7746__i + 2]; ++G__7746__i;}
  _ = new cljs.core.IndexedSeq(G__7746__a,0,null);
} 
return G__7745__delegate.call(this,n,shift,_);};
G__7745.cljs$lang$maxFixedArity = 2;
G__7745.cljs$lang$applyTo = (function (arglist__7747){
var n = cljs.core.first(arglist__7747);
arglist__7747 = cljs.core.next(arglist__7747);
var shift = cljs.core.first(arglist__7747);
var _ = cljs.core.rest(arglist__7747);
return G__7745__delegate(n,shift,_);
});
G__7745.cljs$core$IFn$_invoke$arity$variadic = G__7745__delegate;
return G__7745;
})()
,(function() { 
var G__7748__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_xor(n,other);
};
var G__7748 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7749__i = 0, G__7749__a = new Array(arguments.length -  2);
while (G__7749__i < G__7749__a.length) {G__7749__a[G__7749__i] = arguments[G__7749__i + 2]; ++G__7749__i;}
  _ = new cljs.core.IndexedSeq(G__7749__a,0,null);
} 
return G__7748__delegate.call(this,n,other,_);};
G__7748.cljs$lang$maxFixedArity = 2;
G__7748.cljs$lang$applyTo = (function (arglist__7750){
var n = cljs.core.first(arglist__7750);
arglist__7750 = cljs.core.next(arglist__7750);
var other = cljs.core.first(arglist__7750);
var _ = cljs.core.rest(arglist__7750);
return G__7748__delegate(n,other,_);
});
G__7748.cljs$core$IFn$_invoke$arity$variadic = G__7748__delegate;
return G__7748;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7751__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7751 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7752__i = 0, G__7752__a = new Array(arguments.length -  1);
while (G__7752__i < G__7752__a.length) {G__7752__a[G__7752__i] = arguments[G__7752__i + 1]; ++G__7752__i;}
  _ = new cljs.core.IndexedSeq(G__7752__a,0,null);
} 
return G__7751__delegate.call(this,c,_);};
G__7751.cljs$lang$maxFixedArity = 1;
G__7751.cljs$lang$applyTo = (function (arglist__7753){
var c = cljs.core.first(arglist__7753);
var _ = cljs.core.rest(arglist__7753);
return G__7751__delegate(c,_);
});
G__7751.cljs$core$IFn$_invoke$arity$variadic = G__7751__delegate;
return G__7751;
})()
,"item",(function() { 
var G__7754__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,idx);
var v = nex.interpreter.nex_map_get(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c),k);
return nex.interpreter.nex_array_from(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7754 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7755__i = 0, G__7755__a = new Array(arguments.length -  1);
while (G__7755__i < G__7755__a.length) {G__7755__a[G__7755__i] = arguments[G__7755__i + 1]; ++G__7755__i;}
  _ = new cljs.core.IndexedSeq(G__7755__a,0,null);
} 
return G__7754__delegate.call(this,c,_);};
G__7754.cljs$lang$maxFixedArity = 1;
G__7754.cljs$lang$applyTo = (function (arglist__7756){
var c = cljs.core.first(arglist__7756);
var _ = cljs.core.rest(arglist__7756);
return G__7754__delegate(c,_);
});
G__7754.cljs$core$IFn$_invoke$arity$variadic = G__7754__delegate;
return G__7754;
})()
,"next",(function() { 
var G__7757__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7757 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7758__i = 0, G__7758__a = new Array(arguments.length -  1);
while (G__7758__i < G__7758__a.length) {G__7758__a[G__7758__i] = arguments[G__7758__i + 1]; ++G__7758__i;}
  _ = new cljs.core.IndexedSeq(G__7758__a,0,null);
} 
return G__7757__delegate.call(this,c,_);};
G__7757.cljs$lang$maxFixedArity = 1;
G__7757.cljs$lang$applyTo = (function (arglist__7759){
var c = cljs.core.first(arglist__7759);
var _ = cljs.core.rest(arglist__7759);
return G__7757__delegate(c,_);
});
G__7757.cljs$core$IFn$_invoke$arity$variadic = G__7757__delegate;
return G__7757;
})()
,"at_end",(function() { 
var G__7760__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7760 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7761__i = 0, G__7761__a = new Array(arguments.length -  1);
while (G__7761__i < G__7761__a.length) {G__7761__a[G__7761__i] = arguments[G__7761__i + 1]; ++G__7761__i;}
  _ = new cljs.core.IndexedSeq(G__7761__a,0,null);
} 
return G__7760__delegate.call(this,c,_);};
G__7760.cljs$lang$maxFixedArity = 1;
G__7760.cljs$lang$applyTo = (function (arglist__7762){
var c = cljs.core.first(arglist__7762);
var _ = cljs.core.rest(arglist__7762);
return G__7760__delegate(c,_);
});
G__7760.cljs$core$IFn$_invoke$arity$variadic = G__7760__delegate;
return G__7760;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7763__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7763 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7764__i = 0, G__7764__a = new Array(arguments.length -  2);
while (G__7764__i < G__7764__a.length) {G__7764__a[G__7764__i] = arguments[G__7764__i + 2]; ++G__7764__i;}
  _ = new cljs.core.IndexedSeq(G__7764__a,0,null);
} 
return G__7763__delegate.call(this,n,other,_);};
G__7763.cljs$lang$maxFixedArity = 2;
G__7763.cljs$lang$applyTo = (function (arglist__7765){
var n = cljs.core.first(arglist__7765);
arglist__7765 = cljs.core.next(arglist__7765);
var other = cljs.core.first(arglist__7765);
var _ = cljs.core.rest(arglist__7765);
return G__7763__delegate(n,other,_);
});
G__7763.cljs$core$IFn$_invoke$arity$variadic = G__7763__delegate;
return G__7763;
})()
,(function() { 
var G__7766__delegate = function (n,other,_){
return (n <= other);
};
var G__7766 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7767__i = 0, G__7767__a = new Array(arguments.length -  2);
while (G__7767__i < G__7767__a.length) {G__7767__a[G__7767__i] = arguments[G__7767__i + 2]; ++G__7767__i;}
  _ = new cljs.core.IndexedSeq(G__7767__a,0,null);
} 
return G__7766__delegate.call(this,n,other,_);};
G__7766.cljs$lang$maxFixedArity = 2;
G__7766.cljs$lang$applyTo = (function (arglist__7768){
var n = cljs.core.first(arglist__7768);
arglist__7768 = cljs.core.next(arglist__7768);
var other = cljs.core.first(arglist__7768);
var _ = cljs.core.rest(arglist__7768);
return G__7766__delegate(n,other,_);
});
G__7766.cljs$core$IFn$_invoke$arity$variadic = G__7766__delegate;
return G__7766;
})()
,(function() { 
var G__7769__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7769 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7770__i = 0, G__7770__a = new Array(arguments.length -  2);
while (G__7770__i < G__7770__a.length) {G__7770__a[G__7770__i] = arguments[G__7770__i + 2]; ++G__7770__i;}
  _ = new cljs.core.IndexedSeq(G__7770__a,0,null);
} 
return G__7769__delegate.call(this,n,other,_);};
G__7769.cljs$lang$maxFixedArity = 2;
G__7769.cljs$lang$applyTo = (function (arglist__7771){
var n = cljs.core.first(arglist__7771);
arglist__7771 = cljs.core.next(arglist__7771);
var other = cljs.core.first(arglist__7771);
var _ = cljs.core.rest(arglist__7771);
return G__7769__delegate(n,other,_);
});
G__7769.cljs$core$IFn$_invoke$arity$variadic = G__7769__delegate;
return G__7769;
})()
,(function() { 
var G__7772__delegate = function (n,other,_){
return (n < other);
};
var G__7772 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7773__i = 0, G__7773__a = new Array(arguments.length -  2);
while (G__7773__i < G__7773__a.length) {G__7773__a[G__7773__i] = arguments[G__7773__i + 2]; ++G__7773__i;}
  _ = new cljs.core.IndexedSeq(G__7773__a,0,null);
} 
return G__7772__delegate.call(this,n,other,_);};
G__7772.cljs$lang$maxFixedArity = 2;
G__7772.cljs$lang$applyTo = (function (arglist__7774){
var n = cljs.core.first(arglist__7774);
arglist__7774 = cljs.core.next(arglist__7774);
var other = cljs.core.first(arglist__7774);
var _ = cljs.core.rest(arglist__7774);
return G__7772__delegate(n,other,_);
});
G__7772.cljs$core$IFn$_invoke$arity$variadic = G__7772__delegate;
return G__7772;
})()
,(function() { 
var G__7775__delegate = function (n,other,_){
return (n + other);
};
var G__7775 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7776__i = 0, G__7776__a = new Array(arguments.length -  2);
while (G__7776__i < G__7776__a.length) {G__7776__a[G__7776__i] = arguments[G__7776__i + 2]; ++G__7776__i;}
  _ = new cljs.core.IndexedSeq(G__7776__a,0,null);
} 
return G__7775__delegate.call(this,n,other,_);};
G__7775.cljs$lang$maxFixedArity = 2;
G__7775.cljs$lang$applyTo = (function (arglist__7777){
var n = cljs.core.first(arglist__7777);
arglist__7777 = cljs.core.next(arglist__7777);
var other = cljs.core.first(arglist__7777);
var _ = cljs.core.rest(arglist__7777);
return G__7775__delegate(n,other,_);
});
G__7775.cljs$core$IFn$_invoke$arity$variadic = G__7775__delegate;
return G__7775;
})()
,(function() { 
var G__7778__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7778 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7779__i = 0, G__7779__a = new Array(arguments.length -  1);
while (G__7779__i < G__7779__a.length) {G__7779__a[G__7779__i] = arguments[G__7779__i + 1]; ++G__7779__i;}
  _ = new cljs.core.IndexedSeq(G__7779__a,0,null);
} 
return G__7778__delegate.call(this,n,_);};
G__7778.cljs$lang$maxFixedArity = 1;
G__7778.cljs$lang$applyTo = (function (arglist__7780){
var n = cljs.core.first(arglist__7780);
var _ = cljs.core.rest(arglist__7780);
return G__7778__delegate(n,_);
});
G__7778.cljs$core$IFn$_invoke$arity$variadic = G__7778__delegate;
return G__7778;
})()
,(function() { 
var G__7781__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7781 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7782__i = 0, G__7782__a = new Array(arguments.length -  1);
while (G__7782__i < G__7782__a.length) {G__7782__a[G__7782__i] = arguments[G__7782__i + 1]; ++G__7782__i;}
  _ = new cljs.core.IndexedSeq(G__7782__a,0,null);
} 
return G__7781__delegate.call(this,n,_);};
G__7781.cljs$lang$maxFixedArity = 1;
G__7781.cljs$lang$applyTo = (function (arglist__7783){
var n = cljs.core.first(arglist__7783);
var _ = cljs.core.rest(arglist__7783);
return G__7781__delegate(n,_);
});
G__7781.cljs$core$IFn$_invoke$arity$variadic = G__7781__delegate;
return G__7781;
})()
,(function() { 
var G__7784__delegate = function (n,other,_){
return (n > other);
};
var G__7784 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7785__i = 0, G__7785__a = new Array(arguments.length -  2);
while (G__7785__i < G__7785__a.length) {G__7785__a[G__7785__i] = arguments[G__7785__i + 2]; ++G__7785__i;}
  _ = new cljs.core.IndexedSeq(G__7785__a,0,null);
} 
return G__7784__delegate.call(this,n,other,_);};
G__7784.cljs$lang$maxFixedArity = 2;
G__7784.cljs$lang$applyTo = (function (arglist__7786){
var n = cljs.core.first(arglist__7786);
arglist__7786 = cljs.core.next(arglist__7786);
var other = cljs.core.first(arglist__7786);
var _ = cljs.core.rest(arglist__7786);
return G__7784__delegate(n,other,_);
});
G__7784.cljs$core$IFn$_invoke$arity$variadic = G__7784__delegate;
return G__7784;
})()
,(function() { 
var G__7787__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7787 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7788__i = 0, G__7788__a = new Array(arguments.length -  2);
while (G__7788__i < G__7788__a.length) {G__7788__a[G__7788__i] = arguments[G__7788__i + 2]; ++G__7788__i;}
  _ = new cljs.core.IndexedSeq(G__7788__a,0,null);
} 
return G__7787__delegate.call(this,n,other,_);};
G__7787.cljs$lang$maxFixedArity = 2;
G__7787.cljs$lang$applyTo = (function (arglist__7789){
var n = cljs.core.first(arglist__7789);
arglist__7789 = cljs.core.next(arglist__7789);
var other = cljs.core.first(arglist__7789);
var _ = cljs.core.rest(arglist__7789);
return G__7787__delegate(n,other,_);
});
G__7787.cljs$core$IFn$_invoke$arity$variadic = G__7787__delegate;
return G__7787;
})()
,(function() { 
var G__7790__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7790 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7791__i = 0, G__7791__a = new Array(arguments.length -  2);
while (G__7791__i < G__7791__a.length) {G__7791__a[G__7791__i] = arguments[G__7791__i + 2]; ++G__7791__i;}
  _ = new cljs.core.IndexedSeq(G__7791__a,0,null);
} 
return G__7790__delegate.call(this,n,other,_);};
G__7790.cljs$lang$maxFixedArity = 2;
G__7790.cljs$lang$applyTo = (function (arglist__7792){
var n = cljs.core.first(arglist__7792);
arglist__7792 = cljs.core.next(arglist__7792);
var other = cljs.core.first(arglist__7792);
var _ = cljs.core.rest(arglist__7792);
return G__7790__delegate(n,other,_);
});
G__7790.cljs$core$IFn$_invoke$arity$variadic = G__7790__delegate;
return G__7790;
})()
,(function() { 
var G__7793__delegate = function (n,other,_){
return (n - other);
};
var G__7793 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7794__i = 0, G__7794__a = new Array(arguments.length -  2);
while (G__7794__i < G__7794__a.length) {G__7794__a[G__7794__i] = arguments[G__7794__i + 2]; ++G__7794__i;}
  _ = new cljs.core.IndexedSeq(G__7794__a,0,null);
} 
return G__7793__delegate.call(this,n,other,_);};
G__7793.cljs$lang$maxFixedArity = 2;
G__7793.cljs$lang$applyTo = (function (arglist__7795){
var n = cljs.core.first(arglist__7795);
arglist__7795 = cljs.core.next(arglist__7795);
var other = cljs.core.first(arglist__7795);
var _ = cljs.core.rest(arglist__7795);
return G__7793__delegate(n,other,_);
});
G__7793.cljs$core$IFn$_invoke$arity$variadic = G__7793__delegate;
return G__7793;
})()
,(function() { 
var G__7796__delegate = function (n,other,_){
return (n * other);
};
var G__7796 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7797__i = 0, G__7797__a = new Array(arguments.length -  2);
while (G__7797__i < G__7797__a.length) {G__7797__a[G__7797__i] = arguments[G__7797__i + 2]; ++G__7797__i;}
  _ = new cljs.core.IndexedSeq(G__7797__a,0,null);
} 
return G__7796__delegate.call(this,n,other,_);};
G__7796.cljs$lang$maxFixedArity = 2;
G__7796.cljs$lang$applyTo = (function (arglist__7798){
var n = cljs.core.first(arglist__7798);
arglist__7798 = cljs.core.next(arglist__7798);
var other = cljs.core.first(arglist__7798);
var _ = cljs.core.rest(arglist__7798);
return G__7796__delegate(n,other,_);
});
G__7796.cljs$core$IFn$_invoke$arity$variadic = G__7796__delegate;
return G__7796;
})()
,(function() { 
var G__7799__delegate = function (n,other,_){
return (n / other);
};
var G__7799 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7800__i = 0, G__7800__a = new Array(arguments.length -  2);
while (G__7800__i < G__7800__a.length) {G__7800__a[G__7800__i] = arguments[G__7800__i + 2]; ++G__7800__i;}
  _ = new cljs.core.IndexedSeq(G__7800__a,0,null);
} 
return G__7799__delegate.call(this,n,other,_);};
G__7799.cljs$lang$maxFixedArity = 2;
G__7799.cljs$lang$applyTo = (function (arglist__7801){
var n = cljs.core.first(arglist__7801);
arglist__7801 = cljs.core.next(arglist__7801);
var other = cljs.core.first(arglist__7801);
var _ = cljs.core.rest(arglist__7801);
return G__7799__delegate(n,other,_);
});
G__7799.cljs$core$IFn$_invoke$arity$variadic = G__7799__delegate;
return G__7799;
})()
,(function() { 
var G__7802__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7802 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7803__i = 0, G__7803__a = new Array(arguments.length -  1);
while (G__7803__i < G__7803__a.length) {G__7803__a[G__7803__i] = arguments[G__7803__i + 1]; ++G__7803__i;}
  _ = new cljs.core.IndexedSeq(G__7803__a,0,null);
} 
return G__7802__delegate.call(this,n,_);};
G__7802.cljs$lang$maxFixedArity = 1;
G__7802.cljs$lang$applyTo = (function (arglist__7804){
var n = cljs.core.first(arglist__7804);
var _ = cljs.core.rest(arglist__7804);
return G__7802__delegate(n,_);
});
G__7802.cljs$core$IFn$_invoke$arity$variadic = G__7802__delegate;
return G__7802;
})()
,(function() { 
var G__7805__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7805 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7806__i = 0, G__7806__a = new Array(arguments.length -  1);
while (G__7806__i < G__7806__a.length) {G__7806__a[G__7806__i] = arguments[G__7806__i + 1]; ++G__7806__i;}
  _ = new cljs.core.IndexedSeq(G__7806__a,0,null);
} 
return G__7805__delegate.call(this,n,_);};
G__7805.cljs$lang$maxFixedArity = 1;
G__7805.cljs$lang$applyTo = (function (arglist__7807){
var n = cljs.core.first(arglist__7807);
var _ = cljs.core.rest(arglist__7807);
return G__7805__delegate(n,_);
});
G__7805.cljs$core$IFn$_invoke$arity$variadic = G__7805__delegate;
return G__7805;
})()
,(function() { 
var G__7808__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7808 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7809__i = 0, G__7809__a = new Array(arguments.length -  2);
while (G__7809__i < G__7809__a.length) {G__7809__a[G__7809__i] = arguments[G__7809__i + 2]; ++G__7809__i;}
  _ = new cljs.core.IndexedSeq(G__7809__a,0,null);
} 
return G__7808__delegate.call(this,n,other,_);};
G__7808.cljs$lang$maxFixedArity = 2;
G__7808.cljs$lang$applyTo = (function (arglist__7810){
var n = cljs.core.first(arglist__7810);
arglist__7810 = cljs.core.next(arglist__7810);
var other = cljs.core.first(arglist__7810);
var _ = cljs.core.rest(arglist__7810);
return G__7808__delegate(n,other,_);
});
G__7808.cljs$core$IFn$_invoke$arity$variadic = G__7808__delegate;
return G__7808;
})()
,(function() { 
var G__7811__delegate = function (n,other,_){
return (n >= other);
};
var G__7811 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7812__i = 0, G__7812__a = new Array(arguments.length -  2);
while (G__7812__i < G__7812__a.length) {G__7812__a[G__7812__i] = arguments[G__7812__i + 2]; ++G__7812__i;}
  _ = new cljs.core.IndexedSeq(G__7812__a,0,null);
} 
return G__7811__delegate.call(this,n,other,_);};
G__7811.cljs$lang$maxFixedArity = 2;
G__7811.cljs$lang$applyTo = (function (arglist__7813){
var n = cljs.core.first(arglist__7813);
arglist__7813 = cljs.core.next(arglist__7813);
var other = cljs.core.first(arglist__7813);
var _ = cljs.core.rest(arglist__7813);
return G__7811__delegate(n,other,_);
});
G__7811.cljs$core$IFn$_invoke$arity$variadic = G__7811__delegate;
return G__7811;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["await",(function() { 
var G__7814__delegate = function (t,p__6393){
var vec__6394 = p__6393;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6394,(0),null);
var result = (((!((timeout == null))))?nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2(t,timeout):nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,nex.interpreter.task_timeout_signal)){
return null;
} else {
return result;
}
};
var G__7814 = function (t,var_args){
var p__6393 = null;
if (arguments.length > 1) {
var G__7815__i = 0, G__7815__a = new Array(arguments.length -  1);
while (G__7815__i < G__7815__a.length) {G__7815__a[G__7815__i] = arguments[G__7815__i + 1]; ++G__7815__i;}
  p__6393 = new cljs.core.IndexedSeq(G__7815__a,0,null);
} 
return G__7814__delegate.call(this,t,p__6393);};
G__7814.cljs$lang$maxFixedArity = 1;
G__7814.cljs$lang$applyTo = (function (arglist__7816){
var t = cljs.core.first(arglist__7816);
var p__6393 = cljs.core.rest(arglist__7816);
return G__7814__delegate(t,p__6393);
});
G__7814.cljs$core$IFn$_invoke$arity$variadic = G__7814__delegate;
return G__7814;
})()
,"cancel",(function() { 
var G__7817__delegate = function (t,_){
return nex.interpreter.task_cancel(t);
};
var G__7817 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7818__i = 0, G__7818__a = new Array(arguments.length -  1);
while (G__7818__i < G__7818__a.length) {G__7818__a[G__7818__i] = arguments[G__7818__i + 1]; ++G__7818__i;}
  _ = new cljs.core.IndexedSeq(G__7818__a,0,null);
} 
return G__7817__delegate.call(this,t,_);};
G__7817.cljs$lang$maxFixedArity = 1;
G__7817.cljs$lang$applyTo = (function (arglist__7819){
var t = cljs.core.first(arglist__7819);
var _ = cljs.core.rest(arglist__7819);
return G__7817__delegate(t,_);
});
G__7817.cljs$core$IFn$_invoke$arity$variadic = G__7817__delegate;
return G__7817;
})()
,"is_done",(function() { 
var G__7820__delegate = function (t,_){
return cljs.core.deref(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(t));
};
var G__7820 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7821__i = 0, G__7821__a = new Array(arguments.length -  1);
while (G__7821__i < G__7821__a.length) {G__7821__a[G__7821__i] = arguments[G__7821__i + 1]; ++G__7821__i;}
  _ = new cljs.core.IndexedSeq(G__7821__a,0,null);
} 
return G__7820__delegate.call(this,t,_);};
G__7820.cljs$lang$maxFixedArity = 1;
G__7820.cljs$lang$applyTo = (function (arglist__7822){
var t = cljs.core.first(arglist__7822);
var _ = cljs.core.rest(arglist__7822);
return G__7820__delegate(t,_);
});
G__7820.cljs$core$IFn$_invoke$arity$variadic = G__7820__delegate;
return G__7820;
})()
,"is_cancelled",(function() { 
var G__7823__delegate = function (t,_){
return nex.interpreter.task_cancelled_QMARK_(t);
};
var G__7823 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7824__i = 0, G__7824__a = new Array(arguments.length -  1);
while (G__7824__i < G__7824__a.length) {G__7824__a[G__7824__i] = arguments[G__7824__i + 1]; ++G__7824__i;}
  _ = new cljs.core.IndexedSeq(G__7824__a,0,null);
} 
return G__7823__delegate.call(this,t,_);};
G__7823.cljs$lang$maxFixedArity = 1;
G__7823.cljs$lang$applyTo = (function (arglist__7825){
var t = cljs.core.first(arglist__7825);
var _ = cljs.core.rest(arglist__7825);
return G__7823__delegate(t,_);
});
G__7823.cljs$core$IFn$_invoke$arity$variadic = G__7823__delegate;
return G__7823;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7826__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7826 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7827__i = 0, G__7827__a = new Array(arguments.length -  1);
while (G__7827__i < G__7827__a.length) {G__7827__a[G__7827__i] = arguments[G__7827__i + 1]; ++G__7827__i;}
  _ = new cljs.core.IndexedSeq(G__7827__a,0,null);
} 
return G__7826__delegate.call(this,c,_);};
G__7826.cljs$lang$maxFixedArity = 1;
G__7826.cljs$lang$applyTo = (function (arglist__7828){
var c = cljs.core.first(arglist__7828);
var _ = cljs.core.rest(arglist__7828);
return G__7826__delegate(c,_);
});
G__7826.cljs$core$IFn$_invoke$arity$variadic = G__7826__delegate;
return G__7826;
})()
,"item",(function() { 
var G__7829__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7829 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7830__i = 0, G__7830__a = new Array(arguments.length -  1);
while (G__7830__i < G__7830__a.length) {G__7830__a[G__7830__i] = arguments[G__7830__i + 1]; ++G__7830__i;}
  _ = new cljs.core.IndexedSeq(G__7830__a,0,null);
} 
return G__7829__delegate.call(this,c,_);};
G__7829.cljs$lang$maxFixedArity = 1;
G__7829.cljs$lang$applyTo = (function (arglist__7831){
var c = cljs.core.first(arglist__7831);
var _ = cljs.core.rest(arglist__7831);
return G__7829__delegate(c,_);
});
G__7829.cljs$core$IFn$_invoke$arity$variadic = G__7829__delegate;
return G__7829;
})()
,"next",(function() { 
var G__7832__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7832 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7833__i = 0, G__7833__a = new Array(arguments.length -  1);
while (G__7833__i < G__7833__a.length) {G__7833__a[G__7833__i] = arguments[G__7833__i + 1]; ++G__7833__i;}
  _ = new cljs.core.IndexedSeq(G__7833__a,0,null);
} 
return G__7832__delegate.call(this,c,_);};
G__7832.cljs$lang$maxFixedArity = 1;
G__7832.cljs$lang$applyTo = (function (arglist__7834){
var c = cljs.core.first(arglist__7834);
var _ = cljs.core.rest(arglist__7834);
return G__7832__delegate(c,_);
});
G__7832.cljs$core$IFn$_invoke$arity$variadic = G__7832__delegate;
return G__7832;
})()
,"at_end",(function() { 
var G__7835__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7835 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7836__i = 0, G__7836__a = new Array(arguments.length -  1);
while (G__7836__i < G__7836__a.length) {G__7836__a[G__7836__i] = arguments[G__7836__i + 1]; ++G__7836__i;}
  _ = new cljs.core.IndexedSeq(G__7836__a,0,null);
} 
return G__7835__delegate.call(this,c,_);};
G__7835.cljs$lang$maxFixedArity = 1;
G__7835.cljs$lang$applyTo = (function (arglist__7837){
var c = cljs.core.first(arglist__7837);
var _ = cljs.core.rest(arglist__7837);
return G__7835__delegate(c,_);
});
G__7835.cljs$core$IFn$_invoke$arity$variadic = G__7835__delegate;
return G__7835;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__7838__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7838 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7839__i = 0, G__7839__a = new Array(arguments.length -  2);
while (G__7839__i < G__7839__a.length) {G__7839__a[G__7839__i] = arguments[G__7839__i + 2]; ++G__7839__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7839__a,0,null);
} 
return G__7838__delegate.call(this,_,msg,___$1);};
G__7838.cljs$lang$maxFixedArity = 2;
G__7838.cljs$lang$applyTo = (function (arglist__7840){
var _ = cljs.core.first(arglist__7840);
arglist__7840 = cljs.core.next(arglist__7840);
var msg = cljs.core.first(arglist__7840);
var ___$1 = cljs.core.rest(arglist__7840);
return G__7838__delegate(_,msg,___$1);
});
G__7838.cljs$core$IFn$_invoke$arity$variadic = G__7838__delegate;
return G__7838;
})()
,"print_line",(function() { 
var G__7841__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7841 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7842__i = 0, G__7842__a = new Array(arguments.length -  2);
while (G__7842__i < G__7842__a.length) {G__7842__a[G__7842__i] = arguments[G__7842__i + 2]; ++G__7842__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7842__a,0,null);
} 
return G__7841__delegate.call(this,_,msg,___$1);};
G__7841.cljs$lang$maxFixedArity = 2;
G__7841.cljs$lang$applyTo = (function (arglist__7843){
var _ = cljs.core.first(arglist__7843);
arglist__7843 = cljs.core.next(arglist__7843);
var msg = cljs.core.first(arglist__7843);
var ___$1 = cljs.core.rest(arglist__7843);
return G__7841__delegate(_,msg,___$1);
});
G__7841.cljs$core$IFn$_invoke$arity$variadic = G__7841__delegate;
return G__7841;
})()
,"read_line",(function() { 
var G__7844__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__7844 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__7845__i = 0, G__7845__a = new Array(arguments.length -  1);
while (G__7845__i < G__7845__a.length) {G__7845__a[G__7845__i] = arguments[G__7845__i + 1]; ++G__7845__i;}
  args = new cljs.core.IndexedSeq(G__7845__a,0,null);
} 
return G__7844__delegate.call(this,_,args);};
G__7844.cljs$lang$maxFixedArity = 1;
G__7844.cljs$lang$applyTo = (function (arglist__7846){
var _ = cljs.core.first(arglist__7846);
var args = cljs.core.rest(arglist__7846);
return G__7844__delegate(_,args);
});
G__7844.cljs$core$IFn$_invoke$arity$variadic = G__7844__delegate;
return G__7844;
})()
,"error",(function() { 
var G__7847__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7847 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7848__i = 0, G__7848__a = new Array(arguments.length -  2);
while (G__7848__i < G__7848__a.length) {G__7848__a[G__7848__i] = arguments[G__7848__i + 2]; ++G__7848__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7848__a,0,null);
} 
return G__7847__delegate.call(this,_,msg,___$1);};
G__7847.cljs$lang$maxFixedArity = 2;
G__7847.cljs$lang$applyTo = (function (arglist__7849){
var _ = cljs.core.first(arglist__7849);
arglist__7849 = cljs.core.next(arglist__7849);
var msg = cljs.core.first(arglist__7849);
var ___$1 = cljs.core.rest(arglist__7849);
return G__7847__delegate(_,msg,___$1);
});
G__7847.cljs$core$IFn$_invoke$arity$variadic = G__7847__delegate;
return G__7847;
})()
,"new_line",(function() { 
var G__7850__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__7850 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7851__i = 0, G__7851__a = new Array(arguments.length -  1);
while (G__7851__i < G__7851__a.length) {G__7851__a[G__7851__i] = arguments[G__7851__i + 1]; ++G__7851__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7851__a,0,null);
} 
return G__7850__delegate.call(this,_,___$1);};
G__7850.cljs$lang$maxFixedArity = 1;
G__7850.cljs$lang$applyTo = (function (arglist__7852){
var _ = cljs.core.first(arglist__7852);
var ___$1 = cljs.core.rest(arglist__7852);
return G__7850__delegate(_,___$1);
});
G__7850.cljs$core$IFn$_invoke$arity$variadic = G__7850__delegate;
return G__7850;
})()
,"read_integer",(function() { 
var G__7853__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__7853 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7854__i = 0, G__7854__a = new Array(arguments.length -  1);
while (G__7854__i < G__7854__a.length) {G__7854__a[G__7854__i] = arguments[G__7854__i + 1]; ++G__7854__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7854__a,0,null);
} 
return G__7853__delegate.call(this,_,___$1);};
G__7853.cljs$lang$maxFixedArity = 1;
G__7853.cljs$lang$applyTo = (function (arglist__7855){
var _ = cljs.core.first(arglist__7855);
var ___$1 = cljs.core.rest(arglist__7855);
return G__7853__delegate(_,___$1);
});
G__7853.cljs$core$IFn$_invoke$arity$variadic = G__7853__delegate;
return G__7853;
})()
,"read_real",(function() { 
var G__7856__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__7856 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7857__i = 0, G__7857__a = new Array(arguments.length -  1);
while (G__7857__i < G__7857__a.length) {G__7857__a[G__7857__i] = arguments[G__7857__i + 1]; ++G__7857__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7857__a,0,null);
} 
return G__7856__delegate.call(this,_,___$1);};
G__7856.cljs$lang$maxFixedArity = 1;
G__7856.cljs$lang$applyTo = (function (arglist__7858){
var _ = cljs.core.first(arglist__7858);
var ___$1 = cljs.core.rest(arglist__7858);
return G__7856__delegate(_,___$1);
});
G__7856.cljs$core$IFn$_invoke$arity$variadic = G__7856__delegate;
return G__7856;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__7859__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__7859 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7860__i = 0, G__7860__a = new Array(arguments.length -  4);
while (G__7860__i < G__7860__a.length) {G__7860__a[G__7860__i] = arguments[G__7860__i + 4]; ++G__7860__i;}
  _ = new cljs.core.IndexedSeq(G__7860__a,0,null);
} 
return G__7859__delegate.call(this,w,text,x,y,_);};
G__7859.cljs$lang$maxFixedArity = 4;
G__7859.cljs$lang$applyTo = (function (arglist__7861){
var w = cljs.core.first(arglist__7861);
arglist__7861 = cljs.core.next(arglist__7861);
var text = cljs.core.first(arglist__7861);
arglist__7861 = cljs.core.next(arglist__7861);
var x = cljs.core.first(arglist__7861);
arglist__7861 = cljs.core.next(arglist__7861);
var y = cljs.core.first(arglist__7861);
var _ = cljs.core.rest(arglist__7861);
return G__7859__delegate(w,text,x,y,_);
});
G__7859.cljs$core$IFn$_invoke$arity$variadic = G__7859__delegate;
return G__7859;
})()
,(function() { 
var G__7862__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__7862 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7863__i = 0, G__7863__a = new Array(arguments.length -  1);
while (G__7863__i < G__7863__a.length) {G__7863__a[G__7863__i] = arguments[G__7863__i + 1]; ++G__7863__i;}
  _ = new cljs.core.IndexedSeq(G__7863__a,0,null);
} 
return G__7862__delegate.call(this,w,_);};
G__7862.cljs$lang$maxFixedArity = 1;
G__7862.cljs$lang$applyTo = (function (arglist__7864){
var w = cljs.core.first(arglist__7864);
var _ = cljs.core.rest(arglist__7864);
return G__7862__delegate(w,_);
});
G__7862.cljs$core$IFn$_invoke$arity$variadic = G__7862__delegate;
return G__7862;
})()
,(function() { 
var G__7865__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__7865 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7866__i = 0, G__7866__a = new Array(arguments.length -  2);
while (G__7866__i < G__7866__a.length) {G__7866__a[G__7866__i] = arguments[G__7866__i + 2]; ++G__7866__i;}
  _ = new cljs.core.IndexedSeq(G__7866__a,0,null);
} 
return G__7865__delegate.call(this,w,size,_);};
G__7865.cljs$lang$maxFixedArity = 2;
G__7865.cljs$lang$applyTo = (function (arglist__7867){
var w = cljs.core.first(arglist__7867);
arglist__7867 = cljs.core.next(arglist__7867);
var size = cljs.core.first(arglist__7867);
var _ = cljs.core.rest(arglist__7867);
return G__7865__delegate(w,size,_);
});
G__7865.cljs$core$IFn$_invoke$arity$variadic = G__7865__delegate;
return G__7865;
})()
,(function() { 
var G__7868__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__7868 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__7869__i = 0, G__7869__a = new Array(arguments.length -  6);
while (G__7869__i < G__7869__a.length) {G__7869__a[G__7869__i] = arguments[G__7869__i + 6]; ++G__7869__i;}
  _ = new cljs.core.IndexedSeq(G__7869__a,0,null);
} 
return G__7868__delegate.call(this,w,img,x,y,width,height,_);};
G__7868.cljs$lang$maxFixedArity = 6;
G__7868.cljs$lang$applyTo = (function (arglist__7870){
var w = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var img = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var x = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var y = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var width = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var height = cljs.core.first(arglist__7870);
var _ = cljs.core.rest(arglist__7870);
return G__7868__delegate(w,img,x,y,width,height,_);
});
G__7868.cljs$core$IFn$_invoke$arity$variadic = G__7868__delegate;
return G__7868;
})()
,(function() { 
var G__7871__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__7871 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7872__i = 0, G__7872__a = new Array(arguments.length -  1);
while (G__7872__i < G__7872__a.length) {G__7872__a[G__7872__i] = arguments[G__7872__i + 1]; ++G__7872__i;}
  _ = new cljs.core.IndexedSeq(G__7872__a,0,null);
} 
return G__7871__delegate.call(this,w,_);};
G__7871.cljs$lang$maxFixedArity = 1;
G__7871.cljs$lang$applyTo = (function (arglist__7873){
var w = cljs.core.first(arglist__7873);
var _ = cljs.core.rest(arglist__7873);
return G__7871__delegate(w,_);
});
G__7871.cljs$core$IFn$_invoke$arity$variadic = G__7871__delegate;
return G__7871;
})()
,(function() { 
var G__7874__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__7874 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7878__i = 0, G__7878__a = new Array(arguments.length -  4);
while (G__7878__i < G__7878__a.length) {G__7878__a[G__7878__i] = arguments[G__7878__i + 4]; ++G__7878__i;}
  _ = new cljs.core.IndexedSeq(G__7878__a,0,null);
} 
return G__7874__delegate.call(this,w,img,x,y,_);};
G__7874.cljs$lang$maxFixedArity = 4;
G__7874.cljs$lang$applyTo = (function (arglist__7879){
var w = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var img = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var x = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var y = cljs.core.first(arglist__7879);
var _ = cljs.core.rest(arglist__7879);
return G__7874__delegate(w,img,x,y,_);
});
G__7874.cljs$core$IFn$_invoke$arity$variadic = G__7874__delegate;
return G__7874;
})()
,(function() { 
var G__7880__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__7880 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7881__i = 0, G__7881__a = new Array(arguments.length -  2);
while (G__7881__i < G__7881__a.length) {G__7881__a[G__7881__i] = arguments[G__7881__i + 2]; ++G__7881__i;}
  _ = new cljs.core.IndexedSeq(G__7881__a,0,null);
} 
return G__7880__delegate.call(this,w,ms,_);};
G__7880.cljs$lang$maxFixedArity = 2;
G__7880.cljs$lang$applyTo = (function (arglist__7882){
var w = cljs.core.first(arglist__7882);
arglist__7882 = cljs.core.next(arglist__7882);
var ms = cljs.core.first(arglist__7882);
var _ = cljs.core.rest(arglist__7882);
return G__7880__delegate(w,ms,_);
});
G__7880.cljs$core$IFn$_invoke$arity$variadic = G__7880__delegate;
return G__7880;
})()
,(function() { 
var G__7883__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__7883 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7887__i = 0, G__7887__a = new Array(arguments.length -  5);
while (G__7887__i < G__7887__a.length) {G__7887__a[G__7887__i] = arguments[G__7887__i + 5]; ++G__7887__i;}
  _ = new cljs.core.IndexedSeq(G__7887__a,0,null);
} 
return G__7883__delegate.call(this,w,x1,y1,x2,y2,_);};
G__7883.cljs$lang$maxFixedArity = 5;
G__7883.cljs$lang$applyTo = (function (arglist__7888){
var w = cljs.core.first(arglist__7888);
arglist__7888 = cljs.core.next(arglist__7888);
var x1 = cljs.core.first(arglist__7888);
arglist__7888 = cljs.core.next(arglist__7888);
var y1 = cljs.core.first(arglist__7888);
arglist__7888 = cljs.core.next(arglist__7888);
var x2 = cljs.core.first(arglist__7888);
arglist__7888 = cljs.core.next(arglist__7888);
var y2 = cljs.core.first(arglist__7888);
var _ = cljs.core.rest(arglist__7888);
return G__7883__delegate(w,x1,y1,x2,y2,_);
});
G__7883.cljs$core$IFn$_invoke$arity$variadic = G__7883__delegate;
return G__7883;
})()
,(function() { 
var G__7889__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__7889 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7890__i = 0, G__7890__a = new Array(arguments.length -  1);
while (G__7890__i < G__7890__a.length) {G__7890__a[G__7890__i] = arguments[G__7890__i + 1]; ++G__7890__i;}
  _ = new cljs.core.IndexedSeq(G__7890__a,0,null);
} 
return G__7889__delegate.call(this,w,_);};
G__7889.cljs$lang$maxFixedArity = 1;
G__7889.cljs$lang$applyTo = (function (arglist__7891){
var w = cljs.core.first(arglist__7891);
var _ = cljs.core.rest(arglist__7891);
return G__7889__delegate(w,_);
});
G__7889.cljs$core$IFn$_invoke$arity$variadic = G__7889__delegate;
return G__7889;
})()
,(function() { 
var G__7892__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__7892 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7893__i = 0, G__7893__a = new Array(arguments.length -  4);
while (G__7893__i < G__7893__a.length) {G__7893__a[G__7893__i] = arguments[G__7893__i + 4]; ++G__7893__i;}
  _ = new cljs.core.IndexedSeq(G__7893__a,0,null);
} 
return G__7892__delegate.call(this,w,x,y,r,_);};
G__7892.cljs$lang$maxFixedArity = 4;
G__7892.cljs$lang$applyTo = (function (arglist__7894){
var w = cljs.core.first(arglist__7894);
arglist__7894 = cljs.core.next(arglist__7894);
var x = cljs.core.first(arglist__7894);
arglist__7894 = cljs.core.next(arglist__7894);
var y = cljs.core.first(arglist__7894);
arglist__7894 = cljs.core.next(arglist__7894);
var r = cljs.core.first(arglist__7894);
var _ = cljs.core.rest(arglist__7894);
return G__7892__delegate(w,x,y,r,_);
});
G__7892.cljs$core$IFn$_invoke$arity$variadic = G__7892__delegate;
return G__7892;
})()
,(function() { 
var G__7895__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__7895 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7896__i = 0, G__7896__a = new Array(arguments.length -  5);
while (G__7896__i < G__7896__a.length) {G__7896__a[G__7896__i] = arguments[G__7896__i + 5]; ++G__7896__i;}
  _ = new cljs.core.IndexedSeq(G__7896__a,0,null);
} 
return G__7895__delegate.call(this,w,x,y,width,height,_);};
G__7895.cljs$lang$maxFixedArity = 5;
G__7895.cljs$lang$applyTo = (function (arglist__7897){
var w = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var x = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var y = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var width = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var height = cljs.core.first(arglist__7897);
var _ = cljs.core.rest(arglist__7897);
return G__7895__delegate(w,x,y,width,height,_);
});
G__7895.cljs$core$IFn$_invoke$arity$variadic = G__7895__delegate;
return G__7895;
})()
,(function() { 
var G__7899__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__7899 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7900__i = 0, G__7900__a = new Array(arguments.length -  5);
while (G__7900__i < G__7900__a.length) {G__7900__a[G__7900__i] = arguments[G__7900__i + 5]; ++G__7900__i;}
  _ = new cljs.core.IndexedSeq(G__7900__a,0,null);
} 
return G__7899__delegate.call(this,w,img,x,y,angle,_);};
G__7899.cljs$lang$maxFixedArity = 5;
G__7899.cljs$lang$applyTo = (function (arglist__7901){
var w = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var img = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var x = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var y = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var angle = cljs.core.first(arglist__7901);
var _ = cljs.core.rest(arglist__7901);
return G__7899__delegate(w,img,x,y,angle,_);
});
G__7899.cljs$core$IFn$_invoke$arity$variadic = G__7899__delegate;
return G__7899;
})()
,(function() { 
var G__7902__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7902 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7904__i = 0, G__7904__a = new Array(arguments.length -  2);
while (G__7904__i < G__7904__a.length) {G__7904__a[G__7904__i] = arguments[G__7904__i + 2]; ++G__7904__i;}
  _ = new cljs.core.IndexedSeq(G__7904__a,0,null);
} 
return G__7902__delegate.call(this,w,color,_);};
G__7902.cljs$lang$maxFixedArity = 2;
G__7902.cljs$lang$applyTo = (function (arglist__7905){
var w = cljs.core.first(arglist__7905);
arglist__7905 = cljs.core.next(arglist__7905);
var color = cljs.core.first(arglist__7905);
var _ = cljs.core.rest(arglist__7905);
return G__7902__delegate(w,color,_);
});
G__7902.cljs$core$IFn$_invoke$arity$variadic = G__7902__delegate;
return G__7902;
})()
,(function() { 
var G__7906__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__7906 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7907__i = 0, G__7907__a = new Array(arguments.length -  5);
while (G__7907__i < G__7907__a.length) {G__7907__a[G__7907__i] = arguments[G__7907__i + 5]; ++G__7907__i;}
  _ = new cljs.core.IndexedSeq(G__7907__a,0,null);
} 
return G__7906__delegate.call(this,w,x,y,width,height,_);};
G__7906.cljs$lang$maxFixedArity = 5;
G__7906.cljs$lang$applyTo = (function (arglist__7908){
var w = cljs.core.first(arglist__7908);
arglist__7908 = cljs.core.next(arglist__7908);
var x = cljs.core.first(arglist__7908);
arglist__7908 = cljs.core.next(arglist__7908);
var y = cljs.core.first(arglist__7908);
arglist__7908 = cljs.core.next(arglist__7908);
var width = cljs.core.first(arglist__7908);
arglist__7908 = cljs.core.next(arglist__7908);
var height = cljs.core.first(arglist__7908);
var _ = cljs.core.rest(arglist__7908);
return G__7906__delegate(w,x,y,width,height,_);
});
G__7906.cljs$core$IFn$_invoke$arity$variadic = G__7906__delegate;
return G__7906;
})()
,(function() { 
var G__7909__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__7909 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7910__i = 0, G__7910__a = new Array(arguments.length -  1);
while (G__7910__i < G__7910__a.length) {G__7910__a[G__7910__i] = arguments[G__7910__i + 1]; ++G__7910__i;}
  _ = new cljs.core.IndexedSeq(G__7910__a,0,null);
} 
return G__7909__delegate.call(this,w,_);};
G__7909.cljs$lang$maxFixedArity = 1;
G__7909.cljs$lang$applyTo = (function (arglist__7911){
var w = cljs.core.first(arglist__7911);
var _ = cljs.core.rest(arglist__7911);
return G__7909__delegate(w,_);
});
G__7909.cljs$core$IFn$_invoke$arity$variadic = G__7909__delegate;
return G__7909;
})()
,(function() { 
var G__7912__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__7912 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7913__i = 0, G__7913__a = new Array(arguments.length -  4);
while (G__7913__i < G__7913__a.length) {G__7913__a[G__7913__i] = arguments[G__7913__i + 4]; ++G__7913__i;}
  _ = new cljs.core.IndexedSeq(G__7913__a,0,null);
} 
return G__7912__delegate.call(this,w,x,y,r,_);};
G__7912.cljs$lang$maxFixedArity = 4;
G__7912.cljs$lang$applyTo = (function (arglist__7914){
var w = cljs.core.first(arglist__7914);
arglist__7914 = cljs.core.next(arglist__7914);
var x = cljs.core.first(arglist__7914);
arglist__7914 = cljs.core.next(arglist__7914);
var y = cljs.core.first(arglist__7914);
arglist__7914 = cljs.core.next(arglist__7914);
var r = cljs.core.first(arglist__7914);
var _ = cljs.core.rest(arglist__7914);
return G__7912__delegate(w,x,y,r,_);
});
G__7912.cljs$core$IFn$_invoke$arity$variadic = G__7912__delegate;
return G__7912;
})()
,(function() { 
var G__7915__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7915 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7916__i = 0, G__7916__a = new Array(arguments.length -  2);
while (G__7916__i < G__7916__a.length) {G__7916__a[G__7916__i] = arguments[G__7916__i + 2]; ++G__7916__i;}
  _ = new cljs.core.IndexedSeq(G__7916__a,0,null);
} 
return G__7915__delegate.call(this,w,color,_);};
G__7915.cljs$lang$maxFixedArity = 2;
G__7915.cljs$lang$applyTo = (function (arglist__7917){
var w = cljs.core.first(arglist__7917);
arglist__7917 = cljs.core.next(arglist__7917);
var color = cljs.core.first(arglist__7917);
var _ = cljs.core.rest(arglist__7917);
return G__7915__delegate(w,color,_);
});
G__7915.cljs$core$IFn$_invoke$arity$variadic = G__7915__delegate;
return G__7915;
})()
,(function() { 
var G__7918__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__7918 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7919__i = 0, G__7919__a = new Array(arguments.length -  1);
while (G__7919__i < G__7919__a.length) {G__7919__a[G__7919__i] = arguments[G__7919__i + 1]; ++G__7919__i;}
  _ = new cljs.core.IndexedSeq(G__7919__a,0,null);
} 
return G__7918__delegate.call(this,w,_);};
G__7918.cljs$lang$maxFixedArity = 1;
G__7918.cljs$lang$applyTo = (function (arglist__7920){
var w = cljs.core.first(arglist__7920);
var _ = cljs.core.rest(arglist__7920);
return G__7918__delegate(w,_);
});
G__7918.cljs$core$IFn$_invoke$arity$variadic = G__7918__delegate;
return G__7918;
})()
,(function() { 
var G__7921__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__7921 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7922__i = 0, G__7922__a = new Array(arguments.length -  1);
while (G__7922__i < G__7922__a.length) {G__7922__a[G__7922__i] = arguments[G__7922__i + 1]; ++G__7922__i;}
  _ = new cljs.core.IndexedSeq(G__7922__a,0,null);
} 
return G__7921__delegate.call(this,w,_);};
G__7921.cljs$lang$maxFixedArity = 1;
G__7921.cljs$lang$applyTo = (function (arglist__7923){
var w = cljs.core.first(arglist__7923);
var _ = cljs.core.rest(arglist__7923);
return G__7921__delegate(w,_);
});
G__7921.cljs$core$IFn$_invoke$arity$variadic = G__7921__delegate;
return G__7921;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__7924__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__7924 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7925__i = 0, G__7925__a = new Array(arguments.length -  2);
while (G__7925__i < G__7925__a.length) {G__7925__a[G__7925__i] = arguments[G__7925__i + 2]; ++G__7925__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7925__a,0,null);
} 
return G__7924__delegate.call(this,_,name,___$1);};
G__7924.cljs$lang$maxFixedArity = 2;
G__7924.cljs$lang$applyTo = (function (arglist__7926){
var _ = cljs.core.first(arglist__7926);
arglist__7926 = cljs.core.next(arglist__7926);
var name = cljs.core.first(arglist__7926);
var ___$1 = cljs.core.rest(arglist__7926);
return G__7924__delegate(_,name,___$1);
});
G__7924.cljs$core$IFn$_invoke$arity$variadic = G__7924__delegate;
return G__7924;
})()
,"setenv",(function() { 
var G__7927__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__7927 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__7928__i = 0, G__7928__a = new Array(arguments.length -  3);
while (G__7928__i < G__7928__a.length) {G__7928__a[G__7928__i] = arguments[G__7928__i + 3]; ++G__7928__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7928__a,0,null);
} 
return G__7927__delegate.call(this,_,name,value,___$1);};
G__7927.cljs$lang$maxFixedArity = 3;
G__7927.cljs$lang$applyTo = (function (arglist__7929){
var _ = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var name = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var value = cljs.core.first(arglist__7929);
var ___$1 = cljs.core.rest(arglist__7929);
return G__7927__delegate(_,name,value,___$1);
});
G__7927.cljs$core$IFn$_invoke$arity$variadic = G__7927__delegate;
return G__7927;
})()
,"command_line",(function() { 
var G__7930__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__7930 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7931__i = 0, G__7931__a = new Array(arguments.length -  1);
while (G__7931__i < G__7931__a.length) {G__7931__a[G__7931__i] = arguments[G__7931__i + 1]; ++G__7931__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7931__a,0,null);
} 
return G__7930__delegate.call(this,_,___$1);};
G__7930.cljs$lang$maxFixedArity = 1;
G__7930.cljs$lang$applyTo = (function (arglist__7932){
var _ = cljs.core.first(arglist__7932);
var ___$1 = cljs.core.rest(arglist__7932);
return G__7930__delegate(_,___$1);
});
G__7930.cljs$core$IFn$_invoke$arity$variadic = G__7930__delegate;
return G__7930;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__7933__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__7933 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7934__i = 0, G__7934__a = new Array(arguments.length -  1);
while (G__7934__i < G__7934__a.length) {G__7934__a[G__7934__i] = arguments[G__7934__i + 1]; ++G__7934__i;}
  _ = new cljs.core.IndexedSeq(G__7934__a,0,null);
} 
return G__7933__delegate.call(this,c,_);};
G__7933.cljs$lang$maxFixedArity = 1;
G__7933.cljs$lang$applyTo = (function (arglist__7935){
var c = cljs.core.first(arglist__7935);
var _ = cljs.core.rest(arglist__7935);
return G__7933__delegate(c,_);
});
G__7933.cljs$core$IFn$_invoke$arity$variadic = G__7933__delegate;
return G__7933;
})()
,"to_upper",(function() { 
var G__7936__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7936 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7937__i = 0, G__7937__a = new Array(arguments.length -  1);
while (G__7937__i < G__7937__a.length) {G__7937__a[G__7937__i] = arguments[G__7937__i + 1]; ++G__7937__i;}
  _ = new cljs.core.IndexedSeq(G__7937__a,0,null);
} 
return G__7936__delegate.call(this,c,_);};
G__7936.cljs$lang$maxFixedArity = 1;
G__7936.cljs$lang$applyTo = (function (arglist__7938){
var c = cljs.core.first(arglist__7938);
var _ = cljs.core.rest(arglist__7938);
return G__7936__delegate(c,_);
});
G__7936.cljs$core$IFn$_invoke$arity$variadic = G__7936__delegate;
return G__7936;
})()
,"to_lower",(function() { 
var G__7939__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7939 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7940__i = 0, G__7940__a = new Array(arguments.length -  1);
while (G__7940__i < G__7940__a.length) {G__7940__a[G__7940__i] = arguments[G__7940__i + 1]; ++G__7940__i;}
  _ = new cljs.core.IndexedSeq(G__7940__a,0,null);
} 
return G__7939__delegate.call(this,c,_);};
G__7939.cljs$lang$maxFixedArity = 1;
G__7939.cljs$lang$applyTo = (function (arglist__7941){
var c = cljs.core.first(arglist__7941);
var _ = cljs.core.rest(arglist__7941);
return G__7939__delegate(c,_);
});
G__7939.cljs$core$IFn$_invoke$arity$variadic = G__7939__delegate;
return G__7939;
})()
,"compare",(function() { 
var G__7942__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__7942 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7943__i = 0, G__7943__a = new Array(arguments.length -  2);
while (G__7943__i < G__7943__a.length) {G__7943__a[G__7943__i] = arguments[G__7943__i + 2]; ++G__7943__i;}
  _ = new cljs.core.IndexedSeq(G__7943__a,0,null);
} 
return G__7942__delegate.call(this,c,other,_);};
G__7942.cljs$lang$maxFixedArity = 2;
G__7942.cljs$lang$applyTo = (function (arglist__7944){
var c = cljs.core.first(arglist__7944);
arglist__7944 = cljs.core.next(arglist__7944);
var other = cljs.core.first(arglist__7944);
var _ = cljs.core.rest(arglist__7944);
return G__7942__delegate(c,other,_);
});
G__7942.cljs$core$IFn$_invoke$arity$variadic = G__7942__delegate;
return G__7942;
})()
,"hash",(function() { 
var G__7945__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__7945 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7946__i = 0, G__7946__a = new Array(arguments.length -  1);
while (G__7946__i < G__7946__a.length) {G__7946__a[G__7946__i] = arguments[G__7946__i + 1]; ++G__7946__i;}
  _ = new cljs.core.IndexedSeq(G__7946__a,0,null);
} 
return G__7945__delegate.call(this,c,_);};
G__7945.cljs$lang$maxFixedArity = 1;
G__7945.cljs$lang$applyTo = (function (arglist__7947){
var c = cljs.core.first(arglist__7947);
var _ = cljs.core.rest(arglist__7947);
return G__7945__delegate(c,_);
});
G__7945.cljs$core$IFn$_invoke$arity$variadic = G__7945__delegate;
return G__7945;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7948__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7948 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7949__i = 0, G__7949__a = new Array(arguments.length -  2);
while (G__7949__i < G__7949__a.length) {G__7949__a[G__7949__i] = arguments[G__7949__i + 2]; ++G__7949__i;}
  _ = new cljs.core.IndexedSeq(G__7949__a,0,null);
} 
return G__7948__delegate.call(this,n,other,_);};
G__7948.cljs$lang$maxFixedArity = 2;
G__7948.cljs$lang$applyTo = (function (arglist__7950){
var n = cljs.core.first(arglist__7950);
arglist__7950 = cljs.core.next(arglist__7950);
var other = cljs.core.first(arglist__7950);
var _ = cljs.core.rest(arglist__7950);
return G__7948__delegate(n,other,_);
});
G__7948.cljs$core$IFn$_invoke$arity$variadic = G__7948__delegate;
return G__7948;
})()
,(function() { 
var G__7951__delegate = function (n,other,_){
return (n <= other);
};
var G__7951 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7952__i = 0, G__7952__a = new Array(arguments.length -  2);
while (G__7952__i < G__7952__a.length) {G__7952__a[G__7952__i] = arguments[G__7952__i + 2]; ++G__7952__i;}
  _ = new cljs.core.IndexedSeq(G__7952__a,0,null);
} 
return G__7951__delegate.call(this,n,other,_);};
G__7951.cljs$lang$maxFixedArity = 2;
G__7951.cljs$lang$applyTo = (function (arglist__7953){
var n = cljs.core.first(arglist__7953);
arglist__7953 = cljs.core.next(arglist__7953);
var other = cljs.core.first(arglist__7953);
var _ = cljs.core.rest(arglist__7953);
return G__7951__delegate(n,other,_);
});
G__7951.cljs$core$IFn$_invoke$arity$variadic = G__7951__delegate;
return G__7951;
})()
,(function() { 
var G__7954__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7954 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7956__i = 0, G__7956__a = new Array(arguments.length -  2);
while (G__7956__i < G__7956__a.length) {G__7956__a[G__7956__i] = arguments[G__7956__i + 2]; ++G__7956__i;}
  _ = new cljs.core.IndexedSeq(G__7956__a,0,null);
} 
return G__7954__delegate.call(this,n,other,_);};
G__7954.cljs$lang$maxFixedArity = 2;
G__7954.cljs$lang$applyTo = (function (arglist__7957){
var n = cljs.core.first(arglist__7957);
arglist__7957 = cljs.core.next(arglist__7957);
var other = cljs.core.first(arglist__7957);
var _ = cljs.core.rest(arglist__7957);
return G__7954__delegate(n,other,_);
});
G__7954.cljs$core$IFn$_invoke$arity$variadic = G__7954__delegate;
return G__7954;
})()
,(function() { 
var G__7958__delegate = function (n,other,_){
return (n < other);
};
var G__7958 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7959__i = 0, G__7959__a = new Array(arguments.length -  2);
while (G__7959__i < G__7959__a.length) {G__7959__a[G__7959__i] = arguments[G__7959__i + 2]; ++G__7959__i;}
  _ = new cljs.core.IndexedSeq(G__7959__a,0,null);
} 
return G__7958__delegate.call(this,n,other,_);};
G__7958.cljs$lang$maxFixedArity = 2;
G__7958.cljs$lang$applyTo = (function (arglist__7960){
var n = cljs.core.first(arglist__7960);
arglist__7960 = cljs.core.next(arglist__7960);
var other = cljs.core.first(arglist__7960);
var _ = cljs.core.rest(arglist__7960);
return G__7958__delegate(n,other,_);
});
G__7958.cljs$core$IFn$_invoke$arity$variadic = G__7958__delegate;
return G__7958;
})()
,(function() { 
var G__7961__delegate = function (n,other,_){
return (n + other);
};
var G__7961 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7962__i = 0, G__7962__a = new Array(arguments.length -  2);
while (G__7962__i < G__7962__a.length) {G__7962__a[G__7962__i] = arguments[G__7962__i + 2]; ++G__7962__i;}
  _ = new cljs.core.IndexedSeq(G__7962__a,0,null);
} 
return G__7961__delegate.call(this,n,other,_);};
G__7961.cljs$lang$maxFixedArity = 2;
G__7961.cljs$lang$applyTo = (function (arglist__7963){
var n = cljs.core.first(arglist__7963);
arglist__7963 = cljs.core.next(arglist__7963);
var other = cljs.core.first(arglist__7963);
var _ = cljs.core.rest(arglist__7963);
return G__7961__delegate(n,other,_);
});
G__7961.cljs$core$IFn$_invoke$arity$variadic = G__7961__delegate;
return G__7961;
})()
,(function() { 
var G__7964__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7964 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7965__i = 0, G__7965__a = new Array(arguments.length -  1);
while (G__7965__i < G__7965__a.length) {G__7965__a[G__7965__i] = arguments[G__7965__i + 1]; ++G__7965__i;}
  _ = new cljs.core.IndexedSeq(G__7965__a,0,null);
} 
return G__7964__delegate.call(this,n,_);};
G__7964.cljs$lang$maxFixedArity = 1;
G__7964.cljs$lang$applyTo = (function (arglist__7966){
var n = cljs.core.first(arglist__7966);
var _ = cljs.core.rest(arglist__7966);
return G__7964__delegate(n,_);
});
G__7964.cljs$core$IFn$_invoke$arity$variadic = G__7964__delegate;
return G__7964;
})()
,(function() { 
var G__7967__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7967 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7968__i = 0, G__7968__a = new Array(arguments.length -  1);
while (G__7968__i < G__7968__a.length) {G__7968__a[G__7968__i] = arguments[G__7968__i + 1]; ++G__7968__i;}
  _ = new cljs.core.IndexedSeq(G__7968__a,0,null);
} 
return G__7967__delegate.call(this,n,_);};
G__7967.cljs$lang$maxFixedArity = 1;
G__7967.cljs$lang$applyTo = (function (arglist__7969){
var n = cljs.core.first(arglist__7969);
var _ = cljs.core.rest(arglist__7969);
return G__7967__delegate(n,_);
});
G__7967.cljs$core$IFn$_invoke$arity$variadic = G__7967__delegate;
return G__7967;
})()
,(function() { 
var G__7970__delegate = function (n,other,_){
return (n > other);
};
var G__7970 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7971__i = 0, G__7971__a = new Array(arguments.length -  2);
while (G__7971__i < G__7971__a.length) {G__7971__a[G__7971__i] = arguments[G__7971__i + 2]; ++G__7971__i;}
  _ = new cljs.core.IndexedSeq(G__7971__a,0,null);
} 
return G__7970__delegate.call(this,n,other,_);};
G__7970.cljs$lang$maxFixedArity = 2;
G__7970.cljs$lang$applyTo = (function (arglist__7972){
var n = cljs.core.first(arglist__7972);
arglist__7972 = cljs.core.next(arglist__7972);
var other = cljs.core.first(arglist__7972);
var _ = cljs.core.rest(arglist__7972);
return G__7970__delegate(n,other,_);
});
G__7970.cljs$core$IFn$_invoke$arity$variadic = G__7970__delegate;
return G__7970;
})()
,(function() { 
var G__7973__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7973 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7974__i = 0, G__7974__a = new Array(arguments.length -  2);
while (G__7974__i < G__7974__a.length) {G__7974__a[G__7974__i] = arguments[G__7974__i + 2]; ++G__7974__i;}
  _ = new cljs.core.IndexedSeq(G__7974__a,0,null);
} 
return G__7973__delegate.call(this,n,other,_);};
G__7973.cljs$lang$maxFixedArity = 2;
G__7973.cljs$lang$applyTo = (function (arglist__7975){
var n = cljs.core.first(arglist__7975);
arglist__7975 = cljs.core.next(arglist__7975);
var other = cljs.core.first(arglist__7975);
var _ = cljs.core.rest(arglist__7975);
return G__7973__delegate(n,other,_);
});
G__7973.cljs$core$IFn$_invoke$arity$variadic = G__7973__delegate;
return G__7973;
})()
,(function() { 
var G__7976__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7976 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7977__i = 0, G__7977__a = new Array(arguments.length -  2);
while (G__7977__i < G__7977__a.length) {G__7977__a[G__7977__i] = arguments[G__7977__i + 2]; ++G__7977__i;}
  _ = new cljs.core.IndexedSeq(G__7977__a,0,null);
} 
return G__7976__delegate.call(this,n,other,_);};
G__7976.cljs$lang$maxFixedArity = 2;
G__7976.cljs$lang$applyTo = (function (arglist__7978){
var n = cljs.core.first(arglist__7978);
arglist__7978 = cljs.core.next(arglist__7978);
var other = cljs.core.first(arglist__7978);
var _ = cljs.core.rest(arglist__7978);
return G__7976__delegate(n,other,_);
});
G__7976.cljs$core$IFn$_invoke$arity$variadic = G__7976__delegate;
return G__7976;
})()
,(function() { 
var G__7979__delegate = function (n,other,_){
return (n - other);
};
var G__7979 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7980__i = 0, G__7980__a = new Array(arguments.length -  2);
while (G__7980__i < G__7980__a.length) {G__7980__a[G__7980__i] = arguments[G__7980__i + 2]; ++G__7980__i;}
  _ = new cljs.core.IndexedSeq(G__7980__a,0,null);
} 
return G__7979__delegate.call(this,n,other,_);};
G__7979.cljs$lang$maxFixedArity = 2;
G__7979.cljs$lang$applyTo = (function (arglist__7981){
var n = cljs.core.first(arglist__7981);
arglist__7981 = cljs.core.next(arglist__7981);
var other = cljs.core.first(arglist__7981);
var _ = cljs.core.rest(arglist__7981);
return G__7979__delegate(n,other,_);
});
G__7979.cljs$core$IFn$_invoke$arity$variadic = G__7979__delegate;
return G__7979;
})()
,(function() { 
var G__7982__delegate = function (n,other,_){
return (n * other);
};
var G__7982 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7983__i = 0, G__7983__a = new Array(arguments.length -  2);
while (G__7983__i < G__7983__a.length) {G__7983__a[G__7983__i] = arguments[G__7983__i + 2]; ++G__7983__i;}
  _ = new cljs.core.IndexedSeq(G__7983__a,0,null);
} 
return G__7982__delegate.call(this,n,other,_);};
G__7982.cljs$lang$maxFixedArity = 2;
G__7982.cljs$lang$applyTo = (function (arglist__7984){
var n = cljs.core.first(arglist__7984);
arglist__7984 = cljs.core.next(arglist__7984);
var other = cljs.core.first(arglist__7984);
var _ = cljs.core.rest(arglist__7984);
return G__7982__delegate(n,other,_);
});
G__7982.cljs$core$IFn$_invoke$arity$variadic = G__7982__delegate;
return G__7982;
})()
,(function() { 
var G__7985__delegate = function (n,other,_){
return (n / other);
};
var G__7985 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7986__i = 0, G__7986__a = new Array(arguments.length -  2);
while (G__7986__i < G__7986__a.length) {G__7986__a[G__7986__i] = arguments[G__7986__i + 2]; ++G__7986__i;}
  _ = new cljs.core.IndexedSeq(G__7986__a,0,null);
} 
return G__7985__delegate.call(this,n,other,_);};
G__7985.cljs$lang$maxFixedArity = 2;
G__7985.cljs$lang$applyTo = (function (arglist__7987){
var n = cljs.core.first(arglist__7987);
arglist__7987 = cljs.core.next(arglist__7987);
var other = cljs.core.first(arglist__7987);
var _ = cljs.core.rest(arglist__7987);
return G__7985__delegate(n,other,_);
});
G__7985.cljs$core$IFn$_invoke$arity$variadic = G__7985__delegate;
return G__7985;
})()
,(function() { 
var G__7988__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7988 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7989__i = 0, G__7989__a = new Array(arguments.length -  1);
while (G__7989__i < G__7989__a.length) {G__7989__a[G__7989__i] = arguments[G__7989__i + 1]; ++G__7989__i;}
  _ = new cljs.core.IndexedSeq(G__7989__a,0,null);
} 
return G__7988__delegate.call(this,n,_);};
G__7988.cljs$lang$maxFixedArity = 1;
G__7988.cljs$lang$applyTo = (function (arglist__7990){
var n = cljs.core.first(arglist__7990);
var _ = cljs.core.rest(arglist__7990);
return G__7988__delegate(n,_);
});
G__7988.cljs$core$IFn$_invoke$arity$variadic = G__7988__delegate;
return G__7988;
})()
,(function() { 
var G__7991__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7991 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7992__i = 0, G__7992__a = new Array(arguments.length -  1);
while (G__7992__i < G__7992__a.length) {G__7992__a[G__7992__i] = arguments[G__7992__i + 1]; ++G__7992__i;}
  _ = new cljs.core.IndexedSeq(G__7992__a,0,null);
} 
return G__7991__delegate.call(this,n,_);};
G__7991.cljs$lang$maxFixedArity = 1;
G__7991.cljs$lang$applyTo = (function (arglist__7993){
var n = cljs.core.first(arglist__7993);
var _ = cljs.core.rest(arglist__7993);
return G__7991__delegate(n,_);
});
G__7991.cljs$core$IFn$_invoke$arity$variadic = G__7991__delegate;
return G__7991;
})()
,(function() { 
var G__7994__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7994 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7995__i = 0, G__7995__a = new Array(arguments.length -  2);
while (G__7995__i < G__7995__a.length) {G__7995__a[G__7995__i] = arguments[G__7995__i + 2]; ++G__7995__i;}
  _ = new cljs.core.IndexedSeq(G__7995__a,0,null);
} 
return G__7994__delegate.call(this,n,other,_);};
G__7994.cljs$lang$maxFixedArity = 2;
G__7994.cljs$lang$applyTo = (function (arglist__7996){
var n = cljs.core.first(arglist__7996);
arglist__7996 = cljs.core.next(arglist__7996);
var other = cljs.core.first(arglist__7996);
var _ = cljs.core.rest(arglist__7996);
return G__7994__delegate(n,other,_);
});
G__7994.cljs$core$IFn$_invoke$arity$variadic = G__7994__delegate;
return G__7994;
})()
,(function() { 
var G__7997__delegate = function (n,other,_){
return (n >= other);
};
var G__7997 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7998__i = 0, G__7998__a = new Array(arguments.length -  2);
while (G__7998__i < G__7998__a.length) {G__7998__a[G__7998__i] = arguments[G__7998__i + 2]; ++G__7998__i;}
  _ = new cljs.core.IndexedSeq(G__7998__a,0,null);
} 
return G__7997__delegate.call(this,n,other,_);};
G__7997.cljs$lang$maxFixedArity = 2;
G__7997.cljs$lang$applyTo = (function (arglist__7999){
var n = cljs.core.first(arglist__7999);
arglist__7999 = cljs.core.next(arglist__7999);
var other = cljs.core.first(arglist__7999);
var _ = cljs.core.rest(arglist__7999);
return G__7997__delegate(n,other,_);
});
G__7997.cljs$core$IFn$_invoke$arity$variadic = G__7997__delegate;
return G__7997;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__8000__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__8000 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8001__i = 0, G__8001__a = new Array(arguments.length -  2);
while (G__8001__i < G__8001__a.length) {G__8001__a[G__8001__i] = arguments[G__8001__i + 2]; ++G__8001__i;}
  _ = new cljs.core.IndexedSeq(G__8001__a,0,null);
} 
return G__8000__delegate.call(this,s,other,_);};
G__8000.cljs$lang$maxFixedArity = 2;
G__8000.cljs$lang$applyTo = (function (arglist__8002){
var s = cljs.core.first(arglist__8002);
arglist__8002 = cljs.core.next(arglist__8002);
var other = cljs.core.first(arglist__8002);
var _ = cljs.core.rest(arglist__8002);
return G__8000__delegate(s,other,_);
});
G__8000.cljs$core$IFn$_invoke$arity$variadic = G__8000__delegate;
return G__8000;
})()
,(function() { 
var G__8004__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__8004 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8005__i = 0, G__8005__a = new Array(arguments.length -  2);
while (G__8005__i < G__8005__a.length) {G__8005__a[G__8005__i] = arguments[G__8005__i + 2]; ++G__8005__i;}
  _ = new cljs.core.IndexedSeq(G__8005__a,0,null);
} 
return G__8004__delegate.call(this,s,other,_);};
G__8004.cljs$lang$maxFixedArity = 2;
G__8004.cljs$lang$applyTo = (function (arglist__8006){
var s = cljs.core.first(arglist__8006);
arglist__8006 = cljs.core.next(arglist__8006);
var other = cljs.core.first(arglist__8006);
var _ = cljs.core.rest(arglist__8006);
return G__8004__delegate(s,other,_);
});
G__8004.cljs$core$IFn$_invoke$arity$variadic = G__8004__delegate;
return G__8004;
})()
,(function() { 
var G__8007__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8007 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8008__i = 0, G__8008__a = new Array(arguments.length -  1);
while (G__8008__i < G__8008__a.length) {G__8008__a[G__8008__i] = arguments[G__8008__i + 1]; ++G__8008__i;}
  _ = new cljs.core.IndexedSeq(G__8008__a,0,null);
} 
return G__8007__delegate.call(this,s,_);};
G__8007.cljs$lang$maxFixedArity = 1;
G__8007.cljs$lang$applyTo = (function (arglist__8009){
var s = cljs.core.first(arglist__8009);
var _ = cljs.core.rest(arglist__8009);
return G__8007__delegate(s,_);
});
G__8007.cljs$core$IFn$_invoke$arity$variadic = G__8007__delegate;
return G__8007;
})()
,(function() { 
var G__8010__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__8010 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8011__i = 0, G__8011__a = new Array(arguments.length -  1);
while (G__8011__i < G__8011__a.length) {G__8011__a[G__8011__i] = arguments[G__8011__i + 1]; ++G__8011__i;}
  _ = new cljs.core.IndexedSeq(G__8011__a,0,null);
} 
return G__8010__delegate.call(this,s,_);};
G__8010.cljs$lang$maxFixedArity = 1;
G__8010.cljs$lang$applyTo = (function (arglist__8012){
var s = cljs.core.first(arglist__8012);
var _ = cljs.core.rest(arglist__8012);
return G__8010__delegate(s,_);
});
G__8010.cljs$core$IFn$_invoke$arity$variadic = G__8010__delegate;
return G__8010;
})()
,(function() { 
var G__8013__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__8013 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8014__i = 0, G__8014__a = new Array(arguments.length -  2);
while (G__8014__i < G__8014__a.length) {G__8014__a[G__8014__i] = arguments[G__8014__i + 2]; ++G__8014__i;}
  _ = new cljs.core.IndexedSeq(G__8014__a,0,null);
} 
return G__8013__delegate.call(this,s,prefix,_);};
G__8013.cljs$lang$maxFixedArity = 2;
G__8013.cljs$lang$applyTo = (function (arglist__8015){
var s = cljs.core.first(arglist__8015);
arglist__8015 = cljs.core.next(arglist__8015);
var prefix = cljs.core.first(arglist__8015);
var _ = cljs.core.rest(arglist__8015);
return G__8013__delegate(s,prefix,_);
});
G__8013.cljs$core$IFn$_invoke$arity$variadic = G__8013__delegate;
return G__8013;
})()
,(function() { 
var G__8016__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__8016 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8017__i = 0, G__8017__a = new Array(arguments.length -  1);
while (G__8017__i < G__8017__a.length) {G__8017__a[G__8017__i] = arguments[G__8017__i + 1]; ++G__8017__i;}
  _ = new cljs.core.IndexedSeq(G__8017__a,0,null);
} 
return G__8016__delegate.call(this,s,_);};
G__8016.cljs$lang$maxFixedArity = 1;
G__8016.cljs$lang$applyTo = (function (arglist__8018){
var s = cljs.core.first(arglist__8018);
var _ = cljs.core.rest(arglist__8018);
return G__8016__delegate(s,_);
});
G__8016.cljs$core$IFn$_invoke$arity$variadic = G__8016__delegate;
return G__8016;
})()
,(function() { 
var G__8019__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__8019 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8020__i = 0, G__8020__a = new Array(arguments.length -  2);
while (G__8020__i < G__8020__a.length) {G__8020__a[G__8020__i] = arguments[G__8020__i + 2]; ++G__8020__i;}
  _ = new cljs.core.IndexedSeq(G__8020__a,0,null);
} 
return G__8019__delegate.call(this,s,other,_);};
G__8019.cljs$lang$maxFixedArity = 2;
G__8019.cljs$lang$applyTo = (function (arglist__8021){
var s = cljs.core.first(arglist__8021);
arglist__8021 = cljs.core.next(arglist__8021);
var other = cljs.core.first(arglist__8021);
var _ = cljs.core.rest(arglist__8021);
return G__8019__delegate(s,other,_);
});
G__8019.cljs$core$IFn$_invoke$arity$variadic = G__8019__delegate;
return G__8019;
})()
,(function() { 
var G__8022__delegate = function (s,other,p__6397){
var vec__6398 = p__6397;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6398,(0),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ctx)?nex.interpreter.concat_string_value(ctx,other):nex.interpreter.nex_format_value(other))));
};
var G__8022 = function (s,other,var_args){
var p__6397 = null;
if (arguments.length > 2) {
var G__8023__i = 0, G__8023__a = new Array(arguments.length -  2);
while (G__8023__i < G__8023__a.length) {G__8023__a[G__8023__i] = arguments[G__8023__i + 2]; ++G__8023__i;}
  p__6397 = new cljs.core.IndexedSeq(G__8023__a,0,null);
} 
return G__8022__delegate.call(this,s,other,p__6397);};
G__8022.cljs$lang$maxFixedArity = 2;
G__8022.cljs$lang$applyTo = (function (arglist__8024){
var s = cljs.core.first(arglist__8024);
arglist__8024 = cljs.core.next(arglist__8024);
var other = cljs.core.first(arglist__8024);
var p__6397 = cljs.core.rest(arglist__8024);
return G__8022__delegate(s,other,p__6397);
});
G__8022.cljs$core$IFn$_invoke$arity$variadic = G__8022__delegate;
return G__8022;
})()
,(function() { 
var G__8025__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__8025 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8026__i = 0, G__8026__a = new Array(arguments.length -  1);
while (G__8026__i < G__8026__a.length) {G__8026__a[G__8026__i] = arguments[G__8026__i + 1]; ++G__8026__i;}
  _ = new cljs.core.IndexedSeq(G__8026__a,0,null);
} 
return G__8025__delegate.call(this,s,_);};
G__8025.cljs$lang$maxFixedArity = 1;
G__8025.cljs$lang$applyTo = (function (arglist__8027){
var s = cljs.core.first(arglist__8027);
var _ = cljs.core.rest(arglist__8027);
return G__8025__delegate(s,_);
});
G__8025.cljs$core$IFn$_invoke$arity$variadic = G__8025__delegate;
return G__8025;
})()
,(function() { 
var G__8028__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__8028 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8029__i = 0, G__8029__a = new Array(arguments.length -  2);
while (G__8029__i < G__8029__a.length) {G__8029__a[G__8029__i] = arguments[G__8029__i + 2]; ++G__8029__i;}
  _ = new cljs.core.IndexedSeq(G__8029__a,0,null);
} 
return G__8028__delegate.call(this,s,other,_);};
G__8028.cljs$lang$maxFixedArity = 2;
G__8028.cljs$lang$applyTo = (function (arglist__8030){
var s = cljs.core.first(arglist__8030);
arglist__8030 = cljs.core.next(arglist__8030);
var other = cljs.core.first(arglist__8030);
var _ = cljs.core.rest(arglist__8030);
return G__8028__delegate(s,other,_);
});
G__8028.cljs$core$IFn$_invoke$arity$variadic = G__8028__delegate;
return G__8028;
})()
,(function() { 
var G__8031__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__8031 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8032__i = 0, G__8032__a = new Array(arguments.length -  2);
while (G__8032__i < G__8032__a.length) {G__8032__a[G__8032__i] = arguments[G__8032__i + 2]; ++G__8032__i;}
  _ = new cljs.core.IndexedSeq(G__8032__a,0,null);
} 
return G__8031__delegate.call(this,s,substr,_);};
G__8031.cljs$lang$maxFixedArity = 2;
G__8031.cljs$lang$applyTo = (function (arglist__8033){
var s = cljs.core.first(arglist__8033);
arglist__8033 = cljs.core.next(arglist__8033);
var substr = cljs.core.first(arglist__8033);
var _ = cljs.core.rest(arglist__8033);
return G__8031__delegate(s,substr,_);
});
G__8031.cljs$core$IFn$_invoke$arity$variadic = G__8031__delegate;
return G__8031;
})()
,(function() { 
var G__8034__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8034 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8035__i = 0, G__8035__a = new Array(arguments.length -  1);
while (G__8035__i < G__8035__a.length) {G__8035__a[G__8035__i] = arguments[G__8035__i + 1]; ++G__8035__i;}
  _ = new cljs.core.IndexedSeq(G__8035__a,0,null);
} 
return G__8034__delegate.call(this,s,_);};
G__8034.cljs$lang$maxFixedArity = 1;
G__8034.cljs$lang$applyTo = (function (arglist__8036){
var s = cljs.core.first(arglist__8036);
var _ = cljs.core.rest(arglist__8036);
return G__8034__delegate(s,_);
});
G__8034.cljs$core$IFn$_invoke$arity$variadic = G__8034__delegate;
return G__8034;
})()
,(function() { 
var G__8037__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8037 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8038__i = 0, G__8038__a = new Array(arguments.length -  2);
while (G__8038__i < G__8038__a.length) {G__8038__a[G__8038__i] = arguments[G__8038__i + 2]; ++G__8038__i;}
  _ = new cljs.core.IndexedSeq(G__8038__a,0,null);
} 
return G__8037__delegate.call(this,s,other,_);};
G__8037.cljs$lang$maxFixedArity = 2;
G__8037.cljs$lang$applyTo = (function (arglist__8039){
var s = cljs.core.first(arglist__8039);
arglist__8039 = cljs.core.next(arglist__8039);
var other = cljs.core.first(arglist__8039);
var _ = cljs.core.rest(arglist__8039);
return G__8037__delegate(s,other,_);
});
G__8037.cljs$core$IFn$_invoke$arity$variadic = G__8037__delegate;
return G__8037;
})()
,(function() { 
var G__8040__delegate = function (s,_){
return nex.interpreter.nex_parse_integer(s);
};
var G__8040 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8041__i = 0, G__8041__a = new Array(arguments.length -  1);
while (G__8041__i < G__8041__a.length) {G__8041__a[G__8041__i] = arguments[G__8041__i + 1]; ++G__8041__i;}
  _ = new cljs.core.IndexedSeq(G__8041__a,0,null);
} 
return G__8040__delegate.call(this,s,_);};
G__8040.cljs$lang$maxFixedArity = 1;
G__8040.cljs$lang$applyTo = (function (arglist__8042){
var s = cljs.core.first(arglist__8042);
var _ = cljs.core.rest(arglist__8042);
return G__8040__delegate(s,_);
});
G__8040.cljs$core$IFn$_invoke$arity$variadic = G__8040__delegate;
return G__8040;
})()
,(function() { 
var G__8043__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__8043 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8044__i = 0, G__8044__a = new Array(arguments.length -  1);
while (G__8044__i < G__8044__a.length) {G__8044__a[G__8044__i] = arguments[G__8044__i + 1]; ++G__8044__i;}
  _ = new cljs.core.IndexedSeq(G__8044__a,0,null);
} 
return G__8043__delegate.call(this,s,_);};
G__8043.cljs$lang$maxFixedArity = 1;
G__8043.cljs$lang$applyTo = (function (arglist__8045){
var s = cljs.core.first(arglist__8045);
var _ = cljs.core.rest(arglist__8045);
return G__8043__delegate(s,_);
});
G__8043.cljs$core$IFn$_invoke$arity$variadic = G__8043__delegate;
return G__8043;
})()
,(function() { 
var G__8046__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__8046 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8047__i = 0, G__8047__a = new Array(arguments.length -  3);
while (G__8047__i < G__8047__a.length) {G__8047__a[G__8047__i] = arguments[G__8047__i + 3]; ++G__8047__i;}
  _ = new cljs.core.IndexedSeq(G__8047__a,0,null);
} 
return G__8046__delegate.call(this,s,start,end,_);};
G__8046.cljs$lang$maxFixedArity = 3;
G__8046.cljs$lang$applyTo = (function (arglist__8048){
var s = cljs.core.first(arglist__8048);
arglist__8048 = cljs.core.next(arglist__8048);
var start = cljs.core.first(arglist__8048);
arglist__8048 = cljs.core.next(arglist__8048);
var end = cljs.core.first(arglist__8048);
var _ = cljs.core.rest(arglist__8048);
return G__8046__delegate(s,start,end,_);
});
G__8046.cljs$core$IFn$_invoke$arity$variadic = G__8046__delegate;
return G__8046;
})()
,(function() { 
var G__8049__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__8049 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8050__i = 0, G__8050__a = new Array(arguments.length -  2);
while (G__8050__i < G__8050__a.length) {G__8050__a[G__8050__i] = arguments[G__8050__i + 2]; ++G__8050__i;}
  _ = new cljs.core.IndexedSeq(G__8050__a,0,null);
} 
return G__8049__delegate.call(this,s,idx,_);};
G__8049.cljs$lang$maxFixedArity = 2;
G__8049.cljs$lang$applyTo = (function (arglist__8051){
var s = cljs.core.first(arglist__8051);
arglist__8051 = cljs.core.next(arglist__8051);
var idx = cljs.core.first(arglist__8051);
var _ = cljs.core.rest(arglist__8051);
return G__8049__delegate(s,idx,_);
});
G__8049.cljs$core$IFn$_invoke$arity$variadic = G__8049__delegate;
return G__8049;
})()
,(function() { 
var G__8052__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__8052 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8053__i = 0, G__8053__a = new Array(arguments.length -  3);
while (G__8053__i < G__8053__a.length) {G__8053__a[G__8053__i] = arguments[G__8053__i + 3]; ++G__8053__i;}
  _ = new cljs.core.IndexedSeq(G__8053__a,0,null);
} 
return G__8052__delegate.call(this,s,old,new$,_);};
G__8052.cljs$lang$maxFixedArity = 3;
G__8052.cljs$lang$applyTo = (function (arglist__8054){
var s = cljs.core.first(arglist__8054);
arglist__8054 = cljs.core.next(arglist__8054);
var old = cljs.core.first(arglist__8054);
arglist__8054 = cljs.core.next(arglist__8054);
var new$ = cljs.core.first(arglist__8054);
var _ = cljs.core.rest(arglist__8054);
return G__8052__delegate(s,old,new$,_);
});
G__8052.cljs$core$IFn$_invoke$arity$variadic = G__8052__delegate;
return G__8052;
})()
,(function() { 
var G__8055__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8055 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8056__i = 0, G__8056__a = new Array(arguments.length -  1);
while (G__8056__i < G__8056__a.length) {G__8056__a[G__8056__i] = arguments[G__8056__i + 1]; ++G__8056__i;}
  _ = new cljs.core.IndexedSeq(G__8056__a,0,null);
} 
return G__8055__delegate.call(this,s,_);};
G__8055.cljs$lang$maxFixedArity = 1;
G__8055.cljs$lang$applyTo = (function (arglist__8057){
var s = cljs.core.first(arglist__8057);
var _ = cljs.core.rest(arglist__8057);
return G__8055__delegate(s,_);
});
G__8055.cljs$core$IFn$_invoke$arity$variadic = G__8055__delegate;
return G__8055;
})()
,(function() { 
var G__8058__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__8058 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8059__i = 0, G__8059__a = new Array(arguments.length -  2);
while (G__8059__i < G__8059__a.length) {G__8059__a[G__8059__i] = arguments[G__8059__i + 2]; ++G__8059__i;}
  _ = new cljs.core.IndexedSeq(G__8059__a,0,null);
} 
return G__8058__delegate.call(this,s,delim,_);};
G__8058.cljs$lang$maxFixedArity = 2;
G__8058.cljs$lang$applyTo = (function (arglist__8060){
var s = cljs.core.first(arglist__8060);
arglist__8060 = cljs.core.next(arglist__8060);
var delim = cljs.core.first(arglist__8060);
var _ = cljs.core.rest(arglist__8060);
return G__8058__delegate(s,delim,_);
});
G__8058.cljs$core$IFn$_invoke$arity$variadic = G__8058__delegate;
return G__8058;
})()
,(function() { 
var G__8061__delegate = function (s,_){
return cljs.core.count(s);
};
var G__8061 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8062__i = 0, G__8062__a = new Array(arguments.length -  1);
while (G__8062__i < G__8062__a.length) {G__8062__a[G__8062__i] = arguments[G__8062__i + 1]; ++G__8062__i;}
  _ = new cljs.core.IndexedSeq(G__8062__a,0,null);
} 
return G__8061__delegate.call(this,s,_);};
G__8061.cljs$lang$maxFixedArity = 1;
G__8061.cljs$lang$applyTo = (function (arglist__8063){
var s = cljs.core.first(arglist__8063);
var _ = cljs.core.rest(arglist__8063);
return G__8061__delegate(s,_);
});
G__8061.cljs$core$IFn$_invoke$arity$variadic = G__8061__delegate;
return G__8061;
})()
,(function() { 
var G__8064__delegate = function (s,_){
return nex.interpreter.nex_parse_integer64_string(s);
};
var G__8064 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8065__i = 0, G__8065__a = new Array(arguments.length -  1);
while (G__8065__i < G__8065__a.length) {G__8065__a[G__8065__i] = arguments[G__8065__i + 1]; ++G__8065__i;}
  _ = new cljs.core.IndexedSeq(G__8065__a,0,null);
} 
return G__8064__delegate.call(this,s,_);};
G__8064.cljs$lang$maxFixedArity = 1;
G__8064.cljs$lang$applyTo = (function (arglist__8066){
var s = cljs.core.first(arglist__8066);
var _ = cljs.core.rest(arglist__8066);
return G__8064__delegate(s,_);
});
G__8064.cljs$core$IFn$_invoke$arity$variadic = G__8064__delegate;
return G__8064;
})()
,(function() { 
var G__8067__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__8067 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8068__i = 0, G__8068__a = new Array(arguments.length -  2);
while (G__8068__i < G__8068__a.length) {G__8068__a[G__8068__i] = arguments[G__8068__i + 2]; ++G__8068__i;}
  _ = new cljs.core.IndexedSeq(G__8068__a,0,null);
} 
return G__8067__delegate.call(this,s,ch,_);};
G__8067.cljs$lang$maxFixedArity = 2;
G__8067.cljs$lang$applyTo = (function (arglist__8069){
var s = cljs.core.first(arglist__8069);
arglist__8069 = cljs.core.next(arglist__8069);
var ch = cljs.core.first(arglist__8069);
var _ = cljs.core.rest(arglist__8069);
return G__8067__delegate(s,ch,_);
});
G__8067.cljs$core$IFn$_invoke$arity$variadic = G__8067__delegate;
return G__8067;
})()
,(function() { 
var G__8070__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8070 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8071__i = 0, G__8071__a = new Array(arguments.length -  2);
while (G__8071__i < G__8071__a.length) {G__8071__a[G__8071__i] = arguments[G__8071__i + 2]; ++G__8071__i;}
  _ = new cljs.core.IndexedSeq(G__8071__a,0,null);
} 
return G__8070__delegate.call(this,s,other,_);};
G__8070.cljs$lang$maxFixedArity = 2;
G__8070.cljs$lang$applyTo = (function (arglist__8072){
var s = cljs.core.first(arglist__8072);
arglist__8072 = cljs.core.next(arglist__8072);
var other = cljs.core.first(arglist__8072);
var _ = cljs.core.rest(arglist__8072);
return G__8070__delegate(s,other,_);
});
G__8070.cljs$core$IFn$_invoke$arity$variadic = G__8070__delegate;
return G__8070;
})()
,(function() { 
var G__8073__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__8073 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8074__i = 0, G__8074__a = new Array(arguments.length -  2);
while (G__8074__i < G__8074__a.length) {G__8074__a[G__8074__i] = arguments[G__8074__i + 2]; ++G__8074__i;}
  _ = new cljs.core.IndexedSeq(G__8074__a,0,null);
} 
return G__8073__delegate.call(this,s,other,_);};
G__8073.cljs$lang$maxFixedArity = 2;
G__8073.cljs$lang$applyTo = (function (arglist__8075){
var s = cljs.core.first(arglist__8075);
arglist__8075 = cljs.core.next(arglist__8075);
var other = cljs.core.first(arglist__8075);
var _ = cljs.core.rest(arglist__8075);
return G__8073__delegate(s,other,_);
});
G__8073.cljs$core$IFn$_invoke$arity$variadic = G__8073__delegate;
return G__8073;
})()
,(function() { 
var G__8076__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__8076 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8077__i = 0, G__8077__a = new Array(arguments.length -  2);
while (G__8077__i < G__8077__a.length) {G__8077__a[G__8077__i] = arguments[G__8077__i + 2]; ++G__8077__i;}
  _ = new cljs.core.IndexedSeq(G__8077__a,0,null);
} 
return G__8076__delegate.call(this,s,suffix,_);};
G__8076.cljs$lang$maxFixedArity = 2;
G__8076.cljs$lang$applyTo = (function (arglist__8078){
var s = cljs.core.first(arglist__8078);
arglist__8078 = cljs.core.next(arglist__8078);
var suffix = cljs.core.first(arglist__8078);
var _ = cljs.core.rest(arglist__8078);
return G__8076__delegate(s,suffix,_);
});
G__8076.cljs$core$IFn$_invoke$arity$variadic = G__8076__delegate;
return G__8076;
})()
])]);
})();
/**
 * Get the type name for a value
 */
nex.interpreter.get_type_name = (function nex$interpreter$get_type_name(value){
if(typeof value === 'string'){
return new cljs.core.Keyword(null,"String","String",584378334);
} else {
if(((typeof value === 'number') && ((!(cljs.core.integer_QMARK_(value)))))){
return new cljs.core.Keyword(null,"Real","Real",-1266238786);
} else {
if(cljs.core.integer_QMARK_(value)){
return new cljs.core.Keyword(null,"Integer","Integer",-641373298);
} else {
if(nex.interpreter.nex_char_QMARK_(value)){
return new cljs.core.Keyword(null,"Char","Char",2025763229);
} else {
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.Keyword(null,"Boolean","Boolean",20610060);
} else {
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(value))){
return new cljs.core.Keyword(null,"Array","Array",-2064027806);
} else {
if(nex.interpreter.nex_map_QMARK_(value)){
return new cljs.core.Keyword(null,"Map","Map",-197728088);
} else {
if(nex.interpreter.nex_set_QMARK_(value)){
return new cljs.core.Keyword(null,"Set","Set",-1553598550);
} else {
if(nex.interpreter.nex_console_QMARK_(value)){
return new cljs.core.Keyword(null,"Console","Console",-423236809);
} else {
if(nex.interpreter.nex_file_QMARK_(value)){
return new cljs.core.Keyword(null,"File","File",-1707525042);
} else {
if(nex.interpreter.nex_process_QMARK_(value)){
return new cljs.core.Keyword(null,"Process","Process",-799294660);
} else {
if(nex.interpreter.nex_task_QMARK_(value)){
return new cljs.core.Keyword(null,"Task","Task",-409968362);
} else {
if(nex.interpreter.nex_channel_QMARK_(value)){
return new cljs.core.Keyword(null,"Channel","Channel",1087781355);
} else {
if(nex.interpreter.nex_window_QMARK_(value)){
return new cljs.core.Keyword(null,"Window","Window",-1779391782);
} else {
if(nex.interpreter.nex_turtle_QMARK_(value)){
return new cljs.core.Keyword(null,"Turtle","Turtle",572208937);
} else {
if(nex.interpreter.nex_image_QMARK_(value)){
return new cljs.core.Keyword(null,"Image","Image",-1429161147);
} else {
if(nex.interpreter.nex_array_cursor_QMARK_(value)){
return new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167);
} else {
if(nex.interpreter.nex_string_cursor_QMARK_(value)){
return new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462);
} else {
if(nex.interpreter.nex_map_cursor_QMARK_(value)){
return new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766);
} else {
if(nex.interpreter.nex_set_cursor_QMARK_(value)){
return new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688);
} else {
return null;

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}

}

}
});
/**
 * Call a built-in method on a primitive value
 */
nex.interpreter.call_builtin_method = (function nex$interpreter$call_builtin_method(target,value,method_name,args){
var temp__5821__auto__ = (function (){var or__5142__auto__ = (function (){var temp__5823__auto__ = nex.interpreter.get_type_name(value);
if(cljs.core.truth_(temp__5823__auto__)){
var type_name = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtin_type_methods,type_name);
if(cljs.core.truth_(temp__5823__auto____$1)){
var methods$ = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,method_name);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtin_type_methods,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Any","Any",-363039258),method_name], null));
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var method_fn = temp__5821__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(method_fn,value,args);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found on type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"method","method",55703592),method_name], null));
}
});
if((typeof nex !== 'undefined') && (typeof nex.interpreter !== 'undefined') && (typeof nex.interpreter.eval_node !== 'undefined')){
} else {
/**
 * Evaluate an AST node in the given context.
 */
nex.interpreter.eval_node = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6401 = cljs.core.get_global_hierarchy;
return (fexpr__6401.cljs$core$IFn$_invoke$arity$0 ? fexpr__6401.cljs$core$IFn$_invoke$arity$0() : fexpr__6401.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("nex.interpreter","eval-node"),(function (ctx,node){
if(cljs.core.map_QMARK_(node)){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
} else {
return new cljs.core.Keyword(null,"literal","literal",1664775605);

}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
/**
 * Search for an intern file in the specified locations.
 *    Returns the absolute path if found, otherwise throws an exception.
 */
nex.interpreter.find_intern_file = (function nex$interpreter$find_intern_file(path,class_name){
var fs = require("fs");
var path_module = require("path");
var filename = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+".nex");
var home = (function (){var or__5142__auto__ = process.env.HOME;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = process.env.USERPROFILE;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return ".";
}
}
})();
var locations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"./"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)),(""+"./libs/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/src/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(home)+"/.nex/deps/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/src/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename))], null);
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6403_SHARP_){
return fs.existsSync(p1__6403_SHARP_);
}),locations));
if(cljs.core.truth_(found)){
return found;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot find intern file for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"searched-locations","searched-locations",495134046),locations], null));
}
});
/**
 * In ClojureScript, intern is not supported. Use registerClass instead.
 */
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6404){
var map__6405 = p__6404;
var map__6405__$1 = cljs.core.__destructure_map(map__6405);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6406){
var map__6407 = p__6406;
var map__6407__$1 = cljs.core.__destructure_map(map__6407);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6408_8081 = cljs.core.seq(imports);
var chunk__6409_8082 = null;
var count__6410_8083 = (0);
var i__6411_8084 = (0);
while(true){
if((i__6411_8084 < count__6410_8083)){
var import_node_8086 = chunk__6409_8082.cljs$core$IIndexed$_nth$arity$2(null,i__6411_8084);
if(cljs.core.map_QMARK_(import_node_8086)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8086);
} else {
}


var G__8088 = seq__6408_8081;
var G__8089 = chunk__6409_8082;
var G__8090 = count__6410_8083;
var G__8091 = (i__6411_8084 + (1));
seq__6408_8081 = G__8088;
chunk__6409_8082 = G__8089;
count__6410_8083 = G__8090;
i__6411_8084 = G__8091;
continue;
} else {
var temp__5823__auto___8092 = cljs.core.seq(seq__6408_8081);
if(temp__5823__auto___8092){
var seq__6408_8093__$1 = temp__5823__auto___8092;
if(cljs.core.chunked_seq_QMARK_(seq__6408_8093__$1)){
var c__5673__auto___8094 = cljs.core.chunk_first(seq__6408_8093__$1);
var G__8095 = cljs.core.chunk_rest(seq__6408_8093__$1);
var G__8096 = c__5673__auto___8094;
var G__8097 = cljs.core.count(c__5673__auto___8094);
var G__8098 = (0);
seq__6408_8081 = G__8095;
chunk__6409_8082 = G__8096;
count__6410_8083 = G__8097;
i__6411_8084 = G__8098;
continue;
} else {
var import_node_8099 = cljs.core.first(seq__6408_8093__$1);
if(cljs.core.map_QMARK_(import_node_8099)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8099);
} else {
}


var G__8100 = cljs.core.next(seq__6408_8093__$1);
var G__8101 = null;
var G__8102 = (0);
var G__8103 = (0);
seq__6408_8081 = G__8100;
chunk__6409_8082 = G__8101;
count__6410_8083 = G__8102;
i__6411_8084 = G__8103;
continue;
}
} else {
}
}
break;
}

var seq__6412_8104 = cljs.core.seq(interns);
var chunk__6413_8105 = null;
var count__6414_8106 = (0);
var i__6415_8107 = (0);
while(true){
if((i__6415_8107 < count__6414_8106)){
var intern_node_8108 = chunk__6413_8105.cljs$core$IIndexed$_nth$arity$2(null,i__6415_8107);
if(cljs.core.map_QMARK_(intern_node_8108)){
nex.interpreter.process_intern(ctx,intern_node_8108);
} else {
}


var G__8109 = seq__6412_8104;
var G__8110 = chunk__6413_8105;
var G__8111 = count__6414_8106;
var G__8112 = (i__6415_8107 + (1));
seq__6412_8104 = G__8109;
chunk__6413_8105 = G__8110;
count__6414_8106 = G__8111;
i__6415_8107 = G__8112;
continue;
} else {
var temp__5823__auto___8113 = cljs.core.seq(seq__6412_8104);
if(temp__5823__auto___8113){
var seq__6412_8114__$1 = temp__5823__auto___8113;
if(cljs.core.chunked_seq_QMARK_(seq__6412_8114__$1)){
var c__5673__auto___8115 = cljs.core.chunk_first(seq__6412_8114__$1);
var G__8116 = cljs.core.chunk_rest(seq__6412_8114__$1);
var G__8117 = c__5673__auto___8115;
var G__8118 = cljs.core.count(c__5673__auto___8115);
var G__8119 = (0);
seq__6412_8104 = G__8116;
chunk__6413_8105 = G__8117;
count__6414_8106 = G__8118;
i__6415_8107 = G__8119;
continue;
} else {
var intern_node_8120 = cljs.core.first(seq__6412_8114__$1);
if(cljs.core.map_QMARK_(intern_node_8120)){
nex.interpreter.process_intern(ctx,intern_node_8120);
} else {
}


var G__8121 = cljs.core.next(seq__6412_8114__$1);
var G__8122 = null;
var G__8123 = (0);
var G__8124 = (0);
seq__6412_8104 = G__8121;
chunk__6413_8105 = G__8122;
count__6414_8106 = G__8123;
i__6415_8107 = G__8124;
continue;
}
} else {
}
}
break;
}

var seq__6416_8125 = cljs.core.seq(classes);
var chunk__6417_8126 = null;
var count__6418_8127 = (0);
var i__6419_8128 = (0);
while(true){
if((i__6419_8128 < count__6418_8127)){
var class_node_8129 = chunk__6417_8126.cljs$core$IIndexed$_nth$arity$2(null,i__6419_8128);
if(cljs.core.map_QMARK_(class_node_8129)){
nex.interpreter.register_class(ctx,class_node_8129);
} else {
}


var G__8134 = seq__6416_8125;
var G__8135 = chunk__6417_8126;
var G__8136 = count__6418_8127;
var G__8137 = (i__6419_8128 + (1));
seq__6416_8125 = G__8134;
chunk__6417_8126 = G__8135;
count__6418_8127 = G__8136;
i__6419_8128 = G__8137;
continue;
} else {
var temp__5823__auto___8139 = cljs.core.seq(seq__6416_8125);
if(temp__5823__auto___8139){
var seq__6416_8140__$1 = temp__5823__auto___8139;
if(cljs.core.chunked_seq_QMARK_(seq__6416_8140__$1)){
var c__5673__auto___8141 = cljs.core.chunk_first(seq__6416_8140__$1);
var G__8146 = cljs.core.chunk_rest(seq__6416_8140__$1);
var G__8147 = c__5673__auto___8141;
var G__8148 = cljs.core.count(c__5673__auto___8141);
var G__8149 = (0);
seq__6416_8125 = G__8146;
chunk__6417_8126 = G__8147;
count__6418_8127 = G__8148;
i__6419_8128 = G__8149;
continue;
} else {
var class_node_8151 = cljs.core.first(seq__6416_8140__$1);
if(cljs.core.map_QMARK_(class_node_8151)){
nex.interpreter.register_class(ctx,class_node_8151);
} else {
}


var G__8153 = cljs.core.next(seq__6416_8140__$1);
var G__8154 = null;
var G__8155 = (0);
var G__8156 = (0);
seq__6416_8125 = G__8153;
chunk__6417_8126 = G__8154;
count__6418_8127 = G__8155;
i__6419_8128 = G__8156;
continue;
}
} else {
}
}
break;
}

var seq__6420_8158 = cljs.core.seq(functions);
var chunk__6421_8159 = null;
var count__6422_8160 = (0);
var i__6423_8161 = (0);
while(true){
if((i__6423_8161 < count__6422_8160)){
var fn_node_8166 = chunk__6421_8159.cljs$core$IIndexed$_nth$arity$2(null,i__6423_8161);
if(cljs.core.map_QMARK_(fn_node_8166)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8166);
} else {
}


var G__8168 = seq__6420_8158;
var G__8169 = chunk__6421_8159;
var G__8170 = count__6422_8160;
var G__8171 = (i__6423_8161 + (1));
seq__6420_8158 = G__8168;
chunk__6421_8159 = G__8169;
count__6422_8160 = G__8170;
i__6423_8161 = G__8171;
continue;
} else {
var temp__5823__auto___8176 = cljs.core.seq(seq__6420_8158);
if(temp__5823__auto___8176){
var seq__6420_8177__$1 = temp__5823__auto___8176;
if(cljs.core.chunked_seq_QMARK_(seq__6420_8177__$1)){
var c__5673__auto___8178 = cljs.core.chunk_first(seq__6420_8177__$1);
var G__8179 = cljs.core.chunk_rest(seq__6420_8177__$1);
var G__8180 = c__5673__auto___8178;
var G__8181 = cljs.core.count(c__5673__auto___8178);
var G__8182 = (0);
seq__6420_8158 = G__8179;
chunk__6421_8159 = G__8180;
count__6422_8160 = G__8181;
i__6423_8161 = G__8182;
continue;
} else {
var fn_node_8183 = cljs.core.first(seq__6420_8177__$1);
if(cljs.core.map_QMARK_(fn_node_8183)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8183);
} else {
}


var G__8184 = cljs.core.next(seq__6420_8177__$1);
var G__8185 = null;
var G__8186 = (0);
var G__8187 = (0);
seq__6420_8158 = G__8184;
chunk__6421_8159 = G__8185;
count__6422_8160 = G__8186;
i__6423_8161 = G__8187;
continue;
}
} else {
}
}
break;
}

var seq__6424_8189 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6425_8190 = null;
var count__6426_8191 = (0);
var i__6427_8192 = (0);
while(true){
if((i__6427_8192 < count__6426_8191)){
var stmt_node_8193 = chunk__6425_8190.cljs$core$IIndexed$_nth$arity$2(null,i__6427_8192);
if(cljs.core.map_QMARK_(stmt_node_8193)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8193);
} else {
}


var G__8194 = seq__6424_8189;
var G__8195 = chunk__6425_8190;
var G__8196 = count__6426_8191;
var G__8197 = (i__6427_8192 + (1));
seq__6424_8189 = G__8194;
chunk__6425_8190 = G__8195;
count__6426_8191 = G__8196;
i__6427_8192 = G__8197;
continue;
} else {
var temp__5823__auto___8198 = cljs.core.seq(seq__6424_8189);
if(temp__5823__auto___8198){
var seq__6424_8199__$1 = temp__5823__auto___8198;
if(cljs.core.chunked_seq_QMARK_(seq__6424_8199__$1)){
var c__5673__auto___8200 = cljs.core.chunk_first(seq__6424_8199__$1);
var G__8201 = cljs.core.chunk_rest(seq__6424_8199__$1);
var G__8202 = c__5673__auto___8200;
var G__8203 = cljs.core.count(c__5673__auto___8200);
var G__8204 = (0);
seq__6424_8189 = G__8201;
chunk__6425_8190 = G__8202;
count__6426_8191 = G__8203;
i__6427_8192 = G__8204;
continue;
} else {
var stmt_node_8205 = cljs.core.first(seq__6424_8199__$1);
if(cljs.core.map_QMARK_(stmt_node_8205)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8205);
} else {
}


var G__8206 = cljs.core.next(seq__6424_8199__$1);
var G__8207 = null;
var G__8208 = (0);
var G__8209 = (0);
seq__6424_8189 = G__8206;
chunk__6425_8190 = G__8207;
count__6426_8191 = G__8208;
i__6427_8192 = G__8209;
continue;
}
} else {
}
}
break;
}

return ctx;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"class","class",-2030961996),(function (ctx,class_def){
nex.interpreter.register_class(ctx,class_def);

return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6428){
var map__6429 = p__6428;
var map__6429__$1 = cljs.core.__destructure_map(map__6429);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6430){
var map__6431 = p__6430;
var map__6431__$1 = cljs.core.__destructure_map(map__6431);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6431__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6431__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

return nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
}));
/**
 * Dispatch a call to a specific parent class's method/constructor on the current object.
 */
nex.interpreter.dispatch_parent_call = (function nex$interpreter$dispatch_parent_call(ctx,current_obj,parent_class_name,method,arg_values){
var parent_class_def = nex.interpreter.lookup_class(ctx,parent_class_name);
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,parent_class_def,method);
var ctor_def = (cljs.core.truth_(method_lookup)?null:(nex.interpreter.lookup_constructor.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.lookup_constructor.cljs$core$IFn$_invoke$arity$2(parent_class_def,method) : nex.interpreter.lookup_constructor.call(null,parent_class_def,method)));
var temp__5821__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method_lookup);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ctor_def;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var callable = temp__5821__auto__;
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var parent_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,parent_class_def) : nex.interpreter.get_all_fields.call(null,ctx,parent_class_def));
var parent_field_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),parent_fields));
var method_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var _ = (function (){var seq__6432 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6433 = null;
var count__6434 = (0);
var i__6435 = (0);
while(true){
if((i__6435 < count__6434)){
var vec__6442 = chunk__6433.cljs$core$IIndexed$_nth$arity$2(null,i__6435);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6442,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6442,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8210 = seq__6432;
var G__8211 = chunk__6433;
var G__8212 = count__6434;
var G__8213 = (i__6435 + (1));
seq__6432 = G__8210;
chunk__6433 = G__8211;
count__6434 = G__8212;
i__6435 = G__8213;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6432);
if(temp__5823__auto__){
var seq__6432__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6432__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6432__$1);
var G__8220 = cljs.core.chunk_rest(seq__6432__$1);
var G__8221 = c__5673__auto__;
var G__8222 = cljs.core.count(c__5673__auto__);
var G__8223 = (0);
seq__6432 = G__8220;
chunk__6433 = G__8221;
count__6434 = G__8222;
i__6435 = G__8223;
continue;
} else {
var vec__6445 = cljs.core.first(seq__6432__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6445,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6445,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8231 = cljs.core.next(seq__6432__$1);
var G__8232 = null;
var G__8233 = (0);
var G__8234 = (0);
seq__6432 = G__8231;
chunk__6433 = G__8232;
count__6434 = G__8233;
i__6435 = G__8234;
continue;
}
} else {
return null;
}
}
break;
}
})();
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(callable);
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6448 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6449 = null;
var count__6450 = (0);
var i__6451 = (0);
while(true){
if((i__6451 < count__6450)){
var vec__6458 = chunk__6449.cljs$core$IIndexed$_nth$arity$2(null,i__6451);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6458,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6458,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8244 = seq__6448;
var G__8245 = chunk__6449;
var G__8246 = count__6450;
var G__8247 = (i__6451 + (1));
seq__6448 = G__8244;
chunk__6449 = G__8245;
count__6450 = G__8246;
i__6451 = G__8247;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6448);
if(temp__5823__auto__){
var seq__6448__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6448__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6448__$1);
var G__8248 = cljs.core.chunk_rest(seq__6448__$1);
var G__8249 = c__5673__auto__;
var G__8250 = cljs.core.count(c__5673__auto__);
var G__8251 = (0);
seq__6448 = G__8248;
chunk__6449 = G__8249;
count__6450 = G__8250;
i__6451 = G__8251;
continue;
} else {
var vec__6461 = cljs.core.first(seq__6448__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6461,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6461,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8252 = cljs.core.next(seq__6448__$1);
var G__8253 = null;
var G__8254 = (0);
var G__8255 = (0);
seq__6448 = G__8252;
chunk__6449 = G__8253;
count__6450 = G__8254;
i__6451 = G__8255;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
var return_type = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(callable);
var default_result = (cljs.core.truth_(return_type)?nex.interpreter.get_default_field_value(return_type):null);
var ___$2 = nex.interpreter.env_define(method_env,"result",default_result);
var ___$3 = nex.interpreter.env_define(method_env,"this",current_obj);
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),current_obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"env","env",-1815813235),method_env,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),all_fields)),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
var ___$4 = (function (){var temp__5821__auto____$1 = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(callable);
if(cljs.core.truth_(temp__5821__auto____$1)){
var rescue = temp__5821__auto____$1;
var G__6464 = new_ctx;
var G__6465 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6466 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6464,G__6465,G__6466) : nex.interpreter.eval_body_with_rescue.call(null,G__6464,G__6465,G__6466));
} else {
var seq__6467 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6468 = null;
var count__6469 = (0);
var i__6470 = (0);
while(true){
if((i__6470 < count__6469)){
var stmt = chunk__6468.cljs$core$IIndexed$_nth$arity$2(null,i__6470);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8256 = seq__6467;
var G__8257 = chunk__6468;
var G__8258 = count__6469;
var G__8259 = (i__6470 + (1));
seq__6467 = G__8256;
chunk__6468 = G__8257;
count__6469 = G__8258;
i__6470 = G__8259;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6467);
if(temp__5823__auto__){
var seq__6467__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6467__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6467__$1);
var G__8260 = cljs.core.chunk_rest(seq__6467__$1);
var G__8261 = c__5673__auto__;
var G__8262 = cljs.core.count(c__5673__auto__);
var G__8263 = (0);
seq__6467 = G__8260;
chunk__6468 = G__8261;
count__6469 = G__8262;
i__6470 = G__8263;
continue;
} else {
var stmt = cljs.core.first(seq__6467__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8264 = cljs.core.next(seq__6467__$1);
var G__8265 = null;
var G__8266 = (0);
var G__8267 = (0);
seq__6467 = G__8264;
chunk__6468 = G__8265;
count__6469 = G__8266;
i__6470 = G__8267;
continue;
}
} else {
return null;
}
}
break;
}
}
})();
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(method_env,field_name);
}catch (e6471){var ___$5 = e6471;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(current_obj));
var result = (function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6472){var ___$5 = e6472;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___8268 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8268)){
var tgt_8269 = temp__5823__auto___8268;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8269,updated_obj);
}catch (e6473){var __8270__$5 = e6473;
}} else {
}

var seq__6474_8271 = cljs.core.seq(updated_obj.fields);
var chunk__6475_8272 = null;
var count__6476_8273 = (0);
var i__6477_8274 = (0);
while(true){
if((i__6477_8274 < count__6476_8273)){
var vec__6486_8275 = chunk__6475_8272.cljs$core$IIndexed$_nth$arity$2(null,i__6477_8274);
var field_name_8276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486_8275,(0),null);
var field_val_8277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6486_8275,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8276))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8276),field_val_8277);
}catch (e6489){var __8278__$5 = e6489;
}} else {
}


var G__8283 = seq__6474_8271;
var G__8284 = chunk__6475_8272;
var G__8285 = count__6476_8273;
var G__8286 = (i__6477_8274 + (1));
seq__6474_8271 = G__8283;
chunk__6475_8272 = G__8284;
count__6476_8273 = G__8285;
i__6477_8274 = G__8286;
continue;
} else {
var temp__5823__auto___8287 = cljs.core.seq(seq__6474_8271);
if(temp__5823__auto___8287){
var seq__6474_8288__$1 = temp__5823__auto___8287;
if(cljs.core.chunked_seq_QMARK_(seq__6474_8288__$1)){
var c__5673__auto___8289 = cljs.core.chunk_first(seq__6474_8288__$1);
var G__8290 = cljs.core.chunk_rest(seq__6474_8288__$1);
var G__8291 = c__5673__auto___8289;
var G__8292 = cljs.core.count(c__5673__auto___8289);
var G__8293 = (0);
seq__6474_8271 = G__8290;
chunk__6475_8272 = G__8291;
count__6476_8273 = G__8292;
i__6477_8274 = G__8293;
continue;
} else {
var vec__6490_8294 = cljs.core.first(seq__6474_8288__$1);
var field_name_8295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490_8294,(0),null);
var field_val_8296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6490_8294,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8295))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8295),field_val_8296);
}catch (e6493){var __8297__$5 = e6493;
}} else {
}


var G__8298 = cljs.core.next(seq__6474_8288__$1);
var G__8299 = null;
var G__8300 = (0);
var G__8301 = (0);
seq__6474_8271 = G__8298;
chunk__6475_8272 = G__8299;
count__6476_8273 = G__8300;
i__6477_8274 = G__8301;
continue;
}
} else {
}
}
break;
}

return result;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found in parent "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_class_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent_class_name,new cljs.core.Keyword(null,"method","method",55703592),method], null));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6496){
var map__6497 = p__6496;
var map__6497__$1 = cljs.core.__destructure_map(map__6497);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6497__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6497__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6497__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6497__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args));
} else {
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6494_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6494_SHARP_);
}),args);
if(cljs.core.truth_(target)){
var target_name = ((typeof target === 'string')?target:null);
var class_target = (cljs.core.truth_(target_name)?nex.interpreter.lookup_class_if_exists(ctx,target_name):null);
var parent_class = (cljs.core.truth_((function (){var and__5140__auto__ = target_name;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5140__auto__;
}
})())?(function (){var cls = nex.interpreter.lookup_class_if_exists(ctx,target_name);
if(cljs.core.truth_((function (){var and__5140__auto__ = cls;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.is_parent_QMARK_(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx)),target_name);
} else {
return and__5140__auto__;
}
})())){
return cls;
} else {
return null;
}
})():null);
var obj = (cljs.core.truth_(parent_class)?null:(cljs.core.truth_(class_target)?null:(cljs.core.truth_(target_name)?nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name):nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target))));
if(cljs.core.truth_((function (){var and__5140__auto__ = class_target;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = has_parens === false;
if(and__5140__auto____$1){
return nex.interpreter.lookup_class_constant(ctx,class_target,method);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,class_target,method);
} else {
if(cljs.core.truth_(parent_class)){
return nex.interpreter.dispatch_parent_call(ctx,new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx),target_name,method,arg_values);
} else {
if(nex.interpreter.nex_object_QMARK_(obj)){
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,method);
if(cljs.core.truth_(method_lookup)){
var method_def = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method_lookup);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_def);
if(((has_parens === false) && (cljs.core.seq(params)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" requires arguments"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params)], null));
} else {
}

var source_class = new cljs.core.Keyword(null,"source-class","source-class",1466604697).cljs$core$IFn$_invoke$arity$1(method_lookup);
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var effective_require = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(method_lookup);
var effective_ensure = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(method_lookup);
var has_postconditions_QMARK_ = cljs.core.seq(effective_ensure);
var old_values = ((has_postconditions_QMARK_)?new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj):null);
var method_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
}
})());
var param_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params));
var _ = (function (){var seq__6498 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6499 = null;
var count__6500 = (0);
var i__6501 = (0);
while(true){
if((i__6501 < count__6500)){
var vec__6508 = chunk__6499.cljs$core$IIndexed$_nth$arity$2(null,i__6501);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6508,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8310 = seq__6498;
var G__8311 = chunk__6499;
var G__8312 = count__6500;
var G__8313 = (i__6501 + (1));
seq__6498 = G__8310;
chunk__6499 = G__8311;
count__6500 = G__8312;
i__6501 = G__8313;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6498);
if(temp__5823__auto__){
var seq__6498__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6498__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6498__$1);
var G__8314 = cljs.core.chunk_rest(seq__6498__$1);
var G__8315 = c__5673__auto__;
var G__8316 = cljs.core.count(c__5673__auto__);
var G__8317 = (0);
seq__6498 = G__8314;
chunk__6499 = G__8315;
count__6500 = G__8316;
i__6501 = G__8317;
continue;
} else {
var vec__6511 = cljs.core.first(seq__6498__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6511,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6511,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8318 = cljs.core.next(seq__6498__$1);
var G__8319 = null;
var G__8320 = (0);
var G__8321 = (0);
seq__6498 = G__8318;
chunk__6499 = G__8319;
count__6500 = G__8320;
i__6501 = G__8321;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$1 = nex.interpreter.bind_class_constants_BANG_(ctx,method_env,class_def);
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6514 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6515 = null;
var count__6516 = (0);
var i__6517 = (0);
while(true){
if((i__6517 < count__6516)){
var vec__6524 = chunk__6515.cljs$core$IIndexed$_nth$arity$2(null,i__6517);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8322 = seq__6514;
var G__8323 = chunk__6515;
var G__8324 = count__6516;
var G__8325 = (i__6517 + (1));
seq__6514 = G__8322;
chunk__6515 = G__8323;
count__6516 = G__8324;
i__6517 = G__8325;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6514);
if(temp__5823__auto__){
var seq__6514__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6514__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6514__$1);
var G__8326 = cljs.core.chunk_rest(seq__6514__$1);
var G__8327 = c__5673__auto__;
var G__8328 = cljs.core.count(c__5673__auto__);
var G__8329 = (0);
seq__6514 = G__8326;
chunk__6515 = G__8327;
count__6516 = G__8328;
i__6517 = G__8329;
continue;
} else {
var vec__6527 = cljs.core.first(seq__6514__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6527,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6527,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8330 = cljs.core.next(seq__6514__$1);
var G__8331 = null;
var G__8332 = (0);
var G__8333 = (0);
seq__6514 = G__8330;
chunk__6515 = G__8331;
count__6516 = G__8332;
i__6517 = G__8333;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
var modified_fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var return_type = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_def);
var default_result = (cljs.core.truth_(return_type)?nex.interpreter.get_default_field_value(return_type):null);
var ___$3 = nex.interpreter.env_define(method_env,"result",default_result);
var ___$4 = nex.interpreter.env_define(method_env,"this",obj);
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"env","env",-1815813235),method_env,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj)))),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
var ___$5 = (function (){var temp__5823__auto__ = effective_require;
if(cljs.core.truth_(temp__5823__auto__)){
var require_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions(new_ctx,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})();
var ___$6 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
var G__6530 = new_ctx;
var G__6531 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6532 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6530,G__6531,G__6532) : nex.interpreter.eval_body_with_rescue.call(null,G__6530,G__6531,G__6532));
} else {
var seq__6533 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6534 = null;
var count__6535 = (0);
var i__6536 = (0);
while(true){
if((i__6536 < count__6535)){
var stmt = chunk__6534.cljs$core$IIndexed$_nth$arity$2(null,i__6536);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8334 = seq__6533;
var G__8335 = chunk__6534;
var G__8336 = count__6535;
var G__8337 = (i__6536 + (1));
seq__6533 = G__8334;
chunk__6534 = G__8335;
count__6535 = G__8336;
i__6536 = G__8337;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6533);
if(temp__5823__auto__){
var seq__6533__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6533__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6533__$1);
var G__8338 = cljs.core.chunk_rest(seq__6533__$1);
var G__8339 = c__5673__auto__;
var G__8340 = cljs.core.count(c__5673__auto__);
var G__8341 = (0);
seq__6533 = G__8338;
chunk__6534 = G__8339;
count__6535 = G__8340;
i__6536 = G__8341;
continue;
} else {
var stmt = cljs.core.first(seq__6533__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8342 = cljs.core.next(seq__6533__$1);
var G__8343 = null;
var G__8344 = (0);
var G__8345 = (0);
seq__6533 = G__8342;
chunk__6534 = G__8343;
count__6535 = G__8344;
i__6536 = G__8345;
continue;
}
} else {
return null;
}
}
break;
}
}
})();
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
if(((cljs.core.contains_QMARK_(param_names,field_name)) && ((!(cljs.core.contains_QMARK_(cljs.core.deref(modified_fields),field_name)))))){
return m;
} else {
var val = (function (){try{return nex.interpreter.env_lookup(method_env,field_name);
}catch (e6537){var ___$7 = e6537;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj));
var result_flag = (function (){try{return nex.interpreter.env_lookup(method_env,"__result_assigned__");
}catch (e6538){var ___$7 = e6538;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6539){var ___$7 = e6539;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___8348 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___8348)){
var ensure_assertions_8349 = temp__5823__auto___8348;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_8349,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6540){var e = e6540;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6495_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6495_SHARP_),method);
}),all_fields));
if(cljs.core.truth_(field)){
var field_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method));
if(cljs.core.truth_((function (){var and__5140__auto__ = has_parens;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.nex_object_QMARK_(field_val);
} else {
return and__5140__auto__;
}
})())){
var call_method = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_values)));
var literal_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),v], null);
}),arg_values);
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),field_val], null),new cljs.core.Keyword(null,"method","method",55703592),call_method,new cljs.core.Keyword(null,"args","args",1315556576),literal_args], null));
} else {
if(cljs.core.empty_QMARK_(arg_values)){
return field_val;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null));
}
}
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtin_type_methods,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Any","Any",-363039258),method], null)))){
return nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target;
}
})(),obj,method,arg_values);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null));
}
}
}
} else {
if(cljs.core.truth_(nex.interpreter.get_type_name(obj))){
return nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target;
}
})(),obj,method,arg_values);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found on type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null));

}
}
}
}
} else {
var fn_obj = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),method);
}catch (e6541){var _ = e6541;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_obj,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
if(nex.interpreter.nex_object_QMARK_(fn_obj)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(has_parens,false)){
var call_method = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args)));
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),method,new cljs.core.Keyword(null,"method","method",55703592),call_method,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
return fn_obj;
}
} else {
if(has_parens === false){
return fn_obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method], null));
}
}
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5821__auto__)){
var current_obj = temp__5821__auto__;
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,method);
if(cljs.core.truth_(method_lookup)){
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var current_env = new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(current_env,field_name);
}catch (e6542){var _ = e6542;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(current_obj));
var _ = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto__)){
var target_name = temp__5823__auto__;
return nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name,updated_obj);
} else {
return null;
}
})();
var result = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
var called_obj = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto__)){
var target_name = temp__5823__auto__;
return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name);
} else {
return null;
}
})();
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6543 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6544 = null;
var count__6545 = (0);
var i__6546 = (0);
while(true){
if((i__6546 < count__6545)){
var vec__6553 = chunk__6544.cljs$core$IIndexed$_nth$arity$2(null,i__6546);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6553,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6553,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8358 = seq__6543;
var G__8359 = chunk__6544;
var G__8360 = count__6545;
var G__8361 = (i__6546 + (1));
seq__6543 = G__8358;
chunk__6544 = G__8359;
count__6545 = G__8360;
i__6546 = G__8361;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6543);
if(temp__5823__auto__){
var seq__6543__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6543__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6543__$1);
var G__8362 = cljs.core.chunk_rest(seq__6543__$1);
var G__8363 = c__5673__auto__;
var G__8364 = cljs.core.count(c__5673__auto__);
var G__8365 = (0);
seq__6543 = G__8362;
chunk__6544 = G__8363;
count__6545 = G__8364;
i__6546 = G__8365;
continue;
} else {
var vec__6556 = cljs.core.first(seq__6543__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8366 = cljs.core.next(seq__6543__$1);
var G__8367 = null;
var G__8368 = (0);
var G__8369 = (0);
seq__6543 = G__8366;
chunk__6544 = G__8367;
count__6545 = G__8368;
i__6546 = G__8369;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
return result;
} else {
var temp__5821__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method);
if(cljs.core.truth_(temp__5821__auto____$1)){
var builtin = temp__5821__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined method: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),method,new cljs.core.Keyword(null,"object","object",1474613949),current_obj], null));
}
}
} else {
var temp__5821__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method);
if(cljs.core.truth_(temp__5821__auto____$1)){
var builtin = temp__5821__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method], null));
}
}
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"this","this",-611633625),(function (ctx,_){
return new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6559){
var map__6560 = p__6559;
var map__6560__$1 = cljs.core.__destructure_map(map__6560);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8370 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8370)){
var current_class_name_8371 = temp__5823__auto___8370;
var temp__5823__auto___8372__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8371);
if(cljs.core.truth_(temp__5823__auto___8372__$1)){
var class_def_8373 = temp__5823__auto___8372__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8373,field))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___8374 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8374)){
var mf_8375 = temp__5823__auto___8374;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8375,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6561){
var map__6562 = p__6561;
var map__6562__$1 = cljs.core.__destructure_map(map__6562);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6562__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6562__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8376 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8376)){
var current_class_name_8377 = temp__5823__auto___8376;
var temp__5823__auto___8378__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8377);
if(cljs.core.truth_(temp__5823__auto___8378__$1)){
var class_def_8379 = temp__5823__auto___8378__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8379,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6563.cljs$core$IFn$_invoke$arity$1 ? fexpr__6563.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6563.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6564){
var map__6565 = p__6564;
var map__6565__$1 = cljs.core.__destructure_map(map__6565);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6565__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6565__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6566.cljs$core$IFn$_invoke$arity$1 ? fexpr__6566.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6566.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6567_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6567_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6568){
var map__6569 = p__6568;
var map__6569__$1 = cljs.core.__destructure_map(map__6569);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6569__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"raise","raise",184141061),new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"retry","retry",-614012896),(function (ctx,_node){
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"retry","retry",-614012896)], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("retry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813)], null));
}));
/**
 * Execute body statements with rescue/retry support.
 * If rescue contains retry, re-executes body.
 * If rescue completes without retry, rethrows the original exception.
 */
nex.interpreter.eval_body_with_rescue = (function nex$interpreter$eval_body_with_rescue(ctx,body,rescue){
var should_retry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
while(true){
if(cljs.core.truth_(cljs.core.deref(should_retry))){
cljs.core.reset_BANG_(should_retry,false);

try{var seq__6576_8380 = cljs.core.seq(body);
var chunk__6577_8381 = null;
var count__6578_8382 = (0);
var i__6579_8383 = (0);
while(true){
if((i__6579_8383 < count__6578_8382)){
var stmt_8384 = chunk__6577_8381.cljs$core$IIndexed$_nth$arity$2(null,i__6579_8383);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8384);


var G__8385 = seq__6576_8380;
var G__8386 = chunk__6577_8381;
var G__8387 = count__6578_8382;
var G__8388 = (i__6579_8383 + (1));
seq__6576_8380 = G__8385;
chunk__6577_8381 = G__8386;
count__6578_8382 = G__8387;
i__6579_8383 = G__8388;
continue;
} else {
var temp__5823__auto___8389 = cljs.core.seq(seq__6576_8380);
if(temp__5823__auto___8389){
var seq__6576_8390__$1 = temp__5823__auto___8389;
if(cljs.core.chunked_seq_QMARK_(seq__6576_8390__$1)){
var c__5673__auto___8391 = cljs.core.chunk_first(seq__6576_8390__$1);
var G__8392 = cljs.core.chunk_rest(seq__6576_8390__$1);
var G__8393 = c__5673__auto___8391;
var G__8394 = cljs.core.count(c__5673__auto___8391);
var G__8395 = (0);
seq__6576_8380 = G__8392;
chunk__6577_8381 = G__8393;
count__6578_8382 = G__8394;
i__6579_8383 = G__8395;
continue;
} else {
var stmt_8396 = cljs.core.first(seq__6576_8390__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8396);


var G__8397 = cljs.core.next(seq__6576_8390__$1);
var G__8398 = null;
var G__8399 = (0);
var G__8400 = (0);
seq__6576_8380 = G__8397;
chunk__6577_8381 = G__8398;
count__6578_8382 = G__8399;
i__6579_8383 = G__8400;
continue;
}
} else {
}
}
break;
}
}catch (e6570){var e_8401 = e6570;
if((((e_8401 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8401)))))){
throw e_8401;
} else {
var exc_value_8402 = (((((e_8401 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8401))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8401)):e_8401.message);
var rescue_env_8403 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8404 = nex.interpreter.env_define(rescue_env_8403,"exception",exc_value_8402);
var rescue_ctx_8405 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_8403);
try{var seq__6572_8406 = cljs.core.seq(rescue);
var chunk__6573_8407 = null;
var count__6574_8408 = (0);
var i__6575_8409 = (0);
while(true){
if((i__6575_8409 < count__6574_8408)){
var stmt_8410 = chunk__6573_8407.cljs$core$IIndexed$_nth$arity$2(null,i__6575_8409);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8405,stmt_8410);


var G__8411 = seq__6572_8406;
var G__8412 = chunk__6573_8407;
var G__8413 = count__6574_8408;
var G__8414 = (i__6575_8409 + (1));
seq__6572_8406 = G__8411;
chunk__6573_8407 = G__8412;
count__6574_8408 = G__8413;
i__6575_8409 = G__8414;
continue;
} else {
var temp__5823__auto___8415 = cljs.core.seq(seq__6572_8406);
if(temp__5823__auto___8415){
var seq__6572_8416__$1 = temp__5823__auto___8415;
if(cljs.core.chunked_seq_QMARK_(seq__6572_8416__$1)){
var c__5673__auto___8417 = cljs.core.chunk_first(seq__6572_8416__$1);
var G__8418 = cljs.core.chunk_rest(seq__6572_8416__$1);
var G__8419 = c__5673__auto___8417;
var G__8420 = cljs.core.count(c__5673__auto___8417);
var G__8421 = (0);
seq__6572_8406 = G__8418;
chunk__6573_8407 = G__8419;
count__6574_8408 = G__8420;
i__6575_8409 = G__8421;
continue;
} else {
var stmt_8422 = cljs.core.first(seq__6572_8416__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8405,stmt_8422);


var G__8423 = cljs.core.next(seq__6572_8416__$1);
var G__8424 = null;
var G__8425 = (0);
var G__8426 = (0);
seq__6572_8406 = G__8423;
chunk__6573_8407 = G__8424;
count__6574_8408 = G__8425;
i__6575_8409 = G__8426;
continue;
}
} else {
}
}
break;
}

throw e_8401;
}catch (e6571){var re_8427 = e6571;
if((((re_8427 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_8427)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_8427;
}
}}
}
continue;
} else {
return null;
}
break;
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__6581){
var map__6582 = p__6581;
var map__6582__$1 = cljs.core.__destructure_map(map__6582);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6580_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__6580_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__6583){
var map__6584 = p__6583;
var map__6584__$1 = cljs.core.__destructure_map(map__6584);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__6585){
var map__6586 = p__6585;
var map__6586__$1 = cljs.core.__destructure_map(map__6586);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6586__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6586__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6586__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
var v = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var target_name = ((cljs.core.map_QMARK_(target_type))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(target_type):target_type);
var runtime_name = nex.interpreter.runtime_type_name(v);
var ok_QMARK_ = (function (){var and__5140__auto__ = (!((v == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = typeof target_name === 'string';
if(and__5140__auto____$1){
return nex.interpreter.convert_compatible_runtime_QMARK_(ctx,runtime_name,target_name);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),var_name,(cljs.core.truth_(ok_QMARK_)?v:null));

return ok_QMARK_;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__6590){
var map__6591 = p__6590;
var map__6591__$1 = cljs.core.__destructure_map(map__6591);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6591__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6591__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6591__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6591__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6587_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6587_SHARP_);
}),then));
} else {
var temp__5821__auto__ = cljs.core.some((function (clause){
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause)))){
return clause;
} else {
return null;
}
}),elseif);
if(cljs.core.truth_(temp__5821__auto__)){
var matched = temp__5821__auto__;
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6588_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6588_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6589_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6589_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__6593){
var map__6594 = p__6593;
var map__6594__$1 = cljs.core.__destructure_map(map__6594);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6594__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6594__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6594__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__6596 = cljs.core.first(cs);
var map__6596__$1 = cljs.core.__destructure_map(map__6596);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6596__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6596__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__6596,map__6596__$1,values,body,val,map__6594,map__6594__$1,expr,clauses,else$){
return (function (p1__6592_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6592_SHARP_));
});})(cs,map__6596,map__6596__$1,values,body,val,map__6594,map__6594__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__8428 = cljs.core.rest(cs);
cs = G__8428;
continue;
}
}
break;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(matched,new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050))){
if(cljs.core.truth_(else$)){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,else$);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching case and no else clause",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null));
}
} else {
return matched;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (ctx,p__6600){
var map__6601 = p__6600;
var map__6601__$1 = cljs.core.__destructure_map(map__6601);
var node = map__6601__$1;
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6601__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6601__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6601__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var prepared = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6597_SHARP_){
return nex.interpreter.prepare_select_clause(ctx,p1__6597_SHARP_);
}),clauses);
var timeout_ms_val = (cljs.core.truth_(timeout)?nex.interpreter.timeout_ms(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout))):null);
var deadline = (cljs.core.truth_(timeout_ms_val)?(nex.interpreter.current_time_ms() + timeout_ms_val):null);
while(true){
var temp__5821__auto__ = cljs.core.some(((function (prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout){
return (function (prepared_clause){
var temp__5823__auto__ = nex.interpreter.attempt_select_clause(prepared_clause);
if(cljs.core.truth_(temp__5823__auto__)){
var outcome = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prepared_clause,outcome], null);
} else {
return null;
}
});})(prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout))
,prepared);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__6602 = temp__5821__auto__;
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(1),null);
return nex.interpreter.execute_select_body(ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(outcome));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout){
return (function (p1__6598_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6598_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout))
,else$));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deadline;
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.current_time_ms() >= deadline);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout){
return (function (p1__6599_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6599_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6601,map__6601__$1,node,clauses,else$,timeout))
,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(timeout)));
} else {
nex.interpreter.sleep_select_step_BANG_();

continue;
}
}
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__6606){
var map__6607 = p__6606;
var map__6607__$1 = cljs.core.__destructure_map(map__6607);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6607__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6607__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6607__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6607__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6607__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__6608_8429 = cljs.core.seq(init);
var chunk__6609_8430 = null;
var count__6610_8431 = (0);
var i__6611_8432 = (0);
while(true){
if((i__6611_8432 < count__6610_8431)){
var stmt_8433 = chunk__6609_8430.cljs$core$IIndexed$_nth$arity$2(null,i__6611_8432);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8433);


var G__8434 = seq__6608_8429;
var G__8435 = chunk__6609_8430;
var G__8436 = count__6610_8431;
var G__8437 = (i__6611_8432 + (1));
seq__6608_8429 = G__8434;
chunk__6609_8430 = G__8435;
count__6610_8431 = G__8436;
i__6611_8432 = G__8437;
continue;
} else {
var temp__5823__auto___8438 = cljs.core.seq(seq__6608_8429);
if(temp__5823__auto___8438){
var seq__6608_8439__$1 = temp__5823__auto___8438;
if(cljs.core.chunked_seq_QMARK_(seq__6608_8439__$1)){
var c__5673__auto___8440 = cljs.core.chunk_first(seq__6608_8439__$1);
var G__8441 = cljs.core.chunk_rest(seq__6608_8439__$1);
var G__8442 = c__5673__auto___8440;
var G__8443 = cljs.core.count(c__5673__auto___8440);
var G__8444 = (0);
seq__6608_8429 = G__8441;
chunk__6609_8430 = G__8442;
count__6610_8431 = G__8443;
i__6611_8432 = G__8444;
continue;
} else {
var stmt_8445 = cljs.core.first(seq__6608_8439__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8445);


var G__8446 = cljs.core.next(seq__6608_8439__$1);
var G__8447 = null;
var G__8448 = (0);
var G__8449 = (0);
seq__6608_8429 = G__8446;
chunk__6609_8430 = G__8447;
count__6610_8431 = G__8448;
i__6611_8432 = G__8449;
continue;
}
} else {
}
}
break;
}

var last_result = null;
var prev_variant = null;
var iteration = (0);
while(true){
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var until_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,until);
if(cljs.core.truth_(until_val)){
return last_result;
} else {
var curr_variant = (cljs.core.truth_(variant)?nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,variant):null);
var _ = (cljs.core.truth_((function (){var and__5140__auto__ = variant;
if(cljs.core.truth_(and__5140__auto__)){
return prev_variant;
} else {
return and__5140__auto__;
}
})())?(((curr_variant < prev_variant))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop variant must decrease",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"iteration","iteration",-1088952049),iteration,new cljs.core.Keyword(null,"previous-variant","previous-variant",121348251),prev_variant,new cljs.core.Keyword(null,"current-variant","current-variant",260508292),curr_variant], null))})()):null);
var body_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var body_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),body_env);
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6607,map__6607__$1,init,invariant,variant,until,body){
return (function (p1__6605_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6605_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6607,map__6607__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__8450 = result;
var G__8451 = curr_variant;
var G__8452 = (iteration + (1));
last_result = G__8450;
prev_variant = G__8451;
iteration = G__8452;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__6612){
var map__6613 = p__6612;
var map__6613__$1 = cljs.core.__destructure_map(map__6613);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6613__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6613__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6613__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,"+")) && (((typeof left_val === 'string') || (typeof right_val === 'string'))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.interpreter.concat_string_value(ctx,left_val))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.interpreter.concat_string_value(ctx,right_val)));
} else {
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__6614){
var map__6615 = p__6614;
var map__6615__$1 = cljs.core.__destructure_map(map__6615);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6615__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6615__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__6616){
var map__6617 = p__6616;
var map__6617__$1 = cljs.core.__destructure_map(map__6617);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6617__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__6618){
var map__6619 = p__6618;
var map__6619__$1 = cljs.core.__destructure_map(map__6619);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__6620){
var map__6621 = p__6620;
var map__6621__$1 = cljs.core.__destructure_map(map__6621);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6621__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__6622){
var map__6623 = p__6622;
var map__6623__$1 = cljs.core.__destructure_map(map__6623);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6623__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__6624){
var map__6625 = p__6624;
var map__6625__$1 = cljs.core.__destructure_map(map__6625);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6625__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__6627){
var map__6628 = p__6627;
var map__6628__$1 = cljs.core.__destructure_map(map__6628);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6628__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6626_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6626_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),(function (ctx,p__6630){
var map__6631 = p__6630;
var map__6631__$1 = cljs.core.__destructure_map(map__6631);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6631__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_set_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6629_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6629_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__6632){
var map__6633 = p__6632;
var map__6633__$1 = cljs.core.__destructure_map(map__6633);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6633__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6634){
var map__6635 = p__6634;
var map__6635__$1 = cljs.core.__destructure_map(map__6635);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__6636){
var map__6637 = p__6636;
var map__6637__$1 = cljs.core.__destructure_map(map__6637);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__6638){
var map__6639 = p__6638;
var map__6639__$1 = cljs.core.__destructure_map(map__6639);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e6640){var _ = e6640;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return val;
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5821__auto__)){
var current_class_name = temp__5821__auto__;
var class_def = nex.interpreter.lookup_class(ctx,current_class_name);
var temp__5821__auto____$1 = nex.interpreter.lookup_class_constant(ctx,class_def,name);
if(cljs.core.truth_(temp__5821__auto____$1)){
var constant = temp__5821__auto____$1;
return nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),name);
} else {
var temp__5821__auto____$2 = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5821__auto____$2)){
var current_obj = temp__5821__auto____$2;
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,name);
if(cljs.core.truth_(method_lookup)){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),name,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),name], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),name], null));
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-name","var-name",-574747624),name], null));
}
}
}));
/**
 * Get all fields from a class and its parents
 */
nex.interpreter.get_all_fields = (function nex$interpreter$get_all_fields(ctx,class_def){
var parent_fields = (function (){var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (parent_info){
var G__6642 = ctx;
var G__6643 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__6642,G__6643) : nex.interpreter.get_all_fields.call(null,G__6642,G__6643));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6641_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6641_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6641_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)], 0)));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_fields,current_fields);
});
/**
 * Look up a constructor by name in a class
 */
nex.interpreter.lookup_constructor = (function nex$interpreter$lookup_constructor(class_def,constructor_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6644_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6644_SHARP_),constructor_name);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
return new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)], 0))));
});
/**
 * Look up a constructor by name in a class and its parent chain.
 */
nex.interpreter.lookup_constructor_with_inheritance = (function nex$interpreter$lookup_constructor_with_inheritance(ctx,class_def,constructor_name){
var or__5142__auto__ = nex.interpreter.lookup_constructor(class_def,constructor_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p__6645){
var map__6646 = p__6645;
var map__6646__$1 = cljs.core.__destructure_map(map__6646);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6646__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__6655){
var map__6656 = p__6655;
var map__6656__$1 = cljs.core.__destructure_map(map__6656);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__6657 = class_name;
switch (G__6657) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6647_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6647_SHARP_);
}),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"open")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File requires constructor: create File.open(path)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"File"], null));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.first(arg_values)], null);

break;
case "Process":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Process","Process",-799294660)], null);

break;
case "Channel":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channels are not supported in ClojureScript interpreter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Channel"], null));

break;
case "Set":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6649_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6649_SHARP_);
}),args);
if((constructor$ == null)){
return nex.interpreter.nex_set();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"from_array")){
var source = cljs.core.first(arg_values);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(source))){
return nex.interpreter.nex_set_from(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(source));
} else {
if(cljs.core.sequential_QMARK_(source)){
return nex.interpreter.nex_set_from(source);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set.from_array requires an array",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Set"], null));

}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: Set."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Set",new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));

}
}

break;
case "Window":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6650_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6650_SHARP_);
}),args);
var G__6658 = constructor$;
switch (G__6658) {
case "with_title":
var G__6659 = cljs.core.count(arg_values);
switch (G__6659) {
case (1):
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$1(cljs.core.first(arg_values));

break;
case (3):
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3(cljs.core.first(arg_values),cljs.core.second(arg_values),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_values,(2)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Window.with_title takes 1 or 3 arguments (title) or (title, width, height)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Window"], null));

}

break;
default:
var G__6660 = cljs.core.count(arg_values);
switch (G__6660) {
case (0):
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3("Nex Turtle Graphics",cljs.core.first(arg_values),cljs.core.second(arg_values));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Window takes 0 or 2 arguments (width, height)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Window"], null));

}

}

break;
case "Turtle":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6651_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6651_SHARP_);
}),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"on_window")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Turtle requires constructor: create Turtle.on_window(window)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Turtle"], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_values),(1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Turtle.on_window takes 1 argument (window)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Turtle"], null));
}

return nex.turtle_browser.create_turtle(cljs.core.first(arg_values));

break;
case "Image":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6652_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6652_SHARP_);
}),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"from_file")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Image requires constructor: create Image.from_file(path)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Image"], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_values),(1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Image.from_file takes 1 argument (path)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Image"], null));
}

return nex.turtle_browser.create_image(cljs.core.first(arg_values));

break;
default:
var effective_class_name = ((cljs.core.seq(generic_args))?(function (){var spec_name = nex.interpreter.specialized_class_name(class_name,generic_args);
if(cljs.core.truth_(nex.interpreter.lookup_specialized_class(ctx,spec_name))){
return spec_name;
} else {
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
if(cljs.core.truth_(template)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined template class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(template))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+" is not generic"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(template)),cljs.core.count(generic_args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+": expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(template)))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(generic_args))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.count(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(template)),new cljs.core.Keyword(null,"got","got",-1674745710),cljs.core.count(generic_args)], null));
} else {
}

var specialized = nex.interpreter.specialize_class(template,generic_args);
nex.interpreter.register_specialized_class(ctx,specialized);

return spec_name;
}
})():class_name);
var class_def = nex.interpreter.lookup_class_if_exists(ctx,effective_class_name);
var _ = (cljs.core.truth_((function (){var and__5140__auto__ = class_def;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"deferred?","deferred?",716798715).cljs$core$IFn$_invoke$arity$1(class_def);
} else {
return and__5140__auto__;
}
})())?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot instantiate deferred class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true], null))})():null);
var all_fields = (cljs.core.truth_(class_def)?nex.interpreter.get_all_fields(ctx,class_def):null);
var initial_field_map = (cljs.core.truth_(class_def)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)),nex.interpreter.get_default_field_value(new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(field)));
}),cljs.core.PersistentArrayMap.EMPTY,all_fields):null);
var final_field_map = (cljs.core.truth_(class_def)?(cljs.core.truth_(constructor$)?(function (){var ctor_def = nex.interpreter.lookup_constructor_with_inheritance(ctx,class_def,constructor$);
if(cljs.core.truth_(ctor_def)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));
}

var ctor_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var ___$1 = (function (){var seq__6661 = cljs.core.seq(initial_field_map);
var chunk__6662 = null;
var count__6663 = (0);
var i__6664 = (0);
while(true){
if((i__6664 < count__6663)){
var vec__6671 = chunk__6662.cljs$core$IIndexed$_nth$arity$2(null,i__6664);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8457 = seq__6661;
var G__8458 = chunk__6662;
var G__8459 = count__6663;
var G__8460 = (i__6664 + (1));
seq__6661 = G__8457;
chunk__6662 = G__8458;
count__6663 = G__8459;
i__6664 = G__8460;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6661);
if(temp__5823__auto__){
var seq__6661__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6661__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6661__$1);
var G__8461 = cljs.core.chunk_rest(seq__6661__$1);
var G__8462 = c__5673__auto__;
var G__8463 = cljs.core.count(c__5673__auto__);
var G__8464 = (0);
seq__6661 = G__8461;
chunk__6662 = G__8462;
count__6663 = G__8463;
i__6664 = G__8464;
continue;
} else {
var vec__6674 = cljs.core.first(seq__6661__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8465 = cljs.core.next(seq__6661__$1);
var G__8466 = null;
var G__8467 = (0);
var G__8468 = (0);
seq__6661 = G__8465;
chunk__6662 = G__8466;
count__6663 = G__8467;
i__6664 = G__8468;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$2 = nex.interpreter.bind_class_constants_BANG_(ctx,ctor_env,class_def);
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6653_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6653_SHARP_);
}),args);
var ___$3 = (cljs.core.truth_(params)?(function (){var seq__6677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6678 = null;
var count__6679 = (0);
var i__6680 = (0);
while(true){
if((i__6680 < count__6679)){
var vec__6687 = chunk__6678.cljs$core$IIndexed$_nth$arity$2(null,i__6680);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6687,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6687,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8469 = seq__6677;
var G__8470 = chunk__6678;
var G__8471 = count__6679;
var G__8472 = (i__6680 + (1));
seq__6677 = G__8469;
chunk__6678 = G__8470;
count__6679 = G__8471;
i__6680 = G__8472;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6677);
if(temp__5823__auto__){
var seq__6677__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6677__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6677__$1);
var G__8473 = cljs.core.chunk_rest(seq__6677__$1);
var G__8474 = c__5673__auto__;
var G__8475 = cljs.core.count(c__5673__auto__);
var G__8476 = (0);
seq__6677 = G__8473;
chunk__6678 = G__8474;
count__6679 = G__8475;
i__6680 = G__8476;
continue;
} else {
var vec__6690 = cljs.core.first(seq__6677__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8477 = cljs.core.next(seq__6677__$1);
var G__8478 = null;
var G__8479 = (0);
var G__8480 = (0);
seq__6677 = G__8477;
chunk__6678 = G__8478;
count__6679 = G__8479;
i__6680 = G__8480;
continue;
}
} else {
return null;
}
}
break;
}
})():null);
var temp_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,initial_field_map);
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),constructor$),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),effective_class_name,new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})(),new cljs.core.Keyword(null,"env","env",-1815813235),ctor_env,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(initial_field_map))),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
var ___$4 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5823__auto__)){
var require_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions(new_ctx,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})();
var ___$5 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
var seq__6693 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__6694 = null;
var count__6695 = (0);
var i__6696 = (0);
while(true){
if((i__6696 < count__6695)){
var stmt = chunk__6694.cljs$core$IIndexed$_nth$arity$2(null,i__6696);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8481 = seq__6693;
var G__8482 = chunk__6694;
var G__8483 = count__6695;
var G__8484 = (i__6696 + (1));
seq__6693 = G__8481;
chunk__6694 = G__8482;
count__6695 = G__8483;
i__6696 = G__8484;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6693);
if(temp__5823__auto__){
var seq__6693__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6693__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6693__$1);
var G__8485 = cljs.core.chunk_rest(seq__6693__$1);
var G__8486 = c__5673__auto__;
var G__8487 = cljs.core.count(c__5673__auto__);
var G__8488 = (0);
seq__6693 = G__8485;
chunk__6694 = G__8486;
count__6695 = G__8487;
i__6696 = G__8488;
continue;
} else {
var stmt = cljs.core.first(seq__6693__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8489 = cljs.core.next(seq__6693__$1);
var G__8490 = null;
var G__8491 = (0);
var G__8492 = (0);
seq__6693 = G__8489;
chunk__6694 = G__8490;
count__6695 = G__8491;
i__6696 = G__8492;
continue;
}
} else {
return null;
}
}
break;
}
}
})();
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(ctor_env,field_name);
}catch (e6697){var ___$6 = e6697;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),initial_field_map,all_fields);
var ___$6 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5823__auto__)){
var ensure_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions(new_ctx,ensure_assertions,nex.interpreter.Postcondition);
} else {
return null;
}
})();
return updated_fields;
})():initial_field_map):null);
var obj = (cljs.core.truth_(class_def)?nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,final_field_map):null);
if(cljs.core.truth_(class_def)){
var inv_env_8493 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8494__$1 = (function (){var seq__6698 = cljs.core.seq(final_field_map);
var chunk__6699 = null;
var count__6700 = (0);
var i__6701 = (0);
while(true){
if((i__6701 < count__6700)){
var vec__6708 = chunk__6699.cljs$core$IIndexed$_nth$arity$2(null,i__6701);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6708,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6708,(1),null);
nex.interpreter.env_define(inv_env_8493,cljs.core.name(field_name),field_val);


var G__8496 = seq__6698;
var G__8497 = chunk__6699;
var G__8498 = count__6700;
var G__8499 = (i__6701 + (1));
seq__6698 = G__8496;
chunk__6699 = G__8497;
count__6700 = G__8498;
i__6701 = G__8499;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6698);
if(temp__5823__auto__){
var seq__6698__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6698__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6698__$1);
var G__8500 = cljs.core.chunk_rest(seq__6698__$1);
var G__8501 = c__5673__auto__;
var G__8502 = cljs.core.count(c__5673__auto__);
var G__8503 = (0);
seq__6698 = G__8500;
chunk__6699 = G__8501;
count__6700 = G__8502;
i__6701 = G__8503;
continue;
} else {
var vec__6711 = cljs.core.first(seq__6698__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(1),null);
nex.interpreter.env_define(inv_env_8493,cljs.core.name(field_name),field_val);


var G__8504 = cljs.core.next(seq__6698__$1);
var G__8505 = null;
var G__8506 = (0);
var G__8507 = (0);
seq__6698 = G__8504;
chunk__6699 = G__8505;
count__6700 = G__8506;
i__6701 = G__8507;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_8495 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_8493);
nex.interpreter.check_class_invariant(inv_ctx_8495,class_def);

return obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),(function (ctx,p__6714){
var map__6715 = p__6714;
var map__6715__$1 = cljs.core.__destructure_map(map__6715);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6715__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("spawn is not supported in ClojureScript interpreter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)], null));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"literal","literal",1664775605),(function (_ctx,node){
if(typeof node === 'string'){
return node;
} else {
if(cljs.core.map_QMARK_(node)){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
} else {
return node;

}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__6716){
var map__6717 = p__6716;
var map__6717__$1 = cljs.core.__destructure_map(map__6717);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6717__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__5821__auto__ = new cljs.core.Keyword(null,"old-values","old-values",1159632002).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5821__auto__)){
var old_values = temp__5821__auto__;
if(((cljs.core.map_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr),new cljs.core.Keyword(null,"identifier","identifier",-805503498))))){
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr);
if(cljs.core.contains_QMARK_(old_values,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(var_name))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(var_name));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"'old' can only be used on object fields in postconditions"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),var_name], null));
}
} else {
var old_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var _ = (function (){var seq__6718 = cljs.core.seq(old_values);
var chunk__6719 = null;
var count__6720 = (0);
var i__6721 = (0);
while(true){
if((i__6721 < count__6720)){
var vec__6728 = chunk__6719.cljs$core$IIndexed$_nth$arity$2(null,i__6721);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8508 = seq__6718;
var G__8509 = chunk__6719;
var G__8510 = count__6720;
var G__8511 = (i__6721 + (1));
seq__6718 = G__8508;
chunk__6719 = G__8509;
count__6720 = G__8510;
i__6721 = G__8511;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6718);
if(temp__5823__auto__){
var seq__6718__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6718__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6718__$1);
var G__8512 = cljs.core.chunk_rest(seq__6718__$1);
var G__8513 = c__5673__auto__;
var G__8514 = cljs.core.count(c__5673__auto__);
var G__8515 = (0);
seq__6718 = G__8512;
chunk__6719 = G__8513;
count__6720 = G__8514;
i__6721 = G__8515;
continue;
} else {
var vec__6731 = cljs.core.first(seq__6718__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8516 = cljs.core.next(seq__6718__$1);
var G__8517 = null;
var G__8518 = (0);
var G__8519 = (0);
seq__6718 = G__8516;
chunk__6719 = G__8517;
count__6720 = G__8518;
i__6721 = G__8519;
continue;
}
} else {
return null;
}
}
break;
}
})();
var old_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),old_env);
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(old_ctx,expr);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("'old' can only be used in postconditions",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__6734){
var map__6735 = p__6734;
var map__6735__$1 = cljs.core.__destructure_map(map__6735);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ctx,node){
if(typeof node === 'string'){
return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),node);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot evaluate node type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.type(node);
}
})())),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}
}));
nex.interpreter.async_result_value = (function nex$interpreter$async_result_value(env){
var result_flag = (function (){try{return nex.interpreter.env_lookup(env,"__result_assigned__");
}catch (e6736){var _ = e6736;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result")){
return nex.interpreter.env_lookup(env,"result");
} else {
var res = (function (){try{return nex.interpreter.env_lookup(env,"result");
}catch (e6737){var _ = e6737;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
}
});
nex.interpreter.check_assertions_async = (function nex$interpreter$check_assertions_async(ctx,assertions,contract_type){
return nex.interpreter.promise_reduce(assertions,null,(function (_,p__6738){
var map__6739 = p__6738;
var map__6739__$1 = cljs.core.__destructure_map(map__6739);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6739__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6739__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
return nex.interpreter.__GT_promise((nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node_async.call(null,ctx,condition))).then((function (result){
if(cljs.core.truth_(result)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}

return null;
}));
}));
});
nex.interpreter.check_class_invariant_async = (function nex$interpreter$check_class_invariant_async(ctx,class_def){
var collect_invariants = (function nex$interpreter$check_class_invariant_async_$_collect_invariants(class_def__$1,seen){
var class_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(class_def__$1);
var already_seen_QMARK_ = (function (){var and__5140__auto__ = class_name;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(seen,class_name);
} else {
return and__5140__auto__;
}
})();
var seen_SINGLEQUOTE_ = (cljs.core.truth_(class_name)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,class_name):seen);
if(cljs.core.truth_(already_seen_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen], null);
} else {
var vec__6752 = (function (){var temp__5821__auto__ = nex.interpreter.get_parent_classes(ctx,class_def__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6755,p__6756){
var vec__6757 = p__6755;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757,(1),null);
var map__6760 = p__6756;
var map__6760__$1 = cljs.core.__destructure_map(map__6760);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6760__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6761 = nex$interpreter$check_class_invariant_async_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6761,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6761,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6752,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6752,(1),null);
var local_invariants = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"invariant","invariant",-1658446508).cljs$core$IFn$_invoke$arity$1(class_def__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_invariants,local_invariants)),seen_SINGLEQUOTE__SINGLEQUOTE_], null);
}
});
var vec__6764 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764,(1),null);
if(cljs.core.seq(assertions)){
return nex.interpreter.check_assertions_async(ctx,assertions,nex.interpreter.Class_invariant);
} else {
return Promise.resolve(null);
}
});
nex.interpreter.eval_body_async = (function nex$interpreter$eval_body_async(ctx,body){
return nex.interpreter.promise_reduce(body,null,(function (_,stmt){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,stmt) : nex.interpreter.eval_node_async.call(null,ctx,stmt));
}));
});
nex.interpreter.async_free_node_QMARK_ = (function nex$interpreter$async_free_node_QMARK_(node){
if((node == null)){
return true;
} else {
if(typeof node === 'string'){
return true;
} else {
if((!(cljs.core.map_QMARK_(node)))){
return true;
} else {
var G__6768 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6768__$1 = (((G__6768 instanceof cljs.core.Keyword))?G__6768.fqn:null);
switch (G__6768__$1) {
case "integer":
return true;

break;
case "real":
return true;

break;
case "boolean":
return true;

break;
case "char":
return true;

break;
case "string":
return true;

break;
case "nil":
return true;

break;
case "identifier":
return true;

break;
case "literal":
return true;

break;
case "old":
return true;

break;
case "unary":
var G__6769 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6769) : nex.interpreter.async_free_node_QMARK_.call(null,G__6769));

break;
case "binary":
var and__5140__auto__ = (function (){var G__6770 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6770) : nex.interpreter.async_free_node_QMARK_.call(null,G__6770));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6771 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6771) : nex.interpreter.async_free_node_QMARK_.call(null,G__6771));
} else {
return and__5140__auto__;
}

break;
case "subscript":
var and__5140__auto__ = (function (){var G__6772 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6772) : nex.interpreter.async_free_node_QMARK_.call(null,G__6772));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6773 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6773) : nex.interpreter.async_free_node_QMARK_.call(null,G__6773));
} else {
return and__5140__auto__;
}

break;
case "array-literal":
return cljs.core.every_QMARK_(nex.interpreter.async_free_node_QMARK_,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node));

break;
case "set-literal":
return cljs.core.every_QMARK_(nex.interpreter.async_free_node_QMARK_,new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node));

break;
case "map-literal":
return cljs.core.every_QMARK_((function (p__6774){
var map__6775 = p__6774;
var map__6775__$1 = cljs.core.__destructure_map(map__6775);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6775__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6775__$1,new cljs.core.Keyword(null,"value","value",305978217));
var and__5140__auto__ = (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(key) : nex.interpreter.async_free_node_QMARK_.call(null,key));
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.async_free_node_QMARK_.call(null,value));
} else {
return and__5140__auto__;
}
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node));

break;
case "statement":
var G__6776 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6776) : nex.interpreter.async_free_node_QMARK_.call(null,G__6776));

break;
default:
return false;

}

}
}
}
});
nex.interpreter.eval_body_with_rescue_async = (function nex$interpreter$eval_body_with_rescue_async(ctx,body,rescue){
var run_body = (function nex$interpreter$eval_body_with_rescue_async_$_run_body(){
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(ctx,body)).catch((function (e){
if((((e instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)))))){
return Promise.reject(e);
} else {
var exc_value = (((((e instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)):e.message);
var rescue_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var _ = nex.interpreter.env_define(rescue_env,"exception",exc_value);
var rescue_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env);
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(rescue_ctx,rescue)).then((function (___$1){
return Promise.reject(e);
})).catch((function (re){
if((((re instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re)))))){
return nex$interpreter$eval_body_with_rescue_async_$_run_body();
} else {
return Promise.reject(re);
}
}));
}
}));
});
return run_body();
});
nex.interpreter.dispatch_parent_call_async = (function nex$interpreter$dispatch_parent_call_async(ctx,current_obj,parent_class_name,method,arg_values){
var parent_class_def = nex.interpreter.lookup_class(ctx,parent_class_name);
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,parent_class_def,method);
var ctor_def = (cljs.core.truth_(method_lookup)?null:nex.interpreter.lookup_constructor(parent_class_def,method));
var temp__5821__auto__ = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method_lookup);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ctor_def;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var callable = temp__5821__auto__;
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var parent_fields = nex.interpreter.get_all_fields(ctx,parent_class_def);
var parent_field_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),parent_fields));
var method_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var _ = (function (){var seq__6777 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6778 = null;
var count__6779 = (0);
var i__6780 = (0);
while(true){
if((i__6780 < count__6779)){
var vec__6787 = chunk__6778.cljs$core$IIndexed$_nth$arity$2(null,i__6780);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6787,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6787,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8521 = seq__6777;
var G__8522 = chunk__6778;
var G__8523 = count__6779;
var G__8524 = (i__6780 + (1));
seq__6777 = G__8521;
chunk__6778 = G__8522;
count__6779 = G__8523;
i__6780 = G__8524;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6777);
if(temp__5823__auto__){
var seq__6777__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6777__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6777__$1);
var G__8525 = cljs.core.chunk_rest(seq__6777__$1);
var G__8526 = c__5673__auto__;
var G__8527 = cljs.core.count(c__5673__auto__);
var G__8528 = (0);
seq__6777 = G__8525;
chunk__6778 = G__8526;
count__6779 = G__8527;
i__6780 = G__8528;
continue;
} else {
var vec__6790 = cljs.core.first(seq__6777__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6790,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6790,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8529 = cljs.core.next(seq__6777__$1);
var G__8530 = null;
var G__8531 = (0);
var G__8532 = (0);
seq__6777 = G__8529;
chunk__6778 = G__8530;
count__6779 = G__8531;
i__6780 = G__8532;
continue;
}
} else {
return null;
}
}
break;
}
})();
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(callable);
var ___$1 = (function (){var seq__6793 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6794 = null;
var count__6795 = (0);
var i__6796 = (0);
while(true){
if((i__6796 < count__6795)){
var vec__6803 = chunk__6794.cljs$core$IIndexed$_nth$arity$2(null,i__6796);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8533 = seq__6793;
var G__8534 = chunk__6794;
var G__8535 = count__6795;
var G__8536 = (i__6796 + (1));
seq__6793 = G__8533;
chunk__6794 = G__8534;
count__6795 = G__8535;
i__6796 = G__8536;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6793);
if(temp__5823__auto__){
var seq__6793__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6793__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6793__$1);
var G__8537 = cljs.core.chunk_rest(seq__6793__$1);
var G__8538 = c__5673__auto__;
var G__8539 = cljs.core.count(c__5673__auto__);
var G__8540 = (0);
seq__6793 = G__8537;
chunk__6794 = G__8538;
count__6795 = G__8539;
i__6796 = G__8540;
continue;
} else {
var vec__6806 = cljs.core.first(seq__6793__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8541 = cljs.core.next(seq__6793__$1);
var G__8542 = null;
var G__8543 = (0);
var G__8544 = (0);
seq__6793 = G__8541;
chunk__6794 = G__8542;
count__6795 = G__8543;
i__6796 = G__8544;
continue;
}
} else {
return null;
}
}
break;
}
})();
var return_type = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(callable);
var default_result = (cljs.core.truth_(return_type)?nex.interpreter.get_default_field_value(return_type):null);
var ___$2 = nex.interpreter.env_define(method_env,"result",default_result);
var ___$3 = nex.interpreter.env_define(method_env,"this",current_obj);
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),current_obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"env","env",-1815813235),method_env,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),all_fields)),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
return nex.interpreter.__GT_promise((function (){var temp__5821__auto____$1 = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(callable);
if(cljs.core.truth_(temp__5821__auto____$1)){
var rescue = temp__5821__auto____$1;
return nex.interpreter.eval_body_with_rescue_async(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
}
})()).then((function (___$4){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(method_env,field_name);
}catch (e6809){var ___$5 = e6809;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(current_obj));
var result = nex.interpreter.async_result_value(method_env);
var temp__5823__auto___8545 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8545)){
var tgt_8546 = temp__5823__auto___8545;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8546,updated_obj);
}catch (e6810){var __8547__$5 = e6810;
}} else {
}

var seq__6811_8548 = cljs.core.seq(updated_obj.fields);
var chunk__6812_8549 = null;
var count__6813_8550 = (0);
var i__6814_8551 = (0);
while(true){
if((i__6814_8551 < count__6813_8550)){
var vec__6823_8552 = chunk__6812_8549.cljs$core$IIndexed$_nth$arity$2(null,i__6814_8551);
var field_name_8553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6823_8552,(0),null);
var field_val_8554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6823_8552,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8553))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8553),field_val_8554);
}catch (e6826){var __8555__$5 = e6826;
}} else {
}


var G__8556 = seq__6811_8548;
var G__8557 = chunk__6812_8549;
var G__8558 = count__6813_8550;
var G__8559 = (i__6814_8551 + (1));
seq__6811_8548 = G__8556;
chunk__6812_8549 = G__8557;
count__6813_8550 = G__8558;
i__6814_8551 = G__8559;
continue;
} else {
var temp__5823__auto___8560 = cljs.core.seq(seq__6811_8548);
if(temp__5823__auto___8560){
var seq__6811_8561__$1 = temp__5823__auto___8560;
if(cljs.core.chunked_seq_QMARK_(seq__6811_8561__$1)){
var c__5673__auto___8562 = cljs.core.chunk_first(seq__6811_8561__$1);
var G__8563 = cljs.core.chunk_rest(seq__6811_8561__$1);
var G__8564 = c__5673__auto___8562;
var G__8565 = cljs.core.count(c__5673__auto___8562);
var G__8566 = (0);
seq__6811_8548 = G__8563;
chunk__6812_8549 = G__8564;
count__6813_8550 = G__8565;
i__6814_8551 = G__8566;
continue;
} else {
var vec__6827_8567 = cljs.core.first(seq__6811_8561__$1);
var field_name_8568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6827_8567,(0),null);
var field_val_8569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6827_8567,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8568))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8568),field_val_8569);
}catch (e6830){var __8570__$5 = e6830;
}} else {
}


var G__8571 = cljs.core.next(seq__6811_8561__$1);
var G__8572 = null;
var G__8573 = (0);
var G__8574 = (0);
seq__6811_8548 = G__8571;
chunk__6812_8549 = G__8572;
count__6813_8550 = G__8573;
i__6814_8551 = G__8574;
continue;
}
} else {
}
}
break;
}

return result;
}));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found in parent "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_class_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent_class_name,new cljs.core.Keyword(null,"method","method",55703592),method], null)));
}
});
nex.interpreter.eval_node_async = (function nex$interpreter$eval_node_async(ctx,node){
if((node == null)){
return Promise.resolve(null);
} else {
if(typeof node === 'string'){
return Promise.resolve(node);
} else {
if((!(cljs.core.map_QMARK_(node)))){
return Promise.resolve(node);
} else {
if(cljs.core.truth_(nex.interpreter.async_free_node_QMARK_(node))){
return Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return Promise.resolve((function (){var spawn_promise = Promise.resolve(null).then((function (_){
var spawn_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var ___$1 = nex.interpreter.env_define(spawn_env,"result",null);
var spawn_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),spawn_env);
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(spawn_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node))).then((function (___$2){
return nex.interpreter.async_result_value(spawn_env);
}));
}));
return nex.interpreter.make_task(spawn_promise);
})());
} else {
var node_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"program","program",781564284))){
var map__6839_8575 = node;
var map__6839_8576__$1 = cljs.core.__destructure_map(map__6839_8575);
var imports_8577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns_8578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes_8579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions_8580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements_8581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls_8582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6839_8576__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6840_8583 = cljs.core.seq(imports_8577);
var chunk__6841_8584 = null;
var count__6842_8585 = (0);
var i__6843_8586 = (0);
while(true){
if((i__6843_8586 < count__6842_8585)){
var import_node_8587 = chunk__6841_8584.cljs$core$IIndexed$_nth$arity$2(null,i__6843_8586);
if(cljs.core.map_QMARK_(import_node_8587)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8587);
} else {
}


var G__8588 = seq__6840_8583;
var G__8589 = chunk__6841_8584;
var G__8590 = count__6842_8585;
var G__8591 = (i__6843_8586 + (1));
seq__6840_8583 = G__8588;
chunk__6841_8584 = G__8589;
count__6842_8585 = G__8590;
i__6843_8586 = G__8591;
continue;
} else {
var temp__5823__auto___8592 = cljs.core.seq(seq__6840_8583);
if(temp__5823__auto___8592){
var seq__6840_8593__$1 = temp__5823__auto___8592;
if(cljs.core.chunked_seq_QMARK_(seq__6840_8593__$1)){
var c__5673__auto___8594 = cljs.core.chunk_first(seq__6840_8593__$1);
var G__8595 = cljs.core.chunk_rest(seq__6840_8593__$1);
var G__8596 = c__5673__auto___8594;
var G__8597 = cljs.core.count(c__5673__auto___8594);
var G__8598 = (0);
seq__6840_8583 = G__8595;
chunk__6841_8584 = G__8596;
count__6842_8585 = G__8597;
i__6843_8586 = G__8598;
continue;
} else {
var import_node_8599 = cljs.core.first(seq__6840_8593__$1);
if(cljs.core.map_QMARK_(import_node_8599)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8599);
} else {
}


var G__8600 = cljs.core.next(seq__6840_8593__$1);
var G__8601 = null;
var G__8602 = (0);
var G__8603 = (0);
seq__6840_8583 = G__8600;
chunk__6841_8584 = G__8601;
count__6842_8585 = G__8602;
i__6843_8586 = G__8603;
continue;
}
} else {
}
}
break;
}

var seq__6844_8604 = cljs.core.seq(interns_8578);
var chunk__6845_8605 = null;
var count__6846_8606 = (0);
var i__6847_8607 = (0);
while(true){
if((i__6847_8607 < count__6846_8606)){
var intern_node_8608 = chunk__6845_8605.cljs$core$IIndexed$_nth$arity$2(null,i__6847_8607);
if(cljs.core.map_QMARK_(intern_node_8608)){
nex.interpreter.process_intern(ctx,intern_node_8608);
} else {
}


var G__8609 = seq__6844_8604;
var G__8610 = chunk__6845_8605;
var G__8611 = count__6846_8606;
var G__8612 = (i__6847_8607 + (1));
seq__6844_8604 = G__8609;
chunk__6845_8605 = G__8610;
count__6846_8606 = G__8611;
i__6847_8607 = G__8612;
continue;
} else {
var temp__5823__auto___8613 = cljs.core.seq(seq__6844_8604);
if(temp__5823__auto___8613){
var seq__6844_8614__$1 = temp__5823__auto___8613;
if(cljs.core.chunked_seq_QMARK_(seq__6844_8614__$1)){
var c__5673__auto___8615 = cljs.core.chunk_first(seq__6844_8614__$1);
var G__8616 = cljs.core.chunk_rest(seq__6844_8614__$1);
var G__8617 = c__5673__auto___8615;
var G__8618 = cljs.core.count(c__5673__auto___8615);
var G__8619 = (0);
seq__6844_8604 = G__8616;
chunk__6845_8605 = G__8617;
count__6846_8606 = G__8618;
i__6847_8607 = G__8619;
continue;
} else {
var intern_node_8620 = cljs.core.first(seq__6844_8614__$1);
if(cljs.core.map_QMARK_(intern_node_8620)){
nex.interpreter.process_intern(ctx,intern_node_8620);
} else {
}


var G__8621 = cljs.core.next(seq__6844_8614__$1);
var G__8622 = null;
var G__8623 = (0);
var G__8624 = (0);
seq__6844_8604 = G__8621;
chunk__6845_8605 = G__8622;
count__6846_8606 = G__8623;
i__6847_8607 = G__8624;
continue;
}
} else {
}
}
break;
}

var seq__6848_8625 = cljs.core.seq(classes_8579);
var chunk__6849_8626 = null;
var count__6850_8627 = (0);
var i__6851_8628 = (0);
while(true){
if((i__6851_8628 < count__6850_8627)){
var class_node_8629 = chunk__6849_8626.cljs$core$IIndexed$_nth$arity$2(null,i__6851_8628);
if(cljs.core.map_QMARK_(class_node_8629)){
nex.interpreter.register_class(ctx,class_node_8629);
} else {
}


var G__8630 = seq__6848_8625;
var G__8631 = chunk__6849_8626;
var G__8632 = count__6850_8627;
var G__8633 = (i__6851_8628 + (1));
seq__6848_8625 = G__8630;
chunk__6849_8626 = G__8631;
count__6850_8627 = G__8632;
i__6851_8628 = G__8633;
continue;
} else {
var temp__5823__auto___8634 = cljs.core.seq(seq__6848_8625);
if(temp__5823__auto___8634){
var seq__6848_8635__$1 = temp__5823__auto___8634;
if(cljs.core.chunked_seq_QMARK_(seq__6848_8635__$1)){
var c__5673__auto___8636 = cljs.core.chunk_first(seq__6848_8635__$1);
var G__8637 = cljs.core.chunk_rest(seq__6848_8635__$1);
var G__8638 = c__5673__auto___8636;
var G__8639 = cljs.core.count(c__5673__auto___8636);
var G__8640 = (0);
seq__6848_8625 = G__8637;
chunk__6849_8626 = G__8638;
count__6850_8627 = G__8639;
i__6851_8628 = G__8640;
continue;
} else {
var class_node_8641 = cljs.core.first(seq__6848_8635__$1);
if(cljs.core.map_QMARK_(class_node_8641)){
nex.interpreter.register_class(ctx,class_node_8641);
} else {
}


var G__8642 = cljs.core.next(seq__6848_8635__$1);
var G__8643 = null;
var G__8644 = (0);
var G__8645 = (0);
seq__6848_8625 = G__8642;
chunk__6849_8626 = G__8643;
count__6850_8627 = G__8644;
i__6851_8628 = G__8645;
continue;
}
} else {
}
}
break;
}

nex.interpreter.promise_reduce(functions_8580,null,(function (_,fn_node){
if(cljs.core.map_QMARK_(fn_node)){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,fn_node) : nex.interpreter.eval_node_async.call(null,ctx,fn_node));
} else {
return null;
}
})).then((function (_){
return nex.interpreter.promise_reduce(((cljs.core.seq(statements_8581))?statements_8581:calls_8582),null,(function (___$1,stmt_node){
if(cljs.core.map_QMARK_(stmt_node)){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node) : nex.interpreter.eval_node_async.call(null,ctx,stmt_node));
} else {
return null;
}
})).then((function (___$1){
return ctx;
}));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"class","class",-2030961996))){
Promise.resolve((function (){
nex.interpreter.register_class(ctx,node);

return null;
})()
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"function","function",-2127255473))){
var map__6852_8646 = node;
var map__6852_8647__$1 = cljs.core.__destructure_map(map__6852_8646);
var name_8648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852_8647__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def_8649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852_8647__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name_8650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852_8647__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def_8649);

var obj_8651 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name_8650,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name_8648,obj_8651);

Promise.resolve(obj_8651);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318))){
var map__6853_8652 = node;
var map__6853_8653__$1 = cljs.core.__destructure_map(map__6853_8652);
var class_def_8654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8653__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name_8655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8653__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def_8654);

Promise.resolve(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name_8655,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"call","call",-519999866))){
var map__6854_8656 = node;
var map__6854_8657__$1 = cljs.core.__destructure_map(map__6854_8656);
var target_8658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6854_8657__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method_8659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6854_8657__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args_8660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6854_8657__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens_8661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6854_8657__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target_8658)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target_8658))) && ((method_8659 == null)))))){
var G__6855_8662 = ctx;
var G__6856_8663 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_8658,new cljs.core.Keyword(null,"args","args",1315556576),args_8660);
(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6855_8662,G__6856_8663) : nex.interpreter.eval_node_async.call(null,G__6855_8662,G__6856_8663));
} else {
nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6831_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6831_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6831_SHARP_));
}),args_8660)).then((function (arg_values){
if(cljs.core.truth_(target_8658)){
var target_name_8664 = ((typeof target_8658 === 'string')?target_8658:null);
var class_target_8665 = (cljs.core.truth_(target_name_8664)?nex.interpreter.lookup_class_if_exists(ctx,target_name_8664):null);
var parent_class_8666 = (cljs.core.truth_((function (){var and__5140__auto__ = target_name_8664;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5140__auto__;
}
})())?(function (){var cls = nex.interpreter.lookup_class_if_exists(ctx,target_name_8664);
if(cljs.core.truth_((function (){var and__5140__auto__ = cls;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.is_parent_QMARK_(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_8664);
} else {
return and__5140__auto__;
}
})())){
return cls;
} else {
return null;
}
})():null);
(cljs.core.truth_((function (){var or__5142__auto__ = parent_class_8666;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = class_target_8665;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return target_name_8664;
}
}
})())?Promise.resolve(null):(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,target_8658) : nex.interpreter.eval_node_async.call(null,ctx,target_8658))).then((function (target_value){
var obj = (cljs.core.truth_(parent_class_8666)?null:(cljs.core.truth_(class_target_8665)?null:(cljs.core.truth_(target_name_8664)?nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8664):target_value)));
if(cljs.core.truth_((function (){var and__5140__auto__ = class_target_8665;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = has_parens_8661 === false;
if(and__5140__auto____$1){
return nex.interpreter.lookup_class_constant(ctx,class_target_8665,method_8659);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
Promise.resolve(nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,class_target_8665,method_8659));
} else {
if(cljs.core.truth_(parent_class_8666)){
nex.interpreter.dispatch_parent_call_async(ctx,new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8664,method_8659,arg_values);
} else {
if(nex.interpreter.nex_object_QMARK_(obj)){
var class_def_8667 = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj));
var method_lookup_8668 = nex.interpreter.lookup_method_with_inheritance(ctx,class_def_8667,method_8659);
if(cljs.core.truth_(method_lookup_8668)){
var method_def_8669 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method_lookup_8668);
var params_8670 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_def_8669);
if(((has_parens_8661 === false) && (cljs.core.seq(params_8670)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)+" requires arguments"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_8659,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params_8670)], null));
} else {
}

var all_fields_8671 = nex.interpreter.get_all_fields(ctx,class_def_8667);
var effective_require_8672 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(method_lookup_8668);
var effective_ensure_8673 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(method_lookup_8668);
var has_postconditions_QMARK__8674 = cljs.core.seq(effective_ensure_8673);
var old_values_8675 = ((has_postconditions_QMARK__8674)?new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj):null);
var method_env_8676 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
}
})());
var param_names_8677 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params_8670));
var __8678 = (function (){var seq__6857 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6858 = null;
var count__6859 = (0);
var i__6860 = (0);
while(true){
if((i__6860 < count__6859)){
var vec__6867 = chunk__6858.cljs$core$IIndexed$_nth$arity$2(null,i__6860);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6867,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6867,(1),null);
nex.interpreter.env_define(method_env_8676,cljs.core.name(field_name),field_val);


var G__8687 = seq__6857;
var G__8688 = chunk__6858;
var G__8689 = count__6859;
var G__8690 = (i__6860 + (1));
seq__6857 = G__8687;
chunk__6858 = G__8688;
count__6859 = G__8689;
i__6860 = G__8690;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6857);
if(temp__5823__auto__){
var seq__6857__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6857__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6857__$1);
var G__8691 = cljs.core.chunk_rest(seq__6857__$1);
var G__8692 = c__5673__auto__;
var G__8693 = cljs.core.count(c__5673__auto__);
var G__8694 = (0);
seq__6857 = G__8691;
chunk__6858 = G__8692;
count__6859 = G__8693;
i__6860 = G__8694;
continue;
} else {
var vec__6870 = cljs.core.first(seq__6857__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6870,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6870,(1),null);
nex.interpreter.env_define(method_env_8676,cljs.core.name(field_name),field_val);


var G__8695 = cljs.core.next(seq__6857__$1);
var G__8696 = null;
var G__8697 = (0);
var G__8698 = (0);
seq__6857 = G__8695;
chunk__6858 = G__8696;
count__6859 = G__8697;
i__6860 = G__8698;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8679__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,method_env_8676,class_def_8667);
var __8680__$2 = (function (){var seq__6873 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_8670,arg_values));
var chunk__6874 = null;
var count__6875 = (0);
var i__6876 = (0);
while(true){
if((i__6876 < count__6875)){
var vec__6883 = chunk__6874.cljs$core$IIndexed$_nth$arity$2(null,i__6876);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6883,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6883,(1),null);
nex.interpreter.env_define(method_env_8676,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8699 = seq__6873;
var G__8700 = chunk__6874;
var G__8701 = count__6875;
var G__8702 = (i__6876 + (1));
seq__6873 = G__8699;
chunk__6874 = G__8700;
count__6875 = G__8701;
i__6876 = G__8702;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6873);
if(temp__5823__auto__){
var seq__6873__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6873__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6873__$1);
var G__8703 = cljs.core.chunk_rest(seq__6873__$1);
var G__8704 = c__5673__auto__;
var G__8705 = cljs.core.count(c__5673__auto__);
var G__8706 = (0);
seq__6873 = G__8703;
chunk__6874 = G__8704;
count__6875 = G__8705;
i__6876 = G__8706;
continue;
} else {
var vec__6886 = cljs.core.first(seq__6873__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6886,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6886,(1),null);
nex.interpreter.env_define(method_env_8676,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8707 = cljs.core.next(seq__6873__$1);
var G__8708 = null;
var G__8709 = (0);
var G__8710 = (0);
seq__6873 = G__8707;
chunk__6874 = G__8708;
count__6875 = G__8709;
i__6876 = G__8710;
continue;
}
} else {
return null;
}
}
break;
}
})();
var modified_fields_8681 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var return_type_8682 = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_def_8669);
var default_result_8683 = (cljs.core.truth_(return_type_8682)?nex.interpreter.get_default_field_value(return_type_8682):null);
var __8684__$3 = nex.interpreter.env_define(method_env_8676,"result",default_result_8683);
var __8685__$4 = nex.interpreter.env_define(method_env_8676,"this",obj);
var new_ctx_8686 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env_8676),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name_8664),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method_8659),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values_8675),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields_8681),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"method","method",55703592),method_8659,new cljs.core.Keyword(null,"env","env",-1815813235),method_env_8676,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_8670;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj)))),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
nex.interpreter.__GT_promise((cljs.core.truth_(effective_require_8672)?nex.interpreter.check_assertions_async(new_ctx_8686,effective_require_8672,nex.interpreter.Precondition):null)).then((function (___$5){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def_8669);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8686,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_8669),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8686,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_8669));
}
})()).then((function (___$6){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
if(((cljs.core.contains_QMARK_(param_names_8677,field_name)) && ((!(cljs.core.contains_QMARK_(cljs.core.deref(modified_fields_8681),field_name)))))){
return m;
} else {
var val = (function (){try{return nex.interpreter.env_lookup(method_env_8676,field_name);
}catch (e6889){var ___$7 = e6889;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields_8671);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj));
var result = nex.interpreter.async_result_value(method_env_8676);
return nex.interpreter.__GT_promise((cljs.core.truth_(effective_ensure_8673)?nex.interpreter.check_assertions_async(new_ctx_8686,effective_ensure_8673,nex.interpreter.Postcondition):null)).then((function (___$7){
return nex.interpreter.check_class_invariant_async(new_ctx_8686,class_def_8667).then((function (___$8){
if(cljs.core.truth_(target_name_8664)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8664,updated_obj);
} else {
}

return result;
}));
}));
}));
}));

var all_fields_8711 = nex.interpreter.get_all_fields(ctx,class_def_8667);
var field_8712 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6832_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6832_SHARP_),method_8659);
}),all_fields_8711));
if(cljs.core.truth_(field_8712)){
var field_val_8713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_8659));
if(cljs.core.truth_((function (){var and__5140__auto__ = has_parens_8661;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.nex_object_QMARK_(field_val_8713);
} else {
return and__5140__auto__;
}
})())){
var call_method_8714 = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_values)));
var literal_args_8715 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),v], null);
}),arg_values);
var G__6890_8716 = ctx;
var G__6891_8717 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),field_val_8713], null),new cljs.core.Keyword(null,"method","method",55703592),call_method_8714,new cljs.core.Keyword(null,"args","args",1315556576),literal_args_8715], null);
(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6890_8716,G__6891_8717) : nex.interpreter.eval_node_async.call(null,G__6890_8716,G__6891_8717));
} else {
if(cljs.core.empty_QMARK_(arg_values)){
Promise.resolve(field_val_8713);
} else {
Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8659], null)));
}
}
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtin_type_methods,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Any","Any",-363039258),method_8659], null)))){
nex.interpreter.__GT_promise(nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name_8664;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target_8658;
}
})(),obj,method_8659,arg_values));
} else {
Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8659], null)));
}
}
} else {
}
} else {
}
}
}

nex.interpreter.get_type_name(obj);

nex.interpreter.__GT_promise(nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name_8664;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target_8658;
}
})(),obj,method_8659,arg_values));


return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found on type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target_8658,new cljs.core.Keyword(null,"value","value",305978217),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8659], null)));
}));
} else {
}

var fn_obj = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),method_8659);
}catch (e6892){var _ = e6892;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_obj,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
if(nex.interpreter.nex_object_QMARK_(fn_obj)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(has_parens_8661,false)){
var G__6893 = ctx;
var G__6894 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),method_8659,new cljs.core.Keyword(null,"method","method",55703592),(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args_8660))),new cljs.core.Keyword(null,"args","args",1315556576),args_8660], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6893,G__6894) : nex.interpreter.eval_node_async.call(null,G__6893,G__6894));
} else {
return Promise.resolve(fn_obj);
}
} else {
if(has_parens_8661 === false){
return Promise.resolve(fn_obj);
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8659], null)));
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx))){
var current_obj = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,method_8659);
if(cljs.core.truth_(method_lookup)){
var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var current_env = new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(current_env,field_name);
}catch (e6895){var _ = e6895;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(current_obj));
var _ = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto__)){
var target_name = temp__5823__auto__;
return nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name,updated_obj);
} else {
return null;
}
})();
return nex.interpreter.__GT_promise((function (){var G__6896 = ctx;
var G__6897 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),method_8659,new cljs.core.Keyword(null,"args","args",1315556576),args_8660], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6896,G__6897) : nex.interpreter.eval_node_async.call(null,G__6896,G__6897));
})()).then((function (result){
var temp__5823__auto___8718 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8718)){
var target_name_8719 = temp__5823__auto___8718;
var called_obj_8720 = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_8719);
if(cljs.core.truth_(called_obj_8720)){
var seq__6898_8721 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj_8720));
var chunk__6899_8722 = null;
var count__6900_8723 = (0);
var i__6901_8724 = (0);
while(true){
if((i__6901_8724 < count__6900_8723)){
var vec__6908_8725 = chunk__6899_8722.cljs$core$IIndexed$_nth$arity$2(null,i__6901_8724);
var field_name_8726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908_8725,(0),null);
var field_val_8727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908_8725,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8726),field_val_8727);


var G__8728 = seq__6898_8721;
var G__8729 = chunk__6899_8722;
var G__8730 = count__6900_8723;
var G__8731 = (i__6901_8724 + (1));
seq__6898_8721 = G__8728;
chunk__6899_8722 = G__8729;
count__6900_8723 = G__8730;
i__6901_8724 = G__8731;
continue;
} else {
var temp__5823__auto___8732__$1 = cljs.core.seq(seq__6898_8721);
if(temp__5823__auto___8732__$1){
var seq__6898_8733__$1 = temp__5823__auto___8732__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6898_8733__$1)){
var c__5673__auto___8734 = cljs.core.chunk_first(seq__6898_8733__$1);
var G__8735 = cljs.core.chunk_rest(seq__6898_8733__$1);
var G__8736 = c__5673__auto___8734;
var G__8737 = cljs.core.count(c__5673__auto___8734);
var G__8738 = (0);
seq__6898_8721 = G__8735;
chunk__6899_8722 = G__8736;
count__6900_8723 = G__8737;
i__6901_8724 = G__8738;
continue;
} else {
var vec__6911_8739 = cljs.core.first(seq__6898_8733__$1);
var field_name_8740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6911_8739,(0),null);
var field_val_8741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6911_8739,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8740),field_val_8741);


var G__8742 = cljs.core.next(seq__6898_8733__$1);
var G__8743 = null;
var G__8744 = (0);
var G__8745 = (0);
seq__6898_8721 = G__8742;
chunk__6899_8722 = G__8743;
count__6900_8723 = G__8744;
i__6901_8724 = G__8745;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

return result;
}));
} else {
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method_8659);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined method: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8659,new cljs.core.Keyword(null,"object","object",1474613949),current_obj], null)));
}
}
} else {
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method_8659);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8659)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8659], null)));
}

}
}
}));
}
} else {
}
}
}
}
}

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"this","this",-611633625));

Promise.resolve(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582));

nex.interpreter.__GT_promise((function (){var G__6914 = ctx;
var G__6915 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6914,G__6915) : nex.interpreter.eval_node_async.call(null,G__6914,G__6915));
})()).then((function (val){
var temp__5823__auto___8746 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8746)){
var mf_8747 = temp__5823__auto___8746;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8747,cljs.core.conj,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node),val);

return val;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"assign","assign",-1590426222));

nex.interpreter.__GT_promise((function (){var G__6916 = ctx;
var G__6917 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6916,G__6917) : nex.interpreter.eval_node_async.call(null,G__6916,G__6917));
})()).then((function (val){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"let","let",-1282412701));

nex.interpreter.__GT_promise((function (){var G__6918 = ctx;
var G__6919 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6918,G__6919) : nex.interpreter.eval_node_async.call(null,G__6918,G__6919));
})()).then((function (val){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"block","block",664686210));

nex.interpreter.eval_body_async(ctx,node);

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"raise","raise",184141061));

nex.interpreter.__GT_promise((function (){var G__6920 = ctx;
var G__6921 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6920,G__6921) : nex.interpreter.eval_node_async.call(null,G__6920,G__6921));
})()).then((function (val){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"retry","retry",-614012896));

Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("retry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813)], null)));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734));

var new_env_8748 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx_8749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env_8748);
var temp__5821__auto___8750 = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto___8750)){
var rescue_8751 = temp__5821__auto___8750;
nex.interpreter.eval_body_with_rescue_async(new_ctx_8749,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node),rescue_8751);
} else {
nex.interpreter.eval_body_async(new_ctx_8749,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node));
}

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"when","when",-576417306));

nex.interpreter.__GT_promise((function (){var G__6922 = ctx;
var G__6923 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6922,G__6923) : nex.interpreter.eval_node_async.call(null,G__6922,G__6923));
})()).then((function (cond_val){
if(cljs.core.truth_(cond_val)){
return nex.interpreter.__GT_promise((function (){var G__6924 = ctx;
var G__6925 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6924,G__6925) : nex.interpreter.eval_node_async.call(null,G__6924,G__6925));
})());
} else {
return nex.interpreter.__GT_promise((function (){var G__6926 = ctx;
var G__6927 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6926,G__6927) : nex.interpreter.eval_node_async.call(null,G__6926,G__6927));
})());
}
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"convert","convert",912478626));

nex.interpreter.__GT_promise((function (){var G__6928 = ctx;
var G__6929 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6928,G__6929) : nex.interpreter.eval_node_async.call(null,G__6928,G__6929));
})()).then((function (v){
var target_name = ((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"target-type","target-type",-1795727181).cljs$core$IFn$_invoke$arity$1(node)))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target-type","target-type",-1795727181).cljs$core$IFn$_invoke$arity$1(node)):new cljs.core.Keyword(null,"target-type","target-type",-1795727181).cljs$core$IFn$_invoke$arity$1(node));
var runtime_name = nex.interpreter.runtime_type_name(v);
var ok_QMARK_ = (function (){var and__5140__auto__ = (!((v == null)));
if(and__5140__auto__){
var and__5140__auto____$1 = typeof target_name === 'string';
if(and__5140__auto____$1){
return nex.interpreter.convert_compatible_runtime_QMARK_(ctx,runtime_name,target_name);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(node),(cljs.core.truth_(ok_QMARK_)?v:null));

return ok_QMARK_;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"if","if",-458814265));

nex.interpreter.__GT_promise((function (){var G__6930 = ctx;
var G__6931 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6930,G__6931) : nex.interpreter.eval_node_async.call(null,G__6930,G__6931));
})()).then((function (cond_val){
if(cljs.core.truth_(cond_val)){
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(node)));
} else {
var eval_elseif = (function nex$interpreter$eval_node_async_$_eval_elseif(clauses){
if(cljs.core.empty_QMARK_(clauses)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node))){
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node)));
} else {
return Promise.resolve(null);
}
} else {
return nex.interpreter.__GT_promise((function (){var G__6934 = ctx;
var G__6935 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6934,G__6935) : nex.interpreter.eval_node_async.call(null,G__6934,G__6935));
})()).then((function (matched_QMARK_){
if(cljs.core.truth_(matched_QMARK_)){
return nex.interpreter.__GT_promise(nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses))));
} else {
return nex$interpreter$eval_node_async_$_eval_elseif(cljs.core.rest(clauses));
}
}));
}
});
return eval_elseif(new cljs.core.Keyword(null,"elseif","elseif",551759784).cljs$core$IFn$_invoke$arity$1(node));
}
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"case","case",1143702196));

nex.interpreter.__GT_promise((function (){var G__6936 = ctx;
var G__6937 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6936,G__6937) : nex.interpreter.eval_node_async.call(null,G__6936,G__6937));
})()).then((function (val){
var match_clauses = (function nex$interpreter$eval_node_async_$_match_clauses(clauses){
if(cljs.core.empty_QMARK_(clauses)){
var temp__5821__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var else_node = temp__5821__auto__;
return nex.interpreter.__GT_promise((nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,else_node) : nex.interpreter.eval_node_async.call(null,ctx,else_node)));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching case and no else clause",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null)));
}
} else {
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6833_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6833_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6833_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses)))).then((function (values){
if(cljs.core.truth_(cljs.core.some((function (p1__6834_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,p1__6834_SHARP_);
}),values))){
return nex.interpreter.__GT_promise((function (){var G__6940 = ctx;
var G__6941 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6940,G__6941) : nex.interpreter.eval_node_async.call(null,G__6940,G__6941));
})());
} else {
return nex$interpreter$eval_node_async_$_match_clauses(cljs.core.rest(clauses));
}
}));
}
});
return match_clauses(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node));
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"select","select",1147833503));

return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6835_SHARP_){
return nex.interpreter.prepare_select_clause_async(ctx,p1__6835_SHARP_);
}),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node))).then((function (prepared){
var timeout_ms_p = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var timeout_node = temp__5821__auto__;
return nex.interpreter.__GT_promise((function (){var G__6942 = ctx;
var G__6943 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout_node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6942,G__6943) : nex.interpreter.eval_node_async.call(null,G__6942,G__6943));
})()).then((function (v){
return nex.interpreter.timeout_ms(v);
}));
} else {
return Promise.resolve(null);
}
})();
return timeout_ms_p.then((function (timeout_ms_val){
var deadline = (cljs.core.truth_(timeout_ms_val)?(Date.now() + timeout_ms_val):null);
var attempt_loop = (function nex$interpreter$eval_node_async_$_attempt_loop(){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.attempt_select_clause_async,prepared)).then((function (outcomes){
var temp__5821__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,outcome){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(outcome))){
return i;
} else {
return null;
}
}),outcomes));
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(prepared,idx);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(outcomes,idx);
return nex.interpreter.execute_select_body_async(ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(outcome));
} else {
var temp__5821__auto____$1 = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto____$1)){
var else_body = temp__5821__auto____$1;
return nex.interpreter.eval_body_async(ctx,else_body);
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deadline;
if(cljs.core.truth_(and__5140__auto__)){
return (Date.now() >= deadline);
} else {
return and__5140__auto__;
}
})())){
return nex.interpreter.eval_body_async(ctx,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.Keyword(null,"body","body",-2049205669)], null)));
} else {
return nex.interpreter.sleep_select_step_async().then((function (_){
return nex$interpreter$eval_node_async_$_attempt_loop();
}));
}
}
}
}));
});
return attempt_loop();
}));
}),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"loop","loop",-395552849)),nex.interpreter.promise_reduce(new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(node),null,(function (_,stmt){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,stmt) : nex.interpreter.eval_node_async.call(null,ctx,stmt));
})).then((function (_){
var step = (function nex$interpreter$eval_node_async_$_step(last_result,prev_variant,iteration){
return nex.interpreter.__GT_promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"invariant","invariant",-1658446508).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var invariant = temp__5823__auto__;
return nex.interpreter.check_assertions_async(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
return null;
}
})()).then((function (___$1){
return nex.interpreter.__GT_promise((function (){var G__6946 = ctx;
var G__6947 = new cljs.core.Keyword(null,"until","until",-1189166390).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6946,G__6947) : nex.interpreter.eval_node_async.call(null,G__6946,G__6947));
})()).then((function (until_val){
if(cljs.core.truth_(until_val)){
return last_result;
} else {
return nex.interpreter.__GT_promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var variant = temp__5823__auto__;
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,variant) : nex.interpreter.eval_node_async.call(null,ctx,variant));
} else {
return null;
}
})()).then((function (curr_variant){
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"variant","variant",-424354234).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5140__auto__)){
return prev_variant;
} else {
return and__5140__auto__;
}
})())){
if((curr_variant < prev_variant)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop variant must decrease",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"iteration","iteration",-1088952049),iteration,new cljs.core.Keyword(null,"previous-variant","previous-variant",121348251),prev_variant,new cljs.core.Keyword(null,"current-variant","current-variant",260508292),curr_variant], null));
}
} else {
}

var body_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var body_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),body_env);
return nex.interpreter.eval_body_async(body_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node)).then((function (result){
return nex.interpreter.__GT_promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"invariant","invariant",-1658446508).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto__)){
var invariant = temp__5823__auto__;
return nex.interpreter.check_assertions_async(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
return null;
}
})()).then((function (___$2){
return nex$interpreter$eval_node_async_$_step(result,curr_variant,(iteration + (1)));
}));
}));
}));
}
}));
}));
});
return step(null,null,(0));
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"statement","statement",-32780863)),(function (){var G__6948 = ctx;
var G__6949 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6948,G__6949) : nex.interpreter.eval_node_async.call(null,G__6948,G__6949));
})(),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"binary","binary",-1802232288)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6950 = ctx;
var G__6951 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6950,G__6951) : nex.interpreter.eval_node_async.call(null,G__6950,G__6951));
})(),(function (){var G__6952 = ctx;
var G__6953 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6952,G__6953) : nex.interpreter.eval_node_async.call(null,G__6952,G__6953));
})()], null)).then((function (p__6954){
var vec__6955 = p__6954;
var left_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6955,(0),null);
var right_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6955,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),"+")) && (((typeof left_val === 'string') || (typeof right_val === 'string'))))){
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.concat_string_value_async(ctx,left_val),nex.interpreter.concat_string_value_async(ctx,right_val)], null)).then((function (p__6958){
var vec__6959 = p__6958;
var left_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6959,(0),null);
var right_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6959,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_str)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_str));
}));
} else {
return nex.interpreter.apply_binary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),left_val,right_val);
}
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"unary","unary",-989314568)),nex.interpreter.__GT_promise((function (){var G__6962 = ctx;
var G__6963 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6962,G__6963) : nex.interpreter.eval_node_async.call(null,G__6962,G__6963));
})()).then((function (val){
return nex.interpreter.apply_unary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"integer","integer",-604721710)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"real","real",388296937)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"char","char",-641587586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"string","string",-1989541586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"nil","nil",99600501)),Promise.resolve(null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6836_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6836_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6836_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_array_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6837_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6837_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6837_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_set_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6964){
var map__6965 = p__6964;
var map__6965__$1 = cljs.core.__destructure_map(map__6965);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6965__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6965__$1,new cljs.core.Keyword(null,"value","value",305978217));
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,key) : nex.interpreter.eval_node_async.call(null,ctx,key)),(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,value) : nex.interpreter.eval_node_async.call(null,ctx,value))], null));
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_map_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"subscript","subscript",-1484665872)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6966 = ctx;
var G__6967 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6966,G__6967) : nex.interpreter.eval_node_async.call(null,G__6966,G__6967));
})(),(function (){var G__6968 = ctx;
var G__6969 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6968,G__6969) : nex.interpreter.eval_node_async.call(null,G__6968,G__6969));
})()], null)).then((function (p__6970){
var vec__6971 = p__6970;
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6971,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6971,(1),null);
return nex.interpreter.nex_coll_get(coll,idx);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"identifier","identifier",-805503498)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"create","create",-1301499256)),(function (){var map__6974 = node;
var map__6974__$1 = cljs.core.__destructure_map(map__6974);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6974__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6974__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6974__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6974__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6838_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6838_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6838_SHARP_));
}),args)).then((function (arg_values){
var G__6975 = class_name;
switch (G__6975) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"open")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File requires constructor: create File.open(path)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"File"], null));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.first(arg_values)], null);

break;
case "Process":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Process","Process",-799294660)], null);

break;
case "Channel":
if((constructor$ == null)){
return nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$0();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"with_capacity")){
var capacity = cljs.core.first(arg_values);
if(cljs.core.integer_QMARK_(capacity)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity requires an Integer capacity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Channel",new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));
}

if((capacity < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel capacity must be non-negative",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Channel",new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));
} else {
}

return nex.interpreter.make_channel.cljs$core$IFn$_invoke$arity$1(capacity);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: Channel."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Channel",new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));

}
}

break;
case "Set":
if((constructor$ == null)){
return nex.interpreter.nex_set();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"from_array")){
var source = cljs.core.first(arg_values);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(source))){
return nex.interpreter.nex_set_from(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(source));
} else {
if(cljs.core.sequential_QMARK_(source)){
return nex.interpreter.nex_set_from(source);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set.from_array requires an array",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Set"], null));

}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: Set."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),"Set",new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));

}
}

break;
default:
var effective_class_name = ((cljs.core.seq(generic_args))?(function (){var spec_name = nex.interpreter.specialized_class_name(class_name,generic_args);
if(cljs.core.truth_(nex.interpreter.lookup_specialized_class(ctx,spec_name))){
return spec_name;
} else {
var template = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ctx)),class_name);
if(cljs.core.truth_(template)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined template class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

var specialized = nex.interpreter.specialize_class(template,generic_args);
nex.interpreter.register_specialized_class(ctx,specialized);

return spec_name;
}
})():class_name);
var class_def = nex.interpreter.lookup_class_if_exists(ctx,effective_class_name);
if(cljs.core.truth_(class_def)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"deferred?","deferred?",716798715).cljs$core$IFn$_invoke$arity$1(class_def))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot instantiate deferred class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true], null));
} else {
}

var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var initial_field_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)),nex.interpreter.get_default_field_value(new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(field)));
}),cljs.core.PersistentArrayMap.EMPTY,all_fields);
var finalize_object = (function (field_map){
var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,field_map);
var inv_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var _ = (function (){var seq__6976 = cljs.core.seq(field_map);
var chunk__6977 = null;
var count__6978 = (0);
var i__6979 = (0);
while(true){
if((i__6979 < count__6978)){
var vec__6986 = chunk__6977.cljs$core$IIndexed$_nth$arity$2(null,i__6979);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8753 = seq__6976;
var G__8754 = chunk__6977;
var G__8755 = count__6978;
var G__8756 = (i__6979 + (1));
seq__6976 = G__8753;
chunk__6977 = G__8754;
count__6978 = G__8755;
i__6979 = G__8756;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6976);
if(temp__5823__auto__){
var seq__6976__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6976__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6976__$1);
var G__8757 = cljs.core.chunk_rest(seq__6976__$1);
var G__8758 = c__5673__auto__;
var G__8759 = cljs.core.count(c__5673__auto__);
var G__8760 = (0);
seq__6976 = G__8757;
chunk__6977 = G__8758;
count__6978 = G__8759;
i__6979 = G__8760;
continue;
} else {
var vec__6989 = cljs.core.first(seq__6976__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6989,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6989,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8761 = cljs.core.next(seq__6976__$1);
var G__8762 = null;
var G__8763 = (0);
var G__8764 = (0);
seq__6976 = G__8761;
chunk__6977 = G__8762;
count__6978 = G__8763;
i__6979 = G__8764;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env);
return nex.interpreter.check_class_invariant_async(inv_ctx,class_def).then((function (___$1){
return obj;
}));
});
if(cljs.core.truth_(constructor$)){
var ctor_def = nex.interpreter.lookup_constructor_with_inheritance(ctx,class_def,constructor$);
if(cljs.core.truth_(ctor_def)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),constructor$], null));
}

var ctor_env_8765 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8766 = (function (){var seq__6992 = cljs.core.seq(initial_field_map);
var chunk__6993 = null;
var count__6994 = (0);
var i__6995 = (0);
while(true){
if((i__6995 < count__6994)){
var vec__7002 = chunk__6993.cljs$core$IIndexed$_nth$arity$2(null,i__6995);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002,(1),null);
nex.interpreter.env_define(ctor_env_8765,cljs.core.name(field_name),field_val);


var G__8772 = seq__6992;
var G__8773 = chunk__6993;
var G__8774 = count__6994;
var G__8775 = (i__6995 + (1));
seq__6992 = G__8772;
chunk__6993 = G__8773;
count__6994 = G__8774;
i__6995 = G__8775;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6992);
if(temp__5823__auto__){
var seq__6992__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6992__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6992__$1);
var G__8776 = cljs.core.chunk_rest(seq__6992__$1);
var G__8777 = c__5673__auto__;
var G__8778 = cljs.core.count(c__5673__auto__);
var G__8779 = (0);
seq__6992 = G__8776;
chunk__6993 = G__8777;
count__6994 = G__8778;
i__6995 = G__8779;
continue;
} else {
var vec__7005 = cljs.core.first(seq__6992__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7005,(1),null);
nex.interpreter.env_define(ctor_env_8765,cljs.core.name(field_name),field_val);


var G__8780 = cljs.core.next(seq__6992__$1);
var G__8781 = null;
var G__8782 = (0);
var G__8783 = (0);
seq__6992 = G__8780;
chunk__6993 = G__8781;
count__6994 = G__8782;
i__6995 = G__8783;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8767__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,ctor_env_8765,class_def);
var params_8768 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var __8769__$2 = (function (){var seq__7008 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_8768,arg_values));
var chunk__7009 = null;
var count__7010 = (0);
var i__7011 = (0);
while(true){
if((i__7011 < count__7010)){
var vec__7018 = chunk__7009.cljs$core$IIndexed$_nth$arity$2(null,i__7011);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7018,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7018,(1),null);
nex.interpreter.env_define(ctor_env_8765,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8784 = seq__7008;
var G__8785 = chunk__7009;
var G__8786 = count__7010;
var G__8787 = (i__7011 + (1));
seq__7008 = G__8784;
chunk__7009 = G__8785;
count__7010 = G__8786;
i__7011 = G__8787;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7008);
if(temp__5823__auto__){
var seq__7008__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7008__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7008__$1);
var G__8788 = cljs.core.chunk_rest(seq__7008__$1);
var G__8789 = c__5673__auto__;
var G__8790 = cljs.core.count(c__5673__auto__);
var G__8791 = (0);
seq__7008 = G__8788;
chunk__7009 = G__8789;
count__7010 = G__8790;
i__7011 = G__8791;
continue;
} else {
var vec__7021 = cljs.core.first(seq__7008__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7021,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7021,(1),null);
nex.interpreter.env_define(ctor_env_8765,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8792 = cljs.core.next(seq__7008__$1);
var G__8793 = null;
var G__8794 = (0);
var G__8795 = (0);
seq__7008 = G__8792;
chunk__7009 = G__8793;
count__7010 = G__8794;
i__7011 = G__8795;
continue;
}
} else {
return null;
}
}
break;
}
})();
var temp_obj_8770 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,initial_field_map);
var new_ctx_8771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env_8765),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj_8770),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),constructor$),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),effective_class_name,new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})(),new cljs.core.Keyword(null,"env","env",-1815813235),ctor_env_8765,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_8768;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())),new cljs.core.Keyword(null,"field-names","field-names",1897448424),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(initial_field_map))),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"debug-source","debug-source",-1178744713).cljs$core$IFn$_invoke$arity$1(ctx)], null)),new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793),((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"debug-depth","debug-depth",1253514793).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() + (1)));
nex.interpreter.__GT_promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5823__auto__)){
var require_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions_async(new_ctx_8771,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})()).then((function (___$3){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8771,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8771,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
}
})()).then((function (___$4){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(ctor_env_8765,field_name);
}catch (e7024){var ___$5 = e7024;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),initial_field_map,all_fields);
return nex.interpreter.__GT_promise((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5823__auto__)){
var ensure_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions_async(new_ctx_8771,ensure_assertions,nex.interpreter.Postcondition);
} else {
return null;
}
})()).then((function (___$5){
return finalize_object(updated_fields);
}));
}));
}));

return finalize_object(initial_field_map);
} else {
return null;
}

}
}));
})(),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"literal","literal",1664775605)),Promise.resolve(((cljs.core.map_QMARK_(node))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node):node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"old","old",-1825222690)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"with","with",-1536296876)),Promise.resolve(null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"default","default",-1987822328)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),new cljs.core.Keyword(null,"else","else",-1508377146),Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot evaluate node type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null))));

}
}
}
}
}
});
/**
 * Interpret an AST and return the context with results.
 */
nex.interpreter.interpret = (function nex$interpreter$interpret(ast){
var ctx = nex.interpreter.make_context();
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,ast);

return ctx;
});
/**
 * Interpret an AST and return the output as a vector of strings.
 */
nex.interpreter.interpret_and_get_output = (function nex$interpreter$interpret_and_get_output(ast){
var ctx = nex.interpreter.interpret(ast);
return cljs.core.deref(ctx.output);
});
/**
 * Convenience function to interpret and print output.
 */
nex.interpreter.run = (function nex$interpreter$run(ast){
var output = nex.interpreter.interpret_and_get_output(ast);
var seq__7025_8796 = cljs.core.seq(output);
var chunk__7026_8797 = null;
var count__7027_8798 = (0);
var i__7028_8799 = (0);
while(true){
if((i__7028_8799 < count__7027_8798)){
var line_8800 = chunk__7026_8797.cljs$core$IIndexed$_nth$arity$2(null,i__7028_8799);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8800], 0));


var G__8801 = seq__7025_8796;
var G__8802 = chunk__7026_8797;
var G__8803 = count__7027_8798;
var G__8804 = (i__7028_8799 + (1));
seq__7025_8796 = G__8801;
chunk__7026_8797 = G__8802;
count__7027_8798 = G__8803;
i__7028_8799 = G__8804;
continue;
} else {
var temp__5823__auto___8805 = cljs.core.seq(seq__7025_8796);
if(temp__5823__auto___8805){
var seq__7025_8806__$1 = temp__5823__auto___8805;
if(cljs.core.chunked_seq_QMARK_(seq__7025_8806__$1)){
var c__5673__auto___8807 = cljs.core.chunk_first(seq__7025_8806__$1);
var G__8808 = cljs.core.chunk_rest(seq__7025_8806__$1);
var G__8809 = c__5673__auto___8807;
var G__8810 = cljs.core.count(c__5673__auto___8807);
var G__8811 = (0);
seq__7025_8796 = G__8808;
chunk__7026_8797 = G__8809;
count__7027_8798 = G__8810;
i__7028_8799 = G__8811;
continue;
} else {
var line_8812 = cljs.core.first(seq__7025_8806__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8812], 0));


var G__8813 = cljs.core.next(seq__7025_8806__$1);
var G__8814 = null;
var G__8815 = (0);
var G__8816 = (0);
seq__7025_8796 = G__8813;
chunk__7026_8797 = G__8814;
count__7027_8798 = G__8815;
i__7028_8799 = G__8816;
continue;
}
} else {
}
}
break;
}

return output;
});

//# sourceMappingURL=nex.interpreter.js.map
