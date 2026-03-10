goog.provide('nex.typechecker');
/**
 * Create a new type environment
 */
nex.typechecker.make_type_env = (function nex$typechecker$make_type_env(var_args){
var G__6246 = arguments.length;
switch (G__6246) {
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
var G__6257 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6258 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6257,G__6258) : nex.typechecker.env_lookup_var.call(null,G__6257,G__6258));
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
var G__6271 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6272 = class_name;
var G__6273 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6271,G__6272,G__6273) : nex.typechecker.env_lookup_method.call(null,G__6271,G__6272,G__6273));
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
var G__6280 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6281 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6280,G__6281) : nex.typechecker.env_lookup_class.call(null,G__6280,G__6281));
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
var G__6288 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6290 = var_name;
return (nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2(G__6288,G__6290) : nex.typechecker.env_var_non_nil_QMARK_.call(null,G__6288,G__6290));
} else {
return null;
}
}
});
nex.typechecker.builtin_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, ["Nil",null,"Void",null,"Turtle",null,"Char",null,"Map",null,"File",null,"Console",null,"Real",null,"Decimal",null,"Any",null,"Integer64",null,"Integer",null,"String",null,"Window",null,"Cursor",null,"Process",null,"Function",null,"Image",null,"Array",null,"Set",null,"Boolean",null], null), null);
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

(nex.typechecker.TypeError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6303,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6317 = k6303;
var G__6317__$1 = (((G__6317 instanceof cljs.core.Keyword))?G__6317.fqn:null);
switch (G__6317__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6303,else__5451__auto__);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6321){
var vec__6325 = p__6321;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6325,(1),null);
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

(nex.typechecker.TypeError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6302){
var self__ = this;
var G__6302__$1 = this;
return (new cljs.core.RecordIter((0),G__6302__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.typechecker.TypeError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6304,other6305){
var self__ = this;
var this6304__$1 = this;
return (((!((other6305 == null)))) && ((((this6304__$1.constructor === other6305.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6304__$1.message,other6305.message)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6304__$1.line,other6305.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6304__$1.column,other6305.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6304__$1.__extmap,other6305.__extmap)))))))))));
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

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6303){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6357 = k6303;
var G__6357__$1 = (((G__6357 instanceof cljs.core.Keyword))?G__6357.fqn:null);
switch (G__6357__$1) {
case "message":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6303);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6302){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6358 = cljs.core.keyword_identical_QMARK_;
var expr__6359 = k__5457__auto__;
if(cljs.core.truth_((pred__6358.cljs$core$IFn$_invoke$arity$2 ? pred__6358.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__6359) : pred__6358.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__6359)))){
return (new nex.typechecker.TypeError(G__6302,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6358.cljs$core$IFn$_invoke$arity$2 ? pred__6358.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__6359) : pred__6358.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__6359)))){
return (new nex.typechecker.TypeError(self__.message,G__6302,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6358.cljs$core$IFn$_invoke$arity$2 ? pred__6358.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__6359) : pred__6358.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__6359)))){
return (new nex.typechecker.TypeError(self__.message,self__.line,G__6302,self__.__meta,self__.__extmap,null));
} else {
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6302),null));
}
}
}
}));

(nex.typechecker.TypeError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6302){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,G__6302,self__.__extmap,self__.__hash));
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
nex.typechecker.map__GT_TypeError = (function nex$typechecker$map__GT_TypeError(G__6310){
var extmap__5490__auto__ = (function (){var G__6383 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6310,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6310)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6383);
} else {
return G__6383;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6310),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6310),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6310),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6387 = arguments.length;
switch (G__6387) {
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
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6396){
var map__6401 = p__6396;
var map__6401__$1 = cljs.core.__destructure_map(map__6401);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6401__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6401__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var G__6440 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6440__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6440,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6440);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6440__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6440__$1;
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
var G__6452 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6452,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6447_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6447_SHARP_);
}));
} else {
return G__6452;
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
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6453 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6453.cljs$core$IFn$_invoke$arity$1 ? fexpr__6453.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6453.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6459 = arguments.length;
switch (G__6459) {
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
var G__6464 = arguments.length;
switch (G__6464) {
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
var or__5142__auto__ = cljs.core.some((function (p1__6501_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6501_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6502_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6502_SHARP_,seen__$1);
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
var or__5142__auto__ = ((cljs.core.map_QMARK_(a1)) && (((cljs.core.map_QMARK_(a2)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a1),"Set")) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a2),"Set")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(a1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null))))))))));
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,a1,a2);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = (function (){var and__5140__auto__ = typeof a1 === 'string';
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
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = (function (){var and__5140__auto__ = cljs.core.map_QMARK_(a1);
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
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
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

var seq__6570 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6571 = null;
var count__6572 = (0);
var i__6573 = (0);
while(true){
if((i__6573 < count__6572)){
var vec__6590 = chunk__6571.cljs$core$IIndexed$_nth$arity$2(null,i__6573);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6590,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6590,(1),null);
var temp__5823__auto___8521 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___8521)){
var constraint_8523 = temp__5823__auto___8521;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_8523))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_8523)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_8523)))], null));
}
} else {
}


var G__8537 = seq__6570;
var G__8538 = chunk__6571;
var G__8539 = count__6572;
var G__8540 = (i__6573 + (1));
seq__6570 = G__8537;
chunk__6571 = G__8538;
count__6572 = G__8539;
i__6573 = G__8540;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6570);
if(temp__5823__auto__){
var seq__6570__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6570__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6570__$1);
var G__8542 = cljs.core.chunk_rest(seq__6570__$1);
var G__8543 = c__5673__auto__;
var G__8544 = cljs.core.count(c__5673__auto__);
var G__8545 = (0);
seq__6570 = G__8542;
chunk__6571 = G__8543;
count__6572 = G__8544;
i__6573 = G__8545;
continue;
} else {
var vec__6603 = cljs.core.first(seq__6570__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6603,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6603,(1),null);
var temp__5823__auto___8552__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___8552__$1)){
var constraint_8558 = temp__5823__auto___8552__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_8558))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_8558)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_8558)))], null));
}
} else {
}


var G__8569 = cljs.core.next(seq__6570__$1);
var G__8570 = null;
var G__8571 = (0);
var G__8572 = (0);
seq__6570 = G__8569;
chunk__6571 = G__8570;
count__6572 = G__8571;
i__6573 = G__8572;
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

var seq__6622 = cljs.core.seq(args);
var chunk__6623 = null;
var count__6624 = (0);
var i__6625 = (0);
while(true){
if((i__6625 < count__6624)){
var arg = chunk__6623.cljs$core$IIndexed$_nth$arity$2(null,i__6625);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__8591 = seq__6622;
var G__8592 = chunk__6623;
var G__8593 = count__6624;
var G__8594 = (i__6625 + (1));
seq__6622 = G__8591;
chunk__6623 = G__8592;
count__6624 = G__8593;
i__6625 = G__8594;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6622);
if(temp__5823__auto__){
var seq__6622__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6622__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6622__$1);
var G__8600 = cljs.core.chunk_rest(seq__6622__$1);
var G__8601 = c__5673__auto__;
var G__8602 = cljs.core.count(c__5673__auto__);
var G__8603 = (0);
seq__6622 = G__8600;
chunk__6623 = G__8601;
count__6624 = G__8602;
i__6625 = G__8603;
continue;
} else {
var arg = cljs.core.first(seq__6622__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__8610 = cljs.core.next(seq__6622__$1);
var G__8611 = null;
var G__8612 = (0);
var G__8613 = (0);
seq__6622 = G__8610;
chunk__6623 = G__8611;
count__6624 = G__8612;
i__6625 = G__8613;
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
var G__6634 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6634__$1 = (((G__6634 instanceof cljs.core.Keyword))?G__6634.fqn:null);
switch (G__6634__$1) {
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
return cljs.core.some((function (p__6636){
var map__6637 = p__6636;
var map__6637__$1 = cljs.core.__destructure_map(map__6637);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member),new cljs.core.Keyword(null,"field","field",-1302436500))) && (((cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),field_name)))))){
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
return cljs.core.some((function (p__6644){
var map__6645 = p__6644;
var map__6645__$1 = cljs.core.__destructure_map(map__6645);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
 * Return feature members with section visibility copied onto each member.
 */
nex.typechecker.feature_members = (function nex$typechecker$feature_members(class_def){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6647_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6647_SHARP_))){
return p1__6647_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6647_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
}
}),new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def)], 0));
});
nex.typechecker.public_member_QMARK_ = (function nex$typechecker$public_member_QMARK_(member){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(member)));
});
/**
 * Look up a constant on a class and its parent chain.
 * Local constants always apply; inherited constants must be public.
 */
nex.typechecker.lookup_class_constant = (function nex$typechecker$lookup_class_constant(env,class_name,constant_name){
var lookup_constant = (function nex$typechecker$lookup_class_constant_$_lookup_constant(cn,visited,inherited_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cn;
if(cljs.core.truth_(and__5140__auto__)){
return (!(cljs.core.contains_QMARK_(visited,cn)));
} else {
return and__5140__auto__;
}
})())){
var class_def = nex.typechecker.env_lookup_class(env,cn);
var visited_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,cn);
var own_constant = (cljs.core.truth_(class_def)?cljs.core.some((function (member){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member),new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5140__auto__){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member);
if(cljs.core.truth_(and__5140__auto____$1)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),constant_name)) && (((cljs.core.not(inherited_QMARK_)) || (nex.typechecker.public_member_QMARK_(member)))));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return member;
} else {
return null;
}
}),nex.typechecker.feature_members(class_def)):null);
var or__5142__auto__ = own_constant;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(class_def)){
return cljs.core.some((function (p__6659){
var map__6660 = p__6659;
var map__6660__$1 = cljs.core.__destructure_map(map__6660);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6660__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
return nex$typechecker$lookup_class_constant_$_lookup_constant(parent,visited_SINGLEQUOTE_,true);
}),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def));
} else {
return null;
}
}
} else {
return null;
}
});
return lookup_constant(class_name,cljs.core.PersistentHashSet.EMPTY,false);
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6661_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6661_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6665){
var map__6666 = p__6665;
var map__6666__$1 = cljs.core.__destructure_map(map__6666);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6666__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6672){
var map__6673 = p__6672;
var map__6673__$1 = cljs.core.__destructure_map(map__6673);
var expr = map__6673__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var temp__5821__auto__ = nex.typechecker.env_lookup_var(env,name);
if(cljs.core.truth_(temp__5821__auto__)){
var var_type = temp__5821__auto__;
return var_type;
} else {
var temp__5821__auto____$1 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5821__auto____$1)){
var current_class = temp__5821__auto____$1;
var temp__5821__auto____$2 = nex.typechecker.lookup_class_constant(env,current_class,name);
if(cljs.core.truth_(temp__5821__auto____$2)){
var constant = temp__5821__auto____$2;
return new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(constant);
} else {
var temp__5821__auto____$3 = nex.typechecker.lookup_class_method(env,current_class,name);
if(cljs.core.truth_(temp__5821__auto____$3)){
var method_sig = temp__5821__auto____$3;
var or__5142__auto__ = new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Void";
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))], null));
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Undefined variable: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))], null));
}
}
});
/**
 * Check the type of a binary operation
 */
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6677){
var map__6678 = p__6677;
var map__6678__$1 = cljs.core.__destructure_map(map__6678);
var expr = map__6678__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6678__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6678__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6678__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,left) : nex.typechecker.check_expression.call(null,env,left));
var right_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,right) : nex.typechecker.check_expression.call(null,env,right));
var left_base = (function (){var t = nex.typechecker.attachable_type(left_type);
if(cljs.core.map_QMARK_(t)){
return new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t);
} else {
return t;
}
})();
var right_base = (function (){var t = nex.typechecker.attachable_type(right_type);
if(cljs.core.map_QMARK_(t)){
return new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(t);
} else {
return t;
}
})();
var G__6688 = operator;
switch (G__6688) {
case "+":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left_base,"String")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(right_base,"String")))){
return "String";
} else {
if(((nex.typechecker.is_numeric_type_QMARK_(left_type)) && (nex.typechecker.is_numeric_type_QMARK_(right_type)))){
return left_type;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric or String operands"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric or String operands, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));

}
}

break;
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
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6708){
var map__6709 = p__6708;
var map__6709__$1 = cljs.core.__destructure_map(map__6709);
var unary_expr = map__6709__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6709__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6709__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6709__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var operand_node = (function (){var or__5142__auto__ = operand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expr;
}
})();
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand_node) : nex.typechecker.check_expression.call(null,env,operand_node));
var G__6710 = operator;
switch (G__6710) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6715_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6715_SHARP_,p1__6715_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6716_SHARP_){
if(cljs.core.truth_(p1__6716_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6716_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6717_SHARP_){
if(cljs.core.truth_(p1__6717_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6717_SHARP_);
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
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6734){
var map__6735 = p__6734;
var map__6735__$1 = cljs.core.__destructure_map(map__6735);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6747){
var map__6748 = p__6747;
var map__6748__$1 = cljs.core.__destructure_map(map__6748);
var expr = map__6748__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6748__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6749 = env;
var G__6750 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2(G__6749,G__6750) : nex.typechecker.check_create.call(null,G__6749,G__6750));
} else {
if(cljs.core.truth_(target)){
var target_name = ((typeof target === 'string')?target:null);
var class_target = (cljs.core.truth_(target_name)?nex.typechecker.env_lookup_class(env,target_name):null);
var target_type = (cljs.core.truth_(class_target)?target_name:((typeof target === 'string')?nex.typechecker.env_lookup_var(env,target):(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,target) : nex.typechecker.check_expression.call(null,env,target))));
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
if(((cljs.core.not(class_target)) && (((target_detachable_QMARK_) && (cljs.core.not(guarded_QMARK_)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Feature access on detachable target requires nil-check: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot call feature '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+"' on detachable "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(normalized_target))+". Wrap with: if <obj> /= nil then <obj>."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+"(...) end"))], null));
} else {
}

if(cljs.core.truth_((function (){var and__5140__auto__ = class_target;
if(cljs.core.truth_(and__5140__auto__)){
return has_parens === false;
} else {
return and__5140__auto__;
}
})())){
var temp__5821__auto__ = nex.typechecker.lookup_class_constant(env,base_type,method);
if(cljs.core.truth_(temp__5821__auto__)){
var constant = temp__5821__auto__;
return nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(constant),type_map);
} else {
return "Any";
}
} else {
var temp__5821__auto__ = nex.typechecker.lookup_class_method(env,base_type,method);
if(cljs.core.truth_(temp__5821__auto__)){
var method_sig = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6753_8738 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6754_8739 = null;
var count__6755_8741 = (0);
var i__6756_8742 = (0);
while(true){
if((i__6756_8742 < count__6755_8741)){
var vec__6769_8743 = chunk__6754_8739.cljs$core$IIndexed$_nth$arity$2(null,i__6756_8742);
var arg_8744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6769_8743,(0),null);
var param_8745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6769_8743,(1),null);
var arg_type_8746 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8744) : nex.typechecker.check_expression.call(null,env,arg_8744));
var param_type_8747 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8745),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8746,param_type_8747))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8747))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8746))))], null));
}


var G__8748 = seq__6753_8738;
var G__8749 = chunk__6754_8739;
var G__8750 = count__6755_8741;
var G__8751 = (i__6756_8742 + (1));
seq__6753_8738 = G__8748;
chunk__6754_8739 = G__8749;
count__6755_8741 = G__8750;
i__6756_8742 = G__8751;
continue;
} else {
var temp__5823__auto___8752 = cljs.core.seq(seq__6753_8738);
if(temp__5823__auto___8752){
var seq__6753_8753__$1 = temp__5823__auto___8752;
if(cljs.core.chunked_seq_QMARK_(seq__6753_8753__$1)){
var c__5673__auto___8754 = cljs.core.chunk_first(seq__6753_8753__$1);
var G__8755 = cljs.core.chunk_rest(seq__6753_8753__$1);
var G__8756 = c__5673__auto___8754;
var G__8757 = cljs.core.count(c__5673__auto___8754);
var G__8758 = (0);
seq__6753_8738 = G__8755;
chunk__6754_8739 = G__8756;
count__6755_8741 = G__8757;
i__6756_8742 = G__8758;
continue;
} else {
var vec__6773_8759 = cljs.core.first(seq__6753_8753__$1);
var arg_8760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773_8759,(0),null);
var param_8761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773_8759,(1),null);
var arg_type_8762 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8760) : nex.typechecker.check_expression.call(null,env,arg_8760));
var param_type_8763 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8761),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8762,param_type_8763))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8763))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8762))))], null));
}


var G__8765 = cljs.core.next(seq__6753_8753__$1);
var G__8766 = null;
var G__8767 = (0);
var G__8768 = (0);
seq__6753_8738 = G__8765;
chunk__6754_8739 = G__8766;
count__6755_8741 = G__8767;
i__6756_8742 = G__8768;
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

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_of")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_of expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_of expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var G__6776_8769 = env;
var G__6777_8770 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6776_8769,G__6777_8770) : nex.typechecker.check_expression.call(null,G__6776_8769,G__6777_8770));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_8771 = (function (){var G__6780 = env;
var G__6781 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6780,G__6781) : nex.typechecker.check_expression.call(null,G__6780,G__6781));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_8771),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_8771))))], null));
}

var G__6782_8772 = env;
var G__6783_8773 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6782_8772,G__6783_8773) : nex.typechecker.check_expression.call(null,G__6782_8772,G__6783_8773));

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

var seq__6785_8774 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6786_8775 = null;
var count__6787_8776 = (0);
var i__6788_8777 = (0);
while(true){
if((i__6788_8777 < count__6787_8776)){
var vec__6795_8782 = chunk__6786_8775.cljs$core$IIndexed$_nth$arity$2(null,i__6788_8777);
var arg_8783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795_8782,(0),null);
var param_8784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795_8782,(1),null);
var arg_type_8789 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8783) : nex.typechecker.check_expression.call(null,env,arg_8783));
var param_type_8790 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8784),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8789,param_type_8790))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8790))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8789))))], null));
}


var G__8795 = seq__6785_8774;
var G__8796 = chunk__6786_8775;
var G__8797 = count__6787_8776;
var G__8798 = (i__6788_8777 + (1));
seq__6785_8774 = G__8795;
chunk__6786_8775 = G__8796;
count__6787_8776 = G__8797;
i__6788_8777 = G__8798;
continue;
} else {
var temp__5823__auto___8799 = cljs.core.seq(seq__6785_8774);
if(temp__5823__auto___8799){
var seq__6785_8800__$1 = temp__5823__auto___8799;
if(cljs.core.chunked_seq_QMARK_(seq__6785_8800__$1)){
var c__5673__auto___8801 = cljs.core.chunk_first(seq__6785_8800__$1);
var G__8802 = cljs.core.chunk_rest(seq__6785_8800__$1);
var G__8803 = c__5673__auto___8801;
var G__8804 = cljs.core.count(c__5673__auto___8801);
var G__8805 = (0);
seq__6785_8774 = G__8802;
chunk__6786_8775 = G__8803;
count__6787_8776 = G__8804;
i__6788_8777 = G__8805;
continue;
} else {
var vec__6802_8806 = cljs.core.first(seq__6785_8800__$1);
var arg_8807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802_8806,(0),null);
var param_8808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802_8806,(1),null);
var arg_type_8809 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8807) : nex.typechecker.check_expression.call(null,env,arg_8807));
var param_type_8810 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8808),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8809,param_type_8810))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8810))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8809))))], null));
}


var G__8812 = cljs.core.next(seq__6785_8800__$1);
var G__8813 = null;
var G__8814 = (0);
var G__8815 = (0);
seq__6785_8774 = G__8812;
chunk__6786_8775 = G__8813;
count__6787_8776 = G__8814;
i__6788_8777 = G__8815;
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

var seq__6806_8821 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6807_8822 = null;
var count__6808_8823 = (0);
var i__6809_8824 = (0);
while(true){
if((i__6809_8824 < count__6808_8823)){
var vec__6818_8825 = chunk__6807_8822.cljs$core$IIndexed$_nth$arity$2(null,i__6809_8824);
var arg_8826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6818_8825,(0),null);
var param_8827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6818_8825,(1),null);
var arg_type_8829 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8826) : nex.typechecker.check_expression.call(null,env,arg_8826));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8829,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8827)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8827))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_8829)))], null));
}


var G__8833 = seq__6806_8821;
var G__8834 = chunk__6807_8822;
var G__8835 = count__6808_8823;
var G__8836 = (i__6809_8824 + (1));
seq__6806_8821 = G__8833;
chunk__6807_8822 = G__8834;
count__6808_8823 = G__8835;
i__6809_8824 = G__8836;
continue;
} else {
var temp__5823__auto___8837 = cljs.core.seq(seq__6806_8821);
if(temp__5823__auto___8837){
var seq__6806_8838__$1 = temp__5823__auto___8837;
if(cljs.core.chunked_seq_QMARK_(seq__6806_8838__$1)){
var c__5673__auto___8839 = cljs.core.chunk_first(seq__6806_8838__$1);
var G__8840 = cljs.core.chunk_rest(seq__6806_8838__$1);
var G__8841 = c__5673__auto___8839;
var G__8842 = cljs.core.count(c__5673__auto___8839);
var G__8843 = (0);
seq__6806_8821 = G__8840;
chunk__6807_8822 = G__8841;
count__6808_8823 = G__8842;
i__6809_8824 = G__8843;
continue;
} else {
var vec__6821_8844 = cljs.core.first(seq__6806_8838__$1);
var arg_8845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821_8844,(0),null);
var param_8846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821_8844,(1),null);
var arg_type_8847 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8845) : nex.typechecker.check_expression.call(null,env,arg_8845));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8847,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8846)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8846))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_8847)))], null));
}


var G__8848 = cljs.core.next(seq__6806_8838__$1);
var G__8849 = null;
var G__8850 = (0);
var G__8851 = (0);
seq__6806_8821 = G__8848;
chunk__6807_8822 = G__8849;
count__6808_8823 = G__8850;
i__6809_8824 = G__8851;
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
var seq__6824_8852 = cljs.core.seq(args);
var chunk__6825_8853 = null;
var count__6826_8854 = (0);
var i__6827_8855 = (0);
while(true){
if((i__6827_8855 < count__6826_8854)){
var arg_8856 = chunk__6825_8853.cljs$core$IIndexed$_nth$arity$2(null,i__6827_8855);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8856) : nex.typechecker.check_expression.call(null,env,arg_8856));


var G__8857 = seq__6824_8852;
var G__8858 = chunk__6825_8853;
var G__8859 = count__6826_8854;
var G__8860 = (i__6827_8855 + (1));
seq__6824_8852 = G__8857;
chunk__6825_8853 = G__8858;
count__6826_8854 = G__8859;
i__6827_8855 = G__8860;
continue;
} else {
var temp__5823__auto___8861 = cljs.core.seq(seq__6824_8852);
if(temp__5823__auto___8861){
var seq__6824_8862__$1 = temp__5823__auto___8861;
if(cljs.core.chunked_seq_QMARK_(seq__6824_8862__$1)){
var c__5673__auto___8863 = cljs.core.chunk_first(seq__6824_8862__$1);
var G__8864 = cljs.core.chunk_rest(seq__6824_8862__$1);
var G__8865 = c__5673__auto___8863;
var G__8866 = cljs.core.count(c__5673__auto___8863);
var G__8867 = (0);
seq__6824_8852 = G__8864;
chunk__6825_8853 = G__8865;
count__6826_8854 = G__8866;
i__6827_8855 = G__8867;
continue;
} else {
var arg_8868 = cljs.core.first(seq__6824_8862__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8868) : nex.typechecker.check_expression.call(null,env,arg_8868));


var G__8869 = cljs.core.next(seq__6824_8862__$1);
var G__8870 = null;
var G__8871 = (0);
var G__8872 = (0);
seq__6824_8852 = G__8869;
chunk__6825_8853 = G__8870;
count__6826_8854 = G__8871;
i__6827_8855 = G__8872;
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
var seq__6828_8873 = cljs.core.seq(args);
var chunk__6829_8874 = null;
var count__6830_8875 = (0);
var i__6831_8876 = (0);
while(true){
if((i__6831_8876 < count__6830_8875)){
var arg_8877 = chunk__6829_8874.cljs$core$IIndexed$_nth$arity$2(null,i__6831_8876);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8877) : nex.typechecker.check_expression.call(null,env,arg_8877));


var G__8883 = seq__6828_8873;
var G__8884 = chunk__6829_8874;
var G__8885 = count__6830_8875;
var G__8886 = (i__6831_8876 + (1));
seq__6828_8873 = G__8883;
chunk__6829_8874 = G__8884;
count__6830_8875 = G__8885;
i__6831_8876 = G__8886;
continue;
} else {
var temp__5823__auto___8887 = cljs.core.seq(seq__6828_8873);
if(temp__5823__auto___8887){
var seq__6828_8892__$1 = temp__5823__auto___8887;
if(cljs.core.chunked_seq_QMARK_(seq__6828_8892__$1)){
var c__5673__auto___8894 = cljs.core.chunk_first(seq__6828_8892__$1);
var G__8896 = cljs.core.chunk_rest(seq__6828_8892__$1);
var G__8897 = c__5673__auto___8894;
var G__8898 = cljs.core.count(c__5673__auto___8894);
var G__8899 = (0);
seq__6828_8873 = G__8896;
chunk__6829_8874 = G__8897;
count__6830_8875 = G__8898;
i__6831_8876 = G__8899;
continue;
} else {
var arg_8903 = cljs.core.first(seq__6828_8892__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8903) : nex.typechecker.check_expression.call(null,env,arg_8903));


var G__8908 = cljs.core.next(seq__6828_8892__$1);
var G__8909 = null;
var G__8910 = (0);
var G__8911 = (0);
seq__6828_8873 = G__8908;
chunk__6829_8874 = G__8909;
count__6830_8875 = G__8910;
i__6831_8876 = G__8911;
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
}
});
/**
 * Check the type of a create expression
 */
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6834){
var map__6835 = p__6834;
var map__6835__$1 = cljs.core.__destructure_map(map__6835);
var expr = map__6835__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6835__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var seq__6836_8925 = cljs.core.seq(args);
var chunk__6837_8926 = null;
var count__6838_8927 = (0);
var i__6839_8928 = (0);
while(true){
if((i__6839_8928 < count__6838_8927)){
var arg_8934 = chunk__6837_8926.cljs$core$IIndexed$_nth$arity$2(null,i__6839_8928);
var arg_type_8935 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8934) : nex.typechecker.check_expression.call(null,env,arg_8934));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8935,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8948 = seq__6836_8925;
var G__8949 = chunk__6837_8926;
var G__8950 = count__6838_8927;
var G__8951 = (i__6839_8928 + (1));
seq__6836_8925 = G__8948;
chunk__6837_8926 = G__8949;
count__6838_8927 = G__8950;
i__6839_8928 = G__8951;
continue;
} else {
var temp__5823__auto___8953 = cljs.core.seq(seq__6836_8925);
if(temp__5823__auto___8953){
var seq__6836_8954__$1 = temp__5823__auto___8953;
if(cljs.core.chunked_seq_QMARK_(seq__6836_8954__$1)){
var c__5673__auto___8955 = cljs.core.chunk_first(seq__6836_8954__$1);
var G__8956 = cljs.core.chunk_rest(seq__6836_8954__$1);
var G__8957 = c__5673__auto___8955;
var G__8958 = cljs.core.count(c__5673__auto___8955);
var G__8959 = (0);
seq__6836_8925 = G__8956;
chunk__6837_8926 = G__8957;
count__6838_8927 = G__8958;
i__6839_8928 = G__8959;
continue;
} else {
var arg_8960 = cljs.core.first(seq__6836_8954__$1);
var arg_type_8961 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8960) : nex.typechecker.check_expression.call(null,env,arg_8960));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8961,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8962 = cljs.core.next(seq__6836_8954__$1);
var G__8963 = null;
var G__8964 = (0);
var G__8965 = (0);
seq__6836_8925 = G__8962;
chunk__6837_8926 = G__8963;
count__6838_8927 = G__8964;
i__6839_8928 = G__8965;
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
var constructors_8966 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__8967 = cljs.core.seq(constructors_8966);
var type_map_8968 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_8969 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_8970 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_8969);
if(((has_constructors_QMARK__8967) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_8970)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8969)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8969)))], null));
}

var params_8971 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_8970);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_8971),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8969)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_8971))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6840_8972 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_8971));
var chunk__6841_8973 = null;
var count__6842_8974 = (0);
var i__6843_8975 = (0);
while(true){
if((i__6843_8975 < count__6842_8974)){
var vec__6850_8976 = chunk__6841_8973.cljs$core$IIndexed$_nth$arity$2(null,i__6843_8975);
var arg_8977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6850_8976,(0),null);
var param_8978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6850_8976,(1),null);
var arg_type_8979 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8977) : nex.typechecker.check_expression.call(null,env,arg_8977));
var param_type_8980 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8978),type_map_8968);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8979,param_type_8980))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8969)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8980))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8979))))], null));
}


var G__8981 = seq__6840_8972;
var G__8982 = chunk__6841_8973;
var G__8983 = count__6842_8974;
var G__8984 = (i__6843_8975 + (1));
seq__6840_8972 = G__8981;
chunk__6841_8973 = G__8982;
count__6842_8974 = G__8983;
i__6843_8975 = G__8984;
continue;
} else {
var temp__5823__auto___8985 = cljs.core.seq(seq__6840_8972);
if(temp__5823__auto___8985){
var seq__6840_8986__$1 = temp__5823__auto___8985;
if(cljs.core.chunked_seq_QMARK_(seq__6840_8986__$1)){
var c__5673__auto___8987 = cljs.core.chunk_first(seq__6840_8986__$1);
var G__8988 = cljs.core.chunk_rest(seq__6840_8986__$1);
var G__8989 = c__5673__auto___8987;
var G__8990 = cljs.core.count(c__5673__auto___8987);
var G__8991 = (0);
seq__6840_8972 = G__8988;
chunk__6841_8973 = G__8989;
count__6842_8974 = G__8990;
i__6843_8975 = G__8991;
continue;
} else {
var vec__6853_8992 = cljs.core.first(seq__6840_8986__$1);
var arg_8993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6853_8992,(0),null);
var param_8994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6853_8992,(1),null);
var arg_type_8995 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8993) : nex.typechecker.check_expression.call(null,env,arg_8993));
var param_type_8996 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8994),type_map_8968);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8995,param_type_8996))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8969)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8996))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8995))))], null));
}


var G__8998 = cljs.core.next(seq__6840_8986__$1);
var G__8999 = null;
var G__9000 = (0);
var G__9001 = (0);
seq__6840_8972 = G__8998;
chunk__6841_8973 = G__8999;
count__6842_8974 = G__9000;
i__6843_8975 = G__9001;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6856){
var map__6857 = p__6856;
var map__6857__$1 = cljs.core.__destructure_map(map__6857);
var expr = map__6857__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6857__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6858 = env;
var G__6859 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6858,G__6859) : nex.typechecker.check_expression.call(null,G__6858,G__6859));
})();
var seq__6860_9002 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6861_9003 = null;
var count__6862_9004 = (0);
var i__6863_9005 = (0);
while(true){
if((i__6863_9005 < count__6862_9004)){
var elem_9010 = chunk__6861_9003.cljs$core$IIndexed$_nth$arity$2(null,i__6863_9005);
var elem_type_9012 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_9010) : nex.typechecker.check_expression.call(null,env,elem_9010));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_9012))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_9012))))], null));
}


var G__9024 = seq__6860_9002;
var G__9025 = chunk__6861_9003;
var G__9026 = count__6862_9004;
var G__9027 = (i__6863_9005 + (1));
seq__6860_9002 = G__9024;
chunk__6861_9003 = G__9025;
count__6862_9004 = G__9026;
i__6863_9005 = G__9027;
continue;
} else {
var temp__5823__auto___9029 = cljs.core.seq(seq__6860_9002);
if(temp__5823__auto___9029){
var seq__6860_9034__$1 = temp__5823__auto___9029;
if(cljs.core.chunked_seq_QMARK_(seq__6860_9034__$1)){
var c__5673__auto___9035 = cljs.core.chunk_first(seq__6860_9034__$1);
var G__9036 = cljs.core.chunk_rest(seq__6860_9034__$1);
var G__9037 = c__5673__auto___9035;
var G__9038 = cljs.core.count(c__5673__auto___9035);
var G__9039 = (0);
seq__6860_9002 = G__9036;
chunk__6861_9003 = G__9037;
count__6862_9004 = G__9038;
i__6863_9005 = G__9039;
continue;
} else {
var elem_9040 = cljs.core.first(seq__6860_9034__$1);
var elem_type_9041 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_9040) : nex.typechecker.check_expression.call(null,env,elem_9040));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_9041))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_9041))))], null));
}


var G__9042 = cljs.core.next(seq__6860_9034__$1);
var G__9043 = null;
var G__9044 = (0);
var G__9045 = (0);
seq__6860_9002 = G__9042;
chunk__6861_9003 = G__9043;
count__6862_9004 = G__9044;
i__6863_9005 = G__9045;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6864){
var map__6865 = p__6864;
var map__6865__$1 = cljs.core.__destructure_map(map__6865);
var expr = map__6865__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6865__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6866 = env;
var G__6867 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6866,G__6867) : nex.typechecker.check_expression.call(null,G__6866,G__6867));
})();
var val_type = (function (){var G__6868 = env;
var G__6869 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6868,G__6869) : nex.typechecker.check_expression.call(null,G__6868,G__6869));
})();
var seq__6870_9049 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6871_9050 = null;
var count__6872_9051 = (0);
var i__6873_9052 = (0);
while(true){
if((i__6873_9052 < count__6872_9051)){
var entry_9053 = chunk__6871_9050.cljs$core$IIndexed$_nth$arity$2(null,i__6873_9052);
var k_type_9054 = (function (){var G__6882 = env;
var G__6883 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_9053);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6882,G__6883) : nex.typechecker.check_expression.call(null,G__6882,G__6883));
})();
var v_type_9055 = (function (){var G__6884 = env;
var G__6885 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_9053);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6884,G__6885) : nex.typechecker.check_expression.call(null,G__6884,G__6885));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_9054);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_9055);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__9056 = seq__6870_9049;
var G__9057 = chunk__6871_9050;
var G__9058 = count__6872_9051;
var G__9059 = (i__6873_9052 + (1));
seq__6870_9049 = G__9056;
chunk__6871_9050 = G__9057;
count__6872_9051 = G__9058;
i__6873_9052 = G__9059;
continue;
} else {
var temp__5823__auto___9060 = cljs.core.seq(seq__6870_9049);
if(temp__5823__auto___9060){
var seq__6870_9061__$1 = temp__5823__auto___9060;
if(cljs.core.chunked_seq_QMARK_(seq__6870_9061__$1)){
var c__5673__auto___9062 = cljs.core.chunk_first(seq__6870_9061__$1);
var G__9063 = cljs.core.chunk_rest(seq__6870_9061__$1);
var G__9064 = c__5673__auto___9062;
var G__9065 = cljs.core.count(c__5673__auto___9062);
var G__9066 = (0);
seq__6870_9049 = G__9063;
chunk__6871_9050 = G__9064;
count__6872_9051 = G__9065;
i__6873_9052 = G__9066;
continue;
} else {
var entry_9067 = cljs.core.first(seq__6870_9061__$1);
var k_type_9068 = (function (){var G__6886 = env;
var G__6887 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_9067);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6886,G__6887) : nex.typechecker.check_expression.call(null,G__6886,G__6887));
})();
var v_type_9069 = (function (){var G__6888 = env;
var G__6889 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_9067);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6888,G__6889) : nex.typechecker.check_expression.call(null,G__6888,G__6889));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_9068);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_9069);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__9070 = cljs.core.next(seq__6870_9061__$1);
var G__9071 = null;
var G__9072 = (0);
var G__9073 = (0);
seq__6870_9049 = G__9070;
chunk__6871_9050 = G__9071;
count__6872_9051 = G__9072;
i__6873_9052 = G__9073;
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
 * Check the type of a set literal
 */
nex.typechecker.check_set_literal = (function nex$typechecker$check_set_literal(env,p__6890){
var map__6891 = p__6890;
var map__6891__$1 = cljs.core.__destructure_map(map__6891);
var expr = map__6891__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6891__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null)], null);
} else {
var first_type = (function (){var G__6892 = env;
var G__6893 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6892,G__6893) : nex.typechecker.check_expression.call(null,G__6892,G__6893));
})();
var seq__6894_9074 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6895_9075 = null;
var count__6896_9076 = (0);
var i__6897_9077 = (0);
while(true){
if((i__6897_9077 < count__6896_9076)){
var elem_9078 = chunk__6895_9075.cljs$core$IIndexed$_nth$arity$2(null,i__6897_9077);
var elem_type_9079 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_9078) : nex.typechecker.check_expression.call(null,env,elem_9078));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_9079))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_9079))))], null));
}


var G__9080 = seq__6894_9074;
var G__9081 = chunk__6895_9075;
var G__9082 = count__6896_9076;
var G__9083 = (i__6897_9077 + (1));
seq__6894_9074 = G__9080;
chunk__6895_9075 = G__9081;
count__6896_9076 = G__9082;
i__6897_9077 = G__9083;
continue;
} else {
var temp__5823__auto___9084 = cljs.core.seq(seq__6894_9074);
if(temp__5823__auto___9084){
var seq__6894_9085__$1 = temp__5823__auto___9084;
if(cljs.core.chunked_seq_QMARK_(seq__6894_9085__$1)){
var c__5673__auto___9086 = cljs.core.chunk_first(seq__6894_9085__$1);
var G__9087 = cljs.core.chunk_rest(seq__6894_9085__$1);
var G__9088 = c__5673__auto___9086;
var G__9089 = cljs.core.count(c__5673__auto___9086);
var G__9090 = (0);
seq__6894_9074 = G__9087;
chunk__6895_9075 = G__9088;
count__6896_9076 = G__9089;
i__6897_9077 = G__9090;
continue;
} else {
var elem_9091 = cljs.core.first(seq__6894_9085__$1);
var elem_type_9092 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_9091) : nex.typechecker.check_expression.call(null,env,elem_9091));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_9092))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_9092))))], null));
}


var G__9093 = cljs.core.next(seq__6894_9085__$1);
var G__9094 = null;
var G__9095 = (0);
var G__9096 = (0);
seq__6894_9074 = G__9093;
chunk__6895_9075 = G__9094;
count__6896_9076 = G__9095;
i__6897_9077 = G__9096;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_type], null)], null);
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
var G__6898 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6898__$1 = (((G__6898 instanceof cljs.core.Keyword))?G__6898.fqn:null);
switch (G__6898__$1) {
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
case "set-literal":
return nex.typechecker.check_set_literal(env,expr);

break;
case "map-literal":
return nex.typechecker.check_map_literal(env,expr);

break;
case "subscript":
var target_type = (function (){var G__6899 = env;
var G__6900 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6899,G__6900) : nex.typechecker.check_expression.call(null,G__6899,G__6900));
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
var cond_type = (function (){var G__6901 = env;
var G__6902 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6901,G__6902) : nex.typechecker.check_expression.call(null,G__6901,G__6902));
})();
var cons_type = (function (){var G__6903 = env;
var G__6904 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6903,G__6904) : nex.typechecker.check_expression.call(null,G__6903,G__6904));
})();
var alt_type = (function (){var G__6906 = env;
var G__6907 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6906,G__6907) : nex.typechecker.check_expression.call(null,G__6906,G__6907));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6909 = env;
var G__6910 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6909,G__6910) : nex.typechecker.check_expression.call(null,G__6909,G__6910));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6912){
var map__6913 = p__6912;
var map__6913__$1 = cljs.core.__destructure_map(map__6913);
var stmt = map__6913__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6913__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6913__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5823__auto___9102 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto___9102)){
var current_class_9103 = temp__5823__auto___9102;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class_9103,target))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)))], null));
} else {
}
} else {
}

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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6922){
var map__6923 = p__6922;
var map__6923__$1 = cljs.core.__destructure_map(map__6923);
var stmt = map__6923__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,new cljs.core.Keyword(null,"value","value",305978217));
var synthetic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6923__$1,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862));
var val_type = nex.typechecker.check_expression(env,value);
var inferred_type = (function (){var or__5142__auto__ = var_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(synthetic)){
return val_type;
} else {
return null;
}
}
})();
if(cljs.core.truth_(inferred_type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type annotation required for variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"'"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type annotation required for variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"'. Use: let "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+": <Type> := ..."))], null));
}

if(cljs.core.truth_(var_type)){
nex.typechecker.validate_type_annotation(env,var_type);
} else {
}

if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,val_type,inferred_type))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in let binding for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(val_type))+" to variable '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+"' of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(inferred_type))))], null));
}

return nex.typechecker.env_add_var(env,name,inferred_type);
});
/**
 * Check an if statement
 */
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6932){
var map__6933 = p__6932;
var map__6933__$1 = cljs.core.__destructure_map(map__6933);
var stmt = map__6933__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6933__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6933__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6933__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6933__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_9106 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9106,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9106)))], null));
}

var then_env_9107 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___9108 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___9108)){
var non_nil_var_9109 = temp__5823__auto___9108;
nex.typechecker.env_mark_non_nil(then_env_9107,non_nil_var_9109);
} else {
}

var temp__5823__auto___9110 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___9110)){
var map__6934_9111 = temp__5823__auto___9110;
var map__6934_9112__$1 = cljs.core.__destructure_map(map__6934_9111);
var name_9113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6934_9112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_9114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6934_9112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_9107,name_9113,type_9114);

nex.typechecker.env_mark_non_nil(then_env_9107,name_9113);
} else {
}

var seq__6939_9115 = cljs.core.seq(then);
var chunk__6940_9116 = null;
var count__6941_9117 = (0);
var i__6942_9118 = (0);
while(true){
if((i__6942_9118 < count__6941_9117)){
var stmt_9119__$1 = chunk__6940_9116.cljs$core$IIndexed$_nth$arity$2(null,i__6942_9118);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_9107,stmt_9119__$1) : nex.typechecker.check_statement.call(null,then_env_9107,stmt_9119__$1));


var G__9120 = seq__6939_9115;
var G__9121 = chunk__6940_9116;
var G__9122 = count__6941_9117;
var G__9123 = (i__6942_9118 + (1));
seq__6939_9115 = G__9120;
chunk__6940_9116 = G__9121;
count__6941_9117 = G__9122;
i__6942_9118 = G__9123;
continue;
} else {
var temp__5823__auto___9128 = cljs.core.seq(seq__6939_9115);
if(temp__5823__auto___9128){
var seq__6939_9129__$1 = temp__5823__auto___9128;
if(cljs.core.chunked_seq_QMARK_(seq__6939_9129__$1)){
var c__5673__auto___9130 = cljs.core.chunk_first(seq__6939_9129__$1);
var G__9131 = cljs.core.chunk_rest(seq__6939_9129__$1);
var G__9132 = c__5673__auto___9130;
var G__9133 = cljs.core.count(c__5673__auto___9130);
var G__9134 = (0);
seq__6939_9115 = G__9131;
chunk__6940_9116 = G__9132;
count__6941_9117 = G__9133;
i__6942_9118 = G__9134;
continue;
} else {
var stmt_9139__$1 = cljs.core.first(seq__6939_9129__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_9107,stmt_9139__$1) : nex.typechecker.check_statement.call(null,then_env_9107,stmt_9139__$1));


var G__9140 = cljs.core.next(seq__6939_9129__$1);
var G__9141 = null;
var G__9142 = (0);
var G__9143 = (0);
seq__6939_9115 = G__9140;
chunk__6940_9116 = G__9141;
count__6941_9117 = G__9142;
i__6942_9118 = G__9143;
continue;
}
} else {
}
}
break;
}

var seq__6947_9144 = cljs.core.seq(elseif);
var chunk__6948_9145 = null;
var count__6949_9146 = (0);
var i__6950_9147 = (0);
while(true){
if((i__6950_9147 < count__6949_9146)){
var clause_9152 = chunk__6948_9145.cljs$core$IIndexed$_nth$arity$2(null,i__6950_9147);
var ei_cond_type_9153 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9152));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_9153,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_9153)))], null));
}

var elseif_env_9154 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___9155 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9152));
if(cljs.core.truth_(temp__5823__auto___9155)){
var non_nil_var_9156 = temp__5823__auto___9155;
nex.typechecker.env_mark_non_nil(elseif_env_9154,non_nil_var_9156);
} else {
}

var temp__5823__auto___9161 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9152));
if(cljs.core.truth_(temp__5823__auto___9161)){
var map__6991_9162 = temp__5823__auto___9161;
var map__6991_9163__$1 = cljs.core.__destructure_map(map__6991_9162);
var name_9164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6991_9163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_9165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6991_9163__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_9154,name_9164,type_9165);

nex.typechecker.env_mark_non_nil(elseif_env_9154,name_9164);
} else {
}

var seq__6995_9170 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_9152));
var chunk__6996_9171 = null;
var count__6997_9172 = (0);
var i__6998_9173 = (0);
while(true){
if((i__6998_9173 < count__6997_9172)){
var stmt_9174__$1 = chunk__6996_9171.cljs$core$IIndexed$_nth$arity$2(null,i__6998_9173);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_9154,stmt_9174__$1) : nex.typechecker.check_statement.call(null,elseif_env_9154,stmt_9174__$1));


var G__9179 = seq__6995_9170;
var G__9180 = chunk__6996_9171;
var G__9181 = count__6997_9172;
var G__9182 = (i__6998_9173 + (1));
seq__6995_9170 = G__9179;
chunk__6996_9171 = G__9180;
count__6997_9172 = G__9181;
i__6998_9173 = G__9182;
continue;
} else {
var temp__5823__auto___9183 = cljs.core.seq(seq__6995_9170);
if(temp__5823__auto___9183){
var seq__6995_9184__$1 = temp__5823__auto___9183;
if(cljs.core.chunked_seq_QMARK_(seq__6995_9184__$1)){
var c__5673__auto___9185 = cljs.core.chunk_first(seq__6995_9184__$1);
var G__9186 = cljs.core.chunk_rest(seq__6995_9184__$1);
var G__9187 = c__5673__auto___9185;
var G__9188 = cljs.core.count(c__5673__auto___9185);
var G__9189 = (0);
seq__6995_9170 = G__9186;
chunk__6996_9171 = G__9187;
count__6997_9172 = G__9188;
i__6998_9173 = G__9189;
continue;
} else {
var stmt_9190__$1 = cljs.core.first(seq__6995_9184__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_9154,stmt_9190__$1) : nex.typechecker.check_statement.call(null,elseif_env_9154,stmt_9190__$1));


var G__9191 = cljs.core.next(seq__6995_9184__$1);
var G__9192 = null;
var G__9193 = (0);
var G__9194 = (0);
seq__6995_9170 = G__9191;
chunk__6996_9171 = G__9192;
count__6997_9172 = G__9193;
i__6998_9173 = G__9194;
continue;
}
} else {
}
}
break;
}


var G__9195 = seq__6947_9144;
var G__9196 = chunk__6948_9145;
var G__9197 = count__6949_9146;
var G__9198 = (i__6950_9147 + (1));
seq__6947_9144 = G__9195;
chunk__6948_9145 = G__9196;
count__6949_9146 = G__9197;
i__6950_9147 = G__9198;
continue;
} else {
var temp__5823__auto___9199 = cljs.core.seq(seq__6947_9144);
if(temp__5823__auto___9199){
var seq__6947_9200__$1 = temp__5823__auto___9199;
if(cljs.core.chunked_seq_QMARK_(seq__6947_9200__$1)){
var c__5673__auto___9201 = cljs.core.chunk_first(seq__6947_9200__$1);
var G__9202 = cljs.core.chunk_rest(seq__6947_9200__$1);
var G__9203 = c__5673__auto___9201;
var G__9204 = cljs.core.count(c__5673__auto___9201);
var G__9205 = (0);
seq__6947_9144 = G__9202;
chunk__6948_9145 = G__9203;
count__6949_9146 = G__9204;
i__6950_9147 = G__9205;
continue;
} else {
var clause_9206 = cljs.core.first(seq__6947_9200__$1);
var ei_cond_type_9207 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9206));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_9207,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_9207)))], null));
}

var elseif_env_9208 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___9209__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9206));
if(cljs.core.truth_(temp__5823__auto___9209__$1)){
var non_nil_var_9210 = temp__5823__auto___9209__$1;
nex.typechecker.env_mark_non_nil(elseif_env_9208,non_nil_var_9210);
} else {
}

var temp__5823__auto___9211__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_9206));
if(cljs.core.truth_(temp__5823__auto___9211__$1)){
var map__7009_9212 = temp__5823__auto___9211__$1;
var map__7009_9213__$1 = cljs.core.__destructure_map(map__7009_9212);
var name_9214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7009_9213__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_9215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7009_9213__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_9208,name_9214,type_9215);

nex.typechecker.env_mark_non_nil(elseif_env_9208,name_9214);
} else {
}

var seq__7010_9216 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_9206));
var chunk__7011_9217 = null;
var count__7012_9218 = (0);
var i__7013_9219 = (0);
while(true){
if((i__7013_9219 < count__7012_9218)){
var stmt_9220__$1 = chunk__7011_9217.cljs$core$IIndexed$_nth$arity$2(null,i__7013_9219);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_9208,stmt_9220__$1) : nex.typechecker.check_statement.call(null,elseif_env_9208,stmt_9220__$1));


var G__9221 = seq__7010_9216;
var G__9222 = chunk__7011_9217;
var G__9223 = count__7012_9218;
var G__9224 = (i__7013_9219 + (1));
seq__7010_9216 = G__9221;
chunk__7011_9217 = G__9222;
count__7012_9218 = G__9223;
i__7013_9219 = G__9224;
continue;
} else {
var temp__5823__auto___9225__$1 = cljs.core.seq(seq__7010_9216);
if(temp__5823__auto___9225__$1){
var seq__7010_9226__$1 = temp__5823__auto___9225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7010_9226__$1)){
var c__5673__auto___9227 = cljs.core.chunk_first(seq__7010_9226__$1);
var G__9228 = cljs.core.chunk_rest(seq__7010_9226__$1);
var G__9229 = c__5673__auto___9227;
var G__9230 = cljs.core.count(c__5673__auto___9227);
var G__9231 = (0);
seq__7010_9216 = G__9228;
chunk__7011_9217 = G__9229;
count__7012_9218 = G__9230;
i__7013_9219 = G__9231;
continue;
} else {
var stmt_9232__$1 = cljs.core.first(seq__7010_9226__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_9208,stmt_9232__$1) : nex.typechecker.check_statement.call(null,elseif_env_9208,stmt_9232__$1));


var G__9233 = cljs.core.next(seq__7010_9226__$1);
var G__9234 = null;
var G__9235 = (0);
var G__9236 = (0);
seq__7010_9216 = G__9233;
chunk__7011_9217 = G__9234;
count__7012_9218 = G__9235;
i__7013_9219 = G__9236;
continue;
}
} else {
}
}
break;
}


var G__9237 = cljs.core.next(seq__6947_9200__$1);
var G__9238 = null;
var G__9239 = (0);
var G__9240 = (0);
seq__6947_9144 = G__9237;
chunk__6948_9145 = G__9238;
count__6949_9146 = G__9239;
i__6950_9147 = G__9240;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__7025 = cljs.core.seq(else$);
var chunk__7026 = null;
var count__7027 = (0);
var i__7028 = (0);
while(true){
if((i__7028 < count__7027)){
var stmt__$1 = chunk__7026.cljs$core$IIndexed$_nth$arity$2(null,i__7028);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__9245 = seq__7025;
var G__9246 = chunk__7026;
var G__9247 = count__7027;
var G__9248 = (i__7028 + (1));
seq__7025 = G__9245;
chunk__7026 = G__9246;
count__7027 = G__9247;
i__7028 = G__9248;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7025);
if(temp__5823__auto__){
var seq__7025__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7025__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7025__$1);
var G__9249 = cljs.core.chunk_rest(seq__7025__$1);
var G__9250 = c__5673__auto__;
var G__9251 = cljs.core.count(c__5673__auto__);
var G__9252 = (0);
seq__7025 = G__9249;
chunk__7026 = G__9250;
count__7027 = G__9251;
i__7028 = G__9252;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__7025__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__9257 = cljs.core.next(seq__7025__$1);
var G__9258 = null;
var G__9259 = (0);
var G__9260 = (0);
seq__7025 = G__9257;
chunk__7026 = G__9258;
count__7027 = G__9259;
i__7028 = G__9260;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__7041){
var map__7042 = p__7041;
var map__7042__$1 = cljs.core.__destructure_map(map__7042);
var stmt = map__7042__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7042__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__7044_9265 = cljs.core.seq(init);
var chunk__7045_9266 = null;
var count__7046_9267 = (0);
var i__7047_9268 = (0);
while(true){
if((i__7047_9268 < count__7046_9267)){
var s_9269 = chunk__7045_9266.cljs$core$IIndexed$_nth$arity$2(null,i__7047_9268);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_9269) : nex.typechecker.check_statement.call(null,loop_env,s_9269));


var G__9270 = seq__7044_9265;
var G__9271 = chunk__7045_9266;
var G__9272 = count__7046_9267;
var G__9273 = (i__7047_9268 + (1));
seq__7044_9265 = G__9270;
chunk__7045_9266 = G__9271;
count__7046_9267 = G__9272;
i__7047_9268 = G__9273;
continue;
} else {
var temp__5823__auto___9274 = cljs.core.seq(seq__7044_9265);
if(temp__5823__auto___9274){
var seq__7044_9275__$1 = temp__5823__auto___9274;
if(cljs.core.chunked_seq_QMARK_(seq__7044_9275__$1)){
var c__5673__auto___9276 = cljs.core.chunk_first(seq__7044_9275__$1);
var G__9280 = cljs.core.chunk_rest(seq__7044_9275__$1);
var G__9281 = c__5673__auto___9276;
var G__9282 = cljs.core.count(c__5673__auto___9276);
var G__9283 = (0);
seq__7044_9265 = G__9280;
chunk__7045_9266 = G__9281;
count__7046_9267 = G__9282;
i__7047_9268 = G__9283;
continue;
} else {
var s_9284 = cljs.core.first(seq__7044_9275__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_9284) : nex.typechecker.check_statement.call(null,loop_env,s_9284));


var G__9285 = cljs.core.next(seq__7044_9275__$1);
var G__9286 = null;
var G__9287 = (0);
var G__9288 = (0);
seq__7044_9265 = G__9285;
chunk__7045_9266 = G__9286;
count__7046_9267 = G__9287;
i__7047_9268 = G__9288;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_9289 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9289,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9289,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9289)))], null));
}
} else {
}

var seq__7051 = cljs.core.seq(body);
var chunk__7052 = null;
var count__7053 = (0);
var i__7054 = (0);
while(true){
if((i__7054 < count__7053)){
var stmt__$1 = chunk__7052.cljs$core$IIndexed$_nth$arity$2(null,i__7054);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__9298 = seq__7051;
var G__9299 = chunk__7052;
var G__9300 = count__7053;
var G__9301 = (i__7054 + (1));
seq__7051 = G__9298;
chunk__7052 = G__9299;
count__7053 = G__9300;
i__7054 = G__9301;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7051);
if(temp__5823__auto__){
var seq__7051__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7051__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7051__$1);
var G__9302 = cljs.core.chunk_rest(seq__7051__$1);
var G__9303 = c__5673__auto__;
var G__9304 = cljs.core.count(c__5673__auto__);
var G__9305 = (0);
seq__7051 = G__9302;
chunk__7052 = G__9303;
count__7053 = G__9304;
i__7054 = G__9305;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__7051__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__9310 = cljs.core.next(seq__7051__$1);
var G__9311 = null;
var G__9312 = (0);
var G__9313 = (0);
seq__7051 = G__9310;
chunk__7052 = G__9311;
count__7053 = G__9312;
i__7054 = G__9313;
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
var G__7059 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__7059__$1 = (((G__7059 instanceof cljs.core.Keyword))?G__7059.fqn:null);
switch (G__7059__$1) {
case "assign":
return nex.typechecker.check_assignment(env,stmt);

break;
case "let":
return nex.typechecker.check_let(env,stmt);

break;
case "call":
return nex.typechecker.check_expression(env,stmt);

break;
case "convert":
return nex.typechecker.check_expression(env,stmt);

break;
case "if":
return nex.typechecker.check_if(env,stmt);

break;
case "loop":
return nex.typechecker.check_loop(env,stmt);

break;
case "scoped-block":
var block_env_9315 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__7063_9316 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__7064_9317 = null;
var count__7065_9318 = (0);
var i__7066_9319 = (0);
while(true){
if((i__7066_9319 < count__7065_9318)){
var s_9320 = chunk__7064_9317.cljs$core$IIndexed$_nth$arity$2(null,i__7066_9319);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_9315,s_9320) : nex.typechecker.check_statement.call(null,block_env_9315,s_9320));


var G__9321 = seq__7063_9316;
var G__9322 = chunk__7064_9317;
var G__9323 = count__7065_9318;
var G__9324 = (i__7066_9319 + (1));
seq__7063_9316 = G__9321;
chunk__7064_9317 = G__9322;
count__7065_9318 = G__9323;
i__7066_9319 = G__9324;
continue;
} else {
var temp__5823__auto___9325 = cljs.core.seq(seq__7063_9316);
if(temp__5823__auto___9325){
var seq__7063_9326__$1 = temp__5823__auto___9325;
if(cljs.core.chunked_seq_QMARK_(seq__7063_9326__$1)){
var c__5673__auto___9327 = cljs.core.chunk_first(seq__7063_9326__$1);
var G__9328 = cljs.core.chunk_rest(seq__7063_9326__$1);
var G__9329 = c__5673__auto___9327;
var G__9330 = cljs.core.count(c__5673__auto___9327);
var G__9331 = (0);
seq__7063_9316 = G__9328;
chunk__7064_9317 = G__9329;
count__7065_9318 = G__9330;
i__7066_9319 = G__9331;
continue;
} else {
var s_9332 = cljs.core.first(seq__7063_9326__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_9315,s_9332) : nex.typechecker.check_statement.call(null,block_env_9315,s_9332));


var G__9333 = cljs.core.next(seq__7063_9326__$1);
var G__9334 = null;
var G__9335 = (0);
var G__9336 = (0);
seq__7063_9316 = G__9333;
chunk__7064_9317 = G__9334;
count__7065_9318 = G__9335;
i__7066_9319 = G__9336;
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

var seq__7083 = cljs.core.seq(rescue);
var chunk__7084 = null;
var count__7085 = (0);
var i__7086 = (0);
while(true){
if((i__7086 < count__7085)){
var s = chunk__7084.cljs$core$IIndexed$_nth$arity$2(null,i__7086);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__9337 = seq__7083;
var G__9338 = chunk__7084;
var G__9339 = count__7085;
var G__9340 = (i__7086 + (1));
seq__7083 = G__9337;
chunk__7084 = G__9338;
count__7085 = G__9339;
i__7086 = G__9340;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__7083);
if(temp__5823__auto____$1){
var seq__7083__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__7083__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7083__$1);
var G__9341 = cljs.core.chunk_rest(seq__7083__$1);
var G__9342 = c__5673__auto__;
var G__9343 = cljs.core.count(c__5673__auto__);
var G__9344 = (0);
seq__7083 = G__9341;
chunk__7084 = G__9342;
count__7085 = G__9343;
i__7086 = G__9344;
continue;
} else {
var s = cljs.core.first(seq__7083__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__9345 = cljs.core.next(seq__7083__$1);
var G__9346 = null;
var G__9347 = (0);
var G__9348 = (0);
seq__7083 = G__9345;
chunk__7084 = G__9346;
count__7085 = G__9347;
i__7086 = G__9348;
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
var seq__7096 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__7097 = null;
var count__7098 = (0);
var i__7099 = (0);
while(true){
if((i__7099 < count__7098)){
var s = chunk__7097.cljs$core$IIndexed$_nth$arity$2(null,i__7099);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__9349 = seq__7096;
var G__9350 = chunk__7097;
var G__9351 = count__7098;
var G__9352 = (i__7099 + (1));
seq__7096 = G__9349;
chunk__7097 = G__9350;
count__7098 = G__9351;
i__7099 = G__9352;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7096);
if(temp__5823__auto__){
var seq__7096__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7096__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7096__$1);
var G__9353 = cljs.core.chunk_rest(seq__7096__$1);
var G__9354 = c__5673__auto__;
var G__9355 = cljs.core.count(c__5673__auto__);
var G__9356 = (0);
seq__7096 = G__9353;
chunk__7097 = G__9354;
count__7098 = G__9355;
i__7099 = G__9356;
continue;
} else {
var s = cljs.core.first(seq__7096__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__9361 = cljs.core.next(seq__7096__$1);
var G__9362 = null;
var G__9363 = (0);
var G__9364 = (0);
seq__7096 = G__9361;
chunk__7097 = G__9362;
count__7098 = G__9363;
i__7099 = G__9364;
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

var seq__7107_9365 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__7108_9366 = null;
var count__7109_9367 = (0);
var i__7110_9368 = (0);
while(true){
if((i__7110_9368 < count__7109_9367)){
var clause_9373 = chunk__7108_9366.cljs$core$IIndexed$_nth$arity$2(null,i__7110_9368);
var G__7115_9374 = env;
var G__7116_9375 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_9373);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__7115_9374,G__7116_9375) : nex.typechecker.check_statement.call(null,G__7115_9374,G__7116_9375));


var G__9376 = seq__7107_9365;
var G__9377 = chunk__7108_9366;
var G__9378 = count__7109_9367;
var G__9379 = (i__7110_9368 + (1));
seq__7107_9365 = G__9376;
chunk__7108_9366 = G__9377;
count__7109_9367 = G__9378;
i__7110_9368 = G__9379;
continue;
} else {
var temp__5823__auto___9380 = cljs.core.seq(seq__7107_9365);
if(temp__5823__auto___9380){
var seq__7107_9381__$1 = temp__5823__auto___9380;
if(cljs.core.chunked_seq_QMARK_(seq__7107_9381__$1)){
var c__5673__auto___9386 = cljs.core.chunk_first(seq__7107_9381__$1);
var G__9387 = cljs.core.chunk_rest(seq__7107_9381__$1);
var G__9388 = c__5673__auto___9386;
var G__9389 = cljs.core.count(c__5673__auto___9386);
var G__9390 = (0);
seq__7107_9365 = G__9387;
chunk__7108_9366 = G__9388;
count__7109_9367 = G__9389;
i__7110_9368 = G__9390;
continue;
} else {
var clause_9391 = cljs.core.first(seq__7107_9381__$1);
var G__7118_9392 = env;
var G__7119_9393 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_9391);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__7118_9392,G__7119_9393) : nex.typechecker.check_statement.call(null,G__7118_9392,G__7119_9393));


var G__9394 = cljs.core.next(seq__7107_9381__$1);
var G__9395 = null;
var G__9396 = (0);
var G__9397 = (0);
seq__7107_9365 = G__9394;
chunk__7108_9366 = G__9395;
count__7109_9367 = G__9396;
i__7110_9368 = G__9397;
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
var _ = (function (){var temp__5823__auto__ = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto__)){
var current_class = temp__5823__auto__;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class,field_name))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign to constant: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)))], null));
} else {
return null;
}
} else {
return null;
}
})();
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
var G__7124 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__7124__$1 = (((G__7124 instanceof cljs.core.Keyword))?G__7124.fqn:null);
switch (G__7124__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__7125 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7125) : nex.typechecker.references_result_QMARK_.call(null,G__7125));
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
var G__7127 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7127) : nex.typechecker.references_result_QMARK_.call(null,G__7127));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__7136){
var map__7137 = p__7136;
var map__7137__$1 = cljs.core.__destructure_map(map__7137);
var method = map__7137__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7137__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__7141_9421 = cljs.core.seq(params);
var chunk__7142_9422 = null;
var count__7143_9423 = (0);
var i__7144_9424 = (0);
while(true){
if((i__7144_9424 < count__7143_9423)){
var param_9425 = chunk__7142_9422.cljs$core$IIndexed$_nth$arity$2(null,i__7144_9424);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9425))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9425));
} else {
}


var G__9426 = seq__7141_9421;
var G__9427 = chunk__7142_9422;
var G__9428 = count__7143_9423;
var G__9429 = (i__7144_9424 + (1));
seq__7141_9421 = G__9426;
chunk__7142_9422 = G__9427;
count__7143_9423 = G__9428;
i__7144_9424 = G__9429;
continue;
} else {
var temp__5823__auto___9430 = cljs.core.seq(seq__7141_9421);
if(temp__5823__auto___9430){
var seq__7141_9431__$1 = temp__5823__auto___9430;
if(cljs.core.chunked_seq_QMARK_(seq__7141_9431__$1)){
var c__5673__auto___9432 = cljs.core.chunk_first(seq__7141_9431__$1);
var G__9433 = cljs.core.chunk_rest(seq__7141_9431__$1);
var G__9434 = c__5673__auto___9432;
var G__9435 = cljs.core.count(c__5673__auto___9432);
var G__9436 = (0);
seq__7141_9421 = G__9433;
chunk__7142_9422 = G__9434;
count__7143_9423 = G__9435;
i__7144_9424 = G__9436;
continue;
} else {
var param_9437 = cljs.core.first(seq__7141_9431__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9437))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9437));
} else {
}


var G__9438 = cljs.core.next(seq__7141_9431__$1);
var G__9439 = null;
var G__9440 = (0);
var G__9441 = (0);
seq__7141_9421 = G__9438;
chunk__7142_9422 = G__9439;
count__7143_9423 = G__9440;
i__7144_9424 = G__9441;
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
return cljs.core.some((function (p1__7132_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__7132_SHARP_));
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

var seq__7153_9442 = cljs.core.seq(params);
var chunk__7154_9443 = null;
var count__7155_9444 = (0);
var i__7156_9445 = (0);
while(true){
if((i__7156_9445 < count__7155_9444)){
var param_9447 = chunk__7154_9443.cljs$core$IIndexed$_nth$arity$2(null,i__7156_9445);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9447),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9447);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9448 = seq__7153_9442;
var G__9449 = chunk__7154_9443;
var G__9450 = count__7155_9444;
var G__9451 = (i__7156_9445 + (1));
seq__7153_9442 = G__9448;
chunk__7154_9443 = G__9449;
count__7155_9444 = G__9450;
i__7156_9445 = G__9451;
continue;
} else {
var temp__5823__auto___9452 = cljs.core.seq(seq__7153_9442);
if(temp__5823__auto___9452){
var seq__7153_9453__$1 = temp__5823__auto___9452;
if(cljs.core.chunked_seq_QMARK_(seq__7153_9453__$1)){
var c__5673__auto___9454 = cljs.core.chunk_first(seq__7153_9453__$1);
var G__9455 = cljs.core.chunk_rest(seq__7153_9453__$1);
var G__9456 = c__5673__auto___9454;
var G__9457 = cljs.core.count(c__5673__auto___9454);
var G__9458 = (0);
seq__7153_9442 = G__9455;
chunk__7154_9443 = G__9456;
count__7155_9444 = G__9457;
i__7156_9445 = G__9458;
continue;
} else {
var param_9459 = cljs.core.first(seq__7153_9453__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9459),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9459);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9460 = cljs.core.next(seq__7153_9453__$1);
var G__9461 = null;
var G__9462 = (0);
var G__9463 = (0);
seq__7153_9442 = G__9460;
chunk__7154_9443 = G__9461;
count__7155_9444 = G__9462;
i__7156_9445 = G__9463;
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

var seq__7164_9464 = cljs.core.seq(require__$1);
var chunk__7165_9465 = null;
var count__7166_9466 = (0);
var i__7167_9467 = (0);
while(true){
if((i__7167_9467 < count__7166_9466)){
var assertion_9468 = chunk__7165_9465.cljs$core$IIndexed$_nth$arity$2(null,i__7167_9467);
var cond_type_9469 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9468));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9469,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9469)))], null));
}


var G__9470 = seq__7164_9464;
var G__9471 = chunk__7165_9465;
var G__9472 = count__7166_9466;
var G__9473 = (i__7167_9467 + (1));
seq__7164_9464 = G__9470;
chunk__7165_9465 = G__9471;
count__7166_9466 = G__9472;
i__7167_9467 = G__9473;
continue;
} else {
var temp__5823__auto___9474 = cljs.core.seq(seq__7164_9464);
if(temp__5823__auto___9474){
var seq__7164_9475__$1 = temp__5823__auto___9474;
if(cljs.core.chunked_seq_QMARK_(seq__7164_9475__$1)){
var c__5673__auto___9476 = cljs.core.chunk_first(seq__7164_9475__$1);
var G__9477 = cljs.core.chunk_rest(seq__7164_9475__$1);
var G__9478 = c__5673__auto___9476;
var G__9479 = cljs.core.count(c__5673__auto___9476);
var G__9480 = (0);
seq__7164_9464 = G__9477;
chunk__7165_9465 = G__9478;
count__7166_9466 = G__9479;
i__7167_9467 = G__9480;
continue;
} else {
var assertion_9481 = cljs.core.first(seq__7164_9475__$1);
var cond_type_9482 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9481));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9482,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9482)))], null));
}


var G__9483 = cljs.core.next(seq__7164_9475__$1);
var G__9484 = null;
var G__9485 = (0);
var G__9486 = (0);
seq__7164_9464 = G__9483;
chunk__7165_9465 = G__9484;
count__7166_9466 = G__9485;
i__7167_9467 = G__9486;
continue;
}
} else {
}
}
break;
}

var seq__7176_9487 = cljs.core.seq(body);
var chunk__7177_9488 = null;
var count__7178_9489 = (0);
var i__7179_9490 = (0);
while(true){
if((i__7179_9490 < count__7178_9489)){
var stmt_9491 = chunk__7177_9488.cljs$core$IIndexed$_nth$arity$2(null,i__7179_9490);
nex.typechecker.check_statement(method_env,stmt_9491);


var G__9492 = seq__7176_9487;
var G__9493 = chunk__7177_9488;
var G__9494 = count__7178_9489;
var G__9495 = (i__7179_9490 + (1));
seq__7176_9487 = G__9492;
chunk__7177_9488 = G__9493;
count__7178_9489 = G__9494;
i__7179_9490 = G__9495;
continue;
} else {
var temp__5823__auto___9496 = cljs.core.seq(seq__7176_9487);
if(temp__5823__auto___9496){
var seq__7176_9497__$1 = temp__5823__auto___9496;
if(cljs.core.chunked_seq_QMARK_(seq__7176_9497__$1)){
var c__5673__auto___9498 = cljs.core.chunk_first(seq__7176_9497__$1);
var G__9499 = cljs.core.chunk_rest(seq__7176_9497__$1);
var G__9500 = c__5673__auto___9498;
var G__9501 = cljs.core.count(c__5673__auto___9498);
var G__9502 = (0);
seq__7176_9487 = G__9499;
chunk__7177_9488 = G__9500;
count__7178_9489 = G__9501;
i__7179_9490 = G__9502;
continue;
} else {
var stmt_9503 = cljs.core.first(seq__7176_9497__$1);
nex.typechecker.check_statement(method_env,stmt_9503);


var G__9504 = cljs.core.next(seq__7176_9497__$1);
var G__9505 = null;
var G__9506 = (0);
var G__9507 = (0);
seq__7176_9487 = G__9504;
chunk__7177_9488 = G__9505;
count__7178_9489 = G__9506;
i__7179_9490 = G__9507;
continue;
}
} else {
}
}
break;
}

var seq__7184_9508 = cljs.core.seq(ensure);
var chunk__7185_9509 = null;
var count__7186_9510 = (0);
var i__7187_9511 = (0);
while(true){
if((i__7187_9511 < count__7186_9510)){
var assertion_9512 = chunk__7185_9509.cljs$core$IIndexed$_nth$arity$2(null,i__7187_9511);
var cond_type_9513 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9512));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9513,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9513)))], null));
}


var G__9514 = seq__7184_9508;
var G__9515 = chunk__7185_9509;
var G__9516 = count__7186_9510;
var G__9517 = (i__7187_9511 + (1));
seq__7184_9508 = G__9514;
chunk__7185_9509 = G__9515;
count__7186_9510 = G__9516;
i__7187_9511 = G__9517;
continue;
} else {
var temp__5823__auto___9518 = cljs.core.seq(seq__7184_9508);
if(temp__5823__auto___9518){
var seq__7184_9519__$1 = temp__5823__auto___9518;
if(cljs.core.chunked_seq_QMARK_(seq__7184_9519__$1)){
var c__5673__auto___9520 = cljs.core.chunk_first(seq__7184_9519__$1);
var G__9521 = cljs.core.chunk_rest(seq__7184_9519__$1);
var G__9522 = c__5673__auto___9520;
var G__9523 = cljs.core.count(c__5673__auto___9520);
var G__9524 = (0);
seq__7184_9508 = G__9521;
chunk__7185_9509 = G__9522;
count__7186_9510 = G__9523;
i__7187_9511 = G__9524;
continue;
} else {
var assertion_9525 = cljs.core.first(seq__7184_9519__$1);
var cond_type_9526 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9525));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9526,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9526)))], null));
}


var G__9527 = cljs.core.next(seq__7184_9519__$1);
var G__9528 = null;
var G__9529 = (0);
var G__9530 = (0);
seq__7184_9508 = G__9527;
chunk__7185_9509 = G__9528;
count__7186_9510 = G__9529;
i__7187_9511 = G__9530;
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

var seq__7194 = cljs.core.seq(rescue);
var chunk__7195 = null;
var count__7196 = (0);
var i__7197 = (0);
while(true){
if((i__7197 < count__7196)){
var stmt = chunk__7195.cljs$core$IIndexed$_nth$arity$2(null,i__7197);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9531 = seq__7194;
var G__9532 = chunk__7195;
var G__9533 = count__7196;
var G__9534 = (i__7197 + (1));
seq__7194 = G__9531;
chunk__7195 = G__9532;
count__7196 = G__9533;
i__7197 = G__9534;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7194);
if(temp__5823__auto__){
var seq__7194__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7194__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7194__$1);
var G__9535 = cljs.core.chunk_rest(seq__7194__$1);
var G__9536 = c__5673__auto__;
var G__9537 = cljs.core.count(c__5673__auto__);
var G__9538 = (0);
seq__7194 = G__9535;
chunk__7195 = G__9536;
count__7196 = G__9537;
i__7197 = G__9538;
continue;
} else {
var stmt = cljs.core.first(seq__7194__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9539 = cljs.core.next(seq__7194__$1);
var G__9540 = null;
var G__9541 = (0);
var G__9542 = (0);
seq__7194 = G__9539;
chunk__7195 = G__9540;
count__7196 = G__9541;
i__7197 = G__9542;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__7204){
var map__7205 = p__7204;
var map__7205__$1 = cljs.core.__destructure_map(map__7205);
var constructor$ = map__7205__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7205__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__7209_9544 = cljs.core.seq(params);
var chunk__7210_9545 = null;
var count__7211_9546 = (0);
var i__7212_9547 = (0);
while(true){
if((i__7212_9547 < count__7211_9546)){
var param_9548 = chunk__7210_9545.cljs$core$IIndexed$_nth$arity$2(null,i__7212_9547);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9548))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9548));
} else {
}


var G__9549 = seq__7209_9544;
var G__9550 = chunk__7210_9545;
var G__9551 = count__7211_9546;
var G__9552 = (i__7212_9547 + (1));
seq__7209_9544 = G__9549;
chunk__7210_9545 = G__9550;
count__7211_9546 = G__9551;
i__7212_9547 = G__9552;
continue;
} else {
var temp__5823__auto___9553 = cljs.core.seq(seq__7209_9544);
if(temp__5823__auto___9553){
var seq__7209_9554__$1 = temp__5823__auto___9553;
if(cljs.core.chunked_seq_QMARK_(seq__7209_9554__$1)){
var c__5673__auto___9555 = cljs.core.chunk_first(seq__7209_9554__$1);
var G__9556 = cljs.core.chunk_rest(seq__7209_9554__$1);
var G__9557 = c__5673__auto___9555;
var G__9558 = cljs.core.count(c__5673__auto___9555);
var G__9559 = (0);
seq__7209_9544 = G__9556;
chunk__7210_9545 = G__9557;
count__7211_9546 = G__9558;
i__7212_9547 = G__9559;
continue;
} else {
var param_9560 = cljs.core.first(seq__7209_9554__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9560))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9560));
} else {
}


var G__9561 = cljs.core.next(seq__7209_9554__$1);
var G__9562 = null;
var G__9563 = (0);
var G__9564 = (0);
seq__7209_9544 = G__9561;
chunk__7210_9545 = G__9562;
count__7211_9546 = G__9563;
i__7212_9547 = G__9564;
continue;
}
} else {
}
}
break;
}

var seq__7216_9565 = cljs.core.seq(params);
var chunk__7217_9566 = null;
var count__7218_9567 = (0);
var i__7219_9568 = (0);
while(true){
if((i__7219_9568 < count__7218_9567)){
var param_9569 = chunk__7217_9566.cljs$core$IIndexed$_nth$arity$2(null,i__7219_9568);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9569),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9569);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9570 = seq__7216_9565;
var G__9571 = chunk__7217_9566;
var G__9572 = count__7218_9567;
var G__9573 = (i__7219_9568 + (1));
seq__7216_9565 = G__9570;
chunk__7217_9566 = G__9571;
count__7218_9567 = G__9572;
i__7219_9568 = G__9573;
continue;
} else {
var temp__5823__auto___9574 = cljs.core.seq(seq__7216_9565);
if(temp__5823__auto___9574){
var seq__7216_9575__$1 = temp__5823__auto___9574;
if(cljs.core.chunked_seq_QMARK_(seq__7216_9575__$1)){
var c__5673__auto___9576 = cljs.core.chunk_first(seq__7216_9575__$1);
var G__9577 = cljs.core.chunk_rest(seq__7216_9575__$1);
var G__9578 = c__5673__auto___9576;
var G__9579 = cljs.core.count(c__5673__auto___9576);
var G__9580 = (0);
seq__7216_9565 = G__9577;
chunk__7217_9566 = G__9578;
count__7218_9567 = G__9579;
i__7219_9568 = G__9580;
continue;
} else {
var param_9581 = cljs.core.first(seq__7216_9575__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_9581),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_9581);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__9582 = cljs.core.next(seq__7216_9575__$1);
var G__9583 = null;
var G__9584 = (0);
var G__9585 = (0);
seq__7216_9565 = G__9582;
chunk__7217_9566 = G__9583;
count__7218_9567 = G__9584;
i__7219_9568 = G__9585;
continue;
}
} else {
}
}
break;
}

var seq__7226_9586 = cljs.core.seq(require__$1);
var chunk__7227_9587 = null;
var count__7228_9588 = (0);
var i__7229_9589 = (0);
while(true){
if((i__7229_9589 < count__7228_9588)){
var assertion_9590 = chunk__7227_9587.cljs$core$IIndexed$_nth$arity$2(null,i__7229_9589);
if(cljs.core.truth_(assertion_9590)){
var cond_type_9591 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9590));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9591,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9591)))], null));
}
} else {
}


var G__9596 = seq__7226_9586;
var G__9597 = chunk__7227_9587;
var G__9598 = count__7228_9588;
var G__9599 = (i__7229_9589 + (1));
seq__7226_9586 = G__9596;
chunk__7227_9587 = G__9597;
count__7228_9588 = G__9598;
i__7229_9589 = G__9599;
continue;
} else {
var temp__5823__auto___9600 = cljs.core.seq(seq__7226_9586);
if(temp__5823__auto___9600){
var seq__7226_9601__$1 = temp__5823__auto___9600;
if(cljs.core.chunked_seq_QMARK_(seq__7226_9601__$1)){
var c__5673__auto___9602 = cljs.core.chunk_first(seq__7226_9601__$1);
var G__9603 = cljs.core.chunk_rest(seq__7226_9601__$1);
var G__9604 = c__5673__auto___9602;
var G__9605 = cljs.core.count(c__5673__auto___9602);
var G__9606 = (0);
seq__7226_9586 = G__9603;
chunk__7227_9587 = G__9604;
count__7228_9588 = G__9605;
i__7229_9589 = G__9606;
continue;
} else {
var assertion_9607 = cljs.core.first(seq__7226_9601__$1);
if(cljs.core.truth_(assertion_9607)){
var cond_type_9608 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9607));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9608,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9608)))], null));
}
} else {
}


var G__9609 = cljs.core.next(seq__7226_9601__$1);
var G__9610 = null;
var G__9611 = (0);
var G__9612 = (0);
seq__7226_9586 = G__9609;
chunk__7227_9587 = G__9610;
count__7228_9588 = G__9611;
i__7229_9589 = G__9612;
continue;
}
} else {
}
}
break;
}

var seq__7236_9613 = cljs.core.seq(body);
var chunk__7237_9614 = null;
var count__7238_9615 = (0);
var i__7239_9616 = (0);
while(true){
if((i__7239_9616 < count__7238_9615)){
var stmt_9617 = chunk__7237_9614.cljs$core$IIndexed$_nth$arity$2(null,i__7239_9616);
nex.typechecker.check_statement(ctor_env,stmt_9617);


var G__9618 = seq__7236_9613;
var G__9619 = chunk__7237_9614;
var G__9620 = count__7238_9615;
var G__9621 = (i__7239_9616 + (1));
seq__7236_9613 = G__9618;
chunk__7237_9614 = G__9619;
count__7238_9615 = G__9620;
i__7239_9616 = G__9621;
continue;
} else {
var temp__5823__auto___9622 = cljs.core.seq(seq__7236_9613);
if(temp__5823__auto___9622){
var seq__7236_9623__$1 = temp__5823__auto___9622;
if(cljs.core.chunked_seq_QMARK_(seq__7236_9623__$1)){
var c__5673__auto___9624 = cljs.core.chunk_first(seq__7236_9623__$1);
var G__9625 = cljs.core.chunk_rest(seq__7236_9623__$1);
var G__9626 = c__5673__auto___9624;
var G__9627 = cljs.core.count(c__5673__auto___9624);
var G__9628 = (0);
seq__7236_9613 = G__9625;
chunk__7237_9614 = G__9626;
count__7238_9615 = G__9627;
i__7239_9616 = G__9628;
continue;
} else {
var stmt_9629 = cljs.core.first(seq__7236_9623__$1);
nex.typechecker.check_statement(ctor_env,stmt_9629);


var G__9630 = cljs.core.next(seq__7236_9623__$1);
var G__9631 = null;
var G__9632 = (0);
var G__9633 = (0);
seq__7236_9613 = G__9630;
chunk__7237_9614 = G__9631;
count__7238_9615 = G__9632;
i__7239_9616 = G__9633;
continue;
}
} else {
}
}
break;
}

var seq__7248_9634 = cljs.core.seq(ensure);
var chunk__7249_9635 = null;
var count__7250_9636 = (0);
var i__7251_9637 = (0);
while(true){
if((i__7251_9637 < count__7250_9636)){
var assertion_9638 = chunk__7249_9635.cljs$core$IIndexed$_nth$arity$2(null,i__7251_9637);
if(cljs.core.truth_(assertion_9638)){
var cond_type_9639 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9638));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9639,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9639)))], null));
}
} else {
}


var G__9640 = seq__7248_9634;
var G__9641 = chunk__7249_9635;
var G__9642 = count__7250_9636;
var G__9643 = (i__7251_9637 + (1));
seq__7248_9634 = G__9640;
chunk__7249_9635 = G__9641;
count__7250_9636 = G__9642;
i__7251_9637 = G__9643;
continue;
} else {
var temp__5823__auto___9644 = cljs.core.seq(seq__7248_9634);
if(temp__5823__auto___9644){
var seq__7248_9645__$1 = temp__5823__auto___9644;
if(cljs.core.chunked_seq_QMARK_(seq__7248_9645__$1)){
var c__5673__auto___9646 = cljs.core.chunk_first(seq__7248_9645__$1);
var G__9647 = cljs.core.chunk_rest(seq__7248_9645__$1);
var G__9648 = c__5673__auto___9646;
var G__9649 = cljs.core.count(c__5673__auto___9646);
var G__9650 = (0);
seq__7248_9634 = G__9647;
chunk__7249_9635 = G__9648;
count__7250_9636 = G__9649;
i__7251_9637 = G__9650;
continue;
} else {
var assertion_9651 = cljs.core.first(seq__7248_9645__$1);
if(cljs.core.truth_(assertion_9651)){
var cond_type_9652 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_9651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_9652,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_9652)))], null));
}
} else {
}


var G__9653 = cljs.core.next(seq__7248_9645__$1);
var G__9654 = null;
var G__9655 = (0);
var G__9656 = (0);
seq__7248_9634 = G__9653;
chunk__7249_9635 = G__9654;
count__7250_9636 = G__9655;
i__7251_9637 = G__9656;
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

var seq__7264 = cljs.core.seq(rescue);
var chunk__7265 = null;
var count__7266 = (0);
var i__7267 = (0);
while(true){
if((i__7267 < count__7266)){
var stmt = chunk__7265.cljs$core$IIndexed$_nth$arity$2(null,i__7267);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9657 = seq__7264;
var G__9658 = chunk__7265;
var G__9659 = count__7266;
var G__9660 = (i__7267 + (1));
seq__7264 = G__9657;
chunk__7265 = G__9658;
count__7266 = G__9659;
i__7267 = G__9660;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7264);
if(temp__5823__auto__){
var seq__7264__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7264__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7264__$1);
var G__9661 = cljs.core.chunk_rest(seq__7264__$1);
var G__9662 = c__5673__auto__;
var G__9663 = cljs.core.count(c__5673__auto__);
var G__9664 = (0);
seq__7264 = G__9661;
chunk__7265 = G__9662;
count__7266 = G__9663;
i__7267 = G__9664;
continue;
} else {
var stmt = cljs.core.first(seq__7264__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__9665 = cljs.core.next(seq__7264__$1);
var G__9666 = null;
var G__9667 = (0);
var G__9668 = (0);
seq__7264 = G__9665;
chunk__7265 = G__9666;
count__7266 = G__9667;
i__7267 = G__9668;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__7275){
var map__7276 = p__7275;
var map__7276__$1 = cljs.core.__destructure_map(map__7276);
var class_def = map__7276__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7276__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7276__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var updated_body_9669 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(section,new cljs.core.Keyword(null,"members","members",159001018),(function (members){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (member){
var member__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(member))?member:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(member,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member__$1),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member__$1))){
var inferred_type = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(member__$1));
var final_type = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return inferred_type;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1));

if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,inferred_type,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in constant "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member__$1))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(inferred_type))+" to constant '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member__$1))+"' of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1)))))], null));
}
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member__$1),final_type);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(member__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493),final_type);
} else {
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member__$1),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member__$1));

return member__$1;
}
} else {
return member__$1;
}
}),members);
}));
} else {
return section;
}
}),body);
var updated_class_def_9670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(class_def,new cljs.core.Keyword(null,"body","body",-2049205669),updated_body_9669);
nex.typechecker.env_add_class(env,name,updated_class_def_9670);

var seq__7284 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nex.typechecker.env_lookup_class(env,name)));
var chunk__7285 = null;
var count__7286 = (0);
var i__7287 = (0);
while(true){
if((i__7287 < count__7286)){
var section = chunk__7285.cljs$core$IIndexed$_nth$arity$2(null,i__7287);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7338_9672 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7339_9673 = null;
var count__7340_9674 = (0);
var i__7341_9675 = (0);
while(true){
if((i__7341_9675 < count__7340_9674)){
var member_9676 = chunk__7339_9673.cljs$core$IIndexed$_nth$arity$2(null,i__7341_9675);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9676),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9676),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9676),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9676)], null));
} else {
}


var G__9677 = seq__7338_9672;
var G__9678 = chunk__7339_9673;
var G__9679 = count__7340_9674;
var G__9680 = (i__7341_9675 + (1));
seq__7338_9672 = G__9677;
chunk__7339_9673 = G__9678;
count__7340_9674 = G__9679;
i__7341_9675 = G__9680;
continue;
} else {
var temp__5823__auto___9681 = cljs.core.seq(seq__7338_9672);
if(temp__5823__auto___9681){
var seq__7338_9682__$1 = temp__5823__auto___9681;
if(cljs.core.chunked_seq_QMARK_(seq__7338_9682__$1)){
var c__5673__auto___9683 = cljs.core.chunk_first(seq__7338_9682__$1);
var G__9684 = cljs.core.chunk_rest(seq__7338_9682__$1);
var G__9685 = c__5673__auto___9683;
var G__9686 = cljs.core.count(c__5673__auto___9683);
var G__9687 = (0);
seq__7338_9672 = G__9684;
chunk__7339_9673 = G__9685;
count__7340_9674 = G__9686;
i__7341_9675 = G__9687;
continue;
} else {
var member_9692 = cljs.core.first(seq__7338_9682__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9692),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9692),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9692),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9692)], null));
} else {
}


var G__9693 = cljs.core.next(seq__7338_9682__$1);
var G__9694 = null;
var G__9695 = (0);
var G__9696 = (0);
seq__7338_9672 = G__9693;
chunk__7339_9673 = G__9694;
count__7340_9674 = G__9695;
i__7341_9675 = G__9696;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7352_9697 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7353_9698 = null;
var count__7354_9699 = (0);
var i__7355_9700 = (0);
while(true){
if((i__7355_9700 < count__7354_9699)){
var ctor_9701 = chunk__7353_9698.cljs$core$IIndexed$_nth$arity$2(null,i__7355_9700);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9701),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9702 = seq__7352_9697;
var G__9703 = chunk__7353_9698;
var G__9704 = count__7354_9699;
var G__9705 = (i__7355_9700 + (1));
seq__7352_9697 = G__9702;
chunk__7353_9698 = G__9703;
count__7354_9699 = G__9704;
i__7355_9700 = G__9705;
continue;
} else {
var temp__5823__auto___9706 = cljs.core.seq(seq__7352_9697);
if(temp__5823__auto___9706){
var seq__7352_9707__$1 = temp__5823__auto___9706;
if(cljs.core.chunked_seq_QMARK_(seq__7352_9707__$1)){
var c__5673__auto___9708 = cljs.core.chunk_first(seq__7352_9707__$1);
var G__9709 = cljs.core.chunk_rest(seq__7352_9707__$1);
var G__9710 = c__5673__auto___9708;
var G__9711 = cljs.core.count(c__5673__auto___9708);
var G__9712 = (0);
seq__7352_9697 = G__9709;
chunk__7353_9698 = G__9710;
count__7354_9699 = G__9711;
i__7355_9700 = G__9712;
continue;
} else {
var ctor_9713 = cljs.core.first(seq__7352_9707__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9713),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9713),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9714 = cljs.core.next(seq__7352_9707__$1);
var G__9715 = null;
var G__9716 = (0);
var G__9717 = (0);
seq__7352_9697 = G__9714;
chunk__7353_9698 = G__9715;
count__7354_9699 = G__9716;
i__7355_9700 = G__9717;
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


var G__9718 = seq__7284;
var G__9719 = chunk__7285;
var G__9720 = count__7286;
var G__9721 = (i__7287 + (1));
seq__7284 = G__9718;
chunk__7285 = G__9719;
count__7286 = G__9720;
i__7287 = G__9721;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7284);
if(temp__5823__auto__){
var seq__7284__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7284__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7284__$1);
var G__9722 = cljs.core.chunk_rest(seq__7284__$1);
var G__9723 = c__5673__auto__;
var G__9724 = cljs.core.count(c__5673__auto__);
var G__9725 = (0);
seq__7284 = G__9722;
chunk__7285 = G__9723;
count__7286 = G__9724;
i__7287 = G__9725;
continue;
} else {
var section = cljs.core.first(seq__7284__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7364_9726 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7365_9727 = null;
var count__7366_9728 = (0);
var i__7367_9729 = (0);
while(true){
if((i__7367_9729 < count__7366_9728)){
var member_9730 = chunk__7365_9727.cljs$core$IIndexed$_nth$arity$2(null,i__7367_9729);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9730),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9730),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9730),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9730)], null));
} else {
}


var G__9731 = seq__7364_9726;
var G__9732 = chunk__7365_9727;
var G__9733 = count__7366_9728;
var G__9734 = (i__7367_9729 + (1));
seq__7364_9726 = G__9731;
chunk__7365_9727 = G__9732;
count__7366_9728 = G__9733;
i__7367_9729 = G__9734;
continue;
} else {
var temp__5823__auto___9735__$1 = cljs.core.seq(seq__7364_9726);
if(temp__5823__auto___9735__$1){
var seq__7364_9736__$1 = temp__5823__auto___9735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7364_9736__$1)){
var c__5673__auto___9737 = cljs.core.chunk_first(seq__7364_9736__$1);
var G__9738 = cljs.core.chunk_rest(seq__7364_9736__$1);
var G__9739 = c__5673__auto___9737;
var G__9740 = cljs.core.count(c__5673__auto___9737);
var G__9741 = (0);
seq__7364_9726 = G__9738;
chunk__7365_9727 = G__9739;
count__7366_9728 = G__9740;
i__7367_9729 = G__9741;
continue;
} else {
var member_9742 = cljs.core.first(seq__7364_9736__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9742),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9742),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9742),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9742)], null));
} else {
}


var G__9743 = cljs.core.next(seq__7364_9736__$1);
var G__9744 = null;
var G__9745 = (0);
var G__9746 = (0);
seq__7364_9726 = G__9743;
chunk__7365_9727 = G__9744;
count__7366_9728 = G__9745;
i__7367_9729 = G__9746;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7377_9747 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__7378_9748 = null;
var count__7379_9749 = (0);
var i__7380_9750 = (0);
while(true){
if((i__7380_9750 < count__7379_9749)){
var ctor_9751 = chunk__7378_9748.cljs$core$IIndexed$_nth$arity$2(null,i__7380_9750);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9751),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9752 = seq__7377_9747;
var G__9753 = chunk__7378_9748;
var G__9754 = count__7379_9749;
var G__9755 = (i__7380_9750 + (1));
seq__7377_9747 = G__9752;
chunk__7378_9748 = G__9753;
count__7379_9749 = G__9754;
i__7380_9750 = G__9755;
continue;
} else {
var temp__5823__auto___9756__$1 = cljs.core.seq(seq__7377_9747);
if(temp__5823__auto___9756__$1){
var seq__7377_9757__$1 = temp__5823__auto___9756__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7377_9757__$1)){
var c__5673__auto___9758 = cljs.core.chunk_first(seq__7377_9757__$1);
var G__9759 = cljs.core.chunk_rest(seq__7377_9757__$1);
var G__9760 = c__5673__auto___9758;
var G__9761 = cljs.core.count(c__5673__auto___9758);
var G__9762 = (0);
seq__7377_9747 = G__9759;
chunk__7378_9748 = G__9760;
count__7379_9749 = G__9761;
i__7380_9750 = G__9762;
continue;
} else {
var ctor_9763 = cljs.core.first(seq__7377_9757__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9763),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9763),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9764 = cljs.core.next(seq__7377_9757__$1);
var G__9765 = null;
var G__9766 = (0);
var G__9767 = (0);
seq__7377_9747 = G__9764;
chunk__7378_9748 = G__9765;
count__7379_9749 = G__9766;
i__7380_9750 = G__9767;
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


var G__9768 = cljs.core.next(seq__7284__$1);
var G__9769 = null;
var G__9770 = (0);
var G__9771 = (0);
seq__7284 = G__9768;
chunk__7285 = G__9769;
count__7286 = G__9770;
i__7287 = G__9771;
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
var seq__7393 = cljs.core.seq(parents);
var chunk__7394 = null;
var count__7395 = (0);
var i__7396 = (0);
while(true){
if((i__7396 < count__7395)){
var map__7407 = chunk__7394.cljs$core$IIndexed$_nth$arity$2(null,i__7396);
var map__7407__$1 = cljs.core.__destructure_map(map__7407);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7407__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9773 = seq__7393;
var G__9774 = chunk__7394;
var G__9775 = count__7395;
var G__9776 = (i__7396 + (1));
seq__7393 = G__9773;
chunk__7394 = G__9774;
count__7395 = G__9775;
i__7396 = G__9776;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7393);
if(temp__5823__auto__){
var seq__7393__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7393__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7393__$1);
var G__9777 = cljs.core.chunk_rest(seq__7393__$1);
var G__9778 = c__5673__auto__;
var G__9779 = cljs.core.count(c__5673__auto__);
var G__9780 = (0);
seq__7393 = G__9777;
chunk__7394 = G__9778;
count__7395 = G__9779;
i__7396 = G__9780;
continue;
} else {
var map__7408 = cljs.core.first(seq__7393__$1);
var map__7408__$1 = cljs.core.__destructure_map(map__7408);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7408__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9781 = cljs.core.next(seq__7393__$1);
var G__9782 = null;
var G__9783 = (0);
var G__9784 = (0);
seq__7393 = G__9781;
chunk__7394 = G__9782;
count__7395 = G__9783;
i__7396 = G__9784;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__7418){
var map__7419 = p__7418;
var map__7419__$1 = cljs.core.__destructure_map(map__7419);
var class_def = map__7419__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7419__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
var class_def__$1 = (function (){var or__5142__auto__ = nex.typechecker.env_lookup_class(env,name);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return class_def;
}
})();
var body__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def__$1);
var invariant__$1 = new cljs.core.Keyword(null,"invariant","invariant",-1658446508).cljs$core$IFn$_invoke$arity$1(class_def__$1);
var parents__$1 = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def__$1);
if(cljs.core.truth_(parents__$1)){
nex.typechecker.check_inheritance(env,name,parents__$1);
} else {
}

var seq__7420_9786 = cljs.core.seq(invariant__$1);
var chunk__7421_9787 = null;
var count__7422_9788 = (0);
var i__7423_9789 = (0);
while(true){
if((i__7423_9789 < count__7422_9788)){
var assertion_9794 = chunk__7421_9787.cljs$core$IIndexed$_nth$arity$2(null,i__7423_9789);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9794;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9794);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9795 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9794));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9795,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9795,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9795)))], null));
}
} else {
}


var G__9796 = seq__7420_9786;
var G__9797 = chunk__7421_9787;
var G__9798 = count__7422_9788;
var G__9799 = (i__7423_9789 + (1));
seq__7420_9786 = G__9796;
chunk__7421_9787 = G__9797;
count__7422_9788 = G__9798;
i__7423_9789 = G__9799;
continue;
} else {
var temp__5823__auto___9800 = cljs.core.seq(seq__7420_9786);
if(temp__5823__auto___9800){
var seq__7420_9801__$1 = temp__5823__auto___9800;
if(cljs.core.chunked_seq_QMARK_(seq__7420_9801__$1)){
var c__5673__auto___9802 = cljs.core.chunk_first(seq__7420_9801__$1);
var G__9803 = cljs.core.chunk_rest(seq__7420_9801__$1);
var G__9804 = c__5673__auto___9802;
var G__9805 = cljs.core.count(c__5673__auto___9802);
var G__9806 = (0);
seq__7420_9786 = G__9803;
chunk__7421_9787 = G__9804;
count__7422_9788 = G__9805;
i__7423_9789 = G__9806;
continue;
} else {
var assertion_9807 = cljs.core.first(seq__7420_9801__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9807;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9807);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9808 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9807));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9808,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9808,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9808)))], null));
}
} else {
}


var G__9809 = cljs.core.next(seq__7420_9801__$1);
var G__9810 = null;
var G__9811 = (0);
var G__9812 = (0);
seq__7420_9786 = G__9809;
chunk__7421_9787 = G__9810;
count__7422_9788 = G__9811;
i__7423_9789 = G__9812;
continue;
}
} else {
}
}
break;
}

var seq__7424_9813 = cljs.core.seq(body__$1);
var chunk__7425_9814 = null;
var count__7426_9815 = (0);
var i__7427_9816 = (0);
while(true){
if((i__7427_9816 < count__7426_9815)){
var section_9817 = chunk__7425_9814.cljs$core$IIndexed$_nth$arity$2(null,i__7427_9816);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9817),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7447_9818 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9817));
var chunk__7448_9819 = null;
var count__7449_9820 = (0);
var i__7450_9821 = (0);
while(true){
if((i__7450_9821 < count__7449_9820)){
var member_9822 = chunk__7448_9819.cljs$core$IIndexed$_nth$arity$2(null,i__7450_9821);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9822),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9822);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9822),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9822))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9822));
}
} else {
}
}


var G__9823 = seq__7447_9818;
var G__9824 = chunk__7448_9819;
var G__9825 = count__7449_9820;
var G__9826 = (i__7450_9821 + (1));
seq__7447_9818 = G__9823;
chunk__7448_9819 = G__9824;
count__7449_9820 = G__9825;
i__7450_9821 = G__9826;
continue;
} else {
var temp__5823__auto___9827 = cljs.core.seq(seq__7447_9818);
if(temp__5823__auto___9827){
var seq__7447_9828__$1 = temp__5823__auto___9827;
if(cljs.core.chunked_seq_QMARK_(seq__7447_9828__$1)){
var c__5673__auto___9829 = cljs.core.chunk_first(seq__7447_9828__$1);
var G__9830 = cljs.core.chunk_rest(seq__7447_9828__$1);
var G__9831 = c__5673__auto___9829;
var G__9832 = cljs.core.count(c__5673__auto___9829);
var G__9833 = (0);
seq__7447_9818 = G__9830;
chunk__7448_9819 = G__9831;
count__7449_9820 = G__9832;
i__7450_9821 = G__9833;
continue;
} else {
var member_9834 = cljs.core.first(seq__7447_9828__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9834),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9834);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9834),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9834))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9834));
}
} else {
}
}


var G__9838 = cljs.core.next(seq__7447_9828__$1);
var G__9839 = null;
var G__9840 = (0);
var G__9841 = (0);
seq__7447_9818 = G__9838;
chunk__7448_9819 = G__9839;
count__7449_9820 = G__9840;
i__7450_9821 = G__9841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9817),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7452_9842 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9817));
var chunk__7453_9843 = null;
var count__7454_9844 = (0);
var i__7455_9845 = (0);
while(true){
if((i__7455_9845 < count__7454_9844)){
var ctor_9846 = chunk__7453_9843.cljs$core$IIndexed$_nth$arity$2(null,i__7455_9845);
nex.typechecker.check_constructor(env,name,ctor_9846);


var G__9847 = seq__7452_9842;
var G__9848 = chunk__7453_9843;
var G__9849 = count__7454_9844;
var G__9850 = (i__7455_9845 + (1));
seq__7452_9842 = G__9847;
chunk__7453_9843 = G__9848;
count__7454_9844 = G__9849;
i__7455_9845 = G__9850;
continue;
} else {
var temp__5823__auto___9851 = cljs.core.seq(seq__7452_9842);
if(temp__5823__auto___9851){
var seq__7452_9852__$1 = temp__5823__auto___9851;
if(cljs.core.chunked_seq_QMARK_(seq__7452_9852__$1)){
var c__5673__auto___9853 = cljs.core.chunk_first(seq__7452_9852__$1);
var G__9854 = cljs.core.chunk_rest(seq__7452_9852__$1);
var G__9855 = c__5673__auto___9853;
var G__9856 = cljs.core.count(c__5673__auto___9853);
var G__9857 = (0);
seq__7452_9842 = G__9854;
chunk__7453_9843 = G__9855;
count__7454_9844 = G__9856;
i__7455_9845 = G__9857;
continue;
} else {
var ctor_9858 = cljs.core.first(seq__7452_9852__$1);
nex.typechecker.check_constructor(env,name,ctor_9858);


var G__9859 = cljs.core.next(seq__7452_9852__$1);
var G__9860 = null;
var G__9861 = (0);
var G__9862 = (0);
seq__7452_9842 = G__9859;
chunk__7453_9843 = G__9860;
count__7454_9844 = G__9861;
i__7455_9845 = G__9862;
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


var G__9863 = seq__7424_9813;
var G__9864 = chunk__7425_9814;
var G__9865 = count__7426_9815;
var G__9866 = (i__7427_9816 + (1));
seq__7424_9813 = G__9863;
chunk__7425_9814 = G__9864;
count__7426_9815 = G__9865;
i__7427_9816 = G__9866;
continue;
} else {
var temp__5823__auto___9867 = cljs.core.seq(seq__7424_9813);
if(temp__5823__auto___9867){
var seq__7424_9868__$1 = temp__5823__auto___9867;
if(cljs.core.chunked_seq_QMARK_(seq__7424_9868__$1)){
var c__5673__auto___9869 = cljs.core.chunk_first(seq__7424_9868__$1);
var G__9870 = cljs.core.chunk_rest(seq__7424_9868__$1);
var G__9871 = c__5673__auto___9869;
var G__9872 = cljs.core.count(c__5673__auto___9869);
var G__9873 = (0);
seq__7424_9813 = G__9870;
chunk__7425_9814 = G__9871;
count__7426_9815 = G__9872;
i__7427_9816 = G__9873;
continue;
} else {
var section_9874 = cljs.core.first(seq__7424_9868__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9874),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7457_9876 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9874));
var chunk__7458_9877 = null;
var count__7459_9878 = (0);
var i__7460_9879 = (0);
while(true){
if((i__7460_9879 < count__7459_9878)){
var member_9880 = chunk__7458_9877.cljs$core$IIndexed$_nth$arity$2(null,i__7460_9879);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9880),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9880);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9880),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9880))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9880));
}
} else {
}
}


var G__9882 = seq__7457_9876;
var G__9883 = chunk__7458_9877;
var G__9884 = count__7459_9878;
var G__9885 = (i__7460_9879 + (1));
seq__7457_9876 = G__9882;
chunk__7458_9877 = G__9883;
count__7459_9878 = G__9884;
i__7460_9879 = G__9885;
continue;
} else {
var temp__5823__auto___9886__$1 = cljs.core.seq(seq__7457_9876);
if(temp__5823__auto___9886__$1){
var seq__7457_9887__$1 = temp__5823__auto___9886__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7457_9887__$1)){
var c__5673__auto___9888 = cljs.core.chunk_first(seq__7457_9887__$1);
var G__9889 = cljs.core.chunk_rest(seq__7457_9887__$1);
var G__9890 = c__5673__auto___9888;
var G__9891 = cljs.core.count(c__5673__auto___9888);
var G__9892 = (0);
seq__7457_9876 = G__9889;
chunk__7458_9877 = G__9890;
count__7459_9878 = G__9891;
i__7460_9879 = G__9892;
continue;
} else {
var member_9893 = cljs.core.first(seq__7457_9887__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9893),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9893);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9893),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9893))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9893));
}
} else {
}
}


var G__9894 = cljs.core.next(seq__7457_9887__$1);
var G__9895 = null;
var G__9896 = (0);
var G__9897 = (0);
seq__7457_9876 = G__9894;
chunk__7458_9877 = G__9895;
count__7459_9878 = G__9896;
i__7460_9879 = G__9897;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9874),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7461_9898 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9874));
var chunk__7462_9899 = null;
var count__7463_9900 = (0);
var i__7464_9901 = (0);
while(true){
if((i__7464_9901 < count__7463_9900)){
var ctor_9902 = chunk__7462_9899.cljs$core$IIndexed$_nth$arity$2(null,i__7464_9901);
nex.typechecker.check_constructor(env,name,ctor_9902);


var G__9903 = seq__7461_9898;
var G__9904 = chunk__7462_9899;
var G__9905 = count__7463_9900;
var G__9906 = (i__7464_9901 + (1));
seq__7461_9898 = G__9903;
chunk__7462_9899 = G__9904;
count__7463_9900 = G__9905;
i__7464_9901 = G__9906;
continue;
} else {
var temp__5823__auto___9907__$1 = cljs.core.seq(seq__7461_9898);
if(temp__5823__auto___9907__$1){
var seq__7461_9908__$1 = temp__5823__auto___9907__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7461_9908__$1)){
var c__5673__auto___9909 = cljs.core.chunk_first(seq__7461_9908__$1);
var G__9910 = cljs.core.chunk_rest(seq__7461_9908__$1);
var G__9911 = c__5673__auto___9909;
var G__9912 = cljs.core.count(c__5673__auto___9909);
var G__9913 = (0);
seq__7461_9898 = G__9910;
chunk__7462_9899 = G__9911;
count__7463_9900 = G__9912;
i__7464_9901 = G__9913;
continue;
} else {
var ctor_9914 = cljs.core.first(seq__7461_9908__$1);
nex.typechecker.check_constructor(env,name,ctor_9914);


var G__9916 = cljs.core.next(seq__7461_9908__$1);
var G__9917 = null;
var G__9918 = (0);
var G__9919 = (0);
seq__7461_9898 = G__9916;
chunk__7462_9899 = G__9917;
count__7463_9900 = G__9918;
i__7464_9901 = G__9919;
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


var G__9920 = cljs.core.next(seq__7424_9868__$1);
var G__9921 = null;
var G__9922 = (0);
var G__9923 = (0);
seq__7424_9813 = G__9920;
chunk__7425_9814 = G__9921;
count__7426_9815 = G__9922;
i__7427_9816 = G__9923;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7414_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7414_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__7414_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7413_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7413_SHARP_));
}),body__$1)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7415_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__7415_SHARP_));
}),body__$1)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7498){
var map__7499 = p__7498;
var map__7499__$1 = cljs.core.__destructure_map(map__7499);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7499__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__7500 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__7500__$1 = (((G__7500 instanceof cljs.core.Keyword))?G__7500.fqn:null);
switch (G__7500__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__7416_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__7416_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7417_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__7417_SHARP_));
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

var seq__7502 = cljs.core.seq(constructors);
var chunk__7503 = null;
var count__7504 = (0);
var i__7505 = (0);
while(true){
if((i__7505 < count__7504)){
var map__7509 = chunk__7503.cljs$core$IIndexed$_nth$arity$2(null,i__7505);
var map__7509__$1 = cljs.core.__destructure_map(map__7509);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7509__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9929 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9930 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9929)));
if(cljs.core.seq(missing_9930)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9930))))], null));
} else {
}


var G__9931 = seq__7502;
var G__9932 = chunk__7503;
var G__9933 = count__7504;
var G__9934 = (i__7505 + (1));
seq__7502 = G__9931;
chunk__7503 = G__9932;
count__7504 = G__9933;
i__7505 = G__9934;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7502);
if(temp__5823__auto__){
var seq__7502__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7502__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7502__$1);
var G__9935 = cljs.core.chunk_rest(seq__7502__$1);
var G__9936 = c__5673__auto__;
var G__9937 = cljs.core.count(c__5673__auto__);
var G__9938 = (0);
seq__7502 = G__9935;
chunk__7503 = G__9936;
count__7504 = G__9937;
i__7505 = G__9938;
continue;
} else {
var map__7510 = cljs.core.first(seq__7502__$1);
var map__7510__$1 = cljs.core.__destructure_map(map__7510);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7510__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9939 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9940 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9939)));
if(cljs.core.seq(missing_9940)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9940))))], null));
} else {
}


var G__9941 = cljs.core.next(seq__7502__$1);
var G__9942 = null;
var G__9943 = (0);
var G__9944 = (0);
seq__7502 = G__9941;
chunk__7503 = G__9942;
count__7504 = G__9943;
i__7505 = G__9944;
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

var seq__7513_9945 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__7514_9946 = null;
var count__7515_9947 = (0);
var i__7516_9948 = (0);
while(true){
if((i__7516_9948 < count__7515_9947)){
var scalar_9949 = chunk__7514_9946.cljs$core$IIndexed$_nth$arity$2(null,i__7516_9948);
nex.typechecker.env_add_class(env,scalar_9949,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9949,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9949,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9949,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9950 = seq__7513_9945;
var G__9951 = chunk__7514_9946;
var G__9952 = count__7515_9947;
var G__9953 = (i__7516_9948 + (1));
seq__7513_9945 = G__9950;
chunk__7514_9946 = G__9951;
count__7515_9947 = G__9952;
i__7516_9948 = G__9953;
continue;
} else {
var temp__5823__auto___9954 = cljs.core.seq(seq__7513_9945);
if(temp__5823__auto___9954){
var seq__7513_9955__$1 = temp__5823__auto___9954;
if(cljs.core.chunked_seq_QMARK_(seq__7513_9955__$1)){
var c__5673__auto___9956 = cljs.core.chunk_first(seq__7513_9955__$1);
var G__9957 = cljs.core.chunk_rest(seq__7513_9955__$1);
var G__9958 = c__5673__auto___9956;
var G__9959 = cljs.core.count(c__5673__auto___9956);
var G__9960 = (0);
seq__7513_9945 = G__9957;
chunk__7514_9946 = G__9958;
count__7515_9947 = G__9959;
i__7516_9948 = G__9960;
continue;
} else {
var scalar_9961 = cljs.core.first(seq__7513_9955__$1);
nex.typechecker.env_add_class(env,scalar_9961,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9961,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9961,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9961,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9962 = cljs.core.next(seq__7513_9955__$1);
var G__9963 = null;
var G__9964 = (0);
var G__9965 = (0);
seq__7513_9945 = G__9962;
chunk__7514_9946 = G__9963;
count__7515_9947 = G__9964;
i__7516_9948 = G__9965;
continue;
}
} else {
}
}
break;
}

var seq__7531_9966 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["bitwise_set","bitwise_or","bitwise_logical_right_shift","bitwise_unset","bitwise_and","bitwise_right_shift","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","bitwise_rotate_left","bitwise_xor"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)]));
var chunk__7532_9967 = null;
var count__7533_9968 = (0);
var i__7534_9969 = (0);
while(true){
if((i__7534_9969 < count__7533_9968)){
var vec__7541_9971 = chunk__7532_9967.cljs$core$IIndexed$_nth$arity$2(null,i__7534_9969);
var method_name_9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7541_9971,(0),null);
var sig_9973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7541_9971,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9972,sig_9973);


var G__9975 = seq__7531_9966;
var G__9976 = chunk__7532_9967;
var G__9977 = count__7533_9968;
var G__9978 = (i__7534_9969 + (1));
seq__7531_9966 = G__9975;
chunk__7532_9967 = G__9976;
count__7533_9968 = G__9977;
i__7534_9969 = G__9978;
continue;
} else {
var temp__5823__auto___9979 = cljs.core.seq(seq__7531_9966);
if(temp__5823__auto___9979){
var seq__7531_9980__$1 = temp__5823__auto___9979;
if(cljs.core.chunked_seq_QMARK_(seq__7531_9980__$1)){
var c__5673__auto___9981 = cljs.core.chunk_first(seq__7531_9980__$1);
var G__9982 = cljs.core.chunk_rest(seq__7531_9980__$1);
var G__9983 = c__5673__auto___9981;
var G__9984 = cljs.core.count(c__5673__auto___9981);
var G__9985 = (0);
seq__7531_9966 = G__9982;
chunk__7532_9967 = G__9983;
count__7533_9968 = G__9984;
i__7534_9969 = G__9985;
continue;
} else {
var vec__7544_9986 = cljs.core.first(seq__7531_9980__$1);
var method_name_9987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7544_9986,(0),null);
var sig_9988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7544_9986,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9987,sig_9988);


var G__9989 = cljs.core.next(seq__7531_9980__$1);
var G__9990 = null;
var G__9991 = (0);
var G__9992 = (0);
seq__7531_9966 = G__9989;
chunk__7532_9967 = G__9990;
count__7533_9968 = G__9991;
i__7534_9969 = G__9992;
continue;
}
} else {
}
}
break;
}

var seq__7547_9993 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__7548_9994 = null;
var count__7549_9995 = (0);
var i__7550_9996 = (0);
while(true){
if((i__7550_9996 < count__7549_9995)){
var vec__7557_9997 = chunk__7548_9994.cljs$core$IIndexed$_nth$arity$2(null,i__7550_9996);
var method_name_9998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7557_9997,(0),null);
var sig_9999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7557_9997,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9998,sig_9999);


var G__10000 = seq__7547_9993;
var G__10001 = chunk__7548_9994;
var G__10002 = count__7549_9995;
var G__10003 = (i__7550_9996 + (1));
seq__7547_9993 = G__10000;
chunk__7548_9994 = G__10001;
count__7549_9995 = G__10002;
i__7550_9996 = G__10003;
continue;
} else {
var temp__5823__auto___10004 = cljs.core.seq(seq__7547_9993);
if(temp__5823__auto___10004){
var seq__7547_10005__$1 = temp__5823__auto___10004;
if(cljs.core.chunked_seq_QMARK_(seq__7547_10005__$1)){
var c__5673__auto___10006 = cljs.core.chunk_first(seq__7547_10005__$1);
var G__10007 = cljs.core.chunk_rest(seq__7547_10005__$1);
var G__10008 = c__5673__auto___10006;
var G__10009 = cljs.core.count(c__5673__auto___10006);
var G__10010 = (0);
seq__7547_9993 = G__10007;
chunk__7548_9994 = G__10008;
count__7549_9995 = G__10009;
i__7550_9996 = G__10010;
continue;
} else {
var vec__7560_10011 = cljs.core.first(seq__7547_10005__$1);
var method_name_10012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7560_10011,(0),null);
var sig_10013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7560_10011,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_10012,sig_10013);


var G__10014 = cljs.core.next(seq__7547_10005__$1);
var G__10015 = null;
var G__10016 = (0);
var G__10017 = (0);
seq__7547_9993 = G__10014;
chunk__7548_9994 = G__10015;
count__7549_9995 = G__10016;
i__7550_9996 = G__10017;
continue;
}
} else {
}
}
break;
}

var seq__7563_10018 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__7564_10019 = null;
var count__7565_10020 = (0);
var i__7566_10021 = (0);
while(true){
if((i__7566_10021 < count__7565_10020)){
var vec__7573_10022 = chunk__7564_10019.cljs$core$IIndexed$_nth$arity$2(null,i__7566_10021);
var method_name_10023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7573_10022,(0),null);
var sig_10024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7573_10022,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_10023,sig_10024);


var G__10025 = seq__7563_10018;
var G__10026 = chunk__7564_10019;
var G__10027 = count__7565_10020;
var G__10028 = (i__7566_10021 + (1));
seq__7563_10018 = G__10025;
chunk__7564_10019 = G__10026;
count__7565_10020 = G__10027;
i__7566_10021 = G__10028;
continue;
} else {
var temp__5823__auto___10029 = cljs.core.seq(seq__7563_10018);
if(temp__5823__auto___10029){
var seq__7563_10030__$1 = temp__5823__auto___10029;
if(cljs.core.chunked_seq_QMARK_(seq__7563_10030__$1)){
var c__5673__auto___10031 = cljs.core.chunk_first(seq__7563_10030__$1);
var G__10032 = cljs.core.chunk_rest(seq__7563_10030__$1);
var G__10033 = c__5673__auto___10031;
var G__10034 = cljs.core.count(c__5673__auto___10031);
var G__10035 = (0);
seq__7563_10018 = G__10032;
chunk__7564_10019 = G__10033;
count__7565_10020 = G__10034;
i__7566_10021 = G__10035;
continue;
} else {
var vec__7576_10036 = cljs.core.first(seq__7563_10030__$1);
var method_name_10037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7576_10036,(0),null);
var sig_10038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7576_10036,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_10037,sig_10038);


var G__10039 = cljs.core.next(seq__7563_10030__$1);
var G__10040 = null;
var G__10041 = (0);
var G__10042 = (0);
seq__7563_10018 = G__10039;
chunk__7564_10019 = G__10040;
count__7565_10020 = G__10041;
i__7566_10021 = G__10042;
continue;
}
} else {
}
}
break;
}

var seq__7579_10043 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__7580_10044 = null;
var count__7581_10045 = (0);
var i__7582_10046 = (0);
while(true){
if((i__7582_10046 < count__7581_10045)){
var vec__7589_10048 = chunk__7580_10044.cljs$core$IIndexed$_nth$arity$2(null,i__7582_10046);
var method_name_10049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589_10048,(0),null);
var sig_10050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7589_10048,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_10049,sig_10050);


var G__10051 = seq__7579_10043;
var G__10052 = chunk__7580_10044;
var G__10053 = count__7581_10045;
var G__10054 = (i__7582_10046 + (1));
seq__7579_10043 = G__10051;
chunk__7580_10044 = G__10052;
count__7581_10045 = G__10053;
i__7582_10046 = G__10054;
continue;
} else {
var temp__5823__auto___10055 = cljs.core.seq(seq__7579_10043);
if(temp__5823__auto___10055){
var seq__7579_10056__$1 = temp__5823__auto___10055;
if(cljs.core.chunked_seq_QMARK_(seq__7579_10056__$1)){
var c__5673__auto___10057 = cljs.core.chunk_first(seq__7579_10056__$1);
var G__10058 = cljs.core.chunk_rest(seq__7579_10056__$1);
var G__10059 = c__5673__auto___10057;
var G__10060 = cljs.core.count(c__5673__auto___10057);
var G__10061 = (0);
seq__7579_10043 = G__10058;
chunk__7580_10044 = G__10059;
count__7581_10045 = G__10060;
i__7582_10046 = G__10061;
continue;
} else {
var vec__7592_10062 = cljs.core.first(seq__7579_10056__$1);
var method_name_10063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7592_10062,(0),null);
var sig_10064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7592_10062,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_10063,sig_10064);


var G__10065 = cljs.core.next(seq__7579_10056__$1);
var G__10066 = null;
var G__10067 = (0);
var G__10068 = (0);
seq__7579_10043 = G__10065;
chunk__7580_10044 = G__10066;
count__7581_10045 = G__10067;
i__7582_10046 = G__10068;
continue;
}
} else {
}
}
break;
}

var seq__7596_10069 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__7597_10070 = null;
var count__7598_10071 = (0);
var i__7599_10072 = (0);
while(true){
if((i__7599_10072 < count__7598_10071)){
var vec__7606_10073 = chunk__7597_10070.cljs$core$IIndexed$_nth$arity$2(null,i__7599_10072);
var method_name_10074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7606_10073,(0),null);
var sig_10075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7606_10073,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_10074,sig_10075);


var G__10076 = seq__7596_10069;
var G__10077 = chunk__7597_10070;
var G__10078 = count__7598_10071;
var G__10079 = (i__7599_10072 + (1));
seq__7596_10069 = G__10076;
chunk__7597_10070 = G__10077;
count__7598_10071 = G__10078;
i__7599_10072 = G__10079;
continue;
} else {
var temp__5823__auto___10080 = cljs.core.seq(seq__7596_10069);
if(temp__5823__auto___10080){
var seq__7596_10081__$1 = temp__5823__auto___10080;
if(cljs.core.chunked_seq_QMARK_(seq__7596_10081__$1)){
var c__5673__auto___10082 = cljs.core.chunk_first(seq__7596_10081__$1);
var G__10083 = cljs.core.chunk_rest(seq__7596_10081__$1);
var G__10084 = c__5673__auto___10082;
var G__10085 = cljs.core.count(c__5673__auto___10082);
var G__10086 = (0);
seq__7596_10069 = G__10083;
chunk__7597_10070 = G__10084;
count__7598_10071 = G__10085;
i__7599_10072 = G__10086;
continue;
} else {
var vec__7609_10088 = cljs.core.first(seq__7596_10081__$1);
var method_name_10089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7609_10088,(0),null);
var sig_10090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7609_10088,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_10089,sig_10090);


var G__10091 = cljs.core.next(seq__7596_10081__$1);
var G__10092 = null;
var G__10093 = (0);
var G__10094 = (0);
seq__7596_10069 = G__10091;
chunk__7597_10070 = G__10092;
count__7598_10071 = G__10093;
i__7599_10072 = G__10094;
continue;
}
} else {
}
}
break;
}

var seq__7612_10095 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7613_10096 = null;
var count__7614_10097 = (0);
var i__7615_10098 = (0);
while(true){
if((i__7615_10098 < count__7614_10097)){
var vec__7634_10099 = chunk__7613_10096.cljs$core$IIndexed$_nth$arity$2(null,i__7615_10098);
var method_name_10100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7634_10099,(0),null);
var sig_10101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7634_10099,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_10100,sig_10101);


var G__10102 = seq__7612_10095;
var G__10103 = chunk__7613_10096;
var G__10104 = count__7614_10097;
var G__10105 = (i__7615_10098 + (1));
seq__7612_10095 = G__10102;
chunk__7613_10096 = G__10103;
count__7614_10097 = G__10104;
i__7615_10098 = G__10105;
continue;
} else {
var temp__5823__auto___10106 = cljs.core.seq(seq__7612_10095);
if(temp__5823__auto___10106){
var seq__7612_10107__$1 = temp__5823__auto___10106;
if(cljs.core.chunked_seq_QMARK_(seq__7612_10107__$1)){
var c__5673__auto___10108 = cljs.core.chunk_first(seq__7612_10107__$1);
var G__10109 = cljs.core.chunk_rest(seq__7612_10107__$1);
var G__10110 = c__5673__auto___10108;
var G__10111 = cljs.core.count(c__5673__auto___10108);
var G__10112 = (0);
seq__7612_10095 = G__10109;
chunk__7613_10096 = G__10110;
count__7614_10097 = G__10111;
i__7615_10098 = G__10112;
continue;
} else {
var vec__7637_10113 = cljs.core.first(seq__7612_10107__$1);
var method_name_10114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7637_10113,(0),null);
var sig_10115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7637_10113,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_10114,sig_10115);


var G__10116 = cljs.core.next(seq__7612_10107__$1);
var G__10117 = null;
var G__10118 = (0);
var G__10119 = (0);
seq__7612_10095 = G__10116;
chunk__7613_10096 = G__10117;
count__7614_10097 = G__10118;
i__7615_10098 = G__10119;
continue;
}
} else {
}
}
break;
}

var seq__7640_10120 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7641_10121 = null;
var count__7642_10122 = (0);
var i__7643_10123 = (0);
while(true){
if((i__7643_10123 < count__7642_10122)){
var vec__7650_10124 = chunk__7641_10121.cljs$core$IIndexed$_nth$arity$2(null,i__7643_10123);
var method_name_10125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7650_10124,(0),null);
var sig_10126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7650_10124,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_10125,sig_10126);


var G__10127 = seq__7640_10120;
var G__10128 = chunk__7641_10121;
var G__10129 = count__7642_10122;
var G__10130 = (i__7643_10123 + (1));
seq__7640_10120 = G__10127;
chunk__7641_10121 = G__10128;
count__7642_10122 = G__10129;
i__7643_10123 = G__10130;
continue;
} else {
var temp__5823__auto___10131 = cljs.core.seq(seq__7640_10120);
if(temp__5823__auto___10131){
var seq__7640_10132__$1 = temp__5823__auto___10131;
if(cljs.core.chunked_seq_QMARK_(seq__7640_10132__$1)){
var c__5673__auto___10133 = cljs.core.chunk_first(seq__7640_10132__$1);
var G__10134 = cljs.core.chunk_rest(seq__7640_10132__$1);
var G__10135 = c__5673__auto___10133;
var G__10136 = cljs.core.count(c__5673__auto___10133);
var G__10137 = (0);
seq__7640_10120 = G__10134;
chunk__7641_10121 = G__10135;
count__7642_10122 = G__10136;
i__7643_10123 = G__10137;
continue;
} else {
var vec__7653_10138 = cljs.core.first(seq__7640_10132__$1);
var method_name_10139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653_10138,(0),null);
var sig_10140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653_10138,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_10139,sig_10140);


var G__10141 = cljs.core.next(seq__7640_10132__$1);
var G__10142 = null;
var G__10143 = (0);
var G__10144 = (0);
seq__7640_10120 = G__10141;
chunk__7641_10121 = G__10142;
count__7642_10122 = G__10143;
i__7643_10123 = G__10144;
continue;
}
} else {
}
}
break;
}

var seq__7656_10145 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7657_10146 = null;
var count__7658_10147 = (0);
var i__7659_10148 = (0);
while(true){
if((i__7659_10148 < count__7658_10147)){
var vec__7668_10149 = chunk__7657_10146.cljs$core$IIndexed$_nth$arity$2(null,i__7659_10148);
var method_name_10150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7668_10149,(0),null);
var sig_10151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7668_10149,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_10150,sig_10151);


var G__10152 = seq__7656_10145;
var G__10153 = chunk__7657_10146;
var G__10154 = count__7658_10147;
var G__10155 = (i__7659_10148 + (1));
seq__7656_10145 = G__10152;
chunk__7657_10146 = G__10153;
count__7658_10147 = G__10154;
i__7659_10148 = G__10155;
continue;
} else {
var temp__5823__auto___10156 = cljs.core.seq(seq__7656_10145);
if(temp__5823__auto___10156){
var seq__7656_10157__$1 = temp__5823__auto___10156;
if(cljs.core.chunked_seq_QMARK_(seq__7656_10157__$1)){
var c__5673__auto___10158 = cljs.core.chunk_first(seq__7656_10157__$1);
var G__10159 = cljs.core.chunk_rest(seq__7656_10157__$1);
var G__10160 = c__5673__auto___10158;
var G__10161 = cljs.core.count(c__5673__auto___10158);
var G__10162 = (0);
seq__7656_10145 = G__10159;
chunk__7657_10146 = G__10160;
count__7658_10147 = G__10161;
i__7659_10148 = G__10162;
continue;
} else {
var vec__7673_10163 = cljs.core.first(seq__7656_10157__$1);
var method_name_10164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7673_10163,(0),null);
var sig_10165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7673_10163,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_10164,sig_10165);


var G__10166 = cljs.core.next(seq__7656_10157__$1);
var G__10167 = null;
var G__10168 = (0);
var G__10169 = (0);
seq__7656_10145 = G__10166;
chunk__7657_10146 = G__10167;
count__7658_10147 = G__10168;
i__7659_10148 = G__10169;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7679_10170 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","cursor","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__7680_10171 = null;
var count__7681_10172 = (0);
var i__7682_10173 = (0);
while(true){
if((i__7682_10173 < count__7681_10172)){
var vec__7695_10174 = chunk__7680_10171.cljs$core$IIndexed$_nth$arity$2(null,i__7682_10173);
var method_name_10175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7695_10174,(0),null);
var sig_10176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7695_10174,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_10175,sig_10176);


var G__10177 = seq__7679_10170;
var G__10178 = chunk__7680_10171;
var G__10179 = count__7681_10172;
var G__10180 = (i__7682_10173 + (1));
seq__7679_10170 = G__10177;
chunk__7680_10171 = G__10178;
count__7681_10172 = G__10179;
i__7682_10173 = G__10180;
continue;
} else {
var temp__5823__auto___10181 = cljs.core.seq(seq__7679_10170);
if(temp__5823__auto___10181){
var seq__7679_10182__$1 = temp__5823__auto___10181;
if(cljs.core.chunked_seq_QMARK_(seq__7679_10182__$1)){
var c__5673__auto___10183 = cljs.core.chunk_first(seq__7679_10182__$1);
var G__10184 = cljs.core.chunk_rest(seq__7679_10182__$1);
var G__10185 = c__5673__auto___10183;
var G__10186 = cljs.core.count(c__5673__auto___10183);
var G__10187 = (0);
seq__7679_10170 = G__10184;
chunk__7680_10171 = G__10185;
count__7681_10172 = G__10186;
i__7682_10173 = G__10187;
continue;
} else {
var vec__7698_10188 = cljs.core.first(seq__7679_10182__$1);
var method_name_10189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698_10188,(0),null);
var sig_10190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698_10188,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_10189,sig_10190);


var G__10191 = cljs.core.next(seq__7679_10182__$1);
var G__10192 = null;
var G__10193 = (0);
var G__10194 = (0);
seq__7679_10170 = G__10191;
chunk__7680_10171 = G__10192;
count__7681_10172 = G__10193;
i__7682_10173 = G__10194;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__7701_10195 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","cursor","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7702_10196 = null;
var count__7703_10197 = (0);
var i__7704_10198 = (0);
while(true){
if((i__7704_10198 < count__7703_10197)){
var vec__7714_10199 = chunk__7702_10196.cljs$core$IIndexed$_nth$arity$2(null,i__7704_10198);
var method_name_10200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7714_10199,(0),null);
var sig_10201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7714_10199,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_10200,sig_10201);


var G__10202 = seq__7701_10195;
var G__10203 = chunk__7702_10196;
var G__10204 = count__7703_10197;
var G__10205 = (i__7704_10198 + (1));
seq__7701_10195 = G__10202;
chunk__7702_10196 = G__10203;
count__7703_10197 = G__10204;
i__7704_10198 = G__10205;
continue;
} else {
var temp__5823__auto___10206 = cljs.core.seq(seq__7701_10195);
if(temp__5823__auto___10206){
var seq__7701_10207__$1 = temp__5823__auto___10206;
if(cljs.core.chunked_seq_QMARK_(seq__7701_10207__$1)){
var c__5673__auto___10208 = cljs.core.chunk_first(seq__7701_10207__$1);
var G__10209 = cljs.core.chunk_rest(seq__7701_10207__$1);
var G__10210 = c__5673__auto___10208;
var G__10211 = cljs.core.count(c__5673__auto___10208);
var G__10212 = (0);
seq__7701_10195 = G__10209;
chunk__7702_10196 = G__10210;
count__7703_10197 = G__10211;
i__7704_10198 = G__10212;
continue;
} else {
var vec__7717_10213 = cljs.core.first(seq__7701_10207__$1);
var method_name_10214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7717_10213,(0),null);
var sig_10215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7717_10213,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_10214,sig_10215);


var G__10216 = cljs.core.next(seq__7701_10207__$1);
var G__10217 = null;
var G__10218 = (0);
var G__10219 = (0);
seq__7701_10195 = G__10216;
chunk__7702_10196 = G__10217;
count__7703_10197 = G__10218;
i__7704_10198 = G__10219;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Set",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

nex.typechecker.env_add_method(env,"Set","from_array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"values",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null));

var seq__7720_10220 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["contains",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"union",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"intersection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"symmetric_difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"is_empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"cursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null)], null));
var chunk__7721_10221 = null;
var count__7722_10222 = (0);
var i__7723_10223 = (0);
while(true){
if((i__7723_10223 < count__7722_10222)){
var vec__7733_10232 = chunk__7721_10221.cljs$core$IIndexed$_nth$arity$2(null,i__7723_10223);
var method_name_10233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733_10232,(0),null);
var sig_10234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7733_10232,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_10233,sig_10234);


var G__10239 = seq__7720_10220;
var G__10240 = chunk__7721_10221;
var G__10241 = count__7722_10222;
var G__10242 = (i__7723_10223 + (1));
seq__7720_10220 = G__10239;
chunk__7721_10221 = G__10240;
count__7722_10222 = G__10241;
i__7723_10223 = G__10242;
continue;
} else {
var temp__5823__auto___10243 = cljs.core.seq(seq__7720_10220);
if(temp__5823__auto___10243){
var seq__7720_10244__$1 = temp__5823__auto___10243;
if(cljs.core.chunked_seq_QMARK_(seq__7720_10244__$1)){
var c__5673__auto___10245 = cljs.core.chunk_first(seq__7720_10244__$1);
var G__10246 = cljs.core.chunk_rest(seq__7720_10244__$1);
var G__10247 = c__5673__auto___10245;
var G__10248 = cljs.core.count(c__5673__auto___10245);
var G__10249 = (0);
seq__7720_10220 = G__10246;
chunk__7721_10221 = G__10247;
count__7722_10222 = G__10248;
i__7723_10223 = G__10249;
continue;
} else {
var vec__7739_10250 = cljs.core.first(seq__7720_10244__$1);
var method_name_10251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7739_10250,(0),null);
var sig_10252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7739_10250,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_10251,sig_10252);


var G__10253 = cljs.core.next(seq__7720_10244__$1);
var G__10254 = null;
var G__10255 = (0);
var G__10256 = (0);
seq__7720_10220 = G__10253;
chunk__7721_10221 = G__10254;
count__7722_10222 = G__10255;
i__7723_10223 = G__10256;
continue;
}
} else {
}
}
break;
}

var seq__7743 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__7744 = null;
var count__7745 = (0);
var i__7746 = (0);
while(true){
if((i__7746 < count__7745)){
var n = chunk__7744.cljs$core$IIndexed$_nth$arity$2(null,i__7746);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7743,chunk__7744,count__7745,i__7746,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7743,chunk__7744,count__7745,i__7746,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10257 = seq__7743;
var G__10258 = chunk__7744;
var G__10259 = count__7745;
var G__10260 = (i__7746 + (1));
seq__7743 = G__10257;
chunk__7744 = G__10258;
count__7745 = G__10259;
i__7746 = G__10260;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7743);
if(temp__5823__auto__){
var seq__7743__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7743__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7743__$1);
var G__10261 = cljs.core.chunk_rest(seq__7743__$1);
var G__10262 = c__5673__auto__;
var G__10263 = cljs.core.count(c__5673__auto__);
var G__10264 = (0);
seq__7743 = G__10261;
chunk__7744 = G__10262;
count__7745 = G__10263;
i__7746 = G__10264;
continue;
} else {
var n = cljs.core.first(seq__7743__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7743,chunk__7744,count__7745,i__7746,n,seq__7743__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7743,chunk__7744,count__7745,i__7746,n,seq__7743__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10265 = cljs.core.next(seq__7743__$1);
var G__10266 = null;
var G__10267 = (0);
var G__10268 = (0);
seq__7743 = G__10265;
chunk__7744 = G__10266;
count__7745 = G__10267;
i__7746 = G__10268;
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
var G__7780 = arguments.length;
switch (G__7780) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__7790,opts){
var map__7791 = p__7790;
var map__7791__$1 = cljs.core.__destructure_map(map__7791);
var program = map__7791__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7791__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__7800_10270 = cljs.core.seq(imports);
var chunk__7801_10271 = null;
var count__7802_10272 = (0);
var i__7803_10273 = (0);
while(true){
if((i__7803_10273 < count__7802_10272)){
var map__7830_10274 = chunk__7801_10271.cljs$core$IIndexed$_nth$arity$2(null,i__7803_10273);
var map__7830_10275__$1 = cljs.core.__destructure_map(map__7830_10274);
var qualified_name_10276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7830_10275__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7830_10275__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10277 == null)){
var simple_name_10278 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10276,/\./));
nex.typechecker.env_add_class(env,simple_name_10278,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10278,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10276], null));
} else {
}


var G__10279 = seq__7800_10270;
var G__10280 = chunk__7801_10271;
var G__10281 = count__7802_10272;
var G__10282 = (i__7803_10273 + (1));
seq__7800_10270 = G__10279;
chunk__7801_10271 = G__10280;
count__7802_10272 = G__10281;
i__7803_10273 = G__10282;
continue;
} else {
var temp__5823__auto___10283 = cljs.core.seq(seq__7800_10270);
if(temp__5823__auto___10283){
var seq__7800_10284__$1 = temp__5823__auto___10283;
if(cljs.core.chunked_seq_QMARK_(seq__7800_10284__$1)){
var c__5673__auto___10285 = cljs.core.chunk_first(seq__7800_10284__$1);
var G__10286 = cljs.core.chunk_rest(seq__7800_10284__$1);
var G__10287 = c__5673__auto___10285;
var G__10288 = cljs.core.count(c__5673__auto___10285);
var G__10289 = (0);
seq__7800_10270 = G__10286;
chunk__7801_10271 = G__10287;
count__7802_10272 = G__10288;
i__7803_10273 = G__10289;
continue;
} else {
var map__7844_10290 = cljs.core.first(seq__7800_10284__$1);
var map__7844_10291__$1 = cljs.core.__destructure_map(map__7844_10290);
var qualified_name_10292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7844_10291__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7844_10291__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10293 == null)){
var simple_name_10294 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10292,/\./));
nex.typechecker.env_add_class(env,simple_name_10294,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10294,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10292], null));
} else {
}


var G__10295 = cljs.core.next(seq__7800_10284__$1);
var G__10296 = null;
var G__10297 = (0);
var G__10298 = (0);
seq__7800_10270 = G__10295;
chunk__7801_10271 = G__10296;
count__7802_10272 = G__10297;
i__7803_10273 = G__10298;
continue;
}
} else {
}
}
break;
}

var seq__7853_10299 = cljs.core.seq(classes);
var chunk__7854_10300 = null;
var count__7855_10301 = (0);
var i__7856_10302 = (0);
while(true){
if((i__7856_10302 < count__7855_10301)){
var class_def_10303 = chunk__7854_10300.cljs$core$IIndexed$_nth$arity$2(null,i__7856_10302);
nex.typechecker.collect_class_info(env,class_def_10303);


var G__10304 = seq__7853_10299;
var G__10305 = chunk__7854_10300;
var G__10306 = count__7855_10301;
var G__10307 = (i__7856_10302 + (1));
seq__7853_10299 = G__10304;
chunk__7854_10300 = G__10305;
count__7855_10301 = G__10306;
i__7856_10302 = G__10307;
continue;
} else {
var temp__5823__auto___10308 = cljs.core.seq(seq__7853_10299);
if(temp__5823__auto___10308){
var seq__7853_10309__$1 = temp__5823__auto___10308;
if(cljs.core.chunked_seq_QMARK_(seq__7853_10309__$1)){
var c__5673__auto___10310 = cljs.core.chunk_first(seq__7853_10309__$1);
var G__10311 = cljs.core.chunk_rest(seq__7853_10309__$1);
var G__10312 = c__5673__auto___10310;
var G__10313 = cljs.core.count(c__5673__auto___10310);
var G__10314 = (0);
seq__7853_10299 = G__10311;
chunk__7854_10300 = G__10312;
count__7855_10301 = G__10313;
i__7856_10302 = G__10314;
continue;
} else {
var class_def_10315 = cljs.core.first(seq__7853_10309__$1);
nex.typechecker.collect_class_info(env,class_def_10315);


var G__10316 = cljs.core.next(seq__7853_10309__$1);
var G__10317 = null;
var G__10318 = (0);
var G__10319 = (0);
seq__7853_10299 = G__10316;
chunk__7854_10300 = G__10317;
count__7855_10301 = G__10318;
i__7856_10302 = G__10319;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7875_10320 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7876_10321 = null;
var count__7877_10322 = (0);
var i__7878_10323 = (0);
while(true){
if((i__7878_10323 < count__7877_10322)){
var vec__7902_10324 = chunk__7876_10321.cljs$core$IIndexed$_nth$arity$2(null,i__7878_10323);
var var_name_10325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7902_10324,(0),null);
var var_type_10326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7902_10324,(1),null);
nex.typechecker.env_add_var(env,var_name_10325,var_type_10326);


var G__10327 = seq__7875_10320;
var G__10328 = chunk__7876_10321;
var G__10329 = count__7877_10322;
var G__10330 = (i__7878_10323 + (1));
seq__7875_10320 = G__10327;
chunk__7876_10321 = G__10328;
count__7877_10322 = G__10329;
i__7878_10323 = G__10330;
continue;
} else {
var temp__5823__auto___10331 = cljs.core.seq(seq__7875_10320);
if(temp__5823__auto___10331){
var seq__7875_10332__$1 = temp__5823__auto___10331;
if(cljs.core.chunked_seq_QMARK_(seq__7875_10332__$1)){
var c__5673__auto___10333 = cljs.core.chunk_first(seq__7875_10332__$1);
var G__10334 = cljs.core.chunk_rest(seq__7875_10332__$1);
var G__10335 = c__5673__auto___10333;
var G__10336 = cljs.core.count(c__5673__auto___10333);
var G__10337 = (0);
seq__7875_10320 = G__10334;
chunk__7876_10321 = G__10335;
count__7877_10322 = G__10336;
i__7878_10323 = G__10337;
continue;
} else {
var vec__7914_10338 = cljs.core.first(seq__7875_10332__$1);
var var_name_10339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7914_10338,(0),null);
var var_type_10340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7914_10338,(1),null);
nex.typechecker.env_add_var(env,var_name_10339,var_type_10340);


var G__10341 = cljs.core.next(seq__7875_10332__$1);
var G__10342 = null;
var G__10343 = (0);
var G__10344 = (0);
seq__7875_10320 = G__10341;
chunk__7876_10321 = G__10342;
count__7877_10322 = G__10343;
i__7878_10323 = G__10344;
continue;
}
} else {
}
}
break;
}

var seq__7921_10345 = cljs.core.seq(functions);
var chunk__7922_10346 = null;
var count__7923_10347 = (0);
var i__7924_10348 = (0);
while(true){
if((i__7924_10348 < count__7923_10347)){
var fn_def_10349 = chunk__7922_10346.cljs$core$IIndexed$_nth$arity$2(null,i__7924_10348);
var arity_10350 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10349));
if((arity_10350 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10349))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10349))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10349),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10349));


var G__10351 = seq__7921_10345;
var G__10352 = chunk__7922_10346;
var G__10353 = count__7923_10347;
var G__10354 = (i__7924_10348 + (1));
seq__7921_10345 = G__10351;
chunk__7922_10346 = G__10352;
count__7923_10347 = G__10353;
i__7924_10348 = G__10354;
continue;
} else {
var temp__5823__auto___10355 = cljs.core.seq(seq__7921_10345);
if(temp__5823__auto___10355){
var seq__7921_10356__$1 = temp__5823__auto___10355;
if(cljs.core.chunked_seq_QMARK_(seq__7921_10356__$1)){
var c__5673__auto___10357 = cljs.core.chunk_first(seq__7921_10356__$1);
var G__10358 = cljs.core.chunk_rest(seq__7921_10356__$1);
var G__10359 = c__5673__auto___10357;
var G__10360 = cljs.core.count(c__5673__auto___10357);
var G__10361 = (0);
seq__7921_10345 = G__10358;
chunk__7922_10346 = G__10359;
count__7923_10347 = G__10360;
i__7924_10348 = G__10361;
continue;
} else {
var fn_def_10362 = cljs.core.first(seq__7921_10356__$1);
var arity_10363 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10362));
if((arity_10363 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10362))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10362))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10362),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10362));


var G__10364 = cljs.core.next(seq__7921_10356__$1);
var G__10365 = null;
var G__10366 = (0);
var G__10367 = (0);
seq__7921_10345 = G__10364;
chunk__7922_10346 = G__10365;
count__7923_10347 = G__10366;
i__7924_10348 = G__10367;
continue;
}
} else {
}
}
break;
}

var seq__7979_10368 = cljs.core.seq(classes);
var chunk__7980_10369 = null;
var count__7981_10370 = (0);
var i__7982_10371 = (0);
while(true){
if((i__7982_10371 < count__7981_10370)){
var class_def_10372 = chunk__7980_10369.cljs$core$IIndexed$_nth$arity$2(null,i__7982_10371);
nex.typechecker.check_class(env,class_def_10372);


var G__10373 = seq__7979_10368;
var G__10374 = chunk__7980_10369;
var G__10375 = count__7981_10370;
var G__10376 = (i__7982_10371 + (1));
seq__7979_10368 = G__10373;
chunk__7980_10369 = G__10374;
count__7981_10370 = G__10375;
i__7982_10371 = G__10376;
continue;
} else {
var temp__5823__auto___10377 = cljs.core.seq(seq__7979_10368);
if(temp__5823__auto___10377){
var seq__7979_10378__$1 = temp__5823__auto___10377;
if(cljs.core.chunked_seq_QMARK_(seq__7979_10378__$1)){
var c__5673__auto___10379 = cljs.core.chunk_first(seq__7979_10378__$1);
var G__10380 = cljs.core.chunk_rest(seq__7979_10378__$1);
var G__10381 = c__5673__auto___10379;
var G__10382 = cljs.core.count(c__5673__auto___10379);
var G__10383 = (0);
seq__7979_10368 = G__10380;
chunk__7980_10369 = G__10381;
count__7981_10370 = G__10382;
i__7982_10371 = G__10383;
continue;
} else {
var class_def_10384 = cljs.core.first(seq__7979_10378__$1);
nex.typechecker.check_class(env,class_def_10384);


var G__10385 = cljs.core.next(seq__7979_10378__$1);
var G__10386 = null;
var G__10387 = (0);
var G__10388 = (0);
seq__7979_10368 = G__10385;
chunk__7980_10369 = G__10386;
count__7981_10370 = G__10387;
i__7982_10371 = G__10388;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__8007_10389 = cljs.core.seq(statements);
var chunk__8008_10390 = null;
var count__8009_10391 = (0);
var i__8010_10392 = (0);
while(true){
if((i__8010_10392 < count__8009_10391)){
var stmt_10393 = chunk__8008_10390.cljs$core$IIndexed$_nth$arity$2(null,i__8010_10392);
nex.typechecker.check_statement(env,stmt_10393);


var G__10394 = seq__8007_10389;
var G__10395 = chunk__8008_10390;
var G__10396 = count__8009_10391;
var G__10397 = (i__8010_10392 + (1));
seq__8007_10389 = G__10394;
chunk__8008_10390 = G__10395;
count__8009_10391 = G__10396;
i__8010_10392 = G__10397;
continue;
} else {
var temp__5823__auto___10398 = cljs.core.seq(seq__8007_10389);
if(temp__5823__auto___10398){
var seq__8007_10399__$1 = temp__5823__auto___10398;
if(cljs.core.chunked_seq_QMARK_(seq__8007_10399__$1)){
var c__5673__auto___10400 = cljs.core.chunk_first(seq__8007_10399__$1);
var G__10401 = cljs.core.chunk_rest(seq__8007_10399__$1);
var G__10402 = c__5673__auto___10400;
var G__10403 = cljs.core.count(c__5673__auto___10400);
var G__10404 = (0);
seq__8007_10389 = G__10401;
chunk__8008_10390 = G__10402;
count__8009_10391 = G__10403;
i__8010_10392 = G__10404;
continue;
} else {
var stmt_10405 = cljs.core.first(seq__8007_10399__$1);
nex.typechecker.check_statement(env,stmt_10405);


var G__10406 = cljs.core.next(seq__8007_10399__$1);
var G__10407 = null;
var G__10408 = (0);
var G__10409 = (0);
seq__8007_10389 = G__10406;
chunk__8008_10390 = G__10407;
count__8009_10391 = G__10408;
i__8010_10392 = G__10409;
continue;
}
} else {
}
}
break;
}
} else {
var seq__8035_10410 = cljs.core.seq(calls);
var chunk__8036_10411 = null;
var count__8037_10412 = (0);
var i__8038_10413 = (0);
while(true){
if((i__8038_10413 < count__8037_10412)){
var call_10414 = chunk__8036_10411.cljs$core$IIndexed$_nth$arity$2(null,i__8038_10413);
nex.typechecker.check_expression(env,call_10414);


var G__10415 = seq__8035_10410;
var G__10416 = chunk__8036_10411;
var G__10417 = count__8037_10412;
var G__10418 = (i__8038_10413 + (1));
seq__8035_10410 = G__10415;
chunk__8036_10411 = G__10416;
count__8037_10412 = G__10417;
i__8038_10413 = G__10418;
continue;
} else {
var temp__5823__auto___10419 = cljs.core.seq(seq__8035_10410);
if(temp__5823__auto___10419){
var seq__8035_10420__$1 = temp__5823__auto___10419;
if(cljs.core.chunked_seq_QMARK_(seq__8035_10420__$1)){
var c__5673__auto___10421 = cljs.core.chunk_first(seq__8035_10420__$1);
var G__10422 = cljs.core.chunk_rest(seq__8035_10420__$1);
var G__10423 = c__5673__auto___10421;
var G__10424 = cljs.core.count(c__5673__auto___10421);
var G__10425 = (0);
seq__8035_10410 = G__10422;
chunk__8036_10411 = G__10423;
count__8037_10412 = G__10424;
i__8038_10413 = G__10425;
continue;
} else {
var call_10426 = cljs.core.first(seq__8035_10420__$1);
nex.typechecker.check_expression(env,call_10426);


var G__10427 = cljs.core.next(seq__8035_10420__$1);
var G__10428 = null;
var G__10429 = (0);
var G__10430 = (0);
seq__8035_10410 = G__10427;
chunk__8036_10411 = G__10428;
count__8037_10412 = G__10429;
i__8038_10413 = G__10430;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e7795){var e = e7795;
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
var G__8070 = arguments.length;
switch (G__8070) {
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
var seq__8099_10432 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__8100_10433 = null;
var count__8101_10434 = (0);
var i__8102_10435 = (0);
while(true){
if((i__8102_10435 < count__8101_10434)){
var map__8135_10436 = chunk__8100_10433.cljs$core$IIndexed$_nth$arity$2(null,i__8102_10435);
var map__8135_10437__$1 = cljs.core.__destructure_map(map__8135_10436);
var qualified_name_10438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8135_10437__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8135_10437__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10439 == null)){
var simple_name_10440 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10438,/\./));
nex.typechecker.env_add_class(env,simple_name_10440,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10440,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10438], null));
} else {
}


var G__10441 = seq__8099_10432;
var G__10442 = chunk__8100_10433;
var G__10443 = count__8101_10434;
var G__10444 = (i__8102_10435 + (1));
seq__8099_10432 = G__10441;
chunk__8100_10433 = G__10442;
count__8101_10434 = G__10443;
i__8102_10435 = G__10444;
continue;
} else {
var temp__5823__auto___10445 = cljs.core.seq(seq__8099_10432);
if(temp__5823__auto___10445){
var seq__8099_10446__$1 = temp__5823__auto___10445;
if(cljs.core.chunked_seq_QMARK_(seq__8099_10446__$1)){
var c__5673__auto___10447 = cljs.core.chunk_first(seq__8099_10446__$1);
var G__10448 = cljs.core.chunk_rest(seq__8099_10446__$1);
var G__10449 = c__5673__auto___10447;
var G__10450 = cljs.core.count(c__5673__auto___10447);
var G__10451 = (0);
seq__8099_10432 = G__10448;
chunk__8100_10433 = G__10449;
count__8101_10434 = G__10450;
i__8102_10435 = G__10451;
continue;
} else {
var map__8152_10452 = cljs.core.first(seq__8099_10446__$1);
var map__8152_10453__$1 = cljs.core.__destructure_map(map__8152_10452);
var qualified_name_10454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8152_10453__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8152_10453__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10455 == null)){
var simple_name_10456 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10454,/\./));
nex.typechecker.env_add_class(env,simple_name_10456,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10456,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10454], null));
} else {
}


var G__10457 = cljs.core.next(seq__8099_10446__$1);
var G__10458 = null;
var G__10459 = (0);
var G__10460 = (0);
seq__8099_10432 = G__10457;
chunk__8100_10433 = G__10458;
count__8101_10434 = G__10459;
i__8102_10435 = G__10460;
continue;
}
} else {
}
}
break;
}

var seq__8159_10461 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__8161_10462 = null;
var count__8162_10463 = (0);
var i__8163_10464 = (0);
while(true){
if((i__8163_10464 < count__8162_10463)){
var class_def_10465 = chunk__8161_10462.cljs$core$IIndexed$_nth$arity$2(null,i__8163_10464);
nex.typechecker.collect_class_info(env,class_def_10465);


var G__10466 = seq__8159_10461;
var G__10467 = chunk__8161_10462;
var G__10468 = count__8162_10463;
var G__10469 = (i__8163_10464 + (1));
seq__8159_10461 = G__10466;
chunk__8161_10462 = G__10467;
count__8162_10463 = G__10468;
i__8163_10464 = G__10469;
continue;
} else {
var temp__5823__auto___10470 = cljs.core.seq(seq__8159_10461);
if(temp__5823__auto___10470){
var seq__8159_10471__$1 = temp__5823__auto___10470;
if(cljs.core.chunked_seq_QMARK_(seq__8159_10471__$1)){
var c__5673__auto___10472 = cljs.core.chunk_first(seq__8159_10471__$1);
var G__10473 = cljs.core.chunk_rest(seq__8159_10471__$1);
var G__10474 = c__5673__auto___10472;
var G__10475 = cljs.core.count(c__5673__auto___10472);
var G__10476 = (0);
seq__8159_10461 = G__10473;
chunk__8161_10462 = G__10474;
count__8162_10463 = G__10475;
i__8163_10464 = G__10476;
continue;
} else {
var class_def_10477 = cljs.core.first(seq__8159_10471__$1);
nex.typechecker.collect_class_info(env,class_def_10477);


var G__10478 = cljs.core.next(seq__8159_10471__$1);
var G__10479 = null;
var G__10480 = (0);
var G__10481 = (0);
seq__8159_10461 = G__10478;
chunk__8161_10462 = G__10479;
count__8162_10463 = G__10480;
i__8163_10464 = G__10481;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__8180_10482 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__8181_10483 = null;
var count__8182_10484 = (0);
var i__8183_10485 = (0);
while(true){
if((i__8183_10485 < count__8182_10484)){
var vec__8213_10486 = chunk__8181_10483.cljs$core$IIndexed$_nth$arity$2(null,i__8183_10485);
var var_name_10487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8213_10486,(0),null);
var var_type_10488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8213_10486,(1),null);
nex.typechecker.env_add_var(env,var_name_10487,var_type_10488);


var G__10489 = seq__8180_10482;
var G__10490 = chunk__8181_10483;
var G__10491 = count__8182_10484;
var G__10492 = (i__8183_10485 + (1));
seq__8180_10482 = G__10489;
chunk__8181_10483 = G__10490;
count__8182_10484 = G__10491;
i__8183_10485 = G__10492;
continue;
} else {
var temp__5823__auto___10493 = cljs.core.seq(seq__8180_10482);
if(temp__5823__auto___10493){
var seq__8180_10494__$1 = temp__5823__auto___10493;
if(cljs.core.chunked_seq_QMARK_(seq__8180_10494__$1)){
var c__5673__auto___10495 = cljs.core.chunk_first(seq__8180_10494__$1);
var G__10496 = cljs.core.chunk_rest(seq__8180_10494__$1);
var G__10497 = c__5673__auto___10495;
var G__10498 = cljs.core.count(c__5673__auto___10495);
var G__10499 = (0);
seq__8180_10482 = G__10496;
chunk__8181_10483 = G__10497;
count__8182_10484 = G__10498;
i__8183_10485 = G__10499;
continue;
} else {
var vec__8227_10500 = cljs.core.first(seq__8180_10494__$1);
var var_name_10501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8227_10500,(0),null);
var var_type_10502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8227_10500,(1),null);
nex.typechecker.env_add_var(env,var_name_10501,var_type_10502);


var G__10503 = cljs.core.next(seq__8180_10494__$1);
var G__10504 = null;
var G__10505 = (0);
var G__10506 = (0);
seq__8180_10482 = G__10503;
chunk__8181_10483 = G__10504;
count__8182_10484 = G__10505;
i__8183_10485 = G__10506;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e8095){var _ = e8095;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
