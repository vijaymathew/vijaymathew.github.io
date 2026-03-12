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
var entries = (function (){var iter__5628__auto__ = (function nex$interpreter$nex_map_str_$_iter__6070(s__6071){
return (new cljs.core.LazySeq(null,(function (){
var s__6071__$1 = s__6071;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6071__$1);
if(temp__5823__auto__){
var s__6071__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6071__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6071__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6073 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6072 = (0);
while(true){
if((i__6072 < size__5627__auto__)){
var vec__6086 = cljs.core._nth(c__5626__auto__,i__6072);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6086,(1),null);
cljs.core.chunk_append(b__6073,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(k) : nex.interpreter.nex_format_value.call(null,k)))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_format_value.call(null,v)))));

var G__7032 = (i__6072 + (1));
i__6072 = G__7032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6073),nex$interpreter$nex_map_str_$_iter__6070(cljs.core.chunk_rest(s__6071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6073),null);
}
} else {
var vec__6089 = cljs.core.first(s__6071__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6089,(1),null);
return cljs.core.cons((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(k) : nex.interpreter.nex_format_value.call(null,k)))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.nex_format_value.cljs$core$IFn$_invoke$arity$1(v) : nex.interpreter.nex_format_value.call(null,v)))),nex$interpreter$nex_map_str_$_iter__6070(cljs.core.rest(s__6071__$2)));
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
var G__7038 = ((cljs.core.odd_QMARK_(e))?(acc * b):acc);
var G__7039 = (b * b);
var G__7040 = cljs.core.quot(e,(2));
acc = G__7038;
b = G__7039;
e = G__7040;
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
var G__6132_7054 = ctx;
var G__6133_7055 = nex.interpreter.build_any_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6132_7054,G__6133_7055) : nex.interpreter.register_class.call(null,G__6132_7054,G__6133_7055));

var G__6134_7056 = ctx;
var G__6135_7057 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6134_7056,G__6135_7057) : nex.interpreter.register_class.call(null,G__6134_7056,G__6135_7057));

var G__6136_7058 = ctx;
var G__6137_7059 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6136_7058,G__6137_7059) : nex.interpreter.register_class.call(null,G__6136_7058,G__6137_7059));

var G__6138_7060 = ctx;
var G__6139_7061 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6138_7060,G__6139_7061) : nex.interpreter.register_class.call(null,G__6138_7060,G__6139_7061));

var G__6140_7062 = ctx;
var G__6141_7063 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6140_7062,G__6141_7063) : nex.interpreter.register_class.call(null,G__6140_7062,G__6141_7063));

var seq__6142_7064 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6143_7065 = null;
var count__6144_7066 = (0);
var i__6145_7067 = (0);
while(true){
if((i__6145_7067 < count__6144_7066)){
var scalar_7069 = chunk__6143_7065.cljs$core$IIndexed$_nth$arity$2(null,i__6145_7067);
var G__6150_7070 = ctx;
var G__6151_7071 = nex.interpreter.build_builtin_scalar_class(scalar_7069);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6150_7070,G__6151_7071) : nex.interpreter.register_class.call(null,G__6150_7070,G__6151_7071));


var G__7072 = seq__6142_7064;
var G__7073 = chunk__6143_7065;
var G__7074 = count__6144_7066;
var G__7075 = (i__6145_7067 + (1));
seq__6142_7064 = G__7072;
chunk__6143_7065 = G__7073;
count__6144_7066 = G__7074;
i__6145_7067 = G__7075;
continue;
} else {
var temp__5823__auto___7076 = cljs.core.seq(seq__6142_7064);
if(temp__5823__auto___7076){
var seq__6142_7077__$1 = temp__5823__auto___7076;
if(cljs.core.chunked_seq_QMARK_(seq__6142_7077__$1)){
var c__5673__auto___7078 = cljs.core.chunk_first(seq__6142_7077__$1);
var G__7079 = cljs.core.chunk_rest(seq__6142_7077__$1);
var G__7080 = c__5673__auto___7078;
var G__7081 = cljs.core.count(c__5673__auto___7078);
var G__7082 = (0);
seq__6142_7064 = G__7079;
chunk__6143_7065 = G__7080;
count__6144_7066 = G__7081;
i__6145_7067 = G__7082;
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
seq__6142_7064 = G__7086;
chunk__6143_7065 = G__7087;
count__6144_7066 = G__7088;
i__6145_7067 = G__7089;
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

var fexpr__6193_7103 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6193_7103.cljs$core$IFn$_invoke$arity$1 ? fexpr__6193_7103.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6193_7103.call(null,value));

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

var fexpr__6196_7113 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6196_7113.cljs$core$IFn$_invoke$arity$1 ? fexpr__6196_7113.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6196_7113.call(null,value));

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
var map__6204_7115 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6204_7116__$1 = cljs.core.__destructure_map(map__6204_7115);
var sender_value_7117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6204_7116__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6204_7116__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6198_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6198_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7117);
}));

(sender_resolve_7118.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7118.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7118.call(null,null));
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
var temp__5823__auto___7119 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7119)){
var timer_7120 = temp__5823__auto___7119;
clearTimeout(timer_7120);
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___7121 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7121)){
var timer_7122 = temp__5823__auto___7121;
clearTimeout(timer_7122);
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
var map__6211_7123 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6211_7124__$1 = cljs.core.__destructure_map(map__6211_7123);
var sender_value_7125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6211_7124__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6211_7124__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6208_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6208_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7125);
}));

(sender_resolve_7126.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7126.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7126.call(null,null));
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

var seq__6214_7127 = cljs.core.seq(senders);
var chunk__6215_7128 = null;
var count__6216_7129 = (0);
var i__6217_7130 = (0);
while(true){
if((i__6217_7130 < count__6216_7129)){
var map__6222_7131 = chunk__6215_7128.cljs$core$IIndexed$_nth$arity$2(null,i__6217_7130);
var map__6222_7132__$1 = cljs.core.__destructure_map(map__6222_7131);
var reject_7133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6222_7132__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6223_7134 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7133.cljs$core$IFn$_invoke$arity$1 ? reject_7133.cljs$core$IFn$_invoke$arity$1(G__6223_7134) : reject_7133.call(null,G__6223_7134));


var G__7135 = seq__6214_7127;
var G__7136 = chunk__6215_7128;
var G__7137 = count__6216_7129;
var G__7138 = (i__6217_7130 + (1));
seq__6214_7127 = G__7135;
chunk__6215_7128 = G__7136;
count__6216_7129 = G__7137;
i__6217_7130 = G__7138;
continue;
} else {
var temp__5823__auto___7139 = cljs.core.seq(seq__6214_7127);
if(temp__5823__auto___7139){
var seq__6214_7140__$1 = temp__5823__auto___7139;
if(cljs.core.chunked_seq_QMARK_(seq__6214_7140__$1)){
var c__5673__auto___7141 = cljs.core.chunk_first(seq__6214_7140__$1);
var G__7142 = cljs.core.chunk_rest(seq__6214_7140__$1);
var G__7143 = c__5673__auto___7141;
var G__7144 = cljs.core.count(c__5673__auto___7141);
var G__7145 = (0);
seq__6214_7127 = G__7142;
chunk__6215_7128 = G__7143;
count__6216_7129 = G__7144;
i__6217_7130 = G__7145;
continue;
} else {
var map__6224_7147 = cljs.core.first(seq__6214_7140__$1);
var map__6224_7148__$1 = cljs.core.__destructure_map(map__6224_7147);
var reject_7149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6224_7148__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6225_7150 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7149.cljs$core$IFn$_invoke$arity$1 ? reject_7149.cljs$core$IFn$_invoke$arity$1(G__6225_7150) : reject_7149.call(null,G__6225_7150));


var G__7151 = cljs.core.next(seq__6214_7140__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__6214_7127 = G__7151;
chunk__6215_7128 = G__7152;
count__6216_7129 = G__7153;
i__6217_7130 = G__7154;
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
var result_7184 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7184)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7185 = seq__6255;
var G__7186 = chunk__6256;
var G__7187 = count__6257;
var G__7188 = (i__6258 + (1));
seq__6255 = G__7185;
chunk__6256 = G__7186;
count__6257 = G__7187;
i__6258 = G__7188;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6255);
if(temp__5823__auto__){
var seq__6255__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6255__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6255__$1);
var G__7189 = cljs.core.chunk_rest(seq__6255__$1);
var G__7190 = c__5673__auto__;
var G__7191 = cljs.core.count(c__5673__auto__);
var G__7192 = (0);
seq__6255 = G__7189;
chunk__6256 = G__7190;
count__6257 = G__7191;
i__6258 = G__7192;
continue;
} else {
var map__6262 = cljs.core.first(seq__6255__$1);
var map__6262__$1 = cljs.core.__destructure_map(map__6262);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6262__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6262__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7197 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7197)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7198 = cljs.core.next(seq__6255__$1);
var G__7199 = null;
var G__7200 = (0);
var G__7201 = (0);
seq__6255 = G__7198;
chunk__6256 = G__7199;
count__6257 = G__7200;
i__6258 = G__7201;
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


var G__7216 = seq__6322;
var G__7217 = chunk__6323;
var G__7218 = count__6324;
var G__7219 = (i__6325 + (1));
seq__6322 = G__7216;
chunk__6323 = G__7217;
count__6324 = G__7218;
i__6325 = G__7219;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6322);
if(temp__5823__auto__){
var seq__6322__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6322__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6322__$1);
var G__7220 = cljs.core.chunk_rest(seq__6322__$1);
var G__7221 = c__5673__auto__;
var G__7222 = cljs.core.count(c__5673__auto__);
var G__7223 = (0);
seq__6322 = G__7220;
chunk__6323 = G__7221;
count__6324 = G__7222;
i__6325 = G__7223;
continue;
} else {
var constant = cljs.core.first(seq__6322__$1);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__7224 = cljs.core.next(seq__6322__$1);
var G__7225 = null;
var G__7226 = (0);
var G__7227 = (0);
seq__6322 = G__7224;
chunk__6323 = G__7225;
count__6324 = G__7226;
i__6325 = G__7227;
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
var G__7232__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7232 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7233__i = 0, G__7233__a = new Array(arguments.length -  1);
while (G__7233__i < G__7233__a.length) {G__7233__a[G__7233__i] = arguments[G__7233__i + 1]; ++G__7233__i;}
  args = new cljs.core.IndexedSeq(G__7233__a,0,null);
} 
return G__7232__delegate.call(this,ctx,args);};
G__7232.cljs$lang$maxFixedArity = 1;
G__7232.cljs$lang$applyTo = (function (arglist__7234){
var ctx = cljs.core.first(arglist__7234);
var args = cljs.core.rest(arglist__7234);
return G__7232__delegate(ctx,args);
});
G__7232.cljs$core$IFn$_invoke$arity$variadic = G__7232__delegate;
return G__7232;
})()
,"println",(function() { 
var G__7235__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7235 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7236__i = 0, G__7236__a = new Array(arguments.length -  1);
while (G__7236__i < G__7236__a.length) {G__7236__a[G__7236__i] = arguments[G__7236__i + 1]; ++G__7236__i;}
  args = new cljs.core.IndexedSeq(G__7236__a,0,null);
} 
return G__7235__delegate.call(this,ctx,args);};
G__7235.cljs$lang$maxFixedArity = 1;
G__7235.cljs$lang$applyTo = (function (arglist__7237){
var ctx = cljs.core.first(arglist__7237);
var args = cljs.core.rest(arglist__7237);
return G__7235__delegate(ctx,args);
});
G__7235.cljs$core$IFn$_invoke$arity$variadic = G__7235__delegate;
return G__7235;
})()
,"type_of",(function() { 
var G__7238__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__7238 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7239__i = 0, G__7239__a = new Array(arguments.length -  1);
while (G__7239__i < G__7239__a.length) {G__7239__a[G__7239__i] = arguments[G__7239__i + 1]; ++G__7239__i;}
  args = new cljs.core.IndexedSeq(G__7239__a,0,null);
} 
return G__7238__delegate.call(this,ctx,args);};
G__7238.cljs$lang$maxFixedArity = 1;
G__7238.cljs$lang$applyTo = (function (arglist__7240){
var ctx = cljs.core.first(arglist__7240);
var args = cljs.core.rest(arglist__7240);
return G__7238__delegate(ctx,args);
});
G__7238.cljs$core$IFn$_invoke$arity$variadic = G__7238__delegate;
return G__7238;
})()
,"type_is",(function() { 
var G__7241__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6348 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6348,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6348,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__7241 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7242__i = 0, G__7242__a = new Array(arguments.length -  1);
while (G__7242__i < G__7242__a.length) {G__7242__a[G__7242__i] = arguments[G__7242__i + 1]; ++G__7242__i;}
  args = new cljs.core.IndexedSeq(G__7242__a,0,null);
} 
return G__7241__delegate.call(this,ctx,args);};
G__7241.cljs$lang$maxFixedArity = 1;
G__7241.cljs$lang$applyTo = (function (arglist__7243){
var ctx = cljs.core.first(arglist__7243);
var args = cljs.core.rest(arglist__7243);
return G__7241__delegate(ctx,args);
});
G__7241.cljs$core$IFn$_invoke$arity$variadic = G__7241__delegate;
return G__7241;
})()
,"await_all",(function() { 
var G__7244__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6351_7245 = cljs.core.seq(tasks);
var chunk__6352_7246 = null;
var count__6353_7247 = (0);
var i__6354_7248 = (0);
while(true){
if((i__6354_7248 < count__6353_7247)){
var task_7249 = chunk__6352_7246.cljs$core$IIndexed$_nth$arity$2(null,i__6354_7248);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7249),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7249)], null));
}


var G__7254 = seq__6351_7245;
var G__7255 = chunk__6352_7246;
var G__7256 = count__6353_7247;
var G__7257 = (i__6354_7248 + (1));
seq__6351_7245 = G__7254;
chunk__6352_7246 = G__7255;
count__6353_7247 = G__7256;
i__6354_7248 = G__7257;
continue;
} else {
var temp__5823__auto___7258 = cljs.core.seq(seq__6351_7245);
if(temp__5823__auto___7258){
var seq__6351_7259__$1 = temp__5823__auto___7258;
if(cljs.core.chunked_seq_QMARK_(seq__6351_7259__$1)){
var c__5673__auto___7260 = cljs.core.chunk_first(seq__6351_7259__$1);
var G__7261 = cljs.core.chunk_rest(seq__6351_7259__$1);
var G__7262 = c__5673__auto___7260;
var G__7263 = cljs.core.count(c__5673__auto___7260);
var G__7264 = (0);
seq__6351_7245 = G__7261;
chunk__6352_7246 = G__7262;
count__6353_7247 = G__7263;
i__6354_7248 = G__7264;
continue;
} else {
var task_7265 = cljs.core.first(seq__6351_7259__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7265),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7265)], null));
}


var G__7266 = cljs.core.next(seq__6351_7259__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__6351_7245 = G__7266;
chunk__6352_7246 = G__7267;
count__6353_7247 = G__7268;
i__6354_7248 = G__7269;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_all_tasks(tasks);
};
var G__7244 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7270__i = 0, G__7270__a = new Array(arguments.length -  1);
while (G__7270__i < G__7270__a.length) {G__7270__a[G__7270__i] = arguments[G__7270__i + 1]; ++G__7270__i;}
  args = new cljs.core.IndexedSeq(G__7270__a,0,null);
} 
return G__7244__delegate.call(this,_ctx,args);};
G__7244.cljs$lang$maxFixedArity = 1;
G__7244.cljs$lang$applyTo = (function (arglist__7271){
var _ctx = cljs.core.first(arglist__7271);
var args = cljs.core.rest(arglist__7271);
return G__7244__delegate(_ctx,args);
});
G__7244.cljs$core$IFn$_invoke$arity$variadic = G__7244__delegate;
return G__7244;
})()
,"await_any",(function() { 
var G__7272__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6355_7273 = cljs.core.seq(tasks);
var chunk__6356_7274 = null;
var count__6357_7275 = (0);
var i__6358_7276 = (0);
while(true){
if((i__6358_7276 < count__6357_7275)){
var task_7277 = chunk__6356_7274.cljs$core$IIndexed$_nth$arity$2(null,i__6358_7276);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7277),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7277)], null));
}


var G__7278 = seq__6355_7273;
var G__7279 = chunk__6356_7274;
var G__7280 = count__6357_7275;
var G__7281 = (i__6358_7276 + (1));
seq__6355_7273 = G__7278;
chunk__6356_7274 = G__7279;
count__6357_7275 = G__7280;
i__6358_7276 = G__7281;
continue;
} else {
var temp__5823__auto___7282 = cljs.core.seq(seq__6355_7273);
if(temp__5823__auto___7282){
var seq__6355_7283__$1 = temp__5823__auto___7282;
if(cljs.core.chunked_seq_QMARK_(seq__6355_7283__$1)){
var c__5673__auto___7284 = cljs.core.chunk_first(seq__6355_7283__$1);
var G__7285 = cljs.core.chunk_rest(seq__6355_7283__$1);
var G__7286 = c__5673__auto___7284;
var G__7287 = cljs.core.count(c__5673__auto___7284);
var G__7288 = (0);
seq__6355_7273 = G__7285;
chunk__6356_7274 = G__7286;
count__6357_7275 = G__7287;
i__6358_7276 = G__7288;
continue;
} else {
var task_7289 = cljs.core.first(seq__6355_7283__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7289),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7289)], null));
}


var G__7290 = cljs.core.next(seq__6355_7283__$1);
var G__7291 = null;
var G__7292 = (0);
var G__7293 = (0);
seq__6355_7273 = G__7290;
chunk__6356_7274 = G__7291;
count__6357_7275 = G__7292;
i__6358_7276 = G__7293;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_any_task(tasks);
};
var G__7272 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7294__i = 0, G__7294__a = new Array(arguments.length -  1);
while (G__7294__i < G__7294__a.length) {G__7294__a[G__7294__i] = arguments[G__7294__i + 1]; ++G__7294__i;}
  args = new cljs.core.IndexedSeq(G__7294__a,0,null);
} 
return G__7272__delegate.call(this,_ctx,args);};
G__7272.cljs$lang$maxFixedArity = 1;
G__7272.cljs$lang$applyTo = (function (arglist__7295){
var _ctx = cljs.core.first(arglist__7295);
var args = cljs.core.rest(arglist__7295);
return G__7272__delegate(_ctx,args);
});
G__7272.cljs$core$IFn$_invoke$arity$variadic = G__7272__delegate;
return G__7272;
})()
,"sleep",(function() { 
var G__7296__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sleep expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"sleep",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}


return null;
};
var G__7296 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7297__i = 0, G__7297__a = new Array(arguments.length -  1);
while (G__7297__i < G__7297__a.length) {G__7297__a[G__7297__i] = arguments[G__7297__i + 1]; ++G__7297__i;}
  args = new cljs.core.IndexedSeq(G__7297__a,0,null);
} 
return G__7296__delegate.call(this,_ctx,args);};
G__7296.cljs$lang$maxFixedArity = 1;
G__7296.cljs$lang$applyTo = (function (arglist__7298){
var _ctx = cljs.core.first(arglist__7298);
var args = cljs.core.rest(arglist__7298);
return G__7296__delegate(_ctx,args);
});
G__7296.cljs$core$IFn$_invoke$arity$variadic = G__7296__delegate;
return G__7296;
})()
], null);
nex.interpreter.nex_ordering_compare = (function nex$interpreter$nex_ordering_compare(x,y){
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
}catch (e6359){var _ = e6359;
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
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6360 = op;
switch (G__6360) {
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
return (nex.interpreter.nex_ordering_compare(left,right) < (0));

break;
case "<=":
return (!((nex.interpreter.nex_ordering_compare(left,right) > (0))));

break;
case ">":
return (nex.interpreter.nex_ordering_compare(left,right) > (0));

break;
case ">=":
return (!((nex.interpreter.nex_ordering_compare(left,right) < (0))));

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
var result = (function (){var G__6361 = ctx;
var G__6362 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"method","method",55703592),"to_string",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6361,G__6362) : nex.interpreter.eval_node.call(null,G__6361,G__6362));
})();
if(typeof result === 'string'){
return result;
} else {
return nex.interpreter.nex_format_value(result);
}
} else {
var G__6363 = null;
var G__6364 = value;
var G__6365 = "to_string";
var G__6366 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6363,G__6364,G__6365,G__6366) : nex.interpreter.call_builtin_method.call(null,G__6363,G__6364,G__6365,G__6366));
}
} else {
var G__6367 = null;
var G__6368 = value;
var G__6369 = "to_string";
var G__6370 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6367,G__6368,G__6369,G__6370) : nex.interpreter.call_builtin_method.call(null,G__6367,G__6368,G__6369,G__6370));

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
return nex.interpreter.__GT_promise((function (){var G__6371 = ctx;
var G__6372 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"method","method",55703592),"to_string",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6371,G__6372) : nex.interpreter.eval_node_async.call(null,G__6371,G__6372));
})()).then((function (result){
if(typeof result === 'string'){
return result;
} else {
return nex.interpreter.nex_format_value(result);
}
}));
} else {
return Promise.resolve((function (){var G__6373 = null;
var G__6374 = value;
var G__6375 = "to_string";
var G__6376 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6373,G__6374,G__6375,G__6376) : nex.interpreter.call_builtin_method.call(null,G__6373,G__6374,G__6375,G__6376));
})());
}
} else {
return Promise.resolve((function (){var G__6377 = null;
var G__6378 = value;
var G__6379 = "to_string";
var G__6380 = cljs.core.PersistentVector.EMPTY;
return (nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4 ? nex.interpreter.call_builtin_method.cljs$core$IFn$_invoke$arity$4(G__6377,G__6378,G__6379,G__6380) : nex.interpreter.call_builtin_method.call(null,G__6377,G__6378,G__6379,G__6380));
})());

}
}
});
/**
 * Apply a unary operator to a value.
 */
nex.interpreter.apply_unary_op = (function nex$interpreter$apply_unary_op(op,value){
var G__6381 = op;
switch (G__6381) {
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
var G__6382 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6382) {
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
var G__6383 = field_type;
switch (G__6383) {
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
return nex.interpreter.nex_ordering_compare(x,y);
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"Array","Array",-2064027806),new cljs.core.Keyword(null,"Integer64","Integer64",-1582960571),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"Any","Any",-363039258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"Map","Map",-197728088),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"Set","Set",-1553598550),new cljs.core.Keyword(null,"Channel","Channel",1087781355),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"Integer","Integer",-641373298),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604),new cljs.core.Keyword(null,"Task","Task",-409968362),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"Console","Console",-423236809),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"Char","Char",2025763229),new cljs.core.Keyword(null,"Real","Real",-1266238786),new cljs.core.Keyword(null,"String","String",584378334)],[new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7305__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c),cljs.core.vec(cljs.core.es6_iterator_seq(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c).values())));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7305 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7306__i = 0, G__7306__a = new Array(arguments.length -  1);
while (G__7306__i < G__7306__a.length) {G__7306__a[G__7306__i] = arguments[G__7306__i + 1]; ++G__7306__i;}
  _ = new cljs.core.IndexedSeq(G__7306__a,0,null);
} 
return G__7305__delegate.call(this,c,_);};
G__7305.cljs$lang$maxFixedArity = 1;
G__7305.cljs$lang$applyTo = (function (arglist__7307){
var c = cljs.core.first(arglist__7307);
var _ = cljs.core.rest(arglist__7307);
return G__7305__delegate(c,_);
});
G__7305.cljs$core$IFn$_invoke$arity$variadic = G__7305__delegate;
return G__7305;
})()
,"item",(function() { 
var G__7308__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vals,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7308 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7309__i = 0, G__7309__a = new Array(arguments.length -  1);
while (G__7309__i < G__7309__a.length) {G__7309__a[G__7309__i] = arguments[G__7309__i + 1]; ++G__7309__i;}
  _ = new cljs.core.IndexedSeq(G__7309__a,0,null);
} 
return G__7308__delegate.call(this,c,_);};
G__7308.cljs$lang$maxFixedArity = 1;
G__7308.cljs$lang$applyTo = (function (arglist__7310){
var c = cljs.core.first(arglist__7310);
var _ = cljs.core.rest(arglist__7310);
return G__7308__delegate(c,_);
});
G__7308.cljs$core$IFn$_invoke$arity$variadic = G__7308__delegate;
return G__7308;
})()
,"next",(function() { 
var G__7311__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7311 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7312__i = 0, G__7312__a = new Array(arguments.length -  1);
while (G__7312__i < G__7312__a.length) {G__7312__a[G__7312__i] = arguments[G__7312__i + 1]; ++G__7312__i;}
  _ = new cljs.core.IndexedSeq(G__7312__a,0,null);
} 
return G__7311__delegate.call(this,c,_);};
G__7311.cljs$lang$maxFixedArity = 1;
G__7311.cljs$lang$applyTo = (function (arglist__7313){
var c = cljs.core.first(arglist__7313);
var _ = cljs.core.rest(arglist__7313);
return G__7311__delegate(c,_);
});
G__7311.cljs$core$IFn$_invoke$arity$variadic = G__7311__delegate;
return G__7311;
})()
,"at_end",(function() { 
var G__7314__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7314 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7315__i = 0, G__7315__a = new Array(arguments.length -  1);
while (G__7315__i < G__7315__a.length) {G__7315__a[G__7315__i] = arguments[G__7315__i + 1]; ++G__7315__i;}
  _ = new cljs.core.IndexedSeq(G__7315__a,0,null);
} 
return G__7314__delegate.call(this,c,_);};
G__7314.cljs$lang$maxFixedArity = 1;
G__7314.cljs$lang$applyTo = (function (arglist__7316){
var c = cljs.core.first(arglist__7316);
var _ = cljs.core.rest(arglist__7316);
return G__7314__delegate(c,_);
});
G__7314.cljs$core$IFn$_invoke$arity$variadic = G__7314__delegate;
return G__7314;
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
G__7351.cljs$lang$applyTo = (function (arglist__7354){
var arr = cljs.core.first(arglist__7354);
arglist__7354 = cljs.core.next(arglist__7354);
var value = cljs.core.first(arglist__7354);
var _ = cljs.core.rest(arglist__7354);
return G__7351__delegate(arr,value,_);
});
G__7351.cljs$core$IFn$_invoke$arity$variadic = G__7351__delegate;
return G__7351;
})()
,(function() { 
var G__7355__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__7355 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7356__i = 0, G__7356__a = new Array(arguments.length -  2);
while (G__7356__i < G__7356__a.length) {G__7356__a[G__7356__i] = arguments[G__7356__i + 2]; ++G__7356__i;}
  _ = new cljs.core.IndexedSeq(G__7356__a,0,null);
} 
return G__7355__delegate.call(this,arr,elem,_);};
G__7355.cljs$lang$maxFixedArity = 2;
G__7355.cljs$lang$applyTo = (function (arglist__7357){
var arr = cljs.core.first(arglist__7357);
arglist__7357 = cljs.core.next(arglist__7357);
var elem = cljs.core.first(arglist__7357);
var _ = cljs.core.rest(arglist__7357);
return G__7355__delegate(arr,elem,_);
});
G__7355.cljs$core$IFn$_invoke$arity$variadic = G__7355__delegate;
return G__7355;
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
var G__7400__delegate = function (n,other,_){
return (n / other);
};
var G__7400 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7401__i = 0, G__7401__a = new Array(arguments.length -  2);
while (G__7401__i < G__7401__a.length) {G__7401__a[G__7401__i] = arguments[G__7401__i + 2]; ++G__7401__i;}
  _ = new cljs.core.IndexedSeq(G__7401__a,0,null);
} 
return G__7400__delegate.call(this,n,other,_);};
G__7400.cljs$lang$maxFixedArity = 2;
G__7400.cljs$lang$applyTo = (function (arglist__7402){
var n = cljs.core.first(arglist__7402);
arglist__7402 = cljs.core.next(arglist__7402);
var other = cljs.core.first(arglist__7402);
var _ = cljs.core.rest(arglist__7402);
return G__7400__delegate(n,other,_);
});
G__7400.cljs$core$IFn$_invoke$arity$variadic = G__7400__delegate;
return G__7400;
})()
,(function() { 
var G__7403__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7403 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7404__i = 0, G__7404__a = new Array(arguments.length -  1);
while (G__7404__i < G__7404__a.length) {G__7404__a[G__7404__i] = arguments[G__7404__i + 1]; ++G__7404__i;}
  _ = new cljs.core.IndexedSeq(G__7404__a,0,null);
} 
return G__7403__delegate.call(this,n,_);};
G__7403.cljs$lang$maxFixedArity = 1;
G__7403.cljs$lang$applyTo = (function (arglist__7405){
var n = cljs.core.first(arglist__7405);
var _ = cljs.core.rest(arglist__7405);
return G__7403__delegate(n,_);
});
G__7403.cljs$core$IFn$_invoke$arity$variadic = G__7403__delegate;
return G__7403;
})()
,(function() { 
var G__7406__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7406 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7407__i = 0, G__7407__a = new Array(arguments.length -  2);
while (G__7407__i < G__7407__a.length) {G__7407__a[G__7407__i] = arguments[G__7407__i + 2]; ++G__7407__i;}
  _ = new cljs.core.IndexedSeq(G__7407__a,0,null);
} 
return G__7406__delegate.call(this,n,other,_);};
G__7406.cljs$lang$maxFixedArity = 2;
G__7406.cljs$lang$applyTo = (function (arglist__7408){
var n = cljs.core.first(arglist__7408);
arglist__7408 = cljs.core.next(arglist__7408);
var other = cljs.core.first(arglist__7408);
var _ = cljs.core.rest(arglist__7408);
return G__7406__delegate(n,other,_);
});
G__7406.cljs$core$IFn$_invoke$arity$variadic = G__7406__delegate;
return G__7406;
})()
,(function() { 
var G__7409__delegate = function (n,other,_){
return (n >= other);
};
var G__7409 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7410__i = 0, G__7410__a = new Array(arguments.length -  2);
while (G__7410__i < G__7410__a.length) {G__7410__a[G__7410__i] = arguments[G__7410__i + 2]; ++G__7410__i;}
  _ = new cljs.core.IndexedSeq(G__7410__a,0,null);
} 
return G__7409__delegate.call(this,n,other,_);};
G__7409.cljs$lang$maxFixedArity = 2;
G__7409.cljs$lang$applyTo = (function (arglist__7411){
var n = cljs.core.first(arglist__7411);
arglist__7411 = cljs.core.next(arglist__7411);
var other = cljs.core.first(arglist__7411);
var _ = cljs.core.rest(arglist__7411);
return G__7409__delegate(n,other,_);
});
G__7409.cljs$core$IFn$_invoke$arity$variadic = G__7409__delegate;
return G__7409;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__7412__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__7412 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7413__i = 0, G__7413__a = new Array(arguments.length -  1);
while (G__7413__i < G__7413__a.length) {G__7413__a[G__7413__i] = arguments[G__7413__i + 1]; ++G__7413__i;}
  _ = new cljs.core.IndexedSeq(G__7413__a,0,null);
} 
return G__7412__delegate.call(this,img,_);};
G__7412.cljs$lang$maxFixedArity = 1;
G__7412.cljs$lang$applyTo = (function (arglist__7414){
var img = cljs.core.first(arglist__7414);
var _ = cljs.core.rest(arglist__7414);
return G__7412__delegate(img,_);
});
G__7412.cljs$core$IFn$_invoke$arity$variadic = G__7412__delegate;
return G__7412;
})()
,"height",(function() { 
var G__7415__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__7415 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7416__i = 0, G__7416__a = new Array(arguments.length -  1);
while (G__7416__i < G__7416__a.length) {G__7416__a[G__7416__i] = arguments[G__7416__i + 1]; ++G__7416__i;}
  _ = new cljs.core.IndexedSeq(G__7416__a,0,null);
} 
return G__7415__delegate.call(this,img,_);};
G__7415.cljs$lang$maxFixedArity = 1;
G__7415.cljs$lang$applyTo = (function (arglist__7417){
var img = cljs.core.first(arglist__7417);
var _ = cljs.core.rest(arglist__7417);
return G__7415__delegate(img,_);
});
G__7415.cljs$core$IFn$_invoke$arity$variadic = G__7415__delegate;
return G__7415;
})()
], null),new cljs.core.PersistentArrayMap(null, 3, ["to_string",(function() { 
var G__7418__delegate = function (v,_){
return nex.interpreter.nex_format_value(v);
};
var G__7418 = function (v,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7419__i = 0, G__7419__a = new Array(arguments.length -  1);
while (G__7419__i < G__7419__a.length) {G__7419__a[G__7419__i] = arguments[G__7419__i + 1]; ++G__7419__i;}
  _ = new cljs.core.IndexedSeq(G__7419__a,0,null);
} 
return G__7418__delegate.call(this,v,_);};
G__7418.cljs$lang$maxFixedArity = 1;
G__7418.cljs$lang$applyTo = (function (arglist__7420){
var v = cljs.core.first(arglist__7420);
var _ = cljs.core.rest(arglist__7420);
return G__7418__delegate(v,_);
});
G__7418.cljs$core$IFn$_invoke$arity$variadic = G__7418__delegate;
return G__7418;
})()
,"equals",(function() { 
var G__7421__delegate = function (v,other,_){
return Object.is(v,other);
};
var G__7421 = function (v,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7422__i = 0, G__7422__a = new Array(arguments.length -  2);
while (G__7422__i < G__7422__a.length) {G__7422__a[G__7422__i] = arguments[G__7422__i + 2]; ++G__7422__i;}
  _ = new cljs.core.IndexedSeq(G__7422__a,0,null);
} 
return G__7421__delegate.call(this,v,other,_);};
G__7421.cljs$lang$maxFixedArity = 2;
G__7421.cljs$lang$applyTo = (function (arglist__7423){
var v = cljs.core.first(arglist__7423);
arglist__7423 = cljs.core.next(arglist__7423);
var other = cljs.core.first(arglist__7423);
var _ = cljs.core.rest(arglist__7423);
return G__7421__delegate(v,other,_);
});
G__7421.cljs$core$IFn$_invoke$arity$variadic = G__7421__delegate;
return G__7421;
})()
,"clone",(function() { 
var G__7424__delegate = function (v,_){
return nex.interpreter.nex_clone_value(v);
};
var G__7424 = function (v,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7425__i = 0, G__7425__a = new Array(arguments.length -  1);
while (G__7425__i < G__7425__a.length) {G__7425__a[G__7425__i] = arguments[G__7425__i + 1]; ++G__7425__i;}
  _ = new cljs.core.IndexedSeq(G__7425__a,0,null);
} 
return G__7424__delegate.call(this,v,_);};
G__7424.cljs$lang$maxFixedArity = 1;
G__7424.cljs$lang$applyTo = (function (arglist__7426){
var v = cljs.core.first(arglist__7426);
var _ = cljs.core.rest(arglist__7426);
return G__7424__delegate(v,_);
});
G__7424.cljs$core$IFn$_invoke$arity$variadic = G__7424__delegate;
return G__7424;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7427__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7427 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7428__i = 0, G__7428__a = new Array(arguments.length -  1);
while (G__7428__i < G__7428__a.length) {G__7428__a[G__7428__i] = arguments[G__7428__i + 1]; ++G__7428__i;}
  _ = new cljs.core.IndexedSeq(G__7428__a,0,null);
} 
return G__7427__delegate.call(this,c,_);};
G__7427.cljs$lang$maxFixedArity = 1;
G__7427.cljs$lang$applyTo = (function (arglist__7429){
var c = cljs.core.first(arglist__7429);
var _ = cljs.core.rest(arglist__7429);
return G__7427__delegate(c,_);
});
G__7427.cljs$core$IFn$_invoke$arity$variadic = G__7427__delegate;
return G__7427;
})()
,"item",(function() { 
var G__7430__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7430 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7431__i = 0, G__7431__a = new Array(arguments.length -  1);
while (G__7431__i < G__7431__a.length) {G__7431__a[G__7431__i] = arguments[G__7431__i + 1]; ++G__7431__i;}
  _ = new cljs.core.IndexedSeq(G__7431__a,0,null);
} 
return G__7430__delegate.call(this,c,_);};
G__7430.cljs$lang$maxFixedArity = 1;
G__7430.cljs$lang$applyTo = (function (arglist__7432){
var c = cljs.core.first(arglist__7432);
var _ = cljs.core.rest(arglist__7432);
return G__7430__delegate(c,_);
});
G__7430.cljs$core$IFn$_invoke$arity$variadic = G__7430__delegate;
return G__7430;
})()
,"next",(function() { 
var G__7433__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7433 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7434__i = 0, G__7434__a = new Array(arguments.length -  1);
while (G__7434__i < G__7434__a.length) {G__7434__a[G__7434__i] = arguments[G__7434__i + 1]; ++G__7434__i;}
  _ = new cljs.core.IndexedSeq(G__7434__a,0,null);
} 
return G__7433__delegate.call(this,c,_);};
G__7433.cljs$lang$maxFixedArity = 1;
G__7433.cljs$lang$applyTo = (function (arglist__7435){
var c = cljs.core.first(arglist__7435);
var _ = cljs.core.rest(arglist__7435);
return G__7433__delegate(c,_);
});
G__7433.cljs$core$IFn$_invoke$arity$variadic = G__7433__delegate;
return G__7433;
})()
,"at_end",(function() { 
var G__7436__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7436 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7437__i = 0, G__7437__a = new Array(arguments.length -  1);
while (G__7437__i < G__7437__a.length) {G__7437__a[G__7437__i] = arguments[G__7437__i + 1]; ++G__7437__i;}
  _ = new cljs.core.IndexedSeq(G__7437__a,0,null);
} 
return G__7436__delegate.call(this,c,_);};
G__7436.cljs$lang$maxFixedArity = 1;
G__7436.cljs$lang$applyTo = (function (arglist__7438){
var c = cljs.core.first(arglist__7438);
var _ = cljs.core.rest(arglist__7438);
return G__7436__delegate(c,_);
});
G__7436.cljs$core$IFn$_invoke$arity$variadic = G__7436__delegate;
return G__7436;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","to_string","try_get","cursor","remove","clone","size","get","equals","contains_key"],[(function() { 
var G__7439__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__7439 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7440__i = 0, G__7440__a = new Array(arguments.length -  1);
while (G__7440__i < G__7440__a.length) {G__7440__a[G__7440__i] = arguments[G__7440__i + 1]; ++G__7440__i;}
  _ = new cljs.core.IndexedSeq(G__7440__a,0,null);
} 
return G__7439__delegate.call(this,m,_);};
G__7439.cljs$lang$maxFixedArity = 1;
G__7439.cljs$lang$applyTo = (function (arglist__7441){
var m = cljs.core.first(arglist__7441);
var _ = cljs.core.rest(arglist__7441);
return G__7439__delegate(m,_);
});
G__7439.cljs$core$IFn$_invoke$arity$variadic = G__7439__delegate;
return G__7439;
})()
,(function() { 
var G__7442__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__7442 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7443__i = 0, G__7443__a = new Array(arguments.length -  1);
while (G__7443__i < G__7443__a.length) {G__7443__a[G__7443__i] = arguments[G__7443__i + 1]; ++G__7443__i;}
  _ = new cljs.core.IndexedSeq(G__7443__a,0,null);
} 
return G__7442__delegate.call(this,m,_);};
G__7442.cljs$lang$maxFixedArity = 1;
G__7442.cljs$lang$applyTo = (function (arglist__7444){
var m = cljs.core.first(arglist__7444);
var _ = cljs.core.rest(arglist__7444);
return G__7442__delegate(m,_);
});
G__7442.cljs$core$IFn$_invoke$arity$variadic = G__7442__delegate;
return G__7442;
})()
,(function() { 
var G__7445__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__7445 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7446__i = 0, G__7446__a = new Array(arguments.length -  3);
while (G__7446__i < G__7446__a.length) {G__7446__a[G__7446__i] = arguments[G__7446__i + 3]; ++G__7446__i;}
  _ = new cljs.core.IndexedSeq(G__7446__a,0,null);
} 
return G__7445__delegate.call(this,m,key,val,_);};
G__7445.cljs$lang$maxFixedArity = 3;
G__7445.cljs$lang$applyTo = (function (arglist__7447){
var m = cljs.core.first(arglist__7447);
arglist__7447 = cljs.core.next(arglist__7447);
var key = cljs.core.first(arglist__7447);
arglist__7447 = cljs.core.next(arglist__7447);
var val = cljs.core.first(arglist__7447);
var _ = cljs.core.rest(arglist__7447);
return G__7445__delegate(m,key,val,_);
});
G__7445.cljs$core$IFn$_invoke$arity$variadic = G__7445__delegate;
return G__7445;
})()
,(function() { 
var G__7448__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__7448 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7449__i = 0, G__7449__a = new Array(arguments.length -  1);
while (G__7449__i < G__7449__a.length) {G__7449__a[G__7449__i] = arguments[G__7449__i + 1]; ++G__7449__i;}
  _ = new cljs.core.IndexedSeq(G__7449__a,0,null);
} 
return G__7448__delegate.call(this,m,_);};
G__7448.cljs$lang$maxFixedArity = 1;
G__7448.cljs$lang$applyTo = (function (arglist__7450){
var m = cljs.core.first(arglist__7450);
var _ = cljs.core.rest(arglist__7450);
return G__7448__delegate(m,_);
});
G__7448.cljs$core$IFn$_invoke$arity$variadic = G__7448__delegate;
return G__7448;
})()
,(function() { 
var G__7451__delegate = function (m,_){
return nex.interpreter.nex_map_str(m);
};
var G__7451 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7452__i = 0, G__7452__a = new Array(arguments.length -  1);
while (G__7452__i < G__7452__a.length) {G__7452__a[G__7452__i] = arguments[G__7452__i + 1]; ++G__7452__i;}
  _ = new cljs.core.IndexedSeq(G__7452__a,0,null);
} 
return G__7451__delegate.call(this,m,_);};
G__7451.cljs$lang$maxFixedArity = 1;
G__7451.cljs$lang$applyTo = (function (arglist__7453){
var m = cljs.core.first(arglist__7453);
var _ = cljs.core.rest(arglist__7453);
return G__7451__delegate(m,_);
});
G__7451.cljs$core$IFn$_invoke$arity$variadic = G__7451__delegate;
return G__7451;
})()
,(function() { 
var G__7454__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__7454 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7455__i = 0, G__7455__a = new Array(arguments.length -  3);
while (G__7455__i < G__7455__a.length) {G__7455__a[G__7455__i] = arguments[G__7455__i + 3]; ++G__7455__i;}
  _ = new cljs.core.IndexedSeq(G__7455__a,0,null);
} 
return G__7454__delegate.call(this,m,key,default$,_);};
G__7454.cljs$lang$maxFixedArity = 3;
G__7454.cljs$lang$applyTo = (function (arglist__7456){
var m = cljs.core.first(arglist__7456);
arglist__7456 = cljs.core.next(arglist__7456);
var key = cljs.core.first(arglist__7456);
arglist__7456 = cljs.core.next(arglist__7456);
var default$ = cljs.core.first(arglist__7456);
var _ = cljs.core.rest(arglist__7456);
return G__7454__delegate(m,key,default$,_);
});
G__7454.cljs$core$IFn$_invoke$arity$variadic = G__7454__delegate;
return G__7454;
})()
,(function() { 
var G__7457__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7457 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7458__i = 0, G__7458__a = new Array(arguments.length -  1);
while (G__7458__i < G__7458__a.length) {G__7458__a[G__7458__i] = arguments[G__7458__i + 1]; ++G__7458__i;}
  _ = new cljs.core.IndexedSeq(G__7458__a,0,null);
} 
return G__7457__delegate.call(this,m,_);};
G__7457.cljs$lang$maxFixedArity = 1;
G__7457.cljs$lang$applyTo = (function (arglist__7459){
var m = cljs.core.first(arglist__7459);
var _ = cljs.core.rest(arglist__7459);
return G__7457__delegate(m,_);
});
G__7457.cljs$core$IFn$_invoke$arity$variadic = G__7457__delegate;
return G__7457;
})()
,(function() { 
var G__7460__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__7460 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7461__i = 0, G__7461__a = new Array(arguments.length -  2);
while (G__7461__i < G__7461__a.length) {G__7461__a[G__7461__i] = arguments[G__7461__i + 2]; ++G__7461__i;}
  _ = new cljs.core.IndexedSeq(G__7461__a,0,null);
} 
return G__7460__delegate.call(this,m,key,_);};
G__7460.cljs$lang$maxFixedArity = 2;
G__7460.cljs$lang$applyTo = (function (arglist__7462){
var m = cljs.core.first(arglist__7462);
arglist__7462 = cljs.core.next(arglist__7462);
var key = cljs.core.first(arglist__7462);
var _ = cljs.core.rest(arglist__7462);
return G__7460__delegate(m,key,_);
});
G__7460.cljs$core$IFn$_invoke$arity$variadic = G__7460__delegate;
return G__7460;
})()
,(function() { 
var G__7463__delegate = function (m,_){
return nex.interpreter.nex_clone_value(m);
};
var G__7463 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7464__i = 0, G__7464__a = new Array(arguments.length -  1);
while (G__7464__i < G__7464__a.length) {G__7464__a[G__7464__i] = arguments[G__7464__i + 1]; ++G__7464__i;}
  _ = new cljs.core.IndexedSeq(G__7464__a,0,null);
} 
return G__7463__delegate.call(this,m,_);};
G__7463.cljs$lang$maxFixedArity = 1;
G__7463.cljs$lang$applyTo = (function (arglist__7465){
var m = cljs.core.first(arglist__7465);
var _ = cljs.core.rest(arglist__7465);
return G__7463__delegate(m,_);
});
G__7463.cljs$core$IFn$_invoke$arity$variadic = G__7463__delegate;
return G__7463;
})()
,(function() { 
var G__7466__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__7466 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7467__i = 0, G__7467__a = new Array(arguments.length -  1);
while (G__7467__i < G__7467__a.length) {G__7467__a[G__7467__i] = arguments[G__7467__i + 1]; ++G__7467__i;}
  _ = new cljs.core.IndexedSeq(G__7467__a,0,null);
} 
return G__7466__delegate.call(this,m,_);};
G__7466.cljs$lang$maxFixedArity = 1;
G__7466.cljs$lang$applyTo = (function (arglist__7468){
var m = cljs.core.first(arglist__7468);
var _ = cljs.core.rest(arglist__7468);
return G__7466__delegate(m,_);
});
G__7466.cljs$core$IFn$_invoke$arity$variadic = G__7466__delegate;
return G__7466;
})()
,(function() { 
var G__7469__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__7469 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7470__i = 0, G__7470__a = new Array(arguments.length -  2);
while (G__7470__i < G__7470__a.length) {G__7470__a[G__7470__i] = arguments[G__7470__i + 2]; ++G__7470__i;}
  _ = new cljs.core.IndexedSeq(G__7470__a,0,null);
} 
return G__7469__delegate.call(this,m,key,_);};
G__7469.cljs$lang$maxFixedArity = 2;
G__7469.cljs$lang$applyTo = (function (arglist__7471){
var m = cljs.core.first(arglist__7471);
arglist__7471 = cljs.core.next(arglist__7471);
var key = cljs.core.first(arglist__7471);
var _ = cljs.core.rest(arglist__7471);
return G__7469__delegate(m,key,_);
});
G__7469.cljs$core$IFn$_invoke$arity$variadic = G__7469__delegate;
return G__7469;
})()
,(function() { 
var G__7472__delegate = function (m,other,_){
return nex.interpreter.nex_deep_equals_QMARK_(m,other);
};
var G__7472 = function (m,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7473__i = 0, G__7473__a = new Array(arguments.length -  2);
while (G__7473__i < G__7473__a.length) {G__7473__a[G__7473__i] = arguments[G__7473__i + 2]; ++G__7473__i;}
  _ = new cljs.core.IndexedSeq(G__7473__a,0,null);
} 
return G__7472__delegate.call(this,m,other,_);};
G__7472.cljs$lang$maxFixedArity = 2;
G__7472.cljs$lang$applyTo = (function (arglist__7474){
var m = cljs.core.first(arglist__7474);
arglist__7474 = cljs.core.next(arglist__7474);
var other = cljs.core.first(arglist__7474);
var _ = cljs.core.rest(arglist__7474);
return G__7472__delegate(m,other,_);
});
G__7472.cljs$core$IFn$_invoke$arity$variadic = G__7472__delegate;
return G__7472;
})()
,(function() { 
var G__7475__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__7475 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7476__i = 0, G__7476__a = new Array(arguments.length -  2);
while (G__7476__i < G__7476__a.length) {G__7476__a[G__7476__i] = arguments[G__7476__i + 2]; ++G__7476__i;}
  _ = new cljs.core.IndexedSeq(G__7476__a,0,null);
} 
return G__7475__delegate.call(this,m,key,_);};
G__7475.cljs$lang$maxFixedArity = 2;
G__7475.cljs$lang$applyTo = (function (arglist__7477){
var m = cljs.core.first(arglist__7477);
arglist__7477 = cljs.core.next(arglist__7477);
var key = cljs.core.first(arglist__7477);
var _ = cljs.core.rest(arglist__7477);
return G__7475__delegate(m,key,_);
});
G__7475.cljs$core$IFn$_invoke$arity$variadic = G__7475__delegate;
return G__7475;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__7478__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__7478 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7479__i = 0, G__7479__a = new Array(arguments.length -  1);
while (G__7479__i < G__7479__a.length) {G__7479__a[G__7479__i] = arguments[G__7479__i + 1]; ++G__7479__i;}
  _ = new cljs.core.IndexedSeq(G__7479__a,0,null);
} 
return G__7478__delegate.call(this,t,_);};
G__7478.cljs$lang$maxFixedArity = 1;
G__7478.cljs$lang$applyTo = (function (arglist__7480){
var t = cljs.core.first(arglist__7480);
var _ = cljs.core.rest(arglist__7480);
return G__7478__delegate(t,_);
});
G__7478.cljs$core$IFn$_invoke$arity$variadic = G__7478__delegate;
return G__7478;
})()
,(function() { 
var G__7481__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__7481 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7482__i = 0, G__7482__a = new Array(arguments.length -  2);
while (G__7482__i < G__7482__a.length) {G__7482__a[G__7482__i] = arguments[G__7482__i + 2]; ++G__7482__i;}
  _ = new cljs.core.IndexedSeq(G__7482__a,0,null);
} 
return G__7481__delegate.call(this,t,angle,_);};
G__7481.cljs$lang$maxFixedArity = 2;
G__7481.cljs$lang$applyTo = (function (arglist__7483){
var t = cljs.core.first(arglist__7483);
arglist__7483 = cljs.core.next(arglist__7483);
var angle = cljs.core.first(arglist__7483);
var _ = cljs.core.rest(arglist__7483);
return G__7481__delegate(t,angle,_);
});
G__7481.cljs$core$IFn$_invoke$arity$variadic = G__7481__delegate;
return G__7481;
})()
,(function() { 
var G__7484__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__7484 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7485__i = 0, G__7485__a = new Array(arguments.length -  1);
while (G__7485__i < G__7485__a.length) {G__7485__a[G__7485__i] = arguments[G__7485__i + 1]; ++G__7485__i;}
  _ = new cljs.core.IndexedSeq(G__7485__a,0,null);
} 
return G__7484__delegate.call(this,t,_);};
G__7484.cljs$lang$maxFixedArity = 1;
G__7484.cljs$lang$applyTo = (function (arglist__7486){
var t = cljs.core.first(arglist__7486);
var _ = cljs.core.rest(arglist__7486);
return G__7484__delegate(t,_);
});
G__7484.cljs$core$IFn$_invoke$arity$variadic = G__7484__delegate;
return G__7484;
})()
,(function() { 
var G__7487__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__7487 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7488__i = 0, G__7488__a = new Array(arguments.length -  2);
while (G__7488__i < G__7488__a.length) {G__7488__a[G__7488__i] = arguments[G__7488__i + 2]; ++G__7488__i;}
  _ = new cljs.core.IndexedSeq(G__7488__a,0,null);
} 
return G__7487__delegate.call(this,t,s,_);};
G__7487.cljs$lang$maxFixedArity = 2;
G__7487.cljs$lang$applyTo = (function (arglist__7489){
var t = cljs.core.first(arglist__7489);
arglist__7489 = cljs.core.next(arglist__7489);
var s = cljs.core.first(arglist__7489);
var _ = cljs.core.rest(arglist__7489);
return G__7487__delegate(t,s,_);
});
G__7487.cljs$core$IFn$_invoke$arity$variadic = G__7487__delegate;
return G__7487;
})()
,(function() { 
var G__7490__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__7490 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7491__i = 0, G__7491__a = new Array(arguments.length -  2);
while (G__7491__i < G__7491__a.length) {G__7491__a[G__7491__i] = arguments[G__7491__i + 2]; ++G__7491__i;}
  _ = new cljs.core.IndexedSeq(G__7491__a,0,null);
} 
return G__7490__delegate.call(this,t,s,_);};
G__7490.cljs$lang$maxFixedArity = 2;
G__7490.cljs$lang$applyTo = (function (arglist__7492){
var t = cljs.core.first(arglist__7492);
arglist__7492 = cljs.core.next(arglist__7492);
var s = cljs.core.first(arglist__7492);
var _ = cljs.core.rest(arglist__7492);
return G__7490__delegate(t,s,_);
});
G__7490.cljs$core$IFn$_invoke$arity$variadic = G__7490__delegate;
return G__7490;
})()
,(function() { 
var G__7493__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__7493 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7494__i = 0, G__7494__a = new Array(arguments.length -  1);
while (G__7494__i < G__7494__a.length) {G__7494__a[G__7494__i] = arguments[G__7494__i + 1]; ++G__7494__i;}
  _ = new cljs.core.IndexedSeq(G__7494__a,0,null);
} 
return G__7493__delegate.call(this,t,_);};
G__7493.cljs$lang$maxFixedArity = 1;
G__7493.cljs$lang$applyTo = (function (arglist__7495){
var t = cljs.core.first(arglist__7495);
var _ = cljs.core.rest(arglist__7495);
return G__7493__delegate(t,_);
});
G__7493.cljs$core$IFn$_invoke$arity$variadic = G__7493__delegate;
return G__7493;
})()
,(function() { 
var G__7496__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__7496 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7497__i = 0, G__7497__a = new Array(arguments.length -  2);
while (G__7497__i < G__7497__a.length) {G__7497__a[G__7497__i] = arguments[G__7497__i + 2]; ++G__7497__i;}
  _ = new cljs.core.IndexedSeq(G__7497__a,0,null);
} 
return G__7496__delegate.call(this,t,dist,_);};
G__7496.cljs$lang$maxFixedArity = 2;
G__7496.cljs$lang$applyTo = (function (arglist__7498){
var t = cljs.core.first(arglist__7498);
arglist__7498 = cljs.core.next(arglist__7498);
var dist = cljs.core.first(arglist__7498);
var _ = cljs.core.rest(arglist__7498);
return G__7496__delegate(t,dist,_);
});
G__7496.cljs$core$IFn$_invoke$arity$variadic = G__7496__delegate;
return G__7496;
})()
,(function() { 
var G__7499__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__7499 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7500__i = 0, G__7500__a = new Array(arguments.length -  1);
while (G__7500__i < G__7500__a.length) {G__7500__a[G__7500__i] = arguments[G__7500__i + 1]; ++G__7500__i;}
  _ = new cljs.core.IndexedSeq(G__7500__a,0,null);
} 
return G__7499__delegate.call(this,t,_);};
G__7499.cljs$lang$maxFixedArity = 1;
G__7499.cljs$lang$applyTo = (function (arglist__7501){
var t = cljs.core.first(arglist__7501);
var _ = cljs.core.rest(arglist__7501);
return G__7499__delegate(t,_);
});
G__7499.cljs$core$IFn$_invoke$arity$variadic = G__7499__delegate;
return G__7499;
})()
,(function() { 
var G__7502__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__7502 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7503__i = 0, G__7503__a = new Array(arguments.length -  1);
while (G__7503__i < G__7503__a.length) {G__7503__a[G__7503__i] = arguments[G__7503__i + 1]; ++G__7503__i;}
  _ = new cljs.core.IndexedSeq(G__7503__a,0,null);
} 
return G__7502__delegate.call(this,t,_);};
G__7502.cljs$lang$maxFixedArity = 1;
G__7502.cljs$lang$applyTo = (function (arglist__7504){
var t = cljs.core.first(arglist__7504);
var _ = cljs.core.rest(arglist__7504);
return G__7502__delegate(t,_);
});
G__7502.cljs$core$IFn$_invoke$arity$variadic = G__7502__delegate;
return G__7502;
})()
,(function() { 
var G__7505__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__7505 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7506__i = 0, G__7506__a = new Array(arguments.length -  1);
while (G__7506__i < G__7506__a.length) {G__7506__a[G__7506__i] = arguments[G__7506__i + 1]; ++G__7506__i;}
  _ = new cljs.core.IndexedSeq(G__7506__a,0,null);
} 
return G__7505__delegate.call(this,t,_);};
G__7505.cljs$lang$maxFixedArity = 1;
G__7505.cljs$lang$applyTo = (function (arglist__7507){
var t = cljs.core.first(arglist__7507);
var _ = cljs.core.rest(arglist__7507);
return G__7505__delegate(t,_);
});
G__7505.cljs$core$IFn$_invoke$arity$variadic = G__7505__delegate;
return G__7505;
})()
,(function() { 
var G__7508__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__7508 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7509__i = 0, G__7509__a = new Array(arguments.length -  1);
while (G__7509__i < G__7509__a.length) {G__7509__a[G__7509__i] = arguments[G__7509__i + 1]; ++G__7509__i;}
  _ = new cljs.core.IndexedSeq(G__7509__a,0,null);
} 
return G__7508__delegate.call(this,t,_);};
G__7508.cljs$lang$maxFixedArity = 1;
G__7508.cljs$lang$applyTo = (function (arglist__7510){
var t = cljs.core.first(arglist__7510);
var _ = cljs.core.rest(arglist__7510);
return G__7508__delegate(t,_);
});
G__7508.cljs$core$IFn$_invoke$arity$variadic = G__7508__delegate;
return G__7508;
})()
,(function() { 
var G__7511__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__7511 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7512__i = 0, G__7512__a = new Array(arguments.length -  1);
while (G__7512__i < G__7512__a.length) {G__7512__a[G__7512__i] = arguments[G__7512__i + 1]; ++G__7512__i;}
  _ = new cljs.core.IndexedSeq(G__7512__a,0,null);
} 
return G__7511__delegate.call(this,t,_);};
G__7511.cljs$lang$maxFixedArity = 1;
G__7511.cljs$lang$applyTo = (function (arglist__7513){
var t = cljs.core.first(arglist__7513);
var _ = cljs.core.rest(arglist__7513);
return G__7511__delegate(t,_);
});
G__7511.cljs$core$IFn$_invoke$arity$variadic = G__7511__delegate;
return G__7511;
})()
,(function() { 
var G__7514__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__7514 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7515__i = 0, G__7515__a = new Array(arguments.length -  1);
while (G__7515__i < G__7515__a.length) {G__7515__a[G__7515__i] = arguments[G__7515__i + 1]; ++G__7515__i;}
  _ = new cljs.core.IndexedSeq(G__7515__a,0,null);
} 
return G__7514__delegate.call(this,t,_);};
G__7514.cljs$lang$maxFixedArity = 1;
G__7514.cljs$lang$applyTo = (function (arglist__7516){
var t = cljs.core.first(arglist__7516);
var _ = cljs.core.rest(arglist__7516);
return G__7514__delegate(t,_);
});
G__7514.cljs$core$IFn$_invoke$arity$variadic = G__7514__delegate;
return G__7514;
})()
,(function() { 
var G__7517__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__7517 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7518__i = 0, G__7518__a = new Array(arguments.length -  2);
while (G__7518__i < G__7518__a.length) {G__7518__a[G__7518__i] = arguments[G__7518__i + 2]; ++G__7518__i;}
  _ = new cljs.core.IndexedSeq(G__7518__a,0,null);
} 
return G__7517__delegate.call(this,t,s,_);};
G__7517.cljs$lang$maxFixedArity = 2;
G__7517.cljs$lang$applyTo = (function (arglist__7519){
var t = cljs.core.first(arglist__7519);
arglist__7519 = cljs.core.next(arglist__7519);
var s = cljs.core.first(arglist__7519);
var _ = cljs.core.rest(arglist__7519);
return G__7517__delegate(t,s,_);
});
G__7517.cljs$core$IFn$_invoke$arity$variadic = G__7517__delegate;
return G__7517;
})()
,(function() { 
var G__7520__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__7520 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7521__i = 0, G__7521__a = new Array(arguments.length -  2);
while (G__7521__i < G__7521__a.length) {G__7521__a[G__7521__i] = arguments[G__7521__i + 2]; ++G__7521__i;}
  _ = new cljs.core.IndexedSeq(G__7521__a,0,null);
} 
return G__7520__delegate.call(this,t,r,_);};
G__7520.cljs$lang$maxFixedArity = 2;
G__7520.cljs$lang$applyTo = (function (arglist__7522){
var t = cljs.core.first(arglist__7522);
arglist__7522 = cljs.core.next(arglist__7522);
var r = cljs.core.first(arglist__7522);
var _ = cljs.core.rest(arglist__7522);
return G__7520__delegate(t,r,_);
});
G__7520.cljs$core$IFn$_invoke$arity$variadic = G__7520__delegate;
return G__7520;
})()
,(function() { 
var G__7523__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__7523 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7524__i = 0, G__7524__a = new Array(arguments.length -  2);
while (G__7524__i < G__7524__a.length) {G__7524__a[G__7524__i] = arguments[G__7524__i + 2]; ++G__7524__i;}
  _ = new cljs.core.IndexedSeq(G__7524__a,0,null);
} 
return G__7523__delegate.call(this,t,dist,_);};
G__7523.cljs$lang$maxFixedArity = 2;
G__7523.cljs$lang$applyTo = (function (arglist__7525){
var t = cljs.core.first(arglist__7525);
arglist__7525 = cljs.core.next(arglist__7525);
var dist = cljs.core.first(arglist__7525);
var _ = cljs.core.rest(arglist__7525);
return G__7523__delegate(t,dist,_);
});
G__7523.cljs$core$IFn$_invoke$arity$variadic = G__7523__delegate;
return G__7523;
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
var G__7538__i = 0, G__7538__a = new Array(arguments.length -  2);
while (G__7538__i < G__7538__a.length) {G__7538__a[G__7538__i] = arguments[G__7538__i + 2]; ++G__7538__i;}
  _ = new cljs.core.IndexedSeq(G__7538__a,0,null);
} 
return G__7533__delegate.call(this,t,angle,_);};
G__7533.cljs$lang$maxFixedArity = 2;
G__7533.cljs$lang$applyTo = (function (arglist__7539){
var t = cljs.core.first(arglist__7539);
arglist__7539 = cljs.core.next(arglist__7539);
var angle = cljs.core.first(arglist__7539);
var _ = cljs.core.rest(arglist__7539);
return G__7533__delegate(t,angle,_);
});
G__7533.cljs$core$IFn$_invoke$arity$variadic = G__7533__delegate;
return G__7533;
})()
]),cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","contains","union","cursor","intersection","clone","size","difference","equals","symmetric_difference"],[(function() { 
var G__7544__delegate = function (s,_){
return nex.interpreter.nex_set_empty_QMARK_(s);
};
var G__7544 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7545__i = 0, G__7545__a = new Array(arguments.length -  1);
while (G__7545__i < G__7545__a.length) {G__7545__a[G__7545__i] = arguments[G__7545__i + 1]; ++G__7545__i;}
  _ = new cljs.core.IndexedSeq(G__7545__a,0,null);
} 
return G__7544__delegate.call(this,s,_);};
G__7544.cljs$lang$maxFixedArity = 1;
G__7544.cljs$lang$applyTo = (function (arglist__7546){
var s = cljs.core.first(arglist__7546);
var _ = cljs.core.rest(arglist__7546);
return G__7544__delegate(s,_);
});
G__7544.cljs$core$IFn$_invoke$arity$variadic = G__7544__delegate;
return G__7544;
})()
,(function() { 
var G__7547__delegate = function (s,_){
return nex.interpreter.nex_set_str(s);
};
var G__7547 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7549__i = 0, G__7549__a = new Array(arguments.length -  1);
while (G__7549__i < G__7549__a.length) {G__7549__a[G__7549__i] = arguments[G__7549__i + 1]; ++G__7549__i;}
  _ = new cljs.core.IndexedSeq(G__7549__a,0,null);
} 
return G__7547__delegate.call(this,s,_);};
G__7547.cljs$lang$maxFixedArity = 1;
G__7547.cljs$lang$applyTo = (function (arglist__7550){
var s = cljs.core.first(arglist__7550);
var _ = cljs.core.rest(arglist__7550);
return G__7547__delegate(s,_);
});
G__7547.cljs$core$IFn$_invoke$arity$variadic = G__7547__delegate;
return G__7547;
})()
,(function() { 
var G__7551__delegate = function (s,value,_){
return nex.interpreter.nex_set_contains(s,value);
};
var G__7551 = function (s,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7552__i = 0, G__7552__a = new Array(arguments.length -  2);
while (G__7552__i < G__7552__a.length) {G__7552__a[G__7552__i] = arguments[G__7552__i + 2]; ++G__7552__i;}
  _ = new cljs.core.IndexedSeq(G__7552__a,0,null);
} 
return G__7551__delegate.call(this,s,value,_);};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7553){
var s = cljs.core.first(arglist__7553);
arglist__7553 = cljs.core.next(arglist__7553);
var value = cljs.core.first(arglist__7553);
var _ = cljs.core.rest(arglist__7553);
return G__7551__delegate(s,value,_);
});
G__7551.cljs$core$IFn$_invoke$arity$variadic = G__7551__delegate;
return G__7551;
})()
,(function() { 
var G__7554__delegate = function (s,other,_){
return nex.interpreter.nex_set_union(s,other);
};
var G__7554 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7555__i = 0, G__7555__a = new Array(arguments.length -  2);
while (G__7555__i < G__7555__a.length) {G__7555__a[G__7555__i] = arguments[G__7555__i + 2]; ++G__7555__i;}
  _ = new cljs.core.IndexedSeq(G__7555__a,0,null);
} 
return G__7554__delegate.call(this,s,other,_);};
G__7554.cljs$lang$maxFixedArity = 2;
G__7554.cljs$lang$applyTo = (function (arglist__7556){
var s = cljs.core.first(arglist__7556);
arglist__7556 = cljs.core.next(arglist__7556);
var other = cljs.core.first(arglist__7556);
var _ = cljs.core.rest(arglist__7556);
return G__7554__delegate(s,other,_);
});
G__7554.cljs$core$IFn$_invoke$arity$variadic = G__7554__delegate;
return G__7554;
})()
,(function() { 
var G__7561__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.es6_iterator_seq(s.values()))),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7561 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7562__i = 0, G__7562__a = new Array(arguments.length -  1);
while (G__7562__i < G__7562__a.length) {G__7562__a[G__7562__i] = arguments[G__7562__i + 1]; ++G__7562__i;}
  _ = new cljs.core.IndexedSeq(G__7562__a,0,null);
} 
return G__7561__delegate.call(this,s,_);};
G__7561.cljs$lang$maxFixedArity = 1;
G__7561.cljs$lang$applyTo = (function (arglist__7563){
var s = cljs.core.first(arglist__7563);
var _ = cljs.core.rest(arglist__7563);
return G__7561__delegate(s,_);
});
G__7561.cljs$core$IFn$_invoke$arity$variadic = G__7561__delegate;
return G__7561;
})()
,(function() { 
var G__7564__delegate = function (s,other,_){
return nex.interpreter.nex_set_intersection(s,other);
};
var G__7564 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7569__i = 0, G__7569__a = new Array(arguments.length -  2);
while (G__7569__i < G__7569__a.length) {G__7569__a[G__7569__i] = arguments[G__7569__i + 2]; ++G__7569__i;}
  _ = new cljs.core.IndexedSeq(G__7569__a,0,null);
} 
return G__7564__delegate.call(this,s,other,_);};
G__7564.cljs$lang$maxFixedArity = 2;
G__7564.cljs$lang$applyTo = (function (arglist__7570){
var s = cljs.core.first(arglist__7570);
arglist__7570 = cljs.core.next(arglist__7570);
var other = cljs.core.first(arglist__7570);
var _ = cljs.core.rest(arglist__7570);
return G__7564__delegate(s,other,_);
});
G__7564.cljs$core$IFn$_invoke$arity$variadic = G__7564__delegate;
return G__7564;
})()
,(function() { 
var G__7571__delegate = function (s,_){
return nex.interpreter.nex_clone_value(s);
};
var G__7571 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  1);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 1]; ++G__7576__i;}
  _ = new cljs.core.IndexedSeq(G__7576__a,0,null);
} 
return G__7571__delegate.call(this,s,_);};
G__7571.cljs$lang$maxFixedArity = 1;
G__7571.cljs$lang$applyTo = (function (arglist__7577){
var s = cljs.core.first(arglist__7577);
var _ = cljs.core.rest(arglist__7577);
return G__7571__delegate(s,_);
});
G__7571.cljs$core$IFn$_invoke$arity$variadic = G__7571__delegate;
return G__7571;
})()
,(function() { 
var G__7578__delegate = function (s,_){
return nex.interpreter.nex_set_size(s);
};
var G__7578 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7579__i = 0, G__7579__a = new Array(arguments.length -  1);
while (G__7579__i < G__7579__a.length) {G__7579__a[G__7579__i] = arguments[G__7579__i + 1]; ++G__7579__i;}
  _ = new cljs.core.IndexedSeq(G__7579__a,0,null);
} 
return G__7578__delegate.call(this,s,_);};
G__7578.cljs$lang$maxFixedArity = 1;
G__7578.cljs$lang$applyTo = (function (arglist__7580){
var s = cljs.core.first(arglist__7580);
var _ = cljs.core.rest(arglist__7580);
return G__7578__delegate(s,_);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
,(function() { 
var G__7585__delegate = function (s,other,_){
return nex.interpreter.nex_set_difference(s,other);
};
var G__7585 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7586__i = 0, G__7586__a = new Array(arguments.length -  2);
while (G__7586__i < G__7586__a.length) {G__7586__a[G__7586__i] = arguments[G__7586__i + 2]; ++G__7586__i;}
  _ = new cljs.core.IndexedSeq(G__7586__a,0,null);
} 
return G__7585__delegate.call(this,s,other,_);};
G__7585.cljs$lang$maxFixedArity = 2;
G__7585.cljs$lang$applyTo = (function (arglist__7587){
var s = cljs.core.first(arglist__7587);
arglist__7587 = cljs.core.next(arglist__7587);
var other = cljs.core.first(arglist__7587);
var _ = cljs.core.rest(arglist__7587);
return G__7585__delegate(s,other,_);
});
G__7585.cljs$core$IFn$_invoke$arity$variadic = G__7585__delegate;
return G__7585;
})()
,(function() { 
var G__7588__delegate = function (s,other,_){
return nex.interpreter.nex_deep_equals_QMARK_(s,other);
};
var G__7588 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7589__i = 0, G__7589__a = new Array(arguments.length -  2);
while (G__7589__i < G__7589__a.length) {G__7589__a[G__7589__i] = arguments[G__7589__i + 2]; ++G__7589__i;}
  _ = new cljs.core.IndexedSeq(G__7589__a,0,null);
} 
return G__7588__delegate.call(this,s,other,_);};
G__7588.cljs$lang$maxFixedArity = 2;
G__7588.cljs$lang$applyTo = (function (arglist__7590){
var s = cljs.core.first(arglist__7590);
arglist__7590 = cljs.core.next(arglist__7590);
var other = cljs.core.first(arglist__7590);
var _ = cljs.core.rest(arglist__7590);
return G__7588__delegate(s,other,_);
});
G__7588.cljs$core$IFn$_invoke$arity$variadic = G__7588__delegate;
return G__7588;
})()
,(function() { 
var G__7591__delegate = function (s,other,_){
return nex.interpreter.nex_set_symmetric_difference(s,other);
};
var G__7591 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7592__i = 0, G__7592__a = new Array(arguments.length -  2);
while (G__7592__i < G__7592__a.length) {G__7592__a[G__7592__i] = arguments[G__7592__i + 2]; ++G__7592__i;}
  _ = new cljs.core.IndexedSeq(G__7592__a,0,null);
} 
return G__7591__delegate.call(this,s,other,_);};
G__7591.cljs$lang$maxFixedArity = 2;
G__7591.cljs$lang$applyTo = (function (arglist__7593){
var s = cljs.core.first(arglist__7593);
arglist__7593 = cljs.core.next(arglist__7593);
var other = cljs.core.first(arglist__7593);
var _ = cljs.core.rest(arglist__7593);
return G__7591__delegate(s,other,_);
});
G__7591.cljs$core$IFn$_invoke$arity$variadic = G__7591__delegate;
return G__7591;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["send",(function() { 
var G__7594__delegate = function (ch,value,p__6384){
var vec__6385 = p__6384;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6385,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3(ch,value,timeout);
} else {
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2(ch,value);
}
};
var G__7594 = function (ch,value,var_args){
var p__6384 = null;
if (arguments.length > 2) {
var G__7595__i = 0, G__7595__a = new Array(arguments.length -  2);
while (G__7595__i < G__7595__a.length) {G__7595__a[G__7595__i] = arguments[G__7595__i + 2]; ++G__7595__i;}
  p__6384 = new cljs.core.IndexedSeq(G__7595__a,0,null);
} 
return G__7594__delegate.call(this,ch,value,p__6384);};
G__7594.cljs$lang$maxFixedArity = 2;
G__7594.cljs$lang$applyTo = (function (arglist__7596){
var ch = cljs.core.first(arglist__7596);
arglist__7596 = cljs.core.next(arglist__7596);
var value = cljs.core.first(arglist__7596);
var p__6384 = cljs.core.rest(arglist__7596);
return G__7594__delegate(ch,value,p__6384);
});
G__7594.cljs$core$IFn$_invoke$arity$variadic = G__7594__delegate;
return G__7594;
})()
,"try_send",(function() { 
var G__7597__delegate = function (ch,value,_){
return nex.interpreter.channel_try_send(ch,value);
};
var G__7597 = function (ch,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7598__i = 0, G__7598__a = new Array(arguments.length -  2);
while (G__7598__i < G__7598__a.length) {G__7598__a[G__7598__i] = arguments[G__7598__i + 2]; ++G__7598__i;}
  _ = new cljs.core.IndexedSeq(G__7598__a,0,null);
} 
return G__7597__delegate.call(this,ch,value,_);};
G__7597.cljs$lang$maxFixedArity = 2;
G__7597.cljs$lang$applyTo = (function (arglist__7599){
var ch = cljs.core.first(arglist__7599);
arglist__7599 = cljs.core.next(arglist__7599);
var value = cljs.core.first(arglist__7599);
var _ = cljs.core.rest(arglist__7599);
return G__7597__delegate(ch,value,_);
});
G__7597.cljs$core$IFn$_invoke$arity$variadic = G__7597__delegate;
return G__7597;
})()
,"receive",(function() { 
var G__7600__delegate = function (ch,p__6388){
var vec__6389 = p__6388;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6389,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2(ch,timeout);
} else {
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1(ch);
}
};
var G__7600 = function (ch,var_args){
var p__6388 = null;
if (arguments.length > 1) {
var G__7601__i = 0, G__7601__a = new Array(arguments.length -  1);
while (G__7601__i < G__7601__a.length) {G__7601__a[G__7601__i] = arguments[G__7601__i + 1]; ++G__7601__i;}
  p__6388 = new cljs.core.IndexedSeq(G__7601__a,0,null);
} 
return G__7600__delegate.call(this,ch,p__6388);};
G__7600.cljs$lang$maxFixedArity = 1;
G__7600.cljs$lang$applyTo = (function (arglist__7602){
var ch = cljs.core.first(arglist__7602);
var p__6388 = cljs.core.rest(arglist__7602);
return G__7600__delegate(ch,p__6388);
});
G__7600.cljs$core$IFn$_invoke$arity$variadic = G__7600__delegate;
return G__7600;
})()
,"try_receive",(function() { 
var G__7603__delegate = function (ch,_){
return nex.interpreter.channel_try_receive(ch);
};
var G__7603 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7604__i = 0, G__7604__a = new Array(arguments.length -  1);
while (G__7604__i < G__7604__a.length) {G__7604__a[G__7604__i] = arguments[G__7604__i + 1]; ++G__7604__i;}
  _ = new cljs.core.IndexedSeq(G__7604__a,0,null);
} 
return G__7603__delegate.call(this,ch,_);};
G__7603.cljs$lang$maxFixedArity = 1;
G__7603.cljs$lang$applyTo = (function (arglist__7605){
var ch = cljs.core.first(arglist__7605);
var _ = cljs.core.rest(arglist__7605);
return G__7603__delegate(ch,_);
});
G__7603.cljs$core$IFn$_invoke$arity$variadic = G__7603__delegate;
return G__7603;
})()
,"close",(function() { 
var G__7606__delegate = function (ch,_){
return nex.interpreter.channel_close(ch);
};
var G__7606 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7607__i = 0, G__7607__a = new Array(arguments.length -  1);
while (G__7607__i < G__7607__a.length) {G__7607__a[G__7607__i] = arguments[G__7607__i + 1]; ++G__7607__i;}
  _ = new cljs.core.IndexedSeq(G__7607__a,0,null);
} 
return G__7606__delegate.call(this,ch,_);};
G__7606.cljs$lang$maxFixedArity = 1;
G__7606.cljs$lang$applyTo = (function (arglist__7608){
var ch = cljs.core.first(arglist__7608);
var _ = cljs.core.rest(arglist__7608);
return G__7606__delegate(ch,_);
});
G__7606.cljs$core$IFn$_invoke$arity$variadic = G__7606__delegate;
return G__7606;
})()
,"is_closed",(function() { 
var G__7609__delegate = function (ch,_){
return new cljs.core.Keyword(null,"closed?","closed?",-1408769040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7609 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7610__i = 0, G__7610__a = new Array(arguments.length -  1);
while (G__7610__i < G__7610__a.length) {G__7610__a[G__7610__i] = arguments[G__7610__i + 1]; ++G__7610__i;}
  _ = new cljs.core.IndexedSeq(G__7610__a,0,null);
} 
return G__7609__delegate.call(this,ch,_);};
G__7609.cljs$lang$maxFixedArity = 1;
G__7609.cljs$lang$applyTo = (function (arglist__7611){
var ch = cljs.core.first(arglist__7611);
var _ = cljs.core.rest(arglist__7611);
return G__7609__delegate(ch,_);
});
G__7609.cljs$core$IFn$_invoke$arity$variadic = G__7609__delegate;
return G__7609;
})()
,"capacity",(function() { 
var G__7612__delegate = function (ch,_){
return new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7612 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7613__i = 0, G__7613__a = new Array(arguments.length -  1);
while (G__7613__i < G__7613__a.length) {G__7613__a[G__7613__i] = arguments[G__7613__i + 1]; ++G__7613__i;}
  _ = new cljs.core.IndexedSeq(G__7613__a,0,null);
} 
return G__7612__delegate.call(this,ch,_);};
G__7612.cljs$lang$maxFixedArity = 1;
G__7612.cljs$lang$applyTo = (function (arglist__7614){
var ch = cljs.core.first(arglist__7614);
var _ = cljs.core.rest(arglist__7614);
return G__7612__delegate(ch,_);
});
G__7612.cljs$core$IFn$_invoke$arity$variadic = G__7612__delegate;
return G__7612;
})()
,"size",(function() { 
var G__7615__delegate = function (ch,_){
return cljs.core.count(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
};
var G__7615 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7616__i = 0, G__7616__a = new Array(arguments.length -  1);
while (G__7616__i < G__7616__a.length) {G__7616__a[G__7616__i] = arguments[G__7616__i + 1]; ++G__7616__i;}
  _ = new cljs.core.IndexedSeq(G__7616__a,0,null);
} 
return G__7615__delegate.call(this,ch,_);};
G__7615.cljs$lang$maxFixedArity = 1;
G__7615.cljs$lang$applyTo = (function (arglist__7617){
var ch = cljs.core.first(arglist__7617);
var _ = cljs.core.rest(arglist__7617);
return G__7615__delegate(ch,_);
});
G__7615.cljs$core$IFn$_invoke$arity$variadic = G__7615__delegate;
return G__7615;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__7618__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__7618 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7619__i = 0, G__7619__a = new Array(arguments.length -  1);
while (G__7619__i < G__7619__a.length) {G__7619__a[G__7619__i] = arguments[G__7619__i + 1]; ++G__7619__i;}
  _ = new cljs.core.IndexedSeq(G__7619__a,0,null);
} 
return G__7618__delegate.call(this,b,_);};
G__7618.cljs$lang$maxFixedArity = 1;
G__7618.cljs$lang$applyTo = (function (arglist__7620){
var b = cljs.core.first(arglist__7620);
var _ = cljs.core.rest(arglist__7620);
return G__7618__delegate(b,_);
});
G__7618.cljs$core$IFn$_invoke$arity$variadic = G__7618__delegate;
return G__7618;
})()
,"and",(function() { 
var G__7621__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__7621 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7622__i = 0, G__7622__a = new Array(arguments.length -  2);
while (G__7622__i < G__7622__a.length) {G__7622__a[G__7622__i] = arguments[G__7622__i + 2]; ++G__7622__i;}
  _ = new cljs.core.IndexedSeq(G__7622__a,0,null);
} 
return G__7621__delegate.call(this,b,other,_);};
G__7621.cljs$lang$maxFixedArity = 2;
G__7621.cljs$lang$applyTo = (function (arglist__7623){
var b = cljs.core.first(arglist__7623);
arglist__7623 = cljs.core.next(arglist__7623);
var other = cljs.core.first(arglist__7623);
var _ = cljs.core.rest(arglist__7623);
return G__7621__delegate(b,other,_);
});
G__7621.cljs$core$IFn$_invoke$arity$variadic = G__7621__delegate;
return G__7621;
})()
,"or",(function() { 
var G__7624__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__7624 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7625__i = 0, G__7625__a = new Array(arguments.length -  2);
while (G__7625__i < G__7625__a.length) {G__7625__a[G__7625__i] = arguments[G__7625__i + 2]; ++G__7625__i;}
  _ = new cljs.core.IndexedSeq(G__7625__a,0,null);
} 
return G__7624__delegate.call(this,b,other,_);};
G__7624.cljs$lang$maxFixedArity = 2;
G__7624.cljs$lang$applyTo = (function (arglist__7626){
var b = cljs.core.first(arglist__7626);
arglist__7626 = cljs.core.next(arglist__7626);
var other = cljs.core.first(arglist__7626);
var _ = cljs.core.rest(arglist__7626);
return G__7624__delegate(b,other,_);
});
G__7624.cljs$core$IFn$_invoke$arity$variadic = G__7624__delegate;
return G__7624;
})()
,"not",(function() { 
var G__7627__delegate = function (b,_){
return cljs.core.not(b);
};
var G__7627 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7628__i = 0, G__7628__a = new Array(arguments.length -  1);
while (G__7628__i < G__7628__a.length) {G__7628__a[G__7628__i] = arguments[G__7628__i + 1]; ++G__7628__i;}
  _ = new cljs.core.IndexedSeq(G__7628__a,0,null);
} 
return G__7627__delegate.call(this,b,_);};
G__7627.cljs$lang$maxFixedArity = 1;
G__7627.cljs$lang$applyTo = (function (arglist__7629){
var b = cljs.core.first(arglist__7629);
var _ = cljs.core.rest(arglist__7629);
return G__7627__delegate(b,_);
});
G__7627.cljs$core$IFn$_invoke$arity$variadic = G__7627__delegate;
return G__7627;
})()
,"equals",(function() { 
var G__7630__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7630 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7631__i = 0, G__7631__a = new Array(arguments.length -  2);
while (G__7631__i < G__7631__a.length) {G__7631__a[G__7631__i] = arguments[G__7631__i + 2]; ++G__7631__i;}
  _ = new cljs.core.IndexedSeq(G__7631__a,0,null);
} 
return G__7630__delegate.call(this,b,other,_);};
G__7630.cljs$lang$maxFixedArity = 2;
G__7630.cljs$lang$applyTo = (function (arglist__7632){
var b = cljs.core.first(arglist__7632);
arglist__7632 = cljs.core.next(arglist__7632);
var other = cljs.core.first(arglist__7632);
var _ = cljs.core.rest(arglist__7632);
return G__7630__delegate(b,other,_);
});
G__7630.cljs$core$IFn$_invoke$arity$variadic = G__7630__delegate;
return G__7630;
})()
,"not_equals",(function() { 
var G__7633__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7633 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7634__i = 0, G__7634__a = new Array(arguments.length -  2);
while (G__7634__i < G__7634__a.length) {G__7634__a[G__7634__i] = arguments[G__7634__i + 2]; ++G__7634__i;}
  _ = new cljs.core.IndexedSeq(G__7634__a,0,null);
} 
return G__7633__delegate.call(this,b,other,_);};
G__7633.cljs$lang$maxFixedArity = 2;
G__7633.cljs$lang$applyTo = (function (arglist__7635){
var b = cljs.core.first(arglist__7635);
arglist__7635 = cljs.core.next(arglist__7635);
var other = cljs.core.first(arglist__7635);
var _ = cljs.core.rest(arglist__7635);
return G__7633__delegate(b,other,_);
});
G__7633.cljs$core$IFn$_invoke$arity$variadic = G__7633__delegate;
return G__7633;
})()
,"compare",(function() { 
var G__7636__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__7636 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7637__i = 0, G__7637__a = new Array(arguments.length -  2);
while (G__7637__i < G__7637__a.length) {G__7637__a[G__7637__i] = arguments[G__7637__i + 2]; ++G__7637__i;}
  _ = new cljs.core.IndexedSeq(G__7637__a,0,null);
} 
return G__7636__delegate.call(this,b,other,_);};
G__7636.cljs$lang$maxFixedArity = 2;
G__7636.cljs$lang$applyTo = (function (arglist__7638){
var b = cljs.core.first(arglist__7638);
arglist__7638 = cljs.core.next(arglist__7638);
var other = cljs.core.first(arglist__7638);
var _ = cljs.core.rest(arglist__7638);
return G__7636__delegate(b,other,_);
});
G__7636.cljs$core$IFn$_invoke$arity$variadic = G__7636__delegate;
return G__7636;
})()
,"hash",(function() { 
var G__7639__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__7639 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7640__i = 0, G__7640__a = new Array(arguments.length -  1);
while (G__7640__i < G__7640__a.length) {G__7640__a[G__7640__i] = arguments[G__7640__i + 1]; ++G__7640__i;}
  _ = new cljs.core.IndexedSeq(G__7640__a,0,null);
} 
return G__7639__delegate.call(this,b,_);};
G__7639.cljs$lang$maxFixedArity = 1;
G__7639.cljs$lang$applyTo = (function (arglist__7641){
var b = cljs.core.first(arglist__7641);
var _ = cljs.core.rest(arglist__7641);
return G__7639__delegate(b,_);
});
G__7639.cljs$core$IFn$_invoke$arity$variadic = G__7639__delegate;
return G__7639;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__7642__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7642 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7643__i = 0, G__7643__a = new Array(arguments.length -  1);
while (G__7643__i < G__7643__a.length) {G__7643__a[G__7643__i] = arguments[G__7643__i + 1]; ++G__7643__i;}
  _ = new cljs.core.IndexedSeq(G__7643__a,0,null);
} 
return G__7642__delegate.call(this,f,_);};
G__7642.cljs$lang$maxFixedArity = 1;
G__7642.cljs$lang$applyTo = (function (arglist__7644){
var f = cljs.core.first(arglist__7644);
var _ = cljs.core.rest(arglist__7644);
return G__7642__delegate(f,_);
});
G__7642.cljs$core$IFn$_invoke$arity$variadic = G__7642__delegate;
return G__7642;
})()
,"write",(function() { 
var G__7645__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7645 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7646__i = 0, G__7646__a = new Array(arguments.length -  2);
while (G__7646__i < G__7646__a.length) {G__7646__a[G__7646__i] = arguments[G__7646__i + 2]; ++G__7646__i;}
  _ = new cljs.core.IndexedSeq(G__7646__a,0,null);
} 
return G__7645__delegate.call(this,f,content,_);};
G__7645.cljs$lang$maxFixedArity = 2;
G__7645.cljs$lang$applyTo = (function (arglist__7647){
var f = cljs.core.first(arglist__7647);
arglist__7647 = cljs.core.next(arglist__7647);
var content = cljs.core.first(arglist__7647);
var _ = cljs.core.rest(arglist__7647);
return G__7645__delegate(f,content,_);
});
G__7645.cljs$core$IFn$_invoke$arity$variadic = G__7645__delegate;
return G__7645;
})()
,"append",(function() { 
var G__7648__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7648 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7649__i = 0, G__7649__a = new Array(arguments.length -  2);
while (G__7649__i < G__7649__a.length) {G__7649__a[G__7649__i] = arguments[G__7649__i + 2]; ++G__7649__i;}
  _ = new cljs.core.IndexedSeq(G__7649__a,0,null);
} 
return G__7648__delegate.call(this,f,content,_);};
G__7648.cljs$lang$maxFixedArity = 2;
G__7648.cljs$lang$applyTo = (function (arglist__7650){
var f = cljs.core.first(arglist__7650);
arglist__7650 = cljs.core.next(arglist__7650);
var content = cljs.core.first(arglist__7650);
var _ = cljs.core.rest(arglist__7650);
return G__7648__delegate(f,content,_);
});
G__7648.cljs$core$IFn$_invoke$arity$variadic = G__7648__delegate;
return G__7648;
})()
,"exists",(function() { 
var G__7651__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7651 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7652__i = 0, G__7652__a = new Array(arguments.length -  1);
while (G__7652__i < G__7652__a.length) {G__7652__a[G__7652__i] = arguments[G__7652__i + 1]; ++G__7652__i;}
  _ = new cljs.core.IndexedSeq(G__7652__a,0,null);
} 
return G__7651__delegate.call(this,f,_);};
G__7651.cljs$lang$maxFixedArity = 1;
G__7651.cljs$lang$applyTo = (function (arglist__7653){
var f = cljs.core.first(arglist__7653);
var _ = cljs.core.rest(arglist__7653);
return G__7651__delegate(f,_);
});
G__7651.cljs$core$IFn$_invoke$arity$variadic = G__7651__delegate;
return G__7651;
})()
,"delete",(function() { 
var G__7654__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__7654 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7655__i = 0, G__7655__a = new Array(arguments.length -  1);
while (G__7655__i < G__7655__a.length) {G__7655__a[G__7655__i] = arguments[G__7655__i + 1]; ++G__7655__i;}
  _ = new cljs.core.IndexedSeq(G__7655__a,0,null);
} 
return G__7654__delegate.call(this,f,_);};
G__7654.cljs$lang$maxFixedArity = 1;
G__7654.cljs$lang$applyTo = (function (arglist__7656){
var f = cljs.core.first(arglist__7656);
var _ = cljs.core.rest(arglist__7656);
return G__7654__delegate(f,_);
});
G__7654.cljs$core$IFn$_invoke$arity$variadic = G__7654__delegate;
return G__7654;
})()
,"lines",(function() { 
var G__7657__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7657 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7658__i = 0, G__7658__a = new Array(arguments.length -  1);
while (G__7658__i < G__7658__a.length) {G__7658__a[G__7658__i] = arguments[G__7658__i + 1]; ++G__7658__i;}
  _ = new cljs.core.IndexedSeq(G__7658__a,0,null);
} 
return G__7657__delegate.call(this,f,_);};
G__7657.cljs$lang$maxFixedArity = 1;
G__7657.cljs$lang$applyTo = (function (arglist__7659){
var f = cljs.core.first(arglist__7659);
var _ = cljs.core.rest(arglist__7659);
return G__7657__delegate(f,_);
});
G__7657.cljs$core$IFn$_invoke$arity$variadic = G__7657__delegate;
return G__7657;
})()
,"close",(function() { 
var G__7660__delegate = function (_,___$1){
return null;
};
var G__7660 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7661__i = 0, G__7661__a = new Array(arguments.length -  1);
while (G__7661__i < G__7661__a.length) {G__7661__a[G__7661__i] = arguments[G__7661__i + 1]; ++G__7661__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7661__a,0,null);
} 
return G__7660__delegate.call(this,_,___$1);};
G__7660.cljs$lang$maxFixedArity = 1;
G__7660.cljs$lang$applyTo = (function (arglist__7662){
var _ = cljs.core.first(arglist__7662);
var ___$1 = cljs.core.rest(arglist__7662);
return G__7660__delegate(_,___$1);
});
G__7660.cljs$core$IFn$_invoke$arity$variadic = G__7660__delegate;
return G__7660;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","bitwise_set","less_than","bitwise_or","plus","to_string","hash","greater_than","bitwise_logical_right_shift","pick","max","not_equals","bitwise_unset","minus","times","bitwise_and","bitwise_right_shift","divided_by","abs","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","equals","greater_than_or_equal","bitwise_rotate_left","bitwise_xor"],[(function() { 
var G__7663__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7663 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7664__i = 0, G__7664__a = new Array(arguments.length -  2);
while (G__7664__i < G__7664__a.length) {G__7664__a[G__7664__i] = arguments[G__7664__i + 2]; ++G__7664__i;}
  _ = new cljs.core.IndexedSeq(G__7664__a,0,null);
} 
return G__7663__delegate.call(this,n,other,_);};
G__7663.cljs$lang$maxFixedArity = 2;
G__7663.cljs$lang$applyTo = (function (arglist__7665){
var n = cljs.core.first(arglist__7665);
arglist__7665 = cljs.core.next(arglist__7665);
var other = cljs.core.first(arglist__7665);
var _ = cljs.core.rest(arglist__7665);
return G__7663__delegate(n,other,_);
});
G__7663.cljs$core$IFn$_invoke$arity$variadic = G__7663__delegate;
return G__7663;
})()
,(function() { 
var G__7666__delegate = function (n,other,_){
return (n <= other);
};
var G__7666 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7667__i = 0, G__7667__a = new Array(arguments.length -  2);
while (G__7667__i < G__7667__a.length) {G__7667__a[G__7667__i] = arguments[G__7667__i + 2]; ++G__7667__i;}
  _ = new cljs.core.IndexedSeq(G__7667__a,0,null);
} 
return G__7666__delegate.call(this,n,other,_);};
G__7666.cljs$lang$maxFixedArity = 2;
G__7666.cljs$lang$applyTo = (function (arglist__7668){
var n = cljs.core.first(arglist__7668);
arglist__7668 = cljs.core.next(arglist__7668);
var other = cljs.core.first(arglist__7668);
var _ = cljs.core.rest(arglist__7668);
return G__7666__delegate(n,other,_);
});
G__7666.cljs$core$IFn$_invoke$arity$variadic = G__7666__delegate;
return G__7666;
})()
,(function() { 
var G__7669__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7669 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7670__i = 0, G__7670__a = new Array(arguments.length -  2);
while (G__7670__i < G__7670__a.length) {G__7670__a[G__7670__i] = arguments[G__7670__i + 2]; ++G__7670__i;}
  _ = new cljs.core.IndexedSeq(G__7670__a,0,null);
} 
return G__7669__delegate.call(this,n,other,_);};
G__7669.cljs$lang$maxFixedArity = 2;
G__7669.cljs$lang$applyTo = (function (arglist__7671){
var n = cljs.core.first(arglist__7671);
arglist__7671 = cljs.core.next(arglist__7671);
var other = cljs.core.first(arglist__7671);
var _ = cljs.core.rest(arglist__7671);
return G__7669__delegate(n,other,_);
});
G__7669.cljs$core$IFn$_invoke$arity$variadic = G__7669__delegate;
return G__7669;
})()
,(function() { 
var G__7672__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_set(n,idx);
};
var G__7672 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7673__i = 0, G__7673__a = new Array(arguments.length -  2);
while (G__7673__i < G__7673__a.length) {G__7673__a[G__7673__i] = arguments[G__7673__i + 2]; ++G__7673__i;}
  _ = new cljs.core.IndexedSeq(G__7673__a,0,null);
} 
return G__7672__delegate.call(this,n,idx,_);};
G__7672.cljs$lang$maxFixedArity = 2;
G__7672.cljs$lang$applyTo = (function (arglist__7674){
var n = cljs.core.first(arglist__7674);
arglist__7674 = cljs.core.next(arglist__7674);
var idx = cljs.core.first(arglist__7674);
var _ = cljs.core.rest(arglist__7674);
return G__7672__delegate(n,idx,_);
});
G__7672.cljs$core$IFn$_invoke$arity$variadic = G__7672__delegate;
return G__7672;
})()
,(function() { 
var G__7675__delegate = function (n,other,_){
return (n < other);
};
var G__7675 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7676__i = 0, G__7676__a = new Array(arguments.length -  2);
while (G__7676__i < G__7676__a.length) {G__7676__a[G__7676__i] = arguments[G__7676__i + 2]; ++G__7676__i;}
  _ = new cljs.core.IndexedSeq(G__7676__a,0,null);
} 
return G__7675__delegate.call(this,n,other,_);};
G__7675.cljs$lang$maxFixedArity = 2;
G__7675.cljs$lang$applyTo = (function (arglist__7677){
var n = cljs.core.first(arglist__7677);
arglist__7677 = cljs.core.next(arglist__7677);
var other = cljs.core.first(arglist__7677);
var _ = cljs.core.rest(arglist__7677);
return G__7675__delegate(n,other,_);
});
G__7675.cljs$core$IFn$_invoke$arity$variadic = G__7675__delegate;
return G__7675;
})()
,(function() { 
var G__7678__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_or(n,other);
};
var G__7678 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7679__i = 0, G__7679__a = new Array(arguments.length -  2);
while (G__7679__i < G__7679__a.length) {G__7679__a[G__7679__i] = arguments[G__7679__i + 2]; ++G__7679__i;}
  _ = new cljs.core.IndexedSeq(G__7679__a,0,null);
} 
return G__7678__delegate.call(this,n,other,_);};
G__7678.cljs$lang$maxFixedArity = 2;
G__7678.cljs$lang$applyTo = (function (arglist__7680){
var n = cljs.core.first(arglist__7680);
arglist__7680 = cljs.core.next(arglist__7680);
var other = cljs.core.first(arglist__7680);
var _ = cljs.core.rest(arglist__7680);
return G__7678__delegate(n,other,_);
});
G__7678.cljs$core$IFn$_invoke$arity$variadic = G__7678__delegate;
return G__7678;
})()
,(function() { 
var G__7681__delegate = function (n,other,_){
return (n + other);
};
var G__7681 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7682__i = 0, G__7682__a = new Array(arguments.length -  2);
while (G__7682__i < G__7682__a.length) {G__7682__a[G__7682__i] = arguments[G__7682__i + 2]; ++G__7682__i;}
  _ = new cljs.core.IndexedSeq(G__7682__a,0,null);
} 
return G__7681__delegate.call(this,n,other,_);};
G__7681.cljs$lang$maxFixedArity = 2;
G__7681.cljs$lang$applyTo = (function (arglist__7683){
var n = cljs.core.first(arglist__7683);
arglist__7683 = cljs.core.next(arglist__7683);
var other = cljs.core.first(arglist__7683);
var _ = cljs.core.rest(arglist__7683);
return G__7681__delegate(n,other,_);
});
G__7681.cljs$core$IFn$_invoke$arity$variadic = G__7681__delegate;
return G__7681;
})()
,(function() { 
var G__7684__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
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
var G__7687__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7687 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7688__i = 0, G__7688__a = new Array(arguments.length -  1);
while (G__7688__i < G__7688__a.length) {G__7688__a[G__7688__i] = arguments[G__7688__i + 1]; ++G__7688__i;}
  _ = new cljs.core.IndexedSeq(G__7688__a,0,null);
} 
return G__7687__delegate.call(this,n,_);};
G__7687.cljs$lang$maxFixedArity = 1;
G__7687.cljs$lang$applyTo = (function (arglist__7689){
var n = cljs.core.first(arglist__7689);
var _ = cljs.core.rest(arglist__7689);
return G__7687__delegate(n,_);
});
G__7687.cljs$core$IFn$_invoke$arity$variadic = G__7687__delegate;
return G__7687;
})()
,(function() { 
var G__7690__delegate = function (n,other,_){
return (n > other);
};
var G__7690 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7691__i = 0, G__7691__a = new Array(arguments.length -  2);
while (G__7691__i < G__7691__a.length) {G__7691__a[G__7691__i] = arguments[G__7691__i + 2]; ++G__7691__i;}
  _ = new cljs.core.IndexedSeq(G__7691__a,0,null);
} 
return G__7690__delegate.call(this,n,other,_);};
G__7690.cljs$lang$maxFixedArity = 2;
G__7690.cljs$lang$applyTo = (function (arglist__7692){
var n = cljs.core.first(arglist__7692);
arglist__7692 = cljs.core.next(arglist__7692);
var other = cljs.core.first(arglist__7692);
var _ = cljs.core.rest(arglist__7692);
return G__7690__delegate(n,other,_);
});
G__7690.cljs$core$IFn$_invoke$arity$variadic = G__7690__delegate;
return G__7690;
})()
,(function() { 
var G__7693__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_logical_right_shift(n,shift);
};
var G__7693 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7694__i = 0, G__7694__a = new Array(arguments.length -  2);
while (G__7694__i < G__7694__a.length) {G__7694__a[G__7694__i] = arguments[G__7694__i + 2]; ++G__7694__i;}
  _ = new cljs.core.IndexedSeq(G__7694__a,0,null);
} 
return G__7693__delegate.call(this,n,shift,_);};
G__7693.cljs$lang$maxFixedArity = 2;
G__7693.cljs$lang$applyTo = (function (arglist__7695){
var n = cljs.core.first(arglist__7695);
arglist__7695 = cljs.core.next(arglist__7695);
var shift = cljs.core.first(arglist__7695);
var _ = cljs.core.rest(arglist__7695);
return G__7693__delegate(n,shift,_);
});
G__7693.cljs$core$IFn$_invoke$arity$variadic = G__7693__delegate;
return G__7693;
})()
,(function() { 
var G__7696__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__7696 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7697__i = 0, G__7697__a = new Array(arguments.length -  1);
while (G__7697__i < G__7697__a.length) {G__7697__a[G__7697__i] = arguments[G__7697__i + 1]; ++G__7697__i;}
  _ = new cljs.core.IndexedSeq(G__7697__a,0,null);
} 
return G__7696__delegate.call(this,n,_);};
G__7696.cljs$lang$maxFixedArity = 1;
G__7696.cljs$lang$applyTo = (function (arglist__7698){
var n = cljs.core.first(arglist__7698);
var _ = cljs.core.rest(arglist__7698);
return G__7696__delegate(n,_);
});
G__7696.cljs$core$IFn$_invoke$arity$variadic = G__7696__delegate;
return G__7696;
})()
,(function() { 
var G__7699__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7699 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7700__i = 0, G__7700__a = new Array(arguments.length -  2);
while (G__7700__i < G__7700__a.length) {G__7700__a[G__7700__i] = arguments[G__7700__i + 2]; ++G__7700__i;}
  _ = new cljs.core.IndexedSeq(G__7700__a,0,null);
} 
return G__7699__delegate.call(this,n,other,_);};
G__7699.cljs$lang$maxFixedArity = 2;
G__7699.cljs$lang$applyTo = (function (arglist__7701){
var n = cljs.core.first(arglist__7701);
arglist__7701 = cljs.core.next(arglist__7701);
var other = cljs.core.first(arglist__7701);
var _ = cljs.core.rest(arglist__7701);
return G__7699__delegate(n,other,_);
});
G__7699.cljs$core$IFn$_invoke$arity$variadic = G__7699__delegate;
return G__7699;
})()
,(function() { 
var G__7702__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7702 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7703__i = 0, G__7703__a = new Array(arguments.length -  2);
while (G__7703__i < G__7703__a.length) {G__7703__a[G__7703__i] = arguments[G__7703__i + 2]; ++G__7703__i;}
  _ = new cljs.core.IndexedSeq(G__7703__a,0,null);
} 
return G__7702__delegate.call(this,n,other,_);};
G__7702.cljs$lang$maxFixedArity = 2;
G__7702.cljs$lang$applyTo = (function (arglist__7704){
var n = cljs.core.first(arglist__7704);
arglist__7704 = cljs.core.next(arglist__7704);
var other = cljs.core.first(arglist__7704);
var _ = cljs.core.rest(arglist__7704);
return G__7702__delegate(n,other,_);
});
G__7702.cljs$core$IFn$_invoke$arity$variadic = G__7702__delegate;
return G__7702;
})()
,(function() { 
var G__7705__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_unset(n,idx);
};
var G__7705 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7706__i = 0, G__7706__a = new Array(arguments.length -  2);
while (G__7706__i < G__7706__a.length) {G__7706__a[G__7706__i] = arguments[G__7706__i + 2]; ++G__7706__i;}
  _ = new cljs.core.IndexedSeq(G__7706__a,0,null);
} 
return G__7705__delegate.call(this,n,idx,_);};
G__7705.cljs$lang$maxFixedArity = 2;
G__7705.cljs$lang$applyTo = (function (arglist__7707){
var n = cljs.core.first(arglist__7707);
arglist__7707 = cljs.core.next(arglist__7707);
var idx = cljs.core.first(arglist__7707);
var _ = cljs.core.rest(arglist__7707);
return G__7705__delegate(n,idx,_);
});
G__7705.cljs$core$IFn$_invoke$arity$variadic = G__7705__delegate;
return G__7705;
})()
,(function() { 
var G__7708__delegate = function (n,other,_){
return (n - other);
};
var G__7708 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7709__i = 0, G__7709__a = new Array(arguments.length -  2);
while (G__7709__i < G__7709__a.length) {G__7709__a[G__7709__i] = arguments[G__7709__i + 2]; ++G__7709__i;}
  _ = new cljs.core.IndexedSeq(G__7709__a,0,null);
} 
return G__7708__delegate.call(this,n,other,_);};
G__7708.cljs$lang$maxFixedArity = 2;
G__7708.cljs$lang$applyTo = (function (arglist__7710){
var n = cljs.core.first(arglist__7710);
arglist__7710 = cljs.core.next(arglist__7710);
var other = cljs.core.first(arglist__7710);
var _ = cljs.core.rest(arglist__7710);
return G__7708__delegate(n,other,_);
});
G__7708.cljs$core$IFn$_invoke$arity$variadic = G__7708__delegate;
return G__7708;
})()
,(function() { 
var G__7711__delegate = function (n,other,_){
return (n * other);
};
var G__7711 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7712__i = 0, G__7712__a = new Array(arguments.length -  2);
while (G__7712__i < G__7712__a.length) {G__7712__a[G__7712__i] = arguments[G__7712__i + 2]; ++G__7712__i;}
  _ = new cljs.core.IndexedSeq(G__7712__a,0,null);
} 
return G__7711__delegate.call(this,n,other,_);};
G__7711.cljs$lang$maxFixedArity = 2;
G__7711.cljs$lang$applyTo = (function (arglist__7713){
var n = cljs.core.first(arglist__7713);
arglist__7713 = cljs.core.next(arglist__7713);
var other = cljs.core.first(arglist__7713);
var _ = cljs.core.rest(arglist__7713);
return G__7711__delegate(n,other,_);
});
G__7711.cljs$core$IFn$_invoke$arity$variadic = G__7711__delegate;
return G__7711;
})()
,(function() { 
var G__7714__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_and(n,other);
};
var G__7714 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7715__i = 0, G__7715__a = new Array(arguments.length -  2);
while (G__7715__i < G__7715__a.length) {G__7715__a[G__7715__i] = arguments[G__7715__i + 2]; ++G__7715__i;}
  _ = new cljs.core.IndexedSeq(G__7715__a,0,null);
} 
return G__7714__delegate.call(this,n,other,_);};
G__7714.cljs$lang$maxFixedArity = 2;
G__7714.cljs$lang$applyTo = (function (arglist__7716){
var n = cljs.core.first(arglist__7716);
arglist__7716 = cljs.core.next(arglist__7716);
var other = cljs.core.first(arglist__7716);
var _ = cljs.core.rest(arglist__7716);
return G__7714__delegate(n,other,_);
});
G__7714.cljs$core$IFn$_invoke$arity$variadic = G__7714__delegate;
return G__7714;
})()
,(function() { 
var G__7717__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_right_shift(n,shift);
};
var G__7717 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7718__i = 0, G__7718__a = new Array(arguments.length -  2);
while (G__7718__i < G__7718__a.length) {G__7718__a[G__7718__i] = arguments[G__7718__i + 2]; ++G__7718__i;}
  _ = new cljs.core.IndexedSeq(G__7718__a,0,null);
} 
return G__7717__delegate.call(this,n,shift,_);};
G__7717.cljs$lang$maxFixedArity = 2;
G__7717.cljs$lang$applyTo = (function (arglist__7719){
var n = cljs.core.first(arglist__7719);
arglist__7719 = cljs.core.next(arglist__7719);
var shift = cljs.core.first(arglist__7719);
var _ = cljs.core.rest(arglist__7719);
return G__7717__delegate(n,shift,_);
});
G__7717.cljs$core$IFn$_invoke$arity$variadic = G__7717__delegate;
return G__7717;
})()
,(function() { 
var G__7720__delegate = function (n,other,_){
return (n / other);
};
var G__7720 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7721__i = 0, G__7721__a = new Array(arguments.length -  2);
while (G__7721__i < G__7721__a.length) {G__7721__a[G__7721__i] = arguments[G__7721__i + 2]; ++G__7721__i;}
  _ = new cljs.core.IndexedSeq(G__7721__a,0,null);
} 
return G__7720__delegate.call(this,n,other,_);};
G__7720.cljs$lang$maxFixedArity = 2;
G__7720.cljs$lang$applyTo = (function (arglist__7722){
var n = cljs.core.first(arglist__7722);
arglist__7722 = cljs.core.next(arglist__7722);
var other = cljs.core.first(arglist__7722);
var _ = cljs.core.rest(arglist__7722);
return G__7720__delegate(n,other,_);
});
G__7720.cljs$core$IFn$_invoke$arity$variadic = G__7720__delegate;
return G__7720;
})()
,(function() { 
var G__7723__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7723 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7724__i = 0, G__7724__a = new Array(arguments.length -  1);
while (G__7724__i < G__7724__a.length) {G__7724__a[G__7724__i] = arguments[G__7724__i + 1]; ++G__7724__i;}
  _ = new cljs.core.IndexedSeq(G__7724__a,0,null);
} 
return G__7723__delegate.call(this,n,_);};
G__7723.cljs$lang$maxFixedArity = 1;
G__7723.cljs$lang$applyTo = (function (arglist__7725){
var n = cljs.core.first(arglist__7725);
var _ = cljs.core.rest(arglist__7725);
return G__7723__delegate(n,_);
});
G__7723.cljs$core$IFn$_invoke$arity$variadic = G__7723__delegate;
return G__7723;
})()
,(function() { 
var G__7726__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_right(n,shift);
};
var G__7726 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7727__i = 0, G__7727__a = new Array(arguments.length -  2);
while (G__7727__i < G__7727__a.length) {G__7727__a[G__7727__i] = arguments[G__7727__i + 2]; ++G__7727__i;}
  _ = new cljs.core.IndexedSeq(G__7727__a,0,null);
} 
return G__7726__delegate.call(this,n,shift,_);};
G__7726.cljs$lang$maxFixedArity = 2;
G__7726.cljs$lang$applyTo = (function (arglist__7728){
var n = cljs.core.first(arglist__7728);
arglist__7728 = cljs.core.next(arglist__7728);
var shift = cljs.core.first(arglist__7728);
var _ = cljs.core.rest(arglist__7728);
return G__7726__delegate(n,shift,_);
});
G__7726.cljs$core$IFn$_invoke$arity$variadic = G__7726__delegate;
return G__7726;
})()
,(function() { 
var G__7729__delegate = function (n,_){
return nex.interpreter.nex_bitwise_not(n);
};
var G__7729 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7730__i = 0, G__7730__a = new Array(arguments.length -  1);
while (G__7730__i < G__7730__a.length) {G__7730__a[G__7730__i] = arguments[G__7730__i + 1]; ++G__7730__i;}
  _ = new cljs.core.IndexedSeq(G__7730__a,0,null);
} 
return G__7729__delegate.call(this,n,_);};
G__7729.cljs$lang$maxFixedArity = 1;
G__7729.cljs$lang$applyTo = (function (arglist__7731){
var n = cljs.core.first(arglist__7731);
var _ = cljs.core.rest(arglist__7731);
return G__7729__delegate(n,_);
});
G__7729.cljs$core$IFn$_invoke$arity$variadic = G__7729__delegate;
return G__7729;
})()
,(function() { 
var G__7732__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_left_shift(n,shift);
};
var G__7732 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7733__i = 0, G__7733__a = new Array(arguments.length -  2);
while (G__7733__i < G__7733__a.length) {G__7733__a[G__7733__i] = arguments[G__7733__i + 2]; ++G__7733__i;}
  _ = new cljs.core.IndexedSeq(G__7733__a,0,null);
} 
return G__7732__delegate.call(this,n,shift,_);};
G__7732.cljs$lang$maxFixedArity = 2;
G__7732.cljs$lang$applyTo = (function (arglist__7734){
var n = cljs.core.first(arglist__7734);
arglist__7734 = cljs.core.next(arglist__7734);
var shift = cljs.core.first(arglist__7734);
var _ = cljs.core.rest(arglist__7734);
return G__7732__delegate(n,shift,_);
});
G__7732.cljs$core$IFn$_invoke$arity$variadic = G__7732__delegate;
return G__7732;
})()
,(function() { 
var G__7735__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_is_set(n,idx);
};
var G__7735 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7736__i = 0, G__7736__a = new Array(arguments.length -  2);
while (G__7736__i < G__7736__a.length) {G__7736__a[G__7736__i] = arguments[G__7736__i + 2]; ++G__7736__i;}
  _ = new cljs.core.IndexedSeq(G__7736__a,0,null);
} 
return G__7735__delegate.call(this,n,idx,_);};
G__7735.cljs$lang$maxFixedArity = 2;
G__7735.cljs$lang$applyTo = (function (arglist__7737){
var n = cljs.core.first(arglist__7737);
arglist__7737 = cljs.core.next(arglist__7737);
var idx = cljs.core.first(arglist__7737);
var _ = cljs.core.rest(arglist__7737);
return G__7735__delegate(n,idx,_);
});
G__7735.cljs$core$IFn$_invoke$arity$variadic = G__7735__delegate;
return G__7735;
})()
,(function() { 
var G__7738__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7738 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7739__i = 0, G__7739__a = new Array(arguments.length -  2);
while (G__7739__i < G__7739__a.length) {G__7739__a[G__7739__i] = arguments[G__7739__i + 2]; ++G__7739__i;}
  _ = new cljs.core.IndexedSeq(G__7739__a,0,null);
} 
return G__7738__delegate.call(this,n,other,_);};
G__7738.cljs$lang$maxFixedArity = 2;
G__7738.cljs$lang$applyTo = (function (arglist__7740){
var n = cljs.core.first(arglist__7740);
arglist__7740 = cljs.core.next(arglist__7740);
var other = cljs.core.first(arglist__7740);
var _ = cljs.core.rest(arglist__7740);
return G__7738__delegate(n,other,_);
});
G__7738.cljs$core$IFn$_invoke$arity$variadic = G__7738__delegate;
return G__7738;
})()
,(function() { 
var G__7741__delegate = function (n,other,_){
return (n >= other);
};
var G__7741 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7742__i = 0, G__7742__a = new Array(arguments.length -  2);
while (G__7742__i < G__7742__a.length) {G__7742__a[G__7742__i] = arguments[G__7742__i + 2]; ++G__7742__i;}
  _ = new cljs.core.IndexedSeq(G__7742__a,0,null);
} 
return G__7741__delegate.call(this,n,other,_);};
G__7741.cljs$lang$maxFixedArity = 2;
G__7741.cljs$lang$applyTo = (function (arglist__7743){
var n = cljs.core.first(arglist__7743);
arglist__7743 = cljs.core.next(arglist__7743);
var other = cljs.core.first(arglist__7743);
var _ = cljs.core.rest(arglist__7743);
return G__7741__delegate(n,other,_);
});
G__7741.cljs$core$IFn$_invoke$arity$variadic = G__7741__delegate;
return G__7741;
})()
,(function() { 
var G__7744__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_left(n,shift);
};
var G__7744 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7745__i = 0, G__7745__a = new Array(arguments.length -  2);
while (G__7745__i < G__7745__a.length) {G__7745__a[G__7745__i] = arguments[G__7745__i + 2]; ++G__7745__i;}
  _ = new cljs.core.IndexedSeq(G__7745__a,0,null);
} 
return G__7744__delegate.call(this,n,shift,_);};
G__7744.cljs$lang$maxFixedArity = 2;
G__7744.cljs$lang$applyTo = (function (arglist__7746){
var n = cljs.core.first(arglist__7746);
arglist__7746 = cljs.core.next(arglist__7746);
var shift = cljs.core.first(arglist__7746);
var _ = cljs.core.rest(arglist__7746);
return G__7744__delegate(n,shift,_);
});
G__7744.cljs$core$IFn$_invoke$arity$variadic = G__7744__delegate;
return G__7744;
})()
,(function() { 
var G__7747__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_xor(n,other);
};
var G__7747 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7748__i = 0, G__7748__a = new Array(arguments.length -  2);
while (G__7748__i < G__7748__a.length) {G__7748__a[G__7748__i] = arguments[G__7748__i + 2]; ++G__7748__i;}
  _ = new cljs.core.IndexedSeq(G__7748__a,0,null);
} 
return G__7747__delegate.call(this,n,other,_);};
G__7747.cljs$lang$maxFixedArity = 2;
G__7747.cljs$lang$applyTo = (function (arglist__7749){
var n = cljs.core.first(arglist__7749);
arglist__7749 = cljs.core.next(arglist__7749);
var other = cljs.core.first(arglist__7749);
var _ = cljs.core.rest(arglist__7749);
return G__7747__delegate(n,other,_);
});
G__7747.cljs$core$IFn$_invoke$arity$variadic = G__7747__delegate;
return G__7747;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7750__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7750 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7751__i = 0, G__7751__a = new Array(arguments.length -  1);
while (G__7751__i < G__7751__a.length) {G__7751__a[G__7751__i] = arguments[G__7751__i + 1]; ++G__7751__i;}
  _ = new cljs.core.IndexedSeq(G__7751__a,0,null);
} 
return G__7750__delegate.call(this,c,_);};
G__7750.cljs$lang$maxFixedArity = 1;
G__7750.cljs$lang$applyTo = (function (arglist__7752){
var c = cljs.core.first(arglist__7752);
var _ = cljs.core.rest(arglist__7752);
return G__7750__delegate(c,_);
});
G__7750.cljs$core$IFn$_invoke$arity$variadic = G__7750__delegate;
return G__7750;
})()
,"item",(function() { 
var G__7753__delegate = function (c,_){
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
var G__7753 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7757__i = 0, G__7757__a = new Array(arguments.length -  1);
while (G__7757__i < G__7757__a.length) {G__7757__a[G__7757__i] = arguments[G__7757__i + 1]; ++G__7757__i;}
  _ = new cljs.core.IndexedSeq(G__7757__a,0,null);
} 
return G__7753__delegate.call(this,c,_);};
G__7753.cljs$lang$maxFixedArity = 1;
G__7753.cljs$lang$applyTo = (function (arglist__7758){
var c = cljs.core.first(arglist__7758);
var _ = cljs.core.rest(arglist__7758);
return G__7753__delegate(c,_);
});
G__7753.cljs$core$IFn$_invoke$arity$variadic = G__7753__delegate;
return G__7753;
})()
,"next",(function() { 
var G__7759__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7759 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7763__i = 0, G__7763__a = new Array(arguments.length -  1);
while (G__7763__i < G__7763__a.length) {G__7763__a[G__7763__i] = arguments[G__7763__i + 1]; ++G__7763__i;}
  _ = new cljs.core.IndexedSeq(G__7763__a,0,null);
} 
return G__7759__delegate.call(this,c,_);};
G__7759.cljs$lang$maxFixedArity = 1;
G__7759.cljs$lang$applyTo = (function (arglist__7764){
var c = cljs.core.first(arglist__7764);
var _ = cljs.core.rest(arglist__7764);
return G__7759__delegate(c,_);
});
G__7759.cljs$core$IFn$_invoke$arity$variadic = G__7759__delegate;
return G__7759;
})()
,"at_end",(function() { 
var G__7765__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7765 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7766__i = 0, G__7766__a = new Array(arguments.length -  1);
while (G__7766__i < G__7766__a.length) {G__7766__a[G__7766__i] = arguments[G__7766__i + 1]; ++G__7766__i;}
  _ = new cljs.core.IndexedSeq(G__7766__a,0,null);
} 
return G__7765__delegate.call(this,c,_);};
G__7765.cljs$lang$maxFixedArity = 1;
G__7765.cljs$lang$applyTo = (function (arglist__7767){
var c = cljs.core.first(arglist__7767);
var _ = cljs.core.rest(arglist__7767);
return G__7765__delegate(c,_);
});
G__7765.cljs$core$IFn$_invoke$arity$variadic = G__7765__delegate;
return G__7765;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7768__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7768 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7769__i = 0, G__7769__a = new Array(arguments.length -  2);
while (G__7769__i < G__7769__a.length) {G__7769__a[G__7769__i] = arguments[G__7769__i + 2]; ++G__7769__i;}
  _ = new cljs.core.IndexedSeq(G__7769__a,0,null);
} 
return G__7768__delegate.call(this,n,other,_);};
G__7768.cljs$lang$maxFixedArity = 2;
G__7768.cljs$lang$applyTo = (function (arglist__7770){
var n = cljs.core.first(arglist__7770);
arglist__7770 = cljs.core.next(arglist__7770);
var other = cljs.core.first(arglist__7770);
var _ = cljs.core.rest(arglist__7770);
return G__7768__delegate(n,other,_);
});
G__7768.cljs$core$IFn$_invoke$arity$variadic = G__7768__delegate;
return G__7768;
})()
,(function() { 
var G__7772__delegate = function (n,other,_){
return (n <= other);
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
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7775 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7777__i = 0, G__7777__a = new Array(arguments.length -  2);
while (G__7777__i < G__7777__a.length) {G__7777__a[G__7777__i] = arguments[G__7777__i + 2]; ++G__7777__i;}
  _ = new cljs.core.IndexedSeq(G__7777__a,0,null);
} 
return G__7775__delegate.call(this,n,other,_);};
G__7775.cljs$lang$maxFixedArity = 2;
G__7775.cljs$lang$applyTo = (function (arglist__7778){
var n = cljs.core.first(arglist__7778);
arglist__7778 = cljs.core.next(arglist__7778);
var other = cljs.core.first(arglist__7778);
var _ = cljs.core.rest(arglist__7778);
return G__7775__delegate(n,other,_);
});
G__7775.cljs$core$IFn$_invoke$arity$variadic = G__7775__delegate;
return G__7775;
})()
,(function() { 
var G__7779__delegate = function (n,other,_){
return (n < other);
};
var G__7779 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7780__i = 0, G__7780__a = new Array(arguments.length -  2);
while (G__7780__i < G__7780__a.length) {G__7780__a[G__7780__i] = arguments[G__7780__i + 2]; ++G__7780__i;}
  _ = new cljs.core.IndexedSeq(G__7780__a,0,null);
} 
return G__7779__delegate.call(this,n,other,_);};
G__7779.cljs$lang$maxFixedArity = 2;
G__7779.cljs$lang$applyTo = (function (arglist__7781){
var n = cljs.core.first(arglist__7781);
arglist__7781 = cljs.core.next(arglist__7781);
var other = cljs.core.first(arglist__7781);
var _ = cljs.core.rest(arglist__7781);
return G__7779__delegate(n,other,_);
});
G__7779.cljs$core$IFn$_invoke$arity$variadic = G__7779__delegate;
return G__7779;
})()
,(function() { 
var G__7782__delegate = function (n,other,_){
return (n + other);
};
var G__7782 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7783__i = 0, G__7783__a = new Array(arguments.length -  2);
while (G__7783__i < G__7783__a.length) {G__7783__a[G__7783__i] = arguments[G__7783__i + 2]; ++G__7783__i;}
  _ = new cljs.core.IndexedSeq(G__7783__a,0,null);
} 
return G__7782__delegate.call(this,n,other,_);};
G__7782.cljs$lang$maxFixedArity = 2;
G__7782.cljs$lang$applyTo = (function (arglist__7784){
var n = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var other = cljs.core.first(arglist__7784);
var _ = cljs.core.rest(arglist__7784);
return G__7782__delegate(n,other,_);
});
G__7782.cljs$core$IFn$_invoke$arity$variadic = G__7782__delegate;
return G__7782;
})()
,(function() { 
var G__7785__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7785 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7786__i = 0, G__7786__a = new Array(arguments.length -  1);
while (G__7786__i < G__7786__a.length) {G__7786__a[G__7786__i] = arguments[G__7786__i + 1]; ++G__7786__i;}
  _ = new cljs.core.IndexedSeq(G__7786__a,0,null);
} 
return G__7785__delegate.call(this,n,_);};
G__7785.cljs$lang$maxFixedArity = 1;
G__7785.cljs$lang$applyTo = (function (arglist__7787){
var n = cljs.core.first(arglist__7787);
var _ = cljs.core.rest(arglist__7787);
return G__7785__delegate(n,_);
});
G__7785.cljs$core$IFn$_invoke$arity$variadic = G__7785__delegate;
return G__7785;
})()
,(function() { 
var G__7788__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7788 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7789__i = 0, G__7789__a = new Array(arguments.length -  1);
while (G__7789__i < G__7789__a.length) {G__7789__a[G__7789__i] = arguments[G__7789__i + 1]; ++G__7789__i;}
  _ = new cljs.core.IndexedSeq(G__7789__a,0,null);
} 
return G__7788__delegate.call(this,n,_);};
G__7788.cljs$lang$maxFixedArity = 1;
G__7788.cljs$lang$applyTo = (function (arglist__7790){
var n = cljs.core.first(arglist__7790);
var _ = cljs.core.rest(arglist__7790);
return G__7788__delegate(n,_);
});
G__7788.cljs$core$IFn$_invoke$arity$variadic = G__7788__delegate;
return G__7788;
})()
,(function() { 
var G__7791__delegate = function (n,other,_){
return (n > other);
};
var G__7791 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7792__i = 0, G__7792__a = new Array(arguments.length -  2);
while (G__7792__i < G__7792__a.length) {G__7792__a[G__7792__i] = arguments[G__7792__i + 2]; ++G__7792__i;}
  _ = new cljs.core.IndexedSeq(G__7792__a,0,null);
} 
return G__7791__delegate.call(this,n,other,_);};
G__7791.cljs$lang$maxFixedArity = 2;
G__7791.cljs$lang$applyTo = (function (arglist__7793){
var n = cljs.core.first(arglist__7793);
arglist__7793 = cljs.core.next(arglist__7793);
var other = cljs.core.first(arglist__7793);
var _ = cljs.core.rest(arglist__7793);
return G__7791__delegate(n,other,_);
});
G__7791.cljs$core$IFn$_invoke$arity$variadic = G__7791__delegate;
return G__7791;
})()
,(function() { 
var G__7794__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7794 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7795__i = 0, G__7795__a = new Array(arguments.length -  2);
while (G__7795__i < G__7795__a.length) {G__7795__a[G__7795__i] = arguments[G__7795__i + 2]; ++G__7795__i;}
  _ = new cljs.core.IndexedSeq(G__7795__a,0,null);
} 
return G__7794__delegate.call(this,n,other,_);};
G__7794.cljs$lang$maxFixedArity = 2;
G__7794.cljs$lang$applyTo = (function (arglist__7796){
var n = cljs.core.first(arglist__7796);
arglist__7796 = cljs.core.next(arglist__7796);
var other = cljs.core.first(arglist__7796);
var _ = cljs.core.rest(arglist__7796);
return G__7794__delegate(n,other,_);
});
G__7794.cljs$core$IFn$_invoke$arity$variadic = G__7794__delegate;
return G__7794;
})()
,(function() { 
var G__7797__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7797 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7798__i = 0, G__7798__a = new Array(arguments.length -  2);
while (G__7798__i < G__7798__a.length) {G__7798__a[G__7798__i] = arguments[G__7798__i + 2]; ++G__7798__i;}
  _ = new cljs.core.IndexedSeq(G__7798__a,0,null);
} 
return G__7797__delegate.call(this,n,other,_);};
G__7797.cljs$lang$maxFixedArity = 2;
G__7797.cljs$lang$applyTo = (function (arglist__7799){
var n = cljs.core.first(arglist__7799);
arglist__7799 = cljs.core.next(arglist__7799);
var other = cljs.core.first(arglist__7799);
var _ = cljs.core.rest(arglist__7799);
return G__7797__delegate(n,other,_);
});
G__7797.cljs$core$IFn$_invoke$arity$variadic = G__7797__delegate;
return G__7797;
})()
,(function() { 
var G__7800__delegate = function (n,other,_){
return (n - other);
};
var G__7800 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7801__i = 0, G__7801__a = new Array(arguments.length -  2);
while (G__7801__i < G__7801__a.length) {G__7801__a[G__7801__i] = arguments[G__7801__i + 2]; ++G__7801__i;}
  _ = new cljs.core.IndexedSeq(G__7801__a,0,null);
} 
return G__7800__delegate.call(this,n,other,_);};
G__7800.cljs$lang$maxFixedArity = 2;
G__7800.cljs$lang$applyTo = (function (arglist__7802){
var n = cljs.core.first(arglist__7802);
arglist__7802 = cljs.core.next(arglist__7802);
var other = cljs.core.first(arglist__7802);
var _ = cljs.core.rest(arglist__7802);
return G__7800__delegate(n,other,_);
});
G__7800.cljs$core$IFn$_invoke$arity$variadic = G__7800__delegate;
return G__7800;
})()
,(function() { 
var G__7803__delegate = function (n,other,_){
return (n * other);
};
var G__7803 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7804__i = 0, G__7804__a = new Array(arguments.length -  2);
while (G__7804__i < G__7804__a.length) {G__7804__a[G__7804__i] = arguments[G__7804__i + 2]; ++G__7804__i;}
  _ = new cljs.core.IndexedSeq(G__7804__a,0,null);
} 
return G__7803__delegate.call(this,n,other,_);};
G__7803.cljs$lang$maxFixedArity = 2;
G__7803.cljs$lang$applyTo = (function (arglist__7805){
var n = cljs.core.first(arglist__7805);
arglist__7805 = cljs.core.next(arglist__7805);
var other = cljs.core.first(arglist__7805);
var _ = cljs.core.rest(arglist__7805);
return G__7803__delegate(n,other,_);
});
G__7803.cljs$core$IFn$_invoke$arity$variadic = G__7803__delegate;
return G__7803;
})()
,(function() { 
var G__7806__delegate = function (n,other,_){
return (n / other);
};
var G__7806 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7807__i = 0, G__7807__a = new Array(arguments.length -  2);
while (G__7807__i < G__7807__a.length) {G__7807__a[G__7807__i] = arguments[G__7807__i + 2]; ++G__7807__i;}
  _ = new cljs.core.IndexedSeq(G__7807__a,0,null);
} 
return G__7806__delegate.call(this,n,other,_);};
G__7806.cljs$lang$maxFixedArity = 2;
G__7806.cljs$lang$applyTo = (function (arglist__7808){
var n = cljs.core.first(arglist__7808);
arglist__7808 = cljs.core.next(arglist__7808);
var other = cljs.core.first(arglist__7808);
var _ = cljs.core.rest(arglist__7808);
return G__7806__delegate(n,other,_);
});
G__7806.cljs$core$IFn$_invoke$arity$variadic = G__7806__delegate;
return G__7806;
})()
,(function() { 
var G__7809__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7809 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7810__i = 0, G__7810__a = new Array(arguments.length -  1);
while (G__7810__i < G__7810__a.length) {G__7810__a[G__7810__i] = arguments[G__7810__i + 1]; ++G__7810__i;}
  _ = new cljs.core.IndexedSeq(G__7810__a,0,null);
} 
return G__7809__delegate.call(this,n,_);};
G__7809.cljs$lang$maxFixedArity = 1;
G__7809.cljs$lang$applyTo = (function (arglist__7811){
var n = cljs.core.first(arglist__7811);
var _ = cljs.core.rest(arglist__7811);
return G__7809__delegate(n,_);
});
G__7809.cljs$core$IFn$_invoke$arity$variadic = G__7809__delegate;
return G__7809;
})()
,(function() { 
var G__7812__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7812 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7813__i = 0, G__7813__a = new Array(arguments.length -  1);
while (G__7813__i < G__7813__a.length) {G__7813__a[G__7813__i] = arguments[G__7813__i + 1]; ++G__7813__i;}
  _ = new cljs.core.IndexedSeq(G__7813__a,0,null);
} 
return G__7812__delegate.call(this,n,_);};
G__7812.cljs$lang$maxFixedArity = 1;
G__7812.cljs$lang$applyTo = (function (arglist__7814){
var n = cljs.core.first(arglist__7814);
var _ = cljs.core.rest(arglist__7814);
return G__7812__delegate(n,_);
});
G__7812.cljs$core$IFn$_invoke$arity$variadic = G__7812__delegate;
return G__7812;
})()
,(function() { 
var G__7815__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7815 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7816__i = 0, G__7816__a = new Array(arguments.length -  2);
while (G__7816__i < G__7816__a.length) {G__7816__a[G__7816__i] = arguments[G__7816__i + 2]; ++G__7816__i;}
  _ = new cljs.core.IndexedSeq(G__7816__a,0,null);
} 
return G__7815__delegate.call(this,n,other,_);};
G__7815.cljs$lang$maxFixedArity = 2;
G__7815.cljs$lang$applyTo = (function (arglist__7817){
var n = cljs.core.first(arglist__7817);
arglist__7817 = cljs.core.next(arglist__7817);
var other = cljs.core.first(arglist__7817);
var _ = cljs.core.rest(arglist__7817);
return G__7815__delegate(n,other,_);
});
G__7815.cljs$core$IFn$_invoke$arity$variadic = G__7815__delegate;
return G__7815;
})()
,(function() { 
var G__7818__delegate = function (n,other,_){
return (n >= other);
};
var G__7818 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7819__i = 0, G__7819__a = new Array(arguments.length -  2);
while (G__7819__i < G__7819__a.length) {G__7819__a[G__7819__i] = arguments[G__7819__i + 2]; ++G__7819__i;}
  _ = new cljs.core.IndexedSeq(G__7819__a,0,null);
} 
return G__7818__delegate.call(this,n,other,_);};
G__7818.cljs$lang$maxFixedArity = 2;
G__7818.cljs$lang$applyTo = (function (arglist__7820){
var n = cljs.core.first(arglist__7820);
arglist__7820 = cljs.core.next(arglist__7820);
var other = cljs.core.first(arglist__7820);
var _ = cljs.core.rest(arglist__7820);
return G__7818__delegate(n,other,_);
});
G__7818.cljs$core$IFn$_invoke$arity$variadic = G__7818__delegate;
return G__7818;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["await",(function() { 
var G__7822__delegate = function (t,p__6392){
var vec__6393 = p__6392;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6393,(0),null);
var result = (((!((timeout == null))))?nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2(t,timeout):nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,nex.interpreter.task_timeout_signal)){
return null;
} else {
return result;
}
};
var G__7822 = function (t,var_args){
var p__6392 = null;
if (arguments.length > 1) {
var G__7823__i = 0, G__7823__a = new Array(arguments.length -  1);
while (G__7823__i < G__7823__a.length) {G__7823__a[G__7823__i] = arguments[G__7823__i + 1]; ++G__7823__i;}
  p__6392 = new cljs.core.IndexedSeq(G__7823__a,0,null);
} 
return G__7822__delegate.call(this,t,p__6392);};
G__7822.cljs$lang$maxFixedArity = 1;
G__7822.cljs$lang$applyTo = (function (arglist__7824){
var t = cljs.core.first(arglist__7824);
var p__6392 = cljs.core.rest(arglist__7824);
return G__7822__delegate(t,p__6392);
});
G__7822.cljs$core$IFn$_invoke$arity$variadic = G__7822__delegate;
return G__7822;
})()
,"cancel",(function() { 
var G__7825__delegate = function (t,_){
return nex.interpreter.task_cancel(t);
};
var G__7825 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7826__i = 0, G__7826__a = new Array(arguments.length -  1);
while (G__7826__i < G__7826__a.length) {G__7826__a[G__7826__i] = arguments[G__7826__i + 1]; ++G__7826__i;}
  _ = new cljs.core.IndexedSeq(G__7826__a,0,null);
} 
return G__7825__delegate.call(this,t,_);};
G__7825.cljs$lang$maxFixedArity = 1;
G__7825.cljs$lang$applyTo = (function (arglist__7827){
var t = cljs.core.first(arglist__7827);
var _ = cljs.core.rest(arglist__7827);
return G__7825__delegate(t,_);
});
G__7825.cljs$core$IFn$_invoke$arity$variadic = G__7825__delegate;
return G__7825;
})()
,"is_done",(function() { 
var G__7828__delegate = function (t,_){
return cljs.core.deref(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(t));
};
var G__7828 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7829__i = 0, G__7829__a = new Array(arguments.length -  1);
while (G__7829__i < G__7829__a.length) {G__7829__a[G__7829__i] = arguments[G__7829__i + 1]; ++G__7829__i;}
  _ = new cljs.core.IndexedSeq(G__7829__a,0,null);
} 
return G__7828__delegate.call(this,t,_);};
G__7828.cljs$lang$maxFixedArity = 1;
G__7828.cljs$lang$applyTo = (function (arglist__7830){
var t = cljs.core.first(arglist__7830);
var _ = cljs.core.rest(arglist__7830);
return G__7828__delegate(t,_);
});
G__7828.cljs$core$IFn$_invoke$arity$variadic = G__7828__delegate;
return G__7828;
})()
,"is_cancelled",(function() { 
var G__7831__delegate = function (t,_){
return nex.interpreter.task_cancelled_QMARK_(t);
};
var G__7831 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7832__i = 0, G__7832__a = new Array(arguments.length -  1);
while (G__7832__i < G__7832__a.length) {G__7832__a[G__7832__i] = arguments[G__7832__i + 1]; ++G__7832__i;}
  _ = new cljs.core.IndexedSeq(G__7832__a,0,null);
} 
return G__7831__delegate.call(this,t,_);};
G__7831.cljs$lang$maxFixedArity = 1;
G__7831.cljs$lang$applyTo = (function (arglist__7833){
var t = cljs.core.first(arglist__7833);
var _ = cljs.core.rest(arglist__7833);
return G__7831__delegate(t,_);
});
G__7831.cljs$core$IFn$_invoke$arity$variadic = G__7831__delegate;
return G__7831;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7834__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7834 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7835__i = 0, G__7835__a = new Array(arguments.length -  1);
while (G__7835__i < G__7835__a.length) {G__7835__a[G__7835__i] = arguments[G__7835__i + 1]; ++G__7835__i;}
  _ = new cljs.core.IndexedSeq(G__7835__a,0,null);
} 
return G__7834__delegate.call(this,c,_);};
G__7834.cljs$lang$maxFixedArity = 1;
G__7834.cljs$lang$applyTo = (function (arglist__7836){
var c = cljs.core.first(arglist__7836);
var _ = cljs.core.rest(arglist__7836);
return G__7834__delegate(c,_);
});
G__7834.cljs$core$IFn$_invoke$arity$variadic = G__7834__delegate;
return G__7834;
})()
,"item",(function() { 
var G__7837__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7837 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7838__i = 0, G__7838__a = new Array(arguments.length -  1);
while (G__7838__i < G__7838__a.length) {G__7838__a[G__7838__i] = arguments[G__7838__i + 1]; ++G__7838__i;}
  _ = new cljs.core.IndexedSeq(G__7838__a,0,null);
} 
return G__7837__delegate.call(this,c,_);};
G__7837.cljs$lang$maxFixedArity = 1;
G__7837.cljs$lang$applyTo = (function (arglist__7839){
var c = cljs.core.first(arglist__7839);
var _ = cljs.core.rest(arglist__7839);
return G__7837__delegate(c,_);
});
G__7837.cljs$core$IFn$_invoke$arity$variadic = G__7837__delegate;
return G__7837;
})()
,"next",(function() { 
var G__7840__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7840 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7841__i = 0, G__7841__a = new Array(arguments.length -  1);
while (G__7841__i < G__7841__a.length) {G__7841__a[G__7841__i] = arguments[G__7841__i + 1]; ++G__7841__i;}
  _ = new cljs.core.IndexedSeq(G__7841__a,0,null);
} 
return G__7840__delegate.call(this,c,_);};
G__7840.cljs$lang$maxFixedArity = 1;
G__7840.cljs$lang$applyTo = (function (arglist__7842){
var c = cljs.core.first(arglist__7842);
var _ = cljs.core.rest(arglist__7842);
return G__7840__delegate(c,_);
});
G__7840.cljs$core$IFn$_invoke$arity$variadic = G__7840__delegate;
return G__7840;
})()
,"at_end",(function() { 
var G__7843__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7843 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7844__i = 0, G__7844__a = new Array(arguments.length -  1);
while (G__7844__i < G__7844__a.length) {G__7844__a[G__7844__i] = arguments[G__7844__i + 1]; ++G__7844__i;}
  _ = new cljs.core.IndexedSeq(G__7844__a,0,null);
} 
return G__7843__delegate.call(this,c,_);};
G__7843.cljs$lang$maxFixedArity = 1;
G__7843.cljs$lang$applyTo = (function (arglist__7845){
var c = cljs.core.first(arglist__7845);
var _ = cljs.core.rest(arglist__7845);
return G__7843__delegate(c,_);
});
G__7843.cljs$core$IFn$_invoke$arity$variadic = G__7843__delegate;
return G__7843;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__7846__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7846 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7847__i = 0, G__7847__a = new Array(arguments.length -  2);
while (G__7847__i < G__7847__a.length) {G__7847__a[G__7847__i] = arguments[G__7847__i + 2]; ++G__7847__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7847__a,0,null);
} 
return G__7846__delegate.call(this,_,msg,___$1);};
G__7846.cljs$lang$maxFixedArity = 2;
G__7846.cljs$lang$applyTo = (function (arglist__7848){
var _ = cljs.core.first(arglist__7848);
arglist__7848 = cljs.core.next(arglist__7848);
var msg = cljs.core.first(arglist__7848);
var ___$1 = cljs.core.rest(arglist__7848);
return G__7846__delegate(_,msg,___$1);
});
G__7846.cljs$core$IFn$_invoke$arity$variadic = G__7846__delegate;
return G__7846;
})()
,"print_line",(function() { 
var G__7849__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7849 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7851__i = 0, G__7851__a = new Array(arguments.length -  2);
while (G__7851__i < G__7851__a.length) {G__7851__a[G__7851__i] = arguments[G__7851__i + 2]; ++G__7851__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7851__a,0,null);
} 
return G__7849__delegate.call(this,_,msg,___$1);};
G__7849.cljs$lang$maxFixedArity = 2;
G__7849.cljs$lang$applyTo = (function (arglist__7852){
var _ = cljs.core.first(arglist__7852);
arglist__7852 = cljs.core.next(arglist__7852);
var msg = cljs.core.first(arglist__7852);
var ___$1 = cljs.core.rest(arglist__7852);
return G__7849__delegate(_,msg,___$1);
});
G__7849.cljs$core$IFn$_invoke$arity$variadic = G__7849__delegate;
return G__7849;
})()
,"read_line",(function() { 
var G__7853__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__7853 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__7854__i = 0, G__7854__a = new Array(arguments.length -  1);
while (G__7854__i < G__7854__a.length) {G__7854__a[G__7854__i] = arguments[G__7854__i + 1]; ++G__7854__i;}
  args = new cljs.core.IndexedSeq(G__7854__a,0,null);
} 
return G__7853__delegate.call(this,_,args);};
G__7853.cljs$lang$maxFixedArity = 1;
G__7853.cljs$lang$applyTo = (function (arglist__7855){
var _ = cljs.core.first(arglist__7855);
var args = cljs.core.rest(arglist__7855);
return G__7853__delegate(_,args);
});
G__7853.cljs$core$IFn$_invoke$arity$variadic = G__7853__delegate;
return G__7853;
})()
,"error",(function() { 
var G__7856__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7856 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7857__i = 0, G__7857__a = new Array(arguments.length -  2);
while (G__7857__i < G__7857__a.length) {G__7857__a[G__7857__i] = arguments[G__7857__i + 2]; ++G__7857__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7857__a,0,null);
} 
return G__7856__delegate.call(this,_,msg,___$1);};
G__7856.cljs$lang$maxFixedArity = 2;
G__7856.cljs$lang$applyTo = (function (arglist__7858){
var _ = cljs.core.first(arglist__7858);
arglist__7858 = cljs.core.next(arglist__7858);
var msg = cljs.core.first(arglist__7858);
var ___$1 = cljs.core.rest(arglist__7858);
return G__7856__delegate(_,msg,___$1);
});
G__7856.cljs$core$IFn$_invoke$arity$variadic = G__7856__delegate;
return G__7856;
})()
,"new_line",(function() { 
var G__7859__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__7859 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7860__i = 0, G__7860__a = new Array(arguments.length -  1);
while (G__7860__i < G__7860__a.length) {G__7860__a[G__7860__i] = arguments[G__7860__i + 1]; ++G__7860__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7860__a,0,null);
} 
return G__7859__delegate.call(this,_,___$1);};
G__7859.cljs$lang$maxFixedArity = 1;
G__7859.cljs$lang$applyTo = (function (arglist__7861){
var _ = cljs.core.first(arglist__7861);
var ___$1 = cljs.core.rest(arglist__7861);
return G__7859__delegate(_,___$1);
});
G__7859.cljs$core$IFn$_invoke$arity$variadic = G__7859__delegate;
return G__7859;
})()
,"read_integer",(function() { 
var G__7862__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__7862 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7863__i = 0, G__7863__a = new Array(arguments.length -  1);
while (G__7863__i < G__7863__a.length) {G__7863__a[G__7863__i] = arguments[G__7863__i + 1]; ++G__7863__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7863__a,0,null);
} 
return G__7862__delegate.call(this,_,___$1);};
G__7862.cljs$lang$maxFixedArity = 1;
G__7862.cljs$lang$applyTo = (function (arglist__7864){
var _ = cljs.core.first(arglist__7864);
var ___$1 = cljs.core.rest(arglist__7864);
return G__7862__delegate(_,___$1);
});
G__7862.cljs$core$IFn$_invoke$arity$variadic = G__7862__delegate;
return G__7862;
})()
,"read_real",(function() { 
var G__7865__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__7865 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7866__i = 0, G__7866__a = new Array(arguments.length -  1);
while (G__7866__i < G__7866__a.length) {G__7866__a[G__7866__i] = arguments[G__7866__i + 1]; ++G__7866__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7866__a,0,null);
} 
return G__7865__delegate.call(this,_,___$1);};
G__7865.cljs$lang$maxFixedArity = 1;
G__7865.cljs$lang$applyTo = (function (arglist__7867){
var _ = cljs.core.first(arglist__7867);
var ___$1 = cljs.core.rest(arglist__7867);
return G__7865__delegate(_,___$1);
});
G__7865.cljs$core$IFn$_invoke$arity$variadic = G__7865__delegate;
return G__7865;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__7868__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__7868 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7869__i = 0, G__7869__a = new Array(arguments.length -  4);
while (G__7869__i < G__7869__a.length) {G__7869__a[G__7869__i] = arguments[G__7869__i + 4]; ++G__7869__i;}
  _ = new cljs.core.IndexedSeq(G__7869__a,0,null);
} 
return G__7868__delegate.call(this,w,text,x,y,_);};
G__7868.cljs$lang$maxFixedArity = 4;
G__7868.cljs$lang$applyTo = (function (arglist__7870){
var w = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var text = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var x = cljs.core.first(arglist__7870);
arglist__7870 = cljs.core.next(arglist__7870);
var y = cljs.core.first(arglist__7870);
var _ = cljs.core.rest(arglist__7870);
return G__7868__delegate(w,text,x,y,_);
});
G__7868.cljs$core$IFn$_invoke$arity$variadic = G__7868__delegate;
return G__7868;
})()
,(function() { 
var G__7871__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
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
var G__7874__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__7874 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7875__i = 0, G__7875__a = new Array(arguments.length -  2);
while (G__7875__i < G__7875__a.length) {G__7875__a[G__7875__i] = arguments[G__7875__i + 2]; ++G__7875__i;}
  _ = new cljs.core.IndexedSeq(G__7875__a,0,null);
} 
return G__7874__delegate.call(this,w,size,_);};
G__7874.cljs$lang$maxFixedArity = 2;
G__7874.cljs$lang$applyTo = (function (arglist__7876){
var w = cljs.core.first(arglist__7876);
arglist__7876 = cljs.core.next(arglist__7876);
var size = cljs.core.first(arglist__7876);
var _ = cljs.core.rest(arglist__7876);
return G__7874__delegate(w,size,_);
});
G__7874.cljs$core$IFn$_invoke$arity$variadic = G__7874__delegate;
return G__7874;
})()
,(function() { 
var G__7877__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__7877 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__7878__i = 0, G__7878__a = new Array(arguments.length -  6);
while (G__7878__i < G__7878__a.length) {G__7878__a[G__7878__i] = arguments[G__7878__i + 6]; ++G__7878__i;}
  _ = new cljs.core.IndexedSeq(G__7878__a,0,null);
} 
return G__7877__delegate.call(this,w,img,x,y,width,height,_);};
G__7877.cljs$lang$maxFixedArity = 6;
G__7877.cljs$lang$applyTo = (function (arglist__7879){
var w = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var img = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var x = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var y = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var width = cljs.core.first(arglist__7879);
arglist__7879 = cljs.core.next(arglist__7879);
var height = cljs.core.first(arglist__7879);
var _ = cljs.core.rest(arglist__7879);
return G__7877__delegate(w,img,x,y,width,height,_);
});
G__7877.cljs$core$IFn$_invoke$arity$variadic = G__7877__delegate;
return G__7877;
})()
,(function() { 
var G__7880__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__7880 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7881__i = 0, G__7881__a = new Array(arguments.length -  1);
while (G__7881__i < G__7881__a.length) {G__7881__a[G__7881__i] = arguments[G__7881__i + 1]; ++G__7881__i;}
  _ = new cljs.core.IndexedSeq(G__7881__a,0,null);
} 
return G__7880__delegate.call(this,w,_);};
G__7880.cljs$lang$maxFixedArity = 1;
G__7880.cljs$lang$applyTo = (function (arglist__7882){
var w = cljs.core.first(arglist__7882);
var _ = cljs.core.rest(arglist__7882);
return G__7880__delegate(w,_);
});
G__7880.cljs$core$IFn$_invoke$arity$variadic = G__7880__delegate;
return G__7880;
})()
,(function() { 
var G__7883__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__7883 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7884__i = 0, G__7884__a = new Array(arguments.length -  4);
while (G__7884__i < G__7884__a.length) {G__7884__a[G__7884__i] = arguments[G__7884__i + 4]; ++G__7884__i;}
  _ = new cljs.core.IndexedSeq(G__7884__a,0,null);
} 
return G__7883__delegate.call(this,w,img,x,y,_);};
G__7883.cljs$lang$maxFixedArity = 4;
G__7883.cljs$lang$applyTo = (function (arglist__7885){
var w = cljs.core.first(arglist__7885);
arglist__7885 = cljs.core.next(arglist__7885);
var img = cljs.core.first(arglist__7885);
arglist__7885 = cljs.core.next(arglist__7885);
var x = cljs.core.first(arglist__7885);
arglist__7885 = cljs.core.next(arglist__7885);
var y = cljs.core.first(arglist__7885);
var _ = cljs.core.rest(arglist__7885);
return G__7883__delegate(w,img,x,y,_);
});
G__7883.cljs$core$IFn$_invoke$arity$variadic = G__7883__delegate;
return G__7883;
})()
,(function() { 
var G__7886__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__7886 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7887__i = 0, G__7887__a = new Array(arguments.length -  2);
while (G__7887__i < G__7887__a.length) {G__7887__a[G__7887__i] = arguments[G__7887__i + 2]; ++G__7887__i;}
  _ = new cljs.core.IndexedSeq(G__7887__a,0,null);
} 
return G__7886__delegate.call(this,w,ms,_);};
G__7886.cljs$lang$maxFixedArity = 2;
G__7886.cljs$lang$applyTo = (function (arglist__7888){
var w = cljs.core.first(arglist__7888);
arglist__7888 = cljs.core.next(arglist__7888);
var ms = cljs.core.first(arglist__7888);
var _ = cljs.core.rest(arglist__7888);
return G__7886__delegate(w,ms,_);
});
G__7886.cljs$core$IFn$_invoke$arity$variadic = G__7886__delegate;
return G__7886;
})()
,(function() { 
var G__7889__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__7889 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7890__i = 0, G__7890__a = new Array(arguments.length -  5);
while (G__7890__i < G__7890__a.length) {G__7890__a[G__7890__i] = arguments[G__7890__i + 5]; ++G__7890__i;}
  _ = new cljs.core.IndexedSeq(G__7890__a,0,null);
} 
return G__7889__delegate.call(this,w,x1,y1,x2,y2,_);};
G__7889.cljs$lang$maxFixedArity = 5;
G__7889.cljs$lang$applyTo = (function (arglist__7891){
var w = cljs.core.first(arglist__7891);
arglist__7891 = cljs.core.next(arglist__7891);
var x1 = cljs.core.first(arglist__7891);
arglist__7891 = cljs.core.next(arglist__7891);
var y1 = cljs.core.first(arglist__7891);
arglist__7891 = cljs.core.next(arglist__7891);
var x2 = cljs.core.first(arglist__7891);
arglist__7891 = cljs.core.next(arglist__7891);
var y2 = cljs.core.first(arglist__7891);
var _ = cljs.core.rest(arglist__7891);
return G__7889__delegate(w,x1,y1,x2,y2,_);
});
G__7889.cljs$core$IFn$_invoke$arity$variadic = G__7889__delegate;
return G__7889;
})()
,(function() { 
var G__7892__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__7892 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7893__i = 0, G__7893__a = new Array(arguments.length -  1);
while (G__7893__i < G__7893__a.length) {G__7893__a[G__7893__i] = arguments[G__7893__i + 1]; ++G__7893__i;}
  _ = new cljs.core.IndexedSeq(G__7893__a,0,null);
} 
return G__7892__delegate.call(this,w,_);};
G__7892.cljs$lang$maxFixedArity = 1;
G__7892.cljs$lang$applyTo = (function (arglist__7894){
var w = cljs.core.first(arglist__7894);
var _ = cljs.core.rest(arglist__7894);
return G__7892__delegate(w,_);
});
G__7892.cljs$core$IFn$_invoke$arity$variadic = G__7892__delegate;
return G__7892;
})()
,(function() { 
var G__7895__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__7895 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7896__i = 0, G__7896__a = new Array(arguments.length -  4);
while (G__7896__i < G__7896__a.length) {G__7896__a[G__7896__i] = arguments[G__7896__i + 4]; ++G__7896__i;}
  _ = new cljs.core.IndexedSeq(G__7896__a,0,null);
} 
return G__7895__delegate.call(this,w,x,y,r,_);};
G__7895.cljs$lang$maxFixedArity = 4;
G__7895.cljs$lang$applyTo = (function (arglist__7897){
var w = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var x = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var y = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var r = cljs.core.first(arglist__7897);
var _ = cljs.core.rest(arglist__7897);
return G__7895__delegate(w,x,y,r,_);
});
G__7895.cljs$core$IFn$_invoke$arity$variadic = G__7895__delegate;
return G__7895;
})()
,(function() { 
var G__7898__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__7898 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7899__i = 0, G__7899__a = new Array(arguments.length -  5);
while (G__7899__i < G__7899__a.length) {G__7899__a[G__7899__i] = arguments[G__7899__i + 5]; ++G__7899__i;}
  _ = new cljs.core.IndexedSeq(G__7899__a,0,null);
} 
return G__7898__delegate.call(this,w,x,y,width,height,_);};
G__7898.cljs$lang$maxFixedArity = 5;
G__7898.cljs$lang$applyTo = (function (arglist__7900){
var w = cljs.core.first(arglist__7900);
arglist__7900 = cljs.core.next(arglist__7900);
var x = cljs.core.first(arglist__7900);
arglist__7900 = cljs.core.next(arglist__7900);
var y = cljs.core.first(arglist__7900);
arglist__7900 = cljs.core.next(arglist__7900);
var width = cljs.core.first(arglist__7900);
arglist__7900 = cljs.core.next(arglist__7900);
var height = cljs.core.first(arglist__7900);
var _ = cljs.core.rest(arglist__7900);
return G__7898__delegate(w,x,y,width,height,_);
});
G__7898.cljs$core$IFn$_invoke$arity$variadic = G__7898__delegate;
return G__7898;
})()
,(function() { 
var G__7901__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__7901 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7902__i = 0, G__7902__a = new Array(arguments.length -  5);
while (G__7902__i < G__7902__a.length) {G__7902__a[G__7902__i] = arguments[G__7902__i + 5]; ++G__7902__i;}
  _ = new cljs.core.IndexedSeq(G__7902__a,0,null);
} 
return G__7901__delegate.call(this,w,img,x,y,angle,_);};
G__7901.cljs$lang$maxFixedArity = 5;
G__7901.cljs$lang$applyTo = (function (arglist__7903){
var w = cljs.core.first(arglist__7903);
arglist__7903 = cljs.core.next(arglist__7903);
var img = cljs.core.first(arglist__7903);
arglist__7903 = cljs.core.next(arglist__7903);
var x = cljs.core.first(arglist__7903);
arglist__7903 = cljs.core.next(arglist__7903);
var y = cljs.core.first(arglist__7903);
arglist__7903 = cljs.core.next(arglist__7903);
var angle = cljs.core.first(arglist__7903);
var _ = cljs.core.rest(arglist__7903);
return G__7901__delegate(w,img,x,y,angle,_);
});
G__7901.cljs$core$IFn$_invoke$arity$variadic = G__7901__delegate;
return G__7901;
})()
,(function() { 
var G__7904__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7904 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7905__i = 0, G__7905__a = new Array(arguments.length -  2);
while (G__7905__i < G__7905__a.length) {G__7905__a[G__7905__i] = arguments[G__7905__i + 2]; ++G__7905__i;}
  _ = new cljs.core.IndexedSeq(G__7905__a,0,null);
} 
return G__7904__delegate.call(this,w,color,_);};
G__7904.cljs$lang$maxFixedArity = 2;
G__7904.cljs$lang$applyTo = (function (arglist__7906){
var w = cljs.core.first(arglist__7906);
arglist__7906 = cljs.core.next(arglist__7906);
var color = cljs.core.first(arglist__7906);
var _ = cljs.core.rest(arglist__7906);
return G__7904__delegate(w,color,_);
});
G__7904.cljs$core$IFn$_invoke$arity$variadic = G__7904__delegate;
return G__7904;
})()
,(function() { 
var G__7907__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__7907 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7908__i = 0, G__7908__a = new Array(arguments.length -  5);
while (G__7908__i < G__7908__a.length) {G__7908__a[G__7908__i] = arguments[G__7908__i + 5]; ++G__7908__i;}
  _ = new cljs.core.IndexedSeq(G__7908__a,0,null);
} 
return G__7907__delegate.call(this,w,x,y,width,height,_);};
G__7907.cljs$lang$maxFixedArity = 5;
G__7907.cljs$lang$applyTo = (function (arglist__7909){
var w = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var x = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var y = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var width = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var height = cljs.core.first(arglist__7909);
var _ = cljs.core.rest(arglist__7909);
return G__7907__delegate(w,x,y,width,height,_);
});
G__7907.cljs$core$IFn$_invoke$arity$variadic = G__7907__delegate;
return G__7907;
})()
,(function() { 
var G__7910__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__7910 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7911__i = 0, G__7911__a = new Array(arguments.length -  1);
while (G__7911__i < G__7911__a.length) {G__7911__a[G__7911__i] = arguments[G__7911__i + 1]; ++G__7911__i;}
  _ = new cljs.core.IndexedSeq(G__7911__a,0,null);
} 
return G__7910__delegate.call(this,w,_);};
G__7910.cljs$lang$maxFixedArity = 1;
G__7910.cljs$lang$applyTo = (function (arglist__7912){
var w = cljs.core.first(arglist__7912);
var _ = cljs.core.rest(arglist__7912);
return G__7910__delegate(w,_);
});
G__7910.cljs$core$IFn$_invoke$arity$variadic = G__7910__delegate;
return G__7910;
})()
,(function() { 
var G__7913__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__7913 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7914__i = 0, G__7914__a = new Array(arguments.length -  4);
while (G__7914__i < G__7914__a.length) {G__7914__a[G__7914__i] = arguments[G__7914__i + 4]; ++G__7914__i;}
  _ = new cljs.core.IndexedSeq(G__7914__a,0,null);
} 
return G__7913__delegate.call(this,w,x,y,r,_);};
G__7913.cljs$lang$maxFixedArity = 4;
G__7913.cljs$lang$applyTo = (function (arglist__7915){
var w = cljs.core.first(arglist__7915);
arglist__7915 = cljs.core.next(arglist__7915);
var x = cljs.core.first(arglist__7915);
arglist__7915 = cljs.core.next(arglist__7915);
var y = cljs.core.first(arglist__7915);
arglist__7915 = cljs.core.next(arglist__7915);
var r = cljs.core.first(arglist__7915);
var _ = cljs.core.rest(arglist__7915);
return G__7913__delegate(w,x,y,r,_);
});
G__7913.cljs$core$IFn$_invoke$arity$variadic = G__7913__delegate;
return G__7913;
})()
,(function() { 
var G__7916__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7916 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7917__i = 0, G__7917__a = new Array(arguments.length -  2);
while (G__7917__i < G__7917__a.length) {G__7917__a[G__7917__i] = arguments[G__7917__i + 2]; ++G__7917__i;}
  _ = new cljs.core.IndexedSeq(G__7917__a,0,null);
} 
return G__7916__delegate.call(this,w,color,_);};
G__7916.cljs$lang$maxFixedArity = 2;
G__7916.cljs$lang$applyTo = (function (arglist__7918){
var w = cljs.core.first(arglist__7918);
arglist__7918 = cljs.core.next(arglist__7918);
var color = cljs.core.first(arglist__7918);
var _ = cljs.core.rest(arglist__7918);
return G__7916__delegate(w,color,_);
});
G__7916.cljs$core$IFn$_invoke$arity$variadic = G__7916__delegate;
return G__7916;
})()
,(function() { 
var G__7919__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__7919 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7920__i = 0, G__7920__a = new Array(arguments.length -  1);
while (G__7920__i < G__7920__a.length) {G__7920__a[G__7920__i] = arguments[G__7920__i + 1]; ++G__7920__i;}
  _ = new cljs.core.IndexedSeq(G__7920__a,0,null);
} 
return G__7919__delegate.call(this,w,_);};
G__7919.cljs$lang$maxFixedArity = 1;
G__7919.cljs$lang$applyTo = (function (arglist__7921){
var w = cljs.core.first(arglist__7921);
var _ = cljs.core.rest(arglist__7921);
return G__7919__delegate(w,_);
});
G__7919.cljs$core$IFn$_invoke$arity$variadic = G__7919__delegate;
return G__7919;
})()
,(function() { 
var G__7922__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__7922 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7923__i = 0, G__7923__a = new Array(arguments.length -  1);
while (G__7923__i < G__7923__a.length) {G__7923__a[G__7923__i] = arguments[G__7923__i + 1]; ++G__7923__i;}
  _ = new cljs.core.IndexedSeq(G__7923__a,0,null);
} 
return G__7922__delegate.call(this,w,_);};
G__7922.cljs$lang$maxFixedArity = 1;
G__7922.cljs$lang$applyTo = (function (arglist__7924){
var w = cljs.core.first(arglist__7924);
var _ = cljs.core.rest(arglist__7924);
return G__7922__delegate(w,_);
});
G__7922.cljs$core$IFn$_invoke$arity$variadic = G__7922__delegate;
return G__7922;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__7925__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__7925 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7926__i = 0, G__7926__a = new Array(arguments.length -  2);
while (G__7926__i < G__7926__a.length) {G__7926__a[G__7926__i] = arguments[G__7926__i + 2]; ++G__7926__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7926__a,0,null);
} 
return G__7925__delegate.call(this,_,name,___$1);};
G__7925.cljs$lang$maxFixedArity = 2;
G__7925.cljs$lang$applyTo = (function (arglist__7927){
var _ = cljs.core.first(arglist__7927);
arglist__7927 = cljs.core.next(arglist__7927);
var name = cljs.core.first(arglist__7927);
var ___$1 = cljs.core.rest(arglist__7927);
return G__7925__delegate(_,name,___$1);
});
G__7925.cljs$core$IFn$_invoke$arity$variadic = G__7925__delegate;
return G__7925;
})()
,"setenv",(function() { 
var G__7928__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__7928 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__7930__i = 0, G__7930__a = new Array(arguments.length -  3);
while (G__7930__i < G__7930__a.length) {G__7930__a[G__7930__i] = arguments[G__7930__i + 3]; ++G__7930__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7930__a,0,null);
} 
return G__7928__delegate.call(this,_,name,value,___$1);};
G__7928.cljs$lang$maxFixedArity = 3;
G__7928.cljs$lang$applyTo = (function (arglist__7932){
var _ = cljs.core.first(arglist__7932);
arglist__7932 = cljs.core.next(arglist__7932);
var name = cljs.core.first(arglist__7932);
arglist__7932 = cljs.core.next(arglist__7932);
var value = cljs.core.first(arglist__7932);
var ___$1 = cljs.core.rest(arglist__7932);
return G__7928__delegate(_,name,value,___$1);
});
G__7928.cljs$core$IFn$_invoke$arity$variadic = G__7928__delegate;
return G__7928;
})()
,"command_line",(function() { 
var G__7933__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__7933 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7934__i = 0, G__7934__a = new Array(arguments.length -  1);
while (G__7934__i < G__7934__a.length) {G__7934__a[G__7934__i] = arguments[G__7934__i + 1]; ++G__7934__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7934__a,0,null);
} 
return G__7933__delegate.call(this,_,___$1);};
G__7933.cljs$lang$maxFixedArity = 1;
G__7933.cljs$lang$applyTo = (function (arglist__7935){
var _ = cljs.core.first(arglist__7935);
var ___$1 = cljs.core.rest(arglist__7935);
return G__7933__delegate(_,___$1);
});
G__7933.cljs$core$IFn$_invoke$arity$variadic = G__7933__delegate;
return G__7933;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__7937__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__7937 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7938__i = 0, G__7938__a = new Array(arguments.length -  1);
while (G__7938__i < G__7938__a.length) {G__7938__a[G__7938__i] = arguments[G__7938__i + 1]; ++G__7938__i;}
  _ = new cljs.core.IndexedSeq(G__7938__a,0,null);
} 
return G__7937__delegate.call(this,c,_);};
G__7937.cljs$lang$maxFixedArity = 1;
G__7937.cljs$lang$applyTo = (function (arglist__7940){
var c = cljs.core.first(arglist__7940);
var _ = cljs.core.rest(arglist__7940);
return G__7937__delegate(c,_);
});
G__7937.cljs$core$IFn$_invoke$arity$variadic = G__7937__delegate;
return G__7937;
})()
,"to_upper",(function() { 
var G__7941__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7941 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7942__i = 0, G__7942__a = new Array(arguments.length -  1);
while (G__7942__i < G__7942__a.length) {G__7942__a[G__7942__i] = arguments[G__7942__i + 1]; ++G__7942__i;}
  _ = new cljs.core.IndexedSeq(G__7942__a,0,null);
} 
return G__7941__delegate.call(this,c,_);};
G__7941.cljs$lang$maxFixedArity = 1;
G__7941.cljs$lang$applyTo = (function (arglist__7943){
var c = cljs.core.first(arglist__7943);
var _ = cljs.core.rest(arglist__7943);
return G__7941__delegate(c,_);
});
G__7941.cljs$core$IFn$_invoke$arity$variadic = G__7941__delegate;
return G__7941;
})()
,"to_lower",(function() { 
var G__7944__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7944 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7945__i = 0, G__7945__a = new Array(arguments.length -  1);
while (G__7945__i < G__7945__a.length) {G__7945__a[G__7945__i] = arguments[G__7945__i + 1]; ++G__7945__i;}
  _ = new cljs.core.IndexedSeq(G__7945__a,0,null);
} 
return G__7944__delegate.call(this,c,_);};
G__7944.cljs$lang$maxFixedArity = 1;
G__7944.cljs$lang$applyTo = (function (arglist__7946){
var c = cljs.core.first(arglist__7946);
var _ = cljs.core.rest(arglist__7946);
return G__7944__delegate(c,_);
});
G__7944.cljs$core$IFn$_invoke$arity$variadic = G__7944__delegate;
return G__7944;
})()
,"compare",(function() { 
var G__7947__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__7947 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7948__i = 0, G__7948__a = new Array(arguments.length -  2);
while (G__7948__i < G__7948__a.length) {G__7948__a[G__7948__i] = arguments[G__7948__i + 2]; ++G__7948__i;}
  _ = new cljs.core.IndexedSeq(G__7948__a,0,null);
} 
return G__7947__delegate.call(this,c,other,_);};
G__7947.cljs$lang$maxFixedArity = 2;
G__7947.cljs$lang$applyTo = (function (arglist__7949){
var c = cljs.core.first(arglist__7949);
arglist__7949 = cljs.core.next(arglist__7949);
var other = cljs.core.first(arglist__7949);
var _ = cljs.core.rest(arglist__7949);
return G__7947__delegate(c,other,_);
});
G__7947.cljs$core$IFn$_invoke$arity$variadic = G__7947__delegate;
return G__7947;
})()
,"hash",(function() { 
var G__7950__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__7950 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7951__i = 0, G__7951__a = new Array(arguments.length -  1);
while (G__7951__i < G__7951__a.length) {G__7951__a[G__7951__i] = arguments[G__7951__i + 1]; ++G__7951__i;}
  _ = new cljs.core.IndexedSeq(G__7951__a,0,null);
} 
return G__7950__delegate.call(this,c,_);};
G__7950.cljs$lang$maxFixedArity = 1;
G__7950.cljs$lang$applyTo = (function (arglist__7952){
var c = cljs.core.first(arglist__7952);
var _ = cljs.core.rest(arglist__7952);
return G__7950__delegate(c,_);
});
G__7950.cljs$core$IFn$_invoke$arity$variadic = G__7950__delegate;
return G__7950;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7953__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7953 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7954__i = 0, G__7954__a = new Array(arguments.length -  2);
while (G__7954__i < G__7954__a.length) {G__7954__a[G__7954__i] = arguments[G__7954__i + 2]; ++G__7954__i;}
  _ = new cljs.core.IndexedSeq(G__7954__a,0,null);
} 
return G__7953__delegate.call(this,n,other,_);};
G__7953.cljs$lang$maxFixedArity = 2;
G__7953.cljs$lang$applyTo = (function (arglist__7955){
var n = cljs.core.first(arglist__7955);
arglist__7955 = cljs.core.next(arglist__7955);
var other = cljs.core.first(arglist__7955);
var _ = cljs.core.rest(arglist__7955);
return G__7953__delegate(n,other,_);
});
G__7953.cljs$core$IFn$_invoke$arity$variadic = G__7953__delegate;
return G__7953;
})()
,(function() { 
var G__7956__delegate = function (n,other,_){
return (n <= other);
};
var G__7956 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7961__i = 0, G__7961__a = new Array(arguments.length -  2);
while (G__7961__i < G__7961__a.length) {G__7961__a[G__7961__i] = arguments[G__7961__i + 2]; ++G__7961__i;}
  _ = new cljs.core.IndexedSeq(G__7961__a,0,null);
} 
return G__7956__delegate.call(this,n,other,_);};
G__7956.cljs$lang$maxFixedArity = 2;
G__7956.cljs$lang$applyTo = (function (arglist__7963){
var n = cljs.core.first(arglist__7963);
arglist__7963 = cljs.core.next(arglist__7963);
var other = cljs.core.first(arglist__7963);
var _ = cljs.core.rest(arglist__7963);
return G__7956__delegate(n,other,_);
});
G__7956.cljs$core$IFn$_invoke$arity$variadic = G__7956__delegate;
return G__7956;
})()
,(function() { 
var G__7964__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7964 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7969__i = 0, G__7969__a = new Array(arguments.length -  2);
while (G__7969__i < G__7969__a.length) {G__7969__a[G__7969__i] = arguments[G__7969__i + 2]; ++G__7969__i;}
  _ = new cljs.core.IndexedSeq(G__7969__a,0,null);
} 
return G__7964__delegate.call(this,n,other,_);};
G__7964.cljs$lang$maxFixedArity = 2;
G__7964.cljs$lang$applyTo = (function (arglist__7971){
var n = cljs.core.first(arglist__7971);
arglist__7971 = cljs.core.next(arglist__7971);
var other = cljs.core.first(arglist__7971);
var _ = cljs.core.rest(arglist__7971);
return G__7964__delegate(n,other,_);
});
G__7964.cljs$core$IFn$_invoke$arity$variadic = G__7964__delegate;
return G__7964;
})()
,(function() { 
var G__7973__delegate = function (n,other,_){
return (n < other);
};
var G__7973 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7979__i = 0, G__7979__a = new Array(arguments.length -  2);
while (G__7979__i < G__7979__a.length) {G__7979__a[G__7979__i] = arguments[G__7979__i + 2]; ++G__7979__i;}
  _ = new cljs.core.IndexedSeq(G__7979__a,0,null);
} 
return G__7973__delegate.call(this,n,other,_);};
G__7973.cljs$lang$maxFixedArity = 2;
G__7973.cljs$lang$applyTo = (function (arglist__7980){
var n = cljs.core.first(arglist__7980);
arglist__7980 = cljs.core.next(arglist__7980);
var other = cljs.core.first(arglist__7980);
var _ = cljs.core.rest(arglist__7980);
return G__7973__delegate(n,other,_);
});
G__7973.cljs$core$IFn$_invoke$arity$variadic = G__7973__delegate;
return G__7973;
})()
,(function() { 
var G__7982__delegate = function (n,other,_){
return (n + other);
};
var G__7982 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7987__i = 0, G__7987__a = new Array(arguments.length -  2);
while (G__7987__i < G__7987__a.length) {G__7987__a[G__7987__i] = arguments[G__7987__i + 2]; ++G__7987__i;}
  _ = new cljs.core.IndexedSeq(G__7987__a,0,null);
} 
return G__7982__delegate.call(this,n,other,_);};
G__7982.cljs$lang$maxFixedArity = 2;
G__7982.cljs$lang$applyTo = (function (arglist__7988){
var n = cljs.core.first(arglist__7988);
arglist__7988 = cljs.core.next(arglist__7988);
var other = cljs.core.first(arglist__7988);
var _ = cljs.core.rest(arglist__7988);
return G__7982__delegate(n,other,_);
});
G__7982.cljs$core$IFn$_invoke$arity$variadic = G__7982__delegate;
return G__7982;
})()
,(function() { 
var G__7989__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7989 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7990__i = 0, G__7990__a = new Array(arguments.length -  1);
while (G__7990__i < G__7990__a.length) {G__7990__a[G__7990__i] = arguments[G__7990__i + 1]; ++G__7990__i;}
  _ = new cljs.core.IndexedSeq(G__7990__a,0,null);
} 
return G__7989__delegate.call(this,n,_);};
G__7989.cljs$lang$maxFixedArity = 1;
G__7989.cljs$lang$applyTo = (function (arglist__7992){
var n = cljs.core.first(arglist__7992);
var _ = cljs.core.rest(arglist__7992);
return G__7989__delegate(n,_);
});
G__7989.cljs$core$IFn$_invoke$arity$variadic = G__7989__delegate;
return G__7989;
})()
,(function() { 
var G__7993__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7993 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7994__i = 0, G__7994__a = new Array(arguments.length -  1);
while (G__7994__i < G__7994__a.length) {G__7994__a[G__7994__i] = arguments[G__7994__i + 1]; ++G__7994__i;}
  _ = new cljs.core.IndexedSeq(G__7994__a,0,null);
} 
return G__7993__delegate.call(this,n,_);};
G__7993.cljs$lang$maxFixedArity = 1;
G__7993.cljs$lang$applyTo = (function (arglist__7995){
var n = cljs.core.first(arglist__7995);
var _ = cljs.core.rest(arglist__7995);
return G__7993__delegate(n,_);
});
G__7993.cljs$core$IFn$_invoke$arity$variadic = G__7993__delegate;
return G__7993;
})()
,(function() { 
var G__7996__delegate = function (n,other,_){
return (n > other);
};
var G__7996 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7997__i = 0, G__7997__a = new Array(arguments.length -  2);
while (G__7997__i < G__7997__a.length) {G__7997__a[G__7997__i] = arguments[G__7997__i + 2]; ++G__7997__i;}
  _ = new cljs.core.IndexedSeq(G__7997__a,0,null);
} 
return G__7996__delegate.call(this,n,other,_);};
G__7996.cljs$lang$maxFixedArity = 2;
G__7996.cljs$lang$applyTo = (function (arglist__7998){
var n = cljs.core.first(arglist__7998);
arglist__7998 = cljs.core.next(arglist__7998);
var other = cljs.core.first(arglist__7998);
var _ = cljs.core.rest(arglist__7998);
return G__7996__delegate(n,other,_);
});
G__7996.cljs$core$IFn$_invoke$arity$variadic = G__7996__delegate;
return G__7996;
})()
,(function() { 
var G__7999__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7999 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8000__i = 0, G__8000__a = new Array(arguments.length -  2);
while (G__8000__i < G__8000__a.length) {G__8000__a[G__8000__i] = arguments[G__8000__i + 2]; ++G__8000__i;}
  _ = new cljs.core.IndexedSeq(G__8000__a,0,null);
} 
return G__7999__delegate.call(this,n,other,_);};
G__7999.cljs$lang$maxFixedArity = 2;
G__7999.cljs$lang$applyTo = (function (arglist__8001){
var n = cljs.core.first(arglist__8001);
arglist__8001 = cljs.core.next(arglist__8001);
var other = cljs.core.first(arglist__8001);
var _ = cljs.core.rest(arglist__8001);
return G__7999__delegate(n,other,_);
});
G__7999.cljs$core$IFn$_invoke$arity$variadic = G__7999__delegate;
return G__7999;
})()
,(function() { 
var G__8002__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8002 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8003__i = 0, G__8003__a = new Array(arguments.length -  2);
while (G__8003__i < G__8003__a.length) {G__8003__a[G__8003__i] = arguments[G__8003__i + 2]; ++G__8003__i;}
  _ = new cljs.core.IndexedSeq(G__8003__a,0,null);
} 
return G__8002__delegate.call(this,n,other,_);};
G__8002.cljs$lang$maxFixedArity = 2;
G__8002.cljs$lang$applyTo = (function (arglist__8004){
var n = cljs.core.first(arglist__8004);
arglist__8004 = cljs.core.next(arglist__8004);
var other = cljs.core.first(arglist__8004);
var _ = cljs.core.rest(arglist__8004);
return G__8002__delegate(n,other,_);
});
G__8002.cljs$core$IFn$_invoke$arity$variadic = G__8002__delegate;
return G__8002;
})()
,(function() { 
var G__8005__delegate = function (n,other,_){
return (n - other);
};
var G__8005 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8006__i = 0, G__8006__a = new Array(arguments.length -  2);
while (G__8006__i < G__8006__a.length) {G__8006__a[G__8006__i] = arguments[G__8006__i + 2]; ++G__8006__i;}
  _ = new cljs.core.IndexedSeq(G__8006__a,0,null);
} 
return G__8005__delegate.call(this,n,other,_);};
G__8005.cljs$lang$maxFixedArity = 2;
G__8005.cljs$lang$applyTo = (function (arglist__8007){
var n = cljs.core.first(arglist__8007);
arglist__8007 = cljs.core.next(arglist__8007);
var other = cljs.core.first(arglist__8007);
var _ = cljs.core.rest(arglist__8007);
return G__8005__delegate(n,other,_);
});
G__8005.cljs$core$IFn$_invoke$arity$variadic = G__8005__delegate;
return G__8005;
})()
,(function() { 
var G__8008__delegate = function (n,other,_){
return (n * other);
};
var G__8008 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8009__i = 0, G__8009__a = new Array(arguments.length -  2);
while (G__8009__i < G__8009__a.length) {G__8009__a[G__8009__i] = arguments[G__8009__i + 2]; ++G__8009__i;}
  _ = new cljs.core.IndexedSeq(G__8009__a,0,null);
} 
return G__8008__delegate.call(this,n,other,_);};
G__8008.cljs$lang$maxFixedArity = 2;
G__8008.cljs$lang$applyTo = (function (arglist__8010){
var n = cljs.core.first(arglist__8010);
arglist__8010 = cljs.core.next(arglist__8010);
var other = cljs.core.first(arglist__8010);
var _ = cljs.core.rest(arglist__8010);
return G__8008__delegate(n,other,_);
});
G__8008.cljs$core$IFn$_invoke$arity$variadic = G__8008__delegate;
return G__8008;
})()
,(function() { 
var G__8011__delegate = function (n,other,_){
return (n / other);
};
var G__8011 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8012__i = 0, G__8012__a = new Array(arguments.length -  2);
while (G__8012__i < G__8012__a.length) {G__8012__a[G__8012__i] = arguments[G__8012__i + 2]; ++G__8012__i;}
  _ = new cljs.core.IndexedSeq(G__8012__a,0,null);
} 
return G__8011__delegate.call(this,n,other,_);};
G__8011.cljs$lang$maxFixedArity = 2;
G__8011.cljs$lang$applyTo = (function (arglist__8013){
var n = cljs.core.first(arglist__8013);
arglist__8013 = cljs.core.next(arglist__8013);
var other = cljs.core.first(arglist__8013);
var _ = cljs.core.rest(arglist__8013);
return G__8011__delegate(n,other,_);
});
G__8011.cljs$core$IFn$_invoke$arity$variadic = G__8011__delegate;
return G__8011;
})()
,(function() { 
var G__8014__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__8014 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8015__i = 0, G__8015__a = new Array(arguments.length -  1);
while (G__8015__i < G__8015__a.length) {G__8015__a[G__8015__i] = arguments[G__8015__i + 1]; ++G__8015__i;}
  _ = new cljs.core.IndexedSeq(G__8015__a,0,null);
} 
return G__8014__delegate.call(this,n,_);};
G__8014.cljs$lang$maxFixedArity = 1;
G__8014.cljs$lang$applyTo = (function (arglist__8016){
var n = cljs.core.first(arglist__8016);
var _ = cljs.core.rest(arglist__8016);
return G__8014__delegate(n,_);
});
G__8014.cljs$core$IFn$_invoke$arity$variadic = G__8014__delegate;
return G__8014;
})()
,(function() { 
var G__8017__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__8017 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8018__i = 0, G__8018__a = new Array(arguments.length -  1);
while (G__8018__i < G__8018__a.length) {G__8018__a[G__8018__i] = arguments[G__8018__i + 1]; ++G__8018__i;}
  _ = new cljs.core.IndexedSeq(G__8018__a,0,null);
} 
return G__8017__delegate.call(this,n,_);};
G__8017.cljs$lang$maxFixedArity = 1;
G__8017.cljs$lang$applyTo = (function (arglist__8019){
var n = cljs.core.first(arglist__8019);
var _ = cljs.core.rest(arglist__8019);
return G__8017__delegate(n,_);
});
G__8017.cljs$core$IFn$_invoke$arity$variadic = G__8017__delegate;
return G__8017;
})()
,(function() { 
var G__8020__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8020 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8021__i = 0, G__8021__a = new Array(arguments.length -  2);
while (G__8021__i < G__8021__a.length) {G__8021__a[G__8021__i] = arguments[G__8021__i + 2]; ++G__8021__i;}
  _ = new cljs.core.IndexedSeq(G__8021__a,0,null);
} 
return G__8020__delegate.call(this,n,other,_);};
G__8020.cljs$lang$maxFixedArity = 2;
G__8020.cljs$lang$applyTo = (function (arglist__8022){
var n = cljs.core.first(arglist__8022);
arglist__8022 = cljs.core.next(arglist__8022);
var other = cljs.core.first(arglist__8022);
var _ = cljs.core.rest(arglist__8022);
return G__8020__delegate(n,other,_);
});
G__8020.cljs$core$IFn$_invoke$arity$variadic = G__8020__delegate;
return G__8020;
})()
,(function() { 
var G__8023__delegate = function (n,other,_){
return (n >= other);
};
var G__8023 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8024__i = 0, G__8024__a = new Array(arguments.length -  2);
while (G__8024__i < G__8024__a.length) {G__8024__a[G__8024__i] = arguments[G__8024__i + 2]; ++G__8024__i;}
  _ = new cljs.core.IndexedSeq(G__8024__a,0,null);
} 
return G__8023__delegate.call(this,n,other,_);};
G__8023.cljs$lang$maxFixedArity = 2;
G__8023.cljs$lang$applyTo = (function (arglist__8025){
var n = cljs.core.first(arglist__8025);
arglist__8025 = cljs.core.next(arglist__8025);
var other = cljs.core.first(arglist__8025);
var _ = cljs.core.rest(arglist__8025);
return G__8023__delegate(n,other,_);
});
G__8023.cljs$core$IFn$_invoke$arity$variadic = G__8023__delegate;
return G__8023;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__8031__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__8031 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8033__i = 0, G__8033__a = new Array(arguments.length -  2);
while (G__8033__i < G__8033__a.length) {G__8033__a[G__8033__i] = arguments[G__8033__i + 2]; ++G__8033__i;}
  _ = new cljs.core.IndexedSeq(G__8033__a,0,null);
} 
return G__8031__delegate.call(this,s,other,_);};
G__8031.cljs$lang$maxFixedArity = 2;
G__8031.cljs$lang$applyTo = (function (arglist__8034){
var s = cljs.core.first(arglist__8034);
arglist__8034 = cljs.core.next(arglist__8034);
var other = cljs.core.first(arglist__8034);
var _ = cljs.core.rest(arglist__8034);
return G__8031__delegate(s,other,_);
});
G__8031.cljs$core$IFn$_invoke$arity$variadic = G__8031__delegate;
return G__8031;
})()
,(function() { 
var G__8039__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__8039 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8042__i = 0, G__8042__a = new Array(arguments.length -  2);
while (G__8042__i < G__8042__a.length) {G__8042__a[G__8042__i] = arguments[G__8042__i + 2]; ++G__8042__i;}
  _ = new cljs.core.IndexedSeq(G__8042__a,0,null);
} 
return G__8039__delegate.call(this,s,other,_);};
G__8039.cljs$lang$maxFixedArity = 2;
G__8039.cljs$lang$applyTo = (function (arglist__8044){
var s = cljs.core.first(arglist__8044);
arglist__8044 = cljs.core.next(arglist__8044);
var other = cljs.core.first(arglist__8044);
var _ = cljs.core.rest(arglist__8044);
return G__8039__delegate(s,other,_);
});
G__8039.cljs$core$IFn$_invoke$arity$variadic = G__8039__delegate;
return G__8039;
})()
,(function() { 
var G__8049__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8049 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8051__i = 0, G__8051__a = new Array(arguments.length -  1);
while (G__8051__i < G__8051__a.length) {G__8051__a[G__8051__i] = arguments[G__8051__i + 1]; ++G__8051__i;}
  _ = new cljs.core.IndexedSeq(G__8051__a,0,null);
} 
return G__8049__delegate.call(this,s,_);};
G__8049.cljs$lang$maxFixedArity = 1;
G__8049.cljs$lang$applyTo = (function (arglist__8056){
var s = cljs.core.first(arglist__8056);
var _ = cljs.core.rest(arglist__8056);
return G__8049__delegate(s,_);
});
G__8049.cljs$core$IFn$_invoke$arity$variadic = G__8049__delegate;
return G__8049;
})()
,(function() { 
var G__8057__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__8057 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8058__i = 0, G__8058__a = new Array(arguments.length -  1);
while (G__8058__i < G__8058__a.length) {G__8058__a[G__8058__i] = arguments[G__8058__i + 1]; ++G__8058__i;}
  _ = new cljs.core.IndexedSeq(G__8058__a,0,null);
} 
return G__8057__delegate.call(this,s,_);};
G__8057.cljs$lang$maxFixedArity = 1;
G__8057.cljs$lang$applyTo = (function (arglist__8059){
var s = cljs.core.first(arglist__8059);
var _ = cljs.core.rest(arglist__8059);
return G__8057__delegate(s,_);
});
G__8057.cljs$core$IFn$_invoke$arity$variadic = G__8057__delegate;
return G__8057;
})()
,(function() { 
var G__8060__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__8060 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8061__i = 0, G__8061__a = new Array(arguments.length -  2);
while (G__8061__i < G__8061__a.length) {G__8061__a[G__8061__i] = arguments[G__8061__i + 2]; ++G__8061__i;}
  _ = new cljs.core.IndexedSeq(G__8061__a,0,null);
} 
return G__8060__delegate.call(this,s,prefix,_);};
G__8060.cljs$lang$maxFixedArity = 2;
G__8060.cljs$lang$applyTo = (function (arglist__8062){
var s = cljs.core.first(arglist__8062);
arglist__8062 = cljs.core.next(arglist__8062);
var prefix = cljs.core.first(arglist__8062);
var _ = cljs.core.rest(arglist__8062);
return G__8060__delegate(s,prefix,_);
});
G__8060.cljs$core$IFn$_invoke$arity$variadic = G__8060__delegate;
return G__8060;
})()
,(function() { 
var G__8063__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__8063 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8064__i = 0, G__8064__a = new Array(arguments.length -  1);
while (G__8064__i < G__8064__a.length) {G__8064__a[G__8064__i] = arguments[G__8064__i + 1]; ++G__8064__i;}
  _ = new cljs.core.IndexedSeq(G__8064__a,0,null);
} 
return G__8063__delegate.call(this,s,_);};
G__8063.cljs$lang$maxFixedArity = 1;
G__8063.cljs$lang$applyTo = (function (arglist__8065){
var s = cljs.core.first(arglist__8065);
var _ = cljs.core.rest(arglist__8065);
return G__8063__delegate(s,_);
});
G__8063.cljs$core$IFn$_invoke$arity$variadic = G__8063__delegate;
return G__8063;
})()
,(function() { 
var G__8066__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__8066 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8067__i = 0, G__8067__a = new Array(arguments.length -  2);
while (G__8067__i < G__8067__a.length) {G__8067__a[G__8067__i] = arguments[G__8067__i + 2]; ++G__8067__i;}
  _ = new cljs.core.IndexedSeq(G__8067__a,0,null);
} 
return G__8066__delegate.call(this,s,other,_);};
G__8066.cljs$lang$maxFixedArity = 2;
G__8066.cljs$lang$applyTo = (function (arglist__8068){
var s = cljs.core.first(arglist__8068);
arglist__8068 = cljs.core.next(arglist__8068);
var other = cljs.core.first(arglist__8068);
var _ = cljs.core.rest(arglist__8068);
return G__8066__delegate(s,other,_);
});
G__8066.cljs$core$IFn$_invoke$arity$variadic = G__8066__delegate;
return G__8066;
})()
,(function() { 
var G__8069__delegate = function (s,other,p__6396){
var vec__6397 = p__6396;
var ctx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6397,(0),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ctx)?nex.interpreter.concat_string_value(ctx,other):nex.interpreter.nex_format_value(other))));
};
var G__8069 = function (s,other,var_args){
var p__6396 = null;
if (arguments.length > 2) {
var G__8070__i = 0, G__8070__a = new Array(arguments.length -  2);
while (G__8070__i < G__8070__a.length) {G__8070__a[G__8070__i] = arguments[G__8070__i + 2]; ++G__8070__i;}
  p__6396 = new cljs.core.IndexedSeq(G__8070__a,0,null);
} 
return G__8069__delegate.call(this,s,other,p__6396);};
G__8069.cljs$lang$maxFixedArity = 2;
G__8069.cljs$lang$applyTo = (function (arglist__8071){
var s = cljs.core.first(arglist__8071);
arglist__8071 = cljs.core.next(arglist__8071);
var other = cljs.core.first(arglist__8071);
var p__6396 = cljs.core.rest(arglist__8071);
return G__8069__delegate(s,other,p__6396);
});
G__8069.cljs$core$IFn$_invoke$arity$variadic = G__8069__delegate;
return G__8069;
})()
,(function() { 
var G__8072__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__8072 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8073__i = 0, G__8073__a = new Array(arguments.length -  1);
while (G__8073__i < G__8073__a.length) {G__8073__a[G__8073__i] = arguments[G__8073__i + 1]; ++G__8073__i;}
  _ = new cljs.core.IndexedSeq(G__8073__a,0,null);
} 
return G__8072__delegate.call(this,s,_);};
G__8072.cljs$lang$maxFixedArity = 1;
G__8072.cljs$lang$applyTo = (function (arglist__8074){
var s = cljs.core.first(arglist__8074);
var _ = cljs.core.rest(arglist__8074);
return G__8072__delegate(s,_);
});
G__8072.cljs$core$IFn$_invoke$arity$variadic = G__8072__delegate;
return G__8072;
})()
,(function() { 
var G__8075__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__8075 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8076__i = 0, G__8076__a = new Array(arguments.length -  2);
while (G__8076__i < G__8076__a.length) {G__8076__a[G__8076__i] = arguments[G__8076__i + 2]; ++G__8076__i;}
  _ = new cljs.core.IndexedSeq(G__8076__a,0,null);
} 
return G__8075__delegate.call(this,s,other,_);};
G__8075.cljs$lang$maxFixedArity = 2;
G__8075.cljs$lang$applyTo = (function (arglist__8077){
var s = cljs.core.first(arglist__8077);
arglist__8077 = cljs.core.next(arglist__8077);
var other = cljs.core.first(arglist__8077);
var _ = cljs.core.rest(arglist__8077);
return G__8075__delegate(s,other,_);
});
G__8075.cljs$core$IFn$_invoke$arity$variadic = G__8075__delegate;
return G__8075;
})()
,(function() { 
var G__8078__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__8078 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8079__i = 0, G__8079__a = new Array(arguments.length -  2);
while (G__8079__i < G__8079__a.length) {G__8079__a[G__8079__i] = arguments[G__8079__i + 2]; ++G__8079__i;}
  _ = new cljs.core.IndexedSeq(G__8079__a,0,null);
} 
return G__8078__delegate.call(this,s,substr,_);};
G__8078.cljs$lang$maxFixedArity = 2;
G__8078.cljs$lang$applyTo = (function (arglist__8080){
var s = cljs.core.first(arglist__8080);
arglist__8080 = cljs.core.next(arglist__8080);
var substr = cljs.core.first(arglist__8080);
var _ = cljs.core.rest(arglist__8080);
return G__8078__delegate(s,substr,_);
});
G__8078.cljs$core$IFn$_invoke$arity$variadic = G__8078__delegate;
return G__8078;
})()
,(function() { 
var G__8081__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8081 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8082__i = 0, G__8082__a = new Array(arguments.length -  1);
while (G__8082__i < G__8082__a.length) {G__8082__a[G__8082__i] = arguments[G__8082__i + 1]; ++G__8082__i;}
  _ = new cljs.core.IndexedSeq(G__8082__a,0,null);
} 
return G__8081__delegate.call(this,s,_);};
G__8081.cljs$lang$maxFixedArity = 1;
G__8081.cljs$lang$applyTo = (function (arglist__8083){
var s = cljs.core.first(arglist__8083);
var _ = cljs.core.rest(arglist__8083);
return G__8081__delegate(s,_);
});
G__8081.cljs$core$IFn$_invoke$arity$variadic = G__8081__delegate;
return G__8081;
})()
,(function() { 
var G__8084__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8084 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8085__i = 0, G__8085__a = new Array(arguments.length -  2);
while (G__8085__i < G__8085__a.length) {G__8085__a[G__8085__i] = arguments[G__8085__i + 2]; ++G__8085__i;}
  _ = new cljs.core.IndexedSeq(G__8085__a,0,null);
} 
return G__8084__delegate.call(this,s,other,_);};
G__8084.cljs$lang$maxFixedArity = 2;
G__8084.cljs$lang$applyTo = (function (arglist__8086){
var s = cljs.core.first(arglist__8086);
arglist__8086 = cljs.core.next(arglist__8086);
var other = cljs.core.first(arglist__8086);
var _ = cljs.core.rest(arglist__8086);
return G__8084__delegate(s,other,_);
});
G__8084.cljs$core$IFn$_invoke$arity$variadic = G__8084__delegate;
return G__8084;
})()
,(function() { 
var G__8087__delegate = function (s,_){
return nex.interpreter.nex_parse_integer(s);
};
var G__8087 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8088__i = 0, G__8088__a = new Array(arguments.length -  1);
while (G__8088__i < G__8088__a.length) {G__8088__a[G__8088__i] = arguments[G__8088__i + 1]; ++G__8088__i;}
  _ = new cljs.core.IndexedSeq(G__8088__a,0,null);
} 
return G__8087__delegate.call(this,s,_);};
G__8087.cljs$lang$maxFixedArity = 1;
G__8087.cljs$lang$applyTo = (function (arglist__8089){
var s = cljs.core.first(arglist__8089);
var _ = cljs.core.rest(arglist__8089);
return G__8087__delegate(s,_);
});
G__8087.cljs$core$IFn$_invoke$arity$variadic = G__8087__delegate;
return G__8087;
})()
,(function() { 
var G__8090__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__8090 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8091__i = 0, G__8091__a = new Array(arguments.length -  1);
while (G__8091__i < G__8091__a.length) {G__8091__a[G__8091__i] = arguments[G__8091__i + 1]; ++G__8091__i;}
  _ = new cljs.core.IndexedSeq(G__8091__a,0,null);
} 
return G__8090__delegate.call(this,s,_);};
G__8090.cljs$lang$maxFixedArity = 1;
G__8090.cljs$lang$applyTo = (function (arglist__8092){
var s = cljs.core.first(arglist__8092);
var _ = cljs.core.rest(arglist__8092);
return G__8090__delegate(s,_);
});
G__8090.cljs$core$IFn$_invoke$arity$variadic = G__8090__delegate;
return G__8090;
})()
,(function() { 
var G__8093__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__8093 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8094__i = 0, G__8094__a = new Array(arguments.length -  3);
while (G__8094__i < G__8094__a.length) {G__8094__a[G__8094__i] = arguments[G__8094__i + 3]; ++G__8094__i;}
  _ = new cljs.core.IndexedSeq(G__8094__a,0,null);
} 
return G__8093__delegate.call(this,s,start,end,_);};
G__8093.cljs$lang$maxFixedArity = 3;
G__8093.cljs$lang$applyTo = (function (arglist__8095){
var s = cljs.core.first(arglist__8095);
arglist__8095 = cljs.core.next(arglist__8095);
var start = cljs.core.first(arglist__8095);
arglist__8095 = cljs.core.next(arglist__8095);
var end = cljs.core.first(arglist__8095);
var _ = cljs.core.rest(arglist__8095);
return G__8093__delegate(s,start,end,_);
});
G__8093.cljs$core$IFn$_invoke$arity$variadic = G__8093__delegate;
return G__8093;
})()
,(function() { 
var G__8096__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__8096 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8097__i = 0, G__8097__a = new Array(arguments.length -  2);
while (G__8097__i < G__8097__a.length) {G__8097__a[G__8097__i] = arguments[G__8097__i + 2]; ++G__8097__i;}
  _ = new cljs.core.IndexedSeq(G__8097__a,0,null);
} 
return G__8096__delegate.call(this,s,idx,_);};
G__8096.cljs$lang$maxFixedArity = 2;
G__8096.cljs$lang$applyTo = (function (arglist__8098){
var s = cljs.core.first(arglist__8098);
arglist__8098 = cljs.core.next(arglist__8098);
var idx = cljs.core.first(arglist__8098);
var _ = cljs.core.rest(arglist__8098);
return G__8096__delegate(s,idx,_);
});
G__8096.cljs$core$IFn$_invoke$arity$variadic = G__8096__delegate;
return G__8096;
})()
,(function() { 
var G__8099__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__8099 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8100__i = 0, G__8100__a = new Array(arguments.length -  3);
while (G__8100__i < G__8100__a.length) {G__8100__a[G__8100__i] = arguments[G__8100__i + 3]; ++G__8100__i;}
  _ = new cljs.core.IndexedSeq(G__8100__a,0,null);
} 
return G__8099__delegate.call(this,s,old,new$,_);};
G__8099.cljs$lang$maxFixedArity = 3;
G__8099.cljs$lang$applyTo = (function (arglist__8101){
var s = cljs.core.first(arglist__8101);
arglist__8101 = cljs.core.next(arglist__8101);
var old = cljs.core.first(arglist__8101);
arglist__8101 = cljs.core.next(arglist__8101);
var new$ = cljs.core.first(arglist__8101);
var _ = cljs.core.rest(arglist__8101);
return G__8099__delegate(s,old,new$,_);
});
G__8099.cljs$core$IFn$_invoke$arity$variadic = G__8099__delegate;
return G__8099;
})()
,(function() { 
var G__8102__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8102 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8103__i = 0, G__8103__a = new Array(arguments.length -  1);
while (G__8103__i < G__8103__a.length) {G__8103__a[G__8103__i] = arguments[G__8103__i + 1]; ++G__8103__i;}
  _ = new cljs.core.IndexedSeq(G__8103__a,0,null);
} 
return G__8102__delegate.call(this,s,_);};
G__8102.cljs$lang$maxFixedArity = 1;
G__8102.cljs$lang$applyTo = (function (arglist__8104){
var s = cljs.core.first(arglist__8104);
var _ = cljs.core.rest(arglist__8104);
return G__8102__delegate(s,_);
});
G__8102.cljs$core$IFn$_invoke$arity$variadic = G__8102__delegate;
return G__8102;
})()
,(function() { 
var G__8105__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__8105 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8106__i = 0, G__8106__a = new Array(arguments.length -  2);
while (G__8106__i < G__8106__a.length) {G__8106__a[G__8106__i] = arguments[G__8106__i + 2]; ++G__8106__i;}
  _ = new cljs.core.IndexedSeq(G__8106__a,0,null);
} 
return G__8105__delegate.call(this,s,delim,_);};
G__8105.cljs$lang$maxFixedArity = 2;
G__8105.cljs$lang$applyTo = (function (arglist__8107){
var s = cljs.core.first(arglist__8107);
arglist__8107 = cljs.core.next(arglist__8107);
var delim = cljs.core.first(arglist__8107);
var _ = cljs.core.rest(arglist__8107);
return G__8105__delegate(s,delim,_);
});
G__8105.cljs$core$IFn$_invoke$arity$variadic = G__8105__delegate;
return G__8105;
})()
,(function() { 
var G__8108__delegate = function (s,_){
return cljs.core.count(s);
};
var G__8108 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8109__i = 0, G__8109__a = new Array(arguments.length -  1);
while (G__8109__i < G__8109__a.length) {G__8109__a[G__8109__i] = arguments[G__8109__i + 1]; ++G__8109__i;}
  _ = new cljs.core.IndexedSeq(G__8109__a,0,null);
} 
return G__8108__delegate.call(this,s,_);};
G__8108.cljs$lang$maxFixedArity = 1;
G__8108.cljs$lang$applyTo = (function (arglist__8110){
var s = cljs.core.first(arglist__8110);
var _ = cljs.core.rest(arglist__8110);
return G__8108__delegate(s,_);
});
G__8108.cljs$core$IFn$_invoke$arity$variadic = G__8108__delegate;
return G__8108;
})()
,(function() { 
var G__8111__delegate = function (s,_){
return nex.interpreter.nex_parse_integer64_string(s);
};
var G__8111 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8112__i = 0, G__8112__a = new Array(arguments.length -  1);
while (G__8112__i < G__8112__a.length) {G__8112__a[G__8112__i] = arguments[G__8112__i + 1]; ++G__8112__i;}
  _ = new cljs.core.IndexedSeq(G__8112__a,0,null);
} 
return G__8111__delegate.call(this,s,_);};
G__8111.cljs$lang$maxFixedArity = 1;
G__8111.cljs$lang$applyTo = (function (arglist__8113){
var s = cljs.core.first(arglist__8113);
var _ = cljs.core.rest(arglist__8113);
return G__8111__delegate(s,_);
});
G__8111.cljs$core$IFn$_invoke$arity$variadic = G__8111__delegate;
return G__8111;
})()
,(function() { 
var G__8114__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__8114 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8115__i = 0, G__8115__a = new Array(arguments.length -  2);
while (G__8115__i < G__8115__a.length) {G__8115__a[G__8115__i] = arguments[G__8115__i + 2]; ++G__8115__i;}
  _ = new cljs.core.IndexedSeq(G__8115__a,0,null);
} 
return G__8114__delegate.call(this,s,ch,_);};
G__8114.cljs$lang$maxFixedArity = 2;
G__8114.cljs$lang$applyTo = (function (arglist__8120){
var s = cljs.core.first(arglist__8120);
arglist__8120 = cljs.core.next(arglist__8120);
var ch = cljs.core.first(arglist__8120);
var _ = cljs.core.rest(arglist__8120);
return G__8114__delegate(s,ch,_);
});
G__8114.cljs$core$IFn$_invoke$arity$variadic = G__8114__delegate;
return G__8114;
})()
,(function() { 
var G__8122__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8122 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8126__i = 0, G__8126__a = new Array(arguments.length -  2);
while (G__8126__i < G__8126__a.length) {G__8126__a[G__8126__i] = arguments[G__8126__i + 2]; ++G__8126__i;}
  _ = new cljs.core.IndexedSeq(G__8126__a,0,null);
} 
return G__8122__delegate.call(this,s,other,_);};
G__8122.cljs$lang$maxFixedArity = 2;
G__8122.cljs$lang$applyTo = (function (arglist__8127){
var s = cljs.core.first(arglist__8127);
arglist__8127 = cljs.core.next(arglist__8127);
var other = cljs.core.first(arglist__8127);
var _ = cljs.core.rest(arglist__8127);
return G__8122__delegate(s,other,_);
});
G__8122.cljs$core$IFn$_invoke$arity$variadic = G__8122__delegate;
return G__8122;
})()
,(function() { 
var G__8132__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__8132 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8133__i = 0, G__8133__a = new Array(arguments.length -  2);
while (G__8133__i < G__8133__a.length) {G__8133__a[G__8133__i] = arguments[G__8133__i + 2]; ++G__8133__i;}
  _ = new cljs.core.IndexedSeq(G__8133__a,0,null);
} 
return G__8132__delegate.call(this,s,other,_);};
G__8132.cljs$lang$maxFixedArity = 2;
G__8132.cljs$lang$applyTo = (function (arglist__8134){
var s = cljs.core.first(arglist__8134);
arglist__8134 = cljs.core.next(arglist__8134);
var other = cljs.core.first(arglist__8134);
var _ = cljs.core.rest(arglist__8134);
return G__8132__delegate(s,other,_);
});
G__8132.cljs$core$IFn$_invoke$arity$variadic = G__8132__delegate;
return G__8132;
})()
,(function() { 
var G__8135__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__8135 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8136__i = 0, G__8136__a = new Array(arguments.length -  2);
while (G__8136__i < G__8136__a.length) {G__8136__a[G__8136__i] = arguments[G__8136__i + 2]; ++G__8136__i;}
  _ = new cljs.core.IndexedSeq(G__8136__a,0,null);
} 
return G__8135__delegate.call(this,s,suffix,_);};
G__8135.cljs$lang$maxFixedArity = 2;
G__8135.cljs$lang$applyTo = (function (arglist__8137){
var s = cljs.core.first(arglist__8137);
arglist__8137 = cljs.core.next(arglist__8137);
var suffix = cljs.core.first(arglist__8137);
var _ = cljs.core.rest(arglist__8137);
return G__8135__delegate(s,suffix,_);
});
G__8135.cljs$core$IFn$_invoke$arity$variadic = G__8135__delegate;
return G__8135;
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6400 = cljs.core.get_global_hierarchy;
return (fexpr__6400.cljs$core$IFn$_invoke$arity$0 ? fexpr__6400.cljs$core$IFn$_invoke$arity$0() : fexpr__6400.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6402_SHARP_){
return fs.existsSync(p1__6402_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6403){
var map__6404 = p__6403;
var map__6404__$1 = cljs.core.__destructure_map(map__6404);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6404__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6405){
var map__6406 = p__6405;
var map__6406__$1 = cljs.core.__destructure_map(map__6406);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6406__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6407_8138 = cljs.core.seq(imports);
var chunk__6408_8139 = null;
var count__6409_8140 = (0);
var i__6410_8141 = (0);
while(true){
if((i__6410_8141 < count__6409_8140)){
var import_node_8142 = chunk__6408_8139.cljs$core$IIndexed$_nth$arity$2(null,i__6410_8141);
if(cljs.core.map_QMARK_(import_node_8142)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8142);
} else {
}


var G__8145 = seq__6407_8138;
var G__8146 = chunk__6408_8139;
var G__8147 = count__6409_8140;
var G__8148 = (i__6410_8141 + (1));
seq__6407_8138 = G__8145;
chunk__6408_8139 = G__8146;
count__6409_8140 = G__8147;
i__6410_8141 = G__8148;
continue;
} else {
var temp__5823__auto___8149 = cljs.core.seq(seq__6407_8138);
if(temp__5823__auto___8149){
var seq__6407_8150__$1 = temp__5823__auto___8149;
if(cljs.core.chunked_seq_QMARK_(seq__6407_8150__$1)){
var c__5673__auto___8151 = cljs.core.chunk_first(seq__6407_8150__$1);
var G__8152 = cljs.core.chunk_rest(seq__6407_8150__$1);
var G__8153 = c__5673__auto___8151;
var G__8154 = cljs.core.count(c__5673__auto___8151);
var G__8155 = (0);
seq__6407_8138 = G__8152;
chunk__6408_8139 = G__8153;
count__6409_8140 = G__8154;
i__6410_8141 = G__8155;
continue;
} else {
var import_node_8156 = cljs.core.first(seq__6407_8150__$1);
if(cljs.core.map_QMARK_(import_node_8156)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8156);
} else {
}


var G__8157 = cljs.core.next(seq__6407_8150__$1);
var G__8158 = null;
var G__8159 = (0);
var G__8160 = (0);
seq__6407_8138 = G__8157;
chunk__6408_8139 = G__8158;
count__6409_8140 = G__8159;
i__6410_8141 = G__8160;
continue;
}
} else {
}
}
break;
}

var seq__6411_8161 = cljs.core.seq(interns);
var chunk__6412_8162 = null;
var count__6413_8163 = (0);
var i__6414_8164 = (0);
while(true){
if((i__6414_8164 < count__6413_8163)){
var intern_node_8165 = chunk__6412_8162.cljs$core$IIndexed$_nth$arity$2(null,i__6414_8164);
if(cljs.core.map_QMARK_(intern_node_8165)){
nex.interpreter.process_intern(ctx,intern_node_8165);
} else {
}


var G__8166 = seq__6411_8161;
var G__8167 = chunk__6412_8162;
var G__8168 = count__6413_8163;
var G__8169 = (i__6414_8164 + (1));
seq__6411_8161 = G__8166;
chunk__6412_8162 = G__8167;
count__6413_8163 = G__8168;
i__6414_8164 = G__8169;
continue;
} else {
var temp__5823__auto___8170 = cljs.core.seq(seq__6411_8161);
if(temp__5823__auto___8170){
var seq__6411_8171__$1 = temp__5823__auto___8170;
if(cljs.core.chunked_seq_QMARK_(seq__6411_8171__$1)){
var c__5673__auto___8172 = cljs.core.chunk_first(seq__6411_8171__$1);
var G__8173 = cljs.core.chunk_rest(seq__6411_8171__$1);
var G__8174 = c__5673__auto___8172;
var G__8175 = cljs.core.count(c__5673__auto___8172);
var G__8176 = (0);
seq__6411_8161 = G__8173;
chunk__6412_8162 = G__8174;
count__6413_8163 = G__8175;
i__6414_8164 = G__8176;
continue;
} else {
var intern_node_8177 = cljs.core.first(seq__6411_8171__$1);
if(cljs.core.map_QMARK_(intern_node_8177)){
nex.interpreter.process_intern(ctx,intern_node_8177);
} else {
}


var G__8178 = cljs.core.next(seq__6411_8171__$1);
var G__8179 = null;
var G__8180 = (0);
var G__8181 = (0);
seq__6411_8161 = G__8178;
chunk__6412_8162 = G__8179;
count__6413_8163 = G__8180;
i__6414_8164 = G__8181;
continue;
}
} else {
}
}
break;
}

var seq__6415_8182 = cljs.core.seq(classes);
var chunk__6416_8183 = null;
var count__6417_8184 = (0);
var i__6418_8185 = (0);
while(true){
if((i__6418_8185 < count__6417_8184)){
var class_node_8186 = chunk__6416_8183.cljs$core$IIndexed$_nth$arity$2(null,i__6418_8185);
if(cljs.core.map_QMARK_(class_node_8186)){
nex.interpreter.register_class(ctx,class_node_8186);
} else {
}


var G__8187 = seq__6415_8182;
var G__8188 = chunk__6416_8183;
var G__8189 = count__6417_8184;
var G__8190 = (i__6418_8185 + (1));
seq__6415_8182 = G__8187;
chunk__6416_8183 = G__8188;
count__6417_8184 = G__8189;
i__6418_8185 = G__8190;
continue;
} else {
var temp__5823__auto___8191 = cljs.core.seq(seq__6415_8182);
if(temp__5823__auto___8191){
var seq__6415_8192__$1 = temp__5823__auto___8191;
if(cljs.core.chunked_seq_QMARK_(seq__6415_8192__$1)){
var c__5673__auto___8193 = cljs.core.chunk_first(seq__6415_8192__$1);
var G__8194 = cljs.core.chunk_rest(seq__6415_8192__$1);
var G__8195 = c__5673__auto___8193;
var G__8196 = cljs.core.count(c__5673__auto___8193);
var G__8197 = (0);
seq__6415_8182 = G__8194;
chunk__6416_8183 = G__8195;
count__6417_8184 = G__8196;
i__6418_8185 = G__8197;
continue;
} else {
var class_node_8198 = cljs.core.first(seq__6415_8192__$1);
if(cljs.core.map_QMARK_(class_node_8198)){
nex.interpreter.register_class(ctx,class_node_8198);
} else {
}


var G__8199 = cljs.core.next(seq__6415_8192__$1);
var G__8201 = null;
var G__8202 = (0);
var G__8203 = (0);
seq__6415_8182 = G__8199;
chunk__6416_8183 = G__8201;
count__6417_8184 = G__8202;
i__6418_8185 = G__8203;
continue;
}
} else {
}
}
break;
}

var seq__6419_8204 = cljs.core.seq(functions);
var chunk__6420_8205 = null;
var count__6421_8206 = (0);
var i__6422_8207 = (0);
while(true){
if((i__6422_8207 < count__6421_8206)){
var fn_node_8208 = chunk__6420_8205.cljs$core$IIndexed$_nth$arity$2(null,i__6422_8207);
if(cljs.core.map_QMARK_(fn_node_8208)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8208);
} else {
}


var G__8209 = seq__6419_8204;
var G__8210 = chunk__6420_8205;
var G__8211 = count__6421_8206;
var G__8212 = (i__6422_8207 + (1));
seq__6419_8204 = G__8209;
chunk__6420_8205 = G__8210;
count__6421_8206 = G__8211;
i__6422_8207 = G__8212;
continue;
} else {
var temp__5823__auto___8213 = cljs.core.seq(seq__6419_8204);
if(temp__5823__auto___8213){
var seq__6419_8214__$1 = temp__5823__auto___8213;
if(cljs.core.chunked_seq_QMARK_(seq__6419_8214__$1)){
var c__5673__auto___8215 = cljs.core.chunk_first(seq__6419_8214__$1);
var G__8216 = cljs.core.chunk_rest(seq__6419_8214__$1);
var G__8217 = c__5673__auto___8215;
var G__8218 = cljs.core.count(c__5673__auto___8215);
var G__8219 = (0);
seq__6419_8204 = G__8216;
chunk__6420_8205 = G__8217;
count__6421_8206 = G__8218;
i__6422_8207 = G__8219;
continue;
} else {
var fn_node_8220 = cljs.core.first(seq__6419_8214__$1);
if(cljs.core.map_QMARK_(fn_node_8220)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8220);
} else {
}


var G__8221 = cljs.core.next(seq__6419_8214__$1);
var G__8222 = null;
var G__8223 = (0);
var G__8224 = (0);
seq__6419_8204 = G__8221;
chunk__6420_8205 = G__8222;
count__6421_8206 = G__8223;
i__6422_8207 = G__8224;
continue;
}
} else {
}
}
break;
}

var seq__6423_8225 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6424_8226 = null;
var count__6425_8227 = (0);
var i__6426_8228 = (0);
while(true){
if((i__6426_8228 < count__6425_8227)){
var stmt_node_8229 = chunk__6424_8226.cljs$core$IIndexed$_nth$arity$2(null,i__6426_8228);
if(cljs.core.map_QMARK_(stmt_node_8229)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8229);
} else {
}


var G__8230 = seq__6423_8225;
var G__8231 = chunk__6424_8226;
var G__8232 = count__6425_8227;
var G__8233 = (i__6426_8228 + (1));
seq__6423_8225 = G__8230;
chunk__6424_8226 = G__8231;
count__6425_8227 = G__8232;
i__6426_8228 = G__8233;
continue;
} else {
var temp__5823__auto___8241 = cljs.core.seq(seq__6423_8225);
if(temp__5823__auto___8241){
var seq__6423_8242__$1 = temp__5823__auto___8241;
if(cljs.core.chunked_seq_QMARK_(seq__6423_8242__$1)){
var c__5673__auto___8243 = cljs.core.chunk_first(seq__6423_8242__$1);
var G__8244 = cljs.core.chunk_rest(seq__6423_8242__$1);
var G__8245 = c__5673__auto___8243;
var G__8246 = cljs.core.count(c__5673__auto___8243);
var G__8247 = (0);
seq__6423_8225 = G__8244;
chunk__6424_8226 = G__8245;
count__6425_8227 = G__8246;
i__6426_8228 = G__8247;
continue;
} else {
var stmt_node_8248 = cljs.core.first(seq__6423_8242__$1);
if(cljs.core.map_QMARK_(stmt_node_8248)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8248);
} else {
}


var G__8249 = cljs.core.next(seq__6423_8242__$1);
var G__8250 = null;
var G__8251 = (0);
var G__8252 = (0);
seq__6423_8225 = G__8249;
chunk__6424_8226 = G__8250;
count__6425_8227 = G__8251;
i__6426_8228 = G__8252;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6427){
var map__6428 = p__6427;
var map__6428__$1 = cljs.core.__destructure_map(map__6428);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6428__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6428__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6429){
var map__6430 = p__6429;
var map__6430__$1 = cljs.core.__destructure_map(map__6430);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6430__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6430__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6431 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6432 = null;
var count__6433 = (0);
var i__6434 = (0);
while(true){
if((i__6434 < count__6433)){
var vec__6441 = chunk__6432.cljs$core$IIndexed$_nth$arity$2(null,i__6434);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6441,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6441,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8253 = seq__6431;
var G__8254 = chunk__6432;
var G__8255 = count__6433;
var G__8256 = (i__6434 + (1));
seq__6431 = G__8253;
chunk__6432 = G__8254;
count__6433 = G__8255;
i__6434 = G__8256;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6431);
if(temp__5823__auto__){
var seq__6431__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6431__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6431__$1);
var G__8257 = cljs.core.chunk_rest(seq__6431__$1);
var G__8258 = c__5673__auto__;
var G__8259 = cljs.core.count(c__5673__auto__);
var G__8260 = (0);
seq__6431 = G__8257;
chunk__6432 = G__8258;
count__6433 = G__8259;
i__6434 = G__8260;
continue;
} else {
var vec__6444 = cljs.core.first(seq__6431__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6444,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6444,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8261 = cljs.core.next(seq__6431__$1);
var G__8262 = null;
var G__8263 = (0);
var G__8264 = (0);
seq__6431 = G__8261;
chunk__6432 = G__8262;
count__6433 = G__8263;
i__6434 = G__8264;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6447 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6448 = null;
var count__6449 = (0);
var i__6450 = (0);
while(true){
if((i__6450 < count__6449)){
var vec__6457 = chunk__6448.cljs$core$IIndexed$_nth$arity$2(null,i__6450);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6457,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6457,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8265 = seq__6447;
var G__8266 = chunk__6448;
var G__8267 = count__6449;
var G__8268 = (i__6450 + (1));
seq__6447 = G__8265;
chunk__6448 = G__8266;
count__6449 = G__8267;
i__6450 = G__8268;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6447);
if(temp__5823__auto__){
var seq__6447__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6447__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6447__$1);
var G__8269 = cljs.core.chunk_rest(seq__6447__$1);
var G__8270 = c__5673__auto__;
var G__8271 = cljs.core.count(c__5673__auto__);
var G__8272 = (0);
seq__6447 = G__8269;
chunk__6448 = G__8270;
count__6449 = G__8271;
i__6450 = G__8272;
continue;
} else {
var vec__6460 = cljs.core.first(seq__6447__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6460,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6460,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8273 = cljs.core.next(seq__6447__$1);
var G__8274 = null;
var G__8275 = (0);
var G__8276 = (0);
seq__6447 = G__8273;
chunk__6448 = G__8274;
count__6449 = G__8275;
i__6450 = G__8276;
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
var G__6463 = new_ctx;
var G__6464 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6465 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6463,G__6464,G__6465) : nex.interpreter.eval_body_with_rescue.call(null,G__6463,G__6464,G__6465));
} else {
var seq__6466 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6467 = null;
var count__6468 = (0);
var i__6469 = (0);
while(true){
if((i__6469 < count__6468)){
var stmt = chunk__6467.cljs$core$IIndexed$_nth$arity$2(null,i__6469);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8277 = seq__6466;
var G__8278 = chunk__6467;
var G__8279 = count__6468;
var G__8280 = (i__6469 + (1));
seq__6466 = G__8277;
chunk__6467 = G__8278;
count__6468 = G__8279;
i__6469 = G__8280;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6466);
if(temp__5823__auto__){
var seq__6466__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6466__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6466__$1);
var G__8281 = cljs.core.chunk_rest(seq__6466__$1);
var G__8282 = c__5673__auto__;
var G__8283 = cljs.core.count(c__5673__auto__);
var G__8284 = (0);
seq__6466 = G__8281;
chunk__6467 = G__8282;
count__6468 = G__8283;
i__6469 = G__8284;
continue;
} else {
var stmt = cljs.core.first(seq__6466__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8285 = cljs.core.next(seq__6466__$1);
var G__8286 = null;
var G__8287 = (0);
var G__8288 = (0);
seq__6466 = G__8285;
chunk__6467 = G__8286;
count__6468 = G__8287;
i__6469 = G__8288;
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
}catch (e6470){var ___$5 = e6470;
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
}catch (e6471){var ___$5 = e6471;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___8289 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8289)){
var tgt_8290 = temp__5823__auto___8289;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8290,updated_obj);
}catch (e6472){var __8291__$5 = e6472;
}} else {
}

var seq__6473_8292 = cljs.core.seq(updated_obj.fields);
var chunk__6474_8293 = null;
var count__6475_8294 = (0);
var i__6476_8295 = (0);
while(true){
if((i__6476_8295 < count__6475_8294)){
var vec__6485_8296 = chunk__6474_8293.cljs$core$IIndexed$_nth$arity$2(null,i__6476_8295);
var field_name_8297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6485_8296,(0),null);
var field_val_8298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6485_8296,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8297))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8297),field_val_8298);
}catch (e6488){var __8299__$5 = e6488;
}} else {
}


var G__8300 = seq__6473_8292;
var G__8301 = chunk__6474_8293;
var G__8302 = count__6475_8294;
var G__8303 = (i__6476_8295 + (1));
seq__6473_8292 = G__8300;
chunk__6474_8293 = G__8301;
count__6475_8294 = G__8302;
i__6476_8295 = G__8303;
continue;
} else {
var temp__5823__auto___8304 = cljs.core.seq(seq__6473_8292);
if(temp__5823__auto___8304){
var seq__6473_8305__$1 = temp__5823__auto___8304;
if(cljs.core.chunked_seq_QMARK_(seq__6473_8305__$1)){
var c__5673__auto___8306 = cljs.core.chunk_first(seq__6473_8305__$1);
var G__8307 = cljs.core.chunk_rest(seq__6473_8305__$1);
var G__8308 = c__5673__auto___8306;
var G__8309 = cljs.core.count(c__5673__auto___8306);
var G__8310 = (0);
seq__6473_8292 = G__8307;
chunk__6474_8293 = G__8308;
count__6475_8294 = G__8309;
i__6476_8295 = G__8310;
continue;
} else {
var vec__6489_8311 = cljs.core.first(seq__6473_8305__$1);
var field_name_8312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489_8311,(0),null);
var field_val_8313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489_8311,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8312))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8312),field_val_8313);
}catch (e6492){var __8314__$5 = e6492;
}} else {
}


var G__8315 = cljs.core.next(seq__6473_8305__$1);
var G__8316 = null;
var G__8317 = (0);
var G__8318 = (0);
seq__6473_8292 = G__8315;
chunk__6474_8293 = G__8316;
count__6475_8294 = G__8317;
i__6476_8295 = G__8318;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6495){
var map__6496 = p__6495;
var map__6496__$1 = cljs.core.__destructure_map(map__6496);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6496__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6496__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6496__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6496__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args));
} else {
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6493_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6493_SHARP_);
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
var _ = (function (){var seq__6497 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6498 = null;
var count__6499 = (0);
var i__6500 = (0);
while(true){
if((i__6500 < count__6499)){
var vec__6507 = chunk__6498.cljs$core$IIndexed$_nth$arity$2(null,i__6500);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8319 = seq__6497;
var G__8320 = chunk__6498;
var G__8321 = count__6499;
var G__8322 = (i__6500 + (1));
seq__6497 = G__8319;
chunk__6498 = G__8320;
count__6499 = G__8321;
i__6500 = G__8322;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6497);
if(temp__5823__auto__){
var seq__6497__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6497__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6497__$1);
var G__8323 = cljs.core.chunk_rest(seq__6497__$1);
var G__8324 = c__5673__auto__;
var G__8325 = cljs.core.count(c__5673__auto__);
var G__8326 = (0);
seq__6497 = G__8323;
chunk__6498 = G__8324;
count__6499 = G__8325;
i__6500 = G__8326;
continue;
} else {
var vec__6510 = cljs.core.first(seq__6497__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8327 = cljs.core.next(seq__6497__$1);
var G__8328 = null;
var G__8329 = (0);
var G__8330 = (0);
seq__6497 = G__8327;
chunk__6498 = G__8328;
count__6499 = G__8329;
i__6500 = G__8330;
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
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6513 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6514 = null;
var count__6515 = (0);
var i__6516 = (0);
while(true){
if((i__6516 < count__6515)){
var vec__6523 = chunk__6514.cljs$core$IIndexed$_nth$arity$2(null,i__6516);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8331 = seq__6513;
var G__8332 = chunk__6514;
var G__8333 = count__6515;
var G__8334 = (i__6516 + (1));
seq__6513 = G__8331;
chunk__6514 = G__8332;
count__6515 = G__8333;
i__6516 = G__8334;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6513);
if(temp__5823__auto__){
var seq__6513__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6513__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6513__$1);
var G__8335 = cljs.core.chunk_rest(seq__6513__$1);
var G__8336 = c__5673__auto__;
var G__8337 = cljs.core.count(c__5673__auto__);
var G__8338 = (0);
seq__6513 = G__8335;
chunk__6514 = G__8336;
count__6515 = G__8337;
i__6516 = G__8338;
continue;
} else {
var vec__6526 = cljs.core.first(seq__6513__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8339 = cljs.core.next(seq__6513__$1);
var G__8340 = null;
var G__8341 = (0);
var G__8342 = (0);
seq__6513 = G__8339;
chunk__6514 = G__8340;
count__6515 = G__8341;
i__6516 = G__8342;
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
var G__6529 = new_ctx;
var G__6530 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6531 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6529,G__6530,G__6531) : nex.interpreter.eval_body_with_rescue.call(null,G__6529,G__6530,G__6531));
} else {
var seq__6532 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6533 = null;
var count__6534 = (0);
var i__6535 = (0);
while(true){
if((i__6535 < count__6534)){
var stmt = chunk__6533.cljs$core$IIndexed$_nth$arity$2(null,i__6535);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8343 = seq__6532;
var G__8344 = chunk__6533;
var G__8345 = count__6534;
var G__8346 = (i__6535 + (1));
seq__6532 = G__8343;
chunk__6533 = G__8344;
count__6534 = G__8345;
i__6535 = G__8346;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6532);
if(temp__5823__auto__){
var seq__6532__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6532__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6532__$1);
var G__8347 = cljs.core.chunk_rest(seq__6532__$1);
var G__8348 = c__5673__auto__;
var G__8349 = cljs.core.count(c__5673__auto__);
var G__8350 = (0);
seq__6532 = G__8347;
chunk__6533 = G__8348;
count__6534 = G__8349;
i__6535 = G__8350;
continue;
} else {
var stmt = cljs.core.first(seq__6532__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8351 = cljs.core.next(seq__6532__$1);
var G__8352 = null;
var G__8353 = (0);
var G__8354 = (0);
seq__6532 = G__8351;
chunk__6533 = G__8352;
count__6534 = G__8353;
i__6535 = G__8354;
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
}catch (e6536){var ___$7 = e6536;
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
}catch (e6537){var ___$7 = e6537;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6538){var ___$7 = e6538;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___8355 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___8355)){
var ensure_assertions_8356 = temp__5823__auto___8355;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_8356,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6539){var e = e6539;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6494_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6494_SHARP_),method);
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
}catch (e6540){var _ = e6540;
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
}catch (e6541){var _ = e6541;
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6542 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6543 = null;
var count__6544 = (0);
var i__6545 = (0);
while(true){
if((i__6545 < count__6544)){
var vec__6552 = chunk__6543.cljs$core$IIndexed$_nth$arity$2(null,i__6545);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6552,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8357 = seq__6542;
var G__8358 = chunk__6543;
var G__8359 = count__6544;
var G__8360 = (i__6545 + (1));
seq__6542 = G__8357;
chunk__6543 = G__8358;
count__6544 = G__8359;
i__6545 = G__8360;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6542);
if(temp__5823__auto__){
var seq__6542__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6542__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6542__$1);
var G__8361 = cljs.core.chunk_rest(seq__6542__$1);
var G__8362 = c__5673__auto__;
var G__8363 = cljs.core.count(c__5673__auto__);
var G__8364 = (0);
seq__6542 = G__8361;
chunk__6543 = G__8362;
count__6544 = G__8363;
i__6545 = G__8364;
continue;
} else {
var vec__6555 = cljs.core.first(seq__6542__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6555,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6555,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8365 = cljs.core.next(seq__6542__$1);
var G__8366 = null;
var G__8367 = (0);
var G__8368 = (0);
seq__6542 = G__8365;
chunk__6543 = G__8366;
count__6544 = G__8367;
i__6545 = G__8368;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6558){
var map__6559 = p__6558;
var map__6559__$1 = cljs.core.__destructure_map(map__6559);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6559__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6559__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6559__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8369 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8369)){
var current_class_name_8370 = temp__5823__auto___8369;
var temp__5823__auto___8371__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8370);
if(cljs.core.truth_(temp__5823__auto___8371__$1)){
var class_def_8372 = temp__5823__auto___8371__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8372,field))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___8373 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8373)){
var mf_8374 = temp__5823__auto___8373;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8374,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6560){
var map__6561 = p__6560;
var map__6561__$1 = cljs.core.__destructure_map(map__6561);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6561__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6561__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8375 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8375)){
var current_class_name_8376 = temp__5823__auto___8375;
var temp__5823__auto___8377__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8376);
if(cljs.core.truth_(temp__5823__auto___8377__$1)){
var class_def_8378 = temp__5823__auto___8377__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8378,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6562 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6562.cljs$core$IFn$_invoke$arity$1 ? fexpr__6562.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6562.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6563){
var map__6564 = p__6563;
var map__6564__$1 = cljs.core.__destructure_map(map__6564);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6564__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6565 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6565.cljs$core$IFn$_invoke$arity$1 ? fexpr__6565.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6565.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6566_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6566_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6567){
var map__6568 = p__6567;
var map__6568__$1 = cljs.core.__destructure_map(map__6568);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6568__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

try{var seq__6575_8379 = cljs.core.seq(body);
var chunk__6576_8380 = null;
var count__6577_8381 = (0);
var i__6578_8382 = (0);
while(true){
if((i__6578_8382 < count__6577_8381)){
var stmt_8383 = chunk__6576_8380.cljs$core$IIndexed$_nth$arity$2(null,i__6578_8382);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8383);


var G__8384 = seq__6575_8379;
var G__8385 = chunk__6576_8380;
var G__8386 = count__6577_8381;
var G__8387 = (i__6578_8382 + (1));
seq__6575_8379 = G__8384;
chunk__6576_8380 = G__8385;
count__6577_8381 = G__8386;
i__6578_8382 = G__8387;
continue;
} else {
var temp__5823__auto___8388 = cljs.core.seq(seq__6575_8379);
if(temp__5823__auto___8388){
var seq__6575_8389__$1 = temp__5823__auto___8388;
if(cljs.core.chunked_seq_QMARK_(seq__6575_8389__$1)){
var c__5673__auto___8390 = cljs.core.chunk_first(seq__6575_8389__$1);
var G__8391 = cljs.core.chunk_rest(seq__6575_8389__$1);
var G__8392 = c__5673__auto___8390;
var G__8393 = cljs.core.count(c__5673__auto___8390);
var G__8394 = (0);
seq__6575_8379 = G__8391;
chunk__6576_8380 = G__8392;
count__6577_8381 = G__8393;
i__6578_8382 = G__8394;
continue;
} else {
var stmt_8395 = cljs.core.first(seq__6575_8389__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8395);


var G__8396 = cljs.core.next(seq__6575_8389__$1);
var G__8397 = null;
var G__8398 = (0);
var G__8399 = (0);
seq__6575_8379 = G__8396;
chunk__6576_8380 = G__8397;
count__6577_8381 = G__8398;
i__6578_8382 = G__8399;
continue;
}
} else {
}
}
break;
}
}catch (e6569){var e_8400 = e6569;
if((((e_8400 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8400)))))){
throw e_8400;
} else {
var exc_value_8401 = (((((e_8400 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8400))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8400)):e_8400.message);
var rescue_env_8402 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8403 = nex.interpreter.env_define(rescue_env_8402,"exception",exc_value_8401);
var rescue_ctx_8404 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_8402);
try{var seq__6571_8405 = cljs.core.seq(rescue);
var chunk__6572_8406 = null;
var count__6573_8407 = (0);
var i__6574_8408 = (0);
while(true){
if((i__6574_8408 < count__6573_8407)){
var stmt_8409 = chunk__6572_8406.cljs$core$IIndexed$_nth$arity$2(null,i__6574_8408);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8404,stmt_8409);


var G__8410 = seq__6571_8405;
var G__8411 = chunk__6572_8406;
var G__8412 = count__6573_8407;
var G__8413 = (i__6574_8408 + (1));
seq__6571_8405 = G__8410;
chunk__6572_8406 = G__8411;
count__6573_8407 = G__8412;
i__6574_8408 = G__8413;
continue;
} else {
var temp__5823__auto___8414 = cljs.core.seq(seq__6571_8405);
if(temp__5823__auto___8414){
var seq__6571_8415__$1 = temp__5823__auto___8414;
if(cljs.core.chunked_seq_QMARK_(seq__6571_8415__$1)){
var c__5673__auto___8416 = cljs.core.chunk_first(seq__6571_8415__$1);
var G__8417 = cljs.core.chunk_rest(seq__6571_8415__$1);
var G__8418 = c__5673__auto___8416;
var G__8419 = cljs.core.count(c__5673__auto___8416);
var G__8420 = (0);
seq__6571_8405 = G__8417;
chunk__6572_8406 = G__8418;
count__6573_8407 = G__8419;
i__6574_8408 = G__8420;
continue;
} else {
var stmt_8421 = cljs.core.first(seq__6571_8415__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8404,stmt_8421);


var G__8422 = cljs.core.next(seq__6571_8415__$1);
var G__8423 = null;
var G__8424 = (0);
var G__8425 = (0);
seq__6571_8405 = G__8422;
chunk__6572_8406 = G__8423;
count__6573_8407 = G__8424;
i__6574_8408 = G__8425;
continue;
}
} else {
}
}
break;
}

throw e_8400;
}catch (e6570){var re_8426 = e6570;
if((((re_8426 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_8426)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_8426;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__6580){
var map__6581 = p__6580;
var map__6581__$1 = cljs.core.__destructure_map(map__6581);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6579_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__6579_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__6582){
var map__6583 = p__6582;
var map__6583__$1 = cljs.core.__destructure_map(map__6583);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6583__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6583__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6583__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__6584){
var map__6585 = p__6584;
var map__6585__$1 = cljs.core.__destructure_map(map__6585);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6585__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6585__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6585__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__6589){
var map__6590 = p__6589;
var map__6590__$1 = cljs.core.__destructure_map(map__6590);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6586_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6586_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6587_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6587_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6588_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6588_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__6592){
var map__6593 = p__6592;
var map__6593__$1 = cljs.core.__destructure_map(map__6593);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6593__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6593__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6593__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__6595 = cljs.core.first(cs);
var map__6595__$1 = cljs.core.__destructure_map(map__6595);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__6595,map__6595__$1,values,body,val,map__6593,map__6593__$1,expr,clauses,else$){
return (function (p1__6591_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6591_SHARP_));
});})(cs,map__6595,map__6595__$1,values,body,val,map__6593,map__6593__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__8427 = cljs.core.rest(cs);
cs = G__8427;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (ctx,p__6599){
var map__6600 = p__6599;
var map__6600__$1 = cljs.core.__destructure_map(map__6600);
var node = map__6600__$1;
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6600__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6600__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6600__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var prepared = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6596_SHARP_){
return nex.interpreter.prepare_select_clause(ctx,p1__6596_SHARP_);
}),clauses);
var timeout_ms_val = (cljs.core.truth_(timeout)?nex.interpreter.timeout_ms(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout))):null);
var deadline = (cljs.core.truth_(timeout_ms_val)?(nex.interpreter.current_time_ms() + timeout_ms_val):null);
while(true){
var temp__5821__auto__ = cljs.core.some(((function (prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout){
return (function (prepared_clause){
var temp__5823__auto__ = nex.interpreter.attempt_select_clause(prepared_clause);
if(cljs.core.truth_(temp__5823__auto__)){
var outcome = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prepared_clause,outcome], null);
} else {
return null;
}
});})(prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout))
,prepared);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__6601 = temp__5821__auto__;
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6601,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6601,(1),null);
return nex.interpreter.execute_select_body(ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(outcome));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout){
return (function (p1__6597_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6597_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout))
,else$));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deadline;
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.current_time_ms() >= deadline);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout){
return (function (p1__6598_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6598_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6600,map__6600__$1,node,clauses,else$,timeout))
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__6605){
var map__6606 = p__6605;
var map__6606__$1 = cljs.core.__destructure_map(map__6606);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6606__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6606__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6606__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6606__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6606__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__6607_8428 = cljs.core.seq(init);
var chunk__6608_8429 = null;
var count__6609_8430 = (0);
var i__6610_8431 = (0);
while(true){
if((i__6610_8431 < count__6609_8430)){
var stmt_8432 = chunk__6608_8429.cljs$core$IIndexed$_nth$arity$2(null,i__6610_8431);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8432);


var G__8433 = seq__6607_8428;
var G__8434 = chunk__6608_8429;
var G__8435 = count__6609_8430;
var G__8436 = (i__6610_8431 + (1));
seq__6607_8428 = G__8433;
chunk__6608_8429 = G__8434;
count__6609_8430 = G__8435;
i__6610_8431 = G__8436;
continue;
} else {
var temp__5823__auto___8437 = cljs.core.seq(seq__6607_8428);
if(temp__5823__auto___8437){
var seq__6607_8438__$1 = temp__5823__auto___8437;
if(cljs.core.chunked_seq_QMARK_(seq__6607_8438__$1)){
var c__5673__auto___8439 = cljs.core.chunk_first(seq__6607_8438__$1);
var G__8440 = cljs.core.chunk_rest(seq__6607_8438__$1);
var G__8441 = c__5673__auto___8439;
var G__8442 = cljs.core.count(c__5673__auto___8439);
var G__8443 = (0);
seq__6607_8428 = G__8440;
chunk__6608_8429 = G__8441;
count__6609_8430 = G__8442;
i__6610_8431 = G__8443;
continue;
} else {
var stmt_8444 = cljs.core.first(seq__6607_8438__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8444);


var G__8445 = cljs.core.next(seq__6607_8438__$1);
var G__8446 = null;
var G__8447 = (0);
var G__8448 = (0);
seq__6607_8428 = G__8445;
chunk__6608_8429 = G__8446;
count__6609_8430 = G__8447;
i__6610_8431 = G__8448;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6606,map__6606__$1,init,invariant,variant,until,body){
return (function (p1__6604_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6604_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6606,map__6606__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__8449 = result;
var G__8450 = curr_variant;
var G__8451 = (iteration + (1));
last_result = G__8449;
prev_variant = G__8450;
iteration = G__8451;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__6611){
var map__6612 = p__6611;
var map__6612__$1 = cljs.core.__destructure_map(map__6612);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6612__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6612__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6612__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,"+")) && (((typeof left_val === 'string') || (typeof right_val === 'string'))))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.interpreter.concat_string_value(ctx,left_val))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.interpreter.concat_string_value(ctx,right_val)));
} else {
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__6613){
var map__6614 = p__6613;
var map__6614__$1 = cljs.core.__destructure_map(map__6614);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6614__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6614__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__6615){
var map__6616 = p__6615;
var map__6616__$1 = cljs.core.__destructure_map(map__6616);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6616__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__6617){
var map__6618 = p__6617;
var map__6618__$1 = cljs.core.__destructure_map(map__6618);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6618__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__6619){
var map__6620 = p__6619;
var map__6620__$1 = cljs.core.__destructure_map(map__6620);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6620__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__6621){
var map__6622 = p__6621;
var map__6622__$1 = cljs.core.__destructure_map(map__6622);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6622__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__6623){
var map__6624 = p__6623;
var map__6624__$1 = cljs.core.__destructure_map(map__6624);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6624__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__6626){
var map__6627 = p__6626;
var map__6627__$1 = cljs.core.__destructure_map(map__6627);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6627__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6625_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6625_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),(function (ctx,p__6629){
var map__6630 = p__6629;
var map__6630__$1 = cljs.core.__destructure_map(map__6630);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6630__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_set_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6628_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6628_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__6631){
var map__6632 = p__6631;
var map__6632__$1 = cljs.core.__destructure_map(map__6632);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6632__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6633){
var map__6634 = p__6633;
var map__6634__$1 = cljs.core.__destructure_map(map__6634);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6634__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6634__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__6635){
var map__6636 = p__6635;
var map__6636__$1 = cljs.core.__destructure_map(map__6636);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6636__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6636__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__6637){
var map__6638 = p__6637;
var map__6638__$1 = cljs.core.__destructure_map(map__6638);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e6639){var _ = e6639;
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
var G__6641 = ctx;
var G__6642 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__6641,G__6642) : nex.interpreter.get_all_fields.call(null,G__6641,G__6642));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6640_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6640_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6640_SHARP_))));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6643_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6643_SHARP_),constructor_name);
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
return cljs.core.some((function (p__6644){
var map__6645 = p__6644;
var map__6645__$1 = cljs.core.__destructure_map(map__6645);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__6654){
var map__6655 = p__6654;
var map__6655__$1 = cljs.core.__destructure_map(map__6655);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6655__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6655__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6655__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6655__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__6656 = class_name;
switch (G__6656) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6646_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6646_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6648_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6648_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6649_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6649_SHARP_);
}),args);
var G__6657 = constructor$;
switch (G__6657) {
case "with_title":
var G__6658 = cljs.core.count(arg_values);
switch (G__6658) {
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
var G__6659 = cljs.core.count(arg_values);
switch (G__6659) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6650_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6650_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6651_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6651_SHARP_);
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
var ___$1 = (function (){var seq__6660 = cljs.core.seq(initial_field_map);
var chunk__6661 = null;
var count__6662 = (0);
var i__6663 = (0);
while(true){
if((i__6663 < count__6662)){
var vec__6670 = chunk__6661.cljs$core$IIndexed$_nth$arity$2(null,i__6663);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6670,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6670,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8456 = seq__6660;
var G__8457 = chunk__6661;
var G__8458 = count__6662;
var G__8459 = (i__6663 + (1));
seq__6660 = G__8456;
chunk__6661 = G__8457;
count__6662 = G__8458;
i__6663 = G__8459;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6660);
if(temp__5823__auto__){
var seq__6660__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6660__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6660__$1);
var G__8460 = cljs.core.chunk_rest(seq__6660__$1);
var G__8461 = c__5673__auto__;
var G__8462 = cljs.core.count(c__5673__auto__);
var G__8463 = (0);
seq__6660 = G__8460;
chunk__6661 = G__8461;
count__6662 = G__8462;
i__6663 = G__8463;
continue;
} else {
var vec__6673 = cljs.core.first(seq__6660__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6673,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6673,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8464 = cljs.core.next(seq__6660__$1);
var G__8465 = null;
var G__8466 = (0);
var G__8467 = (0);
seq__6660 = G__8464;
chunk__6661 = G__8465;
count__6662 = G__8466;
i__6663 = G__8467;
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6652_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6652_SHARP_);
}),args);
var ___$3 = (cljs.core.truth_(params)?(function (){var seq__6676 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6677 = null;
var count__6678 = (0);
var i__6679 = (0);
while(true){
if((i__6679 < count__6678)){
var vec__6686 = chunk__6677.cljs$core$IIndexed$_nth$arity$2(null,i__6679);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6686,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6686,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8468 = seq__6676;
var G__8469 = chunk__6677;
var G__8470 = count__6678;
var G__8471 = (i__6679 + (1));
seq__6676 = G__8468;
chunk__6677 = G__8469;
count__6678 = G__8470;
i__6679 = G__8471;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6676);
if(temp__5823__auto__){
var seq__6676__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6676__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6676__$1);
var G__8472 = cljs.core.chunk_rest(seq__6676__$1);
var G__8473 = c__5673__auto__;
var G__8474 = cljs.core.count(c__5673__auto__);
var G__8475 = (0);
seq__6676 = G__8472;
chunk__6677 = G__8473;
count__6678 = G__8474;
i__6679 = G__8475;
continue;
} else {
var vec__6689 = cljs.core.first(seq__6676__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6689,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6689,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8476 = cljs.core.next(seq__6676__$1);
var G__8477 = null;
var G__8478 = (0);
var G__8479 = (0);
seq__6676 = G__8476;
chunk__6677 = G__8477;
count__6678 = G__8478;
i__6679 = G__8479;
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
var seq__6692 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__6693 = null;
var count__6694 = (0);
var i__6695 = (0);
while(true){
if((i__6695 < count__6694)){
var stmt = chunk__6693.cljs$core$IIndexed$_nth$arity$2(null,i__6695);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8480 = seq__6692;
var G__8481 = chunk__6693;
var G__8482 = count__6694;
var G__8483 = (i__6695 + (1));
seq__6692 = G__8480;
chunk__6693 = G__8481;
count__6694 = G__8482;
i__6695 = G__8483;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6692);
if(temp__5823__auto__){
var seq__6692__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6692__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6692__$1);
var G__8484 = cljs.core.chunk_rest(seq__6692__$1);
var G__8485 = c__5673__auto__;
var G__8486 = cljs.core.count(c__5673__auto__);
var G__8487 = (0);
seq__6692 = G__8484;
chunk__6693 = G__8485;
count__6694 = G__8486;
i__6695 = G__8487;
continue;
} else {
var stmt = cljs.core.first(seq__6692__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8488 = cljs.core.next(seq__6692__$1);
var G__8489 = null;
var G__8490 = (0);
var G__8491 = (0);
seq__6692 = G__8488;
chunk__6693 = G__8489;
count__6694 = G__8490;
i__6695 = G__8491;
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
}catch (e6696){var ___$6 = e6696;
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
var inv_env_8492 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8493__$1 = (function (){var seq__6697 = cljs.core.seq(final_field_map);
var chunk__6698 = null;
var count__6699 = (0);
var i__6700 = (0);
while(true){
if((i__6700 < count__6699)){
var vec__6707 = chunk__6698.cljs$core$IIndexed$_nth$arity$2(null,i__6700);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707,(1),null);
nex.interpreter.env_define(inv_env_8492,cljs.core.name(field_name),field_val);


var G__8495 = seq__6697;
var G__8496 = chunk__6698;
var G__8497 = count__6699;
var G__8498 = (i__6700 + (1));
seq__6697 = G__8495;
chunk__6698 = G__8496;
count__6699 = G__8497;
i__6700 = G__8498;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6697);
if(temp__5823__auto__){
var seq__6697__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6697__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6697__$1);
var G__8499 = cljs.core.chunk_rest(seq__6697__$1);
var G__8500 = c__5673__auto__;
var G__8501 = cljs.core.count(c__5673__auto__);
var G__8502 = (0);
seq__6697 = G__8499;
chunk__6698 = G__8500;
count__6699 = G__8501;
i__6700 = G__8502;
continue;
} else {
var vec__6710 = cljs.core.first(seq__6697__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6710,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6710,(1),null);
nex.interpreter.env_define(inv_env_8492,cljs.core.name(field_name),field_val);


var G__8503 = cljs.core.next(seq__6697__$1);
var G__8504 = null;
var G__8505 = (0);
var G__8506 = (0);
seq__6697 = G__8503;
chunk__6698 = G__8504;
count__6699 = G__8505;
i__6700 = G__8506;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_8494 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_8492);
nex.interpreter.check_class_invariant(inv_ctx_8494,class_def);

return obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),(function (ctx,p__6713){
var map__6714 = p__6713;
var map__6714__$1 = cljs.core.__destructure_map(map__6714);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6714__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__6715){
var map__6716 = p__6715;
var map__6716__$1 = cljs.core.__destructure_map(map__6716);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6716__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__6717 = cljs.core.seq(old_values);
var chunk__6718 = null;
var count__6719 = (0);
var i__6720 = (0);
while(true){
if((i__6720 < count__6719)){
var vec__6727 = chunk__6718.cljs$core$IIndexed$_nth$arity$2(null,i__6720);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6727,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6727,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8507 = seq__6717;
var G__8508 = chunk__6718;
var G__8509 = count__6719;
var G__8510 = (i__6720 + (1));
seq__6717 = G__8507;
chunk__6718 = G__8508;
count__6719 = G__8509;
i__6720 = G__8510;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6717);
if(temp__5823__auto__){
var seq__6717__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6717__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6717__$1);
var G__8511 = cljs.core.chunk_rest(seq__6717__$1);
var G__8512 = c__5673__auto__;
var G__8513 = cljs.core.count(c__5673__auto__);
var G__8514 = (0);
seq__6717 = G__8511;
chunk__6718 = G__8512;
count__6719 = G__8513;
i__6720 = G__8514;
continue;
} else {
var vec__6730 = cljs.core.first(seq__6717__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6730,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6730,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8515 = cljs.core.next(seq__6717__$1);
var G__8516 = null;
var G__8517 = (0);
var G__8518 = (0);
seq__6717 = G__8515;
chunk__6718 = G__8516;
count__6719 = G__8517;
i__6720 = G__8518;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__6733){
var map__6734 = p__6733;
var map__6734__$1 = cljs.core.__destructure_map(map__6734);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6734__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6734__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
}catch (e6735){var _ = e6735;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result")){
return nex.interpreter.env_lookup(env,"result");
} else {
var res = (function (){try{return nex.interpreter.env_lookup(env,"result");
}catch (e6736){var _ = e6736;
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
return nex.interpreter.promise_reduce(assertions,null,(function (_,p__6737){
var map__6738 = p__6737;
var map__6738__$1 = cljs.core.__destructure_map(map__6738);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6738__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6738__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
var vec__6751 = (function (){var temp__5821__auto__ = nex.interpreter.get_parent_classes(ctx,class_def__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6754,p__6755){
var vec__6756 = p__6754;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6756,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6756,(1),null);
var map__6759 = p__6755;
var map__6759__$1 = cljs.core.__destructure_map(map__6759);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6759__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6760 = nex$interpreter$check_class_invariant_async_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6760,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6760,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6751,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6751,(1),null);
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
var vec__6763 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(1),null);
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
var G__6767 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6767__$1 = (((G__6767 instanceof cljs.core.Keyword))?G__6767.fqn:null);
switch (G__6767__$1) {
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
var G__6768 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6768) : nex.interpreter.async_free_node_QMARK_.call(null,G__6768));

break;
case "binary":
var and__5140__auto__ = (function (){var G__6769 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6769) : nex.interpreter.async_free_node_QMARK_.call(null,G__6769));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6770 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6770) : nex.interpreter.async_free_node_QMARK_.call(null,G__6770));
} else {
return and__5140__auto__;
}

break;
case "subscript":
var and__5140__auto__ = (function (){var G__6771 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6771) : nex.interpreter.async_free_node_QMARK_.call(null,G__6771));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6772 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6772) : nex.interpreter.async_free_node_QMARK_.call(null,G__6772));
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
return cljs.core.every_QMARK_((function (p__6773){
var map__6774 = p__6773;
var map__6774__$1 = cljs.core.__destructure_map(map__6774);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6774__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6774__$1,new cljs.core.Keyword(null,"value","value",305978217));
var and__5140__auto__ = (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(key) : nex.interpreter.async_free_node_QMARK_.call(null,key));
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.async_free_node_QMARK_.call(null,value));
} else {
return and__5140__auto__;
}
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node));

break;
case "statement":
var G__6775 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6775) : nex.interpreter.async_free_node_QMARK_.call(null,G__6775));

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
var _ = (function (){var seq__6776 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6777 = null;
var count__6778 = (0);
var i__6779 = (0);
while(true){
if((i__6779 < count__6778)){
var vec__6786 = chunk__6777.cljs$core$IIndexed$_nth$arity$2(null,i__6779);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6786,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6786,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8520 = seq__6776;
var G__8521 = chunk__6777;
var G__8522 = count__6778;
var G__8523 = (i__6779 + (1));
seq__6776 = G__8520;
chunk__6777 = G__8521;
count__6778 = G__8522;
i__6779 = G__8523;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6776);
if(temp__5823__auto__){
var seq__6776__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6776__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6776__$1);
var G__8524 = cljs.core.chunk_rest(seq__6776__$1);
var G__8525 = c__5673__auto__;
var G__8526 = cljs.core.count(c__5673__auto__);
var G__8527 = (0);
seq__6776 = G__8524;
chunk__6777 = G__8525;
count__6778 = G__8526;
i__6779 = G__8527;
continue;
} else {
var vec__6789 = cljs.core.first(seq__6776__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6789,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6789,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8528 = cljs.core.next(seq__6776__$1);
var G__8529 = null;
var G__8530 = (0);
var G__8531 = (0);
seq__6776 = G__8528;
chunk__6777 = G__8529;
count__6778 = G__8530;
i__6779 = G__8531;
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
var ___$1 = (function (){var seq__6792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6793 = null;
var count__6794 = (0);
var i__6795 = (0);
while(true){
if((i__6795 < count__6794)){
var vec__6802 = chunk__6793.cljs$core$IIndexed$_nth$arity$2(null,i__6795);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8532 = seq__6792;
var G__8533 = chunk__6793;
var G__8534 = count__6794;
var G__8535 = (i__6795 + (1));
seq__6792 = G__8532;
chunk__6793 = G__8533;
count__6794 = G__8534;
i__6795 = G__8535;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6792);
if(temp__5823__auto__){
var seq__6792__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6792__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6792__$1);
var G__8536 = cljs.core.chunk_rest(seq__6792__$1);
var G__8537 = c__5673__auto__;
var G__8538 = cljs.core.count(c__5673__auto__);
var G__8539 = (0);
seq__6792 = G__8536;
chunk__6793 = G__8537;
count__6794 = G__8538;
i__6795 = G__8539;
continue;
} else {
var vec__6805 = cljs.core.first(seq__6792__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6805,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6805,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8540 = cljs.core.next(seq__6792__$1);
var G__8541 = null;
var G__8542 = (0);
var G__8543 = (0);
seq__6792 = G__8540;
chunk__6793 = G__8541;
count__6794 = G__8542;
i__6795 = G__8543;
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
}catch (e6808){var ___$5 = e6808;
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
var temp__5823__auto___8544 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8544)){
var tgt_8545 = temp__5823__auto___8544;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8545,updated_obj);
}catch (e6809){var __8546__$5 = e6809;
}} else {
}

var seq__6810_8547 = cljs.core.seq(updated_obj.fields);
var chunk__6811_8548 = null;
var count__6812_8549 = (0);
var i__6813_8550 = (0);
while(true){
if((i__6813_8550 < count__6812_8549)){
var vec__6822_8551 = chunk__6811_8548.cljs$core$IIndexed$_nth$arity$2(null,i__6813_8550);
var field_name_8552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822_8551,(0),null);
var field_val_8553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822_8551,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8552))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8552),field_val_8553);
}catch (e6825){var __8554__$5 = e6825;
}} else {
}


var G__8555 = seq__6810_8547;
var G__8556 = chunk__6811_8548;
var G__8557 = count__6812_8549;
var G__8558 = (i__6813_8550 + (1));
seq__6810_8547 = G__8555;
chunk__6811_8548 = G__8556;
count__6812_8549 = G__8557;
i__6813_8550 = G__8558;
continue;
} else {
var temp__5823__auto___8559 = cljs.core.seq(seq__6810_8547);
if(temp__5823__auto___8559){
var seq__6810_8560__$1 = temp__5823__auto___8559;
if(cljs.core.chunked_seq_QMARK_(seq__6810_8560__$1)){
var c__5673__auto___8561 = cljs.core.chunk_first(seq__6810_8560__$1);
var G__8562 = cljs.core.chunk_rest(seq__6810_8560__$1);
var G__8563 = c__5673__auto___8561;
var G__8564 = cljs.core.count(c__5673__auto___8561);
var G__8565 = (0);
seq__6810_8547 = G__8562;
chunk__6811_8548 = G__8563;
count__6812_8549 = G__8564;
i__6813_8550 = G__8565;
continue;
} else {
var vec__6826_8566 = cljs.core.first(seq__6810_8560__$1);
var field_name_8567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6826_8566,(0),null);
var field_val_8568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6826_8566,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8567))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8567),field_val_8568);
}catch (e6829){var __8569__$5 = e6829;
}} else {
}


var G__8570 = cljs.core.next(seq__6810_8560__$1);
var G__8571 = null;
var G__8572 = (0);
var G__8573 = (0);
seq__6810_8547 = G__8570;
chunk__6811_8548 = G__8571;
count__6812_8549 = G__8572;
i__6813_8550 = G__8573;
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
var map__6838_8574 = node;
var map__6838_8575__$1 = cljs.core.__destructure_map(map__6838_8574);
var imports_8576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns_8577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes_8578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions_8579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements_8580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls_8581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6838_8575__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6839_8582 = cljs.core.seq(imports_8576);
var chunk__6840_8583 = null;
var count__6841_8584 = (0);
var i__6842_8585 = (0);
while(true){
if((i__6842_8585 < count__6841_8584)){
var import_node_8586 = chunk__6840_8583.cljs$core$IIndexed$_nth$arity$2(null,i__6842_8585);
if(cljs.core.map_QMARK_(import_node_8586)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8586);
} else {
}


var G__8587 = seq__6839_8582;
var G__8588 = chunk__6840_8583;
var G__8589 = count__6841_8584;
var G__8590 = (i__6842_8585 + (1));
seq__6839_8582 = G__8587;
chunk__6840_8583 = G__8588;
count__6841_8584 = G__8589;
i__6842_8585 = G__8590;
continue;
} else {
var temp__5823__auto___8591 = cljs.core.seq(seq__6839_8582);
if(temp__5823__auto___8591){
var seq__6839_8592__$1 = temp__5823__auto___8591;
if(cljs.core.chunked_seq_QMARK_(seq__6839_8592__$1)){
var c__5673__auto___8593 = cljs.core.chunk_first(seq__6839_8592__$1);
var G__8594 = cljs.core.chunk_rest(seq__6839_8592__$1);
var G__8595 = c__5673__auto___8593;
var G__8596 = cljs.core.count(c__5673__auto___8593);
var G__8597 = (0);
seq__6839_8582 = G__8594;
chunk__6840_8583 = G__8595;
count__6841_8584 = G__8596;
i__6842_8585 = G__8597;
continue;
} else {
var import_node_8598 = cljs.core.first(seq__6839_8592__$1);
if(cljs.core.map_QMARK_(import_node_8598)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8598);
} else {
}


var G__8599 = cljs.core.next(seq__6839_8592__$1);
var G__8600 = null;
var G__8601 = (0);
var G__8602 = (0);
seq__6839_8582 = G__8599;
chunk__6840_8583 = G__8600;
count__6841_8584 = G__8601;
i__6842_8585 = G__8602;
continue;
}
} else {
}
}
break;
}

var seq__6843_8603 = cljs.core.seq(interns_8577);
var chunk__6844_8604 = null;
var count__6845_8605 = (0);
var i__6846_8606 = (0);
while(true){
if((i__6846_8606 < count__6845_8605)){
var intern_node_8607 = chunk__6844_8604.cljs$core$IIndexed$_nth$arity$2(null,i__6846_8606);
if(cljs.core.map_QMARK_(intern_node_8607)){
nex.interpreter.process_intern(ctx,intern_node_8607);
} else {
}


var G__8608 = seq__6843_8603;
var G__8609 = chunk__6844_8604;
var G__8610 = count__6845_8605;
var G__8611 = (i__6846_8606 + (1));
seq__6843_8603 = G__8608;
chunk__6844_8604 = G__8609;
count__6845_8605 = G__8610;
i__6846_8606 = G__8611;
continue;
} else {
var temp__5823__auto___8612 = cljs.core.seq(seq__6843_8603);
if(temp__5823__auto___8612){
var seq__6843_8613__$1 = temp__5823__auto___8612;
if(cljs.core.chunked_seq_QMARK_(seq__6843_8613__$1)){
var c__5673__auto___8614 = cljs.core.chunk_first(seq__6843_8613__$1);
var G__8615 = cljs.core.chunk_rest(seq__6843_8613__$1);
var G__8616 = c__5673__auto___8614;
var G__8617 = cljs.core.count(c__5673__auto___8614);
var G__8618 = (0);
seq__6843_8603 = G__8615;
chunk__6844_8604 = G__8616;
count__6845_8605 = G__8617;
i__6846_8606 = G__8618;
continue;
} else {
var intern_node_8619 = cljs.core.first(seq__6843_8613__$1);
if(cljs.core.map_QMARK_(intern_node_8619)){
nex.interpreter.process_intern(ctx,intern_node_8619);
} else {
}


var G__8620 = cljs.core.next(seq__6843_8613__$1);
var G__8621 = null;
var G__8622 = (0);
var G__8623 = (0);
seq__6843_8603 = G__8620;
chunk__6844_8604 = G__8621;
count__6845_8605 = G__8622;
i__6846_8606 = G__8623;
continue;
}
} else {
}
}
break;
}

var seq__6847_8624 = cljs.core.seq(classes_8578);
var chunk__6848_8625 = null;
var count__6849_8626 = (0);
var i__6850_8627 = (0);
while(true){
if((i__6850_8627 < count__6849_8626)){
var class_node_8628 = chunk__6848_8625.cljs$core$IIndexed$_nth$arity$2(null,i__6850_8627);
if(cljs.core.map_QMARK_(class_node_8628)){
nex.interpreter.register_class(ctx,class_node_8628);
} else {
}


var G__8629 = seq__6847_8624;
var G__8630 = chunk__6848_8625;
var G__8631 = count__6849_8626;
var G__8632 = (i__6850_8627 + (1));
seq__6847_8624 = G__8629;
chunk__6848_8625 = G__8630;
count__6849_8626 = G__8631;
i__6850_8627 = G__8632;
continue;
} else {
var temp__5823__auto___8633 = cljs.core.seq(seq__6847_8624);
if(temp__5823__auto___8633){
var seq__6847_8634__$1 = temp__5823__auto___8633;
if(cljs.core.chunked_seq_QMARK_(seq__6847_8634__$1)){
var c__5673__auto___8635 = cljs.core.chunk_first(seq__6847_8634__$1);
var G__8636 = cljs.core.chunk_rest(seq__6847_8634__$1);
var G__8637 = c__5673__auto___8635;
var G__8638 = cljs.core.count(c__5673__auto___8635);
var G__8639 = (0);
seq__6847_8624 = G__8636;
chunk__6848_8625 = G__8637;
count__6849_8626 = G__8638;
i__6850_8627 = G__8639;
continue;
} else {
var class_node_8640 = cljs.core.first(seq__6847_8634__$1);
if(cljs.core.map_QMARK_(class_node_8640)){
nex.interpreter.register_class(ctx,class_node_8640);
} else {
}


var G__8641 = cljs.core.next(seq__6847_8634__$1);
var G__8642 = null;
var G__8643 = (0);
var G__8644 = (0);
seq__6847_8624 = G__8641;
chunk__6848_8625 = G__8642;
count__6849_8626 = G__8643;
i__6850_8627 = G__8644;
continue;
}
} else {
}
}
break;
}

nex.interpreter.promise_reduce(functions_8579,null,(function (_,fn_node){
if(cljs.core.map_QMARK_(fn_node)){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,fn_node) : nex.interpreter.eval_node_async.call(null,ctx,fn_node));
} else {
return null;
}
})).then((function (_){
return nex.interpreter.promise_reduce(((cljs.core.seq(statements_8580))?statements_8580:calls_8581),null,(function (___$1,stmt_node){
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
var map__6851_8645 = node;
var map__6851_8646__$1 = cljs.core.__destructure_map(map__6851_8645);
var name_8647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6851_8646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def_8648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6851_8646__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name_8649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6851_8646__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def_8648);

var obj_8650 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name_8649,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name_8647,obj_8650);

Promise.resolve(obj_8650);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318))){
var map__6852_8651 = node;
var map__6852_8652__$1 = cljs.core.__destructure_map(map__6852_8651);
var class_def_8653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852_8652__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name_8654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6852_8652__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def_8653);

Promise.resolve(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name_8654,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"call","call",-519999866))){
var map__6853_8655 = node;
var map__6853_8656__$1 = cljs.core.__destructure_map(map__6853_8655);
var target_8657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8656__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method_8658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8656__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args_8659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8656__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens_8660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6853_8656__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target_8657)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target_8657))) && ((method_8658 == null)))))){
var G__6854_8661 = ctx;
var G__6855_8662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target_8657,new cljs.core.Keyword(null,"args","args",1315556576),args_8659);
(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6854_8661,G__6855_8662) : nex.interpreter.eval_node_async.call(null,G__6854_8661,G__6855_8662));
} else {
nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6830_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6830_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6830_SHARP_));
}),args_8659)).then((function (arg_values){
if(cljs.core.truth_(target_8657)){
var target_name_8663 = ((typeof target_8657 === 'string')?target_8657:null);
var class_target_8664 = (cljs.core.truth_(target_name_8663)?nex.interpreter.lookup_class_if_exists(ctx,target_name_8663):null);
var parent_class_8665 = (cljs.core.truth_((function (){var and__5140__auto__ = target_name_8663;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5140__auto__;
}
})())?(function (){var cls = nex.interpreter.lookup_class_if_exists(ctx,target_name_8663);
if(cljs.core.truth_((function (){var and__5140__auto__ = cls;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.is_parent_QMARK_(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_8663);
} else {
return and__5140__auto__;
}
})())){
return cls;
} else {
return null;
}
})():null);
(cljs.core.truth_((function (){var or__5142__auto__ = parent_class_8665;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = class_target_8664;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return target_name_8663;
}
}
})())?Promise.resolve(null):(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,target_8657) : nex.interpreter.eval_node_async.call(null,ctx,target_8657))).then((function (target_value){
var obj = (cljs.core.truth_(parent_class_8665)?null:(cljs.core.truth_(class_target_8664)?null:(cljs.core.truth_(target_name_8663)?nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8663):target_value)));
if(cljs.core.truth_((function (){var and__5140__auto__ = class_target_8664;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = has_parens_8660 === false;
if(and__5140__auto____$1){
return nex.interpreter.lookup_class_constant(ctx,class_target_8664,method_8658);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
Promise.resolve(nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,class_target_8664,method_8658));
} else {
if(cljs.core.truth_(parent_class_8665)){
nex.interpreter.dispatch_parent_call_async(ctx,new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8663,method_8658,arg_values);
} else {
if(nex.interpreter.nex_object_QMARK_(obj)){
var class_def_8666 = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj));
var method_lookup_8667 = nex.interpreter.lookup_method_with_inheritance(ctx,class_def_8666,method_8658);
if(cljs.core.truth_(method_lookup_8667)){
var method_def_8668 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(method_lookup_8667);
var params_8669 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_def_8668);
if(((has_parens_8660 === false) && (cljs.core.seq(params_8669)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)+" requires arguments"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_8658,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params_8669)], null));
} else {
}

var all_fields_8670 = nex.interpreter.get_all_fields(ctx,class_def_8666);
var effective_require_8671 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(method_lookup_8667);
var effective_ensure_8672 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(method_lookup_8667);
var has_postconditions_QMARK__8673 = cljs.core.seq(effective_ensure_8672);
var old_values_8674 = ((has_postconditions_QMARK__8673)?new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj):null);
var method_env_8675 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
}
})());
var param_names_8676 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params_8669));
var __8677 = (function (){var seq__6856 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6857 = null;
var count__6858 = (0);
var i__6859 = (0);
while(true){
if((i__6859 < count__6858)){
var vec__6866 = chunk__6857.cljs$core$IIndexed$_nth$arity$2(null,i__6859);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6866,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6866,(1),null);
nex.interpreter.env_define(method_env_8675,cljs.core.name(field_name),field_val);


var G__8686 = seq__6856;
var G__8687 = chunk__6857;
var G__8688 = count__6858;
var G__8689 = (i__6859 + (1));
seq__6856 = G__8686;
chunk__6857 = G__8687;
count__6858 = G__8688;
i__6859 = G__8689;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6856);
if(temp__5823__auto__){
var seq__6856__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6856__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6856__$1);
var G__8690 = cljs.core.chunk_rest(seq__6856__$1);
var G__8691 = c__5673__auto__;
var G__8692 = cljs.core.count(c__5673__auto__);
var G__8693 = (0);
seq__6856 = G__8690;
chunk__6857 = G__8691;
count__6858 = G__8692;
i__6859 = G__8693;
continue;
} else {
var vec__6869 = cljs.core.first(seq__6856__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6869,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6869,(1),null);
nex.interpreter.env_define(method_env_8675,cljs.core.name(field_name),field_val);


var G__8694 = cljs.core.next(seq__6856__$1);
var G__8695 = null;
var G__8696 = (0);
var G__8697 = (0);
seq__6856 = G__8694;
chunk__6857 = G__8695;
count__6858 = G__8696;
i__6859 = G__8697;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8678__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,method_env_8675,class_def_8666);
var __8679__$2 = (function (){var seq__6872 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_8669,arg_values));
var chunk__6873 = null;
var count__6874 = (0);
var i__6875 = (0);
while(true){
if((i__6875 < count__6874)){
var vec__6882 = chunk__6873.cljs$core$IIndexed$_nth$arity$2(null,i__6875);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6882,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6882,(1),null);
nex.interpreter.env_define(method_env_8675,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8698 = seq__6872;
var G__8699 = chunk__6873;
var G__8700 = count__6874;
var G__8701 = (i__6875 + (1));
seq__6872 = G__8698;
chunk__6873 = G__8699;
count__6874 = G__8700;
i__6875 = G__8701;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6872);
if(temp__5823__auto__){
var seq__6872__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6872__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6872__$1);
var G__8702 = cljs.core.chunk_rest(seq__6872__$1);
var G__8703 = c__5673__auto__;
var G__8704 = cljs.core.count(c__5673__auto__);
var G__8705 = (0);
seq__6872 = G__8702;
chunk__6873 = G__8703;
count__6874 = G__8704;
i__6875 = G__8705;
continue;
} else {
var vec__6885 = cljs.core.first(seq__6872__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6885,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6885,(1),null);
nex.interpreter.env_define(method_env_8675,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8706 = cljs.core.next(seq__6872__$1);
var G__8707 = null;
var G__8708 = (0);
var G__8709 = (0);
seq__6872 = G__8706;
chunk__6873 = G__8707;
count__6874 = G__8708;
i__6875 = G__8709;
continue;
}
} else {
return null;
}
}
break;
}
})();
var modified_fields_8680 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var return_type_8681 = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_def_8668);
var default_result_8682 = (cljs.core.truth_(return_type_8681)?nex.interpreter.get_default_field_value(return_type_8681):null);
var __8683__$3 = nex.interpreter.env_define(method_env_8675,"result",default_result_8682);
var __8684__$4 = nex.interpreter.env_define(method_env_8675,"this",obj);
var new_ctx_8685 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env_8675),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name_8663),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method_8658),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values_8674),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields_8680),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"method","method",55703592),method_8658,new cljs.core.Keyword(null,"env","env",-1815813235),method_env_8675,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_8669;
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
nex.interpreter.__GT_promise((cljs.core.truth_(effective_require_8671)?nex.interpreter.check_assertions_async(new_ctx_8685,effective_require_8671,nex.interpreter.Precondition):null)).then((function (___$5){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def_8668);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8685,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_8668),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8685,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_8668));
}
})()).then((function (___$6){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
if(((cljs.core.contains_QMARK_(param_names_8676,field_name)) && ((!(cljs.core.contains_QMARK_(cljs.core.deref(modified_fields_8680),field_name)))))){
return m;
} else {
var val = (function (){try{return nex.interpreter.env_lookup(method_env_8675,field_name);
}catch (e6888){var ___$7 = e6888;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields_8670);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields,new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj));
var result = nex.interpreter.async_result_value(method_env_8675);
return nex.interpreter.__GT_promise((cljs.core.truth_(effective_ensure_8672)?nex.interpreter.check_assertions_async(new_ctx_8685,effective_ensure_8672,nex.interpreter.Postcondition):null)).then((function (___$7){
return nex.interpreter.check_class_invariant_async(new_ctx_8685,class_def_8666).then((function (___$8){
if(cljs.core.truth_(target_name_8663)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name_8663,updated_obj);
} else {
}

return result;
}));
}));
}));
}));

var all_fields_8710 = nex.interpreter.get_all_fields(ctx,class_def_8666);
var field_8711 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6831_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6831_SHARP_),method_8658);
}),all_fields_8710));
if(cljs.core.truth_(field_8711)){
var field_val_8712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_8658));
if(cljs.core.truth_((function (){var and__5140__auto__ = has_parens_8660;
if(cljs.core.truth_(and__5140__auto__)){
return nex.interpreter.nex_object_QMARK_(field_val_8712);
} else {
return and__5140__auto__;
}
})())){
var call_method_8713 = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arg_values)));
var literal_args_8714 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),v], null);
}),arg_values);
var G__6889_8715 = ctx;
var G__6890_8716 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),field_val_8712], null),new cljs.core.Keyword(null,"method","method",55703592),call_method_8713,new cljs.core.Keyword(null,"args","args",1315556576),literal_args_8714], null);
(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6889_8715,G__6890_8716) : nex.interpreter.eval_node_async.call(null,G__6889_8715,G__6890_8716));
} else {
if(cljs.core.empty_QMARK_(arg_values)){
Promise.resolve(field_val_8712);
} else {
Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8658], null)));
}
}
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtin_type_methods,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Any","Any",-363039258),method_8658], null)))){
nex.interpreter.__GT_promise(nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name_8663;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target_8657;
}
})(),obj,method_8658,arg_values));
} else {
Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8658], null)));
}
}
} else {
}
} else {
}
}
}

nex.interpreter.get_type_name(obj);

nex.interpreter.__GT_promise(nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name_8663;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target_8657;
}
})(),obj,method_8658,arg_values));


return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found on type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target_8657,new cljs.core.Keyword(null,"value","value",305978217),obj,new cljs.core.Keyword(null,"method","method",55703592),method_8658], null)));
}));
} else {
}

var fn_obj = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),method_8658);
}catch (e6891){var _ = e6891;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_obj,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
if(nex.interpreter.nex_object_QMARK_(fn_obj)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(has_parens_8660,false)){
var G__6892 = ctx;
var G__6893 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),method_8658,new cljs.core.Keyword(null,"method","method",55703592),(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args_8659))),new cljs.core.Keyword(null,"args","args",1315556576),args_8659], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6892,G__6893) : nex.interpreter.eval_node_async.call(null,G__6892,G__6893));
} else {
return Promise.resolve(fn_obj);
}
} else {
if(has_parens_8660 === false){
return Promise.resolve(fn_obj);
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8658], null)));
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx))){
var current_obj = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,method_8658);
if(cljs.core.truth_(method_lookup)){
var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var current_env = new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(current_env,field_name);
}catch (e6894){var _ = e6894;
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
return nex.interpreter.__GT_promise((function (){var G__6895 = ctx;
var G__6896 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),method_8658,new cljs.core.Keyword(null,"args","args",1315556576),args_8659], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6895,G__6896) : nex.interpreter.eval_node_async.call(null,G__6895,G__6896));
})()).then((function (result){
var temp__5823__auto___8717 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8717)){
var target_name_8718 = temp__5823__auto___8717;
var called_obj_8719 = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_8718);
if(cljs.core.truth_(called_obj_8719)){
var seq__6897_8720 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj_8719));
var chunk__6898_8721 = null;
var count__6899_8722 = (0);
var i__6900_8723 = (0);
while(true){
if((i__6900_8723 < count__6899_8722)){
var vec__6907_8724 = chunk__6898_8721.cljs$core$IIndexed$_nth$arity$2(null,i__6900_8723);
var field_name_8725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6907_8724,(0),null);
var field_val_8726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6907_8724,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8725),field_val_8726);


var G__8727 = seq__6897_8720;
var G__8728 = chunk__6898_8721;
var G__8729 = count__6899_8722;
var G__8730 = (i__6900_8723 + (1));
seq__6897_8720 = G__8727;
chunk__6898_8721 = G__8728;
count__6899_8722 = G__8729;
i__6900_8723 = G__8730;
continue;
} else {
var temp__5823__auto___8731__$1 = cljs.core.seq(seq__6897_8720);
if(temp__5823__auto___8731__$1){
var seq__6897_8732__$1 = temp__5823__auto___8731__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6897_8732__$1)){
var c__5673__auto___8733 = cljs.core.chunk_first(seq__6897_8732__$1);
var G__8734 = cljs.core.chunk_rest(seq__6897_8732__$1);
var G__8735 = c__5673__auto___8733;
var G__8736 = cljs.core.count(c__5673__auto___8733);
var G__8737 = (0);
seq__6897_8720 = G__8734;
chunk__6898_8721 = G__8735;
count__6899_8722 = G__8736;
i__6900_8723 = G__8737;
continue;
} else {
var vec__6910_8738 = cljs.core.first(seq__6897_8732__$1);
var field_name_8739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6910_8738,(0),null);
var field_val_8740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6910_8738,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8739),field_val_8740);


var G__8741 = cljs.core.next(seq__6897_8732__$1);
var G__8742 = null;
var G__8743 = (0);
var G__8744 = (0);
seq__6897_8720 = G__8741;
chunk__6898_8721 = G__8742;
count__6899_8722 = G__8743;
i__6900_8723 = G__8744;
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
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method_8658);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined method: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8658,new cljs.core.Keyword(null,"object","object",1474613949),current_obj], null)));
}
}
} else {
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method_8658);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_8658)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method_8658], null)));
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

nex.interpreter.__GT_promise((function (){var G__6913 = ctx;
var G__6914 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6913,G__6914) : nex.interpreter.eval_node_async.call(null,G__6913,G__6914));
})()).then((function (val){
var temp__5823__auto___8745 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8745)){
var mf_8746 = temp__5823__auto___8745;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8746,cljs.core.conj,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node),val);

return val;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"assign","assign",-1590426222));

nex.interpreter.__GT_promise((function (){var G__6915 = ctx;
var G__6916 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6915,G__6916) : nex.interpreter.eval_node_async.call(null,G__6915,G__6916));
})()).then((function (val){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"let","let",-1282412701));

nex.interpreter.__GT_promise((function (){var G__6917 = ctx;
var G__6918 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6917,G__6918) : nex.interpreter.eval_node_async.call(null,G__6917,G__6918));
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

nex.interpreter.__GT_promise((function (){var G__6919 = ctx;
var G__6920 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6919,G__6920) : nex.interpreter.eval_node_async.call(null,G__6919,G__6920));
})()).then((function (val){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"retry","retry",-614012896));

Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("retry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813)], null)));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734));

var new_env_8747 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx_8748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env_8747);
var temp__5821__auto___8749 = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto___8749)){
var rescue_8750 = temp__5821__auto___8749;
nex.interpreter.eval_body_with_rescue_async(new_ctx_8748,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node),rescue_8750);
} else {
nex.interpreter.eval_body_async(new_ctx_8748,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node));
}

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"when","when",-576417306));

nex.interpreter.__GT_promise((function (){var G__6921 = ctx;
var G__6922 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6921,G__6922) : nex.interpreter.eval_node_async.call(null,G__6921,G__6922));
})()).then((function (cond_val){
if(cljs.core.truth_(cond_val)){
return nex.interpreter.__GT_promise((function (){var G__6923 = ctx;
var G__6924 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6923,G__6924) : nex.interpreter.eval_node_async.call(null,G__6923,G__6924));
})());
} else {
return nex.interpreter.__GT_promise((function (){var G__6925 = ctx;
var G__6926 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6925,G__6926) : nex.interpreter.eval_node_async.call(null,G__6925,G__6926));
})());
}
}));

cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"convert","convert",912478626));

nex.interpreter.__GT_promise((function (){var G__6927 = ctx;
var G__6928 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6927,G__6928) : nex.interpreter.eval_node_async.call(null,G__6927,G__6928));
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

nex.interpreter.__GT_promise((function (){var G__6929 = ctx;
var G__6930 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6929,G__6930) : nex.interpreter.eval_node_async.call(null,G__6929,G__6930));
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
return nex.interpreter.__GT_promise((function (){var G__6933 = ctx;
var G__6934 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6933,G__6934) : nex.interpreter.eval_node_async.call(null,G__6933,G__6934));
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

nex.interpreter.__GT_promise((function (){var G__6935 = ctx;
var G__6936 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6935,G__6936) : nex.interpreter.eval_node_async.call(null,G__6935,G__6936));
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
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6832_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6832_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6832_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses)))).then((function (values){
if(cljs.core.truth_(cljs.core.some((function (p1__6833_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,p1__6833_SHARP_);
}),values))){
return nex.interpreter.__GT_promise((function (){var G__6939 = ctx;
var G__6940 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6939,G__6940) : nex.interpreter.eval_node_async.call(null,G__6939,G__6940));
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

return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6834_SHARP_){
return nex.interpreter.prepare_select_clause_async(ctx,p1__6834_SHARP_);
}),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node))).then((function (prepared){
var timeout_ms_p = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var timeout_node = temp__5821__auto__;
return nex.interpreter.__GT_promise((function (){var G__6941 = ctx;
var G__6942 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout_node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6941,G__6942) : nex.interpreter.eval_node_async.call(null,G__6941,G__6942));
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
return nex.interpreter.__GT_promise((function (){var G__6945 = ctx;
var G__6946 = new cljs.core.Keyword(null,"until","until",-1189166390).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6945,G__6946) : nex.interpreter.eval_node_async.call(null,G__6945,G__6946));
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
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"statement","statement",-32780863)),(function (){var G__6947 = ctx;
var G__6948 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6947,G__6948) : nex.interpreter.eval_node_async.call(null,G__6947,G__6948));
})(),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"binary","binary",-1802232288)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6949 = ctx;
var G__6950 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6949,G__6950) : nex.interpreter.eval_node_async.call(null,G__6949,G__6950));
})(),(function (){var G__6951 = ctx;
var G__6952 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6951,G__6952) : nex.interpreter.eval_node_async.call(null,G__6951,G__6952));
})()], null)).then((function (p__6953){
var vec__6954 = p__6953;
var left_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954,(0),null);
var right_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),"+")) && (((typeof left_val === 'string') || (typeof right_val === 'string'))))){
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.concat_string_value_async(ctx,left_val),nex.interpreter.concat_string_value_async(ctx,right_val)], null)).then((function (p__6957){
var vec__6958 = p__6957;
var left_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(0),null);
var right_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_str)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_str));
}));
} else {
return nex.interpreter.apply_binary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),left_val,right_val);
}
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"unary","unary",-989314568)),nex.interpreter.__GT_promise((function (){var G__6961 = ctx;
var G__6962 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6961,G__6962) : nex.interpreter.eval_node_async.call(null,G__6961,G__6962));
})()).then((function (val){
return nex.interpreter.apply_unary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"integer","integer",-604721710)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"real","real",388296937)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"char","char",-641587586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"string","string",-1989541586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"nil","nil",99600501)),Promise.resolve(null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6835_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6835_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6835_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_array_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6836_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6836_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6836_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_set_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6963){
var map__6964 = p__6963;
var map__6964__$1 = cljs.core.__destructure_map(map__6964);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6964__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6964__$1,new cljs.core.Keyword(null,"value","value",305978217));
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,key) : nex.interpreter.eval_node_async.call(null,ctx,key)),(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,value) : nex.interpreter.eval_node_async.call(null,ctx,value))], null));
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_map_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"subscript","subscript",-1484665872)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6965 = ctx;
var G__6966 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6965,G__6966) : nex.interpreter.eval_node_async.call(null,G__6965,G__6966));
})(),(function (){var G__6967 = ctx;
var G__6968 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6967,G__6968) : nex.interpreter.eval_node_async.call(null,G__6967,G__6968));
})()], null)).then((function (p__6969){
var vec__6970 = p__6969;
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6970,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6970,(1),null);
return nex.interpreter.nex_coll_get(coll,idx);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"identifier","identifier",-805503498)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"create","create",-1301499256)),(function (){var map__6973 = node;
var map__6973__$1 = cljs.core.__destructure_map(map__6973);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6973__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6973__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6973__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6973__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6837_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6837_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6837_SHARP_));
}),args)).then((function (arg_values){
var G__6974 = class_name;
switch (G__6974) {
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
var _ = (function (){var seq__6975 = cljs.core.seq(field_map);
var chunk__6976 = null;
var count__6977 = (0);
var i__6978 = (0);
while(true){
if((i__6978 < count__6977)){
var vec__6985 = chunk__6976.cljs$core$IIndexed$_nth$arity$2(null,i__6978);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6985,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6985,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8752 = seq__6975;
var G__8753 = chunk__6976;
var G__8754 = count__6977;
var G__8755 = (i__6978 + (1));
seq__6975 = G__8752;
chunk__6976 = G__8753;
count__6977 = G__8754;
i__6978 = G__8755;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6975);
if(temp__5823__auto__){
var seq__6975__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6975__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6975__$1);
var G__8756 = cljs.core.chunk_rest(seq__6975__$1);
var G__8757 = c__5673__auto__;
var G__8758 = cljs.core.count(c__5673__auto__);
var G__8759 = (0);
seq__6975 = G__8756;
chunk__6976 = G__8757;
count__6977 = G__8758;
i__6978 = G__8759;
continue;
} else {
var vec__6988 = cljs.core.first(seq__6975__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6988,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6988,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8760 = cljs.core.next(seq__6975__$1);
var G__8761 = null;
var G__8762 = (0);
var G__8763 = (0);
seq__6975 = G__8760;
chunk__6976 = G__8761;
count__6977 = G__8762;
i__6978 = G__8763;
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

var ctor_env_8764 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8765 = (function (){var seq__6991 = cljs.core.seq(initial_field_map);
var chunk__6992 = null;
var count__6993 = (0);
var i__6994 = (0);
while(true){
if((i__6994 < count__6993)){
var vec__7001 = chunk__6992.cljs$core$IIndexed$_nth$arity$2(null,i__6994);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7001,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7001,(1),null);
nex.interpreter.env_define(ctor_env_8764,cljs.core.name(field_name),field_val);


var G__8771 = seq__6991;
var G__8772 = chunk__6992;
var G__8773 = count__6993;
var G__8774 = (i__6994 + (1));
seq__6991 = G__8771;
chunk__6992 = G__8772;
count__6993 = G__8773;
i__6994 = G__8774;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6991);
if(temp__5823__auto__){
var seq__6991__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6991__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6991__$1);
var G__8775 = cljs.core.chunk_rest(seq__6991__$1);
var G__8776 = c__5673__auto__;
var G__8777 = cljs.core.count(c__5673__auto__);
var G__8778 = (0);
seq__6991 = G__8775;
chunk__6992 = G__8776;
count__6993 = G__8777;
i__6994 = G__8778;
continue;
} else {
var vec__7004 = cljs.core.first(seq__6991__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7004,(1),null);
nex.interpreter.env_define(ctor_env_8764,cljs.core.name(field_name),field_val);


var G__8779 = cljs.core.next(seq__6991__$1);
var G__8780 = null;
var G__8781 = (0);
var G__8782 = (0);
seq__6991 = G__8779;
chunk__6992 = G__8780;
count__6993 = G__8781;
i__6994 = G__8782;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8766__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,ctor_env_8764,class_def);
var params_8767 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var __8768__$2 = (function (){var seq__7007 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_8767,arg_values));
var chunk__7008 = null;
var count__7009 = (0);
var i__7010 = (0);
while(true){
if((i__7010 < count__7009)){
var vec__7017 = chunk__7008.cljs$core$IIndexed$_nth$arity$2(null,i__7010);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017,(1),null);
nex.interpreter.env_define(ctor_env_8764,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8783 = seq__7007;
var G__8784 = chunk__7008;
var G__8785 = count__7009;
var G__8786 = (i__7010 + (1));
seq__7007 = G__8783;
chunk__7008 = G__8784;
count__7009 = G__8785;
i__7010 = G__8786;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7007);
if(temp__5823__auto__){
var seq__7007__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7007__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7007__$1);
var G__8787 = cljs.core.chunk_rest(seq__7007__$1);
var G__8788 = c__5673__auto__;
var G__8789 = cljs.core.count(c__5673__auto__);
var G__8790 = (0);
seq__7007 = G__8787;
chunk__7008 = G__8788;
count__7009 = G__8789;
i__7010 = G__8790;
continue;
} else {
var vec__7020 = cljs.core.first(seq__7007__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020,(1),null);
nex.interpreter.env_define(ctor_env_8764,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8791 = cljs.core.next(seq__7007__$1);
var G__8792 = null;
var G__8793 = (0);
var G__8794 = (0);
seq__7007 = G__8791;
chunk__7008 = G__8792;
count__7009 = G__8793;
i__7010 = G__8794;
continue;
}
} else {
return null;
}
}
break;
}
})();
var temp_obj_8769 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,initial_field_map);
var new_ctx_8770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env_8764),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj_8769),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),constructor$),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),effective_class_name,new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})(),new cljs.core.Keyword(null,"env","env",-1815813235),ctor_env_8764,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_8767;
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
return nex.interpreter.check_assertions_async(new_ctx_8770,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})()).then((function (___$3){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8770,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8770,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
}
})()).then((function (___$4){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(ctor_env_8764,field_name);
}catch (e7023){var ___$5 = e7023;
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
return nex.interpreter.check_assertions_async(new_ctx_8770,ensure_assertions,nex.interpreter.Postcondition);
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
var seq__7024_8795 = cljs.core.seq(output);
var chunk__7025_8796 = null;
var count__7026_8797 = (0);
var i__7027_8798 = (0);
while(true){
if((i__7027_8798 < count__7026_8797)){
var line_8799 = chunk__7025_8796.cljs$core$IIndexed$_nth$arity$2(null,i__7027_8798);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8799], 0));


var G__8800 = seq__7024_8795;
var G__8801 = chunk__7025_8796;
var G__8802 = count__7026_8797;
var G__8803 = (i__7027_8798 + (1));
seq__7024_8795 = G__8800;
chunk__7025_8796 = G__8801;
count__7026_8797 = G__8802;
i__7027_8798 = G__8803;
continue;
} else {
var temp__5823__auto___8804 = cljs.core.seq(seq__7024_8795);
if(temp__5823__auto___8804){
var seq__7024_8805__$1 = temp__5823__auto___8804;
if(cljs.core.chunked_seq_QMARK_(seq__7024_8805__$1)){
var c__5673__auto___8806 = cljs.core.chunk_first(seq__7024_8805__$1);
var G__8807 = cljs.core.chunk_rest(seq__7024_8805__$1);
var G__8808 = c__5673__auto___8806;
var G__8809 = cljs.core.count(c__5673__auto___8806);
var G__8810 = (0);
seq__7024_8795 = G__8807;
chunk__7025_8796 = G__8808;
count__7026_8797 = G__8809;
i__7027_8798 = G__8810;
continue;
} else {
var line_8811 = cljs.core.first(seq__7024_8805__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8811], 0));


var G__8812 = cljs.core.next(seq__7024_8805__$1);
var G__8813 = null;
var G__8814 = (0);
var G__8815 = (0);
seq__7024_8795 = G__8812;
chunk__7025_8796 = G__8813;
count__7026_8797 = G__8814;
i__7027_8798 = G__8815;
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
