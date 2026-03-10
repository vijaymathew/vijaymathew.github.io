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
var G__6119_6591 = ctx;
var G__6120_6592 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6119_6591,G__6120_6592) : nex.interpreter.register_class.call(null,G__6119_6591,G__6120_6592));

var G__6121_6593 = ctx;
var G__6122_6594 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6121_6593,G__6122_6594) : nex.interpreter.register_class.call(null,G__6121_6593,G__6122_6594));

var G__6123_6595 = ctx;
var G__6124_6596 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6123_6595,G__6124_6596) : nex.interpreter.register_class.call(null,G__6123_6595,G__6124_6596));

var G__6125_6597 = ctx;
var G__6126_6598 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6125_6597,G__6126_6598) : nex.interpreter.register_class.call(null,G__6125_6597,G__6126_6598));

var seq__6127_6599 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6128_6600 = null;
var count__6129_6601 = (0);
var i__6130_6602 = (0);
while(true){
if((i__6130_6602 < count__6129_6601)){
var scalar_6603 = chunk__6128_6600.cljs$core$IIndexed$_nth$arity$2(null,i__6130_6602);
var G__6135_6604 = ctx;
var G__6136_6605 = nex.interpreter.build_builtin_scalar_class(scalar_6603);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6135_6604,G__6136_6605) : nex.interpreter.register_class.call(null,G__6135_6604,G__6136_6605));


var G__6606 = seq__6127_6599;
var G__6607 = chunk__6128_6600;
var G__6608 = count__6129_6601;
var G__6609 = (i__6130_6602 + (1));
seq__6127_6599 = G__6606;
chunk__6128_6600 = G__6607;
count__6129_6601 = G__6608;
i__6130_6602 = G__6609;
continue;
} else {
var temp__5823__auto___6610 = cljs.core.seq(seq__6127_6599);
if(temp__5823__auto___6610){
var seq__6127_6611__$1 = temp__5823__auto___6610;
if(cljs.core.chunked_seq_QMARK_(seq__6127_6611__$1)){
var c__5673__auto___6612 = cljs.core.chunk_first(seq__6127_6611__$1);
var G__6613 = cljs.core.chunk_rest(seq__6127_6611__$1);
var G__6614 = c__5673__auto___6612;
var G__6615 = cljs.core.count(c__5673__auto___6612);
var G__6616 = (0);
seq__6127_6599 = G__6613;
chunk__6128_6600 = G__6614;
count__6129_6601 = G__6615;
i__6130_6602 = G__6616;
continue;
} else {
var scalar_6617 = cljs.core.first(seq__6127_6611__$1);
var G__6137_6618 = ctx;
var G__6138_6619 = nex.interpreter.build_builtin_scalar_class(scalar_6617);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6137_6618,G__6138_6619) : nex.interpreter.register_class.call(null,G__6137_6618,G__6138_6619));


var G__6620 = cljs.core.next(seq__6127_6611__$1);
var G__6621 = null;
var G__6622 = (0);
var G__6623 = (0);
seq__6127_6599 = G__6620;
chunk__6128_6600 = G__6621;
count__6129_6601 = G__6622;
i__6130_6602 = G__6623;
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

/**
 * Check if a value is a Nex object instance.
 */
nex.interpreter.nex_object_QMARK_ = (function nex$interpreter$nex_object_QMARK_(v){
return (((v instanceof nex.interpreter.NexObject)) || (((cljs.core.map_QMARK_(v)) && (((cljs.core.contains_QMARK_(v,new cljs.core.Keyword(null,"class-name","class-name",945142584))) && (cljs.core.contains_QMARK_(v,new cljs.core.Keyword(null,"fields","fields",-1932066230))))))));
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
var fexpr__6163 = new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
return (fexpr__6163.cljs$core$IFn$_invoke$arity$2 ? fexpr__6163.cljs$core$IFn$_invoke$arity$2(ctx,node) : fexpr__6163.call(null,ctx,node));
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
var seq__6164 = cljs.core.seq(assertions);
var chunk__6165 = null;
var count__6166 = (0);
var i__6167 = (0);
while(true){
if((i__6167 < count__6166)){
var map__6170 = chunk__6165.cljs$core$IIndexed$_nth$arity$2(null,i__6167);
var map__6170__$1 = cljs.core.__destructure_map(map__6170);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6170__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6170__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_6630 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_6630)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__6631 = seq__6164;
var G__6632 = chunk__6165;
var G__6633 = count__6166;
var G__6634 = (i__6167 + (1));
seq__6164 = G__6631;
chunk__6165 = G__6632;
count__6166 = G__6633;
i__6167 = G__6634;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6164);
if(temp__5823__auto__){
var seq__6164__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6164__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6164__$1);
var G__6635 = cljs.core.chunk_rest(seq__6164__$1);
var G__6636 = c__5673__auto__;
var G__6637 = cljs.core.count(c__5673__auto__);
var G__6638 = (0);
seq__6164 = G__6635;
chunk__6165 = G__6636;
count__6166 = G__6637;
i__6167 = G__6638;
continue;
} else {
var map__6171 = cljs.core.first(seq__6164__$1);
var map__6171__$1 = cljs.core.__destructure_map(map__6171);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6171__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6171__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_6639 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_6639)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__6640 = cljs.core.next(seq__6164__$1);
var G__6641 = null;
var G__6642 = (0);
var G__6643 = (0);
seq__6164 = G__6640;
chunk__6165 = G__6641;
count__6166 = G__6642;
i__6167 = G__6643;
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
var vec__6184 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6187,p__6188){
var vec__6189 = p__6187;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6189,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6189,(1),null);
var map__6192 = p__6188;
var map__6192__$1 = cljs.core.__destructure_map(map__6192);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6192__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6193 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6193,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6193,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6184,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6184,(1),null);
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
var vec__6196 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6196,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6196,(1),null);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6199_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6199_SHARP_))){
return p1__6199_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6199_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6202){
var map__6203 = p__6202;
var map__6203__$1 = cljs.core.__destructure_map(map__6203);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6203__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(nex.interpreter.public_member_QMARK_,(nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_constants.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_all_constants.call(null,ctx,class_def__$1)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var local_constants = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6201_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6201_SHARP_,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993),class_def);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6200_SHARP_){
var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6200_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
return new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6200_SHARP_);
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
return cljs.core.some((function (p__6204){
var map__6205 = p__6204;
var map__6205__$1 = cljs.core.__destructure_map(map__6205);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6205__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6207_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6206_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6206_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
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
var G__6208 = ctx;
var G__6209 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6210 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6208,G__6209,G__6210) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6208,G__6209,G__6210));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6211 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6212 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6211,G__6212) : nex.interpreter.combine_preconditions.call(null,G__6211,G__6212));
})();
var effective_ensure = (function (){var G__6213 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6214 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6213,G__6214) : nex.interpreter.combine_assertions.call(null,G__6213,G__6214));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6215 = ctx;
var G__6216 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6217 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6215,G__6216,G__6217) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6215,G__6216,G__6217));
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
var or__5142__auto__ = cljs.core.some((function (p1__6218_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6218_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6219_SHARP_){
var G__6220 = ctx;
var G__6221 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6219_SHARP_);
var G__6222 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6220,G__6221,G__6222) : nex.interpreter.is_parent_QMARK_.call(null,G__6220,G__6221,G__6222));
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
var G__6223 = (nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.get_type_name.call(null,value));
if((G__6223 == null)){
return null;
} else {
return cljs.core.name(G__6223);
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
var fexpr__6224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Real",null,"Decimal",null,"Integer64",null], null), null);
return (fexpr__6224.cljs$core$IFn$_invoke$arity$1 ? fexpr__6224.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6224.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer64");
if(and__5140__auto__){
var fexpr__6225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Real",null,"Decimal",null], null), null);
return (fexpr__6225.cljs$core$IFn$_invoke$arity$1 ? fexpr__6225.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6225.call(null,target_type));
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
var and__5140__auto__ = (function (){var fexpr__6226 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["ArrayCursor",null,"StringCursor",null,"MapCursor",null,"SetCursor",null], null), null);
return (fexpr__6226.cljs$core$IFn$_invoke$arity$1 ? fexpr__6226.cljs$core$IFn$_invoke$arity$1(runtime_type) : fexpr__6226.call(null,runtime_type));
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
var G__6228 = arguments.length;
switch (G__6228) {
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
var G__6229 = eval_ctx;
var G__6230 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(constant);
return (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(G__6229,G__6230) : nex.interpreter.eval_node.call(null,G__6229,G__6230));
}));

(nex.interpreter.eval_class_constant.cljs$lang$maxFixedArity = 4);

/**
 * Bind all constants visible from class-def into env.
 */
nex.interpreter.bind_class_constants_BANG_ = (function nex$interpreter$bind_class_constants_BANG_(ctx,env,class_def){
var seq__6231 = cljs.core.seq(nex.interpreter.get_all_constants(ctx,class_def));
var chunk__6232 = null;
var count__6233 = (0);
var i__6234 = (0);
while(true){
if((i__6234 < count__6233)){
var constant = chunk__6232.cljs$core$IIndexed$_nth$arity$2(null,i__6234);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__6648 = seq__6231;
var G__6649 = chunk__6232;
var G__6650 = count__6233;
var G__6651 = (i__6234 + (1));
seq__6231 = G__6648;
chunk__6232 = G__6649;
count__6233 = G__6650;
i__6234 = G__6651;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6231);
if(temp__5823__auto__){
var seq__6231__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6231__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6231__$1);
var G__6652 = cljs.core.chunk_rest(seq__6231__$1);
var G__6653 = c__5673__auto__;
var G__6654 = cljs.core.count(c__5673__auto__);
var G__6655 = (0);
seq__6231 = G__6652;
chunk__6232 = G__6653;
count__6233 = G__6654;
i__6234 = G__6655;
continue;
} else {
var constant = cljs.core.first(seq__6231__$1);
nex.interpreter.env_define(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant),nex.interpreter.eval_class_constant.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"declaring-class","declaring-class",-951742993).cljs$core$IFn$_invoke$arity$2(constant,class_def),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(constant)));


var G__6656 = cljs.core.next(seq__6231__$1);
var G__6657 = null;
var G__6658 = (0);
var G__6659 = (0);
seq__6231 = G__6656;
chunk__6232 = G__6657;
count__6233 = G__6658;
i__6234 = G__6659;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6235){
var map__6236 = p__6235;
var map__6236__$1 = cljs.core.__destructure_map(map__6236);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6236__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
nex.interpreter.builtins = new cljs.core.PersistentArrayMap(null, 4, ["print",(function() { 
var G__6664__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__6664 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__6665__i = 0, G__6665__a = new Array(arguments.length -  1);
while (G__6665__i < G__6665__a.length) {G__6665__a[G__6665__i] = arguments[G__6665__i + 1]; ++G__6665__i;}
  args = new cljs.core.IndexedSeq(G__6665__a,0,null);
} 
return G__6664__delegate.call(this,ctx,args);};
G__6664.cljs$lang$maxFixedArity = 1;
G__6664.cljs$lang$applyTo = (function (arglist__6666){
var ctx = cljs.core.first(arglist__6666);
var args = cljs.core.rest(arglist__6666);
return G__6664__delegate(ctx,args);
});
G__6664.cljs$core$IFn$_invoke$arity$variadic = G__6664__delegate;
return G__6664;
})()
,"println",(function() { 
var G__6667__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__6667 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__6668__i = 0, G__6668__a = new Array(arguments.length -  1);
while (G__6668__i < G__6668__a.length) {G__6668__a[G__6668__i] = arguments[G__6668__i + 1]; ++G__6668__i;}
  args = new cljs.core.IndexedSeq(G__6668__a,0,null);
} 
return G__6667__delegate.call(this,ctx,args);};
G__6667.cljs$lang$maxFixedArity = 1;
G__6667.cljs$lang$applyTo = (function (arglist__6669){
var ctx = cljs.core.first(arglist__6669);
var args = cljs.core.rest(arglist__6669);
return G__6667__delegate(ctx,args);
});
G__6667.cljs$core$IFn$_invoke$arity$variadic = G__6667__delegate;
return G__6667;
})()
,"type_of",(function() { 
var G__6670__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__6670 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__6671__i = 0, G__6671__a = new Array(arguments.length -  1);
while (G__6671__i < G__6671__a.length) {G__6671__a[G__6671__i] = arguments[G__6671__i + 1]; ++G__6671__i;}
  args = new cljs.core.IndexedSeq(G__6671__a,0,null);
} 
return G__6670__delegate.call(this,ctx,args);};
G__6670.cljs$lang$maxFixedArity = 1;
G__6670.cljs$lang$applyTo = (function (arglist__6672){
var ctx = cljs.core.first(arglist__6672);
var args = cljs.core.rest(arglist__6672);
return G__6670__delegate(ctx,args);
});
G__6670.cljs$core$IFn$_invoke$arity$variadic = G__6670__delegate;
return G__6670;
})()
,"type_is",(function() { 
var G__6673__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6237 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6237,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6237,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__6673 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__6675__i = 0, G__6675__a = new Array(arguments.length -  1);
while (G__6675__i < G__6675__a.length) {G__6675__a[G__6675__i] = arguments[G__6675__i + 1]; ++G__6675__i;}
  args = new cljs.core.IndexedSeq(G__6675__a,0,null);
} 
return G__6673__delegate.call(this,ctx,args);};
G__6673.cljs$lang$maxFixedArity = 1;
G__6673.cljs$lang$applyTo = (function (arglist__6676){
var ctx = cljs.core.first(arglist__6676);
var args = cljs.core.rest(arglist__6676);
return G__6673__delegate(ctx,args);
});
G__6673.cljs$core$IFn$_invoke$arity$variadic = G__6673__delegate;
return G__6673;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6240 = op;
switch (G__6240) {
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
var G__6241 = op;
switch (G__6241) {
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
var G__6242 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6242) {
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
var G__6243 = field_type;
switch (G__6243) {
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
}catch (e6245){var _ = e6245;
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"Array","Array",-2064027806),new cljs.core.Keyword(null,"Integer64","Integer64",-1582960571),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"Map","Map",-197728088),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"Set","Set",-1553598550),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"Integer","Integer",-641373298),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"Console","Console",-423236809),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"Char","Char",2025763229),new cljs.core.Keyword(null,"Real","Real",-1266238786),new cljs.core.Keyword(null,"String","String",584378334)],[new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__6685__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c),cljs.core.vec(cljs.core.es6_iterator_seq(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c).values())));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__6685 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6686__i = 0, G__6686__a = new Array(arguments.length -  1);
while (G__6686__i < G__6686__a.length) {G__6686__a[G__6686__i] = arguments[G__6686__i + 1]; ++G__6686__i;}
  _ = new cljs.core.IndexedSeq(G__6686__a,0,null);
} 
return G__6685__delegate.call(this,c,_);};
G__6685.cljs$lang$maxFixedArity = 1;
G__6685.cljs$lang$applyTo = (function (arglist__6687){
var c = cljs.core.first(arglist__6687);
var _ = cljs.core.rest(arglist__6687);
return G__6685__delegate(c,_);
});
G__6685.cljs$core$IFn$_invoke$arity$variadic = G__6685__delegate;
return G__6685;
})()
,"item",(function() { 
var G__6688__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vals,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__6688 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6689__i = 0, G__6689__a = new Array(arguments.length -  1);
while (G__6689__i < G__6689__a.length) {G__6689__a[G__6689__i] = arguments[G__6689__i + 1]; ++G__6689__i;}
  _ = new cljs.core.IndexedSeq(G__6689__a,0,null);
} 
return G__6688__delegate.call(this,c,_);};
G__6688.cljs$lang$maxFixedArity = 1;
G__6688.cljs$lang$applyTo = (function (arglist__6690){
var c = cljs.core.first(arglist__6690);
var _ = cljs.core.rest(arglist__6690);
return G__6688__delegate(c,_);
});
G__6688.cljs$core$IFn$_invoke$arity$variadic = G__6688__delegate;
return G__6688;
})()
,"next",(function() { 
var G__6691__delegate = function (c,_){
var vals = cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(vals))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__6691 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6692__i = 0, G__6692__a = new Array(arguments.length -  1);
while (G__6692__i < G__6692__a.length) {G__6692__a[G__6692__i] = arguments[G__6692__i + 1]; ++G__6692__i;}
  _ = new cljs.core.IndexedSeq(G__6692__a,0,null);
} 
return G__6691__delegate.call(this,c,_);};
G__6691.cljs$lang$maxFixedArity = 1;
G__6691.cljs$lang$applyTo = (function (arglist__6693){
var c = cljs.core.first(arglist__6693);
var _ = cljs.core.rest(arglist__6693);
return G__6691__delegate(c,_);
});
G__6691.cljs$core$IFn$_invoke$arity$variadic = G__6691__delegate;
return G__6691;
})()
,"at_end",(function() { 
var G__6694__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__6694 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6695__i = 0, G__6695__a = new Array(arguments.length -  1);
while (G__6695__i < G__6695__a.length) {G__6695__a[G__6695__i] = arguments[G__6695__i + 1]; ++G__6695__i;}
  _ = new cljs.core.IndexedSeq(G__6695__a,0,null);
} 
return G__6694__delegate.call(this,c,_);};
G__6694.cljs$lang$maxFixedArity = 1;
G__6694.cljs$lang$applyTo = (function (arglist__6696){
var c = cljs.core.first(arglist__6696);
var _ = cljs.core.rest(arglist__6696);
return G__6694__delegate(c,_);
});
G__6694.cljs$core$IFn$_invoke$arity$variadic = G__6694__delegate;
return G__6694;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["put","is_empty","reverse","contains","add_at","sort","cursor","remove","length","slice","add","index_of","get"],[(function() { 
var G__6697__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__6697 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6699__i = 0, G__6699__a = new Array(arguments.length -  3);
while (G__6699__i < G__6699__a.length) {G__6699__a[G__6699__i] = arguments[G__6699__i + 3]; ++G__6699__i;}
  _ = new cljs.core.IndexedSeq(G__6699__a,0,null);
} 
return G__6697__delegate.call(this,arr,index,value,_);};
G__6697.cljs$lang$maxFixedArity = 3;
G__6697.cljs$lang$applyTo = (function (arglist__6700){
var arr = cljs.core.first(arglist__6700);
arglist__6700 = cljs.core.next(arglist__6700);
var index = cljs.core.first(arglist__6700);
arglist__6700 = cljs.core.next(arglist__6700);
var value = cljs.core.first(arglist__6700);
var _ = cljs.core.rest(arglist__6700);
return G__6697__delegate(arr,index,value,_);
});
G__6697.cljs$core$IFn$_invoke$arity$variadic = G__6697__delegate;
return G__6697;
})()
,(function() { 
var G__6701__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__6701 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6702__i = 0, G__6702__a = new Array(arguments.length -  1);
while (G__6702__i < G__6702__a.length) {G__6702__a[G__6702__i] = arguments[G__6702__i + 1]; ++G__6702__i;}
  _ = new cljs.core.IndexedSeq(G__6702__a,0,null);
} 
return G__6701__delegate.call(this,arr,_);};
G__6701.cljs$lang$maxFixedArity = 1;
G__6701.cljs$lang$applyTo = (function (arglist__6703){
var arr = cljs.core.first(arglist__6703);
var _ = cljs.core.rest(arglist__6703);
return G__6701__delegate(arr,_);
});
G__6701.cljs$core$IFn$_invoke$arity$variadic = G__6701__delegate;
return G__6701;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__6704__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__6704 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6705__i = 0, G__6705__a = new Array(arguments.length -  2);
while (G__6705__i < G__6705__a.length) {G__6705__a[G__6705__i] = arguments[G__6705__i + 2]; ++G__6705__i;}
  _ = new cljs.core.IndexedSeq(G__6705__a,0,null);
} 
return G__6704__delegate.call(this,arr,elem,_);};
G__6704.cljs$lang$maxFixedArity = 2;
G__6704.cljs$lang$applyTo = (function (arglist__6706){
var arr = cljs.core.first(arglist__6706);
arglist__6706 = cljs.core.next(arglist__6706);
var elem = cljs.core.first(arglist__6706);
var _ = cljs.core.rest(arglist__6706);
return G__6704__delegate(arr,elem,_);
});
G__6704.cljs$core$IFn$_invoke$arity$variadic = G__6704__delegate;
return G__6704;
})()
,(function() { 
var G__6708__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__6708 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6709__i = 0, G__6709__a = new Array(arguments.length -  3);
while (G__6709__i < G__6709__a.length) {G__6709__a[G__6709__i] = arguments[G__6709__i + 3]; ++G__6709__i;}
  _ = new cljs.core.IndexedSeq(G__6709__a,0,null);
} 
return G__6708__delegate.call(this,arr,index,value,_);};
G__6708.cljs$lang$maxFixedArity = 3;
G__6708.cljs$lang$applyTo = (function (arglist__6710){
var arr = cljs.core.first(arglist__6710);
arglist__6710 = cljs.core.next(arglist__6710);
var index = cljs.core.first(arglist__6710);
arglist__6710 = cljs.core.next(arglist__6710);
var value = cljs.core.first(arglist__6710);
var _ = cljs.core.rest(arglist__6710);
return G__6708__delegate(arr,index,value,_);
});
G__6708.cljs$core$IFn$_invoke$arity$variadic = G__6708__delegate;
return G__6708;
})()
,(function() { 
var G__6715__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__6715 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6716__i = 0, G__6716__a = new Array(arguments.length -  1);
while (G__6716__i < G__6716__a.length) {G__6716__a[G__6716__i] = arguments[G__6716__i + 1]; ++G__6716__i;}
  _ = new cljs.core.IndexedSeq(G__6716__a,0,null);
} 
return G__6715__delegate.call(this,arr,_);};
G__6715.cljs$lang$maxFixedArity = 1;
G__6715.cljs$lang$applyTo = (function (arglist__6717){
var arr = cljs.core.first(arglist__6717);
var _ = cljs.core.rest(arglist__6717);
return G__6715__delegate(arr,_);
});
G__6715.cljs$core$IFn$_invoke$arity$variadic = G__6715__delegate;
return G__6715;
})()
,(function() { 
var G__6718__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__6718 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6719__i = 0, G__6719__a = new Array(arguments.length -  1);
while (G__6719__i < G__6719__a.length) {G__6719__a[G__6719__i] = arguments[G__6719__i + 1]; ++G__6719__i;}
  _ = new cljs.core.IndexedSeq(G__6719__a,0,null);
} 
return G__6718__delegate.call(this,arr,_);};
G__6718.cljs$lang$maxFixedArity = 1;
G__6718.cljs$lang$applyTo = (function (arglist__6720){
var arr = cljs.core.first(arglist__6720);
var _ = cljs.core.rest(arglist__6720);
return G__6718__delegate(arr,_);
});
G__6718.cljs$core$IFn$_invoke$arity$variadic = G__6718__delegate;
return G__6718;
})()
,(function() { 
var G__6721__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__6721 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6722__i = 0, G__6722__a = new Array(arguments.length -  2);
while (G__6722__i < G__6722__a.length) {G__6722__a[G__6722__i] = arguments[G__6722__i + 2]; ++G__6722__i;}
  _ = new cljs.core.IndexedSeq(G__6722__a,0,null);
} 
return G__6721__delegate.call(this,arr,idx,_);};
G__6721.cljs$lang$maxFixedArity = 2;
G__6721.cljs$lang$applyTo = (function (arglist__6723){
var arr = cljs.core.first(arglist__6723);
arglist__6723 = cljs.core.next(arglist__6723);
var idx = cljs.core.first(arglist__6723);
var _ = cljs.core.rest(arglist__6723);
return G__6721__delegate(arr,idx,_);
});
G__6721.cljs$core$IFn$_invoke$arity$variadic = G__6721__delegate;
return G__6721;
})()
,(function() { 
var G__6724__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__6724 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6725__i = 0, G__6725__a = new Array(arguments.length -  1);
while (G__6725__i < G__6725__a.length) {G__6725__a[G__6725__i] = arguments[G__6725__i + 1]; ++G__6725__i;}
  _ = new cljs.core.IndexedSeq(G__6725__a,0,null);
} 
return G__6724__delegate.call(this,arr,_);};
G__6724.cljs$lang$maxFixedArity = 1;
G__6724.cljs$lang$applyTo = (function (arglist__6726){
var arr = cljs.core.first(arglist__6726);
var _ = cljs.core.rest(arglist__6726);
return G__6724__delegate(arr,_);
});
G__6724.cljs$core$IFn$_invoke$arity$variadic = G__6724__delegate;
return G__6724;
})()
,(function() { 
var G__6727__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__6727 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6728__i = 0, G__6728__a = new Array(arguments.length -  3);
while (G__6728__i < G__6728__a.length) {G__6728__a[G__6728__i] = arguments[G__6728__i + 3]; ++G__6728__i;}
  _ = new cljs.core.IndexedSeq(G__6728__a,0,null);
} 
return G__6727__delegate.call(this,arr,start,end,_);};
G__6727.cljs$lang$maxFixedArity = 3;
G__6727.cljs$lang$applyTo = (function (arglist__6729){
var arr = cljs.core.first(arglist__6729);
arglist__6729 = cljs.core.next(arglist__6729);
var start = cljs.core.first(arglist__6729);
arglist__6729 = cljs.core.next(arglist__6729);
var end = cljs.core.first(arglist__6729);
var _ = cljs.core.rest(arglist__6729);
return G__6727__delegate(arr,start,end,_);
});
G__6727.cljs$core$IFn$_invoke$arity$variadic = G__6727__delegate;
return G__6727;
})()
,(function() { 
var G__6730__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__6730 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6731__i = 0, G__6731__a = new Array(arguments.length -  2);
while (G__6731__i < G__6731__a.length) {G__6731__a[G__6731__i] = arguments[G__6731__i + 2]; ++G__6731__i;}
  _ = new cljs.core.IndexedSeq(G__6731__a,0,null);
} 
return G__6730__delegate.call(this,arr,value,_);};
G__6730.cljs$lang$maxFixedArity = 2;
G__6730.cljs$lang$applyTo = (function (arglist__6732){
var arr = cljs.core.first(arglist__6732);
arglist__6732 = cljs.core.next(arglist__6732);
var value = cljs.core.first(arglist__6732);
var _ = cljs.core.rest(arglist__6732);
return G__6730__delegate(arr,value,_);
});
G__6730.cljs$core$IFn$_invoke$arity$variadic = G__6730__delegate;
return G__6730;
})()
,(function() { 
var G__6733__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__6733 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6734__i = 0, G__6734__a = new Array(arguments.length -  2);
while (G__6734__i < G__6734__a.length) {G__6734__a[G__6734__i] = arguments[G__6734__i + 2]; ++G__6734__i;}
  _ = new cljs.core.IndexedSeq(G__6734__a,0,null);
} 
return G__6733__delegate.call(this,arr,elem,_);};
G__6733.cljs$lang$maxFixedArity = 2;
G__6733.cljs$lang$applyTo = (function (arglist__6735){
var arr = cljs.core.first(arglist__6735);
arglist__6735 = cljs.core.next(arglist__6735);
var elem = cljs.core.first(arglist__6735);
var _ = cljs.core.rest(arglist__6735);
return G__6733__delegate(arr,elem,_);
});
G__6733.cljs$core$IFn$_invoke$arity$variadic = G__6733__delegate;
return G__6733;
})()
,(function() { 
var G__6736__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__6736 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6737__i = 0, G__6737__a = new Array(arguments.length -  2);
while (G__6737__i < G__6737__a.length) {G__6737__a[G__6737__i] = arguments[G__6737__i + 2]; ++G__6737__i;}
  _ = new cljs.core.IndexedSeq(G__6737__a,0,null);
} 
return G__6736__delegate.call(this,arr,index,_);};
G__6736.cljs$lang$maxFixedArity = 2;
G__6736.cljs$lang$applyTo = (function (arglist__6738){
var arr = cljs.core.first(arglist__6738);
arglist__6738 = cljs.core.next(arglist__6738);
var index = cljs.core.first(arglist__6738);
var _ = cljs.core.rest(arglist__6738);
return G__6736__delegate(arr,index,_);
});
G__6736.cljs$core$IFn$_invoke$arity$variadic = G__6736__delegate;
return G__6736;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__6741__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__6741 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6742__i = 0, G__6742__a = new Array(arguments.length -  2);
while (G__6742__i < G__6742__a.length) {G__6742__a[G__6742__i] = arguments[G__6742__i + 2]; ++G__6742__i;}
  _ = new cljs.core.IndexedSeq(G__6742__a,0,null);
} 
return G__6741__delegate.call(this,n,other,_);};
G__6741.cljs$lang$maxFixedArity = 2;
G__6741.cljs$lang$applyTo = (function (arglist__6744){
var n = cljs.core.first(arglist__6744);
arglist__6744 = cljs.core.next(arglist__6744);
var other = cljs.core.first(arglist__6744);
var _ = cljs.core.rest(arglist__6744);
return G__6741__delegate(n,other,_);
});
G__6741.cljs$core$IFn$_invoke$arity$variadic = G__6741__delegate;
return G__6741;
})()
,(function() { 
var G__6745__delegate = function (n,other,_){
return (n <= other);
};
var G__6745 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6746__i = 0, G__6746__a = new Array(arguments.length -  2);
while (G__6746__i < G__6746__a.length) {G__6746__a[G__6746__i] = arguments[G__6746__i + 2]; ++G__6746__i;}
  _ = new cljs.core.IndexedSeq(G__6746__a,0,null);
} 
return G__6745__delegate.call(this,n,other,_);};
G__6745.cljs$lang$maxFixedArity = 2;
G__6745.cljs$lang$applyTo = (function (arglist__6747){
var n = cljs.core.first(arglist__6747);
arglist__6747 = cljs.core.next(arglist__6747);
var other = cljs.core.first(arglist__6747);
var _ = cljs.core.rest(arglist__6747);
return G__6745__delegate(n,other,_);
});
G__6745.cljs$core$IFn$_invoke$arity$variadic = G__6745__delegate;
return G__6745;
})()
,(function() { 
var G__6748__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__6748 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6749__i = 0, G__6749__a = new Array(arguments.length -  2);
while (G__6749__i < G__6749__a.length) {G__6749__a[G__6749__i] = arguments[G__6749__i + 2]; ++G__6749__i;}
  _ = new cljs.core.IndexedSeq(G__6749__a,0,null);
} 
return G__6748__delegate.call(this,n,other,_);};
G__6748.cljs$lang$maxFixedArity = 2;
G__6748.cljs$lang$applyTo = (function (arglist__6750){
var n = cljs.core.first(arglist__6750);
arglist__6750 = cljs.core.next(arglist__6750);
var other = cljs.core.first(arglist__6750);
var _ = cljs.core.rest(arglist__6750);
return G__6748__delegate(n,other,_);
});
G__6748.cljs$core$IFn$_invoke$arity$variadic = G__6748__delegate;
return G__6748;
})()
,(function() { 
var G__6751__delegate = function (n,other,_){
return (n < other);
};
var G__6751 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6752__i = 0, G__6752__a = new Array(arguments.length -  2);
while (G__6752__i < G__6752__a.length) {G__6752__a[G__6752__i] = arguments[G__6752__i + 2]; ++G__6752__i;}
  _ = new cljs.core.IndexedSeq(G__6752__a,0,null);
} 
return G__6751__delegate.call(this,n,other,_);};
G__6751.cljs$lang$maxFixedArity = 2;
G__6751.cljs$lang$applyTo = (function (arglist__6753){
var n = cljs.core.first(arglist__6753);
arglist__6753 = cljs.core.next(arglist__6753);
var other = cljs.core.first(arglist__6753);
var _ = cljs.core.rest(arglist__6753);
return G__6751__delegate(n,other,_);
});
G__6751.cljs$core$IFn$_invoke$arity$variadic = G__6751__delegate;
return G__6751;
})()
,(function() { 
var G__6754__delegate = function (n,other,_){
return (n + other);
};
var G__6754 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6755__i = 0, G__6755__a = new Array(arguments.length -  2);
while (G__6755__i < G__6755__a.length) {G__6755__a[G__6755__i] = arguments[G__6755__i + 2]; ++G__6755__i;}
  _ = new cljs.core.IndexedSeq(G__6755__a,0,null);
} 
return G__6754__delegate.call(this,n,other,_);};
G__6754.cljs$lang$maxFixedArity = 2;
G__6754.cljs$lang$applyTo = (function (arglist__6756){
var n = cljs.core.first(arglist__6756);
arglist__6756 = cljs.core.next(arglist__6756);
var other = cljs.core.first(arglist__6756);
var _ = cljs.core.rest(arglist__6756);
return G__6754__delegate(n,other,_);
});
G__6754.cljs$core$IFn$_invoke$arity$variadic = G__6754__delegate;
return G__6754;
})()
,(function() { 
var G__6757__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__6757 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6758__i = 0, G__6758__a = new Array(arguments.length -  1);
while (G__6758__i < G__6758__a.length) {G__6758__a[G__6758__i] = arguments[G__6758__i + 1]; ++G__6758__i;}
  _ = new cljs.core.IndexedSeq(G__6758__a,0,null);
} 
return G__6757__delegate.call(this,n,_);};
G__6757.cljs$lang$maxFixedArity = 1;
G__6757.cljs$lang$applyTo = (function (arglist__6759){
var n = cljs.core.first(arglist__6759);
var _ = cljs.core.rest(arglist__6759);
return G__6757__delegate(n,_);
});
G__6757.cljs$core$IFn$_invoke$arity$variadic = G__6757__delegate;
return G__6757;
})()
,(function() { 
var G__6760__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__6760 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6761__i = 0, G__6761__a = new Array(arguments.length -  1);
while (G__6761__i < G__6761__a.length) {G__6761__a[G__6761__i] = arguments[G__6761__i + 1]; ++G__6761__i;}
  _ = new cljs.core.IndexedSeq(G__6761__a,0,null);
} 
return G__6760__delegate.call(this,n,_);};
G__6760.cljs$lang$maxFixedArity = 1;
G__6760.cljs$lang$applyTo = (function (arglist__6762){
var n = cljs.core.first(arglist__6762);
var _ = cljs.core.rest(arglist__6762);
return G__6760__delegate(n,_);
});
G__6760.cljs$core$IFn$_invoke$arity$variadic = G__6760__delegate;
return G__6760;
})()
,(function() { 
var G__6763__delegate = function (n,other,_){
return (n > other);
};
var G__6763 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6764__i = 0, G__6764__a = new Array(arguments.length -  2);
while (G__6764__i < G__6764__a.length) {G__6764__a[G__6764__i] = arguments[G__6764__i + 2]; ++G__6764__i;}
  _ = new cljs.core.IndexedSeq(G__6764__a,0,null);
} 
return G__6763__delegate.call(this,n,other,_);};
G__6763.cljs$lang$maxFixedArity = 2;
G__6763.cljs$lang$applyTo = (function (arglist__6765){
var n = cljs.core.first(arglist__6765);
arglist__6765 = cljs.core.next(arglist__6765);
var other = cljs.core.first(arglist__6765);
var _ = cljs.core.rest(arglist__6765);
return G__6763__delegate(n,other,_);
});
G__6763.cljs$core$IFn$_invoke$arity$variadic = G__6763__delegate;
return G__6763;
})()
,(function() { 
var G__6767__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__6767 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6768__i = 0, G__6768__a = new Array(arguments.length -  2);
while (G__6768__i < G__6768__a.length) {G__6768__a[G__6768__i] = arguments[G__6768__i + 2]; ++G__6768__i;}
  _ = new cljs.core.IndexedSeq(G__6768__a,0,null);
} 
return G__6767__delegate.call(this,n,other,_);};
G__6767.cljs$lang$maxFixedArity = 2;
G__6767.cljs$lang$applyTo = (function (arglist__6769){
var n = cljs.core.first(arglist__6769);
arglist__6769 = cljs.core.next(arglist__6769);
var other = cljs.core.first(arglist__6769);
var _ = cljs.core.rest(arglist__6769);
return G__6767__delegate(n,other,_);
});
G__6767.cljs$core$IFn$_invoke$arity$variadic = G__6767__delegate;
return G__6767;
})()
,(function() { 
var G__6770__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__6770 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6771__i = 0, G__6771__a = new Array(arguments.length -  2);
while (G__6771__i < G__6771__a.length) {G__6771__a[G__6771__i] = arguments[G__6771__i + 2]; ++G__6771__i;}
  _ = new cljs.core.IndexedSeq(G__6771__a,0,null);
} 
return G__6770__delegate.call(this,n,other,_);};
G__6770.cljs$lang$maxFixedArity = 2;
G__6770.cljs$lang$applyTo = (function (arglist__6772){
var n = cljs.core.first(arglist__6772);
arglist__6772 = cljs.core.next(arglist__6772);
var other = cljs.core.first(arglist__6772);
var _ = cljs.core.rest(arglist__6772);
return G__6770__delegate(n,other,_);
});
G__6770.cljs$core$IFn$_invoke$arity$variadic = G__6770__delegate;
return G__6770;
})()
,(function() { 
var G__6773__delegate = function (n,other,_){
return (n - other);
};
var G__6773 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6775__i = 0, G__6775__a = new Array(arguments.length -  2);
while (G__6775__i < G__6775__a.length) {G__6775__a[G__6775__i] = arguments[G__6775__i + 2]; ++G__6775__i;}
  _ = new cljs.core.IndexedSeq(G__6775__a,0,null);
} 
return G__6773__delegate.call(this,n,other,_);};
G__6773.cljs$lang$maxFixedArity = 2;
G__6773.cljs$lang$applyTo = (function (arglist__6776){
var n = cljs.core.first(arglist__6776);
arglist__6776 = cljs.core.next(arglist__6776);
var other = cljs.core.first(arglist__6776);
var _ = cljs.core.rest(arglist__6776);
return G__6773__delegate(n,other,_);
});
G__6773.cljs$core$IFn$_invoke$arity$variadic = G__6773__delegate;
return G__6773;
})()
,(function() { 
var G__6777__delegate = function (n,other,_){
return (n * other);
};
var G__6777 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6778__i = 0, G__6778__a = new Array(arguments.length -  2);
while (G__6778__i < G__6778__a.length) {G__6778__a[G__6778__i] = arguments[G__6778__i + 2]; ++G__6778__i;}
  _ = new cljs.core.IndexedSeq(G__6778__a,0,null);
} 
return G__6777__delegate.call(this,n,other,_);};
G__6777.cljs$lang$maxFixedArity = 2;
G__6777.cljs$lang$applyTo = (function (arglist__6779){
var n = cljs.core.first(arglist__6779);
arglist__6779 = cljs.core.next(arglist__6779);
var other = cljs.core.first(arglist__6779);
var _ = cljs.core.rest(arglist__6779);
return G__6777__delegate(n,other,_);
});
G__6777.cljs$core$IFn$_invoke$arity$variadic = G__6777__delegate;
return G__6777;
})()
,(function() { 
var G__6780__delegate = function (n,other,_){
return (n / other);
};
var G__6780 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6781__i = 0, G__6781__a = new Array(arguments.length -  2);
while (G__6781__i < G__6781__a.length) {G__6781__a[G__6781__i] = arguments[G__6781__i + 2]; ++G__6781__i;}
  _ = new cljs.core.IndexedSeq(G__6781__a,0,null);
} 
return G__6780__delegate.call(this,n,other,_);};
G__6780.cljs$lang$maxFixedArity = 2;
G__6780.cljs$lang$applyTo = (function (arglist__6782){
var n = cljs.core.first(arglist__6782);
arglist__6782 = cljs.core.next(arglist__6782);
var other = cljs.core.first(arglist__6782);
var _ = cljs.core.rest(arglist__6782);
return G__6780__delegate(n,other,_);
});
G__6780.cljs$core$IFn$_invoke$arity$variadic = G__6780__delegate;
return G__6780;
})()
,(function() { 
var G__6783__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__6783 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6784__i = 0, G__6784__a = new Array(arguments.length -  1);
while (G__6784__i < G__6784__a.length) {G__6784__a[G__6784__i] = arguments[G__6784__i + 1]; ++G__6784__i;}
  _ = new cljs.core.IndexedSeq(G__6784__a,0,null);
} 
return G__6783__delegate.call(this,n,_);};
G__6783.cljs$lang$maxFixedArity = 1;
G__6783.cljs$lang$applyTo = (function (arglist__6785){
var n = cljs.core.first(arglist__6785);
var _ = cljs.core.rest(arglist__6785);
return G__6783__delegate(n,_);
});
G__6783.cljs$core$IFn$_invoke$arity$variadic = G__6783__delegate;
return G__6783;
})()
,(function() { 
var G__6786__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__6786 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6787__i = 0, G__6787__a = new Array(arguments.length -  2);
while (G__6787__i < G__6787__a.length) {G__6787__a[G__6787__i] = arguments[G__6787__i + 2]; ++G__6787__i;}
  _ = new cljs.core.IndexedSeq(G__6787__a,0,null);
} 
return G__6786__delegate.call(this,n,other,_);};
G__6786.cljs$lang$maxFixedArity = 2;
G__6786.cljs$lang$applyTo = (function (arglist__6788){
var n = cljs.core.first(arglist__6788);
arglist__6788 = cljs.core.next(arglist__6788);
var other = cljs.core.first(arglist__6788);
var _ = cljs.core.rest(arglist__6788);
return G__6786__delegate(n,other,_);
});
G__6786.cljs$core$IFn$_invoke$arity$variadic = G__6786__delegate;
return G__6786;
})()
,(function() { 
var G__6789__delegate = function (n,other,_){
return (n >= other);
};
var G__6789 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6790__i = 0, G__6790__a = new Array(arguments.length -  2);
while (G__6790__i < G__6790__a.length) {G__6790__a[G__6790__i] = arguments[G__6790__i + 2]; ++G__6790__i;}
  _ = new cljs.core.IndexedSeq(G__6790__a,0,null);
} 
return G__6789__delegate.call(this,n,other,_);};
G__6789.cljs$lang$maxFixedArity = 2;
G__6789.cljs$lang$applyTo = (function (arglist__6791){
var n = cljs.core.first(arglist__6791);
arglist__6791 = cljs.core.next(arglist__6791);
var other = cljs.core.first(arglist__6791);
var _ = cljs.core.rest(arglist__6791);
return G__6789__delegate(n,other,_);
});
G__6789.cljs$core$IFn$_invoke$arity$variadic = G__6789__delegate;
return G__6789;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__6792__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__6792 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6793__i = 0, G__6793__a = new Array(arguments.length -  1);
while (G__6793__i < G__6793__a.length) {G__6793__a[G__6793__i] = arguments[G__6793__i + 1]; ++G__6793__i;}
  _ = new cljs.core.IndexedSeq(G__6793__a,0,null);
} 
return G__6792__delegate.call(this,img,_);};
G__6792.cljs$lang$maxFixedArity = 1;
G__6792.cljs$lang$applyTo = (function (arglist__6794){
var img = cljs.core.first(arglist__6794);
var _ = cljs.core.rest(arglist__6794);
return G__6792__delegate(img,_);
});
G__6792.cljs$core$IFn$_invoke$arity$variadic = G__6792__delegate;
return G__6792;
})()
,"height",(function() { 
var G__6795__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__6795 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6796__i = 0, G__6796__a = new Array(arguments.length -  1);
while (G__6796__i < G__6796__a.length) {G__6796__a[G__6796__i] = arguments[G__6796__i + 1]; ++G__6796__i;}
  _ = new cljs.core.IndexedSeq(G__6796__a,0,null);
} 
return G__6795__delegate.call(this,img,_);};
G__6795.cljs$lang$maxFixedArity = 1;
G__6795.cljs$lang$applyTo = (function (arglist__6797){
var img = cljs.core.first(arglist__6797);
var _ = cljs.core.rest(arglist__6797);
return G__6795__delegate(img,_);
});
G__6795.cljs$core$IFn$_invoke$arity$variadic = G__6795__delegate;
return G__6795;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__6798__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__6798 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6799__i = 0, G__6799__a = new Array(arguments.length -  1);
while (G__6799__i < G__6799__a.length) {G__6799__a[G__6799__i] = arguments[G__6799__i + 1]; ++G__6799__i;}
  _ = new cljs.core.IndexedSeq(G__6799__a,0,null);
} 
return G__6798__delegate.call(this,c,_);};
G__6798.cljs$lang$maxFixedArity = 1;
G__6798.cljs$lang$applyTo = (function (arglist__6800){
var c = cljs.core.first(arglist__6800);
var _ = cljs.core.rest(arglist__6800);
return G__6798__delegate(c,_);
});
G__6798.cljs$core$IFn$_invoke$arity$variadic = G__6798__delegate;
return G__6798;
})()
,"item",(function() { 
var G__6801__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__6801 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6803__i = 0, G__6803__a = new Array(arguments.length -  1);
while (G__6803__i < G__6803__a.length) {G__6803__a[G__6803__i] = arguments[G__6803__i + 1]; ++G__6803__i;}
  _ = new cljs.core.IndexedSeq(G__6803__a,0,null);
} 
return G__6801__delegate.call(this,c,_);};
G__6801.cljs$lang$maxFixedArity = 1;
G__6801.cljs$lang$applyTo = (function (arglist__6804){
var c = cljs.core.first(arglist__6804);
var _ = cljs.core.rest(arglist__6804);
return G__6801__delegate(c,_);
});
G__6801.cljs$core$IFn$_invoke$arity$variadic = G__6801__delegate;
return G__6801;
})()
,"next",(function() { 
var G__6805__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__6805 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6806__i = 0, G__6806__a = new Array(arguments.length -  1);
while (G__6806__i < G__6806__a.length) {G__6806__a[G__6806__i] = arguments[G__6806__i + 1]; ++G__6806__i;}
  _ = new cljs.core.IndexedSeq(G__6806__a,0,null);
} 
return G__6805__delegate.call(this,c,_);};
G__6805.cljs$lang$maxFixedArity = 1;
G__6805.cljs$lang$applyTo = (function (arglist__6807){
var c = cljs.core.first(arglist__6807);
var _ = cljs.core.rest(arglist__6807);
return G__6805__delegate(c,_);
});
G__6805.cljs$core$IFn$_invoke$arity$variadic = G__6805__delegate;
return G__6805;
})()
,"at_end",(function() { 
var G__6808__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__6808 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6809__i = 0, G__6809__a = new Array(arguments.length -  1);
while (G__6809__i < G__6809__a.length) {G__6809__a[G__6809__i] = arguments[G__6809__i + 1]; ++G__6809__i;}
  _ = new cljs.core.IndexedSeq(G__6809__a,0,null);
} 
return G__6808__delegate.call(this,c,_);};
G__6808.cljs$lang$maxFixedArity = 1;
G__6808.cljs$lang$applyTo = (function (arglist__6810){
var c = cljs.core.first(arglist__6810);
var _ = cljs.core.rest(arglist__6810);
return G__6808__delegate(c,_);
});
G__6808.cljs$core$IFn$_invoke$arity$variadic = G__6808__delegate;
return G__6808;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","try_get","cursor","remove","size","get","contains_key"],[(function() { 
var G__6811__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__6811 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6812__i = 0, G__6812__a = new Array(arguments.length -  1);
while (G__6812__i < G__6812__a.length) {G__6812__a[G__6812__i] = arguments[G__6812__i + 1]; ++G__6812__i;}
  _ = new cljs.core.IndexedSeq(G__6812__a,0,null);
} 
return G__6811__delegate.call(this,m,_);};
G__6811.cljs$lang$maxFixedArity = 1;
G__6811.cljs$lang$applyTo = (function (arglist__6813){
var m = cljs.core.first(arglist__6813);
var _ = cljs.core.rest(arglist__6813);
return G__6811__delegate(m,_);
});
G__6811.cljs$core$IFn$_invoke$arity$variadic = G__6811__delegate;
return G__6811;
})()
,(function() { 
var G__6814__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__6814 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6815__i = 0, G__6815__a = new Array(arguments.length -  1);
while (G__6815__i < G__6815__a.length) {G__6815__a[G__6815__i] = arguments[G__6815__i + 1]; ++G__6815__i;}
  _ = new cljs.core.IndexedSeq(G__6815__a,0,null);
} 
return G__6814__delegate.call(this,m,_);};
G__6814.cljs$lang$maxFixedArity = 1;
G__6814.cljs$lang$applyTo = (function (arglist__6816){
var m = cljs.core.first(arglist__6816);
var _ = cljs.core.rest(arglist__6816);
return G__6814__delegate(m,_);
});
G__6814.cljs$core$IFn$_invoke$arity$variadic = G__6814__delegate;
return G__6814;
})()
,(function() { 
var G__6817__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__6817 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6818__i = 0, G__6818__a = new Array(arguments.length -  3);
while (G__6818__i < G__6818__a.length) {G__6818__a[G__6818__i] = arguments[G__6818__i + 3]; ++G__6818__i;}
  _ = new cljs.core.IndexedSeq(G__6818__a,0,null);
} 
return G__6817__delegate.call(this,m,key,val,_);};
G__6817.cljs$lang$maxFixedArity = 3;
G__6817.cljs$lang$applyTo = (function (arglist__6819){
var m = cljs.core.first(arglist__6819);
arglist__6819 = cljs.core.next(arglist__6819);
var key = cljs.core.first(arglist__6819);
arglist__6819 = cljs.core.next(arglist__6819);
var val = cljs.core.first(arglist__6819);
var _ = cljs.core.rest(arglist__6819);
return G__6817__delegate(m,key,val,_);
});
G__6817.cljs$core$IFn$_invoke$arity$variadic = G__6817__delegate;
return G__6817;
})()
,(function() { 
var G__6820__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__6820 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6821__i = 0, G__6821__a = new Array(arguments.length -  1);
while (G__6821__i < G__6821__a.length) {G__6821__a[G__6821__i] = arguments[G__6821__i + 1]; ++G__6821__i;}
  _ = new cljs.core.IndexedSeq(G__6821__a,0,null);
} 
return G__6820__delegate.call(this,m,_);};
G__6820.cljs$lang$maxFixedArity = 1;
G__6820.cljs$lang$applyTo = (function (arglist__6822){
var m = cljs.core.first(arglist__6822);
var _ = cljs.core.rest(arglist__6822);
return G__6820__delegate(m,_);
});
G__6820.cljs$core$IFn$_invoke$arity$variadic = G__6820__delegate;
return G__6820;
})()
,(function() { 
var G__6823__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__6823 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6824__i = 0, G__6824__a = new Array(arguments.length -  3);
while (G__6824__i < G__6824__a.length) {G__6824__a[G__6824__i] = arguments[G__6824__i + 3]; ++G__6824__i;}
  _ = new cljs.core.IndexedSeq(G__6824__a,0,null);
} 
return G__6823__delegate.call(this,m,key,default$,_);};
G__6823.cljs$lang$maxFixedArity = 3;
G__6823.cljs$lang$applyTo = (function (arglist__6825){
var m = cljs.core.first(arglist__6825);
arglist__6825 = cljs.core.next(arglist__6825);
var key = cljs.core.first(arglist__6825);
arglist__6825 = cljs.core.next(arglist__6825);
var default$ = cljs.core.first(arglist__6825);
var _ = cljs.core.rest(arglist__6825);
return G__6823__delegate(m,key,default$,_);
});
G__6823.cljs$core$IFn$_invoke$arity$variadic = G__6823__delegate;
return G__6823;
})()
,(function() { 
var G__6826__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__6826 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6827__i = 0, G__6827__a = new Array(arguments.length -  1);
while (G__6827__i < G__6827__a.length) {G__6827__a[G__6827__i] = arguments[G__6827__i + 1]; ++G__6827__i;}
  _ = new cljs.core.IndexedSeq(G__6827__a,0,null);
} 
return G__6826__delegate.call(this,m,_);};
G__6826.cljs$lang$maxFixedArity = 1;
G__6826.cljs$lang$applyTo = (function (arglist__6828){
var m = cljs.core.first(arglist__6828);
var _ = cljs.core.rest(arglist__6828);
return G__6826__delegate(m,_);
});
G__6826.cljs$core$IFn$_invoke$arity$variadic = G__6826__delegate;
return G__6826;
})()
,(function() { 
var G__6829__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__6829 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6830__i = 0, G__6830__a = new Array(arguments.length -  2);
while (G__6830__i < G__6830__a.length) {G__6830__a[G__6830__i] = arguments[G__6830__i + 2]; ++G__6830__i;}
  _ = new cljs.core.IndexedSeq(G__6830__a,0,null);
} 
return G__6829__delegate.call(this,m,key,_);};
G__6829.cljs$lang$maxFixedArity = 2;
G__6829.cljs$lang$applyTo = (function (arglist__6831){
var m = cljs.core.first(arglist__6831);
arglist__6831 = cljs.core.next(arglist__6831);
var key = cljs.core.first(arglist__6831);
var _ = cljs.core.rest(arglist__6831);
return G__6829__delegate(m,key,_);
});
G__6829.cljs$core$IFn$_invoke$arity$variadic = G__6829__delegate;
return G__6829;
})()
,(function() { 
var G__6832__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__6832 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6833__i = 0, G__6833__a = new Array(arguments.length -  1);
while (G__6833__i < G__6833__a.length) {G__6833__a[G__6833__i] = arguments[G__6833__i + 1]; ++G__6833__i;}
  _ = new cljs.core.IndexedSeq(G__6833__a,0,null);
} 
return G__6832__delegate.call(this,m,_);};
G__6832.cljs$lang$maxFixedArity = 1;
G__6832.cljs$lang$applyTo = (function (arglist__6834){
var m = cljs.core.first(arglist__6834);
var _ = cljs.core.rest(arglist__6834);
return G__6832__delegate(m,_);
});
G__6832.cljs$core$IFn$_invoke$arity$variadic = G__6832__delegate;
return G__6832;
})()
,(function() { 
var G__6835__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__6835 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6836__i = 0, G__6836__a = new Array(arguments.length -  2);
while (G__6836__i < G__6836__a.length) {G__6836__a[G__6836__i] = arguments[G__6836__i + 2]; ++G__6836__i;}
  _ = new cljs.core.IndexedSeq(G__6836__a,0,null);
} 
return G__6835__delegate.call(this,m,key,_);};
G__6835.cljs$lang$maxFixedArity = 2;
G__6835.cljs$lang$applyTo = (function (arglist__6837){
var m = cljs.core.first(arglist__6837);
arglist__6837 = cljs.core.next(arglist__6837);
var key = cljs.core.first(arglist__6837);
var _ = cljs.core.rest(arglist__6837);
return G__6835__delegate(m,key,_);
});
G__6835.cljs$core$IFn$_invoke$arity$variadic = G__6835__delegate;
return G__6835;
})()
,(function() { 
var G__6838__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__6838 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6839__i = 0, G__6839__a = new Array(arguments.length -  2);
while (G__6839__i < G__6839__a.length) {G__6839__a[G__6839__i] = arguments[G__6839__i + 2]; ++G__6839__i;}
  _ = new cljs.core.IndexedSeq(G__6839__a,0,null);
} 
return G__6838__delegate.call(this,m,key,_);};
G__6838.cljs$lang$maxFixedArity = 2;
G__6838.cljs$lang$applyTo = (function (arglist__6840){
var m = cljs.core.first(arglist__6840);
arglist__6840 = cljs.core.next(arglist__6840);
var key = cljs.core.first(arglist__6840);
var _ = cljs.core.rest(arglist__6840);
return G__6838__delegate(m,key,_);
});
G__6838.cljs$core$IFn$_invoke$arity$variadic = G__6838__delegate;
return G__6838;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__6841__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__6841 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6842__i = 0, G__6842__a = new Array(arguments.length -  1);
while (G__6842__i < G__6842__a.length) {G__6842__a[G__6842__i] = arguments[G__6842__i + 1]; ++G__6842__i;}
  _ = new cljs.core.IndexedSeq(G__6842__a,0,null);
} 
return G__6841__delegate.call(this,t,_);};
G__6841.cljs$lang$maxFixedArity = 1;
G__6841.cljs$lang$applyTo = (function (arglist__6843){
var t = cljs.core.first(arglist__6843);
var _ = cljs.core.rest(arglist__6843);
return G__6841__delegate(t,_);
});
G__6841.cljs$core$IFn$_invoke$arity$variadic = G__6841__delegate;
return G__6841;
})()
,(function() { 
var G__6844__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__6844 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6845__i = 0, G__6845__a = new Array(arguments.length -  2);
while (G__6845__i < G__6845__a.length) {G__6845__a[G__6845__i] = arguments[G__6845__i + 2]; ++G__6845__i;}
  _ = new cljs.core.IndexedSeq(G__6845__a,0,null);
} 
return G__6844__delegate.call(this,t,angle,_);};
G__6844.cljs$lang$maxFixedArity = 2;
G__6844.cljs$lang$applyTo = (function (arglist__6846){
var t = cljs.core.first(arglist__6846);
arglist__6846 = cljs.core.next(arglist__6846);
var angle = cljs.core.first(arglist__6846);
var _ = cljs.core.rest(arglist__6846);
return G__6844__delegate(t,angle,_);
});
G__6844.cljs$core$IFn$_invoke$arity$variadic = G__6844__delegate;
return G__6844;
})()
,(function() { 
var G__6847__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__6847 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6848__i = 0, G__6848__a = new Array(arguments.length -  1);
while (G__6848__i < G__6848__a.length) {G__6848__a[G__6848__i] = arguments[G__6848__i + 1]; ++G__6848__i;}
  _ = new cljs.core.IndexedSeq(G__6848__a,0,null);
} 
return G__6847__delegate.call(this,t,_);};
G__6847.cljs$lang$maxFixedArity = 1;
G__6847.cljs$lang$applyTo = (function (arglist__6849){
var t = cljs.core.first(arglist__6849);
var _ = cljs.core.rest(arglist__6849);
return G__6847__delegate(t,_);
});
G__6847.cljs$core$IFn$_invoke$arity$variadic = G__6847__delegate;
return G__6847;
})()
,(function() { 
var G__6850__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__6850 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6851__i = 0, G__6851__a = new Array(arguments.length -  2);
while (G__6851__i < G__6851__a.length) {G__6851__a[G__6851__i] = arguments[G__6851__i + 2]; ++G__6851__i;}
  _ = new cljs.core.IndexedSeq(G__6851__a,0,null);
} 
return G__6850__delegate.call(this,t,s,_);};
G__6850.cljs$lang$maxFixedArity = 2;
G__6850.cljs$lang$applyTo = (function (arglist__6852){
var t = cljs.core.first(arglist__6852);
arglist__6852 = cljs.core.next(arglist__6852);
var s = cljs.core.first(arglist__6852);
var _ = cljs.core.rest(arglist__6852);
return G__6850__delegate(t,s,_);
});
G__6850.cljs$core$IFn$_invoke$arity$variadic = G__6850__delegate;
return G__6850;
})()
,(function() { 
var G__6853__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__6853 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6854__i = 0, G__6854__a = new Array(arguments.length -  2);
while (G__6854__i < G__6854__a.length) {G__6854__a[G__6854__i] = arguments[G__6854__i + 2]; ++G__6854__i;}
  _ = new cljs.core.IndexedSeq(G__6854__a,0,null);
} 
return G__6853__delegate.call(this,t,s,_);};
G__6853.cljs$lang$maxFixedArity = 2;
G__6853.cljs$lang$applyTo = (function (arglist__6855){
var t = cljs.core.first(arglist__6855);
arglist__6855 = cljs.core.next(arglist__6855);
var s = cljs.core.first(arglist__6855);
var _ = cljs.core.rest(arglist__6855);
return G__6853__delegate(t,s,_);
});
G__6853.cljs$core$IFn$_invoke$arity$variadic = G__6853__delegate;
return G__6853;
})()
,(function() { 
var G__6856__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__6856 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6857__i = 0, G__6857__a = new Array(arguments.length -  1);
while (G__6857__i < G__6857__a.length) {G__6857__a[G__6857__i] = arguments[G__6857__i + 1]; ++G__6857__i;}
  _ = new cljs.core.IndexedSeq(G__6857__a,0,null);
} 
return G__6856__delegate.call(this,t,_);};
G__6856.cljs$lang$maxFixedArity = 1;
G__6856.cljs$lang$applyTo = (function (arglist__6858){
var t = cljs.core.first(arglist__6858);
var _ = cljs.core.rest(arglist__6858);
return G__6856__delegate(t,_);
});
G__6856.cljs$core$IFn$_invoke$arity$variadic = G__6856__delegate;
return G__6856;
})()
,(function() { 
var G__6859__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__6859 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6864__i = 0, G__6864__a = new Array(arguments.length -  2);
while (G__6864__i < G__6864__a.length) {G__6864__a[G__6864__i] = arguments[G__6864__i + 2]; ++G__6864__i;}
  _ = new cljs.core.IndexedSeq(G__6864__a,0,null);
} 
return G__6859__delegate.call(this,t,dist,_);};
G__6859.cljs$lang$maxFixedArity = 2;
G__6859.cljs$lang$applyTo = (function (arglist__6865){
var t = cljs.core.first(arglist__6865);
arglist__6865 = cljs.core.next(arglist__6865);
var dist = cljs.core.first(arglist__6865);
var _ = cljs.core.rest(arglist__6865);
return G__6859__delegate(t,dist,_);
});
G__6859.cljs$core$IFn$_invoke$arity$variadic = G__6859__delegate;
return G__6859;
})()
,(function() { 
var G__6866__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__6866 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6867__i = 0, G__6867__a = new Array(arguments.length -  1);
while (G__6867__i < G__6867__a.length) {G__6867__a[G__6867__i] = arguments[G__6867__i + 1]; ++G__6867__i;}
  _ = new cljs.core.IndexedSeq(G__6867__a,0,null);
} 
return G__6866__delegate.call(this,t,_);};
G__6866.cljs$lang$maxFixedArity = 1;
G__6866.cljs$lang$applyTo = (function (arglist__6868){
var t = cljs.core.first(arglist__6868);
var _ = cljs.core.rest(arglist__6868);
return G__6866__delegate(t,_);
});
G__6866.cljs$core$IFn$_invoke$arity$variadic = G__6866__delegate;
return G__6866;
})()
,(function() { 
var G__6869__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__6869 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6870__i = 0, G__6870__a = new Array(arguments.length -  1);
while (G__6870__i < G__6870__a.length) {G__6870__a[G__6870__i] = arguments[G__6870__i + 1]; ++G__6870__i;}
  _ = new cljs.core.IndexedSeq(G__6870__a,0,null);
} 
return G__6869__delegate.call(this,t,_);};
G__6869.cljs$lang$maxFixedArity = 1;
G__6869.cljs$lang$applyTo = (function (arglist__6871){
var t = cljs.core.first(arglist__6871);
var _ = cljs.core.rest(arglist__6871);
return G__6869__delegate(t,_);
});
G__6869.cljs$core$IFn$_invoke$arity$variadic = G__6869__delegate;
return G__6869;
})()
,(function() { 
var G__6872__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__6872 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6873__i = 0, G__6873__a = new Array(arguments.length -  1);
while (G__6873__i < G__6873__a.length) {G__6873__a[G__6873__i] = arguments[G__6873__i + 1]; ++G__6873__i;}
  _ = new cljs.core.IndexedSeq(G__6873__a,0,null);
} 
return G__6872__delegate.call(this,t,_);};
G__6872.cljs$lang$maxFixedArity = 1;
G__6872.cljs$lang$applyTo = (function (arglist__6874){
var t = cljs.core.first(arglist__6874);
var _ = cljs.core.rest(arglist__6874);
return G__6872__delegate(t,_);
});
G__6872.cljs$core$IFn$_invoke$arity$variadic = G__6872__delegate;
return G__6872;
})()
,(function() { 
var G__6875__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__6875 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6876__i = 0, G__6876__a = new Array(arguments.length -  1);
while (G__6876__i < G__6876__a.length) {G__6876__a[G__6876__i] = arguments[G__6876__i + 1]; ++G__6876__i;}
  _ = new cljs.core.IndexedSeq(G__6876__a,0,null);
} 
return G__6875__delegate.call(this,t,_);};
G__6875.cljs$lang$maxFixedArity = 1;
G__6875.cljs$lang$applyTo = (function (arglist__6877){
var t = cljs.core.first(arglist__6877);
var _ = cljs.core.rest(arglist__6877);
return G__6875__delegate(t,_);
});
G__6875.cljs$core$IFn$_invoke$arity$variadic = G__6875__delegate;
return G__6875;
})()
,(function() { 
var G__6878__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__6878 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6879__i = 0, G__6879__a = new Array(arguments.length -  1);
while (G__6879__i < G__6879__a.length) {G__6879__a[G__6879__i] = arguments[G__6879__i + 1]; ++G__6879__i;}
  _ = new cljs.core.IndexedSeq(G__6879__a,0,null);
} 
return G__6878__delegate.call(this,t,_);};
G__6878.cljs$lang$maxFixedArity = 1;
G__6878.cljs$lang$applyTo = (function (arglist__6880){
var t = cljs.core.first(arglist__6880);
var _ = cljs.core.rest(arglist__6880);
return G__6878__delegate(t,_);
});
G__6878.cljs$core$IFn$_invoke$arity$variadic = G__6878__delegate;
return G__6878;
})()
,(function() { 
var G__6881__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__6881 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6882__i = 0, G__6882__a = new Array(arguments.length -  1);
while (G__6882__i < G__6882__a.length) {G__6882__a[G__6882__i] = arguments[G__6882__i + 1]; ++G__6882__i;}
  _ = new cljs.core.IndexedSeq(G__6882__a,0,null);
} 
return G__6881__delegate.call(this,t,_);};
G__6881.cljs$lang$maxFixedArity = 1;
G__6881.cljs$lang$applyTo = (function (arglist__6883){
var t = cljs.core.first(arglist__6883);
var _ = cljs.core.rest(arglist__6883);
return G__6881__delegate(t,_);
});
G__6881.cljs$core$IFn$_invoke$arity$variadic = G__6881__delegate;
return G__6881;
})()
,(function() { 
var G__6884__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__6884 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6885__i = 0, G__6885__a = new Array(arguments.length -  2);
while (G__6885__i < G__6885__a.length) {G__6885__a[G__6885__i] = arguments[G__6885__i + 2]; ++G__6885__i;}
  _ = new cljs.core.IndexedSeq(G__6885__a,0,null);
} 
return G__6884__delegate.call(this,t,s,_);};
G__6884.cljs$lang$maxFixedArity = 2;
G__6884.cljs$lang$applyTo = (function (arglist__6886){
var t = cljs.core.first(arglist__6886);
arglist__6886 = cljs.core.next(arglist__6886);
var s = cljs.core.first(arglist__6886);
var _ = cljs.core.rest(arglist__6886);
return G__6884__delegate(t,s,_);
});
G__6884.cljs$core$IFn$_invoke$arity$variadic = G__6884__delegate;
return G__6884;
})()
,(function() { 
var G__6887__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__6887 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6888__i = 0, G__6888__a = new Array(arguments.length -  2);
while (G__6888__i < G__6888__a.length) {G__6888__a[G__6888__i] = arguments[G__6888__i + 2]; ++G__6888__i;}
  _ = new cljs.core.IndexedSeq(G__6888__a,0,null);
} 
return G__6887__delegate.call(this,t,r,_);};
G__6887.cljs$lang$maxFixedArity = 2;
G__6887.cljs$lang$applyTo = (function (arglist__6889){
var t = cljs.core.first(arglist__6889);
arglist__6889 = cljs.core.next(arglist__6889);
var r = cljs.core.first(arglist__6889);
var _ = cljs.core.rest(arglist__6889);
return G__6887__delegate(t,r,_);
});
G__6887.cljs$core$IFn$_invoke$arity$variadic = G__6887__delegate;
return G__6887;
})()
,(function() { 
var G__6890__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__6890 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6891__i = 0, G__6891__a = new Array(arguments.length -  2);
while (G__6891__i < G__6891__a.length) {G__6891__a[G__6891__i] = arguments[G__6891__i + 2]; ++G__6891__i;}
  _ = new cljs.core.IndexedSeq(G__6891__a,0,null);
} 
return G__6890__delegate.call(this,t,dist,_);};
G__6890.cljs$lang$maxFixedArity = 2;
G__6890.cljs$lang$applyTo = (function (arglist__6892){
var t = cljs.core.first(arglist__6892);
arglist__6892 = cljs.core.next(arglist__6892);
var dist = cljs.core.first(arglist__6892);
var _ = cljs.core.rest(arglist__6892);
return G__6890__delegate(t,dist,_);
});
G__6890.cljs$core$IFn$_invoke$arity$variadic = G__6890__delegate;
return G__6890;
})()
,(function() { 
var G__6893__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__6893 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6894__i = 0, G__6894__a = new Array(arguments.length -  2);
while (G__6894__i < G__6894__a.length) {G__6894__a[G__6894__i] = arguments[G__6894__i + 2]; ++G__6894__i;}
  _ = new cljs.core.IndexedSeq(G__6894__a,0,null);
} 
return G__6893__delegate.call(this,t,c,_);};
G__6893.cljs$lang$maxFixedArity = 2;
G__6893.cljs$lang$applyTo = (function (arglist__6895){
var t = cljs.core.first(arglist__6895);
arglist__6895 = cljs.core.next(arglist__6895);
var c = cljs.core.first(arglist__6895);
var _ = cljs.core.rest(arglist__6895);
return G__6893__delegate(t,c,_);
});
G__6893.cljs$core$IFn$_invoke$arity$variadic = G__6893__delegate;
return G__6893;
})()
,(function() { 
var G__6896__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__6896 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__6897__i = 0, G__6897__a = new Array(arguments.length -  3);
while (G__6897__i < G__6897__a.length) {G__6897__a[G__6897__i] = arguments[G__6897__i + 3]; ++G__6897__i;}
  _ = new cljs.core.IndexedSeq(G__6897__a,0,null);
} 
return G__6896__delegate.call(this,t,x,y,_);};
G__6896.cljs$lang$maxFixedArity = 3;
G__6896.cljs$lang$applyTo = (function (arglist__6898){
var t = cljs.core.first(arglist__6898);
arglist__6898 = cljs.core.next(arglist__6898);
var x = cljs.core.first(arglist__6898);
arglist__6898 = cljs.core.next(arglist__6898);
var y = cljs.core.first(arglist__6898);
var _ = cljs.core.rest(arglist__6898);
return G__6896__delegate(t,x,y,_);
});
G__6896.cljs$core$IFn$_invoke$arity$variadic = G__6896__delegate;
return G__6896;
})()
,(function() { 
var G__6899__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__6899 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6900__i = 0, G__6900__a = new Array(arguments.length -  2);
while (G__6900__i < G__6900__a.length) {G__6900__a[G__6900__i] = arguments[G__6900__i + 2]; ++G__6900__i;}
  _ = new cljs.core.IndexedSeq(G__6900__a,0,null);
} 
return G__6899__delegate.call(this,t,angle,_);};
G__6899.cljs$lang$maxFixedArity = 2;
G__6899.cljs$lang$applyTo = (function (arglist__6901){
var t = cljs.core.first(arglist__6901);
arglist__6901 = cljs.core.next(arglist__6901);
var angle = cljs.core.first(arglist__6901);
var _ = cljs.core.rest(arglist__6901);
return G__6899__delegate(t,angle,_);
});
G__6899.cljs$core$IFn$_invoke$arity$variadic = G__6899__delegate;
return G__6899;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["contains",(function() { 
var G__6902__delegate = function (s,value,_){
return nex.interpreter.nex_set_contains(s,value);
};
var G__6902 = function (s,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6903__i = 0, G__6903__a = new Array(arguments.length -  2);
while (G__6903__i < G__6903__a.length) {G__6903__a[G__6903__i] = arguments[G__6903__i + 2]; ++G__6903__i;}
  _ = new cljs.core.IndexedSeq(G__6903__a,0,null);
} 
return G__6902__delegate.call(this,s,value,_);};
G__6902.cljs$lang$maxFixedArity = 2;
G__6902.cljs$lang$applyTo = (function (arglist__6904){
var s = cljs.core.first(arglist__6904);
arglist__6904 = cljs.core.next(arglist__6904);
var value = cljs.core.first(arglist__6904);
var _ = cljs.core.rest(arglist__6904);
return G__6902__delegate(s,value,_);
});
G__6902.cljs$core$IFn$_invoke$arity$variadic = G__6902__delegate;
return G__6902;
})()
,"union",(function() { 
var G__6905__delegate = function (s,other,_){
return nex.interpreter.nex_set_union(s,other);
};
var G__6905 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6906__i = 0, G__6906__a = new Array(arguments.length -  2);
while (G__6906__i < G__6906__a.length) {G__6906__a[G__6906__i] = arguments[G__6906__i + 2]; ++G__6906__i;}
  _ = new cljs.core.IndexedSeq(G__6906__a,0,null);
} 
return G__6905__delegate.call(this,s,other,_);};
G__6905.cljs$lang$maxFixedArity = 2;
G__6905.cljs$lang$applyTo = (function (arglist__6907){
var s = cljs.core.first(arglist__6907);
arglist__6907 = cljs.core.next(arglist__6907);
var other = cljs.core.first(arglist__6907);
var _ = cljs.core.rest(arglist__6907);
return G__6905__delegate(s,other,_);
});
G__6905.cljs$core$IFn$_invoke$arity$variadic = G__6905__delegate;
return G__6905;
})()
,"difference",(function() { 
var G__6908__delegate = function (s,other,_){
return nex.interpreter.nex_set_difference(s,other);
};
var G__6908 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6909__i = 0, G__6909__a = new Array(arguments.length -  2);
while (G__6909__i < G__6909__a.length) {G__6909__a[G__6909__i] = arguments[G__6909__i + 2]; ++G__6909__i;}
  _ = new cljs.core.IndexedSeq(G__6909__a,0,null);
} 
return G__6908__delegate.call(this,s,other,_);};
G__6908.cljs$lang$maxFixedArity = 2;
G__6908.cljs$lang$applyTo = (function (arglist__6910){
var s = cljs.core.first(arglist__6910);
arglist__6910 = cljs.core.next(arglist__6910);
var other = cljs.core.first(arglist__6910);
var _ = cljs.core.rest(arglist__6910);
return G__6908__delegate(s,other,_);
});
G__6908.cljs$core$IFn$_invoke$arity$variadic = G__6908__delegate;
return G__6908;
})()
,"intersection",(function() { 
var G__6911__delegate = function (s,other,_){
return nex.interpreter.nex_set_intersection(s,other);
};
var G__6911 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6912__i = 0, G__6912__a = new Array(arguments.length -  2);
while (G__6912__i < G__6912__a.length) {G__6912__a[G__6912__i] = arguments[G__6912__i + 2]; ++G__6912__i;}
  _ = new cljs.core.IndexedSeq(G__6912__a,0,null);
} 
return G__6911__delegate.call(this,s,other,_);};
G__6911.cljs$lang$maxFixedArity = 2;
G__6911.cljs$lang$applyTo = (function (arglist__6913){
var s = cljs.core.first(arglist__6913);
arglist__6913 = cljs.core.next(arglist__6913);
var other = cljs.core.first(arglist__6913);
var _ = cljs.core.rest(arglist__6913);
return G__6911__delegate(s,other,_);
});
G__6911.cljs$core$IFn$_invoke$arity$variadic = G__6911__delegate;
return G__6911;
})()
,"symmetric_difference",(function() { 
var G__6914__delegate = function (s,other,_){
return nex.interpreter.nex_set_symmetric_difference(s,other);
};
var G__6914 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6915__i = 0, G__6915__a = new Array(arguments.length -  2);
while (G__6915__i < G__6915__a.length) {G__6915__a[G__6915__i] = arguments[G__6915__i + 2]; ++G__6915__i;}
  _ = new cljs.core.IndexedSeq(G__6915__a,0,null);
} 
return G__6914__delegate.call(this,s,other,_);};
G__6914.cljs$lang$maxFixedArity = 2;
G__6914.cljs$lang$applyTo = (function (arglist__6916){
var s = cljs.core.first(arglist__6916);
arglist__6916 = cljs.core.next(arglist__6916);
var other = cljs.core.first(arglist__6916);
var _ = cljs.core.rest(arglist__6916);
return G__6914__delegate(s,other,_);
});
G__6914.cljs$core$IFn$_invoke$arity$variadic = G__6914__delegate;
return G__6914;
})()
,"size",(function() { 
var G__6917__delegate = function (s,_){
return nex.interpreter.nex_set_size(s);
};
var G__6917 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6918__i = 0, G__6918__a = new Array(arguments.length -  1);
while (G__6918__i < G__6918__a.length) {G__6918__a[G__6918__i] = arguments[G__6918__i + 1]; ++G__6918__i;}
  _ = new cljs.core.IndexedSeq(G__6918__a,0,null);
} 
return G__6917__delegate.call(this,s,_);};
G__6917.cljs$lang$maxFixedArity = 1;
G__6917.cljs$lang$applyTo = (function (arglist__6919){
var s = cljs.core.first(arglist__6919);
var _ = cljs.core.rest(arglist__6919);
return G__6917__delegate(s,_);
});
G__6917.cljs$core$IFn$_invoke$arity$variadic = G__6917__delegate;
return G__6917;
})()
,"is_empty",(function() { 
var G__6920__delegate = function (s,_){
return nex.interpreter.nex_set_empty_QMARK_(s);
};
var G__6920 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6921__i = 0, G__6921__a = new Array(arguments.length -  1);
while (G__6921__i < G__6921__a.length) {G__6921__a[G__6921__i] = arguments[G__6921__i + 1]; ++G__6921__i;}
  _ = new cljs.core.IndexedSeq(G__6921__a,0,null);
} 
return G__6920__delegate.call(this,s,_);};
G__6920.cljs$lang$maxFixedArity = 1;
G__6920.cljs$lang$applyTo = (function (arglist__6922){
var s = cljs.core.first(arglist__6922);
var _ = cljs.core.rest(arglist__6922);
return G__6920__delegate(s,_);
});
G__6920.cljs$core$IFn$_invoke$arity$variadic = G__6920__delegate;
return G__6920;
})()
,"cursor",(function() { 
var G__6923__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"SetCursor","SetCursor",-1042082688),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.es6_iterator_seq(s.values()))),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__6923 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6924__i = 0, G__6924__a = new Array(arguments.length -  1);
while (G__6924__i < G__6924__a.length) {G__6924__a[G__6924__i] = arguments[G__6924__i + 1]; ++G__6924__i;}
  _ = new cljs.core.IndexedSeq(G__6924__a,0,null);
} 
return G__6923__delegate.call(this,s,_);};
G__6923.cljs$lang$maxFixedArity = 1;
G__6923.cljs$lang$applyTo = (function (arglist__6925){
var s = cljs.core.first(arglist__6925);
var _ = cljs.core.rest(arglist__6925);
return G__6923__delegate(s,_);
});
G__6923.cljs$core$IFn$_invoke$arity$variadic = G__6923__delegate;
return G__6923;
})()
], null),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__6926__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__6926 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6927__i = 0, G__6927__a = new Array(arguments.length -  1);
while (G__6927__i < G__6927__a.length) {G__6927__a[G__6927__i] = arguments[G__6927__i + 1]; ++G__6927__i;}
  _ = new cljs.core.IndexedSeq(G__6927__a,0,null);
} 
return G__6926__delegate.call(this,b,_);};
G__6926.cljs$lang$maxFixedArity = 1;
G__6926.cljs$lang$applyTo = (function (arglist__6928){
var b = cljs.core.first(arglist__6928);
var _ = cljs.core.rest(arglist__6928);
return G__6926__delegate(b,_);
});
G__6926.cljs$core$IFn$_invoke$arity$variadic = G__6926__delegate;
return G__6926;
})()
,"and",(function() { 
var G__6929__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__6929 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6930__i = 0, G__6930__a = new Array(arguments.length -  2);
while (G__6930__i < G__6930__a.length) {G__6930__a[G__6930__i] = arguments[G__6930__i + 2]; ++G__6930__i;}
  _ = new cljs.core.IndexedSeq(G__6930__a,0,null);
} 
return G__6929__delegate.call(this,b,other,_);};
G__6929.cljs$lang$maxFixedArity = 2;
G__6929.cljs$lang$applyTo = (function (arglist__6931){
var b = cljs.core.first(arglist__6931);
arglist__6931 = cljs.core.next(arglist__6931);
var other = cljs.core.first(arglist__6931);
var _ = cljs.core.rest(arglist__6931);
return G__6929__delegate(b,other,_);
});
G__6929.cljs$core$IFn$_invoke$arity$variadic = G__6929__delegate;
return G__6929;
})()
,"or",(function() { 
var G__6932__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__6932 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6933__i = 0, G__6933__a = new Array(arguments.length -  2);
while (G__6933__i < G__6933__a.length) {G__6933__a[G__6933__i] = arguments[G__6933__i + 2]; ++G__6933__i;}
  _ = new cljs.core.IndexedSeq(G__6933__a,0,null);
} 
return G__6932__delegate.call(this,b,other,_);};
G__6932.cljs$lang$maxFixedArity = 2;
G__6932.cljs$lang$applyTo = (function (arglist__6934){
var b = cljs.core.first(arglist__6934);
arglist__6934 = cljs.core.next(arglist__6934);
var other = cljs.core.first(arglist__6934);
var _ = cljs.core.rest(arglist__6934);
return G__6932__delegate(b,other,_);
});
G__6932.cljs$core$IFn$_invoke$arity$variadic = G__6932__delegate;
return G__6932;
})()
,"not",(function() { 
var G__6935__delegate = function (b,_){
return cljs.core.not(b);
};
var G__6935 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6936__i = 0, G__6936__a = new Array(arguments.length -  1);
while (G__6936__i < G__6936__a.length) {G__6936__a[G__6936__i] = arguments[G__6936__i + 1]; ++G__6936__i;}
  _ = new cljs.core.IndexedSeq(G__6936__a,0,null);
} 
return G__6935__delegate.call(this,b,_);};
G__6935.cljs$lang$maxFixedArity = 1;
G__6935.cljs$lang$applyTo = (function (arglist__6937){
var b = cljs.core.first(arglist__6937);
var _ = cljs.core.rest(arglist__6937);
return G__6935__delegate(b,_);
});
G__6935.cljs$core$IFn$_invoke$arity$variadic = G__6935__delegate;
return G__6935;
})()
,"equals",(function() { 
var G__6938__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__6938 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6939__i = 0, G__6939__a = new Array(arguments.length -  2);
while (G__6939__i < G__6939__a.length) {G__6939__a[G__6939__i] = arguments[G__6939__i + 2]; ++G__6939__i;}
  _ = new cljs.core.IndexedSeq(G__6939__a,0,null);
} 
return G__6938__delegate.call(this,b,other,_);};
G__6938.cljs$lang$maxFixedArity = 2;
G__6938.cljs$lang$applyTo = (function (arglist__6940){
var b = cljs.core.first(arglist__6940);
arglist__6940 = cljs.core.next(arglist__6940);
var other = cljs.core.first(arglist__6940);
var _ = cljs.core.rest(arglist__6940);
return G__6938__delegate(b,other,_);
});
G__6938.cljs$core$IFn$_invoke$arity$variadic = G__6938__delegate;
return G__6938;
})()
,"not_equals",(function() { 
var G__6941__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__6941 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6942__i = 0, G__6942__a = new Array(arguments.length -  2);
while (G__6942__i < G__6942__a.length) {G__6942__a[G__6942__i] = arguments[G__6942__i + 2]; ++G__6942__i;}
  _ = new cljs.core.IndexedSeq(G__6942__a,0,null);
} 
return G__6941__delegate.call(this,b,other,_);};
G__6941.cljs$lang$maxFixedArity = 2;
G__6941.cljs$lang$applyTo = (function (arglist__6943){
var b = cljs.core.first(arglist__6943);
arglist__6943 = cljs.core.next(arglist__6943);
var other = cljs.core.first(arglist__6943);
var _ = cljs.core.rest(arglist__6943);
return G__6941__delegate(b,other,_);
});
G__6941.cljs$core$IFn$_invoke$arity$variadic = G__6941__delegate;
return G__6941;
})()
,"compare",(function() { 
var G__6944__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__6944 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6945__i = 0, G__6945__a = new Array(arguments.length -  2);
while (G__6945__i < G__6945__a.length) {G__6945__a[G__6945__i] = arguments[G__6945__i + 2]; ++G__6945__i;}
  _ = new cljs.core.IndexedSeq(G__6945__a,0,null);
} 
return G__6944__delegate.call(this,b,other,_);};
G__6944.cljs$lang$maxFixedArity = 2;
G__6944.cljs$lang$applyTo = (function (arglist__6946){
var b = cljs.core.first(arglist__6946);
arglist__6946 = cljs.core.next(arglist__6946);
var other = cljs.core.first(arglist__6946);
var _ = cljs.core.rest(arglist__6946);
return G__6944__delegate(b,other,_);
});
G__6944.cljs$core$IFn$_invoke$arity$variadic = G__6944__delegate;
return G__6944;
})()
,"hash",(function() { 
var G__6947__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__6947 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6948__i = 0, G__6948__a = new Array(arguments.length -  1);
while (G__6948__i < G__6948__a.length) {G__6948__a[G__6948__i] = arguments[G__6948__i + 1]; ++G__6948__i;}
  _ = new cljs.core.IndexedSeq(G__6948__a,0,null);
} 
return G__6947__delegate.call(this,b,_);};
G__6947.cljs$lang$maxFixedArity = 1;
G__6947.cljs$lang$applyTo = (function (arglist__6949){
var b = cljs.core.first(arglist__6949);
var _ = cljs.core.rest(arglist__6949);
return G__6947__delegate(b,_);
});
G__6947.cljs$core$IFn$_invoke$arity$variadic = G__6947__delegate;
return G__6947;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__6950__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__6950 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6951__i = 0, G__6951__a = new Array(arguments.length -  1);
while (G__6951__i < G__6951__a.length) {G__6951__a[G__6951__i] = arguments[G__6951__i + 1]; ++G__6951__i;}
  _ = new cljs.core.IndexedSeq(G__6951__a,0,null);
} 
return G__6950__delegate.call(this,f,_);};
G__6950.cljs$lang$maxFixedArity = 1;
G__6950.cljs$lang$applyTo = (function (arglist__6952){
var f = cljs.core.first(arglist__6952);
var _ = cljs.core.rest(arglist__6952);
return G__6950__delegate(f,_);
});
G__6950.cljs$core$IFn$_invoke$arity$variadic = G__6950__delegate;
return G__6950;
})()
,"write",(function() { 
var G__6953__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__6953 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6954__i = 0, G__6954__a = new Array(arguments.length -  2);
while (G__6954__i < G__6954__a.length) {G__6954__a[G__6954__i] = arguments[G__6954__i + 2]; ++G__6954__i;}
  _ = new cljs.core.IndexedSeq(G__6954__a,0,null);
} 
return G__6953__delegate.call(this,f,content,_);};
G__6953.cljs$lang$maxFixedArity = 2;
G__6953.cljs$lang$applyTo = (function (arglist__6955){
var f = cljs.core.first(arglist__6955);
arglist__6955 = cljs.core.next(arglist__6955);
var content = cljs.core.first(arglist__6955);
var _ = cljs.core.rest(arglist__6955);
return G__6953__delegate(f,content,_);
});
G__6953.cljs$core$IFn$_invoke$arity$variadic = G__6953__delegate;
return G__6953;
})()
,"append",(function() { 
var G__6956__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__6956 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6957__i = 0, G__6957__a = new Array(arguments.length -  2);
while (G__6957__i < G__6957__a.length) {G__6957__a[G__6957__i] = arguments[G__6957__i + 2]; ++G__6957__i;}
  _ = new cljs.core.IndexedSeq(G__6957__a,0,null);
} 
return G__6956__delegate.call(this,f,content,_);};
G__6956.cljs$lang$maxFixedArity = 2;
G__6956.cljs$lang$applyTo = (function (arglist__6958){
var f = cljs.core.first(arglist__6958);
arglist__6958 = cljs.core.next(arglist__6958);
var content = cljs.core.first(arglist__6958);
var _ = cljs.core.rest(arglist__6958);
return G__6956__delegate(f,content,_);
});
G__6956.cljs$core$IFn$_invoke$arity$variadic = G__6956__delegate;
return G__6956;
})()
,"exists",(function() { 
var G__6959__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__6959 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6960__i = 0, G__6960__a = new Array(arguments.length -  1);
while (G__6960__i < G__6960__a.length) {G__6960__a[G__6960__i] = arguments[G__6960__i + 1]; ++G__6960__i;}
  _ = new cljs.core.IndexedSeq(G__6960__a,0,null);
} 
return G__6959__delegate.call(this,f,_);};
G__6959.cljs$lang$maxFixedArity = 1;
G__6959.cljs$lang$applyTo = (function (arglist__6961){
var f = cljs.core.first(arglist__6961);
var _ = cljs.core.rest(arglist__6961);
return G__6959__delegate(f,_);
});
G__6959.cljs$core$IFn$_invoke$arity$variadic = G__6959__delegate;
return G__6959;
})()
,"delete",(function() { 
var G__6962__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__6962 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6963__i = 0, G__6963__a = new Array(arguments.length -  1);
while (G__6963__i < G__6963__a.length) {G__6963__a[G__6963__i] = arguments[G__6963__i + 1]; ++G__6963__i;}
  _ = new cljs.core.IndexedSeq(G__6963__a,0,null);
} 
return G__6962__delegate.call(this,f,_);};
G__6962.cljs$lang$maxFixedArity = 1;
G__6962.cljs$lang$applyTo = (function (arglist__6964){
var f = cljs.core.first(arglist__6964);
var _ = cljs.core.rest(arglist__6964);
return G__6962__delegate(f,_);
});
G__6962.cljs$core$IFn$_invoke$arity$variadic = G__6962__delegate;
return G__6962;
})()
,"lines",(function() { 
var G__6965__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__6965 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6966__i = 0, G__6966__a = new Array(arguments.length -  1);
while (G__6966__i < G__6966__a.length) {G__6966__a[G__6966__i] = arguments[G__6966__i + 1]; ++G__6966__i;}
  _ = new cljs.core.IndexedSeq(G__6966__a,0,null);
} 
return G__6965__delegate.call(this,f,_);};
G__6965.cljs$lang$maxFixedArity = 1;
G__6965.cljs$lang$applyTo = (function (arglist__6968){
var f = cljs.core.first(arglist__6968);
var _ = cljs.core.rest(arglist__6968);
return G__6965__delegate(f,_);
});
G__6965.cljs$core$IFn$_invoke$arity$variadic = G__6965__delegate;
return G__6965;
})()
,"close",(function() { 
var G__6969__delegate = function (_,___$1){
return null;
};
var G__6969 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__6970__i = 0, G__6970__a = new Array(arguments.length -  1);
while (G__6970__i < G__6970__a.length) {G__6970__a[G__6970__i] = arguments[G__6970__i + 1]; ++G__6970__i;}
  ___$1 = new cljs.core.IndexedSeq(G__6970__a,0,null);
} 
return G__6969__delegate.call(this,_,___$1);};
G__6969.cljs$lang$maxFixedArity = 1;
G__6969.cljs$lang$applyTo = (function (arglist__6972){
var _ = cljs.core.first(arglist__6972);
var ___$1 = cljs.core.rest(arglist__6972);
return G__6969__delegate(_,___$1);
});
G__6969.cljs$core$IFn$_invoke$arity$variadic = G__6969__delegate;
return G__6969;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","bitwise_set","less_than","bitwise_or","plus","to_string","hash","greater_than","bitwise_logical_right_shift","pick","max","not_equals","bitwise_unset","minus","times","bitwise_and","bitwise_right_shift","divided_by","abs","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","equals","greater_than_or_equal","bitwise_rotate_left","bitwise_xor"],[(function() { 
var G__6973__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__6973 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6974__i = 0, G__6974__a = new Array(arguments.length -  2);
while (G__6974__i < G__6974__a.length) {G__6974__a[G__6974__i] = arguments[G__6974__i + 2]; ++G__6974__i;}
  _ = new cljs.core.IndexedSeq(G__6974__a,0,null);
} 
return G__6973__delegate.call(this,n,other,_);};
G__6973.cljs$lang$maxFixedArity = 2;
G__6973.cljs$lang$applyTo = (function (arglist__6975){
var n = cljs.core.first(arglist__6975);
arglist__6975 = cljs.core.next(arglist__6975);
var other = cljs.core.first(arglist__6975);
var _ = cljs.core.rest(arglist__6975);
return G__6973__delegate(n,other,_);
});
G__6973.cljs$core$IFn$_invoke$arity$variadic = G__6973__delegate;
return G__6973;
})()
,(function() { 
var G__6976__delegate = function (n,other,_){
return (n <= other);
};
var G__6976 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6977__i = 0, G__6977__a = new Array(arguments.length -  2);
while (G__6977__i < G__6977__a.length) {G__6977__a[G__6977__i] = arguments[G__6977__i + 2]; ++G__6977__i;}
  _ = new cljs.core.IndexedSeq(G__6977__a,0,null);
} 
return G__6976__delegate.call(this,n,other,_);};
G__6976.cljs$lang$maxFixedArity = 2;
G__6976.cljs$lang$applyTo = (function (arglist__6978){
var n = cljs.core.first(arglist__6978);
arglist__6978 = cljs.core.next(arglist__6978);
var other = cljs.core.first(arglist__6978);
var _ = cljs.core.rest(arglist__6978);
return G__6976__delegate(n,other,_);
});
G__6976.cljs$core$IFn$_invoke$arity$variadic = G__6976__delegate;
return G__6976;
})()
,(function() { 
var G__6979__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__6979 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6980__i = 0, G__6980__a = new Array(arguments.length -  2);
while (G__6980__i < G__6980__a.length) {G__6980__a[G__6980__i] = arguments[G__6980__i + 2]; ++G__6980__i;}
  _ = new cljs.core.IndexedSeq(G__6980__a,0,null);
} 
return G__6979__delegate.call(this,n,other,_);};
G__6979.cljs$lang$maxFixedArity = 2;
G__6979.cljs$lang$applyTo = (function (arglist__6981){
var n = cljs.core.first(arglist__6981);
arglist__6981 = cljs.core.next(arglist__6981);
var other = cljs.core.first(arglist__6981);
var _ = cljs.core.rest(arglist__6981);
return G__6979__delegate(n,other,_);
});
G__6979.cljs$core$IFn$_invoke$arity$variadic = G__6979__delegate;
return G__6979;
})()
,(function() { 
var G__6982__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_set(n,idx);
};
var G__6982 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6983__i = 0, G__6983__a = new Array(arguments.length -  2);
while (G__6983__i < G__6983__a.length) {G__6983__a[G__6983__i] = arguments[G__6983__i + 2]; ++G__6983__i;}
  _ = new cljs.core.IndexedSeq(G__6983__a,0,null);
} 
return G__6982__delegate.call(this,n,idx,_);};
G__6982.cljs$lang$maxFixedArity = 2;
G__6982.cljs$lang$applyTo = (function (arglist__6984){
var n = cljs.core.first(arglist__6984);
arglist__6984 = cljs.core.next(arglist__6984);
var idx = cljs.core.first(arglist__6984);
var _ = cljs.core.rest(arglist__6984);
return G__6982__delegate(n,idx,_);
});
G__6982.cljs$core$IFn$_invoke$arity$variadic = G__6982__delegate;
return G__6982;
})()
,(function() { 
var G__6985__delegate = function (n,other,_){
return (n < other);
};
var G__6985 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6986__i = 0, G__6986__a = new Array(arguments.length -  2);
while (G__6986__i < G__6986__a.length) {G__6986__a[G__6986__i] = arguments[G__6986__i + 2]; ++G__6986__i;}
  _ = new cljs.core.IndexedSeq(G__6986__a,0,null);
} 
return G__6985__delegate.call(this,n,other,_);};
G__6985.cljs$lang$maxFixedArity = 2;
G__6985.cljs$lang$applyTo = (function (arglist__6987){
var n = cljs.core.first(arglist__6987);
arglist__6987 = cljs.core.next(arglist__6987);
var other = cljs.core.first(arglist__6987);
var _ = cljs.core.rest(arglist__6987);
return G__6985__delegate(n,other,_);
});
G__6985.cljs$core$IFn$_invoke$arity$variadic = G__6985__delegate;
return G__6985;
})()
,(function() { 
var G__6988__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_or(n,other);
};
var G__6988 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6989__i = 0, G__6989__a = new Array(arguments.length -  2);
while (G__6989__i < G__6989__a.length) {G__6989__a[G__6989__i] = arguments[G__6989__i + 2]; ++G__6989__i;}
  _ = new cljs.core.IndexedSeq(G__6989__a,0,null);
} 
return G__6988__delegate.call(this,n,other,_);};
G__6988.cljs$lang$maxFixedArity = 2;
G__6988.cljs$lang$applyTo = (function (arglist__6990){
var n = cljs.core.first(arglist__6990);
arglist__6990 = cljs.core.next(arglist__6990);
var other = cljs.core.first(arglist__6990);
var _ = cljs.core.rest(arglist__6990);
return G__6988__delegate(n,other,_);
});
G__6988.cljs$core$IFn$_invoke$arity$variadic = G__6988__delegate;
return G__6988;
})()
,(function() { 
var G__6991__delegate = function (n,other,_){
return (n + other);
};
var G__6991 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__6992__i = 0, G__6992__a = new Array(arguments.length -  2);
while (G__6992__i < G__6992__a.length) {G__6992__a[G__6992__i] = arguments[G__6992__i + 2]; ++G__6992__i;}
  _ = new cljs.core.IndexedSeq(G__6992__a,0,null);
} 
return G__6991__delegate.call(this,n,other,_);};
G__6991.cljs$lang$maxFixedArity = 2;
G__6991.cljs$lang$applyTo = (function (arglist__6993){
var n = cljs.core.first(arglist__6993);
arglist__6993 = cljs.core.next(arglist__6993);
var other = cljs.core.first(arglist__6993);
var _ = cljs.core.rest(arglist__6993);
return G__6991__delegate(n,other,_);
});
G__6991.cljs$core$IFn$_invoke$arity$variadic = G__6991__delegate;
return G__6991;
})()
,(function() { 
var G__6994__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__6994 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6995__i = 0, G__6995__a = new Array(arguments.length -  1);
while (G__6995__i < G__6995__a.length) {G__6995__a[G__6995__i] = arguments[G__6995__i + 1]; ++G__6995__i;}
  _ = new cljs.core.IndexedSeq(G__6995__a,0,null);
} 
return G__6994__delegate.call(this,n,_);};
G__6994.cljs$lang$maxFixedArity = 1;
G__6994.cljs$lang$applyTo = (function (arglist__6996){
var n = cljs.core.first(arglist__6996);
var _ = cljs.core.rest(arglist__6996);
return G__6994__delegate(n,_);
});
G__6994.cljs$core$IFn$_invoke$arity$variadic = G__6994__delegate;
return G__6994;
})()
,(function() { 
var G__6997__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__6997 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__6998__i = 0, G__6998__a = new Array(arguments.length -  1);
while (G__6998__i < G__6998__a.length) {G__6998__a[G__6998__i] = arguments[G__6998__i + 1]; ++G__6998__i;}
  _ = new cljs.core.IndexedSeq(G__6998__a,0,null);
} 
return G__6997__delegate.call(this,n,_);};
G__6997.cljs$lang$maxFixedArity = 1;
G__6997.cljs$lang$applyTo = (function (arglist__6999){
var n = cljs.core.first(arglist__6999);
var _ = cljs.core.rest(arglist__6999);
return G__6997__delegate(n,_);
});
G__6997.cljs$core$IFn$_invoke$arity$variadic = G__6997__delegate;
return G__6997;
})()
,(function() { 
var G__7000__delegate = function (n,other,_){
return (n > other);
};
var G__7000 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7001__i = 0, G__7001__a = new Array(arguments.length -  2);
while (G__7001__i < G__7001__a.length) {G__7001__a[G__7001__i] = arguments[G__7001__i + 2]; ++G__7001__i;}
  _ = new cljs.core.IndexedSeq(G__7001__a,0,null);
} 
return G__7000__delegate.call(this,n,other,_);};
G__7000.cljs$lang$maxFixedArity = 2;
G__7000.cljs$lang$applyTo = (function (arglist__7002){
var n = cljs.core.first(arglist__7002);
arglist__7002 = cljs.core.next(arglist__7002);
var other = cljs.core.first(arglist__7002);
var _ = cljs.core.rest(arglist__7002);
return G__7000__delegate(n,other,_);
});
G__7000.cljs$core$IFn$_invoke$arity$variadic = G__7000__delegate;
return G__7000;
})()
,(function() { 
var G__7003__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_logical_right_shift(n,shift);
};
var G__7003 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7004__i = 0, G__7004__a = new Array(arguments.length -  2);
while (G__7004__i < G__7004__a.length) {G__7004__a[G__7004__i] = arguments[G__7004__i + 2]; ++G__7004__i;}
  _ = new cljs.core.IndexedSeq(G__7004__a,0,null);
} 
return G__7003__delegate.call(this,n,shift,_);};
G__7003.cljs$lang$maxFixedArity = 2;
G__7003.cljs$lang$applyTo = (function (arglist__7005){
var n = cljs.core.first(arglist__7005);
arglist__7005 = cljs.core.next(arglist__7005);
var shift = cljs.core.first(arglist__7005);
var _ = cljs.core.rest(arglist__7005);
return G__7003__delegate(n,shift,_);
});
G__7003.cljs$core$IFn$_invoke$arity$variadic = G__7003__delegate;
return G__7003;
})()
,(function() { 
var G__7006__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__7006 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7007__i = 0, G__7007__a = new Array(arguments.length -  1);
while (G__7007__i < G__7007__a.length) {G__7007__a[G__7007__i] = arguments[G__7007__i + 1]; ++G__7007__i;}
  _ = new cljs.core.IndexedSeq(G__7007__a,0,null);
} 
return G__7006__delegate.call(this,n,_);};
G__7006.cljs$lang$maxFixedArity = 1;
G__7006.cljs$lang$applyTo = (function (arglist__7008){
var n = cljs.core.first(arglist__7008);
var _ = cljs.core.rest(arglist__7008);
return G__7006__delegate(n,_);
});
G__7006.cljs$core$IFn$_invoke$arity$variadic = G__7006__delegate;
return G__7006;
})()
,(function() { 
var G__7009__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7009 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7010__i = 0, G__7010__a = new Array(arguments.length -  2);
while (G__7010__i < G__7010__a.length) {G__7010__a[G__7010__i] = arguments[G__7010__i + 2]; ++G__7010__i;}
  _ = new cljs.core.IndexedSeq(G__7010__a,0,null);
} 
return G__7009__delegate.call(this,n,other,_);};
G__7009.cljs$lang$maxFixedArity = 2;
G__7009.cljs$lang$applyTo = (function (arglist__7011){
var n = cljs.core.first(arglist__7011);
arglist__7011 = cljs.core.next(arglist__7011);
var other = cljs.core.first(arglist__7011);
var _ = cljs.core.rest(arglist__7011);
return G__7009__delegate(n,other,_);
});
G__7009.cljs$core$IFn$_invoke$arity$variadic = G__7009__delegate;
return G__7009;
})()
,(function() { 
var G__7012__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7012 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7013__i = 0, G__7013__a = new Array(arguments.length -  2);
while (G__7013__i < G__7013__a.length) {G__7013__a[G__7013__i] = arguments[G__7013__i + 2]; ++G__7013__i;}
  _ = new cljs.core.IndexedSeq(G__7013__a,0,null);
} 
return G__7012__delegate.call(this,n,other,_);};
G__7012.cljs$lang$maxFixedArity = 2;
G__7012.cljs$lang$applyTo = (function (arglist__7014){
var n = cljs.core.first(arglist__7014);
arglist__7014 = cljs.core.next(arglist__7014);
var other = cljs.core.first(arglist__7014);
var _ = cljs.core.rest(arglist__7014);
return G__7012__delegate(n,other,_);
});
G__7012.cljs$core$IFn$_invoke$arity$variadic = G__7012__delegate;
return G__7012;
})()
,(function() { 
var G__7015__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_unset(n,idx);
};
var G__7015 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7016__i = 0, G__7016__a = new Array(arguments.length -  2);
while (G__7016__i < G__7016__a.length) {G__7016__a[G__7016__i] = arguments[G__7016__i + 2]; ++G__7016__i;}
  _ = new cljs.core.IndexedSeq(G__7016__a,0,null);
} 
return G__7015__delegate.call(this,n,idx,_);};
G__7015.cljs$lang$maxFixedArity = 2;
G__7015.cljs$lang$applyTo = (function (arglist__7017){
var n = cljs.core.first(arglist__7017);
arglist__7017 = cljs.core.next(arglist__7017);
var idx = cljs.core.first(arglist__7017);
var _ = cljs.core.rest(arglist__7017);
return G__7015__delegate(n,idx,_);
});
G__7015.cljs$core$IFn$_invoke$arity$variadic = G__7015__delegate;
return G__7015;
})()
,(function() { 
var G__7018__delegate = function (n,other,_){
return (n - other);
};
var G__7018 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7019__i = 0, G__7019__a = new Array(arguments.length -  2);
while (G__7019__i < G__7019__a.length) {G__7019__a[G__7019__i] = arguments[G__7019__i + 2]; ++G__7019__i;}
  _ = new cljs.core.IndexedSeq(G__7019__a,0,null);
} 
return G__7018__delegate.call(this,n,other,_);};
G__7018.cljs$lang$maxFixedArity = 2;
G__7018.cljs$lang$applyTo = (function (arglist__7020){
var n = cljs.core.first(arglist__7020);
arglist__7020 = cljs.core.next(arglist__7020);
var other = cljs.core.first(arglist__7020);
var _ = cljs.core.rest(arglist__7020);
return G__7018__delegate(n,other,_);
});
G__7018.cljs$core$IFn$_invoke$arity$variadic = G__7018__delegate;
return G__7018;
})()
,(function() { 
var G__7021__delegate = function (n,other,_){
return (n * other);
};
var G__7021 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7022__i = 0, G__7022__a = new Array(arguments.length -  2);
while (G__7022__i < G__7022__a.length) {G__7022__a[G__7022__i] = arguments[G__7022__i + 2]; ++G__7022__i;}
  _ = new cljs.core.IndexedSeq(G__7022__a,0,null);
} 
return G__7021__delegate.call(this,n,other,_);};
G__7021.cljs$lang$maxFixedArity = 2;
G__7021.cljs$lang$applyTo = (function (arglist__7023){
var n = cljs.core.first(arglist__7023);
arglist__7023 = cljs.core.next(arglist__7023);
var other = cljs.core.first(arglist__7023);
var _ = cljs.core.rest(arglist__7023);
return G__7021__delegate(n,other,_);
});
G__7021.cljs$core$IFn$_invoke$arity$variadic = G__7021__delegate;
return G__7021;
})()
,(function() { 
var G__7024__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_and(n,other);
};
var G__7024 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7025__i = 0, G__7025__a = new Array(arguments.length -  2);
while (G__7025__i < G__7025__a.length) {G__7025__a[G__7025__i] = arguments[G__7025__i + 2]; ++G__7025__i;}
  _ = new cljs.core.IndexedSeq(G__7025__a,0,null);
} 
return G__7024__delegate.call(this,n,other,_);};
G__7024.cljs$lang$maxFixedArity = 2;
G__7024.cljs$lang$applyTo = (function (arglist__7026){
var n = cljs.core.first(arglist__7026);
arglist__7026 = cljs.core.next(arglist__7026);
var other = cljs.core.first(arglist__7026);
var _ = cljs.core.rest(arglist__7026);
return G__7024__delegate(n,other,_);
});
G__7024.cljs$core$IFn$_invoke$arity$variadic = G__7024__delegate;
return G__7024;
})()
,(function() { 
var G__7027__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_right_shift(n,shift);
};
var G__7027 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7028__i = 0, G__7028__a = new Array(arguments.length -  2);
while (G__7028__i < G__7028__a.length) {G__7028__a[G__7028__i] = arguments[G__7028__i + 2]; ++G__7028__i;}
  _ = new cljs.core.IndexedSeq(G__7028__a,0,null);
} 
return G__7027__delegate.call(this,n,shift,_);};
G__7027.cljs$lang$maxFixedArity = 2;
G__7027.cljs$lang$applyTo = (function (arglist__7029){
var n = cljs.core.first(arglist__7029);
arglist__7029 = cljs.core.next(arglist__7029);
var shift = cljs.core.first(arglist__7029);
var _ = cljs.core.rest(arglist__7029);
return G__7027__delegate(n,shift,_);
});
G__7027.cljs$core$IFn$_invoke$arity$variadic = G__7027__delegate;
return G__7027;
})()
,(function() { 
var G__7030__delegate = function (n,other,_){
return (n / other);
};
var G__7030 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7031__i = 0, G__7031__a = new Array(arguments.length -  2);
while (G__7031__i < G__7031__a.length) {G__7031__a[G__7031__i] = arguments[G__7031__i + 2]; ++G__7031__i;}
  _ = new cljs.core.IndexedSeq(G__7031__a,0,null);
} 
return G__7030__delegate.call(this,n,other,_);};
G__7030.cljs$lang$maxFixedArity = 2;
G__7030.cljs$lang$applyTo = (function (arglist__7032){
var n = cljs.core.first(arglist__7032);
arglist__7032 = cljs.core.next(arglist__7032);
var other = cljs.core.first(arglist__7032);
var _ = cljs.core.rest(arglist__7032);
return G__7030__delegate(n,other,_);
});
G__7030.cljs$core$IFn$_invoke$arity$variadic = G__7030__delegate;
return G__7030;
})()
,(function() { 
var G__7033__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7033 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7034__i = 0, G__7034__a = new Array(arguments.length -  1);
while (G__7034__i < G__7034__a.length) {G__7034__a[G__7034__i] = arguments[G__7034__i + 1]; ++G__7034__i;}
  _ = new cljs.core.IndexedSeq(G__7034__a,0,null);
} 
return G__7033__delegate.call(this,n,_);};
G__7033.cljs$lang$maxFixedArity = 1;
G__7033.cljs$lang$applyTo = (function (arglist__7035){
var n = cljs.core.first(arglist__7035);
var _ = cljs.core.rest(arglist__7035);
return G__7033__delegate(n,_);
});
G__7033.cljs$core$IFn$_invoke$arity$variadic = G__7033__delegate;
return G__7033;
})()
,(function() { 
var G__7036__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_right(n,shift);
};
var G__7036 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7037__i = 0, G__7037__a = new Array(arguments.length -  2);
while (G__7037__i < G__7037__a.length) {G__7037__a[G__7037__i] = arguments[G__7037__i + 2]; ++G__7037__i;}
  _ = new cljs.core.IndexedSeq(G__7037__a,0,null);
} 
return G__7036__delegate.call(this,n,shift,_);};
G__7036.cljs$lang$maxFixedArity = 2;
G__7036.cljs$lang$applyTo = (function (arglist__7038){
var n = cljs.core.first(arglist__7038);
arglist__7038 = cljs.core.next(arglist__7038);
var shift = cljs.core.first(arglist__7038);
var _ = cljs.core.rest(arglist__7038);
return G__7036__delegate(n,shift,_);
});
G__7036.cljs$core$IFn$_invoke$arity$variadic = G__7036__delegate;
return G__7036;
})()
,(function() { 
var G__7039__delegate = function (n,_){
return nex.interpreter.nex_bitwise_not(n);
};
var G__7039 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7040__i = 0, G__7040__a = new Array(arguments.length -  1);
while (G__7040__i < G__7040__a.length) {G__7040__a[G__7040__i] = arguments[G__7040__i + 1]; ++G__7040__i;}
  _ = new cljs.core.IndexedSeq(G__7040__a,0,null);
} 
return G__7039__delegate.call(this,n,_);};
G__7039.cljs$lang$maxFixedArity = 1;
G__7039.cljs$lang$applyTo = (function (arglist__7041){
var n = cljs.core.first(arglist__7041);
var _ = cljs.core.rest(arglist__7041);
return G__7039__delegate(n,_);
});
G__7039.cljs$core$IFn$_invoke$arity$variadic = G__7039__delegate;
return G__7039;
})()
,(function() { 
var G__7042__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_left_shift(n,shift);
};
var G__7042 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7043__i = 0, G__7043__a = new Array(arguments.length -  2);
while (G__7043__i < G__7043__a.length) {G__7043__a[G__7043__i] = arguments[G__7043__i + 2]; ++G__7043__i;}
  _ = new cljs.core.IndexedSeq(G__7043__a,0,null);
} 
return G__7042__delegate.call(this,n,shift,_);};
G__7042.cljs$lang$maxFixedArity = 2;
G__7042.cljs$lang$applyTo = (function (arglist__7044){
var n = cljs.core.first(arglist__7044);
arglist__7044 = cljs.core.next(arglist__7044);
var shift = cljs.core.first(arglist__7044);
var _ = cljs.core.rest(arglist__7044);
return G__7042__delegate(n,shift,_);
});
G__7042.cljs$core$IFn$_invoke$arity$variadic = G__7042__delegate;
return G__7042;
})()
,(function() { 
var G__7045__delegate = function (n,idx,_){
return nex.interpreter.nex_bitwise_is_set(n,idx);
};
var G__7045 = function (n,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7046__i = 0, G__7046__a = new Array(arguments.length -  2);
while (G__7046__i < G__7046__a.length) {G__7046__a[G__7046__i] = arguments[G__7046__i + 2]; ++G__7046__i;}
  _ = new cljs.core.IndexedSeq(G__7046__a,0,null);
} 
return G__7045__delegate.call(this,n,idx,_);};
G__7045.cljs$lang$maxFixedArity = 2;
G__7045.cljs$lang$applyTo = (function (arglist__7047){
var n = cljs.core.first(arglist__7047);
arglist__7047 = cljs.core.next(arglist__7047);
var idx = cljs.core.first(arglist__7047);
var _ = cljs.core.rest(arglist__7047);
return G__7045__delegate(n,idx,_);
});
G__7045.cljs$core$IFn$_invoke$arity$variadic = G__7045__delegate;
return G__7045;
})()
,(function() { 
var G__7048__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7048 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7049__i = 0, G__7049__a = new Array(arguments.length -  2);
while (G__7049__i < G__7049__a.length) {G__7049__a[G__7049__i] = arguments[G__7049__i + 2]; ++G__7049__i;}
  _ = new cljs.core.IndexedSeq(G__7049__a,0,null);
} 
return G__7048__delegate.call(this,n,other,_);};
G__7048.cljs$lang$maxFixedArity = 2;
G__7048.cljs$lang$applyTo = (function (arglist__7050){
var n = cljs.core.first(arglist__7050);
arglist__7050 = cljs.core.next(arglist__7050);
var other = cljs.core.first(arglist__7050);
var _ = cljs.core.rest(arglist__7050);
return G__7048__delegate(n,other,_);
});
G__7048.cljs$core$IFn$_invoke$arity$variadic = G__7048__delegate;
return G__7048;
})()
,(function() { 
var G__7051__delegate = function (n,other,_){
return (n >= other);
};
var G__7051 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7052__i = 0, G__7052__a = new Array(arguments.length -  2);
while (G__7052__i < G__7052__a.length) {G__7052__a[G__7052__i] = arguments[G__7052__i + 2]; ++G__7052__i;}
  _ = new cljs.core.IndexedSeq(G__7052__a,0,null);
} 
return G__7051__delegate.call(this,n,other,_);};
G__7051.cljs$lang$maxFixedArity = 2;
G__7051.cljs$lang$applyTo = (function (arglist__7054){
var n = cljs.core.first(arglist__7054);
arglist__7054 = cljs.core.next(arglist__7054);
var other = cljs.core.first(arglist__7054);
var _ = cljs.core.rest(arglist__7054);
return G__7051__delegate(n,other,_);
});
G__7051.cljs$core$IFn$_invoke$arity$variadic = G__7051__delegate;
return G__7051;
})()
,(function() { 
var G__7055__delegate = function (n,shift,_){
return nex.interpreter.nex_bitwise_rotate_left(n,shift);
};
var G__7055 = function (n,shift,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7056__i = 0, G__7056__a = new Array(arguments.length -  2);
while (G__7056__i < G__7056__a.length) {G__7056__a[G__7056__i] = arguments[G__7056__i + 2]; ++G__7056__i;}
  _ = new cljs.core.IndexedSeq(G__7056__a,0,null);
} 
return G__7055__delegate.call(this,n,shift,_);};
G__7055.cljs$lang$maxFixedArity = 2;
G__7055.cljs$lang$applyTo = (function (arglist__7057){
var n = cljs.core.first(arglist__7057);
arglist__7057 = cljs.core.next(arglist__7057);
var shift = cljs.core.first(arglist__7057);
var _ = cljs.core.rest(arglist__7057);
return G__7055__delegate(n,shift,_);
});
G__7055.cljs$core$IFn$_invoke$arity$variadic = G__7055__delegate;
return G__7055;
})()
,(function() { 
var G__7058__delegate = function (n,other,_){
return nex.interpreter.nex_bitwise_xor(n,other);
};
var G__7058 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7059__i = 0, G__7059__a = new Array(arguments.length -  2);
while (G__7059__i < G__7059__a.length) {G__7059__a[G__7059__i] = arguments[G__7059__i + 2]; ++G__7059__i;}
  _ = new cljs.core.IndexedSeq(G__7059__a,0,null);
} 
return G__7058__delegate.call(this,n,other,_);};
G__7058.cljs$lang$maxFixedArity = 2;
G__7058.cljs$lang$applyTo = (function (arglist__7060){
var n = cljs.core.first(arglist__7060);
arglist__7060 = cljs.core.next(arglist__7060);
var other = cljs.core.first(arglist__7060);
var _ = cljs.core.rest(arglist__7060);
return G__7058__delegate(n,other,_);
});
G__7058.cljs$core$IFn$_invoke$arity$variadic = G__7058__delegate;
return G__7058;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7061__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7061 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7062__i = 0, G__7062__a = new Array(arguments.length -  1);
while (G__7062__i < G__7062__a.length) {G__7062__a[G__7062__i] = arguments[G__7062__i + 1]; ++G__7062__i;}
  _ = new cljs.core.IndexedSeq(G__7062__a,0,null);
} 
return G__7061__delegate.call(this,c,_);};
G__7061.cljs$lang$maxFixedArity = 1;
G__7061.cljs$lang$applyTo = (function (arglist__7063){
var c = cljs.core.first(arglist__7063);
var _ = cljs.core.rest(arglist__7063);
return G__7061__delegate(c,_);
});
G__7061.cljs$core$IFn$_invoke$arity$variadic = G__7061__delegate;
return G__7061;
})()
,"item",(function() { 
var G__7064__delegate = function (c,_){
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
var G__7064 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7065__i = 0, G__7065__a = new Array(arguments.length -  1);
while (G__7065__i < G__7065__a.length) {G__7065__a[G__7065__i] = arguments[G__7065__i + 1]; ++G__7065__i;}
  _ = new cljs.core.IndexedSeq(G__7065__a,0,null);
} 
return G__7064__delegate.call(this,c,_);};
G__7064.cljs$lang$maxFixedArity = 1;
G__7064.cljs$lang$applyTo = (function (arglist__7066){
var c = cljs.core.first(arglist__7066);
var _ = cljs.core.rest(arglist__7066);
return G__7064__delegate(c,_);
});
G__7064.cljs$core$IFn$_invoke$arity$variadic = G__7064__delegate;
return G__7064;
})()
,"next",(function() { 
var G__7067__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7067 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7068__i = 0, G__7068__a = new Array(arguments.length -  1);
while (G__7068__i < G__7068__a.length) {G__7068__a[G__7068__i] = arguments[G__7068__i + 1]; ++G__7068__i;}
  _ = new cljs.core.IndexedSeq(G__7068__a,0,null);
} 
return G__7067__delegate.call(this,c,_);};
G__7067.cljs$lang$maxFixedArity = 1;
G__7067.cljs$lang$applyTo = (function (arglist__7069){
var c = cljs.core.first(arglist__7069);
var _ = cljs.core.rest(arglist__7069);
return G__7067__delegate(c,_);
});
G__7067.cljs$core$IFn$_invoke$arity$variadic = G__7067__delegate;
return G__7067;
})()
,"at_end",(function() { 
var G__7070__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7070 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7071__i = 0, G__7071__a = new Array(arguments.length -  1);
while (G__7071__i < G__7071__a.length) {G__7071__a[G__7071__i] = arguments[G__7071__i + 1]; ++G__7071__i;}
  _ = new cljs.core.IndexedSeq(G__7071__a,0,null);
} 
return G__7070__delegate.call(this,c,_);};
G__7070.cljs$lang$maxFixedArity = 1;
G__7070.cljs$lang$applyTo = (function (arglist__7072){
var c = cljs.core.first(arglist__7072);
var _ = cljs.core.rest(arglist__7072);
return G__7070__delegate(c,_);
});
G__7070.cljs$core$IFn$_invoke$arity$variadic = G__7070__delegate;
return G__7070;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7073__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7073 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7075__i = 0, G__7075__a = new Array(arguments.length -  2);
while (G__7075__i < G__7075__a.length) {G__7075__a[G__7075__i] = arguments[G__7075__i + 2]; ++G__7075__i;}
  _ = new cljs.core.IndexedSeq(G__7075__a,0,null);
} 
return G__7073__delegate.call(this,n,other,_);};
G__7073.cljs$lang$maxFixedArity = 2;
G__7073.cljs$lang$applyTo = (function (arglist__7076){
var n = cljs.core.first(arglist__7076);
arglist__7076 = cljs.core.next(arglist__7076);
var other = cljs.core.first(arglist__7076);
var _ = cljs.core.rest(arglist__7076);
return G__7073__delegate(n,other,_);
});
G__7073.cljs$core$IFn$_invoke$arity$variadic = G__7073__delegate;
return G__7073;
})()
,(function() { 
var G__7077__delegate = function (n,other,_){
return (n <= other);
};
var G__7077 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7078__i = 0, G__7078__a = new Array(arguments.length -  2);
while (G__7078__i < G__7078__a.length) {G__7078__a[G__7078__i] = arguments[G__7078__i + 2]; ++G__7078__i;}
  _ = new cljs.core.IndexedSeq(G__7078__a,0,null);
} 
return G__7077__delegate.call(this,n,other,_);};
G__7077.cljs$lang$maxFixedArity = 2;
G__7077.cljs$lang$applyTo = (function (arglist__7079){
var n = cljs.core.first(arglist__7079);
arglist__7079 = cljs.core.next(arglist__7079);
var other = cljs.core.first(arglist__7079);
var _ = cljs.core.rest(arglist__7079);
return G__7077__delegate(n,other,_);
});
G__7077.cljs$core$IFn$_invoke$arity$variadic = G__7077__delegate;
return G__7077;
})()
,(function() { 
var G__7080__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7080 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7081__i = 0, G__7081__a = new Array(arguments.length -  2);
while (G__7081__i < G__7081__a.length) {G__7081__a[G__7081__i] = arguments[G__7081__i + 2]; ++G__7081__i;}
  _ = new cljs.core.IndexedSeq(G__7081__a,0,null);
} 
return G__7080__delegate.call(this,n,other,_);};
G__7080.cljs$lang$maxFixedArity = 2;
G__7080.cljs$lang$applyTo = (function (arglist__7082){
var n = cljs.core.first(arglist__7082);
arglist__7082 = cljs.core.next(arglist__7082);
var other = cljs.core.first(arglist__7082);
var _ = cljs.core.rest(arglist__7082);
return G__7080__delegate(n,other,_);
});
G__7080.cljs$core$IFn$_invoke$arity$variadic = G__7080__delegate;
return G__7080;
})()
,(function() { 
var G__7083__delegate = function (n,other,_){
return (n < other);
};
var G__7083 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7084__i = 0, G__7084__a = new Array(arguments.length -  2);
while (G__7084__i < G__7084__a.length) {G__7084__a[G__7084__i] = arguments[G__7084__i + 2]; ++G__7084__i;}
  _ = new cljs.core.IndexedSeq(G__7084__a,0,null);
} 
return G__7083__delegate.call(this,n,other,_);};
G__7083.cljs$lang$maxFixedArity = 2;
G__7083.cljs$lang$applyTo = (function (arglist__7085){
var n = cljs.core.first(arglist__7085);
arglist__7085 = cljs.core.next(arglist__7085);
var other = cljs.core.first(arglist__7085);
var _ = cljs.core.rest(arglist__7085);
return G__7083__delegate(n,other,_);
});
G__7083.cljs$core$IFn$_invoke$arity$variadic = G__7083__delegate;
return G__7083;
})()
,(function() { 
var G__7086__delegate = function (n,other,_){
return (n + other);
};
var G__7086 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7087__i = 0, G__7087__a = new Array(arguments.length -  2);
while (G__7087__i < G__7087__a.length) {G__7087__a[G__7087__i] = arguments[G__7087__i + 2]; ++G__7087__i;}
  _ = new cljs.core.IndexedSeq(G__7087__a,0,null);
} 
return G__7086__delegate.call(this,n,other,_);};
G__7086.cljs$lang$maxFixedArity = 2;
G__7086.cljs$lang$applyTo = (function (arglist__7088){
var n = cljs.core.first(arglist__7088);
arglist__7088 = cljs.core.next(arglist__7088);
var other = cljs.core.first(arglist__7088);
var _ = cljs.core.rest(arglist__7088);
return G__7086__delegate(n,other,_);
});
G__7086.cljs$core$IFn$_invoke$arity$variadic = G__7086__delegate;
return G__7086;
})()
,(function() { 
var G__7089__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7089 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7090__i = 0, G__7090__a = new Array(arguments.length -  1);
while (G__7090__i < G__7090__a.length) {G__7090__a[G__7090__i] = arguments[G__7090__i + 1]; ++G__7090__i;}
  _ = new cljs.core.IndexedSeq(G__7090__a,0,null);
} 
return G__7089__delegate.call(this,n,_);};
G__7089.cljs$lang$maxFixedArity = 1;
G__7089.cljs$lang$applyTo = (function (arglist__7091){
var n = cljs.core.first(arglist__7091);
var _ = cljs.core.rest(arglist__7091);
return G__7089__delegate(n,_);
});
G__7089.cljs$core$IFn$_invoke$arity$variadic = G__7089__delegate;
return G__7089;
})()
,(function() { 
var G__7092__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7092 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7093__i = 0, G__7093__a = new Array(arguments.length -  1);
while (G__7093__i < G__7093__a.length) {G__7093__a[G__7093__i] = arguments[G__7093__i + 1]; ++G__7093__i;}
  _ = new cljs.core.IndexedSeq(G__7093__a,0,null);
} 
return G__7092__delegate.call(this,n,_);};
G__7092.cljs$lang$maxFixedArity = 1;
G__7092.cljs$lang$applyTo = (function (arglist__7094){
var n = cljs.core.first(arglist__7094);
var _ = cljs.core.rest(arglist__7094);
return G__7092__delegate(n,_);
});
G__7092.cljs$core$IFn$_invoke$arity$variadic = G__7092__delegate;
return G__7092;
})()
,(function() { 
var G__7095__delegate = function (n,other,_){
return (n > other);
};
var G__7095 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7096__i = 0, G__7096__a = new Array(arguments.length -  2);
while (G__7096__i < G__7096__a.length) {G__7096__a[G__7096__i] = arguments[G__7096__i + 2]; ++G__7096__i;}
  _ = new cljs.core.IndexedSeq(G__7096__a,0,null);
} 
return G__7095__delegate.call(this,n,other,_);};
G__7095.cljs$lang$maxFixedArity = 2;
G__7095.cljs$lang$applyTo = (function (arglist__7097){
var n = cljs.core.first(arglist__7097);
arglist__7097 = cljs.core.next(arglist__7097);
var other = cljs.core.first(arglist__7097);
var _ = cljs.core.rest(arglist__7097);
return G__7095__delegate(n,other,_);
});
G__7095.cljs$core$IFn$_invoke$arity$variadic = G__7095__delegate;
return G__7095;
})()
,(function() { 
var G__7098__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7098 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7099__i = 0, G__7099__a = new Array(arguments.length -  2);
while (G__7099__i < G__7099__a.length) {G__7099__a[G__7099__i] = arguments[G__7099__i + 2]; ++G__7099__i;}
  _ = new cljs.core.IndexedSeq(G__7099__a,0,null);
} 
return G__7098__delegate.call(this,n,other,_);};
G__7098.cljs$lang$maxFixedArity = 2;
G__7098.cljs$lang$applyTo = (function (arglist__7100){
var n = cljs.core.first(arglist__7100);
arglist__7100 = cljs.core.next(arglist__7100);
var other = cljs.core.first(arglist__7100);
var _ = cljs.core.rest(arglist__7100);
return G__7098__delegate(n,other,_);
});
G__7098.cljs$core$IFn$_invoke$arity$variadic = G__7098__delegate;
return G__7098;
})()
,(function() { 
var G__7101__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7101 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7102__i = 0, G__7102__a = new Array(arguments.length -  2);
while (G__7102__i < G__7102__a.length) {G__7102__a[G__7102__i] = arguments[G__7102__i + 2]; ++G__7102__i;}
  _ = new cljs.core.IndexedSeq(G__7102__a,0,null);
} 
return G__7101__delegate.call(this,n,other,_);};
G__7101.cljs$lang$maxFixedArity = 2;
G__7101.cljs$lang$applyTo = (function (arglist__7103){
var n = cljs.core.first(arglist__7103);
arglist__7103 = cljs.core.next(arglist__7103);
var other = cljs.core.first(arglist__7103);
var _ = cljs.core.rest(arglist__7103);
return G__7101__delegate(n,other,_);
});
G__7101.cljs$core$IFn$_invoke$arity$variadic = G__7101__delegate;
return G__7101;
})()
,(function() { 
var G__7104__delegate = function (n,other,_){
return (n - other);
};
var G__7104 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7105__i = 0, G__7105__a = new Array(arguments.length -  2);
while (G__7105__i < G__7105__a.length) {G__7105__a[G__7105__i] = arguments[G__7105__i + 2]; ++G__7105__i;}
  _ = new cljs.core.IndexedSeq(G__7105__a,0,null);
} 
return G__7104__delegate.call(this,n,other,_);};
G__7104.cljs$lang$maxFixedArity = 2;
G__7104.cljs$lang$applyTo = (function (arglist__7106){
var n = cljs.core.first(arglist__7106);
arglist__7106 = cljs.core.next(arglist__7106);
var other = cljs.core.first(arglist__7106);
var _ = cljs.core.rest(arglist__7106);
return G__7104__delegate(n,other,_);
});
G__7104.cljs$core$IFn$_invoke$arity$variadic = G__7104__delegate;
return G__7104;
})()
,(function() { 
var G__7107__delegate = function (n,other,_){
return (n * other);
};
var G__7107 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7108__i = 0, G__7108__a = new Array(arguments.length -  2);
while (G__7108__i < G__7108__a.length) {G__7108__a[G__7108__i] = arguments[G__7108__i + 2]; ++G__7108__i;}
  _ = new cljs.core.IndexedSeq(G__7108__a,0,null);
} 
return G__7107__delegate.call(this,n,other,_);};
G__7107.cljs$lang$maxFixedArity = 2;
G__7107.cljs$lang$applyTo = (function (arglist__7109){
var n = cljs.core.first(arglist__7109);
arglist__7109 = cljs.core.next(arglist__7109);
var other = cljs.core.first(arglist__7109);
var _ = cljs.core.rest(arglist__7109);
return G__7107__delegate(n,other,_);
});
G__7107.cljs$core$IFn$_invoke$arity$variadic = G__7107__delegate;
return G__7107;
})()
,(function() { 
var G__7110__delegate = function (n,other,_){
return (n / other);
};
var G__7110 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7111__i = 0, G__7111__a = new Array(arguments.length -  2);
while (G__7111__i < G__7111__a.length) {G__7111__a[G__7111__i] = arguments[G__7111__i + 2]; ++G__7111__i;}
  _ = new cljs.core.IndexedSeq(G__7111__a,0,null);
} 
return G__7110__delegate.call(this,n,other,_);};
G__7110.cljs$lang$maxFixedArity = 2;
G__7110.cljs$lang$applyTo = (function (arglist__7112){
var n = cljs.core.first(arglist__7112);
arglist__7112 = cljs.core.next(arglist__7112);
var other = cljs.core.first(arglist__7112);
var _ = cljs.core.rest(arglist__7112);
return G__7110__delegate(n,other,_);
});
G__7110.cljs$core$IFn$_invoke$arity$variadic = G__7110__delegate;
return G__7110;
})()
,(function() { 
var G__7113__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7113 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7114__i = 0, G__7114__a = new Array(arguments.length -  1);
while (G__7114__i < G__7114__a.length) {G__7114__a[G__7114__i] = arguments[G__7114__i + 1]; ++G__7114__i;}
  _ = new cljs.core.IndexedSeq(G__7114__a,0,null);
} 
return G__7113__delegate.call(this,n,_);};
G__7113.cljs$lang$maxFixedArity = 1;
G__7113.cljs$lang$applyTo = (function (arglist__7115){
var n = cljs.core.first(arglist__7115);
var _ = cljs.core.rest(arglist__7115);
return G__7113__delegate(n,_);
});
G__7113.cljs$core$IFn$_invoke$arity$variadic = G__7113__delegate;
return G__7113;
})()
,(function() { 
var G__7116__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7116 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7117__i = 0, G__7117__a = new Array(arguments.length -  1);
while (G__7117__i < G__7117__a.length) {G__7117__a[G__7117__i] = arguments[G__7117__i + 1]; ++G__7117__i;}
  _ = new cljs.core.IndexedSeq(G__7117__a,0,null);
} 
return G__7116__delegate.call(this,n,_);};
G__7116.cljs$lang$maxFixedArity = 1;
G__7116.cljs$lang$applyTo = (function (arglist__7118){
var n = cljs.core.first(arglist__7118);
var _ = cljs.core.rest(arglist__7118);
return G__7116__delegate(n,_);
});
G__7116.cljs$core$IFn$_invoke$arity$variadic = G__7116__delegate;
return G__7116;
})()
,(function() { 
var G__7119__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7119 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7120__i = 0, G__7120__a = new Array(arguments.length -  2);
while (G__7120__i < G__7120__a.length) {G__7120__a[G__7120__i] = arguments[G__7120__i + 2]; ++G__7120__i;}
  _ = new cljs.core.IndexedSeq(G__7120__a,0,null);
} 
return G__7119__delegate.call(this,n,other,_);};
G__7119.cljs$lang$maxFixedArity = 2;
G__7119.cljs$lang$applyTo = (function (arglist__7121){
var n = cljs.core.first(arglist__7121);
arglist__7121 = cljs.core.next(arglist__7121);
var other = cljs.core.first(arglist__7121);
var _ = cljs.core.rest(arglist__7121);
return G__7119__delegate(n,other,_);
});
G__7119.cljs$core$IFn$_invoke$arity$variadic = G__7119__delegate;
return G__7119;
})()
,(function() { 
var G__7122__delegate = function (n,other,_){
return (n >= other);
};
var G__7122 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7123__i = 0, G__7123__a = new Array(arguments.length -  2);
while (G__7123__i < G__7123__a.length) {G__7123__a[G__7123__i] = arguments[G__7123__i + 2]; ++G__7123__i;}
  _ = new cljs.core.IndexedSeq(G__7123__a,0,null);
} 
return G__7122__delegate.call(this,n,other,_);};
G__7122.cljs$lang$maxFixedArity = 2;
G__7122.cljs$lang$applyTo = (function (arglist__7124){
var n = cljs.core.first(arglist__7124);
arglist__7124 = cljs.core.next(arglist__7124);
var other = cljs.core.first(arglist__7124);
var _ = cljs.core.rest(arglist__7124);
return G__7122__delegate(n,other,_);
});
G__7122.cljs$core$IFn$_invoke$arity$variadic = G__7122__delegate;
return G__7122;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7125__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7125 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7126__i = 0, G__7126__a = new Array(arguments.length -  1);
while (G__7126__i < G__7126__a.length) {G__7126__a[G__7126__i] = arguments[G__7126__i + 1]; ++G__7126__i;}
  _ = new cljs.core.IndexedSeq(G__7126__a,0,null);
} 
return G__7125__delegate.call(this,c,_);};
G__7125.cljs$lang$maxFixedArity = 1;
G__7125.cljs$lang$applyTo = (function (arglist__7127){
var c = cljs.core.first(arglist__7127);
var _ = cljs.core.rest(arglist__7127);
return G__7125__delegate(c,_);
});
G__7125.cljs$core$IFn$_invoke$arity$variadic = G__7125__delegate;
return G__7125;
})()
,"item",(function() { 
var G__7128__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7128 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7129__i = 0, G__7129__a = new Array(arguments.length -  1);
while (G__7129__i < G__7129__a.length) {G__7129__a[G__7129__i] = arguments[G__7129__i + 1]; ++G__7129__i;}
  _ = new cljs.core.IndexedSeq(G__7129__a,0,null);
} 
return G__7128__delegate.call(this,c,_);};
G__7128.cljs$lang$maxFixedArity = 1;
G__7128.cljs$lang$applyTo = (function (arglist__7130){
var c = cljs.core.first(arglist__7130);
var _ = cljs.core.rest(arglist__7130);
return G__7128__delegate(c,_);
});
G__7128.cljs$core$IFn$_invoke$arity$variadic = G__7128__delegate;
return G__7128;
})()
,"next",(function() { 
var G__7131__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7131 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7132__i = 0, G__7132__a = new Array(arguments.length -  1);
while (G__7132__i < G__7132__a.length) {G__7132__a[G__7132__i] = arguments[G__7132__i + 1]; ++G__7132__i;}
  _ = new cljs.core.IndexedSeq(G__7132__a,0,null);
} 
return G__7131__delegate.call(this,c,_);};
G__7131.cljs$lang$maxFixedArity = 1;
G__7131.cljs$lang$applyTo = (function (arglist__7133){
var c = cljs.core.first(arglist__7133);
var _ = cljs.core.rest(arglist__7133);
return G__7131__delegate(c,_);
});
G__7131.cljs$core$IFn$_invoke$arity$variadic = G__7131__delegate;
return G__7131;
})()
,"at_end",(function() { 
var G__7134__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7134 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7135__i = 0, G__7135__a = new Array(arguments.length -  1);
while (G__7135__i < G__7135__a.length) {G__7135__a[G__7135__i] = arguments[G__7135__i + 1]; ++G__7135__i;}
  _ = new cljs.core.IndexedSeq(G__7135__a,0,null);
} 
return G__7134__delegate.call(this,c,_);};
G__7134.cljs$lang$maxFixedArity = 1;
G__7134.cljs$lang$applyTo = (function (arglist__7136){
var c = cljs.core.first(arglist__7136);
var _ = cljs.core.rest(arglist__7136);
return G__7134__delegate(c,_);
});
G__7134.cljs$core$IFn$_invoke$arity$variadic = G__7134__delegate;
return G__7134;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__7137__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7137 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7138__i = 0, G__7138__a = new Array(arguments.length -  2);
while (G__7138__i < G__7138__a.length) {G__7138__a[G__7138__i] = arguments[G__7138__i + 2]; ++G__7138__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7138__a,0,null);
} 
return G__7137__delegate.call(this,_,msg,___$1);};
G__7137.cljs$lang$maxFixedArity = 2;
G__7137.cljs$lang$applyTo = (function (arglist__7139){
var _ = cljs.core.first(arglist__7139);
arglist__7139 = cljs.core.next(arglist__7139);
var msg = cljs.core.first(arglist__7139);
var ___$1 = cljs.core.rest(arglist__7139);
return G__7137__delegate(_,msg,___$1);
});
G__7137.cljs$core$IFn$_invoke$arity$variadic = G__7137__delegate;
return G__7137;
})()
,"print_line",(function() { 
var G__7140__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7140 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7141__i = 0, G__7141__a = new Array(arguments.length -  2);
while (G__7141__i < G__7141__a.length) {G__7141__a[G__7141__i] = arguments[G__7141__i + 2]; ++G__7141__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7141__a,0,null);
} 
return G__7140__delegate.call(this,_,msg,___$1);};
G__7140.cljs$lang$maxFixedArity = 2;
G__7140.cljs$lang$applyTo = (function (arglist__7142){
var _ = cljs.core.first(arglist__7142);
arglist__7142 = cljs.core.next(arglist__7142);
var msg = cljs.core.first(arglist__7142);
var ___$1 = cljs.core.rest(arglist__7142);
return G__7140__delegate(_,msg,___$1);
});
G__7140.cljs$core$IFn$_invoke$arity$variadic = G__7140__delegate;
return G__7140;
})()
,"read_line",(function() { 
var G__7143__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__7143 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__7144__i = 0, G__7144__a = new Array(arguments.length -  1);
while (G__7144__i < G__7144__a.length) {G__7144__a[G__7144__i] = arguments[G__7144__i + 1]; ++G__7144__i;}
  args = new cljs.core.IndexedSeq(G__7144__a,0,null);
} 
return G__7143__delegate.call(this,_,args);};
G__7143.cljs$lang$maxFixedArity = 1;
G__7143.cljs$lang$applyTo = (function (arglist__7145){
var _ = cljs.core.first(arglist__7145);
var args = cljs.core.rest(arglist__7145);
return G__7143__delegate(_,args);
});
G__7143.cljs$core$IFn$_invoke$arity$variadic = G__7143__delegate;
return G__7143;
})()
,"error",(function() { 
var G__7146__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error(nex.interpreter.nex_display_value(msg));

return null;
};
var G__7146 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7147__i = 0, G__7147__a = new Array(arguments.length -  2);
while (G__7147__i < G__7147__a.length) {G__7147__a[G__7147__i] = arguments[G__7147__i + 2]; ++G__7147__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7147__a,0,null);
} 
return G__7146__delegate.call(this,_,msg,___$1);};
G__7146.cljs$lang$maxFixedArity = 2;
G__7146.cljs$lang$applyTo = (function (arglist__7148){
var _ = cljs.core.first(arglist__7148);
arglist__7148 = cljs.core.next(arglist__7148);
var msg = cljs.core.first(arglist__7148);
var ___$1 = cljs.core.rest(arglist__7148);
return G__7146__delegate(_,msg,___$1);
});
G__7146.cljs$core$IFn$_invoke$arity$variadic = G__7146__delegate;
return G__7146;
})()
,"new_line",(function() { 
var G__7149__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__7149 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7150__i = 0, G__7150__a = new Array(arguments.length -  1);
while (G__7150__i < G__7150__a.length) {G__7150__a[G__7150__i] = arguments[G__7150__i + 1]; ++G__7150__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7150__a,0,null);
} 
return G__7149__delegate.call(this,_,___$1);};
G__7149.cljs$lang$maxFixedArity = 1;
G__7149.cljs$lang$applyTo = (function (arglist__7151){
var _ = cljs.core.first(arglist__7151);
var ___$1 = cljs.core.rest(arglist__7151);
return G__7149__delegate(_,___$1);
});
G__7149.cljs$core$IFn$_invoke$arity$variadic = G__7149__delegate;
return G__7149;
})()
,"read_integer",(function() { 
var G__7152__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__7152 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7153__i = 0, G__7153__a = new Array(arguments.length -  1);
while (G__7153__i < G__7153__a.length) {G__7153__a[G__7153__i] = arguments[G__7153__i + 1]; ++G__7153__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7153__a,0,null);
} 
return G__7152__delegate.call(this,_,___$1);};
G__7152.cljs$lang$maxFixedArity = 1;
G__7152.cljs$lang$applyTo = (function (arglist__7154){
var _ = cljs.core.first(arglist__7154);
var ___$1 = cljs.core.rest(arglist__7154);
return G__7152__delegate(_,___$1);
});
G__7152.cljs$core$IFn$_invoke$arity$variadic = G__7152__delegate;
return G__7152;
})()
,"read_real",(function() { 
var G__7155__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__7155 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7156__i = 0, G__7156__a = new Array(arguments.length -  1);
while (G__7156__i < G__7156__a.length) {G__7156__a[G__7156__i] = arguments[G__7156__i + 1]; ++G__7156__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7156__a,0,null);
} 
return G__7155__delegate.call(this,_,___$1);};
G__7155.cljs$lang$maxFixedArity = 1;
G__7155.cljs$lang$applyTo = (function (arglist__7157){
var _ = cljs.core.first(arglist__7157);
var ___$1 = cljs.core.rest(arglist__7157);
return G__7155__delegate(_,___$1);
});
G__7155.cljs$core$IFn$_invoke$arity$variadic = G__7155__delegate;
return G__7155;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__7158__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__7158 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7159__i = 0, G__7159__a = new Array(arguments.length -  4);
while (G__7159__i < G__7159__a.length) {G__7159__a[G__7159__i] = arguments[G__7159__i + 4]; ++G__7159__i;}
  _ = new cljs.core.IndexedSeq(G__7159__a,0,null);
} 
return G__7158__delegate.call(this,w,text,x,y,_);};
G__7158.cljs$lang$maxFixedArity = 4;
G__7158.cljs$lang$applyTo = (function (arglist__7160){
var w = cljs.core.first(arglist__7160);
arglist__7160 = cljs.core.next(arglist__7160);
var text = cljs.core.first(arglist__7160);
arglist__7160 = cljs.core.next(arglist__7160);
var x = cljs.core.first(arglist__7160);
arglist__7160 = cljs.core.next(arglist__7160);
var y = cljs.core.first(arglist__7160);
var _ = cljs.core.rest(arglist__7160);
return G__7158__delegate(w,text,x,y,_);
});
G__7158.cljs$core$IFn$_invoke$arity$variadic = G__7158__delegate;
return G__7158;
})()
,(function() { 
var G__7161__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__7161 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7162__i = 0, G__7162__a = new Array(arguments.length -  1);
while (G__7162__i < G__7162__a.length) {G__7162__a[G__7162__i] = arguments[G__7162__i + 1]; ++G__7162__i;}
  _ = new cljs.core.IndexedSeq(G__7162__a,0,null);
} 
return G__7161__delegate.call(this,w,_);};
G__7161.cljs$lang$maxFixedArity = 1;
G__7161.cljs$lang$applyTo = (function (arglist__7163){
var w = cljs.core.first(arglist__7163);
var _ = cljs.core.rest(arglist__7163);
return G__7161__delegate(w,_);
});
G__7161.cljs$core$IFn$_invoke$arity$variadic = G__7161__delegate;
return G__7161;
})()
,(function() { 
var G__7164__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__7164 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7165__i = 0, G__7165__a = new Array(arguments.length -  2);
while (G__7165__i < G__7165__a.length) {G__7165__a[G__7165__i] = arguments[G__7165__i + 2]; ++G__7165__i;}
  _ = new cljs.core.IndexedSeq(G__7165__a,0,null);
} 
return G__7164__delegate.call(this,w,size,_);};
G__7164.cljs$lang$maxFixedArity = 2;
G__7164.cljs$lang$applyTo = (function (arglist__7166){
var w = cljs.core.first(arglist__7166);
arglist__7166 = cljs.core.next(arglist__7166);
var size = cljs.core.first(arglist__7166);
var _ = cljs.core.rest(arglist__7166);
return G__7164__delegate(w,size,_);
});
G__7164.cljs$core$IFn$_invoke$arity$variadic = G__7164__delegate;
return G__7164;
})()
,(function() { 
var G__7167__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__7167 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__7168__i = 0, G__7168__a = new Array(arguments.length -  6);
while (G__7168__i < G__7168__a.length) {G__7168__a[G__7168__i] = arguments[G__7168__i + 6]; ++G__7168__i;}
  _ = new cljs.core.IndexedSeq(G__7168__a,0,null);
} 
return G__7167__delegate.call(this,w,img,x,y,width,height,_);};
G__7167.cljs$lang$maxFixedArity = 6;
G__7167.cljs$lang$applyTo = (function (arglist__7169){
var w = cljs.core.first(arglist__7169);
arglist__7169 = cljs.core.next(arglist__7169);
var img = cljs.core.first(arglist__7169);
arglist__7169 = cljs.core.next(arglist__7169);
var x = cljs.core.first(arglist__7169);
arglist__7169 = cljs.core.next(arglist__7169);
var y = cljs.core.first(arglist__7169);
arglist__7169 = cljs.core.next(arglist__7169);
var width = cljs.core.first(arglist__7169);
arglist__7169 = cljs.core.next(arglist__7169);
var height = cljs.core.first(arglist__7169);
var _ = cljs.core.rest(arglist__7169);
return G__7167__delegate(w,img,x,y,width,height,_);
});
G__7167.cljs$core$IFn$_invoke$arity$variadic = G__7167__delegate;
return G__7167;
})()
,(function() { 
var G__7170__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__7170 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7171__i = 0, G__7171__a = new Array(arguments.length -  1);
while (G__7171__i < G__7171__a.length) {G__7171__a[G__7171__i] = arguments[G__7171__i + 1]; ++G__7171__i;}
  _ = new cljs.core.IndexedSeq(G__7171__a,0,null);
} 
return G__7170__delegate.call(this,w,_);};
G__7170.cljs$lang$maxFixedArity = 1;
G__7170.cljs$lang$applyTo = (function (arglist__7172){
var w = cljs.core.first(arglist__7172);
var _ = cljs.core.rest(arglist__7172);
return G__7170__delegate(w,_);
});
G__7170.cljs$core$IFn$_invoke$arity$variadic = G__7170__delegate;
return G__7170;
})()
,(function() { 
var G__7173__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__7173 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7174__i = 0, G__7174__a = new Array(arguments.length -  4);
while (G__7174__i < G__7174__a.length) {G__7174__a[G__7174__i] = arguments[G__7174__i + 4]; ++G__7174__i;}
  _ = new cljs.core.IndexedSeq(G__7174__a,0,null);
} 
return G__7173__delegate.call(this,w,img,x,y,_);};
G__7173.cljs$lang$maxFixedArity = 4;
G__7173.cljs$lang$applyTo = (function (arglist__7175){
var w = cljs.core.first(arglist__7175);
arglist__7175 = cljs.core.next(arglist__7175);
var img = cljs.core.first(arglist__7175);
arglist__7175 = cljs.core.next(arglist__7175);
var x = cljs.core.first(arglist__7175);
arglist__7175 = cljs.core.next(arglist__7175);
var y = cljs.core.first(arglist__7175);
var _ = cljs.core.rest(arglist__7175);
return G__7173__delegate(w,img,x,y,_);
});
G__7173.cljs$core$IFn$_invoke$arity$variadic = G__7173__delegate;
return G__7173;
})()
,(function() { 
var G__7176__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__7176 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7177__i = 0, G__7177__a = new Array(arguments.length -  2);
while (G__7177__i < G__7177__a.length) {G__7177__a[G__7177__i] = arguments[G__7177__i + 2]; ++G__7177__i;}
  _ = new cljs.core.IndexedSeq(G__7177__a,0,null);
} 
return G__7176__delegate.call(this,w,ms,_);};
G__7176.cljs$lang$maxFixedArity = 2;
G__7176.cljs$lang$applyTo = (function (arglist__7178){
var w = cljs.core.first(arglist__7178);
arglist__7178 = cljs.core.next(arglist__7178);
var ms = cljs.core.first(arglist__7178);
var _ = cljs.core.rest(arglist__7178);
return G__7176__delegate(w,ms,_);
});
G__7176.cljs$core$IFn$_invoke$arity$variadic = G__7176__delegate;
return G__7176;
})()
,(function() { 
var G__7179__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__7179 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7180__i = 0, G__7180__a = new Array(arguments.length -  5);
while (G__7180__i < G__7180__a.length) {G__7180__a[G__7180__i] = arguments[G__7180__i + 5]; ++G__7180__i;}
  _ = new cljs.core.IndexedSeq(G__7180__a,0,null);
} 
return G__7179__delegate.call(this,w,x1,y1,x2,y2,_);};
G__7179.cljs$lang$maxFixedArity = 5;
G__7179.cljs$lang$applyTo = (function (arglist__7181){
var w = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var x1 = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var y1 = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var x2 = cljs.core.first(arglist__7181);
arglist__7181 = cljs.core.next(arglist__7181);
var y2 = cljs.core.first(arglist__7181);
var _ = cljs.core.rest(arglist__7181);
return G__7179__delegate(w,x1,y1,x2,y2,_);
});
G__7179.cljs$core$IFn$_invoke$arity$variadic = G__7179__delegate;
return G__7179;
})()
,(function() { 
var G__7182__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__7182 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7183__i = 0, G__7183__a = new Array(arguments.length -  1);
while (G__7183__i < G__7183__a.length) {G__7183__a[G__7183__i] = arguments[G__7183__i + 1]; ++G__7183__i;}
  _ = new cljs.core.IndexedSeq(G__7183__a,0,null);
} 
return G__7182__delegate.call(this,w,_);};
G__7182.cljs$lang$maxFixedArity = 1;
G__7182.cljs$lang$applyTo = (function (arglist__7184){
var w = cljs.core.first(arglist__7184);
var _ = cljs.core.rest(arglist__7184);
return G__7182__delegate(w,_);
});
G__7182.cljs$core$IFn$_invoke$arity$variadic = G__7182__delegate;
return G__7182;
})()
,(function() { 
var G__7185__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__7185 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7186__i = 0, G__7186__a = new Array(arguments.length -  4);
while (G__7186__i < G__7186__a.length) {G__7186__a[G__7186__i] = arguments[G__7186__i + 4]; ++G__7186__i;}
  _ = new cljs.core.IndexedSeq(G__7186__a,0,null);
} 
return G__7185__delegate.call(this,w,x,y,r,_);};
G__7185.cljs$lang$maxFixedArity = 4;
G__7185.cljs$lang$applyTo = (function (arglist__7187){
var w = cljs.core.first(arglist__7187);
arglist__7187 = cljs.core.next(arglist__7187);
var x = cljs.core.first(arglist__7187);
arglist__7187 = cljs.core.next(arglist__7187);
var y = cljs.core.first(arglist__7187);
arglist__7187 = cljs.core.next(arglist__7187);
var r = cljs.core.first(arglist__7187);
var _ = cljs.core.rest(arglist__7187);
return G__7185__delegate(w,x,y,r,_);
});
G__7185.cljs$core$IFn$_invoke$arity$variadic = G__7185__delegate;
return G__7185;
})()
,(function() { 
var G__7188__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__7188 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7189__i = 0, G__7189__a = new Array(arguments.length -  5);
while (G__7189__i < G__7189__a.length) {G__7189__a[G__7189__i] = arguments[G__7189__i + 5]; ++G__7189__i;}
  _ = new cljs.core.IndexedSeq(G__7189__a,0,null);
} 
return G__7188__delegate.call(this,w,x,y,width,height,_);};
G__7188.cljs$lang$maxFixedArity = 5;
G__7188.cljs$lang$applyTo = (function (arglist__7190){
var w = cljs.core.first(arglist__7190);
arglist__7190 = cljs.core.next(arglist__7190);
var x = cljs.core.first(arglist__7190);
arglist__7190 = cljs.core.next(arglist__7190);
var y = cljs.core.first(arglist__7190);
arglist__7190 = cljs.core.next(arglist__7190);
var width = cljs.core.first(arglist__7190);
arglist__7190 = cljs.core.next(arglist__7190);
var height = cljs.core.first(arglist__7190);
var _ = cljs.core.rest(arglist__7190);
return G__7188__delegate(w,x,y,width,height,_);
});
G__7188.cljs$core$IFn$_invoke$arity$variadic = G__7188__delegate;
return G__7188;
})()
,(function() { 
var G__7191__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__7191 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7192__i = 0, G__7192__a = new Array(arguments.length -  5);
while (G__7192__i < G__7192__a.length) {G__7192__a[G__7192__i] = arguments[G__7192__i + 5]; ++G__7192__i;}
  _ = new cljs.core.IndexedSeq(G__7192__a,0,null);
} 
return G__7191__delegate.call(this,w,img,x,y,angle,_);};
G__7191.cljs$lang$maxFixedArity = 5;
G__7191.cljs$lang$applyTo = (function (arglist__7193){
var w = cljs.core.first(arglist__7193);
arglist__7193 = cljs.core.next(arglist__7193);
var img = cljs.core.first(arglist__7193);
arglist__7193 = cljs.core.next(arglist__7193);
var x = cljs.core.first(arglist__7193);
arglist__7193 = cljs.core.next(arglist__7193);
var y = cljs.core.first(arglist__7193);
arglist__7193 = cljs.core.next(arglist__7193);
var angle = cljs.core.first(arglist__7193);
var _ = cljs.core.rest(arglist__7193);
return G__7191__delegate(w,img,x,y,angle,_);
});
G__7191.cljs$core$IFn$_invoke$arity$variadic = G__7191__delegate;
return G__7191;
})()
,(function() { 
var G__7194__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7194 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7195__i = 0, G__7195__a = new Array(arguments.length -  2);
while (G__7195__i < G__7195__a.length) {G__7195__a[G__7195__i] = arguments[G__7195__i + 2]; ++G__7195__i;}
  _ = new cljs.core.IndexedSeq(G__7195__a,0,null);
} 
return G__7194__delegate.call(this,w,color,_);};
G__7194.cljs$lang$maxFixedArity = 2;
G__7194.cljs$lang$applyTo = (function (arglist__7196){
var w = cljs.core.first(arglist__7196);
arglist__7196 = cljs.core.next(arglist__7196);
var color = cljs.core.first(arglist__7196);
var _ = cljs.core.rest(arglist__7196);
return G__7194__delegate(w,color,_);
});
G__7194.cljs$core$IFn$_invoke$arity$variadic = G__7194__delegate;
return G__7194;
})()
,(function() { 
var G__7197__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__7197 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7198__i = 0, G__7198__a = new Array(arguments.length -  5);
while (G__7198__i < G__7198__a.length) {G__7198__a[G__7198__i] = arguments[G__7198__i + 5]; ++G__7198__i;}
  _ = new cljs.core.IndexedSeq(G__7198__a,0,null);
} 
return G__7197__delegate.call(this,w,x,y,width,height,_);};
G__7197.cljs$lang$maxFixedArity = 5;
G__7197.cljs$lang$applyTo = (function (arglist__7199){
var w = cljs.core.first(arglist__7199);
arglist__7199 = cljs.core.next(arglist__7199);
var x = cljs.core.first(arglist__7199);
arglist__7199 = cljs.core.next(arglist__7199);
var y = cljs.core.first(arglist__7199);
arglist__7199 = cljs.core.next(arglist__7199);
var width = cljs.core.first(arglist__7199);
arglist__7199 = cljs.core.next(arglist__7199);
var height = cljs.core.first(arglist__7199);
var _ = cljs.core.rest(arglist__7199);
return G__7197__delegate(w,x,y,width,height,_);
});
G__7197.cljs$core$IFn$_invoke$arity$variadic = G__7197__delegate;
return G__7197;
})()
,(function() { 
var G__7200__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__7200 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7201__i = 0, G__7201__a = new Array(arguments.length -  1);
while (G__7201__i < G__7201__a.length) {G__7201__a[G__7201__i] = arguments[G__7201__i + 1]; ++G__7201__i;}
  _ = new cljs.core.IndexedSeq(G__7201__a,0,null);
} 
return G__7200__delegate.call(this,w,_);};
G__7200.cljs$lang$maxFixedArity = 1;
G__7200.cljs$lang$applyTo = (function (arglist__7202){
var w = cljs.core.first(arglist__7202);
var _ = cljs.core.rest(arglist__7202);
return G__7200__delegate(w,_);
});
G__7200.cljs$core$IFn$_invoke$arity$variadic = G__7200__delegate;
return G__7200;
})()
,(function() { 
var G__7203__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__7203 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7204__i = 0, G__7204__a = new Array(arguments.length -  4);
while (G__7204__i < G__7204__a.length) {G__7204__a[G__7204__i] = arguments[G__7204__i + 4]; ++G__7204__i;}
  _ = new cljs.core.IndexedSeq(G__7204__a,0,null);
} 
return G__7203__delegate.call(this,w,x,y,r,_);};
G__7203.cljs$lang$maxFixedArity = 4;
G__7203.cljs$lang$applyTo = (function (arglist__7205){
var w = cljs.core.first(arglist__7205);
arglist__7205 = cljs.core.next(arglist__7205);
var x = cljs.core.first(arglist__7205);
arglist__7205 = cljs.core.next(arglist__7205);
var y = cljs.core.first(arglist__7205);
arglist__7205 = cljs.core.next(arglist__7205);
var r = cljs.core.first(arglist__7205);
var _ = cljs.core.rest(arglist__7205);
return G__7203__delegate(w,x,y,r,_);
});
G__7203.cljs$core$IFn$_invoke$arity$variadic = G__7203__delegate;
return G__7203;
})()
,(function() { 
var G__7206__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7206 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7207__i = 0, G__7207__a = new Array(arguments.length -  2);
while (G__7207__i < G__7207__a.length) {G__7207__a[G__7207__i] = arguments[G__7207__i + 2]; ++G__7207__i;}
  _ = new cljs.core.IndexedSeq(G__7207__a,0,null);
} 
return G__7206__delegate.call(this,w,color,_);};
G__7206.cljs$lang$maxFixedArity = 2;
G__7206.cljs$lang$applyTo = (function (arglist__7208){
var w = cljs.core.first(arglist__7208);
arglist__7208 = cljs.core.next(arglist__7208);
var color = cljs.core.first(arglist__7208);
var _ = cljs.core.rest(arglist__7208);
return G__7206__delegate(w,color,_);
});
G__7206.cljs$core$IFn$_invoke$arity$variadic = G__7206__delegate;
return G__7206;
})()
,(function() { 
var G__7209__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__7209 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7210__i = 0, G__7210__a = new Array(arguments.length -  1);
while (G__7210__i < G__7210__a.length) {G__7210__a[G__7210__i] = arguments[G__7210__i + 1]; ++G__7210__i;}
  _ = new cljs.core.IndexedSeq(G__7210__a,0,null);
} 
return G__7209__delegate.call(this,w,_);};
G__7209.cljs$lang$maxFixedArity = 1;
G__7209.cljs$lang$applyTo = (function (arglist__7211){
var w = cljs.core.first(arglist__7211);
var _ = cljs.core.rest(arglist__7211);
return G__7209__delegate(w,_);
});
G__7209.cljs$core$IFn$_invoke$arity$variadic = G__7209__delegate;
return G__7209;
})()
,(function() { 
var G__7212__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__7212 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7213__i = 0, G__7213__a = new Array(arguments.length -  1);
while (G__7213__i < G__7213__a.length) {G__7213__a[G__7213__i] = arguments[G__7213__i + 1]; ++G__7213__i;}
  _ = new cljs.core.IndexedSeq(G__7213__a,0,null);
} 
return G__7212__delegate.call(this,w,_);};
G__7212.cljs$lang$maxFixedArity = 1;
G__7212.cljs$lang$applyTo = (function (arglist__7214){
var w = cljs.core.first(arglist__7214);
var _ = cljs.core.rest(arglist__7214);
return G__7212__delegate(w,_);
});
G__7212.cljs$core$IFn$_invoke$arity$variadic = G__7212__delegate;
return G__7212;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__7215__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__7215 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7216__i = 0, G__7216__a = new Array(arguments.length -  2);
while (G__7216__i < G__7216__a.length) {G__7216__a[G__7216__i] = arguments[G__7216__i + 2]; ++G__7216__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7216__a,0,null);
} 
return G__7215__delegate.call(this,_,name,___$1);};
G__7215.cljs$lang$maxFixedArity = 2;
G__7215.cljs$lang$applyTo = (function (arglist__7217){
var _ = cljs.core.first(arglist__7217);
arglist__7217 = cljs.core.next(arglist__7217);
var name = cljs.core.first(arglist__7217);
var ___$1 = cljs.core.rest(arglist__7217);
return G__7215__delegate(_,name,___$1);
});
G__7215.cljs$core$IFn$_invoke$arity$variadic = G__7215__delegate;
return G__7215;
})()
,"setenv",(function() { 
var G__7218__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__7218 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__7219__i = 0, G__7219__a = new Array(arguments.length -  3);
while (G__7219__i < G__7219__a.length) {G__7219__a[G__7219__i] = arguments[G__7219__i + 3]; ++G__7219__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7219__a,0,null);
} 
return G__7218__delegate.call(this,_,name,value,___$1);};
G__7218.cljs$lang$maxFixedArity = 3;
G__7218.cljs$lang$applyTo = (function (arglist__7220){
var _ = cljs.core.first(arglist__7220);
arglist__7220 = cljs.core.next(arglist__7220);
var name = cljs.core.first(arglist__7220);
arglist__7220 = cljs.core.next(arglist__7220);
var value = cljs.core.first(arglist__7220);
var ___$1 = cljs.core.rest(arglist__7220);
return G__7218__delegate(_,name,value,___$1);
});
G__7218.cljs$core$IFn$_invoke$arity$variadic = G__7218__delegate;
return G__7218;
})()
,"command_line",(function() { 
var G__7221__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__7221 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7222__i = 0, G__7222__a = new Array(arguments.length -  1);
while (G__7222__i < G__7222__a.length) {G__7222__a[G__7222__i] = arguments[G__7222__i + 1]; ++G__7222__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7222__a,0,null);
} 
return G__7221__delegate.call(this,_,___$1);};
G__7221.cljs$lang$maxFixedArity = 1;
G__7221.cljs$lang$applyTo = (function (arglist__7223){
var _ = cljs.core.first(arglist__7223);
var ___$1 = cljs.core.rest(arglist__7223);
return G__7221__delegate(_,___$1);
});
G__7221.cljs$core$IFn$_invoke$arity$variadic = G__7221__delegate;
return G__7221;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__7224__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__7224 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7225__i = 0, G__7225__a = new Array(arguments.length -  1);
while (G__7225__i < G__7225__a.length) {G__7225__a[G__7225__i] = arguments[G__7225__i + 1]; ++G__7225__i;}
  _ = new cljs.core.IndexedSeq(G__7225__a,0,null);
} 
return G__7224__delegate.call(this,c,_);};
G__7224.cljs$lang$maxFixedArity = 1;
G__7224.cljs$lang$applyTo = (function (arglist__7226){
var c = cljs.core.first(arglist__7226);
var _ = cljs.core.rest(arglist__7226);
return G__7224__delegate(c,_);
});
G__7224.cljs$core$IFn$_invoke$arity$variadic = G__7224__delegate;
return G__7224;
})()
,"to_upper",(function() { 
var G__7227__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7227 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7228__i = 0, G__7228__a = new Array(arguments.length -  1);
while (G__7228__i < G__7228__a.length) {G__7228__a[G__7228__i] = arguments[G__7228__i + 1]; ++G__7228__i;}
  _ = new cljs.core.IndexedSeq(G__7228__a,0,null);
} 
return G__7227__delegate.call(this,c,_);};
G__7227.cljs$lang$maxFixedArity = 1;
G__7227.cljs$lang$applyTo = (function (arglist__7229){
var c = cljs.core.first(arglist__7229);
var _ = cljs.core.rest(arglist__7229);
return G__7227__delegate(c,_);
});
G__7227.cljs$core$IFn$_invoke$arity$variadic = G__7227__delegate;
return G__7227;
})()
,"to_lower",(function() { 
var G__7234__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7234 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7235__i = 0, G__7235__a = new Array(arguments.length -  1);
while (G__7235__i < G__7235__a.length) {G__7235__a[G__7235__i] = arguments[G__7235__i + 1]; ++G__7235__i;}
  _ = new cljs.core.IndexedSeq(G__7235__a,0,null);
} 
return G__7234__delegate.call(this,c,_);};
G__7234.cljs$lang$maxFixedArity = 1;
G__7234.cljs$lang$applyTo = (function (arglist__7236){
var c = cljs.core.first(arglist__7236);
var _ = cljs.core.rest(arglist__7236);
return G__7234__delegate(c,_);
});
G__7234.cljs$core$IFn$_invoke$arity$variadic = G__7234__delegate;
return G__7234;
})()
,"compare",(function() { 
var G__7237__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__7237 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7242__i = 0, G__7242__a = new Array(arguments.length -  2);
while (G__7242__i < G__7242__a.length) {G__7242__a[G__7242__i] = arguments[G__7242__i + 2]; ++G__7242__i;}
  _ = new cljs.core.IndexedSeq(G__7242__a,0,null);
} 
return G__7237__delegate.call(this,c,other,_);};
G__7237.cljs$lang$maxFixedArity = 2;
G__7237.cljs$lang$applyTo = (function (arglist__7243){
var c = cljs.core.first(arglist__7243);
arglist__7243 = cljs.core.next(arglist__7243);
var other = cljs.core.first(arglist__7243);
var _ = cljs.core.rest(arglist__7243);
return G__7237__delegate(c,other,_);
});
G__7237.cljs$core$IFn$_invoke$arity$variadic = G__7237__delegate;
return G__7237;
})()
,"hash",(function() { 
var G__7244__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__7244 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7245__i = 0, G__7245__a = new Array(arguments.length -  1);
while (G__7245__i < G__7245__a.length) {G__7245__a[G__7245__i] = arguments[G__7245__i + 1]; ++G__7245__i;}
  _ = new cljs.core.IndexedSeq(G__7245__a,0,null);
} 
return G__7244__delegate.call(this,c,_);};
G__7244.cljs$lang$maxFixedArity = 1;
G__7244.cljs$lang$applyTo = (function (arglist__7246){
var c = cljs.core.first(arglist__7246);
var _ = cljs.core.rest(arglist__7246);
return G__7244__delegate(c,_);
});
G__7244.cljs$core$IFn$_invoke$arity$variadic = G__7244__delegate;
return G__7244;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7247__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7247 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7252__i = 0, G__7252__a = new Array(arguments.length -  2);
while (G__7252__i < G__7252__a.length) {G__7252__a[G__7252__i] = arguments[G__7252__i + 2]; ++G__7252__i;}
  _ = new cljs.core.IndexedSeq(G__7252__a,0,null);
} 
return G__7247__delegate.call(this,n,other,_);};
G__7247.cljs$lang$maxFixedArity = 2;
G__7247.cljs$lang$applyTo = (function (arglist__7253){
var n = cljs.core.first(arglist__7253);
arglist__7253 = cljs.core.next(arglist__7253);
var other = cljs.core.first(arglist__7253);
var _ = cljs.core.rest(arglist__7253);
return G__7247__delegate(n,other,_);
});
G__7247.cljs$core$IFn$_invoke$arity$variadic = G__7247__delegate;
return G__7247;
})()
,(function() { 
var G__7254__delegate = function (n,other,_){
return (n <= other);
};
var G__7254 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7255__i = 0, G__7255__a = new Array(arguments.length -  2);
while (G__7255__i < G__7255__a.length) {G__7255__a[G__7255__i] = arguments[G__7255__i + 2]; ++G__7255__i;}
  _ = new cljs.core.IndexedSeq(G__7255__a,0,null);
} 
return G__7254__delegate.call(this,n,other,_);};
G__7254.cljs$lang$maxFixedArity = 2;
G__7254.cljs$lang$applyTo = (function (arglist__7256){
var n = cljs.core.first(arglist__7256);
arglist__7256 = cljs.core.next(arglist__7256);
var other = cljs.core.first(arglist__7256);
var _ = cljs.core.rest(arglist__7256);
return G__7254__delegate(n,other,_);
});
G__7254.cljs$core$IFn$_invoke$arity$variadic = G__7254__delegate;
return G__7254;
})()
,(function() { 
var G__7257__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7257 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7258__i = 0, G__7258__a = new Array(arguments.length -  2);
while (G__7258__i < G__7258__a.length) {G__7258__a[G__7258__i] = arguments[G__7258__i + 2]; ++G__7258__i;}
  _ = new cljs.core.IndexedSeq(G__7258__a,0,null);
} 
return G__7257__delegate.call(this,n,other,_);};
G__7257.cljs$lang$maxFixedArity = 2;
G__7257.cljs$lang$applyTo = (function (arglist__7259){
var n = cljs.core.first(arglist__7259);
arglist__7259 = cljs.core.next(arglist__7259);
var other = cljs.core.first(arglist__7259);
var _ = cljs.core.rest(arglist__7259);
return G__7257__delegate(n,other,_);
});
G__7257.cljs$core$IFn$_invoke$arity$variadic = G__7257__delegate;
return G__7257;
})()
,(function() { 
var G__7260__delegate = function (n,other,_){
return (n < other);
};
var G__7260 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7261__i = 0, G__7261__a = new Array(arguments.length -  2);
while (G__7261__i < G__7261__a.length) {G__7261__a[G__7261__i] = arguments[G__7261__i + 2]; ++G__7261__i;}
  _ = new cljs.core.IndexedSeq(G__7261__a,0,null);
} 
return G__7260__delegate.call(this,n,other,_);};
G__7260.cljs$lang$maxFixedArity = 2;
G__7260.cljs$lang$applyTo = (function (arglist__7262){
var n = cljs.core.first(arglist__7262);
arglist__7262 = cljs.core.next(arglist__7262);
var other = cljs.core.first(arglist__7262);
var _ = cljs.core.rest(arglist__7262);
return G__7260__delegate(n,other,_);
});
G__7260.cljs$core$IFn$_invoke$arity$variadic = G__7260__delegate;
return G__7260;
})()
,(function() { 
var G__7263__delegate = function (n,other,_){
return (n + other);
};
var G__7263 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7264__i = 0, G__7264__a = new Array(arguments.length -  2);
while (G__7264__i < G__7264__a.length) {G__7264__a[G__7264__i] = arguments[G__7264__i + 2]; ++G__7264__i;}
  _ = new cljs.core.IndexedSeq(G__7264__a,0,null);
} 
return G__7263__delegate.call(this,n,other,_);};
G__7263.cljs$lang$maxFixedArity = 2;
G__7263.cljs$lang$applyTo = (function (arglist__7265){
var n = cljs.core.first(arglist__7265);
arglist__7265 = cljs.core.next(arglist__7265);
var other = cljs.core.first(arglist__7265);
var _ = cljs.core.rest(arglist__7265);
return G__7263__delegate(n,other,_);
});
G__7263.cljs$core$IFn$_invoke$arity$variadic = G__7263__delegate;
return G__7263;
})()
,(function() { 
var G__7266__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7266 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7267__i = 0, G__7267__a = new Array(arguments.length -  1);
while (G__7267__i < G__7267__a.length) {G__7267__a[G__7267__i] = arguments[G__7267__i + 1]; ++G__7267__i;}
  _ = new cljs.core.IndexedSeq(G__7267__a,0,null);
} 
return G__7266__delegate.call(this,n,_);};
G__7266.cljs$lang$maxFixedArity = 1;
G__7266.cljs$lang$applyTo = (function (arglist__7268){
var n = cljs.core.first(arglist__7268);
var _ = cljs.core.rest(arglist__7268);
return G__7266__delegate(n,_);
});
G__7266.cljs$core$IFn$_invoke$arity$variadic = G__7266__delegate;
return G__7266;
})()
,(function() { 
var G__7269__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7269 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7270__i = 0, G__7270__a = new Array(arguments.length -  1);
while (G__7270__i < G__7270__a.length) {G__7270__a[G__7270__i] = arguments[G__7270__i + 1]; ++G__7270__i;}
  _ = new cljs.core.IndexedSeq(G__7270__a,0,null);
} 
return G__7269__delegate.call(this,n,_);};
G__7269.cljs$lang$maxFixedArity = 1;
G__7269.cljs$lang$applyTo = (function (arglist__7271){
var n = cljs.core.first(arglist__7271);
var _ = cljs.core.rest(arglist__7271);
return G__7269__delegate(n,_);
});
G__7269.cljs$core$IFn$_invoke$arity$variadic = G__7269__delegate;
return G__7269;
})()
,(function() { 
var G__7272__delegate = function (n,other,_){
return (n > other);
};
var G__7272 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7273__i = 0, G__7273__a = new Array(arguments.length -  2);
while (G__7273__i < G__7273__a.length) {G__7273__a[G__7273__i] = arguments[G__7273__i + 2]; ++G__7273__i;}
  _ = new cljs.core.IndexedSeq(G__7273__a,0,null);
} 
return G__7272__delegate.call(this,n,other,_);};
G__7272.cljs$lang$maxFixedArity = 2;
G__7272.cljs$lang$applyTo = (function (arglist__7274){
var n = cljs.core.first(arglist__7274);
arglist__7274 = cljs.core.next(arglist__7274);
var other = cljs.core.first(arglist__7274);
var _ = cljs.core.rest(arglist__7274);
return G__7272__delegate(n,other,_);
});
G__7272.cljs$core$IFn$_invoke$arity$variadic = G__7272__delegate;
return G__7272;
})()
,(function() { 
var G__7275__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7275 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7276__i = 0, G__7276__a = new Array(arguments.length -  2);
while (G__7276__i < G__7276__a.length) {G__7276__a[G__7276__i] = arguments[G__7276__i + 2]; ++G__7276__i;}
  _ = new cljs.core.IndexedSeq(G__7276__a,0,null);
} 
return G__7275__delegate.call(this,n,other,_);};
G__7275.cljs$lang$maxFixedArity = 2;
G__7275.cljs$lang$applyTo = (function (arglist__7277){
var n = cljs.core.first(arglist__7277);
arglist__7277 = cljs.core.next(arglist__7277);
var other = cljs.core.first(arglist__7277);
var _ = cljs.core.rest(arglist__7277);
return G__7275__delegate(n,other,_);
});
G__7275.cljs$core$IFn$_invoke$arity$variadic = G__7275__delegate;
return G__7275;
})()
,(function() { 
var G__7278__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7278 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7279__i = 0, G__7279__a = new Array(arguments.length -  2);
while (G__7279__i < G__7279__a.length) {G__7279__a[G__7279__i] = arguments[G__7279__i + 2]; ++G__7279__i;}
  _ = new cljs.core.IndexedSeq(G__7279__a,0,null);
} 
return G__7278__delegate.call(this,n,other,_);};
G__7278.cljs$lang$maxFixedArity = 2;
G__7278.cljs$lang$applyTo = (function (arglist__7280){
var n = cljs.core.first(arglist__7280);
arglist__7280 = cljs.core.next(arglist__7280);
var other = cljs.core.first(arglist__7280);
var _ = cljs.core.rest(arglist__7280);
return G__7278__delegate(n,other,_);
});
G__7278.cljs$core$IFn$_invoke$arity$variadic = G__7278__delegate;
return G__7278;
})()
,(function() { 
var G__7281__delegate = function (n,other,_){
return (n - other);
};
var G__7281 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7282__i = 0, G__7282__a = new Array(arguments.length -  2);
while (G__7282__i < G__7282__a.length) {G__7282__a[G__7282__i] = arguments[G__7282__i + 2]; ++G__7282__i;}
  _ = new cljs.core.IndexedSeq(G__7282__a,0,null);
} 
return G__7281__delegate.call(this,n,other,_);};
G__7281.cljs$lang$maxFixedArity = 2;
G__7281.cljs$lang$applyTo = (function (arglist__7283){
var n = cljs.core.first(arglist__7283);
arglist__7283 = cljs.core.next(arglist__7283);
var other = cljs.core.first(arglist__7283);
var _ = cljs.core.rest(arglist__7283);
return G__7281__delegate(n,other,_);
});
G__7281.cljs$core$IFn$_invoke$arity$variadic = G__7281__delegate;
return G__7281;
})()
,(function() { 
var G__7284__delegate = function (n,other,_){
return (n * other);
};
var G__7284 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7285__i = 0, G__7285__a = new Array(arguments.length -  2);
while (G__7285__i < G__7285__a.length) {G__7285__a[G__7285__i] = arguments[G__7285__i + 2]; ++G__7285__i;}
  _ = new cljs.core.IndexedSeq(G__7285__a,0,null);
} 
return G__7284__delegate.call(this,n,other,_);};
G__7284.cljs$lang$maxFixedArity = 2;
G__7284.cljs$lang$applyTo = (function (arglist__7286){
var n = cljs.core.first(arglist__7286);
arglist__7286 = cljs.core.next(arglist__7286);
var other = cljs.core.first(arglist__7286);
var _ = cljs.core.rest(arglist__7286);
return G__7284__delegate(n,other,_);
});
G__7284.cljs$core$IFn$_invoke$arity$variadic = G__7284__delegate;
return G__7284;
})()
,(function() { 
var G__7287__delegate = function (n,other,_){
return (n / other);
};
var G__7287 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7288__i = 0, G__7288__a = new Array(arguments.length -  2);
while (G__7288__i < G__7288__a.length) {G__7288__a[G__7288__i] = arguments[G__7288__i + 2]; ++G__7288__i;}
  _ = new cljs.core.IndexedSeq(G__7288__a,0,null);
} 
return G__7287__delegate.call(this,n,other,_);};
G__7287.cljs$lang$maxFixedArity = 2;
G__7287.cljs$lang$applyTo = (function (arglist__7289){
var n = cljs.core.first(arglist__7289);
arglist__7289 = cljs.core.next(arglist__7289);
var other = cljs.core.first(arglist__7289);
var _ = cljs.core.rest(arglist__7289);
return G__7287__delegate(n,other,_);
});
G__7287.cljs$core$IFn$_invoke$arity$variadic = G__7287__delegate;
return G__7287;
})()
,(function() { 
var G__7290__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7290 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7291__i = 0, G__7291__a = new Array(arguments.length -  1);
while (G__7291__i < G__7291__a.length) {G__7291__a[G__7291__i] = arguments[G__7291__i + 1]; ++G__7291__i;}
  _ = new cljs.core.IndexedSeq(G__7291__a,0,null);
} 
return G__7290__delegate.call(this,n,_);};
G__7290.cljs$lang$maxFixedArity = 1;
G__7290.cljs$lang$applyTo = (function (arglist__7292){
var n = cljs.core.first(arglist__7292);
var _ = cljs.core.rest(arglist__7292);
return G__7290__delegate(n,_);
});
G__7290.cljs$core$IFn$_invoke$arity$variadic = G__7290__delegate;
return G__7290;
})()
,(function() { 
var G__7293__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7293 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7294__i = 0, G__7294__a = new Array(arguments.length -  1);
while (G__7294__i < G__7294__a.length) {G__7294__a[G__7294__i] = arguments[G__7294__i + 1]; ++G__7294__i;}
  _ = new cljs.core.IndexedSeq(G__7294__a,0,null);
} 
return G__7293__delegate.call(this,n,_);};
G__7293.cljs$lang$maxFixedArity = 1;
G__7293.cljs$lang$applyTo = (function (arglist__7295){
var n = cljs.core.first(arglist__7295);
var _ = cljs.core.rest(arglist__7295);
return G__7293__delegate(n,_);
});
G__7293.cljs$core$IFn$_invoke$arity$variadic = G__7293__delegate;
return G__7293;
})()
,(function() { 
var G__7296__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7296 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7297__i = 0, G__7297__a = new Array(arguments.length -  2);
while (G__7297__i < G__7297__a.length) {G__7297__a[G__7297__i] = arguments[G__7297__i + 2]; ++G__7297__i;}
  _ = new cljs.core.IndexedSeq(G__7297__a,0,null);
} 
return G__7296__delegate.call(this,n,other,_);};
G__7296.cljs$lang$maxFixedArity = 2;
G__7296.cljs$lang$applyTo = (function (arglist__7298){
var n = cljs.core.first(arglist__7298);
arglist__7298 = cljs.core.next(arglist__7298);
var other = cljs.core.first(arglist__7298);
var _ = cljs.core.rest(arglist__7298);
return G__7296__delegate(n,other,_);
});
G__7296.cljs$core$IFn$_invoke$arity$variadic = G__7296__delegate;
return G__7296;
})()
,(function() { 
var G__7299__delegate = function (n,other,_){
return (n >= other);
};
var G__7299 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7300__i = 0, G__7300__a = new Array(arguments.length -  2);
while (G__7300__i < G__7300__a.length) {G__7300__a[G__7300__i] = arguments[G__7300__i + 2]; ++G__7300__i;}
  _ = new cljs.core.IndexedSeq(G__7300__a,0,null);
} 
return G__7299__delegate.call(this,n,other,_);};
G__7299.cljs$lang$maxFixedArity = 2;
G__7299.cljs$lang$applyTo = (function (arglist__7301){
var n = cljs.core.first(arglist__7301);
arglist__7301 = cljs.core.next(arglist__7301);
var other = cljs.core.first(arglist__7301);
var _ = cljs.core.rest(arglist__7301);
return G__7299__delegate(n,other,_);
});
G__7299.cljs$core$IFn$_invoke$arity$variadic = G__7299__delegate;
return G__7299;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__7302__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__7302 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7303__i = 0, G__7303__a = new Array(arguments.length -  2);
while (G__7303__i < G__7303__a.length) {G__7303__a[G__7303__i] = arguments[G__7303__i + 2]; ++G__7303__i;}
  _ = new cljs.core.IndexedSeq(G__7303__a,0,null);
} 
return G__7302__delegate.call(this,s,other,_);};
G__7302.cljs$lang$maxFixedArity = 2;
G__7302.cljs$lang$applyTo = (function (arglist__7304){
var s = cljs.core.first(arglist__7304);
arglist__7304 = cljs.core.next(arglist__7304);
var other = cljs.core.first(arglist__7304);
var _ = cljs.core.rest(arglist__7304);
return G__7302__delegate(s,other,_);
});
G__7302.cljs$core$IFn$_invoke$arity$variadic = G__7302__delegate;
return G__7302;
})()
,(function() { 
var G__7305__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__7305 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7306__i = 0, G__7306__a = new Array(arguments.length -  2);
while (G__7306__i < G__7306__a.length) {G__7306__a[G__7306__i] = arguments[G__7306__i + 2]; ++G__7306__i;}
  _ = new cljs.core.IndexedSeq(G__7306__a,0,null);
} 
return G__7305__delegate.call(this,s,other,_);};
G__7305.cljs$lang$maxFixedArity = 2;
G__7305.cljs$lang$applyTo = (function (arglist__7307){
var s = cljs.core.first(arglist__7307);
arglist__7307 = cljs.core.next(arglist__7307);
var other = cljs.core.first(arglist__7307);
var _ = cljs.core.rest(arglist__7307);
return G__7305__delegate(s,other,_);
});
G__7305.cljs$core$IFn$_invoke$arity$variadic = G__7305__delegate;
return G__7305;
})()
,(function() { 
var G__7308__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__7308 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7309__i = 0, G__7309__a = new Array(arguments.length -  1);
while (G__7309__i < G__7309__a.length) {G__7309__a[G__7309__i] = arguments[G__7309__i + 1]; ++G__7309__i;}
  _ = new cljs.core.IndexedSeq(G__7309__a,0,null);
} 
return G__7308__delegate.call(this,s,_);};
G__7308.cljs$lang$maxFixedArity = 1;
G__7308.cljs$lang$applyTo = (function (arglist__7310){
var s = cljs.core.first(arglist__7310);
var _ = cljs.core.rest(arglist__7310);
return G__7308__delegate(s,_);
});
G__7308.cljs$core$IFn$_invoke$arity$variadic = G__7308__delegate;
return G__7308;
})()
,(function() { 
var G__7311__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__7311 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7312__i = 0, G__7312__a = new Array(arguments.length -  1);
while (G__7312__i < G__7312__a.length) {G__7312__a[G__7312__i] = arguments[G__7312__i + 1]; ++G__7312__i;}
  _ = new cljs.core.IndexedSeq(G__7312__a,0,null);
} 
return G__7311__delegate.call(this,s,_);};
G__7311.cljs$lang$maxFixedArity = 1;
G__7311.cljs$lang$applyTo = (function (arglist__7313){
var s = cljs.core.first(arglist__7313);
var _ = cljs.core.rest(arglist__7313);
return G__7311__delegate(s,_);
});
G__7311.cljs$core$IFn$_invoke$arity$variadic = G__7311__delegate;
return G__7311;
})()
,(function() { 
var G__7314__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__7314 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7315__i = 0, G__7315__a = new Array(arguments.length -  2);
while (G__7315__i < G__7315__a.length) {G__7315__a[G__7315__i] = arguments[G__7315__i + 2]; ++G__7315__i;}
  _ = new cljs.core.IndexedSeq(G__7315__a,0,null);
} 
return G__7314__delegate.call(this,s,prefix,_);};
G__7314.cljs$lang$maxFixedArity = 2;
G__7314.cljs$lang$applyTo = (function (arglist__7316){
var s = cljs.core.first(arglist__7316);
arglist__7316 = cljs.core.next(arglist__7316);
var prefix = cljs.core.first(arglist__7316);
var _ = cljs.core.rest(arglist__7316);
return G__7314__delegate(s,prefix,_);
});
G__7314.cljs$core$IFn$_invoke$arity$variadic = G__7314__delegate;
return G__7314;
})()
,(function() { 
var G__7317__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__7317 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7318__i = 0, G__7318__a = new Array(arguments.length -  1);
while (G__7318__i < G__7318__a.length) {G__7318__a[G__7318__i] = arguments[G__7318__i + 1]; ++G__7318__i;}
  _ = new cljs.core.IndexedSeq(G__7318__a,0,null);
} 
return G__7317__delegate.call(this,s,_);};
G__7317.cljs$lang$maxFixedArity = 1;
G__7317.cljs$lang$applyTo = (function (arglist__7319){
var s = cljs.core.first(arglist__7319);
var _ = cljs.core.rest(arglist__7319);
return G__7317__delegate(s,_);
});
G__7317.cljs$core$IFn$_invoke$arity$variadic = G__7317__delegate;
return G__7317;
})()
,(function() { 
var G__7320__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__7320 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7321__i = 0, G__7321__a = new Array(arguments.length -  2);
while (G__7321__i < G__7321__a.length) {G__7321__a[G__7321__i] = arguments[G__7321__i + 2]; ++G__7321__i;}
  _ = new cljs.core.IndexedSeq(G__7321__a,0,null);
} 
return G__7320__delegate.call(this,s,other,_);};
G__7320.cljs$lang$maxFixedArity = 2;
G__7320.cljs$lang$applyTo = (function (arglist__7322){
var s = cljs.core.first(arglist__7322);
arglist__7322 = cljs.core.next(arglist__7322);
var other = cljs.core.first(arglist__7322);
var _ = cljs.core.rest(arglist__7322);
return G__7320__delegate(s,other,_);
});
G__7320.cljs$core$IFn$_invoke$arity$variadic = G__7320__delegate;
return G__7320;
})()
,(function() { 
var G__7323__delegate = function (s,other,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(other));
};
var G__7323 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7324__i = 0, G__7324__a = new Array(arguments.length -  2);
while (G__7324__i < G__7324__a.length) {G__7324__a[G__7324__i] = arguments[G__7324__i + 2]; ++G__7324__i;}
  _ = new cljs.core.IndexedSeq(G__7324__a,0,null);
} 
return G__7323__delegate.call(this,s,other,_);};
G__7323.cljs$lang$maxFixedArity = 2;
G__7323.cljs$lang$applyTo = (function (arglist__7325){
var s = cljs.core.first(arglist__7325);
arglist__7325 = cljs.core.next(arglist__7325);
var other = cljs.core.first(arglist__7325);
var _ = cljs.core.rest(arglist__7325);
return G__7323__delegate(s,other,_);
});
G__7323.cljs$core$IFn$_invoke$arity$variadic = G__7323__delegate;
return G__7323;
})()
,(function() { 
var G__7326__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__7326 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7327__i = 0, G__7327__a = new Array(arguments.length -  1);
while (G__7327__i < G__7327__a.length) {G__7327__a[G__7327__i] = arguments[G__7327__i + 1]; ++G__7327__i;}
  _ = new cljs.core.IndexedSeq(G__7327__a,0,null);
} 
return G__7326__delegate.call(this,s,_);};
G__7326.cljs$lang$maxFixedArity = 1;
G__7326.cljs$lang$applyTo = (function (arglist__7328){
var s = cljs.core.first(arglist__7328);
var _ = cljs.core.rest(arglist__7328);
return G__7326__delegate(s,_);
});
G__7326.cljs$core$IFn$_invoke$arity$variadic = G__7326__delegate;
return G__7326;
})()
,(function() { 
var G__7329__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__7329 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7330__i = 0, G__7330__a = new Array(arguments.length -  2);
while (G__7330__i < G__7330__a.length) {G__7330__a[G__7330__i] = arguments[G__7330__i + 2]; ++G__7330__i;}
  _ = new cljs.core.IndexedSeq(G__7330__a,0,null);
} 
return G__7329__delegate.call(this,s,other,_);};
G__7329.cljs$lang$maxFixedArity = 2;
G__7329.cljs$lang$applyTo = (function (arglist__7331){
var s = cljs.core.first(arglist__7331);
arglist__7331 = cljs.core.next(arglist__7331);
var other = cljs.core.first(arglist__7331);
var _ = cljs.core.rest(arglist__7331);
return G__7329__delegate(s,other,_);
});
G__7329.cljs$core$IFn$_invoke$arity$variadic = G__7329__delegate;
return G__7329;
})()
,(function() { 
var G__7332__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__7332 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7333__i = 0, G__7333__a = new Array(arguments.length -  2);
while (G__7333__i < G__7333__a.length) {G__7333__a[G__7333__i] = arguments[G__7333__i + 2]; ++G__7333__i;}
  _ = new cljs.core.IndexedSeq(G__7333__a,0,null);
} 
return G__7332__delegate.call(this,s,substr,_);};
G__7332.cljs$lang$maxFixedArity = 2;
G__7332.cljs$lang$applyTo = (function (arglist__7334){
var s = cljs.core.first(arglist__7334);
arglist__7334 = cljs.core.next(arglist__7334);
var substr = cljs.core.first(arglist__7334);
var _ = cljs.core.rest(arglist__7334);
return G__7332__delegate(s,substr,_);
});
G__7332.cljs$core$IFn$_invoke$arity$variadic = G__7332__delegate;
return G__7332;
})()
,(function() { 
var G__7335__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__7335 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7336__i = 0, G__7336__a = new Array(arguments.length -  1);
while (G__7336__i < G__7336__a.length) {G__7336__a[G__7336__i] = arguments[G__7336__i + 1]; ++G__7336__i;}
  _ = new cljs.core.IndexedSeq(G__7336__a,0,null);
} 
return G__7335__delegate.call(this,s,_);};
G__7335.cljs$lang$maxFixedArity = 1;
G__7335.cljs$lang$applyTo = (function (arglist__7337){
var s = cljs.core.first(arglist__7337);
var _ = cljs.core.rest(arglist__7337);
return G__7335__delegate(s,_);
});
G__7335.cljs$core$IFn$_invoke$arity$variadic = G__7335__delegate;
return G__7335;
})()
,(function() { 
var G__7338__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__7338 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7339__i = 0, G__7339__a = new Array(arguments.length -  2);
while (G__7339__i < G__7339__a.length) {G__7339__a[G__7339__i] = arguments[G__7339__i + 2]; ++G__7339__i;}
  _ = new cljs.core.IndexedSeq(G__7339__a,0,null);
} 
return G__7338__delegate.call(this,s,other,_);};
G__7338.cljs$lang$maxFixedArity = 2;
G__7338.cljs$lang$applyTo = (function (arglist__7340){
var s = cljs.core.first(arglist__7340);
arglist__7340 = cljs.core.next(arglist__7340);
var other = cljs.core.first(arglist__7340);
var _ = cljs.core.rest(arglist__7340);
return G__7338__delegate(s,other,_);
});
G__7338.cljs$core$IFn$_invoke$arity$variadic = G__7338__delegate;
return G__7338;
})()
,(function() { 
var G__7341__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__7341 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7342__i = 0, G__7342__a = new Array(arguments.length -  1);
while (G__7342__i < G__7342__a.length) {G__7342__a[G__7342__i] = arguments[G__7342__i + 1]; ++G__7342__i;}
  _ = new cljs.core.IndexedSeq(G__7342__a,0,null);
} 
return G__7341__delegate.call(this,s,_);};
G__7341.cljs$lang$maxFixedArity = 1;
G__7341.cljs$lang$applyTo = (function (arglist__7343){
var s = cljs.core.first(arglist__7343);
var _ = cljs.core.rest(arglist__7343);
return G__7341__delegate(s,_);
});
G__7341.cljs$core$IFn$_invoke$arity$variadic = G__7341__delegate;
return G__7341;
})()
,(function() { 
var G__7344__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__7344 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7345__i = 0, G__7345__a = new Array(arguments.length -  1);
while (G__7345__i < G__7345__a.length) {G__7345__a[G__7345__i] = arguments[G__7345__i + 1]; ++G__7345__i;}
  _ = new cljs.core.IndexedSeq(G__7345__a,0,null);
} 
return G__7344__delegate.call(this,s,_);};
G__7344.cljs$lang$maxFixedArity = 1;
G__7344.cljs$lang$applyTo = (function (arglist__7346){
var s = cljs.core.first(arglist__7346);
var _ = cljs.core.rest(arglist__7346);
return G__7344__delegate(s,_);
});
G__7344.cljs$core$IFn$_invoke$arity$variadic = G__7344__delegate;
return G__7344;
})()
,(function() { 
var G__7347__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__7347 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7348__i = 0, G__7348__a = new Array(arguments.length -  3);
while (G__7348__i < G__7348__a.length) {G__7348__a[G__7348__i] = arguments[G__7348__i + 3]; ++G__7348__i;}
  _ = new cljs.core.IndexedSeq(G__7348__a,0,null);
} 
return G__7347__delegate.call(this,s,start,end,_);};
G__7347.cljs$lang$maxFixedArity = 3;
G__7347.cljs$lang$applyTo = (function (arglist__7349){
var s = cljs.core.first(arglist__7349);
arglist__7349 = cljs.core.next(arglist__7349);
var start = cljs.core.first(arglist__7349);
arglist__7349 = cljs.core.next(arglist__7349);
var end = cljs.core.first(arglist__7349);
var _ = cljs.core.rest(arglist__7349);
return G__7347__delegate(s,start,end,_);
});
G__7347.cljs$core$IFn$_invoke$arity$variadic = G__7347__delegate;
return G__7347;
})()
,(function() { 
var G__7350__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__7350 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7351__i = 0, G__7351__a = new Array(arguments.length -  2);
while (G__7351__i < G__7351__a.length) {G__7351__a[G__7351__i] = arguments[G__7351__i + 2]; ++G__7351__i;}
  _ = new cljs.core.IndexedSeq(G__7351__a,0,null);
} 
return G__7350__delegate.call(this,s,idx,_);};
G__7350.cljs$lang$maxFixedArity = 2;
G__7350.cljs$lang$applyTo = (function (arglist__7352){
var s = cljs.core.first(arglist__7352);
arglist__7352 = cljs.core.next(arglist__7352);
var idx = cljs.core.first(arglist__7352);
var _ = cljs.core.rest(arglist__7352);
return G__7350__delegate(s,idx,_);
});
G__7350.cljs$core$IFn$_invoke$arity$variadic = G__7350__delegate;
return G__7350;
})()
,(function() { 
var G__7353__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__7353 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7354__i = 0, G__7354__a = new Array(arguments.length -  3);
while (G__7354__i < G__7354__a.length) {G__7354__a[G__7354__i] = arguments[G__7354__i + 3]; ++G__7354__i;}
  _ = new cljs.core.IndexedSeq(G__7354__a,0,null);
} 
return G__7353__delegate.call(this,s,old,new$,_);};
G__7353.cljs$lang$maxFixedArity = 3;
G__7353.cljs$lang$applyTo = (function (arglist__7355){
var s = cljs.core.first(arglist__7355);
arglist__7355 = cljs.core.next(arglist__7355);
var old = cljs.core.first(arglist__7355);
arglist__7355 = cljs.core.next(arglist__7355);
var new$ = cljs.core.first(arglist__7355);
var _ = cljs.core.rest(arglist__7355);
return G__7353__delegate(s,old,new$,_);
});
G__7353.cljs$core$IFn$_invoke$arity$variadic = G__7353__delegate;
return G__7353;
})()
,(function() { 
var G__7356__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7356 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7357__i = 0, G__7357__a = new Array(arguments.length -  1);
while (G__7357__i < G__7357__a.length) {G__7357__a[G__7357__i] = arguments[G__7357__i + 1]; ++G__7357__i;}
  _ = new cljs.core.IndexedSeq(G__7357__a,0,null);
} 
return G__7356__delegate.call(this,s,_);};
G__7356.cljs$lang$maxFixedArity = 1;
G__7356.cljs$lang$applyTo = (function (arglist__7358){
var s = cljs.core.first(arglist__7358);
var _ = cljs.core.rest(arglist__7358);
return G__7356__delegate(s,_);
});
G__7356.cljs$core$IFn$_invoke$arity$variadic = G__7356__delegate;
return G__7356;
})()
,(function() { 
var G__7359__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__7359 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7360__i = 0, G__7360__a = new Array(arguments.length -  2);
while (G__7360__i < G__7360__a.length) {G__7360__a[G__7360__i] = arguments[G__7360__i + 2]; ++G__7360__i;}
  _ = new cljs.core.IndexedSeq(G__7360__a,0,null);
} 
return G__7359__delegate.call(this,s,delim,_);};
G__7359.cljs$lang$maxFixedArity = 2;
G__7359.cljs$lang$applyTo = (function (arglist__7361){
var s = cljs.core.first(arglist__7361);
arglist__7361 = cljs.core.next(arglist__7361);
var delim = cljs.core.first(arglist__7361);
var _ = cljs.core.rest(arglist__7361);
return G__7359__delegate(s,delim,_);
});
G__7359.cljs$core$IFn$_invoke$arity$variadic = G__7359__delegate;
return G__7359;
})()
,(function() { 
var G__7362__delegate = function (s,_){
return cljs.core.count(s);
};
var G__7362 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7363__i = 0, G__7363__a = new Array(arguments.length -  1);
while (G__7363__i < G__7363__a.length) {G__7363__a[G__7363__i] = arguments[G__7363__i + 1]; ++G__7363__i;}
  _ = new cljs.core.IndexedSeq(G__7363__a,0,null);
} 
return G__7362__delegate.call(this,s,_);};
G__7362.cljs$lang$maxFixedArity = 1;
G__7362.cljs$lang$applyTo = (function (arglist__7364){
var s = cljs.core.first(arglist__7364);
var _ = cljs.core.rest(arglist__7364);
return G__7362__delegate(s,_);
});
G__7362.cljs$core$IFn$_invoke$arity$variadic = G__7362__delegate;
return G__7362;
})()
,(function() { 
var G__7365__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__7365 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7366__i = 0, G__7366__a = new Array(arguments.length -  1);
while (G__7366__i < G__7366__a.length) {G__7366__a[G__7366__i] = arguments[G__7366__i + 1]; ++G__7366__i;}
  _ = new cljs.core.IndexedSeq(G__7366__a,0,null);
} 
return G__7365__delegate.call(this,s,_);};
G__7365.cljs$lang$maxFixedArity = 1;
G__7365.cljs$lang$applyTo = (function (arglist__7367){
var s = cljs.core.first(arglist__7367);
var _ = cljs.core.rest(arglist__7367);
return G__7365__delegate(s,_);
});
G__7365.cljs$core$IFn$_invoke$arity$variadic = G__7365__delegate;
return G__7365;
})()
,(function() { 
var G__7368__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__7368 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7369__i = 0, G__7369__a = new Array(arguments.length -  2);
while (G__7369__i < G__7369__a.length) {G__7369__a[G__7369__i] = arguments[G__7369__i + 2]; ++G__7369__i;}
  _ = new cljs.core.IndexedSeq(G__7369__a,0,null);
} 
return G__7368__delegate.call(this,s,ch,_);};
G__7368.cljs$lang$maxFixedArity = 2;
G__7368.cljs$lang$applyTo = (function (arglist__7370){
var s = cljs.core.first(arglist__7370);
arglist__7370 = cljs.core.next(arglist__7370);
var ch = cljs.core.first(arglist__7370);
var _ = cljs.core.rest(arglist__7370);
return G__7368__delegate(s,ch,_);
});
G__7368.cljs$core$IFn$_invoke$arity$variadic = G__7368__delegate;
return G__7368;
})()
,(function() { 
var G__7371__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__7371 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7372__i = 0, G__7372__a = new Array(arguments.length -  2);
while (G__7372__i < G__7372__a.length) {G__7372__a[G__7372__i] = arguments[G__7372__i + 2]; ++G__7372__i;}
  _ = new cljs.core.IndexedSeq(G__7372__a,0,null);
} 
return G__7371__delegate.call(this,s,other,_);};
G__7371.cljs$lang$maxFixedArity = 2;
G__7371.cljs$lang$applyTo = (function (arglist__7373){
var s = cljs.core.first(arglist__7373);
arglist__7373 = cljs.core.next(arglist__7373);
var other = cljs.core.first(arglist__7373);
var _ = cljs.core.rest(arglist__7373);
return G__7371__delegate(s,other,_);
});
G__7371.cljs$core$IFn$_invoke$arity$variadic = G__7371__delegate;
return G__7371;
})()
,(function() { 
var G__7374__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__7374 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7375__i = 0, G__7375__a = new Array(arguments.length -  2);
while (G__7375__i < G__7375__a.length) {G__7375__a[G__7375__i] = arguments[G__7375__i + 2]; ++G__7375__i;}
  _ = new cljs.core.IndexedSeq(G__7375__a,0,null);
} 
return G__7374__delegate.call(this,s,other,_);};
G__7374.cljs$lang$maxFixedArity = 2;
G__7374.cljs$lang$applyTo = (function (arglist__7376){
var s = cljs.core.first(arglist__7376);
arglist__7376 = cljs.core.next(arglist__7376);
var other = cljs.core.first(arglist__7376);
var _ = cljs.core.rest(arglist__7376);
return G__7374__delegate(s,other,_);
});
G__7374.cljs$core$IFn$_invoke$arity$variadic = G__7374__delegate;
return G__7374;
})()
,(function() { 
var G__7377__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__7377 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7378__i = 0, G__7378__a = new Array(arguments.length -  2);
while (G__7378__i < G__7378__a.length) {G__7378__a[G__7378__i] = arguments[G__7378__i + 2]; ++G__7378__i;}
  _ = new cljs.core.IndexedSeq(G__7378__a,0,null);
} 
return G__7377__delegate.call(this,s,suffix,_);};
G__7377.cljs$lang$maxFixedArity = 2;
G__7377.cljs$lang$applyTo = (function (arglist__7379){
var s = cljs.core.first(arglist__7379);
arglist__7379 = cljs.core.next(arglist__7379);
var suffix = cljs.core.first(arglist__7379);
var _ = cljs.core.rest(arglist__7379);
return G__7377__delegate(s,suffix,_);
});
G__7377.cljs$core$IFn$_invoke$arity$variadic = G__7377__delegate;
return G__7377;
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6246 = cljs.core.get_global_hierarchy;
return (fexpr__6246.cljs$core$IFn$_invoke$arity$0 ? fexpr__6246.cljs$core$IFn$_invoke$arity$0() : fexpr__6246.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6248_SHARP_){
return fs.existsSync(p1__6248_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6249){
var map__6250 = p__6249;
var map__6250__$1 = cljs.core.__destructure_map(map__6250);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6250__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6251){
var map__6252 = p__6251;
var map__6252__$1 = cljs.core.__destructure_map(map__6252);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6252__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6253_7380 = cljs.core.seq(imports);
var chunk__6254_7381 = null;
var count__6255_7382 = (0);
var i__6256_7383 = (0);
while(true){
if((i__6256_7383 < count__6255_7382)){
var import_node_7384 = chunk__6254_7381.cljs$core$IIndexed$_nth$arity$2(null,i__6256_7383);
if(cljs.core.map_QMARK_(import_node_7384)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_7384);
} else {
}


var G__7386 = seq__6253_7380;
var G__7387 = chunk__6254_7381;
var G__7389 = count__6255_7382;
var G__7391 = (i__6256_7383 + (1));
seq__6253_7380 = G__7386;
chunk__6254_7381 = G__7387;
count__6255_7382 = G__7389;
i__6256_7383 = G__7391;
continue;
} else {
var temp__5823__auto___7392 = cljs.core.seq(seq__6253_7380);
if(temp__5823__auto___7392){
var seq__6253_7393__$1 = temp__5823__auto___7392;
if(cljs.core.chunked_seq_QMARK_(seq__6253_7393__$1)){
var c__5673__auto___7394 = cljs.core.chunk_first(seq__6253_7393__$1);
var G__7395 = cljs.core.chunk_rest(seq__6253_7393__$1);
var G__7396 = c__5673__auto___7394;
var G__7397 = cljs.core.count(c__5673__auto___7394);
var G__7398 = (0);
seq__6253_7380 = G__7395;
chunk__6254_7381 = G__7396;
count__6255_7382 = G__7397;
i__6256_7383 = G__7398;
continue;
} else {
var import_node_7399 = cljs.core.first(seq__6253_7393__$1);
if(cljs.core.map_QMARK_(import_node_7399)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_7399);
} else {
}


var G__7403 = cljs.core.next(seq__6253_7393__$1);
var G__7404 = null;
var G__7405 = (0);
var G__7406 = (0);
seq__6253_7380 = G__7403;
chunk__6254_7381 = G__7404;
count__6255_7382 = G__7405;
i__6256_7383 = G__7406;
continue;
}
} else {
}
}
break;
}

var seq__6257_7407 = cljs.core.seq(interns);
var chunk__6258_7408 = null;
var count__6259_7409 = (0);
var i__6260_7410 = (0);
while(true){
if((i__6260_7410 < count__6259_7409)){
var intern_node_7411 = chunk__6258_7408.cljs$core$IIndexed$_nth$arity$2(null,i__6260_7410);
if(cljs.core.map_QMARK_(intern_node_7411)){
nex.interpreter.process_intern(ctx,intern_node_7411);
} else {
}


var G__7412 = seq__6257_7407;
var G__7413 = chunk__6258_7408;
var G__7414 = count__6259_7409;
var G__7415 = (i__6260_7410 + (1));
seq__6257_7407 = G__7412;
chunk__6258_7408 = G__7413;
count__6259_7409 = G__7414;
i__6260_7410 = G__7415;
continue;
} else {
var temp__5823__auto___7416 = cljs.core.seq(seq__6257_7407);
if(temp__5823__auto___7416){
var seq__6257_7417__$1 = temp__5823__auto___7416;
if(cljs.core.chunked_seq_QMARK_(seq__6257_7417__$1)){
var c__5673__auto___7418 = cljs.core.chunk_first(seq__6257_7417__$1);
var G__7419 = cljs.core.chunk_rest(seq__6257_7417__$1);
var G__7420 = c__5673__auto___7418;
var G__7421 = cljs.core.count(c__5673__auto___7418);
var G__7422 = (0);
seq__6257_7407 = G__7419;
chunk__6258_7408 = G__7420;
count__6259_7409 = G__7421;
i__6260_7410 = G__7422;
continue;
} else {
var intern_node_7424 = cljs.core.first(seq__6257_7417__$1);
if(cljs.core.map_QMARK_(intern_node_7424)){
nex.interpreter.process_intern(ctx,intern_node_7424);
} else {
}


var G__7425 = cljs.core.next(seq__6257_7417__$1);
var G__7426 = null;
var G__7427 = (0);
var G__7428 = (0);
seq__6257_7407 = G__7425;
chunk__6258_7408 = G__7426;
count__6259_7409 = G__7427;
i__6260_7410 = G__7428;
continue;
}
} else {
}
}
break;
}

var seq__6261_7429 = cljs.core.seq(classes);
var chunk__6262_7430 = null;
var count__6263_7431 = (0);
var i__6264_7432 = (0);
while(true){
if((i__6264_7432 < count__6263_7431)){
var class_node_7434 = chunk__6262_7430.cljs$core$IIndexed$_nth$arity$2(null,i__6264_7432);
if(cljs.core.map_QMARK_(class_node_7434)){
nex.interpreter.register_class(ctx,class_node_7434);
} else {
}


var G__7435 = seq__6261_7429;
var G__7436 = chunk__6262_7430;
var G__7437 = count__6263_7431;
var G__7438 = (i__6264_7432 + (1));
seq__6261_7429 = G__7435;
chunk__6262_7430 = G__7436;
count__6263_7431 = G__7437;
i__6264_7432 = G__7438;
continue;
} else {
var temp__5823__auto___7439 = cljs.core.seq(seq__6261_7429);
if(temp__5823__auto___7439){
var seq__6261_7440__$1 = temp__5823__auto___7439;
if(cljs.core.chunked_seq_QMARK_(seq__6261_7440__$1)){
var c__5673__auto___7441 = cljs.core.chunk_first(seq__6261_7440__$1);
var G__7442 = cljs.core.chunk_rest(seq__6261_7440__$1);
var G__7443 = c__5673__auto___7441;
var G__7444 = cljs.core.count(c__5673__auto___7441);
var G__7445 = (0);
seq__6261_7429 = G__7442;
chunk__6262_7430 = G__7443;
count__6263_7431 = G__7444;
i__6264_7432 = G__7445;
continue;
} else {
var class_node_7446 = cljs.core.first(seq__6261_7440__$1);
if(cljs.core.map_QMARK_(class_node_7446)){
nex.interpreter.register_class(ctx,class_node_7446);
} else {
}


var G__7447 = cljs.core.next(seq__6261_7440__$1);
var G__7448 = null;
var G__7449 = (0);
var G__7450 = (0);
seq__6261_7429 = G__7447;
chunk__6262_7430 = G__7448;
count__6263_7431 = G__7449;
i__6264_7432 = G__7450;
continue;
}
} else {
}
}
break;
}

var seq__6265_7451 = cljs.core.seq(functions);
var chunk__6266_7452 = null;
var count__6267_7453 = (0);
var i__6268_7454 = (0);
while(true){
if((i__6268_7454 < count__6267_7453)){
var fn_node_7455 = chunk__6266_7452.cljs$core$IIndexed$_nth$arity$2(null,i__6268_7454);
if(cljs.core.map_QMARK_(fn_node_7455)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_7455);
} else {
}


var G__7456 = seq__6265_7451;
var G__7457 = chunk__6266_7452;
var G__7458 = count__6267_7453;
var G__7459 = (i__6268_7454 + (1));
seq__6265_7451 = G__7456;
chunk__6266_7452 = G__7457;
count__6267_7453 = G__7458;
i__6268_7454 = G__7459;
continue;
} else {
var temp__5823__auto___7460 = cljs.core.seq(seq__6265_7451);
if(temp__5823__auto___7460){
var seq__6265_7461__$1 = temp__5823__auto___7460;
if(cljs.core.chunked_seq_QMARK_(seq__6265_7461__$1)){
var c__5673__auto___7462 = cljs.core.chunk_first(seq__6265_7461__$1);
var G__7463 = cljs.core.chunk_rest(seq__6265_7461__$1);
var G__7464 = c__5673__auto___7462;
var G__7465 = cljs.core.count(c__5673__auto___7462);
var G__7466 = (0);
seq__6265_7451 = G__7463;
chunk__6266_7452 = G__7464;
count__6267_7453 = G__7465;
i__6268_7454 = G__7466;
continue;
} else {
var fn_node_7467 = cljs.core.first(seq__6265_7461__$1);
if(cljs.core.map_QMARK_(fn_node_7467)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_7467);
} else {
}


var G__7468 = cljs.core.next(seq__6265_7461__$1);
var G__7469 = null;
var G__7470 = (0);
var G__7471 = (0);
seq__6265_7451 = G__7468;
chunk__6266_7452 = G__7469;
count__6267_7453 = G__7470;
i__6268_7454 = G__7471;
continue;
}
} else {
}
}
break;
}

var seq__6269_7472 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6270_7473 = null;
var count__6271_7474 = (0);
var i__6272_7475 = (0);
while(true){
if((i__6272_7475 < count__6271_7474)){
var stmt_node_7476 = chunk__6270_7473.cljs$core$IIndexed$_nth$arity$2(null,i__6272_7475);
if(cljs.core.map_QMARK_(stmt_node_7476)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_7476);
} else {
}


var G__7477 = seq__6269_7472;
var G__7478 = chunk__6270_7473;
var G__7479 = count__6271_7474;
var G__7480 = (i__6272_7475 + (1));
seq__6269_7472 = G__7477;
chunk__6270_7473 = G__7478;
count__6271_7474 = G__7479;
i__6272_7475 = G__7480;
continue;
} else {
var temp__5823__auto___7481 = cljs.core.seq(seq__6269_7472);
if(temp__5823__auto___7481){
var seq__6269_7482__$1 = temp__5823__auto___7481;
if(cljs.core.chunked_seq_QMARK_(seq__6269_7482__$1)){
var c__5673__auto___7483 = cljs.core.chunk_first(seq__6269_7482__$1);
var G__7484 = cljs.core.chunk_rest(seq__6269_7482__$1);
var G__7485 = c__5673__auto___7483;
var G__7486 = cljs.core.count(c__5673__auto___7483);
var G__7487 = (0);
seq__6269_7472 = G__7484;
chunk__6270_7473 = G__7485;
count__6271_7474 = G__7486;
i__6272_7475 = G__7487;
continue;
} else {
var stmt_node_7488 = cljs.core.first(seq__6269_7482__$1);
if(cljs.core.map_QMARK_(stmt_node_7488)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_7488);
} else {
}


var G__7489 = cljs.core.next(seq__6269_7482__$1);
var G__7490 = null;
var G__7491 = (0);
var G__7492 = (0);
seq__6269_7472 = G__7489;
chunk__6270_7473 = G__7490;
count__6271_7474 = G__7491;
i__6272_7475 = G__7492;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6273){
var map__6274 = p__6273;
var map__6274__$1 = cljs.core.__destructure_map(map__6274);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6274__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6274__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6274__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6275){
var map__6276 = p__6275;
var map__6276__$1 = cljs.core.__destructure_map(map__6276);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6277 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6278 = null;
var count__6279 = (0);
var i__6280 = (0);
while(true){
if((i__6280 < count__6279)){
var vec__6287 = chunk__6278.cljs$core$IIndexed$_nth$arity$2(null,i__6280);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__7494 = seq__6277;
var G__7495 = chunk__6278;
var G__7496 = count__6279;
var G__7497 = (i__6280 + (1));
seq__6277 = G__7494;
chunk__6278 = G__7495;
count__6279 = G__7496;
i__6280 = G__7497;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6277);
if(temp__5823__auto__){
var seq__6277__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6277__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6277__$1);
var G__7498 = cljs.core.chunk_rest(seq__6277__$1);
var G__7499 = c__5673__auto__;
var G__7500 = cljs.core.count(c__5673__auto__);
var G__7501 = (0);
seq__6277 = G__7498;
chunk__6278 = G__7499;
count__6279 = G__7500;
i__6280 = G__7501;
continue;
} else {
var vec__6290 = cljs.core.first(seq__6277__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6290,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6290,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__7502 = cljs.core.next(seq__6277__$1);
var G__7503 = null;
var G__7504 = (0);
var G__7505 = (0);
seq__6277 = G__7502;
chunk__6278 = G__7503;
count__6279 = G__7504;
i__6280 = G__7505;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6293 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6294 = null;
var count__6295 = (0);
var i__6296 = (0);
while(true){
if((i__6296 < count__6295)){
var vec__6303 = chunk__6294.cljs$core$IIndexed$_nth$arity$2(null,i__6296);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6303,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6303,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7506 = seq__6293;
var G__7507 = chunk__6294;
var G__7508 = count__6295;
var G__7509 = (i__6296 + (1));
seq__6293 = G__7506;
chunk__6294 = G__7507;
count__6295 = G__7508;
i__6296 = G__7509;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6293);
if(temp__5823__auto__){
var seq__6293__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6293__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6293__$1);
var G__7510 = cljs.core.chunk_rest(seq__6293__$1);
var G__7511 = c__5673__auto__;
var G__7512 = cljs.core.count(c__5673__auto__);
var G__7513 = (0);
seq__6293 = G__7510;
chunk__6294 = G__7511;
count__6295 = G__7512;
i__6296 = G__7513;
continue;
} else {
var vec__6306 = cljs.core.first(seq__6293__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6306,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7514 = cljs.core.next(seq__6293__$1);
var G__7515 = null;
var G__7516 = (0);
var G__7517 = (0);
seq__6293 = G__7514;
chunk__6294 = G__7515;
count__6295 = G__7516;
i__6296 = G__7517;
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
var G__6309 = new_ctx;
var G__6310 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6311 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6309,G__6310,G__6311) : nex.interpreter.eval_body_with_rescue.call(null,G__6309,G__6310,G__6311));
} else {
var seq__6312 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6313 = null;
var count__6314 = (0);
var i__6315 = (0);
while(true){
if((i__6315 < count__6314)){
var stmt = chunk__6313.cljs$core$IIndexed$_nth$arity$2(null,i__6315);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7519 = seq__6312;
var G__7520 = chunk__6313;
var G__7521 = count__6314;
var G__7522 = (i__6315 + (1));
seq__6312 = G__7519;
chunk__6313 = G__7520;
count__6314 = G__7521;
i__6315 = G__7522;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6312);
if(temp__5823__auto__){
var seq__6312__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6312__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6312__$1);
var G__7524 = cljs.core.chunk_rest(seq__6312__$1);
var G__7526 = c__5673__auto__;
var G__7527 = cljs.core.count(c__5673__auto__);
var G__7528 = (0);
seq__6312 = G__7524;
chunk__6313 = G__7526;
count__6314 = G__7527;
i__6315 = G__7528;
continue;
} else {
var stmt = cljs.core.first(seq__6312__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7532 = cljs.core.next(seq__6312__$1);
var G__7533 = null;
var G__7534 = (0);
var G__7535 = (0);
seq__6312 = G__7532;
chunk__6313 = G__7533;
count__6314 = G__7534;
i__6315 = G__7535;
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
}catch (e6316){var ___$5 = e6316;
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
}catch (e6317){var ___$5 = e6317;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___7552 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___7552)){
var tgt_7553 = temp__5823__auto___7552;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_7553,updated_obj);
}catch (e6318){var __7554__$5 = e6318;
}} else {
}

var seq__6319_7555 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__6320_7556 = null;
var count__6321_7557 = (0);
var i__6322_7558 = (0);
while(true){
if((i__6322_7558 < count__6321_7557)){
var vec__6331_7559 = chunk__6320_7556.cljs$core$IIndexed$_nth$arity$2(null,i__6322_7558);
var field_name_7560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6331_7559,(0),null);
var field_val_7561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6331_7559,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_7560))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_7560),field_val_7561);
}catch (e6334){var __7566__$5 = e6334;
}} else {
}


var G__7567 = seq__6319_7555;
var G__7568 = chunk__6320_7556;
var G__7569 = count__6321_7557;
var G__7570 = (i__6322_7558 + (1));
seq__6319_7555 = G__7567;
chunk__6320_7556 = G__7568;
count__6321_7557 = G__7569;
i__6322_7558 = G__7570;
continue;
} else {
var temp__5823__auto___7572 = cljs.core.seq(seq__6319_7555);
if(temp__5823__auto___7572){
var seq__6319_7573__$1 = temp__5823__auto___7572;
if(cljs.core.chunked_seq_QMARK_(seq__6319_7573__$1)){
var c__5673__auto___7578 = cljs.core.chunk_first(seq__6319_7573__$1);
var G__7579 = cljs.core.chunk_rest(seq__6319_7573__$1);
var G__7580 = c__5673__auto___7578;
var G__7581 = cljs.core.count(c__5673__auto___7578);
var G__7582 = (0);
seq__6319_7555 = G__7579;
chunk__6320_7556 = G__7580;
count__6321_7557 = G__7581;
i__6322_7558 = G__7582;
continue;
} else {
var vec__6335_7585 = cljs.core.first(seq__6319_7573__$1);
var field_name_7586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6335_7585,(0),null);
var field_val_7587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6335_7585,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_7586))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_7586),field_val_7587);
}catch (e6338){var __7598__$5 = e6338;
}} else {
}


var G__7599 = cljs.core.next(seq__6319_7573__$1);
var G__7600 = null;
var G__7601 = (0);
var G__7602 = (0);
seq__6319_7555 = G__7599;
chunk__6320_7556 = G__7600;
count__6321_7557 = G__7601;
i__6322_7558 = G__7602;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6341){
var map__6342 = p__6341;
var map__6342__$1 = cljs.core.__destructure_map(map__6342);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6342__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6342__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6342__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6342__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args));
} else {
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6339_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6339_SHARP_);
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
var _ = (function (){var seq__6343 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6344 = null;
var count__6345 = (0);
var i__6346 = (0);
while(true){
if((i__6346 < count__6345)){
var vec__6353 = chunk__6344.cljs$core$IIndexed$_nth$arity$2(null,i__6346);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6353,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6353,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__7603 = seq__6343;
var G__7604 = chunk__6344;
var G__7605 = count__6345;
var G__7606 = (i__6346 + (1));
seq__6343 = G__7603;
chunk__6344 = G__7604;
count__6345 = G__7605;
i__6346 = G__7606;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6343);
if(temp__5823__auto__){
var seq__6343__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6343__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6343__$1);
var G__7607 = cljs.core.chunk_rest(seq__6343__$1);
var G__7608 = c__5673__auto__;
var G__7609 = cljs.core.count(c__5673__auto__);
var G__7610 = (0);
seq__6343 = G__7607;
chunk__6344 = G__7608;
count__6345 = G__7609;
i__6346 = G__7610;
continue;
} else {
var vec__6356 = cljs.core.first(seq__6343__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6356,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6356,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__7611 = cljs.core.next(seq__6343__$1);
var G__7612 = null;
var G__7613 = (0);
var G__7614 = (0);
seq__6343 = G__7611;
chunk__6344 = G__7612;
count__6345 = G__7613;
i__6346 = G__7614;
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
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6359 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6360 = null;
var count__6361 = (0);
var i__6362 = (0);
while(true){
if((i__6362 < count__6361)){
var vec__6369 = chunk__6360.cljs$core$IIndexed$_nth$arity$2(null,i__6362);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6369,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7615 = seq__6359;
var G__7616 = chunk__6360;
var G__7617 = count__6361;
var G__7618 = (i__6362 + (1));
seq__6359 = G__7615;
chunk__6360 = G__7616;
count__6361 = G__7617;
i__6362 = G__7618;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6359);
if(temp__5823__auto__){
var seq__6359__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6359__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6359__$1);
var G__7619 = cljs.core.chunk_rest(seq__6359__$1);
var G__7620 = c__5673__auto__;
var G__7621 = cljs.core.count(c__5673__auto__);
var G__7622 = (0);
seq__6359 = G__7619;
chunk__6360 = G__7620;
count__6361 = G__7621;
i__6362 = G__7622;
continue;
} else {
var vec__6372 = cljs.core.first(seq__6359__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6372,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6372,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7627 = cljs.core.next(seq__6359__$1);
var G__7628 = null;
var G__7629 = (0);
var G__7630 = (0);
seq__6359 = G__7627;
chunk__6360 = G__7628;
count__6361 = G__7629;
i__6362 = G__7630;
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
var G__6375 = new_ctx;
var G__6376 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6377 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6375,G__6376,G__6377) : nex.interpreter.eval_body_with_rescue.call(null,G__6375,G__6376,G__6377));
} else {
var seq__6378 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6379 = null;
var count__6380 = (0);
var i__6381 = (0);
while(true){
if((i__6381 < count__6380)){
var stmt = chunk__6379.cljs$core$IIndexed$_nth$arity$2(null,i__6381);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7639 = seq__6378;
var G__7640 = chunk__6379;
var G__7641 = count__6380;
var G__7642 = (i__6381 + (1));
seq__6378 = G__7639;
chunk__6379 = G__7640;
count__6380 = G__7641;
i__6381 = G__7642;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6378);
if(temp__5823__auto__){
var seq__6378__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6378__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6378__$1);
var G__7643 = cljs.core.chunk_rest(seq__6378__$1);
var G__7644 = c__5673__auto__;
var G__7645 = cljs.core.count(c__5673__auto__);
var G__7646 = (0);
seq__6378 = G__7643;
chunk__6379 = G__7644;
count__6380 = G__7645;
i__6381 = G__7646;
continue;
} else {
var stmt = cljs.core.first(seq__6378__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7647 = cljs.core.next(seq__6378__$1);
var G__7648 = null;
var G__7649 = (0);
var G__7650 = (0);
seq__6378 = G__7647;
chunk__6379 = G__7648;
count__6380 = G__7649;
i__6381 = G__7650;
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
}catch (e6382){var ___$7 = e6382;
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
}catch (e6383){var ___$7 = e6383;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6384){var ___$7 = e6384;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___7651 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___7651)){
var ensure_assertions_7652 = temp__5823__auto___7651;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_7652,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6385){var e = e6385;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6340_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6340_SHARP_),method);
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
}catch (e6386){var _ = e6386;
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
}catch (e6387){var _ = e6387;
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6388 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6389 = null;
var count__6390 = (0);
var i__6391 = (0);
while(true){
if((i__6391 < count__6390)){
var vec__6398 = chunk__6389.cljs$core$IIndexed$_nth$arity$2(null,i__6391);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6398,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6398,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__7656 = seq__6388;
var G__7657 = chunk__6389;
var G__7658 = count__6390;
var G__7659 = (i__6391 + (1));
seq__6388 = G__7656;
chunk__6389 = G__7657;
count__6390 = G__7658;
i__6391 = G__7659;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6388);
if(temp__5823__auto__){
var seq__6388__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6388__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6388__$1);
var G__7667 = cljs.core.chunk_rest(seq__6388__$1);
var G__7668 = c__5673__auto__;
var G__7669 = cljs.core.count(c__5673__auto__);
var G__7670 = (0);
seq__6388 = G__7667;
chunk__6389 = G__7668;
count__6390 = G__7669;
i__6391 = G__7670;
continue;
} else {
var vec__6401 = cljs.core.first(seq__6388__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6401,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6401,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__7671 = cljs.core.next(seq__6388__$1);
var G__7672 = null;
var G__7673 = (0);
var G__7674 = (0);
seq__6388 = G__7671;
chunk__6389 = G__7672;
count__6390 = G__7673;
i__6391 = G__7674;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6404){
var map__6405 = p__6404;
var map__6405__$1 = cljs.core.__destructure_map(map__6405);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6405__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___7675 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___7675)){
var current_class_name_7676 = temp__5823__auto___7675;
var temp__5823__auto___7677__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_7676);
if(cljs.core.truth_(temp__5823__auto___7677__$1)){
var class_def_7678 = temp__5823__auto___7677__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_7678,field))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___7679 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___7679)){
var mf_7680 = temp__5823__auto___7679;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_7680,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6406){
var map__6407 = p__6406;
var map__6407__$1 = cljs.core.__destructure_map(map__6407);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6407__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var temp__5823__auto___7681 = new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___7681)){
var current_class_name_7682 = temp__5823__auto___7681;
var temp__5823__auto___7683__$1 = nex.interpreter.lookup_class_if_exists(ctx,current_class_name_7682);
if(cljs.core.truth_(temp__5823__auto___7683__$1)){
var class_def_7684 = temp__5823__auto___7683__$1;
if(cljs.core.truth_(nex.interpreter.lookup_class_constant(ctx,class_def_7684,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"constant?","constant?",116434182),true], null));
} else {
}
} else {
}
} else {
}

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6408 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6408.cljs$core$IFn$_invoke$arity$1 ? fexpr__6408.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6408.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6409){
var map__6410 = p__6409;
var map__6410__$1 = cljs.core.__destructure_map(map__6410);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6410__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6410__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6411 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6411.cljs$core$IFn$_invoke$arity$1 ? fexpr__6411.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6411.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6412_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6412_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6413){
var map__6414 = p__6413;
var map__6414__$1 = cljs.core.__destructure_map(map__6414);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6414__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

try{var seq__6421_7685 = cljs.core.seq(body);
var chunk__6422_7686 = null;
var count__6423_7687 = (0);
var i__6424_7688 = (0);
while(true){
if((i__6424_7688 < count__6423_7687)){
var stmt_7689 = chunk__6422_7686.cljs$core$IIndexed$_nth$arity$2(null,i__6424_7688);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_7689);


var G__7690 = seq__6421_7685;
var G__7691 = chunk__6422_7686;
var G__7692 = count__6423_7687;
var G__7693 = (i__6424_7688 + (1));
seq__6421_7685 = G__7690;
chunk__6422_7686 = G__7691;
count__6423_7687 = G__7692;
i__6424_7688 = G__7693;
continue;
} else {
var temp__5823__auto___7694 = cljs.core.seq(seq__6421_7685);
if(temp__5823__auto___7694){
var seq__6421_7695__$1 = temp__5823__auto___7694;
if(cljs.core.chunked_seq_QMARK_(seq__6421_7695__$1)){
var c__5673__auto___7696 = cljs.core.chunk_first(seq__6421_7695__$1);
var G__7697 = cljs.core.chunk_rest(seq__6421_7695__$1);
var G__7698 = c__5673__auto___7696;
var G__7699 = cljs.core.count(c__5673__auto___7696);
var G__7700 = (0);
seq__6421_7685 = G__7697;
chunk__6422_7686 = G__7698;
count__6423_7687 = G__7699;
i__6424_7688 = G__7700;
continue;
} else {
var stmt_7701 = cljs.core.first(seq__6421_7695__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_7701);


var G__7702 = cljs.core.next(seq__6421_7695__$1);
var G__7703 = null;
var G__7704 = (0);
var G__7705 = (0);
seq__6421_7685 = G__7702;
chunk__6422_7686 = G__7703;
count__6423_7687 = G__7704;
i__6424_7688 = G__7705;
continue;
}
} else {
}
}
break;
}
}catch (e6415){var e_7706 = e6415;
if((((e_7706 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_7706)))))){
throw e_7706;
} else {
var exc_value_7707 = (((((e_7706 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_7706))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_7706)):e_7706.message);
var rescue_env_7708 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __7709 = nex.interpreter.env_define(rescue_env_7708,"exception",exc_value_7707);
var rescue_ctx_7710 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_7708);
try{var seq__6417_7711 = cljs.core.seq(rescue);
var chunk__6418_7712 = null;
var count__6419_7713 = (0);
var i__6420_7714 = (0);
while(true){
if((i__6420_7714 < count__6419_7713)){
var stmt_7715 = chunk__6418_7712.cljs$core$IIndexed$_nth$arity$2(null,i__6420_7714);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_7710,stmt_7715);


var G__7716 = seq__6417_7711;
var G__7717 = chunk__6418_7712;
var G__7718 = count__6419_7713;
var G__7719 = (i__6420_7714 + (1));
seq__6417_7711 = G__7716;
chunk__6418_7712 = G__7717;
count__6419_7713 = G__7718;
i__6420_7714 = G__7719;
continue;
} else {
var temp__5823__auto___7720 = cljs.core.seq(seq__6417_7711);
if(temp__5823__auto___7720){
var seq__6417_7721__$1 = temp__5823__auto___7720;
if(cljs.core.chunked_seq_QMARK_(seq__6417_7721__$1)){
var c__5673__auto___7722 = cljs.core.chunk_first(seq__6417_7721__$1);
var G__7723 = cljs.core.chunk_rest(seq__6417_7721__$1);
var G__7724 = c__5673__auto___7722;
var G__7725 = cljs.core.count(c__5673__auto___7722);
var G__7726 = (0);
seq__6417_7711 = G__7723;
chunk__6418_7712 = G__7724;
count__6419_7713 = G__7725;
i__6420_7714 = G__7726;
continue;
} else {
var stmt_7727 = cljs.core.first(seq__6417_7721__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_7710,stmt_7727);


var G__7728 = cljs.core.next(seq__6417_7721__$1);
var G__7729 = null;
var G__7730 = (0);
var G__7731 = (0);
seq__6417_7711 = G__7728;
chunk__6418_7712 = G__7729;
count__6419_7713 = G__7730;
i__6420_7714 = G__7731;
continue;
}
} else {
}
}
break;
}

throw e_7706;
}catch (e6416){var re_7732 = e6416;
if((((re_7732 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_7732)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_7732;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__6426){
var map__6427 = p__6426;
var map__6427__$1 = cljs.core.__destructure_map(map__6427);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6425_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__6425_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__6428){
var map__6429 = p__6428;
var map__6429__$1 = cljs.core.__destructure_map(map__6429);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__6430){
var map__6431 = p__6430;
var map__6431__$1 = cljs.core.__destructure_map(map__6431);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6431__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6431__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6431__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__6435){
var map__6436 = p__6435;
var map__6436__$1 = cljs.core.__destructure_map(map__6436);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6436__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6436__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6436__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6436__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6432_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6432_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6433_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6433_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6434_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6434_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__6438){
var map__6439 = p__6438;
var map__6439__$1 = cljs.core.__destructure_map(map__6439);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6439__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__6441 = cljs.core.first(cs);
var map__6441__$1 = cljs.core.__destructure_map(map__6441);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__6441,map__6441__$1,values,body,val,map__6439,map__6439__$1,expr,clauses,else$){
return (function (p1__6437_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6437_SHARP_));
});})(cs,map__6441,map__6441__$1,values,body,val,map__6439,map__6439__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__7733 = cljs.core.rest(cs);
cs = G__7733;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__6443){
var map__6444 = p__6443;
var map__6444__$1 = cljs.core.__destructure_map(map__6444);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6444__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6444__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6444__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6444__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6444__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__6445_7734 = cljs.core.seq(init);
var chunk__6446_7735 = null;
var count__6447_7736 = (0);
var i__6448_7737 = (0);
while(true){
if((i__6448_7737 < count__6447_7736)){
var stmt_7738 = chunk__6446_7735.cljs$core$IIndexed$_nth$arity$2(null,i__6448_7737);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_7738);


var G__7739 = seq__6445_7734;
var G__7740 = chunk__6446_7735;
var G__7741 = count__6447_7736;
var G__7742 = (i__6448_7737 + (1));
seq__6445_7734 = G__7739;
chunk__6446_7735 = G__7740;
count__6447_7736 = G__7741;
i__6448_7737 = G__7742;
continue;
} else {
var temp__5823__auto___7743 = cljs.core.seq(seq__6445_7734);
if(temp__5823__auto___7743){
var seq__6445_7744__$1 = temp__5823__auto___7743;
if(cljs.core.chunked_seq_QMARK_(seq__6445_7744__$1)){
var c__5673__auto___7745 = cljs.core.chunk_first(seq__6445_7744__$1);
var G__7746 = cljs.core.chunk_rest(seq__6445_7744__$1);
var G__7747 = c__5673__auto___7745;
var G__7748 = cljs.core.count(c__5673__auto___7745);
var G__7749 = (0);
seq__6445_7734 = G__7746;
chunk__6446_7735 = G__7747;
count__6447_7736 = G__7748;
i__6448_7737 = G__7749;
continue;
} else {
var stmt_7750 = cljs.core.first(seq__6445_7744__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_7750);


var G__7751 = cljs.core.next(seq__6445_7744__$1);
var G__7752 = null;
var G__7753 = (0);
var G__7754 = (0);
seq__6445_7734 = G__7751;
chunk__6446_7735 = G__7752;
count__6447_7736 = G__7753;
i__6448_7737 = G__7754;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6444,map__6444__$1,init,invariant,variant,until,body){
return (function (p1__6442_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6442_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6444,map__6444__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__7755 = result;
var G__7756 = curr_variant;
var G__7757 = (iteration + (1));
last_result = G__7755;
prev_variant = G__7756;
iteration = G__7757;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__6449){
var map__6450 = p__6449;
var map__6450__$1 = cljs.core.__destructure_map(map__6450);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6450__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6450__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6450__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__6451){
var map__6452 = p__6451;
var map__6452__$1 = cljs.core.__destructure_map(map__6452);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6452__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6452__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__6453){
var map__6454 = p__6453;
var map__6454__$1 = cljs.core.__destructure_map(map__6454);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6454__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__6455){
var map__6456 = p__6455;
var map__6456__$1 = cljs.core.__destructure_map(map__6456);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6456__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__6457){
var map__6458 = p__6457;
var map__6458__$1 = cljs.core.__destructure_map(map__6458);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6458__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__6459){
var map__6460 = p__6459;
var map__6460__$1 = cljs.core.__destructure_map(map__6460);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6460__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__6461){
var map__6462 = p__6461;
var map__6462__$1 = cljs.core.__destructure_map(map__6462);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6462__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__6464){
var map__6465 = p__6464;
var map__6465__$1 = cljs.core.__destructure_map(map__6465);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6465__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6463_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6463_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-literal","set-literal",2066820071),(function (ctx,p__6467){
var map__6468 = p__6467;
var map__6468__$1 = cljs.core.__destructure_map(map__6468);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_set_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6466_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6466_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__6469){
var map__6470 = p__6469;
var map__6470__$1 = cljs.core.__destructure_map(map__6470);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6470__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6471){
var map__6472 = p__6471;
var map__6472__$1 = cljs.core.__destructure_map(map__6472);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__6473){
var map__6474 = p__6473;
var map__6474__$1 = cljs.core.__destructure_map(map__6474);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6474__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6474__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__6475){
var map__6476 = p__6475;
var map__6476__$1 = cljs.core.__destructure_map(map__6476);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6476__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e6477){var _ = e6477;
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
var G__6479 = ctx;
var G__6480 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__6479,G__6480) : nex.interpreter.get_all_fields.call(null,G__6479,G__6480));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6478_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6478_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6478_SHARP_))));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6481_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6481_SHARP_),constructor_name);
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
return cljs.core.some((function (p__6482){
var map__6483 = p__6482;
var map__6483__$1 = cljs.core.__destructure_map(map__6483);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6483__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__6491){
var map__6492 = p__6491;
var map__6492__$1 = cljs.core.__destructure_map(map__6492);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6492__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6492__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6492__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6492__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__6493 = class_name;
switch (G__6493) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6484_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6484_SHARP_);
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
case "Set":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6485_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6485_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6486_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6486_SHARP_);
}),args);
var G__6494 = constructor$;
switch (G__6494) {
case "with_title":
var G__6495 = cljs.core.count(arg_values);
switch (G__6495) {
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
var G__6496 = cljs.core.count(arg_values);
switch (G__6496) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6487_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6487_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6488_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6488_SHARP_);
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
var ___$1 = (function (){var seq__6497 = cljs.core.seq(initial_field_map);
var chunk__6498 = null;
var count__6499 = (0);
var i__6500 = (0);
while(true){
if((i__6500 < count__6499)){
var vec__6507 = chunk__6498.cljs$core$IIndexed$_nth$arity$2(null,i__6500);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6507,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__7762 = seq__6497;
var G__7763 = chunk__6498;
var G__7764 = count__6499;
var G__7765 = (i__6500 + (1));
seq__6497 = G__7762;
chunk__6498 = G__7763;
count__6499 = G__7764;
i__6500 = G__7765;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6497);
if(temp__5823__auto__){
var seq__6497__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6497__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6497__$1);
var G__7766 = cljs.core.chunk_rest(seq__6497__$1);
var G__7767 = c__5673__auto__;
var G__7768 = cljs.core.count(c__5673__auto__);
var G__7769 = (0);
seq__6497 = G__7766;
chunk__6498 = G__7767;
count__6499 = G__7768;
i__6500 = G__7769;
continue;
} else {
var vec__6510 = cljs.core.first(seq__6497__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6510,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__7770 = cljs.core.next(seq__6497__$1);
var G__7771 = null;
var G__7772 = (0);
var G__7773 = (0);
seq__6497 = G__7770;
chunk__6498 = G__7771;
count__6499 = G__7772;
i__6500 = G__7773;
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6489_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6489_SHARP_);
}),args);
var ___$3 = (cljs.core.truth_(params)?(function (){var seq__6513 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6514 = null;
var count__6515 = (0);
var i__6516 = (0);
while(true){
if((i__6516 < count__6515)){
var vec__6523 = chunk__6514.cljs$core$IIndexed$_nth$arity$2(null,i__6516);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6523,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7774 = seq__6513;
var G__7775 = chunk__6514;
var G__7776 = count__6515;
var G__7777 = (i__6516 + (1));
seq__6513 = G__7774;
chunk__6514 = G__7775;
count__6515 = G__7776;
i__6516 = G__7777;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6513);
if(temp__5823__auto__){
var seq__6513__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6513__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6513__$1);
var G__7778 = cljs.core.chunk_rest(seq__6513__$1);
var G__7779 = c__5673__auto__;
var G__7780 = cljs.core.count(c__5673__auto__);
var G__7781 = (0);
seq__6513 = G__7778;
chunk__6514 = G__7779;
count__6515 = G__7780;
i__6516 = G__7781;
continue;
} else {
var vec__6526 = cljs.core.first(seq__6513__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6526,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__7782 = cljs.core.next(seq__6513__$1);
var G__7783 = null;
var G__7784 = (0);
var G__7785 = (0);
seq__6513 = G__7782;
chunk__6514 = G__7783;
count__6515 = G__7784;
i__6516 = G__7785;
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
var seq__6529 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__6530 = null;
var count__6531 = (0);
var i__6532 = (0);
while(true){
if((i__6532 < count__6531)){
var stmt = chunk__6530.cljs$core$IIndexed$_nth$arity$2(null,i__6532);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7786 = seq__6529;
var G__7787 = chunk__6530;
var G__7788 = count__6531;
var G__7789 = (i__6532 + (1));
seq__6529 = G__7786;
chunk__6530 = G__7787;
count__6531 = G__7788;
i__6532 = G__7789;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6529);
if(temp__5823__auto__){
var seq__6529__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6529__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6529__$1);
var G__7790 = cljs.core.chunk_rest(seq__6529__$1);
var G__7791 = c__5673__auto__;
var G__7792 = cljs.core.count(c__5673__auto__);
var G__7793 = (0);
seq__6529 = G__7790;
chunk__6530 = G__7791;
count__6531 = G__7792;
i__6532 = G__7793;
continue;
} else {
var stmt = cljs.core.first(seq__6529__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__7794 = cljs.core.next(seq__6529__$1);
var G__7795 = null;
var G__7796 = (0);
var G__7797 = (0);
seq__6529 = G__7794;
chunk__6530 = G__7795;
count__6531 = G__7796;
i__6532 = G__7797;
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
}catch (e6533){var ___$6 = e6533;
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
var inv_env_7798 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __7799__$1 = (function (){var seq__6534 = cljs.core.seq(final_field_map);
var chunk__6535 = null;
var count__6536 = (0);
var i__6537 = (0);
while(true){
if((i__6537 < count__6536)){
var vec__6544 = chunk__6535.cljs$core$IIndexed$_nth$arity$2(null,i__6537);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(1),null);
nex.interpreter.env_define(inv_env_7798,cljs.core.name(field_name),field_val);


var G__7801 = seq__6534;
var G__7802 = chunk__6535;
var G__7803 = count__6536;
var G__7804 = (i__6537 + (1));
seq__6534 = G__7801;
chunk__6535 = G__7802;
count__6536 = G__7803;
i__6537 = G__7804;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6534);
if(temp__5823__auto__){
var seq__6534__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6534__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6534__$1);
var G__7805 = cljs.core.chunk_rest(seq__6534__$1);
var G__7806 = c__5673__auto__;
var G__7807 = cljs.core.count(c__5673__auto__);
var G__7808 = (0);
seq__6534 = G__7805;
chunk__6535 = G__7806;
count__6536 = G__7807;
i__6537 = G__7808;
continue;
} else {
var vec__6547 = cljs.core.first(seq__6534__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6547,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6547,(1),null);
nex.interpreter.env_define(inv_env_7798,cljs.core.name(field_name),field_val);


var G__7809 = cljs.core.next(seq__6534__$1);
var G__7810 = null;
var G__7811 = (0);
var G__7812 = (0);
seq__6534 = G__7809;
chunk__6535 = G__7810;
count__6536 = G__7811;
i__6537 = G__7812;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_7800 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_7798);
nex.interpreter.check_class_invariant(inv_ctx_7800,class_def);

return obj;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name], null));
}

}
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__6550){
var map__6551 = p__6550;
var map__6551__$1 = cljs.core.__destructure_map(map__6551);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__6552 = cljs.core.seq(old_values);
var chunk__6553 = null;
var count__6554 = (0);
var i__6555 = (0);
while(true){
if((i__6555 < count__6554)){
var vec__6562 = chunk__6553.cljs$core$IIndexed$_nth$arity$2(null,i__6555);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6562,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6562,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__7813 = seq__6552;
var G__7814 = chunk__6553;
var G__7815 = count__6554;
var G__7816 = (i__6555 + (1));
seq__6552 = G__7813;
chunk__6553 = G__7814;
count__6554 = G__7815;
i__6555 = G__7816;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6552);
if(temp__5823__auto__){
var seq__6552__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6552__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6552__$1);
var G__7817 = cljs.core.chunk_rest(seq__6552__$1);
var G__7818 = c__5673__auto__;
var G__7819 = cljs.core.count(c__5673__auto__);
var G__7820 = (0);
seq__6552 = G__7817;
chunk__6553 = G__7818;
count__6554 = G__7819;
i__6555 = G__7820;
continue;
} else {
var vec__6565 = cljs.core.first(seq__6552__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6565,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6565,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__7821 = cljs.core.next(seq__6552__$1);
var G__7822 = null;
var G__7823 = (0);
var G__7824 = (0);
seq__6552 = G__7821;
chunk__6553 = G__7822;
count__6554 = G__7823;
i__6555 = G__7824;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__6568){
var map__6569 = p__6568;
var map__6569__$1 = cljs.core.__destructure_map(map__6569);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6569__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6569__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
var seq__6570_7825 = cljs.core.seq(output);
var chunk__6571_7826 = null;
var count__6572_7827 = (0);
var i__6573_7828 = (0);
while(true){
if((i__6573_7828 < count__6572_7827)){
var line_7829 = chunk__6571_7826.cljs$core$IIndexed$_nth$arity$2(null,i__6573_7828);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_7829], 0));


var G__7830 = seq__6570_7825;
var G__7831 = chunk__6571_7826;
var G__7832 = count__6572_7827;
var G__7833 = (i__6573_7828 + (1));
seq__6570_7825 = G__7830;
chunk__6571_7826 = G__7831;
count__6572_7827 = G__7832;
i__6573_7828 = G__7833;
continue;
} else {
var temp__5823__auto___7834 = cljs.core.seq(seq__6570_7825);
if(temp__5823__auto___7834){
var seq__6570_7835__$1 = temp__5823__auto___7834;
if(cljs.core.chunked_seq_QMARK_(seq__6570_7835__$1)){
var c__5673__auto___7836 = cljs.core.chunk_first(seq__6570_7835__$1);
var G__7837 = cljs.core.chunk_rest(seq__6570_7835__$1);
var G__7838 = c__5673__auto___7836;
var G__7839 = cljs.core.count(c__5673__auto___7836);
var G__7840 = (0);
seq__6570_7825 = G__7837;
chunk__6571_7826 = G__7838;
count__6572_7827 = G__7839;
i__6573_7828 = G__7840;
continue;
} else {
var line_7841 = cljs.core.first(seq__6570_7835__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_7841], 0));


var G__7842 = cljs.core.next(seq__6570_7835__$1);
var G__7843 = null;
var G__7844 = (0);
var G__7845 = (0);
seq__6570_7825 = G__7842;
chunk__6571_7826 = G__7843;
count__6572_7827 = G__7844;
i__6573_7828 = G__7845;
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
