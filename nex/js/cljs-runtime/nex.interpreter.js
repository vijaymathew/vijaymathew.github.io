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
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",arr))+"]");
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
return JSON.stringify(Object.fromEntries(m));
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
return nex.interpreter.nex_set_from(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6083_SHARP_){
return b.has(p1__6083_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_intersection = (function nex$interpreter$nex_set_intersection(a,b){
return nex.interpreter.nex_set_from(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6084_SHARP_){
return b.has(p1__6084_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_symmetric_difference = (function nex$interpreter$nex_set_symmetric_difference(a,b){
return nex.interpreter.nex_set_from(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6085_SHARP_){
return b.has(p1__6085_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6086_SHARP_){
return a.has(p1__6086_SHARP_);
}),cljs.core.es6_iterator_seq(b.values()))));
});
nex.interpreter.nex_set_str = (function nex$interpreter$nex_set_str(s){
return (""+"#{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.es6_iterator_seq(s.values())))+"}");
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
nex.interpreter.nex_parse_integer = (function nex$interpreter$nex_parse_integer(s){
return parseInt(s,(10));
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

(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6088,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6092 = k6088;
var G__6092__$1 = (((G__6092 instanceof cljs.core.Keyword))?G__6092.fqn:null);
switch (G__6092__$1) {
case "bindings":
return self__.bindings;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6088,else__5451__auto__);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6093){
var vec__6094 = p__6093;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6094,(1),null);
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

(nex.interpreter.Environment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6087){
var self__ = this;
var G__6087__$1 = this;
return (new cljs.core.RecordIter((0),G__6087__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Environment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6089,other6090){
var self__ = this;
var this6089__$1 = this;
return (((!((other6090 == null)))) && ((((this6089__$1.constructor === other6090.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6089__$1.bindings,other6090.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6089__$1.parent,other6090.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6089__$1.__extmap,other6090.__extmap)))))))));
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

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6088){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6097 = k6088;
var G__6097__$1 = (((G__6097 instanceof cljs.core.Keyword))?G__6097.fqn:null);
switch (G__6097__$1) {
case "bindings":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6088);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6087){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6098 = cljs.core.keyword_identical_QMARK_;
var expr__6099 = k__5457__auto__;
if(cljs.core.truth_((pred__6098.cljs$core$IFn$_invoke$arity$2 ? pred__6098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6099) : pred__6098.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6099)))){
return (new nex.interpreter.Environment(G__6087,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6098.cljs$core$IFn$_invoke$arity$2 ? pred__6098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6099) : pred__6098.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6099)))){
return (new nex.interpreter.Environment(self__.bindings,G__6087,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6087),null));
}
}
}));

(nex.interpreter.Environment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6087){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,G__6087,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Environment = (function nex$interpreter$map__GT_Environment(G__6091){
var extmap__5490__auto__ = (function (){var G__6101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6091,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__6091)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6101);
} else {
return G__6101;
}
})();
return (new nex.interpreter.Environment(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__6091),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__6091),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new environment, optionally with a parent scope.
 */
nex.interpreter.make_env = (function nex$interpreter$make_env(var_args){
var G__6103 = arguments.length;
switch (G__6103) {
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

(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6105,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6109 = k6105;
var G__6109__$1 = (((G__6109 instanceof cljs.core.Keyword))?G__6109.fqn:null);
switch (G__6109__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6105,else__5451__auto__);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6110){
var vec__6111 = p__6110;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6111,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6111,(1),null);
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

(nex.interpreter.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6104){
var self__ = this;
var G__6104__$1 = this;
return (new cljs.core.RecordIter((0),G__6104__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6106,other6107){
var self__ = this;
var this6106__$1 = this;
return (((!((other6107 == null)))) && ((((this6106__$1.constructor === other6107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.classes,other6107.classes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.globals,other6107.globals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.current_env,other6107.current_env)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.output,other6107.output)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.imports,other6107.imports)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.specialized_classes,other6107.specialized_classes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6106__$1.__extmap,other6107.__extmap)))))))))))))))));
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

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6105){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6114 = k6105;
var G__6114__$1 = (((G__6114 instanceof cljs.core.Keyword))?G__6114.fqn:null);
switch (G__6114__$1) {
case "classes":
case "globals":
case "current-env":
case "output":
case "imports":
case "specialized-classes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6105);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6104){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6115 = cljs.core.keyword_identical_QMARK_;
var expr__6116 = k__5457__auto__;
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6116)))){
return (new nex.interpreter.Context(G__6104,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6116)))){
return (new nex.interpreter.Context(self__.classes,G__6104,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6116)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,G__6104,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__6116)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,G__6104,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6116)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,G__6104,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6115.cljs$core$IFn$_invoke$arity$2 ? pred__6115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6116) : pred__6115.call(null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6116)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,G__6104,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6104),null));
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

(nex.interpreter.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6104){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,G__6104,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Context = (function nex$interpreter$map__GT_Context(G__6108){
var extmap__5490__auto__ = (function (){var G__6118 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6108,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], 0));
if(cljs.core.record_QMARK_(G__6108)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6118);
} else {
return G__6118;
}
})();
return (new nex.interpreter.Context(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(G__6108),new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(G__6108),new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(G__6108),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__6108),new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(G__6108),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(G__6108),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
 * Create the built-in deferred Hashable class.
 */
nex.interpreter.build_hashable_base_class = (function nex$interpreter$build_hashable_base_class(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),"Hashable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"public","public",1566243851)], null),new cljs.core.Keyword(null,"members","members",159001018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"name","name",1843675177),"hash",new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer",new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ensure","ensure",-439171367),null], null)], null)], null)], null),new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create a built-in scalar class definition that implements Comparable and Hashable.
 */
nex.interpreter.build_builtin_scalar_class = (function nex$interpreter$build_builtin_scalar_class(name){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"note","note",1426297904),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),null], null);
});
/**
 * Create a new runtime context.
 */
nex.interpreter.make_context = (function nex$interpreter$make_context(){
var globals = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$0();
var ctx = nex.interpreter.__GT_Context(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),globals,globals,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__6119_6985 = ctx;
var G__6120_6986 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6119_6985,G__6120_6986) : nex.interpreter.register_class.call(null,G__6119_6985,G__6120_6986));

var G__6121_6987 = ctx;
var G__6122_6988 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6121_6987,G__6122_6988) : nex.interpreter.register_class.call(null,G__6121_6987,G__6122_6988));

var G__6123_6989 = ctx;
var G__6124_6990 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6123_6989,G__6124_6990) : nex.interpreter.register_class.call(null,G__6123_6989,G__6124_6990));

var G__6125_6991 = ctx;
var G__6126_6992 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6125_6991,G__6126_6992) : nex.interpreter.register_class.call(null,G__6125_6991,G__6126_6992));

var seq__6127_6993 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6128_6994 = null;
var count__6129_6995 = (0);
var i__6130_6996 = (0);
while(true){
if((i__6130_6996 < count__6129_6995)){
var scalar_6997 = chunk__6128_6994.cljs$core$IIndexed$_nth$arity$2(null,i__6130_6996);
var G__6135_6998 = ctx;
var G__6136_6999 = nex.interpreter.build_builtin_scalar_class(scalar_6997);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6135_6998,G__6136_6999) : nex.interpreter.register_class.call(null,G__6135_6998,G__6136_6999));


var G__7000 = seq__6127_6993;
var G__7001 = chunk__6128_6994;
var G__7002 = count__6129_6995;
var G__7003 = (i__6130_6996 + (1));
seq__6127_6993 = G__7000;
chunk__6128_6994 = G__7001;
count__6129_6995 = G__7002;
i__6130_6996 = G__7003;
continue;
} else {
var temp__5823__auto___7004 = cljs.core.seq(seq__6127_6993);
if(temp__5823__auto___7004){
var seq__6127_7005__$1 = temp__5823__auto___7004;
if(cljs.core.chunked_seq_QMARK_(seq__6127_7005__$1)){
var c__5673__auto___7006 = cljs.core.chunk_first(seq__6127_7005__$1);
var G__7007 = cljs.core.chunk_rest(seq__6127_7005__$1);
var G__7008 = c__5673__auto___7006;
var G__7009 = cljs.core.count(c__5673__auto___7006);
var G__7010 = (0);
seq__6127_6993 = G__7007;
chunk__6128_6994 = G__7008;
count__6129_6995 = G__7009;
i__6130_6996 = G__7010;
continue;
} else {
var scalar_7011 = cljs.core.first(seq__6127_7005__$1);
var G__6137_7012 = ctx;
var G__6138_7013 = nex.interpreter.build_builtin_scalar_class(scalar_7011);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6137_7012,G__6138_7013) : nex.interpreter.register_class.call(null,G__6137_7012,G__6138_7013));


var G__7014 = cljs.core.next(seq__6127_7005__$1);
var G__7015 = null;
var G__7016 = (0);
var G__7017 = (0);
seq__6127_6993 = G__7014;
chunk__6128_6994 = G__7015;
count__6129_6995 = G__7016;
i__6130_6996 = G__7017;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type_expr,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6139_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6139_SHARP_,p1__6139_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (args){
if(cljs.core.truth_(args)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6140_SHARP_){
return (nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2(p1__6140_SHARP_,type_map) : nex.interpreter.substitute_type.call(null,p1__6140_SHARP_,type_map));
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
var G__6144 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member);
var G__6144__$1 = (((G__6144 instanceof cljs.core.Keyword))?G__6144.fqn:null);
switch (G__6144__$1) {
case "field":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"field-type","field-type",2075623493),(function (p1__6141_SHARP_){
return nex.interpreter.substitute_type(p1__6141_SHARP_,type_map);
}));

break;
case "method":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6142_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6142_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6143_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6143_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(generic_class_def,new cljs.core.Keyword(null,"name","name",1843675177),spec_name),new cljs.core.Keyword(null,"template-name","template-name",271241761),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def)),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null),new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__6145_SHARP_){
return nex.interpreter.substitute_in_body(p1__6145_SHARP_,type_map);
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

(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6147,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6151 = k6147;
var G__6151__$1 = (((G__6151 instanceof cljs.core.Keyword))?G__6151.fqn:null);
switch (G__6151__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6147,else__5451__auto__);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6152){
var vec__6153 = p__6152;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6153,(1),null);
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

(nex.interpreter.NexObject.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6146){
var self__ = this;
var G__6146__$1 = this;
return (new cljs.core.RecordIter((0),G__6146__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.NexObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6148,other6149){
var self__ = this;
var this6148__$1 = this;
return (((!((other6149 == null)))) && ((((this6148__$1.constructor === other6149.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6148__$1.class_name,other6149.class_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6148__$1.fields,other6149.fields)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6148__$1.closure_env,other6149.closure_env)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6148__$1.__extmap,other6149.__extmap)))))))))));
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

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6147){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6156 = k6147;
var G__6156__$1 = (((G__6156 instanceof cljs.core.Keyword))?G__6156.fqn:null);
switch (G__6156__$1) {
case "class-name":
case "fields":
case "closure-env":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6147);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6146){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6157 = cljs.core.keyword_identical_QMARK_;
var expr__6158 = k__5457__auto__;
if(cljs.core.truth_((pred__6157.cljs$core$IFn$_invoke$arity$2 ? pred__6157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6158) : pred__6157.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6158)))){
return (new nex.interpreter.NexObject(G__6146,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6157.cljs$core$IFn$_invoke$arity$2 ? pred__6157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6158) : pred__6157.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6158)))){
return (new nex.interpreter.NexObject(self__.class_name,G__6146,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6157.cljs$core$IFn$_invoke$arity$2 ? pred__6157.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6158) : pred__6157.call(null,new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6158)))){
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,G__6146,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6146),null));
}
}
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env,null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6146){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,G__6146,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_NexObject = (function nex$interpreter$map__GT_NexObject(G__6150){
var extmap__5490__auto__ = (function (){var G__6160 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6150,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], 0));
if(cljs.core.record_QMARK_(G__6150)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6160);
} else {
return G__6160;
}
})();
return (new nex.interpreter.NexObject(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(G__6150),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__6150),new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(G__6150),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new object instance.
 */
nex.interpreter.make_object = (function nex$interpreter$make_object(var_args){
var G__6162 = arguments.length;
switch (G__6162) {
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

var temp__5823__auto___7029 = cljs.core.deref(cancel_reject);
if(cljs.core.truth_(temp__5823__auto___7029)){
var reject_7030 = temp__5823__auto___7029;
var G__6163_7031 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Task cancelled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null));
(reject_7030.cljs$core$IFn$_invoke$arity$1 ? reject_7030.cljs$core$IFn$_invoke$arity$1(G__6163_7031) : reject_7030.call(null,G__6163_7031));
} else {
}

return true;
}
})], null);
});
nex.interpreter.make_channel = (function nex$interpreter$make_channel(var_args){
var G__6165 = arguments.length;
switch (G__6165) {
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
var G__6167 = arguments.length;
switch (G__6167) {
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
var fexpr__6169 = new cljs.core.Keyword(null,"cancel!","cancel!",-676538519).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__6169.cljs$core$IFn$_invoke$arity$0 ? fexpr__6169.cljs$core$IFn$_invoke$arity$0() : fexpr__6169.call(null));
});
nex.interpreter.task_cancelled_QMARK_ = (function nex$interpreter$task_cancelled_QMARK_(task){
return cljs.core.deref(new cljs.core.Keyword(null,"cancelled?","cancelled?",-293098402).cljs$core$IFn$_invoke$arity$1(task));
});
nex.interpreter.channel_send = (function nex$interpreter$channel_send(var_args){
var G__6175 = arguments.length;
switch (G__6175) {
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
var map__6176 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6176__$1 = cljs.core.__destructure_map(map__6176);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6176__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6176__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6176__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6176__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
var G__6177 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6177) : reject.call(null,G__6177));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6172_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6172_SHARP_));
}));

var fexpr__6178_7035 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6178_7035.cljs$core$IFn$_invoke$arity$1 ? fexpr__6178_7035.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6178_7035.call(null,value));

return finish(((timed_QMARK_)?true:null));
} else {
if((cljs.core.count(buffer) < capacity)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return finish(((timed_QMARK_)?true:null));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__send")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (_){
var temp__5823__auto___7036 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7036)){
var timer_7037 = temp__5823__auto___7036;
clearTimeout(timer_7037);
} else {
}

return finish(((timed_QMARK_)?true:null));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___7038 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7038)){
var timer_7039 = temp__5823__auto___7038;
clearTimeout(timer_7039);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (senders){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6173_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6173_SHARP_),id);
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
var map__6180 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6180__$1 = cljs.core.__destructure_map(map__6180);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6180__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6180__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6180__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6180__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6179_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6179_SHARP_));
}));

var fexpr__6181_7041 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6181_7041.cljs$core$IFn$_invoke$arity$1 ? fexpr__6181_7041.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6181_7041.call(null,value));

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
var G__6187 = arguments.length;
switch (G__6187) {
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
var map__6188 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6188__$1 = cljs.core.__destructure_map(map__6188);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6188__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6188__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6188__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6188__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6182_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6182_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6189_7043 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6189_7044__$1 = cljs.core.__destructure_map(map__6189_7043);
var sender_value_7045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6189_7044__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6189_7044__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6183_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6183_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7045);
}));

(sender_resolve_7046.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7046.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7046.call(null,null));
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(buffered_value) : resolve.call(null,buffered_value));
} else {
if(cljs.core.seq(senders)){
var map__6190 = cljs.core.first(senders);
var map__6190__$1 = cljs.core.__destructure_map(map__6190);
var sender = map__6190__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6190__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6184_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6184_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
} else {
if(cljs.core.truth_(closed_QMARK_)){
var G__6191 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6191) : reject.call(null,G__6191));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__recv")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (value){
var temp__5823__auto___7049 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7049)){
var timer_7050 = temp__5823__auto___7049;
clearTimeout(timer_7050);
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___7051 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___7051)){
var timer_7052 = temp__5823__auto___7051;
clearTimeout(timer_7052);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (receivers){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6185_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6185_SHARP_),id);
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
var map__6195 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6195__$1 = cljs.core.__destructure_map(map__6195);
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6195__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6192_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6192_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6196_7053 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6196_7054__$1 = cljs.core.__destructure_map(map__6196_7053);
var sender_value_7055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6196_7054__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_7056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6196_7054__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6193_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6193_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_7055);
}));

(sender_resolve_7056.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_7056.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_7056.call(null,null));
} else {
}

return buffered_value;
} else {
if(cljs.core.seq(senders)){
var map__6197 = cljs.core.first(senders);
var map__6197__$1 = cljs.core.__destructure_map(map__6197);
var sender = map__6197__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6197__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6194_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6194_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return value;
} else {
return null;

}
}
});
nex.interpreter.channel_close = (function nex$interpreter$channel_close(ch){
var map__6198 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6198__$1 = cljs.core.__destructure_map(map__6198);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6198__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6198__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6198__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6198__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.assoc,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"receivers","receivers",815358409),((cljs.core.seq(buffer))?receivers:cljs.core.PersistentVector.EMPTY)], 0));

var seq__6199_7057 = cljs.core.seq(senders);
var chunk__6200_7058 = null;
var count__6201_7059 = (0);
var i__6202_7060 = (0);
while(true){
if((i__6202_7060 < count__6201_7059)){
var map__6207_7061 = chunk__6200_7058.cljs$core$IIndexed$_nth$arity$2(null,i__6202_7060);
var map__6207_7062__$1 = cljs.core.__destructure_map(map__6207_7061);
var reject_7063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6207_7062__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6208_7064 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7063.cljs$core$IFn$_invoke$arity$1 ? reject_7063.cljs$core$IFn$_invoke$arity$1(G__6208_7064) : reject_7063.call(null,G__6208_7064));


var G__7065 = seq__6199_7057;
var G__7066 = chunk__6200_7058;
var G__7067 = count__6201_7059;
var G__7068 = (i__6202_7060 + (1));
seq__6199_7057 = G__7065;
chunk__6200_7058 = G__7066;
count__6201_7059 = G__7067;
i__6202_7060 = G__7068;
continue;
} else {
var temp__5823__auto___7069 = cljs.core.seq(seq__6199_7057);
if(temp__5823__auto___7069){
var seq__6199_7070__$1 = temp__5823__auto___7069;
if(cljs.core.chunked_seq_QMARK_(seq__6199_7070__$1)){
var c__5673__auto___7071 = cljs.core.chunk_first(seq__6199_7070__$1);
var G__7072 = cljs.core.chunk_rest(seq__6199_7070__$1);
var G__7073 = c__5673__auto___7071;
var G__7074 = cljs.core.count(c__5673__auto___7071);
var G__7075 = (0);
seq__6199_7057 = G__7072;
chunk__6200_7058 = G__7073;
count__6201_7059 = G__7074;
i__6202_7060 = G__7075;
continue;
} else {
var map__6209_7076 = cljs.core.first(seq__6199_7070__$1);
var map__6209_7077__$1 = cljs.core.__destructure_map(map__6209_7076);
var reject_7078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6209_7077__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6210_7079 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7078.cljs$core$IFn$_invoke$arity$1 ? reject_7078.cljs$core$IFn$_invoke$arity$1(G__6210_7079) : reject_7078.call(null,G__6210_7079));


var G__7080 = cljs.core.next(seq__6199_7070__$1);
var G__7081 = null;
var G__7082 = (0);
var G__7083 = (0);
seq__6199_7057 = G__7080;
chunk__6200_7058 = G__7081;
count__6201_7059 = G__7082;
i__6202_7060 = G__7083;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(buffer)){
} else {
var seq__6211_7084 = cljs.core.seq(receivers);
var chunk__6212_7085 = null;
var count__6213_7086 = (0);
var i__6214_7087 = (0);
while(true){
if((i__6214_7087 < count__6213_7086)){
var map__6219_7088 = chunk__6212_7085.cljs$core$IIndexed$_nth$arity$2(null,i__6214_7087);
var map__6219_7089__$1 = cljs.core.__destructure_map(map__6219_7088);
var reject_7090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6219_7089__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6220_7091 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7090.cljs$core$IFn$_invoke$arity$1 ? reject_7090.cljs$core$IFn$_invoke$arity$1(G__6220_7091) : reject_7090.call(null,G__6220_7091));


var G__7092 = seq__6211_7084;
var G__7093 = chunk__6212_7085;
var G__7094 = count__6213_7086;
var G__7095 = (i__6214_7087 + (1));
seq__6211_7084 = G__7092;
chunk__6212_7085 = G__7093;
count__6213_7086 = G__7094;
i__6214_7087 = G__7095;
continue;
} else {
var temp__5823__auto___7096 = cljs.core.seq(seq__6211_7084);
if(temp__5823__auto___7096){
var seq__6211_7097__$1 = temp__5823__auto___7096;
if(cljs.core.chunked_seq_QMARK_(seq__6211_7097__$1)){
var c__5673__auto___7098 = cljs.core.chunk_first(seq__6211_7097__$1);
var G__7099 = cljs.core.chunk_rest(seq__6211_7097__$1);
var G__7100 = c__5673__auto___7098;
var G__7101 = cljs.core.count(c__5673__auto___7098);
var G__7102 = (0);
seq__6211_7084 = G__7099;
chunk__6212_7085 = G__7100;
count__6213_7086 = G__7101;
i__6214_7087 = G__7102;
continue;
} else {
var map__6221_7103 = cljs.core.first(seq__6211_7097__$1);
var map__6221_7104__$1 = cljs.core.__destructure_map(map__6221_7103);
var reject_7105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6221_7104__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6222_7106 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_7105.cljs$core$IFn$_invoke$arity$1 ? reject_7105.cljs$core$IFn$_invoke$arity$1(G__6222_7106) : reject_7105.call(null,G__6222_7106));


var G__7107 = cljs.core.next(seq__6211_7097__$1);
var G__7108 = null;
var G__7109 = (0);
var G__7110 = (0);
seq__6211_7084 = G__7107;
chunk__6212_7085 = G__7108;
count__6213_7086 = G__7109;
i__6214_7087 = G__7110;
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
nex.interpreter.prepare_select_clause = (function nex$interpreter$prepare_select_clause(ctx,p__6224){
var map__6225 = p__6224;
var map__6225__$1 = cljs.core.__destructure_map(map__6225);
var clause = map__6225__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6226 = nex.interpreter.select_op_call(expr);
var map__6226__$1 = cljs.core.__destructure_map(map__6226);
var call = map__6226__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6226__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6226__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6226__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),nex.interpreter.eval_select_target(ctx,target),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6223_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6223_SHARP_) : nex.interpreter.eval_node.call(null,ctx,p1__6223_SHARP_));
}),args)], null);
});
nex.interpreter.prepare_select_clause_async = (function nex$interpreter$prepare_select_clause_async(ctx,p__6228){
var map__6229 = p__6228;
var map__6229__$1 = cljs.core.__destructure_map(map__6229);
var clause = map__6229__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6229__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6229__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6229__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6230 = nex.interpreter.select_op_call(expr);
var map__6230__$1 = cljs.core.__destructure_map(map__6230);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6230__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6230__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6230__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.eval_select_target_async(ctx,target).then((function (target_val){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6227_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6227_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6227_SHARP_));
}),args)).then((function (arg_vals){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),target_val,new cljs.core.Keyword(null,"args","args",1315556576),arg_vals], null);
}));
}));
});
nex.interpreter.execute_select_body = (function nex$interpreter$execute_select_body(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6232 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6232,alias,value);

return G__6232;
})()):ctx);
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6231_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6231_SHARP_) : nex.interpreter.eval_node.call(null,body_ctx,p1__6231_SHARP_));
}),body));
});
nex.interpreter.execute_select_body_async = (function nex$interpreter$execute_select_body_async(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6233 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6233,alias,value);

return G__6233;
})()):ctx);
return (nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2(body_ctx,body) : nex.interpreter.eval_body_async.call(null,body_ctx,body));
});
nex.interpreter.attempt_select_clause = (function nex$interpreter$attempt_select_clause(p__6234){
var map__6235 = p__6234;
var map__6235__$1 = cljs.core.__destructure_map(map__6235);
var prepared = map__6235__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6235__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6235__$1,new cljs.core.Keyword(null,"target","target",253001721));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6235__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"Task","Task",-409968362))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await")))){
if(cljs.core.truth_(nex.interpreter.task_done_QMARK_(target))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(target)], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6236 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_receive",null,"receive",null], null), null);
return (fexpr__6236.cljs$core$IFn$_invoke$arity$1 ? fexpr__6236.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6236.call(null,method));
})())){
var value = nex.interpreter.channel_try_receive(target);
if((!((value == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6237 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_send",null,"send",null], null), null);
return (fexpr__6237.cljs$core$IFn$_invoke$arity$1 ? fexpr__6237.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6237.call(null,method));
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
var map__6238 = prepared;
var map__6238__$1 = cljs.core.__destructure_map(map__6238);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6238__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6238__$1,new cljs.core.Keyword(null,"target","target",253001721));
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
var fexpr__6239 = new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
return (fexpr__6239.cljs$core$IFn$_invoke$arity$2 ? fexpr__6239.cljs$core$IFn$_invoke$arity$2(ctx,node) : fexpr__6239.call(null,ctx,node));
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
var seq__6240 = cljs.core.seq(assertions);
var chunk__6241 = null;
var count__6242 = (0);
var i__6243 = (0);
while(true){
if((i__6243 < count__6242)){
var map__6246 = chunk__6241.cljs$core$IIndexed$_nth$arity$2(null,i__6243);
var map__6246__$1 = cljs.core.__destructure_map(map__6246);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6246__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6246__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7121 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7121)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7122 = seq__6240;
var G__7123 = chunk__6241;
var G__7124 = count__6242;
var G__7125 = (i__6243 + (1));
seq__6240 = G__7122;
chunk__6241 = G__7123;
count__6242 = G__7124;
i__6243 = G__7125;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6240);
if(temp__5823__auto__){
var seq__6240__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6240__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6240__$1);
var G__7126 = cljs.core.chunk_rest(seq__6240__$1);
var G__7127 = c__5673__auto__;
var G__7128 = cljs.core.count(c__5673__auto__);
var G__7129 = (0);
seq__6240 = G__7126;
chunk__6241 = G__7127;
count__6242 = G__7128;
i__6243 = G__7129;
continue;
} else {
var map__6247 = cljs.core.first(seq__6240__$1);
var map__6247__$1 = cljs.core.__destructure_map(map__6247);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6247__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6247__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7130 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7130)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7131 = cljs.core.next(seq__6240__$1);
var G__7132 = null;
var G__7133 = (0);
var G__7134 = (0);
seq__6240 = G__7131;
chunk__6241 = G__7132;
count__6242 = G__7133;
i__6243 = G__7134;
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
var vec__6260 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6263,p__6264){
var vec__6265 = p__6263;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6265,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6265,(1),null);
var map__6268 = p__6264;
var map__6268__$1 = cljs.core.__destructure_map(map__6268);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6268__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6269 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6269,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6269,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260,(1),null);
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
var vec__6272 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272,(1),null);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6275_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6275_SHARP_))){
return p1__6275_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6275_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6278){
var map__6279 = p__6278;
var map__6279__$1 = cljs.core.__destructure_map(map__6279);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6279__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(nex.interpreter.public_member_QMARK_,(nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_all_constants.call(null,ctx,class_def__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var local_constants = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6277_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6277_SHARP_,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993),class_def);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6276_SHARP_){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6276_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6276_SHARP_);
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
return cljs.core.some((function (p__6280){
var map__6281 = p__6280;
var map__6281__$1 = cljs.core.__destructure_map(map__6281);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6281__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6283_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6283_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6282_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6282_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
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
var G__6284 = ctx;
var G__6285 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6286 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6284,G__6285,G__6286) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6284,G__6285,G__6286));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6287 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6288 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6287,G__6288) : nex.interpreter.combine_preconditions.call(null,G__6287,G__6288));
})();
var effective_ensure = (function (){var G__6289 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6290 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6289,G__6290) : nex.interpreter.combine_assertions.call(null,G__6289,G__6290));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6291 = ctx;
var G__6292 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6293 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6291,G__6292,G__6293) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6291,G__6292,G__6293));
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
var or__5142__auto__ = cljs.core.some((function (p1__6294_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6294_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6295_SHARP_){
var G__6296 = ctx;
var G__6297 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6295_SHARP_);
var G__6298 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6296,G__6297,G__6298) : nex.interpreter.is_parent_QMARK_.call(null,G__6296,G__6297,G__6298));
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
var G__6299 = (nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.get_type_name.call(null,value));
if((G__6299 == null)){
return null;
} else {
return cljs.core.name(G__6299);
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
var fexpr__6300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Real",null,"Decimal",null,"Integer64",null], null), null);
return (fexpr__6300.cljs$core$IFn$_invoke$arity$1 ? fexpr__6300.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6300.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer64");
if(and__5140__auto__){
var fexpr__6301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Real",null,"Decimal",null], null), null);
return (fexpr__6301.cljs$core$IFn$_invoke$arity$1 ? fexpr__6301.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6301.call(null,target_type));
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
var and__5140__auto__ = (function (){var fexpr__6302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrayCursor",null,"StringCursor",null,"MapCursor",null,"SetCursor",null], null), null);
return (fexpr__6302.cljs$core$IFn$_invoke$arity$1 ? fexpr__6302.cljs$core$IFn$_invoke$arity$1(runtime_type) : fexpr__6302.call(null,runtime_type));
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
var G__6304 = arguments.length;
switch (G__6304) {
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
var G__6305 = eval_ctx;
var G__6306 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(constant);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6305,G__6306) : nex.interpreter.eval_node.call(null,G__6305,G__6306));
}));

(nex.interpreter.eval_class_constant.cljs$lang$maxFixedArity = 4);

/**
 * Bind all constants visible from class-def into env.
 */
nex.interpreter.bind_class_constants_BANG_ = (function nex$interpreter$bind_class_constants_BANG_(ctx,env,class_def){
var seq__6307 = cljs.core.seq(nex.interpreter.get_all_constants(ctx,class_def));
var chunk__6308 = null;
var count__6309 = (0);
var i__6310 = (0);
while(true){
if((i__6310 < count__6309)){
var constant = chunk__6308.cljs$core$IIndexed$_nth$arity$2(null,i__6310);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__7147 = seq__6307;
var G__7148 = chunk__6308;
var G__7149 = count__6309;
var G__7150 = (i__6310 + (1));
seq__6307 = G__7147;
chunk__6308 = G__7148;
count__6309 = G__7149;
i__6310 = G__7150;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6307);
if(temp__5823__auto__){
var seq__6307__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6307__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6307__$1);
var G__7151 = cljs.core.chunk_rest(seq__6307__$1);
var G__7152 = c__5673__auto__;
var G__7153 = cljs.core.count(c__5673__auto__);
var G__7154 = (0);
seq__6307 = G__7151;
chunk__6308 = G__7152;
count__6309 = G__7153;
i__6310 = G__7154;
continue;
} else {
var constant = cljs.core.first(seq__6307__$1);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__7155 = cljs.core.next(seq__6307__$1);
var G__7156 = null;
var G__7157 = (0);
var G__7158 = (0);
seq__6307 = G__7155;
chunk__6308 = G__7156;
count__6309 = G__7157;
i__6310 = G__7158;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6311){
var map__6312 = p__6311;
var map__6312__$1 = cljs.core.__destructure_map(map__6312);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6312__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
var G__7163__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7163 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7164__i = 0, G__7164__a = new Array(arguments.length -  1);
while (G__7164__i < G__7164__a.length) {G__7164__a[G__7164__i] = arguments[G__7164__i + 1]; ++G__7164__i;}
  args = new cljs.core.IndexedSeq(G__7164__a,0,null);
} 
return G__7163__delegate.call(this,ctx,args);};
G__7163.cljs$lang$maxFixedArity = 1;
G__7163.cljs$lang$applyTo = (function (arglist__7165){
var ctx = cljs.core.first(arglist__7165);
var args = cljs.core.rest(arglist__7165);
return G__7163__delegate(ctx,args);
});
G__7163.cljs$core$IFn$_invoke$arity$variadic = G__7163__delegate;
return G__7163;
})()
,"println",(function() { 
var G__7166__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7166 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7167__i = 0, G__7167__a = new Array(arguments.length -  1);
while (G__7167__i < G__7167__a.length) {G__7167__a[G__7167__i] = arguments[G__7167__i + 1]; ++G__7167__i;}
  args = new cljs.core.IndexedSeq(G__7167__a,0,null);
} 
return G__7166__delegate.call(this,ctx,args);};
G__7166.cljs$lang$maxFixedArity = 1;
G__7166.cljs$lang$applyTo = (function (arglist__7168){
var ctx = cljs.core.first(arglist__7168);
var args = cljs.core.rest(arglist__7168);
return G__7166__delegate(ctx,args);
});
G__7166.cljs$core$IFn$_invoke$arity$variadic = G__7166__delegate;
return G__7166;
})()
,"type_of",(function() { 
var G__7169__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__7169 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7170__i = 0, G__7170__a = new Array(arguments.length -  1);
while (G__7170__i < G__7170__a.length) {G__7170__a[G__7170__i] = arguments[G__7170__i + 1]; ++G__7170__i;}
  args = new cljs.core.IndexedSeq(G__7170__a,0,null);
} 
return G__7169__delegate.call(this,ctx,args);};
G__7169.cljs$lang$maxFixedArity = 1;
G__7169.cljs$lang$applyTo = (function (arglist__7171){
var ctx = cljs.core.first(arglist__7171);
var args = cljs.core.rest(arglist__7171);
return G__7169__delegate(ctx,args);
});
G__7169.cljs$core$IFn$_invoke$arity$variadic = G__7169__delegate;
return G__7169;
})()
,"type_is",(function() { 
var G__7172__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6313 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6313,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6313,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__7172 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7173__i = 0, G__7173__a = new Array(arguments.length -  1);
while (G__7173__i < G__7173__a.length) {G__7173__a[G__7173__i] = arguments[G__7173__i + 1]; ++G__7173__i;}
  args = new cljs.core.IndexedSeq(G__7173__a,0,null);
} 
return G__7172__delegate.call(this,ctx,args);};
G__7172.cljs$lang$maxFixedArity = 1;
G__7172.cljs$lang$applyTo = (function (arglist__7174){
var ctx = cljs.core.first(arglist__7174);
var args = cljs.core.rest(arglist__7174);
return G__7172__delegate(ctx,args);
});
G__7172.cljs$core$IFn$_invoke$arity$variadic = G__7172__delegate;
return G__7172;
})()
,"await_all",(function() { 
var G__7175__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6316_7176 = cljs.core.seq(tasks);
var chunk__6317_7177 = null;
var count__6318_7178 = (0);
var i__6319_7179 = (0);
while(true){
if((i__6319_7179 < count__6318_7178)){
var task_7180 = chunk__6317_7177.cljs$core$IIndexed$_nth$arity$2(null,i__6319_7179);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7180),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7180)], null));
}


var G__7181 = seq__6316_7176;
var G__7182 = chunk__6317_7177;
var G__7183 = count__6318_7178;
var G__7184 = (i__6319_7179 + (1));
seq__6316_7176 = G__7181;
chunk__6317_7177 = G__7182;
count__6318_7178 = G__7183;
i__6319_7179 = G__7184;
continue;
} else {
var temp__5823__auto___7185 = cljs.core.seq(seq__6316_7176);
if(temp__5823__auto___7185){
var seq__6316_7186__$1 = temp__5823__auto___7185;
if(cljs.core.chunked_seq_QMARK_(seq__6316_7186__$1)){
var c__5673__auto___7187 = cljs.core.chunk_first(seq__6316_7186__$1);
var G__7188 = cljs.core.chunk_rest(seq__6316_7186__$1);
var G__7189 = c__5673__auto___7187;
var G__7190 = cljs.core.count(c__5673__auto___7187);
var G__7191 = (0);
seq__6316_7176 = G__7188;
chunk__6317_7177 = G__7189;
count__6318_7178 = G__7190;
i__6319_7179 = G__7191;
continue;
} else {
var task_7192 = cljs.core.first(seq__6316_7186__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7192),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7192)], null));
}


var G__7193 = cljs.core.next(seq__6316_7186__$1);
var G__7194 = null;
var G__7195 = (0);
var G__7196 = (0);
seq__6316_7176 = G__7193;
chunk__6317_7177 = G__7194;
count__6318_7178 = G__7195;
i__6319_7179 = G__7196;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_all_tasks(tasks);
};
var G__7175 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7197__i = 0, G__7197__a = new Array(arguments.length -  1);
while (G__7197__i < G__7197__a.length) {G__7197__a[G__7197__i] = arguments[G__7197__i + 1]; ++G__7197__i;}
  args = new cljs.core.IndexedSeq(G__7197__a,0,null);
} 
return G__7175__delegate.call(this,_ctx,args);};
G__7175.cljs$lang$maxFixedArity = 1;
G__7175.cljs$lang$applyTo = (function (arglist__7198){
var _ctx = cljs.core.first(arglist__7198);
var args = cljs.core.rest(arglist__7198);
return G__7175__delegate(_ctx,args);
});
G__7175.cljs$core$IFn$_invoke$arity$variadic = G__7175__delegate;
return G__7175;
})()
,"await_any",(function() { 
var G__7199__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6320_7202 = cljs.core.seq(tasks);
var chunk__6321_7203 = null;
var count__6322_7204 = (0);
var i__6323_7205 = (0);
while(true){
if((i__6323_7205 < count__6322_7204)){
var task_7206 = chunk__6321_7203.cljs$core$IIndexed$_nth$arity$2(null,i__6323_7205);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7206),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7206)], null));
}


var G__7207 = seq__6320_7202;
var G__7208 = chunk__6321_7203;
var G__7209 = count__6322_7204;
var G__7210 = (i__6323_7205 + (1));
seq__6320_7202 = G__7207;
chunk__6321_7203 = G__7208;
count__6322_7204 = G__7209;
i__6323_7205 = G__7210;
continue;
} else {
var temp__5823__auto___7211 = cljs.core.seq(seq__6320_7202);
if(temp__5823__auto___7211){
var seq__6320_7212__$1 = temp__5823__auto___7211;
if(cljs.core.chunked_seq_QMARK_(seq__6320_7212__$1)){
var c__5673__auto___7213 = cljs.core.chunk_first(seq__6320_7212__$1);
var G__7214 = cljs.core.chunk_rest(seq__6320_7212__$1);
var G__7215 = c__5673__auto___7213;
var G__7216 = cljs.core.count(c__5673__auto___7213);
var G__7217 = (0);
seq__6320_7202 = G__7214;
chunk__6321_7203 = G__7215;
count__6322_7204 = G__7216;
i__6323_7205 = G__7217;
continue;
} else {
var task_7218 = cljs.core.first(seq__6320_7212__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_7218),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_7218)], null));
}


var G__7219 = cljs.core.next(seq__6320_7212__$1);
var G__7220 = null;
var G__7221 = (0);
var G__7222 = (0);
seq__6320_7202 = G__7219;
chunk__6321_7203 = G__7220;
count__6322_7204 = G__7221;
i__6323_7205 = G__7222;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_any_task(tasks);
};
var G__7199 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7223__i = 0, G__7223__a = new Array(arguments.length -  1);
while (G__7223__i < G__7223__a.length) {G__7223__a[G__7223__i] = arguments[G__7223__i + 1]; ++G__7223__i;}
  args = new cljs.core.IndexedSeq(G__7223__a,0,null);
} 
return G__7199__delegate.call(this,_ctx,args);};
G__7199.cljs$lang$maxFixedArity = 1;
G__7199.cljs$lang$applyTo = (function (arglist__7224){
var _ctx = cljs.core.first(arglist__7224);
var args = cljs.core.rest(arglist__7224);
return G__7199__delegate(_ctx,args);
});
G__7199.cljs$core$IFn$_invoke$arity$variadic = G__7199__delegate;
return G__7199;
})()
,"sleep",(function() { 
var G__7225__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sleep expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"sleep",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}


return null;
};
var G__7225 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7226__i = 0, G__7226__a = new Array(arguments.length -  1);
while (G__7226__i < G__7226__a.length) {G__7226__a[G__7226__i] = arguments[G__7226__i + 1]; ++G__7226__i;}
  args = new cljs.core.IndexedSeq(G__7226__a,0,null);
} 
return G__7225__delegate.call(this,_ctx,args);};
G__7225.cljs$lang$maxFixedArity = 1;
G__7225.cljs$lang$applyTo = (function (arglist__7227){
var _ctx = cljs.core.first(arglist__7227);
var args = cljs.core.rest(arglist__7227);
return G__7225__delegate(_ctx,args);
});
G__7225.cljs$core$IFn$_invoke$arity$variadic = G__7225__delegate;
return G__7225;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6324 = op;
switch (G__6324) {
case "+":
if(((typeof left === 'string') || (typeof right === 'string'))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right));
} else {
return (left + right);
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
return (left / right);
}

break;
case "^":
return Math.pow(left,right);

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
 * Apply a unary operator to a value.
 */
nex.interpreter.apply_unary_op = (function nex$interpreter$apply_unary_op(op,value){
var G__6325 = op;
switch (G__6325) {
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
var G__6326 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6326) {
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
var G__6327 = field_type;
switch (G__6327) {
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
}catch (e6329){var _ = e6329;
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"Array","Array",-2064027806),new cljs.core.Keyword(null,"Integer64","Integer64",-1582960571),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"Map","Map",-197728088),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"Set","Set",-1553598550),new cljs.core.Keyword(null,"Channel","Channel",1087781355),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"Integer","Integer",-641373298),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604),new cljs.core.Keyword(null,"Task","Task",-409968362),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"Console","Console",-423236809),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"Char","Char",2025763229),new cljs.core.Keyword(null,"Real","Real",-1266238786),new cljs.core.Keyword(null,"String","String",584378334)],[new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7232__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c),cljs.core.vec(cljs.core.es6_iterator_seq(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c).values())));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7232 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7233__i = 0, G__7233__a = new Array(arguments.length -  1);
while (G__7233__i < G__7233__a.length) {G__7233__a[G__7233__i] = arguments[G__7233__i + 1]; ++G__7233__i;}
  _ = new cljs.core.IndexedSeq(G__7233__a,0,null);
} 
return G__7232__delegate.call(this,c,_);};
G__7232.cljs$lang$maxFixedArity = 1;
G__7232.cljs$lang$applyTo = (function (arglist__7234){
var c = cljs.core.first(arglist__7234);
var _ = cljs.core.rest(arglist__7234);
return G__7232__delegate(c,_);
});
G__7232.cljs$core$IFn$_invoke$arity$variadic = G__7232__delegate;
return G__7232;
})()
,"item",(function() { 
var G__7235__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vals,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7235 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7236__i = 0, G__7236__a = new Array(arguments.length -  1);
while (G__7236__i < G__7236__a.length) {G__7236__a[G__7236__i] = arguments[G__7236__i + 1]; ++G__7236__i;}
  _ = new cljs.core.IndexedSeq(G__7236__a,0,null);
} 
return G__7235__delegate.call(this,c,_);};
G__7235.cljs$lang$maxFixedArity = 1;
G__7235.cljs$lang$applyTo = (function (arglist__7237){
var c = cljs.core.first(arglist__7237);
var _ = cljs.core.rest(arglist__7237);
return G__7235__delegate(c,_);
});
G__7235.cljs$core$IFn$_invoke$arity$variadic = G__7235__delegate;
return G__7235;
})()
,"next",(function() { 
var G__7238__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7238 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7240__i = 0, G__7240__a = new Array(arguments.length -  1);
while (G__7240__i < G__7240__a.length) {G__7240__a[G__7240__i] = arguments[G__7240__i + 1]; ++G__7240__i;}
  _ = new cljs.core.IndexedSeq(G__7240__a,0,null);
} 
return G__7238__delegate.call(this,c,_);};
G__7238.cljs$lang$maxFixedArity = 1;
G__7238.cljs$lang$applyTo = (function (arglist__7241){
var c = cljs.core.first(arglist__7241);
var _ = cljs.core.rest(arglist__7241);
return G__7238__delegate(c,_);
});
G__7238.cljs$core$IFn$_invoke$arity$variadic = G__7238__delegate;
return G__7238;
})()
,"at_end",(function() { 
var G__7242__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7242 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7243__i = 0, G__7243__a = new Array(arguments.length -  1);
while (G__7243__i < G__7243__a.length) {G__7243__a[G__7243__i] = arguments[G__7243__i + 1]; ++G__7243__i;}
  _ = new cljs.core.IndexedSeq(G__7243__a,0,null);
} 
return G__7242__delegate.call(this,c,_);};
G__7242.cljs$lang$maxFixedArity = 1;
G__7242.cljs$lang$applyTo = (function (arglist__7244){
var c = cljs.core.first(arglist__7244);
var _ = cljs.core.rest(arglist__7244);
return G__7242__delegate(c,_);
});
G__7242.cljs$core$IFn$_invoke$arity$variadic = G__7242__delegate;
return G__7242;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["put","is_empty","reverse","contains","add_at","sort","cursor","remove","length","slice","add","index_of","get"],[(function() { 
var G__7245__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__7245 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7246__i = 0, G__7246__a = new Array(arguments.length -  3);
while (G__7246__i < G__7246__a.length) {G__7246__a[G__7246__i] = arguments[G__7246__i + 3]; ++G__7246__i;}
  _ = new cljs.core.IndexedSeq(G__7246__a,0,null);
} 
return G__7245__delegate.call(this,arr,index,value,_);};
G__7245.cljs$lang$maxFixedArity = 3;
G__7245.cljs$lang$applyTo = (function (arglist__7247){
var arr = cljs.core.first(arglist__7247);
arglist__7247 = cljs.core.next(arglist__7247);
var index = cljs.core.first(arglist__7247);
arglist__7247 = cljs.core.next(arglist__7247);
var value = cljs.core.first(arglist__7247);
var _ = cljs.core.rest(arglist__7247);
return G__7245__delegate(arr,index,value,_);
});
G__7245.cljs$core$IFn$_invoke$arity$variadic = G__7245__delegate;
return G__7245;
})()
,(function() { 
var G__7248__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__7248 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7249__i = 0, G__7249__a = new Array(arguments.length -  1);
while (G__7249__i < G__7249__a.length) {G__7249__a[G__7249__i] = arguments[G__7249__i + 1]; ++G__7249__i;}
  _ = new cljs.core.IndexedSeq(G__7249__a,0,null);
} 
return G__7248__delegate.call(this,arr,_);};
G__7248.cljs$lang$maxFixedArity = 1;
G__7248.cljs$lang$applyTo = (function (arglist__7250){
var arr = cljs.core.first(arglist__7250);
var _ = cljs.core.rest(arglist__7250);
return G__7248__delegate(arr,_);
});
G__7248.cljs$core$IFn$_invoke$arity$variadic = G__7248__delegate;
return G__7248;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__7251__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__7251 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7252__i = 0, G__7252__a = new Array(arguments.length -  2);
while (G__7252__i < G__7252__a.length) {G__7252__a[G__7252__i] = arguments[G__7252__i + 2]; ++G__7252__i;}
  _ = new cljs.core.IndexedSeq(G__7252__a,0,null);
} 
return G__7251__delegate.call(this,arr,elem,_);};
G__7251.cljs$lang$maxFixedArity = 2;
G__7251.cljs$lang$applyTo = (function (arglist__7253){
var arr = cljs.core.first(arglist__7253);
arglist__7253 = cljs.core.next(arglist__7253);
var elem = cljs.core.first(arglist__7253);
var _ = cljs.core.rest(arglist__7253);
return G__7251__delegate(arr,elem,_);
});
G__7251.cljs$core$IFn$_invoke$arity$variadic = G__7251__delegate;
return G__7251;
})()
,(function() { 
var G__7254__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__7254 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7255__i = 0, G__7255__a = new Array(arguments.length -  3);
while (G__7255__i < G__7255__a.length) {G__7255__a[G__7255__i] = arguments[G__7255__i + 3]; ++G__7255__i;}
  _ = new cljs.core.IndexedSeq(G__7255__a,0,null);
} 
return G__7254__delegate.call(this,arr,index,value,_);};
G__7254.cljs$lang$maxFixedArity = 3;
G__7254.cljs$lang$applyTo = (function (arglist__7256){
var arr = cljs.core.first(arglist__7256);
arglist__7256 = cljs.core.next(arglist__7256);
var index = cljs.core.first(arglist__7256);
arglist__7256 = cljs.core.next(arglist__7256);
var value = cljs.core.first(arglist__7256);
var _ = cljs.core.rest(arglist__7256);
return G__7254__delegate(arr,index,value,_);
});
G__7254.cljs$core$IFn$_invoke$arity$variadic = G__7254__delegate;
return G__7254;
})()
,(function() { 
var G__7257__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__7257 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7258__i = 0, G__7258__a = new Array(arguments.length -  1);
while (G__7258__i < G__7258__a.length) {G__7258__a[G__7258__i] = arguments[G__7258__i + 1]; ++G__7258__i;}
  _ = new cljs.core.IndexedSeq(G__7258__a,0,null);
} 
return G__7257__delegate.call(this,arr,_);};
G__7257.cljs$lang$maxFixedArity = 1;
G__7257.cljs$lang$applyTo = (function (arglist__7259){
var arr = cljs.core.first(arglist__7259);
var _ = cljs.core.rest(arglist__7259);
return G__7257__delegate(arr,_);
});
G__7257.cljs$core$IFn$_invoke$arity$variadic = G__7257__delegate;
return G__7257;
})()
,(function() { 
var G__7260__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7260 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7261__i = 0, G__7261__a = new Array(arguments.length -  1);
while (G__7261__i < G__7261__a.length) {G__7261__a[G__7261__i] = arguments[G__7261__i + 1]; ++G__7261__i;}
  _ = new cljs.core.IndexedSeq(G__7261__a,0,null);
} 
return G__7260__delegate.call(this,arr,_);};
G__7260.cljs$lang$maxFixedArity = 1;
G__7260.cljs$lang$applyTo = (function (arglist__7262){
var arr = cljs.core.first(arglist__7262);
var _ = cljs.core.rest(arglist__7262);
return G__7260__delegate(arr,_);
});
G__7260.cljs$core$IFn$_invoke$arity$variadic = G__7260__delegate;
return G__7260;
})()
,(function() { 
var G__7263__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__7263 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7264__i = 0, G__7264__a = new Array(arguments.length -  2);
while (G__7264__i < G__7264__a.length) {G__7264__a[G__7264__i] = arguments[G__7264__i + 2]; ++G__7264__i;}
  _ = new cljs.core.IndexedSeq(G__7264__a,0,null);
} 
return G__7263__delegate.call(this,arr,idx,_);};
G__7263.cljs$lang$maxFixedArity = 2;
G__7263.cljs$lang$applyTo = (function (arglist__7265){
var arr = cljs.core.first(arglist__7265);
arglist__7265 = cljs.core.next(arglist__7265);
var idx = cljs.core.first(arglist__7265);
var _ = cljs.core.rest(arglist__7265);
return G__7263__delegate(arr,idx,_);
});
G__7263.cljs$core$IFn$_invoke$arity$variadic = G__7263__delegate;
return G__7263;
})()
,(function() { 
var G__7266__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__7266 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7268__i = 0, G__7268__a = new Array(arguments.length -  1);
while (G__7268__i < G__7268__a.length) {G__7268__a[G__7268__i] = arguments[G__7268__i + 1]; ++G__7268__i;}
  _ = new cljs.core.IndexedSeq(G__7268__a,0,null);
} 
return G__7266__delegate.call(this,arr,_);};
G__7266.cljs$lang$maxFixedArity = 1;
G__7266.cljs$lang$applyTo = (function (arglist__7269){
var arr = cljs.core.first(arglist__7269);
var _ = cljs.core.rest(arglist__7269);
return G__7266__delegate(arr,_);
});
G__7266.cljs$core$IFn$_invoke$arity$variadic = G__7266__delegate;
return G__7266;
})()
,(function() { 
var G__7270__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__7270 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7271__i = 0, G__7271__a = new Array(arguments.length -  3);
while (G__7271__i < G__7271__a.length) {G__7271__a[G__7271__i] = arguments[G__7271__i + 3]; ++G__7271__i;}
  _ = new cljs.core.IndexedSeq(G__7271__a,0,null);
} 
return G__7270__delegate.call(this,arr,start,end,_);};
G__7270.cljs$lang$maxFixedArity = 3;
G__7270.cljs$lang$applyTo = (function (arglist__7272){
var arr = cljs.core.first(arglist__7272);
arglist__7272 = cljs.core.next(arglist__7272);
var start = cljs.core.first(arglist__7272);
arglist__7272 = cljs.core.next(arglist__7272);
var end = cljs.core.first(arglist__7272);
var _ = cljs.core.rest(arglist__7272);
return G__7270__delegate(arr,start,end,_);
});
G__7270.cljs$core$IFn$_invoke$arity$variadic = G__7270__delegate;
return G__7270;
})()
,(function() { 
var G__7273__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__7273 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7274__i = 0, G__7274__a = new Array(arguments.length -  2);
while (G__7274__i < G__7274__a.length) {G__7274__a[G__7274__i] = arguments[G__7274__i + 2]; ++G__7274__i;}
  _ = new cljs.core.IndexedSeq(G__7274__a,0,null);
} 
return G__7273__delegate.call(this,arr,value,_);};
G__7273.cljs$lang$maxFixedArity = 2;
G__7273.cljs$lang$applyTo = (function (arglist__7275){
var arr = cljs.core.first(arglist__7275);
arglist__7275 = cljs.core.next(arglist__7275);
var value = cljs.core.first(arglist__7275);
var _ = cljs.core.rest(arglist__7275);
return G__7273__delegate(arr,value,_);
});
G__7273.cljs$core$IFn$_invoke$arity$variadic = G__7273__delegate;
return G__7273;
})()
,(function() { 
var G__7276__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__7276 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7277__i = 0, G__7277__a = new Array(arguments.length -  2);
while (G__7277__i < G__7277__a.length) {G__7277__a[G__7277__i] = arguments[G__7277__i + 2]; ++G__7277__i;}
  _ = new cljs.core.IndexedSeq(G__7277__a,0,null);
} 
return G__7276__delegate.call(this,arr,elem,_);};
G__7276.cljs$lang$maxFixedArity = 2;
G__7276.cljs$lang$applyTo = (function (arglist__7278){
var arr = cljs.core.first(arglist__7278);
arglist__7278 = cljs.core.next(arglist__7278);
var elem = cljs.core.first(arglist__7278);
var _ = cljs.core.rest(arglist__7278);
return G__7276__delegate(arr,elem,_);
});
G__7276.cljs$core$IFn$_invoke$arity$variadic = G__7276__delegate;
return G__7276;
})()
,(function() { 
var G__7279__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__7279 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7280__i = 0, G__7280__a = new Array(arguments.length -  2);
while (G__7280__i < G__7280__a.length) {G__7280__a[G__7280__i] = arguments[G__7280__i + 2]; ++G__7280__i;}
  _ = new cljs.core.IndexedSeq(G__7280__a,0,null);
} 
return G__7279__delegate.call(this,arr,index,_);};
G__7279.cljs$lang$maxFixedArity = 2;
G__7279.cljs$lang$applyTo = (function (arglist__7281){
var arr = cljs.core.first(arglist__7281);
arglist__7281 = cljs.core.next(arglist__7281);
var index = cljs.core.first(arglist__7281);
var _ = cljs.core.rest(arglist__7281);
return G__7279__delegate(arr,index,_);
});
G__7279.cljs$core$IFn$_invoke$arity$variadic = G__7279__delegate;
return G__7279;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__7282__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7282 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7283__i = 0, G__7283__a = new Array(arguments.length -  2);
while (G__7283__i < G__7283__a.length) {G__7283__a[G__7283__i] = arguments[G__7283__i + 2]; ++G__7283__i;}
  _ = new cljs.core.IndexedSeq(G__7283__a,0,null);
} 
return G__7282__delegate.call(this,n,other,_);};
G__7282.cljs$lang$maxFixedArity = 2;
G__7282.cljs$lang$applyTo = (function (arglist__7284){
var n = cljs.core.first(arglist__7284);
arglist__7284 = cljs.core.next(arglist__7284);
var other = cljs.core.first(arglist__7284);
var _ = cljs.core.rest(arglist__7284);
return G__7282__delegate(n,other,_);
});
G__7282.cljs$core$IFn$_invoke$arity$variadic = G__7282__delegate;
return G__7282;
})()
,(function() { 
var G__7285__delegate = function (n,other,_){
return (n <= other);
};
var G__7285 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7286__i = 0, G__7286__a = new Array(arguments.length -  2);
while (G__7286__i < G__7286__a.length) {G__7286__a[G__7286__i] = arguments[G__7286__i + 2]; ++G__7286__i;}
  _ = new cljs.core.IndexedSeq(G__7286__a,0,null);
} 
return G__7285__delegate.call(this,n,other,_);};
G__7285.cljs$lang$maxFixedArity = 2;
G__7285.cljs$lang$applyTo = (function (arglist__7287){
var n = cljs.core.first(arglist__7287);
arglist__7287 = cljs.core.next(arglist__7287);
var other = cljs.core.first(arglist__7287);
var _ = cljs.core.rest(arglist__7287);
return G__7285__delegate(n,other,_);
});
G__7285.cljs$core$IFn$_invoke$arity$variadic = G__7285__delegate;
return G__7285;
})()
,(function() { 
var G__7288__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7288 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7289__i = 0, G__7289__a = new Array(arguments.length -  2);
while (G__7289__i < G__7289__a.length) {G__7289__a[G__7289__i] = arguments[G__7289__i + 2]; ++G__7289__i;}
  _ = new cljs.core.IndexedSeq(G__7289__a,0,null);
} 
return G__7288__delegate.call(this,n,other,_);};
G__7288.cljs$lang$maxFixedArity = 2;
G__7288.cljs$lang$applyTo = (function (arglist__7290){
var n = cljs.core.first(arglist__7290);
arglist__7290 = cljs.core.next(arglist__7290);
var other = cljs.core.first(arglist__7290);
var _ = cljs.core.rest(arglist__7290);
return G__7288__delegate(n,other,_);
});
G__7288.cljs$core$IFn$_invoke$arity$variadic = G__7288__delegate;
return G__7288;
})()
,(function() { 
var G__7291__delegate = function (n,other,_){
return (n < other);
};
var G__7291 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7292__i = 0, G__7292__a = new Array(arguments.length -  2);
while (G__7292__i < G__7292__a.length) {G__7292__a[G__7292__i] = arguments[G__7292__i + 2]; ++G__7292__i;}
  _ = new cljs.core.IndexedSeq(G__7292__a,0,null);
} 
return G__7291__delegate.call(this,n,other,_);};
G__7291.cljs$lang$maxFixedArity = 2;
G__7291.cljs$lang$applyTo = (function (arglist__7293){
var n = cljs.core.first(arglist__7293);
arglist__7293 = cljs.core.next(arglist__7293);
var other = cljs.core.first(arglist__7293);
var _ = cljs.core.rest(arglist__7293);
return G__7291__delegate(n,other,_);
});
G__7291.cljs$core$IFn$_invoke$arity$variadic = G__7291__delegate;
return G__7291;
})()
,(function() { 
var G__7294__delegate = function (n,other,_){
return (n + other);
};
var G__7294 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7295__i = 0, G__7295__a = new Array(arguments.length -  2);
while (G__7295__i < G__7295__a.length) {G__7295__a[G__7295__i] = arguments[G__7295__i + 2]; ++G__7295__i;}
  _ = new cljs.core.IndexedSeq(G__7295__a,0,null);
} 
return G__7294__delegate.call(this,n,other,_);};
G__7294.cljs$lang$maxFixedArity = 2;
G__7294.cljs$lang$applyTo = (function (arglist__7296){
var n = cljs.core.first(arglist__7296);
arglist__7296 = cljs.core.next(arglist__7296);
var other = cljs.core.first(arglist__7296);
var _ = cljs.core.rest(arglist__7296);
return G__7294__delegate(n,other,_);
});
G__7294.cljs$core$IFn$_invoke$arity$variadic = G__7294__delegate;
return G__7294;
})()
,(function() { 
var G__7297__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7297 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7298__i = 0, G__7298__a = new Array(arguments.length -  1);
while (G__7298__i < G__7298__a.length) {G__7298__a[G__7298__i] = arguments[G__7298__i + 1]; ++G__7298__i;}
  _ = new cljs.core.IndexedSeq(G__7298__a,0,null);
} 
return G__7297__delegate.call(this,n,_);};
G__7297.cljs$lang$maxFixedArity = 1;
G__7297.cljs$lang$applyTo = (function (arglist__7299){
var n = cljs.core.first(arglist__7299);
var _ = cljs.core.rest(arglist__7299);
return G__7297__delegate(n,_);
});
G__7297.cljs$core$IFn$_invoke$arity$variadic = G__7297__delegate;
return G__7297;
})()
,(function() { 
var G__7300__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7300 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7301__i = 0, G__7301__a = new Array(arguments.length -  1);
while (G__7301__i < G__7301__a.length) {G__7301__a[G__7301__i] = arguments[G__7301__i + 1]; ++G__7301__i;}
  _ = new cljs.core.IndexedSeq(G__7301__a,0,null);
} 
return G__7300__delegate.call(this,n,_);};
G__7300.cljs$lang$maxFixedArity = 1;
G__7300.cljs$lang$applyTo = (function (arglist__7302){
var n = cljs.core.first(arglist__7302);
var _ = cljs.core.rest(arglist__7302);
return G__7300__delegate(n,_);
});
G__7300.cljs$core$IFn$_invoke$arity$variadic = G__7300__delegate;
return G__7300;
})()
,(function() { 
var G__7303__delegate = function (n,other,_){
return (n > other);
};
var G__7303 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7304__i = 0, G__7304__a = new Array(arguments.length -  2);
while (G__7304__i < G__7304__a.length) {G__7304__a[G__7304__i] = arguments[G__7304__i + 2]; ++G__7304__i;}
  _ = new cljs.core.IndexedSeq(G__7304__a,0,null);
} 
return G__7303__delegate.call(this,n,other,_);};
G__7303.cljs$lang$maxFixedArity = 2;
G__7303.cljs$lang$applyTo = (function (arglist__7305){
var n = cljs.core.first(arglist__7305);
arglist__7305 = cljs.core.next(arglist__7305);
var other = cljs.core.first(arglist__7305);
var _ = cljs.core.rest(arglist__7305);
return G__7303__delegate(n,other,_);
});
G__7303.cljs$core$IFn$_invoke$arity$variadic = G__7303__delegate;
return G__7303;
})()
,(function() { 
var G__7306__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7306 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7307__i = 0, G__7307__a = new Array(arguments.length -  2);
while (G__7307__i < G__7307__a.length) {G__7307__a[G__7307__i] = arguments[G__7307__i + 2]; ++G__7307__i;}
  _ = new cljs.core.IndexedSeq(G__7307__a,0,null);
} 
return G__7306__delegate.call(this,n,other,_);};
G__7306.cljs$lang$maxFixedArity = 2;
G__7306.cljs$lang$applyTo = (function (arglist__7308){
var n = cljs.core.first(arglist__7308);
arglist__7308 = cljs.core.next(arglist__7308);
var other = cljs.core.first(arglist__7308);
var _ = cljs.core.rest(arglist__7308);
return G__7306__delegate(n,other,_);
});
G__7306.cljs$core$IFn$_invoke$arity$variadic = G__7306__delegate;
return G__7306;
})()
,(function() { 
var G__7309__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7309 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7310__i = 0, G__7310__a = new Array(arguments.length -  2);
while (G__7310__i < G__7310__a.length) {G__7310__a[G__7310__i] = arguments[G__7310__i + 2]; ++G__7310__i;}
  _ = new cljs.core.IndexedSeq(G__7310__a,0,null);
} 
return G__7309__delegate.call(this,n,other,_);};
G__7309.cljs$lang$maxFixedArity = 2;
G__7309.cljs$lang$applyTo = (function (arglist__7311){
var n = cljs.core.first(arglist__7311);
arglist__7311 = cljs.core.next(arglist__7311);
var other = cljs.core.first(arglist__7311);
var _ = cljs.core.rest(arglist__7311);
return G__7309__delegate(n,other,_);
});
G__7309.cljs$core$IFn$_invoke$arity$variadic = G__7309__delegate;
return G__7309;
})()
,(function() { 
var G__7312__delegate = function (n,other,_){
return (n - other);
};
var G__7312 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7313__i = 0, G__7313__a = new Array(arguments.length -  2);
while (G__7313__i < G__7313__a.length) {G__7313__a[G__7313__i] = arguments[G__7313__i + 2]; ++G__7313__i;}
  _ = new cljs.core.IndexedSeq(G__7313__a,0,null);
} 
return G__7312__delegate.call(this,n,other,_);};
G__7312.cljs$lang$maxFixedArity = 2;
G__7312.cljs$lang$applyTo = (function (arglist__7314){
var n = cljs.core.first(arglist__7314);
arglist__7314 = cljs.core.next(arglist__7314);
var other = cljs.core.first(arglist__7314);
var _ = cljs.core.rest(arglist__7314);
return G__7312__delegate(n,other,_);
});
G__7312.cljs$core$IFn$_invoke$arity$variadic = G__7312__delegate;
return G__7312;
})()
,(function() { 
var G__7315__delegate = function (n,other,_){
return (n * other);
};
var G__7315 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7316__i = 0, G__7316__a = new Array(arguments.length -  2);
while (G__7316__i < G__7316__a.length) {G__7316__a[G__7316__i] = arguments[G__7316__i + 2]; ++G__7316__i;}
  _ = new cljs.core.IndexedSeq(G__7316__a,0,null);
} 
return G__7315__delegate.call(this,n,other,_);};
G__7315.cljs$lang$maxFixedArity = 2;
G__7315.cljs$lang$applyTo = (function (arglist__7317){
var n = cljs.core.first(arglist__7317);
arglist__7317 = cljs.core.next(arglist__7317);
var other = cljs.core.first(arglist__7317);
var _ = cljs.core.rest(arglist__7317);
return G__7315__delegate(n,other,_);
});
G__7315.cljs$core$IFn$_invoke$arity$variadic = G__7315__delegate;
return G__7315;
})()
,(function() { 
var G__7318__delegate = function (n,other,_){
return (n / other);
};
var G__7318 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7319__i = 0, G__7319__a = new Array(arguments.length -  2);
while (G__7319__i < G__7319__a.length) {G__7319__a[G__7319__i] = arguments[G__7319__i + 2]; ++G__7319__i;}
  _ = new cljs.core.IndexedSeq(G__7319__a,0,null);
} 
return G__7318__delegate.call(this,n,other,_);};
G__7318.cljs$lang$maxFixedArity = 2;
G__7318.cljs$lang$applyTo = (function (arglist__7320){
var n = cljs.core.first(arglist__7320);
arglist__7320 = cljs.core.next(arglist__7320);
var other = cljs.core.first(arglist__7320);
var _ = cljs.core.rest(arglist__7320);
return G__7318__delegate(n,other,_);
});
G__7318.cljs$core$IFn$_invoke$arity$variadic = G__7318__delegate;
return G__7318;
})()
,(function() { 
var G__7321__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7321 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7322__i = 0, G__7322__a = new Array(arguments.length -  1);
while (G__7322__i < G__7322__a.length) {G__7322__a[G__7322__i] = arguments[G__7322__i + 1]; ++G__7322__i;}
  _ = new cljs.core.IndexedSeq(G__7322__a,0,null);
} 
return G__7321__delegate.call(this,n,_);};
G__7321.cljs$lang$maxFixedArity = 1;
G__7321.cljs$lang$applyTo = (function (arglist__7323){
var n = cljs.core.first(arglist__7323);
var _ = cljs.core.rest(arglist__7323);
return G__7321__delegate(n,_);
});
G__7321.cljs$core$IFn$_invoke$arity$variadic = G__7321__delegate;
return G__7321;
})()
,(function() { 
var G__7324__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7324 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7325__i = 0, G__7325__a = new Array(arguments.length -  2);
while (G__7325__i < G__7325__a.length) {G__7325__a[G__7325__i] = arguments[G__7325__i + 2]; ++G__7325__i;}
  _ = new cljs.core.IndexedSeq(G__7325__a,0,null);
} 
return G__7324__delegate.call(this,n,other,_);};
G__7324.cljs$lang$maxFixedArity = 2;
G__7324.cljs$lang$applyTo = (function (arglist__7326){
var n = cljs.core.first(arglist__7326);
arglist__7326 = cljs.core.next(arglist__7326);
var other = cljs.core.first(arglist__7326);
var _ = cljs.core.rest(arglist__7326);
return G__7324__delegate(n,other,_);
});
G__7324.cljs$core$IFn$_invoke$arity$variadic = G__7324__delegate;
return G__7324;
})()
,(function() { 
var G__7327__delegate = function (n,other,_){
return (n >= other);
};
var G__7327 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7328__i = 0, G__7328__a = new Array(arguments.length -  2);
while (G__7328__i < G__7328__a.length) {G__7328__a[G__7328__i] = arguments[G__7328__i + 2]; ++G__7328__i;}
  _ = new cljs.core.IndexedSeq(G__7328__a,0,null);
} 
return G__7327__delegate.call(this,n,other,_);};
G__7327.cljs$lang$maxFixedArity = 2;
G__7327.cljs$lang$applyTo = (function (arglist__7329){
var n = cljs.core.first(arglist__7329);
arglist__7329 = cljs.core.next(arglist__7329);
var other = cljs.core.first(arglist__7329);
var _ = cljs.core.rest(arglist__7329);
return G__7327__delegate(n,other,_);
});
G__7327.cljs$core$IFn$_invoke$arity$variadic = G__7327__delegate;
return G__7327;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__7330__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__7330 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7331__i = 0, G__7331__a = new Array(arguments.length -  1);
while (G__7331__i < G__7331__a.length) {G__7331__a[G__7331__i] = arguments[G__7331__i + 1]; ++G__7331__i;}
  _ = new cljs.core.IndexedSeq(G__7331__a,0,null);
} 
return G__7330__delegate.call(this,img,_);};
G__7330.cljs$lang$maxFixedArity = 1;
G__7330.cljs$lang$applyTo = (function (arglist__7332){
var img = cljs.core.first(arglist__7332);
var _ = cljs.core.rest(arglist__7332);
return G__7330__delegate(img,_);
});
G__7330.cljs$core$IFn$_invoke$arity$variadic = G__7330__delegate;
return G__7330;
})()
,"height",(function() { 
var G__7333__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__7333 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7334__i = 0, G__7334__a = new Array(arguments.length -  1);
while (G__7334__i < G__7334__a.length) {G__7334__a[G__7334__i] = arguments[G__7334__i + 1]; ++G__7334__i;}
  _ = new cljs.core.IndexedSeq(G__7334__a,0,null);
} 
return G__7333__delegate.call(this,img,_);};
G__7333.cljs$lang$maxFixedArity = 1;
G__7333.cljs$lang$applyTo = (function (arglist__7335){
var img = cljs.core.first(arglist__7335);
var _ = cljs.core.rest(arglist__7335);
return G__7333__delegate(img,_);
});
G__7333.cljs$core$IFn$_invoke$arity$variadic = G__7333__delegate;
return G__7333;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7336__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7336 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7337__i = 0, G__7337__a = new Array(arguments.length -  1);
while (G__7337__i < G__7337__a.length) {G__7337__a[G__7337__i] = arguments[G__7337__i + 1]; ++G__7337__i;}
  _ = new cljs.core.IndexedSeq(G__7337__a,0,null);
} 
return G__7336__delegate.call(this,c,_);};
G__7336.cljs$lang$maxFixedArity = 1;
G__7336.cljs$lang$applyTo = (function (arglist__7338){
var c = cljs.core.first(arglist__7338);
var _ = cljs.core.rest(arglist__7338);
return G__7336__delegate(c,_);
});
G__7336.cljs$core$IFn$_invoke$arity$variadic = G__7336__delegate;
return G__7336;
})()
,"item",(function() { 
var G__7339__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7339 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7340__i = 0, G__7340__a = new Array(arguments.length -  1);
while (G__7340__i < G__7340__a.length) {G__7340__a[G__7340__i] = arguments[G__7340__i + 1]; ++G__7340__i;}
  _ = new cljs.core.IndexedSeq(G__7340__a,0,null);
} 
return G__7339__delegate.call(this,c,_);};
G__7339.cljs$lang$maxFixedArity = 1;
G__7339.cljs$lang$applyTo = (function (arglist__7341){
var c = cljs.core.first(arglist__7341);
var _ = cljs.core.rest(arglist__7341);
return G__7339__delegate(c,_);
});
G__7339.cljs$core$IFn$_invoke$arity$variadic = G__7339__delegate;
return G__7339;
})()
,"next",(function() { 
var G__7342__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7342 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7343__i = 0, G__7343__a = new Array(arguments.length -  1);
while (G__7343__i < G__7343__a.length) {G__7343__a[G__7343__i] = arguments[G__7343__i + 1]; ++G__7343__i;}
  _ = new cljs.core.IndexedSeq(G__7343__a,0,null);
} 
return G__7342__delegate.call(this,c,_);};
G__7342.cljs$lang$maxFixedArity = 1;
G__7342.cljs$lang$applyTo = (function (arglist__7344){
var c = cljs.core.first(arglist__7344);
var _ = cljs.core.rest(arglist__7344);
return G__7342__delegate(c,_);
});
G__7342.cljs$core$IFn$_invoke$arity$variadic = G__7342__delegate;
return G__7342;
})()
,"at_end",(function() { 
var G__7345__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7345 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7346__i = 0, G__7346__a = new Array(arguments.length -  1);
while (G__7346__i < G__7346__a.length) {G__7346__a[G__7346__i] = arguments[G__7346__i + 1]; ++G__7346__i;}
  _ = new cljs.core.IndexedSeq(G__7346__a,0,null);
} 
return G__7345__delegate.call(this,c,_);};
G__7345.cljs$lang$maxFixedArity = 1;
G__7345.cljs$lang$applyTo = (function (arglist__7347){
var c = cljs.core.first(arglist__7347);
var _ = cljs.core.rest(arglist__7347);
return G__7345__delegate(c,_);
});
G__7345.cljs$core$IFn$_invoke$arity$variadic = G__7345__delegate;
return G__7345;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","try_get","cursor","remove","size","get","contains_key"],[(function() { 
var G__7348__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__7348 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7349__i = 0, G__7349__a = new Array(arguments.length -  1);
while (G__7349__i < G__7349__a.length) {G__7349__a[G__7349__i] = arguments[G__7349__i + 1]; ++G__7349__i;}
  _ = new cljs.core.IndexedSeq(G__7349__a,0,null);
} 
return G__7348__delegate.call(this,m,_);};
G__7348.cljs$lang$maxFixedArity = 1;
G__7348.cljs$lang$applyTo = (function (arglist__7350){
var m = cljs.core.first(arglist__7350);
var _ = cljs.core.rest(arglist__7350);
return G__7348__delegate(m,_);
});
G__7348.cljs$core$IFn$_invoke$arity$variadic = G__7348__delegate;
return G__7348;
})()
,(function() { 
var G__7351__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__7351 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7352__i = 0, G__7352__a = new Array(arguments.length -  1);
while (G__7352__i < G__7352__a.length) {G__7352__a[G__7352__i] = arguments[G__7352__i + 1]; ++G__7352__i;}
  _ = new cljs.core.IndexedSeq(G__7352__a,0,null);
} 
return G__7351__delegate.call(this,m,_);};
G__7351.cljs$lang$maxFixedArity = 1;
G__7351.cljs$lang$applyTo = (function (arglist__7353){
var m = cljs.core.first(arglist__7353);
var _ = cljs.core.rest(arglist__7353);
return G__7351__delegate(m,_);
});
G__7351.cljs$core$IFn$_invoke$arity$variadic = G__7351__delegate;
return G__7351;
})()
,(function() { 
var G__7354__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__7354 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7355__i = 0, G__7355__a = new Array(arguments.length -  3);
while (G__7355__i < G__7355__a.length) {G__7355__a[G__7355__i] = arguments[G__7355__i + 3]; ++G__7355__i;}
  _ = new cljs.core.IndexedSeq(G__7355__a,0,null);
} 
return G__7354__delegate.call(this,m,key,val,_);};
G__7354.cljs$lang$maxFixedArity = 3;
G__7354.cljs$lang$applyTo = (function (arglist__7356){
var m = cljs.core.first(arglist__7356);
arglist__7356 = cljs.core.next(arglist__7356);
var key = cljs.core.first(arglist__7356);
arglist__7356 = cljs.core.next(arglist__7356);
var val = cljs.core.first(arglist__7356);
var _ = cljs.core.rest(arglist__7356);
return G__7354__delegate(m,key,val,_);
});
G__7354.cljs$core$IFn$_invoke$arity$variadic = G__7354__delegate;
return G__7354;
})()
,(function() { 
var G__7357__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__7357 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7358__i = 0, G__7358__a = new Array(arguments.length -  1);
while (G__7358__i < G__7358__a.length) {G__7358__a[G__7358__i] = arguments[G__7358__i + 1]; ++G__7358__i;}
  _ = new cljs.core.IndexedSeq(G__7358__a,0,null);
} 
return G__7357__delegate.call(this,m,_);};
G__7357.cljs$lang$maxFixedArity = 1;
G__7357.cljs$lang$applyTo = (function (arglist__7359){
var m = cljs.core.first(arglist__7359);
var _ = cljs.core.rest(arglist__7359);
return G__7357__delegate(m,_);
});
G__7357.cljs$core$IFn$_invoke$arity$variadic = G__7357__delegate;
return G__7357;
})()
,(function() { 
var G__7360__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__7360 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7361__i = 0, G__7361__a = new Array(arguments.length -  3);
while (G__7361__i < G__7361__a.length) {G__7361__a[G__7361__i] = arguments[G__7361__i + 3]; ++G__7361__i;}
  _ = new cljs.core.IndexedSeq(G__7361__a,0,null);
} 
return G__7360__delegate.call(this,m,key,default$,_);};
G__7360.cljs$lang$maxFixedArity = 3;
G__7360.cljs$lang$applyTo = (function (arglist__7362){
var m = cljs.core.first(arglist__7362);
arglist__7362 = cljs.core.next(arglist__7362);
var key = cljs.core.first(arglist__7362);
arglist__7362 = cljs.core.next(arglist__7362);
var default$ = cljs.core.first(arglist__7362);
var _ = cljs.core.rest(arglist__7362);
return G__7360__delegate(m,key,default$,_);
});
G__7360.cljs$core$IFn$_invoke$arity$variadic = G__7360__delegate;
return G__7360;
})()
,(function() { 
var G__7363__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7363 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7364__i = 0, G__7364__a = new Array(arguments.length -  1);
while (G__7364__i < G__7364__a.length) {G__7364__a[G__7364__i] = arguments[G__7364__i + 1]; ++G__7364__i;}
  _ = new cljs.core.IndexedSeq(G__7364__a,0,null);
} 
return G__7363__delegate.call(this,m,_);};
G__7363.cljs$lang$maxFixedArity = 1;
G__7363.cljs$lang$applyTo = (function (arglist__7365){
var m = cljs.core.first(arglist__7365);
var _ = cljs.core.rest(arglist__7365);
return G__7363__delegate(m,_);
});
G__7363.cljs$core$IFn$_invoke$arity$variadic = G__7363__delegate;
return G__7363;
})()
,(function() { 
var G__7366__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__7366 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7367__i = 0, G__7367__a = new Array(arguments.length -  2);
while (G__7367__i < G__7367__a.length) {G__7367__a[G__7367__i] = arguments[G__7367__i + 2]; ++G__7367__i;}
  _ = new cljs.core.IndexedSeq(G__7367__a,0,null);
} 
return G__7366__delegate.call(this,m,key,_);};
G__7366.cljs$lang$maxFixedArity = 2;
G__7366.cljs$lang$applyTo = (function (arglist__7368){
var m = cljs.core.first(arglist__7368);
arglist__7368 = cljs.core.next(arglist__7368);
var key = cljs.core.first(arglist__7368);
var _ = cljs.core.rest(arglist__7368);
return G__7366__delegate(m,key,_);
});
G__7366.cljs$core$IFn$_invoke$arity$variadic = G__7366__delegate;
return G__7366;
})()
,(function() { 
var G__7369__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__7369 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7370__i = 0, G__7370__a = new Array(arguments.length -  1);
while (G__7370__i < G__7370__a.length) {G__7370__a[G__7370__i] = arguments[G__7370__i + 1]; ++G__7370__i;}
  _ = new cljs.core.IndexedSeq(G__7370__a,0,null);
} 
return G__7369__delegate.call(this,m,_);};
G__7369.cljs$lang$maxFixedArity = 1;
G__7369.cljs$lang$applyTo = (function (arglist__7371){
var m = cljs.core.first(arglist__7371);
var _ = cljs.core.rest(arglist__7371);
return G__7369__delegate(m,_);
});
G__7369.cljs$core$IFn$_invoke$arity$variadic = G__7369__delegate;
return G__7369;
})()
,(function() { 
var G__7372__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__7372 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7373__i = 0, G__7373__a = new Array(arguments.length -  2);
while (G__7373__i < G__7373__a.length) {G__7373__a[G__7373__i] = arguments[G__7373__i + 2]; ++G__7373__i;}
  _ = new cljs.core.IndexedSeq(G__7373__a,0,null);
} 
return G__7372__delegate.call(this,m,key,_);};
G__7372.cljs$lang$maxFixedArity = 2;
G__7372.cljs$lang$applyTo = (function (arglist__7374){
var m = cljs.core.first(arglist__7374);
arglist__7374 = cljs.core.next(arglist__7374);
var key = cljs.core.first(arglist__7374);
var _ = cljs.core.rest(arglist__7374);
return G__7372__delegate(m,key,_);
});
G__7372.cljs$core$IFn$_invoke$arity$variadic = G__7372__delegate;
return G__7372;
})()
,(function() { 
var G__7375__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__7375 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7376__i = 0, G__7376__a = new Array(arguments.length -  2);
while (G__7376__i < G__7376__a.length) {G__7376__a[G__7376__i] = arguments[G__7376__i + 2]; ++G__7376__i;}
  _ = new cljs.core.IndexedSeq(G__7376__a,0,null);
} 
return G__7375__delegate.call(this,m,key,_);};
G__7375.cljs$lang$maxFixedArity = 2;
G__7375.cljs$lang$applyTo = (function (arglist__7377){
var m = cljs.core.first(arglist__7377);
arglist__7377 = cljs.core.next(arglist__7377);
var key = cljs.core.first(arglist__7377);
var _ = cljs.core.rest(arglist__7377);
return G__7375__delegate(m,key,_);
});
G__7375.cljs$core$IFn$_invoke$arity$variadic = G__7375__delegate;
return G__7375;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__7378__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__7378 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7379__i = 0, G__7379__a = new Array(arguments.length -  1);
while (G__7379__i < G__7379__a.length) {G__7379__a[G__7379__i] = arguments[G__7379__i + 1]; ++G__7379__i;}
  _ = new cljs.core.IndexedSeq(G__7379__a,0,null);
} 
return G__7378__delegate.call(this,t,_);};
G__7378.cljs$lang$maxFixedArity = 1;
G__7378.cljs$lang$applyTo = (function (arglist__7380){
var t = cljs.core.first(arglist__7380);
var _ = cljs.core.rest(arglist__7380);
return G__7378__delegate(t,_);
});
G__7378.cljs$core$IFn$_invoke$arity$variadic = G__7378__delegate;
return G__7378;
})()
,(function() { 
var G__7381__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__7381 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7382__i = 0, G__7382__a = new Array(arguments.length -  2);
while (G__7382__i < G__7382__a.length) {G__7382__a[G__7382__i] = arguments[G__7382__i + 2]; ++G__7382__i;}
  _ = new cljs.core.IndexedSeq(G__7382__a,0,null);
} 
return G__7381__delegate.call(this,t,angle,_);};
G__7381.cljs$lang$maxFixedArity = 2;
G__7381.cljs$lang$applyTo = (function (arglist__7383){
var t = cljs.core.first(arglist__7383);
arglist__7383 = cljs.core.next(arglist__7383);
var angle = cljs.core.first(arglist__7383);
var _ = cljs.core.rest(arglist__7383);
return G__7381__delegate(t,angle,_);
});
G__7381.cljs$core$IFn$_invoke$arity$variadic = G__7381__delegate;
return G__7381;
})()
,(function() { 
var G__7384__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__7384 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7385__i = 0, G__7385__a = new Array(arguments.length -  1);
while (G__7385__i < G__7385__a.length) {G__7385__a[G__7385__i] = arguments[G__7385__i + 1]; ++G__7385__i;}
  _ = new cljs.core.IndexedSeq(G__7385__a,0,null);
} 
return G__7384__delegate.call(this,t,_);};
G__7384.cljs$lang$maxFixedArity = 1;
G__7384.cljs$lang$applyTo = (function (arglist__7386){
var t = cljs.core.first(arglist__7386);
var _ = cljs.core.rest(arglist__7386);
return G__7384__delegate(t,_);
});
G__7384.cljs$core$IFn$_invoke$arity$variadic = G__7384__delegate;
return G__7384;
})()
,(function() { 
var G__7387__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__7387 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7388__i = 0, G__7388__a = new Array(arguments.length -  2);
while (G__7388__i < G__7388__a.length) {G__7388__a[G__7388__i] = arguments[G__7388__i + 2]; ++G__7388__i;}
  _ = new cljs.core.IndexedSeq(G__7388__a,0,null);
} 
return G__7387__delegate.call(this,t,s,_);};
G__7387.cljs$lang$maxFixedArity = 2;
G__7387.cljs$lang$applyTo = (function (arglist__7389){
var t = cljs.core.first(arglist__7389);
arglist__7389 = cljs.core.next(arglist__7389);
var s = cljs.core.first(arglist__7389);
var _ = cljs.core.rest(arglist__7389);
return G__7387__delegate(t,s,_);
});
G__7387.cljs$core$IFn$_invoke$arity$variadic = G__7387__delegate;
return G__7387;
})()
,(function() { 
var G__7390__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__7390 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7391__i = 0, G__7391__a = new Array(arguments.length -  2);
while (G__7391__i < G__7391__a.length) {G__7391__a[G__7391__i] = arguments[G__7391__i + 2]; ++G__7391__i;}
  _ = new cljs.core.IndexedSeq(G__7391__a,0,null);
} 
return G__7390__delegate.call(this,t,s,_);};
G__7390.cljs$lang$maxFixedArity = 2;
G__7390.cljs$lang$applyTo = (function (arglist__7392){
var t = cljs.core.first(arglist__7392);
arglist__7392 = cljs.core.next(arglist__7392);
var s = cljs.core.first(arglist__7392);
var _ = cljs.core.rest(arglist__7392);
return G__7390__delegate(t,s,_);
});
G__7390.cljs$core$IFn$_invoke$arity$variadic = G__7390__delegate;
return G__7390;
})()
,(function() { 
var G__7393__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__7393 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7394__i = 0, G__7394__a = new Array(arguments.length -  1);
while (G__7394__i < G__7394__a.length) {G__7394__a[G__7394__i] = arguments[G__7394__i + 1]; ++G__7394__i;}
  _ = new cljs.core.IndexedSeq(G__7394__a,0,null);
} 
return G__7393__delegate.call(this,t,_);};
G__7393.cljs$lang$maxFixedArity = 1;
G__7393.cljs$lang$applyTo = (function (arglist__7395){
var t = cljs.core.first(arglist__7395);
var _ = cljs.core.rest(arglist__7395);
return G__7393__delegate(t,_);
});
G__7393.cljs$core$IFn$_invoke$arity$variadic = G__7393__delegate;
return G__7393;
})()
,(function() { 
var G__7396__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__7396 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7397__i = 0, G__7397__a = new Array(arguments.length -  2);
while (G__7397__i < G__7397__a.length) {G__7397__a[G__7397__i] = arguments[G__7397__i + 2]; ++G__7397__i;}
  _ = new cljs.core.IndexedSeq(G__7397__a,0,null);
} 
return G__7396__delegate.call(this,t,dist,_);};
G__7396.cljs$lang$maxFixedArity = 2;
G__7396.cljs$lang$applyTo = (function (arglist__7398){
var t = cljs.core.first(arglist__7398);
arglist__7398 = cljs.core.next(arglist__7398);
var dist = cljs.core.first(arglist__7398);
var _ = cljs.core.rest(arglist__7398);
return G__7396__delegate(t,dist,_);
});
G__7396.cljs$core$IFn$_invoke$arity$variadic = G__7396__delegate;
return G__7396;
})()
,(function() { 
var G__7399__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__7399 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7400__i = 0, G__7400__a = new Array(arguments.length -  1);
while (G__7400__i < G__7400__a.length) {G__7400__a[G__7400__i] = arguments[G__7400__i + 1]; ++G__7400__i;}
  _ = new cljs.core.IndexedSeq(G__7400__a,0,null);
} 
return G__7399__delegate.call(this,t,_);};
G__7399.cljs$lang$maxFixedArity = 1;
G__7399.cljs$lang$applyTo = (function (arglist__7401){
var t = cljs.core.first(arglist__7401);
var _ = cljs.core.rest(arglist__7401);
return G__7399__delegate(t,_);
});
G__7399.cljs$core$IFn$_invoke$arity$variadic = G__7399__delegate;
return G__7399;
})()
,(function() { 
var G__7402__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__7402 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7403__i = 0, G__7403__a = new Array(arguments.length -  1);
while (G__7403__i < G__7403__a.length) {G__7403__a[G__7403__i] = arguments[G__7403__i + 1]; ++G__7403__i;}
  _ = new cljs.core.IndexedSeq(G__7403__a,0,null);
} 
return G__7402__delegate.call(this,t,_);};
G__7402.cljs$lang$maxFixedArity = 1;
G__7402.cljs$lang$applyTo = (function (arglist__7404){
var t = cljs.core.first(arglist__7404);
var _ = cljs.core.rest(arglist__7404);
return G__7402__delegate(t,_);
});
G__7402.cljs$core$IFn$_invoke$arity$variadic = G__7402__delegate;
return G__7402;
})()
,(function() { 
var G__7405__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__7405 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7406__i = 0, G__7406__a = new Array(arguments.length -  1);
while (G__7406__i < G__7406__a.length) {G__7406__a[G__7406__i] = arguments[G__7406__i + 1]; ++G__7406__i;}
  _ = new cljs.core.IndexedSeq(G__7406__a,0,null);
} 
return G__7405__delegate.call(this,t,_);};
G__7405.cljs$lang$maxFixedArity = 1;
G__7405.cljs$lang$applyTo = (function (arglist__7407){
var t = cljs.core.first(arglist__7407);
var _ = cljs.core.rest(arglist__7407);
return G__7405__delegate(t,_);
});
G__7405.cljs$core$IFn$_invoke$arity$variadic = G__7405__delegate;
return G__7405;
})()
,(function() { 
var G__7408__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__7408 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7409__i = 0, G__7409__a = new Array(arguments.length -  1);
while (G__7409__i < G__7409__a.length) {G__7409__a[G__7409__i] = arguments[G__7409__i + 1]; ++G__7409__i;}
  _ = new cljs.core.IndexedSeq(G__7409__a,0,null);
} 
return G__7408__delegate.call(this,t,_);};
G__7408.cljs$lang$maxFixedArity = 1;
G__7408.cljs$lang$applyTo = (function (arglist__7410){
var t = cljs.core.first(arglist__7410);
var _ = cljs.core.rest(arglist__7410);
return G__7408__delegate(t,_);
});
G__7408.cljs$core$IFn$_invoke$arity$variadic = G__7408__delegate;
return G__7408;
})()
,(function() { 
var G__7411__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__7411 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7412__i = 0, G__7412__a = new Array(arguments.length -  1);
while (G__7412__i < G__7412__a.length) {G__7412__a[G__7412__i] = arguments[G__7412__i + 1]; ++G__7412__i;}
  _ = new cljs.core.IndexedSeq(G__7412__a,0,null);
} 
return G__7411__delegate.call(this,t,_);};
G__7411.cljs$lang$maxFixedArity = 1;
G__7411.cljs$lang$applyTo = (function (arglist__7413){
var t = cljs.core.first(arglist__7413);
var _ = cljs.core.rest(arglist__7413);
return G__7411__delegate(t,_);
});
G__7411.cljs$core$IFn$_invoke$arity$variadic = G__7411__delegate;
return G__7411;
})()
,(function() { 
var G__7414__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__7414 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7415__i = 0, G__7415__a = new Array(arguments.length -  1);
while (G__7415__i < G__7415__a.length) {G__7415__a[G__7415__i] = arguments[G__7415__i + 1]; ++G__7415__i;}
  _ = new cljs.core.IndexedSeq(G__7415__a,0,null);
} 
return G__7414__delegate.call(this,t,_);};
G__7414.cljs$lang$maxFixedArity = 1;
G__7414.cljs$lang$applyTo = (function (arglist__7416){
var t = cljs.core.first(arglist__7416);
var _ = cljs.core.rest(arglist__7416);
return G__7414__delegate(t,_);
});
G__7414.cljs$core$IFn$_invoke$arity$variadic = G__7414__delegate;
return G__7414;
})()
,(function() { 
var G__7417__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__7417 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7418__i = 0, G__7418__a = new Array(arguments.length -  2);
while (G__7418__i < G__7418__a.length) {G__7418__a[G__7418__i] = arguments[G__7418__i + 2]; ++G__7418__i;}
  _ = new cljs.core.IndexedSeq(G__7418__a,0,null);
} 
return G__7417__delegate.call(this,t,s,_);};
G__7417.cljs$lang$maxFixedArity = 2;
G__7417.cljs$lang$applyTo = (function (arglist__7419){
var t = cljs.core.first(arglist__7419);
arglist__7419 = cljs.core.next(arglist__7419);
var s = cljs.core.first(arglist__7419);
var _ = cljs.core.rest(arglist__7419);
return G__7417__delegate(t,s,_);
});
G__7417.cljs$core$IFn$_invoke$arity$variadic = G__7417__delegate;
return G__7417;
})()
,(function() { 
var G__7420__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__7420 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7421__i = 0, G__7421__a = new Array(arguments.length -  2);
while (G__7421__i < G__7421__a.length) {G__7421__a[G__7421__i] = arguments[G__7421__i + 2]; ++G__7421__i;}
  _ = new cljs.core.IndexedSeq(G__7421__a,0,null);
} 
return G__7420__delegate.call(this,t,r,_);};
G__7420.cljs$lang$maxFixedArity = 2;
G__7420.cljs$lang$applyTo = (function (arglist__7422){
var t = cljs.core.first(arglist__7422);
arglist__7422 = cljs.core.next(arglist__7422);
var r = cljs.core.first(arglist__7422);
var _ = cljs.core.rest(arglist__7422);
return G__7420__delegate(t,r,_);
});
G__7420.cljs$core$IFn$_invoke$arity$variadic = G__7420__delegate;
return G__7420;
})()
,(function() { 
var G__7423__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__7423 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7424__i = 0, G__7424__a = new Array(arguments.length -  2);
while (G__7424__i < G__7424__a.length) {G__7424__a[G__7424__i] = arguments[G__7424__i + 2]; ++G__7424__i;}
  _ = new cljs.core.IndexedSeq(G__7424__a,0,null);
} 
return G__7423__delegate.call(this,t,dist,_);};
G__7423.cljs$lang$maxFixedArity = 2;
G__7423.cljs$lang$applyTo = (function (arglist__7425){
var t = cljs.core.first(arglist__7425);
arglist__7425 = cljs.core.next(arglist__7425);
var dist = cljs.core.first(arglist__7425);
var _ = cljs.core.rest(arglist__7425);
return G__7423__delegate(t,dist,_);
});
G__7423.cljs$core$IFn$_invoke$arity$variadic = G__7423__delegate;
return G__7423;
})()
,(function() { 
var G__7427__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7427 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7428__i = 0, G__7428__a = new Array(arguments.length -  2);
while (G__7428__i < G__7428__a.length) {G__7428__a[G__7428__i] = arguments[G__7428__i + 2]; ++G__7428__i;}
  _ = new cljs.core.IndexedSeq(G__7428__a,0,null);
} 
return G__7427__delegate.call(this,t,c,_);};
G__7427.cljs$lang$maxFixedArity = 2;
G__7427.cljs$lang$applyTo = (function (arglist__7429){
var t = cljs.core.first(arglist__7429);
arglist__7429 = cljs.core.next(arglist__7429);
var c = cljs.core.first(arglist__7429);
var _ = cljs.core.rest(arglist__7429);
return G__7427__delegate(t,c,_);
});
G__7427.cljs$core$IFn$_invoke$arity$variadic = G__7427__delegate;
return G__7427;
})()
,(function() { 
var G__7430__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__7430 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7431__i = 0, G__7431__a = new Array(arguments.length -  3);
while (G__7431__i < G__7431__a.length) {G__7431__a[G__7431__i] = arguments[G__7431__i + 3]; ++G__7431__i;}
  _ = new cljs.core.IndexedSeq(G__7431__a,0,null);
} 
return G__7430__delegate.call(this,t,x,y,_);};
G__7430.cljs$lang$maxFixedArity = 3;
G__7430.cljs$lang$applyTo = (function (arglist__7436){
var t = cljs.core.first(arglist__7436);
arglist__7436 = cljs.core.next(arglist__7436);
var x = cljs.core.first(arglist__7436);
arglist__7436 = cljs.core.next(arglist__7436);
var y = cljs.core.first(arglist__7436);
var _ = cljs.core.rest(arglist__7436);
return G__7430__delegate(t,x,y,_);
});
G__7430.cljs$core$IFn$_invoke$arity$variadic = G__7430__delegate;
return G__7430;
})()
,(function() { 
var G__7437__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__7437 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7442__i = 0, G__7442__a = new Array(arguments.length -  2);
while (G__7442__i < G__7442__a.length) {G__7442__a[G__7442__i] = arguments[G__7442__i + 2]; ++G__7442__i;}
  _ = new cljs.core.IndexedSeq(G__7442__a,0,null);
} 
return G__7437__delegate.call(this,t,angle,_);};
G__7437.cljs$lang$maxFixedArity = 2;
G__7437.cljs$lang$applyTo = (function (arglist__7443){
var t = cljs.core.first(arglist__7443);
arglist__7443 = cljs.core.next(arglist__7443);
var angle = cljs.core.first(arglist__7443);
var _ = cljs.core.rest(arglist__7443);
return G__7437__delegate(t,angle,_);
});
G__7437.cljs$core$IFn$_invoke$arity$variadic = G__7437__delegate;
return G__7437;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["contains",(function() { 
var G__7445__delegate = function (s,value,_){
return nex.interpreter.nex_set_contains(s,value);
};
var G__7445 = function (s,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7446__i = 0, G__7446__a = new Array(arguments.length -  2);
while (G__7446__i < G__7446__a.length) {G__7446__a[G__7446__i] = arguments[G__7446__i + 2]; ++G__7446__i;}
  _ = new cljs.core.IndexedSeq(G__7446__a,0,null);
} 
return G__7445__delegate.call(this,s,value,_);};
G__7445.cljs$lang$maxFixedArity = 2;
G__7445.cljs$lang$applyTo = (function (arglist__7447){
var s = cljs.core.first(arglist__7447);
arglist__7447 = cljs.core.next(arglist__7447);
var value = cljs.core.first(arglist__7447);
var _ = cljs.core.rest(arglist__7447);
return G__7445__delegate(s,value,_);
});
G__7445.cljs$core$IFn$_invoke$arity$variadic = G__7445__delegate;
return G__7445;
})()
,"union",(function() { 
var G__7448__delegate = function (s,other,_){
return nex.interpreter.nex_set_union(s,other);
};
var G__7448 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7453__i = 0, G__7453__a = new Array(arguments.length -  2);
while (G__7453__i < G__7453__a.length) {G__7453__a[G__7453__i] = arguments[G__7453__i + 2]; ++G__7453__i;}
  _ = new cljs.core.IndexedSeq(G__7453__a,0,null);
} 
return G__7448__delegate.call(this,s,other,_);};
G__7448.cljs$lang$maxFixedArity = 2;
G__7448.cljs$lang$applyTo = (function (arglist__7454){
var s = cljs.core.first(arglist__7454);
arglist__7454 = cljs.core.next(arglist__7454);
var other = cljs.core.first(arglist__7454);
var _ = cljs.core.rest(arglist__7454);
return G__7448__delegate(s,other,_);
});
G__7448.cljs$core$IFn$_invoke$arity$variadic = G__7448__delegate;
return G__7448;
})()
,"difference",(function() { 
var G__7455__delegate = function (s,other,_){
return nex.interpreter.nex_set_difference(s,other);
};
var G__7455 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7456__i = 0, G__7456__a = new Array(arguments.length -  2);
while (G__7456__i < G__7456__a.length) {G__7456__a[G__7456__i] = arguments[G__7456__i + 2]; ++G__7456__i;}
  _ = new cljs.core.IndexedSeq(G__7456__a,0,null);
} 
return G__7455__delegate.call(this,s,other,_);};
G__7455.cljs$lang$maxFixedArity = 2;
G__7455.cljs$lang$applyTo = (function (arglist__7457){
var s = cljs.core.first(arglist__7457);
arglist__7457 = cljs.core.next(arglist__7457);
var other = cljs.core.first(arglist__7457);
var _ = cljs.core.rest(arglist__7457);
return G__7455__delegate(s,other,_);
});
G__7455.cljs$core$IFn$_invoke$arity$variadic = G__7455__delegate;
return G__7455;
})()
,"intersection",(function() { 
var G__7458__delegate = function (s,other,_){
return nex.interpreter.nex_set_intersection(s,other);
};
var G__7458 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7459__i = 0, G__7459__a = new Array(arguments.length -  2);
while (G__7459__i < G__7459__a.length) {G__7459__a[G__7459__i] = arguments[G__7459__i + 2]; ++G__7459__i;}
  _ = new cljs.core.IndexedSeq(G__7459__a,0,null);
} 
return G__7458__delegate.call(this,s,other,_);};
G__7458.cljs$lang$maxFixedArity = 2;
G__7458.cljs$lang$applyTo = (function (arglist__7460){
var s = cljs.core.first(arglist__7460);
arglist__7460 = cljs.core.next(arglist__7460);
var other = cljs.core.first(arglist__7460);
var _ = cljs.core.rest(arglist__7460);
return G__7458__delegate(s,other,_);
});
G__7458.cljs$core$IFn$_invoke$arity$variadic = G__7458__delegate;
return G__7458;
})()
,"symmetric_difference",(function() { 
var G__7461__delegate = function (s,other,_){
return nex.interpreter.nex_set_symmetric_difference(s,other);
};
var G__7461 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7462__i = 0, G__7462__a = new Array(arguments.length -  2);
while (G__7462__i < G__7462__a.length) {G__7462__a[G__7462__i] = arguments[G__7462__i + 2]; ++G__7462__i;}
  _ = new cljs.core.IndexedSeq(G__7462__a,0,null);
} 
return G__7461__delegate.call(this,s,other,_);};
G__7461.cljs$lang$maxFixedArity = 2;
G__7461.cljs$lang$applyTo = (function (arglist__7463){
var s = cljs.core.first(arglist__7463);
arglist__7463 = cljs.core.next(arglist__7463);
var other = cljs.core.first(arglist__7463);
var _ = cljs.core.rest(arglist__7463);
return G__7461__delegate(s,other,_);
});
G__7461.cljs$core$IFn$_invoke$arity$variadic = G__7461__delegate;
return G__7461;
})()
,"size",(function() { 
var G__7464__delegate = function (s,_){
return nex.interpreter.nex_set_size(s);
};
var G__7464 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7465__i = 0, G__7465__a = new Array(arguments.length -  1);
while (G__7465__i < G__7465__a.length) {G__7465__a[G__7465__i] = arguments[G__7465__i + 1]; ++G__7465__i;}
  _ = new cljs.core.IndexedSeq(G__7465__a,0,null);
} 
return G__7464__delegate.call(this,s,_);};
G__7464.cljs$lang$maxFixedArity = 1;
G__7464.cljs$lang$applyTo = (function (arglist__7466){
var s = cljs.core.first(arglist__7466);
var _ = cljs.core.rest(arglist__7466);
return G__7464__delegate(s,_);
});
G__7464.cljs$core$IFn$_invoke$arity$variadic = G__7464__delegate;
return G__7464;
})()
,"is_empty",(function() { 
var G__7467__delegate = function (s,_){
return nex.interpreter.nex_set_empty_QMARK_(s);
};
var G__7467 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7468__i = 0, G__7468__a = new Array(arguments.length -  1);
while (G__7468__i < G__7468__a.length) {G__7468__a[G__7468__i] = arguments[G__7468__i + 1]; ++G__7468__i;}
  _ = new cljs.core.IndexedSeq(G__7468__a,0,null);
} 
return G__7467__delegate.call(this,s,_);};
G__7467.cljs$lang$maxFixedArity = 1;
G__7467.cljs$lang$applyTo = (function (arglist__7469){
var s = cljs.core.first(arglist__7469);
var _ = cljs.core.rest(arglist__7469);
return G__7467__delegate(s,_);
});
G__7467.cljs$core$IFn$_invoke$arity$variadic = G__7467__delegate;
return G__7467;
})()
,"cursor",(function() { 
var G__7470__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.es6_iterator_seq(s.values()))),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7470 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7471__i = 0, G__7471__a = new Array(arguments.length -  1);
while (G__7471__i < G__7471__a.length) {G__7471__a[G__7471__i] = arguments[G__7471__i + 1]; ++G__7471__i;}
  _ = new cljs.core.IndexedSeq(G__7471__a,0,null);
} 
return G__7470__delegate.call(this,s,_);};
G__7470.cljs$lang$maxFixedArity = 1;
G__7470.cljs$lang$applyTo = (function (arglist__7472){
var s = cljs.core.first(arglist__7472);
var _ = cljs.core.rest(arglist__7472);
return G__7470__delegate(s,_);
});
G__7470.cljs$core$IFn$_invoke$arity$variadic = G__7470__delegate;
return G__7470;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["send",(function() { 
var G__7473__delegate = function (ch,value,p__6330){
var vec__6331 = p__6330;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6331,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3(ch,value,timeout);
} else {
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2(ch,value);
}
};
var G__7473 = function (ch,value,var_args){
var p__6330 = null;
if (arguments.length > 2) {
var G__7474__i = 0, G__7474__a = new Array(arguments.length -  2);
while (G__7474__i < G__7474__a.length) {G__7474__a[G__7474__i] = arguments[G__7474__i + 2]; ++G__7474__i;}
  p__6330 = new cljs.core.IndexedSeq(G__7474__a,0,null);
} 
return G__7473__delegate.call(this,ch,value,p__6330);};
G__7473.cljs$lang$maxFixedArity = 2;
G__7473.cljs$lang$applyTo = (function (arglist__7475){
var ch = cljs.core.first(arglist__7475);
arglist__7475 = cljs.core.next(arglist__7475);
var value = cljs.core.first(arglist__7475);
var p__6330 = cljs.core.rest(arglist__7475);
return G__7473__delegate(ch,value,p__6330);
});
G__7473.cljs$core$IFn$_invoke$arity$variadic = G__7473__delegate;
return G__7473;
})()
,"try_send",(function() { 
var G__7476__delegate = function (ch,value,_){
return nex.interpreter.channel_try_send(ch,value);
};
var G__7476 = function (ch,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7477__i = 0, G__7477__a = new Array(arguments.length -  2);
while (G__7477__i < G__7477__a.length) {G__7477__a[G__7477__i] = arguments[G__7477__i + 2]; ++G__7477__i;}
  _ = new cljs.core.IndexedSeq(G__7477__a,0,null);
} 
return G__7476__delegate.call(this,ch,value,_);};
G__7476.cljs$lang$maxFixedArity = 2;
G__7476.cljs$lang$applyTo = (function (arglist__7478){
var ch = cljs.core.first(arglist__7478);
arglist__7478 = cljs.core.next(arglist__7478);
var value = cljs.core.first(arglist__7478);
var _ = cljs.core.rest(arglist__7478);
return G__7476__delegate(ch,value,_);
});
G__7476.cljs$core$IFn$_invoke$arity$variadic = G__7476__delegate;
return G__7476;
})()
,"receive",(function() { 
var G__7479__delegate = function (ch,p__6334){
var vec__6335 = p__6334;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6335,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2(ch,timeout);
} else {
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1(ch);
}
};
var G__7479 = function (ch,var_args){
var p__6334 = null;
if (arguments.length > 1) {
var G__7480__i = 0, G__7480__a = new Array(arguments.length -  1);
while (G__7480__i < G__7480__a.length) {G__7480__a[G__7480__i] = arguments[G__7480__i + 1]; ++G__7480__i;}
  p__6334 = new cljs.core.IndexedSeq(G__7480__a,0,null);
} 
return G__7479__delegate.call(this,ch,p__6334);};
G__7479.cljs$lang$maxFixedArity = 1;
G__7479.cljs$lang$applyTo = (function (arglist__7481){
var ch = cljs.core.first(arglist__7481);
var p__6334 = cljs.core.rest(arglist__7481);
return G__7479__delegate(ch,p__6334);
});
G__7479.cljs$core$IFn$_invoke$arity$variadic = G__7479__delegate;
return G__7479;
})()
,"try_receive",(function() { 
var G__7482__delegate = function (ch,_){
return nex.interpreter.channel_try_receive(ch);
};
var G__7482 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7483__i = 0, G__7483__a = new Array(arguments.length -  1);
while (G__7483__i < G__7483__a.length) {G__7483__a[G__7483__i] = arguments[G__7483__i + 1]; ++G__7483__i;}
  _ = new cljs.core.IndexedSeq(G__7483__a,0,null);
} 
return G__7482__delegate.call(this,ch,_);};
G__7482.cljs$lang$maxFixedArity = 1;
G__7482.cljs$lang$applyTo = (function (arglist__7484){
var ch = cljs.core.first(arglist__7484);
var _ = cljs.core.rest(arglist__7484);
return G__7482__delegate(ch,_);
});
G__7482.cljs$core$IFn$_invoke$arity$variadic = G__7482__delegate;
return G__7482;
})()
,"close",(function() { 
var G__7485__delegate = function (ch,_){
return nex.interpreter.channel_close(ch);
};
var G__7485 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7486__i = 0, G__7486__a = new Array(arguments.length -  1);
while (G__7486__i < G__7486__a.length) {G__7486__a[G__7486__i] = arguments[G__7486__i + 1]; ++G__7486__i;}
  _ = new cljs.core.IndexedSeq(G__7486__a,0,null);
} 
return G__7485__delegate.call(this,ch,_);};
G__7485.cljs$lang$maxFixedArity = 1;
G__7485.cljs$lang$applyTo = (function (arglist__7487){
var ch = cljs.core.first(arglist__7487);
var _ = cljs.core.rest(arglist__7487);
return G__7485__delegate(ch,_);
});
G__7485.cljs$core$IFn$_invoke$arity$variadic = G__7485__delegate;
return G__7485;
})()
,"is_closed",(function() { 
var G__7488__delegate = function (ch,_){
return new cljs.core.Keyword(null,"closed?","closed?",-1408769040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7488 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7489__i = 0, G__7489__a = new Array(arguments.length -  1);
while (G__7489__i < G__7489__a.length) {G__7489__a[G__7489__i] = arguments[G__7489__i + 1]; ++G__7489__i;}
  _ = new cljs.core.IndexedSeq(G__7489__a,0,null);
} 
return G__7488__delegate.call(this,ch,_);};
G__7488.cljs$lang$maxFixedArity = 1;
G__7488.cljs$lang$applyTo = (function (arglist__7490){
var ch = cljs.core.first(arglist__7490);
var _ = cljs.core.rest(arglist__7490);
return G__7488__delegate(ch,_);
});
G__7488.cljs$core$IFn$_invoke$arity$variadic = G__7488__delegate;
return G__7488;
})()
,"capacity",(function() { 
var G__7491__delegate = function (ch,_){
return new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__7491 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7492__i = 0, G__7492__a = new Array(arguments.length -  1);
while (G__7492__i < G__7492__a.length) {G__7492__a[G__7492__i] = arguments[G__7492__i + 1]; ++G__7492__i;}
  _ = new cljs.core.IndexedSeq(G__7492__a,0,null);
} 
return G__7491__delegate.call(this,ch,_);};
G__7491.cljs$lang$maxFixedArity = 1;
G__7491.cljs$lang$applyTo = (function (arglist__7493){
var ch = cljs.core.first(arglist__7493);
var _ = cljs.core.rest(arglist__7493);
return G__7491__delegate(ch,_);
});
G__7491.cljs$core$IFn$_invoke$arity$variadic = G__7491__delegate;
return G__7491;
})()
,"size",(function() { 
var G__7494__delegate = function (ch,_){
return cljs.core.count(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
};
var G__7494 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7495__i = 0, G__7495__a = new Array(arguments.length -  1);
while (G__7495__i < G__7495__a.length) {G__7495__a[G__7495__i] = arguments[G__7495__i + 1]; ++G__7495__i;}
  _ = new cljs.core.IndexedSeq(G__7495__a,0,null);
} 
return G__7494__delegate.call(this,ch,_);};
G__7494.cljs$lang$maxFixedArity = 1;
G__7494.cljs$lang$applyTo = (function (arglist__7496){
var ch = cljs.core.first(arglist__7496);
var _ = cljs.core.rest(arglist__7496);
return G__7494__delegate(ch,_);
});
G__7494.cljs$core$IFn$_invoke$arity$variadic = G__7494__delegate;
return G__7494;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__7497__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__7497 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7498__i = 0, G__7498__a = new Array(arguments.length -  1);
while (G__7498__i < G__7498__a.length) {G__7498__a[G__7498__i] = arguments[G__7498__i + 1]; ++G__7498__i;}
  _ = new cljs.core.IndexedSeq(G__7498__a,0,null);
} 
return G__7497__delegate.call(this,b,_);};
G__7497.cljs$lang$maxFixedArity = 1;
G__7497.cljs$lang$applyTo = (function (arglist__7499){
var b = cljs.core.first(arglist__7499);
var _ = cljs.core.rest(arglist__7499);
return G__7497__delegate(b,_);
});
G__7497.cljs$core$IFn$_invoke$arity$variadic = G__7497__delegate;
return G__7497;
})()
,"and",(function() { 
var G__7500__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__7500 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7501__i = 0, G__7501__a = new Array(arguments.length -  2);
while (G__7501__i < G__7501__a.length) {G__7501__a[G__7501__i] = arguments[G__7501__i + 2]; ++G__7501__i;}
  _ = new cljs.core.IndexedSeq(G__7501__a,0,null);
} 
return G__7500__delegate.call(this,b,other,_);};
G__7500.cljs$lang$maxFixedArity = 2;
G__7500.cljs$lang$applyTo = (function (arglist__7502){
var b = cljs.core.first(arglist__7502);
arglist__7502 = cljs.core.next(arglist__7502);
var other = cljs.core.first(arglist__7502);
var _ = cljs.core.rest(arglist__7502);
return G__7500__delegate(b,other,_);
});
G__7500.cljs$core$IFn$_invoke$arity$variadic = G__7500__delegate;
return G__7500;
})()
,"or",(function() { 
var G__7503__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__7503 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7504__i = 0, G__7504__a = new Array(arguments.length -  2);
while (G__7504__i < G__7504__a.length) {G__7504__a[G__7504__i] = arguments[G__7504__i + 2]; ++G__7504__i;}
  _ = new cljs.core.IndexedSeq(G__7504__a,0,null);
} 
return G__7503__delegate.call(this,b,other,_);};
G__7503.cljs$lang$maxFixedArity = 2;
G__7503.cljs$lang$applyTo = (function (arglist__7505){
var b = cljs.core.first(arglist__7505);
arglist__7505 = cljs.core.next(arglist__7505);
var other = cljs.core.first(arglist__7505);
var _ = cljs.core.rest(arglist__7505);
return G__7503__delegate(b,other,_);
});
G__7503.cljs$core$IFn$_invoke$arity$variadic = G__7503__delegate;
return G__7503;
})()
,"not",(function() { 
var G__7506__delegate = function (b,_){
return cljs.core.not(b);
};
var G__7506 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7507__i = 0, G__7507__a = new Array(arguments.length -  1);
while (G__7507__i < G__7507__a.length) {G__7507__a[G__7507__i] = arguments[G__7507__i + 1]; ++G__7507__i;}
  _ = new cljs.core.IndexedSeq(G__7507__a,0,null);
} 
return G__7506__delegate.call(this,b,_);};
G__7506.cljs$lang$maxFixedArity = 1;
G__7506.cljs$lang$applyTo = (function (arglist__7508){
var b = cljs.core.first(arglist__7508);
var _ = cljs.core.rest(arglist__7508);
return G__7506__delegate(b,_);
});
G__7506.cljs$core$IFn$_invoke$arity$variadic = G__7506__delegate;
return G__7506;
})()
,"equals",(function() { 
var G__7509__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7509 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7510__i = 0, G__7510__a = new Array(arguments.length -  2);
while (G__7510__i < G__7510__a.length) {G__7510__a[G__7510__i] = arguments[G__7510__i + 2]; ++G__7510__i;}
  _ = new cljs.core.IndexedSeq(G__7510__a,0,null);
} 
return G__7509__delegate.call(this,b,other,_);};
G__7509.cljs$lang$maxFixedArity = 2;
G__7509.cljs$lang$applyTo = (function (arglist__7511){
var b = cljs.core.first(arglist__7511);
arglist__7511 = cljs.core.next(arglist__7511);
var other = cljs.core.first(arglist__7511);
var _ = cljs.core.rest(arglist__7511);
return G__7509__delegate(b,other,_);
});
G__7509.cljs$core$IFn$_invoke$arity$variadic = G__7509__delegate;
return G__7509;
})()
,"not_equals",(function() { 
var G__7512__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7512 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7513__i = 0, G__7513__a = new Array(arguments.length -  2);
while (G__7513__i < G__7513__a.length) {G__7513__a[G__7513__i] = arguments[G__7513__i + 2]; ++G__7513__i;}
  _ = new cljs.core.IndexedSeq(G__7513__a,0,null);
} 
return G__7512__delegate.call(this,b,other,_);};
G__7512.cljs$lang$maxFixedArity = 2;
G__7512.cljs$lang$applyTo = (function (arglist__7514){
var b = cljs.core.first(arglist__7514);
arglist__7514 = cljs.core.next(arglist__7514);
var other = cljs.core.first(arglist__7514);
var _ = cljs.core.rest(arglist__7514);
return G__7512__delegate(b,other,_);
});
G__7512.cljs$core$IFn$_invoke$arity$variadic = G__7512__delegate;
return G__7512;
})()
,"compare",(function() { 
var G__7515__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__7515 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7516__i = 0, G__7516__a = new Array(arguments.length -  2);
while (G__7516__i < G__7516__a.length) {G__7516__a[G__7516__i] = arguments[G__7516__i + 2]; ++G__7516__i;}
  _ = new cljs.core.IndexedSeq(G__7516__a,0,null);
} 
return G__7515__delegate.call(this,b,other,_);};
G__7515.cljs$lang$maxFixedArity = 2;
G__7515.cljs$lang$applyTo = (function (arglist__7517){
var b = cljs.core.first(arglist__7517);
arglist__7517 = cljs.core.next(arglist__7517);
var other = cljs.core.first(arglist__7517);
var _ = cljs.core.rest(arglist__7517);
return G__7515__delegate(b,other,_);
});
G__7515.cljs$core$IFn$_invoke$arity$variadic = G__7515__delegate;
return G__7515;
})()
,"hash",(function() { 
var G__7518__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__7518 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7519__i = 0, G__7519__a = new Array(arguments.length -  1);
while (G__7519__i < G__7519__a.length) {G__7519__a[G__7519__i] = arguments[G__7519__i + 1]; ++G__7519__i;}
  _ = new cljs.core.IndexedSeq(G__7519__a,0,null);
} 
return G__7518__delegate.call(this,b,_);};
G__7518.cljs$lang$maxFixedArity = 1;
G__7518.cljs$lang$applyTo = (function (arglist__7520){
var b = cljs.core.first(arglist__7520);
var _ = cljs.core.rest(arglist__7520);
return G__7518__delegate(b,_);
});
G__7518.cljs$core$IFn$_invoke$arity$variadic = G__7518__delegate;
return G__7518;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__7521__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7521 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7522__i = 0, G__7522__a = new Array(arguments.length -  1);
while (G__7522__i < G__7522__a.length) {G__7522__a[G__7522__i] = arguments[G__7522__i + 1]; ++G__7522__i;}
  _ = new cljs.core.IndexedSeq(G__7522__a,0,null);
} 
return G__7521__delegate.call(this,f,_);};
G__7521.cljs$lang$maxFixedArity = 1;
G__7521.cljs$lang$applyTo = (function (arglist__7523){
var f = cljs.core.first(arglist__7523);
var _ = cljs.core.rest(arglist__7523);
return G__7521__delegate(f,_);
});
G__7521.cljs$core$IFn$_invoke$arity$variadic = G__7521__delegate;
return G__7521;
})()
,"write",(function() { 
var G__7524__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7524 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7525__i = 0, G__7525__a = new Array(arguments.length -  2);
while (G__7525__i < G__7525__a.length) {G__7525__a[G__7525__i] = arguments[G__7525__i + 2]; ++G__7525__i;}
  _ = new cljs.core.IndexedSeq(G__7525__a,0,null);
} 
return G__7524__delegate.call(this,f,content,_);};
G__7524.cljs$lang$maxFixedArity = 2;
G__7524.cljs$lang$applyTo = (function (arglist__7526){
var f = cljs.core.first(arglist__7526);
arglist__7526 = cljs.core.next(arglist__7526);
var content = cljs.core.first(arglist__7526);
var _ = cljs.core.rest(arglist__7526);
return G__7524__delegate(f,content,_);
});
G__7524.cljs$core$IFn$_invoke$arity$variadic = G__7524__delegate;
return G__7524;
})()
,"append",(function() { 
var G__7527__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7527 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7528__i = 0, G__7528__a = new Array(arguments.length -  2);
while (G__7528__i < G__7528__a.length) {G__7528__a[G__7528__i] = arguments[G__7528__i + 2]; ++G__7528__i;}
  _ = new cljs.core.IndexedSeq(G__7528__a,0,null);
} 
return G__7527__delegate.call(this,f,content,_);};
G__7527.cljs$lang$maxFixedArity = 2;
G__7527.cljs$lang$applyTo = (function (arglist__7529){
var f = cljs.core.first(arglist__7529);
arglist__7529 = cljs.core.next(arglist__7529);
var content = cljs.core.first(arglist__7529);
var _ = cljs.core.rest(arglist__7529);
return G__7527__delegate(f,content,_);
});
G__7527.cljs$core$IFn$_invoke$arity$variadic = G__7527__delegate;
return G__7527;
})()
,"exists",(function() { 
var G__7530__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7530 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7531__i = 0, G__7531__a = new Array(arguments.length -  1);
while (G__7531__i < G__7531__a.length) {G__7531__a[G__7531__i] = arguments[G__7531__i + 1]; ++G__7531__i;}
  _ = new cljs.core.IndexedSeq(G__7531__a,0,null);
} 
return G__7530__delegate.call(this,f,_);};
G__7530.cljs$lang$maxFixedArity = 1;
G__7530.cljs$lang$applyTo = (function (arglist__7532){
var f = cljs.core.first(arglist__7532);
var _ = cljs.core.rest(arglist__7532);
return G__7530__delegate(f,_);
});
G__7530.cljs$core$IFn$_invoke$arity$variadic = G__7530__delegate;
return G__7530;
})()
,"delete",(function() { 
var G__7533__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__7533 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7534__i = 0, G__7534__a = new Array(arguments.length -  1);
while (G__7534__i < G__7534__a.length) {G__7534__a[G__7534__i] = arguments[G__7534__i + 1]; ++G__7534__i;}
  _ = new cljs.core.IndexedSeq(G__7534__a,0,null);
} 
return G__7533__delegate.call(this,f,_);};
G__7533.cljs$lang$maxFixedArity = 1;
G__7533.cljs$lang$applyTo = (function (arglist__7535){
var f = cljs.core.first(arglist__7535);
var _ = cljs.core.rest(arglist__7535);
return G__7533__delegate(f,_);
});
G__7533.cljs$core$IFn$_invoke$arity$variadic = G__7533__delegate;
return G__7533;
})()
,"lines",(function() { 
var G__7536__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7536 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7537__i = 0, G__7537__a = new Array(arguments.length -  1);
while (G__7537__i < G__7537__a.length) {G__7537__a[G__7537__i] = arguments[G__7537__i + 1]; ++G__7537__i;}
  _ = new cljs.core.IndexedSeq(G__7537__a,0,null);
} 
return G__7536__delegate.call(this,f,_);};
G__7536.cljs$lang$maxFixedArity = 1;
G__7536.cljs$lang$applyTo = (function (arglist__7538){
var f = cljs.core.first(arglist__7538);
var _ = cljs.core.rest(arglist__7538);
return G__7536__delegate(f,_);
});
G__7536.cljs$core$IFn$_invoke$arity$variadic = G__7536__delegate;
return G__7536;
})()
,"close",(function() { 
var G__7539__delegate = function (_,___$1){
return null;
};
var G__7539 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7540__i = 0, G__7540__a = new Array(arguments.length -  1);
while (G__7540__i < G__7540__a.length) {G__7540__a[G__7540__i] = arguments[G__7540__i + 1]; ++G__7540__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7540__a,0,null);
} 
return G__7539__delegate.call(this,_,___$1);};
G__7539.cljs$lang$maxFixedArity = 1;
G__7539.cljs$lang$applyTo = (function (arglist__7541){
var _ = cljs.core.first(arglist__7541);
var ___$1 = cljs.core.rest(arglist__7541);
return G__7539__delegate(_,___$1);
});
G__7539.cljs$core$IFn$_invoke$arity$variadic = G__7539__delegate;
return G__7539;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","bitwise_set","less_than","bitwise_or","plus","to_string","hash","greater_than","bitwise_logical_right_shift","pick","max","not_equals","bitwise_unset","minus","times","bitwise_and","bitwise_right_shift","divided_by","abs","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","equals","greater_than_or_equal","bitwise_rotate_left","bitwise_xor"],[(function() { 
var G__7542__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7542 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7543__i = 0, G__7543__a = new Array(arguments.length -  2);
while (G__7543__i < G__7543__a.length) {G__7543__a[G__7543__i] = arguments[G__7543__i + 2]; ++G__7543__i;}
  _ = new cljs.core.IndexedSeq(G__7543__a,0,null);
} 
return G__7542__delegate.call(this,n,other,_);};
G__7542.cljs$lang$maxFixedArity = 2;
G__7542.cljs$lang$applyTo = (function (arglist__7544){
var n = cljs.core.first(arglist__7544);
arglist__7544 = cljs.core.next(arglist__7544);
var other = cljs.core.first(arglist__7544);
var _ = cljs.core.rest(arglist__7544);
return G__7542__delegate(n,other,_);
});
G__7542.cljs$core$IFn$_invoke$arity$variadic = G__7542__delegate;
return G__7542;
})()
,(function() { 
var G__7545__delegate = function (n,other,_){
return (n <= other);
};
var G__7545 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7546__i = 0, G__7546__a = new Array(arguments.length -  2);
while (G__7546__i < G__7546__a.length) {G__7546__a[G__7546__i] = arguments[G__7546__i + 2]; ++G__7546__i;}
  _ = new cljs.core.IndexedSeq(G__7546__a,0,null);
} 
return G__7545__delegate.call(this,n,other,_);};
G__7545.cljs$lang$maxFixedArity = 2;
G__7545.cljs$lang$applyTo = (function (arglist__7547){
var n = cljs.core.first(arglist__7547);
arglist__7547 = cljs.core.next(arglist__7547);
var other = cljs.core.first(arglist__7547);
var _ = cljs.core.rest(arglist__7547);
return G__7545__delegate(n,other,_);
});
G__7545.cljs$core$IFn$_invoke$arity$variadic = G__7545__delegate;
return G__7545;
})()
,(function() { 
var G__7548__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7548 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7549__i = 0, G__7549__a = new Array(arguments.length -  2);
while (G__7549__i < G__7549__a.length) {G__7549__a[G__7549__i] = arguments[G__7549__i + 2]; ++G__7549__i;}
  _ = new cljs.core.IndexedSeq(G__7549__a,0,null);
} 
return G__7548__delegate.call(this,n,other,_);};
G__7548.cljs$lang$maxFixedArity = 2;
G__7548.cljs$lang$applyTo = (function (arglist__7550){
var n = cljs.core.first(arglist__7550);
arglist__7550 = cljs.core.next(arglist__7550);
var other = cljs.core.first(arglist__7550);
var _ = cljs.core.rest(arglist__7550);
return G__7548__delegate(n,other,_);
});
G__7548.cljs$core$IFn$_invoke$arity$variadic = G__7548__delegate;
return G__7548;
})()
,(function() { 
var G__7551__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_set(n,idx);
};
var G__7551 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7552__i = 0, G__7552__a = new Array(arguments.length -  2);
while (G__7552__i < G__7552__a.length) {G__7552__a[G__7552__i] = arguments[G__7552__i + 2]; ++G__7552__i;}
  _ = new cljs.core.IndexedSeq(G__7552__a,0,null);
} 
return G__7551__delegate.call(this,n,idx,_);};
G__7551.cljs$lang$maxFixedArity = 2;
G__7551.cljs$lang$applyTo = (function (arglist__7553){
var n = cljs.core.first(arglist__7553);
arglist__7553 = cljs.core.next(arglist__7553);
var idx = cljs.core.first(arglist__7553);
var _ = cljs.core.rest(arglist__7553);
return G__7551__delegate(n,idx,_);
});
G__7551.cljs$core$IFn$_invoke$arity$variadic = G__7551__delegate;
return G__7551;
})()
,(function() { 
var G__7554__delegate = function (n,other,_){
return (n < other);
};
var G__7554 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7555__i = 0, G__7555__a = new Array(arguments.length -  2);
while (G__7555__i < G__7555__a.length) {G__7555__a[G__7555__i] = arguments[G__7555__i + 2]; ++G__7555__i;}
  _ = new cljs.core.IndexedSeq(G__7555__a,0,null);
} 
return G__7554__delegate.call(this,n,other,_);};
G__7554.cljs$lang$maxFixedArity = 2;
G__7554.cljs$lang$applyTo = (function (arglist__7556){
var n = cljs.core.first(arglist__7556);
arglist__7556 = cljs.core.next(arglist__7556);
var other = cljs.core.first(arglist__7556);
var _ = cljs.core.rest(arglist__7556);
return G__7554__delegate(n,other,_);
});
G__7554.cljs$core$IFn$_invoke$arity$variadic = G__7554__delegate;
return G__7554;
})()
,(function() { 
var G__7557__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_or(n,other);
};
var G__7557 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7558__i = 0, G__7558__a = new Array(arguments.length -  2);
while (G__7558__i < G__7558__a.length) {G__7558__a[G__7558__i] = arguments[G__7558__i + 2]; ++G__7558__i;}
  _ = new cljs.core.IndexedSeq(G__7558__a,0,null);
} 
return G__7557__delegate.call(this,n,other,_);};
G__7557.cljs$lang$maxFixedArity = 2;
G__7557.cljs$lang$applyTo = (function (arglist__7559){
var n = cljs.core.first(arglist__7559);
arglist__7559 = cljs.core.next(arglist__7559);
var other = cljs.core.first(arglist__7559);
var _ = cljs.core.rest(arglist__7559);
return G__7557__delegate(n,other,_);
});
G__7557.cljs$core$IFn$_invoke$arity$variadic = G__7557__delegate;
return G__7557;
})()
,(function() { 
var G__7563__delegate = function (n,other,_){
return (n + other);
};
var G__7563 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7564__i = 0, G__7564__a = new Array(arguments.length -  2);
while (G__7564__i < G__7564__a.length) {G__7564__a[G__7564__i] = arguments[G__7564__i + 2]; ++G__7564__i;}
  _ = new cljs.core.IndexedSeq(G__7564__a,0,null);
} 
return G__7563__delegate.call(this,n,other,_);};
G__7563.cljs$lang$maxFixedArity = 2;
G__7563.cljs$lang$applyTo = (function (arglist__7565){
var n = cljs.core.first(arglist__7565);
arglist__7565 = cljs.core.next(arglist__7565);
var other = cljs.core.first(arglist__7565);
var _ = cljs.core.rest(arglist__7565);
return G__7563__delegate(n,other,_);
});
G__7563.cljs$core$IFn$_invoke$arity$variadic = G__7563__delegate;
return G__7563;
})()
,(function() { 
var G__7566__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7566 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7570__i = 0, G__7570__a = new Array(arguments.length -  1);
while (G__7570__i < G__7570__a.length) {G__7570__a[G__7570__i] = arguments[G__7570__i + 1]; ++G__7570__i;}
  _ = new cljs.core.IndexedSeq(G__7570__a,0,null);
} 
return G__7566__delegate.call(this,n,_);};
G__7566.cljs$lang$maxFixedArity = 1;
G__7566.cljs$lang$applyTo = (function (arglist__7571){
var n = cljs.core.first(arglist__7571);
var _ = cljs.core.rest(arglist__7571);
return G__7566__delegate(n,_);
});
G__7566.cljs$core$IFn$_invoke$arity$variadic = G__7566__delegate;
return G__7566;
})()
,(function() { 
var G__7572__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7572 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7573__i = 0, G__7573__a = new Array(arguments.length -  1);
while (G__7573__i < G__7573__a.length) {G__7573__a[G__7573__i] = arguments[G__7573__i + 1]; ++G__7573__i;}
  _ = new cljs.core.IndexedSeq(G__7573__a,0,null);
} 
return G__7572__delegate.call(this,n,_);};
G__7572.cljs$lang$maxFixedArity = 1;
G__7572.cljs$lang$applyTo = (function (arglist__7574){
var n = cljs.core.first(arglist__7574);
var _ = cljs.core.rest(arglist__7574);
return G__7572__delegate(n,_);
});
G__7572.cljs$core$IFn$_invoke$arity$variadic = G__7572__delegate;
return G__7572;
})()
,(function() { 
var G__7575__delegate = function (n,other,_){
return (n > other);
};
var G__7575 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  2);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 2]; ++G__7576__i;}
  _ = new cljs.core.IndexedSeq(G__7576__a,0,null);
} 
return G__7575__delegate.call(this,n,other,_);};
G__7575.cljs$lang$maxFixedArity = 2;
G__7575.cljs$lang$applyTo = (function (arglist__7577){
var n = cljs.core.first(arglist__7577);
arglist__7577 = cljs.core.next(arglist__7577);
var other = cljs.core.first(arglist__7577);
var _ = cljs.core.rest(arglist__7577);
return G__7575__delegate(n,other,_);
});
G__7575.cljs$core$IFn$_invoke$arity$variadic = G__7575__delegate;
return G__7575;
})()
,(function() { 
var G__7578__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_logical_right_shift(n,shift);
};
var G__7578 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7580__i = 0, G__7580__a = new Array(arguments.length -  2);
while (G__7580__i < G__7580__a.length) {G__7580__a[G__7580__i] = arguments[G__7580__i + 2]; ++G__7580__i;}
  _ = new cljs.core.IndexedSeq(G__7580__a,0,null);
} 
return G__7578__delegate.call(this,n,shift,_);};
G__7578.cljs$lang$maxFixedArity = 2;
G__7578.cljs$lang$applyTo = (function (arglist__7581){
var n = cljs.core.first(arglist__7581);
arglist__7581 = cljs.core.next(arglist__7581);
var shift = cljs.core.first(arglist__7581);
var _ = cljs.core.rest(arglist__7581);
return G__7578__delegate(n,shift,_);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
,(function() { 
var G__7582__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__7582 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7583__i = 0, G__7583__a = new Array(arguments.length -  1);
while (G__7583__i < G__7583__a.length) {G__7583__a[G__7583__i] = arguments[G__7583__i + 1]; ++G__7583__i;}
  _ = new cljs.core.IndexedSeq(G__7583__a,0,null);
} 
return G__7582__delegate.call(this,n,_);};
G__7582.cljs$lang$maxFixedArity = 1;
G__7582.cljs$lang$applyTo = (function (arglist__7585){
var n = cljs.core.first(arglist__7585);
var _ = cljs.core.rest(arglist__7585);
return G__7582__delegate(n,_);
});
G__7582.cljs$core$IFn$_invoke$arity$variadic = G__7582__delegate;
return G__7582;
})()
,(function() { 
var G__7586__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7586 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7587__i = 0, G__7587__a = new Array(arguments.length -  2);
while (G__7587__i < G__7587__a.length) {G__7587__a[G__7587__i] = arguments[G__7587__i + 2]; ++G__7587__i;}
  _ = new cljs.core.IndexedSeq(G__7587__a,0,null);
} 
return G__7586__delegate.call(this,n,other,_);};
G__7586.cljs$lang$maxFixedArity = 2;
G__7586.cljs$lang$applyTo = (function (arglist__7588){
var n = cljs.core.first(arglist__7588);
arglist__7588 = cljs.core.next(arglist__7588);
var other = cljs.core.first(arglist__7588);
var _ = cljs.core.rest(arglist__7588);
return G__7586__delegate(n,other,_);
});
G__7586.cljs$core$IFn$_invoke$arity$variadic = G__7586__delegate;
return G__7586;
})()
,(function() { 
var G__7589__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7589 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7590__i = 0, G__7590__a = new Array(arguments.length -  2);
while (G__7590__i < G__7590__a.length) {G__7590__a[G__7590__i] = arguments[G__7590__i + 2]; ++G__7590__i;}
  _ = new cljs.core.IndexedSeq(G__7590__a,0,null);
} 
return G__7589__delegate.call(this,n,other,_);};
G__7589.cljs$lang$maxFixedArity = 2;
G__7589.cljs$lang$applyTo = (function (arglist__7591){
var n = cljs.core.first(arglist__7591);
arglist__7591 = cljs.core.next(arglist__7591);
var other = cljs.core.first(arglist__7591);
var _ = cljs.core.rest(arglist__7591);
return G__7589__delegate(n,other,_);
});
G__7589.cljs$core$IFn$_invoke$arity$variadic = G__7589__delegate;
return G__7589;
})()
,(function() { 
var G__7592__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_unset(n,idx);
};
var G__7592 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7593__i = 0, G__7593__a = new Array(arguments.length -  2);
while (G__7593__i < G__7593__a.length) {G__7593__a[G__7593__i] = arguments[G__7593__i + 2]; ++G__7593__i;}
  _ = new cljs.core.IndexedSeq(G__7593__a,0,null);
} 
return G__7592__delegate.call(this,n,idx,_);};
G__7592.cljs$lang$maxFixedArity = 2;
G__7592.cljs$lang$applyTo = (function (arglist__7594){
var n = cljs.core.first(arglist__7594);
arglist__7594 = cljs.core.next(arglist__7594);
var idx = cljs.core.first(arglist__7594);
var _ = cljs.core.rest(arglist__7594);
return G__7592__delegate(n,idx,_);
});
G__7592.cljs$core$IFn$_invoke$arity$variadic = G__7592__delegate;
return G__7592;
})()
,(function() { 
var G__7595__delegate = function (n,other,_){
return (n - other);
};
var G__7595 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7596__i = 0, G__7596__a = new Array(arguments.length -  2);
while (G__7596__i < G__7596__a.length) {G__7596__a[G__7596__i] = arguments[G__7596__i + 2]; ++G__7596__i;}
  _ = new cljs.core.IndexedSeq(G__7596__a,0,null);
} 
return G__7595__delegate.call(this,n,other,_);};
G__7595.cljs$lang$maxFixedArity = 2;
G__7595.cljs$lang$applyTo = (function (arglist__7597){
var n = cljs.core.first(arglist__7597);
arglist__7597 = cljs.core.next(arglist__7597);
var other = cljs.core.first(arglist__7597);
var _ = cljs.core.rest(arglist__7597);
return G__7595__delegate(n,other,_);
});
G__7595.cljs$core$IFn$_invoke$arity$variadic = G__7595__delegate;
return G__7595;
})()
,(function() { 
var G__7598__delegate = function (n,other,_){
return (n * other);
};
var G__7598 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7599__i = 0, G__7599__a = new Array(arguments.length -  2);
while (G__7599__i < G__7599__a.length) {G__7599__a[G__7599__i] = arguments[G__7599__i + 2]; ++G__7599__i;}
  _ = new cljs.core.IndexedSeq(G__7599__a,0,null);
} 
return G__7598__delegate.call(this,n,other,_);};
G__7598.cljs$lang$maxFixedArity = 2;
G__7598.cljs$lang$applyTo = (function (arglist__7600){
var n = cljs.core.first(arglist__7600);
arglist__7600 = cljs.core.next(arglist__7600);
var other = cljs.core.first(arglist__7600);
var _ = cljs.core.rest(arglist__7600);
return G__7598__delegate(n,other,_);
});
G__7598.cljs$core$IFn$_invoke$arity$variadic = G__7598__delegate;
return G__7598;
})()
,(function() { 
var G__7601__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_and(n,other);
};
var G__7601 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7602__i = 0, G__7602__a = new Array(arguments.length -  2);
while (G__7602__i < G__7602__a.length) {G__7602__a[G__7602__i] = arguments[G__7602__i + 2]; ++G__7602__i;}
  _ = new cljs.core.IndexedSeq(G__7602__a,0,null);
} 
return G__7601__delegate.call(this,n,other,_);};
G__7601.cljs$lang$maxFixedArity = 2;
G__7601.cljs$lang$applyTo = (function (arglist__7603){
var n = cljs.core.first(arglist__7603);
arglist__7603 = cljs.core.next(arglist__7603);
var other = cljs.core.first(arglist__7603);
var _ = cljs.core.rest(arglist__7603);
return G__7601__delegate(n,other,_);
});
G__7601.cljs$core$IFn$_invoke$arity$variadic = G__7601__delegate;
return G__7601;
})()
,(function() { 
var G__7604__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_right_shift(n,shift);
};
var G__7604 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7605__i = 0, G__7605__a = new Array(arguments.length -  2);
while (G__7605__i < G__7605__a.length) {G__7605__a[G__7605__i] = arguments[G__7605__i + 2]; ++G__7605__i;}
  _ = new cljs.core.IndexedSeq(G__7605__a,0,null);
} 
return G__7604__delegate.call(this,n,shift,_);};
G__7604.cljs$lang$maxFixedArity = 2;
G__7604.cljs$lang$applyTo = (function (arglist__7606){
var n = cljs.core.first(arglist__7606);
arglist__7606 = cljs.core.next(arglist__7606);
var shift = cljs.core.first(arglist__7606);
var _ = cljs.core.rest(arglist__7606);
return G__7604__delegate(n,shift,_);
});
G__7604.cljs$core$IFn$_invoke$arity$variadic = G__7604__delegate;
return G__7604;
})()
,(function() { 
var G__7607__delegate = function (n,other,_){
return (n / other);
};
var G__7607 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7608__i = 0, G__7608__a = new Array(arguments.length -  2);
while (G__7608__i < G__7608__a.length) {G__7608__a[G__7608__i] = arguments[G__7608__i + 2]; ++G__7608__i;}
  _ = new cljs.core.IndexedSeq(G__7608__a,0,null);
} 
return G__7607__delegate.call(this,n,other,_);};
G__7607.cljs$lang$maxFixedArity = 2;
G__7607.cljs$lang$applyTo = (function (arglist__7609){
var n = cljs.core.first(arglist__7609);
arglist__7609 = cljs.core.next(arglist__7609);
var other = cljs.core.first(arglist__7609);
var _ = cljs.core.rest(arglist__7609);
return G__7607__delegate(n,other,_);
});
G__7607.cljs$core$IFn$_invoke$arity$variadic = G__7607__delegate;
return G__7607;
})()
,(function() { 
var G__7610__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7610 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7611__i = 0, G__7611__a = new Array(arguments.length -  1);
while (G__7611__i < G__7611__a.length) {G__7611__a[G__7611__i] = arguments[G__7611__i + 1]; ++G__7611__i;}
  _ = new cljs.core.IndexedSeq(G__7611__a,0,null);
} 
return G__7610__delegate.call(this,n,_);};
G__7610.cljs$lang$maxFixedArity = 1;
G__7610.cljs$lang$applyTo = (function (arglist__7613){
var n = cljs.core.first(arglist__7613);
var _ = cljs.core.rest(arglist__7613);
return G__7610__delegate(n,_);
});
G__7610.cljs$core$IFn$_invoke$arity$variadic = G__7610__delegate;
return G__7610;
})()
,(function() { 
var G__7614__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_right(n,shift);
};
var G__7614 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7615__i = 0, G__7615__a = new Array(arguments.length -  2);
while (G__7615__i < G__7615__a.length) {G__7615__a[G__7615__i] = arguments[G__7615__i + 2]; ++G__7615__i;}
  _ = new cljs.core.IndexedSeq(G__7615__a,0,null);
} 
return G__7614__delegate.call(this,n,shift,_);};
G__7614.cljs$lang$maxFixedArity = 2;
G__7614.cljs$lang$applyTo = (function (arglist__7616){
var n = cljs.core.first(arglist__7616);
arglist__7616 = cljs.core.next(arglist__7616);
var shift = cljs.core.first(arglist__7616);
var _ = cljs.core.rest(arglist__7616);
return G__7614__delegate(n,shift,_);
});
G__7614.cljs$core$IFn$_invoke$arity$variadic = G__7614__delegate;
return G__7614;
})()
,(function() { 
var G__7617__delegate = function (n,_){
return nex.interpreter.nex_bitwise_not(n);
};
var G__7617 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7618__i = 0, G__7618__a = new Array(arguments.length -  1);
while (G__7618__i < G__7618__a.length) {G__7618__a[G__7618__i] = arguments[G__7618__i + 1]; ++G__7618__i;}
  _ = new cljs.core.IndexedSeq(G__7618__a,0,null);
} 
return G__7617__delegate.call(this,n,_);};
G__7617.cljs$lang$maxFixedArity = 1;
G__7617.cljs$lang$applyTo = (function (arglist__7619){
var n = cljs.core.first(arglist__7619);
var _ = cljs.core.rest(arglist__7619);
return G__7617__delegate(n,_);
});
G__7617.cljs$core$IFn$_invoke$arity$variadic = G__7617__delegate;
return G__7617;
})()
,(function() { 
var G__7620__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_left_shift(n,shift);
};
var G__7620 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7621__i = 0, G__7621__a = new Array(arguments.length -  2);
while (G__7621__i < G__7621__a.length) {G__7621__a[G__7621__i] = arguments[G__7621__i + 2]; ++G__7621__i;}
  _ = new cljs.core.IndexedSeq(G__7621__a,0,null);
} 
return G__7620__delegate.call(this,n,shift,_);};
G__7620.cljs$lang$maxFixedArity = 2;
G__7620.cljs$lang$applyTo = (function (arglist__7622){
var n = cljs.core.first(arglist__7622);
arglist__7622 = cljs.core.next(arglist__7622);
var shift = cljs.core.first(arglist__7622);
var _ = cljs.core.rest(arglist__7622);
return G__7620__delegate(n,shift,_);
});
G__7620.cljs$core$IFn$_invoke$arity$variadic = G__7620__delegate;
return G__7620;
})()
,(function() { 
var G__7623__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_is_set(n,idx);
};
var G__7623 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7624__i = 0, G__7624__a = new Array(arguments.length -  2);
while (G__7624__i < G__7624__a.length) {G__7624__a[G__7624__i] = arguments[G__7624__i + 2]; ++G__7624__i;}
  _ = new cljs.core.IndexedSeq(G__7624__a,0,null);
} 
return G__7623__delegate.call(this,n,idx,_);};
G__7623.cljs$lang$maxFixedArity = 2;
G__7623.cljs$lang$applyTo = (function (arglist__7625){
var n = cljs.core.first(arglist__7625);
arglist__7625 = cljs.core.next(arglist__7625);
var idx = cljs.core.first(arglist__7625);
var _ = cljs.core.rest(arglist__7625);
return G__7623__delegate(n,idx,_);
});
G__7623.cljs$core$IFn$_invoke$arity$variadic = G__7623__delegate;
return G__7623;
})()
,(function() { 
var G__7626__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7626 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7627__i = 0, G__7627__a = new Array(arguments.length -  2);
while (G__7627__i < G__7627__a.length) {G__7627__a[G__7627__i] = arguments[G__7627__i + 2]; ++G__7627__i;}
  _ = new cljs.core.IndexedSeq(G__7627__a,0,null);
} 
return G__7626__delegate.call(this,n,other,_);};
G__7626.cljs$lang$maxFixedArity = 2;
G__7626.cljs$lang$applyTo = (function (arglist__7628){
var n = cljs.core.first(arglist__7628);
arglist__7628 = cljs.core.next(arglist__7628);
var other = cljs.core.first(arglist__7628);
var _ = cljs.core.rest(arglist__7628);
return G__7626__delegate(n,other,_);
});
G__7626.cljs$core$IFn$_invoke$arity$variadic = G__7626__delegate;
return G__7626;
})()
,(function() { 
var G__7629__delegate = function (n,other,_){
return (n >= other);
};
var G__7629 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7630__i = 0, G__7630__a = new Array(arguments.length -  2);
while (G__7630__i < G__7630__a.length) {G__7630__a[G__7630__i] = arguments[G__7630__i + 2]; ++G__7630__i;}
  _ = new cljs.core.IndexedSeq(G__7630__a,0,null);
} 
return G__7629__delegate.call(this,n,other,_);};
G__7629.cljs$lang$maxFixedArity = 2;
G__7629.cljs$lang$applyTo = (function (arglist__7631){
var n = cljs.core.first(arglist__7631);
arglist__7631 = cljs.core.next(arglist__7631);
var other = cljs.core.first(arglist__7631);
var _ = cljs.core.rest(arglist__7631);
return G__7629__delegate(n,other,_);
});
G__7629.cljs$core$IFn$_invoke$arity$variadic = G__7629__delegate;
return G__7629;
})()
,(function() { 
var G__7632__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_left(n,shift);
};
var G__7632 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7633__i = 0, G__7633__a = new Array(arguments.length -  2);
while (G__7633__i < G__7633__a.length) {G__7633__a[G__7633__i] = arguments[G__7633__i + 2]; ++G__7633__i;}
  _ = new cljs.core.IndexedSeq(G__7633__a,0,null);
} 
return G__7632__delegate.call(this,n,shift,_);};
G__7632.cljs$lang$maxFixedArity = 2;
G__7632.cljs$lang$applyTo = (function (arglist__7634){
var n = cljs.core.first(arglist__7634);
arglist__7634 = cljs.core.next(arglist__7634);
var shift = cljs.core.first(arglist__7634);
var _ = cljs.core.rest(arglist__7634);
return G__7632__delegate(n,shift,_);
});
G__7632.cljs$core$IFn$_invoke$arity$variadic = G__7632__delegate;
return G__7632;
})()
,(function() { 
var G__7635__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_xor(n,other);
};
var G__7635 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7636__i = 0, G__7636__a = new Array(arguments.length -  2);
while (G__7636__i < G__7636__a.length) {G__7636__a[G__7636__i] = arguments[G__7636__i + 2]; ++G__7636__i;}
  _ = new cljs.core.IndexedSeq(G__7636__a,0,null);
} 
return G__7635__delegate.call(this,n,other,_);};
G__7635.cljs$lang$maxFixedArity = 2;
G__7635.cljs$lang$applyTo = (function (arglist__7637){
var n = cljs.core.first(arglist__7637);
arglist__7637 = cljs.core.next(arglist__7637);
var other = cljs.core.first(arglist__7637);
var _ = cljs.core.rest(arglist__7637);
return G__7635__delegate(n,other,_);
});
G__7635.cljs$core$IFn$_invoke$arity$variadic = G__7635__delegate;
return G__7635;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7639__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7639 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7640__i = 0, G__7640__a = new Array(arguments.length -  1);
while (G__7640__i < G__7640__a.length) {G__7640__a[G__7640__i] = arguments[G__7640__i + 1]; ++G__7640__i;}
  _ = new cljs.core.IndexedSeq(G__7640__a,0,null);
} 
return G__7639__delegate.call(this,c,_);};
G__7639.cljs$lang$maxFixedArity = 1;
G__7639.cljs$lang$applyTo = (function (arglist__7641){
var c = cljs.core.first(arglist__7641);
var _ = cljs.core.rest(arglist__7641);
return G__7639__delegate(c,_);
});
G__7639.cljs$core$IFn$_invoke$arity$variadic = G__7639__delegate;
return G__7639;
})()
,"item",(function() { 
var G__7642__delegate = function (c,_){
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
var G__7642 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7643__i = 0, G__7643__a = new Array(arguments.length -  1);
while (G__7643__i < G__7643__a.length) {G__7643__a[G__7643__i] = arguments[G__7643__i + 1]; ++G__7643__i;}
  _ = new cljs.core.IndexedSeq(G__7643__a,0,null);
} 
return G__7642__delegate.call(this,c,_);};
G__7642.cljs$lang$maxFixedArity = 1;
G__7642.cljs$lang$applyTo = (function (arglist__7644){
var c = cljs.core.first(arglist__7644);
var _ = cljs.core.rest(arglist__7644);
return G__7642__delegate(c,_);
});
G__7642.cljs$core$IFn$_invoke$arity$variadic = G__7642__delegate;
return G__7642;
})()
,"next",(function() { 
var G__7645__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7645 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7646__i = 0, G__7646__a = new Array(arguments.length -  1);
while (G__7646__i < G__7646__a.length) {G__7646__a[G__7646__i] = arguments[G__7646__i + 1]; ++G__7646__i;}
  _ = new cljs.core.IndexedSeq(G__7646__a,0,null);
} 
return G__7645__delegate.call(this,c,_);};
G__7645.cljs$lang$maxFixedArity = 1;
G__7645.cljs$lang$applyTo = (function (arglist__7647){
var c = cljs.core.first(arglist__7647);
var _ = cljs.core.rest(arglist__7647);
return G__7645__delegate(c,_);
});
G__7645.cljs$core$IFn$_invoke$arity$variadic = G__7645__delegate;
return G__7645;
})()
,"at_end",(function() { 
var G__7648__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7648 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7649__i = 0, G__7649__a = new Array(arguments.length -  1);
while (G__7649__i < G__7649__a.length) {G__7649__a[G__7649__i] = arguments[G__7649__i + 1]; ++G__7649__i;}
  _ = new cljs.core.IndexedSeq(G__7649__a,0,null);
} 
return G__7648__delegate.call(this,c,_);};
G__7648.cljs$lang$maxFixedArity = 1;
G__7648.cljs$lang$applyTo = (function (arglist__7650){
var c = cljs.core.first(arglist__7650);
var _ = cljs.core.rest(arglist__7650);
return G__7648__delegate(c,_);
});
G__7648.cljs$core$IFn$_invoke$arity$variadic = G__7648__delegate;
return G__7648;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7651__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7651 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7652__i = 0, G__7652__a = new Array(arguments.length -  2);
while (G__7652__i < G__7652__a.length) {G__7652__a[G__7652__i] = arguments[G__7652__i + 2]; ++G__7652__i;}
  _ = new cljs.core.IndexedSeq(G__7652__a,0,null);
} 
return G__7651__delegate.call(this,n,other,_);};
G__7651.cljs$lang$maxFixedArity = 2;
G__7651.cljs$lang$applyTo = (function (arglist__7653){
var n = cljs.core.first(arglist__7653);
arglist__7653 = cljs.core.next(arglist__7653);
var other = cljs.core.first(arglist__7653);
var _ = cljs.core.rest(arglist__7653);
return G__7651__delegate(n,other,_);
});
G__7651.cljs$core$IFn$_invoke$arity$variadic = G__7651__delegate;
return G__7651;
})()
,(function() { 
var G__7654__delegate = function (n,other,_){
return (n <= other);
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
var G__7657__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7657 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7658__i = 0, G__7658__a = new Array(arguments.length -  2);
while (G__7658__i < G__7658__a.length) {G__7658__a[G__7658__i] = arguments[G__7658__i + 2]; ++G__7658__i;}
  _ = new cljs.core.IndexedSeq(G__7658__a,0,null);
} 
return G__7657__delegate.call(this,n,other,_);};
G__7657.cljs$lang$maxFixedArity = 2;
G__7657.cljs$lang$applyTo = (function (arglist__7659){
var n = cljs.core.first(arglist__7659);
arglist__7659 = cljs.core.next(arglist__7659);
var other = cljs.core.first(arglist__7659);
var _ = cljs.core.rest(arglist__7659);
return G__7657__delegate(n,other,_);
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
var G__7661__i = 0, G__7661__a = new Array(arguments.length -  2);
while (G__7661__i < G__7661__a.length) {G__7661__a[G__7661__i] = arguments[G__7661__i + 2]; ++G__7661__i;}
  _ = new cljs.core.IndexedSeq(G__7661__a,0,null);
} 
return G__7660__delegate.call(this,n,other,_);};
G__7660.cljs$lang$maxFixedArity = 2;
G__7660.cljs$lang$applyTo = (function (arglist__7662){
var n = cljs.core.first(arglist__7662);
arglist__7662 = cljs.core.next(arglist__7662);
var other = cljs.core.first(arglist__7662);
var _ = cljs.core.rest(arglist__7662);
return G__7660__delegate(n,other,_);
});
G__7660.cljs$core$IFn$_invoke$arity$variadic = G__7660__delegate;
return G__7660;
})()
,(function() { 
var G__7663__delegate = function (n,other,_){
return (n + other);
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
var G__7666__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7666 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7667__i = 0, G__7667__a = new Array(arguments.length -  1);
while (G__7667__i < G__7667__a.length) {G__7667__a[G__7667__i] = arguments[G__7667__i + 1]; ++G__7667__i;}
  _ = new cljs.core.IndexedSeq(G__7667__a,0,null);
} 
return G__7666__delegate.call(this,n,_);};
G__7666.cljs$lang$maxFixedArity = 1;
G__7666.cljs$lang$applyTo = (function (arglist__7668){
var n = cljs.core.first(arglist__7668);
var _ = cljs.core.rest(arglist__7668);
return G__7666__delegate(n,_);
});
G__7666.cljs$core$IFn$_invoke$arity$variadic = G__7666__delegate;
return G__7666;
})()
,(function() { 
var G__7669__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7669 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7670__i = 0, G__7670__a = new Array(arguments.length -  1);
while (G__7670__i < G__7670__a.length) {G__7670__a[G__7670__i] = arguments[G__7670__i + 1]; ++G__7670__i;}
  _ = new cljs.core.IndexedSeq(G__7670__a,0,null);
} 
return G__7669__delegate.call(this,n,_);};
G__7669.cljs$lang$maxFixedArity = 1;
G__7669.cljs$lang$applyTo = (function (arglist__7671){
var n = cljs.core.first(arglist__7671);
var _ = cljs.core.rest(arglist__7671);
return G__7669__delegate(n,_);
});
G__7669.cljs$core$IFn$_invoke$arity$variadic = G__7669__delegate;
return G__7669;
})()
,(function() { 
var G__7672__delegate = function (n,other,_){
return (n > other);
};
var G__7672 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7673__i = 0, G__7673__a = new Array(arguments.length -  2);
while (G__7673__i < G__7673__a.length) {G__7673__a[G__7673__i] = arguments[G__7673__i + 2]; ++G__7673__i;}
  _ = new cljs.core.IndexedSeq(G__7673__a,0,null);
} 
return G__7672__delegate.call(this,n,other,_);};
G__7672.cljs$lang$maxFixedArity = 2;
G__7672.cljs$lang$applyTo = (function (arglist__7674){
var n = cljs.core.first(arglist__7674);
arglist__7674 = cljs.core.next(arglist__7674);
var other = cljs.core.first(arglist__7674);
var _ = cljs.core.rest(arglist__7674);
return G__7672__delegate(n,other,_);
});
G__7672.cljs$core$IFn$_invoke$arity$variadic = G__7672__delegate;
return G__7672;
})()
,(function() { 
var G__7675__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
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
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
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
return (n - other);
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
var G__7684__delegate = function (n,other,_){
return (n * other);
};
var G__7684 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7685__i = 0, G__7685__a = new Array(arguments.length -  2);
while (G__7685__i < G__7685__a.length) {G__7685__a[G__7685__i] = arguments[G__7685__i + 2]; ++G__7685__i;}
  _ = new cljs.core.IndexedSeq(G__7685__a,0,null);
} 
return G__7684__delegate.call(this,n,other,_);};
G__7684.cljs$lang$maxFixedArity = 2;
G__7684.cljs$lang$applyTo = (function (arglist__7686){
var n = cljs.core.first(arglist__7686);
arglist__7686 = cljs.core.next(arglist__7686);
var other = cljs.core.first(arglist__7686);
var _ = cljs.core.rest(arglist__7686);
return G__7684__delegate(n,other,_);
});
G__7684.cljs$core$IFn$_invoke$arity$variadic = G__7684__delegate;
return G__7684;
})()
,(function() { 
var G__7687__delegate = function (n,other,_){
return (n / other);
};
var G__7687 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7688__i = 0, G__7688__a = new Array(arguments.length -  2);
while (G__7688__i < G__7688__a.length) {G__7688__a[G__7688__i] = arguments[G__7688__i + 2]; ++G__7688__i;}
  _ = new cljs.core.IndexedSeq(G__7688__a,0,null);
} 
return G__7687__delegate.call(this,n,other,_);};
G__7687.cljs$lang$maxFixedArity = 2;
G__7687.cljs$lang$applyTo = (function (arglist__7689){
var n = cljs.core.first(arglist__7689);
arglist__7689 = cljs.core.next(arglist__7689);
var other = cljs.core.first(arglist__7689);
var _ = cljs.core.rest(arglist__7689);
return G__7687__delegate(n,other,_);
});
G__7687.cljs$core$IFn$_invoke$arity$variadic = G__7687__delegate;
return G__7687;
})()
,(function() { 
var G__7690__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7690 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7692__i = 0, G__7692__a = new Array(arguments.length -  1);
while (G__7692__i < G__7692__a.length) {G__7692__a[G__7692__i] = arguments[G__7692__i + 1]; ++G__7692__i;}
  _ = new cljs.core.IndexedSeq(G__7692__a,0,null);
} 
return G__7690__delegate.call(this,n,_);};
G__7690.cljs$lang$maxFixedArity = 1;
G__7690.cljs$lang$applyTo = (function (arglist__7693){
var n = cljs.core.first(arglist__7693);
var _ = cljs.core.rest(arglist__7693);
return G__7690__delegate(n,_);
});
G__7690.cljs$core$IFn$_invoke$arity$variadic = G__7690__delegate;
return G__7690;
})()
,(function() { 
var G__7695__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7695 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7696__i = 0, G__7696__a = new Array(arguments.length -  1);
while (G__7696__i < G__7696__a.length) {G__7696__a[G__7696__i] = arguments[G__7696__i + 1]; ++G__7696__i;}
  _ = new cljs.core.IndexedSeq(G__7696__a,0,null);
} 
return G__7695__delegate.call(this,n,_);};
G__7695.cljs$lang$maxFixedArity = 1;
G__7695.cljs$lang$applyTo = (function (arglist__7697){
var n = cljs.core.first(arglist__7697);
var _ = cljs.core.rest(arglist__7697);
return G__7695__delegate(n,_);
});
G__7695.cljs$core$IFn$_invoke$arity$variadic = G__7695__delegate;
return G__7695;
})()
,(function() { 
var G__7698__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7698 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7700__i = 0, G__7700__a = new Array(arguments.length -  2);
while (G__7700__i < G__7700__a.length) {G__7700__a[G__7700__i] = arguments[G__7700__i + 2]; ++G__7700__i;}
  _ = new cljs.core.IndexedSeq(G__7700__a,0,null);
} 
return G__7698__delegate.call(this,n,other,_);};
G__7698.cljs$lang$maxFixedArity = 2;
G__7698.cljs$lang$applyTo = (function (arglist__7702){
var n = cljs.core.first(arglist__7702);
arglist__7702 = cljs.core.next(arglist__7702);
var other = cljs.core.first(arglist__7702);
var _ = cljs.core.rest(arglist__7702);
return G__7698__delegate(n,other,_);
});
G__7698.cljs$core$IFn$_invoke$arity$variadic = G__7698__delegate;
return G__7698;
})()
,(function() { 
var G__7703__delegate = function (n,other,_){
return (n >= other);
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
]),new cljs.core.PersistentArrayMap(null, 4, ["await",(function() { 
var G__7706__delegate = function (t,p__6338){
var vec__6339 = p__6338;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6339,(0),null);
var result = (((!((timeout == null))))?nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2(t,timeout):nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,nex.interpreter.task_timeout_signal)){
return null;
} else {
return result;
}
};
var G__7706 = function (t,var_args){
var p__6338 = null;
if (arguments.length > 1) {
var G__7707__i = 0, G__7707__a = new Array(arguments.length -  1);
while (G__7707__i < G__7707__a.length) {G__7707__a[G__7707__i] = arguments[G__7707__i + 1]; ++G__7707__i;}
  p__6338 = new cljs.core.IndexedSeq(G__7707__a,0,null);
} 
return G__7706__delegate.call(this,t,p__6338);};
G__7706.cljs$lang$maxFixedArity = 1;
G__7706.cljs$lang$applyTo = (function (arglist__7708){
var t = cljs.core.first(arglist__7708);
var p__6338 = cljs.core.rest(arglist__7708);
return G__7706__delegate(t,p__6338);
});
G__7706.cljs$core$IFn$_invoke$arity$variadic = G__7706__delegate;
return G__7706;
})()
,"cancel",(function() { 
var G__7713__delegate = function (t,_){
return nex.interpreter.task_cancel(t);
};
var G__7713 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7715__i = 0, G__7715__a = new Array(arguments.length -  1);
while (G__7715__i < G__7715__a.length) {G__7715__a[G__7715__i] = arguments[G__7715__i + 1]; ++G__7715__i;}
  _ = new cljs.core.IndexedSeq(G__7715__a,0,null);
} 
return G__7713__delegate.call(this,t,_);};
G__7713.cljs$lang$maxFixedArity = 1;
G__7713.cljs$lang$applyTo = (function (arglist__7716){
var t = cljs.core.first(arglist__7716);
var _ = cljs.core.rest(arglist__7716);
return G__7713__delegate(t,_);
});
G__7713.cljs$core$IFn$_invoke$arity$variadic = G__7713__delegate;
return G__7713;
})()
,"is_done",(function() { 
var G__7722__delegate = function (t,_){
return cljs.core.deref(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(t));
};
var G__7722 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7725__i = 0, G__7725__a = new Array(arguments.length -  1);
while (G__7725__i < G__7725__a.length) {G__7725__a[G__7725__i] = arguments[G__7725__i + 1]; ++G__7725__i;}
  _ = new cljs.core.IndexedSeq(G__7725__a,0,null);
} 
return G__7722__delegate.call(this,t,_);};
G__7722.cljs$lang$maxFixedArity = 1;
G__7722.cljs$lang$applyTo = (function (arglist__7730){
var t = cljs.core.first(arglist__7730);
var _ = cljs.core.rest(arglist__7730);
return G__7722__delegate(t,_);
});
G__7722.cljs$core$IFn$_invoke$arity$variadic = G__7722__delegate;
return G__7722;
})()
,"is_cancelled",(function() { 
var G__7732__delegate = function (t,_){
return nex.interpreter.task_cancelled_QMARK_(t);
};
var G__7732 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7737__i = 0, G__7737__a = new Array(arguments.length -  1);
while (G__7737__i < G__7737__a.length) {G__7737__a[G__7737__i] = arguments[G__7737__i + 1]; ++G__7737__i;}
  _ = new cljs.core.IndexedSeq(G__7737__a,0,null);
} 
return G__7732__delegate.call(this,t,_);};
G__7732.cljs$lang$maxFixedArity = 1;
G__7732.cljs$lang$applyTo = (function (arglist__7738){
var t = cljs.core.first(arglist__7738);
var _ = cljs.core.rest(arglist__7738);
return G__7732__delegate(t,_);
});
G__7732.cljs$core$IFn$_invoke$arity$variadic = G__7732__delegate;
return G__7732;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7739__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7739 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7741__i = 0, G__7741__a = new Array(arguments.length -  1);
while (G__7741__i < G__7741__a.length) {G__7741__a[G__7741__i] = arguments[G__7741__i + 1]; ++G__7741__i;}
  _ = new cljs.core.IndexedSeq(G__7741__a,0,null);
} 
return G__7739__delegate.call(this,c,_);};
G__7739.cljs$lang$maxFixedArity = 1;
G__7739.cljs$lang$applyTo = (function (arglist__7742){
var c = cljs.core.first(arglist__7742);
var _ = cljs.core.rest(arglist__7742);
return G__7739__delegate(c,_);
});
G__7739.cljs$core$IFn$_invoke$arity$variadic = G__7739__delegate;
return G__7739;
})()
,"item",(function() { 
var G__7743__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7743 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7744__i = 0, G__7744__a = new Array(arguments.length -  1);
while (G__7744__i < G__7744__a.length) {G__7744__a[G__7744__i] = arguments[G__7744__i + 1]; ++G__7744__i;}
  _ = new cljs.core.IndexedSeq(G__7744__a,0,null);
} 
return G__7743__delegate.call(this,c,_);};
G__7743.cljs$lang$maxFixedArity = 1;
G__7743.cljs$lang$applyTo = (function (arglist__7745){
var c = cljs.core.first(arglist__7745);
var _ = cljs.core.rest(arglist__7745);
return G__7743__delegate(c,_);
});
G__7743.cljs$core$IFn$_invoke$arity$variadic = G__7743__delegate;
return G__7743;
})()
,"next",(function() { 
var G__7746__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7746 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7747__i = 0, G__7747__a = new Array(arguments.length -  1);
while (G__7747__i < G__7747__a.length) {G__7747__a[G__7747__i] = arguments[G__7747__i + 1]; ++G__7747__i;}
  _ = new cljs.core.IndexedSeq(G__7747__a,0,null);
} 
return G__7746__delegate.call(this,c,_);};
G__7746.cljs$lang$maxFixedArity = 1;
G__7746.cljs$lang$applyTo = (function (arglist__7748){
var c = cljs.core.first(arglist__7748);
var _ = cljs.core.rest(arglist__7748);
return G__7746__delegate(c,_);
});
G__7746.cljs$core$IFn$_invoke$arity$variadic = G__7746__delegate;
return G__7746;
})()
,"at_end",(function() { 
var G__7749__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7749 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7750__i = 0, G__7750__a = new Array(arguments.length -  1);
while (G__7750__i < G__7750__a.length) {G__7750__a[G__7750__i] = arguments[G__7750__i + 1]; ++G__7750__i;}
  _ = new cljs.core.IndexedSeq(G__7750__a,0,null);
} 
return G__7749__delegate.call(this,c,_);};
G__7749.cljs$lang$maxFixedArity = 1;
G__7749.cljs$lang$applyTo = (function (arglist__7751){
var c = cljs.core.first(arglist__7751);
var _ = cljs.core.rest(arglist__7751);
return G__7749__delegate(c,_);
});
G__7749.cljs$core$IFn$_invoke$arity$variadic = G__7749__delegate;
return G__7749;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__7752__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7752 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7753__i = 0, G__7753__a = new Array(arguments.length -  2);
while (G__7753__i < G__7753__a.length) {G__7753__a[G__7753__i] = arguments[G__7753__i + 2]; ++G__7753__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7753__a,0,null);
} 
return G__7752__delegate.call(this,_,msg,___$1);};
G__7752.cljs$lang$maxFixedArity = 2;
G__7752.cljs$lang$applyTo = (function (arglist__7754){
var _ = cljs.core.first(arglist__7754);
arglist__7754 = cljs.core.next(arglist__7754);
var msg = cljs.core.first(arglist__7754);
var ___$1 = cljs.core.rest(arglist__7754);
return G__7752__delegate(_,msg,___$1);
});
G__7752.cljs$core$IFn$_invoke$arity$variadic = G__7752__delegate;
return G__7752;
})()
,"print_line",(function() { 
var G__7755__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7755 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7756__i = 0, G__7756__a = new Array(arguments.length -  2);
while (G__7756__i < G__7756__a.length) {G__7756__a[G__7756__i] = arguments[G__7756__i + 2]; ++G__7756__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7756__a,0,null);
} 
return G__7755__delegate.call(this,_,msg,___$1);};
G__7755.cljs$lang$maxFixedArity = 2;
G__7755.cljs$lang$applyTo = (function (arglist__7757){
var _ = cljs.core.first(arglist__7757);
arglist__7757 = cljs.core.next(arglist__7757);
var msg = cljs.core.first(arglist__7757);
var ___$1 = cljs.core.rest(arglist__7757);
return G__7755__delegate(_,msg,___$1);
});
G__7755.cljs$core$IFn$_invoke$arity$variadic = G__7755__delegate;
return G__7755;
})()
,"read_line",(function() { 
var G__7758__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__7758 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__7759__i = 0, G__7759__a = new Array(arguments.length -  1);
while (G__7759__i < G__7759__a.length) {G__7759__a[G__7759__i] = arguments[G__7759__i + 1]; ++G__7759__i;}
  args = new cljs.core.IndexedSeq(G__7759__a,0,null);
} 
return G__7758__delegate.call(this,_,args);};
G__7758.cljs$lang$maxFixedArity = 1;
G__7758.cljs$lang$applyTo = (function (arglist__7760){
var _ = cljs.core.first(arglist__7760);
var args = cljs.core.rest(arglist__7760);
return G__7758__delegate(_,args);
});
G__7758.cljs$core$IFn$_invoke$arity$variadic = G__7758__delegate;
return G__7758;
})()
,"error",(function() { 
var G__7761__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7761 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7762__i = 0, G__7762__a = new Array(arguments.length -  2);
while (G__7762__i < G__7762__a.length) {G__7762__a[G__7762__i] = arguments[G__7762__i + 2]; ++G__7762__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7762__a,0,null);
} 
return G__7761__delegate.call(this,_,msg,___$1);};
G__7761.cljs$lang$maxFixedArity = 2;
G__7761.cljs$lang$applyTo = (function (arglist__7763){
var _ = cljs.core.first(arglist__7763);
arglist__7763 = cljs.core.next(arglist__7763);
var msg = cljs.core.first(arglist__7763);
var ___$1 = cljs.core.rest(arglist__7763);
return G__7761__delegate(_,msg,___$1);
});
G__7761.cljs$core$IFn$_invoke$arity$variadic = G__7761__delegate;
return G__7761;
})()
,"new_line",(function() { 
var G__7764__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__7764 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7765__i = 0, G__7765__a = new Array(arguments.length -  1);
while (G__7765__i < G__7765__a.length) {G__7765__a[G__7765__i] = arguments[G__7765__i + 1]; ++G__7765__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7765__a,0,null);
} 
return G__7764__delegate.call(this,_,___$1);};
G__7764.cljs$lang$maxFixedArity = 1;
G__7764.cljs$lang$applyTo = (function (arglist__7766){
var _ = cljs.core.first(arglist__7766);
var ___$1 = cljs.core.rest(arglist__7766);
return G__7764__delegate(_,___$1);
});
G__7764.cljs$core$IFn$_invoke$arity$variadic = G__7764__delegate;
return G__7764;
})()
,"read_integer",(function() { 
var G__7767__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__7767 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7773__i = 0, G__7773__a = new Array(arguments.length -  1);
while (G__7773__i < G__7773__a.length) {G__7773__a[G__7773__i] = arguments[G__7773__i + 1]; ++G__7773__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7773__a,0,null);
} 
return G__7767__delegate.call(this,_,___$1);};
G__7767.cljs$lang$maxFixedArity = 1;
G__7767.cljs$lang$applyTo = (function (arglist__7774){
var _ = cljs.core.first(arglist__7774);
var ___$1 = cljs.core.rest(arglist__7774);
return G__7767__delegate(_,___$1);
});
G__7767.cljs$core$IFn$_invoke$arity$variadic = G__7767__delegate;
return G__7767;
})()
,"read_real",(function() { 
var G__7775__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__7775 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7777__i = 0, G__7777__a = new Array(arguments.length -  1);
while (G__7777__i < G__7777__a.length) {G__7777__a[G__7777__i] = arguments[G__7777__i + 1]; ++G__7777__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7777__a,0,null);
} 
return G__7775__delegate.call(this,_,___$1);};
G__7775.cljs$lang$maxFixedArity = 1;
G__7775.cljs$lang$applyTo = (function (arglist__7781){
var _ = cljs.core.first(arglist__7781);
var ___$1 = cljs.core.rest(arglist__7781);
return G__7775__delegate(_,___$1);
});
G__7775.cljs$core$IFn$_invoke$arity$variadic = G__7775__delegate;
return G__7775;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__7785__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__7785 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7791__i = 0, G__7791__a = new Array(arguments.length -  4);
while (G__7791__i < G__7791__a.length) {G__7791__a[G__7791__i] = arguments[G__7791__i + 4]; ++G__7791__i;}
  _ = new cljs.core.IndexedSeq(G__7791__a,0,null);
} 
return G__7785__delegate.call(this,w,text,x,y,_);};
G__7785.cljs$lang$maxFixedArity = 4;
G__7785.cljs$lang$applyTo = (function (arglist__7793){
var w = cljs.core.first(arglist__7793);
arglist__7793 = cljs.core.next(arglist__7793);
var text = cljs.core.first(arglist__7793);
arglist__7793 = cljs.core.next(arglist__7793);
var x = cljs.core.first(arglist__7793);
arglist__7793 = cljs.core.next(arglist__7793);
var y = cljs.core.first(arglist__7793);
var _ = cljs.core.rest(arglist__7793);
return G__7785__delegate(w,text,x,y,_);
});
G__7785.cljs$core$IFn$_invoke$arity$variadic = G__7785__delegate;
return G__7785;
})()
,(function() { 
var G__7798__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__7798 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7799__i = 0, G__7799__a = new Array(arguments.length -  1);
while (G__7799__i < G__7799__a.length) {G__7799__a[G__7799__i] = arguments[G__7799__i + 1]; ++G__7799__i;}
  _ = new cljs.core.IndexedSeq(G__7799__a,0,null);
} 
return G__7798__delegate.call(this,w,_);};
G__7798.cljs$lang$maxFixedArity = 1;
G__7798.cljs$lang$applyTo = (function (arglist__7800){
var w = cljs.core.first(arglist__7800);
var _ = cljs.core.rest(arglist__7800);
return G__7798__delegate(w,_);
});
G__7798.cljs$core$IFn$_invoke$arity$variadic = G__7798__delegate;
return G__7798;
})()
,(function() { 
var G__7801__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__7801 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7802__i = 0, G__7802__a = new Array(arguments.length -  2);
while (G__7802__i < G__7802__a.length) {G__7802__a[G__7802__i] = arguments[G__7802__i + 2]; ++G__7802__i;}
  _ = new cljs.core.IndexedSeq(G__7802__a,0,null);
} 
return G__7801__delegate.call(this,w,size,_);};
G__7801.cljs$lang$maxFixedArity = 2;
G__7801.cljs$lang$applyTo = (function (arglist__7803){
var w = cljs.core.first(arglist__7803);
arglist__7803 = cljs.core.next(arglist__7803);
var size = cljs.core.first(arglist__7803);
var _ = cljs.core.rest(arglist__7803);
return G__7801__delegate(w,size,_);
});
G__7801.cljs$core$IFn$_invoke$arity$variadic = G__7801__delegate;
return G__7801;
})()
,(function() { 
var G__7804__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__7804 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__7805__i = 0, G__7805__a = new Array(arguments.length -  6);
while (G__7805__i < G__7805__a.length) {G__7805__a[G__7805__i] = arguments[G__7805__i + 6]; ++G__7805__i;}
  _ = new cljs.core.IndexedSeq(G__7805__a,0,null);
} 
return G__7804__delegate.call(this,w,img,x,y,width,height,_);};
G__7804.cljs$lang$maxFixedArity = 6;
G__7804.cljs$lang$applyTo = (function (arglist__7806){
var w = cljs.core.first(arglist__7806);
arglist__7806 = cljs.core.next(arglist__7806);
var img = cljs.core.first(arglist__7806);
arglist__7806 = cljs.core.next(arglist__7806);
var x = cljs.core.first(arglist__7806);
arglist__7806 = cljs.core.next(arglist__7806);
var y = cljs.core.first(arglist__7806);
arglist__7806 = cljs.core.next(arglist__7806);
var width = cljs.core.first(arglist__7806);
arglist__7806 = cljs.core.next(arglist__7806);
var height = cljs.core.first(arglist__7806);
var _ = cljs.core.rest(arglist__7806);
return G__7804__delegate(w,img,x,y,width,height,_);
});
G__7804.cljs$core$IFn$_invoke$arity$variadic = G__7804__delegate;
return G__7804;
})()
,(function() { 
var G__7807__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__7807 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7808__i = 0, G__7808__a = new Array(arguments.length -  1);
while (G__7808__i < G__7808__a.length) {G__7808__a[G__7808__i] = arguments[G__7808__i + 1]; ++G__7808__i;}
  _ = new cljs.core.IndexedSeq(G__7808__a,0,null);
} 
return G__7807__delegate.call(this,w,_);};
G__7807.cljs$lang$maxFixedArity = 1;
G__7807.cljs$lang$applyTo = (function (arglist__7809){
var w = cljs.core.first(arglist__7809);
var _ = cljs.core.rest(arglist__7809);
return G__7807__delegate(w,_);
});
G__7807.cljs$core$IFn$_invoke$arity$variadic = G__7807__delegate;
return G__7807;
})()
,(function() { 
var G__7810__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__7810 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7811__i = 0, G__7811__a = new Array(arguments.length -  4);
while (G__7811__i < G__7811__a.length) {G__7811__a[G__7811__i] = arguments[G__7811__i + 4]; ++G__7811__i;}
  _ = new cljs.core.IndexedSeq(G__7811__a,0,null);
} 
return G__7810__delegate.call(this,w,img,x,y,_);};
G__7810.cljs$lang$maxFixedArity = 4;
G__7810.cljs$lang$applyTo = (function (arglist__7812){
var w = cljs.core.first(arglist__7812);
arglist__7812 = cljs.core.next(arglist__7812);
var img = cljs.core.first(arglist__7812);
arglist__7812 = cljs.core.next(arglist__7812);
var x = cljs.core.first(arglist__7812);
arglist__7812 = cljs.core.next(arglist__7812);
var y = cljs.core.first(arglist__7812);
var _ = cljs.core.rest(arglist__7812);
return G__7810__delegate(w,img,x,y,_);
});
G__7810.cljs$core$IFn$_invoke$arity$variadic = G__7810__delegate;
return G__7810;
})()
,(function() { 
var G__7813__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__7813 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7814__i = 0, G__7814__a = new Array(arguments.length -  2);
while (G__7814__i < G__7814__a.length) {G__7814__a[G__7814__i] = arguments[G__7814__i + 2]; ++G__7814__i;}
  _ = new cljs.core.IndexedSeq(G__7814__a,0,null);
} 
return G__7813__delegate.call(this,w,ms,_);};
G__7813.cljs$lang$maxFixedArity = 2;
G__7813.cljs$lang$applyTo = (function (arglist__7815){
var w = cljs.core.first(arglist__7815);
arglist__7815 = cljs.core.next(arglist__7815);
var ms = cljs.core.first(arglist__7815);
var _ = cljs.core.rest(arglist__7815);
return G__7813__delegate(w,ms,_);
});
G__7813.cljs$core$IFn$_invoke$arity$variadic = G__7813__delegate;
return G__7813;
})()
,(function() { 
var G__7816__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__7816 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7817__i = 0, G__7817__a = new Array(arguments.length -  5);
while (G__7817__i < G__7817__a.length) {G__7817__a[G__7817__i] = arguments[G__7817__i + 5]; ++G__7817__i;}
  _ = new cljs.core.IndexedSeq(G__7817__a,0,null);
} 
return G__7816__delegate.call(this,w,x1,y1,x2,y2,_);};
G__7816.cljs$lang$maxFixedArity = 5;
G__7816.cljs$lang$applyTo = (function (arglist__7818){
var w = cljs.core.first(arglist__7818);
arglist__7818 = cljs.core.next(arglist__7818);
var x1 = cljs.core.first(arglist__7818);
arglist__7818 = cljs.core.next(arglist__7818);
var y1 = cljs.core.first(arglist__7818);
arglist__7818 = cljs.core.next(arglist__7818);
var x2 = cljs.core.first(arglist__7818);
arglist__7818 = cljs.core.next(arglist__7818);
var y2 = cljs.core.first(arglist__7818);
var _ = cljs.core.rest(arglist__7818);
return G__7816__delegate(w,x1,y1,x2,y2,_);
});
G__7816.cljs$core$IFn$_invoke$arity$variadic = G__7816__delegate;
return G__7816;
})()
,(function() { 
var G__7819__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__7819 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7820__i = 0, G__7820__a = new Array(arguments.length -  1);
while (G__7820__i < G__7820__a.length) {G__7820__a[G__7820__i] = arguments[G__7820__i + 1]; ++G__7820__i;}
  _ = new cljs.core.IndexedSeq(G__7820__a,0,null);
} 
return G__7819__delegate.call(this,w,_);};
G__7819.cljs$lang$maxFixedArity = 1;
G__7819.cljs$lang$applyTo = (function (arglist__7821){
var w = cljs.core.first(arglist__7821);
var _ = cljs.core.rest(arglist__7821);
return G__7819__delegate(w,_);
});
G__7819.cljs$core$IFn$_invoke$arity$variadic = G__7819__delegate;
return G__7819;
})()
,(function() { 
var G__7822__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__7822 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7823__i = 0, G__7823__a = new Array(arguments.length -  4);
while (G__7823__i < G__7823__a.length) {G__7823__a[G__7823__i] = arguments[G__7823__i + 4]; ++G__7823__i;}
  _ = new cljs.core.IndexedSeq(G__7823__a,0,null);
} 
return G__7822__delegate.call(this,w,x,y,r,_);};
G__7822.cljs$lang$maxFixedArity = 4;
G__7822.cljs$lang$applyTo = (function (arglist__7824){
var w = cljs.core.first(arglist__7824);
arglist__7824 = cljs.core.next(arglist__7824);
var x = cljs.core.first(arglist__7824);
arglist__7824 = cljs.core.next(arglist__7824);
var y = cljs.core.first(arglist__7824);
arglist__7824 = cljs.core.next(arglist__7824);
var r = cljs.core.first(arglist__7824);
var _ = cljs.core.rest(arglist__7824);
return G__7822__delegate(w,x,y,r,_);
});
G__7822.cljs$core$IFn$_invoke$arity$variadic = G__7822__delegate;
return G__7822;
})()
,(function() { 
var G__7825__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__7825 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7826__i = 0, G__7826__a = new Array(arguments.length -  5);
while (G__7826__i < G__7826__a.length) {G__7826__a[G__7826__i] = arguments[G__7826__i + 5]; ++G__7826__i;}
  _ = new cljs.core.IndexedSeq(G__7826__a,0,null);
} 
return G__7825__delegate.call(this,w,x,y,width,height,_);};
G__7825.cljs$lang$maxFixedArity = 5;
G__7825.cljs$lang$applyTo = (function (arglist__7827){
var w = cljs.core.first(arglist__7827);
arglist__7827 = cljs.core.next(arglist__7827);
var x = cljs.core.first(arglist__7827);
arglist__7827 = cljs.core.next(arglist__7827);
var y = cljs.core.first(arglist__7827);
arglist__7827 = cljs.core.next(arglist__7827);
var width = cljs.core.first(arglist__7827);
arglist__7827 = cljs.core.next(arglist__7827);
var height = cljs.core.first(arglist__7827);
var _ = cljs.core.rest(arglist__7827);
return G__7825__delegate(w,x,y,width,height,_);
});
G__7825.cljs$core$IFn$_invoke$arity$variadic = G__7825__delegate;
return G__7825;
})()
,(function() { 
var G__7828__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__7828 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7829__i = 0, G__7829__a = new Array(arguments.length -  5);
while (G__7829__i < G__7829__a.length) {G__7829__a[G__7829__i] = arguments[G__7829__i + 5]; ++G__7829__i;}
  _ = new cljs.core.IndexedSeq(G__7829__a,0,null);
} 
return G__7828__delegate.call(this,w,img,x,y,angle,_);};
G__7828.cljs$lang$maxFixedArity = 5;
G__7828.cljs$lang$applyTo = (function (arglist__7830){
var w = cljs.core.first(arglist__7830);
arglist__7830 = cljs.core.next(arglist__7830);
var img = cljs.core.first(arglist__7830);
arglist__7830 = cljs.core.next(arglist__7830);
var x = cljs.core.first(arglist__7830);
arglist__7830 = cljs.core.next(arglist__7830);
var y = cljs.core.first(arglist__7830);
arglist__7830 = cljs.core.next(arglist__7830);
var angle = cljs.core.first(arglist__7830);
var _ = cljs.core.rest(arglist__7830);
return G__7828__delegate(w,img,x,y,angle,_);
});
G__7828.cljs$core$IFn$_invoke$arity$variadic = G__7828__delegate;
return G__7828;
})()
,(function() { 
var G__7831__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7831 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7832__i = 0, G__7832__a = new Array(arguments.length -  2);
while (G__7832__i < G__7832__a.length) {G__7832__a[G__7832__i] = arguments[G__7832__i + 2]; ++G__7832__i;}
  _ = new cljs.core.IndexedSeq(G__7832__a,0,null);
} 
return G__7831__delegate.call(this,w,color,_);};
G__7831.cljs$lang$maxFixedArity = 2;
G__7831.cljs$lang$applyTo = (function (arglist__7833){
var w = cljs.core.first(arglist__7833);
arglist__7833 = cljs.core.next(arglist__7833);
var color = cljs.core.first(arglist__7833);
var _ = cljs.core.rest(arglist__7833);
return G__7831__delegate(w,color,_);
});
G__7831.cljs$core$IFn$_invoke$arity$variadic = G__7831__delegate;
return G__7831;
})()
,(function() { 
var G__7834__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__7834 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7835__i = 0, G__7835__a = new Array(arguments.length -  5);
while (G__7835__i < G__7835__a.length) {G__7835__a[G__7835__i] = arguments[G__7835__i + 5]; ++G__7835__i;}
  _ = new cljs.core.IndexedSeq(G__7835__a,0,null);
} 
return G__7834__delegate.call(this,w,x,y,width,height,_);};
G__7834.cljs$lang$maxFixedArity = 5;
G__7834.cljs$lang$applyTo = (function (arglist__7836){
var w = cljs.core.first(arglist__7836);
arglist__7836 = cljs.core.next(arglist__7836);
var x = cljs.core.first(arglist__7836);
arglist__7836 = cljs.core.next(arglist__7836);
var y = cljs.core.first(arglist__7836);
arglist__7836 = cljs.core.next(arglist__7836);
var width = cljs.core.first(arglist__7836);
arglist__7836 = cljs.core.next(arglist__7836);
var height = cljs.core.first(arglist__7836);
var _ = cljs.core.rest(arglist__7836);
return G__7834__delegate(w,x,y,width,height,_);
});
G__7834.cljs$core$IFn$_invoke$arity$variadic = G__7834__delegate;
return G__7834;
})()
,(function() { 
var G__7837__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__7837 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7838__i = 0, G__7838__a = new Array(arguments.length -  1);
while (G__7838__i < G__7838__a.length) {G__7838__a[G__7838__i] = arguments[G__7838__i + 1]; ++G__7838__i;}
  _ = new cljs.core.IndexedSeq(G__7838__a,0,null);
} 
return G__7837__delegate.call(this,w,_);};
G__7837.cljs$lang$maxFixedArity = 1;
G__7837.cljs$lang$applyTo = (function (arglist__7839){
var w = cljs.core.first(arglist__7839);
var _ = cljs.core.rest(arglist__7839);
return G__7837__delegate(w,_);
});
G__7837.cljs$core$IFn$_invoke$arity$variadic = G__7837__delegate;
return G__7837;
})()
,(function() { 
var G__7840__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__7840 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7841__i = 0, G__7841__a = new Array(arguments.length -  4);
while (G__7841__i < G__7841__a.length) {G__7841__a[G__7841__i] = arguments[G__7841__i + 4]; ++G__7841__i;}
  _ = new cljs.core.IndexedSeq(G__7841__a,0,null);
} 
return G__7840__delegate.call(this,w,x,y,r,_);};
G__7840.cljs$lang$maxFixedArity = 4;
G__7840.cljs$lang$applyTo = (function (arglist__7842){
var w = cljs.core.first(arglist__7842);
arglist__7842 = cljs.core.next(arglist__7842);
var x = cljs.core.first(arglist__7842);
arglist__7842 = cljs.core.next(arglist__7842);
var y = cljs.core.first(arglist__7842);
arglist__7842 = cljs.core.next(arglist__7842);
var r = cljs.core.first(arglist__7842);
var _ = cljs.core.rest(arglist__7842);
return G__7840__delegate(w,x,y,r,_);
});
G__7840.cljs$core$IFn$_invoke$arity$variadic = G__7840__delegate;
return G__7840;
})()
,(function() { 
var G__7843__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7843 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7844__i = 0, G__7844__a = new Array(arguments.length -  2);
while (G__7844__i < G__7844__a.length) {G__7844__a[G__7844__i] = arguments[G__7844__i + 2]; ++G__7844__i;}
  _ = new cljs.core.IndexedSeq(G__7844__a,0,null);
} 
return G__7843__delegate.call(this,w,color,_);};
G__7843.cljs$lang$maxFixedArity = 2;
G__7843.cljs$lang$applyTo = (function (arglist__7845){
var w = cljs.core.first(arglist__7845);
arglist__7845 = cljs.core.next(arglist__7845);
var color = cljs.core.first(arglist__7845);
var _ = cljs.core.rest(arglist__7845);
return G__7843__delegate(w,color,_);
});
G__7843.cljs$core$IFn$_invoke$arity$variadic = G__7843__delegate;
return G__7843;
})()
,(function() { 
var G__7846__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__7846 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7847__i = 0, G__7847__a = new Array(arguments.length -  1);
while (G__7847__i < G__7847__a.length) {G__7847__a[G__7847__i] = arguments[G__7847__i + 1]; ++G__7847__i;}
  _ = new cljs.core.IndexedSeq(G__7847__a,0,null);
} 
return G__7846__delegate.call(this,w,_);};
G__7846.cljs$lang$maxFixedArity = 1;
G__7846.cljs$lang$applyTo = (function (arglist__7848){
var w = cljs.core.first(arglist__7848);
var _ = cljs.core.rest(arglist__7848);
return G__7846__delegate(w,_);
});
G__7846.cljs$core$IFn$_invoke$arity$variadic = G__7846__delegate;
return G__7846;
})()
,(function() { 
var G__7849__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__7849 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7850__i = 0, G__7850__a = new Array(arguments.length -  1);
while (G__7850__i < G__7850__a.length) {G__7850__a[G__7850__i] = arguments[G__7850__i + 1]; ++G__7850__i;}
  _ = new cljs.core.IndexedSeq(G__7850__a,0,null);
} 
return G__7849__delegate.call(this,w,_);};
G__7849.cljs$lang$maxFixedArity = 1;
G__7849.cljs$lang$applyTo = (function (arglist__7851){
var w = cljs.core.first(arglist__7851);
var _ = cljs.core.rest(arglist__7851);
return G__7849__delegate(w,_);
});
G__7849.cljs$core$IFn$_invoke$arity$variadic = G__7849__delegate;
return G__7849;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__7852__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__7852 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7857__i = 0, G__7857__a = new Array(arguments.length -  2);
while (G__7857__i < G__7857__a.length) {G__7857__a[G__7857__i] = arguments[G__7857__i + 2]; ++G__7857__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7857__a,0,null);
} 
return G__7852__delegate.call(this,_,name,___$1);};
G__7852.cljs$lang$maxFixedArity = 2;
G__7852.cljs$lang$applyTo = (function (arglist__7858){
var _ = cljs.core.first(arglist__7858);
arglist__7858 = cljs.core.next(arglist__7858);
var name = cljs.core.first(arglist__7858);
var ___$1 = cljs.core.rest(arglist__7858);
return G__7852__delegate(_,name,___$1);
});
G__7852.cljs$core$IFn$_invoke$arity$variadic = G__7852__delegate;
return G__7852;
})()
,"setenv",(function() { 
var G__7859__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__7859 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__7864__i = 0, G__7864__a = new Array(arguments.length -  3);
while (G__7864__i < G__7864__a.length) {G__7864__a[G__7864__i] = arguments[G__7864__i + 3]; ++G__7864__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7864__a,0,null);
} 
return G__7859__delegate.call(this,_,name,value,___$1);};
G__7859.cljs$lang$maxFixedArity = 3;
G__7859.cljs$lang$applyTo = (function (arglist__7865){
var _ = cljs.core.first(arglist__7865);
arglist__7865 = cljs.core.next(arglist__7865);
var name = cljs.core.first(arglist__7865);
arglist__7865 = cljs.core.next(arglist__7865);
var value = cljs.core.first(arglist__7865);
var ___$1 = cljs.core.rest(arglist__7865);
return G__7859__delegate(_,name,value,___$1);
});
G__7859.cljs$core$IFn$_invoke$arity$variadic = G__7859__delegate;
return G__7859;
})()
,"command_line",(function() { 
var G__7870__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__7870 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7871__i = 0, G__7871__a = new Array(arguments.length -  1);
while (G__7871__i < G__7871__a.length) {G__7871__a[G__7871__i] = arguments[G__7871__i + 1]; ++G__7871__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7871__a,0,null);
} 
return G__7870__delegate.call(this,_,___$1);};
G__7870.cljs$lang$maxFixedArity = 1;
G__7870.cljs$lang$applyTo = (function (arglist__7872){
var _ = cljs.core.first(arglist__7872);
var ___$1 = cljs.core.rest(arglist__7872);
return G__7870__delegate(_,___$1);
});
G__7870.cljs$core$IFn$_invoke$arity$variadic = G__7870__delegate;
return G__7870;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__7873__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__7873 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7874__i = 0, G__7874__a = new Array(arguments.length -  1);
while (G__7874__i < G__7874__a.length) {G__7874__a[G__7874__i] = arguments[G__7874__i + 1]; ++G__7874__i;}
  _ = new cljs.core.IndexedSeq(G__7874__a,0,null);
} 
return G__7873__delegate.call(this,c,_);};
G__7873.cljs$lang$maxFixedArity = 1;
G__7873.cljs$lang$applyTo = (function (arglist__7875){
var c = cljs.core.first(arglist__7875);
var _ = cljs.core.rest(arglist__7875);
return G__7873__delegate(c,_);
});
G__7873.cljs$core$IFn$_invoke$arity$variadic = G__7873__delegate;
return G__7873;
})()
,"to_upper",(function() { 
var G__7876__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7876 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7877__i = 0, G__7877__a = new Array(arguments.length -  1);
while (G__7877__i < G__7877__a.length) {G__7877__a[G__7877__i] = arguments[G__7877__i + 1]; ++G__7877__i;}
  _ = new cljs.core.IndexedSeq(G__7877__a,0,null);
} 
return G__7876__delegate.call(this,c,_);};
G__7876.cljs$lang$maxFixedArity = 1;
G__7876.cljs$lang$applyTo = (function (arglist__7878){
var c = cljs.core.first(arglist__7878);
var _ = cljs.core.rest(arglist__7878);
return G__7876__delegate(c,_);
});
G__7876.cljs$core$IFn$_invoke$arity$variadic = G__7876__delegate;
return G__7876;
})()
,"to_lower",(function() { 
var G__7879__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7879 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7880__i = 0, G__7880__a = new Array(arguments.length -  1);
while (G__7880__i < G__7880__a.length) {G__7880__a[G__7880__i] = arguments[G__7880__i + 1]; ++G__7880__i;}
  _ = new cljs.core.IndexedSeq(G__7880__a,0,null);
} 
return G__7879__delegate.call(this,c,_);};
G__7879.cljs$lang$maxFixedArity = 1;
G__7879.cljs$lang$applyTo = (function (arglist__7881){
var c = cljs.core.first(arglist__7881);
var _ = cljs.core.rest(arglist__7881);
return G__7879__delegate(c,_);
});
G__7879.cljs$core$IFn$_invoke$arity$variadic = G__7879__delegate;
return G__7879;
})()
,"compare",(function() { 
var G__7882__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__7882 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7883__i = 0, G__7883__a = new Array(arguments.length -  2);
while (G__7883__i < G__7883__a.length) {G__7883__a[G__7883__i] = arguments[G__7883__i + 2]; ++G__7883__i;}
  _ = new cljs.core.IndexedSeq(G__7883__a,0,null);
} 
return G__7882__delegate.call(this,c,other,_);};
G__7882.cljs$lang$maxFixedArity = 2;
G__7882.cljs$lang$applyTo = (function (arglist__7884){
var c = cljs.core.first(arglist__7884);
arglist__7884 = cljs.core.next(arglist__7884);
var other = cljs.core.first(arglist__7884);
var _ = cljs.core.rest(arglist__7884);
return G__7882__delegate(c,other,_);
});
G__7882.cljs$core$IFn$_invoke$arity$variadic = G__7882__delegate;
return G__7882;
})()
,"hash",(function() { 
var G__7885__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__7885 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7886__i = 0, G__7886__a = new Array(arguments.length -  1);
while (G__7886__i < G__7886__a.length) {G__7886__a[G__7886__i] = arguments[G__7886__i + 1]; ++G__7886__i;}
  _ = new cljs.core.IndexedSeq(G__7886__a,0,null);
} 
return G__7885__delegate.call(this,c,_);};
G__7885.cljs$lang$maxFixedArity = 1;
G__7885.cljs$lang$applyTo = (function (arglist__7887){
var c = cljs.core.first(arglist__7887);
var _ = cljs.core.rest(arglist__7887);
return G__7885__delegate(c,_);
});
G__7885.cljs$core$IFn$_invoke$arity$variadic = G__7885__delegate;
return G__7885;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7888__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7888 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7889__i = 0, G__7889__a = new Array(arguments.length -  2);
while (G__7889__i < G__7889__a.length) {G__7889__a[G__7889__i] = arguments[G__7889__i + 2]; ++G__7889__i;}
  _ = new cljs.core.IndexedSeq(G__7889__a,0,null);
} 
return G__7888__delegate.call(this,n,other,_);};
G__7888.cljs$lang$maxFixedArity = 2;
G__7888.cljs$lang$applyTo = (function (arglist__7890){
var n = cljs.core.first(arglist__7890);
arglist__7890 = cljs.core.next(arglist__7890);
var other = cljs.core.first(arglist__7890);
var _ = cljs.core.rest(arglist__7890);
return G__7888__delegate(n,other,_);
});
G__7888.cljs$core$IFn$_invoke$arity$variadic = G__7888__delegate;
return G__7888;
})()
,(function() { 
var G__7891__delegate = function (n,other,_){
return (n <= other);
};
var G__7891 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7892__i = 0, G__7892__a = new Array(arguments.length -  2);
while (G__7892__i < G__7892__a.length) {G__7892__a[G__7892__i] = arguments[G__7892__i + 2]; ++G__7892__i;}
  _ = new cljs.core.IndexedSeq(G__7892__a,0,null);
} 
return G__7891__delegate.call(this,n,other,_);};
G__7891.cljs$lang$maxFixedArity = 2;
G__7891.cljs$lang$applyTo = (function (arglist__7893){
var n = cljs.core.first(arglist__7893);
arglist__7893 = cljs.core.next(arglist__7893);
var other = cljs.core.first(arglist__7893);
var _ = cljs.core.rest(arglist__7893);
return G__7891__delegate(n,other,_);
});
G__7891.cljs$core$IFn$_invoke$arity$variadic = G__7891__delegate;
return G__7891;
})()
,(function() { 
var G__7894__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7894 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7895__i = 0, G__7895__a = new Array(arguments.length -  2);
while (G__7895__i < G__7895__a.length) {G__7895__a[G__7895__i] = arguments[G__7895__i + 2]; ++G__7895__i;}
  _ = new cljs.core.IndexedSeq(G__7895__a,0,null);
} 
return G__7894__delegate.call(this,n,other,_);};
G__7894.cljs$lang$maxFixedArity = 2;
G__7894.cljs$lang$applyTo = (function (arglist__7896){
var n = cljs.core.first(arglist__7896);
arglist__7896 = cljs.core.next(arglist__7896);
var other = cljs.core.first(arglist__7896);
var _ = cljs.core.rest(arglist__7896);
return G__7894__delegate(n,other,_);
});
G__7894.cljs$core$IFn$_invoke$arity$variadic = G__7894__delegate;
return G__7894;
})()
,(function() { 
var G__7897__delegate = function (n,other,_){
return (n < other);
};
var G__7897 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7898__i = 0, G__7898__a = new Array(arguments.length -  2);
while (G__7898__i < G__7898__a.length) {G__7898__a[G__7898__i] = arguments[G__7898__i + 2]; ++G__7898__i;}
  _ = new cljs.core.IndexedSeq(G__7898__a,0,null);
} 
return G__7897__delegate.call(this,n,other,_);};
G__7897.cljs$lang$maxFixedArity = 2;
G__7897.cljs$lang$applyTo = (function (arglist__7899){
var n = cljs.core.first(arglist__7899);
arglist__7899 = cljs.core.next(arglist__7899);
var other = cljs.core.first(arglist__7899);
var _ = cljs.core.rest(arglist__7899);
return G__7897__delegate(n,other,_);
});
G__7897.cljs$core$IFn$_invoke$arity$variadic = G__7897__delegate;
return G__7897;
})()
,(function() { 
var G__7900__delegate = function (n,other,_){
return (n + other);
};
var G__7900 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7901__i = 0, G__7901__a = new Array(arguments.length -  2);
while (G__7901__i < G__7901__a.length) {G__7901__a[G__7901__i] = arguments[G__7901__i + 2]; ++G__7901__i;}
  _ = new cljs.core.IndexedSeq(G__7901__a,0,null);
} 
return G__7900__delegate.call(this,n,other,_);};
G__7900.cljs$lang$maxFixedArity = 2;
G__7900.cljs$lang$applyTo = (function (arglist__7902){
var n = cljs.core.first(arglist__7902);
arglist__7902 = cljs.core.next(arglist__7902);
var other = cljs.core.first(arglist__7902);
var _ = cljs.core.rest(arglist__7902);
return G__7900__delegate(n,other,_);
});
G__7900.cljs$core$IFn$_invoke$arity$variadic = G__7900__delegate;
return G__7900;
})()
,(function() { 
var G__7903__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7903 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7904__i = 0, G__7904__a = new Array(arguments.length -  1);
while (G__7904__i < G__7904__a.length) {G__7904__a[G__7904__i] = arguments[G__7904__i + 1]; ++G__7904__i;}
  _ = new cljs.core.IndexedSeq(G__7904__a,0,null);
} 
return G__7903__delegate.call(this,n,_);};
G__7903.cljs$lang$maxFixedArity = 1;
G__7903.cljs$lang$applyTo = (function (arglist__7905){
var n = cljs.core.first(arglist__7905);
var _ = cljs.core.rest(arglist__7905);
return G__7903__delegate(n,_);
});
G__7903.cljs$core$IFn$_invoke$arity$variadic = G__7903__delegate;
return G__7903;
})()
,(function() { 
var G__7906__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7906 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7907__i = 0, G__7907__a = new Array(arguments.length -  1);
while (G__7907__i < G__7907__a.length) {G__7907__a[G__7907__i] = arguments[G__7907__i + 1]; ++G__7907__i;}
  _ = new cljs.core.IndexedSeq(G__7907__a,0,null);
} 
return G__7906__delegate.call(this,n,_);};
G__7906.cljs$lang$maxFixedArity = 1;
G__7906.cljs$lang$applyTo = (function (arglist__7908){
var n = cljs.core.first(arglist__7908);
var _ = cljs.core.rest(arglist__7908);
return G__7906__delegate(n,_);
});
G__7906.cljs$core$IFn$_invoke$arity$variadic = G__7906__delegate;
return G__7906;
})()
,(function() { 
var G__7909__delegate = function (n,other,_){
return (n > other);
};
var G__7909 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7910__i = 0, G__7910__a = new Array(arguments.length -  2);
while (G__7910__i < G__7910__a.length) {G__7910__a[G__7910__i] = arguments[G__7910__i + 2]; ++G__7910__i;}
  _ = new cljs.core.IndexedSeq(G__7910__a,0,null);
} 
return G__7909__delegate.call(this,n,other,_);};
G__7909.cljs$lang$maxFixedArity = 2;
G__7909.cljs$lang$applyTo = (function (arglist__7911){
var n = cljs.core.first(arglist__7911);
arglist__7911 = cljs.core.next(arglist__7911);
var other = cljs.core.first(arglist__7911);
var _ = cljs.core.rest(arglist__7911);
return G__7909__delegate(n,other,_);
});
G__7909.cljs$core$IFn$_invoke$arity$variadic = G__7909__delegate;
return G__7909;
})()
,(function() { 
var G__7912__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7912 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7913__i = 0, G__7913__a = new Array(arguments.length -  2);
while (G__7913__i < G__7913__a.length) {G__7913__a[G__7913__i] = arguments[G__7913__i + 2]; ++G__7913__i;}
  _ = new cljs.core.IndexedSeq(G__7913__a,0,null);
} 
return G__7912__delegate.call(this,n,other,_);};
G__7912.cljs$lang$maxFixedArity = 2;
G__7912.cljs$lang$applyTo = (function (arglist__7914){
var n = cljs.core.first(arglist__7914);
arglist__7914 = cljs.core.next(arglist__7914);
var other = cljs.core.first(arglist__7914);
var _ = cljs.core.rest(arglist__7914);
return G__7912__delegate(n,other,_);
});
G__7912.cljs$core$IFn$_invoke$arity$variadic = G__7912__delegate;
return G__7912;
})()
,(function() { 
var G__7915__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7915 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7916__i = 0, G__7916__a = new Array(arguments.length -  2);
while (G__7916__i < G__7916__a.length) {G__7916__a[G__7916__i] = arguments[G__7916__i + 2]; ++G__7916__i;}
  _ = new cljs.core.IndexedSeq(G__7916__a,0,null);
} 
return G__7915__delegate.call(this,n,other,_);};
G__7915.cljs$lang$maxFixedArity = 2;
G__7915.cljs$lang$applyTo = (function (arglist__7917){
var n = cljs.core.first(arglist__7917);
arglist__7917 = cljs.core.next(arglist__7917);
var other = cljs.core.first(arglist__7917);
var _ = cljs.core.rest(arglist__7917);
return G__7915__delegate(n,other,_);
});
G__7915.cljs$core$IFn$_invoke$arity$variadic = G__7915__delegate;
return G__7915;
})()
,(function() { 
var G__7918__delegate = function (n,other,_){
return (n - other);
};
var G__7918 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7919__i = 0, G__7919__a = new Array(arguments.length -  2);
while (G__7919__i < G__7919__a.length) {G__7919__a[G__7919__i] = arguments[G__7919__i + 2]; ++G__7919__i;}
  _ = new cljs.core.IndexedSeq(G__7919__a,0,null);
} 
return G__7918__delegate.call(this,n,other,_);};
G__7918.cljs$lang$maxFixedArity = 2;
G__7918.cljs$lang$applyTo = (function (arglist__7920){
var n = cljs.core.first(arglist__7920);
arglist__7920 = cljs.core.next(arglist__7920);
var other = cljs.core.first(arglist__7920);
var _ = cljs.core.rest(arglist__7920);
return G__7918__delegate(n,other,_);
});
G__7918.cljs$core$IFn$_invoke$arity$variadic = G__7918__delegate;
return G__7918;
})()
,(function() { 
var G__7921__delegate = function (n,other,_){
return (n * other);
};
var G__7921 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7922__i = 0, G__7922__a = new Array(arguments.length -  2);
while (G__7922__i < G__7922__a.length) {G__7922__a[G__7922__i] = arguments[G__7922__i + 2]; ++G__7922__i;}
  _ = new cljs.core.IndexedSeq(G__7922__a,0,null);
} 
return G__7921__delegate.call(this,n,other,_);};
G__7921.cljs$lang$maxFixedArity = 2;
G__7921.cljs$lang$applyTo = (function (arglist__7923){
var n = cljs.core.first(arglist__7923);
arglist__7923 = cljs.core.next(arglist__7923);
var other = cljs.core.first(arglist__7923);
var _ = cljs.core.rest(arglist__7923);
return G__7921__delegate(n,other,_);
});
G__7921.cljs$core$IFn$_invoke$arity$variadic = G__7921__delegate;
return G__7921;
})()
,(function() { 
var G__7924__delegate = function (n,other,_){
return (n / other);
};
var G__7924 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7925__i = 0, G__7925__a = new Array(arguments.length -  2);
while (G__7925__i < G__7925__a.length) {G__7925__a[G__7925__i] = arguments[G__7925__i + 2]; ++G__7925__i;}
  _ = new cljs.core.IndexedSeq(G__7925__a,0,null);
} 
return G__7924__delegate.call(this,n,other,_);};
G__7924.cljs$lang$maxFixedArity = 2;
G__7924.cljs$lang$applyTo = (function (arglist__7926){
var n = cljs.core.first(arglist__7926);
arglist__7926 = cljs.core.next(arglist__7926);
var other = cljs.core.first(arglist__7926);
var _ = cljs.core.rest(arglist__7926);
return G__7924__delegate(n,other,_);
});
G__7924.cljs$core$IFn$_invoke$arity$variadic = G__7924__delegate;
return G__7924;
})()
,(function() { 
var G__7927__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7927 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7928__i = 0, G__7928__a = new Array(arguments.length -  1);
while (G__7928__i < G__7928__a.length) {G__7928__a[G__7928__i] = arguments[G__7928__i + 1]; ++G__7928__i;}
  _ = new cljs.core.IndexedSeq(G__7928__a,0,null);
} 
return G__7927__delegate.call(this,n,_);};
G__7927.cljs$lang$maxFixedArity = 1;
G__7927.cljs$lang$applyTo = (function (arglist__7929){
var n = cljs.core.first(arglist__7929);
var _ = cljs.core.rest(arglist__7929);
return G__7927__delegate(n,_);
});
G__7927.cljs$core$IFn$_invoke$arity$variadic = G__7927__delegate;
return G__7927;
})()
,(function() { 
var G__7930__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7930 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7932__i = 0, G__7932__a = new Array(arguments.length -  1);
while (G__7932__i < G__7932__a.length) {G__7932__a[G__7932__i] = arguments[G__7932__i + 1]; ++G__7932__i;}
  _ = new cljs.core.IndexedSeq(G__7932__a,0,null);
} 
return G__7930__delegate.call(this,n,_);};
G__7930.cljs$lang$maxFixedArity = 1;
G__7930.cljs$lang$applyTo = (function (arglist__7934){
var n = cljs.core.first(arglist__7934);
var _ = cljs.core.rest(arglist__7934);
return G__7930__delegate(n,_);
});
G__7930.cljs$core$IFn$_invoke$arity$variadic = G__7930__delegate;
return G__7930;
})()
,(function() { 
var G__7935__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7935 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7936__i = 0, G__7936__a = new Array(arguments.length -  2);
while (G__7936__i < G__7936__a.length) {G__7936__a[G__7936__i] = arguments[G__7936__i + 2]; ++G__7936__i;}
  _ = new cljs.core.IndexedSeq(G__7936__a,0,null);
} 
return G__7935__delegate.call(this,n,other,_);};
G__7935.cljs$lang$maxFixedArity = 2;
G__7935.cljs$lang$applyTo = (function (arglist__7937){
var n = cljs.core.first(arglist__7937);
arglist__7937 = cljs.core.next(arglist__7937);
var other = cljs.core.first(arglist__7937);
var _ = cljs.core.rest(arglist__7937);
return G__7935__delegate(n,other,_);
});
G__7935.cljs$core$IFn$_invoke$arity$variadic = G__7935__delegate;
return G__7935;
})()
,(function() { 
var G__7938__delegate = function (n,other,_){
return (n >= other);
};
var G__7938 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7939__i = 0, G__7939__a = new Array(arguments.length -  2);
while (G__7939__i < G__7939__a.length) {G__7939__a[G__7939__i] = arguments[G__7939__i + 2]; ++G__7939__i;}
  _ = new cljs.core.IndexedSeq(G__7939__a,0,null);
} 
return G__7938__delegate.call(this,n,other,_);};
G__7938.cljs$lang$maxFixedArity = 2;
G__7938.cljs$lang$applyTo = (function (arglist__7940){
var n = cljs.core.first(arglist__7940);
arglist__7940 = cljs.core.next(arglist__7940);
var other = cljs.core.first(arglist__7940);
var _ = cljs.core.rest(arglist__7940);
return G__7938__delegate(n,other,_);
});
G__7938.cljs$core$IFn$_invoke$arity$variadic = G__7938__delegate;
return G__7938;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__7941__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__7941 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7942__i = 0, G__7942__a = new Array(arguments.length -  2);
while (G__7942__i < G__7942__a.length) {G__7942__a[G__7942__i] = arguments[G__7942__i + 2]; ++G__7942__i;}
  _ = new cljs.core.IndexedSeq(G__7942__a,0,null);
} 
return G__7941__delegate.call(this,s,other,_);};
G__7941.cljs$lang$maxFixedArity = 2;
G__7941.cljs$lang$applyTo = (function (arglist__7943){
var s = cljs.core.first(arglist__7943);
arglist__7943 = cljs.core.next(arglist__7943);
var other = cljs.core.first(arglist__7943);
var _ = cljs.core.rest(arglist__7943);
return G__7941__delegate(s,other,_);
});
G__7941.cljs$core$IFn$_invoke$arity$variadic = G__7941__delegate;
return G__7941;
})()
,(function() { 
var G__7944__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__7944 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7945__i = 0, G__7945__a = new Array(arguments.length -  2);
while (G__7945__i < G__7945__a.length) {G__7945__a[G__7945__i] = arguments[G__7945__i + 2]; ++G__7945__i;}
  _ = new cljs.core.IndexedSeq(G__7945__a,0,null);
} 
return G__7944__delegate.call(this,s,other,_);};
G__7944.cljs$lang$maxFixedArity = 2;
G__7944.cljs$lang$applyTo = (function (arglist__7946){
var s = cljs.core.first(arglist__7946);
arglist__7946 = cljs.core.next(arglist__7946);
var other = cljs.core.first(arglist__7946);
var _ = cljs.core.rest(arglist__7946);
return G__7944__delegate(s,other,_);
});
G__7944.cljs$core$IFn$_invoke$arity$variadic = G__7944__delegate;
return G__7944;
})()
,(function() { 
var G__7947__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__7947 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7948__i = 0, G__7948__a = new Array(arguments.length -  1);
while (G__7948__i < G__7948__a.length) {G__7948__a[G__7948__i] = arguments[G__7948__i + 1]; ++G__7948__i;}
  _ = new cljs.core.IndexedSeq(G__7948__a,0,null);
} 
return G__7947__delegate.call(this,s,_);};
G__7947.cljs$lang$maxFixedArity = 1;
G__7947.cljs$lang$applyTo = (function (arglist__7949){
var s = cljs.core.first(arglist__7949);
var _ = cljs.core.rest(arglist__7949);
return G__7947__delegate(s,_);
});
G__7947.cljs$core$IFn$_invoke$arity$variadic = G__7947__delegate;
return G__7947;
})()
,(function() { 
var G__7950__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__7950 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7951__i = 0, G__7951__a = new Array(arguments.length -  1);
while (G__7951__i < G__7951__a.length) {G__7951__a[G__7951__i] = arguments[G__7951__i + 1]; ++G__7951__i;}
  _ = new cljs.core.IndexedSeq(G__7951__a,0,null);
} 
return G__7950__delegate.call(this,s,_);};
G__7950.cljs$lang$maxFixedArity = 1;
G__7950.cljs$lang$applyTo = (function (arglist__7952){
var s = cljs.core.first(arglist__7952);
var _ = cljs.core.rest(arglist__7952);
return G__7950__delegate(s,_);
});
G__7950.cljs$core$IFn$_invoke$arity$variadic = G__7950__delegate;
return G__7950;
})()
,(function() { 
var G__7953__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__7953 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7954__i = 0, G__7954__a = new Array(arguments.length -  2);
while (G__7954__i < G__7954__a.length) {G__7954__a[G__7954__i] = arguments[G__7954__i + 2]; ++G__7954__i;}
  _ = new cljs.core.IndexedSeq(G__7954__a,0,null);
} 
return G__7953__delegate.call(this,s,prefix,_);};
G__7953.cljs$lang$maxFixedArity = 2;
G__7953.cljs$lang$applyTo = (function (arglist__7955){
var s = cljs.core.first(arglist__7955);
arglist__7955 = cljs.core.next(arglist__7955);
var prefix = cljs.core.first(arglist__7955);
var _ = cljs.core.rest(arglist__7955);
return G__7953__delegate(s,prefix,_);
});
G__7953.cljs$core$IFn$_invoke$arity$variadic = G__7953__delegate;
return G__7953;
})()
,(function() { 
var G__7956__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__7956 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7957__i = 0, G__7957__a = new Array(arguments.length -  1);
while (G__7957__i < G__7957__a.length) {G__7957__a[G__7957__i] = arguments[G__7957__i + 1]; ++G__7957__i;}
  _ = new cljs.core.IndexedSeq(G__7957__a,0,null);
} 
return G__7956__delegate.call(this,s,_);};
G__7956.cljs$lang$maxFixedArity = 1;
G__7956.cljs$lang$applyTo = (function (arglist__7958){
var s = cljs.core.first(arglist__7958);
var _ = cljs.core.rest(arglist__7958);
return G__7956__delegate(s,_);
});
G__7956.cljs$core$IFn$_invoke$arity$variadic = G__7956__delegate;
return G__7956;
})()
,(function() { 
var G__7959__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__7959 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7960__i = 0, G__7960__a = new Array(arguments.length -  2);
while (G__7960__i < G__7960__a.length) {G__7960__a[G__7960__i] = arguments[G__7960__i + 2]; ++G__7960__i;}
  _ = new cljs.core.IndexedSeq(G__7960__a,0,null);
} 
return G__7959__delegate.call(this,s,other,_);};
G__7959.cljs$lang$maxFixedArity = 2;
G__7959.cljs$lang$applyTo = (function (arglist__7961){
var s = cljs.core.first(arglist__7961);
arglist__7961 = cljs.core.next(arglist__7961);
var other = cljs.core.first(arglist__7961);
var _ = cljs.core.rest(arglist__7961);
return G__7959__delegate(s,other,_);
});
G__7959.cljs$core$IFn$_invoke$arity$variadic = G__7959__delegate;
return G__7959;
})()
,(function() { 
var G__7962__delegate = function (s,other,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(other));
};
var G__7962 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7963__i = 0, G__7963__a = new Array(arguments.length -  2);
while (G__7963__i < G__7963__a.length) {G__7963__a[G__7963__i] = arguments[G__7963__i + 2]; ++G__7963__i;}
  _ = new cljs.core.IndexedSeq(G__7963__a,0,null);
} 
return G__7962__delegate.call(this,s,other,_);};
G__7962.cljs$lang$maxFixedArity = 2;
G__7962.cljs$lang$applyTo = (function (arglist__7964){
var s = cljs.core.first(arglist__7964);
arglist__7964 = cljs.core.next(arglist__7964);
var other = cljs.core.first(arglist__7964);
var _ = cljs.core.rest(arglist__7964);
return G__7962__delegate(s,other,_);
});
G__7962.cljs$core$IFn$_invoke$arity$variadic = G__7962__delegate;
return G__7962;
})()
,(function() { 
var G__7965__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__7965 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7967__i = 0, G__7967__a = new Array(arguments.length -  1);
while (G__7967__i < G__7967__a.length) {G__7967__a[G__7967__i] = arguments[G__7967__i + 1]; ++G__7967__i;}
  _ = new cljs.core.IndexedSeq(G__7967__a,0,null);
} 
return G__7965__delegate.call(this,s,_);};
G__7965.cljs$lang$maxFixedArity = 1;
G__7965.cljs$lang$applyTo = (function (arglist__7968){
var s = cljs.core.first(arglist__7968);
var _ = cljs.core.rest(arglist__7968);
return G__7965__delegate(s,_);
});
G__7965.cljs$core$IFn$_invoke$arity$variadic = G__7965__delegate;
return G__7965;
})()
,(function() { 
var G__7969__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__7969 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7970__i = 0, G__7970__a = new Array(arguments.length -  2);
while (G__7970__i < G__7970__a.length) {G__7970__a[G__7970__i] = arguments[G__7970__i + 2]; ++G__7970__i;}
  _ = new cljs.core.IndexedSeq(G__7970__a,0,null);
} 
return G__7969__delegate.call(this,s,other,_);};
G__7969.cljs$lang$maxFixedArity = 2;
G__7969.cljs$lang$applyTo = (function (arglist__7971){
var s = cljs.core.first(arglist__7971);
arglist__7971 = cljs.core.next(arglist__7971);
var other = cljs.core.first(arglist__7971);
var _ = cljs.core.rest(arglist__7971);
return G__7969__delegate(s,other,_);
});
G__7969.cljs$core$IFn$_invoke$arity$variadic = G__7969__delegate;
return G__7969;
})()
,(function() { 
var G__7972__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__7972 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7973__i = 0, G__7973__a = new Array(arguments.length -  2);
while (G__7973__i < G__7973__a.length) {G__7973__a[G__7973__i] = arguments[G__7973__i + 2]; ++G__7973__i;}
  _ = new cljs.core.IndexedSeq(G__7973__a,0,null);
} 
return G__7972__delegate.call(this,s,substr,_);};
G__7972.cljs$lang$maxFixedArity = 2;
G__7972.cljs$lang$applyTo = (function (arglist__7974){
var s = cljs.core.first(arglist__7974);
arglist__7974 = cljs.core.next(arglist__7974);
var substr = cljs.core.first(arglist__7974);
var _ = cljs.core.rest(arglist__7974);
return G__7972__delegate(s,substr,_);
});
G__7972.cljs$core$IFn$_invoke$arity$variadic = G__7972__delegate;
return G__7972;
})()
,(function() { 
var G__7975__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__7975 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7976__i = 0, G__7976__a = new Array(arguments.length -  1);
while (G__7976__i < G__7976__a.length) {G__7976__a[G__7976__i] = arguments[G__7976__i + 1]; ++G__7976__i;}
  _ = new cljs.core.IndexedSeq(G__7976__a,0,null);
} 
return G__7975__delegate.call(this,s,_);};
G__7975.cljs$lang$maxFixedArity = 1;
G__7975.cljs$lang$applyTo = (function (arglist__7977){
var s = cljs.core.first(arglist__7977);
var _ = cljs.core.rest(arglist__7977);
return G__7975__delegate(s,_);
});
G__7975.cljs$core$IFn$_invoke$arity$variadic = G__7975__delegate;
return G__7975;
})()
,(function() { 
var G__7978__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__7978 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7979__i = 0, G__7979__a = new Array(arguments.length -  2);
while (G__7979__i < G__7979__a.length) {G__7979__a[G__7979__i] = arguments[G__7979__i + 2]; ++G__7979__i;}
  _ = new cljs.core.IndexedSeq(G__7979__a,0,null);
} 
return G__7978__delegate.call(this,s,other,_);};
G__7978.cljs$lang$maxFixedArity = 2;
G__7978.cljs$lang$applyTo = (function (arglist__7980){
var s = cljs.core.first(arglist__7980);
arglist__7980 = cljs.core.next(arglist__7980);
var other = cljs.core.first(arglist__7980);
var _ = cljs.core.rest(arglist__7980);
return G__7978__delegate(s,other,_);
});
G__7978.cljs$core$IFn$_invoke$arity$variadic = G__7978__delegate;
return G__7978;
})()
,(function() { 
var G__7981__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__7981 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7982__i = 0, G__7982__a = new Array(arguments.length -  1);
while (G__7982__i < G__7982__a.length) {G__7982__a[G__7982__i] = arguments[G__7982__i + 1]; ++G__7982__i;}
  _ = new cljs.core.IndexedSeq(G__7982__a,0,null);
} 
return G__7981__delegate.call(this,s,_);};
G__7981.cljs$lang$maxFixedArity = 1;
G__7981.cljs$lang$applyTo = (function (arglist__7983){
var s = cljs.core.first(arglist__7983);
var _ = cljs.core.rest(arglist__7983);
return G__7981__delegate(s,_);
});
G__7981.cljs$core$IFn$_invoke$arity$variadic = G__7981__delegate;
return G__7981;
})()
,(function() { 
var G__7984__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__7984 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7985__i = 0, G__7985__a = new Array(arguments.length -  1);
while (G__7985__i < G__7985__a.length) {G__7985__a[G__7985__i] = arguments[G__7985__i + 1]; ++G__7985__i;}
  _ = new cljs.core.IndexedSeq(G__7985__a,0,null);
} 
return G__7984__delegate.call(this,s,_);};
G__7984.cljs$lang$maxFixedArity = 1;
G__7984.cljs$lang$applyTo = (function (arglist__7993){
var s = cljs.core.first(arglist__7993);
var _ = cljs.core.rest(arglist__7993);
return G__7984__delegate(s,_);
});
G__7984.cljs$core$IFn$_invoke$arity$variadic = G__7984__delegate;
return G__7984;
})()
,(function() { 
var G__7994__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__7994 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7995__i = 0, G__7995__a = new Array(arguments.length -  3);
while (G__7995__i < G__7995__a.length) {G__7995__a[G__7995__i] = arguments[G__7995__i + 3]; ++G__7995__i;}
  _ = new cljs.core.IndexedSeq(G__7995__a,0,null);
} 
return G__7994__delegate.call(this,s,start,end,_);};
G__7994.cljs$lang$maxFixedArity = 3;
G__7994.cljs$lang$applyTo = (function (arglist__7996){
var s = cljs.core.first(arglist__7996);
arglist__7996 = cljs.core.next(arglist__7996);
var start = cljs.core.first(arglist__7996);
arglist__7996 = cljs.core.next(arglist__7996);
var end = cljs.core.first(arglist__7996);
var _ = cljs.core.rest(arglist__7996);
return G__7994__delegate(s,start,end,_);
});
G__7994.cljs$core$IFn$_invoke$arity$variadic = G__7994__delegate;
return G__7994;
})()
,(function() { 
var G__7997__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__7997 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7998__i = 0, G__7998__a = new Array(arguments.length -  2);
while (G__7998__i < G__7998__a.length) {G__7998__a[G__7998__i] = arguments[G__7998__i + 2]; ++G__7998__i;}
  _ = new cljs.core.IndexedSeq(G__7998__a,0,null);
} 
return G__7997__delegate.call(this,s,idx,_);};
G__7997.cljs$lang$maxFixedArity = 2;
G__7997.cljs$lang$applyTo = (function (arglist__7999){
var s = cljs.core.first(arglist__7999);
arglist__7999 = cljs.core.next(arglist__7999);
var idx = cljs.core.first(arglist__7999);
var _ = cljs.core.rest(arglist__7999);
return G__7997__delegate(s,idx,_);
});
G__7997.cljs$core$IFn$_invoke$arity$variadic = G__7997__delegate;
return G__7997;
})()
,(function() { 
var G__8000__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__8000 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8001__i = 0, G__8001__a = new Array(arguments.length -  3);
while (G__8001__i < G__8001__a.length) {G__8001__a[G__8001__i] = arguments[G__8001__i + 3]; ++G__8001__i;}
  _ = new cljs.core.IndexedSeq(G__8001__a,0,null);
} 
return G__8000__delegate.call(this,s,old,new$,_);};
G__8000.cljs$lang$maxFixedArity = 3;
G__8000.cljs$lang$applyTo = (function (arglist__8002){
var s = cljs.core.first(arglist__8002);
arglist__8002 = cljs.core.next(arglist__8002);
var old = cljs.core.first(arglist__8002);
arglist__8002 = cljs.core.next(arglist__8002);
var new$ = cljs.core.first(arglist__8002);
var _ = cljs.core.rest(arglist__8002);
return G__8000__delegate(s,old,new$,_);
});
G__8000.cljs$core$IFn$_invoke$arity$variadic = G__8000__delegate;
return G__8000;
})()
,(function() { 
var G__8003__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8003 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8004__i = 0, G__8004__a = new Array(arguments.length -  1);
while (G__8004__i < G__8004__a.length) {G__8004__a[G__8004__i] = arguments[G__8004__i + 1]; ++G__8004__i;}
  _ = new cljs.core.IndexedSeq(G__8004__a,0,null);
} 
return G__8003__delegate.call(this,s,_);};
G__8003.cljs$lang$maxFixedArity = 1;
G__8003.cljs$lang$applyTo = (function (arglist__8005){
var s = cljs.core.first(arglist__8005);
var _ = cljs.core.rest(arglist__8005);
return G__8003__delegate(s,_);
});
G__8003.cljs$core$IFn$_invoke$arity$variadic = G__8003__delegate;
return G__8003;
})()
,(function() { 
var G__8006__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__8006 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8007__i = 0, G__8007__a = new Array(arguments.length -  2);
while (G__8007__i < G__8007__a.length) {G__8007__a[G__8007__i] = arguments[G__8007__i + 2]; ++G__8007__i;}
  _ = new cljs.core.IndexedSeq(G__8007__a,0,null);
} 
return G__8006__delegate.call(this,s,delim,_);};
G__8006.cljs$lang$maxFixedArity = 2;
G__8006.cljs$lang$applyTo = (function (arglist__8008){
var s = cljs.core.first(arglist__8008);
arglist__8008 = cljs.core.next(arglist__8008);
var delim = cljs.core.first(arglist__8008);
var _ = cljs.core.rest(arglist__8008);
return G__8006__delegate(s,delim,_);
});
G__8006.cljs$core$IFn$_invoke$arity$variadic = G__8006__delegate;
return G__8006;
})()
,(function() { 
var G__8009__delegate = function (s,_){
return cljs.core.count(s);
};
var G__8009 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8010__i = 0, G__8010__a = new Array(arguments.length -  1);
while (G__8010__i < G__8010__a.length) {G__8010__a[G__8010__i] = arguments[G__8010__i + 1]; ++G__8010__i;}
  _ = new cljs.core.IndexedSeq(G__8010__a,0,null);
} 
return G__8009__delegate.call(this,s,_);};
G__8009.cljs$lang$maxFixedArity = 1;
G__8009.cljs$lang$applyTo = (function (arglist__8011){
var s = cljs.core.first(arglist__8011);
var _ = cljs.core.rest(arglist__8011);
return G__8009__delegate(s,_);
});
G__8009.cljs$core$IFn$_invoke$arity$variadic = G__8009__delegate;
return G__8009;
})()
,(function() { 
var G__8012__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__8012 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8013__i = 0, G__8013__a = new Array(arguments.length -  1);
while (G__8013__i < G__8013__a.length) {G__8013__a[G__8013__i] = arguments[G__8013__i + 1]; ++G__8013__i;}
  _ = new cljs.core.IndexedSeq(G__8013__a,0,null);
} 
return G__8012__delegate.call(this,s,_);};
G__8012.cljs$lang$maxFixedArity = 1;
G__8012.cljs$lang$applyTo = (function (arglist__8014){
var s = cljs.core.first(arglist__8014);
var _ = cljs.core.rest(arglist__8014);
return G__8012__delegate(s,_);
});
G__8012.cljs$core$IFn$_invoke$arity$variadic = G__8012__delegate;
return G__8012;
})()
,(function() { 
var G__8015__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__8015 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8016__i = 0, G__8016__a = new Array(arguments.length -  2);
while (G__8016__i < G__8016__a.length) {G__8016__a[G__8016__i] = arguments[G__8016__i + 2]; ++G__8016__i;}
  _ = new cljs.core.IndexedSeq(G__8016__a,0,null);
} 
return G__8015__delegate.call(this,s,ch,_);};
G__8015.cljs$lang$maxFixedArity = 2;
G__8015.cljs$lang$applyTo = (function (arglist__8017){
var s = cljs.core.first(arglist__8017);
arglist__8017 = cljs.core.next(arglist__8017);
var ch = cljs.core.first(arglist__8017);
var _ = cljs.core.rest(arglist__8017);
return G__8015__delegate(s,ch,_);
});
G__8015.cljs$core$IFn$_invoke$arity$variadic = G__8015__delegate;
return G__8015;
})()
,(function() { 
var G__8018__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8018 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8019__i = 0, G__8019__a = new Array(arguments.length -  2);
while (G__8019__i < G__8019__a.length) {G__8019__a[G__8019__i] = arguments[G__8019__i + 2]; ++G__8019__i;}
  _ = new cljs.core.IndexedSeq(G__8019__a,0,null);
} 
return G__8018__delegate.call(this,s,other,_);};
G__8018.cljs$lang$maxFixedArity = 2;
G__8018.cljs$lang$applyTo = (function (arglist__8020){
var s = cljs.core.first(arglist__8020);
arglist__8020 = cljs.core.next(arglist__8020);
var other = cljs.core.first(arglist__8020);
var _ = cljs.core.rest(arglist__8020);
return G__8018__delegate(s,other,_);
});
G__8018.cljs$core$IFn$_invoke$arity$variadic = G__8018__delegate;
return G__8018;
})()
,(function() { 
var G__8021__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__8021 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8022__i = 0, G__8022__a = new Array(arguments.length -  2);
while (G__8022__i < G__8022__a.length) {G__8022__a[G__8022__i] = arguments[G__8022__i + 2]; ++G__8022__i;}
  _ = new cljs.core.IndexedSeq(G__8022__a,0,null);
} 
return G__8021__delegate.call(this,s,other,_);};
G__8021.cljs$lang$maxFixedArity = 2;
G__8021.cljs$lang$applyTo = (function (arglist__8023){
var s = cljs.core.first(arglist__8023);
arglist__8023 = cljs.core.next(arglist__8023);
var other = cljs.core.first(arglist__8023);
var _ = cljs.core.rest(arglist__8023);
return G__8021__delegate(s,other,_);
});
G__8021.cljs$core$IFn$_invoke$arity$variadic = G__8021__delegate;
return G__8021;
})()
,(function() { 
var G__8024__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__8024 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8025__i = 0, G__8025__a = new Array(arguments.length -  2);
while (G__8025__i < G__8025__a.length) {G__8025__a[G__8025__i] = arguments[G__8025__i + 2]; ++G__8025__i;}
  _ = new cljs.core.IndexedSeq(G__8025__a,0,null);
} 
return G__8024__delegate.call(this,s,suffix,_);};
G__8024.cljs$lang$maxFixedArity = 2;
G__8024.cljs$lang$applyTo = (function (arglist__8026){
var s = cljs.core.first(arglist__8026);
arglist__8026 = cljs.core.next(arglist__8026);
var suffix = cljs.core.first(arglist__8026);
var _ = cljs.core.rest(arglist__8026);
return G__8024__delegate(s,suffix,_);
});
G__8024.cljs$core$IFn$_invoke$arity$variadic = G__8024__delegate;
return G__8024;
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
var temp__5821__auto__ = (function (){var temp__5823__auto__ = nex.interpreter.get_type_name(value);
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6342 = cljs.core.get_global_hierarchy;
return (fexpr__6342.cljs$core$IFn$_invoke$arity$0 ? fexpr__6342.cljs$core$IFn$_invoke$arity$0() : fexpr__6342.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6344_SHARP_){
return fs.existsSync(p1__6344_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6345){
var map__6346 = p__6345;
var map__6346__$1 = cljs.core.__destructure_map(map__6346);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6346__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6346__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6346__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6347){
var map__6348 = p__6347;
var map__6348__$1 = cljs.core.__destructure_map(map__6348);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6349_8027 = cljs.core.seq(imports);
var chunk__6350_8028 = null;
var count__6351_8029 = (0);
var i__6352_8030 = (0);
while(true){
if((i__6352_8030 < count__6351_8029)){
var import_node_8031 = chunk__6350_8028.cljs$core$IIndexed$_nth$arity$2(null,i__6352_8030);
if(cljs.core.map_QMARK_(import_node_8031)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8031);
} else {
}


var G__8032 = seq__6349_8027;
var G__8033 = chunk__6350_8028;
var G__8034 = count__6351_8029;
var G__8035 = (i__6352_8030 + (1));
seq__6349_8027 = G__8032;
chunk__6350_8028 = G__8033;
count__6351_8029 = G__8034;
i__6352_8030 = G__8035;
continue;
} else {
var temp__5823__auto___8036 = cljs.core.seq(seq__6349_8027);
if(temp__5823__auto___8036){
var seq__6349_8037__$1 = temp__5823__auto___8036;
if(cljs.core.chunked_seq_QMARK_(seq__6349_8037__$1)){
var c__5673__auto___8038 = cljs.core.chunk_first(seq__6349_8037__$1);
var G__8039 = cljs.core.chunk_rest(seq__6349_8037__$1);
var G__8040 = c__5673__auto___8038;
var G__8041 = cljs.core.count(c__5673__auto___8038);
var G__8042 = (0);
seq__6349_8027 = G__8039;
chunk__6350_8028 = G__8040;
count__6351_8029 = G__8041;
i__6352_8030 = G__8042;
continue;
} else {
var import_node_8043 = cljs.core.first(seq__6349_8037__$1);
if(cljs.core.map_QMARK_(import_node_8043)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8043);
} else {
}


var G__8044 = cljs.core.next(seq__6349_8037__$1);
var G__8045 = null;
var G__8046 = (0);
var G__8047 = (0);
seq__6349_8027 = G__8044;
chunk__6350_8028 = G__8045;
count__6351_8029 = G__8046;
i__6352_8030 = G__8047;
continue;
}
} else {
}
}
break;
}

var seq__6353_8048 = cljs.core.seq(interns);
var chunk__6354_8049 = null;
var count__6355_8050 = (0);
var i__6356_8051 = (0);
while(true){
if((i__6356_8051 < count__6355_8050)){
var intern_node_8052 = chunk__6354_8049.cljs$core$IIndexed$_nth$arity$2(null,i__6356_8051);
if(cljs.core.map_QMARK_(intern_node_8052)){
nex.interpreter.process_intern(ctx,intern_node_8052);
} else {
}


var G__8053 = seq__6353_8048;
var G__8054 = chunk__6354_8049;
var G__8055 = count__6355_8050;
var G__8056 = (i__6356_8051 + (1));
seq__6353_8048 = G__8053;
chunk__6354_8049 = G__8054;
count__6355_8050 = G__8055;
i__6356_8051 = G__8056;
continue;
} else {
var temp__5823__auto___8057 = cljs.core.seq(seq__6353_8048);
if(temp__5823__auto___8057){
var seq__6353_8058__$1 = temp__5823__auto___8057;
if(cljs.core.chunked_seq_QMARK_(seq__6353_8058__$1)){
var c__5673__auto___8059 = cljs.core.chunk_first(seq__6353_8058__$1);
var G__8060 = cljs.core.chunk_rest(seq__6353_8058__$1);
var G__8061 = c__5673__auto___8059;
var G__8062 = cljs.core.count(c__5673__auto___8059);
var G__8063 = (0);
seq__6353_8048 = G__8060;
chunk__6354_8049 = G__8061;
count__6355_8050 = G__8062;
i__6356_8051 = G__8063;
continue;
} else {
var intern_node_8064 = cljs.core.first(seq__6353_8058__$1);
if(cljs.core.map_QMARK_(intern_node_8064)){
nex.interpreter.process_intern(ctx,intern_node_8064);
} else {
}


var G__8065 = cljs.core.next(seq__6353_8058__$1);
var G__8066 = null;
var G__8067 = (0);
var G__8068 = (0);
seq__6353_8048 = G__8065;
chunk__6354_8049 = G__8066;
count__6355_8050 = G__8067;
i__6356_8051 = G__8068;
continue;
}
} else {
}
}
break;
}

var seq__6357_8069 = cljs.core.seq(classes);
var chunk__6358_8070 = null;
var count__6359_8071 = (0);
var i__6360_8072 = (0);
while(true){
if((i__6360_8072 < count__6359_8071)){
var class_node_8073 = chunk__6358_8070.cljs$core$IIndexed$_nth$arity$2(null,i__6360_8072);
if(cljs.core.map_QMARK_(class_node_8073)){
nex.interpreter.register_class(ctx,class_node_8073);
} else {
}


var G__8074 = seq__6357_8069;
var G__8075 = chunk__6358_8070;
var G__8076 = count__6359_8071;
var G__8077 = (i__6360_8072 + (1));
seq__6357_8069 = G__8074;
chunk__6358_8070 = G__8075;
count__6359_8071 = G__8076;
i__6360_8072 = G__8077;
continue;
} else {
var temp__5823__auto___8078 = cljs.core.seq(seq__6357_8069);
if(temp__5823__auto___8078){
var seq__6357_8079__$1 = temp__5823__auto___8078;
if(cljs.core.chunked_seq_QMARK_(seq__6357_8079__$1)){
var c__5673__auto___8080 = cljs.core.chunk_first(seq__6357_8079__$1);
var G__8081 = cljs.core.chunk_rest(seq__6357_8079__$1);
var G__8082 = c__5673__auto___8080;
var G__8083 = cljs.core.count(c__5673__auto___8080);
var G__8084 = (0);
seq__6357_8069 = G__8081;
chunk__6358_8070 = G__8082;
count__6359_8071 = G__8083;
i__6360_8072 = G__8084;
continue;
} else {
var class_node_8085 = cljs.core.first(seq__6357_8079__$1);
if(cljs.core.map_QMARK_(class_node_8085)){
nex.interpreter.register_class(ctx,class_node_8085);
} else {
}


var G__8086 = cljs.core.next(seq__6357_8079__$1);
var G__8087 = null;
var G__8088 = (0);
var G__8089 = (0);
seq__6357_8069 = G__8086;
chunk__6358_8070 = G__8087;
count__6359_8071 = G__8088;
i__6360_8072 = G__8089;
continue;
}
} else {
}
}
break;
}

var seq__6361_8090 = cljs.core.seq(functions);
var chunk__6362_8091 = null;
var count__6363_8092 = (0);
var i__6364_8093 = (0);
while(true){
if((i__6364_8093 < count__6363_8092)){
var fn_node_8094 = chunk__6362_8091.cljs$core$IIndexed$_nth$arity$2(null,i__6364_8093);
if(cljs.core.map_QMARK_(fn_node_8094)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8094);
} else {
}


var G__8095 = seq__6361_8090;
var G__8096 = chunk__6362_8091;
var G__8097 = count__6363_8092;
var G__8098 = (i__6364_8093 + (1));
seq__6361_8090 = G__8095;
chunk__6362_8091 = G__8096;
count__6363_8092 = G__8097;
i__6364_8093 = G__8098;
continue;
} else {
var temp__5823__auto___8099 = cljs.core.seq(seq__6361_8090);
if(temp__5823__auto___8099){
var seq__6361_8100__$1 = temp__5823__auto___8099;
if(cljs.core.chunked_seq_QMARK_(seq__6361_8100__$1)){
var c__5673__auto___8101 = cljs.core.chunk_first(seq__6361_8100__$1);
var G__8102 = cljs.core.chunk_rest(seq__6361_8100__$1);
var G__8103 = c__5673__auto___8101;
var G__8104 = cljs.core.count(c__5673__auto___8101);
var G__8105 = (0);
seq__6361_8090 = G__8102;
chunk__6362_8091 = G__8103;
count__6363_8092 = G__8104;
i__6364_8093 = G__8105;
continue;
} else {
var fn_node_8106 = cljs.core.first(seq__6361_8100__$1);
if(cljs.core.map_QMARK_(fn_node_8106)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8106);
} else {
}


var G__8107 = cljs.core.next(seq__6361_8100__$1);
var G__8108 = null;
var G__8109 = (0);
var G__8110 = (0);
seq__6361_8090 = G__8107;
chunk__6362_8091 = G__8108;
count__6363_8092 = G__8109;
i__6364_8093 = G__8110;
continue;
}
} else {
}
}
break;
}

var seq__6365_8111 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6366_8112 = null;
var count__6367_8113 = (0);
var i__6368_8114 = (0);
while(true){
if((i__6368_8114 < count__6367_8113)){
var stmt_node_8115 = chunk__6366_8112.cljs$core$IIndexed$_nth$arity$2(null,i__6368_8114);
if(cljs.core.map_QMARK_(stmt_node_8115)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8115);
} else {
}


var G__8116 = seq__6365_8111;
var G__8117 = chunk__6366_8112;
var G__8118 = count__6367_8113;
var G__8119 = (i__6368_8114 + (1));
seq__6365_8111 = G__8116;
chunk__6366_8112 = G__8117;
count__6367_8113 = G__8118;
i__6368_8114 = G__8119;
continue;
} else {
var temp__5823__auto___8120 = cljs.core.seq(seq__6365_8111);
if(temp__5823__auto___8120){
var seq__6365_8121__$1 = temp__5823__auto___8120;
if(cljs.core.chunked_seq_QMARK_(seq__6365_8121__$1)){
var c__5673__auto___8122 = cljs.core.chunk_first(seq__6365_8121__$1);
var G__8123 = cljs.core.chunk_rest(seq__6365_8121__$1);
var G__8124 = c__5673__auto___8122;
var G__8125 = cljs.core.count(c__5673__auto___8122);
var G__8126 = (0);
seq__6365_8111 = G__8123;
chunk__6366_8112 = G__8124;
count__6367_8113 = G__8125;
i__6368_8114 = G__8126;
continue;
} else {
var stmt_node_8127 = cljs.core.first(seq__6365_8121__$1);
if(cljs.core.map_QMARK_(stmt_node_8127)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8127);
} else {
}


var G__8128 = cljs.core.next(seq__6365_8121__$1);
var G__8129 = null;
var G__8130 = (0);
var G__8131 = (0);
seq__6365_8111 = G__8128;
chunk__6366_8112 = G__8129;
count__6367_8113 = G__8130;
i__6368_8114 = G__8131;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6369){
var map__6370 = p__6369;
var map__6370__$1 = cljs.core.__destructure_map(map__6370);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6370__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6370__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6371){
var map__6372 = p__6371;
var map__6372__$1 = cljs.core.__destructure_map(map__6372);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6373 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6374 = null;
var count__6375 = (0);
var i__6376 = (0);
while(true){
if((i__6376 < count__6375)){
var vec__6383 = chunk__6374.cljs$core$IIndexed$_nth$arity$2(null,i__6376);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6383,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6383,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8132 = seq__6373;
var G__8133 = chunk__6374;
var G__8134 = count__6375;
var G__8135 = (i__6376 + (1));
seq__6373 = G__8132;
chunk__6374 = G__8133;
count__6375 = G__8134;
i__6376 = G__8135;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6373);
if(temp__5823__auto__){
var seq__6373__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6373__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6373__$1);
var G__8136 = cljs.core.chunk_rest(seq__6373__$1);
var G__8137 = c__5673__auto__;
var G__8138 = cljs.core.count(c__5673__auto__);
var G__8139 = (0);
seq__6373 = G__8136;
chunk__6374 = G__8137;
count__6375 = G__8138;
i__6376 = G__8139;
continue;
} else {
var vec__6386 = cljs.core.first(seq__6373__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6386,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6386,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8140 = cljs.core.next(seq__6373__$1);
var G__8141 = null;
var G__8142 = (0);
var G__8143 = (0);
seq__6373 = G__8140;
chunk__6374 = G__8141;
count__6375 = G__8142;
i__6376 = G__8143;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6389 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6390 = null;
var count__6391 = (0);
var i__6392 = (0);
while(true){
if((i__6392 < count__6391)){
var vec__6399 = chunk__6390.cljs$core$IIndexed$_nth$arity$2(null,i__6392);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8144 = seq__6389;
var G__8145 = chunk__6390;
var G__8146 = count__6391;
var G__8147 = (i__6392 + (1));
seq__6389 = G__8144;
chunk__6390 = G__8145;
count__6391 = G__8146;
i__6392 = G__8147;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6389);
if(temp__5823__auto__){
var seq__6389__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6389__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6389__$1);
var G__8148 = cljs.core.chunk_rest(seq__6389__$1);
var G__8149 = c__5673__auto__;
var G__8150 = cljs.core.count(c__5673__auto__);
var G__8151 = (0);
seq__6389 = G__8148;
chunk__6390 = G__8149;
count__6391 = G__8150;
i__6392 = G__8151;
continue;
} else {
var vec__6402 = cljs.core.first(seq__6389__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6402,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6402,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8152 = cljs.core.next(seq__6389__$1);
var G__8153 = null;
var G__8154 = (0);
var G__8155 = (0);
seq__6389 = G__8152;
chunk__6390 = G__8153;
count__6391 = G__8154;
i__6392 = G__8155;
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
var G__6405 = new_ctx;
var G__6406 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6407 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6405,G__6406,G__6407) : nex.interpreter.eval_body_with_rescue.call(null,G__6405,G__6406,G__6407));
} else {
var seq__6408 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6409 = null;
var count__6410 = (0);
var i__6411 = (0);
while(true){
if((i__6411 < count__6410)){
var stmt = chunk__6409.cljs$core$IIndexed$_nth$arity$2(null,i__6411);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8156 = seq__6408;
var G__8157 = chunk__6409;
var G__8158 = count__6410;
var G__8159 = (i__6411 + (1));
seq__6408 = G__8156;
chunk__6409 = G__8157;
count__6410 = G__8158;
i__6411 = G__8159;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6408);
if(temp__5823__auto__){
var seq__6408__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6408__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6408__$1);
var G__8160 = cljs.core.chunk_rest(seq__6408__$1);
var G__8161 = c__5673__auto__;
var G__8162 = cljs.core.count(c__5673__auto__);
var G__8163 = (0);
seq__6408 = G__8160;
chunk__6409 = G__8161;
count__6410 = G__8162;
i__6411 = G__8163;
continue;
} else {
var stmt = cljs.core.first(seq__6408__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8164 = cljs.core.next(seq__6408__$1);
var G__8165 = null;
var G__8166 = (0);
var G__8167 = (0);
seq__6408 = G__8164;
chunk__6409 = G__8165;
count__6410 = G__8166;
i__6411 = G__8167;
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
}catch (e6412){var ___$5 = e6412;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields);
var result = (function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6413){var ___$5 = e6413;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___8168 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8168)){
var tgt_8169 = temp__5823__auto___8168;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8169,updated_obj);
}catch (e6414){var __8170__$5 = e6414;
}} else {
}

var seq__6415_8171 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__6416_8172 = null;
var count__6417_8173 = (0);
var i__6418_8174 = (0);
while(true){
if((i__6418_8174 < count__6417_8173)){
var vec__6427_8175 = chunk__6416_8172.cljs$core$IIndexed$_nth$arity$2(null,i__6418_8174);
var field_name_8176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6427_8175,(0),null);
var field_val_8177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6427_8175,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8176))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8176),field_val_8177);
}catch (e6430){var __8178__$5 = e6430;
}} else {
}


var G__8179 = seq__6415_8171;
var G__8180 = chunk__6416_8172;
var G__8181 = count__6417_8173;
var G__8182 = (i__6418_8174 + (1));
seq__6415_8171 = G__8179;
chunk__6416_8172 = G__8180;
count__6417_8173 = G__8181;
i__6418_8174 = G__8182;
continue;
} else {
var temp__5823__auto___8183 = cljs.core.seq(seq__6415_8171);
if(temp__5823__auto___8183){
var seq__6415_8184__$1 = temp__5823__auto___8183;
if(cljs.core.chunked_seq_QMARK_(seq__6415_8184__$1)){
var c__5673__auto___8185 = cljs.core.chunk_first(seq__6415_8184__$1);
var G__8186 = cljs.core.chunk_rest(seq__6415_8184__$1);
var G__8187 = c__5673__auto___8185;
var G__8188 = cljs.core.count(c__5673__auto___8185);
var G__8189 = (0);
seq__6415_8171 = G__8186;
chunk__6416_8172 = G__8187;
count__6417_8173 = G__8188;
i__6418_8174 = G__8189;
continue;
} else {
var vec__6431_8190 = cljs.core.first(seq__6415_8184__$1);
var field_name_8191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6431_8190,(0),null);
var field_val_8192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6431_8190,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8191))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8191),field_val_8192);
}catch (e6434){var __8193__$5 = e6434;
}} else {
}


var G__8194 = cljs.core.next(seq__6415_8184__$1);
var G__8195 = null;
var G__8196 = (0);
var G__8197 = (0);
seq__6415_8171 = G__8194;
chunk__6416_8172 = G__8195;
count__6417_8173 = G__8196;
i__6418_8174 = G__8197;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6437){
var map__6438 = p__6437;
var map__6438__$1 = cljs.core.__destructure_map(map__6438);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6438__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6438__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6438__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6438__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args));
} else {
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6435_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6435_SHARP_);
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
var _ = (function (){var seq__6439 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6440 = null;
var count__6441 = (0);
var i__6442 = (0);
while(true){
if((i__6442 < count__6441)){
var vec__6449 = chunk__6440.cljs$core$IIndexed$_nth$arity$2(null,i__6442);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6449,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6449,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8198 = seq__6439;
var G__8199 = chunk__6440;
var G__8200 = count__6441;
var G__8201 = (i__6442 + (1));
seq__6439 = G__8198;
chunk__6440 = G__8199;
count__6441 = G__8200;
i__6442 = G__8201;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6439);
if(temp__5823__auto__){
var seq__6439__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6439__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6439__$1);
var G__8202 = cljs.core.chunk_rest(seq__6439__$1);
var G__8203 = c__5673__auto__;
var G__8204 = cljs.core.count(c__5673__auto__);
var G__8205 = (0);
seq__6439 = G__8202;
chunk__6440 = G__8203;
count__6441 = G__8204;
i__6442 = G__8205;
continue;
} else {
var vec__6452 = cljs.core.first(seq__6439__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6452,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6452,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8206 = cljs.core.next(seq__6439__$1);
var G__8207 = null;
var G__8208 = (0);
var G__8209 = (0);
seq__6439 = G__8206;
chunk__6440 = G__8207;
count__6441 = G__8208;
i__6442 = G__8209;
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
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6456 = null;
var count__6457 = (0);
var i__6458 = (0);
while(true){
if((i__6458 < count__6457)){
var vec__6465 = chunk__6456.cljs$core$IIndexed$_nth$arity$2(null,i__6458);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6465,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6465,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8210 = seq__6455;
var G__8211 = chunk__6456;
var G__8212 = count__6457;
var G__8213 = (i__6458 + (1));
seq__6455 = G__8210;
chunk__6456 = G__8211;
count__6457 = G__8212;
i__6458 = G__8213;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6455);
if(temp__5823__auto__){
var seq__6455__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6455__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6455__$1);
var G__8214 = cljs.core.chunk_rest(seq__6455__$1);
var G__8215 = c__5673__auto__;
var G__8216 = cljs.core.count(c__5673__auto__);
var G__8217 = (0);
seq__6455 = G__8214;
chunk__6456 = G__8215;
count__6457 = G__8216;
i__6458 = G__8217;
continue;
} else {
var vec__6468 = cljs.core.first(seq__6455__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6468,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6468,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8218 = cljs.core.next(seq__6455__$1);
var G__8219 = null;
var G__8220 = (0);
var G__8221 = (0);
seq__6455 = G__8218;
chunk__6456 = G__8219;
count__6457 = G__8220;
i__6458 = G__8221;
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
var G__6471 = new_ctx;
var G__6472 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6473 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6471,G__6472,G__6473) : nex.interpreter.eval_body_with_rescue.call(null,G__6471,G__6472,G__6473));
} else {
var seq__6474 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6475 = null;
var count__6476 = (0);
var i__6477 = (0);
while(true){
if((i__6477 < count__6476)){
var stmt = chunk__6475.cljs$core$IIndexed$_nth$arity$2(null,i__6477);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8222 = seq__6474;
var G__8223 = chunk__6475;
var G__8224 = count__6476;
var G__8225 = (i__6477 + (1));
seq__6474 = G__8222;
chunk__6475 = G__8223;
count__6476 = G__8224;
i__6477 = G__8225;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6474);
if(temp__5823__auto__){
var seq__6474__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6474__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6474__$1);
var G__8226 = cljs.core.chunk_rest(seq__6474__$1);
var G__8227 = c__5673__auto__;
var G__8228 = cljs.core.count(c__5673__auto__);
var G__8229 = (0);
seq__6474 = G__8226;
chunk__6475 = G__8227;
count__6476 = G__8228;
i__6477 = G__8229;
continue;
} else {
var stmt = cljs.core.first(seq__6474__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8230 = cljs.core.next(seq__6474__$1);
var G__8231 = null;
var G__8232 = (0);
var G__8233 = (0);
seq__6474 = G__8230;
chunk__6475 = G__8231;
count__6476 = G__8232;
i__6477 = G__8233;
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
}catch (e6478){var ___$7 = e6478;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields);
var result_flag = (function (){try{return nex.interpreter.env_lookup(method_env,"__result_assigned__");
}catch (e6479){var ___$7 = e6479;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6480){var ___$7 = e6480;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___8234 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___8234)){
var ensure_assertions_8235 = temp__5823__auto___8234;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_8235,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6481){var e = e6481;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6436_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6436_SHARP_),method);
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null));
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
}catch (e6482){var _ = e6482;
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
}catch (e6483){var _ = e6483;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields);
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6484 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6485 = null;
var count__6486 = (0);
var i__6487 = (0);
while(true){
if((i__6487 < count__6486)){
var vec__6494 = chunk__6485.cljs$core$IIndexed$_nth$arity$2(null,i__6487);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6494,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6494,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8236 = seq__6484;
var G__8237 = chunk__6485;
var G__8238 = count__6486;
var G__8239 = (i__6487 + (1));
seq__6484 = G__8236;
chunk__6485 = G__8237;
count__6486 = G__8238;
i__6487 = G__8239;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6484);
if(temp__5823__auto__){
var seq__6484__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6484__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6484__$1);
var G__8240 = cljs.core.chunk_rest(seq__6484__$1);
var G__8241 = c__5673__auto__;
var G__8242 = cljs.core.count(c__5673__auto__);
var G__8243 = (0);
seq__6484 = G__8240;
chunk__6485 = G__8241;
count__6486 = G__8242;
i__6487 = G__8243;
continue;
} else {
var vec__6497 = cljs.core.first(seq__6484__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6497,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8244 = cljs.core.next(seq__6484__$1);
var G__8245 = null;
var G__8246 = (0);
var G__8247 = (0);
seq__6484 = G__8244;
chunk__6485 = G__8245;
count__6486 = G__8246;
i__6487 = G__8247;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6500){
var map__6501 = p__6500;
var map__6501__$1 = cljs.core.__destructure_map(map__6501);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6501__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6501__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6501__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8248 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8248)){
var current_class_name_8249 = temp__5823__auto___8248;
var temp__5823__auto___8250__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8249);
if(cljs.core.truth_(temp__5823__auto___8250__$1)){
var class_def_8251 = temp__5823__auto___8250__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8251,field))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___8252 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8252)){
var mf_8253 = temp__5823__auto___8252;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8253,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6502){
var map__6503 = p__6502;
var map__6503__$1 = cljs.core.__destructure_map(map__6503);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___8254 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8254)){
var current_class_name_8255 = temp__5823__auto___8254;
var temp__5823__auto___8256__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_8255);
if(cljs.core.truth_(temp__5823__auto___8256__$1)){
var class_def_8257 = temp__5823__auto___8256__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_8257,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6504.cljs$core$IFn$_invoke$arity$1 ? fexpr__6504.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6504.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6505){
var map__6506 = p__6505;
var map__6506__$1 = cljs.core.__destructure_map(map__6506);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6506__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6507 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6507.cljs$core$IFn$_invoke$arity$1 ? fexpr__6507.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6507.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6508_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6508_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6509){
var map__6510 = p__6509;
var map__6510__$1 = cljs.core.__destructure_map(map__6510);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6510__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

try{var seq__6517_8258 = cljs.core.seq(body);
var chunk__6518_8259 = null;
var count__6519_8260 = (0);
var i__6520_8261 = (0);
while(true){
if((i__6520_8261 < count__6519_8260)){
var stmt_8262 = chunk__6518_8259.cljs$core$IIndexed$_nth$arity$2(null,i__6520_8261);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8262);


var G__8263 = seq__6517_8258;
var G__8264 = chunk__6518_8259;
var G__8265 = count__6519_8260;
var G__8266 = (i__6520_8261 + (1));
seq__6517_8258 = G__8263;
chunk__6518_8259 = G__8264;
count__6519_8260 = G__8265;
i__6520_8261 = G__8266;
continue;
} else {
var temp__5823__auto___8267 = cljs.core.seq(seq__6517_8258);
if(temp__5823__auto___8267){
var seq__6517_8268__$1 = temp__5823__auto___8267;
if(cljs.core.chunked_seq_QMARK_(seq__6517_8268__$1)){
var c__5673__auto___8269 = cljs.core.chunk_first(seq__6517_8268__$1);
var G__8270 = cljs.core.chunk_rest(seq__6517_8268__$1);
var G__8271 = c__5673__auto___8269;
var G__8272 = cljs.core.count(c__5673__auto___8269);
var G__8273 = (0);
seq__6517_8258 = G__8270;
chunk__6518_8259 = G__8271;
count__6519_8260 = G__8272;
i__6520_8261 = G__8273;
continue;
} else {
var stmt_8274 = cljs.core.first(seq__6517_8268__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8274);


var G__8275 = cljs.core.next(seq__6517_8268__$1);
var G__8276 = null;
var G__8277 = (0);
var G__8278 = (0);
seq__6517_8258 = G__8275;
chunk__6518_8259 = G__8276;
count__6519_8260 = G__8277;
i__6520_8261 = G__8278;
continue;
}
} else {
}
}
break;
}
}catch (e6511){var e_8279 = e6511;
if((((e_8279 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8279)))))){
throw e_8279;
} else {
var exc_value_8280 = (((((e_8279 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8279))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8279)):e_8279.message);
var rescue_env_8281 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8282 = nex.interpreter.env_define(rescue_env_8281,"exception",exc_value_8280);
var rescue_ctx_8283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_8281);
try{var seq__6513_8284 = cljs.core.seq(rescue);
var chunk__6514_8285 = null;
var count__6515_8286 = (0);
var i__6516_8287 = (0);
while(true){
if((i__6516_8287 < count__6515_8286)){
var stmt_8288 = chunk__6514_8285.cljs$core$IIndexed$_nth$arity$2(null,i__6516_8287);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8283,stmt_8288);


var G__8289 = seq__6513_8284;
var G__8290 = chunk__6514_8285;
var G__8291 = count__6515_8286;
var G__8292 = (i__6516_8287 + (1));
seq__6513_8284 = G__8289;
chunk__6514_8285 = G__8290;
count__6515_8286 = G__8291;
i__6516_8287 = G__8292;
continue;
} else {
var temp__5823__auto___8293 = cljs.core.seq(seq__6513_8284);
if(temp__5823__auto___8293){
var seq__6513_8294__$1 = temp__5823__auto___8293;
if(cljs.core.chunked_seq_QMARK_(seq__6513_8294__$1)){
var c__5673__auto___8295 = cljs.core.chunk_first(seq__6513_8294__$1);
var G__8296 = cljs.core.chunk_rest(seq__6513_8294__$1);
var G__8297 = c__5673__auto___8295;
var G__8298 = cljs.core.count(c__5673__auto___8295);
var G__8299 = (0);
seq__6513_8284 = G__8296;
chunk__6514_8285 = G__8297;
count__6515_8286 = G__8298;
i__6516_8287 = G__8299;
continue;
} else {
var stmt_8300 = cljs.core.first(seq__6513_8294__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8283,stmt_8300);


var G__8301 = cljs.core.next(seq__6513_8294__$1);
var G__8302 = null;
var G__8303 = (0);
var G__8304 = (0);
seq__6513_8284 = G__8301;
chunk__6514_8285 = G__8302;
count__6515_8286 = G__8303;
i__6516_8287 = G__8304;
continue;
}
} else {
}
}
break;
}

throw e_8279;
}catch (e6512){var re_8305 = e6512;
if((((re_8305 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_8305)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_8305;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__6522){
var map__6523 = p__6522;
var map__6523__$1 = cljs.core.__destructure_map(map__6523);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6523__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6523__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6521_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__6521_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__6524){
var map__6525 = p__6524;
var map__6525__$1 = cljs.core.__destructure_map(map__6525);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6525__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6525__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6525__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__6526){
var map__6527 = p__6526;
var map__6527__$1 = cljs.core.__destructure_map(map__6527);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6527__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6527__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6527__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__6531){
var map__6532 = p__6531;
var map__6532__$1 = cljs.core.__destructure_map(map__6532);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6532__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6532__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6532__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6532__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6528_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6528_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6529_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6529_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6530_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6530_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__6534){
var map__6535 = p__6534;
var map__6535__$1 = cljs.core.__destructure_map(map__6535);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6535__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6535__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6535__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__6537 = cljs.core.first(cs);
var map__6537__$1 = cljs.core.__destructure_map(map__6537);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6537__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6537__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__6537,map__6537__$1,values,body,val,map__6535,map__6535__$1,expr,clauses,else$){
return (function (p1__6533_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6533_SHARP_));
});})(cs,map__6537,map__6537__$1,values,body,val,map__6535,map__6535__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__8306 = cljs.core.rest(cs);
cs = G__8306;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (ctx,p__6541){
var map__6542 = p__6541;
var map__6542__$1 = cljs.core.__destructure_map(map__6542);
var node = map__6542__$1;
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6542__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6542__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6542__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var prepared = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6538_SHARP_){
return nex.interpreter.prepare_select_clause(ctx,p1__6538_SHARP_);
}),clauses);
var timeout_ms_val = (cljs.core.truth_(timeout)?nex.interpreter.timeout_ms(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout))):null);
var deadline = (cljs.core.truth_(timeout_ms_val)?(nex.interpreter.current_time_ms() + timeout_ms_val):null);
while(true){
var temp__5821__auto__ = cljs.core.some(((function (prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout){
return (function (prepared_clause){
var temp__5823__auto__ = nex.interpreter.attempt_select_clause(prepared_clause);
if(cljs.core.truth_(temp__5823__auto__)){
var outcome = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prepared_clause,outcome], null);
} else {
return null;
}
});})(prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout))
,prepared);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__6543 = temp__5821__auto__;
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6543,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6543,(1),null);
return nex.interpreter.execute_select_body(ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(outcome));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout){
return (function (p1__6539_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6539_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout))
,else$));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deadline;
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.current_time_ms() >= deadline);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout){
return (function (p1__6540_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6540_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__6542,map__6542__$1,node,clauses,else$,timeout))
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__6547){
var map__6548 = p__6547;
var map__6548__$1 = cljs.core.__destructure_map(map__6548);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6548__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__6549_8307 = cljs.core.seq(init);
var chunk__6550_8308 = null;
var count__6551_8309 = (0);
var i__6552_8310 = (0);
while(true){
if((i__6552_8310 < count__6551_8309)){
var stmt_8311 = chunk__6550_8308.cljs$core$IIndexed$_nth$arity$2(null,i__6552_8310);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8311);


var G__8312 = seq__6549_8307;
var G__8313 = chunk__6550_8308;
var G__8314 = count__6551_8309;
var G__8315 = (i__6552_8310 + (1));
seq__6549_8307 = G__8312;
chunk__6550_8308 = G__8313;
count__6551_8309 = G__8314;
i__6552_8310 = G__8315;
continue;
} else {
var temp__5823__auto___8316 = cljs.core.seq(seq__6549_8307);
if(temp__5823__auto___8316){
var seq__6549_8317__$1 = temp__5823__auto___8316;
if(cljs.core.chunked_seq_QMARK_(seq__6549_8317__$1)){
var c__5673__auto___8318 = cljs.core.chunk_first(seq__6549_8317__$1);
var G__8319 = cljs.core.chunk_rest(seq__6549_8317__$1);
var G__8320 = c__5673__auto___8318;
var G__8321 = cljs.core.count(c__5673__auto___8318);
var G__8322 = (0);
seq__6549_8307 = G__8319;
chunk__6550_8308 = G__8320;
count__6551_8309 = G__8321;
i__6552_8310 = G__8322;
continue;
} else {
var stmt_8323 = cljs.core.first(seq__6549_8317__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8323);


var G__8324 = cljs.core.next(seq__6549_8317__$1);
var G__8325 = null;
var G__8326 = (0);
var G__8327 = (0);
seq__6549_8307 = G__8324;
chunk__6550_8308 = G__8325;
count__6551_8309 = G__8326;
i__6552_8310 = G__8327;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6548,map__6548__$1,init,invariant,variant,until,body){
return (function (p1__6546_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6546_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6548,map__6548__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__8328 = result;
var G__8329 = curr_variant;
var G__8330 = (iteration + (1));
last_result = G__8328;
prev_variant = G__8329;
iteration = G__8330;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__6553){
var map__6554 = p__6553;
var map__6554__$1 = cljs.core.__destructure_map(map__6554);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6554__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__6555){
var map__6556 = p__6555;
var map__6556__$1 = cljs.core.__destructure_map(map__6556);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6556__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__6557){
var map__6558 = p__6557;
var map__6558__$1 = cljs.core.__destructure_map(map__6558);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6558__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__6559){
var map__6560 = p__6559;
var map__6560__$1 = cljs.core.__destructure_map(map__6560);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__6561){
var map__6562 = p__6561;
var map__6562__$1 = cljs.core.__destructure_map(map__6562);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6562__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__6563){
var map__6564 = p__6563;
var map__6564__$1 = cljs.core.__destructure_map(map__6564);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6564__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__6565){
var map__6566 = p__6565;
var map__6566__$1 = cljs.core.__destructure_map(map__6566);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6566__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__6568){
var map__6569 = p__6568;
var map__6569__$1 = cljs.core.__destructure_map(map__6569);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6569__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6567_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6567_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),(function (ctx,p__6571){
var map__6572 = p__6571;
var map__6572__$1 = cljs.core.__destructure_map(map__6572);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6572__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_set_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6570_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6570_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__6573){
var map__6574 = p__6573;
var map__6574__$1 = cljs.core.__destructure_map(map__6574);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6574__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6575){
var map__6576 = p__6575;
var map__6576__$1 = cljs.core.__destructure_map(map__6576);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__6577){
var map__6578 = p__6577;
var map__6578__$1 = cljs.core.__destructure_map(map__6578);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6578__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6578__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__6579){
var map__6580 = p__6579;
var map__6580__$1 = cljs.core.__destructure_map(map__6580);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e6581){var _ = e6581;
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
var G__6583 = ctx;
var G__6584 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__6583,G__6584) : nex.interpreter.get_all_fields.call(null,G__6583,G__6584));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6582_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6582_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6582_SHARP_))));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6585_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6585_SHARP_),constructor_name);
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
return cljs.core.some((function (p__6586){
var map__6587 = p__6586;
var map__6587__$1 = cljs.core.__destructure_map(map__6587);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6587__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__6596){
var map__6597 = p__6596;
var map__6597__$1 = cljs.core.__destructure_map(map__6597);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6597__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6597__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6597__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6597__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__6598 = class_name;
switch (G__6598) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6588_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6588_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6590_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6590_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6591_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6591_SHARP_);
}),args);
var G__6599 = constructor$;
switch (G__6599) {
case "with_title":
var G__6600 = cljs.core.count(arg_values);
switch (G__6600) {
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
var G__6601 = cljs.core.count(arg_values);
switch (G__6601) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6592_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6592_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6593_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6593_SHARP_);
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
var ___$1 = (function (){var seq__6602 = cljs.core.seq(initial_field_map);
var chunk__6603 = null;
var count__6604 = (0);
var i__6605 = (0);
while(true){
if((i__6605 < count__6604)){
var vec__6612 = chunk__6603.cljs$core$IIndexed$_nth$arity$2(null,i__6605);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6612,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8335 = seq__6602;
var G__8336 = chunk__6603;
var G__8337 = count__6604;
var G__8338 = (i__6605 + (1));
seq__6602 = G__8335;
chunk__6603 = G__8336;
count__6604 = G__8337;
i__6605 = G__8338;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6602);
if(temp__5823__auto__){
var seq__6602__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6602__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6602__$1);
var G__8339 = cljs.core.chunk_rest(seq__6602__$1);
var G__8340 = c__5673__auto__;
var G__8341 = cljs.core.count(c__5673__auto__);
var G__8342 = (0);
seq__6602 = G__8339;
chunk__6603 = G__8340;
count__6604 = G__8341;
i__6605 = G__8342;
continue;
} else {
var vec__6615 = cljs.core.first(seq__6602__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6615,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__8343 = cljs.core.next(seq__6602__$1);
var G__8344 = null;
var G__8345 = (0);
var G__8346 = (0);
seq__6602 = G__8343;
chunk__6603 = G__8344;
count__6604 = G__8345;
i__6605 = G__8346;
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6594_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6594_SHARP_);
}),args);
var ___$3 = (cljs.core.truth_(params)?(function (){var seq__6618 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6619 = null;
var count__6620 = (0);
var i__6621 = (0);
while(true){
if((i__6621 < count__6620)){
var vec__6628 = chunk__6619.cljs$core$IIndexed$_nth$arity$2(null,i__6621);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8347 = seq__6618;
var G__8348 = chunk__6619;
var G__8349 = count__6620;
var G__8350 = (i__6621 + (1));
seq__6618 = G__8347;
chunk__6619 = G__8348;
count__6620 = G__8349;
i__6621 = G__8350;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6618);
if(temp__5823__auto__){
var seq__6618__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6618__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6618__$1);
var G__8351 = cljs.core.chunk_rest(seq__6618__$1);
var G__8352 = c__5673__auto__;
var G__8353 = cljs.core.count(c__5673__auto__);
var G__8354 = (0);
seq__6618 = G__8351;
chunk__6619 = G__8352;
count__6620 = G__8353;
i__6621 = G__8354;
continue;
} else {
var vec__6631 = cljs.core.first(seq__6618__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6631,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6631,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8355 = cljs.core.next(seq__6618__$1);
var G__8356 = null;
var G__8357 = (0);
var G__8358 = (0);
seq__6618 = G__8355;
chunk__6619 = G__8356;
count__6620 = G__8357;
i__6621 = G__8358;
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
var seq__6634 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__6635 = null;
var count__6636 = (0);
var i__6637 = (0);
while(true){
if((i__6637 < count__6636)){
var stmt = chunk__6635.cljs$core$IIndexed$_nth$arity$2(null,i__6637);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8359 = seq__6634;
var G__8360 = chunk__6635;
var G__8361 = count__6636;
var G__8362 = (i__6637 + (1));
seq__6634 = G__8359;
chunk__6635 = G__8360;
count__6636 = G__8361;
i__6637 = G__8362;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6634);
if(temp__5823__auto__){
var seq__6634__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6634__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6634__$1);
var G__8363 = cljs.core.chunk_rest(seq__6634__$1);
var G__8364 = c__5673__auto__;
var G__8365 = cljs.core.count(c__5673__auto__);
var G__8366 = (0);
seq__6634 = G__8363;
chunk__6635 = G__8364;
count__6636 = G__8365;
i__6637 = G__8366;
continue;
} else {
var stmt = cljs.core.first(seq__6634__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8367 = cljs.core.next(seq__6634__$1);
var G__8368 = null;
var G__8369 = (0);
var G__8370 = (0);
seq__6634 = G__8367;
chunk__6635 = G__8368;
count__6636 = G__8369;
i__6637 = G__8370;
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
}catch (e6638){var ___$6 = e6638;
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
var inv_env_8371 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8372__$1 = (function (){var seq__6639 = cljs.core.seq(final_field_map);
var chunk__6640 = null;
var count__6641 = (0);
var i__6642 = (0);
while(true){
if((i__6642 < count__6641)){
var vec__6649 = chunk__6640.cljs$core$IIndexed$_nth$arity$2(null,i__6642);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(1),null);
nex.interpreter.env_define(inv_env_8371,cljs.core.name(field_name),field_val);


var G__8374 = seq__6639;
var G__8375 = chunk__6640;
var G__8376 = count__6641;
var G__8377 = (i__6642 + (1));
seq__6639 = G__8374;
chunk__6640 = G__8375;
count__6641 = G__8376;
i__6642 = G__8377;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6639);
if(temp__5823__auto__){
var seq__6639__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6639__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6639__$1);
var G__8378 = cljs.core.chunk_rest(seq__6639__$1);
var G__8379 = c__5673__auto__;
var G__8380 = cljs.core.count(c__5673__auto__);
var G__8381 = (0);
seq__6639 = G__8378;
chunk__6640 = G__8379;
count__6641 = G__8380;
i__6642 = G__8381;
continue;
} else {
var vec__6652 = cljs.core.first(seq__6639__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6652,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6652,(1),null);
nex.interpreter.env_define(inv_env_8371,cljs.core.name(field_name),field_val);


var G__8382 = cljs.core.next(seq__6639__$1);
var G__8383 = null;
var G__8384 = (0);
var G__8385 = (0);
seq__6639 = G__8382;
chunk__6640 = G__8383;
count__6641 = G__8384;
i__6642 = G__8385;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_8373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_8371);
nex.interpreter.check_class_invariant(inv_ctx_8373,class_def);

return obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),(function (ctx,p__6655){
var map__6656 = p__6655;
var map__6656__$1 = cljs.core.__destructure_map(map__6656);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6656__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__6657){
var map__6658 = p__6657;
var map__6658__$1 = cljs.core.__destructure_map(map__6658);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__6659 = cljs.core.seq(old_values);
var chunk__6660 = null;
var count__6661 = (0);
var i__6662 = (0);
while(true){
if((i__6662 < count__6661)){
var vec__6669 = chunk__6660.cljs$core$IIndexed$_nth$arity$2(null,i__6662);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6669,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6669,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8386 = seq__6659;
var G__8387 = chunk__6660;
var G__8388 = count__6661;
var G__8389 = (i__6662 + (1));
seq__6659 = G__8386;
chunk__6660 = G__8387;
count__6661 = G__8388;
i__6662 = G__8389;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6659);
if(temp__5823__auto__){
var seq__6659__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6659__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6659__$1);
var G__8390 = cljs.core.chunk_rest(seq__6659__$1);
var G__8391 = c__5673__auto__;
var G__8392 = cljs.core.count(c__5673__auto__);
var G__8393 = (0);
seq__6659 = G__8390;
chunk__6660 = G__8391;
count__6661 = G__8392;
i__6662 = G__8393;
continue;
} else {
var vec__6672 = cljs.core.first(seq__6659__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6672,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6672,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__8394 = cljs.core.next(seq__6659__$1);
var G__8395 = null;
var G__8396 = (0);
var G__8397 = (0);
seq__6659 = G__8394;
chunk__6660 = G__8395;
count__6661 = G__8396;
i__6662 = G__8397;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__6675){
var map__6676 = p__6675;
var map__6676__$1 = cljs.core.__destructure_map(map__6676);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6676__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6676__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
}catch (e6677){var _ = e6677;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result")){
return nex.interpreter.env_lookup(env,"result");
} else {
var res = (function (){try{return nex.interpreter.env_lookup(env,"result");
}catch (e6678){var _ = e6678;
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
return nex.interpreter.promise_reduce(assertions,null,(function (_,p__6679){
var map__6680 = p__6679;
var map__6680__$1 = cljs.core.__destructure_map(map__6680);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6680__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6680__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
var vec__6693 = (function (){var temp__5821__auto__ = nex.interpreter.get_parent_classes(ctx,class_def__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6696,p__6697){
var vec__6698 = p__6696;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6698,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6698,(1),null);
var map__6701 = p__6697;
var map__6701__$1 = cljs.core.__destructure_map(map__6701);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6701__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6702 = nex$interpreter$check_class_invariant_async_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6702,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6702,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693,(1),null);
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
var vec__6705 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6705,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6705,(1),null);
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
var G__6709 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6709__$1 = (((G__6709 instanceof cljs.core.Keyword))?G__6709.fqn:null);
switch (G__6709__$1) {
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
var G__6710 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6710) : nex.interpreter.async_free_node_QMARK_.call(null,G__6710));

break;
case "binary":
var and__5140__auto__ = (function (){var G__6711 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6711) : nex.interpreter.async_free_node_QMARK_.call(null,G__6711));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6712 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6712) : nex.interpreter.async_free_node_QMARK_.call(null,G__6712));
} else {
return and__5140__auto__;
}

break;
case "subscript":
var and__5140__auto__ = (function (){var G__6713 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6713) : nex.interpreter.async_free_node_QMARK_.call(null,G__6713));
})();
if(cljs.core.truth_(and__5140__auto__)){
var G__6714 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6714) : nex.interpreter.async_free_node_QMARK_.call(null,G__6714));
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
return cljs.core.every_QMARK_((function (p__6715){
var map__6716 = p__6715;
var map__6716__$1 = cljs.core.__destructure_map(map__6716);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6716__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6716__$1,new cljs.core.Keyword(null,"value","value",305978217));
var and__5140__auto__ = (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(key) : nex.interpreter.async_free_node_QMARK_.call(null,key));
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.async_free_node_QMARK_.call(null,value));
} else {
return and__5140__auto__;
}
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node));

break;
case "statement":
var G__6717 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.async_free_node_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6717) : nex.interpreter.async_free_node_QMARK_.call(null,G__6717));

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
var _ = (function (){var seq__6718 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6719 = null;
var count__6720 = (0);
var i__6721 = (0);
while(true){
if((i__6721 < count__6720)){
var vec__6728 = chunk__6719.cljs$core$IIndexed$_nth$arity$2(null,i__6721);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8399 = seq__6718;
var G__8400 = chunk__6719;
var G__8401 = count__6720;
var G__8402 = (i__6721 + (1));
seq__6718 = G__8399;
chunk__6719 = G__8400;
count__6720 = G__8401;
i__6721 = G__8402;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6718);
if(temp__5823__auto__){
var seq__6718__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6718__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6718__$1);
var G__8403 = cljs.core.chunk_rest(seq__6718__$1);
var G__8404 = c__5673__auto__;
var G__8405 = cljs.core.count(c__5673__auto__);
var G__8406 = (0);
seq__6718 = G__8403;
chunk__6719 = G__8404;
count__6720 = G__8405;
i__6721 = G__8406;
continue;
} else {
var vec__6731 = cljs.core.first(seq__6718__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8407 = cljs.core.next(seq__6718__$1);
var G__8408 = null;
var G__8409 = (0);
var G__8410 = (0);
seq__6718 = G__8407;
chunk__6719 = G__8408;
count__6720 = G__8409;
i__6721 = G__8410;
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
var ___$1 = (function (){var seq__6734 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6735 = null;
var count__6736 = (0);
var i__6737 = (0);
while(true){
if((i__6737 < count__6736)){
var vec__6744 = chunk__6735.cljs$core$IIndexed$_nth$arity$2(null,i__6737);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6744,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6744,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8411 = seq__6734;
var G__8412 = chunk__6735;
var G__8413 = count__6736;
var G__8414 = (i__6737 + (1));
seq__6734 = G__8411;
chunk__6735 = G__8412;
count__6736 = G__8413;
i__6737 = G__8414;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6734);
if(temp__5823__auto__){
var seq__6734__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6734__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6734__$1);
var G__8415 = cljs.core.chunk_rest(seq__6734__$1);
var G__8416 = c__5673__auto__;
var G__8417 = cljs.core.count(c__5673__auto__);
var G__8418 = (0);
seq__6734 = G__8415;
chunk__6735 = G__8416;
count__6736 = G__8417;
i__6737 = G__8418;
continue;
} else {
var vec__6747 = cljs.core.first(seq__6734__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8419 = cljs.core.next(seq__6734__$1);
var G__8420 = null;
var G__8421 = (0);
var G__8422 = (0);
seq__6734 = G__8419;
chunk__6735 = G__8420;
count__6736 = G__8421;
i__6737 = G__8422;
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
}catch (e6750){var ___$5 = e6750;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields);
var result = nex.interpreter.async_result_value(method_env);
var temp__5823__auto___8423 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8423)){
var tgt_8424 = temp__5823__auto___8423;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8424,updated_obj);
}catch (e6751){var __8425__$5 = e6751;
}} else {
}

var seq__6752_8426 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__6753_8427 = null;
var count__6754_8428 = (0);
var i__6755_8429 = (0);
while(true){
if((i__6755_8429 < count__6754_8428)){
var vec__6764_8430 = chunk__6753_8427.cljs$core$IIndexed$_nth$arity$2(null,i__6755_8429);
var field_name_8431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764_8430,(0),null);
var field_val_8432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764_8430,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8431))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8431),field_val_8432);
}catch (e6767){var __8433__$5 = e6767;
}} else {
}


var G__8434 = seq__6752_8426;
var G__8435 = chunk__6753_8427;
var G__8436 = count__6754_8428;
var G__8437 = (i__6755_8429 + (1));
seq__6752_8426 = G__8434;
chunk__6753_8427 = G__8435;
count__6754_8428 = G__8436;
i__6755_8429 = G__8437;
continue;
} else {
var temp__5823__auto___8438 = cljs.core.seq(seq__6752_8426);
if(temp__5823__auto___8438){
var seq__6752_8439__$1 = temp__5823__auto___8438;
if(cljs.core.chunked_seq_QMARK_(seq__6752_8439__$1)){
var c__5673__auto___8440 = cljs.core.chunk_first(seq__6752_8439__$1);
var G__8441 = cljs.core.chunk_rest(seq__6752_8439__$1);
var G__8442 = c__5673__auto___8440;
var G__8443 = cljs.core.count(c__5673__auto___8440);
var G__8444 = (0);
seq__6752_8426 = G__8441;
chunk__6753_8427 = G__8442;
count__6754_8428 = G__8443;
i__6755_8429 = G__8444;
continue;
} else {
var vec__6768_8445 = cljs.core.first(seq__6752_8439__$1);
var field_name_8446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6768_8445,(0),null);
var field_val_8447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6768_8445,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8446))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8446),field_val_8447);
}catch (e6771){var __8448__$5 = e6771;
}} else {
}


var G__8449 = cljs.core.next(seq__6752_8439__$1);
var G__8450 = null;
var G__8451 = (0);
var G__8452 = (0);
seq__6752_8426 = G__8449;
chunk__6753_8427 = G__8450;
count__6754_8428 = G__8451;
i__6755_8429 = G__8452;
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
var map__6780 = node;
var map__6780__$1 = cljs.core.__destructure_map(map__6780);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6780__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6781_8453 = cljs.core.seq(imports);
var chunk__6782_8454 = null;
var count__6783_8455 = (0);
var i__6784_8456 = (0);
while(true){
if((i__6784_8456 < count__6783_8455)){
var import_node_8457 = chunk__6782_8454.cljs$core$IIndexed$_nth$arity$2(null,i__6784_8456);
if(cljs.core.map_QMARK_(import_node_8457)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8457);
} else {
}


var G__8458 = seq__6781_8453;
var G__8459 = chunk__6782_8454;
var G__8460 = count__6783_8455;
var G__8461 = (i__6784_8456 + (1));
seq__6781_8453 = G__8458;
chunk__6782_8454 = G__8459;
count__6783_8455 = G__8460;
i__6784_8456 = G__8461;
continue;
} else {
var temp__5823__auto___8462 = cljs.core.seq(seq__6781_8453);
if(temp__5823__auto___8462){
var seq__6781_8463__$1 = temp__5823__auto___8462;
if(cljs.core.chunked_seq_QMARK_(seq__6781_8463__$1)){
var c__5673__auto___8464 = cljs.core.chunk_first(seq__6781_8463__$1);
var G__8465 = cljs.core.chunk_rest(seq__6781_8463__$1);
var G__8466 = c__5673__auto___8464;
var G__8467 = cljs.core.count(c__5673__auto___8464);
var G__8468 = (0);
seq__6781_8453 = G__8465;
chunk__6782_8454 = G__8466;
count__6783_8455 = G__8467;
i__6784_8456 = G__8468;
continue;
} else {
var import_node_8469 = cljs.core.first(seq__6781_8463__$1);
if(cljs.core.map_QMARK_(import_node_8469)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8469);
} else {
}


var G__8470 = cljs.core.next(seq__6781_8463__$1);
var G__8471 = null;
var G__8472 = (0);
var G__8473 = (0);
seq__6781_8453 = G__8470;
chunk__6782_8454 = G__8471;
count__6783_8455 = G__8472;
i__6784_8456 = G__8473;
continue;
}
} else {
}
}
break;
}

var seq__6785_8474 = cljs.core.seq(interns);
var chunk__6786_8475 = null;
var count__6787_8476 = (0);
var i__6788_8477 = (0);
while(true){
if((i__6788_8477 < count__6787_8476)){
var intern_node_8478 = chunk__6786_8475.cljs$core$IIndexed$_nth$arity$2(null,i__6788_8477);
if(cljs.core.map_QMARK_(intern_node_8478)){
nex.interpreter.process_intern(ctx,intern_node_8478);
} else {
}


var G__8479 = seq__6785_8474;
var G__8480 = chunk__6786_8475;
var G__8481 = count__6787_8476;
var G__8482 = (i__6788_8477 + (1));
seq__6785_8474 = G__8479;
chunk__6786_8475 = G__8480;
count__6787_8476 = G__8481;
i__6788_8477 = G__8482;
continue;
} else {
var temp__5823__auto___8483 = cljs.core.seq(seq__6785_8474);
if(temp__5823__auto___8483){
var seq__6785_8484__$1 = temp__5823__auto___8483;
if(cljs.core.chunked_seq_QMARK_(seq__6785_8484__$1)){
var c__5673__auto___8485 = cljs.core.chunk_first(seq__6785_8484__$1);
var G__8486 = cljs.core.chunk_rest(seq__6785_8484__$1);
var G__8487 = c__5673__auto___8485;
var G__8488 = cljs.core.count(c__5673__auto___8485);
var G__8489 = (0);
seq__6785_8474 = G__8486;
chunk__6786_8475 = G__8487;
count__6787_8476 = G__8488;
i__6788_8477 = G__8489;
continue;
} else {
var intern_node_8490 = cljs.core.first(seq__6785_8484__$1);
if(cljs.core.map_QMARK_(intern_node_8490)){
nex.interpreter.process_intern(ctx,intern_node_8490);
} else {
}


var G__8491 = cljs.core.next(seq__6785_8484__$1);
var G__8492 = null;
var G__8493 = (0);
var G__8494 = (0);
seq__6785_8474 = G__8491;
chunk__6786_8475 = G__8492;
count__6787_8476 = G__8493;
i__6788_8477 = G__8494;
continue;
}
} else {
}
}
break;
}

var seq__6789_8495 = cljs.core.seq(classes);
var chunk__6790_8496 = null;
var count__6791_8497 = (0);
var i__6792_8498 = (0);
while(true){
if((i__6792_8498 < count__6791_8497)){
var class_node_8499 = chunk__6790_8496.cljs$core$IIndexed$_nth$arity$2(null,i__6792_8498);
if(cljs.core.map_QMARK_(class_node_8499)){
nex.interpreter.register_class(ctx,class_node_8499);
} else {
}


var G__8500 = seq__6789_8495;
var G__8501 = chunk__6790_8496;
var G__8502 = count__6791_8497;
var G__8503 = (i__6792_8498 + (1));
seq__6789_8495 = G__8500;
chunk__6790_8496 = G__8501;
count__6791_8497 = G__8502;
i__6792_8498 = G__8503;
continue;
} else {
var temp__5823__auto___8504 = cljs.core.seq(seq__6789_8495);
if(temp__5823__auto___8504){
var seq__6789_8505__$1 = temp__5823__auto___8504;
if(cljs.core.chunked_seq_QMARK_(seq__6789_8505__$1)){
var c__5673__auto___8506 = cljs.core.chunk_first(seq__6789_8505__$1);
var G__8507 = cljs.core.chunk_rest(seq__6789_8505__$1);
var G__8508 = c__5673__auto___8506;
var G__8509 = cljs.core.count(c__5673__auto___8506);
var G__8510 = (0);
seq__6789_8495 = G__8507;
chunk__6790_8496 = G__8508;
count__6791_8497 = G__8509;
i__6792_8498 = G__8510;
continue;
} else {
var class_node_8511 = cljs.core.first(seq__6789_8505__$1);
if(cljs.core.map_QMARK_(class_node_8511)){
nex.interpreter.register_class(ctx,class_node_8511);
} else {
}


var G__8512 = cljs.core.next(seq__6789_8505__$1);
var G__8513 = null;
var G__8514 = (0);
var G__8515 = (0);
seq__6789_8495 = G__8512;
chunk__6790_8496 = G__8513;
count__6791_8497 = G__8514;
i__6792_8498 = G__8515;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.promise_reduce(functions,null,(function (_,fn_node){
if(cljs.core.map_QMARK_(fn_node)){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,fn_node) : nex.interpreter.eval_node_async.call(null,ctx,fn_node));
} else {
return null;
}
})).then((function (_){
return nex.interpreter.promise_reduce(((cljs.core.seq(statements))?statements:calls),null,(function (___$1,stmt_node){
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
return Promise.resolve((function (){
nex.interpreter.register_class(ctx,node);

return null;
})()
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"function","function",-2127255473))){
var map__6793 = node;
var map__6793__$1 = cljs.core.__destructure_map(map__6793);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return Promise.resolve(obj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318))){
var map__6794 = node;
var map__6794__$1 = cljs.core.__destructure_map(map__6794);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6794__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6794__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

return Promise.resolve(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"call","call",-519999866))){
var map__6795 = node;
var map__6795__$1 = cljs.core.__destructure_map(map__6795);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6795__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6795__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6795__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6795__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6796 = ctx;
var G__6797 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6796,G__6797) : nex.interpreter.eval_node_async.call(null,G__6796,G__6797));
} else {
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6772_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6772_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6772_SHARP_));
}),args)).then((function (arg_values){
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
return (cljs.core.truth_((function (){var or__5142__auto__ = parent_class;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = class_target;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return target_name;
}
}
})())?Promise.resolve(null):(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,target) : nex.interpreter.eval_node_async.call(null,ctx,target))).then((function (target_value){
var obj = (cljs.core.truth_(parent_class)?null:(cljs.core.truth_(class_target)?null:(cljs.core.truth_(target_name)?nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name):target_value)));
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
return Promise.resolve(nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,class_target,method));
} else {
if(cljs.core.truth_(parent_class)){
return nex.interpreter.dispatch_parent_call_async(ctx,new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx),target_name,method,arg_values);
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

var all_fields_8516 = nex.interpreter.get_all_fields(ctx,class_def);
var effective_require_8517 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(method_lookup);
var effective_ensure_8518 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(method_lookup);
var has_postconditions_QMARK__8519 = cljs.core.seq(effective_ensure_8518);
var old_values_8520 = ((has_postconditions_QMARK__8519)?new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj):null);
var method_env_8521 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
}
})());
var param_names_8522 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params));
var __8523 = (function (){var seq__6798 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6799 = null;
var count__6800 = (0);
var i__6801 = (0);
while(true){
if((i__6801 < count__6800)){
var vec__6808 = chunk__6799.cljs$core$IIndexed$_nth$arity$2(null,i__6801);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6808,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6808,(1),null);
nex.interpreter.env_define(method_env_8521,cljs.core.name(field_name),field_val);


var G__8532 = seq__6798;
var G__8533 = chunk__6799;
var G__8534 = count__6800;
var G__8535 = (i__6801 + (1));
seq__6798 = G__8532;
chunk__6799 = G__8533;
count__6800 = G__8534;
i__6801 = G__8535;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6798);
if(temp__5823__auto__){
var seq__6798__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6798__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6798__$1);
var G__8536 = cljs.core.chunk_rest(seq__6798__$1);
var G__8537 = c__5673__auto__;
var G__8538 = cljs.core.count(c__5673__auto__);
var G__8539 = (0);
seq__6798 = G__8536;
chunk__6799 = G__8537;
count__6800 = G__8538;
i__6801 = G__8539;
continue;
} else {
var vec__6811 = cljs.core.first(seq__6798__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6811,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6811,(1),null);
nex.interpreter.env_define(method_env_8521,cljs.core.name(field_name),field_val);


var G__8540 = cljs.core.next(seq__6798__$1);
var G__8541 = null;
var G__8542 = (0);
var G__8543 = (0);
seq__6798 = G__8540;
chunk__6799 = G__8541;
count__6800 = G__8542;
i__6801 = G__8543;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8524__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,method_env_8521,class_def);
var __8525__$2 = (function (){var seq__6814 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6815 = null;
var count__6816 = (0);
var i__6817 = (0);
while(true){
if((i__6817 < count__6816)){
var vec__6824 = chunk__6815.cljs$core$IIndexed$_nth$arity$2(null,i__6817);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6824,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6824,(1),null);
nex.interpreter.env_define(method_env_8521,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8544 = seq__6814;
var G__8545 = chunk__6815;
var G__8546 = count__6816;
var G__8547 = (i__6817 + (1));
seq__6814 = G__8544;
chunk__6815 = G__8545;
count__6816 = G__8546;
i__6817 = G__8547;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6814);
if(temp__5823__auto__){
var seq__6814__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6814__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6814__$1);
var G__8548 = cljs.core.chunk_rest(seq__6814__$1);
var G__8549 = c__5673__auto__;
var G__8550 = cljs.core.count(c__5673__auto__);
var G__8551 = (0);
seq__6814 = G__8548;
chunk__6815 = G__8549;
count__6816 = G__8550;
i__6817 = G__8551;
continue;
} else {
var vec__6827 = cljs.core.first(seq__6814__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6827,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6827,(1),null);
nex.interpreter.env_define(method_env_8521,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8552 = cljs.core.next(seq__6814__$1);
var G__8553 = null;
var G__8554 = (0);
var G__8555 = (0);
seq__6814 = G__8552;
chunk__6815 = G__8553;
count__6816 = G__8554;
i__6817 = G__8555;
continue;
}
} else {
return null;
}
}
break;
}
})();
var modified_fields_8526 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var return_type_8527 = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_def);
var default_result_8528 = (cljs.core.truth_(return_type_8527)?nex.interpreter.get_default_field_value(return_type_8527):null);
var __8529__$3 = nex.interpreter.env_define(method_env_8521,"result",default_result_8528);
var __8530__$4 = nex.interpreter.env_define(method_env_8521,"this",obj);
var new_ctx_8531 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env_8521),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values_8520),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields_8526),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"env","env",-1815813235),method_env_8521,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
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
nex.interpreter.__GT_promise((cljs.core.truth_(effective_require_8517)?nex.interpreter.check_assertions_async(new_ctx_8531,effective_require_8517,nex.interpreter.Precondition):null)).then((function (___$5){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8531,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8531,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
}
})()).then((function (___$6){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
if(((cljs.core.contains_QMARK_(param_names_8522,field_name)) && ((!(cljs.core.contains_QMARK_(cljs.core.deref(modified_fields_8526),field_name)))))){
return m;
} else {
var val = (function (){try{return nex.interpreter.env_lookup(method_env_8521,field_name);
}catch (e6830){var ___$7 = e6830;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields_8516);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields);
var result = nex.interpreter.async_result_value(method_env_8521);
return nex.interpreter.__GT_promise((cljs.core.truth_(effective_ensure_8518)?nex.interpreter.check_assertions_async(new_ctx_8531,effective_ensure_8518,nex.interpreter.Postcondition):null)).then((function (___$7){
return nex.interpreter.check_class_invariant_async(new_ctx_8531,class_def).then((function (___$8){
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}));
}));
}));
}));

var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6773_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6773_SHARP_),method);
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
var G__6831 = ctx;
var G__6832 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),field_val], null),new cljs.core.Keyword(null,"method","method",55703592),call_method,new cljs.core.Keyword(null,"args","args",1315556576),literal_args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6831,G__6832) : nex.interpreter.eval_node_async.call(null,G__6831,G__6832));
} else {
if(cljs.core.empty_QMARK_(arg_values)){
return Promise.resolve(field_val);
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null)));
}
}
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null)));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(nex.interpreter.get_type_name(obj))){
return nex.interpreter.__GT_promise(nex.interpreter.call_builtin_method((function (){var or__5142__auto__ = target_name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return target;
}
})(),obj,method,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found on type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),obj,new cljs.core.Keyword(null,"method","method",55703592),method], null)));

}
}
}
}
}));
} else {
var fn_obj = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),method);
}catch (e6833){var _ = e6833;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_obj,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
if(nex.interpreter.nex_object_QMARK_(fn_obj)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(has_parens,false)){
var G__6834 = ctx;
var G__6835 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),method,new cljs.core.Keyword(null,"method","method",55703592),(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6834,G__6835) : nex.interpreter.eval_node_async.call(null,G__6834,G__6835));
} else {
return Promise.resolve(fn_obj);
}
} else {
if(has_parens === false){
return Promise.resolve(fn_obj);
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method], null)));
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx))){
var current_obj = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var method_lookup = nex.interpreter.lookup_method_with_inheritance(ctx,class_def,method);
if(cljs.core.truth_(method_lookup)){
var all_fields = nex.interpreter.get_all_fields(ctx,class_def);
var current_env = new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(current_env,field_name);
}catch (e6836){var _ = e6836;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj),all_fields);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj),updated_fields);
var _ = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto__)){
var target_name = temp__5823__auto__;
return nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name,updated_obj);
} else {
return null;
}
})();
return nex.interpreter.__GT_promise((function (){var G__6837 = ctx;
var G__6838 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6837,G__6838) : nex.interpreter.eval_node_async.call(null,G__6837,G__6838));
})()).then((function (result){
var temp__5823__auto___8556 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8556)){
var target_name_8557 = temp__5823__auto___8556;
var called_obj_8558 = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_8557);
if(cljs.core.truth_(called_obj_8558)){
var seq__6839_8559 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj_8558));
var chunk__6840_8560 = null;
var count__6841_8561 = (0);
var i__6842_8562 = (0);
while(true){
if((i__6842_8562 < count__6841_8561)){
var vec__6849_8563 = chunk__6840_8560.cljs$core$IIndexed$_nth$arity$2(null,i__6842_8562);
var field_name_8564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6849_8563,(0),null);
var field_val_8565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6849_8563,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8564),field_val_8565);


var G__8566 = seq__6839_8559;
var G__8567 = chunk__6840_8560;
var G__8568 = count__6841_8561;
var G__8569 = (i__6842_8562 + (1));
seq__6839_8559 = G__8566;
chunk__6840_8560 = G__8567;
count__6841_8561 = G__8568;
i__6842_8562 = G__8569;
continue;
} else {
var temp__5823__auto___8570__$1 = cljs.core.seq(seq__6839_8559);
if(temp__5823__auto___8570__$1){
var seq__6839_8571__$1 = temp__5823__auto___8570__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6839_8571__$1)){
var c__5673__auto___8572 = cljs.core.chunk_first(seq__6839_8571__$1);
var G__8573 = cljs.core.chunk_rest(seq__6839_8571__$1);
var G__8574 = c__5673__auto___8572;
var G__8575 = cljs.core.count(c__5673__auto___8572);
var G__8576 = (0);
seq__6839_8559 = G__8573;
chunk__6840_8560 = G__8574;
count__6841_8561 = G__8575;
i__6842_8562 = G__8576;
continue;
} else {
var vec__6852_8577 = cljs.core.first(seq__6839_8571__$1);
var field_name_8578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6852_8577,(0),null);
var field_val_8579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6852_8577,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_8578),field_val_8579);


var G__8580 = cljs.core.next(seq__6839_8571__$1);
var G__8581 = null;
var G__8582 = (0);
var G__8583 = (0);
seq__6839_8559 = G__8580;
chunk__6840_8560 = G__8581;
count__6841_8561 = G__8582;
i__6842_8562 = G__8583;
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
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined method: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),method,new cljs.core.Keyword(null,"object","object",1474613949),current_obj], null)));
}
}
} else {
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.interpreter.builtins,method);
if(cljs.core.truth_(temp__5821__auto__)){
var builtin = temp__5821__auto__;
return nex.interpreter.__GT_promise(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(builtin,ctx,arg_values));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined function: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function","function",-2127255473),method], null)));
}

}
}
}
}));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"this","this",-611633625))){
return Promise.resolve(new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582))){
return nex.interpreter.__GT_promise((function (){var G__6855 = ctx;
var G__6856 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6855,G__6856) : nex.interpreter.eval_node_async.call(null,G__6855,G__6856));
})()).then((function (val){
var temp__5823__auto___8584 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8584)){
var mf_8585 = temp__5823__auto___8584;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8585,cljs.core.conj,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node),val);

return val;
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"assign","assign",-1590426222))){
return nex.interpreter.__GT_promise((function (){var G__6857 = ctx;
var G__6858 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6857,G__6858) : nex.interpreter.eval_node_async.call(null,G__6857,G__6858));
})()).then((function (val){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"let","let",-1282412701))){
return nex.interpreter.__GT_promise((function (){var G__6859 = ctx;
var G__6860 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6859,G__6860) : nex.interpreter.eval_node_async.call(null,G__6859,G__6860));
})()).then((function (val){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"block","block",664686210))){
return nex.interpreter.eval_body_async(ctx,node);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"raise","raise",184141061))){
return nex.interpreter.__GT_promise((function (){var G__6861 = ctx;
var G__6862 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6861,G__6862) : nex.interpreter.eval_node_async.call(null,G__6861,G__6862));
})()).then((function (val){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"retry","retry",-614012896))){
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("retry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734))){
var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"when","when",-576417306))){
return nex.interpreter.__GT_promise((function (){var G__6863 = ctx;
var G__6864 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6863,G__6864) : nex.interpreter.eval_node_async.call(null,G__6863,G__6864));
})()).then((function (cond_val){
if(cljs.core.truth_(cond_val)){
return nex.interpreter.__GT_promise((function (){var G__6865 = ctx;
var G__6866 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6865,G__6866) : nex.interpreter.eval_node_async.call(null,G__6865,G__6866));
})());
} else {
return nex.interpreter.__GT_promise((function (){var G__6867 = ctx;
var G__6868 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6867,G__6868) : nex.interpreter.eval_node_async.call(null,G__6867,G__6868));
})());
}
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"convert","convert",912478626))){
return nex.interpreter.__GT_promise((function (){var G__6869 = ctx;
var G__6870 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6869,G__6870) : nex.interpreter.eval_node_async.call(null,G__6869,G__6870));
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
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"if","if",-458814265))){
return nex.interpreter.__GT_promise((function (){var G__6871 = ctx;
var G__6872 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6871,G__6872) : nex.interpreter.eval_node_async.call(null,G__6871,G__6872));
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
return nex.interpreter.__GT_promise((function (){var G__6875 = ctx;
var G__6876 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6875,G__6876) : nex.interpreter.eval_node_async.call(null,G__6875,G__6876));
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
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"case","case",1143702196))){
return nex.interpreter.__GT_promise((function (){var G__6877 = ctx;
var G__6878 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6877,G__6878) : nex.interpreter.eval_node_async.call(null,G__6877,G__6878));
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
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6774_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6774_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6774_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses)))).then((function (values){
if(cljs.core.truth_(cljs.core.some((function (p1__6775_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,p1__6775_SHARP_);
}),values))){
return nex.interpreter.__GT_promise((function (){var G__6881 = ctx;
var G__6882 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6881,G__6882) : nex.interpreter.eval_node_async.call(null,G__6881,G__6882));
})());
} else {
return nex$interpreter$eval_node_async_$_match_clauses(cljs.core.rest(clauses));
}
}));
}
});
return match_clauses(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"select","select",1147833503))){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6776_SHARP_){
return nex.interpreter.prepare_select_clause_async(ctx,p1__6776_SHARP_);
}),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node))).then((function (prepared){
var timeout_ms_p = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var timeout_node = temp__5821__auto__;
return nex.interpreter.__GT_promise((function (){var G__6883 = ctx;
var G__6884 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout_node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6883,G__6884) : nex.interpreter.eval_node_async.call(null,G__6883,G__6884));
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
return nex.interpreter.__GT_promise((function (){var G__6887 = ctx;
var G__6888 = new cljs.core.Keyword(null,"until","until",-1189166390).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6887,G__6888) : nex.interpreter.eval_node_async.call(null,G__6887,G__6888));
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
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"statement","statement",-32780863)),(function (){var G__6889 = ctx;
var G__6890 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6889,G__6890) : nex.interpreter.eval_node_async.call(null,G__6889,G__6890));
})(),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"binary","binary",-1802232288)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6891 = ctx;
var G__6892 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6891,G__6892) : nex.interpreter.eval_node_async.call(null,G__6891,G__6892));
})(),(function (){var G__6893 = ctx;
var G__6894 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6893,G__6894) : nex.interpreter.eval_node_async.call(null,G__6893,G__6894));
})()], null)).then((function (p__6895){
var vec__6896 = p__6895;
var left_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,(0),null);
var right_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,(1),null);
return nex.interpreter.apply_binary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),left_val,right_val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"unary","unary",-989314568)),nex.interpreter.__GT_promise((function (){var G__6899 = ctx;
var G__6900 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6899,G__6900) : nex.interpreter.eval_node_async.call(null,G__6899,G__6900));
})()).then((function (val){
return nex.interpreter.apply_unary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"integer","integer",-604721710)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"real","real",388296937)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"char","char",-641587586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"string","string",-1989541586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"nil","nil",99600501)),Promise.resolve(null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6777_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6777_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6777_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_array_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6778_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6778_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6778_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_set_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6901){
var map__6902 = p__6901;
var map__6902__$1 = cljs.core.__destructure_map(map__6902);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6902__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6902__$1,new cljs.core.Keyword(null,"value","value",305978217));
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,key) : nex.interpreter.eval_node_async.call(null,ctx,key)),(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,value) : nex.interpreter.eval_node_async.call(null,ctx,value))], null));
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_map_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"subscript","subscript",-1484665872)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__6903 = ctx;
var G__6904 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6903,G__6904) : nex.interpreter.eval_node_async.call(null,G__6903,G__6904));
})(),(function (){var G__6905 = ctx;
var G__6906 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__6905,G__6906) : nex.interpreter.eval_node_async.call(null,G__6905,G__6906));
})()], null)).then((function (p__6907){
var vec__6908 = p__6907;
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(1),null);
return nex.interpreter.nex_coll_get(coll,idx);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"identifier","identifier",-805503498)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"create","create",-1301499256)),(function (){var map__6911 = node;
var map__6911__$1 = cljs.core.__destructure_map(map__6911);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6911__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6911__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6911__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6911__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6779_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6779_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6779_SHARP_));
}),args)).then((function (arg_values){
var G__6912 = class_name;
switch (G__6912) {
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
var _ = (function (){var seq__6913 = cljs.core.seq(field_map);
var chunk__6914 = null;
var count__6915 = (0);
var i__6916 = (0);
while(true){
if((i__6916 < count__6915)){
var vec__6923 = chunk__6914.cljs$core$IIndexed$_nth$arity$2(null,i__6916);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6923,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6923,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8587 = seq__6913;
var G__8588 = chunk__6914;
var G__8589 = count__6915;
var G__8590 = (i__6916 + (1));
seq__6913 = G__8587;
chunk__6914 = G__8588;
count__6915 = G__8589;
i__6916 = G__8590;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6913);
if(temp__5823__auto__){
var seq__6913__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6913__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6913__$1);
var G__8591 = cljs.core.chunk_rest(seq__6913__$1);
var G__8592 = c__5673__auto__;
var G__8593 = cljs.core.count(c__5673__auto__);
var G__8594 = (0);
seq__6913 = G__8591;
chunk__6914 = G__8592;
count__6915 = G__8593;
i__6916 = G__8594;
continue;
} else {
var vec__6926 = cljs.core.first(seq__6913__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6926,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6926,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__8595 = cljs.core.next(seq__6913__$1);
var G__8596 = null;
var G__8597 = (0);
var G__8598 = (0);
seq__6913 = G__8595;
chunk__6914 = G__8596;
count__6915 = G__8597;
i__6916 = G__8598;
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

var ctor_env_8599 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8600 = (function (){var seq__6929 = cljs.core.seq(initial_field_map);
var chunk__6930 = null;
var count__6931 = (0);
var i__6932 = (0);
while(true){
if((i__6932 < count__6931)){
var vec__6939 = chunk__6930.cljs$core$IIndexed$_nth$arity$2(null,i__6932);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6939,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6939,(1),null);
nex.interpreter.env_define(ctor_env_8599,cljs.core.name(field_name),field_val);


var G__8606 = seq__6929;
var G__8607 = chunk__6930;
var G__8608 = count__6931;
var G__8609 = (i__6932 + (1));
seq__6929 = G__8606;
chunk__6930 = G__8607;
count__6931 = G__8608;
i__6932 = G__8609;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6929);
if(temp__5823__auto__){
var seq__6929__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6929__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6929__$1);
var G__8610 = cljs.core.chunk_rest(seq__6929__$1);
var G__8611 = c__5673__auto__;
var G__8612 = cljs.core.count(c__5673__auto__);
var G__8613 = (0);
seq__6929 = G__8610;
chunk__6930 = G__8611;
count__6931 = G__8612;
i__6932 = G__8613;
continue;
} else {
var vec__6942 = cljs.core.first(seq__6929__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(1),null);
nex.interpreter.env_define(ctor_env_8599,cljs.core.name(field_name),field_val);


var G__8614 = cljs.core.next(seq__6929__$1);
var G__8615 = null;
var G__8616 = (0);
var G__8617 = (0);
seq__6929 = G__8614;
chunk__6930 = G__8615;
count__6931 = G__8616;
i__6932 = G__8617;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __8601__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,ctor_env_8599,class_def);
var params_8602 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var __8603__$2 = (function (){var seq__6945 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_8602,arg_values));
var chunk__6946 = null;
var count__6947 = (0);
var i__6948 = (0);
while(true){
if((i__6948 < count__6947)){
var vec__6955 = chunk__6946.cljs$core$IIndexed$_nth$arity$2(null,i__6948);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6955,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6955,(1),null);
nex.interpreter.env_define(ctor_env_8599,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8618 = seq__6945;
var G__8619 = chunk__6946;
var G__8620 = count__6947;
var G__8621 = (i__6948 + (1));
seq__6945 = G__8618;
chunk__6946 = G__8619;
count__6947 = G__8620;
i__6948 = G__8621;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6945);
if(temp__5823__auto__){
var seq__6945__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6945__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6945__$1);
var G__8622 = cljs.core.chunk_rest(seq__6945__$1);
var G__8623 = c__5673__auto__;
var G__8624 = cljs.core.count(c__5673__auto__);
var G__8625 = (0);
seq__6945 = G__8622;
chunk__6946 = G__8623;
count__6947 = G__8624;
i__6948 = G__8625;
continue;
} else {
var vec__6958 = cljs.core.first(seq__6945__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(1),null);
nex.interpreter.env_define(ctor_env_8599,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8626 = cljs.core.next(seq__6945__$1);
var G__8627 = null;
var G__8628 = (0);
var G__8629 = (0);
seq__6945 = G__8626;
chunk__6946 = G__8627;
count__6947 = G__8628;
i__6948 = G__8629;
continue;
}
} else {
return null;
}
}
break;
}
})();
var temp_obj_8604 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,initial_field_map);
var new_ctx_8605 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env_8599),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj_8604),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),constructor$),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),effective_class_name,new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})(),new cljs.core.Keyword(null,"env","env",-1815813235),ctor_env_8599,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_8602;
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
return nex.interpreter.check_assertions_async(new_ctx_8605,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})()).then((function (___$3){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_8605,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_8605,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
}
})()).then((function (___$4){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(ctor_env_8599,field_name);
}catch (e6961){var ___$5 = e6961;
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
return nex.interpreter.check_assertions_async(new_ctx_8605,ensure_assertions,nex.interpreter.Postcondition);
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
var seq__6962_8630 = cljs.core.seq(output);
var chunk__6963_8631 = null;
var count__6964_8632 = (0);
var i__6965_8633 = (0);
while(true){
if((i__6965_8633 < count__6964_8632)){
var line_8634 = chunk__6963_8631.cljs$core$IIndexed$_nth$arity$2(null,i__6965_8633);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8634], 0));


var G__8635 = seq__6962_8630;
var G__8636 = chunk__6963_8631;
var G__8637 = count__6964_8632;
var G__8638 = (i__6965_8633 + (1));
seq__6962_8630 = G__8635;
chunk__6963_8631 = G__8636;
count__6964_8632 = G__8637;
i__6965_8633 = G__8638;
continue;
} else {
var temp__5823__auto___8639 = cljs.core.seq(seq__6962_8630);
if(temp__5823__auto___8639){
var seq__6962_8640__$1 = temp__5823__auto___8639;
if(cljs.core.chunked_seq_QMARK_(seq__6962_8640__$1)){
var c__5673__auto___8641 = cljs.core.chunk_first(seq__6962_8640__$1);
var G__8642 = cljs.core.chunk_rest(seq__6962_8640__$1);
var G__8643 = c__5673__auto___8641;
var G__8644 = cljs.core.count(c__5673__auto___8641);
var G__8645 = (0);
seq__6962_8630 = G__8642;
chunk__6963_8631 = G__8643;
count__6964_8632 = G__8644;
i__6965_8633 = G__8645;
continue;
} else {
var line_8646 = cljs.core.first(seq__6962_8640__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_8646], 0));


var G__8647 = cljs.core.next(seq__6962_8640__$1);
var G__8648 = null;
var G__8649 = (0);
var G__8650 = (0);
seq__6962_8630 = G__8647;
chunk__6963_8631 = G__8648;
count__6964_8632 = G__8649;
i__6965_8633 = G__8650;
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
