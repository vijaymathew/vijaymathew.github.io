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

(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6108,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6112 = k6108;
var G__6112__$1 = (((G__6112 instanceof cljs.core.Keyword))?G__6112.fqn:null);
switch (G__6112__$1) {
case "bindings":
return self__.bindings;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6108,else__5451__auto__);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6114){
var vec__6115 = p__6114;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6115,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6115,(1),null);
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

(nex.interpreter.Environment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6107){
var self__ = this;
var G__6107__$1 = this;
return (new cljs.core.RecordIter((0),G__6107__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Environment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6109,other6110){
var self__ = this;
var this6109__$1 = this;
return (((!((other6110 == null)))) && ((((this6109__$1.constructor === other6110.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6109__$1.bindings,other6110.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6109__$1.parent,other6110.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6109__$1.__extmap,other6110.__extmap)))))))));
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

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6108){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6122 = k6108;
var G__6122__$1 = (((G__6122 instanceof cljs.core.Keyword))?G__6122.fqn:null);
switch (G__6122__$1) {
case "bindings":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6108);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6107){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6123 = cljs.core.keyword_identical_QMARK_;
var expr__6124 = k__5457__auto__;
if(cljs.core.truth_((pred__6123.cljs$core$IFn$_invoke$arity$2 ? pred__6123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6124) : pred__6123.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6124)))){
return (new nex.interpreter.Environment(G__6107,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6123.cljs$core$IFn$_invoke$arity$2 ? pred__6123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6124) : pred__6123.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6124)))){
return (new nex.interpreter.Environment(self__.bindings,G__6107,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6107),null));
}
}
}));

(nex.interpreter.Environment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6107){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,G__6107,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Environment = (function nex$interpreter$map__GT_Environment(G__6111){
var extmap__5490__auto__ = (function (){var G__6129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6111,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__6111)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6129);
} else {
return G__6129;
}
})();
return (new nex.interpreter.Environment(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__6111),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__6111),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new environment, optionally with a parent scope.
 */
nex.interpreter.make_env = (function nex$interpreter$make_env(var_args){
var G__6131 = arguments.length;
switch (G__6131) {
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

(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6138,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6142 = k6138;
var G__6142__$1 = (((G__6142 instanceof cljs.core.Keyword))?G__6142.fqn:null);
switch (G__6142__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6138,else__5451__auto__);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6143){
var vec__6144 = p__6143;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6144,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6144,(1),null);
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

(nex.interpreter.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6137){
var self__ = this;
var G__6137__$1 = this;
return (new cljs.core.RecordIter((0),G__6137__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6139,other6140){
var self__ = this;
var this6139__$1 = this;
return (((!((other6140 == null)))) && ((((this6139__$1.constructor === other6140.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.classes,other6140.classes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.globals,other6140.globals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.current_env,other6140.current_env)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.output,other6140.output)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.imports,other6140.imports)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.specialized_classes,other6140.specialized_classes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6139__$1.__extmap,other6140.__extmap)))))))))))))))));
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

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6138){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6149 = k6138;
var G__6149__$1 = (((G__6149 instanceof cljs.core.Keyword))?G__6149.fqn:null);
switch (G__6149__$1) {
case "classes":
case "globals":
case "current-env":
case "output":
case "imports":
case "specialized-classes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6138);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6137){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6150 = cljs.core.keyword_identical_QMARK_;
var expr__6151 = k__5457__auto__;
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6151)))){
return (new nex.interpreter.Context(G__6137,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6151)))){
return (new nex.interpreter.Context(self__.classes,G__6137,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6151)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,G__6137,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__6151)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,G__6137,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6151)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,G__6137,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6150.cljs$core$IFn$_invoke$arity$2 ? pred__6150.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6151) : pred__6150.call(null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6151)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,G__6137,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6137),null));
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

(nex.interpreter.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6137){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,G__6137,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Context = (function nex$interpreter$map__GT_Context(G__6141){
var extmap__5490__auto__ = (function (){var G__6153 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6141,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], 0));
if(cljs.core.record_QMARK_(G__6141)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6153);
} else {
return G__6153;
}
})();
return (new nex.interpreter.Context(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(G__6141),new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(G__6141),new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(G__6141),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__6141),new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(G__6141),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(G__6141),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__6167_7203 = ctx;
var G__6168_7204 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6167_7203,G__6168_7204) : nex.interpreter.register_class.call(null,G__6167_7203,G__6168_7204));

var G__6169_7205 = ctx;
var G__6170_7206 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6169_7205,G__6170_7206) : nex.interpreter.register_class.call(null,G__6169_7205,G__6170_7206));

var G__6174_7207 = ctx;
var G__6175_7208 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6174_7207,G__6175_7208) : nex.interpreter.register_class.call(null,G__6174_7207,G__6175_7208));

var G__6176_7209 = ctx;
var G__6177_7210 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6176_7209,G__6177_7210) : nex.interpreter.register_class.call(null,G__6176_7209,G__6177_7210));

var seq__6178_7211 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6179_7212 = null;
var count__6180_7213 = (0);
var i__6181_7214 = (0);
while(true){
if((i__6181_7214 < count__6180_7213)){
var scalar_7216 = chunk__6179_7212.cljs$core$IIndexed$_nth$arity$2(null,i__6181_7214);
var G__6190_7217 = ctx;
var G__6191_7218 = nex.interpreter.build_builtin_scalar_class(scalar_7216);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6190_7217,G__6191_7218) : nex.interpreter.register_class.call(null,G__6190_7217,G__6191_7218));


var G__7219 = seq__6178_7211;
var G__7220 = chunk__6179_7212;
var G__7221 = count__6180_7213;
var G__7222 = (i__6181_7214 + (1));
seq__6178_7211 = G__7219;
chunk__6179_7212 = G__7220;
count__6180_7213 = G__7221;
i__6181_7214 = G__7222;
continue;
} else {
var temp__5823__auto___7223 = cljs.core.seq(seq__6178_7211);
if(temp__5823__auto___7223){
var seq__6178_7224__$1 = temp__5823__auto___7223;
if(cljs.core.chunked_seq_QMARK_(seq__6178_7224__$1)){
var c__5673__auto___7225 = cljs.core.chunk_first(seq__6178_7224__$1);
var G__7226 = cljs.core.chunk_rest(seq__6178_7224__$1);
var G__7227 = c__5673__auto___7225;
var G__7228 = cljs.core.count(c__5673__auto___7225);
var G__7229 = (0);
seq__6178_7211 = G__7226;
chunk__6179_7212 = G__7227;
count__6180_7213 = G__7228;
i__6181_7214 = G__7229;
continue;
} else {
var scalar_7231 = cljs.core.first(seq__6178_7224__$1);
var G__6192_7232 = ctx;
var G__6193_7233 = nex.interpreter.build_builtin_scalar_class(scalar_7231);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6192_7232,G__6193_7233) : nex.interpreter.register_class.call(null,G__6192_7232,G__6193_7233));


var G__7234 = cljs.core.next(seq__6178_7224__$1);
var G__7235 = null;
var G__7236 = (0);
var G__7237 = (0);
seq__6178_7211 = G__7234;
chunk__6179_7212 = G__7235;
count__6180_7213 = G__7236;
i__6181_7214 = G__7237;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type_expr,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6197_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6197_SHARP_,p1__6197_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (args){
if(cljs.core.truth_(args)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6198_SHARP_){
return (nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2(p1__6198_SHARP_,type_map) : nex.interpreter.substitute_type.call(null,p1__6198_SHARP_,type_map));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"field-type","field-type",2075623493),(function (p1__6200_SHARP_){
return nex.interpreter.substitute_type(p1__6200_SHARP_,type_map);
}));

break;
case "method":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6201_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6201_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6203_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6203_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(generic_class_def,new cljs.core.Keyword(null,"name","name",1843675177),spec_name),new cljs.core.Keyword(null,"template-name","template-name",271241761),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def)),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null),new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__6210_SHARP_){
return nex.interpreter.substitute_in_body(p1__6210_SHARP_,type_map);
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

(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6214,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6219 = k6214;
var G__6219__$1 = (((G__6219 instanceof cljs.core.Keyword))?G__6219.fqn:null);
switch (G__6219__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6214,else__5451__auto__);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6220){
var vec__6221 = p__6220;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6221,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6221,(1),null);
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

(nex.interpreter.NexObject.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6213){
var self__ = this;
var G__6213__$1 = this;
return (new cljs.core.RecordIter((0),G__6213__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.NexObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6215,other6216){
var self__ = this;
var this6215__$1 = this;
return (((!((other6216 == null)))) && ((((this6215__$1.constructor === other6216.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6215__$1.class_name,other6216.class_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6215__$1.fields,other6216.fields)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6215__$1.closure_env,other6216.closure_env)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6215__$1.__extmap,other6216.__extmap)))))))))));
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

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6214){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6230 = k6214;
var G__6230__$1 = (((G__6230 instanceof cljs.core.Keyword))?G__6230.fqn:null);
switch (G__6230__$1) {
case "class-name":
case "fields":
case "closure-env":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6214);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6213){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6231 = cljs.core.keyword_identical_QMARK_;
var expr__6232 = k__5457__auto__;
if(cljs.core.truth_((pred__6231.cljs$core$IFn$_invoke$arity$2 ? pred__6231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6232) : pred__6231.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6232)))){
return (new nex.interpreter.NexObject(G__6213,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6231.cljs$core$IFn$_invoke$arity$2 ? pred__6231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6232) : pred__6231.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6232)))){
return (new nex.interpreter.NexObject(self__.class_name,G__6213,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6231.cljs$core$IFn$_invoke$arity$2 ? pred__6231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6232) : pred__6231.call(null,new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6232)))){
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,G__6213,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6213),null));
}
}
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env,null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6213){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,G__6213,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_NexObject = (function nex$interpreter$map__GT_NexObject(G__6218){
var extmap__5490__auto__ = (function (){var G__6234 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6218,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], 0));
if(cljs.core.record_QMARK_(G__6218)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6234);
} else {
return G__6234;
}
})();
return (new nex.interpreter.NexObject(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(G__6218),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__6218),new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(G__6218),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new object instance.
 */
nex.interpreter.make_object = (function nex$interpreter$make_object(var_args){
var G__6236 = arguments.length;
switch (G__6236) {
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
var seq__6243 = cljs.core.seq(assertions);
var chunk__6244 = null;
var count__6245 = (0);
var i__6246 = (0);
while(true){
if((i__6246 < count__6245)){
var map__6255 = chunk__6244.cljs$core$IIndexed$_nth$arity$2(null,i__6246);
var map__6255__$1 = cljs.core.__destructure_map(map__6255);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7264 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7264)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7265 = seq__6243;
var G__7266 = chunk__6244;
var G__7267 = count__6245;
var G__7268 = (i__6246 + (1));
seq__6243 = G__7265;
chunk__6244 = G__7266;
count__6245 = G__7267;
i__6246 = G__7268;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6243);
if(temp__5823__auto__){
var seq__6243__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6243__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6243__$1);
var G__7270 = cljs.core.chunk_rest(seq__6243__$1);
var G__7271 = c__5673__auto__;
var G__7272 = cljs.core.count(c__5673__auto__);
var G__7273 = (0);
seq__6243 = G__7270;
chunk__6244 = G__7271;
count__6245 = G__7272;
i__6246 = G__7273;
continue;
} else {
var map__6259 = cljs.core.first(seq__6243__$1);
var map__6259__$1 = cljs.core.__destructure_map(map__6259);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6259__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6259__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7274 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7274)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7275 = cljs.core.next(seq__6243__$1);
var G__7276 = null;
var G__7277 = (0);
var G__7278 = (0);
seq__6243 = G__7275;
chunk__6244 = G__7276;
count__6245 = G__7277;
i__6246 = G__7278;
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
var vec__6282 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6285,p__6286){
var vec__6287 = p__6285;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6287,(1),null);
var map__6290 = p__6286;
var map__6290__$1 = cljs.core.__destructure_map(map__6290);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6290__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6291 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6291,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6291,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6282,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6282,(1),null);
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
var vec__6297 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6297,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6297,(1),null);
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
 * Look up a method in a specific class (without searching parents).
 */
nex.interpreter.lookup_method_in_class = (function nex$interpreter$lookup_method_in_class(class_def,method_name){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6304_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6304_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6303_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6303_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
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
var G__6315 = ctx;
var G__6316 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6317 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6315,G__6316,G__6317) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6315,G__6316,G__6317));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6318 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6319 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6318,G__6319) : nex.interpreter.combine_preconditions.call(null,G__6318,G__6319));
})();
var effective_ensure = (function (){var G__6320 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6321 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6320,G__6321) : nex.interpreter.combine_assertions.call(null,G__6320,G__6321));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6325 = ctx;
var G__6326 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6327 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6325,G__6326,G__6327) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6325,G__6326,G__6327));
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
var or__5142__auto__ = cljs.core.some((function (p1__6331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6331_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6332_SHARP_){
var G__6336 = ctx;
var G__6337 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6332_SHARP_);
var G__6338 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6336,G__6337,G__6338) : nex.interpreter.is_parent_QMARK_.call(null,G__6336,G__6337,G__6338));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6347){
var map__6348 = p__6347;
var map__6348__$1 = cljs.core.__destructure_map(map__6348);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6348__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
});
nex.interpreter.builtins = new cljs.core.PersistentArrayMap(null, 2, ["print",(function() { 
var G__7285__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7285 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7286__i = 0, G__7286__a = new Array(arguments.length -  1);
while (G__7286__i < G__7286__a.length) {G__7286__a[G__7286__i] = arguments[G__7286__i + 1]; ++G__7286__i;}
  args = new cljs.core.IndexedSeq(G__7286__a,0,null);
} 
return G__7285__delegate.call(this,ctx,args);};
G__7285.cljs$lang$maxFixedArity = 1;
G__7285.cljs$lang$applyTo = (function (arglist__7287){
var ctx = cljs.core.first(arglist__7287);
var args = cljs.core.rest(arglist__7287);
return G__7285__delegate(ctx,args);
});
G__7285.cljs$core$IFn$_invoke$arity$variadic = G__7285__delegate;
return G__7285;
})()
,"println",(function() { 
var G__7288__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7288 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7289__i = 0, G__7289__a = new Array(arguments.length -  1);
while (G__7289__i < G__7289__a.length) {G__7289__a[G__7289__i] = arguments[G__7289__i + 1]; ++G__7289__i;}
  args = new cljs.core.IndexedSeq(G__7289__a,0,null);
} 
return G__7288__delegate.call(this,ctx,args);};
G__7288.cljs$lang$maxFixedArity = 1;
G__7288.cljs$lang$applyTo = (function (arglist__7290){
var ctx = cljs.core.first(arglist__7290);
var args = cljs.core.rest(arglist__7290);
return G__7288__delegate(ctx,args);
});
G__7288.cljs$core$IFn$_invoke$arity$variadic = G__7288__delegate;
return G__7288;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6355 = op;
switch (G__6355) {
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
var G__6366 = op;
switch (G__6366) {
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
var G__6370 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6370) {
case "Array":
return nex.interpreter.nex_array();

break;
case "Map":
return nex.interpreter.nex_map();

break;
default:
return null;

}
} else {
if(typeof field_type === 'string'){
var G__6371 = field_type;
switch (G__6371) {
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
}catch (e6406){var _ = e6406;
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Array","Array",-2064027806),new cljs.core.Keyword(null,"Integer64","Integer64",-1582960571),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"Map","Map",-197728088),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"Boolean","Boolean",20610060),new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"Integer","Integer",-641373298),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"Console","Console",-423236809),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"Process","Process",-799294660),new cljs.core.Keyword(null,"Char","Char",2025763229),new cljs.core.Keyword(null,"Real","Real",-1266238786),new cljs.core.Keyword(null,"String","String",584378334)],[cljs.core.PersistentHashMap.fromArrays(["put","is_empty","reverse","contains","add_at","sort","cursor","remove","length","slice","add","index_of","get"],[(function() { 
var G__7301__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__7301 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7302__i = 0, G__7302__a = new Array(arguments.length -  3);
while (G__7302__i < G__7302__a.length) {G__7302__a[G__7302__i] = arguments[G__7302__i + 3]; ++G__7302__i;}
  _ = new cljs.core.IndexedSeq(G__7302__a,0,null);
} 
return G__7301__delegate.call(this,arr,index,value,_);};
G__7301.cljs$lang$maxFixedArity = 3;
G__7301.cljs$lang$applyTo = (function (arglist__7303){
var arr = cljs.core.first(arglist__7303);
arglist__7303 = cljs.core.next(arglist__7303);
var index = cljs.core.first(arglist__7303);
arglist__7303 = cljs.core.next(arglist__7303);
var value = cljs.core.first(arglist__7303);
var _ = cljs.core.rest(arglist__7303);
return G__7301__delegate(arr,index,value,_);
});
G__7301.cljs$core$IFn$_invoke$arity$variadic = G__7301__delegate;
return G__7301;
})()
,(function() { 
var G__7304__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__7304 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7305__i = 0, G__7305__a = new Array(arguments.length -  1);
while (G__7305__i < G__7305__a.length) {G__7305__a[G__7305__i] = arguments[G__7305__i + 1]; ++G__7305__i;}
  _ = new cljs.core.IndexedSeq(G__7305__a,0,null);
} 
return G__7304__delegate.call(this,arr,_);};
G__7304.cljs$lang$maxFixedArity = 1;
G__7304.cljs$lang$applyTo = (function (arglist__7306){
var arr = cljs.core.first(arglist__7306);
var _ = cljs.core.rest(arglist__7306);
return G__7304__delegate(arr,_);
});
G__7304.cljs$core$IFn$_invoke$arity$variadic = G__7304__delegate;
return G__7304;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__7307__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__7307 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7308__i = 0, G__7308__a = new Array(arguments.length -  2);
while (G__7308__i < G__7308__a.length) {G__7308__a[G__7308__i] = arguments[G__7308__i + 2]; ++G__7308__i;}
  _ = new cljs.core.IndexedSeq(G__7308__a,0,null);
} 
return G__7307__delegate.call(this,arr,elem,_);};
G__7307.cljs$lang$maxFixedArity = 2;
G__7307.cljs$lang$applyTo = (function (arglist__7309){
var arr = cljs.core.first(arglist__7309);
arglist__7309 = cljs.core.next(arglist__7309);
var elem = cljs.core.first(arglist__7309);
var _ = cljs.core.rest(arglist__7309);
return G__7307__delegate(arr,elem,_);
});
G__7307.cljs$core$IFn$_invoke$arity$variadic = G__7307__delegate;
return G__7307;
})()
,(function() { 
var G__7310__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__7310 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7311__i = 0, G__7311__a = new Array(arguments.length -  3);
while (G__7311__i < G__7311__a.length) {G__7311__a[G__7311__i] = arguments[G__7311__i + 3]; ++G__7311__i;}
  _ = new cljs.core.IndexedSeq(G__7311__a,0,null);
} 
return G__7310__delegate.call(this,arr,index,value,_);};
G__7310.cljs$lang$maxFixedArity = 3;
G__7310.cljs$lang$applyTo = (function (arglist__7312){
var arr = cljs.core.first(arglist__7312);
arglist__7312 = cljs.core.next(arglist__7312);
var index = cljs.core.first(arglist__7312);
arglist__7312 = cljs.core.next(arglist__7312);
var value = cljs.core.first(arglist__7312);
var _ = cljs.core.rest(arglist__7312);
return G__7310__delegate(arr,index,value,_);
});
G__7310.cljs$core$IFn$_invoke$arity$variadic = G__7310__delegate;
return G__7310;
})()
,(function() { 
var G__7313__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__7313 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7314__i = 0, G__7314__a = new Array(arguments.length -  1);
while (G__7314__i < G__7314__a.length) {G__7314__a[G__7314__i] = arguments[G__7314__i + 1]; ++G__7314__i;}
  _ = new cljs.core.IndexedSeq(G__7314__a,0,null);
} 
return G__7313__delegate.call(this,arr,_);};
G__7313.cljs$lang$maxFixedArity = 1;
G__7313.cljs$lang$applyTo = (function (arglist__7315){
var arr = cljs.core.first(arglist__7315);
var _ = cljs.core.rest(arglist__7315);
return G__7313__delegate(arr,_);
});
G__7313.cljs$core$IFn$_invoke$arity$variadic = G__7313__delegate;
return G__7313;
})()
,(function() { 
var G__7316__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7316 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7317__i = 0, G__7317__a = new Array(arguments.length -  1);
while (G__7317__i < G__7317__a.length) {G__7317__a[G__7317__i] = arguments[G__7317__i + 1]; ++G__7317__i;}
  _ = new cljs.core.IndexedSeq(G__7317__a,0,null);
} 
return G__7316__delegate.call(this,arr,_);};
G__7316.cljs$lang$maxFixedArity = 1;
G__7316.cljs$lang$applyTo = (function (arglist__7318){
var arr = cljs.core.first(arglist__7318);
var _ = cljs.core.rest(arglist__7318);
return G__7316__delegate(arr,_);
});
G__7316.cljs$core$IFn$_invoke$arity$variadic = G__7316__delegate;
return G__7316;
})()
,(function() { 
var G__7319__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__7319 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7320__i = 0, G__7320__a = new Array(arguments.length -  2);
while (G__7320__i < G__7320__a.length) {G__7320__a[G__7320__i] = arguments[G__7320__i + 2]; ++G__7320__i;}
  _ = new cljs.core.IndexedSeq(G__7320__a,0,null);
} 
return G__7319__delegate.call(this,arr,idx,_);};
G__7319.cljs$lang$maxFixedArity = 2;
G__7319.cljs$lang$applyTo = (function (arglist__7321){
var arr = cljs.core.first(arglist__7321);
arglist__7321 = cljs.core.next(arglist__7321);
var idx = cljs.core.first(arglist__7321);
var _ = cljs.core.rest(arglist__7321);
return G__7319__delegate(arr,idx,_);
});
G__7319.cljs$core$IFn$_invoke$arity$variadic = G__7319__delegate;
return G__7319;
})()
,(function() { 
var G__7322__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__7322 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7323__i = 0, G__7323__a = new Array(arguments.length -  1);
while (G__7323__i < G__7323__a.length) {G__7323__a[G__7323__i] = arguments[G__7323__i + 1]; ++G__7323__i;}
  _ = new cljs.core.IndexedSeq(G__7323__a,0,null);
} 
return G__7322__delegate.call(this,arr,_);};
G__7322.cljs$lang$maxFixedArity = 1;
G__7322.cljs$lang$applyTo = (function (arglist__7324){
var arr = cljs.core.first(arglist__7324);
var _ = cljs.core.rest(arglist__7324);
return G__7322__delegate(arr,_);
});
G__7322.cljs$core$IFn$_invoke$arity$variadic = G__7322__delegate;
return G__7322;
})()
,(function() { 
var G__7325__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__7325 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7326__i = 0, G__7326__a = new Array(arguments.length -  3);
while (G__7326__i < G__7326__a.length) {G__7326__a[G__7326__i] = arguments[G__7326__i + 3]; ++G__7326__i;}
  _ = new cljs.core.IndexedSeq(G__7326__a,0,null);
} 
return G__7325__delegate.call(this,arr,start,end,_);};
G__7325.cljs$lang$maxFixedArity = 3;
G__7325.cljs$lang$applyTo = (function (arglist__7327){
var arr = cljs.core.first(arglist__7327);
arglist__7327 = cljs.core.next(arglist__7327);
var start = cljs.core.first(arglist__7327);
arglist__7327 = cljs.core.next(arglist__7327);
var end = cljs.core.first(arglist__7327);
var _ = cljs.core.rest(arglist__7327);
return G__7325__delegate(arr,start,end,_);
});
G__7325.cljs$core$IFn$_invoke$arity$variadic = G__7325__delegate;
return G__7325;
})()
,(function() { 
var G__7328__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__7328 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7329__i = 0, G__7329__a = new Array(arguments.length -  2);
while (G__7329__i < G__7329__a.length) {G__7329__a[G__7329__i] = arguments[G__7329__i + 2]; ++G__7329__i;}
  _ = new cljs.core.IndexedSeq(G__7329__a,0,null);
} 
return G__7328__delegate.call(this,arr,value,_);};
G__7328.cljs$lang$maxFixedArity = 2;
G__7328.cljs$lang$applyTo = (function (arglist__7330){
var arr = cljs.core.first(arglist__7330);
arglist__7330 = cljs.core.next(arglist__7330);
var value = cljs.core.first(arglist__7330);
var _ = cljs.core.rest(arglist__7330);
return G__7328__delegate(arr,value,_);
});
G__7328.cljs$core$IFn$_invoke$arity$variadic = G__7328__delegate;
return G__7328;
})()
,(function() { 
var G__7331__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__7331 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7332__i = 0, G__7332__a = new Array(arguments.length -  2);
while (G__7332__i < G__7332__a.length) {G__7332__a[G__7332__i] = arguments[G__7332__i + 2]; ++G__7332__i;}
  _ = new cljs.core.IndexedSeq(G__7332__a,0,null);
} 
return G__7331__delegate.call(this,arr,elem,_);};
G__7331.cljs$lang$maxFixedArity = 2;
G__7331.cljs$lang$applyTo = (function (arglist__7333){
var arr = cljs.core.first(arglist__7333);
arglist__7333 = cljs.core.next(arglist__7333);
var elem = cljs.core.first(arglist__7333);
var _ = cljs.core.rest(arglist__7333);
return G__7331__delegate(arr,elem,_);
});
G__7331.cljs$core$IFn$_invoke$arity$variadic = G__7331__delegate;
return G__7331;
})()
,(function() { 
var G__7335__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__7335 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7337__i = 0, G__7337__a = new Array(arguments.length -  2);
while (G__7337__i < G__7337__a.length) {G__7337__a[G__7337__i] = arguments[G__7337__i + 2]; ++G__7337__i;}
  _ = new cljs.core.IndexedSeq(G__7337__a,0,null);
} 
return G__7335__delegate.call(this,arr,index,_);};
G__7335.cljs$lang$maxFixedArity = 2;
G__7335.cljs$lang$applyTo = (function (arglist__7338){
var arr = cljs.core.first(arglist__7338);
arglist__7338 = cljs.core.next(arglist__7338);
var index = cljs.core.first(arglist__7338);
var _ = cljs.core.rest(arglist__7338);
return G__7335__delegate(arr,index,_);
});
G__7335.cljs$core$IFn$_invoke$arity$variadic = G__7335__delegate;
return G__7335;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__7339__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7339 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7344__i = 0, G__7344__a = new Array(arguments.length -  2);
while (G__7344__i < G__7344__a.length) {G__7344__a[G__7344__i] = arguments[G__7344__i + 2]; ++G__7344__i;}
  _ = new cljs.core.IndexedSeq(G__7344__a,0,null);
} 
return G__7339__delegate.call(this,n,other,_);};
G__7339.cljs$lang$maxFixedArity = 2;
G__7339.cljs$lang$applyTo = (function (arglist__7345){
var n = cljs.core.first(arglist__7345);
arglist__7345 = cljs.core.next(arglist__7345);
var other = cljs.core.first(arglist__7345);
var _ = cljs.core.rest(arglist__7345);
return G__7339__delegate(n,other,_);
});
G__7339.cljs$core$IFn$_invoke$arity$variadic = G__7339__delegate;
return G__7339;
})()
,(function() { 
var G__7346__delegate = function (n,other,_){
return (n <= other);
};
var G__7346 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7347__i = 0, G__7347__a = new Array(arguments.length -  2);
while (G__7347__i < G__7347__a.length) {G__7347__a[G__7347__i] = arguments[G__7347__i + 2]; ++G__7347__i;}
  _ = new cljs.core.IndexedSeq(G__7347__a,0,null);
} 
return G__7346__delegate.call(this,n,other,_);};
G__7346.cljs$lang$maxFixedArity = 2;
G__7346.cljs$lang$applyTo = (function (arglist__7352){
var n = cljs.core.first(arglist__7352);
arglist__7352 = cljs.core.next(arglist__7352);
var other = cljs.core.first(arglist__7352);
var _ = cljs.core.rest(arglist__7352);
return G__7346__delegate(n,other,_);
});
G__7346.cljs$core$IFn$_invoke$arity$variadic = G__7346__delegate;
return G__7346;
})()
,(function() { 
var G__7353__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7353 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7354__i = 0, G__7354__a = new Array(arguments.length -  2);
while (G__7354__i < G__7354__a.length) {G__7354__a[G__7354__i] = arguments[G__7354__i + 2]; ++G__7354__i;}
  _ = new cljs.core.IndexedSeq(G__7354__a,0,null);
} 
return G__7353__delegate.call(this,n,other,_);};
G__7353.cljs$lang$maxFixedArity = 2;
G__7353.cljs$lang$applyTo = (function (arglist__7356){
var n = cljs.core.first(arglist__7356);
arglist__7356 = cljs.core.next(arglist__7356);
var other = cljs.core.first(arglist__7356);
var _ = cljs.core.rest(arglist__7356);
return G__7353__delegate(n,other,_);
});
G__7353.cljs$core$IFn$_invoke$arity$variadic = G__7353__delegate;
return G__7353;
})()
,(function() { 
var G__7358__delegate = function (n,other,_){
return (n < other);
};
var G__7358 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7359__i = 0, G__7359__a = new Array(arguments.length -  2);
while (G__7359__i < G__7359__a.length) {G__7359__a[G__7359__i] = arguments[G__7359__i + 2]; ++G__7359__i;}
  _ = new cljs.core.IndexedSeq(G__7359__a,0,null);
} 
return G__7358__delegate.call(this,n,other,_);};
G__7358.cljs$lang$maxFixedArity = 2;
G__7358.cljs$lang$applyTo = (function (arglist__7360){
var n = cljs.core.first(arglist__7360);
arglist__7360 = cljs.core.next(arglist__7360);
var other = cljs.core.first(arglist__7360);
var _ = cljs.core.rest(arglist__7360);
return G__7358__delegate(n,other,_);
});
G__7358.cljs$core$IFn$_invoke$arity$variadic = G__7358__delegate;
return G__7358;
})()
,(function() { 
var G__7361__delegate = function (n,other,_){
return (n + other);
};
var G__7361 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7366__i = 0, G__7366__a = new Array(arguments.length -  2);
while (G__7366__i < G__7366__a.length) {G__7366__a[G__7366__i] = arguments[G__7366__i + 2]; ++G__7366__i;}
  _ = new cljs.core.IndexedSeq(G__7366__a,0,null);
} 
return G__7361__delegate.call(this,n,other,_);};
G__7361.cljs$lang$maxFixedArity = 2;
G__7361.cljs$lang$applyTo = (function (arglist__7367){
var n = cljs.core.first(arglist__7367);
arglist__7367 = cljs.core.next(arglist__7367);
var other = cljs.core.first(arglist__7367);
var _ = cljs.core.rest(arglist__7367);
return G__7361__delegate(n,other,_);
});
G__7361.cljs$core$IFn$_invoke$arity$variadic = G__7361__delegate;
return G__7361;
})()
,(function() { 
var G__7368__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7368 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7369__i = 0, G__7369__a = new Array(arguments.length -  1);
while (G__7369__i < G__7369__a.length) {G__7369__a[G__7369__i] = arguments[G__7369__i + 1]; ++G__7369__i;}
  _ = new cljs.core.IndexedSeq(G__7369__a,0,null);
} 
return G__7368__delegate.call(this,n,_);};
G__7368.cljs$lang$maxFixedArity = 1;
G__7368.cljs$lang$applyTo = (function (arglist__7370){
var n = cljs.core.first(arglist__7370);
var _ = cljs.core.rest(arglist__7370);
return G__7368__delegate(n,_);
});
G__7368.cljs$core$IFn$_invoke$arity$variadic = G__7368__delegate;
return G__7368;
})()
,(function() { 
var G__7371__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7371 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7372__i = 0, G__7372__a = new Array(arguments.length -  1);
while (G__7372__i < G__7372__a.length) {G__7372__a[G__7372__i] = arguments[G__7372__i + 1]; ++G__7372__i;}
  _ = new cljs.core.IndexedSeq(G__7372__a,0,null);
} 
return G__7371__delegate.call(this,n,_);};
G__7371.cljs$lang$maxFixedArity = 1;
G__7371.cljs$lang$applyTo = (function (arglist__7373){
var n = cljs.core.first(arglist__7373);
var _ = cljs.core.rest(arglist__7373);
return G__7371__delegate(n,_);
});
G__7371.cljs$core$IFn$_invoke$arity$variadic = G__7371__delegate;
return G__7371;
})()
,(function() { 
var G__7374__delegate = function (n,other,_){
return (n > other);
};
var G__7374 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7375__i = 0, G__7375__a = new Array(arguments.length -  2);
while (G__7375__i < G__7375__a.length) {G__7375__a[G__7375__i] = arguments[G__7375__i + 2]; ++G__7375__i;}
  _ = new cljs.core.IndexedSeq(G__7375__a,0,null);
} 
return G__7374__delegate.call(this,n,other,_);};
G__7374.cljs$lang$maxFixedArity = 2;
G__7374.cljs$lang$applyTo = (function (arglist__7376){
var n = cljs.core.first(arglist__7376);
arglist__7376 = cljs.core.next(arglist__7376);
var other = cljs.core.first(arglist__7376);
var _ = cljs.core.rest(arglist__7376);
return G__7374__delegate(n,other,_);
});
G__7374.cljs$core$IFn$_invoke$arity$variadic = G__7374__delegate;
return G__7374;
})()
,(function() { 
var G__7377__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7377 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7382__i = 0, G__7382__a = new Array(arguments.length -  2);
while (G__7382__i < G__7382__a.length) {G__7382__a[G__7382__i] = arguments[G__7382__i + 2]; ++G__7382__i;}
  _ = new cljs.core.IndexedSeq(G__7382__a,0,null);
} 
return G__7377__delegate.call(this,n,other,_);};
G__7377.cljs$lang$maxFixedArity = 2;
G__7377.cljs$lang$applyTo = (function (arglist__7383){
var n = cljs.core.first(arglist__7383);
arglist__7383 = cljs.core.next(arglist__7383);
var other = cljs.core.first(arglist__7383);
var _ = cljs.core.rest(arglist__7383);
return G__7377__delegate(n,other,_);
});
G__7377.cljs$core$IFn$_invoke$arity$variadic = G__7377__delegate;
return G__7377;
})()
,(function() { 
var G__7384__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7384 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7389__i = 0, G__7389__a = new Array(arguments.length -  2);
while (G__7389__i < G__7389__a.length) {G__7389__a[G__7389__i] = arguments[G__7389__i + 2]; ++G__7389__i;}
  _ = new cljs.core.IndexedSeq(G__7389__a,0,null);
} 
return G__7384__delegate.call(this,n,other,_);};
G__7384.cljs$lang$maxFixedArity = 2;
G__7384.cljs$lang$applyTo = (function (arglist__7391){
var n = cljs.core.first(arglist__7391);
arglist__7391 = cljs.core.next(arglist__7391);
var other = cljs.core.first(arglist__7391);
var _ = cljs.core.rest(arglist__7391);
return G__7384__delegate(n,other,_);
});
G__7384.cljs$core$IFn$_invoke$arity$variadic = G__7384__delegate;
return G__7384;
})()
,(function() { 
var G__7392__delegate = function (n,other,_){
return (n - other);
};
var G__7392 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7397__i = 0, G__7397__a = new Array(arguments.length -  2);
while (G__7397__i < G__7397__a.length) {G__7397__a[G__7397__i] = arguments[G__7397__i + 2]; ++G__7397__i;}
  _ = new cljs.core.IndexedSeq(G__7397__a,0,null);
} 
return G__7392__delegate.call(this,n,other,_);};
G__7392.cljs$lang$maxFixedArity = 2;
G__7392.cljs$lang$applyTo = (function (arglist__7398){
var n = cljs.core.first(arglist__7398);
arglist__7398 = cljs.core.next(arglist__7398);
var other = cljs.core.first(arglist__7398);
var _ = cljs.core.rest(arglist__7398);
return G__7392__delegate(n,other,_);
});
G__7392.cljs$core$IFn$_invoke$arity$variadic = G__7392__delegate;
return G__7392;
})()
,(function() { 
var G__7399__delegate = function (n,other,_){
return (n * other);
};
var G__7399 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7400__i = 0, G__7400__a = new Array(arguments.length -  2);
while (G__7400__i < G__7400__a.length) {G__7400__a[G__7400__i] = arguments[G__7400__i + 2]; ++G__7400__i;}
  _ = new cljs.core.IndexedSeq(G__7400__a,0,null);
} 
return G__7399__delegate.call(this,n,other,_);};
G__7399.cljs$lang$maxFixedArity = 2;
G__7399.cljs$lang$applyTo = (function (arglist__7401){
var n = cljs.core.first(arglist__7401);
arglist__7401 = cljs.core.next(arglist__7401);
var other = cljs.core.first(arglist__7401);
var _ = cljs.core.rest(arglist__7401);
return G__7399__delegate(n,other,_);
});
G__7399.cljs$core$IFn$_invoke$arity$variadic = G__7399__delegate;
return G__7399;
})()
,(function() { 
var G__7402__delegate = function (n,other,_){
return (n / other);
};
var G__7402 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7403__i = 0, G__7403__a = new Array(arguments.length -  2);
while (G__7403__i < G__7403__a.length) {G__7403__a[G__7403__i] = arguments[G__7403__i + 2]; ++G__7403__i;}
  _ = new cljs.core.IndexedSeq(G__7403__a,0,null);
} 
return G__7402__delegate.call(this,n,other,_);};
G__7402.cljs$lang$maxFixedArity = 2;
G__7402.cljs$lang$applyTo = (function (arglist__7404){
var n = cljs.core.first(arglist__7404);
arglist__7404 = cljs.core.next(arglist__7404);
var other = cljs.core.first(arglist__7404);
var _ = cljs.core.rest(arglist__7404);
return G__7402__delegate(n,other,_);
});
G__7402.cljs$core$IFn$_invoke$arity$variadic = G__7402__delegate;
return G__7402;
})()
,(function() { 
var G__7405__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7405 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7406__i = 0, G__7406__a = new Array(arguments.length -  1);
while (G__7406__i < G__7406__a.length) {G__7406__a[G__7406__i] = arguments[G__7406__i + 1]; ++G__7406__i;}
  _ = new cljs.core.IndexedSeq(G__7406__a,0,null);
} 
return G__7405__delegate.call(this,n,_);};
G__7405.cljs$lang$maxFixedArity = 1;
G__7405.cljs$lang$applyTo = (function (arglist__7407){
var n = cljs.core.first(arglist__7407);
var _ = cljs.core.rest(arglist__7407);
return G__7405__delegate(n,_);
});
G__7405.cljs$core$IFn$_invoke$arity$variadic = G__7405__delegate;
return G__7405;
})()
,(function() { 
var G__7408__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7408 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7410__i = 0, G__7410__a = new Array(arguments.length -  2);
while (G__7410__i < G__7410__a.length) {G__7410__a[G__7410__i] = arguments[G__7410__i + 2]; ++G__7410__i;}
  _ = new cljs.core.IndexedSeq(G__7410__a,0,null);
} 
return G__7408__delegate.call(this,n,other,_);};
G__7408.cljs$lang$maxFixedArity = 2;
G__7408.cljs$lang$applyTo = (function (arglist__7411){
var n = cljs.core.first(arglist__7411);
arglist__7411 = cljs.core.next(arglist__7411);
var other = cljs.core.first(arglist__7411);
var _ = cljs.core.rest(arglist__7411);
return G__7408__delegate(n,other,_);
});
G__7408.cljs$core$IFn$_invoke$arity$variadic = G__7408__delegate;
return G__7408;
})()
,(function() { 
var G__7412__delegate = function (n,other,_){
return (n >= other);
};
var G__7412 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7413__i = 0, G__7413__a = new Array(arguments.length -  2);
while (G__7413__i < G__7413__a.length) {G__7413__a[G__7413__i] = arguments[G__7413__i + 2]; ++G__7413__i;}
  _ = new cljs.core.IndexedSeq(G__7413__a,0,null);
} 
return G__7412__delegate.call(this,n,other,_);};
G__7412.cljs$lang$maxFixedArity = 2;
G__7412.cljs$lang$applyTo = (function (arglist__7414){
var n = cljs.core.first(arglist__7414);
arglist__7414 = cljs.core.next(arglist__7414);
var other = cljs.core.first(arglist__7414);
var _ = cljs.core.rest(arglist__7414);
return G__7412__delegate(n,other,_);
});
G__7412.cljs$core$IFn$_invoke$arity$variadic = G__7412__delegate;
return G__7412;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__7415__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
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
,"height",(function() { 
var G__7418__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__7418 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7419__i = 0, G__7419__a = new Array(arguments.length -  1);
while (G__7419__i < G__7419__a.length) {G__7419__a[G__7419__i] = arguments[G__7419__i + 1]; ++G__7419__i;}
  _ = new cljs.core.IndexedSeq(G__7419__a,0,null);
} 
return G__7418__delegate.call(this,img,_);};
G__7418.cljs$lang$maxFixedArity = 1;
G__7418.cljs$lang$applyTo = (function (arglist__7420){
var img = cljs.core.first(arglist__7420);
var _ = cljs.core.rest(arglist__7420);
return G__7418__delegate(img,_);
});
G__7418.cljs$core$IFn$_invoke$arity$variadic = G__7418__delegate;
return G__7418;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7421__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7421 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7422__i = 0, G__7422__a = new Array(arguments.length -  1);
while (G__7422__i < G__7422__a.length) {G__7422__a[G__7422__i] = arguments[G__7422__i + 1]; ++G__7422__i;}
  _ = new cljs.core.IndexedSeq(G__7422__a,0,null);
} 
return G__7421__delegate.call(this,c,_);};
G__7421.cljs$lang$maxFixedArity = 1;
G__7421.cljs$lang$applyTo = (function (arglist__7423){
var c = cljs.core.first(arglist__7423);
var _ = cljs.core.rest(arglist__7423);
return G__7421__delegate(c,_);
});
G__7421.cljs$core$IFn$_invoke$arity$variadic = G__7421__delegate;
return G__7421;
})()
,"item",(function() { 
var G__7424__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7424 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7425__i = 0, G__7425__a = new Array(arguments.length -  1);
while (G__7425__i < G__7425__a.length) {G__7425__a[G__7425__i] = arguments[G__7425__i + 1]; ++G__7425__i;}
  _ = new cljs.core.IndexedSeq(G__7425__a,0,null);
} 
return G__7424__delegate.call(this,c,_);};
G__7424.cljs$lang$maxFixedArity = 1;
G__7424.cljs$lang$applyTo = (function (arglist__7426){
var c = cljs.core.first(arglist__7426);
var _ = cljs.core.rest(arglist__7426);
return G__7424__delegate(c,_);
});
G__7424.cljs$core$IFn$_invoke$arity$variadic = G__7424__delegate;
return G__7424;
})()
,"next",(function() { 
var G__7427__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

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
,"at_end",(function() { 
var G__7430__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
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
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","try_get","cursor","remove","size","get","contains_key"],[(function() { 
var G__7433__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__7433 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7434__i = 0, G__7434__a = new Array(arguments.length -  1);
while (G__7434__i < G__7434__a.length) {G__7434__a[G__7434__i] = arguments[G__7434__i + 1]; ++G__7434__i;}
  _ = new cljs.core.IndexedSeq(G__7434__a,0,null);
} 
return G__7433__delegate.call(this,m,_);};
G__7433.cljs$lang$maxFixedArity = 1;
G__7433.cljs$lang$applyTo = (function (arglist__7435){
var m = cljs.core.first(arglist__7435);
var _ = cljs.core.rest(arglist__7435);
return G__7433__delegate(m,_);
});
G__7433.cljs$core$IFn$_invoke$arity$variadic = G__7433__delegate;
return G__7433;
})()
,(function() { 
var G__7436__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__7436 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7437__i = 0, G__7437__a = new Array(arguments.length -  1);
while (G__7437__i < G__7437__a.length) {G__7437__a[G__7437__i] = arguments[G__7437__i + 1]; ++G__7437__i;}
  _ = new cljs.core.IndexedSeq(G__7437__a,0,null);
} 
return G__7436__delegate.call(this,m,_);};
G__7436.cljs$lang$maxFixedArity = 1;
G__7436.cljs$lang$applyTo = (function (arglist__7438){
var m = cljs.core.first(arglist__7438);
var _ = cljs.core.rest(arglist__7438);
return G__7436__delegate(m,_);
});
G__7436.cljs$core$IFn$_invoke$arity$variadic = G__7436__delegate;
return G__7436;
})()
,(function() { 
var G__7439__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__7439 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7441__i = 0, G__7441__a = new Array(arguments.length -  3);
while (G__7441__i < G__7441__a.length) {G__7441__a[G__7441__i] = arguments[G__7441__i + 3]; ++G__7441__i;}
  _ = new cljs.core.IndexedSeq(G__7441__a,0,null);
} 
return G__7439__delegate.call(this,m,key,val,_);};
G__7439.cljs$lang$maxFixedArity = 3;
G__7439.cljs$lang$applyTo = (function (arglist__7442){
var m = cljs.core.first(arglist__7442);
arglist__7442 = cljs.core.next(arglist__7442);
var key = cljs.core.first(arglist__7442);
arglist__7442 = cljs.core.next(arglist__7442);
var val = cljs.core.first(arglist__7442);
var _ = cljs.core.rest(arglist__7442);
return G__7439__delegate(m,key,val,_);
});
G__7439.cljs$core$IFn$_invoke$arity$variadic = G__7439__delegate;
return G__7439;
})()
,(function() { 
var G__7443__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
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
var G__7446__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__7446 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7448__i = 0, G__7448__a = new Array(arguments.length -  3);
while (G__7448__i < G__7448__a.length) {G__7448__a[G__7448__i] = arguments[G__7448__i + 3]; ++G__7448__i;}
  _ = new cljs.core.IndexedSeq(G__7448__a,0,null);
} 
return G__7446__delegate.call(this,m,key,default$,_);};
G__7446.cljs$lang$maxFixedArity = 3;
G__7446.cljs$lang$applyTo = (function (arglist__7449){
var m = cljs.core.first(arglist__7449);
arglist__7449 = cljs.core.next(arglist__7449);
var key = cljs.core.first(arglist__7449);
arglist__7449 = cljs.core.next(arglist__7449);
var default$ = cljs.core.first(arglist__7449);
var _ = cljs.core.rest(arglist__7449);
return G__7446__delegate(m,key,default$,_);
});
G__7446.cljs$core$IFn$_invoke$arity$variadic = G__7446__delegate;
return G__7446;
})()
,(function() { 
var G__7450__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7450 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7451__i = 0, G__7451__a = new Array(arguments.length -  1);
while (G__7451__i < G__7451__a.length) {G__7451__a[G__7451__i] = arguments[G__7451__i + 1]; ++G__7451__i;}
  _ = new cljs.core.IndexedSeq(G__7451__a,0,null);
} 
return G__7450__delegate.call(this,m,_);};
G__7450.cljs$lang$maxFixedArity = 1;
G__7450.cljs$lang$applyTo = (function (arglist__7452){
var m = cljs.core.first(arglist__7452);
var _ = cljs.core.rest(arglist__7452);
return G__7450__delegate(m,_);
});
G__7450.cljs$core$IFn$_invoke$arity$variadic = G__7450__delegate;
return G__7450;
})()
,(function() { 
var G__7453__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__7453 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7454__i = 0, G__7454__a = new Array(arguments.length -  2);
while (G__7454__i < G__7454__a.length) {G__7454__a[G__7454__i] = arguments[G__7454__i + 2]; ++G__7454__i;}
  _ = new cljs.core.IndexedSeq(G__7454__a,0,null);
} 
return G__7453__delegate.call(this,m,key,_);};
G__7453.cljs$lang$maxFixedArity = 2;
G__7453.cljs$lang$applyTo = (function (arglist__7455){
var m = cljs.core.first(arglist__7455);
arglist__7455 = cljs.core.next(arglist__7455);
var key = cljs.core.first(arglist__7455);
var _ = cljs.core.rest(arglist__7455);
return G__7453__delegate(m,key,_);
});
G__7453.cljs$core$IFn$_invoke$arity$variadic = G__7453__delegate;
return G__7453;
})()
,(function() { 
var G__7456__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__7456 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7457__i = 0, G__7457__a = new Array(arguments.length -  1);
while (G__7457__i < G__7457__a.length) {G__7457__a[G__7457__i] = arguments[G__7457__i + 1]; ++G__7457__i;}
  _ = new cljs.core.IndexedSeq(G__7457__a,0,null);
} 
return G__7456__delegate.call(this,m,_);};
G__7456.cljs$lang$maxFixedArity = 1;
G__7456.cljs$lang$applyTo = (function (arglist__7458){
var m = cljs.core.first(arglist__7458);
var _ = cljs.core.rest(arglist__7458);
return G__7456__delegate(m,_);
});
G__7456.cljs$core$IFn$_invoke$arity$variadic = G__7456__delegate;
return G__7456;
})()
,(function() { 
var G__7459__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__7459 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7460__i = 0, G__7460__a = new Array(arguments.length -  2);
while (G__7460__i < G__7460__a.length) {G__7460__a[G__7460__i] = arguments[G__7460__i + 2]; ++G__7460__i;}
  _ = new cljs.core.IndexedSeq(G__7460__a,0,null);
} 
return G__7459__delegate.call(this,m,key,_);};
G__7459.cljs$lang$maxFixedArity = 2;
G__7459.cljs$lang$applyTo = (function (arglist__7461){
var m = cljs.core.first(arglist__7461);
arglist__7461 = cljs.core.next(arglist__7461);
var key = cljs.core.first(arglist__7461);
var _ = cljs.core.rest(arglist__7461);
return G__7459__delegate(m,key,_);
});
G__7459.cljs$core$IFn$_invoke$arity$variadic = G__7459__delegate;
return G__7459;
})()
,(function() { 
var G__7462__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__7462 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7463__i = 0, G__7463__a = new Array(arguments.length -  2);
while (G__7463__i < G__7463__a.length) {G__7463__a[G__7463__i] = arguments[G__7463__i + 2]; ++G__7463__i;}
  _ = new cljs.core.IndexedSeq(G__7463__a,0,null);
} 
return G__7462__delegate.call(this,m,key,_);};
G__7462.cljs$lang$maxFixedArity = 2;
G__7462.cljs$lang$applyTo = (function (arglist__7464){
var m = cljs.core.first(arglist__7464);
arglist__7464 = cljs.core.next(arglist__7464);
var key = cljs.core.first(arglist__7464);
var _ = cljs.core.rest(arglist__7464);
return G__7462__delegate(m,key,_);
});
G__7462.cljs$core$IFn$_invoke$arity$variadic = G__7462__delegate;
return G__7462;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__7466__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__7466 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7467__i = 0, G__7467__a = new Array(arguments.length -  1);
while (G__7467__i < G__7467__a.length) {G__7467__a[G__7467__i] = arguments[G__7467__i + 1]; ++G__7467__i;}
  _ = new cljs.core.IndexedSeq(G__7467__a,0,null);
} 
return G__7466__delegate.call(this,t,_);};
G__7466.cljs$lang$maxFixedArity = 1;
G__7466.cljs$lang$applyTo = (function (arglist__7468){
var t = cljs.core.first(arglist__7468);
var _ = cljs.core.rest(arglist__7468);
return G__7466__delegate(t,_);
});
G__7466.cljs$core$IFn$_invoke$arity$variadic = G__7466__delegate;
return G__7466;
})()
,(function() { 
var G__7469__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__7469 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7470__i = 0, G__7470__a = new Array(arguments.length -  2);
while (G__7470__i < G__7470__a.length) {G__7470__a[G__7470__i] = arguments[G__7470__i + 2]; ++G__7470__i;}
  _ = new cljs.core.IndexedSeq(G__7470__a,0,null);
} 
return G__7469__delegate.call(this,t,angle,_);};
G__7469.cljs$lang$maxFixedArity = 2;
G__7469.cljs$lang$applyTo = (function (arglist__7471){
var t = cljs.core.first(arglist__7471);
arglist__7471 = cljs.core.next(arglist__7471);
var angle = cljs.core.first(arglist__7471);
var _ = cljs.core.rest(arglist__7471);
return G__7469__delegate(t,angle,_);
});
G__7469.cljs$core$IFn$_invoke$arity$variadic = G__7469__delegate;
return G__7469;
})()
,(function() { 
var G__7472__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__7472 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7473__i = 0, G__7473__a = new Array(arguments.length -  1);
while (G__7473__i < G__7473__a.length) {G__7473__a[G__7473__i] = arguments[G__7473__i + 1]; ++G__7473__i;}
  _ = new cljs.core.IndexedSeq(G__7473__a,0,null);
} 
return G__7472__delegate.call(this,t,_);};
G__7472.cljs$lang$maxFixedArity = 1;
G__7472.cljs$lang$applyTo = (function (arglist__7474){
var t = cljs.core.first(arglist__7474);
var _ = cljs.core.rest(arglist__7474);
return G__7472__delegate(t,_);
});
G__7472.cljs$core$IFn$_invoke$arity$variadic = G__7472__delegate;
return G__7472;
})()
,(function() { 
var G__7475__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__7475 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7476__i = 0, G__7476__a = new Array(arguments.length -  2);
while (G__7476__i < G__7476__a.length) {G__7476__a[G__7476__i] = arguments[G__7476__i + 2]; ++G__7476__i;}
  _ = new cljs.core.IndexedSeq(G__7476__a,0,null);
} 
return G__7475__delegate.call(this,t,s,_);};
G__7475.cljs$lang$maxFixedArity = 2;
G__7475.cljs$lang$applyTo = (function (arglist__7477){
var t = cljs.core.first(arglist__7477);
arglist__7477 = cljs.core.next(arglist__7477);
var s = cljs.core.first(arglist__7477);
var _ = cljs.core.rest(arglist__7477);
return G__7475__delegate(t,s,_);
});
G__7475.cljs$core$IFn$_invoke$arity$variadic = G__7475__delegate;
return G__7475;
})()
,(function() { 
var G__7479__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__7479 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7480__i = 0, G__7480__a = new Array(arguments.length -  2);
while (G__7480__i < G__7480__a.length) {G__7480__a[G__7480__i] = arguments[G__7480__i + 2]; ++G__7480__i;}
  _ = new cljs.core.IndexedSeq(G__7480__a,0,null);
} 
return G__7479__delegate.call(this,t,s,_);};
G__7479.cljs$lang$maxFixedArity = 2;
G__7479.cljs$lang$applyTo = (function (arglist__7481){
var t = cljs.core.first(arglist__7481);
arglist__7481 = cljs.core.next(arglist__7481);
var s = cljs.core.first(arglist__7481);
var _ = cljs.core.rest(arglist__7481);
return G__7479__delegate(t,s,_);
});
G__7479.cljs$core$IFn$_invoke$arity$variadic = G__7479__delegate;
return G__7479;
})()
,(function() { 
var G__7482__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__7482 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7483__i = 0, G__7483__a = new Array(arguments.length -  1);
while (G__7483__i < G__7483__a.length) {G__7483__a[G__7483__i] = arguments[G__7483__i + 1]; ++G__7483__i;}
  _ = new cljs.core.IndexedSeq(G__7483__a,0,null);
} 
return G__7482__delegate.call(this,t,_);};
G__7482.cljs$lang$maxFixedArity = 1;
G__7482.cljs$lang$applyTo = (function (arglist__7484){
var t = cljs.core.first(arglist__7484);
var _ = cljs.core.rest(arglist__7484);
return G__7482__delegate(t,_);
});
G__7482.cljs$core$IFn$_invoke$arity$variadic = G__7482__delegate;
return G__7482;
})()
,(function() { 
var G__7485__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__7485 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7486__i = 0, G__7486__a = new Array(arguments.length -  2);
while (G__7486__i < G__7486__a.length) {G__7486__a[G__7486__i] = arguments[G__7486__i + 2]; ++G__7486__i;}
  _ = new cljs.core.IndexedSeq(G__7486__a,0,null);
} 
return G__7485__delegate.call(this,t,dist,_);};
G__7485.cljs$lang$maxFixedArity = 2;
G__7485.cljs$lang$applyTo = (function (arglist__7487){
var t = cljs.core.first(arglist__7487);
arglist__7487 = cljs.core.next(arglist__7487);
var dist = cljs.core.first(arglist__7487);
var _ = cljs.core.rest(arglist__7487);
return G__7485__delegate(t,dist,_);
});
G__7485.cljs$core$IFn$_invoke$arity$variadic = G__7485__delegate;
return G__7485;
})()
,(function() { 
var G__7488__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__7488 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7489__i = 0, G__7489__a = new Array(arguments.length -  1);
while (G__7489__i < G__7489__a.length) {G__7489__a[G__7489__i] = arguments[G__7489__i + 1]; ++G__7489__i;}
  _ = new cljs.core.IndexedSeq(G__7489__a,0,null);
} 
return G__7488__delegate.call(this,t,_);};
G__7488.cljs$lang$maxFixedArity = 1;
G__7488.cljs$lang$applyTo = (function (arglist__7490){
var t = cljs.core.first(arglist__7490);
var _ = cljs.core.rest(arglist__7490);
return G__7488__delegate(t,_);
});
G__7488.cljs$core$IFn$_invoke$arity$variadic = G__7488__delegate;
return G__7488;
})()
,(function() { 
var G__7491__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__7491 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7492__i = 0, G__7492__a = new Array(arguments.length -  1);
while (G__7492__i < G__7492__a.length) {G__7492__a[G__7492__i] = arguments[G__7492__i + 1]; ++G__7492__i;}
  _ = new cljs.core.IndexedSeq(G__7492__a,0,null);
} 
return G__7491__delegate.call(this,t,_);};
G__7491.cljs$lang$maxFixedArity = 1;
G__7491.cljs$lang$applyTo = (function (arglist__7493){
var t = cljs.core.first(arglist__7493);
var _ = cljs.core.rest(arglist__7493);
return G__7491__delegate(t,_);
});
G__7491.cljs$core$IFn$_invoke$arity$variadic = G__7491__delegate;
return G__7491;
})()
,(function() { 
var G__7494__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
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
var G__7497__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__7497 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7498__i = 0, G__7498__a = new Array(arguments.length -  1);
while (G__7498__i < G__7498__a.length) {G__7498__a[G__7498__i] = arguments[G__7498__i + 1]; ++G__7498__i;}
  _ = new cljs.core.IndexedSeq(G__7498__a,0,null);
} 
return G__7497__delegate.call(this,t,_);};
G__7497.cljs$lang$maxFixedArity = 1;
G__7497.cljs$lang$applyTo = (function (arglist__7499){
var t = cljs.core.first(arglist__7499);
var _ = cljs.core.rest(arglist__7499);
return G__7497__delegate(t,_);
});
G__7497.cljs$core$IFn$_invoke$arity$variadic = G__7497__delegate;
return G__7497;
})()
,(function() { 
var G__7500__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
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
return nex.turtle_browser.turtle_penup(t);
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
var G__7506__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__7506 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7507__i = 0, G__7507__a = new Array(arguments.length -  2);
while (G__7507__i < G__7507__a.length) {G__7507__a[G__7507__i] = arguments[G__7507__i + 2]; ++G__7507__i;}
  _ = new cljs.core.IndexedSeq(G__7507__a,0,null);
} 
return G__7506__delegate.call(this,t,s,_);};
G__7506.cljs$lang$maxFixedArity = 2;
G__7506.cljs$lang$applyTo = (function (arglist__7508){
var t = cljs.core.first(arglist__7508);
arglist__7508 = cljs.core.next(arglist__7508);
var s = cljs.core.first(arglist__7508);
var _ = cljs.core.rest(arglist__7508);
return G__7506__delegate(t,s,_);
});
G__7506.cljs$core$IFn$_invoke$arity$variadic = G__7506__delegate;
return G__7506;
})()
,(function() { 
var G__7509__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__7509 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7510__i = 0, G__7510__a = new Array(arguments.length -  2);
while (G__7510__i < G__7510__a.length) {G__7510__a[G__7510__i] = arguments[G__7510__i + 2]; ++G__7510__i;}
  _ = new cljs.core.IndexedSeq(G__7510__a,0,null);
} 
return G__7509__delegate.call(this,t,r,_);};
G__7509.cljs$lang$maxFixedArity = 2;
G__7509.cljs$lang$applyTo = (function (arglist__7511){
var t = cljs.core.first(arglist__7511);
arglist__7511 = cljs.core.next(arglist__7511);
var r = cljs.core.first(arglist__7511);
var _ = cljs.core.rest(arglist__7511);
return G__7509__delegate(t,r,_);
});
G__7509.cljs$core$IFn$_invoke$arity$variadic = G__7509__delegate;
return G__7509;
})()
,(function() { 
var G__7512__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__7512 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7513__i = 0, G__7513__a = new Array(arguments.length -  2);
while (G__7513__i < G__7513__a.length) {G__7513__a[G__7513__i] = arguments[G__7513__i + 2]; ++G__7513__i;}
  _ = new cljs.core.IndexedSeq(G__7513__a,0,null);
} 
return G__7512__delegate.call(this,t,dist,_);};
G__7512.cljs$lang$maxFixedArity = 2;
G__7512.cljs$lang$applyTo = (function (arglist__7514){
var t = cljs.core.first(arglist__7514);
arglist__7514 = cljs.core.next(arglist__7514);
var dist = cljs.core.first(arglist__7514);
var _ = cljs.core.rest(arglist__7514);
return G__7512__delegate(t,dist,_);
});
G__7512.cljs$core$IFn$_invoke$arity$variadic = G__7512__delegate;
return G__7512;
})()
,(function() { 
var G__7515__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7515 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7516__i = 0, G__7516__a = new Array(arguments.length -  2);
while (G__7516__i < G__7516__a.length) {G__7516__a[G__7516__i] = arguments[G__7516__i + 2]; ++G__7516__i;}
  _ = new cljs.core.IndexedSeq(G__7516__a,0,null);
} 
return G__7515__delegate.call(this,t,c,_);};
G__7515.cljs$lang$maxFixedArity = 2;
G__7515.cljs$lang$applyTo = (function (arglist__7517){
var t = cljs.core.first(arglist__7517);
arglist__7517 = cljs.core.next(arglist__7517);
var c = cljs.core.first(arglist__7517);
var _ = cljs.core.rest(arglist__7517);
return G__7515__delegate(t,c,_);
});
G__7515.cljs$core$IFn$_invoke$arity$variadic = G__7515__delegate;
return G__7515;
})()
,(function() { 
var G__7518__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__7518 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7519__i = 0, G__7519__a = new Array(arguments.length -  3);
while (G__7519__i < G__7519__a.length) {G__7519__a[G__7519__i] = arguments[G__7519__i + 3]; ++G__7519__i;}
  _ = new cljs.core.IndexedSeq(G__7519__a,0,null);
} 
return G__7518__delegate.call(this,t,x,y,_);};
G__7518.cljs$lang$maxFixedArity = 3;
G__7518.cljs$lang$applyTo = (function (arglist__7520){
var t = cljs.core.first(arglist__7520);
arglist__7520 = cljs.core.next(arglist__7520);
var x = cljs.core.first(arglist__7520);
arglist__7520 = cljs.core.next(arglist__7520);
var y = cljs.core.first(arglist__7520);
var _ = cljs.core.rest(arglist__7520);
return G__7518__delegate(t,x,y,_);
});
G__7518.cljs$core$IFn$_invoke$arity$variadic = G__7518__delegate;
return G__7518;
})()
,(function() { 
var G__7521__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__7521 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7522__i = 0, G__7522__a = new Array(arguments.length -  2);
while (G__7522__i < G__7522__a.length) {G__7522__a[G__7522__i] = arguments[G__7522__i + 2]; ++G__7522__i;}
  _ = new cljs.core.IndexedSeq(G__7522__a,0,null);
} 
return G__7521__delegate.call(this,t,angle,_);};
G__7521.cljs$lang$maxFixedArity = 2;
G__7521.cljs$lang$applyTo = (function (arglist__7523){
var t = cljs.core.first(arglist__7523);
arglist__7523 = cljs.core.next(arglist__7523);
var angle = cljs.core.first(arglist__7523);
var _ = cljs.core.rest(arglist__7523);
return G__7521__delegate(t,angle,_);
});
G__7521.cljs$core$IFn$_invoke$arity$variadic = G__7521__delegate;
return G__7521;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__7524__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__7524 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7525__i = 0, G__7525__a = new Array(arguments.length -  1);
while (G__7525__i < G__7525__a.length) {G__7525__a[G__7525__i] = arguments[G__7525__i + 1]; ++G__7525__i;}
  _ = new cljs.core.IndexedSeq(G__7525__a,0,null);
} 
return G__7524__delegate.call(this,b,_);};
G__7524.cljs$lang$maxFixedArity = 1;
G__7524.cljs$lang$applyTo = (function (arglist__7526){
var b = cljs.core.first(arglist__7526);
var _ = cljs.core.rest(arglist__7526);
return G__7524__delegate(b,_);
});
G__7524.cljs$core$IFn$_invoke$arity$variadic = G__7524__delegate;
return G__7524;
})()
,"and",(function() { 
var G__7527__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__7527 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7528__i = 0, G__7528__a = new Array(arguments.length -  2);
while (G__7528__i < G__7528__a.length) {G__7528__a[G__7528__i] = arguments[G__7528__i + 2]; ++G__7528__i;}
  _ = new cljs.core.IndexedSeq(G__7528__a,0,null);
} 
return G__7527__delegate.call(this,b,other,_);};
G__7527.cljs$lang$maxFixedArity = 2;
G__7527.cljs$lang$applyTo = (function (arglist__7529){
var b = cljs.core.first(arglist__7529);
arglist__7529 = cljs.core.next(arglist__7529);
var other = cljs.core.first(arglist__7529);
var _ = cljs.core.rest(arglist__7529);
return G__7527__delegate(b,other,_);
});
G__7527.cljs$core$IFn$_invoke$arity$variadic = G__7527__delegate;
return G__7527;
})()
,"or",(function() { 
var G__7530__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__7530 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7531__i = 0, G__7531__a = new Array(arguments.length -  2);
while (G__7531__i < G__7531__a.length) {G__7531__a[G__7531__i] = arguments[G__7531__i + 2]; ++G__7531__i;}
  _ = new cljs.core.IndexedSeq(G__7531__a,0,null);
} 
return G__7530__delegate.call(this,b,other,_);};
G__7530.cljs$lang$maxFixedArity = 2;
G__7530.cljs$lang$applyTo = (function (arglist__7532){
var b = cljs.core.first(arglist__7532);
arglist__7532 = cljs.core.next(arglist__7532);
var other = cljs.core.first(arglist__7532);
var _ = cljs.core.rest(arglist__7532);
return G__7530__delegate(b,other,_);
});
G__7530.cljs$core$IFn$_invoke$arity$variadic = G__7530__delegate;
return G__7530;
})()
,"not",(function() { 
var G__7533__delegate = function (b,_){
return cljs.core.not(b);
};
var G__7533 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7534__i = 0, G__7534__a = new Array(arguments.length -  1);
while (G__7534__i < G__7534__a.length) {G__7534__a[G__7534__i] = arguments[G__7534__i + 1]; ++G__7534__i;}
  _ = new cljs.core.IndexedSeq(G__7534__a,0,null);
} 
return G__7533__delegate.call(this,b,_);};
G__7533.cljs$lang$maxFixedArity = 1;
G__7533.cljs$lang$applyTo = (function (arglist__7535){
var b = cljs.core.first(arglist__7535);
var _ = cljs.core.rest(arglist__7535);
return G__7533__delegate(b,_);
});
G__7533.cljs$core$IFn$_invoke$arity$variadic = G__7533__delegate;
return G__7533;
})()
,"equals",(function() { 
var G__7536__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7536 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7537__i = 0, G__7537__a = new Array(arguments.length -  2);
while (G__7537__i < G__7537__a.length) {G__7537__a[G__7537__i] = arguments[G__7537__i + 2]; ++G__7537__i;}
  _ = new cljs.core.IndexedSeq(G__7537__a,0,null);
} 
return G__7536__delegate.call(this,b,other,_);};
G__7536.cljs$lang$maxFixedArity = 2;
G__7536.cljs$lang$applyTo = (function (arglist__7538){
var b = cljs.core.first(arglist__7538);
arglist__7538 = cljs.core.next(arglist__7538);
var other = cljs.core.first(arglist__7538);
var _ = cljs.core.rest(arglist__7538);
return G__7536__delegate(b,other,_);
});
G__7536.cljs$core$IFn$_invoke$arity$variadic = G__7536__delegate;
return G__7536;
})()
,"not_equals",(function() { 
var G__7539__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7539 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7540__i = 0, G__7540__a = new Array(arguments.length -  2);
while (G__7540__i < G__7540__a.length) {G__7540__a[G__7540__i] = arguments[G__7540__i + 2]; ++G__7540__i;}
  _ = new cljs.core.IndexedSeq(G__7540__a,0,null);
} 
return G__7539__delegate.call(this,b,other,_);};
G__7539.cljs$lang$maxFixedArity = 2;
G__7539.cljs$lang$applyTo = (function (arglist__7541){
var b = cljs.core.first(arglist__7541);
arglist__7541 = cljs.core.next(arglist__7541);
var other = cljs.core.first(arglist__7541);
var _ = cljs.core.rest(arglist__7541);
return G__7539__delegate(b,other,_);
});
G__7539.cljs$core$IFn$_invoke$arity$variadic = G__7539__delegate;
return G__7539;
})()
,"compare",(function() { 
var G__7542__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__7542 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7543__i = 0, G__7543__a = new Array(arguments.length -  2);
while (G__7543__i < G__7543__a.length) {G__7543__a[G__7543__i] = arguments[G__7543__i + 2]; ++G__7543__i;}
  _ = new cljs.core.IndexedSeq(G__7543__a,0,null);
} 
return G__7542__delegate.call(this,b,other,_);};
G__7542.cljs$lang$maxFixedArity = 2;
G__7542.cljs$lang$applyTo = (function (arglist__7544){
var b = cljs.core.first(arglist__7544);
arglist__7544 = cljs.core.next(arglist__7544);
var other = cljs.core.first(arglist__7544);
var _ = cljs.core.rest(arglist__7544);
return G__7542__delegate(b,other,_);
});
G__7542.cljs$core$IFn$_invoke$arity$variadic = G__7542__delegate;
return G__7542;
})()
,"hash",(function() { 
var G__7545__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__7545 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7546__i = 0, G__7546__a = new Array(arguments.length -  1);
while (G__7546__i < G__7546__a.length) {G__7546__a[G__7546__i] = arguments[G__7546__i + 1]; ++G__7546__i;}
  _ = new cljs.core.IndexedSeq(G__7546__a,0,null);
} 
return G__7545__delegate.call(this,b,_);};
G__7545.cljs$lang$maxFixedArity = 1;
G__7545.cljs$lang$applyTo = (function (arglist__7547){
var b = cljs.core.first(arglist__7547);
var _ = cljs.core.rest(arglist__7547);
return G__7545__delegate(b,_);
});
G__7545.cljs$core$IFn$_invoke$arity$variadic = G__7545__delegate;
return G__7545;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__7548__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7548 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7553__i = 0, G__7553__a = new Array(arguments.length -  1);
while (G__7553__i < G__7553__a.length) {G__7553__a[G__7553__i] = arguments[G__7553__i + 1]; ++G__7553__i;}
  _ = new cljs.core.IndexedSeq(G__7553__a,0,null);
} 
return G__7548__delegate.call(this,f,_);};
G__7548.cljs$lang$maxFixedArity = 1;
G__7548.cljs$lang$applyTo = (function (arglist__7554){
var f = cljs.core.first(arglist__7554);
var _ = cljs.core.rest(arglist__7554);
return G__7548__delegate(f,_);
});
G__7548.cljs$core$IFn$_invoke$arity$variadic = G__7548__delegate;
return G__7548;
})()
,"write",(function() { 
var G__7555__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7555 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7559__i = 0, G__7559__a = new Array(arguments.length -  2);
while (G__7559__i < G__7559__a.length) {G__7559__a[G__7559__i] = arguments[G__7559__i + 2]; ++G__7559__i;}
  _ = new cljs.core.IndexedSeq(G__7559__a,0,null);
} 
return G__7555__delegate.call(this,f,content,_);};
G__7555.cljs$lang$maxFixedArity = 2;
G__7555.cljs$lang$applyTo = (function (arglist__7560){
var f = cljs.core.first(arglist__7560);
arglist__7560 = cljs.core.next(arglist__7560);
var content = cljs.core.first(arglist__7560);
var _ = cljs.core.rest(arglist__7560);
return G__7555__delegate(f,content,_);
});
G__7555.cljs$core$IFn$_invoke$arity$variadic = G__7555__delegate;
return G__7555;
})()
,"append",(function() { 
var G__7563__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__7563 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7564__i = 0, G__7564__a = new Array(arguments.length -  2);
while (G__7564__i < G__7564__a.length) {G__7564__a[G__7564__i] = arguments[G__7564__i + 2]; ++G__7564__i;}
  _ = new cljs.core.IndexedSeq(G__7564__a,0,null);
} 
return G__7563__delegate.call(this,f,content,_);};
G__7563.cljs$lang$maxFixedArity = 2;
G__7563.cljs$lang$applyTo = (function (arglist__7565){
var f = cljs.core.first(arglist__7565);
arglist__7565 = cljs.core.next(arglist__7565);
var content = cljs.core.first(arglist__7565);
var _ = cljs.core.rest(arglist__7565);
return G__7563__delegate(f,content,_);
});
G__7563.cljs$core$IFn$_invoke$arity$variadic = G__7563__delegate;
return G__7563;
})()
,"exists",(function() { 
var G__7566__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7566 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7567__i = 0, G__7567__a = new Array(arguments.length -  1);
while (G__7567__i < G__7567__a.length) {G__7567__a[G__7567__i] = arguments[G__7567__i + 1]; ++G__7567__i;}
  _ = new cljs.core.IndexedSeq(G__7567__a,0,null);
} 
return G__7566__delegate.call(this,f,_);};
G__7566.cljs$lang$maxFixedArity = 1;
G__7566.cljs$lang$applyTo = (function (arglist__7568){
var f = cljs.core.first(arglist__7568);
var _ = cljs.core.rest(arglist__7568);
return G__7566__delegate(f,_);
});
G__7566.cljs$core$IFn$_invoke$arity$variadic = G__7566__delegate;
return G__7566;
})()
,"delete",(function() { 
var G__7569__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__7569 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7575__i = 0, G__7575__a = new Array(arguments.length -  1);
while (G__7575__i < G__7575__a.length) {G__7575__a[G__7575__i] = arguments[G__7575__i + 1]; ++G__7575__i;}
  _ = new cljs.core.IndexedSeq(G__7575__a,0,null);
} 
return G__7569__delegate.call(this,f,_);};
G__7569.cljs$lang$maxFixedArity = 1;
G__7569.cljs$lang$applyTo = (function (arglist__7576){
var f = cljs.core.first(arglist__7576);
var _ = cljs.core.rest(arglist__7576);
return G__7569__delegate(f,_);
});
G__7569.cljs$core$IFn$_invoke$arity$variadic = G__7569__delegate;
return G__7569;
})()
,"lines",(function() { 
var G__7578__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__7578 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7584__i = 0, G__7584__a = new Array(arguments.length -  1);
while (G__7584__i < G__7584__a.length) {G__7584__a[G__7584__i] = arguments[G__7584__i + 1]; ++G__7584__i;}
  _ = new cljs.core.IndexedSeq(G__7584__a,0,null);
} 
return G__7578__delegate.call(this,f,_);};
G__7578.cljs$lang$maxFixedArity = 1;
G__7578.cljs$lang$applyTo = (function (arglist__7585){
var f = cljs.core.first(arglist__7585);
var _ = cljs.core.rest(arglist__7585);
return G__7578__delegate(f,_);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
,"close",(function() { 
var G__7589__delegate = function (_,___$1){
return null;
};
var G__7589 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7590__i = 0, G__7590__a = new Array(arguments.length -  1);
while (G__7590__i < G__7590__a.length) {G__7590__a[G__7590__i] = arguments[G__7590__i + 1]; ++G__7590__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7590__a,0,null);
} 
return G__7589__delegate.call(this,_,___$1);};
G__7589.cljs$lang$maxFixedArity = 1;
G__7589.cljs$lang$applyTo = (function (arglist__7593){
var _ = cljs.core.first(arglist__7593);
var ___$1 = cljs.core.rest(arglist__7593);
return G__7589__delegate(_,___$1);
});
G__7589.cljs$core$IFn$_invoke$arity$variadic = G__7589__delegate;
return G__7589;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","pick","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__7594__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7594 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7595__i = 0, G__7595__a = new Array(arguments.length -  2);
while (G__7595__i < G__7595__a.length) {G__7595__a[G__7595__i] = arguments[G__7595__i + 2]; ++G__7595__i;}
  _ = new cljs.core.IndexedSeq(G__7595__a,0,null);
} 
return G__7594__delegate.call(this,n,other,_);};
G__7594.cljs$lang$maxFixedArity = 2;
G__7594.cljs$lang$applyTo = (function (arglist__7596){
var n = cljs.core.first(arglist__7596);
arglist__7596 = cljs.core.next(arglist__7596);
var other = cljs.core.first(arglist__7596);
var _ = cljs.core.rest(arglist__7596);
return G__7594__delegate(n,other,_);
});
G__7594.cljs$core$IFn$_invoke$arity$variadic = G__7594__delegate;
return G__7594;
})()
,(function() { 
var G__7601__delegate = function (n,other,_){
return (n <= other);
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
var G__7604__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7604 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7605__i = 0, G__7605__a = new Array(arguments.length -  2);
while (G__7605__i < G__7605__a.length) {G__7605__a[G__7605__i] = arguments[G__7605__i + 2]; ++G__7605__i;}
  _ = new cljs.core.IndexedSeq(G__7605__a,0,null);
} 
return G__7604__delegate.call(this,n,other,_);};
G__7604.cljs$lang$maxFixedArity = 2;
G__7604.cljs$lang$applyTo = (function (arglist__7606){
var n = cljs.core.first(arglist__7606);
arglist__7606 = cljs.core.next(arglist__7606);
var other = cljs.core.first(arglist__7606);
var _ = cljs.core.rest(arglist__7606);
return G__7604__delegate(n,other,_);
});
G__7604.cljs$core$IFn$_invoke$arity$variadic = G__7604__delegate;
return G__7604;
})()
,(function() { 
var G__7607__delegate = function (n,other,_){
return (n < other);
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
var G__7610__delegate = function (n,other,_){
return (n + other);
};
var G__7610 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7611__i = 0, G__7611__a = new Array(arguments.length -  2);
while (G__7611__i < G__7611__a.length) {G__7611__a[G__7611__i] = arguments[G__7611__i + 2]; ++G__7611__i;}
  _ = new cljs.core.IndexedSeq(G__7611__a,0,null);
} 
return G__7610__delegate.call(this,n,other,_);};
G__7610.cljs$lang$maxFixedArity = 2;
G__7610.cljs$lang$applyTo = (function (arglist__7612){
var n = cljs.core.first(arglist__7612);
arglist__7612 = cljs.core.next(arglist__7612);
var other = cljs.core.first(arglist__7612);
var _ = cljs.core.rest(arglist__7612);
return G__7610__delegate(n,other,_);
});
G__7610.cljs$core$IFn$_invoke$arity$variadic = G__7610__delegate;
return G__7610;
})()
,(function() { 
var G__7613__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7613 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7614__i = 0, G__7614__a = new Array(arguments.length -  1);
while (G__7614__i < G__7614__a.length) {G__7614__a[G__7614__i] = arguments[G__7614__i + 1]; ++G__7614__i;}
  _ = new cljs.core.IndexedSeq(G__7614__a,0,null);
} 
return G__7613__delegate.call(this,n,_);};
G__7613.cljs$lang$maxFixedArity = 1;
G__7613.cljs$lang$applyTo = (function (arglist__7615){
var n = cljs.core.first(arglist__7615);
var _ = cljs.core.rest(arglist__7615);
return G__7613__delegate(n,_);
});
G__7613.cljs$core$IFn$_invoke$arity$variadic = G__7613__delegate;
return G__7613;
})()
,(function() { 
var G__7616__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7616 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7621__i = 0, G__7621__a = new Array(arguments.length -  1);
while (G__7621__i < G__7621__a.length) {G__7621__a[G__7621__i] = arguments[G__7621__i + 1]; ++G__7621__i;}
  _ = new cljs.core.IndexedSeq(G__7621__a,0,null);
} 
return G__7616__delegate.call(this,n,_);};
G__7616.cljs$lang$maxFixedArity = 1;
G__7616.cljs$lang$applyTo = (function (arglist__7622){
var n = cljs.core.first(arglist__7622);
var _ = cljs.core.rest(arglist__7622);
return G__7616__delegate(n,_);
});
G__7616.cljs$core$IFn$_invoke$arity$variadic = G__7616__delegate;
return G__7616;
})()
,(function() { 
var G__7623__delegate = function (n,other,_){
return (n > other);
};
var G__7623 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7627__i = 0, G__7627__a = new Array(arguments.length -  2);
while (G__7627__i < G__7627__a.length) {G__7627__a[G__7627__i] = arguments[G__7627__i + 2]; ++G__7627__i;}
  _ = new cljs.core.IndexedSeq(G__7627__a,0,null);
} 
return G__7623__delegate.call(this,n,other,_);};
G__7623.cljs$lang$maxFixedArity = 2;
G__7623.cljs$lang$applyTo = (function (arglist__7628){
var n = cljs.core.first(arglist__7628);
arglist__7628 = cljs.core.next(arglist__7628);
var other = cljs.core.first(arglist__7628);
var _ = cljs.core.rest(arglist__7628);
return G__7623__delegate(n,other,_);
});
G__7623.cljs$core$IFn$_invoke$arity$variadic = G__7623__delegate;
return G__7623;
})()
,(function() { 
var G__7631__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__7631 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7632__i = 0, G__7632__a = new Array(arguments.length -  1);
while (G__7632__i < G__7632__a.length) {G__7632__a[G__7632__i] = arguments[G__7632__i + 1]; ++G__7632__i;}
  _ = new cljs.core.IndexedSeq(G__7632__a,0,null);
} 
return G__7631__delegate.call(this,n,_);};
G__7631.cljs$lang$maxFixedArity = 1;
G__7631.cljs$lang$applyTo = (function (arglist__7633){
var n = cljs.core.first(arglist__7633);
var _ = cljs.core.rest(arglist__7633);
return G__7631__delegate(n,_);
});
G__7631.cljs$core$IFn$_invoke$arity$variadic = G__7631__delegate;
return G__7631;
})()
,(function() { 
var G__7634__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7634 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7635__i = 0, G__7635__a = new Array(arguments.length -  2);
while (G__7635__i < G__7635__a.length) {G__7635__a[G__7635__i] = arguments[G__7635__i + 2]; ++G__7635__i;}
  _ = new cljs.core.IndexedSeq(G__7635__a,0,null);
} 
return G__7634__delegate.call(this,n,other,_);};
G__7634.cljs$lang$maxFixedArity = 2;
G__7634.cljs$lang$applyTo = (function (arglist__7636){
var n = cljs.core.first(arglist__7636);
arglist__7636 = cljs.core.next(arglist__7636);
var other = cljs.core.first(arglist__7636);
var _ = cljs.core.rest(arglist__7636);
return G__7634__delegate(n,other,_);
});
G__7634.cljs$core$IFn$_invoke$arity$variadic = G__7634__delegate;
return G__7634;
})()
,(function() { 
var G__7638__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7638 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7639__i = 0, G__7639__a = new Array(arguments.length -  2);
while (G__7639__i < G__7639__a.length) {G__7639__a[G__7639__i] = arguments[G__7639__i + 2]; ++G__7639__i;}
  _ = new cljs.core.IndexedSeq(G__7639__a,0,null);
} 
return G__7638__delegate.call(this,n,other,_);};
G__7638.cljs$lang$maxFixedArity = 2;
G__7638.cljs$lang$applyTo = (function (arglist__7644){
var n = cljs.core.first(arglist__7644);
arglist__7644 = cljs.core.next(arglist__7644);
var other = cljs.core.first(arglist__7644);
var _ = cljs.core.rest(arglist__7644);
return G__7638__delegate(n,other,_);
});
G__7638.cljs$core$IFn$_invoke$arity$variadic = G__7638__delegate;
return G__7638;
})()
,(function() { 
var G__7646__delegate = function (n,other,_){
return (n - other);
};
var G__7646 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7648__i = 0, G__7648__a = new Array(arguments.length -  2);
while (G__7648__i < G__7648__a.length) {G__7648__a[G__7648__i] = arguments[G__7648__i + 2]; ++G__7648__i;}
  _ = new cljs.core.IndexedSeq(G__7648__a,0,null);
} 
return G__7646__delegate.call(this,n,other,_);};
G__7646.cljs$lang$maxFixedArity = 2;
G__7646.cljs$lang$applyTo = (function (arglist__7650){
var n = cljs.core.first(arglist__7650);
arglist__7650 = cljs.core.next(arglist__7650);
var other = cljs.core.first(arglist__7650);
var _ = cljs.core.rest(arglist__7650);
return G__7646__delegate(n,other,_);
});
G__7646.cljs$core$IFn$_invoke$arity$variadic = G__7646__delegate;
return G__7646;
})()
,(function() { 
var G__7655__delegate = function (n,other,_){
return (n * other);
};
var G__7655 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7659__i = 0, G__7659__a = new Array(arguments.length -  2);
while (G__7659__i < G__7659__a.length) {G__7659__a[G__7659__i] = arguments[G__7659__i + 2]; ++G__7659__i;}
  _ = new cljs.core.IndexedSeq(G__7659__a,0,null);
} 
return G__7655__delegate.call(this,n,other,_);};
G__7655.cljs$lang$maxFixedArity = 2;
G__7655.cljs$lang$applyTo = (function (arglist__7660){
var n = cljs.core.first(arglist__7660);
arglist__7660 = cljs.core.next(arglist__7660);
var other = cljs.core.first(arglist__7660);
var _ = cljs.core.rest(arglist__7660);
return G__7655__delegate(n,other,_);
});
G__7655.cljs$core$IFn$_invoke$arity$variadic = G__7655__delegate;
return G__7655;
})()
,(function() { 
var G__7663__delegate = function (n,other,_){
return (n / other);
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
return nex.interpreter.nex_abs(n);
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
var G__7669__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7669 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7674__i = 0, G__7674__a = new Array(arguments.length -  2);
while (G__7674__i < G__7674__a.length) {G__7674__a[G__7674__i] = arguments[G__7674__i + 2]; ++G__7674__i;}
  _ = new cljs.core.IndexedSeq(G__7674__a,0,null);
} 
return G__7669__delegate.call(this,n,other,_);};
G__7669.cljs$lang$maxFixedArity = 2;
G__7669.cljs$lang$applyTo = (function (arglist__7675){
var n = cljs.core.first(arglist__7675);
arglist__7675 = cljs.core.next(arglist__7675);
var other = cljs.core.first(arglist__7675);
var _ = cljs.core.rest(arglist__7675);
return G__7669__delegate(n,other,_);
});
G__7669.cljs$core$IFn$_invoke$arity$variadic = G__7669__delegate;
return G__7669;
})()
,(function() { 
var G__7676__delegate = function (n,other,_){
return (n >= other);
};
var G__7676 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7677__i = 0, G__7677__a = new Array(arguments.length -  2);
while (G__7677__i < G__7677__a.length) {G__7677__a[G__7677__i] = arguments[G__7677__i + 2]; ++G__7677__i;}
  _ = new cljs.core.IndexedSeq(G__7677__a,0,null);
} 
return G__7676__delegate.call(this,n,other,_);};
G__7676.cljs$lang$maxFixedArity = 2;
G__7676.cljs$lang$applyTo = (function (arglist__7678){
var n = cljs.core.first(arglist__7678);
arglist__7678 = cljs.core.next(arglist__7678);
var other = cljs.core.first(arglist__7678);
var _ = cljs.core.rest(arglist__7678);
return G__7676__delegate(n,other,_);
});
G__7676.cljs$core$IFn$_invoke$arity$variadic = G__7676__delegate;
return G__7676;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7679__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7679 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7680__i = 0, G__7680__a = new Array(arguments.length -  1);
while (G__7680__i < G__7680__a.length) {G__7680__a[G__7680__i] = arguments[G__7680__i + 1]; ++G__7680__i;}
  _ = new cljs.core.IndexedSeq(G__7680__a,0,null);
} 
return G__7679__delegate.call(this,c,_);};
G__7679.cljs$lang$maxFixedArity = 1;
G__7679.cljs$lang$applyTo = (function (arglist__7681){
var c = cljs.core.first(arglist__7681);
var _ = cljs.core.rest(arglist__7681);
return G__7679__delegate(c,_);
});
G__7679.cljs$core$IFn$_invoke$arity$variadic = G__7679__delegate;
return G__7679;
})()
,"item",(function() { 
var G__7682__delegate = function (c,_){
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
var G__7682 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7691__i = 0, G__7691__a = new Array(arguments.length -  1);
while (G__7691__i < G__7691__a.length) {G__7691__a[G__7691__i] = arguments[G__7691__i + 1]; ++G__7691__i;}
  _ = new cljs.core.IndexedSeq(G__7691__a,0,null);
} 
return G__7682__delegate.call(this,c,_);};
G__7682.cljs$lang$maxFixedArity = 1;
G__7682.cljs$lang$applyTo = (function (arglist__7692){
var c = cljs.core.first(arglist__7692);
var _ = cljs.core.rest(arglist__7692);
return G__7682__delegate(c,_);
});
G__7682.cljs$core$IFn$_invoke$arity$variadic = G__7682__delegate;
return G__7682;
})()
,"next",(function() { 
var G__7693__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7693 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7698__i = 0, G__7698__a = new Array(arguments.length -  1);
while (G__7698__i < G__7698__a.length) {G__7698__a[G__7698__i] = arguments[G__7698__i + 1]; ++G__7698__i;}
  _ = new cljs.core.IndexedSeq(G__7698__a,0,null);
} 
return G__7693__delegate.call(this,c,_);};
G__7693.cljs$lang$maxFixedArity = 1;
G__7693.cljs$lang$applyTo = (function (arglist__7699){
var c = cljs.core.first(arglist__7699);
var _ = cljs.core.rest(arglist__7699);
return G__7693__delegate(c,_);
});
G__7693.cljs$core$IFn$_invoke$arity$variadic = G__7693__delegate;
return G__7693;
})()
,"at_end",(function() { 
var G__7701__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__7701 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7708__i = 0, G__7708__a = new Array(arguments.length -  1);
while (G__7708__i < G__7708__a.length) {G__7708__a[G__7708__i] = arguments[G__7708__i + 1]; ++G__7708__i;}
  _ = new cljs.core.IndexedSeq(G__7708__a,0,null);
} 
return G__7701__delegate.call(this,c,_);};
G__7701.cljs$lang$maxFixedArity = 1;
G__7701.cljs$lang$applyTo = (function (arglist__7709){
var c = cljs.core.first(arglist__7709);
var _ = cljs.core.rest(arglist__7709);
return G__7701__delegate(c,_);
});
G__7701.cljs$core$IFn$_invoke$arity$variadic = G__7701__delegate;
return G__7701;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__7714__delegate = function (n,other,_){
return nex_compare(n,other);
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
var G__7717__delegate = function (n,other,_){
return (n <= other);
};
var G__7717 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7718__i = 0, G__7718__a = new Array(arguments.length -  2);
while (G__7718__i < G__7718__a.length) {G__7718__a[G__7718__i] = arguments[G__7718__i + 2]; ++G__7718__i;}
  _ = new cljs.core.IndexedSeq(G__7718__a,0,null);
} 
return G__7717__delegate.call(this,n,other,_);};
G__7717.cljs$lang$maxFixedArity = 2;
G__7717.cljs$lang$applyTo = (function (arglist__7719){
var n = cljs.core.first(arglist__7719);
arglist__7719 = cljs.core.next(arglist__7719);
var other = cljs.core.first(arglist__7719);
var _ = cljs.core.rest(arglist__7719);
return G__7717__delegate(n,other,_);
});
G__7717.cljs$core$IFn$_invoke$arity$variadic = G__7717__delegate;
return G__7717;
})()
,(function() { 
var G__7724__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7724 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7725__i = 0, G__7725__a = new Array(arguments.length -  2);
while (G__7725__i < G__7725__a.length) {G__7725__a[G__7725__i] = arguments[G__7725__i + 2]; ++G__7725__i;}
  _ = new cljs.core.IndexedSeq(G__7725__a,0,null);
} 
return G__7724__delegate.call(this,n,other,_);};
G__7724.cljs$lang$maxFixedArity = 2;
G__7724.cljs$lang$applyTo = (function (arglist__7730){
var n = cljs.core.first(arglist__7730);
arglist__7730 = cljs.core.next(arglist__7730);
var other = cljs.core.first(arglist__7730);
var _ = cljs.core.rest(arglist__7730);
return G__7724__delegate(n,other,_);
});
G__7724.cljs$core$IFn$_invoke$arity$variadic = G__7724__delegate;
return G__7724;
})()
,(function() { 
var G__7731__delegate = function (n,other,_){
return (n < other);
};
var G__7731 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7733__i = 0, G__7733__a = new Array(arguments.length -  2);
while (G__7733__i < G__7733__a.length) {G__7733__a[G__7733__i] = arguments[G__7733__i + 2]; ++G__7733__i;}
  _ = new cljs.core.IndexedSeq(G__7733__a,0,null);
} 
return G__7731__delegate.call(this,n,other,_);};
G__7731.cljs$lang$maxFixedArity = 2;
G__7731.cljs$lang$applyTo = (function (arglist__7734){
var n = cljs.core.first(arglist__7734);
arglist__7734 = cljs.core.next(arglist__7734);
var other = cljs.core.first(arglist__7734);
var _ = cljs.core.rest(arglist__7734);
return G__7731__delegate(n,other,_);
});
G__7731.cljs$core$IFn$_invoke$arity$variadic = G__7731__delegate;
return G__7731;
})()
,(function() { 
var G__7739__delegate = function (n,other,_){
return (n + other);
};
var G__7739 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7741__i = 0, G__7741__a = new Array(arguments.length -  2);
while (G__7741__i < G__7741__a.length) {G__7741__a[G__7741__i] = arguments[G__7741__i + 2]; ++G__7741__i;}
  _ = new cljs.core.IndexedSeq(G__7741__a,0,null);
} 
return G__7739__delegate.call(this,n,other,_);};
G__7739.cljs$lang$maxFixedArity = 2;
G__7739.cljs$lang$applyTo = (function (arglist__7742){
var n = cljs.core.first(arglist__7742);
arglist__7742 = cljs.core.next(arglist__7742);
var other = cljs.core.first(arglist__7742);
var _ = cljs.core.rest(arglist__7742);
return G__7739__delegate(n,other,_);
});
G__7739.cljs$core$IFn$_invoke$arity$variadic = G__7739__delegate;
return G__7739;
})()
,(function() { 
var G__7745__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7745 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7750__i = 0, G__7750__a = new Array(arguments.length -  1);
while (G__7750__i < G__7750__a.length) {G__7750__a[G__7750__i] = arguments[G__7750__i + 1]; ++G__7750__i;}
  _ = new cljs.core.IndexedSeq(G__7750__a,0,null);
} 
return G__7745__delegate.call(this,n,_);};
G__7745.cljs$lang$maxFixedArity = 1;
G__7745.cljs$lang$applyTo = (function (arglist__7751){
var n = cljs.core.first(arglist__7751);
var _ = cljs.core.rest(arglist__7751);
return G__7745__delegate(n,_);
});
G__7745.cljs$core$IFn$_invoke$arity$variadic = G__7745__delegate;
return G__7745;
})()
,(function() { 
var G__7753__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7753 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7754__i = 0, G__7754__a = new Array(arguments.length -  1);
while (G__7754__i < G__7754__a.length) {G__7754__a[G__7754__i] = arguments[G__7754__i + 1]; ++G__7754__i;}
  _ = new cljs.core.IndexedSeq(G__7754__a,0,null);
} 
return G__7753__delegate.call(this,n,_);};
G__7753.cljs$lang$maxFixedArity = 1;
G__7753.cljs$lang$applyTo = (function (arglist__7759){
var n = cljs.core.first(arglist__7759);
var _ = cljs.core.rest(arglist__7759);
return G__7753__delegate(n,_);
});
G__7753.cljs$core$IFn$_invoke$arity$variadic = G__7753__delegate;
return G__7753;
})()
,(function() { 
var G__7760__delegate = function (n,other,_){
return (n > other);
};
var G__7760 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7765__i = 0, G__7765__a = new Array(arguments.length -  2);
while (G__7765__i < G__7765__a.length) {G__7765__a[G__7765__i] = arguments[G__7765__i + 2]; ++G__7765__i;}
  _ = new cljs.core.IndexedSeq(G__7765__a,0,null);
} 
return G__7760__delegate.call(this,n,other,_);};
G__7760.cljs$lang$maxFixedArity = 2;
G__7760.cljs$lang$applyTo = (function (arglist__7766){
var n = cljs.core.first(arglist__7766);
arglist__7766 = cljs.core.next(arglist__7766);
var other = cljs.core.first(arglist__7766);
var _ = cljs.core.rest(arglist__7766);
return G__7760__delegate(n,other,_);
});
G__7760.cljs$core$IFn$_invoke$arity$variadic = G__7760__delegate;
return G__7760;
})()
,(function() { 
var G__7768__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7768 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7773__i = 0, G__7773__a = new Array(arguments.length -  2);
while (G__7773__i < G__7773__a.length) {G__7773__a[G__7773__i] = arguments[G__7773__i + 2]; ++G__7773__i;}
  _ = new cljs.core.IndexedSeq(G__7773__a,0,null);
} 
return G__7768__delegate.call(this,n,other,_);};
G__7768.cljs$lang$maxFixedArity = 2;
G__7768.cljs$lang$applyTo = (function (arglist__7774){
var n = cljs.core.first(arglist__7774);
arglist__7774 = cljs.core.next(arglist__7774);
var other = cljs.core.first(arglist__7774);
var _ = cljs.core.rest(arglist__7774);
return G__7768__delegate(n,other,_);
});
G__7768.cljs$core$IFn$_invoke$arity$variadic = G__7768__delegate;
return G__7768;
})()
,(function() { 
var G__7776__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7776 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7779__i = 0, G__7779__a = new Array(arguments.length -  2);
while (G__7779__i < G__7779__a.length) {G__7779__a[G__7779__i] = arguments[G__7779__i + 2]; ++G__7779__i;}
  _ = new cljs.core.IndexedSeq(G__7779__a,0,null);
} 
return G__7776__delegate.call(this,n,other,_);};
G__7776.cljs$lang$maxFixedArity = 2;
G__7776.cljs$lang$applyTo = (function (arglist__7784){
var n = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var other = cljs.core.first(arglist__7784);
var _ = cljs.core.rest(arglist__7784);
return G__7776__delegate(n,other,_);
});
G__7776.cljs$core$IFn$_invoke$arity$variadic = G__7776__delegate;
return G__7776;
})()
,(function() { 
var G__7786__delegate = function (n,other,_){
return (n - other);
};
var G__7786 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7791__i = 0, G__7791__a = new Array(arguments.length -  2);
while (G__7791__i < G__7791__a.length) {G__7791__a[G__7791__i] = arguments[G__7791__i + 2]; ++G__7791__i;}
  _ = new cljs.core.IndexedSeq(G__7791__a,0,null);
} 
return G__7786__delegate.call(this,n,other,_);};
G__7786.cljs$lang$maxFixedArity = 2;
G__7786.cljs$lang$applyTo = (function (arglist__7792){
var n = cljs.core.first(arglist__7792);
arglist__7792 = cljs.core.next(arglist__7792);
var other = cljs.core.first(arglist__7792);
var _ = cljs.core.rest(arglist__7792);
return G__7786__delegate(n,other,_);
});
G__7786.cljs$core$IFn$_invoke$arity$variadic = G__7786__delegate;
return G__7786;
})()
,(function() { 
var G__7793__delegate = function (n,other,_){
return (n * other);
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
return (n / other);
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
var G__7799__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7799 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7800__i = 0, G__7800__a = new Array(arguments.length -  1);
while (G__7800__i < G__7800__a.length) {G__7800__a[G__7800__i] = arguments[G__7800__i + 1]; ++G__7800__i;}
  _ = new cljs.core.IndexedSeq(G__7800__a,0,null);
} 
return G__7799__delegate.call(this,n,_);};
G__7799.cljs$lang$maxFixedArity = 1;
G__7799.cljs$lang$applyTo = (function (arglist__7801){
var n = cljs.core.first(arglist__7801);
var _ = cljs.core.rest(arglist__7801);
return G__7799__delegate(n,_);
});
G__7799.cljs$core$IFn$_invoke$arity$variadic = G__7799__delegate;
return G__7799;
})()
,(function() { 
var G__7802__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__7802 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7807__i = 0, G__7807__a = new Array(arguments.length -  1);
while (G__7807__i < G__7807__a.length) {G__7807__a[G__7807__i] = arguments[G__7807__i + 1]; ++G__7807__i;}
  _ = new cljs.core.IndexedSeq(G__7807__a,0,null);
} 
return G__7802__delegate.call(this,n,_);};
G__7802.cljs$lang$maxFixedArity = 1;
G__7802.cljs$lang$applyTo = (function (arglist__7808){
var n = cljs.core.first(arglist__7808);
var _ = cljs.core.rest(arglist__7808);
return G__7802__delegate(n,_);
});
G__7802.cljs$core$IFn$_invoke$arity$variadic = G__7802__delegate;
return G__7802;
})()
,(function() { 
var G__7809__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7809 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7812__i = 0, G__7812__a = new Array(arguments.length -  2);
while (G__7812__i < G__7812__a.length) {G__7812__a[G__7812__i] = arguments[G__7812__i + 2]; ++G__7812__i;}
  _ = new cljs.core.IndexedSeq(G__7812__a,0,null);
} 
return G__7809__delegate.call(this,n,other,_);};
G__7809.cljs$lang$maxFixedArity = 2;
G__7809.cljs$lang$applyTo = (function (arglist__7813){
var n = cljs.core.first(arglist__7813);
arglist__7813 = cljs.core.next(arglist__7813);
var other = cljs.core.first(arglist__7813);
var _ = cljs.core.rest(arglist__7813);
return G__7809__delegate(n,other,_);
});
G__7809.cljs$core$IFn$_invoke$arity$variadic = G__7809__delegate;
return G__7809;
})()
,(function() { 
var G__7814__delegate = function (n,other,_){
return (n >= other);
};
var G__7814 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7815__i = 0, G__7815__a = new Array(arguments.length -  2);
while (G__7815__i < G__7815__a.length) {G__7815__a[G__7815__i] = arguments[G__7815__i + 2]; ++G__7815__i;}
  _ = new cljs.core.IndexedSeq(G__7815__a,0,null);
} 
return G__7814__delegate.call(this,n,other,_);};
G__7814.cljs$lang$maxFixedArity = 2;
G__7814.cljs$lang$applyTo = (function (arglist__7816){
var n = cljs.core.first(arglist__7816);
arglist__7816 = cljs.core.next(arglist__7816);
var other = cljs.core.first(arglist__7816);
var _ = cljs.core.rest(arglist__7816);
return G__7814__delegate(n,other,_);
});
G__7814.cljs$core$IFn$_invoke$arity$variadic = G__7814__delegate;
return G__7814;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7817__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7817 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7823__i = 0, G__7823__a = new Array(arguments.length -  1);
while (G__7823__i < G__7823__a.length) {G__7823__a[G__7823__i] = arguments[G__7823__i + 1]; ++G__7823__i;}
  _ = new cljs.core.IndexedSeq(G__7823__a,0,null);
} 
return G__7817__delegate.call(this,c,_);};
G__7817.cljs$lang$maxFixedArity = 1;
G__7817.cljs$lang$applyTo = (function (arglist__7824){
var c = cljs.core.first(arglist__7824);
var _ = cljs.core.rest(arglist__7824);
return G__7817__delegate(c,_);
});
G__7817.cljs$core$IFn$_invoke$arity$variadic = G__7817__delegate;
return G__7817;
})()
,"item",(function() { 
var G__7826__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7826 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7834__i = 0, G__7834__a = new Array(arguments.length -  1);
while (G__7834__i < G__7834__a.length) {G__7834__a[G__7834__i] = arguments[G__7834__i + 1]; ++G__7834__i;}
  _ = new cljs.core.IndexedSeq(G__7834__a,0,null);
} 
return G__7826__delegate.call(this,c,_);};
G__7826.cljs$lang$maxFixedArity = 1;
G__7826.cljs$lang$applyTo = (function (arglist__7835){
var c = cljs.core.first(arglist__7835);
var _ = cljs.core.rest(arglist__7835);
return G__7826__delegate(c,_);
});
G__7826.cljs$core$IFn$_invoke$arity$variadic = G__7826__delegate;
return G__7826;
})()
,"next",(function() { 
var G__7836__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7836 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7841__i = 0, G__7841__a = new Array(arguments.length -  1);
while (G__7841__i < G__7841__a.length) {G__7841__a[G__7841__i] = arguments[G__7841__i + 1]; ++G__7841__i;}
  _ = new cljs.core.IndexedSeq(G__7841__a,0,null);
} 
return G__7836__delegate.call(this,c,_);};
G__7836.cljs$lang$maxFixedArity = 1;
G__7836.cljs$lang$applyTo = (function (arglist__7842){
var c = cljs.core.first(arglist__7842);
var _ = cljs.core.rest(arglist__7842);
return G__7836__delegate(c,_);
});
G__7836.cljs$core$IFn$_invoke$arity$variadic = G__7836__delegate;
return G__7836;
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
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

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
nex.interpreter.nex_console_println((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

return null;
};
var G__7849 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7855__i = 0, G__7855__a = new Array(arguments.length -  2);
while (G__7855__i < G__7855__a.length) {G__7855__a[G__7855__i] = arguments[G__7855__i + 2]; ++G__7855__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7855__a,0,null);
} 
return G__7849__delegate.call(this,_,msg,___$1);};
G__7849.cljs$lang$maxFixedArity = 2;
G__7849.cljs$lang$applyTo = (function (arglist__7856){
var _ = cljs.core.first(arglist__7856);
arglist__7856 = cljs.core.next(arglist__7856);
var msg = cljs.core.first(arglist__7856);
var ___$1 = cljs.core.rest(arglist__7856);
return G__7849__delegate(_,msg,___$1);
});
G__7849.cljs$core$IFn$_invoke$arity$variadic = G__7849__delegate;
return G__7849;
})()
,"read_line",(function() { 
var G__7857__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__7857 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__7858__i = 0, G__7858__a = new Array(arguments.length -  1);
while (G__7858__i < G__7858__a.length) {G__7858__a[G__7858__i] = arguments[G__7858__i + 1]; ++G__7858__i;}
  args = new cljs.core.IndexedSeq(G__7858__a,0,null);
} 
return G__7857__delegate.call(this,_,args);};
G__7857.cljs$lang$maxFixedArity = 1;
G__7857.cljs$lang$applyTo = (function (arglist__7859){
var _ = cljs.core.first(arglist__7859);
var args = cljs.core.rest(arglist__7859);
return G__7857__delegate(_,args);
});
G__7857.cljs$core$IFn$_invoke$arity$variadic = G__7857__delegate;
return G__7857;
})()
,"error",(function() { 
var G__7860__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

return null;
};
var G__7860 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7861__i = 0, G__7861__a = new Array(arguments.length -  2);
while (G__7861__i < G__7861__a.length) {G__7861__a[G__7861__i] = arguments[G__7861__i + 2]; ++G__7861__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7861__a,0,null);
} 
return G__7860__delegate.call(this,_,msg,___$1);};
G__7860.cljs$lang$maxFixedArity = 2;
G__7860.cljs$lang$applyTo = (function (arglist__7862){
var _ = cljs.core.first(arglist__7862);
arglist__7862 = cljs.core.next(arglist__7862);
var msg = cljs.core.first(arglist__7862);
var ___$1 = cljs.core.rest(arglist__7862);
return G__7860__delegate(_,msg,___$1);
});
G__7860.cljs$core$IFn$_invoke$arity$variadic = G__7860__delegate;
return G__7860;
})()
,"new_line",(function() { 
var G__7863__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__7863 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7864__i = 0, G__7864__a = new Array(arguments.length -  1);
while (G__7864__i < G__7864__a.length) {G__7864__a[G__7864__i] = arguments[G__7864__i + 1]; ++G__7864__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7864__a,0,null);
} 
return G__7863__delegate.call(this,_,___$1);};
G__7863.cljs$lang$maxFixedArity = 1;
G__7863.cljs$lang$applyTo = (function (arglist__7866){
var _ = cljs.core.first(arglist__7866);
var ___$1 = cljs.core.rest(arglist__7866);
return G__7863__delegate(_,___$1);
});
G__7863.cljs$core$IFn$_invoke$arity$variadic = G__7863__delegate;
return G__7863;
})()
,"read_integer",(function() { 
var G__7867__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__7867 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7868__i = 0, G__7868__a = new Array(arguments.length -  1);
while (G__7868__i < G__7868__a.length) {G__7868__a[G__7868__i] = arguments[G__7868__i + 1]; ++G__7868__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7868__a,0,null);
} 
return G__7867__delegate.call(this,_,___$1);};
G__7867.cljs$lang$maxFixedArity = 1;
G__7867.cljs$lang$applyTo = (function (arglist__7869){
var _ = cljs.core.first(arglist__7869);
var ___$1 = cljs.core.rest(arglist__7869);
return G__7867__delegate(_,___$1);
});
G__7867.cljs$core$IFn$_invoke$arity$variadic = G__7867__delegate;
return G__7867;
})()
,"read_real",(function() { 
var G__7870__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__7870 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__7875__i = 0, G__7875__a = new Array(arguments.length -  1);
while (G__7875__i < G__7875__a.length) {G__7875__a[G__7875__i] = arguments[G__7875__i + 1]; ++G__7875__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7875__a,0,null);
} 
return G__7870__delegate.call(this,_,___$1);};
G__7870.cljs$lang$maxFixedArity = 1;
G__7870.cljs$lang$applyTo = (function (arglist__7876){
var _ = cljs.core.first(arglist__7876);
var ___$1 = cljs.core.rest(arglist__7876);
return G__7870__delegate(_,___$1);
});
G__7870.cljs$core$IFn$_invoke$arity$variadic = G__7870__delegate;
return G__7870;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__7882__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__7882 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7883__i = 0, G__7883__a = new Array(arguments.length -  4);
while (G__7883__i < G__7883__a.length) {G__7883__a[G__7883__i] = arguments[G__7883__i + 4]; ++G__7883__i;}
  _ = new cljs.core.IndexedSeq(G__7883__a,0,null);
} 
return G__7882__delegate.call(this,w,text,x,y,_);};
G__7882.cljs$lang$maxFixedArity = 4;
G__7882.cljs$lang$applyTo = (function (arglist__7884){
var w = cljs.core.first(arglist__7884);
arglist__7884 = cljs.core.next(arglist__7884);
var text = cljs.core.first(arglist__7884);
arglist__7884 = cljs.core.next(arglist__7884);
var x = cljs.core.first(arglist__7884);
arglist__7884 = cljs.core.next(arglist__7884);
var y = cljs.core.first(arglist__7884);
var _ = cljs.core.rest(arglist__7884);
return G__7882__delegate(w,text,x,y,_);
});
G__7882.cljs$core$IFn$_invoke$arity$variadic = G__7882__delegate;
return G__7882;
})()
,(function() { 
var G__7885__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__7885 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7886__i = 0, G__7886__a = new Array(arguments.length -  1);
while (G__7886__i < G__7886__a.length) {G__7886__a[G__7886__i] = arguments[G__7886__i + 1]; ++G__7886__i;}
  _ = new cljs.core.IndexedSeq(G__7886__a,0,null);
} 
return G__7885__delegate.call(this,w,_);};
G__7885.cljs$lang$maxFixedArity = 1;
G__7885.cljs$lang$applyTo = (function (arglist__7891){
var w = cljs.core.first(arglist__7891);
var _ = cljs.core.rest(arglist__7891);
return G__7885__delegate(w,_);
});
G__7885.cljs$core$IFn$_invoke$arity$variadic = G__7885__delegate;
return G__7885;
})()
,(function() { 
var G__7892__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__7892 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7895__i = 0, G__7895__a = new Array(arguments.length -  2);
while (G__7895__i < G__7895__a.length) {G__7895__a[G__7895__i] = arguments[G__7895__i + 2]; ++G__7895__i;}
  _ = new cljs.core.IndexedSeq(G__7895__a,0,null);
} 
return G__7892__delegate.call(this,w,size,_);};
G__7892.cljs$lang$maxFixedArity = 2;
G__7892.cljs$lang$applyTo = (function (arglist__7897){
var w = cljs.core.first(arglist__7897);
arglist__7897 = cljs.core.next(arglist__7897);
var size = cljs.core.first(arglist__7897);
var _ = cljs.core.rest(arglist__7897);
return G__7892__delegate(w,size,_);
});
G__7892.cljs$core$IFn$_invoke$arity$variadic = G__7892__delegate;
return G__7892;
})()
,(function() { 
var G__7902__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__7902 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__7908__i = 0, G__7908__a = new Array(arguments.length -  6);
while (G__7908__i < G__7908__a.length) {G__7908__a[G__7908__i] = arguments[G__7908__i + 6]; ++G__7908__i;}
  _ = new cljs.core.IndexedSeq(G__7908__a,0,null);
} 
return G__7902__delegate.call(this,w,img,x,y,width,height,_);};
G__7902.cljs$lang$maxFixedArity = 6;
G__7902.cljs$lang$applyTo = (function (arglist__7909){
var w = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var img = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var x = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var y = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var width = cljs.core.first(arglist__7909);
arglist__7909 = cljs.core.next(arglist__7909);
var height = cljs.core.first(arglist__7909);
var _ = cljs.core.rest(arglist__7909);
return G__7902__delegate(w,img,x,y,width,height,_);
});
G__7902.cljs$core$IFn$_invoke$arity$variadic = G__7902__delegate;
return G__7902;
})()
,(function() { 
var G__7910__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
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
var G__7913__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__7913 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7918__i = 0, G__7918__a = new Array(arguments.length -  4);
while (G__7918__i < G__7918__a.length) {G__7918__a[G__7918__i] = arguments[G__7918__i + 4]; ++G__7918__i;}
  _ = new cljs.core.IndexedSeq(G__7918__a,0,null);
} 
return G__7913__delegate.call(this,w,img,x,y,_);};
G__7913.cljs$lang$maxFixedArity = 4;
G__7913.cljs$lang$applyTo = (function (arglist__7919){
var w = cljs.core.first(arglist__7919);
arglist__7919 = cljs.core.next(arglist__7919);
var img = cljs.core.first(arglist__7919);
arglist__7919 = cljs.core.next(arglist__7919);
var x = cljs.core.first(arglist__7919);
arglist__7919 = cljs.core.next(arglist__7919);
var y = cljs.core.first(arglist__7919);
var _ = cljs.core.rest(arglist__7919);
return G__7913__delegate(w,img,x,y,_);
});
G__7913.cljs$core$IFn$_invoke$arity$variadic = G__7913__delegate;
return G__7913;
})()
,(function() { 
var G__7920__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__7920 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7921__i = 0, G__7921__a = new Array(arguments.length -  2);
while (G__7921__i < G__7921__a.length) {G__7921__a[G__7921__i] = arguments[G__7921__i + 2]; ++G__7921__i;}
  _ = new cljs.core.IndexedSeq(G__7921__a,0,null);
} 
return G__7920__delegate.call(this,w,ms,_);};
G__7920.cljs$lang$maxFixedArity = 2;
G__7920.cljs$lang$applyTo = (function (arglist__7922){
var w = cljs.core.first(arglist__7922);
arglist__7922 = cljs.core.next(arglist__7922);
var ms = cljs.core.first(arglist__7922);
var _ = cljs.core.rest(arglist__7922);
return G__7920__delegate(w,ms,_);
});
G__7920.cljs$core$IFn$_invoke$arity$variadic = G__7920__delegate;
return G__7920;
})()
,(function() { 
var G__7923__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__7923 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7928__i = 0, G__7928__a = new Array(arguments.length -  5);
while (G__7928__i < G__7928__a.length) {G__7928__a[G__7928__i] = arguments[G__7928__i + 5]; ++G__7928__i;}
  _ = new cljs.core.IndexedSeq(G__7928__a,0,null);
} 
return G__7923__delegate.call(this,w,x1,y1,x2,y2,_);};
G__7923.cljs$lang$maxFixedArity = 5;
G__7923.cljs$lang$applyTo = (function (arglist__7929){
var w = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var x1 = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var y1 = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var x2 = cljs.core.first(arglist__7929);
arglist__7929 = cljs.core.next(arglist__7929);
var y2 = cljs.core.first(arglist__7929);
var _ = cljs.core.rest(arglist__7929);
return G__7923__delegate(w,x1,y1,x2,y2,_);
});
G__7923.cljs$core$IFn$_invoke$arity$variadic = G__7923__delegate;
return G__7923;
})()
,(function() { 
var G__7932__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__7932 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7933__i = 0, G__7933__a = new Array(arguments.length -  1);
while (G__7933__i < G__7933__a.length) {G__7933__a[G__7933__i] = arguments[G__7933__i + 1]; ++G__7933__i;}
  _ = new cljs.core.IndexedSeq(G__7933__a,0,null);
} 
return G__7932__delegate.call(this,w,_);};
G__7932.cljs$lang$maxFixedArity = 1;
G__7932.cljs$lang$applyTo = (function (arglist__7934){
var w = cljs.core.first(arglist__7934);
var _ = cljs.core.rest(arglist__7934);
return G__7932__delegate(w,_);
});
G__7932.cljs$core$IFn$_invoke$arity$variadic = G__7932__delegate;
return G__7932;
})()
,(function() { 
var G__7935__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__7935 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7936__i = 0, G__7936__a = new Array(arguments.length -  4);
while (G__7936__i < G__7936__a.length) {G__7936__a[G__7936__i] = arguments[G__7936__i + 4]; ++G__7936__i;}
  _ = new cljs.core.IndexedSeq(G__7936__a,0,null);
} 
return G__7935__delegate.call(this,w,x,y,r,_);};
G__7935.cljs$lang$maxFixedArity = 4;
G__7935.cljs$lang$applyTo = (function (arglist__7937){
var w = cljs.core.first(arglist__7937);
arglist__7937 = cljs.core.next(arglist__7937);
var x = cljs.core.first(arglist__7937);
arglist__7937 = cljs.core.next(arglist__7937);
var y = cljs.core.first(arglist__7937);
arglist__7937 = cljs.core.next(arglist__7937);
var r = cljs.core.first(arglist__7937);
var _ = cljs.core.rest(arglist__7937);
return G__7935__delegate(w,x,y,r,_);
});
G__7935.cljs$core$IFn$_invoke$arity$variadic = G__7935__delegate;
return G__7935;
})()
,(function() { 
var G__7943__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__7943 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7950__i = 0, G__7950__a = new Array(arguments.length -  5);
while (G__7950__i < G__7950__a.length) {G__7950__a[G__7950__i] = arguments[G__7950__i + 5]; ++G__7950__i;}
  _ = new cljs.core.IndexedSeq(G__7950__a,0,null);
} 
return G__7943__delegate.call(this,w,x,y,width,height,_);};
G__7943.cljs$lang$maxFixedArity = 5;
G__7943.cljs$lang$applyTo = (function (arglist__7951){
var w = cljs.core.first(arglist__7951);
arglist__7951 = cljs.core.next(arglist__7951);
var x = cljs.core.first(arglist__7951);
arglist__7951 = cljs.core.next(arglist__7951);
var y = cljs.core.first(arglist__7951);
arglist__7951 = cljs.core.next(arglist__7951);
var width = cljs.core.first(arglist__7951);
arglist__7951 = cljs.core.next(arglist__7951);
var height = cljs.core.first(arglist__7951);
var _ = cljs.core.rest(arglist__7951);
return G__7943__delegate(w,x,y,width,height,_);
});
G__7943.cljs$core$IFn$_invoke$arity$variadic = G__7943__delegate;
return G__7943;
})()
,(function() { 
var G__7954__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__7954 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7955__i = 0, G__7955__a = new Array(arguments.length -  5);
while (G__7955__i < G__7955__a.length) {G__7955__a[G__7955__i] = arguments[G__7955__i + 5]; ++G__7955__i;}
  _ = new cljs.core.IndexedSeq(G__7955__a,0,null);
} 
return G__7954__delegate.call(this,w,img,x,y,angle,_);};
G__7954.cljs$lang$maxFixedArity = 5;
G__7954.cljs$lang$applyTo = (function (arglist__7956){
var w = cljs.core.first(arglist__7956);
arglist__7956 = cljs.core.next(arglist__7956);
var img = cljs.core.first(arglist__7956);
arglist__7956 = cljs.core.next(arglist__7956);
var x = cljs.core.first(arglist__7956);
arglist__7956 = cljs.core.next(arglist__7956);
var y = cljs.core.first(arglist__7956);
arglist__7956 = cljs.core.next(arglist__7956);
var angle = cljs.core.first(arglist__7956);
var _ = cljs.core.rest(arglist__7956);
return G__7954__delegate(w,img,x,y,angle,_);
});
G__7954.cljs$core$IFn$_invoke$arity$variadic = G__7954__delegate;
return G__7954;
})()
,(function() { 
var G__7961__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7961 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7962__i = 0, G__7962__a = new Array(arguments.length -  2);
while (G__7962__i < G__7962__a.length) {G__7962__a[G__7962__i] = arguments[G__7962__i + 2]; ++G__7962__i;}
  _ = new cljs.core.IndexedSeq(G__7962__a,0,null);
} 
return G__7961__delegate.call(this,w,color,_);};
G__7961.cljs$lang$maxFixedArity = 2;
G__7961.cljs$lang$applyTo = (function (arglist__7963){
var w = cljs.core.first(arglist__7963);
arglist__7963 = cljs.core.next(arglist__7963);
var color = cljs.core.first(arglist__7963);
var _ = cljs.core.rest(arglist__7963);
return G__7961__delegate(w,color,_);
});
G__7961.cljs$core$IFn$_invoke$arity$variadic = G__7961__delegate;
return G__7961;
})()
,(function() { 
var G__7964__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__7964 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__7965__i = 0, G__7965__a = new Array(arguments.length -  5);
while (G__7965__i < G__7965__a.length) {G__7965__a[G__7965__i] = arguments[G__7965__i + 5]; ++G__7965__i;}
  _ = new cljs.core.IndexedSeq(G__7965__a,0,null);
} 
return G__7964__delegate.call(this,w,x,y,width,height,_);};
G__7964.cljs$lang$maxFixedArity = 5;
G__7964.cljs$lang$applyTo = (function (arglist__7966){
var w = cljs.core.first(arglist__7966);
arglist__7966 = cljs.core.next(arglist__7966);
var x = cljs.core.first(arglist__7966);
arglist__7966 = cljs.core.next(arglist__7966);
var y = cljs.core.first(arglist__7966);
arglist__7966 = cljs.core.next(arglist__7966);
var width = cljs.core.first(arglist__7966);
arglist__7966 = cljs.core.next(arglist__7966);
var height = cljs.core.first(arglist__7966);
var _ = cljs.core.rest(arglist__7966);
return G__7964__delegate(w,x,y,width,height,_);
});
G__7964.cljs$core$IFn$_invoke$arity$variadic = G__7964__delegate;
return G__7964;
})()
,(function() { 
var G__7967__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__7967 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7968__i = 0, G__7968__a = new Array(arguments.length -  1);
while (G__7968__i < G__7968__a.length) {G__7968__a[G__7968__i] = arguments[G__7968__i + 1]; ++G__7968__i;}
  _ = new cljs.core.IndexedSeq(G__7968__a,0,null);
} 
return G__7967__delegate.call(this,w,_);};
G__7967.cljs$lang$maxFixedArity = 1;
G__7967.cljs$lang$applyTo = (function (arglist__7969){
var w = cljs.core.first(arglist__7969);
var _ = cljs.core.rest(arglist__7969);
return G__7967__delegate(w,_);
});
G__7967.cljs$core$IFn$_invoke$arity$variadic = G__7967__delegate;
return G__7967;
})()
,(function() { 
var G__7970__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__7970 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__7975__i = 0, G__7975__a = new Array(arguments.length -  4);
while (G__7975__i < G__7975__a.length) {G__7975__a[G__7975__i] = arguments[G__7975__i + 4]; ++G__7975__i;}
  _ = new cljs.core.IndexedSeq(G__7975__a,0,null);
} 
return G__7970__delegate.call(this,w,x,y,r,_);};
G__7970.cljs$lang$maxFixedArity = 4;
G__7970.cljs$lang$applyTo = (function (arglist__7977){
var w = cljs.core.first(arglist__7977);
arglist__7977 = cljs.core.next(arglist__7977);
var x = cljs.core.first(arglist__7977);
arglist__7977 = cljs.core.next(arglist__7977);
var y = cljs.core.first(arglist__7977);
arglist__7977 = cljs.core.next(arglist__7977);
var r = cljs.core.first(arglist__7977);
var _ = cljs.core.rest(arglist__7977);
return G__7970__delegate(w,x,y,r,_);
});
G__7970.cljs$core$IFn$_invoke$arity$variadic = G__7970__delegate;
return G__7970;
})()
,(function() { 
var G__7980__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__7980 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7981__i = 0, G__7981__a = new Array(arguments.length -  2);
while (G__7981__i < G__7981__a.length) {G__7981__a[G__7981__i] = arguments[G__7981__i + 2]; ++G__7981__i;}
  _ = new cljs.core.IndexedSeq(G__7981__a,0,null);
} 
return G__7980__delegate.call(this,w,color,_);};
G__7980.cljs$lang$maxFixedArity = 2;
G__7980.cljs$lang$applyTo = (function (arglist__7982){
var w = cljs.core.first(arglist__7982);
arglist__7982 = cljs.core.next(arglist__7982);
var color = cljs.core.first(arglist__7982);
var _ = cljs.core.rest(arglist__7982);
return G__7980__delegate(w,color,_);
});
G__7980.cljs$core$IFn$_invoke$arity$variadic = G__7980__delegate;
return G__7980;
})()
,(function() { 
var G__7983__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__7983 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7984__i = 0, G__7984__a = new Array(arguments.length -  1);
while (G__7984__i < G__7984__a.length) {G__7984__a[G__7984__i] = arguments[G__7984__i + 1]; ++G__7984__i;}
  _ = new cljs.core.IndexedSeq(G__7984__a,0,null);
} 
return G__7983__delegate.call(this,w,_);};
G__7983.cljs$lang$maxFixedArity = 1;
G__7983.cljs$lang$applyTo = (function (arglist__7985){
var w = cljs.core.first(arglist__7985);
var _ = cljs.core.rest(arglist__7985);
return G__7983__delegate(w,_);
});
G__7983.cljs$core$IFn$_invoke$arity$variadic = G__7983__delegate;
return G__7983;
})()
,(function() { 
var G__7986__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__7986 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7987__i = 0, G__7987__a = new Array(arguments.length -  1);
while (G__7987__i < G__7987__a.length) {G__7987__a[G__7987__i] = arguments[G__7987__i + 1]; ++G__7987__i;}
  _ = new cljs.core.IndexedSeq(G__7987__a,0,null);
} 
return G__7986__delegate.call(this,w,_);};
G__7986.cljs$lang$maxFixedArity = 1;
G__7986.cljs$lang$applyTo = (function (arglist__7988){
var w = cljs.core.first(arglist__7988);
var _ = cljs.core.rest(arglist__7988);
return G__7986__delegate(w,_);
});
G__7986.cljs$core$IFn$_invoke$arity$variadic = G__7986__delegate;
return G__7986;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__7989__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__7989 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__7996__i = 0, G__7996__a = new Array(arguments.length -  2);
while (G__7996__i < G__7996__a.length) {G__7996__a[G__7996__i] = arguments[G__7996__i + 2]; ++G__7996__i;}
  ___$1 = new cljs.core.IndexedSeq(G__7996__a,0,null);
} 
return G__7989__delegate.call(this,_,name,___$1);};
G__7989.cljs$lang$maxFixedArity = 2;
G__7989.cljs$lang$applyTo = (function (arglist__7998){
var _ = cljs.core.first(arglist__7998);
arglist__7998 = cljs.core.next(arglist__7998);
var name = cljs.core.first(arglist__7998);
var ___$1 = cljs.core.rest(arglist__7998);
return G__7989__delegate(_,name,___$1);
});
G__7989.cljs$core$IFn$_invoke$arity$variadic = G__7989__delegate;
return G__7989;
})()
,"setenv",(function() { 
var G__8003__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__8003 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__8007__i = 0, G__8007__a = new Array(arguments.length -  3);
while (G__8007__i < G__8007__a.length) {G__8007__a[G__8007__i] = arguments[G__8007__i + 3]; ++G__8007__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8007__a,0,null);
} 
return G__8003__delegate.call(this,_,name,value,___$1);};
G__8003.cljs$lang$maxFixedArity = 3;
G__8003.cljs$lang$applyTo = (function (arglist__8008){
var _ = cljs.core.first(arglist__8008);
arglist__8008 = cljs.core.next(arglist__8008);
var name = cljs.core.first(arglist__8008);
arglist__8008 = cljs.core.next(arglist__8008);
var value = cljs.core.first(arglist__8008);
var ___$1 = cljs.core.rest(arglist__8008);
return G__8003__delegate(_,name,value,___$1);
});
G__8003.cljs$core$IFn$_invoke$arity$variadic = G__8003__delegate;
return G__8003;
})()
,"command_line",(function() { 
var G__8009__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__8009 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8010__i = 0, G__8010__a = new Array(arguments.length -  1);
while (G__8010__i < G__8010__a.length) {G__8010__a[G__8010__i] = arguments[G__8010__i + 1]; ++G__8010__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8010__a,0,null);
} 
return G__8009__delegate.call(this,_,___$1);};
G__8009.cljs$lang$maxFixedArity = 1;
G__8009.cljs$lang$applyTo = (function (arglist__8011){
var _ = cljs.core.first(arglist__8011);
var ___$1 = cljs.core.rest(arglist__8011);
return G__8009__delegate(_,___$1);
});
G__8009.cljs$core$IFn$_invoke$arity$variadic = G__8009__delegate;
return G__8009;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__8012__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__8012 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8013__i = 0, G__8013__a = new Array(arguments.length -  1);
while (G__8013__i < G__8013__a.length) {G__8013__a[G__8013__i] = arguments[G__8013__i + 1]; ++G__8013__i;}
  _ = new cljs.core.IndexedSeq(G__8013__a,0,null);
} 
return G__8012__delegate.call(this,c,_);};
G__8012.cljs$lang$maxFixedArity = 1;
G__8012.cljs$lang$applyTo = (function (arglist__8014){
var c = cljs.core.first(arglist__8014);
var _ = cljs.core.rest(arglist__8014);
return G__8012__delegate(c,_);
});
G__8012.cljs$core$IFn$_invoke$arity$variadic = G__8012__delegate;
return G__8012;
})()
,"to_upper",(function() { 
var G__8015__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__8015 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8020__i = 0, G__8020__a = new Array(arguments.length -  1);
while (G__8020__i < G__8020__a.length) {G__8020__a[G__8020__i] = arguments[G__8020__i + 1]; ++G__8020__i;}
  _ = new cljs.core.IndexedSeq(G__8020__a,0,null);
} 
return G__8015__delegate.call(this,c,_);};
G__8015.cljs$lang$maxFixedArity = 1;
G__8015.cljs$lang$applyTo = (function (arglist__8021){
var c = cljs.core.first(arglist__8021);
var _ = cljs.core.rest(arglist__8021);
return G__8015__delegate(c,_);
});
G__8015.cljs$core$IFn$_invoke$arity$variadic = G__8015__delegate;
return G__8015;
})()
,"to_lower",(function() { 
var G__8022__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__8022 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8023__i = 0, G__8023__a = new Array(arguments.length -  1);
while (G__8023__i < G__8023__a.length) {G__8023__a[G__8023__i] = arguments[G__8023__i + 1]; ++G__8023__i;}
  _ = new cljs.core.IndexedSeq(G__8023__a,0,null);
} 
return G__8022__delegate.call(this,c,_);};
G__8022.cljs$lang$maxFixedArity = 1;
G__8022.cljs$lang$applyTo = (function (arglist__8024){
var c = cljs.core.first(arglist__8024);
var _ = cljs.core.rest(arglist__8024);
return G__8022__delegate(c,_);
});
G__8022.cljs$core$IFn$_invoke$arity$variadic = G__8022__delegate;
return G__8022;
})()
,"compare",(function() { 
var G__8025__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__8025 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8026__i = 0, G__8026__a = new Array(arguments.length -  2);
while (G__8026__i < G__8026__a.length) {G__8026__a[G__8026__i] = arguments[G__8026__i + 2]; ++G__8026__i;}
  _ = new cljs.core.IndexedSeq(G__8026__a,0,null);
} 
return G__8025__delegate.call(this,c,other,_);};
G__8025.cljs$lang$maxFixedArity = 2;
G__8025.cljs$lang$applyTo = (function (arglist__8027){
var c = cljs.core.first(arglist__8027);
arglist__8027 = cljs.core.next(arglist__8027);
var other = cljs.core.first(arglist__8027);
var _ = cljs.core.rest(arglist__8027);
return G__8025__delegate(c,other,_);
});
G__8025.cljs$core$IFn$_invoke$arity$variadic = G__8025__delegate;
return G__8025;
})()
,"hash",(function() { 
var G__8028__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__8028 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8029__i = 0, G__8029__a = new Array(arguments.length -  1);
while (G__8029__i < G__8029__a.length) {G__8029__a[G__8029__i] = arguments[G__8029__i + 1]; ++G__8029__i;}
  _ = new cljs.core.IndexedSeq(G__8029__a,0,null);
} 
return G__8028__delegate.call(this,c,_);};
G__8028.cljs$lang$maxFixedArity = 1;
G__8028.cljs$lang$applyTo = (function (arglist__8030){
var c = cljs.core.first(arglist__8030);
var _ = cljs.core.rest(arglist__8030);
return G__8028__delegate(c,_);
});
G__8028.cljs$core$IFn$_invoke$arity$variadic = G__8028__delegate;
return G__8028;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__8032__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__8032 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8033__i = 0, G__8033__a = new Array(arguments.length -  2);
while (G__8033__i < G__8033__a.length) {G__8033__a[G__8033__i] = arguments[G__8033__i + 2]; ++G__8033__i;}
  _ = new cljs.core.IndexedSeq(G__8033__a,0,null);
} 
return G__8032__delegate.call(this,n,other,_);};
G__8032.cljs$lang$maxFixedArity = 2;
G__8032.cljs$lang$applyTo = (function (arglist__8034){
var n = cljs.core.first(arglist__8034);
arglist__8034 = cljs.core.next(arglist__8034);
var other = cljs.core.first(arglist__8034);
var _ = cljs.core.rest(arglist__8034);
return G__8032__delegate(n,other,_);
});
G__8032.cljs$core$IFn$_invoke$arity$variadic = G__8032__delegate;
return G__8032;
})()
,(function() { 
var G__8035__delegate = function (n,other,_){
return (n <= other);
};
var G__8035 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8036__i = 0, G__8036__a = new Array(arguments.length -  2);
while (G__8036__i < G__8036__a.length) {G__8036__a[G__8036__i] = arguments[G__8036__i + 2]; ++G__8036__i;}
  _ = new cljs.core.IndexedSeq(G__8036__a,0,null);
} 
return G__8035__delegate.call(this,n,other,_);};
G__8035.cljs$lang$maxFixedArity = 2;
G__8035.cljs$lang$applyTo = (function (arglist__8037){
var n = cljs.core.first(arglist__8037);
arglist__8037 = cljs.core.next(arglist__8037);
var other = cljs.core.first(arglist__8037);
var _ = cljs.core.rest(arglist__8037);
return G__8035__delegate(n,other,_);
});
G__8035.cljs$core$IFn$_invoke$arity$variadic = G__8035__delegate;
return G__8035;
})()
,(function() { 
var G__8038__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8038 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8039__i = 0, G__8039__a = new Array(arguments.length -  2);
while (G__8039__i < G__8039__a.length) {G__8039__a[G__8039__i] = arguments[G__8039__i + 2]; ++G__8039__i;}
  _ = new cljs.core.IndexedSeq(G__8039__a,0,null);
} 
return G__8038__delegate.call(this,n,other,_);};
G__8038.cljs$lang$maxFixedArity = 2;
G__8038.cljs$lang$applyTo = (function (arglist__8040){
var n = cljs.core.first(arglist__8040);
arglist__8040 = cljs.core.next(arglist__8040);
var other = cljs.core.first(arglist__8040);
var _ = cljs.core.rest(arglist__8040);
return G__8038__delegate(n,other,_);
});
G__8038.cljs$core$IFn$_invoke$arity$variadic = G__8038__delegate;
return G__8038;
})()
,(function() { 
var G__8041__delegate = function (n,other,_){
return (n < other);
};
var G__8041 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8042__i = 0, G__8042__a = new Array(arguments.length -  2);
while (G__8042__i < G__8042__a.length) {G__8042__a[G__8042__i] = arguments[G__8042__i + 2]; ++G__8042__i;}
  _ = new cljs.core.IndexedSeq(G__8042__a,0,null);
} 
return G__8041__delegate.call(this,n,other,_);};
G__8041.cljs$lang$maxFixedArity = 2;
G__8041.cljs$lang$applyTo = (function (arglist__8043){
var n = cljs.core.first(arglist__8043);
arglist__8043 = cljs.core.next(arglist__8043);
var other = cljs.core.first(arglist__8043);
var _ = cljs.core.rest(arglist__8043);
return G__8041__delegate(n,other,_);
});
G__8041.cljs$core$IFn$_invoke$arity$variadic = G__8041__delegate;
return G__8041;
})()
,(function() { 
var G__8044__delegate = function (n,other,_){
return (n + other);
};
var G__8044 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8045__i = 0, G__8045__a = new Array(arguments.length -  2);
while (G__8045__i < G__8045__a.length) {G__8045__a[G__8045__i] = arguments[G__8045__i + 2]; ++G__8045__i;}
  _ = new cljs.core.IndexedSeq(G__8045__a,0,null);
} 
return G__8044__delegate.call(this,n,other,_);};
G__8044.cljs$lang$maxFixedArity = 2;
G__8044.cljs$lang$applyTo = (function (arglist__8046){
var n = cljs.core.first(arglist__8046);
arglist__8046 = cljs.core.next(arglist__8046);
var other = cljs.core.first(arglist__8046);
var _ = cljs.core.rest(arglist__8046);
return G__8044__delegate(n,other,_);
});
G__8044.cljs$core$IFn$_invoke$arity$variadic = G__8044__delegate;
return G__8044;
})()
,(function() { 
var G__8047__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__8047 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8048__i = 0, G__8048__a = new Array(arguments.length -  1);
while (G__8048__i < G__8048__a.length) {G__8048__a[G__8048__i] = arguments[G__8048__i + 1]; ++G__8048__i;}
  _ = new cljs.core.IndexedSeq(G__8048__a,0,null);
} 
return G__8047__delegate.call(this,n,_);};
G__8047.cljs$lang$maxFixedArity = 1;
G__8047.cljs$lang$applyTo = (function (arglist__8049){
var n = cljs.core.first(arglist__8049);
var _ = cljs.core.rest(arglist__8049);
return G__8047__delegate(n,_);
});
G__8047.cljs$core$IFn$_invoke$arity$variadic = G__8047__delegate;
return G__8047;
})()
,(function() { 
var G__8050__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__8050 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8052__i = 0, G__8052__a = new Array(arguments.length -  1);
while (G__8052__i < G__8052__a.length) {G__8052__a[G__8052__i] = arguments[G__8052__i + 1]; ++G__8052__i;}
  _ = new cljs.core.IndexedSeq(G__8052__a,0,null);
} 
return G__8050__delegate.call(this,n,_);};
G__8050.cljs$lang$maxFixedArity = 1;
G__8050.cljs$lang$applyTo = (function (arglist__8053){
var n = cljs.core.first(arglist__8053);
var _ = cljs.core.rest(arglist__8053);
return G__8050__delegate(n,_);
});
G__8050.cljs$core$IFn$_invoke$arity$variadic = G__8050__delegate;
return G__8050;
})()
,(function() { 
var G__8054__delegate = function (n,other,_){
return (n > other);
};
var G__8054 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8055__i = 0, G__8055__a = new Array(arguments.length -  2);
while (G__8055__i < G__8055__a.length) {G__8055__a[G__8055__i] = arguments[G__8055__i + 2]; ++G__8055__i;}
  _ = new cljs.core.IndexedSeq(G__8055__a,0,null);
} 
return G__8054__delegate.call(this,n,other,_);};
G__8054.cljs$lang$maxFixedArity = 2;
G__8054.cljs$lang$applyTo = (function (arglist__8056){
var n = cljs.core.first(arglist__8056);
arglist__8056 = cljs.core.next(arglist__8056);
var other = cljs.core.first(arglist__8056);
var _ = cljs.core.rest(arglist__8056);
return G__8054__delegate(n,other,_);
});
G__8054.cljs$core$IFn$_invoke$arity$variadic = G__8054__delegate;
return G__8054;
})()
,(function() { 
var G__8057__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8057 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8058__i = 0, G__8058__a = new Array(arguments.length -  2);
while (G__8058__i < G__8058__a.length) {G__8058__a[G__8058__i] = arguments[G__8058__i + 2]; ++G__8058__i;}
  _ = new cljs.core.IndexedSeq(G__8058__a,0,null);
} 
return G__8057__delegate.call(this,n,other,_);};
G__8057.cljs$lang$maxFixedArity = 2;
G__8057.cljs$lang$applyTo = (function (arglist__8059){
var n = cljs.core.first(arglist__8059);
arglist__8059 = cljs.core.next(arglist__8059);
var other = cljs.core.first(arglist__8059);
var _ = cljs.core.rest(arglist__8059);
return G__8057__delegate(n,other,_);
});
G__8057.cljs$core$IFn$_invoke$arity$variadic = G__8057__delegate;
return G__8057;
})()
,(function() { 
var G__8060__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8060 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8061__i = 0, G__8061__a = new Array(arguments.length -  2);
while (G__8061__i < G__8061__a.length) {G__8061__a[G__8061__i] = arguments[G__8061__i + 2]; ++G__8061__i;}
  _ = new cljs.core.IndexedSeq(G__8061__a,0,null);
} 
return G__8060__delegate.call(this,n,other,_);};
G__8060.cljs$lang$maxFixedArity = 2;
G__8060.cljs$lang$applyTo = (function (arglist__8062){
var n = cljs.core.first(arglist__8062);
arglist__8062 = cljs.core.next(arglist__8062);
var other = cljs.core.first(arglist__8062);
var _ = cljs.core.rest(arglist__8062);
return G__8060__delegate(n,other,_);
});
G__8060.cljs$core$IFn$_invoke$arity$variadic = G__8060__delegate;
return G__8060;
})()
,(function() { 
var G__8063__delegate = function (n,other,_){
return (n - other);
};
var G__8063 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8064__i = 0, G__8064__a = new Array(arguments.length -  2);
while (G__8064__i < G__8064__a.length) {G__8064__a[G__8064__i] = arguments[G__8064__i + 2]; ++G__8064__i;}
  _ = new cljs.core.IndexedSeq(G__8064__a,0,null);
} 
return G__8063__delegate.call(this,n,other,_);};
G__8063.cljs$lang$maxFixedArity = 2;
G__8063.cljs$lang$applyTo = (function (arglist__8065){
var n = cljs.core.first(arglist__8065);
arglist__8065 = cljs.core.next(arglist__8065);
var other = cljs.core.first(arglist__8065);
var _ = cljs.core.rest(arglist__8065);
return G__8063__delegate(n,other,_);
});
G__8063.cljs$core$IFn$_invoke$arity$variadic = G__8063__delegate;
return G__8063;
})()
,(function() { 
var G__8066__delegate = function (n,other,_){
return (n * other);
};
var G__8066 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8067__i = 0, G__8067__a = new Array(arguments.length -  2);
while (G__8067__i < G__8067__a.length) {G__8067__a[G__8067__i] = arguments[G__8067__i + 2]; ++G__8067__i;}
  _ = new cljs.core.IndexedSeq(G__8067__a,0,null);
} 
return G__8066__delegate.call(this,n,other,_);};
G__8066.cljs$lang$maxFixedArity = 2;
G__8066.cljs$lang$applyTo = (function (arglist__8068){
var n = cljs.core.first(arglist__8068);
arglist__8068 = cljs.core.next(arglist__8068);
var other = cljs.core.first(arglist__8068);
var _ = cljs.core.rest(arglist__8068);
return G__8066__delegate(n,other,_);
});
G__8066.cljs$core$IFn$_invoke$arity$variadic = G__8066__delegate;
return G__8066;
})()
,(function() { 
var G__8069__delegate = function (n,other,_){
return (n / other);
};
var G__8069 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8070__i = 0, G__8070__a = new Array(arguments.length -  2);
while (G__8070__i < G__8070__a.length) {G__8070__a[G__8070__i] = arguments[G__8070__i + 2]; ++G__8070__i;}
  _ = new cljs.core.IndexedSeq(G__8070__a,0,null);
} 
return G__8069__delegate.call(this,n,other,_);};
G__8069.cljs$lang$maxFixedArity = 2;
G__8069.cljs$lang$applyTo = (function (arglist__8071){
var n = cljs.core.first(arglist__8071);
arglist__8071 = cljs.core.next(arglist__8071);
var other = cljs.core.first(arglist__8071);
var _ = cljs.core.rest(arglist__8071);
return G__8069__delegate(n,other,_);
});
G__8069.cljs$core$IFn$_invoke$arity$variadic = G__8069__delegate;
return G__8069;
})()
,(function() { 
var G__8072__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__8072 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8073__i = 0, G__8073__a = new Array(arguments.length -  1);
while (G__8073__i < G__8073__a.length) {G__8073__a[G__8073__i] = arguments[G__8073__i + 1]; ++G__8073__i;}
  _ = new cljs.core.IndexedSeq(G__8073__a,0,null);
} 
return G__8072__delegate.call(this,n,_);};
G__8072.cljs$lang$maxFixedArity = 1;
G__8072.cljs$lang$applyTo = (function (arglist__8074){
var n = cljs.core.first(arglist__8074);
var _ = cljs.core.rest(arglist__8074);
return G__8072__delegate(n,_);
});
G__8072.cljs$core$IFn$_invoke$arity$variadic = G__8072__delegate;
return G__8072;
})()
,(function() { 
var G__8075__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__8075 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8076__i = 0, G__8076__a = new Array(arguments.length -  1);
while (G__8076__i < G__8076__a.length) {G__8076__a[G__8076__i] = arguments[G__8076__i + 1]; ++G__8076__i;}
  _ = new cljs.core.IndexedSeq(G__8076__a,0,null);
} 
return G__8075__delegate.call(this,n,_);};
G__8075.cljs$lang$maxFixedArity = 1;
G__8075.cljs$lang$applyTo = (function (arglist__8077){
var n = cljs.core.first(arglist__8077);
var _ = cljs.core.rest(arglist__8077);
return G__8075__delegate(n,_);
});
G__8075.cljs$core$IFn$_invoke$arity$variadic = G__8075__delegate;
return G__8075;
})()
,(function() { 
var G__8078__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8078 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8079__i = 0, G__8079__a = new Array(arguments.length -  2);
while (G__8079__i < G__8079__a.length) {G__8079__a[G__8079__i] = arguments[G__8079__i + 2]; ++G__8079__i;}
  _ = new cljs.core.IndexedSeq(G__8079__a,0,null);
} 
return G__8078__delegate.call(this,n,other,_);};
G__8078.cljs$lang$maxFixedArity = 2;
G__8078.cljs$lang$applyTo = (function (arglist__8080){
var n = cljs.core.first(arglist__8080);
arglist__8080 = cljs.core.next(arglist__8080);
var other = cljs.core.first(arglist__8080);
var _ = cljs.core.rest(arglist__8080);
return G__8078__delegate(n,other,_);
});
G__8078.cljs$core$IFn$_invoke$arity$variadic = G__8078__delegate;
return G__8078;
})()
,(function() { 
var G__8081__delegate = function (n,other,_){
return (n >= other);
};
var G__8081 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8082__i = 0, G__8082__a = new Array(arguments.length -  2);
while (G__8082__i < G__8082__a.length) {G__8082__a[G__8082__i] = arguments[G__8082__i + 2]; ++G__8082__i;}
  _ = new cljs.core.IndexedSeq(G__8082__a,0,null);
} 
return G__8081__delegate.call(this,n,other,_);};
G__8081.cljs$lang$maxFixedArity = 2;
G__8081.cljs$lang$applyTo = (function (arglist__8083){
var n = cljs.core.first(arglist__8083);
arglist__8083 = cljs.core.next(arglist__8083);
var other = cljs.core.first(arglist__8083);
var _ = cljs.core.rest(arglist__8083);
return G__8081__delegate(n,other,_);
});
G__8081.cljs$core$IFn$_invoke$arity$variadic = G__8081__delegate;
return G__8081;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__8084__delegate = function (s,other,_){
return nex_compare(s,other);
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
var G__8087__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__8087 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8088__i = 0, G__8088__a = new Array(arguments.length -  2);
while (G__8088__i < G__8088__a.length) {G__8088__a[G__8088__i] = arguments[G__8088__i + 2]; ++G__8088__i;}
  _ = new cljs.core.IndexedSeq(G__8088__a,0,null);
} 
return G__8087__delegate.call(this,s,other,_);};
G__8087.cljs$lang$maxFixedArity = 2;
G__8087.cljs$lang$applyTo = (function (arglist__8089){
var s = cljs.core.first(arglist__8089);
arglist__8089 = cljs.core.next(arglist__8089);
var other = cljs.core.first(arglist__8089);
var _ = cljs.core.rest(arglist__8089);
return G__8087__delegate(s,other,_);
});
G__8087.cljs$core$IFn$_invoke$arity$variadic = G__8087__delegate;
return G__8087;
})()
,(function() { 
var G__8090__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
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
var G__8094__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__8094 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8095__i = 0, G__8095__a = new Array(arguments.length -  1);
while (G__8095__i < G__8095__a.length) {G__8095__a[G__8095__i] = arguments[G__8095__i + 1]; ++G__8095__i;}
  _ = new cljs.core.IndexedSeq(G__8095__a,0,null);
} 
return G__8094__delegate.call(this,s,_);};
G__8094.cljs$lang$maxFixedArity = 1;
G__8094.cljs$lang$applyTo = (function (arglist__8096){
var s = cljs.core.first(arglist__8096);
var _ = cljs.core.rest(arglist__8096);
return G__8094__delegate(s,_);
});
G__8094.cljs$core$IFn$_invoke$arity$variadic = G__8094__delegate;
return G__8094;
})()
,(function() { 
var G__8097__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__8097 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8099__i = 0, G__8099__a = new Array(arguments.length -  2);
while (G__8099__i < G__8099__a.length) {G__8099__a[G__8099__i] = arguments[G__8099__i + 2]; ++G__8099__i;}
  _ = new cljs.core.IndexedSeq(G__8099__a,0,null);
} 
return G__8097__delegate.call(this,s,prefix,_);};
G__8097.cljs$lang$maxFixedArity = 2;
G__8097.cljs$lang$applyTo = (function (arglist__8102){
var s = cljs.core.first(arglist__8102);
arglist__8102 = cljs.core.next(arglist__8102);
var prefix = cljs.core.first(arglist__8102);
var _ = cljs.core.rest(arglist__8102);
return G__8097__delegate(s,prefix,_);
});
G__8097.cljs$core$IFn$_invoke$arity$variadic = G__8097__delegate;
return G__8097;
})()
,(function() { 
var G__8104__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__8104 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8109__i = 0, G__8109__a = new Array(arguments.length -  1);
while (G__8109__i < G__8109__a.length) {G__8109__a[G__8109__i] = arguments[G__8109__i + 1]; ++G__8109__i;}
  _ = new cljs.core.IndexedSeq(G__8109__a,0,null);
} 
return G__8104__delegate.call(this,s,_);};
G__8104.cljs$lang$maxFixedArity = 1;
G__8104.cljs$lang$applyTo = (function (arglist__8110){
var s = cljs.core.first(arglist__8110);
var _ = cljs.core.rest(arglist__8110);
return G__8104__delegate(s,_);
});
G__8104.cljs$core$IFn$_invoke$arity$variadic = G__8104__delegate;
return G__8104;
})()
,(function() { 
var G__8112__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__8112 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8117__i = 0, G__8117__a = new Array(arguments.length -  2);
while (G__8117__i < G__8117__a.length) {G__8117__a[G__8117__i] = arguments[G__8117__i + 2]; ++G__8117__i;}
  _ = new cljs.core.IndexedSeq(G__8117__a,0,null);
} 
return G__8112__delegate.call(this,s,other,_);};
G__8112.cljs$lang$maxFixedArity = 2;
G__8112.cljs$lang$applyTo = (function (arglist__8119){
var s = cljs.core.first(arglist__8119);
arglist__8119 = cljs.core.next(arglist__8119);
var other = cljs.core.first(arglist__8119);
var _ = cljs.core.rest(arglist__8119);
return G__8112__delegate(s,other,_);
});
G__8112.cljs$core$IFn$_invoke$arity$variadic = G__8112__delegate;
return G__8112;
})()
,(function() { 
var G__8126__delegate = function (s,other,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(other));
};
var G__8126 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8128__i = 0, G__8128__a = new Array(arguments.length -  2);
while (G__8128__i < G__8128__a.length) {G__8128__a[G__8128__i] = arguments[G__8128__i + 2]; ++G__8128__i;}
  _ = new cljs.core.IndexedSeq(G__8128__a,0,null);
} 
return G__8126__delegate.call(this,s,other,_);};
G__8126.cljs$lang$maxFixedArity = 2;
G__8126.cljs$lang$applyTo = (function (arglist__8133){
var s = cljs.core.first(arglist__8133);
arglist__8133 = cljs.core.next(arglist__8133);
var other = cljs.core.first(arglist__8133);
var _ = cljs.core.rest(arglist__8133);
return G__8126__delegate(s,other,_);
});
G__8126.cljs$core$IFn$_invoke$arity$variadic = G__8126__delegate;
return G__8126;
})()
,(function() { 
var G__8138__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__8138 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8141__i = 0, G__8141__a = new Array(arguments.length -  1);
while (G__8141__i < G__8141__a.length) {G__8141__a[G__8141__i] = arguments[G__8141__i + 1]; ++G__8141__i;}
  _ = new cljs.core.IndexedSeq(G__8141__a,0,null);
} 
return G__8138__delegate.call(this,s,_);};
G__8138.cljs$lang$maxFixedArity = 1;
G__8138.cljs$lang$applyTo = (function (arglist__8142){
var s = cljs.core.first(arglist__8142);
var _ = cljs.core.rest(arglist__8142);
return G__8138__delegate(s,_);
});
G__8138.cljs$core$IFn$_invoke$arity$variadic = G__8138__delegate;
return G__8138;
})()
,(function() { 
var G__8143__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__8143 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8144__i = 0, G__8144__a = new Array(arguments.length -  2);
while (G__8144__i < G__8144__a.length) {G__8144__a[G__8144__i] = arguments[G__8144__i + 2]; ++G__8144__i;}
  _ = new cljs.core.IndexedSeq(G__8144__a,0,null);
} 
return G__8143__delegate.call(this,s,other,_);};
G__8143.cljs$lang$maxFixedArity = 2;
G__8143.cljs$lang$applyTo = (function (arglist__8146){
var s = cljs.core.first(arglist__8146);
arglist__8146 = cljs.core.next(arglist__8146);
var other = cljs.core.first(arglist__8146);
var _ = cljs.core.rest(arglist__8146);
return G__8143__delegate(s,other,_);
});
G__8143.cljs$core$IFn$_invoke$arity$variadic = G__8143__delegate;
return G__8143;
})()
,(function() { 
var G__8148__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__8148 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8150__i = 0, G__8150__a = new Array(arguments.length -  2);
while (G__8150__i < G__8150__a.length) {G__8150__a[G__8150__i] = arguments[G__8150__i + 2]; ++G__8150__i;}
  _ = new cljs.core.IndexedSeq(G__8150__a,0,null);
} 
return G__8148__delegate.call(this,s,substr,_);};
G__8148.cljs$lang$maxFixedArity = 2;
G__8148.cljs$lang$applyTo = (function (arglist__8155){
var s = cljs.core.first(arglist__8155);
arglist__8155 = cljs.core.next(arglist__8155);
var substr = cljs.core.first(arglist__8155);
var _ = cljs.core.rest(arglist__8155);
return G__8148__delegate(s,substr,_);
});
G__8148.cljs$core$IFn$_invoke$arity$variadic = G__8148__delegate;
return G__8148;
})()
,(function() { 
var G__8156__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8156 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8158__i = 0, G__8158__a = new Array(arguments.length -  1);
while (G__8158__i < G__8158__a.length) {G__8158__a[G__8158__i] = arguments[G__8158__i + 1]; ++G__8158__i;}
  _ = new cljs.core.IndexedSeq(G__8158__a,0,null);
} 
return G__8156__delegate.call(this,s,_);};
G__8156.cljs$lang$maxFixedArity = 1;
G__8156.cljs$lang$applyTo = (function (arglist__8159){
var s = cljs.core.first(arglist__8159);
var _ = cljs.core.rest(arglist__8159);
return G__8156__delegate(s,_);
});
G__8156.cljs$core$IFn$_invoke$arity$variadic = G__8156__delegate;
return G__8156;
})()
,(function() { 
var G__8164__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8164 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8166__i = 0, G__8166__a = new Array(arguments.length -  2);
while (G__8166__i < G__8166__a.length) {G__8166__a[G__8166__i] = arguments[G__8166__i + 2]; ++G__8166__i;}
  _ = new cljs.core.IndexedSeq(G__8166__a,0,null);
} 
return G__8164__delegate.call(this,s,other,_);};
G__8164.cljs$lang$maxFixedArity = 2;
G__8164.cljs$lang$applyTo = (function (arglist__8168){
var s = cljs.core.first(arglist__8168);
arglist__8168 = cljs.core.next(arglist__8168);
var other = cljs.core.first(arglist__8168);
var _ = cljs.core.rest(arglist__8168);
return G__8164__delegate(s,other,_);
});
G__8164.cljs$core$IFn$_invoke$arity$variadic = G__8164__delegate;
return G__8164;
})()
,(function() { 
var G__8170__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__8170 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8175__i = 0, G__8175__a = new Array(arguments.length -  1);
while (G__8175__i < G__8175__a.length) {G__8175__a[G__8175__i] = arguments[G__8175__i + 1]; ++G__8175__i;}
  _ = new cljs.core.IndexedSeq(G__8175__a,0,null);
} 
return G__8170__delegate.call(this,s,_);};
G__8170.cljs$lang$maxFixedArity = 1;
G__8170.cljs$lang$applyTo = (function (arglist__8177){
var s = cljs.core.first(arglist__8177);
var _ = cljs.core.rest(arglist__8177);
return G__8170__delegate(s,_);
});
G__8170.cljs$core$IFn$_invoke$arity$variadic = G__8170__delegate;
return G__8170;
})()
,(function() { 
var G__8178__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__8178 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8183__i = 0, G__8183__a = new Array(arguments.length -  1);
while (G__8183__i < G__8183__a.length) {G__8183__a[G__8183__i] = arguments[G__8183__i + 1]; ++G__8183__i;}
  _ = new cljs.core.IndexedSeq(G__8183__a,0,null);
} 
return G__8178__delegate.call(this,s,_);};
G__8178.cljs$lang$maxFixedArity = 1;
G__8178.cljs$lang$applyTo = (function (arglist__8184){
var s = cljs.core.first(arglist__8184);
var _ = cljs.core.rest(arglist__8184);
return G__8178__delegate(s,_);
});
G__8178.cljs$core$IFn$_invoke$arity$variadic = G__8178__delegate;
return G__8178;
})()
,(function() { 
var G__8189__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__8189 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8192__i = 0, G__8192__a = new Array(arguments.length -  3);
while (G__8192__i < G__8192__a.length) {G__8192__a[G__8192__i] = arguments[G__8192__i + 3]; ++G__8192__i;}
  _ = new cljs.core.IndexedSeq(G__8192__a,0,null);
} 
return G__8189__delegate.call(this,s,start,end,_);};
G__8189.cljs$lang$maxFixedArity = 3;
G__8189.cljs$lang$applyTo = (function (arglist__8194){
var s = cljs.core.first(arglist__8194);
arglist__8194 = cljs.core.next(arglist__8194);
var start = cljs.core.first(arglist__8194);
arglist__8194 = cljs.core.next(arglist__8194);
var end = cljs.core.first(arglist__8194);
var _ = cljs.core.rest(arglist__8194);
return G__8189__delegate(s,start,end,_);
});
G__8189.cljs$core$IFn$_invoke$arity$variadic = G__8189__delegate;
return G__8189;
})()
,(function() { 
var G__8199__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__8199 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8202__i = 0, G__8202__a = new Array(arguments.length -  2);
while (G__8202__i < G__8202__a.length) {G__8202__a[G__8202__i] = arguments[G__8202__i + 2]; ++G__8202__i;}
  _ = new cljs.core.IndexedSeq(G__8202__a,0,null);
} 
return G__8199__delegate.call(this,s,idx,_);};
G__8199.cljs$lang$maxFixedArity = 2;
G__8199.cljs$lang$applyTo = (function (arglist__8203){
var s = cljs.core.first(arglist__8203);
arglist__8203 = cljs.core.next(arglist__8203);
var idx = cljs.core.first(arglist__8203);
var _ = cljs.core.rest(arglist__8203);
return G__8199__delegate(s,idx,_);
});
G__8199.cljs$core$IFn$_invoke$arity$variadic = G__8199__delegate;
return G__8199;
})()
,(function() { 
var G__8204__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__8204 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8206__i = 0, G__8206__a = new Array(arguments.length -  3);
while (G__8206__i < G__8206__a.length) {G__8206__a[G__8206__i] = arguments[G__8206__i + 3]; ++G__8206__i;}
  _ = new cljs.core.IndexedSeq(G__8206__a,0,null);
} 
return G__8204__delegate.call(this,s,old,new$,_);};
G__8204.cljs$lang$maxFixedArity = 3;
G__8204.cljs$lang$applyTo = (function (arglist__8208){
var s = cljs.core.first(arglist__8208);
arglist__8208 = cljs.core.next(arglist__8208);
var old = cljs.core.first(arglist__8208);
arglist__8208 = cljs.core.next(arglist__8208);
var new$ = cljs.core.first(arglist__8208);
var _ = cljs.core.rest(arglist__8208);
return G__8204__delegate(s,old,new$,_);
});
G__8204.cljs$core$IFn$_invoke$arity$variadic = G__8204__delegate;
return G__8204;
})()
,(function() { 
var G__8210__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8210 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8215__i = 0, G__8215__a = new Array(arguments.length -  1);
while (G__8215__i < G__8215__a.length) {G__8215__a[G__8215__i] = arguments[G__8215__i + 1]; ++G__8215__i;}
  _ = new cljs.core.IndexedSeq(G__8215__a,0,null);
} 
return G__8210__delegate.call(this,s,_);};
G__8210.cljs$lang$maxFixedArity = 1;
G__8210.cljs$lang$applyTo = (function (arglist__8217){
var s = cljs.core.first(arglist__8217);
var _ = cljs.core.rest(arglist__8217);
return G__8210__delegate(s,_);
});
G__8210.cljs$core$IFn$_invoke$arity$variadic = G__8210__delegate;
return G__8210;
})()
,(function() { 
var G__8218__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__8218 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8223__i = 0, G__8223__a = new Array(arguments.length -  2);
while (G__8223__i < G__8223__a.length) {G__8223__a[G__8223__i] = arguments[G__8223__i + 2]; ++G__8223__i;}
  _ = new cljs.core.IndexedSeq(G__8223__a,0,null);
} 
return G__8218__delegate.call(this,s,delim,_);};
G__8218.cljs$lang$maxFixedArity = 2;
G__8218.cljs$lang$applyTo = (function (arglist__8224){
var s = cljs.core.first(arglist__8224);
arglist__8224 = cljs.core.next(arglist__8224);
var delim = cljs.core.first(arglist__8224);
var _ = cljs.core.rest(arglist__8224);
return G__8218__delegate(s,delim,_);
});
G__8218.cljs$core$IFn$_invoke$arity$variadic = G__8218__delegate;
return G__8218;
})()
,(function() { 
var G__8227__delegate = function (s,_){
return cljs.core.count(s);
};
var G__8227 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8229__i = 0, G__8229__a = new Array(arguments.length -  1);
while (G__8229__i < G__8229__a.length) {G__8229__a[G__8229__i] = arguments[G__8229__i + 1]; ++G__8229__i;}
  _ = new cljs.core.IndexedSeq(G__8229__a,0,null);
} 
return G__8227__delegate.call(this,s,_);};
G__8227.cljs$lang$maxFixedArity = 1;
G__8227.cljs$lang$applyTo = (function (arglist__8234){
var s = cljs.core.first(arglist__8234);
var _ = cljs.core.rest(arglist__8234);
return G__8227__delegate(s,_);
});
G__8227.cljs$core$IFn$_invoke$arity$variadic = G__8227__delegate;
return G__8227;
})()
,(function() { 
var G__8235__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__8235 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8237__i = 0, G__8237__a = new Array(arguments.length -  1);
while (G__8237__i < G__8237__a.length) {G__8237__a[G__8237__i] = arguments[G__8237__i + 1]; ++G__8237__i;}
  _ = new cljs.core.IndexedSeq(G__8237__a,0,null);
} 
return G__8235__delegate.call(this,s,_);};
G__8235.cljs$lang$maxFixedArity = 1;
G__8235.cljs$lang$applyTo = (function (arglist__8238){
var s = cljs.core.first(arglist__8238);
var _ = cljs.core.rest(arglist__8238);
return G__8235__delegate(s,_);
});
G__8235.cljs$core$IFn$_invoke$arity$variadic = G__8235__delegate;
return G__8235;
})()
,(function() { 
var G__8243__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__8243 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8248__i = 0, G__8248__a = new Array(arguments.length -  2);
while (G__8248__i < G__8248__a.length) {G__8248__a[G__8248__i] = arguments[G__8248__i + 2]; ++G__8248__i;}
  _ = new cljs.core.IndexedSeq(G__8248__a,0,null);
} 
return G__8243__delegate.call(this,s,ch,_);};
G__8243.cljs$lang$maxFixedArity = 2;
G__8243.cljs$lang$applyTo = (function (arglist__8249){
var s = cljs.core.first(arglist__8249);
arglist__8249 = cljs.core.next(arglist__8249);
var ch = cljs.core.first(arglist__8249);
var _ = cljs.core.rest(arglist__8249);
return G__8243__delegate(s,ch,_);
});
G__8243.cljs$core$IFn$_invoke$arity$variadic = G__8243__delegate;
return G__8243;
})()
,(function() { 
var G__8250__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8250 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8251__i = 0, G__8251__a = new Array(arguments.length -  2);
while (G__8251__i < G__8251__a.length) {G__8251__a[G__8251__i] = arguments[G__8251__i + 2]; ++G__8251__i;}
  _ = new cljs.core.IndexedSeq(G__8251__a,0,null);
} 
return G__8250__delegate.call(this,s,other,_);};
G__8250.cljs$lang$maxFixedArity = 2;
G__8250.cljs$lang$applyTo = (function (arglist__8256){
var s = cljs.core.first(arglist__8256);
arglist__8256 = cljs.core.next(arglist__8256);
var other = cljs.core.first(arglist__8256);
var _ = cljs.core.rest(arglist__8256);
return G__8250__delegate(s,other,_);
});
G__8250.cljs$core$IFn$_invoke$arity$variadic = G__8250__delegate;
return G__8250;
})()
,(function() { 
var G__8257__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__8257 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8258__i = 0, G__8258__a = new Array(arguments.length -  2);
while (G__8258__i < G__8258__a.length) {G__8258__a[G__8258__i] = arguments[G__8258__i + 2]; ++G__8258__i;}
  _ = new cljs.core.IndexedSeq(G__8258__a,0,null);
} 
return G__8257__delegate.call(this,s,other,_);};
G__8257.cljs$lang$maxFixedArity = 2;
G__8257.cljs$lang$applyTo = (function (arglist__8263){
var s = cljs.core.first(arglist__8263);
arglist__8263 = cljs.core.next(arglist__8263);
var other = cljs.core.first(arglist__8263);
var _ = cljs.core.rest(arglist__8263);
return G__8257__delegate(s,other,_);
});
G__8257.cljs$core$IFn$_invoke$arity$variadic = G__8257__delegate;
return G__8257;
})()
,(function() { 
var G__8264__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__8264 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8265__i = 0, G__8265__a = new Array(arguments.length -  2);
while (G__8265__i < G__8265__a.length) {G__8265__a[G__8265__i] = arguments[G__8265__i + 2]; ++G__8265__i;}
  _ = new cljs.core.IndexedSeq(G__8265__a,0,null);
} 
return G__8264__delegate.call(this,s,suffix,_);};
G__8264.cljs$lang$maxFixedArity = 2;
G__8264.cljs$lang$applyTo = (function (arglist__8270){
var s = cljs.core.first(arglist__8270);
arglist__8270 = cljs.core.next(arglist__8270);
var suffix = cljs.core.first(arglist__8270);
var _ = cljs.core.rest(arglist__8270);
return G__8264__delegate(s,suffix,_);
});
G__8264.cljs$core$IFn$_invoke$arity$variadic = G__8264__delegate;
return G__8264;
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
if(cljs.core.integer_QMARK_(value)){
return new cljs.core.Keyword(null,"Integer","Integer",-641373298);
} else {
if(cljs.core.float_QMARK_(value)){
return new cljs.core.Keyword(null,"Real","Real",-1266238786);
} else {
if(cljs.core.double_QMARK_(value)){
return new cljs.core.Keyword(null,"Decimal","Decimal",-1687350604);
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6491 = cljs.core.get_global_hierarchy;
return (fexpr__6491.cljs$core$IFn$_invoke$arity$0 ? fexpr__6491.cljs$core$IFn$_invoke$arity$0() : fexpr__6491.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6493_SHARP_){
return fs.existsSync(p1__6493_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6497){
var map__6498 = p__6497;
var map__6498__$1 = cljs.core.__destructure_map(map__6498);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6498__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6498__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6498__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6501){
var map__6503 = p__6501;
var map__6503__$1 = cljs.core.__destructure_map(map__6503);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6503__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6508_8327 = cljs.core.seq(imports);
var chunk__6509_8328 = null;
var count__6510_8329 = (0);
var i__6511_8330 = (0);
while(true){
if((i__6511_8330 < count__6510_8329)){
var import_node_8331 = chunk__6509_8328.cljs$core$IIndexed$_nth$arity$2(null,i__6511_8330);
if(cljs.core.map_QMARK_(import_node_8331)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8331);
} else {
}


var G__8332 = seq__6508_8327;
var G__8333 = chunk__6509_8328;
var G__8334 = count__6510_8329;
var G__8335 = (i__6511_8330 + (1));
seq__6508_8327 = G__8332;
chunk__6509_8328 = G__8333;
count__6510_8329 = G__8334;
i__6511_8330 = G__8335;
continue;
} else {
var temp__5823__auto___8340 = cljs.core.seq(seq__6508_8327);
if(temp__5823__auto___8340){
var seq__6508_8341__$1 = temp__5823__auto___8340;
if(cljs.core.chunked_seq_QMARK_(seq__6508_8341__$1)){
var c__5673__auto___8342 = cljs.core.chunk_first(seq__6508_8341__$1);
var G__8343 = cljs.core.chunk_rest(seq__6508_8341__$1);
var G__8344 = c__5673__auto___8342;
var G__8345 = cljs.core.count(c__5673__auto___8342);
var G__8346 = (0);
seq__6508_8327 = G__8343;
chunk__6509_8328 = G__8344;
count__6510_8329 = G__8345;
i__6511_8330 = G__8346;
continue;
} else {
var import_node_8351 = cljs.core.first(seq__6508_8341__$1);
if(cljs.core.map_QMARK_(import_node_8351)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8351);
} else {
}


var G__8352 = cljs.core.next(seq__6508_8341__$1);
var G__8353 = null;
var G__8354 = (0);
var G__8356 = (0);
seq__6508_8327 = G__8352;
chunk__6509_8328 = G__8353;
count__6510_8329 = G__8354;
i__6511_8330 = G__8356;
continue;
}
} else {
}
}
break;
}

var seq__6512_8360 = cljs.core.seq(interns);
var chunk__6513_8361 = null;
var count__6514_8362 = (0);
var i__6515_8363 = (0);
while(true){
if((i__6515_8363 < count__6514_8362)){
var intern_node_8364 = chunk__6513_8361.cljs$core$IIndexed$_nth$arity$2(null,i__6515_8363);
if(cljs.core.map_QMARK_(intern_node_8364)){
nex.interpreter.process_intern(ctx,intern_node_8364);
} else {
}


var G__8365 = seq__6512_8360;
var G__8366 = chunk__6513_8361;
var G__8367 = count__6514_8362;
var G__8368 = (i__6515_8363 + (1));
seq__6512_8360 = G__8365;
chunk__6513_8361 = G__8366;
count__6514_8362 = G__8367;
i__6515_8363 = G__8368;
continue;
} else {
var temp__5823__auto___8373 = cljs.core.seq(seq__6512_8360);
if(temp__5823__auto___8373){
var seq__6512_8374__$1 = temp__5823__auto___8373;
if(cljs.core.chunked_seq_QMARK_(seq__6512_8374__$1)){
var c__5673__auto___8375 = cljs.core.chunk_first(seq__6512_8374__$1);
var G__8376 = cljs.core.chunk_rest(seq__6512_8374__$1);
var G__8377 = c__5673__auto___8375;
var G__8378 = cljs.core.count(c__5673__auto___8375);
var G__8379 = (0);
seq__6512_8360 = G__8376;
chunk__6513_8361 = G__8377;
count__6514_8362 = G__8378;
i__6515_8363 = G__8379;
continue;
} else {
var intern_node_8384 = cljs.core.first(seq__6512_8374__$1);
if(cljs.core.map_QMARK_(intern_node_8384)){
nex.interpreter.process_intern(ctx,intern_node_8384);
} else {
}


var G__8385 = cljs.core.next(seq__6512_8374__$1);
var G__8386 = null;
var G__8387 = (0);
var G__8388 = (0);
seq__6512_8360 = G__8385;
chunk__6513_8361 = G__8386;
count__6514_8362 = G__8387;
i__6515_8363 = G__8388;
continue;
}
} else {
}
}
break;
}

var seq__6520_8393 = cljs.core.seq(classes);
var chunk__6521_8394 = null;
var count__6522_8395 = (0);
var i__6523_8396 = (0);
while(true){
if((i__6523_8396 < count__6522_8395)){
var class_node_8401 = chunk__6521_8394.cljs$core$IIndexed$_nth$arity$2(null,i__6523_8396);
if(cljs.core.map_QMARK_(class_node_8401)){
nex.interpreter.register_class(ctx,class_node_8401);
} else {
}


var G__8402 = seq__6520_8393;
var G__8403 = chunk__6521_8394;
var G__8404 = count__6522_8395;
var G__8405 = (i__6523_8396 + (1));
seq__6520_8393 = G__8402;
chunk__6521_8394 = G__8403;
count__6522_8395 = G__8404;
i__6523_8396 = G__8405;
continue;
} else {
var temp__5823__auto___8409 = cljs.core.seq(seq__6520_8393);
if(temp__5823__auto___8409){
var seq__6520_8410__$1 = temp__5823__auto___8409;
if(cljs.core.chunked_seq_QMARK_(seq__6520_8410__$1)){
var c__5673__auto___8415 = cljs.core.chunk_first(seq__6520_8410__$1);
var G__8416 = cljs.core.chunk_rest(seq__6520_8410__$1);
var G__8417 = c__5673__auto___8415;
var G__8418 = cljs.core.count(c__5673__auto___8415);
var G__8419 = (0);
seq__6520_8393 = G__8416;
chunk__6521_8394 = G__8417;
count__6522_8395 = G__8418;
i__6523_8396 = G__8419;
continue;
} else {
var class_node_8422 = cljs.core.first(seq__6520_8410__$1);
if(cljs.core.map_QMARK_(class_node_8422)){
nex.interpreter.register_class(ctx,class_node_8422);
} else {
}


var G__8428 = cljs.core.next(seq__6520_8410__$1);
var G__8429 = null;
var G__8430 = (0);
var G__8431 = (0);
seq__6520_8393 = G__8428;
chunk__6521_8394 = G__8429;
count__6522_8395 = G__8430;
i__6523_8396 = G__8431;
continue;
}
} else {
}
}
break;
}

var seq__6528_8433 = cljs.core.seq(functions);
var chunk__6529_8434 = null;
var count__6530_8435 = (0);
var i__6531_8436 = (0);
while(true){
if((i__6531_8436 < count__6530_8435)){
var fn_node_8439 = chunk__6529_8434.cljs$core$IIndexed$_nth$arity$2(null,i__6531_8436);
if(cljs.core.map_QMARK_(fn_node_8439)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8439);
} else {
}


var G__8444 = seq__6528_8433;
var G__8445 = chunk__6529_8434;
var G__8446 = count__6530_8435;
var G__8447 = (i__6531_8436 + (1));
seq__6528_8433 = G__8444;
chunk__6529_8434 = G__8445;
count__6530_8435 = G__8446;
i__6531_8436 = G__8447;
continue;
} else {
var temp__5823__auto___8448 = cljs.core.seq(seq__6528_8433);
if(temp__5823__auto___8448){
var seq__6528_8449__$1 = temp__5823__auto___8448;
if(cljs.core.chunked_seq_QMARK_(seq__6528_8449__$1)){
var c__5673__auto___8450 = cljs.core.chunk_first(seq__6528_8449__$1);
var G__8451 = cljs.core.chunk_rest(seq__6528_8449__$1);
var G__8452 = c__5673__auto___8450;
var G__8453 = cljs.core.count(c__5673__auto___8450);
var G__8454 = (0);
seq__6528_8433 = G__8451;
chunk__6529_8434 = G__8452;
count__6530_8435 = G__8453;
i__6531_8436 = G__8454;
continue;
} else {
var fn_node_8455 = cljs.core.first(seq__6528_8449__$1);
if(cljs.core.map_QMARK_(fn_node_8455)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8455);
} else {
}


var G__8456 = cljs.core.next(seq__6528_8449__$1);
var G__8457 = null;
var G__8458 = (0);
var G__8459 = (0);
seq__6528_8433 = G__8456;
chunk__6529_8434 = G__8457;
count__6530_8435 = G__8458;
i__6531_8436 = G__8459;
continue;
}
} else {
}
}
break;
}

var seq__6532_8460 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6533_8461 = null;
var count__6534_8462 = (0);
var i__6535_8463 = (0);
while(true){
if((i__6535_8463 < count__6534_8462)){
var stmt_node_8464 = chunk__6533_8461.cljs$core$IIndexed$_nth$arity$2(null,i__6535_8463);
if(cljs.core.map_QMARK_(stmt_node_8464)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8464);
} else {
}


var G__8465 = seq__6532_8460;
var G__8466 = chunk__6533_8461;
var G__8467 = count__6534_8462;
var G__8468 = (i__6535_8463 + (1));
seq__6532_8460 = G__8465;
chunk__6533_8461 = G__8466;
count__6534_8462 = G__8467;
i__6535_8463 = G__8468;
continue;
} else {
var temp__5823__auto___8469 = cljs.core.seq(seq__6532_8460);
if(temp__5823__auto___8469){
var seq__6532_8470__$1 = temp__5823__auto___8469;
if(cljs.core.chunked_seq_QMARK_(seq__6532_8470__$1)){
var c__5673__auto___8471 = cljs.core.chunk_first(seq__6532_8470__$1);
var G__8472 = cljs.core.chunk_rest(seq__6532_8470__$1);
var G__8473 = c__5673__auto___8471;
var G__8474 = cljs.core.count(c__5673__auto___8471);
var G__8475 = (0);
seq__6532_8460 = G__8472;
chunk__6533_8461 = G__8473;
count__6534_8462 = G__8474;
i__6535_8463 = G__8475;
continue;
} else {
var stmt_node_8477 = cljs.core.first(seq__6532_8470__$1);
if(cljs.core.map_QMARK_(stmt_node_8477)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8477);
} else {
}


var G__8478 = cljs.core.next(seq__6532_8470__$1);
var G__8479 = null;
var G__8480 = (0);
var G__8481 = (0);
seq__6532_8460 = G__8478;
chunk__6533_8461 = G__8479;
count__6534_8462 = G__8480;
i__6535_8463 = G__8481;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6544){
var map__6545 = p__6544;
var map__6545__$1 = cljs.core.__destructure_map(map__6545);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6546){
var map__6547 = p__6546;
var map__6547__$1 = cljs.core.__destructure_map(map__6547);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6547__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6547__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6552 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6553 = null;
var count__6554 = (0);
var i__6555 = (0);
while(true){
if((i__6555 < count__6554)){
var vec__6568 = chunk__6553.cljs$core$IIndexed$_nth$arity$2(null,i__6555);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6568,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8500 = seq__6552;
var G__8501 = chunk__6553;
var G__8502 = count__6554;
var G__8503 = (i__6555 + (1));
seq__6552 = G__8500;
chunk__6553 = G__8501;
count__6554 = G__8502;
i__6555 = G__8503;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6552);
if(temp__5823__auto__){
var seq__6552__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6552__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6552__$1);
var G__8508 = cljs.core.chunk_rest(seq__6552__$1);
var G__8509 = c__5673__auto__;
var G__8510 = cljs.core.count(c__5673__auto__);
var G__8511 = (0);
seq__6552 = G__8508;
chunk__6553 = G__8509;
count__6554 = G__8510;
i__6555 = G__8511;
continue;
} else {
var vec__6571 = cljs.core.first(seq__6552__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6571,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8512 = cljs.core.next(seq__6552__$1);
var G__8513 = null;
var G__8514 = (0);
var G__8515 = (0);
seq__6552 = G__8512;
chunk__6553 = G__8513;
count__6554 = G__8514;
i__6555 = G__8515;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6574 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6575 = null;
var count__6576 = (0);
var i__6577 = (0);
while(true){
if((i__6577 < count__6576)){
var vec__6588 = chunk__6575.cljs$core$IIndexed$_nth$arity$2(null,i__6577);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6588,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6588,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8521 = seq__6574;
var G__8522 = chunk__6575;
var G__8523 = count__6576;
var G__8524 = (i__6577 + (1));
seq__6574 = G__8521;
chunk__6575 = G__8522;
count__6576 = G__8523;
i__6577 = G__8524;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6574);
if(temp__5823__auto__){
var seq__6574__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6574__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6574__$1);
var G__8530 = cljs.core.chunk_rest(seq__6574__$1);
var G__8531 = c__5673__auto__;
var G__8532 = cljs.core.count(c__5673__auto__);
var G__8533 = (0);
seq__6574 = G__8530;
chunk__6575 = G__8531;
count__6576 = G__8532;
i__6577 = G__8533;
continue;
} else {
var vec__6591 = cljs.core.first(seq__6574__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6591,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6591,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8541 = cljs.core.next(seq__6574__$1);
var G__8542 = null;
var G__8543 = (0);
var G__8544 = (0);
seq__6574 = G__8541;
chunk__6575 = G__8542;
count__6576 = G__8543;
i__6577 = G__8544;
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
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),current_obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
var ___$4 = (function (){var temp__5821__auto____$1 = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(callable);
if(cljs.core.truth_(temp__5821__auto____$1)){
var rescue = temp__5821__auto____$1;
var G__6598 = new_ctx;
var G__6599 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__6600 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6598,G__6599,G__6600) : nex.interpreter.eval_body_with_rescue.call(null,G__6598,G__6599,G__6600));
} else {
var seq__6601 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__6602 = null;
var count__6603 = (0);
var i__6604 = (0);
while(true){
if((i__6604 < count__6603)){
var stmt = chunk__6602.cljs$core$IIndexed$_nth$arity$2(null,i__6604);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8561 = seq__6601;
var G__8562 = chunk__6602;
var G__8563 = count__6603;
var G__8564 = (i__6604 + (1));
seq__6601 = G__8561;
chunk__6602 = G__8562;
count__6603 = G__8563;
i__6604 = G__8564;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6601);
if(temp__5823__auto__){
var seq__6601__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6601__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6601__$1);
var G__8571 = cljs.core.chunk_rest(seq__6601__$1);
var G__8573 = c__5673__auto__;
var G__8574 = cljs.core.count(c__5673__auto__);
var G__8575 = (0);
seq__6601 = G__8571;
chunk__6602 = G__8573;
count__6603 = G__8574;
i__6604 = G__8575;
continue;
} else {
var stmt = cljs.core.first(seq__6601__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8577 = cljs.core.next(seq__6601__$1);
var G__8578 = null;
var G__8579 = (0);
var G__8580 = (0);
seq__6601 = G__8577;
chunk__6602 = G__8578;
count__6603 = G__8579;
i__6604 = G__8580;
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
}catch (e6605){var ___$5 = e6605;
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
}catch (e6610){var ___$5 = e6610;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___8601 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8601)){
var tgt_8602 = temp__5823__auto___8601;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8602,updated_obj);
}catch (e6611){var __8608__$5 = e6611;
}} else {
}

var seq__6612_8610 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__6613_8612 = null;
var count__6614_8614 = (0);
var i__6615_8616 = (0);
while(true){
if((i__6615_8616 < count__6614_8614)){
var vec__6628_8618 = chunk__6613_8612.cljs$core$IIndexed$_nth$arity$2(null,i__6615_8616);
var field_name_8619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628_8618,(0),null);
var field_val_8620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6628_8618,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8619))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8619),field_val_8620);
}catch (e6631){var __8626__$5 = e6631;
}} else {
}


var G__8627 = seq__6612_8610;
var G__8628 = chunk__6613_8612;
var G__8629 = count__6614_8614;
var G__8630 = (i__6615_8616 + (1));
seq__6612_8610 = G__8627;
chunk__6613_8612 = G__8628;
count__6614_8614 = G__8629;
i__6615_8616 = G__8630;
continue;
} else {
var temp__5823__auto___8632 = cljs.core.seq(seq__6612_8610);
if(temp__5823__auto___8632){
var seq__6612_8635__$1 = temp__5823__auto___8632;
if(cljs.core.chunked_seq_QMARK_(seq__6612_8635__$1)){
var c__5673__auto___8640 = cljs.core.chunk_first(seq__6612_8635__$1);
var G__8641 = cljs.core.chunk_rest(seq__6612_8635__$1);
var G__8642 = c__5673__auto___8640;
var G__8643 = cljs.core.count(c__5673__auto___8640);
var G__8644 = (0);
seq__6612_8610 = G__8641;
chunk__6613_8612 = G__8642;
count__6614_8614 = G__8643;
i__6615_8616 = G__8644;
continue;
} else {
var vec__6632_8647 = cljs.core.first(seq__6612_8635__$1);
var field_name_8648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_8647,(0),null);
var field_val_8649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_8647,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8648))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8648),field_val_8649);
}catch (e6635){var __8654__$5 = e6635;
}} else {
}


var G__8655 = cljs.core.next(seq__6612_8635__$1);
var G__8656 = null;
var G__8657 = (0);
var G__8658 = (0);
seq__6612_8610 = G__8655;
chunk__6613_8612 = G__8656;
count__6614_8614 = G__8657;
i__6615_8616 = G__8658;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__6642){
var map__6643 = p__6642;
var map__6643__$1 = cljs.core.__destructure_map(map__6643);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6636_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6636_SHARP_);
}),args);
if(cljs.core.truth_(target)){
var target_name = ((typeof target === 'string')?target:null);
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
var obj = (cljs.core.truth_(parent_class)?null:(cljs.core.truth_(target_name)?nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name):nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target)));
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
var _ = (function (){var seq__6654 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__6655 = null;
var count__6656 = (0);
var i__6657 = (0);
while(true){
if((i__6657 < count__6656)){
var vec__6668 = chunk__6655.cljs$core$IIndexed$_nth$arity$2(null,i__6657);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6668,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6668,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8717 = seq__6654;
var G__8718 = chunk__6655;
var G__8719 = count__6656;
var G__8720 = (i__6657 + (1));
seq__6654 = G__8717;
chunk__6655 = G__8718;
count__6656 = G__8719;
i__6657 = G__8720;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6654);
if(temp__5823__auto__){
var seq__6654__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6654__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6654__$1);
var G__8726 = cljs.core.chunk_rest(seq__6654__$1);
var G__8727 = c__5673__auto__;
var G__8728 = cljs.core.count(c__5673__auto__);
var G__8729 = (0);
seq__6654 = G__8726;
chunk__6655 = G__8727;
count__6656 = G__8728;
i__6657 = G__8729;
continue;
} else {
var vec__6671 = cljs.core.first(seq__6654__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6671,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8731 = cljs.core.next(seq__6654__$1);
var G__8732 = null;
var G__8733 = (0);
var G__8734 = (0);
seq__6654 = G__8731;
chunk__6655 = G__8732;
count__6656 = G__8733;
i__6657 = G__8734;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6674 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6675 = null;
var count__6676 = (0);
var i__6677 = (0);
while(true){
if((i__6677 < count__6676)){
var vec__6684 = chunk__6675.cljs$core$IIndexed$_nth$arity$2(null,i__6677);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6684,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6684,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8742 = seq__6674;
var G__8743 = chunk__6675;
var G__8744 = count__6676;
var G__8745 = (i__6677 + (1));
seq__6674 = G__8742;
chunk__6675 = G__8743;
count__6676 = G__8744;
i__6677 = G__8745;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6674);
if(temp__5823__auto__){
var seq__6674__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6674__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6674__$1);
var G__8752 = cljs.core.chunk_rest(seq__6674__$1);
var G__8753 = c__5673__auto__;
var G__8754 = cljs.core.count(c__5673__auto__);
var G__8755 = (0);
seq__6674 = G__8752;
chunk__6675 = G__8753;
count__6676 = G__8754;
i__6677 = G__8755;
continue;
} else {
var vec__6691 = cljs.core.first(seq__6674__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6691,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6691,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8756 = cljs.core.next(seq__6674__$1);
var G__8757 = null;
var G__8758 = (0);
var G__8759 = (0);
seq__6674 = G__8756;
chunk__6675 = G__8757;
count__6676 = G__8758;
i__6677 = G__8759;
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
var ___$2 = nex.interpreter.env_define(method_env,"result",default_result);
var ___$3 = nex.interpreter.env_define(method_env,"this",obj);
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),method_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),obj),new cljs.core.Keyword(null,"current-target","current-target",34322910),target_name),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(obj)),new cljs.core.Keyword(null,"old-values","old-values",1159632002),old_values),new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684),modified_fields);
var ___$4 = (function (){var temp__5823__auto__ = effective_require;
if(cljs.core.truth_(temp__5823__auto__)){
var require_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions(new_ctx,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})();
var ___$5 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(method_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
var G__6694 = new_ctx;
var G__6695 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__6696 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__6694,G__6695,G__6696) : nex.interpreter.eval_body_with_rescue.call(null,G__6694,G__6695,G__6696));
} else {
var seq__6697 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__6698 = null;
var count__6699 = (0);
var i__6700 = (0);
while(true){
if((i__6700 < count__6699)){
var stmt = chunk__6698.cljs$core$IIndexed$_nth$arity$2(null,i__6700);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8781 = seq__6697;
var G__8782 = chunk__6698;
var G__8783 = count__6699;
var G__8784 = (i__6700 + (1));
seq__6697 = G__8781;
chunk__6698 = G__8782;
count__6699 = G__8783;
i__6700 = G__8784;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6697);
if(temp__5823__auto__){
var seq__6697__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6697__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6697__$1);
var G__8793 = cljs.core.chunk_rest(seq__6697__$1);
var G__8794 = c__5673__auto__;
var G__8795 = cljs.core.count(c__5673__auto__);
var G__8796 = (0);
seq__6697 = G__8793;
chunk__6698 = G__8794;
count__6699 = G__8795;
i__6700 = G__8796;
continue;
} else {
var stmt = cljs.core.first(seq__6697__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8797 = cljs.core.next(seq__6697__$1);
var G__8798 = null;
var G__8799 = (0);
var G__8800 = (0);
seq__6697 = G__8797;
chunk__6698 = G__8798;
count__6699 = G__8799;
i__6700 = G__8800;
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
}catch (e6705){var ___$6 = e6705;
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
}catch (e6706){var ___$6 = e6706;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e6711){var ___$6 = e6711;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___8814 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___8814)){
var ensure_assertions_8815 = temp__5823__auto___8814;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_8815,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e6712){var e = e6712;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6641_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6641_SHARP_),method);
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
} else {
var fn_obj = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),method);
}catch (e6717){var _ = e6717;
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
}catch (e6722){var _ = e6722;
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__6723 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__6724 = null;
var count__6725 = (0);
var i__6726 = (0);
while(true){
if((i__6726 < count__6725)){
var vec__6737 = chunk__6724.cljs$core$IIndexed$_nth$arity$2(null,i__6726);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6737,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6737,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8861 = seq__6723;
var G__8862 = chunk__6724;
var G__8863 = count__6725;
var G__8864 = (i__6726 + (1));
seq__6723 = G__8861;
chunk__6724 = G__8862;
count__6725 = G__8863;
i__6726 = G__8864;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6723);
if(temp__5823__auto__){
var seq__6723__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6723__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6723__$1);
var G__8874 = cljs.core.chunk_rest(seq__6723__$1);
var G__8875 = c__5673__auto__;
var G__8876 = cljs.core.count(c__5673__auto__);
var G__8877 = (0);
seq__6723 = G__8874;
chunk__6724 = G__8875;
count__6725 = G__8876;
i__6726 = G__8877;
continue;
} else {
var vec__6740 = cljs.core.first(seq__6723__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6740,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6740,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8884 = cljs.core.next(seq__6723__$1);
var G__8885 = null;
var G__8886 = (0);
var G__8887 = (0);
seq__6723 = G__8884;
chunk__6724 = G__8885;
count__6725 = G__8886;
i__6726 = G__8887;
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
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"this","this",-611633625),(function (ctx,_){
return new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__6747){
var map__6748 = p__6747;
var map__6748__$1 = cljs.core.__destructure_map(map__6748);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"value","value",305978217));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___8901 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8901)){
var mf_8906 = temp__5823__auto___8901;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8906,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__6753){
var map__6754 = p__6753;
var map__6754__$1 = cljs.core.__destructure_map(map__6754);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6754__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6754__$1,new cljs.core.Keyword(null,"value","value",305978217));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__6755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6755.cljs$core$IFn$_invoke$arity$1 ? fexpr__6755.cljs$core$IFn$_invoke$arity$1(target) : fexpr__6755.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__6756){
var map__6757 = p__6756;
var map__6757__$1 = cljs.core.__destructure_map(map__6757);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6757__$1,new cljs.core.Keyword(null,"value","value",305978217));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__6758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__6758.cljs$core$IFn$_invoke$arity$1 ? fexpr__6758.cljs$core$IFn$_invoke$arity$1(name) : fexpr__6758.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6759_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6759_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__6764){
var map__6765 = p__6764;
var map__6765__$1 = cljs.core.__destructure_map(map__6765);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6765__$1,new cljs.core.Keyword(null,"value","value",305978217));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"value","value",305978217),val], null));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"retry","retry",-614012896),(function (_ctx,_node){
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

try{var seq__6780_8933 = cljs.core.seq(body);
var chunk__6781_8934 = null;
var count__6782_8935 = (0);
var i__6783_8936 = (0);
while(true){
if((i__6783_8936 < count__6782_8935)){
var stmt_8941 = chunk__6781_8934.cljs$core$IIndexed$_nth$arity$2(null,i__6783_8936);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8941);


var G__8942 = seq__6780_8933;
var G__8943 = chunk__6781_8934;
var G__8944 = count__6782_8935;
var G__8945 = (i__6783_8936 + (1));
seq__6780_8933 = G__8942;
chunk__6781_8934 = G__8943;
count__6782_8935 = G__8944;
i__6783_8936 = G__8945;
continue;
} else {
var temp__5823__auto___8950 = cljs.core.seq(seq__6780_8933);
if(temp__5823__auto___8950){
var seq__6780_8951__$1 = temp__5823__auto___8950;
if(cljs.core.chunked_seq_QMARK_(seq__6780_8951__$1)){
var c__5673__auto___8953 = cljs.core.chunk_first(seq__6780_8951__$1);
var G__8954 = cljs.core.chunk_rest(seq__6780_8951__$1);
var G__8955 = c__5673__auto___8953;
var G__8956 = cljs.core.count(c__5673__auto___8953);
var G__8957 = (0);
seq__6780_8933 = G__8954;
chunk__6781_8934 = G__8955;
count__6782_8935 = G__8956;
i__6783_8936 = G__8957;
continue;
} else {
var stmt_8958 = cljs.core.first(seq__6780_8951__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_8958);


var G__8959 = cljs.core.next(seq__6780_8951__$1);
var G__8960 = null;
var G__8961 = (0);
var G__8962 = (0);
seq__6780_8933 = G__8959;
chunk__6781_8934 = G__8960;
count__6782_8935 = G__8961;
i__6783_8936 = G__8962;
continue;
}
} else {
}
}
break;
}
}catch (e6766){var e_8967 = e6766;
if((((e_8967 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8967)))))){
throw e_8967;
} else {
var exc_value_8972 = (((((e_8967 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8967))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_8967)):e_8967.message);
var rescue_env_8973 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __8974 = nex.interpreter.env_define(rescue_env_8973,"exception",exc_value_8972);
var rescue_ctx_8975 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_8973);
try{var seq__6772_8985 = cljs.core.seq(rescue);
var chunk__6773_8986 = null;
var count__6774_8987 = (0);
var i__6775_8988 = (0);
while(true){
if((i__6775_8988 < count__6774_8987)){
var stmt_8993 = chunk__6773_8986.cljs$core$IIndexed$_nth$arity$2(null,i__6775_8988);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8975,stmt_8993);


var G__8994 = seq__6772_8985;
var G__8995 = chunk__6773_8986;
var G__8996 = count__6774_8987;
var G__8997 = (i__6775_8988 + (1));
seq__6772_8985 = G__8994;
chunk__6773_8986 = G__8995;
count__6774_8987 = G__8996;
i__6775_8988 = G__8997;
continue;
} else {
var temp__5823__auto___9002 = cljs.core.seq(seq__6772_8985);
if(temp__5823__auto___9002){
var seq__6772_9003__$1 = temp__5823__auto___9002;
if(cljs.core.chunked_seq_QMARK_(seq__6772_9003__$1)){
var c__5673__auto___9005 = cljs.core.chunk_first(seq__6772_9003__$1);
var G__9007 = cljs.core.chunk_rest(seq__6772_9003__$1);
var G__9008 = c__5673__auto___9005;
var G__9009 = cljs.core.count(c__5673__auto___9005);
var G__9010 = (0);
seq__6772_8985 = G__9007;
chunk__6773_8986 = G__9008;
count__6774_8987 = G__9009;
i__6775_8988 = G__9010;
continue;
} else {
var stmt_9014 = cljs.core.first(seq__6772_9003__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_8975,stmt_9014);


var G__9020 = cljs.core.next(seq__6772_9003__$1);
var G__9021 = null;
var G__9022 = (0);
var G__9023 = (0);
seq__6772_8985 = G__9020;
chunk__6773_8986 = G__9021;
count__6774_8987 = G__9022;
i__6775_8988 = G__9023;
continue;
}
} else {
}
}
break;
}

throw e_8967;
}catch (e6771){var re_9024 = e6771;
if((((re_9024 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_9024)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_9024;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__6789){
var map__6790 = p__6789;
var map__6790__$1 = cljs.core.__destructure_map(map__6790);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6790__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6790__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6784_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__6784_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__6792){
var map__6793 = p__6792;
var map__6793__$1 = cljs.core.__destructure_map(map__6793);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__6798){
var map__6800 = p__6798;
var map__6800__$1 = cljs.core.__destructure_map(map__6800);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6800__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6800__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6800__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6800__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6795_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6795_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6796_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6796_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6797_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6797_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__6803){
var map__6804 = p__6803;
var map__6804__$1 = cljs.core.__destructure_map(map__6804);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__6812 = cljs.core.first(cs);
var map__6812__$1 = cljs.core.__destructure_map(map__6812);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__6812,map__6812__$1,values,body,val,map__6804,map__6804__$1,expr,clauses,else$){
return (function (p1__6802_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6802_SHARP_));
});})(cs,map__6812,map__6812__$1,values,body,val,map__6804,map__6804__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__9069 = cljs.core.rest(cs);
cs = G__9069;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__6819){
var map__6820 = p__6819;
var map__6820__$1 = cljs.core.__destructure_map(map__6820);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var seq__6821_9079 = cljs.core.seq(init);
var chunk__6822_9080 = null;
var count__6823_9081 = (0);
var i__6824_9082 = (0);
while(true){
if((i__6824_9082 < count__6823_9081)){
var stmt_9087 = chunk__6822_9080.cljs$core$IIndexed$_nth$arity$2(null,i__6824_9082);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9087);


var G__9088 = seq__6821_9079;
var G__9089 = chunk__6822_9080;
var G__9090 = count__6823_9081;
var G__9091 = (i__6824_9082 + (1));
seq__6821_9079 = G__9088;
chunk__6822_9080 = G__9089;
count__6823_9081 = G__9090;
i__6824_9082 = G__9091;
continue;
} else {
var temp__5823__auto___9092 = cljs.core.seq(seq__6821_9079);
if(temp__5823__auto___9092){
var seq__6821_9093__$1 = temp__5823__auto___9092;
if(cljs.core.chunked_seq_QMARK_(seq__6821_9093__$1)){
var c__5673__auto___9094 = cljs.core.chunk_first(seq__6821_9093__$1);
var G__9095 = cljs.core.chunk_rest(seq__6821_9093__$1);
var G__9096 = c__5673__auto___9094;
var G__9098 = cljs.core.count(c__5673__auto___9094);
var G__9099 = (0);
seq__6821_9079 = G__9095;
chunk__6822_9080 = G__9096;
count__6823_9081 = G__9098;
i__6824_9082 = G__9099;
continue;
} else {
var stmt_9100 = cljs.core.first(seq__6821_9093__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9100);


var G__9105 = cljs.core.next(seq__6821_9093__$1);
var G__9106 = null;
var G__9107 = (0);
var G__9108 = (0);
seq__6821_9079 = G__9105;
chunk__6822_9080 = G__9106;
count__6823_9081 = G__9107;
i__6824_9082 = G__9108;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6820,map__6820__$1,init,invariant,variant,until,body){
return (function (p1__6818_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__6818_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__6820,map__6820__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__9123 = result;
var G__9124 = curr_variant;
var G__9125 = (iteration + (1));
last_result = G__9123;
prev_variant = G__9124;
iteration = G__9125;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__6833){
var map__6834 = p__6833;
var map__6834__$1 = cljs.core.__destructure_map(map__6834);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6834__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__6835){
var map__6836 = p__6835;
var map__6836__$1 = cljs.core.__destructure_map(map__6836);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6836__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6836__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__6841){
var map__6842 = p__6841;
var map__6842__$1 = cljs.core.__destructure_map(map__6842);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6842__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__6843){
var map__6844 = p__6843;
var map__6844__$1 = cljs.core.__destructure_map(map__6844);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6844__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__6845){
var map__6846 = p__6845;
var map__6846__$1 = cljs.core.__destructure_map(map__6846);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6846__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__6847){
var map__6848 = p__6847;
var map__6848__$1 = cljs.core.__destructure_map(map__6848);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6848__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__6849){
var map__6850 = p__6849;
var map__6850__$1 = cljs.core.__destructure_map(map__6850);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6850__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__6856){
var map__6857 = p__6856;
var map__6857__$1 = cljs.core.__destructure_map(map__6857);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6857__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6855_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6855_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__6858){
var map__6859 = p__6858;
var map__6859__$1 = cljs.core.__destructure_map(map__6859);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6859__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__6860){
var map__6861 = p__6860;
var map__6861__$1 = cljs.core.__destructure_map(map__6861);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6861__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6861__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__6862){
var map__6863 = p__6862;
var map__6863__$1 = cljs.core.__destructure_map(map__6863);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6863__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6863__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__6868){
var map__6869 = p__6868;
var map__6869__$1 = cljs.core.__destructure_map(map__6869);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6869__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e6870){var _ = e6870;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return val;
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"current-object","current-object",557461022).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5821__auto__)){
var current_obj = temp__5821__auto__;
var class_def = nex.interpreter.lookup_class(ctx,new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(current_obj));
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
}));
/**
 * Get all fields from a class and its parents
 */
nex.interpreter.get_all_fields = (function nex$interpreter$get_all_fields(ctx,class_def){
var parent_fields = (function (){var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (parent_info){
var G__6872 = ctx;
var G__6873 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__6872,G__6873) : nex.interpreter.get_all_fields.call(null,G__6872,G__6873));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6871_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6871_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6878_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6878_SHARP_),constructor_name);
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
return cljs.core.some((function (p__6879){
var map__6880 = p__6879;
var map__6880__$1 = cljs.core.__destructure_map(map__6880);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6880__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__6891){
var map__6892 = p__6891;
var map__6892__$1 = cljs.core.__destructure_map(map__6892);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6892__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6892__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6892__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6892__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__6897 = class_name;
switch (G__6897) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6885_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6885_SHARP_);
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
case "Window":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6886_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6886_SHARP_);
}),args);
var G__6898 = constructor$;
switch (G__6898) {
case "with_title":
var G__6899 = cljs.core.count(arg_values);
switch (G__6899) {
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
var G__6900 = cljs.core.count(arg_values);
switch (G__6900) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6887_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6887_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6888_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6888_SHARP_);
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
var ___$1 = (function (){var seq__6905 = cljs.core.seq(initial_field_map);
var chunk__6906 = null;
var count__6907 = (0);
var i__6908 = (0);
while(true){
if((i__6908 < count__6907)){
var vec__6918 = chunk__6906.cljs$core$IIndexed$_nth$arity$2(null,i__6908);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6918,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6918,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__9269 = seq__6905;
var G__9270 = chunk__6906;
var G__9271 = count__6907;
var G__9272 = (i__6908 + (1));
seq__6905 = G__9269;
chunk__6906 = G__9270;
count__6907 = G__9271;
i__6908 = G__9272;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6905);
if(temp__5823__auto__){
var seq__6905__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6905__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6905__$1);
var G__9273 = cljs.core.chunk_rest(seq__6905__$1);
var G__9274 = c__5673__auto__;
var G__9275 = cljs.core.count(c__5673__auto__);
var G__9276 = (0);
seq__6905 = G__9273;
chunk__6906 = G__9274;
count__6907 = G__9275;
i__6908 = G__9276;
continue;
} else {
var vec__6921 = cljs.core.first(seq__6905__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6921,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6921,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__9277 = cljs.core.next(seq__6905__$1);
var G__9278 = null;
var G__9279 = (0);
var G__9280 = (0);
seq__6905 = G__9277;
chunk__6906 = G__9278;
count__6907 = G__9279;
i__6908 = G__9280;
continue;
}
} else {
return null;
}
}
break;
}
})();
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_def);
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6889_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__6889_SHARP_);
}),args);
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__6924 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6925 = null;
var count__6926 = (0);
var i__6927 = (0);
while(true){
if((i__6927 < count__6926)){
var vec__6939 = chunk__6925.cljs$core$IIndexed$_nth$arity$2(null,i__6927);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6939,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6939,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__9293 = seq__6924;
var G__9294 = chunk__6925;
var G__9295 = count__6926;
var G__9296 = (i__6927 + (1));
seq__6924 = G__9293;
chunk__6925 = G__9294;
count__6926 = G__9295;
i__6927 = G__9296;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6924);
if(temp__5823__auto__){
var seq__6924__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6924__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6924__$1);
var G__9297 = cljs.core.chunk_rest(seq__6924__$1);
var G__9298 = c__5673__auto__;
var G__9299 = cljs.core.count(c__5673__auto__);
var G__9300 = (0);
seq__6924 = G__9297;
chunk__6925 = G__9298;
count__6926 = G__9299;
i__6927 = G__9300;
continue;
} else {
var vec__6942 = cljs.core.first(seq__6924__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6942,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__9309 = cljs.core.next(seq__6924__$1);
var G__9310 = null;
var G__9311 = (0);
var G__9312 = (0);
seq__6924 = G__9309;
chunk__6925 = G__9310;
count__6926 = G__9311;
i__6927 = G__9312;
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
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),ctor_env),new cljs.core.Keyword(null,"current-object","current-object",557461022),temp_obj),new cljs.core.Keyword(null,"current-class-name","current-class-name",-167757297),effective_class_name);
var ___$3 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5823__auto__)){
var require_assertions = temp__5823__auto__;
return nex.interpreter.check_assertions(new_ctx,require_assertions,nex.interpreter.Precondition);
} else {
return null;
}
})();
var ___$4 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(ctor_def);
if(cljs.core.truth_(temp__5821__auto__)){
var rescue = temp__5821__auto__;
return nex.interpreter.eval_body_with_rescue(new_ctx,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def),rescue);
} else {
var seq__6946 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__6947 = null;
var count__6948 = (0);
var i__6949 = (0);
while(true){
if((i__6949 < count__6948)){
var stmt = chunk__6947.cljs$core$IIndexed$_nth$arity$2(null,i__6949);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__9313 = seq__6946;
var G__9314 = chunk__6947;
var G__9315 = count__6948;
var G__9316 = (i__6949 + (1));
seq__6946 = G__9313;
chunk__6947 = G__9314;
count__6948 = G__9315;
i__6949 = G__9316;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6946);
if(temp__5823__auto__){
var seq__6946__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6946__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6946__$1);
var G__9317 = cljs.core.chunk_rest(seq__6946__$1);
var G__9318 = c__5673__auto__;
var G__9319 = cljs.core.count(c__5673__auto__);
var G__9320 = (0);
seq__6946 = G__9317;
chunk__6947 = G__9318;
count__6948 = G__9319;
i__6949 = G__9320;
continue;
} else {
var stmt = cljs.core.first(seq__6946__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__9321 = cljs.core.next(seq__6946__$1);
var G__9322 = null;
var G__9323 = (0);
var G__9324 = (0);
seq__6946 = G__9321;
chunk__6947 = G__9322;
count__6948 = G__9323;
i__6949 = G__9324;
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
}catch (e6952){var ___$5 = e6952;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,field_key,val);
} else {
return m;
}
}),initial_field_map,all_fields);
var ___$5 = (function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(ctor_def);
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
var inv_env_9333 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __9334__$1 = (function (){var seq__6953 = cljs.core.seq(final_field_map);
var chunk__6954 = null;
var count__6955 = (0);
var i__6956 = (0);
while(true){
if((i__6956 < count__6955)){
var vec__6963 = chunk__6954.cljs$core$IIndexed$_nth$arity$2(null,i__6956);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6963,(1),null);
nex.interpreter.env_define(inv_env_9333,cljs.core.name(field_name),field_val);


var G__9345 = seq__6953;
var G__9346 = chunk__6954;
var G__9347 = count__6955;
var G__9348 = (i__6956 + (1));
seq__6953 = G__9345;
chunk__6954 = G__9346;
count__6955 = G__9347;
i__6956 = G__9348;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6953);
if(temp__5823__auto__){
var seq__6953__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6953__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6953__$1);
var G__9357 = cljs.core.chunk_rest(seq__6953__$1);
var G__9358 = c__5673__auto__;
var G__9359 = cljs.core.count(c__5673__auto__);
var G__9360 = (0);
seq__6953 = G__9357;
chunk__6954 = G__9358;
count__6955 = G__9359;
i__6956 = G__9360;
continue;
} else {
var vec__6966 = cljs.core.first(seq__6953__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6966,(1),null);
nex.interpreter.env_define(inv_env_9333,cljs.core.name(field_name),field_val);


var G__9362 = cljs.core.next(seq__6953__$1);
var G__9363 = null;
var G__9364 = (0);
var G__9365 = (0);
seq__6953 = G__9362;
chunk__6954 = G__9363;
count__6955 = G__9364;
i__6956 = G__9365;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_9335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_9333);
nex.interpreter.check_class_invariant(inv_ctx_9335,class_def);

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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__6973){
var map__6974 = p__6973;
var map__6974__$1 = cljs.core.__destructure_map(map__6974);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6974__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__6975 = cljs.core.seq(old_values);
var chunk__6976 = null;
var count__6977 = (0);
var i__6978 = (0);
while(true){
if((i__6978 < count__6977)){
var vec__6989 = chunk__6976.cljs$core$IIndexed$_nth$arity$2(null,i__6978);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6989,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6989,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__9394 = seq__6975;
var G__9395 = chunk__6976;
var G__9396 = count__6977;
var G__9397 = (i__6978 + (1));
seq__6975 = G__9394;
chunk__6976 = G__9395;
count__6977 = G__9396;
i__6978 = G__9397;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6975);
if(temp__5823__auto__){
var seq__6975__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6975__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6975__$1);
var G__9404 = cljs.core.chunk_rest(seq__6975__$1);
var G__9405 = c__5673__auto__;
var G__9406 = cljs.core.count(c__5673__auto__);
var G__9407 = (0);
seq__6975 = G__9404;
chunk__6976 = G__9405;
count__6977 = G__9406;
i__6978 = G__9407;
continue;
} else {
var vec__6995 = cljs.core.first(seq__6975__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6995,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6995,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__9416 = cljs.core.next(seq__6975__$1);
var G__9417 = null;
var G__9418 = (0);
var G__9419 = (0);
seq__6975 = G__9416;
chunk__6976 = G__9417;
count__6977 = G__9418;
i__6978 = G__9419;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__7001){
var map__7002 = p__7001;
var map__7002__$1 = cljs.core.__destructure_map(map__7002);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7002__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7002__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
var seq__7013_9445 = cljs.core.seq(output);
var chunk__7014_9446 = null;
var count__7015_9447 = (0);
var i__7016_9448 = (0);
while(true){
if((i__7016_9448 < count__7015_9447)){
var line_9453 = chunk__7014_9446.cljs$core$IIndexed$_nth$arity$2(null,i__7016_9448);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_9453], 0));


var G__9458 = seq__7013_9445;
var G__9459 = chunk__7014_9446;
var G__9460 = count__7015_9447;
var G__9461 = (i__7016_9448 + (1));
seq__7013_9445 = G__9458;
chunk__7014_9446 = G__9459;
count__7015_9447 = G__9460;
i__7016_9448 = G__9461;
continue;
} else {
var temp__5823__auto___9462 = cljs.core.seq(seq__7013_9445);
if(temp__5823__auto___9462){
var seq__7013_9463__$1 = temp__5823__auto___9462;
if(cljs.core.chunked_seq_QMARK_(seq__7013_9463__$1)){
var c__5673__auto___9464 = cljs.core.chunk_first(seq__7013_9463__$1);
var G__9465 = cljs.core.chunk_rest(seq__7013_9463__$1);
var G__9466 = c__5673__auto___9464;
var G__9467 = cljs.core.count(c__5673__auto___9464);
var G__9468 = (0);
seq__7013_9445 = G__9465;
chunk__7014_9446 = G__9466;
count__7015_9447 = G__9467;
i__7016_9448 = G__9468;
continue;
} else {
var line_9469 = cljs.core.first(seq__7013_9463__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_9469], 0));


var G__9470 = cljs.core.next(seq__7013_9463__$1);
var G__9471 = null;
var G__9472 = (0);
var G__9473 = (0);
seq__7013_9445 = G__9470;
chunk__7014_9446 = G__9471;
count__7015_9447 = G__9472;
i__7016_9448 = G__9473;
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
