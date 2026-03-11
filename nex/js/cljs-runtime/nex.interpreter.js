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
return nex.interpreter.nex_set_from(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6100_SHARP_){
return b.has(p1__6100_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_intersection = (function nex$interpreter$nex_set_intersection(a,b){
return nex.interpreter.nex_set_from(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6101_SHARP_){
return b.has(p1__6101_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())));
});
nex.interpreter.nex_set_symmetric_difference = (function nex$interpreter$nex_set_symmetric_difference(a,b){
return nex.interpreter.nex_set_from(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6106_SHARP_){
return b.has(p1__6106_SHARP_);
}),cljs.core.es6_iterator_seq(a.values())),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6107_SHARP_){
return a.has(p1__6107_SHARP_);
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

(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6124,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6128 = k6124;
var G__6128__$1 = (((G__6128 instanceof cljs.core.Keyword))?G__6128.fqn:null);
switch (G__6128__$1) {
case "bindings":
return self__.bindings;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6124,else__5451__auto__);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6130){
var vec__6131 = p__6130;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6131,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6131,(1),null);
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

(nex.interpreter.Environment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6123){
var self__ = this;
var G__6123__$1 = this;
return (new cljs.core.RecordIter((0),G__6123__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Environment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6125,other6126){
var self__ = this;
var this6125__$1 = this;
return (((!((other6126 == null)))) && ((((this6125__$1.constructor === other6126.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6125__$1.bindings,other6126.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6125__$1.parent,other6126.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6125__$1.__extmap,other6126.__extmap)))))))));
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

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6124){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6135 = k6124;
var G__6135__$1 = (((G__6135 instanceof cljs.core.Keyword))?G__6135.fqn:null);
switch (G__6135__$1) {
case "bindings":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6124);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6123){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6136 = cljs.core.keyword_identical_QMARK_;
var expr__6137 = k__5457__auto__;
if(cljs.core.truth_((pred__6136.cljs$core$IFn$_invoke$arity$2 ? pred__6136.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6137) : pred__6136.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6137)))){
return (new nex.interpreter.Environment(G__6123,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6136.cljs$core$IFn$_invoke$arity$2 ? pred__6136.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6137) : pred__6136.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6137)))){
return (new nex.interpreter.Environment(self__.bindings,G__6123,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6123),null));
}
}
}));

(nex.interpreter.Environment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6123){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,G__6123,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Environment = (function nex$interpreter$map__GT_Environment(G__6127){
var extmap__5490__auto__ = (function (){var G__6139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6127,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__6127)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6139);
} else {
return G__6139;
}
})();
return (new nex.interpreter.Environment(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__6127),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__6127),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new environment, optionally with a parent scope.
 */
nex.interpreter.make_env = (function nex$interpreter$make_env(var_args){
var G__6143 = arguments.length;
switch (G__6143) {
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

(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6145,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6149 = k6145;
var G__6149__$1 = (((G__6149 instanceof cljs.core.Keyword))?G__6149.fqn:null);
switch (G__6149__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6145,else__5451__auto__);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6150){
var vec__6151 = p__6150;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6151,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6151,(1),null);
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

(nex.interpreter.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6144){
var self__ = this;
var G__6144__$1 = this;
return (new cljs.core.RecordIter((0),G__6144__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6146,other6147){
var self__ = this;
var this6146__$1 = this;
return (((!((other6147 == null)))) && ((((this6146__$1.constructor === other6147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.classes,other6147.classes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.globals,other6147.globals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.current_env,other6147.current_env)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.output,other6147.output)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.imports,other6147.imports)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.specialized_classes,other6147.specialized_classes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6146__$1.__extmap,other6147.__extmap)))))))))))))))));
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

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6145){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6154 = k6145;
var G__6154__$1 = (((G__6154 instanceof cljs.core.Keyword))?G__6154.fqn:null);
switch (G__6154__$1) {
case "classes":
case "globals":
case "current-env":
case "output":
case "imports":
case "specialized-classes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6145);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6144){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6155 = cljs.core.keyword_identical_QMARK_;
var expr__6156 = k__5457__auto__;
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6156)))){
return (new nex.interpreter.Context(G__6144,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6156)))){
return (new nex.interpreter.Context(self__.classes,G__6144,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6156)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,G__6144,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__6156)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,G__6144,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6156)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,G__6144,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6155.cljs$core$IFn$_invoke$arity$2 ? pred__6155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6156) : pred__6155.call(null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6156)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,G__6144,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6144),null));
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

(nex.interpreter.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6144){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,G__6144,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Context = (function nex$interpreter$map__GT_Context(G__6148){
var extmap__5490__auto__ = (function (){var G__6165 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6148,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], 0));
if(cljs.core.record_QMARK_(G__6148)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6165);
} else {
return G__6165;
}
})();
return (new nex.interpreter.Context(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(G__6148),new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(G__6148),new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(G__6148),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__6148),new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(G__6148),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(G__6148),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__6175_8065 = ctx;
var G__6176_8066 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6175_8065,G__6176_8066) : nex.interpreter.register_class.call(null,G__6175_8065,G__6176_8066));

var G__6177_8068 = ctx;
var G__6178_8069 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6177_8068,G__6178_8069) : nex.interpreter.register_class.call(null,G__6177_8068,G__6178_8069));

var G__6179_8072 = ctx;
var G__6180_8073 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6179_8072,G__6180_8073) : nex.interpreter.register_class.call(null,G__6179_8072,G__6180_8073));

var G__6181_8074 = ctx;
var G__6182_8075 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6181_8074,G__6182_8075) : nex.interpreter.register_class.call(null,G__6181_8074,G__6182_8075));

var seq__6183_8076 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6184_8077 = null;
var count__6185_8078 = (0);
var i__6186_8079 = (0);
while(true){
if((i__6186_8079 < count__6185_8078)){
var scalar_8080 = chunk__6184_8077.cljs$core$IIndexed$_nth$arity$2(null,i__6186_8079);
var G__6195_8081 = ctx;
var G__6196_8082 = nex.interpreter.build_builtin_scalar_class(scalar_8080);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6195_8081,G__6196_8082) : nex.interpreter.register_class.call(null,G__6195_8081,G__6196_8082));


var G__8087 = seq__6183_8076;
var G__8088 = chunk__6184_8077;
var G__8089 = count__6185_8078;
var G__8090 = (i__6186_8079 + (1));
seq__6183_8076 = G__8087;
chunk__6184_8077 = G__8088;
count__6185_8078 = G__8089;
i__6186_8079 = G__8090;
continue;
} else {
var temp__5823__auto___8093 = cljs.core.seq(seq__6183_8076);
if(temp__5823__auto___8093){
var seq__6183_8095__$1 = temp__5823__auto___8093;
if(cljs.core.chunked_seq_QMARK_(seq__6183_8095__$1)){
var c__5673__auto___8100 = cljs.core.chunk_first(seq__6183_8095__$1);
var G__8101 = cljs.core.chunk_rest(seq__6183_8095__$1);
var G__8102 = c__5673__auto___8100;
var G__8103 = cljs.core.count(c__5673__auto___8100);
var G__8104 = (0);
seq__6183_8076 = G__8101;
chunk__6184_8077 = G__8102;
count__6185_8078 = G__8103;
i__6186_8079 = G__8104;
continue;
} else {
var scalar_8106 = cljs.core.first(seq__6183_8095__$1);
var G__6197_8109 = ctx;
var G__6198_8110 = nex.interpreter.build_builtin_scalar_class(scalar_8106);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6197_8109,G__6198_8110) : nex.interpreter.register_class.call(null,G__6197_8109,G__6198_8110));


var G__8111 = cljs.core.next(seq__6183_8095__$1);
var G__8112 = null;
var G__8113 = (0);
var G__8114 = (0);
seq__6183_8076 = G__8111;
chunk__6184_8077 = G__8112;
count__6185_8078 = G__8113;
i__6186_8079 = G__8114;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type_expr,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6199_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6199_SHARP_,p1__6199_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (args){
if(cljs.core.truth_(args)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6200_SHARP_){
return (nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2(p1__6200_SHARP_,type_map) : nex.interpreter.substitute_type.call(null,p1__6200_SHARP_,type_map));
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
var G__6205 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member);
var G__6205__$1 = (((G__6205 instanceof cljs.core.Keyword))?G__6205.fqn:null);
switch (G__6205__$1) {
case "field":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"field-type","field-type",2075623493),(function (p1__6202_SHARP_){
return nex.interpreter.substitute_type(p1__6202_SHARP_,type_map);
}));

break;
case "method":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6203_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6203_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6204_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6204_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(generic_class_def,new cljs.core.Keyword(null,"name","name",1843675177),spec_name),new cljs.core.Keyword(null,"template-name","template-name",271241761),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def)),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null),new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__6208_SHARP_){
return nex.interpreter.substitute_in_body(p1__6208_SHARP_,type_map);
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

(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6210,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6216 = k6210;
var G__6216__$1 = (((G__6216 instanceof cljs.core.Keyword))?G__6216.fqn:null);
switch (G__6216__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6210,else__5451__auto__);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6217){
var vec__6218 = p__6217;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6218,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6218,(1),null);
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

(nex.interpreter.NexObject.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6209){
var self__ = this;
var G__6209__$1 = this;
return (new cljs.core.RecordIter((0),G__6209__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.NexObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6211,other6212){
var self__ = this;
var this6211__$1 = this;
return (((!((other6212 == null)))) && ((((this6211__$1.constructor === other6212.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6211__$1.class_name,other6212.class_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6211__$1.fields,other6212.fields)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6211__$1.closure_env,other6212.closure_env)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6211__$1.__extmap,other6212.__extmap)))))))))));
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

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6210){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6224 = k6210;
var G__6224__$1 = (((G__6224 instanceof cljs.core.Keyword))?G__6224.fqn:null);
switch (G__6224__$1) {
case "class-name":
case "fields":
case "closure-env":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6210);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6209){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6225 = cljs.core.keyword_identical_QMARK_;
var expr__6226 = k__5457__auto__;
if(cljs.core.truth_((pred__6225.cljs$core$IFn$_invoke$arity$2 ? pred__6225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6226) : pred__6225.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6226)))){
return (new nex.interpreter.NexObject(G__6209,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6225.cljs$core$IFn$_invoke$arity$2 ? pred__6225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6226) : pred__6225.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6226)))){
return (new nex.interpreter.NexObject(self__.class_name,G__6209,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6225.cljs$core$IFn$_invoke$arity$2 ? pred__6225.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6226) : pred__6225.call(null,new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6226)))){
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,G__6209,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6209),null));
}
}
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env,null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6209){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,G__6209,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_NexObject = (function nex$interpreter$map__GT_NexObject(G__6213){
var extmap__5490__auto__ = (function (){var G__6230 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6213,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], 0));
if(cljs.core.record_QMARK_(G__6213)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6230);
} else {
return G__6230;
}
})();
return (new nex.interpreter.NexObject(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(G__6213),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__6213),new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(G__6213),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new object instance.
 */
nex.interpreter.make_object = (function nex$interpreter$make_object(var_args){
var G__6233 = arguments.length;
switch (G__6233) {
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

var temp__5823__auto___8236 = cljs.core.deref(cancel_reject);
if(cljs.core.truth_(temp__5823__auto___8236)){
var reject_8237 = temp__5823__auto___8236;
var G__6242_8242 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Task cancelled",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null));
(reject_8237.cljs$core$IFn$_invoke$arity$1 ? reject_8237.cljs$core$IFn$_invoke$arity$1(G__6242_8242) : reject_8237.call(null,G__6242_8242));
} else {
}

return true;
}
})], null);
});
nex.interpreter.make_channel = (function nex$interpreter$make_channel(var_args){
var G__6246 = arguments.length;
switch (G__6246) {
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
var G__6249 = arguments.length;
switch (G__6249) {
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
var fexpr__6251 = new cljs.core.Keyword(null,"cancel!","cancel!",-676538519).cljs$core$IFn$_invoke$arity$1(task);
return (fexpr__6251.cljs$core$IFn$_invoke$arity$0 ? fexpr__6251.cljs$core$IFn$_invoke$arity$0() : fexpr__6251.call(null));
});
nex.interpreter.task_cancelled_QMARK_ = (function nex$interpreter$task_cancelled_QMARK_(task){
return cljs.core.deref(new cljs.core.Keyword(null,"cancelled?","cancelled?",-293098402).cljs$core$IFn$_invoke$arity$1(task));
});
nex.interpreter.channel_send = (function nex$interpreter$channel_send(var_args){
var G__6260 = arguments.length;
switch (G__6260) {
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
var map__6261 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6261__$1 = cljs.core.__destructure_map(map__6261);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6261__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
var G__6265 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6265) : reject.call(null,G__6265));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6256_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6256_SHARP_));
}));

var fexpr__6266_8305 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6266_8305.cljs$core$IFn$_invoke$arity$1 ? fexpr__6266_8305.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6266_8305.call(null,value));

return finish(((timed_QMARK_)?true:null));
} else {
if((cljs.core.count(buffer) < capacity)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));

return finish(((timed_QMARK_)?true:null));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__send")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (_){
var temp__5823__auto___8314 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___8314)){
var timer_8315 = temp__5823__auto___8314;
clearTimeout(timer_8315);
} else {
}

return finish(((timed_QMARK_)?true:null));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___8316 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___8316)){
var timer_8317 = temp__5823__auto___8316;
clearTimeout(timer_8317);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (senders){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6257_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6257_SHARP_),id);
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
var map__6268 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6268__$1 = cljs.core.__destructure_map(map__6268);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6268__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6268__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6268__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6268__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
} else {
if((((capacity === (0))) && (cljs.core.seq(receivers)))){
var receiver = cljs.core.first(receivers);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (p1__6267_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6267_SHARP_));
}));

var fexpr__6269_8319 = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(receiver);
(fexpr__6269_8319.cljs$core$IFn$_invoke$arity$1 ? fexpr__6269_8319.cljs$core$IFn$_invoke$arity$1(value) : fexpr__6269_8319.call(null,value));

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
var G__6275 = arguments.length;
switch (G__6275) {
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
var map__6276 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6276__$1 = cljs.core.__destructure_map(map__6276);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6270_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6270_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6277_8335 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6277_8336__$1 = cljs.core.__destructure_map(map__6277_8335);
var sender_value_8337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6277_8336__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_8338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6277_8336__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6271_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6271_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_8337);
}));

(sender_resolve_8338.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_8338.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_8338.call(null,null));
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(buffered_value) : resolve.call(null,buffered_value));
} else {
if(cljs.core.seq(senders)){
var map__6278 = cljs.core.first(senders);
var map__6278__$1 = cljs.core.__destructure_map(map__6278);
var sender = map__6278__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6278__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6272_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6272_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
} else {
if(cljs.core.truth_(closed_QMARK_)){
var G__6279 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(G__6279) : reject.call(null,G__6279));
} else {
var id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("__recv")));
var timer_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var entry = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),(function (value){
var temp__5823__auto___8351 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___8351)){
var timer_8352 = temp__5823__auto___8351;
clearTimeout(timer_8352);
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
}),new cljs.core.Keyword(null,"reject","reject",1415953113),(function (err){
var temp__5823__auto___8353 = cljs.core.deref(timer_id);
if(cljs.core.truth_(temp__5823__auto___8353)){
var timer_8354 = temp__5823__auto___8353;
clearTimeout(timer_8354);
} else {
}

return (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(err) : reject.call(null,err));
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));

if(timed_QMARK_){
return cljs.core.reset_BANG_(timer_id,setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"receivers","receivers",815358409),(function (receivers){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6273_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6273_SHARP_),id);
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
var map__6285 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6285__$1 = cljs.core.__destructure_map(map__6285);
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6285__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6285__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6285__$1,new cljs.core.Keyword(null,"capacity","capacity",72689734));
if(cljs.core.seq(buffer)){
var buffered_value = cljs.core.first(buffer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"buffer","buffer",617295198),(function (p1__6282_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6282_SHARP_));
}));

if((((capacity > (0))) && (cljs.core.seq(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))))))){
var map__6286_8361 = cljs.core.first(new cljs.core.Keyword(null,"senders","senders",-1545898913).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
var map__6286_8362__$1 = cljs.core.__destructure_map(map__6286_8361);
var sender_value_8363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6286_8362__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sender_resolve_8364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6286_8362__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6283_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6283_SHARP_));
})),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj,sender_value_8363);
}));

(sender_resolve_8364.cljs$core$IFn$_invoke$arity$1 ? sender_resolve_8364.cljs$core$IFn$_invoke$arity$1(null) : sender_resolve_8364.call(null,null));
} else {
}

return buffered_value;
} else {
if(cljs.core.seq(senders)){
var map__6287 = cljs.core.first(senders);
var map__6287__$1 = cljs.core.__destructure_map(map__6287);
var sender = map__6287__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6287__$1,new cljs.core.Keyword(null,"value","value",305978217));
var ack_resolve = new cljs.core.Keyword(null,"resolve","resolve",-1584445482).cljs$core$IFn$_invoke$arity$1(sender);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.update,new cljs.core.Keyword(null,"senders","senders",-1545898913),(function (p1__6284_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__6284_SHARP_));
}));

(ack_resolve.cljs$core$IFn$_invoke$arity$1 ? ack_resolve.cljs$core$IFn$_invoke$arity$1(null) : ack_resolve.call(null,null));

return value;
} else {
return null;

}
}
});
nex.interpreter.channel_close = (function nex$interpreter$channel_close(ch){
var map__6288 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch));
var map__6288__$1 = cljs.core.__destructure_map(map__6288);
var closed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6288__$1,new cljs.core.Keyword(null,"closed?","closed?",-1408769040));
var senders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6288__$1,new cljs.core.Keyword(null,"senders","senders",-1545898913));
var receivers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6288__$1,new cljs.core.Keyword(null,"receivers","receivers",815358409));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6288__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
if(cljs.core.truth_(closed_QMARK_)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch),cljs.core.assoc,new cljs.core.Keyword(null,"closed?","closed?",-1408769040),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"senders","senders",-1545898913),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"receivers","receivers",815358409),((cljs.core.seq(buffer))?receivers:cljs.core.PersistentVector.EMPTY)], 0));

var seq__6291_8390 = cljs.core.seq(senders);
var chunk__6292_8391 = null;
var count__6293_8392 = (0);
var i__6294_8393 = (0);
while(true){
if((i__6294_8393 < count__6293_8392)){
var map__6303_8398 = chunk__6292_8391.cljs$core$IIndexed$_nth$arity$2(null,i__6294_8393);
var map__6303_8399__$1 = cljs.core.__destructure_map(map__6303_8398);
var reject_8400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303_8399__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6304_8402 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_8400.cljs$core$IFn$_invoke$arity$1 ? reject_8400.cljs$core$IFn$_invoke$arity$1(G__6304_8402) : reject_8400.call(null,G__6304_8402));


var G__8404 = seq__6291_8390;
var G__8405 = chunk__6292_8391;
var G__8407 = count__6293_8392;
var G__8408 = (i__6294_8393 + (1));
seq__6291_8390 = G__8404;
chunk__6292_8391 = G__8405;
count__6293_8392 = G__8407;
i__6294_8393 = G__8408;
continue;
} else {
var temp__5823__auto___8412 = cljs.core.seq(seq__6291_8390);
if(temp__5823__auto___8412){
var seq__6291_8414__$1 = temp__5823__auto___8412;
if(cljs.core.chunked_seq_QMARK_(seq__6291_8414__$1)){
var c__5673__auto___8415 = cljs.core.chunk_first(seq__6291_8414__$1);
var G__8420 = cljs.core.chunk_rest(seq__6291_8414__$1);
var G__8421 = c__5673__auto___8415;
var G__8422 = cljs.core.count(c__5673__auto___8415);
var G__8423 = (0);
seq__6291_8390 = G__8420;
chunk__6292_8391 = G__8421;
count__6293_8392 = G__8422;
i__6294_8393 = G__8423;
continue;
} else {
var map__6305_8425 = cljs.core.first(seq__6291_8414__$1);
var map__6305_8426__$1 = cljs.core.__destructure_map(map__6305_8425);
var reject_8427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6305_8426__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6306_8430 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot send on a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_8427.cljs$core$IFn$_invoke$arity$1 ? reject_8427.cljs$core$IFn$_invoke$arity$1(G__6306_8430) : reject_8427.call(null,G__6306_8430));


var G__8436 = cljs.core.next(seq__6291_8414__$1);
var G__8437 = null;
var G__8438 = (0);
var G__8439 = (0);
seq__6291_8390 = G__8436;
chunk__6292_8391 = G__8437;
count__6293_8392 = G__8438;
i__6294_8393 = G__8439;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(buffer)){
} else {
var seq__6307_8445 = cljs.core.seq(receivers);
var chunk__6308_8446 = null;
var count__6309_8447 = (0);
var i__6310_8448 = (0);
while(true){
if((i__6310_8448 < count__6309_8447)){
var map__6318_8449 = chunk__6308_8446.cljs$core$IIndexed$_nth$arity$2(null,i__6310_8448);
var map__6318_8450__$1 = cljs.core.__destructure_map(map__6318_8449);
var reject_8451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6318_8450__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6319_8452 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_8451.cljs$core$IFn$_invoke$arity$1 ? reject_8451.cljs$core$IFn$_invoke$arity$1(G__6319_8452) : reject_8451.call(null,G__6319_8452));


var G__8457 = seq__6307_8445;
var G__8458 = chunk__6308_8446;
var G__8459 = count__6309_8447;
var G__8460 = (i__6310_8448 + (1));
seq__6307_8445 = G__8457;
chunk__6308_8446 = G__8458;
count__6309_8447 = G__8459;
i__6310_8448 = G__8460;
continue;
} else {
var temp__5823__auto___8461 = cljs.core.seq(seq__6307_8445);
if(temp__5823__auto___8461){
var seq__6307_8466__$1 = temp__5823__auto___8461;
if(cljs.core.chunked_seq_QMARK_(seq__6307_8466__$1)){
var c__5673__auto___8467 = cljs.core.chunk_first(seq__6307_8466__$1);
var G__8468 = cljs.core.chunk_rest(seq__6307_8466__$1);
var G__8469 = c__5673__auto___8467;
var G__8470 = cljs.core.count(c__5673__auto___8467);
var G__8471 = (0);
seq__6307_8445 = G__8468;
chunk__6308_8446 = G__8469;
count__6309_8447 = G__8470;
i__6310_8448 = G__8471;
continue;
} else {
var map__6320_8476 = cljs.core.first(seq__6307_8466__$1);
var map__6320_8477__$1 = cljs.core.__destructure_map(map__6320_8476);
var reject_8478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6320_8477__$1,new cljs.core.Keyword(null,"reject","reject",1415953113));
var G__6321_8479 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot receive from a closed channel",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),ch], null));
(reject_8478.cljs$core$IFn$_invoke$arity$1 ? reject_8478.cljs$core$IFn$_invoke$arity$1(G__6321_8479) : reject_8478.call(null,G__6321_8479));


var G__8481 = cljs.core.next(seq__6307_8466__$1);
var G__8482 = null;
var G__8483 = (0);
var G__8484 = (0);
seq__6307_8445 = G__8481;
chunk__6308_8446 = G__8482;
count__6309_8447 = G__8483;
i__6310_8448 = G__8484;
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
nex.interpreter.prepare_select_clause = (function nex$interpreter$prepare_select_clause(ctx,p__6326){
var map__6327 = p__6326;
var map__6327__$1 = cljs.core.__destructure_map(map__6327);
var clause = map__6327__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6327__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6327__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6327__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6328 = nex.interpreter.select_op_call(expr);
var map__6328__$1 = cljs.core.__destructure_map(map__6328);
var call = map__6328__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6328__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6328__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6328__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),nex.interpreter.eval_select_target(ctx,target),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6325_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6325_SHARP_) : nex.interpreter.eval_node.call(null,ctx,p1__6325_SHARP_));
}),args)], null);
});
nex.interpreter.prepare_select_clause_async = (function nex$interpreter$prepare_select_clause_async(ctx,p__6332){
var map__6333 = p__6332;
var map__6333__$1 = cljs.core.__destructure_map(map__6333);
var clause = map__6333__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6333__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6333__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6333__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6334 = nex.interpreter.select_op_call(expr);
var map__6334__$1 = cljs.core.__destructure_map(map__6334);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.eval_select_target_async(ctx,target).then((function (target_val){
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6329_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__6329_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__6329_SHARP_));
}),args)).then((function (arg_vals){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"target","target",253001721),target_val,new cljs.core.Keyword(null,"args","args",1315556576),arg_vals], null);
}));
}));
});
nex.interpreter.execute_select_body = (function nex$interpreter$execute_select_body(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6338 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6338,alias,value);

return G__6338;
})()):ctx);
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6337_SHARP_){
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6337_SHARP_) : nex.interpreter.eval_node.call(null,body_ctx,p1__6337_SHARP_));
}),body));
});
nex.interpreter.execute_select_body_async = (function nex$interpreter$execute_select_body_async(ctx,body,alias,value){
var body_ctx = (cljs.core.truth_(alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),(function (){var G__6339 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
nex.interpreter.env_define(G__6339,alias,value);

return G__6339;
})()):ctx);
return (nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_body_async.cljs$core$IFn$_invoke$arity$2(body_ctx,body) : nex.interpreter.eval_body_async.call(null,body_ctx,body));
});
nex.interpreter.attempt_select_clause = (function nex$interpreter$attempt_select_clause(p__6344){
var map__6345 = p__6344;
var map__6345__$1 = cljs.core.__destructure_map(map__6345);
var prepared = map__6345__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6345__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6345__$1,new cljs.core.Keyword(null,"target","target",253001721));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6345__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"Task","Task",-409968362))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await")))){
if(cljs.core.truth_(nex.interpreter.task_done_QMARK_(target))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(target)], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_receive",null,"receive",null], null), null);
return (fexpr__6349.cljs$core$IFn$_invoke$arity$1 ? fexpr__6349.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6349.call(null,method));
})())){
var value = nex.interpreter.channel_try_receive(target);
if((!((value == null)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),true,new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var fexpr__6350 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["try_send",null,"send",null], null), null);
return (fexpr__6350.cljs$core$IFn$_invoke$arity$1 ? fexpr__6350.cljs$core$IFn$_invoke$arity$1(method) : fexpr__6350.call(null,method));
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
var map__6354 = prepared;
var map__6354__$1 = cljs.core.__destructure_map(map__6354);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6354__$1,new cljs.core.Keyword(null,"method","method",55703592));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6354__$1,new cljs.core.Keyword(null,"target","target",253001721));
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
var fexpr__6361 = new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
return (fexpr__6361.cljs$core$IFn$_invoke$arity$2 ? fexpr__6361.cljs$core$IFn$_invoke$arity$2(ctx,node) : fexpr__6361.call(null,ctx,node));
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
var seq__6368 = cljs.core.seq(assertions);
var chunk__6369 = null;
var count__6370 = (0);
var i__6371 = (0);
while(true){
if((i__6371 < count__6370)){
var map__6376 = chunk__6369.cljs$core$IIndexed$_nth$arity$2(null,i__6371);
var map__6376__$1 = cljs.core.__destructure_map(map__6376);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6376__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6376__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_8556 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_8556)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__8557 = seq__6368;
var G__8558 = chunk__6369;
var G__8559 = count__6370;
var G__8560 = (i__6371 + (1));
seq__6368 = G__8557;
chunk__6369 = G__8558;
count__6370 = G__8559;
i__6371 = G__8560;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6368);
if(temp__5823__auto__){
var seq__6368__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6368__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6368__$1);
var G__8561 = cljs.core.chunk_rest(seq__6368__$1);
var G__8562 = c__5673__auto__;
var G__8563 = cljs.core.count(c__5673__auto__);
var G__8564 = (0);
seq__6368 = G__8561;
chunk__6369 = G__8562;
count__6370 = G__8563;
i__6371 = G__8564;
continue;
} else {
var map__6379 = cljs.core.first(seq__6368__$1);
var map__6379__$1 = cljs.core.__destructure_map(map__6379);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6379__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6379__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_8565 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_8565)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__8566 = cljs.core.next(seq__6368__$1);
var G__8567 = null;
var G__8568 = (0);
var G__8569 = (0);
seq__6368 = G__8566;
chunk__6369 = G__8567;
count__6370 = G__8568;
i__6371 = G__8569;
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
var vec__6399 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6402,p__6403){
var vec__6407 = p__6402;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6407,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6407,(1),null);
var map__6410 = p__6403;
var map__6410__$1 = cljs.core.__destructure_map(map__6410);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6410__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6411 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6411,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6411,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6399,(1),null);
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
var vec__6414 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414,(1),null);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6423_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6423_SHARP_))){
return p1__6423_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6423_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6433){
var map__6434 = p__6433;
var map__6434__$1 = cljs.core.__destructure_map(map__6434);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6434__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(nex.interpreter.public_member_QMARK_,(nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_all_constants.call(null,ctx,class_def__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var local_constants = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6425_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6425_SHARP_,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993),class_def);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6424_SHARP_){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6424_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6424_SHARP_);
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
return cljs.core.some((function (p__6441){
var map__6442 = p__6441;
var map__6442__$1 = cljs.core.__destructure_map(map__6442);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6447_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6447_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6446_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6446_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
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
var G__6456 = ctx;
var G__6457 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6458 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6456,G__6457,G__6458) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6456,G__6457,G__6458));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6459 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6460 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6459,G__6460) : nex.interpreter.combine_preconditions.call(null,G__6459,G__6460));
})();
var effective_ensure = (function (){var G__6461 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6462 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6461,G__6462) : nex.interpreter.combine_assertions.call(null,G__6461,G__6462));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6463 = ctx;
var G__6464 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6465 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6463,G__6464,G__6465) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6463,G__6464,G__6465));
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
var or__5142__auto__ = cljs.core.some((function (p1__6466_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6466_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6467_SHARP_){
var G__6468 = ctx;
var G__6469 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6467_SHARP_);
var G__6470 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6468,G__6469,G__6470) : nex.interpreter.is_parent_QMARK_.call(null,G__6468,G__6469,G__6470));
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
var G__6473 = (nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.get_type_name.call(null,value));
if((G__6473 == null)){
return null;
} else {
return cljs.core.name(G__6473);
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
var fexpr__6476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Real",null,"Decimal",null,"Integer64",null], null), null);
return (fexpr__6476.cljs$core$IFn$_invoke$arity$1 ? fexpr__6476.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6476.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer64");
if(and__5140__auto__){
var fexpr__6477 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Real",null,"Decimal",null], null), null);
return (fexpr__6477.cljs$core$IFn$_invoke$arity$1 ? fexpr__6477.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6477.call(null,target_type));
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
var and__5140__auto__ = (function (){var fexpr__6482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrayCursor",null,"StringCursor",null,"MapCursor",null,"SetCursor",null], null), null);
return (fexpr__6482.cljs$core$IFn$_invoke$arity$1 ? fexpr__6482.cljs$core$IFn$_invoke$arity$1(runtime_type) : fexpr__6482.call(null,runtime_type));
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
var G__6484 = arguments.length;
switch (G__6484) {
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
var G__6489 = eval_ctx;
var G__6490 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(constant);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6489,G__6490) : nex.interpreter.eval_node.call(null,G__6489,G__6490));
}));

(nex.interpreter.eval_class_constant.cljs$lang$maxFixedArity = 4);

/**
 * Bind all constants visible from class-def into env.
 */
nex.interpreter.bind_class_constants_BANG_ = (function nex$interpreter$bind_class_constants_BANG_(ctx,env,class_def){
var seq__6494 = cljs.core.seq(nex.interpreter.get_all_constants(ctx,class_def));
var chunk__6495 = null;
var count__6496 = (0);
var i__6497 = (0);
while(true){
if((i__6497 < count__6496)){
var constant = chunk__6495.cljs$core$IIndexed$_nth$arity$2(null,i__6497);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__8664 = seq__6494;
var G__8665 = chunk__6495;
var G__8666 = count__6496;
var G__8667 = (i__6497 + (1));
seq__6494 = G__8664;
chunk__6495 = G__8665;
count__6496 = G__8666;
i__6497 = G__8667;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6494);
if(temp__5823__auto__){
var seq__6494__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6494__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6494__$1);
var G__8668 = cljs.core.chunk_rest(seq__6494__$1);
var G__8669 = c__5673__auto__;
var G__8670 = cljs.core.count(c__5673__auto__);
var G__8671 = (0);
seq__6494 = G__8668;
chunk__6495 = G__8669;
count__6496 = G__8670;
i__6497 = G__8671;
continue;
} else {
var constant = cljs.core.first(seq__6494__$1);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__8676 = cljs.core.next(seq__6494__$1);
var G__8677 = null;
var G__8678 = (0);
var G__8679 = (0);
seq__6494 = G__8676;
chunk__6495 = G__8677;
count__6496 = G__8678;
i__6497 = G__8679;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6507){
var map__6508 = p__6507;
var map__6508__$1 = cljs.core.__destructure_map(map__6508);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6508__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
var G__8706__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__8706 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8707__i = 0, G__8707__a = new Array(arguments.length -  1);
while (G__8707__i < G__8707__a.length) {G__8707__a[G__8707__i] = arguments[G__8707__i + 1]; ++G__8707__i;}
  args = new cljs.core.IndexedSeq(G__8707__a,0,null);
} 
return G__8706__delegate.call(this,ctx,args);};
G__8706.cljs$lang$maxFixedArity = 1;
G__8706.cljs$lang$applyTo = (function (arglist__8708){
var ctx = cljs.core.first(arglist__8708);
var args = cljs.core.rest(arglist__8708);
return G__8706__delegate(ctx,args);
});
G__8706.cljs$core$IFn$_invoke$arity$variadic = G__8706__delegate;
return G__8706;
})()
,"println",(function() { 
var G__8713__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__8713 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8715__i = 0, G__8715__a = new Array(arguments.length -  1);
while (G__8715__i < G__8715__a.length) {G__8715__a[G__8715__i] = arguments[G__8715__i + 1]; ++G__8715__i;}
  args = new cljs.core.IndexedSeq(G__8715__a,0,null);
} 
return G__8713__delegate.call(this,ctx,args);};
G__8713.cljs$lang$maxFixedArity = 1;
G__8713.cljs$lang$applyTo = (function (arglist__8716){
var ctx = cljs.core.first(arglist__8716);
var args = cljs.core.rest(arglist__8716);
return G__8713__delegate(ctx,args);
});
G__8713.cljs$core$IFn$_invoke$arity$variadic = G__8713__delegate;
return G__8713;
})()
,"type_of",(function() { 
var G__8717__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__8717 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8724__i = 0, G__8724__a = new Array(arguments.length -  1);
while (G__8724__i < G__8724__a.length) {G__8724__a[G__8724__i] = arguments[G__8724__i + 1]; ++G__8724__i;}
  args = new cljs.core.IndexedSeq(G__8724__a,0,null);
} 
return G__8717__delegate.call(this,ctx,args);};
G__8717.cljs$lang$maxFixedArity = 1;
G__8717.cljs$lang$applyTo = (function (arglist__8725){
var ctx = cljs.core.first(arglist__8725);
var args = cljs.core.rest(arglist__8725);
return G__8717__delegate(ctx,args);
});
G__8717.cljs$core$IFn$_invoke$arity$variadic = G__8717__delegate;
return G__8717;
})()
,"type_is",(function() { 
var G__8727__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6541 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6541,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6541,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__8727 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8733__i = 0, G__8733__a = new Array(arguments.length -  1);
while (G__8733__i < G__8733__a.length) {G__8733__a[G__8733__i] = arguments[G__8733__i + 1]; ++G__8733__i;}
  args = new cljs.core.IndexedSeq(G__8733__a,0,null);
} 
return G__8727__delegate.call(this,ctx,args);};
G__8727.cljs$lang$maxFixedArity = 1;
G__8727.cljs$lang$applyTo = (function (arglist__8734){
var ctx = cljs.core.first(arglist__8734);
var args = cljs.core.rest(arglist__8734);
return G__8727__delegate(ctx,args);
});
G__8727.cljs$core$IFn$_invoke$arity$variadic = G__8727__delegate;
return G__8727;
})()
,"await_all",(function() { 
var G__8739__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6546_8746 = cljs.core.seq(tasks);
var chunk__6547_8747 = null;
var count__6548_8748 = (0);
var i__6549_8749 = (0);
while(true){
if((i__6549_8749 < count__6548_8748)){
var task_8750 = chunk__6547_8747.cljs$core$IIndexed$_nth$arity$2(null,i__6549_8749);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_8750),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_8750)], null));
}


var G__8756 = seq__6546_8746;
var G__8757 = chunk__6547_8747;
var G__8758 = count__6548_8748;
var G__8759 = (i__6549_8749 + (1));
seq__6546_8746 = G__8756;
chunk__6547_8747 = G__8757;
count__6548_8748 = G__8758;
i__6549_8749 = G__8759;
continue;
} else {
var temp__5823__auto___8761 = cljs.core.seq(seq__6546_8746);
if(temp__5823__auto___8761){
var seq__6546_8763__$1 = temp__5823__auto___8761;
if(cljs.core.chunked_seq_QMARK_(seq__6546_8763__$1)){
var c__5673__auto___8764 = cljs.core.chunk_first(seq__6546_8763__$1);
var G__8769 = cljs.core.chunk_rest(seq__6546_8763__$1);
var G__8770 = c__5673__auto___8764;
var G__8771 = cljs.core.count(c__5673__auto___8764);
var G__8772 = (0);
seq__6546_8746 = G__8769;
chunk__6547_8747 = G__8770;
count__6548_8748 = G__8771;
i__6549_8749 = G__8772;
continue;
} else {
var task_8773 = cljs.core.first(seq__6546_8763__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_8773),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_all",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_8773)], null));
}


var G__8775 = cljs.core.next(seq__6546_8763__$1);
var G__8776 = null;
var G__8777 = (0);
var G__8778 = (0);
seq__6546_8746 = G__8775;
chunk__6547_8747 = G__8776;
count__6548_8748 = G__8777;
i__6549_8749 = G__8778;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_all_tasks(tasks);
};
var G__8739 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8783__i = 0, G__8783__a = new Array(arguments.length -  1);
while (G__8783__i < G__8783__a.length) {G__8783__a[G__8783__i] = arguments[G__8783__i + 1]; ++G__8783__i;}
  args = new cljs.core.IndexedSeq(G__8783__a,0,null);
} 
return G__8739__delegate.call(this,_ctx,args);};
G__8739.cljs$lang$maxFixedArity = 1;
G__8739.cljs$lang$applyTo = (function (arglist__8784){
var _ctx = cljs.core.first(arglist__8784);
var args = cljs.core.rest(arglist__8784);
return G__8739__delegate(_ctx,args);
});
G__8739.cljs$core$IFn$_invoke$arity$variadic = G__8739__delegate;
return G__8739;
})()
,"await_any",(function() { 
var G__8786__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var tasks = cljs.core.first(args);
if(cljs.core.truth_(nex.interpreter.nex_array_QMARK_(tasks))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(tasks)], null));
}

var seq__6558_8792 = cljs.core.seq(tasks);
var chunk__6559_8793 = null;
var count__6560_8794 = (0);
var i__6561_8795 = (0);
while(true){
if((i__6561_8795 < count__6560_8794)){
var task_8796 = chunk__6559_8793.cljs$core$IIndexed$_nth$arity$2(null,i__6561_8795);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_8796),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_8796)], null));
}


var G__8797 = seq__6558_8792;
var G__8798 = chunk__6559_8793;
var G__8799 = count__6560_8794;
var G__8800 = (i__6561_8795 + (1));
seq__6558_8792 = G__8797;
chunk__6559_8793 = G__8798;
count__6560_8794 = G__8799;
i__6561_8795 = G__8800;
continue;
} else {
var temp__5823__auto___8805 = cljs.core.seq(seq__6558_8792);
if(temp__5823__auto___8805){
var seq__6558_8807__$1 = temp__5823__auto___8805;
if(cljs.core.chunked_seq_QMARK_(seq__6558_8807__$1)){
var c__5673__auto___8814 = cljs.core.chunk_first(seq__6558_8807__$1);
var G__8815 = cljs.core.chunk_rest(seq__6558_8807__$1);
var G__8816 = c__5673__auto___8814;
var G__8817 = cljs.core.count(c__5673__auto___8814);
var G__8818 = (0);
seq__6558_8792 = G__8815;
chunk__6559_8793 = G__8816;
count__6560_8794 = G__8817;
i__6561_8795 = G__8818;
continue;
} else {
var task_8820 = cljs.core.first(seq__6558_8807__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(task_8820),new cljs.core.Keyword(null,"Task","Task",-409968362))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any requires an array of tasks",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"function","function",-2127255473),"await_any",new cljs.core.Keyword(null,"actual-type","actual-type",1152097847),nex.interpreter.runtime_type_name(task_8820)], null));
}


var G__8822 = cljs.core.next(seq__6558_8807__$1);
var G__8823 = null;
var G__8824 = (0);
var G__8825 = (0);
seq__6558_8792 = G__8822;
chunk__6559_8793 = G__8823;
count__6560_8794 = G__8824;
i__6561_8795 = G__8825;
continue;
}
} else {
}
}
break;
}

return nex.interpreter.await_any_task(tasks);
};
var G__8786 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8826__i = 0, G__8826__a = new Array(arguments.length -  1);
while (G__8826__i < G__8826__a.length) {G__8826__a[G__8826__i] = arguments[G__8826__i + 1]; ++G__8826__i;}
  args = new cljs.core.IndexedSeq(G__8826__a,0,null);
} 
return G__8786__delegate.call(this,_ctx,args);};
G__8786.cljs$lang$maxFixedArity = 1;
G__8786.cljs$lang$applyTo = (function (arglist__8827){
var _ctx = cljs.core.first(arglist__8827);
var args = cljs.core.rest(arglist__8827);
return G__8786__delegate(_ctx,args);
});
G__8786.cljs$core$IFn$_invoke$arity$variadic = G__8786__delegate;
return G__8786;
})()
,"sleep",(function() { 
var G__8832__delegate = function (_ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sleep expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"sleep",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}


return null;
};
var G__8832 = function (_ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__8837__i = 0, G__8837__a = new Array(arguments.length -  1);
while (G__8837__i < G__8837__a.length) {G__8837__a[G__8837__i] = arguments[G__8837__i + 1]; ++G__8837__i;}
  args = new cljs.core.IndexedSeq(G__8837__a,0,null);
} 
return G__8832__delegate.call(this,_ctx,args);};
G__8832.cljs$lang$maxFixedArity = 1;
G__8832.cljs$lang$applyTo = (function (arglist__8838){
var _ctx = cljs.core.first(arglist__8838);
var args = cljs.core.rest(arglist__8838);
return G__8832__delegate(_ctx,args);
});
G__8832.cljs$core$IFn$_invoke$arity$variadic = G__8832__delegate;
return G__8832;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6565 = op;
switch (G__6565) {
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
var G__6574 = op;
switch (G__6574) {
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
var G__6577 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6577) {
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
var G__6578 = field_type;
switch (G__6578) {
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
}catch (e6598){var _ = e6598;
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
var G__8888__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c),cljs.core.vec(cljs.core.es6_iterator_seq(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c).values())));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__8888 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8889__i = 0, G__8889__a = new Array(arguments.length -  1);
while (G__8889__i < G__8889__a.length) {G__8889__a[G__8889__i] = arguments[G__8889__i + 1]; ++G__8889__i;}
  _ = new cljs.core.IndexedSeq(G__8889__a,0,null);
} 
return G__8888__delegate.call(this,c,_);};
G__8888.cljs$lang$maxFixedArity = 1;
G__8888.cljs$lang$applyTo = (function (arglist__8890){
var c = cljs.core.first(arglist__8890);
var _ = cljs.core.rest(arglist__8890);
return G__8888__delegate(c,_);
});
G__8888.cljs$core$IFn$_invoke$arity$variadic = G__8888__delegate;
return G__8888;
})()
,"item",(function() { 
var G__8891__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vals,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__8891 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8900__i = 0, G__8900__a = new Array(arguments.length -  1);
while (G__8900__i < G__8900__a.length) {G__8900__a[G__8900__i] = arguments[G__8900__i + 1]; ++G__8900__i;}
  _ = new cljs.core.IndexedSeq(G__8900__a,0,null);
} 
return G__8891__delegate.call(this,c,_);};
G__8891.cljs$lang$maxFixedArity = 1;
G__8891.cljs$lang$applyTo = (function (arglist__8901){
var c = cljs.core.first(arglist__8901);
var _ = cljs.core.rest(arglist__8901);
return G__8891__delegate(c,_);
});
G__8891.cljs$core$IFn$_invoke$arity$variadic = G__8891__delegate;
return G__8891;
})()
,"next",(function() { 
var G__8902__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__8902 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8903__i = 0, G__8903__a = new Array(arguments.length -  1);
while (G__8903__i < G__8903__a.length) {G__8903__a[G__8903__i] = arguments[G__8903__i + 1]; ++G__8903__i;}
  _ = new cljs.core.IndexedSeq(G__8903__a,0,null);
} 
return G__8902__delegate.call(this,c,_);};
G__8902.cljs$lang$maxFixedArity = 1;
G__8902.cljs$lang$applyTo = (function (arglist__8904){
var c = cljs.core.first(arglist__8904);
var _ = cljs.core.rest(arglist__8904);
return G__8902__delegate(c,_);
});
G__8902.cljs$core$IFn$_invoke$arity$variadic = G__8902__delegate;
return G__8902;
})()
,"at_end",(function() { 
var G__8905__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__8905 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8908__i = 0, G__8908__a = new Array(arguments.length -  1);
while (G__8908__i < G__8908__a.length) {G__8908__a[G__8908__i] = arguments[G__8908__i + 1]; ++G__8908__i;}
  _ = new cljs.core.IndexedSeq(G__8908__a,0,null);
} 
return G__8905__delegate.call(this,c,_);};
G__8905.cljs$lang$maxFixedArity = 1;
G__8905.cljs$lang$applyTo = (function (arglist__8909){
var c = cljs.core.first(arglist__8909);
var _ = cljs.core.rest(arglist__8909);
return G__8905__delegate(c,_);
});
G__8905.cljs$core$IFn$_invoke$arity$variadic = G__8905__delegate;
return G__8905;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["put","is_empty","reverse","contains","add_at","sort","cursor","remove","length","slice","add","index_of","get"],[(function() { 
var G__8910__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__8910 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8911__i = 0, G__8911__a = new Array(arguments.length -  3);
while (G__8911__i < G__8911__a.length) {G__8911__a[G__8911__i] = arguments[G__8911__i + 3]; ++G__8911__i;}
  _ = new cljs.core.IndexedSeq(G__8911__a,0,null);
} 
return G__8910__delegate.call(this,arr,index,value,_);};
G__8910.cljs$lang$maxFixedArity = 3;
G__8910.cljs$lang$applyTo = (function (arglist__8912){
var arr = cljs.core.first(arglist__8912);
arglist__8912 = cljs.core.next(arglist__8912);
var index = cljs.core.first(arglist__8912);
arglist__8912 = cljs.core.next(arglist__8912);
var value = cljs.core.first(arglist__8912);
var _ = cljs.core.rest(arglist__8912);
return G__8910__delegate(arr,index,value,_);
});
G__8910.cljs$core$IFn$_invoke$arity$variadic = G__8910__delegate;
return G__8910;
})()
,(function() { 
var G__8913__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__8913 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8914__i = 0, G__8914__a = new Array(arguments.length -  1);
while (G__8914__i < G__8914__a.length) {G__8914__a[G__8914__i] = arguments[G__8914__i + 1]; ++G__8914__i;}
  _ = new cljs.core.IndexedSeq(G__8914__a,0,null);
} 
return G__8913__delegate.call(this,arr,_);};
G__8913.cljs$lang$maxFixedArity = 1;
G__8913.cljs$lang$applyTo = (function (arglist__8915){
var arr = cljs.core.first(arglist__8915);
var _ = cljs.core.rest(arglist__8915);
return G__8913__delegate(arr,_);
});
G__8913.cljs$core$IFn$_invoke$arity$variadic = G__8913__delegate;
return G__8913;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__8916__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__8916 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8917__i = 0, G__8917__a = new Array(arguments.length -  2);
while (G__8917__i < G__8917__a.length) {G__8917__a[G__8917__i] = arguments[G__8917__i + 2]; ++G__8917__i;}
  _ = new cljs.core.IndexedSeq(G__8917__a,0,null);
} 
return G__8916__delegate.call(this,arr,elem,_);};
G__8916.cljs$lang$maxFixedArity = 2;
G__8916.cljs$lang$applyTo = (function (arglist__8918){
var arr = cljs.core.first(arglist__8918);
arglist__8918 = cljs.core.next(arglist__8918);
var elem = cljs.core.first(arglist__8918);
var _ = cljs.core.rest(arglist__8918);
return G__8916__delegate(arr,elem,_);
});
G__8916.cljs$core$IFn$_invoke$arity$variadic = G__8916__delegate;
return G__8916;
})()
,(function() { 
var G__8919__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__8919 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8920__i = 0, G__8920__a = new Array(arguments.length -  3);
while (G__8920__i < G__8920__a.length) {G__8920__a[G__8920__i] = arguments[G__8920__i + 3]; ++G__8920__i;}
  _ = new cljs.core.IndexedSeq(G__8920__a,0,null);
} 
return G__8919__delegate.call(this,arr,index,value,_);};
G__8919.cljs$lang$maxFixedArity = 3;
G__8919.cljs$lang$applyTo = (function (arglist__8921){
var arr = cljs.core.first(arglist__8921);
arglist__8921 = cljs.core.next(arglist__8921);
var index = cljs.core.first(arglist__8921);
arglist__8921 = cljs.core.next(arglist__8921);
var value = cljs.core.first(arglist__8921);
var _ = cljs.core.rest(arglist__8921);
return G__8919__delegate(arr,index,value,_);
});
G__8919.cljs$core$IFn$_invoke$arity$variadic = G__8919__delegate;
return G__8919;
})()
,(function() { 
var G__8924__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__8924 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8925__i = 0, G__8925__a = new Array(arguments.length -  1);
while (G__8925__i < G__8925__a.length) {G__8925__a[G__8925__i] = arguments[G__8925__i + 1]; ++G__8925__i;}
  _ = new cljs.core.IndexedSeq(G__8925__a,0,null);
} 
return G__8924__delegate.call(this,arr,_);};
G__8924.cljs$lang$maxFixedArity = 1;
G__8924.cljs$lang$applyTo = (function (arglist__8926){
var arr = cljs.core.first(arglist__8926);
var _ = cljs.core.rest(arglist__8926);
return G__8924__delegate(arr,_);
});
G__8924.cljs$core$IFn$_invoke$arity$variadic = G__8924__delegate;
return G__8924;
})()
,(function() { 
var G__8927__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8927 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8930__i = 0, G__8930__a = new Array(arguments.length -  1);
while (G__8930__i < G__8930__a.length) {G__8930__a[G__8930__i] = arguments[G__8930__i + 1]; ++G__8930__i;}
  _ = new cljs.core.IndexedSeq(G__8930__a,0,null);
} 
return G__8927__delegate.call(this,arr,_);};
G__8927.cljs$lang$maxFixedArity = 1;
G__8927.cljs$lang$applyTo = (function (arglist__8931){
var arr = cljs.core.first(arglist__8931);
var _ = cljs.core.rest(arglist__8931);
return G__8927__delegate(arr,_);
});
G__8927.cljs$core$IFn$_invoke$arity$variadic = G__8927__delegate;
return G__8927;
})()
,(function() { 
var G__8932__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__8932 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8933__i = 0, G__8933__a = new Array(arguments.length -  2);
while (G__8933__i < G__8933__a.length) {G__8933__a[G__8933__i] = arguments[G__8933__i + 2]; ++G__8933__i;}
  _ = new cljs.core.IndexedSeq(G__8933__a,0,null);
} 
return G__8932__delegate.call(this,arr,idx,_);};
G__8932.cljs$lang$maxFixedArity = 2;
G__8932.cljs$lang$applyTo = (function (arglist__8934){
var arr = cljs.core.first(arglist__8934);
arglist__8934 = cljs.core.next(arglist__8934);
var idx = cljs.core.first(arglist__8934);
var _ = cljs.core.rest(arglist__8934);
return G__8932__delegate(arr,idx,_);
});
G__8932.cljs$core$IFn$_invoke$arity$variadic = G__8932__delegate;
return G__8932;
})()
,(function() { 
var G__8935__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__8935 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8936__i = 0, G__8936__a = new Array(arguments.length -  1);
while (G__8936__i < G__8936__a.length) {G__8936__a[G__8936__i] = arguments[G__8936__i + 1]; ++G__8936__i;}
  _ = new cljs.core.IndexedSeq(G__8936__a,0,null);
} 
return G__8935__delegate.call(this,arr,_);};
G__8935.cljs$lang$maxFixedArity = 1;
G__8935.cljs$lang$applyTo = (function (arglist__8937){
var arr = cljs.core.first(arglist__8937);
var _ = cljs.core.rest(arglist__8937);
return G__8935__delegate(arr,_);
});
G__8935.cljs$core$IFn$_invoke$arity$variadic = G__8935__delegate;
return G__8935;
})()
,(function() { 
var G__8938__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__8938 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8939__i = 0, G__8939__a = new Array(arguments.length -  3);
while (G__8939__i < G__8939__a.length) {G__8939__a[G__8939__i] = arguments[G__8939__i + 3]; ++G__8939__i;}
  _ = new cljs.core.IndexedSeq(G__8939__a,0,null);
} 
return G__8938__delegate.call(this,arr,start,end,_);};
G__8938.cljs$lang$maxFixedArity = 3;
G__8938.cljs$lang$applyTo = (function (arglist__8940){
var arr = cljs.core.first(arglist__8940);
arglist__8940 = cljs.core.next(arglist__8940);
var start = cljs.core.first(arglist__8940);
arglist__8940 = cljs.core.next(arglist__8940);
var end = cljs.core.first(arglist__8940);
var _ = cljs.core.rest(arglist__8940);
return G__8938__delegate(arr,start,end,_);
});
G__8938.cljs$core$IFn$_invoke$arity$variadic = G__8938__delegate;
return G__8938;
})()
,(function() { 
var G__8941__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__8941 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8942__i = 0, G__8942__a = new Array(arguments.length -  2);
while (G__8942__i < G__8942__a.length) {G__8942__a[G__8942__i] = arguments[G__8942__i + 2]; ++G__8942__i;}
  _ = new cljs.core.IndexedSeq(G__8942__a,0,null);
} 
return G__8941__delegate.call(this,arr,value,_);};
G__8941.cljs$lang$maxFixedArity = 2;
G__8941.cljs$lang$applyTo = (function (arglist__8943){
var arr = cljs.core.first(arglist__8943);
arglist__8943 = cljs.core.next(arglist__8943);
var value = cljs.core.first(arglist__8943);
var _ = cljs.core.rest(arglist__8943);
return G__8941__delegate(arr,value,_);
});
G__8941.cljs$core$IFn$_invoke$arity$variadic = G__8941__delegate;
return G__8941;
})()
,(function() { 
var G__8944__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__8944 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8945__i = 0, G__8945__a = new Array(arguments.length -  2);
while (G__8945__i < G__8945__a.length) {G__8945__a[G__8945__i] = arguments[G__8945__i + 2]; ++G__8945__i;}
  _ = new cljs.core.IndexedSeq(G__8945__a,0,null);
} 
return G__8944__delegate.call(this,arr,elem,_);};
G__8944.cljs$lang$maxFixedArity = 2;
G__8944.cljs$lang$applyTo = (function (arglist__8946){
var arr = cljs.core.first(arglist__8946);
arglist__8946 = cljs.core.next(arglist__8946);
var elem = cljs.core.first(arglist__8946);
var _ = cljs.core.rest(arglist__8946);
return G__8944__delegate(arr,elem,_);
});
G__8944.cljs$core$IFn$_invoke$arity$variadic = G__8944__delegate;
return G__8944;
})()
,(function() { 
var G__8951__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__8951 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8952__i = 0, G__8952__a = new Array(arguments.length -  2);
while (G__8952__i < G__8952__a.length) {G__8952__a[G__8952__i] = arguments[G__8952__i + 2]; ++G__8952__i;}
  _ = new cljs.core.IndexedSeq(G__8952__a,0,null);
} 
return G__8951__delegate.call(this,arr,index,_);};
G__8951.cljs$lang$maxFixedArity = 2;
G__8951.cljs$lang$applyTo = (function (arglist__8954){
var arr = cljs.core.first(arglist__8954);
arglist__8954 = cljs.core.next(arglist__8954);
var index = cljs.core.first(arglist__8954);
var _ = cljs.core.rest(arglist__8954);
return G__8951__delegate(arr,index,_);
});
G__8951.cljs$core$IFn$_invoke$arity$variadic = G__8951__delegate;
return G__8951;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__8955__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__8955 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8956__i = 0, G__8956__a = new Array(arguments.length -  2);
while (G__8956__i < G__8956__a.length) {G__8956__a[G__8956__i] = arguments[G__8956__i + 2]; ++G__8956__i;}
  _ = new cljs.core.IndexedSeq(G__8956__a,0,null);
} 
return G__8955__delegate.call(this,n,other,_);};
G__8955.cljs$lang$maxFixedArity = 2;
G__8955.cljs$lang$applyTo = (function (arglist__8957){
var n = cljs.core.first(arglist__8957);
arglist__8957 = cljs.core.next(arglist__8957);
var other = cljs.core.first(arglist__8957);
var _ = cljs.core.rest(arglist__8957);
return G__8955__delegate(n,other,_);
});
G__8955.cljs$core$IFn$_invoke$arity$variadic = G__8955__delegate;
return G__8955;
})()
,(function() { 
var G__8962__delegate = function (n,other,_){
return (n <= other);
};
var G__8962 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8964__i = 0, G__8964__a = new Array(arguments.length -  2);
while (G__8964__i < G__8964__a.length) {G__8964__a[G__8964__i] = arguments[G__8964__i + 2]; ++G__8964__i;}
  _ = new cljs.core.IndexedSeq(G__8964__a,0,null);
} 
return G__8962__delegate.call(this,n,other,_);};
G__8962.cljs$lang$maxFixedArity = 2;
G__8962.cljs$lang$applyTo = (function (arglist__8966){
var n = cljs.core.first(arglist__8966);
arglist__8966 = cljs.core.next(arglist__8966);
var other = cljs.core.first(arglist__8966);
var _ = cljs.core.rest(arglist__8966);
return G__8962__delegate(n,other,_);
});
G__8962.cljs$core$IFn$_invoke$arity$variadic = G__8962__delegate;
return G__8962;
})()
,(function() { 
var G__8972__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8972 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8974__i = 0, G__8974__a = new Array(arguments.length -  2);
while (G__8974__i < G__8974__a.length) {G__8974__a[G__8974__i] = arguments[G__8974__i + 2]; ++G__8974__i;}
  _ = new cljs.core.IndexedSeq(G__8974__a,0,null);
} 
return G__8972__delegate.call(this,n,other,_);};
G__8972.cljs$lang$maxFixedArity = 2;
G__8972.cljs$lang$applyTo = (function (arglist__8975){
var n = cljs.core.first(arglist__8975);
arglist__8975 = cljs.core.next(arglist__8975);
var other = cljs.core.first(arglist__8975);
var _ = cljs.core.rest(arglist__8975);
return G__8972__delegate(n,other,_);
});
G__8972.cljs$core$IFn$_invoke$arity$variadic = G__8972__delegate;
return G__8972;
})()
,(function() { 
var G__8976__delegate = function (n,other,_){
return (n < other);
};
var G__8976 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8977__i = 0, G__8977__a = new Array(arguments.length -  2);
while (G__8977__i < G__8977__a.length) {G__8977__a[G__8977__i] = arguments[G__8977__i + 2]; ++G__8977__i;}
  _ = new cljs.core.IndexedSeq(G__8977__a,0,null);
} 
return G__8976__delegate.call(this,n,other,_);};
G__8976.cljs$lang$maxFixedArity = 2;
G__8976.cljs$lang$applyTo = (function (arglist__8978){
var n = cljs.core.first(arglist__8978);
arglist__8978 = cljs.core.next(arglist__8978);
var other = cljs.core.first(arglist__8978);
var _ = cljs.core.rest(arglist__8978);
return G__8976__delegate(n,other,_);
});
G__8976.cljs$core$IFn$_invoke$arity$variadic = G__8976__delegate;
return G__8976;
})()
,(function() { 
var G__8983__delegate = function (n,other,_){
return (n + other);
};
var G__8983 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8988__i = 0, G__8988__a = new Array(arguments.length -  2);
while (G__8988__i < G__8988__a.length) {G__8988__a[G__8988__i] = arguments[G__8988__i + 2]; ++G__8988__i;}
  _ = new cljs.core.IndexedSeq(G__8988__a,0,null);
} 
return G__8983__delegate.call(this,n,other,_);};
G__8983.cljs$lang$maxFixedArity = 2;
G__8983.cljs$lang$applyTo = (function (arglist__8989){
var n = cljs.core.first(arglist__8989);
arglist__8989 = cljs.core.next(arglist__8989);
var other = cljs.core.first(arglist__8989);
var _ = cljs.core.rest(arglist__8989);
return G__8983__delegate(n,other,_);
});
G__8983.cljs$core$IFn$_invoke$arity$variadic = G__8983__delegate;
return G__8983;
})()
,(function() { 
var G__8991__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__8991 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8992__i = 0, G__8992__a = new Array(arguments.length -  1);
while (G__8992__i < G__8992__a.length) {G__8992__a[G__8992__i] = arguments[G__8992__i + 1]; ++G__8992__i;}
  _ = new cljs.core.IndexedSeq(G__8992__a,0,null);
} 
return G__8991__delegate.call(this,n,_);};
G__8991.cljs$lang$maxFixedArity = 1;
G__8991.cljs$lang$applyTo = (function (arglist__8993){
var n = cljs.core.first(arglist__8993);
var _ = cljs.core.rest(arglist__8993);
return G__8991__delegate(n,_);
});
G__8991.cljs$core$IFn$_invoke$arity$variadic = G__8991__delegate;
return G__8991;
})()
,(function() { 
var G__8994__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__8994 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8999__i = 0, G__8999__a = new Array(arguments.length -  1);
while (G__8999__i < G__8999__a.length) {G__8999__a[G__8999__i] = arguments[G__8999__i + 1]; ++G__8999__i;}
  _ = new cljs.core.IndexedSeq(G__8999__a,0,null);
} 
return G__8994__delegate.call(this,n,_);};
G__8994.cljs$lang$maxFixedArity = 1;
G__8994.cljs$lang$applyTo = (function (arglist__9000){
var n = cljs.core.first(arglist__9000);
var _ = cljs.core.rest(arglist__9000);
return G__8994__delegate(n,_);
});
G__8994.cljs$core$IFn$_invoke$arity$variadic = G__8994__delegate;
return G__8994;
})()
,(function() { 
var G__9002__delegate = function (n,other,_){
return (n > other);
};
var G__9002 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9005__i = 0, G__9005__a = new Array(arguments.length -  2);
while (G__9005__i < G__9005__a.length) {G__9005__a[G__9005__i] = arguments[G__9005__i + 2]; ++G__9005__i;}
  _ = new cljs.core.IndexedSeq(G__9005__a,0,null);
} 
return G__9002__delegate.call(this,n,other,_);};
G__9002.cljs$lang$maxFixedArity = 2;
G__9002.cljs$lang$applyTo = (function (arglist__9010){
var n = cljs.core.first(arglist__9010);
arglist__9010 = cljs.core.next(arglist__9010);
var other = cljs.core.first(arglist__9010);
var _ = cljs.core.rest(arglist__9010);
return G__9002__delegate(n,other,_);
});
G__9002.cljs$core$IFn$_invoke$arity$variadic = G__9002__delegate;
return G__9002;
})()
,(function() { 
var G__9012__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9012 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9013__i = 0, G__9013__a = new Array(arguments.length -  2);
while (G__9013__i < G__9013__a.length) {G__9013__a[G__9013__i] = arguments[G__9013__i + 2]; ++G__9013__i;}
  _ = new cljs.core.IndexedSeq(G__9013__a,0,null);
} 
return G__9012__delegate.call(this,n,other,_);};
G__9012.cljs$lang$maxFixedArity = 2;
G__9012.cljs$lang$applyTo = (function (arglist__9014){
var n = cljs.core.first(arglist__9014);
arglist__9014 = cljs.core.next(arglist__9014);
var other = cljs.core.first(arglist__9014);
var _ = cljs.core.rest(arglist__9014);
return G__9012__delegate(n,other,_);
});
G__9012.cljs$core$IFn$_invoke$arity$variadic = G__9012__delegate;
return G__9012;
})()
,(function() { 
var G__9019__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9019 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9024__i = 0, G__9024__a = new Array(arguments.length -  2);
while (G__9024__i < G__9024__a.length) {G__9024__a[G__9024__i] = arguments[G__9024__i + 2]; ++G__9024__i;}
  _ = new cljs.core.IndexedSeq(G__9024__a,0,null);
} 
return G__9019__delegate.call(this,n,other,_);};
G__9019.cljs$lang$maxFixedArity = 2;
G__9019.cljs$lang$applyTo = (function (arglist__9025){
var n = cljs.core.first(arglist__9025);
arglist__9025 = cljs.core.next(arglist__9025);
var other = cljs.core.first(arglist__9025);
var _ = cljs.core.rest(arglist__9025);
return G__9019__delegate(n,other,_);
});
G__9019.cljs$core$IFn$_invoke$arity$variadic = G__9019__delegate;
return G__9019;
})()
,(function() { 
var G__9026__delegate = function (n,other,_){
return (n - other);
};
var G__9026 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9031__i = 0, G__9031__a = new Array(arguments.length -  2);
while (G__9031__i < G__9031__a.length) {G__9031__a[G__9031__i] = arguments[G__9031__i + 2]; ++G__9031__i;}
  _ = new cljs.core.IndexedSeq(G__9031__a,0,null);
} 
return G__9026__delegate.call(this,n,other,_);};
G__9026.cljs$lang$maxFixedArity = 2;
G__9026.cljs$lang$applyTo = (function (arglist__9032){
var n = cljs.core.first(arglist__9032);
arglist__9032 = cljs.core.next(arglist__9032);
var other = cljs.core.first(arglist__9032);
var _ = cljs.core.rest(arglist__9032);
return G__9026__delegate(n,other,_);
});
G__9026.cljs$core$IFn$_invoke$arity$variadic = G__9026__delegate;
return G__9026;
})()
,(function() { 
var G__9033__delegate = function (n,other,_){
return (n * other);
};
var G__9033 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9038__i = 0, G__9038__a = new Array(arguments.length -  2);
while (G__9038__i < G__9038__a.length) {G__9038__a[G__9038__i] = arguments[G__9038__i + 2]; ++G__9038__i;}
  _ = new cljs.core.IndexedSeq(G__9038__a,0,null);
} 
return G__9033__delegate.call(this,n,other,_);};
G__9033.cljs$lang$maxFixedArity = 2;
G__9033.cljs$lang$applyTo = (function (arglist__9039){
var n = cljs.core.first(arglist__9039);
arglist__9039 = cljs.core.next(arglist__9039);
var other = cljs.core.first(arglist__9039);
var _ = cljs.core.rest(arglist__9039);
return G__9033__delegate(n,other,_);
});
G__9033.cljs$core$IFn$_invoke$arity$variadic = G__9033__delegate;
return G__9033;
})()
,(function() { 
var G__9041__delegate = function (n,other,_){
return (n / other);
};
var G__9041 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9042__i = 0, G__9042__a = new Array(arguments.length -  2);
while (G__9042__i < G__9042__a.length) {G__9042__a[G__9042__i] = arguments[G__9042__i + 2]; ++G__9042__i;}
  _ = new cljs.core.IndexedSeq(G__9042__a,0,null);
} 
return G__9041__delegate.call(this,n,other,_);};
G__9041.cljs$lang$maxFixedArity = 2;
G__9041.cljs$lang$applyTo = (function (arglist__9043){
var n = cljs.core.first(arglist__9043);
arglist__9043 = cljs.core.next(arglist__9043);
var other = cljs.core.first(arglist__9043);
var _ = cljs.core.rest(arglist__9043);
return G__9041__delegate(n,other,_);
});
G__9041.cljs$core$IFn$_invoke$arity$variadic = G__9041__delegate;
return G__9041;
})()
,(function() { 
var G__9044__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__9044 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9045__i = 0, G__9045__a = new Array(arguments.length -  1);
while (G__9045__i < G__9045__a.length) {G__9045__a[G__9045__i] = arguments[G__9045__i + 1]; ++G__9045__i;}
  _ = new cljs.core.IndexedSeq(G__9045__a,0,null);
} 
return G__9044__delegate.call(this,n,_);};
G__9044.cljs$lang$maxFixedArity = 1;
G__9044.cljs$lang$applyTo = (function (arglist__9050){
var n = cljs.core.first(arglist__9050);
var _ = cljs.core.rest(arglist__9050);
return G__9044__delegate(n,_);
});
G__9044.cljs$core$IFn$_invoke$arity$variadic = G__9044__delegate;
return G__9044;
})()
,(function() { 
var G__9051__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9051 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9054__i = 0, G__9054__a = new Array(arguments.length -  2);
while (G__9054__i < G__9054__a.length) {G__9054__a[G__9054__i] = arguments[G__9054__i + 2]; ++G__9054__i;}
  _ = new cljs.core.IndexedSeq(G__9054__a,0,null);
} 
return G__9051__delegate.call(this,n,other,_);};
G__9051.cljs$lang$maxFixedArity = 2;
G__9051.cljs$lang$applyTo = (function (arglist__9056){
var n = cljs.core.first(arglist__9056);
arglist__9056 = cljs.core.next(arglist__9056);
var other = cljs.core.first(arglist__9056);
var _ = cljs.core.rest(arglist__9056);
return G__9051__delegate(n,other,_);
});
G__9051.cljs$core$IFn$_invoke$arity$variadic = G__9051__delegate;
return G__9051;
})()
,(function() { 
var G__9061__delegate = function (n,other,_){
return (n >= other);
};
var G__9061 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9063__i = 0, G__9063__a = new Array(arguments.length -  2);
while (G__9063__i < G__9063__a.length) {G__9063__a[G__9063__i] = arguments[G__9063__i + 2]; ++G__9063__i;}
  _ = new cljs.core.IndexedSeq(G__9063__a,0,null);
} 
return G__9061__delegate.call(this,n,other,_);};
G__9061.cljs$lang$maxFixedArity = 2;
G__9061.cljs$lang$applyTo = (function (arglist__9064){
var n = cljs.core.first(arglist__9064);
arglist__9064 = cljs.core.next(arglist__9064);
var other = cljs.core.first(arglist__9064);
var _ = cljs.core.rest(arglist__9064);
return G__9061__delegate(n,other,_);
});
G__9061.cljs$core$IFn$_invoke$arity$variadic = G__9061__delegate;
return G__9061;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__9065__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__9065 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9070__i = 0, G__9070__a = new Array(arguments.length -  1);
while (G__9070__i < G__9070__a.length) {G__9070__a[G__9070__i] = arguments[G__9070__i + 1]; ++G__9070__i;}
  _ = new cljs.core.IndexedSeq(G__9070__a,0,null);
} 
return G__9065__delegate.call(this,img,_);};
G__9065.cljs$lang$maxFixedArity = 1;
G__9065.cljs$lang$applyTo = (function (arglist__9071){
var img = cljs.core.first(arglist__9071);
var _ = cljs.core.rest(arglist__9071);
return G__9065__delegate(img,_);
});
G__9065.cljs$core$IFn$_invoke$arity$variadic = G__9065__delegate;
return G__9065;
})()
,"height",(function() { 
var G__9072__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__9072 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9077__i = 0, G__9077__a = new Array(arguments.length -  1);
while (G__9077__i < G__9077__a.length) {G__9077__a[G__9077__i] = arguments[G__9077__i + 1]; ++G__9077__i;}
  _ = new cljs.core.IndexedSeq(G__9077__a,0,null);
} 
return G__9072__delegate.call(this,img,_);};
G__9072.cljs$lang$maxFixedArity = 1;
G__9072.cljs$lang$applyTo = (function (arglist__9078){
var img = cljs.core.first(arglist__9078);
var _ = cljs.core.rest(arglist__9078);
return G__9072__delegate(img,_);
});
G__9072.cljs$core$IFn$_invoke$arity$variadic = G__9072__delegate;
return G__9072;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__9080__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__9080 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9081__i = 0, G__9081__a = new Array(arguments.length -  1);
while (G__9081__i < G__9081__a.length) {G__9081__a[G__9081__i] = arguments[G__9081__i + 1]; ++G__9081__i;}
  _ = new cljs.core.IndexedSeq(G__9081__a,0,null);
} 
return G__9080__delegate.call(this,c,_);};
G__9080.cljs$lang$maxFixedArity = 1;
G__9080.cljs$lang$applyTo = (function (arglist__9082){
var c = cljs.core.first(arglist__9082);
var _ = cljs.core.rest(arglist__9082);
return G__9080__delegate(c,_);
});
G__9080.cljs$core$IFn$_invoke$arity$variadic = G__9080__delegate;
return G__9080;
})()
,"item",(function() { 
var G__9087__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__9087 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9096__i = 0, G__9096__a = new Array(arguments.length -  1);
while (G__9096__i < G__9096__a.length) {G__9096__a[G__9096__i] = arguments[G__9096__i + 1]; ++G__9096__i;}
  _ = new cljs.core.IndexedSeq(G__9096__a,0,null);
} 
return G__9087__delegate.call(this,c,_);};
G__9087.cljs$lang$maxFixedArity = 1;
G__9087.cljs$lang$applyTo = (function (arglist__9097){
var c = cljs.core.first(arglist__9097);
var _ = cljs.core.rest(arglist__9097);
return G__9087__delegate(c,_);
});
G__9087.cljs$core$IFn$_invoke$arity$variadic = G__9087__delegate;
return G__9087;
})()
,"next",(function() { 
var G__9098__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__9098 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9107__i = 0, G__9107__a = new Array(arguments.length -  1);
while (G__9107__i < G__9107__a.length) {G__9107__a[G__9107__i] = arguments[G__9107__i + 1]; ++G__9107__i;}
  _ = new cljs.core.IndexedSeq(G__9107__a,0,null);
} 
return G__9098__delegate.call(this,c,_);};
G__9098.cljs$lang$maxFixedArity = 1;
G__9098.cljs$lang$applyTo = (function (arglist__9108){
var c = cljs.core.first(arglist__9108);
var _ = cljs.core.rest(arglist__9108);
return G__9098__delegate(c,_);
});
G__9098.cljs$core$IFn$_invoke$arity$variadic = G__9098__delegate;
return G__9098;
})()
,"at_end",(function() { 
var G__9109__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__9109 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9110__i = 0, G__9110__a = new Array(arguments.length -  1);
while (G__9110__i < G__9110__a.length) {G__9110__a[G__9110__i] = arguments[G__9110__i + 1]; ++G__9110__i;}
  _ = new cljs.core.IndexedSeq(G__9110__a,0,null);
} 
return G__9109__delegate.call(this,c,_);};
G__9109.cljs$lang$maxFixedArity = 1;
G__9109.cljs$lang$applyTo = (function (arglist__9111){
var c = cljs.core.first(arglist__9111);
var _ = cljs.core.rest(arglist__9111);
return G__9109__delegate(c,_);
});
G__9109.cljs$core$IFn$_invoke$arity$variadic = G__9109__delegate;
return G__9109;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","try_get","cursor","remove","size","get","contains_key"],[(function() { 
var G__9112__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__9112 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9113__i = 0, G__9113__a = new Array(arguments.length -  1);
while (G__9113__i < G__9113__a.length) {G__9113__a[G__9113__i] = arguments[G__9113__i + 1]; ++G__9113__i;}
  _ = new cljs.core.IndexedSeq(G__9113__a,0,null);
} 
return G__9112__delegate.call(this,m,_);};
G__9112.cljs$lang$maxFixedArity = 1;
G__9112.cljs$lang$applyTo = (function (arglist__9114){
var m = cljs.core.first(arglist__9114);
var _ = cljs.core.rest(arglist__9114);
return G__9112__delegate(m,_);
});
G__9112.cljs$core$IFn$_invoke$arity$variadic = G__9112__delegate;
return G__9112;
})()
,(function() { 
var G__9115__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__9115 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9116__i = 0, G__9116__a = new Array(arguments.length -  1);
while (G__9116__i < G__9116__a.length) {G__9116__a[G__9116__i] = arguments[G__9116__i + 1]; ++G__9116__i;}
  _ = new cljs.core.IndexedSeq(G__9116__a,0,null);
} 
return G__9115__delegate.call(this,m,_);};
G__9115.cljs$lang$maxFixedArity = 1;
G__9115.cljs$lang$applyTo = (function (arglist__9121){
var m = cljs.core.first(arglist__9121);
var _ = cljs.core.rest(arglist__9121);
return G__9115__delegate(m,_);
});
G__9115.cljs$core$IFn$_invoke$arity$variadic = G__9115__delegate;
return G__9115;
})()
,(function() { 
var G__9122__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__9122 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__9127__i = 0, G__9127__a = new Array(arguments.length -  3);
while (G__9127__i < G__9127__a.length) {G__9127__a[G__9127__i] = arguments[G__9127__i + 3]; ++G__9127__i;}
  _ = new cljs.core.IndexedSeq(G__9127__a,0,null);
} 
return G__9122__delegate.call(this,m,key,val,_);};
G__9122.cljs$lang$maxFixedArity = 3;
G__9122.cljs$lang$applyTo = (function (arglist__9128){
var m = cljs.core.first(arglist__9128);
arglist__9128 = cljs.core.next(arglist__9128);
var key = cljs.core.first(arglist__9128);
arglist__9128 = cljs.core.next(arglist__9128);
var val = cljs.core.first(arglist__9128);
var _ = cljs.core.rest(arglist__9128);
return G__9122__delegate(m,key,val,_);
});
G__9122.cljs$core$IFn$_invoke$arity$variadic = G__9122__delegate;
return G__9122;
})()
,(function() { 
var G__9129__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__9129 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9130__i = 0, G__9130__a = new Array(arguments.length -  1);
while (G__9130__i < G__9130__a.length) {G__9130__a[G__9130__i] = arguments[G__9130__i + 1]; ++G__9130__i;}
  _ = new cljs.core.IndexedSeq(G__9130__a,0,null);
} 
return G__9129__delegate.call(this,m,_);};
G__9129.cljs$lang$maxFixedArity = 1;
G__9129.cljs$lang$applyTo = (function (arglist__9131){
var m = cljs.core.first(arglist__9131);
var _ = cljs.core.rest(arglist__9131);
return G__9129__delegate(m,_);
});
G__9129.cljs$core$IFn$_invoke$arity$variadic = G__9129__delegate;
return G__9129;
})()
,(function() { 
var G__9132__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__9132 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__9137__i = 0, G__9137__a = new Array(arguments.length -  3);
while (G__9137__i < G__9137__a.length) {G__9137__a[G__9137__i] = arguments[G__9137__i + 3]; ++G__9137__i;}
  _ = new cljs.core.IndexedSeq(G__9137__a,0,null);
} 
return G__9132__delegate.call(this,m,key,default$,_);};
G__9132.cljs$lang$maxFixedArity = 3;
G__9132.cljs$lang$applyTo = (function (arglist__9138){
var m = cljs.core.first(arglist__9138);
arglist__9138 = cljs.core.next(arglist__9138);
var key = cljs.core.first(arglist__9138);
arglist__9138 = cljs.core.next(arglist__9138);
var default$ = cljs.core.first(arglist__9138);
var _ = cljs.core.rest(arglist__9138);
return G__9132__delegate(m,key,default$,_);
});
G__9132.cljs$core$IFn$_invoke$arity$variadic = G__9132__delegate;
return G__9132;
})()
,(function() { 
var G__9139__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__9139 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9144__i = 0, G__9144__a = new Array(arguments.length -  1);
while (G__9144__i < G__9144__a.length) {G__9144__a[G__9144__i] = arguments[G__9144__i + 1]; ++G__9144__i;}
  _ = new cljs.core.IndexedSeq(G__9144__a,0,null);
} 
return G__9139__delegate.call(this,m,_);};
G__9139.cljs$lang$maxFixedArity = 1;
G__9139.cljs$lang$applyTo = (function (arglist__9145){
var m = cljs.core.first(arglist__9145);
var _ = cljs.core.rest(arglist__9145);
return G__9139__delegate(m,_);
});
G__9139.cljs$core$IFn$_invoke$arity$variadic = G__9139__delegate;
return G__9139;
})()
,(function() { 
var G__9146__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__9146 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9147__i = 0, G__9147__a = new Array(arguments.length -  2);
while (G__9147__i < G__9147__a.length) {G__9147__a[G__9147__i] = arguments[G__9147__i + 2]; ++G__9147__i;}
  _ = new cljs.core.IndexedSeq(G__9147__a,0,null);
} 
return G__9146__delegate.call(this,m,key,_);};
G__9146.cljs$lang$maxFixedArity = 2;
G__9146.cljs$lang$applyTo = (function (arglist__9148){
var m = cljs.core.first(arglist__9148);
arglist__9148 = cljs.core.next(arglist__9148);
var key = cljs.core.first(arglist__9148);
var _ = cljs.core.rest(arglist__9148);
return G__9146__delegate(m,key,_);
});
G__9146.cljs$core$IFn$_invoke$arity$variadic = G__9146__delegate;
return G__9146;
})()
,(function() { 
var G__9149__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__9149 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9150__i = 0, G__9150__a = new Array(arguments.length -  1);
while (G__9150__i < G__9150__a.length) {G__9150__a[G__9150__i] = arguments[G__9150__i + 1]; ++G__9150__i;}
  _ = new cljs.core.IndexedSeq(G__9150__a,0,null);
} 
return G__9149__delegate.call(this,m,_);};
G__9149.cljs$lang$maxFixedArity = 1;
G__9149.cljs$lang$applyTo = (function (arglist__9155){
var m = cljs.core.first(arglist__9155);
var _ = cljs.core.rest(arglist__9155);
return G__9149__delegate(m,_);
});
G__9149.cljs$core$IFn$_invoke$arity$variadic = G__9149__delegate;
return G__9149;
})()
,(function() { 
var G__9156__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__9156 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9159__i = 0, G__9159__a = new Array(arguments.length -  2);
while (G__9159__i < G__9159__a.length) {G__9159__a[G__9159__i] = arguments[G__9159__i + 2]; ++G__9159__i;}
  _ = new cljs.core.IndexedSeq(G__9159__a,0,null);
} 
return G__9156__delegate.call(this,m,key,_);};
G__9156.cljs$lang$maxFixedArity = 2;
G__9156.cljs$lang$applyTo = (function (arglist__9160){
var m = cljs.core.first(arglist__9160);
arglist__9160 = cljs.core.next(arglist__9160);
var key = cljs.core.first(arglist__9160);
var _ = cljs.core.rest(arglist__9160);
return G__9156__delegate(m,key,_);
});
G__9156.cljs$core$IFn$_invoke$arity$variadic = G__9156__delegate;
return G__9156;
})()
,(function() { 
var G__9161__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__9161 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9162__i = 0, G__9162__a = new Array(arguments.length -  2);
while (G__9162__i < G__9162__a.length) {G__9162__a[G__9162__i] = arguments[G__9162__i + 2]; ++G__9162__i;}
  _ = new cljs.core.IndexedSeq(G__9162__a,0,null);
} 
return G__9161__delegate.call(this,m,key,_);};
G__9161.cljs$lang$maxFixedArity = 2;
G__9161.cljs$lang$applyTo = (function (arglist__9163){
var m = cljs.core.first(arglist__9163);
arglist__9163 = cljs.core.next(arglist__9163);
var key = cljs.core.first(arglist__9163);
var _ = cljs.core.rest(arglist__9163);
return G__9161__delegate(m,key,_);
});
G__9161.cljs$core$IFn$_invoke$arity$variadic = G__9161__delegate;
return G__9161;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__9168__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__9168 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9170__i = 0, G__9170__a = new Array(arguments.length -  1);
while (G__9170__i < G__9170__a.length) {G__9170__a[G__9170__i] = arguments[G__9170__i + 1]; ++G__9170__i;}
  _ = new cljs.core.IndexedSeq(G__9170__a,0,null);
} 
return G__9168__delegate.call(this,t,_);};
G__9168.cljs$lang$maxFixedArity = 1;
G__9168.cljs$lang$applyTo = (function (arglist__9172){
var t = cljs.core.first(arglist__9172);
var _ = cljs.core.rest(arglist__9172);
return G__9168__delegate(t,_);
});
G__9168.cljs$core$IFn$_invoke$arity$variadic = G__9168__delegate;
return G__9168;
})()
,(function() { 
var G__9174__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__9174 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9179__i = 0, G__9179__a = new Array(arguments.length -  2);
while (G__9179__i < G__9179__a.length) {G__9179__a[G__9179__i] = arguments[G__9179__i + 2]; ++G__9179__i;}
  _ = new cljs.core.IndexedSeq(G__9179__a,0,null);
} 
return G__9174__delegate.call(this,t,angle,_);};
G__9174.cljs$lang$maxFixedArity = 2;
G__9174.cljs$lang$applyTo = (function (arglist__9181){
var t = cljs.core.first(arglist__9181);
arglist__9181 = cljs.core.next(arglist__9181);
var angle = cljs.core.first(arglist__9181);
var _ = cljs.core.rest(arglist__9181);
return G__9174__delegate(t,angle,_);
});
G__9174.cljs$core$IFn$_invoke$arity$variadic = G__9174__delegate;
return G__9174;
})()
,(function() { 
var G__9183__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__9183 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9184__i = 0, G__9184__a = new Array(arguments.length -  1);
while (G__9184__i < G__9184__a.length) {G__9184__a[G__9184__i] = arguments[G__9184__i + 1]; ++G__9184__i;}
  _ = new cljs.core.IndexedSeq(G__9184__a,0,null);
} 
return G__9183__delegate.call(this,t,_);};
G__9183.cljs$lang$maxFixedArity = 1;
G__9183.cljs$lang$applyTo = (function (arglist__9185){
var t = cljs.core.first(arglist__9185);
var _ = cljs.core.rest(arglist__9185);
return G__9183__delegate(t,_);
});
G__9183.cljs$core$IFn$_invoke$arity$variadic = G__9183__delegate;
return G__9183;
})()
,(function() { 
var G__9186__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__9186 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9187__i = 0, G__9187__a = new Array(arguments.length -  2);
while (G__9187__i < G__9187__a.length) {G__9187__a[G__9187__i] = arguments[G__9187__i + 2]; ++G__9187__i;}
  _ = new cljs.core.IndexedSeq(G__9187__a,0,null);
} 
return G__9186__delegate.call(this,t,s,_);};
G__9186.cljs$lang$maxFixedArity = 2;
G__9186.cljs$lang$applyTo = (function (arglist__9188){
var t = cljs.core.first(arglist__9188);
arglist__9188 = cljs.core.next(arglist__9188);
var s = cljs.core.first(arglist__9188);
var _ = cljs.core.rest(arglist__9188);
return G__9186__delegate(t,s,_);
});
G__9186.cljs$core$IFn$_invoke$arity$variadic = G__9186__delegate;
return G__9186;
})()
,(function() { 
var G__9193__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__9193 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9198__i = 0, G__9198__a = new Array(arguments.length -  2);
while (G__9198__i < G__9198__a.length) {G__9198__a[G__9198__i] = arguments[G__9198__i + 2]; ++G__9198__i;}
  _ = new cljs.core.IndexedSeq(G__9198__a,0,null);
} 
return G__9193__delegate.call(this,t,s,_);};
G__9193.cljs$lang$maxFixedArity = 2;
G__9193.cljs$lang$applyTo = (function (arglist__9199){
var t = cljs.core.first(arglist__9199);
arglist__9199 = cljs.core.next(arglist__9199);
var s = cljs.core.first(arglist__9199);
var _ = cljs.core.rest(arglist__9199);
return G__9193__delegate(t,s,_);
});
G__9193.cljs$core$IFn$_invoke$arity$variadic = G__9193__delegate;
return G__9193;
})()
,(function() { 
var G__9200__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__9200 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9202__i = 0, G__9202__a = new Array(arguments.length -  1);
while (G__9202__i < G__9202__a.length) {G__9202__a[G__9202__i] = arguments[G__9202__i + 1]; ++G__9202__i;}
  _ = new cljs.core.IndexedSeq(G__9202__a,0,null);
} 
return G__9200__delegate.call(this,t,_);};
G__9200.cljs$lang$maxFixedArity = 1;
G__9200.cljs$lang$applyTo = (function (arglist__9203){
var t = cljs.core.first(arglist__9203);
var _ = cljs.core.rest(arglist__9203);
return G__9200__delegate(t,_);
});
G__9200.cljs$core$IFn$_invoke$arity$variadic = G__9200__delegate;
return G__9200;
})()
,(function() { 
var G__9204__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__9204 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9209__i = 0, G__9209__a = new Array(arguments.length -  2);
while (G__9209__i < G__9209__a.length) {G__9209__a[G__9209__i] = arguments[G__9209__i + 2]; ++G__9209__i;}
  _ = new cljs.core.IndexedSeq(G__9209__a,0,null);
} 
return G__9204__delegate.call(this,t,dist,_);};
G__9204.cljs$lang$maxFixedArity = 2;
G__9204.cljs$lang$applyTo = (function (arglist__9210){
var t = cljs.core.first(arglist__9210);
arglist__9210 = cljs.core.next(arglist__9210);
var dist = cljs.core.first(arglist__9210);
var _ = cljs.core.rest(arglist__9210);
return G__9204__delegate(t,dist,_);
});
G__9204.cljs$core$IFn$_invoke$arity$variadic = G__9204__delegate;
return G__9204;
})()
,(function() { 
var G__9211__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__9211 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9213__i = 0, G__9213__a = new Array(arguments.length -  1);
while (G__9213__i < G__9213__a.length) {G__9213__a[G__9213__i] = arguments[G__9213__i + 1]; ++G__9213__i;}
  _ = new cljs.core.IndexedSeq(G__9213__a,0,null);
} 
return G__9211__delegate.call(this,t,_);};
G__9211.cljs$lang$maxFixedArity = 1;
G__9211.cljs$lang$applyTo = (function (arglist__9214){
var t = cljs.core.first(arglist__9214);
var _ = cljs.core.rest(arglist__9214);
return G__9211__delegate(t,_);
});
G__9211.cljs$core$IFn$_invoke$arity$variadic = G__9211__delegate;
return G__9211;
})()
,(function() { 
var G__9215__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__9215 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9216__i = 0, G__9216__a = new Array(arguments.length -  1);
while (G__9216__i < G__9216__a.length) {G__9216__a[G__9216__i] = arguments[G__9216__i + 1]; ++G__9216__i;}
  _ = new cljs.core.IndexedSeq(G__9216__a,0,null);
} 
return G__9215__delegate.call(this,t,_);};
G__9215.cljs$lang$maxFixedArity = 1;
G__9215.cljs$lang$applyTo = (function (arglist__9217){
var t = cljs.core.first(arglist__9217);
var _ = cljs.core.rest(arglist__9217);
return G__9215__delegate(t,_);
});
G__9215.cljs$core$IFn$_invoke$arity$variadic = G__9215__delegate;
return G__9215;
})()
,(function() { 
var G__9218__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__9218 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9219__i = 0, G__9219__a = new Array(arguments.length -  1);
while (G__9219__i < G__9219__a.length) {G__9219__a[G__9219__i] = arguments[G__9219__i + 1]; ++G__9219__i;}
  _ = new cljs.core.IndexedSeq(G__9219__a,0,null);
} 
return G__9218__delegate.call(this,t,_);};
G__9218.cljs$lang$maxFixedArity = 1;
G__9218.cljs$lang$applyTo = (function (arglist__9221){
var t = cljs.core.first(arglist__9221);
var _ = cljs.core.rest(arglist__9221);
return G__9218__delegate(t,_);
});
G__9218.cljs$core$IFn$_invoke$arity$variadic = G__9218__delegate;
return G__9218;
})()
,(function() { 
var G__9226__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__9226 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9227__i = 0, G__9227__a = new Array(arguments.length -  1);
while (G__9227__i < G__9227__a.length) {G__9227__a[G__9227__i] = arguments[G__9227__i + 1]; ++G__9227__i;}
  _ = new cljs.core.IndexedSeq(G__9227__a,0,null);
} 
return G__9226__delegate.call(this,t,_);};
G__9226.cljs$lang$maxFixedArity = 1;
G__9226.cljs$lang$applyTo = (function (arglist__9229){
var t = cljs.core.first(arglist__9229);
var _ = cljs.core.rest(arglist__9229);
return G__9226__delegate(t,_);
});
G__9226.cljs$core$IFn$_invoke$arity$variadic = G__9226__delegate;
return G__9226;
})()
,(function() { 
var G__9231__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__9231 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9233__i = 0, G__9233__a = new Array(arguments.length -  1);
while (G__9233__i < G__9233__a.length) {G__9233__a[G__9233__i] = arguments[G__9233__i + 1]; ++G__9233__i;}
  _ = new cljs.core.IndexedSeq(G__9233__a,0,null);
} 
return G__9231__delegate.call(this,t,_);};
G__9231.cljs$lang$maxFixedArity = 1;
G__9231.cljs$lang$applyTo = (function (arglist__9238){
var t = cljs.core.first(arglist__9238);
var _ = cljs.core.rest(arglist__9238);
return G__9231__delegate(t,_);
});
G__9231.cljs$core$IFn$_invoke$arity$variadic = G__9231__delegate;
return G__9231;
})()
,(function() { 
var G__9239__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__9239 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9241__i = 0, G__9241__a = new Array(arguments.length -  1);
while (G__9241__i < G__9241__a.length) {G__9241__a[G__9241__i] = arguments[G__9241__i + 1]; ++G__9241__i;}
  _ = new cljs.core.IndexedSeq(G__9241__a,0,null);
} 
return G__9239__delegate.call(this,t,_);};
G__9239.cljs$lang$maxFixedArity = 1;
G__9239.cljs$lang$applyTo = (function (arglist__9242){
var t = cljs.core.first(arglist__9242);
var _ = cljs.core.rest(arglist__9242);
return G__9239__delegate(t,_);
});
G__9239.cljs$core$IFn$_invoke$arity$variadic = G__9239__delegate;
return G__9239;
})()
,(function() { 
var G__9243__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__9243 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9244__i = 0, G__9244__a = new Array(arguments.length -  2);
while (G__9244__i < G__9244__a.length) {G__9244__a[G__9244__i] = arguments[G__9244__i + 2]; ++G__9244__i;}
  _ = new cljs.core.IndexedSeq(G__9244__a,0,null);
} 
return G__9243__delegate.call(this,t,s,_);};
G__9243.cljs$lang$maxFixedArity = 2;
G__9243.cljs$lang$applyTo = (function (arglist__9249){
var t = cljs.core.first(arglist__9249);
arglist__9249 = cljs.core.next(arglist__9249);
var s = cljs.core.first(arglist__9249);
var _ = cljs.core.rest(arglist__9249);
return G__9243__delegate(t,s,_);
});
G__9243.cljs$core$IFn$_invoke$arity$variadic = G__9243__delegate;
return G__9243;
})()
,(function() { 
var G__9251__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__9251 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9257__i = 0, G__9257__a = new Array(arguments.length -  2);
while (G__9257__i < G__9257__a.length) {G__9257__a[G__9257__i] = arguments[G__9257__i + 2]; ++G__9257__i;}
  _ = new cljs.core.IndexedSeq(G__9257__a,0,null);
} 
return G__9251__delegate.call(this,t,r,_);};
G__9251.cljs$lang$maxFixedArity = 2;
G__9251.cljs$lang$applyTo = (function (arglist__9258){
var t = cljs.core.first(arglist__9258);
arglist__9258 = cljs.core.next(arglist__9258);
var r = cljs.core.first(arglist__9258);
var _ = cljs.core.rest(arglist__9258);
return G__9251__delegate(t,r,_);
});
G__9251.cljs$core$IFn$_invoke$arity$variadic = G__9251__delegate;
return G__9251;
})()
,(function() { 
var G__9260__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__9260 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9265__i = 0, G__9265__a = new Array(arguments.length -  2);
while (G__9265__i < G__9265__a.length) {G__9265__a[G__9265__i] = arguments[G__9265__i + 2]; ++G__9265__i;}
  _ = new cljs.core.IndexedSeq(G__9265__a,0,null);
} 
return G__9260__delegate.call(this,t,dist,_);};
G__9260.cljs$lang$maxFixedArity = 2;
G__9260.cljs$lang$applyTo = (function (arglist__9267){
var t = cljs.core.first(arglist__9267);
arglist__9267 = cljs.core.next(arglist__9267);
var dist = cljs.core.first(arglist__9267);
var _ = cljs.core.rest(arglist__9267);
return G__9260__delegate(t,dist,_);
});
G__9260.cljs$core$IFn$_invoke$arity$variadic = G__9260__delegate;
return G__9260;
})()
,(function() { 
var G__9270__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__9270 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9277__i = 0, G__9277__a = new Array(arguments.length -  2);
while (G__9277__i < G__9277__a.length) {G__9277__a[G__9277__i] = arguments[G__9277__i + 2]; ++G__9277__i;}
  _ = new cljs.core.IndexedSeq(G__9277__a,0,null);
} 
return G__9270__delegate.call(this,t,c,_);};
G__9270.cljs$lang$maxFixedArity = 2;
G__9270.cljs$lang$applyTo = (function (arglist__9279){
var t = cljs.core.first(arglist__9279);
arglist__9279 = cljs.core.next(arglist__9279);
var c = cljs.core.first(arglist__9279);
var _ = cljs.core.rest(arglist__9279);
return G__9270__delegate(t,c,_);
});
G__9270.cljs$core$IFn$_invoke$arity$variadic = G__9270__delegate;
return G__9270;
})()
,(function() { 
var G__9284__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__9284 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__9293__i = 0, G__9293__a = new Array(arguments.length -  3);
while (G__9293__i < G__9293__a.length) {G__9293__a[G__9293__i] = arguments[G__9293__i + 3]; ++G__9293__i;}
  _ = new cljs.core.IndexedSeq(G__9293__a,0,null);
} 
return G__9284__delegate.call(this,t,x,y,_);};
G__9284.cljs$lang$maxFixedArity = 3;
G__9284.cljs$lang$applyTo = (function (arglist__9295){
var t = cljs.core.first(arglist__9295);
arglist__9295 = cljs.core.next(arglist__9295);
var x = cljs.core.first(arglist__9295);
arglist__9295 = cljs.core.next(arglist__9295);
var y = cljs.core.first(arglist__9295);
var _ = cljs.core.rest(arglist__9295);
return G__9284__delegate(t,x,y,_);
});
G__9284.cljs$core$IFn$_invoke$arity$variadic = G__9284__delegate;
return G__9284;
})()
,(function() { 
var G__9298__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__9298 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9303__i = 0, G__9303__a = new Array(arguments.length -  2);
while (G__9303__i < G__9303__a.length) {G__9303__a[G__9303__i] = arguments[G__9303__i + 2]; ++G__9303__i;}
  _ = new cljs.core.IndexedSeq(G__9303__a,0,null);
} 
return G__9298__delegate.call(this,t,angle,_);};
G__9298.cljs$lang$maxFixedArity = 2;
G__9298.cljs$lang$applyTo = (function (arglist__9305){
var t = cljs.core.first(arglist__9305);
arglist__9305 = cljs.core.next(arglist__9305);
var angle = cljs.core.first(arglist__9305);
var _ = cljs.core.rest(arglist__9305);
return G__9298__delegate(t,angle,_);
});
G__9298.cljs$core$IFn$_invoke$arity$variadic = G__9298__delegate;
return G__9298;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["contains",(function() { 
var G__9310__delegate = function (s,value,_){
return nex.interpreter.nex_set_contains(s,value);
};
var G__9310 = function (s,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9312__i = 0, G__9312__a = new Array(arguments.length -  2);
while (G__9312__i < G__9312__a.length) {G__9312__a[G__9312__i] = arguments[G__9312__i + 2]; ++G__9312__i;}
  _ = new cljs.core.IndexedSeq(G__9312__a,0,null);
} 
return G__9310__delegate.call(this,s,value,_);};
G__9310.cljs$lang$maxFixedArity = 2;
G__9310.cljs$lang$applyTo = (function (arglist__9313){
var s = cljs.core.first(arglist__9313);
arglist__9313 = cljs.core.next(arglist__9313);
var value = cljs.core.first(arglist__9313);
var _ = cljs.core.rest(arglist__9313);
return G__9310__delegate(s,value,_);
});
G__9310.cljs$core$IFn$_invoke$arity$variadic = G__9310__delegate;
return G__9310;
})()
,"union",(function() { 
var G__9314__delegate = function (s,other,_){
return nex.interpreter.nex_set_union(s,other);
};
var G__9314 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9315__i = 0, G__9315__a = new Array(arguments.length -  2);
while (G__9315__i < G__9315__a.length) {G__9315__a[G__9315__i] = arguments[G__9315__i + 2]; ++G__9315__i;}
  _ = new cljs.core.IndexedSeq(G__9315__a,0,null);
} 
return G__9314__delegate.call(this,s,other,_);};
G__9314.cljs$lang$maxFixedArity = 2;
G__9314.cljs$lang$applyTo = (function (arglist__9320){
var s = cljs.core.first(arglist__9320);
arglist__9320 = cljs.core.next(arglist__9320);
var other = cljs.core.first(arglist__9320);
var _ = cljs.core.rest(arglist__9320);
return G__9314__delegate(s,other,_);
});
G__9314.cljs$core$IFn$_invoke$arity$variadic = G__9314__delegate;
return G__9314;
})()
,"difference",(function() { 
var G__9322__delegate = function (s,other,_){
return nex.interpreter.nex_set_difference(s,other);
};
var G__9322 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9324__i = 0, G__9324__a = new Array(arguments.length -  2);
while (G__9324__i < G__9324__a.length) {G__9324__a[G__9324__i] = arguments[G__9324__i + 2]; ++G__9324__i;}
  _ = new cljs.core.IndexedSeq(G__9324__a,0,null);
} 
return G__9322__delegate.call(this,s,other,_);};
G__9322.cljs$lang$maxFixedArity = 2;
G__9322.cljs$lang$applyTo = (function (arglist__9330){
var s = cljs.core.first(arglist__9330);
arglist__9330 = cljs.core.next(arglist__9330);
var other = cljs.core.first(arglist__9330);
var _ = cljs.core.rest(arglist__9330);
return G__9322__delegate(s,other,_);
});
G__9322.cljs$core$IFn$_invoke$arity$variadic = G__9322__delegate;
return G__9322;
})()
,"intersection",(function() { 
var G__9332__delegate = function (s,other,_){
return nex.interpreter.nex_set_intersection(s,other);
};
var G__9332 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9333__i = 0, G__9333__a = new Array(arguments.length -  2);
while (G__9333__i < G__9333__a.length) {G__9333__a[G__9333__i] = arguments[G__9333__i + 2]; ++G__9333__i;}
  _ = new cljs.core.IndexedSeq(G__9333__a,0,null);
} 
return G__9332__delegate.call(this,s,other,_);};
G__9332.cljs$lang$maxFixedArity = 2;
G__9332.cljs$lang$applyTo = (function (arglist__9334){
var s = cljs.core.first(arglist__9334);
arglist__9334 = cljs.core.next(arglist__9334);
var other = cljs.core.first(arglist__9334);
var _ = cljs.core.rest(arglist__9334);
return G__9332__delegate(s,other,_);
});
G__9332.cljs$core$IFn$_invoke$arity$variadic = G__9332__delegate;
return G__9332;
})()
,"symmetric_difference",(function() { 
var G__9335__delegate = function (s,other,_){
return nex.interpreter.nex_set_symmetric_difference(s,other);
};
var G__9335 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9340__i = 0, G__9340__a = new Array(arguments.length -  2);
while (G__9340__i < G__9340__a.length) {G__9340__a[G__9340__i] = arguments[G__9340__i + 2]; ++G__9340__i;}
  _ = new cljs.core.IndexedSeq(G__9340__a,0,null);
} 
return G__9335__delegate.call(this,s,other,_);};
G__9335.cljs$lang$maxFixedArity = 2;
G__9335.cljs$lang$applyTo = (function (arglist__9341){
var s = cljs.core.first(arglist__9341);
arglist__9341 = cljs.core.next(arglist__9341);
var other = cljs.core.first(arglist__9341);
var _ = cljs.core.rest(arglist__9341);
return G__9335__delegate(s,other,_);
});
G__9335.cljs$core$IFn$_invoke$arity$variadic = G__9335__delegate;
return G__9335;
})()
,"size",(function() { 
var G__9346__delegate = function (s,_){
return nex.interpreter.nex_set_size(s);
};
var G__9346 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9348__i = 0, G__9348__a = new Array(arguments.length -  1);
while (G__9348__i < G__9348__a.length) {G__9348__a[G__9348__i] = arguments[G__9348__i + 1]; ++G__9348__i;}
  _ = new cljs.core.IndexedSeq(G__9348__a,0,null);
} 
return G__9346__delegate.call(this,s,_);};
G__9346.cljs$lang$maxFixedArity = 1;
G__9346.cljs$lang$applyTo = (function (arglist__9349){
var s = cljs.core.first(arglist__9349);
var _ = cljs.core.rest(arglist__9349);
return G__9346__delegate(s,_);
});
G__9346.cljs$core$IFn$_invoke$arity$variadic = G__9346__delegate;
return G__9346;
})()
,"is_empty",(function() { 
var G__9354__delegate = function (s,_){
return nex.interpreter.nex_set_empty_QMARK_(s);
};
var G__9354 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9356__i = 0, G__9356__a = new Array(arguments.length -  1);
while (G__9356__i < G__9356__a.length) {G__9356__a[G__9356__i] = arguments[G__9356__i + 1]; ++G__9356__i;}
  _ = new cljs.core.IndexedSeq(G__9356__a,0,null);
} 
return G__9354__delegate.call(this,s,_);};
G__9354.cljs$lang$maxFixedArity = 1;
G__9354.cljs$lang$applyTo = (function (arglist__9358){
var s = cljs.core.first(arglist__9358);
var _ = cljs.core.rest(arglist__9358);
return G__9354__delegate(s,_);
});
G__9354.cljs$core$IFn$_invoke$arity$variadic = G__9354__delegate;
return G__9354;
})()
,"cursor",(function() { 
var G__9360__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.es6_iterator_seq(s.values()))),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__9360 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9370__i = 0, G__9370__a = new Array(arguments.length -  1);
while (G__9370__i < G__9370__a.length) {G__9370__a[G__9370__i] = arguments[G__9370__i + 1]; ++G__9370__i;}
  _ = new cljs.core.IndexedSeq(G__9370__a,0,null);
} 
return G__9360__delegate.call(this,s,_);};
G__9360.cljs$lang$maxFixedArity = 1;
G__9360.cljs$lang$applyTo = (function (arglist__9375){
var s = cljs.core.first(arglist__9375);
var _ = cljs.core.rest(arglist__9375);
return G__9360__delegate(s,_);
});
G__9360.cljs$core$IFn$_invoke$arity$variadic = G__9360__delegate;
return G__9360;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["send",(function() { 
var G__9376__delegate = function (ch,value,p__6628){
var vec__6629 = p__6628;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6629,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$3(ch,value,timeout);
} else {
return nex.interpreter.channel_send.cljs$core$IFn$_invoke$arity$2(ch,value);
}
};
var G__9376 = function (ch,value,var_args){
var p__6628 = null;
if (arguments.length > 2) {
var G__9377__i = 0, G__9377__a = new Array(arguments.length -  2);
while (G__9377__i < G__9377__a.length) {G__9377__a[G__9377__i] = arguments[G__9377__i + 2]; ++G__9377__i;}
  p__6628 = new cljs.core.IndexedSeq(G__9377__a,0,null);
} 
return G__9376__delegate.call(this,ch,value,p__6628);};
G__9376.cljs$lang$maxFixedArity = 2;
G__9376.cljs$lang$applyTo = (function (arglist__9378){
var ch = cljs.core.first(arglist__9378);
arglist__9378 = cljs.core.next(arglist__9378);
var value = cljs.core.first(arglist__9378);
var p__6628 = cljs.core.rest(arglist__9378);
return G__9376__delegate(ch,value,p__6628);
});
G__9376.cljs$core$IFn$_invoke$arity$variadic = G__9376__delegate;
return G__9376;
})()
,"try_send",(function() { 
var G__9379__delegate = function (ch,value,_){
return nex.interpreter.channel_try_send(ch,value);
};
var G__9379 = function (ch,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9380__i = 0, G__9380__a = new Array(arguments.length -  2);
while (G__9380__i < G__9380__a.length) {G__9380__a[G__9380__i] = arguments[G__9380__i + 2]; ++G__9380__i;}
  _ = new cljs.core.IndexedSeq(G__9380__a,0,null);
} 
return G__9379__delegate.call(this,ch,value,_);};
G__9379.cljs$lang$maxFixedArity = 2;
G__9379.cljs$lang$applyTo = (function (arglist__9381){
var ch = cljs.core.first(arglist__9381);
arglist__9381 = cljs.core.next(arglist__9381);
var value = cljs.core.first(arglist__9381);
var _ = cljs.core.rest(arglist__9381);
return G__9379__delegate(ch,value,_);
});
G__9379.cljs$core$IFn$_invoke$arity$variadic = G__9379__delegate;
return G__9379;
})()
,"receive",(function() { 
var G__9382__delegate = function (ch,p__6632){
var vec__6633 = p__6632;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6633,(0),null);
if((!((timeout == null)))){
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$2(ch,timeout);
} else {
return nex.interpreter.channel_receive.cljs$core$IFn$_invoke$arity$1(ch);
}
};
var G__9382 = function (ch,var_args){
var p__6632 = null;
if (arguments.length > 1) {
var G__9383__i = 0, G__9383__a = new Array(arguments.length -  1);
while (G__9383__i < G__9383__a.length) {G__9383__a[G__9383__i] = arguments[G__9383__i + 1]; ++G__9383__i;}
  p__6632 = new cljs.core.IndexedSeq(G__9383__a,0,null);
} 
return G__9382__delegate.call(this,ch,p__6632);};
G__9382.cljs$lang$maxFixedArity = 1;
G__9382.cljs$lang$applyTo = (function (arglist__9384){
var ch = cljs.core.first(arglist__9384);
var p__6632 = cljs.core.rest(arglist__9384);
return G__9382__delegate(ch,p__6632);
});
G__9382.cljs$core$IFn$_invoke$arity$variadic = G__9382__delegate;
return G__9382;
})()
,"try_receive",(function() { 
var G__9385__delegate = function (ch,_){
return nex.interpreter.channel_try_receive(ch);
};
var G__9385 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9387__i = 0, G__9387__a = new Array(arguments.length -  1);
while (G__9387__i < G__9387__a.length) {G__9387__a[G__9387__i] = arguments[G__9387__i + 1]; ++G__9387__i;}
  _ = new cljs.core.IndexedSeq(G__9387__a,0,null);
} 
return G__9385__delegate.call(this,ch,_);};
G__9385.cljs$lang$maxFixedArity = 1;
G__9385.cljs$lang$applyTo = (function (arglist__9388){
var ch = cljs.core.first(arglist__9388);
var _ = cljs.core.rest(arglist__9388);
return G__9385__delegate(ch,_);
});
G__9385.cljs$core$IFn$_invoke$arity$variadic = G__9385__delegate;
return G__9385;
})()
,"close",(function() { 
var G__9389__delegate = function (ch,_){
return nex.interpreter.channel_close(ch);
};
var G__9389 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9390__i = 0, G__9390__a = new Array(arguments.length -  1);
while (G__9390__i < G__9390__a.length) {G__9390__a[G__9390__i] = arguments[G__9390__i + 1]; ++G__9390__i;}
  _ = new cljs.core.IndexedSeq(G__9390__a,0,null);
} 
return G__9389__delegate.call(this,ch,_);};
G__9389.cljs$lang$maxFixedArity = 1;
G__9389.cljs$lang$applyTo = (function (arglist__9391){
var ch = cljs.core.first(arglist__9391);
var _ = cljs.core.rest(arglist__9391);
return G__9389__delegate(ch,_);
});
G__9389.cljs$core$IFn$_invoke$arity$variadic = G__9389__delegate;
return G__9389;
})()
,"is_closed",(function() { 
var G__9392__delegate = function (ch,_){
return new cljs.core.Keyword(null,"closed?","closed?",-1408769040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__9392 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9394__i = 0, G__9394__a = new Array(arguments.length -  1);
while (G__9394__i < G__9394__a.length) {G__9394__a[G__9394__i] = arguments[G__9394__i + 1]; ++G__9394__i;}
  _ = new cljs.core.IndexedSeq(G__9394__a,0,null);
} 
return G__9392__delegate.call(this,ch,_);};
G__9392.cljs$lang$maxFixedArity = 1;
G__9392.cljs$lang$applyTo = (function (arglist__9395){
var ch = cljs.core.first(arglist__9395);
var _ = cljs.core.rest(arglist__9395);
return G__9392__delegate(ch,_);
});
G__9392.cljs$core$IFn$_invoke$arity$variadic = G__9392__delegate;
return G__9392;
})()
,"capacity",(function() { 
var G__9396__delegate = function (ch,_){
return new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch)));
};
var G__9396 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9397__i = 0, G__9397__a = new Array(arguments.length -  1);
while (G__9397__i < G__9397__a.length) {G__9397__a[G__9397__i] = arguments[G__9397__i + 1]; ++G__9397__i;}
  _ = new cljs.core.IndexedSeq(G__9397__a,0,null);
} 
return G__9396__delegate.call(this,ch,_);};
G__9396.cljs$lang$maxFixedArity = 1;
G__9396.cljs$lang$applyTo = (function (arglist__9398){
var ch = cljs.core.first(arglist__9398);
var _ = cljs.core.rest(arglist__9398);
return G__9396__delegate(ch,_);
});
G__9396.cljs$core$IFn$_invoke$arity$variadic = G__9396__delegate;
return G__9396;
})()
,"size",(function() { 
var G__9399__delegate = function (ch,_){
return cljs.core.count(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ch))));
};
var G__9399 = function (ch,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9400__i = 0, G__9400__a = new Array(arguments.length -  1);
while (G__9400__i < G__9400__a.length) {G__9400__a[G__9400__i] = arguments[G__9400__i + 1]; ++G__9400__i;}
  _ = new cljs.core.IndexedSeq(G__9400__a,0,null);
} 
return G__9399__delegate.call(this,ch,_);};
G__9399.cljs$lang$maxFixedArity = 1;
G__9399.cljs$lang$applyTo = (function (arglist__9401){
var ch = cljs.core.first(arglist__9401);
var _ = cljs.core.rest(arglist__9401);
return G__9399__delegate(ch,_);
});
G__9399.cljs$core$IFn$_invoke$arity$variadic = G__9399__delegate;
return G__9399;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__9402__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__9402 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9403__i = 0, G__9403__a = new Array(arguments.length -  1);
while (G__9403__i < G__9403__a.length) {G__9403__a[G__9403__i] = arguments[G__9403__i + 1]; ++G__9403__i;}
  _ = new cljs.core.IndexedSeq(G__9403__a,0,null);
} 
return G__9402__delegate.call(this,b,_);};
G__9402.cljs$lang$maxFixedArity = 1;
G__9402.cljs$lang$applyTo = (function (arglist__9404){
var b = cljs.core.first(arglist__9404);
var _ = cljs.core.rest(arglist__9404);
return G__9402__delegate(b,_);
});
G__9402.cljs$core$IFn$_invoke$arity$variadic = G__9402__delegate;
return G__9402;
})()
,"and",(function() { 
var G__9405__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__9405 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9406__i = 0, G__9406__a = new Array(arguments.length -  2);
while (G__9406__i < G__9406__a.length) {G__9406__a[G__9406__i] = arguments[G__9406__i + 2]; ++G__9406__i;}
  _ = new cljs.core.IndexedSeq(G__9406__a,0,null);
} 
return G__9405__delegate.call(this,b,other,_);};
G__9405.cljs$lang$maxFixedArity = 2;
G__9405.cljs$lang$applyTo = (function (arglist__9407){
var b = cljs.core.first(arglist__9407);
arglist__9407 = cljs.core.next(arglist__9407);
var other = cljs.core.first(arglist__9407);
var _ = cljs.core.rest(arglist__9407);
return G__9405__delegate(b,other,_);
});
G__9405.cljs$core$IFn$_invoke$arity$variadic = G__9405__delegate;
return G__9405;
})()
,"or",(function() { 
var G__9408__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__9408 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9409__i = 0, G__9409__a = new Array(arguments.length -  2);
while (G__9409__i < G__9409__a.length) {G__9409__a[G__9409__i] = arguments[G__9409__i + 2]; ++G__9409__i;}
  _ = new cljs.core.IndexedSeq(G__9409__a,0,null);
} 
return G__9408__delegate.call(this,b,other,_);};
G__9408.cljs$lang$maxFixedArity = 2;
G__9408.cljs$lang$applyTo = (function (arglist__9410){
var b = cljs.core.first(arglist__9410);
arglist__9410 = cljs.core.next(arglist__9410);
var other = cljs.core.first(arglist__9410);
var _ = cljs.core.rest(arglist__9410);
return G__9408__delegate(b,other,_);
});
G__9408.cljs$core$IFn$_invoke$arity$variadic = G__9408__delegate;
return G__9408;
})()
,"not",(function() { 
var G__9411__delegate = function (b,_){
return cljs.core.not(b);
};
var G__9411 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9412__i = 0, G__9412__a = new Array(arguments.length -  1);
while (G__9412__i < G__9412__a.length) {G__9412__a[G__9412__i] = arguments[G__9412__i + 1]; ++G__9412__i;}
  _ = new cljs.core.IndexedSeq(G__9412__a,0,null);
} 
return G__9411__delegate.call(this,b,_);};
G__9411.cljs$lang$maxFixedArity = 1;
G__9411.cljs$lang$applyTo = (function (arglist__9413){
var b = cljs.core.first(arglist__9413);
var _ = cljs.core.rest(arglist__9413);
return G__9411__delegate(b,_);
});
G__9411.cljs$core$IFn$_invoke$arity$variadic = G__9411__delegate;
return G__9411;
})()
,"equals",(function() { 
var G__9414__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__9414 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9415__i = 0, G__9415__a = new Array(arguments.length -  2);
while (G__9415__i < G__9415__a.length) {G__9415__a[G__9415__i] = arguments[G__9415__i + 2]; ++G__9415__i;}
  _ = new cljs.core.IndexedSeq(G__9415__a,0,null);
} 
return G__9414__delegate.call(this,b,other,_);};
G__9414.cljs$lang$maxFixedArity = 2;
G__9414.cljs$lang$applyTo = (function (arglist__9416){
var b = cljs.core.first(arglist__9416);
arglist__9416 = cljs.core.next(arglist__9416);
var other = cljs.core.first(arglist__9416);
var _ = cljs.core.rest(arglist__9416);
return G__9414__delegate(b,other,_);
});
G__9414.cljs$core$IFn$_invoke$arity$variadic = G__9414__delegate;
return G__9414;
})()
,"not_equals",(function() { 
var G__9419__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__9419 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9422__i = 0, G__9422__a = new Array(arguments.length -  2);
while (G__9422__i < G__9422__a.length) {G__9422__a[G__9422__i] = arguments[G__9422__i + 2]; ++G__9422__i;}
  _ = new cljs.core.IndexedSeq(G__9422__a,0,null);
} 
return G__9419__delegate.call(this,b,other,_);};
G__9419.cljs$lang$maxFixedArity = 2;
G__9419.cljs$lang$applyTo = (function (arglist__9423){
var b = cljs.core.first(arglist__9423);
arglist__9423 = cljs.core.next(arglist__9423);
var other = cljs.core.first(arglist__9423);
var _ = cljs.core.rest(arglist__9423);
return G__9419__delegate(b,other,_);
});
G__9419.cljs$core$IFn$_invoke$arity$variadic = G__9419__delegate;
return G__9419;
})()
,"compare",(function() { 
var G__9424__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__9424 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9425__i = 0, G__9425__a = new Array(arguments.length -  2);
while (G__9425__i < G__9425__a.length) {G__9425__a[G__9425__i] = arguments[G__9425__i + 2]; ++G__9425__i;}
  _ = new cljs.core.IndexedSeq(G__9425__a,0,null);
} 
return G__9424__delegate.call(this,b,other,_);};
G__9424.cljs$lang$maxFixedArity = 2;
G__9424.cljs$lang$applyTo = (function (arglist__9426){
var b = cljs.core.first(arglist__9426);
arglist__9426 = cljs.core.next(arglist__9426);
var other = cljs.core.first(arglist__9426);
var _ = cljs.core.rest(arglist__9426);
return G__9424__delegate(b,other,_);
});
G__9424.cljs$core$IFn$_invoke$arity$variadic = G__9424__delegate;
return G__9424;
})()
,"hash",(function() { 
var G__9431__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__9431 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9432__i = 0, G__9432__a = new Array(arguments.length -  1);
while (G__9432__i < G__9432__a.length) {G__9432__a[G__9432__i] = arguments[G__9432__i + 1]; ++G__9432__i;}
  _ = new cljs.core.IndexedSeq(G__9432__a,0,null);
} 
return G__9431__delegate.call(this,b,_);};
G__9431.cljs$lang$maxFixedArity = 1;
G__9431.cljs$lang$applyTo = (function (arglist__9433){
var b = cljs.core.first(arglist__9433);
var _ = cljs.core.rest(arglist__9433);
return G__9431__delegate(b,_);
});
G__9431.cljs$core$IFn$_invoke$arity$variadic = G__9431__delegate;
return G__9431;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__9438__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__9438 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9439__i = 0, G__9439__a = new Array(arguments.length -  1);
while (G__9439__i < G__9439__a.length) {G__9439__a[G__9439__i] = arguments[G__9439__i + 1]; ++G__9439__i;}
  _ = new cljs.core.IndexedSeq(G__9439__a,0,null);
} 
return G__9438__delegate.call(this,f,_);};
G__9438.cljs$lang$maxFixedArity = 1;
G__9438.cljs$lang$applyTo = (function (arglist__9440){
var f = cljs.core.first(arglist__9440);
var _ = cljs.core.rest(arglist__9440);
return G__9438__delegate(f,_);
});
G__9438.cljs$core$IFn$_invoke$arity$variadic = G__9438__delegate;
return G__9438;
})()
,"write",(function() { 
var G__9443__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__9443 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9444__i = 0, G__9444__a = new Array(arguments.length -  2);
while (G__9444__i < G__9444__a.length) {G__9444__a[G__9444__i] = arguments[G__9444__i + 2]; ++G__9444__i;}
  _ = new cljs.core.IndexedSeq(G__9444__a,0,null);
} 
return G__9443__delegate.call(this,f,content,_);};
G__9443.cljs$lang$maxFixedArity = 2;
G__9443.cljs$lang$applyTo = (function (arglist__9445){
var f = cljs.core.first(arglist__9445);
arglist__9445 = cljs.core.next(arglist__9445);
var content = cljs.core.first(arglist__9445);
var _ = cljs.core.rest(arglist__9445);
return G__9443__delegate(f,content,_);
});
G__9443.cljs$core$IFn$_invoke$arity$variadic = G__9443__delegate;
return G__9443;
})()
,"append",(function() { 
var G__9446__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__9446 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9447__i = 0, G__9447__a = new Array(arguments.length -  2);
while (G__9447__i < G__9447__a.length) {G__9447__a[G__9447__i] = arguments[G__9447__i + 2]; ++G__9447__i;}
  _ = new cljs.core.IndexedSeq(G__9447__a,0,null);
} 
return G__9446__delegate.call(this,f,content,_);};
G__9446.cljs$lang$maxFixedArity = 2;
G__9446.cljs$lang$applyTo = (function (arglist__9452){
var f = cljs.core.first(arglist__9452);
arglist__9452 = cljs.core.next(arglist__9452);
var content = cljs.core.first(arglist__9452);
var _ = cljs.core.rest(arglist__9452);
return G__9446__delegate(f,content,_);
});
G__9446.cljs$core$IFn$_invoke$arity$variadic = G__9446__delegate;
return G__9446;
})()
,"exists",(function() { 
var G__9453__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__9453 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9454__i = 0, G__9454__a = new Array(arguments.length -  1);
while (G__9454__i < G__9454__a.length) {G__9454__a[G__9454__i] = arguments[G__9454__i + 1]; ++G__9454__i;}
  _ = new cljs.core.IndexedSeq(G__9454__a,0,null);
} 
return G__9453__delegate.call(this,f,_);};
G__9453.cljs$lang$maxFixedArity = 1;
G__9453.cljs$lang$applyTo = (function (arglist__9455){
var f = cljs.core.first(arglist__9455);
var _ = cljs.core.rest(arglist__9455);
return G__9453__delegate(f,_);
});
G__9453.cljs$core$IFn$_invoke$arity$variadic = G__9453__delegate;
return G__9453;
})()
,"delete",(function() { 
var G__9456__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__9456 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9457__i = 0, G__9457__a = new Array(arguments.length -  1);
while (G__9457__i < G__9457__a.length) {G__9457__a[G__9457__i] = arguments[G__9457__i + 1]; ++G__9457__i;}
  _ = new cljs.core.IndexedSeq(G__9457__a,0,null);
} 
return G__9456__delegate.call(this,f,_);};
G__9456.cljs$lang$maxFixedArity = 1;
G__9456.cljs$lang$applyTo = (function (arglist__9458){
var f = cljs.core.first(arglist__9458);
var _ = cljs.core.rest(arglist__9458);
return G__9456__delegate(f,_);
});
G__9456.cljs$core$IFn$_invoke$arity$variadic = G__9456__delegate;
return G__9456;
})()
,"lines",(function() { 
var G__9459__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__9459 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9460__i = 0, G__9460__a = new Array(arguments.length -  1);
while (G__9460__i < G__9460__a.length) {G__9460__a[G__9460__i] = arguments[G__9460__i + 1]; ++G__9460__i;}
  _ = new cljs.core.IndexedSeq(G__9460__a,0,null);
} 
return G__9459__delegate.call(this,f,_);};
G__9459.cljs$lang$maxFixedArity = 1;
G__9459.cljs$lang$applyTo = (function (arglist__9461){
var f = cljs.core.first(arglist__9461);
var _ = cljs.core.rest(arglist__9461);
return G__9459__delegate(f,_);
});
G__9459.cljs$core$IFn$_invoke$arity$variadic = G__9459__delegate;
return G__9459;
})()
,"close",(function() { 
var G__9462__delegate = function (_,___$1){
return null;
};
var G__9462 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__9467__i = 0, G__9467__a = new Array(arguments.length -  1);
while (G__9467__i < G__9467__a.length) {G__9467__a[G__9467__i] = arguments[G__9467__i + 1]; ++G__9467__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9467__a,0,null);
} 
return G__9462__delegate.call(this,_,___$1);};
G__9462.cljs$lang$maxFixedArity = 1;
G__9462.cljs$lang$applyTo = (function (arglist__9469){
var _ = cljs.core.first(arglist__9469);
var ___$1 = cljs.core.rest(arglist__9469);
return G__9462__delegate(_,___$1);
});
G__9462.cljs$core$IFn$_invoke$arity$variadic = G__9462__delegate;
return G__9462;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","bitwise_set","less_than","bitwise_or","plus","to_string","hash","greater_than","bitwise_logical_right_shift","pick","max","not_equals","bitwise_unset","minus","times","bitwise_and","bitwise_right_shift","divided_by","abs","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","equals","greater_than_or_equal","bitwise_rotate_left","bitwise_xor"],[(function() { 
var G__9471__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__9471 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9472__i = 0, G__9472__a = new Array(arguments.length -  2);
while (G__9472__i < G__9472__a.length) {G__9472__a[G__9472__i] = arguments[G__9472__i + 2]; ++G__9472__i;}
  _ = new cljs.core.IndexedSeq(G__9472__a,0,null);
} 
return G__9471__delegate.call(this,n,other,_);};
G__9471.cljs$lang$maxFixedArity = 2;
G__9471.cljs$lang$applyTo = (function (arglist__9473){
var n = cljs.core.first(arglist__9473);
arglist__9473 = cljs.core.next(arglist__9473);
var other = cljs.core.first(arglist__9473);
var _ = cljs.core.rest(arglist__9473);
return G__9471__delegate(n,other,_);
});
G__9471.cljs$core$IFn$_invoke$arity$variadic = G__9471__delegate;
return G__9471;
})()
,(function() { 
var G__9474__delegate = function (n,other,_){
return (n <= other);
};
var G__9474 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9480__i = 0, G__9480__a = new Array(arguments.length -  2);
while (G__9480__i < G__9480__a.length) {G__9480__a[G__9480__i] = arguments[G__9480__i + 2]; ++G__9480__i;}
  _ = new cljs.core.IndexedSeq(G__9480__a,0,null);
} 
return G__9474__delegate.call(this,n,other,_);};
G__9474.cljs$lang$maxFixedArity = 2;
G__9474.cljs$lang$applyTo = (function (arglist__9482){
var n = cljs.core.first(arglist__9482);
arglist__9482 = cljs.core.next(arglist__9482);
var other = cljs.core.first(arglist__9482);
var _ = cljs.core.rest(arglist__9482);
return G__9474__delegate(n,other,_);
});
G__9474.cljs$core$IFn$_invoke$arity$variadic = G__9474__delegate;
return G__9474;
})()
,(function() { 
var G__9484__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9484 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9490__i = 0, G__9490__a = new Array(arguments.length -  2);
while (G__9490__i < G__9490__a.length) {G__9490__a[G__9490__i] = arguments[G__9490__i + 2]; ++G__9490__i;}
  _ = new cljs.core.IndexedSeq(G__9490__a,0,null);
} 
return G__9484__delegate.call(this,n,other,_);};
G__9484.cljs$lang$maxFixedArity = 2;
G__9484.cljs$lang$applyTo = (function (arglist__9491){
var n = cljs.core.first(arglist__9491);
arglist__9491 = cljs.core.next(arglist__9491);
var other = cljs.core.first(arglist__9491);
var _ = cljs.core.rest(arglist__9491);
return G__9484__delegate(n,other,_);
});
G__9484.cljs$core$IFn$_invoke$arity$variadic = G__9484__delegate;
return G__9484;
})()
,(function() { 
var G__9492__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_set(n,idx);
};
var G__9492 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9493__i = 0, G__9493__a = new Array(arguments.length -  2);
while (G__9493__i < G__9493__a.length) {G__9493__a[G__9493__i] = arguments[G__9493__i + 2]; ++G__9493__i;}
  _ = new cljs.core.IndexedSeq(G__9493__a,0,null);
} 
return G__9492__delegate.call(this,n,idx,_);};
G__9492.cljs$lang$maxFixedArity = 2;
G__9492.cljs$lang$applyTo = (function (arglist__9494){
var n = cljs.core.first(arglist__9494);
arglist__9494 = cljs.core.next(arglist__9494);
var idx = cljs.core.first(arglist__9494);
var _ = cljs.core.rest(arglist__9494);
return G__9492__delegate(n,idx,_);
});
G__9492.cljs$core$IFn$_invoke$arity$variadic = G__9492__delegate;
return G__9492;
})()
,(function() { 
var G__9495__delegate = function (n,other,_){
return (n < other);
};
var G__9495 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9496__i = 0, G__9496__a = new Array(arguments.length -  2);
while (G__9496__i < G__9496__a.length) {G__9496__a[G__9496__i] = arguments[G__9496__i + 2]; ++G__9496__i;}
  _ = new cljs.core.IndexedSeq(G__9496__a,0,null);
} 
return G__9495__delegate.call(this,n,other,_);};
G__9495.cljs$lang$maxFixedArity = 2;
G__9495.cljs$lang$applyTo = (function (arglist__9501){
var n = cljs.core.first(arglist__9501);
arglist__9501 = cljs.core.next(arglist__9501);
var other = cljs.core.first(arglist__9501);
var _ = cljs.core.rest(arglist__9501);
return G__9495__delegate(n,other,_);
});
G__9495.cljs$core$IFn$_invoke$arity$variadic = G__9495__delegate;
return G__9495;
})()
,(function() { 
var G__9506__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_or(n,other);
};
var G__9506 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9507__i = 0, G__9507__a = new Array(arguments.length -  2);
while (G__9507__i < G__9507__a.length) {G__9507__a[G__9507__i] = arguments[G__9507__i + 2]; ++G__9507__i;}
  _ = new cljs.core.IndexedSeq(G__9507__a,0,null);
} 
return G__9506__delegate.call(this,n,other,_);};
G__9506.cljs$lang$maxFixedArity = 2;
G__9506.cljs$lang$applyTo = (function (arglist__9508){
var n = cljs.core.first(arglist__9508);
arglist__9508 = cljs.core.next(arglist__9508);
var other = cljs.core.first(arglist__9508);
var _ = cljs.core.rest(arglist__9508);
return G__9506__delegate(n,other,_);
});
G__9506.cljs$core$IFn$_invoke$arity$variadic = G__9506__delegate;
return G__9506;
})()
,(function() { 
var G__9509__delegate = function (n,other,_){
return (n + other);
};
var G__9509 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9510__i = 0, G__9510__a = new Array(arguments.length -  2);
while (G__9510__i < G__9510__a.length) {G__9510__a[G__9510__i] = arguments[G__9510__i + 2]; ++G__9510__i;}
  _ = new cljs.core.IndexedSeq(G__9510__a,0,null);
} 
return G__9509__delegate.call(this,n,other,_);};
G__9509.cljs$lang$maxFixedArity = 2;
G__9509.cljs$lang$applyTo = (function (arglist__9511){
var n = cljs.core.first(arglist__9511);
arglist__9511 = cljs.core.next(arglist__9511);
var other = cljs.core.first(arglist__9511);
var _ = cljs.core.rest(arglist__9511);
return G__9509__delegate(n,other,_);
});
G__9509.cljs$core$IFn$_invoke$arity$variadic = G__9509__delegate;
return G__9509;
})()
,(function() { 
var G__9512__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__9512 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9513__i = 0, G__9513__a = new Array(arguments.length -  1);
while (G__9513__i < G__9513__a.length) {G__9513__a[G__9513__i] = arguments[G__9513__i + 1]; ++G__9513__i;}
  _ = new cljs.core.IndexedSeq(G__9513__a,0,null);
} 
return G__9512__delegate.call(this,n,_);};
G__9512.cljs$lang$maxFixedArity = 1;
G__9512.cljs$lang$applyTo = (function (arglist__9514){
var n = cljs.core.first(arglist__9514);
var _ = cljs.core.rest(arglist__9514);
return G__9512__delegate(n,_);
});
G__9512.cljs$core$IFn$_invoke$arity$variadic = G__9512__delegate;
return G__9512;
})()
,(function() { 
var G__9515__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__9515 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9516__i = 0, G__9516__a = new Array(arguments.length -  1);
while (G__9516__i < G__9516__a.length) {G__9516__a[G__9516__i] = arguments[G__9516__i + 1]; ++G__9516__i;}
  _ = new cljs.core.IndexedSeq(G__9516__a,0,null);
} 
return G__9515__delegate.call(this,n,_);};
G__9515.cljs$lang$maxFixedArity = 1;
G__9515.cljs$lang$applyTo = (function (arglist__9517){
var n = cljs.core.first(arglist__9517);
var _ = cljs.core.rest(arglist__9517);
return G__9515__delegate(n,_);
});
G__9515.cljs$core$IFn$_invoke$arity$variadic = G__9515__delegate;
return G__9515;
})()
,(function() { 
var G__9518__delegate = function (n,other,_){
return (n > other);
};
var G__9518 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9519__i = 0, G__9519__a = new Array(arguments.length -  2);
while (G__9519__i < G__9519__a.length) {G__9519__a[G__9519__i] = arguments[G__9519__i + 2]; ++G__9519__i;}
  _ = new cljs.core.IndexedSeq(G__9519__a,0,null);
} 
return G__9518__delegate.call(this,n,other,_);};
G__9518.cljs$lang$maxFixedArity = 2;
G__9518.cljs$lang$applyTo = (function (arglist__9520){
var n = cljs.core.first(arglist__9520);
arglist__9520 = cljs.core.next(arglist__9520);
var other = cljs.core.first(arglist__9520);
var _ = cljs.core.rest(arglist__9520);
return G__9518__delegate(n,other,_);
});
G__9518.cljs$core$IFn$_invoke$arity$variadic = G__9518__delegate;
return G__9518;
})()
,(function() { 
var G__9521__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_logical_right_shift(n,shift);
};
var G__9521 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9522__i = 0, G__9522__a = new Array(arguments.length -  2);
while (G__9522__i < G__9522__a.length) {G__9522__a[G__9522__i] = arguments[G__9522__i + 2]; ++G__9522__i;}
  _ = new cljs.core.IndexedSeq(G__9522__a,0,null);
} 
return G__9521__delegate.call(this,n,shift,_);};
G__9521.cljs$lang$maxFixedArity = 2;
G__9521.cljs$lang$applyTo = (function (arglist__9523){
var n = cljs.core.first(arglist__9523);
arglist__9523 = cljs.core.next(arglist__9523);
var shift = cljs.core.first(arglist__9523);
var _ = cljs.core.rest(arglist__9523);
return G__9521__delegate(n,shift,_);
});
G__9521.cljs$core$IFn$_invoke$arity$variadic = G__9521__delegate;
return G__9521;
})()
,(function() { 
var G__9524__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__9524 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9528__i = 0, G__9528__a = new Array(arguments.length -  1);
while (G__9528__i < G__9528__a.length) {G__9528__a[G__9528__i] = arguments[G__9528__i + 1]; ++G__9528__i;}
  _ = new cljs.core.IndexedSeq(G__9528__a,0,null);
} 
return G__9524__delegate.call(this,n,_);};
G__9524.cljs$lang$maxFixedArity = 1;
G__9524.cljs$lang$applyTo = (function (arglist__9529){
var n = cljs.core.first(arglist__9529);
var _ = cljs.core.rest(arglist__9529);
return G__9524__delegate(n,_);
});
G__9524.cljs$core$IFn$_invoke$arity$variadic = G__9524__delegate;
return G__9524;
})()
,(function() { 
var G__9530__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9530 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9535__i = 0, G__9535__a = new Array(arguments.length -  2);
while (G__9535__i < G__9535__a.length) {G__9535__a[G__9535__i] = arguments[G__9535__i + 2]; ++G__9535__i;}
  _ = new cljs.core.IndexedSeq(G__9535__a,0,null);
} 
return G__9530__delegate.call(this,n,other,_);};
G__9530.cljs$lang$maxFixedArity = 2;
G__9530.cljs$lang$applyTo = (function (arglist__9537){
var n = cljs.core.first(arglist__9537);
arglist__9537 = cljs.core.next(arglist__9537);
var other = cljs.core.first(arglist__9537);
var _ = cljs.core.rest(arglist__9537);
return G__9530__delegate(n,other,_);
});
G__9530.cljs$core$IFn$_invoke$arity$variadic = G__9530__delegate;
return G__9530;
})()
,(function() { 
var G__9539__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9539 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9545__i = 0, G__9545__a = new Array(arguments.length -  2);
while (G__9545__i < G__9545__a.length) {G__9545__a[G__9545__i] = arguments[G__9545__i + 2]; ++G__9545__i;}
  _ = new cljs.core.IndexedSeq(G__9545__a,0,null);
} 
return G__9539__delegate.call(this,n,other,_);};
G__9539.cljs$lang$maxFixedArity = 2;
G__9539.cljs$lang$applyTo = (function (arglist__9549){
var n = cljs.core.first(arglist__9549);
arglist__9549 = cljs.core.next(arglist__9549);
var other = cljs.core.first(arglist__9549);
var _ = cljs.core.rest(arglist__9549);
return G__9539__delegate(n,other,_);
});
G__9539.cljs$core$IFn$_invoke$arity$variadic = G__9539__delegate;
return G__9539;
})()
,(function() { 
var G__9550__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_unset(n,idx);
};
var G__9550 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9555__i = 0, G__9555__a = new Array(arguments.length -  2);
while (G__9555__i < G__9555__a.length) {G__9555__a[G__9555__i] = arguments[G__9555__i + 2]; ++G__9555__i;}
  _ = new cljs.core.IndexedSeq(G__9555__a,0,null);
} 
return G__9550__delegate.call(this,n,idx,_);};
G__9550.cljs$lang$maxFixedArity = 2;
G__9550.cljs$lang$applyTo = (function (arglist__9560){
var n = cljs.core.first(arglist__9560);
arglist__9560 = cljs.core.next(arglist__9560);
var idx = cljs.core.first(arglist__9560);
var _ = cljs.core.rest(arglist__9560);
return G__9550__delegate(n,idx,_);
});
G__9550.cljs$core$IFn$_invoke$arity$variadic = G__9550__delegate;
return G__9550;
})()
,(function() { 
var G__9561__delegate = function (n,other,_){
return (n - other);
};
var G__9561 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9562__i = 0, G__9562__a = new Array(arguments.length -  2);
while (G__9562__i < G__9562__a.length) {G__9562__a[G__9562__i] = arguments[G__9562__i + 2]; ++G__9562__i;}
  _ = new cljs.core.IndexedSeq(G__9562__a,0,null);
} 
return G__9561__delegate.call(this,n,other,_);};
G__9561.cljs$lang$maxFixedArity = 2;
G__9561.cljs$lang$applyTo = (function (arglist__9563){
var n = cljs.core.first(arglist__9563);
arglist__9563 = cljs.core.next(arglist__9563);
var other = cljs.core.first(arglist__9563);
var _ = cljs.core.rest(arglist__9563);
return G__9561__delegate(n,other,_);
});
G__9561.cljs$core$IFn$_invoke$arity$variadic = G__9561__delegate;
return G__9561;
})()
,(function() { 
var G__9564__delegate = function (n,other,_){
return (n * other);
};
var G__9564 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9565__i = 0, G__9565__a = new Array(arguments.length -  2);
while (G__9565__i < G__9565__a.length) {G__9565__a[G__9565__i] = arguments[G__9565__i + 2]; ++G__9565__i;}
  _ = new cljs.core.IndexedSeq(G__9565__a,0,null);
} 
return G__9564__delegate.call(this,n,other,_);};
G__9564.cljs$lang$maxFixedArity = 2;
G__9564.cljs$lang$applyTo = (function (arglist__9566){
var n = cljs.core.first(arglist__9566);
arglist__9566 = cljs.core.next(arglist__9566);
var other = cljs.core.first(arglist__9566);
var _ = cljs.core.rest(arglist__9566);
return G__9564__delegate(n,other,_);
});
G__9564.cljs$core$IFn$_invoke$arity$variadic = G__9564__delegate;
return G__9564;
})()
,(function() { 
var G__9567__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_and(n,other);
};
var G__9567 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9568__i = 0, G__9568__a = new Array(arguments.length -  2);
while (G__9568__i < G__9568__a.length) {G__9568__a[G__9568__i] = arguments[G__9568__i + 2]; ++G__9568__i;}
  _ = new cljs.core.IndexedSeq(G__9568__a,0,null);
} 
return G__9567__delegate.call(this,n,other,_);};
G__9567.cljs$lang$maxFixedArity = 2;
G__9567.cljs$lang$applyTo = (function (arglist__9569){
var n = cljs.core.first(arglist__9569);
arglist__9569 = cljs.core.next(arglist__9569);
var other = cljs.core.first(arglist__9569);
var _ = cljs.core.rest(arglist__9569);
return G__9567__delegate(n,other,_);
});
G__9567.cljs$core$IFn$_invoke$arity$variadic = G__9567__delegate;
return G__9567;
})()
,(function() { 
var G__9570__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_right_shift(n,shift);
};
var G__9570 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9571__i = 0, G__9571__a = new Array(arguments.length -  2);
while (G__9571__i < G__9571__a.length) {G__9571__a[G__9571__i] = arguments[G__9571__i + 2]; ++G__9571__i;}
  _ = new cljs.core.IndexedSeq(G__9571__a,0,null);
} 
return G__9570__delegate.call(this,n,shift,_);};
G__9570.cljs$lang$maxFixedArity = 2;
G__9570.cljs$lang$applyTo = (function (arglist__9572){
var n = cljs.core.first(arglist__9572);
arglist__9572 = cljs.core.next(arglist__9572);
var shift = cljs.core.first(arglist__9572);
var _ = cljs.core.rest(arglist__9572);
return G__9570__delegate(n,shift,_);
});
G__9570.cljs$core$IFn$_invoke$arity$variadic = G__9570__delegate;
return G__9570;
})()
,(function() { 
var G__9573__delegate = function (n,other,_){
return (n / other);
};
var G__9573 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9574__i = 0, G__9574__a = new Array(arguments.length -  2);
while (G__9574__i < G__9574__a.length) {G__9574__a[G__9574__i] = arguments[G__9574__i + 2]; ++G__9574__i;}
  _ = new cljs.core.IndexedSeq(G__9574__a,0,null);
} 
return G__9573__delegate.call(this,n,other,_);};
G__9573.cljs$lang$maxFixedArity = 2;
G__9573.cljs$lang$applyTo = (function (arglist__9575){
var n = cljs.core.first(arglist__9575);
arglist__9575 = cljs.core.next(arglist__9575);
var other = cljs.core.first(arglist__9575);
var _ = cljs.core.rest(arglist__9575);
return G__9573__delegate(n,other,_);
});
G__9573.cljs$core$IFn$_invoke$arity$variadic = G__9573__delegate;
return G__9573;
})()
,(function() { 
var G__9576__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__9576 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9577__i = 0, G__9577__a = new Array(arguments.length -  1);
while (G__9577__i < G__9577__a.length) {G__9577__a[G__9577__i] = arguments[G__9577__i + 1]; ++G__9577__i;}
  _ = new cljs.core.IndexedSeq(G__9577__a,0,null);
} 
return G__9576__delegate.call(this,n,_);};
G__9576.cljs$lang$maxFixedArity = 1;
G__9576.cljs$lang$applyTo = (function (arglist__9578){
var n = cljs.core.first(arglist__9578);
var _ = cljs.core.rest(arglist__9578);
return G__9576__delegate(n,_);
});
G__9576.cljs$core$IFn$_invoke$arity$variadic = G__9576__delegate;
return G__9576;
})()
,(function() { 
var G__9582__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_right(n,shift);
};
var G__9582 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9583__i = 0, G__9583__a = new Array(arguments.length -  2);
while (G__9583__i < G__9583__a.length) {G__9583__a[G__9583__i] = arguments[G__9583__i + 2]; ++G__9583__i;}
  _ = new cljs.core.IndexedSeq(G__9583__a,0,null);
} 
return G__9582__delegate.call(this,n,shift,_);};
G__9582.cljs$lang$maxFixedArity = 2;
G__9582.cljs$lang$applyTo = (function (arglist__9584){
var n = cljs.core.first(arglist__9584);
arglist__9584 = cljs.core.next(arglist__9584);
var shift = cljs.core.first(arglist__9584);
var _ = cljs.core.rest(arglist__9584);
return G__9582__delegate(n,shift,_);
});
G__9582.cljs$core$IFn$_invoke$arity$variadic = G__9582__delegate;
return G__9582;
})()
,(function() { 
var G__9589__delegate = function (n,_){
return nex.interpreter.nex_bitwise_not(n);
};
var G__9589 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9592__i = 0, G__9592__a = new Array(arguments.length -  1);
while (G__9592__i < G__9592__a.length) {G__9592__a[G__9592__i] = arguments[G__9592__i + 1]; ++G__9592__i;}
  _ = new cljs.core.IndexedSeq(G__9592__a,0,null);
} 
return G__9589__delegate.call(this,n,_);};
G__9589.cljs$lang$maxFixedArity = 1;
G__9589.cljs$lang$applyTo = (function (arglist__9594){
var n = cljs.core.first(arglist__9594);
var _ = cljs.core.rest(arglist__9594);
return G__9589__delegate(n,_);
});
G__9589.cljs$core$IFn$_invoke$arity$variadic = G__9589__delegate;
return G__9589;
})()
,(function() { 
var G__9599__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_left_shift(n,shift);
};
var G__9599 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9603__i = 0, G__9603__a = new Array(arguments.length -  2);
while (G__9603__i < G__9603__a.length) {G__9603__a[G__9603__i] = arguments[G__9603__i + 2]; ++G__9603__i;}
  _ = new cljs.core.IndexedSeq(G__9603__a,0,null);
} 
return G__9599__delegate.call(this,n,shift,_);};
G__9599.cljs$lang$maxFixedArity = 2;
G__9599.cljs$lang$applyTo = (function (arglist__9604){
var n = cljs.core.first(arglist__9604);
arglist__9604 = cljs.core.next(arglist__9604);
var shift = cljs.core.first(arglist__9604);
var _ = cljs.core.rest(arglist__9604);
return G__9599__delegate(n,shift,_);
});
G__9599.cljs$core$IFn$_invoke$arity$variadic = G__9599__delegate;
return G__9599;
})()
,(function() { 
var G__9613__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_is_set(n,idx);
};
var G__9613 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9618__i = 0, G__9618__a = new Array(arguments.length -  2);
while (G__9618__i < G__9618__a.length) {G__9618__a[G__9618__i] = arguments[G__9618__i + 2]; ++G__9618__i;}
  _ = new cljs.core.IndexedSeq(G__9618__a,0,null);
} 
return G__9613__delegate.call(this,n,idx,_);};
G__9613.cljs$lang$maxFixedArity = 2;
G__9613.cljs$lang$applyTo = (function (arglist__9619){
var n = cljs.core.first(arglist__9619);
arglist__9619 = cljs.core.next(arglist__9619);
var idx = cljs.core.first(arglist__9619);
var _ = cljs.core.rest(arglist__9619);
return G__9613__delegate(n,idx,_);
});
G__9613.cljs$core$IFn$_invoke$arity$variadic = G__9613__delegate;
return G__9613;
})()
,(function() { 
var G__9620__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9620 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9621__i = 0, G__9621__a = new Array(arguments.length -  2);
while (G__9621__i < G__9621__a.length) {G__9621__a[G__9621__i] = arguments[G__9621__i + 2]; ++G__9621__i;}
  _ = new cljs.core.IndexedSeq(G__9621__a,0,null);
} 
return G__9620__delegate.call(this,n,other,_);};
G__9620.cljs$lang$maxFixedArity = 2;
G__9620.cljs$lang$applyTo = (function (arglist__9622){
var n = cljs.core.first(arglist__9622);
arglist__9622 = cljs.core.next(arglist__9622);
var other = cljs.core.first(arglist__9622);
var _ = cljs.core.rest(arglist__9622);
return G__9620__delegate(n,other,_);
});
G__9620.cljs$core$IFn$_invoke$arity$variadic = G__9620__delegate;
return G__9620;
})()
,(function() { 
var G__9623__delegate = function (n,other,_){
return (n >= other);
};
var G__9623 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9624__i = 0, G__9624__a = new Array(arguments.length -  2);
while (G__9624__i < G__9624__a.length) {G__9624__a[G__9624__i] = arguments[G__9624__i + 2]; ++G__9624__i;}
  _ = new cljs.core.IndexedSeq(G__9624__a,0,null);
} 
return G__9623__delegate.call(this,n,other,_);};
G__9623.cljs$lang$maxFixedArity = 2;
G__9623.cljs$lang$applyTo = (function (arglist__9625){
var n = cljs.core.first(arglist__9625);
arglist__9625 = cljs.core.next(arglist__9625);
var other = cljs.core.first(arglist__9625);
var _ = cljs.core.rest(arglist__9625);
return G__9623__delegate(n,other,_);
});
G__9623.cljs$core$IFn$_invoke$arity$variadic = G__9623__delegate;
return G__9623;
})()
,(function() { 
var G__9629__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_left(n,shift);
};
var G__9629 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9630__i = 0, G__9630__a = new Array(arguments.length -  2);
while (G__9630__i < G__9630__a.length) {G__9630__a[G__9630__i] = arguments[G__9630__i + 2]; ++G__9630__i;}
  _ = new cljs.core.IndexedSeq(G__9630__a,0,null);
} 
return G__9629__delegate.call(this,n,shift,_);};
G__9629.cljs$lang$maxFixedArity = 2;
G__9629.cljs$lang$applyTo = (function (arglist__9635){
var n = cljs.core.first(arglist__9635);
arglist__9635 = cljs.core.next(arglist__9635);
var shift = cljs.core.first(arglist__9635);
var _ = cljs.core.rest(arglist__9635);
return G__9629__delegate(n,shift,_);
});
G__9629.cljs$core$IFn$_invoke$arity$variadic = G__9629__delegate;
return G__9629;
})()
,(function() { 
var G__9637__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_xor(n,other);
};
var G__9637 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9640__i = 0, G__9640__a = new Array(arguments.length -  2);
while (G__9640__i < G__9640__a.length) {G__9640__a[G__9640__i] = arguments[G__9640__i + 2]; ++G__9640__i;}
  _ = new cljs.core.IndexedSeq(G__9640__a,0,null);
} 
return G__9637__delegate.call(this,n,other,_);};
G__9637.cljs$lang$maxFixedArity = 2;
G__9637.cljs$lang$applyTo = (function (arglist__9645){
var n = cljs.core.first(arglist__9645);
arglist__9645 = cljs.core.next(arglist__9645);
var other = cljs.core.first(arglist__9645);
var _ = cljs.core.rest(arglist__9645);
return G__9637__delegate(n,other,_);
});
G__9637.cljs$core$IFn$_invoke$arity$variadic = G__9637__delegate;
return G__9637;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__9649__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__9649 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9654__i = 0, G__9654__a = new Array(arguments.length -  1);
while (G__9654__i < G__9654__a.length) {G__9654__a[G__9654__i] = arguments[G__9654__i + 1]; ++G__9654__i;}
  _ = new cljs.core.IndexedSeq(G__9654__a,0,null);
} 
return G__9649__delegate.call(this,c,_);};
G__9649.cljs$lang$maxFixedArity = 1;
G__9649.cljs$lang$applyTo = (function (arglist__9655){
var c = cljs.core.first(arglist__9655);
var _ = cljs.core.rest(arglist__9655);
return G__9649__delegate(c,_);
});
G__9649.cljs$core$IFn$_invoke$arity$variadic = G__9649__delegate;
return G__9649;
})()
,"item",(function() { 
var G__9656__delegate = function (c,_){
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
var G__9656 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9664__i = 0, G__9664__a = new Array(arguments.length -  1);
while (G__9664__i < G__9664__a.length) {G__9664__a[G__9664__i] = arguments[G__9664__i + 1]; ++G__9664__i;}
  _ = new cljs.core.IndexedSeq(G__9664__a,0,null);
} 
return G__9656__delegate.call(this,c,_);};
G__9656.cljs$lang$maxFixedArity = 1;
G__9656.cljs$lang$applyTo = (function (arglist__9669){
var c = cljs.core.first(arglist__9669);
var _ = cljs.core.rest(arglist__9669);
return G__9656__delegate(c,_);
});
G__9656.cljs$core$IFn$_invoke$arity$variadic = G__9656__delegate;
return G__9656;
})()
,"next",(function() { 
var G__9671__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__9671 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9681__i = 0, G__9681__a = new Array(arguments.length -  1);
while (G__9681__i < G__9681__a.length) {G__9681__a[G__9681__i] = arguments[G__9681__i + 1]; ++G__9681__i;}
  _ = new cljs.core.IndexedSeq(G__9681__a,0,null);
} 
return G__9671__delegate.call(this,c,_);};
G__9671.cljs$lang$maxFixedArity = 1;
G__9671.cljs$lang$applyTo = (function (arglist__9682){
var c = cljs.core.first(arglist__9682);
var _ = cljs.core.rest(arglist__9682);
return G__9671__delegate(c,_);
});
G__9671.cljs$core$IFn$_invoke$arity$variadic = G__9671__delegate;
return G__9671;
})()
,"at_end",(function() { 
var G__9687__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__9687 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9692__i = 0, G__9692__a = new Array(arguments.length -  1);
while (G__9692__i < G__9692__a.length) {G__9692__a[G__9692__i] = arguments[G__9692__i + 1]; ++G__9692__i;}
  _ = new cljs.core.IndexedSeq(G__9692__a,0,null);
} 
return G__9687__delegate.call(this,c,_);};
G__9687.cljs$lang$maxFixedArity = 1;
G__9687.cljs$lang$applyTo = (function (arglist__9693){
var c = cljs.core.first(arglist__9693);
var _ = cljs.core.rest(arglist__9693);
return G__9687__delegate(c,_);
});
G__9687.cljs$core$IFn$_invoke$arity$variadic = G__9687__delegate;
return G__9687;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__9694__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__9694 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9695__i = 0, G__9695__a = new Array(arguments.length -  2);
while (G__9695__i < G__9695__a.length) {G__9695__a[G__9695__i] = arguments[G__9695__i + 2]; ++G__9695__i;}
  _ = new cljs.core.IndexedSeq(G__9695__a,0,null);
} 
return G__9694__delegate.call(this,n,other,_);};
G__9694.cljs$lang$maxFixedArity = 2;
G__9694.cljs$lang$applyTo = (function (arglist__9696){
var n = cljs.core.first(arglist__9696);
arglist__9696 = cljs.core.next(arglist__9696);
var other = cljs.core.first(arglist__9696);
var _ = cljs.core.rest(arglist__9696);
return G__9694__delegate(n,other,_);
});
G__9694.cljs$core$IFn$_invoke$arity$variadic = G__9694__delegate;
return G__9694;
})()
,(function() { 
var G__9697__delegate = function (n,other,_){
return (n <= other);
};
var G__9697 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9698__i = 0, G__9698__a = new Array(arguments.length -  2);
while (G__9698__i < G__9698__a.length) {G__9698__a[G__9698__i] = arguments[G__9698__i + 2]; ++G__9698__i;}
  _ = new cljs.core.IndexedSeq(G__9698__a,0,null);
} 
return G__9697__delegate.call(this,n,other,_);};
G__9697.cljs$lang$maxFixedArity = 2;
G__9697.cljs$lang$applyTo = (function (arglist__9699){
var n = cljs.core.first(arglist__9699);
arglist__9699 = cljs.core.next(arglist__9699);
var other = cljs.core.first(arglist__9699);
var _ = cljs.core.rest(arglist__9699);
return G__9697__delegate(n,other,_);
});
G__9697.cljs$core$IFn$_invoke$arity$variadic = G__9697__delegate;
return G__9697;
})()
,(function() { 
var G__9700__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9700 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9704__i = 0, G__9704__a = new Array(arguments.length -  2);
while (G__9704__i < G__9704__a.length) {G__9704__a[G__9704__i] = arguments[G__9704__i + 2]; ++G__9704__i;}
  _ = new cljs.core.IndexedSeq(G__9704__a,0,null);
} 
return G__9700__delegate.call(this,n,other,_);};
G__9700.cljs$lang$maxFixedArity = 2;
G__9700.cljs$lang$applyTo = (function (arglist__9705){
var n = cljs.core.first(arglist__9705);
arglist__9705 = cljs.core.next(arglist__9705);
var other = cljs.core.first(arglist__9705);
var _ = cljs.core.rest(arglist__9705);
return G__9700__delegate(n,other,_);
});
G__9700.cljs$core$IFn$_invoke$arity$variadic = G__9700__delegate;
return G__9700;
})()
,(function() { 
var G__9710__delegate = function (n,other,_){
return (n < other);
};
var G__9710 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9712__i = 0, G__9712__a = new Array(arguments.length -  2);
while (G__9712__i < G__9712__a.length) {G__9712__a[G__9712__i] = arguments[G__9712__i + 2]; ++G__9712__i;}
  _ = new cljs.core.IndexedSeq(G__9712__a,0,null);
} 
return G__9710__delegate.call(this,n,other,_);};
G__9710.cljs$lang$maxFixedArity = 2;
G__9710.cljs$lang$applyTo = (function (arglist__9714){
var n = cljs.core.first(arglist__9714);
arglist__9714 = cljs.core.next(arglist__9714);
var other = cljs.core.first(arglist__9714);
var _ = cljs.core.rest(arglist__9714);
return G__9710__delegate(n,other,_);
});
G__9710.cljs$core$IFn$_invoke$arity$variadic = G__9710__delegate;
return G__9710;
})()
,(function() { 
var G__9720__delegate = function (n,other,_){
return (n + other);
};
var G__9720 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9724__i = 0, G__9724__a = new Array(arguments.length -  2);
while (G__9724__i < G__9724__a.length) {G__9724__a[G__9724__i] = arguments[G__9724__i + 2]; ++G__9724__i;}
  _ = new cljs.core.IndexedSeq(G__9724__a,0,null);
} 
return G__9720__delegate.call(this,n,other,_);};
G__9720.cljs$lang$maxFixedArity = 2;
G__9720.cljs$lang$applyTo = (function (arglist__9725){
var n = cljs.core.first(arglist__9725);
arglist__9725 = cljs.core.next(arglist__9725);
var other = cljs.core.first(arglist__9725);
var _ = cljs.core.rest(arglist__9725);
return G__9720__delegate(n,other,_);
});
G__9720.cljs$core$IFn$_invoke$arity$variadic = G__9720__delegate;
return G__9720;
})()
,(function() { 
var G__9726__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__9726 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9731__i = 0, G__9731__a = new Array(arguments.length -  1);
while (G__9731__i < G__9731__a.length) {G__9731__a[G__9731__i] = arguments[G__9731__i + 1]; ++G__9731__i;}
  _ = new cljs.core.IndexedSeq(G__9731__a,0,null);
} 
return G__9726__delegate.call(this,n,_);};
G__9726.cljs$lang$maxFixedArity = 1;
G__9726.cljs$lang$applyTo = (function (arglist__9732){
var n = cljs.core.first(arglist__9732);
var _ = cljs.core.rest(arglist__9732);
return G__9726__delegate(n,_);
});
G__9726.cljs$core$IFn$_invoke$arity$variadic = G__9726__delegate;
return G__9726;
})()
,(function() { 
var G__9737__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__9737 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9738__i = 0, G__9738__a = new Array(arguments.length -  1);
while (G__9738__i < G__9738__a.length) {G__9738__a[G__9738__i] = arguments[G__9738__i + 1]; ++G__9738__i;}
  _ = new cljs.core.IndexedSeq(G__9738__a,0,null);
} 
return G__9737__delegate.call(this,n,_);};
G__9737.cljs$lang$maxFixedArity = 1;
G__9737.cljs$lang$applyTo = (function (arglist__9739){
var n = cljs.core.first(arglist__9739);
var _ = cljs.core.rest(arglist__9739);
return G__9737__delegate(n,_);
});
G__9737.cljs$core$IFn$_invoke$arity$variadic = G__9737__delegate;
return G__9737;
})()
,(function() { 
var G__9740__delegate = function (n,other,_){
return (n > other);
};
var G__9740 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9741__i = 0, G__9741__a = new Array(arguments.length -  2);
while (G__9741__i < G__9741__a.length) {G__9741__a[G__9741__i] = arguments[G__9741__i + 2]; ++G__9741__i;}
  _ = new cljs.core.IndexedSeq(G__9741__a,0,null);
} 
return G__9740__delegate.call(this,n,other,_);};
G__9740.cljs$lang$maxFixedArity = 2;
G__9740.cljs$lang$applyTo = (function (arglist__9742){
var n = cljs.core.first(arglist__9742);
arglist__9742 = cljs.core.next(arglist__9742);
var other = cljs.core.first(arglist__9742);
var _ = cljs.core.rest(arglist__9742);
return G__9740__delegate(n,other,_);
});
G__9740.cljs$core$IFn$_invoke$arity$variadic = G__9740__delegate;
return G__9740;
})()
,(function() { 
var G__9743__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9743 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9744__i = 0, G__9744__a = new Array(arguments.length -  2);
while (G__9744__i < G__9744__a.length) {G__9744__a[G__9744__i] = arguments[G__9744__i + 2]; ++G__9744__i;}
  _ = new cljs.core.IndexedSeq(G__9744__a,0,null);
} 
return G__9743__delegate.call(this,n,other,_);};
G__9743.cljs$lang$maxFixedArity = 2;
G__9743.cljs$lang$applyTo = (function (arglist__9745){
var n = cljs.core.first(arglist__9745);
arglist__9745 = cljs.core.next(arglist__9745);
var other = cljs.core.first(arglist__9745);
var _ = cljs.core.rest(arglist__9745);
return G__9743__delegate(n,other,_);
});
G__9743.cljs$core$IFn$_invoke$arity$variadic = G__9743__delegate;
return G__9743;
})()
,(function() { 
var G__9749__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9749 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9750__i = 0, G__9750__a = new Array(arguments.length -  2);
while (G__9750__i < G__9750__a.length) {G__9750__a[G__9750__i] = arguments[G__9750__i + 2]; ++G__9750__i;}
  _ = new cljs.core.IndexedSeq(G__9750__a,0,null);
} 
return G__9749__delegate.call(this,n,other,_);};
G__9749.cljs$lang$maxFixedArity = 2;
G__9749.cljs$lang$applyTo = (function (arglist__9755){
var n = cljs.core.first(arglist__9755);
arglist__9755 = cljs.core.next(arglist__9755);
var other = cljs.core.first(arglist__9755);
var _ = cljs.core.rest(arglist__9755);
return G__9749__delegate(n,other,_);
});
G__9749.cljs$core$IFn$_invoke$arity$variadic = G__9749__delegate;
return G__9749;
})()
,(function() { 
var G__9757__delegate = function (n,other,_){
return (n - other);
};
var G__9757 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9760__i = 0, G__9760__a = new Array(arguments.length -  2);
while (G__9760__i < G__9760__a.length) {G__9760__a[G__9760__i] = arguments[G__9760__i + 2]; ++G__9760__i;}
  _ = new cljs.core.IndexedSeq(G__9760__a,0,null);
} 
return G__9757__delegate.call(this,n,other,_);};
G__9757.cljs$lang$maxFixedArity = 2;
G__9757.cljs$lang$applyTo = (function (arglist__9765){
var n = cljs.core.first(arglist__9765);
arglist__9765 = cljs.core.next(arglist__9765);
var other = cljs.core.first(arglist__9765);
var _ = cljs.core.rest(arglist__9765);
return G__9757__delegate(n,other,_);
});
G__9757.cljs$core$IFn$_invoke$arity$variadic = G__9757__delegate;
return G__9757;
})()
,(function() { 
var G__9766__delegate = function (n,other,_){
return (n * other);
};
var G__9766 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9770__i = 0, G__9770__a = new Array(arguments.length -  2);
while (G__9770__i < G__9770__a.length) {G__9770__a[G__9770__i] = arguments[G__9770__i + 2]; ++G__9770__i;}
  _ = new cljs.core.IndexedSeq(G__9770__a,0,null);
} 
return G__9766__delegate.call(this,n,other,_);};
G__9766.cljs$lang$maxFixedArity = 2;
G__9766.cljs$lang$applyTo = (function (arglist__9771){
var n = cljs.core.first(arglist__9771);
arglist__9771 = cljs.core.next(arglist__9771);
var other = cljs.core.first(arglist__9771);
var _ = cljs.core.rest(arglist__9771);
return G__9766__delegate(n,other,_);
});
G__9766.cljs$core$IFn$_invoke$arity$variadic = G__9766__delegate;
return G__9766;
})()
,(function() { 
var G__9776__delegate = function (n,other,_){
return (n / other);
};
var G__9776 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9781__i = 0, G__9781__a = new Array(arguments.length -  2);
while (G__9781__i < G__9781__a.length) {G__9781__a[G__9781__i] = arguments[G__9781__i + 2]; ++G__9781__i;}
  _ = new cljs.core.IndexedSeq(G__9781__a,0,null);
} 
return G__9776__delegate.call(this,n,other,_);};
G__9776.cljs$lang$maxFixedArity = 2;
G__9776.cljs$lang$applyTo = (function (arglist__9782){
var n = cljs.core.first(arglist__9782);
arglist__9782 = cljs.core.next(arglist__9782);
var other = cljs.core.first(arglist__9782);
var _ = cljs.core.rest(arglist__9782);
return G__9776__delegate(n,other,_);
});
G__9776.cljs$core$IFn$_invoke$arity$variadic = G__9776__delegate;
return G__9776;
})()
,(function() { 
var G__9783__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__9783 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9784__i = 0, G__9784__a = new Array(arguments.length -  1);
while (G__9784__i < G__9784__a.length) {G__9784__a[G__9784__i] = arguments[G__9784__i + 1]; ++G__9784__i;}
  _ = new cljs.core.IndexedSeq(G__9784__a,0,null);
} 
return G__9783__delegate.call(this,n,_);};
G__9783.cljs$lang$maxFixedArity = 1;
G__9783.cljs$lang$applyTo = (function (arglist__9785){
var n = cljs.core.first(arglist__9785);
var _ = cljs.core.rest(arglist__9785);
return G__9783__delegate(n,_);
});
G__9783.cljs$core$IFn$_invoke$arity$variadic = G__9783__delegate;
return G__9783;
})()
,(function() { 
var G__9787__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__9787 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9789__i = 0, G__9789__a = new Array(arguments.length -  1);
while (G__9789__i < G__9789__a.length) {G__9789__a[G__9789__i] = arguments[G__9789__i + 1]; ++G__9789__i;}
  _ = new cljs.core.IndexedSeq(G__9789__a,0,null);
} 
return G__9787__delegate.call(this,n,_);};
G__9787.cljs$lang$maxFixedArity = 1;
G__9787.cljs$lang$applyTo = (function (arglist__9790){
var n = cljs.core.first(arglist__9790);
var _ = cljs.core.rest(arglist__9790);
return G__9787__delegate(n,_);
});
G__9787.cljs$core$IFn$_invoke$arity$variadic = G__9787__delegate;
return G__9787;
})()
,(function() { 
var G__9791__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__9791 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9792__i = 0, G__9792__a = new Array(arguments.length -  2);
while (G__9792__i < G__9792__a.length) {G__9792__a[G__9792__i] = arguments[G__9792__i + 2]; ++G__9792__i;}
  _ = new cljs.core.IndexedSeq(G__9792__a,0,null);
} 
return G__9791__delegate.call(this,n,other,_);};
G__9791.cljs$lang$maxFixedArity = 2;
G__9791.cljs$lang$applyTo = (function (arglist__9793){
var n = cljs.core.first(arglist__9793);
arglist__9793 = cljs.core.next(arglist__9793);
var other = cljs.core.first(arglist__9793);
var _ = cljs.core.rest(arglist__9793);
return G__9791__delegate(n,other,_);
});
G__9791.cljs$core$IFn$_invoke$arity$variadic = G__9791__delegate;
return G__9791;
})()
,(function() { 
var G__9794__delegate = function (n,other,_){
return (n >= other);
};
var G__9794 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9795__i = 0, G__9795__a = new Array(arguments.length -  2);
while (G__9795__i < G__9795__a.length) {G__9795__a[G__9795__i] = arguments[G__9795__i + 2]; ++G__9795__i;}
  _ = new cljs.core.IndexedSeq(G__9795__a,0,null);
} 
return G__9794__delegate.call(this,n,other,_);};
G__9794.cljs$lang$maxFixedArity = 2;
G__9794.cljs$lang$applyTo = (function (arglist__9796){
var n = cljs.core.first(arglist__9796);
arglist__9796 = cljs.core.next(arglist__9796);
var other = cljs.core.first(arglist__9796);
var _ = cljs.core.rest(arglist__9796);
return G__9794__delegate(n,other,_);
});
G__9794.cljs$core$IFn$_invoke$arity$variadic = G__9794__delegate;
return G__9794;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["await",(function() { 
var G__9797__delegate = function (t,p__6653){
var vec__6654 = p__6653;
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6654,(0),null);
var result = (((!((timeout == null))))?nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$2(t,timeout):nex.interpreter.task_await.cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,nex.interpreter.task_timeout_signal)){
return null;
} else {
return result;
}
};
var G__9797 = function (t,var_args){
var p__6653 = null;
if (arguments.length > 1) {
var G__9798__i = 0, G__9798__a = new Array(arguments.length -  1);
while (G__9798__i < G__9798__a.length) {G__9798__a[G__9798__i] = arguments[G__9798__i + 1]; ++G__9798__i;}
  p__6653 = new cljs.core.IndexedSeq(G__9798__a,0,null);
} 
return G__9797__delegate.call(this,t,p__6653);};
G__9797.cljs$lang$maxFixedArity = 1;
G__9797.cljs$lang$applyTo = (function (arglist__9799){
var t = cljs.core.first(arglist__9799);
var p__6653 = cljs.core.rest(arglist__9799);
return G__9797__delegate(t,p__6653);
});
G__9797.cljs$core$IFn$_invoke$arity$variadic = G__9797__delegate;
return G__9797;
})()
,"cancel",(function() { 
var G__9800__delegate = function (t,_){
return nex.interpreter.task_cancel(t);
};
var G__9800 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9801__i = 0, G__9801__a = new Array(arguments.length -  1);
while (G__9801__i < G__9801__a.length) {G__9801__a[G__9801__i] = arguments[G__9801__i + 1]; ++G__9801__i;}
  _ = new cljs.core.IndexedSeq(G__9801__a,0,null);
} 
return G__9800__delegate.call(this,t,_);};
G__9800.cljs$lang$maxFixedArity = 1;
G__9800.cljs$lang$applyTo = (function (arglist__9802){
var t = cljs.core.first(arglist__9802);
var _ = cljs.core.rest(arglist__9802);
return G__9800__delegate(t,_);
});
G__9800.cljs$core$IFn$_invoke$arity$variadic = G__9800__delegate;
return G__9800;
})()
,"is_done",(function() { 
var G__9803__delegate = function (t,_){
return cljs.core.deref(new cljs.core.Keyword(null,"done?","done?",-1847001718).cljs$core$IFn$_invoke$arity$1(t));
};
var G__9803 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9804__i = 0, G__9804__a = new Array(arguments.length -  1);
while (G__9804__i < G__9804__a.length) {G__9804__a[G__9804__i] = arguments[G__9804__i + 1]; ++G__9804__i;}
  _ = new cljs.core.IndexedSeq(G__9804__a,0,null);
} 
return G__9803__delegate.call(this,t,_);};
G__9803.cljs$lang$maxFixedArity = 1;
G__9803.cljs$lang$applyTo = (function (arglist__9805){
var t = cljs.core.first(arglist__9805);
var _ = cljs.core.rest(arglist__9805);
return G__9803__delegate(t,_);
});
G__9803.cljs$core$IFn$_invoke$arity$variadic = G__9803__delegate;
return G__9803;
})()
,"is_cancelled",(function() { 
var G__9806__delegate = function (t,_){
return nex.interpreter.task_cancelled_QMARK_(t);
};
var G__9806 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9807__i = 0, G__9807__a = new Array(arguments.length -  1);
while (G__9807__i < G__9807__a.length) {G__9807__a[G__9807__i] = arguments[G__9807__i + 1]; ++G__9807__i;}
  _ = new cljs.core.IndexedSeq(G__9807__a,0,null);
} 
return G__9806__delegate.call(this,t,_);};
G__9806.cljs$lang$maxFixedArity = 1;
G__9806.cljs$lang$applyTo = (function (arglist__9808){
var t = cljs.core.first(arglist__9808);
var _ = cljs.core.rest(arglist__9808);
return G__9806__delegate(t,_);
});
G__9806.cljs$core$IFn$_invoke$arity$variadic = G__9806__delegate;
return G__9806;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__9809__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__9809 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9810__i = 0, G__9810__a = new Array(arguments.length -  1);
while (G__9810__i < G__9810__a.length) {G__9810__a[G__9810__i] = arguments[G__9810__i + 1]; ++G__9810__i;}
  _ = new cljs.core.IndexedSeq(G__9810__a,0,null);
} 
return G__9809__delegate.call(this,c,_);};
G__9809.cljs$lang$maxFixedArity = 1;
G__9809.cljs$lang$applyTo = (function (arglist__9811){
var c = cljs.core.first(arglist__9811);
var _ = cljs.core.rest(arglist__9811);
return G__9809__delegate(c,_);
});
G__9809.cljs$core$IFn$_invoke$arity$variadic = G__9809__delegate;
return G__9809;
})()
,"item",(function() { 
var G__9812__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__9812 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9813__i = 0, G__9813__a = new Array(arguments.length -  1);
while (G__9813__i < G__9813__a.length) {G__9813__a[G__9813__i] = arguments[G__9813__i + 1]; ++G__9813__i;}
  _ = new cljs.core.IndexedSeq(G__9813__a,0,null);
} 
return G__9812__delegate.call(this,c,_);};
G__9812.cljs$lang$maxFixedArity = 1;
G__9812.cljs$lang$applyTo = (function (arglist__9814){
var c = cljs.core.first(arglist__9814);
var _ = cljs.core.rest(arglist__9814);
return G__9812__delegate(c,_);
});
G__9812.cljs$core$IFn$_invoke$arity$variadic = G__9812__delegate;
return G__9812;
})()
,"next",(function() { 
var G__9815__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__9815 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9823__i = 0, G__9823__a = new Array(arguments.length -  1);
while (G__9823__i < G__9823__a.length) {G__9823__a[G__9823__i] = arguments[G__9823__i + 1]; ++G__9823__i;}
  _ = new cljs.core.IndexedSeq(G__9823__a,0,null);
} 
return G__9815__delegate.call(this,c,_);};
G__9815.cljs$lang$maxFixedArity = 1;
G__9815.cljs$lang$applyTo = (function (arglist__9825){
var c = cljs.core.first(arglist__9825);
var _ = cljs.core.rest(arglist__9825);
return G__9815__delegate(c,_);
});
G__9815.cljs$core$IFn$_invoke$arity$variadic = G__9815__delegate;
return G__9815;
})()
,"at_end",(function() { 
var G__9827__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__9827 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9833__i = 0, G__9833__a = new Array(arguments.length -  1);
while (G__9833__i < G__9833__a.length) {G__9833__a[G__9833__i] = arguments[G__9833__i + 1]; ++G__9833__i;}
  _ = new cljs.core.IndexedSeq(G__9833__a,0,null);
} 
return G__9827__delegate.call(this,c,_);};
G__9827.cljs$lang$maxFixedArity = 1;
G__9827.cljs$lang$applyTo = (function (arglist__9837){
var c = cljs.core.first(arglist__9837);
var _ = cljs.core.rest(arglist__9837);
return G__9827__delegate(c,_);
});
G__9827.cljs$core$IFn$_invoke$arity$variadic = G__9827__delegate;
return G__9827;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__9838__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print(nex.interpreter.nex_display_value(msg));

return null;
};
var G__9838 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__9847__i = 0, G__9847__a = new Array(arguments.length -  2);
while (G__9847__i < G__9847__a.length) {G__9847__a[G__9847__i] = arguments[G__9847__i + 2]; ++G__9847__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9847__a,0,null);
} 
return G__9838__delegate.call(this,_,msg,___$1);};
G__9838.cljs$lang$maxFixedArity = 2;
G__9838.cljs$lang$applyTo = (function (arglist__9848){
var _ = cljs.core.first(arglist__9848);
arglist__9848 = cljs.core.next(arglist__9848);
var msg = cljs.core.first(arglist__9848);
var ___$1 = cljs.core.rest(arglist__9848);
return G__9838__delegate(_,msg,___$1);
});
G__9838.cljs$core$IFn$_invoke$arity$variadic = G__9838__delegate;
return G__9838;
})()
,"print_line",(function() { 
var G__9849__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println(nex.interpreter.nex_display_value(msg));

return null;
};
var G__9849 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__9853__i = 0, G__9853__a = new Array(arguments.length -  2);
while (G__9853__i < G__9853__a.length) {G__9853__a[G__9853__i] = arguments[G__9853__i + 2]; ++G__9853__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9853__a,0,null);
} 
return G__9849__delegate.call(this,_,msg,___$1);};
G__9849.cljs$lang$maxFixedArity = 2;
G__9849.cljs$lang$applyTo = (function (arglist__9854){
var _ = cljs.core.first(arglist__9854);
arglist__9854 = cljs.core.next(arglist__9854);
var msg = cljs.core.first(arglist__9854);
var ___$1 = cljs.core.rest(arglist__9854);
return G__9849__delegate(_,msg,___$1);
});
G__9849.cljs$core$IFn$_invoke$arity$variadic = G__9849__delegate;
return G__9849;
})()
,"read_line",(function() { 
var G__9859__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__9859 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__9863__i = 0, G__9863__a = new Array(arguments.length -  1);
while (G__9863__i < G__9863__a.length) {G__9863__a[G__9863__i] = arguments[G__9863__i + 1]; ++G__9863__i;}
  args = new cljs.core.IndexedSeq(G__9863__a,0,null);
} 
return G__9859__delegate.call(this,_,args);};
G__9859.cljs$lang$maxFixedArity = 1;
G__9859.cljs$lang$applyTo = (function (arglist__9868){
var _ = cljs.core.first(arglist__9868);
var args = cljs.core.rest(arglist__9868);
return G__9859__delegate(_,args);
});
G__9859.cljs$core$IFn$_invoke$arity$variadic = G__9859__delegate;
return G__9859;
})()
,"error",(function() { 
var G__9872__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error(nex.interpreter.nex_display_value(msg));

return null;
};
var G__9872 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__9873__i = 0, G__9873__a = new Array(arguments.length -  2);
while (G__9873__i < G__9873__a.length) {G__9873__a[G__9873__i] = arguments[G__9873__i + 2]; ++G__9873__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9873__a,0,null);
} 
return G__9872__delegate.call(this,_,msg,___$1);};
G__9872.cljs$lang$maxFixedArity = 2;
G__9872.cljs$lang$applyTo = (function (arglist__9878){
var _ = cljs.core.first(arglist__9878);
arglist__9878 = cljs.core.next(arglist__9878);
var msg = cljs.core.first(arglist__9878);
var ___$1 = cljs.core.rest(arglist__9878);
return G__9872__delegate(_,msg,___$1);
});
G__9872.cljs$core$IFn$_invoke$arity$variadic = G__9872__delegate;
return G__9872;
})()
,"new_line",(function() { 
var G__9883__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__9883 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__9884__i = 0, G__9884__a = new Array(arguments.length -  1);
while (G__9884__i < G__9884__a.length) {G__9884__a[G__9884__i] = arguments[G__9884__i + 1]; ++G__9884__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9884__a,0,null);
} 
return G__9883__delegate.call(this,_,___$1);};
G__9883.cljs$lang$maxFixedArity = 1;
G__9883.cljs$lang$applyTo = (function (arglist__9885){
var _ = cljs.core.first(arglist__9885);
var ___$1 = cljs.core.rest(arglist__9885);
return G__9883__delegate(_,___$1);
});
G__9883.cljs$core$IFn$_invoke$arity$variadic = G__9883__delegate;
return G__9883;
})()
,"read_integer",(function() { 
var G__9886__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__9886 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__9887__i = 0, G__9887__a = new Array(arguments.length -  1);
while (G__9887__i < G__9887__a.length) {G__9887__a[G__9887__i] = arguments[G__9887__i + 1]; ++G__9887__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9887__a,0,null);
} 
return G__9886__delegate.call(this,_,___$1);};
G__9886.cljs$lang$maxFixedArity = 1;
G__9886.cljs$lang$applyTo = (function (arglist__9888){
var _ = cljs.core.first(arglist__9888);
var ___$1 = cljs.core.rest(arglist__9888);
return G__9886__delegate(_,___$1);
});
G__9886.cljs$core$IFn$_invoke$arity$variadic = G__9886__delegate;
return G__9886;
})()
,"read_real",(function() { 
var G__9889__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__9889 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__9890__i = 0, G__9890__a = new Array(arguments.length -  1);
while (G__9890__i < G__9890__a.length) {G__9890__a[G__9890__i] = arguments[G__9890__i + 1]; ++G__9890__i;}
  ___$1 = new cljs.core.IndexedSeq(G__9890__a,0,null);
} 
return G__9889__delegate.call(this,_,___$1);};
G__9889.cljs$lang$maxFixedArity = 1;
G__9889.cljs$lang$applyTo = (function (arglist__9891){
var _ = cljs.core.first(arglist__9891);
var ___$1 = cljs.core.rest(arglist__9891);
return G__9889__delegate(_,___$1);
});
G__9889.cljs$core$IFn$_invoke$arity$variadic = G__9889__delegate;
return G__9889;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__9892__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__9892 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__9893__i = 0, G__9893__a = new Array(arguments.length -  4);
while (G__9893__i < G__9893__a.length) {G__9893__a[G__9893__i] = arguments[G__9893__i + 4]; ++G__9893__i;}
  _ = new cljs.core.IndexedSeq(G__9893__a,0,null);
} 
return G__9892__delegate.call(this,w,text,x,y,_);};
G__9892.cljs$lang$maxFixedArity = 4;
G__9892.cljs$lang$applyTo = (function (arglist__9894){
var w = cljs.core.first(arglist__9894);
arglist__9894 = cljs.core.next(arglist__9894);
var text = cljs.core.first(arglist__9894);
arglist__9894 = cljs.core.next(arglist__9894);
var x = cljs.core.first(arglist__9894);
arglist__9894 = cljs.core.next(arglist__9894);
var y = cljs.core.first(arglist__9894);
var _ = cljs.core.rest(arglist__9894);
return G__9892__delegate(w,text,x,y,_);
});
G__9892.cljs$core$IFn$_invoke$arity$variadic = G__9892__delegate;
return G__9892;
})()
,(function() { 
var G__9895__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__9895 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9896__i = 0, G__9896__a = new Array(arguments.length -  1);
while (G__9896__i < G__9896__a.length) {G__9896__a[G__9896__i] = arguments[G__9896__i + 1]; ++G__9896__i;}
  _ = new cljs.core.IndexedSeq(G__9896__a,0,null);
} 
return G__9895__delegate.call(this,w,_);};
G__9895.cljs$lang$maxFixedArity = 1;
G__9895.cljs$lang$applyTo = (function (arglist__9897){
var w = cljs.core.first(arglist__9897);
var _ = cljs.core.rest(arglist__9897);
return G__9895__delegate(w,_);
});
G__9895.cljs$core$IFn$_invoke$arity$variadic = G__9895__delegate;
return G__9895;
})()
,(function() { 
var G__9898__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__9898 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9902__i = 0, G__9902__a = new Array(arguments.length -  2);
while (G__9902__i < G__9902__a.length) {G__9902__a[G__9902__i] = arguments[G__9902__i + 2]; ++G__9902__i;}
  _ = new cljs.core.IndexedSeq(G__9902__a,0,null);
} 
return G__9898__delegate.call(this,w,size,_);};
G__9898.cljs$lang$maxFixedArity = 2;
G__9898.cljs$lang$applyTo = (function (arglist__9903){
var w = cljs.core.first(arglist__9903);
arglist__9903 = cljs.core.next(arglist__9903);
var size = cljs.core.first(arglist__9903);
var _ = cljs.core.rest(arglist__9903);
return G__9898__delegate(w,size,_);
});
G__9898.cljs$core$IFn$_invoke$arity$variadic = G__9898__delegate;
return G__9898;
})()
,(function() { 
var G__9904__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__9904 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__9916__i = 0, G__9916__a = new Array(arguments.length -  6);
while (G__9916__i < G__9916__a.length) {G__9916__a[G__9916__i] = arguments[G__9916__i + 6]; ++G__9916__i;}
  _ = new cljs.core.IndexedSeq(G__9916__a,0,null);
} 
return G__9904__delegate.call(this,w,img,x,y,width,height,_);};
G__9904.cljs$lang$maxFixedArity = 6;
G__9904.cljs$lang$applyTo = (function (arglist__9920){
var w = cljs.core.first(arglist__9920);
arglist__9920 = cljs.core.next(arglist__9920);
var img = cljs.core.first(arglist__9920);
arglist__9920 = cljs.core.next(arglist__9920);
var x = cljs.core.first(arglist__9920);
arglist__9920 = cljs.core.next(arglist__9920);
var y = cljs.core.first(arglist__9920);
arglist__9920 = cljs.core.next(arglist__9920);
var width = cljs.core.first(arglist__9920);
arglist__9920 = cljs.core.next(arglist__9920);
var height = cljs.core.first(arglist__9920);
var _ = cljs.core.rest(arglist__9920);
return G__9904__delegate(w,img,x,y,width,height,_);
});
G__9904.cljs$core$IFn$_invoke$arity$variadic = G__9904__delegate;
return G__9904;
})()
,(function() { 
var G__9925__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__9925 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9926__i = 0, G__9926__a = new Array(arguments.length -  1);
while (G__9926__i < G__9926__a.length) {G__9926__a[G__9926__i] = arguments[G__9926__i + 1]; ++G__9926__i;}
  _ = new cljs.core.IndexedSeq(G__9926__a,0,null);
} 
return G__9925__delegate.call(this,w,_);};
G__9925.cljs$lang$maxFixedArity = 1;
G__9925.cljs$lang$applyTo = (function (arglist__9927){
var w = cljs.core.first(arglist__9927);
var _ = cljs.core.rest(arglist__9927);
return G__9925__delegate(w,_);
});
G__9925.cljs$core$IFn$_invoke$arity$variadic = G__9925__delegate;
return G__9925;
})()
,(function() { 
var G__9933__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__9933 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__9934__i = 0, G__9934__a = new Array(arguments.length -  4);
while (G__9934__i < G__9934__a.length) {G__9934__a[G__9934__i] = arguments[G__9934__i + 4]; ++G__9934__i;}
  _ = new cljs.core.IndexedSeq(G__9934__a,0,null);
} 
return G__9933__delegate.call(this,w,img,x,y,_);};
G__9933.cljs$lang$maxFixedArity = 4;
G__9933.cljs$lang$applyTo = (function (arglist__9935){
var w = cljs.core.first(arglist__9935);
arglist__9935 = cljs.core.next(arglist__9935);
var img = cljs.core.first(arglist__9935);
arglist__9935 = cljs.core.next(arglist__9935);
var x = cljs.core.first(arglist__9935);
arglist__9935 = cljs.core.next(arglist__9935);
var y = cljs.core.first(arglist__9935);
var _ = cljs.core.rest(arglist__9935);
return G__9933__delegate(w,img,x,y,_);
});
G__9933.cljs$core$IFn$_invoke$arity$variadic = G__9933__delegate;
return G__9933;
})()
,(function() { 
var G__9936__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__9936 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9937__i = 0, G__9937__a = new Array(arguments.length -  2);
while (G__9937__i < G__9937__a.length) {G__9937__a[G__9937__i] = arguments[G__9937__i + 2]; ++G__9937__i;}
  _ = new cljs.core.IndexedSeq(G__9937__a,0,null);
} 
return G__9936__delegate.call(this,w,ms,_);};
G__9936.cljs$lang$maxFixedArity = 2;
G__9936.cljs$lang$applyTo = (function (arglist__9938){
var w = cljs.core.first(arglist__9938);
arglist__9938 = cljs.core.next(arglist__9938);
var ms = cljs.core.first(arglist__9938);
var _ = cljs.core.rest(arglist__9938);
return G__9936__delegate(w,ms,_);
});
G__9936.cljs$core$IFn$_invoke$arity$variadic = G__9936__delegate;
return G__9936;
})()
,(function() { 
var G__9939__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__9939 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__9940__i = 0, G__9940__a = new Array(arguments.length -  5);
while (G__9940__i < G__9940__a.length) {G__9940__a[G__9940__i] = arguments[G__9940__i + 5]; ++G__9940__i;}
  _ = new cljs.core.IndexedSeq(G__9940__a,0,null);
} 
return G__9939__delegate.call(this,w,x1,y1,x2,y2,_);};
G__9939.cljs$lang$maxFixedArity = 5;
G__9939.cljs$lang$applyTo = (function (arglist__9941){
var w = cljs.core.first(arglist__9941);
arglist__9941 = cljs.core.next(arglist__9941);
var x1 = cljs.core.first(arglist__9941);
arglist__9941 = cljs.core.next(arglist__9941);
var y1 = cljs.core.first(arglist__9941);
arglist__9941 = cljs.core.next(arglist__9941);
var x2 = cljs.core.first(arglist__9941);
arglist__9941 = cljs.core.next(arglist__9941);
var y2 = cljs.core.first(arglist__9941);
var _ = cljs.core.rest(arglist__9941);
return G__9939__delegate(w,x1,y1,x2,y2,_);
});
G__9939.cljs$core$IFn$_invoke$arity$variadic = G__9939__delegate;
return G__9939;
})()
,(function() { 
var G__9942__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__9942 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9943__i = 0, G__9943__a = new Array(arguments.length -  1);
while (G__9943__i < G__9943__a.length) {G__9943__a[G__9943__i] = arguments[G__9943__i + 1]; ++G__9943__i;}
  _ = new cljs.core.IndexedSeq(G__9943__a,0,null);
} 
return G__9942__delegate.call(this,w,_);};
G__9942.cljs$lang$maxFixedArity = 1;
G__9942.cljs$lang$applyTo = (function (arglist__9944){
var w = cljs.core.first(arglist__9944);
var _ = cljs.core.rest(arglist__9944);
return G__9942__delegate(w,_);
});
G__9942.cljs$core$IFn$_invoke$arity$variadic = G__9942__delegate;
return G__9942;
})()
,(function() { 
var G__9945__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__9945 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__9946__i = 0, G__9946__a = new Array(arguments.length -  4);
while (G__9946__i < G__9946__a.length) {G__9946__a[G__9946__i] = arguments[G__9946__i + 4]; ++G__9946__i;}
  _ = new cljs.core.IndexedSeq(G__9946__a,0,null);
} 
return G__9945__delegate.call(this,w,x,y,r,_);};
G__9945.cljs$lang$maxFixedArity = 4;
G__9945.cljs$lang$applyTo = (function (arglist__9947){
var w = cljs.core.first(arglist__9947);
arglist__9947 = cljs.core.next(arglist__9947);
var x = cljs.core.first(arglist__9947);
arglist__9947 = cljs.core.next(arglist__9947);
var y = cljs.core.first(arglist__9947);
arglist__9947 = cljs.core.next(arglist__9947);
var r = cljs.core.first(arglist__9947);
var _ = cljs.core.rest(arglist__9947);
return G__9945__delegate(w,x,y,r,_);
});
G__9945.cljs$core$IFn$_invoke$arity$variadic = G__9945__delegate;
return G__9945;
})()
,(function() { 
var G__9948__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__9948 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__9952__i = 0, G__9952__a = new Array(arguments.length -  5);
while (G__9952__i < G__9952__a.length) {G__9952__a[G__9952__i] = arguments[G__9952__i + 5]; ++G__9952__i;}
  _ = new cljs.core.IndexedSeq(G__9952__a,0,null);
} 
return G__9948__delegate.call(this,w,x,y,width,height,_);};
G__9948.cljs$lang$maxFixedArity = 5;
G__9948.cljs$lang$applyTo = (function (arglist__9953){
var w = cljs.core.first(arglist__9953);
arglist__9953 = cljs.core.next(arglist__9953);
var x = cljs.core.first(arglist__9953);
arglist__9953 = cljs.core.next(arglist__9953);
var y = cljs.core.first(arglist__9953);
arglist__9953 = cljs.core.next(arglist__9953);
var width = cljs.core.first(arglist__9953);
arglist__9953 = cljs.core.next(arglist__9953);
var height = cljs.core.first(arglist__9953);
var _ = cljs.core.rest(arglist__9953);
return G__9948__delegate(w,x,y,width,height,_);
});
G__9948.cljs$core$IFn$_invoke$arity$variadic = G__9948__delegate;
return G__9948;
})()
,(function() { 
var G__9958__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__9958 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__9962__i = 0, G__9962__a = new Array(arguments.length -  5);
while (G__9962__i < G__9962__a.length) {G__9962__a[G__9962__i] = arguments[G__9962__i + 5]; ++G__9962__i;}
  _ = new cljs.core.IndexedSeq(G__9962__a,0,null);
} 
return G__9958__delegate.call(this,w,img,x,y,angle,_);};
G__9958.cljs$lang$maxFixedArity = 5;
G__9958.cljs$lang$applyTo = (function (arglist__9967){
var w = cljs.core.first(arglist__9967);
arglist__9967 = cljs.core.next(arglist__9967);
var img = cljs.core.first(arglist__9967);
arglist__9967 = cljs.core.next(arglist__9967);
var x = cljs.core.first(arglist__9967);
arglist__9967 = cljs.core.next(arglist__9967);
var y = cljs.core.first(arglist__9967);
arglist__9967 = cljs.core.next(arglist__9967);
var angle = cljs.core.first(arglist__9967);
var _ = cljs.core.rest(arglist__9967);
return G__9958__delegate(w,img,x,y,angle,_);
});
G__9958.cljs$core$IFn$_invoke$arity$variadic = G__9958__delegate;
return G__9958;
})()
,(function() { 
var G__9971__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__9971 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9976__i = 0, G__9976__a = new Array(arguments.length -  2);
while (G__9976__i < G__9976__a.length) {G__9976__a[G__9976__i] = arguments[G__9976__i + 2]; ++G__9976__i;}
  _ = new cljs.core.IndexedSeq(G__9976__a,0,null);
} 
return G__9971__delegate.call(this,w,color,_);};
G__9971.cljs$lang$maxFixedArity = 2;
G__9971.cljs$lang$applyTo = (function (arglist__9977){
var w = cljs.core.first(arglist__9977);
arglist__9977 = cljs.core.next(arglist__9977);
var color = cljs.core.first(arglist__9977);
var _ = cljs.core.rest(arglist__9977);
return G__9971__delegate(w,color,_);
});
G__9971.cljs$core$IFn$_invoke$arity$variadic = G__9971__delegate;
return G__9971;
})()
,(function() { 
var G__9978__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__9978 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__9983__i = 0, G__9983__a = new Array(arguments.length -  5);
while (G__9983__i < G__9983__a.length) {G__9983__a[G__9983__i] = arguments[G__9983__i + 5]; ++G__9983__i;}
  _ = new cljs.core.IndexedSeq(G__9983__a,0,null);
} 
return G__9978__delegate.call(this,w,x,y,width,height,_);};
G__9978.cljs$lang$maxFixedArity = 5;
G__9978.cljs$lang$applyTo = (function (arglist__9985){
var w = cljs.core.first(arglist__9985);
arglist__9985 = cljs.core.next(arglist__9985);
var x = cljs.core.first(arglist__9985);
arglist__9985 = cljs.core.next(arglist__9985);
var y = cljs.core.first(arglist__9985);
arglist__9985 = cljs.core.next(arglist__9985);
var width = cljs.core.first(arglist__9985);
arglist__9985 = cljs.core.next(arglist__9985);
var height = cljs.core.first(arglist__9985);
var _ = cljs.core.rest(arglist__9985);
return G__9978__delegate(w,x,y,width,height,_);
});
G__9978.cljs$core$IFn$_invoke$arity$variadic = G__9978__delegate;
return G__9978;
})()
,(function() { 
var G__9986__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__9986 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9987__i = 0, G__9987__a = new Array(arguments.length -  1);
while (G__9987__i < G__9987__a.length) {G__9987__a[G__9987__i] = arguments[G__9987__i + 1]; ++G__9987__i;}
  _ = new cljs.core.IndexedSeq(G__9987__a,0,null);
} 
return G__9986__delegate.call(this,w,_);};
G__9986.cljs$lang$maxFixedArity = 1;
G__9986.cljs$lang$applyTo = (function (arglist__9988){
var w = cljs.core.first(arglist__9988);
var _ = cljs.core.rest(arglist__9988);
return G__9986__delegate(w,_);
});
G__9986.cljs$core$IFn$_invoke$arity$variadic = G__9986__delegate;
return G__9986;
})()
,(function() { 
var G__9989__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__9989 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__9990__i = 0, G__9990__a = new Array(arguments.length -  4);
while (G__9990__i < G__9990__a.length) {G__9990__a[G__9990__i] = arguments[G__9990__i + 4]; ++G__9990__i;}
  _ = new cljs.core.IndexedSeq(G__9990__a,0,null);
} 
return G__9989__delegate.call(this,w,x,y,r,_);};
G__9989.cljs$lang$maxFixedArity = 4;
G__9989.cljs$lang$applyTo = (function (arglist__9991){
var w = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var x = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var y = cljs.core.first(arglist__9991);
arglist__9991 = cljs.core.next(arglist__9991);
var r = cljs.core.first(arglist__9991);
var _ = cljs.core.rest(arglist__9991);
return G__9989__delegate(w,x,y,r,_);
});
G__9989.cljs$core$IFn$_invoke$arity$variadic = G__9989__delegate;
return G__9989;
})()
,(function() { 
var G__9992__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__9992 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__9993__i = 0, G__9993__a = new Array(arguments.length -  2);
while (G__9993__i < G__9993__a.length) {G__9993__a[G__9993__i] = arguments[G__9993__i + 2]; ++G__9993__i;}
  _ = new cljs.core.IndexedSeq(G__9993__a,0,null);
} 
return G__9992__delegate.call(this,w,color,_);};
G__9992.cljs$lang$maxFixedArity = 2;
G__9992.cljs$lang$applyTo = (function (arglist__9994){
var w = cljs.core.first(arglist__9994);
arglist__9994 = cljs.core.next(arglist__9994);
var color = cljs.core.first(arglist__9994);
var _ = cljs.core.rest(arglist__9994);
return G__9992__delegate(w,color,_);
});
G__9992.cljs$core$IFn$_invoke$arity$variadic = G__9992__delegate;
return G__9992;
})()
,(function() { 
var G__9995__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__9995 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__9999__i = 0, G__9999__a = new Array(arguments.length -  1);
while (G__9999__i < G__9999__a.length) {G__9999__a[G__9999__i] = arguments[G__9999__i + 1]; ++G__9999__i;}
  _ = new cljs.core.IndexedSeq(G__9999__a,0,null);
} 
return G__9995__delegate.call(this,w,_);};
G__9995.cljs$lang$maxFixedArity = 1;
G__9995.cljs$lang$applyTo = (function (arglist__10000){
var w = cljs.core.first(arglist__10000);
var _ = cljs.core.rest(arglist__10000);
return G__9995__delegate(w,_);
});
G__9995.cljs$core$IFn$_invoke$arity$variadic = G__9995__delegate;
return G__9995;
})()
,(function() { 
var G__10001__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__10001 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10006__i = 0, G__10006__a = new Array(arguments.length -  1);
while (G__10006__i < G__10006__a.length) {G__10006__a[G__10006__i] = arguments[G__10006__i + 1]; ++G__10006__i;}
  _ = new cljs.core.IndexedSeq(G__10006__a,0,null);
} 
return G__10001__delegate.call(this,w,_);};
G__10001.cljs$lang$maxFixedArity = 1;
G__10001.cljs$lang$applyTo = (function (arglist__10008){
var w = cljs.core.first(arglist__10008);
var _ = cljs.core.rest(arglist__10008);
return G__10001__delegate(w,_);
});
G__10001.cljs$core$IFn$_invoke$arity$variadic = G__10001__delegate;
return G__10001;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__10010__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__10010 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__10019__i = 0, G__10019__a = new Array(arguments.length -  2);
while (G__10019__i < G__10019__a.length) {G__10019__a[G__10019__i] = arguments[G__10019__i + 2]; ++G__10019__i;}
  ___$1 = new cljs.core.IndexedSeq(G__10019__a,0,null);
} 
return G__10010__delegate.call(this,_,name,___$1);};
G__10010.cljs$lang$maxFixedArity = 2;
G__10010.cljs$lang$applyTo = (function (arglist__10020){
var _ = cljs.core.first(arglist__10020);
arglist__10020 = cljs.core.next(arglist__10020);
var name = cljs.core.first(arglist__10020);
var ___$1 = cljs.core.rest(arglist__10020);
return G__10010__delegate(_,name,___$1);
});
G__10010.cljs$core$IFn$_invoke$arity$variadic = G__10010__delegate;
return G__10010;
})()
,"setenv",(function() { 
var G__10021__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__10021 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__10026__i = 0, G__10026__a = new Array(arguments.length -  3);
while (G__10026__i < G__10026__a.length) {G__10026__a[G__10026__i] = arguments[G__10026__i + 3]; ++G__10026__i;}
  ___$1 = new cljs.core.IndexedSeq(G__10026__a,0,null);
} 
return G__10021__delegate.call(this,_,name,value,___$1);};
G__10021.cljs$lang$maxFixedArity = 3;
G__10021.cljs$lang$applyTo = (function (arglist__10027){
var _ = cljs.core.first(arglist__10027);
arglist__10027 = cljs.core.next(arglist__10027);
var name = cljs.core.first(arglist__10027);
arglist__10027 = cljs.core.next(arglist__10027);
var value = cljs.core.first(arglist__10027);
var ___$1 = cljs.core.rest(arglist__10027);
return G__10021__delegate(_,name,value,___$1);
});
G__10021.cljs$core$IFn$_invoke$arity$variadic = G__10021__delegate;
return G__10021;
})()
,"command_line",(function() { 
var G__10028__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__10028 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__10033__i = 0, G__10033__a = new Array(arguments.length -  1);
while (G__10033__i < G__10033__a.length) {G__10033__a[G__10033__i] = arguments[G__10033__i + 1]; ++G__10033__i;}
  ___$1 = new cljs.core.IndexedSeq(G__10033__a,0,null);
} 
return G__10028__delegate.call(this,_,___$1);};
G__10028.cljs$lang$maxFixedArity = 1;
G__10028.cljs$lang$applyTo = (function (arglist__10034){
var _ = cljs.core.first(arglist__10034);
var ___$1 = cljs.core.rest(arglist__10034);
return G__10028__delegate(_,___$1);
});
G__10028.cljs$core$IFn$_invoke$arity$variadic = G__10028__delegate;
return G__10028;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__10035__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__10035 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10036__i = 0, G__10036__a = new Array(arguments.length -  1);
while (G__10036__i < G__10036__a.length) {G__10036__a[G__10036__i] = arguments[G__10036__i + 1]; ++G__10036__i;}
  _ = new cljs.core.IndexedSeq(G__10036__a,0,null);
} 
return G__10035__delegate.call(this,c,_);};
G__10035.cljs$lang$maxFixedArity = 1;
G__10035.cljs$lang$applyTo = (function (arglist__10037){
var c = cljs.core.first(arglist__10037);
var _ = cljs.core.rest(arglist__10037);
return G__10035__delegate(c,_);
});
G__10035.cljs$core$IFn$_invoke$arity$variadic = G__10035__delegate;
return G__10035;
})()
,"to_upper",(function() { 
var G__10038__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__10038 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10039__i = 0, G__10039__a = new Array(arguments.length -  1);
while (G__10039__i < G__10039__a.length) {G__10039__a[G__10039__i] = arguments[G__10039__i + 1]; ++G__10039__i;}
  _ = new cljs.core.IndexedSeq(G__10039__a,0,null);
} 
return G__10038__delegate.call(this,c,_);};
G__10038.cljs$lang$maxFixedArity = 1;
G__10038.cljs$lang$applyTo = (function (arglist__10040){
var c = cljs.core.first(arglist__10040);
var _ = cljs.core.rest(arglist__10040);
return G__10038__delegate(c,_);
});
G__10038.cljs$core$IFn$_invoke$arity$variadic = G__10038__delegate;
return G__10038;
})()
,"to_lower",(function() { 
var G__10041__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__10041 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10042__i = 0, G__10042__a = new Array(arguments.length -  1);
while (G__10042__i < G__10042__a.length) {G__10042__a[G__10042__i] = arguments[G__10042__i + 1]; ++G__10042__i;}
  _ = new cljs.core.IndexedSeq(G__10042__a,0,null);
} 
return G__10041__delegate.call(this,c,_);};
G__10041.cljs$lang$maxFixedArity = 1;
G__10041.cljs$lang$applyTo = (function (arglist__10043){
var c = cljs.core.first(arglist__10043);
var _ = cljs.core.rest(arglist__10043);
return G__10041__delegate(c,_);
});
G__10041.cljs$core$IFn$_invoke$arity$variadic = G__10041__delegate;
return G__10041;
})()
,"compare",(function() { 
var G__10044__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__10044 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10045__i = 0, G__10045__a = new Array(arguments.length -  2);
while (G__10045__i < G__10045__a.length) {G__10045__a[G__10045__i] = arguments[G__10045__i + 2]; ++G__10045__i;}
  _ = new cljs.core.IndexedSeq(G__10045__a,0,null);
} 
return G__10044__delegate.call(this,c,other,_);};
G__10044.cljs$lang$maxFixedArity = 2;
G__10044.cljs$lang$applyTo = (function (arglist__10046){
var c = cljs.core.first(arglist__10046);
arglist__10046 = cljs.core.next(arglist__10046);
var other = cljs.core.first(arglist__10046);
var _ = cljs.core.rest(arglist__10046);
return G__10044__delegate(c,other,_);
});
G__10044.cljs$core$IFn$_invoke$arity$variadic = G__10044__delegate;
return G__10044;
})()
,"hash",(function() { 
var G__10047__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__10047 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10048__i = 0, G__10048__a = new Array(arguments.length -  1);
while (G__10048__i < G__10048__a.length) {G__10048__a[G__10048__i] = arguments[G__10048__i + 1]; ++G__10048__i;}
  _ = new cljs.core.IndexedSeq(G__10048__a,0,null);
} 
return G__10047__delegate.call(this,c,_);};
G__10047.cljs$lang$maxFixedArity = 1;
G__10047.cljs$lang$applyTo = (function (arglist__10049){
var c = cljs.core.first(arglist__10049);
var _ = cljs.core.rest(arglist__10049);
return G__10047__delegate(c,_);
});
G__10047.cljs$core$IFn$_invoke$arity$variadic = G__10047__delegate;
return G__10047;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__10053__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__10053 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10058__i = 0, G__10058__a = new Array(arguments.length -  2);
while (G__10058__i < G__10058__a.length) {G__10058__a[G__10058__i] = arguments[G__10058__i + 2]; ++G__10058__i;}
  _ = new cljs.core.IndexedSeq(G__10058__a,0,null);
} 
return G__10053__delegate.call(this,n,other,_);};
G__10053.cljs$lang$maxFixedArity = 2;
G__10053.cljs$lang$applyTo = (function (arglist__10060){
var n = cljs.core.first(arglist__10060);
arglist__10060 = cljs.core.next(arglist__10060);
var other = cljs.core.first(arglist__10060);
var _ = cljs.core.rest(arglist__10060);
return G__10053__delegate(n,other,_);
});
G__10053.cljs$core$IFn$_invoke$arity$variadic = G__10053__delegate;
return G__10053;
})()
,(function() { 
var G__10062__delegate = function (n,other,_){
return (n <= other);
};
var G__10062 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10064__i = 0, G__10064__a = new Array(arguments.length -  2);
while (G__10064__i < G__10064__a.length) {G__10064__a[G__10064__i] = arguments[G__10064__i + 2]; ++G__10064__i;}
  _ = new cljs.core.IndexedSeq(G__10064__a,0,null);
} 
return G__10062__delegate.call(this,n,other,_);};
G__10062.cljs$lang$maxFixedArity = 2;
G__10062.cljs$lang$applyTo = (function (arglist__10069){
var n = cljs.core.first(arglist__10069);
arglist__10069 = cljs.core.next(arglist__10069);
var other = cljs.core.first(arglist__10069);
var _ = cljs.core.rest(arglist__10069);
return G__10062__delegate(n,other,_);
});
G__10062.cljs$core$IFn$_invoke$arity$variadic = G__10062__delegate;
return G__10062;
})()
,(function() { 
var G__10070__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__10070 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10074__i = 0, G__10074__a = new Array(arguments.length -  2);
while (G__10074__i < G__10074__a.length) {G__10074__a[G__10074__i] = arguments[G__10074__i + 2]; ++G__10074__i;}
  _ = new cljs.core.IndexedSeq(G__10074__a,0,null);
} 
return G__10070__delegate.call(this,n,other,_);};
G__10070.cljs$lang$maxFixedArity = 2;
G__10070.cljs$lang$applyTo = (function (arglist__10075){
var n = cljs.core.first(arglist__10075);
arglist__10075 = cljs.core.next(arglist__10075);
var other = cljs.core.first(arglist__10075);
var _ = cljs.core.rest(arglist__10075);
return G__10070__delegate(n,other,_);
});
G__10070.cljs$core$IFn$_invoke$arity$variadic = G__10070__delegate;
return G__10070;
})()
,(function() { 
var G__10076__delegate = function (n,other,_){
return (n < other);
};
var G__10076 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10077__i = 0, G__10077__a = new Array(arguments.length -  2);
while (G__10077__i < G__10077__a.length) {G__10077__a[G__10077__i] = arguments[G__10077__i + 2]; ++G__10077__i;}
  _ = new cljs.core.IndexedSeq(G__10077__a,0,null);
} 
return G__10076__delegate.call(this,n,other,_);};
G__10076.cljs$lang$maxFixedArity = 2;
G__10076.cljs$lang$applyTo = (function (arglist__10082){
var n = cljs.core.first(arglist__10082);
arglist__10082 = cljs.core.next(arglist__10082);
var other = cljs.core.first(arglist__10082);
var _ = cljs.core.rest(arglist__10082);
return G__10076__delegate(n,other,_);
});
G__10076.cljs$core$IFn$_invoke$arity$variadic = G__10076__delegate;
return G__10076;
})()
,(function() { 
var G__10083__delegate = function (n,other,_){
return (n + other);
};
var G__10083 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10084__i = 0, G__10084__a = new Array(arguments.length -  2);
while (G__10084__i < G__10084__a.length) {G__10084__a[G__10084__i] = arguments[G__10084__i + 2]; ++G__10084__i;}
  _ = new cljs.core.IndexedSeq(G__10084__a,0,null);
} 
return G__10083__delegate.call(this,n,other,_);};
G__10083.cljs$lang$maxFixedArity = 2;
G__10083.cljs$lang$applyTo = (function (arglist__10085){
var n = cljs.core.first(arglist__10085);
arglist__10085 = cljs.core.next(arglist__10085);
var other = cljs.core.first(arglist__10085);
var _ = cljs.core.rest(arglist__10085);
return G__10083__delegate(n,other,_);
});
G__10083.cljs$core$IFn$_invoke$arity$variadic = G__10083__delegate;
return G__10083;
})()
,(function() { 
var G__10086__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__10086 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10091__i = 0, G__10091__a = new Array(arguments.length -  1);
while (G__10091__i < G__10091__a.length) {G__10091__a[G__10091__i] = arguments[G__10091__i + 1]; ++G__10091__i;}
  _ = new cljs.core.IndexedSeq(G__10091__a,0,null);
} 
return G__10086__delegate.call(this,n,_);};
G__10086.cljs$lang$maxFixedArity = 1;
G__10086.cljs$lang$applyTo = (function (arglist__10092){
var n = cljs.core.first(arglist__10092);
var _ = cljs.core.rest(arglist__10092);
return G__10086__delegate(n,_);
});
G__10086.cljs$core$IFn$_invoke$arity$variadic = G__10086__delegate;
return G__10086;
})()
,(function() { 
var G__10093__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__10093 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10094__i = 0, G__10094__a = new Array(arguments.length -  1);
while (G__10094__i < G__10094__a.length) {G__10094__a[G__10094__i] = arguments[G__10094__i + 1]; ++G__10094__i;}
  _ = new cljs.core.IndexedSeq(G__10094__a,0,null);
} 
return G__10093__delegate.call(this,n,_);};
G__10093.cljs$lang$maxFixedArity = 1;
G__10093.cljs$lang$applyTo = (function (arglist__10095){
var n = cljs.core.first(arglist__10095);
var _ = cljs.core.rest(arglist__10095);
return G__10093__delegate(n,_);
});
G__10093.cljs$core$IFn$_invoke$arity$variadic = G__10093__delegate;
return G__10093;
})()
,(function() { 
var G__10096__delegate = function (n,other,_){
return (n > other);
};
var G__10096 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10097__i = 0, G__10097__a = new Array(arguments.length -  2);
while (G__10097__i < G__10097__a.length) {G__10097__a[G__10097__i] = arguments[G__10097__i + 2]; ++G__10097__i;}
  _ = new cljs.core.IndexedSeq(G__10097__a,0,null);
} 
return G__10096__delegate.call(this,n,other,_);};
G__10096.cljs$lang$maxFixedArity = 2;
G__10096.cljs$lang$applyTo = (function (arglist__10098){
var n = cljs.core.first(arglist__10098);
arglist__10098 = cljs.core.next(arglist__10098);
var other = cljs.core.first(arglist__10098);
var _ = cljs.core.rest(arglist__10098);
return G__10096__delegate(n,other,_);
});
G__10096.cljs$core$IFn$_invoke$arity$variadic = G__10096__delegate;
return G__10096;
})()
,(function() { 
var G__10099__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__10099 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10100__i = 0, G__10100__a = new Array(arguments.length -  2);
while (G__10100__i < G__10100__a.length) {G__10100__a[G__10100__i] = arguments[G__10100__i + 2]; ++G__10100__i;}
  _ = new cljs.core.IndexedSeq(G__10100__a,0,null);
} 
return G__10099__delegate.call(this,n,other,_);};
G__10099.cljs$lang$maxFixedArity = 2;
G__10099.cljs$lang$applyTo = (function (arglist__10101){
var n = cljs.core.first(arglist__10101);
arglist__10101 = cljs.core.next(arglist__10101);
var other = cljs.core.first(arglist__10101);
var _ = cljs.core.rest(arglist__10101);
return G__10099__delegate(n,other,_);
});
G__10099.cljs$core$IFn$_invoke$arity$variadic = G__10099__delegate;
return G__10099;
})()
,(function() { 
var G__10102__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__10102 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10106__i = 0, G__10106__a = new Array(arguments.length -  2);
while (G__10106__i < G__10106__a.length) {G__10106__a[G__10106__i] = arguments[G__10106__i + 2]; ++G__10106__i;}
  _ = new cljs.core.IndexedSeq(G__10106__a,0,null);
} 
return G__10102__delegate.call(this,n,other,_);};
G__10102.cljs$lang$maxFixedArity = 2;
G__10102.cljs$lang$applyTo = (function (arglist__10107){
var n = cljs.core.first(arglist__10107);
arglist__10107 = cljs.core.next(arglist__10107);
var other = cljs.core.first(arglist__10107);
var _ = cljs.core.rest(arglist__10107);
return G__10102__delegate(n,other,_);
});
G__10102.cljs$core$IFn$_invoke$arity$variadic = G__10102__delegate;
return G__10102;
})()
,(function() { 
var G__10108__delegate = function (n,other,_){
return (n - other);
};
var G__10108 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10113__i = 0, G__10113__a = new Array(arguments.length -  2);
while (G__10113__i < G__10113__a.length) {G__10113__a[G__10113__i] = arguments[G__10113__i + 2]; ++G__10113__i;}
  _ = new cljs.core.IndexedSeq(G__10113__a,0,null);
} 
return G__10108__delegate.call(this,n,other,_);};
G__10108.cljs$lang$maxFixedArity = 2;
G__10108.cljs$lang$applyTo = (function (arglist__10115){
var n = cljs.core.first(arglist__10115);
arglist__10115 = cljs.core.next(arglist__10115);
var other = cljs.core.first(arglist__10115);
var _ = cljs.core.rest(arglist__10115);
return G__10108__delegate(n,other,_);
});
G__10108.cljs$core$IFn$_invoke$arity$variadic = G__10108__delegate;
return G__10108;
})()
,(function() { 
var G__10117__delegate = function (n,other,_){
return (n * other);
};
var G__10117 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10123__i = 0, G__10123__a = new Array(arguments.length -  2);
while (G__10123__i < G__10123__a.length) {G__10123__a[G__10123__i] = arguments[G__10123__i + 2]; ++G__10123__i;}
  _ = new cljs.core.IndexedSeq(G__10123__a,0,null);
} 
return G__10117__delegate.call(this,n,other,_);};
G__10117.cljs$lang$maxFixedArity = 2;
G__10117.cljs$lang$applyTo = (function (arglist__10124){
var n = cljs.core.first(arglist__10124);
arglist__10124 = cljs.core.next(arglist__10124);
var other = cljs.core.first(arglist__10124);
var _ = cljs.core.rest(arglist__10124);
return G__10117__delegate(n,other,_);
});
G__10117.cljs$core$IFn$_invoke$arity$variadic = G__10117__delegate;
return G__10117;
})()
,(function() { 
var G__10128__delegate = function (n,other,_){
return (n / other);
};
var G__10128 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10129__i = 0, G__10129__a = new Array(arguments.length -  2);
while (G__10129__i < G__10129__a.length) {G__10129__a[G__10129__i] = arguments[G__10129__i + 2]; ++G__10129__i;}
  _ = new cljs.core.IndexedSeq(G__10129__a,0,null);
} 
return G__10128__delegate.call(this,n,other,_);};
G__10128.cljs$lang$maxFixedArity = 2;
G__10128.cljs$lang$applyTo = (function (arglist__10134){
var n = cljs.core.first(arglist__10134);
arglist__10134 = cljs.core.next(arglist__10134);
var other = cljs.core.first(arglist__10134);
var _ = cljs.core.rest(arglist__10134);
return G__10128__delegate(n,other,_);
});
G__10128.cljs$core$IFn$_invoke$arity$variadic = G__10128__delegate;
return G__10128;
})()
,(function() { 
var G__10135__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__10135 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10136__i = 0, G__10136__a = new Array(arguments.length -  1);
while (G__10136__i < G__10136__a.length) {G__10136__a[G__10136__i] = arguments[G__10136__i + 1]; ++G__10136__i;}
  _ = new cljs.core.IndexedSeq(G__10136__a,0,null);
} 
return G__10135__delegate.call(this,n,_);};
G__10135.cljs$lang$maxFixedArity = 1;
G__10135.cljs$lang$applyTo = (function (arglist__10137){
var n = cljs.core.first(arglist__10137);
var _ = cljs.core.rest(arglist__10137);
return G__10135__delegate(n,_);
});
G__10135.cljs$core$IFn$_invoke$arity$variadic = G__10135__delegate;
return G__10135;
})()
,(function() { 
var G__10138__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__10138 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10139__i = 0, G__10139__a = new Array(arguments.length -  1);
while (G__10139__i < G__10139__a.length) {G__10139__a[G__10139__i] = arguments[G__10139__i + 1]; ++G__10139__i;}
  _ = new cljs.core.IndexedSeq(G__10139__a,0,null);
} 
return G__10138__delegate.call(this,n,_);};
G__10138.cljs$lang$maxFixedArity = 1;
G__10138.cljs$lang$applyTo = (function (arglist__10140){
var n = cljs.core.first(arglist__10140);
var _ = cljs.core.rest(arglist__10140);
return G__10138__delegate(n,_);
});
G__10138.cljs$core$IFn$_invoke$arity$variadic = G__10138__delegate;
return G__10138;
})()
,(function() { 
var G__10141__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__10141 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10142__i = 0, G__10142__a = new Array(arguments.length -  2);
while (G__10142__i < G__10142__a.length) {G__10142__a[G__10142__i] = arguments[G__10142__i + 2]; ++G__10142__i;}
  _ = new cljs.core.IndexedSeq(G__10142__a,0,null);
} 
return G__10141__delegate.call(this,n,other,_);};
G__10141.cljs$lang$maxFixedArity = 2;
G__10141.cljs$lang$applyTo = (function (arglist__10143){
var n = cljs.core.first(arglist__10143);
arglist__10143 = cljs.core.next(arglist__10143);
var other = cljs.core.first(arglist__10143);
var _ = cljs.core.rest(arglist__10143);
return G__10141__delegate(n,other,_);
});
G__10141.cljs$core$IFn$_invoke$arity$variadic = G__10141__delegate;
return G__10141;
})()
,(function() { 
var G__10144__delegate = function (n,other,_){
return (n >= other);
};
var G__10144 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10149__i = 0, G__10149__a = new Array(arguments.length -  2);
while (G__10149__i < G__10149__a.length) {G__10149__a[G__10149__i] = arguments[G__10149__i + 2]; ++G__10149__i;}
  _ = new cljs.core.IndexedSeq(G__10149__a,0,null);
} 
return G__10144__delegate.call(this,n,other,_);};
G__10144.cljs$lang$maxFixedArity = 2;
G__10144.cljs$lang$applyTo = (function (arglist__10150){
var n = cljs.core.first(arglist__10150);
arglist__10150 = cljs.core.next(arglist__10150);
var other = cljs.core.first(arglist__10150);
var _ = cljs.core.rest(arglist__10150);
return G__10144__delegate(n,other,_);
});
G__10144.cljs$core$IFn$_invoke$arity$variadic = G__10144__delegate;
return G__10144;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__10155__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__10155 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10156__i = 0, G__10156__a = new Array(arguments.length -  2);
while (G__10156__i < G__10156__a.length) {G__10156__a[G__10156__i] = arguments[G__10156__i + 2]; ++G__10156__i;}
  _ = new cljs.core.IndexedSeq(G__10156__a,0,null);
} 
return G__10155__delegate.call(this,s,other,_);};
G__10155.cljs$lang$maxFixedArity = 2;
G__10155.cljs$lang$applyTo = (function (arglist__10157){
var s = cljs.core.first(arglist__10157);
arglist__10157 = cljs.core.next(arglist__10157);
var other = cljs.core.first(arglist__10157);
var _ = cljs.core.rest(arglist__10157);
return G__10155__delegate(s,other,_);
});
G__10155.cljs$core$IFn$_invoke$arity$variadic = G__10155__delegate;
return G__10155;
})()
,(function() { 
var G__10158__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__10158 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10163__i = 0, G__10163__a = new Array(arguments.length -  2);
while (G__10163__i < G__10163__a.length) {G__10163__a[G__10163__i] = arguments[G__10163__i + 2]; ++G__10163__i;}
  _ = new cljs.core.IndexedSeq(G__10163__a,0,null);
} 
return G__10158__delegate.call(this,s,other,_);};
G__10158.cljs$lang$maxFixedArity = 2;
G__10158.cljs$lang$applyTo = (function (arglist__10164){
var s = cljs.core.first(arglist__10164);
arglist__10164 = cljs.core.next(arglist__10164);
var other = cljs.core.first(arglist__10164);
var _ = cljs.core.rest(arglist__10164);
return G__10158__delegate(s,other,_);
});
G__10158.cljs$core$IFn$_invoke$arity$variadic = G__10158__delegate;
return G__10158;
})()
,(function() { 
var G__10165__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__10165 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10167__i = 0, G__10167__a = new Array(arguments.length -  1);
while (G__10167__i < G__10167__a.length) {G__10167__a[G__10167__i] = arguments[G__10167__i + 1]; ++G__10167__i;}
  _ = new cljs.core.IndexedSeq(G__10167__a,0,null);
} 
return G__10165__delegate.call(this,s,_);};
G__10165.cljs$lang$maxFixedArity = 1;
G__10165.cljs$lang$applyTo = (function (arglist__10168){
var s = cljs.core.first(arglist__10168);
var _ = cljs.core.rest(arglist__10168);
return G__10165__delegate(s,_);
});
G__10165.cljs$core$IFn$_invoke$arity$variadic = G__10165__delegate;
return G__10165;
})()
,(function() { 
var G__10169__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__10169 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10170__i = 0, G__10170__a = new Array(arguments.length -  1);
while (G__10170__i < G__10170__a.length) {G__10170__a[G__10170__i] = arguments[G__10170__i + 1]; ++G__10170__i;}
  _ = new cljs.core.IndexedSeq(G__10170__a,0,null);
} 
return G__10169__delegate.call(this,s,_);};
G__10169.cljs$lang$maxFixedArity = 1;
G__10169.cljs$lang$applyTo = (function (arglist__10171){
var s = cljs.core.first(arglist__10171);
var _ = cljs.core.rest(arglist__10171);
return G__10169__delegate(s,_);
});
G__10169.cljs$core$IFn$_invoke$arity$variadic = G__10169__delegate;
return G__10169;
})()
,(function() { 
var G__10172__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__10172 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10173__i = 0, G__10173__a = new Array(arguments.length -  2);
while (G__10173__i < G__10173__a.length) {G__10173__a[G__10173__i] = arguments[G__10173__i + 2]; ++G__10173__i;}
  _ = new cljs.core.IndexedSeq(G__10173__a,0,null);
} 
return G__10172__delegate.call(this,s,prefix,_);};
G__10172.cljs$lang$maxFixedArity = 2;
G__10172.cljs$lang$applyTo = (function (arglist__10174){
var s = cljs.core.first(arglist__10174);
arglist__10174 = cljs.core.next(arglist__10174);
var prefix = cljs.core.first(arglist__10174);
var _ = cljs.core.rest(arglist__10174);
return G__10172__delegate(s,prefix,_);
});
G__10172.cljs$core$IFn$_invoke$arity$variadic = G__10172__delegate;
return G__10172;
})()
,(function() { 
var G__10175__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__10175 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10176__i = 0, G__10176__a = new Array(arguments.length -  1);
while (G__10176__i < G__10176__a.length) {G__10176__a[G__10176__i] = arguments[G__10176__i + 1]; ++G__10176__i;}
  _ = new cljs.core.IndexedSeq(G__10176__a,0,null);
} 
return G__10175__delegate.call(this,s,_);};
G__10175.cljs$lang$maxFixedArity = 1;
G__10175.cljs$lang$applyTo = (function (arglist__10177){
var s = cljs.core.first(arglist__10177);
var _ = cljs.core.rest(arglist__10177);
return G__10175__delegate(s,_);
});
G__10175.cljs$core$IFn$_invoke$arity$variadic = G__10175__delegate;
return G__10175;
})()
,(function() { 
var G__10182__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__10182 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10187__i = 0, G__10187__a = new Array(arguments.length -  2);
while (G__10187__i < G__10187__a.length) {G__10187__a[G__10187__i] = arguments[G__10187__i + 2]; ++G__10187__i;}
  _ = new cljs.core.IndexedSeq(G__10187__a,0,null);
} 
return G__10182__delegate.call(this,s,other,_);};
G__10182.cljs$lang$maxFixedArity = 2;
G__10182.cljs$lang$applyTo = (function (arglist__10188){
var s = cljs.core.first(arglist__10188);
arglist__10188 = cljs.core.next(arglist__10188);
var other = cljs.core.first(arglist__10188);
var _ = cljs.core.rest(arglist__10188);
return G__10182__delegate(s,other,_);
});
G__10182.cljs$core$IFn$_invoke$arity$variadic = G__10182__delegate;
return G__10182;
})()
,(function() { 
var G__10189__delegate = function (s,other,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(other));
};
var G__10189 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10191__i = 0, G__10191__a = new Array(arguments.length -  2);
while (G__10191__i < G__10191__a.length) {G__10191__a[G__10191__i] = arguments[G__10191__i + 2]; ++G__10191__i;}
  _ = new cljs.core.IndexedSeq(G__10191__a,0,null);
} 
return G__10189__delegate.call(this,s,other,_);};
G__10189.cljs$lang$maxFixedArity = 2;
G__10189.cljs$lang$applyTo = (function (arglist__10192){
var s = cljs.core.first(arglist__10192);
arglist__10192 = cljs.core.next(arglist__10192);
var other = cljs.core.first(arglist__10192);
var _ = cljs.core.rest(arglist__10192);
return G__10189__delegate(s,other,_);
});
G__10189.cljs$core$IFn$_invoke$arity$variadic = G__10189__delegate;
return G__10189;
})()
,(function() { 
var G__10193__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__10193 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10194__i = 0, G__10194__a = new Array(arguments.length -  1);
while (G__10194__i < G__10194__a.length) {G__10194__a[G__10194__i] = arguments[G__10194__i + 1]; ++G__10194__i;}
  _ = new cljs.core.IndexedSeq(G__10194__a,0,null);
} 
return G__10193__delegate.call(this,s,_);};
G__10193.cljs$lang$maxFixedArity = 1;
G__10193.cljs$lang$applyTo = (function (arglist__10195){
var s = cljs.core.first(arglist__10195);
var _ = cljs.core.rest(arglist__10195);
return G__10193__delegate(s,_);
});
G__10193.cljs$core$IFn$_invoke$arity$variadic = G__10193__delegate;
return G__10193;
})()
,(function() { 
var G__10196__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__10196 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10201__i = 0, G__10201__a = new Array(arguments.length -  2);
while (G__10201__i < G__10201__a.length) {G__10201__a[G__10201__i] = arguments[G__10201__i + 2]; ++G__10201__i;}
  _ = new cljs.core.IndexedSeq(G__10201__a,0,null);
} 
return G__10196__delegate.call(this,s,other,_);};
G__10196.cljs$lang$maxFixedArity = 2;
G__10196.cljs$lang$applyTo = (function (arglist__10203){
var s = cljs.core.first(arglist__10203);
arglist__10203 = cljs.core.next(arglist__10203);
var other = cljs.core.first(arglist__10203);
var _ = cljs.core.rest(arglist__10203);
return G__10196__delegate(s,other,_);
});
G__10196.cljs$core$IFn$_invoke$arity$variadic = G__10196__delegate;
return G__10196;
})()
,(function() { 
var G__10205__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__10205 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10211__i = 0, G__10211__a = new Array(arguments.length -  2);
while (G__10211__i < G__10211__a.length) {G__10211__a[G__10211__i] = arguments[G__10211__i + 2]; ++G__10211__i;}
  _ = new cljs.core.IndexedSeq(G__10211__a,0,null);
} 
return G__10205__delegate.call(this,s,substr,_);};
G__10205.cljs$lang$maxFixedArity = 2;
G__10205.cljs$lang$applyTo = (function (arglist__10212){
var s = cljs.core.first(arglist__10212);
arglist__10212 = cljs.core.next(arglist__10212);
var substr = cljs.core.first(arglist__10212);
var _ = cljs.core.rest(arglist__10212);
return G__10205__delegate(s,substr,_);
});
G__10205.cljs$core$IFn$_invoke$arity$variadic = G__10205__delegate;
return G__10205;
})()
,(function() { 
var G__10217__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__10217 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10218__i = 0, G__10218__a = new Array(arguments.length -  1);
while (G__10218__i < G__10218__a.length) {G__10218__a[G__10218__i] = arguments[G__10218__i + 1]; ++G__10218__i;}
  _ = new cljs.core.IndexedSeq(G__10218__a,0,null);
} 
return G__10217__delegate.call(this,s,_);};
G__10217.cljs$lang$maxFixedArity = 1;
G__10217.cljs$lang$applyTo = (function (arglist__10219){
var s = cljs.core.first(arglist__10219);
var _ = cljs.core.rest(arglist__10219);
return G__10217__delegate(s,_);
});
G__10217.cljs$core$IFn$_invoke$arity$variadic = G__10217__delegate;
return G__10217;
})()
,(function() { 
var G__10221__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__10221 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10222__i = 0, G__10222__a = new Array(arguments.length -  2);
while (G__10222__i < G__10222__a.length) {G__10222__a[G__10222__i] = arguments[G__10222__i + 2]; ++G__10222__i;}
  _ = new cljs.core.IndexedSeq(G__10222__a,0,null);
} 
return G__10221__delegate.call(this,s,other,_);};
G__10221.cljs$lang$maxFixedArity = 2;
G__10221.cljs$lang$applyTo = (function (arglist__10223){
var s = cljs.core.first(arglist__10223);
arglist__10223 = cljs.core.next(arglist__10223);
var other = cljs.core.first(arglist__10223);
var _ = cljs.core.rest(arglist__10223);
return G__10221__delegate(s,other,_);
});
G__10221.cljs$core$IFn$_invoke$arity$variadic = G__10221__delegate;
return G__10221;
})()
,(function() { 
var G__10228__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__10228 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10233__i = 0, G__10233__a = new Array(arguments.length -  1);
while (G__10233__i < G__10233__a.length) {G__10233__a[G__10233__i] = arguments[G__10233__i + 1]; ++G__10233__i;}
  _ = new cljs.core.IndexedSeq(G__10233__a,0,null);
} 
return G__10228__delegate.call(this,s,_);};
G__10228.cljs$lang$maxFixedArity = 1;
G__10228.cljs$lang$applyTo = (function (arglist__10234){
var s = cljs.core.first(arglist__10234);
var _ = cljs.core.rest(arglist__10234);
return G__10228__delegate(s,_);
});
G__10228.cljs$core$IFn$_invoke$arity$variadic = G__10228__delegate;
return G__10228;
})()
,(function() { 
var G__10235__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__10235 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10237__i = 0, G__10237__a = new Array(arguments.length -  1);
while (G__10237__i < G__10237__a.length) {G__10237__a[G__10237__i] = arguments[G__10237__i + 1]; ++G__10237__i;}
  _ = new cljs.core.IndexedSeq(G__10237__a,0,null);
} 
return G__10235__delegate.call(this,s,_);};
G__10235.cljs$lang$maxFixedArity = 1;
G__10235.cljs$lang$applyTo = (function (arglist__10242){
var s = cljs.core.first(arglist__10242);
var _ = cljs.core.rest(arglist__10242);
return G__10235__delegate(s,_);
});
G__10235.cljs$core$IFn$_invoke$arity$variadic = G__10235__delegate;
return G__10235;
})()
,(function() { 
var G__10244__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__10244 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__10247__i = 0, G__10247__a = new Array(arguments.length -  3);
while (G__10247__i < G__10247__a.length) {G__10247__a[G__10247__i] = arguments[G__10247__i + 3]; ++G__10247__i;}
  _ = new cljs.core.IndexedSeq(G__10247__a,0,null);
} 
return G__10244__delegate.call(this,s,start,end,_);};
G__10244.cljs$lang$maxFixedArity = 3;
G__10244.cljs$lang$applyTo = (function (arglist__10252){
var s = cljs.core.first(arglist__10252);
arglist__10252 = cljs.core.next(arglist__10252);
var start = cljs.core.first(arglist__10252);
arglist__10252 = cljs.core.next(arglist__10252);
var end = cljs.core.first(arglist__10252);
var _ = cljs.core.rest(arglist__10252);
return G__10244__delegate(s,start,end,_);
});
G__10244.cljs$core$IFn$_invoke$arity$variadic = G__10244__delegate;
return G__10244;
})()
,(function() { 
var G__10254__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__10254 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10259__i = 0, G__10259__a = new Array(arguments.length -  2);
while (G__10259__i < G__10259__a.length) {G__10259__a[G__10259__i] = arguments[G__10259__i + 2]; ++G__10259__i;}
  _ = new cljs.core.IndexedSeq(G__10259__a,0,null);
} 
return G__10254__delegate.call(this,s,idx,_);};
G__10254.cljs$lang$maxFixedArity = 2;
G__10254.cljs$lang$applyTo = (function (arglist__10261){
var s = cljs.core.first(arglist__10261);
arglist__10261 = cljs.core.next(arglist__10261);
var idx = cljs.core.first(arglist__10261);
var _ = cljs.core.rest(arglist__10261);
return G__10254__delegate(s,idx,_);
});
G__10254.cljs$core$IFn$_invoke$arity$variadic = G__10254__delegate;
return G__10254;
})()
,(function() { 
var G__10265__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__10265 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__10269__i = 0, G__10269__a = new Array(arguments.length -  3);
while (G__10269__i < G__10269__a.length) {G__10269__a[G__10269__i] = arguments[G__10269__i + 3]; ++G__10269__i;}
  _ = new cljs.core.IndexedSeq(G__10269__a,0,null);
} 
return G__10265__delegate.call(this,s,old,new$,_);};
G__10265.cljs$lang$maxFixedArity = 3;
G__10265.cljs$lang$applyTo = (function (arglist__10270){
var s = cljs.core.first(arglist__10270);
arglist__10270 = cljs.core.next(arglist__10270);
var old = cljs.core.first(arglist__10270);
arglist__10270 = cljs.core.next(arglist__10270);
var new$ = cljs.core.first(arglist__10270);
var _ = cljs.core.rest(arglist__10270);
return G__10265__delegate(s,old,new$,_);
});
G__10265.cljs$core$IFn$_invoke$arity$variadic = G__10265__delegate;
return G__10265;
})()
,(function() { 
var G__10275__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__10275 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10278__i = 0, G__10278__a = new Array(arguments.length -  1);
while (G__10278__i < G__10278__a.length) {G__10278__a[G__10278__i] = arguments[G__10278__i + 1]; ++G__10278__i;}
  _ = new cljs.core.IndexedSeq(G__10278__a,0,null);
} 
return G__10275__delegate.call(this,s,_);};
G__10275.cljs$lang$maxFixedArity = 1;
G__10275.cljs$lang$applyTo = (function (arglist__10280){
var s = cljs.core.first(arglist__10280);
var _ = cljs.core.rest(arglist__10280);
return G__10275__delegate(s,_);
});
G__10275.cljs$core$IFn$_invoke$arity$variadic = G__10275__delegate;
return G__10275;
})()
,(function() { 
var G__10285__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__10285 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10289__i = 0, G__10289__a = new Array(arguments.length -  2);
while (G__10289__i < G__10289__a.length) {G__10289__a[G__10289__i] = arguments[G__10289__i + 2]; ++G__10289__i;}
  _ = new cljs.core.IndexedSeq(G__10289__a,0,null);
} 
return G__10285__delegate.call(this,s,delim,_);};
G__10285.cljs$lang$maxFixedArity = 2;
G__10285.cljs$lang$applyTo = (function (arglist__10290){
var s = cljs.core.first(arglist__10290);
arglist__10290 = cljs.core.next(arglist__10290);
var delim = cljs.core.first(arglist__10290);
var _ = cljs.core.rest(arglist__10290);
return G__10285__delegate(s,delim,_);
});
G__10285.cljs$core$IFn$_invoke$arity$variadic = G__10285__delegate;
return G__10285;
})()
,(function() { 
var G__10295__delegate = function (s,_){
return cljs.core.count(s);
};
var G__10295 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10300__i = 0, G__10300__a = new Array(arguments.length -  1);
while (G__10300__i < G__10300__a.length) {G__10300__a[G__10300__i] = arguments[G__10300__i + 1]; ++G__10300__i;}
  _ = new cljs.core.IndexedSeq(G__10300__a,0,null);
} 
return G__10295__delegate.call(this,s,_);};
G__10295.cljs$lang$maxFixedArity = 1;
G__10295.cljs$lang$applyTo = (function (arglist__10301){
var s = cljs.core.first(arglist__10301);
var _ = cljs.core.rest(arglist__10301);
return G__10295__delegate(s,_);
});
G__10295.cljs$core$IFn$_invoke$arity$variadic = G__10295__delegate;
return G__10295;
})()
,(function() { 
var G__10303__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__10303 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10305__i = 0, G__10305__a = new Array(arguments.length -  1);
while (G__10305__i < G__10305__a.length) {G__10305__a[G__10305__i] = arguments[G__10305__i + 1]; ++G__10305__i;}
  _ = new cljs.core.IndexedSeq(G__10305__a,0,null);
} 
return G__10303__delegate.call(this,s,_);};
G__10303.cljs$lang$maxFixedArity = 1;
G__10303.cljs$lang$applyTo = (function (arglist__10306){
var s = cljs.core.first(arglist__10306);
var _ = cljs.core.rest(arglist__10306);
return G__10303__delegate(s,_);
});
G__10303.cljs$core$IFn$_invoke$arity$variadic = G__10303__delegate;
return G__10303;
})()
,(function() { 
var G__10307__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__10307 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10308__i = 0, G__10308__a = new Array(arguments.length -  2);
while (G__10308__i < G__10308__a.length) {G__10308__a[G__10308__i] = arguments[G__10308__i + 2]; ++G__10308__i;}
  _ = new cljs.core.IndexedSeq(G__10308__a,0,null);
} 
return G__10307__delegate.call(this,s,ch,_);};
G__10307.cljs$lang$maxFixedArity = 2;
G__10307.cljs$lang$applyTo = (function (arglist__10313){
var s = cljs.core.first(arglist__10313);
arglist__10313 = cljs.core.next(arglist__10313);
var ch = cljs.core.first(arglist__10313);
var _ = cljs.core.rest(arglist__10313);
return G__10307__delegate(s,ch,_);
});
G__10307.cljs$core$IFn$_invoke$arity$variadic = G__10307__delegate;
return G__10307;
})()
,(function() { 
var G__10315__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__10315 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10322__i = 0, G__10322__a = new Array(arguments.length -  2);
while (G__10322__i < G__10322__a.length) {G__10322__a[G__10322__i] = arguments[G__10322__i + 2]; ++G__10322__i;}
  _ = new cljs.core.IndexedSeq(G__10322__a,0,null);
} 
return G__10315__delegate.call(this,s,other,_);};
G__10315.cljs$lang$maxFixedArity = 2;
G__10315.cljs$lang$applyTo = (function (arglist__10327){
var s = cljs.core.first(arglist__10327);
arglist__10327 = cljs.core.next(arglist__10327);
var other = cljs.core.first(arglist__10327);
var _ = cljs.core.rest(arglist__10327);
return G__10315__delegate(s,other,_);
});
G__10315.cljs$core$IFn$_invoke$arity$variadic = G__10315__delegate;
return G__10315;
})()
,(function() { 
var G__10329__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__10329 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10335__i = 0, G__10335__a = new Array(arguments.length -  2);
while (G__10335__i < G__10335__a.length) {G__10335__a[G__10335__i] = arguments[G__10335__i + 2]; ++G__10335__i;}
  _ = new cljs.core.IndexedSeq(G__10335__a,0,null);
} 
return G__10329__delegate.call(this,s,other,_);};
G__10329.cljs$lang$maxFixedArity = 2;
G__10329.cljs$lang$applyTo = (function (arglist__10336){
var s = cljs.core.first(arglist__10336);
arglist__10336 = cljs.core.next(arglist__10336);
var other = cljs.core.first(arglist__10336);
var _ = cljs.core.rest(arglist__10336);
return G__10329__delegate(s,other,_);
});
G__10329.cljs$core$IFn$_invoke$arity$variadic = G__10329__delegate;
return G__10329;
})()
,(function() { 
var G__10337__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__10337 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__10338__i = 0, G__10338__a = new Array(arguments.length -  2);
while (G__10338__i < G__10338__a.length) {G__10338__a[G__10338__i] = arguments[G__10338__i + 2]; ++G__10338__i;}
  _ = new cljs.core.IndexedSeq(G__10338__a,0,null);
} 
return G__10337__delegate.call(this,s,suffix,_);};
G__10337.cljs$lang$maxFixedArity = 2;
G__10337.cljs$lang$applyTo = (function (arglist__10341){
var s = cljs.core.first(arglist__10341);
arglist__10341 = cljs.core.next(arglist__10341);
var suffix = cljs.core.first(arglist__10341);
var _ = cljs.core.rest(arglist__10341);
return G__10337__delegate(s,suffix,_);
});
G__10337.cljs$core$IFn$_invoke$arity$variadic = G__10337__delegate;
return G__10337;
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6699 = cljs.core.get_global_hierarchy;
return (fexpr__6699.cljs$core$IFn$_invoke$arity$0 ? fexpr__6699.cljs$core$IFn$_invoke$arity$0() : fexpr__6699.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6704_SHARP_){
return fs.existsSync(p1__6704_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6709){
var map__6710 = p__6709;
var map__6710__$1 = cljs.core.__destructure_map(map__6710);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6710__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6710__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6710__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6711){
var map__6712 = p__6711;
var map__6712__$1 = cljs.core.__destructure_map(map__6712);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6717_10432 = cljs.core.seq(imports);
var chunk__6718_10433 = null;
var count__6719_10434 = (0);
var i__6720_10435 = (0);
while(true){
if((i__6720_10435 < count__6719_10434)){
var import_node_10440 = chunk__6718_10433.cljs$core$IIndexed$_nth$arity$2(null,i__6720_10435);
if(cljs.core.map_QMARK_(import_node_10440)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_10440);
} else {
}


var G__10442 = seq__6717_10432;
var G__10443 = chunk__6718_10433;
var G__10444 = count__6719_10434;
var G__10445 = (i__6720_10435 + (1));
seq__6717_10432 = G__10442;
chunk__6718_10433 = G__10443;
count__6719_10434 = G__10444;
i__6720_10435 = G__10445;
continue;
} else {
var temp__5823__auto___10446 = cljs.core.seq(seq__6717_10432);
if(temp__5823__auto___10446){
var seq__6717_10447__$1 = temp__5823__auto___10446;
if(cljs.core.chunked_seq_QMARK_(seq__6717_10447__$1)){
var c__5673__auto___10448 = cljs.core.chunk_first(seq__6717_10447__$1);
var G__10449 = cljs.core.chunk_rest(seq__6717_10447__$1);
var G__10450 = c__5673__auto___10448;
var G__10451 = cljs.core.count(c__5673__auto___10448);
var G__10452 = (0);
seq__6717_10432 = G__10449;
chunk__6718_10433 = G__10450;
count__6719_10434 = G__10451;
i__6720_10435 = G__10452;
continue;
} else {
var import_node_10457 = cljs.core.first(seq__6717_10447__$1);
if(cljs.core.map_QMARK_(import_node_10457)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_10457);
} else {
}


var G__10462 = cljs.core.next(seq__6717_10447__$1);
var G__10463 = null;
var G__10464 = (0);
var G__10465 = (0);
seq__6717_10432 = G__10462;
chunk__6718_10433 = G__10463;
count__6719_10434 = G__10464;
i__6720_10435 = G__10465;
continue;
}
} else {
}
}
break;
}

var seq__6725_10467 = cljs.core.seq(interns);
var chunk__6726_10468 = null;
var count__6727_10469 = (0);
var i__6728_10470 = (0);
while(true){
if((i__6728_10470 < count__6727_10469)){
var intern_node_10476 = chunk__6726_10468.cljs$core$IIndexed$_nth$arity$2(null,i__6728_10470);
if(cljs.core.map_QMARK_(intern_node_10476)){
nex.interpreter.process_intern(ctx,intern_node_10476);
} else {
}


var G__10479 = seq__6725_10467;
var G__10480 = chunk__6726_10468;
var G__10481 = count__6727_10469;
var G__10482 = (i__6728_10470 + (1));
seq__6725_10467 = G__10479;
chunk__6726_10468 = G__10480;
count__6727_10469 = G__10481;
i__6728_10470 = G__10482;
continue;
} else {
var temp__5823__auto___10487 = cljs.core.seq(seq__6725_10467);
if(temp__5823__auto___10487){
var seq__6725_10489__$1 = temp__5823__auto___10487;
if(cljs.core.chunked_seq_QMARK_(seq__6725_10489__$1)){
var c__5673__auto___10494 = cljs.core.chunk_first(seq__6725_10489__$1);
var G__10495 = cljs.core.chunk_rest(seq__6725_10489__$1);
var G__10496 = c__5673__auto___10494;
var G__10497 = cljs.core.count(c__5673__auto___10494);
var G__10498 = (0);
seq__6725_10467 = G__10495;
chunk__6726_10468 = G__10496;
count__6727_10469 = G__10497;
i__6728_10470 = G__10498;
continue;
} else {
var intern_node_10503 = cljs.core.first(seq__6725_10489__$1);
if(cljs.core.map_QMARK_(intern_node_10503)){
nex.interpreter.process_intern(ctx,intern_node_10503);
} else {
}


var G__10507 = cljs.core.next(seq__6725_10489__$1);
var G__10508 = null;
var G__10509 = (0);
var G__10510 = (0);
seq__6725_10467 = G__10507;
chunk__6726_10468 = G__10508;
count__6727_10469 = G__10509;
i__6728_10470 = G__10510;
continue;
}
} else {
}
}
break;
}

var seq__6729_10511 = cljs.core.seq(classes);
var chunk__6730_10512 = null;
var count__6731_10513 = (0);
var i__6732_10514 = (0);
while(true){
if((i__6732_10514 < count__6731_10513)){
var class_node_10515 = chunk__6730_10512.cljs$core$IIndexed$_nth$arity$2(null,i__6732_10514);
if(cljs.core.map_QMARK_(class_node_10515)){
nex.interpreter.register_class(ctx,class_node_10515);
} else {
}


var G__10520 = seq__6729_10511;
var G__10521 = chunk__6730_10512;
var G__10522 = count__6731_10513;
var G__10523 = (i__6732_10514 + (1));
seq__6729_10511 = G__10520;
chunk__6730_10512 = G__10521;
count__6731_10513 = G__10522;
i__6732_10514 = G__10523;
continue;
} else {
var temp__5823__auto___10525 = cljs.core.seq(seq__6729_10511);
if(temp__5823__auto___10525){
var seq__6729_10527__$1 = temp__5823__auto___10525;
if(cljs.core.chunked_seq_QMARK_(seq__6729_10527__$1)){
var c__5673__auto___10528 = cljs.core.chunk_first(seq__6729_10527__$1);
var G__10530 = cljs.core.chunk_rest(seq__6729_10527__$1);
var G__10531 = c__5673__auto___10528;
var G__10532 = cljs.core.count(c__5673__auto___10528);
var G__10533 = (0);
seq__6729_10511 = G__10530;
chunk__6730_10512 = G__10531;
count__6731_10513 = G__10532;
i__6732_10514 = G__10533;
continue;
} else {
var class_node_10538 = cljs.core.first(seq__6729_10527__$1);
if(cljs.core.map_QMARK_(class_node_10538)){
nex.interpreter.register_class(ctx,class_node_10538);
} else {
}


var G__10542 = cljs.core.next(seq__6729_10527__$1);
var G__10543 = null;
var G__10544 = (0);
var G__10545 = (0);
seq__6729_10511 = G__10542;
chunk__6730_10512 = G__10543;
count__6731_10513 = G__10544;
i__6732_10514 = G__10545;
continue;
}
} else {
}
}
break;
}

var seq__6737_10546 = cljs.core.seq(functions);
var chunk__6738_10547 = null;
var count__6739_10548 = (0);
var i__6740_10549 = (0);
while(true){
if((i__6740_10549 < count__6739_10548)){
var fn_node_10554 = chunk__6738_10547.cljs$core$IIndexed$_nth$arity$2(null,i__6740_10549);
if(cljs.core.map_QMARK_(fn_node_10554)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_10554);
} else {
}


var G__10555 = seq__6737_10546;
var G__10556 = chunk__6738_10547;
var G__10557 = count__6739_10548;
var G__10558 = (i__6740_10549 + (1));
seq__6737_10546 = G__10555;
chunk__6738_10547 = G__10556;
count__6739_10548 = G__10557;
i__6740_10549 = G__10558;
continue;
} else {
var temp__5823__auto___10559 = cljs.core.seq(seq__6737_10546);
if(temp__5823__auto___10559){
var seq__6737_10560__$1 = temp__5823__auto___10559;
if(cljs.core.chunked_seq_QMARK_(seq__6737_10560__$1)){
var c__5673__auto___10561 = cljs.core.chunk_first(seq__6737_10560__$1);
var G__10562 = cljs.core.chunk_rest(seq__6737_10560__$1);
var G__10563 = c__5673__auto___10561;
var G__10564 = cljs.core.count(c__5673__auto___10561);
var G__10565 = (0);
seq__6737_10546 = G__10562;
chunk__6738_10547 = G__10563;
count__6739_10548 = G__10564;
i__6740_10549 = G__10565;
continue;
} else {
var fn_node_10566 = cljs.core.first(seq__6737_10560__$1);
if(cljs.core.map_QMARK_(fn_node_10566)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_10566);
} else {
}


var G__10567 = cljs.core.next(seq__6737_10560__$1);
var G__10568 = null;
var G__10569 = (0);
var G__10570 = (0);
seq__6737_10546 = G__10567;
chunk__6738_10547 = G__10568;
count__6739_10548 = G__10569;
i__6740_10549 = G__10570;
continue;
}
} else {
}
}
break;
}

var seq__6745_10571 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6746_10572 = null;
var count__6747_10573 = (0);
var i__6748_10574 = (0);
while(true){
if((i__6748_10574 < count__6747_10573)){
var stmt_node_10575 = chunk__6746_10572.cljs$core$IIndexed$_nth$arity$2(null,i__6748_10574);
if(cljs.core.map_QMARK_(stmt_node_10575)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_10575);
} else {
}


var G__10576 = seq__6745_10571;
var G__10577 = chunk__6746_10572;
var G__10578 = count__6747_10573;
var G__10579 = (i__6748_10574 + (1));
seq__6745_10571 = G__10576;
chunk__6746_10572 = G__10577;
count__6747_10573 = G__10578;
i__6748_10574 = G__10579;
continue;
} else {
var temp__5823__auto___10580 = cljs.core.seq(seq__6745_10571);
if(temp__5823__auto___10580){
var seq__6745_10581__$1 = temp__5823__auto___10580;
if(cljs.core.chunked_seq_QMARK_(seq__6745_10581__$1)){
var c__5673__auto___10582 = cljs.core.chunk_first(seq__6745_10581__$1);
var G__10583 = cljs.core.chunk_rest(seq__6745_10581__$1);
var G__10584 = c__5673__auto___10582;
var G__10585 = cljs.core.count(c__5673__auto___10582);
var G__10586 = (0);
seq__6745_10571 = G__10583;
chunk__6746_10572 = G__10584;
count__6747_10573 = G__10585;
i__6748_10574 = G__10586;
continue;
} else {
var stmt_node_10587 = cljs.core.first(seq__6745_10581__$1);
if(cljs.core.map_QMARK_(stmt_node_10587)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_10587);
} else {
}


var G__10588 = cljs.core.next(seq__6745_10581__$1);
var G__10589 = null;
var G__10590 = (0);
var G__10591 = (0);
seq__6745_10571 = G__10588;
chunk__6746_10572 = G__10589;
count__6747_10573 = G__10590;
i__6748_10574 = G__10591;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6753){
var map__6754 = p__6753;
var map__6754__$1 = cljs.core.__destructure_map(map__6754);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6754__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6754__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6755){
var map__6756 = p__6755;
var map__6756__$1 = cljs.core.__destructure_map(map__6756);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6756__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6756__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6763 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6764 = null;
var count__6765 = (0);
var i__6766 = (0);
while(true){
if((i__6766 < count__6765)){
var vec__6777 = chunk__6764.cljs$core$IIndexed$_nth$arity$2(null,i__6766);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6777,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6777,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10592 = seq__6763;
var G__10593 = chunk__6764;
var G__10594 = count__6765;
var G__10595 = (i__6766 + (1));
seq__6763 = G__10592;
chunk__6764 = G__10593;
count__6765 = G__10594;
i__6766 = G__10595;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6763);
if(temp__5823__auto__){
var seq__6763__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6763__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6763__$1);
var G__10596 = cljs.core.chunk_rest(seq__6763__$1);
var G__10597 = c__5673__auto__;
var G__10598 = cljs.core.count(c__5673__auto__);
var G__10599 = (0);
seq__6763 = G__10596;
chunk__6764 = G__10597;
count__6765 = G__10598;
i__6766 = G__10599;
continue;
} else {
var vec__6780 = cljs.core.first(seq__6763__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10600 = cljs.core.next(seq__6763__$1);
var G__10601 = null;
var G__10602 = (0);
var G__10603 = (0);
seq__6763 = G__10600;
chunk__6764 = G__10601;
count__6765 = G__10602;
i__6766 = G__10603;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6783 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6784 = null;
var count__6785 = (0);
var i__6786 = (0);
while(true){
if((i__6786 < count__6785)){
var vec__6797 = chunk__6784.cljs$core$IIndexed$_nth$arity$2(null,i__6786);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6797,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6797,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10604 = seq__6783;
var G__10605 = chunk__6784;
var G__10606 = count__6785;
var G__10607 = (i__6786 + (1));
seq__6783 = G__10604;
chunk__6784 = G__10605;
count__6785 = G__10606;
i__6786 = G__10607;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6783);
if(temp__5823__auto__){
var seq__6783__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6783__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6783__$1);
var G__10608 = cljs.core.chunk_rest(seq__6783__$1);
var G__10609 = c__5673__auto__;
var G__10610 = cljs.core.count(c__5673__auto__);
var G__10611 = (0);
seq__6783 = G__10608;
chunk__6784 = G__10609;
count__6785 = G__10610;
i__6786 = G__10611;
continue;
} else {
var vec__6800 = cljs.core.first(seq__6783__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6800,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6800,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10612 = cljs.core.next(seq__6783__$1);
var G__10613 = null;
var G__10614 = (0);
var G__10615 = (0);
seq__6783 = G__10612;
chunk__6784 = G__10613;
count__6785 = G__10614;
i__6786 = G__10615;
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
var G__6807 = new_ctx;
var G__6808 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6809 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6807,G__6808,G__6809) : nex.interpreter.eval_body_with_rescue.call(null,G__6807,G__6808,G__6809));
} else {
var seq__6810 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6811 = null;
var count__6812 = (0);
var i__6813 = (0);
while(true){
if((i__6813 < count__6812)){
var stmt = chunk__6811.cljs$core$IIndexed$_nth$arity$2(null,i__6813);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10623 = seq__6810;
var G__10624 = chunk__6811;
var G__10625 = count__6812;
var G__10626 = (i__6813 + (1));
seq__6810 = G__10623;
chunk__6811 = G__10624;
count__6812 = G__10625;
i__6813 = G__10626;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6810);
if(temp__5823__auto__){
var seq__6810__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6810__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6810__$1);
var G__10627 = cljs.core.chunk_rest(seq__6810__$1);
var G__10629 = c__5673__auto__;
var G__10630 = cljs.core.count(c__5673__auto__);
var G__10631 = (0);
seq__6810 = G__10627;
chunk__6811 = G__10629;
count__6812 = G__10630;
i__6813 = G__10631;
continue;
} else {
var stmt = cljs.core.first(seq__6810__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10632 = cljs.core.next(seq__6810__$1);
var G__10633 = null;
var G__10634 = (0);
var G__10635 = (0);
seq__6810 = G__10632;
chunk__6811 = G__10633;
count__6812 = G__10634;
i__6813 = G__10635;
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
}catch (e6818){var ___$5 = e6818;
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
}catch (e6819){var ___$5 = e6819;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___10636 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___10636)){
var tgt_10637 = temp__5823__auto___10636;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_10637,updated_obj);
}catch (e6820){var __10638__$5 = e6820;
}} else {
}

var seq__6821_10639 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__6822_10640 = null;
var count__6823_10641 = (0);
var i__6824_10642 = (0);
while(true){
if((i__6824_10642 < count__6823_10641)){
var vec__6837_10643 = chunk__6822_10640.cljs$core$IIndexed$_nth$arity$2(null,i__6824_10642);
var field_name_10644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6837_10643,(0),null);
var field_val_10645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6837_10643,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_10644))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_10644),field_val_10645);
}catch (e6840){var __10646__$5 = e6840;
}} else {
}


var G__10647 = seq__6821_10639;
var G__10648 = chunk__6822_10640;
var G__10649 = count__6823_10641;
var G__10650 = (i__6824_10642 + (1));
seq__6821_10639 = G__10647;
chunk__6822_10640 = G__10648;
count__6823_10641 = G__10649;
i__6824_10642 = G__10650;
continue;
} else {
var temp__5823__auto___10651 = cljs.core.seq(seq__6821_10639);
if(temp__5823__auto___10651){
var seq__6821_10652__$1 = temp__5823__auto___10651;
if(cljs.core.chunked_seq_QMARK_(seq__6821_10652__$1)){
var c__5673__auto___10653 = cljs.core.chunk_first(seq__6821_10652__$1);
var G__10654 = cljs.core.chunk_rest(seq__6821_10652__$1);
var G__10655 = c__5673__auto___10653;
var G__10656 = cljs.core.count(c__5673__auto___10653);
var G__10657 = (0);
seq__6821_10639 = G__10654;
chunk__6822_10640 = G__10655;
count__6823_10641 = G__10656;
i__6824_10642 = G__10657;
continue;
} else {
var vec__6841_10658 = cljs.core.first(seq__6821_10652__$1);
var field_name_10659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6841_10658,(0),null);
var field_val_10660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6841_10658,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_10659))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_10659),field_val_10660);
}catch (e6844){var __10661__$5 = e6844;
}} else {
}


var G__10662 = cljs.core.next(seq__6821_10652__$1);
var G__10663 = null;
var G__10664 = (0);
var G__10665 = (0);
seq__6821_10639 = G__10662;
chunk__6822_10640 = G__10663;
count__6823_10641 = G__10664;
i__6824_10642 = G__10665;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6849){
var map__6850 = p__6849;
var map__6850__$1 = cljs.core.__destructure_map(map__6850);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6850__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6850__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6850__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6850__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args));
} else {
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6845_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6845_SHARP_);
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
var _ = (function (){var seq__6863 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6864 = null;
var count__6865 = (0);
var i__6866 = (0);
while(true){
if((i__6866 < count__6865)){
var vec__6873 = chunk__6864.cljs$core$IIndexed$_nth$arity$2(null,i__6866);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6873,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6873,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10668 = seq__6863;
var G__10669 = chunk__6864;
var G__10670 = count__6865;
var G__10671 = (i__6866 + (1));
seq__6863 = G__10668;
chunk__6864 = G__10669;
count__6865 = G__10670;
i__6866 = G__10671;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6863);
if(temp__5823__auto__){
var seq__6863__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6863__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6863__$1);
var G__10672 = cljs.core.chunk_rest(seq__6863__$1);
var G__10673 = c__5673__auto__;
var G__10674 = cljs.core.count(c__5673__auto__);
var G__10675 = (0);
seq__6863 = G__10672;
chunk__6864 = G__10673;
count__6865 = G__10674;
i__6866 = G__10675;
continue;
} else {
var vec__6876 = cljs.core.first(seq__6863__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6876,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6876,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10676 = cljs.core.next(seq__6863__$1);
var G__10677 = null;
var G__10678 = (0);
var G__10679 = (0);
seq__6863 = G__10676;
chunk__6864 = G__10677;
count__6865 = G__10678;
i__6866 = G__10679;
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
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6883 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6884 = null;
var count__6885 = (0);
var i__6886 = (0);
while(true){
if((i__6886 < count__6885)){
var vec__6893 = chunk__6884.cljs$core$IIndexed$_nth$arity$2(null,i__6886);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6893,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6893,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10680 = seq__6883;
var G__10681 = chunk__6884;
var G__10682 = count__6885;
var G__10683 = (i__6886 + (1));
seq__6883 = G__10680;
chunk__6884 = G__10681;
count__6885 = G__10682;
i__6886 = G__10683;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6883);
if(temp__5823__auto__){
var seq__6883__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6883__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6883__$1);
var G__10684 = cljs.core.chunk_rest(seq__6883__$1);
var G__10685 = c__5673__auto__;
var G__10686 = cljs.core.count(c__5673__auto__);
var G__10687 = (0);
seq__6883 = G__10684;
chunk__6884 = G__10685;
count__6885 = G__10686;
i__6886 = G__10687;
continue;
} else {
var vec__6900 = cljs.core.first(seq__6883__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6900,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6900,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10688 = cljs.core.next(seq__6883__$1);
var G__10689 = null;
var G__10690 = (0);
var G__10691 = (0);
seq__6883 = G__10688;
chunk__6884 = G__10689;
count__6885 = G__10690;
i__6886 = G__10691;
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
var G__6903 = new_ctx;
var G__6904 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6905 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6903,G__6904,G__6905) : nex.interpreter.eval_body_with_rescue.call(null,G__6903,G__6904,G__6905));
} else {
var seq__6906 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6907 = null;
var count__6908 = (0);
var i__6909 = (0);
while(true){
if((i__6909 < count__6908)){
var stmt = chunk__6907.cljs$core$IIndexed$_nth$arity$2(null,i__6909);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10717 = seq__6906;
var G__10718 = chunk__6907;
var G__10719 = count__6908;
var G__10720 = (i__6909 + (1));
seq__6906 = G__10717;
chunk__6907 = G__10718;
count__6908 = G__10719;
i__6909 = G__10720;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6906);
if(temp__5823__auto__){
var seq__6906__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6906__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6906__$1);
var G__10727 = cljs.core.chunk_rest(seq__6906__$1);
var G__10728 = c__5673__auto__;
var G__10729 = cljs.core.count(c__5673__auto__);
var G__10730 = (0);
seq__6906 = G__10727;
chunk__6907 = G__10728;
count__6908 = G__10729;
i__6909 = G__10730;
continue;
} else {
var stmt = cljs.core.first(seq__6906__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10737 = cljs.core.next(seq__6906__$1);
var G__10738 = null;
var G__10739 = (0);
var G__10740 = (0);
seq__6906 = G__10737;
chunk__6907 = G__10738;
count__6908 = G__10739;
i__6909 = G__10740;
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
}catch (e6914){var ___$7 = e6914;
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
}catch (e6915){var ___$7 = e6915;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6920){var ___$7 = e6920;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___10746 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___10746)){
var ensure_assertions_10747 = temp__5823__auto___10746;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_10747,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6921){var e = e6921;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6848_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6848_SHARP_),method);
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
}catch (e6926){var _ = e6926;
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
}catch (e6927){var _ = e6927;
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6932 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6933 = null;
var count__6934 = (0);
var i__6935 = (0);
while(true){
if((i__6935 < count__6934)){
var vec__6942 = chunk__6933.cljs$core$IIndexed$_nth$arity$2(null,i__6935);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__10748 = seq__6932;
var G__10749 = chunk__6933;
var G__10750 = count__6934;
var G__10751 = (i__6935 + (1));
seq__6932 = G__10748;
chunk__6933 = G__10749;
count__6934 = G__10750;
i__6935 = G__10751;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6932);
if(temp__5823__auto__){
var seq__6932__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6932__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6932__$1);
var G__10756 = cljs.core.chunk_rest(seq__6932__$1);
var G__10757 = c__5673__auto__;
var G__10758 = cljs.core.count(c__5673__auto__);
var G__10759 = (0);
seq__6932 = G__10756;
chunk__6933 = G__10757;
count__6934 = G__10758;
i__6935 = G__10759;
continue;
} else {
var vec__6949 = cljs.core.first(seq__6932__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6949,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6949,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__10760 = cljs.core.next(seq__6932__$1);
var G__10761 = null;
var G__10762 = (0);
var G__10763 = (0);
seq__6932 = G__10760;
chunk__6933 = G__10761;
count__6934 = G__10762;
i__6935 = G__10763;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6954){
var map__6956 = p__6954;
var map__6956__$1 = cljs.core.__destructure_map(map__6956);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6956__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6956__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6956__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___10772 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___10772)){
var current_class_name_10773 = temp__5823__auto___10772;
var temp__5823__auto___10774__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_10773);
if(cljs.core.truth_(temp__5823__auto___10774__$1)){
var class_def_10775 = temp__5823__auto___10774__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_10775,field))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___10776 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___10776)){
var mf_10777 = temp__5823__auto___10776;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_10777,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6958){
var map__6959 = p__6958;
var map__6959__$1 = cljs.core.__destructure_map(map__6959);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6959__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6959__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___10778 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___10778)){
var current_class_name_10779 = temp__5823__auto___10778;
var temp__5823__auto___10780__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_10779);
if(cljs.core.truth_(temp__5823__auto___10780__$1)){
var class_def_10781 = temp__5823__auto___10780__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_10781,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6965 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6965.cljs$core$IFn$_invoke$arity$1 ? fexpr__6965.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6965.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6968){
var map__6969 = p__6968;
var map__6969__$1 = cljs.core.__destructure_map(map__6969);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6969__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6974 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6974.cljs$core$IFn$_invoke$arity$1 ? fexpr__6974.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6974.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6975_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6975_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6976){
var map__6977 = p__6976;
var map__6977__$1 = cljs.core.__destructure_map(map__6977);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6977__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

try{var seq__6992_10784 = cljs.core.seq(body);
var chunk__6993_10785 = null;
var count__6994_10786 = (0);
var i__6995_10787 = (0);
while(true){
if((i__6995_10787 < count__6994_10786)){
var stmt_10788 = chunk__6993_10785.cljs$core$IIndexed$_nth$arity$2(null,i__6995_10787);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_10788);


var G__10789 = seq__6992_10784;
var G__10790 = chunk__6993_10785;
var G__10791 = count__6994_10786;
var G__10792 = (i__6995_10787 + (1));
seq__6992_10784 = G__10789;
chunk__6993_10785 = G__10790;
count__6994_10786 = G__10791;
i__6995_10787 = G__10792;
continue;
} else {
var temp__5823__auto___10793 = cljs.core.seq(seq__6992_10784);
if(temp__5823__auto___10793){
var seq__6992_10794__$1 = temp__5823__auto___10793;
if(cljs.core.chunked_seq_QMARK_(seq__6992_10794__$1)){
var c__5673__auto___10795 = cljs.core.chunk_first(seq__6992_10794__$1);
var G__10796 = cljs.core.chunk_rest(seq__6992_10794__$1);
var G__10797 = c__5673__auto___10795;
var G__10798 = cljs.core.count(c__5673__auto___10795);
var G__10799 = (0);
seq__6992_10784 = G__10796;
chunk__6993_10785 = G__10797;
count__6994_10786 = G__10798;
i__6995_10787 = G__10799;
continue;
} else {
var stmt_10800 = cljs.core.first(seq__6992_10794__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_10800);


var G__10801 = cljs.core.next(seq__6992_10794__$1);
var G__10802 = null;
var G__10803 = (0);
var G__10804 = (0);
seq__6992_10784 = G__10801;
chunk__6993_10785 = G__10802;
count__6994_10786 = G__10803;
i__6995_10787 = G__10804;
continue;
}
} else {
}
}
break;
}
}catch (e6978){var e_10805 = e6978;
if((((e_10805 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_10805)))))){
throw e_10805;
} else {
var exc_value_10807 = (((((e_10805 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_10805))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_10805)):e_10805.message);
var rescue_env_10808 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __10809 = nex.interpreter.env_define(rescue_env_10808,"exception",exc_value_10807);
var rescue_ctx_10810 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_10808);
try{var seq__6981_10811 = cljs.core.seq(rescue);
var chunk__6982_10812 = null;
var count__6983_10813 = (0);
var i__6985_10814 = (0);
while(true){
if((i__6985_10814 < count__6983_10813)){
var stmt_10815 = chunk__6982_10812.cljs$core$IIndexed$_nth$arity$2(null,i__6985_10814);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_10810,stmt_10815);


var G__10816 = seq__6981_10811;
var G__10817 = chunk__6982_10812;
var G__10818 = count__6983_10813;
var G__10819 = (i__6985_10814 + (1));
seq__6981_10811 = G__10816;
chunk__6982_10812 = G__10817;
count__6983_10813 = G__10818;
i__6985_10814 = G__10819;
continue;
} else {
var temp__5823__auto___10820 = cljs.core.seq(seq__6981_10811);
if(temp__5823__auto___10820){
var seq__6981_10821__$1 = temp__5823__auto___10820;
if(cljs.core.chunked_seq_QMARK_(seq__6981_10821__$1)){
var c__5673__auto___10822 = cljs.core.chunk_first(seq__6981_10821__$1);
var G__10823 = cljs.core.chunk_rest(seq__6981_10821__$1);
var G__10824 = c__5673__auto___10822;
var G__10825 = cljs.core.count(c__5673__auto___10822);
var G__10826 = (0);
seq__6981_10811 = G__10823;
chunk__6982_10812 = G__10824;
count__6983_10813 = G__10825;
i__6985_10814 = G__10826;
continue;
} else {
var stmt_10827 = cljs.core.first(seq__6981_10821__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_10810,stmt_10827);


var G__10835 = cljs.core.next(seq__6981_10821__$1);
var G__10836 = null;
var G__10837 = (0);
var G__10838 = (0);
seq__6981_10811 = G__10835;
chunk__6982_10812 = G__10836;
count__6983_10813 = G__10837;
i__6985_10814 = G__10838;
continue;
}
} else {
}
}
break;
}

throw e_10805;
}catch (e6979){var re_10839 = e6979;
if((((re_10839 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_10839)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_10839;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__7001){
var map__7002 = p__7001;
var map__7002__$1 = cljs.core.__destructure_map(map__7002);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7002__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7002__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7000_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__7000_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__7007){
var map__7008 = p__7007;
var map__7008__$1 = cljs.core.__destructure_map(map__7008);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7008__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__7009){
var map__7010 = p__7009;
var map__7010__$1 = cljs.core.__destructure_map(map__7010);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7010__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7010__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7010__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__7014){
var map__7015 = p__7014;
var map__7015__$1 = cljs.core.__destructure_map(map__7015);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7015__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7011_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7011_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7012_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7012_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7013_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7013_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__7021){
var map__7022 = p__7021;
var map__7022__$1 = cljs.core.__destructure_map(map__7022);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7022__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7022__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7022__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__7028 = cljs.core.first(cs);
var map__7028__$1 = cljs.core.__destructure_map(map__7028);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__7028,map__7028__$1,values,body,val,map__7022,map__7022__$1,expr,clauses,else$){
return (function (p1__7020_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7020_SHARP_));
});})(cs,map__7028,map__7028__$1,values,body,val,map__7022,map__7022__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__10840 = cljs.core.rest(cs);
cs = G__10840;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function (ctx,p__7032){
var map__7033 = p__7032;
var map__7033__$1 = cljs.core.__destructure_map(map__7033);
var node = map__7033__$1;
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7033__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7033__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7033__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var prepared = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7029_SHARP_){
return nex.interpreter.prepare_select_clause(ctx,p1__7029_SHARP_);
}),clauses);
var timeout_ms_val = (cljs.core.truth_(timeout)?nex.interpreter.timeout_ms(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout))):null);
var deadline = (cljs.core.truth_(timeout_ms_val)?(nex.interpreter.current_time_ms() + timeout_ms_val):null);
while(true){
var temp__5821__auto__ = cljs.core.some(((function (prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout){
return (function (prepared_clause){
var temp__5823__auto__ = nex.interpreter.attempt_select_clause(prepared_clause);
if(cljs.core.truth_(temp__5823__auto__)){
var outcome = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prepared_clause,outcome], null);
} else {
return null;
}
});})(prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout))
,prepared);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__7038 = temp__5821__auto__;
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7038,(0),null);
var outcome = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7038,(1),null);
return nex.interpreter.execute_select_body(ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(outcome));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout){
return (function (p1__7030_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7030_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout))
,else$));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = deadline;
if(cljs.core.truth_(and__5140__auto__)){
return (nex.interpreter.current_time_ms() >= deadline);
} else {
return and__5140__auto__;
}
})())){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (temp__5821__auto__,prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout){
return (function (p1__7031_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7031_SHARP_);
});})(temp__5821__auto__,prepared,timeout_ms_val,deadline,map__7033,map__7033__$1,node,clauses,else$,timeout))
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__7042){
var map__7043 = p__7042;
var map__7043__$1 = cljs.core.__destructure_map(map__7043);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__7044_10841 = cljs.core.seq(init);
var chunk__7045_10842 = null;
var count__7046_10843 = (0);
var i__7047_10844 = (0);
while(true){
if((i__7047_10844 < count__7046_10843)){
var stmt_10845 = chunk__7045_10842.cljs$core$IIndexed$_nth$arity$2(null,i__7047_10844);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_10845);


var G__10846 = seq__7044_10841;
var G__10847 = chunk__7045_10842;
var G__10848 = count__7046_10843;
var G__10849 = (i__7047_10844 + (1));
seq__7044_10841 = G__10846;
chunk__7045_10842 = G__10847;
count__7046_10843 = G__10848;
i__7047_10844 = G__10849;
continue;
} else {
var temp__5823__auto___10850 = cljs.core.seq(seq__7044_10841);
if(temp__5823__auto___10850){
var seq__7044_10851__$1 = temp__5823__auto___10850;
if(cljs.core.chunked_seq_QMARK_(seq__7044_10851__$1)){
var c__5673__auto___10852 = cljs.core.chunk_first(seq__7044_10851__$1);
var G__10853 = cljs.core.chunk_rest(seq__7044_10851__$1);
var G__10854 = c__5673__auto___10852;
var G__10855 = cljs.core.count(c__5673__auto___10852);
var G__10856 = (0);
seq__7044_10841 = G__10853;
chunk__7045_10842 = G__10854;
count__7046_10843 = G__10855;
i__7047_10844 = G__10856;
continue;
} else {
var stmt_10857 = cljs.core.first(seq__7044_10851__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_10857);


var G__10858 = cljs.core.next(seq__7044_10851__$1);
var G__10859 = null;
var G__10860 = (0);
var G__10861 = (0);
seq__7044_10841 = G__10858;
chunk__7045_10842 = G__10859;
count__7046_10843 = G__10860;
i__7047_10844 = G__10861;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__7043,map__7043__$1,init,invariant,variant,until,body){
return (function (p1__7041_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__7041_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__7043,map__7043__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__10862 = result;
var G__10863 = curr_variant;
var G__10864 = (iteration + (1));
last_result = G__10862;
prev_variant = G__10863;
iteration = G__10864;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__7056){
var map__7057 = p__7056;
var map__7057__$1 = cljs.core.__destructure_map(map__7057);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7057__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7057__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7057__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__7058){
var map__7059 = p__7058;
var map__7059__$1 = cljs.core.__destructure_map(map__7059);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7059__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7059__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__7062){
var map__7063 = p__7062;
var map__7063__$1 = cljs.core.__destructure_map(map__7063);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7063__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__7064){
var map__7065 = p__7064;
var map__7065__$1 = cljs.core.__destructure_map(map__7065);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7065__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__7067){
var map__7068 = p__7067;
var map__7068__$1 = cljs.core.__destructure_map(map__7068);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7068__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__7069){
var map__7070 = p__7069;
var map__7070__$1 = cljs.core.__destructure_map(map__7070);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7070__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__7071){
var map__7072 = p__7071;
var map__7072__$1 = cljs.core.__destructure_map(map__7072);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7072__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__7074){
var map__7075 = p__7074;
var map__7075__$1 = cljs.core.__destructure_map(map__7075);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7075__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7073_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7073_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),(function (ctx,p__7081){
var map__7082 = p__7081;
var map__7082__$1 = cljs.core.__destructure_map(map__7082);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7082__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_set_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7077_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7077_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__7084){
var map__7085 = p__7084;
var map__7085__$1 = cljs.core.__destructure_map(map__7085);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7085__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__7086){
var map__7087 = p__7086;
var map__7087__$1 = cljs.core.__destructure_map(map__7087);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__7088){
var map__7089 = p__7088;
var map__7089__$1 = cljs.core.__destructure_map(map__7089);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7089__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__7091){
var map__7092 = p__7091;
var map__7092__$1 = cljs.core.__destructure_map(map__7092);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e7093){var _ = e7093;
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
var G__7097 = ctx;
var G__7098 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__7097,G__7098) : nex.interpreter.get_all_fields.call(null,G__7097,G__7098));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7096_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7096_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__7096_SHARP_))));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7099_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__7099_SHARP_),constructor_name);
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
return cljs.core.some((function (p__7100){
var map__7101 = p__7100;
var map__7101__$1 = cljs.core.__destructure_map(map__7101);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7101__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__7114){
var map__7115 = p__7114;
var map__7115__$1 = cljs.core.__destructure_map(map__7115);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7115__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__7116 = class_name;
switch (G__7116) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7102_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7102_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7104_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7104_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7109_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7109_SHARP_);
}),args);
var G__7127 = constructor$;
switch (G__7127) {
case "with_title":
var G__7128 = cljs.core.count(arg_values);
switch (G__7128) {
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
var G__7129 = cljs.core.count(arg_values);
switch (G__7129) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7110_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7110_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7111_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7111_SHARP_);
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
var ___$1 = (function (){var seq__7152 = cljs.core.seq(initial_field_map);
var chunk__7153 = null;
var count__7154 = (0);
var i__7155 = (0);
while(true){
if((i__7155 < count__7154)){
var vec__7172 = chunk__7153.cljs$core$IIndexed$_nth$arity$2(null,i__7155);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7172,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7172,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__10869 = seq__7152;
var G__10870 = chunk__7153;
var G__10871 = count__7154;
var G__10872 = (i__7155 + (1));
seq__7152 = G__10869;
chunk__7153 = G__10870;
count__7154 = G__10871;
i__7155 = G__10872;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7152);
if(temp__5823__auto__){
var seq__7152__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7152__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7152__$1);
var G__10873 = cljs.core.chunk_rest(seq__7152__$1);
var G__10874 = c__5673__auto__;
var G__10875 = cljs.core.count(c__5673__auto__);
var G__10876 = (0);
seq__7152 = G__10873;
chunk__7153 = G__10874;
count__7154 = G__10875;
i__7155 = G__10876;
continue;
} else {
var vec__7178 = cljs.core.first(seq__7152__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7178,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7178,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__10877 = cljs.core.next(seq__7152__$1);
var G__10878 = null;
var G__10879 = (0);
var G__10880 = (0);
seq__7152 = G__10877;
chunk__7153 = G__10878;
count__7154 = G__10879;
i__7155 = G__10880;
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7112_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7112_SHARP_);
}),args);
var ___$3 = (cljs.core.truth_(params)?(function (){var seq__7188 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__7189 = null;
var count__7190 = (0);
var i__7191 = (0);
while(true){
if((i__7191 < count__7190)){
var vec__7204 = chunk__7189.cljs$core$IIndexed$_nth$arity$2(null,i__7191);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7204,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7204,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10881 = seq__7188;
var G__10882 = chunk__7189;
var G__10883 = count__7190;
var G__10884 = (i__7191 + (1));
seq__7188 = G__10881;
chunk__7189 = G__10882;
count__7190 = G__10883;
i__7191 = G__10884;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7188);
if(temp__5823__auto__){
var seq__7188__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7188__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7188__$1);
var G__10885 = cljs.core.chunk_rest(seq__7188__$1);
var G__10886 = c__5673__auto__;
var G__10887 = cljs.core.count(c__5673__auto__);
var G__10888 = (0);
seq__7188 = G__10885;
chunk__7189 = G__10886;
count__7190 = G__10887;
i__7191 = G__10888;
continue;
} else {
var vec__7213 = cljs.core.first(seq__7188__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7213,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7213,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10889 = cljs.core.next(seq__7188__$1);
var G__10890 = null;
var G__10891 = (0);
var G__10892 = (0);
seq__7188 = G__10889;
chunk__7189 = G__10890;
count__7190 = G__10891;
i__7191 = G__10892;
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
var seq__7229 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__7230 = null;
var count__7231 = (0);
var i__7232 = (0);
while(true){
if((i__7232 < count__7231)){
var stmt = chunk__7230.cljs$core$IIndexed$_nth$arity$2(null,i__7232);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10893 = seq__7229;
var G__10894 = chunk__7230;
var G__10895 = count__7231;
var G__10896 = (i__7232 + (1));
seq__7229 = G__10893;
chunk__7230 = G__10894;
count__7231 = G__10895;
i__7232 = G__10896;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7229);
if(temp__5823__auto__){
var seq__7229__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7229__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7229__$1);
var G__10897 = cljs.core.chunk_rest(seq__7229__$1);
var G__10898 = c__5673__auto__;
var G__10899 = cljs.core.count(c__5673__auto__);
var G__10900 = (0);
seq__7229 = G__10897;
chunk__7230 = G__10898;
count__7231 = G__10899;
i__7232 = G__10900;
continue;
} else {
var stmt = cljs.core.first(seq__7229__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__10901 = cljs.core.next(seq__7229__$1);
var G__10902 = null;
var G__10903 = (0);
var G__10904 = (0);
seq__7229 = G__10901;
chunk__7230 = G__10902;
count__7231 = G__10903;
i__7232 = G__10904;
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
}catch (e7246){var ___$6 = e7246;
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
var inv_env_10905 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __10906__$1 = (function (){var seq__7250 = cljs.core.seq(final_field_map);
var chunk__7251 = null;
var count__7252 = (0);
var i__7253 = (0);
while(true){
if((i__7253 < count__7252)){
var vec__7270 = chunk__7251.cljs$core$IIndexed$_nth$arity$2(null,i__7253);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7270,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7270,(1),null);
nex.interpreter.env_define(inv_env_10905,cljs.core.name(field_name),field_val);


var G__10908 = seq__7250;
var G__10909 = chunk__7251;
var G__10910 = count__7252;
var G__10911 = (i__7253 + (1));
seq__7250 = G__10908;
chunk__7251 = G__10909;
count__7252 = G__10910;
i__7253 = G__10911;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7250);
if(temp__5823__auto__){
var seq__7250__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7250__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7250__$1);
var G__10912 = cljs.core.chunk_rest(seq__7250__$1);
var G__10913 = c__5673__auto__;
var G__10914 = cljs.core.count(c__5673__auto__);
var G__10915 = (0);
seq__7250 = G__10912;
chunk__7251 = G__10913;
count__7252 = G__10914;
i__7253 = G__10915;
continue;
} else {
var vec__7276 = cljs.core.first(seq__7250__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7276,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7276,(1),null);
nex.interpreter.env_define(inv_env_10905,cljs.core.name(field_name),field_val);


var G__10916 = cljs.core.next(seq__7250__$1);
var G__10917 = null;
var G__10918 = (0);
var G__10919 = (0);
seq__7250 = G__10916;
chunk__7251 = G__10917;
count__7252 = G__10918;
i__7253 = G__10919;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_10907 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_10905);
nex.interpreter.check_class_invariant(inv_ctx_10907,class_def);

return obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"spawn","spawn",-1213583293),(function (ctx,p__7282){
var map__7283 = p__7282;
var map__7283__$1 = cljs.core.__destructure_map(map__7283);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7283__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__7294){
var map__7295 = p__7294;
var map__7295__$1 = cljs.core.__destructure_map(map__7295);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7295__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__7302 = cljs.core.seq(old_values);
var chunk__7303 = null;
var count__7304 = (0);
var i__7305 = (0);
while(true){
if((i__7305 < count__7304)){
var vec__7319 = chunk__7303.cljs$core$IIndexed$_nth$arity$2(null,i__7305);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7319,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7319,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__10920 = seq__7302;
var G__10921 = chunk__7303;
var G__10922 = count__7304;
var G__10923 = (i__7305 + (1));
seq__7302 = G__10920;
chunk__7303 = G__10921;
count__7304 = G__10922;
i__7305 = G__10923;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7302);
if(temp__5823__auto__){
var seq__7302__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7302__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7302__$1);
var G__10924 = cljs.core.chunk_rest(seq__7302__$1);
var G__10925 = c__5673__auto__;
var G__10926 = cljs.core.count(c__5673__auto__);
var G__10927 = (0);
seq__7302 = G__10924;
chunk__7303 = G__10925;
count__7304 = G__10926;
i__7305 = G__10927;
continue;
} else {
var vec__7328 = cljs.core.first(seq__7302__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7328,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7328,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__10928 = cljs.core.next(seq__7302__$1);
var G__10929 = null;
var G__10930 = (0);
var G__10931 = (0);
seq__7302 = G__10928;
chunk__7303 = G__10929;
count__7304 = G__10930;
i__7305 = G__10931;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__7334){
var map__7335 = p__7334;
var map__7335__$1 = cljs.core.__destructure_map(map__7335);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
}catch (e7343){var _ = e7343;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result")){
return nex.interpreter.env_lookup(env,"result");
} else {
var res = (function (){try{return nex.interpreter.env_lookup(env,"result");
}catch (e7347){var _ = e7347;
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
return nex.interpreter.promise_reduce(assertions,null,(function (_,p__7351){
var map__7352 = p__7351;
var map__7352__$1 = cljs.core.__destructure_map(map__7352);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7352__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7352__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
var vec__7387 = (function (){var temp__5821__auto__ = nex.interpreter.get_parent_classes(ctx,class_def__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7394,p__7395){
var vec__7396 = p__7394;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7396,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7396,(1),null);
var map__7399 = p__7395;
var map__7399__$1 = cljs.core.__destructure_map(map__7399);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7399__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__7403 = nex$interpreter$check_class_invariant_async_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7403,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7403,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7387,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7387,(1),null);
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
var vec__7409 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7409,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7409,(1),null);
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
var _ = (function (){var seq__7440 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__7441 = null;
var count__7442 = (0);
var i__7443 = (0);
while(true){
if((i__7443 < count__7442)){
var vec__7453 = chunk__7441.cljs$core$IIndexed$_nth$arity$2(null,i__7443);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7453,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7453,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10932 = seq__7440;
var G__10933 = chunk__7441;
var G__10934 = count__7442;
var G__10935 = (i__7443 + (1));
seq__7440 = G__10932;
chunk__7441 = G__10933;
count__7442 = G__10934;
i__7443 = G__10935;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7440);
if(temp__5823__auto__){
var seq__7440__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7440__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7440__$1);
var G__10936 = cljs.core.chunk_rest(seq__7440__$1);
var G__10937 = c__5673__auto__;
var G__10938 = cljs.core.count(c__5673__auto__);
var G__10939 = (0);
seq__7440 = G__10936;
chunk__7441 = G__10937;
count__7442 = G__10938;
i__7443 = G__10939;
continue;
} else {
var vec__7461 = cljs.core.first(seq__7440__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7461,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7461,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__10940 = cljs.core.next(seq__7440__$1);
var G__10941 = null;
var G__10942 = (0);
var G__10943 = (0);
seq__7440 = G__10940;
chunk__7441 = G__10941;
count__7442 = G__10942;
i__7443 = G__10943;
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
var ___$1 = (function (){var seq__7465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__7466 = null;
var count__7467 = (0);
var i__7468 = (0);
while(true){
if((i__7468 < count__7467)){
var vec__7477 = chunk__7466.cljs$core$IIndexed$_nth$arity$2(null,i__7468);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7477,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7477,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10944 = seq__7465;
var G__10945 = chunk__7466;
var G__10946 = count__7467;
var G__10947 = (i__7468 + (1));
seq__7465 = G__10944;
chunk__7466 = G__10945;
count__7467 = G__10946;
i__7468 = G__10947;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7465);
if(temp__5823__auto__){
var seq__7465__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7465__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7465__$1);
var G__10948 = cljs.core.chunk_rest(seq__7465__$1);
var G__10949 = c__5673__auto__;
var G__10950 = cljs.core.count(c__5673__auto__);
var G__10951 = (0);
seq__7465 = G__10948;
chunk__7466 = G__10949;
count__7467 = G__10950;
i__7468 = G__10951;
continue;
} else {
var vec__7480 = cljs.core.first(seq__7465__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7480,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7480,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__10952 = cljs.core.next(seq__7465__$1);
var G__10953 = null;
var G__10954 = (0);
var G__10955 = (0);
seq__7465 = G__10952;
chunk__7466 = G__10953;
count__7467 = G__10954;
i__7468 = G__10955;
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
}catch (e7488){var ___$5 = e7488;
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
var temp__5823__auto___10956 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___10956)){
var tgt_10957 = temp__5823__auto___10956;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_10957,updated_obj);
}catch (e7493){var __10958__$5 = e7493;
}} else {
}

var seq__7497_10959 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__7498_10960 = null;
var count__7499_10961 = (0);
var i__7500_10962 = (0);
while(true){
if((i__7500_10962 < count__7499_10961)){
var vec__7518_10963 = chunk__7498_10960.cljs$core$IIndexed$_nth$arity$2(null,i__7500_10962);
var field_name_10964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7518_10963,(0),null);
var field_val_10965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7518_10963,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_10964))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_10964),field_val_10965);
}catch (e7525){var __10966__$5 = e7525;
}} else {
}


var G__10967 = seq__7497_10959;
var G__10968 = chunk__7498_10960;
var G__10969 = count__7499_10961;
var G__10970 = (i__7500_10962 + (1));
seq__7497_10959 = G__10967;
chunk__7498_10960 = G__10968;
count__7499_10961 = G__10969;
i__7500_10962 = G__10970;
continue;
} else {
var temp__5823__auto___10971 = cljs.core.seq(seq__7497_10959);
if(temp__5823__auto___10971){
var seq__7497_10972__$1 = temp__5823__auto___10971;
if(cljs.core.chunked_seq_QMARK_(seq__7497_10972__$1)){
var c__5673__auto___10973 = cljs.core.chunk_first(seq__7497_10972__$1);
var G__10974 = cljs.core.chunk_rest(seq__7497_10972__$1);
var G__10975 = c__5673__auto___10973;
var G__10976 = cljs.core.count(c__5673__auto___10973);
var G__10977 = (0);
seq__7497_10959 = G__10974;
chunk__7498_10960 = G__10975;
count__7499_10961 = G__10976;
i__7500_10962 = G__10977;
continue;
} else {
var vec__7526_10978 = cljs.core.first(seq__7497_10972__$1);
var field_name_10979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7526_10978,(0),null);
var field_val_10980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7526_10978,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_10979))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_10979),field_val_10980);
}catch (e7529){var __10981__$5 = e7529;
}} else {
}


var G__10982 = cljs.core.next(seq__7497_10972__$1);
var G__10983 = null;
var G__10984 = (0);
var G__10985 = (0);
seq__7497_10959 = G__10982;
chunk__7498_10960 = G__10983;
count__7499_10961 = G__10984;
i__7500_10962 = G__10985;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spawn","spawn",-1213583293),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))){
return Promise.resolve((function (){var spawn_promise = Promise.resolve(null).then((function (_){
var spawn_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var ___$1 = nex.interpreter.env_define(spawn_env,"result",null);
var spawn_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),spawn_env);
return nex.interpreter.eval_body_async(spawn_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(node)).then((function (___$2){
return nex.interpreter.async_result_value(spawn_env);
}));
}));
return nex.interpreter.make_task(spawn_promise);
})());
} else {
var node_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"program","program",781564284))){
var map__7552 = node;
var map__7552__$1 = cljs.core.__destructure_map(map__7552);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7552__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__7554_10986 = cljs.core.seq(imports);
var chunk__7555_10987 = null;
var count__7556_10988 = (0);
var i__7557_10989 = (0);
while(true){
if((i__7557_10989 < count__7556_10988)){
var import_node_10990 = chunk__7555_10987.cljs$core$IIndexed$_nth$arity$2(null,i__7557_10989);
if(cljs.core.map_QMARK_(import_node_10990)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_10990);
} else {
}


var G__10991 = seq__7554_10986;
var G__10992 = chunk__7555_10987;
var G__10993 = count__7556_10988;
var G__10994 = (i__7557_10989 + (1));
seq__7554_10986 = G__10991;
chunk__7555_10987 = G__10992;
count__7556_10988 = G__10993;
i__7557_10989 = G__10994;
continue;
} else {
var temp__5823__auto___10995 = cljs.core.seq(seq__7554_10986);
if(temp__5823__auto___10995){
var seq__7554_10996__$1 = temp__5823__auto___10995;
if(cljs.core.chunked_seq_QMARK_(seq__7554_10996__$1)){
var c__5673__auto___10997 = cljs.core.chunk_first(seq__7554_10996__$1);
var G__10998 = cljs.core.chunk_rest(seq__7554_10996__$1);
var G__10999 = c__5673__auto___10997;
var G__11000 = cljs.core.count(c__5673__auto___10997);
var G__11001 = (0);
seq__7554_10986 = G__10998;
chunk__7555_10987 = G__10999;
count__7556_10988 = G__11000;
i__7557_10989 = G__11001;
continue;
} else {
var import_node_11002 = cljs.core.first(seq__7554_10996__$1);
if(cljs.core.map_QMARK_(import_node_11002)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_11002);
} else {
}


var G__11003 = cljs.core.next(seq__7554_10996__$1);
var G__11004 = null;
var G__11005 = (0);
var G__11006 = (0);
seq__7554_10986 = G__11003;
chunk__7555_10987 = G__11004;
count__7556_10988 = G__11005;
i__7557_10989 = G__11006;
continue;
}
} else {
}
}
break;
}

var seq__7565_11007 = cljs.core.seq(interns);
var chunk__7566_11008 = null;
var count__7567_11009 = (0);
var i__7568_11010 = (0);
while(true){
if((i__7568_11010 < count__7567_11009)){
var intern_node_11011 = chunk__7566_11008.cljs$core$IIndexed$_nth$arity$2(null,i__7568_11010);
if(cljs.core.map_QMARK_(intern_node_11011)){
nex.interpreter.process_intern(ctx,intern_node_11011);
} else {
}


var G__11012 = seq__7565_11007;
var G__11013 = chunk__7566_11008;
var G__11014 = count__7567_11009;
var G__11015 = (i__7568_11010 + (1));
seq__7565_11007 = G__11012;
chunk__7566_11008 = G__11013;
count__7567_11009 = G__11014;
i__7568_11010 = G__11015;
continue;
} else {
var temp__5823__auto___11016 = cljs.core.seq(seq__7565_11007);
if(temp__5823__auto___11016){
var seq__7565_11017__$1 = temp__5823__auto___11016;
if(cljs.core.chunked_seq_QMARK_(seq__7565_11017__$1)){
var c__5673__auto___11018 = cljs.core.chunk_first(seq__7565_11017__$1);
var G__11019 = cljs.core.chunk_rest(seq__7565_11017__$1);
var G__11020 = c__5673__auto___11018;
var G__11021 = cljs.core.count(c__5673__auto___11018);
var G__11022 = (0);
seq__7565_11007 = G__11019;
chunk__7566_11008 = G__11020;
count__7567_11009 = G__11021;
i__7568_11010 = G__11022;
continue;
} else {
var intern_node_11023 = cljs.core.first(seq__7565_11017__$1);
if(cljs.core.map_QMARK_(intern_node_11023)){
nex.interpreter.process_intern(ctx,intern_node_11023);
} else {
}


var G__11024 = cljs.core.next(seq__7565_11017__$1);
var G__11025 = null;
var G__11026 = (0);
var G__11027 = (0);
seq__7565_11007 = G__11024;
chunk__7566_11008 = G__11025;
count__7567_11009 = G__11026;
i__7568_11010 = G__11027;
continue;
}
} else {
}
}
break;
}

var seq__7574_11028 = cljs.core.seq(classes);
var chunk__7575_11029 = null;
var count__7576_11030 = (0);
var i__7577_11031 = (0);
while(true){
if((i__7577_11031 < count__7576_11030)){
var class_node_11032 = chunk__7575_11029.cljs$core$IIndexed$_nth$arity$2(null,i__7577_11031);
if(cljs.core.map_QMARK_(class_node_11032)){
nex.interpreter.register_class(ctx,class_node_11032);
} else {
}


var G__11033 = seq__7574_11028;
var G__11034 = chunk__7575_11029;
var G__11035 = count__7576_11030;
var G__11036 = (i__7577_11031 + (1));
seq__7574_11028 = G__11033;
chunk__7575_11029 = G__11034;
count__7576_11030 = G__11035;
i__7577_11031 = G__11036;
continue;
} else {
var temp__5823__auto___11037 = cljs.core.seq(seq__7574_11028);
if(temp__5823__auto___11037){
var seq__7574_11038__$1 = temp__5823__auto___11037;
if(cljs.core.chunked_seq_QMARK_(seq__7574_11038__$1)){
var c__5673__auto___11039 = cljs.core.chunk_first(seq__7574_11038__$1);
var G__11040 = cljs.core.chunk_rest(seq__7574_11038__$1);
var G__11041 = c__5673__auto___11039;
var G__11042 = cljs.core.count(c__5673__auto___11039);
var G__11043 = (0);
seq__7574_11028 = G__11040;
chunk__7575_11029 = G__11041;
count__7576_11030 = G__11042;
i__7577_11031 = G__11043;
continue;
} else {
var class_node_11044 = cljs.core.first(seq__7574_11038__$1);
if(cljs.core.map_QMARK_(class_node_11044)){
nex.interpreter.register_class(ctx,class_node_11044);
} else {
}


var G__11045 = cljs.core.next(seq__7574_11038__$1);
var G__11046 = null;
var G__11047 = (0);
var G__11048 = (0);
seq__7574_11028 = G__11045;
chunk__7575_11029 = G__11046;
count__7576_11030 = G__11047;
i__7577_11031 = G__11048;
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
var map__7591 = node;
var map__7591__$1 = cljs.core.__destructure_map(map__7591);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7591__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7591__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7591__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return Promise.resolve(obj);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318))){
var map__7595 = node;
var map__7595__$1 = cljs.core.__destructure_map(map__7595);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7595__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7595__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

return Promise.resolve(nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$3(class_name,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"call","call",-519999866))){
var map__7596 = node;
var map__7596__$1 = cljs.core.__destructure_map(map__7596);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7596__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7596__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7596__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7596__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__7597 = ctx;
var G__7598 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7597,G__7598) : nex.interpreter.eval_node_async.call(null,G__7597,G__7598));
} else {
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7530_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__7530_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__7530_SHARP_));
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

var all_fields_11049 = nex.interpreter.get_all_fields(ctx,class_def);
var effective_require_11050 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(method_lookup);
var effective_ensure_11051 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(method_lookup);
var has_postconditions_QMARK__11052 = cljs.core.seq(effective_ensure_11051);
var old_values_11053 = ((has_postconditions_QMARK__11052)?new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj):null);
var method_env_11054 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx);
}
})());
var param_names_11055 = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),params));
var __11056 = (function (){var seq__7599 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__7600 = null;
var count__7601 = (0);
var i__7602 = (0);
while(true){
if((i__7602 < count__7601)){
var vec__7609 = chunk__7600.cljs$core$IIndexed$_nth$arity$2(null,i__7602);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7609,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7609,(1),null);
nex.interpreter.env_define(method_env_11054,cljs.core.name(field_name),field_val);


var G__11065 = seq__7599;
var G__11066 = chunk__7600;
var G__11067 = count__7601;
var G__11068 = (i__7602 + (1));
seq__7599 = G__11065;
chunk__7600 = G__11066;
count__7601 = G__11067;
i__7602 = G__11068;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7599);
if(temp__5823__auto__){
var seq__7599__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7599__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7599__$1);
var G__11069 = cljs.core.chunk_rest(seq__7599__$1);
var G__11070 = c__5673__auto__;
var G__11071 = cljs.core.count(c__5673__auto__);
var G__11072 = (0);
seq__7599 = G__11069;
chunk__7600 = G__11070;
count__7601 = G__11071;
i__7602 = G__11072;
continue;
} else {
var vec__7612 = cljs.core.first(seq__7599__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7612,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7612,(1),null);
nex.interpreter.env_define(method_env_11054,cljs.core.name(field_name),field_val);


var G__11073 = cljs.core.next(seq__7599__$1);
var G__11074 = null;
var G__11075 = (0);
var G__11076 = (0);
seq__7599 = G__11073;
chunk__7600 = G__11074;
count__7601 = G__11075;
i__7602 = G__11076;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __11057__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,method_env_11054,class_def);
var __11058__$2 = (function (){var seq__7615 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__7616 = null;
var count__7617 = (0);
var i__7618 = (0);
while(true){
if((i__7618 < count__7617)){
var vec__7625 = chunk__7616.cljs$core$IIndexed$_nth$arity$2(null,i__7618);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7625,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7625,(1),null);
nex.interpreter.env_define(method_env_11054,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__11077 = seq__7615;
var G__11078 = chunk__7616;
var G__11079 = count__7617;
var G__11080 = (i__7618 + (1));
seq__7615 = G__11077;
chunk__7616 = G__11078;
count__7617 = G__11079;
i__7618 = G__11080;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7615);
if(temp__5823__auto__){
var seq__7615__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7615__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7615__$1);
var G__11081 = cljs.core.chunk_rest(seq__7615__$1);
var G__11082 = c__5673__auto__;
var G__11083 = cljs.core.count(c__5673__auto__);
var G__11084 = (0);
seq__7615 = G__11081;
chunk__7616 = G__11082;
count__7617 = G__11083;
i__7618 = G__11084;
continue;
} else {
var vec__7629 = cljs.core.first(seq__7615__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7629,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7629,(1),null);
nex.interpreter.env_define(method_env_11054,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__11085 = cljs.core.next(seq__7615__$1);
var G__11086 = null;
var G__11087 = (0);
var G__11088 = (0);
seq__7615 = G__11085;
chunk__7616 = G__11086;
count__7617 = G__11087;
i__7618 = G__11088;
continue;
}
} else {
return null;
}
}
break;
}
})();
var modified_fields_11059 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var return_type_11060 = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_def);
var default_result_11061 = (cljs.core.truth_(return_type_11060)?nex.interpreter.get_default_field_value(return_type_11060):null);
var __11062__$3 = nex.interpreter.env_define(method_env_11054,"result",default_result_11061);
var __11063__$4 = nex.interpreter.env_define(method_env_11054,"this",obj);
var new_ctx_11064 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env_11054),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),method),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values_11053),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields_11059),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"env","env",-1815813235),method_env_11054,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params;
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
nex.interpreter.__GT_promise((cljs.core.truth_(effective_require_11050)?nex.interpreter.check_assertions_async(new_ctx_11064,effective_require_11050,nex.interpreter.Precondition):null)).then((function (___$5){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_11064,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_11064,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
}
})()).then((function (___$6){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
if(((cljs.core.contains_QMARK_(param_names_11055,field_name)) && ((!(cljs.core.contains_QMARK_(cljs.core.deref(modified_fields_11059),field_name)))))){
return m;
} else {
var val = (function (){try{return nex.interpreter.env_lookup(method_env_11054,field_name);
}catch (e7632){var ___$7 = e7632;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}
}),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj),all_fields_11049);
var updated_obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj),updated_fields);
var result = nex.interpreter.async_result_value(method_env_11054);
return nex.interpreter.__GT_promise((cljs.core.truth_(effective_ensure_11051)?nex.interpreter.check_assertions_async(new_ctx_11064,effective_ensure_11051,nex.interpreter.Postcondition):null)).then((function (___$7){
return nex.interpreter.check_class_invariant_async(new_ctx_11064,class_def).then((function (___$8){
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
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__7535_SHARP_),method);
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
var G__7633 = ctx;
var G__7634 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"value","value",305978217),field_val], null),new cljs.core.Keyword(null,"method","method",55703592),call_method,new cljs.core.Keyword(null,"args","args",1315556576),literal_args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7633,G__7634) : nex.interpreter.eval_node_async.call(null,G__7633,G__7634));
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
}catch (e7635){var _ = e7635;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn_obj,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
if(nex.interpreter.nex_object_QMARK_(fn_obj)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(has_parens,false)){
var G__7636 = ctx;
var G__7637 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),method,new cljs.core.Keyword(null,"method","method",55703592),(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7636,G__7637) : nex.interpreter.eval_node_async.call(null,G__7636,G__7637));
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
}catch (e7638){var _ = e7638;
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
return (function (){var G__7639 = ctx;
var G__7640 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7639,G__7640) : nex.interpreter.eval_node_async.call(null,G__7639,G__7640));
})().then((function (result){
var temp__5823__auto___11089 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___11089)){
var target_name_11090 = temp__5823__auto___11089;
var called_obj_11091 = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx)),target_name_11090);
if(cljs.core.truth_(called_obj_11091)){
var seq__7641_11092 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj_11091));
var chunk__7643_11093 = null;
var count__7644_11094 = (0);
var i__7645_11095 = (0);
while(true){
if((i__7645_11095 < count__7644_11094)){
var vec__7652_11096 = chunk__7643_11093.cljs$core$IIndexed$_nth$arity$2(null,i__7645_11095);
var field_name_11097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652_11096,(0),null);
var field_val_11098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652_11096,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_11097),field_val_11098);


var G__11099 = seq__7641_11092;
var G__11100 = chunk__7643_11093;
var G__11101 = count__7644_11094;
var G__11102 = (i__7645_11095 + (1));
seq__7641_11092 = G__11099;
chunk__7643_11093 = G__11100;
count__7644_11094 = G__11101;
i__7645_11095 = G__11102;
continue;
} else {
var temp__5823__auto___11103__$1 = cljs.core.seq(seq__7641_11092);
if(temp__5823__auto___11103__$1){
var seq__7641_11104__$1 = temp__5823__auto___11103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7641_11104__$1)){
var c__5673__auto___11105 = cljs.core.chunk_first(seq__7641_11104__$1);
var G__11106 = cljs.core.chunk_rest(seq__7641_11104__$1);
var G__11107 = c__5673__auto___11105;
var G__11108 = cljs.core.count(c__5673__auto___11105);
var G__11109 = (0);
seq__7641_11092 = G__11106;
chunk__7643_11093 = G__11107;
count__7644_11094 = G__11108;
i__7645_11095 = G__11109;
continue;
} else {
var vec__7655_11110 = cljs.core.first(seq__7641_11104__$1);
var field_name_11111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7655_11110,(0),null);
var field_val_11112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7655_11110,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name_11111),field_val_11112);


var G__11113 = cljs.core.next(seq__7641_11104__$1);
var G__11114 = null;
var G__11115 = (0);
var G__11116 = (0);
seq__7641_11092 = G__11113;
chunk__7643_11093 = G__11114;
count__7644_11094 = G__11115;
i__7645_11095 = G__11116;
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
return (function (){var G__7658 = ctx;
var G__7659 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7658,G__7659) : nex.interpreter.eval_node_async.call(null,G__7658,G__7659));
})().then((function (val){
var temp__5823__auto___11117 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___11117)){
var mf_11118 = temp__5823__auto___11117;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_11118,cljs.core.conj,new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node));
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(node),val);

return val;
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"assign","assign",-1590426222))){
return (function (){var G__7661 = ctx;
var G__7662 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7661,G__7662) : nex.interpreter.eval_node_async.call(null,G__7661,G__7662));
})().then((function (val){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("result",new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__","result");
} else {
}

return val;
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"let","let",-1282412701))){
return (function (){var G__7663 = ctx;
var G__7664 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7663,G__7664) : nex.interpreter.eval_node_async.call(null,G__7663,G__7664));
})().then((function (val){
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
return (function (){var G__7665 = ctx;
var G__7666 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7665,G__7666) : nex.interpreter.eval_node_async.call(null,G__7665,G__7666));
})().then((function (val){
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
return (function (){var G__7667 = ctx;
var G__7668 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7667,G__7668) : nex.interpreter.eval_node_async.call(null,G__7667,G__7668));
})().then((function (cond_val){
if(cljs.core.truth_(cond_val)){
var G__7669 = ctx;
var G__7670 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7669,G__7670) : nex.interpreter.eval_node_async.call(null,G__7669,G__7670));
} else {
var G__7671 = ctx;
var G__7672 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7671,G__7672) : nex.interpreter.eval_node_async.call(null,G__7671,G__7672));
}
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"convert","convert",912478626))){
return (function (){var G__7673 = ctx;
var G__7674 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7673,G__7674) : nex.interpreter.eval_node_async.call(null,G__7673,G__7674));
})().then((function (v){
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
return (function (){var G__7675 = ctx;
var G__7676 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7675,G__7676) : nex.interpreter.eval_node_async.call(null,G__7675,G__7676));
})().then((function (cond_val){
if(cljs.core.truth_(cond_val)){
return nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(node));
} else {
var eval_elseif = (function nex$interpreter$eval_node_async_$_eval_elseif(clauses){
if(cljs.core.empty_QMARK_(clauses)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node))){
return nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node));
} else {
return Promise.resolve(null);
}
} else {
return (function (){var G__7680 = ctx;
var G__7681 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7680,G__7681) : nex.interpreter.eval_node_async.call(null,G__7680,G__7681));
})().then((function (matched_QMARK_){
if(cljs.core.truth_(matched_QMARK_)){
return nex.interpreter.eval_body_async(ctx,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses)));
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
return (function (){var G__7682 = ctx;
var G__7683 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7682,G__7683) : nex.interpreter.eval_node_async.call(null,G__7682,G__7683));
})().then((function (val){
var match_clauses = (function nex$interpreter$eval_node_async_$_match_clauses(clauses){
if(cljs.core.empty_QMARK_(clauses)){
var temp__5821__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var else_node = temp__5821__auto__;
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,else_node) : nex.interpreter.eval_node_async.call(null,ctx,else_node));
} else {
return Promise.reject(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching case and no else clause",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),val], null)));
}
} else {
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7540_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__7540_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__7540_SHARP_));
}),new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses)))).then((function (values){
if(cljs.core.truth_(cljs.core.some((function (p1__7541_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,p1__7541_SHARP_);
}),values))){
var G__7686 = ctx;
var G__7687 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(clauses));
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7686,G__7687) : nex.interpreter.eval_node_async.call(null,G__7686,G__7687));
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
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7542_SHARP_){
return nex.interpreter.prepare_select_clause_async(ctx,p1__7542_SHARP_);
}),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(node))).then((function (prepared){
var timeout_ms_p = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5821__auto__)){
var timeout_node = temp__5821__auto__;
return (function (){var G__7688 = ctx;
var G__7689 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout_node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7688,G__7689) : nex.interpreter.eval_node_async.call(null,G__7688,G__7689));
})().then((function (v){
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
return (function (){var G__7694 = ctx;
var G__7695 = new cljs.core.Keyword(null,"until","until",-1189166390).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7694,G__7695) : nex.interpreter.eval_node_async.call(null,G__7694,G__7695));
})().then((function (until_val){
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
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"statement","statement",-32780863)),(function (){var G__7696 = ctx;
var G__7697 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7696,G__7697) : nex.interpreter.eval_node_async.call(null,G__7696,G__7697));
})(),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"binary","binary",-1802232288)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__7698 = ctx;
var G__7699 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7698,G__7699) : nex.interpreter.eval_node_async.call(null,G__7698,G__7699));
})(),(function (){var G__7700 = ctx;
var G__7701 = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7700,G__7701) : nex.interpreter.eval_node_async.call(null,G__7700,G__7701));
})()], null)).then((function (p__7702){
var vec__7703 = p__7702;
var left_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7703,(0),null);
var right_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7703,(1),null);
return nex.interpreter.apply_binary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),left_val,right_val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"unary","unary",-989314568)),(function (){var G__7706 = ctx;
var G__7707 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7706,G__7707) : nex.interpreter.eval_node_async.call(null,G__7706,G__7707));
})().then((function (val){
return nex.interpreter.apply_unary_op(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(node),val);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"integer","integer",-604721710)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"real","real",388296937)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"char","char",-641587586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"string","string",-1989541586)),Promise.resolve(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"nil","nil",99600501)),Promise.resolve(null),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7547_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__7547_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__7547_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_array_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7548_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__7548_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__7548_SHARP_));
}),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_set_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832)),nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7708){
var map__7709 = p__7708;
var map__7709__$1 = cljs.core.__destructure_map(map__7709);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"value","value",305978217));
return nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,key) : nex.interpreter.eval_node_async.call(null,ctx,key)),(nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,value) : nex.interpreter.eval_node_async.call(null,ctx,value))], null));
}),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(node))).then(nex.interpreter.nex_map_from),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"subscript","subscript",-1484665872)),nex.interpreter.promise_all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__7712 = ctx;
var G__7713 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7712,G__7713) : nex.interpreter.eval_node_async.call(null,G__7712,G__7713));
})(),(function (){var G__7714 = ctx;
var G__7715 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(node);
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(G__7714,G__7715) : nex.interpreter.eval_node_async.call(null,G__7714,G__7715));
})()], null)).then((function (p__7720){
var vec__7721 = p__7720;
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7721,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7721,(1),null);
return nex.interpreter.nex_coll_get(coll,idx);
})),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"identifier","identifier",-805503498)),Promise.resolve(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"create","create",-1301499256)),(function (){var map__7728 = node;
var map__7728__$1 = cljs.core.__destructure_map(map__7728);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return nex.interpreter.promise_all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7549_SHARP_){
return (nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node_async.cljs$core$IFn$_invoke$arity$2(ctx,p1__7549_SHARP_) : nex.interpreter.eval_node_async.call(null,ctx,p1__7549_SHARP_));
}),args)).then((function (arg_values){
var G__7731 = class_name;
switch (G__7731) {
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
var _ = (function (){var seq__7749 = cljs.core.seq(field_map);
var chunk__7750 = null;
var count__7751 = (0);
var i__7752 = (0);
while(true){
if((i__7752 < count__7751)){
var vec__7759 = chunk__7750.cljs$core$IIndexed$_nth$arity$2(null,i__7752);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7759,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7759,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__11120 = seq__7749;
var G__11121 = chunk__7750;
var G__11122 = count__7751;
var G__11123 = (i__7752 + (1));
seq__7749 = G__11120;
chunk__7750 = G__11121;
count__7751 = G__11122;
i__7752 = G__11123;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7749);
if(temp__5823__auto__){
var seq__7749__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7749__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7749__$1);
var G__11124 = cljs.core.chunk_rest(seq__7749__$1);
var G__11125 = c__5673__auto__;
var G__11126 = cljs.core.count(c__5673__auto__);
var G__11127 = (0);
seq__7749 = G__11124;
chunk__7750 = G__11125;
count__7751 = G__11126;
i__7752 = G__11127;
continue;
} else {
var vec__7762 = cljs.core.first(seq__7749__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
nex.interpreter.env_define(inv_env,cljs.core.name(field_name),field_val);


var G__11128 = cljs.core.next(seq__7749__$1);
var G__11129 = null;
var G__11130 = (0);
var G__11131 = (0);
seq__7749 = G__11128;
chunk__7750 = G__11129;
count__7751 = G__11130;
i__7752 = G__11131;
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

var ctor_env_11132 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __11133 = (function (){var seq__7765 = cljs.core.seq(initial_field_map);
var chunk__7766 = null;
var count__7767 = (0);
var i__7768 = (0);
while(true){
if((i__7768 < count__7767)){
var vec__7775 = chunk__7766.cljs$core$IIndexed$_nth$arity$2(null,i__7768);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7775,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7775,(1),null);
nex.interpreter.env_define(ctor_env_11132,cljs.core.name(field_name),field_val);


var G__11139 = seq__7765;
var G__11140 = chunk__7766;
var G__11141 = count__7767;
var G__11142 = (i__7768 + (1));
seq__7765 = G__11139;
chunk__7766 = G__11140;
count__7767 = G__11141;
i__7768 = G__11142;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7765);
if(temp__5823__auto__){
var seq__7765__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7765__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7765__$1);
var G__11143 = cljs.core.chunk_rest(seq__7765__$1);
var G__11144 = c__5673__auto__;
var G__11145 = cljs.core.count(c__5673__auto__);
var G__11146 = (0);
seq__7765 = G__11143;
chunk__7766 = G__11144;
count__7767 = G__11145;
i__7768 = G__11146;
continue;
} else {
var vec__7778 = cljs.core.first(seq__7765__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7778,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7778,(1),null);
nex.interpreter.env_define(ctor_env_11132,cljs.core.name(field_name),field_val);


var G__11147 = cljs.core.next(seq__7765__$1);
var G__11148 = null;
var G__11149 = (0);
var G__11150 = (0);
seq__7765 = G__11147;
chunk__7766 = G__11148;
count__7767 = G__11149;
i__7768 = G__11150;
continue;
}
} else {
return null;
}
}
break;
}
})();
var __11134__$1 = nex.interpreter.bind_class_constants_BANG_(ctx,ctor_env_11132,class_def);
var params_11135 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var __11136__$2 = (function (){var seq__7781 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params_11135,arg_values));
var chunk__7782 = null;
var count__7783 = (0);
var i__7784 = (0);
while(true){
if((i__7784 < count__7783)){
var vec__7791 = chunk__7782.cljs$core$IIndexed$_nth$arity$2(null,i__7784);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7791,(1),null);
nex.interpreter.env_define(ctor_env_11132,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__11151 = seq__7781;
var G__11152 = chunk__7782;
var G__11153 = count__7783;
var G__11154 = (i__7784 + (1));
seq__7781 = G__11151;
chunk__7782 = G__11152;
count__7783 = G__11153;
i__7784 = G__11154;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7781);
if(temp__5823__auto__){
var seq__7781__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7781__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7781__$1);
var G__11155 = cljs.core.chunk_rest(seq__7781__$1);
var G__11156 = c__5673__auto__;
var G__11157 = cljs.core.count(c__5673__auto__);
var G__11158 = (0);
seq__7781 = G__11155;
chunk__7782 = G__11156;
count__7783 = G__11157;
i__7784 = G__11158;
continue;
} else {
var vec__7794 = cljs.core.first(seq__7781__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7794,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7794,(1),null);
nex.interpreter.env_define(ctor_env_11132,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__11159 = cljs.core.next(seq__7781__$1);
var G__11160 = null;
var G__11161 = (0);
var G__11162 = (0);
seq__7781 = G__11159;
chunk__7782 = G__11160;
count__7783 = G__11161;
i__7784 = G__11162;
continue;
}
} else {
return null;
}
}
break;
}
})();
var temp_obj_11137 = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(effective_class_name,initial_field_map);
var new_ctx_11138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env_11132),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj_11137),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name),new cljs.core.Keyword(null,"current-method-name","current-method-name",502828416),constructor$),new cljs.core.Keyword(null,"debug-stack","debug-stack",-542042467),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),effective_class_name,new cljs.core.Keyword(null,"method","method",55703592),(function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})(),new cljs.core.Keyword(null,"env","env",-1815813235),ctor_env_11132,new cljs.core.Keyword(null,"arg-names","arg-names",1632831252),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5142__auto__ = params_11135;
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
return nex.interpreter.check_assertions_async(new_ctx_11138,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})()).then((function (___$3){
return nex.interpreter.__GT_promise((function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue_async(new_ctx_11138,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
return nex.interpreter.eval_body_async(new_ctx_11138,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
}
})()).then((function (___$4){
var updated_fields = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,field){
var field_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field);
var field_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_name);
var val = (function (){try{return nex.interpreter.env_lookup(ctor_env_11132,field_name);
}catch (e7798){var ___$5 = e7798;
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
return nex.interpreter.check_assertions_async(new_ctx_11138,ensure_assertions,nex.interpreter.Postcondition);
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
var seq__7800_11163 = cljs.core.seq(output);
var chunk__7801_11164 = null;
var count__7802_11165 = (0);
var i__7803_11166 = (0);
while(true){
if((i__7803_11166 < count__7802_11165)){
var line_11167 = chunk__7801_11164.cljs$core$IIndexed$_nth$arity$2(null,i__7803_11166);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_11167], 0));


var G__11168 = seq__7800_11163;
var G__11169 = chunk__7801_11164;
var G__11170 = count__7802_11165;
var G__11171 = (i__7803_11166 + (1));
seq__7800_11163 = G__11168;
chunk__7801_11164 = G__11169;
count__7802_11165 = G__11170;
i__7803_11166 = G__11171;
continue;
} else {
var temp__5823__auto___11172 = cljs.core.seq(seq__7800_11163);
if(temp__5823__auto___11172){
var seq__7800_11173__$1 = temp__5823__auto___11172;
if(cljs.core.chunked_seq_QMARK_(seq__7800_11173__$1)){
var c__5673__auto___11174 = cljs.core.chunk_first(seq__7800_11173__$1);
var G__11175 = cljs.core.chunk_rest(seq__7800_11173__$1);
var G__11176 = c__5673__auto___11174;
var G__11177 = cljs.core.count(c__5673__auto___11174);
var G__11178 = (0);
seq__7800_11163 = G__11175;
chunk__7801_11164 = G__11176;
count__7802_11165 = G__11177;
i__7803_11166 = G__11178;
continue;
} else {
var line_11179 = cljs.core.first(seq__7800_11173__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_11179], 0));


var G__11180 = cljs.core.next(seq__7800_11173__$1);
var G__11181 = null;
var G__11182 = (0);
var G__11183 = (0);
seq__7800_11163 = G__11180;
chunk__7801_11164 = G__11181;
count__7802_11165 = G__11182;
i__7803_11166 = G__11183;
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
