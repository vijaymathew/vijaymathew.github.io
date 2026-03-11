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
var G__6059 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6060 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6059,G__6060) : nex.typechecker.env_lookup_var.call(null,G__6059,G__6060));
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
 * Update a variable type in the nearest environment where it is defined.
 */
nex.typechecker.env_set_BANG_ = (function nex$typechecker$env_set_BANG_(env,name,type){
if(cljs.core.contains_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(env)),name)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(env),cljs.core.assoc,name,type);
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
return (nex.typechecker.env_set_BANG_.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_set_BANG_.cljs$core$IFn$_invoke$arity$3(parent,name,type) : nex.typechecker.env_set_BANG_.call(null,parent,name,type));
} else {
return null;
}
}
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
var G__6070 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6071 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6070,G__6071) : nex.typechecker.env_lookup_class.call(null,G__6070,G__6071));
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
var G__6086 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6087 = var_name;
return (nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_var_non_nil_QMARK_.cljs$core$IFn$_invoke$arity$2(G__6086,G__6087) : nex.typechecker.env_var_non_nil_QMARK_.call(null,G__6086,G__6087));
} else {
return null;
}
}
});
nex.typechecker.builtin_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, ["Nil",null,"Void",null,"Turtle",null,"Char",null,"Map",null,"File",null,"Console",null,"Real",null,"Decimal",null,"Any",null,"Integer64",null,"Integer",null,"String",null,"Window",null,"Cursor",null,"Process",null,"Channel",null,"Function",null,"Image",null,"Array",null,"Task",null,"Set",null,"Boolean",null], null), null);
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

var seq__6122 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6123 = null;
var count__6124 = (0);
var i__6125 = (0);
while(true){
if((i__6125 < count__6124)){
var vec__6132 = chunk__6123.cljs$core$IIndexed$_nth$arity$2(null,i__6125);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132,(1),null);
var temp__5823__auto___6909 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6909)){
var constraint_6910 = temp__5823__auto___6909;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6910))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6910)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6910)))], null));
}
} else {
}


var G__6912 = seq__6122;
var G__6913 = chunk__6123;
var G__6914 = count__6124;
var G__6915 = (i__6125 + (1));
seq__6122 = G__6912;
chunk__6123 = G__6913;
count__6124 = G__6914;
i__6125 = G__6915;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6122);
if(temp__5823__auto__){
var seq__6122__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6122__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6122__$1);
var G__6916 = cljs.core.chunk_rest(seq__6122__$1);
var G__6917 = c__5673__auto__;
var G__6918 = cljs.core.count(c__5673__auto__);
var G__6919 = (0);
seq__6122 = G__6916;
chunk__6123 = G__6917;
count__6124 = G__6918;
i__6125 = G__6919;
continue;
} else {
var vec__6135 = cljs.core.first(seq__6122__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(1),null);
var temp__5823__auto___6920__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6920__$1)){
var constraint_6921 = temp__5823__auto___6920__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6921))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6921)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6921)))], null));
}
} else {
}


var G__6922 = cljs.core.next(seq__6122__$1);
var G__6923 = null;
var G__6924 = (0);
var G__6925 = (0);
seq__6122 = G__6922;
chunk__6123 = G__6923;
count__6124 = G__6924;
i__6125 = G__6925;
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


var G__6926 = seq__6138;
var G__6927 = chunk__6139;
var G__6928 = count__6140;
var G__6929 = (i__6141 + (1));
seq__6138 = G__6926;
chunk__6139 = G__6927;
count__6140 = G__6928;
i__6141 = G__6929;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6138);
if(temp__5823__auto__){
var seq__6138__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6138__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6138__$1);
var G__6930 = cljs.core.chunk_rest(seq__6138__$1);
var G__6931 = c__5673__auto__;
var G__6932 = cljs.core.count(c__5673__auto__);
var G__6933 = (0);
seq__6138 = G__6930;
chunk__6139 = G__6931;
count__6140 = G__6932;
i__6141 = G__6933;
continue;
} else {
var arg = cljs.core.first(seq__6138__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__6934 = cljs.core.next(seq__6138__$1);
var G__6935 = null;
var G__6936 = (0);
var G__6937 = (0);
seq__6138 = G__6934;
chunk__6139 = G__6935;
count__6140 = G__6936;
i__6141 = G__6937;
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
 * Return feature members with section visibility copied onto each member.
 */
nex.typechecker.feature_members = (function nex$typechecker$feature_members(class_def){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (section){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6149_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6149_SHARP_))){
return p1__6149_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6149_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
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
return cljs.core.some((function (p__6152){
var map__6153 = p__6152;
var map__6153__$1 = cljs.core.__destructure_map(map__6153);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6153__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6154_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6154_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6157){
var map__6158 = p__6157;
var map__6158__$1 = cljs.core.__destructure_map(map__6158);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6158__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6159){
var map__6160 = p__6159;
var map__6160__$1 = cljs.core.__destructure_map(map__6160);
var expr = map__6160__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6160__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6161){
var map__6162 = p__6161;
var map__6162__$1 = cljs.core.__destructure_map(map__6162);
var expr = map__6162__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6162__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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
var G__6163 = operator;
switch (G__6163) {
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
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6164){
var map__6165 = p__6164;
var map__6165__$1 = cljs.core.__destructure_map(map__6165);
var unary_expr = map__6165__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6165__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6165__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6165__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var operand_node = (function (){var or__5142__auto__ = operand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expr;
}
})();
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand_node) : nex.typechecker.check_expression.call(null,env,operand_node));
var G__6166 = operator;
switch (G__6166) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6167_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6167_SHARP_,p1__6167_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6168_SHARP_){
if(cljs.core.truth_(p1__6168_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6168_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6169_SHARP_){
if(cljs.core.truth_(p1__6169_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6169_SHARP_);
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
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6170){
var map__6171 = p__6170;
var map__6171__$1 = cljs.core.__destructure_map(map__6171);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6171__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6171__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6171__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.typechecker.maybe_update_spawn_result_BANG_ = (function nex$typechecker$maybe_update_spawn_result_BANG_(env,value_type){
if(cljs.core.truth_(nex.typechecker.env_lookup_var(env,"__spawn_result_type__"))){
var current = nex.typechecker.env_lookup_var(env,"__spawn_result_type__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,"Void")){
return nex.typechecker.env_set_BANG_(env,"__spawn_result_type__",value_type);
} else {
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,value_type,current))){
return null;
} else {
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,current,value_type))){
return nex.typechecker.env_set_BANG_(env,"__spawn_result_type__",value_type);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent result types in spawn body",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Spawn body assigns incompatible result types: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(current))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(value_type))))], null));

}
}
}
} else {
return null;
}
});
nex.typechecker.check_spawn = (function nex$typechecker$check_spawn(env,p__6172){
var map__6173 = p__6172;
var map__6173__$1 = cljs.core.__destructure_map(map__6173);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6173__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var spawn_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(spawn_env,"result","Any");

nex.typechecker.env_add_var(spawn_env,"__spawn_result_type__","Void");

var seq__6174_6943 = cljs.core.seq(body);
var chunk__6175_6944 = null;
var count__6176_6945 = (0);
var i__6177_6946 = (0);
while(true){
if((i__6177_6946 < count__6176_6945)){
var stmt_6947 = chunk__6175_6944.cljs$core$IIndexed$_nth$arity$2(null,i__6177_6946);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_6947) : nex.typechecker.check_statement.call(null,spawn_env,stmt_6947));


var G__6948 = seq__6174_6943;
var G__6949 = chunk__6175_6944;
var G__6950 = count__6176_6945;
var G__6951 = (i__6177_6946 + (1));
seq__6174_6943 = G__6948;
chunk__6175_6944 = G__6949;
count__6176_6945 = G__6950;
i__6177_6946 = G__6951;
continue;
} else {
var temp__5823__auto___6952 = cljs.core.seq(seq__6174_6943);
if(temp__5823__auto___6952){
var seq__6174_6953__$1 = temp__5823__auto___6952;
if(cljs.core.chunked_seq_QMARK_(seq__6174_6953__$1)){
var c__5673__auto___6954 = cljs.core.chunk_first(seq__6174_6953__$1);
var G__6955 = cljs.core.chunk_rest(seq__6174_6953__$1);
var G__6956 = c__5673__auto___6954;
var G__6957 = cljs.core.count(c__5673__auto___6954);
var G__6958 = (0);
seq__6174_6943 = G__6955;
chunk__6175_6944 = G__6956;
count__6176_6945 = G__6957;
i__6177_6946 = G__6958;
continue;
} else {
var stmt_6959 = cljs.core.first(seq__6174_6953__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_6959) : nex.typechecker.check_statement.call(null,spawn_env,stmt_6959));


var G__6960 = cljs.core.next(seq__6174_6953__$1);
var G__6961 = null;
var G__6962 = (0);
var G__6963 = (0);
seq__6174_6943 = G__6960;
chunk__6175_6944 = G__6961;
count__6176_6945 = G__6962;
i__6177_6946 = G__6963;
continue;
}
} else {
}
}
break;
}

var result_type = nex.typechecker.env_lookup_var(spawn_env,"__spawn_result_type__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result_type,"Void")){
return "Task";
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Task",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_type], null)], null);
}
});
nex.typechecker.builtin_method_signature = (function nex$typechecker$builtin_method_signature(base_type,method,argc,type_map){
var G__6178 = base_type;
switch (G__6178) {
case "Task":
var G__6179 = method;
switch (G__6179) {
case "await":
var G__6180 = argc;
switch (G__6180) {
case (0):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),nex.typechecker.resolve_generic_type("T",type_map)], null);

break;
case (1):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"timeout_ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),nex.typechecker.detachable_version(nex.typechecker.resolve_generic_type("T",type_map))], null);

break;
default:
return null;

}

break;
case "cancel":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
case "is_done":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
case "is_cancelled":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
default:
return null;

}

break;
case "Channel":
var elem_type = (function (){var or__5142__auto__ = nex.typechecker.resolve_generic_type("T",type_map);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})();
var G__6181 = method;
switch (G__6181) {
case "send":
var G__6182 = argc;
switch (G__6182) {
case (1):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),elem_type], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null);

break;
case (2):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),elem_type], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"timeout_ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);

break;
default:
return null;

}

break;
case "try_send":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),elem_type], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
case "receive":
var G__6183 = argc;
switch (G__6183) {
case (0):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),elem_type], null);

break;
case (1):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"timeout_ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),nex.typechecker.detachable_version(elem_type)], null);

break;
default:
return null;

}

break;
case "try_receive":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),nex.typechecker.detachable_version(elem_type)], null);
} else {
return null;
}

break;
case "close":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null);
} else {
return null;
}

break;
case "is_closed":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
case "capacity":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null);
} else {
return null;
}

break;
case "size":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null);
} else {
return null;
}

break;
default:
return null;

}

break;
default:
return null;

}
});
/**
 * Check the type of a method call
 */
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6184){
var map__6185 = p__6184;
var map__6185__$1 = cljs.core.__destructure_map(map__6185);
var expr = map__6185__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6185__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6185__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6185__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6185__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6186 = env;
var G__6187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2(G__6186,G__6187) : nex.typechecker.check_create.call(null,G__6186,G__6187));
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
var temp__5821__auto__ = (function (){var or__5142__auto__ = nex.typechecker.builtin_method_signature(base_type,method,cljs.core.count(args),type_map);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.lookup_class_method(env,base_type,method);
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var method_sig = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6188_6970 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6189_6971 = null;
var count__6190_6972 = (0);
var i__6191_6973 = (0);
while(true){
if((i__6191_6973 < count__6190_6972)){
var vec__6198_6974 = chunk__6189_6971.cljs$core$IIndexed$_nth$arity$2(null,i__6191_6973);
var arg_6975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6198_6974,(0),null);
var param_6976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6198_6974,(1),null);
var arg_type_6977 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6975) : nex.typechecker.check_expression.call(null,env,arg_6975));
var param_type_6978 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6976),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6977,param_type_6978))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6978))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6977))))], null));
}


var G__6979 = seq__6188_6970;
var G__6980 = chunk__6189_6971;
var G__6981 = count__6190_6972;
var G__6982 = (i__6191_6973 + (1));
seq__6188_6970 = G__6979;
chunk__6189_6971 = G__6980;
count__6190_6972 = G__6981;
i__6191_6973 = G__6982;
continue;
} else {
var temp__5823__auto___6983 = cljs.core.seq(seq__6188_6970);
if(temp__5823__auto___6983){
var seq__6188_6984__$1 = temp__5823__auto___6983;
if(cljs.core.chunked_seq_QMARK_(seq__6188_6984__$1)){
var c__5673__auto___6985 = cljs.core.chunk_first(seq__6188_6984__$1);
var G__6986 = cljs.core.chunk_rest(seq__6188_6984__$1);
var G__6987 = c__5673__auto___6985;
var G__6988 = cljs.core.count(c__5673__auto___6985);
var G__6989 = (0);
seq__6188_6970 = G__6986;
chunk__6189_6971 = G__6987;
count__6190_6972 = G__6988;
i__6191_6973 = G__6989;
continue;
} else {
var vec__6201_6990 = cljs.core.first(seq__6188_6984__$1);
var arg_6991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6201_6990,(0),null);
var param_6992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6201_6990,(1),null);
var arg_type_6993 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_6991) : nex.typechecker.check_expression.call(null,env,arg_6991));
var param_type_6994 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_6992),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_6993,param_type_6994))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_6994))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_6993))))], null));
}


var G__6995 = cljs.core.next(seq__6188_6984__$1);
var G__6996 = null;
var G__6997 = (0);
var G__6998 = (0);
seq__6188_6970 = G__6995;
chunk__6189_6971 = G__6996;
count__6190_6972 = G__6997;
i__6191_6973 = G__6998;
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

var G__6204_6999 = env;
var G__6205_7000 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6204_6999,G__6205_7000) : nex.typechecker.check_expression.call(null,G__6204_6999,G__6205_7000));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_7001 = (function (){var G__6206 = env;
var G__6207 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6206,G__6207) : nex.typechecker.check_expression.call(null,G__6206,G__6207));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_7001),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_7001))))], null));
}

var G__6208_7003 = env;
var G__6209_7004 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6208_7003,G__6209_7004) : nex.typechecker.check_expression.call(null,G__6208_7003,G__6209_7004));

return "Boolean";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await_all")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_all expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var tasks_type = nex.typechecker.normalize_type((function (){var G__6210 = env;
var G__6211 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6210,G__6211) : nex.typechecker.check_expression.call(null,G__6210,G__6211));
})());
var task_type = ((cljs.core.map_QMARK_(tasks_type))?(function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(tasks_type);
var type_args = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(tasks_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(tasks_type);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_type,"Array")){
return cljs.core.first(type_args);
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__5140__auto__ = task_type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(nex.typechecker.attachable_type(task_type)))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(nex.typechecker.attachable_type(task_type)):nex.typechecker.attachable_type(task_type)),"Task");
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects Array[Task[T]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_all expects Array[Task[T]], got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(tasks_type))))], null));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = cljs.core.first((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(task_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(task_type);
}
})());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})()], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await_any")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_any expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var tasks_type = nex.typechecker.normalize_type((function (){var G__6212 = env;
var G__6213 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6212,G__6213) : nex.typechecker.check_expression.call(null,G__6212,G__6213));
})());
var task_type = ((cljs.core.map_QMARK_(tasks_type))?(function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(tasks_type);
var type_args = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(tasks_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(tasks_type);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_type,"Array")){
return cljs.core.first(type_args);
} else {
return null;
}
})():null);
if(cljs.core.truth_((function (){var and__5140__auto__ = task_type;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(nex.typechecker.attachable_type(task_type)))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(nex.typechecker.attachable_type(task_type)):nex.typechecker.attachable_type(task_type)),"Task");
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_any expects Array[Task[T]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_any expects Array[Task[T]], got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(tasks_type))))], null));
}

var or__5142__auto__ = cljs.core.first((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(task_type);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(task_type);
}
})());
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
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

var seq__6214_7006 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6215_7007 = null;
var count__6216_7008 = (0);
var i__6217_7009 = (0);
while(true){
if((i__6217_7009 < count__6216_7008)){
var vec__6224_7010 = chunk__6215_7007.cljs$core$IIndexed$_nth$arity$2(null,i__6217_7009);
var arg_7011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224_7010,(0),null);
var param_7012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6224_7010,(1),null);
var arg_type_7013 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7011) : nex.typechecker.check_expression.call(null,env,arg_7011));
var param_type_7014 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7012),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7013,param_type_7014))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7014))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7013))))], null));
}


var G__7015 = seq__6214_7006;
var G__7016 = chunk__6215_7007;
var G__7017 = count__6216_7008;
var G__7018 = (i__6217_7009 + (1));
seq__6214_7006 = G__7015;
chunk__6215_7007 = G__7016;
count__6216_7008 = G__7017;
i__6217_7009 = G__7018;
continue;
} else {
var temp__5823__auto___7019 = cljs.core.seq(seq__6214_7006);
if(temp__5823__auto___7019){
var seq__6214_7020__$1 = temp__5823__auto___7019;
if(cljs.core.chunked_seq_QMARK_(seq__6214_7020__$1)){
var c__5673__auto___7021 = cljs.core.chunk_first(seq__6214_7020__$1);
var G__7022 = cljs.core.chunk_rest(seq__6214_7020__$1);
var G__7023 = c__5673__auto___7021;
var G__7024 = cljs.core.count(c__5673__auto___7021);
var G__7025 = (0);
seq__6214_7006 = G__7022;
chunk__6215_7007 = G__7023;
count__6216_7008 = G__7024;
i__6217_7009 = G__7025;
continue;
} else {
var vec__6227_7026 = cljs.core.first(seq__6214_7020__$1);
var arg_7027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6227_7026,(0),null);
var param_7028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6227_7026,(1),null);
var arg_type_7029 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7027) : nex.typechecker.check_expression.call(null,env,arg_7027));
var param_type_7030 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7028),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7029,param_type_7030))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7030))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7029))))], null));
}


var G__7031 = cljs.core.next(seq__6214_7020__$1);
var G__7032 = null;
var G__7033 = (0);
var G__7034 = (0);
seq__6214_7006 = G__7031;
chunk__6215_7007 = G__7032;
count__6216_7008 = G__7033;
i__6217_7009 = G__7034;
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

var seq__6230_7035 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6231_7036 = null;
var count__6232_7037 = (0);
var i__6233_7038 = (0);
while(true){
if((i__6233_7038 < count__6232_7037)){
var vec__6240_7039 = chunk__6231_7036.cljs$core$IIndexed$_nth$arity$2(null,i__6233_7038);
var arg_7040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240_7039,(0),null);
var param_7041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240_7039,(1),null);
var arg_type_7042 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7040) : nex.typechecker.check_expression.call(null,env,arg_7040));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7042,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7041)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7041))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7042)))], null));
}


var G__7043 = seq__6230_7035;
var G__7044 = chunk__6231_7036;
var G__7045 = count__6232_7037;
var G__7046 = (i__6233_7038 + (1));
seq__6230_7035 = G__7043;
chunk__6231_7036 = G__7044;
count__6232_7037 = G__7045;
i__6233_7038 = G__7046;
continue;
} else {
var temp__5823__auto___7047 = cljs.core.seq(seq__6230_7035);
if(temp__5823__auto___7047){
var seq__6230_7048__$1 = temp__5823__auto___7047;
if(cljs.core.chunked_seq_QMARK_(seq__6230_7048__$1)){
var c__5673__auto___7049 = cljs.core.chunk_first(seq__6230_7048__$1);
var G__7050 = cljs.core.chunk_rest(seq__6230_7048__$1);
var G__7051 = c__5673__auto___7049;
var G__7052 = cljs.core.count(c__5673__auto___7049);
var G__7053 = (0);
seq__6230_7035 = G__7050;
chunk__6231_7036 = G__7051;
count__6232_7037 = G__7052;
i__6233_7038 = G__7053;
continue;
} else {
var vec__6243_7054 = cljs.core.first(seq__6230_7048__$1);
var arg_7055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243_7054,(0),null);
var param_7056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6243_7054,(1),null);
var arg_type_7058 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7055) : nex.typechecker.check_expression.call(null,env,arg_7055));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7058,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7056)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7056))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7058)))], null));
}


var G__7059 = cljs.core.next(seq__6230_7048__$1);
var G__7060 = null;
var G__7061 = (0);
var G__7062 = (0);
seq__6230_7035 = G__7059;
chunk__6231_7036 = G__7060;
count__6232_7037 = G__7061;
i__6233_7038 = G__7062;
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
var seq__6246_7063 = cljs.core.seq(args);
var chunk__6247_7064 = null;
var count__6248_7065 = (0);
var i__6249_7066 = (0);
while(true){
if((i__6249_7066 < count__6248_7065)){
var arg_7067 = chunk__6247_7064.cljs$core$IIndexed$_nth$arity$2(null,i__6249_7066);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7067) : nex.typechecker.check_expression.call(null,env,arg_7067));


var G__7068 = seq__6246_7063;
var G__7069 = chunk__6247_7064;
var G__7070 = count__6248_7065;
var G__7071 = (i__6249_7066 + (1));
seq__6246_7063 = G__7068;
chunk__6247_7064 = G__7069;
count__6248_7065 = G__7070;
i__6249_7066 = G__7071;
continue;
} else {
var temp__5823__auto___7072 = cljs.core.seq(seq__6246_7063);
if(temp__5823__auto___7072){
var seq__6246_7073__$1 = temp__5823__auto___7072;
if(cljs.core.chunked_seq_QMARK_(seq__6246_7073__$1)){
var c__5673__auto___7074 = cljs.core.chunk_first(seq__6246_7073__$1);
var G__7075 = cljs.core.chunk_rest(seq__6246_7073__$1);
var G__7076 = c__5673__auto___7074;
var G__7077 = cljs.core.count(c__5673__auto___7074);
var G__7078 = (0);
seq__6246_7063 = G__7075;
chunk__6247_7064 = G__7076;
count__6248_7065 = G__7077;
i__6249_7066 = G__7078;
continue;
} else {
var arg_7079 = cljs.core.first(seq__6246_7073__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7079) : nex.typechecker.check_expression.call(null,env,arg_7079));


var G__7080 = cljs.core.next(seq__6246_7073__$1);
var G__7081 = null;
var G__7082 = (0);
var G__7083 = (0);
seq__6246_7063 = G__7080;
chunk__6247_7064 = G__7081;
count__6248_7065 = G__7082;
i__6249_7066 = G__7083;
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
var seq__6250_7084 = cljs.core.seq(args);
var chunk__6251_7085 = null;
var count__6252_7086 = (0);
var i__6253_7087 = (0);
while(true){
if((i__6253_7087 < count__6252_7086)){
var arg_7088 = chunk__6251_7085.cljs$core$IIndexed$_nth$arity$2(null,i__6253_7087);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7088) : nex.typechecker.check_expression.call(null,env,arg_7088));


var G__7089 = seq__6250_7084;
var G__7090 = chunk__6251_7085;
var G__7091 = count__6252_7086;
var G__7092 = (i__6253_7087 + (1));
seq__6250_7084 = G__7089;
chunk__6251_7085 = G__7090;
count__6252_7086 = G__7091;
i__6253_7087 = G__7092;
continue;
} else {
var temp__5823__auto___7095 = cljs.core.seq(seq__6250_7084);
if(temp__5823__auto___7095){
var seq__6250_7096__$1 = temp__5823__auto___7095;
if(cljs.core.chunked_seq_QMARK_(seq__6250_7096__$1)){
var c__5673__auto___7097 = cljs.core.chunk_first(seq__6250_7096__$1);
var G__7100 = cljs.core.chunk_rest(seq__6250_7096__$1);
var G__7101 = c__5673__auto___7097;
var G__7102 = cljs.core.count(c__5673__auto___7097);
var G__7103 = (0);
seq__6250_7084 = G__7100;
chunk__6251_7085 = G__7101;
count__6252_7086 = G__7102;
i__6253_7087 = G__7103;
continue;
} else {
var arg_7104 = cljs.core.first(seq__6250_7096__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7104) : nex.typechecker.check_expression.call(null,env,arg_7104));


var G__7105 = cljs.core.next(seq__6250_7096__$1);
var G__7106 = null;
var G__7107 = (0);
var G__7108 = (0);
seq__6250_7084 = G__7105;
chunk__6251_7085 = G__7106;
count__6252_7086 = G__7107;
i__6253_7087 = G__7108;
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
}
}
});
/**
 * Check the type of a create expression
 */
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6254){
var map__6255 = p__6254;
var map__6255__$1 = cljs.core.__destructure_map(map__6255);
var expr = map__6255__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Console")){
return "Console";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Process")){
return "Process";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_name,"Channel")){
if((constructor$ == null)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(constructor$,"with_capacity")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity expects 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Channel.with_capacity expects exactly 1 Integer argument")], null));
}

var arg_type_7109 = (function (){var G__6256 = env;
var G__6257 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6256,G__6257) : nex.typechecker.check_expression.call(null,G__6256,G__6257));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7109,"Integer"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity requires Integer capacity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.with_capacity expects Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7109))))], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: Channel."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: Channel."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constructor$)))], null));

}
}

if(cljs.core.seq(generic_args)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Channel",new cljs.core.Keyword(null,"type-args","type-args",1580007623),generic_args], null);
} else {
return "Channel";
}
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
var seq__6258_7110 = cljs.core.seq(args);
var chunk__6259_7111 = null;
var count__6260_7112 = (0);
var i__6261_7113 = (0);
while(true){
if((i__6261_7113 < count__6260_7112)){
var arg_7114 = chunk__6259_7111.cljs$core$IIndexed$_nth$arity$2(null,i__6261_7113);
var arg_type_7115 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7114) : nex.typechecker.check_expression.call(null,env,arg_7114));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7115,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7116 = seq__6258_7110;
var G__7117 = chunk__6259_7111;
var G__7118 = count__6260_7112;
var G__7119 = (i__6261_7113 + (1));
seq__6258_7110 = G__7116;
chunk__6259_7111 = G__7117;
count__6260_7112 = G__7118;
i__6261_7113 = G__7119;
continue;
} else {
var temp__5823__auto___7120 = cljs.core.seq(seq__6258_7110);
if(temp__5823__auto___7120){
var seq__6258_7121__$1 = temp__5823__auto___7120;
if(cljs.core.chunked_seq_QMARK_(seq__6258_7121__$1)){
var c__5673__auto___7122 = cljs.core.chunk_first(seq__6258_7121__$1);
var G__7123 = cljs.core.chunk_rest(seq__6258_7121__$1);
var G__7124 = c__5673__auto___7122;
var G__7125 = cljs.core.count(c__5673__auto___7122);
var G__7126 = (0);
seq__6258_7110 = G__7123;
chunk__6259_7111 = G__7124;
count__6260_7112 = G__7125;
i__6261_7113 = G__7126;
continue;
} else {
var arg_7127 = cljs.core.first(seq__6258_7121__$1);
var arg_type_7128 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7127) : nex.typechecker.check_expression.call(null,env,arg_7127));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7128,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7129 = cljs.core.next(seq__6258_7121__$1);
var G__7130 = null;
var G__7131 = (0);
var G__7132 = (0);
seq__6258_7110 = G__7129;
chunk__6259_7111 = G__7130;
count__6260_7112 = G__7131;
i__6261_7113 = G__7132;
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
var constructors_7133 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__7134 = cljs.core.seq(constructors_7133);
var type_map_7135 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_7136 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_7137 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_7136);
if(((has_constructors_QMARK__7134) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_7137)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7136)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7136)))], null));
}

var params_7138 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_7137);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_7138),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7136)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_7138))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6262_7139 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_7138));
var chunk__6263_7140 = null;
var count__6264_7141 = (0);
var i__6265_7142 = (0);
while(true){
if((i__6265_7142 < count__6264_7141)){
var vec__6272_7143 = chunk__6263_7140.cljs$core$IIndexed$_nth$arity$2(null,i__6265_7142);
var arg_7144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272_7143,(0),null);
var param_7145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6272_7143,(1),null);
var arg_type_7146 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7144) : nex.typechecker.check_expression.call(null,env,arg_7144));
var param_type_7147 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7145),type_map_7135);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7146,param_type_7147))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7136)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7147))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7146))))], null));
}


var G__7148 = seq__6262_7139;
var G__7149 = chunk__6263_7140;
var G__7150 = count__6264_7141;
var G__7151 = (i__6265_7142 + (1));
seq__6262_7139 = G__7148;
chunk__6263_7140 = G__7149;
count__6264_7141 = G__7150;
i__6265_7142 = G__7151;
continue;
} else {
var temp__5823__auto___7152 = cljs.core.seq(seq__6262_7139);
if(temp__5823__auto___7152){
var seq__6262_7153__$1 = temp__5823__auto___7152;
if(cljs.core.chunked_seq_QMARK_(seq__6262_7153__$1)){
var c__5673__auto___7154 = cljs.core.chunk_first(seq__6262_7153__$1);
var G__7155 = cljs.core.chunk_rest(seq__6262_7153__$1);
var G__7156 = c__5673__auto___7154;
var G__7157 = cljs.core.count(c__5673__auto___7154);
var G__7158 = (0);
seq__6262_7139 = G__7155;
chunk__6263_7140 = G__7156;
count__6264_7141 = G__7157;
i__6265_7142 = G__7158;
continue;
} else {
var vec__6275_7159 = cljs.core.first(seq__6262_7153__$1);
var arg_7160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275_7159,(0),null);
var param_7161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6275_7159,(1),null);
var arg_type_7162 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7160) : nex.typechecker.check_expression.call(null,env,arg_7160));
var param_type_7163 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7161),type_map_7135);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7162,param_type_7163))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7136)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7163))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7162))))], null));
}


var G__7164 = cljs.core.next(seq__6262_7153__$1);
var G__7165 = null;
var G__7166 = (0);
var G__7167 = (0);
seq__6262_7139 = G__7164;
chunk__6263_7140 = G__7165;
count__6264_7141 = G__7166;
i__6265_7142 = G__7167;
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
}
});
/**
 * Check the type of an array literal
 */
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6278){
var map__6279 = p__6278;
var map__6279__$1 = cljs.core.__destructure_map(map__6279);
var expr = map__6279__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6279__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6280 = env;
var G__6281 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6280,G__6281) : nex.typechecker.check_expression.call(null,G__6280,G__6281));
})();
var seq__6282_7168 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6283_7169 = null;
var count__6284_7170 = (0);
var i__6285_7171 = (0);
while(true){
if((i__6285_7171 < count__6284_7170)){
var elem_7172 = chunk__6283_7169.cljs$core$IIndexed$_nth$arity$2(null,i__6285_7171);
var elem_type_7173 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7172) : nex.typechecker.check_expression.call(null,env,elem_7172));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7173))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7173))))], null));
}


var G__7174 = seq__6282_7168;
var G__7175 = chunk__6283_7169;
var G__7176 = count__6284_7170;
var G__7177 = (i__6285_7171 + (1));
seq__6282_7168 = G__7174;
chunk__6283_7169 = G__7175;
count__6284_7170 = G__7176;
i__6285_7171 = G__7177;
continue;
} else {
var temp__5823__auto___7178 = cljs.core.seq(seq__6282_7168);
if(temp__5823__auto___7178){
var seq__6282_7179__$1 = temp__5823__auto___7178;
if(cljs.core.chunked_seq_QMARK_(seq__6282_7179__$1)){
var c__5673__auto___7180 = cljs.core.chunk_first(seq__6282_7179__$1);
var G__7181 = cljs.core.chunk_rest(seq__6282_7179__$1);
var G__7182 = c__5673__auto___7180;
var G__7183 = cljs.core.count(c__5673__auto___7180);
var G__7184 = (0);
seq__6282_7168 = G__7181;
chunk__6283_7169 = G__7182;
count__6284_7170 = G__7183;
i__6285_7171 = G__7184;
continue;
} else {
var elem_7185 = cljs.core.first(seq__6282_7179__$1);
var elem_type_7186 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7185) : nex.typechecker.check_expression.call(null,env,elem_7185));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7186))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7186))))], null));
}


var G__7187 = cljs.core.next(seq__6282_7179__$1);
var G__7188 = null;
var G__7189 = (0);
var G__7190 = (0);
seq__6282_7168 = G__7187;
chunk__6283_7169 = G__7188;
count__6284_7170 = G__7189;
i__6285_7171 = G__7190;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6286){
var map__6287 = p__6286;
var map__6287__$1 = cljs.core.__destructure_map(map__6287);
var expr = map__6287__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6287__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6288 = env;
var G__6289 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6288,G__6289) : nex.typechecker.check_expression.call(null,G__6288,G__6289));
})();
var val_type = (function (){var G__6290 = env;
var G__6291 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6290,G__6291) : nex.typechecker.check_expression.call(null,G__6290,G__6291));
})();
var seq__6292_7195 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6293_7196 = null;
var count__6294_7197 = (0);
var i__6295_7198 = (0);
while(true){
if((i__6295_7198 < count__6294_7197)){
var entry_7199 = chunk__6293_7196.cljs$core$IIndexed$_nth$arity$2(null,i__6295_7198);
var k_type_7200 = (function (){var G__6304 = env;
var G__6305 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7199);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6304,G__6305) : nex.typechecker.check_expression.call(null,G__6304,G__6305));
})();
var v_type_7201 = (function (){var G__6306 = env;
var G__6307 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7199);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6306,G__6307) : nex.typechecker.check_expression.call(null,G__6306,G__6307));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7200);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7201);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7202 = seq__6292_7195;
var G__7203 = chunk__6293_7196;
var G__7204 = count__6294_7197;
var G__7205 = (i__6295_7198 + (1));
seq__6292_7195 = G__7202;
chunk__6293_7196 = G__7203;
count__6294_7197 = G__7204;
i__6295_7198 = G__7205;
continue;
} else {
var temp__5823__auto___7206 = cljs.core.seq(seq__6292_7195);
if(temp__5823__auto___7206){
var seq__6292_7207__$1 = temp__5823__auto___7206;
if(cljs.core.chunked_seq_QMARK_(seq__6292_7207__$1)){
var c__5673__auto___7208 = cljs.core.chunk_first(seq__6292_7207__$1);
var G__7209 = cljs.core.chunk_rest(seq__6292_7207__$1);
var G__7210 = c__5673__auto___7208;
var G__7211 = cljs.core.count(c__5673__auto___7208);
var G__7212 = (0);
seq__6292_7195 = G__7209;
chunk__6293_7196 = G__7210;
count__6294_7197 = G__7211;
i__6295_7198 = G__7212;
continue;
} else {
var entry_7213 = cljs.core.first(seq__6292_7207__$1);
var k_type_7214 = (function (){var G__6308 = env;
var G__6309 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7213);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6308,G__6309) : nex.typechecker.check_expression.call(null,G__6308,G__6309));
})();
var v_type_7215 = (function (){var G__6310 = env;
var G__6311 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7213);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6310,G__6311) : nex.typechecker.check_expression.call(null,G__6310,G__6311));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7214);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7215);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7216 = cljs.core.next(seq__6292_7207__$1);
var G__7217 = null;
var G__7218 = (0);
var G__7219 = (0);
seq__6292_7195 = G__7216;
chunk__6293_7196 = G__7217;
count__6294_7197 = G__7218;
i__6295_7198 = G__7219;
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
nex.typechecker.check_set_literal = (function nex$typechecker$check_set_literal(env,p__6312){
var map__6313 = p__6312;
var map__6313__$1 = cljs.core.__destructure_map(map__6313);
var expr = map__6313__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6313__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null)], null);
} else {
var first_type = (function (){var G__6314 = env;
var G__6315 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6314,G__6315) : nex.typechecker.check_expression.call(null,G__6314,G__6315));
})();
var seq__6316_7221 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6317_7222 = null;
var count__6318_7223 = (0);
var i__6319_7224 = (0);
while(true){
if((i__6319_7224 < count__6318_7223)){
var elem_7225 = chunk__6317_7222.cljs$core$IIndexed$_nth$arity$2(null,i__6319_7224);
var elem_type_7226 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7225) : nex.typechecker.check_expression.call(null,env,elem_7225));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7226))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7226))))], null));
}


var G__7227 = seq__6316_7221;
var G__7228 = chunk__6317_7222;
var G__7229 = count__6318_7223;
var G__7230 = (i__6319_7224 + (1));
seq__6316_7221 = G__7227;
chunk__6317_7222 = G__7228;
count__6318_7223 = G__7229;
i__6319_7224 = G__7230;
continue;
} else {
var temp__5823__auto___7231 = cljs.core.seq(seq__6316_7221);
if(temp__5823__auto___7231){
var seq__6316_7232__$1 = temp__5823__auto___7231;
if(cljs.core.chunked_seq_QMARK_(seq__6316_7232__$1)){
var c__5673__auto___7233 = cljs.core.chunk_first(seq__6316_7232__$1);
var G__7234 = cljs.core.chunk_rest(seq__6316_7232__$1);
var G__7235 = c__5673__auto___7233;
var G__7236 = cljs.core.count(c__5673__auto___7233);
var G__7237 = (0);
seq__6316_7221 = G__7234;
chunk__6317_7222 = G__7235;
count__6318_7223 = G__7236;
i__6319_7224 = G__7237;
continue;
} else {
var elem_7238 = cljs.core.first(seq__6316_7232__$1);
var elem_type_7239 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7238) : nex.typechecker.check_expression.call(null,env,elem_7238));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7239))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7239))))], null));
}


var G__7240 = cljs.core.next(seq__6316_7232__$1);
var G__7241 = null;
var G__7242 = (0);
var G__7243 = (0);
seq__6316_7221 = G__7240;
chunk__6317_7222 = G__7241;
count__6318_7223 = G__7242;
i__6319_7224 = G__7243;
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
var G__6320 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6320__$1 = (((G__6320 instanceof cljs.core.Keyword))?G__6320.fqn:null);
switch (G__6320__$1) {
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
var target_type = (function (){var G__6321 = env;
var G__6322 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6321,G__6322) : nex.typechecker.check_expression.call(null,G__6321,G__6322));
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
var cond_type = (function (){var G__6323 = env;
var G__6324 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6323,G__6324) : nex.typechecker.check_expression.call(null,G__6323,G__6324));
})();
var cons_type = (function (){var G__6325 = env;
var G__6326 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6325,G__6326) : nex.typechecker.check_expression.call(null,G__6325,G__6326));
})();
var alt_type = (function (){var G__6327 = env;
var G__6328 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6327,G__6328) : nex.typechecker.check_expression.call(null,G__6327,G__6328));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6329 = env;
var G__6330 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6329,G__6330) : nex.typechecker.check_expression.call(null,G__6329,G__6330));

break;
case "convert":
return nex.typechecker.check_convert(env,expr);

break;
case "spawn":
return nex.typechecker.check_spawn(env,expr);

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6331){
var map__6332 = p__6331;
var map__6332__$1 = cljs.core.__destructure_map(map__6332);
var stmt = map__6332__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6332__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6332__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5823__auto___7254 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto___7254)){
var current_class_7255 = temp__5823__auto___7254;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class_7255,target))){
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
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type mismatch in assignment to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(target)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Cannot assign "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(val_type))+" to variable of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(var_type))))], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,"result")){
return nex.typechecker.maybe_update_spawn_result_BANG_(env,val_type);
} else {
return null;
}
});
/**
 * Check a let statement
 */
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6333){
var map__6334 = p__6333;
var map__6334__$1 = cljs.core.__destructure_map(map__6334);
var stmt = map__6334__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"value","value",305978217));
var synthetic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6334__$1,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862));
var val_type = nex.typechecker.check_expression(env,value);
var inferred_type = (function (){var or__5142__auto__ = var_type;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return val_type;
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

nex.typechecker.env_add_var(env,name,inferred_type);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,"result")){
return nex.typechecker.maybe_update_spawn_result_BANG_(env,inferred_type);
} else {
return null;
}
});
/**
 * Check an if statement
 */
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6335){
var map__6336 = p__6335;
var map__6336__$1 = cljs.core.__destructure_map(map__6336);
var stmt = map__6336__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6336__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6336__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6336__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6336__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_7256 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7256,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7256)))], null));
}

var then_env_7257 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7258 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___7258)){
var non_nil_var_7259 = temp__5823__auto___7258;
nex.typechecker.env_mark_non_nil(then_env_7257,non_nil_var_7259);
} else {
}

var temp__5823__auto___7261 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___7261)){
var map__6337_7262 = temp__5823__auto___7261;
var map__6337_7263__$1 = cljs.core.__destructure_map(map__6337_7262);
var name_7264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337_7263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337_7263__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_7257,name_7264,type_7265);

nex.typechecker.env_mark_non_nil(then_env_7257,name_7264);
} else {
}

var seq__6338_7266 = cljs.core.seq(then);
var chunk__6339_7267 = null;
var count__6340_7268 = (0);
var i__6341_7269 = (0);
while(true){
if((i__6341_7269 < count__6340_7268)){
var stmt_7270__$1 = chunk__6339_7267.cljs$core$IIndexed$_nth$arity$2(null,i__6341_7269);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7257,stmt_7270__$1) : nex.typechecker.check_statement.call(null,then_env_7257,stmt_7270__$1));


var G__7271 = seq__6338_7266;
var G__7272 = chunk__6339_7267;
var G__7273 = count__6340_7268;
var G__7274 = (i__6341_7269 + (1));
seq__6338_7266 = G__7271;
chunk__6339_7267 = G__7272;
count__6340_7268 = G__7273;
i__6341_7269 = G__7274;
continue;
} else {
var temp__5823__auto___7275 = cljs.core.seq(seq__6338_7266);
if(temp__5823__auto___7275){
var seq__6338_7276__$1 = temp__5823__auto___7275;
if(cljs.core.chunked_seq_QMARK_(seq__6338_7276__$1)){
var c__5673__auto___7277 = cljs.core.chunk_first(seq__6338_7276__$1);
var G__7278 = cljs.core.chunk_rest(seq__6338_7276__$1);
var G__7279 = c__5673__auto___7277;
var G__7280 = cljs.core.count(c__5673__auto___7277);
var G__7281 = (0);
seq__6338_7266 = G__7278;
chunk__6339_7267 = G__7279;
count__6340_7268 = G__7280;
i__6341_7269 = G__7281;
continue;
} else {
var stmt_7282__$1 = cljs.core.first(seq__6338_7276__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7257,stmt_7282__$1) : nex.typechecker.check_statement.call(null,then_env_7257,stmt_7282__$1));


var G__7283 = cljs.core.next(seq__6338_7276__$1);
var G__7284 = null;
var G__7285 = (0);
var G__7286 = (0);
seq__6338_7266 = G__7283;
chunk__6339_7267 = G__7284;
count__6340_7268 = G__7285;
i__6341_7269 = G__7286;
continue;
}
} else {
}
}
break;
}

var seq__6342_7287 = cljs.core.seq(elseif);
var chunk__6343_7288 = null;
var count__6344_7289 = (0);
var i__6345_7290 = (0);
while(true){
if((i__6345_7290 < count__6344_7289)){
var clause_7292 = chunk__6343_7288.cljs$core$IIndexed$_nth$arity$2(null,i__6345_7290);
var ei_cond_type_7293 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7292));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7293,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7293)))], null));
}

var elseif_env_7295 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7296 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7292));
if(cljs.core.truth_(temp__5823__auto___7296)){
var non_nil_var_7297 = temp__5823__auto___7296;
nex.typechecker.env_mark_non_nil(elseif_env_7295,non_nil_var_7297);
} else {
}

var temp__5823__auto___7298 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7292));
if(cljs.core.truth_(temp__5823__auto___7298)){
var map__6356_7299 = temp__5823__auto___7298;
var map__6356_7300__$1 = cljs.core.__destructure_map(map__6356_7299);
var name_7301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6356_7300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6356_7300__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7295,name_7301,type_7302);

nex.typechecker.env_mark_non_nil(elseif_env_7295,name_7301);
} else {
}

var seq__6357_7303 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7292));
var chunk__6358_7304 = null;
var count__6359_7305 = (0);
var i__6360_7306 = (0);
while(true){
if((i__6360_7306 < count__6359_7305)){
var stmt_7307__$1 = chunk__6358_7304.cljs$core$IIndexed$_nth$arity$2(null,i__6360_7306);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7295,stmt_7307__$1) : nex.typechecker.check_statement.call(null,elseif_env_7295,stmt_7307__$1));


var G__7308 = seq__6357_7303;
var G__7309 = chunk__6358_7304;
var G__7310 = count__6359_7305;
var G__7311 = (i__6360_7306 + (1));
seq__6357_7303 = G__7308;
chunk__6358_7304 = G__7309;
count__6359_7305 = G__7310;
i__6360_7306 = G__7311;
continue;
} else {
var temp__5823__auto___7312 = cljs.core.seq(seq__6357_7303);
if(temp__5823__auto___7312){
var seq__6357_7313__$1 = temp__5823__auto___7312;
if(cljs.core.chunked_seq_QMARK_(seq__6357_7313__$1)){
var c__5673__auto___7314 = cljs.core.chunk_first(seq__6357_7313__$1);
var G__7315 = cljs.core.chunk_rest(seq__6357_7313__$1);
var G__7316 = c__5673__auto___7314;
var G__7317 = cljs.core.count(c__5673__auto___7314);
var G__7318 = (0);
seq__6357_7303 = G__7315;
chunk__6358_7304 = G__7316;
count__6359_7305 = G__7317;
i__6360_7306 = G__7318;
continue;
} else {
var stmt_7319__$1 = cljs.core.first(seq__6357_7313__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7295,stmt_7319__$1) : nex.typechecker.check_statement.call(null,elseif_env_7295,stmt_7319__$1));


var G__7320 = cljs.core.next(seq__6357_7313__$1);
var G__7321 = null;
var G__7322 = (0);
var G__7323 = (0);
seq__6357_7303 = G__7320;
chunk__6358_7304 = G__7321;
count__6359_7305 = G__7322;
i__6360_7306 = G__7323;
continue;
}
} else {
}
}
break;
}


var G__7324 = seq__6342_7287;
var G__7325 = chunk__6343_7288;
var G__7326 = count__6344_7289;
var G__7327 = (i__6345_7290 + (1));
seq__6342_7287 = G__7324;
chunk__6343_7288 = G__7325;
count__6344_7289 = G__7326;
i__6345_7290 = G__7327;
continue;
} else {
var temp__5823__auto___7328 = cljs.core.seq(seq__6342_7287);
if(temp__5823__auto___7328){
var seq__6342_7329__$1 = temp__5823__auto___7328;
if(cljs.core.chunked_seq_QMARK_(seq__6342_7329__$1)){
var c__5673__auto___7330 = cljs.core.chunk_first(seq__6342_7329__$1);
var G__7331 = cljs.core.chunk_rest(seq__6342_7329__$1);
var G__7332 = c__5673__auto___7330;
var G__7333 = cljs.core.count(c__5673__auto___7330);
var G__7334 = (0);
seq__6342_7287 = G__7331;
chunk__6343_7288 = G__7332;
count__6344_7289 = G__7333;
i__6345_7290 = G__7334;
continue;
} else {
var clause_7336 = cljs.core.first(seq__6342_7329__$1);
var ei_cond_type_7337 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7336));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7337,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7337)))], null));
}

var elseif_env_7338 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7339__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7336));
if(cljs.core.truth_(temp__5823__auto___7339__$1)){
var non_nil_var_7340 = temp__5823__auto___7339__$1;
nex.typechecker.env_mark_non_nil(elseif_env_7338,non_nil_var_7340);
} else {
}

var temp__5823__auto___7341__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7336));
if(cljs.core.truth_(temp__5823__auto___7341__$1)){
var map__6361_7342 = temp__5823__auto___7341__$1;
var map__6361_7343__$1 = cljs.core.__destructure_map(map__6361_7342);
var name_7344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6361_7343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6361_7343__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7338,name_7344,type_7345);

nex.typechecker.env_mark_non_nil(elseif_env_7338,name_7344);
} else {
}

var seq__6362_7346 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7336));
var chunk__6363_7347 = null;
var count__6364_7348 = (0);
var i__6365_7349 = (0);
while(true){
if((i__6365_7349 < count__6364_7348)){
var stmt_7350__$1 = chunk__6363_7347.cljs$core$IIndexed$_nth$arity$2(null,i__6365_7349);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7338,stmt_7350__$1) : nex.typechecker.check_statement.call(null,elseif_env_7338,stmt_7350__$1));


var G__7351 = seq__6362_7346;
var G__7352 = chunk__6363_7347;
var G__7353 = count__6364_7348;
var G__7354 = (i__6365_7349 + (1));
seq__6362_7346 = G__7351;
chunk__6363_7347 = G__7352;
count__6364_7348 = G__7353;
i__6365_7349 = G__7354;
continue;
} else {
var temp__5823__auto___7355__$1 = cljs.core.seq(seq__6362_7346);
if(temp__5823__auto___7355__$1){
var seq__6362_7356__$1 = temp__5823__auto___7355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6362_7356__$1)){
var c__5673__auto___7357 = cljs.core.chunk_first(seq__6362_7356__$1);
var G__7358 = cljs.core.chunk_rest(seq__6362_7356__$1);
var G__7359 = c__5673__auto___7357;
var G__7360 = cljs.core.count(c__5673__auto___7357);
var G__7361 = (0);
seq__6362_7346 = G__7358;
chunk__6363_7347 = G__7359;
count__6364_7348 = G__7360;
i__6365_7349 = G__7361;
continue;
} else {
var stmt_7362__$1 = cljs.core.first(seq__6362_7356__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7338,stmt_7362__$1) : nex.typechecker.check_statement.call(null,elseif_env_7338,stmt_7362__$1));


var G__7363 = cljs.core.next(seq__6362_7356__$1);
var G__7364 = null;
var G__7365 = (0);
var G__7366 = (0);
seq__6362_7346 = G__7363;
chunk__6363_7347 = G__7364;
count__6364_7348 = G__7365;
i__6365_7349 = G__7366;
continue;
}
} else {
}
}
break;
}


var G__7367 = cljs.core.next(seq__6342_7329__$1);
var G__7368 = null;
var G__7369 = (0);
var G__7370 = (0);
seq__6342_7287 = G__7367;
chunk__6343_7288 = G__7368;
count__6344_7289 = G__7369;
i__6345_7290 = G__7370;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6366 = cljs.core.seq(else$);
var chunk__6367 = null;
var count__6368 = (0);
var i__6369 = (0);
while(true){
if((i__6369 < count__6368)){
var stmt__$1 = chunk__6367.cljs$core$IIndexed$_nth$arity$2(null,i__6369);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7371 = seq__6366;
var G__7372 = chunk__6367;
var G__7373 = count__6368;
var G__7374 = (i__6369 + (1));
seq__6366 = G__7371;
chunk__6367 = G__7372;
count__6368 = G__7373;
i__6369 = G__7374;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6366);
if(temp__5823__auto__){
var seq__6366__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6366__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6366__$1);
var G__7375 = cljs.core.chunk_rest(seq__6366__$1);
var G__7376 = c__5673__auto__;
var G__7377 = cljs.core.count(c__5673__auto__);
var G__7378 = (0);
seq__6366 = G__7375;
chunk__6367 = G__7376;
count__6368 = G__7377;
i__6369 = G__7378;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6366__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7379 = cljs.core.next(seq__6366__$1);
var G__7380 = null;
var G__7381 = (0);
var G__7382 = (0);
seq__6366 = G__7379;
chunk__6367 = G__7380;
count__6368 = G__7381;
i__6369 = G__7382;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6370){
var map__6371 = p__6370;
var map__6371__$1 = cljs.core.__destructure_map(map__6371);
var stmt = map__6371__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6371__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6371__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6371__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6371__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6371__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6372_7383 = cljs.core.seq(init);
var chunk__6373_7384 = null;
var count__6374_7385 = (0);
var i__6375_7386 = (0);
while(true){
if((i__6375_7386 < count__6374_7385)){
var s_7387 = chunk__6373_7384.cljs$core$IIndexed$_nth$arity$2(null,i__6375_7386);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7387) : nex.typechecker.check_statement.call(null,loop_env,s_7387));


var G__7388 = seq__6372_7383;
var G__7389 = chunk__6373_7384;
var G__7390 = count__6374_7385;
var G__7391 = (i__6375_7386 + (1));
seq__6372_7383 = G__7388;
chunk__6373_7384 = G__7389;
count__6374_7385 = G__7390;
i__6375_7386 = G__7391;
continue;
} else {
var temp__5823__auto___7392 = cljs.core.seq(seq__6372_7383);
if(temp__5823__auto___7392){
var seq__6372_7393__$1 = temp__5823__auto___7392;
if(cljs.core.chunked_seq_QMARK_(seq__6372_7393__$1)){
var c__5673__auto___7394 = cljs.core.chunk_first(seq__6372_7393__$1);
var G__7395 = cljs.core.chunk_rest(seq__6372_7393__$1);
var G__7396 = c__5673__auto___7394;
var G__7397 = cljs.core.count(c__5673__auto___7394);
var G__7398 = (0);
seq__6372_7383 = G__7395;
chunk__6373_7384 = G__7396;
count__6374_7385 = G__7397;
i__6375_7386 = G__7398;
continue;
} else {
var s_7399 = cljs.core.first(seq__6372_7393__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7399) : nex.typechecker.check_statement.call(null,loop_env,s_7399));


var G__7400 = cljs.core.next(seq__6372_7393__$1);
var G__7401 = null;
var G__7402 = (0);
var G__7403 = (0);
seq__6372_7383 = G__7400;
chunk__6373_7384 = G__7401;
count__6374_7385 = G__7402;
i__6375_7386 = G__7403;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_7404 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7404,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7404,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7404)))], null));
}
} else {
}

var seq__6376 = cljs.core.seq(body);
var chunk__6377 = null;
var count__6378 = (0);
var i__6379 = (0);
while(true){
if((i__6379 < count__6378)){
var stmt__$1 = chunk__6377.cljs$core$IIndexed$_nth$arity$2(null,i__6379);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7405 = seq__6376;
var G__7406 = chunk__6377;
var G__7407 = count__6378;
var G__7408 = (i__6379 + (1));
seq__6376 = G__7405;
chunk__6377 = G__7406;
count__6378 = G__7407;
i__6379 = G__7408;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6376);
if(temp__5823__auto__){
var seq__6376__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6376__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6376__$1);
var G__7409 = cljs.core.chunk_rest(seq__6376__$1);
var G__7410 = c__5673__auto__;
var G__7411 = cljs.core.count(c__5673__auto__);
var G__7412 = (0);
seq__6376 = G__7409;
chunk__6377 = G__7410;
count__6378 = G__7411;
i__6379 = G__7412;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6376__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7413 = cljs.core.next(seq__6376__$1);
var G__7414 = null;
var G__7415 = (0);
var G__7416 = (0);
seq__6376 = G__7413;
chunk__6377 = G__7414;
count__6378 = G__7415;
i__6379 = G__7416;
continue;
}
} else {
return null;
}
}
break;
}
});
nex.typechecker.select_clause_op = (function nex$typechecker$select_clause_op(expr){
if(((cljs.core.map_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr))))){
return expr;
} else {
return null;
}
});
nex.typechecker.check_select_clause = (function nex$typechecker$check_select_clause(env,p__6380){
var map__6381 = p__6380;
var map__6381__$1 = cljs.core.__destructure_map(map__6381);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6381__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6381__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6381__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6382 = (function (){var or__5142__auto__ = nex.typechecker.select_clause_op(expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clause must be a channel or task operation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select clause must be a channel send/receive call or task await call")], null));
}
})();
var map__6382__$1 = cljs.core.__destructure_map(map__6382);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var target_type = nex.typechecker.check_expression(env,target);
var normalized_target = nex.typechecker.normalize_type(target_type);
var base_type = ((cljs.core.map_QMARK_(normalized_target))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(normalized_target):normalized_target);
var type_args = ((cljs.core.map_QMARK_(normalized_target))?(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(normalized_target);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"type-args","type-args",1580007623).cljs$core$IFn$_invoke$arity$1(normalized_target);
}
})():null);
var G__6383 = base_type;
switch (G__6383) {
case "Task":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select task clauses support only Task.await",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select task clauses support only Task.await")], null));
}

if(cljs.core.seq(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Task.await in select takes no arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Task.await in select takes no arguments")], null));
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(alias)){
nex.typechecker.env_add_var(body_env,alias,(function (){var or__5142__auto__ = cljs.core.first(type_args);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());
} else {
}

var seq__6384 = cljs.core.seq(body);
var chunk__6385 = null;
var count__6386 = (0);
var i__6387 = (0);
while(true){
if((i__6387 < count__6386)){
var stmt = chunk__6385.cljs$core$IIndexed$_nth$arity$2(null,i__6387);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7422 = seq__6384;
var G__7423 = chunk__6385;
var G__7424 = count__6386;
var G__7425 = (i__6387 + (1));
seq__6384 = G__7422;
chunk__6385 = G__7423;
count__6386 = G__7424;
i__6387 = G__7425;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6384);
if(temp__5823__auto__){
var seq__6384__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6384__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6384__$1);
var G__7426 = cljs.core.chunk_rest(seq__6384__$1);
var G__7427 = c__5673__auto__;
var G__7428 = cljs.core.count(c__5673__auto__);
var G__7429 = (0);
seq__6384 = G__7426;
chunk__6385 = G__7427;
count__6386 = G__7428;
i__6387 = G__7429;
continue;
} else {
var stmt = cljs.core.first(seq__6384__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7430 = cljs.core.next(seq__6384__$1);
var G__7431 = null;
var G__7432 = (0);
var G__7433 = (0);
seq__6384 = G__7430;
chunk__6385 = G__7431;
count__6386 = G__7432;
i__6387 = G__7433;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "Channel":
var G__6388 = method;
switch (G__6388) {
case "receive":
case "try_receive":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"try_receive")){
if(cljs.core.seq(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.try_receive takes no arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Channel.try_receive takes no arguments")], null));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"receive")){
if((cljs.core.count(args) > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.receive expects 0 or 1 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Channel.receive expects 0 or 1 arguments")], null));
} else {
}
} else {
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
var timeout_type_7435 = nex.typechecker.check_expression(env,cljs.core.first(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_7435),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.receive timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.receive timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_7435))))], null));
}
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(alias)){
nex.typechecker.env_add_var(body_env,alias,(function (){var or__5142__auto__ = cljs.core.first(type_args);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());
} else {
}

var seq__6389 = cljs.core.seq(body);
var chunk__6390 = null;
var count__6391 = (0);
var i__6392 = (0);
while(true){
if((i__6392 < count__6391)){
var stmt = chunk__6390.cljs$core$IIndexed$_nth$arity$2(null,i__6392);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7436 = seq__6389;
var G__7437 = chunk__6390;
var G__7438 = count__6391;
var G__7439 = (i__6392 + (1));
seq__6389 = G__7436;
chunk__6390 = G__7437;
count__6391 = G__7438;
i__6392 = G__7439;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6389);
if(temp__5823__auto__){
var seq__6389__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6389__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6389__$1);
var G__7440 = cljs.core.chunk_rest(seq__6389__$1);
var G__7441 = c__5673__auto__;
var G__7442 = cljs.core.count(c__5673__auto__);
var G__7443 = (0);
seq__6389 = G__7440;
chunk__6390 = G__7441;
count__6391 = G__7442;
i__6392 = G__7443;
continue;
} else {
var stmt = cljs.core.first(seq__6389__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7444 = cljs.core.next(seq__6389__$1);
var G__7445 = null;
var G__7446 = (0);
var G__7447 = (0);
seq__6389 = G__7444;
chunk__6390 = G__7445;
count__6391 = G__7446;
i__6392 = G__7447;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "send":
case "try_send":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"try_send")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.try_send expects 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Channel.try_send expects 1 argument")], null));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"send")){
if(((((1) <= cljs.core.count(args))) && ((cljs.core.count(args) <= (2))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.send expects 1 or 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Channel.send expects 1 or 2 arguments")], null));
}
} else {
}
}

if(cljs.core.truth_(alias)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("send clauses cannot bind a value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("send clauses cannot use 'as <name>'")], null));
} else {
}

var arg_type = nex.typechecker.check_expression(env,cljs.core.first(args));
var elem_type = (function (){var or__5142__auto__ = cljs.core.first(type_args);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type,elem_type))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Channel."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" argument type mismatch"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type))))], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))){
var timeout_type_7449 = nex.typechecker.check_expression(env,cljs.core.second(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_7449),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.send timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.send timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_7449))))], null));
}
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6393 = cljs.core.seq(body);
var chunk__6394 = null;
var count__6395 = (0);
var i__6396 = (0);
while(true){
if((i__6396 < count__6395)){
var stmt = chunk__6394.cljs$core$IIndexed$_nth$arity$2(null,i__6396);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7451 = seq__6393;
var G__7452 = chunk__6394;
var G__7453 = count__6395;
var G__7454 = (i__6396 + (1));
seq__6393 = G__7451;
chunk__6394 = G__7452;
count__6395 = G__7453;
i__6396 = G__7454;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6393);
if(temp__5823__auto__){
var seq__6393__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6393__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6393__$1);
var G__7455 = cljs.core.chunk_rest(seq__6393__$1);
var G__7456 = c__5673__auto__;
var G__7457 = cljs.core.count(c__5673__auto__);
var G__7458 = (0);
seq__6393 = G__7455;
chunk__6394 = G__7456;
count__6395 = G__7457;
i__6396 = G__7458;
continue;
} else {
var stmt = cljs.core.first(seq__6393__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7459 = cljs.core.next(seq__6393__$1);
var G__7460 = null;
var G__7461 = (0);
var G__7462 = (0);
seq__6393 = G__7459;
chunk__6394 = G__7460;
count__6395 = G__7461;
i__6396 = G__7462;
continue;
}
} else {
return null;
}
}
break;
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clauses support only Channel send/receive or Task.await operations",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select clauses support only send, try_send, receive, try_receive, and Task.await")], null));

}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clause target must be a Channel or Task",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"select clause target must be Channel or Task, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(normalized_target))))], null));

}
});
nex.typechecker.check_select = (function nex$typechecker$check_select(env,p__6397){
var map__6398 = p__6397;
var map__6398__$1 = cljs.core.__destructure_map(map__6398);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6398__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6398__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6398__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var seq__6399_7463 = cljs.core.seq(clauses);
var chunk__6400_7464 = null;
var count__6401_7465 = (0);
var i__6402_7466 = (0);
while(true){
if((i__6402_7466 < count__6401_7465)){
var clause_7467 = chunk__6400_7464.cljs$core$IIndexed$_nth$arity$2(null,i__6402_7466);
nex.typechecker.check_select_clause(env,clause_7467);


var G__7468 = seq__6399_7463;
var G__7469 = chunk__6400_7464;
var G__7470 = count__6401_7465;
var G__7471 = (i__6402_7466 + (1));
seq__6399_7463 = G__7468;
chunk__6400_7464 = G__7469;
count__6401_7465 = G__7470;
i__6402_7466 = G__7471;
continue;
} else {
var temp__5823__auto___7472 = cljs.core.seq(seq__6399_7463);
if(temp__5823__auto___7472){
var seq__6399_7473__$1 = temp__5823__auto___7472;
if(cljs.core.chunked_seq_QMARK_(seq__6399_7473__$1)){
var c__5673__auto___7474 = cljs.core.chunk_first(seq__6399_7473__$1);
var G__7475 = cljs.core.chunk_rest(seq__6399_7473__$1);
var G__7476 = c__5673__auto___7474;
var G__7477 = cljs.core.count(c__5673__auto___7474);
var G__7478 = (0);
seq__6399_7463 = G__7475;
chunk__6400_7464 = G__7476;
count__6401_7465 = G__7477;
i__6402_7466 = G__7478;
continue;
} else {
var clause_7479 = cljs.core.first(seq__6399_7473__$1);
nex.typechecker.check_select_clause(env,clause_7479);


var G__7480 = cljs.core.next(seq__6399_7473__$1);
var G__7481 = null;
var G__7482 = (0);
var G__7483 = (0);
seq__6399_7463 = G__7480;
chunk__6400_7464 = G__7481;
count__6401_7465 = G__7482;
i__6402_7466 = G__7483;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(timeout)){
var duration_type_7484 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(duration_type_7484),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"select timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(duration_type_7484))))], null));
}

var timeout_env_7485 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6403_7486 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(timeout));
var chunk__6404_7487 = null;
var count__6405_7488 = (0);
var i__6406_7489 = (0);
while(true){
if((i__6406_7489 < count__6405_7488)){
var stmt_7490 = chunk__6404_7487.cljs$core$IIndexed$_nth$arity$2(null,i__6406_7489);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_7485,stmt_7490) : nex.typechecker.check_statement.call(null,timeout_env_7485,stmt_7490));


var G__7491 = seq__6403_7486;
var G__7492 = chunk__6404_7487;
var G__7493 = count__6405_7488;
var G__7494 = (i__6406_7489 + (1));
seq__6403_7486 = G__7491;
chunk__6404_7487 = G__7492;
count__6405_7488 = G__7493;
i__6406_7489 = G__7494;
continue;
} else {
var temp__5823__auto___7495 = cljs.core.seq(seq__6403_7486);
if(temp__5823__auto___7495){
var seq__6403_7496__$1 = temp__5823__auto___7495;
if(cljs.core.chunked_seq_QMARK_(seq__6403_7496__$1)){
var c__5673__auto___7497 = cljs.core.chunk_first(seq__6403_7496__$1);
var G__7498 = cljs.core.chunk_rest(seq__6403_7496__$1);
var G__7499 = c__5673__auto___7497;
var G__7500 = cljs.core.count(c__5673__auto___7497);
var G__7501 = (0);
seq__6403_7486 = G__7498;
chunk__6404_7487 = G__7499;
count__6405_7488 = G__7500;
i__6406_7489 = G__7501;
continue;
} else {
var stmt_7502 = cljs.core.first(seq__6403_7496__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_7485,stmt_7502) : nex.typechecker.check_statement.call(null,timeout_env_7485,stmt_7502));


var G__7503 = cljs.core.next(seq__6403_7496__$1);
var G__7504 = null;
var G__7505 = (0);
var G__7506 = (0);
seq__6403_7486 = G__7503;
chunk__6404_7487 = G__7504;
count__6405_7488 = G__7505;
i__6406_7489 = G__7506;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6407 = cljs.core.seq(else$);
var chunk__6408 = null;
var count__6409 = (0);
var i__6410 = (0);
while(true){
if((i__6410 < count__6409)){
var stmt = chunk__6408.cljs$core$IIndexed$_nth$arity$2(null,i__6410);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__7507 = seq__6407;
var G__7508 = chunk__6408;
var G__7509 = count__6409;
var G__7510 = (i__6410 + (1));
seq__6407 = G__7507;
chunk__6408 = G__7508;
count__6409 = G__7509;
i__6410 = G__7510;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6407);
if(temp__5823__auto__){
var seq__6407__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6407__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6407__$1);
var G__7511 = cljs.core.chunk_rest(seq__6407__$1);
var G__7512 = c__5673__auto__;
var G__7513 = cljs.core.count(c__5673__auto__);
var G__7514 = (0);
seq__6407 = G__7511;
chunk__6408 = G__7512;
count__6409 = G__7513;
i__6410 = G__7514;
continue;
} else {
var stmt = cljs.core.first(seq__6407__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__7515 = cljs.core.next(seq__6407__$1);
var G__7516 = null;
var G__7517 = (0);
var G__7518 = (0);
seq__6407 = G__7515;
chunk__6408 = G__7516;
count__6409 = G__7517;
i__6410 = G__7518;
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
 * Check a statement
 */
nex.typechecker.check_statement = (function nex$typechecker$check_statement(env,stmt){
if(cljs.core.map_QMARK_(stmt)){
var G__6411 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6411__$1 = (((G__6411 instanceof cljs.core.Keyword))?G__6411.fqn:null);
switch (G__6411__$1) {
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
case "spawn":
return nex.typechecker.check_expression(env,stmt);

break;
case "if":
return nex.typechecker.check_if(env,stmt);

break;
case "loop":
return nex.typechecker.check_loop(env,stmt);

break;
case "select":
return nex.typechecker.check_select(env,stmt);

break;
case "scoped-block":
var block_env_7520 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6412_7521 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6413_7522 = null;
var count__6414_7523 = (0);
var i__6415_7524 = (0);
while(true){
if((i__6415_7524 < count__6414_7523)){
var s_7525 = chunk__6413_7522.cljs$core$IIndexed$_nth$arity$2(null,i__6415_7524);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7520,s_7525) : nex.typechecker.check_statement.call(null,block_env_7520,s_7525));


var G__7526 = seq__6412_7521;
var G__7527 = chunk__6413_7522;
var G__7528 = count__6414_7523;
var G__7529 = (i__6415_7524 + (1));
seq__6412_7521 = G__7526;
chunk__6413_7522 = G__7527;
count__6414_7523 = G__7528;
i__6415_7524 = G__7529;
continue;
} else {
var temp__5823__auto___7530 = cljs.core.seq(seq__6412_7521);
if(temp__5823__auto___7530){
var seq__6412_7531__$1 = temp__5823__auto___7530;
if(cljs.core.chunked_seq_QMARK_(seq__6412_7531__$1)){
var c__5673__auto___7532 = cljs.core.chunk_first(seq__6412_7531__$1);
var G__7533 = cljs.core.chunk_rest(seq__6412_7531__$1);
var G__7534 = c__5673__auto___7532;
var G__7535 = cljs.core.count(c__5673__auto___7532);
var G__7536 = (0);
seq__6412_7521 = G__7533;
chunk__6413_7522 = G__7534;
count__6414_7523 = G__7535;
i__6415_7524 = G__7536;
continue;
} else {
var s_7537 = cljs.core.first(seq__6412_7531__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7520,s_7537) : nex.typechecker.check_statement.call(null,block_env_7520,s_7537));


var G__7538 = cljs.core.next(seq__6412_7531__$1);
var G__7539 = null;
var G__7540 = (0);
var G__7541 = (0);
seq__6412_7521 = G__7538;
chunk__6413_7522 = G__7539;
count__6414_7523 = G__7540;
i__6415_7524 = G__7541;
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

var seq__6416 = cljs.core.seq(rescue);
var chunk__6417 = null;
var count__6418 = (0);
var i__6419 = (0);
while(true){
if((i__6419 < count__6418)){
var s = chunk__6417.cljs$core$IIndexed$_nth$arity$2(null,i__6419);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7542 = seq__6416;
var G__7543 = chunk__6417;
var G__7544 = count__6418;
var G__7545 = (i__6419 + (1));
seq__6416 = G__7542;
chunk__6417 = G__7543;
count__6418 = G__7544;
i__6419 = G__7545;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6416);
if(temp__5823__auto____$1){
var seq__6416__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6416__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6416__$1);
var G__7547 = cljs.core.chunk_rest(seq__6416__$1);
var G__7548 = c__5673__auto__;
var G__7549 = cljs.core.count(c__5673__auto__);
var G__7550 = (0);
seq__6416 = G__7547;
chunk__6417 = G__7548;
count__6418 = G__7549;
i__6419 = G__7550;
continue;
} else {
var s = cljs.core.first(seq__6416__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7551 = cljs.core.next(seq__6416__$1);
var G__7552 = null;
var G__7553 = (0);
var G__7554 = (0);
seq__6416 = G__7551;
chunk__6417 = G__7552;
count__6418 = G__7553;
i__6419 = G__7554;
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
var seq__6420 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6421 = null;
var count__6422 = (0);
var i__6423 = (0);
while(true){
if((i__6423 < count__6422)){
var s = chunk__6421.cljs$core$IIndexed$_nth$arity$2(null,i__6423);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7555 = seq__6420;
var G__7556 = chunk__6421;
var G__7557 = count__6422;
var G__7558 = (i__6423 + (1));
seq__6420 = G__7555;
chunk__6421 = G__7556;
count__6422 = G__7557;
i__6423 = G__7558;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6420);
if(temp__5823__auto__){
var seq__6420__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6420__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6420__$1);
var G__7559 = cljs.core.chunk_rest(seq__6420__$1);
var G__7560 = c__5673__auto__;
var G__7561 = cljs.core.count(c__5673__auto__);
var G__7562 = (0);
seq__6420 = G__7559;
chunk__6421 = G__7560;
count__6422 = G__7561;
i__6423 = G__7562;
continue;
} else {
var s = cljs.core.first(seq__6420__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7563 = cljs.core.next(seq__6420__$1);
var G__7564 = null;
var G__7565 = (0);
var G__7566 = (0);
seq__6420 = G__7563;
chunk__6421 = G__7564;
count__6422 = G__7565;
i__6423 = G__7566;
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

var seq__6424_7567 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6425_7568 = null;
var count__6426_7569 = (0);
var i__6427_7570 = (0);
while(true){
if((i__6427_7570 < count__6426_7569)){
var clause_7571 = chunk__6425_7568.cljs$core$IIndexed$_nth$arity$2(null,i__6427_7570);
var G__6432_7572 = env;
var G__6433_7573 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7571);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6432_7572,G__6433_7573) : nex.typechecker.check_statement.call(null,G__6432_7572,G__6433_7573));


var G__7574 = seq__6424_7567;
var G__7575 = chunk__6425_7568;
var G__7576 = count__6426_7569;
var G__7577 = (i__6427_7570 + (1));
seq__6424_7567 = G__7574;
chunk__6425_7568 = G__7575;
count__6426_7569 = G__7576;
i__6427_7570 = G__7577;
continue;
} else {
var temp__5823__auto___7578 = cljs.core.seq(seq__6424_7567);
if(temp__5823__auto___7578){
var seq__6424_7579__$1 = temp__5823__auto___7578;
if(cljs.core.chunked_seq_QMARK_(seq__6424_7579__$1)){
var c__5673__auto___7580 = cljs.core.chunk_first(seq__6424_7579__$1);
var G__7581 = cljs.core.chunk_rest(seq__6424_7579__$1);
var G__7582 = c__5673__auto___7580;
var G__7583 = cljs.core.count(c__5673__auto___7580);
var G__7584 = (0);
seq__6424_7567 = G__7581;
chunk__6425_7568 = G__7582;
count__6426_7569 = G__7583;
i__6427_7570 = G__7584;
continue;
} else {
var clause_7585 = cljs.core.first(seq__6424_7579__$1);
var G__6434_7586 = env;
var G__6435_7587 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7585);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6434_7586,G__6435_7587) : nex.typechecker.check_statement.call(null,G__6434_7586,G__6435_7587));


var G__7588 = cljs.core.next(seq__6424_7579__$1);
var G__7589 = null;
var G__7590 = (0);
var G__7591 = (0);
seq__6424_7567 = G__7588;
chunk__6425_7568 = G__7589;
count__6426_7569 = G__7590;
i__6427_7570 = G__7591;
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
var G__6436 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6436__$1 = (((G__6436 instanceof cljs.core.Keyword))?G__6436.fqn:null);
switch (G__6436__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6437 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6437) : nex.typechecker.references_result_QMARK_.call(null,G__6437));
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
var G__6438 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6438) : nex.typechecker.references_result_QMARK_.call(null,G__6438));
}
}

break;
case "identifier":
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"result")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),"Result")));

break;
case "anonymous-function":
return false;

break;
case "spawn":
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6440){
var map__6441 = p__6440;
var map__6441__$1 = cljs.core.__destructure_map(map__6441);
var method = map__6441__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6441__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6442_7594 = cljs.core.seq(params);
var chunk__6443_7595 = null;
var count__6444_7596 = (0);
var i__6445_7597 = (0);
while(true){
if((i__6445_7597 < count__6444_7596)){
var param_7598 = chunk__6443_7595.cljs$core$IIndexed$_nth$arity$2(null,i__6445_7597);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7598))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7598));
} else {
}


var G__7599 = seq__6442_7594;
var G__7600 = chunk__6443_7595;
var G__7601 = count__6444_7596;
var G__7602 = (i__6445_7597 + (1));
seq__6442_7594 = G__7599;
chunk__6443_7595 = G__7600;
count__6444_7596 = G__7601;
i__6445_7597 = G__7602;
continue;
} else {
var temp__5823__auto___7603 = cljs.core.seq(seq__6442_7594);
if(temp__5823__auto___7603){
var seq__6442_7604__$1 = temp__5823__auto___7603;
if(cljs.core.chunked_seq_QMARK_(seq__6442_7604__$1)){
var c__5673__auto___7605 = cljs.core.chunk_first(seq__6442_7604__$1);
var G__7606 = cljs.core.chunk_rest(seq__6442_7604__$1);
var G__7607 = c__5673__auto___7605;
var G__7608 = cljs.core.count(c__5673__auto___7605);
var G__7609 = (0);
seq__6442_7594 = G__7606;
chunk__6443_7595 = G__7607;
count__6444_7596 = G__7608;
i__6445_7597 = G__7609;
continue;
} else {
var param_7610 = cljs.core.first(seq__6442_7604__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7610))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7610));
} else {
}


var G__7611 = cljs.core.next(seq__6442_7604__$1);
var G__7612 = null;
var G__7613 = (0);
var G__7614 = (0);
seq__6442_7594 = G__7611;
chunk__6443_7595 = G__7612;
count__6444_7596 = G__7613;
i__6445_7597 = G__7614;
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
return cljs.core.some((function (p1__6439_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6439_SHARP_));
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

var seq__6446_7615 = cljs.core.seq(params);
var chunk__6447_7616 = null;
var count__6448_7617 = (0);
var i__6449_7618 = (0);
while(true){
if((i__6449_7618 < count__6448_7617)){
var param_7619 = chunk__6447_7616.cljs$core$IIndexed$_nth$arity$2(null,i__6449_7618);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7619),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7619);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7620 = seq__6446_7615;
var G__7621 = chunk__6447_7616;
var G__7622 = count__6448_7617;
var G__7623 = (i__6449_7618 + (1));
seq__6446_7615 = G__7620;
chunk__6447_7616 = G__7621;
count__6448_7617 = G__7622;
i__6449_7618 = G__7623;
continue;
} else {
var temp__5823__auto___7624 = cljs.core.seq(seq__6446_7615);
if(temp__5823__auto___7624){
var seq__6446_7625__$1 = temp__5823__auto___7624;
if(cljs.core.chunked_seq_QMARK_(seq__6446_7625__$1)){
var c__5673__auto___7626 = cljs.core.chunk_first(seq__6446_7625__$1);
var G__7627 = cljs.core.chunk_rest(seq__6446_7625__$1);
var G__7628 = c__5673__auto___7626;
var G__7629 = cljs.core.count(c__5673__auto___7626);
var G__7630 = (0);
seq__6446_7615 = G__7627;
chunk__6447_7616 = G__7628;
count__6448_7617 = G__7629;
i__6449_7618 = G__7630;
continue;
} else {
var param_7631 = cljs.core.first(seq__6446_7625__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7631),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7631);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7632 = cljs.core.next(seq__6446_7625__$1);
var G__7633 = null;
var G__7634 = (0);
var G__7635 = (0);
seq__6446_7615 = G__7632;
chunk__6447_7616 = G__7633;
count__6448_7617 = G__7634;
i__6449_7618 = G__7635;
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

var seq__6450_7636 = cljs.core.seq(require__$1);
var chunk__6451_7637 = null;
var count__6452_7638 = (0);
var i__6453_7639 = (0);
while(true){
if((i__6453_7639 < count__6452_7638)){
var assertion_7640 = chunk__6451_7637.cljs$core$IIndexed$_nth$arity$2(null,i__6453_7639);
var cond_type_7641 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7640));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7641,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7641)))], null));
}


var G__7642 = seq__6450_7636;
var G__7643 = chunk__6451_7637;
var G__7644 = count__6452_7638;
var G__7645 = (i__6453_7639 + (1));
seq__6450_7636 = G__7642;
chunk__6451_7637 = G__7643;
count__6452_7638 = G__7644;
i__6453_7639 = G__7645;
continue;
} else {
var temp__5823__auto___7646 = cljs.core.seq(seq__6450_7636);
if(temp__5823__auto___7646){
var seq__6450_7647__$1 = temp__5823__auto___7646;
if(cljs.core.chunked_seq_QMARK_(seq__6450_7647__$1)){
var c__5673__auto___7648 = cljs.core.chunk_first(seq__6450_7647__$1);
var G__7649 = cljs.core.chunk_rest(seq__6450_7647__$1);
var G__7650 = c__5673__auto___7648;
var G__7651 = cljs.core.count(c__5673__auto___7648);
var G__7652 = (0);
seq__6450_7636 = G__7649;
chunk__6451_7637 = G__7650;
count__6452_7638 = G__7651;
i__6453_7639 = G__7652;
continue;
} else {
var assertion_7653 = cljs.core.first(seq__6450_7647__$1);
var cond_type_7654 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7653));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7654,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7654)))], null));
}


var G__7655 = cljs.core.next(seq__6450_7647__$1);
var G__7656 = null;
var G__7657 = (0);
var G__7658 = (0);
seq__6450_7636 = G__7655;
chunk__6451_7637 = G__7656;
count__6452_7638 = G__7657;
i__6453_7639 = G__7658;
continue;
}
} else {
}
}
break;
}

var seq__6454_7659 = cljs.core.seq(body);
var chunk__6455_7660 = null;
var count__6456_7661 = (0);
var i__6457_7662 = (0);
while(true){
if((i__6457_7662 < count__6456_7661)){
var stmt_7663 = chunk__6455_7660.cljs$core$IIndexed$_nth$arity$2(null,i__6457_7662);
nex.typechecker.check_statement(method_env,stmt_7663);


var G__7664 = seq__6454_7659;
var G__7665 = chunk__6455_7660;
var G__7666 = count__6456_7661;
var G__7667 = (i__6457_7662 + (1));
seq__6454_7659 = G__7664;
chunk__6455_7660 = G__7665;
count__6456_7661 = G__7666;
i__6457_7662 = G__7667;
continue;
} else {
var temp__5823__auto___7668 = cljs.core.seq(seq__6454_7659);
if(temp__5823__auto___7668){
var seq__6454_7669__$1 = temp__5823__auto___7668;
if(cljs.core.chunked_seq_QMARK_(seq__6454_7669__$1)){
var c__5673__auto___7670 = cljs.core.chunk_first(seq__6454_7669__$1);
var G__7671 = cljs.core.chunk_rest(seq__6454_7669__$1);
var G__7672 = c__5673__auto___7670;
var G__7673 = cljs.core.count(c__5673__auto___7670);
var G__7674 = (0);
seq__6454_7659 = G__7671;
chunk__6455_7660 = G__7672;
count__6456_7661 = G__7673;
i__6457_7662 = G__7674;
continue;
} else {
var stmt_7675 = cljs.core.first(seq__6454_7669__$1);
nex.typechecker.check_statement(method_env,stmt_7675);


var G__7676 = cljs.core.next(seq__6454_7669__$1);
var G__7677 = null;
var G__7678 = (0);
var G__7679 = (0);
seq__6454_7659 = G__7676;
chunk__6455_7660 = G__7677;
count__6456_7661 = G__7678;
i__6457_7662 = G__7679;
continue;
}
} else {
}
}
break;
}

var seq__6458_7680 = cljs.core.seq(ensure);
var chunk__6459_7681 = null;
var count__6460_7682 = (0);
var i__6461_7683 = (0);
while(true){
if((i__6461_7683 < count__6460_7682)){
var assertion_7684 = chunk__6459_7681.cljs$core$IIndexed$_nth$arity$2(null,i__6461_7683);
var cond_type_7685 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7684));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7685,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7685)))], null));
}


var G__7686 = seq__6458_7680;
var G__7687 = chunk__6459_7681;
var G__7688 = count__6460_7682;
var G__7689 = (i__6461_7683 + (1));
seq__6458_7680 = G__7686;
chunk__6459_7681 = G__7687;
count__6460_7682 = G__7688;
i__6461_7683 = G__7689;
continue;
} else {
var temp__5823__auto___7690 = cljs.core.seq(seq__6458_7680);
if(temp__5823__auto___7690){
var seq__6458_7691__$1 = temp__5823__auto___7690;
if(cljs.core.chunked_seq_QMARK_(seq__6458_7691__$1)){
var c__5673__auto___7692 = cljs.core.chunk_first(seq__6458_7691__$1);
var G__7693 = cljs.core.chunk_rest(seq__6458_7691__$1);
var G__7694 = c__5673__auto___7692;
var G__7695 = cljs.core.count(c__5673__auto___7692);
var G__7696 = (0);
seq__6458_7680 = G__7693;
chunk__6459_7681 = G__7694;
count__6460_7682 = G__7695;
i__6461_7683 = G__7696;
continue;
} else {
var assertion_7697 = cljs.core.first(seq__6458_7691__$1);
var cond_type_7698 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7697));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7698,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7698)))], null));
}


var G__7699 = cljs.core.next(seq__6458_7691__$1);
var G__7700 = null;
var G__7701 = (0);
var G__7702 = (0);
seq__6458_7680 = G__7699;
chunk__6459_7681 = G__7700;
count__6460_7682 = G__7701;
i__6461_7683 = G__7702;
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

var seq__6462 = cljs.core.seq(rescue);
var chunk__6463 = null;
var count__6464 = (0);
var i__6465 = (0);
while(true){
if((i__6465 < count__6464)){
var stmt = chunk__6463.cljs$core$IIndexed$_nth$arity$2(null,i__6465);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7703 = seq__6462;
var G__7704 = chunk__6463;
var G__7705 = count__6464;
var G__7706 = (i__6465 + (1));
seq__6462 = G__7703;
chunk__6463 = G__7704;
count__6464 = G__7705;
i__6465 = G__7706;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6462);
if(temp__5823__auto__){
var seq__6462__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6462__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6462__$1);
var G__7707 = cljs.core.chunk_rest(seq__6462__$1);
var G__7708 = c__5673__auto__;
var G__7709 = cljs.core.count(c__5673__auto__);
var G__7710 = (0);
seq__6462 = G__7707;
chunk__6463 = G__7708;
count__6464 = G__7709;
i__6465 = G__7710;
continue;
} else {
var stmt = cljs.core.first(seq__6462__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7711 = cljs.core.next(seq__6462__$1);
var G__7712 = null;
var G__7713 = (0);
var G__7714 = (0);
seq__6462 = G__7711;
chunk__6463 = G__7712;
count__6464 = G__7713;
i__6465 = G__7714;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6466){
var map__6467 = p__6466;
var map__6467__$1 = cljs.core.__destructure_map(map__6467);
var constructor$ = map__6467__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6467__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6468_7715 = cljs.core.seq(params);
var chunk__6469_7716 = null;
var count__6470_7717 = (0);
var i__6471_7718 = (0);
while(true){
if((i__6471_7718 < count__6470_7717)){
var param_7719 = chunk__6469_7716.cljs$core$IIndexed$_nth$arity$2(null,i__6471_7718);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7719))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7719));
} else {
}


var G__7720 = seq__6468_7715;
var G__7721 = chunk__6469_7716;
var G__7722 = count__6470_7717;
var G__7723 = (i__6471_7718 + (1));
seq__6468_7715 = G__7720;
chunk__6469_7716 = G__7721;
count__6470_7717 = G__7722;
i__6471_7718 = G__7723;
continue;
} else {
var temp__5823__auto___7724 = cljs.core.seq(seq__6468_7715);
if(temp__5823__auto___7724){
var seq__6468_7725__$1 = temp__5823__auto___7724;
if(cljs.core.chunked_seq_QMARK_(seq__6468_7725__$1)){
var c__5673__auto___7726 = cljs.core.chunk_first(seq__6468_7725__$1);
var G__7727 = cljs.core.chunk_rest(seq__6468_7725__$1);
var G__7728 = c__5673__auto___7726;
var G__7729 = cljs.core.count(c__5673__auto___7726);
var G__7730 = (0);
seq__6468_7715 = G__7727;
chunk__6469_7716 = G__7728;
count__6470_7717 = G__7729;
i__6471_7718 = G__7730;
continue;
} else {
var param_7731 = cljs.core.first(seq__6468_7725__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7731))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7731));
} else {
}


var G__7732 = cljs.core.next(seq__6468_7725__$1);
var G__7733 = null;
var G__7734 = (0);
var G__7735 = (0);
seq__6468_7715 = G__7732;
chunk__6469_7716 = G__7733;
count__6470_7717 = G__7734;
i__6471_7718 = G__7735;
continue;
}
} else {
}
}
break;
}

var seq__6472_7736 = cljs.core.seq(params);
var chunk__6473_7737 = null;
var count__6474_7738 = (0);
var i__6475_7739 = (0);
while(true){
if((i__6475_7739 < count__6474_7738)){
var param_7740 = chunk__6473_7737.cljs$core$IIndexed$_nth$arity$2(null,i__6475_7739);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7740),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7740);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7741 = seq__6472_7736;
var G__7742 = chunk__6473_7737;
var G__7743 = count__6474_7738;
var G__7744 = (i__6475_7739 + (1));
seq__6472_7736 = G__7741;
chunk__6473_7737 = G__7742;
count__6474_7738 = G__7743;
i__6475_7739 = G__7744;
continue;
} else {
var temp__5823__auto___7745 = cljs.core.seq(seq__6472_7736);
if(temp__5823__auto___7745){
var seq__6472_7746__$1 = temp__5823__auto___7745;
if(cljs.core.chunked_seq_QMARK_(seq__6472_7746__$1)){
var c__5673__auto___7747 = cljs.core.chunk_first(seq__6472_7746__$1);
var G__7748 = cljs.core.chunk_rest(seq__6472_7746__$1);
var G__7749 = c__5673__auto___7747;
var G__7750 = cljs.core.count(c__5673__auto___7747);
var G__7751 = (0);
seq__6472_7736 = G__7748;
chunk__6473_7737 = G__7749;
count__6474_7738 = G__7750;
i__6475_7739 = G__7751;
continue;
} else {
var param_7752 = cljs.core.first(seq__6472_7746__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7752),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7752);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7753 = cljs.core.next(seq__6472_7746__$1);
var G__7754 = null;
var G__7755 = (0);
var G__7756 = (0);
seq__6472_7736 = G__7753;
chunk__6473_7737 = G__7754;
count__6474_7738 = G__7755;
i__6475_7739 = G__7756;
continue;
}
} else {
}
}
break;
}

var seq__6476_7757 = cljs.core.seq(require__$1);
var chunk__6477_7758 = null;
var count__6478_7759 = (0);
var i__6479_7760 = (0);
while(true){
if((i__6479_7760 < count__6478_7759)){
var assertion_7761 = chunk__6477_7758.cljs$core$IIndexed$_nth$arity$2(null,i__6479_7760);
if(cljs.core.truth_(assertion_7761)){
var cond_type_7762 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7761));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7762,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7762)))], null));
}
} else {
}


var G__7763 = seq__6476_7757;
var G__7764 = chunk__6477_7758;
var G__7765 = count__6478_7759;
var G__7766 = (i__6479_7760 + (1));
seq__6476_7757 = G__7763;
chunk__6477_7758 = G__7764;
count__6478_7759 = G__7765;
i__6479_7760 = G__7766;
continue;
} else {
var temp__5823__auto___7767 = cljs.core.seq(seq__6476_7757);
if(temp__5823__auto___7767){
var seq__6476_7768__$1 = temp__5823__auto___7767;
if(cljs.core.chunked_seq_QMARK_(seq__6476_7768__$1)){
var c__5673__auto___7769 = cljs.core.chunk_first(seq__6476_7768__$1);
var G__7770 = cljs.core.chunk_rest(seq__6476_7768__$1);
var G__7771 = c__5673__auto___7769;
var G__7772 = cljs.core.count(c__5673__auto___7769);
var G__7773 = (0);
seq__6476_7757 = G__7770;
chunk__6477_7758 = G__7771;
count__6478_7759 = G__7772;
i__6479_7760 = G__7773;
continue;
} else {
var assertion_7774 = cljs.core.first(seq__6476_7768__$1);
if(cljs.core.truth_(assertion_7774)){
var cond_type_7775 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7774));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7775,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7775)))], null));
}
} else {
}


var G__7776 = cljs.core.next(seq__6476_7768__$1);
var G__7777 = null;
var G__7778 = (0);
var G__7779 = (0);
seq__6476_7757 = G__7776;
chunk__6477_7758 = G__7777;
count__6478_7759 = G__7778;
i__6479_7760 = G__7779;
continue;
}
} else {
}
}
break;
}

var seq__6480_7781 = cljs.core.seq(body);
var chunk__6481_7782 = null;
var count__6482_7783 = (0);
var i__6483_7784 = (0);
while(true){
if((i__6483_7784 < count__6482_7783)){
var stmt_7785 = chunk__6481_7782.cljs$core$IIndexed$_nth$arity$2(null,i__6483_7784);
nex.typechecker.check_statement(ctor_env,stmt_7785);


var G__7786 = seq__6480_7781;
var G__7787 = chunk__6481_7782;
var G__7788 = count__6482_7783;
var G__7789 = (i__6483_7784 + (1));
seq__6480_7781 = G__7786;
chunk__6481_7782 = G__7787;
count__6482_7783 = G__7788;
i__6483_7784 = G__7789;
continue;
} else {
var temp__5823__auto___7790 = cljs.core.seq(seq__6480_7781);
if(temp__5823__auto___7790){
var seq__6480_7791__$1 = temp__5823__auto___7790;
if(cljs.core.chunked_seq_QMARK_(seq__6480_7791__$1)){
var c__5673__auto___7792 = cljs.core.chunk_first(seq__6480_7791__$1);
var G__7793 = cljs.core.chunk_rest(seq__6480_7791__$1);
var G__7794 = c__5673__auto___7792;
var G__7795 = cljs.core.count(c__5673__auto___7792);
var G__7796 = (0);
seq__6480_7781 = G__7793;
chunk__6481_7782 = G__7794;
count__6482_7783 = G__7795;
i__6483_7784 = G__7796;
continue;
} else {
var stmt_7797 = cljs.core.first(seq__6480_7791__$1);
nex.typechecker.check_statement(ctor_env,stmt_7797);


var G__7802 = cljs.core.next(seq__6480_7791__$1);
var G__7803 = null;
var G__7804 = (0);
var G__7805 = (0);
seq__6480_7781 = G__7802;
chunk__6481_7782 = G__7803;
count__6482_7783 = G__7804;
i__6483_7784 = G__7805;
continue;
}
} else {
}
}
break;
}

var seq__6484_7806 = cljs.core.seq(ensure);
var chunk__6485_7807 = null;
var count__6486_7808 = (0);
var i__6487_7809 = (0);
while(true){
if((i__6487_7809 < count__6486_7808)){
var assertion_7814 = chunk__6485_7807.cljs$core$IIndexed$_nth$arity$2(null,i__6487_7809);
if(cljs.core.truth_(assertion_7814)){
var cond_type_7815 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7814));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7815,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7815)))], null));
}
} else {
}


var G__7817 = seq__6484_7806;
var G__7818 = chunk__6485_7807;
var G__7819 = count__6486_7808;
var G__7820 = (i__6487_7809 + (1));
seq__6484_7806 = G__7817;
chunk__6485_7807 = G__7818;
count__6486_7808 = G__7819;
i__6487_7809 = G__7820;
continue;
} else {
var temp__5823__auto___7821 = cljs.core.seq(seq__6484_7806);
if(temp__5823__auto___7821){
var seq__6484_7822__$1 = temp__5823__auto___7821;
if(cljs.core.chunked_seq_QMARK_(seq__6484_7822__$1)){
var c__5673__auto___7823 = cljs.core.chunk_first(seq__6484_7822__$1);
var G__7824 = cljs.core.chunk_rest(seq__6484_7822__$1);
var G__7825 = c__5673__auto___7823;
var G__7826 = cljs.core.count(c__5673__auto___7823);
var G__7827 = (0);
seq__6484_7806 = G__7824;
chunk__6485_7807 = G__7825;
count__6486_7808 = G__7826;
i__6487_7809 = G__7827;
continue;
} else {
var assertion_7828 = cljs.core.first(seq__6484_7822__$1);
if(cljs.core.truth_(assertion_7828)){
var cond_type_7833 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7828));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7833,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7833)))], null));
}
} else {
}


var G__7834 = cljs.core.next(seq__6484_7822__$1);
var G__7835 = null;
var G__7836 = (0);
var G__7837 = (0);
seq__6484_7806 = G__7834;
chunk__6485_7807 = G__7835;
count__6486_7808 = G__7836;
i__6487_7809 = G__7837;
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

var seq__6488 = cljs.core.seq(rescue);
var chunk__6489 = null;
var count__6490 = (0);
var i__6491 = (0);
while(true){
if((i__6491 < count__6490)){
var stmt = chunk__6489.cljs$core$IIndexed$_nth$arity$2(null,i__6491);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7838 = seq__6488;
var G__7839 = chunk__6489;
var G__7840 = count__6490;
var G__7841 = (i__6491 + (1));
seq__6488 = G__7838;
chunk__6489 = G__7839;
count__6490 = G__7840;
i__6491 = G__7841;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6488);
if(temp__5823__auto__){
var seq__6488__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6488__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6488__$1);
var G__7842 = cljs.core.chunk_rest(seq__6488__$1);
var G__7843 = c__5673__auto__;
var G__7844 = cljs.core.count(c__5673__auto__);
var G__7845 = (0);
seq__6488 = G__7842;
chunk__6489 = G__7843;
count__6490 = G__7844;
i__6491 = G__7845;
continue;
} else {
var stmt = cljs.core.first(seq__6488__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7846 = cljs.core.next(seq__6488__$1);
var G__7847 = null;
var G__7848 = (0);
var G__7849 = (0);
seq__6488 = G__7846;
chunk__6489 = G__7847;
count__6490 = G__7848;
i__6491 = G__7849;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6492){
var map__6493 = p__6492;
var map__6493__$1 = cljs.core.__destructure_map(map__6493);
var class_def = map__6493__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6493__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var updated_body_7850 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
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
var updated_class_def_7851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(class_def,new cljs.core.Keyword(null,"body","body",-2049205669),updated_body_7850);
nex.typechecker.env_add_class(env,name,updated_class_def_7851);

var seq__6494 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nex.typechecker.env_lookup_class(env,name)));
var chunk__6495 = null;
var count__6496 = (0);
var i__6497 = (0);
while(true){
if((i__6497 < count__6496)){
var section = chunk__6495.cljs$core$IIndexed$_nth$arity$2(null,i__6497);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6514_7852 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6515_7853 = null;
var count__6516_7854 = (0);
var i__6517_7855 = (0);
while(true){
if((i__6517_7855 < count__6516_7854)){
var member_7856 = chunk__6515_7853.cljs$core$IIndexed$_nth$arity$2(null,i__6517_7855);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7856),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7856),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7856),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7856)], null));
} else {
}


var G__7857 = seq__6514_7852;
var G__7858 = chunk__6515_7853;
var G__7859 = count__6516_7854;
var G__7860 = (i__6517_7855 + (1));
seq__6514_7852 = G__7857;
chunk__6515_7853 = G__7858;
count__6516_7854 = G__7859;
i__6517_7855 = G__7860;
continue;
} else {
var temp__5823__auto___7861 = cljs.core.seq(seq__6514_7852);
if(temp__5823__auto___7861){
var seq__6514_7862__$1 = temp__5823__auto___7861;
if(cljs.core.chunked_seq_QMARK_(seq__6514_7862__$1)){
var c__5673__auto___7863 = cljs.core.chunk_first(seq__6514_7862__$1);
var G__7864 = cljs.core.chunk_rest(seq__6514_7862__$1);
var G__7865 = c__5673__auto___7863;
var G__7866 = cljs.core.count(c__5673__auto___7863);
var G__7867 = (0);
seq__6514_7852 = G__7864;
chunk__6515_7853 = G__7865;
count__6516_7854 = G__7866;
i__6517_7855 = G__7867;
continue;
} else {
var member_7868 = cljs.core.first(seq__6514_7862__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7868),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7868),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7868),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7868)], null));
} else {
}


var G__7869 = cljs.core.next(seq__6514_7862__$1);
var G__7870 = null;
var G__7871 = (0);
var G__7872 = (0);
seq__6514_7852 = G__7869;
chunk__6515_7853 = G__7870;
count__6516_7854 = G__7871;
i__6517_7855 = G__7872;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6518_7873 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6519_7874 = null;
var count__6520_7875 = (0);
var i__6521_7876 = (0);
while(true){
if((i__6521_7876 < count__6520_7875)){
var ctor_7877 = chunk__6519_7874.cljs$core$IIndexed$_nth$arity$2(null,i__6521_7876);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7877),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7878 = seq__6518_7873;
var G__7879 = chunk__6519_7874;
var G__7880 = count__6520_7875;
var G__7881 = (i__6521_7876 + (1));
seq__6518_7873 = G__7878;
chunk__6519_7874 = G__7879;
count__6520_7875 = G__7880;
i__6521_7876 = G__7881;
continue;
} else {
var temp__5823__auto___7882 = cljs.core.seq(seq__6518_7873);
if(temp__5823__auto___7882){
var seq__6518_7883__$1 = temp__5823__auto___7882;
if(cljs.core.chunked_seq_QMARK_(seq__6518_7883__$1)){
var c__5673__auto___7884 = cljs.core.chunk_first(seq__6518_7883__$1);
var G__7885 = cljs.core.chunk_rest(seq__6518_7883__$1);
var G__7886 = c__5673__auto___7884;
var G__7887 = cljs.core.count(c__5673__auto___7884);
var G__7888 = (0);
seq__6518_7873 = G__7885;
chunk__6519_7874 = G__7886;
count__6520_7875 = G__7887;
i__6521_7876 = G__7888;
continue;
} else {
var ctor_7889 = cljs.core.first(seq__6518_7883__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7889),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7890 = cljs.core.next(seq__6518_7883__$1);
var G__7891 = null;
var G__7892 = (0);
var G__7893 = (0);
seq__6518_7873 = G__7890;
chunk__6519_7874 = G__7891;
count__6520_7875 = G__7892;
i__6521_7876 = G__7893;
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


var G__7894 = seq__6494;
var G__7895 = chunk__6495;
var G__7896 = count__6496;
var G__7897 = (i__6497 + (1));
seq__6494 = G__7894;
chunk__6495 = G__7895;
count__6496 = G__7896;
i__6497 = G__7897;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6494);
if(temp__5823__auto__){
var seq__6494__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6494__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6494__$1);
var G__7898 = cljs.core.chunk_rest(seq__6494__$1);
var G__7899 = c__5673__auto__;
var G__7900 = cljs.core.count(c__5673__auto__);
var G__7901 = (0);
seq__6494 = G__7898;
chunk__6495 = G__7899;
count__6496 = G__7900;
i__6497 = G__7901;
continue;
} else {
var section = cljs.core.first(seq__6494__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6522_7902 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6523_7903 = null;
var count__6524_7904 = (0);
var i__6525_7905 = (0);
while(true){
if((i__6525_7905 < count__6524_7904)){
var member_7906 = chunk__6523_7903.cljs$core$IIndexed$_nth$arity$2(null,i__6525_7905);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7906)], null));
} else {
}


var G__7907 = seq__6522_7902;
var G__7908 = chunk__6523_7903;
var G__7909 = count__6524_7904;
var G__7910 = (i__6525_7905 + (1));
seq__6522_7902 = G__7907;
chunk__6523_7903 = G__7908;
count__6524_7904 = G__7909;
i__6525_7905 = G__7910;
continue;
} else {
var temp__5823__auto___7911__$1 = cljs.core.seq(seq__6522_7902);
if(temp__5823__auto___7911__$1){
var seq__6522_7912__$1 = temp__5823__auto___7911__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6522_7912__$1)){
var c__5673__auto___7913 = cljs.core.chunk_first(seq__6522_7912__$1);
var G__7914 = cljs.core.chunk_rest(seq__6522_7912__$1);
var G__7915 = c__5673__auto___7913;
var G__7916 = cljs.core.count(c__5673__auto___7913);
var G__7917 = (0);
seq__6522_7902 = G__7914;
chunk__6523_7903 = G__7915;
count__6524_7904 = G__7916;
i__6525_7905 = G__7917;
continue;
} else {
var member_7918 = cljs.core.first(seq__6522_7912__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7918)], null));
} else {
}


var G__7919 = cljs.core.next(seq__6522_7912__$1);
var G__7920 = null;
var G__7921 = (0);
var G__7922 = (0);
seq__6522_7902 = G__7919;
chunk__6523_7903 = G__7920;
count__6524_7904 = G__7921;
i__6525_7905 = G__7922;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6526_7923 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6527_7924 = null;
var count__6528_7925 = (0);
var i__6529_7926 = (0);
while(true){
if((i__6529_7926 < count__6528_7925)){
var ctor_7927 = chunk__6527_7924.cljs$core$IIndexed$_nth$arity$2(null,i__6529_7926);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7927),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7927),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7928 = seq__6526_7923;
var G__7929 = chunk__6527_7924;
var G__7930 = count__6528_7925;
var G__7931 = (i__6529_7926 + (1));
seq__6526_7923 = G__7928;
chunk__6527_7924 = G__7929;
count__6528_7925 = G__7930;
i__6529_7926 = G__7931;
continue;
} else {
var temp__5823__auto___7932__$1 = cljs.core.seq(seq__6526_7923);
if(temp__5823__auto___7932__$1){
var seq__6526_7933__$1 = temp__5823__auto___7932__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6526_7933__$1)){
var c__5673__auto___7934 = cljs.core.chunk_first(seq__6526_7933__$1);
var G__7935 = cljs.core.chunk_rest(seq__6526_7933__$1);
var G__7936 = c__5673__auto___7934;
var G__7937 = cljs.core.count(c__5673__auto___7934);
var G__7938 = (0);
seq__6526_7923 = G__7935;
chunk__6527_7924 = G__7936;
count__6528_7925 = G__7937;
i__6529_7926 = G__7938;
continue;
} else {
var ctor_7939 = cljs.core.first(seq__6526_7933__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7939),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7939),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7940 = cljs.core.next(seq__6526_7933__$1);
var G__7941 = null;
var G__7942 = (0);
var G__7943 = (0);
seq__6526_7923 = G__7940;
chunk__6527_7924 = G__7941;
count__6528_7925 = G__7942;
i__6529_7926 = G__7943;
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


var G__7944 = cljs.core.next(seq__6494__$1);
var G__7945 = null;
var G__7946 = (0);
var G__7947 = (0);
seq__6494 = G__7944;
chunk__6495 = G__7945;
count__6496 = G__7946;
i__6497 = G__7947;
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
var seq__6530 = cljs.core.seq(parents);
var chunk__6531 = null;
var count__6532 = (0);
var i__6533 = (0);
while(true){
if((i__6533 < count__6532)){
var map__6536 = chunk__6531.cljs$core$IIndexed$_nth$arity$2(null,i__6533);
var map__6536__$1 = cljs.core.__destructure_map(map__6536);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6536__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__7948 = seq__6530;
var G__7949 = chunk__6531;
var G__7950 = count__6532;
var G__7951 = (i__6533 + (1));
seq__6530 = G__7948;
chunk__6531 = G__7949;
count__6532 = G__7950;
i__6533 = G__7951;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6530);
if(temp__5823__auto__){
var seq__6530__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6530__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6530__$1);
var G__7952 = cljs.core.chunk_rest(seq__6530__$1);
var G__7953 = c__5673__auto__;
var G__7954 = cljs.core.count(c__5673__auto__);
var G__7955 = (0);
seq__6530 = G__7952;
chunk__6531 = G__7953;
count__6532 = G__7954;
i__6533 = G__7955;
continue;
} else {
var map__6537 = cljs.core.first(seq__6530__$1);
var map__6537__$1 = cljs.core.__destructure_map(map__6537);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6537__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__7956 = cljs.core.next(seq__6530__$1);
var G__7957 = null;
var G__7958 = (0);
var G__7959 = (0);
seq__6530 = G__7956;
chunk__6531 = G__7957;
count__6532 = G__7958;
i__6533 = G__7959;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6543){
var map__6544 = p__6543;
var map__6544__$1 = cljs.core.__destructure_map(map__6544);
var class_def = map__6544__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6544__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6544__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6544__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
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

var seq__6545_7960 = cljs.core.seq(invariant__$1);
var chunk__6546_7961 = null;
var count__6547_7962 = (0);
var i__6548_7963 = (0);
while(true){
if((i__6548_7963 < count__6547_7962)){
var assertion_7964 = chunk__6546_7961.cljs$core$IIndexed$_nth$arity$2(null,i__6548_7963);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_7964;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7964);
} else {
return and__5140__auto__;
}
})())){
var inv_type_7965 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7964));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7965,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7965,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_7965)))], null));
}
} else {
}


var G__7966 = seq__6545_7960;
var G__7967 = chunk__6546_7961;
var G__7968 = count__6547_7962;
var G__7969 = (i__6548_7963 + (1));
seq__6545_7960 = G__7966;
chunk__6546_7961 = G__7967;
count__6547_7962 = G__7968;
i__6548_7963 = G__7969;
continue;
} else {
var temp__5823__auto___7970 = cljs.core.seq(seq__6545_7960);
if(temp__5823__auto___7970){
var seq__6545_7971__$1 = temp__5823__auto___7970;
if(cljs.core.chunked_seq_QMARK_(seq__6545_7971__$1)){
var c__5673__auto___7972 = cljs.core.chunk_first(seq__6545_7971__$1);
var G__7973 = cljs.core.chunk_rest(seq__6545_7971__$1);
var G__7974 = c__5673__auto___7972;
var G__7975 = cljs.core.count(c__5673__auto___7972);
var G__7976 = (0);
seq__6545_7960 = G__7973;
chunk__6546_7961 = G__7974;
count__6547_7962 = G__7975;
i__6548_7963 = G__7976;
continue;
} else {
var assertion_7977 = cljs.core.first(seq__6545_7971__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_7977;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7977);
} else {
return and__5140__auto__;
}
})())){
var inv_type_7978 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_7977));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7978,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_7978,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_7978)))], null));
}
} else {
}


var G__7979 = cljs.core.next(seq__6545_7971__$1);
var G__7980 = null;
var G__7981 = (0);
var G__7982 = (0);
seq__6545_7960 = G__7979;
chunk__6546_7961 = G__7980;
count__6547_7962 = G__7981;
i__6548_7963 = G__7982;
continue;
}
} else {
}
}
break;
}

var seq__6549_7983 = cljs.core.seq(body__$1);
var chunk__6550_7984 = null;
var count__6551_7985 = (0);
var i__6552_7986 = (0);
while(true){
if((i__6552_7986 < count__6551_7985)){
var section_7987 = chunk__6550_7984.cljs$core$IIndexed$_nth$arity$2(null,i__6552_7986);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7987),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6569_7988 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_7987));
var chunk__6570_7989 = null;
var count__6571_7990 = (0);
var i__6572_7991 = (0);
while(true){
if((i__6572_7991 < count__6571_7990)){
var member_7992 = chunk__6570_7989.cljs$core$IIndexed$_nth$arity$2(null,i__6572_7991);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7992),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_7992);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7992),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_7992))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_7992));
}
} else {
}
}


var G__7993 = seq__6569_7988;
var G__7994 = chunk__6570_7989;
var G__7995 = count__6571_7990;
var G__7996 = (i__6572_7991 + (1));
seq__6569_7988 = G__7993;
chunk__6570_7989 = G__7994;
count__6571_7990 = G__7995;
i__6572_7991 = G__7996;
continue;
} else {
var temp__5823__auto___7997 = cljs.core.seq(seq__6569_7988);
if(temp__5823__auto___7997){
var seq__6569_7998__$1 = temp__5823__auto___7997;
if(cljs.core.chunked_seq_QMARK_(seq__6569_7998__$1)){
var c__5673__auto___7999 = cljs.core.chunk_first(seq__6569_7998__$1);
var G__8000 = cljs.core.chunk_rest(seq__6569_7998__$1);
var G__8001 = c__5673__auto___7999;
var G__8002 = cljs.core.count(c__5673__auto___7999);
var G__8003 = (0);
seq__6569_7988 = G__8000;
chunk__6570_7989 = G__8001;
count__6571_7990 = G__8002;
i__6572_7991 = G__8003;
continue;
} else {
var member_8004 = cljs.core.first(seq__6569_7998__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8004),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8004);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8004),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8004))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8004));
}
} else {
}
}


var G__8008 = cljs.core.next(seq__6569_7998__$1);
var G__8009 = null;
var G__8010 = (0);
var G__8011 = (0);
seq__6569_7988 = G__8008;
chunk__6570_7989 = G__8009;
count__6571_7990 = G__8010;
i__6572_7991 = G__8011;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_7987),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6573_8012 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_7987));
var chunk__6574_8013 = null;
var count__6575_8014 = (0);
var i__6576_8015 = (0);
while(true){
if((i__6576_8015 < count__6575_8014)){
var ctor_8019 = chunk__6574_8013.cljs$core$IIndexed$_nth$arity$2(null,i__6576_8015);
nex.typechecker.check_constructor(env,name,ctor_8019);


var G__8020 = seq__6573_8012;
var G__8021 = chunk__6574_8013;
var G__8022 = count__6575_8014;
var G__8023 = (i__6576_8015 + (1));
seq__6573_8012 = G__8020;
chunk__6574_8013 = G__8021;
count__6575_8014 = G__8022;
i__6576_8015 = G__8023;
continue;
} else {
var temp__5823__auto___8024 = cljs.core.seq(seq__6573_8012);
if(temp__5823__auto___8024){
var seq__6573_8025__$1 = temp__5823__auto___8024;
if(cljs.core.chunked_seq_QMARK_(seq__6573_8025__$1)){
var c__5673__auto___8026 = cljs.core.chunk_first(seq__6573_8025__$1);
var G__8027 = cljs.core.chunk_rest(seq__6573_8025__$1);
var G__8028 = c__5673__auto___8026;
var G__8029 = cljs.core.count(c__5673__auto___8026);
var G__8030 = (0);
seq__6573_8012 = G__8027;
chunk__6574_8013 = G__8028;
count__6575_8014 = G__8029;
i__6576_8015 = G__8030;
continue;
} else {
var ctor_8031 = cljs.core.first(seq__6573_8025__$1);
nex.typechecker.check_constructor(env,name,ctor_8031);


var G__8032 = cljs.core.next(seq__6573_8025__$1);
var G__8033 = null;
var G__8034 = (0);
var G__8035 = (0);
seq__6573_8012 = G__8032;
chunk__6574_8013 = G__8033;
count__6575_8014 = G__8034;
i__6576_8015 = G__8035;
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


var G__8036 = seq__6549_7983;
var G__8037 = chunk__6550_7984;
var G__8038 = count__6551_7985;
var G__8039 = (i__6552_7986 + (1));
seq__6549_7983 = G__8036;
chunk__6550_7984 = G__8037;
count__6551_7985 = G__8038;
i__6552_7986 = G__8039;
continue;
} else {
var temp__5823__auto___8041 = cljs.core.seq(seq__6549_7983);
if(temp__5823__auto___8041){
var seq__6549_8042__$1 = temp__5823__auto___8041;
if(cljs.core.chunked_seq_QMARK_(seq__6549_8042__$1)){
var c__5673__auto___8043 = cljs.core.chunk_first(seq__6549_8042__$1);
var G__8044 = cljs.core.chunk_rest(seq__6549_8042__$1);
var G__8045 = c__5673__auto___8043;
var G__8046 = cljs.core.count(c__5673__auto___8043);
var G__8047 = (0);
seq__6549_7983 = G__8044;
chunk__6550_7984 = G__8045;
count__6551_7985 = G__8046;
i__6552_7986 = G__8047;
continue;
} else {
var section_8048 = cljs.core.first(seq__6549_8042__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8048),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6577_8050 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8048));
var chunk__6578_8051 = null;
var count__6579_8052 = (0);
var i__6580_8053 = (0);
while(true){
if((i__6580_8053 < count__6579_8052)){
var member_8054 = chunk__6578_8051.cljs$core$IIndexed$_nth$arity$2(null,i__6580_8053);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8054),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8054);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8054),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8054))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8054));
}
} else {
}
}


var G__8055 = seq__6577_8050;
var G__8056 = chunk__6578_8051;
var G__8057 = count__6579_8052;
var G__8058 = (i__6580_8053 + (1));
seq__6577_8050 = G__8055;
chunk__6578_8051 = G__8056;
count__6579_8052 = G__8057;
i__6580_8053 = G__8058;
continue;
} else {
var temp__5823__auto___8059__$1 = cljs.core.seq(seq__6577_8050);
if(temp__5823__auto___8059__$1){
var seq__6577_8060__$1 = temp__5823__auto___8059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6577_8060__$1)){
var c__5673__auto___8061 = cljs.core.chunk_first(seq__6577_8060__$1);
var G__8062 = cljs.core.chunk_rest(seq__6577_8060__$1);
var G__8063 = c__5673__auto___8061;
var G__8064 = cljs.core.count(c__5673__auto___8061);
var G__8065 = (0);
seq__6577_8050 = G__8062;
chunk__6578_8051 = G__8063;
count__6579_8052 = G__8064;
i__6580_8053 = G__8065;
continue;
} else {
var member_8066 = cljs.core.first(seq__6577_8060__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8066),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8066);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8066),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8066))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8066));
}
} else {
}
}


var G__8067 = cljs.core.next(seq__6577_8060__$1);
var G__8068 = null;
var G__8069 = (0);
var G__8070 = (0);
seq__6577_8050 = G__8067;
chunk__6578_8051 = G__8068;
count__6579_8052 = G__8069;
i__6580_8053 = G__8070;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8048),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6581_8071 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_8048));
var chunk__6582_8072 = null;
var count__6583_8073 = (0);
var i__6584_8074 = (0);
while(true){
if((i__6584_8074 < count__6583_8073)){
var ctor_8075 = chunk__6582_8072.cljs$core$IIndexed$_nth$arity$2(null,i__6584_8074);
nex.typechecker.check_constructor(env,name,ctor_8075);


var G__8076 = seq__6581_8071;
var G__8077 = chunk__6582_8072;
var G__8078 = count__6583_8073;
var G__8079 = (i__6584_8074 + (1));
seq__6581_8071 = G__8076;
chunk__6582_8072 = G__8077;
count__6583_8073 = G__8078;
i__6584_8074 = G__8079;
continue;
} else {
var temp__5823__auto___8080__$1 = cljs.core.seq(seq__6581_8071);
if(temp__5823__auto___8080__$1){
var seq__6581_8081__$1 = temp__5823__auto___8080__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6581_8081__$1)){
var c__5673__auto___8082 = cljs.core.chunk_first(seq__6581_8081__$1);
var G__8083 = cljs.core.chunk_rest(seq__6581_8081__$1);
var G__8084 = c__5673__auto___8082;
var G__8085 = cljs.core.count(c__5673__auto___8082);
var G__8086 = (0);
seq__6581_8071 = G__8083;
chunk__6582_8072 = G__8084;
count__6583_8073 = G__8085;
i__6584_8074 = G__8086;
continue;
} else {
var ctor_8087 = cljs.core.first(seq__6581_8081__$1);
nex.typechecker.check_constructor(env,name,ctor_8087);


var G__8088 = cljs.core.next(seq__6581_8081__$1);
var G__8089 = null;
var G__8090 = (0);
var G__8091 = (0);
seq__6581_8071 = G__8088;
chunk__6582_8072 = G__8089;
count__6583_8073 = G__8090;
i__6584_8074 = G__8091;
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


var G__8092 = cljs.core.next(seq__6549_8042__$1);
var G__8093 = null;
var G__8094 = (0);
var G__8095 = (0);
seq__6549_7983 = G__8092;
chunk__6550_7984 = G__8093;
count__6551_7985 = G__8094;
i__6552_7986 = G__8095;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6539_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6539_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6539_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6538_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6538_SHARP_));
}),body__$1)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6540_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6540_SHARP_));
}),body__$1)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6585){
var map__6586 = p__6585;
var map__6586__$1 = cljs.core.__destructure_map(map__6586);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6586__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__6587 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6587__$1 = (((G__6587 instanceof cljs.core.Keyword))?G__6587.fqn:null);
switch (G__6587__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6541_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6541_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6542_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6542_SHARP_));
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

var seq__6588 = cljs.core.seq(constructors);
var chunk__6589 = null;
var count__6590 = (0);
var i__6591 = (0);
while(true){
if((i__6591 < count__6590)){
var map__6594 = chunk__6589.cljs$core$IIndexed$_nth$arity$2(null,i__6591);
var map__6594__$1 = cljs.core.__destructure_map(map__6594);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6594__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6594__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_8098 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_8099 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_8098)));
if(cljs.core.seq(missing_8099)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_8099))))], null));
} else {
}


var G__8101 = seq__6588;
var G__8102 = chunk__6589;
var G__8103 = count__6590;
var G__8104 = (i__6591 + (1));
seq__6588 = G__8101;
chunk__6589 = G__8102;
count__6590 = G__8103;
i__6591 = G__8104;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6588);
if(temp__5823__auto__){
var seq__6588__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6588__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6588__$1);
var G__8105 = cljs.core.chunk_rest(seq__6588__$1);
var G__8106 = c__5673__auto__;
var G__8107 = cljs.core.count(c__5673__auto__);
var G__8108 = (0);
seq__6588 = G__8105;
chunk__6589 = G__8106;
count__6590 = G__8107;
i__6591 = G__8108;
continue;
} else {
var map__6595 = cljs.core.first(seq__6588__$1);
var map__6595__$1 = cljs.core.__destructure_map(map__6595);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_8109 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_8110 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_8109)));
if(cljs.core.seq(missing_8110)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_8110))))], null));
} else {
}


var G__8111 = cljs.core.next(seq__6588__$1);
var G__8112 = null;
var G__8113 = (0);
var G__8114 = (0);
seq__6588 = G__8111;
chunk__6589 = G__8112;
count__6590 = G__8113;
i__6591 = G__8114;
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

var seq__6596_8116 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6597_8117 = null;
var count__6598_8118 = (0);
var i__6599_8119 = (0);
while(true){
if((i__6599_8119 < count__6598_8118)){
var scalar_8121 = chunk__6597_8117.cljs$core$IIndexed$_nth$arity$2(null,i__6599_8119);
nex.typechecker.env_add_class(env,scalar_8121,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_8121,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_8121,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_8121,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__8124 = seq__6596_8116;
var G__8125 = chunk__6597_8117;
var G__8126 = count__6598_8118;
var G__8127 = (i__6599_8119 + (1));
seq__6596_8116 = G__8124;
chunk__6597_8117 = G__8125;
count__6598_8118 = G__8126;
i__6599_8119 = G__8127;
continue;
} else {
var temp__5823__auto___8128 = cljs.core.seq(seq__6596_8116);
if(temp__5823__auto___8128){
var seq__6596_8129__$1 = temp__5823__auto___8128;
if(cljs.core.chunked_seq_QMARK_(seq__6596_8129__$1)){
var c__5673__auto___8130 = cljs.core.chunk_first(seq__6596_8129__$1);
var G__8131 = cljs.core.chunk_rest(seq__6596_8129__$1);
var G__8132 = c__5673__auto___8130;
var G__8133 = cljs.core.count(c__5673__auto___8130);
var G__8134 = (0);
seq__6596_8116 = G__8131;
chunk__6597_8117 = G__8132;
count__6598_8118 = G__8133;
i__6599_8119 = G__8134;
continue;
} else {
var scalar_8135 = cljs.core.first(seq__6596_8129__$1);
nex.typechecker.env_add_class(env,scalar_8135,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_8135,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_8135,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_8135,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__8136 = cljs.core.next(seq__6596_8129__$1);
var G__8137 = null;
var G__8138 = (0);
var G__8139 = (0);
seq__6596_8116 = G__8136;
chunk__6597_8117 = G__8137;
count__6598_8118 = G__8138;
i__6599_8119 = G__8139;
continue;
}
} else {
}
}
break;
}

var seq__6600_8140 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["bitwise_set","bitwise_or","bitwise_logical_right_shift","bitwise_unset","bitwise_and","bitwise_right_shift","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","bitwise_rotate_left","bitwise_xor"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)]));
var chunk__6601_8141 = null;
var count__6602_8142 = (0);
var i__6603_8143 = (0);
while(true){
if((i__6603_8143 < count__6602_8142)){
var vec__6610_8166 = chunk__6601_8141.cljs$core$IIndexed$_nth$arity$2(null,i__6603_8143);
var method_name_8167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610_8166,(0),null);
var sig_8168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610_8166,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_8167,sig_8168);


var G__8169 = seq__6600_8140;
var G__8170 = chunk__6601_8141;
var G__8171 = count__6602_8142;
var G__8172 = (i__6603_8143 + (1));
seq__6600_8140 = G__8169;
chunk__6601_8141 = G__8170;
count__6602_8142 = G__8171;
i__6603_8143 = G__8172;
continue;
} else {
var temp__5823__auto___8173 = cljs.core.seq(seq__6600_8140);
if(temp__5823__auto___8173){
var seq__6600_8174__$1 = temp__5823__auto___8173;
if(cljs.core.chunked_seq_QMARK_(seq__6600_8174__$1)){
var c__5673__auto___8175 = cljs.core.chunk_first(seq__6600_8174__$1);
var G__8176 = cljs.core.chunk_rest(seq__6600_8174__$1);
var G__8177 = c__5673__auto___8175;
var G__8178 = cljs.core.count(c__5673__auto___8175);
var G__8179 = (0);
seq__6600_8140 = G__8176;
chunk__6601_8141 = G__8177;
count__6602_8142 = G__8178;
i__6603_8143 = G__8179;
continue;
} else {
var vec__6613_8180 = cljs.core.first(seq__6600_8174__$1);
var method_name_8181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6613_8180,(0),null);
var sig_8182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6613_8180,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_8181,sig_8182);


var G__8183 = cljs.core.next(seq__6600_8174__$1);
var G__8184 = null;
var G__8185 = (0);
var G__8186 = (0);
seq__6600_8140 = G__8183;
chunk__6601_8141 = G__8184;
count__6602_8142 = G__8185;
i__6603_8143 = G__8186;
continue;
}
} else {
}
}
break;
}

var seq__6616_8187 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__6617_8188 = null;
var count__6618_8189 = (0);
var i__6619_8190 = (0);
while(true){
if((i__6619_8190 < count__6618_8189)){
var vec__6626_8212 = chunk__6617_8188.cljs$core$IIndexed$_nth$arity$2(null,i__6619_8190);
var method_name_8213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6626_8212,(0),null);
var sig_8214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6626_8212,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_8213,sig_8214);


var G__8215 = seq__6616_8187;
var G__8216 = chunk__6617_8188;
var G__8217 = count__6618_8189;
var G__8218 = (i__6619_8190 + (1));
seq__6616_8187 = G__8215;
chunk__6617_8188 = G__8216;
count__6618_8189 = G__8217;
i__6619_8190 = G__8218;
continue;
} else {
var temp__5823__auto___8219 = cljs.core.seq(seq__6616_8187);
if(temp__5823__auto___8219){
var seq__6616_8220__$1 = temp__5823__auto___8219;
if(cljs.core.chunked_seq_QMARK_(seq__6616_8220__$1)){
var c__5673__auto___8221 = cljs.core.chunk_first(seq__6616_8220__$1);
var G__8222 = cljs.core.chunk_rest(seq__6616_8220__$1);
var G__8223 = c__5673__auto___8221;
var G__8224 = cljs.core.count(c__5673__auto___8221);
var G__8225 = (0);
seq__6616_8187 = G__8222;
chunk__6617_8188 = G__8223;
count__6618_8189 = G__8224;
i__6619_8190 = G__8225;
continue;
} else {
var vec__6629_8226 = cljs.core.first(seq__6616_8220__$1);
var method_name_8227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6629_8226,(0),null);
var sig_8228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6629_8226,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_8227,sig_8228);


var G__8229 = cljs.core.next(seq__6616_8220__$1);
var G__8230 = null;
var G__8231 = (0);
var G__8232 = (0);
seq__6616_8187 = G__8229;
chunk__6617_8188 = G__8230;
count__6618_8189 = G__8231;
i__6619_8190 = G__8232;
continue;
}
} else {
}
}
break;
}

var seq__6632_8233 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__6633_8234 = null;
var count__6634_8235 = (0);
var i__6635_8236 = (0);
while(true){
if((i__6635_8236 < count__6634_8235)){
var vec__6642_8237 = chunk__6633_8234.cljs$core$IIndexed$_nth$arity$2(null,i__6635_8236);
var method_name_8238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6642_8237,(0),null);
var sig_8239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6642_8237,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_8238,sig_8239);


var G__8240 = seq__6632_8233;
var G__8241 = chunk__6633_8234;
var G__8242 = count__6634_8235;
var G__8243 = (i__6635_8236 + (1));
seq__6632_8233 = G__8240;
chunk__6633_8234 = G__8241;
count__6634_8235 = G__8242;
i__6635_8236 = G__8243;
continue;
} else {
var temp__5823__auto___8244 = cljs.core.seq(seq__6632_8233);
if(temp__5823__auto___8244){
var seq__6632_8245__$1 = temp__5823__auto___8244;
if(cljs.core.chunked_seq_QMARK_(seq__6632_8245__$1)){
var c__5673__auto___8246 = cljs.core.chunk_first(seq__6632_8245__$1);
var G__8247 = cljs.core.chunk_rest(seq__6632_8245__$1);
var G__8248 = c__5673__auto___8246;
var G__8249 = cljs.core.count(c__5673__auto___8246);
var G__8250 = (0);
seq__6632_8233 = G__8247;
chunk__6633_8234 = G__8248;
count__6634_8235 = G__8249;
i__6635_8236 = G__8250;
continue;
} else {
var vec__6645_8251 = cljs.core.first(seq__6632_8245__$1);
var method_name_8252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6645_8251,(0),null);
var sig_8253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6645_8251,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_8252,sig_8253);


var G__8254 = cljs.core.next(seq__6632_8245__$1);
var G__8255 = null;
var G__8256 = (0);
var G__8257 = (0);
seq__6632_8233 = G__8254;
chunk__6633_8234 = G__8255;
count__6634_8235 = G__8256;
i__6635_8236 = G__8257;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Task",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Task",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6648_8258 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 4, ["await",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"cancel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_done",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_cancelled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)], null));
var chunk__6649_8259 = null;
var count__6650_8260 = (0);
var i__6651_8261 = (0);
while(true){
if((i__6651_8261 < count__6650_8260)){
var vec__6658_8262 = chunk__6649_8259.cljs$core$IIndexed$_nth$arity$2(null,i__6651_8261);
var method_name_8263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6658_8262,(0),null);
var sig_8264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6658_8262,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_8263,sig_8264);


var G__8265 = seq__6648_8258;
var G__8266 = chunk__6649_8259;
var G__8267 = count__6650_8260;
var G__8268 = (i__6651_8261 + (1));
seq__6648_8258 = G__8265;
chunk__6649_8259 = G__8266;
count__6650_8260 = G__8267;
i__6651_8261 = G__8268;
continue;
} else {
var temp__5823__auto___8269 = cljs.core.seq(seq__6648_8258);
if(temp__5823__auto___8269){
var seq__6648_8270__$1 = temp__5823__auto___8269;
if(cljs.core.chunked_seq_QMARK_(seq__6648_8270__$1)){
var c__5673__auto___8271 = cljs.core.chunk_first(seq__6648_8270__$1);
var G__8272 = cljs.core.chunk_rest(seq__6648_8270__$1);
var G__8273 = c__5673__auto___8271;
var G__8274 = cljs.core.count(c__5673__auto___8271);
var G__8275 = (0);
seq__6648_8258 = G__8272;
chunk__6649_8259 = G__8273;
count__6650_8260 = G__8274;
i__6651_8261 = G__8275;
continue;
} else {
var vec__6661_8276 = cljs.core.first(seq__6648_8270__$1);
var method_name_8277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6661_8276,(0),null);
var sig_8278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6661_8276,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_8277,sig_8278);


var G__8279 = cljs.core.next(seq__6648_8270__$1);
var G__8280 = null;
var G__8281 = (0);
var G__8282 = (0);
seq__6648_8258 = G__8279;
chunk__6649_8259 = G__8280;
count__6650_8260 = G__8281;
i__6651_8261 = G__8282;
continue;
}
} else {
}
}
break;
}

var seq__6664_8283 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__6665_8284 = null;
var count__6666_8285 = (0);
var i__6667_8286 = (0);
while(true){
if((i__6667_8286 < count__6666_8285)){
var vec__6674_8291 = chunk__6665_8284.cljs$core$IIndexed$_nth$arity$2(null,i__6667_8286);
var method_name_8292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674_8291,(0),null);
var sig_8293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6674_8291,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_8292,sig_8293);


var G__8298 = seq__6664_8283;
var G__8299 = chunk__6665_8284;
var G__8300 = count__6666_8285;
var G__8301 = (i__6667_8286 + (1));
seq__6664_8283 = G__8298;
chunk__6665_8284 = G__8299;
count__6666_8285 = G__8300;
i__6667_8286 = G__8301;
continue;
} else {
var temp__5823__auto___8306 = cljs.core.seq(seq__6664_8283);
if(temp__5823__auto___8306){
var seq__6664_8307__$1 = temp__5823__auto___8306;
if(cljs.core.chunked_seq_QMARK_(seq__6664_8307__$1)){
var c__5673__auto___8308 = cljs.core.chunk_first(seq__6664_8307__$1);
var G__8309 = cljs.core.chunk_rest(seq__6664_8307__$1);
var G__8310 = c__5673__auto___8308;
var G__8311 = cljs.core.count(c__5673__auto___8308);
var G__8312 = (0);
seq__6664_8283 = G__8309;
chunk__6665_8284 = G__8310;
count__6666_8285 = G__8311;
i__6667_8286 = G__8312;
continue;
} else {
var vec__6677_8313 = cljs.core.first(seq__6664_8307__$1);
var method_name_8314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677_8313,(0),null);
var sig_8315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677_8313,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_8314,sig_8315);


var G__8316 = cljs.core.next(seq__6664_8307__$1);
var G__8317 = null;
var G__8318 = (0);
var G__8319 = (0);
seq__6664_8283 = G__8316;
chunk__6665_8284 = G__8317;
count__6666_8285 = G__8318;
i__6667_8286 = G__8319;
continue;
}
} else {
}
}
break;
}

var seq__6680_8320 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__6681_8321 = null;
var count__6682_8322 = (0);
var i__6683_8323 = (0);
while(true){
if((i__6683_8323 < count__6682_8322)){
var vec__6690_8324 = chunk__6681_8321.cljs$core$IIndexed$_nth$arity$2(null,i__6683_8323);
var method_name_8325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690_8324,(0),null);
var sig_8326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690_8324,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8325,sig_8326);


var G__8327 = seq__6680_8320;
var G__8328 = chunk__6681_8321;
var G__8329 = count__6682_8322;
var G__8330 = (i__6683_8323 + (1));
seq__6680_8320 = G__8327;
chunk__6681_8321 = G__8328;
count__6682_8322 = G__8329;
i__6683_8323 = G__8330;
continue;
} else {
var temp__5823__auto___8331 = cljs.core.seq(seq__6680_8320);
if(temp__5823__auto___8331){
var seq__6680_8332__$1 = temp__5823__auto___8331;
if(cljs.core.chunked_seq_QMARK_(seq__6680_8332__$1)){
var c__5673__auto___8333 = cljs.core.chunk_first(seq__6680_8332__$1);
var G__8334 = cljs.core.chunk_rest(seq__6680_8332__$1);
var G__8335 = c__5673__auto___8333;
var G__8336 = cljs.core.count(c__5673__auto___8333);
var G__8337 = (0);
seq__6680_8320 = G__8334;
chunk__6681_8321 = G__8335;
count__6682_8322 = G__8336;
i__6683_8323 = G__8337;
continue;
} else {
var vec__6693_8338 = cljs.core.first(seq__6680_8332__$1);
var method_name_8339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693_8338,(0),null);
var sig_8340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693_8338,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8339,sig_8340);


var G__8341 = cljs.core.next(seq__6680_8332__$1);
var G__8342 = null;
var G__8343 = (0);
var G__8344 = (0);
seq__6680_8320 = G__8341;
chunk__6681_8321 = G__8342;
count__6682_8322 = G__8343;
i__6683_8323 = G__8344;
continue;
}
} else {
}
}
break;
}

var seq__6696_8345 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6697_8346 = null;
var count__6698_8347 = (0);
var i__6699_8348 = (0);
while(true){
if((i__6699_8348 < count__6698_8347)){
var vec__6706_8351 = chunk__6697_8346.cljs$core$IIndexed$_nth$arity$2(null,i__6699_8348);
var method_name_8352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6706_8351,(0),null);
var sig_8353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6706_8351,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8352,sig_8353);


var G__8354 = seq__6696_8345;
var G__8355 = chunk__6697_8346;
var G__8356 = count__6698_8347;
var G__8357 = (i__6699_8348 + (1));
seq__6696_8345 = G__8354;
chunk__6697_8346 = G__8355;
count__6698_8347 = G__8356;
i__6699_8348 = G__8357;
continue;
} else {
var temp__5823__auto___8358 = cljs.core.seq(seq__6696_8345);
if(temp__5823__auto___8358){
var seq__6696_8359__$1 = temp__5823__auto___8358;
if(cljs.core.chunked_seq_QMARK_(seq__6696_8359__$1)){
var c__5673__auto___8360 = cljs.core.chunk_first(seq__6696_8359__$1);
var G__8361 = cljs.core.chunk_rest(seq__6696_8359__$1);
var G__8362 = c__5673__auto___8360;
var G__8363 = cljs.core.count(c__5673__auto___8360);
var G__8364 = (0);
seq__6696_8345 = G__8361;
chunk__6697_8346 = G__8362;
count__6698_8347 = G__8363;
i__6699_8348 = G__8364;
continue;
} else {
var vec__6709_8365 = cljs.core.first(seq__6696_8359__$1);
var method_name_8366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709_8365,(0),null);
var sig_8367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709_8365,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8366,sig_8367);


var G__8368 = cljs.core.next(seq__6696_8359__$1);
var G__8369 = null;
var G__8370 = (0);
var G__8371 = (0);
seq__6696_8345 = G__8368;
chunk__6697_8346 = G__8369;
count__6698_8347 = G__8370;
i__6699_8348 = G__8371;
continue;
}
} else {
}
}
break;
}

var seq__6712_8372 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__6713_8373 = null;
var count__6714_8374 = (0);
var i__6715_8375 = (0);
while(true){
if((i__6715_8375 < count__6714_8374)){
var vec__6722_8376 = chunk__6713_8373.cljs$core$IIndexed$_nth$arity$2(null,i__6715_8375);
var method_name_8377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6722_8376,(0),null);
var sig_8378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6722_8376,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8377,sig_8378);


var G__8379 = seq__6712_8372;
var G__8380 = chunk__6713_8373;
var G__8381 = count__6714_8374;
var G__8382 = (i__6715_8375 + (1));
seq__6712_8372 = G__8379;
chunk__6713_8373 = G__8380;
count__6714_8374 = G__8381;
i__6715_8375 = G__8382;
continue;
} else {
var temp__5823__auto___8383 = cljs.core.seq(seq__6712_8372);
if(temp__5823__auto___8383){
var seq__6712_8384__$1 = temp__5823__auto___8383;
if(cljs.core.chunked_seq_QMARK_(seq__6712_8384__$1)){
var c__5673__auto___8385 = cljs.core.chunk_first(seq__6712_8384__$1);
var G__8386 = cljs.core.chunk_rest(seq__6712_8384__$1);
var G__8387 = c__5673__auto___8385;
var G__8388 = cljs.core.count(c__5673__auto___8385);
var G__8389 = (0);
seq__6712_8372 = G__8386;
chunk__6713_8373 = G__8387;
count__6714_8374 = G__8388;
i__6715_8375 = G__8389;
continue;
} else {
var vec__6725_8390 = cljs.core.first(seq__6712_8384__$1);
var method_name_8391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6725_8390,(0),null);
var sig_8392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6725_8390,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8391,sig_8392);


var G__8393 = cljs.core.next(seq__6712_8384__$1);
var G__8394 = null;
var G__8395 = (0);
var G__8396 = (0);
seq__6712_8372 = G__8393;
chunk__6713_8373 = G__8394;
count__6714_8374 = G__8395;
i__6715_8375 = G__8396;
continue;
}
} else {
}
}
break;
}

var seq__6728_8397 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6729_8398 = null;
var count__6730_8399 = (0);
var i__6731_8400 = (0);
while(true){
if((i__6731_8400 < count__6730_8399)){
var vec__6738_8409 = chunk__6729_8398.cljs$core$IIndexed$_nth$arity$2(null,i__6731_8400);
var method_name_8410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6738_8409,(0),null);
var sig_8411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6738_8409,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8410,sig_8411);


var G__8412 = seq__6728_8397;
var G__8413 = chunk__6729_8398;
var G__8414 = count__6730_8399;
var G__8415 = (i__6731_8400 + (1));
seq__6728_8397 = G__8412;
chunk__6729_8398 = G__8413;
count__6730_8399 = G__8414;
i__6731_8400 = G__8415;
continue;
} else {
var temp__5823__auto___8416 = cljs.core.seq(seq__6728_8397);
if(temp__5823__auto___8416){
var seq__6728_8417__$1 = temp__5823__auto___8416;
if(cljs.core.chunked_seq_QMARK_(seq__6728_8417__$1)){
var c__5673__auto___8418 = cljs.core.chunk_first(seq__6728_8417__$1);
var G__8419 = cljs.core.chunk_rest(seq__6728_8417__$1);
var G__8420 = c__5673__auto___8418;
var G__8421 = cljs.core.count(c__5673__auto___8418);
var G__8422 = (0);
seq__6728_8397 = G__8419;
chunk__6729_8398 = G__8420;
count__6730_8399 = G__8421;
i__6731_8400 = G__8422;
continue;
} else {
var vec__6741_8423 = cljs.core.first(seq__6728_8417__$1);
var method_name_8424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6741_8423,(0),null);
var sig_8425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6741_8423,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8424,sig_8425);


var G__8426 = cljs.core.next(seq__6728_8417__$1);
var G__8427 = null;
var G__8428 = (0);
var G__8429 = (0);
seq__6728_8397 = G__8426;
chunk__6729_8398 = G__8427;
count__6730_8399 = G__8428;
i__6731_8400 = G__8429;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6744_8430 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","cursor","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__6745_8431 = null;
var count__6746_8432 = (0);
var i__6747_8433 = (0);
while(true){
if((i__6747_8433 < count__6746_8432)){
var vec__6754_8434 = chunk__6745_8431.cljs$core$IIndexed$_nth$arity$2(null,i__6747_8433);
var method_name_8435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6754_8434,(0),null);
var sig_8436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6754_8434,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8435,sig_8436);


var G__8437 = seq__6744_8430;
var G__8438 = chunk__6745_8431;
var G__8439 = count__6746_8432;
var G__8440 = (i__6747_8433 + (1));
seq__6744_8430 = G__8437;
chunk__6745_8431 = G__8438;
count__6746_8432 = G__8439;
i__6747_8433 = G__8440;
continue;
} else {
var temp__5823__auto___8441 = cljs.core.seq(seq__6744_8430);
if(temp__5823__auto___8441){
var seq__6744_8442__$1 = temp__5823__auto___8441;
if(cljs.core.chunked_seq_QMARK_(seq__6744_8442__$1)){
var c__5673__auto___8443 = cljs.core.chunk_first(seq__6744_8442__$1);
var G__8444 = cljs.core.chunk_rest(seq__6744_8442__$1);
var G__8445 = c__5673__auto___8443;
var G__8446 = cljs.core.count(c__5673__auto___8443);
var G__8447 = (0);
seq__6744_8430 = G__8444;
chunk__6745_8431 = G__8445;
count__6746_8432 = G__8446;
i__6747_8433 = G__8447;
continue;
} else {
var vec__6757_8448 = cljs.core.first(seq__6744_8442__$1);
var method_name_8449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757_8448,(0),null);
var sig_8450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6757_8448,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8449,sig_8450);


var G__8451 = cljs.core.next(seq__6744_8442__$1);
var G__8452 = null;
var G__8453 = (0);
var G__8454 = (0);
seq__6744_8430 = G__8451;
chunk__6745_8431 = G__8452;
count__6746_8432 = G__8453;
i__6747_8433 = G__8454;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__6760_8455 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","cursor","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6761_8456 = null;
var count__6762_8457 = (0);
var i__6763_8458 = (0);
while(true){
if((i__6763_8458 < count__6762_8457)){
var vec__6770_8459 = chunk__6761_8456.cljs$core$IIndexed$_nth$arity$2(null,i__6763_8458);
var method_name_8460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6770_8459,(0),null);
var sig_8461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6770_8459,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8460,sig_8461);


var G__8462 = seq__6760_8455;
var G__8463 = chunk__6761_8456;
var G__8464 = count__6762_8457;
var G__8465 = (i__6763_8458 + (1));
seq__6760_8455 = G__8462;
chunk__6761_8456 = G__8463;
count__6762_8457 = G__8464;
i__6763_8458 = G__8465;
continue;
} else {
var temp__5823__auto___8466 = cljs.core.seq(seq__6760_8455);
if(temp__5823__auto___8466){
var seq__6760_8467__$1 = temp__5823__auto___8466;
if(cljs.core.chunked_seq_QMARK_(seq__6760_8467__$1)){
var c__5673__auto___8468 = cljs.core.chunk_first(seq__6760_8467__$1);
var G__8469 = cljs.core.chunk_rest(seq__6760_8467__$1);
var G__8470 = c__5673__auto___8468;
var G__8471 = cljs.core.count(c__5673__auto___8468);
var G__8472 = (0);
seq__6760_8455 = G__8469;
chunk__6761_8456 = G__8470;
count__6762_8457 = G__8471;
i__6763_8458 = G__8472;
continue;
} else {
var vec__6773_8473 = cljs.core.first(seq__6760_8467__$1);
var method_name_8474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773_8473,(0),null);
var sig_8475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773_8473,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8474,sig_8475);


var G__8476 = cljs.core.next(seq__6760_8467__$1);
var G__8477 = null;
var G__8478 = (0);
var G__8479 = (0);
seq__6760_8455 = G__8476;
chunk__6761_8456 = G__8477;
count__6762_8457 = G__8478;
i__6763_8458 = G__8479;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Set",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

nex.typechecker.env_add_method(env,"Set","from_array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"values",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null));

var seq__6776_8480 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["contains",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"union",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"intersection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"symmetric_difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"is_empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"cursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null)], null));
var chunk__6777_8481 = null;
var count__6778_8482 = (0);
var i__6779_8483 = (0);
while(true){
if((i__6779_8483 < count__6778_8482)){
var vec__6786_8484 = chunk__6777_8481.cljs$core$IIndexed$_nth$arity$2(null,i__6779_8483);
var method_name_8485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6786_8484,(0),null);
var sig_8486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6786_8484,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_8485,sig_8486);


var G__8487 = seq__6776_8480;
var G__8488 = chunk__6777_8481;
var G__8489 = count__6778_8482;
var G__8490 = (i__6779_8483 + (1));
seq__6776_8480 = G__8487;
chunk__6777_8481 = G__8488;
count__6778_8482 = G__8489;
i__6779_8483 = G__8490;
continue;
} else {
var temp__5823__auto___8491 = cljs.core.seq(seq__6776_8480);
if(temp__5823__auto___8491){
var seq__6776_8492__$1 = temp__5823__auto___8491;
if(cljs.core.chunked_seq_QMARK_(seq__6776_8492__$1)){
var c__5673__auto___8493 = cljs.core.chunk_first(seq__6776_8492__$1);
var G__8494 = cljs.core.chunk_rest(seq__6776_8492__$1);
var G__8495 = c__5673__auto___8493;
var G__8496 = cljs.core.count(c__5673__auto___8493);
var G__8497 = (0);
seq__6776_8480 = G__8494;
chunk__6777_8481 = G__8495;
count__6778_8482 = G__8496;
i__6779_8483 = G__8497;
continue;
} else {
var vec__6789_8498 = cljs.core.first(seq__6776_8492__$1);
var method_name_8499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6789_8498,(0),null);
var sig_8500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6789_8498,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_8499,sig_8500);


var G__8501 = cljs.core.next(seq__6776_8492__$1);
var G__8502 = null;
var G__8503 = (0);
var G__8504 = (0);
seq__6776_8480 = G__8501;
chunk__6777_8481 = G__8502;
count__6778_8482 = G__8503;
i__6779_8483 = G__8504;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Channel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Channel",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6792_8505 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"try_send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"try_receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"T",new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"is_closed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"capacity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__6793_8506 = null;
var count__6794_8507 = (0);
var i__6795_8508 = (0);
while(true){
if((i__6795_8508 < count__6794_8507)){
var vec__6802_8509 = chunk__6793_8506.cljs$core$IIndexed$_nth$arity$2(null,i__6795_8508);
var method_name_8510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802_8509,(0),null);
var sig_8511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6802_8509,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_8510,sig_8511);


var G__8512 = seq__6792_8505;
var G__8513 = chunk__6793_8506;
var G__8514 = count__6794_8507;
var G__8515 = (i__6795_8508 + (1));
seq__6792_8505 = G__8512;
chunk__6793_8506 = G__8513;
count__6794_8507 = G__8514;
i__6795_8508 = G__8515;
continue;
} else {
var temp__5823__auto___8516 = cljs.core.seq(seq__6792_8505);
if(temp__5823__auto___8516){
var seq__6792_8517__$1 = temp__5823__auto___8516;
if(cljs.core.chunked_seq_QMARK_(seq__6792_8517__$1)){
var c__5673__auto___8518 = cljs.core.chunk_first(seq__6792_8517__$1);
var G__8519 = cljs.core.chunk_rest(seq__6792_8517__$1);
var G__8520 = c__5673__auto___8518;
var G__8521 = cljs.core.count(c__5673__auto___8518);
var G__8522 = (0);
seq__6792_8505 = G__8519;
chunk__6793_8506 = G__8520;
count__6794_8507 = G__8521;
i__6795_8508 = G__8522;
continue;
} else {
var vec__6805_8523 = cljs.core.first(seq__6792_8517__$1);
var method_name_8524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6805_8523,(0),null);
var sig_8525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6805_8523,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_8524,sig_8525);


var G__8526 = cljs.core.next(seq__6792_8517__$1);
var G__8527 = null;
var G__8528 = (0);
var G__8529 = (0);
seq__6792_8505 = G__8526;
chunk__6793_8506 = G__8527;
count__6794_8507 = G__8528;
i__6795_8508 = G__8529;
continue;
}
} else {
}
}
break;
}

var seq__6808 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__6809 = null;
var count__6810 = (0);
var i__6811 = (0);
while(true){
if((i__6811 < count__6810)){
var n = chunk__6809.cljs$core$IIndexed$_nth$arity$2(null,i__6811);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6808,chunk__6809,count__6810,i__6811,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6808,chunk__6809,count__6810,i__6811,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8530 = seq__6808;
var G__8531 = chunk__6809;
var G__8532 = count__6810;
var G__8533 = (i__6811 + (1));
seq__6808 = G__8530;
chunk__6809 = G__8531;
count__6810 = G__8532;
i__6811 = G__8533;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6808);
if(temp__5823__auto__){
var seq__6808__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6808__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6808__$1);
var G__8534 = cljs.core.chunk_rest(seq__6808__$1);
var G__8535 = c__5673__auto__;
var G__8536 = cljs.core.count(c__5673__auto__);
var G__8537 = (0);
seq__6808 = G__8534;
chunk__6809 = G__8535;
count__6810 = G__8536;
i__6811 = G__8537;
continue;
} else {
var n = cljs.core.first(seq__6808__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6808,chunk__6809,count__6810,i__6811,n,seq__6808__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6808,chunk__6809,count__6810,i__6811,n,seq__6808__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8538 = cljs.core.next(seq__6808__$1);
var G__8539 = null;
var G__8540 = (0);
var G__8541 = (0);
seq__6808 = G__8538;
chunk__6809 = G__8539;
count__6810 = G__8540;
i__6811 = G__8541;
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
var G__6813 = arguments.length;
switch (G__6813) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__6814,opts){
var map__6815 = p__6814;
var map__6815__$1 = cljs.core.__destructure_map(map__6815);
var program = map__6815__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6815__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6815__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6815__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6815__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6815__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__6817_8543 = cljs.core.seq(imports);
var chunk__6818_8544 = null;
var count__6819_8545 = (0);
var i__6820_8546 = (0);
while(true){
if((i__6820_8546 < count__6819_8545)){
var map__6823_8547 = chunk__6818_8544.cljs$core$IIndexed$_nth$arity$2(null,i__6820_8546);
var map__6823_8548__$1 = cljs.core.__destructure_map(map__6823_8547);
var qualified_name_8549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6823_8548__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6823_8548__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8550 == null)){
var simple_name_8551 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8549,/\./));
nex.typechecker.env_add_class(env,simple_name_8551,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8551,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8549], null));
} else {
}


var G__8552 = seq__6817_8543;
var G__8553 = chunk__6818_8544;
var G__8554 = count__6819_8545;
var G__8555 = (i__6820_8546 + (1));
seq__6817_8543 = G__8552;
chunk__6818_8544 = G__8553;
count__6819_8545 = G__8554;
i__6820_8546 = G__8555;
continue;
} else {
var temp__5823__auto___8556 = cljs.core.seq(seq__6817_8543);
if(temp__5823__auto___8556){
var seq__6817_8557__$1 = temp__5823__auto___8556;
if(cljs.core.chunked_seq_QMARK_(seq__6817_8557__$1)){
var c__5673__auto___8558 = cljs.core.chunk_first(seq__6817_8557__$1);
var G__8559 = cljs.core.chunk_rest(seq__6817_8557__$1);
var G__8560 = c__5673__auto___8558;
var G__8561 = cljs.core.count(c__5673__auto___8558);
var G__8562 = (0);
seq__6817_8543 = G__8559;
chunk__6818_8544 = G__8560;
count__6819_8545 = G__8561;
i__6820_8546 = G__8562;
continue;
} else {
var map__6824_8563 = cljs.core.first(seq__6817_8557__$1);
var map__6824_8564__$1 = cljs.core.__destructure_map(map__6824_8563);
var qualified_name_8565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6824_8564__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6824_8564__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8566 == null)){
var simple_name_8567 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8565,/\./));
nex.typechecker.env_add_class(env,simple_name_8567,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8567,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8565], null));
} else {
}


var G__8568 = cljs.core.next(seq__6817_8557__$1);
var G__8569 = null;
var G__8570 = (0);
var G__8571 = (0);
seq__6817_8543 = G__8568;
chunk__6818_8544 = G__8569;
count__6819_8545 = G__8570;
i__6820_8546 = G__8571;
continue;
}
} else {
}
}
break;
}

var seq__6825_8572 = cljs.core.seq(classes);
var chunk__6826_8573 = null;
var count__6827_8574 = (0);
var i__6828_8575 = (0);
while(true){
if((i__6828_8575 < count__6827_8574)){
var class_def_8576 = chunk__6826_8573.cljs$core$IIndexed$_nth$arity$2(null,i__6828_8575);
nex.typechecker.collect_class_info(env,class_def_8576);


var G__8577 = seq__6825_8572;
var G__8578 = chunk__6826_8573;
var G__8579 = count__6827_8574;
var G__8580 = (i__6828_8575 + (1));
seq__6825_8572 = G__8577;
chunk__6826_8573 = G__8578;
count__6827_8574 = G__8579;
i__6828_8575 = G__8580;
continue;
} else {
var temp__5823__auto___8581 = cljs.core.seq(seq__6825_8572);
if(temp__5823__auto___8581){
var seq__6825_8582__$1 = temp__5823__auto___8581;
if(cljs.core.chunked_seq_QMARK_(seq__6825_8582__$1)){
var c__5673__auto___8583 = cljs.core.chunk_first(seq__6825_8582__$1);
var G__8584 = cljs.core.chunk_rest(seq__6825_8582__$1);
var G__8585 = c__5673__auto___8583;
var G__8586 = cljs.core.count(c__5673__auto___8583);
var G__8587 = (0);
seq__6825_8572 = G__8584;
chunk__6826_8573 = G__8585;
count__6827_8574 = G__8586;
i__6828_8575 = G__8587;
continue;
} else {
var class_def_8588 = cljs.core.first(seq__6825_8582__$1);
nex.typechecker.collect_class_info(env,class_def_8588);


var G__8589 = cljs.core.next(seq__6825_8582__$1);
var G__8590 = null;
var G__8591 = (0);
var G__8592 = (0);
seq__6825_8572 = G__8589;
chunk__6826_8573 = G__8590;
count__6827_8574 = G__8591;
i__6828_8575 = G__8592;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6829_8593 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6830_8594 = null;
var count__6831_8595 = (0);
var i__6832_8596 = (0);
while(true){
if((i__6832_8596 < count__6831_8595)){
var vec__6839_8597 = chunk__6830_8594.cljs$core$IIndexed$_nth$arity$2(null,i__6832_8596);
var var_name_8598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6839_8597,(0),null);
var var_type_8599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6839_8597,(1),null);
nex.typechecker.env_add_var(env,var_name_8598,var_type_8599);


var G__8600 = seq__6829_8593;
var G__8601 = chunk__6830_8594;
var G__8602 = count__6831_8595;
var G__8603 = (i__6832_8596 + (1));
seq__6829_8593 = G__8600;
chunk__6830_8594 = G__8601;
count__6831_8595 = G__8602;
i__6832_8596 = G__8603;
continue;
} else {
var temp__5823__auto___8604 = cljs.core.seq(seq__6829_8593);
if(temp__5823__auto___8604){
var seq__6829_8605__$1 = temp__5823__auto___8604;
if(cljs.core.chunked_seq_QMARK_(seq__6829_8605__$1)){
var c__5673__auto___8606 = cljs.core.chunk_first(seq__6829_8605__$1);
var G__8607 = cljs.core.chunk_rest(seq__6829_8605__$1);
var G__8608 = c__5673__auto___8606;
var G__8609 = cljs.core.count(c__5673__auto___8606);
var G__8610 = (0);
seq__6829_8593 = G__8607;
chunk__6830_8594 = G__8608;
count__6831_8595 = G__8609;
i__6832_8596 = G__8610;
continue;
} else {
var vec__6842_8611 = cljs.core.first(seq__6829_8605__$1);
var var_name_8612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842_8611,(0),null);
var var_type_8613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842_8611,(1),null);
nex.typechecker.env_add_var(env,var_name_8612,var_type_8613);


var G__8614 = cljs.core.next(seq__6829_8605__$1);
var G__8615 = null;
var G__8616 = (0);
var G__8617 = (0);
seq__6829_8593 = G__8614;
chunk__6830_8594 = G__8615;
count__6831_8595 = G__8616;
i__6832_8596 = G__8617;
continue;
}
} else {
}
}
break;
}

var seq__6845_8618 = cljs.core.seq(functions);
var chunk__6846_8619 = null;
var count__6847_8620 = (0);
var i__6848_8621 = (0);
while(true){
if((i__6848_8621 < count__6847_8620)){
var fn_def_8622 = chunk__6846_8619.cljs$core$IIndexed$_nth$arity$2(null,i__6848_8621);
var arity_8623 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8622));
if((arity_8623 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8622))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8622))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8622),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8622));


var G__8624 = seq__6845_8618;
var G__8625 = chunk__6846_8619;
var G__8626 = count__6847_8620;
var G__8627 = (i__6848_8621 + (1));
seq__6845_8618 = G__8624;
chunk__6846_8619 = G__8625;
count__6847_8620 = G__8626;
i__6848_8621 = G__8627;
continue;
} else {
var temp__5823__auto___8628 = cljs.core.seq(seq__6845_8618);
if(temp__5823__auto___8628){
var seq__6845_8629__$1 = temp__5823__auto___8628;
if(cljs.core.chunked_seq_QMARK_(seq__6845_8629__$1)){
var c__5673__auto___8630 = cljs.core.chunk_first(seq__6845_8629__$1);
var G__8631 = cljs.core.chunk_rest(seq__6845_8629__$1);
var G__8632 = c__5673__auto___8630;
var G__8633 = cljs.core.count(c__5673__auto___8630);
var G__8634 = (0);
seq__6845_8618 = G__8631;
chunk__6846_8619 = G__8632;
count__6847_8620 = G__8633;
i__6848_8621 = G__8634;
continue;
} else {
var fn_def_8635 = cljs.core.first(seq__6845_8629__$1);
var arity_8636 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8635));
if((arity_8636 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8635))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8635))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8635),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8635));


var G__8637 = cljs.core.next(seq__6845_8629__$1);
var G__8638 = null;
var G__8639 = (0);
var G__8640 = (0);
seq__6845_8618 = G__8637;
chunk__6846_8619 = G__8638;
count__6847_8620 = G__8639;
i__6848_8621 = G__8640;
continue;
}
} else {
}
}
break;
}

var seq__6849_8641 = cljs.core.seq(classes);
var chunk__6850_8642 = null;
var count__6851_8643 = (0);
var i__6852_8644 = (0);
while(true){
if((i__6852_8644 < count__6851_8643)){
var class_def_8645 = chunk__6850_8642.cljs$core$IIndexed$_nth$arity$2(null,i__6852_8644);
nex.typechecker.check_class(env,class_def_8645);


var G__8646 = seq__6849_8641;
var G__8647 = chunk__6850_8642;
var G__8648 = count__6851_8643;
var G__8649 = (i__6852_8644 + (1));
seq__6849_8641 = G__8646;
chunk__6850_8642 = G__8647;
count__6851_8643 = G__8648;
i__6852_8644 = G__8649;
continue;
} else {
var temp__5823__auto___8650 = cljs.core.seq(seq__6849_8641);
if(temp__5823__auto___8650){
var seq__6849_8651__$1 = temp__5823__auto___8650;
if(cljs.core.chunked_seq_QMARK_(seq__6849_8651__$1)){
var c__5673__auto___8652 = cljs.core.chunk_first(seq__6849_8651__$1);
var G__8653 = cljs.core.chunk_rest(seq__6849_8651__$1);
var G__8654 = c__5673__auto___8652;
var G__8655 = cljs.core.count(c__5673__auto___8652);
var G__8656 = (0);
seq__6849_8641 = G__8653;
chunk__6850_8642 = G__8654;
count__6851_8643 = G__8655;
i__6852_8644 = G__8656;
continue;
} else {
var class_def_8657 = cljs.core.first(seq__6849_8651__$1);
nex.typechecker.check_class(env,class_def_8657);


var G__8658 = cljs.core.next(seq__6849_8651__$1);
var G__8659 = null;
var G__8660 = (0);
var G__8661 = (0);
seq__6849_8641 = G__8658;
chunk__6850_8642 = G__8659;
count__6851_8643 = G__8660;
i__6852_8644 = G__8661;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__6853_8662 = cljs.core.seq(statements);
var chunk__6854_8663 = null;
var count__6855_8664 = (0);
var i__6856_8665 = (0);
while(true){
if((i__6856_8665 < count__6855_8664)){
var stmt_8666 = chunk__6854_8663.cljs$core$IIndexed$_nth$arity$2(null,i__6856_8665);
nex.typechecker.check_statement(env,stmt_8666);


var G__8667 = seq__6853_8662;
var G__8668 = chunk__6854_8663;
var G__8669 = count__6855_8664;
var G__8670 = (i__6856_8665 + (1));
seq__6853_8662 = G__8667;
chunk__6854_8663 = G__8668;
count__6855_8664 = G__8669;
i__6856_8665 = G__8670;
continue;
} else {
var temp__5823__auto___8671 = cljs.core.seq(seq__6853_8662);
if(temp__5823__auto___8671){
var seq__6853_8672__$1 = temp__5823__auto___8671;
if(cljs.core.chunked_seq_QMARK_(seq__6853_8672__$1)){
var c__5673__auto___8673 = cljs.core.chunk_first(seq__6853_8672__$1);
var G__8674 = cljs.core.chunk_rest(seq__6853_8672__$1);
var G__8675 = c__5673__auto___8673;
var G__8676 = cljs.core.count(c__5673__auto___8673);
var G__8677 = (0);
seq__6853_8662 = G__8674;
chunk__6854_8663 = G__8675;
count__6855_8664 = G__8676;
i__6856_8665 = G__8677;
continue;
} else {
var stmt_8678 = cljs.core.first(seq__6853_8672__$1);
nex.typechecker.check_statement(env,stmt_8678);


var G__8679 = cljs.core.next(seq__6853_8672__$1);
var G__8680 = null;
var G__8681 = (0);
var G__8682 = (0);
seq__6853_8662 = G__8679;
chunk__6854_8663 = G__8680;
count__6855_8664 = G__8681;
i__6856_8665 = G__8682;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6857_8683 = cljs.core.seq(calls);
var chunk__6858_8684 = null;
var count__6859_8685 = (0);
var i__6860_8686 = (0);
while(true){
if((i__6860_8686 < count__6859_8685)){
var call_8687 = chunk__6858_8684.cljs$core$IIndexed$_nth$arity$2(null,i__6860_8686);
nex.typechecker.check_expression(env,call_8687);


var G__8688 = seq__6857_8683;
var G__8689 = chunk__6858_8684;
var G__8690 = count__6859_8685;
var G__8691 = (i__6860_8686 + (1));
seq__6857_8683 = G__8688;
chunk__6858_8684 = G__8689;
count__6859_8685 = G__8690;
i__6860_8686 = G__8691;
continue;
} else {
var temp__5823__auto___8692 = cljs.core.seq(seq__6857_8683);
if(temp__5823__auto___8692){
var seq__6857_8693__$1 = temp__5823__auto___8692;
if(cljs.core.chunked_seq_QMARK_(seq__6857_8693__$1)){
var c__5673__auto___8694 = cljs.core.chunk_first(seq__6857_8693__$1);
var G__8695 = cljs.core.chunk_rest(seq__6857_8693__$1);
var G__8696 = c__5673__auto___8694;
var G__8697 = cljs.core.count(c__5673__auto___8694);
var G__8698 = (0);
seq__6857_8683 = G__8695;
chunk__6858_8684 = G__8696;
count__6859_8685 = G__8697;
i__6860_8686 = G__8698;
continue;
} else {
var call_8699 = cljs.core.first(seq__6857_8693__$1);
nex.typechecker.check_expression(env,call_8699);


var G__8700 = cljs.core.next(seq__6857_8693__$1);
var G__8701 = null;
var G__8702 = (0);
var G__8703 = (0);
seq__6857_8683 = G__8700;
chunk__6858_8684 = G__8701;
count__6859_8685 = G__8702;
i__6860_8686 = G__8703;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e6816){var e = e6816;
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
var G__6862 = arguments.length;
switch (G__6862) {
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
var seq__6864_8705 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6865_8706 = null;
var count__6866_8707 = (0);
var i__6867_8708 = (0);
while(true){
if((i__6867_8708 < count__6866_8707)){
var map__6870_8709 = chunk__6865_8706.cljs$core$IIndexed$_nth$arity$2(null,i__6867_8708);
var map__6870_8710__$1 = cljs.core.__destructure_map(map__6870_8709);
var qualified_name_8711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6870_8710__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6870_8710__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8712 == null)){
var simple_name_8713 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8711,/\./));
nex.typechecker.env_add_class(env,simple_name_8713,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8713,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8711], null));
} else {
}


var G__8714 = seq__6864_8705;
var G__8715 = chunk__6865_8706;
var G__8716 = count__6866_8707;
var G__8717 = (i__6867_8708 + (1));
seq__6864_8705 = G__8714;
chunk__6865_8706 = G__8715;
count__6866_8707 = G__8716;
i__6867_8708 = G__8717;
continue;
} else {
var temp__5823__auto___8718 = cljs.core.seq(seq__6864_8705);
if(temp__5823__auto___8718){
var seq__6864_8719__$1 = temp__5823__auto___8718;
if(cljs.core.chunked_seq_QMARK_(seq__6864_8719__$1)){
var c__5673__auto___8720 = cljs.core.chunk_first(seq__6864_8719__$1);
var G__8721 = cljs.core.chunk_rest(seq__6864_8719__$1);
var G__8722 = c__5673__auto___8720;
var G__8723 = cljs.core.count(c__5673__auto___8720);
var G__8724 = (0);
seq__6864_8705 = G__8721;
chunk__6865_8706 = G__8722;
count__6866_8707 = G__8723;
i__6867_8708 = G__8724;
continue;
} else {
var map__6871_8725 = cljs.core.first(seq__6864_8719__$1);
var map__6871_8726__$1 = cljs.core.__destructure_map(map__6871_8725);
var qualified_name_8727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6871_8726__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6871_8726__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8728 == null)){
var simple_name_8729 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8727,/\./));
nex.typechecker.env_add_class(env,simple_name_8729,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8729,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8727], null));
} else {
}


var G__8730 = cljs.core.next(seq__6864_8719__$1);
var G__8731 = null;
var G__8732 = (0);
var G__8733 = (0);
seq__6864_8705 = G__8730;
chunk__6865_8706 = G__8731;
count__6866_8707 = G__8732;
i__6867_8708 = G__8733;
continue;
}
} else {
}
}
break;
}

var seq__6872_8734 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6873_8735 = null;
var count__6874_8736 = (0);
var i__6875_8737 = (0);
while(true){
if((i__6875_8737 < count__6874_8736)){
var class_def_8738 = chunk__6873_8735.cljs$core$IIndexed$_nth$arity$2(null,i__6875_8737);
nex.typechecker.collect_class_info(env,class_def_8738);


var G__8739 = seq__6872_8734;
var G__8740 = chunk__6873_8735;
var G__8741 = count__6874_8736;
var G__8742 = (i__6875_8737 + (1));
seq__6872_8734 = G__8739;
chunk__6873_8735 = G__8740;
count__6874_8736 = G__8741;
i__6875_8737 = G__8742;
continue;
} else {
var temp__5823__auto___8743 = cljs.core.seq(seq__6872_8734);
if(temp__5823__auto___8743){
var seq__6872_8744__$1 = temp__5823__auto___8743;
if(cljs.core.chunked_seq_QMARK_(seq__6872_8744__$1)){
var c__5673__auto___8745 = cljs.core.chunk_first(seq__6872_8744__$1);
var G__8746 = cljs.core.chunk_rest(seq__6872_8744__$1);
var G__8747 = c__5673__auto___8745;
var G__8748 = cljs.core.count(c__5673__auto___8745);
var G__8749 = (0);
seq__6872_8734 = G__8746;
chunk__6873_8735 = G__8747;
count__6874_8736 = G__8748;
i__6875_8737 = G__8749;
continue;
} else {
var class_def_8750 = cljs.core.first(seq__6872_8744__$1);
nex.typechecker.collect_class_info(env,class_def_8750);


var G__8751 = cljs.core.next(seq__6872_8744__$1);
var G__8752 = null;
var G__8753 = (0);
var G__8754 = (0);
seq__6872_8734 = G__8751;
chunk__6873_8735 = G__8752;
count__6874_8736 = G__8753;
i__6875_8737 = G__8754;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6876_8755 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6877_8756 = null;
var count__6878_8757 = (0);
var i__6879_8758 = (0);
while(true){
if((i__6879_8758 < count__6878_8757)){
var vec__6886_8759 = chunk__6877_8756.cljs$core$IIndexed$_nth$arity$2(null,i__6879_8758);
var var_name_8760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6886_8759,(0),null);
var var_type_8761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6886_8759,(1),null);
nex.typechecker.env_add_var(env,var_name_8760,var_type_8761);


var G__8762 = seq__6876_8755;
var G__8763 = chunk__6877_8756;
var G__8764 = count__6878_8757;
var G__8765 = (i__6879_8758 + (1));
seq__6876_8755 = G__8762;
chunk__6877_8756 = G__8763;
count__6878_8757 = G__8764;
i__6879_8758 = G__8765;
continue;
} else {
var temp__5823__auto___8766 = cljs.core.seq(seq__6876_8755);
if(temp__5823__auto___8766){
var seq__6876_8767__$1 = temp__5823__auto___8766;
if(cljs.core.chunked_seq_QMARK_(seq__6876_8767__$1)){
var c__5673__auto___8768 = cljs.core.chunk_first(seq__6876_8767__$1);
var G__8769 = cljs.core.chunk_rest(seq__6876_8767__$1);
var G__8770 = c__5673__auto___8768;
var G__8771 = cljs.core.count(c__5673__auto___8768);
var G__8772 = (0);
seq__6876_8755 = G__8769;
chunk__6877_8756 = G__8770;
count__6878_8757 = G__8771;
i__6879_8758 = G__8772;
continue;
} else {
var vec__6889_8773 = cljs.core.first(seq__6876_8767__$1);
var var_name_8774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6889_8773,(0),null);
var var_type_8775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6889_8773,(1),null);
nex.typechecker.env_add_var(env,var_name_8774,var_type_8775);


var G__8776 = cljs.core.next(seq__6876_8767__$1);
var G__8777 = null;
var G__8778 = (0);
var G__8779 = (0);
seq__6876_8755 = G__8776;
chunk__6877_8756 = G__8777;
count__6878_8757 = G__8778;
i__6879_8758 = G__8779;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e6863){var _ = e6863;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
