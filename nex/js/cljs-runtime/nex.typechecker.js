goog.provide('nex.typechecker');
/**
 * Create a new type environment
 */
nex.typechecker.make_type_env = (function nex$typechecker$make_type_env(var_args){
var G__6194 = arguments.length;
switch (G__6194) {
case 0:
return nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(null);
}));

(nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"non-nil-vars","non-nil-vars",-2140661775),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
}));

(nex.typechecker.make_type_env.cljs$lang$maxFixedArity = 1);

/**
 * Look up a variable type in the environment
 */
nex.typechecker.env_lookup_var = (function nex$typechecker$env_lookup_var(env,name){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(env)),name);
if(cljs.core.truth_(temp__5821__auto__)){
var type = temp__5821__auto__;
return type;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env))){
var G__6210 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6211 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6210,G__6211) : nex.typechecker.env_lookup_var.call(null,G__6210,G__6211));
} else {
return null;
}
}
});
/**
 * Add a variable to the environment
 */
nex.typechecker.env_add_var = (function nex$typechecker$env_add_var(env,name,type){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,name,type);
});
/**
 * Look up a method signature in the environment
 */
nex.typechecker.env_lookup_method = (function nex$typechecker$env_lookup_method(env,class_name,method_name){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(env)),class_name);
if(cljs.core.truth_(temp__5821__auto__)){
var class_methods = temp__5821__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_methods,method_name);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env))){
var G__6215 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6216 = class_name;
var G__6217 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6215,G__6216,G__6217) : nex.typechecker.env_lookup_method.call(null,G__6215,G__6216,G__6217));
} else {
return null;
}
}
});
/**
 * Add a method signature to the environment
 */
nex.typechecker.env_add_method = (function nex$typechecker$env_add_method(env,class_name,method_name,signature){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(env),cljs.core.update,class_name,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([method_name,signature], 0));
});
/**
 * Look up a class definition in the environment
 */
nex.typechecker.env_lookup_class = (function nex$typechecker$env_lookup_class(env,class_name){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(env)),class_name);
if(cljs.core.truth_(temp__5821__auto__)){
var class_def = temp__5821__auto__;
return class_def;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env))){
var G__6227 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6228 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6227,G__6228) : nex.typechecker.env_lookup_class.call(null,G__6227,G__6228));
} else {
return null;
}
}
});
/**
 * Add a class definition to the environment
 */
nex.typechecker.env_add_class = (function nex$typechecker$env_add_class(env,class_name,class_def){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,class_name,class_def);
});
/**
 * Mark a variable as proven non-nil in this environment scope.
 */
nex.typechecker.env_mark_non_nil = (function nex$typechecker$env_mark_non_nil(env,var_name){
var temp__5823__auto__ = new cljs.core.Keyword(null,"non-nil-vars","non-nil-vars",-2140661775).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5823__auto__)){
var nn = temp__5823__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nn,cljs.core.conj,var_name);
} else {
return null;
}
});
/**
 * Check whether a variable is proven non-nil in this env chain.
 */
nex.typechecker.env_var_non_nil_QMARK_ = (function nex$typechecker$env_var_non_nil_QMARK_(env,var_name){
var or__5142__auto__ = (function (){var and__5140__auto__ = new cljs.core.Keyword(null,"non-nil-vars","non-nil-vars",-2140661775).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"non-nil-vars","non-nil-vars",-2140661775).cljs$core$IFn$_invoke$arity$1(env)),var_name);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env))){
var G__6245 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6246 = var_name;
return (nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2(G__6245,G__6246) : nex.typechecker.env_var_non_nil_QMARK_.call(null,G__6245,G__6246));
} else {
return null;
}
}
});
nex.typechecker.builtin_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, ["Nil",null,"Void",null,"Turtle",null,"Char",null,"Map",null,"File",null,"Console",null,"Real",null,"Decimal",null,"Any",null,"Integer64",null,"Integer",null,"String",null,"Window",null,"Cursor",null,"Process",null,"Function",null,"Image",null,"Array",null,"Boolean",null], null), null);
nex.typechecker.builtin_type_QMARK_ = (function nex$typechecker$builtin_type_QMARK_(type_name){
return cljs.core.contains_QMARK_(nex.typechecker.builtin_types,type_name);
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
nex.typechecker.TypeError = (function (message,line,column,__meta,__extmap,__hash){
this.message = message;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(nex.typechecker.TypeError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(nex.typechecker.TypeError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6254,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6260 = k6254;
var G__6260__$1 = (((G__6260 instanceof cljs.core.Keyword))?G__6260.fqn:null);
switch (G__6260__$1) {
case "message":
return self__.message;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6254,else__5451__auto__);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6265){
var vec__6266 = p__6265;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6266,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(nex.typechecker.TypeError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#nex.typechecker.TypeError{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null))], null),self__.__extmap));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6253){
var self__ = this;
var G__6253__$1 = this;
return (new cljs.core.RecordIter((0),G__6253__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(nex.typechecker.TypeError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
}));

(nex.typechecker.TypeError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (771051077 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6255,other6256){
var self__ = this;
var this6255__$1 = this;
return (((!((other6256 == null)))) && ((((this6255__$1.constructor === other6256.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6255__$1.message,other6256.message)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6255__$1.line,other6256.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6255__$1.column,other6256.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6255__$1.__extmap,other6256.__extmap)))))))))));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6254){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6303 = k6254;
var G__6303__$1 = (((G__6303 instanceof cljs.core.Keyword))?G__6303.fqn:null);
switch (G__6303__$1) {
case "message":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6254);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6253){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6307 = cljs.core.keyword_identical_QMARK_;
var expr__6308 = k__5457__auto__;
if(cljs.core.truth_((pred__6307.cljs$core$IFn$_invoke$arity$2 ? pred__6307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__6308) : pred__6307.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__6308)))){
return (new nex.typechecker.TypeError(G__6253,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6307.cljs$core$IFn$_invoke$arity$2 ? pred__6307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__6308) : pred__6307.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__6308)))){
return (new nex.typechecker.TypeError(self__.message,G__6253,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6307.cljs$core$IFn$_invoke$arity$2 ? pred__6307.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__6308) : pred__6307.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__6308)))){
return (new nex.typechecker.TypeError(self__.message,self__.line,G__6253,self__.__meta,self__.__extmap,null));
} else {
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6253),null));
}
}
}
}));

(nex.typechecker.TypeError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6253){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,G__6253,self__.__extmap,self__.__hash));
}));

(nex.typechecker.TypeError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(nex.typechecker.TypeError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"column","column",-576213674,null)], null);
}));

(nex.typechecker.TypeError.cljs$lang$type = true);

(nex.typechecker.TypeError.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"nex.typechecker/TypeError",null,(1),null));
}));

(nex.typechecker.TypeError.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"nex.typechecker/TypeError");
}));

/**
 * Positional factory function for nex.typechecker/TypeError.
 */
nex.typechecker.__GT_TypeError = (function nex$typechecker$__GT_TypeError(message,line,column){
return (new nex.typechecker.TypeError(message,line,column,null,null,null));
});

/**
 * Factory function for nex.typechecker/TypeError, taking a map of keywords to field values.
 */
nex.typechecker.map__GT_TypeError = (function nex$typechecker$map__GT_TypeError(G__6259){
var extmap__5490__auto__ = (function (){var G__6331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6259,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6259)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6331);
} else {
return G__6331;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6259),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6259),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6259),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6346 = arguments.length;
switch (G__6346) {
case 1:
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$3(msg,null,null);
}));

(nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$2 = (function (msg,line){
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$3(msg,line,null);
}));

(nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$3 = (function (msg,line,column){
return nex.typechecker.__GT_TypeError(msg,line,column);
}));

(nex.typechecker.type_error.cljs$lang$maxFixedArity = 3);

/**
 * Format a type error for display
 */
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6358){
var map__6359 = p__6358;
var map__6359__$1 = cljs.core.__destructure_map(map__6359);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6359__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(line)){
return (""+"Type error at line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+", column "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):null))+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
} else {
return (""+"Type error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
}
});
/**
 * Format a type value for human-readable display.
 */
nex.typechecker.display_type = (function nex$typechecker$display_type(type_val){
if(typeof type_val === 'string'){
return type_val;
} else {
if(cljs.core.map_QMARK_(type_val)){
var base = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_val);
var params = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(type_val);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(type_val);
}
})();
var core = ((cljs.core.seq(params))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.typechecker.display_type,params)))+"]"):base);
if(cljs.core.truth_(new cljs.core.Keyword(null,"detachable","detachable",715380987).cljs$core$IFn$_invoke$arity$1(type_val))){
return (""+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(core));
} else {
return core;
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_val));

}
}
});
/**
 * Normalize a type expression to a string or map.
 * Canonicalizes :type-args to :type-params so that inferred types
 * (which use :type-params) and declared types (which use :type-args)
 * can be compared with simple equality.
 */
nex.typechecker.normalize_type = (function nex$typechecker$normalize_type(type_expr){
if(typeof type_expr === 'string'){
return type_expr;
} else {
if(cljs.core.map_QMARK_(type_expr)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr))){
var params = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(type_expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(type_expr);
}
})();
var detachable_QMARK_ = new cljs.core.Keyword(null,"detachable","detachable",715380987).cljs$core$IFn$_invoke$arity$1(type_expr) === true;
var G__6380 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6380__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6380,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6380);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6380__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6380__$1;
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_expr));
}
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_expr));

}
}
});
/**
 * Check whether a normalized type is detachable.
 */
nex.typechecker.detachable_type_QMARK_ = (function nex$typechecker$detachable_type_QMARK_(t){
return ((cljs.core.map_QMARK_(t)) && (new cljs.core.Keyword(null,"detachable","detachable",715380987).cljs$core$IFn$_invoke$arity$1(t) === true));
});
/**
 * Return type with detachable marker removed (normalized).
 */
nex.typechecker.attachable_type = (function nex$typechecker$attachable_type(t){
var n = nex.typechecker.normalize_type(t);
if(cljs.core.map_QMARK_(n)){
var G__6400 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6400,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6395_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6395_SHARP_);
}));
} else {
return G__6400;
}
} else {
return n;
}
});
/**
 * Whether type is a reference-like (potentially detachable) object type.
 */
nex.typechecker.reference_like_type_QMARK_ = (function nex$typechecker$reference_like_type_QMARK_(t){
var n = nex.typechecker.attachable_type(t);
var base = ((typeof n === 'string')?n:((cljs.core.map_QMARK_(n))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(n):null
));
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6409.cljs$core$IFn$_invoke$arity$1 ? fexpr__6409.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6409.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6411 = arguments.length;
switch (G__6411) {
case 1:
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (type){
var t = nex.typechecker.normalize_type(type);
var and__5140__auto__ = typeof t === 'string';
if(and__5140__auto__){
return cljs.core.re_matches(/[A-Z]/,t);
} else {
return and__5140__auto__;
}
}));

(nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (env,type){
var t = nex.typechecker.normalize_type(type);
var and__5140__auto__ = typeof t === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.re_matches(/[A-Z]/,t);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core.not(nex.typechecker.env_lookup_class(env,t))) && ((!(nex.typechecker.builtin_type_QMARK_(t)))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}));

(nex.typechecker.is_generic_type_param_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Check if two types are equal
 */
nex.typechecker.types_equal_QMARK_ = (function nex$typechecker$types_equal_QMARK_(var_args){
var G__6429 = arguments.length;
switch (G__6429) {
case 2:
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (type1,type2){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(null,type1,type2);
}));

(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (env,type1,type2){
var t1 = nex.typechecker.normalize_type(type1);
var t2 = nex.typechecker.normalize_type(type2);
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,t2);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Any")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,"Any")));
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Integer")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Integer64")))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,"Integer")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,"Integer64")))));
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Real")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Decimal")))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,"Real")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,"Decimal")))));
if(or__5142__auto____$3){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = (function (){var or__5142__auto____$4 = (function (){var and__5140__auto__ = env;
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,t1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
var or__5142__auto____$5 = (function (){var and__5140__auto__ = env;
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,t2);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$5)){
return or__5142__auto____$5;
} else {
var or__5142__auto____$6 = (function (){var and__5140__auto__ = (env == null);
if(and__5140__auto__){
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$1(t1);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$6)){
return or__5142__auto____$6;
} else {
var and__5140__auto__ = (env == null);
if(and__5140__auto__){
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$1(t2);
} else {
return and__5140__auto__;
}
}
}
}
})();
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return ((((cljs.core.map_QMARK_(t1)) && (((cljs.core.map_QMARK_(t2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t1),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(t1),new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(t2))))))))) || (((((typeof t1 === 'string') && (((cljs.core.map_QMARK_(t2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t2))))))) || (((cljs.core.map_QMARK_(t1)) && (((typeof t2 === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t1),t2)))))))));
}
}
}
}
}
}));

(nex.typechecker.types_equal_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Check if sub is the same as or a subclass of super.
 */
nex.typechecker.class_subtype_QMARK_ = (function nex$typechecker$class_subtype_QMARK_(env,sub,super$){
var sub__$1 = nex.typechecker.normalize_type(sub);
var super$__$1 = nex.typechecker.normalize_type(super$);
if((((sub__$1 == null)) || ((super$__$1 == null)))){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub__$1,super$__$1)){
return true;
} else {
if((!(((typeof sub__$1 === 'string') && (typeof super$__$1 === 'string'))))){
return false;
} else {
var sub_QMARK_ = (function nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(current,seen){
if(cljs.core.contains_QMARK_(seen,current)){
return false;
} else {
var temp__5821__auto__ = nex.typechecker.env_lookup_class(env,current);
if(cljs.core.truth_(temp__5821__auto__)){
var class_def = temp__5821__auto__;
var parents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def));
var seen__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,current);
var or__5142__auto__ = cljs.core.some((function (p1__6461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6461_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6462_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6462_SHARP_,seen__$1);
}),parents);
}
} else {
return false;
}
}
});
return sub_QMARK_(sub__$1,cljs.core.PersistentHashSet.EMPTY);

}
}
}
});
/**
 * Check if two types are compatible (including inheritance).
 */
nex.typechecker.types_compatible_QMARK_ = (function nex$typechecker$types_compatible_QMARK_(env,type1,type2){
var t1 = nex.typechecker.normalize_type(type1);
var t2 = nex.typechecker.normalize_type(type2);
var d1 = nex.typechecker.detachable_type_QMARK_(t1);
var d2 = nex.typechecker.detachable_type_QMARK_(t2);
var a1 = nex.typechecker.attachable_type(t1);
var a2 = nex.typechecker.attachable_type(t2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,"Nil")){
return ((d2) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a2,"Any")));
} else {
if(((d1) && ((!(d2))))){
return false;
} else {
var or__5142__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,a1,a2);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (function (){var and__5140__auto__ = typeof a1 === 'string';
if(and__5140__auto__){
var and__5140__auto____$1 = typeof a2 === 'string';
if(and__5140__auto____$1){
return nex.typechecker.class_subtype_QMARK_(env,a1,a2);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(a1);
if(and__5140__auto__){
var and__5140__auto____$1 = typeof a2 === 'string';
if(and__5140__auto____$1){
return nex.typechecker.class_subtype_QMARK_(env,new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a1),a2);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var and__5140__auto__ = cljs.core.map_QMARK_(a1);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.map_QMARK_(a2);
if(and__5140__auto____$1){
var and__5140__auto____$2 = nex.typechecker.class_subtype_QMARK_(env,new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a1),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a2));
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(a1),new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(a2));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
}
}

}
}
});
/**
 * Validate generic arguments against a class's generic constraints.
 */
nex.typechecker.validate_generic_args = (function nex$typechecker$validate_generic_args(env,class_name,generic_args){
if(cljs.core.seq(generic_args)){
var class_def = nex.typechecker.env_lookup_class(env,class_name);
if(cljs.core.truth_((function (){var and__5140__auto__ = class_def;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def);
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def)),cljs.core.count(generic_args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def)))+" type arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(generic_args))))], null));
} else {
}

var seq__6508 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6509 = null;
var count__6510 = (0);
var i__6511 = (0);
while(true){
if((i__6511 < count__6510)){
var vec__6529 = chunk__6509.cljs$core$IIndexed$_nth$arity$2(null,i__6511);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6529,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6529,(1),null);
var temp__5823__auto___7943 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7943)){
var constraint_7946 = temp__5823__auto___7943;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7946))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7946)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7946)))], null));
}
} else {
}


var G__7956 = seq__6508;
var G__7957 = chunk__6509;
var G__7958 = count__6510;
var G__7959 = (i__6511 + (1));
seq__6508 = G__7956;
chunk__6509 = G__7957;
count__6510 = G__7958;
i__6511 = G__7959;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6508);
if(temp__5823__auto__){
var seq__6508__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6508__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6508__$1);
var G__7965 = cljs.core.chunk_rest(seq__6508__$1);
var G__7966 = c__5673__auto__;
var G__7967 = cljs.core.count(c__5673__auto__);
var G__7968 = (0);
seq__6508 = G__7965;
chunk__6509 = G__7966;
count__6510 = G__7967;
i__6511 = G__7968;
continue;
} else {
var vec__6541 = cljs.core.first(seq__6508__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6541,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6541,(1),null);
var temp__5823__auto___7974__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7974__$1)){
var constraint_7976 = temp__5823__auto___7974__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7976))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7976)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7976)))], null));
}
} else {
}


var G__7984 = cljs.core.next(seq__6508__$1);
var G__7985 = null;
var G__7986 = (0);
var G__7987 = (0);
seq__6508 = G__7984;
chunk__6509 = G__7985;
count__6510 = G__7986;
i__6511 = G__7987;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Validate parameterized type annotations against generic constraints.
 */
nex.typechecker.validate_type_annotation = (function nex$typechecker$validate_type_annotation(env,type_expr){
var t = nex.typechecker.normalize_type(type_expr);
if(cljs.core.map_QMARK_(t)){
var base = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t);
var args = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(t);
}
})();
nex.typechecker.validate_generic_args(env,base,args);

var seq__6563 = cljs.core.seq(args);
var chunk__6564 = null;
var count__6565 = (0);
var i__6566 = (0);
while(true){
if((i__6566 < count__6565)){
var arg = chunk__6564.cljs$core$IIndexed$_nth$arity$2(null,i__6566);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__8003 = seq__6563;
var G__8004 = chunk__6564;
var G__8005 = count__6565;
var G__8006 = (i__6566 + (1));
seq__6563 = G__8003;
chunk__6564 = G__8004;
count__6565 = G__8005;
i__6566 = G__8006;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6563);
if(temp__5823__auto__){
var seq__6563__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6563__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6563__$1);
var G__8012 = cljs.core.chunk_rest(seq__6563__$1);
var G__8013 = c__5673__auto__;
var G__8014 = cljs.core.count(c__5673__auto__);
var G__8015 = (0);
seq__6563 = G__8012;
chunk__6564 = G__8013;
count__6565 = G__8014;
i__6566 = G__8015;
continue;
} else {
var arg = cljs.core.first(seq__6563__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__8020 = cljs.core.next(seq__6563__$1);
var G__8021 = null;
var G__8022 = (0);
var G__8023 = (0);
seq__6563 = G__8020;
chunk__6564 = G__8021;
count__6565 = G__8022;
i__6566 = G__8023;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Check if a type is numeric
 */
nex.typechecker.is_numeric_type_QMARK_ = (function nex$typechecker$is_numeric_type_QMARK_(type){
var t = nex.typechecker.normalize_type(type);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Integer")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Integer64")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Real")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Decimal")))))));
});
/**
 * Check if a type supports comparison operators
 */
nex.typechecker.is_comparable_type_QMARK_ = (function nex$typechecker$is_comparable_type_QMARK_(type){
var t = nex.typechecker.normalize_type(type);
return ((nex.typechecker.is_numeric_type_QMARK_(t)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"String")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Char")))));
});
/**
 * Check the type of a literal expression
 */
nex.typechecker.check_literal = (function nex$typechecker$check_literal(env,expr){
var G__6600 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6600__$1 = (((G__6600 instanceof cljs.core.Keyword))?G__6600.fqn:null);
switch (G__6600__$1) {
case "integer":
return "Integer";

break;
case "real":
return "Real";

break;
case "string":
return "String";

break;
case "char":
return "Char";

break;
case "boolean":
return "Boolean";

break;
case "nil":
return "Nil";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown literal type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));

}
});
/**
 * Look up a method on a class and its parent chain
 */
nex.typechecker.lookup_class_method = (function nex$typechecker$lookup_class_method(env,class_name,method_name){
var or__5142__auto__ = nex.typechecker.env_lookup_method(env,class_name,method_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var temp__5823__auto__ = nex.typechecker.env_lookup_class(env,class_name);
if(cljs.core.truth_(temp__5823__auto__)){
var class_def = temp__5823__auto__;
return cljs.core.some((function (p__6604){
var map__6605 = p__6604;
var map__6605__$1 = cljs.core.__destructure_map(map__6605);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6605__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
return (nex.typechecker.lookup_class_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.lookup_class_method.cljs$core$IFn$_invoke$arity$3(env,parent,method_name) : nex.typechecker.lookup_class_method.call(null,env,parent,method_name));
}),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def));
} else {
return null;
}
}
});
/**
 * Look up a field on a class and its parent chain.
 */
nex.typechecker.lookup_class_field = (function nex$typechecker$lookup_class_field(env,class_name,field_name){
var lookup_field = (function nex$typechecker$lookup_class_field_$_lookup_field(cn,visited){
if(cljs.core.truth_((function (){var and__5140__auto__ = cn;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(visited,cn)));
} else {
return and__5140__auto__;
}
})())){
var class_def = nex.typechecker.env_lookup_class(env,cn);
var visited_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,cn);
var own_field_type = (cljs.core.truth_(class_def)?cljs.core.some((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.some((function (member){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member),new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),field_name)))){
return new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member);
} else {
return null;
}
}),new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
} else {
return null;
}
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)):null);
var or__5142__auto__ = own_field_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(class_def)){
return cljs.core.some((function (p__6630){
var map__6631 = p__6630;
var map__6631__$1 = cljs.core.__destructure_map(map__6631);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6631__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
return nex$typechecker$lookup_class_field_$_lookup_field(parent,visited_SINGLEQUOTE_);
}),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def));
} else {
return null;
}
}
} else {
return null;
}
});
return lookup_field(class_name,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Collect constructors declared on a class and inherited parent chain.
 */
nex.typechecker.lookup_class_constructors = (function nex$typechecker$lookup_class_constructors(env,class_name){
var collect_ctors = (function nex$typechecker$lookup_class_constructors_$_collect_ctors(cn,visited){
if(cljs.core.contains_QMARK_(visited,cn)){
return cljs.core.PersistentVector.EMPTY;
} else {
var class_def = nex.typechecker.env_lookup_class(env,cn);
var visited_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,cn);
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6636_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6636_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6659){
var map__6660 = p__6659;
var map__6660__$1 = cljs.core.__destructure_map(map__6660);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6660__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
return nex$typechecker$lookup_class_constructors_$_collect_ctors(parent,visited_SINGLEQUOTE_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def)], 0)):cljs.core.PersistentVector.EMPTY);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(own,inherited);
}
});
return collect_ctors(class_name,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Check the type of an identifier
 */
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6667){
var map__6668 = p__6667;
var map__6668__$1 = cljs.core.__destructure_map(map__6668);
var expr = map__6668__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6668__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temp__5821__auto__ = nex.typechecker.env_lookup_var(env,name);
if(cljs.core.truth_(temp__5821__auto__)){
var var_type = temp__5821__auto__;
return var_type;
} else {
var temp__5821__auto____$1 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5821__auto____$1)){
var current_class = temp__5821__auto____$1;
var temp__5821__auto____$2 = nex.typechecker.lookup_class_method(env,current_class,name);
if(cljs.core.truth_(temp__5821__auto____$2)){
var method_sig = temp__5821__auto____$2;
var or__5142__auto__ = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Void";
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))], null));
}
}
});
/**
 * Check the type of a binary operation
 */
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6682){
var map__6686 = p__6682;
var map__6686__$1 = cljs.core.__destructure_map(map__6686);
var expr = map__6686__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6686__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6686__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6686__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,left) : nex.typechecker.check_expression.call(null,env,left));
var right_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,right) : nex.typechecker.check_expression.call(null,env,right));
var G__6688 = operator;
switch (G__6688) {
case "+":
case "-":
case "*":
case "/":
case "%":
case "^":
if(((nex.typechecker.is_numeric_type_QMARK_(left_type)) && (nex.typechecker.is_numeric_type_QMARK_(right_type)))){
return left_type;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));
}

break;
case "=":
case "/=":
if(cljs.core.truth_((function (){var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_type,"Nil");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right_type,"Nil");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = nex.typechecker.types_compatible_QMARK_(env,left_type,right_type);
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = nex.typechecker.types_compatible_QMARK_(env,right_type,left_type);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var or__5142__auto____$4 = nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,left_type);
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,right_type);
}
}
}
}
}
})())){
return "Boolean";
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_type)+" with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_type)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_type)+" with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_type)))], null));
}

break;
case "<":
case "<=":
case ">":
case ">=":
if(cljs.core.truth_((function (){var or__5142__auto__ = (function (){var and__5140__auto__ = nex.typechecker.is_comparable_type_QMARK_(left_type);
if(and__5140__auto__){
var and__5140__auto____$1 = nex.typechecker.is_comparable_type_QMARK_(right_type);
if(and__5140__auto____$1){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,left_type,right_type);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,left_type);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return nex.typechecker.is_generic_type_param_QMARK_.cljs$core$IFn$_invoke$arity$2(env,right_type);
}
}
})())){
return "Boolean";
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot compare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_type)+" with "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_type)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Comparison requires compatible types, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));
}

break;
case "and":
case "or":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_type,"Boolean")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right_type,"Boolean")))){
return "Boolean";
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires Boolean operands"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires Boolean operands, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Unknown operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)))], null));

}
});
/**
 * Check the type of a unary operation
 */
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6717){
var map__6718 = p__6717;
var map__6718__$1 = cljs.core.__destructure_map(map__6718);
var unary_expr = map__6718__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6718__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6718__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6718__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var operand_node = (function (){var or__5142__auto__ = operand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expr;
}
})();
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand_node) : nex.typechecker.check_expression.call(null,env,operand_node));
var G__6721 = operator;
switch (G__6721) {
case "-":
if(nex.typechecker.is_numeric_type_QMARK_(operand_type)){
return operand_type;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unary minus requires numeric operand",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Unary minus requires numeric operand, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operand_type)))], null));
}

break;
case "not":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operand_type,"Boolean")){
return "Boolean";
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not operator requires Boolean operand",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Not operator requires Boolean operand, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operand_type)))], null));
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown unary operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Unknown unary operator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)))], null));

}
});
/**
 * Substitute generic type parameters using a type-map.
 * E.g., with type-map {"T" "Integer"}, resolves "T" to "Integer".
 */
nex.typechecker.resolve_generic_type = (function nex$typechecker$resolve_generic_type(param_type,type_map){
if((type_map == null)){
return param_type;
} else {
if(typeof param_type === 'string'){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,param_type,param_type);
} else {
if(cljs.core.map_QMARK_(param_type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6731_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6731_SHARP_,p1__6731_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6732_SHARP_){
if(cljs.core.truth_(p1__6732_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6732_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6733_SHARP_){
if(cljs.core.truth_(p1__6733_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6733_SHARP_);
} else {
return null;
}
}));
} else {
return param_type;

}
}
}
});
/**
 * Build a type-map from a class's generic params and a parameterized target type.
 * E.g., class Box[T] with target-type Box[Integer] => {"T" "Integer"}.
 */
nex.typechecker.build_generic_type_map = (function nex$typechecker$build_generic_type_map(env,target_type){
if(cljs.core.map_QMARK_(target_type)){
var base_name = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(target_type);
var type_args = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(target_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(target_type);
}
})();
var class_def = nex.typechecker.env_lookup_class(env,base_name);
if(cljs.core.truth_((function (){var and__5140__auto__ = class_def;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def);
if(cljs.core.truth_(and__5140__auto____$1)){
return type_args;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (param,arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param),arg], null);
}),new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),type_args));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Whether an expression node is a nil literal.
 */
nex.typechecker.nil_literal_QMARK_ = (function nex$typechecker$nil_literal_QMARK_(expr){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr,"nil")) || (((cljs.core.map_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr))))));
});
/**
 * Extract identifier name from expression if it is a direct identifier.
 */
nex.typechecker.identifier_name = (function nex$typechecker$identifier_name(expr){
if(typeof expr === 'string'){
return expr;
} else {
if(((cljs.core.map_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr))))){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(expr);
} else {
return null;

}
}
});
/**
 * Extract variable name from condition of the form `x /= nil` or `nil /= x`.
 */
nex.typechecker.guarded_non_nil_var = (function nex$typechecker$guarded_non_nil_var(condition){
if(((cljs.core.map_QMARK_(condition)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binary","binary",-1802232288),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(condition))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/=",new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(condition))))))){
var left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(condition);
var right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(condition);
var left_id = nex.typechecker.identifier_name(left);
var right_id = nex.typechecker.identifier_name(right);
if(cljs.core.truth_((function (){var and__5140__auto__ = left_id;
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.nil_literal_QMARK_(right);
} else {
return and__5140__auto__;
}
})())){
return left_id;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = right_id;
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.nil_literal_QMARK_(left);
} else {
return and__5140__auto__;
}
})())){
return right_id;
} else {
return null;

}
}
} else {
return null;
}
});
/**
 * Extract convert-bound variable info from condition of form:
 * convert <expr> to <var>:<Type>
 */
nex.typechecker.convert_guard_binding = (function nex$typechecker$convert_guard_binding(condition){
if(((cljs.core.map_QMARK_(condition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"convert","convert",912478626),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(condition))))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(condition),new cljs.core.Keyword(null,"type","type",1174270348),nex.typechecker.attachable_type(new cljs.core.Keyword(null,"target-type","target-type",-1795727181).cljs$core$IFn$_invoke$arity$1(condition))], null);
} else {
return null;
}
});
/**
 * Return a detachable type version for variable bindings that may be nil.
 */
nex.typechecker.detachable_version = (function nex$typechecker$detachable_version(t){
var n = nex.typechecker.normalize_type(t);
if(cljs.core.map_QMARK_(n)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),n,new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null);
}
});
/**
 * Type-check convert expression:
 * convert <value> to <var>:<Type>
 * Returns Boolean and binds <var> as detachable <Type> in current scope.
 */
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6749){
var map__6750 = p__6749;
var map__6750__$1 = cljs.core.__destructure_map(map__6750);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6750__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6750__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6750__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
nex.typechecker.validate_type_annotation(env,target_type);

var value_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,value) : nex.typechecker.check_expression.call(null,env,value));
var target_type__$1 = nex.typechecker.normalize_type(target_type);
var compatible_QMARK_ = (function (){var or__5142__auto__ = nex.typechecker.types_compatible_QMARK_(env,value_type,target_type__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.types_compatible_QMARK_(env,target_type__$1,value_type);
}
})();
if(cljs.core.truth_(compatible_QMARK_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid convert type relation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"convert requires related types, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(value_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type__$1))))], null));
}

nex.typechecker.env_add_var(env,var_name,nex.typechecker.detachable_version(target_type__$1));

return "Boolean";
});
/**
 * Check the type of a method call
 */
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6752){
var map__6753 = p__6752;
var map__6753__$1 = cljs.core.__destructure_map(map__6753);
var expr = map__6753__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6753__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6753__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6753__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6753__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(cljs.core.truth_(target)){
var target_type = ((typeof target === 'string')?nex.typechecker.env_lookup_var(env,target):(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,target) : nex.typechecker.check_expression.call(null,env,target)));
var normalized_target = nex.typechecker.normalize_type(target_type);
var target_detachable_QMARK_ = nex.typechecker.detachable_type_QMARK_(normalized_target);
var guarded_QMARK_ = (function (){var and__5140__auto__ = typeof target === 'string';
if(and__5140__auto__){
return nex.typechecker.env_var_non_nil_QMARK_(env,target);
} else {
return and__5140__auto__;
}
})();
var base_type = ((cljs.core.map_QMARK_(target_type))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(target_type):target_type);
var type_map = nex.typechecker.build_generic_type_map(env,target_type);
if(((target_detachable_QMARK_) && (cljs.core.not(guarded_QMARK_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Feature access on detachable target requires nil-check: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot call feature '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+"' on detachable "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(normalized_target))+". Wrap with: if <obj> /= nil then <obj>."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+"(...) end"))], null));
} else {
}

var temp__5821__auto__ = nex.typechecker.lookup_class_method(env,base_type,method);
if(cljs.core.truth_(temp__5821__auto__)){
var method_sig = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6754_8279 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6755_8280 = null;
var count__6756_8281 = (0);
var i__6757_8282 = (0);
while(true){
if((i__6757_8282 < count__6756_8281)){
var vec__6766_8287 = chunk__6755_8280.cljs$core$IIndexed$_nth$arity$2(null,i__6757_8282);
var arg_8288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6766_8287,(0),null);
var param_8289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6766_8287,(1),null);
var arg_type_8295 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8288) : nex.typechecker.check_expression.call(null,env,arg_8288));
var param_type_8296 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8289),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8295,param_type_8296))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8296))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8295))))], null));
}


var G__8311 = seq__6754_8279;
var G__8312 = chunk__6755_8280;
var G__8313 = count__6756_8281;
var G__8314 = (i__6757_8282 + (1));
seq__6754_8279 = G__8311;
chunk__6755_8280 = G__8312;
count__6756_8281 = G__8313;
i__6757_8282 = G__8314;
continue;
} else {
var temp__5823__auto___8317 = cljs.core.seq(seq__6754_8279);
if(temp__5823__auto___8317){
var seq__6754_8320__$1 = temp__5823__auto___8317;
if(cljs.core.chunked_seq_QMARK_(seq__6754_8320__$1)){
var c__5673__auto___8321 = cljs.core.chunk_first(seq__6754_8320__$1);
var G__8323 = cljs.core.chunk_rest(seq__6754_8320__$1);
var G__8324 = c__5673__auto___8321;
var G__8325 = cljs.core.count(c__5673__auto___8321);
var G__8326 = (0);
seq__6754_8279 = G__8323;
chunk__6755_8280 = G__8324;
count__6756_8281 = G__8325;
i__6757_8282 = G__8326;
continue;
} else {
var vec__6769_8329 = cljs.core.first(seq__6754_8320__$1);
var arg_8330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6769_8329,(0),null);
var param_8332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6769_8329,(1),null);
var arg_type_8336 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8330) : nex.typechecker.check_expression.call(null,env,arg_8330));
var param_type_8337 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8332),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8336,param_type_8337))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8337))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8336))))], null));
}


var G__8350 = cljs.core.next(seq__6754_8320__$1);
var G__8351 = null;
var G__8352 = (0);
var G__8353 = (0);
seq__6754_8279 = G__8350;
chunk__6755_8280 = G__8351;
count__6756_8281 = G__8352;
i__6757_8282 = G__8353;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig),type_map);
} else {
if(has_parens === false){
var temp__5821__auto____$1 = nex.typechecker.lookup_class_field(env,base_type,method);
if(cljs.core.truth_(temp__5821__auto____$1)){
var field_type = temp__5821__auto____$1;
return nex.typechecker.resolve_generic_type(field_type,type_map);
} else {
return "Any";
}
} else {
return "Any";
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_of")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_of expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var G__6772_8364 = env;
var G__6773_8365 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6772_8364,G__6773_8365) : nex.typechecker.check_expression.call(null,G__6772_8364,G__6773_8365));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_8374 = (function (){var G__6774 = env;
var G__6775 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6774,G__6775) : nex.typechecker.check_expression.call(null,G__6774,G__6775));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_8374),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_8374))))], null));
}

var G__6776_8385 = env;
var G__6777_8386 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6776_8385,G__6777_8386) : nex.typechecker.check_expression.call(null,G__6776_8385,G__6777_8386));

return "Boolean";
} else {
var temp__5821__auto__ = nex.typechecker.env_lookup_var(env,method);
if(cljs.core.truth_(temp__5821__auto__)){
var var_type = temp__5821__auto__;
var base_type = ((cljs.core.map_QMARK_(var_type))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(var_type):var_type);
var call_name = (""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args)));
var method_sig = nex.typechecker.env_lookup_method(env,base_type,call_name);
var type_map = nex.typechecker.build_generic_type_map(env,var_type);
if(cljs.core.truth_(method_sig)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)))], null));
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6778_8409 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6779_8410 = null;
var count__6780_8411 = (0);
var i__6781_8412 = (0);
while(true){
if((i__6781_8412 < count__6780_8411)){
var vec__6788_8417 = chunk__6779_8410.cljs$core$IIndexed$_nth$arity$2(null,i__6781_8412);
var arg_8418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6788_8417,(0),null);
var param_8419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6788_8417,(1),null);
var arg_type_8422 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8418) : nex.typechecker.check_expression.call(null,env,arg_8418));
var param_type_8423 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8419),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8422,param_type_8423))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8423))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8422))))], null));
}


var G__8429 = seq__6778_8409;
var G__8430 = chunk__6779_8410;
var G__8431 = count__6780_8411;
var G__8432 = (i__6781_8412 + (1));
seq__6778_8409 = G__8429;
chunk__6779_8410 = G__8430;
count__6780_8411 = G__8431;
i__6781_8412 = G__8432;
continue;
} else {
var temp__5823__auto___8435 = cljs.core.seq(seq__6778_8409);
if(temp__5823__auto___8435){
var seq__6778_8437__$1 = temp__5823__auto___8435;
if(cljs.core.chunked_seq_QMARK_(seq__6778_8437__$1)){
var c__5673__auto___8439 = cljs.core.chunk_first(seq__6778_8437__$1);
var G__8441 = cljs.core.chunk_rest(seq__6778_8437__$1);
var G__8442 = c__5673__auto___8439;
var G__8443 = cljs.core.count(c__5673__auto___8439);
var G__8444 = (0);
seq__6778_8409 = G__8441;
chunk__6779_8410 = G__8442;
count__6780_8411 = G__8443;
i__6781_8412 = G__8444;
continue;
} else {
var vec__6791_8447 = cljs.core.first(seq__6778_8437__$1);
var arg_8449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6791_8447,(0),null);
var param_8450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6791_8447,(1),null);
var arg_type_8454 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8449) : nex.typechecker.check_expression.call(null,env,arg_8449));
var param_type_8455 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8450),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8454,param_type_8455))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8455))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8454))))], null));
}


var G__8462 = cljs.core.next(seq__6778_8437__$1);
var G__8463 = null;
var G__8464 = (0);
var G__8465 = (0);
seq__6778_8409 = G__8462;
chunk__6779_8410 = G__8463;
count__6780_8411 = G__8464;
i__6781_8412 = G__8465;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig),type_map);
} else {
var temp__5821__auto____$1 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5821__auto____$1)){
var current_class = temp__5821__auto____$1;
var temp__5821__auto____$2 = nex.typechecker.lookup_class_method(env,current_class,method);
if(cljs.core.truth_(temp__5821__auto____$2)){
var method_sig = temp__5821__auto____$2;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6794_8472 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6795_8473 = null;
var count__6796_8474 = (0);
var i__6797_8475 = (0);
while(true){
if((i__6797_8475 < count__6796_8474)){
var vec__6804_8476 = chunk__6795_8473.cljs$core$IIndexed$_nth$arity$2(null,i__6797_8475);
var arg_8477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6804_8476,(0),null);
var param_8478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6804_8476,(1),null);
var arg_type_8479 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8477) : nex.typechecker.check_expression.call(null,env,arg_8477));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8479,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8478)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8478))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_8479)))], null));
}


var G__8480 = seq__6794_8472;
var G__8481 = chunk__6795_8473;
var G__8482 = count__6796_8474;
var G__8483 = (i__6797_8475 + (1));
seq__6794_8472 = G__8480;
chunk__6795_8473 = G__8481;
count__6796_8474 = G__8482;
i__6797_8475 = G__8483;
continue;
} else {
var temp__5823__auto___8484 = cljs.core.seq(seq__6794_8472);
if(temp__5823__auto___8484){
var seq__6794_8485__$1 = temp__5823__auto___8484;
if(cljs.core.chunked_seq_QMARK_(seq__6794_8485__$1)){
var c__5673__auto___8486 = cljs.core.chunk_first(seq__6794_8485__$1);
var G__8487 = cljs.core.chunk_rest(seq__6794_8485__$1);
var G__8488 = c__5673__auto___8486;
var G__8489 = cljs.core.count(c__5673__auto___8486);
var G__8490 = (0);
seq__6794_8472 = G__8487;
chunk__6795_8473 = G__8488;
count__6796_8474 = G__8489;
i__6797_8475 = G__8490;
continue;
} else {
var vec__6807_8491 = cljs.core.first(seq__6794_8485__$1);
var arg_8492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6807_8491,(0),null);
var param_8493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6807_8491,(1),null);
var arg_type_8494 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8492) : nex.typechecker.check_expression.call(null,env,arg_8492));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8494,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8493)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8493))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_8494)))], null));
}


var G__8495 = cljs.core.next(seq__6794_8485__$1);
var G__8496 = null;
var G__8497 = (0);
var G__8498 = (0);
seq__6794_8472 = G__8495;
chunk__6795_8473 = G__8496;
count__6796_8474 = G__8497;
i__6797_8475 = G__8498;
continue;
}
} else {
}
}
break;
}

var or__5142__auto__ = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Void";
}
} else {
var seq__6810_8499 = cljs.core.seq(args);
var chunk__6811_8500 = null;
var count__6812_8501 = (0);
var i__6813_8502 = (0);
while(true){
if((i__6813_8502 < count__6812_8501)){
var arg_8503 = chunk__6811_8500.cljs$core$IIndexed$_nth$arity$2(null,i__6813_8502);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8503) : nex.typechecker.check_expression.call(null,env,arg_8503));


var G__8504 = seq__6810_8499;
var G__8505 = chunk__6811_8500;
var G__8506 = count__6812_8501;
var G__8507 = (i__6813_8502 + (1));
seq__6810_8499 = G__8504;
chunk__6811_8500 = G__8505;
count__6812_8501 = G__8506;
i__6813_8502 = G__8507;
continue;
} else {
var temp__5823__auto___8508 = cljs.core.seq(seq__6810_8499);
if(temp__5823__auto___8508){
var seq__6810_8509__$1 = temp__5823__auto___8508;
if(cljs.core.chunked_seq_QMARK_(seq__6810_8509__$1)){
var c__5673__auto___8510 = cljs.core.chunk_first(seq__6810_8509__$1);
var G__8511 = cljs.core.chunk_rest(seq__6810_8509__$1);
var G__8512 = c__5673__auto___8510;
var G__8513 = cljs.core.count(c__5673__auto___8510);
var G__8514 = (0);
seq__6810_8499 = G__8511;
chunk__6811_8500 = G__8512;
count__6812_8501 = G__8513;
i__6813_8502 = G__8514;
continue;
} else {
var arg_8515 = cljs.core.first(seq__6810_8509__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8515) : nex.typechecker.check_expression.call(null,env,arg_8515));


var G__8520 = cljs.core.next(seq__6810_8509__$1);
var G__8521 = null;
var G__8522 = (0);
var G__8523 = (0);
seq__6810_8499 = G__8520;
chunk__6811_8500 = G__8521;
count__6812_8501 = G__8522;
i__6813_8502 = G__8523;
continue;
}
} else {
}
}
break;
}

return "Void";
}
} else {
var seq__6814_8525 = cljs.core.seq(args);
var chunk__6815_8526 = null;
var count__6816_8527 = (0);
var i__6817_8528 = (0);
while(true){
if((i__6817_8528 < count__6816_8527)){
var arg_8534 = chunk__6815_8526.cljs$core$IIndexed$_nth$arity$2(null,i__6817_8528);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8534) : nex.typechecker.check_expression.call(null,env,arg_8534));


var G__8541 = seq__6814_8525;
var G__8542 = chunk__6815_8526;
var G__8543 = count__6816_8527;
var G__8544 = (i__6817_8528 + (1));
seq__6814_8525 = G__8541;
chunk__6815_8526 = G__8542;
count__6816_8527 = G__8543;
i__6817_8528 = G__8544;
continue;
} else {
var temp__5823__auto___8546 = cljs.core.seq(seq__6814_8525);
if(temp__5823__auto___8546){
var seq__6814_8551__$1 = temp__5823__auto___8546;
if(cljs.core.chunked_seq_QMARK_(seq__6814_8551__$1)){
var c__5673__auto___8556 = cljs.core.chunk_first(seq__6814_8551__$1);
var G__8557 = cljs.core.chunk_rest(seq__6814_8551__$1);
var G__8558 = c__5673__auto___8556;
var G__8559 = cljs.core.count(c__5673__auto___8556);
var G__8560 = (0);
seq__6814_8525 = G__8557;
chunk__6815_8526 = G__8558;
count__6816_8527 = G__8559;
i__6817_8528 = G__8560;
continue;
} else {
var arg_8562 = cljs.core.first(seq__6814_8551__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8562) : nex.typechecker.check_expression.call(null,env,arg_8562));


var G__8569 = cljs.core.next(seq__6814_8551__$1);
var G__8570 = null;
var G__8571 = (0);
var G__8572 = (0);
seq__6814_8525 = G__8569;
chunk__6815_8526 = G__8570;
count__6816_8527 = G__8571;
i__6817_8528 = G__8572;
continue;
}
} else {
}
}
break;
}

return "Void";
}
}

}
}
}
});
/**
 * Check the type of a create expression
 */
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6818){
var map__6819 = p__6818;
var map__6819__$1 = cljs.core.__destructure_map(map__6819);
var expr = map__6819__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Console")){
return "Console";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Process")){
return "Process";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Window")){
return "Window";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Turtle")){
return "Turtle";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Image")){
return "Image";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"File")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"open")){
var seq__6820_8604 = cljs.core.seq(args);
var chunk__6821_8605 = null;
var count__6822_8606 = (0);
var i__6823_8607 = (0);
while(true){
if((i__6823_8607 < count__6822_8606)){
var arg_8613 = chunk__6821_8605.cljs$core$IIndexed$_nth$arity$2(null,i__6823_8607);
var arg_type_8614 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8613) : nex.typechecker.check_expression.call(null,env,arg_8613));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8614,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8635 = seq__6820_8604;
var G__8636 = chunk__6821_8605;
var G__8637 = count__6822_8606;
var G__8638 = (i__6823_8607 + (1));
seq__6820_8604 = G__8635;
chunk__6821_8605 = G__8636;
count__6822_8606 = G__8637;
i__6823_8607 = G__8638;
continue;
} else {
var temp__5823__auto___8640 = cljs.core.seq(seq__6820_8604);
if(temp__5823__auto___8640){
var seq__6820_8645__$1 = temp__5823__auto___8640;
if(cljs.core.chunked_seq_QMARK_(seq__6820_8645__$1)){
var c__5673__auto___8647 = cljs.core.chunk_first(seq__6820_8645__$1);
var G__8649 = cljs.core.chunk_rest(seq__6820_8645__$1);
var G__8650 = c__5673__auto___8647;
var G__8651 = cljs.core.count(c__5673__auto___8647);
var G__8652 = (0);
seq__6820_8604 = G__8649;
chunk__6821_8605 = G__8650;
count__6822_8606 = G__8651;
i__6823_8607 = G__8652;
continue;
} else {
var arg_8658 = cljs.core.first(seq__6820_8645__$1);
var arg_type_8660 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8658) : nex.typechecker.check_expression.call(null,env,arg_8658));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8660,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8665 = cljs.core.next(seq__6820_8645__$1);
var G__8666 = null;
var G__8667 = (0);
var G__8668 = (0);
seq__6820_8604 = G__8665;
chunk__6821_8605 = G__8666;
count__6822_8606 = G__8667;
i__6823_8607 = G__8668;
continue;
}
} else {
}
}
break;
}
} else {
}

return "File";
} else {
if(cljs.core.truth_((function (){var or__5142__auto__ = nex.typechecker.env_lookup_class(env,class_name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.builtin_type_QMARK_(class_name);
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)))], null));
}

var class_def = nex.typechecker.env_lookup_class(env,class_name);
var target_type = ((cljs.core.seq(generic_args))?(function (){
nex.typechecker.validate_generic_args(env,class_name,generic_args);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),class_name,new cljs.core.Keyword(null,"type-args","type-args",1580007623),generic_args], null);
})()
:class_name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"deferred?","deferred?",716798715).cljs$core$IFn$_invoke$arity$1(class_def))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot instantiate deferred class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot instantiate deferred class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"; instantiate a concrete child class instead"))], null));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = class_def;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"import","import",-1399500709).cljs$core$IFn$_invoke$arity$1(class_def);
} else {
return and__5140__auto__;
}
})())){
return target_type;
} else {
var constructors_8669 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__8670 = cljs.core.seq(constructors_8669);
var type_map_8671 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_8672 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_8673 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_8672);
if(((has_constructors_QMARK__8670) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor required for class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+" defines constructors; use an explicit constructor call, e.g. create "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+".<ctor>(...)"))], null));
} else {
}

if(cljs.core.truth_((function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.seq(args);
}
})())){
if(cljs.core.truth_(ctor_sig_8673)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8672)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8672)))], null));
}

var params_8686 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_8673);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_8686),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8672)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_8686))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6826_8695 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_8686));
var chunk__6827_8696 = null;
var count__6828_8697 = (0);
var i__6829_8698 = (0);
while(true){
if((i__6829_8698 < count__6828_8697)){
var vec__6838_8703 = chunk__6827_8696.cljs$core$IIndexed$_nth$arity$2(null,i__6829_8698);
var arg_8704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838_8703,(0),null);
var param_8705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6838_8703,(1),null);
var arg_type_8706 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8704) : nex.typechecker.check_expression.call(null,env,arg_8704));
var param_type_8707 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8705),type_map_8671);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8706,param_type_8707))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8672)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8707))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8706))))], null));
}


var G__8708 = seq__6826_8695;
var G__8709 = chunk__6827_8696;
var G__8710 = count__6828_8697;
var G__8711 = (i__6829_8698 + (1));
seq__6826_8695 = G__8708;
chunk__6827_8696 = G__8709;
count__6828_8697 = G__8710;
i__6829_8698 = G__8711;
continue;
} else {
var temp__5823__auto___8712 = cljs.core.seq(seq__6826_8695);
if(temp__5823__auto___8712){
var seq__6826_8713__$1 = temp__5823__auto___8712;
if(cljs.core.chunked_seq_QMARK_(seq__6826_8713__$1)){
var c__5673__auto___8714 = cljs.core.chunk_first(seq__6826_8713__$1);
var G__8715 = cljs.core.chunk_rest(seq__6826_8713__$1);
var G__8716 = c__5673__auto___8714;
var G__8717 = cljs.core.count(c__5673__auto___8714);
var G__8718 = (0);
seq__6826_8695 = G__8715;
chunk__6827_8696 = G__8716;
count__6828_8697 = G__8717;
i__6829_8698 = G__8718;
continue;
} else {
var vec__6841_8719 = cljs.core.first(seq__6826_8713__$1);
var arg_8720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6841_8719,(0),null);
var param_8721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6841_8719,(1),null);
var arg_type_8722 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8720) : nex.typechecker.check_expression.call(null,env,arg_8720));
var param_type_8723 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8721),type_map_8671);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8722,param_type_8723))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8672)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8723))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8722))))], null));
}


var G__8732 = cljs.core.next(seq__6826_8713__$1);
var G__8733 = null;
var G__8734 = (0);
var G__8735 = (0);
seq__6826_8695 = G__8732;
chunk__6827_8696 = G__8733;
count__6828_8697 = G__8734;
i__6829_8698 = G__8735;
continue;
}
} else {
}
}
break;
}
} else {
}

return target_type;
}

}
}
}
}
}
}
});
/**
 * Check the type of an array literal
 */
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6844){
var map__6845 = p__6844;
var map__6845__$1 = cljs.core.__destructure_map(map__6845);
var expr = map__6845__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6845__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6846 = env;
var G__6847 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6846,G__6847) : nex.typechecker.check_expression.call(null,G__6846,G__6847));
})();
var seq__6848_8743 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6849_8744 = null;
var count__6850_8745 = (0);
var i__6851_8746 = (0);
while(true){
if((i__6851_8746 < count__6850_8745)){
var elem_8754 = chunk__6849_8744.cljs$core$IIndexed$_nth$arity$2(null,i__6851_8746);
var elem_type_8755 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8754) : nex.typechecker.check_expression.call(null,env,elem_8754));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8755))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8755))))], null));
}


var G__8768 = seq__6848_8743;
var G__8769 = chunk__6849_8744;
var G__8770 = count__6850_8745;
var G__8771 = (i__6851_8746 + (1));
seq__6848_8743 = G__8768;
chunk__6849_8744 = G__8769;
count__6850_8745 = G__8770;
i__6851_8746 = G__8771;
continue;
} else {
var temp__5823__auto___8775 = cljs.core.seq(seq__6848_8743);
if(temp__5823__auto___8775){
var seq__6848_8776__$1 = temp__5823__auto___8775;
if(cljs.core.chunked_seq_QMARK_(seq__6848_8776__$1)){
var c__5673__auto___8777 = cljs.core.chunk_first(seq__6848_8776__$1);
var G__8778 = cljs.core.chunk_rest(seq__6848_8776__$1);
var G__8779 = c__5673__auto___8777;
var G__8780 = cljs.core.count(c__5673__auto___8777);
var G__8781 = (0);
seq__6848_8743 = G__8778;
chunk__6849_8744 = G__8779;
count__6850_8745 = G__8780;
i__6851_8746 = G__8781;
continue;
} else {
var elem_8782 = cljs.core.first(seq__6848_8776__$1);
var elem_type_8784 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8782) : nex.typechecker.check_expression.call(null,env,elem_8782));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8784))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8784))))], null));
}


var G__8789 = cljs.core.next(seq__6848_8776__$1);
var G__8790 = null;
var G__8791 = (0);
var G__8792 = (0);
seq__6848_8743 = G__8789;
chunk__6849_8744 = G__8790;
count__6850_8745 = G__8791;
i__6851_8746 = G__8792;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_type], null)], null);
}
});
/**
 * Check the type of a map literal
 */
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6853){
var map__6854 = p__6853;
var map__6854__$1 = cljs.core.__destructure_map(map__6854);
var expr = map__6854__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6854__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6855 = env;
var G__6856 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6855,G__6856) : nex.typechecker.check_expression.call(null,G__6855,G__6856));
})();
var val_type = (function (){var G__6857 = env;
var G__6858 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6857,G__6858) : nex.typechecker.check_expression.call(null,G__6857,G__6858));
})();
var seq__6859_8793 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6860_8794 = null;
var count__6861_8795 = (0);
var i__6862_8796 = (0);
while(true){
if((i__6862_8796 < count__6861_8795)){
var entry_8797 = chunk__6860_8794.cljs$core$IIndexed$_nth$arity$2(null,i__6862_8796);
var k_type_8798 = (function (){var G__6871 = env;
var G__6872 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8797);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6871,G__6872) : nex.typechecker.check_expression.call(null,G__6871,G__6872));
})();
var v_type_8799 = (function (){var G__6873 = env;
var G__6874 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8797);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6873,G__6874) : nex.typechecker.check_expression.call(null,G__6873,G__6874));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8798);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8799);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8800 = seq__6859_8793;
var G__8801 = chunk__6860_8794;
var G__8802 = count__6861_8795;
var G__8803 = (i__6862_8796 + (1));
seq__6859_8793 = G__8800;
chunk__6860_8794 = G__8801;
count__6861_8795 = G__8802;
i__6862_8796 = G__8803;
continue;
} else {
var temp__5823__auto___8804 = cljs.core.seq(seq__6859_8793);
if(temp__5823__auto___8804){
var seq__6859_8805__$1 = temp__5823__auto___8804;
if(cljs.core.chunked_seq_QMARK_(seq__6859_8805__$1)){
var c__5673__auto___8806 = cljs.core.chunk_first(seq__6859_8805__$1);
var G__8807 = cljs.core.chunk_rest(seq__6859_8805__$1);
var G__8808 = c__5673__auto___8806;
var G__8809 = cljs.core.count(c__5673__auto___8806);
var G__8810 = (0);
seq__6859_8793 = G__8807;
chunk__6860_8794 = G__8808;
count__6861_8795 = G__8809;
i__6862_8796 = G__8810;
continue;
} else {
var entry_8811 = cljs.core.first(seq__6859_8805__$1);
var k_type_8812 = (function (){var G__6875 = env;
var G__6876 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8811);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6875,G__6876) : nex.typechecker.check_expression.call(null,G__6875,G__6876));
})();
var v_type_8813 = (function (){var G__6877 = env;
var G__6878 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8811);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6877,G__6878) : nex.typechecker.check_expression.call(null,G__6877,G__6878));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8812);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8813);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8819 = cljs.core.next(seq__6859_8805__$1);
var G__8820 = null;
var G__8821 = (0);
var G__8822 = (0);
seq__6859_8793 = G__8819;
chunk__6860_8794 = G__8820;
count__6861_8795 = G__8821;
i__6862_8796 = G__8822;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_type,val_type], null)], null);
}
});
/**
 * Check the type of an expression
 */
nex.typechecker.check_expression = (function nex$typechecker$check_expression(env,expr){
if((expr == null)){
return "Void";
} else {
if(typeof expr === 'string'){
var or__5142__auto__ = nex.typechecker.env_lookup_var(env,expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)))], null));
}
} else {
if(typeof expr === 'number'){
return "Integer";
} else {
if(cljs.core.boolean_QMARK_(expr)){
return "Boolean";
} else {
if(cljs.core.map_QMARK_(expr)){
var G__6881 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6881__$1 = (((G__6881 instanceof cljs.core.Keyword))?G__6881.fqn:null);
switch (G__6881__$1) {
case "integer":
return nex.typechecker.check_literal(env,expr);

break;
case "real":
return nex.typechecker.check_literal(env,expr);

break;
case "string":
return nex.typechecker.check_literal(env,expr);

break;
case "char":
return nex.typechecker.check_literal(env,expr);

break;
case "boolean":
return nex.typechecker.check_literal(env,expr);

break;
case "identifier":
return nex.typechecker.check_identifier(env,expr);

break;
case "binary":
return nex.typechecker.check_binary_op(env,expr);

break;
case "unary":
return nex.typechecker.check_unary_op(env,expr);

break;
case "call":
return nex.typechecker.check_call(env,expr);

break;
case "create":
return nex.typechecker.check_create(env,expr);

break;
case "array-literal":
return nex.typechecker.check_array_literal(env,expr);

break;
case "map-literal":
return nex.typechecker.check_map_literal(env,expr);

break;
case "subscript":
var target_type = (function (){var G__6883 = env;
var G__6884 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6883,G__6884) : nex.typechecker.check_expression.call(null,G__6883,G__6884));
})();
if(cljs.core.map_QMARK_(target_type)){
var type_params = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(target_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(target_type);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(target_type),"Array")){
return cljs.core.first(type_params);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(target_type),"Map")){
return cljs.core.second(type_params);
} else {
return target_type;

}
}
} else {
return target_type;
}

break;
case "anonymous-function":
var class_def = new cljs.core.Keyword(null,"class-def","class-def",-524108044).cljs$core$IFn$_invoke$arity$1(expr);
var class_name = new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(expr);
(nex.typechecker.collect_class_info.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.collect_class_info.cljs$core$IFn$_invoke$arity$2(env,class_def) : nex.typechecker.collect_class_info.call(null,env,class_def));

(nex.typechecker.check_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_class.cljs$core$IFn$_invoke$arity$2(env,class_def) : nex.typechecker.check_class.call(null,env,class_def));

return class_name;

break;
case "when":
var cond_type = (function (){var G__6886 = env;
var G__6887 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6886,G__6887) : nex.typechecker.check_expression.call(null,G__6886,G__6887));
})();
var cons_type = (function (){var G__6888 = env;
var G__6889 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6888,G__6889) : nex.typechecker.check_expression.call(null,G__6888,G__6889));
})();
var alt_type = (function (){var G__6890 = env;
var G__6891 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6890,G__6891) : nex.typechecker.check_expression.call(null,G__6890,G__6891));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6892 = env;
var G__6893 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6892,G__6893) : nex.typechecker.check_expression.call(null,G__6892,G__6893));

break;
case "convert":
return nex.typechecker.check_convert(env,expr);

break;
case "this":
var or__5142__auto__ = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}

break;
default:
return "Any";

}
} else {
return "Any";

}
}
}
}
}
});
/**
 * Check an assignment statement
 */
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6894){
var map__6895 = p__6894;
var map__6895__$1 = cljs.core.__destructure_map(map__6895);
var stmt = map__6895__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6895__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6895__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_type = nex.typechecker.env_lookup_var(env,target);
var val_type = nex.typechecker.check_expression(env,value);
if(cljs.core.truth_(var_type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)))], null));
}

if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,val_type,var_type))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in assignment to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(val_type))+" to variable of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(var_type))))], null));
}
});
/**
 * Check a let statement
 */
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6898){
var map__6899 = p__6898;
var map__6899__$1 = cljs.core.__destructure_map(map__6899);
var stmt = map__6899__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6899__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6899__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(var_type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type annotation required for variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"'"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type annotation required for variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"'. Use: let "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+": <Type> := ..."))], null));
}

nex.typechecker.validate_type_annotation(env,var_type);

var val_type = nex.typechecker.check_expression(env,value);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,val_type,var_type))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in let binding for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(val_type))+" to variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(var_type))))], null));
}

return nex.typechecker.env_add_var(env,name,var_type);
});
/**
 * Check an if statement
 */
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6902){
var map__6907 = p__6902;
var map__6907__$1 = cljs.core.__destructure_map(map__6907);
var stmt = map__6907__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6907__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6907__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6907__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6907__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_8859 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8859,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8859)))], null));
}

var then_env_8860 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8861 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___8861)){
var non_nil_var_8862 = temp__5823__auto___8861;
nex.typechecker.env_mark_non_nil(then_env_8860,non_nil_var_8862);
} else {
}

var temp__5823__auto___8863 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___8863)){
var map__6908_8864 = temp__5823__auto___8863;
var map__6908_8865__$1 = cljs.core.__destructure_map(map__6908_8864);
var name_8866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6908_8865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6908_8865__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_8860,name_8866,type_8867);

nex.typechecker.env_mark_non_nil(then_env_8860,name_8866);
} else {
}

var seq__6909_8868 = cljs.core.seq(then);
var chunk__6910_8869 = null;
var count__6911_8870 = (0);
var i__6912_8871 = (0);
while(true){
if((i__6912_8871 < count__6911_8870)){
var stmt_8872__$1 = chunk__6910_8869.cljs$core$IIndexed$_nth$arity$2(null,i__6912_8871);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8860,stmt_8872__$1) : nex.typechecker.check_statement.call(null,then_env_8860,stmt_8872__$1));


var G__8873 = seq__6909_8868;
var G__8874 = chunk__6910_8869;
var G__8875 = count__6911_8870;
var G__8876 = (i__6912_8871 + (1));
seq__6909_8868 = G__8873;
chunk__6910_8869 = G__8874;
count__6911_8870 = G__8875;
i__6912_8871 = G__8876;
continue;
} else {
var temp__5823__auto___8877 = cljs.core.seq(seq__6909_8868);
if(temp__5823__auto___8877){
var seq__6909_8878__$1 = temp__5823__auto___8877;
if(cljs.core.chunked_seq_QMARK_(seq__6909_8878__$1)){
var c__5673__auto___8879 = cljs.core.chunk_first(seq__6909_8878__$1);
var G__8880 = cljs.core.chunk_rest(seq__6909_8878__$1);
var G__8881 = c__5673__auto___8879;
var G__8882 = cljs.core.count(c__5673__auto___8879);
var G__8883 = (0);
seq__6909_8868 = G__8880;
chunk__6910_8869 = G__8881;
count__6911_8870 = G__8882;
i__6912_8871 = G__8883;
continue;
} else {
var stmt_8884__$1 = cljs.core.first(seq__6909_8878__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8860,stmt_8884__$1) : nex.typechecker.check_statement.call(null,then_env_8860,stmt_8884__$1));


var G__8885 = cljs.core.next(seq__6909_8878__$1);
var G__8886 = null;
var G__8887 = (0);
var G__8888 = (0);
seq__6909_8868 = G__8885;
chunk__6910_8869 = G__8886;
count__6911_8870 = G__8887;
i__6912_8871 = G__8888;
continue;
}
} else {
}
}
break;
}

var seq__6913_8889 = cljs.core.seq(elseif);
var chunk__6914_8890 = null;
var count__6915_8891 = (0);
var i__6916_8892 = (0);
while(true){
if((i__6916_8892 < count__6915_8891)){
var clause_8893 = chunk__6914_8890.cljs$core$IIndexed$_nth$arity$2(null,i__6916_8892);
var ei_cond_type_8894 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8893));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8894,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8894)))], null));
}

var elseif_env_8895 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8896 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8893));
if(cljs.core.truth_(temp__5823__auto___8896)){
var non_nil_var_8897 = temp__5823__auto___8896;
nex.typechecker.env_mark_non_nil(elseif_env_8895,non_nil_var_8897);
} else {
}

var temp__5823__auto___8898 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8893));
if(cljs.core.truth_(temp__5823__auto___8898)){
var map__6939_8899 = temp__5823__auto___8898;
var map__6939_8900__$1 = cljs.core.__destructure_map(map__6939_8899);
var name_8901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6939_8900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6939_8900__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8895,name_8901,type_8902);

nex.typechecker.env_mark_non_nil(elseif_env_8895,name_8901);
} else {
}

var seq__6940_8903 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8893));
var chunk__6941_8904 = null;
var count__6942_8905 = (0);
var i__6943_8906 = (0);
while(true){
if((i__6943_8906 < count__6942_8905)){
var stmt_8907__$1 = chunk__6941_8904.cljs$core$IIndexed$_nth$arity$2(null,i__6943_8906);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8895,stmt_8907__$1) : nex.typechecker.check_statement.call(null,elseif_env_8895,stmt_8907__$1));


var G__8908 = seq__6940_8903;
var G__8909 = chunk__6941_8904;
var G__8910 = count__6942_8905;
var G__8911 = (i__6943_8906 + (1));
seq__6940_8903 = G__8908;
chunk__6941_8904 = G__8909;
count__6942_8905 = G__8910;
i__6943_8906 = G__8911;
continue;
} else {
var temp__5823__auto___8912 = cljs.core.seq(seq__6940_8903);
if(temp__5823__auto___8912){
var seq__6940_8913__$1 = temp__5823__auto___8912;
if(cljs.core.chunked_seq_QMARK_(seq__6940_8913__$1)){
var c__5673__auto___8914 = cljs.core.chunk_first(seq__6940_8913__$1);
var G__8915 = cljs.core.chunk_rest(seq__6940_8913__$1);
var G__8916 = c__5673__auto___8914;
var G__8917 = cljs.core.count(c__5673__auto___8914);
var G__8918 = (0);
seq__6940_8903 = G__8915;
chunk__6941_8904 = G__8916;
count__6942_8905 = G__8917;
i__6943_8906 = G__8918;
continue;
} else {
var stmt_8919__$1 = cljs.core.first(seq__6940_8913__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8895,stmt_8919__$1) : nex.typechecker.check_statement.call(null,elseif_env_8895,stmt_8919__$1));


var G__8920 = cljs.core.next(seq__6940_8913__$1);
var G__8921 = null;
var G__8922 = (0);
var G__8923 = (0);
seq__6940_8903 = G__8920;
chunk__6941_8904 = G__8921;
count__6942_8905 = G__8922;
i__6943_8906 = G__8923;
continue;
}
} else {
}
}
break;
}


var G__8928 = seq__6913_8889;
var G__8929 = chunk__6914_8890;
var G__8930 = count__6915_8891;
var G__8931 = (i__6916_8892 + (1));
seq__6913_8889 = G__8928;
chunk__6914_8890 = G__8929;
count__6915_8891 = G__8930;
i__6916_8892 = G__8931;
continue;
} else {
var temp__5823__auto___8932 = cljs.core.seq(seq__6913_8889);
if(temp__5823__auto___8932){
var seq__6913_8937__$1 = temp__5823__auto___8932;
if(cljs.core.chunked_seq_QMARK_(seq__6913_8937__$1)){
var c__5673__auto___8938 = cljs.core.chunk_first(seq__6913_8937__$1);
var G__8939 = cljs.core.chunk_rest(seq__6913_8937__$1);
var G__8940 = c__5673__auto___8938;
var G__8941 = cljs.core.count(c__5673__auto___8938);
var G__8942 = (0);
seq__6913_8889 = G__8939;
chunk__6914_8890 = G__8940;
count__6915_8891 = G__8941;
i__6916_8892 = G__8942;
continue;
} else {
var clause_8947 = cljs.core.first(seq__6913_8937__$1);
var ei_cond_type_8948 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8947));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8948,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8948)))], null));
}

var elseif_env_8949 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8950__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8947));
if(cljs.core.truth_(temp__5823__auto___8950__$1)){
var non_nil_var_8951 = temp__5823__auto___8950__$1;
nex.typechecker.env_mark_non_nil(elseif_env_8949,non_nil_var_8951);
} else {
}

var temp__5823__auto___8952__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8947));
if(cljs.core.truth_(temp__5823__auto___8952__$1)){
var map__6948_8953 = temp__5823__auto___8952__$1;
var map__6948_8954__$1 = cljs.core.__destructure_map(map__6948_8953);
var name_8955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6948_8954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6948_8954__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8949,name_8955,type_8956);

nex.typechecker.env_mark_non_nil(elseif_env_8949,name_8955);
} else {
}

var seq__6949_8958 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8947));
var chunk__6950_8959 = null;
var count__6951_8960 = (0);
var i__6952_8961 = (0);
while(true){
if((i__6952_8961 < count__6951_8960)){
var stmt_8963__$1 = chunk__6950_8959.cljs$core$IIndexed$_nth$arity$2(null,i__6952_8961);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8949,stmt_8963__$1) : nex.typechecker.check_statement.call(null,elseif_env_8949,stmt_8963__$1));


var G__8964 = seq__6949_8958;
var G__8965 = chunk__6950_8959;
var G__8966 = count__6951_8960;
var G__8967 = (i__6952_8961 + (1));
seq__6949_8958 = G__8964;
chunk__6950_8959 = G__8965;
count__6951_8960 = G__8966;
i__6952_8961 = G__8967;
continue;
} else {
var temp__5823__auto___8968__$1 = cljs.core.seq(seq__6949_8958);
if(temp__5823__auto___8968__$1){
var seq__6949_8969__$1 = temp__5823__auto___8968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6949_8969__$1)){
var c__5673__auto___8970 = cljs.core.chunk_first(seq__6949_8969__$1);
var G__8971 = cljs.core.chunk_rest(seq__6949_8969__$1);
var G__8972 = c__5673__auto___8970;
var G__8973 = cljs.core.count(c__5673__auto___8970);
var G__8974 = (0);
seq__6949_8958 = G__8971;
chunk__6950_8959 = G__8972;
count__6951_8960 = G__8973;
i__6952_8961 = G__8974;
continue;
} else {
var stmt_8975__$1 = cljs.core.first(seq__6949_8969__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8949,stmt_8975__$1) : nex.typechecker.check_statement.call(null,elseif_env_8949,stmt_8975__$1));


var G__8976 = cljs.core.next(seq__6949_8969__$1);
var G__8977 = null;
var G__8978 = (0);
var G__8979 = (0);
seq__6949_8958 = G__8976;
chunk__6950_8959 = G__8977;
count__6951_8960 = G__8978;
i__6952_8961 = G__8979;
continue;
}
} else {
}
}
break;
}


var G__8980 = cljs.core.next(seq__6913_8937__$1);
var G__8981 = null;
var G__8982 = (0);
var G__8983 = (0);
seq__6913_8889 = G__8980;
chunk__6914_8890 = G__8981;
count__6915_8891 = G__8982;
i__6916_8892 = G__8983;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6953 = cljs.core.seq(else$);
var chunk__6954 = null;
var count__6955 = (0);
var i__6956 = (0);
while(true){
if((i__6956 < count__6955)){
var stmt__$1 = chunk__6954.cljs$core$IIndexed$_nth$arity$2(null,i__6956);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8984 = seq__6953;
var G__8985 = chunk__6954;
var G__8986 = count__6955;
var G__8987 = (i__6956 + (1));
seq__6953 = G__8984;
chunk__6954 = G__8985;
count__6955 = G__8986;
i__6956 = G__8987;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6953);
if(temp__5823__auto__){
var seq__6953__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6953__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6953__$1);
var G__8988 = cljs.core.chunk_rest(seq__6953__$1);
var G__8989 = c__5673__auto__;
var G__8990 = cljs.core.count(c__5673__auto__);
var G__8991 = (0);
seq__6953 = G__8988;
chunk__6954 = G__8989;
count__6955 = G__8990;
i__6956 = G__8991;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6953__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8992 = cljs.core.next(seq__6953__$1);
var G__8993 = null;
var G__8994 = (0);
var G__8995 = (0);
seq__6953 = G__8992;
chunk__6954 = G__8993;
count__6955 = G__8994;
i__6956 = G__8995;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Check a loop statement
 */
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6961){
var map__6962 = p__6961;
var map__6962__$1 = cljs.core.__destructure_map(map__6962);
var stmt = map__6962__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6962__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6963_9001 = cljs.core.seq(init);
var chunk__6964_9002 = null;
var count__6965_9003 = (0);
var i__6966_9004 = (0);
while(true){
if((i__6966_9004 < count__6965_9003)){
var s_9009 = chunk__6964_9002.cljs$core$IIndexed$_nth$arity$2(null,i__6966_9004);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_9009) : nex.typechecker.check_statement.call(null,loop_env,s_9009));


var G__9012 = seq__6963_9001;
var G__9013 = chunk__6964_9002;
var G__9014 = count__6965_9003;
var G__9015 = (i__6966_9004 + (1));
seq__6963_9001 = G__9012;
chunk__6964_9002 = G__9013;
count__6965_9003 = G__9014;
i__6966_9004 = G__9015;
continue;
} else {
var temp__5823__auto___9017 = cljs.core.seq(seq__6963_9001);
if(temp__5823__auto___9017){
var seq__6963_9022__$1 = temp__5823__auto___9017;
if(cljs.core.chunked_seq_QMARK_(seq__6963_9022__$1)){
var c__5673__auto___9024 = cljs.core.chunk_first(seq__6963_9022__$1);
var G__9027 = cljs.core.chunk_rest(seq__6963_9022__$1);
var G__9030 = c__5673__auto___9024;
var G__9031 = cljs.core.count(c__5673__auto___9024);
var G__9032 = (0);
seq__6963_9001 = G__9027;
chunk__6964_9002 = G__9030;
count__6965_9003 = G__9031;
i__6966_9004 = G__9032;
continue;
} else {
var s_9034 = cljs.core.first(seq__6963_9022__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_9034) : nex.typechecker.check_statement.call(null,loop_env,s_9034));


var G__9039 = cljs.core.next(seq__6963_9022__$1);
var G__9040 = null;
var G__9041 = (0);
var G__9042 = (0);
seq__6963_9001 = G__9039;
chunk__6964_9002 = G__9040;
count__6965_9003 = G__9041;
i__6966_9004 = G__9042;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_9043 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9043,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9043,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9043)))], null));
}
} else {
}

var seq__6967 = cljs.core.seq(body);
var chunk__6968 = null;
var count__6969 = (0);
var i__6970 = (0);
while(true){
if((i__6970 < count__6969)){
var stmt__$1 = chunk__6968.cljs$core$IIndexed$_nth$arity$2(null,i__6970);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__9055 = seq__6967;
var G__9056 = chunk__6968;
var G__9057 = count__6969;
var G__9058 = (i__6970 + (1));
seq__6967 = G__9055;
chunk__6968 = G__9056;
count__6969 = G__9057;
i__6970 = G__9058;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6967);
if(temp__5823__auto__){
var seq__6967__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6967__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6967__$1);
var G__9065 = cljs.core.chunk_rest(seq__6967__$1);
var G__9066 = c__5673__auto__;
var G__9067 = cljs.core.count(c__5673__auto__);
var G__9068 = (0);
seq__6967 = G__9065;
chunk__6968 = G__9066;
count__6969 = G__9067;
i__6970 = G__9068;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6967__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__9074 = cljs.core.next(seq__6967__$1);
var G__9075 = null;
var G__9076 = (0);
var G__9077 = (0);
seq__6967 = G__9074;
chunk__6968 = G__9075;
count__6969 = G__9076;
i__6970 = G__9077;
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
 * Check a statement
 */
nex.typechecker.check_statement = (function nex$typechecker$check_statement(env,stmt){
if(cljs.core.map_QMARK_(stmt)){
var G__6978 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6978__$1 = (((G__6978 instanceof cljs.core.Keyword))?G__6978.fqn:null);
switch (G__6978__$1) {
case "assign":
return nex.typechecker.check_assignment(env,stmt);

break;
case "let":
return nex.typechecker.check_let(env,stmt);

break;
case "call":
return nex.typechecker.check_expression(env,stmt);

break;
case "if":
return nex.typechecker.check_if(env,stmt);

break;
case "loop":
return nex.typechecker.check_loop(env,stmt);

break;
case "scoped-block":
var block_env_9079 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6979_9080 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6980_9081 = null;
var count__6981_9082 = (0);
var i__6982_9083 = (0);
while(true){
if((i__6982_9083 < count__6981_9082)){
var s_9084 = chunk__6980_9081.cljs$core$IIndexed$_nth$arity$2(null,i__6982_9083);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_9079,s_9084) : nex.typechecker.check_statement.call(null,block_env_9079,s_9084));


var G__9085 = seq__6979_9080;
var G__9086 = chunk__6980_9081;
var G__9087 = count__6981_9082;
var G__9088 = (i__6982_9083 + (1));
seq__6979_9080 = G__9085;
chunk__6980_9081 = G__9086;
count__6981_9082 = G__9087;
i__6982_9083 = G__9088;
continue;
} else {
var temp__5823__auto___9089 = cljs.core.seq(seq__6979_9080);
if(temp__5823__auto___9089){
var seq__6979_9090__$1 = temp__5823__auto___9089;
if(cljs.core.chunked_seq_QMARK_(seq__6979_9090__$1)){
var c__5673__auto___9091 = cljs.core.chunk_first(seq__6979_9090__$1);
var G__9092 = cljs.core.chunk_rest(seq__6979_9090__$1);
var G__9093 = c__5673__auto___9091;
var G__9094 = cljs.core.count(c__5673__auto___9091);
var G__9095 = (0);
seq__6979_9080 = G__9092;
chunk__6980_9081 = G__9093;
count__6981_9082 = G__9094;
i__6982_9083 = G__9095;
continue;
} else {
var s_9096 = cljs.core.first(seq__6979_9090__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_9079,s_9096) : nex.typechecker.check_statement.call(null,block_env_9079,s_9096));


var G__9097 = cljs.core.next(seq__6979_9090__$1);
var G__9098 = null;
var G__9099 = (0);
var G__9100 = (0);
seq__6979_9080 = G__9097;
chunk__6980_9081 = G__9098;
count__6981_9082 = G__9099;
i__6982_9083 = G__9100;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(stmt);
if(cljs.core.truth_(temp__5823__auto__)){
var rescue = temp__5823__auto__;
var rescue_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(rescue_env,"exception","Any");

var seq__6989 = cljs.core.seq(rescue);
var chunk__6990 = null;
var count__6991 = (0);
var i__6992 = (0);
while(true){
if((i__6992 < count__6991)){
var s = chunk__6990.cljs$core$IIndexed$_nth$arity$2(null,i__6992);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__9101 = seq__6989;
var G__9102 = chunk__6990;
var G__9103 = count__6991;
var G__9104 = (i__6992 + (1));
seq__6989 = G__9101;
chunk__6990 = G__9102;
count__6991 = G__9103;
i__6992 = G__9104;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6989);
if(temp__5823__auto____$1){
var seq__6989__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6989__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6989__$1);
var G__9105 = cljs.core.chunk_rest(seq__6989__$1);
var G__9106 = c__5673__auto__;
var G__9107 = cljs.core.count(c__5673__auto__);
var G__9108 = (0);
seq__6989 = G__9105;
chunk__6990 = G__9106;
count__6991 = G__9107;
i__6992 = G__9108;
continue;
} else {
var s = cljs.core.first(seq__6989__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__9109 = cljs.core.next(seq__6989__$1);
var G__9110 = null;
var G__9111 = (0);
var G__9112 = (0);
seq__6989 = G__9109;
chunk__6990 = G__9110;
count__6991 = G__9111;
i__6992 = G__9112;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}

break;
case "with":
var seq__7003 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__7004 = null;
var count__7005 = (0);
var i__7006 = (0);
while(true){
if((i__7006 < count__7005)){
var s = chunk__7004.cljs$core$IIndexed$_nth$arity$2(null,i__7006);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__9113 = seq__7003;
var G__9114 = chunk__7004;
var G__9115 = count__7005;
var G__9116 = (i__7006 + (1));
seq__7003 = G__9113;
chunk__7004 = G__9114;
count__7005 = G__9115;
i__7006 = G__9116;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7003);
if(temp__5823__auto__){
var seq__7003__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7003__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7003__$1);
var G__9117 = cljs.core.chunk_rest(seq__7003__$1);
var G__9118 = c__5673__auto__;
var G__9119 = cljs.core.count(c__5673__auto__);
var G__9120 = (0);
seq__7003 = G__9117;
chunk__7004 = G__9118;
count__7005 = G__9119;
i__7006 = G__9120;
continue;
} else {
var s = cljs.core.first(seq__7003__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__9121 = cljs.core.next(seq__7003__$1);
var G__9122 = null;
var G__9123 = (0);
var G__9124 = (0);
seq__7003 = G__9121;
chunk__7004 = G__9122;
count__7005 = G__9123;
i__7006 = G__9124;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "case":
nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(stmt));

var seq__7013_9125 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__7014_9126 = null;
var count__7015_9127 = (0);
var i__7016_9128 = (0);
while(true){
if((i__7016_9128 < count__7015_9127)){
var clause_9129 = chunk__7014_9126.cljs$core$IIndexed$_nth$arity$2(null,i__7016_9128);
var G__7024_9130 = env;
var G__7025_9131 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_9129);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__7024_9130,G__7025_9131) : nex.typechecker.check_statement.call(null,G__7024_9130,G__7025_9131));


var G__9132 = seq__7013_9125;
var G__9133 = chunk__7014_9126;
var G__9134 = count__7015_9127;
var G__9135 = (i__7016_9128 + (1));
seq__7013_9125 = G__9132;
chunk__7014_9126 = G__9133;
count__7015_9127 = G__9134;
i__7016_9128 = G__9135;
continue;
} else {
var temp__5823__auto___9136 = cljs.core.seq(seq__7013_9125);
if(temp__5823__auto___9136){
var seq__7013_9137__$1 = temp__5823__auto___9136;
if(cljs.core.chunked_seq_QMARK_(seq__7013_9137__$1)){
var c__5673__auto___9138 = cljs.core.chunk_first(seq__7013_9137__$1);
var G__9139 = cljs.core.chunk_rest(seq__7013_9137__$1);
var G__9140 = c__5673__auto___9138;
var G__9141 = cljs.core.count(c__5673__auto___9138);
var G__9142 = (0);
seq__7013_9125 = G__9139;
chunk__7014_9126 = G__9140;
count__7015_9127 = G__9141;
i__7016_9128 = G__9142;
continue;
} else {
var clause_9143 = cljs.core.first(seq__7013_9137__$1);
var G__7026_9144 = env;
var G__7027_9145 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_9143);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__7026_9144,G__7027_9145) : nex.typechecker.check_statement.call(null,G__7026_9144,G__7027_9145));


var G__9146 = cljs.core.next(seq__7013_9137__$1);
var G__9147 = null;
var G__9148 = (0);
var G__9149 = (0);
seq__7013_9125 = G__9146;
chunk__7014_9126 = G__9147;
count__7015_9127 = G__9148;
i__7016_9128 = G__9149;
continue;
}
} else {
}
}
break;
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(stmt);
if(cljs.core.truth_(temp__5823__auto__)){
var else_stmt = temp__5823__auto__;
return (nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,else_stmt) : nex.typechecker.check_statement.call(null,env,else_stmt));
} else {
return null;
}

break;
case "raise":
return nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(stmt));

break;
case "retry":
return null;

break;
case "member-assign":
var field_name = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt);
var field_type = nex.typechecker.env_lookup_var(env,field_name);
var val_type = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(stmt));
if(cljs.core.truth_((function (){var and__5140__auto__ = field_type;
if(cljs.core.truth_(and__5140__auto__)){
return val_type;
} else {
return and__5140__auto__;
}
})())){
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,val_type,field_type))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in assignment to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(val_type))+" to field of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(field_type))))], null));
}
} else {
return null;
}

break;
default:
return null;

}
} else {
return null;
}
});
/**
 * Check if an AST node or any of its descendants references 'result' or 'Result'.
 */
nex.typechecker.references_result_QMARK_ = (function nex$typechecker$references_result_QMARK_(node){
if((node == null)){
return false;
} else {
if(typeof node === 'string'){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,"result")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,"Result")));
} else {
if(cljs.core.sequential_QMARK_(node)){
return cljs.core.some(nex.typechecker.references_result_QMARK_,node);
} else {
if(cljs.core.map_QMARK_(node)){
var G__7035 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__7035__$1 = (((G__7035 instanceof cljs.core.Keyword))?G__7035.fqn:null);
switch (G__7035__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__7036 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7036) : nex.typechecker.references_result_QMARK_.call(null,G__7036));
}
}

break;
case "let":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__7037 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7037) : nex.typechecker.references_result_QMARK_.call(null,G__7037));
}
}

break;
case "identifier":
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"result")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"Result")));

break;
case "anonymous-function":
return false;

break;
default:
return cljs.core.some(nex.typechecker.references_result_QMARK_,cljs.core.vals(node));

}
} else {
return false;

}
}
}
}
});
/**
 * Check a method definition
 */
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__7040){
var map__7042 = p__7040;
var map__7042__$1 = cljs.core.__destructure_map(map__7042);
var method = map__7042__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__7043_9173 = cljs.core.seq(params);
var chunk__7044_9174 = null;
var count__7045_9175 = (0);
var i__7046_9176 = (0);
while(true){
if((i__7046_9176 < count__7045_9175)){
var param_9180 = chunk__7044_9174.cljs$core$IIndexed$_nth$arity$2(null,i__7046_9176);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9180))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9180));
} else {
}


var G__9181 = seq__7043_9173;
var G__9182 = chunk__7044_9174;
var G__9183 = count__7045_9175;
var G__9184 = (i__7046_9176 + (1));
seq__7043_9173 = G__9181;
chunk__7044_9174 = G__9182;
count__7045_9175 = G__9183;
i__7046_9176 = G__9184;
continue;
} else {
var temp__5823__auto___9185 = cljs.core.seq(seq__7043_9173);
if(temp__5823__auto___9185){
var seq__7043_9186__$1 = temp__5823__auto___9185;
if(cljs.core.chunked_seq_QMARK_(seq__7043_9186__$1)){
var c__5673__auto___9187 = cljs.core.chunk_first(seq__7043_9186__$1);
var G__9188 = cljs.core.chunk_rest(seq__7043_9186__$1);
var G__9189 = c__5673__auto___9187;
var G__9190 = cljs.core.count(c__5673__auto___9187);
var G__9191 = (0);
seq__7043_9173 = G__9188;
chunk__7044_9174 = G__9189;
count__7045_9175 = G__9190;
i__7046_9176 = G__9191;
continue;
} else {
var param_9192 = cljs.core.first(seq__7043_9186__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9192))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9192));
} else {
}


var G__9193 = cljs.core.next(seq__7043_9186__$1);
var G__9194 = null;
var G__9195 = (0);
var G__9196 = (0);
seq__7043_9173 = G__9193;
chunk__7044_9174 = G__9194;
count__7045_9175 = G__9195;
i__7046_9176 = G__9196;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(return_type)){
nex.typechecker.validate_type_annotation(env,return_type);
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(return_type);
if(and__5140__auto__){
var or__5142__auto__ = cljs.core.some(nex.typechecker.references_result_QMARK_,body);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__7038_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__7038_SHARP_));
}),ensure);
}
} else {
return and__5140__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Return type required for method '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' because it uses Result"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' uses Result but does not declare a return type. "+"Use: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"(...): <ReturnType>"))], null));
} else {
}

var method_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(method_env,"__current_class__",class_name);

var seq__7060_9197 = cljs.core.seq(params);
var chunk__7061_9198 = null;
var count__7062_9199 = (0);
var i__7063_9200 = (0);
while(true){
if((i__7063_9200 < count__7062_9199)){
var param_9201 = chunk__7061_9198.cljs$core$IIndexed$_nth$arity$2(null,i__7063_9200);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9201),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9201);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9202 = seq__7060_9197;
var G__9203 = chunk__7061_9198;
var G__9204 = count__7062_9199;
var G__9205 = (i__7063_9200 + (1));
seq__7060_9197 = G__9202;
chunk__7061_9198 = G__9203;
count__7062_9199 = G__9204;
i__7063_9200 = G__9205;
continue;
} else {
var temp__5823__auto___9206 = cljs.core.seq(seq__7060_9197);
if(temp__5823__auto___9206){
var seq__7060_9207__$1 = temp__5823__auto___9206;
if(cljs.core.chunked_seq_QMARK_(seq__7060_9207__$1)){
var c__5673__auto___9208 = cljs.core.chunk_first(seq__7060_9207__$1);
var G__9209 = cljs.core.chunk_rest(seq__7060_9207__$1);
var G__9210 = c__5673__auto___9208;
var G__9211 = cljs.core.count(c__5673__auto___9208);
var G__9212 = (0);
seq__7060_9197 = G__9209;
chunk__7061_9198 = G__9210;
count__7062_9199 = G__9211;
i__7063_9200 = G__9212;
continue;
} else {
var param_9213 = cljs.core.first(seq__7060_9207__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9213),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9213);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9214 = cljs.core.next(seq__7060_9207__$1);
var G__9215 = null;
var G__9216 = (0);
var G__9217 = (0);
seq__7060_9197 = G__9214;
chunk__7061_9198 = G__9215;
count__7062_9199 = G__9216;
i__7063_9200 = G__9217;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(return_type)){
nex.typechecker.env_add_var(method_env,"Result",return_type);

nex.typechecker.env_add_var(method_env,"result",return_type);
} else {
}

var seq__7072_9218 = cljs.core.seq(require__$1);
var chunk__7073_9219 = null;
var count__7074_9220 = (0);
var i__7075_9221 = (0);
while(true){
if((i__7075_9221 < count__7074_9220)){
var assertion_9222 = chunk__7073_9219.cljs$core$IIndexed$_nth$arity$2(null,i__7075_9221);
var cond_type_9223 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9222));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9223,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9223)))], null));
}


var G__9225 = seq__7072_9218;
var G__9226 = chunk__7073_9219;
var G__9227 = count__7074_9220;
var G__9228 = (i__7075_9221 + (1));
seq__7072_9218 = G__9225;
chunk__7073_9219 = G__9226;
count__7074_9220 = G__9227;
i__7075_9221 = G__9228;
continue;
} else {
var temp__5823__auto___9229 = cljs.core.seq(seq__7072_9218);
if(temp__5823__auto___9229){
var seq__7072_9230__$1 = temp__5823__auto___9229;
if(cljs.core.chunked_seq_QMARK_(seq__7072_9230__$1)){
var c__5673__auto___9231 = cljs.core.chunk_first(seq__7072_9230__$1);
var G__9232 = cljs.core.chunk_rest(seq__7072_9230__$1);
var G__9233 = c__5673__auto___9231;
var G__9234 = cljs.core.count(c__5673__auto___9231);
var G__9235 = (0);
seq__7072_9218 = G__9232;
chunk__7073_9219 = G__9233;
count__7074_9220 = G__9234;
i__7075_9221 = G__9235;
continue;
} else {
var assertion_9236 = cljs.core.first(seq__7072_9230__$1);
var cond_type_9237 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9237,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9237)))], null));
}


var G__9238 = cljs.core.next(seq__7072_9230__$1);
var G__9239 = null;
var G__9240 = (0);
var G__9241 = (0);
seq__7072_9218 = G__9238;
chunk__7073_9219 = G__9239;
count__7074_9220 = G__9240;
i__7075_9221 = G__9241;
continue;
}
} else {
}
}
break;
}

var seq__7077_9242 = cljs.core.seq(body);
var chunk__7078_9243 = null;
var count__7079_9244 = (0);
var i__7080_9245 = (0);
while(true){
if((i__7080_9245 < count__7079_9244)){
var stmt_9246 = chunk__7078_9243.cljs$core$IIndexed$_nth$arity$2(null,i__7080_9245);
nex.typechecker.check_statement(method_env,stmt_9246);


var G__9247 = seq__7077_9242;
var G__9248 = chunk__7078_9243;
var G__9249 = count__7079_9244;
var G__9250 = (i__7080_9245 + (1));
seq__7077_9242 = G__9247;
chunk__7078_9243 = G__9248;
count__7079_9244 = G__9249;
i__7080_9245 = G__9250;
continue;
} else {
var temp__5823__auto___9251 = cljs.core.seq(seq__7077_9242);
if(temp__5823__auto___9251){
var seq__7077_9252__$1 = temp__5823__auto___9251;
if(cljs.core.chunked_seq_QMARK_(seq__7077_9252__$1)){
var c__5673__auto___9253 = cljs.core.chunk_first(seq__7077_9252__$1);
var G__9254 = cljs.core.chunk_rest(seq__7077_9252__$1);
var G__9255 = c__5673__auto___9253;
var G__9256 = cljs.core.count(c__5673__auto___9253);
var G__9257 = (0);
seq__7077_9242 = G__9254;
chunk__7078_9243 = G__9255;
count__7079_9244 = G__9256;
i__7080_9245 = G__9257;
continue;
} else {
var stmt_9258 = cljs.core.first(seq__7077_9252__$1);
nex.typechecker.check_statement(method_env,stmt_9258);


var G__9259 = cljs.core.next(seq__7077_9252__$1);
var G__9260 = null;
var G__9261 = (0);
var G__9262 = (0);
seq__7077_9242 = G__9259;
chunk__7078_9243 = G__9260;
count__7079_9244 = G__9261;
i__7080_9245 = G__9262;
continue;
}
} else {
}
}
break;
}

var seq__7082_9263 = cljs.core.seq(ensure);
var chunk__7083_9264 = null;
var count__7084_9265 = (0);
var i__7085_9266 = (0);
while(true){
if((i__7085_9266 < count__7084_9265)){
var assertion_9267 = chunk__7083_9264.cljs$core$IIndexed$_nth$arity$2(null,i__7085_9266);
var cond_type_9268 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9267));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9268,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9268)))], null));
}


var G__9269 = seq__7082_9263;
var G__9270 = chunk__7083_9264;
var G__9271 = count__7084_9265;
var G__9272 = (i__7085_9266 + (1));
seq__7082_9263 = G__9269;
chunk__7083_9264 = G__9270;
count__7084_9265 = G__9271;
i__7085_9266 = G__9272;
continue;
} else {
var temp__5823__auto___9273 = cljs.core.seq(seq__7082_9263);
if(temp__5823__auto___9273){
var seq__7082_9274__$1 = temp__5823__auto___9273;
if(cljs.core.chunked_seq_QMARK_(seq__7082_9274__$1)){
var c__5673__auto___9275 = cljs.core.chunk_first(seq__7082_9274__$1);
var G__9276 = cljs.core.chunk_rest(seq__7082_9274__$1);
var G__9277 = c__5673__auto___9275;
var G__9278 = cljs.core.count(c__5673__auto___9275);
var G__9279 = (0);
seq__7082_9263 = G__9276;
chunk__7083_9264 = G__9277;
count__7084_9265 = G__9278;
i__7085_9266 = G__9279;
continue;
} else {
var assertion_9280 = cljs.core.first(seq__7082_9274__$1);
var cond_type_9281 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9280));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9281,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9281)))], null));
}


var G__9283 = cljs.core.next(seq__7082_9274__$1);
var G__9284 = null;
var G__9285 = (0);
var G__9286 = (0);
seq__7082_9263 = G__9283;
chunk__7083_9264 = G__9284;
count__7084_9265 = G__9285;
i__7085_9266 = G__9286;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(rescue)){
var rescue_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(method_env);
nex.typechecker.env_add_var(rescue_env,"exception","Any");

var seq__7088 = cljs.core.seq(rescue);
var chunk__7089 = null;
var count__7090 = (0);
var i__7091 = (0);
while(true){
if((i__7091 < count__7090)){
var stmt = chunk__7089.cljs$core$IIndexed$_nth$arity$2(null,i__7091);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9287 = seq__7088;
var G__9288 = chunk__7089;
var G__9289 = count__7090;
var G__9290 = (i__7091 + (1));
seq__7088 = G__9287;
chunk__7089 = G__9288;
count__7090 = G__9289;
i__7091 = G__9290;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7088);
if(temp__5823__auto__){
var seq__7088__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7088__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7088__$1);
var G__9291 = cljs.core.chunk_rest(seq__7088__$1);
var G__9292 = c__5673__auto__;
var G__9293 = cljs.core.count(c__5673__auto__);
var G__9294 = (0);
seq__7088 = G__9291;
chunk__7089 = G__9292;
count__7090 = G__9293;
i__7091 = G__9294;
continue;
} else {
var stmt = cljs.core.first(seq__7088__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9297 = cljs.core.next(seq__7088__$1);
var G__9298 = null;
var G__9299 = (0);
var G__9300 = (0);
seq__7088 = G__9297;
chunk__7089 = G__9298;
count__7090 = G__9299;
i__7091 = G__9300;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Check a constructor definition
 */
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__7092){
var map__7093 = p__7092;
var map__7093__$1 = cljs.core.__destructure_map(map__7093);
var constructor$ = map__7093__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7093__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__7101_9302 = cljs.core.seq(params);
var chunk__7102_9303 = null;
var count__7103_9304 = (0);
var i__7104_9305 = (0);
while(true){
if((i__7104_9305 < count__7103_9304)){
var param_9306 = chunk__7102_9303.cljs$core$IIndexed$_nth$arity$2(null,i__7104_9305);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9306))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9306));
} else {
}


var G__9307 = seq__7101_9302;
var G__9308 = chunk__7102_9303;
var G__9309 = count__7103_9304;
var G__9310 = (i__7104_9305 + (1));
seq__7101_9302 = G__9307;
chunk__7102_9303 = G__9308;
count__7103_9304 = G__9309;
i__7104_9305 = G__9310;
continue;
} else {
var temp__5823__auto___9311 = cljs.core.seq(seq__7101_9302);
if(temp__5823__auto___9311){
var seq__7101_9312__$1 = temp__5823__auto___9311;
if(cljs.core.chunked_seq_QMARK_(seq__7101_9312__$1)){
var c__5673__auto___9313 = cljs.core.chunk_first(seq__7101_9312__$1);
var G__9314 = cljs.core.chunk_rest(seq__7101_9312__$1);
var G__9315 = c__5673__auto___9313;
var G__9316 = cljs.core.count(c__5673__auto___9313);
var G__9317 = (0);
seq__7101_9302 = G__9314;
chunk__7102_9303 = G__9315;
count__7103_9304 = G__9316;
i__7104_9305 = G__9317;
continue;
} else {
var param_9318 = cljs.core.first(seq__7101_9312__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9318))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9318));
} else {
}


var G__9319 = cljs.core.next(seq__7101_9312__$1);
var G__9320 = null;
var G__9321 = (0);
var G__9322 = (0);
seq__7101_9302 = G__9319;
chunk__7102_9303 = G__9320;
count__7103_9304 = G__9321;
i__7104_9305 = G__9322;
continue;
}
} else {
}
}
break;
}

var seq__7111_9323 = cljs.core.seq(params);
var chunk__7112_9324 = null;
var count__7113_9325 = (0);
var i__7114_9326 = (0);
while(true){
if((i__7114_9326 < count__7113_9325)){
var param_9327 = chunk__7112_9324.cljs$core$IIndexed$_nth$arity$2(null,i__7114_9326);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9327),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9327);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9328 = seq__7111_9323;
var G__9329 = chunk__7112_9324;
var G__9330 = count__7113_9325;
var G__9331 = (i__7114_9326 + (1));
seq__7111_9323 = G__9328;
chunk__7112_9324 = G__9329;
count__7113_9325 = G__9330;
i__7114_9326 = G__9331;
continue;
} else {
var temp__5823__auto___9332 = cljs.core.seq(seq__7111_9323);
if(temp__5823__auto___9332){
var seq__7111_9333__$1 = temp__5823__auto___9332;
if(cljs.core.chunked_seq_QMARK_(seq__7111_9333__$1)){
var c__5673__auto___9334 = cljs.core.chunk_first(seq__7111_9333__$1);
var G__9335 = cljs.core.chunk_rest(seq__7111_9333__$1);
var G__9336 = c__5673__auto___9334;
var G__9337 = cljs.core.count(c__5673__auto___9334);
var G__9338 = (0);
seq__7111_9323 = G__9335;
chunk__7112_9324 = G__9336;
count__7113_9325 = G__9337;
i__7114_9326 = G__9338;
continue;
} else {
var param_9339 = cljs.core.first(seq__7111_9333__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9339),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9339);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9340 = cljs.core.next(seq__7111_9333__$1);
var G__9341 = null;
var G__9342 = (0);
var G__9343 = (0);
seq__7111_9323 = G__9340;
chunk__7112_9324 = G__9341;
count__7113_9325 = G__9342;
i__7114_9326 = G__9343;
continue;
}
} else {
}
}
break;
}

var seq__7125_9344 = cljs.core.seq(require__$1);
var chunk__7126_9345 = null;
var count__7127_9346 = (0);
var i__7128_9347 = (0);
while(true){
if((i__7128_9347 < count__7127_9346)){
var assertion_9349 = chunk__7126_9345.cljs$core$IIndexed$_nth$arity$2(null,i__7128_9347);
if(cljs.core.truth_(assertion_9349)){
var cond_type_9350 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9349));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9350,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9350)))], null));
}
} else {
}


var G__9351 = seq__7125_9344;
var G__9352 = chunk__7126_9345;
var G__9353 = count__7127_9346;
var G__9354 = (i__7128_9347 + (1));
seq__7125_9344 = G__9351;
chunk__7126_9345 = G__9352;
count__7127_9346 = G__9353;
i__7128_9347 = G__9354;
continue;
} else {
var temp__5823__auto___9355 = cljs.core.seq(seq__7125_9344);
if(temp__5823__auto___9355){
var seq__7125_9356__$1 = temp__5823__auto___9355;
if(cljs.core.chunked_seq_QMARK_(seq__7125_9356__$1)){
var c__5673__auto___9357 = cljs.core.chunk_first(seq__7125_9356__$1);
var G__9358 = cljs.core.chunk_rest(seq__7125_9356__$1);
var G__9359 = c__5673__auto___9357;
var G__9360 = cljs.core.count(c__5673__auto___9357);
var G__9361 = (0);
seq__7125_9344 = G__9358;
chunk__7126_9345 = G__9359;
count__7127_9346 = G__9360;
i__7128_9347 = G__9361;
continue;
} else {
var assertion_9362 = cljs.core.first(seq__7125_9356__$1);
if(cljs.core.truth_(assertion_9362)){
var cond_type_9363 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9362));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9363,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9363)))], null));
}
} else {
}


var G__9364 = cljs.core.next(seq__7125_9356__$1);
var G__9365 = null;
var G__9366 = (0);
var G__9367 = (0);
seq__7125_9344 = G__9364;
chunk__7126_9345 = G__9365;
count__7127_9346 = G__9366;
i__7128_9347 = G__9367;
continue;
}
} else {
}
}
break;
}

var seq__7138_9368 = cljs.core.seq(body);
var chunk__7139_9369 = null;
var count__7140_9370 = (0);
var i__7141_9371 = (0);
while(true){
if((i__7141_9371 < count__7140_9370)){
var stmt_9372 = chunk__7139_9369.cljs$core$IIndexed$_nth$arity$2(null,i__7141_9371);
nex.typechecker.check_statement(ctor_env,stmt_9372);


var G__9377 = seq__7138_9368;
var G__9378 = chunk__7139_9369;
var G__9379 = count__7140_9370;
var G__9380 = (i__7141_9371 + (1));
seq__7138_9368 = G__9377;
chunk__7139_9369 = G__9378;
count__7140_9370 = G__9379;
i__7141_9371 = G__9380;
continue;
} else {
var temp__5823__auto___9381 = cljs.core.seq(seq__7138_9368);
if(temp__5823__auto___9381){
var seq__7138_9382__$1 = temp__5823__auto___9381;
if(cljs.core.chunked_seq_QMARK_(seq__7138_9382__$1)){
var c__5673__auto___9383 = cljs.core.chunk_first(seq__7138_9382__$1);
var G__9388 = cljs.core.chunk_rest(seq__7138_9382__$1);
var G__9389 = c__5673__auto___9383;
var G__9390 = cljs.core.count(c__5673__auto___9383);
var G__9391 = (0);
seq__7138_9368 = G__9388;
chunk__7139_9369 = G__9389;
count__7140_9370 = G__9390;
i__7141_9371 = G__9391;
continue;
} else {
var stmt_9392 = cljs.core.first(seq__7138_9382__$1);
nex.typechecker.check_statement(ctor_env,stmt_9392);


var G__9397 = cljs.core.next(seq__7138_9382__$1);
var G__9398 = null;
var G__9399 = (0);
var G__9400 = (0);
seq__7138_9368 = G__9397;
chunk__7139_9369 = G__9398;
count__7140_9370 = G__9399;
i__7141_9371 = G__9400;
continue;
}
} else {
}
}
break;
}

var seq__7142_9401 = cljs.core.seq(ensure);
var chunk__7143_9402 = null;
var count__7144_9403 = (0);
var i__7145_9404 = (0);
while(true){
if((i__7145_9404 < count__7144_9403)){
var assertion_9405 = chunk__7143_9402.cljs$core$IIndexed$_nth$arity$2(null,i__7145_9404);
if(cljs.core.truth_(assertion_9405)){
var cond_type_9406 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9405));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9406,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9406)))], null));
}
} else {
}


var G__9411 = seq__7142_9401;
var G__9412 = chunk__7143_9402;
var G__9413 = count__7144_9403;
var G__9414 = (i__7145_9404 + (1));
seq__7142_9401 = G__9411;
chunk__7143_9402 = G__9412;
count__7144_9403 = G__9413;
i__7145_9404 = G__9414;
continue;
} else {
var temp__5823__auto___9415 = cljs.core.seq(seq__7142_9401);
if(temp__5823__auto___9415){
var seq__7142_9416__$1 = temp__5823__auto___9415;
if(cljs.core.chunked_seq_QMARK_(seq__7142_9416__$1)){
var c__5673__auto___9421 = cljs.core.chunk_first(seq__7142_9416__$1);
var G__9422 = cljs.core.chunk_rest(seq__7142_9416__$1);
var G__9423 = c__5673__auto___9421;
var G__9424 = cljs.core.count(c__5673__auto___9421);
var G__9425 = (0);
seq__7142_9401 = G__9422;
chunk__7143_9402 = G__9423;
count__7144_9403 = G__9424;
i__7145_9404 = G__9425;
continue;
} else {
var assertion_9426 = cljs.core.first(seq__7142_9416__$1);
if(cljs.core.truth_(assertion_9426)){
var cond_type_9427 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9426));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9427,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9427)))], null));
}
} else {
}


var G__9432 = cljs.core.next(seq__7142_9416__$1);
var G__9433 = null;
var G__9434 = (0);
var G__9435 = (0);
seq__7142_9401 = G__9432;
chunk__7143_9402 = G__9433;
count__7144_9403 = G__9434;
i__7145_9404 = G__9435;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(rescue)){
var rescue_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(ctor_env);
nex.typechecker.env_add_var(rescue_env,"exception","Any");

var seq__7153 = cljs.core.seq(rescue);
var chunk__7154 = null;
var count__7155 = (0);
var i__7156 = (0);
while(true){
if((i__7156 < count__7155)){
var stmt = chunk__7154.cljs$core$IIndexed$_nth$arity$2(null,i__7156);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9436 = seq__7153;
var G__9437 = chunk__7154;
var G__9438 = count__7155;
var G__9439 = (i__7156 + (1));
seq__7153 = G__9436;
chunk__7154 = G__9437;
count__7155 = G__9438;
i__7156 = G__9439;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7153);
if(temp__5823__auto__){
var seq__7153__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7153__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7153__$1);
var G__9440 = cljs.core.chunk_rest(seq__7153__$1);
var G__9441 = c__5673__auto__;
var G__9442 = cljs.core.count(c__5673__auto__);
var G__9443 = (0);
seq__7153 = G__9440;
chunk__7154 = G__9441;
count__7155 = G__9442;
i__7156 = G__9443;
continue;
} else {
var stmt = cljs.core.first(seq__7153__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9444 = cljs.core.next(seq__7153__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__7153 = G__9444;
chunk__7154 = G__9445;
count__7155 = G__9446;
i__7156 = G__9447;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Collect class information (first pass)
 */
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__7160){
var map__7162 = p__7160;
var map__7162__$1 = cljs.core.__destructure_map(map__7162);
var class_def = map__7162__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7162__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var seq__7163_9448 = cljs.core.seq(body);
var chunk__7164_9449 = null;
var count__7165_9450 = (0);
var i__7166_9451 = (0);
while(true){
if((i__7166_9451 < count__7165_9450)){
var section_9452 = chunk__7164_9449.cljs$core$IIndexed$_nth$arity$2(null,i__7166_9451);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9452),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7177_9453 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9452));
var chunk__7178_9454 = null;
var count__7179_9455 = (0);
var i__7180_9456 = (0);
while(true){
if((i__7180_9456 < count__7179_9455)){
var member_9461 = chunk__7178_9454.cljs$core$IIndexed$_nth$arity$2(null,i__7180_9456);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9461),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9461),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9461));
} else {
}


var G__9462 = seq__7177_9453;
var G__9463 = chunk__7178_9454;
var G__9464 = count__7179_9455;
var G__9465 = (i__7180_9456 + (1));
seq__7177_9453 = G__9462;
chunk__7178_9454 = G__9463;
count__7179_9455 = G__9464;
i__7180_9456 = G__9465;
continue;
} else {
var temp__5823__auto___9470 = cljs.core.seq(seq__7177_9453);
if(temp__5823__auto___9470){
var seq__7177_9471__$1 = temp__5823__auto___9470;
if(cljs.core.chunked_seq_QMARK_(seq__7177_9471__$1)){
var c__5673__auto___9476 = cljs.core.chunk_first(seq__7177_9471__$1);
var G__9477 = cljs.core.chunk_rest(seq__7177_9471__$1);
var G__9478 = c__5673__auto___9476;
var G__9479 = cljs.core.count(c__5673__auto___9476);
var G__9480 = (0);
seq__7177_9453 = G__9477;
chunk__7178_9454 = G__9478;
count__7179_9455 = G__9479;
i__7180_9456 = G__9480;
continue;
} else {
var member_9481 = cljs.core.first(seq__7177_9471__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9481),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9481),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9481));
} else {
}


var G__9482 = cljs.core.next(seq__7177_9471__$1);
var G__9483 = null;
var G__9484 = (0);
var G__9485 = (0);
seq__7177_9453 = G__9482;
chunk__7178_9454 = G__9483;
count__7179_9455 = G__9484;
i__7180_9456 = G__9485;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__9486 = seq__7163_9448;
var G__9487 = chunk__7164_9449;
var G__9488 = count__7165_9450;
var G__9489 = (i__7166_9451 + (1));
seq__7163_9448 = G__9486;
chunk__7164_9449 = G__9487;
count__7165_9450 = G__9488;
i__7166_9451 = G__9489;
continue;
} else {
var temp__5823__auto___9490 = cljs.core.seq(seq__7163_9448);
if(temp__5823__auto___9490){
var seq__7163_9491__$1 = temp__5823__auto___9490;
if(cljs.core.chunked_seq_QMARK_(seq__7163_9491__$1)){
var c__5673__auto___9492 = cljs.core.chunk_first(seq__7163_9491__$1);
var G__9493 = cljs.core.chunk_rest(seq__7163_9491__$1);
var G__9494 = c__5673__auto___9492;
var G__9495 = cljs.core.count(c__5673__auto___9492);
var G__9496 = (0);
seq__7163_9448 = G__9493;
chunk__7164_9449 = G__9494;
count__7165_9450 = G__9495;
i__7166_9451 = G__9496;
continue;
} else {
var section_9500 = cljs.core.first(seq__7163_9491__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9500),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7191_9501 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9500));
var chunk__7192_9502 = null;
var count__7193_9503 = (0);
var i__7194_9504 = (0);
while(true){
if((i__7194_9504 < count__7193_9503)){
var member_9505 = chunk__7192_9502.cljs$core$IIndexed$_nth$arity$2(null,i__7194_9504);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9505),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9505),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9505));
} else {
}


var G__9510 = seq__7191_9501;
var G__9511 = chunk__7192_9502;
var G__9512 = count__7193_9503;
var G__9513 = (i__7194_9504 + (1));
seq__7191_9501 = G__9510;
chunk__7192_9502 = G__9511;
count__7193_9503 = G__9512;
i__7194_9504 = G__9513;
continue;
} else {
var temp__5823__auto___9514__$1 = cljs.core.seq(seq__7191_9501);
if(temp__5823__auto___9514__$1){
var seq__7191_9519__$1 = temp__5823__auto___9514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7191_9519__$1)){
var c__5673__auto___9520 = cljs.core.chunk_first(seq__7191_9519__$1);
var G__9521 = cljs.core.chunk_rest(seq__7191_9519__$1);
var G__9522 = c__5673__auto___9520;
var G__9523 = cljs.core.count(c__5673__auto___9520);
var G__9524 = (0);
seq__7191_9501 = G__9521;
chunk__7192_9502 = G__9522;
count__7193_9503 = G__9523;
i__7194_9504 = G__9524;
continue;
} else {
var member_9525 = cljs.core.first(seq__7191_9519__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9525),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9525),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9525));
} else {
}


var G__9530 = cljs.core.next(seq__7191_9519__$1);
var G__9531 = null;
var G__9532 = (0);
var G__9533 = (0);
seq__7191_9501 = G__9530;
chunk__7192_9502 = G__9531;
count__7193_9503 = G__9532;
i__7194_9504 = G__9533;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__9534 = cljs.core.next(seq__7163_9491__$1);
var G__9535 = null;
var G__9536 = (0);
var G__9537 = (0);
seq__7163_9448 = G__9534;
chunk__7164_9449 = G__9535;
count__7165_9450 = G__9536;
i__7166_9451 = G__9537;
continue;
}
} else {
}
}
break;
}

var seq__7201 = cljs.core.seq(body);
var chunk__7202 = null;
var count__7203 = (0);
var i__7204 = (0);
while(true){
if((i__7204 < count__7203)){
var section = chunk__7202.cljs$core$IIndexed$_nth$arity$2(null,i__7204);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7232_9538 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7233_9539 = null;
var count__7234_9540 = (0);
var i__7235_9541 = (0);
while(true){
if((i__7235_9541 < count__7234_9540)){
var member_9542 = chunk__7233_9539.cljs$core$IIndexed$_nth$arity$2(null,i__7235_9541);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9542),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9542),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9542)], null));
} else {
}


var G__9543 = seq__7232_9538;
var G__9544 = chunk__7233_9539;
var G__9545 = count__7234_9540;
var G__9546 = (i__7235_9541 + (1));
seq__7232_9538 = G__9543;
chunk__7233_9539 = G__9544;
count__7234_9540 = G__9545;
i__7235_9541 = G__9546;
continue;
} else {
var temp__5823__auto___9547 = cljs.core.seq(seq__7232_9538);
if(temp__5823__auto___9547){
var seq__7232_9548__$1 = temp__5823__auto___9547;
if(cljs.core.chunked_seq_QMARK_(seq__7232_9548__$1)){
var c__5673__auto___9549 = cljs.core.chunk_first(seq__7232_9548__$1);
var G__9550 = cljs.core.chunk_rest(seq__7232_9548__$1);
var G__9551 = c__5673__auto___9549;
var G__9552 = cljs.core.count(c__5673__auto___9549);
var G__9553 = (0);
seq__7232_9538 = G__9550;
chunk__7233_9539 = G__9551;
count__7234_9540 = G__9552;
i__7235_9541 = G__9553;
continue;
} else {
var member_9554 = cljs.core.first(seq__7232_9548__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9554),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9554),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9554),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9554)], null));
} else {
}


var G__9555 = cljs.core.next(seq__7232_9548__$1);
var G__9556 = null;
var G__9557 = (0);
var G__9558 = (0);
seq__7232_9538 = G__9555;
chunk__7233_9539 = G__9556;
count__7234_9540 = G__9557;
i__7235_9541 = G__9558;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7239_9559 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7243_9560 = null;
var count__7244_9561 = (0);
var i__7245_9562 = (0);
while(true){
if((i__7245_9562 < count__7244_9561)){
var ctor_9563 = chunk__7243_9560.cljs$core$IIndexed$_nth$arity$2(null,i__7245_9562);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9563),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9563),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9568 = seq__7239_9559;
var G__9569 = chunk__7243_9560;
var G__9570 = count__7244_9561;
var G__9571 = (i__7245_9562 + (1));
seq__7239_9559 = G__9568;
chunk__7243_9560 = G__9569;
count__7244_9561 = G__9570;
i__7245_9562 = G__9571;
continue;
} else {
var temp__5823__auto___9576 = cljs.core.seq(seq__7239_9559);
if(temp__5823__auto___9576){
var seq__7239_9577__$1 = temp__5823__auto___9576;
if(cljs.core.chunked_seq_QMARK_(seq__7239_9577__$1)){
var c__5673__auto___9578 = cljs.core.chunk_first(seq__7239_9577__$1);
var G__9579 = cljs.core.chunk_rest(seq__7239_9577__$1);
var G__9580 = c__5673__auto___9578;
var G__9581 = cljs.core.count(c__5673__auto___9578);
var G__9582 = (0);
seq__7239_9559 = G__9579;
chunk__7243_9560 = G__9580;
count__7244_9561 = G__9581;
i__7245_9562 = G__9582;
continue;
} else {
var ctor_9583 = cljs.core.first(seq__7239_9577__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9583),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9588 = cljs.core.next(seq__7239_9577__$1);
var G__9589 = null;
var G__9590 = (0);
var G__9591 = (0);
seq__7239_9559 = G__9588;
chunk__7243_9560 = G__9589;
count__7244_9561 = G__9590;
i__7245_9562 = G__9591;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__9592 = seq__7201;
var G__9593 = chunk__7202;
var G__9594 = count__7203;
var G__9595 = (i__7204 + (1));
seq__7201 = G__9592;
chunk__7202 = G__9593;
count__7203 = G__9594;
i__7204 = G__9595;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7201);
if(temp__5823__auto__){
var seq__7201__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7201__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7201__$1);
var G__9596 = cljs.core.chunk_rest(seq__7201__$1);
var G__9597 = c__5673__auto__;
var G__9598 = cljs.core.count(c__5673__auto__);
var G__9599 = (0);
seq__7201 = G__9596;
chunk__7202 = G__9597;
count__7203 = G__9598;
i__7204 = G__9599;
continue;
} else {
var section = cljs.core.first(seq__7201__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7250_9600 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7251_9601 = null;
var count__7252_9602 = (0);
var i__7253_9603 = (0);
while(true){
if((i__7253_9603 < count__7252_9602)){
var member_9604 = chunk__7251_9601.cljs$core$IIndexed$_nth$arity$2(null,i__7253_9603);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9604),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9604),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9604)], null));
} else {
}


var G__9607 = seq__7250_9600;
var G__9608 = chunk__7251_9601;
var G__9609 = count__7252_9602;
var G__9610 = (i__7253_9603 + (1));
seq__7250_9600 = G__9607;
chunk__7251_9601 = G__9608;
count__7252_9602 = G__9609;
i__7253_9603 = G__9610;
continue;
} else {
var temp__5823__auto___9611__$1 = cljs.core.seq(seq__7250_9600);
if(temp__5823__auto___9611__$1){
var seq__7250_9616__$1 = temp__5823__auto___9611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7250_9616__$1)){
var c__5673__auto___9617 = cljs.core.chunk_first(seq__7250_9616__$1);
var G__9619 = cljs.core.chunk_rest(seq__7250_9616__$1);
var G__9620 = c__5673__auto___9617;
var G__9621 = cljs.core.count(c__5673__auto___9617);
var G__9622 = (0);
seq__7250_9600 = G__9619;
chunk__7251_9601 = G__9620;
count__7252_9602 = G__9621;
i__7253_9603 = G__9622;
continue;
} else {
var member_9629 = cljs.core.first(seq__7250_9616__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9629),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9629),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9629)], null));
} else {
}


var G__9637 = cljs.core.next(seq__7250_9616__$1);
var G__9638 = null;
var G__9639 = (0);
var G__9640 = (0);
seq__7250_9600 = G__9637;
chunk__7251_9601 = G__9638;
count__7252_9602 = G__9639;
i__7253_9603 = G__9640;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7257_9646 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7258_9647 = null;
var count__7259_9648 = (0);
var i__7260_9649 = (0);
while(true){
if((i__7260_9649 < count__7259_9648)){
var ctor_9650 = chunk__7258_9647.cljs$core$IIndexed$_nth$arity$2(null,i__7260_9649);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9650),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9651 = seq__7257_9646;
var G__9652 = chunk__7258_9647;
var G__9653 = count__7259_9648;
var G__9654 = (i__7260_9649 + (1));
seq__7257_9646 = G__9651;
chunk__7258_9647 = G__9652;
count__7259_9648 = G__9653;
i__7260_9649 = G__9654;
continue;
} else {
var temp__5823__auto___9655__$1 = cljs.core.seq(seq__7257_9646);
if(temp__5823__auto___9655__$1){
var seq__7257_9656__$1 = temp__5823__auto___9655__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7257_9656__$1)){
var c__5673__auto___9657 = cljs.core.chunk_first(seq__7257_9656__$1);
var G__9658 = cljs.core.chunk_rest(seq__7257_9656__$1);
var G__9659 = c__5673__auto___9657;
var G__9660 = cljs.core.count(c__5673__auto___9657);
var G__9661 = (0);
seq__7257_9646 = G__9658;
chunk__7258_9647 = G__9659;
count__7259_9648 = G__9660;
i__7260_9649 = G__9661;
continue;
} else {
var ctor_9662 = cljs.core.first(seq__7257_9656__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9662),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9663 = cljs.core.next(seq__7257_9656__$1);
var G__9664 = null;
var G__9665 = (0);
var G__9666 = (0);
seq__7257_9646 = G__9663;
chunk__7258_9647 = G__9664;
count__7259_9648 = G__9665;
i__7260_9649 = G__9666;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__9667 = cljs.core.next(seq__7201__$1);
var G__9668 = null;
var G__9669 = (0);
var G__9670 = (0);
seq__7201 = G__9667;
chunk__7202 = G__9668;
count__7203 = G__9669;
i__7204 = G__9670;
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
 * Check that inheritance declarations are valid
 */
nex.typechecker.check_inheritance = (function nex$typechecker$check_inheritance(env,class_name,parents){
var seq__7265 = cljs.core.seq(parents);
var chunk__7266 = null;
var count__7267 = (0);
var i__7268 = (0);
while(true){
if((i__7268 < count__7267)){
var map__7276 = chunk__7266.cljs$core$IIndexed$_nth$arity$2(null,i__7268);
var map__7276__$1 = cljs.core.__destructure_map(map__7276);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7276__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_((function (){var or__5142__auto__ = nex.typechecker.env_lookup_class(env,parent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.builtin_type_QMARK_(parent);
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Parent class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+" not found for class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined parent class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)))], null));
}


var G__9671 = seq__7265;
var G__9672 = chunk__7266;
var G__9673 = count__7267;
var G__9674 = (i__7268 + (1));
seq__7265 = G__9671;
chunk__7266 = G__9672;
count__7267 = G__9673;
i__7268 = G__9674;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7265);
if(temp__5823__auto__){
var seq__7265__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7265__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7265__$1);
var G__9675 = cljs.core.chunk_rest(seq__7265__$1);
var G__9676 = c__5673__auto__;
var G__9677 = cljs.core.count(c__5673__auto__);
var G__9678 = (0);
seq__7265 = G__9675;
chunk__7266 = G__9676;
count__7267 = G__9677;
i__7268 = G__9678;
continue;
} else {
var map__7280 = cljs.core.first(seq__7265__$1);
var map__7280__$1 = cljs.core.__destructure_map(map__7280);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7280__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_((function (){var or__5142__auto__ = nex.typechecker.env_lookup_class(env,parent);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.builtin_type_QMARK_(parent);
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Parent class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)+" not found for class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined parent class: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent)))], null));
}


var G__9679 = cljs.core.next(seq__7265__$1);
var G__9680 = null;
var G__9681 = (0);
var G__9682 = (0);
seq__7265 = G__9679;
chunk__7266 = G__9680;
count__7267 = G__9681;
i__7268 = G__9682;
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
 * Check a class definition
 */
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__7289){
var map__7291 = p__7289;
var map__7291__$1 = cljs.core.__destructure_map(map__7291);
var class_def = map__7291__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7291__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7291__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7291__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
if(cljs.core.truth_(parents)){
nex.typechecker.check_inheritance(env,name,parents);
} else {
}

var seq__7293_9683 = cljs.core.seq(invariant);
var chunk__7294_9684 = null;
var count__7295_9685 = (0);
var i__7296_9686 = (0);
while(true){
if((i__7296_9686 < count__7295_9685)){
var assertion_9687 = chunk__7294_9684.cljs$core$IIndexed$_nth$arity$2(null,i__7296_9686);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9687;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9687);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9688 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9687));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9688,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9688,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9688)))], null));
}
} else {
}


var G__9689 = seq__7293_9683;
var G__9690 = chunk__7294_9684;
var G__9691 = count__7295_9685;
var G__9692 = (i__7296_9686 + (1));
seq__7293_9683 = G__9689;
chunk__7294_9684 = G__9690;
count__7295_9685 = G__9691;
i__7296_9686 = G__9692;
continue;
} else {
var temp__5823__auto___9693 = cljs.core.seq(seq__7293_9683);
if(temp__5823__auto___9693){
var seq__7293_9694__$1 = temp__5823__auto___9693;
if(cljs.core.chunked_seq_QMARK_(seq__7293_9694__$1)){
var c__5673__auto___9695 = cljs.core.chunk_first(seq__7293_9694__$1);
var G__9696 = cljs.core.chunk_rest(seq__7293_9694__$1);
var G__9697 = c__5673__auto___9695;
var G__9698 = cljs.core.count(c__5673__auto___9695);
var G__9699 = (0);
seq__7293_9683 = G__9696;
chunk__7294_9684 = G__9697;
count__7295_9685 = G__9698;
i__7296_9686 = G__9699;
continue;
} else {
var assertion_9700 = cljs.core.first(seq__7293_9694__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9700;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9700);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9701 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9700));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9701,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9701,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9701)))], null));
}
} else {
}


var G__9702 = cljs.core.next(seq__7293_9694__$1);
var G__9703 = null;
var G__9704 = (0);
var G__9705 = (0);
seq__7293_9683 = G__9702;
chunk__7294_9684 = G__9703;
count__7295_9685 = G__9704;
i__7296_9686 = G__9705;
continue;
}
} else {
}
}
break;
}

var seq__7301_9706 = cljs.core.seq(body);
var chunk__7302_9707 = null;
var count__7303_9708 = (0);
var i__7304_9709 = (0);
while(true){
if((i__7304_9709 < count__7303_9708)){
var section_9710 = chunk__7302_9707.cljs$core$IIndexed$_nth$arity$2(null,i__7304_9709);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9710),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7349_9711 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9710));
var chunk__7351_9712 = null;
var count__7352_9713 = (0);
var i__7353_9714 = (0);
while(true){
if((i__7353_9714 < count__7352_9713)){
var member_9715 = chunk__7351_9712.cljs$core$IIndexed$_nth$arity$2(null,i__7353_9714);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9715),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9715);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9715),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9715));
} else {
}
}


var G__9716 = seq__7349_9711;
var G__9717 = chunk__7351_9712;
var G__9718 = count__7352_9713;
var G__9719 = (i__7353_9714 + (1));
seq__7349_9711 = G__9716;
chunk__7351_9712 = G__9717;
count__7352_9713 = G__9718;
i__7353_9714 = G__9719;
continue;
} else {
var temp__5823__auto___9720 = cljs.core.seq(seq__7349_9711);
if(temp__5823__auto___9720){
var seq__7349_9721__$1 = temp__5823__auto___9720;
if(cljs.core.chunked_seq_QMARK_(seq__7349_9721__$1)){
var c__5673__auto___9722 = cljs.core.chunk_first(seq__7349_9721__$1);
var G__9723 = cljs.core.chunk_rest(seq__7349_9721__$1);
var G__9724 = c__5673__auto___9722;
var G__9725 = cljs.core.count(c__5673__auto___9722);
var G__9726 = (0);
seq__7349_9711 = G__9723;
chunk__7351_9712 = G__9724;
count__7352_9713 = G__9725;
i__7353_9714 = G__9726;
continue;
} else {
var member_9727 = cljs.core.first(seq__7349_9721__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9727),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9727);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9727),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9727));
} else {
}
}


var G__9728 = cljs.core.next(seq__7349_9721__$1);
var G__9729 = null;
var G__9730 = (0);
var G__9731 = (0);
seq__7349_9711 = G__9728;
chunk__7351_9712 = G__9729;
count__7352_9713 = G__9730;
i__7353_9714 = G__9731;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9710),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7357_9732 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9710));
var chunk__7358_9733 = null;
var count__7359_9734 = (0);
var i__7360_9735 = (0);
while(true){
if((i__7360_9735 < count__7359_9734)){
var ctor_9736 = chunk__7358_9733.cljs$core$IIndexed$_nth$arity$2(null,i__7360_9735);
nex.typechecker.check_constructor(env,name,ctor_9736);


var G__9737 = seq__7357_9732;
var G__9738 = chunk__7358_9733;
var G__9739 = count__7359_9734;
var G__9740 = (i__7360_9735 + (1));
seq__7357_9732 = G__9737;
chunk__7358_9733 = G__9738;
count__7359_9734 = G__9739;
i__7360_9735 = G__9740;
continue;
} else {
var temp__5823__auto___9741 = cljs.core.seq(seq__7357_9732);
if(temp__5823__auto___9741){
var seq__7357_9743__$1 = temp__5823__auto___9741;
if(cljs.core.chunked_seq_QMARK_(seq__7357_9743__$1)){
var c__5673__auto___9744 = cljs.core.chunk_first(seq__7357_9743__$1);
var G__9745 = cljs.core.chunk_rest(seq__7357_9743__$1);
var G__9746 = c__5673__auto___9744;
var G__9747 = cljs.core.count(c__5673__auto___9744);
var G__9748 = (0);
seq__7357_9732 = G__9745;
chunk__7358_9733 = G__9746;
count__7359_9734 = G__9747;
i__7360_9735 = G__9748;
continue;
} else {
var ctor_9749 = cljs.core.first(seq__7357_9743__$1);
nex.typechecker.check_constructor(env,name,ctor_9749);


var G__9750 = cljs.core.next(seq__7357_9743__$1);
var G__9751 = null;
var G__9752 = (0);
var G__9753 = (0);
seq__7357_9732 = G__9750;
chunk__7358_9733 = G__9751;
count__7359_9734 = G__9752;
i__7360_9735 = G__9753;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__9754 = seq__7301_9706;
var G__9755 = chunk__7302_9707;
var G__9756 = count__7303_9708;
var G__9757 = (i__7304_9709 + (1));
seq__7301_9706 = G__9754;
chunk__7302_9707 = G__9755;
count__7303_9708 = G__9756;
i__7304_9709 = G__9757;
continue;
} else {
var temp__5823__auto___9758 = cljs.core.seq(seq__7301_9706);
if(temp__5823__auto___9758){
var seq__7301_9759__$1 = temp__5823__auto___9758;
if(cljs.core.chunked_seq_QMARK_(seq__7301_9759__$1)){
var c__5673__auto___9760 = cljs.core.chunk_first(seq__7301_9759__$1);
var G__9761 = cljs.core.chunk_rest(seq__7301_9759__$1);
var G__9762 = c__5673__auto___9760;
var G__9763 = cljs.core.count(c__5673__auto___9760);
var G__9764 = (0);
seq__7301_9706 = G__9761;
chunk__7302_9707 = G__9762;
count__7303_9708 = G__9763;
i__7304_9709 = G__9764;
continue;
} else {
var section_9765 = cljs.core.first(seq__7301_9759__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9765),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7366_9766 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9765));
var chunk__7367_9767 = null;
var count__7368_9768 = (0);
var i__7369_9769 = (0);
while(true){
if((i__7369_9769 < count__7368_9768)){
var member_9770 = chunk__7367_9767.cljs$core$IIndexed$_nth$arity$2(null,i__7369_9769);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9770),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9770);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9770),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9770));
} else {
}
}


var G__9771 = seq__7366_9766;
var G__9772 = chunk__7367_9767;
var G__9773 = count__7368_9768;
var G__9774 = (i__7369_9769 + (1));
seq__7366_9766 = G__9771;
chunk__7367_9767 = G__9772;
count__7368_9768 = G__9773;
i__7369_9769 = G__9774;
continue;
} else {
var temp__5823__auto___9775__$1 = cljs.core.seq(seq__7366_9766);
if(temp__5823__auto___9775__$1){
var seq__7366_9776__$1 = temp__5823__auto___9775__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7366_9776__$1)){
var c__5673__auto___9777 = cljs.core.chunk_first(seq__7366_9776__$1);
var G__9778 = cljs.core.chunk_rest(seq__7366_9776__$1);
var G__9779 = c__5673__auto___9777;
var G__9780 = cljs.core.count(c__5673__auto___9777);
var G__9781 = (0);
seq__7366_9766 = G__9778;
chunk__7367_9767 = G__9779;
count__7368_9768 = G__9780;
i__7369_9769 = G__9781;
continue;
} else {
var member_9782 = cljs.core.first(seq__7366_9776__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9782),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9782);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9782),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9782));
} else {
}
}


var G__9783 = cljs.core.next(seq__7366_9776__$1);
var G__9784 = null;
var G__9785 = (0);
var G__9786 = (0);
seq__7366_9766 = G__9783;
chunk__7367_9767 = G__9784;
count__7368_9768 = G__9785;
i__7369_9769 = G__9786;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9765),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7376_9787 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9765));
var chunk__7377_9788 = null;
var count__7378_9789 = (0);
var i__7379_9790 = (0);
while(true){
if((i__7379_9790 < count__7378_9789)){
var ctor_9791 = chunk__7377_9788.cljs$core$IIndexed$_nth$arity$2(null,i__7379_9790);
nex.typechecker.check_constructor(env,name,ctor_9791);


var G__9792 = seq__7376_9787;
var G__9793 = chunk__7377_9788;
var G__9794 = count__7378_9789;
var G__9795 = (i__7379_9790 + (1));
seq__7376_9787 = G__9792;
chunk__7377_9788 = G__9793;
count__7378_9789 = G__9794;
i__7379_9790 = G__9795;
continue;
} else {
var temp__5823__auto___9796__$1 = cljs.core.seq(seq__7376_9787);
if(temp__5823__auto___9796__$1){
var seq__7376_9797__$1 = temp__5823__auto___9796__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7376_9797__$1)){
var c__5673__auto___9798 = cljs.core.chunk_first(seq__7376_9797__$1);
var G__9799 = cljs.core.chunk_rest(seq__7376_9797__$1);
var G__9800 = c__5673__auto___9798;
var G__9801 = cljs.core.count(c__5673__auto___9798);
var G__9802 = (0);
seq__7376_9787 = G__9799;
chunk__7377_9788 = G__9800;
count__7378_9789 = G__9801;
i__7379_9790 = G__9802;
continue;
} else {
var ctor_9803 = cljs.core.first(seq__7376_9797__$1);
nex.typechecker.check_constructor(env,name,ctor_9803);


var G__9804 = cljs.core.next(seq__7376_9797__$1);
var G__9805 = null;
var G__9806 = (0);
var G__9807 = (0);
seq__7376_9787 = G__9804;
chunk__7377_9788 = G__9805;
count__7378_9789 = G__9806;
i__7379_9790 = G__9807;
continue;
}
} else {
}
}
break;
}
} else {
}
}


var G__9808 = cljs.core.next(seq__7301_9759__$1);
var G__9809 = null;
var G__9810 = (0);
var G__9811 = (0);
seq__7301_9706 = G__9808;
chunk__7302_9707 = G__9809;
count__7303_9708 = G__9810;
i__7304_9709 = G__9811;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7284_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7284_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7283_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7283_SHARP_));
}),body)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7285_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7285_SHARP_));
}),body)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7381){
var map__7382 = p__7381;
var map__7382__$1 = cljs.core.__destructure_map(map__7382);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7382__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__7383 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__7383__$1 = (((G__7383 instanceof cljs.core.Keyword))?G__7383.fqn:null);
switch (G__7383__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__7286_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__7286_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"elseif","elseif",551759784).cljs$core$IFn$_invoke$arity$1(stmt)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(stmt))], 0)));

break;
case "loop":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt))));

break;
case "scoped-block":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"rescue","rescue",1135767523).cljs$core$IFn$_invoke$arity$1(stmt))));

break;
case "with":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt)));

break;
case "case":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7287_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__7287_SHARP_));
}),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt)),(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(stmt);
if(cljs.core.truth_(temp__5823__auto__)){
var e = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nex$typechecker$check_class_$_collect_assigned(e)], null);
} else {
return null;
}
})()));

break;
default:
return cljs.core.PersistentHashSet.EMPTY;

}
});
if(cljs.core.seq(required_fields)){
if(cljs.core.empty_QMARK_(constructors)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+" has attachable fields that require constructor initialization"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Attachable fields must be initialized by constructors in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(required_fields)))))], null));
} else {
}

var seq__7397 = cljs.core.seq(constructors);
var chunk__7398 = null;
var count__7399 = (0);
var i__7400 = (0);
while(true){
if((i__7400 < count__7399)){
var map__7419 = chunk__7398.cljs$core$IIndexed$_nth$arity$2(null,i__7400);
var map__7419__$1 = cljs.core.__destructure_map(map__7419);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9817 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_9818 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9817)));
if(cljs.core.seq(missing_9818)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9818))))], null));
} else {
}


var G__9819 = seq__7397;
var G__9820 = chunk__7398;
var G__9821 = count__7399;
var G__9822 = (i__7400 + (1));
seq__7397 = G__9819;
chunk__7398 = G__9820;
count__7399 = G__9821;
i__7400 = G__9822;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7397);
if(temp__5823__auto__){
var seq__7397__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7397__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7397__$1);
var G__9823 = cljs.core.chunk_rest(seq__7397__$1);
var G__9824 = c__5673__auto__;
var G__9825 = cljs.core.count(c__5673__auto__);
var G__9826 = (0);
seq__7397 = G__9823;
chunk__7398 = G__9824;
count__7399 = G__9825;
i__7400 = G__9826;
continue;
} else {
var map__7423 = cljs.core.first(seq__7397__$1);
var map__7423__$1 = cljs.core.__destructure_map(map__7423);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7423__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9827 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_9828 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9827)));
if(cljs.core.seq(missing_9828)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9828))))], null));
} else {
}


var G__9829 = cljs.core.next(seq__7397__$1);
var G__9830 = null;
var G__9831 = (0);
var G__9832 = (0);
seq__7397 = G__9829;
chunk__7398 = G__9830;
count__7399 = G__9831;
i__7400 = G__9832;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Register method signatures for built-in types.
 */
nex.typechecker.register_builtin_methods = (function nex$typechecker$register_builtin_methods(env){
nex.typechecker.env_add_class(env,"Comparable",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Comparable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,"Comparable","compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_class(env,"Hashable",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Hashable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,"Hashable","hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

var seq__7436_9833 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__7437_9834 = null;
var count__7438_9835 = (0);
var i__7439_9836 = (0);
while(true){
if((i__7439_9836 < count__7438_9835)){
var scalar_9837 = chunk__7437_9834.cljs$core$IIndexed$_nth$arity$2(null,i__7439_9836);
nex.typechecker.env_add_class(env,scalar_9837,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9837,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9837,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9837,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9838 = seq__7436_9833;
var G__9839 = chunk__7437_9834;
var G__9840 = count__7438_9835;
var G__9841 = (i__7439_9836 + (1));
seq__7436_9833 = G__9838;
chunk__7437_9834 = G__9839;
count__7438_9835 = G__9840;
i__7439_9836 = G__9841;
continue;
} else {
var temp__5823__auto___9842 = cljs.core.seq(seq__7436_9833);
if(temp__5823__auto___9842){
var seq__7436_9843__$1 = temp__5823__auto___9842;
if(cljs.core.chunked_seq_QMARK_(seq__7436_9843__$1)){
var c__5673__auto___9844 = cljs.core.chunk_first(seq__7436_9843__$1);
var G__9845 = cljs.core.chunk_rest(seq__7436_9843__$1);
var G__9846 = c__5673__auto___9844;
var G__9847 = cljs.core.count(c__5673__auto___9844);
var G__9848 = (0);
seq__7436_9833 = G__9845;
chunk__7437_9834 = G__9846;
count__7438_9835 = G__9847;
i__7439_9836 = G__9848;
continue;
} else {
var scalar_9849 = cljs.core.first(seq__7436_9843__$1);
nex.typechecker.env_add_class(env,scalar_9849,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9849,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9849,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9849,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9850 = cljs.core.next(seq__7436_9843__$1);
var G__9851 = null;
var G__9852 = (0);
var G__9853 = (0);
seq__7436_9833 = G__9850;
chunk__7437_9834 = G__9851;
count__7438_9835 = G__9852;
i__7439_9836 = G__9853;
continue;
}
} else {
}
}
break;
}

var seq__7449_9854 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__7450_9855 = null;
var count__7451_9856 = (0);
var i__7452_9857 = (0);
while(true){
if((i__7452_9857 < count__7451_9856)){
var vec__7465_9859 = chunk__7450_9855.cljs$core$IIndexed$_nth$arity$2(null,i__7452_9857);
var method_name_9860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7465_9859,(0),null);
var sig_9861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7465_9859,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9860,sig_9861);


var G__9862 = seq__7449_9854;
var G__9863 = chunk__7450_9855;
var G__9864 = count__7451_9856;
var G__9865 = (i__7452_9857 + (1));
seq__7449_9854 = G__9862;
chunk__7450_9855 = G__9863;
count__7451_9856 = G__9864;
i__7452_9857 = G__9865;
continue;
} else {
var temp__5823__auto___9866 = cljs.core.seq(seq__7449_9854);
if(temp__5823__auto___9866){
var seq__7449_9867__$1 = temp__5823__auto___9866;
if(cljs.core.chunked_seq_QMARK_(seq__7449_9867__$1)){
var c__5673__auto___9868 = cljs.core.chunk_first(seq__7449_9867__$1);
var G__9869 = cljs.core.chunk_rest(seq__7449_9867__$1);
var G__9870 = c__5673__auto___9868;
var G__9871 = cljs.core.count(c__5673__auto___9868);
var G__9872 = (0);
seq__7449_9854 = G__9869;
chunk__7450_9855 = G__9870;
count__7451_9856 = G__9871;
i__7452_9857 = G__9872;
continue;
} else {
var vec__7471_9873 = cljs.core.first(seq__7449_9867__$1);
var method_name_9874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7471_9873,(0),null);
var sig_9875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7471_9873,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9874,sig_9875);


var G__9876 = cljs.core.next(seq__7449_9867__$1);
var G__9877 = null;
var G__9878 = (0);
var G__9879 = (0);
seq__7449_9854 = G__9876;
chunk__7450_9855 = G__9877;
count__7451_9856 = G__9878;
i__7452_9857 = G__9879;
continue;
}
} else {
}
}
break;
}

var seq__7477_9880 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__7478_9881 = null;
var count__7479_9882 = (0);
var i__7480_9883 = (0);
while(true){
if((i__7480_9883 < count__7479_9882)){
var vec__7493_9885 = chunk__7478_9881.cljs$core$IIndexed$_nth$arity$2(null,i__7480_9883);
var method_name_9886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7493_9885,(0),null);
var sig_9887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7493_9885,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9886,sig_9887);


var G__9888 = seq__7477_9880;
var G__9889 = chunk__7478_9881;
var G__9890 = count__7479_9882;
var G__9891 = (i__7480_9883 + (1));
seq__7477_9880 = G__9888;
chunk__7478_9881 = G__9889;
count__7479_9882 = G__9890;
i__7480_9883 = G__9891;
continue;
} else {
var temp__5823__auto___9892 = cljs.core.seq(seq__7477_9880);
if(temp__5823__auto___9892){
var seq__7477_9893__$1 = temp__5823__auto___9892;
if(cljs.core.chunked_seq_QMARK_(seq__7477_9893__$1)){
var c__5673__auto___9894 = cljs.core.chunk_first(seq__7477_9893__$1);
var G__9895 = cljs.core.chunk_rest(seq__7477_9893__$1);
var G__9896 = c__5673__auto___9894;
var G__9897 = cljs.core.count(c__5673__auto___9894);
var G__9898 = (0);
seq__7477_9880 = G__9895;
chunk__7478_9881 = G__9896;
count__7479_9882 = G__9897;
i__7480_9883 = G__9898;
continue;
} else {
var vec__7498_9903 = cljs.core.first(seq__7477_9893__$1);
var method_name_9904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7498_9903,(0),null);
var sig_9905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7498_9903,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9904,sig_9905);


var G__9906 = cljs.core.next(seq__7477_9893__$1);
var G__9907 = null;
var G__9908 = (0);
var G__9909 = (0);
seq__7477_9880 = G__9906;
chunk__7478_9881 = G__9907;
count__7479_9882 = G__9908;
i__7480_9883 = G__9909;
continue;
}
} else {
}
}
break;
}

var seq__7501_9910 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__7502_9911 = null;
var count__7503_9912 = (0);
var i__7504_9913 = (0);
while(true){
if((i__7504_9913 < count__7503_9912)){
var vec__7511_9914 = chunk__7502_9911.cljs$core$IIndexed$_nth$arity$2(null,i__7504_9913);
var method_name_9915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7511_9914,(0),null);
var sig_9916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7511_9914,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9915,sig_9916);


var G__9917 = seq__7501_9910;
var G__9918 = chunk__7502_9911;
var G__9919 = count__7503_9912;
var G__9920 = (i__7504_9913 + (1));
seq__7501_9910 = G__9917;
chunk__7502_9911 = G__9918;
count__7503_9912 = G__9919;
i__7504_9913 = G__9920;
continue;
} else {
var temp__5823__auto___9921 = cljs.core.seq(seq__7501_9910);
if(temp__5823__auto___9921){
var seq__7501_9922__$1 = temp__5823__auto___9921;
if(cljs.core.chunked_seq_QMARK_(seq__7501_9922__$1)){
var c__5673__auto___9923 = cljs.core.chunk_first(seq__7501_9922__$1);
var G__9924 = cljs.core.chunk_rest(seq__7501_9922__$1);
var G__9925 = c__5673__auto___9923;
var G__9926 = cljs.core.count(c__5673__auto___9923);
var G__9927 = (0);
seq__7501_9910 = G__9924;
chunk__7502_9911 = G__9925;
count__7503_9912 = G__9926;
i__7504_9913 = G__9927;
continue;
} else {
var vec__7518_9928 = cljs.core.first(seq__7501_9922__$1);
var method_name_9929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7518_9928,(0),null);
var sig_9930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7518_9928,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9929,sig_9930);


var G__9931 = cljs.core.next(seq__7501_9922__$1);
var G__9932 = null;
var G__9933 = (0);
var G__9934 = (0);
seq__7501_9910 = G__9931;
chunk__7502_9911 = G__9932;
count__7503_9912 = G__9933;
i__7504_9913 = G__9934;
continue;
}
} else {
}
}
break;
}

var seq__7521_9935 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__7522_9936 = null;
var count__7523_9937 = (0);
var i__7524_9938 = (0);
while(true){
if((i__7524_9938 < count__7523_9937)){
var vec__7531_9939 = chunk__7522_9936.cljs$core$IIndexed$_nth$arity$2(null,i__7524_9938);
var method_name_9940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7531_9939,(0),null);
var sig_9941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7531_9939,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9940,sig_9941);


var G__9942 = seq__7521_9935;
var G__9943 = chunk__7522_9936;
var G__9944 = count__7523_9937;
var G__9945 = (i__7524_9938 + (1));
seq__7521_9935 = G__9942;
chunk__7522_9936 = G__9943;
count__7523_9937 = G__9944;
i__7524_9938 = G__9945;
continue;
} else {
var temp__5823__auto___9946 = cljs.core.seq(seq__7521_9935);
if(temp__5823__auto___9946){
var seq__7521_9947__$1 = temp__5823__auto___9946;
if(cljs.core.chunked_seq_QMARK_(seq__7521_9947__$1)){
var c__5673__auto___9948 = cljs.core.chunk_first(seq__7521_9947__$1);
var G__9949 = cljs.core.chunk_rest(seq__7521_9947__$1);
var G__9950 = c__5673__auto___9948;
var G__9951 = cljs.core.count(c__5673__auto___9948);
var G__9952 = (0);
seq__7521_9935 = G__9949;
chunk__7522_9936 = G__9950;
count__7523_9937 = G__9951;
i__7524_9938 = G__9952;
continue;
} else {
var vec__7534_9953 = cljs.core.first(seq__7521_9947__$1);
var method_name_9954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7534_9953,(0),null);
var sig_9955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7534_9953,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9954,sig_9955);


var G__9956 = cljs.core.next(seq__7521_9947__$1);
var G__9957 = null;
var G__9958 = (0);
var G__9959 = (0);
seq__7521_9935 = G__9956;
chunk__7522_9936 = G__9957;
count__7523_9937 = G__9958;
i__7524_9938 = G__9959;
continue;
}
} else {
}
}
break;
}

var seq__7537_9960 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7538_9961 = null;
var count__7539_9962 = (0);
var i__7540_9963 = (0);
while(true){
if((i__7540_9963 < count__7539_9962)){
var vec__7547_9967 = chunk__7538_9961.cljs$core$IIndexed$_nth$arity$2(null,i__7540_9963);
var method_name_9968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7547_9967,(0),null);
var sig_9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7547_9967,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9968,sig_9969);


var G__9970 = seq__7537_9960;
var G__9971 = chunk__7538_9961;
var G__9972 = count__7539_9962;
var G__9973 = (i__7540_9963 + (1));
seq__7537_9960 = G__9970;
chunk__7538_9961 = G__9971;
count__7539_9962 = G__9972;
i__7540_9963 = G__9973;
continue;
} else {
var temp__5823__auto___9974 = cljs.core.seq(seq__7537_9960);
if(temp__5823__auto___9974){
var seq__7537_9975__$1 = temp__5823__auto___9974;
if(cljs.core.chunked_seq_QMARK_(seq__7537_9975__$1)){
var c__5673__auto___9976 = cljs.core.chunk_first(seq__7537_9975__$1);
var G__9977 = cljs.core.chunk_rest(seq__7537_9975__$1);
var G__9978 = c__5673__auto___9976;
var G__9979 = cljs.core.count(c__5673__auto___9976);
var G__9980 = (0);
seq__7537_9960 = G__9977;
chunk__7538_9961 = G__9978;
count__7539_9962 = G__9979;
i__7540_9963 = G__9980;
continue;
} else {
var vec__7550_9981 = cljs.core.first(seq__7537_9975__$1);
var method_name_9982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7550_9981,(0),null);
var sig_9983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7550_9981,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9982,sig_9983);


var G__9984 = cljs.core.next(seq__7537_9975__$1);
var G__9985 = null;
var G__9986 = (0);
var G__9987 = (0);
seq__7537_9960 = G__9984;
chunk__7538_9961 = G__9985;
count__7539_9962 = G__9986;
i__7540_9963 = G__9987;
continue;
}
} else {
}
}
break;
}

var seq__7553_9988 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7554_9989 = null;
var count__7555_9990 = (0);
var i__7556_9991 = (0);
while(true){
if((i__7556_9991 < count__7555_9990)){
var vec__7563_9992 = chunk__7554_9989.cljs$core$IIndexed$_nth$arity$2(null,i__7556_9991);
var method_name_9993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7563_9992,(0),null);
var sig_9994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7563_9992,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9993,sig_9994);


var G__9995 = seq__7553_9988;
var G__9996 = chunk__7554_9989;
var G__9997 = count__7555_9990;
var G__9998 = (i__7556_9991 + (1));
seq__7553_9988 = G__9995;
chunk__7554_9989 = G__9996;
count__7555_9990 = G__9997;
i__7556_9991 = G__9998;
continue;
} else {
var temp__5823__auto___10000 = cljs.core.seq(seq__7553_9988);
if(temp__5823__auto___10000){
var seq__7553_10001__$1 = temp__5823__auto___10000;
if(cljs.core.chunked_seq_QMARK_(seq__7553_10001__$1)){
var c__5673__auto___10002 = cljs.core.chunk_first(seq__7553_10001__$1);
var G__10003 = cljs.core.chunk_rest(seq__7553_10001__$1);
var G__10004 = c__5673__auto___10002;
var G__10005 = cljs.core.count(c__5673__auto___10002);
var G__10006 = (0);
seq__7553_9988 = G__10003;
chunk__7554_9989 = G__10004;
count__7555_9990 = G__10005;
i__7556_9991 = G__10006;
continue;
} else {
var vec__7566_10007 = cljs.core.first(seq__7553_10001__$1);
var method_name_10008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7566_10007,(0),null);
var sig_10009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7566_10007,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_10008,sig_10009);


var G__10010 = cljs.core.next(seq__7553_10001__$1);
var G__10011 = null;
var G__10012 = (0);
var G__10013 = (0);
seq__7553_9988 = G__10010;
chunk__7554_9989 = G__10011;
count__7555_9990 = G__10012;
i__7556_9991 = G__10013;
continue;
}
} else {
}
}
break;
}

var seq__7569_10014 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7570_10015 = null;
var count__7571_10016 = (0);
var i__7572_10017 = (0);
while(true){
if((i__7572_10017 < count__7571_10016)){
var vec__7579_10019 = chunk__7570_10015.cljs$core$IIndexed$_nth$arity$2(null,i__7572_10017);
var method_name_10020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7579_10019,(0),null);
var sig_10021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7579_10019,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_10020,sig_10021);


var G__10022 = seq__7569_10014;
var G__10023 = chunk__7570_10015;
var G__10024 = count__7571_10016;
var G__10025 = (i__7572_10017 + (1));
seq__7569_10014 = G__10022;
chunk__7570_10015 = G__10023;
count__7571_10016 = G__10024;
i__7572_10017 = G__10025;
continue;
} else {
var temp__5823__auto___10026 = cljs.core.seq(seq__7569_10014);
if(temp__5823__auto___10026){
var seq__7569_10027__$1 = temp__5823__auto___10026;
if(cljs.core.chunked_seq_QMARK_(seq__7569_10027__$1)){
var c__5673__auto___10028 = cljs.core.chunk_first(seq__7569_10027__$1);
var G__10029 = cljs.core.chunk_rest(seq__7569_10027__$1);
var G__10030 = c__5673__auto___10028;
var G__10031 = cljs.core.count(c__5673__auto___10028);
var G__10032 = (0);
seq__7569_10014 = G__10029;
chunk__7570_10015 = G__10030;
count__7571_10016 = G__10031;
i__7572_10017 = G__10032;
continue;
} else {
var vec__7582_10033 = cljs.core.first(seq__7569_10027__$1);
var method_name_10034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7582_10033,(0),null);
var sig_10035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7582_10033,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_10034,sig_10035);


var G__10036 = cljs.core.next(seq__7569_10027__$1);
var G__10037 = null;
var G__10038 = (0);
var G__10039 = (0);
seq__7569_10014 = G__10036;
chunk__7570_10015 = G__10037;
count__7571_10016 = G__10038;
i__7572_10017 = G__10039;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7585_10040 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__7586_10041 = null;
var count__7587_10042 = (0);
var i__7588_10043 = (0);
while(true){
if((i__7588_10043 < count__7587_10042)){
var vec__7595_10044 = chunk__7586_10041.cljs$core$IIndexed$_nth$arity$2(null,i__7588_10043);
var method_name_10045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7595_10044,(0),null);
var sig_10046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7595_10044,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_10045,sig_10046);


var G__10047 = seq__7585_10040;
var G__10048 = chunk__7586_10041;
var G__10049 = count__7587_10042;
var G__10050 = (i__7588_10043 + (1));
seq__7585_10040 = G__10047;
chunk__7586_10041 = G__10048;
count__7587_10042 = G__10049;
i__7588_10043 = G__10050;
continue;
} else {
var temp__5823__auto___10051 = cljs.core.seq(seq__7585_10040);
if(temp__5823__auto___10051){
var seq__7585_10052__$1 = temp__5823__auto___10051;
if(cljs.core.chunked_seq_QMARK_(seq__7585_10052__$1)){
var c__5673__auto___10053 = cljs.core.chunk_first(seq__7585_10052__$1);
var G__10054 = cljs.core.chunk_rest(seq__7585_10052__$1);
var G__10055 = c__5673__auto___10053;
var G__10056 = cljs.core.count(c__5673__auto___10053);
var G__10057 = (0);
seq__7585_10040 = G__10054;
chunk__7586_10041 = G__10055;
count__7587_10042 = G__10056;
i__7588_10043 = G__10057;
continue;
} else {
var vec__7599_10058 = cljs.core.first(seq__7585_10052__$1);
var method_name_10059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599_10058,(0),null);
var sig_10060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7599_10058,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_10059,sig_10060);


var G__10062 = cljs.core.next(seq__7585_10052__$1);
var G__10063 = null;
var G__10064 = (0);
var G__10065 = (0);
seq__7585_10040 = G__10062;
chunk__7586_10041 = G__10063;
count__7587_10042 = G__10064;
i__7588_10043 = G__10065;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__7602_10066 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7603_10067 = null;
var count__7604_10068 = (0);
var i__7605_10069 = (0);
while(true){
if((i__7605_10069 < count__7604_10068)){
var vec__7612_10070 = chunk__7603_10067.cljs$core$IIndexed$_nth$arity$2(null,i__7605_10069);
var method_name_10071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7612_10070,(0),null);
var sig_10072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7612_10070,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_10071,sig_10072);


var G__10073 = seq__7602_10066;
var G__10074 = chunk__7603_10067;
var G__10075 = count__7604_10068;
var G__10076 = (i__7605_10069 + (1));
seq__7602_10066 = G__10073;
chunk__7603_10067 = G__10074;
count__7604_10068 = G__10075;
i__7605_10069 = G__10076;
continue;
} else {
var temp__5823__auto___10077 = cljs.core.seq(seq__7602_10066);
if(temp__5823__auto___10077){
var seq__7602_10078__$1 = temp__5823__auto___10077;
if(cljs.core.chunked_seq_QMARK_(seq__7602_10078__$1)){
var c__5673__auto___10079 = cljs.core.chunk_first(seq__7602_10078__$1);
var G__10080 = cljs.core.chunk_rest(seq__7602_10078__$1);
var G__10081 = c__5673__auto___10079;
var G__10082 = cljs.core.count(c__5673__auto___10079);
var G__10083 = (0);
seq__7602_10066 = G__10080;
chunk__7603_10067 = G__10081;
count__7604_10068 = G__10082;
i__7605_10069 = G__10083;
continue;
} else {
var vec__7616_10084 = cljs.core.first(seq__7602_10078__$1);
var method_name_10085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7616_10084,(0),null);
var sig_10086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7616_10084,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_10085,sig_10086);


var G__10087 = cljs.core.next(seq__7602_10078__$1);
var G__10088 = null;
var G__10089 = (0);
var G__10090 = (0);
seq__7602_10066 = G__10087;
chunk__7603_10067 = G__10088;
count__7604_10068 = G__10089;
i__7605_10069 = G__10090;
continue;
}
} else {
}
}
break;
}

var seq__7619 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__7620 = null;
var count__7621 = (0);
var i__7622 = (0);
while(true){
if((i__7622 < count__7621)){
var n = chunk__7620.cljs$core$IIndexed$_nth$arity$2(null,i__7622);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7619,chunk__7620,count__7621,i__7622,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7619,chunk__7620,count__7621,i__7622,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10091 = seq__7619;
var G__10092 = chunk__7620;
var G__10093 = count__7621;
var G__10094 = (i__7622 + (1));
seq__7619 = G__10091;
chunk__7620 = G__10092;
count__7621 = G__10093;
i__7622 = G__10094;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7619);
if(temp__5823__auto__){
var seq__7619__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7619__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7619__$1);
var G__10095 = cljs.core.chunk_rest(seq__7619__$1);
var G__10096 = c__5673__auto__;
var G__10097 = cljs.core.count(c__5673__auto__);
var G__10098 = (0);
seq__7619 = G__10095;
chunk__7620 = G__10096;
count__7621 = G__10097;
i__7622 = G__10098;
continue;
} else {
var n = cljs.core.first(seq__7619__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7619,chunk__7620,count__7621,i__7622,n,seq__7619__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7619,chunk__7620,count__7621,i__7622,n,seq__7619__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10099 = cljs.core.next(seq__7619__$1);
var G__10100 = null;
var G__10101 = (0);
var G__10102 = (0);
seq__7619 = G__10099;
chunk__7620 = G__10100;
count__7621 = G__10101;
i__7622 = G__10102;
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
 * Type check a complete program.
 * opts may include :var-types - a map of {var-name => type} for pre-existing variables.
 */
nex.typechecker.check_program = (function nex$typechecker$check_program(var_args){
var G__7625 = arguments.length;
switch (G__7625) {
case 1:
return nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$1 = (function (program){
return nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2(program,cljs.core.PersistentArrayMap.EMPTY);
}));

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__7627,opts){
var map__7628 = p__7627;
var map__7628__$1 = cljs.core.__destructure_map(map__7628);
var program = map__7628__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7628__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__7630_10104 = cljs.core.seq(imports);
var chunk__7631_10105 = null;
var count__7632_10106 = (0);
var i__7633_10107 = (0);
while(true){
if((i__7633_10107 < count__7632_10106)){
var map__7637_10108 = chunk__7631_10105.cljs$core$IIndexed$_nth$arity$2(null,i__7633_10107);
var map__7637_10109__$1 = cljs.core.__destructure_map(map__7637_10108);
var qualified_name_10110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7637_10109__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7637_10109__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10111 == null)){
var simple_name_10112 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10110,/\./));
nex.typechecker.env_add_class(env,simple_name_10112,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10112,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10110], null));
} else {
}


var G__10113 = seq__7630_10104;
var G__10114 = chunk__7631_10105;
var G__10115 = count__7632_10106;
var G__10116 = (i__7633_10107 + (1));
seq__7630_10104 = G__10113;
chunk__7631_10105 = G__10114;
count__7632_10106 = G__10115;
i__7633_10107 = G__10116;
continue;
} else {
var temp__5823__auto___10117 = cljs.core.seq(seq__7630_10104);
if(temp__5823__auto___10117){
var seq__7630_10118__$1 = temp__5823__auto___10117;
if(cljs.core.chunked_seq_QMARK_(seq__7630_10118__$1)){
var c__5673__auto___10119 = cljs.core.chunk_first(seq__7630_10118__$1);
var G__10120 = cljs.core.chunk_rest(seq__7630_10118__$1);
var G__10121 = c__5673__auto___10119;
var G__10122 = cljs.core.count(c__5673__auto___10119);
var G__10123 = (0);
seq__7630_10104 = G__10120;
chunk__7631_10105 = G__10121;
count__7632_10106 = G__10122;
i__7633_10107 = G__10123;
continue;
} else {
var map__7638_10124 = cljs.core.first(seq__7630_10118__$1);
var map__7638_10125__$1 = cljs.core.__destructure_map(map__7638_10124);
var qualified_name_10126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7638_10125__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7638_10125__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10127 == null)){
var simple_name_10128 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10126,/\./));
nex.typechecker.env_add_class(env,simple_name_10128,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10128,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10126], null));
} else {
}


var G__10129 = cljs.core.next(seq__7630_10118__$1);
var G__10130 = null;
var G__10131 = (0);
var G__10132 = (0);
seq__7630_10104 = G__10129;
chunk__7631_10105 = G__10130;
count__7632_10106 = G__10131;
i__7633_10107 = G__10132;
continue;
}
} else {
}
}
break;
}

var seq__7639_10133 = cljs.core.seq(classes);
var chunk__7640_10134 = null;
var count__7641_10135 = (0);
var i__7642_10136 = (0);
while(true){
if((i__7642_10136 < count__7641_10135)){
var class_def_10137 = chunk__7640_10134.cljs$core$IIndexed$_nth$arity$2(null,i__7642_10136);
nex.typechecker.collect_class_info(env,class_def_10137);


var G__10138 = seq__7639_10133;
var G__10139 = chunk__7640_10134;
var G__10140 = count__7641_10135;
var G__10141 = (i__7642_10136 + (1));
seq__7639_10133 = G__10138;
chunk__7640_10134 = G__10139;
count__7641_10135 = G__10140;
i__7642_10136 = G__10141;
continue;
} else {
var temp__5823__auto___10142 = cljs.core.seq(seq__7639_10133);
if(temp__5823__auto___10142){
var seq__7639_10143__$1 = temp__5823__auto___10142;
if(cljs.core.chunked_seq_QMARK_(seq__7639_10143__$1)){
var c__5673__auto___10144 = cljs.core.chunk_first(seq__7639_10143__$1);
var G__10145 = cljs.core.chunk_rest(seq__7639_10143__$1);
var G__10146 = c__5673__auto___10144;
var G__10147 = cljs.core.count(c__5673__auto___10144);
var G__10148 = (0);
seq__7639_10133 = G__10145;
chunk__7640_10134 = G__10146;
count__7641_10135 = G__10147;
i__7642_10136 = G__10148;
continue;
} else {
var class_def_10149 = cljs.core.first(seq__7639_10143__$1);
nex.typechecker.collect_class_info(env,class_def_10149);


var G__10150 = cljs.core.next(seq__7639_10143__$1);
var G__10151 = null;
var G__10152 = (0);
var G__10153 = (0);
seq__7639_10133 = G__10150;
chunk__7640_10134 = G__10151;
count__7641_10135 = G__10152;
i__7642_10136 = G__10153;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7643_10154 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7644_10155 = null;
var count__7645_10156 = (0);
var i__7646_10157 = (0);
while(true){
if((i__7646_10157 < count__7645_10156)){
var vec__7653_10158 = chunk__7644_10155.cljs$core$IIndexed$_nth$arity$2(null,i__7646_10157);
var var_name_10159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653_10158,(0),null);
var var_type_10160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653_10158,(1),null);
nex.typechecker.env_add_var(env,var_name_10159,var_type_10160);


var G__10161 = seq__7643_10154;
var G__10162 = chunk__7644_10155;
var G__10163 = count__7645_10156;
var G__10164 = (i__7646_10157 + (1));
seq__7643_10154 = G__10161;
chunk__7644_10155 = G__10162;
count__7645_10156 = G__10163;
i__7646_10157 = G__10164;
continue;
} else {
var temp__5823__auto___10165 = cljs.core.seq(seq__7643_10154);
if(temp__5823__auto___10165){
var seq__7643_10166__$1 = temp__5823__auto___10165;
if(cljs.core.chunked_seq_QMARK_(seq__7643_10166__$1)){
var c__5673__auto___10167 = cljs.core.chunk_first(seq__7643_10166__$1);
var G__10168 = cljs.core.chunk_rest(seq__7643_10166__$1);
var G__10169 = c__5673__auto___10167;
var G__10170 = cljs.core.count(c__5673__auto___10167);
var G__10171 = (0);
seq__7643_10154 = G__10168;
chunk__7644_10155 = G__10169;
count__7645_10156 = G__10170;
i__7646_10157 = G__10171;
continue;
} else {
var vec__7656_10172 = cljs.core.first(seq__7643_10166__$1);
var var_name_10173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_10172,(0),null);
var var_type_10174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7656_10172,(1),null);
nex.typechecker.env_add_var(env,var_name_10173,var_type_10174);


var G__10175 = cljs.core.next(seq__7643_10166__$1);
var G__10176 = null;
var G__10177 = (0);
var G__10178 = (0);
seq__7643_10154 = G__10175;
chunk__7644_10155 = G__10176;
count__7645_10156 = G__10177;
i__7646_10157 = G__10178;
continue;
}
} else {
}
}
break;
}

var seq__7659_10179 = cljs.core.seq(functions);
var chunk__7660_10180 = null;
var count__7661_10181 = (0);
var i__7662_10182 = (0);
while(true){
if((i__7662_10182 < count__7661_10181)){
var fn_def_10183 = chunk__7660_10180.cljs$core$IIndexed$_nth$arity$2(null,i__7662_10182);
var arity_10184 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10183));
if((arity_10184 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10183))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10183))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10183),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10183));


var G__10185 = seq__7659_10179;
var G__10186 = chunk__7660_10180;
var G__10187 = count__7661_10181;
var G__10188 = (i__7662_10182 + (1));
seq__7659_10179 = G__10185;
chunk__7660_10180 = G__10186;
count__7661_10181 = G__10187;
i__7662_10182 = G__10188;
continue;
} else {
var temp__5823__auto___10189 = cljs.core.seq(seq__7659_10179);
if(temp__5823__auto___10189){
var seq__7659_10190__$1 = temp__5823__auto___10189;
if(cljs.core.chunked_seq_QMARK_(seq__7659_10190__$1)){
var c__5673__auto___10191 = cljs.core.chunk_first(seq__7659_10190__$1);
var G__10192 = cljs.core.chunk_rest(seq__7659_10190__$1);
var G__10193 = c__5673__auto___10191;
var G__10194 = cljs.core.count(c__5673__auto___10191);
var G__10195 = (0);
seq__7659_10179 = G__10192;
chunk__7660_10180 = G__10193;
count__7661_10181 = G__10194;
i__7662_10182 = G__10195;
continue;
} else {
var fn_def_10196 = cljs.core.first(seq__7659_10190__$1);
var arity_10197 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10196));
if((arity_10197 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10196))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10196))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10196),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10196));


var G__10198 = cljs.core.next(seq__7659_10190__$1);
var G__10199 = null;
var G__10200 = (0);
var G__10201 = (0);
seq__7659_10179 = G__10198;
chunk__7660_10180 = G__10199;
count__7661_10181 = G__10200;
i__7662_10182 = G__10201;
continue;
}
} else {
}
}
break;
}

var seq__7667_10202 = cljs.core.seq(classes);
var chunk__7668_10203 = null;
var count__7669_10204 = (0);
var i__7670_10205 = (0);
while(true){
if((i__7670_10205 < count__7669_10204)){
var class_def_10206 = chunk__7668_10203.cljs$core$IIndexed$_nth$arity$2(null,i__7670_10205);
nex.typechecker.check_class(env,class_def_10206);


var G__10207 = seq__7667_10202;
var G__10208 = chunk__7668_10203;
var G__10209 = count__7669_10204;
var G__10210 = (i__7670_10205 + (1));
seq__7667_10202 = G__10207;
chunk__7668_10203 = G__10208;
count__7669_10204 = G__10209;
i__7670_10205 = G__10210;
continue;
} else {
var temp__5823__auto___10211 = cljs.core.seq(seq__7667_10202);
if(temp__5823__auto___10211){
var seq__7667_10212__$1 = temp__5823__auto___10211;
if(cljs.core.chunked_seq_QMARK_(seq__7667_10212__$1)){
var c__5673__auto___10213 = cljs.core.chunk_first(seq__7667_10212__$1);
var G__10214 = cljs.core.chunk_rest(seq__7667_10212__$1);
var G__10215 = c__5673__auto___10213;
var G__10216 = cljs.core.count(c__5673__auto___10213);
var G__10217 = (0);
seq__7667_10202 = G__10214;
chunk__7668_10203 = G__10215;
count__7669_10204 = G__10216;
i__7670_10205 = G__10217;
continue;
} else {
var class_def_10222 = cljs.core.first(seq__7667_10212__$1);
nex.typechecker.check_class(env,class_def_10222);


var G__10223 = cljs.core.next(seq__7667_10212__$1);
var G__10224 = null;
var G__10225 = (0);
var G__10226 = (0);
seq__7667_10202 = G__10223;
chunk__7668_10203 = G__10224;
count__7669_10204 = G__10225;
i__7670_10205 = G__10226;
continue;
}
} else {
}
}
break;
}

var seq__7700_10227 = cljs.core.seq(calls);
var chunk__7701_10228 = null;
var count__7702_10229 = (0);
var i__7703_10230 = (0);
while(true){
if((i__7703_10230 < count__7702_10229)){
var call_10231 = chunk__7701_10228.cljs$core$IIndexed$_nth$arity$2(null,i__7703_10230);
nex.typechecker.check_expression(env,call_10231);


var G__10232 = seq__7700_10227;
var G__10233 = chunk__7701_10228;
var G__10234 = count__7702_10229;
var G__10235 = (i__7703_10230 + (1));
seq__7700_10227 = G__10232;
chunk__7701_10228 = G__10233;
count__7702_10229 = G__10234;
i__7703_10230 = G__10235;
continue;
} else {
var temp__5823__auto___10236 = cljs.core.seq(seq__7700_10227);
if(temp__5823__auto___10236){
var seq__7700_10237__$1 = temp__5823__auto___10236;
if(cljs.core.chunked_seq_QMARK_(seq__7700_10237__$1)){
var c__5673__auto___10238 = cljs.core.chunk_first(seq__7700_10237__$1);
var G__10239 = cljs.core.chunk_rest(seq__7700_10237__$1);
var G__10240 = c__5673__auto___10238;
var G__10241 = cljs.core.count(c__5673__auto___10238);
var G__10242 = (0);
seq__7700_10227 = G__10239;
chunk__7701_10228 = G__10240;
count__7702_10229 = G__10241;
i__7703_10230 = G__10242;
continue;
} else {
var call_10243 = cljs.core.first(seq__7700_10237__$1);
nex.typechecker.check_expression(env,call_10243);


var G__10244 = cljs.core.next(seq__7700_10237__$1);
var G__10245 = null;
var G__10246 = (0);
var G__10247 = (0);
seq__7700_10227 = G__10244;
chunk__7701_10228 = G__10245;
count__7702_10229 = G__10246;
i__7703_10230 = G__10247;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e7629){var e = e7629;
var error_data = cljs.core.ex_data(e);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),false,new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error_data);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_message(e));
}
})()], null)], null);
}}));

(nex.typechecker.check_program.cljs$lang$maxFixedArity = 2);

/**
 * Type check Nex code (entry point).
 * opts may include :var-types - a map of {var-name => type} for pre-existing variables.
 */
nex.typechecker.type_check = (function nex$typechecker$type_check(var_args){
var G__7705 = arguments.length;
switch (G__7705) {
case 1:
return nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.PersistentArrayMap.EMPTY);
}));

(nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$2 = (function (ast,opts){
return nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2(ast,opts);
}));

(nex.typechecker.type_check.cljs$lang$maxFixedArity = 2);

/**
 * Infer the type of an expression AST node.
 * opts: :classes - seq of class defs, :var-types - {name type} map.
 * Returns the type (string or map) or nil on failure.
 */
nex.typechecker.infer_expression_type = (function nex$typechecker$infer_expression_type(expr,opts){
try{var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
var seq__7708_10249 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7709_10250 = null;
var count__7710_10251 = (0);
var i__7711_10252 = (0);
while(true){
if((i__7711_10252 < count__7710_10251)){
var map__7715_10253 = chunk__7709_10250.cljs$core$IIndexed$_nth$arity$2(null,i__7711_10252);
var map__7715_10254__$1 = cljs.core.__destructure_map(map__7715_10253);
var qualified_name_10255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7715_10254__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7715_10254__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10256 == null)){
var simple_name_10257 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10255,/\./));
nex.typechecker.env_add_class(env,simple_name_10257,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10257,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10255], null));
} else {
}


var G__10258 = seq__7708_10249;
var G__10259 = chunk__7709_10250;
var G__10260 = count__7710_10251;
var G__10261 = (i__7711_10252 + (1));
seq__7708_10249 = G__10258;
chunk__7709_10250 = G__10259;
count__7710_10251 = G__10260;
i__7711_10252 = G__10261;
continue;
} else {
var temp__5823__auto___10262 = cljs.core.seq(seq__7708_10249);
if(temp__5823__auto___10262){
var seq__7708_10263__$1 = temp__5823__auto___10262;
if(cljs.core.chunked_seq_QMARK_(seq__7708_10263__$1)){
var c__5673__auto___10264 = cljs.core.chunk_first(seq__7708_10263__$1);
var G__10265 = cljs.core.chunk_rest(seq__7708_10263__$1);
var G__10266 = c__5673__auto___10264;
var G__10267 = cljs.core.count(c__5673__auto___10264);
var G__10268 = (0);
seq__7708_10249 = G__10265;
chunk__7709_10250 = G__10266;
count__7710_10251 = G__10267;
i__7711_10252 = G__10268;
continue;
} else {
var map__7716_10269 = cljs.core.first(seq__7708_10263__$1);
var map__7716_10270__$1 = cljs.core.__destructure_map(map__7716_10269);
var qualified_name_10271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7716_10270__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7716_10270__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10272 == null)){
var simple_name_10273 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10271,/\./));
nex.typechecker.env_add_class(env,simple_name_10273,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10273,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10271], null));
} else {
}


var G__10274 = cljs.core.next(seq__7708_10263__$1);
var G__10275 = null;
var G__10276 = (0);
var G__10277 = (0);
seq__7708_10249 = G__10274;
chunk__7709_10250 = G__10275;
count__7710_10251 = G__10276;
i__7711_10252 = G__10277;
continue;
}
} else {
}
}
break;
}

var seq__7717_10278 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7718_10279 = null;
var count__7719_10280 = (0);
var i__7720_10281 = (0);
while(true){
if((i__7720_10281 < count__7719_10280)){
var class_def_10282 = chunk__7718_10279.cljs$core$IIndexed$_nth$arity$2(null,i__7720_10281);
nex.typechecker.collect_class_info(env,class_def_10282);


var G__10283 = seq__7717_10278;
var G__10284 = chunk__7718_10279;
var G__10285 = count__7719_10280;
var G__10286 = (i__7720_10281 + (1));
seq__7717_10278 = G__10283;
chunk__7718_10279 = G__10284;
count__7719_10280 = G__10285;
i__7720_10281 = G__10286;
continue;
} else {
var temp__5823__auto___10287 = cljs.core.seq(seq__7717_10278);
if(temp__5823__auto___10287){
var seq__7717_10288__$1 = temp__5823__auto___10287;
if(cljs.core.chunked_seq_QMARK_(seq__7717_10288__$1)){
var c__5673__auto___10289 = cljs.core.chunk_first(seq__7717_10288__$1);
var G__10290 = cljs.core.chunk_rest(seq__7717_10288__$1);
var G__10291 = c__5673__auto___10289;
var G__10292 = cljs.core.count(c__5673__auto___10289);
var G__10293 = (0);
seq__7717_10278 = G__10290;
chunk__7718_10279 = G__10291;
count__7719_10280 = G__10292;
i__7720_10281 = G__10293;
continue;
} else {
var class_def_10294 = cljs.core.first(seq__7717_10288__$1);
nex.typechecker.collect_class_info(env,class_def_10294);


var G__10295 = cljs.core.next(seq__7717_10288__$1);
var G__10296 = null;
var G__10297 = (0);
var G__10298 = (0);
seq__7717_10278 = G__10295;
chunk__7718_10279 = G__10296;
count__7719_10280 = G__10297;
i__7720_10281 = G__10298;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7722_10299 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7723_10300 = null;
var count__7724_10301 = (0);
var i__7725_10302 = (0);
while(true){
if((i__7725_10302 < count__7724_10301)){
var vec__7733_10303 = chunk__7723_10300.cljs$core$IIndexed$_nth$arity$2(null,i__7725_10302);
var var_name_10304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733_10303,(0),null);
var var_type_10305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733_10303,(1),null);
nex.typechecker.env_add_var(env,var_name_10304,var_type_10305);


var G__10306 = seq__7722_10299;
var G__10307 = chunk__7723_10300;
var G__10308 = count__7724_10301;
var G__10309 = (i__7725_10302 + (1));
seq__7722_10299 = G__10306;
chunk__7723_10300 = G__10307;
count__7724_10301 = G__10308;
i__7725_10302 = G__10309;
continue;
} else {
var temp__5823__auto___10310 = cljs.core.seq(seq__7722_10299);
if(temp__5823__auto___10310){
var seq__7722_10311__$1 = temp__5823__auto___10310;
if(cljs.core.chunked_seq_QMARK_(seq__7722_10311__$1)){
var c__5673__auto___10312 = cljs.core.chunk_first(seq__7722_10311__$1);
var G__10313 = cljs.core.chunk_rest(seq__7722_10311__$1);
var G__10314 = c__5673__auto___10312;
var G__10315 = cljs.core.count(c__5673__auto___10312);
var G__10316 = (0);
seq__7722_10299 = G__10313;
chunk__7723_10300 = G__10314;
count__7724_10301 = G__10315;
i__7725_10302 = G__10316;
continue;
} else {
var vec__7736_10317 = cljs.core.first(seq__7722_10311__$1);
var var_name_10318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7736_10317,(0),null);
var var_type_10319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7736_10317,(1),null);
nex.typechecker.env_add_var(env,var_name_10318,var_type_10319);


var G__10320 = cljs.core.next(seq__7722_10311__$1);
var G__10321 = null;
var G__10322 = (0);
var G__10323 = (0);
seq__7722_10299 = G__10320;
chunk__7723_10300 = G__10321;
count__7724_10301 = G__10322;
i__7725_10302 = G__10323;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e7707){var _ = e7707;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
