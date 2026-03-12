goog.provide('nex.typechecker');
/**
 * Create a new type environment
 */
nex.typechecker.make_type_env = (function nex$typechecker$make_type_env(var_args){
var G__6083 = arguments.length;
switch (G__6083) {
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
var G__6084 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6085 = name;
return (nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_var.cljs$core$IFn$_invoke$arity$2(G__6084,G__6085) : nex.typechecker.env_lookup_var.call(null,G__6084,G__6085));
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
var G__6086 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6087 = class_name;
var G__6088 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6086,G__6087,G__6088) : nex.typechecker.env_lookup_method.call(null,G__6086,G__6087,G__6088));
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
var G__6089 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6090 = class_name;
return (nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.env_lookup_class.cljs$core$IFn$_invoke$arity$2(G__6089,G__6090) : nex.typechecker.env_lookup_class.call(null,G__6089,G__6090));
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(super$__$1,"Any")){
return true;
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
var temp__5823__auto___6932 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6932)){
var constraint_6933 = temp__5823__auto___6932;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6933))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6933)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6933)))], null));
}
} else {
}


var G__6934 = seq__6122;
var G__6935 = chunk__6123;
var G__6936 = count__6124;
var G__6937 = (i__6125 + (1));
seq__6122 = G__6934;
chunk__6123 = G__6935;
count__6124 = G__6936;
i__6125 = G__6937;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6122);
if(temp__5823__auto__){
var seq__6122__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6122__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6122__$1);
var G__6938 = cljs.core.chunk_rest(seq__6122__$1);
var G__6939 = c__5673__auto__;
var G__6940 = cljs.core.count(c__5673__auto__);
var G__6941 = (0);
seq__6122 = G__6938;
chunk__6123 = G__6939;
count__6124 = G__6940;
i__6125 = G__6941;
continue;
} else {
var vec__6135 = cljs.core.first(seq__6122__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(1),null);
var temp__5823__auto___6942__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___6942__$1)){
var constraint_6943 = temp__5823__auto___6942__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_6943))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6943)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_6943)))], null));
}
} else {
}


var G__6944 = cljs.core.next(seq__6122__$1);
var G__6945 = null;
var G__6946 = (0);
var G__6947 = (0);
seq__6122 = G__6944;
chunk__6123 = G__6945;
count__6124 = G__6946;
i__6125 = G__6947;
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


var G__6948 = seq__6138;
var G__6949 = chunk__6139;
var G__6950 = count__6140;
var G__6951 = (i__6141 + (1));
seq__6138 = G__6948;
chunk__6139 = G__6949;
count__6140 = G__6950;
i__6141 = G__6951;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6138);
if(temp__5823__auto__){
var seq__6138__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6138__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6138__$1);
var G__6952 = cljs.core.chunk_rest(seq__6138__$1);
var G__6953 = c__5673__auto__;
var G__6954 = cljs.core.count(c__5673__auto__);
var G__6955 = (0);
seq__6138 = G__6952;
chunk__6139 = G__6953;
count__6140 = G__6954;
i__6141 = G__6955;
continue;
} else {
var arg = cljs.core.first(seq__6138__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__6956 = cljs.core.next(seq__6138__$1);
var G__6957 = null;
var G__6958 = (0);
var G__6959 = (0);
seq__6138 = G__6956;
chunk__6139 = G__6957;
count__6140 = G__6958;
i__6141 = G__6959;
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
 * Check if a type is an integral numeric type.
 */
nex.typechecker.integral_type_QMARK_ = (function nex$typechecker$integral_type_QMARK_(type){
var t = nex.typechecker.normalize_type(type);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Integer")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"Integer64")));
});
/**
 * Infer the result type of division.
 * Integral / integral stays integral; any non-integral operand yields Real.
 */
nex.typechecker.division_result_type = (function nex$typechecker$division_result_type(left_type,right_type){
if(((nex.typechecker.integral_type_QMARK_(left_type)) && (nex.typechecker.integral_type_QMARK_(right_type)))){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type(left_type),"Integer64")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type(right_type),"Integer64")))){
return "Integer64";
} else {
return "Integer";
}
} else {
return "Real";

}
});
/**
 * Infer the result type of exponentiation.
 * Integral ^ integral stays integral; any non-integral operand yields Real.
 */
nex.typechecker.power_result_type = (function nex$typechecker$power_result_type(left_type,right_type){
return nex.typechecker.division_result_type(left_type,right_type);
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
case "/":
if(((nex.typechecker.is_numeric_type_QMARK_(left_type)) && (nex.typechecker.is_numeric_type_QMARK_(right_type)))){
return nex.typechecker.division_result_type(left_type,right_type);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));
}

break;
case "-":
case "*":
case "%":
if(((nex.typechecker.is_numeric_type_QMARK_(left_type)) && (nex.typechecker.is_numeric_type_QMARK_(right_type)))){
return left_type;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Operator "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(operator)+" requires numeric operands, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(left_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(right_type))))], null));
}

break;
case "^":
if(((nex.typechecker.is_numeric_type_QMARK_(left_type)) && (nex.typechecker.is_numeric_type_QMARK_(right_type)))){
return nex.typechecker.power_result_type(left_type,right_type);
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

var seq__6174_6966 = cljs.core.seq(body);
var chunk__6175_6967 = null;
var count__6176_6968 = (0);
var i__6177_6969 = (0);
while(true){
if((i__6177_6969 < count__6176_6968)){
var stmt_6970 = chunk__6175_6967.cljs$core$IIndexed$_nth$arity$2(null,i__6177_6969);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_6970) : nex.typechecker.check_statement.call(null,spawn_env,stmt_6970));


var G__6971 = seq__6174_6966;
var G__6972 = chunk__6175_6967;
var G__6973 = count__6176_6968;
var G__6974 = (i__6177_6969 + (1));
seq__6174_6966 = G__6971;
chunk__6175_6967 = G__6972;
count__6176_6968 = G__6973;
i__6177_6969 = G__6974;
continue;
} else {
var temp__5823__auto___6975 = cljs.core.seq(seq__6174_6966);
if(temp__5823__auto___6975){
var seq__6174_6976__$1 = temp__5823__auto___6975;
if(cljs.core.chunked_seq_QMARK_(seq__6174_6976__$1)){
var c__5673__auto___6977 = cljs.core.chunk_first(seq__6174_6976__$1);
var G__6978 = cljs.core.chunk_rest(seq__6174_6976__$1);
var G__6979 = c__5673__auto___6977;
var G__6980 = cljs.core.count(c__5673__auto___6977);
var G__6981 = (0);
seq__6174_6966 = G__6978;
chunk__6175_6967 = G__6979;
count__6176_6968 = G__6980;
i__6177_6969 = G__6981;
continue;
} else {
var stmt_6982 = cljs.core.first(seq__6174_6976__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_6982) : nex.typechecker.check_statement.call(null,spawn_env,stmt_6982));


var G__6983 = cljs.core.next(seq__6174_6976__$1);
var G__6984 = null;
var G__6985 = (0);
var G__6986 = (0);
seq__6174_6966 = G__6983;
chunk__6175_6967 = G__6984;
count__6176_6968 = G__6985;
i__6177_6969 = G__6986;
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
case "Any":
var G__6179 = method;
switch (G__6179) {
case "to_string":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null);
} else {
return null;
}

break;
case "equals":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null);
} else {
return null;
}

break;
case "clone":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(argc,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null);
} else {
return null;
}

break;
default:
return null;

}

break;
case "Task":
var G__6180 = method;
switch (G__6180) {
case "await":
var G__6181 = argc;
switch (G__6181) {
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
var G__6182 = method;
switch (G__6182) {
case "send":
var G__6183 = argc;
switch (G__6183) {
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
var G__6184 = argc;
switch (G__6184) {
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
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6185){
var map__6186 = p__6185;
var map__6186__$1 = cljs.core.__destructure_map(map__6186);
var expr = map__6186__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6186__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6186__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6186__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6186__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6187 = env;
var G__6188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2(G__6187,G__6188) : nex.typechecker.check_create.call(null,G__6187,G__6188));
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
var or__5142__auto____$1 = nex.typechecker.builtin_method_signature("Any",method,cljs.core.count(args),type_map);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return nex.typechecker.lookup_class_method(env,base_type,method);
}
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var method_sig = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" expects "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)))+" arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6189_7000 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6190_7001 = null;
var count__6191_7002 = (0);
var i__6192_7003 = (0);
while(true){
if((i__6192_7003 < count__6191_7002)){
var vec__6199_7004 = chunk__6190_7001.cljs$core$IIndexed$_nth$arity$2(null,i__6192_7003);
var arg_7005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6199_7004,(0),null);
var param_7006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6199_7004,(1),null);
var arg_type_7007 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7005) : nex.typechecker.check_expression.call(null,env,arg_7005));
var param_type_7008 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7006),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7007,param_type_7008))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7008))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7007))))], null));
}


var G__7009 = seq__6189_7000;
var G__7010 = chunk__6190_7001;
var G__7011 = count__6191_7002;
var G__7012 = (i__6192_7003 + (1));
seq__6189_7000 = G__7009;
chunk__6190_7001 = G__7010;
count__6191_7002 = G__7011;
i__6192_7003 = G__7012;
continue;
} else {
var temp__5823__auto___7013 = cljs.core.seq(seq__6189_7000);
if(temp__5823__auto___7013){
var seq__6189_7014__$1 = temp__5823__auto___7013;
if(cljs.core.chunked_seq_QMARK_(seq__6189_7014__$1)){
var c__5673__auto___7015 = cljs.core.chunk_first(seq__6189_7014__$1);
var G__7016 = cljs.core.chunk_rest(seq__6189_7014__$1);
var G__7017 = c__5673__auto___7015;
var G__7018 = cljs.core.count(c__5673__auto___7015);
var G__7019 = (0);
seq__6189_7000 = G__7016;
chunk__6190_7001 = G__7017;
count__6191_7002 = G__7018;
i__6192_7003 = G__7019;
continue;
} else {
var vec__6202_7020 = cljs.core.first(seq__6189_7014__$1);
var arg_7021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6202_7020,(0),null);
var param_7022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6202_7020,(1),null);
var arg_type_7023 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7021) : nex.typechecker.check_expression.call(null,env,arg_7021));
var param_type_7024 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7022),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7023,param_type_7024))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7024))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7023))))], null));
}


var G__7025 = cljs.core.next(seq__6189_7014__$1);
var G__7026 = null;
var G__7027 = (0);
var G__7028 = (0);
seq__6189_7000 = G__7025;
chunk__6190_7001 = G__7026;
count__6191_7002 = G__7027;
i__6192_7003 = G__7028;
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

var G__6205_7029 = env;
var G__6206_7030 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6205_7029,G__6206_7030) : nex.typechecker.check_expression.call(null,G__6205_7029,G__6206_7030));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_7031 = (function (){var G__6207 = env;
var G__6208 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6207,G__6208) : nex.typechecker.check_expression.call(null,G__6207,G__6208));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_7031),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_7031))))], null));
}

var G__6209_7032 = env;
var G__6210_7033 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6209_7032,G__6210_7033) : nex.typechecker.check_expression.call(null,G__6209_7032,G__6210_7033));

return "Boolean";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await_all")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_all expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var tasks_type = nex.typechecker.normalize_type((function (){var G__6211 = env;
var G__6212 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6211,G__6212) : nex.typechecker.check_expression.call(null,G__6211,G__6212));
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

var tasks_type = nex.typechecker.normalize_type((function (){var G__6213 = env;
var G__6214 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6213,G__6214) : nex.typechecker.check_expression.call(null,G__6213,G__6214));
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

var seq__6215_7035 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6216_7036 = null;
var count__6217_7037 = (0);
var i__6218_7038 = (0);
while(true){
if((i__6218_7038 < count__6217_7037)){
var vec__6225_7039 = chunk__6216_7036.cljs$core$IIndexed$_nth$arity$2(null,i__6218_7038);
var arg_7040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6225_7039,(0),null);
var param_7041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6225_7039,(1),null);
var arg_type_7042 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7040) : nex.typechecker.check_expression.call(null,env,arg_7040));
var param_type_7043 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7041),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7042,param_type_7043))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7043))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7042))))], null));
}


var G__7044 = seq__6215_7035;
var G__7045 = chunk__6216_7036;
var G__7046 = count__6217_7037;
var G__7047 = (i__6218_7038 + (1));
seq__6215_7035 = G__7044;
chunk__6216_7036 = G__7045;
count__6217_7037 = G__7046;
i__6218_7038 = G__7047;
continue;
} else {
var temp__5823__auto___7048 = cljs.core.seq(seq__6215_7035);
if(temp__5823__auto___7048){
var seq__6215_7049__$1 = temp__5823__auto___7048;
if(cljs.core.chunked_seq_QMARK_(seq__6215_7049__$1)){
var c__5673__auto___7050 = cljs.core.chunk_first(seq__6215_7049__$1);
var G__7051 = cljs.core.chunk_rest(seq__6215_7049__$1);
var G__7052 = c__5673__auto___7050;
var G__7053 = cljs.core.count(c__5673__auto___7050);
var G__7054 = (0);
seq__6215_7035 = G__7051;
chunk__6216_7036 = G__7052;
count__6217_7037 = G__7053;
i__6218_7038 = G__7054;
continue;
} else {
var vec__6228_7055 = cljs.core.first(seq__6215_7049__$1);
var arg_7056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6228_7055,(0),null);
var param_7057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6228_7055,(1),null);
var arg_type_7058 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7056) : nex.typechecker.check_expression.call(null,env,arg_7056));
var param_type_7059 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7057),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7058,param_type_7059))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7059))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7058))))], null));
}


var G__7060 = cljs.core.next(seq__6215_7049__$1);
var G__7061 = null;
var G__7062 = (0);
var G__7063 = (0);
seq__6215_7035 = G__7060;
chunk__6216_7036 = G__7061;
count__6217_7037 = G__7062;
i__6218_7038 = G__7063;
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

var seq__6231_7066 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6232_7067 = null;
var count__6233_7068 = (0);
var i__6234_7069 = (0);
while(true){
if((i__6234_7069 < count__6233_7068)){
var vec__6241_7070 = chunk__6232_7067.cljs$core$IIndexed$_nth$arity$2(null,i__6234_7069);
var arg_7071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6241_7070,(0),null);
var param_7072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6241_7070,(1),null);
var arg_type_7073 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7071) : nex.typechecker.check_expression.call(null,env,arg_7071));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7073,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7072)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7072))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7073)))], null));
}


var G__7074 = seq__6231_7066;
var G__7075 = chunk__6232_7067;
var G__7076 = count__6233_7068;
var G__7077 = (i__6234_7069 + (1));
seq__6231_7066 = G__7074;
chunk__6232_7067 = G__7075;
count__6233_7068 = G__7076;
i__6234_7069 = G__7077;
continue;
} else {
var temp__5823__auto___7078 = cljs.core.seq(seq__6231_7066);
if(temp__5823__auto___7078){
var seq__6231_7079__$1 = temp__5823__auto___7078;
if(cljs.core.chunked_seq_QMARK_(seq__6231_7079__$1)){
var c__5673__auto___7080 = cljs.core.chunk_first(seq__6231_7079__$1);
var G__7081 = cljs.core.chunk_rest(seq__6231_7079__$1);
var G__7082 = c__5673__auto___7080;
var G__7083 = cljs.core.count(c__5673__auto___7080);
var G__7084 = (0);
seq__6231_7066 = G__7081;
chunk__6232_7067 = G__7082;
count__6233_7068 = G__7083;
i__6234_7069 = G__7084;
continue;
} else {
var vec__6244_7085 = cljs.core.first(seq__6231_7079__$1);
var arg_7086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6244_7085,(0),null);
var param_7087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6244_7085,(1),null);
var arg_type_7088 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7086) : nex.typechecker.check_expression.call(null,env,arg_7086));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7088,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7087)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7087))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7088)))], null));
}


var G__7089 = cljs.core.next(seq__6231_7079__$1);
var G__7090 = null;
var G__7091 = (0);
var G__7092 = (0);
seq__6231_7066 = G__7089;
chunk__6232_7067 = G__7090;
count__6233_7068 = G__7091;
i__6234_7069 = G__7092;
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
var seq__6247_7093 = cljs.core.seq(args);
var chunk__6248_7094 = null;
var count__6249_7095 = (0);
var i__6250_7096 = (0);
while(true){
if((i__6250_7096 < count__6249_7095)){
var arg_7097 = chunk__6248_7094.cljs$core$IIndexed$_nth$arity$2(null,i__6250_7096);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7097) : nex.typechecker.check_expression.call(null,env,arg_7097));


var G__7098 = seq__6247_7093;
var G__7099 = chunk__6248_7094;
var G__7100 = count__6249_7095;
var G__7101 = (i__6250_7096 + (1));
seq__6247_7093 = G__7098;
chunk__6248_7094 = G__7099;
count__6249_7095 = G__7100;
i__6250_7096 = G__7101;
continue;
} else {
var temp__5823__auto___7102 = cljs.core.seq(seq__6247_7093);
if(temp__5823__auto___7102){
var seq__6247_7103__$1 = temp__5823__auto___7102;
if(cljs.core.chunked_seq_QMARK_(seq__6247_7103__$1)){
var c__5673__auto___7104 = cljs.core.chunk_first(seq__6247_7103__$1);
var G__7105 = cljs.core.chunk_rest(seq__6247_7103__$1);
var G__7106 = c__5673__auto___7104;
var G__7107 = cljs.core.count(c__5673__auto___7104);
var G__7108 = (0);
seq__6247_7093 = G__7105;
chunk__6248_7094 = G__7106;
count__6249_7095 = G__7107;
i__6250_7096 = G__7108;
continue;
} else {
var arg_7109 = cljs.core.first(seq__6247_7103__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7109) : nex.typechecker.check_expression.call(null,env,arg_7109));


var G__7110 = cljs.core.next(seq__6247_7103__$1);
var G__7111 = null;
var G__7112 = (0);
var G__7113 = (0);
seq__6247_7093 = G__7110;
chunk__6248_7094 = G__7111;
count__6249_7095 = G__7112;
i__6250_7096 = G__7113;
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
var seq__6251_7114 = cljs.core.seq(args);
var chunk__6252_7115 = null;
var count__6253_7116 = (0);
var i__6254_7117 = (0);
while(true){
if((i__6254_7117 < count__6253_7116)){
var arg_7118 = chunk__6252_7115.cljs$core$IIndexed$_nth$arity$2(null,i__6254_7117);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7118) : nex.typechecker.check_expression.call(null,env,arg_7118));


var G__7119 = seq__6251_7114;
var G__7120 = chunk__6252_7115;
var G__7121 = count__6253_7116;
var G__7122 = (i__6254_7117 + (1));
seq__6251_7114 = G__7119;
chunk__6252_7115 = G__7120;
count__6253_7116 = G__7121;
i__6254_7117 = G__7122;
continue;
} else {
var temp__5823__auto___7123 = cljs.core.seq(seq__6251_7114);
if(temp__5823__auto___7123){
var seq__6251_7124__$1 = temp__5823__auto___7123;
if(cljs.core.chunked_seq_QMARK_(seq__6251_7124__$1)){
var c__5673__auto___7125 = cljs.core.chunk_first(seq__6251_7124__$1);
var G__7126 = cljs.core.chunk_rest(seq__6251_7124__$1);
var G__7127 = c__5673__auto___7125;
var G__7128 = cljs.core.count(c__5673__auto___7125);
var G__7129 = (0);
seq__6251_7114 = G__7126;
chunk__6252_7115 = G__7127;
count__6253_7116 = G__7128;
i__6254_7117 = G__7129;
continue;
} else {
var arg_7130 = cljs.core.first(seq__6251_7124__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7130) : nex.typechecker.check_expression.call(null,env,arg_7130));


var G__7131 = cljs.core.next(seq__6251_7124__$1);
var G__7132 = null;
var G__7133 = (0);
var G__7134 = (0);
seq__6251_7114 = G__7131;
chunk__6252_7115 = G__7132;
count__6253_7116 = G__7133;
i__6254_7117 = G__7134;
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
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6255){
var map__6256 = p__6255;
var map__6256__$1 = cljs.core.__destructure_map(map__6256);
var expr = map__6256__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6256__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6256__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6256__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6256__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var arg_type_7139 = (function (){var G__6257 = env;
var G__6258 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6257,G__6258) : nex.typechecker.check_expression.call(null,G__6257,G__6258));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7139,"Integer"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity requires Integer capacity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.with_capacity expects Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7139))))], null));
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
var seq__6259_7140 = cljs.core.seq(args);
var chunk__6260_7141 = null;
var count__6261_7142 = (0);
var i__6262_7143 = (0);
while(true){
if((i__6262_7143 < count__6261_7142)){
var arg_7144 = chunk__6260_7141.cljs$core$IIndexed$_nth$arity$2(null,i__6262_7143);
var arg_type_7145 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7144) : nex.typechecker.check_expression.call(null,env,arg_7144));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7145,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7146 = seq__6259_7140;
var G__7147 = chunk__6260_7141;
var G__7148 = count__6261_7142;
var G__7149 = (i__6262_7143 + (1));
seq__6259_7140 = G__7146;
chunk__6260_7141 = G__7147;
count__6261_7142 = G__7148;
i__6262_7143 = G__7149;
continue;
} else {
var temp__5823__auto___7150 = cljs.core.seq(seq__6259_7140);
if(temp__5823__auto___7150){
var seq__6259_7151__$1 = temp__5823__auto___7150;
if(cljs.core.chunked_seq_QMARK_(seq__6259_7151__$1)){
var c__5673__auto___7152 = cljs.core.chunk_first(seq__6259_7151__$1);
var G__7153 = cljs.core.chunk_rest(seq__6259_7151__$1);
var G__7154 = c__5673__auto___7152;
var G__7155 = cljs.core.count(c__5673__auto___7152);
var G__7156 = (0);
seq__6259_7140 = G__7153;
chunk__6260_7141 = G__7154;
count__6261_7142 = G__7155;
i__6262_7143 = G__7156;
continue;
} else {
var arg_7157 = cljs.core.first(seq__6259_7151__$1);
var arg_type_7158 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7157) : nex.typechecker.check_expression.call(null,env,arg_7157));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7158,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7159 = cljs.core.next(seq__6259_7151__$1);
var G__7160 = null;
var G__7161 = (0);
var G__7162 = (0);
seq__6259_7140 = G__7159;
chunk__6260_7141 = G__7160;
count__6261_7142 = G__7161;
i__6262_7143 = G__7162;
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
var constructors_7164 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__7165 = cljs.core.seq(constructors_7164);
var type_map_7166 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_7167 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_7168 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_7167);
if(((has_constructors_QMARK__7165) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_7168)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7167)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7167)))], null));
}

var params_7169 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_7168);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_7169),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7167)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_7169))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6263_7170 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_7169));
var chunk__6264_7171 = null;
var count__6265_7172 = (0);
var i__6266_7173 = (0);
while(true){
if((i__6266_7173 < count__6265_7172)){
var vec__6273_7174 = chunk__6264_7171.cljs$core$IIndexed$_nth$arity$2(null,i__6266_7173);
var arg_7175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6273_7174,(0),null);
var param_7176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6273_7174,(1),null);
var arg_type_7177 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7175) : nex.typechecker.check_expression.call(null,env,arg_7175));
var param_type_7178 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7176),type_map_7166);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7177,param_type_7178))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7167)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7178))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7177))))], null));
}


var G__7183 = seq__6263_7170;
var G__7184 = chunk__6264_7171;
var G__7185 = count__6265_7172;
var G__7186 = (i__6266_7173 + (1));
seq__6263_7170 = G__7183;
chunk__6264_7171 = G__7184;
count__6265_7172 = G__7185;
i__6266_7173 = G__7186;
continue;
} else {
var temp__5823__auto___7187 = cljs.core.seq(seq__6263_7170);
if(temp__5823__auto___7187){
var seq__6263_7188__$1 = temp__5823__auto___7187;
if(cljs.core.chunked_seq_QMARK_(seq__6263_7188__$1)){
var c__5673__auto___7189 = cljs.core.chunk_first(seq__6263_7188__$1);
var G__7190 = cljs.core.chunk_rest(seq__6263_7188__$1);
var G__7191 = c__5673__auto___7189;
var G__7192 = cljs.core.count(c__5673__auto___7189);
var G__7193 = (0);
seq__6263_7170 = G__7190;
chunk__6264_7171 = G__7191;
count__6265_7172 = G__7192;
i__6266_7173 = G__7193;
continue;
} else {
var vec__6276_7194 = cljs.core.first(seq__6263_7188__$1);
var arg_7195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6276_7194,(0),null);
var param_7196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6276_7194,(1),null);
var arg_type_7197 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7195) : nex.typechecker.check_expression.call(null,env,arg_7195));
var param_type_7198 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7196),type_map_7166);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7197,param_type_7198))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_7167)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7198))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7197))))], null));
}


var G__7199 = cljs.core.next(seq__6263_7188__$1);
var G__7200 = null;
var G__7201 = (0);
var G__7202 = (0);
seq__6263_7170 = G__7199;
chunk__6264_7171 = G__7200;
count__6265_7172 = G__7201;
i__6266_7173 = G__7202;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6279){
var map__6280 = p__6279;
var map__6280__$1 = cljs.core.__destructure_map(map__6280);
var expr = map__6280__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6280__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6281 = env;
var G__6282 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6281,G__6282) : nex.typechecker.check_expression.call(null,G__6281,G__6282));
})();
var seq__6283_7204 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6284_7205 = null;
var count__6285_7206 = (0);
var i__6286_7207 = (0);
while(true){
if((i__6286_7207 < count__6285_7206)){
var elem_7209 = chunk__6284_7205.cljs$core$IIndexed$_nth$arity$2(null,i__6286_7207);
var elem_type_7211 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7209) : nex.typechecker.check_expression.call(null,env,elem_7209));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7211))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7211))))], null));
}


var G__7217 = seq__6283_7204;
var G__7218 = chunk__6284_7205;
var G__7219 = count__6285_7206;
var G__7220 = (i__6286_7207 + (1));
seq__6283_7204 = G__7217;
chunk__6284_7205 = G__7218;
count__6285_7206 = G__7219;
i__6286_7207 = G__7220;
continue;
} else {
var temp__5823__auto___7221 = cljs.core.seq(seq__6283_7204);
if(temp__5823__auto___7221){
var seq__6283_7222__$1 = temp__5823__auto___7221;
if(cljs.core.chunked_seq_QMARK_(seq__6283_7222__$1)){
var c__5673__auto___7223 = cljs.core.chunk_first(seq__6283_7222__$1);
var G__7224 = cljs.core.chunk_rest(seq__6283_7222__$1);
var G__7225 = c__5673__auto___7223;
var G__7226 = cljs.core.count(c__5673__auto___7223);
var G__7227 = (0);
seq__6283_7204 = G__7224;
chunk__6284_7205 = G__7225;
count__6285_7206 = G__7226;
i__6286_7207 = G__7227;
continue;
} else {
var elem_7228 = cljs.core.first(seq__6283_7222__$1);
var elem_type_7229 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7228) : nex.typechecker.check_expression.call(null,env,elem_7228));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7229))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7229))))], null));
}


var G__7230 = cljs.core.next(seq__6283_7222__$1);
var G__7231 = null;
var G__7232 = (0);
var G__7233 = (0);
seq__6283_7204 = G__7230;
chunk__6284_7205 = G__7231;
count__6285_7206 = G__7232;
i__6286_7207 = G__7233;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6287){
var map__6288 = p__6287;
var map__6288__$1 = cljs.core.__destructure_map(map__6288);
var expr = map__6288__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6288__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6289 = env;
var G__6290 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6289,G__6290) : nex.typechecker.check_expression.call(null,G__6289,G__6290));
})();
var val_type = (function (){var G__6291 = env;
var G__6292 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6291,G__6292) : nex.typechecker.check_expression.call(null,G__6291,G__6292));
})();
var seq__6293_7234 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6294_7235 = null;
var count__6295_7236 = (0);
var i__6296_7237 = (0);
while(true){
if((i__6296_7237 < count__6295_7236)){
var entry_7238 = chunk__6294_7235.cljs$core$IIndexed$_nth$arity$2(null,i__6296_7237);
var k_type_7239 = (function (){var G__6305 = env;
var G__6306 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7238);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6305,G__6306) : nex.typechecker.check_expression.call(null,G__6305,G__6306));
})();
var v_type_7240 = (function (){var G__6307 = env;
var G__6308 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7238);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6307,G__6308) : nex.typechecker.check_expression.call(null,G__6307,G__6308));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7239);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7240);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7241 = seq__6293_7234;
var G__7242 = chunk__6294_7235;
var G__7243 = count__6295_7236;
var G__7244 = (i__6296_7237 + (1));
seq__6293_7234 = G__7241;
chunk__6294_7235 = G__7242;
count__6295_7236 = G__7243;
i__6296_7237 = G__7244;
continue;
} else {
var temp__5823__auto___7245 = cljs.core.seq(seq__6293_7234);
if(temp__5823__auto___7245){
var seq__6293_7247__$1 = temp__5823__auto___7245;
if(cljs.core.chunked_seq_QMARK_(seq__6293_7247__$1)){
var c__5673__auto___7248 = cljs.core.chunk_first(seq__6293_7247__$1);
var G__7249 = cljs.core.chunk_rest(seq__6293_7247__$1);
var G__7250 = c__5673__auto___7248;
var G__7251 = cljs.core.count(c__5673__auto___7248);
var G__7252 = (0);
seq__6293_7234 = G__7249;
chunk__6294_7235 = G__7250;
count__6295_7236 = G__7251;
i__6296_7237 = G__7252;
continue;
} else {
var entry_7253 = cljs.core.first(seq__6293_7247__$1);
var k_type_7254 = (function (){var G__6309 = env;
var G__6310 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_7253);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6309,G__6310) : nex.typechecker.check_expression.call(null,G__6309,G__6310));
})();
var v_type_7255 = (function (){var G__6311 = env;
var G__6312 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_7253);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6311,G__6312) : nex.typechecker.check_expression.call(null,G__6311,G__6312));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_7254);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_7255);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__7256 = cljs.core.next(seq__6293_7247__$1);
var G__7257 = null;
var G__7258 = (0);
var G__7259 = (0);
seq__6293_7234 = G__7256;
chunk__6294_7235 = G__7257;
count__6295_7236 = G__7258;
i__6296_7237 = G__7259;
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
nex.typechecker.check_set_literal = (function nex$typechecker$check_set_literal(env,p__6313){
var map__6314 = p__6313;
var map__6314__$1 = cljs.core.__destructure_map(map__6314);
var expr = map__6314__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6314__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null)], null);
} else {
var first_type = (function (){var G__6315 = env;
var G__6316 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6315,G__6316) : nex.typechecker.check_expression.call(null,G__6315,G__6316));
})();
var seq__6317_7262 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6318_7263 = null;
var count__6319_7264 = (0);
var i__6320_7265 = (0);
while(true){
if((i__6320_7265 < count__6319_7264)){
var elem_7266 = chunk__6318_7263.cljs$core$IIndexed$_nth$arity$2(null,i__6320_7265);
var elem_type_7267 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7266) : nex.typechecker.check_expression.call(null,env,elem_7266));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7267))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7267))))], null));
}


var G__7268 = seq__6317_7262;
var G__7269 = chunk__6318_7263;
var G__7270 = count__6319_7264;
var G__7271 = (i__6320_7265 + (1));
seq__6317_7262 = G__7268;
chunk__6318_7263 = G__7269;
count__6319_7264 = G__7270;
i__6320_7265 = G__7271;
continue;
} else {
var temp__5823__auto___7272 = cljs.core.seq(seq__6317_7262);
if(temp__5823__auto___7272){
var seq__6317_7273__$1 = temp__5823__auto___7272;
if(cljs.core.chunked_seq_QMARK_(seq__6317_7273__$1)){
var c__5673__auto___7274 = cljs.core.chunk_first(seq__6317_7273__$1);
var G__7275 = cljs.core.chunk_rest(seq__6317_7273__$1);
var G__7276 = c__5673__auto___7274;
var G__7277 = cljs.core.count(c__5673__auto___7274);
var G__7278 = (0);
seq__6317_7262 = G__7275;
chunk__6318_7263 = G__7276;
count__6319_7264 = G__7277;
i__6320_7265 = G__7278;
continue;
} else {
var elem_7279 = cljs.core.first(seq__6317_7273__$1);
var elem_type_7281 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_7279) : nex.typechecker.check_expression.call(null,env,elem_7279));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_7281))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_7281))))], null));
}


var G__7282 = cljs.core.next(seq__6317_7273__$1);
var G__7283 = null;
var G__7284 = (0);
var G__7285 = (0);
seq__6317_7262 = G__7282;
chunk__6318_7263 = G__7283;
count__6319_7264 = G__7284;
i__6320_7265 = G__7285;
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
var G__6321 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6321__$1 = (((G__6321 instanceof cljs.core.Keyword))?G__6321.fqn:null);
switch (G__6321__$1) {
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
case "nil":
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
var target_type = (function (){var G__6322 = env;
var G__6323 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6322,G__6323) : nex.typechecker.check_expression.call(null,G__6322,G__6323));
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
var cond_type = (function (){var G__6324 = env;
var G__6325 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6324,G__6325) : nex.typechecker.check_expression.call(null,G__6324,G__6325));
})();
var cons_type = (function (){var G__6326 = env;
var G__6327 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6326,G__6327) : nex.typechecker.check_expression.call(null,G__6326,G__6327));
})();
var alt_type = (function (){var G__6328 = env;
var G__6329 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6328,G__6329) : nex.typechecker.check_expression.call(null,G__6328,G__6329));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6330 = env;
var G__6331 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6330,G__6331) : nex.typechecker.check_expression.call(null,G__6330,G__6331));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6332){
var map__6333 = p__6332;
var map__6333__$1 = cljs.core.__destructure_map(map__6333);
var stmt = map__6333__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6333__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6333__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5823__auto___7287 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto___7287)){
var current_class_7288 = temp__5823__auto___7287;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class_7288,target))){
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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6334){
var map__6335 = p__6334;
var map__6335__$1 = cljs.core.__destructure_map(map__6335);
var stmt = map__6335__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"value","value",305978217));
var synthetic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6335__$1,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862));
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
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6336){
var map__6337 = p__6336;
var map__6337__$1 = cljs.core.__destructure_map(map__6337);
var stmt = map__6337__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6337__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_7293 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7293,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7293)))], null));
}

var then_env_7294 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7295 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___7295)){
var non_nil_var_7296 = temp__5823__auto___7295;
nex.typechecker.env_mark_non_nil(then_env_7294,non_nil_var_7296);
} else {
}

var temp__5823__auto___7297 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___7297)){
var map__6338_7298 = temp__5823__auto___7297;
var map__6338_7299__$1 = cljs.core.__destructure_map(map__6338_7298);
var name_7300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338_7299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6338_7299__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_7294,name_7300,type_7301);

nex.typechecker.env_mark_non_nil(then_env_7294,name_7300);
} else {
}

var seq__6339_7302 = cljs.core.seq(then);
var chunk__6340_7303 = null;
var count__6341_7304 = (0);
var i__6342_7305 = (0);
while(true){
if((i__6342_7305 < count__6341_7304)){
var stmt_7306__$1 = chunk__6340_7303.cljs$core$IIndexed$_nth$arity$2(null,i__6342_7305);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7294,stmt_7306__$1) : nex.typechecker.check_statement.call(null,then_env_7294,stmt_7306__$1));


var G__7307 = seq__6339_7302;
var G__7308 = chunk__6340_7303;
var G__7309 = count__6341_7304;
var G__7310 = (i__6342_7305 + (1));
seq__6339_7302 = G__7307;
chunk__6340_7303 = G__7308;
count__6341_7304 = G__7309;
i__6342_7305 = G__7310;
continue;
} else {
var temp__5823__auto___7311 = cljs.core.seq(seq__6339_7302);
if(temp__5823__auto___7311){
var seq__6339_7312__$1 = temp__5823__auto___7311;
if(cljs.core.chunked_seq_QMARK_(seq__6339_7312__$1)){
var c__5673__auto___7313 = cljs.core.chunk_first(seq__6339_7312__$1);
var G__7314 = cljs.core.chunk_rest(seq__6339_7312__$1);
var G__7315 = c__5673__auto___7313;
var G__7316 = cljs.core.count(c__5673__auto___7313);
var G__7317 = (0);
seq__6339_7302 = G__7314;
chunk__6340_7303 = G__7315;
count__6341_7304 = G__7316;
i__6342_7305 = G__7317;
continue;
} else {
var stmt_7318__$1 = cljs.core.first(seq__6339_7312__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_7294,stmt_7318__$1) : nex.typechecker.check_statement.call(null,then_env_7294,stmt_7318__$1));


var G__7319 = cljs.core.next(seq__6339_7312__$1);
var G__7320 = null;
var G__7321 = (0);
var G__7322 = (0);
seq__6339_7302 = G__7319;
chunk__6340_7303 = G__7320;
count__6341_7304 = G__7321;
i__6342_7305 = G__7322;
continue;
}
} else {
}
}
break;
}

var seq__6343_7323 = cljs.core.seq(elseif);
var chunk__6344_7324 = null;
var count__6345_7325 = (0);
var i__6346_7326 = (0);
while(true){
if((i__6346_7326 < count__6345_7325)){
var clause_7327 = chunk__6344_7324.cljs$core$IIndexed$_nth$arity$2(null,i__6346_7326);
var ei_cond_type_7328 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7327));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7328,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7328)))], null));
}

var elseif_env_7329 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7330 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7327));
if(cljs.core.truth_(temp__5823__auto___7330)){
var non_nil_var_7331 = temp__5823__auto___7330;
nex.typechecker.env_mark_non_nil(elseif_env_7329,non_nil_var_7331);
} else {
}

var temp__5823__auto___7332 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7327));
if(cljs.core.truth_(temp__5823__auto___7332)){
var map__6357_7333 = temp__5823__auto___7332;
var map__6357_7334__$1 = cljs.core.__destructure_map(map__6357_7333);
var name_7335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6357_7334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6357_7334__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7329,name_7335,type_7336);

nex.typechecker.env_mark_non_nil(elseif_env_7329,name_7335);
} else {
}

var seq__6358_7337 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7327));
var chunk__6359_7338 = null;
var count__6360_7339 = (0);
var i__6361_7340 = (0);
while(true){
if((i__6361_7340 < count__6360_7339)){
var stmt_7342__$1 = chunk__6359_7338.cljs$core$IIndexed$_nth$arity$2(null,i__6361_7340);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7329,stmt_7342__$1) : nex.typechecker.check_statement.call(null,elseif_env_7329,stmt_7342__$1));


var G__7344 = seq__6358_7337;
var G__7345 = chunk__6359_7338;
var G__7346 = count__6360_7339;
var G__7347 = (i__6361_7340 + (1));
seq__6358_7337 = G__7344;
chunk__6359_7338 = G__7345;
count__6360_7339 = G__7346;
i__6361_7340 = G__7347;
continue;
} else {
var temp__5823__auto___7348 = cljs.core.seq(seq__6358_7337);
if(temp__5823__auto___7348){
var seq__6358_7349__$1 = temp__5823__auto___7348;
if(cljs.core.chunked_seq_QMARK_(seq__6358_7349__$1)){
var c__5673__auto___7350 = cljs.core.chunk_first(seq__6358_7349__$1);
var G__7351 = cljs.core.chunk_rest(seq__6358_7349__$1);
var G__7352 = c__5673__auto___7350;
var G__7353 = cljs.core.count(c__5673__auto___7350);
var G__7354 = (0);
seq__6358_7337 = G__7351;
chunk__6359_7338 = G__7352;
count__6360_7339 = G__7353;
i__6361_7340 = G__7354;
continue;
} else {
var stmt_7355__$1 = cljs.core.first(seq__6358_7349__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7329,stmt_7355__$1) : nex.typechecker.check_statement.call(null,elseif_env_7329,stmt_7355__$1));


var G__7356 = cljs.core.next(seq__6358_7349__$1);
var G__7357 = null;
var G__7358 = (0);
var G__7359 = (0);
seq__6358_7337 = G__7356;
chunk__6359_7338 = G__7357;
count__6360_7339 = G__7358;
i__6361_7340 = G__7359;
continue;
}
} else {
}
}
break;
}


var G__7360 = seq__6343_7323;
var G__7361 = chunk__6344_7324;
var G__7362 = count__6345_7325;
var G__7363 = (i__6346_7326 + (1));
seq__6343_7323 = G__7360;
chunk__6344_7324 = G__7361;
count__6345_7325 = G__7362;
i__6346_7326 = G__7363;
continue;
} else {
var temp__5823__auto___7364 = cljs.core.seq(seq__6343_7323);
if(temp__5823__auto___7364){
var seq__6343_7365__$1 = temp__5823__auto___7364;
if(cljs.core.chunked_seq_QMARK_(seq__6343_7365__$1)){
var c__5673__auto___7366 = cljs.core.chunk_first(seq__6343_7365__$1);
var G__7367 = cljs.core.chunk_rest(seq__6343_7365__$1);
var G__7368 = c__5673__auto___7366;
var G__7369 = cljs.core.count(c__5673__auto___7366);
var G__7370 = (0);
seq__6343_7323 = G__7367;
chunk__6344_7324 = G__7368;
count__6345_7325 = G__7369;
i__6346_7326 = G__7370;
continue;
} else {
var clause_7371 = cljs.core.first(seq__6343_7365__$1);
var ei_cond_type_7372 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7371));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_7372,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_7372)))], null));
}

var elseif_env_7373 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___7374__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7371));
if(cljs.core.truth_(temp__5823__auto___7374__$1)){
var non_nil_var_7375 = temp__5823__auto___7374__$1;
nex.typechecker.env_mark_non_nil(elseif_env_7373,non_nil_var_7375);
} else {
}

var temp__5823__auto___7376__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_7371));
if(cljs.core.truth_(temp__5823__auto___7376__$1)){
var map__6362_7377 = temp__5823__auto___7376__$1;
var map__6362_7378__$1 = cljs.core.__destructure_map(map__6362_7377);
var name_7379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6362_7378__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_7380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6362_7378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_7373,name_7379,type_7380);

nex.typechecker.env_mark_non_nil(elseif_env_7373,name_7379);
} else {
}

var seq__6363_7381 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_7371));
var chunk__6364_7382 = null;
var count__6365_7383 = (0);
var i__6366_7384 = (0);
while(true){
if((i__6366_7384 < count__6365_7383)){
var stmt_7385__$1 = chunk__6364_7382.cljs$core$IIndexed$_nth$arity$2(null,i__6366_7384);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7373,stmt_7385__$1) : nex.typechecker.check_statement.call(null,elseif_env_7373,stmt_7385__$1));


var G__7386 = seq__6363_7381;
var G__7387 = chunk__6364_7382;
var G__7388 = count__6365_7383;
var G__7389 = (i__6366_7384 + (1));
seq__6363_7381 = G__7386;
chunk__6364_7382 = G__7387;
count__6365_7383 = G__7388;
i__6366_7384 = G__7389;
continue;
} else {
var temp__5823__auto___7390__$1 = cljs.core.seq(seq__6363_7381);
if(temp__5823__auto___7390__$1){
var seq__6363_7391__$1 = temp__5823__auto___7390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6363_7391__$1)){
var c__5673__auto___7392 = cljs.core.chunk_first(seq__6363_7391__$1);
var G__7393 = cljs.core.chunk_rest(seq__6363_7391__$1);
var G__7394 = c__5673__auto___7392;
var G__7395 = cljs.core.count(c__5673__auto___7392);
var G__7396 = (0);
seq__6363_7381 = G__7393;
chunk__6364_7382 = G__7394;
count__6365_7383 = G__7395;
i__6366_7384 = G__7396;
continue;
} else {
var stmt_7397__$1 = cljs.core.first(seq__6363_7391__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_7373,stmt_7397__$1) : nex.typechecker.check_statement.call(null,elseif_env_7373,stmt_7397__$1));


var G__7398 = cljs.core.next(seq__6363_7391__$1);
var G__7399 = null;
var G__7400 = (0);
var G__7401 = (0);
seq__6363_7381 = G__7398;
chunk__6364_7382 = G__7399;
count__6365_7383 = G__7400;
i__6366_7384 = G__7401;
continue;
}
} else {
}
}
break;
}


var G__7402 = cljs.core.next(seq__6343_7365__$1);
var G__7403 = null;
var G__7404 = (0);
var G__7405 = (0);
seq__6343_7323 = G__7402;
chunk__6344_7324 = G__7403;
count__6345_7325 = G__7404;
i__6346_7326 = G__7405;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6367 = cljs.core.seq(else$);
var chunk__6368 = null;
var count__6369 = (0);
var i__6370 = (0);
while(true){
if((i__6370 < count__6369)){
var stmt__$1 = chunk__6368.cljs$core$IIndexed$_nth$arity$2(null,i__6370);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7406 = seq__6367;
var G__7407 = chunk__6368;
var G__7408 = count__6369;
var G__7409 = (i__6370 + (1));
seq__6367 = G__7406;
chunk__6368 = G__7407;
count__6369 = G__7408;
i__6370 = G__7409;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6367);
if(temp__5823__auto__){
var seq__6367__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6367__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6367__$1);
var G__7410 = cljs.core.chunk_rest(seq__6367__$1);
var G__7411 = c__5673__auto__;
var G__7412 = cljs.core.count(c__5673__auto__);
var G__7413 = (0);
seq__6367 = G__7410;
chunk__6368 = G__7411;
count__6369 = G__7412;
i__6370 = G__7413;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6367__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__7414 = cljs.core.next(seq__6367__$1);
var G__7415 = null;
var G__7416 = (0);
var G__7417 = (0);
seq__6367 = G__7414;
chunk__6368 = G__7415;
count__6369 = G__7416;
i__6370 = G__7417;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6371){
var map__6372 = p__6371;
var map__6372__$1 = cljs.core.__destructure_map(map__6372);
var stmt = map__6372__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6373_7418 = cljs.core.seq(init);
var chunk__6374_7419 = null;
var count__6375_7420 = (0);
var i__6376_7421 = (0);
while(true){
if((i__6376_7421 < count__6375_7420)){
var s_7422 = chunk__6374_7419.cljs$core$IIndexed$_nth$arity$2(null,i__6376_7421);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7422) : nex.typechecker.check_statement.call(null,loop_env,s_7422));


var G__7424 = seq__6373_7418;
var G__7425 = chunk__6374_7419;
var G__7426 = count__6375_7420;
var G__7427 = (i__6376_7421 + (1));
seq__6373_7418 = G__7424;
chunk__6374_7419 = G__7425;
count__6375_7420 = G__7426;
i__6376_7421 = G__7427;
continue;
} else {
var temp__5823__auto___7428 = cljs.core.seq(seq__6373_7418);
if(temp__5823__auto___7428){
var seq__6373_7429__$1 = temp__5823__auto___7428;
if(cljs.core.chunked_seq_QMARK_(seq__6373_7429__$1)){
var c__5673__auto___7430 = cljs.core.chunk_first(seq__6373_7429__$1);
var G__7431 = cljs.core.chunk_rest(seq__6373_7429__$1);
var G__7432 = c__5673__auto___7430;
var G__7433 = cljs.core.count(c__5673__auto___7430);
var G__7434 = (0);
seq__6373_7418 = G__7431;
chunk__6374_7419 = G__7432;
count__6375_7420 = G__7433;
i__6376_7421 = G__7434;
continue;
} else {
var s_7435 = cljs.core.first(seq__6373_7429__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_7435) : nex.typechecker.check_statement.call(null,loop_env,s_7435));


var G__7436 = cljs.core.next(seq__6373_7429__$1);
var G__7437 = null;
var G__7438 = (0);
var G__7439 = (0);
seq__6373_7418 = G__7436;
chunk__6374_7419 = G__7437;
count__6375_7420 = G__7438;
i__6376_7421 = G__7439;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_7440 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7440,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7440,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7440)))], null));
}
} else {
}

var seq__6377 = cljs.core.seq(body);
var chunk__6378 = null;
var count__6379 = (0);
var i__6380 = (0);
while(true){
if((i__6380 < count__6379)){
var stmt__$1 = chunk__6378.cljs$core$IIndexed$_nth$arity$2(null,i__6380);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7441 = seq__6377;
var G__7442 = chunk__6378;
var G__7443 = count__6379;
var G__7444 = (i__6380 + (1));
seq__6377 = G__7441;
chunk__6378 = G__7442;
count__6379 = G__7443;
i__6380 = G__7444;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6377);
if(temp__5823__auto__){
var seq__6377__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6377__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6377__$1);
var G__7445 = cljs.core.chunk_rest(seq__6377__$1);
var G__7446 = c__5673__auto__;
var G__7447 = cljs.core.count(c__5673__auto__);
var G__7448 = (0);
seq__6377 = G__7445;
chunk__6378 = G__7446;
count__6379 = G__7447;
i__6380 = G__7448;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6377__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__7449 = cljs.core.next(seq__6377__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__6377 = G__7449;
chunk__6378 = G__7450;
count__6379 = G__7451;
i__6380 = G__7452;
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
nex.typechecker.check_select_clause = (function nex$typechecker$check_select_clause(env,p__6381){
var map__6382 = p__6381;
var map__6382__$1 = cljs.core.__destructure_map(map__6382);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6382__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6383 = (function (){var or__5142__auto__ = nex.typechecker.select_clause_op(expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clause must be a channel or task operation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select clause must be a channel send/receive call or task await call")], null));
}
})();
var map__6383__$1 = cljs.core.__destructure_map(map__6383);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6383__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6383__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6383__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__6384 = base_type;
switch (G__6384) {
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

var seq__6385 = cljs.core.seq(body);
var chunk__6386 = null;
var count__6387 = (0);
var i__6388 = (0);
while(true){
if((i__6388 < count__6387)){
var stmt = chunk__6386.cljs$core$IIndexed$_nth$arity$2(null,i__6388);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7455 = seq__6385;
var G__7456 = chunk__6386;
var G__7457 = count__6387;
var G__7458 = (i__6388 + (1));
seq__6385 = G__7455;
chunk__6386 = G__7456;
count__6387 = G__7457;
i__6388 = G__7458;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6385);
if(temp__5823__auto__){
var seq__6385__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6385__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6385__$1);
var G__7459 = cljs.core.chunk_rest(seq__6385__$1);
var G__7460 = c__5673__auto__;
var G__7461 = cljs.core.count(c__5673__auto__);
var G__7462 = (0);
seq__6385 = G__7459;
chunk__6386 = G__7460;
count__6387 = G__7461;
i__6388 = G__7462;
continue;
} else {
var stmt = cljs.core.first(seq__6385__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7463 = cljs.core.next(seq__6385__$1);
var G__7464 = null;
var G__7465 = (0);
var G__7466 = (0);
seq__6385 = G__7463;
chunk__6386 = G__7464;
count__6387 = G__7465;
i__6388 = G__7466;
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
var G__6389 = method;
switch (G__6389) {
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
var timeout_type_7468 = nex.typechecker.check_expression(env,cljs.core.first(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_7468),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.receive timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.receive timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_7468))))], null));
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

var seq__6390 = cljs.core.seq(body);
var chunk__6391 = null;
var count__6392 = (0);
var i__6393 = (0);
while(true){
if((i__6393 < count__6392)){
var stmt = chunk__6391.cljs$core$IIndexed$_nth$arity$2(null,i__6393);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7469 = seq__6390;
var G__7470 = chunk__6391;
var G__7471 = count__6392;
var G__7472 = (i__6393 + (1));
seq__6390 = G__7469;
chunk__6391 = G__7470;
count__6392 = G__7471;
i__6393 = G__7472;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6390);
if(temp__5823__auto__){
var seq__6390__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6390__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6390__$1);
var G__7473 = cljs.core.chunk_rest(seq__6390__$1);
var G__7474 = c__5673__auto__;
var G__7475 = cljs.core.count(c__5673__auto__);
var G__7476 = (0);
seq__6390 = G__7473;
chunk__6391 = G__7474;
count__6392 = G__7475;
i__6393 = G__7476;
continue;
} else {
var stmt = cljs.core.first(seq__6390__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7477 = cljs.core.next(seq__6390__$1);
var G__7478 = null;
var G__7479 = (0);
var G__7480 = (0);
seq__6390 = G__7477;
chunk__6391 = G__7478;
count__6392 = G__7479;
i__6393 = G__7480;
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
var timeout_type_7481 = nex.typechecker.check_expression(env,cljs.core.second(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_7481),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.send timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.send timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_7481))))], null));
}
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6394 = cljs.core.seq(body);
var chunk__6395 = null;
var count__6396 = (0);
var i__6397 = (0);
while(true){
if((i__6397 < count__6396)){
var stmt = chunk__6395.cljs$core$IIndexed$_nth$arity$2(null,i__6397);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7482 = seq__6394;
var G__7483 = chunk__6395;
var G__7484 = count__6396;
var G__7485 = (i__6397 + (1));
seq__6394 = G__7482;
chunk__6395 = G__7483;
count__6396 = G__7484;
i__6397 = G__7485;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6394);
if(temp__5823__auto__){
var seq__6394__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6394__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6394__$1);
var G__7486 = cljs.core.chunk_rest(seq__6394__$1);
var G__7487 = c__5673__auto__;
var G__7488 = cljs.core.count(c__5673__auto__);
var G__7489 = (0);
seq__6394 = G__7486;
chunk__6395 = G__7487;
count__6396 = G__7488;
i__6397 = G__7489;
continue;
} else {
var stmt = cljs.core.first(seq__6394__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__7490 = cljs.core.next(seq__6394__$1);
var G__7491 = null;
var G__7492 = (0);
var G__7493 = (0);
seq__6394 = G__7490;
chunk__6395 = G__7491;
count__6396 = G__7492;
i__6397 = G__7493;
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
nex.typechecker.check_select = (function nex$typechecker$check_select(env,p__6398){
var map__6399 = p__6398;
var map__6399__$1 = cljs.core.__destructure_map(map__6399);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6399__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6399__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6399__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var seq__6400_7494 = cljs.core.seq(clauses);
var chunk__6401_7495 = null;
var count__6402_7496 = (0);
var i__6403_7497 = (0);
while(true){
if((i__6403_7497 < count__6402_7496)){
var clause_7498 = chunk__6401_7495.cljs$core$IIndexed$_nth$arity$2(null,i__6403_7497);
nex.typechecker.check_select_clause(env,clause_7498);


var G__7499 = seq__6400_7494;
var G__7500 = chunk__6401_7495;
var G__7501 = count__6402_7496;
var G__7502 = (i__6403_7497 + (1));
seq__6400_7494 = G__7499;
chunk__6401_7495 = G__7500;
count__6402_7496 = G__7501;
i__6403_7497 = G__7502;
continue;
} else {
var temp__5823__auto___7503 = cljs.core.seq(seq__6400_7494);
if(temp__5823__auto___7503){
var seq__6400_7504__$1 = temp__5823__auto___7503;
if(cljs.core.chunked_seq_QMARK_(seq__6400_7504__$1)){
var c__5673__auto___7505 = cljs.core.chunk_first(seq__6400_7504__$1);
var G__7506 = cljs.core.chunk_rest(seq__6400_7504__$1);
var G__7507 = c__5673__auto___7505;
var G__7508 = cljs.core.count(c__5673__auto___7505);
var G__7509 = (0);
seq__6400_7494 = G__7506;
chunk__6401_7495 = G__7507;
count__6402_7496 = G__7508;
i__6403_7497 = G__7509;
continue;
} else {
var clause_7510 = cljs.core.first(seq__6400_7504__$1);
nex.typechecker.check_select_clause(env,clause_7510);


var G__7511 = cljs.core.next(seq__6400_7504__$1);
var G__7512 = null;
var G__7513 = (0);
var G__7514 = (0);
seq__6400_7494 = G__7511;
chunk__6401_7495 = G__7512;
count__6402_7496 = G__7513;
i__6403_7497 = G__7514;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(timeout)){
var duration_type_7515 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(duration_type_7515),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"select timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(duration_type_7515))))], null));
}

var timeout_env_7516 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6404_7517 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(timeout));
var chunk__6405_7518 = null;
var count__6406_7519 = (0);
var i__6407_7520 = (0);
while(true){
if((i__6407_7520 < count__6406_7519)){
var stmt_7521 = chunk__6405_7518.cljs$core$IIndexed$_nth$arity$2(null,i__6407_7520);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_7516,stmt_7521) : nex.typechecker.check_statement.call(null,timeout_env_7516,stmt_7521));


var G__7522 = seq__6404_7517;
var G__7523 = chunk__6405_7518;
var G__7524 = count__6406_7519;
var G__7525 = (i__6407_7520 + (1));
seq__6404_7517 = G__7522;
chunk__6405_7518 = G__7523;
count__6406_7519 = G__7524;
i__6407_7520 = G__7525;
continue;
} else {
var temp__5823__auto___7526 = cljs.core.seq(seq__6404_7517);
if(temp__5823__auto___7526){
var seq__6404_7527__$1 = temp__5823__auto___7526;
if(cljs.core.chunked_seq_QMARK_(seq__6404_7527__$1)){
var c__5673__auto___7528 = cljs.core.chunk_first(seq__6404_7527__$1);
var G__7529 = cljs.core.chunk_rest(seq__6404_7527__$1);
var G__7530 = c__5673__auto___7528;
var G__7531 = cljs.core.count(c__5673__auto___7528);
var G__7532 = (0);
seq__6404_7517 = G__7529;
chunk__6405_7518 = G__7530;
count__6406_7519 = G__7531;
i__6407_7520 = G__7532;
continue;
} else {
var stmt_7533 = cljs.core.first(seq__6404_7527__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_7516,stmt_7533) : nex.typechecker.check_statement.call(null,timeout_env_7516,stmt_7533));


var G__7534 = cljs.core.next(seq__6404_7527__$1);
var G__7535 = null;
var G__7536 = (0);
var G__7537 = (0);
seq__6404_7517 = G__7534;
chunk__6405_7518 = G__7535;
count__6406_7519 = G__7536;
i__6407_7520 = G__7537;
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
var seq__6408 = cljs.core.seq(else$);
var chunk__6409 = null;
var count__6410 = (0);
var i__6411 = (0);
while(true){
if((i__6411 < count__6410)){
var stmt = chunk__6409.cljs$core$IIndexed$_nth$arity$2(null,i__6411);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__7538 = seq__6408;
var G__7539 = chunk__6409;
var G__7540 = count__6410;
var G__7541 = (i__6411 + (1));
seq__6408 = G__7538;
chunk__6409 = G__7539;
count__6410 = G__7540;
i__6411 = G__7541;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6408);
if(temp__5823__auto__){
var seq__6408__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6408__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6408__$1);
var G__7542 = cljs.core.chunk_rest(seq__6408__$1);
var G__7543 = c__5673__auto__;
var G__7544 = cljs.core.count(c__5673__auto__);
var G__7545 = (0);
seq__6408 = G__7542;
chunk__6409 = G__7543;
count__6410 = G__7544;
i__6411 = G__7545;
continue;
} else {
var stmt = cljs.core.first(seq__6408__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__7546 = cljs.core.next(seq__6408__$1);
var G__7547 = null;
var G__7548 = (0);
var G__7549 = (0);
seq__6408 = G__7546;
chunk__6409 = G__7547;
count__6410 = G__7548;
i__6411 = G__7549;
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
var G__6412 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6412__$1 = (((G__6412 instanceof cljs.core.Keyword))?G__6412.fqn:null);
switch (G__6412__$1) {
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
var block_env_7551 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6413_7552 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6414_7553 = null;
var count__6415_7554 = (0);
var i__6416_7555 = (0);
while(true){
if((i__6416_7555 < count__6415_7554)){
var s_7556 = chunk__6414_7553.cljs$core$IIndexed$_nth$arity$2(null,i__6416_7555);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7551,s_7556) : nex.typechecker.check_statement.call(null,block_env_7551,s_7556));


var G__7557 = seq__6413_7552;
var G__7558 = chunk__6414_7553;
var G__7559 = count__6415_7554;
var G__7560 = (i__6416_7555 + (1));
seq__6413_7552 = G__7557;
chunk__6414_7553 = G__7558;
count__6415_7554 = G__7559;
i__6416_7555 = G__7560;
continue;
} else {
var temp__5823__auto___7561 = cljs.core.seq(seq__6413_7552);
if(temp__5823__auto___7561){
var seq__6413_7562__$1 = temp__5823__auto___7561;
if(cljs.core.chunked_seq_QMARK_(seq__6413_7562__$1)){
var c__5673__auto___7563 = cljs.core.chunk_first(seq__6413_7562__$1);
var G__7564 = cljs.core.chunk_rest(seq__6413_7562__$1);
var G__7565 = c__5673__auto___7563;
var G__7566 = cljs.core.count(c__5673__auto___7563);
var G__7567 = (0);
seq__6413_7552 = G__7564;
chunk__6414_7553 = G__7565;
count__6415_7554 = G__7566;
i__6416_7555 = G__7567;
continue;
} else {
var s_7568 = cljs.core.first(seq__6413_7562__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_7551,s_7568) : nex.typechecker.check_statement.call(null,block_env_7551,s_7568));


var G__7570 = cljs.core.next(seq__6413_7562__$1);
var G__7571 = null;
var G__7572 = (0);
var G__7573 = (0);
seq__6413_7552 = G__7570;
chunk__6414_7553 = G__7571;
count__6415_7554 = G__7572;
i__6416_7555 = G__7573;
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

var seq__6417 = cljs.core.seq(rescue);
var chunk__6418 = null;
var count__6419 = (0);
var i__6420 = (0);
while(true){
if((i__6420 < count__6419)){
var s = chunk__6418.cljs$core$IIndexed$_nth$arity$2(null,i__6420);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7574 = seq__6417;
var G__7575 = chunk__6418;
var G__7576 = count__6419;
var G__7577 = (i__6420 + (1));
seq__6417 = G__7574;
chunk__6418 = G__7575;
count__6419 = G__7576;
i__6420 = G__7577;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6417);
if(temp__5823__auto____$1){
var seq__6417__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6417__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6417__$1);
var G__7582 = cljs.core.chunk_rest(seq__6417__$1);
var G__7583 = c__5673__auto__;
var G__7584 = cljs.core.count(c__5673__auto__);
var G__7585 = (0);
seq__6417 = G__7582;
chunk__6418 = G__7583;
count__6419 = G__7584;
i__6420 = G__7585;
continue;
} else {
var s = cljs.core.first(seq__6417__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__7590 = cljs.core.next(seq__6417__$1);
var G__7591 = null;
var G__7592 = (0);
var G__7593 = (0);
seq__6417 = G__7590;
chunk__6418 = G__7591;
count__6419 = G__7592;
i__6420 = G__7593;
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
var seq__6421 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6422 = null;
var count__6423 = (0);
var i__6424 = (0);
while(true){
if((i__6424 < count__6423)){
var s = chunk__6422.cljs$core$IIndexed$_nth$arity$2(null,i__6424);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7595 = seq__6421;
var G__7596 = chunk__6422;
var G__7597 = count__6423;
var G__7598 = (i__6424 + (1));
seq__6421 = G__7595;
chunk__6422 = G__7596;
count__6423 = G__7597;
i__6424 = G__7598;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6421);
if(temp__5823__auto__){
var seq__6421__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6421__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6421__$1);
var G__7599 = cljs.core.chunk_rest(seq__6421__$1);
var G__7600 = c__5673__auto__;
var G__7601 = cljs.core.count(c__5673__auto__);
var G__7602 = (0);
seq__6421 = G__7599;
chunk__6422 = G__7600;
count__6423 = G__7601;
i__6424 = G__7602;
continue;
} else {
var s = cljs.core.first(seq__6421__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__7607 = cljs.core.next(seq__6421__$1);
var G__7608 = null;
var G__7609 = (0);
var G__7610 = (0);
seq__6421 = G__7607;
chunk__6422 = G__7608;
count__6423 = G__7609;
i__6424 = G__7610;
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

var seq__6425_7611 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6426_7612 = null;
var count__6427_7613 = (0);
var i__6428_7614 = (0);
while(true){
if((i__6428_7614 < count__6427_7613)){
var clause_7619 = chunk__6426_7612.cljs$core$IIndexed$_nth$arity$2(null,i__6428_7614);
var G__6433_7620 = env;
var G__6434_7621 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7619);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6433_7620,G__6434_7621) : nex.typechecker.check_statement.call(null,G__6433_7620,G__6434_7621));


var G__7626 = seq__6425_7611;
var G__7627 = chunk__6426_7612;
var G__7628 = count__6427_7613;
var G__7629 = (i__6428_7614 + (1));
seq__6425_7611 = G__7626;
chunk__6426_7612 = G__7627;
count__6427_7613 = G__7628;
i__6428_7614 = G__7629;
continue;
} else {
var temp__5823__auto___7630 = cljs.core.seq(seq__6425_7611);
if(temp__5823__auto___7630){
var seq__6425_7631__$1 = temp__5823__auto___7630;
if(cljs.core.chunked_seq_QMARK_(seq__6425_7631__$1)){
var c__5673__auto___7632 = cljs.core.chunk_first(seq__6425_7631__$1);
var G__7637 = cljs.core.chunk_rest(seq__6425_7631__$1);
var G__7638 = c__5673__auto___7632;
var G__7639 = cljs.core.count(c__5673__auto___7632);
var G__7640 = (0);
seq__6425_7611 = G__7637;
chunk__6426_7612 = G__7638;
count__6427_7613 = G__7639;
i__6428_7614 = G__7640;
continue;
} else {
var clause_7641 = cljs.core.first(seq__6425_7631__$1);
var G__6435_7642 = env;
var G__6436_7643 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_7641);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6435_7642,G__6436_7643) : nex.typechecker.check_statement.call(null,G__6435_7642,G__6436_7643));


var G__7644 = cljs.core.next(seq__6425_7631__$1);
var G__7645 = null;
var G__7646 = (0);
var G__7647 = (0);
seq__6425_7611 = G__7644;
chunk__6426_7612 = G__7645;
count__6427_7613 = G__7646;
i__6428_7614 = G__7647;
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
var G__6437 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6437__$1 = (((G__6437 instanceof cljs.core.Keyword))?G__6437.fqn:null);
switch (G__6437__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6438 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6438) : nex.typechecker.references_result_QMARK_.call(null,G__6438));
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
var G__6439 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6439) : nex.typechecker.references_result_QMARK_.call(null,G__6439));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6441){
var map__6442 = p__6441;
var map__6442__$1 = cljs.core.__destructure_map(map__6442);
var method = map__6442__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6442__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6443_7649 = cljs.core.seq(params);
var chunk__6444_7650 = null;
var count__6445_7651 = (0);
var i__6446_7652 = (0);
while(true){
if((i__6446_7652 < count__6445_7651)){
var param_7653 = chunk__6444_7650.cljs$core$IIndexed$_nth$arity$2(null,i__6446_7652);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7653))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7653));
} else {
}


var G__7654 = seq__6443_7649;
var G__7655 = chunk__6444_7650;
var G__7656 = count__6445_7651;
var G__7657 = (i__6446_7652 + (1));
seq__6443_7649 = G__7654;
chunk__6444_7650 = G__7655;
count__6445_7651 = G__7656;
i__6446_7652 = G__7657;
continue;
} else {
var temp__5823__auto___7658 = cljs.core.seq(seq__6443_7649);
if(temp__5823__auto___7658){
var seq__6443_7659__$1 = temp__5823__auto___7658;
if(cljs.core.chunked_seq_QMARK_(seq__6443_7659__$1)){
var c__5673__auto___7660 = cljs.core.chunk_first(seq__6443_7659__$1);
var G__7661 = cljs.core.chunk_rest(seq__6443_7659__$1);
var G__7662 = c__5673__auto___7660;
var G__7663 = cljs.core.count(c__5673__auto___7660);
var G__7664 = (0);
seq__6443_7649 = G__7661;
chunk__6444_7650 = G__7662;
count__6445_7651 = G__7663;
i__6446_7652 = G__7664;
continue;
} else {
var param_7665 = cljs.core.first(seq__6443_7659__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7665))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7665));
} else {
}


var G__7666 = cljs.core.next(seq__6443_7659__$1);
var G__7667 = null;
var G__7668 = (0);
var G__7669 = (0);
seq__6443_7649 = G__7666;
chunk__6444_7650 = G__7667;
count__6445_7651 = G__7668;
i__6446_7652 = G__7669;
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
return cljs.core.some((function (p1__6440_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6440_SHARP_));
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

var seq__6447_7670 = cljs.core.seq(params);
var chunk__6448_7671 = null;
var count__6449_7672 = (0);
var i__6450_7673 = (0);
while(true){
if((i__6450_7673 < count__6449_7672)){
var param_7674 = chunk__6448_7671.cljs$core$IIndexed$_nth$arity$2(null,i__6450_7673);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7674),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7674);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7675 = seq__6447_7670;
var G__7676 = chunk__6448_7671;
var G__7677 = count__6449_7672;
var G__7678 = (i__6450_7673 + (1));
seq__6447_7670 = G__7675;
chunk__6448_7671 = G__7676;
count__6449_7672 = G__7677;
i__6450_7673 = G__7678;
continue;
} else {
var temp__5823__auto___7679 = cljs.core.seq(seq__6447_7670);
if(temp__5823__auto___7679){
var seq__6447_7680__$1 = temp__5823__auto___7679;
if(cljs.core.chunked_seq_QMARK_(seq__6447_7680__$1)){
var c__5673__auto___7681 = cljs.core.chunk_first(seq__6447_7680__$1);
var G__7682 = cljs.core.chunk_rest(seq__6447_7680__$1);
var G__7683 = c__5673__auto___7681;
var G__7684 = cljs.core.count(c__5673__auto___7681);
var G__7685 = (0);
seq__6447_7670 = G__7682;
chunk__6448_7671 = G__7683;
count__6449_7672 = G__7684;
i__6450_7673 = G__7685;
continue;
} else {
var param_7686 = cljs.core.first(seq__6447_7680__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7686),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7686);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7687 = cljs.core.next(seq__6447_7680__$1);
var G__7688 = null;
var G__7689 = (0);
var G__7690 = (0);
seq__6447_7670 = G__7687;
chunk__6448_7671 = G__7688;
count__6449_7672 = G__7689;
i__6450_7673 = G__7690;
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

var seq__6451_7691 = cljs.core.seq(require__$1);
var chunk__6452_7692 = null;
var count__6453_7693 = (0);
var i__6454_7694 = (0);
while(true){
if((i__6454_7694 < count__6453_7693)){
var assertion_7695 = chunk__6452_7692.cljs$core$IIndexed$_nth$arity$2(null,i__6454_7694);
var cond_type_7696 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7695));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7696,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7696)))], null));
}


var G__7697 = seq__6451_7691;
var G__7698 = chunk__6452_7692;
var G__7699 = count__6453_7693;
var G__7700 = (i__6454_7694 + (1));
seq__6451_7691 = G__7697;
chunk__6452_7692 = G__7698;
count__6453_7693 = G__7699;
i__6454_7694 = G__7700;
continue;
} else {
var temp__5823__auto___7701 = cljs.core.seq(seq__6451_7691);
if(temp__5823__auto___7701){
var seq__6451_7702__$1 = temp__5823__auto___7701;
if(cljs.core.chunked_seq_QMARK_(seq__6451_7702__$1)){
var c__5673__auto___7703 = cljs.core.chunk_first(seq__6451_7702__$1);
var G__7704 = cljs.core.chunk_rest(seq__6451_7702__$1);
var G__7705 = c__5673__auto___7703;
var G__7706 = cljs.core.count(c__5673__auto___7703);
var G__7707 = (0);
seq__6451_7691 = G__7704;
chunk__6452_7692 = G__7705;
count__6453_7693 = G__7706;
i__6454_7694 = G__7707;
continue;
} else {
var assertion_7708 = cljs.core.first(seq__6451_7702__$1);
var cond_type_7709 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7708));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7709,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7709)))], null));
}


var G__7710 = cljs.core.next(seq__6451_7702__$1);
var G__7711 = null;
var G__7712 = (0);
var G__7713 = (0);
seq__6451_7691 = G__7710;
chunk__6452_7692 = G__7711;
count__6453_7693 = G__7712;
i__6454_7694 = G__7713;
continue;
}
} else {
}
}
break;
}

var seq__6455_7714 = cljs.core.seq(body);
var chunk__6456_7715 = null;
var count__6457_7716 = (0);
var i__6458_7717 = (0);
while(true){
if((i__6458_7717 < count__6457_7716)){
var stmt_7718 = chunk__6456_7715.cljs$core$IIndexed$_nth$arity$2(null,i__6458_7717);
nex.typechecker.check_statement(method_env,stmt_7718);


var G__7719 = seq__6455_7714;
var G__7720 = chunk__6456_7715;
var G__7721 = count__6457_7716;
var G__7722 = (i__6458_7717 + (1));
seq__6455_7714 = G__7719;
chunk__6456_7715 = G__7720;
count__6457_7716 = G__7721;
i__6458_7717 = G__7722;
continue;
} else {
var temp__5823__auto___7723 = cljs.core.seq(seq__6455_7714);
if(temp__5823__auto___7723){
var seq__6455_7724__$1 = temp__5823__auto___7723;
if(cljs.core.chunked_seq_QMARK_(seq__6455_7724__$1)){
var c__5673__auto___7725 = cljs.core.chunk_first(seq__6455_7724__$1);
var G__7726 = cljs.core.chunk_rest(seq__6455_7724__$1);
var G__7727 = c__5673__auto___7725;
var G__7728 = cljs.core.count(c__5673__auto___7725);
var G__7729 = (0);
seq__6455_7714 = G__7726;
chunk__6456_7715 = G__7727;
count__6457_7716 = G__7728;
i__6458_7717 = G__7729;
continue;
} else {
var stmt_7730 = cljs.core.first(seq__6455_7724__$1);
nex.typechecker.check_statement(method_env,stmt_7730);


var G__7731 = cljs.core.next(seq__6455_7724__$1);
var G__7732 = null;
var G__7733 = (0);
var G__7734 = (0);
seq__6455_7714 = G__7731;
chunk__6456_7715 = G__7732;
count__6457_7716 = G__7733;
i__6458_7717 = G__7734;
continue;
}
} else {
}
}
break;
}

var seq__6459_7735 = cljs.core.seq(ensure);
var chunk__6460_7736 = null;
var count__6461_7737 = (0);
var i__6462_7738 = (0);
while(true){
if((i__6462_7738 < count__6461_7737)){
var assertion_7739 = chunk__6460_7736.cljs$core$IIndexed$_nth$arity$2(null,i__6462_7738);
var cond_type_7740 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7739));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7740,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7740)))], null));
}


var G__7741 = seq__6459_7735;
var G__7742 = chunk__6460_7736;
var G__7743 = count__6461_7737;
var G__7744 = (i__6462_7738 + (1));
seq__6459_7735 = G__7741;
chunk__6460_7736 = G__7742;
count__6461_7737 = G__7743;
i__6462_7738 = G__7744;
continue;
} else {
var temp__5823__auto___7745 = cljs.core.seq(seq__6459_7735);
if(temp__5823__auto___7745){
var seq__6459_7746__$1 = temp__5823__auto___7745;
if(cljs.core.chunked_seq_QMARK_(seq__6459_7746__$1)){
var c__5673__auto___7747 = cljs.core.chunk_first(seq__6459_7746__$1);
var G__7748 = cljs.core.chunk_rest(seq__6459_7746__$1);
var G__7749 = c__5673__auto___7747;
var G__7750 = cljs.core.count(c__5673__auto___7747);
var G__7751 = (0);
seq__6459_7735 = G__7748;
chunk__6460_7736 = G__7749;
count__6461_7737 = G__7750;
i__6462_7738 = G__7751;
continue;
} else {
var assertion_7752 = cljs.core.first(seq__6459_7746__$1);
var cond_type_7753 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7752));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7753,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7753)))], null));
}


var G__7754 = cljs.core.next(seq__6459_7746__$1);
var G__7755 = null;
var G__7756 = (0);
var G__7757 = (0);
seq__6459_7735 = G__7754;
chunk__6460_7736 = G__7755;
count__6461_7737 = G__7756;
i__6462_7738 = G__7757;
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

var seq__6463 = cljs.core.seq(rescue);
var chunk__6464 = null;
var count__6465 = (0);
var i__6466 = (0);
while(true){
if((i__6466 < count__6465)){
var stmt = chunk__6464.cljs$core$IIndexed$_nth$arity$2(null,i__6466);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7758 = seq__6463;
var G__7759 = chunk__6464;
var G__7760 = count__6465;
var G__7761 = (i__6466 + (1));
seq__6463 = G__7758;
chunk__6464 = G__7759;
count__6465 = G__7760;
i__6466 = G__7761;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6463);
if(temp__5823__auto__){
var seq__6463__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6463__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6463__$1);
var G__7762 = cljs.core.chunk_rest(seq__6463__$1);
var G__7763 = c__5673__auto__;
var G__7764 = cljs.core.count(c__5673__auto__);
var G__7765 = (0);
seq__6463 = G__7762;
chunk__6464 = G__7763;
count__6465 = G__7764;
i__6466 = G__7765;
continue;
} else {
var stmt = cljs.core.first(seq__6463__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7766 = cljs.core.next(seq__6463__$1);
var G__7767 = null;
var G__7768 = (0);
var G__7769 = (0);
seq__6463 = G__7766;
chunk__6464 = G__7767;
count__6465 = G__7768;
i__6466 = G__7769;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6467){
var map__6468 = p__6467;
var map__6468__$1 = cljs.core.__destructure_map(map__6468);
var constructor$ = map__6468__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6468__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6469_7770 = cljs.core.seq(params);
var chunk__6470_7771 = null;
var count__6471_7772 = (0);
var i__6472_7773 = (0);
while(true){
if((i__6472_7773 < count__6471_7772)){
var param_7774 = chunk__6470_7771.cljs$core$IIndexed$_nth$arity$2(null,i__6472_7773);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7774))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7774));
} else {
}


var G__7775 = seq__6469_7770;
var G__7776 = chunk__6470_7771;
var G__7777 = count__6471_7772;
var G__7778 = (i__6472_7773 + (1));
seq__6469_7770 = G__7775;
chunk__6470_7771 = G__7776;
count__6471_7772 = G__7777;
i__6472_7773 = G__7778;
continue;
} else {
var temp__5823__auto___7779 = cljs.core.seq(seq__6469_7770);
if(temp__5823__auto___7779){
var seq__6469_7780__$1 = temp__5823__auto___7779;
if(cljs.core.chunked_seq_QMARK_(seq__6469_7780__$1)){
var c__5673__auto___7781 = cljs.core.chunk_first(seq__6469_7780__$1);
var G__7782 = cljs.core.chunk_rest(seq__6469_7780__$1);
var G__7783 = c__5673__auto___7781;
var G__7784 = cljs.core.count(c__5673__auto___7781);
var G__7785 = (0);
seq__6469_7770 = G__7782;
chunk__6470_7771 = G__7783;
count__6471_7772 = G__7784;
i__6472_7773 = G__7785;
continue;
} else {
var param_7786 = cljs.core.first(seq__6469_7780__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7786))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7786));
} else {
}


var G__7787 = cljs.core.next(seq__6469_7780__$1);
var G__7788 = null;
var G__7789 = (0);
var G__7790 = (0);
seq__6469_7770 = G__7787;
chunk__6470_7771 = G__7788;
count__6471_7772 = G__7789;
i__6472_7773 = G__7790;
continue;
}
} else {
}
}
break;
}

var seq__6473_7791 = cljs.core.seq(params);
var chunk__6474_7792 = null;
var count__6475_7793 = (0);
var i__6476_7794 = (0);
while(true){
if((i__6476_7794 < count__6475_7793)){
var param_7795 = chunk__6474_7792.cljs$core$IIndexed$_nth$arity$2(null,i__6476_7794);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7795),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7795);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7796 = seq__6473_7791;
var G__7797 = chunk__6474_7792;
var G__7798 = count__6475_7793;
var G__7799 = (i__6476_7794 + (1));
seq__6473_7791 = G__7796;
chunk__6474_7792 = G__7797;
count__6475_7793 = G__7798;
i__6476_7794 = G__7799;
continue;
} else {
var temp__5823__auto___7800 = cljs.core.seq(seq__6473_7791);
if(temp__5823__auto___7800){
var seq__6473_7801__$1 = temp__5823__auto___7800;
if(cljs.core.chunked_seq_QMARK_(seq__6473_7801__$1)){
var c__5673__auto___7802 = cljs.core.chunk_first(seq__6473_7801__$1);
var G__7803 = cljs.core.chunk_rest(seq__6473_7801__$1);
var G__7804 = c__5673__auto___7802;
var G__7805 = cljs.core.count(c__5673__auto___7802);
var G__7806 = (0);
seq__6473_7791 = G__7803;
chunk__6474_7792 = G__7804;
count__6475_7793 = G__7805;
i__6476_7794 = G__7806;
continue;
} else {
var param_7807 = cljs.core.first(seq__6473_7801__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_7807),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7807);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__7808 = cljs.core.next(seq__6473_7801__$1);
var G__7809 = null;
var G__7810 = (0);
var G__7811 = (0);
seq__6473_7791 = G__7808;
chunk__6474_7792 = G__7809;
count__6475_7793 = G__7810;
i__6476_7794 = G__7811;
continue;
}
} else {
}
}
break;
}

var seq__6477_7812 = cljs.core.seq(require__$1);
var chunk__6478_7813 = null;
var count__6479_7814 = (0);
var i__6480_7815 = (0);
while(true){
if((i__6480_7815 < count__6479_7814)){
var assertion_7816 = chunk__6478_7813.cljs$core$IIndexed$_nth$arity$2(null,i__6480_7815);
if(cljs.core.truth_(assertion_7816)){
var cond_type_7817 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7816));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7817,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7817)))], null));
}
} else {
}


var G__7821 = seq__6477_7812;
var G__7822 = chunk__6478_7813;
var G__7823 = count__6479_7814;
var G__7824 = (i__6480_7815 + (1));
seq__6477_7812 = G__7821;
chunk__6478_7813 = G__7822;
count__6479_7814 = G__7823;
i__6480_7815 = G__7824;
continue;
} else {
var temp__5823__auto___7825 = cljs.core.seq(seq__6477_7812);
if(temp__5823__auto___7825){
var seq__6477_7826__$1 = temp__5823__auto___7825;
if(cljs.core.chunked_seq_QMARK_(seq__6477_7826__$1)){
var c__5673__auto___7827 = cljs.core.chunk_first(seq__6477_7826__$1);
var G__7828 = cljs.core.chunk_rest(seq__6477_7826__$1);
var G__7829 = c__5673__auto___7827;
var G__7830 = cljs.core.count(c__5673__auto___7827);
var G__7831 = (0);
seq__6477_7812 = G__7828;
chunk__6478_7813 = G__7829;
count__6479_7814 = G__7830;
i__6480_7815 = G__7831;
continue;
} else {
var assertion_7832 = cljs.core.first(seq__6477_7826__$1);
if(cljs.core.truth_(assertion_7832)){
var cond_type_7836 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7832));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7836,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7836)))], null));
}
} else {
}


var G__7837 = cljs.core.next(seq__6477_7826__$1);
var G__7838 = null;
var G__7839 = (0);
var G__7840 = (0);
seq__6477_7812 = G__7837;
chunk__6478_7813 = G__7838;
count__6479_7814 = G__7839;
i__6480_7815 = G__7840;
continue;
}
} else {
}
}
break;
}

var seq__6481_7841 = cljs.core.seq(body);
var chunk__6482_7842 = null;
var count__6483_7843 = (0);
var i__6484_7844 = (0);
while(true){
if((i__6484_7844 < count__6483_7843)){
var stmt_7845 = chunk__6482_7842.cljs$core$IIndexed$_nth$arity$2(null,i__6484_7844);
nex.typechecker.check_statement(ctor_env,stmt_7845);


var G__7846 = seq__6481_7841;
var G__7847 = chunk__6482_7842;
var G__7848 = count__6483_7843;
var G__7849 = (i__6484_7844 + (1));
seq__6481_7841 = G__7846;
chunk__6482_7842 = G__7847;
count__6483_7843 = G__7848;
i__6484_7844 = G__7849;
continue;
} else {
var temp__5823__auto___7851 = cljs.core.seq(seq__6481_7841);
if(temp__5823__auto___7851){
var seq__6481_7852__$1 = temp__5823__auto___7851;
if(cljs.core.chunked_seq_QMARK_(seq__6481_7852__$1)){
var c__5673__auto___7853 = cljs.core.chunk_first(seq__6481_7852__$1);
var G__7854 = cljs.core.chunk_rest(seq__6481_7852__$1);
var G__7855 = c__5673__auto___7853;
var G__7856 = cljs.core.count(c__5673__auto___7853);
var G__7857 = (0);
seq__6481_7841 = G__7854;
chunk__6482_7842 = G__7855;
count__6483_7843 = G__7856;
i__6484_7844 = G__7857;
continue;
} else {
var stmt_7858 = cljs.core.first(seq__6481_7852__$1);
nex.typechecker.check_statement(ctor_env,stmt_7858);


var G__7860 = cljs.core.next(seq__6481_7852__$1);
var G__7861 = null;
var G__7862 = (0);
var G__7863 = (0);
seq__6481_7841 = G__7860;
chunk__6482_7842 = G__7861;
count__6483_7843 = G__7862;
i__6484_7844 = G__7863;
continue;
}
} else {
}
}
break;
}

var seq__6485_7864 = cljs.core.seq(ensure);
var chunk__6486_7865 = null;
var count__6487_7866 = (0);
var i__6488_7867 = (0);
while(true){
if((i__6488_7867 < count__6487_7866)){
var assertion_7868 = chunk__6486_7865.cljs$core$IIndexed$_nth$arity$2(null,i__6488_7867);
if(cljs.core.truth_(assertion_7868)){
var cond_type_7869 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7868));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7869,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7869)))], null));
}
} else {
}


var G__7870 = seq__6485_7864;
var G__7871 = chunk__6486_7865;
var G__7872 = count__6487_7866;
var G__7873 = (i__6488_7867 + (1));
seq__6485_7864 = G__7870;
chunk__6486_7865 = G__7871;
count__6487_7866 = G__7872;
i__6488_7867 = G__7873;
continue;
} else {
var temp__5823__auto___7874 = cljs.core.seq(seq__6485_7864);
if(temp__5823__auto___7874){
var seq__6485_7875__$1 = temp__5823__auto___7874;
if(cljs.core.chunked_seq_QMARK_(seq__6485_7875__$1)){
var c__5673__auto___7876 = cljs.core.chunk_first(seq__6485_7875__$1);
var G__7877 = cljs.core.chunk_rest(seq__6485_7875__$1);
var G__7878 = c__5673__auto___7876;
var G__7879 = cljs.core.count(c__5673__auto___7876);
var G__7880 = (0);
seq__6485_7864 = G__7877;
chunk__6486_7865 = G__7878;
count__6487_7866 = G__7879;
i__6488_7867 = G__7880;
continue;
} else {
var assertion_7881 = cljs.core.first(seq__6485_7875__$1);
if(cljs.core.truth_(assertion_7881)){
var cond_type_7882 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_7881));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_7882,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_7882)))], null));
}
} else {
}


var G__7883 = cljs.core.next(seq__6485_7875__$1);
var G__7884 = null;
var G__7885 = (0);
var G__7886 = (0);
seq__6485_7864 = G__7883;
chunk__6486_7865 = G__7884;
count__6487_7866 = G__7885;
i__6488_7867 = G__7886;
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

var seq__6489 = cljs.core.seq(rescue);
var chunk__6490 = null;
var count__6491 = (0);
var i__6492 = (0);
while(true){
if((i__6492 < count__6491)){
var stmt = chunk__6490.cljs$core$IIndexed$_nth$arity$2(null,i__6492);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7887 = seq__6489;
var G__7888 = chunk__6490;
var G__7889 = count__6491;
var G__7890 = (i__6492 + (1));
seq__6489 = G__7887;
chunk__6490 = G__7888;
count__6491 = G__7889;
i__6492 = G__7890;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6489);
if(temp__5823__auto__){
var seq__6489__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6489__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6489__$1);
var G__7891 = cljs.core.chunk_rest(seq__6489__$1);
var G__7892 = c__5673__auto__;
var G__7893 = cljs.core.count(c__5673__auto__);
var G__7894 = (0);
seq__6489 = G__7891;
chunk__6490 = G__7892;
count__6491 = G__7893;
i__6492 = G__7894;
continue;
} else {
var stmt = cljs.core.first(seq__6489__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__7895 = cljs.core.next(seq__6489__$1);
var G__7896 = null;
var G__7897 = (0);
var G__7898 = (0);
seq__6489 = G__7895;
chunk__6490 = G__7896;
count__6491 = G__7897;
i__6492 = G__7898;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6493){
var map__6494 = p__6493;
var map__6494__$1 = cljs.core.__destructure_map(map__6494);
var class_def = map__6494__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6494__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var updated_body_7899 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
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
var updated_class_def_7900 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(class_def,new cljs.core.Keyword(null,"body","body",-2049205669),updated_body_7899);
nex.typechecker.env_add_class(env,name,updated_class_def_7900);

var seq__6495 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nex.typechecker.env_lookup_class(env,name)));
var chunk__6496 = null;
var count__6497 = (0);
var i__6498 = (0);
while(true){
if((i__6498 < count__6497)){
var section = chunk__6496.cljs$core$IIndexed$_nth$arity$2(null,i__6498);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6515_7902 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6516_7903 = null;
var count__6517_7904 = (0);
var i__6518_7905 = (0);
while(true){
if((i__6518_7905 < count__6517_7904)){
var member_7906 = chunk__6516_7903.cljs$core$IIndexed$_nth$arity$2(null,i__6518_7905);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7906),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7906)], null));
} else {
}


var G__7907 = seq__6515_7902;
var G__7908 = chunk__6516_7903;
var G__7909 = count__6517_7904;
var G__7910 = (i__6518_7905 + (1));
seq__6515_7902 = G__7907;
chunk__6516_7903 = G__7908;
count__6517_7904 = G__7909;
i__6518_7905 = G__7910;
continue;
} else {
var temp__5823__auto___7911 = cljs.core.seq(seq__6515_7902);
if(temp__5823__auto___7911){
var seq__6515_7912__$1 = temp__5823__auto___7911;
if(cljs.core.chunked_seq_QMARK_(seq__6515_7912__$1)){
var c__5673__auto___7913 = cljs.core.chunk_first(seq__6515_7912__$1);
var G__7914 = cljs.core.chunk_rest(seq__6515_7912__$1);
var G__7915 = c__5673__auto___7913;
var G__7916 = cljs.core.count(c__5673__auto___7913);
var G__7917 = (0);
seq__6515_7902 = G__7914;
chunk__6516_7903 = G__7915;
count__6517_7904 = G__7916;
i__6518_7905 = G__7917;
continue;
} else {
var member_7918 = cljs.core.first(seq__6515_7912__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7918),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7918)], null));
} else {
}


var G__7919 = cljs.core.next(seq__6515_7912__$1);
var G__7920 = null;
var G__7921 = (0);
var G__7922 = (0);
seq__6515_7902 = G__7919;
chunk__6516_7903 = G__7920;
count__6517_7904 = G__7921;
i__6518_7905 = G__7922;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6519_7923 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6520_7924 = null;
var count__6521_7925 = (0);
var i__6522_7926 = (0);
while(true){
if((i__6522_7926 < count__6521_7925)){
var ctor_7928 = chunk__6520_7924.cljs$core$IIndexed$_nth$arity$2(null,i__6522_7926);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7928),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7928),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7929 = seq__6519_7923;
var G__7930 = chunk__6520_7924;
var G__7931 = count__6521_7925;
var G__7932 = (i__6522_7926 + (1));
seq__6519_7923 = G__7929;
chunk__6520_7924 = G__7930;
count__6521_7925 = G__7931;
i__6522_7926 = G__7932;
continue;
} else {
var temp__5823__auto___7933 = cljs.core.seq(seq__6519_7923);
if(temp__5823__auto___7933){
var seq__6519_7934__$1 = temp__5823__auto___7933;
if(cljs.core.chunked_seq_QMARK_(seq__6519_7934__$1)){
var c__5673__auto___7935 = cljs.core.chunk_first(seq__6519_7934__$1);
var G__7936 = cljs.core.chunk_rest(seq__6519_7934__$1);
var G__7937 = c__5673__auto___7935;
var G__7938 = cljs.core.count(c__5673__auto___7935);
var G__7939 = (0);
seq__6519_7923 = G__7936;
chunk__6520_7924 = G__7937;
count__6521_7925 = G__7938;
i__6522_7926 = G__7939;
continue;
} else {
var ctor_7940 = cljs.core.first(seq__6519_7934__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7940),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7940),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7941 = cljs.core.next(seq__6519_7934__$1);
var G__7942 = null;
var G__7943 = (0);
var G__7944 = (0);
seq__6519_7923 = G__7941;
chunk__6520_7924 = G__7942;
count__6521_7925 = G__7943;
i__6522_7926 = G__7944;
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


var G__7945 = seq__6495;
var G__7946 = chunk__6496;
var G__7947 = count__6497;
var G__7948 = (i__6498 + (1));
seq__6495 = G__7945;
chunk__6496 = G__7946;
count__6497 = G__7947;
i__6498 = G__7948;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6495);
if(temp__5823__auto__){
var seq__6495__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6495__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6495__$1);
var G__7949 = cljs.core.chunk_rest(seq__6495__$1);
var G__7950 = c__5673__auto__;
var G__7951 = cljs.core.count(c__5673__auto__);
var G__7952 = (0);
seq__6495 = G__7949;
chunk__6496 = G__7950;
count__6497 = G__7951;
i__6498 = G__7952;
continue;
} else {
var section = cljs.core.first(seq__6495__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6523_7953 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6524_7954 = null;
var count__6525_7955 = (0);
var i__6526_7956 = (0);
while(true){
if((i__6526_7956 < count__6525_7955)){
var member_7957 = chunk__6524_7954.cljs$core$IIndexed$_nth$arity$2(null,i__6526_7956);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7957),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7957),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7957)], null));
} else {
}


var G__7958 = seq__6523_7953;
var G__7959 = chunk__6524_7954;
var G__7960 = count__6525_7955;
var G__7961 = (i__6526_7956 + (1));
seq__6523_7953 = G__7958;
chunk__6524_7954 = G__7959;
count__6525_7955 = G__7960;
i__6526_7956 = G__7961;
continue;
} else {
var temp__5823__auto___7962__$1 = cljs.core.seq(seq__6523_7953);
if(temp__5823__auto___7962__$1){
var seq__6523_7963__$1 = temp__5823__auto___7962__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6523_7963__$1)){
var c__5673__auto___7964 = cljs.core.chunk_first(seq__6523_7963__$1);
var G__7965 = cljs.core.chunk_rest(seq__6523_7963__$1);
var G__7966 = c__5673__auto___7964;
var G__7967 = cljs.core.count(c__5673__auto___7964);
var G__7968 = (0);
seq__6523_7953 = G__7965;
chunk__6524_7954 = G__7966;
count__6525_7955 = G__7967;
i__6526_7956 = G__7968;
continue;
} else {
var member_7969 = cljs.core.first(seq__6523_7963__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_7969),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_7969),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_7969),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_7969)], null));
} else {
}


var G__7970 = cljs.core.next(seq__6523_7963__$1);
var G__7971 = null;
var G__7972 = (0);
var G__7973 = (0);
seq__6523_7953 = G__7970;
chunk__6524_7954 = G__7971;
count__6525_7955 = G__7972;
i__6526_7956 = G__7973;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6527_7974 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6528_7975 = null;
var count__6529_7976 = (0);
var i__6530_7977 = (0);
while(true){
if((i__6530_7977 < count__6529_7976)){
var ctor_7978 = chunk__6528_7975.cljs$core$IIndexed$_nth$arity$2(null,i__6530_7977);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7978),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7978),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7979 = seq__6527_7974;
var G__7980 = chunk__6528_7975;
var G__7981 = count__6529_7976;
var G__7982 = (i__6530_7977 + (1));
seq__6527_7974 = G__7979;
chunk__6528_7975 = G__7980;
count__6529_7976 = G__7981;
i__6530_7977 = G__7982;
continue;
} else {
var temp__5823__auto___7983__$1 = cljs.core.seq(seq__6527_7974);
if(temp__5823__auto___7983__$1){
var seq__6527_7984__$1 = temp__5823__auto___7983__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6527_7984__$1)){
var c__5673__auto___7985 = cljs.core.chunk_first(seq__6527_7984__$1);
var G__7986 = cljs.core.chunk_rest(seq__6527_7984__$1);
var G__7987 = c__5673__auto___7985;
var G__7988 = cljs.core.count(c__5673__auto___7985);
var G__7989 = (0);
seq__6527_7974 = G__7986;
chunk__6528_7975 = G__7987;
count__6529_7976 = G__7988;
i__6530_7977 = G__7989;
continue;
} else {
var ctor_7990 = cljs.core.first(seq__6527_7984__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_7990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_7990),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__7991 = cljs.core.next(seq__6527_7984__$1);
var G__7992 = null;
var G__7993 = (0);
var G__7994 = (0);
seq__6527_7974 = G__7991;
chunk__6528_7975 = G__7992;
count__6529_7976 = G__7993;
i__6530_7977 = G__7994;
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


var G__7995 = cljs.core.next(seq__6495__$1);
var G__7996 = null;
var G__7997 = (0);
var G__7998 = (0);
seq__6495 = G__7995;
chunk__6496 = G__7996;
count__6497 = G__7997;
i__6498 = G__7998;
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
var seq__6531 = cljs.core.seq(parents);
var chunk__6532 = null;
var count__6533 = (0);
var i__6534 = (0);
while(true){
if((i__6534 < count__6533)){
var map__6537 = chunk__6532.cljs$core$IIndexed$_nth$arity$2(null,i__6534);
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


var G__7999 = seq__6531;
var G__8000 = chunk__6532;
var G__8001 = count__6533;
var G__8002 = (i__6534 + (1));
seq__6531 = G__7999;
chunk__6532 = G__8000;
count__6533 = G__8001;
i__6534 = G__8002;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6531);
if(temp__5823__auto__){
var seq__6531__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6531__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6531__$1);
var G__8003 = cljs.core.chunk_rest(seq__6531__$1);
var G__8004 = c__5673__auto__;
var G__8005 = cljs.core.count(c__5673__auto__);
var G__8006 = (0);
seq__6531 = G__8003;
chunk__6532 = G__8004;
count__6533 = G__8005;
i__6534 = G__8006;
continue;
} else {
var map__6538 = cljs.core.first(seq__6531__$1);
var map__6538__$1 = cljs.core.__destructure_map(map__6538);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6538__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__8007 = cljs.core.next(seq__6531__$1);
var G__8008 = null;
var G__8009 = (0);
var G__8010 = (0);
seq__6531 = G__8007;
chunk__6532 = G__8008;
count__6533 = G__8009;
i__6534 = G__8010;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6544){
var map__6545 = p__6544;
var map__6545__$1 = cljs.core.__destructure_map(map__6545);
var class_def = map__6545__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6545__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
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

var seq__6546_8011 = cljs.core.seq(invariant__$1);
var chunk__6547_8012 = null;
var count__6548_8013 = (0);
var i__6549_8014 = (0);
while(true){
if((i__6549_8014 < count__6548_8013)){
var assertion_8015 = chunk__6547_8012.cljs$core$IIndexed$_nth$arity$2(null,i__6549_8014);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_8015;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8015);
} else {
return and__5140__auto__;
}
})())){
var inv_type_8016 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8015));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8016,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8016,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_8016)))], null));
}
} else {
}


var G__8017 = seq__6546_8011;
var G__8018 = chunk__6547_8012;
var G__8019 = count__6548_8013;
var G__8020 = (i__6549_8014 + (1));
seq__6546_8011 = G__8017;
chunk__6547_8012 = G__8018;
count__6548_8013 = G__8019;
i__6549_8014 = G__8020;
continue;
} else {
var temp__5823__auto___8022 = cljs.core.seq(seq__6546_8011);
if(temp__5823__auto___8022){
var seq__6546_8023__$1 = temp__5823__auto___8022;
if(cljs.core.chunked_seq_QMARK_(seq__6546_8023__$1)){
var c__5673__auto___8025 = cljs.core.chunk_first(seq__6546_8023__$1);
var G__8026 = cljs.core.chunk_rest(seq__6546_8023__$1);
var G__8027 = c__5673__auto___8025;
var G__8028 = cljs.core.count(c__5673__auto___8025);
var G__8029 = (0);
seq__6546_8011 = G__8026;
chunk__6547_8012 = G__8027;
count__6548_8013 = G__8028;
i__6549_8014 = G__8029;
continue;
} else {
var assertion_8030 = cljs.core.first(seq__6546_8023__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_8030;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8030);
} else {
return and__5140__auto__;
}
})())){
var inv_type_8032 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8030));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8032,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8032,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_8032)))], null));
}
} else {
}


var G__8034 = cljs.core.next(seq__6546_8023__$1);
var G__8035 = null;
var G__8036 = (0);
var G__8037 = (0);
seq__6546_8011 = G__8034;
chunk__6547_8012 = G__8035;
count__6548_8013 = G__8036;
i__6549_8014 = G__8037;
continue;
}
} else {
}
}
break;
}

var seq__6550_8038 = cljs.core.seq(body__$1);
var chunk__6551_8039 = null;
var count__6552_8040 = (0);
var i__6553_8041 = (0);
while(true){
if((i__6553_8041 < count__6552_8040)){
var section_8042 = chunk__6551_8039.cljs$core$IIndexed$_nth$arity$2(null,i__6553_8041);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8042),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6570_8043 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8042));
var chunk__6571_8044 = null;
var count__6572_8045 = (0);
var i__6573_8046 = (0);
while(true){
if((i__6573_8046 < count__6572_8045)){
var member_8047 = chunk__6571_8044.cljs$core$IIndexed$_nth$arity$2(null,i__6573_8046);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8047),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8047);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8047),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8047))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8047));
}
} else {
}
}


var G__8048 = seq__6570_8043;
var G__8049 = chunk__6571_8044;
var G__8050 = count__6572_8045;
var G__8051 = (i__6573_8046 + (1));
seq__6570_8043 = G__8048;
chunk__6571_8044 = G__8049;
count__6572_8045 = G__8050;
i__6573_8046 = G__8051;
continue;
} else {
var temp__5823__auto___8052 = cljs.core.seq(seq__6570_8043);
if(temp__5823__auto___8052){
var seq__6570_8053__$1 = temp__5823__auto___8052;
if(cljs.core.chunked_seq_QMARK_(seq__6570_8053__$1)){
var c__5673__auto___8054 = cljs.core.chunk_first(seq__6570_8053__$1);
var G__8055 = cljs.core.chunk_rest(seq__6570_8053__$1);
var G__8056 = c__5673__auto___8054;
var G__8057 = cljs.core.count(c__5673__auto___8054);
var G__8058 = (0);
seq__6570_8043 = G__8055;
chunk__6571_8044 = G__8056;
count__6572_8045 = G__8057;
i__6573_8046 = G__8058;
continue;
} else {
var member_8063 = cljs.core.first(seq__6570_8053__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8063),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8063);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8063),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8063))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8063));
}
} else {
}
}


var G__8070 = cljs.core.next(seq__6570_8053__$1);
var G__8071 = null;
var G__8072 = (0);
var G__8073 = (0);
seq__6570_8043 = G__8070;
chunk__6571_8044 = G__8071;
count__6572_8045 = G__8072;
i__6573_8046 = G__8073;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8042),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6574_8080 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_8042));
var chunk__6575_8081 = null;
var count__6576_8082 = (0);
var i__6577_8083 = (0);
while(true){
if((i__6577_8083 < count__6576_8082)){
var ctor_8085 = chunk__6575_8081.cljs$core$IIndexed$_nth$arity$2(null,i__6577_8083);
nex.typechecker.check_constructor(env,name,ctor_8085);


var G__8090 = seq__6574_8080;
var G__8091 = chunk__6575_8081;
var G__8092 = count__6576_8082;
var G__8093 = (i__6577_8083 + (1));
seq__6574_8080 = G__8090;
chunk__6575_8081 = G__8091;
count__6576_8082 = G__8092;
i__6577_8083 = G__8093;
continue;
} else {
var temp__5823__auto___8094 = cljs.core.seq(seq__6574_8080);
if(temp__5823__auto___8094){
var seq__6574_8095__$1 = temp__5823__auto___8094;
if(cljs.core.chunked_seq_QMARK_(seq__6574_8095__$1)){
var c__5673__auto___8096 = cljs.core.chunk_first(seq__6574_8095__$1);
var G__8097 = cljs.core.chunk_rest(seq__6574_8095__$1);
var G__8098 = c__5673__auto___8096;
var G__8099 = cljs.core.count(c__5673__auto___8096);
var G__8100 = (0);
seq__6574_8080 = G__8097;
chunk__6575_8081 = G__8098;
count__6576_8082 = G__8099;
i__6577_8083 = G__8100;
continue;
} else {
var ctor_8102 = cljs.core.first(seq__6574_8095__$1);
nex.typechecker.check_constructor(env,name,ctor_8102);


var G__8103 = cljs.core.next(seq__6574_8095__$1);
var G__8104 = null;
var G__8105 = (0);
var G__8106 = (0);
seq__6574_8080 = G__8103;
chunk__6575_8081 = G__8104;
count__6576_8082 = G__8105;
i__6577_8083 = G__8106;
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


var G__8107 = seq__6550_8038;
var G__8108 = chunk__6551_8039;
var G__8109 = count__6552_8040;
var G__8110 = (i__6553_8041 + (1));
seq__6550_8038 = G__8107;
chunk__6551_8039 = G__8108;
count__6552_8040 = G__8109;
i__6553_8041 = G__8110;
continue;
} else {
var temp__5823__auto___8111 = cljs.core.seq(seq__6550_8038);
if(temp__5823__auto___8111){
var seq__6550_8112__$1 = temp__5823__auto___8111;
if(cljs.core.chunked_seq_QMARK_(seq__6550_8112__$1)){
var c__5673__auto___8113 = cljs.core.chunk_first(seq__6550_8112__$1);
var G__8114 = cljs.core.chunk_rest(seq__6550_8112__$1);
var G__8115 = c__5673__auto___8113;
var G__8116 = cljs.core.count(c__5673__auto___8113);
var G__8117 = (0);
seq__6550_8038 = G__8114;
chunk__6551_8039 = G__8115;
count__6552_8040 = G__8116;
i__6553_8041 = G__8117;
continue;
} else {
var section_8118 = cljs.core.first(seq__6550_8112__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8118),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6578_8119 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8118));
var chunk__6579_8120 = null;
var count__6580_8121 = (0);
var i__6581_8122 = (0);
while(true){
if((i__6581_8122 < count__6580_8121)){
var member_8123 = chunk__6579_8120.cljs$core$IIndexed$_nth$arity$2(null,i__6581_8122);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8123),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8123);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8123),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8123))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8123));
}
} else {
}
}


var G__8124 = seq__6578_8119;
var G__8125 = chunk__6579_8120;
var G__8126 = count__6580_8121;
var G__8127 = (i__6581_8122 + (1));
seq__6578_8119 = G__8124;
chunk__6579_8120 = G__8125;
count__6580_8121 = G__8126;
i__6581_8122 = G__8127;
continue;
} else {
var temp__5823__auto___8128__$1 = cljs.core.seq(seq__6578_8119);
if(temp__5823__auto___8128__$1){
var seq__6578_8129__$1 = temp__5823__auto___8128__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6578_8129__$1)){
var c__5673__auto___8130 = cljs.core.chunk_first(seq__6578_8129__$1);
var G__8131 = cljs.core.chunk_rest(seq__6578_8129__$1);
var G__8132 = c__5673__auto___8130;
var G__8133 = cljs.core.count(c__5673__auto___8130);
var G__8134 = (0);
seq__6578_8119 = G__8131;
chunk__6579_8120 = G__8132;
count__6580_8121 = G__8133;
i__6581_8122 = G__8134;
continue;
} else {
var member_8135 = cljs.core.first(seq__6578_8129__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8135),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8135);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8135),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8135))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8135));
}
} else {
}
}


var G__8136 = cljs.core.next(seq__6578_8129__$1);
var G__8137 = null;
var G__8138 = (0);
var G__8139 = (0);
seq__6578_8119 = G__8136;
chunk__6579_8120 = G__8137;
count__6580_8121 = G__8138;
i__6581_8122 = G__8139;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8118),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6582_8140 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_8118));
var chunk__6583_8141 = null;
var count__6584_8142 = (0);
var i__6585_8143 = (0);
while(true){
if((i__6585_8143 < count__6584_8142)){
var ctor_8144 = chunk__6583_8141.cljs$core$IIndexed$_nth$arity$2(null,i__6585_8143);
nex.typechecker.check_constructor(env,name,ctor_8144);


var G__8145 = seq__6582_8140;
var G__8146 = chunk__6583_8141;
var G__8147 = count__6584_8142;
var G__8148 = (i__6585_8143 + (1));
seq__6582_8140 = G__8145;
chunk__6583_8141 = G__8146;
count__6584_8142 = G__8147;
i__6585_8143 = G__8148;
continue;
} else {
var temp__5823__auto___8149__$1 = cljs.core.seq(seq__6582_8140);
if(temp__5823__auto___8149__$1){
var seq__6582_8150__$1 = temp__5823__auto___8149__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6582_8150__$1)){
var c__5673__auto___8151 = cljs.core.chunk_first(seq__6582_8150__$1);
var G__8152 = cljs.core.chunk_rest(seq__6582_8150__$1);
var G__8153 = c__5673__auto___8151;
var G__8154 = cljs.core.count(c__5673__auto___8151);
var G__8155 = (0);
seq__6582_8140 = G__8152;
chunk__6583_8141 = G__8153;
count__6584_8142 = G__8154;
i__6585_8143 = G__8155;
continue;
} else {
var ctor_8161 = cljs.core.first(seq__6582_8150__$1);
nex.typechecker.check_constructor(env,name,ctor_8161);


var G__8162 = cljs.core.next(seq__6582_8150__$1);
var G__8163 = null;
var G__8164 = (0);
var G__8165 = (0);
seq__6582_8140 = G__8162;
chunk__6583_8141 = G__8163;
count__6584_8142 = G__8164;
i__6585_8143 = G__8165;
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


var G__8167 = cljs.core.next(seq__6550_8112__$1);
var G__8168 = null;
var G__8169 = (0);
var G__8170 = (0);
seq__6550_8038 = G__8167;
chunk__6551_8039 = G__8168;
count__6552_8040 = G__8169;
i__6553_8041 = G__8170;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6540_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6540_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6540_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6539_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6539_SHARP_));
}),body__$1)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6541_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6541_SHARP_));
}),body__$1)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__6586){
var map__6587 = p__6586;
var map__6587__$1 = cljs.core.__destructure_map(map__6587);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6587__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__6588 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6588__$1 = (((G__6588 instanceof cljs.core.Keyword))?G__6588.fqn:null);
switch (G__6588__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6542_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6542_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6543_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6543_SHARP_));
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

var seq__6589 = cljs.core.seq(constructors);
var chunk__6590 = null;
var count__6591 = (0);
var i__6592 = (0);
while(true){
if((i__6592 < count__6591)){
var map__6595 = chunk__6590.cljs$core$IIndexed$_nth$arity$2(null,i__6592);
var map__6595__$1 = cljs.core.__destructure_map(map__6595);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6595__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_8200 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_8201 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_8200)));
if(cljs.core.seq(missing_8201)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_8201))))], null));
} else {
}


var G__8202 = seq__6589;
var G__8203 = chunk__6590;
var G__8204 = count__6591;
var G__8205 = (i__6592 + (1));
seq__6589 = G__8202;
chunk__6590 = G__8203;
count__6591 = G__8204;
i__6592 = G__8205;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6589);
if(temp__5823__auto__){
var seq__6589__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6589__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6589__$1);
var G__8206 = cljs.core.chunk_rest(seq__6589__$1);
var G__8207 = c__5673__auto__;
var G__8208 = cljs.core.count(c__5673__auto__);
var G__8209 = (0);
seq__6589 = G__8206;
chunk__6590 = G__8207;
count__6591 = G__8208;
i__6592 = G__8209;
continue;
} else {
var map__6596 = cljs.core.first(seq__6589__$1);
var map__6596__$1 = cljs.core.__destructure_map(map__6596);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6596__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_8210 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_8211 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_8210)));
if(cljs.core.seq(missing_8211)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_8211))))], null));
} else {
}


var G__8212 = cljs.core.next(seq__6589__$1);
var G__8213 = null;
var G__8214 = (0);
var G__8215 = (0);
seq__6589 = G__8212;
chunk__6590 = G__8213;
count__6591 = G__8214;
i__6592 = G__8215;
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
nex.typechecker.env_add_class(env,"Any",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Any",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

var seq__6597_8216 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["to_string",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"equals",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"clone",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null)], null));
var chunk__6598_8217 = null;
var count__6599_8218 = (0);
var i__6600_8219 = (0);
while(true){
if((i__6600_8219 < count__6599_8218)){
var vec__6607_8220 = chunk__6598_8217.cljs$core$IIndexed$_nth$arity$2(null,i__6600_8219);
var method_name_8221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6607_8220,(0),null);
var sig_8222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6607_8220,(1),null);
nex.typechecker.env_add_method(env,"Any",method_name_8221,sig_8222);


var G__8223 = seq__6597_8216;
var G__8224 = chunk__6598_8217;
var G__8225 = count__6599_8218;
var G__8226 = (i__6600_8219 + (1));
seq__6597_8216 = G__8223;
chunk__6598_8217 = G__8224;
count__6599_8218 = G__8225;
i__6600_8219 = G__8226;
continue;
} else {
var temp__5823__auto___8227 = cljs.core.seq(seq__6597_8216);
if(temp__5823__auto___8227){
var seq__6597_8228__$1 = temp__5823__auto___8227;
if(cljs.core.chunked_seq_QMARK_(seq__6597_8228__$1)){
var c__5673__auto___8229 = cljs.core.chunk_first(seq__6597_8228__$1);
var G__8230 = cljs.core.chunk_rest(seq__6597_8228__$1);
var G__8231 = c__5673__auto___8229;
var G__8232 = cljs.core.count(c__5673__auto___8229);
var G__8233 = (0);
seq__6597_8216 = G__8230;
chunk__6598_8217 = G__8231;
count__6599_8218 = G__8232;
i__6600_8219 = G__8233;
continue;
} else {
var vec__6610_8234 = cljs.core.first(seq__6597_8228__$1);
var method_name_8235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610_8234,(0),null);
var sig_8236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6610_8234,(1),null);
nex.typechecker.env_add_method(env,"Any",method_name_8235,sig_8236);


var G__8239 = cljs.core.next(seq__6597_8228__$1);
var G__8240 = null;
var G__8241 = (0);
var G__8242 = (0);
seq__6597_8216 = G__8239;
chunk__6598_8217 = G__8240;
count__6599_8218 = G__8241;
i__6600_8219 = G__8242;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Comparable",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Comparable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,"Comparable","compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_class(env,"Hashable",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Hashable",new cljs.core.Keyword(null,"deferred?","deferred?",716798715),true,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),null,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,"Hashable","hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

var seq__6613_8243 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__6614_8244 = null;
var count__6615_8245 = (0);
var i__6616_8246 = (0);
while(true){
if((i__6616_8246 < count__6615_8245)){
var scalar_8247 = chunk__6614_8244.cljs$core$IIndexed$_nth$arity$2(null,i__6616_8246);
nex.typechecker.env_add_class(env,scalar_8247,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_8247,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Any"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_8247,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_8247,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__8249 = seq__6613_8243;
var G__8250 = chunk__6614_8244;
var G__8251 = count__6615_8245;
var G__8252 = (i__6616_8246 + (1));
seq__6613_8243 = G__8249;
chunk__6614_8244 = G__8250;
count__6615_8245 = G__8251;
i__6616_8246 = G__8252;
continue;
} else {
var temp__5823__auto___8253 = cljs.core.seq(seq__6613_8243);
if(temp__5823__auto___8253){
var seq__6613_8254__$1 = temp__5823__auto___8253;
if(cljs.core.chunked_seq_QMARK_(seq__6613_8254__$1)){
var c__5673__auto___8255 = cljs.core.chunk_first(seq__6613_8254__$1);
var G__8256 = cljs.core.chunk_rest(seq__6613_8254__$1);
var G__8257 = c__5673__auto___8255;
var G__8258 = cljs.core.count(c__5673__auto___8255);
var G__8259 = (0);
seq__6613_8243 = G__8256;
chunk__6614_8244 = G__8257;
count__6615_8245 = G__8258;
i__6616_8246 = G__8259;
continue;
} else {
var scalar_8260 = cljs.core.first(seq__6613_8254__$1);
nex.typechecker.env_add_class(env,scalar_8260,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_8260,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Any"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_8260,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_8260,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__8268 = cljs.core.next(seq__6613_8254__$1);
var G__8269 = null;
var G__8270 = (0);
var G__8271 = (0);
seq__6613_8243 = G__8268;
chunk__6614_8244 = G__8269;
count__6615_8245 = G__8270;
i__6616_8246 = G__8271;
continue;
}
} else {
}
}
break;
}

var seq__6617_8272 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["bitwise_set","bitwise_or","bitwise_logical_right_shift","bitwise_unset","bitwise_and","bitwise_right_shift","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","bitwise_rotate_left","bitwise_xor"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)]));
var chunk__6618_8273 = null;
var count__6619_8274 = (0);
var i__6620_8275 = (0);
while(true){
if((i__6620_8275 < count__6619_8274)){
var vec__6627_8276 = chunk__6618_8273.cljs$core$IIndexed$_nth$arity$2(null,i__6620_8275);
var method_name_8277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627_8276,(0),null);
var sig_8278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6627_8276,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_8277,sig_8278);


var G__8279 = seq__6617_8272;
var G__8280 = chunk__6618_8273;
var G__8281 = count__6619_8274;
var G__8282 = (i__6620_8275 + (1));
seq__6617_8272 = G__8279;
chunk__6618_8273 = G__8280;
count__6619_8274 = G__8281;
i__6620_8275 = G__8282;
continue;
} else {
var temp__5823__auto___8283 = cljs.core.seq(seq__6617_8272);
if(temp__5823__auto___8283){
var seq__6617_8284__$1 = temp__5823__auto___8283;
if(cljs.core.chunked_seq_QMARK_(seq__6617_8284__$1)){
var c__5673__auto___8285 = cljs.core.chunk_first(seq__6617_8284__$1);
var G__8286 = cljs.core.chunk_rest(seq__6617_8284__$1);
var G__8287 = c__5673__auto___8285;
var G__8288 = cljs.core.count(c__5673__auto___8285);
var G__8289 = (0);
seq__6617_8272 = G__8286;
chunk__6618_8273 = G__8287;
count__6619_8274 = G__8288;
i__6620_8275 = G__8289;
continue;
} else {
var vec__6630_8290 = cljs.core.first(seq__6617_8284__$1);
var method_name_8291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6630_8290,(0),null);
var sig_8292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6630_8290,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_8291,sig_8292);


var G__8293 = cljs.core.next(seq__6617_8284__$1);
var G__8294 = null;
var G__8295 = (0);
var G__8296 = (0);
seq__6617_8272 = G__8293;
chunk__6618_8273 = G__8294;
count__6619_8274 = G__8295;
i__6620_8275 = G__8296;
continue;
}
} else {
}
}
break;
}

var seq__6633_8297 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__6634_8298 = null;
var count__6635_8299 = (0);
var i__6636_8300 = (0);
while(true){
if((i__6636_8300 < count__6635_8299)){
var vec__6643_8301 = chunk__6634_8298.cljs$core$IIndexed$_nth$arity$2(null,i__6636_8300);
var method_name_8302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6643_8301,(0),null);
var sig_8303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6643_8301,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_8302,sig_8303);


var G__8304 = seq__6633_8297;
var G__8305 = chunk__6634_8298;
var G__8306 = count__6635_8299;
var G__8307 = (i__6636_8300 + (1));
seq__6633_8297 = G__8304;
chunk__6634_8298 = G__8305;
count__6635_8299 = G__8306;
i__6636_8300 = G__8307;
continue;
} else {
var temp__5823__auto___8308 = cljs.core.seq(seq__6633_8297);
if(temp__5823__auto___8308){
var seq__6633_8309__$1 = temp__5823__auto___8308;
if(cljs.core.chunked_seq_QMARK_(seq__6633_8309__$1)){
var c__5673__auto___8310 = cljs.core.chunk_first(seq__6633_8309__$1);
var G__8311 = cljs.core.chunk_rest(seq__6633_8309__$1);
var G__8312 = c__5673__auto___8310;
var G__8313 = cljs.core.count(c__5673__auto___8310);
var G__8314 = (0);
seq__6633_8297 = G__8311;
chunk__6634_8298 = G__8312;
count__6635_8299 = G__8313;
i__6636_8300 = G__8314;
continue;
} else {
var vec__6646_8315 = cljs.core.first(seq__6633_8309__$1);
var method_name_8316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646_8315,(0),null);
var sig_8317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6646_8315,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_8316,sig_8317);


var G__8318 = cljs.core.next(seq__6633_8309__$1);
var G__8319 = null;
var G__8320 = (0);
var G__8321 = (0);
seq__6633_8297 = G__8318;
chunk__6634_8298 = G__8319;
count__6635_8299 = G__8320;
i__6636_8300 = G__8321;
continue;
}
} else {
}
}
break;
}

var seq__6649_8322 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__6650_8323 = null;
var count__6651_8324 = (0);
var i__6652_8325 = (0);
while(true){
if((i__6652_8325 < count__6651_8324)){
var vec__6659_8326 = chunk__6650_8323.cljs$core$IIndexed$_nth$arity$2(null,i__6652_8325);
var method_name_8327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6659_8326,(0),null);
var sig_8328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6659_8326,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_8327,sig_8328);


var G__8329 = seq__6649_8322;
var G__8330 = chunk__6650_8323;
var G__8331 = count__6651_8324;
var G__8332 = (i__6652_8325 + (1));
seq__6649_8322 = G__8329;
chunk__6650_8323 = G__8330;
count__6651_8324 = G__8331;
i__6652_8325 = G__8332;
continue;
} else {
var temp__5823__auto___8333 = cljs.core.seq(seq__6649_8322);
if(temp__5823__auto___8333){
var seq__6649_8334__$1 = temp__5823__auto___8333;
if(cljs.core.chunked_seq_QMARK_(seq__6649_8334__$1)){
var c__5673__auto___8335 = cljs.core.chunk_first(seq__6649_8334__$1);
var G__8336 = cljs.core.chunk_rest(seq__6649_8334__$1);
var G__8337 = c__5673__auto___8335;
var G__8338 = cljs.core.count(c__5673__auto___8335);
var G__8339 = (0);
seq__6649_8322 = G__8336;
chunk__6650_8323 = G__8337;
count__6651_8324 = G__8338;
i__6652_8325 = G__8339;
continue;
} else {
var vec__6662_8340 = cljs.core.first(seq__6649_8334__$1);
var method_name_8341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6662_8340,(0),null);
var sig_8342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6662_8340,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_8341,sig_8342);


var G__8343 = cljs.core.next(seq__6649_8334__$1);
var G__8344 = null;
var G__8345 = (0);
var G__8346 = (0);
seq__6649_8322 = G__8343;
chunk__6650_8323 = G__8344;
count__6651_8324 = G__8345;
i__6652_8325 = G__8346;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Task",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Task",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6665_8347 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 4, ["await",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"cancel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_done",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_cancelled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)], null));
var chunk__6666_8348 = null;
var count__6667_8349 = (0);
var i__6668_8350 = (0);
while(true){
if((i__6668_8350 < count__6667_8349)){
var vec__6675_8351 = chunk__6666_8348.cljs$core$IIndexed$_nth$arity$2(null,i__6668_8350);
var method_name_8352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6675_8351,(0),null);
var sig_8353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6675_8351,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_8352,sig_8353);


var G__8354 = seq__6665_8347;
var G__8355 = chunk__6666_8348;
var G__8356 = count__6667_8349;
var G__8357 = (i__6668_8350 + (1));
seq__6665_8347 = G__8354;
chunk__6666_8348 = G__8355;
count__6667_8349 = G__8356;
i__6668_8350 = G__8357;
continue;
} else {
var temp__5823__auto___8358 = cljs.core.seq(seq__6665_8347);
if(temp__5823__auto___8358){
var seq__6665_8359__$1 = temp__5823__auto___8358;
if(cljs.core.chunked_seq_QMARK_(seq__6665_8359__$1)){
var c__5673__auto___8360 = cljs.core.chunk_first(seq__6665_8359__$1);
var G__8361 = cljs.core.chunk_rest(seq__6665_8359__$1);
var G__8362 = c__5673__auto___8360;
var G__8363 = cljs.core.count(c__5673__auto___8360);
var G__8364 = (0);
seq__6665_8347 = G__8361;
chunk__6666_8348 = G__8362;
count__6667_8349 = G__8363;
i__6668_8350 = G__8364;
continue;
} else {
var vec__6678_8365 = cljs.core.first(seq__6665_8359__$1);
var method_name_8366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678_8365,(0),null);
var sig_8367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6678_8365,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_8366,sig_8367);


var G__8368 = cljs.core.next(seq__6665_8359__$1);
var G__8369 = null;
var G__8370 = (0);
var G__8371 = (0);
seq__6665_8347 = G__8368;
chunk__6666_8348 = G__8369;
count__6667_8349 = G__8370;
i__6668_8350 = G__8371;
continue;
}
} else {
}
}
break;
}

var seq__6681_8372 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__6682_8373 = null;
var count__6683_8374 = (0);
var i__6684_8375 = (0);
while(true){
if((i__6684_8375 < count__6683_8374)){
var vec__6691_8376 = chunk__6682_8373.cljs$core$IIndexed$_nth$arity$2(null,i__6684_8375);
var method_name_8377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6691_8376,(0),null);
var sig_8378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6691_8376,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_8377,sig_8378);


var G__8379 = seq__6681_8372;
var G__8380 = chunk__6682_8373;
var G__8381 = count__6683_8374;
var G__8382 = (i__6684_8375 + (1));
seq__6681_8372 = G__8379;
chunk__6682_8373 = G__8380;
count__6683_8374 = G__8381;
i__6684_8375 = G__8382;
continue;
} else {
var temp__5823__auto___8383 = cljs.core.seq(seq__6681_8372);
if(temp__5823__auto___8383){
var seq__6681_8384__$1 = temp__5823__auto___8383;
if(cljs.core.chunked_seq_QMARK_(seq__6681_8384__$1)){
var c__5673__auto___8385 = cljs.core.chunk_first(seq__6681_8384__$1);
var G__8386 = cljs.core.chunk_rest(seq__6681_8384__$1);
var G__8387 = c__5673__auto___8385;
var G__8388 = cljs.core.count(c__5673__auto___8385);
var G__8389 = (0);
seq__6681_8372 = G__8386;
chunk__6682_8373 = G__8387;
count__6683_8374 = G__8388;
i__6684_8375 = G__8389;
continue;
} else {
var vec__6694_8390 = cljs.core.first(seq__6681_8384__$1);
var method_name_8391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694_8390,(0),null);
var sig_8392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694_8390,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_8391,sig_8392);


var G__8393 = cljs.core.next(seq__6681_8384__$1);
var G__8394 = null;
var G__8395 = (0);
var G__8396 = (0);
seq__6681_8372 = G__8393;
chunk__6682_8373 = G__8394;
count__6683_8374 = G__8395;
i__6684_8375 = G__8396;
continue;
}
} else {
}
}
break;
}

var seq__6697_8397 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__6698_8398 = null;
var count__6699_8399 = (0);
var i__6700_8400 = (0);
while(true){
if((i__6700_8400 < count__6699_8399)){
var vec__6707_8401 = chunk__6698_8398.cljs$core$IIndexed$_nth$arity$2(null,i__6700_8400);
var method_name_8402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707_8401,(0),null);
var sig_8403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6707_8401,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8402,sig_8403);


var G__8404 = seq__6697_8397;
var G__8405 = chunk__6698_8398;
var G__8406 = count__6699_8399;
var G__8407 = (i__6700_8400 + (1));
seq__6697_8397 = G__8404;
chunk__6698_8398 = G__8405;
count__6699_8399 = G__8406;
i__6700_8400 = G__8407;
continue;
} else {
var temp__5823__auto___8408 = cljs.core.seq(seq__6697_8397);
if(temp__5823__auto___8408){
var seq__6697_8409__$1 = temp__5823__auto___8408;
if(cljs.core.chunked_seq_QMARK_(seq__6697_8409__$1)){
var c__5673__auto___8410 = cljs.core.chunk_first(seq__6697_8409__$1);
var G__8411 = cljs.core.chunk_rest(seq__6697_8409__$1);
var G__8412 = c__5673__auto___8410;
var G__8413 = cljs.core.count(c__5673__auto___8410);
var G__8414 = (0);
seq__6697_8397 = G__8411;
chunk__6698_8398 = G__8412;
count__6699_8399 = G__8413;
i__6700_8400 = G__8414;
continue;
} else {
var vec__6710_8415 = cljs.core.first(seq__6697_8409__$1);
var method_name_8416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6710_8415,(0),null);
var sig_8417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6710_8415,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_8416,sig_8417);


var G__8418 = cljs.core.next(seq__6697_8409__$1);
var G__8419 = null;
var G__8420 = (0);
var G__8421 = (0);
seq__6697_8397 = G__8418;
chunk__6698_8398 = G__8419;
count__6699_8399 = G__8420;
i__6700_8400 = G__8421;
continue;
}
} else {
}
}
break;
}

var seq__6713_8422 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6714_8423 = null;
var count__6715_8424 = (0);
var i__6716_8425 = (0);
while(true){
if((i__6716_8425 < count__6715_8424)){
var vec__6723_8426 = chunk__6714_8423.cljs$core$IIndexed$_nth$arity$2(null,i__6716_8425);
var method_name_8427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6723_8426,(0),null);
var sig_8428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6723_8426,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8427,sig_8428);


var G__8429 = seq__6713_8422;
var G__8430 = chunk__6714_8423;
var G__8431 = count__6715_8424;
var G__8432 = (i__6716_8425 + (1));
seq__6713_8422 = G__8429;
chunk__6714_8423 = G__8430;
count__6715_8424 = G__8431;
i__6716_8425 = G__8432;
continue;
} else {
var temp__5823__auto___8433 = cljs.core.seq(seq__6713_8422);
if(temp__5823__auto___8433){
var seq__6713_8434__$1 = temp__5823__auto___8433;
if(cljs.core.chunked_seq_QMARK_(seq__6713_8434__$1)){
var c__5673__auto___8435 = cljs.core.chunk_first(seq__6713_8434__$1);
var G__8436 = cljs.core.chunk_rest(seq__6713_8434__$1);
var G__8437 = c__5673__auto___8435;
var G__8438 = cljs.core.count(c__5673__auto___8435);
var G__8439 = (0);
seq__6713_8422 = G__8436;
chunk__6714_8423 = G__8437;
count__6715_8424 = G__8438;
i__6716_8425 = G__8439;
continue;
} else {
var vec__6726_8440 = cljs.core.first(seq__6713_8434__$1);
var method_name_8441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6726_8440,(0),null);
var sig_8442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6726_8440,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_8441,sig_8442);


var G__8443 = cljs.core.next(seq__6713_8434__$1);
var G__8444 = null;
var G__8445 = (0);
var G__8446 = (0);
seq__6713_8422 = G__8443;
chunk__6714_8423 = G__8444;
count__6715_8424 = G__8445;
i__6716_8425 = G__8446;
continue;
}
} else {
}
}
break;
}

var seq__6729_8447 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__6730_8448 = null;
var count__6731_8449 = (0);
var i__6732_8450 = (0);
while(true){
if((i__6732_8450 < count__6731_8449)){
var vec__6739_8451 = chunk__6730_8448.cljs$core$IIndexed$_nth$arity$2(null,i__6732_8450);
var method_name_8452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6739_8451,(0),null);
var sig_8453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6739_8451,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8452,sig_8453);


var G__8454 = seq__6729_8447;
var G__8455 = chunk__6730_8448;
var G__8456 = count__6731_8449;
var G__8457 = (i__6732_8450 + (1));
seq__6729_8447 = G__8454;
chunk__6730_8448 = G__8455;
count__6731_8449 = G__8456;
i__6732_8450 = G__8457;
continue;
} else {
var temp__5823__auto___8458 = cljs.core.seq(seq__6729_8447);
if(temp__5823__auto___8458){
var seq__6729_8459__$1 = temp__5823__auto___8458;
if(cljs.core.chunked_seq_QMARK_(seq__6729_8459__$1)){
var c__5673__auto___8460 = cljs.core.chunk_first(seq__6729_8459__$1);
var G__8461 = cljs.core.chunk_rest(seq__6729_8459__$1);
var G__8462 = c__5673__auto___8460;
var G__8463 = cljs.core.count(c__5673__auto___8460);
var G__8464 = (0);
seq__6729_8447 = G__8461;
chunk__6730_8448 = G__8462;
count__6731_8449 = G__8463;
i__6732_8450 = G__8464;
continue;
} else {
var vec__6742_8465 = cljs.core.first(seq__6729_8459__$1);
var method_name_8466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6742_8465,(0),null);
var sig_8467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6742_8465,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_8466,sig_8467);


var G__8468 = cljs.core.next(seq__6729_8459__$1);
var G__8469 = null;
var G__8470 = (0);
var G__8471 = (0);
seq__6729_8447 = G__8468;
chunk__6730_8448 = G__8469;
count__6731_8449 = G__8470;
i__6732_8450 = G__8471;
continue;
}
} else {
}
}
break;
}

var seq__6745_8472 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6746_8473 = null;
var count__6747_8474 = (0);
var i__6748_8475 = (0);
while(true){
if((i__6748_8475 < count__6747_8474)){
var vec__6755_8476 = chunk__6746_8473.cljs$core$IIndexed$_nth$arity$2(null,i__6748_8475);
var method_name_8477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755_8476,(0),null);
var sig_8478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755_8476,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8477,sig_8478);


var G__8479 = seq__6745_8472;
var G__8480 = chunk__6746_8473;
var G__8481 = count__6747_8474;
var G__8482 = (i__6748_8475 + (1));
seq__6745_8472 = G__8479;
chunk__6746_8473 = G__8480;
count__6747_8474 = G__8481;
i__6748_8475 = G__8482;
continue;
} else {
var temp__5823__auto___8483 = cljs.core.seq(seq__6745_8472);
if(temp__5823__auto___8483){
var seq__6745_8484__$1 = temp__5823__auto___8483;
if(cljs.core.chunked_seq_QMARK_(seq__6745_8484__$1)){
var c__5673__auto___8485 = cljs.core.chunk_first(seq__6745_8484__$1);
var G__8486 = cljs.core.chunk_rest(seq__6745_8484__$1);
var G__8487 = c__5673__auto___8485;
var G__8488 = cljs.core.count(c__5673__auto___8485);
var G__8489 = (0);
seq__6745_8472 = G__8486;
chunk__6746_8473 = G__8487;
count__6747_8474 = G__8488;
i__6748_8475 = G__8489;
continue;
} else {
var vec__6758_8490 = cljs.core.first(seq__6745_8484__$1);
var method_name_8491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6758_8490,(0),null);
var sig_8492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6758_8490,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_8491,sig_8492);


var G__8493 = cljs.core.next(seq__6745_8484__$1);
var G__8494 = null;
var G__8495 = (0);
var G__8496 = (0);
seq__6745_8472 = G__8493;
chunk__6746_8473 = G__8494;
count__6747_8474 = G__8495;
i__6748_8475 = G__8496;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6761_8497 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","reverse","contains","push","sort","cursor","remove","length","last","join","slice","clone","add","set","size","index_of","get","equals","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__6762_8498 = null;
var count__6763_8499 = (0);
var i__6764_8500 = (0);
while(true){
if((i__6764_8500 < count__6763_8499)){
var vec__6771_8501 = chunk__6762_8498.cljs$core$IIndexed$_nth$arity$2(null,i__6764_8500);
var method_name_8502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6771_8501,(0),null);
var sig_8503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6771_8501,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8502,sig_8503);


var G__8504 = seq__6761_8497;
var G__8505 = chunk__6762_8498;
var G__8506 = count__6763_8499;
var G__8507 = (i__6764_8500 + (1));
seq__6761_8497 = G__8504;
chunk__6762_8498 = G__8505;
count__6763_8499 = G__8506;
i__6764_8500 = G__8507;
continue;
} else {
var temp__5823__auto___8508 = cljs.core.seq(seq__6761_8497);
if(temp__5823__auto___8508){
var seq__6761_8509__$1 = temp__5823__auto___8508;
if(cljs.core.chunked_seq_QMARK_(seq__6761_8509__$1)){
var c__5673__auto___8510 = cljs.core.chunk_first(seq__6761_8509__$1);
var G__8511 = cljs.core.chunk_rest(seq__6761_8509__$1);
var G__8512 = c__5673__auto___8510;
var G__8513 = cljs.core.count(c__5673__auto___8510);
var G__8514 = (0);
seq__6761_8497 = G__8511;
chunk__6762_8498 = G__8512;
count__6763_8499 = G__8513;
i__6764_8500 = G__8514;
continue;
} else {
var vec__6774_8515 = cljs.core.first(seq__6761_8509__$1);
var method_name_8516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6774_8515,(0),null);
var sig_8517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6774_8515,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_8516,sig_8517);


var G__8518 = cljs.core.next(seq__6761_8509__$1);
var G__8519 = null;
var G__8520 = (0);
var G__8521 = (0);
seq__6761_8497 = G__8518;
chunk__6762_8498 = G__8519;
count__6763_8499 = G__8520;
i__6764_8500 = G__8521;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__6777_8522 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","to_string","try_get","cursor","remove","clone","set","size","get","equals","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K","V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K","V"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__6778_8523 = null;
var count__6779_8524 = (0);
var i__6780_8525 = (0);
while(true){
if((i__6780_8525 < count__6779_8524)){
var vec__6787_8526 = chunk__6778_8523.cljs$core$IIndexed$_nth$arity$2(null,i__6780_8525);
var method_name_8527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6787_8526,(0),null);
var sig_8528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6787_8526,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8527,sig_8528);


var G__8529 = seq__6777_8522;
var G__8530 = chunk__6778_8523;
var G__8531 = count__6779_8524;
var G__8532 = (i__6780_8525 + (1));
seq__6777_8522 = G__8529;
chunk__6778_8523 = G__8530;
count__6779_8524 = G__8531;
i__6780_8525 = G__8532;
continue;
} else {
var temp__5823__auto___8533 = cljs.core.seq(seq__6777_8522);
if(temp__5823__auto___8533){
var seq__6777_8534__$1 = temp__5823__auto___8533;
if(cljs.core.chunked_seq_QMARK_(seq__6777_8534__$1)){
var c__5673__auto___8535 = cljs.core.chunk_first(seq__6777_8534__$1);
var G__8536 = cljs.core.chunk_rest(seq__6777_8534__$1);
var G__8537 = c__5673__auto___8535;
var G__8538 = cljs.core.count(c__5673__auto___8535);
var G__8539 = (0);
seq__6777_8522 = G__8536;
chunk__6778_8523 = G__8537;
count__6779_8524 = G__8538;
i__6780_8525 = G__8539;
continue;
} else {
var vec__6790_8540 = cljs.core.first(seq__6777_8534__$1);
var method_name_8541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6790_8540,(0),null);
var sig_8542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6790_8540,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_8541,sig_8542);


var G__8543 = cljs.core.next(seq__6777_8534__$1);
var G__8544 = null;
var G__8545 = (0);
var G__8546 = (0);
seq__6777_8522 = G__8543;
chunk__6778_8523 = G__8544;
count__6779_8524 = G__8545;
i__6780_8525 = G__8546;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Set",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

nex.typechecker.env_add_method(env,"Set","from_array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"values",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null));

var seq__6793_8547 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","contains","union","cursor","intersection","clone","size","difference","equals","symmetric_difference"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)]));
var chunk__6794_8548 = null;
var count__6795_8549 = (0);
var i__6796_8550 = (0);
while(true){
if((i__6796_8550 < count__6795_8549)){
var vec__6803_8551 = chunk__6794_8548.cljs$core$IIndexed$_nth$arity$2(null,i__6796_8550);
var method_name_8552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803_8551,(0),null);
var sig_8553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803_8551,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_8552,sig_8553);


var G__8554 = seq__6793_8547;
var G__8555 = chunk__6794_8548;
var G__8556 = count__6795_8549;
var G__8557 = (i__6796_8550 + (1));
seq__6793_8547 = G__8554;
chunk__6794_8548 = G__8555;
count__6795_8549 = G__8556;
i__6796_8550 = G__8557;
continue;
} else {
var temp__5823__auto___8558 = cljs.core.seq(seq__6793_8547);
if(temp__5823__auto___8558){
var seq__6793_8559__$1 = temp__5823__auto___8558;
if(cljs.core.chunked_seq_QMARK_(seq__6793_8559__$1)){
var c__5673__auto___8560 = cljs.core.chunk_first(seq__6793_8559__$1);
var G__8561 = cljs.core.chunk_rest(seq__6793_8559__$1);
var G__8562 = c__5673__auto___8560;
var G__8563 = cljs.core.count(c__5673__auto___8560);
var G__8564 = (0);
seq__6793_8547 = G__8561;
chunk__6794_8548 = G__8562;
count__6795_8549 = G__8563;
i__6796_8550 = G__8564;
continue;
} else {
var vec__6806_8565 = cljs.core.first(seq__6793_8559__$1);
var method_name_8566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806_8565,(0),null);
var sig_8567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806_8565,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_8566,sig_8567);


var G__8568 = cljs.core.next(seq__6793_8559__$1);
var G__8569 = null;
var G__8570 = (0);
var G__8571 = (0);
seq__6793_8547 = G__8568;
chunk__6794_8548 = G__8569;
count__6795_8549 = G__8570;
i__6796_8550 = G__8571;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Channel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Channel",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__6809_8572 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"try_send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"try_receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"T",new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"is_closed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"capacity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__6810_8573 = null;
var count__6811_8574 = (0);
var i__6812_8575 = (0);
while(true){
if((i__6812_8575 < count__6811_8574)){
var vec__6819_8576 = chunk__6810_8573.cljs$core$IIndexed$_nth$arity$2(null,i__6812_8575);
var method_name_8577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6819_8576,(0),null);
var sig_8578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6819_8576,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_8577,sig_8578);


var G__8579 = seq__6809_8572;
var G__8580 = chunk__6810_8573;
var G__8581 = count__6811_8574;
var G__8582 = (i__6812_8575 + (1));
seq__6809_8572 = G__8579;
chunk__6810_8573 = G__8580;
count__6811_8574 = G__8581;
i__6812_8575 = G__8582;
continue;
} else {
var temp__5823__auto___8583 = cljs.core.seq(seq__6809_8572);
if(temp__5823__auto___8583){
var seq__6809_8584__$1 = temp__5823__auto___8583;
if(cljs.core.chunked_seq_QMARK_(seq__6809_8584__$1)){
var c__5673__auto___8585 = cljs.core.chunk_first(seq__6809_8584__$1);
var G__8586 = cljs.core.chunk_rest(seq__6809_8584__$1);
var G__8587 = c__5673__auto___8585;
var G__8588 = cljs.core.count(c__5673__auto___8585);
var G__8589 = (0);
seq__6809_8572 = G__8586;
chunk__6810_8573 = G__8587;
count__6811_8574 = G__8588;
i__6812_8575 = G__8589;
continue;
} else {
var vec__6822_8590 = cljs.core.first(seq__6809_8584__$1);
var method_name_8591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822_8590,(0),null);
var sig_8592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6822_8590,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_8591,sig_8592);


var G__8593 = cljs.core.next(seq__6809_8584__$1);
var G__8594 = null;
var G__8595 = (0);
var G__8596 = (0);
seq__6809_8572 = G__8593;
chunk__6810_8573 = G__8594;
count__6811_8574 = G__8595;
i__6812_8575 = G__8596;
continue;
}
} else {
}
}
break;
}

var seq__6825 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__6826 = null;
var count__6827 = (0);
var i__6828 = (0);
while(true){
if((i__6828 < count__6827)){
var n = chunk__6826.cljs$core$IIndexed$_nth$arity$2(null,i__6828);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6825,chunk__6826,count__6827,i__6828,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6825,chunk__6826,count__6827,i__6828,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8597 = seq__6825;
var G__8598 = chunk__6826;
var G__8599 = count__6827;
var G__8600 = (i__6828 + (1));
seq__6825 = G__8597;
chunk__6826 = G__8598;
count__6827 = G__8599;
i__6828 = G__8600;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6825);
if(temp__5823__auto__){
var seq__6825__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6825__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6825__$1);
var G__8601 = cljs.core.chunk_rest(seq__6825__$1);
var G__8602 = c__5673__auto__;
var G__8603 = cljs.core.count(c__5673__auto__);
var G__8604 = (0);
seq__6825 = G__8601;
chunk__6826 = G__8602;
count__6827 = G__8603;
i__6828 = G__8604;
continue;
} else {
var n = cljs.core.first(seq__6825__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__6825,chunk__6826,count__6827,i__6828,n,seq__6825__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__6825,chunk__6826,count__6827,i__6828,n,seq__6825__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__8605 = cljs.core.next(seq__6825__$1);
var G__8606 = null;
var G__8607 = (0);
var G__8608 = (0);
seq__6825 = G__8605;
chunk__6826 = G__8606;
count__6827 = G__8607;
i__6828 = G__8608;
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
var G__6830 = arguments.length;
switch (G__6830) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__6831,opts){
var map__6832 = p__6831;
var map__6832__$1 = cljs.core.__destructure_map(map__6832);
var program = map__6832__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6832__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6832__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6832__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6832__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6832__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__6834_8610 = cljs.core.seq(imports);
var chunk__6835_8611 = null;
var count__6836_8612 = (0);
var i__6837_8613 = (0);
while(true){
if((i__6837_8613 < count__6836_8612)){
var map__6840_8614 = chunk__6835_8611.cljs$core$IIndexed$_nth$arity$2(null,i__6837_8613);
var map__6840_8615__$1 = cljs.core.__destructure_map(map__6840_8614);
var qualified_name_8616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6840_8615__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6840_8615__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8617 == null)){
var simple_name_8618 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8616,/\./));
nex.typechecker.env_add_class(env,simple_name_8618,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8618,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8616], null));
} else {
}


var G__8619 = seq__6834_8610;
var G__8620 = chunk__6835_8611;
var G__8621 = count__6836_8612;
var G__8622 = (i__6837_8613 + (1));
seq__6834_8610 = G__8619;
chunk__6835_8611 = G__8620;
count__6836_8612 = G__8621;
i__6837_8613 = G__8622;
continue;
} else {
var temp__5823__auto___8623 = cljs.core.seq(seq__6834_8610);
if(temp__5823__auto___8623){
var seq__6834_8624__$1 = temp__5823__auto___8623;
if(cljs.core.chunked_seq_QMARK_(seq__6834_8624__$1)){
var c__5673__auto___8625 = cljs.core.chunk_first(seq__6834_8624__$1);
var G__8626 = cljs.core.chunk_rest(seq__6834_8624__$1);
var G__8627 = c__5673__auto___8625;
var G__8628 = cljs.core.count(c__5673__auto___8625);
var G__8629 = (0);
seq__6834_8610 = G__8626;
chunk__6835_8611 = G__8627;
count__6836_8612 = G__8628;
i__6837_8613 = G__8629;
continue;
} else {
var map__6841_8630 = cljs.core.first(seq__6834_8624__$1);
var map__6841_8631__$1 = cljs.core.__destructure_map(map__6841_8630);
var qualified_name_8632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6841_8631__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6841_8631__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8633 == null)){
var simple_name_8634 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8632,/\./));
nex.typechecker.env_add_class(env,simple_name_8634,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8634,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8632], null));
} else {
}


var G__8635 = cljs.core.next(seq__6834_8624__$1);
var G__8636 = null;
var G__8637 = (0);
var G__8638 = (0);
seq__6834_8610 = G__8635;
chunk__6835_8611 = G__8636;
count__6836_8612 = G__8637;
i__6837_8613 = G__8638;
continue;
}
} else {
}
}
break;
}

var seq__6842_8639 = cljs.core.seq(classes);
var chunk__6843_8640 = null;
var count__6844_8641 = (0);
var i__6845_8642 = (0);
while(true){
if((i__6845_8642 < count__6844_8641)){
var class_def_8643 = chunk__6843_8640.cljs$core$IIndexed$_nth$arity$2(null,i__6845_8642);
nex.typechecker.collect_class_info(env,class_def_8643);


var G__8644 = seq__6842_8639;
var G__8645 = chunk__6843_8640;
var G__8646 = count__6844_8641;
var G__8647 = (i__6845_8642 + (1));
seq__6842_8639 = G__8644;
chunk__6843_8640 = G__8645;
count__6844_8641 = G__8646;
i__6845_8642 = G__8647;
continue;
} else {
var temp__5823__auto___8648 = cljs.core.seq(seq__6842_8639);
if(temp__5823__auto___8648){
var seq__6842_8649__$1 = temp__5823__auto___8648;
if(cljs.core.chunked_seq_QMARK_(seq__6842_8649__$1)){
var c__5673__auto___8650 = cljs.core.chunk_first(seq__6842_8649__$1);
var G__8651 = cljs.core.chunk_rest(seq__6842_8649__$1);
var G__8652 = c__5673__auto___8650;
var G__8653 = cljs.core.count(c__5673__auto___8650);
var G__8654 = (0);
seq__6842_8639 = G__8651;
chunk__6843_8640 = G__8652;
count__6844_8641 = G__8653;
i__6845_8642 = G__8654;
continue;
} else {
var class_def_8655 = cljs.core.first(seq__6842_8649__$1);
nex.typechecker.collect_class_info(env,class_def_8655);


var G__8656 = cljs.core.next(seq__6842_8649__$1);
var G__8657 = null;
var G__8658 = (0);
var G__8659 = (0);
seq__6842_8639 = G__8656;
chunk__6843_8640 = G__8657;
count__6844_8641 = G__8658;
i__6845_8642 = G__8659;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6846_8660 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6847_8661 = null;
var count__6848_8662 = (0);
var i__6849_8663 = (0);
while(true){
if((i__6849_8663 < count__6848_8662)){
var vec__6856_8664 = chunk__6847_8661.cljs$core$IIndexed$_nth$arity$2(null,i__6849_8663);
var var_name_8665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6856_8664,(0),null);
var var_type_8666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6856_8664,(1),null);
nex.typechecker.env_add_var(env,var_name_8665,var_type_8666);


var G__8667 = seq__6846_8660;
var G__8668 = chunk__6847_8661;
var G__8669 = count__6848_8662;
var G__8670 = (i__6849_8663 + (1));
seq__6846_8660 = G__8667;
chunk__6847_8661 = G__8668;
count__6848_8662 = G__8669;
i__6849_8663 = G__8670;
continue;
} else {
var temp__5823__auto___8671 = cljs.core.seq(seq__6846_8660);
if(temp__5823__auto___8671){
var seq__6846_8672__$1 = temp__5823__auto___8671;
if(cljs.core.chunked_seq_QMARK_(seq__6846_8672__$1)){
var c__5673__auto___8673 = cljs.core.chunk_first(seq__6846_8672__$1);
var G__8674 = cljs.core.chunk_rest(seq__6846_8672__$1);
var G__8675 = c__5673__auto___8673;
var G__8676 = cljs.core.count(c__5673__auto___8673);
var G__8677 = (0);
seq__6846_8660 = G__8674;
chunk__6847_8661 = G__8675;
count__6848_8662 = G__8676;
i__6849_8663 = G__8677;
continue;
} else {
var vec__6859_8678 = cljs.core.first(seq__6846_8672__$1);
var var_name_8679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6859_8678,(0),null);
var var_type_8680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6859_8678,(1),null);
nex.typechecker.env_add_var(env,var_name_8679,var_type_8680);


var G__8681 = cljs.core.next(seq__6846_8672__$1);
var G__8682 = null;
var G__8683 = (0);
var G__8684 = (0);
seq__6846_8660 = G__8681;
chunk__6847_8661 = G__8682;
count__6848_8662 = G__8683;
i__6849_8663 = G__8684;
continue;
}
} else {
}
}
break;
}

var seq__6862_8685 = cljs.core.seq(functions);
var chunk__6863_8686 = null;
var count__6864_8687 = (0);
var i__6865_8688 = (0);
while(true){
if((i__6865_8688 < count__6864_8687)){
var fn_def_8689 = chunk__6863_8686.cljs$core$IIndexed$_nth$arity$2(null,i__6865_8688);
var arity_8690 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8689));
if((arity_8690 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8689))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8689))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8689),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8689));


var G__8691 = seq__6862_8685;
var G__8692 = chunk__6863_8686;
var G__8693 = count__6864_8687;
var G__8694 = (i__6865_8688 + (1));
seq__6862_8685 = G__8691;
chunk__6863_8686 = G__8692;
count__6864_8687 = G__8693;
i__6865_8688 = G__8694;
continue;
} else {
var temp__5823__auto___8695 = cljs.core.seq(seq__6862_8685);
if(temp__5823__auto___8695){
var seq__6862_8696__$1 = temp__5823__auto___8695;
if(cljs.core.chunked_seq_QMARK_(seq__6862_8696__$1)){
var c__5673__auto___8697 = cljs.core.chunk_first(seq__6862_8696__$1);
var G__8698 = cljs.core.chunk_rest(seq__6862_8696__$1);
var G__8699 = c__5673__auto___8697;
var G__8700 = cljs.core.count(c__5673__auto___8697);
var G__8701 = (0);
seq__6862_8685 = G__8698;
chunk__6863_8686 = G__8699;
count__6864_8687 = G__8700;
i__6865_8688 = G__8701;
continue;
} else {
var fn_def_8702 = cljs.core.first(seq__6862_8696__$1);
var arity_8703 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_8702));
if((arity_8703 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8702))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8702))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_8702),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_8702));


var G__8704 = cljs.core.next(seq__6862_8696__$1);
var G__8705 = null;
var G__8706 = (0);
var G__8707 = (0);
seq__6862_8685 = G__8704;
chunk__6863_8686 = G__8705;
count__6864_8687 = G__8706;
i__6865_8688 = G__8707;
continue;
}
} else {
}
}
break;
}

var seq__6866_8708 = cljs.core.seq(classes);
var chunk__6867_8709 = null;
var count__6868_8710 = (0);
var i__6869_8711 = (0);
while(true){
if((i__6869_8711 < count__6868_8710)){
var class_def_8712 = chunk__6867_8709.cljs$core$IIndexed$_nth$arity$2(null,i__6869_8711);
nex.typechecker.check_class(env,class_def_8712);


var G__8713 = seq__6866_8708;
var G__8714 = chunk__6867_8709;
var G__8715 = count__6868_8710;
var G__8716 = (i__6869_8711 + (1));
seq__6866_8708 = G__8713;
chunk__6867_8709 = G__8714;
count__6868_8710 = G__8715;
i__6869_8711 = G__8716;
continue;
} else {
var temp__5823__auto___8717 = cljs.core.seq(seq__6866_8708);
if(temp__5823__auto___8717){
var seq__6866_8718__$1 = temp__5823__auto___8717;
if(cljs.core.chunked_seq_QMARK_(seq__6866_8718__$1)){
var c__5673__auto___8719 = cljs.core.chunk_first(seq__6866_8718__$1);
var G__8720 = cljs.core.chunk_rest(seq__6866_8718__$1);
var G__8721 = c__5673__auto___8719;
var G__8722 = cljs.core.count(c__5673__auto___8719);
var G__8723 = (0);
seq__6866_8708 = G__8720;
chunk__6867_8709 = G__8721;
count__6868_8710 = G__8722;
i__6869_8711 = G__8723;
continue;
} else {
var class_def_8724 = cljs.core.first(seq__6866_8718__$1);
nex.typechecker.check_class(env,class_def_8724);


var G__8725 = cljs.core.next(seq__6866_8718__$1);
var G__8726 = null;
var G__8727 = (0);
var G__8728 = (0);
seq__6866_8708 = G__8725;
chunk__6867_8709 = G__8726;
count__6868_8710 = G__8727;
i__6869_8711 = G__8728;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__6870_8729 = cljs.core.seq(statements);
var chunk__6871_8730 = null;
var count__6872_8731 = (0);
var i__6873_8732 = (0);
while(true){
if((i__6873_8732 < count__6872_8731)){
var stmt_8733 = chunk__6871_8730.cljs$core$IIndexed$_nth$arity$2(null,i__6873_8732);
nex.typechecker.check_statement(env,stmt_8733);


var G__8734 = seq__6870_8729;
var G__8735 = chunk__6871_8730;
var G__8736 = count__6872_8731;
var G__8737 = (i__6873_8732 + (1));
seq__6870_8729 = G__8734;
chunk__6871_8730 = G__8735;
count__6872_8731 = G__8736;
i__6873_8732 = G__8737;
continue;
} else {
var temp__5823__auto___8738 = cljs.core.seq(seq__6870_8729);
if(temp__5823__auto___8738){
var seq__6870_8739__$1 = temp__5823__auto___8738;
if(cljs.core.chunked_seq_QMARK_(seq__6870_8739__$1)){
var c__5673__auto___8740 = cljs.core.chunk_first(seq__6870_8739__$1);
var G__8741 = cljs.core.chunk_rest(seq__6870_8739__$1);
var G__8742 = c__5673__auto___8740;
var G__8743 = cljs.core.count(c__5673__auto___8740);
var G__8744 = (0);
seq__6870_8729 = G__8741;
chunk__6871_8730 = G__8742;
count__6872_8731 = G__8743;
i__6873_8732 = G__8744;
continue;
} else {
var stmt_8745 = cljs.core.first(seq__6870_8739__$1);
nex.typechecker.check_statement(env,stmt_8745);


var G__8746 = cljs.core.next(seq__6870_8739__$1);
var G__8747 = null;
var G__8748 = (0);
var G__8749 = (0);
seq__6870_8729 = G__8746;
chunk__6871_8730 = G__8747;
count__6872_8731 = G__8748;
i__6873_8732 = G__8749;
continue;
}
} else {
}
}
break;
}
} else {
var seq__6874_8750 = cljs.core.seq(calls);
var chunk__6875_8751 = null;
var count__6876_8752 = (0);
var i__6877_8753 = (0);
while(true){
if((i__6877_8753 < count__6876_8752)){
var call_8754 = chunk__6875_8751.cljs$core$IIndexed$_nth$arity$2(null,i__6877_8753);
nex.typechecker.check_expression(env,call_8754);


var G__8755 = seq__6874_8750;
var G__8756 = chunk__6875_8751;
var G__8757 = count__6876_8752;
var G__8758 = (i__6877_8753 + (1));
seq__6874_8750 = G__8755;
chunk__6875_8751 = G__8756;
count__6876_8752 = G__8757;
i__6877_8753 = G__8758;
continue;
} else {
var temp__5823__auto___8759 = cljs.core.seq(seq__6874_8750);
if(temp__5823__auto___8759){
var seq__6874_8760__$1 = temp__5823__auto___8759;
if(cljs.core.chunked_seq_QMARK_(seq__6874_8760__$1)){
var c__5673__auto___8761 = cljs.core.chunk_first(seq__6874_8760__$1);
var G__8762 = cljs.core.chunk_rest(seq__6874_8760__$1);
var G__8763 = c__5673__auto___8761;
var G__8764 = cljs.core.count(c__5673__auto___8761);
var G__8765 = (0);
seq__6874_8750 = G__8762;
chunk__6875_8751 = G__8763;
count__6876_8752 = G__8764;
i__6877_8753 = G__8765;
continue;
} else {
var call_8766 = cljs.core.first(seq__6874_8760__$1);
nex.typechecker.check_expression(env,call_8766);


var G__8767 = cljs.core.next(seq__6874_8760__$1);
var G__8768 = null;
var G__8769 = (0);
var G__8770 = (0);
seq__6874_8750 = G__8767;
chunk__6875_8751 = G__8768;
count__6876_8752 = G__8769;
i__6877_8753 = G__8770;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e6833){var e = e6833;
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
var G__6879 = arguments.length;
switch (G__6879) {
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
var seq__6881_8772 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6882_8773 = null;
var count__6883_8774 = (0);
var i__6884_8775 = (0);
while(true){
if((i__6884_8775 < count__6883_8774)){
var map__6887_8776 = chunk__6882_8773.cljs$core$IIndexed$_nth$arity$2(null,i__6884_8775);
var map__6887_8777__$1 = cljs.core.__destructure_map(map__6887_8776);
var qualified_name_8778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6887_8777__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6887_8777__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8779 == null)){
var simple_name_8780 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8778,/\./));
nex.typechecker.env_add_class(env,simple_name_8780,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8780,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8778], null));
} else {
}


var G__8781 = seq__6881_8772;
var G__8782 = chunk__6882_8773;
var G__8783 = count__6883_8774;
var G__8784 = (i__6884_8775 + (1));
seq__6881_8772 = G__8781;
chunk__6882_8773 = G__8782;
count__6883_8774 = G__8783;
i__6884_8775 = G__8784;
continue;
} else {
var temp__5823__auto___8785 = cljs.core.seq(seq__6881_8772);
if(temp__5823__auto___8785){
var seq__6881_8786__$1 = temp__5823__auto___8785;
if(cljs.core.chunked_seq_QMARK_(seq__6881_8786__$1)){
var c__5673__auto___8787 = cljs.core.chunk_first(seq__6881_8786__$1);
var G__8788 = cljs.core.chunk_rest(seq__6881_8786__$1);
var G__8789 = c__5673__auto___8787;
var G__8790 = cljs.core.count(c__5673__auto___8787);
var G__8791 = (0);
seq__6881_8772 = G__8788;
chunk__6882_8773 = G__8789;
count__6883_8774 = G__8790;
i__6884_8775 = G__8791;
continue;
} else {
var map__6888_8792 = cljs.core.first(seq__6881_8786__$1);
var map__6888_8793__$1 = cljs.core.__destructure_map(map__6888_8792);
var qualified_name_8794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6888_8793__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_8795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6888_8793__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_8795 == null)){
var simple_name_8796 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_8794,/\./));
nex.typechecker.env_add_class(env,simple_name_8796,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_8796,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_8794], null));
} else {
}


var G__8797 = cljs.core.next(seq__6881_8786__$1);
var G__8798 = null;
var G__8799 = (0);
var G__8800 = (0);
seq__6881_8772 = G__8797;
chunk__6882_8773 = G__8798;
count__6883_8774 = G__8799;
i__6884_8775 = G__8800;
continue;
}
} else {
}
}
break;
}

var seq__6889_8801 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6890_8802 = null;
var count__6891_8803 = (0);
var i__6892_8804 = (0);
while(true){
if((i__6892_8804 < count__6891_8803)){
var class_def_8805 = chunk__6890_8802.cljs$core$IIndexed$_nth$arity$2(null,i__6892_8804);
nex.typechecker.collect_class_info(env,class_def_8805);


var G__8806 = seq__6889_8801;
var G__8807 = chunk__6890_8802;
var G__8808 = count__6891_8803;
var G__8809 = (i__6892_8804 + (1));
seq__6889_8801 = G__8806;
chunk__6890_8802 = G__8807;
count__6891_8803 = G__8808;
i__6892_8804 = G__8809;
continue;
} else {
var temp__5823__auto___8810 = cljs.core.seq(seq__6889_8801);
if(temp__5823__auto___8810){
var seq__6889_8811__$1 = temp__5823__auto___8810;
if(cljs.core.chunked_seq_QMARK_(seq__6889_8811__$1)){
var c__5673__auto___8812 = cljs.core.chunk_first(seq__6889_8811__$1);
var G__8813 = cljs.core.chunk_rest(seq__6889_8811__$1);
var G__8814 = c__5673__auto___8812;
var G__8815 = cljs.core.count(c__5673__auto___8812);
var G__8816 = (0);
seq__6889_8801 = G__8813;
chunk__6890_8802 = G__8814;
count__6891_8803 = G__8815;
i__6892_8804 = G__8816;
continue;
} else {
var class_def_8817 = cljs.core.first(seq__6889_8811__$1);
nex.typechecker.collect_class_info(env,class_def_8817);


var G__8818 = cljs.core.next(seq__6889_8811__$1);
var G__8819 = null;
var G__8820 = (0);
var G__8821 = (0);
seq__6889_8801 = G__8818;
chunk__6890_8802 = G__8819;
count__6891_8803 = G__8820;
i__6892_8804 = G__8821;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__6893_8822 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__6894_8823 = null;
var count__6895_8824 = (0);
var i__6896_8825 = (0);
while(true){
if((i__6896_8825 < count__6895_8824)){
var vec__6903_8826 = chunk__6894_8823.cljs$core$IIndexed$_nth$arity$2(null,i__6896_8825);
var var_name_8827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6903_8826,(0),null);
var var_type_8828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6903_8826,(1),null);
nex.typechecker.env_add_var(env,var_name_8827,var_type_8828);


var G__8829 = seq__6893_8822;
var G__8830 = chunk__6894_8823;
var G__8831 = count__6895_8824;
var G__8832 = (i__6896_8825 + (1));
seq__6893_8822 = G__8829;
chunk__6894_8823 = G__8830;
count__6895_8824 = G__8831;
i__6896_8825 = G__8832;
continue;
} else {
var temp__5823__auto___8833 = cljs.core.seq(seq__6893_8822);
if(temp__5823__auto___8833){
var seq__6893_8834__$1 = temp__5823__auto___8833;
if(cljs.core.chunked_seq_QMARK_(seq__6893_8834__$1)){
var c__5673__auto___8835 = cljs.core.chunk_first(seq__6893_8834__$1);
var G__8836 = cljs.core.chunk_rest(seq__6893_8834__$1);
var G__8837 = c__5673__auto___8835;
var G__8838 = cljs.core.count(c__5673__auto___8835);
var G__8839 = (0);
seq__6893_8822 = G__8836;
chunk__6894_8823 = G__8837;
count__6895_8824 = G__8838;
i__6896_8825 = G__8839;
continue;
} else {
var vec__6906_8840 = cljs.core.first(seq__6893_8834__$1);
var var_name_8841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6906_8840,(0),null);
var var_type_8842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6906_8840,(1),null);
nex.typechecker.env_add_var(env,var_name_8841,var_type_8842);


var G__8843 = cljs.core.next(seq__6893_8834__$1);
var G__8844 = null;
var G__8845 = (0);
var G__8846 = (0);
seq__6893_8822 = G__8843;
chunk__6894_8823 = G__8844;
count__6895_8824 = G__8845;
i__6896_8825 = G__8846;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e6880){var _ = e6880;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
