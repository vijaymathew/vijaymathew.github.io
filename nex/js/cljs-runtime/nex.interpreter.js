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

(nex.interpreter.Environment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6196,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6201 = k6196;
var G__6201__$1 = (((G__6201 instanceof cljs.core.Keyword))?G__6201.fqn:null);
switch (G__6201__$1) {
case "bindings":
return self__.bindings;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6196,else__5451__auto__);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6202){
var vec__6203 = p__6202;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6203,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6203,(1),null);
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

(nex.interpreter.Environment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6195){
var self__ = this;
var G__6195__$1 = this;
return (new cljs.core.RecordIter((0),G__6195__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Environment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6197,other6198){
var self__ = this;
var this6197__$1 = this;
return (((!((other6198 == null)))) && ((((this6197__$1.constructor === other6198.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6197__$1.bindings,other6198.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6197__$1.parent,other6198.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6197__$1.__extmap,other6198.__extmap)))))))));
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

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6196){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6229 = k6196;
var G__6229__$1 = (((G__6229 instanceof cljs.core.Keyword))?G__6229.fqn:null);
switch (G__6229__$1) {
case "bindings":
case "parent":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6196);

}
}));

(nex.interpreter.Environment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6195){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6234 = cljs.core.keyword_identical_QMARK_;
var expr__6235 = k__5457__auto__;
if(cljs.core.truth_((pred__6234.cljs$core$IFn$_invoke$arity$2 ? pred__6234.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6235) : pred__6234.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__6235)))){
return (new nex.interpreter.Environment(G__6195,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6234.cljs$core$IFn$_invoke$arity$2 ? pred__6234.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6235) : pred__6234.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__6235)))){
return (new nex.interpreter.Environment(self__.bindings,G__6195,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Environment(self__.bindings,self__.parent,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6195),null));
}
}
}));

(nex.interpreter.Environment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null))], null),self__.__extmap));
}));

(nex.interpreter.Environment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6195){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Environment(self__.bindings,self__.parent,G__6195,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Environment = (function nex$interpreter$map__GT_Environment(G__6200){
var extmap__5490__auto__ = (function (){var G__6248 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6200,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent","parent",-878878779)], 0));
if(cljs.core.record_QMARK_(G__6200)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6248);
} else {
return G__6248;
}
})();
return (new nex.interpreter.Environment(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__6200),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__6200),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new environment, optionally with a parent scope.
 */
nex.interpreter.make_env = (function nex$interpreter$make_env(var_args){
var G__6258 = arguments.length;
switch (G__6258) {
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

(nex.interpreter.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6274,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6282 = k6274;
var G__6282__$1 = (((G__6282 instanceof cljs.core.Keyword))?G__6282.fqn:null);
switch (G__6282__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6274,else__5451__auto__);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6283){
var vec__6284 = p__6283;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6284,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6284,(1),null);
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

(nex.interpreter.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6273){
var self__ = this;
var G__6273__$1 = this;
return (new cljs.core.RecordIter((0),G__6273__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6275,other6276){
var self__ = this;
var this6275__$1 = this;
return (((!((other6276 == null)))) && ((((this6275__$1.constructor === other6276.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.classes,other6276.classes)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.globals,other6276.globals)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.current_env,other6276.current_env)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.output,other6276.output)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.imports,other6276.imports)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.specialized_classes,other6276.specialized_classes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6275__$1.__extmap,other6276.__extmap)))))))))))))))));
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

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6274){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6310 = k6274;
var G__6310__$1 = (((G__6310 instanceof cljs.core.Keyword))?G__6310.fqn:null);
switch (G__6310__$1) {
case "classes":
case "globals":
case "current-env":
case "output":
case "imports":
case "specialized-classes":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6274);

}
}));

(nex.interpreter.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6273){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6315 = cljs.core.keyword_identical_QMARK_;
var expr__6316 = k__5457__auto__;
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510),expr__6316)))){
return (new nex.interpreter.Context(G__6273,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"globals","globals",1713542270),expr__6316)))){
return (new nex.interpreter.Context(self__.classes,G__6273,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),expr__6316)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,G__6273,self__.output,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output","output",-1105869043),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),expr__6316)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,G__6273,self__.imports,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394),expr__6316)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,G__6273,self__.specialized_classes,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6315.cljs$core$IFn$_invoke$arity$2 ? pred__6315.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6316) : pred__6315.call(null,new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190),expr__6316)))){
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,G__6273,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6273),null));
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

(nex.interpreter.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6273){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.Context(self__.classes,self__.globals,self__.current_env,self__.output,self__.imports,self__.specialized_classes,G__6273,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_Context = (function nex$interpreter$map__GT_Context(G__6281){
var extmap__5490__auto__ = (function (){var G__6339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6281,new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"globals","globals",1713542270),new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"imports","imports",-1249933394),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190)], 0));
if(cljs.core.record_QMARK_(G__6281)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6339);
} else {
return G__6339;
}
})();
return (new nex.interpreter.Context(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(G__6281),new cljs.core.Keyword(null,"globals","globals",1713542270).cljs$core$IFn$_invoke$arity$1(G__6281),new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(G__6281),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(G__6281),new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(G__6281),new cljs.core.Keyword(null,"specialized-classes","specialized-classes",1686124190).cljs$core$IFn$_invoke$arity$1(G__6281),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__6361_7663 = ctx;
var G__6362_7664 = nex.interpreter.build_function_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6361_7663,G__6362_7664) : nex.interpreter.register_class.call(null,G__6361_7663,G__6362_7664));

var G__6363_7665 = ctx;
var G__6364_7666 = nex.interpreter.build_cursor_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6363_7665,G__6364_7666) : nex.interpreter.register_class.call(null,G__6363_7665,G__6364_7666));

var G__6365_7671 = ctx;
var G__6366_7672 = nex.interpreter.build_comparable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6365_7671,G__6366_7672) : nex.interpreter.register_class.call(null,G__6365_7671,G__6366_7672));

var G__6368_7673 = ctx;
var G__6369_7674 = nex.interpreter.build_hashable_base_class();
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6368_7673,G__6369_7674) : nex.interpreter.register_class.call(null,G__6368_7673,G__6369_7674));

var seq__6373_7675 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6374_7676 = null;
var count__6375_7677 = (0);
var i__6376_7678 = (0);
while(true){
if((i__6376_7678 < count__6375_7677)){
var scalar_7679 = chunk__6374_7676.cljs$core$IIndexed$_nth$arity$2(null,i__6376_7678);
var G__6384_7680 = ctx;
var G__6385_7681 = nex.interpreter.build_builtin_scalar_class(scalar_7679);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6384_7680,G__6385_7681) : nex.interpreter.register_class.call(null,G__6384_7680,G__6385_7681));


var G__7682 = seq__6373_7675;
var G__7683 = chunk__6374_7676;
var G__7684 = count__6375_7677;
var G__7685 = (i__6376_7678 + (1));
seq__6373_7675 = G__7682;
chunk__6374_7676 = G__7683;
count__6375_7677 = G__7684;
i__6376_7678 = G__7685;
continue;
} else {
var temp__5823__auto___7686 = cljs.core.seq(seq__6373_7675);
if(temp__5823__auto___7686){
var seq__6373_7687__$1 = temp__5823__auto___7686;
if(cljs.core.chunked_seq_QMARK_(seq__6373_7687__$1)){
var c__5673__auto___7688 = cljs.core.chunk_first(seq__6373_7687__$1);
var G__7689 = cljs.core.chunk_rest(seq__6373_7687__$1);
var G__7690 = c__5673__auto___7688;
var G__7691 = cljs.core.count(c__5673__auto___7688);
var G__7692 = (0);
seq__6373_7675 = G__7689;
chunk__6374_7676 = G__7690;
count__6375_7677 = G__7691;
i__6376_7678 = G__7692;
continue;
} else {
var scalar_7693 = cljs.core.first(seq__6373_7687__$1);
var G__6390_7694 = ctx;
var G__6391_7695 = nex.interpreter.build_builtin_scalar_class(scalar_7693);
(nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.register_class.cljs$core$IFn$_invoke$arity$2(G__6390_7694,G__6391_7695) : nex.interpreter.register_class.call(null,G__6390_7694,G__6391_7695));


var G__7696 = cljs.core.next(seq__6373_7687__$1);
var G__7697 = null;
var G__7698 = (0);
var G__7699 = (0);
seq__6373_7675 = G__7696;
chunk__6374_7676 = G__7697;
count__6375_7677 = G__7698;
i__6376_7678 = G__7699;
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(type_expr,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6412_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6412_SHARP_,p1__6412_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (args){
if(cljs.core.truth_(args)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6413_SHARP_){
return (nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.substitute_type.cljs$core$IFn$_invoke$arity$2(p1__6413_SHARP_,type_map) : nex.interpreter.substitute_type.call(null,p1__6413_SHARP_,type_map));
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
var G__6425 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member);
var G__6425__$1 = (((G__6425 instanceof cljs.core.Keyword))?G__6425.fqn:null);
switch (G__6425__$1) {
case "field":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"field-type","field-type",2075623493),(function (p1__6418_SHARP_){
return nex.interpreter.substitute_type(p1__6418_SHARP_,type_map);
}));

break;
case "method":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"params","params",710516235),(function (params){
if(cljs.core.truth_(params)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6419_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6419_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6420_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__6420_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),(function (t){
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(generic_class_def,new cljs.core.Keyword(null,"name","name",1843675177),spec_name),new cljs.core.Keyword(null,"template-name","template-name",271241761),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(generic_class_def)),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null),new cljs.core.Keyword(null,"body","body",-2049205669),(function (p1__6430_SHARP_){
return nex.interpreter.substitute_in_body(p1__6430_SHARP_,type_map);
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

(nex.interpreter.NexObject.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6433,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6440 = k6433;
var G__6440__$1 = (((G__6440 instanceof cljs.core.Keyword))?G__6440.fqn:null);
switch (G__6440__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6433,else__5451__auto__);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6445){
var vec__6446 = p__6445;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6446,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6446,(1),null);
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

(nex.interpreter.NexObject.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6432){
var self__ = this;
var G__6432__$1 = this;
return (new cljs.core.RecordIter((0),G__6432__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.interpreter.NexObject.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6434,other6435){
var self__ = this;
var this6434__$1 = this;
return (((!((other6435 == null)))) && ((((this6434__$1.constructor === other6435.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6434__$1.class_name,other6435.class_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6434__$1.fields,other6435.fields)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6434__$1.closure_env,other6435.closure_env)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6434__$1.__extmap,other6435.__extmap)))))))))));
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

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6433){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6467 = k6433;
var G__6467__$1 = (((G__6467 instanceof cljs.core.Keyword))?G__6467.fqn:null);
switch (G__6467__$1) {
case "class-name":
case "fields":
case "closure-env":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6433);

}
}));

(nex.interpreter.NexObject.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6432){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6472 = cljs.core.keyword_identical_QMARK_;
var expr__6473 = k__5457__auto__;
if(cljs.core.truth_((pred__6472.cljs$core$IFn$_invoke$arity$2 ? pred__6472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6473) : pred__6472.call(null,new cljs.core.Keyword(null,"class-name","class-name",945142584),expr__6473)))){
return (new nex.interpreter.NexObject(G__6432,self__.fields,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6472.cljs$core$IFn$_invoke$arity$2 ? pred__6472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6473) : pred__6472.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),expr__6473)))){
return (new nex.interpreter.NexObject(self__.class_name,G__6432,self__.closure_env,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6472.cljs$core$IFn$_invoke$arity$2 ? pred__6472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6473) : pred__6472.call(null,new cljs.core.Keyword(null,"closure-env","closure-env",825340360),expr__6473)))){
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,G__6432,self__.__meta,self__.__extmap,null));
} else {
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6432),null));
}
}
}
}));

(nex.interpreter.NexObject.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"class-name","class-name",945142584),self__.class_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fields","fields",-1932066230),self__.fields,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"closure-env","closure-env",825340360),self__.closure_env,null))], null),self__.__extmap));
}));

(nex.interpreter.NexObject.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6432){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.interpreter.NexObject(self__.class_name,self__.fields,self__.closure_env,G__6432,self__.__extmap,self__.__hash));
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
nex.interpreter.map__GT_NexObject = (function nex$interpreter$map__GT_NexObject(G__6439){
var extmap__5490__auto__ = (function (){var G__6480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6439,new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"closure-env","closure-env",825340360)], 0));
if(cljs.core.record_QMARK_(G__6439)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6480);
} else {
return G__6480;
}
})();
return (new nex.interpreter.NexObject(new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(G__6439),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(G__6439),new cljs.core.Keyword(null,"closure-env","closure-env",825340360).cljs$core$IFn$_invoke$arity$1(G__6439),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a new object instance.
 */
nex.interpreter.make_object = (function nex$interpreter$make_object(var_args){
var G__6482 = arguments.length;
switch (G__6482) {
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
var fexpr__6495 = new cljs.core.Keyword(null,"debug-hook","debug-hook",2082123531).cljs$core$IFn$_invoke$arity$1(ctx);
return (fexpr__6495.cljs$core$IFn$_invoke$arity$2 ? fexpr__6495.cljs$core$IFn$_invoke$arity$2(ctx,node) : fexpr__6495.call(null,ctx,node));
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
var seq__6503 = cljs.core.seq(assertions);
var chunk__6504 = null;
var count__6505 = (0);
var i__6506 = (0);
while(true){
if((i__6506 < count__6505)){
var map__6520 = chunk__6504.cljs$core$IIndexed$_nth$arity$2(null,i__6506);
var map__6520__$1 = cljs.core.__destructure_map(map__6520);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6520__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6520__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7739 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7739)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7740 = seq__6503;
var G__7741 = chunk__6504;
var G__7742 = count__6505;
var G__7743 = (i__6506 + (1));
seq__6503 = G__7740;
chunk__6504 = G__7741;
count__6505 = G__7742;
i__6506 = G__7743;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6503);
if(temp__5823__auto__){
var seq__6503__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6503__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6503__$1);
var G__7744 = cljs.core.chunk_rest(seq__6503__$1);
var G__7745 = c__5673__auto__;
var G__7746 = cljs.core.count(c__5673__auto__);
var G__7747 = (0);
seq__6503 = G__7744;
chunk__6504 = G__7745;
count__6505 = G__7746;
i__6506 = G__7747;
continue;
} else {
var map__6522 = cljs.core.first(seq__6503__$1);
var map__6522__$1 = cljs.core.__destructure_map(map__6522);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6522__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6522__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var result_7748 = (nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition) : nex.interpreter.eval_node.call(null,ctx,condition));
if(cljs.core.truth_(result_7748)){
} else {
nex.interpreter.report_contract_violation(contract_type,label,condition);
}


var G__7749 = cljs.core.next(seq__6503__$1);
var G__7750 = null;
var G__7751 = (0);
var G__7752 = (0);
seq__6503 = G__7749;
chunk__6504 = G__7750;
count__6505 = G__7751;
i__6506 = G__7752;
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
var vec__6544 = (function (){var temp__5821__auto__ = (nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_parent_classes.cljs$core$IFn$_invoke$arity$2(ctx,class_def__$1) : nex.interpreter.get_parent_classes.call(null,ctx,class_def__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var parents = temp__5821__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6547,p__6548){
var vec__6549 = p__6547;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6549,(0),null);
var seen_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6549,(1),null);
var map__6552 = p__6548;
var map__6552__$1 = cljs.core.__destructure_map(map__6552);
var parent_class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6552__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var vec__6553 = nex$interpreter$check_class_invariant_$_collect_invariants(parent_class_def,seen_so_far);
var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6553,(0),null);
var seen_next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6553,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,inv),seen_next], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null),parents);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,seen_SINGLEQUOTE_], null);
}
})();
var parent_invariants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(0),null);
var seen_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6544,(1),null);
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
var vec__6556 = collect_invariants(class_def,cljs.core.PersistentHashSet.EMPTY);
var invariant_assertions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6556,(1),null);
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__6568_SHARP_),method_name);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6567_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6567_SHARP_),new cljs.core.Keyword(null,"method","method",55703592));
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
var G__6573 = ctx;
var G__6574 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6575 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6573,G__6574,G__6575) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6573,G__6574,G__6575));
}),parents);
} else {
return null;
}
})();
var effective_require = (function (){var G__6576 = new cljs.core.Keyword(null,"effective-require","effective-require",-151441479).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6577 = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_preconditions.cljs$core$IFn$_invoke$arity$2(G__6576,G__6577) : nex.interpreter.combine_preconditions.call(null,G__6576,G__6577));
})();
var effective_ensure = (function (){var G__6578 = new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511).cljs$core$IFn$_invoke$arity$1(base_lookup);
var G__6579 = new cljs.core.Keyword(null,"ensure","ensure",-439171367).cljs$core$IFn$_invoke$arity$1(method);
return (nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.combine_assertions.cljs$core$IFn$_invoke$arity$2(G__6578,G__6579) : nex.interpreter.combine_assertions.call(null,G__6578,G__6579));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"source-class","source-class",1466604697),class_def,new cljs.core.Keyword(null,"effective-require","effective-require",-151441479),effective_require,new cljs.core.Keyword(null,"effective-ensure","effective-ensure",-804780511),effective_ensure], null);
} else {
var temp__5823__auto__ = nex.interpreter.get_parent_classes(ctx,class_def);
if(cljs.core.truth_(temp__5823__auto__)){
var parents = temp__5823__auto__;
return cljs.core.some((function (parent_info){
var G__6584 = ctx;
var G__6585 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
var G__6586 = method_name;
return (nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_method_with_inheritance.cljs$core$IFn$_invoke$arity$3(G__6584,G__6585,G__6586) : nex.interpreter.lookup_method_with_inheritance.call(null,G__6584,G__6585,G__6586));
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
var or__5142__auto__ = cljs.core.some((function (p1__6587_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6587_SHARP_),parent_name);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6588_SHARP_){
var G__6589 = ctx;
var G__6590 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(p1__6588_SHARP_);
var G__6591 = parent_name;
return (nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.is_parent_QMARK_.cljs$core$IFn$_invoke$arity$3(G__6589,G__6590,G__6591) : nex.interpreter.is_parent_QMARK_.call(null,G__6589,G__6590,G__6591));
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
var G__6596 = (nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1 ? nex.interpreter.get_type_name.cljs$core$IFn$_invoke$arity$1(value) : nex.interpreter.get_type_name.call(null,value));
if((G__6596 == null)){
return null;
} else {
return cljs.core.name(G__6596);
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
var fexpr__6601 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Real",null,"Decimal",null,"Integer64",null], null), null);
return (fexpr__6601.cljs$core$IFn$_invoke$arity$1 ? fexpr__6601.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6601.call(null,target_type));
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runtime_type,"Integer64");
if(and__5140__auto__){
var fexpr__6602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Real",null,"Decimal",null], null), null);
return (fexpr__6602.cljs$core$IFn$_invoke$arity$1 ? fexpr__6602.cljs$core$IFn$_invoke$arity$1(target_type) : fexpr__6602.call(null,target_type));
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
var and__5140__auto__ = (function (){var fexpr__6603 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["ArrayCursor",null,"StringCursor",null,"MapCursor",null], null), null);
return (fexpr__6603.cljs$core$IFn$_invoke$arity$1 ? fexpr__6603.cljs$core$IFn$_invoke$arity$1(runtime_type) : fexpr__6603.call(null,runtime_type));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__6611){
var map__6615 = p__6611;
var map__6615__$1 = cljs.core.__destructure_map(map__6615);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6615__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
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
nex.interpreter.builtins = new cljs.core.PersistentArrayMap(null, 4, ["print",(function() { 
var G__7756__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7756 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7757__i = 0, G__7757__a = new Array(arguments.length -  1);
while (G__7757__i < G__7757__a.length) {G__7757__a[G__7757__i] = arguments[G__7757__i + 1]; ++G__7757__i;}
  args = new cljs.core.IndexedSeq(G__7757__a,0,null);
} 
return G__7756__delegate.call(this,ctx,args);};
G__7756.cljs$lang$maxFixedArity = 1;
G__7756.cljs$lang$applyTo = (function (arglist__7758){
var ctx = cljs.core.first(arglist__7758);
var args = cljs.core.rest(arglist__7758);
return G__7756__delegate(ctx,args);
});
G__7756.cljs$core$IFn$_invoke$arity$variadic = G__7756__delegate;
return G__7756;
})()
,"println",(function() { 
var G__7759__delegate = function (ctx,args){
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,args));
nex.interpreter.add_output(ctx,output);

return null;
};
var G__7759 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7760__i = 0, G__7760__a = new Array(arguments.length -  1);
while (G__7760__i < G__7760__a.length) {G__7760__a[G__7760__i] = arguments[G__7760__i + 1]; ++G__7760__i;}
  args = new cljs.core.IndexedSeq(G__7760__a,0,null);
} 
return G__7759__delegate.call(this,ctx,args);};
G__7759.cljs$lang$maxFixedArity = 1;
G__7759.cljs$lang$applyTo = (function (arglist__7761){
var ctx = cljs.core.first(arglist__7761);
var args = cljs.core.rest(arglist__7761);
return G__7759__delegate(ctx,args);
});
G__7759.cljs$core$IFn$_invoke$arity$variadic = G__7759__delegate;
return G__7759;
})()
,"type_of",(function() { 
var G__7762__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_of",new cljs.core.Keyword(null,"expected","expected",1583670997),(1),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

return nex.interpreter.runtime_type_name(cljs.core.first(args));
};
var G__7762 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7763__i = 0, G__7763__a = new Array(arguments.length -  1);
while (G__7763__i < G__7763__a.length) {G__7763__a[G__7763__i] = arguments[G__7763__i + 1]; ++G__7763__i;}
  args = new cljs.core.IndexedSeq(G__7763__a,0,null);
} 
return G__7762__delegate.call(this,ctx,args);};
G__7762.cljs$lang$maxFixedArity = 1;
G__7762.cljs$lang$applyTo = (function (arglist__7764){
var ctx = cljs.core.first(arglist__7764);
var args = cljs.core.rest(arglist__7764);
return G__7762__delegate(ctx,args);
});
G__7762.cljs$core$IFn$_invoke$arity$variadic = G__7762__delegate;
return G__7762;
})()
,"type_is",(function() { 
var G__7765__delegate = function (ctx,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"function","function",-2127255473),"type_is",new cljs.core.Keyword(null,"expected","expected",1583670997),(2),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.count(args)], null));
} else {
}

var vec__6649 = args;
var target_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649,(1),null);
return nex.interpreter.runtime_type_is_QMARK_(ctx,target_type,value);
};
var G__7765 = function (ctx,var_args){
var args = null;
if (arguments.length > 1) {
var G__7766__i = 0, G__7766__a = new Array(arguments.length -  1);
while (G__7766__i < G__7766__a.length) {G__7766__a[G__7766__i] = arguments[G__7766__i + 1]; ++G__7766__i;}
  args = new cljs.core.IndexedSeq(G__7766__a,0,null);
} 
return G__7765__delegate.call(this,ctx,args);};
G__7765.cljs$lang$maxFixedArity = 1;
G__7765.cljs$lang$applyTo = (function (arglist__7767){
var ctx = cljs.core.first(arglist__7767);
var args = cljs.core.rest(arglist__7767);
return G__7765__delegate(ctx,args);
});
G__7765.cljs$core$IFn$_invoke$arity$variadic = G__7765__delegate;
return G__7765;
})()
], null);
/**
 * Apply a binary operator to two values.
 */
nex.interpreter.apply_binary_op = (function nex$interpreter$apply_binary_op(op,left,right){
var G__6656 = op;
switch (G__6656) {
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
var G__6666 = op;
switch (G__6666) {
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
var G__6670 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(field_type);
switch (G__6670) {
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
var G__6671 = field_type;
switch (G__6671) {
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
}catch (e6747){var _ = e6747;
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
var G__7773__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_set(arr,index,value);
};
var G__7773 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7774__i = 0, G__7774__a = new Array(arguments.length -  3);
while (G__7774__i < G__7774__a.length) {G__7774__a[G__7774__i] = arguments[G__7774__i + 3]; ++G__7774__i;}
  _ = new cljs.core.IndexedSeq(G__7774__a,0,null);
} 
return G__7773__delegate.call(this,arr,index,value,_);};
G__7773.cljs$lang$maxFixedArity = 3;
G__7773.cljs$lang$applyTo = (function (arglist__7775){
var arr = cljs.core.first(arglist__7775);
arglist__7775 = cljs.core.next(arglist__7775);
var index = cljs.core.first(arglist__7775);
arglist__7775 = cljs.core.next(arglist__7775);
var value = cljs.core.first(arglist__7775);
var _ = cljs.core.rest(arglist__7775);
return G__7773__delegate(arr,index,value,_);
});
G__7773.cljs$core$IFn$_invoke$arity$variadic = G__7773__delegate;
return G__7773;
})()
,(function() { 
var G__7776__delegate = function (arr,_){
return nex.interpreter.nex_array_empty_QMARK_(arr);
};
var G__7776 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7777__i = 0, G__7777__a = new Array(arguments.length -  1);
while (G__7777__i < G__7777__a.length) {G__7777__a[G__7777__i] = arguments[G__7777__i + 1]; ++G__7777__i;}
  _ = new cljs.core.IndexedSeq(G__7777__a,0,null);
} 
return G__7776__delegate.call(this,arr,_);};
G__7776.cljs$lang$maxFixedArity = 1;
G__7776.cljs$lang$applyTo = (function (arglist__7778){
var arr = cljs.core.first(arglist__7778);
var _ = cljs.core.rest(arglist__7778);
return G__7776__delegate(arr,_);
});
G__7776.cljs$core$IFn$_invoke$arity$variadic = G__7776__delegate;
return G__7776;
})()
,(function (arr,_){
return nex.interpreter.nex_array_reverse(arr);
}),(function() { 
var G__7779__delegate = function (arr,elem,_){
return nex.interpreter.nex_array_contains(arr,elem);
};
var G__7779 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7780__i = 0, G__7780__a = new Array(arguments.length -  2);
while (G__7780__i < G__7780__a.length) {G__7780__a[G__7780__i] = arguments[G__7780__i + 2]; ++G__7780__i;}
  _ = new cljs.core.IndexedSeq(G__7780__a,0,null);
} 
return G__7779__delegate.call(this,arr,elem,_);};
G__7779.cljs$lang$maxFixedArity = 2;
G__7779.cljs$lang$applyTo = (function (arglist__7781){
var arr = cljs.core.first(arglist__7781);
arglist__7781 = cljs.core.next(arglist__7781);
var elem = cljs.core.first(arglist__7781);
var _ = cljs.core.rest(arglist__7781);
return G__7779__delegate(arr,elem,_);
});
G__7779.cljs$core$IFn$_invoke$arity$variadic = G__7779__delegate;
return G__7779;
})()
,(function() { 
var G__7782__delegate = function (arr,index,value,_){
return nex.interpreter.nex_array_add_at(arr,index,value);
};
var G__7782 = function (arr,index,value,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7783__i = 0, G__7783__a = new Array(arguments.length -  3);
while (G__7783__i < G__7783__a.length) {G__7783__a[G__7783__i] = arguments[G__7783__i + 3]; ++G__7783__i;}
  _ = new cljs.core.IndexedSeq(G__7783__a,0,null);
} 
return G__7782__delegate.call(this,arr,index,value,_);};
G__7782.cljs$lang$maxFixedArity = 3;
G__7782.cljs$lang$applyTo = (function (arglist__7784){
var arr = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var index = cljs.core.first(arglist__7784);
arglist__7784 = cljs.core.next(arglist__7784);
var value = cljs.core.first(arglist__7784);
var _ = cljs.core.rest(arglist__7784);
return G__7782__delegate(arr,index,value,_);
});
G__7782.cljs$core$IFn$_invoke$arity$variadic = G__7782__delegate;
return G__7782;
})()
,(function() { 
var G__7785__delegate = function (arr,_){
return nex.interpreter.nex_array_sort(arr);
};
var G__7785 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7786__i = 0, G__7786__a = new Array(arguments.length -  1);
while (G__7786__i < G__7786__a.length) {G__7786__a[G__7786__i] = arguments[G__7786__i + 1]; ++G__7786__i;}
  _ = new cljs.core.IndexedSeq(G__7786__a,0,null);
} 
return G__7785__delegate.call(this,arr,_);};
G__7785.cljs$lang$maxFixedArity = 1;
G__7785.cljs$lang$applyTo = (function (arglist__7787){
var arr = cljs.core.first(arglist__7787);
var _ = cljs.core.rest(arglist__7787);
return G__7785__delegate(arr,_);
});
G__7785.cljs$core$IFn$_invoke$arity$variadic = G__7785__delegate;
return G__7785;
})()
,(function() { 
var G__7788__delegate = function (arr,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"ArrayCursor","ArrayCursor",1697768167),new cljs.core.Keyword(null,"source","source",-433931539),arr,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7788 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7789__i = 0, G__7789__a = new Array(arguments.length -  1);
while (G__7789__i < G__7789__a.length) {G__7789__a[G__7789__i] = arguments[G__7789__i + 1]; ++G__7789__i;}
  _ = new cljs.core.IndexedSeq(G__7789__a,0,null);
} 
return G__7788__delegate.call(this,arr,_);};
G__7788.cljs$lang$maxFixedArity = 1;
G__7788.cljs$lang$applyTo = (function (arglist__7790){
var arr = cljs.core.first(arglist__7790);
var _ = cljs.core.rest(arglist__7790);
return G__7788__delegate(arr,_);
});
G__7788.cljs$core$IFn$_invoke$arity$variadic = G__7788__delegate;
return G__7788;
})()
,(function() { 
var G__7791__delegate = function (arr,idx,_){
return nex.interpreter.nex_array_remove(arr,idx);
};
var G__7791 = function (arr,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7792__i = 0, G__7792__a = new Array(arguments.length -  2);
while (G__7792__i < G__7792__a.length) {G__7792__a[G__7792__i] = arguments[G__7792__i + 2]; ++G__7792__i;}
  _ = new cljs.core.IndexedSeq(G__7792__a,0,null);
} 
return G__7791__delegate.call(this,arr,idx,_);};
G__7791.cljs$lang$maxFixedArity = 2;
G__7791.cljs$lang$applyTo = (function (arglist__7793){
var arr = cljs.core.first(arglist__7793);
arglist__7793 = cljs.core.next(arglist__7793);
var idx = cljs.core.first(arglist__7793);
var _ = cljs.core.rest(arglist__7793);
return G__7791__delegate(arr,idx,_);
});
G__7791.cljs$core$IFn$_invoke$arity$variadic = G__7791__delegate;
return G__7791;
})()
,(function() { 
var G__7794__delegate = function (arr,_){
return nex.interpreter.nex_array_size(arr);
};
var G__7794 = function (arr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7795__i = 0, G__7795__a = new Array(arguments.length -  1);
while (G__7795__i < G__7795__a.length) {G__7795__a[G__7795__i] = arguments[G__7795__i + 1]; ++G__7795__i;}
  _ = new cljs.core.IndexedSeq(G__7795__a,0,null);
} 
return G__7794__delegate.call(this,arr,_);};
G__7794.cljs$lang$maxFixedArity = 1;
G__7794.cljs$lang$applyTo = (function (arglist__7796){
var arr = cljs.core.first(arglist__7796);
var _ = cljs.core.rest(arglist__7796);
return G__7794__delegate(arr,_);
});
G__7794.cljs$core$IFn$_invoke$arity$variadic = G__7794__delegate;
return G__7794;
})()
,(function() { 
var G__7797__delegate = function (arr,start,end,_){
return nex.interpreter.nex_array_slice(arr,start,end);
};
var G__7797 = function (arr,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7798__i = 0, G__7798__a = new Array(arguments.length -  3);
while (G__7798__i < G__7798__a.length) {G__7798__a[G__7798__i] = arguments[G__7798__i + 3]; ++G__7798__i;}
  _ = new cljs.core.IndexedSeq(G__7798__a,0,null);
} 
return G__7797__delegate.call(this,arr,start,end,_);};
G__7797.cljs$lang$maxFixedArity = 3;
G__7797.cljs$lang$applyTo = (function (arglist__7799){
var arr = cljs.core.first(arglist__7799);
arglist__7799 = cljs.core.next(arglist__7799);
var start = cljs.core.first(arglist__7799);
arglist__7799 = cljs.core.next(arglist__7799);
var end = cljs.core.first(arglist__7799);
var _ = cljs.core.rest(arglist__7799);
return G__7797__delegate(arr,start,end,_);
});
G__7797.cljs$core$IFn$_invoke$arity$variadic = G__7797__delegate;
return G__7797;
})()
,(function() { 
var G__7800__delegate = function (arr,value,_){
return nex.interpreter.nex_array_add(arr,value);
};
var G__7800 = function (arr,value,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7801__i = 0, G__7801__a = new Array(arguments.length -  2);
while (G__7801__i < G__7801__a.length) {G__7801__a[G__7801__i] = arguments[G__7801__i + 2]; ++G__7801__i;}
  _ = new cljs.core.IndexedSeq(G__7801__a,0,null);
} 
return G__7800__delegate.call(this,arr,value,_);};
G__7800.cljs$lang$maxFixedArity = 2;
G__7800.cljs$lang$applyTo = (function (arglist__7802){
var arr = cljs.core.first(arglist__7802);
arglist__7802 = cljs.core.next(arglist__7802);
var value = cljs.core.first(arglist__7802);
var _ = cljs.core.rest(arglist__7802);
return G__7800__delegate(arr,value,_);
});
G__7800.cljs$core$IFn$_invoke$arity$variadic = G__7800__delegate;
return G__7800;
})()
,(function() { 
var G__7803__delegate = function (arr,elem,_){
var idx = nex.interpreter.nex_array_index_of(arr,elem);
if((idx >= (0))){
return idx;
} else {
return (-1);
}
};
var G__7803 = function (arr,elem,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7804__i = 0, G__7804__a = new Array(arguments.length -  2);
while (G__7804__i < G__7804__a.length) {G__7804__a[G__7804__i] = arguments[G__7804__i + 2]; ++G__7804__i;}
  _ = new cljs.core.IndexedSeq(G__7804__a,0,null);
} 
return G__7803__delegate.call(this,arr,elem,_);};
G__7803.cljs$lang$maxFixedArity = 2;
G__7803.cljs$lang$applyTo = (function (arglist__7805){
var arr = cljs.core.first(arglist__7805);
arglist__7805 = cljs.core.next(arglist__7805);
var elem = cljs.core.first(arglist__7805);
var _ = cljs.core.rest(arglist__7805);
return G__7803__delegate(arr,elem,_);
});
G__7803.cljs$core$IFn$_invoke$arity$variadic = G__7803__delegate;
return G__7803;
})()
,(function() { 
var G__7806__delegate = function (arr,index,_){
return nex.interpreter.nex_array_get(arr,index);
};
var G__7806 = function (arr,index,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7807__i = 0, G__7807__a = new Array(arguments.length -  2);
while (G__7807__i < G__7807__a.length) {G__7807__a[G__7807__i] = arguments[G__7807__i + 2]; ++G__7807__i;}
  _ = new cljs.core.IndexedSeq(G__7807__a,0,null);
} 
return G__7806__delegate.call(this,arr,index,_);};
G__7806.cljs$lang$maxFixedArity = 2;
G__7806.cljs$lang$applyTo = (function (arglist__7808){
var arr = cljs.core.first(arglist__7808);
arglist__7808 = cljs.core.next(arglist__7808);
var index = cljs.core.first(arglist__7808);
var _ = cljs.core.rest(arglist__7808);
return G__7806__delegate(arr,index,_);
});
G__7806.cljs$core$IFn$_invoke$arity$variadic = G__7806__delegate;
return G__7806;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__7809__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__7809 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7810__i = 0, G__7810__a = new Array(arguments.length -  2);
while (G__7810__i < G__7810__a.length) {G__7810__a[G__7810__i] = arguments[G__7810__i + 2]; ++G__7810__i;}
  _ = new cljs.core.IndexedSeq(G__7810__a,0,null);
} 
return G__7809__delegate.call(this,n,other,_);};
G__7809.cljs$lang$maxFixedArity = 2;
G__7809.cljs$lang$applyTo = (function (arglist__7811){
var n = cljs.core.first(arglist__7811);
arglist__7811 = cljs.core.next(arglist__7811);
var other = cljs.core.first(arglist__7811);
var _ = cljs.core.rest(arglist__7811);
return G__7809__delegate(n,other,_);
});
G__7809.cljs$core$IFn$_invoke$arity$variadic = G__7809__delegate;
return G__7809;
})()
,(function() { 
var G__7812__delegate = function (n,other,_){
return (n <= other);
};
var G__7812 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7814__i = 0, G__7814__a = new Array(arguments.length -  2);
while (G__7814__i < G__7814__a.length) {G__7814__a[G__7814__i] = arguments[G__7814__i + 2]; ++G__7814__i;}
  _ = new cljs.core.IndexedSeq(G__7814__a,0,null);
} 
return G__7812__delegate.call(this,n,other,_);};
G__7812.cljs$lang$maxFixedArity = 2;
G__7812.cljs$lang$applyTo = (function (arglist__7815){
var n = cljs.core.first(arglist__7815);
arglist__7815 = cljs.core.next(arglist__7815);
var other = cljs.core.first(arglist__7815);
var _ = cljs.core.rest(arglist__7815);
return G__7812__delegate(n,other,_);
});
G__7812.cljs$core$IFn$_invoke$arity$variadic = G__7812__delegate;
return G__7812;
})()
,(function() { 
var G__7816__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7816 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7818__i = 0, G__7818__a = new Array(arguments.length -  2);
while (G__7818__i < G__7818__a.length) {G__7818__a[G__7818__i] = arguments[G__7818__i + 2]; ++G__7818__i;}
  _ = new cljs.core.IndexedSeq(G__7818__a,0,null);
} 
return G__7816__delegate.call(this,n,other,_);};
G__7816.cljs$lang$maxFixedArity = 2;
G__7816.cljs$lang$applyTo = (function (arglist__7819){
var n = cljs.core.first(arglist__7819);
arglist__7819 = cljs.core.next(arglist__7819);
var other = cljs.core.first(arglist__7819);
var _ = cljs.core.rest(arglist__7819);
return G__7816__delegate(n,other,_);
});
G__7816.cljs$core$IFn$_invoke$arity$variadic = G__7816__delegate;
return G__7816;
})()
,(function() { 
var G__7820__delegate = function (n,other,_){
return (n < other);
};
var G__7820 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7821__i = 0, G__7821__a = new Array(arguments.length -  2);
while (G__7821__i < G__7821__a.length) {G__7821__a[G__7821__i] = arguments[G__7821__i + 2]; ++G__7821__i;}
  _ = new cljs.core.IndexedSeq(G__7821__a,0,null);
} 
return G__7820__delegate.call(this,n,other,_);};
G__7820.cljs$lang$maxFixedArity = 2;
G__7820.cljs$lang$applyTo = (function (arglist__7822){
var n = cljs.core.first(arglist__7822);
arglist__7822 = cljs.core.next(arglist__7822);
var other = cljs.core.first(arglist__7822);
var _ = cljs.core.rest(arglist__7822);
return G__7820__delegate(n,other,_);
});
G__7820.cljs$core$IFn$_invoke$arity$variadic = G__7820__delegate;
return G__7820;
})()
,(function() { 
var G__7823__delegate = function (n,other,_){
return (n + other);
};
var G__7823 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7824__i = 0, G__7824__a = new Array(arguments.length -  2);
while (G__7824__i < G__7824__a.length) {G__7824__a[G__7824__i] = arguments[G__7824__i + 2]; ++G__7824__i;}
  _ = new cljs.core.IndexedSeq(G__7824__a,0,null);
} 
return G__7823__delegate.call(this,n,other,_);};
G__7823.cljs$lang$maxFixedArity = 2;
G__7823.cljs$lang$applyTo = (function (arglist__7825){
var n = cljs.core.first(arglist__7825);
arglist__7825 = cljs.core.next(arglist__7825);
var other = cljs.core.first(arglist__7825);
var _ = cljs.core.rest(arglist__7825);
return G__7823__delegate(n,other,_);
});
G__7823.cljs$core$IFn$_invoke$arity$variadic = G__7823__delegate;
return G__7823;
})()
,(function() { 
var G__7826__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__7826 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7827__i = 0, G__7827__a = new Array(arguments.length -  1);
while (G__7827__i < G__7827__a.length) {G__7827__a[G__7827__i] = arguments[G__7827__i + 1]; ++G__7827__i;}
  _ = new cljs.core.IndexedSeq(G__7827__a,0,null);
} 
return G__7826__delegate.call(this,n,_);};
G__7826.cljs$lang$maxFixedArity = 1;
G__7826.cljs$lang$applyTo = (function (arglist__7829){
var n = cljs.core.first(arglist__7829);
var _ = cljs.core.rest(arglist__7829);
return G__7826__delegate(n,_);
});
G__7826.cljs$core$IFn$_invoke$arity$variadic = G__7826__delegate;
return G__7826;
})()
,(function() { 
var G__7830__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__7830 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7831__i = 0, G__7831__a = new Array(arguments.length -  1);
while (G__7831__i < G__7831__a.length) {G__7831__a[G__7831__i] = arguments[G__7831__i + 1]; ++G__7831__i;}
  _ = new cljs.core.IndexedSeq(G__7831__a,0,null);
} 
return G__7830__delegate.call(this,n,_);};
G__7830.cljs$lang$maxFixedArity = 1;
G__7830.cljs$lang$applyTo = (function (arglist__7832){
var n = cljs.core.first(arglist__7832);
var _ = cljs.core.rest(arglist__7832);
return G__7830__delegate(n,_);
});
G__7830.cljs$core$IFn$_invoke$arity$variadic = G__7830__delegate;
return G__7830;
})()
,(function() { 
var G__7833__delegate = function (n,other,_){
return (n > other);
};
var G__7833 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7834__i = 0, G__7834__a = new Array(arguments.length -  2);
while (G__7834__i < G__7834__a.length) {G__7834__a[G__7834__i] = arguments[G__7834__i + 2]; ++G__7834__i;}
  _ = new cljs.core.IndexedSeq(G__7834__a,0,null);
} 
return G__7833__delegate.call(this,n,other,_);};
G__7833.cljs$lang$maxFixedArity = 2;
G__7833.cljs$lang$applyTo = (function (arglist__7835){
var n = cljs.core.first(arglist__7835);
arglist__7835 = cljs.core.next(arglist__7835);
var other = cljs.core.first(arglist__7835);
var _ = cljs.core.rest(arglist__7835);
return G__7833__delegate(n,other,_);
});
G__7833.cljs$core$IFn$_invoke$arity$variadic = G__7833__delegate;
return G__7833;
})()
,(function() { 
var G__7837__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7837 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7838__i = 0, G__7838__a = new Array(arguments.length -  2);
while (G__7838__i < G__7838__a.length) {G__7838__a[G__7838__i] = arguments[G__7838__i + 2]; ++G__7838__i;}
  _ = new cljs.core.IndexedSeq(G__7838__a,0,null);
} 
return G__7837__delegate.call(this,n,other,_);};
G__7837.cljs$lang$maxFixedArity = 2;
G__7837.cljs$lang$applyTo = (function (arglist__7839){
var n = cljs.core.first(arglist__7839);
arglist__7839 = cljs.core.next(arglist__7839);
var other = cljs.core.first(arglist__7839);
var _ = cljs.core.rest(arglist__7839);
return G__7837__delegate(n,other,_);
});
G__7837.cljs$core$IFn$_invoke$arity$variadic = G__7837__delegate;
return G__7837;
})()
,(function() { 
var G__7840__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7840 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7841__i = 0, G__7841__a = new Array(arguments.length -  2);
while (G__7841__i < G__7841__a.length) {G__7841__a[G__7841__i] = arguments[G__7841__i + 2]; ++G__7841__i;}
  _ = new cljs.core.IndexedSeq(G__7841__a,0,null);
} 
return G__7840__delegate.call(this,n,other,_);};
G__7840.cljs$lang$maxFixedArity = 2;
G__7840.cljs$lang$applyTo = (function (arglist__7842){
var n = cljs.core.first(arglist__7842);
arglist__7842 = cljs.core.next(arglist__7842);
var other = cljs.core.first(arglist__7842);
var _ = cljs.core.rest(arglist__7842);
return G__7840__delegate(n,other,_);
});
G__7840.cljs$core$IFn$_invoke$arity$variadic = G__7840__delegate;
return G__7840;
})()
,(function() { 
var G__7843__delegate = function (n,other,_){
return (n - other);
};
var G__7843 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7844__i = 0, G__7844__a = new Array(arguments.length -  2);
while (G__7844__i < G__7844__a.length) {G__7844__a[G__7844__i] = arguments[G__7844__i + 2]; ++G__7844__i;}
  _ = new cljs.core.IndexedSeq(G__7844__a,0,null);
} 
return G__7843__delegate.call(this,n,other,_);};
G__7843.cljs$lang$maxFixedArity = 2;
G__7843.cljs$lang$applyTo = (function (arglist__7845){
var n = cljs.core.first(arglist__7845);
arglist__7845 = cljs.core.next(arglist__7845);
var other = cljs.core.first(arglist__7845);
var _ = cljs.core.rest(arglist__7845);
return G__7843__delegate(n,other,_);
});
G__7843.cljs$core$IFn$_invoke$arity$variadic = G__7843__delegate;
return G__7843;
})()
,(function() { 
var G__7847__delegate = function (n,other,_){
return (n * other);
};
var G__7847 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7848__i = 0, G__7848__a = new Array(arguments.length -  2);
while (G__7848__i < G__7848__a.length) {G__7848__a[G__7848__i] = arguments[G__7848__i + 2]; ++G__7848__i;}
  _ = new cljs.core.IndexedSeq(G__7848__a,0,null);
} 
return G__7847__delegate.call(this,n,other,_);};
G__7847.cljs$lang$maxFixedArity = 2;
G__7847.cljs$lang$applyTo = (function (arglist__7849){
var n = cljs.core.first(arglist__7849);
arglist__7849 = cljs.core.next(arglist__7849);
var other = cljs.core.first(arglist__7849);
var _ = cljs.core.rest(arglist__7849);
return G__7847__delegate(n,other,_);
});
G__7847.cljs$core$IFn$_invoke$arity$variadic = G__7847__delegate;
return G__7847;
})()
,(function() { 
var G__7850__delegate = function (n,other,_){
return (n / other);
};
var G__7850 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7851__i = 0, G__7851__a = new Array(arguments.length -  2);
while (G__7851__i < G__7851__a.length) {G__7851__a[G__7851__i] = arguments[G__7851__i + 2]; ++G__7851__i;}
  _ = new cljs.core.IndexedSeq(G__7851__a,0,null);
} 
return G__7850__delegate.call(this,n,other,_);};
G__7850.cljs$lang$maxFixedArity = 2;
G__7850.cljs$lang$applyTo = (function (arglist__7852){
var n = cljs.core.first(arglist__7852);
arglist__7852 = cljs.core.next(arglist__7852);
var other = cljs.core.first(arglist__7852);
var _ = cljs.core.rest(arglist__7852);
return G__7850__delegate(n,other,_);
});
G__7850.cljs$core$IFn$_invoke$arity$variadic = G__7850__delegate;
return G__7850;
})()
,(function() { 
var G__7853__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__7853 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7854__i = 0, G__7854__a = new Array(arguments.length -  1);
while (G__7854__i < G__7854__a.length) {G__7854__a[G__7854__i] = arguments[G__7854__i + 1]; ++G__7854__i;}
  _ = new cljs.core.IndexedSeq(G__7854__a,0,null);
} 
return G__7853__delegate.call(this,n,_);};
G__7853.cljs$lang$maxFixedArity = 1;
G__7853.cljs$lang$applyTo = (function (arglist__7855){
var n = cljs.core.first(arglist__7855);
var _ = cljs.core.rest(arglist__7855);
return G__7853__delegate(n,_);
});
G__7853.cljs$core$IFn$_invoke$arity$variadic = G__7853__delegate;
return G__7853;
})()
,(function() { 
var G__7856__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__7856 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7857__i = 0, G__7857__a = new Array(arguments.length -  2);
while (G__7857__i < G__7857__a.length) {G__7857__a[G__7857__i] = arguments[G__7857__i + 2]; ++G__7857__i;}
  _ = new cljs.core.IndexedSeq(G__7857__a,0,null);
} 
return G__7856__delegate.call(this,n,other,_);};
G__7856.cljs$lang$maxFixedArity = 2;
G__7856.cljs$lang$applyTo = (function (arglist__7858){
var n = cljs.core.first(arglist__7858);
arglist__7858 = cljs.core.next(arglist__7858);
var other = cljs.core.first(arglist__7858);
var _ = cljs.core.rest(arglist__7858);
return G__7856__delegate(n,other,_);
});
G__7856.cljs$core$IFn$_invoke$arity$variadic = G__7856__delegate;
return G__7856;
})()
,(function() { 
var G__7859__delegate = function (n,other,_){
return (n >= other);
};
var G__7859 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7860__i = 0, G__7860__a = new Array(arguments.length -  2);
while (G__7860__i < G__7860__a.length) {G__7860__a[G__7860__i] = arguments[G__7860__i + 2]; ++G__7860__i;}
  _ = new cljs.core.IndexedSeq(G__7860__a,0,null);
} 
return G__7859__delegate.call(this,n,other,_);};
G__7859.cljs$lang$maxFixedArity = 2;
G__7859.cljs$lang$applyTo = (function (arglist__7861){
var n = cljs.core.first(arglist__7861);
arglist__7861 = cljs.core.next(arglist__7861);
var other = cljs.core.first(arglist__7861);
var _ = cljs.core.rest(arglist__7861);
return G__7859__delegate(n,other,_);
});
G__7859.cljs$core$IFn$_invoke$arity$variadic = G__7859__delegate;
return G__7859;
})()
]),new cljs.core.PersistentArrayMap(null, 2, ["width",(function() { 
var G__7862__delegate = function (img,_){
return nex.turtle_browser.image_width(img);
};
var G__7862 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7863__i = 0, G__7863__a = new Array(arguments.length -  1);
while (G__7863__i < G__7863__a.length) {G__7863__a[G__7863__i] = arguments[G__7863__i + 1]; ++G__7863__i;}
  _ = new cljs.core.IndexedSeq(G__7863__a,0,null);
} 
return G__7862__delegate.call(this,img,_);};
G__7862.cljs$lang$maxFixedArity = 1;
G__7862.cljs$lang$applyTo = (function (arglist__7864){
var img = cljs.core.first(arglist__7864);
var _ = cljs.core.rest(arglist__7864);
return G__7862__delegate(img,_);
});
G__7862.cljs$core$IFn$_invoke$arity$variadic = G__7862__delegate;
return G__7862;
})()
,"height",(function() { 
var G__7865__delegate = function (img,_){
return nex.turtle_browser.image_height(img);
};
var G__7865 = function (img,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7866__i = 0, G__7866__a = new Array(arguments.length -  1);
while (G__7866__i < G__7866__a.length) {G__7866__a[G__7866__i] = arguments[G__7866__i + 1]; ++G__7866__i;}
  _ = new cljs.core.IndexedSeq(G__7866__a,0,null);
} 
return G__7865__delegate.call(this,img,_);};
G__7865.cljs$lang$maxFixedArity = 1;
G__7865.cljs$lang$applyTo = (function (arglist__7867){
var img = cljs.core.first(arglist__7867);
var _ = cljs.core.rest(arglist__7867);
return G__7865__delegate(img,_);
});
G__7865.cljs$core$IFn$_invoke$arity$variadic = G__7865__delegate;
return G__7865;
})()
], null),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__7868__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__7868 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7870__i = 0, G__7870__a = new Array(arguments.length -  1);
while (G__7870__i < G__7870__a.length) {G__7870__a[G__7870__i] = arguments[G__7870__i + 1]; ++G__7870__i;}
  _ = new cljs.core.IndexedSeq(G__7870__a,0,null);
} 
return G__7868__delegate.call(this,c,_);};
G__7868.cljs$lang$maxFixedArity = 1;
G__7868.cljs$lang$applyTo = (function (arglist__7871){
var c = cljs.core.first(arglist__7871);
var _ = cljs.core.rest(arglist__7871);
return G__7868__delegate(c,_);
});
G__7868.cljs$core$IFn$_invoke$arity$variadic = G__7868__delegate;
return G__7868;
})()
,"item",(function() { 
var G__7872__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
return nex.interpreter.nex_array_get(arr,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__7872 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7873__i = 0, G__7873__a = new Array(arguments.length -  1);
while (G__7873__i < G__7873__a.length) {G__7873__a[G__7873__i] = arguments[G__7873__i + 1]; ++G__7873__i;}
  _ = new cljs.core.IndexedSeq(G__7873__a,0,null);
} 
return G__7872__delegate.call(this,c,_);};
G__7872.cljs$lang$maxFixedArity = 1;
G__7872.cljs$lang$applyTo = (function (arglist__7874){
var c = cljs.core.first(arglist__7874);
var _ = cljs.core.rest(arglist__7874);
return G__7872__delegate(c,_);
});
G__7872.cljs$core$IFn$_invoke$arity$variadic = G__7872__delegate;
return G__7872;
})()
,"next",(function() { 
var G__7875__delegate = function (c,_){
var arr = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < nex.interpreter.nex_array_size(arr))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__7875 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7876__i = 0, G__7876__a = new Array(arguments.length -  1);
while (G__7876__i < G__7876__a.length) {G__7876__a[G__7876__i] = arguments[G__7876__i + 1]; ++G__7876__i;}
  _ = new cljs.core.IndexedSeq(G__7876__a,0,null);
} 
return G__7875__delegate.call(this,c,_);};
G__7875.cljs$lang$maxFixedArity = 1;
G__7875.cljs$lang$applyTo = (function (arglist__7877){
var c = cljs.core.first(arglist__7877);
var _ = cljs.core.rest(arglist__7877);
return G__7875__delegate(c,_);
});
G__7875.cljs$core$IFn$_invoke$arity$variadic = G__7875__delegate;
return G__7875;
})()
,"at_end",(function() { 
var G__7878__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= nex.interpreter.nex_array_size(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7878 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7879__i = 0, G__7879__a = new Array(arguments.length -  1);
while (G__7879__i < G__7879__a.length) {G__7879__a[G__7879__i] = arguments[G__7879__i + 1]; ++G__7879__i;}
  _ = new cljs.core.IndexedSeq(G__7879__a,0,null);
} 
return G__7878__delegate.call(this,c,_);};
G__7878.cljs$lang$maxFixedArity = 1;
G__7878.cljs$lang$applyTo = (function (arglist__7880){
var c = cljs.core.first(arglist__7880);
var _ = cljs.core.rest(arglist__7880);
return G__7878__delegate(c,_);
});
G__7878.cljs$core$IFn$_invoke$arity$variadic = G__7878__delegate;
return G__7878;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["values","keys","put","is_empty","try_get","cursor","remove","size","get","contains_key"],[(function() { 
var G__7881__delegate = function (m,_){
return nex.interpreter.nex_map_values(m);
};
var G__7881 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7882__i = 0, G__7882__a = new Array(arguments.length -  1);
while (G__7882__i < G__7882__a.length) {G__7882__a[G__7882__i] = arguments[G__7882__i + 1]; ++G__7882__i;}
  _ = new cljs.core.IndexedSeq(G__7882__a,0,null);
} 
return G__7881__delegate.call(this,m,_);};
G__7881.cljs$lang$maxFixedArity = 1;
G__7881.cljs$lang$applyTo = (function (arglist__7883){
var m = cljs.core.first(arglist__7883);
var _ = cljs.core.rest(arglist__7883);
return G__7881__delegate(m,_);
});
G__7881.cljs$core$IFn$_invoke$arity$variadic = G__7881__delegate;
return G__7881;
})()
,(function() { 
var G__7884__delegate = function (m,_){
return nex.interpreter.nex_map_keys(m);
};
var G__7884 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7885__i = 0, G__7885__a = new Array(arguments.length -  1);
while (G__7885__i < G__7885__a.length) {G__7885__a[G__7885__i] = arguments[G__7885__i + 1]; ++G__7885__i;}
  _ = new cljs.core.IndexedSeq(G__7885__a,0,null);
} 
return G__7884__delegate.call(this,m,_);};
G__7884.cljs$lang$maxFixedArity = 1;
G__7884.cljs$lang$applyTo = (function (arglist__7886){
var m = cljs.core.first(arglist__7886);
var _ = cljs.core.rest(arglist__7886);
return G__7884__delegate(m,_);
});
G__7884.cljs$core$IFn$_invoke$arity$variadic = G__7884__delegate;
return G__7884;
})()
,(function() { 
var G__7887__delegate = function (m,key,val,_){
return nex.interpreter.nex_map_put(m,key,val);
};
var G__7887 = function (m,key,val,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7888__i = 0, G__7888__a = new Array(arguments.length -  3);
while (G__7888__i < G__7888__a.length) {G__7888__a[G__7888__i] = arguments[G__7888__i + 3]; ++G__7888__i;}
  _ = new cljs.core.IndexedSeq(G__7888__a,0,null);
} 
return G__7887__delegate.call(this,m,key,val,_);};
G__7887.cljs$lang$maxFixedArity = 3;
G__7887.cljs$lang$applyTo = (function (arglist__7889){
var m = cljs.core.first(arglist__7889);
arglist__7889 = cljs.core.next(arglist__7889);
var key = cljs.core.first(arglist__7889);
arglist__7889 = cljs.core.next(arglist__7889);
var val = cljs.core.first(arglist__7889);
var _ = cljs.core.rest(arglist__7889);
return G__7887__delegate(m,key,val,_);
});
G__7887.cljs$core$IFn$_invoke$arity$variadic = G__7887__delegate;
return G__7887;
})()
,(function() { 
var G__7890__delegate = function (m,_){
return nex.interpreter.nex_map_empty_QMARK_(m);
};
var G__7890 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7891__i = 0, G__7891__a = new Array(arguments.length -  1);
while (G__7891__i < G__7891__a.length) {G__7891__a[G__7891__i] = arguments[G__7891__i + 1]; ++G__7891__i;}
  _ = new cljs.core.IndexedSeq(G__7891__a,0,null);
} 
return G__7890__delegate.call(this,m,_);};
G__7890.cljs$lang$maxFixedArity = 1;
G__7890.cljs$lang$applyTo = (function (arglist__7892){
var m = cljs.core.first(arglist__7892);
var _ = cljs.core.rest(arglist__7892);
return G__7890__delegate(m,_);
});
G__7890.cljs$core$IFn$_invoke$arity$variadic = G__7890__delegate;
return G__7890;
})()
,(function() { 
var G__7893__delegate = function (m,key,default$,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return default$;
} else {
return v;
}
};
var G__7893 = function (m,key,default$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7894__i = 0, G__7894__a = new Array(arguments.length -  3);
while (G__7894__i < G__7894__a.length) {G__7894__a[G__7894__i] = arguments[G__7894__i + 3]; ++G__7894__i;}
  _ = new cljs.core.IndexedSeq(G__7894__a,0,null);
} 
return G__7893__delegate.call(this,m,key,default$,_);};
G__7893.cljs$lang$maxFixedArity = 3;
G__7893.cljs$lang$applyTo = (function (arglist__7895){
var m = cljs.core.first(arglist__7895);
arglist__7895 = cljs.core.next(arglist__7895);
var key = cljs.core.first(arglist__7895);
arglist__7895 = cljs.core.next(arglist__7895);
var default$ = cljs.core.first(arglist__7895);
var _ = cljs.core.rest(arglist__7895);
return G__7893__delegate(m,key,default$,_);
});
G__7893.cljs$core$IFn$_invoke$arity$variadic = G__7893__delegate;
return G__7893;
})()
,(function() { 
var G__7896__delegate = function (m,_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"MapCursor","MapCursor",-1319558766),new cljs.core.Keyword(null,"source","source",-433931539),m,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(nex.interpreter.nex_map_keys(m)),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__7896 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7897__i = 0, G__7897__a = new Array(arguments.length -  1);
while (G__7897__i < G__7897__a.length) {G__7897__a[G__7897__i] = arguments[G__7897__i + 1]; ++G__7897__i;}
  _ = new cljs.core.IndexedSeq(G__7897__a,0,null);
} 
return G__7896__delegate.call(this,m,_);};
G__7896.cljs$lang$maxFixedArity = 1;
G__7896.cljs$lang$applyTo = (function (arglist__7898){
var m = cljs.core.first(arglist__7898);
var _ = cljs.core.rest(arglist__7898);
return G__7896__delegate(m,_);
});
G__7896.cljs$core$IFn$_invoke$arity$variadic = G__7896__delegate;
return G__7896;
})()
,(function() { 
var G__7899__delegate = function (m,key,_){
return nex.interpreter.nex_map_remove(m,key);
};
var G__7899 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7900__i = 0, G__7900__a = new Array(arguments.length -  2);
while (G__7900__i < G__7900__a.length) {G__7900__a[G__7900__i] = arguments[G__7900__i + 2]; ++G__7900__i;}
  _ = new cljs.core.IndexedSeq(G__7900__a,0,null);
} 
return G__7899__delegate.call(this,m,key,_);};
G__7899.cljs$lang$maxFixedArity = 2;
G__7899.cljs$lang$applyTo = (function (arglist__7901){
var m = cljs.core.first(arglist__7901);
arglist__7901 = cljs.core.next(arglist__7901);
var key = cljs.core.first(arglist__7901);
var _ = cljs.core.rest(arglist__7901);
return G__7899__delegate(m,key,_);
});
G__7899.cljs$core$IFn$_invoke$arity$variadic = G__7899__delegate;
return G__7899;
})()
,(function() { 
var G__7902__delegate = function (m,_){
return nex.interpreter.nex_map_size(m);
};
var G__7902 = function (m,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7903__i = 0, G__7903__a = new Array(arguments.length -  1);
while (G__7903__i < G__7903__a.length) {G__7903__a[G__7903__i] = arguments[G__7903__i + 1]; ++G__7903__i;}
  _ = new cljs.core.IndexedSeq(G__7903__a,0,null);
} 
return G__7902__delegate.call(this,m,_);};
G__7902.cljs$lang$maxFixedArity = 1;
G__7902.cljs$lang$applyTo = (function (arglist__7904){
var m = cljs.core.first(arglist__7904);
var _ = cljs.core.rest(arglist__7904);
return G__7902__delegate(m,_);
});
G__7902.cljs$core$IFn$_invoke$arity$variadic = G__7902__delegate;
return G__7902;
})()
,(function() { 
var G__7905__delegate = function (m,key,_){
var v = nex.interpreter.nex_map_get(m,key);
if((v == null)){
return nex.interpreter.report_contract_violation(nex.interpreter.Precondition,"key_must_exist","has_key");
} else {
return v;
}
};
var G__7905 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7906__i = 0, G__7906__a = new Array(arguments.length -  2);
while (G__7906__i < G__7906__a.length) {G__7906__a[G__7906__i] = arguments[G__7906__i + 2]; ++G__7906__i;}
  _ = new cljs.core.IndexedSeq(G__7906__a,0,null);
} 
return G__7905__delegate.call(this,m,key,_);};
G__7905.cljs$lang$maxFixedArity = 2;
G__7905.cljs$lang$applyTo = (function (arglist__7907){
var m = cljs.core.first(arglist__7907);
arglist__7907 = cljs.core.next(arglist__7907);
var key = cljs.core.first(arglist__7907);
var _ = cljs.core.rest(arglist__7907);
return G__7905__delegate(m,key,_);
});
G__7905.cljs$core$IFn$_invoke$arity$variadic = G__7905__delegate;
return G__7905;
})()
,(function() { 
var G__7908__delegate = function (m,key,_){
return nex.interpreter.nex_map_contains_key(m,key);
};
var G__7908 = function (m,key,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7909__i = 0, G__7909__a = new Array(arguments.length -  2);
while (G__7909__i < G__7909__a.length) {G__7909__a[G__7909__i] = arguments[G__7909__i + 2]; ++G__7909__i;}
  _ = new cljs.core.IndexedSeq(G__7909__a,0,null);
} 
return G__7908__delegate.call(this,m,key,_);};
G__7908.cljs$lang$maxFixedArity = 2;
G__7908.cljs$lang$applyTo = (function (arglist__7910){
var m = cljs.core.first(arglist__7910);
arglist__7910 = cljs.core.next(arglist__7910);
var key = cljs.core.first(arglist__7910);
var _ = cljs.core.rest(arglist__7910);
return G__7908__delegate(m,key,_);
});
G__7908.cljs$core$IFn$_invoke$arity$variadic = G__7908__delegate;
return G__7908;
})()
]),cljs.core.PersistentHashMap.fromArrays(["xpos","right","hide","shape","pensize","end_fill","forward","begin_fill","surface","show","ypos","pendown","penup","speed","circle","backward","color","goto","left"],[(function() { 
var G__7911__delegate = function (t,_){
return nex.turtle_browser.turtle_x(t);
};
var G__7911 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7912__i = 0, G__7912__a = new Array(arguments.length -  1);
while (G__7912__i < G__7912__a.length) {G__7912__a[G__7912__i] = arguments[G__7912__i + 1]; ++G__7912__i;}
  _ = new cljs.core.IndexedSeq(G__7912__a,0,null);
} 
return G__7911__delegate.call(this,t,_);};
G__7911.cljs$lang$maxFixedArity = 1;
G__7911.cljs$lang$applyTo = (function (arglist__7913){
var t = cljs.core.first(arglist__7913);
var _ = cljs.core.rest(arglist__7913);
return G__7911__delegate(t,_);
});
G__7911.cljs$core$IFn$_invoke$arity$variadic = G__7911__delegate;
return G__7911;
})()
,(function() { 
var G__7914__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_right(t,angle);
};
var G__7914 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7915__i = 0, G__7915__a = new Array(arguments.length -  2);
while (G__7915__i < G__7915__a.length) {G__7915__a[G__7915__i] = arguments[G__7915__i + 2]; ++G__7915__i;}
  _ = new cljs.core.IndexedSeq(G__7915__a,0,null);
} 
return G__7914__delegate.call(this,t,angle,_);};
G__7914.cljs$lang$maxFixedArity = 2;
G__7914.cljs$lang$applyTo = (function (arglist__7916){
var t = cljs.core.first(arglist__7916);
arglist__7916 = cljs.core.next(arglist__7916);
var angle = cljs.core.first(arglist__7916);
var _ = cljs.core.rest(arglist__7916);
return G__7914__delegate(t,angle,_);
});
G__7914.cljs$core$IFn$_invoke$arity$variadic = G__7914__delegate;
return G__7914;
})()
,(function() { 
var G__7917__delegate = function (t,_){
return nex.turtle_browser.turtle_hide(t);
};
var G__7917 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7918__i = 0, G__7918__a = new Array(arguments.length -  1);
while (G__7918__i < G__7918__a.length) {G__7918__a[G__7918__i] = arguments[G__7918__i + 1]; ++G__7918__i;}
  _ = new cljs.core.IndexedSeq(G__7918__a,0,null);
} 
return G__7917__delegate.call(this,t,_);};
G__7917.cljs$lang$maxFixedArity = 1;
G__7917.cljs$lang$applyTo = (function (arglist__7919){
var t = cljs.core.first(arglist__7919);
var _ = cljs.core.rest(arglist__7919);
return G__7917__delegate(t,_);
});
G__7917.cljs$core$IFn$_invoke$arity$variadic = G__7917__delegate;
return G__7917;
})()
,(function() { 
var G__7920__delegate = function (t,s,_){
return nex.turtle_browser.turtle_shape(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
};
var G__7920 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7921__i = 0, G__7921__a = new Array(arguments.length -  2);
while (G__7921__i < G__7921__a.length) {G__7921__a[G__7921__i] = arguments[G__7921__i + 2]; ++G__7921__i;}
  _ = new cljs.core.IndexedSeq(G__7921__a,0,null);
} 
return G__7920__delegate.call(this,t,s,_);};
G__7920.cljs$lang$maxFixedArity = 2;
G__7920.cljs$lang$applyTo = (function (arglist__7922){
var t = cljs.core.first(arglist__7922);
arglist__7922 = cljs.core.next(arglist__7922);
var s = cljs.core.first(arglist__7922);
var _ = cljs.core.rest(arglist__7922);
return G__7920__delegate(t,s,_);
});
G__7920.cljs$core$IFn$_invoke$arity$variadic = G__7920__delegate;
return G__7920;
})()
,(function() { 
var G__7923__delegate = function (t,s,_){
return nex.turtle_browser.turtle_pensize(t,s);
};
var G__7923 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7924__i = 0, G__7924__a = new Array(arguments.length -  2);
while (G__7924__i < G__7924__a.length) {G__7924__a[G__7924__i] = arguments[G__7924__i + 2]; ++G__7924__i;}
  _ = new cljs.core.IndexedSeq(G__7924__a,0,null);
} 
return G__7923__delegate.call(this,t,s,_);};
G__7923.cljs$lang$maxFixedArity = 2;
G__7923.cljs$lang$applyTo = (function (arglist__7925){
var t = cljs.core.first(arglist__7925);
arglist__7925 = cljs.core.next(arglist__7925);
var s = cljs.core.first(arglist__7925);
var _ = cljs.core.rest(arglist__7925);
return G__7923__delegate(t,s,_);
});
G__7923.cljs$core$IFn$_invoke$arity$variadic = G__7923__delegate;
return G__7923;
})()
,(function() { 
var G__7926__delegate = function (t,_){
return nex.turtle_browser.turtle_end_fill(t);
};
var G__7926 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7927__i = 0, G__7927__a = new Array(arguments.length -  1);
while (G__7927__i < G__7927__a.length) {G__7927__a[G__7927__i] = arguments[G__7927__i + 1]; ++G__7927__i;}
  _ = new cljs.core.IndexedSeq(G__7927__a,0,null);
} 
return G__7926__delegate.call(this,t,_);};
G__7926.cljs$lang$maxFixedArity = 1;
G__7926.cljs$lang$applyTo = (function (arglist__7928){
var t = cljs.core.first(arglist__7928);
var _ = cljs.core.rest(arglist__7928);
return G__7926__delegate(t,_);
});
G__7926.cljs$core$IFn$_invoke$arity$variadic = G__7926__delegate;
return G__7926;
})()
,(function() { 
var G__7929__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_forward(t,dist);
};
var G__7929 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7930__i = 0, G__7930__a = new Array(arguments.length -  2);
while (G__7930__i < G__7930__a.length) {G__7930__a[G__7930__i] = arguments[G__7930__i + 2]; ++G__7930__i;}
  _ = new cljs.core.IndexedSeq(G__7930__a,0,null);
} 
return G__7929__delegate.call(this,t,dist,_);};
G__7929.cljs$lang$maxFixedArity = 2;
G__7929.cljs$lang$applyTo = (function (arglist__7931){
var t = cljs.core.first(arglist__7931);
arglist__7931 = cljs.core.next(arglist__7931);
var dist = cljs.core.first(arglist__7931);
var _ = cljs.core.rest(arglist__7931);
return G__7929__delegate(t,dist,_);
});
G__7929.cljs$core$IFn$_invoke$arity$variadic = G__7929__delegate;
return G__7929;
})()
,(function() { 
var G__7932__delegate = function (t,_){
return nex.turtle_browser.turtle_begin_fill(t);
};
var G__7932 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7933__i = 0, G__7933__a = new Array(arguments.length -  1);
while (G__7933__i < G__7933__a.length) {G__7933__a[G__7933__i] = arguments[G__7933__i + 1]; ++G__7933__i;}
  _ = new cljs.core.IndexedSeq(G__7933__a,0,null);
} 
return G__7932__delegate.call(this,t,_);};
G__7932.cljs$lang$maxFixedArity = 1;
G__7932.cljs$lang$applyTo = (function (arglist__7934){
var t = cljs.core.first(arglist__7934);
var _ = cljs.core.rest(arglist__7934);
return G__7932__delegate(t,_);
});
G__7932.cljs$core$IFn$_invoke$arity$variadic = G__7932__delegate;
return G__7932;
})()
,(function() { 
var G__7935__delegate = function (t,_){
return nex.turtle_browser.turtle_window(t);
};
var G__7935 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7936__i = 0, G__7936__a = new Array(arguments.length -  1);
while (G__7936__i < G__7936__a.length) {G__7936__a[G__7936__i] = arguments[G__7936__i + 1]; ++G__7936__i;}
  _ = new cljs.core.IndexedSeq(G__7936__a,0,null);
} 
return G__7935__delegate.call(this,t,_);};
G__7935.cljs$lang$maxFixedArity = 1;
G__7935.cljs$lang$applyTo = (function (arglist__7937){
var t = cljs.core.first(arglist__7937);
var _ = cljs.core.rest(arglist__7937);
return G__7935__delegate(t,_);
});
G__7935.cljs$core$IFn$_invoke$arity$variadic = G__7935__delegate;
return G__7935;
})()
,(function() { 
var G__7938__delegate = function (t,_){
return nex.turtle_browser.turtle_show(t);
};
var G__7938 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7939__i = 0, G__7939__a = new Array(arguments.length -  1);
while (G__7939__i < G__7939__a.length) {G__7939__a[G__7939__i] = arguments[G__7939__i + 1]; ++G__7939__i;}
  _ = new cljs.core.IndexedSeq(G__7939__a,0,null);
} 
return G__7938__delegate.call(this,t,_);};
G__7938.cljs$lang$maxFixedArity = 1;
G__7938.cljs$lang$applyTo = (function (arglist__7940){
var t = cljs.core.first(arglist__7940);
var _ = cljs.core.rest(arglist__7940);
return G__7938__delegate(t,_);
});
G__7938.cljs$core$IFn$_invoke$arity$variadic = G__7938__delegate;
return G__7938;
})()
,(function() { 
var G__7941__delegate = function (t,_){
return nex.turtle_browser.turtle_y(t);
};
var G__7941 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7942__i = 0, G__7942__a = new Array(arguments.length -  1);
while (G__7942__i < G__7942__a.length) {G__7942__a[G__7942__i] = arguments[G__7942__i + 1]; ++G__7942__i;}
  _ = new cljs.core.IndexedSeq(G__7942__a,0,null);
} 
return G__7941__delegate.call(this,t,_);};
G__7941.cljs$lang$maxFixedArity = 1;
G__7941.cljs$lang$applyTo = (function (arglist__7944){
var t = cljs.core.first(arglist__7944);
var _ = cljs.core.rest(arglist__7944);
return G__7941__delegate(t,_);
});
G__7941.cljs$core$IFn$_invoke$arity$variadic = G__7941__delegate;
return G__7941;
})()
,(function() { 
var G__7945__delegate = function (t,_){
return nex.turtle_browser.turtle_pendown(t);
};
var G__7945 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7947__i = 0, G__7947__a = new Array(arguments.length -  1);
while (G__7947__i < G__7947__a.length) {G__7947__a[G__7947__i] = arguments[G__7947__i + 1]; ++G__7947__i;}
  _ = new cljs.core.IndexedSeq(G__7947__a,0,null);
} 
return G__7945__delegate.call(this,t,_);};
G__7945.cljs$lang$maxFixedArity = 1;
G__7945.cljs$lang$applyTo = (function (arglist__7948){
var t = cljs.core.first(arglist__7948);
var _ = cljs.core.rest(arglist__7948);
return G__7945__delegate(t,_);
});
G__7945.cljs$core$IFn$_invoke$arity$variadic = G__7945__delegate;
return G__7945;
})()
,(function() { 
var G__7949__delegate = function (t,_){
return nex.turtle_browser.turtle_penup(t);
};
var G__7949 = function (t,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7950__i = 0, G__7950__a = new Array(arguments.length -  1);
while (G__7950__i < G__7950__a.length) {G__7950__a[G__7950__i] = arguments[G__7950__i + 1]; ++G__7950__i;}
  _ = new cljs.core.IndexedSeq(G__7950__a,0,null);
} 
return G__7949__delegate.call(this,t,_);};
G__7949.cljs$lang$maxFixedArity = 1;
G__7949.cljs$lang$applyTo = (function (arglist__7951){
var t = cljs.core.first(arglist__7951);
var _ = cljs.core.rest(arglist__7951);
return G__7949__delegate(t,_);
});
G__7949.cljs$core$IFn$_invoke$arity$variadic = G__7949__delegate;
return G__7949;
})()
,(function() { 
var G__7952__delegate = function (t,s,_){
return nex.turtle_browser.turtle_speed(t,s);
};
var G__7952 = function (t,s,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7953__i = 0, G__7953__a = new Array(arguments.length -  2);
while (G__7953__i < G__7953__a.length) {G__7953__a[G__7953__i] = arguments[G__7953__i + 2]; ++G__7953__i;}
  _ = new cljs.core.IndexedSeq(G__7953__a,0,null);
} 
return G__7952__delegate.call(this,t,s,_);};
G__7952.cljs$lang$maxFixedArity = 2;
G__7952.cljs$lang$applyTo = (function (arglist__7954){
var t = cljs.core.first(arglist__7954);
arglist__7954 = cljs.core.next(arglist__7954);
var s = cljs.core.first(arglist__7954);
var _ = cljs.core.rest(arglist__7954);
return G__7952__delegate(t,s,_);
});
G__7952.cljs$core$IFn$_invoke$arity$variadic = G__7952__delegate;
return G__7952;
})()
,(function() { 
var G__7955__delegate = function (t,r,_){
return nex.turtle_browser.turtle_circle(t,r);
};
var G__7955 = function (t,r,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7960__i = 0, G__7960__a = new Array(arguments.length -  2);
while (G__7960__i < G__7960__a.length) {G__7960__a[G__7960__i] = arguments[G__7960__i + 2]; ++G__7960__i;}
  _ = new cljs.core.IndexedSeq(G__7960__a,0,null);
} 
return G__7955__delegate.call(this,t,r,_);};
G__7955.cljs$lang$maxFixedArity = 2;
G__7955.cljs$lang$applyTo = (function (arglist__7961){
var t = cljs.core.first(arglist__7961);
arglist__7961 = cljs.core.next(arglist__7961);
var r = cljs.core.first(arglist__7961);
var _ = cljs.core.rest(arglist__7961);
return G__7955__delegate(t,r,_);
});
G__7955.cljs$core$IFn$_invoke$arity$variadic = G__7955__delegate;
return G__7955;
})()
,(function() { 
var G__7962__delegate = function (t,dist,_){
return nex.turtle_browser.turtle_backward(t,dist);
};
var G__7962 = function (t,dist,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7963__i = 0, G__7963__a = new Array(arguments.length -  2);
while (G__7963__i < G__7963__a.length) {G__7963__a[G__7963__i] = arguments[G__7963__i + 2]; ++G__7963__i;}
  _ = new cljs.core.IndexedSeq(G__7963__a,0,null);
} 
return G__7962__delegate.call(this,t,dist,_);};
G__7962.cljs$lang$maxFixedArity = 2;
G__7962.cljs$lang$applyTo = (function (arglist__7964){
var t = cljs.core.first(arglist__7964);
arglist__7964 = cljs.core.next(arglist__7964);
var dist = cljs.core.first(arglist__7964);
var _ = cljs.core.rest(arglist__7964);
return G__7962__delegate(t,dist,_);
});
G__7962.cljs$core$IFn$_invoke$arity$variadic = G__7962__delegate;
return G__7962;
})()
,(function() { 
var G__7969__delegate = function (t,c,_){
return nex.turtle_browser.turtle_color(t,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__7969 = function (t,c,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7970__i = 0, G__7970__a = new Array(arguments.length -  2);
while (G__7970__i < G__7970__a.length) {G__7970__a[G__7970__i] = arguments[G__7970__i + 2]; ++G__7970__i;}
  _ = new cljs.core.IndexedSeq(G__7970__a,0,null);
} 
return G__7969__delegate.call(this,t,c,_);};
G__7969.cljs$lang$maxFixedArity = 2;
G__7969.cljs$lang$applyTo = (function (arglist__7971){
var t = cljs.core.first(arglist__7971);
arglist__7971 = cljs.core.next(arglist__7971);
var c = cljs.core.first(arglist__7971);
var _ = cljs.core.rest(arglist__7971);
return G__7969__delegate(t,c,_);
});
G__7969.cljs$core$IFn$_invoke$arity$variadic = G__7969__delegate;
return G__7969;
})()
,(function() { 
var G__7972__delegate = function (t,x,y,_){
return nex.turtle_browser.turtle_goto(t,x,y);
};
var G__7972 = function (t,x,y,var_args){
var _ = null;
if (arguments.length > 3) {
var G__7973__i = 0, G__7973__a = new Array(arguments.length -  3);
while (G__7973__i < G__7973__a.length) {G__7973__a[G__7973__i] = arguments[G__7973__i + 3]; ++G__7973__i;}
  _ = new cljs.core.IndexedSeq(G__7973__a,0,null);
} 
return G__7972__delegate.call(this,t,x,y,_);};
G__7972.cljs$lang$maxFixedArity = 3;
G__7972.cljs$lang$applyTo = (function (arglist__7975){
var t = cljs.core.first(arglist__7975);
arglist__7975 = cljs.core.next(arglist__7975);
var x = cljs.core.first(arglist__7975);
arglist__7975 = cljs.core.next(arglist__7975);
var y = cljs.core.first(arglist__7975);
var _ = cljs.core.rest(arglist__7975);
return G__7972__delegate(t,x,y,_);
});
G__7972.cljs$core$IFn$_invoke$arity$variadic = G__7972__delegate;
return G__7972;
})()
,(function() { 
var G__7977__delegate = function (t,angle,_){
return nex.turtle_browser.turtle_left(t,angle);
};
var G__7977 = function (t,angle,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7978__i = 0, G__7978__a = new Array(arguments.length -  2);
while (G__7978__i < G__7978__a.length) {G__7978__a[G__7978__i] = arguments[G__7978__i + 2]; ++G__7978__i;}
  _ = new cljs.core.IndexedSeq(G__7978__a,0,null);
} 
return G__7977__delegate.call(this,t,angle,_);};
G__7977.cljs$lang$maxFixedArity = 2;
G__7977.cljs$lang$applyTo = (function (arglist__7979){
var t = cljs.core.first(arglist__7979);
arglist__7979 = cljs.core.next(arglist__7979);
var angle = cljs.core.first(arglist__7979);
var _ = cljs.core.rest(arglist__7979);
return G__7977__delegate(t,angle,_);
});
G__7977.cljs$core$IFn$_invoke$arity$variadic = G__7977__delegate;
return G__7977;
})()
]),new cljs.core.PersistentArrayMap(null, 8, ["to_string",(function() { 
var G__7980__delegate = function (b,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));
};
var G__7980 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7981__i = 0, G__7981__a = new Array(arguments.length -  1);
while (G__7981__i < G__7981__a.length) {G__7981__a[G__7981__i] = arguments[G__7981__i + 1]; ++G__7981__i;}
  _ = new cljs.core.IndexedSeq(G__7981__a,0,null);
} 
return G__7980__delegate.call(this,b,_);};
G__7980.cljs$lang$maxFixedArity = 1;
G__7980.cljs$lang$applyTo = (function (arglist__7982){
var b = cljs.core.first(arglist__7982);
var _ = cljs.core.rest(arglist__7982);
return G__7980__delegate(b,_);
});
G__7980.cljs$core$IFn$_invoke$arity$variadic = G__7980__delegate;
return G__7980;
})()
,"and",(function() { 
var G__7983__delegate = function (b,other,_){
var and__5140__auto__ = b;
if(cljs.core.truth_(and__5140__auto__)){
return other;
} else {
return and__5140__auto__;
}
};
var G__7983 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7988__i = 0, G__7988__a = new Array(arguments.length -  2);
while (G__7988__i < G__7988__a.length) {G__7988__a[G__7988__i] = arguments[G__7988__i + 2]; ++G__7988__i;}
  _ = new cljs.core.IndexedSeq(G__7988__a,0,null);
} 
return G__7983__delegate.call(this,b,other,_);};
G__7983.cljs$lang$maxFixedArity = 2;
G__7983.cljs$lang$applyTo = (function (arglist__7989){
var b = cljs.core.first(arglist__7989);
arglist__7989 = cljs.core.next(arglist__7989);
var other = cljs.core.first(arglist__7989);
var _ = cljs.core.rest(arglist__7989);
return G__7983__delegate(b,other,_);
});
G__7983.cljs$core$IFn$_invoke$arity$variadic = G__7983__delegate;
return G__7983;
})()
,"or",(function() { 
var G__7990__delegate = function (b,other,_){
var or__5142__auto__ = b;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return other;
}
};
var G__7990 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7991__i = 0, G__7991__a = new Array(arguments.length -  2);
while (G__7991__i < G__7991__a.length) {G__7991__a[G__7991__i] = arguments[G__7991__i + 2]; ++G__7991__i;}
  _ = new cljs.core.IndexedSeq(G__7991__a,0,null);
} 
return G__7990__delegate.call(this,b,other,_);};
G__7990.cljs$lang$maxFixedArity = 2;
G__7990.cljs$lang$applyTo = (function (arglist__7992){
var b = cljs.core.first(arglist__7992);
arglist__7992 = cljs.core.next(arglist__7992);
var other = cljs.core.first(arglist__7992);
var _ = cljs.core.rest(arglist__7992);
return G__7990__delegate(b,other,_);
});
G__7990.cljs$core$IFn$_invoke$arity$variadic = G__7990__delegate;
return G__7990;
})()
,"not",(function() { 
var G__7993__delegate = function (b,_){
return cljs.core.not(b);
};
var G__7993 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__7994__i = 0, G__7994__a = new Array(arguments.length -  1);
while (G__7994__i < G__7994__a.length) {G__7994__a[G__7994__i] = arguments[G__7994__i + 1]; ++G__7994__i;}
  _ = new cljs.core.IndexedSeq(G__7994__a,0,null);
} 
return G__7993__delegate.call(this,b,_);};
G__7993.cljs$lang$maxFixedArity = 1;
G__7993.cljs$lang$applyTo = (function (arglist__7995){
var b = cljs.core.first(arglist__7995);
var _ = cljs.core.rest(arglist__7995);
return G__7993__delegate(b,_);
});
G__7993.cljs$core$IFn$_invoke$arity$variadic = G__7993__delegate;
return G__7993;
})()
,"equals",(function() { 
var G__7996__delegate = function (b,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7996 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__7997__i = 0, G__7997__a = new Array(arguments.length -  2);
while (G__7997__i < G__7997__a.length) {G__7997__a[G__7997__i] = arguments[G__7997__i + 2]; ++G__7997__i;}
  _ = new cljs.core.IndexedSeq(G__7997__a,0,null);
} 
return G__7996__delegate.call(this,b,other,_);};
G__7996.cljs$lang$maxFixedArity = 2;
G__7996.cljs$lang$applyTo = (function (arglist__7998){
var b = cljs.core.first(arglist__7998);
arglist__7998 = cljs.core.next(arglist__7998);
var other = cljs.core.first(arglist__7998);
var _ = cljs.core.rest(arglist__7998);
return G__7996__delegate(b,other,_);
});
G__7996.cljs$core$IFn$_invoke$arity$variadic = G__7996__delegate;
return G__7996;
})()
,"not_equals",(function() { 
var G__7999__delegate = function (b,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(b,other);
};
var G__7999 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8000__i = 0, G__8000__a = new Array(arguments.length -  2);
while (G__8000__i < G__8000__a.length) {G__8000__a[G__8000__i] = arguments[G__8000__i + 2]; ++G__8000__i;}
  _ = new cljs.core.IndexedSeq(G__8000__a,0,null);
} 
return G__7999__delegate.call(this,b,other,_);};
G__7999.cljs$lang$maxFixedArity = 2;
G__7999.cljs$lang$applyTo = (function (arglist__8001){
var b = cljs.core.first(arglist__8001);
arglist__8001 = cljs.core.next(arglist__8001);
var other = cljs.core.first(arglist__8001);
var _ = cljs.core.rest(arglist__8001);
return G__7999__delegate(b,other,_);
});
G__7999.cljs$core$IFn$_invoke$arity$variadic = G__7999__delegate;
return G__7999;
})()
,"compare",(function() { 
var G__8002__delegate = function (b,other,_){
return nex_compare(b,other);
};
var G__8002 = function (b,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8007__i = 0, G__8007__a = new Array(arguments.length -  2);
while (G__8007__i < G__8007__a.length) {G__8007__a[G__8007__i] = arguments[G__8007__i + 2]; ++G__8007__i;}
  _ = new cljs.core.IndexedSeq(G__8007__a,0,null);
} 
return G__8002__delegate.call(this,b,other,_);};
G__8002.cljs$lang$maxFixedArity = 2;
G__8002.cljs$lang$applyTo = (function (arglist__8008){
var b = cljs.core.first(arglist__8008);
arglist__8008 = cljs.core.next(arglist__8008);
var other = cljs.core.first(arglist__8008);
var _ = cljs.core.rest(arglist__8008);
return G__8002__delegate(b,other,_);
});
G__8002.cljs$core$IFn$_invoke$arity$variadic = G__8002__delegate;
return G__8002;
})()
,"hash",(function() { 
var G__8009__delegate = function (b,_){
return cljs.core.hash(b);
};
var G__8009 = function (b,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8010__i = 0, G__8010__a = new Array(arguments.length -  1);
while (G__8010__i < G__8010__a.length) {G__8010__a[G__8010__i] = arguments[G__8010__i + 1]; ++G__8010__i;}
  _ = new cljs.core.IndexedSeq(G__8010__a,0,null);
} 
return G__8009__delegate.call(this,b,_);};
G__8009.cljs$lang$maxFixedArity = 1;
G__8009.cljs$lang$applyTo = (function (arglist__8011){
var b = cljs.core.first(arglist__8011);
var _ = cljs.core.rest(arglist__8011);
return G__8009__delegate(b,_);
});
G__8009.cljs$core$IFn$_invoke$arity$variadic = G__8009__delegate;
return G__8009;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["read",(function() { 
var G__8016__delegate = function (f,_){
return nex.interpreter.nex_file_read(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__8016 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8017__i = 0, G__8017__a = new Array(arguments.length -  1);
while (G__8017__i < G__8017__a.length) {G__8017__a[G__8017__i] = arguments[G__8017__i + 1]; ++G__8017__i;}
  _ = new cljs.core.IndexedSeq(G__8017__a,0,null);
} 
return G__8016__delegate.call(this,f,_);};
G__8016.cljs$lang$maxFixedArity = 1;
G__8016.cljs$lang$applyTo = (function (arglist__8018){
var f = cljs.core.first(arglist__8018);
var _ = cljs.core.rest(arglist__8018);
return G__8016__delegate(f,_);
});
G__8016.cljs$core$IFn$_invoke$arity$variadic = G__8016__delegate;
return G__8016;
})()
,"write",(function() { 
var G__8019__delegate = function (f,content,_){
nex.interpreter.nex_file_write(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__8019 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8024__i = 0, G__8024__a = new Array(arguments.length -  2);
while (G__8024__i < G__8024__a.length) {G__8024__a[G__8024__i] = arguments[G__8024__i + 2]; ++G__8024__i;}
  _ = new cljs.core.IndexedSeq(G__8024__a,0,null);
} 
return G__8019__delegate.call(this,f,content,_);};
G__8019.cljs$lang$maxFixedArity = 2;
G__8019.cljs$lang$applyTo = (function (arglist__8025){
var f = cljs.core.first(arglist__8025);
arglist__8025 = cljs.core.next(arglist__8025);
var content = cljs.core.first(arglist__8025);
var _ = cljs.core.rest(arglist__8025);
return G__8019__delegate(f,content,_);
});
G__8019.cljs$core$IFn$_invoke$arity$variadic = G__8019__delegate;
return G__8019;
})()
,"append",(function() { 
var G__8030__delegate = function (f,content,_){
nex.interpreter.nex_file_append(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)));

return null;
};
var G__8030 = function (f,content,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8031__i = 0, G__8031__a = new Array(arguments.length -  2);
while (G__8031__i < G__8031__a.length) {G__8031__a[G__8031__i] = arguments[G__8031__i + 2]; ++G__8031__i;}
  _ = new cljs.core.IndexedSeq(G__8031__a,0,null);
} 
return G__8030__delegate.call(this,f,content,_);};
G__8030.cljs$lang$maxFixedArity = 2;
G__8030.cljs$lang$applyTo = (function (arglist__8032){
var f = cljs.core.first(arglist__8032);
arglist__8032 = cljs.core.next(arglist__8032);
var content = cljs.core.first(arglist__8032);
var _ = cljs.core.rest(arglist__8032);
return G__8030__delegate(f,content,_);
});
G__8030.cljs$core$IFn$_invoke$arity$variadic = G__8030__delegate;
return G__8030;
})()
,"exists",(function() { 
var G__8033__delegate = function (f,_){
return nex.interpreter.nex_file_exists_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__8033 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8034__i = 0, G__8034__a = new Array(arguments.length -  1);
while (G__8034__i < G__8034__a.length) {G__8034__a[G__8034__i] = arguments[G__8034__i + 1]; ++G__8034__i;}
  _ = new cljs.core.IndexedSeq(G__8034__a,0,null);
} 
return G__8033__delegate.call(this,f,_);};
G__8033.cljs$lang$maxFixedArity = 1;
G__8033.cljs$lang$applyTo = (function (arglist__8035){
var f = cljs.core.first(arglist__8035);
var _ = cljs.core.rest(arglist__8035);
return G__8033__delegate(f,_);
});
G__8033.cljs$core$IFn$_invoke$arity$variadic = G__8033__delegate;
return G__8033;
})()
,"delete",(function() { 
var G__8036__delegate = function (f,_){
nex.interpreter.nex_file_delete(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));

return null;
};
var G__8036 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8037__i = 0, G__8037__a = new Array(arguments.length -  1);
while (G__8037__i < G__8037__a.length) {G__8037__a[G__8037__i] = arguments[G__8037__i + 1]; ++G__8037__i;}
  _ = new cljs.core.IndexedSeq(G__8037__a,0,null);
} 
return G__8036__delegate.call(this,f,_);};
G__8036.cljs$lang$maxFixedArity = 1;
G__8036.cljs$lang$applyTo = (function (arglist__8038){
var f = cljs.core.first(arglist__8038);
var _ = cljs.core.rest(arglist__8038);
return G__8036__delegate(f,_);
});
G__8036.cljs$core$IFn$_invoke$arity$variadic = G__8036__delegate;
return G__8036;
})()
,"lines",(function() { 
var G__8039__delegate = function (f,_){
return nex.interpreter.nex_file_lines(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f));
};
var G__8039 = function (f,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8041__i = 0, G__8041__a = new Array(arguments.length -  1);
while (G__8041__i < G__8041__a.length) {G__8041__a[G__8041__i] = arguments[G__8041__i + 1]; ++G__8041__i;}
  _ = new cljs.core.IndexedSeq(G__8041__a,0,null);
} 
return G__8039__delegate.call(this,f,_);};
G__8039.cljs$lang$maxFixedArity = 1;
G__8039.cljs$lang$applyTo = (function (arglist__8042){
var f = cljs.core.first(arglist__8042);
var _ = cljs.core.rest(arglist__8042);
return G__8039__delegate(f,_);
});
G__8039.cljs$core$IFn$_invoke$arity$variadic = G__8039__delegate;
return G__8039;
})()
,"close",(function() { 
var G__8043__delegate = function (_,___$1){
return null;
};
var G__8043 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8044__i = 0, G__8044__a = new Array(arguments.length -  1);
while (G__8044__i < G__8044__a.length) {G__8044__a[G__8044__i] = arguments[G__8044__i + 1]; ++G__8044__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8044__a,0,null);
} 
return G__8043__delegate.call(this,_,___$1);};
G__8043.cljs$lang$maxFixedArity = 1;
G__8043.cljs$lang$applyTo = (function (arglist__8045){
var _ = cljs.core.first(arglist__8045);
var ___$1 = cljs.core.rest(arglist__8045);
return G__8043__delegate(_,___$1);
});
G__8043.cljs$core$IFn$_invoke$arity$variadic = G__8043__delegate;
return G__8043;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","pick","max","not_equals","minus","times","divided_by","abs","equals","greater_than_or_equal"],[(function() { 
var G__8046__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__8046 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8047__i = 0, G__8047__a = new Array(arguments.length -  2);
while (G__8047__i < G__8047__a.length) {G__8047__a[G__8047__i] = arguments[G__8047__i + 2]; ++G__8047__i;}
  _ = new cljs.core.IndexedSeq(G__8047__a,0,null);
} 
return G__8046__delegate.call(this,n,other,_);};
G__8046.cljs$lang$maxFixedArity = 2;
G__8046.cljs$lang$applyTo = (function (arglist__8048){
var n = cljs.core.first(arglist__8048);
arglist__8048 = cljs.core.next(arglist__8048);
var other = cljs.core.first(arglist__8048);
var _ = cljs.core.rest(arglist__8048);
return G__8046__delegate(n,other,_);
});
G__8046.cljs$core$IFn$_invoke$arity$variadic = G__8046__delegate;
return G__8046;
})()
,(function() { 
var G__8049__delegate = function (n,other,_){
return (n <= other);
};
var G__8049 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8050__i = 0, G__8050__a = new Array(arguments.length -  2);
while (G__8050__i < G__8050__a.length) {G__8050__a[G__8050__i] = arguments[G__8050__i + 2]; ++G__8050__i;}
  _ = new cljs.core.IndexedSeq(G__8050__a,0,null);
} 
return G__8049__delegate.call(this,n,other,_);};
G__8049.cljs$lang$maxFixedArity = 2;
G__8049.cljs$lang$applyTo = (function (arglist__8051){
var n = cljs.core.first(arglist__8051);
arglist__8051 = cljs.core.next(arglist__8051);
var other = cljs.core.first(arglist__8051);
var _ = cljs.core.rest(arglist__8051);
return G__8049__delegate(n,other,_);
});
G__8049.cljs$core$IFn$_invoke$arity$variadic = G__8049__delegate;
return G__8049;
})()
,(function() { 
var G__8052__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8052 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8053__i = 0, G__8053__a = new Array(arguments.length -  2);
while (G__8053__i < G__8053__a.length) {G__8053__a[G__8053__i] = arguments[G__8053__i + 2]; ++G__8053__i;}
  _ = new cljs.core.IndexedSeq(G__8053__a,0,null);
} 
return G__8052__delegate.call(this,n,other,_);};
G__8052.cljs$lang$maxFixedArity = 2;
G__8052.cljs$lang$applyTo = (function (arglist__8054){
var n = cljs.core.first(arglist__8054);
arglist__8054 = cljs.core.next(arglist__8054);
var other = cljs.core.first(arglist__8054);
var _ = cljs.core.rest(arglist__8054);
return G__8052__delegate(n,other,_);
});
G__8052.cljs$core$IFn$_invoke$arity$variadic = G__8052__delegate;
return G__8052;
})()
,(function() { 
var G__8055__delegate = function (n,other,_){
return (n < other);
};
var G__8055 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8056__i = 0, G__8056__a = new Array(arguments.length -  2);
while (G__8056__i < G__8056__a.length) {G__8056__a[G__8056__i] = arguments[G__8056__i + 2]; ++G__8056__i;}
  _ = new cljs.core.IndexedSeq(G__8056__a,0,null);
} 
return G__8055__delegate.call(this,n,other,_);};
G__8055.cljs$lang$maxFixedArity = 2;
G__8055.cljs$lang$applyTo = (function (arglist__8057){
var n = cljs.core.first(arglist__8057);
arglist__8057 = cljs.core.next(arglist__8057);
var other = cljs.core.first(arglist__8057);
var _ = cljs.core.rest(arglist__8057);
return G__8055__delegate(n,other,_);
});
G__8055.cljs$core$IFn$_invoke$arity$variadic = G__8055__delegate;
return G__8055;
})()
,(function() { 
var G__8058__delegate = function (n,other,_){
return (n + other);
};
var G__8058 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8059__i = 0, G__8059__a = new Array(arguments.length -  2);
while (G__8059__i < G__8059__a.length) {G__8059__a[G__8059__i] = arguments[G__8059__i + 2]; ++G__8059__i;}
  _ = new cljs.core.IndexedSeq(G__8059__a,0,null);
} 
return G__8058__delegate.call(this,n,other,_);};
G__8058.cljs$lang$maxFixedArity = 2;
G__8058.cljs$lang$applyTo = (function (arglist__8060){
var n = cljs.core.first(arglist__8060);
arglist__8060 = cljs.core.next(arglist__8060);
var other = cljs.core.first(arglist__8060);
var _ = cljs.core.rest(arglist__8060);
return G__8058__delegate(n,other,_);
});
G__8058.cljs$core$IFn$_invoke$arity$variadic = G__8058__delegate;
return G__8058;
})()
,(function() { 
var G__8061__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__8061 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8062__i = 0, G__8062__a = new Array(arguments.length -  1);
while (G__8062__i < G__8062__a.length) {G__8062__a[G__8062__i] = arguments[G__8062__i + 1]; ++G__8062__i;}
  _ = new cljs.core.IndexedSeq(G__8062__a,0,null);
} 
return G__8061__delegate.call(this,n,_);};
G__8061.cljs$lang$maxFixedArity = 1;
G__8061.cljs$lang$applyTo = (function (arglist__8063){
var n = cljs.core.first(arglist__8063);
var _ = cljs.core.rest(arglist__8063);
return G__8061__delegate(n,_);
});
G__8061.cljs$core$IFn$_invoke$arity$variadic = G__8061__delegate;
return G__8061;
})()
,(function() { 
var G__8064__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__8064 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8065__i = 0, G__8065__a = new Array(arguments.length -  1);
while (G__8065__i < G__8065__a.length) {G__8065__a[G__8065__i] = arguments[G__8065__i + 1]; ++G__8065__i;}
  _ = new cljs.core.IndexedSeq(G__8065__a,0,null);
} 
return G__8064__delegate.call(this,n,_);};
G__8064.cljs$lang$maxFixedArity = 1;
G__8064.cljs$lang$applyTo = (function (arglist__8066){
var n = cljs.core.first(arglist__8066);
var _ = cljs.core.rest(arglist__8066);
return G__8064__delegate(n,_);
});
G__8064.cljs$core$IFn$_invoke$arity$variadic = G__8064__delegate;
return G__8064;
})()
,(function() { 
var G__8067__delegate = function (n,other,_){
return (n > other);
};
var G__8067 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8068__i = 0, G__8068__a = new Array(arguments.length -  2);
while (G__8068__i < G__8068__a.length) {G__8068__a[G__8068__i] = arguments[G__8068__i + 2]; ++G__8068__i;}
  _ = new cljs.core.IndexedSeq(G__8068__a,0,null);
} 
return G__8067__delegate.call(this,n,other,_);};
G__8067.cljs$lang$maxFixedArity = 2;
G__8067.cljs$lang$applyTo = (function (arglist__8069){
var n = cljs.core.first(arglist__8069);
arglist__8069 = cljs.core.next(arglist__8069);
var other = cljs.core.first(arglist__8069);
var _ = cljs.core.rest(arglist__8069);
return G__8067__delegate(n,other,_);
});
G__8067.cljs$core$IFn$_invoke$arity$variadic = G__8067__delegate;
return G__8067;
})()
,(function() { 
var G__8070__delegate = function (n,_){
return cljs.core.rand_int(n);
};
var G__8070 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8071__i = 0, G__8071__a = new Array(arguments.length -  1);
while (G__8071__i < G__8071__a.length) {G__8071__a[G__8071__i] = arguments[G__8071__i + 1]; ++G__8071__i;}
  _ = new cljs.core.IndexedSeq(G__8071__a,0,null);
} 
return G__8070__delegate.call(this,n,_);};
G__8070.cljs$lang$maxFixedArity = 1;
G__8070.cljs$lang$applyTo = (function (arglist__8072){
var n = cljs.core.first(arglist__8072);
var _ = cljs.core.rest(arglist__8072);
return G__8070__delegate(n,_);
});
G__8070.cljs$core$IFn$_invoke$arity$variadic = G__8070__delegate;
return G__8070;
})()
,(function() { 
var G__8073__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8073 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8074__i = 0, G__8074__a = new Array(arguments.length -  2);
while (G__8074__i < G__8074__a.length) {G__8074__a[G__8074__i] = arguments[G__8074__i + 2]; ++G__8074__i;}
  _ = new cljs.core.IndexedSeq(G__8074__a,0,null);
} 
return G__8073__delegate.call(this,n,other,_);};
G__8073.cljs$lang$maxFixedArity = 2;
G__8073.cljs$lang$applyTo = (function (arglist__8075){
var n = cljs.core.first(arglist__8075);
arglist__8075 = cljs.core.next(arglist__8075);
var other = cljs.core.first(arglist__8075);
var _ = cljs.core.rest(arglist__8075);
return G__8073__delegate(n,other,_);
});
G__8073.cljs$core$IFn$_invoke$arity$variadic = G__8073__delegate;
return G__8073;
})()
,(function() { 
var G__8076__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8076 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8077__i = 0, G__8077__a = new Array(arguments.length -  2);
while (G__8077__i < G__8077__a.length) {G__8077__a[G__8077__i] = arguments[G__8077__i + 2]; ++G__8077__i;}
  _ = new cljs.core.IndexedSeq(G__8077__a,0,null);
} 
return G__8076__delegate.call(this,n,other,_);};
G__8076.cljs$lang$maxFixedArity = 2;
G__8076.cljs$lang$applyTo = (function (arglist__8078){
var n = cljs.core.first(arglist__8078);
arglist__8078 = cljs.core.next(arglist__8078);
var other = cljs.core.first(arglist__8078);
var _ = cljs.core.rest(arglist__8078);
return G__8076__delegate(n,other,_);
});
G__8076.cljs$core$IFn$_invoke$arity$variadic = G__8076__delegate;
return G__8076;
})()
,(function() { 
var G__8079__delegate = function (n,other,_){
return (n - other);
};
var G__8079 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8080__i = 0, G__8080__a = new Array(arguments.length -  2);
while (G__8080__i < G__8080__a.length) {G__8080__a[G__8080__i] = arguments[G__8080__i + 2]; ++G__8080__i;}
  _ = new cljs.core.IndexedSeq(G__8080__a,0,null);
} 
return G__8079__delegate.call(this,n,other,_);};
G__8079.cljs$lang$maxFixedArity = 2;
G__8079.cljs$lang$applyTo = (function (arglist__8081){
var n = cljs.core.first(arglist__8081);
arglist__8081 = cljs.core.next(arglist__8081);
var other = cljs.core.first(arglist__8081);
var _ = cljs.core.rest(arglist__8081);
return G__8079__delegate(n,other,_);
});
G__8079.cljs$core$IFn$_invoke$arity$variadic = G__8079__delegate;
return G__8079;
})()
,(function() { 
var G__8082__delegate = function (n,other,_){
return (n * other);
};
var G__8082 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8083__i = 0, G__8083__a = new Array(arguments.length -  2);
while (G__8083__i < G__8083__a.length) {G__8083__a[G__8083__i] = arguments[G__8083__i + 2]; ++G__8083__i;}
  _ = new cljs.core.IndexedSeq(G__8083__a,0,null);
} 
return G__8082__delegate.call(this,n,other,_);};
G__8082.cljs$lang$maxFixedArity = 2;
G__8082.cljs$lang$applyTo = (function (arglist__8084){
var n = cljs.core.first(arglist__8084);
arglist__8084 = cljs.core.next(arglist__8084);
var other = cljs.core.first(arglist__8084);
var _ = cljs.core.rest(arglist__8084);
return G__8082__delegate(n,other,_);
});
G__8082.cljs$core$IFn$_invoke$arity$variadic = G__8082__delegate;
return G__8082;
})()
,(function() { 
var G__8085__delegate = function (n,other,_){
return (n / other);
};
var G__8085 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8086__i = 0, G__8086__a = new Array(arguments.length -  2);
while (G__8086__i < G__8086__a.length) {G__8086__a[G__8086__i] = arguments[G__8086__i + 2]; ++G__8086__i;}
  _ = new cljs.core.IndexedSeq(G__8086__a,0,null);
} 
return G__8085__delegate.call(this,n,other,_);};
G__8085.cljs$lang$maxFixedArity = 2;
G__8085.cljs$lang$applyTo = (function (arglist__8087){
var n = cljs.core.first(arglist__8087);
arglist__8087 = cljs.core.next(arglist__8087);
var other = cljs.core.first(arglist__8087);
var _ = cljs.core.rest(arglist__8087);
return G__8085__delegate(n,other,_);
});
G__8085.cljs$core$IFn$_invoke$arity$variadic = G__8085__delegate;
return G__8085;
})()
,(function() { 
var G__8088__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__8088 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8089__i = 0, G__8089__a = new Array(arguments.length -  1);
while (G__8089__i < G__8089__a.length) {G__8089__a[G__8089__i] = arguments[G__8089__i + 1]; ++G__8089__i;}
  _ = new cljs.core.IndexedSeq(G__8089__a,0,null);
} 
return G__8088__delegate.call(this,n,_);};
G__8088.cljs$lang$maxFixedArity = 1;
G__8088.cljs$lang$applyTo = (function (arglist__8090){
var n = cljs.core.first(arglist__8090);
var _ = cljs.core.rest(arglist__8090);
return G__8088__delegate(n,_);
});
G__8088.cljs$core$IFn$_invoke$arity$variadic = G__8088__delegate;
return G__8088;
})()
,(function() { 
var G__8091__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8091 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8092__i = 0, G__8092__a = new Array(arguments.length -  2);
while (G__8092__i < G__8092__a.length) {G__8092__a[G__8092__i] = arguments[G__8092__i + 2]; ++G__8092__i;}
  _ = new cljs.core.IndexedSeq(G__8092__a,0,null);
} 
return G__8091__delegate.call(this,n,other,_);};
G__8091.cljs$lang$maxFixedArity = 2;
G__8091.cljs$lang$applyTo = (function (arglist__8093){
var n = cljs.core.first(arglist__8093);
arglist__8093 = cljs.core.next(arglist__8093);
var other = cljs.core.first(arglist__8093);
var _ = cljs.core.rest(arglist__8093);
return G__8091__delegate(n,other,_);
});
G__8091.cljs$core$IFn$_invoke$arity$variadic = G__8091__delegate;
return G__8091;
})()
,(function() { 
var G__8094__delegate = function (n,other,_){
return (n >= other);
};
var G__8094 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8095__i = 0, G__8095__a = new Array(arguments.length -  2);
while (G__8095__i < G__8095__a.length) {G__8095__a[G__8095__i] = arguments[G__8095__i + 2]; ++G__8095__i;}
  _ = new cljs.core.IndexedSeq(G__8095__a,0,null);
} 
return G__8094__delegate.call(this,n,other,_);};
G__8094.cljs$lang$maxFixedArity = 2;
G__8094.cljs$lang$applyTo = (function (arglist__8096){
var n = cljs.core.first(arglist__8096);
arglist__8096 = cljs.core.next(arglist__8096);
var other = cljs.core.first(arglist__8096);
var _ = cljs.core.rest(arglist__8096);
return G__8094__delegate(n,other,_);
});
G__8094.cljs$core$IFn$_invoke$arity$variadic = G__8094__delegate;
return G__8094;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__8097__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c),nex.interpreter.nex_map_keys(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__8097 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8098__i = 0, G__8098__a = new Array(arguments.length -  1);
while (G__8098__i < G__8098__a.length) {G__8098__a[G__8098__i] = arguments[G__8098__i + 1]; ++G__8098__i;}
  _ = new cljs.core.IndexedSeq(G__8098__a,0,null);
} 
return G__8097__delegate.call(this,c,_);};
G__8097.cljs$lang$maxFixedArity = 1;
G__8097.cljs$lang$applyTo = (function (arglist__8099){
var c = cljs.core.first(arglist__8099);
var _ = cljs.core.rest(arglist__8099);
return G__8097__delegate(c,_);
});
G__8097.cljs$core$IFn$_invoke$arity$variadic = G__8097__delegate;
return G__8097;
})()
,"item",(function() { 
var G__8100__delegate = function (c,_){
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
var G__8100 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8101__i = 0, G__8101__a = new Array(arguments.length -  1);
while (G__8101__i < G__8101__a.length) {G__8101__a[G__8101__i] = arguments[G__8101__i + 1]; ++G__8101__i;}
  _ = new cljs.core.IndexedSeq(G__8101__a,0,null);
} 
return G__8100__delegate.call(this,c,_);};
G__8100.cljs$lang$maxFixedArity = 1;
G__8100.cljs$lang$applyTo = (function (arglist__8102){
var c = cljs.core.first(arglist__8102);
var _ = cljs.core.rest(arglist__8102);
return G__8100__delegate(c,_);
});
G__8100.cljs$core$IFn$_invoke$arity$variadic = G__8100__delegate;
return G__8100;
})()
,"next",(function() { 
var G__8103__delegate = function (c,_){
var ks = cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c));
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(ks))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__8103 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8104__i = 0, G__8104__a = new Array(arguments.length -  1);
while (G__8104__i < G__8104__a.length) {G__8104__a[G__8104__i] = arguments[G__8104__i + 1]; ++G__8104__i;}
  _ = new cljs.core.IndexedSeq(G__8104__a,0,null);
} 
return G__8103__delegate.call(this,c,_);};
G__8103.cljs$lang$maxFixedArity = 1;
G__8103.cljs$lang$applyTo = (function (arglist__8105){
var c = cljs.core.first(arglist__8105);
var _ = cljs.core.rest(arglist__8105);
return G__8103__delegate(c,_);
});
G__8103.cljs$core$IFn$_invoke$arity$variadic = G__8103__delegate;
return G__8103;
})()
,"at_end",(function() { 
var G__8106__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(c))));
};
var G__8106 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8107__i = 0, G__8107__a = new Array(arguments.length -  1);
while (G__8107__i < G__8107__a.length) {G__8107__a[G__8107__i] = arguments[G__8107__i + 1]; ++G__8107__i;}
  _ = new cljs.core.IndexedSeq(G__8107__a,0,null);
} 
return G__8106__delegate.call(this,c,_);};
G__8106.cljs$lang$maxFixedArity = 1;
G__8106.cljs$lang$applyTo = (function (arglist__8109){
var c = cljs.core.first(arglist__8109);
var _ = cljs.core.rest(arglist__8109);
return G__8106__delegate(c,_);
});
G__8106.cljs$core$IFn$_invoke$arity$variadic = G__8106__delegate;
return G__8106;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__8110__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__8110 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8111__i = 0, G__8111__a = new Array(arguments.length -  2);
while (G__8111__i < G__8111__a.length) {G__8111__a[G__8111__i] = arguments[G__8111__i + 2]; ++G__8111__i;}
  _ = new cljs.core.IndexedSeq(G__8111__a,0,null);
} 
return G__8110__delegate.call(this,n,other,_);};
G__8110.cljs$lang$maxFixedArity = 2;
G__8110.cljs$lang$applyTo = (function (arglist__8112){
var n = cljs.core.first(arglist__8112);
arglist__8112 = cljs.core.next(arglist__8112);
var other = cljs.core.first(arglist__8112);
var _ = cljs.core.rest(arglist__8112);
return G__8110__delegate(n,other,_);
});
G__8110.cljs$core$IFn$_invoke$arity$variadic = G__8110__delegate;
return G__8110;
})()
,(function() { 
var G__8113__delegate = function (n,other,_){
return (n <= other);
};
var G__8113 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8114__i = 0, G__8114__a = new Array(arguments.length -  2);
while (G__8114__i < G__8114__a.length) {G__8114__a[G__8114__i] = arguments[G__8114__i + 2]; ++G__8114__i;}
  _ = new cljs.core.IndexedSeq(G__8114__a,0,null);
} 
return G__8113__delegate.call(this,n,other,_);};
G__8113.cljs$lang$maxFixedArity = 2;
G__8113.cljs$lang$applyTo = (function (arglist__8115){
var n = cljs.core.first(arglist__8115);
arglist__8115 = cljs.core.next(arglist__8115);
var other = cljs.core.first(arglist__8115);
var _ = cljs.core.rest(arglist__8115);
return G__8113__delegate(n,other,_);
});
G__8113.cljs$core$IFn$_invoke$arity$variadic = G__8113__delegate;
return G__8113;
})()
,(function() { 
var G__8116__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8116 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8117__i = 0, G__8117__a = new Array(arguments.length -  2);
while (G__8117__i < G__8117__a.length) {G__8117__a[G__8117__i] = arguments[G__8117__i + 2]; ++G__8117__i;}
  _ = new cljs.core.IndexedSeq(G__8117__a,0,null);
} 
return G__8116__delegate.call(this,n,other,_);};
G__8116.cljs$lang$maxFixedArity = 2;
G__8116.cljs$lang$applyTo = (function (arglist__8118){
var n = cljs.core.first(arglist__8118);
arglist__8118 = cljs.core.next(arglist__8118);
var other = cljs.core.first(arglist__8118);
var _ = cljs.core.rest(arglist__8118);
return G__8116__delegate(n,other,_);
});
G__8116.cljs$core$IFn$_invoke$arity$variadic = G__8116__delegate;
return G__8116;
})()
,(function() { 
var G__8119__delegate = function (n,other,_){
return (n < other);
};
var G__8119 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8120__i = 0, G__8120__a = new Array(arguments.length -  2);
while (G__8120__i < G__8120__a.length) {G__8120__a[G__8120__i] = arguments[G__8120__i + 2]; ++G__8120__i;}
  _ = new cljs.core.IndexedSeq(G__8120__a,0,null);
} 
return G__8119__delegate.call(this,n,other,_);};
G__8119.cljs$lang$maxFixedArity = 2;
G__8119.cljs$lang$applyTo = (function (arglist__8121){
var n = cljs.core.first(arglist__8121);
arglist__8121 = cljs.core.next(arglist__8121);
var other = cljs.core.first(arglist__8121);
var _ = cljs.core.rest(arglist__8121);
return G__8119__delegate(n,other,_);
});
G__8119.cljs$core$IFn$_invoke$arity$variadic = G__8119__delegate;
return G__8119;
})()
,(function() { 
var G__8123__delegate = function (n,other,_){
return (n + other);
};
var G__8123 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8124__i = 0, G__8124__a = new Array(arguments.length -  2);
while (G__8124__i < G__8124__a.length) {G__8124__a[G__8124__i] = arguments[G__8124__i + 2]; ++G__8124__i;}
  _ = new cljs.core.IndexedSeq(G__8124__a,0,null);
} 
return G__8123__delegate.call(this,n,other,_);};
G__8123.cljs$lang$maxFixedArity = 2;
G__8123.cljs$lang$applyTo = (function (arglist__8125){
var n = cljs.core.first(arglist__8125);
arglist__8125 = cljs.core.next(arglist__8125);
var other = cljs.core.first(arglist__8125);
var _ = cljs.core.rest(arglist__8125);
return G__8123__delegate(n,other,_);
});
G__8123.cljs$core$IFn$_invoke$arity$variadic = G__8123__delegate;
return G__8123;
})()
,(function() { 
var G__8126__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__8126 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8127__i = 0, G__8127__a = new Array(arguments.length -  1);
while (G__8127__i < G__8127__a.length) {G__8127__a[G__8127__i] = arguments[G__8127__i + 1]; ++G__8127__i;}
  _ = new cljs.core.IndexedSeq(G__8127__a,0,null);
} 
return G__8126__delegate.call(this,n,_);};
G__8126.cljs$lang$maxFixedArity = 1;
G__8126.cljs$lang$applyTo = (function (arglist__8128){
var n = cljs.core.first(arglist__8128);
var _ = cljs.core.rest(arglist__8128);
return G__8126__delegate(n,_);
});
G__8126.cljs$core$IFn$_invoke$arity$variadic = G__8126__delegate;
return G__8126;
})()
,(function() { 
var G__8129__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__8129 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8130__i = 0, G__8130__a = new Array(arguments.length -  1);
while (G__8130__i < G__8130__a.length) {G__8130__a[G__8130__i] = arguments[G__8130__i + 1]; ++G__8130__i;}
  _ = new cljs.core.IndexedSeq(G__8130__a,0,null);
} 
return G__8129__delegate.call(this,n,_);};
G__8129.cljs$lang$maxFixedArity = 1;
G__8129.cljs$lang$applyTo = (function (arglist__8131){
var n = cljs.core.first(arglist__8131);
var _ = cljs.core.rest(arglist__8131);
return G__8129__delegate(n,_);
});
G__8129.cljs$core$IFn$_invoke$arity$variadic = G__8129__delegate;
return G__8129;
})()
,(function() { 
var G__8132__delegate = function (n,other,_){
return (n > other);
};
var G__8132 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8133__i = 0, G__8133__a = new Array(arguments.length -  2);
while (G__8133__i < G__8133__a.length) {G__8133__a[G__8133__i] = arguments[G__8133__i + 2]; ++G__8133__i;}
  _ = new cljs.core.IndexedSeq(G__8133__a,0,null);
} 
return G__8132__delegate.call(this,n,other,_);};
G__8132.cljs$lang$maxFixedArity = 2;
G__8132.cljs$lang$applyTo = (function (arglist__8134){
var n = cljs.core.first(arglist__8134);
arglist__8134 = cljs.core.next(arglist__8134);
var other = cljs.core.first(arglist__8134);
var _ = cljs.core.rest(arglist__8134);
return G__8132__delegate(n,other,_);
});
G__8132.cljs$core$IFn$_invoke$arity$variadic = G__8132__delegate;
return G__8132;
})()
,(function() { 
var G__8135__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8135 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8136__i = 0, G__8136__a = new Array(arguments.length -  2);
while (G__8136__i < G__8136__a.length) {G__8136__a[G__8136__i] = arguments[G__8136__i + 2]; ++G__8136__i;}
  _ = new cljs.core.IndexedSeq(G__8136__a,0,null);
} 
return G__8135__delegate.call(this,n,other,_);};
G__8135.cljs$lang$maxFixedArity = 2;
G__8135.cljs$lang$applyTo = (function (arglist__8137){
var n = cljs.core.first(arglist__8137);
arglist__8137 = cljs.core.next(arglist__8137);
var other = cljs.core.first(arglist__8137);
var _ = cljs.core.rest(arglist__8137);
return G__8135__delegate(n,other,_);
});
G__8135.cljs$core$IFn$_invoke$arity$variadic = G__8135__delegate;
return G__8135;
})()
,(function() { 
var G__8138__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8138 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8139__i = 0, G__8139__a = new Array(arguments.length -  2);
while (G__8139__i < G__8139__a.length) {G__8139__a[G__8139__i] = arguments[G__8139__i + 2]; ++G__8139__i;}
  _ = new cljs.core.IndexedSeq(G__8139__a,0,null);
} 
return G__8138__delegate.call(this,n,other,_);};
G__8138.cljs$lang$maxFixedArity = 2;
G__8138.cljs$lang$applyTo = (function (arglist__8140){
var n = cljs.core.first(arglist__8140);
arglist__8140 = cljs.core.next(arglist__8140);
var other = cljs.core.first(arglist__8140);
var _ = cljs.core.rest(arglist__8140);
return G__8138__delegate(n,other,_);
});
G__8138.cljs$core$IFn$_invoke$arity$variadic = G__8138__delegate;
return G__8138;
})()
,(function() { 
var G__8141__delegate = function (n,other,_){
return (n - other);
};
var G__8141 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8142__i = 0, G__8142__a = new Array(arguments.length -  2);
while (G__8142__i < G__8142__a.length) {G__8142__a[G__8142__i] = arguments[G__8142__i + 2]; ++G__8142__i;}
  _ = new cljs.core.IndexedSeq(G__8142__a,0,null);
} 
return G__8141__delegate.call(this,n,other,_);};
G__8141.cljs$lang$maxFixedArity = 2;
G__8141.cljs$lang$applyTo = (function (arglist__8143){
var n = cljs.core.first(arglist__8143);
arglist__8143 = cljs.core.next(arglist__8143);
var other = cljs.core.first(arglist__8143);
var _ = cljs.core.rest(arglist__8143);
return G__8141__delegate(n,other,_);
});
G__8141.cljs$core$IFn$_invoke$arity$variadic = G__8141__delegate;
return G__8141;
})()
,(function() { 
var G__8144__delegate = function (n,other,_){
return (n * other);
};
var G__8144 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8145__i = 0, G__8145__a = new Array(arguments.length -  2);
while (G__8145__i < G__8145__a.length) {G__8145__a[G__8145__i] = arguments[G__8145__i + 2]; ++G__8145__i;}
  _ = new cljs.core.IndexedSeq(G__8145__a,0,null);
} 
return G__8144__delegate.call(this,n,other,_);};
G__8144.cljs$lang$maxFixedArity = 2;
G__8144.cljs$lang$applyTo = (function (arglist__8146){
var n = cljs.core.first(arglist__8146);
arglist__8146 = cljs.core.next(arglist__8146);
var other = cljs.core.first(arglist__8146);
var _ = cljs.core.rest(arglist__8146);
return G__8144__delegate(n,other,_);
});
G__8144.cljs$core$IFn$_invoke$arity$variadic = G__8144__delegate;
return G__8144;
})()
,(function() { 
var G__8147__delegate = function (n,other,_){
return (n / other);
};
var G__8147 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8148__i = 0, G__8148__a = new Array(arguments.length -  2);
while (G__8148__i < G__8148__a.length) {G__8148__a[G__8148__i] = arguments[G__8148__i + 2]; ++G__8148__i;}
  _ = new cljs.core.IndexedSeq(G__8148__a,0,null);
} 
return G__8147__delegate.call(this,n,other,_);};
G__8147.cljs$lang$maxFixedArity = 2;
G__8147.cljs$lang$applyTo = (function (arglist__8149){
var n = cljs.core.first(arglist__8149);
arglist__8149 = cljs.core.next(arglist__8149);
var other = cljs.core.first(arglist__8149);
var _ = cljs.core.rest(arglist__8149);
return G__8147__delegate(n,other,_);
});
G__8147.cljs$core$IFn$_invoke$arity$variadic = G__8147__delegate;
return G__8147;
})()
,(function() { 
var G__8150__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__8150 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8151__i = 0, G__8151__a = new Array(arguments.length -  1);
while (G__8151__i < G__8151__a.length) {G__8151__a[G__8151__i] = arguments[G__8151__i + 1]; ++G__8151__i;}
  _ = new cljs.core.IndexedSeq(G__8151__a,0,null);
} 
return G__8150__delegate.call(this,n,_);};
G__8150.cljs$lang$maxFixedArity = 1;
G__8150.cljs$lang$applyTo = (function (arglist__8152){
var n = cljs.core.first(arglist__8152);
var _ = cljs.core.rest(arglist__8152);
return G__8150__delegate(n,_);
});
G__8150.cljs$core$IFn$_invoke$arity$variadic = G__8150__delegate;
return G__8150;
})()
,(function() { 
var G__8153__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__8153 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8154__i = 0, G__8154__a = new Array(arguments.length -  1);
while (G__8154__i < G__8154__a.length) {G__8154__a[G__8154__i] = arguments[G__8154__i + 1]; ++G__8154__i;}
  _ = new cljs.core.IndexedSeq(G__8154__a,0,null);
} 
return G__8153__delegate.call(this,n,_);};
G__8153.cljs$lang$maxFixedArity = 1;
G__8153.cljs$lang$applyTo = (function (arglist__8155){
var n = cljs.core.first(arglist__8155);
var _ = cljs.core.rest(arglist__8155);
return G__8153__delegate(n,_);
});
G__8153.cljs$core$IFn$_invoke$arity$variadic = G__8153__delegate;
return G__8153;
})()
,(function() { 
var G__8156__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8156 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8157__i = 0, G__8157__a = new Array(arguments.length -  2);
while (G__8157__i < G__8157__a.length) {G__8157__a[G__8157__i] = arguments[G__8157__i + 2]; ++G__8157__i;}
  _ = new cljs.core.IndexedSeq(G__8157__a,0,null);
} 
return G__8156__delegate.call(this,n,other,_);};
G__8156.cljs$lang$maxFixedArity = 2;
G__8156.cljs$lang$applyTo = (function (arglist__8158){
var n = cljs.core.first(arglist__8158);
arglist__8158 = cljs.core.next(arglist__8158);
var other = cljs.core.first(arglist__8158);
var _ = cljs.core.rest(arglist__8158);
return G__8156__delegate(n,other,_);
});
G__8156.cljs$core$IFn$_invoke$arity$variadic = G__8156__delegate;
return G__8156;
})()
,(function() { 
var G__8159__delegate = function (n,other,_){
return (n >= other);
};
var G__8159 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8160__i = 0, G__8160__a = new Array(arguments.length -  2);
while (G__8160__i < G__8160__a.length) {G__8160__a[G__8160__i] = arguments[G__8160__i + 2]; ++G__8160__i;}
  _ = new cljs.core.IndexedSeq(G__8160__a,0,null);
} 
return G__8159__delegate.call(this,n,other,_);};
G__8159.cljs$lang$maxFixedArity = 2;
G__8159.cljs$lang$applyTo = (function (arglist__8161){
var n = cljs.core.first(arglist__8161);
arglist__8161 = cljs.core.next(arglist__8161);
var other = cljs.core.first(arglist__8161);
var _ = cljs.core.rest(arglist__8161);
return G__8159__delegate(n,other,_);
});
G__8159.cljs$core$IFn$_invoke$arity$variadic = G__8159__delegate;
return G__8159;
})()
]),new cljs.core.PersistentArrayMap(null, 4, ["start",(function() { 
var G__8162__delegate = function (c,_){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),(0));

return null;
};
var G__8162 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8163__i = 0, G__8163__a = new Array(arguments.length -  1);
while (G__8163__i < G__8163__a.length) {G__8163__a[G__8163__i] = arguments[G__8163__i + 1]; ++G__8163__i;}
  _ = new cljs.core.IndexedSeq(G__8163__a,0,null);
} 
return G__8162__delegate.call(this,c,_);};
G__8162.cljs$lang$maxFixedArity = 1;
G__8162.cljs$lang$applyTo = (function (arglist__8164){
var c = cljs.core.first(arglist__8164);
var _ = cljs.core.rest(arglist__8164);
return G__8162__delegate(c,_);
});
G__8162.cljs$core$IFn$_invoke$arity$variadic = G__8162__delegate;
return G__8162;
})()
,"item",(function() { 
var G__8165__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cursor is at end",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),idx], null));
}
};
var G__8165 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8167__i = 0, G__8167__a = new Array(arguments.length -  1);
while (G__8167__i < G__8167__a.length) {G__8167__a[G__8167__i] = arguments[G__8167__i + 1]; ++G__8167__i;}
  _ = new cljs.core.IndexedSeq(G__8167__a,0,null);
} 
return G__8165__delegate.call(this,c,_);};
G__8165.cljs$lang$maxFixedArity = 1;
G__8165.cljs$lang$applyTo = (function (arglist__8168){
var c = cljs.core.first(arglist__8168);
var _ = cljs.core.rest(arglist__8168);
return G__8165__delegate(c,_);
});
G__8165.cljs$core$IFn$_invoke$arity$variadic = G__8165__delegate;
return G__8165;
})()
,"next",(function() { 
var G__8169__delegate = function (c,_){
var s = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c);
var idx = cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c));
if((idx < cljs.core.count(s))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c),cljs.core.inc);
} else {
}

return null;
};
var G__8169 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8170__i = 0, G__8170__a = new Array(arguments.length -  1);
while (G__8170__i < G__8170__a.length) {G__8170__a[G__8170__i] = arguments[G__8170__i + 1]; ++G__8170__i;}
  _ = new cljs.core.IndexedSeq(G__8170__a,0,null);
} 
return G__8169__delegate.call(this,c,_);};
G__8169.cljs$lang$maxFixedArity = 1;
G__8169.cljs$lang$applyTo = (function (arglist__8171){
var c = cljs.core.first(arglist__8171);
var _ = cljs.core.rest(arglist__8171);
return G__8169__delegate(c,_);
});
G__8169.cljs$core$IFn$_invoke$arity$variadic = G__8169__delegate;
return G__8169;
})()
,"at_end",(function() { 
var G__8173__delegate = function (c,_){
return (cljs.core.deref(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(c)) >= cljs.core.count(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(c)));
};
var G__8173 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8174__i = 0, G__8174__a = new Array(arguments.length -  1);
while (G__8174__i < G__8174__a.length) {G__8174__a[G__8174__i] = arguments[G__8174__i + 1]; ++G__8174__i;}
  _ = new cljs.core.IndexedSeq(G__8174__a,0,null);
} 
return G__8173__delegate.call(this,c,_);};
G__8173.cljs$lang$maxFixedArity = 1;
G__8173.cljs$lang$applyTo = (function (arglist__8175){
var c = cljs.core.first(arglist__8175);
var _ = cljs.core.rest(arglist__8175);
return G__8173__delegate(c,_);
});
G__8173.cljs$core$IFn$_invoke$arity$variadic = G__8173__delegate;
return G__8173;
})()
], null),new cljs.core.PersistentArrayMap(null, 7, ["print",(function() { 
var G__8176__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

return null;
};
var G__8176 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__8177__i = 0, G__8177__a = new Array(arguments.length -  2);
while (G__8177__i < G__8177__a.length) {G__8177__a[G__8177__i] = arguments[G__8177__i + 2]; ++G__8177__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8177__a,0,null);
} 
return G__8176__delegate.call(this,_,msg,___$1);};
G__8176.cljs$lang$maxFixedArity = 2;
G__8176.cljs$lang$applyTo = (function (arglist__8178){
var _ = cljs.core.first(arglist__8178);
arglist__8178 = cljs.core.next(arglist__8178);
var msg = cljs.core.first(arglist__8178);
var ___$1 = cljs.core.rest(arglist__8178);
return G__8176__delegate(_,msg,___$1);
});
G__8176.cljs$core$IFn$_invoke$arity$variadic = G__8176__delegate;
return G__8176;
})()
,"print_line",(function() { 
var G__8179__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_println((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

return null;
};
var G__8179 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__8180__i = 0, G__8180__a = new Array(arguments.length -  2);
while (G__8180__i < G__8180__a.length) {G__8180__a[G__8180__i] = arguments[G__8180__i + 2]; ++G__8180__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8180__a,0,null);
} 
return G__8179__delegate.call(this,_,msg,___$1);};
G__8179.cljs$lang$maxFixedArity = 2;
G__8179.cljs$lang$applyTo = (function (arglist__8181){
var _ = cljs.core.first(arglist__8181);
arglist__8181 = cljs.core.next(arglist__8181);
var msg = cljs.core.first(arglist__8181);
var ___$1 = cljs.core.rest(arglist__8181);
return G__8179__delegate(_,msg,___$1);
});
G__8179.cljs$core$IFn$_invoke$arity$variadic = G__8179__delegate;
return G__8179;
})()
,"read_line",(function() { 
var G__8182__delegate = function (_,args){
if(cljs.core.seq(args)){
nex.interpreter.nex_console_print((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))));
} else {
}

return nex.interpreter.nex_console_read_line();
};
var G__8182 = function (_,var_args){
var args = null;
if (arguments.length > 1) {
var G__8183__i = 0, G__8183__a = new Array(arguments.length -  1);
while (G__8183__i < G__8183__a.length) {G__8183__a[G__8183__i] = arguments[G__8183__i + 1]; ++G__8183__i;}
  args = new cljs.core.IndexedSeq(G__8183__a,0,null);
} 
return G__8182__delegate.call(this,_,args);};
G__8182.cljs$lang$maxFixedArity = 1;
G__8182.cljs$lang$applyTo = (function (arglist__8184){
var _ = cljs.core.first(arglist__8184);
var args = cljs.core.rest(arglist__8184);
return G__8182__delegate(_,args);
});
G__8182.cljs$core$IFn$_invoke$arity$variadic = G__8182__delegate;
return G__8182;
})()
,"error",(function() { 
var G__8185__delegate = function (_,msg,___$1){
nex.interpreter.nex_console_error((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)));

return null;
};
var G__8185 = function (_,msg,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__8186__i = 0, G__8186__a = new Array(arguments.length -  2);
while (G__8186__i < G__8186__a.length) {G__8186__a[G__8186__i] = arguments[G__8186__i + 2]; ++G__8186__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8186__a,0,null);
} 
return G__8185__delegate.call(this,_,msg,___$1);};
G__8185.cljs$lang$maxFixedArity = 2;
G__8185.cljs$lang$applyTo = (function (arglist__8187){
var _ = cljs.core.first(arglist__8187);
arglist__8187 = cljs.core.next(arglist__8187);
var msg = cljs.core.first(arglist__8187);
var ___$1 = cljs.core.rest(arglist__8187);
return G__8185__delegate(_,msg,___$1);
});
G__8185.cljs$core$IFn$_invoke$arity$variadic = G__8185__delegate;
return G__8185;
})()
,"new_line",(function() { 
var G__8189__delegate = function (_,___$1){
nex.interpreter.nex_console_newline();

return null;
};
var G__8189 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8190__i = 0, G__8190__a = new Array(arguments.length -  1);
while (G__8190__i < G__8190__a.length) {G__8190__a[G__8190__i] = arguments[G__8190__i + 1]; ++G__8190__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8190__a,0,null);
} 
return G__8189__delegate.call(this,_,___$1);};
G__8189.cljs$lang$maxFixedArity = 1;
G__8189.cljs$lang$applyTo = (function (arglist__8191){
var _ = cljs.core.first(arglist__8191);
var ___$1 = cljs.core.rest(arglist__8191);
return G__8189__delegate(_,___$1);
});
G__8189.cljs$core$IFn$_invoke$arity$variadic = G__8189__delegate;
return G__8189;
})()
,"read_integer",(function() { 
var G__8192__delegate = function (_,___$1){
return nex.interpreter.nex_parse_integer(nex.interpreter.nex_console_read_line());
};
var G__8192 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8193__i = 0, G__8193__a = new Array(arguments.length -  1);
while (G__8193__i < G__8193__a.length) {G__8193__a[G__8193__i] = arguments[G__8193__i + 1]; ++G__8193__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8193__a,0,null);
} 
return G__8192__delegate.call(this,_,___$1);};
G__8192.cljs$lang$maxFixedArity = 1;
G__8192.cljs$lang$applyTo = (function (arglist__8194){
var _ = cljs.core.first(arglist__8194);
var ___$1 = cljs.core.rest(arglist__8194);
return G__8192__delegate(_,___$1);
});
G__8192.cljs$core$IFn$_invoke$arity$variadic = G__8192__delegate;
return G__8192;
})()
,"read_real",(function() { 
var G__8195__delegate = function (_,___$1){
return nex.interpreter.nex_parse_real(nex.interpreter.nex_console_read_line());
};
var G__8195 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8196__i = 0, G__8196__a = new Array(arguments.length -  1);
while (G__8196__i < G__8196__a.length) {G__8196__a[G__8196__i] = arguments[G__8196__i + 1]; ++G__8196__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8196__a,0,null);
} 
return G__8195__delegate.call(this,_,___$1);};
G__8195.cljs$lang$maxFixedArity = 1;
G__8195.cljs$lang$applyTo = (function (arglist__8197){
var _ = cljs.core.first(arglist__8197);
var ___$1 = cljs.core.rest(arglist__8197);
return G__8195__delegate(_,___$1);
});
G__8195.cljs$core$IFn$_invoke$arity$variadic = G__8195__delegate;
return G__8195;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["draw_text","vw","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear","vh"],[(function() { 
var G__8198__delegate = function (w,text,x,y,_){
return nex.turtle_browser.draw_text(w,text,x,y);
};
var G__8198 = function (w,text,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__8199__i = 0, G__8199__a = new Array(arguments.length -  4);
while (G__8199__i < G__8199__a.length) {G__8199__a[G__8199__i] = arguments[G__8199__i + 4]; ++G__8199__i;}
  _ = new cljs.core.IndexedSeq(G__8199__a,0,null);
} 
return G__8198__delegate.call(this,w,text,x,y,_);};
G__8198.cljs$lang$maxFixedArity = 4;
G__8198.cljs$lang$applyTo = (function (arglist__8200){
var w = cljs.core.first(arglist__8200);
arglist__8200 = cljs.core.next(arglist__8200);
var text = cljs.core.first(arglist__8200);
arglist__8200 = cljs.core.next(arglist__8200);
var x = cljs.core.first(arglist__8200);
arglist__8200 = cljs.core.next(arglist__8200);
var y = cljs.core.first(arglist__8200);
var _ = cljs.core.rest(arglist__8200);
return G__8198__delegate(w,text,x,y,_);
});
G__8198.cljs$core$IFn$_invoke$arity$variadic = G__8198__delegate;
return G__8198;
})()
,(function() { 
var G__8201__delegate = function (w,_){
return nex.turtle_browser.window_width(w);
};
var G__8201 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8202__i = 0, G__8202__a = new Array(arguments.length -  1);
while (G__8202__i < G__8202__a.length) {G__8202__a[G__8202__i] = arguments[G__8202__i + 1]; ++G__8202__i;}
  _ = new cljs.core.IndexedSeq(G__8202__a,0,null);
} 
return G__8201__delegate.call(this,w,_);};
G__8201.cljs$lang$maxFixedArity = 1;
G__8201.cljs$lang$applyTo = (function (arglist__8203){
var w = cljs.core.first(arglist__8203);
var _ = cljs.core.rest(arglist__8203);
return G__8201__delegate(w,_);
});
G__8201.cljs$core$IFn$_invoke$arity$variadic = G__8201__delegate;
return G__8201;
})()
,(function() { 
var G__8204__delegate = function (w,size,_){
return nex.turtle_browser.set_font_size(w,size);
};
var G__8204 = function (w,size,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8205__i = 0, G__8205__a = new Array(arguments.length -  2);
while (G__8205__i < G__8205__a.length) {G__8205__a[G__8205__i] = arguments[G__8205__i + 2]; ++G__8205__i;}
  _ = new cljs.core.IndexedSeq(G__8205__a,0,null);
} 
return G__8204__delegate.call(this,w,size,_);};
G__8204.cljs$lang$maxFixedArity = 2;
G__8204.cljs$lang$applyTo = (function (arglist__8206){
var w = cljs.core.first(arglist__8206);
arglist__8206 = cljs.core.next(arglist__8206);
var size = cljs.core.first(arglist__8206);
var _ = cljs.core.rest(arglist__8206);
return G__8204__delegate(w,size,_);
});
G__8204.cljs$core$IFn$_invoke$arity$variadic = G__8204__delegate;
return G__8204;
})()
,(function() { 
var G__8207__delegate = function (w,img,x,y,width,height,_){
return nex.turtle_browser.draw_image_scaled(w,img,x,y,width,height);
};
var G__8207 = function (w,img,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 6) {
var G__8208__i = 0, G__8208__a = new Array(arguments.length -  6);
while (G__8208__i < G__8208__a.length) {G__8208__a[G__8208__i] = arguments[G__8208__i + 6]; ++G__8208__i;}
  _ = new cljs.core.IndexedSeq(G__8208__a,0,null);
} 
return G__8207__delegate.call(this,w,img,x,y,width,height,_);};
G__8207.cljs$lang$maxFixedArity = 6;
G__8207.cljs$lang$applyTo = (function (arglist__8209){
var w = cljs.core.first(arglist__8209);
arglist__8209 = cljs.core.next(arglist__8209);
var img = cljs.core.first(arglist__8209);
arglist__8209 = cljs.core.next(arglist__8209);
var x = cljs.core.first(arglist__8209);
arglist__8209 = cljs.core.next(arglist__8209);
var y = cljs.core.first(arglist__8209);
arglist__8209 = cljs.core.next(arglist__8209);
var width = cljs.core.first(arglist__8209);
arglist__8209 = cljs.core.next(arglist__8209);
var height = cljs.core.first(arglist__8209);
var _ = cljs.core.rest(arglist__8209);
return G__8207__delegate(w,img,x,y,width,height,_);
});
G__8207.cljs$core$IFn$_invoke$arity$variadic = G__8207__delegate;
return G__8207;
})()
,(function() { 
var G__8210__delegate = function (w,_){
return nex.turtle_browser.repaint_window(w);
};
var G__8210 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8211__i = 0, G__8211__a = new Array(arguments.length -  1);
while (G__8211__i < G__8211__a.length) {G__8211__a[G__8211__i] = arguments[G__8211__i + 1]; ++G__8211__i;}
  _ = new cljs.core.IndexedSeq(G__8211__a,0,null);
} 
return G__8210__delegate.call(this,w,_);};
G__8210.cljs$lang$maxFixedArity = 1;
G__8210.cljs$lang$applyTo = (function (arglist__8212){
var w = cljs.core.first(arglist__8212);
var _ = cljs.core.rest(arglist__8212);
return G__8210__delegate(w,_);
});
G__8210.cljs$core$IFn$_invoke$arity$variadic = G__8210__delegate;
return G__8210;
})()
,(function() { 
var G__8213__delegate = function (w,img,x,y,_){
return nex.turtle_browser.draw_image(w,img,x,y);
};
var G__8213 = function (w,img,x,y,var_args){
var _ = null;
if (arguments.length > 4) {
var G__8214__i = 0, G__8214__a = new Array(arguments.length -  4);
while (G__8214__i < G__8214__a.length) {G__8214__a[G__8214__i] = arguments[G__8214__i + 4]; ++G__8214__i;}
  _ = new cljs.core.IndexedSeq(G__8214__a,0,null);
} 
return G__8213__delegate.call(this,w,img,x,y,_);};
G__8213.cljs$lang$maxFixedArity = 4;
G__8213.cljs$lang$applyTo = (function (arglist__8215){
var w = cljs.core.first(arglist__8215);
arglist__8215 = cljs.core.next(arglist__8215);
var img = cljs.core.first(arglist__8215);
arglist__8215 = cljs.core.next(arglist__8215);
var x = cljs.core.first(arglist__8215);
arglist__8215 = cljs.core.next(arglist__8215);
var y = cljs.core.first(arglist__8215);
var _ = cljs.core.rest(arglist__8215);
return G__8213__delegate(w,img,x,y,_);
});
G__8213.cljs$core$IFn$_invoke$arity$variadic = G__8213__delegate;
return G__8213;
})()
,(function() { 
var G__8216__delegate = function (w,ms,_){
return nex.turtle_browser.window_sleep(w,ms);
};
var G__8216 = function (w,ms,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8217__i = 0, G__8217__a = new Array(arguments.length -  2);
while (G__8217__i < G__8217__a.length) {G__8217__a[G__8217__i] = arguments[G__8217__i + 2]; ++G__8217__i;}
  _ = new cljs.core.IndexedSeq(G__8217__a,0,null);
} 
return G__8216__delegate.call(this,w,ms,_);};
G__8216.cljs$lang$maxFixedArity = 2;
G__8216.cljs$lang$applyTo = (function (arglist__8218){
var w = cljs.core.first(arglist__8218);
arglist__8218 = cljs.core.next(arglist__8218);
var ms = cljs.core.first(arglist__8218);
var _ = cljs.core.rest(arglist__8218);
return G__8216__delegate(w,ms,_);
});
G__8216.cljs$core$IFn$_invoke$arity$variadic = G__8216__delegate;
return G__8216;
})()
,(function() { 
var G__8219__delegate = function (w,x1,y1,x2,y2,_){
return nex.turtle_browser.draw_line(w,x1,y1,x2,y2);
};
var G__8219 = function (w,x1,y1,x2,y2,var_args){
var _ = null;
if (arguments.length > 5) {
var G__8220__i = 0, G__8220__a = new Array(arguments.length -  5);
while (G__8220__i < G__8220__a.length) {G__8220__a[G__8220__i] = arguments[G__8220__i + 5]; ++G__8220__i;}
  _ = new cljs.core.IndexedSeq(G__8220__a,0,null);
} 
return G__8219__delegate.call(this,w,x1,y1,x2,y2,_);};
G__8219.cljs$lang$maxFixedArity = 5;
G__8219.cljs$lang$applyTo = (function (arglist__8221){
var w = cljs.core.first(arglist__8221);
arglist__8221 = cljs.core.next(arglist__8221);
var x1 = cljs.core.first(arglist__8221);
arglist__8221 = cljs.core.next(arglist__8221);
var y1 = cljs.core.first(arglist__8221);
arglist__8221 = cljs.core.next(arglist__8221);
var x2 = cljs.core.first(arglist__8221);
arglist__8221 = cljs.core.next(arglist__8221);
var y2 = cljs.core.first(arglist__8221);
var _ = cljs.core.rest(arglist__8221);
return G__8219__delegate(w,x1,y1,x2,y2,_);
});
G__8219.cljs$core$IFn$_invoke$arity$variadic = G__8219__delegate;
return G__8219;
})()
,(function() { 
var G__8222__delegate = function (w,_){
return nex.turtle_browser.show_window(w);
};
var G__8222 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8223__i = 0, G__8223__a = new Array(arguments.length -  1);
while (G__8223__i < G__8223__a.length) {G__8223__a[G__8223__i] = arguments[G__8223__i + 1]; ++G__8223__i;}
  _ = new cljs.core.IndexedSeq(G__8223__a,0,null);
} 
return G__8222__delegate.call(this,w,_);};
G__8222.cljs$lang$maxFixedArity = 1;
G__8222.cljs$lang$applyTo = (function (arglist__8224){
var w = cljs.core.first(arglist__8224);
var _ = cljs.core.rest(arglist__8224);
return G__8222__delegate(w,_);
});
G__8222.cljs$core$IFn$_invoke$arity$variadic = G__8222__delegate;
return G__8222;
})()
,(function() { 
var G__8225__delegate = function (w,x,y,r,_){
return nex.turtle_browser.draw_circle(w,x,y,r);
};
var G__8225 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__8226__i = 0, G__8226__a = new Array(arguments.length -  4);
while (G__8226__i < G__8226__a.length) {G__8226__a[G__8226__i] = arguments[G__8226__i + 4]; ++G__8226__i;}
  _ = new cljs.core.IndexedSeq(G__8226__a,0,null);
} 
return G__8225__delegate.call(this,w,x,y,r,_);};
G__8225.cljs$lang$maxFixedArity = 4;
G__8225.cljs$lang$applyTo = (function (arglist__8227){
var w = cljs.core.first(arglist__8227);
arglist__8227 = cljs.core.next(arglist__8227);
var x = cljs.core.first(arglist__8227);
arglist__8227 = cljs.core.next(arglist__8227);
var y = cljs.core.first(arglist__8227);
arglist__8227 = cljs.core.next(arglist__8227);
var r = cljs.core.first(arglist__8227);
var _ = cljs.core.rest(arglist__8227);
return G__8225__delegate(w,x,y,r,_);
});
G__8225.cljs$core$IFn$_invoke$arity$variadic = G__8225__delegate;
return G__8225;
})()
,(function() { 
var G__8228__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.fill_rect(w,x,y,width,height);
};
var G__8228 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__8229__i = 0, G__8229__a = new Array(arguments.length -  5);
while (G__8229__i < G__8229__a.length) {G__8229__a[G__8229__i] = arguments[G__8229__i + 5]; ++G__8229__i;}
  _ = new cljs.core.IndexedSeq(G__8229__a,0,null);
} 
return G__8228__delegate.call(this,w,x,y,width,height,_);};
G__8228.cljs$lang$maxFixedArity = 5;
G__8228.cljs$lang$applyTo = (function (arglist__8230){
var w = cljs.core.first(arglist__8230);
arglist__8230 = cljs.core.next(arglist__8230);
var x = cljs.core.first(arglist__8230);
arglist__8230 = cljs.core.next(arglist__8230);
var y = cljs.core.first(arglist__8230);
arglist__8230 = cljs.core.next(arglist__8230);
var width = cljs.core.first(arglist__8230);
arglist__8230 = cljs.core.next(arglist__8230);
var height = cljs.core.first(arglist__8230);
var _ = cljs.core.rest(arglist__8230);
return G__8228__delegate(w,x,y,width,height,_);
});
G__8228.cljs$core$IFn$_invoke$arity$variadic = G__8228__delegate;
return G__8228;
})()
,(function() { 
var G__8231__delegate = function (w,img,x,y,angle,_){
return nex.turtle_browser.draw_image_rotated(w,img,x,y,angle);
};
var G__8231 = function (w,img,x,y,angle,var_args){
var _ = null;
if (arguments.length > 5) {
var G__8232__i = 0, G__8232__a = new Array(arguments.length -  5);
while (G__8232__i < G__8232__a.length) {G__8232__a[G__8232__i] = arguments[G__8232__i + 5]; ++G__8232__i;}
  _ = new cljs.core.IndexedSeq(G__8232__a,0,null);
} 
return G__8231__delegate.call(this,w,img,x,y,angle,_);};
G__8231.cljs$lang$maxFixedArity = 5;
G__8231.cljs$lang$applyTo = (function (arglist__8233){
var w = cljs.core.first(arglist__8233);
arglist__8233 = cljs.core.next(arglist__8233);
var img = cljs.core.first(arglist__8233);
arglist__8233 = cljs.core.next(arglist__8233);
var x = cljs.core.first(arglist__8233);
arglist__8233 = cljs.core.next(arglist__8233);
var y = cljs.core.first(arglist__8233);
arglist__8233 = cljs.core.next(arglist__8233);
var angle = cljs.core.first(arglist__8233);
var _ = cljs.core.rest(arglist__8233);
return G__8231__delegate(w,img,x,y,angle,_);
});
G__8231.cljs$core$IFn$_invoke$arity$variadic = G__8231__delegate;
return G__8231;
})()
,(function() { 
var G__8234__delegate = function (w,color,_){
return nex.turtle_browser.set_draw_color(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__8234 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8235__i = 0, G__8235__a = new Array(arguments.length -  2);
while (G__8235__i < G__8235__a.length) {G__8235__a[G__8235__i] = arguments[G__8235__i + 2]; ++G__8235__i;}
  _ = new cljs.core.IndexedSeq(G__8235__a,0,null);
} 
return G__8234__delegate.call(this,w,color,_);};
G__8234.cljs$lang$maxFixedArity = 2;
G__8234.cljs$lang$applyTo = (function (arglist__8236){
var w = cljs.core.first(arglist__8236);
arglist__8236 = cljs.core.next(arglist__8236);
var color = cljs.core.first(arglist__8236);
var _ = cljs.core.rest(arglist__8236);
return G__8234__delegate(w,color,_);
});
G__8234.cljs$core$IFn$_invoke$arity$variadic = G__8234__delegate;
return G__8234;
})()
,(function() { 
var G__8237__delegate = function (w,x,y,width,height,_){
return nex.turtle_browser.draw_rect(w,x,y,width,height);
};
var G__8237 = function (w,x,y,width,height,var_args){
var _ = null;
if (arguments.length > 5) {
var G__8238__i = 0, G__8238__a = new Array(arguments.length -  5);
while (G__8238__i < G__8238__a.length) {G__8238__a[G__8238__i] = arguments[G__8238__i + 5]; ++G__8238__i;}
  _ = new cljs.core.IndexedSeq(G__8238__a,0,null);
} 
return G__8237__delegate.call(this,w,x,y,width,height,_);};
G__8237.cljs$lang$maxFixedArity = 5;
G__8237.cljs$lang$applyTo = (function (arglist__8239){
var w = cljs.core.first(arglist__8239);
arglist__8239 = cljs.core.next(arglist__8239);
var x = cljs.core.first(arglist__8239);
arglist__8239 = cljs.core.next(arglist__8239);
var y = cljs.core.first(arglist__8239);
arglist__8239 = cljs.core.next(arglist__8239);
var width = cljs.core.first(arglist__8239);
arglist__8239 = cljs.core.next(arglist__8239);
var height = cljs.core.first(arglist__8239);
var _ = cljs.core.rest(arglist__8239);
return G__8237__delegate(w,x,y,width,height,_);
});
G__8237.cljs$core$IFn$_invoke$arity$variadic = G__8237__delegate;
return G__8237;
})()
,(function() { 
var G__8240__delegate = function (w,_){
return nex.turtle_browser.close_window(w);
};
var G__8240 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8241__i = 0, G__8241__a = new Array(arguments.length -  1);
while (G__8241__i < G__8241__a.length) {G__8241__a[G__8241__i] = arguments[G__8241__i + 1]; ++G__8241__i;}
  _ = new cljs.core.IndexedSeq(G__8241__a,0,null);
} 
return G__8240__delegate.call(this,w,_);};
G__8240.cljs$lang$maxFixedArity = 1;
G__8240.cljs$lang$applyTo = (function (arglist__8242){
var w = cljs.core.first(arglist__8242);
var _ = cljs.core.rest(arglist__8242);
return G__8240__delegate(w,_);
});
G__8240.cljs$core$IFn$_invoke$arity$variadic = G__8240__delegate;
return G__8240;
})()
,(function() { 
var G__8243__delegate = function (w,x,y,r,_){
return nex.turtle_browser.fill_circle(w,x,y,r);
};
var G__8243 = function (w,x,y,r,var_args){
var _ = null;
if (arguments.length > 4) {
var G__8244__i = 0, G__8244__a = new Array(arguments.length -  4);
while (G__8244__i < G__8244__a.length) {G__8244__a[G__8244__i] = arguments[G__8244__i + 4]; ++G__8244__i;}
  _ = new cljs.core.IndexedSeq(G__8244__a,0,null);
} 
return G__8243__delegate.call(this,w,x,y,r,_);};
G__8243.cljs$lang$maxFixedArity = 4;
G__8243.cljs$lang$applyTo = (function (arglist__8245){
var w = cljs.core.first(arglist__8245);
arglist__8245 = cljs.core.next(arglist__8245);
var x = cljs.core.first(arglist__8245);
arglist__8245 = cljs.core.next(arglist__8245);
var y = cljs.core.first(arglist__8245);
arglist__8245 = cljs.core.next(arglist__8245);
var r = cljs.core.first(arglist__8245);
var _ = cljs.core.rest(arglist__8245);
return G__8243__delegate(w,x,y,r,_);
});
G__8243.cljs$core$IFn$_invoke$arity$variadic = G__8243__delegate;
return G__8243;
})()
,(function() { 
var G__8246__delegate = function (w,color,_){
return nex.turtle_browser.set_bgcolor(w,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)));
};
var G__8246 = function (w,color,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8247__i = 0, G__8247__a = new Array(arguments.length -  2);
while (G__8247__i < G__8247__a.length) {G__8247__a[G__8247__i] = arguments[G__8247__i + 2]; ++G__8247__i;}
  _ = new cljs.core.IndexedSeq(G__8247__a,0,null);
} 
return G__8246__delegate.call(this,w,color,_);};
G__8246.cljs$lang$maxFixedArity = 2;
G__8246.cljs$lang$applyTo = (function (arglist__8248){
var w = cljs.core.first(arglist__8248);
arglist__8248 = cljs.core.next(arglist__8248);
var color = cljs.core.first(arglist__8248);
var _ = cljs.core.rest(arglist__8248);
return G__8246__delegate(w,color,_);
});
G__8246.cljs$core$IFn$_invoke$arity$variadic = G__8246__delegate;
return G__8246;
})()
,(function() { 
var G__8249__delegate = function (w,_){
return nex.turtle_browser.clear_window(w);
};
var G__8249 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8250__i = 0, G__8250__a = new Array(arguments.length -  1);
while (G__8250__i < G__8250__a.length) {G__8250__a[G__8250__i] = arguments[G__8250__i + 1]; ++G__8250__i;}
  _ = new cljs.core.IndexedSeq(G__8250__a,0,null);
} 
return G__8249__delegate.call(this,w,_);};
G__8249.cljs$lang$maxFixedArity = 1;
G__8249.cljs$lang$applyTo = (function (arglist__8251){
var w = cljs.core.first(arglist__8251);
var _ = cljs.core.rest(arglist__8251);
return G__8249__delegate(w,_);
});
G__8249.cljs$core$IFn$_invoke$arity$variadic = G__8249__delegate;
return G__8249;
})()
,(function() { 
var G__8252__delegate = function (w,_){
return nex.turtle_browser.window_height(w);
};
var G__8252 = function (w,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8253__i = 0, G__8253__a = new Array(arguments.length -  1);
while (G__8253__i < G__8253__a.length) {G__8253__a[G__8253__i] = arguments[G__8253__i + 1]; ++G__8253__i;}
  _ = new cljs.core.IndexedSeq(G__8253__a,0,null);
} 
return G__8252__delegate.call(this,w,_);};
G__8252.cljs$lang$maxFixedArity = 1;
G__8252.cljs$lang$applyTo = (function (arglist__8254){
var w = cljs.core.first(arglist__8254);
var _ = cljs.core.rest(arglist__8254);
return G__8252__delegate(w,_);
});
G__8252.cljs$core$IFn$_invoke$arity$variadic = G__8252__delegate;
return G__8252;
})()
]),new cljs.core.PersistentArrayMap(null, 3, ["getenv",(function() { 
var G__8255__delegate = function (_,name,___$1){
var or__5142__auto__ = nex.interpreter.nex_process_getenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
};
var G__8255 = function (_,name,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__8256__i = 0, G__8256__a = new Array(arguments.length -  2);
while (G__8256__i < G__8256__a.length) {G__8256__a[G__8256__i] = arguments[G__8256__i + 2]; ++G__8256__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8256__a,0,null);
} 
return G__8255__delegate.call(this,_,name,___$1);};
G__8255.cljs$lang$maxFixedArity = 2;
G__8255.cljs$lang$applyTo = (function (arglist__8257){
var _ = cljs.core.first(arglist__8257);
arglist__8257 = cljs.core.next(arglist__8257);
var name = cljs.core.first(arglist__8257);
var ___$1 = cljs.core.rest(arglist__8257);
return G__8255__delegate(_,name,___$1);
});
G__8255.cljs$core$IFn$_invoke$arity$variadic = G__8255__delegate;
return G__8255;
})()
,"setenv",(function() { 
var G__8258__delegate = function (_,name,value,___$1){
nex.interpreter.nex_process_setenv((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

return null;
};
var G__8258 = function (_,name,value,var_args){
var ___$1 = null;
if (arguments.length > 3) {
var G__8259__i = 0, G__8259__a = new Array(arguments.length -  3);
while (G__8259__i < G__8259__a.length) {G__8259__a[G__8259__i] = arguments[G__8259__i + 3]; ++G__8259__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8259__a,0,null);
} 
return G__8258__delegate.call(this,_,name,value,___$1);};
G__8258.cljs$lang$maxFixedArity = 3;
G__8258.cljs$lang$applyTo = (function (arglist__8260){
var _ = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var name = cljs.core.first(arglist__8260);
arglist__8260 = cljs.core.next(arglist__8260);
var value = cljs.core.first(arglist__8260);
var ___$1 = cljs.core.rest(arglist__8260);
return G__8258__delegate(_,name,value,___$1);
});
G__8258.cljs$core$IFn$_invoke$arity$variadic = G__8258__delegate;
return G__8258;
})()
,"command_line",(function() { 
var G__8261__delegate = function (_,___$1){
return nex.interpreter.nex_process_command_line();
};
var G__8261 = function (_,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__8262__i = 0, G__8262__a = new Array(arguments.length -  1);
while (G__8262__i < G__8262__a.length) {G__8262__a[G__8262__i] = arguments[G__8262__i + 1]; ++G__8262__i;}
  ___$1 = new cljs.core.IndexedSeq(G__8262__a,0,null);
} 
return G__8261__delegate.call(this,_,___$1);};
G__8261.cljs$lang$maxFixedArity = 1;
G__8261.cljs$lang$applyTo = (function (arglist__8263){
var _ = cljs.core.first(arglist__8263);
var ___$1 = cljs.core.rest(arglist__8263);
return G__8261__delegate(_,___$1);
});
G__8261.cljs$core$IFn$_invoke$arity$variadic = G__8261__delegate;
return G__8261;
})()
], null),new cljs.core.PersistentArrayMap(null, 5, ["to_string",(function() { 
var G__8264__delegate = function (c,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));
};
var G__8264 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8265__i = 0, G__8265__a = new Array(arguments.length -  1);
while (G__8265__i < G__8265__a.length) {G__8265__a[G__8265__i] = arguments[G__8265__i + 1]; ++G__8265__i;}
  _ = new cljs.core.IndexedSeq(G__8265__a,0,null);
} 
return G__8264__delegate.call(this,c,_);};
G__8264.cljs$lang$maxFixedArity = 1;
G__8264.cljs$lang$applyTo = (function (arglist__8266){
var c = cljs.core.first(arglist__8266);
var _ = cljs.core.rest(arglist__8266);
return G__8264__delegate(c,_);
});
G__8264.cljs$core$IFn$_invoke$arity$variadic = G__8264__delegate;
return G__8264;
})()
,"to_upper",(function() { 
var G__8267__delegate = function (c,_){
return clojure.string.upper_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__8267 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8268__i = 0, G__8268__a = new Array(arguments.length -  1);
while (G__8268__i < G__8268__a.length) {G__8268__a[G__8268__i] = arguments[G__8268__i + 1]; ++G__8268__i;}
  _ = new cljs.core.IndexedSeq(G__8268__a,0,null);
} 
return G__8267__delegate.call(this,c,_);};
G__8267.cljs$lang$maxFixedArity = 1;
G__8267.cljs$lang$applyTo = (function (arglist__8269){
var c = cljs.core.first(arglist__8269);
var _ = cljs.core.rest(arglist__8269);
return G__8267__delegate(c,_);
});
G__8267.cljs$core$IFn$_invoke$arity$variadic = G__8267__delegate;
return G__8267;
})()
,"to_lower",(function() { 
var G__8270__delegate = function (c,_){
return clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
};
var G__8270 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8271__i = 0, G__8271__a = new Array(arguments.length -  1);
while (G__8271__i < G__8271__a.length) {G__8271__a[G__8271__i] = arguments[G__8271__i + 1]; ++G__8271__i;}
  _ = new cljs.core.IndexedSeq(G__8271__a,0,null);
} 
return G__8270__delegate.call(this,c,_);};
G__8270.cljs$lang$maxFixedArity = 1;
G__8270.cljs$lang$applyTo = (function (arglist__8272){
var c = cljs.core.first(arglist__8272);
var _ = cljs.core.rest(arglist__8272);
return G__8270__delegate(c,_);
});
G__8270.cljs$core$IFn$_invoke$arity$variadic = G__8270__delegate;
return G__8270;
})()
,"compare",(function() { 
var G__8273__delegate = function (c,other,_){
return nex_compare(c,other);
};
var G__8273 = function (c,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8274__i = 0, G__8274__a = new Array(arguments.length -  2);
while (G__8274__i < G__8274__a.length) {G__8274__a[G__8274__i] = arguments[G__8274__i + 2]; ++G__8274__i;}
  _ = new cljs.core.IndexedSeq(G__8274__a,0,null);
} 
return G__8273__delegate.call(this,c,other,_);};
G__8273.cljs$lang$maxFixedArity = 2;
G__8273.cljs$lang$applyTo = (function (arglist__8275){
var c = cljs.core.first(arglist__8275);
arglist__8275 = cljs.core.next(arglist__8275);
var other = cljs.core.first(arglist__8275);
var _ = cljs.core.rest(arglist__8275);
return G__8273__delegate(c,other,_);
});
G__8273.cljs$core$IFn$_invoke$arity$variadic = G__8273__delegate;
return G__8273;
})()
,"hash",(function() { 
var G__8276__delegate = function (c,_){
return cljs.core.hash(c);
};
var G__8276 = function (c,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8277__i = 0, G__8277__a = new Array(arguments.length -  1);
while (G__8277__i < G__8277__a.length) {G__8277__a[G__8277__i] = arguments[G__8277__i + 1]; ++G__8277__i;}
  _ = new cljs.core.IndexedSeq(G__8277__a,0,null);
} 
return G__8276__delegate.call(this,c,_);};
G__8276.cljs$lang$maxFixedArity = 1;
G__8276.cljs$lang$applyTo = (function (arglist__8278){
var c = cljs.core.first(arglist__8278);
var _ = cljs.core.rest(arglist__8278);
return G__8276__delegate(c,_);
});
G__8276.cljs$core$IFn$_invoke$arity$variadic = G__8276__delegate;
return G__8276;
})()
], null),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","min","less_than","plus","to_string","hash","greater_than","max","not_equals","minus","times","divided_by","abs","round","equals","greater_than_or_equal"],[(function() { 
var G__8283__delegate = function (n,other,_){
return nex_compare(n,other);
};
var G__8283 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8284__i = 0, G__8284__a = new Array(arguments.length -  2);
while (G__8284__i < G__8284__a.length) {G__8284__a[G__8284__i] = arguments[G__8284__i + 2]; ++G__8284__i;}
  _ = new cljs.core.IndexedSeq(G__8284__a,0,null);
} 
return G__8283__delegate.call(this,n,other,_);};
G__8283.cljs$lang$maxFixedArity = 2;
G__8283.cljs$lang$applyTo = (function (arglist__8285){
var n = cljs.core.first(arglist__8285);
arglist__8285 = cljs.core.next(arglist__8285);
var other = cljs.core.first(arglist__8285);
var _ = cljs.core.rest(arglist__8285);
return G__8283__delegate(n,other,_);
});
G__8283.cljs$core$IFn$_invoke$arity$variadic = G__8283__delegate;
return G__8283;
})()
,(function() { 
var G__8286__delegate = function (n,other,_){
return (n <= other);
};
var G__8286 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8290__i = 0, G__8290__a = new Array(arguments.length -  2);
while (G__8290__i < G__8290__a.length) {G__8290__a[G__8290__i] = arguments[G__8290__i + 2]; ++G__8290__i;}
  _ = new cljs.core.IndexedSeq(G__8290__a,0,null);
} 
return G__8286__delegate.call(this,n,other,_);};
G__8286.cljs$lang$maxFixedArity = 2;
G__8286.cljs$lang$applyTo = (function (arglist__8291){
var n = cljs.core.first(arglist__8291);
arglist__8291 = cljs.core.next(arglist__8291);
var other = cljs.core.first(arglist__8291);
var _ = cljs.core.rest(arglist__8291);
return G__8286__delegate(n,other,_);
});
G__8286.cljs$core$IFn$_invoke$arity$variadic = G__8286__delegate;
return G__8286;
})()
,(function() { 
var G__8292__delegate = function (n,other,_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8292 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8293__i = 0, G__8293__a = new Array(arguments.length -  2);
while (G__8293__i < G__8293__a.length) {G__8293__a[G__8293__i] = arguments[G__8293__i + 2]; ++G__8293__i;}
  _ = new cljs.core.IndexedSeq(G__8293__a,0,null);
} 
return G__8292__delegate.call(this,n,other,_);};
G__8292.cljs$lang$maxFixedArity = 2;
G__8292.cljs$lang$applyTo = (function (arglist__8294){
var n = cljs.core.first(arglist__8294);
arglist__8294 = cljs.core.next(arglist__8294);
var other = cljs.core.first(arglist__8294);
var _ = cljs.core.rest(arglist__8294);
return G__8292__delegate(n,other,_);
});
G__8292.cljs$core$IFn$_invoke$arity$variadic = G__8292__delegate;
return G__8292;
})()
,(function() { 
var G__8297__delegate = function (n,other,_){
return (n < other);
};
var G__8297 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8298__i = 0, G__8298__a = new Array(arguments.length -  2);
while (G__8298__i < G__8298__a.length) {G__8298__a[G__8298__i] = arguments[G__8298__i + 2]; ++G__8298__i;}
  _ = new cljs.core.IndexedSeq(G__8298__a,0,null);
} 
return G__8297__delegate.call(this,n,other,_);};
G__8297.cljs$lang$maxFixedArity = 2;
G__8297.cljs$lang$applyTo = (function (arglist__8299){
var n = cljs.core.first(arglist__8299);
arglist__8299 = cljs.core.next(arglist__8299);
var other = cljs.core.first(arglist__8299);
var _ = cljs.core.rest(arglist__8299);
return G__8297__delegate(n,other,_);
});
G__8297.cljs$core$IFn$_invoke$arity$variadic = G__8297__delegate;
return G__8297;
})()
,(function() { 
var G__8300__delegate = function (n,other,_){
return (n + other);
};
var G__8300 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8301__i = 0, G__8301__a = new Array(arguments.length -  2);
while (G__8301__i < G__8301__a.length) {G__8301__a[G__8301__i] = arguments[G__8301__i + 2]; ++G__8301__i;}
  _ = new cljs.core.IndexedSeq(G__8301__a,0,null);
} 
return G__8300__delegate.call(this,n,other,_);};
G__8300.cljs$lang$maxFixedArity = 2;
G__8300.cljs$lang$applyTo = (function (arglist__8302){
var n = cljs.core.first(arglist__8302);
arglist__8302 = cljs.core.next(arglist__8302);
var other = cljs.core.first(arglist__8302);
var _ = cljs.core.rest(arglist__8302);
return G__8300__delegate(n,other,_);
});
G__8300.cljs$core$IFn$_invoke$arity$variadic = G__8300__delegate;
return G__8300;
})()
,(function() { 
var G__8303__delegate = function (n,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
};
var G__8303 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8304__i = 0, G__8304__a = new Array(arguments.length -  1);
while (G__8304__i < G__8304__a.length) {G__8304__a[G__8304__i] = arguments[G__8304__i + 1]; ++G__8304__i;}
  _ = new cljs.core.IndexedSeq(G__8304__a,0,null);
} 
return G__8303__delegate.call(this,n,_);};
G__8303.cljs$lang$maxFixedArity = 1;
G__8303.cljs$lang$applyTo = (function (arglist__8305){
var n = cljs.core.first(arglist__8305);
var _ = cljs.core.rest(arglist__8305);
return G__8303__delegate(n,_);
});
G__8303.cljs$core$IFn$_invoke$arity$variadic = G__8303__delegate;
return G__8303;
})()
,(function() { 
var G__8306__delegate = function (n,_){
return cljs.core.hash(n);
};
var G__8306 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8307__i = 0, G__8307__a = new Array(arguments.length -  1);
while (G__8307__i < G__8307__a.length) {G__8307__a[G__8307__i] = arguments[G__8307__i + 1]; ++G__8307__i;}
  _ = new cljs.core.IndexedSeq(G__8307__a,0,null);
} 
return G__8306__delegate.call(this,n,_);};
G__8306.cljs$lang$maxFixedArity = 1;
G__8306.cljs$lang$applyTo = (function (arglist__8308){
var n = cljs.core.first(arglist__8308);
var _ = cljs.core.rest(arglist__8308);
return G__8306__delegate(n,_);
});
G__8306.cljs$core$IFn$_invoke$arity$variadic = G__8306__delegate;
return G__8306;
})()
,(function() { 
var G__8309__delegate = function (n,other,_){
return (n > other);
};
var G__8309 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8310__i = 0, G__8310__a = new Array(arguments.length -  2);
while (G__8310__i < G__8310__a.length) {G__8310__a[G__8310__i] = arguments[G__8310__i + 2]; ++G__8310__i;}
  _ = new cljs.core.IndexedSeq(G__8310__a,0,null);
} 
return G__8309__delegate.call(this,n,other,_);};
G__8309.cljs$lang$maxFixedArity = 2;
G__8309.cljs$lang$applyTo = (function (arglist__8315){
var n = cljs.core.first(arglist__8315);
arglist__8315 = cljs.core.next(arglist__8315);
var other = cljs.core.first(arglist__8315);
var _ = cljs.core.rest(arglist__8315);
return G__8309__delegate(n,other,_);
});
G__8309.cljs$core$IFn$_invoke$arity$variadic = G__8309__delegate;
return G__8309;
})()
,(function() { 
var G__8316__delegate = function (n,other,_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8316 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8318__i = 0, G__8318__a = new Array(arguments.length -  2);
while (G__8318__i < G__8318__a.length) {G__8318__a[G__8318__i] = arguments[G__8318__i + 2]; ++G__8318__i;}
  _ = new cljs.core.IndexedSeq(G__8318__a,0,null);
} 
return G__8316__delegate.call(this,n,other,_);};
G__8316.cljs$lang$maxFixedArity = 2;
G__8316.cljs$lang$applyTo = (function (arglist__8319){
var n = cljs.core.first(arglist__8319);
arglist__8319 = cljs.core.next(arglist__8319);
var other = cljs.core.first(arglist__8319);
var _ = cljs.core.rest(arglist__8319);
return G__8316__delegate(n,other,_);
});
G__8316.cljs$core$IFn$_invoke$arity$variadic = G__8316__delegate;
return G__8316;
})()
,(function() { 
var G__8322__delegate = function (n,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8322 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8327__i = 0, G__8327__a = new Array(arguments.length -  2);
while (G__8327__i < G__8327__a.length) {G__8327__a[G__8327__i] = arguments[G__8327__i + 2]; ++G__8327__i;}
  _ = new cljs.core.IndexedSeq(G__8327__a,0,null);
} 
return G__8322__delegate.call(this,n,other,_);};
G__8322.cljs$lang$maxFixedArity = 2;
G__8322.cljs$lang$applyTo = (function (arglist__8328){
var n = cljs.core.first(arglist__8328);
arglist__8328 = cljs.core.next(arglist__8328);
var other = cljs.core.first(arglist__8328);
var _ = cljs.core.rest(arglist__8328);
return G__8322__delegate(n,other,_);
});
G__8322.cljs$core$IFn$_invoke$arity$variadic = G__8322__delegate;
return G__8322;
})()
,(function() { 
var G__8331__delegate = function (n,other,_){
return (n - other);
};
var G__8331 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8333__i = 0, G__8333__a = new Array(arguments.length -  2);
while (G__8333__i < G__8333__a.length) {G__8333__a[G__8333__i] = arguments[G__8333__i + 2]; ++G__8333__i;}
  _ = new cljs.core.IndexedSeq(G__8333__a,0,null);
} 
return G__8331__delegate.call(this,n,other,_);};
G__8331.cljs$lang$maxFixedArity = 2;
G__8331.cljs$lang$applyTo = (function (arglist__8334){
var n = cljs.core.first(arglist__8334);
arglist__8334 = cljs.core.next(arglist__8334);
var other = cljs.core.first(arglist__8334);
var _ = cljs.core.rest(arglist__8334);
return G__8331__delegate(n,other,_);
});
G__8331.cljs$core$IFn$_invoke$arity$variadic = G__8331__delegate;
return G__8331;
})()
,(function() { 
var G__8335__delegate = function (n,other,_){
return (n * other);
};
var G__8335 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8338__i = 0, G__8338__a = new Array(arguments.length -  2);
while (G__8338__i < G__8338__a.length) {G__8338__a[G__8338__i] = arguments[G__8338__i + 2]; ++G__8338__i;}
  _ = new cljs.core.IndexedSeq(G__8338__a,0,null);
} 
return G__8335__delegate.call(this,n,other,_);};
G__8335.cljs$lang$maxFixedArity = 2;
G__8335.cljs$lang$applyTo = (function (arglist__8339){
var n = cljs.core.first(arglist__8339);
arglist__8339 = cljs.core.next(arglist__8339);
var other = cljs.core.first(arglist__8339);
var _ = cljs.core.rest(arglist__8339);
return G__8335__delegate(n,other,_);
});
G__8335.cljs$core$IFn$_invoke$arity$variadic = G__8335__delegate;
return G__8335;
})()
,(function() { 
var G__8340__delegate = function (n,other,_){
return (n / other);
};
var G__8340 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8341__i = 0, G__8341__a = new Array(arguments.length -  2);
while (G__8341__i < G__8341__a.length) {G__8341__a[G__8341__i] = arguments[G__8341__i + 2]; ++G__8341__i;}
  _ = new cljs.core.IndexedSeq(G__8341__a,0,null);
} 
return G__8340__delegate.call(this,n,other,_);};
G__8340.cljs$lang$maxFixedArity = 2;
G__8340.cljs$lang$applyTo = (function (arglist__8342){
var n = cljs.core.first(arglist__8342);
arglist__8342 = cljs.core.next(arglist__8342);
var other = cljs.core.first(arglist__8342);
var _ = cljs.core.rest(arglist__8342);
return G__8340__delegate(n,other,_);
});
G__8340.cljs$core$IFn$_invoke$arity$variadic = G__8340__delegate;
return G__8340;
})()
,(function() { 
var G__8343__delegate = function (n,_){
return nex.interpreter.nex_abs(n);
};
var G__8343 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8344__i = 0, G__8344__a = new Array(arguments.length -  1);
while (G__8344__i < G__8344__a.length) {G__8344__a[G__8344__i] = arguments[G__8344__i + 1]; ++G__8344__i;}
  _ = new cljs.core.IndexedSeq(G__8344__a,0,null);
} 
return G__8343__delegate.call(this,n,_);};
G__8343.cljs$lang$maxFixedArity = 1;
G__8343.cljs$lang$applyTo = (function (arglist__8345){
var n = cljs.core.first(arglist__8345);
var _ = cljs.core.rest(arglist__8345);
return G__8343__delegate(n,_);
});
G__8343.cljs$core$IFn$_invoke$arity$variadic = G__8343__delegate;
return G__8343;
})()
,(function() { 
var G__8346__delegate = function (n,_){
return nex.interpreter.nex_round(n);
};
var G__8346 = function (n,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8347__i = 0, G__8347__a = new Array(arguments.length -  1);
while (G__8347__i < G__8347__a.length) {G__8347__a[G__8347__i] = arguments[G__8347__i + 1]; ++G__8347__i;}
  _ = new cljs.core.IndexedSeq(G__8347__a,0,null);
} 
return G__8346__delegate.call(this,n,_);};
G__8346.cljs$lang$maxFixedArity = 1;
G__8346.cljs$lang$applyTo = (function (arglist__8348){
var n = cljs.core.first(arglist__8348);
var _ = cljs.core.rest(arglist__8348);
return G__8346__delegate(n,_);
});
G__8346.cljs$core$IFn$_invoke$arity$variadic = G__8346__delegate;
return G__8346;
})()
,(function() { 
var G__8349__delegate = function (n,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,other);
};
var G__8349 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8354__i = 0, G__8354__a = new Array(arguments.length -  2);
while (G__8354__i < G__8354__a.length) {G__8354__a[G__8354__i] = arguments[G__8354__i + 2]; ++G__8354__i;}
  _ = new cljs.core.IndexedSeq(G__8354__a,0,null);
} 
return G__8349__delegate.call(this,n,other,_);};
G__8349.cljs$lang$maxFixedArity = 2;
G__8349.cljs$lang$applyTo = (function (arglist__8355){
var n = cljs.core.first(arglist__8355);
arglist__8355 = cljs.core.next(arglist__8355);
var other = cljs.core.first(arglist__8355);
var _ = cljs.core.rest(arglist__8355);
return G__8349__delegate(n,other,_);
});
G__8349.cljs$core$IFn$_invoke$arity$variadic = G__8349__delegate;
return G__8349;
})()
,(function() { 
var G__8356__delegate = function (n,other,_){
return (n >= other);
};
var G__8356 = function (n,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8357__i = 0, G__8357__a = new Array(arguments.length -  2);
while (G__8357__i < G__8357__a.length) {G__8357__a[G__8357__i] = arguments[G__8357__i + 2]; ++G__8357__i;}
  _ = new cljs.core.IndexedSeq(G__8357__a,0,null);
} 
return G__8356__delegate.call(this,n,other,_);};
G__8356.cljs$lang$maxFixedArity = 2;
G__8356.cljs$lang$applyTo = (function (arglist__8358){
var n = cljs.core.first(arglist__8358);
arglist__8358 = cljs.core.next(arglist__8358);
var other = cljs.core.first(arglist__8358);
var _ = cljs.core.rest(arglist__8358);
return G__8356__delegate(n,other,_);
});
G__8356.cljs$core$IFn$_invoke$arity$variadic = G__8356__delegate;
return G__8356;
})()
]),cljs.core.PersistentHashMap.fromArrays(["compare","less_than_or_equal","to_decimal","trim","starts_with","to_lower","less_than","plus","hash","greater_than","contains","to_real","not_equals","to_integer","to_upper","substring","char_at","replace","cursor","split","length","to_integer64","index_of","equals","greater_than_or_equal","ends_with"],[(function() { 
var G__8359__delegate = function (s,other,_){
return nex_compare(s,other);
};
var G__8359 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8360__i = 0, G__8360__a = new Array(arguments.length -  2);
while (G__8360__i < G__8360__a.length) {G__8360__a[G__8360__i] = arguments[G__8360__i + 2]; ++G__8360__i;}
  _ = new cljs.core.IndexedSeq(G__8360__a,0,null);
} 
return G__8359__delegate.call(this,s,other,_);};
G__8359.cljs$lang$maxFixedArity = 2;
G__8359.cljs$lang$applyTo = (function (arglist__8361){
var s = cljs.core.first(arglist__8361);
arglist__8361 = cljs.core.next(arglist__8361);
var other = cljs.core.first(arglist__8361);
var _ = cljs.core.rest(arglist__8361);
return G__8359__delegate(s,other,_);
});
G__8359.cljs$core$IFn$_invoke$arity$variadic = G__8359__delegate;
return G__8359;
})()
,(function() { 
var G__8362__delegate = function (s,other,_){
return (cljs.core.compare(s,other) <= (0));
};
var G__8362 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8363__i = 0, G__8363__a = new Array(arguments.length -  2);
while (G__8363__i < G__8363__a.length) {G__8363__a[G__8363__i] = arguments[G__8363__i + 2]; ++G__8363__i;}
  _ = new cljs.core.IndexedSeq(G__8363__a,0,null);
} 
return G__8362__delegate.call(this,s,other,_);};
G__8362.cljs$lang$maxFixedArity = 2;
G__8362.cljs$lang$applyTo = (function (arglist__8366){
var s = cljs.core.first(arglist__8366);
arglist__8366 = cljs.core.next(arglist__8366);
var other = cljs.core.first(arglist__8366);
var _ = cljs.core.rest(arglist__8366);
return G__8362__delegate(s,other,_);
});
G__8362.cljs$core$IFn$_invoke$arity$variadic = G__8362__delegate;
return G__8362;
})()
,(function() { 
var G__8367__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8367 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8368__i = 0, G__8368__a = new Array(arguments.length -  1);
while (G__8368__i < G__8368__a.length) {G__8368__a[G__8368__i] = arguments[G__8368__i + 1]; ++G__8368__i;}
  _ = new cljs.core.IndexedSeq(G__8368__a,0,null);
} 
return G__8367__delegate.call(this,s,_);};
G__8367.cljs$lang$maxFixedArity = 1;
G__8367.cljs$lang$applyTo = (function (arglist__8369){
var s = cljs.core.first(arglist__8369);
var _ = cljs.core.rest(arglist__8369);
return G__8367__delegate(s,_);
});
G__8367.cljs$core$IFn$_invoke$arity$variadic = G__8367__delegate;
return G__8367;
})()
,(function() { 
var G__8370__delegate = function (s,_){
return clojure.string.trim(s);
};
var G__8370 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8371__i = 0, G__8371__a = new Array(arguments.length -  1);
while (G__8371__i < G__8371__a.length) {G__8371__a[G__8371__i] = arguments[G__8371__i + 1]; ++G__8371__i;}
  _ = new cljs.core.IndexedSeq(G__8371__a,0,null);
} 
return G__8370__delegate.call(this,s,_);};
G__8370.cljs$lang$maxFixedArity = 1;
G__8370.cljs$lang$applyTo = (function (arglist__8372){
var s = cljs.core.first(arglist__8372);
var _ = cljs.core.rest(arglist__8372);
return G__8370__delegate(s,_);
});
G__8370.cljs$core$IFn$_invoke$arity$variadic = G__8370__delegate;
return G__8370;
})()
,(function() { 
var G__8373__delegate = function (s,prefix,_){
return clojure.string.starts_with_QMARK_(s,prefix);
};
var G__8373 = function (s,prefix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8375__i = 0, G__8375__a = new Array(arguments.length -  2);
while (G__8375__i < G__8375__a.length) {G__8375__a[G__8375__i] = arguments[G__8375__i + 2]; ++G__8375__i;}
  _ = new cljs.core.IndexedSeq(G__8375__a,0,null);
} 
return G__8373__delegate.call(this,s,prefix,_);};
G__8373.cljs$lang$maxFixedArity = 2;
G__8373.cljs$lang$applyTo = (function (arglist__8376){
var s = cljs.core.first(arglist__8376);
arglist__8376 = cljs.core.next(arglist__8376);
var prefix = cljs.core.first(arglist__8376);
var _ = cljs.core.rest(arglist__8376);
return G__8373__delegate(s,prefix,_);
});
G__8373.cljs$core$IFn$_invoke$arity$variadic = G__8373__delegate;
return G__8373;
})()
,(function() { 
var G__8377__delegate = function (s,_){
return clojure.string.lower_case(s);
};
var G__8377 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8379__i = 0, G__8379__a = new Array(arguments.length -  1);
while (G__8379__i < G__8379__a.length) {G__8379__a[G__8379__i] = arguments[G__8379__i + 1]; ++G__8379__i;}
  _ = new cljs.core.IndexedSeq(G__8379__a,0,null);
} 
return G__8377__delegate.call(this,s,_);};
G__8377.cljs$lang$maxFixedArity = 1;
G__8377.cljs$lang$applyTo = (function (arglist__8380){
var s = cljs.core.first(arglist__8380);
var _ = cljs.core.rest(arglist__8380);
return G__8377__delegate(s,_);
});
G__8377.cljs$core$IFn$_invoke$arity$variadic = G__8377__delegate;
return G__8377;
})()
,(function() { 
var G__8381__delegate = function (s,other,_){
return (cljs.core.compare(s,other) < (0));
};
var G__8381 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8382__i = 0, G__8382__a = new Array(arguments.length -  2);
while (G__8382__i < G__8382__a.length) {G__8382__a[G__8382__i] = arguments[G__8382__i + 2]; ++G__8382__i;}
  _ = new cljs.core.IndexedSeq(G__8382__a,0,null);
} 
return G__8381__delegate.call(this,s,other,_);};
G__8381.cljs$lang$maxFixedArity = 2;
G__8381.cljs$lang$applyTo = (function (arglist__8383){
var s = cljs.core.first(arglist__8383);
arglist__8383 = cljs.core.next(arglist__8383);
var other = cljs.core.first(arglist__8383);
var _ = cljs.core.rest(arglist__8383);
return G__8381__delegate(s,other,_);
});
G__8381.cljs$core$IFn$_invoke$arity$variadic = G__8381__delegate;
return G__8381;
})()
,(function() { 
var G__8384__delegate = function (s,other,_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(other));
};
var G__8384 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8387__i = 0, G__8387__a = new Array(arguments.length -  2);
while (G__8387__i < G__8387__a.length) {G__8387__a[G__8387__i] = arguments[G__8387__i + 2]; ++G__8387__i;}
  _ = new cljs.core.IndexedSeq(G__8387__a,0,null);
} 
return G__8384__delegate.call(this,s,other,_);};
G__8384.cljs$lang$maxFixedArity = 2;
G__8384.cljs$lang$applyTo = (function (arglist__8388){
var s = cljs.core.first(arglist__8388);
arglist__8388 = cljs.core.next(arglist__8388);
var other = cljs.core.first(arglist__8388);
var _ = cljs.core.rest(arglist__8388);
return G__8384__delegate(s,other,_);
});
G__8384.cljs$core$IFn$_invoke$arity$variadic = G__8384__delegate;
return G__8384;
})()
,(function() { 
var G__8389__delegate = function (s,_){
return cljs.core.hash(s);
};
var G__8389 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8390__i = 0, G__8390__a = new Array(arguments.length -  1);
while (G__8390__i < G__8390__a.length) {G__8390__a[G__8390__i] = arguments[G__8390__i + 1]; ++G__8390__i;}
  _ = new cljs.core.IndexedSeq(G__8390__a,0,null);
} 
return G__8389__delegate.call(this,s,_);};
G__8389.cljs$lang$maxFixedArity = 1;
G__8389.cljs$lang$applyTo = (function (arglist__8391){
var s = cljs.core.first(arglist__8391);
var _ = cljs.core.rest(arglist__8391);
return G__8389__delegate(s,_);
});
G__8389.cljs$core$IFn$_invoke$arity$variadic = G__8389__delegate;
return G__8389;
})()
,(function() { 
var G__8392__delegate = function (s,other,_){
return (cljs.core.compare(s,other) > (0));
};
var G__8392 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8393__i = 0, G__8393__a = new Array(arguments.length -  2);
while (G__8393__i < G__8393__a.length) {G__8393__a[G__8393__i] = arguments[G__8393__i + 2]; ++G__8393__i;}
  _ = new cljs.core.IndexedSeq(G__8393__a,0,null);
} 
return G__8392__delegate.call(this,s,other,_);};
G__8392.cljs$lang$maxFixedArity = 2;
G__8392.cljs$lang$applyTo = (function (arglist__8394){
var s = cljs.core.first(arglist__8394);
arglist__8394 = cljs.core.next(arglist__8394);
var other = cljs.core.first(arglist__8394);
var _ = cljs.core.rest(arglist__8394);
return G__8392__delegate(s,other,_);
});
G__8392.cljs$core$IFn$_invoke$arity$variadic = G__8392__delegate;
return G__8392;
})()
,(function() { 
var G__8395__delegate = function (s,substr,_){
return clojure.string.includes_QMARK_(s,substr);
};
var G__8395 = function (s,substr,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8396__i = 0, G__8396__a = new Array(arguments.length -  2);
while (G__8396__i < G__8396__a.length) {G__8396__a[G__8396__i] = arguments[G__8396__i + 2]; ++G__8396__i;}
  _ = new cljs.core.IndexedSeq(G__8396__a,0,null);
} 
return G__8395__delegate.call(this,s,substr,_);};
G__8395.cljs$lang$maxFixedArity = 2;
G__8395.cljs$lang$applyTo = (function (arglist__8397){
var s = cljs.core.first(arglist__8397);
arglist__8397 = cljs.core.next(arglist__8397);
var substr = cljs.core.first(arglist__8397);
var _ = cljs.core.rest(arglist__8397);
return G__8395__delegate(s,substr,_);
});
G__8395.cljs$core$IFn$_invoke$arity$variadic = G__8395__delegate;
return G__8395;
})()
,(function() { 
var G__8398__delegate = function (s,_){
return parseFloat(clojure.string.trim(s));
};
var G__8398 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8399__i = 0, G__8399__a = new Array(arguments.length -  1);
while (G__8399__i < G__8399__a.length) {G__8399__a[G__8399__i] = arguments[G__8399__i + 1]; ++G__8399__i;}
  _ = new cljs.core.IndexedSeq(G__8399__a,0,null);
} 
return G__8398__delegate.call(this,s,_);};
G__8398.cljs$lang$maxFixedArity = 1;
G__8398.cljs$lang$applyTo = (function (arglist__8400){
var s = cljs.core.first(arglist__8400);
var _ = cljs.core.rest(arglist__8400);
return G__8398__delegate(s,_);
});
G__8398.cljs$core$IFn$_invoke$arity$variadic = G__8398__delegate;
return G__8398;
})()
,(function() { 
var G__8401__delegate = function (s,other,_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8401 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8402__i = 0, G__8402__a = new Array(arguments.length -  2);
while (G__8402__i < G__8402__a.length) {G__8402__a[G__8402__i] = arguments[G__8402__i + 2]; ++G__8402__i;}
  _ = new cljs.core.IndexedSeq(G__8402__a,0,null);
} 
return G__8401__delegate.call(this,s,other,_);};
G__8401.cljs$lang$maxFixedArity = 2;
G__8401.cljs$lang$applyTo = (function (arglist__8403){
var s = cljs.core.first(arglist__8403);
arglist__8403 = cljs.core.next(arglist__8403);
var other = cljs.core.first(arglist__8403);
var _ = cljs.core.rest(arglist__8403);
return G__8401__delegate(s,other,_);
});
G__8401.cljs$core$IFn$_invoke$arity$variadic = G__8401__delegate;
return G__8401;
})()
,(function() { 
var G__8404__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__8404 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8405__i = 0, G__8405__a = new Array(arguments.length -  1);
while (G__8405__i < G__8405__a.length) {G__8405__a[G__8405__i] = arguments[G__8405__i + 1]; ++G__8405__i;}
  _ = new cljs.core.IndexedSeq(G__8405__a,0,null);
} 
return G__8404__delegate.call(this,s,_);};
G__8404.cljs$lang$maxFixedArity = 1;
G__8404.cljs$lang$applyTo = (function (arglist__8406){
var s = cljs.core.first(arglist__8406);
var _ = cljs.core.rest(arglist__8406);
return G__8404__delegate(s,_);
});
G__8404.cljs$core$IFn$_invoke$arity$variadic = G__8404__delegate;
return G__8404;
})()
,(function() { 
var G__8407__delegate = function (s,_){
return clojure.string.upper_case(s);
};
var G__8407 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8408__i = 0, G__8408__a = new Array(arguments.length -  1);
while (G__8408__i < G__8408__a.length) {G__8408__a[G__8408__i] = arguments[G__8408__i + 1]; ++G__8408__i;}
  _ = new cljs.core.IndexedSeq(G__8408__a,0,null);
} 
return G__8407__delegate.call(this,s,_);};
G__8407.cljs$lang$maxFixedArity = 1;
G__8407.cljs$lang$applyTo = (function (arglist__8413){
var s = cljs.core.first(arglist__8413);
var _ = cljs.core.rest(arglist__8413);
return G__8407__delegate(s,_);
});
G__8407.cljs$core$IFn$_invoke$arity$variadic = G__8407__delegate;
return G__8407;
})()
,(function() { 
var G__8414__delegate = function (s,start,end,_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,start,end);
};
var G__8414 = function (s,start,end,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8415__i = 0, G__8415__a = new Array(arguments.length -  3);
while (G__8415__i < G__8415__a.length) {G__8415__a[G__8415__i] = arguments[G__8415__i + 3]; ++G__8415__i;}
  _ = new cljs.core.IndexedSeq(G__8415__a,0,null);
} 
return G__8414__delegate.call(this,s,start,end,_);};
G__8414.cljs$lang$maxFixedArity = 3;
G__8414.cljs$lang$applyTo = (function (arglist__8416){
var s = cljs.core.first(arglist__8416);
arglist__8416 = cljs.core.next(arglist__8416);
var start = cljs.core.first(arglist__8416);
arglist__8416 = cljs.core.next(arglist__8416);
var end = cljs.core.first(arglist__8416);
var _ = cljs.core.rest(arglist__8416);
return G__8414__delegate(s,start,end,_);
});
G__8414.cljs$core$IFn$_invoke$arity$variadic = G__8414__delegate;
return G__8414;
})()
,(function() { 
var G__8420__delegate = function (s,idx,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,idx);
};
var G__8420 = function (s,idx,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8421__i = 0, G__8421__a = new Array(arguments.length -  2);
while (G__8421__i < G__8421__a.length) {G__8421__a[G__8421__i] = arguments[G__8421__i + 2]; ++G__8421__i;}
  _ = new cljs.core.IndexedSeq(G__8421__a,0,null);
} 
return G__8420__delegate.call(this,s,idx,_);};
G__8420.cljs$lang$maxFixedArity = 2;
G__8420.cljs$lang$applyTo = (function (arglist__8424){
var s = cljs.core.first(arglist__8424);
arglist__8424 = cljs.core.next(arglist__8424);
var idx = cljs.core.first(arglist__8424);
var _ = cljs.core.rest(arglist__8424);
return G__8420__delegate(s,idx,_);
});
G__8420.cljs$core$IFn$_invoke$arity$variadic = G__8420__delegate;
return G__8420;
})()
,(function() { 
var G__8425__delegate = function (s,old,new$,_){
return clojure.string.replace(s,old,new$);
};
var G__8425 = function (s,old,new$,var_args){
var _ = null;
if (arguments.length > 3) {
var G__8426__i = 0, G__8426__a = new Array(arguments.length -  3);
while (G__8426__i < G__8426__a.length) {G__8426__a[G__8426__i] = arguments[G__8426__i + 3]; ++G__8426__i;}
  _ = new cljs.core.IndexedSeq(G__8426__a,0,null);
} 
return G__8425__delegate.call(this,s,old,new$,_);};
G__8425.cljs$lang$maxFixedArity = 3;
G__8425.cljs$lang$applyTo = (function (arglist__8427){
var s = cljs.core.first(arglist__8427);
arglist__8427 = cljs.core.next(arglist__8427);
var old = cljs.core.first(arglist__8427);
arglist__8427 = cljs.core.next(arglist__8427);
var new$ = cljs.core.first(arglist__8427);
var _ = cljs.core.rest(arglist__8427);
return G__8425__delegate(s,old,new$,_);
});
G__8425.cljs$core$IFn$_invoke$arity$variadic = G__8425__delegate;
return G__8425;
})()
,(function() { 
var G__8428__delegate = function (s,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"StringCursor","StringCursor",974681462),new cljs.core.Keyword(null,"source","source",-433931539),s,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null);
};
var G__8428 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8433__i = 0, G__8433__a = new Array(arguments.length -  1);
while (G__8433__i < G__8433__a.length) {G__8433__a[G__8433__i] = arguments[G__8433__i + 1]; ++G__8433__i;}
  _ = new cljs.core.IndexedSeq(G__8433__a,0,null);
} 
return G__8428__delegate.call(this,s,_);};
G__8428.cljs$lang$maxFixedArity = 1;
G__8428.cljs$lang$applyTo = (function (arglist__8434){
var s = cljs.core.first(arglist__8434);
var _ = cljs.core.rest(arglist__8434);
return G__8428__delegate(s,_);
});
G__8428.cljs$core$IFn$_invoke$arity$variadic = G__8428__delegate;
return G__8428;
})()
,(function() { 
var G__8436__delegate = function (s,delim,_){
return cljs.core.vec(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs.core.re_pattern(delim)));
};
var G__8436 = function (s,delim,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8438__i = 0, G__8438__a = new Array(arguments.length -  2);
while (G__8438__i < G__8438__a.length) {G__8438__a[G__8438__i] = arguments[G__8438__i + 2]; ++G__8438__i;}
  _ = new cljs.core.IndexedSeq(G__8438__a,0,null);
} 
return G__8436__delegate.call(this,s,delim,_);};
G__8436.cljs$lang$maxFixedArity = 2;
G__8436.cljs$lang$applyTo = (function (arglist__8440){
var s = cljs.core.first(arglist__8440);
arglist__8440 = cljs.core.next(arglist__8440);
var delim = cljs.core.first(arglist__8440);
var _ = cljs.core.rest(arglist__8440);
return G__8436__delegate(s,delim,_);
});
G__8436.cljs$core$IFn$_invoke$arity$variadic = G__8436__delegate;
return G__8436;
})()
,(function() { 
var G__8445__delegate = function (s,_){
return cljs.core.count(s);
};
var G__8445 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8446__i = 0, G__8446__a = new Array(arguments.length -  1);
while (G__8446__i < G__8446__a.length) {G__8446__a[G__8446__i] = arguments[G__8446__i + 1]; ++G__8446__i;}
  _ = new cljs.core.IndexedSeq(G__8446__a,0,null);
} 
return G__8445__delegate.call(this,s,_);};
G__8445.cljs$lang$maxFixedArity = 1;
G__8445.cljs$lang$applyTo = (function (arglist__8448){
var s = cljs.core.first(arglist__8448);
var _ = cljs.core.rest(arglist__8448);
return G__8445__delegate(s,_);
});
G__8445.cljs$core$IFn$_invoke$arity$variadic = G__8445__delegate;
return G__8445;
})()
,(function() { 
var G__8451__delegate = function (s,_){
return parseInt(clojure.string.trim(s),(10));
};
var G__8451 = function (s,var_args){
var _ = null;
if (arguments.length > 1) {
var G__8452__i = 0, G__8452__a = new Array(arguments.length -  1);
while (G__8452__i < G__8452__a.length) {G__8452__a[G__8452__i] = arguments[G__8452__i + 1]; ++G__8452__i;}
  _ = new cljs.core.IndexedSeq(G__8452__a,0,null);
} 
return G__8451__delegate.call(this,s,_);};
G__8451.cljs$lang$maxFixedArity = 1;
G__8451.cljs$lang$applyTo = (function (arglist__8453){
var s = cljs.core.first(arglist__8453);
var _ = cljs.core.rest(arglist__8453);
return G__8451__delegate(s,_);
});
G__8451.cljs$core$IFn$_invoke$arity$variadic = G__8451__delegate;
return G__8451;
})()
,(function() { 
var G__8456__delegate = function (s,ch,_){
var idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)));
if(cljs.core.truth_(idx)){
return idx;
} else {
return (-1);
}
};
var G__8456 = function (s,ch,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8457__i = 0, G__8457__a = new Array(arguments.length -  2);
while (G__8457__i < G__8457__a.length) {G__8457__a[G__8457__i] = arguments[G__8457__i + 2]; ++G__8457__i;}
  _ = new cljs.core.IndexedSeq(G__8457__a,0,null);
} 
return G__8456__delegate.call(this,s,ch,_);};
G__8456.cljs$lang$maxFixedArity = 2;
G__8456.cljs$lang$applyTo = (function (arglist__8458){
var s = cljs.core.first(arglist__8458);
arglist__8458 = cljs.core.next(arglist__8458);
var ch = cljs.core.first(arglist__8458);
var _ = cljs.core.rest(arglist__8458);
return G__8456__delegate(s,ch,_);
});
G__8456.cljs$core$IFn$_invoke$arity$variadic = G__8456__delegate;
return G__8456;
})()
,(function() { 
var G__8459__delegate = function (s,other,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,other);
};
var G__8459 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8460__i = 0, G__8460__a = new Array(arguments.length -  2);
while (G__8460__i < G__8460__a.length) {G__8460__a[G__8460__i] = arguments[G__8460__i + 2]; ++G__8460__i;}
  _ = new cljs.core.IndexedSeq(G__8460__a,0,null);
} 
return G__8459__delegate.call(this,s,other,_);};
G__8459.cljs$lang$maxFixedArity = 2;
G__8459.cljs$lang$applyTo = (function (arglist__8461){
var s = cljs.core.first(arglist__8461);
arglist__8461 = cljs.core.next(arglist__8461);
var other = cljs.core.first(arglist__8461);
var _ = cljs.core.rest(arglist__8461);
return G__8459__delegate(s,other,_);
});
G__8459.cljs$core$IFn$_invoke$arity$variadic = G__8459__delegate;
return G__8459;
})()
,(function() { 
var G__8466__delegate = function (s,other,_){
return (cljs.core.compare(s,other) >= (0));
};
var G__8466 = function (s,other,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8467__i = 0, G__8467__a = new Array(arguments.length -  2);
while (G__8467__i < G__8467__a.length) {G__8467__a[G__8467__i] = arguments[G__8467__i + 2]; ++G__8467__i;}
  _ = new cljs.core.IndexedSeq(G__8467__a,0,null);
} 
return G__8466__delegate.call(this,s,other,_);};
G__8466.cljs$lang$maxFixedArity = 2;
G__8466.cljs$lang$applyTo = (function (arglist__8468){
var s = cljs.core.first(arglist__8468);
arglist__8468 = cljs.core.next(arglist__8468);
var other = cljs.core.first(arglist__8468);
var _ = cljs.core.rest(arglist__8468);
return G__8466__delegate(s,other,_);
});
G__8466.cljs$core$IFn$_invoke$arity$variadic = G__8466__delegate;
return G__8466;
})()
,(function() { 
var G__8469__delegate = function (s,suffix,_){
return clojure.string.ends_with_QMARK_(s,suffix);
};
var G__8469 = function (s,suffix,var_args){
var _ = null;
if (arguments.length > 2) {
var G__8470__i = 0, G__8470__a = new Array(arguments.length -  2);
while (G__8470__i < G__8470__a.length) {G__8470__a[G__8470__i] = arguments[G__8470__i + 2]; ++G__8470__i;}
  _ = new cljs.core.IndexedSeq(G__8470__a,0,null);
} 
return G__8469__delegate.call(this,s,suffix,_);};
G__8469.cljs$lang$maxFixedArity = 2;
G__8469.cljs$lang$applyTo = (function (arglist__8471){
var s = cljs.core.first(arglist__8471);
arglist__8471 = cljs.core.next(arglist__8471);
var suffix = cljs.core.first(arglist__8471);
var _ = cljs.core.rest(arglist__8471);
return G__8469__delegate(s,suffix,_);
});
G__8469.cljs$core$IFn$_invoke$arity$variadic = G__8469__delegate;
return G__8469;
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
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__6880 = cljs.core.get_global_hierarchy;
return (fexpr__6880.cljs$core$IFn$_invoke$arity$0 ? fexpr__6880.cljs$core$IFn$_invoke$arity$0() : fexpr__6880.call(null));
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
var found = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6885_SHARP_){
return fs.existsSync(p1__6885_SHARP_);
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
nex.interpreter.process_intern = (function nex$interpreter$process_intern(ctx,p__6896){
var map__6897 = p__6896;
var map__6897__$1 = cljs.core.__destructure_map(map__6897);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6897__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6897__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6897__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("intern is not supported in ClojureScript. Parse on the JVM and send the AST, or use registerClass to manually register classes.",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias], null));
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (ctx,p__6900){
var map__6901 = p__6900;
var map__6901__$1 = cljs.core.__destructure_map(map__6901);
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var interns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"interns","interns",693699831));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6901__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var seq__6903_8516 = cljs.core.seq(imports);
var chunk__6904_8517 = null;
var count__6905_8518 = (0);
var i__6906_8519 = (0);
while(true){
if((i__6906_8519 < count__6905_8518)){
var import_node_8524 = chunk__6904_8517.cljs$core$IIndexed$_nth$arity$2(null,i__6906_8519);
if(cljs.core.map_QMARK_(import_node_8524)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8524);
} else {
}


var G__8529 = seq__6903_8516;
var G__8530 = chunk__6904_8517;
var G__8531 = count__6905_8518;
var G__8532 = (i__6906_8519 + (1));
seq__6903_8516 = G__8529;
chunk__6904_8517 = G__8530;
count__6905_8518 = G__8531;
i__6906_8519 = G__8532;
continue;
} else {
var temp__5823__auto___8533 = cljs.core.seq(seq__6903_8516);
if(temp__5823__auto___8533){
var seq__6903_8535__$1 = temp__5823__auto___8533;
if(cljs.core.chunked_seq_QMARK_(seq__6903_8535__$1)){
var c__5673__auto___8536 = cljs.core.chunk_first(seq__6903_8535__$1);
var G__8537 = cljs.core.chunk_rest(seq__6903_8535__$1);
var G__8538 = c__5673__auto___8536;
var G__8539 = cljs.core.count(c__5673__auto___8536);
var G__8540 = (0);
seq__6903_8516 = G__8537;
chunk__6904_8517 = G__8538;
count__6905_8518 = G__8539;
i__6906_8519 = G__8540;
continue;
} else {
var import_node_8545 = cljs.core.first(seq__6903_8535__$1);
if(cljs.core.map_QMARK_(import_node_8545)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.conj,import_node_8545);
} else {
}


var G__8547 = cljs.core.next(seq__6903_8535__$1);
var G__8548 = null;
var G__8549 = (0);
var G__8550 = (0);
seq__6903_8516 = G__8547;
chunk__6904_8517 = G__8548;
count__6905_8518 = G__8549;
i__6906_8519 = G__8550;
continue;
}
} else {
}
}
break;
}

var seq__6917_8552 = cljs.core.seq(interns);
var chunk__6918_8553 = null;
var count__6919_8554 = (0);
var i__6920_8555 = (0);
while(true){
if((i__6920_8555 < count__6919_8554)){
var intern_node_8561 = chunk__6918_8553.cljs$core$IIndexed$_nth$arity$2(null,i__6920_8555);
if(cljs.core.map_QMARK_(intern_node_8561)){
nex.interpreter.process_intern(ctx,intern_node_8561);
} else {
}


var G__8563 = seq__6917_8552;
var G__8564 = chunk__6918_8553;
var G__8565 = count__6919_8554;
var G__8566 = (i__6920_8555 + (1));
seq__6917_8552 = G__8563;
chunk__6918_8553 = G__8564;
count__6919_8554 = G__8565;
i__6920_8555 = G__8566;
continue;
} else {
var temp__5823__auto___8567 = cljs.core.seq(seq__6917_8552);
if(temp__5823__auto___8567){
var seq__6917_8568__$1 = temp__5823__auto___8567;
if(cljs.core.chunked_seq_QMARK_(seq__6917_8568__$1)){
var c__5673__auto___8573 = cljs.core.chunk_first(seq__6917_8568__$1);
var G__8574 = cljs.core.chunk_rest(seq__6917_8568__$1);
var G__8575 = c__5673__auto___8573;
var G__8576 = cljs.core.count(c__5673__auto___8573);
var G__8577 = (0);
seq__6917_8552 = G__8574;
chunk__6918_8553 = G__8575;
count__6919_8554 = G__8576;
i__6920_8555 = G__8577;
continue;
} else {
var intern_node_8578 = cljs.core.first(seq__6917_8568__$1);
if(cljs.core.map_QMARK_(intern_node_8578)){
nex.interpreter.process_intern(ctx,intern_node_8578);
} else {
}


var G__8579 = cljs.core.next(seq__6917_8568__$1);
var G__8580 = null;
var G__8581 = (0);
var G__8582 = (0);
seq__6917_8552 = G__8579;
chunk__6918_8553 = G__8580;
count__6919_8554 = G__8581;
i__6920_8555 = G__8582;
continue;
}
} else {
}
}
break;
}

var seq__6926_8583 = cljs.core.seq(classes);
var chunk__6927_8584 = null;
var count__6928_8585 = (0);
var i__6929_8586 = (0);
while(true){
if((i__6929_8586 < count__6928_8585)){
var class_node_8587 = chunk__6927_8584.cljs$core$IIndexed$_nth$arity$2(null,i__6929_8586);
if(cljs.core.map_QMARK_(class_node_8587)){
nex.interpreter.register_class(ctx,class_node_8587);
} else {
}


var G__8588 = seq__6926_8583;
var G__8589 = chunk__6927_8584;
var G__8590 = count__6928_8585;
var G__8591 = (i__6929_8586 + (1));
seq__6926_8583 = G__8588;
chunk__6927_8584 = G__8589;
count__6928_8585 = G__8590;
i__6929_8586 = G__8591;
continue;
} else {
var temp__5823__auto___8592 = cljs.core.seq(seq__6926_8583);
if(temp__5823__auto___8592){
var seq__6926_8593__$1 = temp__5823__auto___8592;
if(cljs.core.chunked_seq_QMARK_(seq__6926_8593__$1)){
var c__5673__auto___8594 = cljs.core.chunk_first(seq__6926_8593__$1);
var G__8595 = cljs.core.chunk_rest(seq__6926_8593__$1);
var G__8596 = c__5673__auto___8594;
var G__8597 = cljs.core.count(c__5673__auto___8594);
var G__8598 = (0);
seq__6926_8583 = G__8595;
chunk__6927_8584 = G__8596;
count__6928_8585 = G__8597;
i__6929_8586 = G__8598;
continue;
} else {
var class_node_8599 = cljs.core.first(seq__6926_8593__$1);
if(cljs.core.map_QMARK_(class_node_8599)){
nex.interpreter.register_class(ctx,class_node_8599);
} else {
}


var G__8600 = cljs.core.next(seq__6926_8593__$1);
var G__8601 = null;
var G__8602 = (0);
var G__8603 = (0);
seq__6926_8583 = G__8600;
chunk__6927_8584 = G__8601;
count__6928_8585 = G__8602;
i__6929_8586 = G__8603;
continue;
}
} else {
}
}
break;
}

var seq__6935_8608 = cljs.core.seq(functions);
var chunk__6936_8609 = null;
var count__6937_8610 = (0);
var i__6938_8611 = (0);
while(true){
if((i__6938_8611 < count__6937_8610)){
var fn_node_8612 = chunk__6936_8609.cljs$core$IIndexed$_nth$arity$2(null,i__6938_8611);
if(cljs.core.map_QMARK_(fn_node_8612)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8612);
} else {
}


var G__8615 = seq__6935_8608;
var G__8616 = chunk__6936_8609;
var G__8617 = count__6937_8610;
var G__8618 = (i__6938_8611 + (1));
seq__6935_8608 = G__8615;
chunk__6936_8609 = G__8616;
count__6937_8610 = G__8617;
i__6938_8611 = G__8618;
continue;
} else {
var temp__5823__auto___8619 = cljs.core.seq(seq__6935_8608);
if(temp__5823__auto___8619){
var seq__6935_8620__$1 = temp__5823__auto___8619;
if(cljs.core.chunked_seq_QMARK_(seq__6935_8620__$1)){
var c__5673__auto___8621 = cljs.core.chunk_first(seq__6935_8620__$1);
var G__8622 = cljs.core.chunk_rest(seq__6935_8620__$1);
var G__8623 = c__5673__auto___8621;
var G__8624 = cljs.core.count(c__5673__auto___8621);
var G__8625 = (0);
seq__6935_8608 = G__8622;
chunk__6936_8609 = G__8623;
count__6937_8610 = G__8624;
i__6938_8611 = G__8625;
continue;
} else {
var fn_node_8626 = cljs.core.first(seq__6935_8620__$1);
if(cljs.core.map_QMARK_(fn_node_8626)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,fn_node_8626);
} else {
}


var G__8627 = cljs.core.next(seq__6935_8620__$1);
var G__8628 = null;
var G__8629 = (0);
var G__8630 = (0);
seq__6935_8608 = G__8627;
chunk__6936_8609 = G__8628;
count__6937_8610 = G__8629;
i__6938_8611 = G__8630;
continue;
}
} else {
}
}
break;
}

var seq__6944_8631 = cljs.core.seq(((cljs.core.seq(statements))?statements:calls));
var chunk__6945_8632 = null;
var count__6946_8633 = (0);
var i__6947_8634 = (0);
while(true){
if((i__6947_8634 < count__6946_8633)){
var stmt_node_8639 = chunk__6945_8632.cljs$core$IIndexed$_nth$arity$2(null,i__6947_8634);
if(cljs.core.map_QMARK_(stmt_node_8639)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8639);
} else {
}


var G__8641 = seq__6944_8631;
var G__8642 = chunk__6945_8632;
var G__8643 = count__6946_8633;
var G__8644 = (i__6947_8634 + (1));
seq__6944_8631 = G__8641;
chunk__6945_8632 = G__8642;
count__6946_8633 = G__8643;
i__6947_8634 = G__8644;
continue;
} else {
var temp__5823__auto___8646 = cljs.core.seq(seq__6944_8631);
if(temp__5823__auto___8646){
var seq__6944_8648__$1 = temp__5823__auto___8646;
if(cljs.core.chunked_seq_QMARK_(seq__6944_8648__$1)){
var c__5673__auto___8653 = cljs.core.chunk_first(seq__6944_8648__$1);
var G__8654 = cljs.core.chunk_rest(seq__6944_8648__$1);
var G__8655 = c__5673__auto___8653;
var G__8656 = cljs.core.count(c__5673__auto___8653);
var G__8657 = (0);
seq__6944_8631 = G__8654;
chunk__6945_8632 = G__8655;
count__6946_8633 = G__8656;
i__6947_8634 = G__8657;
continue;
} else {
var stmt_node_8659 = cljs.core.first(seq__6944_8648__$1);
if(cljs.core.map_QMARK_(stmt_node_8659)){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_node_8659);
} else {
}


var G__8661 = cljs.core.next(seq__6944_8648__$1);
var G__8662 = null;
var G__8663 = (0);
var G__8664 = (0);
seq__6944_8631 = G__8661;
chunk__6945_8632 = G__8662;
count__6946_8633 = G__8663;
i__6947_8634 = G__8664;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"function","function",-2127255473),(function (ctx,p__6957){
var map__6958 = p__6957;
var map__6958__$1 = cljs.core.__destructure_map(map__6958);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6958__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6958__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
nex.interpreter.register_class(ctx,class_def);

var obj = nex.interpreter.make_object.cljs$core$IFn$_invoke$arity$2(class_name,cljs.core.PersistentArrayMap.EMPTY);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,obj);

return obj;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"anonymous-function","anonymous-function",-362174318),(function (ctx,p__6959){
var map__6960 = p__6959;
var map__6960__$1 = cljs.core.__destructure_map(map__6960);
var class_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6960__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6960__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
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
var _ = (function (){var seq__6971 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(current_obj));
var chunk__6972 = null;
var count__6973 = (0);
var i__6974 = (0);
while(true){
if((i__6974 < count__6973)){
var vec__6986 = chunk__6972.cljs$core$IIndexed$_nth$arity$2(null,i__6974);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6986,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8674 = seq__6971;
var G__8675 = chunk__6972;
var G__8676 = count__6973;
var G__8677 = (i__6974 + (1));
seq__6971 = G__8674;
chunk__6972 = G__8675;
count__6973 = G__8676;
i__6974 = G__8677;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6971);
if(temp__5823__auto__){
var seq__6971__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6971__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6971__$1);
var G__8678 = cljs.core.chunk_rest(seq__6971__$1);
var G__8679 = c__5673__auto__;
var G__8680 = cljs.core.count(c__5673__auto__);
var G__8681 = (0);
seq__6971 = G__8678;
chunk__6972 = G__8679;
count__6973 = G__8680;
i__6974 = G__8681;
continue;
} else {
var vec__6993 = cljs.core.first(seq__6971__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6993,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6993,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8682 = cljs.core.next(seq__6971__$1);
var G__8683 = null;
var G__8684 = (0);
var G__8685 = (0);
seq__6971 = G__8682;
chunk__6972 = G__8683;
count__6973 = G__8684;
i__6974 = G__8685;
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
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__6996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__6997 = null;
var count__6998 = (0);
var i__6999 = (0);
while(true){
if((i__6999 < count__6998)){
var vec__7010 = chunk__6997.cljs$core$IIndexed$_nth$arity$2(null,i__6999);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8687 = seq__6996;
var G__8688 = chunk__6997;
var G__8689 = count__6998;
var G__8690 = (i__6999 + (1));
seq__6996 = G__8687;
chunk__6997 = G__8688;
count__6998 = G__8689;
i__6999 = G__8690;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6996);
if(temp__5823__auto__){
var seq__6996__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6996__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6996__$1);
var G__8691 = cljs.core.chunk_rest(seq__6996__$1);
var G__8692 = c__5673__auto__;
var G__8693 = cljs.core.count(c__5673__auto__);
var G__8694 = (0);
seq__6996 = G__8691;
chunk__6997 = G__8692;
count__6998 = G__8693;
i__6999 = G__8694;
continue;
} else {
var vec__7019 = cljs.core.first(seq__6996__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7019,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7019,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8699 = cljs.core.next(seq__6996__$1);
var G__8700 = null;
var G__8701 = (0);
var G__8702 = (0);
seq__6996 = G__8699;
chunk__6997 = G__8700;
count__6998 = G__8701;
i__6999 = G__8702;
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
var G__7028 = new_ctx;
var G__7029 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable);
var G__7030 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__7028,G__7029,G__7030) : nex.interpreter.eval_body_with_rescue.call(null,G__7028,G__7029,G__7030));
} else {
var seq__7031 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(callable));
var chunk__7032 = null;
var count__7033 = (0);
var i__7034 = (0);
while(true){
if((i__7034 < count__7033)){
var stmt = chunk__7032.cljs$core$IIndexed$_nth$arity$2(null,i__7034);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8724 = seq__7031;
var G__8725 = chunk__7032;
var G__8726 = count__7033;
var G__8727 = (i__7034 + (1));
seq__7031 = G__8724;
chunk__7032 = G__8725;
count__7033 = G__8726;
i__7034 = G__8727;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7031);
if(temp__5823__auto__){
var seq__7031__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7031__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7031__$1);
var G__8728 = cljs.core.chunk_rest(seq__7031__$1);
var G__8729 = c__5673__auto__;
var G__8730 = cljs.core.count(c__5673__auto__);
var G__8731 = (0);
seq__7031 = G__8728;
chunk__7032 = G__8729;
count__7033 = G__8730;
i__7034 = G__8731;
continue;
} else {
var stmt = cljs.core.first(seq__7031__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8736 = cljs.core.next(seq__7031__$1);
var G__8737 = null;
var G__8738 = (0);
var G__8739 = (0);
seq__7031 = G__8736;
chunk__7032 = G__8737;
count__7033 = G__8738;
i__7034 = G__8739;
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
}catch (e7039){var ___$5 = e7039;
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
}catch (e7041){var ___$5 = e7041;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})();
var temp__5823__auto___8740 = new cljs.core.Keyword(null,"current-target","current-target",34322910).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8740)){
var tgt_8741 = temp__5823__auto___8740;
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),tgt_8741,updated_obj);
}catch (e7047){var __8742__$5 = e7047;
}} else {
}

var seq__7048_8747 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(updated_obj));
var chunk__7049_8748 = null;
var count__7050_8749 = (0);
var i__7051_8750 = (0);
while(true){
if((i__7051_8750 < count__7050_8749)){
var vec__7064_8751 = chunk__7049_8748.cljs$core$IIndexed$_nth$arity$2(null,i__7051_8750);
var field_name_8752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7064_8751,(0),null);
var field_val_8753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7064_8751,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8752))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8752),field_val_8753);
}catch (e7067){var __8756__$5 = e7067;
}} else {
}


var G__8757 = seq__7048_8747;
var G__8758 = chunk__7049_8748;
var G__8759 = count__7050_8749;
var G__8760 = (i__7051_8750 + (1));
seq__7048_8747 = G__8757;
chunk__7049_8748 = G__8758;
count__7050_8749 = G__8759;
i__7051_8750 = G__8760;
continue;
} else {
var temp__5823__auto___8761 = cljs.core.seq(seq__7048_8747);
if(temp__5823__auto___8761){
var seq__7048_8762__$1 = temp__5823__auto___8761;
if(cljs.core.chunked_seq_QMARK_(seq__7048_8762__$1)){
var c__5673__auto___8763 = cljs.core.chunk_first(seq__7048_8762__$1);
var G__8764 = cljs.core.chunk_rest(seq__7048_8762__$1);
var G__8765 = c__5673__auto___8763;
var G__8766 = cljs.core.count(c__5673__auto___8763);
var G__8767 = (0);
seq__7048_8747 = G__8764;
chunk__7049_8748 = G__8765;
count__7050_8749 = G__8766;
i__7051_8750 = G__8767;
continue;
} else {
var vec__7068_8772 = cljs.core.first(seq__7048_8762__$1);
var field_name_8773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7068_8772,(0),null);
var field_val_8774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7068_8772,(1),null);
if(cljs.core.contains_QMARK_(parent_field_names,cljs.core.name(field_name_8773))){
try{nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.name(field_name_8773),field_val_8774);
}catch (e7071){var __8783__$5 = e7071;
}} else {
}


var G__8785 = cljs.core.next(seq__7048_8762__$1);
var G__8786 = null;
var G__8787 = (0);
var G__8788 = (0);
seq__7048_8747 = G__8785;
chunk__7049_8748 = G__8786;
count__7050_8749 = G__8787;
i__7051_8750 = G__8788;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"call","call",-519999866),(function (ctx,p__7086){
var map__7087 = p__7086;
var map__7087__$1 = cljs.core.__destructure_map(map__7087);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),has_parens], null));

var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7076_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7076_SHARP_);
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
var _ = (function (){var seq__7094 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(obj));
var chunk__7095 = null;
var count__7096 = (0);
var i__7097 = (0);
while(true){
if((i__7097 < count__7096)){
var vec__7108 = chunk__7095.cljs$core$IIndexed$_nth$arity$2(null,i__7097);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7108,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7108,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8815 = seq__7094;
var G__8816 = chunk__7095;
var G__8817 = count__7096;
var G__8818 = (i__7097 + (1));
seq__7094 = G__8815;
chunk__7095 = G__8816;
count__7096 = G__8817;
i__7097 = G__8818;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7094);
if(temp__5823__auto__){
var seq__7094__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7094__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7094__$1);
var G__8823 = cljs.core.chunk_rest(seq__7094__$1);
var G__8824 = c__5673__auto__;
var G__8825 = cljs.core.count(c__5673__auto__);
var G__8826 = (0);
seq__7094 = G__8823;
chunk__7095 = G__8824;
count__7096 = G__8825;
i__7097 = G__8826;
continue;
} else {
var vec__7115 = cljs.core.first(seq__7094__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7115,(1),null);
nex.interpreter.env_define(method_env,cljs.core.name(field_name),field_val);


var G__8827 = cljs.core.next(seq__7094__$1);
var G__8828 = null;
var G__8829 = (0);
var G__8830 = (0);
seq__7094 = G__8827;
chunk__7095 = G__8828;
count__7096 = G__8829;
i__7097 = G__8830;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$1 = (cljs.core.truth_(params)?(function (){var seq__7118 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__7119 = null;
var count__7120 = (0);
var i__7121 = (0);
while(true){
if((i__7121 < count__7120)){
var vec__7132 = chunk__7119.cljs$core$IIndexed$_nth$arity$2(null,i__7121);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8831 = seq__7118;
var G__8832 = chunk__7119;
var G__8833 = count__7120;
var G__8834 = (i__7121 + (1));
seq__7118 = G__8831;
chunk__7119 = G__8832;
count__7120 = G__8833;
i__7121 = G__8834;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7118);
if(temp__5823__auto__){
var seq__7118__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7118__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7118__$1);
var G__8836 = cljs.core.chunk_rest(seq__7118__$1);
var G__8837 = c__5673__auto__;
var G__8838 = cljs.core.count(c__5673__auto__);
var G__8839 = (0);
seq__7118 = G__8836;
chunk__7119 = G__8837;
count__7120 = G__8838;
i__7121 = G__8839;
continue;
} else {
var vec__7135 = cljs.core.first(seq__7118__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7135,(1),null);
nex.interpreter.env_define(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__8840 = cljs.core.next(seq__7118__$1);
var G__8841 = null;
var G__8842 = (0);
var G__8843 = (0);
seq__7118 = G__8840;
chunk__7119 = G__8841;
count__7120 = G__8842;
i__7121 = G__8843;
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
var G__7146 = new_ctx;
var G__7147 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var G__7148 = rescue;
return (nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.eval_body_with_rescue.cljs$core$IFn$_invoke$arity$3(G__7146,G__7147,G__7148) : nex.interpreter.eval_body_with_rescue.call(null,G__7146,G__7147,G__7148));
} else {
var seq__7149 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def));
var chunk__7150 = null;
var count__7151 = (0);
var i__7152 = (0);
while(true){
if((i__7152 < count__7151)){
var stmt = chunk__7150.cljs$core$IIndexed$_nth$arity$2(null,i__7152);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8845 = seq__7149;
var G__8846 = chunk__7150;
var G__8847 = count__7151;
var G__8848 = (i__7152 + (1));
seq__7149 = G__8845;
chunk__7150 = G__8846;
count__7151 = G__8847;
i__7152 = G__8848;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7149);
if(temp__5823__auto__){
var seq__7149__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7149__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7149__$1);
var G__8849 = cljs.core.chunk_rest(seq__7149__$1);
var G__8850 = c__5673__auto__;
var G__8851 = cljs.core.count(c__5673__auto__);
var G__8852 = (0);
seq__7149 = G__8849;
chunk__7150 = G__8850;
count__7151 = G__8851;
i__7152 = G__8852;
continue;
} else {
var stmt = cljs.core.first(seq__7149__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__8853 = cljs.core.next(seq__7149__$1);
var G__8854 = null;
var G__8855 = (0);
var G__8856 = (0);
seq__7149 = G__8853;
chunk__7150 = G__8854;
count__7151 = G__8855;
i__7152 = G__8856;
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
}catch (e7157){var ___$6 = e7157;
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
}catch (e7158){var ___$6 = e7158;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_flag,"result"))?nex.interpreter.env_lookup(method_env,"result"):(function (){var res = (function (){try{return nex.interpreter.env_lookup(method_env,"result");
}catch (e7159){var ___$6 = e7159;
return new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873);
}})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("nex.interpreter","not-found","nex.interpreter/not-found",1276127873))){
return res;
} else {
return null;
}
})()
);
try{var temp__5823__auto___8857 = effective_ensure;
if(cljs.core.truth_(temp__5823__auto___8857)){
var ensure_assertions_8858 = temp__5823__auto___8857;
nex.interpreter.check_assertions(new_ctx,ensure_assertions_8858,nex.interpreter.Postcondition);
} else {
}

nex.interpreter.check_class_invariant(new_ctx,class_def);

if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,updated_obj);
} else {
}

return result;
}catch (e7161){var e = e7161;
if(cljs.core.truth_(target_name)){
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target_name,obj);
} else {
}

throw e;
}} else {
var all_fields = (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(ctx,class_def) : nex.interpreter.get_all_fields.call(null,ctx,class_def));
var field = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7081_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__7081_SHARP_),method);
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
}catch (e7171){var _ = e7171;
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
}catch (e7176){var _ = e7176;
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
var ___$1 = (cljs.core.truth_(called_obj)?(function (){var seq__7181 = cljs.core.seq(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(called_obj));
var chunk__7182 = null;
var count__7183 = (0);
var i__7184 = (0);
while(true){
if((i__7184 < count__7183)){
var vec__7195 = chunk__7182.cljs$core$IIndexed$_nth$arity$2(null,i__7184);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7195,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7195,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8924 = seq__7181;
var G__8925 = chunk__7182;
var G__8926 = count__7183;
var G__8927 = (i__7184 + (1));
seq__7181 = G__8924;
chunk__7182 = G__8925;
count__7183 = G__8926;
i__7184 = G__8927;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7181);
if(temp__5823__auto__){
var seq__7181__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7181__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7181__$1);
var G__8933 = cljs.core.chunk_rest(seq__7181__$1);
var G__8934 = c__5673__auto__;
var G__8935 = cljs.core.count(c__5673__auto__);
var G__8936 = (0);
seq__7181 = G__8933;
chunk__7182 = G__8934;
count__7183 = G__8935;
i__7184 = G__8936;
continue;
} else {
var vec__7198 = cljs.core.first(seq__7181__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7198,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7198,(1),null);
nex.interpreter.env_set_BANG_(current_env,cljs.core.name(field_name),field_val);


var G__8943 = cljs.core.next(seq__7181__$1);
var G__8944 = null;
var G__8945 = (0);
var G__8946 = (0);
seq__7181 = G__8943;
chunk__7182 = G__8944;
count__7183 = G__8945;
i__7184 = G__8946;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),(function (ctx,p__7209){
var map__7210 = p__7209;
var map__7210__$1 = cljs.core.__destructure_map(map__7210);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7210__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7210__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7210__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"member-assign","member-assign",1635495582),new cljs.core.Keyword(null,"object-type","object-type",-1889869015),object_type,new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
var temp__5823__auto___8957 = new cljs.core.Keyword(null,"modified-fields","modified-fields",2109717684).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5823__auto___8957)){
var mf_8962 = temp__5823__auto___8957;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mf_8962,cljs.core.conj,field);
} else {
}

nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),field,val);

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (ctx,p__7215){
var map__7216 = p__7215;
var map__7216__$1 = cljs.core.__destructure_map(map__7216);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7216__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7216__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_set_BANG_(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),target,val);

if(cljs.core.truth_((function (){var fexpr__7217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__7217.cljs$core$IFn$_invoke$arity$1 ? fexpr__7217.cljs$core$IFn$_invoke$arity$1(target) : fexpr__7217.call(null,target));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",target);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ctx,p__7218){
var map__7223 = p__7218;
var map__7223__$1 = cljs.core.__destructure_map(map__7223);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7223__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7223__$1,new cljs.core.Keyword(null,"value","value",305978217));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),value], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value);
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name,val);

if(cljs.core.truth_((function (){var fexpr__7224 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["result",null], null), null);
return (fexpr__7224.cljs$core$IFn$_invoke$arity$1 ? fexpr__7224.cljs$core$IFn$_invoke$arity$1(name) : fexpr__7224.call(null,name));
})())){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),"__result_assigned__",name);
} else {
}

return val;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"block","block",664686210),(function (ctx,statements){
if(cljs.core.sequential_QMARK_(statements)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7225_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7225_SHARP_);
}),statements));
} else {
return null;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"raise","raise",184141061),(function (ctx,p__7226){
var map__7227 = p__7226;
var map__7227__$1 = cljs.core.__destructure_map(map__7227);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7227__$1,new cljs.core.Keyword(null,"value","value",305978217));
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

try{var seq__7246_8996 = cljs.core.seq(body);
var chunk__7247_8997 = null;
var count__7248_8998 = (0);
var i__7249_8999 = (0);
while(true){
if((i__7249_8999 < count__7248_8998)){
var stmt_9000 = chunk__7247_8997.cljs$core$IIndexed$_nth$arity$2(null,i__7249_8999);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9000);


var G__9005 = seq__7246_8996;
var G__9006 = chunk__7247_8997;
var G__9007 = count__7248_8998;
var G__9008 = (i__7249_8999 + (1));
seq__7246_8996 = G__9005;
chunk__7247_8997 = G__9006;
count__7248_8998 = G__9007;
i__7249_8999 = G__9008;
continue;
} else {
var temp__5823__auto___9010 = cljs.core.seq(seq__7246_8996);
if(temp__5823__auto___9010){
var seq__7246_9011__$1 = temp__5823__auto___9010;
if(cljs.core.chunked_seq_QMARK_(seq__7246_9011__$1)){
var c__5673__auto___9016 = cljs.core.chunk_first(seq__7246_9011__$1);
var G__9018 = cljs.core.chunk_rest(seq__7246_9011__$1);
var G__9019 = c__5673__auto___9016;
var G__9020 = cljs.core.count(c__5673__auto___9016);
var G__9021 = (0);
seq__7246_8996 = G__9018;
chunk__7247_8997 = G__9019;
count__7248_8998 = G__9020;
i__7249_8999 = G__9021;
continue;
} else {
var stmt_9023 = cljs.core.first(seq__7246_9011__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9023);


var G__9025 = cljs.core.next(seq__7246_9011__$1);
var G__9026 = null;
var G__9028 = (0);
var G__9029 = (0);
seq__7246_8996 = G__9025;
chunk__7247_8997 = G__9026;
count__7248_8998 = G__9028;
i__7249_8999 = G__9029;
continue;
}
} else {
}
}
break;
}
}catch (e7236){var e_9033 = e7236;
if((((e_9033 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_9033)))))){
throw e_9033;
} else {
var exc_value_9035 = (((((e_9033 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-exception","nex-exception",492378451),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_9033))))))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e_9033)):e_9033.message);
var rescue_env_9036 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __9037 = nex.interpreter.env_define(rescue_env_9036,"exception",exc_value_9035);
var rescue_ctx_9038 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),rescue_env_9036);
try{var seq__7238_9044 = cljs.core.seq(rescue);
var chunk__7240_9045 = null;
var count__7241_9046 = (0);
var i__7242_9047 = (0);
while(true){
if((i__7242_9047 < count__7241_9046)){
var stmt_9048 = chunk__7240_9045.cljs$core$IIndexed$_nth$arity$2(null,i__7242_9047);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_9038,stmt_9048);


var G__9049 = seq__7238_9044;
var G__9050 = chunk__7240_9045;
var G__9051 = count__7241_9046;
var G__9052 = (i__7242_9047 + (1));
seq__7238_9044 = G__9049;
chunk__7240_9045 = G__9050;
count__7241_9046 = G__9051;
i__7242_9047 = G__9052;
continue;
} else {
var temp__5823__auto___9053 = cljs.core.seq(seq__7238_9044);
if(temp__5823__auto___9053){
var seq__7238_9054__$1 = temp__5823__auto___9053;
if(cljs.core.chunked_seq_QMARK_(seq__7238_9054__$1)){
var c__5673__auto___9059 = cljs.core.chunk_first(seq__7238_9054__$1);
var G__9060 = cljs.core.chunk_rest(seq__7238_9054__$1);
var G__9061 = c__5673__auto___9059;
var G__9062 = cljs.core.count(c__5673__auto___9059);
var G__9063 = (0);
seq__7238_9044 = G__9060;
chunk__7240_9045 = G__9061;
count__7241_9046 = G__9062;
i__7242_9047 = G__9063;
continue;
} else {
var stmt_9064 = cljs.core.first(seq__7238_9054__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(rescue_ctx_9038,stmt_9064);


var G__9069 = cljs.core.next(seq__7238_9054__$1);
var G__9070 = null;
var G__9071 = (0);
var G__9072 = (0);
seq__7238_9044 = G__9069;
chunk__7240_9045 = G__9070;
count__7241_9046 = G__9071;
i__7242_9047 = G__9072;
continue;
}
} else {
}
}
break;
}

throw e_9033;
}catch (e7237){var re_9073 = e7237;
if((((re_9073 instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nex-retry","nex-retry",-1632321813),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(re_9073)))))){
cljs.core.reset_BANG_(should_retry,true);
} else {
throw re_9073;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),(function (ctx,p__7255){
var map__7256 = p__7255;
var map__7256__$1 = cljs.core.__destructure_map(map__7256);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7256__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7256__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scoped-block","scoped-block",-513827734),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"rescue","rescue",1135767523),rescue], null));

var new_env = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var new_ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),new_env);
if(cljs.core.truth_(rescue)){
return nex.interpreter.eval_body_with_rescue(new_ctx,body,rescue);
} else {
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7254_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,p1__7254_SHARP_);
}),body));
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"when","when",-576417306),(function (ctx,p__7261){
var map__7262 = p__7261;
var map__7262__$1 = cljs.core.__destructure_map(map__7262);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7262__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var consequent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7262__$1,new cljs.core.Keyword(null,"consequent","consequent",234514643));
var alternative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7262__$1,new cljs.core.Keyword(null,"alternative","alternative",51666308));
if(cljs.core.truth_(nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,consequent);
} else {
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,alternative);
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"convert","convert",912478626),(function (ctx,p__7263){
var map__7264 = p__7263;
var map__7264__$1 = cljs.core.__destructure_map(map__7264);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7264__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (ctx,p__7273){
var map__7274 = p__7273;
var map__7274__$1 = cljs.core.__destructure_map(map__7274);
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7274__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7274__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7274__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7274__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"condition","condition",1668437652),condition,new cljs.core.Keyword(null,"then","then",460598070),then,new cljs.core.Keyword(null,"elseif","elseif",551759784),elseif,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var cond_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,condition);
if(cljs.core.truth_(cond_val)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7270_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7270_SHARP_);
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
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7271_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7271_SHARP_);
}),new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(matched)));
} else {
if(cljs.core.truth_(else$)){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7272_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7272_SHARP_);
}),else$));
} else {
return null;
}
}
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (ctx,p__7278){
var map__7279 = p__7278;
var map__7279__$1 = cljs.core.__destructure_map(map__7279);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7279__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7279__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7279__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses,new cljs.core.Keyword(null,"else","else",-1508377146),else$], null));

var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
var matched = (function (){var cs = clauses;
while(true){
if(cljs.core.empty_QMARK_(cs)){
return new cljs.core.Keyword("nex.interpreter","no-match","nex.interpreter/no-match",-1844668050);
} else {
var map__7282 = cljs.core.first(cs);
var map__7282__$1 = cljs.core.__destructure_map(map__7282);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7282__$1,new cljs.core.Keyword(null,"values","values",372645556));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7282__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(cljs.core.some(((function (cs,map__7282,map__7282__$1,values,body,val,map__7279,map__7279__$1,expr,clauses,else$){
return (function (p1__7277_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7277_SHARP_));
});})(cs,map__7282,map__7282__$1,values,body,val,map__7279,map__7279__$1,expr,clauses,else$))
,values))){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,body);
} else {
var G__9150 = cljs.core.rest(cs);
cs = G__9150;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ctx,p__7290){
var map__7292 = p__7290;
var map__7292__$1 = cljs.core.__destructure_map(map__7292);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7292__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7292__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7292__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7292__$1,new cljs.core.Keyword(null,"until","until",-1189166390));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7292__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.interpreter.maybe_debug_pause(ctx,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"init","init",-1875481434),init,new cljs.core.Keyword(null,"invariant","invariant",-1658446508),invariant,new cljs.core.Keyword(null,"variant","variant",-424354234),variant,new cljs.core.Keyword(null,"until","until",-1189166390),until,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

var seq__7297_9151 = cljs.core.seq(init);
var chunk__7298_9152 = null;
var count__7299_9153 = (0);
var i__7300_9154 = (0);
while(true){
if((i__7300_9154 < count__7299_9153)){
var stmt_9155 = chunk__7298_9152.cljs$core$IIndexed$_nth$arity$2(null,i__7300_9154);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9155);


var G__9156 = seq__7297_9151;
var G__9157 = chunk__7298_9152;
var G__9158 = count__7299_9153;
var G__9159 = (i__7300_9154 + (1));
seq__7297_9151 = G__9156;
chunk__7298_9152 = G__9157;
count__7299_9153 = G__9158;
i__7300_9154 = G__9159;
continue;
} else {
var temp__5823__auto___9161 = cljs.core.seq(seq__7297_9151);
if(temp__5823__auto___9161){
var seq__7297_9162__$1 = temp__5823__auto___9161;
if(cljs.core.chunked_seq_QMARK_(seq__7297_9162__$1)){
var c__5673__auto___9163 = cljs.core.chunk_first(seq__7297_9162__$1);
var G__9164 = cljs.core.chunk_rest(seq__7297_9162__$1);
var G__9165 = c__5673__auto___9163;
var G__9166 = cljs.core.count(c__5673__auto___9163);
var G__9167 = (0);
seq__7297_9151 = G__9164;
chunk__7298_9152 = G__9165;
count__7299_9153 = G__9166;
i__7300_9154 = G__9167;
continue;
} else {
var stmt_9168 = cljs.core.first(seq__7297_9162__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt_9168);


var G__9169 = cljs.core.next(seq__7297_9162__$1);
var G__9170 = null;
var G__9171 = (0);
var G__9172 = (0);
seq__7297_9151 = G__9169;
chunk__7298_9152 = G__9170;
count__7299_9153 = G__9171;
i__7300_9154 = G__9172;
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
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__7292,map__7292__$1,init,invariant,variant,until,body){
return (function (p1__7288_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(body_ctx,p1__7288_SHARP_);
});})(last_result,prev_variant,iteration,curr_variant,_,body_env,body_ctx,until_val,map__7292,map__7292__$1,init,invariant,variant,until,body))
,body));
if(cljs.core.truth_(invariant)){
nex.interpreter.check_assertions(ctx,invariant,nex.interpreter.Loop_invariant);
} else {
}

var G__9177 = result;
var G__9178 = curr_variant;
var G__9179 = (iteration + (1));
last_result = G__9177;
prev_variant = G__9178;
iteration = G__9179;
continue;
}
break;
}
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"statement","statement",-32780863),(function (ctx,node){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,node);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binary","binary",-1802232288),(function (ctx,p__7309){
var map__7310 = p__7309;
var map__7310__$1 = cljs.core.__destructure_map(map__7310);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7310__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,left);
var right_val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,right);
return nex.interpreter.apply_binary_op(operator,left_val,right_val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unary","unary",-989314568),(function (ctx,p__7311){
var map__7312 = p__7311;
var map__7312__$1 = cljs.core.__destructure_map(map__7312);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7312__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7312__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var val = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,expr);
return nex.interpreter.apply_unary_op(operator,val);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"integer","integer",-604721710),(function (_ctx,p__7313){
var map__7314 = p__7313;
var map__7314__$1 = cljs.core.__destructure_map(map__7314);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7314__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"real","real",388296937),(function (_ctx,p__7315){
var map__7316 = p__7315;
var map__7316__$1 = cljs.core.__destructure_map(map__7316);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7316__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_ctx,p__7321){
var map__7322 = p__7321;
var map__7322__$1 = cljs.core.__destructure_map(map__7322);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7322__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"char","char",-641587586),(function (_ctx,p__7323){
var map__7324 = p__7323;
var map__7324__$1 = cljs.core.__destructure_map(map__7324);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7324__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_ctx,p__7325){
var map__7326 = p__7325;
var map__7326__$1 = cljs.core.__destructure_map(map__7326);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7326__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_ctx,_node){
return null;
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"array-literal","array-literal",-754956485),(function (ctx,p__7328){
var map__7329 = p__7328;
var map__7329__$1 = cljs.core.__destructure_map(map__7329);
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7329__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
return nex.interpreter.nex_array_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7327_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7327_SHARP_);
}),elements));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-literal","map-literal",-504455832),(function (ctx,p__7334){
var map__7335 = p__7334;
var map__7335__$1 = cljs.core.__destructure_map(map__7335);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return nex.interpreter.nex_map_from(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__7336){
var map__7337 = p__7336;
var map__7337__$1 = cljs.core.__destructure_map(map__7337);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7337__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,key),nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,value)], null);
}),entries));
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"subscript","subscript",-1484665872),(function (ctx,p__7338){
var map__7339 = p__7338;
var map__7339__$1 = cljs.core.__destructure_map(map__7339);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339__$1,new cljs.core.Keyword(null,"target","target",253001721));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7339__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var coll = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,target);
var idx = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,index);
return nex.interpreter.nex_coll_get(coll,idx);
}));
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),(function (ctx,p__7343){
var map__7345 = p__7343;
var map__7345__$1 = cljs.core.__destructure_map(map__7345);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7345__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var val = (function (){try{return nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),name);
}catch (e7346){var _ = e7346;
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
var G__7348 = ctx;
var G__7350 = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(parent_info);
return (nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2 ? nex.interpreter.get_all_fields.cljs$core$IFn$_invoke$arity$2(G__7348,G__7350) : nex.interpreter.get_all_fields.call(null,G__7348,G__7350));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parents], 0));
} else {
return null;
}
})();
var current_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7347_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7347_SHARP_),new cljs.core.Keyword(null,"field","field",-1302436500));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7354_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__7354_SHARP_),constructor_name);
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
return cljs.core.some((function (p__7355){
var map__7356 = p__7355;
var map__7356__$1 = cljs.core.__destructure_map(map__7356);
var class_def__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7356__$1,new cljs.core.Keyword(null,"class-def","class-def",-524108044));
return (nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3 ? nex.interpreter.lookup_constructor_with_inheritance.cljs$core$IFn$_invoke$arity$3(ctx,class_def__$1,constructor_name) : nex.interpreter.lookup_constructor_with_inheritance.call(null,ctx,class_def__$1,constructor_name));
}),nex.interpreter.get_parent_classes(ctx,class_def));
}
});
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create","create",-1301499256),(function (ctx,p__7371){
var map__7372 = p__7371;
var map__7372__$1 = cljs.core.__destructure_map(map__7372);
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7372__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7372__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7372__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7372__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var G__7373 = class_name;
switch (G__7373) {
case "Console":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Console","Console",-423236809)], null);

break;
case "File":
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7361_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7361_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7362_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7362_SHARP_);
}),args);
var G__7374 = constructor$;
switch (G__7374) {
case "with_title":
var G__7375 = cljs.core.count(arg_values);
switch (G__7375) {
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
var G__7380 = cljs.core.count(arg_values);
switch (G__7380) {
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7363_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7363_SHARP_);
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7364_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7364_SHARP_);
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
var ___$1 = (function (){var seq__7384 = cljs.core.seq(initial_field_map);
var chunk__7385 = null;
var count__7386 = (0);
var i__7387 = (0);
while(true){
if((i__7387 < count__7386)){
var vec__7394 = chunk__7385.cljs$core$IIndexed$_nth$arity$2(null,i__7387);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7394,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7394,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__9373 = seq__7384;
var G__9374 = chunk__7385;
var G__9375 = count__7386;
var G__9376 = (i__7387 + (1));
seq__7384 = G__9373;
chunk__7385 = G__9374;
count__7386 = G__9375;
i__7387 = G__9376;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7384);
if(temp__5823__auto__){
var seq__7384__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7384__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7384__$1);
var G__9384 = cljs.core.chunk_rest(seq__7384__$1);
var G__9385 = c__5673__auto__;
var G__9386 = cljs.core.count(c__5673__auto__);
var G__9387 = (0);
seq__7384 = G__9384;
chunk__7385 = G__9385;
count__7386 = G__9386;
i__7387 = G__9387;
continue;
} else {
var vec__7402 = cljs.core.first(seq__7384__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7402,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7402,(1),null);
nex.interpreter.env_define(ctor_env,cljs.core.name(field_name),field_val);


var G__9393 = cljs.core.next(seq__7384__$1);
var G__9394 = null;
var G__9395 = (0);
var G__9396 = (0);
seq__7384 = G__9393;
chunk__7385 = G__9394;
count__7386 = G__9395;
i__7387 = G__9396;
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
var arg_values = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__7365_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__7365_SHARP_);
}),args);
var ___$2 = (cljs.core.truth_(params)?(function (){var seq__7405 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,params,arg_values));
var chunk__7406 = null;
var count__7407 = (0);
var i__7408 = (0);
while(true){
if((i__7408 < count__7407)){
var vec__7416 = chunk__7406.cljs$core$IIndexed$_nth$arity$2(null,i__7408);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7416,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7416,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__9407 = seq__7405;
var G__9408 = chunk__7406;
var G__9409 = count__7407;
var G__9410 = (i__7408 + (1));
seq__7405 = G__9407;
chunk__7406 = G__9408;
count__7407 = G__9409;
i__7408 = G__9410;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7405);
if(temp__5823__auto__){
var seq__7405__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7405__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7405__$1);
var G__9417 = cljs.core.chunk_rest(seq__7405__$1);
var G__9418 = c__5673__auto__;
var G__9419 = cljs.core.count(c__5673__auto__);
var G__9420 = (0);
seq__7405 = G__9417;
chunk__7406 = G__9418;
count__7407 = G__9419;
i__7408 = G__9420;
continue;
} else {
var vec__7420 = cljs.core.first(seq__7405__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7420,(0),null);
var arg_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7420,(1),null);
nex.interpreter.env_define(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg_val);


var G__9428 = cljs.core.next(seq__7405__$1);
var G__9429 = null;
var G__9430 = (0);
var G__9431 = (0);
seq__7405 = G__9428;
chunk__7406 = G__9429;
count__7407 = G__9430;
i__7408 = G__9431;
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
var seq__7424 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(ctor_def));
var chunk__7425 = null;
var count__7426 = (0);
var i__7427 = (0);
while(true){
if((i__7427 < count__7426)){
var stmt = chunk__7425.cljs$core$IIndexed$_nth$arity$2(null,i__7427);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__9457 = seq__7424;
var G__9458 = chunk__7425;
var G__9459 = count__7426;
var G__9460 = (i__7427 + (1));
seq__7424 = G__9457;
chunk__7425 = G__9458;
count__7426 = G__9459;
i__7427 = G__9460;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7424);
if(temp__5823__auto__){
var seq__7424__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7424__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7424__$1);
var G__9466 = cljs.core.chunk_rest(seq__7424__$1);
var G__9467 = c__5673__auto__;
var G__9468 = cljs.core.count(c__5673__auto__);
var G__9469 = (0);
seq__7424 = G__9466;
chunk__7425 = G__9467;
count__7426 = G__9468;
i__7427 = G__9469;
continue;
} else {
var stmt = cljs.core.first(seq__7424__$1);
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(new_ctx,stmt);


var G__9472 = cljs.core.next(seq__7424__$1);
var G__9473 = null;
var G__9474 = (0);
var G__9475 = (0);
seq__7424 = G__9472;
chunk__7425 = G__9473;
count__7426 = G__9474;
i__7427 = G__9475;
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
}catch (e7428){var ___$5 = e7428;
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
var inv_env_9497 = nex.interpreter.make_env.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx));
var __9498__$1 = (function (){var seq__7429 = cljs.core.seq(final_field_map);
var chunk__7430 = null;
var count__7431 = (0);
var i__7432 = (0);
while(true){
if((i__7432 < count__7431)){
var vec__7443 = chunk__7430.cljs$core$IIndexed$_nth$arity$2(null,i__7432);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7443,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7443,(1),null);
nex.interpreter.env_define(inv_env_9497,cljs.core.name(field_name),field_val);


var G__9506 = seq__7429;
var G__9507 = chunk__7430;
var G__9508 = count__7431;
var G__9509 = (i__7432 + (1));
seq__7429 = G__9506;
chunk__7430 = G__9507;
count__7431 = G__9508;
i__7432 = G__9509;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7429);
if(temp__5823__auto__){
var seq__7429__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7429__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7429__$1);
var G__9515 = cljs.core.chunk_rest(seq__7429__$1);
var G__9516 = c__5673__auto__;
var G__9517 = cljs.core.count(c__5673__auto__);
var G__9518 = (0);
seq__7429 = G__9515;
chunk__7430 = G__9516;
count__7431 = G__9517;
i__7432 = G__9518;
continue;
} else {
var vec__7446 = cljs.core.first(seq__7429__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7446,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7446,(1),null);
nex.interpreter.env_define(inv_env_9497,cljs.core.name(field_name),field_val);


var G__9526 = cljs.core.next(seq__7429__$1);
var G__9527 = null;
var G__9528 = (0);
var G__9529 = (0);
seq__7429 = G__9526;
chunk__7430 = G__9527;
count__7431 = G__9528;
i__7432 = G__9529;
continue;
}
} else {
return null;
}
}
break;
}
})();
var inv_ctx_9499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"current-env","current-env",-1321489691),inv_env_9497);
nex.interpreter.check_class_invariant(inv_ctx_9499,class_def);

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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"old","old",-1825222690),(function (ctx,p__7456){
var map__7457 = p__7456;
var map__7457__$1 = cljs.core.__destructure_map(map__7457);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7457__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var _ = (function (){var seq__7461 = cljs.core.seq(old_values);
var chunk__7462 = null;
var count__7463 = (0);
var i__7464 = (0);
while(true){
if((i__7464 < count__7463)){
var vec__7481 = chunk__7462.cljs$core$IIndexed$_nth$arity$2(null,i__7464);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7481,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7481,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__9564 = seq__7461;
var G__9565 = chunk__7462;
var G__9566 = count__7463;
var G__9567 = (i__7464 + (1));
seq__7461 = G__9564;
chunk__7462 = G__9565;
count__7463 = G__9566;
i__7464 = G__9567;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7461);
if(temp__5823__auto__){
var seq__7461__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7461__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7461__$1);
var G__9572 = cljs.core.chunk_rest(seq__7461__$1);
var G__9573 = c__5673__auto__;
var G__9574 = cljs.core.count(c__5673__auto__);
var G__9575 = (0);
seq__7461 = G__9572;
chunk__7462 = G__9573;
count__7463 = G__9574;
i__7464 = G__9575;
continue;
} else {
var vec__7490 = cljs.core.first(seq__7461__$1);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7490,(0),null);
var field_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7490,(1),null);
nex.interpreter.env_define(old_env,cljs.core.name(field_name),field_val);


var G__9584 = cljs.core.next(seq__7461__$1);
var G__9585 = null;
var G__9586 = (0);
var G__9587 = (0);
seq__7461 = G__9584;
chunk__7462 = G__9585;
count__7463 = G__9586;
i__7464 = G__9587;
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
nex.interpreter.eval_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with","with",-1536296876),(function (ctx,p__7496){
var map__7497 = p__7496;
var map__7497__$1 = cljs.core.__destructure_map(map__7497);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7497__$1,new cljs.core.Keyword(null,"target","target",253001721));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7497__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
var seq__7514_9612 = cljs.core.seq(output);
var chunk__7515_9613 = null;
var count__7516_9614 = (0);
var i__7517_9615 = (0);
while(true){
if((i__7517_9615 < count__7516_9614)){
var line_9618 = chunk__7515_9613.cljs$core$IIndexed$_nth$arity$2(null,i__7517_9615);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_9618], 0));


var G__9625 = seq__7514_9612;
var G__9626 = chunk__7515_9613;
var G__9627 = count__7516_9614;
var G__9628 = (i__7517_9615 + (1));
seq__7514_9612 = G__9625;
chunk__7515_9613 = G__9626;
count__7516_9614 = G__9627;
i__7517_9615 = G__9628;
continue;
} else {
var temp__5823__auto___9630 = cljs.core.seq(seq__7514_9612);
if(temp__5823__auto___9630){
var seq__7514_9631__$1 = temp__5823__auto___9630;
if(cljs.core.chunked_seq_QMARK_(seq__7514_9631__$1)){
var c__5673__auto___9632 = cljs.core.chunk_first(seq__7514_9631__$1);
var G__9633 = cljs.core.chunk_rest(seq__7514_9631__$1);
var G__9634 = c__5673__auto___9632;
var G__9635 = cljs.core.count(c__5673__auto___9632);
var G__9636 = (0);
seq__7514_9612 = G__9633;
chunk__7515_9613 = G__9634;
count__7516_9614 = G__9635;
i__7517_9615 = G__9636;
continue;
} else {
var line_9641 = cljs.core.first(seq__7514_9631__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([line_9641], 0));


var G__9642 = cljs.core.next(seq__7514_9631__$1);
var G__9643 = null;
var G__9644 = (0);
var G__9645 = (0);
seq__7514_9612 = G__9642;
chunk__7515_9613 = G__9643;
count__7516_9614 = G__9644;
i__7517_9615 = G__9645;
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
