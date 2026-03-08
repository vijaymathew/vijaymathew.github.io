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
var G__6060 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6061 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6060,G__6061) : nex.typechecker.env_lookup_var.call(null,G__6060,G__6061));
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
var G__6065 = class_name;
var G__6066 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6062,G__6065,G__6066) : nex.typechecker.env_lookup_method.call(null,G__6062,G__6065,G__6066));
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
var G__6074 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6075 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6074,G__6075) : nex.typechecker.env_lookup_class.call(null,G__6074,G__6075));
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
var extmap__5490__auto__ = (function (){var G__6107 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6097,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6097)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6107);
} else {
return G__6107;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6097),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6097),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6097),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6109 = arguments.length;
switch (G__6109) {
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
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6110){
var map__6111 = p__6110;
var map__6111__$1 = cljs.core.__destructure_map(map__6111);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6111__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6111__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var G__6112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6112__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6112,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6112);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6112__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6112__$1;
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
var G__6114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6114,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6113_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6113_SHARP_);
}));
} else {
return G__6114;
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
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6115 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6115.cljs$core$IFn$_invoke$arity$1 ? fexpr__6115.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6115.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6117 = arguments.length;
switch (G__6117) {
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
var G__6119 = arguments.length;
switch (G__6119) {
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
var or__5142__auto__ = cljs.core.some((function (p1__6120_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6120_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6121_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6121_SHARP_,seen__$1);
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

var seq__6122 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6123 = null;
var count__6124 = (0);
var i__6125 = (0);
while(true){
if((i__6125 < count__6124)){
var vec__6132 = chunk__6123.cljs$core$IIndexed$_nth$arity$2(null,i__6125);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(1),null);
var temp__5823__auto___6799 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6799)){
var constraint_6800 = temp__5823__auto___6799;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6800))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6800)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6800)))], null));
}
} else {
}


var G__6801 = seq__6122;
var G__6802 = chunk__6123;
var G__6803 = count__6124;
var G__6804 = (i__6125 + (1));
seq__6122 = G__6801;
chunk__6123 = G__6802;
count__6124 = G__6803;
i__6125 = G__6804;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6122);
if(temp__5823__auto__){
var seq__6122__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6122__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6122__$1);
var G__6805 = cljs.core.chunk_rest(seq__6122__$1);
var G__6806 = c__5673__auto__;
var G__6807 = cljs.core.count(c__5673__auto__);
var G__6808 = (0);
seq__6122 = G__6805;
chunk__6123 = G__6806;
count__6124 = G__6807;
i__6125 = G__6808;
continue;
} else {
var vec__6135 = cljs.core.first(seq__6122__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(1),null);
var temp__5823__auto___6810__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6810__$1)){
var constraint_6811 = temp__5823__auto___6810__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6811))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6811)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6811)))], null));
}
} else {
}


var G__6812 = cljs.core.next(seq__6122__$1);
var G__6813 = null;
var G__6814 = (0);
var G__6815 = (0);
seq__6122 = G__6812;
chunk__6123 = G__6813;
count__6124 = G__6814;
i__6125 = G__6815;
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

var seq__6138 = cljs.core.seq(args);
var chunk__6139 = null;
var count__6140 = (0);
var i__6141 = (0);
while(true){
if((i__6141 < count__6140)){
var arg = chunk__6139.cljs$core$IIndexed$_nth$arity$2(null,i__6141);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__6817 = seq__6138;
var G__6818 = chunk__6139;
var G__6819 = count__6140;
var G__6820 = (i__6141 + (1));
seq__6138 = G__6817;
chunk__6139 = G__6818;
count__6140 = G__6819;
i__6141 = G__6820;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6138);
if(temp__5823__auto__){
var seq__6138__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6138__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6138__$1);
var G__6821 = cljs.core.chunk_rest(seq__6138__$1);
var G__6822 = c__5673__auto__;
var G__6823 = cljs.core.count(c__5673__auto__);
var G__6824 = (0);
seq__6138 = G__6821;
chunk__6139 = G__6822;
count__6140 = G__6823;
i__6141 = G__6824;
continue;
} else {
var arg = cljs.core.first(seq__6138__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__6825 = cljs.core.next(seq__6138__$1);
var G__6826 = null;
var G__6827 = (0);
var G__6828 = (0);
seq__6138 = G__6825;
chunk__6139 = G__6826;
count__6140 = G__6827;
i__6141 = G__6828;
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
var G__6142 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6142__$1 = (((G__6142 instanceof cljs.core.Keyword))?G__6142.fqn:null);
switch (G__6142__$1) {
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
return cljs.core.some((function (p__6143){
var map__6144 = p__6143;
var map__6144__$1 = cljs.core.__destructure_map(map__6144);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6144__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
return cljs.core.some((function (p__6147){
var map__6148 = p__6147;
var map__6148__$1 = cljs.core.__destructure_map(map__6148);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6148__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6149_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6149_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6152){
var map__6153 = p__6152;
var map__6153__$1 = cljs.core.__destructure_map(map__6153);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6153__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6154){
var map__6155 = p__6154;
var map__6155__$1 = cljs.core.__destructure_map(map__6155);
var expr = map__6155__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6156){
var map__6157 = p__6156;
var map__6157__$1 = cljs.core.__destructure_map(map__6157);
var expr = map__6157__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6157__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6157__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6157__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,left) : nex.typechecker.check_expression.call(null,env,left));
var right_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,right) : nex.typechecker.check_expression.call(null,env,right));
var G__6158 = operator;
switch (G__6158) {
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
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6159){
var map__6160 = p__6159;
var map__6160__$1 = cljs.core.__destructure_map(map__6160);
var unary_expr = map__6160__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6160__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6160__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6160__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var operand_node = (function (){var or__5142__auto__ = operand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expr;
}
})();
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand_node) : nex.typechecker.check_expression.call(null,env,operand_node));
var G__6161 = operator;
switch (G__6161) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6162_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6162_SHARP_,p1__6162_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6163_SHARP_){
if(cljs.core.truth_(p1__6163_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6163_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6164_SHARP_){
if(cljs.core.truth_(p1__6164_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6164_SHARP_);
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
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6165){
var map__6166 = p__6165;
var map__6166__$1 = cljs.core.__destructure_map(map__6166);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6166__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6166__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6166__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6167){
var map__6168 = p__6167;
var map__6168__$1 = cljs.core.__destructure_map(map__6168);
var expr = map__6168__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6168__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6168__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6168__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6168__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
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

var seq__6169_6833 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6170_6834 = null;
var count__6171_6835 = (0);
var i__6172_6836 = (0);
while(true){
if((i__6172_6836 < count__6171_6835)){
var vec__6179_6837 = chunk__6170_6834.cljs$core$IIndexed$_nth$arity$2(null,i__6172_6836);
var arg_6838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6179_6837,(0),null);
var param_6839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6179_6837,(1),null);
var arg_type_6840 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6838) : nex.typechecker.check_expression.call(null,env,arg_6838));
var param_type_6841 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6839),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6840,param_type_6841))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6841))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6840))))], null));
}


var G__6842 = seq__6169_6833;
var G__6843 = chunk__6170_6834;
var G__6844 = count__6171_6835;
var G__6845 = (i__6172_6836 + (1));
seq__6169_6833 = G__6842;
chunk__6170_6834 = G__6843;
count__6171_6835 = G__6844;
i__6172_6836 = G__6845;
continue;
} else {
var temp__5823__auto___6846 = cljs.core.seq(seq__6169_6833);
if(temp__5823__auto___6846){
var seq__6169_6847__$1 = temp__5823__auto___6846;
if(cljs.core.chunked_seq_QMARK_(seq__6169_6847__$1)){
var c__5673__auto___6848 = cljs.core.chunk_first(seq__6169_6847__$1);
var G__6849 = cljs.core.chunk_rest(seq__6169_6847__$1);
var G__6850 = c__5673__auto___6848;
var G__6851 = cljs.core.count(c__5673__auto___6848);
var G__6852 = (0);
seq__6169_6833 = G__6849;
chunk__6170_6834 = G__6850;
count__6171_6835 = G__6851;
i__6172_6836 = G__6852;
continue;
} else {
var vec__6182_6853 = cljs.core.first(seq__6169_6847__$1);
var arg_6854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6182_6853,(0),null);
var param_6855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6182_6853,(1),null);
var arg_type_6856 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6854) : nex.typechecker.check_expression.call(null,env,arg_6854));
var param_type_6857 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6855),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6856,param_type_6857))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6857))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6856))))], null));
}


var G__6858 = cljs.core.next(seq__6169_6847__$1);
var G__6859 = null;
var G__6860 = (0);
var G__6861 = (0);
seq__6169_6833 = G__6858;
chunk__6170_6834 = G__6859;
count__6171_6835 = G__6860;
i__6172_6836 = G__6861;
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

var G__6185_6862 = env;
var G__6186_6863 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6185_6862,G__6186_6863) : nex.typechecker.check_expression.call(null,G__6185_6862,G__6186_6863));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_6864 = (function (){var G__6187 = env;
var G__6188 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6187,G__6188) : nex.typechecker.check_expression.call(null,G__6187,G__6188));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_6864),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_6864))))], null));
}

var G__6189_6865 = env;
var G__6190_6866 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6189_6865,G__6190_6866) : nex.typechecker.check_expression.call(null,G__6189_6865,G__6190_6866));

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

var seq__6191_6867 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6192_6868 = null;
var count__6193_6869 = (0);
var i__6194_6870 = (0);
while(true){
if((i__6194_6870 < count__6193_6869)){
var vec__6201_6871 = chunk__6192_6868.cljs$core$IIndexed$_nth$arity$2(null,i__6194_6870);
var arg_6872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6201_6871,(0),null);
var param_6873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6201_6871,(1),null);
var arg_type_6874 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6872) : nex.typechecker.check_expression.call(null,env,arg_6872));
var param_type_6875 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6873),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6874,param_type_6875))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6875))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6874))))], null));
}


var G__6876 = seq__6191_6867;
var G__6877 = chunk__6192_6868;
var G__6878 = count__6193_6869;
var G__6879 = (i__6194_6870 + (1));
seq__6191_6867 = G__6876;
chunk__6192_6868 = G__6877;
count__6193_6869 = G__6878;
i__6194_6870 = G__6879;
continue;
} else {
var temp__5823__auto___6880 = cljs.core.seq(seq__6191_6867);
if(temp__5823__auto___6880){
var seq__6191_6881__$1 = temp__5823__auto___6880;
if(cljs.core.chunked_seq_QMARK_(seq__6191_6881__$1)){
var c__5673__auto___6883 = cljs.core.chunk_first(seq__6191_6881__$1);
var G__6884 = cljs.core.chunk_rest(seq__6191_6881__$1);
var G__6885 = c__5673__auto___6883;
var G__6886 = cljs.core.count(c__5673__auto___6883);
var G__6887 = (0);
seq__6191_6867 = G__6884;
chunk__6192_6868 = G__6885;
count__6193_6869 = G__6886;
i__6194_6870 = G__6887;
continue;
} else {
var vec__6204_6888 = cljs.core.first(seq__6191_6881__$1);
var arg_6889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6204_6888,(0),null);
var param_6890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6204_6888,(1),null);
var arg_type_6891 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6889) : nex.typechecker.check_expression.call(null,env,arg_6889));
var param_type_6892 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6890),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6891,param_type_6892))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6892))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6891))))], null));
}


var G__6893 = cljs.core.next(seq__6191_6881__$1);
var G__6894 = null;
var G__6895 = (0);
var G__6896 = (0);
seq__6191_6867 = G__6893;
chunk__6192_6868 = G__6894;
count__6193_6869 = G__6895;
i__6194_6870 = G__6896;
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

var seq__6207_6897 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6208_6898 = null;
var count__6209_6899 = (0);
var i__6210_6900 = (0);
while(true){
if((i__6210_6900 < count__6209_6899)){
var vec__6217_6901 = chunk__6208_6898.cljs$core$IIndexed$_nth$arity$2(null,i__6210_6900);
var arg_6902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6217_6901,(0),null);
var param_6903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6217_6901,(1),null);
var arg_type_6904 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6902) : nex.typechecker.check_expression.call(null,env,arg_6902));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6904,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6903)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6903))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_6904)))], null));
}


var G__6905 = seq__6207_6897;
var G__6906 = chunk__6208_6898;
var G__6907 = count__6209_6899;
var G__6908 = (i__6210_6900 + (1));
seq__6207_6897 = G__6905;
chunk__6208_6898 = G__6906;
count__6209_6899 = G__6907;
i__6210_6900 = G__6908;
continue;
} else {
var temp__5823__auto___6909 = cljs.core.seq(seq__6207_6897);
if(temp__5823__auto___6909){
var seq__6207_6910__$1 = temp__5823__auto___6909;
if(cljs.core.chunked_seq_QMARK_(seq__6207_6910__$1)){
var c__5673__auto___6911 = cljs.core.chunk_first(seq__6207_6910__$1);
var G__6912 = cljs.core.chunk_rest(seq__6207_6910__$1);
var G__6913 = c__5673__auto___6911;
var G__6914 = cljs.core.count(c__5673__auto___6911);
var G__6915 = (0);
seq__6207_6897 = G__6912;
chunk__6208_6898 = G__6913;
count__6209_6899 = G__6914;
i__6210_6900 = G__6915;
continue;
} else {
var vec__6220_6916 = cljs.core.first(seq__6207_6910__$1);
var arg_6917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6220_6916,(0),null);
var param_6918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6220_6916,(1),null);
var arg_type_6919 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6917) : nex.typechecker.check_expression.call(null,env,arg_6917));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6919,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6918)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6918))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_6919)))], null));
}


var G__6921 = cljs.core.next(seq__6207_6910__$1);
var G__6922 = null;
var G__6923 = (0);
var G__6924 = (0);
seq__6207_6897 = G__6921;
chunk__6208_6898 = G__6922;
count__6209_6899 = G__6923;
i__6210_6900 = G__6924;
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
var seq__6223_6925 = cljs.core.seq(args);
var chunk__6224_6926 = null;
var count__6225_6927 = (0);
var i__6226_6928 = (0);
while(true){
if((i__6226_6928 < count__6225_6927)){
var arg_6929 = chunk__6224_6926.cljs$core$IIndexed$_nth$arity$2(null,i__6226_6928);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6929) : nex.typechecker.check_expression.call(null,env,arg_6929));


var G__6930 = seq__6223_6925;
var G__6931 = chunk__6224_6926;
var G__6932 = count__6225_6927;
var G__6933 = (i__6226_6928 + (1));
seq__6223_6925 = G__6930;
chunk__6224_6926 = G__6931;
count__6225_6927 = G__6932;
i__6226_6928 = G__6933;
continue;
} else {
var temp__5823__auto___6934 = cljs.core.seq(seq__6223_6925);
if(temp__5823__auto___6934){
var seq__6223_6935__$1 = temp__5823__auto___6934;
if(cljs.core.chunked_seq_QMARK_(seq__6223_6935__$1)){
var c__5673__auto___6936 = cljs.core.chunk_first(seq__6223_6935__$1);
var G__6937 = cljs.core.chunk_rest(seq__6223_6935__$1);
var G__6938 = c__5673__auto___6936;
var G__6939 = cljs.core.count(c__5673__auto___6936);
var G__6940 = (0);
seq__6223_6925 = G__6937;
chunk__6224_6926 = G__6938;
count__6225_6927 = G__6939;
i__6226_6928 = G__6940;
continue;
} else {
var arg_6941 = cljs.core.first(seq__6223_6935__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6941) : nex.typechecker.check_expression.call(null,env,arg_6941));


var G__6942 = cljs.core.next(seq__6223_6935__$1);
var G__6943 = null;
var G__6944 = (0);
var G__6945 = (0);
seq__6223_6925 = G__6942;
chunk__6224_6926 = G__6943;
count__6225_6927 = G__6944;
i__6226_6928 = G__6945;
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
var seq__6227_6946 = cljs.core.seq(args);
var chunk__6228_6947 = null;
var count__6229_6948 = (0);
var i__6230_6949 = (0);
while(true){
if((i__6230_6949 < count__6229_6948)){
var arg_6950 = chunk__6228_6947.cljs$core$IIndexed$_nth$arity$2(null,i__6230_6949);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6950) : nex.typechecker.check_expression.call(null,env,arg_6950));


var G__6951 = seq__6227_6946;
var G__6952 = chunk__6228_6947;
var G__6953 = count__6229_6948;
var G__6954 = (i__6230_6949 + (1));
seq__6227_6946 = G__6951;
chunk__6228_6947 = G__6952;
count__6229_6948 = G__6953;
i__6230_6949 = G__6954;
continue;
} else {
var temp__5823__auto___6955 = cljs.core.seq(seq__6227_6946);
if(temp__5823__auto___6955){
var seq__6227_6956__$1 = temp__5823__auto___6955;
if(cljs.core.chunked_seq_QMARK_(seq__6227_6956__$1)){
var c__5673__auto___6957 = cljs.core.chunk_first(seq__6227_6956__$1);
var G__6958 = cljs.core.chunk_rest(seq__6227_6956__$1);
var G__6959 = c__5673__auto___6957;
var G__6960 = cljs.core.count(c__5673__auto___6957);
var G__6961 = (0);
seq__6227_6946 = G__6958;
chunk__6228_6947 = G__6959;
count__6229_6948 = G__6960;
i__6230_6949 = G__6961;
continue;
} else {
var arg_6962 = cljs.core.first(seq__6227_6956__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6962) : nex.typechecker.check_expression.call(null,env,arg_6962));


var G__6963 = cljs.core.next(seq__6227_6956__$1);
var G__6964 = null;
var G__6965 = (0);
var G__6966 = (0);
seq__6227_6946 = G__6963;
chunk__6228_6947 = G__6964;
count__6229_6948 = G__6965;
i__6230_6949 = G__6966;
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
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6231){
var map__6232 = p__6231;
var map__6232__$1 = cljs.core.__destructure_map(map__6232);
var expr = map__6232__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var seq__6233_6967 = cljs.core.seq(args);
var chunk__6234_6968 = null;
var count__6235_6969 = (0);
var i__6236_6970 = (0);
while(true){
if((i__6236_6970 < count__6235_6969)){
var arg_6971 = chunk__6234_6968.cljs$core$IIndexed$_nth$arity$2(null,i__6236_6970);
var arg_type_6972 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6971) : nex.typechecker.check_expression.call(null,env,arg_6971));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_6972,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__6973 = seq__6233_6967;
var G__6974 = chunk__6234_6968;
var G__6975 = count__6235_6969;
var G__6976 = (i__6236_6970 + (1));
seq__6233_6967 = G__6973;
chunk__6234_6968 = G__6974;
count__6235_6969 = G__6975;
i__6236_6970 = G__6976;
continue;
} else {
var temp__5823__auto___6977 = cljs.core.seq(seq__6233_6967);
if(temp__5823__auto___6977){
var seq__6233_6978__$1 = temp__5823__auto___6977;
if(cljs.core.chunked_seq_QMARK_(seq__6233_6978__$1)){
var c__5673__auto___6979 = cljs.core.chunk_first(seq__6233_6978__$1);
var G__6980 = cljs.core.chunk_rest(seq__6233_6978__$1);
var G__6981 = c__5673__auto___6979;
var G__6982 = cljs.core.count(c__5673__auto___6979);
var G__6983 = (0);
seq__6233_6967 = G__6980;
chunk__6234_6968 = G__6981;
count__6235_6969 = G__6982;
i__6236_6970 = G__6983;
continue;
} else {
var arg_6984 = cljs.core.first(seq__6233_6978__$1);
var arg_type_6985 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6984) : nex.typechecker.check_expression.call(null,env,arg_6984));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_6985,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__6986 = cljs.core.next(seq__6233_6978__$1);
var G__6987 = null;
var G__6988 = (0);
var G__6989 = (0);
seq__6233_6967 = G__6986;
chunk__6234_6968 = G__6987;
count__6235_6969 = G__6988;
i__6236_6970 = G__6989;
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
var constructors_6990 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__6991 = cljs.core.seq(constructors_6990);
var type_map_6992 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_6993 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_6994 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_6993);
if(((has_constructors_QMARK__6991) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_6994)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_6993)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_6993)))], null));
}

var params_6995 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_6994);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_6995),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_6993)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_6995))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6237_6996 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_6995));
var chunk__6238_6997 = null;
var count__6239_6998 = (0);
var i__6240_6999 = (0);
while(true){
if((i__6240_6999 < count__6239_6998)){
var vec__6247_7000 = chunk__6238_6997.cljs$core$IIndexed$_nth$arity$2(null,i__6240_6999);
var arg_7001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247_7000,(0),null);
var param_7002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6247_7000,(1),null);
var arg_type_7003 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7001) : nex.typechecker.check_expression.call(null,env,arg_7001));
var param_type_7004 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7002),type_map_6992);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7003,param_type_7004))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_6993)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7004))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7003))))], null));
}


var G__7005 = seq__6237_6996;
var G__7006 = chunk__6238_6997;
var G__7007 = count__6239_6998;
var G__7008 = (i__6240_6999 + (1));
seq__6237_6996 = G__7005;
chunk__6238_6997 = G__7006;
count__6239_6998 = G__7007;
i__6240_6999 = G__7008;
continue;
} else {
var temp__5823__auto___7009 = cljs.core.seq(seq__6237_6996);
if(temp__5823__auto___7009){
var seq__6237_7010__$1 = temp__5823__auto___7009;
if(cljs.core.chunked_seq_QMARK_(seq__6237_7010__$1)){
var c__5673__auto___7011 = cljs.core.chunk_first(seq__6237_7010__$1);
var G__7012 = cljs.core.chunk_rest(seq__6237_7010__$1);
var G__7013 = c__5673__auto___7011;
var G__7014 = cljs.core.count(c__5673__auto___7011);
var G__7015 = (0);
seq__6237_6996 = G__7012;
chunk__6238_6997 = G__7013;
count__6239_6998 = G__7014;
i__6240_6999 = G__7015;
continue;
} else {
var vec__6250_7016 = cljs.core.first(seq__6237_7010__$1);
var arg_7017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6250_7016,(0),null);
var param_7018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6250_7016,(1),null);
var arg_type_7019 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7017) : nex.typechecker.check_expression.call(null,env,arg_7017));
var param_type_7020 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7018),type_map_6992);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7019,param_type_7020))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_6993)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7020))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7019))))], null));
}


var G__7021 = cljs.core.next(seq__6237_7010__$1);
var G__7022 = null;
var G__7023 = (0);
var G__7024 = (0);
seq__6237_6996 = G__7021;
chunk__6238_6997 = G__7022;
count__6239_6998 = G__7023;
i__6240_6999 = G__7024;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6253){
var map__6254 = p__6253;
var map__6254__$1 = cljs.core.__destructure_map(map__6254);
var expr = map__6254__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6254__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6255 = env;
var G__6256 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6255,G__6256) : nex.typechecker.check_expression.call(null,G__6255,G__6256));
})();
var seq__6257_7025 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6258_7026 = null;
var count__6259_7027 = (0);
var i__6260_7028 = (0);
while(true){
if((i__6260_7028 < count__6259_7027)){
var elem_7029 = chunk__6258_7026.cljs$core$IIndexed$_nth$arity$2(null,i__6260_7028);
var elem_type_7030 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7029) : nex.typechecker.check_expression.call(null,env,elem_7029));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7030))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7030))))], null));
}


var G__7031 = seq__6257_7025;
var G__7032 = chunk__6258_7026;
var G__7033 = count__6259_7027;
var G__7034 = (i__6260_7028 + (1));
seq__6257_7025 = G__7031;
chunk__6258_7026 = G__7032;
count__6259_7027 = G__7033;
i__6260_7028 = G__7034;
continue;
} else {
var temp__5823__auto___7035 = cljs.core.seq(seq__6257_7025);
if(temp__5823__auto___7035){
var seq__6257_7036__$1 = temp__5823__auto___7035;
if(cljs.core.chunked_seq_QMARK_(seq__6257_7036__$1)){
var c__5673__auto___7037 = cljs.core.chunk_first(seq__6257_7036__$1);
var G__7038 = cljs.core.chunk_rest(seq__6257_7036__$1);
var G__7039 = c__5673__auto___7037;
var G__7040 = cljs.core.count(c__5673__auto___7037);
var G__7041 = (0);
seq__6257_7025 = G__7038;
chunk__6258_7026 = G__7039;
count__6259_7027 = G__7040;
i__6260_7028 = G__7041;
continue;
} else {
var elem_7042 = cljs.core.first(seq__6257_7036__$1);
var elem_type_7043 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7042) : nex.typechecker.check_expression.call(null,env,elem_7042));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7043))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7043))))], null));
}


var G__7044 = cljs.core.next(seq__6257_7036__$1);
var G__7045 = null;
var G__7046 = (0);
var G__7047 = (0);
seq__6257_7025 = G__7044;
chunk__6258_7026 = G__7045;
count__6259_7027 = G__7046;
i__6260_7028 = G__7047;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6261){
var map__6262 = p__6261;
var map__6262__$1 = cljs.core.__destructure_map(map__6262);
var expr = map__6262__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6262__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6263 = env;
var G__6264 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6263,G__6264) : nex.typechecker.check_expression.call(null,G__6263,G__6264));
})();
var val_type = (function (){var G__6265 = env;
var G__6266 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6265,G__6266) : nex.typechecker.check_expression.call(null,G__6265,G__6266));
})();
var seq__6267_7048 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6268_7049 = null;
var count__6269_7050 = (0);
var i__6270_7051 = (0);
while(true){
if((i__6270_7051 < count__6269_7050)){
var entry_7052 = chunk__6268_7049.cljs$core$IIndexed$_nth$arity$2(null,i__6270_7051);
var k_type_7053 = (function (){var G__6279 = env;
var G__6280 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7052);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6279,G__6280) : nex.typechecker.check_expression.call(null,G__6279,G__6280));
})();
var v_type_7054 = (function (){var G__6281 = env;
var G__6282 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7052);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6281,G__6282) : nex.typechecker.check_expression.call(null,G__6281,G__6282));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7053);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7054);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7055 = seq__6267_7048;
var G__7056 = chunk__6268_7049;
var G__7057 = count__6269_7050;
var G__7058 = (i__6270_7051 + (1));
seq__6267_7048 = G__7055;
chunk__6268_7049 = G__7056;
count__6269_7050 = G__7057;
i__6270_7051 = G__7058;
continue;
} else {
var temp__5823__auto___7059 = cljs.core.seq(seq__6267_7048);
if(temp__5823__auto___7059){
var seq__6267_7060__$1 = temp__5823__auto___7059;
if(cljs.core.chunked_seq_QMARK_(seq__6267_7060__$1)){
var c__5673__auto___7061 = cljs.core.chunk_first(seq__6267_7060__$1);
var G__7062 = cljs.core.chunk_rest(seq__6267_7060__$1);
var G__7063 = c__5673__auto___7061;
var G__7064 = cljs.core.count(c__5673__auto___7061);
var G__7065 = (0);
seq__6267_7048 = G__7062;
chunk__6268_7049 = G__7063;
count__6269_7050 = G__7064;
i__6270_7051 = G__7065;
continue;
} else {
var entry_7066 = cljs.core.first(seq__6267_7060__$1);
var k_type_7067 = (function (){var G__6283 = env;
var G__6284 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7066);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6283,G__6284) : nex.typechecker.check_expression.call(null,G__6283,G__6284));
})();
var v_type_7068 = (function (){var G__6285 = env;
var G__6286 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7066);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6285,G__6286) : nex.typechecker.check_expression.call(null,G__6285,G__6286));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7067);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7068);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7069 = cljs.core.next(seq__6267_7060__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__6267_7048 = G__7069;
chunk__6268_7049 = G__7070;
count__6269_7050 = G__7071;
i__6270_7051 = G__7072;
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
var G__6287 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6287__$1 = (((G__6287 instanceof cljs.core.Keyword))?G__6287.fqn:null);
switch (G__6287__$1) {
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
var target_type = (function (){var G__6288 = env;
var G__6289 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6288,G__6289) : nex.typechecker.check_expression.call(null,G__6288,G__6289));
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
var cond_type = (function (){var G__6290 = env;
var G__6291 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6290,G__6291) : nex.typechecker.check_expression.call(null,G__6290,G__6291));
})();
var cons_type = (function (){var G__6292 = env;
var G__6293 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6292,G__6293) : nex.typechecker.check_expression.call(null,G__6292,G__6293));
})();
var alt_type = (function (){var G__6294 = env;
var G__6295 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6294,G__6295) : nex.typechecker.check_expression.call(null,G__6294,G__6295));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6296 = env;
var G__6297 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6296,G__6297) : nex.typechecker.check_expression.call(null,G__6296,G__6297));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6298){
var map__6299 = p__6298;
var map__6299__$1 = cljs.core.__destructure_map(map__6299);
var stmt = map__6299__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6299__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6299__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6300){
var map__6301 = p__6300;
var map__6301__$1 = cljs.core.__destructure_map(map__6301);
var stmt = map__6301__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6301__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6301__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6302){
var map__6303 = p__6302;
var map__6303__$1 = cljs.core.__destructure_map(map__6303);
var stmt = map__6303__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6303__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_7076 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7076,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7076)))], null));
}

var then_env_7077 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7078 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___7078)){
var non_nil_var_7079 = temp__5823__auto___7078;
nex.typechecker.env_mark_non_nil(then_env_7077,non_nil_var_7079);
} else {
}

var temp__5823__auto___7080 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___7080)){
var map__6304_7081 = temp__5823__auto___7080;
var map__6304_7082__$1 = cljs.core.__destructure_map(map__6304_7081);
var name_7083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6304_7082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6304_7082__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_7077,name_7083,type_7084);

nex.typechecker.env_mark_non_nil(then_env_7077,name_7083);
} else {
}

var seq__6305_7085 = cljs.core.seq(then);
var chunk__6306_7086 = null;
var count__6307_7087 = (0);
var i__6308_7088 = (0);
while(true){
if((i__6308_7088 < count__6307_7087)){
var stmt_7089__$1 = chunk__6306_7086.cljs$core$IIndexed$_nth$arity$2(null,i__6308_7088);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7077,stmt_7089__$1) : nex.typechecker.check_statement.call(null,then_env_7077,stmt_7089__$1));


var G__7090 = seq__6305_7085;
var G__7091 = chunk__6306_7086;
var G__7092 = count__6307_7087;
var G__7093 = (i__6308_7088 + (1));
seq__6305_7085 = G__7090;
chunk__6306_7086 = G__7091;
count__6307_7087 = G__7092;
i__6308_7088 = G__7093;
continue;
} else {
var temp__5823__auto___7094 = cljs.core.seq(seq__6305_7085);
if(temp__5823__auto___7094){
var seq__6305_7095__$1 = temp__5823__auto___7094;
if(cljs.core.chunked_seq_QMARK_(seq__6305_7095__$1)){
var c__5673__auto___7096 = cljs.core.chunk_first(seq__6305_7095__$1);
var G__7097 = cljs.core.chunk_rest(seq__6305_7095__$1);
var G__7098 = c__5673__auto___7096;
var G__7099 = cljs.core.count(c__5673__auto___7096);
var G__7100 = (0);
seq__6305_7085 = G__7097;
chunk__6306_7086 = G__7098;
count__6307_7087 = G__7099;
i__6308_7088 = G__7100;
continue;
} else {
var stmt_7101__$1 = cljs.core.first(seq__6305_7095__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7077,stmt_7101__$1) : nex.typechecker.check_statement.call(null,then_env_7077,stmt_7101__$1));


var G__7102 = cljs.core.next(seq__6305_7095__$1);
var G__7103 = null;
var G__7104 = (0);
var G__7105 = (0);
seq__6305_7085 = G__7102;
chunk__6306_7086 = G__7103;
count__6307_7087 = G__7104;
i__6308_7088 = G__7105;
continue;
}
} else {
}
}
break;
}

var seq__6309_7106 = cljs.core.seq(elseif);
var chunk__6310_7107 = null;
var count__6311_7108 = (0);
var i__6312_7109 = (0);
while(true){
if((i__6312_7109 < count__6311_7108)){
var clause_7110 = chunk__6310_7107.cljs$core$IIndexed$_nth$arity$2(null,i__6312_7109);
var ei_cond_type_7111 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7110));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7111,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7111)))], null));
}

var elseif_env_7112 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7113 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7110));
if(cljs.core.truth_(temp__5823__auto___7113)){
var non_nil_var_7114 = temp__5823__auto___7113;
nex.typechecker.env_mark_non_nil(elseif_env_7112,non_nil_var_7114);
} else {
}

var temp__5823__auto___7115 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7110));
if(cljs.core.truth_(temp__5823__auto___7115)){
var map__6323_7116 = temp__5823__auto___7115;
var map__6323_7117__$1 = cljs.core.__destructure_map(map__6323_7116);
var name_7118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6323_7117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6323_7117__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7112,name_7118,type_7119);

nex.typechecker.env_mark_non_nil(elseif_env_7112,name_7118);
} else {
}

var seq__6324_7120 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7110));
var chunk__6325_7121 = null;
var count__6326_7122 = (0);
var i__6327_7123 = (0);
while(true){
if((i__6327_7123 < count__6326_7122)){
var stmt_7124__$1 = chunk__6325_7121.cljs$core$IIndexed$_nth$arity$2(null,i__6327_7123);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7112,stmt_7124__$1) : nex.typechecker.check_statement.call(null,elseif_env_7112,stmt_7124__$1));


var G__7125 = seq__6324_7120;
var G__7126 = chunk__6325_7121;
var G__7127 = count__6326_7122;
var G__7128 = (i__6327_7123 + (1));
seq__6324_7120 = G__7125;
chunk__6325_7121 = G__7126;
count__6326_7122 = G__7127;
i__6327_7123 = G__7128;
continue;
} else {
var temp__5823__auto___7130 = cljs.core.seq(seq__6324_7120);
if(temp__5823__auto___7130){
var seq__6324_7131__$1 = temp__5823__auto___7130;
if(cljs.core.chunked_seq_QMARK_(seq__6324_7131__$1)){
var c__5673__auto___7132 = cljs.core.chunk_first(seq__6324_7131__$1);
var G__7133 = cljs.core.chunk_rest(seq__6324_7131__$1);
var G__7134 = c__5673__auto___7132;
var G__7135 = cljs.core.count(c__5673__auto___7132);
var G__7136 = (0);
seq__6324_7120 = G__7133;
chunk__6325_7121 = G__7134;
count__6326_7122 = G__7135;
i__6327_7123 = G__7136;
continue;
} else {
var stmt_7137__$1 = cljs.core.first(seq__6324_7131__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7112,stmt_7137__$1) : nex.typechecker.check_statement.call(null,elseif_env_7112,stmt_7137__$1));


var G__7138 = cljs.core.next(seq__6324_7131__$1);
var G__7139 = null;
var G__7140 = (0);
var G__7141 = (0);
seq__6324_7120 = G__7138;
chunk__6325_7121 = G__7139;
count__6326_7122 = G__7140;
i__6327_7123 = G__7141;
continue;
}
} else {
}
}
break;
}


var G__7142 = seq__6309_7106;
var G__7143 = chunk__6310_7107;
var G__7144 = count__6311_7108;
var G__7145 = (i__6312_7109 + (1));
seq__6309_7106 = G__7142;
chunk__6310_7107 = G__7143;
count__6311_7108 = G__7144;
i__6312_7109 = G__7145;
continue;
} else {
var temp__5823__auto___7146 = cljs.core.seq(seq__6309_7106);
if(temp__5823__auto___7146){
var seq__6309_7147__$1 = temp__5823__auto___7146;
if(cljs.core.chunked_seq_QMARK_(seq__6309_7147__$1)){
var c__5673__auto___7148 = cljs.core.chunk_first(seq__6309_7147__$1);
var G__7149 = cljs.core.chunk_rest(seq__6309_7147__$1);
var G__7150 = c__5673__auto___7148;
var G__7151 = cljs.core.count(c__5673__auto___7148);
var G__7152 = (0);
seq__6309_7106 = G__7149;
chunk__6310_7107 = G__7150;
count__6311_7108 = G__7151;
i__6312_7109 = G__7152;
continue;
} else {
var clause_7153 = cljs.core.first(seq__6309_7147__$1);
var ei_cond_type_7154 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7153));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7154,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7154)))], null));
}

var elseif_env_7155 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7156__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7153));
if(cljs.core.truth_(temp__5823__auto___7156__$1)){
var non_nil_var_7157 = temp__5823__auto___7156__$1;
nex.typechecker.env_mark_non_nil(elseif_env_7155,non_nil_var_7157);
} else {
}

var temp__5823__auto___7158__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7153));
if(cljs.core.truth_(temp__5823__auto___7158__$1)){
var map__6328_7159 = temp__5823__auto___7158__$1;
var map__6328_7160__$1 = cljs.core.__destructure_map(map__6328_7159);
var name_7161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6328_7160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6328_7160__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7155,name_7161,type_7162);

nex.typechecker.env_mark_non_nil(elseif_env_7155,name_7161);
} else {
}

var seq__6329_7163 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7153));
var chunk__6330_7164 = null;
var count__6331_7165 = (0);
var i__6332_7166 = (0);
while(true){
if((i__6332_7166 < count__6331_7165)){
var stmt_7169__$1 = chunk__6330_7164.cljs$core$IIndexed$_nth$arity$2(null,i__6332_7166);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7155,stmt_7169__$1) : nex.typechecker.check_statement.call(null,elseif_env_7155,stmt_7169__$1));


var G__7172 = seq__6329_7163;
var G__7173 = chunk__6330_7164;
var G__7174 = count__6331_7165;
var G__7175 = (i__6332_7166 + (1));
seq__6329_7163 = G__7172;
chunk__6330_7164 = G__7173;
count__6331_7165 = G__7174;
i__6332_7166 = G__7175;
continue;
} else {
var temp__5823__auto___7176__$1 = cljs.core.seq(seq__6329_7163);
if(temp__5823__auto___7176__$1){
var seq__6329_7177__$1 = temp__5823__auto___7176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6329_7177__$1)){
var c__5673__auto___7178 = cljs.core.chunk_first(seq__6329_7177__$1);
var G__7179 = cljs.core.chunk_rest(seq__6329_7177__$1);
var G__7180 = c__5673__auto___7178;
var G__7181 = cljs.core.count(c__5673__auto___7178);
var G__7182 = (0);
seq__6329_7163 = G__7179;
chunk__6330_7164 = G__7180;
count__6331_7165 = G__7181;
i__6332_7166 = G__7182;
continue;
} else {
var stmt_7183__$1 = cljs.core.first(seq__6329_7177__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7155,stmt_7183__$1) : nex.typechecker.check_statement.call(null,elseif_env_7155,stmt_7183__$1));


var G__7184 = cljs.core.next(seq__6329_7177__$1);
var G__7185 = null;
var G__7186 = (0);
var G__7187 = (0);
seq__6329_7163 = G__7184;
chunk__6330_7164 = G__7185;
count__6331_7165 = G__7186;
i__6332_7166 = G__7187;
continue;
}
} else {
}
}
break;
}


var G__7188 = cljs.core.next(seq__6309_7147__$1);
var G__7189 = null;
var G__7190 = (0);
var G__7191 = (0);
seq__6309_7106 = G__7188;
chunk__6310_7107 = G__7189;
count__6311_7108 = G__7190;
i__6312_7109 = G__7191;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6333 = cljs.core.seq(else$);
var chunk__6334 = null;
var count__6335 = (0);
var i__6336 = (0);
while(true){
if((i__6336 < count__6335)){
var stmt__$1 = chunk__6334.cljs$core$IIndexed$_nth$arity$2(null,i__6336);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7192 = seq__6333;
var G__7193 = chunk__6334;
var G__7194 = count__6335;
var G__7195 = (i__6336 + (1));
seq__6333 = G__7192;
chunk__6334 = G__7193;
count__6335 = G__7194;
i__6336 = G__7195;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6333);
if(temp__5823__auto__){
var seq__6333__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6333__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6333__$1);
var G__7196 = cljs.core.chunk_rest(seq__6333__$1);
var G__7197 = c__5673__auto__;
var G__7198 = cljs.core.count(c__5673__auto__);
var G__7199 = (0);
seq__6333 = G__7196;
chunk__6334 = G__7197;
count__6335 = G__7198;
i__6336 = G__7199;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6333__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7200 = cljs.core.next(seq__6333__$1);
var G__7201 = null;
var G__7202 = (0);
var G__7203 = (0);
seq__6333 = G__7200;
chunk__6334 = G__7201;
count__6335 = G__7202;
i__6336 = G__7203;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6337){
var map__6338 = p__6337;
var map__6338__$1 = cljs.core.__destructure_map(map__6338);
var stmt = map__6338__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6339_7204 = cljs.core.seq(init);
var chunk__6340_7205 = null;
var count__6341_7206 = (0);
var i__6342_7207 = (0);
while(true){
if((i__6342_7207 < count__6341_7206)){
var s_7208 = chunk__6340_7205.cljs$core$IIndexed$_nth$arity$2(null,i__6342_7207);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7208) : nex.typechecker.check_statement.call(null,loop_env,s_7208));


var G__7209 = seq__6339_7204;
var G__7210 = chunk__6340_7205;
var G__7211 = count__6341_7206;
var G__7212 = (i__6342_7207 + (1));
seq__6339_7204 = G__7209;
chunk__6340_7205 = G__7210;
count__6341_7206 = G__7211;
i__6342_7207 = G__7212;
continue;
} else {
var temp__5823__auto___7213 = cljs.core.seq(seq__6339_7204);
if(temp__5823__auto___7213){
var seq__6339_7214__$1 = temp__5823__auto___7213;
if(cljs.core.chunked_seq_QMARK_(seq__6339_7214__$1)){
var c__5673__auto___7215 = cljs.core.chunk_first(seq__6339_7214__$1);
var G__7216 = cljs.core.chunk_rest(seq__6339_7214__$1);
var G__7217 = c__5673__auto___7215;
var G__7218 = cljs.core.count(c__5673__auto___7215);
var G__7219 = (0);
seq__6339_7204 = G__7216;
chunk__6340_7205 = G__7217;
count__6341_7206 = G__7218;
i__6342_7207 = G__7219;
continue;
} else {
var s_7220 = cljs.core.first(seq__6339_7214__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7220) : nex.typechecker.check_statement.call(null,loop_env,s_7220));


var G__7221 = cljs.core.next(seq__6339_7214__$1);
var G__7222 = null;
var G__7223 = (0);
var G__7224 = (0);
seq__6339_7204 = G__7221;
chunk__6340_7205 = G__7222;
count__6341_7206 = G__7223;
i__6342_7207 = G__7224;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_7225 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7225,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7225,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7225)))], null));
}
} else {
}

var seq__6343 = cljs.core.seq(body);
var chunk__6344 = null;
var count__6345 = (0);
var i__6346 = (0);
while(true){
if((i__6346 < count__6345)){
var stmt__$1 = chunk__6344.cljs$core$IIndexed$_nth$arity$2(null,i__6346);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7226 = seq__6343;
var G__7227 = chunk__6344;
var G__7228 = count__6345;
var G__7229 = (i__6346 + (1));
seq__6343 = G__7226;
chunk__6344 = G__7227;
count__6345 = G__7228;
i__6346 = G__7229;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6343);
if(temp__5823__auto__){
var seq__6343__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6343__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6343__$1);
var G__7230 = cljs.core.chunk_rest(seq__6343__$1);
var G__7231 = c__5673__auto__;
var G__7232 = cljs.core.count(c__5673__auto__);
var G__7233 = (0);
seq__6343 = G__7230;
chunk__6344 = G__7231;
count__6345 = G__7232;
i__6346 = G__7233;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6343__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7234 = cljs.core.next(seq__6343__$1);
var G__7235 = null;
var G__7236 = (0);
var G__7237 = (0);
seq__6343 = G__7234;
chunk__6344 = G__7235;
count__6345 = G__7236;
i__6346 = G__7237;
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
var G__6347 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6347__$1 = (((G__6347 instanceof cljs.core.Keyword))?G__6347.fqn:null);
switch (G__6347__$1) {
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
var block_env_7240 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6348_7241 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6349_7242 = null;
var count__6350_7243 = (0);
var i__6351_7244 = (0);
while(true){
if((i__6351_7244 < count__6350_7243)){
var s_7245 = chunk__6349_7242.cljs$core$IIndexed$_nth$arity$2(null,i__6351_7244);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7240,s_7245) : nex.typechecker.check_statement.call(null,block_env_7240,s_7245));


var G__7246 = seq__6348_7241;
var G__7247 = chunk__6349_7242;
var G__7248 = count__6350_7243;
var G__7249 = (i__6351_7244 + (1));
seq__6348_7241 = G__7246;
chunk__6349_7242 = G__7247;
count__6350_7243 = G__7248;
i__6351_7244 = G__7249;
continue;
} else {
var temp__5823__auto___7250 = cljs.core.seq(seq__6348_7241);
if(temp__5823__auto___7250){
var seq__6348_7251__$1 = temp__5823__auto___7250;
if(cljs.core.chunked_seq_QMARK_(seq__6348_7251__$1)){
var c__5673__auto___7252 = cljs.core.chunk_first(seq__6348_7251__$1);
var G__7253 = cljs.core.chunk_rest(seq__6348_7251__$1);
var G__7254 = c__5673__auto___7252;
var G__7255 = cljs.core.count(c__5673__auto___7252);
var G__7256 = (0);
seq__6348_7241 = G__7253;
chunk__6349_7242 = G__7254;
count__6350_7243 = G__7255;
i__6351_7244 = G__7256;
continue;
} else {
var s_7257 = cljs.core.first(seq__6348_7251__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7240,s_7257) : nex.typechecker.check_statement.call(null,block_env_7240,s_7257));


var G__7258 = cljs.core.next(seq__6348_7251__$1);
var G__7259 = null;
var G__7260 = (0);
var G__7261 = (0);
seq__6348_7241 = G__7258;
chunk__6349_7242 = G__7259;
count__6350_7243 = G__7260;
i__6351_7244 = G__7261;
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

var seq__6352 = cljs.core.seq(rescue);
var chunk__6353 = null;
var count__6354 = (0);
var i__6355 = (0);
while(true){
if((i__6355 < count__6354)){
var s = chunk__6353.cljs$core$IIndexed$_nth$arity$2(null,i__6355);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7262 = seq__6352;
var G__7263 = chunk__6353;
var G__7264 = count__6354;
var G__7265 = (i__6355 + (1));
seq__6352 = G__7262;
chunk__6353 = G__7263;
count__6354 = G__7264;
i__6355 = G__7265;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6352);
if(temp__5823__auto____$1){
var seq__6352__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6352__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6352__$1);
var G__7266 = cljs.core.chunk_rest(seq__6352__$1);
var G__7267 = c__5673__auto__;
var G__7268 = cljs.core.count(c__5673__auto__);
var G__7269 = (0);
seq__6352 = G__7266;
chunk__6353 = G__7267;
count__6354 = G__7268;
i__6355 = G__7269;
continue;
} else {
var s = cljs.core.first(seq__6352__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7270 = cljs.core.next(seq__6352__$1);
var G__7271 = null;
var G__7272 = (0);
var G__7273 = (0);
seq__6352 = G__7270;
chunk__6353 = G__7271;
count__6354 = G__7272;
i__6355 = G__7273;
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
var seq__6356 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6357 = null;
var count__6358 = (0);
var i__6359 = (0);
while(true){
if((i__6359 < count__6358)){
var s = chunk__6357.cljs$core$IIndexed$_nth$arity$2(null,i__6359);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7278 = seq__6356;
var G__7279 = chunk__6357;
var G__7280 = count__6358;
var G__7281 = (i__6359 + (1));
seq__6356 = G__7278;
chunk__6357 = G__7279;
count__6358 = G__7280;
i__6359 = G__7281;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6356);
if(temp__5823__auto__){
var seq__6356__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6356__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6356__$1);
var G__7282 = cljs.core.chunk_rest(seq__6356__$1);
var G__7283 = c__5673__auto__;
var G__7284 = cljs.core.count(c__5673__auto__);
var G__7285 = (0);
seq__6356 = G__7282;
chunk__6357 = G__7283;
count__6358 = G__7284;
i__6359 = G__7285;
continue;
} else {
var s = cljs.core.first(seq__6356__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7286 = cljs.core.next(seq__6356__$1);
var G__7287 = null;
var G__7288 = (0);
var G__7289 = (0);
seq__6356 = G__7286;
chunk__6357 = G__7287;
count__6358 = G__7288;
i__6359 = G__7289;
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

var seq__6360_7290 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6361_7291 = null;
var count__6362_7292 = (0);
var i__6363_7293 = (0);
while(true){
if((i__6363_7293 < count__6362_7292)){
var clause_7294 = chunk__6361_7291.cljs$core$IIndexed$_nth$arity$2(null,i__6363_7293);
var G__6368_7295 = env;
var G__6369_7296 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7294);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6368_7295,G__6369_7296) : nex.typechecker.check_statement.call(null,G__6368_7295,G__6369_7296));


var G__7297 = seq__6360_7290;
var G__7298 = chunk__6361_7291;
var G__7299 = count__6362_7292;
var G__7300 = (i__6363_7293 + (1));
seq__6360_7290 = G__7297;
chunk__6361_7291 = G__7298;
count__6362_7292 = G__7299;
i__6363_7293 = G__7300;
continue;
} else {
var temp__5823__auto___7301 = cljs.core.seq(seq__6360_7290);
if(temp__5823__auto___7301){
var seq__6360_7302__$1 = temp__5823__auto___7301;
if(cljs.core.chunked_seq_QMARK_(seq__6360_7302__$1)){
var c__5673__auto___7303 = cljs.core.chunk_first(seq__6360_7302__$1);
var G__7304 = cljs.core.chunk_rest(seq__6360_7302__$1);
var G__7305 = c__5673__auto___7303;
var G__7306 = cljs.core.count(c__5673__auto___7303);
var G__7307 = (0);
seq__6360_7290 = G__7304;
chunk__6361_7291 = G__7305;
count__6362_7292 = G__7306;
i__6363_7293 = G__7307;
continue;
} else {
var clause_7308 = cljs.core.first(seq__6360_7302__$1);
var G__6370_7309 = env;
var G__6371_7310 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7308);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6370_7309,G__6371_7310) : nex.typechecker.check_statement.call(null,G__6370_7309,G__6371_7310));


var G__7311 = cljs.core.next(seq__6360_7302__$1);
var G__7312 = null;
var G__7313 = (0);
var G__7314 = (0);
seq__6360_7290 = G__7311;
chunk__6361_7291 = G__7312;
count__6362_7292 = G__7313;
i__6363_7293 = G__7314;
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
var G__6372 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6372__$1 = (((G__6372 instanceof cljs.core.Keyword))?G__6372.fqn:null);
switch (G__6372__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6373 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6373) : nex.typechecker.references_result_QMARK_.call(null,G__6373));
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
var G__6374 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6374) : nex.typechecker.references_result_QMARK_.call(null,G__6374));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6376){
var map__6377 = p__6376;
var map__6377__$1 = cljs.core.__destructure_map(map__6377);
var method = map__6377__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6377__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6378_7318 = cljs.core.seq(params);
var chunk__6379_7319 = null;
var count__6380_7320 = (0);
var i__6381_7321 = (0);
while(true){
if((i__6381_7321 < count__6380_7320)){
var param_7326 = chunk__6379_7319.cljs$core$IIndexed$_nth$arity$2(null,i__6381_7321);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7326))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7326));
} else {
}


var G__7327 = seq__6378_7318;
var G__7328 = chunk__6379_7319;
var G__7329 = count__6380_7320;
var G__7330 = (i__6381_7321 + (1));
seq__6378_7318 = G__7327;
chunk__6379_7319 = G__7328;
count__6380_7320 = G__7329;
i__6381_7321 = G__7330;
continue;
} else {
var temp__5823__auto___7331 = cljs.core.seq(seq__6378_7318);
if(temp__5823__auto___7331){
var seq__6378_7332__$1 = temp__5823__auto___7331;
if(cljs.core.chunked_seq_QMARK_(seq__6378_7332__$1)){
var c__5673__auto___7333 = cljs.core.chunk_first(seq__6378_7332__$1);
var G__7334 = cljs.core.chunk_rest(seq__6378_7332__$1);
var G__7335 = c__5673__auto___7333;
var G__7336 = cljs.core.count(c__5673__auto___7333);
var G__7337 = (0);
seq__6378_7318 = G__7334;
chunk__6379_7319 = G__7335;
count__6380_7320 = G__7336;
i__6381_7321 = G__7337;
continue;
} else {
var param_7338 = cljs.core.first(seq__6378_7332__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7338))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7338));
} else {
}


var G__7339 = cljs.core.next(seq__6378_7332__$1);
var G__7340 = null;
var G__7341 = (0);
var G__7342 = (0);
seq__6378_7318 = G__7339;
chunk__6379_7319 = G__7340;
count__6380_7320 = G__7341;
i__6381_7321 = G__7342;
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
return cljs.core.some((function (p1__6375_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6375_SHARP_));
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

var seq__6382_7343 = cljs.core.seq(params);
var chunk__6383_7344 = null;
var count__6384_7345 = (0);
var i__6385_7346 = (0);
while(true){
if((i__6385_7346 < count__6384_7345)){
var param_7347 = chunk__6383_7344.cljs$core$IIndexed$_nth$arity$2(null,i__6385_7346);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7347),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7347);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7348 = seq__6382_7343;
var G__7349 = chunk__6383_7344;
var G__7350 = count__6384_7345;
var G__7351 = (i__6385_7346 + (1));
seq__6382_7343 = G__7348;
chunk__6383_7344 = G__7349;
count__6384_7345 = G__7350;
i__6385_7346 = G__7351;
continue;
} else {
var temp__5823__auto___7352 = cljs.core.seq(seq__6382_7343);
if(temp__5823__auto___7352){
var seq__6382_7355__$1 = temp__5823__auto___7352;
if(cljs.core.chunked_seq_QMARK_(seq__6382_7355__$1)){
var c__5673__auto___7356 = cljs.core.chunk_first(seq__6382_7355__$1);
var G__7357 = cljs.core.chunk_rest(seq__6382_7355__$1);
var G__7358 = c__5673__auto___7356;
var G__7359 = cljs.core.count(c__5673__auto___7356);
var G__7360 = (0);
seq__6382_7343 = G__7357;
chunk__6383_7344 = G__7358;
count__6384_7345 = G__7359;
i__6385_7346 = G__7360;
continue;
} else {
var param_7362 = cljs.core.first(seq__6382_7355__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7362),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7362);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7363 = cljs.core.next(seq__6382_7355__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__6382_7343 = G__7363;
chunk__6383_7344 = G__7364;
count__6384_7345 = G__7365;
i__6385_7346 = G__7366;
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

var seq__6386_7367 = cljs.core.seq(require__$1);
var chunk__6387_7368 = null;
var count__6388_7369 = (0);
var i__6389_7370 = (0);
while(true){
if((i__6389_7370 < count__6388_7369)){
var assertion_7371 = chunk__6387_7368.cljs$core$IIndexed$_nth$arity$2(null,i__6389_7370);
var cond_type_7372 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7371));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7372,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7372)))], null));
}


var G__7373 = seq__6386_7367;
var G__7374 = chunk__6387_7368;
var G__7375 = count__6388_7369;
var G__7376 = (i__6389_7370 + (1));
seq__6386_7367 = G__7373;
chunk__6387_7368 = G__7374;
count__6388_7369 = G__7375;
i__6389_7370 = G__7376;
continue;
} else {
var temp__5823__auto___7377 = cljs.core.seq(seq__6386_7367);
if(temp__5823__auto___7377){
var seq__6386_7378__$1 = temp__5823__auto___7377;
if(cljs.core.chunked_seq_QMARK_(seq__6386_7378__$1)){
var c__5673__auto___7379 = cljs.core.chunk_first(seq__6386_7378__$1);
var G__7380 = cljs.core.chunk_rest(seq__6386_7378__$1);
var G__7381 = c__5673__auto___7379;
var G__7382 = cljs.core.count(c__5673__auto___7379);
var G__7383 = (0);
seq__6386_7367 = G__7380;
chunk__6387_7368 = G__7381;
count__6388_7369 = G__7382;
i__6389_7370 = G__7383;
continue;
} else {
var assertion_7384 = cljs.core.first(seq__6386_7378__$1);
var cond_type_7385 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7384));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7385,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7385)))], null));
}


var G__7386 = cljs.core.next(seq__6386_7378__$1);
var G__7387 = null;
var G__7388 = (0);
var G__7389 = (0);
seq__6386_7367 = G__7386;
chunk__6387_7368 = G__7387;
count__6388_7369 = G__7388;
i__6389_7370 = G__7389;
continue;
}
} else {
}
}
break;
}

var seq__6390_7391 = cljs.core.seq(body);
var chunk__6391_7392 = null;
var count__6392_7393 = (0);
var i__6393_7394 = (0);
while(true){
if((i__6393_7394 < count__6392_7393)){
var stmt_7395 = chunk__6391_7392.cljs$core$IIndexed$_nth$arity$2(null,i__6393_7394);
nex.typechecker.check_statement(method_env,stmt_7395);


var G__7396 = seq__6390_7391;
var G__7397 = chunk__6391_7392;
var G__7398 = count__6392_7393;
var G__7399 = (i__6393_7394 + (1));
seq__6390_7391 = G__7396;
chunk__6391_7392 = G__7397;
count__6392_7393 = G__7398;
i__6393_7394 = G__7399;
continue;
} else {
var temp__5823__auto___7400 = cljs.core.seq(seq__6390_7391);
if(temp__5823__auto___7400){
var seq__6390_7401__$1 = temp__5823__auto___7400;
if(cljs.core.chunked_seq_QMARK_(seq__6390_7401__$1)){
var c__5673__auto___7402 = cljs.core.chunk_first(seq__6390_7401__$1);
var G__7403 = cljs.core.chunk_rest(seq__6390_7401__$1);
var G__7404 = c__5673__auto___7402;
var G__7405 = cljs.core.count(c__5673__auto___7402);
var G__7406 = (0);
seq__6390_7391 = G__7403;
chunk__6391_7392 = G__7404;
count__6392_7393 = G__7405;
i__6393_7394 = G__7406;
continue;
} else {
var stmt_7408 = cljs.core.first(seq__6390_7401__$1);
nex.typechecker.check_statement(method_env,stmt_7408);


var G__7409 = cljs.core.next(seq__6390_7401__$1);
var G__7410 = null;
var G__7411 = (0);
var G__7412 = (0);
seq__6390_7391 = G__7409;
chunk__6391_7392 = G__7410;
count__6392_7393 = G__7411;
i__6393_7394 = G__7412;
continue;
}
} else {
}
}
break;
}

var seq__6394_7413 = cljs.core.seq(ensure);
var chunk__6395_7414 = null;
var count__6396_7415 = (0);
var i__6397_7416 = (0);
while(true){
if((i__6397_7416 < count__6396_7415)){
var assertion_7417 = chunk__6395_7414.cljs$core$IIndexed$_nth$arity$2(null,i__6397_7416);
var cond_type_7418 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7417));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7418,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7418)))], null));
}


var G__7419 = seq__6394_7413;
var G__7420 = chunk__6395_7414;
var G__7421 = count__6396_7415;
var G__7422 = (i__6397_7416 + (1));
seq__6394_7413 = G__7419;
chunk__6395_7414 = G__7420;
count__6396_7415 = G__7421;
i__6397_7416 = G__7422;
continue;
} else {
var temp__5823__auto___7423 = cljs.core.seq(seq__6394_7413);
if(temp__5823__auto___7423){
var seq__6394_7424__$1 = temp__5823__auto___7423;
if(cljs.core.chunked_seq_QMARK_(seq__6394_7424__$1)){
var c__5673__auto___7425 = cljs.core.chunk_first(seq__6394_7424__$1);
var G__7426 = cljs.core.chunk_rest(seq__6394_7424__$1);
var G__7427 = c__5673__auto___7425;
var G__7428 = cljs.core.count(c__5673__auto___7425);
var G__7429 = (0);
seq__6394_7413 = G__7426;
chunk__6395_7414 = G__7427;
count__6396_7415 = G__7428;
i__6397_7416 = G__7429;
continue;
} else {
var assertion_7430 = cljs.core.first(seq__6394_7424__$1);
var cond_type_7431 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7430));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7431,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7431)))], null));
}


var G__7432 = cljs.core.next(seq__6394_7424__$1);
var G__7433 = null;
var G__7434 = (0);
var G__7435 = (0);
seq__6394_7413 = G__7432;
chunk__6395_7414 = G__7433;
count__6396_7415 = G__7434;
i__6397_7416 = G__7435;
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

var seq__6398 = cljs.core.seq(rescue);
var chunk__6399 = null;
var count__6400 = (0);
var i__6401 = (0);
while(true){
if((i__6401 < count__6400)){
var stmt = chunk__6399.cljs$core$IIndexed$_nth$arity$2(null,i__6401);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7436 = seq__6398;
var G__7437 = chunk__6399;
var G__7438 = count__6400;
var G__7439 = (i__6401 + (1));
seq__6398 = G__7436;
chunk__6399 = G__7437;
count__6400 = G__7438;
i__6401 = G__7439;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6398);
if(temp__5823__auto__){
var seq__6398__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6398__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6398__$1);
var G__7440 = cljs.core.chunk_rest(seq__6398__$1);
var G__7441 = c__5673__auto__;
var G__7442 = cljs.core.count(c__5673__auto__);
var G__7443 = (0);
seq__6398 = G__7440;
chunk__6399 = G__7441;
count__6400 = G__7442;
i__6401 = G__7443;
continue;
} else {
var stmt = cljs.core.first(seq__6398__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7444 = cljs.core.next(seq__6398__$1);
var G__7445 = null;
var G__7446 = (0);
var G__7447 = (0);
seq__6398 = G__7444;
chunk__6399 = G__7445;
count__6400 = G__7446;
i__6401 = G__7447;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6402){
var map__6403 = p__6402;
var map__6403__$1 = cljs.core.__destructure_map(map__6403);
var constructor$ = map__6403__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6403__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6404_7449 = cljs.core.seq(params);
var chunk__6405_7450 = null;
var count__6406_7451 = (0);
var i__6407_7452 = (0);
while(true){
if((i__6407_7452 < count__6406_7451)){
var param_7453 = chunk__6405_7450.cljs$core$IIndexed$_nth$arity$2(null,i__6407_7452);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7453))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7453));
} else {
}


var G__7454 = seq__6404_7449;
var G__7455 = chunk__6405_7450;
var G__7456 = count__6406_7451;
var G__7457 = (i__6407_7452 + (1));
seq__6404_7449 = G__7454;
chunk__6405_7450 = G__7455;
count__6406_7451 = G__7456;
i__6407_7452 = G__7457;
continue;
} else {
var temp__5823__auto___7458 = cljs.core.seq(seq__6404_7449);
if(temp__5823__auto___7458){
var seq__6404_7459__$1 = temp__5823__auto___7458;
if(cljs.core.chunked_seq_QMARK_(seq__6404_7459__$1)){
var c__5673__auto___7460 = cljs.core.chunk_first(seq__6404_7459__$1);
var G__7461 = cljs.core.chunk_rest(seq__6404_7459__$1);
var G__7462 = c__5673__auto___7460;
var G__7463 = cljs.core.count(c__5673__auto___7460);
var G__7464 = (0);
seq__6404_7449 = G__7461;
chunk__6405_7450 = G__7462;
count__6406_7451 = G__7463;
i__6407_7452 = G__7464;
continue;
} else {
var param_7465 = cljs.core.first(seq__6404_7459__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7465))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7465));
} else {
}


var G__7466 = cljs.core.next(seq__6404_7459__$1);
var G__7467 = null;
var G__7468 = (0);
var G__7469 = (0);
seq__6404_7449 = G__7466;
chunk__6405_7450 = G__7467;
count__6406_7451 = G__7468;
i__6407_7452 = G__7469;
continue;
}
} else {
}
}
break;
}

var seq__6408_7470 = cljs.core.seq(params);
var chunk__6409_7471 = null;
var count__6410_7472 = (0);
var i__6411_7473 = (0);
while(true){
if((i__6411_7473 < count__6410_7472)){
var param_7474 = chunk__6409_7471.cljs$core$IIndexed$_nth$arity$2(null,i__6411_7473);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7474),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7474);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7475 = seq__6408_7470;
var G__7476 = chunk__6409_7471;
var G__7477 = count__6410_7472;
var G__7478 = (i__6411_7473 + (1));
seq__6408_7470 = G__7475;
chunk__6409_7471 = G__7476;
count__6410_7472 = G__7477;
i__6411_7473 = G__7478;
continue;
} else {
var temp__5823__auto___7479 = cljs.core.seq(seq__6408_7470);
if(temp__5823__auto___7479){
var seq__6408_7480__$1 = temp__5823__auto___7479;
if(cljs.core.chunked_seq_QMARK_(seq__6408_7480__$1)){
var c__5673__auto___7481 = cljs.core.chunk_first(seq__6408_7480__$1);
var G__7482 = cljs.core.chunk_rest(seq__6408_7480__$1);
var G__7483 = c__5673__auto___7481;
var G__7484 = cljs.core.count(c__5673__auto___7481);
var G__7485 = (0);
seq__6408_7470 = G__7482;
chunk__6409_7471 = G__7483;
count__6410_7472 = G__7484;
i__6411_7473 = G__7485;
continue;
} else {
var param_7486 = cljs.core.first(seq__6408_7480__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7486),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7486);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7487 = cljs.core.next(seq__6408_7480__$1);
var G__7488 = null;
var G__7489 = (0);
var G__7490 = (0);
seq__6408_7470 = G__7487;
chunk__6409_7471 = G__7488;
count__6410_7472 = G__7489;
i__6411_7473 = G__7490;
continue;
}
} else {
}
}
break;
}

var seq__6412_7491 = cljs.core.seq(require__$1);
var chunk__6413_7492 = null;
var count__6414_7493 = (0);
var i__6415_7494 = (0);
while(true){
if((i__6415_7494 < count__6414_7493)){
var assertion_7495 = chunk__6413_7492.cljs$core$IIndexed$_nth$arity$2(null,i__6415_7494);
if(cljs.core.truth_(assertion_7495)){
var cond_type_7496 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7495));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7496,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7496)))], null));
}
} else {
}


var G__7497 = seq__6412_7491;
var G__7498 = chunk__6413_7492;
var G__7499 = count__6414_7493;
var G__7500 = (i__6415_7494 + (1));
seq__6412_7491 = G__7497;
chunk__6413_7492 = G__7498;
count__6414_7493 = G__7499;
i__6415_7494 = G__7500;
continue;
} else {
var temp__5823__auto___7501 = cljs.core.seq(seq__6412_7491);
if(temp__5823__auto___7501){
var seq__6412_7502__$1 = temp__5823__auto___7501;
if(cljs.core.chunked_seq_QMARK_(seq__6412_7502__$1)){
var c__5673__auto___7503 = cljs.core.chunk_first(seq__6412_7502__$1);
var G__7504 = cljs.core.chunk_rest(seq__6412_7502__$1);
var G__7505 = c__5673__auto___7503;
var G__7506 = cljs.core.count(c__5673__auto___7503);
var G__7507 = (0);
seq__6412_7491 = G__7504;
chunk__6413_7492 = G__7505;
count__6414_7493 = G__7506;
i__6415_7494 = G__7507;
continue;
} else {
var assertion_7508 = cljs.core.first(seq__6412_7502__$1);
if(cljs.core.truth_(assertion_7508)){
var cond_type_7509 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7508));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7509,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7509)))], null));
}
} else {
}


var G__7510 = cljs.core.next(seq__6412_7502__$1);
var G__7511 = null;
var G__7512 = (0);
var G__7513 = (0);
seq__6412_7491 = G__7510;
chunk__6413_7492 = G__7511;
count__6414_7493 = G__7512;
i__6415_7494 = G__7513;
continue;
}
} else {
}
}
break;
}

var seq__6416_7514 = cljs.core.seq(body);
var chunk__6417_7515 = null;
var count__6418_7516 = (0);
var i__6419_7517 = (0);
while(true){
if((i__6419_7517 < count__6418_7516)){
var stmt_7518 = chunk__6417_7515.cljs$core$IIndexed$_nth$arity$2(null,i__6419_7517);
nex.typechecker.check_statement(ctor_env,stmt_7518);


var G__7519 = seq__6416_7514;
var G__7520 = chunk__6417_7515;
var G__7521 = count__6418_7516;
var G__7522 = (i__6419_7517 + (1));
seq__6416_7514 = G__7519;
chunk__6417_7515 = G__7520;
count__6418_7516 = G__7521;
i__6419_7517 = G__7522;
continue;
} else {
var temp__5823__auto___7523 = cljs.core.seq(seq__6416_7514);
if(temp__5823__auto___7523){
var seq__6416_7524__$1 = temp__5823__auto___7523;
if(cljs.core.chunked_seq_QMARK_(seq__6416_7524__$1)){
var c__5673__auto___7525 = cljs.core.chunk_first(seq__6416_7524__$1);
var G__7526 = cljs.core.chunk_rest(seq__6416_7524__$1);
var G__7527 = c__5673__auto___7525;
var G__7528 = cljs.core.count(c__5673__auto___7525);
var G__7529 = (0);
seq__6416_7514 = G__7526;
chunk__6417_7515 = G__7527;
count__6418_7516 = G__7528;
i__6419_7517 = G__7529;
continue;
} else {
var stmt_7530 = cljs.core.first(seq__6416_7524__$1);
nex.typechecker.check_statement(ctor_env,stmt_7530);


var G__7531 = cljs.core.next(seq__6416_7524__$1);
var G__7532 = null;
var G__7533 = (0);
var G__7534 = (0);
seq__6416_7514 = G__7531;
chunk__6417_7515 = G__7532;
count__6418_7516 = G__7533;
i__6419_7517 = G__7534;
continue;
}
} else {
}
}
break;
}

var seq__6420_7535 = cljs.core.seq(ensure);
var chunk__6421_7536 = null;
var count__6422_7537 = (0);
var i__6423_7538 = (0);
while(true){
if((i__6423_7538 < count__6422_7537)){
var assertion_7539 = chunk__6421_7536.cljs$core$IIndexed$_nth$arity$2(null,i__6423_7538);
if(cljs.core.truth_(assertion_7539)){
var cond_type_7540 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7539));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7540,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7540)))], null));
}
} else {
}


var G__7541 = seq__6420_7535;
var G__7542 = chunk__6421_7536;
var G__7543 = count__6422_7537;
var G__7544 = (i__6423_7538 + (1));
seq__6420_7535 = G__7541;
chunk__6421_7536 = G__7542;
count__6422_7537 = G__7543;
i__6423_7538 = G__7544;
continue;
} else {
var temp__5823__auto___7545 = cljs.core.seq(seq__6420_7535);
if(temp__5823__auto___7545){
var seq__6420_7546__$1 = temp__5823__auto___7545;
if(cljs.core.chunked_seq_QMARK_(seq__6420_7546__$1)){
var c__5673__auto___7547 = cljs.core.chunk_first(seq__6420_7546__$1);
var G__7548 = cljs.core.chunk_rest(seq__6420_7546__$1);
var G__7549 = c__5673__auto___7547;
var G__7550 = cljs.core.count(c__5673__auto___7547);
var G__7551 = (0);
seq__6420_7535 = G__7548;
chunk__6421_7536 = G__7549;
count__6422_7537 = G__7550;
i__6423_7538 = G__7551;
continue;
} else {
var assertion_7556 = cljs.core.first(seq__6420_7546__$1);
if(cljs.core.truth_(assertion_7556)){
var cond_type_7557 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7557,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7557)))], null));
}
} else {
}


var G__7558 = cljs.core.next(seq__6420_7546__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__6420_7535 = G__7558;
chunk__6421_7536 = G__7559;
count__6422_7537 = G__7560;
i__6423_7538 = G__7561;
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

var seq__6424 = cljs.core.seq(rescue);
var chunk__6425 = null;
var count__6426 = (0);
var i__6427 = (0);
while(true){
if((i__6427 < count__6426)){
var stmt = chunk__6425.cljs$core$IIndexed$_nth$arity$2(null,i__6427);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7562 = seq__6424;
var G__7563 = chunk__6425;
var G__7564 = count__6426;
var G__7565 = (i__6427 + (1));
seq__6424 = G__7562;
chunk__6425 = G__7563;
count__6426 = G__7564;
i__6427 = G__7565;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6424);
if(temp__5823__auto__){
var seq__6424__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6424__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6424__$1);
var G__7566 = cljs.core.chunk_rest(seq__6424__$1);
var G__7567 = c__5673__auto__;
var G__7568 = cljs.core.count(c__5673__auto__);
var G__7569 = (0);
seq__6424 = G__7566;
chunk__6425 = G__7567;
count__6426 = G__7568;
i__6427 = G__7569;
continue;
} else {
var stmt = cljs.core.first(seq__6424__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7570 = cljs.core.next(seq__6424__$1);
var G__7571 = null;
var G__7572 = (0);
var G__7573 = (0);
seq__6424 = G__7570;
chunk__6425 = G__7571;
count__6426 = G__7572;
i__6427 = G__7573;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6428){
var map__6429 = p__6428;
var map__6429__$1 = cljs.core.__destructure_map(map__6429);
var class_def = map__6429__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6429__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var seq__6430_7574 = cljs.core.seq(body);
var chunk__6431_7575 = null;
var count__6432_7576 = (0);
var i__6433_7577 = (0);
while(true){
if((i__6433_7577 < count__6432_7576)){
var section_7578 = chunk__6431_7575.cljs$core$IIndexed$_nth$arity$2(null,i__6433_7577);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7578),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6442_7579 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_7578));
var chunk__6443_7580 = null;
var count__6444_7581 = (0);
var i__6445_7582 = (0);
while(true){
if((i__6445_7582 < count__6444_7581)){
var member_7583 = chunk__6443_7580.cljs$core$IIndexed$_nth$arity$2(null,i__6445_7582);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7583),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7583),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7583));
} else {
}


var G__7584 = seq__6442_7579;
var G__7585 = chunk__6443_7580;
var G__7586 = count__6444_7581;
var G__7587 = (i__6445_7582 + (1));
seq__6442_7579 = G__7584;
chunk__6443_7580 = G__7585;
count__6444_7581 = G__7586;
i__6445_7582 = G__7587;
continue;
} else {
var temp__5823__auto___7588 = cljs.core.seq(seq__6442_7579);
if(temp__5823__auto___7588){
var seq__6442_7589__$1 = temp__5823__auto___7588;
if(cljs.core.chunked_seq_QMARK_(seq__6442_7589__$1)){
var c__5673__auto___7590 = cljs.core.chunk_first(seq__6442_7589__$1);
var G__7591 = cljs.core.chunk_rest(seq__6442_7589__$1);
var G__7592 = c__5673__auto___7590;
var G__7593 = cljs.core.count(c__5673__auto___7590);
var G__7594 = (0);
seq__6442_7579 = G__7591;
chunk__6443_7580 = G__7592;
count__6444_7581 = G__7593;
i__6445_7582 = G__7594;
continue;
} else {
var member_7595 = cljs.core.first(seq__6442_7589__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7595),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7595),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7595));
} else {
}


var G__7596 = cljs.core.next(seq__6442_7589__$1);
var G__7597 = null;
var G__7598 = (0);
var G__7599 = (0);
seq__6442_7579 = G__7596;
chunk__6443_7580 = G__7597;
count__6444_7581 = G__7598;
i__6445_7582 = G__7599;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__7600 = seq__6430_7574;
var G__7601 = chunk__6431_7575;
var G__7602 = count__6432_7576;
var G__7603 = (i__6433_7577 + (1));
seq__6430_7574 = G__7600;
chunk__6431_7575 = G__7601;
count__6432_7576 = G__7602;
i__6433_7577 = G__7603;
continue;
} else {
var temp__5823__auto___7604 = cljs.core.seq(seq__6430_7574);
if(temp__5823__auto___7604){
var seq__6430_7605__$1 = temp__5823__auto___7604;
if(cljs.core.chunked_seq_QMARK_(seq__6430_7605__$1)){
var c__5673__auto___7606 = cljs.core.chunk_first(seq__6430_7605__$1);
var G__7607 = cljs.core.chunk_rest(seq__6430_7605__$1);
var G__7608 = c__5673__auto___7606;
var G__7609 = cljs.core.count(c__5673__auto___7606);
var G__7610 = (0);
seq__6430_7574 = G__7607;
chunk__6431_7575 = G__7608;
count__6432_7576 = G__7609;
i__6433_7577 = G__7610;
continue;
} else {
var section_7611 = cljs.core.first(seq__6430_7605__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7611),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6446_7612 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_7611));
var chunk__6447_7613 = null;
var count__6448_7614 = (0);
var i__6449_7615 = (0);
while(true){
if((i__6449_7615 < count__6448_7614)){
var member_7616 = chunk__6447_7613.cljs$core$IIndexed$_nth$arity$2(null,i__6449_7615);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7616),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7616),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7616));
} else {
}


var G__7617 = seq__6446_7612;
var G__7618 = chunk__6447_7613;
var G__7619 = count__6448_7614;
var G__7620 = (i__6449_7615 + (1));
seq__6446_7612 = G__7617;
chunk__6447_7613 = G__7618;
count__6448_7614 = G__7619;
i__6449_7615 = G__7620;
continue;
} else {
var temp__5823__auto___7621__$1 = cljs.core.seq(seq__6446_7612);
if(temp__5823__auto___7621__$1){
var seq__6446_7622__$1 = temp__5823__auto___7621__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6446_7622__$1)){
var c__5673__auto___7623 = cljs.core.chunk_first(seq__6446_7622__$1);
var G__7624 = cljs.core.chunk_rest(seq__6446_7622__$1);
var G__7625 = c__5673__auto___7623;
var G__7626 = cljs.core.count(c__5673__auto___7623);
var G__7627 = (0);
seq__6446_7612 = G__7624;
chunk__6447_7613 = G__7625;
count__6448_7614 = G__7626;
i__6449_7615 = G__7627;
continue;
} else {
var member_7628 = cljs.core.first(seq__6446_7622__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7628),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7628),new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7628));
} else {
}


var G__7629 = cljs.core.next(seq__6446_7622__$1);
var G__7630 = null;
var G__7631 = (0);
var G__7632 = (0);
seq__6446_7612 = G__7629;
chunk__6447_7613 = G__7630;
count__6448_7614 = G__7631;
i__6449_7615 = G__7632;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__7633 = cljs.core.next(seq__6430_7605__$1);
var G__7634 = null;
var G__7635 = (0);
var G__7636 = (0);
seq__6430_7574 = G__7633;
chunk__6431_7575 = G__7634;
count__6432_7576 = G__7635;
i__6433_7577 = G__7636;
continue;
}
} else {
}
}
break;
}

var seq__6450 = cljs.core.seq(body);
var chunk__6451 = null;
var count__6452 = (0);
var i__6453 = (0);
while(true){
if((i__6453 < count__6452)){
var section = chunk__6451.cljs$core$IIndexed$_nth$arity$2(null,i__6453);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6470_7637 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6471_7638 = null;
var count__6472_7639 = (0);
var i__6473_7640 = (0);
while(true){
if((i__6473_7640 < count__6472_7639)){
var member_7641 = chunk__6471_7638.cljs$core$IIndexed$_nth$arity$2(null,i__6473_7640);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7641),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7641),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7641)], null));
} else {
}


var G__7642 = seq__6470_7637;
var G__7643 = chunk__6471_7638;
var G__7644 = count__6472_7639;
var G__7645 = (i__6473_7640 + (1));
seq__6470_7637 = G__7642;
chunk__6471_7638 = G__7643;
count__6472_7639 = G__7644;
i__6473_7640 = G__7645;
continue;
} else {
var temp__5823__auto___7646 = cljs.core.seq(seq__6470_7637);
if(temp__5823__auto___7646){
var seq__6470_7647__$1 = temp__5823__auto___7646;
if(cljs.core.chunked_seq_QMARK_(seq__6470_7647__$1)){
var c__5673__auto___7648 = cljs.core.chunk_first(seq__6470_7647__$1);
var G__7649 = cljs.core.chunk_rest(seq__6470_7647__$1);
var G__7650 = c__5673__auto___7648;
var G__7651 = cljs.core.count(c__5673__auto___7648);
var G__7652 = (0);
seq__6470_7637 = G__7649;
chunk__6471_7638 = G__7650;
count__6472_7639 = G__7651;
i__6473_7640 = G__7652;
continue;
} else {
var member_7653 = cljs.core.first(seq__6470_7647__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7653),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7653),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7653)], null));
} else {
}


var G__7654 = cljs.core.next(seq__6470_7647__$1);
var G__7655 = null;
var G__7656 = (0);
var G__7657 = (0);
seq__6470_7637 = G__7654;
chunk__6471_7638 = G__7655;
count__6472_7639 = G__7656;
i__6473_7640 = G__7657;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6474_7658 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6475_7659 = null;
var count__6476_7660 = (0);
var i__6477_7661 = (0);
while(true){
if((i__6477_7661 < count__6476_7660)){
var ctor_7662 = chunk__6475_7659.cljs$core$IIndexed$_nth$arity$2(null,i__6477_7661);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7662),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7663 = seq__6474_7658;
var G__7664 = chunk__6475_7659;
var G__7665 = count__6476_7660;
var G__7666 = (i__6477_7661 + (1));
seq__6474_7658 = G__7663;
chunk__6475_7659 = G__7664;
count__6476_7660 = G__7665;
i__6477_7661 = G__7666;
continue;
} else {
var temp__5823__auto___7667 = cljs.core.seq(seq__6474_7658);
if(temp__5823__auto___7667){
var seq__6474_7668__$1 = temp__5823__auto___7667;
if(cljs.core.chunked_seq_QMARK_(seq__6474_7668__$1)){
var c__5673__auto___7669 = cljs.core.chunk_first(seq__6474_7668__$1);
var G__7670 = cljs.core.chunk_rest(seq__6474_7668__$1);
var G__7671 = c__5673__auto___7669;
var G__7672 = cljs.core.count(c__5673__auto___7669);
var G__7673 = (0);
seq__6474_7658 = G__7670;
chunk__6475_7659 = G__7671;
count__6476_7660 = G__7672;
i__6477_7661 = G__7673;
continue;
} else {
var ctor_7674 = cljs.core.first(seq__6474_7668__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7674),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7675 = cljs.core.next(seq__6474_7668__$1);
var G__7676 = null;
var G__7677 = (0);
var G__7678 = (0);
seq__6474_7658 = G__7675;
chunk__6475_7659 = G__7676;
count__6476_7660 = G__7677;
i__6477_7661 = G__7678;
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


var G__7680 = seq__6450;
var G__7681 = chunk__6451;
var G__7682 = count__6452;
var G__7683 = (i__6453 + (1));
seq__6450 = G__7680;
chunk__6451 = G__7681;
count__6452 = G__7682;
i__6453 = G__7683;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6450);
if(temp__5823__auto__){
var seq__6450__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6450__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6450__$1);
var G__7685 = cljs.core.chunk_rest(seq__6450__$1);
var G__7686 = c__5673__auto__;
var G__7687 = cljs.core.count(c__5673__auto__);
var G__7688 = (0);
seq__6450 = G__7685;
chunk__6451 = G__7686;
count__6452 = G__7687;
i__6453 = G__7688;
continue;
} else {
var section = cljs.core.first(seq__6450__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6478_7689 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6479_7690 = null;
var count__6480_7691 = (0);
var i__6481_7692 = (0);
while(true){
if((i__6481_7692 < count__6480_7691)){
var member_7693 = chunk__6479_7690.cljs$core$IIndexed$_nth$arity$2(null,i__6481_7692);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7693),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7693),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7693)], null));
} else {
}


var G__7694 = seq__6478_7689;
var G__7695 = chunk__6479_7690;
var G__7696 = count__6480_7691;
var G__7697 = (i__6481_7692 + (1));
seq__6478_7689 = G__7694;
chunk__6479_7690 = G__7695;
count__6480_7691 = G__7696;
i__6481_7692 = G__7697;
continue;
} else {
var temp__5823__auto___7698__$1 = cljs.core.seq(seq__6478_7689);
if(temp__5823__auto___7698__$1){
var seq__6478_7699__$1 = temp__5823__auto___7698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6478_7699__$1)){
var c__5673__auto___7700 = cljs.core.chunk_first(seq__6478_7699__$1);
var G__7701 = cljs.core.chunk_rest(seq__6478_7699__$1);
var G__7702 = c__5673__auto___7700;
var G__7703 = cljs.core.count(c__5673__auto___7700);
var G__7704 = (0);
seq__6478_7689 = G__7701;
chunk__6479_7690 = G__7702;
count__6480_7691 = G__7703;
i__6481_7692 = G__7704;
continue;
} else {
var member_7705 = cljs.core.first(seq__6478_7699__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7705),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7705),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7705)], null));
} else {
}


var G__7706 = cljs.core.next(seq__6478_7699__$1);
var G__7707 = null;
var G__7708 = (0);
var G__7709 = (0);
seq__6478_7689 = G__7706;
chunk__6479_7690 = G__7707;
count__6480_7691 = G__7708;
i__6481_7692 = G__7709;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6482_7710 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6483_7711 = null;
var count__6484_7712 = (0);
var i__6485_7713 = (0);
while(true){
if((i__6485_7713 < count__6484_7712)){
var ctor_7714 = chunk__6483_7711.cljs$core$IIndexed$_nth$arity$2(null,i__6485_7713);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7714),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7714),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7715 = seq__6482_7710;
var G__7716 = chunk__6483_7711;
var G__7717 = count__6484_7712;
var G__7718 = (i__6485_7713 + (1));
seq__6482_7710 = G__7715;
chunk__6483_7711 = G__7716;
count__6484_7712 = G__7717;
i__6485_7713 = G__7718;
continue;
} else {
var temp__5823__auto___7719__$1 = cljs.core.seq(seq__6482_7710);
if(temp__5823__auto___7719__$1){
var seq__6482_7720__$1 = temp__5823__auto___7719__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6482_7720__$1)){
var c__5673__auto___7721 = cljs.core.chunk_first(seq__6482_7720__$1);
var G__7722 = cljs.core.chunk_rest(seq__6482_7720__$1);
var G__7723 = c__5673__auto___7721;
var G__7724 = cljs.core.count(c__5673__auto___7721);
var G__7725 = (0);
seq__6482_7710 = G__7722;
chunk__6483_7711 = G__7723;
count__6484_7712 = G__7724;
i__6485_7713 = G__7725;
continue;
} else {
var ctor_7726 = cljs.core.first(seq__6482_7720__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7726),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7726),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7727 = cljs.core.next(seq__6482_7720__$1);
var G__7728 = null;
var G__7729 = (0);
var G__7730 = (0);
seq__6482_7710 = G__7727;
chunk__6483_7711 = G__7728;
count__6484_7712 = G__7729;
i__6485_7713 = G__7730;
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


var G__7731 = cljs.core.next(seq__6450__$1);
var G__7732 = null;
var G__7733 = (0);
var G__7734 = (0);
seq__6450 = G__7731;
chunk__6451 = G__7732;
count__6452 = G__7733;
i__6453 = G__7734;
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
var seq__6486 = cljs.core.seq(parents);
var chunk__6487 = null;
var count__6488 = (0);
var i__6489 = (0);
while(true){
if((i__6489 < count__6488)){
var map__6492 = chunk__6487.cljs$core$IIndexed$_nth$arity$2(null,i__6489);
var map__6492__$1 = cljs.core.__destructure_map(map__6492);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6492__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__7735 = seq__6486;
var G__7736 = chunk__6487;
var G__7737 = count__6488;
var G__7738 = (i__6489 + (1));
seq__6486 = G__7735;
chunk__6487 = G__7736;
count__6488 = G__7737;
i__6489 = G__7738;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6486);
if(temp__5823__auto__){
var seq__6486__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6486__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6486__$1);
var G__7739 = cljs.core.chunk_rest(seq__6486__$1);
var G__7740 = c__5673__auto__;
var G__7741 = cljs.core.count(c__5673__auto__);
var G__7742 = (0);
seq__6486 = G__7739;
chunk__6487 = G__7740;
count__6488 = G__7741;
i__6489 = G__7742;
continue;
} else {
var map__6493 = cljs.core.first(seq__6486__$1);
var map__6493__$1 = cljs.core.__destructure_map(map__6493);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6493__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__7743 = cljs.core.next(seq__6486__$1);
var G__7744 = null;
var G__7745 = (0);
var G__7746 = (0);
seq__6486 = G__7743;
chunk__6487 = G__7744;
count__6488 = G__7745;
i__6489 = G__7746;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6499){
var map__6500 = p__6499;
var map__6500__$1 = cljs.core.__destructure_map(map__6500);
var class_def = map__6500__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6500__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6500__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6500__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
if(cljs.core.truth_(parents)){
nex.typechecker.check_inheritance(env,name,parents);
} else {
}

var seq__6501_7747 = cljs.core.seq(invariant);
var chunk__6502_7748 = null;
var count__6503_7749 = (0);
var i__6504_7750 = (0);
while(true){
if((i__6504_7750 < count__6503_7749)){
var assertion_7751 = chunk__6502_7748.cljs$core$IIndexed$_nth$arity$2(null,i__6504_7750);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_7751;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7751);
} else {
return and__5140__auto__;
}
})())){
var inv_type_7752 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7751));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7752,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7752,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_7752)))], null));
}
} else {
}


var G__7753 = seq__6501_7747;
var G__7754 = chunk__6502_7748;
var G__7755 = count__6503_7749;
var G__7756 = (i__6504_7750 + (1));
seq__6501_7747 = G__7753;
chunk__6502_7748 = G__7754;
count__6503_7749 = G__7755;
i__6504_7750 = G__7756;
continue;
} else {
var temp__5823__auto___7757 = cljs.core.seq(seq__6501_7747);
if(temp__5823__auto___7757){
var seq__6501_7758__$1 = temp__5823__auto___7757;
if(cljs.core.chunked_seq_QMARK_(seq__6501_7758__$1)){
var c__5673__auto___7759 = cljs.core.chunk_first(seq__6501_7758__$1);
var G__7760 = cljs.core.chunk_rest(seq__6501_7758__$1);
var G__7761 = c__5673__auto___7759;
var G__7762 = cljs.core.count(c__5673__auto___7759);
var G__7763 = (0);
seq__6501_7747 = G__7760;
chunk__6502_7748 = G__7761;
count__6503_7749 = G__7762;
i__6504_7750 = G__7763;
continue;
} else {
var assertion_7764 = cljs.core.first(seq__6501_7758__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_7764;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7764);
} else {
return and__5140__auto__;
}
})())){
var inv_type_7765 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7764));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7765,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7765,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_7765)))], null));
}
} else {
}


var G__7767 = cljs.core.next(seq__6501_7758__$1);
var G__7768 = null;
var G__7769 = (0);
var G__7770 = (0);
seq__6501_7747 = G__7767;
chunk__6502_7748 = G__7768;
count__6503_7749 = G__7769;
i__6504_7750 = G__7770;
continue;
}
} else {
}
}
break;
}

var seq__6505_7771 = cljs.core.seq(body);
var chunk__6506_7772 = null;
var count__6507_7773 = (0);
var i__6508_7774 = (0);
while(true){
if((i__6508_7774 < count__6507_7773)){
var section_7775 = chunk__6506_7772.cljs$core$IIndexed$_nth$arity$2(null,i__6508_7774);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7775),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6525_7776 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_7775));
var chunk__6526_7777 = null;
var count__6527_7778 = (0);
var i__6528_7779 = (0);
while(true){
if((i__6528_7779 < count__6527_7778)){
var member_7780 = chunk__6526_7777.cljs$core$IIndexed$_nth$arity$2(null,i__6528_7779);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7780),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_7780);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7780),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7780));
} else {
}
}


var G__7781 = seq__6525_7776;
var G__7782 = chunk__6526_7777;
var G__7783 = count__6527_7778;
var G__7784 = (i__6528_7779 + (1));
seq__6525_7776 = G__7781;
chunk__6526_7777 = G__7782;
count__6527_7778 = G__7783;
i__6528_7779 = G__7784;
continue;
} else {
var temp__5823__auto___7785 = cljs.core.seq(seq__6525_7776);
if(temp__5823__auto___7785){
var seq__6525_7786__$1 = temp__5823__auto___7785;
if(cljs.core.chunked_seq_QMARK_(seq__6525_7786__$1)){
var c__5673__auto___7787 = cljs.core.chunk_first(seq__6525_7786__$1);
var G__7788 = cljs.core.chunk_rest(seq__6525_7786__$1);
var G__7789 = c__5673__auto___7787;
var G__7790 = cljs.core.count(c__5673__auto___7787);
var G__7791 = (0);
seq__6525_7776 = G__7788;
chunk__6526_7777 = G__7789;
count__6527_7778 = G__7790;
i__6528_7779 = G__7791;
continue;
} else {
var member_7792 = cljs.core.first(seq__6525_7786__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7792),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_7792);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7792),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7792));
} else {
}
}


var G__7793 = cljs.core.next(seq__6525_7786__$1);
var G__7794 = null;
var G__7795 = (0);
var G__7796 = (0);
seq__6525_7776 = G__7793;
chunk__6526_7777 = G__7794;
count__6527_7778 = G__7795;
i__6528_7779 = G__7796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7775),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6529_7797 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_7775));
var chunk__6530_7798 = null;
var count__6531_7799 = (0);
var i__6532_7800 = (0);
while(true){
if((i__6532_7800 < count__6531_7799)){
var ctor_7801 = chunk__6530_7798.cljs$core$IIndexed$_nth$arity$2(null,i__6532_7800);
nex.typechecker.check_constructor(env,name,ctor_7801);


var G__7802 = seq__6529_7797;
var G__7803 = chunk__6530_7798;
var G__7804 = count__6531_7799;
var G__7805 = (i__6532_7800 + (1));
seq__6529_7797 = G__7802;
chunk__6530_7798 = G__7803;
count__6531_7799 = G__7804;
i__6532_7800 = G__7805;
continue;
} else {
var temp__5823__auto___7806 = cljs.core.seq(seq__6529_7797);
if(temp__5823__auto___7806){
var seq__6529_7807__$1 = temp__5823__auto___7806;
if(cljs.core.chunked_seq_QMARK_(seq__6529_7807__$1)){
var c__5673__auto___7808 = cljs.core.chunk_first(seq__6529_7807__$1);
var G__7809 = cljs.core.chunk_rest(seq__6529_7807__$1);
var G__7810 = c__5673__auto___7808;
var G__7811 = cljs.core.count(c__5673__auto___7808);
var G__7812 = (0);
seq__6529_7797 = G__7809;
chunk__6530_7798 = G__7810;
count__6531_7799 = G__7811;
i__6532_7800 = G__7812;
continue;
} else {
var ctor_7813 = cljs.core.first(seq__6529_7807__$1);
nex.typechecker.check_constructor(env,name,ctor_7813);


var G__7814 = cljs.core.next(seq__6529_7807__$1);
var G__7815 = null;
var G__7816 = (0);
var G__7817 = (0);
seq__6529_7797 = G__7814;
chunk__6530_7798 = G__7815;
count__6531_7799 = G__7816;
i__6532_7800 = G__7817;
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


var G__7818 = seq__6505_7771;
var G__7819 = chunk__6506_7772;
var G__7820 = count__6507_7773;
var G__7821 = (i__6508_7774 + (1));
seq__6505_7771 = G__7818;
chunk__6506_7772 = G__7819;
count__6507_7773 = G__7820;
i__6508_7774 = G__7821;
continue;
} else {
var temp__5823__auto___7822 = cljs.core.seq(seq__6505_7771);
if(temp__5823__auto___7822){
var seq__6505_7823__$1 = temp__5823__auto___7822;
if(cljs.core.chunked_seq_QMARK_(seq__6505_7823__$1)){
var c__5673__auto___7825 = cljs.core.chunk_first(seq__6505_7823__$1);
var G__7826 = cljs.core.chunk_rest(seq__6505_7823__$1);
var G__7827 = c__5673__auto___7825;
var G__7828 = cljs.core.count(c__5673__auto___7825);
var G__7829 = (0);
seq__6505_7771 = G__7826;
chunk__6506_7772 = G__7827;
count__6507_7773 = G__7828;
i__6508_7774 = G__7829;
continue;
} else {
var section_7830 = cljs.core.first(seq__6505_7823__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7830),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6533_7831 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_7830));
var chunk__6534_7832 = null;
var count__6535_7833 = (0);
var i__6536_7834 = (0);
while(true){
if((i__6536_7834 < count__6535_7833)){
var member_7835 = chunk__6534_7832.cljs$core$IIndexed$_nth$arity$2(null,i__6536_7834);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7835),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_7835);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7835),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7835));
} else {
}
}


var G__7836 = seq__6533_7831;
var G__7837 = chunk__6534_7832;
var G__7838 = count__6535_7833;
var G__7839 = (i__6536_7834 + (1));
seq__6533_7831 = G__7836;
chunk__6534_7832 = G__7837;
count__6535_7833 = G__7838;
i__6536_7834 = G__7839;
continue;
} else {
var temp__5823__auto___7840__$1 = cljs.core.seq(seq__6533_7831);
if(temp__5823__auto___7840__$1){
var seq__6533_7841__$1 = temp__5823__auto___7840__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6533_7841__$1)){
var c__5673__auto___7842 = cljs.core.chunk_first(seq__6533_7841__$1);
var G__7843 = cljs.core.chunk_rest(seq__6533_7841__$1);
var G__7844 = c__5673__auto___7842;
var G__7845 = cljs.core.count(c__5673__auto___7842);
var G__7846 = (0);
seq__6533_7831 = G__7843;
chunk__6534_7832 = G__7844;
count__6535_7833 = G__7845;
i__6536_7834 = G__7846;
continue;
} else {
var member_7847 = cljs.core.first(seq__6533_7841__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7847),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_7847);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7847),new cljs.core.Keyword(null,"field","field",-1302436500))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7847));
} else {
}
}


var G__7848 = cljs.core.next(seq__6533_7841__$1);
var G__7849 = null;
var G__7850 = (0);
var G__7851 = (0);
seq__6533_7831 = G__7848;
chunk__6534_7832 = G__7849;
count__6535_7833 = G__7850;
i__6536_7834 = G__7851;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7830),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6537_7852 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_7830));
var chunk__6538_7853 = null;
var count__6539_7854 = (0);
var i__6540_7855 = (0);
while(true){
if((i__6540_7855 < count__6539_7854)){
var ctor_7856 = chunk__6538_7853.cljs$core$IIndexed$_nth$arity$2(null,i__6540_7855);
nex.typechecker.check_constructor(env,name,ctor_7856);


var G__7857 = seq__6537_7852;
var G__7858 = chunk__6538_7853;
var G__7859 = count__6539_7854;
var G__7860 = (i__6540_7855 + (1));
seq__6537_7852 = G__7857;
chunk__6538_7853 = G__7858;
count__6539_7854 = G__7859;
i__6540_7855 = G__7860;
continue;
} else {
var temp__5823__auto___7861__$1 = cljs.core.seq(seq__6537_7852);
if(temp__5823__auto___7861__$1){
var seq__6537_7862__$1 = temp__5823__auto___7861__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6537_7862__$1)){
var c__5673__auto___7863 = cljs.core.chunk_first(seq__6537_7862__$1);
var G__7864 = cljs.core.chunk_rest(seq__6537_7862__$1);
var G__7865 = c__5673__auto___7863;
var G__7866 = cljs.core.count(c__5673__auto___7863);
var G__7867 = (0);
seq__6537_7852 = G__7864;
chunk__6538_7853 = G__7865;
count__6539_7854 = G__7866;
i__6540_7855 = G__7867;
continue;
} else {
var ctor_7868 = cljs.core.first(seq__6537_7862__$1);
nex.typechecker.check_constructor(env,name,ctor_7868);


var G__7869 = cljs.core.next(seq__6537_7862__$1);
var G__7870 = null;
var G__7871 = (0);
var G__7872 = (0);
seq__6537_7852 = G__7869;
chunk__6538_7853 = G__7870;
count__6539_7854 = G__7871;
i__6540_7855 = G__7872;
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


var G__7873 = cljs.core.next(seq__6505_7823__$1);
var G__7874 = null;
var G__7875 = (0);
var G__7876 = (0);
seq__6505_7771 = G__7873;
chunk__6506_7772 = G__7874;
count__6507_7773 = G__7875;
i__6508_7774 = G__7876;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6495_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6495_SHARP_));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6494_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6494_SHARP_));
}),body)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6496_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6496_SHARP_));
}),body)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6541){
var map__6542 = p__6541;
var map__6542__$1 = cljs.core.__destructure_map(map__6542);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6542__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__6543 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6543__$1 = (((G__6543 instanceof cljs.core.Keyword))?G__6543.fqn:null);
switch (G__6543__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6497_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6497_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6498_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6498_SHARP_));
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

var seq__6544 = cljs.core.seq(constructors);
var chunk__6545 = null;
var count__6546 = (0);
var i__6547 = (0);
while(true){
if((i__6547 < count__6546)){
var map__6550 = chunk__6545.cljs$core$IIndexed$_nth$arity$2(null,i__6547);
var map__6550__$1 = cljs.core.__destructure_map(map__6550);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6550__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_7878 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_7879 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_7878)));
if(cljs.core.seq(missing_7879)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_7879))))], null));
} else {
}


var G__7880 = seq__6544;
var G__7881 = chunk__6545;
var G__7882 = count__6546;
var G__7883 = (i__6547 + (1));
seq__6544 = G__7880;
chunk__6545 = G__7881;
count__6546 = G__7882;
i__6547 = G__7883;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6544);
if(temp__5823__auto__){
var seq__6544__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6544__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6544__$1);
var G__7884 = cljs.core.chunk_rest(seq__6544__$1);
var G__7885 = c__5673__auto__;
var G__7886 = cljs.core.count(c__5673__auto__);
var G__7887 = (0);
seq__6544 = G__7884;
chunk__6545 = G__7885;
count__6546 = G__7886;
i__6547 = G__7887;
continue;
} else {
var map__6551 = cljs.core.first(seq__6544__$1);
var map__6551__$1 = cljs.core.__destructure_map(map__6551);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_7888 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$1));
var missing_7889 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_7888)));
if(cljs.core.seq(missing_7889)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_7889))))], null));
} else {
}


var G__7890 = cljs.core.next(seq__6544__$1);
var G__7891 = null;
var G__7892 = (0);
var G__7893 = (0);
seq__6544 = G__7890;
chunk__6545 = G__7891;
count__6546 = G__7892;
i__6547 = G__7893;
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

var seq__6552_7894 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6553_7895 = null;
var count__6554_7896 = (0);
var i__6555_7897 = (0);
while(true){
if((i__6555_7897 < count__6554_7896)){
var scalar_7898 = chunk__6553_7895.cljs$core$IIndexed$_nth$arity$2(null,i__6555_7897);
nex.typechecker.env_add_class(env,scalar_7898,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_7898,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_7898,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_7898,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__7899 = seq__6552_7894;
var G__7900 = chunk__6553_7895;
var G__7901 = count__6554_7896;
var G__7902 = (i__6555_7897 + (1));
seq__6552_7894 = G__7899;
chunk__6553_7895 = G__7900;
count__6554_7896 = G__7901;
i__6555_7897 = G__7902;
continue;
} else {
var temp__5823__auto___7903 = cljs.core.seq(seq__6552_7894);
if(temp__5823__auto___7903){
var seq__6552_7904__$1 = temp__5823__auto___7903;
if(cljs.core.chunked_seq_QMARK_(seq__6552_7904__$1)){
var c__5673__auto___7905 = cljs.core.chunk_first(seq__6552_7904__$1);
var G__7906 = cljs.core.chunk_rest(seq__6552_7904__$1);
var G__7907 = c__5673__auto___7905;
var G__7908 = cljs.core.count(c__5673__auto___7905);
var G__7909 = (0);
seq__6552_7894 = G__7906;
chunk__6553_7895 = G__7907;
count__6554_7896 = G__7908;
i__6555_7897 = G__7909;
continue;
} else {
var scalar_7910 = cljs.core.first(seq__6552_7904__$1);
nex.typechecker.env_add_class(env,scalar_7910,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_7910,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_7910,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_7910,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__7911 = cljs.core.next(seq__6552_7904__$1);
var G__7912 = null;
var G__7913 = (0);
var G__7914 = (0);
seq__6552_7894 = G__7911;
chunk__6553_7895 = G__7912;
count__6554_7896 = G__7913;
i__6555_7897 = G__7914;
continue;
}
} else {
}
}
break;
}

var seq__6556_7915 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__6557_7916 = null;
var count__6558_7917 = (0);
var i__6559_7918 = (0);
while(true){
if((i__6559_7918 < count__6558_7917)){
var vec__6566_7919 = chunk__6557_7916.cljs$core$IIndexed$_nth$arity$2(null,i__6559_7918);
var method_name_7920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6566_7919,(0),null);
var sig_7921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6566_7919,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_7920,sig_7921);


var G__7922 = seq__6556_7915;
var G__7923 = chunk__6557_7916;
var G__7924 = count__6558_7917;
var G__7925 = (i__6559_7918 + (1));
seq__6556_7915 = G__7922;
chunk__6557_7916 = G__7923;
count__6558_7917 = G__7924;
i__6559_7918 = G__7925;
continue;
} else {
var temp__5823__auto___7926 = cljs.core.seq(seq__6556_7915);
if(temp__5823__auto___7926){
var seq__6556_7927__$1 = temp__5823__auto___7926;
if(cljs.core.chunked_seq_QMARK_(seq__6556_7927__$1)){
var c__5673__auto___7928 = cljs.core.chunk_first(seq__6556_7927__$1);
var G__7929 = cljs.core.chunk_rest(seq__6556_7927__$1);
var G__7930 = c__5673__auto___7928;
var G__7931 = cljs.core.count(c__5673__auto___7928);
var G__7932 = (0);
seq__6556_7915 = G__7929;
chunk__6557_7916 = G__7930;
count__6558_7917 = G__7931;
i__6559_7918 = G__7932;
continue;
} else {
var vec__6569_7933 = cljs.core.first(seq__6556_7927__$1);
var method_name_7934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6569_7933,(0),null);
var sig_7935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6569_7933,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_7934,sig_7935);


var G__7936 = cljs.core.next(seq__6556_7927__$1);
var G__7937 = null;
var G__7938 = (0);
var G__7939 = (0);
seq__6556_7915 = G__7936;
chunk__6557_7916 = G__7937;
count__6558_7917 = G__7938;
i__6559_7918 = G__7939;
continue;
}
} else {
}
}
break;
}

var seq__6572_7940 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__6573_7941 = null;
var count__6574_7942 = (0);
var i__6575_7943 = (0);
while(true){
if((i__6575_7943 < count__6574_7942)){
var vec__6582_7944 = chunk__6573_7941.cljs$core$IIndexed$_nth$arity$2(null,i__6575_7943);
var method_name_7945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6582_7944,(0),null);
var sig_7946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6582_7944,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_7945,sig_7946);


var G__7951 = seq__6572_7940;
var G__7952 = chunk__6573_7941;
var G__7953 = count__6574_7942;
var G__7954 = (i__6575_7943 + (1));
seq__6572_7940 = G__7951;
chunk__6573_7941 = G__7952;
count__6574_7942 = G__7953;
i__6575_7943 = G__7954;
continue;
} else {
var temp__5823__auto___7955 = cljs.core.seq(seq__6572_7940);
if(temp__5823__auto___7955){
var seq__6572_7956__$1 = temp__5823__auto___7955;
if(cljs.core.chunked_seq_QMARK_(seq__6572_7956__$1)){
var c__5673__auto___7961 = cljs.core.chunk_first(seq__6572_7956__$1);
var G__7962 = cljs.core.chunk_rest(seq__6572_7956__$1);
var G__7963 = c__5673__auto___7961;
var G__7964 = cljs.core.count(c__5673__auto___7961);
var G__7965 = (0);
seq__6572_7940 = G__7962;
chunk__6573_7941 = G__7963;
count__6574_7942 = G__7964;
i__6575_7943 = G__7965;
continue;
} else {
var vec__6585_7966 = cljs.core.first(seq__6572_7956__$1);
var method_name_7967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6585_7966,(0),null);
var sig_7968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6585_7966,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_7967,sig_7968);


var G__7969 = cljs.core.next(seq__6572_7956__$1);
var G__7970 = null;
var G__7971 = (0);
var G__7972 = (0);
seq__6572_7940 = G__7969;
chunk__6573_7941 = G__7970;
count__6574_7942 = G__7971;
i__6575_7943 = G__7972;
continue;
}
} else {
}
}
break;
}

var seq__6588_7977 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__6589_7978 = null;
var count__6590_7979 = (0);
var i__6591_7980 = (0);
while(true){
if((i__6591_7980 < count__6590_7979)){
var vec__6598_7981 = chunk__6589_7978.cljs$core$IIndexed$_nth$arity$2(null,i__6591_7980);
var method_name_7982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6598_7981,(0),null);
var sig_7983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6598_7981,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_7982,sig_7983);


var G__7984 = seq__6588_7977;
var G__7985 = chunk__6589_7978;
var G__7986 = count__6590_7979;
var G__7987 = (i__6591_7980 + (1));
seq__6588_7977 = G__7984;
chunk__6589_7978 = G__7985;
count__6590_7979 = G__7986;
i__6591_7980 = G__7987;
continue;
} else {
var temp__5823__auto___7988 = cljs.core.seq(seq__6588_7977);
if(temp__5823__auto___7988){
var seq__6588_7989__$1 = temp__5823__auto___7988;
if(cljs.core.chunked_seq_QMARK_(seq__6588_7989__$1)){
var c__5673__auto___7990 = cljs.core.chunk_first(seq__6588_7989__$1);
var G__7991 = cljs.core.chunk_rest(seq__6588_7989__$1);
var G__7992 = c__5673__auto___7990;
var G__7993 = cljs.core.count(c__5673__auto___7990);
var G__7994 = (0);
seq__6588_7977 = G__7991;
chunk__6589_7978 = G__7992;
count__6590_7979 = G__7993;
i__6591_7980 = G__7994;
continue;
} else {
var vec__6601_7995 = cljs.core.first(seq__6588_7989__$1);
var method_name_7996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6601_7995,(0),null);
var sig_7997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6601_7995,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_7996,sig_7997);


var G__7998 = cljs.core.next(seq__6588_7989__$1);
var G__7999 = null;
var G__8000 = (0);
var G__8001 = (0);
seq__6588_7977 = G__7998;
chunk__6589_7978 = G__7999;
count__6590_7979 = G__8000;
i__6591_7980 = G__8001;
continue;
}
} else {
}
}
break;
}

var seq__6604_8002 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__6605_8003 = null;
var count__6606_8004 = (0);
var i__6607_8005 = (0);
while(true){
if((i__6607_8005 < count__6606_8004)){
var vec__6614_8006 = chunk__6605_8003.cljs$core$IIndexed$_nth$arity$2(null,i__6607_8005);
var method_name_8007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614_8006,(0),null);
var sig_8008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6614_8006,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8007,sig_8008);


var G__8009 = seq__6604_8002;
var G__8010 = chunk__6605_8003;
var G__8011 = count__6606_8004;
var G__8012 = (i__6607_8005 + (1));
seq__6604_8002 = G__8009;
chunk__6605_8003 = G__8010;
count__6606_8004 = G__8011;
i__6607_8005 = G__8012;
continue;
} else {
var temp__5823__auto___8013 = cljs.core.seq(seq__6604_8002);
if(temp__5823__auto___8013){
var seq__6604_8014__$1 = temp__5823__auto___8013;
if(cljs.core.chunked_seq_QMARK_(seq__6604_8014__$1)){
var c__5673__auto___8015 = cljs.core.chunk_first(seq__6604_8014__$1);
var G__8016 = cljs.core.chunk_rest(seq__6604_8014__$1);
var G__8017 = c__5673__auto___8015;
var G__8018 = cljs.core.count(c__5673__auto___8015);
var G__8019 = (0);
seq__6604_8002 = G__8016;
chunk__6605_8003 = G__8017;
count__6606_8004 = G__8018;
i__6607_8005 = G__8019;
continue;
} else {
var vec__6617_8020 = cljs.core.first(seq__6604_8014__$1);
var method_name_8021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617_8020,(0),null);
var sig_8022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617_8020,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8021,sig_8022);


var G__8023 = cljs.core.next(seq__6604_8014__$1);
var G__8024 = null;
var G__8025 = (0);
var G__8026 = (0);
seq__6604_8002 = G__8023;
chunk__6605_8003 = G__8024;
count__6606_8004 = G__8025;
i__6607_8005 = G__8026;
continue;
}
} else {
}
}
break;
}

var seq__6620_8027 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6621_8028 = null;
var count__6622_8029 = (0);
var i__6623_8030 = (0);
while(true){
if((i__6623_8030 < count__6622_8029)){
var vec__6630_8031 = chunk__6621_8028.cljs$core$IIndexed$_nth$arity$2(null,i__6623_8030);
var method_name_8032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6630_8031,(0),null);
var sig_8033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6630_8031,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8032,sig_8033);


var G__8034 = seq__6620_8027;
var G__8035 = chunk__6621_8028;
var G__8036 = count__6622_8029;
var G__8037 = (i__6623_8030 + (1));
seq__6620_8027 = G__8034;
chunk__6621_8028 = G__8035;
count__6622_8029 = G__8036;
i__6623_8030 = G__8037;
continue;
} else {
var temp__5823__auto___8038 = cljs.core.seq(seq__6620_8027);
if(temp__5823__auto___8038){
var seq__6620_8039__$1 = temp__5823__auto___8038;
if(cljs.core.chunked_seq_QMARK_(seq__6620_8039__$1)){
var c__5673__auto___8040 = cljs.core.chunk_first(seq__6620_8039__$1);
var G__8041 = cljs.core.chunk_rest(seq__6620_8039__$1);
var G__8042 = c__5673__auto___8040;
var G__8043 = cljs.core.count(c__5673__auto___8040);
var G__8044 = (0);
seq__6620_8027 = G__8041;
chunk__6621_8028 = G__8042;
count__6622_8029 = G__8043;
i__6623_8030 = G__8044;
continue;
} else {
var vec__6633_8045 = cljs.core.first(seq__6620_8039__$1);
var method_name_8046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6633_8045,(0),null);
var sig_8047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6633_8045,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8046,sig_8047);


var G__8048 = cljs.core.next(seq__6620_8039__$1);
var G__8049 = null;
var G__8050 = (0);
var G__8051 = (0);
seq__6620_8027 = G__8048;
chunk__6621_8028 = G__8049;
count__6622_8029 = G__8050;
i__6623_8030 = G__8051;
continue;
}
} else {
}
}
break;
}

var seq__6636_8052 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__6637_8053 = null;
var count__6638_8054 = (0);
var i__6639_8055 = (0);
while(true){
if((i__6639_8055 < count__6638_8054)){
var vec__6646_8056 = chunk__6637_8053.cljs$core$IIndexed$_nth$arity$2(null,i__6639_8055);
var method_name_8057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646_8056,(0),null);
var sig_8058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646_8056,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8057,sig_8058);


var G__8059 = seq__6636_8052;
var G__8060 = chunk__6637_8053;
var G__8061 = count__6638_8054;
var G__8062 = (i__6639_8055 + (1));
seq__6636_8052 = G__8059;
chunk__6637_8053 = G__8060;
count__6638_8054 = G__8061;
i__6639_8055 = G__8062;
continue;
} else {
var temp__5823__auto___8063 = cljs.core.seq(seq__6636_8052);
if(temp__5823__auto___8063){
var seq__6636_8064__$1 = temp__5823__auto___8063;
if(cljs.core.chunked_seq_QMARK_(seq__6636_8064__$1)){
var c__5673__auto___8065 = cljs.core.chunk_first(seq__6636_8064__$1);
var G__8066 = cljs.core.chunk_rest(seq__6636_8064__$1);
var G__8067 = c__5673__auto___8065;
var G__8068 = cljs.core.count(c__5673__auto___8065);
var G__8069 = (0);
seq__6636_8052 = G__8066;
chunk__6637_8053 = G__8067;
count__6638_8054 = G__8068;
i__6639_8055 = G__8069;
continue;
} else {
var vec__6649_8070 = cljs.core.first(seq__6636_8064__$1);
var method_name_8071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649_8070,(0),null);
var sig_8072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6649_8070,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8071,sig_8072);


var G__8073 = cljs.core.next(seq__6636_8064__$1);
var G__8074 = null;
var G__8075 = (0);
var G__8076 = (0);
seq__6636_8052 = G__8073;
chunk__6637_8053 = G__8074;
count__6638_8054 = G__8075;
i__6639_8055 = G__8076;
continue;
}
} else {
}
}
break;
}

var seq__6652_8077 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6653_8078 = null;
var count__6654_8079 = (0);
var i__6655_8080 = (0);
while(true){
if((i__6655_8080 < count__6654_8079)){
var vec__6662_8081 = chunk__6653_8078.cljs$core$IIndexed$_nth$arity$2(null,i__6655_8080);
var method_name_8082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6662_8081,(0),null);
var sig_8083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6662_8081,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8082,sig_8083);


var G__8084 = seq__6652_8077;
var G__8085 = chunk__6653_8078;
var G__8086 = count__6654_8079;
var G__8087 = (i__6655_8080 + (1));
seq__6652_8077 = G__8084;
chunk__6653_8078 = G__8085;
count__6654_8079 = G__8086;
i__6655_8080 = G__8087;
continue;
} else {
var temp__5823__auto___8088 = cljs.core.seq(seq__6652_8077);
if(temp__5823__auto___8088){
var seq__6652_8089__$1 = temp__5823__auto___8088;
if(cljs.core.chunked_seq_QMARK_(seq__6652_8089__$1)){
var c__5673__auto___8090 = cljs.core.chunk_first(seq__6652_8089__$1);
var G__8091 = cljs.core.chunk_rest(seq__6652_8089__$1);
var G__8092 = c__5673__auto___8090;
var G__8093 = cljs.core.count(c__5673__auto___8090);
var G__8094 = (0);
seq__6652_8077 = G__8091;
chunk__6653_8078 = G__8092;
count__6654_8079 = G__8093;
i__6655_8080 = G__8094;
continue;
} else {
var vec__6665_8095 = cljs.core.first(seq__6652_8089__$1);
var method_name_8096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6665_8095,(0),null);
var sig_8097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6665_8095,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8096,sig_8097);


var G__8098 = cljs.core.next(seq__6652_8089__$1);
var G__8099 = null;
var G__8100 = (0);
var G__8101 = (0);
seq__6652_8077 = G__8098;
chunk__6653_8078 = G__8099;
count__6654_8079 = G__8100;
i__6655_8080 = G__8101;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6668_8102 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__6669_8103 = null;
var count__6670_8104 = (0);
var i__6671_8105 = (0);
while(true){
if((i__6671_8105 < count__6670_8104)){
var vec__6678_8106 = chunk__6669_8103.cljs$core$IIndexed$_nth$arity$2(null,i__6671_8105);
var method_name_8107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678_8106,(0),null);
var sig_8108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678_8106,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8107,sig_8108);


var G__8109 = seq__6668_8102;
var G__8110 = chunk__6669_8103;
var G__8111 = count__6670_8104;
var G__8112 = (i__6671_8105 + (1));
seq__6668_8102 = G__8109;
chunk__6669_8103 = G__8110;
count__6670_8104 = G__8111;
i__6671_8105 = G__8112;
continue;
} else {
var temp__5823__auto___8113 = cljs.core.seq(seq__6668_8102);
if(temp__5823__auto___8113){
var seq__6668_8114__$1 = temp__5823__auto___8113;
if(cljs.core.chunked_seq_QMARK_(seq__6668_8114__$1)){
var c__5673__auto___8115 = cljs.core.chunk_first(seq__6668_8114__$1);
var G__8116 = cljs.core.chunk_rest(seq__6668_8114__$1);
var G__8117 = c__5673__auto___8115;
var G__8118 = cljs.core.count(c__5673__auto___8115);
var G__8119 = (0);
seq__6668_8102 = G__8116;
chunk__6669_8103 = G__8117;
count__6670_8104 = G__8118;
i__6671_8105 = G__8119;
continue;
} else {
var vec__6681_8120 = cljs.core.first(seq__6668_8114__$1);
var method_name_8121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6681_8120,(0),null);
var sig_8122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6681_8120,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8121,sig_8122);


var G__8123 = cljs.core.next(seq__6668_8114__$1);
var G__8124 = null;
var G__8125 = (0);
var G__8126 = (0);
seq__6668_8102 = G__8123;
chunk__6669_8103 = G__8124;
count__6670_8104 = G__8125;
i__6671_8105 = G__8126;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__6684_8127 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6685_8128 = null;
var count__6686_8129 = (0);
var i__6687_8130 = (0);
while(true){
if((i__6687_8130 < count__6686_8129)){
var vec__6694_8131 = chunk__6685_8128.cljs$core$IIndexed$_nth$arity$2(null,i__6687_8130);
var method_name_8132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694_8131,(0),null);
var sig_8133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694_8131,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8132,sig_8133);


var G__8134 = seq__6684_8127;
var G__8135 = chunk__6685_8128;
var G__8136 = count__6686_8129;
var G__8137 = (i__6687_8130 + (1));
seq__6684_8127 = G__8134;
chunk__6685_8128 = G__8135;
count__6686_8129 = G__8136;
i__6687_8130 = G__8137;
continue;
} else {
var temp__5823__auto___8141 = cljs.core.seq(seq__6684_8127);
if(temp__5823__auto___8141){
var seq__6684_8142__$1 = temp__5823__auto___8141;
if(cljs.core.chunked_seq_QMARK_(seq__6684_8142__$1)){
var c__5673__auto___8143 = cljs.core.chunk_first(seq__6684_8142__$1);
var G__8144 = cljs.core.chunk_rest(seq__6684_8142__$1);
var G__8145 = c__5673__auto___8143;
var G__8146 = cljs.core.count(c__5673__auto___8143);
var G__8147 = (0);
seq__6684_8127 = G__8144;
chunk__6685_8128 = G__8145;
count__6686_8129 = G__8146;
i__6687_8130 = G__8147;
continue;
} else {
var vec__6697_8148 = cljs.core.first(seq__6684_8142__$1);
var method_name_8149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6697_8148,(0),null);
var sig_8150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6697_8148,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8149,sig_8150);


var G__8154 = cljs.core.next(seq__6684_8142__$1);
var G__8155 = null;
var G__8156 = (0);
var G__8157 = (0);
seq__6684_8127 = G__8154;
chunk__6685_8128 = G__8155;
count__6686_8129 = G__8156;
i__6687_8130 = G__8157;
continue;
}
} else {
}
}
break;
}

var seq__6700 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__6701 = null;
var count__6702 = (0);
var i__6703 = (0);
while(true){
if((i__6703 < count__6702)){
var n = chunk__6701.cljs$core$IIndexed$_nth$arity$2(null,i__6703);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6700,chunk__6701,count__6702,i__6703,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6700,chunk__6701,count__6702,i__6703,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8159 = seq__6700;
var G__8160 = chunk__6701;
var G__8161 = count__6702;
var G__8162 = (i__6703 + (1));
seq__6700 = G__8159;
chunk__6701 = G__8160;
count__6702 = G__8161;
i__6703 = G__8162;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6700);
if(temp__5823__auto__){
var seq__6700__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6700__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6700__$1);
var G__8163 = cljs.core.chunk_rest(seq__6700__$1);
var G__8164 = c__5673__auto__;
var G__8165 = cljs.core.count(c__5673__auto__);
var G__8166 = (0);
seq__6700 = G__8163;
chunk__6701 = G__8164;
count__6702 = G__8165;
i__6703 = G__8166;
continue;
} else {
var n = cljs.core.first(seq__6700__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6700,chunk__6701,count__6702,i__6703,n,seq__6700__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6700,chunk__6701,count__6702,i__6703,n,seq__6700__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8168 = cljs.core.next(seq__6700__$1);
var G__8169 = null;
var G__8170 = (0);
var G__8171 = (0);
seq__6700 = G__8168;
chunk__6701 = G__8169;
count__6702 = G__8170;
i__6703 = G__8171;
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
var G__6705 = arguments.length;
switch (G__6705) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__6706,opts){
var map__6707 = p__6706;
var map__6707__$1 = cljs.core.__destructure_map(map__6707);
var program = map__6707__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6707__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6707__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6707__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6707__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6707__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__6709_8173 = cljs.core.seq(imports);
var chunk__6710_8174 = null;
var count__6711_8175 = (0);
var i__6712_8176 = (0);
while(true){
if((i__6712_8176 < count__6711_8175)){
var map__6715_8177 = chunk__6710_8174.cljs$core$IIndexed$_nth$arity$2(null,i__6712_8176);
var map__6715_8178__$1 = cljs.core.__destructure_map(map__6715_8177);
var qualified_name_8179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6715_8178__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6715_8178__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8180 == null)){
var simple_name_8181 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8179,/\./));
nex.typechecker.env_add_class(env,simple_name_8181,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8181,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8179], null));
} else {
}


var G__8182 = seq__6709_8173;
var G__8183 = chunk__6710_8174;
var G__8184 = count__6711_8175;
var G__8185 = (i__6712_8176 + (1));
seq__6709_8173 = G__8182;
chunk__6710_8174 = G__8183;
count__6711_8175 = G__8184;
i__6712_8176 = G__8185;
continue;
} else {
var temp__5823__auto___8186 = cljs.core.seq(seq__6709_8173);
if(temp__5823__auto___8186){
var seq__6709_8187__$1 = temp__5823__auto___8186;
if(cljs.core.chunked_seq_QMARK_(seq__6709_8187__$1)){
var c__5673__auto___8188 = cljs.core.chunk_first(seq__6709_8187__$1);
var G__8189 = cljs.core.chunk_rest(seq__6709_8187__$1);
var G__8190 = c__5673__auto___8188;
var G__8191 = cljs.core.count(c__5673__auto___8188);
var G__8192 = (0);
seq__6709_8173 = G__8189;
chunk__6710_8174 = G__8190;
count__6711_8175 = G__8191;
i__6712_8176 = G__8192;
continue;
} else {
var map__6716_8193 = cljs.core.first(seq__6709_8187__$1);
var map__6716_8194__$1 = cljs.core.__destructure_map(map__6716_8193);
var qualified_name_8195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6716_8194__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6716_8194__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8196 == null)){
var simple_name_8197 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8195,/\./));
nex.typechecker.env_add_class(env,simple_name_8197,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8197,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8195], null));
} else {
}


var G__8198 = cljs.core.next(seq__6709_8187__$1);
var G__8199 = null;
var G__8200 = (0);
var G__8201 = (0);
seq__6709_8173 = G__8198;
chunk__6710_8174 = G__8199;
count__6711_8175 = G__8200;
i__6712_8176 = G__8201;
continue;
}
} else {
}
}
break;
}

var seq__6717_8202 = cljs.core.seq(classes);
var chunk__6718_8203 = null;
var count__6719_8204 = (0);
var i__6720_8205 = (0);
while(true){
if((i__6720_8205 < count__6719_8204)){
var class_def_8206 = chunk__6718_8203.cljs$core$IIndexed$_nth$arity$2(null,i__6720_8205);
nex.typechecker.collect_class_info(env,class_def_8206);


var G__8208 = seq__6717_8202;
var G__8209 = chunk__6718_8203;
var G__8210 = count__6719_8204;
var G__8211 = (i__6720_8205 + (1));
seq__6717_8202 = G__8208;
chunk__6718_8203 = G__8209;
count__6719_8204 = G__8210;
i__6720_8205 = G__8211;
continue;
} else {
var temp__5823__auto___8212 = cljs.core.seq(seq__6717_8202);
if(temp__5823__auto___8212){
var seq__6717_8213__$1 = temp__5823__auto___8212;
if(cljs.core.chunked_seq_QMARK_(seq__6717_8213__$1)){
var c__5673__auto___8214 = cljs.core.chunk_first(seq__6717_8213__$1);
var G__8215 = cljs.core.chunk_rest(seq__6717_8213__$1);
var G__8216 = c__5673__auto___8214;
var G__8217 = cljs.core.count(c__5673__auto___8214);
var G__8218 = (0);
seq__6717_8202 = G__8215;
chunk__6718_8203 = G__8216;
count__6719_8204 = G__8217;
i__6720_8205 = G__8218;
continue;
} else {
var class_def_8219 = cljs.core.first(seq__6717_8213__$1);
nex.typechecker.collect_class_info(env,class_def_8219);


var G__8220 = cljs.core.next(seq__6717_8213__$1);
var G__8221 = null;
var G__8222 = (0);
var G__8223 = (0);
seq__6717_8202 = G__8220;
chunk__6718_8203 = G__8221;
count__6719_8204 = G__8222;
i__6720_8205 = G__8223;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6721_8224 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6722_8225 = null;
var count__6723_8226 = (0);
var i__6724_8227 = (0);
while(true){
if((i__6724_8227 < count__6723_8226)){
var vec__6731_8228 = chunk__6722_8225.cljs$core$IIndexed$_nth$arity$2(null,i__6724_8227);
var var_name_8229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731_8228,(0),null);
var var_type_8230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731_8228,(1),null);
nex.typechecker.env_add_var(env,var_name_8229,var_type_8230);


var G__8231 = seq__6721_8224;
var G__8232 = chunk__6722_8225;
var G__8233 = count__6723_8226;
var G__8234 = (i__6724_8227 + (1));
seq__6721_8224 = G__8231;
chunk__6722_8225 = G__8232;
count__6723_8226 = G__8233;
i__6724_8227 = G__8234;
continue;
} else {
var temp__5823__auto___8235 = cljs.core.seq(seq__6721_8224);
if(temp__5823__auto___8235){
var seq__6721_8236__$1 = temp__5823__auto___8235;
if(cljs.core.chunked_seq_QMARK_(seq__6721_8236__$1)){
var c__5673__auto___8237 = cljs.core.chunk_first(seq__6721_8236__$1);
var G__8238 = cljs.core.chunk_rest(seq__6721_8236__$1);
var G__8239 = c__5673__auto___8237;
var G__8240 = cljs.core.count(c__5673__auto___8237);
var G__8241 = (0);
seq__6721_8224 = G__8238;
chunk__6722_8225 = G__8239;
count__6723_8226 = G__8240;
i__6724_8227 = G__8241;
continue;
} else {
var vec__6734_8242 = cljs.core.first(seq__6721_8236__$1);
var var_name_8243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6734_8242,(0),null);
var var_type_8244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6734_8242,(1),null);
nex.typechecker.env_add_var(env,var_name_8243,var_type_8244);


var G__8245 = cljs.core.next(seq__6721_8236__$1);
var G__8246 = null;
var G__8247 = (0);
var G__8248 = (0);
seq__6721_8224 = G__8245;
chunk__6722_8225 = G__8246;
count__6723_8226 = G__8247;
i__6724_8227 = G__8248;
continue;
}
} else {
}
}
break;
}

var seq__6737_8249 = cljs.core.seq(functions);
var chunk__6738_8250 = null;
var count__6739_8251 = (0);
var i__6740_8252 = (0);
while(true){
if((i__6740_8252 < count__6739_8251)){
var fn_def_8253 = chunk__6738_8250.cljs$core$IIndexed$_nth$arity$2(null,i__6740_8252);
var arity_8254 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8253));
if((arity_8254 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8253))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8253))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8253),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8253));


var G__8255 = seq__6737_8249;
var G__8256 = chunk__6738_8250;
var G__8257 = count__6739_8251;
var G__8258 = (i__6740_8252 + (1));
seq__6737_8249 = G__8255;
chunk__6738_8250 = G__8256;
count__6739_8251 = G__8257;
i__6740_8252 = G__8258;
continue;
} else {
var temp__5823__auto___8259 = cljs.core.seq(seq__6737_8249);
if(temp__5823__auto___8259){
var seq__6737_8260__$1 = temp__5823__auto___8259;
if(cljs.core.chunked_seq_QMARK_(seq__6737_8260__$1)){
var c__5673__auto___8261 = cljs.core.chunk_first(seq__6737_8260__$1);
var G__8262 = cljs.core.chunk_rest(seq__6737_8260__$1);
var G__8263 = c__5673__auto___8261;
var G__8264 = cljs.core.count(c__5673__auto___8261);
var G__8265 = (0);
seq__6737_8249 = G__8262;
chunk__6738_8250 = G__8263;
count__6739_8251 = G__8264;
i__6740_8252 = G__8265;
continue;
} else {
var fn_def_8266 = cljs.core.first(seq__6737_8260__$1);
var arity_8267 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8266));
if((arity_8267 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8266))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8266))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8266),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8266));


var G__8268 = cljs.core.next(seq__6737_8260__$1);
var G__8269 = null;
var G__8270 = (0);
var G__8271 = (0);
seq__6737_8249 = G__8268;
chunk__6738_8250 = G__8269;
count__6739_8251 = G__8270;
i__6740_8252 = G__8271;
continue;
}
} else {
}
}
break;
}

var seq__6741_8273 = cljs.core.seq(classes);
var chunk__6742_8274 = null;
var count__6743_8275 = (0);
var i__6744_8276 = (0);
while(true){
if((i__6744_8276 < count__6743_8275)){
var class_def_8277 = chunk__6742_8274.cljs$core$IIndexed$_nth$arity$2(null,i__6744_8276);
nex.typechecker.check_class(env,class_def_8277);


var G__8278 = seq__6741_8273;
var G__8279 = chunk__6742_8274;
var G__8280 = count__6743_8275;
var G__8281 = (i__6744_8276 + (1));
seq__6741_8273 = G__8278;
chunk__6742_8274 = G__8279;
count__6743_8275 = G__8280;
i__6744_8276 = G__8281;
continue;
} else {
var temp__5823__auto___8282 = cljs.core.seq(seq__6741_8273);
if(temp__5823__auto___8282){
var seq__6741_8283__$1 = temp__5823__auto___8282;
if(cljs.core.chunked_seq_QMARK_(seq__6741_8283__$1)){
var c__5673__auto___8284 = cljs.core.chunk_first(seq__6741_8283__$1);
var G__8285 = cljs.core.chunk_rest(seq__6741_8283__$1);
var G__8286 = c__5673__auto___8284;
var G__8287 = cljs.core.count(c__5673__auto___8284);
var G__8288 = (0);
seq__6741_8273 = G__8285;
chunk__6742_8274 = G__8286;
count__6743_8275 = G__8287;
i__6744_8276 = G__8288;
continue;
} else {
var class_def_8289 = cljs.core.first(seq__6741_8283__$1);
nex.typechecker.check_class(env,class_def_8289);


var G__8290 = cljs.core.next(seq__6741_8283__$1);
var G__8291 = null;
var G__8292 = (0);
var G__8293 = (0);
seq__6741_8273 = G__8290;
chunk__6742_8274 = G__8291;
count__6743_8275 = G__8292;
i__6744_8276 = G__8293;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__6745_8294 = cljs.core.seq(statements);
var chunk__6746_8295 = null;
var count__6747_8296 = (0);
var i__6748_8297 = (0);
while(true){
if((i__6748_8297 < count__6747_8296)){
var stmt_8298 = chunk__6746_8295.cljs$core$IIndexed$_nth$arity$2(null,i__6748_8297);
nex.typechecker.check_statement(env,stmt_8298);


var G__8299 = seq__6745_8294;
var G__8300 = chunk__6746_8295;
var G__8301 = count__6747_8296;
var G__8302 = (i__6748_8297 + (1));
seq__6745_8294 = G__8299;
chunk__6746_8295 = G__8300;
count__6747_8296 = G__8301;
i__6748_8297 = G__8302;
continue;
} else {
var temp__5823__auto___8303 = cljs.core.seq(seq__6745_8294);
if(temp__5823__auto___8303){
var seq__6745_8304__$1 = temp__5823__auto___8303;
if(cljs.core.chunked_seq_QMARK_(seq__6745_8304__$1)){
var c__5673__auto___8305 = cljs.core.chunk_first(seq__6745_8304__$1);
var G__8306 = cljs.core.chunk_rest(seq__6745_8304__$1);
var G__8307 = c__5673__auto___8305;
var G__8308 = cljs.core.count(c__5673__auto___8305);
var G__8309 = (0);
seq__6745_8294 = G__8306;
chunk__6746_8295 = G__8307;
count__6747_8296 = G__8308;
i__6748_8297 = G__8309;
continue;
} else {
var stmt_8310 = cljs.core.first(seq__6745_8304__$1);
nex.typechecker.check_statement(env,stmt_8310);


var G__8311 = cljs.core.next(seq__6745_8304__$1);
var G__8312 = null;
var G__8313 = (0);
var G__8314 = (0);
seq__6745_8294 = G__8311;
chunk__6746_8295 = G__8312;
count__6747_8296 = G__8313;
i__6748_8297 = G__8314;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6749_8315 = cljs.core.seq(calls);
var chunk__6750_8316 = null;
var count__6751_8317 = (0);
var i__6752_8318 = (0);
while(true){
if((i__6752_8318 < count__6751_8317)){
var call_8319 = chunk__6750_8316.cljs$core$IIndexed$_nth$arity$2(null,i__6752_8318);
nex.typechecker.check_expression(env,call_8319);


var G__8320 = seq__6749_8315;
var G__8321 = chunk__6750_8316;
var G__8322 = count__6751_8317;
var G__8323 = (i__6752_8318 + (1));
seq__6749_8315 = G__8320;
chunk__6750_8316 = G__8321;
count__6751_8317 = G__8322;
i__6752_8318 = G__8323;
continue;
} else {
var temp__5823__auto___8324 = cljs.core.seq(seq__6749_8315);
if(temp__5823__auto___8324){
var seq__6749_8325__$1 = temp__5823__auto___8324;
if(cljs.core.chunked_seq_QMARK_(seq__6749_8325__$1)){
var c__5673__auto___8326 = cljs.core.chunk_first(seq__6749_8325__$1);
var G__8327 = cljs.core.chunk_rest(seq__6749_8325__$1);
var G__8328 = c__5673__auto___8326;
var G__8329 = cljs.core.count(c__5673__auto___8326);
var G__8330 = (0);
seq__6749_8315 = G__8327;
chunk__6750_8316 = G__8328;
count__6751_8317 = G__8329;
i__6752_8318 = G__8330;
continue;
} else {
var call_8331 = cljs.core.first(seq__6749_8325__$1);
nex.typechecker.check_expression(env,call_8331);


var G__8332 = cljs.core.next(seq__6749_8325__$1);
var G__8333 = null;
var G__8334 = (0);
var G__8335 = (0);
seq__6749_8315 = G__8332;
chunk__6750_8316 = G__8333;
count__6751_8317 = G__8334;
i__6752_8318 = G__8335;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e6708){var e = e6708;
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
var G__6754 = arguments.length;
switch (G__6754) {
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
var seq__6756_8358 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6757_8359 = null;
var count__6758_8360 = (0);
var i__6759_8361 = (0);
while(true){
if((i__6759_8361 < count__6758_8360)){
var map__6762_8362 = chunk__6757_8359.cljs$core$IIndexed$_nth$arity$2(null,i__6759_8361);
var map__6762_8363__$1 = cljs.core.__destructure_map(map__6762_8362);
var qualified_name_8364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6762_8363__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6762_8363__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8365 == null)){
var simple_name_8366 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8364,/\./));
nex.typechecker.env_add_class(env,simple_name_8366,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8366,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8364], null));
} else {
}


var G__8371 = seq__6756_8358;
var G__8372 = chunk__6757_8359;
var G__8373 = count__6758_8360;
var G__8374 = (i__6759_8361 + (1));
seq__6756_8358 = G__8371;
chunk__6757_8359 = G__8372;
count__6758_8360 = G__8373;
i__6759_8361 = G__8374;
continue;
} else {
var temp__5823__auto___8375 = cljs.core.seq(seq__6756_8358);
if(temp__5823__auto___8375){
var seq__6756_8377__$1 = temp__5823__auto___8375;
if(cljs.core.chunked_seq_QMARK_(seq__6756_8377__$1)){
var c__5673__auto___8382 = cljs.core.chunk_first(seq__6756_8377__$1);
var G__8383 = cljs.core.chunk_rest(seq__6756_8377__$1);
var G__8384 = c__5673__auto___8382;
var G__8385 = cljs.core.count(c__5673__auto___8382);
var G__8386 = (0);
seq__6756_8358 = G__8383;
chunk__6757_8359 = G__8384;
count__6758_8360 = G__8385;
i__6759_8361 = G__8386;
continue;
} else {
var map__6763_8388 = cljs.core.first(seq__6756_8377__$1);
var map__6763_8389__$1 = cljs.core.__destructure_map(map__6763_8388);
var qualified_name_8390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763_8389__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763_8389__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8391 == null)){
var simple_name_8398 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8390,/\./));
nex.typechecker.env_add_class(env,simple_name_8398,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8398,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8390], null));
} else {
}


var G__8404 = cljs.core.next(seq__6756_8377__$1);
var G__8405 = null;
var G__8406 = (0);
var G__8407 = (0);
seq__6756_8358 = G__8404;
chunk__6757_8359 = G__8405;
count__6758_8360 = G__8406;
i__6759_8361 = G__8407;
continue;
}
} else {
}
}
break;
}

var seq__6764_8408 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6765_8409 = null;
var count__6766_8410 = (0);
var i__6767_8411 = (0);
while(true){
if((i__6767_8411 < count__6766_8410)){
var class_def_8412 = chunk__6765_8409.cljs$core$IIndexed$_nth$arity$2(null,i__6767_8411);
nex.typechecker.collect_class_info(env,class_def_8412);


var G__8413 = seq__6764_8408;
var G__8414 = chunk__6765_8409;
var G__8415 = count__6766_8410;
var G__8416 = (i__6767_8411 + (1));
seq__6764_8408 = G__8413;
chunk__6765_8409 = G__8414;
count__6766_8410 = G__8415;
i__6767_8411 = G__8416;
continue;
} else {
var temp__5823__auto___8417 = cljs.core.seq(seq__6764_8408);
if(temp__5823__auto___8417){
var seq__6764_8418__$1 = temp__5823__auto___8417;
if(cljs.core.chunked_seq_QMARK_(seq__6764_8418__$1)){
var c__5673__auto___8419 = cljs.core.chunk_first(seq__6764_8418__$1);
var G__8420 = cljs.core.chunk_rest(seq__6764_8418__$1);
var G__8421 = c__5673__auto___8419;
var G__8422 = cljs.core.count(c__5673__auto___8419);
var G__8423 = (0);
seq__6764_8408 = G__8420;
chunk__6765_8409 = G__8421;
count__6766_8410 = G__8422;
i__6767_8411 = G__8423;
continue;
} else {
var class_def_8424 = cljs.core.first(seq__6764_8418__$1);
nex.typechecker.collect_class_info(env,class_def_8424);


var G__8425 = cljs.core.next(seq__6764_8418__$1);
var G__8426 = null;
var G__8427 = (0);
var G__8428 = (0);
seq__6764_8408 = G__8425;
chunk__6765_8409 = G__8426;
count__6766_8410 = G__8427;
i__6767_8411 = G__8428;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6768_8429 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6769_8430 = null;
var count__6770_8431 = (0);
var i__6771_8432 = (0);
while(true){
if((i__6771_8432 < count__6770_8431)){
var vec__6778_8433 = chunk__6769_8430.cljs$core$IIndexed$_nth$arity$2(null,i__6771_8432);
var var_name_8434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6778_8433,(0),null);
var var_type_8435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6778_8433,(1),null);
nex.typechecker.env_add_var(env,var_name_8434,var_type_8435);


var G__8436 = seq__6768_8429;
var G__8437 = chunk__6769_8430;
var G__8438 = count__6770_8431;
var G__8439 = (i__6771_8432 + (1));
seq__6768_8429 = G__8436;
chunk__6769_8430 = G__8437;
count__6770_8431 = G__8438;
i__6771_8432 = G__8439;
continue;
} else {
var temp__5823__auto___8440 = cljs.core.seq(seq__6768_8429);
if(temp__5823__auto___8440){
var seq__6768_8441__$1 = temp__5823__auto___8440;
if(cljs.core.chunked_seq_QMARK_(seq__6768_8441__$1)){
var c__5673__auto___8442 = cljs.core.chunk_first(seq__6768_8441__$1);
var G__8443 = cljs.core.chunk_rest(seq__6768_8441__$1);
var G__8444 = c__5673__auto___8442;
var G__8445 = cljs.core.count(c__5673__auto___8442);
var G__8446 = (0);
seq__6768_8429 = G__8443;
chunk__6769_8430 = G__8444;
count__6770_8431 = G__8445;
i__6771_8432 = G__8446;
continue;
} else {
var vec__6781_8447 = cljs.core.first(seq__6768_8441__$1);
var var_name_8448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6781_8447,(0),null);
var var_type_8449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6781_8447,(1),null);
nex.typechecker.env_add_var(env,var_name_8448,var_type_8449);


var G__8450 = cljs.core.next(seq__6768_8441__$1);
var G__8451 = null;
var G__8452 = (0);
var G__8453 = (0);
seq__6768_8429 = G__8450;
chunk__6769_8430 = G__8451;
count__6770_8431 = G__8452;
i__6771_8432 = G__8453;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e6755){var _ = e6755;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
