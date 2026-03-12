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
var G__6072 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6074 = class_name;
var G__6075 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6072,G__6074,G__6075) : nex.typechecker.env_lookup_method.call(null,G__6072,G__6074,G__6075));
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
var G__6105 = k6094;
var G__6105__$1 = (((G__6105 instanceof cljs.core.Keyword))?G__6105.fqn:null);
switch (G__6105__$1) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6109){
var vec__6110 = p__6109;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6110,(1),null);
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
var G__6118 = k6094;
var G__6118__$1 = (((G__6118 instanceof cljs.core.Keyword))?G__6118.fqn:null);
switch (G__6118__$1) {
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
var pred__6119 = cljs.core.keyword_identical_QMARK_;
var expr__6120 = k__5457__auto__;
if(cljs.core.truth_((pred__6119.cljs$core$IFn$_invoke$arity$2 ? pred__6119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__6120) : pred__6119.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__6120)))){
return (new nex.typechecker.TypeError(G__6093,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6119.cljs$core$IFn$_invoke$arity$2 ? pred__6119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__6120) : pred__6119.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__6120)))){
return (new nex.typechecker.TypeError(self__.message,G__6093,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6119.cljs$core$IFn$_invoke$arity$2 ? pred__6119.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__6120) : pred__6119.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__6120)))){
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
nex.typechecker.map__GT_TypeError = (function nex$typechecker$map__GT_TypeError(G__6101){
var extmap__5490__auto__ = (function (){var G__6122 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6101,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6101)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6122);
} else {
return G__6122;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6101),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6101),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6101),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6124 = arguments.length;
switch (G__6124) {
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
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6125){
var map__6126 = p__6125;
var map__6126__$1 = cljs.core.__destructure_map(map__6126);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6126__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6126__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6126__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var G__6127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6127__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6127,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6127);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6127__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6127__$1;
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
var G__6132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6132,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6128_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6128_SHARP_);
}));
} else {
return G__6132;
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
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6133.cljs$core$IFn$_invoke$arity$1 ? fexpr__6133.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6133.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6135 = arguments.length;
switch (G__6135) {
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
var G__6137 = arguments.length;
switch (G__6137) {
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
var or__5142__auto__ = cljs.core.some((function (p1__6138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6138_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6139_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6139_SHARP_,seen__$1);
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

var seq__6155 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6156 = null;
var count__6157 = (0);
var i__6158 = (0);
while(true){
if((i__6158 < count__6157)){
var vec__6172 = chunk__6156.cljs$core$IIndexed$_nth$arity$2(null,i__6158);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6172,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6172,(1),null);
var temp__5823__auto___7753 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7753)){
var constraint_7754 = temp__5823__auto___7753;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7754))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7754)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7754)))], null));
}
} else {
}


var G__7755 = seq__6155;
var G__7756 = chunk__6156;
var G__7757 = count__6157;
var G__7758 = (i__6158 + (1));
seq__6155 = G__7755;
chunk__6156 = G__7756;
count__6157 = G__7757;
i__6158 = G__7758;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6155);
if(temp__5823__auto__){
var seq__6155__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6155__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6155__$1);
var G__7759 = cljs.core.chunk_rest(seq__6155__$1);
var G__7760 = c__5673__auto__;
var G__7761 = cljs.core.count(c__5673__auto__);
var G__7762 = (0);
seq__6155 = G__7759;
chunk__6156 = G__7760;
count__6157 = G__7761;
i__6158 = G__7762;
continue;
} else {
var vec__6180 = cljs.core.first(seq__6155__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6180,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6180,(1),null);
var temp__5823__auto___7763__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7763__$1)){
var constraint_7764 = temp__5823__auto___7763__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7764))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7764)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7764)))], null));
}
} else {
}


var G__7765 = cljs.core.next(seq__6155__$1);
var G__7766 = null;
var G__7767 = (0);
var G__7768 = (0);
seq__6155 = G__7765;
chunk__6156 = G__7766;
count__6157 = G__7767;
i__6158 = G__7768;
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

var seq__6183 = cljs.core.seq(args);
var chunk__6184 = null;
var count__6185 = (0);
var i__6186 = (0);
while(true){
if((i__6186 < count__6185)){
var arg = chunk__6184.cljs$core$IIndexed$_nth$arity$2(null,i__6186);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7771 = seq__6183;
var G__7772 = chunk__6184;
var G__7773 = count__6185;
var G__7774 = (i__6186 + (1));
seq__6183 = G__7771;
chunk__6184 = G__7772;
count__6185 = G__7773;
i__6186 = G__7774;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6183);
if(temp__5823__auto__){
var seq__6183__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6183__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6183__$1);
var G__7775 = cljs.core.chunk_rest(seq__6183__$1);
var G__7776 = c__5673__auto__;
var G__7777 = cljs.core.count(c__5673__auto__);
var G__7778 = (0);
seq__6183 = G__7775;
chunk__6184 = G__7776;
count__6185 = G__7777;
i__6186 = G__7778;
continue;
} else {
var arg = cljs.core.first(seq__6183__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7779 = cljs.core.next(seq__6183__$1);
var G__7780 = null;
var G__7781 = (0);
var G__7782 = (0);
seq__6183 = G__7779;
chunk__6184 = G__7780;
count__6185 = G__7781;
i__6186 = G__7782;
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
var G__6191 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6191__$1 = (((G__6191 instanceof cljs.core.Keyword))?G__6191.fqn:null);
switch (G__6191__$1) {
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
return cljs.core.some((function (p__6193){
var map__6194 = p__6193;
var map__6194__$1 = cljs.core.__destructure_map(map__6194);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6194__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
return cljs.core.some((function (p__6197){
var map__6198 = p__6197;
var map__6198__$1 = cljs.core.__destructure_map(map__6198);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6198__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
return cljs.core.some((function (p__6224){
var map__6225 = p__6224;
var map__6225__$1 = cljs.core.__destructure_map(map__6225);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6225__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6226_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6226_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6231){
var map__6232 = p__6231;
var map__6232__$1 = cljs.core.__destructure_map(map__6232);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6236){
var map__6237 = p__6236;
var map__6237__$1 = cljs.core.__destructure_map(map__6237);
var expr = map__6237__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6240){
var map__6241 = p__6240;
var map__6241__$1 = cljs.core.__destructure_map(map__6241);
var expr = map__6241__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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
var G__6247 = operator;
switch (G__6247) {
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
nex.typechecker.check_unary_op = (function nex$typechecker$check_unary_op(env,p__6254){
var map__6255 = p__6254;
var map__6255__$1 = cljs.core.__destructure_map(map__6255);
var unary_expr = map__6255__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var operand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"operand","operand",1067152559));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6255__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var operand_node = (function (){var or__5142__auto__ = operand;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return expr;
}
})();
var operand_type = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,operand_node) : nex.typechecker.check_expression.call(null,env,operand_node));
var G__6259 = operator;
switch (G__6259) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6260_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6260_SHARP_,p1__6260_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6261_SHARP_){
if(cljs.core.truth_(p1__6261_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6261_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6262_SHARP_){
if(cljs.core.truth_(p1__6262_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6262_SHARP_);
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
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6269){
var map__6270 = p__6269;
var map__6270__$1 = cljs.core.__destructure_map(map__6270);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6270__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6270__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6270__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.typechecker.check_spawn = (function nex$typechecker$check_spawn(env,p__6274){
var map__6276 = p__6274;
var map__6276__$1 = cljs.core.__destructure_map(map__6276);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6276__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var spawn_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(spawn_env,"result","Any");

nex.typechecker.env_add_var(spawn_env,"__spawn_result_type__","Void");

var seq__6277_7865 = cljs.core.seq(body);
var chunk__6278_7866 = null;
var count__6279_7867 = (0);
var i__6280_7868 = (0);
while(true){
if((i__6280_7868 < count__6279_7867)){
var stmt_7869 = chunk__6278_7866.cljs$core$IIndexed$_nth$arity$2(null,i__6280_7868);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_7869) : nex.typechecker.check_statement.call(null,spawn_env,stmt_7869));


var G__7870 = seq__6277_7865;
var G__7871 = chunk__6278_7866;
var G__7872 = count__6279_7867;
var G__7873 = (i__6280_7868 + (1));
seq__6277_7865 = G__7870;
chunk__6278_7866 = G__7871;
count__6279_7867 = G__7872;
i__6280_7868 = G__7873;
continue;
} else {
var temp__5823__auto___7874 = cljs.core.seq(seq__6277_7865);
if(temp__5823__auto___7874){
var seq__6277_7875__$1 = temp__5823__auto___7874;
if(cljs.core.chunked_seq_QMARK_(seq__6277_7875__$1)){
var c__5673__auto___7876 = cljs.core.chunk_first(seq__6277_7875__$1);
var G__7877 = cljs.core.chunk_rest(seq__6277_7875__$1);
var G__7878 = c__5673__auto___7876;
var G__7879 = cljs.core.count(c__5673__auto___7876);
var G__7880 = (0);
seq__6277_7865 = G__7877;
chunk__6278_7866 = G__7878;
count__6279_7867 = G__7879;
i__6280_7868 = G__7880;
continue;
} else {
var stmt_7881 = cljs.core.first(seq__6277_7875__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_7881) : nex.typechecker.check_statement.call(null,spawn_env,stmt_7881));


var G__7882 = cljs.core.next(seq__6277_7875__$1);
var G__7883 = null;
var G__7884 = (0);
var G__7885 = (0);
seq__6277_7865 = G__7882;
chunk__6278_7866 = G__7883;
count__6279_7867 = G__7884;
i__6280_7868 = G__7885;
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
var G__6289 = base_type;
switch (G__6289) {
case "Any":
var G__6290 = method;
switch (G__6290) {
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
var G__6292 = method;
switch (G__6292) {
case "await":
var G__6293 = argc;
switch (G__6293) {
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
var G__6294 = method;
switch (G__6294) {
case "send":
var G__6295 = argc;
switch (G__6295) {
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
var G__6297 = argc;
switch (G__6297) {
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
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6307){
var map__6309 = p__6307;
var map__6309__$1 = cljs.core.__destructure_map(map__6309);
var expr = map__6309__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6309__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6309__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6309__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6309__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6310 = env;
var G__6311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2(G__6310,G__6311) : nex.typechecker.check_create.call(null,G__6310,G__6311));
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

var seq__6317_7893 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6318_7894 = null;
var count__6319_7895 = (0);
var i__6320_7896 = (0);
while(true){
if((i__6320_7896 < count__6319_7895)){
var vec__6330_7897 = chunk__6318_7894.cljs$core$IIndexed$_nth$arity$2(null,i__6320_7896);
var arg_7898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330_7897,(0),null);
var param_7899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6330_7897,(1),null);
var arg_type_7900 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7898) : nex.typechecker.check_expression.call(null,env,arg_7898));
var param_type_7901 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7899),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7900,param_type_7901))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7901))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7900))))], null));
}


var G__7902 = seq__6317_7893;
var G__7903 = chunk__6318_7894;
var G__7904 = count__6319_7895;
var G__7905 = (i__6320_7896 + (1));
seq__6317_7893 = G__7902;
chunk__6318_7894 = G__7903;
count__6319_7895 = G__7904;
i__6320_7896 = G__7905;
continue;
} else {
var temp__5823__auto___7906 = cljs.core.seq(seq__6317_7893);
if(temp__5823__auto___7906){
var seq__6317_7907__$1 = temp__5823__auto___7906;
if(cljs.core.chunked_seq_QMARK_(seq__6317_7907__$1)){
var c__5673__auto___7908 = cljs.core.chunk_first(seq__6317_7907__$1);
var G__7909 = cljs.core.chunk_rest(seq__6317_7907__$1);
var G__7910 = c__5673__auto___7908;
var G__7911 = cljs.core.count(c__5673__auto___7908);
var G__7912 = (0);
seq__6317_7893 = G__7909;
chunk__6318_7894 = G__7910;
count__6319_7895 = G__7911;
i__6320_7896 = G__7912;
continue;
} else {
var vec__6339_7913 = cljs.core.first(seq__6317_7907__$1);
var arg_7914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6339_7913,(0),null);
var param_7915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6339_7913,(1),null);
var arg_type_7916 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7914) : nex.typechecker.check_expression.call(null,env,arg_7914));
var param_type_7917 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7915),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7916,param_type_7917))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7917))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7916))))], null));
}


var G__7918 = cljs.core.next(seq__6317_7907__$1);
var G__7919 = null;
var G__7920 = (0);
var G__7921 = (0);
seq__6317_7893 = G__7918;
chunk__6318_7894 = G__7919;
count__6319_7895 = G__7920;
i__6320_7896 = G__7921;
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

var G__6346_7923 = env;
var G__6347_7924 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6346_7923,G__6347_7924) : nex.typechecker.check_expression.call(null,G__6346_7923,G__6347_7924));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_7925 = (function (){var G__6349 = env;
var G__6350 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6349,G__6350) : nex.typechecker.check_expression.call(null,G__6349,G__6350));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_7925),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_7925))))], null));
}

var G__6353_7928 = env;
var G__6354_7929 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6353_7928,G__6354_7929) : nex.typechecker.check_expression.call(null,G__6353_7928,G__6354_7929));

return "Boolean";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await_all")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_all expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var tasks_type = nex.typechecker.normalize_type((function (){var G__6360 = env;
var G__6361 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6360,G__6361) : nex.typechecker.check_expression.call(null,G__6360,G__6361));
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

var tasks_type = nex.typechecker.normalize_type((function (){var G__6367 = env;
var G__6368 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6367,G__6368) : nex.typechecker.check_expression.call(null,G__6367,G__6368));
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

var seq__6371_7932 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6372_7933 = null;
var count__6373_7934 = (0);
var i__6374_7935 = (0);
while(true){
if((i__6374_7935 < count__6373_7934)){
var vec__6383_7936 = chunk__6372_7933.cljs$core$IIndexed$_nth$arity$2(null,i__6374_7935);
var arg_7937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6383_7936,(0),null);
var param_7938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6383_7936,(1),null);
var arg_type_7939 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7937) : nex.typechecker.check_expression.call(null,env,arg_7937));
var param_type_7940 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7938),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7939,param_type_7940))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7940))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7939))))], null));
}


var G__7941 = seq__6371_7932;
var G__7942 = chunk__6372_7933;
var G__7943 = count__6373_7934;
var G__7944 = (i__6374_7935 + (1));
seq__6371_7932 = G__7941;
chunk__6372_7933 = G__7942;
count__6373_7934 = G__7943;
i__6374_7935 = G__7944;
continue;
} else {
var temp__5823__auto___7945 = cljs.core.seq(seq__6371_7932);
if(temp__5823__auto___7945){
var seq__6371_7946__$1 = temp__5823__auto___7945;
if(cljs.core.chunked_seq_QMARK_(seq__6371_7946__$1)){
var c__5673__auto___7947 = cljs.core.chunk_first(seq__6371_7946__$1);
var G__7948 = cljs.core.chunk_rest(seq__6371_7946__$1);
var G__7949 = c__5673__auto___7947;
var G__7950 = cljs.core.count(c__5673__auto___7947);
var G__7951 = (0);
seq__6371_7932 = G__7948;
chunk__6372_7933 = G__7949;
count__6373_7934 = G__7950;
i__6374_7935 = G__7951;
continue;
} else {
var vec__6389_7952 = cljs.core.first(seq__6371_7946__$1);
var arg_7953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6389_7952,(0),null);
var param_7954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6389_7952,(1),null);
var arg_type_7955 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7953) : nex.typechecker.check_expression.call(null,env,arg_7953));
var param_type_7956 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7954),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7955,param_type_7956))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7956))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7955))))], null));
}


var G__7957 = cljs.core.next(seq__6371_7946__$1);
var G__7958 = null;
var G__7959 = (0);
var G__7960 = (0);
seq__6371_7932 = G__7957;
chunk__6372_7933 = G__7958;
count__6373_7934 = G__7959;
i__6374_7935 = G__7960;
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

var seq__6396_7961 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6397_7962 = null;
var count__6398_7963 = (0);
var i__6399_7964 = (0);
while(true){
if((i__6399_7964 < count__6398_7963)){
var vec__6408_7965 = chunk__6397_7962.cljs$core$IIndexed$_nth$arity$2(null,i__6399_7964);
var arg_7966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408_7965,(0),null);
var param_7967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6408_7965,(1),null);
var arg_type_7968 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7966) : nex.typechecker.check_expression.call(null,env,arg_7966));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7968,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7967)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7967))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7968)))], null));
}


var G__7969 = seq__6396_7961;
var G__7970 = chunk__6397_7962;
var G__7971 = count__6398_7963;
var G__7972 = (i__6399_7964 + (1));
seq__6396_7961 = G__7969;
chunk__6397_7962 = G__7970;
count__6398_7963 = G__7971;
i__6399_7964 = G__7972;
continue;
} else {
var temp__5823__auto___7973 = cljs.core.seq(seq__6396_7961);
if(temp__5823__auto___7973){
var seq__6396_7974__$1 = temp__5823__auto___7973;
if(cljs.core.chunked_seq_QMARK_(seq__6396_7974__$1)){
var c__5673__auto___7975 = cljs.core.chunk_first(seq__6396_7974__$1);
var G__7976 = cljs.core.chunk_rest(seq__6396_7974__$1);
var G__7977 = c__5673__auto___7975;
var G__7978 = cljs.core.count(c__5673__auto___7975);
var G__7979 = (0);
seq__6396_7961 = G__7976;
chunk__6397_7962 = G__7977;
count__6398_7963 = G__7978;
i__6399_7964 = G__7979;
continue;
} else {
var vec__6414_7980 = cljs.core.first(seq__6396_7974__$1);
var arg_7981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414_7980,(0),null);
var param_7982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6414_7980,(1),null);
var arg_type_7986 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7981) : nex.typechecker.check_expression.call(null,env,arg_7981));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7986,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7982)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7982))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7986)))], null));
}


var G__7987 = cljs.core.next(seq__6396_7974__$1);
var G__7988 = null;
var G__7989 = (0);
var G__7990 = (0);
seq__6396_7961 = G__7987;
chunk__6397_7962 = G__7988;
count__6398_7963 = G__7989;
i__6399_7964 = G__7990;
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
var seq__6418_7991 = cljs.core.seq(args);
var chunk__6419_7992 = null;
var count__6420_7993 = (0);
var i__6421_7994 = (0);
while(true){
if((i__6421_7994 < count__6420_7993)){
var arg_7995 = chunk__6419_7992.cljs$core$IIndexed$_nth$arity$2(null,i__6421_7994);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7995) : nex.typechecker.check_expression.call(null,env,arg_7995));


var G__7996 = seq__6418_7991;
var G__7997 = chunk__6419_7992;
var G__7998 = count__6420_7993;
var G__7999 = (i__6421_7994 + (1));
seq__6418_7991 = G__7996;
chunk__6419_7992 = G__7997;
count__6420_7993 = G__7998;
i__6421_7994 = G__7999;
continue;
} else {
var temp__5823__auto___8000 = cljs.core.seq(seq__6418_7991);
if(temp__5823__auto___8000){
var seq__6418_8001__$1 = temp__5823__auto___8000;
if(cljs.core.chunked_seq_QMARK_(seq__6418_8001__$1)){
var c__5673__auto___8002 = cljs.core.chunk_first(seq__6418_8001__$1);
var G__8003 = cljs.core.chunk_rest(seq__6418_8001__$1);
var G__8004 = c__5673__auto___8002;
var G__8005 = cljs.core.count(c__5673__auto___8002);
var G__8006 = (0);
seq__6418_7991 = G__8003;
chunk__6419_7992 = G__8004;
count__6420_7993 = G__8005;
i__6421_7994 = G__8006;
continue;
} else {
var arg_8007 = cljs.core.first(seq__6418_8001__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8007) : nex.typechecker.check_expression.call(null,env,arg_8007));


var G__8008 = cljs.core.next(seq__6418_8001__$1);
var G__8009 = null;
var G__8010 = (0);
var G__8011 = (0);
seq__6418_7991 = G__8008;
chunk__6419_7992 = G__8009;
count__6420_7993 = G__8010;
i__6421_7994 = G__8011;
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
var seq__6423_8012 = cljs.core.seq(args);
var chunk__6424_8013 = null;
var count__6425_8014 = (0);
var i__6426_8015 = (0);
while(true){
if((i__6426_8015 < count__6425_8014)){
var arg_8016 = chunk__6424_8013.cljs$core$IIndexed$_nth$arity$2(null,i__6426_8015);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8016) : nex.typechecker.check_expression.call(null,env,arg_8016));


var G__8017 = seq__6423_8012;
var G__8018 = chunk__6424_8013;
var G__8019 = count__6425_8014;
var G__8020 = (i__6426_8015 + (1));
seq__6423_8012 = G__8017;
chunk__6424_8013 = G__8018;
count__6425_8014 = G__8019;
i__6426_8015 = G__8020;
continue;
} else {
var temp__5823__auto___8021 = cljs.core.seq(seq__6423_8012);
if(temp__5823__auto___8021){
var seq__6423_8022__$1 = temp__5823__auto___8021;
if(cljs.core.chunked_seq_QMARK_(seq__6423_8022__$1)){
var c__5673__auto___8023 = cljs.core.chunk_first(seq__6423_8022__$1);
var G__8024 = cljs.core.chunk_rest(seq__6423_8022__$1);
var G__8025 = c__5673__auto___8023;
var G__8026 = cljs.core.count(c__5673__auto___8023);
var G__8027 = (0);
seq__6423_8012 = G__8024;
chunk__6424_8013 = G__8025;
count__6425_8014 = G__8026;
i__6426_8015 = G__8027;
continue;
} else {
var arg_8028 = cljs.core.first(seq__6423_8022__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8028) : nex.typechecker.check_expression.call(null,env,arg_8028));


var G__8029 = cljs.core.next(seq__6423_8022__$1);
var G__8030 = null;
var G__8031 = (0);
var G__8032 = (0);
seq__6423_8012 = G__8029;
chunk__6424_8013 = G__8030;
count__6425_8014 = G__8031;
i__6426_8015 = G__8032;
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
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6433){
var map__6434 = p__6433;
var map__6434__$1 = cljs.core.__destructure_map(map__6434);
var expr = map__6434__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6434__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6434__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6434__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6434__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var arg_type_8034 = (function (){var G__6436 = env;
var G__6437 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6436,G__6437) : nex.typechecker.check_expression.call(null,G__6436,G__6437));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8034,"Integer"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity requires Integer capacity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.with_capacity expects Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8034))))], null));
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
var seq__6439_8035 = cljs.core.seq(args);
var chunk__6440_8036 = null;
var count__6441_8037 = (0);
var i__6442_8038 = (0);
while(true){
if((i__6442_8038 < count__6441_8037)){
var arg_8039 = chunk__6440_8036.cljs$core$IIndexed$_nth$arity$2(null,i__6442_8038);
var arg_type_8040 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8039) : nex.typechecker.check_expression.call(null,env,arg_8039));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8040,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8041 = seq__6439_8035;
var G__8042 = chunk__6440_8036;
var G__8043 = count__6441_8037;
var G__8044 = (i__6442_8038 + (1));
seq__6439_8035 = G__8041;
chunk__6440_8036 = G__8042;
count__6441_8037 = G__8043;
i__6442_8038 = G__8044;
continue;
} else {
var temp__5823__auto___8045 = cljs.core.seq(seq__6439_8035);
if(temp__5823__auto___8045){
var seq__6439_8046__$1 = temp__5823__auto___8045;
if(cljs.core.chunked_seq_QMARK_(seq__6439_8046__$1)){
var c__5673__auto___8047 = cljs.core.chunk_first(seq__6439_8046__$1);
var G__8048 = cljs.core.chunk_rest(seq__6439_8046__$1);
var G__8049 = c__5673__auto___8047;
var G__8050 = cljs.core.count(c__5673__auto___8047);
var G__8051 = (0);
seq__6439_8035 = G__8048;
chunk__6440_8036 = G__8049;
count__6441_8037 = G__8050;
i__6442_8038 = G__8051;
continue;
} else {
var arg_8052 = cljs.core.first(seq__6439_8046__$1);
var arg_type_8053 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8052) : nex.typechecker.check_expression.call(null,env,arg_8052));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_8053,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__8054 = cljs.core.next(seq__6439_8046__$1);
var G__8055 = null;
var G__8056 = (0);
var G__8057 = (0);
seq__6439_8035 = G__8054;
chunk__6440_8036 = G__8055;
count__6441_8037 = G__8056;
i__6442_8038 = G__8057;
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
var constructors_8058 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__8059 = cljs.core.seq(constructors_8058);
var type_map_8060 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_8061 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_8062 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_8061);
if(((has_constructors_QMARK__8059) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_8062)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8061)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8061)))], null));
}

var params_8067 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_8062);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_8067),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8061)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_8067))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6471_8068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_8067));
var chunk__6472_8069 = null;
var count__6473_8070 = (0);
var i__6474_8071 = (0);
while(true){
if((i__6474_8071 < count__6473_8070)){
var vec__6483_8072 = chunk__6472_8069.cljs$core$IIndexed$_nth$arity$2(null,i__6474_8071);
var arg_8073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6483_8072,(0),null);
var param_8074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6483_8072,(1),null);
var arg_type_8076 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8073) : nex.typechecker.check_expression.call(null,env,arg_8073));
var param_type_8077 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8074),type_map_8060);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8076,param_type_8077))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8061)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8077))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8076))))], null));
}


var G__8078 = seq__6471_8068;
var G__8079 = chunk__6472_8069;
var G__8080 = count__6473_8070;
var G__8081 = (i__6474_8071 + (1));
seq__6471_8068 = G__8078;
chunk__6472_8069 = G__8079;
count__6473_8070 = G__8080;
i__6474_8071 = G__8081;
continue;
} else {
var temp__5823__auto___8082 = cljs.core.seq(seq__6471_8068);
if(temp__5823__auto___8082){
var seq__6471_8083__$1 = temp__5823__auto___8082;
if(cljs.core.chunked_seq_QMARK_(seq__6471_8083__$1)){
var c__5673__auto___8084 = cljs.core.chunk_first(seq__6471_8083__$1);
var G__8085 = cljs.core.chunk_rest(seq__6471_8083__$1);
var G__8086 = c__5673__auto___8084;
var G__8087 = cljs.core.count(c__5673__auto___8084);
var G__8088 = (0);
seq__6471_8068 = G__8085;
chunk__6472_8069 = G__8086;
count__6473_8070 = G__8087;
i__6474_8071 = G__8088;
continue;
} else {
var vec__6489_8089 = cljs.core.first(seq__6471_8083__$1);
var arg_8090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489_8089,(0),null);
var param_8091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6489_8089,(1),null);
var arg_type_8092 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8090) : nex.typechecker.check_expression.call(null,env,arg_8090));
var param_type_8093 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8091),type_map_8060);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8092,param_type_8093))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8061)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8093))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8092))))], null));
}


var G__8094 = cljs.core.next(seq__6471_8083__$1);
var G__8095 = null;
var G__8096 = (0);
var G__8097 = (0);
seq__6471_8068 = G__8094;
chunk__6472_8069 = G__8095;
count__6473_8070 = G__8096;
i__6474_8071 = G__8097;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6492){
var map__6493 = p__6492;
var map__6493__$1 = cljs.core.__destructure_map(map__6493);
var expr = map__6493__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6493__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6494 = env;
var G__6495 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6494,G__6495) : nex.typechecker.check_expression.call(null,G__6494,G__6495));
})();
var seq__6496_8098 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6497_8099 = null;
var count__6498_8100 = (0);
var i__6499_8101 = (0);
while(true){
if((i__6499_8101 < count__6498_8100)){
var elem_8102 = chunk__6497_8099.cljs$core$IIndexed$_nth$arity$2(null,i__6499_8101);
var elem_type_8103 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8102) : nex.typechecker.check_expression.call(null,env,elem_8102));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8103))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8103))))], null));
}


var G__8104 = seq__6496_8098;
var G__8105 = chunk__6497_8099;
var G__8106 = count__6498_8100;
var G__8107 = (i__6499_8101 + (1));
seq__6496_8098 = G__8104;
chunk__6497_8099 = G__8105;
count__6498_8100 = G__8106;
i__6499_8101 = G__8107;
continue;
} else {
var temp__5823__auto___8108 = cljs.core.seq(seq__6496_8098);
if(temp__5823__auto___8108){
var seq__6496_8109__$1 = temp__5823__auto___8108;
if(cljs.core.chunked_seq_QMARK_(seq__6496_8109__$1)){
var c__5673__auto___8110 = cljs.core.chunk_first(seq__6496_8109__$1);
var G__8111 = cljs.core.chunk_rest(seq__6496_8109__$1);
var G__8112 = c__5673__auto___8110;
var G__8113 = cljs.core.count(c__5673__auto___8110);
var G__8114 = (0);
seq__6496_8098 = G__8111;
chunk__6497_8099 = G__8112;
count__6498_8100 = G__8113;
i__6499_8101 = G__8114;
continue;
} else {
var elem_8115 = cljs.core.first(seq__6496_8109__$1);
var elem_type_8116 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8115) : nex.typechecker.check_expression.call(null,env,elem_8115));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8116))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8116))))], null));
}


var G__8117 = cljs.core.next(seq__6496_8109__$1);
var G__8118 = null;
var G__8119 = (0);
var G__8120 = (0);
seq__6496_8098 = G__8117;
chunk__6497_8099 = G__8118;
count__6498_8100 = G__8119;
i__6499_8101 = G__8120;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6511){
var map__6512 = p__6511;
var map__6512__$1 = cljs.core.__destructure_map(map__6512);
var expr = map__6512__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6512__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6516 = env;
var G__6517 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6516,G__6517) : nex.typechecker.check_expression.call(null,G__6516,G__6517));
})();
var val_type = (function (){var G__6518 = env;
var G__6519 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6518,G__6519) : nex.typechecker.check_expression.call(null,G__6518,G__6519));
})();
var seq__6522_8122 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6523_8123 = null;
var count__6524_8124 = (0);
var i__6525_8125 = (0);
while(true){
if((i__6525_8125 < count__6524_8124)){
var entry_8126 = chunk__6523_8123.cljs$core$IIndexed$_nth$arity$2(null,i__6525_8125);
var k_type_8127 = (function (){var G__6539 = env;
var G__6540 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8126);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6539,G__6540) : nex.typechecker.check_expression.call(null,G__6539,G__6540));
})();
var v_type_8128 = (function (){var G__6541 = env;
var G__6542 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8126);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6541,G__6542) : nex.typechecker.check_expression.call(null,G__6541,G__6542));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8127);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8128);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8129 = seq__6522_8122;
var G__8130 = chunk__6523_8123;
var G__8131 = count__6524_8124;
var G__8132 = (i__6525_8125 + (1));
seq__6522_8122 = G__8129;
chunk__6523_8123 = G__8130;
count__6524_8124 = G__8131;
i__6525_8125 = G__8132;
continue;
} else {
var temp__5823__auto___8133 = cljs.core.seq(seq__6522_8122);
if(temp__5823__auto___8133){
var seq__6522_8134__$1 = temp__5823__auto___8133;
if(cljs.core.chunked_seq_QMARK_(seq__6522_8134__$1)){
var c__5673__auto___8135 = cljs.core.chunk_first(seq__6522_8134__$1);
var G__8136 = cljs.core.chunk_rest(seq__6522_8134__$1);
var G__8137 = c__5673__auto___8135;
var G__8138 = cljs.core.count(c__5673__auto___8135);
var G__8139 = (0);
seq__6522_8122 = G__8136;
chunk__6523_8123 = G__8137;
count__6524_8124 = G__8138;
i__6525_8125 = G__8139;
continue;
} else {
var entry_8140 = cljs.core.first(seq__6522_8134__$1);
var k_type_8141 = (function (){var G__6545 = env;
var G__6546 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8140);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6545,G__6546) : nex.typechecker.check_expression.call(null,G__6545,G__6546));
})();
var v_type_8142 = (function (){var G__6547 = env;
var G__6548 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8140);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6547,G__6548) : nex.typechecker.check_expression.call(null,G__6547,G__6548));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8141);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8142);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8147 = cljs.core.next(seq__6522_8134__$1);
var G__8148 = null;
var G__8149 = (0);
var G__8150 = (0);
seq__6522_8122 = G__8147;
chunk__6523_8123 = G__8148;
count__6524_8124 = G__8149;
i__6525_8125 = G__8150;
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
nex.typechecker.check_set_literal = (function nex$typechecker$check_set_literal(env,p__6549){
var map__6550 = p__6549;
var map__6550__$1 = cljs.core.__destructure_map(map__6550);
var expr = map__6550__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6550__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null)], null);
} else {
var first_type = (function (){var G__6551 = env;
var G__6552 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6551,G__6552) : nex.typechecker.check_expression.call(null,G__6551,G__6552));
})();
var seq__6553_8151 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6554_8152 = null;
var count__6555_8153 = (0);
var i__6556_8154 = (0);
while(true){
if((i__6556_8154 < count__6555_8153)){
var elem_8155 = chunk__6554_8152.cljs$core$IIndexed$_nth$arity$2(null,i__6556_8154);
var elem_type_8156 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8155) : nex.typechecker.check_expression.call(null,env,elem_8155));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8156))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8156))))], null));
}


var G__8158 = seq__6553_8151;
var G__8159 = chunk__6554_8152;
var G__8160 = count__6555_8153;
var G__8161 = (i__6556_8154 + (1));
seq__6553_8151 = G__8158;
chunk__6554_8152 = G__8159;
count__6555_8153 = G__8160;
i__6556_8154 = G__8161;
continue;
} else {
var temp__5823__auto___8162 = cljs.core.seq(seq__6553_8151);
if(temp__5823__auto___8162){
var seq__6553_8163__$1 = temp__5823__auto___8162;
if(cljs.core.chunked_seq_QMARK_(seq__6553_8163__$1)){
var c__5673__auto___8164 = cljs.core.chunk_first(seq__6553_8163__$1);
var G__8165 = cljs.core.chunk_rest(seq__6553_8163__$1);
var G__8166 = c__5673__auto___8164;
var G__8167 = cljs.core.count(c__5673__auto___8164);
var G__8168 = (0);
seq__6553_8151 = G__8165;
chunk__6554_8152 = G__8166;
count__6555_8153 = G__8167;
i__6556_8154 = G__8168;
continue;
} else {
var elem_8169 = cljs.core.first(seq__6553_8163__$1);
var elem_type_8170 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8169) : nex.typechecker.check_expression.call(null,env,elem_8169));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8170))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8170))))], null));
}


var G__8171 = cljs.core.next(seq__6553_8163__$1);
var G__8172 = null;
var G__8173 = (0);
var G__8174 = (0);
seq__6553_8151 = G__8171;
chunk__6554_8152 = G__8172;
count__6555_8153 = G__8173;
i__6556_8154 = G__8174;
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
var G__6565 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6565__$1 = (((G__6565 instanceof cljs.core.Keyword))?G__6565.fqn:null);
switch (G__6565__$1) {
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
var target_type = (function (){var G__6566 = env;
var G__6567 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6566,G__6567) : nex.typechecker.check_expression.call(null,G__6566,G__6567));
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
var cond_type = (function (){var G__6568 = env;
var G__6569 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6568,G__6569) : nex.typechecker.check_expression.call(null,G__6568,G__6569));
})();
var cons_type = (function (){var G__6570 = env;
var G__6571 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6570,G__6571) : nex.typechecker.check_expression.call(null,G__6570,G__6571));
})();
var alt_type = (function (){var G__6572 = env;
var G__6573 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6572,G__6573) : nex.typechecker.check_expression.call(null,G__6572,G__6573));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6574 = env;
var G__6575 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6574,G__6575) : nex.typechecker.check_expression.call(null,G__6574,G__6575));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6578){
var map__6579 = p__6578;
var map__6579__$1 = cljs.core.__destructure_map(map__6579);
var stmt = map__6579__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6579__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6579__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5823__auto___8177 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto___8177)){
var current_class_8178 = temp__5823__auto___8177;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class_8178,target))){
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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6580){
var map__6581 = p__6580;
var map__6581__$1 = cljs.core.__destructure_map(map__6581);
var stmt = map__6581__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"value","value",305978217));
var synthetic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6581__$1,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862));
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
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6583){
var map__6584 = p__6583;
var map__6584__$1 = cljs.core.__destructure_map(map__6584);
var stmt = map__6584__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6584__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_8180 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8180,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8180)))], null));
}

var then_env_8181 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8182 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___8182)){
var non_nil_var_8183 = temp__5823__auto___8182;
nex.typechecker.env_mark_non_nil(then_env_8181,non_nil_var_8183);
} else {
}

var temp__5823__auto___8184 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___8184)){
var map__6590_8185 = temp__5823__auto___8184;
var map__6590_8186__$1 = cljs.core.__destructure_map(map__6590_8185);
var name_8187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590_8186__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6590_8186__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_8181,name_8187,type_8188);

nex.typechecker.env_mark_non_nil(then_env_8181,name_8187);
} else {
}

var seq__6594_8189 = cljs.core.seq(then);
var chunk__6595_8190 = null;
var count__6596_8191 = (0);
var i__6597_8192 = (0);
while(true){
if((i__6597_8192 < count__6596_8191)){
var stmt_8193__$1 = chunk__6595_8190.cljs$core$IIndexed$_nth$arity$2(null,i__6597_8192);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8181,stmt_8193__$1) : nex.typechecker.check_statement.call(null,then_env_8181,stmt_8193__$1));


var G__8194 = seq__6594_8189;
var G__8195 = chunk__6595_8190;
var G__8196 = count__6596_8191;
var G__8197 = (i__6597_8192 + (1));
seq__6594_8189 = G__8194;
chunk__6595_8190 = G__8195;
count__6596_8191 = G__8196;
i__6597_8192 = G__8197;
continue;
} else {
var temp__5823__auto___8198 = cljs.core.seq(seq__6594_8189);
if(temp__5823__auto___8198){
var seq__6594_8199__$1 = temp__5823__auto___8198;
if(cljs.core.chunked_seq_QMARK_(seq__6594_8199__$1)){
var c__5673__auto___8200 = cljs.core.chunk_first(seq__6594_8199__$1);
var G__8201 = cljs.core.chunk_rest(seq__6594_8199__$1);
var G__8202 = c__5673__auto___8200;
var G__8203 = cljs.core.count(c__5673__auto___8200);
var G__8204 = (0);
seq__6594_8189 = G__8201;
chunk__6595_8190 = G__8202;
count__6596_8191 = G__8203;
i__6597_8192 = G__8204;
continue;
} else {
var stmt_8205__$1 = cljs.core.first(seq__6594_8199__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8181,stmt_8205__$1) : nex.typechecker.check_statement.call(null,then_env_8181,stmt_8205__$1));


var G__8206 = cljs.core.next(seq__6594_8199__$1);
var G__8207 = null;
var G__8208 = (0);
var G__8209 = (0);
seq__6594_8189 = G__8206;
chunk__6595_8190 = G__8207;
count__6596_8191 = G__8208;
i__6597_8192 = G__8209;
continue;
}
} else {
}
}
break;
}

var seq__6602_8210 = cljs.core.seq(elseif);
var chunk__6603_8211 = null;
var count__6604_8212 = (0);
var i__6605_8213 = (0);
while(true){
if((i__6605_8213 < count__6604_8212)){
var clause_8214 = chunk__6603_8211.cljs$core$IIndexed$_nth$arity$2(null,i__6605_8213);
var ei_cond_type_8215 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8214));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8215,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8215)))], null));
}

var elseif_env_8216 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8217 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8214));
if(cljs.core.truth_(temp__5823__auto___8217)){
var non_nil_var_8218 = temp__5823__auto___8217;
nex.typechecker.env_mark_non_nil(elseif_env_8216,non_nil_var_8218);
} else {
}

var temp__5823__auto___8219 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8214));
if(cljs.core.truth_(temp__5823__auto___8219)){
var map__6623_8220 = temp__5823__auto___8219;
var map__6623_8221__$1 = cljs.core.__destructure_map(map__6623_8220);
var name_8222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6623_8221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6623_8221__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8216,name_8222,type_8223);

nex.typechecker.env_mark_non_nil(elseif_env_8216,name_8222);
} else {
}

var seq__6627_8225 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8214));
var chunk__6628_8226 = null;
var count__6629_8227 = (0);
var i__6630_8228 = (0);
while(true){
if((i__6630_8228 < count__6629_8227)){
var stmt_8229__$1 = chunk__6628_8226.cljs$core$IIndexed$_nth$arity$2(null,i__6630_8228);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8216,stmt_8229__$1) : nex.typechecker.check_statement.call(null,elseif_env_8216,stmt_8229__$1));


var G__8230 = seq__6627_8225;
var G__8231 = chunk__6628_8226;
var G__8232 = count__6629_8227;
var G__8233 = (i__6630_8228 + (1));
seq__6627_8225 = G__8230;
chunk__6628_8226 = G__8231;
count__6629_8227 = G__8232;
i__6630_8228 = G__8233;
continue;
} else {
var temp__5823__auto___8234 = cljs.core.seq(seq__6627_8225);
if(temp__5823__auto___8234){
var seq__6627_8235__$1 = temp__5823__auto___8234;
if(cljs.core.chunked_seq_QMARK_(seq__6627_8235__$1)){
var c__5673__auto___8236 = cljs.core.chunk_first(seq__6627_8235__$1);
var G__8237 = cljs.core.chunk_rest(seq__6627_8235__$1);
var G__8238 = c__5673__auto___8236;
var G__8239 = cljs.core.count(c__5673__auto___8236);
var G__8240 = (0);
seq__6627_8225 = G__8237;
chunk__6628_8226 = G__8238;
count__6629_8227 = G__8239;
i__6630_8228 = G__8240;
continue;
} else {
var stmt_8241__$1 = cljs.core.first(seq__6627_8235__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8216,stmt_8241__$1) : nex.typechecker.check_statement.call(null,elseif_env_8216,stmt_8241__$1));


var G__8242 = cljs.core.next(seq__6627_8235__$1);
var G__8243 = null;
var G__8244 = (0);
var G__8245 = (0);
seq__6627_8225 = G__8242;
chunk__6628_8226 = G__8243;
count__6629_8227 = G__8244;
i__6630_8228 = G__8245;
continue;
}
} else {
}
}
break;
}


var G__8246 = seq__6602_8210;
var G__8247 = chunk__6603_8211;
var G__8248 = count__6604_8212;
var G__8249 = (i__6605_8213 + (1));
seq__6602_8210 = G__8246;
chunk__6603_8211 = G__8247;
count__6604_8212 = G__8248;
i__6605_8213 = G__8249;
continue;
} else {
var temp__5823__auto___8250 = cljs.core.seq(seq__6602_8210);
if(temp__5823__auto___8250){
var seq__6602_8251__$1 = temp__5823__auto___8250;
if(cljs.core.chunked_seq_QMARK_(seq__6602_8251__$1)){
var c__5673__auto___8252 = cljs.core.chunk_first(seq__6602_8251__$1);
var G__8253 = cljs.core.chunk_rest(seq__6602_8251__$1);
var G__8254 = c__5673__auto___8252;
var G__8255 = cljs.core.count(c__5673__auto___8252);
var G__8256 = (0);
seq__6602_8210 = G__8253;
chunk__6603_8211 = G__8254;
count__6604_8212 = G__8255;
i__6605_8213 = G__8256;
continue;
} else {
var clause_8257 = cljs.core.first(seq__6602_8251__$1);
var ei_cond_type_8258 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8257));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8258,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8258)))], null));
}

var elseif_env_8260 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8261__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8257));
if(cljs.core.truth_(temp__5823__auto___8261__$1)){
var non_nil_var_8262 = temp__5823__auto___8261__$1;
nex.typechecker.env_mark_non_nil(elseif_env_8260,non_nil_var_8262);
} else {
}

var temp__5823__auto___8263__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8257));
if(cljs.core.truth_(temp__5823__auto___8263__$1)){
var map__6635_8264 = temp__5823__auto___8263__$1;
var map__6635_8265__$1 = cljs.core.__destructure_map(map__6635_8264);
var name_8266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635_8265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6635_8265__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8260,name_8266,type_8267);

nex.typechecker.env_mark_non_nil(elseif_env_8260,name_8266);
} else {
}

var seq__6636_8268 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8257));
var chunk__6637_8269 = null;
var count__6638_8270 = (0);
var i__6639_8271 = (0);
while(true){
if((i__6639_8271 < count__6638_8270)){
var stmt_8272__$1 = chunk__6637_8269.cljs$core$IIndexed$_nth$arity$2(null,i__6639_8271);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8260,stmt_8272__$1) : nex.typechecker.check_statement.call(null,elseif_env_8260,stmt_8272__$1));


var G__8273 = seq__6636_8268;
var G__8274 = chunk__6637_8269;
var G__8275 = count__6638_8270;
var G__8276 = (i__6639_8271 + (1));
seq__6636_8268 = G__8273;
chunk__6637_8269 = G__8274;
count__6638_8270 = G__8275;
i__6639_8271 = G__8276;
continue;
} else {
var temp__5823__auto___8277__$1 = cljs.core.seq(seq__6636_8268);
if(temp__5823__auto___8277__$1){
var seq__6636_8278__$1 = temp__5823__auto___8277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6636_8278__$1)){
var c__5673__auto___8279 = cljs.core.chunk_first(seq__6636_8278__$1);
var G__8280 = cljs.core.chunk_rest(seq__6636_8278__$1);
var G__8281 = c__5673__auto___8279;
var G__8282 = cljs.core.count(c__5673__auto___8279);
var G__8283 = (0);
seq__6636_8268 = G__8280;
chunk__6637_8269 = G__8281;
count__6638_8270 = G__8282;
i__6639_8271 = G__8283;
continue;
} else {
var stmt_8284__$1 = cljs.core.first(seq__6636_8278__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8260,stmt_8284__$1) : nex.typechecker.check_statement.call(null,elseif_env_8260,stmt_8284__$1));


var G__8285 = cljs.core.next(seq__6636_8278__$1);
var G__8286 = null;
var G__8287 = (0);
var G__8288 = (0);
seq__6636_8268 = G__8285;
chunk__6637_8269 = G__8286;
count__6638_8270 = G__8287;
i__6639_8271 = G__8288;
continue;
}
} else {
}
}
break;
}


var G__8289 = cljs.core.next(seq__6602_8251__$1);
var G__8290 = null;
var G__8291 = (0);
var G__8292 = (0);
seq__6602_8210 = G__8289;
chunk__6603_8211 = G__8290;
count__6604_8212 = G__8291;
i__6605_8213 = G__8292;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6644 = cljs.core.seq(else$);
var chunk__6645 = null;
var count__6646 = (0);
var i__6647 = (0);
while(true){
if((i__6647 < count__6646)){
var stmt__$1 = chunk__6645.cljs$core$IIndexed$_nth$arity$2(null,i__6647);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8293 = seq__6644;
var G__8294 = chunk__6645;
var G__8295 = count__6646;
var G__8296 = (i__6647 + (1));
seq__6644 = G__8293;
chunk__6645 = G__8294;
count__6646 = G__8295;
i__6647 = G__8296;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6644);
if(temp__5823__auto__){
var seq__6644__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6644__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6644__$1);
var G__8297 = cljs.core.chunk_rest(seq__6644__$1);
var G__8298 = c__5673__auto__;
var G__8299 = cljs.core.count(c__5673__auto__);
var G__8300 = (0);
seq__6644 = G__8297;
chunk__6645 = G__8298;
count__6646 = G__8299;
i__6647 = G__8300;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6644__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8301 = cljs.core.next(seq__6644__$1);
var G__8302 = null;
var G__8303 = (0);
var G__8304 = (0);
seq__6644 = G__8301;
chunk__6645 = G__8302;
count__6646 = G__8303;
i__6647 = G__8304;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6649){
var map__6650 = p__6649;
var map__6650__$1 = cljs.core.__destructure_map(map__6650);
var stmt = map__6650__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6650__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6650__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6650__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6650__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6650__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6651_8306 = cljs.core.seq(init);
var chunk__6652_8307 = null;
var count__6653_8308 = (0);
var i__6654_8309 = (0);
while(true){
if((i__6654_8309 < count__6653_8308)){
var s_8310 = chunk__6652_8307.cljs$core$IIndexed$_nth$arity$2(null,i__6654_8309);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8310) : nex.typechecker.check_statement.call(null,loop_env,s_8310));


var G__8311 = seq__6651_8306;
var G__8312 = chunk__6652_8307;
var G__8313 = count__6653_8308;
var G__8314 = (i__6654_8309 + (1));
seq__6651_8306 = G__8311;
chunk__6652_8307 = G__8312;
count__6653_8308 = G__8313;
i__6654_8309 = G__8314;
continue;
} else {
var temp__5823__auto___8315 = cljs.core.seq(seq__6651_8306);
if(temp__5823__auto___8315){
var seq__6651_8316__$1 = temp__5823__auto___8315;
if(cljs.core.chunked_seq_QMARK_(seq__6651_8316__$1)){
var c__5673__auto___8317 = cljs.core.chunk_first(seq__6651_8316__$1);
var G__8318 = cljs.core.chunk_rest(seq__6651_8316__$1);
var G__8319 = c__5673__auto___8317;
var G__8320 = cljs.core.count(c__5673__auto___8317);
var G__8321 = (0);
seq__6651_8306 = G__8318;
chunk__6652_8307 = G__8319;
count__6653_8308 = G__8320;
i__6654_8309 = G__8321;
continue;
} else {
var s_8322 = cljs.core.first(seq__6651_8316__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8322) : nex.typechecker.check_statement.call(null,loop_env,s_8322));


var G__8323 = cljs.core.next(seq__6651_8316__$1);
var G__8324 = null;
var G__8325 = (0);
var G__8326 = (0);
seq__6651_8306 = G__8323;
chunk__6652_8307 = G__8324;
count__6653_8308 = G__8325;
i__6654_8309 = G__8326;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_8327 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8327,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8327,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8327)))], null));
}
} else {
}

var seq__6657 = cljs.core.seq(body);
var chunk__6658 = null;
var count__6659 = (0);
var i__6660 = (0);
while(true){
if((i__6660 < count__6659)){
var stmt__$1 = chunk__6658.cljs$core$IIndexed$_nth$arity$2(null,i__6660);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8328 = seq__6657;
var G__8329 = chunk__6658;
var G__8330 = count__6659;
var G__8331 = (i__6660 + (1));
seq__6657 = G__8328;
chunk__6658 = G__8329;
count__6659 = G__8330;
i__6660 = G__8331;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6657);
if(temp__5823__auto__){
var seq__6657__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6657__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6657__$1);
var G__8332 = cljs.core.chunk_rest(seq__6657__$1);
var G__8333 = c__5673__auto__;
var G__8334 = cljs.core.count(c__5673__auto__);
var G__8335 = (0);
seq__6657 = G__8332;
chunk__6658 = G__8333;
count__6659 = G__8334;
i__6660 = G__8335;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6657__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8336 = cljs.core.next(seq__6657__$1);
var G__8337 = null;
var G__8338 = (0);
var G__8339 = (0);
seq__6657 = G__8336;
chunk__6658 = G__8337;
count__6659 = G__8338;
i__6660 = G__8339;
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
nex.typechecker.check_select_clause = (function nex$typechecker$check_select_clause(env,p__6662){
var map__6663 = p__6662;
var map__6663__$1 = cljs.core.__destructure_map(map__6663);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6663__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6663__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6663__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6664 = (function (){var or__5142__auto__ = nex.typechecker.select_clause_op(expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clause must be a channel or task operation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select clause must be a channel send/receive call or task await call")], null));
}
})();
var map__6664__$1 = cljs.core.__destructure_map(map__6664);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6664__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6664__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6664__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__6665 = base_type;
switch (G__6665) {
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

var seq__6666 = cljs.core.seq(body);
var chunk__6667 = null;
var count__6668 = (0);
var i__6669 = (0);
while(true){
if((i__6669 < count__6668)){
var stmt = chunk__6667.cljs$core$IIndexed$_nth$arity$2(null,i__6669);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8341 = seq__6666;
var G__8342 = chunk__6667;
var G__8343 = count__6668;
var G__8344 = (i__6669 + (1));
seq__6666 = G__8341;
chunk__6667 = G__8342;
count__6668 = G__8343;
i__6669 = G__8344;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6666);
if(temp__5823__auto__){
var seq__6666__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6666__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6666__$1);
var G__8345 = cljs.core.chunk_rest(seq__6666__$1);
var G__8346 = c__5673__auto__;
var G__8347 = cljs.core.count(c__5673__auto__);
var G__8348 = (0);
seq__6666 = G__8345;
chunk__6667 = G__8346;
count__6668 = G__8347;
i__6669 = G__8348;
continue;
} else {
var stmt = cljs.core.first(seq__6666__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8349 = cljs.core.next(seq__6666__$1);
var G__8350 = null;
var G__8351 = (0);
var G__8352 = (0);
seq__6666 = G__8349;
chunk__6667 = G__8350;
count__6668 = G__8351;
i__6669 = G__8352;
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
var G__6671 = method;
switch (G__6671) {
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
var timeout_type_8354 = nex.typechecker.check_expression(env,cljs.core.first(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_8354),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.receive timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.receive timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_8354))))], null));
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

var seq__6673 = cljs.core.seq(body);
var chunk__6674 = null;
var count__6675 = (0);
var i__6676 = (0);
while(true){
if((i__6676 < count__6675)){
var stmt = chunk__6674.cljs$core$IIndexed$_nth$arity$2(null,i__6676);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8355 = seq__6673;
var G__8356 = chunk__6674;
var G__8357 = count__6675;
var G__8358 = (i__6676 + (1));
seq__6673 = G__8355;
chunk__6674 = G__8356;
count__6675 = G__8357;
i__6676 = G__8358;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6673);
if(temp__5823__auto__){
var seq__6673__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6673__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6673__$1);
var G__8359 = cljs.core.chunk_rest(seq__6673__$1);
var G__8360 = c__5673__auto__;
var G__8361 = cljs.core.count(c__5673__auto__);
var G__8362 = (0);
seq__6673 = G__8359;
chunk__6674 = G__8360;
count__6675 = G__8361;
i__6676 = G__8362;
continue;
} else {
var stmt = cljs.core.first(seq__6673__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8363 = cljs.core.next(seq__6673__$1);
var G__8364 = null;
var G__8365 = (0);
var G__8366 = (0);
seq__6673 = G__8363;
chunk__6674 = G__8364;
count__6675 = G__8365;
i__6676 = G__8366;
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
var timeout_type_8367 = nex.typechecker.check_expression(env,cljs.core.second(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_8367),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.send timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.send timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_8367))))], null));
}
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6677 = cljs.core.seq(body);
var chunk__6678 = null;
var count__6679 = (0);
var i__6680 = (0);
while(true){
if((i__6680 < count__6679)){
var stmt = chunk__6678.cljs$core$IIndexed$_nth$arity$2(null,i__6680);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8368 = seq__6677;
var G__8369 = chunk__6678;
var G__8370 = count__6679;
var G__8371 = (i__6680 + (1));
seq__6677 = G__8368;
chunk__6678 = G__8369;
count__6679 = G__8370;
i__6680 = G__8371;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6677);
if(temp__5823__auto__){
var seq__6677__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6677__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6677__$1);
var G__8372 = cljs.core.chunk_rest(seq__6677__$1);
var G__8373 = c__5673__auto__;
var G__8374 = cljs.core.count(c__5673__auto__);
var G__8375 = (0);
seq__6677 = G__8372;
chunk__6678 = G__8373;
count__6679 = G__8374;
i__6680 = G__8375;
continue;
} else {
var stmt = cljs.core.first(seq__6677__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8376 = cljs.core.next(seq__6677__$1);
var G__8377 = null;
var G__8378 = (0);
var G__8379 = (0);
seq__6677 = G__8376;
chunk__6678 = G__8377;
count__6679 = G__8378;
i__6680 = G__8379;
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
nex.typechecker.check_select = (function nex$typechecker$check_select(env,p__6681){
var map__6682 = p__6681;
var map__6682__$1 = cljs.core.__destructure_map(map__6682);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6682__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6682__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6682__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var seq__6683_8386 = cljs.core.seq(clauses);
var chunk__6684_8387 = null;
var count__6685_8388 = (0);
var i__6686_8389 = (0);
while(true){
if((i__6686_8389 < count__6685_8388)){
var clause_8390 = chunk__6684_8387.cljs$core$IIndexed$_nth$arity$2(null,i__6686_8389);
nex.typechecker.check_select_clause(env,clause_8390);


var G__8393 = seq__6683_8386;
var G__8394 = chunk__6684_8387;
var G__8395 = count__6685_8388;
var G__8396 = (i__6686_8389 + (1));
seq__6683_8386 = G__8393;
chunk__6684_8387 = G__8394;
count__6685_8388 = G__8395;
i__6686_8389 = G__8396;
continue;
} else {
var temp__5823__auto___8397 = cljs.core.seq(seq__6683_8386);
if(temp__5823__auto___8397){
var seq__6683_8398__$1 = temp__5823__auto___8397;
if(cljs.core.chunked_seq_QMARK_(seq__6683_8398__$1)){
var c__5673__auto___8401 = cljs.core.chunk_first(seq__6683_8398__$1);
var G__8402 = cljs.core.chunk_rest(seq__6683_8398__$1);
var G__8403 = c__5673__auto___8401;
var G__8404 = cljs.core.count(c__5673__auto___8401);
var G__8405 = (0);
seq__6683_8386 = G__8402;
chunk__6684_8387 = G__8403;
count__6685_8388 = G__8404;
i__6686_8389 = G__8405;
continue;
} else {
var clause_8406 = cljs.core.first(seq__6683_8398__$1);
nex.typechecker.check_select_clause(env,clause_8406);


var G__8411 = cljs.core.next(seq__6683_8398__$1);
var G__8412 = null;
var G__8413 = (0);
var G__8414 = (0);
seq__6683_8386 = G__8411;
chunk__6684_8387 = G__8412;
count__6685_8388 = G__8413;
i__6686_8389 = G__8414;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(timeout)){
var duration_type_8415 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(duration_type_8415),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"select timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(duration_type_8415))))], null));
}

var timeout_env_8419 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6687_8420 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(timeout));
var chunk__6688_8421 = null;
var count__6689_8422 = (0);
var i__6690_8423 = (0);
while(true){
if((i__6690_8423 < count__6689_8422)){
var stmt_8428 = chunk__6688_8421.cljs$core$IIndexed$_nth$arity$2(null,i__6690_8423);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_8419,stmt_8428) : nex.typechecker.check_statement.call(null,timeout_env_8419,stmt_8428));


var G__8430 = seq__6687_8420;
var G__8431 = chunk__6688_8421;
var G__8432 = count__6689_8422;
var G__8433 = (i__6690_8423 + (1));
seq__6687_8420 = G__8430;
chunk__6688_8421 = G__8431;
count__6689_8422 = G__8432;
i__6690_8423 = G__8433;
continue;
} else {
var temp__5823__auto___8435 = cljs.core.seq(seq__6687_8420);
if(temp__5823__auto___8435){
var seq__6687_8436__$1 = temp__5823__auto___8435;
if(cljs.core.chunked_seq_QMARK_(seq__6687_8436__$1)){
var c__5673__auto___8438 = cljs.core.chunk_first(seq__6687_8436__$1);
var G__8441 = cljs.core.chunk_rest(seq__6687_8436__$1);
var G__8443 = c__5673__auto___8438;
var G__8445 = cljs.core.count(c__5673__auto___8438);
var G__8446 = (0);
seq__6687_8420 = G__8441;
chunk__6688_8421 = G__8443;
count__6689_8422 = G__8445;
i__6690_8423 = G__8446;
continue;
} else {
var stmt_8447 = cljs.core.first(seq__6687_8436__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_8419,stmt_8447) : nex.typechecker.check_statement.call(null,timeout_env_8419,stmt_8447));


var G__8449 = cljs.core.next(seq__6687_8436__$1);
var G__8450 = null;
var G__8451 = (0);
var G__8452 = (0);
seq__6687_8420 = G__8449;
chunk__6688_8421 = G__8450;
count__6689_8422 = G__8451;
i__6690_8423 = G__8452;
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
var seq__6691 = cljs.core.seq(else$);
var chunk__6692 = null;
var count__6693 = (0);
var i__6694 = (0);
while(true){
if((i__6694 < count__6693)){
var stmt = chunk__6692.cljs$core$IIndexed$_nth$arity$2(null,i__6694);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__8459 = seq__6691;
var G__8460 = chunk__6692;
var G__8461 = count__6693;
var G__8462 = (i__6694 + (1));
seq__6691 = G__8459;
chunk__6692 = G__8460;
count__6693 = G__8461;
i__6694 = G__8462;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6691);
if(temp__5823__auto__){
var seq__6691__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6691__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6691__$1);
var G__8463 = cljs.core.chunk_rest(seq__6691__$1);
var G__8464 = c__5673__auto__;
var G__8465 = cljs.core.count(c__5673__auto__);
var G__8466 = (0);
seq__6691 = G__8463;
chunk__6692 = G__8464;
count__6693 = G__8465;
i__6694 = G__8466;
continue;
} else {
var stmt = cljs.core.first(seq__6691__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__8467 = cljs.core.next(seq__6691__$1);
var G__8468 = null;
var G__8469 = (0);
var G__8470 = (0);
seq__6691 = G__8467;
chunk__6692 = G__8468;
count__6693 = G__8469;
i__6694 = G__8470;
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
var G__6695 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6695__$1 = (((G__6695 instanceof cljs.core.Keyword))?G__6695.fqn:null);
switch (G__6695__$1) {
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
var block_env_8472 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6696_8473 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6697_8474 = null;
var count__6698_8475 = (0);
var i__6699_8476 = (0);
while(true){
if((i__6699_8476 < count__6698_8475)){
var s_8477 = chunk__6697_8474.cljs$core$IIndexed$_nth$arity$2(null,i__6699_8476);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_8472,s_8477) : nex.typechecker.check_statement.call(null,block_env_8472,s_8477));


var G__8478 = seq__6696_8473;
var G__8479 = chunk__6697_8474;
var G__8480 = count__6698_8475;
var G__8481 = (i__6699_8476 + (1));
seq__6696_8473 = G__8478;
chunk__6697_8474 = G__8479;
count__6698_8475 = G__8480;
i__6699_8476 = G__8481;
continue;
} else {
var temp__5823__auto___8482 = cljs.core.seq(seq__6696_8473);
if(temp__5823__auto___8482){
var seq__6696_8483__$1 = temp__5823__auto___8482;
if(cljs.core.chunked_seq_QMARK_(seq__6696_8483__$1)){
var c__5673__auto___8484 = cljs.core.chunk_first(seq__6696_8483__$1);
var G__8485 = cljs.core.chunk_rest(seq__6696_8483__$1);
var G__8486 = c__5673__auto___8484;
var G__8487 = cljs.core.count(c__5673__auto___8484);
var G__8488 = (0);
seq__6696_8473 = G__8485;
chunk__6697_8474 = G__8486;
count__6698_8475 = G__8487;
i__6699_8476 = G__8488;
continue;
} else {
var s_8489 = cljs.core.first(seq__6696_8483__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_8472,s_8489) : nex.typechecker.check_statement.call(null,block_env_8472,s_8489));


var G__8491 = cljs.core.next(seq__6696_8483__$1);
var G__8492 = null;
var G__8493 = (0);
var G__8494 = (0);
seq__6696_8473 = G__8491;
chunk__6697_8474 = G__8492;
count__6698_8475 = G__8493;
i__6699_8476 = G__8494;
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

var seq__6708 = cljs.core.seq(rescue);
var chunk__6709 = null;
var count__6710 = (0);
var i__6711 = (0);
while(true){
if((i__6711 < count__6710)){
var s = chunk__6709.cljs$core$IIndexed$_nth$arity$2(null,i__6711);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8495 = seq__6708;
var G__8496 = chunk__6709;
var G__8497 = count__6710;
var G__8498 = (i__6711 + (1));
seq__6708 = G__8495;
chunk__6709 = G__8496;
count__6710 = G__8497;
i__6711 = G__8498;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6708);
if(temp__5823__auto____$1){
var seq__6708__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6708__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6708__$1);
var G__8499 = cljs.core.chunk_rest(seq__6708__$1);
var G__8500 = c__5673__auto__;
var G__8501 = cljs.core.count(c__5673__auto__);
var G__8502 = (0);
seq__6708 = G__8499;
chunk__6709 = G__8500;
count__6710 = G__8501;
i__6711 = G__8502;
continue;
} else {
var s = cljs.core.first(seq__6708__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8503 = cljs.core.next(seq__6708__$1);
var G__8504 = null;
var G__8505 = (0);
var G__8506 = (0);
seq__6708 = G__8503;
chunk__6709 = G__8504;
count__6710 = G__8505;
i__6711 = G__8506;
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
var seq__6712 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6713 = null;
var count__6714 = (0);
var i__6715 = (0);
while(true){
if((i__6715 < count__6714)){
var s = chunk__6713.cljs$core$IIndexed$_nth$arity$2(null,i__6715);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8507 = seq__6712;
var G__8508 = chunk__6713;
var G__8509 = count__6714;
var G__8510 = (i__6715 + (1));
seq__6712 = G__8507;
chunk__6713 = G__8508;
count__6714 = G__8509;
i__6715 = G__8510;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6712);
if(temp__5823__auto__){
var seq__6712__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6712__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6712__$1);
var G__8511 = cljs.core.chunk_rest(seq__6712__$1);
var G__8512 = c__5673__auto__;
var G__8513 = cljs.core.count(c__5673__auto__);
var G__8514 = (0);
seq__6712 = G__8511;
chunk__6713 = G__8512;
count__6714 = G__8513;
i__6715 = G__8514;
continue;
} else {
var s = cljs.core.first(seq__6712__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8515 = cljs.core.next(seq__6712__$1);
var G__8516 = null;
var G__8517 = (0);
var G__8518 = (0);
seq__6712 = G__8515;
chunk__6713 = G__8516;
count__6714 = G__8517;
i__6715 = G__8518;
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

var seq__6716_8519 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6717_8520 = null;
var count__6718_8521 = (0);
var i__6719_8522 = (0);
while(true){
if((i__6719_8522 < count__6718_8521)){
var clause_8523 = chunk__6717_8520.cljs$core$IIndexed$_nth$arity$2(null,i__6719_8522);
var G__6724_8524 = env;
var G__6725_8525 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8523);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6724_8524,G__6725_8525) : nex.typechecker.check_statement.call(null,G__6724_8524,G__6725_8525));


var G__8526 = seq__6716_8519;
var G__8527 = chunk__6717_8520;
var G__8528 = count__6718_8521;
var G__8529 = (i__6719_8522 + (1));
seq__6716_8519 = G__8526;
chunk__6717_8520 = G__8527;
count__6718_8521 = G__8528;
i__6719_8522 = G__8529;
continue;
} else {
var temp__5823__auto___8531 = cljs.core.seq(seq__6716_8519);
if(temp__5823__auto___8531){
var seq__6716_8532__$1 = temp__5823__auto___8531;
if(cljs.core.chunked_seq_QMARK_(seq__6716_8532__$1)){
var c__5673__auto___8533 = cljs.core.chunk_first(seq__6716_8532__$1);
var G__8534 = cljs.core.chunk_rest(seq__6716_8532__$1);
var G__8535 = c__5673__auto___8533;
var G__8536 = cljs.core.count(c__5673__auto___8533);
var G__8537 = (0);
seq__6716_8519 = G__8534;
chunk__6717_8520 = G__8535;
count__6718_8521 = G__8536;
i__6719_8522 = G__8537;
continue;
} else {
var clause_8538 = cljs.core.first(seq__6716_8532__$1);
var G__6726_8539 = env;
var G__6727_8540 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8538);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6726_8539,G__6727_8540) : nex.typechecker.check_statement.call(null,G__6726_8539,G__6727_8540));


var G__8541 = cljs.core.next(seq__6716_8532__$1);
var G__8542 = null;
var G__8543 = (0);
var G__8544 = (0);
seq__6716_8519 = G__8541;
chunk__6717_8520 = G__8542;
count__6718_8521 = G__8543;
i__6719_8522 = G__8544;
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
var G__6728 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6728__$1 = (((G__6728 instanceof cljs.core.Keyword))?G__6728.fqn:null);
switch (G__6728__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6729 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6729) : nex.typechecker.references_result_QMARK_.call(null,G__6729));
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
var G__6730 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6730) : nex.typechecker.references_result_QMARK_.call(null,G__6730));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6732){
var map__6733 = p__6732;
var map__6733__$1 = cljs.core.__destructure_map(map__6733);
var method = map__6733__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6734_8546 = cljs.core.seq(params);
var chunk__6735_8547 = null;
var count__6736_8548 = (0);
var i__6737_8549 = (0);
while(true){
if((i__6737_8549 < count__6736_8548)){
var param_8551 = chunk__6735_8547.cljs$core$IIndexed$_nth$arity$2(null,i__6737_8549);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8551))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8551));
} else {
}


var G__8552 = seq__6734_8546;
var G__8553 = chunk__6735_8547;
var G__8554 = count__6736_8548;
var G__8555 = (i__6737_8549 + (1));
seq__6734_8546 = G__8552;
chunk__6735_8547 = G__8553;
count__6736_8548 = G__8554;
i__6737_8549 = G__8555;
continue;
} else {
var temp__5823__auto___8556 = cljs.core.seq(seq__6734_8546);
if(temp__5823__auto___8556){
var seq__6734_8557__$1 = temp__5823__auto___8556;
if(cljs.core.chunked_seq_QMARK_(seq__6734_8557__$1)){
var c__5673__auto___8558 = cljs.core.chunk_first(seq__6734_8557__$1);
var G__8559 = cljs.core.chunk_rest(seq__6734_8557__$1);
var G__8560 = c__5673__auto___8558;
var G__8561 = cljs.core.count(c__5673__auto___8558);
var G__8562 = (0);
seq__6734_8546 = G__8559;
chunk__6735_8547 = G__8560;
count__6736_8548 = G__8561;
i__6737_8549 = G__8562;
continue;
} else {
var param_8563 = cljs.core.first(seq__6734_8557__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8563))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8563));
} else {
}


var G__8564 = cljs.core.next(seq__6734_8557__$1);
var G__8565 = null;
var G__8566 = (0);
var G__8567 = (0);
seq__6734_8546 = G__8564;
chunk__6735_8547 = G__8565;
count__6736_8548 = G__8566;
i__6737_8549 = G__8567;
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
return cljs.core.some((function (p1__6731_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6731_SHARP_));
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

var seq__6742_8568 = cljs.core.seq(params);
var chunk__6743_8569 = null;
var count__6744_8570 = (0);
var i__6745_8571 = (0);
while(true){
if((i__6745_8571 < count__6744_8570)){
var param_8572 = chunk__6743_8569.cljs$core$IIndexed$_nth$arity$2(null,i__6745_8571);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8572),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8572);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8573 = seq__6742_8568;
var G__8574 = chunk__6743_8569;
var G__8575 = count__6744_8570;
var G__8576 = (i__6745_8571 + (1));
seq__6742_8568 = G__8573;
chunk__6743_8569 = G__8574;
count__6744_8570 = G__8575;
i__6745_8571 = G__8576;
continue;
} else {
var temp__5823__auto___8577 = cljs.core.seq(seq__6742_8568);
if(temp__5823__auto___8577){
var seq__6742_8578__$1 = temp__5823__auto___8577;
if(cljs.core.chunked_seq_QMARK_(seq__6742_8578__$1)){
var c__5673__auto___8579 = cljs.core.chunk_first(seq__6742_8578__$1);
var G__8580 = cljs.core.chunk_rest(seq__6742_8578__$1);
var G__8581 = c__5673__auto___8579;
var G__8582 = cljs.core.count(c__5673__auto___8579);
var G__8583 = (0);
seq__6742_8568 = G__8580;
chunk__6743_8569 = G__8581;
count__6744_8570 = G__8582;
i__6745_8571 = G__8583;
continue;
} else {
var param_8584 = cljs.core.first(seq__6742_8578__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8584),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8584);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8585 = cljs.core.next(seq__6742_8578__$1);
var G__8586 = null;
var G__8587 = (0);
var G__8588 = (0);
seq__6742_8568 = G__8585;
chunk__6743_8569 = G__8586;
count__6744_8570 = G__8587;
i__6745_8571 = G__8588;
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

var seq__6746_8589 = cljs.core.seq(require__$1);
var chunk__6747_8590 = null;
var count__6748_8591 = (0);
var i__6749_8592 = (0);
while(true){
if((i__6749_8592 < count__6748_8591)){
var assertion_8593 = chunk__6747_8590.cljs$core$IIndexed$_nth$arity$2(null,i__6749_8592);
var cond_type_8594 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8593));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8594,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8594)))], null));
}


var G__8595 = seq__6746_8589;
var G__8596 = chunk__6747_8590;
var G__8597 = count__6748_8591;
var G__8598 = (i__6749_8592 + (1));
seq__6746_8589 = G__8595;
chunk__6747_8590 = G__8596;
count__6748_8591 = G__8597;
i__6749_8592 = G__8598;
continue;
} else {
var temp__5823__auto___8599 = cljs.core.seq(seq__6746_8589);
if(temp__5823__auto___8599){
var seq__6746_8600__$1 = temp__5823__auto___8599;
if(cljs.core.chunked_seq_QMARK_(seq__6746_8600__$1)){
var c__5673__auto___8601 = cljs.core.chunk_first(seq__6746_8600__$1);
var G__8602 = cljs.core.chunk_rest(seq__6746_8600__$1);
var G__8603 = c__5673__auto___8601;
var G__8604 = cljs.core.count(c__5673__auto___8601);
var G__8605 = (0);
seq__6746_8589 = G__8602;
chunk__6747_8590 = G__8603;
count__6748_8591 = G__8604;
i__6749_8592 = G__8605;
continue;
} else {
var assertion_8606 = cljs.core.first(seq__6746_8600__$1);
var cond_type_8607 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8606));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8607,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8607)))], null));
}


var G__8608 = cljs.core.next(seq__6746_8600__$1);
var G__8609 = null;
var G__8610 = (0);
var G__8611 = (0);
seq__6746_8589 = G__8608;
chunk__6747_8590 = G__8609;
count__6748_8591 = G__8610;
i__6749_8592 = G__8611;
continue;
}
} else {
}
}
break;
}

var seq__6750_8612 = cljs.core.seq(body);
var chunk__6751_8613 = null;
var count__6752_8614 = (0);
var i__6753_8615 = (0);
while(true){
if((i__6753_8615 < count__6752_8614)){
var stmt_8616 = chunk__6751_8613.cljs$core$IIndexed$_nth$arity$2(null,i__6753_8615);
nex.typechecker.check_statement(method_env,stmt_8616);


var G__8617 = seq__6750_8612;
var G__8618 = chunk__6751_8613;
var G__8619 = count__6752_8614;
var G__8620 = (i__6753_8615 + (1));
seq__6750_8612 = G__8617;
chunk__6751_8613 = G__8618;
count__6752_8614 = G__8619;
i__6753_8615 = G__8620;
continue;
} else {
var temp__5823__auto___8621 = cljs.core.seq(seq__6750_8612);
if(temp__5823__auto___8621){
var seq__6750_8622__$1 = temp__5823__auto___8621;
if(cljs.core.chunked_seq_QMARK_(seq__6750_8622__$1)){
var c__5673__auto___8623 = cljs.core.chunk_first(seq__6750_8622__$1);
var G__8624 = cljs.core.chunk_rest(seq__6750_8622__$1);
var G__8625 = c__5673__auto___8623;
var G__8626 = cljs.core.count(c__5673__auto___8623);
var G__8627 = (0);
seq__6750_8612 = G__8624;
chunk__6751_8613 = G__8625;
count__6752_8614 = G__8626;
i__6753_8615 = G__8627;
continue;
} else {
var stmt_8628 = cljs.core.first(seq__6750_8622__$1);
nex.typechecker.check_statement(method_env,stmt_8628);


var G__8629 = cljs.core.next(seq__6750_8622__$1);
var G__8630 = null;
var G__8631 = (0);
var G__8632 = (0);
seq__6750_8612 = G__8629;
chunk__6751_8613 = G__8630;
count__6752_8614 = G__8631;
i__6753_8615 = G__8632;
continue;
}
} else {
}
}
break;
}

var seq__6754_8633 = cljs.core.seq(ensure);
var chunk__6755_8634 = null;
var count__6756_8635 = (0);
var i__6757_8636 = (0);
while(true){
if((i__6757_8636 < count__6756_8635)){
var assertion_8637 = chunk__6755_8634.cljs$core$IIndexed$_nth$arity$2(null,i__6757_8636);
var cond_type_8638 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8637));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8638,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8638)))], null));
}


var G__8640 = seq__6754_8633;
var G__8641 = chunk__6755_8634;
var G__8642 = count__6756_8635;
var G__8643 = (i__6757_8636 + (1));
seq__6754_8633 = G__8640;
chunk__6755_8634 = G__8641;
count__6756_8635 = G__8642;
i__6757_8636 = G__8643;
continue;
} else {
var temp__5823__auto___8644 = cljs.core.seq(seq__6754_8633);
if(temp__5823__auto___8644){
var seq__6754_8645__$1 = temp__5823__auto___8644;
if(cljs.core.chunked_seq_QMARK_(seq__6754_8645__$1)){
var c__5673__auto___8646 = cljs.core.chunk_first(seq__6754_8645__$1);
var G__8647 = cljs.core.chunk_rest(seq__6754_8645__$1);
var G__8648 = c__5673__auto___8646;
var G__8649 = cljs.core.count(c__5673__auto___8646);
var G__8650 = (0);
seq__6754_8633 = G__8647;
chunk__6755_8634 = G__8648;
count__6756_8635 = G__8649;
i__6757_8636 = G__8650;
continue;
} else {
var assertion_8651 = cljs.core.first(seq__6754_8645__$1);
var cond_type_8652 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8652,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8652)))], null));
}


var G__8653 = cljs.core.next(seq__6754_8645__$1);
var G__8654 = null;
var G__8655 = (0);
var G__8656 = (0);
seq__6754_8633 = G__8653;
chunk__6755_8634 = G__8654;
count__6756_8635 = G__8655;
i__6757_8636 = G__8656;
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

var seq__6758 = cljs.core.seq(rescue);
var chunk__6759 = null;
var count__6760 = (0);
var i__6761 = (0);
while(true){
if((i__6761 < count__6760)){
var stmt = chunk__6759.cljs$core$IIndexed$_nth$arity$2(null,i__6761);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8657 = seq__6758;
var G__8658 = chunk__6759;
var G__8659 = count__6760;
var G__8660 = (i__6761 + (1));
seq__6758 = G__8657;
chunk__6759 = G__8658;
count__6760 = G__8659;
i__6761 = G__8660;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6758);
if(temp__5823__auto__){
var seq__6758__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6758__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6758__$1);
var G__8661 = cljs.core.chunk_rest(seq__6758__$1);
var G__8662 = c__5673__auto__;
var G__8663 = cljs.core.count(c__5673__auto__);
var G__8664 = (0);
seq__6758 = G__8661;
chunk__6759 = G__8662;
count__6760 = G__8663;
i__6761 = G__8664;
continue;
} else {
var stmt = cljs.core.first(seq__6758__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8665 = cljs.core.next(seq__6758__$1);
var G__8666 = null;
var G__8667 = (0);
var G__8668 = (0);
seq__6758 = G__8665;
chunk__6759 = G__8666;
count__6760 = G__8667;
i__6761 = G__8668;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6762){
var map__6763 = p__6762;
var map__6763__$1 = cljs.core.__destructure_map(map__6763);
var constructor$ = map__6763__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6763__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6764_8669 = cljs.core.seq(params);
var chunk__6765_8670 = null;
var count__6766_8671 = (0);
var i__6767_8672 = (0);
while(true){
if((i__6767_8672 < count__6766_8671)){
var param_8673 = chunk__6765_8670.cljs$core$IIndexed$_nth$arity$2(null,i__6767_8672);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8673))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8673));
} else {
}


var G__8674 = seq__6764_8669;
var G__8675 = chunk__6765_8670;
var G__8676 = count__6766_8671;
var G__8677 = (i__6767_8672 + (1));
seq__6764_8669 = G__8674;
chunk__6765_8670 = G__8675;
count__6766_8671 = G__8676;
i__6767_8672 = G__8677;
continue;
} else {
var temp__5823__auto___8678 = cljs.core.seq(seq__6764_8669);
if(temp__5823__auto___8678){
var seq__6764_8679__$1 = temp__5823__auto___8678;
if(cljs.core.chunked_seq_QMARK_(seq__6764_8679__$1)){
var c__5673__auto___8680 = cljs.core.chunk_first(seq__6764_8679__$1);
var G__8681 = cljs.core.chunk_rest(seq__6764_8679__$1);
var G__8682 = c__5673__auto___8680;
var G__8683 = cljs.core.count(c__5673__auto___8680);
var G__8684 = (0);
seq__6764_8669 = G__8681;
chunk__6765_8670 = G__8682;
count__6766_8671 = G__8683;
i__6767_8672 = G__8684;
continue;
} else {
var param_8685 = cljs.core.first(seq__6764_8679__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8685))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8685));
} else {
}


var G__8686 = cljs.core.next(seq__6764_8679__$1);
var G__8687 = null;
var G__8688 = (0);
var G__8689 = (0);
seq__6764_8669 = G__8686;
chunk__6765_8670 = G__8687;
count__6766_8671 = G__8688;
i__6767_8672 = G__8689;
continue;
}
} else {
}
}
break;
}

var seq__6768_8690 = cljs.core.seq(params);
var chunk__6769_8691 = null;
var count__6770_8692 = (0);
var i__6771_8693 = (0);
while(true){
if((i__6771_8693 < count__6770_8692)){
var param_8694 = chunk__6769_8691.cljs$core$IIndexed$_nth$arity$2(null,i__6771_8693);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8694),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8694);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8695 = seq__6768_8690;
var G__8696 = chunk__6769_8691;
var G__8697 = count__6770_8692;
var G__8698 = (i__6771_8693 + (1));
seq__6768_8690 = G__8695;
chunk__6769_8691 = G__8696;
count__6770_8692 = G__8697;
i__6771_8693 = G__8698;
continue;
} else {
var temp__5823__auto___8699 = cljs.core.seq(seq__6768_8690);
if(temp__5823__auto___8699){
var seq__6768_8700__$1 = temp__5823__auto___8699;
if(cljs.core.chunked_seq_QMARK_(seq__6768_8700__$1)){
var c__5673__auto___8701 = cljs.core.chunk_first(seq__6768_8700__$1);
var G__8702 = cljs.core.chunk_rest(seq__6768_8700__$1);
var G__8703 = c__5673__auto___8701;
var G__8704 = cljs.core.count(c__5673__auto___8701);
var G__8705 = (0);
seq__6768_8690 = G__8702;
chunk__6769_8691 = G__8703;
count__6770_8692 = G__8704;
i__6771_8693 = G__8705;
continue;
} else {
var param_8706 = cljs.core.first(seq__6768_8700__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8706),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8706);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8707 = cljs.core.next(seq__6768_8700__$1);
var G__8709 = null;
var G__8710 = (0);
var G__8711 = (0);
seq__6768_8690 = G__8707;
chunk__6769_8691 = G__8709;
count__6770_8692 = G__8710;
i__6771_8693 = G__8711;
continue;
}
} else {
}
}
break;
}

var seq__6774_8712 = cljs.core.seq(require__$1);
var chunk__6775_8713 = null;
var count__6776_8714 = (0);
var i__6777_8715 = (0);
while(true){
if((i__6777_8715 < count__6776_8714)){
var assertion_8716 = chunk__6775_8713.cljs$core$IIndexed$_nth$arity$2(null,i__6777_8715);
if(cljs.core.truth_(assertion_8716)){
var cond_type_8717 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8716));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8717,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8717)))], null));
}
} else {
}


var G__8718 = seq__6774_8712;
var G__8719 = chunk__6775_8713;
var G__8720 = count__6776_8714;
var G__8721 = (i__6777_8715 + (1));
seq__6774_8712 = G__8718;
chunk__6775_8713 = G__8719;
count__6776_8714 = G__8720;
i__6777_8715 = G__8721;
continue;
} else {
var temp__5823__auto___8722 = cljs.core.seq(seq__6774_8712);
if(temp__5823__auto___8722){
var seq__6774_8723__$1 = temp__5823__auto___8722;
if(cljs.core.chunked_seq_QMARK_(seq__6774_8723__$1)){
var c__5673__auto___8724 = cljs.core.chunk_first(seq__6774_8723__$1);
var G__8725 = cljs.core.chunk_rest(seq__6774_8723__$1);
var G__8726 = c__5673__auto___8724;
var G__8727 = cljs.core.count(c__5673__auto___8724);
var G__8728 = (0);
seq__6774_8712 = G__8725;
chunk__6775_8713 = G__8726;
count__6776_8714 = G__8727;
i__6777_8715 = G__8728;
continue;
} else {
var assertion_8729 = cljs.core.first(seq__6774_8723__$1);
if(cljs.core.truth_(assertion_8729)){
var cond_type_8730 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8729));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8730,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8730)))], null));
}
} else {
}


var G__8731 = cljs.core.next(seq__6774_8723__$1);
var G__8732 = null;
var G__8733 = (0);
var G__8734 = (0);
seq__6774_8712 = G__8731;
chunk__6775_8713 = G__8732;
count__6776_8714 = G__8733;
i__6777_8715 = G__8734;
continue;
}
} else {
}
}
break;
}

var seq__6781_8735 = cljs.core.seq(body);
var chunk__6782_8736 = null;
var count__6783_8737 = (0);
var i__6784_8738 = (0);
while(true){
if((i__6784_8738 < count__6783_8737)){
var stmt_8739 = chunk__6782_8736.cljs$core$IIndexed$_nth$arity$2(null,i__6784_8738);
nex.typechecker.check_statement(ctor_env,stmt_8739);


var G__8740 = seq__6781_8735;
var G__8741 = chunk__6782_8736;
var G__8742 = count__6783_8737;
var G__8743 = (i__6784_8738 + (1));
seq__6781_8735 = G__8740;
chunk__6782_8736 = G__8741;
count__6783_8737 = G__8742;
i__6784_8738 = G__8743;
continue;
} else {
var temp__5823__auto___8744 = cljs.core.seq(seq__6781_8735);
if(temp__5823__auto___8744){
var seq__6781_8745__$1 = temp__5823__auto___8744;
if(cljs.core.chunked_seq_QMARK_(seq__6781_8745__$1)){
var c__5673__auto___8746 = cljs.core.chunk_first(seq__6781_8745__$1);
var G__8747 = cljs.core.chunk_rest(seq__6781_8745__$1);
var G__8748 = c__5673__auto___8746;
var G__8749 = cljs.core.count(c__5673__auto___8746);
var G__8750 = (0);
seq__6781_8735 = G__8747;
chunk__6782_8736 = G__8748;
count__6783_8737 = G__8749;
i__6784_8738 = G__8750;
continue;
} else {
var stmt_8751 = cljs.core.first(seq__6781_8745__$1);
nex.typechecker.check_statement(ctor_env,stmt_8751);


var G__8752 = cljs.core.next(seq__6781_8745__$1);
var G__8753 = null;
var G__8754 = (0);
var G__8755 = (0);
seq__6781_8735 = G__8752;
chunk__6782_8736 = G__8753;
count__6783_8737 = G__8754;
i__6784_8738 = G__8755;
continue;
}
} else {
}
}
break;
}

var seq__6791_8756 = cljs.core.seq(ensure);
var chunk__6792_8757 = null;
var count__6793_8758 = (0);
var i__6794_8759 = (0);
while(true){
if((i__6794_8759 < count__6793_8758)){
var assertion_8760 = chunk__6792_8757.cljs$core$IIndexed$_nth$arity$2(null,i__6794_8759);
if(cljs.core.truth_(assertion_8760)){
var cond_type_8761 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8760));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8761,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8761)))], null));
}
} else {
}


var G__8762 = seq__6791_8756;
var G__8763 = chunk__6792_8757;
var G__8764 = count__6793_8758;
var G__8765 = (i__6794_8759 + (1));
seq__6791_8756 = G__8762;
chunk__6792_8757 = G__8763;
count__6793_8758 = G__8764;
i__6794_8759 = G__8765;
continue;
} else {
var temp__5823__auto___8766 = cljs.core.seq(seq__6791_8756);
if(temp__5823__auto___8766){
var seq__6791_8767__$1 = temp__5823__auto___8766;
if(cljs.core.chunked_seq_QMARK_(seq__6791_8767__$1)){
var c__5673__auto___8768 = cljs.core.chunk_first(seq__6791_8767__$1);
var G__8769 = cljs.core.chunk_rest(seq__6791_8767__$1);
var G__8770 = c__5673__auto___8768;
var G__8771 = cljs.core.count(c__5673__auto___8768);
var G__8772 = (0);
seq__6791_8756 = G__8769;
chunk__6792_8757 = G__8770;
count__6793_8758 = G__8771;
i__6794_8759 = G__8772;
continue;
} else {
var assertion_8773 = cljs.core.first(seq__6791_8767__$1);
if(cljs.core.truth_(assertion_8773)){
var cond_type_8774 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8773));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8774,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8774)))], null));
}
} else {
}


var G__8775 = cljs.core.next(seq__6791_8767__$1);
var G__8776 = null;
var G__8777 = (0);
var G__8778 = (0);
seq__6791_8756 = G__8775;
chunk__6792_8757 = G__8776;
count__6793_8758 = G__8777;
i__6794_8759 = G__8778;
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

var seq__6803 = cljs.core.seq(rescue);
var chunk__6804 = null;
var count__6805 = (0);
var i__6806 = (0);
while(true){
if((i__6806 < count__6805)){
var stmt = chunk__6804.cljs$core$IIndexed$_nth$arity$2(null,i__6806);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8779 = seq__6803;
var G__8780 = chunk__6804;
var G__8781 = count__6805;
var G__8782 = (i__6806 + (1));
seq__6803 = G__8779;
chunk__6804 = G__8780;
count__6805 = G__8781;
i__6806 = G__8782;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6803);
if(temp__5823__auto__){
var seq__6803__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6803__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6803__$1);
var G__8783 = cljs.core.chunk_rest(seq__6803__$1);
var G__8784 = c__5673__auto__;
var G__8785 = cljs.core.count(c__5673__auto__);
var G__8786 = (0);
seq__6803 = G__8783;
chunk__6804 = G__8784;
count__6805 = G__8785;
i__6806 = G__8786;
continue;
} else {
var stmt = cljs.core.first(seq__6803__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8787 = cljs.core.next(seq__6803__$1);
var G__8788 = null;
var G__8789 = (0);
var G__8790 = (0);
seq__6803 = G__8787;
chunk__6804 = G__8788;
count__6805 = G__8789;
i__6806 = G__8790;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6811){
var map__6812 = p__6811;
var map__6812__$1 = cljs.core.__destructure_map(map__6812);
var class_def = map__6812__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6812__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var updated_body_8791 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
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
var updated_class_def_8792 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(class_def,new cljs.core.Keyword(null,"body","body",-2049205669),updated_body_8791);
nex.typechecker.env_add_class(env,name,updated_class_def_8792);

var seq__6817 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nex.typechecker.env_lookup_class(env,name)));
var chunk__6818 = null;
var count__6819 = (0);
var i__6820 = (0);
while(true){
if((i__6820 < count__6819)){
var section = chunk__6818.cljs$core$IIndexed$_nth$arity$2(null,i__6820);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6880_8797 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6881_8798 = null;
var count__6882_8799 = (0);
var i__6883_8800 = (0);
while(true){
if((i__6883_8800 < count__6882_8799)){
var member_8801 = chunk__6881_8798.cljs$core$IIndexed$_nth$arity$2(null,i__6883_8800);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8801),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8801),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8801)], null));
} else {
}


var G__8803 = seq__6880_8797;
var G__8804 = chunk__6881_8798;
var G__8805 = count__6882_8799;
var G__8806 = (i__6883_8800 + (1));
seq__6880_8797 = G__8803;
chunk__6881_8798 = G__8804;
count__6882_8799 = G__8805;
i__6883_8800 = G__8806;
continue;
} else {
var temp__5823__auto___8807 = cljs.core.seq(seq__6880_8797);
if(temp__5823__auto___8807){
var seq__6880_8808__$1 = temp__5823__auto___8807;
if(cljs.core.chunked_seq_QMARK_(seq__6880_8808__$1)){
var c__5673__auto___8809 = cljs.core.chunk_first(seq__6880_8808__$1);
var G__8810 = cljs.core.chunk_rest(seq__6880_8808__$1);
var G__8811 = c__5673__auto___8809;
var G__8812 = cljs.core.count(c__5673__auto___8809);
var G__8813 = (0);
seq__6880_8797 = G__8810;
chunk__6881_8798 = G__8811;
count__6882_8799 = G__8812;
i__6883_8800 = G__8813;
continue;
} else {
var member_8814 = cljs.core.first(seq__6880_8808__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8814),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8814),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8814),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8814)], null));
} else {
}


var G__8815 = cljs.core.next(seq__6880_8808__$1);
var G__8816 = null;
var G__8817 = (0);
var G__8818 = (0);
seq__6880_8797 = G__8815;
chunk__6881_8798 = G__8816;
count__6882_8799 = G__8817;
i__6883_8800 = G__8818;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6895_8819 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6896_8820 = null;
var count__6897_8821 = (0);
var i__6898_8822 = (0);
while(true){
if((i__6898_8822 < count__6897_8821)){
var ctor_8823 = chunk__6896_8820.cljs$core$IIndexed$_nth$arity$2(null,i__6898_8822);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8823),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8823),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8824 = seq__6895_8819;
var G__8825 = chunk__6896_8820;
var G__8826 = count__6897_8821;
var G__8827 = (i__6898_8822 + (1));
seq__6895_8819 = G__8824;
chunk__6896_8820 = G__8825;
count__6897_8821 = G__8826;
i__6898_8822 = G__8827;
continue;
} else {
var temp__5823__auto___8828 = cljs.core.seq(seq__6895_8819);
if(temp__5823__auto___8828){
var seq__6895_8829__$1 = temp__5823__auto___8828;
if(cljs.core.chunked_seq_QMARK_(seq__6895_8829__$1)){
var c__5673__auto___8830 = cljs.core.chunk_first(seq__6895_8829__$1);
var G__8831 = cljs.core.chunk_rest(seq__6895_8829__$1);
var G__8832 = c__5673__auto___8830;
var G__8833 = cljs.core.count(c__5673__auto___8830);
var G__8834 = (0);
seq__6895_8819 = G__8831;
chunk__6896_8820 = G__8832;
count__6897_8821 = G__8833;
i__6898_8822 = G__8834;
continue;
} else {
var ctor_8835 = cljs.core.first(seq__6895_8829__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8835),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8835),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8836 = cljs.core.next(seq__6895_8829__$1);
var G__8837 = null;
var G__8838 = (0);
var G__8839 = (0);
seq__6895_8819 = G__8836;
chunk__6896_8820 = G__8837;
count__6897_8821 = G__8838;
i__6898_8822 = G__8839;
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


var G__8840 = seq__6817;
var G__8841 = chunk__6818;
var G__8842 = count__6819;
var G__8843 = (i__6820 + (1));
seq__6817 = G__8840;
chunk__6818 = G__8841;
count__6819 = G__8842;
i__6820 = G__8843;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6817);
if(temp__5823__auto__){
var seq__6817__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6817__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6817__$1);
var G__8844 = cljs.core.chunk_rest(seq__6817__$1);
var G__8845 = c__5673__auto__;
var G__8846 = cljs.core.count(c__5673__auto__);
var G__8847 = (0);
seq__6817 = G__8844;
chunk__6818 = G__8845;
count__6819 = G__8846;
i__6820 = G__8847;
continue;
} else {
var section = cljs.core.first(seq__6817__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6911_8849 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6912_8850 = null;
var count__6913_8851 = (0);
var i__6914_8852 = (0);
while(true){
if((i__6914_8852 < count__6913_8851)){
var member_8853 = chunk__6912_8850.cljs$core$IIndexed$_nth$arity$2(null,i__6914_8852);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8853),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8853),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8853)], null));
} else {
}


var G__8854 = seq__6911_8849;
var G__8855 = chunk__6912_8850;
var G__8856 = count__6913_8851;
var G__8857 = (i__6914_8852 + (1));
seq__6911_8849 = G__8854;
chunk__6912_8850 = G__8855;
count__6913_8851 = G__8856;
i__6914_8852 = G__8857;
continue;
} else {
var temp__5823__auto___8858__$1 = cljs.core.seq(seq__6911_8849);
if(temp__5823__auto___8858__$1){
var seq__6911_8859__$1 = temp__5823__auto___8858__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6911_8859__$1)){
var c__5673__auto___8860 = cljs.core.chunk_first(seq__6911_8859__$1);
var G__8862 = cljs.core.chunk_rest(seq__6911_8859__$1);
var G__8863 = c__5673__auto___8860;
var G__8864 = cljs.core.count(c__5673__auto___8860);
var G__8865 = (0);
seq__6911_8849 = G__8862;
chunk__6912_8850 = G__8863;
count__6913_8851 = G__8864;
i__6914_8852 = G__8865;
continue;
} else {
var member_8866 = cljs.core.first(seq__6911_8859__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8866),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8866),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8866)], null));
} else {
}


var G__8867 = cljs.core.next(seq__6911_8859__$1);
var G__8868 = null;
var G__8869 = (0);
var G__8870 = (0);
seq__6911_8849 = G__8867;
chunk__6912_8850 = G__8868;
count__6913_8851 = G__8869;
i__6914_8852 = G__8870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6917_8871 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6918_8872 = null;
var count__6919_8873 = (0);
var i__6920_8874 = (0);
while(true){
if((i__6920_8874 < count__6919_8873)){
var ctor_8875 = chunk__6918_8872.cljs$core$IIndexed$_nth$arity$2(null,i__6920_8874);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8875),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8876 = seq__6917_8871;
var G__8877 = chunk__6918_8872;
var G__8878 = count__6919_8873;
var G__8879 = (i__6920_8874 + (1));
seq__6917_8871 = G__8876;
chunk__6918_8872 = G__8877;
count__6919_8873 = G__8878;
i__6920_8874 = G__8879;
continue;
} else {
var temp__5823__auto___8880__$1 = cljs.core.seq(seq__6917_8871);
if(temp__5823__auto___8880__$1){
var seq__6917_8881__$1 = temp__5823__auto___8880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6917_8881__$1)){
var c__5673__auto___8882 = cljs.core.chunk_first(seq__6917_8881__$1);
var G__8883 = cljs.core.chunk_rest(seq__6917_8881__$1);
var G__8884 = c__5673__auto___8882;
var G__8885 = cljs.core.count(c__5673__auto___8882);
var G__8886 = (0);
seq__6917_8871 = G__8883;
chunk__6918_8872 = G__8884;
count__6919_8873 = G__8885;
i__6920_8874 = G__8886;
continue;
} else {
var ctor_8887 = cljs.core.first(seq__6917_8881__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8887),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8887),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8888 = cljs.core.next(seq__6917_8881__$1);
var G__8889 = null;
var G__8890 = (0);
var G__8891 = (0);
seq__6917_8871 = G__8888;
chunk__6918_8872 = G__8889;
count__6919_8873 = G__8890;
i__6920_8874 = G__8891;
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


var G__8893 = cljs.core.next(seq__6817__$1);
var G__8894 = null;
var G__8895 = (0);
var G__8896 = (0);
seq__6817 = G__8893;
chunk__6818 = G__8894;
count__6819 = G__8895;
i__6820 = G__8896;
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
var seq__6923 = cljs.core.seq(parents);
var chunk__6924 = null;
var count__6925 = (0);
var i__6926 = (0);
while(true){
if((i__6926 < count__6925)){
var map__6936 = chunk__6924.cljs$core$IIndexed$_nth$arity$2(null,i__6926);
var map__6936__$1 = cljs.core.__destructure_map(map__6936);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6936__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__8897 = seq__6923;
var G__8898 = chunk__6924;
var G__8899 = count__6925;
var G__8900 = (i__6926 + (1));
seq__6923 = G__8897;
chunk__6924 = G__8898;
count__6925 = G__8899;
i__6926 = G__8900;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6923);
if(temp__5823__auto__){
var seq__6923__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6923__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6923__$1);
var G__8902 = cljs.core.chunk_rest(seq__6923__$1);
var G__8903 = c__5673__auto__;
var G__8904 = cljs.core.count(c__5673__auto__);
var G__8905 = (0);
seq__6923 = G__8902;
chunk__6924 = G__8903;
count__6925 = G__8904;
i__6926 = G__8905;
continue;
} else {
var map__6943 = cljs.core.first(seq__6923__$1);
var map__6943__$1 = cljs.core.__destructure_map(map__6943);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6943__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__8909 = cljs.core.next(seq__6923__$1);
var G__8910 = null;
var G__8911 = (0);
var G__8912 = (0);
seq__6923 = G__8909;
chunk__6924 = G__8910;
count__6925 = G__8911;
i__6926 = G__8912;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6962){
var map__6963 = p__6962;
var map__6963__$1 = cljs.core.__destructure_map(map__6963);
var class_def = map__6963__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6963__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6963__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6963__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
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

var seq__6967_8913 = cljs.core.seq(invariant__$1);
var chunk__6968_8914 = null;
var count__6969_8915 = (0);
var i__6970_8916 = (0);
while(true){
if((i__6970_8916 < count__6969_8915)){
var assertion_8917 = chunk__6968_8914.cljs$core$IIndexed$_nth$arity$2(null,i__6970_8916);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_8917;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8917);
} else {
return and__5140__auto__;
}
})())){
var inv_type_8918 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8917));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8918,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8918,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_8918)))], null));
}
} else {
}


var G__8919 = seq__6967_8913;
var G__8920 = chunk__6968_8914;
var G__8921 = count__6969_8915;
var G__8922 = (i__6970_8916 + (1));
seq__6967_8913 = G__8919;
chunk__6968_8914 = G__8920;
count__6969_8915 = G__8921;
i__6970_8916 = G__8922;
continue;
} else {
var temp__5823__auto___8924 = cljs.core.seq(seq__6967_8913);
if(temp__5823__auto___8924){
var seq__6967_8925__$1 = temp__5823__auto___8924;
if(cljs.core.chunked_seq_QMARK_(seq__6967_8925__$1)){
var c__5673__auto___8926 = cljs.core.chunk_first(seq__6967_8925__$1);
var G__8927 = cljs.core.chunk_rest(seq__6967_8925__$1);
var G__8928 = c__5673__auto___8926;
var G__8929 = cljs.core.count(c__5673__auto___8926);
var G__8930 = (0);
seq__6967_8913 = G__8927;
chunk__6968_8914 = G__8928;
count__6969_8915 = G__8929;
i__6970_8916 = G__8930;
continue;
} else {
var assertion_8931 = cljs.core.first(seq__6967_8925__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_8931;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8931);
} else {
return and__5140__auto__;
}
})())){
var inv_type_8932 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_8931));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8932,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_8932,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_8932)))], null));
}
} else {
}


var G__8933 = cljs.core.next(seq__6967_8925__$1);
var G__8934 = null;
var G__8935 = (0);
var G__8936 = (0);
seq__6967_8913 = G__8933;
chunk__6968_8914 = G__8934;
count__6969_8915 = G__8935;
i__6970_8916 = G__8936;
continue;
}
} else {
}
}
break;
}

var seq__6981_8937 = cljs.core.seq(body__$1);
var chunk__6982_8938 = null;
var count__6983_8939 = (0);
var i__6984_8940 = (0);
while(true){
if((i__6984_8940 < count__6983_8939)){
var section_8942 = chunk__6982_8938.cljs$core$IIndexed$_nth$arity$2(null,i__6984_8940);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8942),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7025_8943 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_8942));
var chunk__7026_8944 = null;
var count__7027_8945 = (0);
var i__7028_8946 = (0);
while(true){
if((i__7028_8946 < count__7027_8945)){
var member_8947 = chunk__7026_8944.cljs$core$IIndexed$_nth$arity$2(null,i__7028_8946);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8947),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8947);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8947),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8947))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8947));
}
} else {
}
}


var G__8949 = seq__7025_8943;
var G__8950 = chunk__7026_8944;
var G__8951 = count__7027_8945;
var G__8952 = (i__7028_8946 + (1));
seq__7025_8943 = G__8949;
chunk__7026_8944 = G__8950;
count__7027_8945 = G__8951;
i__7028_8946 = G__8952;
continue;
} else {
var temp__5823__auto___8953 = cljs.core.seq(seq__7025_8943);
if(temp__5823__auto___8953){
var seq__7025_8954__$1 = temp__5823__auto___8953;
if(cljs.core.chunked_seq_QMARK_(seq__7025_8954__$1)){
var c__5673__auto___8955 = cljs.core.chunk_first(seq__7025_8954__$1);
var G__8956 = cljs.core.chunk_rest(seq__7025_8954__$1);
var G__8957 = c__5673__auto___8955;
var G__8958 = cljs.core.count(c__5673__auto___8955);
var G__8959 = (0);
seq__7025_8943 = G__8956;
chunk__7026_8944 = G__8957;
count__7027_8945 = G__8958;
i__7028_8946 = G__8959;
continue;
} else {
var member_8960 = cljs.core.first(seq__7025_8954__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8960),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_8960);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8960),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_8960))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_8960));
}
} else {
}
}


var G__8961 = cljs.core.next(seq__7025_8954__$1);
var G__8962 = null;
var G__8963 = (0);
var G__8964 = (0);
seq__7025_8943 = G__8961;
chunk__7026_8944 = G__8962;
count__7027_8945 = G__8963;
i__7028_8946 = G__8964;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_8942),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7032_8965 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_8942));
var chunk__7033_8966 = null;
var count__7034_8967 = (0);
var i__7035_8968 = (0);
while(true){
if((i__7035_8968 < count__7034_8967)){
var ctor_8969 = chunk__7033_8966.cljs$core$IIndexed$_nth$arity$2(null,i__7035_8968);
nex.typechecker.check_constructor(env,name,ctor_8969);


var G__8970 = seq__7032_8965;
var G__8971 = chunk__7033_8966;
var G__8972 = count__7034_8967;
var G__8973 = (i__7035_8968 + (1));
seq__7032_8965 = G__8970;
chunk__7033_8966 = G__8971;
count__7034_8967 = G__8972;
i__7035_8968 = G__8973;
continue;
} else {
var temp__5823__auto___8974 = cljs.core.seq(seq__7032_8965);
if(temp__5823__auto___8974){
var seq__7032_8975__$1 = temp__5823__auto___8974;
if(cljs.core.chunked_seq_QMARK_(seq__7032_8975__$1)){
var c__5673__auto___8976 = cljs.core.chunk_first(seq__7032_8975__$1);
var G__8977 = cljs.core.chunk_rest(seq__7032_8975__$1);
var G__8978 = c__5673__auto___8976;
var G__8979 = cljs.core.count(c__5673__auto___8976);
var G__8980 = (0);
seq__7032_8965 = G__8977;
chunk__7033_8966 = G__8978;
count__7034_8967 = G__8979;
i__7035_8968 = G__8980;
continue;
} else {
var ctor_8981 = cljs.core.first(seq__7032_8975__$1);
nex.typechecker.check_constructor(env,name,ctor_8981);


var G__8982 = cljs.core.next(seq__7032_8975__$1);
var G__8983 = null;
var G__8984 = (0);
var G__8985 = (0);
seq__7032_8965 = G__8982;
chunk__7033_8966 = G__8983;
count__7034_8967 = G__8984;
i__7035_8968 = G__8985;
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


var G__8986 = seq__6981_8937;
var G__8987 = chunk__6982_8938;
var G__8988 = count__6983_8939;
var G__8989 = (i__6984_8940 + (1));
seq__6981_8937 = G__8986;
chunk__6982_8938 = G__8987;
count__6983_8939 = G__8988;
i__6984_8940 = G__8989;
continue;
} else {
var temp__5823__auto___8990 = cljs.core.seq(seq__6981_8937);
if(temp__5823__auto___8990){
var seq__6981_8991__$1 = temp__5823__auto___8990;
if(cljs.core.chunked_seq_QMARK_(seq__6981_8991__$1)){
var c__5673__auto___8992 = cljs.core.chunk_first(seq__6981_8991__$1);
var G__8997 = cljs.core.chunk_rest(seq__6981_8991__$1);
var G__8998 = c__5673__auto___8992;
var G__8999 = cljs.core.count(c__5673__auto___8992);
var G__9000 = (0);
seq__6981_8937 = G__8997;
chunk__6982_8938 = G__8998;
count__6983_8939 = G__8999;
i__6984_8940 = G__9000;
continue;
} else {
var section_9001 = cljs.core.first(seq__6981_8991__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9001),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7042_9002 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9001));
var chunk__7043_9003 = null;
var count__7044_9004 = (0);
var i__7045_9005 = (0);
while(true){
if((i__7045_9005 < count__7044_9004)){
var member_9006 = chunk__7043_9003.cljs$core$IIndexed$_nth$arity$2(null,i__7045_9005);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9006),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9006);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9006),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9006))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9006));
}
} else {
}
}


var G__9007 = seq__7042_9002;
var G__9008 = chunk__7043_9003;
var G__9009 = count__7044_9004;
var G__9010 = (i__7045_9005 + (1));
seq__7042_9002 = G__9007;
chunk__7043_9003 = G__9008;
count__7044_9004 = G__9009;
i__7045_9005 = G__9010;
continue;
} else {
var temp__5823__auto___9011__$1 = cljs.core.seq(seq__7042_9002);
if(temp__5823__auto___9011__$1){
var seq__7042_9012__$1 = temp__5823__auto___9011__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7042_9012__$1)){
var c__5673__auto___9013 = cljs.core.chunk_first(seq__7042_9012__$1);
var G__9014 = cljs.core.chunk_rest(seq__7042_9012__$1);
var G__9015 = c__5673__auto___9013;
var G__9016 = cljs.core.count(c__5673__auto___9013);
var G__9017 = (0);
seq__7042_9002 = G__9014;
chunk__7043_9003 = G__9015;
count__7044_9004 = G__9016;
i__7045_9005 = G__9017;
continue;
} else {
var member_9018 = cljs.core.first(seq__7042_9012__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9018),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9018);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9018),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9018))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9018));
}
} else {
}
}


var G__9019 = cljs.core.next(seq__7042_9012__$1);
var G__9020 = null;
var G__9021 = (0);
var G__9022 = (0);
seq__7042_9002 = G__9019;
chunk__7043_9003 = G__9020;
count__7044_9004 = G__9021;
i__7045_9005 = G__9022;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9001),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7052_9023 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9001));
var chunk__7053_9024 = null;
var count__7054_9025 = (0);
var i__7055_9026 = (0);
while(true){
if((i__7055_9026 < count__7054_9025)){
var ctor_9027 = chunk__7053_9024.cljs$core$IIndexed$_nth$arity$2(null,i__7055_9026);
nex.typechecker.check_constructor(env,name,ctor_9027);


var G__9028 = seq__7052_9023;
var G__9029 = chunk__7053_9024;
var G__9030 = count__7054_9025;
var G__9031 = (i__7055_9026 + (1));
seq__7052_9023 = G__9028;
chunk__7053_9024 = G__9029;
count__7054_9025 = G__9030;
i__7055_9026 = G__9031;
continue;
} else {
var temp__5823__auto___9032__$1 = cljs.core.seq(seq__7052_9023);
if(temp__5823__auto___9032__$1){
var seq__7052_9033__$1 = temp__5823__auto___9032__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7052_9033__$1)){
var c__5673__auto___9034 = cljs.core.chunk_first(seq__7052_9033__$1);
var G__9035 = cljs.core.chunk_rest(seq__7052_9033__$1);
var G__9036 = c__5673__auto___9034;
var G__9037 = cljs.core.count(c__5673__auto___9034);
var G__9038 = (0);
seq__7052_9023 = G__9035;
chunk__7053_9024 = G__9036;
count__7054_9025 = G__9037;
i__7055_9026 = G__9038;
continue;
} else {
var ctor_9039 = cljs.core.first(seq__7052_9033__$1);
nex.typechecker.check_constructor(env,name,ctor_9039);


var G__9040 = cljs.core.next(seq__7052_9033__$1);
var G__9041 = null;
var G__9042 = (0);
var G__9043 = (0);
seq__7052_9023 = G__9040;
chunk__7053_9024 = G__9041;
count__7054_9025 = G__9042;
i__7055_9026 = G__9043;
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


var G__9044 = cljs.core.next(seq__6981_8991__$1);
var G__9045 = null;
var G__9046 = (0);
var G__9047 = (0);
seq__6981_8937 = G__9044;
chunk__6982_8938 = G__9045;
count__6983_8939 = G__9046;
i__6984_8940 = G__9047;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6955_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6955_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6955_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6954_SHARP_));
}),body__$1)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6956_SHARP_));
}),body__$1)], 0));
var required_fields = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7060){
var map__7061 = p__7060;
var map__7061__$1 = cljs.core.__destructure_map(map__7061);
var field_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7061__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var t = nex.typechecker.normalize_type(field_type);
var a = nex.typechecker.attachable_type(t);
var base = ((cljs.core.map_QMARK_(a))?new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(a):a);
return (((!(nex.typechecker.detachable_type_QMARK_(t)))) && (((typeof base === 'string') && ((((!((nex.typechecker.env_lookup_class(env,base) == null)))) && ((!(nex.typechecker.builtin_type_QMARK_(base)))))))));
}),fields)));
var collect_assigned = (function nex$typechecker$check_class_$_collect_assigned(stmt){
var G__7065 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__7065__$1 = (((G__7065 instanceof cljs.core.Keyword))?G__7065.fqn:null);
switch (G__7065__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6957_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6957_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6958_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6958_SHARP_));
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

var seq__7070 = cljs.core.seq(constructors);
var chunk__7071 = null;
var count__7072 = (0);
var i__7073 = (0);
while(true){
if((i__7073 < count__7072)){
var map__7082 = chunk__7071.cljs$core$IIndexed$_nth$arity$2(null,i__7073);
var map__7082__$1 = cljs.core.__destructure_map(map__7082);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7082__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9057 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9058 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9057)));
if(cljs.core.seq(missing_9058)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9058))))], null));
} else {
}


var G__9059 = seq__7070;
var G__9060 = chunk__7071;
var G__9061 = count__7072;
var G__9062 = (i__7073 + (1));
seq__7070 = G__9059;
chunk__7071 = G__9060;
count__7072 = G__9061;
i__7073 = G__9062;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7070);
if(temp__5823__auto__){
var seq__7070__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7070__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7070__$1);
var G__9063 = cljs.core.chunk_rest(seq__7070__$1);
var G__9064 = c__5673__auto__;
var G__9065 = cljs.core.count(c__5673__auto__);
var G__9066 = (0);
seq__7070 = G__9063;
chunk__7071 = G__9064;
count__7072 = G__9065;
i__7073 = G__9066;
continue;
} else {
var map__7086 = cljs.core.first(seq__7070__$1);
var map__7086__$1 = cljs.core.__destructure_map(map__7086);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7086__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9067 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9068 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9067)));
if(cljs.core.seq(missing_9068)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9068))))], null));
} else {
}


var G__9069 = cljs.core.next(seq__7070__$1);
var G__9070 = null;
var G__9071 = (0);
var G__9072 = (0);
seq__7070 = G__9069;
chunk__7071 = G__9070;
count__7072 = G__9071;
i__7073 = G__9072;
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

var seq__7103_9080 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["to_string",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"equals",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"clone",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null)], null));
var chunk__7104_9081 = null;
var count__7105_9082 = (0);
var i__7106_9083 = (0);
while(true){
if((i__7106_9083 < count__7105_9082)){
var vec__7113_9085 = chunk__7104_9081.cljs$core$IIndexed$_nth$arity$2(null,i__7106_9083);
var method_name_9086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7113_9085,(0),null);
var sig_9087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7113_9085,(1),null);
nex.typechecker.env_add_method(env,"Any",method_name_9086,sig_9087);


var G__9088 = seq__7103_9080;
var G__9089 = chunk__7104_9081;
var G__9090 = count__7105_9082;
var G__9091 = (i__7106_9083 + (1));
seq__7103_9080 = G__9088;
chunk__7104_9081 = G__9089;
count__7105_9082 = G__9090;
i__7106_9083 = G__9091;
continue;
} else {
var temp__5823__auto___9092 = cljs.core.seq(seq__7103_9080);
if(temp__5823__auto___9092){
var seq__7103_9097__$1 = temp__5823__auto___9092;
if(cljs.core.chunked_seq_QMARK_(seq__7103_9097__$1)){
var c__5673__auto___9098 = cljs.core.chunk_first(seq__7103_9097__$1);
var G__9100 = cljs.core.chunk_rest(seq__7103_9097__$1);
var G__9101 = c__5673__auto___9098;
var G__9102 = cljs.core.count(c__5673__auto___9098);
var G__9103 = (0);
seq__7103_9080 = G__9100;
chunk__7104_9081 = G__9101;
count__7105_9082 = G__9102;
i__7106_9083 = G__9103;
continue;
} else {
var vec__7116_9105 = cljs.core.first(seq__7103_9097__$1);
var method_name_9106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7116_9105,(0),null);
var sig_9107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7116_9105,(1),null);
nex.typechecker.env_add_method(env,"Any",method_name_9106,sig_9107);


var G__9113 = cljs.core.next(seq__7103_9097__$1);
var G__9114 = null;
var G__9115 = (0);
var G__9116 = (0);
seq__7103_9080 = G__9113;
chunk__7104_9081 = G__9114;
count__7105_9082 = G__9115;
i__7106_9083 = G__9116;
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

var seq__7119_9122 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__7120_9124 = null;
var count__7121_9127 = (0);
var i__7122_9128 = (0);
while(true){
if((i__7122_9128 < count__7121_9127)){
var scalar_9129 = chunk__7120_9124.cljs$core$IIndexed$_nth$arity$2(null,i__7122_9128);
nex.typechecker.env_add_class(env,scalar_9129,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9129,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Any"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9129,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9129,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9138 = seq__7119_9122;
var G__9139 = chunk__7120_9124;
var G__9140 = count__7121_9127;
var G__9141 = (i__7122_9128 + (1));
seq__7119_9122 = G__9138;
chunk__7120_9124 = G__9139;
count__7121_9127 = G__9140;
i__7122_9128 = G__9141;
continue;
} else {
var temp__5823__auto___9142 = cljs.core.seq(seq__7119_9122);
if(temp__5823__auto___9142){
var seq__7119_9143__$1 = temp__5823__auto___9142;
if(cljs.core.chunked_seq_QMARK_(seq__7119_9143__$1)){
var c__5673__auto___9148 = cljs.core.chunk_first(seq__7119_9143__$1);
var G__9149 = cljs.core.chunk_rest(seq__7119_9143__$1);
var G__9150 = c__5673__auto___9148;
var G__9151 = cljs.core.count(c__5673__auto___9148);
var G__9152 = (0);
seq__7119_9122 = G__9149;
chunk__7120_9124 = G__9150;
count__7121_9127 = G__9151;
i__7122_9128 = G__9152;
continue;
} else {
var scalar_9154 = cljs.core.first(seq__7119_9143__$1);
nex.typechecker.env_add_class(env,scalar_9154,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9154,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Any"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9154,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9154,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9164 = cljs.core.next(seq__7119_9143__$1);
var G__9165 = null;
var G__9166 = (0);
var G__9167 = (0);
seq__7119_9122 = G__9164;
chunk__7120_9124 = G__9165;
count__7121_9127 = G__9166;
i__7122_9128 = G__9167;
continue;
}
} else {
}
}
break;
}

var seq__7129_9169 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["bitwise_set","bitwise_or","bitwise_logical_right_shift","bitwise_unset","bitwise_and","bitwise_right_shift","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","bitwise_rotate_left","bitwise_xor"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)]));
var chunk__7130_9170 = null;
var count__7131_9171 = (0);
var i__7132_9172 = (0);
while(true){
if((i__7132_9172 < count__7131_9171)){
var vec__7147_9177 = chunk__7130_9170.cljs$core$IIndexed$_nth$arity$2(null,i__7132_9172);
var method_name_9178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7147_9177,(0),null);
var sig_9179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7147_9177,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9178,sig_9179);


var G__9180 = seq__7129_9169;
var G__9181 = chunk__7130_9170;
var G__9182 = count__7131_9171;
var G__9183 = (i__7132_9172 + (1));
seq__7129_9169 = G__9180;
chunk__7130_9170 = G__9181;
count__7131_9171 = G__9182;
i__7132_9172 = G__9183;
continue;
} else {
var temp__5823__auto___9184 = cljs.core.seq(seq__7129_9169);
if(temp__5823__auto___9184){
var seq__7129_9185__$1 = temp__5823__auto___9184;
if(cljs.core.chunked_seq_QMARK_(seq__7129_9185__$1)){
var c__5673__auto___9186 = cljs.core.chunk_first(seq__7129_9185__$1);
var G__9187 = cljs.core.chunk_rest(seq__7129_9185__$1);
var G__9188 = c__5673__auto___9186;
var G__9189 = cljs.core.count(c__5673__auto___9186);
var G__9190 = (0);
seq__7129_9169 = G__9187;
chunk__7130_9170 = G__9188;
count__7131_9171 = G__9189;
i__7132_9172 = G__9190;
continue;
} else {
var vec__7153_9191 = cljs.core.first(seq__7129_9185__$1);
var method_name_9192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7153_9191,(0),null);
var sig_9193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7153_9191,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9192,sig_9193);


var G__9194 = cljs.core.next(seq__7129_9185__$1);
var G__9195 = null;
var G__9196 = (0);
var G__9197 = (0);
seq__7129_9169 = G__9194;
chunk__7130_9170 = G__9195;
count__7131_9171 = G__9196;
i__7132_9172 = G__9197;
continue;
}
} else {
}
}
break;
}

var seq__7157_9198 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__7158_9199 = null;
var count__7159_9200 = (0);
var i__7160_9201 = (0);
while(true){
if((i__7160_9201 < count__7159_9200)){
var vec__7175_9202 = chunk__7158_9199.cljs$core$IIndexed$_nth$arity$2(null,i__7160_9201);
var method_name_9203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7175_9202,(0),null);
var sig_9204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7175_9202,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9203,sig_9204);


var G__9205 = seq__7157_9198;
var G__9206 = chunk__7158_9199;
var G__9207 = count__7159_9200;
var G__9208 = (i__7160_9201 + (1));
seq__7157_9198 = G__9205;
chunk__7158_9199 = G__9206;
count__7159_9200 = G__9207;
i__7160_9201 = G__9208;
continue;
} else {
var temp__5823__auto___9209 = cljs.core.seq(seq__7157_9198);
if(temp__5823__auto___9209){
var seq__7157_9210__$1 = temp__5823__auto___9209;
if(cljs.core.chunked_seq_QMARK_(seq__7157_9210__$1)){
var c__5673__auto___9211 = cljs.core.chunk_first(seq__7157_9210__$1);
var G__9212 = cljs.core.chunk_rest(seq__7157_9210__$1);
var G__9213 = c__5673__auto___9211;
var G__9214 = cljs.core.count(c__5673__auto___9211);
var G__9215 = (0);
seq__7157_9198 = G__9212;
chunk__7158_9199 = G__9213;
count__7159_9200 = G__9214;
i__7160_9201 = G__9215;
continue;
} else {
var vec__7180_9216 = cljs.core.first(seq__7157_9210__$1);
var method_name_9217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7180_9216,(0),null);
var sig_9218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7180_9216,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9217,sig_9218);


var G__9219 = cljs.core.next(seq__7157_9210__$1);
var G__9220 = null;
var G__9221 = (0);
var G__9222 = (0);
seq__7157_9198 = G__9219;
chunk__7158_9199 = G__9220;
count__7159_9200 = G__9221;
i__7160_9201 = G__9222;
continue;
}
} else {
}
}
break;
}

var seq__7184_9223 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__7185_9224 = null;
var count__7186_9225 = (0);
var i__7187_9226 = (0);
while(true){
if((i__7187_9226 < count__7186_9225)){
var vec__7195_9227 = chunk__7185_9224.cljs$core$IIndexed$_nth$arity$2(null,i__7187_9226);
var method_name_9228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7195_9227,(0),null);
var sig_9229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7195_9227,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9228,sig_9229);


var G__9230 = seq__7184_9223;
var G__9231 = chunk__7185_9224;
var G__9232 = count__7186_9225;
var G__9233 = (i__7187_9226 + (1));
seq__7184_9223 = G__9230;
chunk__7185_9224 = G__9231;
count__7186_9225 = G__9232;
i__7187_9226 = G__9233;
continue;
} else {
var temp__5823__auto___9234 = cljs.core.seq(seq__7184_9223);
if(temp__5823__auto___9234){
var seq__7184_9235__$1 = temp__5823__auto___9234;
if(cljs.core.chunked_seq_QMARK_(seq__7184_9235__$1)){
var c__5673__auto___9236 = cljs.core.chunk_first(seq__7184_9235__$1);
var G__9237 = cljs.core.chunk_rest(seq__7184_9235__$1);
var G__9238 = c__5673__auto___9236;
var G__9239 = cljs.core.count(c__5673__auto___9236);
var G__9240 = (0);
seq__7184_9223 = G__9237;
chunk__7185_9224 = G__9238;
count__7186_9225 = G__9239;
i__7187_9226 = G__9240;
continue;
} else {
var vec__7200_9241 = cljs.core.first(seq__7184_9235__$1);
var method_name_9242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7200_9241,(0),null);
var sig_9243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7200_9241,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9242,sig_9243);


var G__9244 = cljs.core.next(seq__7184_9235__$1);
var G__9245 = null;
var G__9246 = (0);
var G__9247 = (0);
seq__7184_9223 = G__9244;
chunk__7185_9224 = G__9245;
count__7186_9225 = G__9246;
i__7187_9226 = G__9247;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Task",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Task",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7203_9248 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 4, ["await",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"cancel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_done",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_cancelled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)], null));
var chunk__7204_9249 = null;
var count__7205_9250 = (0);
var i__7206_9251 = (0);
while(true){
if((i__7206_9251 < count__7205_9250)){
var vec__7214_9252 = chunk__7204_9249.cljs$core$IIndexed$_nth$arity$2(null,i__7206_9251);
var method_name_9253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7214_9252,(0),null);
var sig_9254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7214_9252,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_9253,sig_9254);


var G__9255 = seq__7203_9248;
var G__9256 = chunk__7204_9249;
var G__9257 = count__7205_9250;
var G__9258 = (i__7206_9251 + (1));
seq__7203_9248 = G__9255;
chunk__7204_9249 = G__9256;
count__7205_9250 = G__9257;
i__7206_9251 = G__9258;
continue;
} else {
var temp__5823__auto___9259 = cljs.core.seq(seq__7203_9248);
if(temp__5823__auto___9259){
var seq__7203_9260__$1 = temp__5823__auto___9259;
if(cljs.core.chunked_seq_QMARK_(seq__7203_9260__$1)){
var c__5673__auto___9261 = cljs.core.chunk_first(seq__7203_9260__$1);
var G__9262 = cljs.core.chunk_rest(seq__7203_9260__$1);
var G__9263 = c__5673__auto___9261;
var G__9264 = cljs.core.count(c__5673__auto___9261);
var G__9265 = (0);
seq__7203_9248 = G__9262;
chunk__7204_9249 = G__9263;
count__7205_9250 = G__9264;
i__7206_9251 = G__9265;
continue;
} else {
var vec__7217_9266 = cljs.core.first(seq__7203_9260__$1);
var method_name_9267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7217_9266,(0),null);
var sig_9268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7217_9266,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_9267,sig_9268);


var G__9269 = cljs.core.next(seq__7203_9260__$1);
var G__9270 = null;
var G__9271 = (0);
var G__9272 = (0);
seq__7203_9248 = G__9269;
chunk__7204_9249 = G__9270;
count__7205_9250 = G__9271;
i__7206_9251 = G__9272;
continue;
}
} else {
}
}
break;
}

var seq__7222_9273 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__7223_9274 = null;
var count__7224_9275 = (0);
var i__7225_9276 = (0);
while(true){
if((i__7225_9276 < count__7224_9275)){
var vec__7238_9278 = chunk__7223_9274.cljs$core$IIndexed$_nth$arity$2(null,i__7225_9276);
var method_name_9279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7238_9278,(0),null);
var sig_9280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7238_9278,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9279,sig_9280);


var G__9281 = seq__7222_9273;
var G__9282 = chunk__7223_9274;
var G__9283 = count__7224_9275;
var G__9284 = (i__7225_9276 + (1));
seq__7222_9273 = G__9281;
chunk__7223_9274 = G__9282;
count__7224_9275 = G__9283;
i__7225_9276 = G__9284;
continue;
} else {
var temp__5823__auto___9285 = cljs.core.seq(seq__7222_9273);
if(temp__5823__auto___9285){
var seq__7222_9286__$1 = temp__5823__auto___9285;
if(cljs.core.chunked_seq_QMARK_(seq__7222_9286__$1)){
var c__5673__auto___9287 = cljs.core.chunk_first(seq__7222_9286__$1);
var G__9288 = cljs.core.chunk_rest(seq__7222_9286__$1);
var G__9289 = c__5673__auto___9287;
var G__9290 = cljs.core.count(c__5673__auto___9287);
var G__9291 = (0);
seq__7222_9273 = G__9288;
chunk__7223_9274 = G__9289;
count__7224_9275 = G__9290;
i__7225_9276 = G__9291;
continue;
} else {
var vec__7242_9292 = cljs.core.first(seq__7222_9286__$1);
var method_name_9293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7242_9292,(0),null);
var sig_9294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7242_9292,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9293,sig_9294);


var G__9295 = cljs.core.next(seq__7222_9286__$1);
var G__9296 = null;
var G__9297 = (0);
var G__9298 = (0);
seq__7222_9273 = G__9295;
chunk__7223_9274 = G__9296;
count__7224_9275 = G__9297;
i__7225_9276 = G__9298;
continue;
}
} else {
}
}
break;
}

var seq__7245_9299 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__7246_9300 = null;
var count__7247_9301 = (0);
var i__7248_9302 = (0);
while(true){
if((i__7248_9302 < count__7247_9301)){
var vec__7259_9303 = chunk__7246_9300.cljs$core$IIndexed$_nth$arity$2(null,i__7248_9302);
var method_name_9304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259_9303,(0),null);
var sig_9305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7259_9303,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9304,sig_9305);


var G__9306 = seq__7245_9299;
var G__9307 = chunk__7246_9300;
var G__9308 = count__7247_9301;
var G__9309 = (i__7248_9302 + (1));
seq__7245_9299 = G__9306;
chunk__7246_9300 = G__9307;
count__7247_9301 = G__9308;
i__7248_9302 = G__9309;
continue;
} else {
var temp__5823__auto___9310 = cljs.core.seq(seq__7245_9299);
if(temp__5823__auto___9310){
var seq__7245_9311__$1 = temp__5823__auto___9310;
if(cljs.core.chunked_seq_QMARK_(seq__7245_9311__$1)){
var c__5673__auto___9312 = cljs.core.chunk_first(seq__7245_9311__$1);
var G__9313 = cljs.core.chunk_rest(seq__7245_9311__$1);
var G__9314 = c__5673__auto___9312;
var G__9315 = cljs.core.count(c__5673__auto___9312);
var G__9316 = (0);
seq__7245_9299 = G__9313;
chunk__7246_9300 = G__9314;
count__7247_9301 = G__9315;
i__7248_9302 = G__9316;
continue;
} else {
var vec__7262_9317 = cljs.core.first(seq__7245_9311__$1);
var method_name_9318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7262_9317,(0),null);
var sig_9319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7262_9317,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9318,sig_9319);


var G__9320 = cljs.core.next(seq__7245_9311__$1);
var G__9321 = null;
var G__9322 = (0);
var G__9323 = (0);
seq__7245_9299 = G__9320;
chunk__7246_9300 = G__9321;
count__7247_9301 = G__9322;
i__7248_9302 = G__9323;
continue;
}
} else {
}
}
break;
}

var seq__7267_9324 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7268_9325 = null;
var count__7269_9326 = (0);
var i__7270_9327 = (0);
while(true){
if((i__7270_9327 < count__7269_9326)){
var vec__7278_9343 = chunk__7268_9325.cljs$core$IIndexed$_nth$arity$2(null,i__7270_9327);
var method_name_9344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7278_9343,(0),null);
var sig_9345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7278_9343,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9344,sig_9345);


var G__9346 = seq__7267_9324;
var G__9347 = chunk__7268_9325;
var G__9348 = count__7269_9326;
var G__9349 = (i__7270_9327 + (1));
seq__7267_9324 = G__9346;
chunk__7268_9325 = G__9347;
count__7269_9326 = G__9348;
i__7270_9327 = G__9349;
continue;
} else {
var temp__5823__auto___9350 = cljs.core.seq(seq__7267_9324);
if(temp__5823__auto___9350){
var seq__7267_9351__$1 = temp__5823__auto___9350;
if(cljs.core.chunked_seq_QMARK_(seq__7267_9351__$1)){
var c__5673__auto___9352 = cljs.core.chunk_first(seq__7267_9351__$1);
var G__9353 = cljs.core.chunk_rest(seq__7267_9351__$1);
var G__9354 = c__5673__auto___9352;
var G__9355 = cljs.core.count(c__5673__auto___9352);
var G__9356 = (0);
seq__7267_9324 = G__9353;
chunk__7268_9325 = G__9354;
count__7269_9326 = G__9355;
i__7270_9327 = G__9356;
continue;
} else {
var vec__7281_9357 = cljs.core.first(seq__7267_9351__$1);
var method_name_9358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7281_9357,(0),null);
var sig_9359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7281_9357,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9358,sig_9359);


var G__9360 = cljs.core.next(seq__7267_9351__$1);
var G__9361 = null;
var G__9362 = (0);
var G__9363 = (0);
seq__7267_9324 = G__9360;
chunk__7268_9325 = G__9361;
count__7269_9326 = G__9362;
i__7270_9327 = G__9363;
continue;
}
} else {
}
}
break;
}

var seq__7284_9364 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7285_9365 = null;
var count__7286_9366 = (0);
var i__7287_9367 = (0);
while(true){
if((i__7287_9367 < count__7286_9366)){
var vec__7301_9368 = chunk__7285_9365.cljs$core$IIndexed$_nth$arity$2(null,i__7287_9367);
var method_name_9369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7301_9368,(0),null);
var sig_9370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7301_9368,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9369,sig_9370);


var G__9371 = seq__7284_9364;
var G__9372 = chunk__7285_9365;
var G__9373 = count__7286_9366;
var G__9374 = (i__7287_9367 + (1));
seq__7284_9364 = G__9371;
chunk__7285_9365 = G__9372;
count__7286_9366 = G__9373;
i__7287_9367 = G__9374;
continue;
} else {
var temp__5823__auto___9375 = cljs.core.seq(seq__7284_9364);
if(temp__5823__auto___9375){
var seq__7284_9376__$1 = temp__5823__auto___9375;
if(cljs.core.chunked_seq_QMARK_(seq__7284_9376__$1)){
var c__5673__auto___9377 = cljs.core.chunk_first(seq__7284_9376__$1);
var G__9378 = cljs.core.chunk_rest(seq__7284_9376__$1);
var G__9379 = c__5673__auto___9377;
var G__9380 = cljs.core.count(c__5673__auto___9377);
var G__9381 = (0);
seq__7284_9364 = G__9378;
chunk__7285_9365 = G__9379;
count__7286_9366 = G__9380;
i__7287_9367 = G__9381;
continue;
} else {
var vec__7310_9382 = cljs.core.first(seq__7284_9376__$1);
var method_name_9383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7310_9382,(0),null);
var sig_9384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7310_9382,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9383,sig_9384);


var G__9385 = cljs.core.next(seq__7284_9376__$1);
var G__9386 = null;
var G__9387 = (0);
var G__9388 = (0);
seq__7284_9364 = G__9385;
chunk__7285_9365 = G__9386;
count__7286_9366 = G__9387;
i__7287_9367 = G__9388;
continue;
}
} else {
}
}
break;
}

var seq__7313_9389 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7314_9390 = null;
var count__7315_9391 = (0);
var i__7316_9392 = (0);
while(true){
if((i__7316_9392 < count__7315_9391)){
var vec__7336_9393 = chunk__7314_9390.cljs$core$IIndexed$_nth$arity$2(null,i__7316_9392);
var method_name_9394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7336_9393,(0),null);
var sig_9395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7336_9393,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9394,sig_9395);


var G__9396 = seq__7313_9389;
var G__9397 = chunk__7314_9390;
var G__9398 = count__7315_9391;
var G__9399 = (i__7316_9392 + (1));
seq__7313_9389 = G__9396;
chunk__7314_9390 = G__9397;
count__7315_9391 = G__9398;
i__7316_9392 = G__9399;
continue;
} else {
var temp__5823__auto___9400 = cljs.core.seq(seq__7313_9389);
if(temp__5823__auto___9400){
var seq__7313_9401__$1 = temp__5823__auto___9400;
if(cljs.core.chunked_seq_QMARK_(seq__7313_9401__$1)){
var c__5673__auto___9402 = cljs.core.chunk_first(seq__7313_9401__$1);
var G__9403 = cljs.core.chunk_rest(seq__7313_9401__$1);
var G__9404 = c__5673__auto___9402;
var G__9405 = cljs.core.count(c__5673__auto___9402);
var G__9406 = (0);
seq__7313_9389 = G__9403;
chunk__7314_9390 = G__9404;
count__7315_9391 = G__9405;
i__7316_9392 = G__9406;
continue;
} else {
var vec__7342_9407 = cljs.core.first(seq__7313_9401__$1);
var method_name_9408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7342_9407,(0),null);
var sig_9409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7342_9407,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9408,sig_9409);


var G__9410 = cljs.core.next(seq__7313_9401__$1);
var G__9411 = null;
var G__9412 = (0);
var G__9413 = (0);
seq__7313_9389 = G__9410;
chunk__7314_9390 = G__9411;
count__7315_9391 = G__9412;
i__7316_9392 = G__9413;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7345_9414 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","reverse","contains","push","sort","cursor","remove","length","last","join","slice","clone","add","set","size","index_of","get","equals","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__7349_9415 = null;
var count__7350_9416 = (0);
var i__7351_9417 = (0);
while(true){
if((i__7351_9417 < count__7350_9416)){
var vec__7362_9423 = chunk__7349_9415.cljs$core$IIndexed$_nth$arity$2(null,i__7351_9417);
var method_name_9424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7362_9423,(0),null);
var sig_9425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7362_9423,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9424,sig_9425);


var G__9426 = seq__7345_9414;
var G__9427 = chunk__7349_9415;
var G__9428 = count__7350_9416;
var G__9429 = (i__7351_9417 + (1));
seq__7345_9414 = G__9426;
chunk__7349_9415 = G__9427;
count__7350_9416 = G__9428;
i__7351_9417 = G__9429;
continue;
} else {
var temp__5823__auto___9430 = cljs.core.seq(seq__7345_9414);
if(temp__5823__auto___9430){
var seq__7345_9431__$1 = temp__5823__auto___9430;
if(cljs.core.chunked_seq_QMARK_(seq__7345_9431__$1)){
var c__5673__auto___9432 = cljs.core.chunk_first(seq__7345_9431__$1);
var G__9433 = cljs.core.chunk_rest(seq__7345_9431__$1);
var G__9434 = c__5673__auto___9432;
var G__9435 = cljs.core.count(c__5673__auto___9432);
var G__9436 = (0);
seq__7345_9414 = G__9433;
chunk__7349_9415 = G__9434;
count__7350_9416 = G__9435;
i__7351_9417 = G__9436;
continue;
} else {
var vec__7365_9437 = cljs.core.first(seq__7345_9431__$1);
var method_name_9438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7365_9437,(0),null);
var sig_9439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7365_9437,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9438,sig_9439);


var G__9440 = cljs.core.next(seq__7345_9431__$1);
var G__9441 = null;
var G__9442 = (0);
var G__9443 = (0);
seq__7345_9414 = G__9440;
chunk__7349_9415 = G__9441;
count__7350_9416 = G__9442;
i__7351_9417 = G__9443;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__7368_9444 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","to_string","try_get","cursor","remove","clone","set","size","get","equals","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K","V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K","V"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7369_9445 = null;
var count__7370_9446 = (0);
var i__7371_9447 = (0);
while(true){
if((i__7371_9447 < count__7370_9446)){
var vec__7389_9448 = chunk__7369_9445.cljs$core$IIndexed$_nth$arity$2(null,i__7371_9447);
var method_name_9449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7389_9448,(0),null);
var sig_9450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7389_9448,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_9449,sig_9450);


var G__9451 = seq__7368_9444;
var G__9452 = chunk__7369_9445;
var G__9453 = count__7370_9446;
var G__9454 = (i__7371_9447 + (1));
seq__7368_9444 = G__9451;
chunk__7369_9445 = G__9452;
count__7370_9446 = G__9453;
i__7371_9447 = G__9454;
continue;
} else {
var temp__5823__auto___9455 = cljs.core.seq(seq__7368_9444);
if(temp__5823__auto___9455){
var seq__7368_9456__$1 = temp__5823__auto___9455;
if(cljs.core.chunked_seq_QMARK_(seq__7368_9456__$1)){
var c__5673__auto___9457 = cljs.core.chunk_first(seq__7368_9456__$1);
var G__9458 = cljs.core.chunk_rest(seq__7368_9456__$1);
var G__9459 = c__5673__auto___9457;
var G__9460 = cljs.core.count(c__5673__auto___9457);
var G__9461 = (0);
seq__7368_9444 = G__9458;
chunk__7369_9445 = G__9459;
count__7370_9446 = G__9460;
i__7371_9447 = G__9461;
continue;
} else {
var vec__7395_9462 = cljs.core.first(seq__7368_9456__$1);
var method_name_9463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7395_9462,(0),null);
var sig_9464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7395_9462,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_9463,sig_9464);


var G__9465 = cljs.core.next(seq__7368_9456__$1);
var G__9466 = null;
var G__9467 = (0);
var G__9468 = (0);
seq__7368_9444 = G__9465;
chunk__7369_9445 = G__9466;
count__7370_9446 = G__9467;
i__7371_9447 = G__9468;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Set",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

nex.typechecker.env_add_method(env,"Set","from_array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"values",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null));

var seq__7401_9469 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","to_string","contains","union","cursor","intersection","clone","size","difference","equals","symmetric_difference"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)]));
var chunk__7402_9470 = null;
var count__7403_9471 = (0);
var i__7404_9472 = (0);
while(true){
if((i__7404_9472 < count__7403_9471)){
var vec__7413_9473 = chunk__7402_9470.cljs$core$IIndexed$_nth$arity$2(null,i__7404_9472);
var method_name_9474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7413_9473,(0),null);
var sig_9475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7413_9473,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_9474,sig_9475);


var G__9476 = seq__7401_9469;
var G__9477 = chunk__7402_9470;
var G__9478 = count__7403_9471;
var G__9479 = (i__7404_9472 + (1));
seq__7401_9469 = G__9476;
chunk__7402_9470 = G__9477;
count__7403_9471 = G__9478;
i__7404_9472 = G__9479;
continue;
} else {
var temp__5823__auto___9480 = cljs.core.seq(seq__7401_9469);
if(temp__5823__auto___9480){
var seq__7401_9481__$1 = temp__5823__auto___9480;
if(cljs.core.chunked_seq_QMARK_(seq__7401_9481__$1)){
var c__5673__auto___9482 = cljs.core.chunk_first(seq__7401_9481__$1);
var G__9483 = cljs.core.chunk_rest(seq__7401_9481__$1);
var G__9484 = c__5673__auto___9482;
var G__9485 = cljs.core.count(c__5673__auto___9482);
var G__9486 = (0);
seq__7401_9469 = G__9483;
chunk__7402_9470 = G__9484;
count__7403_9471 = G__9485;
i__7404_9472 = G__9486;
continue;
} else {
var vec__7418_9487 = cljs.core.first(seq__7401_9481__$1);
var method_name_9488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7418_9487,(0),null);
var sig_9489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7418_9487,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_9488,sig_9489);


var G__9490 = cljs.core.next(seq__7401_9481__$1);
var G__9491 = null;
var G__9492 = (0);
var G__9493 = (0);
seq__7401_9469 = G__9490;
chunk__7402_9470 = G__9491;
count__7403_9471 = G__9492;
i__7404_9472 = G__9493;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Channel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Channel",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7421_9494 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"try_send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"try_receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"T",new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"is_closed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"capacity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7422_9495 = null;
var count__7423_9496 = (0);
var i__7424_9497 = (0);
while(true){
if((i__7424_9497 < count__7423_9496)){
var vec__7444_9499 = chunk__7422_9495.cljs$core$IIndexed$_nth$arity$2(null,i__7424_9497);
var method_name_9500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7444_9499,(0),null);
var sig_9501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7444_9499,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_9500,sig_9501);


var G__9502 = seq__7421_9494;
var G__9503 = chunk__7422_9495;
var G__9504 = count__7423_9496;
var G__9505 = (i__7424_9497 + (1));
seq__7421_9494 = G__9502;
chunk__7422_9495 = G__9503;
count__7423_9496 = G__9504;
i__7424_9497 = G__9505;
continue;
} else {
var temp__5823__auto___9506 = cljs.core.seq(seq__7421_9494);
if(temp__5823__auto___9506){
var seq__7421_9507__$1 = temp__5823__auto___9506;
if(cljs.core.chunked_seq_QMARK_(seq__7421_9507__$1)){
var c__5673__auto___9508 = cljs.core.chunk_first(seq__7421_9507__$1);
var G__9509 = cljs.core.chunk_rest(seq__7421_9507__$1);
var G__9510 = c__5673__auto___9508;
var G__9511 = cljs.core.count(c__5673__auto___9508);
var G__9512 = (0);
seq__7421_9494 = G__9509;
chunk__7422_9495 = G__9510;
count__7423_9496 = G__9511;
i__7424_9497 = G__9512;
continue;
} else {
var vec__7450_9513 = cljs.core.first(seq__7421_9507__$1);
var method_name_9514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7450_9513,(0),null);
var sig_9515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7450_9513,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_9514,sig_9515);


var G__9516 = cljs.core.next(seq__7421_9507__$1);
var G__9517 = null;
var G__9518 = (0);
var G__9519 = (0);
seq__7421_9494 = G__9516;
chunk__7422_9495 = G__9517;
count__7423_9496 = G__9518;
i__7424_9497 = G__9519;
continue;
}
} else {
}
}
break;
}

var seq__7453 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__7454 = null;
var count__7455 = (0);
var i__7456 = (0);
while(true){
if((i__7456 < count__7455)){
var n = chunk__7454.cljs$core$IIndexed$_nth$arity$2(null,i__7456);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7453,chunk__7454,count__7455,i__7456,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7453,chunk__7454,count__7455,i__7456,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__9520 = seq__7453;
var G__9521 = chunk__7454;
var G__9522 = count__7455;
var G__9523 = (i__7456 + (1));
seq__7453 = G__9520;
chunk__7454 = G__9521;
count__7455 = G__9522;
i__7456 = G__9523;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7453);
if(temp__5823__auto__){
var seq__7453__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7453__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7453__$1);
var G__9524 = cljs.core.chunk_rest(seq__7453__$1);
var G__9525 = c__5673__auto__;
var G__9526 = cljs.core.count(c__5673__auto__);
var G__9527 = (0);
seq__7453 = G__9524;
chunk__7454 = G__9525;
count__7455 = G__9526;
i__7456 = G__9527;
continue;
} else {
var n = cljs.core.first(seq__7453__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7453,chunk__7454,count__7455,i__7456,n,seq__7453__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7453,chunk__7454,count__7455,i__7456,n,seq__7453__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__9536 = cljs.core.next(seq__7453__$1);
var G__9537 = null;
var G__9538 = (0);
var G__9539 = (0);
seq__7453 = G__9536;
chunk__7454 = G__9537;
count__7455 = G__9538;
i__7456 = G__9539;
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
var G__7464 = arguments.length;
switch (G__7464) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__7468,opts){
var map__7469 = p__7468;
var map__7469__$1 = cljs.core.__destructure_map(map__7469);
var program = map__7469__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__7480_9545 = cljs.core.seq(imports);
var chunk__7481_9546 = null;
var count__7482_9547 = (0);
var i__7483_9548 = (0);
while(true){
if((i__7483_9548 < count__7482_9547)){
var map__7498_9549 = chunk__7481_9546.cljs$core$IIndexed$_nth$arity$2(null,i__7483_9548);
var map__7498_9550__$1 = cljs.core.__destructure_map(map__7498_9549);
var qualified_name_9551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7498_9550__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7498_9550__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9552 == null)){
var simple_name_9553 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9551,/\./));
nex.typechecker.env_add_class(env,simple_name_9553,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9553,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9551], null));
} else {
}


var G__9554 = seq__7480_9545;
var G__9555 = chunk__7481_9546;
var G__9556 = count__7482_9547;
var G__9557 = (i__7483_9548 + (1));
seq__7480_9545 = G__9554;
chunk__7481_9546 = G__9555;
count__7482_9547 = G__9556;
i__7483_9548 = G__9557;
continue;
} else {
var temp__5823__auto___9558 = cljs.core.seq(seq__7480_9545);
if(temp__5823__auto___9558){
var seq__7480_9559__$1 = temp__5823__auto___9558;
if(cljs.core.chunked_seq_QMARK_(seq__7480_9559__$1)){
var c__5673__auto___9560 = cljs.core.chunk_first(seq__7480_9559__$1);
var G__9561 = cljs.core.chunk_rest(seq__7480_9559__$1);
var G__9562 = c__5673__auto___9560;
var G__9563 = cljs.core.count(c__5673__auto___9560);
var G__9564 = (0);
seq__7480_9545 = G__9561;
chunk__7481_9546 = G__9562;
count__7482_9547 = G__9563;
i__7483_9548 = G__9564;
continue;
} else {
var map__7502_9565 = cljs.core.first(seq__7480_9559__$1);
var map__7502_9566__$1 = cljs.core.__destructure_map(map__7502_9565);
var qualified_name_9567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7502_9566__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7502_9566__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9568 == null)){
var simple_name_9569 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9567,/\./));
nex.typechecker.env_add_class(env,simple_name_9569,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9569,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9567], null));
} else {
}


var G__9570 = cljs.core.next(seq__7480_9559__$1);
var G__9571 = null;
var G__9572 = (0);
var G__9573 = (0);
seq__7480_9545 = G__9570;
chunk__7481_9546 = G__9571;
count__7482_9547 = G__9572;
i__7483_9548 = G__9573;
continue;
}
} else {
}
}
break;
}

var seq__7504_9574 = cljs.core.seq(classes);
var chunk__7505_9575 = null;
var count__7506_9576 = (0);
var i__7507_9577 = (0);
while(true){
if((i__7507_9577 < count__7506_9576)){
var class_def_9578 = chunk__7505_9575.cljs$core$IIndexed$_nth$arity$2(null,i__7507_9577);
nex.typechecker.collect_class_info(env,class_def_9578);


var G__9579 = seq__7504_9574;
var G__9580 = chunk__7505_9575;
var G__9581 = count__7506_9576;
var G__9582 = (i__7507_9577 + (1));
seq__7504_9574 = G__9579;
chunk__7505_9575 = G__9580;
count__7506_9576 = G__9581;
i__7507_9577 = G__9582;
continue;
} else {
var temp__5823__auto___9583 = cljs.core.seq(seq__7504_9574);
if(temp__5823__auto___9583){
var seq__7504_9584__$1 = temp__5823__auto___9583;
if(cljs.core.chunked_seq_QMARK_(seq__7504_9584__$1)){
var c__5673__auto___9585 = cljs.core.chunk_first(seq__7504_9584__$1);
var G__9586 = cljs.core.chunk_rest(seq__7504_9584__$1);
var G__9587 = c__5673__auto___9585;
var G__9588 = cljs.core.count(c__5673__auto___9585);
var G__9589 = (0);
seq__7504_9574 = G__9586;
chunk__7505_9575 = G__9587;
count__7506_9576 = G__9588;
i__7507_9577 = G__9589;
continue;
} else {
var class_def_9590 = cljs.core.first(seq__7504_9584__$1);
nex.typechecker.collect_class_info(env,class_def_9590);


var G__9591 = cljs.core.next(seq__7504_9584__$1);
var G__9592 = null;
var G__9593 = (0);
var G__9594 = (0);
seq__7504_9574 = G__9591;
chunk__7505_9575 = G__9592;
count__7506_9576 = G__9593;
i__7507_9577 = G__9594;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7511_9596 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7512_9597 = null;
var count__7513_9598 = (0);
var i__7514_9599 = (0);
while(true){
if((i__7514_9599 < count__7513_9598)){
var vec__7527_9600 = chunk__7512_9597.cljs$core$IIndexed$_nth$arity$2(null,i__7514_9599);
var var_name_9601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7527_9600,(0),null);
var var_type_9602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7527_9600,(1),null);
nex.typechecker.env_add_var(env,var_name_9601,var_type_9602);


var G__9603 = seq__7511_9596;
var G__9604 = chunk__7512_9597;
var G__9605 = count__7513_9598;
var G__9606 = (i__7514_9599 + (1));
seq__7511_9596 = G__9603;
chunk__7512_9597 = G__9604;
count__7513_9598 = G__9605;
i__7514_9599 = G__9606;
continue;
} else {
var temp__5823__auto___9607 = cljs.core.seq(seq__7511_9596);
if(temp__5823__auto___9607){
var seq__7511_9608__$1 = temp__5823__auto___9607;
if(cljs.core.chunked_seq_QMARK_(seq__7511_9608__$1)){
var c__5673__auto___9609 = cljs.core.chunk_first(seq__7511_9608__$1);
var G__9610 = cljs.core.chunk_rest(seq__7511_9608__$1);
var G__9611 = c__5673__auto___9609;
var G__9612 = cljs.core.count(c__5673__auto___9609);
var G__9613 = (0);
seq__7511_9596 = G__9610;
chunk__7512_9597 = G__9611;
count__7513_9598 = G__9612;
i__7514_9599 = G__9613;
continue;
} else {
var vec__7530_9614 = cljs.core.first(seq__7511_9608__$1);
var var_name_9615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530_9614,(0),null);
var var_type_9616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7530_9614,(1),null);
nex.typechecker.env_add_var(env,var_name_9615,var_type_9616);


var G__9617 = cljs.core.next(seq__7511_9608__$1);
var G__9618 = null;
var G__9619 = (0);
var G__9620 = (0);
seq__7511_9596 = G__9617;
chunk__7512_9597 = G__9618;
count__7513_9598 = G__9619;
i__7514_9599 = G__9620;
continue;
}
} else {
}
}
break;
}

var seq__7533_9621 = cljs.core.seq(functions);
var chunk__7534_9622 = null;
var count__7535_9623 = (0);
var i__7536_9624 = (0);
while(true){
if((i__7536_9624 < count__7535_9623)){
var fn_def_9625 = chunk__7534_9622.cljs$core$IIndexed$_nth$arity$2(null,i__7536_9624);
var arity_9626 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_9625));
if((arity_9626 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9625))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9625))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9625),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_9625));


var G__9627 = seq__7533_9621;
var G__9628 = chunk__7534_9622;
var G__9629 = count__7535_9623;
var G__9630 = (i__7536_9624 + (1));
seq__7533_9621 = G__9627;
chunk__7534_9622 = G__9628;
count__7535_9623 = G__9629;
i__7536_9624 = G__9630;
continue;
} else {
var temp__5823__auto___9631 = cljs.core.seq(seq__7533_9621);
if(temp__5823__auto___9631){
var seq__7533_9632__$1 = temp__5823__auto___9631;
if(cljs.core.chunked_seq_QMARK_(seq__7533_9632__$1)){
var c__5673__auto___9633 = cljs.core.chunk_first(seq__7533_9632__$1);
var G__9634 = cljs.core.chunk_rest(seq__7533_9632__$1);
var G__9635 = c__5673__auto___9633;
var G__9636 = cljs.core.count(c__5673__auto___9633);
var G__9637 = (0);
seq__7533_9621 = G__9634;
chunk__7534_9622 = G__9635;
count__7535_9623 = G__9636;
i__7536_9624 = G__9637;
continue;
} else {
var fn_def_9638 = cljs.core.first(seq__7533_9632__$1);
var arity_9639 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_9638));
if((arity_9639 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9638))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9638))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_9638),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_9638));


var G__9640 = cljs.core.next(seq__7533_9632__$1);
var G__9641 = null;
var G__9642 = (0);
var G__9643 = (0);
seq__7533_9621 = G__9640;
chunk__7534_9622 = G__9641;
count__7535_9623 = G__9642;
i__7536_9624 = G__9643;
continue;
}
} else {
}
}
break;
}

var seq__7537_9644 = cljs.core.seq(classes);
var chunk__7538_9645 = null;
var count__7539_9646 = (0);
var i__7540_9647 = (0);
while(true){
if((i__7540_9647 < count__7539_9646)){
var class_def_9648 = chunk__7538_9645.cljs$core$IIndexed$_nth$arity$2(null,i__7540_9647);
nex.typechecker.check_class(env,class_def_9648);


var G__9649 = seq__7537_9644;
var G__9650 = chunk__7538_9645;
var G__9651 = count__7539_9646;
var G__9652 = (i__7540_9647 + (1));
seq__7537_9644 = G__9649;
chunk__7538_9645 = G__9650;
count__7539_9646 = G__9651;
i__7540_9647 = G__9652;
continue;
} else {
var temp__5823__auto___9653 = cljs.core.seq(seq__7537_9644);
if(temp__5823__auto___9653){
var seq__7537_9654__$1 = temp__5823__auto___9653;
if(cljs.core.chunked_seq_QMARK_(seq__7537_9654__$1)){
var c__5673__auto___9655 = cljs.core.chunk_first(seq__7537_9654__$1);
var G__9656 = cljs.core.chunk_rest(seq__7537_9654__$1);
var G__9657 = c__5673__auto___9655;
var G__9658 = cljs.core.count(c__5673__auto___9655);
var G__9659 = (0);
seq__7537_9644 = G__9656;
chunk__7538_9645 = G__9657;
count__7539_9646 = G__9658;
i__7540_9647 = G__9659;
continue;
} else {
var class_def_9660 = cljs.core.first(seq__7537_9654__$1);
nex.typechecker.check_class(env,class_def_9660);


var G__9661 = cljs.core.next(seq__7537_9654__$1);
var G__9662 = null;
var G__9663 = (0);
var G__9664 = (0);
seq__7537_9644 = G__9661;
chunk__7538_9645 = G__9662;
count__7539_9646 = G__9663;
i__7540_9647 = G__9664;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__7541_9665 = cljs.core.seq(statements);
var chunk__7542_9666 = null;
var count__7543_9667 = (0);
var i__7544_9668 = (0);
while(true){
if((i__7544_9668 < count__7543_9667)){
var stmt_9669 = chunk__7542_9666.cljs$core$IIndexed$_nth$arity$2(null,i__7544_9668);
nex.typechecker.check_statement(env,stmt_9669);


var G__9670 = seq__7541_9665;
var G__9671 = chunk__7542_9666;
var G__9672 = count__7543_9667;
var G__9673 = (i__7544_9668 + (1));
seq__7541_9665 = G__9670;
chunk__7542_9666 = G__9671;
count__7543_9667 = G__9672;
i__7544_9668 = G__9673;
continue;
} else {
var temp__5823__auto___9674 = cljs.core.seq(seq__7541_9665);
if(temp__5823__auto___9674){
var seq__7541_9675__$1 = temp__5823__auto___9674;
if(cljs.core.chunked_seq_QMARK_(seq__7541_9675__$1)){
var c__5673__auto___9676 = cljs.core.chunk_first(seq__7541_9675__$1);
var G__9677 = cljs.core.chunk_rest(seq__7541_9675__$1);
var G__9678 = c__5673__auto___9676;
var G__9679 = cljs.core.count(c__5673__auto___9676);
var G__9680 = (0);
seq__7541_9665 = G__9677;
chunk__7542_9666 = G__9678;
count__7543_9667 = G__9679;
i__7544_9668 = G__9680;
continue;
} else {
var stmt_9681 = cljs.core.first(seq__7541_9675__$1);
nex.typechecker.check_statement(env,stmt_9681);


var G__9682 = cljs.core.next(seq__7541_9675__$1);
var G__9683 = null;
var G__9684 = (0);
var G__9685 = (0);
seq__7541_9665 = G__9682;
chunk__7542_9666 = G__9683;
count__7543_9667 = G__9684;
i__7544_9668 = G__9685;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7552_9686 = cljs.core.seq(calls);
var chunk__7553_9687 = null;
var count__7554_9688 = (0);
var i__7555_9689 = (0);
while(true){
if((i__7555_9689 < count__7554_9688)){
var call_9690 = chunk__7553_9687.cljs$core$IIndexed$_nth$arity$2(null,i__7555_9689);
nex.typechecker.check_expression(env,call_9690);


var G__9691 = seq__7552_9686;
var G__9692 = chunk__7553_9687;
var G__9693 = count__7554_9688;
var G__9694 = (i__7555_9689 + (1));
seq__7552_9686 = G__9691;
chunk__7553_9687 = G__9692;
count__7554_9688 = G__9693;
i__7555_9689 = G__9694;
continue;
} else {
var temp__5823__auto___9695 = cljs.core.seq(seq__7552_9686);
if(temp__5823__auto___9695){
var seq__7552_9696__$1 = temp__5823__auto___9695;
if(cljs.core.chunked_seq_QMARK_(seq__7552_9696__$1)){
var c__5673__auto___9697 = cljs.core.chunk_first(seq__7552_9696__$1);
var G__9698 = cljs.core.chunk_rest(seq__7552_9696__$1);
var G__9699 = c__5673__auto___9697;
var G__9700 = cljs.core.count(c__5673__auto___9697);
var G__9701 = (0);
seq__7552_9686 = G__9698;
chunk__7553_9687 = G__9699;
count__7554_9688 = G__9700;
i__7555_9689 = G__9701;
continue;
} else {
var call_9702 = cljs.core.first(seq__7552_9696__$1);
nex.typechecker.check_expression(env,call_9702);


var G__9703 = cljs.core.next(seq__7552_9696__$1);
var G__9704 = null;
var G__9705 = (0);
var G__9706 = (0);
seq__7552_9686 = G__9703;
chunk__7553_9687 = G__9704;
count__7554_9688 = G__9705;
i__7555_9689 = G__9706;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e7476){var e = e7476;
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
var G__7573 = arguments.length;
switch (G__7573) {
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
var seq__7584_9708 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7585_9709 = null;
var count__7586_9710 = (0);
var i__7587_9711 = (0);
while(true){
if((i__7587_9711 < count__7586_9710)){
var map__7591_9712 = chunk__7585_9709.cljs$core$IIndexed$_nth$arity$2(null,i__7587_9711);
var map__7591_9713__$1 = cljs.core.__destructure_map(map__7591_9712);
var qualified_name_9714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7591_9713__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7591_9713__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9715 == null)){
var simple_name_9716 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9714,/\./));
nex.typechecker.env_add_class(env,simple_name_9716,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9716,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9714], null));
} else {
}


var G__9718 = seq__7584_9708;
var G__9719 = chunk__7585_9709;
var G__9720 = count__7586_9710;
var G__9721 = (i__7587_9711 + (1));
seq__7584_9708 = G__9718;
chunk__7585_9709 = G__9719;
count__7586_9710 = G__9720;
i__7587_9711 = G__9721;
continue;
} else {
var temp__5823__auto___9722 = cljs.core.seq(seq__7584_9708);
if(temp__5823__auto___9722){
var seq__7584_9723__$1 = temp__5823__auto___9722;
if(cljs.core.chunked_seq_QMARK_(seq__7584_9723__$1)){
var c__5673__auto___9727 = cljs.core.chunk_first(seq__7584_9723__$1);
var G__9728 = cljs.core.chunk_rest(seq__7584_9723__$1);
var G__9729 = c__5673__auto___9727;
var G__9730 = cljs.core.count(c__5673__auto___9727);
var G__9731 = (0);
seq__7584_9708 = G__9728;
chunk__7585_9709 = G__9729;
count__7586_9710 = G__9730;
i__7587_9711 = G__9731;
continue;
} else {
var map__7601_9733 = cljs.core.first(seq__7584_9723__$1);
var map__7601_9734__$1 = cljs.core.__destructure_map(map__7601_9733);
var qualified_name_9735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7601_9734__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_9736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7601_9734__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_9736 == null)){
var simple_name_9737 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_9735,/\./));
nex.typechecker.env_add_class(env,simple_name_9737,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_9737,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_9735], null));
} else {
}


var G__9740 = cljs.core.next(seq__7584_9723__$1);
var G__9741 = null;
var G__9742 = (0);
var G__9743 = (0);
seq__7584_9708 = G__9740;
chunk__7585_9709 = G__9741;
count__7586_9710 = G__9742;
i__7587_9711 = G__9743;
continue;
}
} else {
}
}
break;
}

var seq__7602_9745 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7603_9747 = null;
var count__7604_9748 = (0);
var i__7605_9749 = (0);
while(true){
if((i__7605_9749 < count__7604_9748)){
var class_def_9750 = chunk__7603_9747.cljs$core$IIndexed$_nth$arity$2(null,i__7605_9749);
nex.typechecker.collect_class_info(env,class_def_9750);


var G__9751 = seq__7602_9745;
var G__9752 = chunk__7603_9747;
var G__9753 = count__7604_9748;
var G__9754 = (i__7605_9749 + (1));
seq__7602_9745 = G__9751;
chunk__7603_9747 = G__9752;
count__7604_9748 = G__9753;
i__7605_9749 = G__9754;
continue;
} else {
var temp__5823__auto___9755 = cljs.core.seq(seq__7602_9745);
if(temp__5823__auto___9755){
var seq__7602_9758__$1 = temp__5823__auto___9755;
if(cljs.core.chunked_seq_QMARK_(seq__7602_9758__$1)){
var c__5673__auto___9759 = cljs.core.chunk_first(seq__7602_9758__$1);
var G__9761 = cljs.core.chunk_rest(seq__7602_9758__$1);
var G__9762 = c__5673__auto___9759;
var G__9763 = cljs.core.count(c__5673__auto___9759);
var G__9764 = (0);
seq__7602_9745 = G__9761;
chunk__7603_9747 = G__9762;
count__7604_9748 = G__9763;
i__7605_9749 = G__9764;
continue;
} else {
var class_def_9765 = cljs.core.first(seq__7602_9758__$1);
nex.typechecker.collect_class_info(env,class_def_9765);


var G__9766 = cljs.core.next(seq__7602_9758__$1);
var G__9767 = null;
var G__9768 = (0);
var G__9769 = (0);
seq__7602_9745 = G__9766;
chunk__7603_9747 = G__9767;
count__7604_9748 = G__9768;
i__7605_9749 = G__9769;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7617_9770 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7618_9771 = null;
var count__7619_9772 = (0);
var i__7620_9773 = (0);
while(true){
if((i__7620_9773 < count__7619_9772)){
var vec__7628_9774 = chunk__7618_9771.cljs$core$IIndexed$_nth$arity$2(null,i__7620_9773);
var var_name_9775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7628_9774,(0),null);
var var_type_9776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7628_9774,(1),null);
nex.typechecker.env_add_var(env,var_name_9775,var_type_9776);


var G__9779 = seq__7617_9770;
var G__9780 = chunk__7618_9771;
var G__9781 = count__7619_9772;
var G__9782 = (i__7620_9773 + (1));
seq__7617_9770 = G__9779;
chunk__7618_9771 = G__9780;
count__7619_9772 = G__9781;
i__7620_9773 = G__9782;
continue;
} else {
var temp__5823__auto___9783 = cljs.core.seq(seq__7617_9770);
if(temp__5823__auto___9783){
var seq__7617_9785__$1 = temp__5823__auto___9783;
if(cljs.core.chunked_seq_QMARK_(seq__7617_9785__$1)){
var c__5673__auto___9786 = cljs.core.chunk_first(seq__7617_9785__$1);
var G__9787 = cljs.core.chunk_rest(seq__7617_9785__$1);
var G__9788 = c__5673__auto___9786;
var G__9789 = cljs.core.count(c__5673__auto___9786);
var G__9790 = (0);
seq__7617_9770 = G__9787;
chunk__7618_9771 = G__9788;
count__7619_9772 = G__9789;
i__7620_9773 = G__9790;
continue;
} else {
var vec__7632_9791 = cljs.core.first(seq__7617_9785__$1);
var var_name_9792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7632_9791,(0),null);
var var_type_9793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7632_9791,(1),null);
nex.typechecker.env_add_var(env,var_name_9792,var_type_9793);


var G__9794 = cljs.core.next(seq__7617_9785__$1);
var G__9795 = null;
var G__9796 = (0);
var G__9797 = (0);
seq__7617_9770 = G__9794;
chunk__7618_9771 = G__9795;
count__7619_9772 = G__9796;
i__7620_9773 = G__9797;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e7583){var _ = e7583;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
