goog.provide('nex.typechecker');
/**
 * Create a new type environment
 */
nex.typechecker.make_type_env = (function nex$typechecker$make_type_env(var_args){
var G__6043 = arguments.length;
switch (G__6043) {
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
var G__6055 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6056 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6055,G__6056) : nex.typechecker.env_lookup_var.call(null,G__6055,G__6056));
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
var G__6062 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6063 = class_name;
var G__6064 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6062,G__6063,G__6064) : nex.typechecker.env_lookup_method.call(null,G__6062,G__6063,G__6064));
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
var G__6067 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6068 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6067,G__6068) : nex.typechecker.env_lookup_class.call(null,G__6067,G__6068));
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
var G__6091 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6092 = var_name;
return (nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2(G__6091,G__6092) : nex.typechecker.env_var_non_nil_QMARK_.call(null,G__6091,G__6092));
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

(nex.typechecker.TypeError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k6094,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__6098 = k6094;
var G__6098__$1 = (((G__6098 instanceof cljs.core.Keyword))?G__6098.fqn:null);
switch (G__6098__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6094,else__5451__auto__);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6099){
var vec__6100 = p__6099;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6100,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6100,(1),null);
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

(nex.typechecker.TypeError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6093){
var self__ = this;
var G__6093__$1 = this;
return (new cljs.core.RecordIter((0),G__6093__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(nex.typechecker.TypeError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6095,other6096){
var self__ = this;
var this6095__$1 = this;
return (((!((other6096 == null)))) && ((((this6095__$1.constructor === other6096.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6095__$1.message,other6096.message)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6095__$1.line,other6096.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6095__$1.column,other6096.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6095__$1.__extmap,other6096.__extmap)))))))))));
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

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k6094){
var self__ = this;
var this__5455__auto____$1 = this;
var G__6103 = k6094;
var G__6103__$1 = (((G__6103 instanceof cljs.core.Keyword))?G__6103.fqn:null);
switch (G__6103__$1) {
case "message":
case "line":
case "column":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6094);

}
}));

(nex.typechecker.TypeError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__6093){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__6104 = cljs.core.keyword_identical_QMARK_;
var expr__6105 = k__5457__auto__;
if(cljs.core.truth_((pred__6104.cljs$core$IFn$_invoke$arity$2 ? pred__6104.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__6105) : pred__6104.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__6105)))){
return (new nex.typechecker.TypeError(G__6093,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6104.cljs$core$IFn$_invoke$arity$2 ? pred__6104.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__6105) : pred__6104.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__6105)))){
return (new nex.typechecker.TypeError(self__.message,G__6093,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6104.cljs$core$IFn$_invoke$arity$2 ? pred__6104.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__6105) : pred__6104.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__6105)))){
return (new nex.typechecker.TypeError(self__.message,self__.line,G__6093,self__.__meta,self__.__extmap,null));
} else {
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__6093),null));
}
}
}
}));

(nex.typechecker.TypeError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null))], null),self__.__extmap));
}));

(nex.typechecker.TypeError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__6093){
var self__ = this;
var this__5447__auto____$1 = this;
return (new nex.typechecker.TypeError(self__.message,self__.line,self__.column,G__6093,self__.__extmap,self__.__hash));
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
nex.typechecker.map__GT_TypeError = (function nex$typechecker$map__GT_TypeError(G__6097){
var extmap__5490__auto__ = (function (){var G__6113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6097,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6097)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6113);
} else {
return G__6113;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6097),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6097),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6097),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6119 = arguments.length;
switch (G__6119) {
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
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6120){
var map__6121 = p__6120;
var map__6121__$1 = cljs.core.__destructure_map(map__6121);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6121__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6121__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var G__6126 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6126__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6126,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6126);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6126__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6126__$1;
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
var G__6128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6128,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6127_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6127_SHARP_);
}));
} else {
return G__6128;
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
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6132 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6132.cljs$core$IFn$_invoke$arity$1 ? fexpr__6132.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6132.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6134 = arguments.length;
switch (G__6134) {
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
var G__6136 = arguments.length;
switch (G__6136) {
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
var or__5142__auto__ = cljs.core.some((function (p1__6147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6147_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6148_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6148_SHARP_,seen__$1);
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

var seq__6154 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6155 = null;
var count__6156 = (0);
var i__6157 = (0);
while(true){
if((i__6157 < count__6156)){
var vec__6164 = chunk__6155.cljs$core$IIndexed$_nth$arity$2(null,i__6157);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6164,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6164,(1),null);
var temp__5823__auto___7334 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7334)){
var constraint_7336 = temp__5823__auto___7334;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7336))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7336)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7336)))], null));
}
} else {
}


var G__7340 = seq__6154;
var G__7341 = chunk__6155;
var G__7342 = count__6156;
var G__7343 = (i__6157 + (1));
seq__6154 = G__7340;
chunk__6155 = G__7341;
count__6156 = G__7342;
i__6157 = G__7343;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6154);
if(temp__5823__auto__){
var seq__6154__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6154__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6154__$1);
var G__7348 = cljs.core.chunk_rest(seq__6154__$1);
var G__7349 = c__5673__auto__;
var G__7350 = cljs.core.count(c__5673__auto__);
var G__7351 = (0);
seq__6154 = G__7348;
chunk__6155 = G__7349;
count__6156 = G__7350;
i__6157 = G__7351;
continue;
} else {
var vec__6171 = cljs.core.first(seq__6154__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6171,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6171,(1),null);
var temp__5823__auto___7355__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7355__$1)){
var constraint_7357 = temp__5823__auto___7355__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7357))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7357)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7357)))], null));
}
} else {
}


var G__7362 = cljs.core.next(seq__6154__$1);
var G__7363 = null;
var G__7364 = (0);
var G__7365 = (0);
seq__6154 = G__7362;
chunk__6155 = G__7363;
count__6156 = G__7364;
i__6157 = G__7365;
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

var seq__6186 = cljs.core.seq(args);
var chunk__6187 = null;
var count__6188 = (0);
var i__6189 = (0);
while(true){
if((i__6189 < count__6188)){
var arg = chunk__6187.cljs$core$IIndexed$_nth$arity$2(null,i__6189);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7378 = seq__6186;
var G__7379 = chunk__6187;
var G__7380 = count__6188;
var G__7381 = (i__6189 + (1));
seq__6186 = G__7378;
chunk__6187 = G__7379;
count__6188 = G__7380;
i__6189 = G__7381;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6186);
if(temp__5823__auto__){
var seq__6186__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6186__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6186__$1);
var G__7385 = cljs.core.chunk_rest(seq__6186__$1);
var G__7386 = c__5673__auto__;
var G__7387 = cljs.core.count(c__5673__auto__);
var G__7388 = (0);
seq__6186 = G__7385;
chunk__6187 = G__7386;
count__6188 = G__7387;
i__6189 = G__7388;
continue;
} else {
var arg = cljs.core.first(seq__6186__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7393 = cljs.core.next(seq__6186__$1);
var G__7394 = null;
var G__7395 = (0);
var G__7396 = (0);
seq__6186 = G__7393;
chunk__6187 = G__7394;
count__6188 = G__7395;
i__6189 = G__7396;
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
var G__6194 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6194__$1 = (((G__6194 instanceof cljs.core.Keyword))?G__6194.fqn:null);
switch (G__6194__$1) {
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
return cljs.core.some((function (p__6195){
var map__6196 = p__6195;
var map__6196__$1 = cljs.core.__destructure_map(map__6196);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6196__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
return (nex.typechecker.lookup_class_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.lookup_class_method.cljs$core$IFn$_invoke$arity$3(env,parent,method_name) : nex.typechecker.lookup_class_method.call(null,env,parent,method_name));
}),new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(class_def));
} else {
return null;
}
}
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6199_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6199_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6206){
var map__6207 = p__6206;
var map__6207__$1 = cljs.core.__destructure_map(map__6207);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6207__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6208){
var map__6209 = p__6208;
var map__6209__$1 = cljs.core.__destructure_map(map__6209);
var expr = map__6209__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6211){
var map__6212 = p__6211;
var map__6212__$1 = cljs.core.__destructure_map(map__6212);
var expr = map__6212__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6212__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,left) : nex.typechecker.check_expression.call(null,env,left));
var right_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,right) : nex.typechecker.check_expression.call(null,env,right));
var G__6217 = operator;
switch (G__6217) {
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
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6224){
var map__6225 = p__6224;
var map__6225__$1 = cljs.core.__destructure_map(map__6225);
var expr = map__6225__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand) : nex.typechecker.check_expression.call(null,env,operand));
var G__6226 = operator;
switch (G__6226) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6227_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6227_SHARP_,p1__6227_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6228_SHARP_){
if(cljs.core.truth_(p1__6228_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6228_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6229_SHARP_){
if(cljs.core.truth_(p1__6229_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6229_SHARP_);
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
 * Check the type of a method call
 */
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6237){
var map__6238 = p__6237;
var map__6238__$1 = cljs.core.__destructure_map(map__6238);
var expr = map__6238__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6238__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6238__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6238__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var temp__5821__auto__ = nex.typechecker.env_lookup_method(env,base_type,method);
if(cljs.core.truth_(temp__5821__auto__)){
var method_sig = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6239_7549 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6240_7550 = null;
var count__6241_7551 = (0);
var i__6242_7552 = (0);
while(true){
if((i__6242_7552 < count__6241_7551)){
var vec__6256_7556 = chunk__6240_7550.cljs$core$IIndexed$_nth$arity$2(null,i__6242_7552);
var arg_7557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256_7556,(0),null);
var param_7558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256_7556,(1),null);
var arg_type_7561 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7557) : nex.typechecker.check_expression.call(null,env,arg_7557));
var param_type_7562 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7558),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7561,param_type_7562))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7562))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7561))))], null));
}


var G__7570 = seq__6239_7549;
var G__7571 = chunk__6240_7550;
var G__7572 = count__6241_7551;
var G__7573 = (i__6242_7552 + (1));
seq__6239_7549 = G__7570;
chunk__6240_7550 = G__7571;
count__6241_7551 = G__7572;
i__6242_7552 = G__7573;
continue;
} else {
var temp__5823__auto___7574 = cljs.core.seq(seq__6239_7549);
if(temp__5823__auto___7574){
var seq__6239_7577__$1 = temp__5823__auto___7574;
if(cljs.core.chunked_seq_QMARK_(seq__6239_7577__$1)){
var c__5673__auto___7579 = cljs.core.chunk_first(seq__6239_7577__$1);
var G__7580 = cljs.core.chunk_rest(seq__6239_7577__$1);
var G__7581 = c__5673__auto___7579;
var G__7582 = cljs.core.count(c__5673__auto___7579);
var G__7583 = (0);
seq__6239_7549 = G__7580;
chunk__6240_7550 = G__7581;
count__6241_7551 = G__7582;
i__6242_7552 = G__7583;
continue;
} else {
var vec__6260_7586 = cljs.core.first(seq__6239_7577__$1);
var arg_7587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260_7586,(0),null);
var param_7588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6260_7586,(1),null);
var arg_type_7591 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7587) : nex.typechecker.check_expression.call(null,env,arg_7587));
var param_type_7592 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7588),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7591,param_type_7592))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7592))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7591))))], null));
}


var G__7597 = cljs.core.next(seq__6239_7577__$1);
var G__7598 = null;
var G__7599 = (0);
var G__7600 = (0);
seq__6239_7549 = G__7597;
chunk__6240_7550 = G__7598;
count__6241_7551 = G__7599;
i__6242_7552 = G__7600;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(method_sig),type_map);
} else {
return "Any";
}
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

var seq__6275_7617 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6276_7618 = null;
var count__6277_7619 = (0);
var i__6278_7620 = (0);
while(true){
if((i__6278_7620 < count__6277_7619)){
var vec__6300_7624 = chunk__6276_7618.cljs$core$IIndexed$_nth$arity$2(null,i__6278_7620);
var arg_7625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6300_7624,(0),null);
var param_7626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6300_7624,(1),null);
var arg_type_7629 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7625) : nex.typechecker.check_expression.call(null,env,arg_7625));
var param_type_7630 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7626),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7629,param_type_7630))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7630))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7629))))], null));
}


var G__7640 = seq__6275_7617;
var G__7641 = chunk__6276_7618;
var G__7642 = count__6277_7619;
var G__7643 = (i__6278_7620 + (1));
seq__6275_7617 = G__7640;
chunk__6276_7618 = G__7641;
count__6277_7619 = G__7642;
i__6278_7620 = G__7643;
continue;
} else {
var temp__5823__auto___7645 = cljs.core.seq(seq__6275_7617);
if(temp__5823__auto___7645){
var seq__6275_7647__$1 = temp__5823__auto___7645;
if(cljs.core.chunked_seq_QMARK_(seq__6275_7647__$1)){
var c__5673__auto___7649 = cljs.core.chunk_first(seq__6275_7647__$1);
var G__7651 = cljs.core.chunk_rest(seq__6275_7647__$1);
var G__7652 = c__5673__auto___7649;
var G__7653 = cljs.core.count(c__5673__auto___7649);
var G__7654 = (0);
seq__6275_7617 = G__7651;
chunk__6276_7618 = G__7652;
count__6277_7619 = G__7653;
i__6278_7620 = G__7654;
continue;
} else {
var vec__6305_7656 = cljs.core.first(seq__6275_7647__$1);
var arg_7657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6305_7656,(0),null);
var param_7658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6305_7656,(1),null);
var arg_type_7661 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7657) : nex.typechecker.check_expression.call(null,env,arg_7657));
var param_type_7662 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7658),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7661,param_type_7662))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7662))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7661))))], null));
}


var G__7670 = cljs.core.next(seq__6275_7647__$1);
var G__7671 = null;
var G__7672 = (0);
var G__7673 = (0);
seq__6275_7617 = G__7670;
chunk__6276_7618 = G__7671;
count__6277_7619 = G__7672;
i__6278_7620 = G__7673;
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

var seq__6308_7683 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6309_7684 = null;
var count__6310_7685 = (0);
var i__6311_7686 = (0);
while(true){
if((i__6311_7686 < count__6310_7685)){
var vec__6328_7687 = chunk__6309_7684.cljs$core$IIndexed$_nth$arity$2(null,i__6311_7686);
var arg_7688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328_7687,(0),null);
var param_7689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6328_7687,(1),null);
var arg_type_7690 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7688) : nex.typechecker.check_expression.call(null,env,arg_7688));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7690,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7689)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7689))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7690)))], null));
}


var G__7694 = seq__6308_7683;
var G__7695 = chunk__6309_7684;
var G__7696 = count__6310_7685;
var G__7697 = (i__6311_7686 + (1));
seq__6308_7683 = G__7694;
chunk__6309_7684 = G__7695;
count__6310_7685 = G__7696;
i__6311_7686 = G__7697;
continue;
} else {
var temp__5823__auto___7700 = cljs.core.seq(seq__6308_7683);
if(temp__5823__auto___7700){
var seq__6308_7702__$1 = temp__5823__auto___7700;
if(cljs.core.chunked_seq_QMARK_(seq__6308_7702__$1)){
var c__5673__auto___7703 = cljs.core.chunk_first(seq__6308_7702__$1);
var G__7704 = cljs.core.chunk_rest(seq__6308_7702__$1);
var G__7705 = c__5673__auto___7703;
var G__7706 = cljs.core.count(c__5673__auto___7703);
var G__7707 = (0);
seq__6308_7683 = G__7704;
chunk__6309_7684 = G__7705;
count__6310_7685 = G__7706;
i__6311_7686 = G__7707;
continue;
} else {
var vec__6333_7710 = cljs.core.first(seq__6308_7702__$1);
var arg_7711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6333_7710,(0),null);
var param_7712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6333_7710,(1),null);
var arg_type_7713 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7711) : nex.typechecker.check_expression.call(null,env,arg_7711));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7713,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7712)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7712))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7713)))], null));
}


var G__7720 = cljs.core.next(seq__6308_7702__$1);
var G__7721 = null;
var G__7722 = (0);
var G__7723 = (0);
seq__6308_7683 = G__7720;
chunk__6309_7684 = G__7721;
count__6310_7685 = G__7722;
i__6311_7686 = G__7723;
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
var seq__6339_7726 = cljs.core.seq(args);
var chunk__6340_7727 = null;
var count__6341_7728 = (0);
var i__6342_7729 = (0);
while(true){
if((i__6342_7729 < count__6341_7728)){
var arg_7732 = chunk__6340_7727.cljs$core$IIndexed$_nth$arity$2(null,i__6342_7729);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7732) : nex.typechecker.check_expression.call(null,env,arg_7732));


var G__7735 = seq__6339_7726;
var G__7736 = chunk__6340_7727;
var G__7737 = count__6341_7728;
var G__7738 = (i__6342_7729 + (1));
seq__6339_7726 = G__7735;
chunk__6340_7727 = G__7736;
count__6341_7728 = G__7737;
i__6342_7729 = G__7738;
continue;
} else {
var temp__5823__auto___7740 = cljs.core.seq(seq__6339_7726);
if(temp__5823__auto___7740){
var seq__6339_7743__$1 = temp__5823__auto___7740;
if(cljs.core.chunked_seq_QMARK_(seq__6339_7743__$1)){
var c__5673__auto___7744 = cljs.core.chunk_first(seq__6339_7743__$1);
var G__7746 = cljs.core.chunk_rest(seq__6339_7743__$1);
var G__7747 = c__5673__auto___7744;
var G__7748 = cljs.core.count(c__5673__auto___7744);
var G__7749 = (0);
seq__6339_7726 = G__7746;
chunk__6340_7727 = G__7747;
count__6341_7728 = G__7748;
i__6342_7729 = G__7749;
continue;
} else {
var arg_7752 = cljs.core.first(seq__6339_7743__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7752) : nex.typechecker.check_expression.call(null,env,arg_7752));


var G__7755 = cljs.core.next(seq__6339_7743__$1);
var G__7756 = null;
var G__7757 = (0);
var G__7758 = (0);
seq__6339_7726 = G__7755;
chunk__6340_7727 = G__7756;
count__6341_7728 = G__7757;
i__6342_7729 = G__7758;
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
var seq__6343_7761 = cljs.core.seq(args);
var chunk__6344_7762 = null;
var count__6345_7763 = (0);
var i__6346_7764 = (0);
while(true){
if((i__6346_7764 < count__6345_7763)){
var arg_7767 = chunk__6344_7762.cljs$core$IIndexed$_nth$arity$2(null,i__6346_7764);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7767) : nex.typechecker.check_expression.call(null,env,arg_7767));


var G__7769 = seq__6343_7761;
var G__7770 = chunk__6344_7762;
var G__7771 = count__6345_7763;
var G__7772 = (i__6346_7764 + (1));
seq__6343_7761 = G__7769;
chunk__6344_7762 = G__7770;
count__6345_7763 = G__7771;
i__6346_7764 = G__7772;
continue;
} else {
var temp__5823__auto___7775 = cljs.core.seq(seq__6343_7761);
if(temp__5823__auto___7775){
var seq__6343_7777__$1 = temp__5823__auto___7775;
if(cljs.core.chunked_seq_QMARK_(seq__6343_7777__$1)){
var c__5673__auto___7778 = cljs.core.chunk_first(seq__6343_7777__$1);
var G__7780 = cljs.core.chunk_rest(seq__6343_7777__$1);
var G__7781 = c__5673__auto___7778;
var G__7782 = cljs.core.count(c__5673__auto___7778);
var G__7783 = (0);
seq__6343_7761 = G__7780;
chunk__6344_7762 = G__7781;
count__6345_7763 = G__7782;
i__6346_7764 = G__7783;
continue;
} else {
var arg_7785 = cljs.core.first(seq__6343_7777__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7785) : nex.typechecker.check_expression.call(null,env,arg_7785));


var G__7787 = cljs.core.next(seq__6343_7777__$1);
var G__7788 = null;
var G__7789 = (0);
var G__7790 = (0);
seq__6343_7761 = G__7787;
chunk__6344_7762 = G__7788;
count__6345_7763 = G__7789;
i__6346_7764 = G__7790;
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
});
/**
 * Check the type of a create expression
 */
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6349){
var map__6350 = p__6349;
var map__6350__$1 = cljs.core.__destructure_map(map__6350);
var expr = map__6350__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6350__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6350__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6350__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6350__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var seq__6351_7803 = cljs.core.seq(args);
var chunk__6352_7804 = null;
var count__6353_7805 = (0);
var i__6354_7806 = (0);
while(true){
if((i__6354_7806 < count__6353_7805)){
var arg_7810 = chunk__6352_7804.cljs$core$IIndexed$_nth$arity$2(null,i__6354_7806);
var arg_type_7811 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7810) : nex.typechecker.check_expression.call(null,env,arg_7810));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7811,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7818 = seq__6351_7803;
var G__7819 = chunk__6352_7804;
var G__7820 = count__6353_7805;
var G__7821 = (i__6354_7806 + (1));
seq__6351_7803 = G__7818;
chunk__6352_7804 = G__7819;
count__6353_7805 = G__7820;
i__6354_7806 = G__7821;
continue;
} else {
var temp__5823__auto___7822 = cljs.core.seq(seq__6351_7803);
if(temp__5823__auto___7822){
var seq__6351_7825__$1 = temp__5823__auto___7822;
if(cljs.core.chunked_seq_QMARK_(seq__6351_7825__$1)){
var c__5673__auto___7827 = cljs.core.chunk_first(seq__6351_7825__$1);
var G__7828 = cljs.core.chunk_rest(seq__6351_7825__$1);
var G__7829 = c__5673__auto___7827;
var G__7830 = cljs.core.count(c__5673__auto___7827);
var G__7831 = (0);
seq__6351_7803 = G__7828;
chunk__6352_7804 = G__7829;
count__6353_7805 = G__7830;
i__6354_7806 = G__7831;
continue;
} else {
var arg_7832 = cljs.core.first(seq__6351_7825__$1);
var arg_type_7833 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7832) : nex.typechecker.check_expression.call(null,env,arg_7832));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7833,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7837 = cljs.core.next(seq__6351_7825__$1);
var G__7838 = null;
var G__7839 = (0);
var G__7840 = (0);
seq__6351_7803 = G__7837;
chunk__6352_7804 = G__7838;
count__6353_7805 = G__7839;
i__6354_7806 = G__7840;
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
var constructors_7850 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__7851 = cljs.core.seq(constructors_7850);
var type_map_7852 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_7853 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_7854 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_7853);
if(((has_constructors_QMARK__7851) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_7854)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7853)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7853)))], null));
}

var params_7865 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_7854);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_7865),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7853)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_7865))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6356_7871 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_7865));
var chunk__6357_7872 = null;
var count__6358_7873 = (0);
var i__6359_7874 = (0);
while(true){
if((i__6359_7874 < count__6358_7873)){
var vec__6367_7877 = chunk__6357_7872.cljs$core$IIndexed$_nth$arity$2(null,i__6359_7874);
var arg_7878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367_7877,(0),null);
var param_7879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6367_7877,(1),null);
var arg_type_7880 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7878) : nex.typechecker.check_expression.call(null,env,arg_7878));
var param_type_7881 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7879),type_map_7852);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7880,param_type_7881))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7853)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7881))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7880))))], null));
}


var G__7887 = seq__6356_7871;
var G__7888 = chunk__6357_7872;
var G__7889 = count__6358_7873;
var G__7890 = (i__6359_7874 + (1));
seq__6356_7871 = G__7887;
chunk__6357_7872 = G__7888;
count__6358_7873 = G__7889;
i__6359_7874 = G__7890;
continue;
} else {
var temp__5823__auto___7893 = cljs.core.seq(seq__6356_7871);
if(temp__5823__auto___7893){
var seq__6356_7894__$1 = temp__5823__auto___7893;
if(cljs.core.chunked_seq_QMARK_(seq__6356_7894__$1)){
var c__5673__auto___7896 = cljs.core.chunk_first(seq__6356_7894__$1);
var G__7898 = cljs.core.chunk_rest(seq__6356_7894__$1);
var G__7899 = c__5673__auto___7896;
var G__7900 = cljs.core.count(c__5673__auto___7896);
var G__7901 = (0);
seq__6356_7871 = G__7898;
chunk__6357_7872 = G__7899;
count__6358_7873 = G__7900;
i__6359_7874 = G__7901;
continue;
} else {
var vec__6372_7903 = cljs.core.first(seq__6356_7894__$1);
var arg_7904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6372_7903,(0),null);
var param_7905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6372_7903,(1),null);
var arg_type_7906 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7904) : nex.typechecker.check_expression.call(null,env,arg_7904));
var param_type_7907 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7905),type_map_7852);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7906,param_type_7907))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7853)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7907))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7906))))], null));
}


var G__7914 = cljs.core.next(seq__6356_7894__$1);
var G__7915 = null;
var G__7916 = (0);
var G__7917 = (0);
seq__6356_7871 = G__7914;
chunk__6357_7872 = G__7915;
count__6358_7873 = G__7916;
i__6359_7874 = G__7917;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6375){
var map__6376 = p__6375;
var map__6376__$1 = cljs.core.__destructure_map(map__6376);
var expr = map__6376__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6376__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6377 = env;
var G__6378 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6377,G__6378) : nex.typechecker.check_expression.call(null,G__6377,G__6378));
})();
var seq__6379_7924 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6380_7925 = null;
var count__6381_7926 = (0);
var i__6382_7927 = (0);
while(true){
if((i__6382_7927 < count__6381_7926)){
var elem_7930 = chunk__6380_7925.cljs$core$IIndexed$_nth$arity$2(null,i__6382_7927);
var elem_type_7931 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7930) : nex.typechecker.check_expression.call(null,env,elem_7930));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7931))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7931))))], null));
}


var G__7938 = seq__6379_7924;
var G__7939 = chunk__6380_7925;
var G__7940 = count__6381_7926;
var G__7941 = (i__6382_7927 + (1));
seq__6379_7924 = G__7938;
chunk__6380_7925 = G__7939;
count__6381_7926 = G__7940;
i__6382_7927 = G__7941;
continue;
} else {
var temp__5823__auto___7942 = cljs.core.seq(seq__6379_7924);
if(temp__5823__auto___7942){
var seq__6379_7944__$1 = temp__5823__auto___7942;
if(cljs.core.chunked_seq_QMARK_(seq__6379_7944__$1)){
var c__5673__auto___7945 = cljs.core.chunk_first(seq__6379_7944__$1);
var G__7946 = cljs.core.chunk_rest(seq__6379_7944__$1);
var G__7947 = c__5673__auto___7945;
var G__7948 = cljs.core.count(c__5673__auto___7945);
var G__7949 = (0);
seq__6379_7924 = G__7946;
chunk__6380_7925 = G__7947;
count__6381_7926 = G__7948;
i__6382_7927 = G__7949;
continue;
} else {
var elem_7952 = cljs.core.first(seq__6379_7944__$1);
var elem_type_7953 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7952) : nex.typechecker.check_expression.call(null,env,elem_7952));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7953))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7953))))], null));
}


var G__7957 = cljs.core.next(seq__6379_7944__$1);
var G__7958 = null;
var G__7959 = (0);
var G__7960 = (0);
seq__6379_7924 = G__7957;
chunk__6380_7925 = G__7958;
count__6381_7926 = G__7959;
i__6382_7927 = G__7960;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6383){
var map__6384 = p__6383;
var map__6384__$1 = cljs.core.__destructure_map(map__6384);
var expr = map__6384__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6384__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6385 = env;
var G__6386 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6385,G__6386) : nex.typechecker.check_expression.call(null,G__6385,G__6386));
})();
var val_type = (function (){var G__6387 = env;
var G__6388 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6387,G__6388) : nex.typechecker.check_expression.call(null,G__6387,G__6388));
})();
var seq__6389_7971 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6390_7972 = null;
var count__6391_7973 = (0);
var i__6392_7974 = (0);
while(true){
if((i__6392_7974 < count__6391_7973)){
var entry_7976 = chunk__6390_7972.cljs$core$IIndexed$_nth$arity$2(null,i__6392_7974);
var k_type_7978 = (function (){var G__6402 = env;
var G__6403 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7976);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6402,G__6403) : nex.typechecker.check_expression.call(null,G__6402,G__6403));
})();
var v_type_7979 = (function (){var G__6404 = env;
var G__6405 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7976);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6404,G__6405) : nex.typechecker.check_expression.call(null,G__6404,G__6405));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7978);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7979);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7990 = seq__6389_7971;
var G__7991 = chunk__6390_7972;
var G__7992 = count__6391_7973;
var G__7993 = (i__6392_7974 + (1));
seq__6389_7971 = G__7990;
chunk__6390_7972 = G__7991;
count__6391_7973 = G__7992;
i__6392_7974 = G__7993;
continue;
} else {
var temp__5823__auto___7994 = cljs.core.seq(seq__6389_7971);
if(temp__5823__auto___7994){
var seq__6389_7995__$1 = temp__5823__auto___7994;
if(cljs.core.chunked_seq_QMARK_(seq__6389_7995__$1)){
var c__5673__auto___7997 = cljs.core.chunk_first(seq__6389_7995__$1);
var G__7999 = cljs.core.chunk_rest(seq__6389_7995__$1);
var G__8000 = c__5673__auto___7997;
var G__8001 = cljs.core.count(c__5673__auto___7997);
var G__8002 = (0);
seq__6389_7971 = G__7999;
chunk__6390_7972 = G__8000;
count__6391_7973 = G__8001;
i__6392_7974 = G__8002;
continue;
} else {
var entry_8004 = cljs.core.first(seq__6389_7995__$1);
var k_type_8005 = (function (){var G__6407 = env;
var G__6408 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8004);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6407,G__6408) : nex.typechecker.check_expression.call(null,G__6407,G__6408));
})();
var v_type_8006 = (function (){var G__6409 = env;
var G__6410 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8004);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6409,G__6410) : nex.typechecker.check_expression.call(null,G__6409,G__6410));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8005);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8006);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8016 = cljs.core.next(seq__6389_7995__$1);
var G__8017 = null;
var G__8018 = (0);
var G__8019 = (0);
seq__6389_7971 = G__8016;
chunk__6390_7972 = G__8017;
count__6391_7973 = G__8018;
i__6392_7974 = G__8019;
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
var G__6411 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6411__$1 = (((G__6411 instanceof cljs.core.Keyword))?G__6411.fqn:null);
switch (G__6411__$1) {
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
var target_type = (function (){var G__6412 = env;
var G__6413 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6412,G__6413) : nex.typechecker.check_expression.call(null,G__6412,G__6413));
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
var cond_type = (function (){var G__6414 = env;
var G__6415 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6414,G__6415) : nex.typechecker.check_expression.call(null,G__6414,G__6415));
})();
var cons_type = (function (){var G__6416 = env;
var G__6417 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6416,G__6417) : nex.typechecker.check_expression.call(null,G__6416,G__6417));
})();
var alt_type = (function (){var G__6418 = env;
var G__6419 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6418,G__6419) : nex.typechecker.check_expression.call(null,G__6418,G__6419));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6420 = env;
var G__6421 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6420,G__6421) : nex.typechecker.check_expression.call(null,G__6420,G__6421));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6422){
var map__6423 = p__6422;
var map__6423__$1 = cljs.core.__destructure_map(map__6423);
var stmt = map__6423__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6423__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6423__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6424){
var map__6425 = p__6424;
var map__6425__$1 = cljs.core.__destructure_map(map__6425);
var stmt = map__6425__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6425__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6425__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6426){
var map__6427 = p__6426;
var map__6427__$1 = cljs.core.__destructure_map(map__6427);
var stmt = map__6427__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6427__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_8093 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8093,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8093)))], null));
}

var then_env_8098 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8101 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___8101)){
var non_nil_var_8103 = temp__5823__auto___8101;
nex.typechecker.env_mark_non_nil(then_env_8098,non_nil_var_8103);
} else {
}

var seq__6428_8105 = cljs.core.seq(then);
var chunk__6429_8106 = null;
var count__6430_8107 = (0);
var i__6431_8108 = (0);
while(true){
if((i__6431_8108 < count__6430_8107)){
var stmt_8111__$1 = chunk__6429_8106.cljs$core$IIndexed$_nth$arity$2(null,i__6431_8108);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8098,stmt_8111__$1) : nex.typechecker.check_statement.call(null,then_env_8098,stmt_8111__$1));


var G__8113 = seq__6428_8105;
var G__8114 = chunk__6429_8106;
var G__8115 = count__6430_8107;
var G__8116 = (i__6431_8108 + (1));
seq__6428_8105 = G__8113;
chunk__6429_8106 = G__8114;
count__6430_8107 = G__8115;
i__6431_8108 = G__8116;
continue;
} else {
var temp__5823__auto___8118 = cljs.core.seq(seq__6428_8105);
if(temp__5823__auto___8118){
var seq__6428_8120__$1 = temp__5823__auto___8118;
if(cljs.core.chunked_seq_QMARK_(seq__6428_8120__$1)){
var c__5673__auto___8121 = cljs.core.chunk_first(seq__6428_8120__$1);
var G__8122 = cljs.core.chunk_rest(seq__6428_8120__$1);
var G__8123 = c__5673__auto___8121;
var G__8124 = cljs.core.count(c__5673__auto___8121);
var G__8125 = (0);
seq__6428_8105 = G__8122;
chunk__6429_8106 = G__8123;
count__6430_8107 = G__8124;
i__6431_8108 = G__8125;
continue;
} else {
var stmt_8127__$1 = cljs.core.first(seq__6428_8120__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8098,stmt_8127__$1) : nex.typechecker.check_statement.call(null,then_env_8098,stmt_8127__$1));


var G__8129 = cljs.core.next(seq__6428_8120__$1);
var G__8130 = null;
var G__8131 = (0);
var G__8132 = (0);
seq__6428_8105 = G__8129;
chunk__6429_8106 = G__8130;
count__6430_8107 = G__8131;
i__6431_8108 = G__8132;
continue;
}
} else {
}
}
break;
}

var seq__6432_8134 = cljs.core.seq(elseif);
var chunk__6433_8135 = null;
var count__6434_8136 = (0);
var i__6435_8137 = (0);
while(true){
if((i__6435_8137 < count__6434_8136)){
var clause_8139 = chunk__6433_8135.cljs$core$IIndexed$_nth$arity$2(null,i__6435_8137);
var ei_cond_type_8140 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8139));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8140,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8140)))], null));
}

var elseif_env_8145 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8147 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8139));
if(cljs.core.truth_(temp__5823__auto___8147)){
var non_nil_var_8149 = temp__5823__auto___8147;
nex.typechecker.env_mark_non_nil(elseif_env_8145,non_nil_var_8149);
} else {
}

var seq__6444_8151 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8139));
var chunk__6445_8152 = null;
var count__6446_8153 = (0);
var i__6447_8154 = (0);
while(true){
if((i__6447_8154 < count__6446_8153)){
var stmt_8157__$1 = chunk__6445_8152.cljs$core$IIndexed$_nth$arity$2(null,i__6447_8154);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8145,stmt_8157__$1) : nex.typechecker.check_statement.call(null,elseif_env_8145,stmt_8157__$1));


var G__8160 = seq__6444_8151;
var G__8161 = chunk__6445_8152;
var G__8162 = count__6446_8153;
var G__8163 = (i__6447_8154 + (1));
seq__6444_8151 = G__8160;
chunk__6445_8152 = G__8161;
count__6446_8153 = G__8162;
i__6447_8154 = G__8163;
continue;
} else {
var temp__5823__auto___8165 = cljs.core.seq(seq__6444_8151);
if(temp__5823__auto___8165){
var seq__6444_8167__$1 = temp__5823__auto___8165;
if(cljs.core.chunked_seq_QMARK_(seq__6444_8167__$1)){
var c__5673__auto___8169 = cljs.core.chunk_first(seq__6444_8167__$1);
var G__8171 = cljs.core.chunk_rest(seq__6444_8167__$1);
var G__8172 = c__5673__auto___8169;
var G__8173 = cljs.core.count(c__5673__auto___8169);
var G__8174 = (0);
seq__6444_8151 = G__8171;
chunk__6445_8152 = G__8172;
count__6446_8153 = G__8173;
i__6447_8154 = G__8174;
continue;
} else {
var stmt_8176__$1 = cljs.core.first(seq__6444_8167__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8145,stmt_8176__$1) : nex.typechecker.check_statement.call(null,elseif_env_8145,stmt_8176__$1));


var G__8179 = cljs.core.next(seq__6444_8167__$1);
var G__8180 = null;
var G__8181 = (0);
var G__8182 = (0);
seq__6444_8151 = G__8179;
chunk__6445_8152 = G__8180;
count__6446_8153 = G__8181;
i__6447_8154 = G__8182;
continue;
}
} else {
}
}
break;
}


var G__8185 = seq__6432_8134;
var G__8186 = chunk__6433_8135;
var G__8187 = count__6434_8136;
var G__8188 = (i__6435_8137 + (1));
seq__6432_8134 = G__8185;
chunk__6433_8135 = G__8186;
count__6434_8136 = G__8187;
i__6435_8137 = G__8188;
continue;
} else {
var temp__5823__auto___8190 = cljs.core.seq(seq__6432_8134);
if(temp__5823__auto___8190){
var seq__6432_8191__$1 = temp__5823__auto___8190;
if(cljs.core.chunked_seq_QMARK_(seq__6432_8191__$1)){
var c__5673__auto___8193 = cljs.core.chunk_first(seq__6432_8191__$1);
var G__8195 = cljs.core.chunk_rest(seq__6432_8191__$1);
var G__8196 = c__5673__auto___8193;
var G__8197 = cljs.core.count(c__5673__auto___8193);
var G__8198 = (0);
seq__6432_8134 = G__8195;
chunk__6433_8135 = G__8196;
count__6434_8136 = G__8197;
i__6435_8137 = G__8198;
continue;
} else {
var clause_8200 = cljs.core.first(seq__6432_8191__$1);
var ei_cond_type_8201 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8200));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8201,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8201)))], null));
}

var elseif_env_8205 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8207__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8200));
if(cljs.core.truth_(temp__5823__auto___8207__$1)){
var non_nil_var_8209 = temp__5823__auto___8207__$1;
nex.typechecker.env_mark_non_nil(elseif_env_8205,non_nil_var_8209);
} else {
}

var seq__6448_8211 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8200));
var chunk__6449_8212 = null;
var count__6450_8213 = (0);
var i__6451_8214 = (0);
while(true){
if((i__6451_8214 < count__6450_8213)){
var stmt_8216__$1 = chunk__6449_8212.cljs$core$IIndexed$_nth$arity$2(null,i__6451_8214);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8205,stmt_8216__$1) : nex.typechecker.check_statement.call(null,elseif_env_8205,stmt_8216__$1));


var G__8219 = seq__6448_8211;
var G__8220 = chunk__6449_8212;
var G__8221 = count__6450_8213;
var G__8222 = (i__6451_8214 + (1));
seq__6448_8211 = G__8219;
chunk__6449_8212 = G__8220;
count__6450_8213 = G__8221;
i__6451_8214 = G__8222;
continue;
} else {
var temp__5823__auto___8225__$1 = cljs.core.seq(seq__6448_8211);
if(temp__5823__auto___8225__$1){
var seq__6448_8226__$1 = temp__5823__auto___8225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6448_8226__$1)){
var c__5673__auto___8228 = cljs.core.chunk_first(seq__6448_8226__$1);
var G__8230 = cljs.core.chunk_rest(seq__6448_8226__$1);
var G__8231 = c__5673__auto___8228;
var G__8232 = cljs.core.count(c__5673__auto___8228);
var G__8233 = (0);
seq__6448_8211 = G__8230;
chunk__6449_8212 = G__8231;
count__6450_8213 = G__8232;
i__6451_8214 = G__8233;
continue;
} else {
var stmt_8236__$1 = cljs.core.first(seq__6448_8226__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8205,stmt_8236__$1) : nex.typechecker.check_statement.call(null,elseif_env_8205,stmt_8236__$1));


var G__8239 = cljs.core.next(seq__6448_8226__$1);
var G__8240 = null;
var G__8241 = (0);
var G__8242 = (0);
seq__6448_8211 = G__8239;
chunk__6449_8212 = G__8240;
count__6450_8213 = G__8241;
i__6451_8214 = G__8242;
continue;
}
} else {
}
}
break;
}


var G__8244 = cljs.core.next(seq__6432_8191__$1);
var G__8245 = null;
var G__8246 = (0);
var G__8247 = (0);
seq__6432_8134 = G__8244;
chunk__6433_8135 = G__8245;
count__6434_8136 = G__8246;
i__6435_8137 = G__8247;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6452 = cljs.core.seq(else$);
var chunk__6453 = null;
var count__6454 = (0);
var i__6455 = (0);
while(true){
if((i__6455 < count__6454)){
var stmt__$1 = chunk__6453.cljs$core$IIndexed$_nth$arity$2(null,i__6455);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8252 = seq__6452;
var G__8253 = chunk__6453;
var G__8254 = count__6454;
var G__8255 = (i__6455 + (1));
seq__6452 = G__8252;
chunk__6453 = G__8253;
count__6454 = G__8254;
i__6455 = G__8255;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6452);
if(temp__5823__auto__){
var seq__6452__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6452__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6452__$1);
var G__8259 = cljs.core.chunk_rest(seq__6452__$1);
var G__8260 = c__5673__auto__;
var G__8261 = cljs.core.count(c__5673__auto__);
var G__8262 = (0);
seq__6452 = G__8259;
chunk__6453 = G__8260;
count__6454 = G__8261;
i__6455 = G__8262;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6452__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8266 = cljs.core.next(seq__6452__$1);
var G__8267 = null;
var G__8268 = (0);
var G__8269 = (0);
seq__6452 = G__8266;
chunk__6453 = G__8267;
count__6454 = G__8268;
i__6455 = G__8269;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6456){
var map__6457 = p__6456;
var map__6457__$1 = cljs.core.__destructure_map(map__6457);
var stmt = map__6457__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6457__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6457__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6457__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6457__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6457__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6458_8271 = cljs.core.seq(init);
var chunk__6459_8272 = null;
var count__6460_8273 = (0);
var i__6461_8274 = (0);
while(true){
if((i__6461_8274 < count__6460_8273)){
var s_8275 = chunk__6459_8272.cljs$core$IIndexed$_nth$arity$2(null,i__6461_8274);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8275) : nex.typechecker.check_statement.call(null,loop_env,s_8275));


var G__8276 = seq__6458_8271;
var G__8277 = chunk__6459_8272;
var G__8278 = count__6460_8273;
var G__8279 = (i__6461_8274 + (1));
seq__6458_8271 = G__8276;
chunk__6459_8272 = G__8277;
count__6460_8273 = G__8278;
i__6461_8274 = G__8279;
continue;
} else {
var temp__5823__auto___8280 = cljs.core.seq(seq__6458_8271);
if(temp__5823__auto___8280){
var seq__6458_8281__$1 = temp__5823__auto___8280;
if(cljs.core.chunked_seq_QMARK_(seq__6458_8281__$1)){
var c__5673__auto___8282 = cljs.core.chunk_first(seq__6458_8281__$1);
var G__8283 = cljs.core.chunk_rest(seq__6458_8281__$1);
var G__8284 = c__5673__auto___8282;
var G__8285 = cljs.core.count(c__5673__auto___8282);
var G__8286 = (0);
seq__6458_8271 = G__8283;
chunk__6459_8272 = G__8284;
count__6460_8273 = G__8285;
i__6461_8274 = G__8286;
continue;
} else {
var s_8287 = cljs.core.first(seq__6458_8281__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8287) : nex.typechecker.check_statement.call(null,loop_env,s_8287));


var G__8288 = cljs.core.next(seq__6458_8281__$1);
var G__8289 = null;
var G__8290 = (0);
var G__8291 = (0);
seq__6458_8271 = G__8288;
chunk__6459_8272 = G__8289;
count__6460_8273 = G__8290;
i__6461_8274 = G__8291;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_8292 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8292,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8292,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8292)))], null));
}
} else {
}

var seq__6462 = cljs.core.seq(body);
var chunk__6463 = null;
var count__6464 = (0);
var i__6465 = (0);
while(true){
if((i__6465 < count__6464)){
var stmt__$1 = chunk__6463.cljs$core$IIndexed$_nth$arity$2(null,i__6465);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8293 = seq__6462;
var G__8294 = chunk__6463;
var G__8295 = count__6464;
var G__8296 = (i__6465 + (1));
seq__6462 = G__8293;
chunk__6463 = G__8294;
count__6464 = G__8295;
i__6465 = G__8296;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6462);
if(temp__5823__auto__){
var seq__6462__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6462__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6462__$1);
var G__8297 = cljs.core.chunk_rest(seq__6462__$1);
var G__8298 = c__5673__auto__;
var G__8299 = cljs.core.count(c__5673__auto__);
var G__8300 = (0);
seq__6462 = G__8297;
chunk__6463 = G__8298;
count__6464 = G__8299;
i__6465 = G__8300;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6462__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8301 = cljs.core.next(seq__6462__$1);
var G__8302 = null;
var G__8303 = (0);
var G__8304 = (0);
seq__6462 = G__8301;
chunk__6463 = G__8302;
count__6464 = G__8303;
i__6465 = G__8304;
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
var G__6466 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6466__$1 = (((G__6466 instanceof cljs.core.Keyword))?G__6466.fqn:null);
switch (G__6466__$1) {
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
var seq__6467_8306 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6468_8307 = null;
var count__6469_8308 = (0);
var i__6470_8309 = (0);
while(true){
if((i__6470_8309 < count__6469_8308)){
var s_8310 = chunk__6468_8307.cljs$core$IIndexed$_nth$arity$2(null,i__6470_8309);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s_8310) : nex.typechecker.check_statement.call(null,env,s_8310));


var G__8311 = seq__6467_8306;
var G__8312 = chunk__6468_8307;
var G__8313 = count__6469_8308;
var G__8314 = (i__6470_8309 + (1));
seq__6467_8306 = G__8311;
chunk__6468_8307 = G__8312;
count__6469_8308 = G__8313;
i__6470_8309 = G__8314;
continue;
} else {
var temp__5823__auto___8315 = cljs.core.seq(seq__6467_8306);
if(temp__5823__auto___8315){
var seq__6467_8316__$1 = temp__5823__auto___8315;
if(cljs.core.chunked_seq_QMARK_(seq__6467_8316__$1)){
var c__5673__auto___8317 = cljs.core.chunk_first(seq__6467_8316__$1);
var G__8318 = cljs.core.chunk_rest(seq__6467_8316__$1);
var G__8319 = c__5673__auto___8317;
var G__8320 = cljs.core.count(c__5673__auto___8317);
var G__8321 = (0);
seq__6467_8306 = G__8318;
chunk__6468_8307 = G__8319;
count__6469_8308 = G__8320;
i__6470_8309 = G__8321;
continue;
} else {
var s_8322 = cljs.core.first(seq__6467_8316__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s_8322) : nex.typechecker.check_statement.call(null,env,s_8322));


var G__8323 = cljs.core.next(seq__6467_8316__$1);
var G__8324 = null;
var G__8325 = (0);
var G__8326 = (0);
seq__6467_8306 = G__8323;
chunk__6468_8307 = G__8324;
count__6469_8308 = G__8325;
i__6470_8309 = G__8326;
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

var seq__6471 = cljs.core.seq(rescue);
var chunk__6472 = null;
var count__6473 = (0);
var i__6474 = (0);
while(true){
if((i__6474 < count__6473)){
var s = chunk__6472.cljs$core$IIndexed$_nth$arity$2(null,i__6474);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8336 = seq__6471;
var G__8337 = chunk__6472;
var G__8338 = count__6473;
var G__8339 = (i__6474 + (1));
seq__6471 = G__8336;
chunk__6472 = G__8337;
count__6473 = G__8338;
i__6474 = G__8339;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6471);
if(temp__5823__auto____$1){
var seq__6471__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6471__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6471__$1);
var G__8347 = cljs.core.chunk_rest(seq__6471__$1);
var G__8348 = c__5673__auto__;
var G__8349 = cljs.core.count(c__5673__auto__);
var G__8350 = (0);
seq__6471 = G__8347;
chunk__6472 = G__8348;
count__6473 = G__8349;
i__6474 = G__8350;
continue;
} else {
var s = cljs.core.first(seq__6471__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8355 = cljs.core.next(seq__6471__$1);
var G__8357 = null;
var G__8358 = (0);
var G__8359 = (0);
seq__6471 = G__8355;
chunk__6472 = G__8357;
count__6473 = G__8358;
i__6474 = G__8359;
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
var seq__6475 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6476 = null;
var count__6477 = (0);
var i__6478 = (0);
while(true){
if((i__6478 < count__6477)){
var s = chunk__6476.cljs$core$IIndexed$_nth$arity$2(null,i__6478);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8369 = seq__6475;
var G__8370 = chunk__6476;
var G__8371 = count__6477;
var G__8372 = (i__6478 + (1));
seq__6475 = G__8369;
chunk__6476 = G__8370;
count__6477 = G__8371;
i__6478 = G__8372;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6475);
if(temp__5823__auto__){
var seq__6475__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6475__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6475__$1);
var G__8380 = cljs.core.chunk_rest(seq__6475__$1);
var G__8381 = c__5673__auto__;
var G__8382 = cljs.core.count(c__5673__auto__);
var G__8383 = (0);
seq__6475 = G__8380;
chunk__6476 = G__8381;
count__6477 = G__8382;
i__6478 = G__8383;
continue;
} else {
var s = cljs.core.first(seq__6475__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8389 = cljs.core.next(seq__6475__$1);
var G__8390 = null;
var G__8391 = (0);
var G__8392 = (0);
seq__6475 = G__8389;
chunk__6476 = G__8390;
count__6477 = G__8391;
i__6478 = G__8392;
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

var seq__6479_8397 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6480_8398 = null;
var count__6481_8399 = (0);
var i__6482_8400 = (0);
while(true){
if((i__6482_8400 < count__6481_8399)){
var clause_8406 = chunk__6480_8398.cljs$core$IIndexed$_nth$arity$2(null,i__6482_8400);
var G__6487_8407 = env;
var G__6488_8408 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8406);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6487_8407,G__6488_8408) : nex.typechecker.check_statement.call(null,G__6487_8407,G__6488_8408));


var G__8411 = seq__6479_8397;
var G__8412 = chunk__6480_8398;
var G__8413 = count__6481_8399;
var G__8414 = (i__6482_8400 + (1));
seq__6479_8397 = G__8411;
chunk__6480_8398 = G__8412;
count__6481_8399 = G__8413;
i__6482_8400 = G__8414;
continue;
} else {
var temp__5823__auto___8420 = cljs.core.seq(seq__6479_8397);
if(temp__5823__auto___8420){
var seq__6479_8421__$1 = temp__5823__auto___8420;
if(cljs.core.chunked_seq_QMARK_(seq__6479_8421__$1)){
var c__5673__auto___8423 = cljs.core.chunk_first(seq__6479_8421__$1);
var G__8424 = cljs.core.chunk_rest(seq__6479_8421__$1);
var G__8425 = c__5673__auto___8423;
var G__8426 = cljs.core.count(c__5673__auto___8423);
var G__8427 = (0);
seq__6479_8397 = G__8424;
chunk__6480_8398 = G__8425;
count__6481_8399 = G__8426;
i__6482_8400 = G__8427;
continue;
} else {
var clause_8432 = cljs.core.first(seq__6479_8421__$1);
var G__6489_8437 = env;
var G__6490_8438 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8432);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6489_8437,G__6490_8438) : nex.typechecker.check_statement.call(null,G__6489_8437,G__6490_8438));


var G__8440 = cljs.core.next(seq__6479_8421__$1);
var G__8441 = null;
var G__8442 = (0);
var G__8443 = (0);
seq__6479_8397 = G__8440;
chunk__6480_8398 = G__8441;
count__6481_8399 = G__8442;
i__6482_8400 = G__8443;
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
var G__6494 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6494__$1 = (((G__6494 instanceof cljs.core.Keyword))?G__6494.fqn:null);
switch (G__6494__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6495 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6495) : nex.typechecker.references_result_QMARK_.call(null,G__6495));
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
var G__6496 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6496) : nex.typechecker.references_result_QMARK_.call(null,G__6496));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6500){
var map__6502 = p__6500;
var map__6502__$1 = cljs.core.__destructure_map(map__6502);
var method = map__6502__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6502__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6504_8483 = cljs.core.seq(params);
var chunk__6505_8484 = null;
var count__6506_8485 = (0);
var i__6507_8486 = (0);
while(true){
if((i__6507_8486 < count__6506_8485)){
var param_8487 = chunk__6505_8484.cljs$core$IIndexed$_nth$arity$2(null,i__6507_8486);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8487))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8487));
} else {
}


var G__8488 = seq__6504_8483;
var G__8489 = chunk__6505_8484;
var G__8490 = count__6506_8485;
var G__8491 = (i__6507_8486 + (1));
seq__6504_8483 = G__8488;
chunk__6505_8484 = G__8489;
count__6506_8485 = G__8490;
i__6507_8486 = G__8491;
continue;
} else {
var temp__5823__auto___8492 = cljs.core.seq(seq__6504_8483);
if(temp__5823__auto___8492){
var seq__6504_8493__$1 = temp__5823__auto___8492;
if(cljs.core.chunked_seq_QMARK_(seq__6504_8493__$1)){
var c__5673__auto___8494 = cljs.core.chunk_first(seq__6504_8493__$1);
var G__8495 = cljs.core.chunk_rest(seq__6504_8493__$1);
var G__8496 = c__5673__auto___8494;
var G__8497 = cljs.core.count(c__5673__auto___8494);
var G__8498 = (0);
seq__6504_8483 = G__8495;
chunk__6505_8484 = G__8496;
count__6506_8485 = G__8497;
i__6507_8486 = G__8498;
continue;
} else {
var param_8499 = cljs.core.first(seq__6504_8493__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8499))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8499));
} else {
}


var G__8504 = cljs.core.next(seq__6504_8493__$1);
var G__8505 = null;
var G__8506 = (0);
var G__8507 = (0);
seq__6504_8483 = G__8504;
chunk__6505_8484 = G__8505;
count__6506_8485 = G__8506;
i__6507_8486 = G__8507;
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
return cljs.core.some((function (p1__6499_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6499_SHARP_));
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

var seq__6516_8517 = cljs.core.seq(params);
var chunk__6517_8518 = null;
var count__6518_8519 = (0);
var i__6519_8520 = (0);
while(true){
if((i__6519_8520 < count__6518_8519)){
var param_8525 = chunk__6517_8518.cljs$core$IIndexed$_nth$arity$2(null,i__6519_8520);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8525),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8525);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8526 = seq__6516_8517;
var G__8527 = chunk__6517_8518;
var G__8528 = count__6518_8519;
var G__8529 = (i__6519_8520 + (1));
seq__6516_8517 = G__8526;
chunk__6517_8518 = G__8527;
count__6518_8519 = G__8528;
i__6519_8520 = G__8529;
continue;
} else {
var temp__5823__auto___8534 = cljs.core.seq(seq__6516_8517);
if(temp__5823__auto___8534){
var seq__6516_8535__$1 = temp__5823__auto___8534;
if(cljs.core.chunked_seq_QMARK_(seq__6516_8535__$1)){
var c__5673__auto___8536 = cljs.core.chunk_first(seq__6516_8535__$1);
var G__8537 = cljs.core.chunk_rest(seq__6516_8535__$1);
var G__8538 = c__5673__auto___8536;
var G__8539 = cljs.core.count(c__5673__auto___8536);
var G__8540 = (0);
seq__6516_8517 = G__8537;
chunk__6517_8518 = G__8538;
count__6518_8519 = G__8539;
i__6519_8520 = G__8540;
continue;
} else {
var param_8545 = cljs.core.first(seq__6516_8535__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8545),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8545);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8546 = cljs.core.next(seq__6516_8535__$1);
var G__8547 = null;
var G__8548 = (0);
var G__8549 = (0);
seq__6516_8517 = G__8546;
chunk__6517_8518 = G__8547;
count__6518_8519 = G__8548;
i__6519_8520 = G__8549;
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

var seq__6524_8550 = cljs.core.seq(require__$1);
var chunk__6525_8551 = null;
var count__6526_8552 = (0);
var i__6527_8553 = (0);
while(true){
if((i__6527_8553 < count__6526_8552)){
var assertion_8554 = chunk__6525_8551.cljs$core$IIndexed$_nth$arity$2(null,i__6527_8553);
var cond_type_8555 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8554));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8555,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8555)))], null));
}


var G__8556 = seq__6524_8550;
var G__8557 = chunk__6525_8551;
var G__8558 = count__6526_8552;
var G__8559 = (i__6527_8553 + (1));
seq__6524_8550 = G__8556;
chunk__6525_8551 = G__8557;
count__6526_8552 = G__8558;
i__6527_8553 = G__8559;
continue;
} else {
var temp__5823__auto___8560 = cljs.core.seq(seq__6524_8550);
if(temp__5823__auto___8560){
var seq__6524_8565__$1 = temp__5823__auto___8560;
if(cljs.core.chunked_seq_QMARK_(seq__6524_8565__$1)){
var c__5673__auto___8566 = cljs.core.chunk_first(seq__6524_8565__$1);
var G__8567 = cljs.core.chunk_rest(seq__6524_8565__$1);
var G__8568 = c__5673__auto___8566;
var G__8569 = cljs.core.count(c__5673__auto___8566);
var G__8570 = (0);
seq__6524_8550 = G__8567;
chunk__6525_8551 = G__8568;
count__6526_8552 = G__8569;
i__6527_8553 = G__8570;
continue;
} else {
var assertion_8572 = cljs.core.first(seq__6524_8565__$1);
var cond_type_8576 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8572));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8576,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8576)))], null));
}


var G__8581 = cljs.core.next(seq__6524_8565__$1);
var G__8582 = null;
var G__8583 = (0);
var G__8584 = (0);
seq__6524_8550 = G__8581;
chunk__6525_8551 = G__8582;
count__6526_8552 = G__8583;
i__6527_8553 = G__8584;
continue;
}
} else {
}
}
break;
}

var seq__6536_8585 = cljs.core.seq(body);
var chunk__6537_8586 = null;
var count__6538_8587 = (0);
var i__6539_8588 = (0);
while(true){
if((i__6539_8588 < count__6538_8587)){
var stmt_8589 = chunk__6537_8586.cljs$core$IIndexed$_nth$arity$2(null,i__6539_8588);
nex.typechecker.check_statement(method_env,stmt_8589);


var G__8590 = seq__6536_8585;
var G__8591 = chunk__6537_8586;
var G__8592 = count__6538_8587;
var G__8593 = (i__6539_8588 + (1));
seq__6536_8585 = G__8590;
chunk__6537_8586 = G__8591;
count__6538_8587 = G__8592;
i__6539_8588 = G__8593;
continue;
} else {
var temp__5823__auto___8594 = cljs.core.seq(seq__6536_8585);
if(temp__5823__auto___8594){
var seq__6536_8595__$1 = temp__5823__auto___8594;
if(cljs.core.chunked_seq_QMARK_(seq__6536_8595__$1)){
var c__5673__auto___8596 = cljs.core.chunk_first(seq__6536_8595__$1);
var G__8597 = cljs.core.chunk_rest(seq__6536_8595__$1);
var G__8598 = c__5673__auto___8596;
var G__8599 = cljs.core.count(c__5673__auto___8596);
var G__8600 = (0);
seq__6536_8585 = G__8597;
chunk__6537_8586 = G__8598;
count__6538_8587 = G__8599;
i__6539_8588 = G__8600;
continue;
} else {
var stmt_8603 = cljs.core.first(seq__6536_8595__$1);
nex.typechecker.check_statement(method_env,stmt_8603);


var G__8604 = cljs.core.next(seq__6536_8595__$1);
var G__8605 = null;
var G__8606 = (0);
var G__8607 = (0);
seq__6536_8585 = G__8604;
chunk__6537_8586 = G__8605;
count__6538_8587 = G__8606;
i__6539_8588 = G__8607;
continue;
}
} else {
}
}
break;
}

var seq__6540_8609 = cljs.core.seq(ensure);
var chunk__6541_8611 = null;
var count__6542_8613 = (0);
var i__6543_8615 = (0);
while(true){
if((i__6543_8615 < count__6542_8613)){
var assertion_8617 = chunk__6541_8611.cljs$core$IIndexed$_nth$arity$2(null,i__6543_8615);
var cond_type_8621 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8617));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8621,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8621)))], null));
}


var G__8622 = seq__6540_8609;
var G__8623 = chunk__6541_8611;
var G__8624 = count__6542_8613;
var G__8625 = (i__6543_8615 + (1));
seq__6540_8609 = G__8622;
chunk__6541_8611 = G__8623;
count__6542_8613 = G__8624;
i__6543_8615 = G__8625;
continue;
} else {
var temp__5823__auto___8631 = cljs.core.seq(seq__6540_8609);
if(temp__5823__auto___8631){
var seq__6540_8633__$1 = temp__5823__auto___8631;
if(cljs.core.chunked_seq_QMARK_(seq__6540_8633__$1)){
var c__5673__auto___8634 = cljs.core.chunk_first(seq__6540_8633__$1);
var G__8636 = cljs.core.chunk_rest(seq__6540_8633__$1);
var G__8637 = c__5673__auto___8634;
var G__8638 = cljs.core.count(c__5673__auto___8634);
var G__8639 = (0);
seq__6540_8609 = G__8636;
chunk__6541_8611 = G__8637;
count__6542_8613 = G__8638;
i__6543_8615 = G__8639;
continue;
} else {
var assertion_8645 = cljs.core.first(seq__6540_8633__$1);
var cond_type_8646 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8645));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8646,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8646)))], null));
}


var G__8650 = cljs.core.next(seq__6540_8633__$1);
var G__8651 = null;
var G__8652 = (0);
var G__8653 = (0);
seq__6540_8609 = G__8650;
chunk__6541_8611 = G__8651;
count__6542_8613 = G__8652;
i__6543_8615 = G__8653;
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

var seq__6548 = cljs.core.seq(rescue);
var chunk__6549 = null;
var count__6550 = (0);
var i__6551 = (0);
while(true){
if((i__6551 < count__6550)){
var stmt = chunk__6549.cljs$core$IIndexed$_nth$arity$2(null,i__6551);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8659 = seq__6548;
var G__8660 = chunk__6549;
var G__8661 = count__6550;
var G__8662 = (i__6551 + (1));
seq__6548 = G__8659;
chunk__6549 = G__8660;
count__6550 = G__8661;
i__6551 = G__8662;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6548);
if(temp__5823__auto__){
var seq__6548__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6548__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6548__$1);
var G__8663 = cljs.core.chunk_rest(seq__6548__$1);
var G__8664 = c__5673__auto__;
var G__8665 = cljs.core.count(c__5673__auto__);
var G__8666 = (0);
seq__6548 = G__8663;
chunk__6549 = G__8664;
count__6550 = G__8665;
i__6551 = G__8666;
continue;
} else {
var stmt = cljs.core.first(seq__6548__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8667 = cljs.core.next(seq__6548__$1);
var G__8668 = null;
var G__8669 = (0);
var G__8670 = (0);
seq__6548 = G__8667;
chunk__6549 = G__8668;
count__6550 = G__8669;
i__6551 = G__8670;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6559){
var map__6560 = p__6559;
var map__6560__$1 = cljs.core.__destructure_map(map__6560);
var constructor$ = map__6560__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6560__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6564_8671 = cljs.core.seq(params);
var chunk__6565_8672 = null;
var count__6566_8673 = (0);
var i__6567_8674 = (0);
while(true){
if((i__6567_8674 < count__6566_8673)){
var param_8675 = chunk__6565_8672.cljs$core$IIndexed$_nth$arity$2(null,i__6567_8674);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8675))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8675));
} else {
}


var G__8676 = seq__6564_8671;
var G__8677 = chunk__6565_8672;
var G__8678 = count__6566_8673;
var G__8679 = (i__6567_8674 + (1));
seq__6564_8671 = G__8676;
chunk__6565_8672 = G__8677;
count__6566_8673 = G__8678;
i__6567_8674 = G__8679;
continue;
} else {
var temp__5823__auto___8680 = cljs.core.seq(seq__6564_8671);
if(temp__5823__auto___8680){
var seq__6564_8681__$1 = temp__5823__auto___8680;
if(cljs.core.chunked_seq_QMARK_(seq__6564_8681__$1)){
var c__5673__auto___8682 = cljs.core.chunk_first(seq__6564_8681__$1);
var G__8683 = cljs.core.chunk_rest(seq__6564_8681__$1);
var G__8684 = c__5673__auto___8682;
var G__8685 = cljs.core.count(c__5673__auto___8682);
var G__8686 = (0);
seq__6564_8671 = G__8683;
chunk__6565_8672 = G__8684;
count__6566_8673 = G__8685;
i__6567_8674 = G__8686;
continue;
} else {
var param_8687 = cljs.core.first(seq__6564_8681__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8687))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8687));
} else {
}


var G__8690 = cljs.core.next(seq__6564_8681__$1);
var G__8691 = null;
var G__8692 = (0);
var G__8693 = (0);
seq__6564_8671 = G__8690;
chunk__6565_8672 = G__8691;
count__6566_8673 = G__8692;
i__6567_8674 = G__8693;
continue;
}
} else {
}
}
break;
}

var seq__6581_8695 = cljs.core.seq(params);
var chunk__6582_8697 = null;
var count__6583_8698 = (0);
var i__6584_8699 = (0);
while(true){
if((i__6584_8699 < count__6583_8698)){
var param_8700 = chunk__6582_8697.cljs$core$IIndexed$_nth$arity$2(null,i__6584_8699);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8700),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8700);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8701 = seq__6581_8695;
var G__8702 = chunk__6582_8697;
var G__8703 = count__6583_8698;
var G__8704 = (i__6584_8699 + (1));
seq__6581_8695 = G__8701;
chunk__6582_8697 = G__8702;
count__6583_8698 = G__8703;
i__6584_8699 = G__8704;
continue;
} else {
var temp__5823__auto___8705 = cljs.core.seq(seq__6581_8695);
if(temp__5823__auto___8705){
var seq__6581_8706__$1 = temp__5823__auto___8705;
if(cljs.core.chunked_seq_QMARK_(seq__6581_8706__$1)){
var c__5673__auto___8707 = cljs.core.chunk_first(seq__6581_8706__$1);
var G__8708 = cljs.core.chunk_rest(seq__6581_8706__$1);
var G__8709 = c__5673__auto___8707;
var G__8710 = cljs.core.count(c__5673__auto___8707);
var G__8711 = (0);
seq__6581_8695 = G__8708;
chunk__6582_8697 = G__8709;
count__6583_8698 = G__8710;
i__6584_8699 = G__8711;
continue;
} else {
var param_8712 = cljs.core.first(seq__6581_8706__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8712),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8712);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8713 = cljs.core.next(seq__6581_8706__$1);
var G__8714 = null;
var G__8715 = (0);
var G__8716 = (0);
seq__6581_8695 = G__8713;
chunk__6582_8697 = G__8714;
count__6583_8698 = G__8715;
i__6584_8699 = G__8716;
continue;
}
} else {
}
}
break;
}

var seq__6594_8721 = cljs.core.seq(require__$1);
var chunk__6595_8722 = null;
var count__6596_8723 = (0);
var i__6597_8724 = (0);
while(true){
if((i__6597_8724 < count__6596_8723)){
var assertion_8725 = chunk__6595_8722.cljs$core$IIndexed$_nth$arity$2(null,i__6597_8724);
if(cljs.core.truth_(assertion_8725)){
var cond_type_8730 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8725));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8730,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8730)))], null));
}
} else {
}


var G__8735 = seq__6594_8721;
var G__8736 = chunk__6595_8722;
var G__8737 = count__6596_8723;
var G__8738 = (i__6597_8724 + (1));
seq__6594_8721 = G__8735;
chunk__6595_8722 = G__8736;
count__6596_8723 = G__8737;
i__6597_8724 = G__8738;
continue;
} else {
var temp__5823__auto___8739 = cljs.core.seq(seq__6594_8721);
if(temp__5823__auto___8739){
var seq__6594_8740__$1 = temp__5823__auto___8739;
if(cljs.core.chunked_seq_QMARK_(seq__6594_8740__$1)){
var c__5673__auto___8741 = cljs.core.chunk_first(seq__6594_8740__$1);
var G__8746 = cljs.core.chunk_rest(seq__6594_8740__$1);
var G__8747 = c__5673__auto___8741;
var G__8748 = cljs.core.count(c__5673__auto___8741);
var G__8749 = (0);
seq__6594_8721 = G__8746;
chunk__6595_8722 = G__8747;
count__6596_8723 = G__8748;
i__6597_8724 = G__8749;
continue;
} else {
var assertion_8750 = cljs.core.first(seq__6594_8740__$1);
if(cljs.core.truth_(assertion_8750)){
var cond_type_8751 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8750));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8751,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8751)))], null));
}
} else {
}


var G__8760 = cljs.core.next(seq__6594_8740__$1);
var G__8761 = null;
var G__8762 = (0);
var G__8763 = (0);
seq__6594_8721 = G__8760;
chunk__6595_8722 = G__8761;
count__6596_8723 = G__8762;
i__6597_8724 = G__8763;
continue;
}
} else {
}
}
break;
}

var seq__6606_8764 = cljs.core.seq(body);
var chunk__6607_8765 = null;
var count__6608_8766 = (0);
var i__6609_8767 = (0);
while(true){
if((i__6609_8767 < count__6608_8766)){
var stmt_8768 = chunk__6607_8765.cljs$core$IIndexed$_nth$arity$2(null,i__6609_8767);
nex.typechecker.check_statement(ctor_env,stmt_8768);


var G__8769 = seq__6606_8764;
var G__8770 = chunk__6607_8765;
var G__8771 = count__6608_8766;
var G__8772 = (i__6609_8767 + (1));
seq__6606_8764 = G__8769;
chunk__6607_8765 = G__8770;
count__6608_8766 = G__8771;
i__6609_8767 = G__8772;
continue;
} else {
var temp__5823__auto___8773 = cljs.core.seq(seq__6606_8764);
if(temp__5823__auto___8773){
var seq__6606_8774__$1 = temp__5823__auto___8773;
if(cljs.core.chunked_seq_QMARK_(seq__6606_8774__$1)){
var c__5673__auto___8775 = cljs.core.chunk_first(seq__6606_8774__$1);
var G__8776 = cljs.core.chunk_rest(seq__6606_8774__$1);
var G__8777 = c__5673__auto___8775;
var G__8778 = cljs.core.count(c__5673__auto___8775);
var G__8779 = (0);
seq__6606_8764 = G__8776;
chunk__6607_8765 = G__8777;
count__6608_8766 = G__8778;
i__6609_8767 = G__8779;
continue;
} else {
var stmt_8780 = cljs.core.first(seq__6606_8774__$1);
nex.typechecker.check_statement(ctor_env,stmt_8780);


var G__8785 = cljs.core.next(seq__6606_8774__$1);
var G__8786 = null;
var G__8787 = (0);
var G__8788 = (0);
seq__6606_8764 = G__8785;
chunk__6607_8765 = G__8786;
count__6608_8766 = G__8787;
i__6609_8767 = G__8788;
continue;
}
} else {
}
}
break;
}

var seq__6620_8789 = cljs.core.seq(ensure);
var chunk__6621_8790 = null;
var count__6622_8791 = (0);
var i__6623_8792 = (0);
while(true){
if((i__6623_8792 < count__6622_8791)){
var assertion_8801 = chunk__6621_8790.cljs$core$IIndexed$_nth$arity$2(null,i__6623_8792);
if(cljs.core.truth_(assertion_8801)){
var cond_type_8802 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8801));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8802,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8802)))], null));
}
} else {
}


var G__8803 = seq__6620_8789;
var G__8804 = chunk__6621_8790;
var G__8805 = count__6622_8791;
var G__8806 = (i__6623_8792 + (1));
seq__6620_8789 = G__8803;
chunk__6621_8790 = G__8804;
count__6622_8791 = G__8805;
i__6623_8792 = G__8806;
continue;
} else {
var temp__5823__auto___8807 = cljs.core.seq(seq__6620_8789);
if(temp__5823__auto___8807){
var seq__6620_8808__$1 = temp__5823__auto___8807;
if(cljs.core.chunked_seq_QMARK_(seq__6620_8808__$1)){
var c__5673__auto___8809 = cljs.core.chunk_first(seq__6620_8808__$1);
var G__8810 = cljs.core.chunk_rest(seq__6620_8808__$1);
var G__8811 = c__5673__auto___8809;
var G__8812 = cljs.core.count(c__5673__auto___8809);
var G__8813 = (0);
seq__6620_8789 = G__8810;
chunk__6621_8790 = G__8811;
count__6622_8791 = G__8812;
i__6623_8792 = G__8813;
continue;
} else {
var assertion_8816 = cljs.core.first(seq__6620_8808__$1);
if(cljs.core.truth_(assertion_8816)){
var cond_type_8817 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8816));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8817,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8817)))], null));
}
} else {
}


var G__8819 = cljs.core.next(seq__6620_8808__$1);
var G__8820 = null;
var G__8821 = (0);
var G__8822 = (0);
seq__6620_8789 = G__8819;
chunk__6621_8790 = G__8820;
count__6622_8791 = G__8821;
i__6623_8792 = G__8822;
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

var seq__6637 = cljs.core.seq(rescue);
var chunk__6638 = null;
var count__6639 = (0);
var i__6640 = (0);
while(true){
if((i__6640 < count__6639)){
var stmt = chunk__6638.cljs$core$IIndexed$_nth$arity$2(null,i__6640);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8823 = seq__6637;
var G__8824 = chunk__6638;
var G__8825 = count__6639;
var G__8826 = (i__6640 + (1));
seq__6637 = G__8823;
chunk__6638 = G__8824;
count__6639 = G__8825;
i__6640 = G__8826;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6637);
if(temp__5823__auto__){
var seq__6637__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6637__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6637__$1);
var G__8827 = cljs.core.chunk_rest(seq__6637__$1);
var G__8828 = c__5673__auto__;
var G__8829 = cljs.core.count(c__5673__auto__);
var G__8830 = (0);
seq__6637 = G__8827;
chunk__6638 = G__8828;
count__6639 = G__8829;
i__6640 = G__8830;
continue;
} else {
var stmt = cljs.core.first(seq__6637__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8831 = cljs.core.next(seq__6637__$1);
var G__8832 = null;
var G__8833 = (0);
var G__8834 = (0);
seq__6637 = G__8831;
chunk__6638 = G__8832;
count__6639 = G__8833;
i__6640 = G__8834;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6644){
var map__6645 = p__6644;
var map__6645__$1 = cljs.core.__destructure_map(map__6645);
var class_def = map__6645__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var seq__6646_8835 = cljs.core.seq(body);
var chunk__6647_8836 = null;
var count__6648_8837 = (0);
var i__6649_8838 = (0);
while(true){
if((i__6649_8838 < count__6648_8837)){
var section_8839 = chunk__6647_8836.cljs$core$IIndexed$_nth$arity$2(null,i__6649_8838);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8839),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6687_8840 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8839));
var chunk__6688_8841 = null;
var count__6689_8842 = (0);
var i__6690_8843 = (0);
while(true){
if((i__6690_8843 < count__6689_8842)){
var member_8844 = chunk__6688_8841.cljs$core$IIndexed$_nth$arity$2(null,i__6690_8843);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8844),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8844),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8844));
} else {
}


var G__8845 = seq__6687_8840;
var G__8846 = chunk__6688_8841;
var G__8847 = count__6689_8842;
var G__8848 = (i__6690_8843 + (1));
seq__6687_8840 = G__8845;
chunk__6688_8841 = G__8846;
count__6689_8842 = G__8847;
i__6690_8843 = G__8848;
continue;
} else {
var temp__5823__auto___8849 = cljs.core.seq(seq__6687_8840);
if(temp__5823__auto___8849){
var seq__6687_8850__$1 = temp__5823__auto___8849;
if(cljs.core.chunked_seq_QMARK_(seq__6687_8850__$1)){
var c__5673__auto___8851 = cljs.core.chunk_first(seq__6687_8850__$1);
var G__8852 = cljs.core.chunk_rest(seq__6687_8850__$1);
var G__8853 = c__5673__auto___8851;
var G__8854 = cljs.core.count(c__5673__auto___8851);
var G__8855 = (0);
seq__6687_8840 = G__8852;
chunk__6688_8841 = G__8853;
count__6689_8842 = G__8854;
i__6690_8843 = G__8855;
continue;
} else {
var member_8856 = cljs.core.first(seq__6687_8850__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8856),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8856),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8856));
} else {
}


var G__8857 = cljs.core.next(seq__6687_8850__$1);
var G__8858 = null;
var G__8859 = (0);
var G__8860 = (0);
seq__6687_8840 = G__8857;
chunk__6688_8841 = G__8858;
count__6689_8842 = G__8859;
i__6690_8843 = G__8860;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__8869 = seq__6646_8835;
var G__8870 = chunk__6647_8836;
var G__8871 = count__6648_8837;
var G__8872 = (i__6649_8838 + (1));
seq__6646_8835 = G__8869;
chunk__6647_8836 = G__8870;
count__6648_8837 = G__8871;
i__6649_8838 = G__8872;
continue;
} else {
var temp__5823__auto___8873 = cljs.core.seq(seq__6646_8835);
if(temp__5823__auto___8873){
var seq__6646_8878__$1 = temp__5823__auto___8873;
if(cljs.core.chunked_seq_QMARK_(seq__6646_8878__$1)){
var c__5673__auto___8879 = cljs.core.chunk_first(seq__6646_8878__$1);
var G__8880 = cljs.core.chunk_rest(seq__6646_8878__$1);
var G__8881 = c__5673__auto___8879;
var G__8882 = cljs.core.count(c__5673__auto___8879);
var G__8883 = (0);
seq__6646_8835 = G__8880;
chunk__6647_8836 = G__8881;
count__6648_8837 = G__8882;
i__6649_8838 = G__8883;
continue;
} else {
var section_8888 = cljs.core.first(seq__6646_8878__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8888),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6701_8889 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8888));
var chunk__6702_8890 = null;
var count__6703_8891 = (0);
var i__6704_8892 = (0);
while(true){
if((i__6704_8892 < count__6703_8891)){
var member_8893 = chunk__6702_8890.cljs$core$IIndexed$_nth$arity$2(null,i__6704_8892);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8893),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8893),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8893));
} else {
}


var G__8894 = seq__6701_8889;
var G__8895 = chunk__6702_8890;
var G__8896 = count__6703_8891;
var G__8897 = (i__6704_8892 + (1));
seq__6701_8889 = G__8894;
chunk__6702_8890 = G__8895;
count__6703_8891 = G__8896;
i__6704_8892 = G__8897;
continue;
} else {
var temp__5823__auto___8898__$1 = cljs.core.seq(seq__6701_8889);
if(temp__5823__auto___8898__$1){
var seq__6701_8899__$1 = temp__5823__auto___8898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6701_8899__$1)){
var c__5673__auto___8900 = cljs.core.chunk_first(seq__6701_8899__$1);
var G__8902 = cljs.core.chunk_rest(seq__6701_8899__$1);
var G__8903 = c__5673__auto___8900;
var G__8904 = cljs.core.count(c__5673__auto___8900);
var G__8905 = (0);
seq__6701_8889 = G__8902;
chunk__6702_8890 = G__8903;
count__6703_8891 = G__8904;
i__6704_8892 = G__8905;
continue;
} else {
var member_8907 = cljs.core.first(seq__6701_8899__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8907),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8907),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8907));
} else {
}


var G__8908 = cljs.core.next(seq__6701_8899__$1);
var G__8909 = null;
var G__8910 = (0);
var G__8911 = (0);
seq__6701_8889 = G__8908;
chunk__6702_8890 = G__8909;
count__6703_8891 = G__8910;
i__6704_8892 = G__8911;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__8912 = cljs.core.next(seq__6646_8878__$1);
var G__8913 = null;
var G__8914 = (0);
var G__8915 = (0);
seq__6646_8835 = G__8912;
chunk__6647_8836 = G__8913;
count__6648_8837 = G__8914;
i__6649_8838 = G__8915;
continue;
}
} else {
}
}
break;
}

var seq__6707 = cljs.core.seq(body);
var chunk__6708 = null;
var count__6709 = (0);
var i__6710 = (0);
while(true){
if((i__6710 < count__6709)){
var section = chunk__6708.cljs$core$IIndexed$_nth$arity$2(null,i__6710);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6749_8916 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6750_8917 = null;
var count__6751_8918 = (0);
var i__6752_8919 = (0);
while(true){
if((i__6752_8919 < count__6751_8918)){
var member_8920 = chunk__6750_8917.cljs$core$IIndexed$_nth$arity$2(null,i__6752_8919);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8920),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8920),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8920),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8920)], null));
} else {
}


var G__8921 = seq__6749_8916;
var G__8922 = chunk__6750_8917;
var G__8923 = count__6751_8918;
var G__8924 = (i__6752_8919 + (1));
seq__6749_8916 = G__8921;
chunk__6750_8917 = G__8922;
count__6751_8918 = G__8923;
i__6752_8919 = G__8924;
continue;
} else {
var temp__5823__auto___8925 = cljs.core.seq(seq__6749_8916);
if(temp__5823__auto___8925){
var seq__6749_8926__$1 = temp__5823__auto___8925;
if(cljs.core.chunked_seq_QMARK_(seq__6749_8926__$1)){
var c__5673__auto___8927 = cljs.core.chunk_first(seq__6749_8926__$1);
var G__8928 = cljs.core.chunk_rest(seq__6749_8926__$1);
var G__8929 = c__5673__auto___8927;
var G__8930 = cljs.core.count(c__5673__auto___8927);
var G__8931 = (0);
seq__6749_8916 = G__8928;
chunk__6750_8917 = G__8929;
count__6751_8918 = G__8930;
i__6752_8919 = G__8931;
continue;
} else {
var member_8932 = cljs.core.first(seq__6749_8926__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8932),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8932),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8932),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8932)], null));
} else {
}


var G__8937 = cljs.core.next(seq__6749_8926__$1);
var G__8938 = null;
var G__8939 = (0);
var G__8940 = (0);
seq__6749_8916 = G__8937;
chunk__6750_8917 = G__8938;
count__6751_8918 = G__8939;
i__6752_8919 = G__8940;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6760_8946 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6761_8947 = null;
var count__6762_8948 = (0);
var i__6763_8949 = (0);
while(true){
if((i__6763_8949 < count__6762_8948)){
var ctor_8952 = chunk__6761_8947.cljs$core$IIndexed$_nth$arity$2(null,i__6763_8949);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8952),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8963 = seq__6760_8946;
var G__8964 = chunk__6761_8947;
var G__8965 = count__6762_8948;
var G__8966 = (i__6763_8949 + (1));
seq__6760_8946 = G__8963;
chunk__6761_8947 = G__8964;
count__6762_8948 = G__8965;
i__6763_8949 = G__8966;
continue;
} else {
var temp__5823__auto___8968 = cljs.core.seq(seq__6760_8946);
if(temp__5823__auto___8968){
var seq__6760_8969__$1 = temp__5823__auto___8968;
if(cljs.core.chunked_seq_QMARK_(seq__6760_8969__$1)){
var c__5673__auto___8970 = cljs.core.chunk_first(seq__6760_8969__$1);
var G__8976 = cljs.core.chunk_rest(seq__6760_8969__$1);
var G__8977 = c__5673__auto___8970;
var G__8978 = cljs.core.count(c__5673__auto___8970);
var G__8979 = (0);
seq__6760_8946 = G__8976;
chunk__6761_8947 = G__8977;
count__6762_8948 = G__8978;
i__6763_8949 = G__8979;
continue;
} else {
var ctor_8980 = cljs.core.first(seq__6760_8969__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8980),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8980),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8981 = cljs.core.next(seq__6760_8969__$1);
var G__8982 = null;
var G__8983 = (0);
var G__8984 = (0);
seq__6760_8946 = G__8981;
chunk__6761_8947 = G__8982;
count__6762_8948 = G__8983;
i__6763_8949 = G__8984;
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


var G__8989 = seq__6707;
var G__8990 = chunk__6708;
var G__8991 = count__6709;
var G__8992 = (i__6710 + (1));
seq__6707 = G__8989;
chunk__6708 = G__8990;
count__6709 = G__8991;
i__6710 = G__8992;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6707);
if(temp__5823__auto__){
var seq__6707__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6707__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6707__$1);
var G__8998 = cljs.core.chunk_rest(seq__6707__$1);
var G__8999 = c__5673__auto__;
var G__9000 = cljs.core.count(c__5673__auto__);
var G__9001 = (0);
seq__6707 = G__8998;
chunk__6708 = G__8999;
count__6709 = G__9000;
i__6710 = G__9001;
continue;
} else {
var section = cljs.core.first(seq__6707__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6767_9006 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6768_9011 = null;
var count__6769_9012 = (0);
var i__6770_9013 = (0);
while(true){
if((i__6770_9013 < count__6769_9012)){
var member_9019 = chunk__6768_9011.cljs$core$IIndexed$_nth$arity$2(null,i__6770_9013);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9019),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9019),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9019),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9019)], null));
} else {
}


var G__9025 = seq__6767_9006;
var G__9026 = chunk__6768_9011;
var G__9027 = count__6769_9012;
var G__9028 = (i__6770_9013 + (1));
seq__6767_9006 = G__9025;
chunk__6768_9011 = G__9026;
count__6769_9012 = G__9027;
i__6770_9013 = G__9028;
continue;
} else {
var temp__5823__auto___9029__$1 = cljs.core.seq(seq__6767_9006);
if(temp__5823__auto___9029__$1){
var seq__6767_9030__$1 = temp__5823__auto___9029__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6767_9030__$1)){
var c__5673__auto___9031 = cljs.core.chunk_first(seq__6767_9030__$1);
var G__9032 = cljs.core.chunk_rest(seq__6767_9030__$1);
var G__9033 = c__5673__auto___9031;
var G__9034 = cljs.core.count(c__5673__auto___9031);
var G__9035 = (0);
seq__6767_9006 = G__9032;
chunk__6768_9011 = G__9033;
count__6769_9012 = G__9034;
i__6770_9013 = G__9035;
continue;
} else {
var member_9036 = cljs.core.first(seq__6767_9030__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9036),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9036),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9036)], null));
} else {
}


var G__9037 = cljs.core.next(seq__6767_9030__$1);
var G__9038 = null;
var G__9039 = (0);
var G__9040 = (0);
seq__6767_9006 = G__9037;
chunk__6768_9011 = G__9038;
count__6769_9012 = G__9039;
i__6770_9013 = G__9040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6776_9041 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6777_9042 = null;
var count__6778_9043 = (0);
var i__6779_9044 = (0);
while(true){
if((i__6779_9044 < count__6778_9043)){
var ctor_9045 = chunk__6777_9042.cljs$core$IIndexed$_nth$arity$2(null,i__6779_9044);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9045),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9046 = seq__6776_9041;
var G__9047 = chunk__6777_9042;
var G__9048 = count__6778_9043;
var G__9049 = (i__6779_9044 + (1));
seq__6776_9041 = G__9046;
chunk__6777_9042 = G__9047;
count__6778_9043 = G__9048;
i__6779_9044 = G__9049;
continue;
} else {
var temp__5823__auto___9050__$1 = cljs.core.seq(seq__6776_9041);
if(temp__5823__auto___9050__$1){
var seq__6776_9051__$1 = temp__5823__auto___9050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6776_9051__$1)){
var c__5673__auto___9052 = cljs.core.chunk_first(seq__6776_9051__$1);
var G__9053 = cljs.core.chunk_rest(seq__6776_9051__$1);
var G__9054 = c__5673__auto___9052;
var G__9055 = cljs.core.count(c__5673__auto___9052);
var G__9056 = (0);
seq__6776_9041 = G__9053;
chunk__6777_9042 = G__9054;
count__6778_9043 = G__9055;
i__6779_9044 = G__9056;
continue;
} else {
var ctor_9057 = cljs.core.first(seq__6776_9051__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9057),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9057),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9061 = cljs.core.next(seq__6776_9051__$1);
var G__9062 = null;
var G__9063 = (0);
var G__9064 = (0);
seq__6776_9041 = G__9061;
chunk__6777_9042 = G__9062;
count__6778_9043 = G__9063;
i__6779_9044 = G__9064;
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


var G__9065 = cljs.core.next(seq__6707__$1);
var G__9066 = null;
var G__9067 = (0);
var G__9068 = (0);
seq__6707 = G__9065;
chunk__6708 = G__9066;
count__6709 = G__9067;
i__6710 = G__9068;
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
var seq__6785 = cljs.core.seq(parents);
var chunk__6786 = null;
var count__6787 = (0);
var i__6788 = (0);
while(true){
if((i__6788 < count__6787)){
var map__6799 = chunk__6786.cljs$core$IIndexed$_nth$arity$2(null,i__6788);
var map__6799__$1 = cljs.core.__destructure_map(map__6799);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6799__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9070 = seq__6785;
var G__9071 = chunk__6786;
var G__9072 = count__6787;
var G__9073 = (i__6788 + (1));
seq__6785 = G__9070;
chunk__6786 = G__9071;
count__6787 = G__9072;
i__6788 = G__9073;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6785);
if(temp__5823__auto__){
var seq__6785__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6785__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6785__$1);
var G__9074 = cljs.core.chunk_rest(seq__6785__$1);
var G__9075 = c__5673__auto__;
var G__9076 = cljs.core.count(c__5673__auto__);
var G__9077 = (0);
seq__6785 = G__9074;
chunk__6786 = G__9075;
count__6787 = G__9076;
i__6788 = G__9077;
continue;
} else {
var map__6801 = cljs.core.first(seq__6785__$1);
var map__6801__$1 = cljs.core.__destructure_map(map__6801);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6801__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9083 = cljs.core.next(seq__6785__$1);
var G__9084 = null;
var G__9085 = (0);
var G__9086 = (0);
seq__6785 = G__9083;
chunk__6786 = G__9084;
count__6787 = G__9085;
i__6788 = G__9086;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6811){
var map__6813 = p__6811;
var map__6813__$1 = cljs.core.__destructure_map(map__6813);
var class_def = map__6813__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6813__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6813__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6813__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
if(cljs.core.truth_(parents)){
nex.typechecker.check_inheritance(env,name,parents);
} else {
}

var seq__6814_9101 = cljs.core.seq(invariant);
var chunk__6815_9102 = null;
var count__6816_9103 = (0);
var i__6817_9104 = (0);
while(true){
if((i__6817_9104 < count__6816_9103)){
var assertion_9109 = chunk__6815_9102.cljs$core$IIndexed$_nth$arity$2(null,i__6817_9104);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9109;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9109);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9110 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9109));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9110,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9110,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9110)))], null));
}
} else {
}


var G__9111 = seq__6814_9101;
var G__9112 = chunk__6815_9102;
var G__9113 = count__6816_9103;
var G__9114 = (i__6817_9104 + (1));
seq__6814_9101 = G__9111;
chunk__6815_9102 = G__9112;
count__6816_9103 = G__9113;
i__6817_9104 = G__9114;
continue;
} else {
var temp__5823__auto___9115 = cljs.core.seq(seq__6814_9101);
if(temp__5823__auto___9115){
var seq__6814_9116__$1 = temp__5823__auto___9115;
if(cljs.core.chunked_seq_QMARK_(seq__6814_9116__$1)){
var c__5673__auto___9117 = cljs.core.chunk_first(seq__6814_9116__$1);
var G__9118 = cljs.core.chunk_rest(seq__6814_9116__$1);
var G__9119 = c__5673__auto___9117;
var G__9120 = cljs.core.count(c__5673__auto___9117);
var G__9121 = (0);
seq__6814_9101 = G__9118;
chunk__6815_9102 = G__9119;
count__6816_9103 = G__9120;
i__6817_9104 = G__9121;
continue;
} else {
var assertion_9122 = cljs.core.first(seq__6814_9116__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9122;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9122);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9126 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9122));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9126,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9126,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9126)))], null));
}
} else {
}


var G__9127 = cljs.core.next(seq__6814_9116__$1);
var G__9128 = null;
var G__9129 = (0);
var G__9130 = (0);
seq__6814_9101 = G__9127;
chunk__6815_9102 = G__9128;
count__6816_9103 = G__9129;
i__6817_9104 = G__9130;
continue;
}
} else {
}
}
break;
}

var seq__6825_9131 = cljs.core.seq(body);
var chunk__6826_9132 = null;
var count__6827_9133 = (0);
var i__6828_9134 = (0);
while(true){
if((i__6828_9134 < count__6827_9133)){
var section_9135 = chunk__6826_9132.cljs$core$IIndexed$_nth$arity$2(null,i__6828_9134);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9135),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6874_9137 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9135));
var chunk__6875_9138 = null;
var count__6876_9139 = (0);
var i__6877_9140 = (0);
while(true){
if((i__6877_9140 < count__6876_9139)){
var member_9141 = chunk__6875_9138.cljs$core$IIndexed$_nth$arity$2(null,i__6877_9140);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9141),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9141);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9141),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9141));
} else {
}
}


var G__9142 = seq__6874_9137;
var G__9143 = chunk__6875_9138;
var G__9144 = count__6876_9139;
var G__9145 = (i__6877_9140 + (1));
seq__6874_9137 = G__9142;
chunk__6875_9138 = G__9143;
count__6876_9139 = G__9144;
i__6877_9140 = G__9145;
continue;
} else {
var temp__5823__auto___9146 = cljs.core.seq(seq__6874_9137);
if(temp__5823__auto___9146){
var seq__6874_9147__$1 = temp__5823__auto___9146;
if(cljs.core.chunked_seq_QMARK_(seq__6874_9147__$1)){
var c__5673__auto___9148 = cljs.core.chunk_first(seq__6874_9147__$1);
var G__9149 = cljs.core.chunk_rest(seq__6874_9147__$1);
var G__9150 = c__5673__auto___9148;
var G__9151 = cljs.core.count(c__5673__auto___9148);
var G__9152 = (0);
seq__6874_9137 = G__9149;
chunk__6875_9138 = G__9150;
count__6876_9139 = G__9151;
i__6877_9140 = G__9152;
continue;
} else {
var member_9153 = cljs.core.first(seq__6874_9147__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9153),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9153);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9153),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9153));
} else {
}
}


var G__9154 = cljs.core.next(seq__6874_9147__$1);
var G__9155 = null;
var G__9156 = (0);
var G__9157 = (0);
seq__6874_9137 = G__9154;
chunk__6875_9138 = G__9155;
count__6876_9139 = G__9156;
i__6877_9140 = G__9157;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9135),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6881_9158 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9135));
var chunk__6882_9159 = null;
var count__6883_9160 = (0);
var i__6884_9161 = (0);
while(true){
if((i__6884_9161 < count__6883_9160)){
var ctor_9162 = chunk__6882_9159.cljs$core$IIndexed$_nth$arity$2(null,i__6884_9161);
nex.typechecker.check_constructor(env,name,ctor_9162);


var G__9163 = seq__6881_9158;
var G__9164 = chunk__6882_9159;
var G__9165 = count__6883_9160;
var G__9166 = (i__6884_9161 + (1));
seq__6881_9158 = G__9163;
chunk__6882_9159 = G__9164;
count__6883_9160 = G__9165;
i__6884_9161 = G__9166;
continue;
} else {
var temp__5823__auto___9167 = cljs.core.seq(seq__6881_9158);
if(temp__5823__auto___9167){
var seq__6881_9168__$1 = temp__5823__auto___9167;
if(cljs.core.chunked_seq_QMARK_(seq__6881_9168__$1)){
var c__5673__auto___9169 = cljs.core.chunk_first(seq__6881_9168__$1);
var G__9170 = cljs.core.chunk_rest(seq__6881_9168__$1);
var G__9171 = c__5673__auto___9169;
var G__9172 = cljs.core.count(c__5673__auto___9169);
var G__9173 = (0);
seq__6881_9158 = G__9170;
chunk__6882_9159 = G__9171;
count__6883_9160 = G__9172;
i__6884_9161 = G__9173;
continue;
} else {
var ctor_9174 = cljs.core.first(seq__6881_9168__$1);
nex.typechecker.check_constructor(env,name,ctor_9174);


var G__9175 = cljs.core.next(seq__6881_9168__$1);
var G__9176 = null;
var G__9177 = (0);
var G__9178 = (0);
seq__6881_9158 = G__9175;
chunk__6882_9159 = G__9176;
count__6883_9160 = G__9177;
i__6884_9161 = G__9178;
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


var G__9179 = seq__6825_9131;
var G__9180 = chunk__6826_9132;
var G__9181 = count__6827_9133;
var G__9182 = (i__6828_9134 + (1));
seq__6825_9131 = G__9179;
chunk__6826_9132 = G__9180;
count__6827_9133 = G__9181;
i__6828_9134 = G__9182;
continue;
} else {
var temp__5823__auto___9183 = cljs.core.seq(seq__6825_9131);
if(temp__5823__auto___9183){
var seq__6825_9184__$1 = temp__5823__auto___9183;
if(cljs.core.chunked_seq_QMARK_(seq__6825_9184__$1)){
var c__5673__auto___9185 = cljs.core.chunk_first(seq__6825_9184__$1);
var G__9186 = cljs.core.chunk_rest(seq__6825_9184__$1);
var G__9187 = c__5673__auto___9185;
var G__9188 = cljs.core.count(c__5673__auto___9185);
var G__9189 = (0);
seq__6825_9131 = G__9186;
chunk__6826_9132 = G__9187;
count__6827_9133 = G__9188;
i__6828_9134 = G__9189;
continue;
} else {
var section_9190 = cljs.core.first(seq__6825_9184__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9190),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6893_9191 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9190));
var chunk__6894_9192 = null;
var count__6895_9193 = (0);
var i__6896_9194 = (0);
while(true){
if((i__6896_9194 < count__6895_9193)){
var member_9195 = chunk__6894_9192.cljs$core$IIndexed$_nth$arity$2(null,i__6896_9194);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9195),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9195);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9195),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9195));
} else {
}
}


var G__9196 = seq__6893_9191;
var G__9197 = chunk__6894_9192;
var G__9198 = count__6895_9193;
var G__9199 = (i__6896_9194 + (1));
seq__6893_9191 = G__9196;
chunk__6894_9192 = G__9197;
count__6895_9193 = G__9198;
i__6896_9194 = G__9199;
continue;
} else {
var temp__5823__auto___9200__$1 = cljs.core.seq(seq__6893_9191);
if(temp__5823__auto___9200__$1){
var seq__6893_9201__$1 = temp__5823__auto___9200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6893_9201__$1)){
var c__5673__auto___9202 = cljs.core.chunk_first(seq__6893_9201__$1);
var G__9203 = cljs.core.chunk_rest(seq__6893_9201__$1);
var G__9204 = c__5673__auto___9202;
var G__9205 = cljs.core.count(c__5673__auto___9202);
var G__9206 = (0);
seq__6893_9191 = G__9203;
chunk__6894_9192 = G__9204;
count__6895_9193 = G__9205;
i__6896_9194 = G__9206;
continue;
} else {
var member_9207 = cljs.core.first(seq__6893_9201__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9207),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9207);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9207),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9207));
} else {
}
}


var G__9208 = cljs.core.next(seq__6893_9201__$1);
var G__9209 = null;
var G__9210 = (0);
var G__9211 = (0);
seq__6893_9191 = G__9208;
chunk__6894_9192 = G__9209;
count__6895_9193 = G__9210;
i__6896_9194 = G__9211;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9190),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6901_9212 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9190));
var chunk__6902_9213 = null;
var count__6903_9214 = (0);
var i__6904_9215 = (0);
while(true){
if((i__6904_9215 < count__6903_9214)){
var ctor_9216 = chunk__6902_9213.cljs$core$IIndexed$_nth$arity$2(null,i__6904_9215);
nex.typechecker.check_constructor(env,name,ctor_9216);


var G__9217 = seq__6901_9212;
var G__9218 = chunk__6902_9213;
var G__9219 = count__6903_9214;
var G__9220 = (i__6904_9215 + (1));
seq__6901_9212 = G__9217;
chunk__6902_9213 = G__9218;
count__6903_9214 = G__9219;
i__6904_9215 = G__9220;
continue;
} else {
var temp__5823__auto___9221__$1 = cljs.core.seq(seq__6901_9212);
if(temp__5823__auto___9221__$1){
var seq__6901_9222__$1 = temp__5823__auto___9221__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6901_9222__$1)){
var c__5673__auto___9223 = cljs.core.chunk_first(seq__6901_9222__$1);
var G__9224 = cljs.core.chunk_rest(seq__6901_9222__$1);
var G__9225 = c__5673__auto___9223;
var G__9226 = cljs.core.count(c__5673__auto___9223);
var G__9227 = (0);
seq__6901_9212 = G__9224;
chunk__6902_9213 = G__9225;
count__6903_9214 = G__9226;
i__6904_9215 = G__9227;
continue;
} else {
var ctor_9228 = cljs.core.first(seq__6901_9222__$1);
nex.typechecker.check_constructor(env,name,ctor_9228);


var G__9229 = cljs.core.next(seq__6901_9222__$1);
var G__9230 = null;
var G__9231 = (0);
var G__9232 = (0);
seq__6901_9212 = G__9229;
chunk__6902_9213 = G__9230;
count__6903_9214 = G__9231;
i__6904_9215 = G__9232;
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


var G__9233 = cljs.core.next(seq__6825_9184__$1);
var G__9234 = null;
var G__9235 = (0);
var G__9236 = (0);
seq__6825_9131 = G__9233;
chunk__6826_9132 = G__9234;
count__6827_9133 = G__9235;
i__6828_9134 = G__9236;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6806_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6806_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6805_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6805_SHARP_));
}),body)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6807_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6807_SHARP_));
}),body)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6909){
var map__6913 = p__6909;
var map__6913__$1 = cljs.core.__destructure_map(map__6913);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6913__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__6917 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6917__$1 = (((G__6917 instanceof cljs.core.Keyword))?G__6917.fqn:null);
switch (G__6917__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6809_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6809_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6810_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6810_SHARP_));
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

var seq__6931 = cljs.core.seq(constructors);
var chunk__6932 = null;
var count__6933 = (0);
var i__6934 = (0);
while(true){
if((i__6934 < count__6933)){
var map__6950 = chunk__6932.cljs$core$IIndexed$_nth$arity$2(null,i__6934);
var map__6950__$1 = cljs.core.__destructure_map(map__6950);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6950__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9246 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_9247 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9246)));
if(cljs.core.seq(missing_9247)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9247))))], null));
} else {
}


var G__9248 = seq__6931;
var G__9249 = chunk__6932;
var G__9250 = count__6933;
var G__9251 = (i__6934 + (1));
seq__6931 = G__9248;
chunk__6932 = G__9249;
count__6933 = G__9250;
i__6934 = G__9251;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6931);
if(temp__5823__auto__){
var seq__6931__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6931__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6931__$1);
var G__9252 = cljs.core.chunk_rest(seq__6931__$1);
var G__9253 = c__5673__auto__;
var G__9254 = cljs.core.count(c__5673__auto__);
var G__9255 = (0);
seq__6931 = G__9252;
chunk__6932 = G__9253;
count__6933 = G__9254;
i__6934 = G__9255;
continue;
} else {
var map__6951 = cljs.core.first(seq__6931__$1);
var map__6951__$1 = cljs.core.__destructure_map(map__6951);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6951__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6951__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9256 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_9257 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9256)));
if(cljs.core.seq(missing_9257)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9257))))], null));
} else {
}


var G__9260 = cljs.core.next(seq__6931__$1);
var G__9261 = null;
var G__9262 = (0);
var G__9263 = (0);
seq__6931 = G__9260;
chunk__6932 = G__9261;
count__6933 = G__9262;
i__6934 = G__9263;
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

var seq__6969_9264 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6970_9265 = null;
var count__6971_9266 = (0);
var i__6972_9267 = (0);
while(true){
if((i__6972_9267 < count__6971_9266)){
var scalar_9268 = chunk__6970_9265.cljs$core$IIndexed$_nth$arity$2(null,i__6972_9267);
nex.typechecker.env_add_class(env,scalar_9268,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9268,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9268,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9268,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9281 = seq__6969_9264;
var G__9282 = chunk__6970_9265;
var G__9283 = count__6971_9266;
var G__9284 = (i__6972_9267 + (1));
seq__6969_9264 = G__9281;
chunk__6970_9265 = G__9282;
count__6971_9266 = G__9283;
i__6972_9267 = G__9284;
continue;
} else {
var temp__5823__auto___9285 = cljs.core.seq(seq__6969_9264);
if(temp__5823__auto___9285){
var seq__6969_9286__$1 = temp__5823__auto___9285;
if(cljs.core.chunked_seq_QMARK_(seq__6969_9286__$1)){
var c__5673__auto___9287 = cljs.core.chunk_first(seq__6969_9286__$1);
var G__9288 = cljs.core.chunk_rest(seq__6969_9286__$1);
var G__9289 = c__5673__auto___9287;
var G__9290 = cljs.core.count(c__5673__auto___9287);
var G__9291 = (0);
seq__6969_9264 = G__9288;
chunk__6970_9265 = G__9289;
count__6971_9266 = G__9290;
i__6972_9267 = G__9291;
continue;
} else {
var scalar_9292 = cljs.core.first(seq__6969_9286__$1);
nex.typechecker.env_add_class(env,scalar_9292,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9292,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9292,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9292,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9301 = cljs.core.next(seq__6969_9286__$1);
var G__9302 = null;
var G__9303 = (0);
var G__9304 = (0);
seq__6969_9264 = G__9301;
chunk__6970_9265 = G__9302;
count__6971_9266 = G__9303;
i__6972_9267 = G__9304;
continue;
}
} else {
}
}
break;
}

var seq__6985_9305 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__6986_9306 = null;
var count__6987_9307 = (0);
var i__6988_9308 = (0);
while(true){
if((i__6988_9308 < count__6987_9307)){
var vec__7003_9325 = chunk__6986_9306.cljs$core$IIndexed$_nth$arity$2(null,i__6988_9308);
var method_name_9326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_9325,(0),null);
var sig_9327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7003_9325,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9326,sig_9327);


var G__9328 = seq__6985_9305;
var G__9329 = chunk__6986_9306;
var G__9330 = count__6987_9307;
var G__9331 = (i__6988_9308 + (1));
seq__6985_9305 = G__9328;
chunk__6986_9306 = G__9329;
count__6987_9307 = G__9330;
i__6988_9308 = G__9331;
continue;
} else {
var temp__5823__auto___9332 = cljs.core.seq(seq__6985_9305);
if(temp__5823__auto___9332){
var seq__6985_9336__$1 = temp__5823__auto___9332;
if(cljs.core.chunked_seq_QMARK_(seq__6985_9336__$1)){
var c__5673__auto___9337 = cljs.core.chunk_first(seq__6985_9336__$1);
var G__9338 = cljs.core.chunk_rest(seq__6985_9336__$1);
var G__9339 = c__5673__auto___9337;
var G__9340 = cljs.core.count(c__5673__auto___9337);
var G__9341 = (0);
seq__6985_9305 = G__9338;
chunk__6986_9306 = G__9339;
count__6987_9307 = G__9340;
i__6988_9308 = G__9341;
continue;
} else {
var vec__7006_9342 = cljs.core.first(seq__6985_9336__$1);
var method_name_9343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_9342,(0),null);
var sig_9344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006_9342,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9343,sig_9344);


var G__9349 = cljs.core.next(seq__6985_9336__$1);
var G__9350 = null;
var G__9351 = (0);
var G__9352 = (0);
seq__6985_9305 = G__9349;
chunk__6986_9306 = G__9350;
count__6987_9307 = G__9351;
i__6988_9308 = G__9352;
continue;
}
} else {
}
}
break;
}

var seq__7009_9353 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__7010_9354 = null;
var count__7011_9355 = (0);
var i__7012_9356 = (0);
while(true){
if((i__7012_9356 < count__7011_9355)){
var vec__7023_9366 = chunk__7010_9354.cljs$core$IIndexed$_nth$arity$2(null,i__7012_9356);
var method_name_9367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7023_9366,(0),null);
var sig_9368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7023_9366,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9367,sig_9368);


var G__9369 = seq__7009_9353;
var G__9370 = chunk__7010_9354;
var G__9371 = count__7011_9355;
var G__9372 = (i__7012_9356 + (1));
seq__7009_9353 = G__9369;
chunk__7010_9354 = G__9370;
count__7011_9355 = G__9371;
i__7012_9356 = G__9372;
continue;
} else {
var temp__5823__auto___9373 = cljs.core.seq(seq__7009_9353);
if(temp__5823__auto___9373){
var seq__7009_9374__$1 = temp__5823__auto___9373;
if(cljs.core.chunked_seq_QMARK_(seq__7009_9374__$1)){
var c__5673__auto___9375 = cljs.core.chunk_first(seq__7009_9374__$1);
var G__9376 = cljs.core.chunk_rest(seq__7009_9374__$1);
var G__9377 = c__5673__auto___9375;
var G__9378 = cljs.core.count(c__5673__auto___9375);
var G__9379 = (0);
seq__7009_9353 = G__9376;
chunk__7010_9354 = G__9377;
count__7011_9355 = G__9378;
i__7012_9356 = G__9379;
continue;
} else {
var vec__7026_9380 = cljs.core.first(seq__7009_9374__$1);
var method_name_9381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7026_9380,(0),null);
var sig_9382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7026_9380,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9381,sig_9382);


var G__9383 = cljs.core.next(seq__7009_9374__$1);
var G__9384 = null;
var G__9385 = (0);
var G__9386 = (0);
seq__7009_9353 = G__9383;
chunk__7010_9354 = G__9384;
count__7011_9355 = G__9385;
i__7012_9356 = G__9386;
continue;
}
} else {
}
}
break;
}

var seq__7029_9387 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__7030_9388 = null;
var count__7031_9389 = (0);
var i__7032_9390 = (0);
while(true){
if((i__7032_9390 < count__7031_9389)){
var vec__7039_9391 = chunk__7030_9388.cljs$core$IIndexed$_nth$arity$2(null,i__7032_9390);
var method_name_9392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_9391,(0),null);
var sig_9393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7039_9391,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9392,sig_9393);


var G__9398 = seq__7029_9387;
var G__9399 = chunk__7030_9388;
var G__9400 = count__7031_9389;
var G__9401 = (i__7032_9390 + (1));
seq__7029_9387 = G__9398;
chunk__7030_9388 = G__9399;
count__7031_9389 = G__9400;
i__7032_9390 = G__9401;
continue;
} else {
var temp__5823__auto___9402 = cljs.core.seq(seq__7029_9387);
if(temp__5823__auto___9402){
var seq__7029_9403__$1 = temp__5823__auto___9402;
if(cljs.core.chunked_seq_QMARK_(seq__7029_9403__$1)){
var c__5673__auto___9408 = cljs.core.chunk_first(seq__7029_9403__$1);
var G__9409 = cljs.core.chunk_rest(seq__7029_9403__$1);
var G__9410 = c__5673__auto___9408;
var G__9411 = cljs.core.count(c__5673__auto___9408);
var G__9412 = (0);
seq__7029_9387 = G__9409;
chunk__7030_9388 = G__9410;
count__7031_9389 = G__9411;
i__7032_9390 = G__9412;
continue;
} else {
var vec__7042_9413 = cljs.core.first(seq__7029_9403__$1);
var method_name_9414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7042_9413,(0),null);
var sig_9415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7042_9413,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9414,sig_9415);


var G__9420 = cljs.core.next(seq__7029_9403__$1);
var G__9421 = null;
var G__9422 = (0);
var G__9423 = (0);
seq__7029_9387 = G__9420;
chunk__7030_9388 = G__9421;
count__7031_9389 = G__9422;
i__7032_9390 = G__9423;
continue;
}
} else {
}
}
break;
}

var seq__7045_9424 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__7046_9425 = null;
var count__7047_9426 = (0);
var i__7048_9427 = (0);
while(true){
if((i__7048_9427 < count__7047_9426)){
var vec__7055_9428 = chunk__7046_9425.cljs$core$IIndexed$_nth$arity$2(null,i__7048_9427);
var method_name_9429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055_9428,(0),null);
var sig_9430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7055_9428,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9429,sig_9430);


var G__9431 = seq__7045_9424;
var G__9432 = chunk__7046_9425;
var G__9433 = count__7047_9426;
var G__9434 = (i__7048_9427 + (1));
seq__7045_9424 = G__9431;
chunk__7046_9425 = G__9432;
count__7047_9426 = G__9433;
i__7048_9427 = G__9434;
continue;
} else {
var temp__5823__auto___9435 = cljs.core.seq(seq__7045_9424);
if(temp__5823__auto___9435){
var seq__7045_9436__$1 = temp__5823__auto___9435;
if(cljs.core.chunked_seq_QMARK_(seq__7045_9436__$1)){
var c__5673__auto___9437 = cljs.core.chunk_first(seq__7045_9436__$1);
var G__9438 = cljs.core.chunk_rest(seq__7045_9436__$1);
var G__9439 = c__5673__auto___9437;
var G__9440 = cljs.core.count(c__5673__auto___9437);
var G__9441 = (0);
seq__7045_9424 = G__9438;
chunk__7046_9425 = G__9439;
count__7047_9426 = G__9440;
i__7048_9427 = G__9441;
continue;
} else {
var vec__7058_9442 = cljs.core.first(seq__7045_9436__$1);
var method_name_9443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7058_9442,(0),null);
var sig_9444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7058_9442,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9443,sig_9444);


var G__9449 = cljs.core.next(seq__7045_9436__$1);
var G__9450 = null;
var G__9451 = (0);
var G__9452 = (0);
seq__7045_9424 = G__9449;
chunk__7046_9425 = G__9450;
count__7047_9426 = G__9451;
i__7048_9427 = G__9452;
continue;
}
} else {
}
}
break;
}

var seq__7061_9454 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7062_9455 = null;
var count__7063_9456 = (0);
var i__7064_9457 = (0);
while(true){
if((i__7064_9457 < count__7063_9456)){
var vec__7071_9474 = chunk__7062_9455.cljs$core$IIndexed$_nth$arity$2(null,i__7064_9457);
var method_name_9475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7071_9474,(0),null);
var sig_9476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7071_9474,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9475,sig_9476);


var G__9477 = seq__7061_9454;
var G__9478 = chunk__7062_9455;
var G__9479 = count__7063_9456;
var G__9480 = (i__7064_9457 + (1));
seq__7061_9454 = G__9477;
chunk__7062_9455 = G__9478;
count__7063_9456 = G__9479;
i__7064_9457 = G__9480;
continue;
} else {
var temp__5823__auto___9481 = cljs.core.seq(seq__7061_9454);
if(temp__5823__auto___9481){
var seq__7061_9482__$1 = temp__5823__auto___9481;
if(cljs.core.chunked_seq_QMARK_(seq__7061_9482__$1)){
var c__5673__auto___9483 = cljs.core.chunk_first(seq__7061_9482__$1);
var G__9484 = cljs.core.chunk_rest(seq__7061_9482__$1);
var G__9485 = c__5673__auto___9483;
var G__9486 = cljs.core.count(c__5673__auto___9483);
var G__9487 = (0);
seq__7061_9454 = G__9484;
chunk__7062_9455 = G__9485;
count__7063_9456 = G__9486;
i__7064_9457 = G__9487;
continue;
} else {
var vec__7074_9488 = cljs.core.first(seq__7061_9482__$1);
var method_name_9489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7074_9488,(0),null);
var sig_9490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7074_9488,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9489,sig_9490);


var G__9491 = cljs.core.next(seq__7061_9482__$1);
var G__9492 = null;
var G__9493 = (0);
var G__9494 = (0);
seq__7061_9454 = G__9491;
chunk__7062_9455 = G__9492;
count__7063_9456 = G__9493;
i__7064_9457 = G__9494;
continue;
}
} else {
}
}
break;
}

var seq__7077_9495 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7078_9496 = null;
var count__7079_9497 = (0);
var i__7080_9498 = (0);
while(true){
if((i__7080_9498 < count__7079_9497)){
var vec__7087_9499 = chunk__7078_9496.cljs$core$IIndexed$_nth$arity$2(null,i__7080_9498);
var method_name_9500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7087_9499,(0),null);
var sig_9501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7087_9499,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9500,sig_9501);


var G__9502 = seq__7077_9495;
var G__9503 = chunk__7078_9496;
var G__9504 = count__7079_9497;
var G__9505 = (i__7080_9498 + (1));
seq__7077_9495 = G__9502;
chunk__7078_9496 = G__9503;
count__7079_9497 = G__9504;
i__7080_9498 = G__9505;
continue;
} else {
var temp__5823__auto___9506 = cljs.core.seq(seq__7077_9495);
if(temp__5823__auto___9506){
var seq__7077_9507__$1 = temp__5823__auto___9506;
if(cljs.core.chunked_seq_QMARK_(seq__7077_9507__$1)){
var c__5673__auto___9508 = cljs.core.chunk_first(seq__7077_9507__$1);
var G__9509 = cljs.core.chunk_rest(seq__7077_9507__$1);
var G__9510 = c__5673__auto___9508;
var G__9511 = cljs.core.count(c__5673__auto___9508);
var G__9512 = (0);
seq__7077_9495 = G__9509;
chunk__7078_9496 = G__9510;
count__7079_9497 = G__9511;
i__7080_9498 = G__9512;
continue;
} else {
var vec__7090_9513 = cljs.core.first(seq__7077_9507__$1);
var method_name_9514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7090_9513,(0),null);
var sig_9515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7090_9513,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9514,sig_9515);


var G__9516 = cljs.core.next(seq__7077_9507__$1);
var G__9517 = null;
var G__9518 = (0);
var G__9519 = (0);
seq__7077_9495 = G__9516;
chunk__7078_9496 = G__9517;
count__7079_9497 = G__9518;
i__7080_9498 = G__9519;
continue;
}
} else {
}
}
break;
}

var seq__7093_9520 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7094_9521 = null;
var count__7095_9522 = (0);
var i__7096_9523 = (0);
while(true){
if((i__7096_9523 < count__7095_9522)){
var vec__7103_9524 = chunk__7094_9521.cljs$core$IIndexed$_nth$arity$2(null,i__7096_9523);
var method_name_9525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7103_9524,(0),null);
var sig_9526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7103_9524,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9525,sig_9526);


var G__9527 = seq__7093_9520;
var G__9528 = chunk__7094_9521;
var G__9529 = count__7095_9522;
var G__9530 = (i__7096_9523 + (1));
seq__7093_9520 = G__9527;
chunk__7094_9521 = G__9528;
count__7095_9522 = G__9529;
i__7096_9523 = G__9530;
continue;
} else {
var temp__5823__auto___9531 = cljs.core.seq(seq__7093_9520);
if(temp__5823__auto___9531){
var seq__7093_9532__$1 = temp__5823__auto___9531;
if(cljs.core.chunked_seq_QMARK_(seq__7093_9532__$1)){
var c__5673__auto___9533 = cljs.core.chunk_first(seq__7093_9532__$1);
var G__9534 = cljs.core.chunk_rest(seq__7093_9532__$1);
var G__9535 = c__5673__auto___9533;
var G__9536 = cljs.core.count(c__5673__auto___9533);
var G__9537 = (0);
seq__7093_9520 = G__9534;
chunk__7094_9521 = G__9535;
count__7095_9522 = G__9536;
i__7096_9523 = G__9537;
continue;
} else {
var vec__7106_9538 = cljs.core.first(seq__7093_9532__$1);
var method_name_9539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7106_9538,(0),null);
var sig_9540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7106_9538,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9539,sig_9540);


var G__9541 = cljs.core.next(seq__7093_9532__$1);
var G__9542 = null;
var G__9543 = (0);
var G__9544 = (0);
seq__7093_9520 = G__9541;
chunk__7094_9521 = G__9542;
count__7095_9522 = G__9543;
i__7096_9523 = G__9544;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7109_9545 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__7110_9546 = null;
var count__7111_9547 = (0);
var i__7112_9548 = (0);
while(true){
if((i__7112_9548 < count__7111_9547)){
var vec__7119_9549 = chunk__7110_9546.cljs$core$IIndexed$_nth$arity$2(null,i__7112_9548);
var method_name_9550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7119_9549,(0),null);
var sig_9551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7119_9549,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9550,sig_9551);


var G__9556 = seq__7109_9545;
var G__9557 = chunk__7110_9546;
var G__9558 = count__7111_9547;
var G__9559 = (i__7112_9548 + (1));
seq__7109_9545 = G__9556;
chunk__7110_9546 = G__9557;
count__7111_9547 = G__9558;
i__7112_9548 = G__9559;
continue;
} else {
var temp__5823__auto___9564 = cljs.core.seq(seq__7109_9545);
if(temp__5823__auto___9564){
var seq__7109_9565__$1 = temp__5823__auto___9564;
if(cljs.core.chunked_seq_QMARK_(seq__7109_9565__$1)){
var c__5673__auto___9566 = cljs.core.chunk_first(seq__7109_9565__$1);
var G__9567 = cljs.core.chunk_rest(seq__7109_9565__$1);
var G__9568 = c__5673__auto___9566;
var G__9569 = cljs.core.count(c__5673__auto___9566);
var G__9570 = (0);
seq__7109_9545 = G__9567;
chunk__7110_9546 = G__9568;
count__7111_9547 = G__9569;
i__7112_9548 = G__9570;
continue;
} else {
var vec__7122_9571 = cljs.core.first(seq__7109_9565__$1);
var method_name_9572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7122_9571,(0),null);
var sig_9573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7122_9571,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9572,sig_9573);


var G__9578 = cljs.core.next(seq__7109_9565__$1);
var G__9579 = null;
var G__9580 = (0);
var G__9581 = (0);
seq__7109_9545 = G__9578;
chunk__7110_9546 = G__9579;
count__7111_9547 = G__9580;
i__7112_9548 = G__9581;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__7126_9582 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7127_9583 = null;
var count__7128_9584 = (0);
var i__7129_9585 = (0);
while(true){
if((i__7129_9585 < count__7128_9584)){
var vec__7136_9586 = chunk__7127_9583.cljs$core$IIndexed$_nth$arity$2(null,i__7129_9585);
var method_name_9587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7136_9586,(0),null);
var sig_9588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7136_9586,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_9587,sig_9588);


var G__9589 = seq__7126_9582;
var G__9590 = chunk__7127_9583;
var G__9591 = count__7128_9584;
var G__9592 = (i__7129_9585 + (1));
seq__7126_9582 = G__9589;
chunk__7127_9583 = G__9590;
count__7128_9584 = G__9591;
i__7129_9585 = G__9592;
continue;
} else {
var temp__5823__auto___9593 = cljs.core.seq(seq__7126_9582);
if(temp__5823__auto___9593){
var seq__7126_9594__$1 = temp__5823__auto___9593;
if(cljs.core.chunked_seq_QMARK_(seq__7126_9594__$1)){
var c__5673__auto___9595 = cljs.core.chunk_first(seq__7126_9594__$1);
var G__9596 = cljs.core.chunk_rest(seq__7126_9594__$1);
var G__9597 = c__5673__auto___9595;
var G__9598 = cljs.core.count(c__5673__auto___9595);
var G__9599 = (0);
seq__7126_9582 = G__9596;
chunk__7127_9583 = G__9597;
count__7128_9584 = G__9598;
i__7129_9585 = G__9599;
continue;
} else {
var vec__7139_9600 = cljs.core.first(seq__7126_9594__$1);
var method_name_9601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7139_9600,(0),null);
var sig_9602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7139_9600,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_9601,sig_9602);


var G__9603 = cljs.core.next(seq__7126_9594__$1);
var G__9604 = null;
var G__9605 = (0);
var G__9606 = (0);
seq__7126_9582 = G__9603;
chunk__7127_9583 = G__9604;
count__7128_9584 = G__9605;
i__7129_9585 = G__9606;
continue;
}
} else {
}
}
break;
}

var seq__7142 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__7143 = null;
var count__7144 = (0);
var i__7145 = (0);
while(true){
if((i__7145 < count__7144)){
var n = chunk__7143.cljs$core$IIndexed$_nth$arity$2(null,i__7145);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7142,chunk__7143,count__7144,i__7145,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7142,chunk__7143,count__7144,i__7145,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__9607 = seq__7142;
var G__9608 = chunk__7143;
var G__9609 = count__7144;
var G__9610 = (i__7145 + (1));
seq__7142 = G__9607;
chunk__7143 = G__9608;
count__7144 = G__9609;
i__7145 = G__9610;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7142);
if(temp__5823__auto__){
var seq__7142__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7142__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7142__$1);
var G__9611 = cljs.core.chunk_rest(seq__7142__$1);
var G__9612 = c__5673__auto__;
var G__9613 = cljs.core.count(c__5673__auto__);
var G__9614 = (0);
seq__7142 = G__9611;
chunk__7143 = G__9612;
count__7144 = G__9613;
i__7145 = G__9614;
continue;
} else {
var n = cljs.core.first(seq__7142__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7142,chunk__7143,count__7144,i__7145,n,seq__7142__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7142,chunk__7143,count__7144,i__7145,n,seq__7142__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__9615 = cljs.core.next(seq__7142__$1);
var G__9616 = null;
var G__9617 = (0);
var G__9618 = (0);
seq__7142 = G__9615;
chunk__7143 = G__9616;
count__7144 = G__9617;
i__7145 = G__9618;
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
var G__7148 = arguments.length;
switch (G__7148) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__7149,opts){
var map__7151 = p__7149;
var map__7151__$1 = cljs.core.__destructure_map(map__7151);
var program = map__7151__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7151__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7151__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7151__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7151__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__7153_9620 = cljs.core.seq(imports);
var chunk__7154_9621 = null;
var count__7155_9622 = (0);
var i__7156_9623 = (0);
while(true){
if((i__7156_9623 < count__7155_9622)){
var map__7159_9624 = chunk__7154_9621.cljs$core$IIndexed$_nth$arity$2(null,i__7156_9623);
var map__7159_9625__$1 = cljs.core.__destructure_map(map__7159_9624);
var qualified_name_9626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7159_9625__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7159_9625__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9627 == null)){
var simple_name_9628 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9626,/\./));
nex.typechecker.env_add_class(env,simple_name_9628,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9628,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9626], null));
} else {
}


var G__9629 = seq__7153_9620;
var G__9630 = chunk__7154_9621;
var G__9631 = count__7155_9622;
var G__9632 = (i__7156_9623 + (1));
seq__7153_9620 = G__9629;
chunk__7154_9621 = G__9630;
count__7155_9622 = G__9631;
i__7156_9623 = G__9632;
continue;
} else {
var temp__5823__auto___9633 = cljs.core.seq(seq__7153_9620);
if(temp__5823__auto___9633){
var seq__7153_9634__$1 = temp__5823__auto___9633;
if(cljs.core.chunked_seq_QMARK_(seq__7153_9634__$1)){
var c__5673__auto___9635 = cljs.core.chunk_first(seq__7153_9634__$1);
var G__9636 = cljs.core.chunk_rest(seq__7153_9634__$1);
var G__9637 = c__5673__auto___9635;
var G__9638 = cljs.core.count(c__5673__auto___9635);
var G__9639 = (0);
seq__7153_9620 = G__9636;
chunk__7154_9621 = G__9637;
count__7155_9622 = G__9638;
i__7156_9623 = G__9639;
continue;
} else {
var map__7161_9640 = cljs.core.first(seq__7153_9634__$1);
var map__7161_9641__$1 = cljs.core.__destructure_map(map__7161_9640);
var qualified_name_9642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7161_9641__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7161_9641__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9643 == null)){
var simple_name_9644 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9642,/\./));
nex.typechecker.env_add_class(env,simple_name_9644,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9644,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9642], null));
} else {
}


var G__9645 = cljs.core.next(seq__7153_9634__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__7153_9620 = G__9645;
chunk__7154_9621 = G__9646;
count__7155_9622 = G__9647;
i__7156_9623 = G__9648;
continue;
}
} else {
}
}
break;
}

var seq__7162_9649 = cljs.core.seq(classes);
var chunk__7163_9650 = null;
var count__7164_9651 = (0);
var i__7165_9652 = (0);
while(true){
if((i__7165_9652 < count__7164_9651)){
var class_def_9653 = chunk__7163_9650.cljs$core$IIndexed$_nth$arity$2(null,i__7165_9652);
nex.typechecker.collect_class_info(env,class_def_9653);


var G__9654 = seq__7162_9649;
var G__9655 = chunk__7163_9650;
var G__9656 = count__7164_9651;
var G__9657 = (i__7165_9652 + (1));
seq__7162_9649 = G__9654;
chunk__7163_9650 = G__9655;
count__7164_9651 = G__9656;
i__7165_9652 = G__9657;
continue;
} else {
var temp__5823__auto___9658 = cljs.core.seq(seq__7162_9649);
if(temp__5823__auto___9658){
var seq__7162_9659__$1 = temp__5823__auto___9658;
if(cljs.core.chunked_seq_QMARK_(seq__7162_9659__$1)){
var c__5673__auto___9660 = cljs.core.chunk_first(seq__7162_9659__$1);
var G__9661 = cljs.core.chunk_rest(seq__7162_9659__$1);
var G__9662 = c__5673__auto___9660;
var G__9663 = cljs.core.count(c__5673__auto___9660);
var G__9664 = (0);
seq__7162_9649 = G__9661;
chunk__7163_9650 = G__9662;
count__7164_9651 = G__9663;
i__7165_9652 = G__9664;
continue;
} else {
var class_def_9665 = cljs.core.first(seq__7162_9659__$1);
nex.typechecker.collect_class_info(env,class_def_9665);


var G__9666 = cljs.core.next(seq__7162_9659__$1);
var G__9667 = null;
var G__9668 = (0);
var G__9669 = (0);
seq__7162_9649 = G__9666;
chunk__7163_9650 = G__9667;
count__7164_9651 = G__9668;
i__7165_9652 = G__9669;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7166_9670 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7167_9671 = null;
var count__7168_9672 = (0);
var i__7169_9673 = (0);
while(true){
if((i__7169_9673 < count__7168_9672)){
var vec__7176_9674 = chunk__7167_9671.cljs$core$IIndexed$_nth$arity$2(null,i__7169_9673);
var var_name_9675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7176_9674,(0),null);
var var_type_9676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7176_9674,(1),null);
nex.typechecker.env_add_var(env,var_name_9675,var_type_9676);


var G__9677 = seq__7166_9670;
var G__9678 = chunk__7167_9671;
var G__9679 = count__7168_9672;
var G__9680 = (i__7169_9673 + (1));
seq__7166_9670 = G__9677;
chunk__7167_9671 = G__9678;
count__7168_9672 = G__9679;
i__7169_9673 = G__9680;
continue;
} else {
var temp__5823__auto___9681 = cljs.core.seq(seq__7166_9670);
if(temp__5823__auto___9681){
var seq__7166_9682__$1 = temp__5823__auto___9681;
if(cljs.core.chunked_seq_QMARK_(seq__7166_9682__$1)){
var c__5673__auto___9683 = cljs.core.chunk_first(seq__7166_9682__$1);
var G__9684 = cljs.core.chunk_rest(seq__7166_9682__$1);
var G__9685 = c__5673__auto___9683;
var G__9686 = cljs.core.count(c__5673__auto___9683);
var G__9687 = (0);
seq__7166_9670 = G__9684;
chunk__7167_9671 = G__9685;
count__7168_9672 = G__9686;
i__7169_9673 = G__9687;
continue;
} else {
var vec__7180_9688 = cljs.core.first(seq__7166_9682__$1);
var var_name_9689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7180_9688,(0),null);
var var_type_9690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7180_9688,(1),null);
nex.typechecker.env_add_var(env,var_name_9689,var_type_9690);


var G__9691 = cljs.core.next(seq__7166_9682__$1);
var G__9692 = null;
var G__9693 = (0);
var G__9694 = (0);
seq__7166_9670 = G__9691;
chunk__7167_9671 = G__9692;
count__7168_9672 = G__9693;
i__7169_9673 = G__9694;
continue;
}
} else {
}
}
break;
}

var seq__7183_9695 = cljs.core.seq(functions);
var chunk__7184_9696 = null;
var count__7185_9697 = (0);
var i__7186_9698 = (0);
while(true){
if((i__7186_9698 < count__7185_9697)){
var fn_def_9699 = chunk__7184_9696.cljs$core$IIndexed$_nth$arity$2(null,i__7186_9698);
var arity_9700 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_9699));
if((arity_9700 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9699))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9699))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9699),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_9699));


var G__9701 = seq__7183_9695;
var G__9702 = chunk__7184_9696;
var G__9703 = count__7185_9697;
var G__9704 = (i__7186_9698 + (1));
seq__7183_9695 = G__9701;
chunk__7184_9696 = G__9702;
count__7185_9697 = G__9703;
i__7186_9698 = G__9704;
continue;
} else {
var temp__5823__auto___9705 = cljs.core.seq(seq__7183_9695);
if(temp__5823__auto___9705){
var seq__7183_9706__$1 = temp__5823__auto___9705;
if(cljs.core.chunked_seq_QMARK_(seq__7183_9706__$1)){
var c__5673__auto___9707 = cljs.core.chunk_first(seq__7183_9706__$1);
var G__9708 = cljs.core.chunk_rest(seq__7183_9706__$1);
var G__9709 = c__5673__auto___9707;
var G__9710 = cljs.core.count(c__5673__auto___9707);
var G__9711 = (0);
seq__7183_9695 = G__9708;
chunk__7184_9696 = G__9709;
count__7185_9697 = G__9710;
i__7186_9698 = G__9711;
continue;
} else {
var fn_def_9712 = cljs.core.first(seq__7183_9706__$1);
var arity_9713 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_9712));
if((arity_9713 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9712))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9712))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9712),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_9712));


var G__9714 = cljs.core.next(seq__7183_9706__$1);
var G__9715 = null;
var G__9716 = (0);
var G__9717 = (0);
seq__7183_9695 = G__9714;
chunk__7184_9696 = G__9715;
count__7185_9697 = G__9716;
i__7186_9698 = G__9717;
continue;
}
} else {
}
}
break;
}

var seq__7187_9718 = cljs.core.seq(classes);
var chunk__7188_9719 = null;
var count__7189_9720 = (0);
var i__7190_9721 = (0);
while(true){
if((i__7190_9721 < count__7189_9720)){
var class_def_9722 = chunk__7188_9719.cljs$core$IIndexed$_nth$arity$2(null,i__7190_9721);
nex.typechecker.check_class(env,class_def_9722);


var G__9723 = seq__7187_9718;
var G__9724 = chunk__7188_9719;
var G__9725 = count__7189_9720;
var G__9726 = (i__7190_9721 + (1));
seq__7187_9718 = G__9723;
chunk__7188_9719 = G__9724;
count__7189_9720 = G__9725;
i__7190_9721 = G__9726;
continue;
} else {
var temp__5823__auto___9727 = cljs.core.seq(seq__7187_9718);
if(temp__5823__auto___9727){
var seq__7187_9728__$1 = temp__5823__auto___9727;
if(cljs.core.chunked_seq_QMARK_(seq__7187_9728__$1)){
var c__5673__auto___9729 = cljs.core.chunk_first(seq__7187_9728__$1);
var G__9730 = cljs.core.chunk_rest(seq__7187_9728__$1);
var G__9731 = c__5673__auto___9729;
var G__9732 = cljs.core.count(c__5673__auto___9729);
var G__9733 = (0);
seq__7187_9718 = G__9730;
chunk__7188_9719 = G__9731;
count__7189_9720 = G__9732;
i__7190_9721 = G__9733;
continue;
} else {
var class_def_9734 = cljs.core.first(seq__7187_9728__$1);
nex.typechecker.check_class(env,class_def_9734);


var G__9735 = cljs.core.next(seq__7187_9728__$1);
var G__9736 = null;
var G__9737 = (0);
var G__9738 = (0);
seq__7187_9718 = G__9735;
chunk__7188_9719 = G__9736;
count__7189_9720 = G__9737;
i__7190_9721 = G__9738;
continue;
}
} else {
}
}
break;
}

var seq__7191_9739 = cljs.core.seq(calls);
var chunk__7192_9740 = null;
var count__7193_9741 = (0);
var i__7194_9742 = (0);
while(true){
if((i__7194_9742 < count__7193_9741)){
var call_9743 = chunk__7192_9740.cljs$core$IIndexed$_nth$arity$2(null,i__7194_9742);
nex.typechecker.check_expression(env,call_9743);


var G__9744 = seq__7191_9739;
var G__9745 = chunk__7192_9740;
var G__9746 = count__7193_9741;
var G__9747 = (i__7194_9742 + (1));
seq__7191_9739 = G__9744;
chunk__7192_9740 = G__9745;
count__7193_9741 = G__9746;
i__7194_9742 = G__9747;
continue;
} else {
var temp__5823__auto___9748 = cljs.core.seq(seq__7191_9739);
if(temp__5823__auto___9748){
var seq__7191_9749__$1 = temp__5823__auto___9748;
if(cljs.core.chunked_seq_QMARK_(seq__7191_9749__$1)){
var c__5673__auto___9750 = cljs.core.chunk_first(seq__7191_9749__$1);
var G__9751 = cljs.core.chunk_rest(seq__7191_9749__$1);
var G__9752 = c__5673__auto___9750;
var G__9753 = cljs.core.count(c__5673__auto___9750);
var G__9754 = (0);
seq__7191_9739 = G__9751;
chunk__7192_9740 = G__9752;
count__7193_9741 = G__9753;
i__7194_9742 = G__9754;
continue;
} else {
var call_9755 = cljs.core.first(seq__7191_9749__$1);
nex.typechecker.check_expression(env,call_9755);


var G__9756 = cljs.core.next(seq__7191_9749__$1);
var G__9757 = null;
var G__9758 = (0);
var G__9759 = (0);
seq__7191_9739 = G__9756;
chunk__7192_9740 = G__9757;
count__7193_9741 = G__9758;
i__7194_9742 = G__9759;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e7152){var e = e7152;
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
var G__7196 = arguments.length;
switch (G__7196) {
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
var seq__7198_9761 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7199_9762 = null;
var count__7200_9763 = (0);
var i__7201_9764 = (0);
while(true){
if((i__7201_9764 < count__7200_9763)){
var map__7230_9765 = chunk__7199_9762.cljs$core$IIndexed$_nth$arity$2(null,i__7201_9764);
var map__7230_9766__$1 = cljs.core.__destructure_map(map__7230_9765);
var qualified_name_9767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7230_9766__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7230_9766__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9768 == null)){
var simple_name_9769 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9767,/\./));
nex.typechecker.env_add_class(env,simple_name_9769,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9769,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9767], null));
} else {
}


var G__9770 = seq__7198_9761;
var G__9771 = chunk__7199_9762;
var G__9772 = count__7200_9763;
var G__9773 = (i__7201_9764 + (1));
seq__7198_9761 = G__9770;
chunk__7199_9762 = G__9771;
count__7200_9763 = G__9772;
i__7201_9764 = G__9773;
continue;
} else {
var temp__5823__auto___9774 = cljs.core.seq(seq__7198_9761);
if(temp__5823__auto___9774){
var seq__7198_9775__$1 = temp__5823__auto___9774;
if(cljs.core.chunked_seq_QMARK_(seq__7198_9775__$1)){
var c__5673__auto___9779 = cljs.core.chunk_first(seq__7198_9775__$1);
var G__9780 = cljs.core.chunk_rest(seq__7198_9775__$1);
var G__9781 = c__5673__auto___9779;
var G__9782 = cljs.core.count(c__5673__auto___9779);
var G__9783 = (0);
seq__7198_9761 = G__9780;
chunk__7199_9762 = G__9781;
count__7200_9763 = G__9782;
i__7201_9764 = G__9783;
continue;
} else {
var map__7238_9784 = cljs.core.first(seq__7198_9775__$1);
var map__7238_9785__$1 = cljs.core.__destructure_map(map__7238_9784);
var qualified_name_9786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7238_9785__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7238_9785__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9787 == null)){
var simple_name_9788 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9786,/\./));
nex.typechecker.env_add_class(env,simple_name_9788,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9788,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9786], null));
} else {
}


var G__9792 = cljs.core.next(seq__7198_9775__$1);
var G__9793 = null;
var G__9794 = (0);
var G__9795 = (0);
seq__7198_9761 = G__9792;
chunk__7199_9762 = G__9793;
count__7200_9763 = G__9794;
i__7201_9764 = G__9795;
continue;
}
} else {
}
}
break;
}

var seq__7239_9796 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7240_9797 = null;
var count__7241_9798 = (0);
var i__7242_9799 = (0);
while(true){
if((i__7242_9799 < count__7241_9798)){
var class_def_9800 = chunk__7240_9797.cljs$core$IIndexed$_nth$arity$2(null,i__7242_9799);
nex.typechecker.collect_class_info(env,class_def_9800);


var G__9801 = seq__7239_9796;
var G__9802 = chunk__7240_9797;
var G__9803 = count__7241_9798;
var G__9804 = (i__7242_9799 + (1));
seq__7239_9796 = G__9801;
chunk__7240_9797 = G__9802;
count__7241_9798 = G__9803;
i__7242_9799 = G__9804;
continue;
} else {
var temp__5823__auto___9805 = cljs.core.seq(seq__7239_9796);
if(temp__5823__auto___9805){
var seq__7239_9807__$1 = temp__5823__auto___9805;
if(cljs.core.chunked_seq_QMARK_(seq__7239_9807__$1)){
var c__5673__auto___9808 = cljs.core.chunk_first(seq__7239_9807__$1);
var G__9809 = cljs.core.chunk_rest(seq__7239_9807__$1);
var G__9810 = c__5673__auto___9808;
var G__9811 = cljs.core.count(c__5673__auto___9808);
var G__9812 = (0);
seq__7239_9796 = G__9809;
chunk__7240_9797 = G__9810;
count__7241_9798 = G__9811;
i__7242_9799 = G__9812;
continue;
} else {
var class_def_9813 = cljs.core.first(seq__7239_9807__$1);
nex.typechecker.collect_class_info(env,class_def_9813);


var G__9814 = cljs.core.next(seq__7239_9807__$1);
var G__9815 = null;
var G__9816 = (0);
var G__9817 = (0);
seq__7239_9796 = G__9814;
chunk__7240_9797 = G__9815;
count__7241_9798 = G__9816;
i__7242_9799 = G__9817;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7243_9819 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7244_9820 = null;
var count__7245_9821 = (0);
var i__7246_9822 = (0);
while(true){
if((i__7246_9822 < count__7245_9821)){
var vec__7254_9823 = chunk__7244_9820.cljs$core$IIndexed$_nth$arity$2(null,i__7246_9822);
var var_name_9824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7254_9823,(0),null);
var var_type_9825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7254_9823,(1),null);
nex.typechecker.env_add_var(env,var_name_9824,var_type_9825);


var G__9826 = seq__7243_9819;
var G__9827 = chunk__7244_9820;
var G__9828 = count__7245_9821;
var G__9829 = (i__7246_9822 + (1));
seq__7243_9819 = G__9826;
chunk__7244_9820 = G__9827;
count__7245_9821 = G__9828;
i__7246_9822 = G__9829;
continue;
} else {
var temp__5823__auto___9830 = cljs.core.seq(seq__7243_9819);
if(temp__5823__auto___9830){
var seq__7243_9831__$1 = temp__5823__auto___9830;
if(cljs.core.chunked_seq_QMARK_(seq__7243_9831__$1)){
var c__5673__auto___9832 = cljs.core.chunk_first(seq__7243_9831__$1);
var G__9833 = cljs.core.chunk_rest(seq__7243_9831__$1);
var G__9834 = c__5673__auto___9832;
var G__9835 = cljs.core.count(c__5673__auto___9832);
var G__9836 = (0);
seq__7243_9819 = G__9833;
chunk__7244_9820 = G__9834;
count__7245_9821 = G__9835;
i__7246_9822 = G__9836;
continue;
} else {
var vec__7257_9837 = cljs.core.first(seq__7243_9831__$1);
var var_name_9838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257_9837,(0),null);
var var_type_9839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257_9837,(1),null);
nex.typechecker.env_add_var(env,var_name_9838,var_type_9839);


var G__9840 = cljs.core.next(seq__7243_9831__$1);
var G__9841 = null;
var G__9842 = (0);
var G__9843 = (0);
seq__7243_9819 = G__9840;
chunk__7244_9820 = G__9841;
count__7245_9821 = G__9842;
i__7246_9822 = G__9843;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e7197){var _ = e7197;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
