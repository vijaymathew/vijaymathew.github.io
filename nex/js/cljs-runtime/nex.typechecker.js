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
var G__6073 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(env);
var G__6074 = class_name;
var G__6075 = method_name;
return (nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3 ? nex.typechecker.env_lookup_method.cljs$core$IFn$_invoke$arity$3(G__6073,G__6074,G__6075) : nex.typechecker.env_lookup_method.call(null,G__6073,G__6074,G__6075));
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
var G__6099 = k6094;
var G__6099__$1 = (((G__6099 instanceof cljs.core.Keyword))?G__6099.fqn:null);
switch (G__6099__$1) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__6102){
var vec__6103 = p__6102;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6103,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6103,(1),null);
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
var G__6108 = k6094;
var G__6108__$1 = (((G__6108 instanceof cljs.core.Keyword))?G__6108.fqn:null);
switch (G__6108__$1) {
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
var pred__6109 = cljs.core.keyword_identical_QMARK_;
var expr__6110 = k__5457__auto__;
if(cljs.core.truth_((pred__6109.cljs$core$IFn$_invoke$arity$2 ? pred__6109.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__6110) : pred__6109.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__6110)))){
return (new nex.typechecker.TypeError(G__6093,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6109.cljs$core$IFn$_invoke$arity$2 ? pred__6109.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__6110) : pred__6109.call(null,new cljs.core.Keyword(null,"line","line",212345235),expr__6110)))){
return (new nex.typechecker.TypeError(self__.message,G__6093,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__6109.cljs$core$IFn$_invoke$arity$2 ? pred__6109.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__6110) : pred__6109.call(null,new cljs.core.Keyword(null,"column","column",2078222095),expr__6110)))){
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
nex.typechecker.map__GT_TypeError = (function nex$typechecker$map__GT_TypeError(G__6098){
var extmap__5490__auto__ = (function (){var G__6112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6098,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], 0));
if(cljs.core.record_QMARK_(G__6098)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6112);
} else {
return G__6112;
}
})();
return (new nex.typechecker.TypeError(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__6098),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__6098),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__6098),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

/**
 * Create a type error
 */
nex.typechecker.type_error = (function nex$typechecker$type_error(var_args){
var G__6114 = arguments.length;
switch (G__6114) {
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
nex.typechecker.format_type_error = (function nex$typechecker$format_type_error(p__6115){
var map__6116 = p__6115;
var map__6116__$1 = cljs.core.__destructure_map(map__6116);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6116__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6116__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
var G__6117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(type_expr)], null);
var G__6117__$1 = (cljs.core.truth_(params)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6117,new cljs.core.Keyword(null,"type-params","type-params",894286499),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.normalize_type,params)):G__6117);
if(detachable_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6117__$1,new cljs.core.Keyword(null,"detachable","detachable",715380987),true);
} else {
return G__6117__$1;
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
var G__6119 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"detachable","detachable",715380987));
if(cljs.core.truth_(new cljs.core.Keyword(null,"type-params","type-params",894286499).cljs$core$IFn$_invoke$arity$1(n))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__6119,new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6118_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type,p1__6118_SHARP_);
}));
} else {
return G__6119;
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
return ((typeof base === 'string') && (cljs.core.not((function (){var fexpr__6120 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["Char",null,"Real",null,"Decimal",null,"Integer64",null,"Integer",null,"Boolean",null], null), null);
return (fexpr__6120.cljs$core$IFn$_invoke$arity$1 ? fexpr__6120.cljs$core$IFn$_invoke$arity$1(base) : fexpr__6120.call(null,base));
})())));
});
/**
 * Check if a type is a generic type parameter (single uppercase letter).
 */
nex.typechecker.is_generic_type_param_QMARK_ = (function nex$typechecker$is_generic_type_param_QMARK_(var_args){
var G__6122 = arguments.length;
switch (G__6122) {
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
var G__6134 = arguments.length;
switch (G__6134) {
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
var or__5142__auto__ = cljs.core.some((function (p1__6140_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6140_SHARP_,super$__$1);
}),parents);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.some((function (p1__6141_SHARP_){
return nex$typechecker$class_subtype_QMARK__$_sub_QMARK_(p1__6141_SHARP_,seen__$1);
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

var seq__6158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168).cljs$core$IFn$_invoke$arity$1(class_def),generic_args));
var chunk__6159 = null;
var count__6160 = (0);
var i__6161 = (0);
while(true){
if((i__6161 < count__6160)){
var vec__6169 = chunk__6159.cljs$core$IIndexed$_nth$arity$2(null,i__6161);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6169,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6169,(1),null);
var temp__5823__auto___7710 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7710)){
var constraint_7711 = temp__5823__auto___7710;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7711))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7711)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7711)))], null));
}
} else {
}


var G__7716 = seq__6158;
var G__7717 = chunk__6159;
var G__7718 = count__6160;
var G__7719 = (i__6161 + (1));
seq__6158 = G__7716;
chunk__6159 = G__7717;
count__6160 = G__7718;
i__6161 = G__7719;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6158);
if(temp__5823__auto__){
var seq__6158__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6158__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6158__$1);
var G__7724 = cljs.core.chunk_rest(seq__6158__$1);
var G__7725 = c__5673__auto__;
var G__7726 = cljs.core.count(c__5673__auto__);
var G__7727 = (0);
seq__6158 = G__7724;
chunk__6159 = G__7725;
count__6160 = G__7726;
i__6161 = G__7727;
continue;
} else {
var vec__6172 = cljs.core.first(seq__6158__$1);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6172,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6172,(1),null);
var temp__5823__auto___7729__$1 = new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(temp__5823__auto___7729__$1)){
var constraint_7730 = temp__5823__auto___7729__$1;
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg,constraint_7730))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7730)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Type argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)+" does not satisfy constraint "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(constraint_7730)))], null));
}
} else {
}


var G__7732 = cljs.core.next(seq__6158__$1);
var G__7733 = null;
var G__7734 = (0);
var G__7735 = (0);
seq__6158 = G__7732;
chunk__6159 = G__7733;
count__6160 = G__7734;
i__6161 = G__7735;
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

var seq__6189 = cljs.core.seq(args);
var chunk__6190 = null;
var count__6191 = (0);
var i__6192 = (0);
while(true){
if((i__6192 < count__6191)){
var arg = chunk__6190.cljs$core$IIndexed$_nth$arity$2(null,i__6192);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7736 = seq__6189;
var G__7737 = chunk__6190;
var G__7738 = count__6191;
var G__7739 = (i__6192 + (1));
seq__6189 = G__7736;
chunk__6190 = G__7737;
count__6191 = G__7738;
i__6192 = G__7739;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6189);
if(temp__5823__auto__){
var seq__6189__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6189__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6189__$1);
var G__7740 = cljs.core.chunk_rest(seq__6189__$1);
var G__7741 = c__5673__auto__;
var G__7742 = cljs.core.count(c__5673__auto__);
var G__7743 = (0);
seq__6189 = G__7740;
chunk__6190 = G__7741;
count__6191 = G__7742;
i__6192 = G__7743;
continue;
} else {
var arg = cljs.core.first(seq__6189__$1);
(nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.validate_type_annotation.cljs$core$IFn$_invoke$arity$2(env,arg) : nex.typechecker.validate_type_annotation.call(null,env,arg));


var G__7744 = cljs.core.next(seq__6189__$1);
var G__7745 = null;
var G__7746 = (0);
var G__7747 = (0);
seq__6189 = G__7744;
chunk__6190 = G__7745;
count__6191 = G__7746;
i__6192 = G__7747;
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
var G__6201 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6201__$1 = (((G__6201 instanceof cljs.core.Keyword))?G__6201.fqn:null);
switch (G__6201__$1) {
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
return cljs.core.some((function (p__6206){
var map__6207 = p__6206;
var map__6207__$1 = cljs.core.__destructure_map(map__6207);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6207__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
return cljs.core.some((function (p__6221){
var map__6222 = p__6221;
var map__6222__$1 = cljs.core.__destructure_map(map__6222);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6222__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6223_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(p1__6223_SHARP_))){
return p1__6223_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6223_SHARP_,new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(section));
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
return cljs.core.some((function (p__6232){
var map__6234 = p__6232;
var map__6234__$1 = cljs.core.__destructure_map(map__6234);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6234__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
var own = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6235_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6235_SHARP_));
}),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(class_def))], 0)):cljs.core.PersistentVector.EMPTY);
var inherited = (cljs.core.truth_(class_def)?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__6238){
var map__6239 = p__6238;
var map__6239__$1 = cljs.core.__destructure_map(map__6239);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6239__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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
nex.typechecker.check_identifier = (function nex$typechecker$check_identifier(env,p__6240){
var map__6241 = p__6240;
var map__6241__$1 = cljs.core.__destructure_map(map__6241);
var expr = map__6241__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
nex.typechecker.check_binary_op = (function nex$typechecker$check_binary_op(env,p__6243){
var map__6244 = p__6243;
var map__6244__$1 = cljs.core.__destructure_map(map__6244);
var expr = map__6244__$1;
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,new cljs.core.Keyword(null,"right","right",-452581833));
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
var G__6258 = operator;
switch (G__6258) {
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(param_type,new cljs.core.Keyword(null,"base-type","base-type",1167971299),(function (p1__6262_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(type_map,p1__6262_SHARP_,p1__6262_SHARP_);
})),new cljs.core.Keyword(null,"type-args","type-args",1580007623),(function (p1__6263_SHARP_){
if(cljs.core.truth_(p1__6263_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6263_SHARP_);
} else {
return null;
}
})),new cljs.core.Keyword(null,"type-params","type-params",894286499),(function (p1__6264_SHARP_){
if(cljs.core.truth_(p1__6264_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
return (nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.resolve_generic_type.cljs$core$IFn$_invoke$arity$2(t,type_map) : nex.typechecker.resolve_generic_type.call(null,t,type_map));
}),p1__6264_SHARP_);
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
nex.typechecker.check_convert = (function nex$typechecker$check_convert(env,p__6280){
var map__6281 = p__6280;
var map__6281__$1 = cljs.core.__destructure_map(map__6281);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6281__$1,new cljs.core.Keyword(null,"value","value",305978217));
var var_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6281__$1,new cljs.core.Keyword(null,"var-name","var-name",-574747624));
var target_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6281__$1,new cljs.core.Keyword(null,"target-type","target-type",-1795727181));
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
nex.typechecker.check_spawn = (function nex$typechecker$check_spawn(env,p__6289){
var map__6290 = p__6289;
var map__6290__$1 = cljs.core.__destructure_map(map__6290);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6290__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var spawn_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(spawn_env,"result","Any");

nex.typechecker.env_add_var(spawn_env,"__spawn_result_type__","Void");

var seq__6295_7804 = cljs.core.seq(body);
var chunk__6296_7805 = null;
var count__6297_7806 = (0);
var i__6298_7807 = (0);
while(true){
if((i__6298_7807 < count__6297_7806)){
var stmt_7808 = chunk__6296_7805.cljs$core$IIndexed$_nth$arity$2(null,i__6298_7807);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_7808) : nex.typechecker.check_statement.call(null,spawn_env,stmt_7808));


var G__7809 = seq__6295_7804;
var G__7810 = chunk__6296_7805;
var G__7811 = count__6297_7806;
var G__7812 = (i__6298_7807 + (1));
seq__6295_7804 = G__7809;
chunk__6296_7805 = G__7810;
count__6297_7806 = G__7811;
i__6298_7807 = G__7812;
continue;
} else {
var temp__5823__auto___7813 = cljs.core.seq(seq__6295_7804);
if(temp__5823__auto___7813){
var seq__6295_7814__$1 = temp__5823__auto___7813;
if(cljs.core.chunked_seq_QMARK_(seq__6295_7814__$1)){
var c__5673__auto___7815 = cljs.core.chunk_first(seq__6295_7814__$1);
var G__7816 = cljs.core.chunk_rest(seq__6295_7814__$1);
var G__7817 = c__5673__auto___7815;
var G__7818 = cljs.core.count(c__5673__auto___7815);
var G__7819 = (0);
seq__6295_7804 = G__7816;
chunk__6296_7805 = G__7817;
count__6297_7806 = G__7818;
i__6298_7807 = G__7819;
continue;
} else {
var stmt_7820 = cljs.core.first(seq__6295_7814__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(spawn_env,stmt_7820) : nex.typechecker.check_statement.call(null,spawn_env,stmt_7820));


var G__7821 = cljs.core.next(seq__6295_7814__$1);
var G__7822 = null;
var G__7823 = (0);
var G__7824 = (0);
seq__6295_7804 = G__7821;
chunk__6296_7805 = G__7822;
count__6297_7806 = G__7823;
i__6298_7807 = G__7824;
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
var G__6315 = base_type;
switch (G__6315) {
case "Task":
var G__6316 = method;
switch (G__6316) {
case "await":
var G__6317 = argc;
switch (G__6317) {
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
var G__6322 = method;
switch (G__6322) {
case "send":
var G__6323 = argc;
switch (G__6323) {
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
var G__6324 = argc;
switch (G__6324) {
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
nex.typechecker.check_call = (function nex$typechecker$check_call(env,p__6330){
var map__6331 = p__6330;
var map__6331__$1 = cljs.core.__destructure_map(map__6331);
var expr = map__6331__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6331__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6331__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6331__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var has_parens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6331__$1,new cljs.core.Keyword(null,"has-parens","has-parens",454405713));
if(((cljs.core.map_QMARK_(target)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(target))) && ((method == null)))))){
var G__6335 = env;
var G__6336 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.Keyword(null,"args","args",1315556576),args);
return (nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_create.cljs$core$IFn$_invoke$arity$2(G__6335,G__6336) : nex.typechecker.check_create.call(null,G__6335,G__6336));
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

var seq__6340_7831 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6341_7832 = null;
var count__6342_7833 = (0);
var i__6343_7834 = (0);
while(true){
if((i__6343_7834 < count__6342_7833)){
var vec__6355_7835 = chunk__6341_7832.cljs$core$IIndexed$_nth$arity$2(null,i__6343_7834);
var arg_7836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6355_7835,(0),null);
var param_7837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6355_7835,(1),null);
var arg_type_7838 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7836) : nex.typechecker.check_expression.call(null,env,arg_7836));
var param_type_7839 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7837),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7838,param_type_7839))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7839))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7838))))], null));
}


var G__7840 = seq__6340_7831;
var G__7841 = chunk__6341_7832;
var G__7842 = count__6342_7833;
var G__7843 = (i__6343_7834 + (1));
seq__6340_7831 = G__7840;
chunk__6341_7832 = G__7841;
count__6342_7833 = G__7842;
i__6343_7834 = G__7843;
continue;
} else {
var temp__5823__auto___7844 = cljs.core.seq(seq__6340_7831);
if(temp__5823__auto___7844){
var seq__6340_7845__$1 = temp__5823__auto___7844;
if(cljs.core.chunked_seq_QMARK_(seq__6340_7845__$1)){
var c__5673__auto___7846 = cljs.core.chunk_first(seq__6340_7845__$1);
var G__7847 = cljs.core.chunk_rest(seq__6340_7845__$1);
var G__7848 = c__5673__auto___7846;
var G__7849 = cljs.core.count(c__5673__auto___7846);
var G__7850 = (0);
seq__6340_7831 = G__7847;
chunk__6341_7832 = G__7848;
count__6342_7833 = G__7849;
i__6343_7834 = G__7850;
continue;
} else {
var vec__6358_7852 = cljs.core.first(seq__6340_7845__$1);
var arg_7853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6358_7852,(0),null);
var param_7854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6358_7852,(1),null);
var arg_type_7855 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7853) : nex.typechecker.check_expression.call(null,env,arg_7853));
var param_type_7856 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7854),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7855,param_type_7856))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7856))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7855))))], null));
}


var G__7858 = cljs.core.next(seq__6340_7845__$1);
var G__7859 = null;
var G__7860 = (0);
var G__7861 = (0);
seq__6340_7831 = G__7858;
chunk__6341_7832 = G__7859;
count__6342_7833 = G__7860;
i__6343_7834 = G__7861;
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

var G__6362_7862 = env;
var G__6363_7863 = cljs.core.first(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6362_7862,G__6363_7863) : nex.typechecker.check_expression.call(null,G__6362_7862,G__6363_7863));

return "String";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"type_is")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is expects exactly 2 arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is expects 2 arguments, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var target_type_type_7865 = (function (){var G__6364 = env;
var G__6365 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6364,G__6365) : nex.typechecker.check_expression.call(null,G__6364,G__6365));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(target_type_type_7865),"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("type_is first argument must be String",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"type_is first argument must be String, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(target_type_type_7865))))], null));
}

var G__6366_7866 = env;
var G__6367_7867 = cljs.core.second(args);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6366_7866,G__6367_7867) : nex.typechecker.check_expression.call(null,G__6366_7866,G__6367_7867));

return "Boolean";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"await_all")){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("await_all expects exactly 1 argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"await_all expects 1 argument, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var tasks_type = nex.typechecker.normalize_type((function (){var G__6373 = env;
var G__6374 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6373,G__6374) : nex.typechecker.check_expression.call(null,G__6373,G__6374));
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

var tasks_type = nex.typechecker.normalize_type((function (){var G__6377 = env;
var G__6378 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6377,G__6378) : nex.typechecker.check_expression.call(null,G__6377,G__6378));
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

var seq__6392_7870 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6393_7871 = null;
var count__6394_7872 = (0);
var i__6395_7873 = (0);
while(true){
if((i__6395_7873 < count__6394_7872)){
var vec__6417_7874 = chunk__6393_7871.cljs$core$IIndexed$_nth$arity$2(null,i__6395_7873);
var arg_7875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6417_7874,(0),null);
var param_7876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6417_7874,(1),null);
var arg_type_7877 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7875) : nex.typechecker.check_expression.call(null,env,arg_7875));
var param_type_7878 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7876),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7877,param_type_7878))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7878))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7877))))], null));
}


var G__7880 = seq__6392_7870;
var G__7881 = chunk__6393_7871;
var G__7882 = count__6394_7872;
var G__7883 = (i__6395_7873 + (1));
seq__6392_7870 = G__7880;
chunk__6393_7871 = G__7881;
count__6394_7872 = G__7882;
i__6395_7873 = G__7883;
continue;
} else {
var temp__5823__auto___7884 = cljs.core.seq(seq__6392_7870);
if(temp__5823__auto___7884){
var seq__6392_7885__$1 = temp__5823__auto___7884;
if(cljs.core.chunked_seq_QMARK_(seq__6392_7885__$1)){
var c__5673__auto___7886 = cljs.core.chunk_first(seq__6392_7885__$1);
var G__7887 = cljs.core.chunk_rest(seq__6392_7885__$1);
var G__7888 = c__5673__auto___7886;
var G__7889 = cljs.core.count(c__5673__auto___7886);
var G__7890 = (0);
seq__6392_7870 = G__7887;
chunk__6393_7871 = G__7888;
count__6394_7872 = G__7889;
i__6395_7873 = G__7890;
continue;
} else {
var vec__6420_7891 = cljs.core.first(seq__6392_7885__$1);
var arg_7892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6420_7891,(0),null);
var param_7893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6420_7891,(1),null);
var arg_type_7894 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7892) : nex.typechecker.check_expression.call(null,env,arg_7892));
var param_type_7895 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7893),type_map);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7894,param_type_7895))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(call_name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_7895))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7894))))], null));
}


var G__7896 = cljs.core.next(seq__6392_7885__$1);
var G__7897 = null;
var G__7898 = (0);
var G__7899 = (0);
seq__6392_7870 = G__7896;
chunk__6393_7871 = G__7897;
count__6394_7872 = G__7898;
i__6395_7873 = G__7899;
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

var seq__6426_7900 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method_sig)));
var chunk__6427_7901 = null;
var count__6428_7902 = (0);
var i__6429_7903 = (0);
while(true){
if((i__6429_7903 < count__6428_7902)){
var vec__6438_7904 = chunk__6427_7901.cljs$core$IIndexed$_nth$arity$2(null,i__6429_7903);
var arg_7905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6438_7904,(0),null);
var param_7906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6438_7904,(1),null);
var arg_type_7908 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7905) : nex.typechecker.check_expression.call(null,env,arg_7905));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7908,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7906)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7906))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7908)))], null));
}


var G__7909 = seq__6426_7900;
var G__7910 = chunk__6427_7901;
var G__7911 = count__6428_7902;
var G__7912 = (i__6429_7903 + (1));
seq__6426_7900 = G__7909;
chunk__6427_7901 = G__7910;
count__6428_7902 = G__7911;
i__6429_7903 = G__7912;
continue;
} else {
var temp__5823__auto___7913 = cljs.core.seq(seq__6426_7900);
if(temp__5823__auto___7913){
var seq__6426_7914__$1 = temp__5823__auto___7913;
if(cljs.core.chunked_seq_QMARK_(seq__6426_7914__$1)){
var c__5673__auto___7915 = cljs.core.chunk_first(seq__6426_7914__$1);
var G__7916 = cljs.core.chunk_rest(seq__6426_7914__$1);
var G__7917 = c__5673__auto___7915;
var G__7918 = cljs.core.count(c__5673__auto___7915);
var G__7919 = (0);
seq__6426_7900 = G__7916;
chunk__6427_7901 = G__7917;
count__6428_7902 = G__7918;
i__6429_7903 = G__7919;
continue;
} else {
var vec__6443_7924 = cljs.core.first(seq__6426_7914__$1);
var arg_7925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6443_7924,(0),null);
var param_7926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6443_7924,(1),null);
var arg_type_7927 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7925) : nex.typechecker.check_expression.call(null,env,arg_7925));
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7927,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7926)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_7926))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_type_7927)))], null));
}


var G__7928 = cljs.core.next(seq__6426_7914__$1);
var G__7929 = null;
var G__7930 = (0);
var G__7931 = (0);
seq__6426_7900 = G__7928;
chunk__6427_7901 = G__7929;
count__6428_7902 = G__7930;
i__6429_7903 = G__7931;
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
var seq__6448_7932 = cljs.core.seq(args);
var chunk__6449_7933 = null;
var count__6450_7934 = (0);
var i__6451_7935 = (0);
while(true){
if((i__6451_7935 < count__6450_7934)){
var arg_7936 = chunk__6449_7933.cljs$core$IIndexed$_nth$arity$2(null,i__6451_7935);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7936) : nex.typechecker.check_expression.call(null,env,arg_7936));


var G__7937 = seq__6448_7932;
var G__7938 = chunk__6449_7933;
var G__7939 = count__6450_7934;
var G__7940 = (i__6451_7935 + (1));
seq__6448_7932 = G__7937;
chunk__6449_7933 = G__7938;
count__6450_7934 = G__7939;
i__6451_7935 = G__7940;
continue;
} else {
var temp__5823__auto___7941 = cljs.core.seq(seq__6448_7932);
if(temp__5823__auto___7941){
var seq__6448_7942__$1 = temp__5823__auto___7941;
if(cljs.core.chunked_seq_QMARK_(seq__6448_7942__$1)){
var c__5673__auto___7943 = cljs.core.chunk_first(seq__6448_7942__$1);
var G__7944 = cljs.core.chunk_rest(seq__6448_7942__$1);
var G__7945 = c__5673__auto___7943;
var G__7946 = cljs.core.count(c__5673__auto___7943);
var G__7947 = (0);
seq__6448_7932 = G__7944;
chunk__6449_7933 = G__7945;
count__6450_7934 = G__7946;
i__6451_7935 = G__7947;
continue;
} else {
var arg_7948 = cljs.core.first(seq__6448_7942__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7948) : nex.typechecker.check_expression.call(null,env,arg_7948));


var G__7950 = cljs.core.next(seq__6448_7942__$1);
var G__7951 = null;
var G__7952 = (0);
var G__7953 = (0);
seq__6448_7932 = G__7950;
chunk__6449_7933 = G__7951;
count__6450_7934 = G__7952;
i__6451_7935 = G__7953;
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
var seq__6452_7954 = cljs.core.seq(args);
var chunk__6453_7955 = null;
var count__6454_7956 = (0);
var i__6455_7957 = (0);
while(true){
if((i__6455_7957 < count__6454_7956)){
var arg_7958 = chunk__6453_7955.cljs$core$IIndexed$_nth$arity$2(null,i__6455_7957);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7958) : nex.typechecker.check_expression.call(null,env,arg_7958));


var G__7959 = seq__6452_7954;
var G__7960 = chunk__6453_7955;
var G__7961 = count__6454_7956;
var G__7962 = (i__6455_7957 + (1));
seq__6452_7954 = G__7959;
chunk__6453_7955 = G__7960;
count__6454_7956 = G__7961;
i__6455_7957 = G__7962;
continue;
} else {
var temp__5823__auto___7963 = cljs.core.seq(seq__6452_7954);
if(temp__5823__auto___7963){
var seq__6452_7964__$1 = temp__5823__auto___7963;
if(cljs.core.chunked_seq_QMARK_(seq__6452_7964__$1)){
var c__5673__auto___7965 = cljs.core.chunk_first(seq__6452_7964__$1);
var G__7966 = cljs.core.chunk_rest(seq__6452_7964__$1);
var G__7967 = c__5673__auto___7965;
var G__7968 = cljs.core.count(c__5673__auto___7965);
var G__7969 = (0);
seq__6452_7954 = G__7966;
chunk__6453_7955 = G__7967;
count__6454_7956 = G__7968;
i__6455_7957 = G__7969;
continue;
} else {
var arg_7970 = cljs.core.first(seq__6452_7964__$1);
(nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7970) : nex.typechecker.check_expression.call(null,env,arg_7970));


var G__7971 = cljs.core.next(seq__6452_7964__$1);
var G__7972 = null;
var G__7973 = (0);
var G__7974 = (0);
seq__6452_7954 = G__7971;
chunk__6453_7955 = G__7972;
count__6454_7956 = G__7973;
i__6455_7957 = G__7974;
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
nex.typechecker.check_create = (function nex$typechecker$check_create(env,p__6471){
var map__6472 = p__6471;
var map__6472__$1 = cljs.core.__destructure_map(map__6472);
var expr = map__6472__$1;
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var generic_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6472__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var arg_type_7975 = (function (){var G__6474 = env;
var G__6475 = cljs.core.first(args);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6474,G__6475) : nex.typechecker.check_expression.call(null,G__6474,G__6475));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_7975,"Integer"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.with_capacity requires Integer capacity",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.with_capacity expects Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_7975))))], null));
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
var seq__6478_7977 = cljs.core.seq(args);
var chunk__6479_7978 = null;
var count__6480_7979 = (0);
var i__6481_7980 = (0);
while(true){
if((i__6481_7980 < count__6480_7979)){
var arg_7981 = chunk__6479_7978.cljs$core$IIndexed$_nth$arity$2(null,i__6481_7980);
var arg_type_7982 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7981) : nex.typechecker.check_expression.call(null,env,arg_7981));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7982,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7983 = seq__6478_7977;
var G__7984 = chunk__6479_7978;
var G__7985 = count__6480_7979;
var G__7986 = (i__6481_7980 + (1));
seq__6478_7977 = G__7983;
chunk__6479_7978 = G__7984;
count__6480_7979 = G__7985;
i__6481_7980 = G__7986;
continue;
} else {
var temp__5823__auto___7987 = cljs.core.seq(seq__6478_7977);
if(temp__5823__auto___7987){
var seq__6478_7988__$1 = temp__5823__auto___7987;
if(cljs.core.chunked_seq_QMARK_(seq__6478_7988__$1)){
var c__5673__auto___7989 = cljs.core.chunk_first(seq__6478_7988__$1);
var G__7990 = cljs.core.chunk_rest(seq__6478_7988__$1);
var G__7991 = c__5673__auto___7989;
var G__7992 = cljs.core.count(c__5673__auto___7989);
var G__7993 = (0);
seq__6478_7977 = G__7990;
chunk__6479_7978 = G__7991;
count__6480_7979 = G__7992;
i__6481_7980 = G__7993;
continue;
} else {
var arg_7994 = cljs.core.first(seq__6478_7988__$1);
var arg_type_7996 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_7994) : nex.typechecker.check_expression.call(null,env,arg_7994));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_type_7996,"String")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("File.open requires a String path argument",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("File.open requires a String path argument")], null));
}


var G__7997 = cljs.core.next(seq__6478_7988__$1);
var G__7998 = null;
var G__7999 = (0);
var G__8000 = (0);
seq__6478_7977 = G__7997;
chunk__6479_7978 = G__7998;
count__6480_7979 = G__7999;
i__6481_7980 = G__8000;
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
var constructors_8001 = nex.typechecker.lookup_class_constructors(env,class_name);
var has_constructors_QMARK__8002 = cljs.core.seq(constructors_8001);
var type_map_8003 = nex.typechecker.build_generic_type_map(env,target_type);
var ctor_name_8004 = (function (){var or__5142__auto__ = constructor$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "make";
}
})();
var ctor_sig_8005 = nex.typechecker.lookup_class_method(env,class_name,ctor_name_8004);
if(((has_constructors_QMARK__8002) && ((((constructor$ == null)) && (cljs.core.empty_QMARK_(args)))))){
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
if(cljs.core.truth_(ctor_sig_8005)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8004)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8004)))], null));
}

var params_8007 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_sig_8005);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params_8007),cljs.core.count(args))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor argument count mismatch for "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8004)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(params_8007))+" args, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))))], null));
} else {
}

var seq__6485_8008 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,args,params_8007));
var chunk__6486_8009 = null;
var count__6487_8010 = (0);
var i__6488_8011 = (0);
while(true){
if((i__6488_8011 < count__6487_8010)){
var vec__6501_8012 = chunk__6486_8009.cljs$core$IIndexed$_nth$arity$2(null,i__6488_8011);
var arg_8013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501_8012,(0),null);
var param_8014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6501_8012,(1),null);
var arg_type_8015 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8013) : nex.typechecker.check_expression.call(null,env,arg_8013));
var param_type_8016 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8014),type_map_8003);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8015,param_type_8016))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8004)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8016))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8015))))], null));
}


var G__8017 = seq__6485_8008;
var G__8018 = chunk__6486_8009;
var G__8019 = count__6487_8010;
var G__8020 = (i__6488_8011 + (1));
seq__6485_8008 = G__8017;
chunk__6486_8009 = G__8018;
count__6487_8010 = G__8019;
i__6488_8011 = G__8020;
continue;
} else {
var temp__5823__auto___8022 = cljs.core.seq(seq__6485_8008);
if(temp__5823__auto___8022){
var seq__6485_8023__$1 = temp__5823__auto___8022;
if(cljs.core.chunked_seq_QMARK_(seq__6485_8023__$1)){
var c__5673__auto___8024 = cljs.core.chunk_first(seq__6485_8023__$1);
var G__8025 = cljs.core.chunk_rest(seq__6485_8023__$1);
var G__8026 = c__5673__auto___8024;
var G__8027 = cljs.core.count(c__5673__auto___8024);
var G__8028 = (0);
seq__6485_8008 = G__8025;
chunk__6486_8009 = G__8026;
count__6487_8010 = G__8027;
i__6488_8011 = G__8028;
continue;
} else {
var vec__6504_8029 = cljs.core.first(seq__6485_8023__$1);
var arg_8030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504_8029,(0),null);
var param_8031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6504_8029,(1),null);
var arg_type_8032 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,arg_8030) : nex.typechecker.check_expression.call(null,env,arg_8030));
var param_type_8033 = nex.typechecker.resolve_generic_type(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8031),type_map_8003);
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,arg_type_8032,param_type_8033))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Argument type mismatch for constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctor_name_8004)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Expected "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(param_type_8033))+", got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(arg_type_8032))))], null));
}


var G__8034 = cljs.core.next(seq__6485_8023__$1);
var G__8035 = null;
var G__8036 = (0);
var G__8037 = (0);
seq__6485_8008 = G__8034;
chunk__6486_8009 = G__8035;
count__6487_8010 = G__8036;
i__6488_8011 = G__8037;
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
nex.typechecker.check_array_literal = (function nex$typechecker$check_array_literal(env,p__6509){
var map__6510 = p__6509;
var map__6510__$1 = cljs.core.__destructure_map(map__6510);
var expr = map__6510__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6510__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any"], null)], null);
} else {
var first_type = (function (){var G__6511 = env;
var G__6512 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6511,G__6512) : nex.typechecker.check_expression.call(null,G__6511,G__6512));
})();
var seq__6513_8038 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6514_8039 = null;
var count__6515_8040 = (0);
var i__6516_8041 = (0);
while(true){
if((i__6516_8041 < count__6515_8040)){
var elem_8042 = chunk__6514_8039.cljs$core$IIndexed$_nth$arity$2(null,i__6516_8041);
var elem_type_8043 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8042) : nex.typechecker.check_expression.call(null,env,elem_8042));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8043))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8043))))], null));
}


var G__8044 = seq__6513_8038;
var G__8045 = chunk__6514_8039;
var G__8046 = count__6515_8040;
var G__8047 = (i__6516_8041 + (1));
seq__6513_8038 = G__8044;
chunk__6514_8039 = G__8045;
count__6515_8040 = G__8046;
i__6516_8041 = G__8047;
continue;
} else {
var temp__5823__auto___8048 = cljs.core.seq(seq__6513_8038);
if(temp__5823__auto___8048){
var seq__6513_8049__$1 = temp__5823__auto___8048;
if(cljs.core.chunked_seq_QMARK_(seq__6513_8049__$1)){
var c__5673__auto___8050 = cljs.core.chunk_first(seq__6513_8049__$1);
var G__8051 = cljs.core.chunk_rest(seq__6513_8049__$1);
var G__8052 = c__5673__auto___8050;
var G__8053 = cljs.core.count(c__5673__auto___8050);
var G__8054 = (0);
seq__6513_8038 = G__8051;
chunk__6514_8039 = G__8052;
count__6515_8040 = G__8053;
i__6516_8041 = G__8054;
continue;
} else {
var elem_8055 = cljs.core.first(seq__6513_8049__$1);
var elem_type_8056 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8055) : nex.typechecker.check_expression.call(null,env,elem_8055));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8056))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Array elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8056))))], null));
}


var G__8057 = cljs.core.next(seq__6513_8049__$1);
var G__8058 = null;
var G__8059 = (0);
var G__8060 = (0);
seq__6513_8038 = G__8057;
chunk__6514_8039 = G__8058;
count__6515_8040 = G__8059;
i__6516_8041 = G__8060;
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
nex.typechecker.check_map_literal = (function nex$typechecker$check_map_literal(env,p__6517){
var map__6518 = p__6517;
var map__6518__$1 = cljs.core.__destructure_map(map__6518);
var expr = map__6518__$1;
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6518__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
if(cljs.core.empty_QMARK_(entries)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Map",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Any","Any"], null)], null);
} else {
var first_entry = cljs.core.first(entries);
var key_type = (function (){var G__6519 = env;
var G__6520 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6519,G__6520) : nex.typechecker.check_expression.call(null,G__6519,G__6520));
})();
var val_type = (function (){var G__6521 = env;
var G__6522 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(first_entry);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6521,G__6522) : nex.typechecker.check_expression.call(null,G__6521,G__6522));
})();
var seq__6523_8061 = cljs.core.seq(cljs.core.rest(entries));
var chunk__6524_8062 = null;
var count__6525_8063 = (0);
var i__6526_8064 = (0);
while(true){
if((i__6526_8064 < count__6525_8063)){
var entry_8067 = chunk__6524_8062.cljs$core$IIndexed$_nth$arity$2(null,i__6526_8064);
var k_type_8070 = (function (){var G__6535 = env;
var G__6536 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8067);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6535,G__6536) : nex.typechecker.check_expression.call(null,G__6535,G__6536));
})();
var v_type_8071 = (function (){var G__6537 = env;
var G__6538 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8067);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6537,G__6538) : nex.typechecker.check_expression.call(null,G__6537,G__6538));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8070);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8071);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8083 = seq__6523_8061;
var G__8084 = chunk__6524_8062;
var G__8085 = count__6525_8063;
var G__8086 = (i__6526_8064 + (1));
seq__6523_8061 = G__8083;
chunk__6524_8062 = G__8084;
count__6525_8063 = G__8085;
i__6526_8064 = G__8086;
continue;
} else {
var temp__5823__auto___8091 = cljs.core.seq(seq__6523_8061);
if(temp__5823__auto___8091){
var seq__6523_8092__$1 = temp__5823__auto___8091;
if(cljs.core.chunked_seq_QMARK_(seq__6523_8092__$1)){
var c__5673__auto___8094 = cljs.core.chunk_first(seq__6523_8092__$1);
var G__8096 = cljs.core.chunk_rest(seq__6523_8092__$1);
var G__8097 = c__5673__auto___8094;
var G__8098 = cljs.core.count(c__5673__auto___8094);
var G__8099 = (0);
seq__6523_8061 = G__8096;
chunk__6524_8062 = G__8097;
count__6525_8063 = G__8098;
i__6526_8064 = G__8099;
continue;
} else {
var entry_8105 = cljs.core.first(seq__6523_8092__$1);
var k_type_8107 = (function (){var G__6539 = env;
var G__6540 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(entry_8105);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6539,G__6540) : nex.typechecker.check_expression.call(null,G__6539,G__6540));
})();
var v_type_8108 = (function (){var G__6544 = env;
var G__6545 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry_8105);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6544,G__6545) : nex.typechecker.check_expression.call(null,G__6544,G__6545));
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,key_type,k_type_8107);
if(cljs.core.truth_(and__5140__auto__)){
return nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,val_type,v_type_8108);
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Map entries must have consistent types",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("Map entries must have consistent types")], null));
}


var G__8115 = cljs.core.next(seq__6523_8092__$1);
var G__8116 = null;
var G__8117 = (0);
var G__8118 = (0);
seq__6523_8061 = G__8115;
chunk__6524_8062 = G__8116;
count__6525_8063 = G__8117;
i__6526_8064 = G__8118;
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
nex.typechecker.check_set_literal = (function nex$typechecker$check_set_literal(env,p__6550){
var map__6551 = p__6550;
var map__6551__$1 = cljs.core.__destructure_map(map__6551);
var expr = map__6551__$1;
var elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6551__$1,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.empty_QMARK_(elements)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["__EmptySetElement"], null)], null);
} else {
var first_type = (function (){var G__6552 = env;
var G__6553 = cljs.core.first(elements);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6552,G__6553) : nex.typechecker.check_expression.call(null,G__6552,G__6553));
})();
var seq__6554_8119 = cljs.core.seq(cljs.core.rest(elements));
var chunk__6555_8120 = null;
var count__6556_8121 = (0);
var i__6557_8122 = (0);
while(true){
if((i__6557_8122 < count__6556_8121)){
var elem_8123 = chunk__6555_8120.cljs$core$IIndexed$_nth$arity$2(null,i__6557_8122);
var elem_type_8124 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8123) : nex.typechecker.check_expression.call(null,env,elem_8123));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8124))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8124))))], null));
}


var G__8125 = seq__6554_8119;
var G__8126 = chunk__6555_8120;
var G__8127 = count__6556_8121;
var G__8128 = (i__6557_8122 + (1));
seq__6554_8119 = G__8125;
chunk__6555_8120 = G__8126;
count__6556_8121 = G__8127;
i__6557_8122 = G__8128;
continue;
} else {
var temp__5823__auto___8129 = cljs.core.seq(seq__6554_8119);
if(temp__5823__auto___8129){
var seq__6554_8130__$1 = temp__5823__auto___8129;
if(cljs.core.chunked_seq_QMARK_(seq__6554_8130__$1)){
var c__5673__auto___8131 = cljs.core.chunk_first(seq__6554_8130__$1);
var G__8132 = cljs.core.chunk_rest(seq__6554_8130__$1);
var G__8133 = c__5673__auto___8131;
var G__8134 = cljs.core.count(c__5673__auto___8131);
var G__8135 = (0);
seq__6554_8119 = G__8132;
chunk__6555_8120 = G__8133;
count__6556_8121 = G__8134;
i__6557_8122 = G__8135;
continue;
} else {
var elem_8136 = cljs.core.first(seq__6554_8130__$1);
var elem_type_8137 = (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(env,elem_8136) : nex.typechecker.check_expression.call(null,env,elem_8136));
if(cljs.core.truth_(nex.typechecker.types_equal_QMARK_.cljs$core$IFn$_invoke$arity$3(env,first_type,elem_type_8137))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Set elements must have same type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Set elements must have same type, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(first_type))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(elem_type_8137))))], null));
}


var G__8138 = cljs.core.next(seq__6554_8130__$1);
var G__8139 = null;
var G__8140 = (0);
var G__8141 = (0);
seq__6554_8119 = G__8138;
chunk__6555_8120 = G__8139;
count__6556_8121 = G__8140;
i__6557_8122 = G__8141;
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
var G__6562 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expr);
var G__6562__$1 = (((G__6562 instanceof cljs.core.Keyword))?G__6562.fqn:null);
switch (G__6562__$1) {
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
var target_type = (function (){var G__6563 = env;
var G__6564 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6563,G__6564) : nex.typechecker.check_expression.call(null,G__6563,G__6564));
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
var cond_type = (function (){var G__6566 = env;
var G__6567 = new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6566,G__6567) : nex.typechecker.check_expression.call(null,G__6566,G__6567));
})();
var cons_type = (function (){var G__6568 = env;
var G__6569 = new cljs.core.Keyword(null,"consequent","consequent",234514643).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6568,G__6569) : nex.typechecker.check_expression.call(null,G__6568,G__6569));
})();
var alt_type = (function (){var G__6570 = env;
var G__6571 = new cljs.core.Keyword(null,"alternative","alternative",51666308).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6570,G__6571) : nex.typechecker.check_expression.call(null,G__6570,G__6571));
})();
if(cljs.core.truth_(nex.typechecker.types_compatible_QMARK_(env,cond_type,"Boolean"))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"when condition has type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type)+", expected Boolean"))], null));
}

return cons_type;

break;
case "old":
var G__6572 = env;
var G__6573 = new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(expr);
return (nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_expression.cljs$core$IFn$_invoke$arity$2(G__6572,G__6573) : nex.typechecker.check_expression.call(null,G__6572,G__6573));

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
nex.typechecker.check_assignment = (function nex$typechecker$check_assignment(env,p__6575){
var map__6576 = p__6575;
var map__6576__$1 = cljs.core.__destructure_map(map__6576);
var stmt = map__6576__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576__$1,new cljs.core.Keyword(null,"target","target",253001721));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5823__auto___8146 = nex.typechecker.env_lookup_var(env,"__current_class__");
if(cljs.core.truth_(temp__5823__auto___8146)){
var current_class_8147 = temp__5823__auto___8146;
if(cljs.core.truth_(nex.typechecker.lookup_class_constant(env,current_class_8147,target))){
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
nex.typechecker.check_let = (function nex$typechecker$check_let(env,p__6579){
var map__6580 = p__6579;
var map__6580__$1 = cljs.core.__destructure_map(map__6580);
var stmt = map__6580__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6580__$1,new cljs.core.Keyword(null,"var-type","var-type",-1876390632));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6580__$1,new cljs.core.Keyword(null,"value","value",305978217));
var synthetic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6580__$1,new cljs.core.Keyword(null,"synthetic","synthetic",-664653862));
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
nex.typechecker.check_if = (function nex$typechecker$check_if(env,p__6581){
var map__6582 = p__6581;
var map__6582__$1 = cljs.core.__destructure_map(map__6582);
var stmt = map__6582__$1;
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"then","then",460598070));
var elseif = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"elseif","elseif",551759784));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6582__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var cond_type_8149 = nex.typechecker.check_expression(env,condition);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8149,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("If condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"If condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8149)))], null));
}

var then_env_8150 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8151 = nex.typechecker.guarded_non_nil_var(condition);
if(cljs.core.truth_(temp__5823__auto___8151)){
var non_nil_var_8152 = temp__5823__auto___8151;
nex.typechecker.env_mark_non_nil(then_env_8150,non_nil_var_8152);
} else {
}

var temp__5823__auto___8153 = nex.typechecker.convert_guard_binding(condition);
if(cljs.core.truth_(temp__5823__auto___8153)){
var map__6583_8154 = temp__5823__auto___8153;
var map__6583_8155__$1 = cljs.core.__destructure_map(map__6583_8154);
var name_8156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6583_8155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6583_8155__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(then_env_8150,name_8156,type_8157);

nex.typechecker.env_mark_non_nil(then_env_8150,name_8156);
} else {
}

var seq__6584_8158 = cljs.core.seq(then);
var chunk__6585_8159 = null;
var count__6586_8160 = (0);
var i__6587_8161 = (0);
while(true){
if((i__6587_8161 < count__6586_8160)){
var stmt_8162__$1 = chunk__6585_8159.cljs$core$IIndexed$_nth$arity$2(null,i__6587_8161);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8150,stmt_8162__$1) : nex.typechecker.check_statement.call(null,then_env_8150,stmt_8162__$1));


var G__8163 = seq__6584_8158;
var G__8164 = chunk__6585_8159;
var G__8165 = count__6586_8160;
var G__8166 = (i__6587_8161 + (1));
seq__6584_8158 = G__8163;
chunk__6585_8159 = G__8164;
count__6586_8160 = G__8165;
i__6587_8161 = G__8166;
continue;
} else {
var temp__5823__auto___8167 = cljs.core.seq(seq__6584_8158);
if(temp__5823__auto___8167){
var seq__6584_8168__$1 = temp__5823__auto___8167;
if(cljs.core.chunked_seq_QMARK_(seq__6584_8168__$1)){
var c__5673__auto___8169 = cljs.core.chunk_first(seq__6584_8168__$1);
var G__8170 = cljs.core.chunk_rest(seq__6584_8168__$1);
var G__8171 = c__5673__auto___8169;
var G__8172 = cljs.core.count(c__5673__auto___8169);
var G__8173 = (0);
seq__6584_8158 = G__8170;
chunk__6585_8159 = G__8171;
count__6586_8160 = G__8172;
i__6587_8161 = G__8173;
continue;
} else {
var stmt_8174__$1 = cljs.core.first(seq__6584_8168__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(then_env_8150,stmt_8174__$1) : nex.typechecker.check_statement.call(null,then_env_8150,stmt_8174__$1));


var G__8176 = cljs.core.next(seq__6584_8168__$1);
var G__8177 = null;
var G__8178 = (0);
var G__8179 = (0);
seq__6584_8158 = G__8176;
chunk__6585_8159 = G__8177;
count__6586_8160 = G__8178;
i__6587_8161 = G__8179;
continue;
}
} else {
}
}
break;
}

var seq__6588_8180 = cljs.core.seq(elseif);
var chunk__6589_8181 = null;
var count__6590_8182 = (0);
var i__6591_8183 = (0);
while(true){
if((i__6591_8183 < count__6590_8182)){
var clause_8184 = chunk__6589_8181.cljs$core$IIndexed$_nth$arity$2(null,i__6591_8183);
var ei_cond_type_8185 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8184));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8185,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8185)))], null));
}

var elseif_env_8186 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8187 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8184));
if(cljs.core.truth_(temp__5823__auto___8187)){
var non_nil_var_8188 = temp__5823__auto___8187;
nex.typechecker.env_mark_non_nil(elseif_env_8186,non_nil_var_8188);
} else {
}

var temp__5823__auto___8189 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8184));
if(cljs.core.truth_(temp__5823__auto___8189)){
var map__6604_8190 = temp__5823__auto___8189;
var map__6604_8191__$1 = cljs.core.__destructure_map(map__6604_8190);
var name_8192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6604_8191__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6604_8191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8186,name_8192,type_8193);

nex.typechecker.env_mark_non_nil(elseif_env_8186,name_8192);
} else {
}

var seq__6605_8194 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8184));
var chunk__6606_8195 = null;
var count__6607_8196 = (0);
var i__6608_8197 = (0);
while(true){
if((i__6608_8197 < count__6607_8196)){
var stmt_8198__$1 = chunk__6606_8195.cljs$core$IIndexed$_nth$arity$2(null,i__6608_8197);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8186,stmt_8198__$1) : nex.typechecker.check_statement.call(null,elseif_env_8186,stmt_8198__$1));


var G__8199 = seq__6605_8194;
var G__8200 = chunk__6606_8195;
var G__8201 = count__6607_8196;
var G__8202 = (i__6608_8197 + (1));
seq__6605_8194 = G__8199;
chunk__6606_8195 = G__8200;
count__6607_8196 = G__8201;
i__6608_8197 = G__8202;
continue;
} else {
var temp__5823__auto___8203 = cljs.core.seq(seq__6605_8194);
if(temp__5823__auto___8203){
var seq__6605_8204__$1 = temp__5823__auto___8203;
if(cljs.core.chunked_seq_QMARK_(seq__6605_8204__$1)){
var c__5673__auto___8205 = cljs.core.chunk_first(seq__6605_8204__$1);
var G__8206 = cljs.core.chunk_rest(seq__6605_8204__$1);
var G__8207 = c__5673__auto___8205;
var G__8208 = cljs.core.count(c__5673__auto___8205);
var G__8209 = (0);
seq__6605_8194 = G__8206;
chunk__6606_8195 = G__8207;
count__6607_8196 = G__8208;
i__6608_8197 = G__8209;
continue;
} else {
var stmt_8210__$1 = cljs.core.first(seq__6605_8204__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8186,stmt_8210__$1) : nex.typechecker.check_statement.call(null,elseif_env_8186,stmt_8210__$1));


var G__8211 = cljs.core.next(seq__6605_8204__$1);
var G__8212 = null;
var G__8213 = (0);
var G__8214 = (0);
seq__6605_8194 = G__8211;
chunk__6606_8195 = G__8212;
count__6607_8196 = G__8213;
i__6608_8197 = G__8214;
continue;
}
} else {
}
}
break;
}


var G__8215 = seq__6588_8180;
var G__8216 = chunk__6589_8181;
var G__8217 = count__6590_8182;
var G__8218 = (i__6591_8183 + (1));
seq__6588_8180 = G__8215;
chunk__6589_8181 = G__8216;
count__6590_8182 = G__8217;
i__6591_8183 = G__8218;
continue;
} else {
var temp__5823__auto___8219 = cljs.core.seq(seq__6588_8180);
if(temp__5823__auto___8219){
var seq__6588_8220__$1 = temp__5823__auto___8219;
if(cljs.core.chunked_seq_QMARK_(seq__6588_8220__$1)){
var c__5673__auto___8221 = cljs.core.chunk_first(seq__6588_8220__$1);
var G__8222 = cljs.core.chunk_rest(seq__6588_8220__$1);
var G__8223 = c__5673__auto___8221;
var G__8224 = cljs.core.count(c__5673__auto___8221);
var G__8225 = (0);
seq__6588_8180 = G__8222;
chunk__6589_8181 = G__8223;
count__6590_8182 = G__8224;
i__6591_8183 = G__8225;
continue;
} else {
var clause_8226 = cljs.core.first(seq__6588_8220__$1);
var ei_cond_type_8227 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8226));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ei_cond_type_8227,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Elseif condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Elseif condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ei_cond_type_8227)))], null));
}

var elseif_env_8228 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var temp__5823__auto___8229__$1 = nex.typechecker.guarded_non_nil_var(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8226));
if(cljs.core.truth_(temp__5823__auto___8229__$1)){
var non_nil_var_8230 = temp__5823__auto___8229__$1;
nex.typechecker.env_mark_non_nil(elseif_env_8228,non_nil_var_8230);
} else {
}

var temp__5823__auto___8231__$1 = nex.typechecker.convert_guard_binding(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(clause_8226));
if(cljs.core.truth_(temp__5823__auto___8231__$1)){
var map__6609_8232 = temp__5823__auto___8231__$1;
var map__6609_8233__$1 = cljs.core.__destructure_map(map__6609_8232);
var name_8234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6609_8233__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type_8235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6609_8233__$1,new cljs.core.Keyword(null,"type","type",1174270348));
nex.typechecker.env_add_var(elseif_env_8228,name_8234,type_8235);

nex.typechecker.env_mark_non_nil(elseif_env_8228,name_8234);
} else {
}

var seq__6610_8238 = cljs.core.seq(new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(clause_8226));
var chunk__6611_8239 = null;
var count__6612_8240 = (0);
var i__6613_8241 = (0);
while(true){
if((i__6613_8241 < count__6612_8240)){
var stmt_8243__$1 = chunk__6611_8239.cljs$core$IIndexed$_nth$arity$2(null,i__6613_8241);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8228,stmt_8243__$1) : nex.typechecker.check_statement.call(null,elseif_env_8228,stmt_8243__$1));


var G__8244 = seq__6610_8238;
var G__8245 = chunk__6611_8239;
var G__8246 = count__6612_8240;
var G__8247 = (i__6613_8241 + (1));
seq__6610_8238 = G__8244;
chunk__6611_8239 = G__8245;
count__6612_8240 = G__8246;
i__6613_8241 = G__8247;
continue;
} else {
var temp__5823__auto___8249__$1 = cljs.core.seq(seq__6610_8238);
if(temp__5823__auto___8249__$1){
var seq__6610_8250__$1 = temp__5823__auto___8249__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6610_8250__$1)){
var c__5673__auto___8251 = cljs.core.chunk_first(seq__6610_8250__$1);
var G__8252 = cljs.core.chunk_rest(seq__6610_8250__$1);
var G__8253 = c__5673__auto___8251;
var G__8254 = cljs.core.count(c__5673__auto___8251);
var G__8255 = (0);
seq__6610_8238 = G__8252;
chunk__6611_8239 = G__8253;
count__6612_8240 = G__8254;
i__6613_8241 = G__8255;
continue;
} else {
var stmt_8256__$1 = cljs.core.first(seq__6610_8250__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(elseif_env_8228,stmt_8256__$1) : nex.typechecker.check_statement.call(null,elseif_env_8228,stmt_8256__$1));


var G__8257 = cljs.core.next(seq__6610_8250__$1);
var G__8258 = null;
var G__8259 = (0);
var G__8260 = (0);
seq__6610_8238 = G__8257;
chunk__6611_8239 = G__8258;
count__6612_8240 = G__8259;
i__6613_8241 = G__8260;
continue;
}
} else {
}
}
break;
}


var G__8261 = cljs.core.next(seq__6588_8220__$1);
var G__8262 = null;
var G__8263 = (0);
var G__8264 = (0);
seq__6588_8180 = G__8261;
chunk__6589_8181 = G__8262;
count__6590_8182 = G__8263;
i__6591_8183 = G__8264;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(else$)){
var else_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6614 = cljs.core.seq(else$);
var chunk__6615 = null;
var count__6616 = (0);
var i__6617 = (0);
while(true){
if((i__6617 < count__6616)){
var stmt__$1 = chunk__6615.cljs$core$IIndexed$_nth$arity$2(null,i__6617);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8266 = seq__6614;
var G__8267 = chunk__6615;
var G__8268 = count__6616;
var G__8269 = (i__6617 + (1));
seq__6614 = G__8266;
chunk__6615 = G__8267;
count__6616 = G__8268;
i__6617 = G__8269;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6614);
if(temp__5823__auto__){
var seq__6614__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6614__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6614__$1);
var G__8270 = cljs.core.chunk_rest(seq__6614__$1);
var G__8271 = c__5673__auto__;
var G__8272 = cljs.core.count(c__5673__auto__);
var G__8273 = (0);
seq__6614 = G__8270;
chunk__6615 = G__8271;
count__6616 = G__8272;
i__6617 = G__8273;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6614__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt__$1) : nex.typechecker.check_statement.call(null,else_env,stmt__$1));


var G__8274 = cljs.core.next(seq__6614__$1);
var G__8275 = null;
var G__8276 = (0);
var G__8277 = (0);
seq__6614 = G__8274;
chunk__6615 = G__8275;
count__6616 = G__8276;
i__6617 = G__8277;
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
nex.typechecker.check_loop = (function nex$typechecker$check_loop(env,p__6618){
var map__6619 = p__6618;
var map__6619__$1 = cljs.core.__destructure_map(map__6619);
var stmt = map__6619__$1;
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var condition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"condition","condition",1668437652));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6619__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var loop_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6620_8278 = cljs.core.seq(init);
var chunk__6621_8279 = null;
var count__6622_8280 = (0);
var i__6623_8281 = (0);
while(true){
if((i__6623_8281 < count__6622_8280)){
var s_8282 = chunk__6621_8279.cljs$core$IIndexed$_nth$arity$2(null,i__6623_8281);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8282) : nex.typechecker.check_statement.call(null,loop_env,s_8282));


var G__8283 = seq__6620_8278;
var G__8284 = chunk__6621_8279;
var G__8285 = count__6622_8280;
var G__8286 = (i__6623_8281 + (1));
seq__6620_8278 = G__8283;
chunk__6621_8279 = G__8284;
count__6622_8280 = G__8285;
i__6623_8281 = G__8286;
continue;
} else {
var temp__5823__auto___8288 = cljs.core.seq(seq__6620_8278);
if(temp__5823__auto___8288){
var seq__6620_8289__$1 = temp__5823__auto___8288;
if(cljs.core.chunked_seq_QMARK_(seq__6620_8289__$1)){
var c__5673__auto___8290 = cljs.core.chunk_first(seq__6620_8289__$1);
var G__8291 = cljs.core.chunk_rest(seq__6620_8289__$1);
var G__8292 = c__5673__auto___8290;
var G__8293 = cljs.core.count(c__5673__auto___8290);
var G__8294 = (0);
seq__6620_8278 = G__8291;
chunk__6621_8279 = G__8292;
count__6622_8280 = G__8293;
i__6623_8281 = G__8294;
continue;
} else {
var s_8295 = cljs.core.first(seq__6620_8289__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,s_8295) : nex.typechecker.check_statement.call(null,loop_env,s_8295));


var G__8296 = cljs.core.next(seq__6620_8289__$1);
var G__8297 = null;
var G__8298 = (0);
var G__8299 = (0);
seq__6620_8278 = G__8296;
chunk__6621_8279 = G__8297;
count__6622_8280 = G__8298;
i__6623_8281 = G__8299;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(condition)){
var cond_type_8300 = nex.typechecker.check_expression(loop_env,condition);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8300,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8300,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Loop condition must be Boolean",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Loop condition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8300)))], null));
}
} else {
}

var seq__6624 = cljs.core.seq(body);
var chunk__6625 = null;
var count__6626 = (0);
var i__6627 = (0);
while(true){
if((i__6627 < count__6626)){
var stmt__$1 = chunk__6625.cljs$core$IIndexed$_nth$arity$2(null,i__6627);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8301 = seq__6624;
var G__8302 = chunk__6625;
var G__8303 = count__6626;
var G__8304 = (i__6627 + (1));
seq__6624 = G__8301;
chunk__6625 = G__8302;
count__6626 = G__8303;
i__6627 = G__8304;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6624);
if(temp__5823__auto__){
var seq__6624__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6624__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6624__$1);
var G__8306 = cljs.core.chunk_rest(seq__6624__$1);
var G__8307 = c__5673__auto__;
var G__8308 = cljs.core.count(c__5673__auto__);
var G__8309 = (0);
seq__6624 = G__8306;
chunk__6625 = G__8307;
count__6626 = G__8308;
i__6627 = G__8309;
continue;
} else {
var stmt__$1 = cljs.core.first(seq__6624__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(loop_env,stmt__$1) : nex.typechecker.check_statement.call(null,loop_env,stmt__$1));


var G__8310 = cljs.core.next(seq__6624__$1);
var G__8311 = null;
var G__8312 = (0);
var G__8313 = (0);
seq__6624 = G__8310;
chunk__6625 = G__8311;
count__6626 = G__8312;
i__6627 = G__8313;
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
nex.typechecker.check_select_clause = (function nex$typechecker$check_select_clause(env,p__6636){
var map__6637 = p__6636;
var map__6637__$1 = cljs.core.__destructure_map(map__6637);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6637__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__6638 = (function (){var or__5142__auto__ = nex.typechecker.select_clause_op(expr);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select clause must be a channel or task operation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1("select clause must be a channel send/receive call or task await call")], null));
}
})();
var map__6638__$1 = cljs.core.__destructure_map(map__6638);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6638__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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
var G__6639 = base_type;
switch (G__6639) {
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

var seq__6640 = cljs.core.seq(body);
var chunk__6641 = null;
var count__6642 = (0);
var i__6643 = (0);
while(true){
if((i__6643 < count__6642)){
var stmt = chunk__6641.cljs$core$IIndexed$_nth$arity$2(null,i__6643);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8320 = seq__6640;
var G__8321 = chunk__6641;
var G__8322 = count__6642;
var G__8323 = (i__6643 + (1));
seq__6640 = G__8320;
chunk__6641 = G__8321;
count__6642 = G__8322;
i__6643 = G__8323;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6640);
if(temp__5823__auto__){
var seq__6640__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6640__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6640__$1);
var G__8325 = cljs.core.chunk_rest(seq__6640__$1);
var G__8326 = c__5673__auto__;
var G__8327 = cljs.core.count(c__5673__auto__);
var G__8328 = (0);
seq__6640 = G__8325;
chunk__6641 = G__8326;
count__6642 = G__8327;
i__6643 = G__8328;
continue;
} else {
var stmt = cljs.core.first(seq__6640__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8329 = cljs.core.next(seq__6640__$1);
var G__8330 = null;
var G__8331 = (0);
var G__8332 = (0);
seq__6640 = G__8329;
chunk__6641 = G__8330;
count__6642 = G__8331;
i__6643 = G__8332;
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
var G__6644 = method;
switch (G__6644) {
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
var timeout_type_8334 = nex.typechecker.check_expression(env,cljs.core.first(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_8334),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.receive timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.receive timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_8334))))], null));
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

var seq__6645 = cljs.core.seq(body);
var chunk__6646 = null;
var count__6647 = (0);
var i__6648 = (0);
while(true){
if((i__6648 < count__6647)){
var stmt = chunk__6646.cljs$core$IIndexed$_nth$arity$2(null,i__6648);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8339 = seq__6645;
var G__8340 = chunk__6646;
var G__8341 = count__6647;
var G__8342 = (i__6648 + (1));
seq__6645 = G__8339;
chunk__6646 = G__8340;
count__6647 = G__8341;
i__6648 = G__8342;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6645);
if(temp__5823__auto__){
var seq__6645__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6645__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6645__$1);
var G__8343 = cljs.core.chunk_rest(seq__6645__$1);
var G__8344 = c__5673__auto__;
var G__8345 = cljs.core.count(c__5673__auto__);
var G__8346 = (0);
seq__6645 = G__8343;
chunk__6646 = G__8344;
count__6647 = G__8345;
i__6648 = G__8346;
continue;
} else {
var stmt = cljs.core.first(seq__6645__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8347 = cljs.core.next(seq__6645__$1);
var G__8348 = null;
var G__8349 = (0);
var G__8350 = (0);
seq__6645 = G__8347;
chunk__6646 = G__8348;
count__6647 = G__8349;
i__6648 = G__8350;
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
var timeout_type_8355 = nex.typechecker.check_expression(env,cljs.core.second(args));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(timeout_type_8355),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Channel.send timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Channel.send timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(timeout_type_8355))))], null));
}
} else {
}

var body_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6649 = cljs.core.seq(body);
var chunk__6650 = null;
var count__6651 = (0);
var i__6652 = (0);
while(true){
if((i__6652 < count__6651)){
var stmt = chunk__6650.cljs$core$IIndexed$_nth$arity$2(null,i__6652);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8357 = seq__6649;
var G__8358 = chunk__6650;
var G__8359 = count__6651;
var G__8360 = (i__6652 + (1));
seq__6649 = G__8357;
chunk__6650 = G__8358;
count__6651 = G__8359;
i__6652 = G__8360;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6649);
if(temp__5823__auto__){
var seq__6649__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6649__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6649__$1);
var G__8365 = cljs.core.chunk_rest(seq__6649__$1);
var G__8366 = c__5673__auto__;
var G__8367 = cljs.core.count(c__5673__auto__);
var G__8368 = (0);
seq__6649 = G__8365;
chunk__6650 = G__8366;
count__6651 = G__8367;
i__6652 = G__8368;
continue;
} else {
var stmt = cljs.core.first(seq__6649__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(body_env,stmt) : nex.typechecker.check_statement.call(null,body_env,stmt));


var G__8369 = cljs.core.next(seq__6649__$1);
var G__8370 = null;
var G__8371 = (0);
var G__8372 = (0);
seq__6649 = G__8369;
chunk__6650 = G__8370;
count__6651 = G__8371;
i__6652 = G__8372;
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
nex.typechecker.check_select = (function nex$typechecker$check_select(env,p__6657){
var map__6658 = p__6657;
var map__6658__$1 = cljs.core.__destructure_map(map__6658);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6658__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var seq__6659_8373 = cljs.core.seq(clauses);
var chunk__6660_8374 = null;
var count__6661_8375 = (0);
var i__6662_8376 = (0);
while(true){
if((i__6662_8376 < count__6661_8375)){
var clause_8377 = chunk__6660_8374.cljs$core$IIndexed$_nth$arity$2(null,i__6662_8376);
nex.typechecker.check_select_clause(env,clause_8377);


var G__8378 = seq__6659_8373;
var G__8379 = chunk__6660_8374;
var G__8380 = count__6661_8375;
var G__8381 = (i__6662_8376 + (1));
seq__6659_8373 = G__8378;
chunk__6660_8374 = G__8379;
count__6661_8375 = G__8380;
i__6662_8376 = G__8381;
continue;
} else {
var temp__5823__auto___8382 = cljs.core.seq(seq__6659_8373);
if(temp__5823__auto___8382){
var seq__6659_8383__$1 = temp__5823__auto___8382;
if(cljs.core.chunked_seq_QMARK_(seq__6659_8383__$1)){
var c__5673__auto___8384 = cljs.core.chunk_first(seq__6659_8383__$1);
var G__8385 = cljs.core.chunk_rest(seq__6659_8383__$1);
var G__8386 = c__5673__auto___8384;
var G__8387 = cljs.core.count(c__5673__auto___8384);
var G__8388 = (0);
seq__6659_8373 = G__8385;
chunk__6660_8374 = G__8386;
count__6661_8375 = G__8387;
i__6662_8376 = G__8388;
continue;
} else {
var clause_8389 = cljs.core.first(seq__6659_8383__$1);
nex.typechecker.check_select_clause(env,clause_8389);


var G__8394 = cljs.core.next(seq__6659_8383__$1);
var G__8395 = null;
var G__8396 = (0);
var G__8397 = (0);
seq__6659_8373 = G__8394;
chunk__6660_8374 = G__8395;
count__6661_8375 = G__8396;
i__6662_8376 = G__8397;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(timeout)){
var duration_type_8401 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(timeout));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nex.typechecker.attachable_type(duration_type_8401),"Integer")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select timeout must be Integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"select timeout must be Integer, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.typechecker.display_type(duration_type_8401))))], null));
}

var timeout_env_8403 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6663_8406 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(timeout));
var chunk__6664_8409 = null;
var count__6665_8410 = (0);
var i__6666_8411 = (0);
while(true){
if((i__6666_8411 < count__6665_8410)){
var stmt_8413 = chunk__6664_8409.cljs$core$IIndexed$_nth$arity$2(null,i__6666_8411);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_8403,stmt_8413) : nex.typechecker.check_statement.call(null,timeout_env_8403,stmt_8413));


var G__8416 = seq__6663_8406;
var G__8417 = chunk__6664_8409;
var G__8418 = count__6665_8410;
var G__8419 = (i__6666_8411 + (1));
seq__6663_8406 = G__8416;
chunk__6664_8409 = G__8417;
count__6665_8410 = G__8418;
i__6666_8411 = G__8419;
continue;
} else {
var temp__5823__auto___8424 = cljs.core.seq(seq__6663_8406);
if(temp__5823__auto___8424){
var seq__6663_8428__$1 = temp__5823__auto___8424;
if(cljs.core.chunked_seq_QMARK_(seq__6663_8428__$1)){
var c__5673__auto___8429 = cljs.core.chunk_first(seq__6663_8428__$1);
var G__8431 = cljs.core.chunk_rest(seq__6663_8428__$1);
var G__8432 = c__5673__auto___8429;
var G__8433 = cljs.core.count(c__5673__auto___8429);
var G__8434 = (0);
seq__6663_8406 = G__8431;
chunk__6664_8409 = G__8432;
count__6665_8410 = G__8433;
i__6666_8411 = G__8434;
continue;
} else {
var stmt_8435 = cljs.core.first(seq__6663_8428__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(timeout_env_8403,stmt_8435) : nex.typechecker.check_statement.call(null,timeout_env_8403,stmt_8435));


var G__8440 = cljs.core.next(seq__6663_8428__$1);
var G__8441 = null;
var G__8442 = (0);
var G__8443 = (0);
seq__6663_8406 = G__8440;
chunk__6664_8409 = G__8441;
count__6665_8410 = G__8442;
i__6666_8411 = G__8443;
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
var seq__6667 = cljs.core.seq(else$);
var chunk__6668 = null;
var count__6669 = (0);
var i__6670 = (0);
while(true){
if((i__6670 < count__6669)){
var stmt = chunk__6668.cljs$core$IIndexed$_nth$arity$2(null,i__6670);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__8453 = seq__6667;
var G__8454 = chunk__6668;
var G__8455 = count__6669;
var G__8456 = (i__6670 + (1));
seq__6667 = G__8453;
chunk__6668 = G__8454;
count__6669 = G__8455;
i__6670 = G__8456;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6667);
if(temp__5823__auto__){
var seq__6667__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6667__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6667__$1);
var G__8462 = cljs.core.chunk_rest(seq__6667__$1);
var G__8463 = c__5673__auto__;
var G__8464 = cljs.core.count(c__5673__auto__);
var G__8465 = (0);
seq__6667 = G__8462;
chunk__6668 = G__8463;
count__6669 = G__8464;
i__6670 = G__8465;
continue;
} else {
var stmt = cljs.core.first(seq__6667__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(else_env,stmt) : nex.typechecker.check_statement.call(null,else_env,stmt));


var G__8472 = cljs.core.next(seq__6667__$1);
var G__8473 = null;
var G__8474 = (0);
var G__8475 = (0);
seq__6667 = G__8472;
chunk__6668 = G__8473;
count__6669 = G__8474;
i__6670 = G__8475;
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
var G__6671 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__6671__$1 = (((G__6671 instanceof cljs.core.Keyword))?G__6671.fqn:null);
switch (G__6671__$1) {
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
var block_env_8485 = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
var seq__6672_8486 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6673_8487 = null;
var count__6674_8488 = (0);
var i__6675_8489 = (0);
while(true){
if((i__6675_8489 < count__6674_8488)){
var s_8490 = chunk__6673_8487.cljs$core$IIndexed$_nth$arity$2(null,i__6675_8489);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_8485,s_8490) : nex.typechecker.check_statement.call(null,block_env_8485,s_8490));


var G__8491 = seq__6672_8486;
var G__8492 = chunk__6673_8487;
var G__8493 = count__6674_8488;
var G__8494 = (i__6675_8489 + (1));
seq__6672_8486 = G__8491;
chunk__6673_8487 = G__8492;
count__6674_8488 = G__8493;
i__6675_8489 = G__8494;
continue;
} else {
var temp__5823__auto___8495 = cljs.core.seq(seq__6672_8486);
if(temp__5823__auto___8495){
var seq__6672_8496__$1 = temp__5823__auto___8495;
if(cljs.core.chunked_seq_QMARK_(seq__6672_8496__$1)){
var c__5673__auto___8497 = cljs.core.chunk_first(seq__6672_8496__$1);
var G__8498 = cljs.core.chunk_rest(seq__6672_8496__$1);
var G__8499 = c__5673__auto___8497;
var G__8500 = cljs.core.count(c__5673__auto___8497);
var G__8501 = (0);
seq__6672_8486 = G__8498;
chunk__6673_8487 = G__8499;
count__6674_8488 = G__8500;
i__6675_8489 = G__8501;
continue;
} else {
var s_8502 = cljs.core.first(seq__6672_8496__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(block_env_8485,s_8502) : nex.typechecker.check_statement.call(null,block_env_8485,s_8502));


var G__8503 = cljs.core.next(seq__6672_8496__$1);
var G__8504 = null;
var G__8505 = (0);
var G__8506 = (0);
seq__6672_8486 = G__8503;
chunk__6673_8487 = G__8504;
count__6674_8488 = G__8505;
i__6675_8489 = G__8506;
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

var seq__6676 = cljs.core.seq(rescue);
var chunk__6677 = null;
var count__6678 = (0);
var i__6679 = (0);
while(true){
if((i__6679 < count__6678)){
var s = chunk__6677.cljs$core$IIndexed$_nth$arity$2(null,i__6679);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8507 = seq__6676;
var G__8508 = chunk__6677;
var G__8509 = count__6678;
var G__8510 = (i__6679 + (1));
seq__6676 = G__8507;
chunk__6677 = G__8508;
count__6678 = G__8509;
i__6679 = G__8510;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__6676);
if(temp__5823__auto____$1){
var seq__6676__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__6676__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6676__$1);
var G__8511 = cljs.core.chunk_rest(seq__6676__$1);
var G__8512 = c__5673__auto__;
var G__8513 = cljs.core.count(c__5673__auto__);
var G__8514 = (0);
seq__6676 = G__8511;
chunk__6677 = G__8512;
count__6678 = G__8513;
i__6679 = G__8514;
continue;
} else {
var s = cljs.core.first(seq__6676__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(rescue_env,s) : nex.typechecker.check_statement.call(null,rescue_env,s));


var G__8515 = cljs.core.next(seq__6676__$1);
var G__8516 = null;
var G__8517 = (0);
var G__8518 = (0);
seq__6676 = G__8515;
chunk__6677 = G__8516;
count__6678 = G__8517;
i__6679 = G__8518;
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
var seq__6680 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6681 = null;
var count__6682 = (0);
var i__6683 = (0);
while(true){
if((i__6683 < count__6682)){
var s = chunk__6681.cljs$core$IIndexed$_nth$arity$2(null,i__6683);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8519 = seq__6680;
var G__8520 = chunk__6681;
var G__8521 = count__6682;
var G__8522 = (i__6683 + (1));
seq__6680 = G__8519;
chunk__6681 = G__8520;
count__6682 = G__8521;
i__6683 = G__8522;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6680);
if(temp__5823__auto__){
var seq__6680__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6680__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6680__$1);
var G__8523 = cljs.core.chunk_rest(seq__6680__$1);
var G__8524 = c__5673__auto__;
var G__8525 = cljs.core.count(c__5673__auto__);
var G__8526 = (0);
seq__6680 = G__8523;
chunk__6681 = G__8524;
count__6682 = G__8525;
i__6683 = G__8526;
continue;
} else {
var s = cljs.core.first(seq__6680__$1);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(env,s) : nex.typechecker.check_statement.call(null,env,s));


var G__8527 = cljs.core.next(seq__6680__$1);
var G__8528 = null;
var G__8529 = (0);
var G__8530 = (0);
seq__6680 = G__8527;
chunk__6681 = G__8528;
count__6682 = G__8529;
i__6683 = G__8530;
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

var seq__6684_8531 = cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(stmt));
var chunk__6685_8532 = null;
var count__6686_8533 = (0);
var i__6687_8534 = (0);
while(true){
if((i__6687_8534 < count__6686_8533)){
var clause_8535 = chunk__6685_8532.cljs$core$IIndexed$_nth$arity$2(null,i__6687_8534);
var G__6692_8536 = env;
var G__6693_8537 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8535);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6692_8536,G__6693_8537) : nex.typechecker.check_statement.call(null,G__6692_8536,G__6693_8537));


var G__8538 = seq__6684_8531;
var G__8539 = chunk__6685_8532;
var G__8540 = count__6686_8533;
var G__8541 = (i__6687_8534 + (1));
seq__6684_8531 = G__8538;
chunk__6685_8532 = G__8539;
count__6686_8533 = G__8540;
i__6687_8534 = G__8541;
continue;
} else {
var temp__5823__auto___8542 = cljs.core.seq(seq__6684_8531);
if(temp__5823__auto___8542){
var seq__6684_8543__$1 = temp__5823__auto___8542;
if(cljs.core.chunked_seq_QMARK_(seq__6684_8543__$1)){
var c__5673__auto___8544 = cljs.core.chunk_first(seq__6684_8543__$1);
var G__8545 = cljs.core.chunk_rest(seq__6684_8543__$1);
var G__8546 = c__5673__auto___8544;
var G__8547 = cljs.core.count(c__5673__auto___8544);
var G__8548 = (0);
seq__6684_8531 = G__8545;
chunk__6685_8532 = G__8546;
count__6686_8533 = G__8547;
i__6687_8534 = G__8548;
continue;
} else {
var clause_8549 = cljs.core.first(seq__6684_8543__$1);
var G__6694_8550 = env;
var G__6695_8551 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(clause_8549);
(nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2 ? nex.typechecker.check_statement.cljs$core$IFn$_invoke$arity$2(G__6694_8550,G__6695_8551) : nex.typechecker.check_statement.call(null,G__6694_8550,G__6695_8551));


var G__8552 = cljs.core.next(seq__6684_8543__$1);
var G__8553 = null;
var G__8554 = (0);
var G__8555 = (0);
seq__6684_8531 = G__8552;
chunk__6685_8532 = G__8553;
count__6686_8533 = G__8554;
i__6687_8534 = G__8555;
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
var G__6696 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
var G__6696__$1 = (((G__6696 instanceof cljs.core.Keyword))?G__6696.fqn:null);
switch (G__6696__$1) {
case "assign":
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"result");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(node),"Result");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var G__6697 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6697) : nex.typechecker.references_result_QMARK_.call(null,G__6697));
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
var G__6698 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node);
return (nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1 ? nex.typechecker.references_result_QMARK_.cljs$core$IFn$_invoke$arity$1(G__6698) : nex.typechecker.references_result_QMARK_.call(null,G__6698));
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
nex.typechecker.check_method = (function nex$typechecker$check_method(env,class_name,p__6701){
var map__6703 = p__6701;
var map__6703__$1 = cljs.core.__destructure_map(map__6703);
var method = map__6703__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"params","params",710516235));
var return_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"return-type","return-type",1172480871));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6703__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var seq__6705_8571 = cljs.core.seq(params);
var chunk__6706_8572 = null;
var count__6707_8573 = (0);
var i__6708_8574 = (0);
while(true){
if((i__6708_8574 < count__6707_8573)){
var param_8575 = chunk__6706_8572.cljs$core$IIndexed$_nth$arity$2(null,i__6708_8574);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8575))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8575));
} else {
}


var G__8576 = seq__6705_8571;
var G__8577 = chunk__6706_8572;
var G__8578 = count__6707_8573;
var G__8579 = (i__6708_8574 + (1));
seq__6705_8571 = G__8576;
chunk__6706_8572 = G__8577;
count__6707_8573 = G__8578;
i__6708_8574 = G__8579;
continue;
} else {
var temp__5823__auto___8580 = cljs.core.seq(seq__6705_8571);
if(temp__5823__auto___8580){
var seq__6705_8581__$1 = temp__5823__auto___8580;
if(cljs.core.chunked_seq_QMARK_(seq__6705_8581__$1)){
var c__5673__auto___8582 = cljs.core.chunk_first(seq__6705_8581__$1);
var G__8583 = cljs.core.chunk_rest(seq__6705_8581__$1);
var G__8584 = c__5673__auto___8582;
var G__8585 = cljs.core.count(c__5673__auto___8582);
var G__8586 = (0);
seq__6705_8571 = G__8583;
chunk__6706_8572 = G__8584;
count__6707_8573 = G__8585;
i__6708_8574 = G__8586;
continue;
} else {
var param_8587 = cljs.core.first(seq__6705_8581__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8587))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8587));
} else {
}


var G__8588 = cljs.core.next(seq__6705_8581__$1);
var G__8589 = null;
var G__8590 = (0);
var G__8591 = (0);
seq__6705_8571 = G__8588;
chunk__6706_8572 = G__8589;
count__6707_8573 = G__8590;
i__6708_8574 = G__8591;
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
return cljs.core.some((function (p1__6700_SHARP_){
return nex.typechecker.references_result_QMARK_(new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(p1__6700_SHARP_));
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

var seq__6713_8592 = cljs.core.seq(params);
var chunk__6714_8593 = null;
var count__6715_8594 = (0);
var i__6716_8595 = (0);
while(true){
if((i__6716_8595 < count__6715_8594)){
var param_8596 = chunk__6714_8593.cljs$core$IIndexed$_nth$arity$2(null,i__6716_8595);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8596),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8596);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8597 = seq__6713_8592;
var G__8598 = chunk__6714_8593;
var G__8599 = count__6715_8594;
var G__8600 = (i__6716_8595 + (1));
seq__6713_8592 = G__8597;
chunk__6714_8593 = G__8598;
count__6715_8594 = G__8599;
i__6716_8595 = G__8600;
continue;
} else {
var temp__5823__auto___8601 = cljs.core.seq(seq__6713_8592);
if(temp__5823__auto___8601){
var seq__6713_8602__$1 = temp__5823__auto___8601;
if(cljs.core.chunked_seq_QMARK_(seq__6713_8602__$1)){
var c__5673__auto___8603 = cljs.core.chunk_first(seq__6713_8602__$1);
var G__8604 = cljs.core.chunk_rest(seq__6713_8602__$1);
var G__8605 = c__5673__auto___8603;
var G__8606 = cljs.core.count(c__5673__auto___8603);
var G__8607 = (0);
seq__6713_8592 = G__8604;
chunk__6714_8593 = G__8605;
count__6715_8594 = G__8606;
i__6716_8595 = G__8607;
continue;
} else {
var param_8608 = cljs.core.first(seq__6713_8602__$1);
nex.typechecker.env_add_var(method_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8608),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8608);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8609 = cljs.core.next(seq__6713_8602__$1);
var G__8610 = null;
var G__8611 = (0);
var G__8612 = (0);
seq__6713_8592 = G__8609;
chunk__6714_8593 = G__8610;
count__6715_8594 = G__8611;
i__6716_8595 = G__8612;
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

var seq__6721_8613 = cljs.core.seq(require__$1);
var chunk__6722_8614 = null;
var count__6723_8615 = (0);
var i__6724_8616 = (0);
while(true){
if((i__6724_8616 < count__6723_8615)){
var assertion_8617 = chunk__6722_8614.cljs$core$IIndexed$_nth$arity$2(null,i__6724_8616);
var cond_type_8618 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8617));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8618,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8618)))], null));
}


var G__8619 = seq__6721_8613;
var G__8620 = chunk__6722_8614;
var G__8621 = count__6723_8615;
var G__8622 = (i__6724_8616 + (1));
seq__6721_8613 = G__8619;
chunk__6722_8614 = G__8620;
count__6723_8615 = G__8621;
i__6724_8616 = G__8622;
continue;
} else {
var temp__5823__auto___8623 = cljs.core.seq(seq__6721_8613);
if(temp__5823__auto___8623){
var seq__6721_8624__$1 = temp__5823__auto___8623;
if(cljs.core.chunked_seq_QMARK_(seq__6721_8624__$1)){
var c__5673__auto___8625 = cljs.core.chunk_first(seq__6721_8624__$1);
var G__8626 = cljs.core.chunk_rest(seq__6721_8624__$1);
var G__8627 = c__5673__auto___8625;
var G__8628 = cljs.core.count(c__5673__auto___8625);
var G__8629 = (0);
seq__6721_8613 = G__8626;
chunk__6722_8614 = G__8627;
count__6723_8615 = G__8628;
i__6724_8616 = G__8629;
continue;
} else {
var assertion_8630 = cljs.core.first(seq__6721_8624__$1);
var cond_type_8631 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8630));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8631,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8631)))], null));
}


var G__8633 = cljs.core.next(seq__6721_8624__$1);
var G__8634 = null;
var G__8635 = (0);
var G__8636 = (0);
seq__6721_8613 = G__8633;
chunk__6722_8614 = G__8634;
count__6723_8615 = G__8635;
i__6724_8616 = G__8636;
continue;
}
} else {
}
}
break;
}

var seq__6733_8637 = cljs.core.seq(body);
var chunk__6734_8638 = null;
var count__6735_8639 = (0);
var i__6736_8640 = (0);
while(true){
if((i__6736_8640 < count__6735_8639)){
var stmt_8641 = chunk__6734_8638.cljs$core$IIndexed$_nth$arity$2(null,i__6736_8640);
nex.typechecker.check_statement(method_env,stmt_8641);


var G__8642 = seq__6733_8637;
var G__8643 = chunk__6734_8638;
var G__8644 = count__6735_8639;
var G__8645 = (i__6736_8640 + (1));
seq__6733_8637 = G__8642;
chunk__6734_8638 = G__8643;
count__6735_8639 = G__8644;
i__6736_8640 = G__8645;
continue;
} else {
var temp__5823__auto___8646 = cljs.core.seq(seq__6733_8637);
if(temp__5823__auto___8646){
var seq__6733_8647__$1 = temp__5823__auto___8646;
if(cljs.core.chunked_seq_QMARK_(seq__6733_8647__$1)){
var c__5673__auto___8648 = cljs.core.chunk_first(seq__6733_8647__$1);
var G__8649 = cljs.core.chunk_rest(seq__6733_8647__$1);
var G__8650 = c__5673__auto___8648;
var G__8651 = cljs.core.count(c__5673__auto___8648);
var G__8652 = (0);
seq__6733_8637 = G__8649;
chunk__6734_8638 = G__8650;
count__6735_8639 = G__8651;
i__6736_8640 = G__8652;
continue;
} else {
var stmt_8653 = cljs.core.first(seq__6733_8647__$1);
nex.typechecker.check_statement(method_env,stmt_8653);


var G__8654 = cljs.core.next(seq__6733_8647__$1);
var G__8655 = null;
var G__8656 = (0);
var G__8657 = (0);
seq__6733_8637 = G__8654;
chunk__6734_8638 = G__8655;
count__6735_8639 = G__8656;
i__6736_8640 = G__8657;
continue;
}
} else {
}
}
break;
}

var seq__6741_8658 = cljs.core.seq(ensure);
var chunk__6742_8659 = null;
var count__6743_8660 = (0);
var i__6744_8661 = (0);
while(true){
if((i__6744_8661 < count__6743_8660)){
var assertion_8662 = chunk__6742_8659.cljs$core$IIndexed$_nth$arity$2(null,i__6744_8661);
var cond_type_8663 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8662));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8663,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8663)))], null));
}


var G__8672 = seq__6741_8658;
var G__8673 = chunk__6742_8659;
var G__8674 = count__6743_8660;
var G__8675 = (i__6744_8661 + (1));
seq__6741_8658 = G__8672;
chunk__6742_8659 = G__8673;
count__6743_8660 = G__8674;
i__6744_8661 = G__8675;
continue;
} else {
var temp__5823__auto___8681 = cljs.core.seq(seq__6741_8658);
if(temp__5823__auto___8681){
var seq__6741_8682__$1 = temp__5823__auto___8681;
if(cljs.core.chunked_seq_QMARK_(seq__6741_8682__$1)){
var c__5673__auto___8683 = cljs.core.chunk_first(seq__6741_8682__$1);
var G__8684 = cljs.core.chunk_rest(seq__6741_8682__$1);
var G__8685 = c__5673__auto___8683;
var G__8686 = cljs.core.count(c__5673__auto___8683);
var G__8687 = (0);
seq__6741_8658 = G__8684;
chunk__6742_8659 = G__8685;
count__6743_8660 = G__8686;
i__6744_8661 = G__8687;
continue;
} else {
var assertion_8688 = cljs.core.first(seq__6741_8682__$1);
var cond_type_8689 = nex.typechecker.check_expression(method_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8688));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8689,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in method "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8689)))], null));
}


var G__8690 = cljs.core.next(seq__6741_8682__$1);
var G__8691 = null;
var G__8692 = (0);
var G__8693 = (0);
seq__6741_8658 = G__8690;
chunk__6742_8659 = G__8691;
count__6743_8660 = G__8692;
i__6744_8661 = G__8693;
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

var seq__6749 = cljs.core.seq(rescue);
var chunk__6750 = null;
var count__6751 = (0);
var i__6752 = (0);
while(true){
if((i__6752 < count__6751)){
var stmt = chunk__6750.cljs$core$IIndexed$_nth$arity$2(null,i__6752);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8694 = seq__6749;
var G__8695 = chunk__6750;
var G__8696 = count__6751;
var G__8697 = (i__6752 + (1));
seq__6749 = G__8694;
chunk__6750 = G__8695;
count__6751 = G__8696;
i__6752 = G__8697;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6749);
if(temp__5823__auto__){
var seq__6749__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6749__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6749__$1);
var G__8698 = cljs.core.chunk_rest(seq__6749__$1);
var G__8699 = c__5673__auto__;
var G__8700 = cljs.core.count(c__5673__auto__);
var G__8701 = (0);
seq__6749 = G__8698;
chunk__6750 = G__8699;
count__6751 = G__8700;
i__6752 = G__8701;
continue;
} else {
var stmt = cljs.core.first(seq__6749__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8702 = cljs.core.next(seq__6749__$1);
var G__8703 = null;
var G__8704 = (0);
var G__8705 = (0);
seq__6749 = G__8702;
chunk__6750 = G__8703;
count__6751 = G__8704;
i__6752 = G__8705;
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
nex.typechecker.check_constructor = (function nex$typechecker$check_constructor(env,class_name,p__6757){
var map__6758 = p__6757;
var map__6758__$1 = cljs.core.__destructure_map(map__6758);
var constructor$ = map__6758__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"params","params",710516235));
var require__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ensure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"ensure","ensure",-439171367));
var rescue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6758__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var ctor_env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$1(env);
nex.typechecker.env_add_var(ctor_env,"__current_class__",class_name);

var seq__6759_8709 = cljs.core.seq(params);
var chunk__6760_8710 = null;
var count__6761_8711 = (0);
var i__6762_8712 = (0);
while(true){
if((i__6762_8712 < count__6761_8711)){
var param_8714 = chunk__6760_8710.cljs$core$IIndexed$_nth$arity$2(null,i__6762_8712);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8714))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8714));
} else {
}


var G__8718 = seq__6759_8709;
var G__8719 = chunk__6760_8710;
var G__8720 = count__6761_8711;
var G__8721 = (i__6762_8712 + (1));
seq__6759_8709 = G__8718;
chunk__6760_8710 = G__8719;
count__6761_8711 = G__8720;
i__6762_8712 = G__8721;
continue;
} else {
var temp__5823__auto___8722 = cljs.core.seq(seq__6759_8709);
if(temp__5823__auto___8722){
var seq__6759_8723__$1 = temp__5823__auto___8722;
if(cljs.core.chunked_seq_QMARK_(seq__6759_8723__$1)){
var c__5673__auto___8726 = cljs.core.chunk_first(seq__6759_8723__$1);
var G__8728 = cljs.core.chunk_rest(seq__6759_8723__$1);
var G__8729 = c__5673__auto___8726;
var G__8730 = cljs.core.count(c__5673__auto___8726);
var G__8731 = (0);
seq__6759_8709 = G__8728;
chunk__6760_8710 = G__8729;
count__6761_8711 = G__8730;
i__6762_8712 = G__8731;
continue;
} else {
var param_8732 = cljs.core.first(seq__6759_8723__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8732))){
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8732));
} else {
}


var G__8735 = cljs.core.next(seq__6759_8723__$1);
var G__8736 = null;
var G__8737 = (0);
var G__8738 = (0);
seq__6759_8709 = G__8735;
chunk__6760_8710 = G__8736;
count__6761_8711 = G__8737;
i__6762_8712 = G__8738;
continue;
}
} else {
}
}
break;
}

var seq__6770_8740 = cljs.core.seq(params);
var chunk__6771_8741 = null;
var count__6772_8742 = (0);
var i__6773_8743 = (0);
while(true){
if((i__6773_8743 < count__6772_8742)){
var param_8744 = chunk__6771_8741.cljs$core$IIndexed$_nth$arity$2(null,i__6773_8743);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8744),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8744);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8751 = seq__6770_8740;
var G__8752 = chunk__6771_8741;
var G__8753 = count__6772_8742;
var G__8754 = (i__6773_8743 + (1));
seq__6770_8740 = G__8751;
chunk__6771_8741 = G__8752;
count__6772_8742 = G__8753;
i__6773_8743 = G__8754;
continue;
} else {
var temp__5823__auto___8755 = cljs.core.seq(seq__6770_8740);
if(temp__5823__auto___8755){
var seq__6770_8760__$1 = temp__5823__auto___8755;
if(cljs.core.chunked_seq_QMARK_(seq__6770_8760__$1)){
var c__5673__auto___8762 = cljs.core.chunk_first(seq__6770_8760__$1);
var G__8765 = cljs.core.chunk_rest(seq__6770_8760__$1);
var G__8766 = c__5673__auto___8762;
var G__8767 = cljs.core.count(c__5673__auto___8762);
var G__8768 = (0);
seq__6770_8740 = G__8765;
chunk__6771_8741 = G__8766;
count__6772_8742 = G__8767;
i__6773_8743 = G__8768;
continue;
} else {
var param_8774 = cljs.core.first(seq__6770_8760__$1);
nex.typechecker.env_add_var(ctor_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(param_8774),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param_8774);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Any";
}
})());


var G__8779 = cljs.core.next(seq__6770_8760__$1);
var G__8780 = null;
var G__8781 = (0);
var G__8782 = (0);
seq__6770_8740 = G__8779;
chunk__6771_8741 = G__8780;
count__6772_8742 = G__8781;
i__6773_8743 = G__8782;
continue;
}
} else {
}
}
break;
}

var seq__6787_8785 = cljs.core.seq(require__$1);
var chunk__6791_8787 = null;
var count__6792_8788 = (0);
var i__6793_8789 = (0);
while(true){
if((i__6793_8789 < count__6792_8788)){
var assertion_8790 = chunk__6791_8787.cljs$core$IIndexed$_nth$arity$2(null,i__6793_8789);
if(cljs.core.truth_(assertion_8790)){
var cond_type_8791 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8790));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8791,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8791)))], null));
}
} else {
}


var G__8801 = seq__6787_8785;
var G__8802 = chunk__6791_8787;
var G__8803 = count__6792_8788;
var G__8804 = (i__6793_8789 + (1));
seq__6787_8785 = G__8801;
chunk__6791_8787 = G__8802;
count__6792_8788 = G__8803;
i__6793_8789 = G__8804;
continue;
} else {
var temp__5823__auto___8806 = cljs.core.seq(seq__6787_8785);
if(temp__5823__auto___8806){
var seq__6787_8808__$1 = temp__5823__auto___8806;
if(cljs.core.chunked_seq_QMARK_(seq__6787_8808__$1)){
var c__5673__auto___8809 = cljs.core.chunk_first(seq__6787_8808__$1);
var G__8810 = cljs.core.chunk_rest(seq__6787_8808__$1);
var G__8811 = c__5673__auto___8809;
var G__8812 = cljs.core.count(c__5673__auto___8809);
var G__8813 = (0);
seq__6787_8785 = G__8810;
chunk__6791_8787 = G__8811;
count__6792_8788 = G__8812;
i__6793_8789 = G__8813;
continue;
} else {
var assertion_8819 = cljs.core.first(seq__6787_8808__$1);
if(cljs.core.truth_(assertion_8819)){
var cond_type_8821 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8819));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8821,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Precondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Precondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8821)))], null));
}
} else {
}


var G__8828 = cljs.core.next(seq__6787_8808__$1);
var G__8829 = null;
var G__8830 = (0);
var G__8831 = (0);
seq__6787_8785 = G__8828;
chunk__6791_8787 = G__8829;
count__6792_8788 = G__8830;
i__6793_8789 = G__8831;
continue;
}
} else {
}
}
break;
}

var seq__6803_8833 = cljs.core.seq(body);
var chunk__6804_8834 = null;
var count__6805_8835 = (0);
var i__6806_8836 = (0);
while(true){
if((i__6806_8836 < count__6805_8835)){
var stmt_8839 = chunk__6804_8834.cljs$core$IIndexed$_nth$arity$2(null,i__6806_8836);
nex.typechecker.check_statement(ctor_env,stmt_8839);


var G__8840 = seq__6803_8833;
var G__8841 = chunk__6804_8834;
var G__8842 = count__6805_8835;
var G__8843 = (i__6806_8836 + (1));
seq__6803_8833 = G__8840;
chunk__6804_8834 = G__8841;
count__6805_8835 = G__8842;
i__6806_8836 = G__8843;
continue;
} else {
var temp__5823__auto___8845 = cljs.core.seq(seq__6803_8833);
if(temp__5823__auto___8845){
var seq__6803_8846__$1 = temp__5823__auto___8845;
if(cljs.core.chunked_seq_QMARK_(seq__6803_8846__$1)){
var c__5673__auto___8847 = cljs.core.chunk_first(seq__6803_8846__$1);
var G__8848 = cljs.core.chunk_rest(seq__6803_8846__$1);
var G__8849 = c__5673__auto___8847;
var G__8850 = cljs.core.count(c__5673__auto___8847);
var G__8851 = (0);
seq__6803_8833 = G__8848;
chunk__6804_8834 = G__8849;
count__6805_8835 = G__8850;
i__6806_8836 = G__8851;
continue;
} else {
var stmt_8852 = cljs.core.first(seq__6803_8846__$1);
nex.typechecker.check_statement(ctor_env,stmt_8852);


var G__8853 = cljs.core.next(seq__6803_8846__$1);
var G__8854 = null;
var G__8855 = (0);
var G__8856 = (0);
seq__6803_8833 = G__8853;
chunk__6804_8834 = G__8854;
count__6805_8835 = G__8855;
i__6806_8836 = G__8856;
continue;
}
} else {
}
}
break;
}

var seq__6814_8857 = cljs.core.seq(ensure);
var chunk__6815_8858 = null;
var count__6816_8859 = (0);
var i__6817_8860 = (0);
while(true){
if((i__6817_8860 < count__6816_8859)){
var assertion_8861 = chunk__6815_8858.cljs$core$IIndexed$_nth$arity$2(null,i__6817_8860);
if(cljs.core.truth_(assertion_8861)){
var cond_type_8862 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8861));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8862,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8862)))], null));
}
} else {
}


var G__8865 = seq__6814_8857;
var G__8866 = chunk__6815_8858;
var G__8867 = count__6816_8859;
var G__8868 = (i__6817_8860 + (1));
seq__6814_8857 = G__8865;
chunk__6815_8858 = G__8866;
count__6816_8859 = G__8867;
i__6817_8860 = G__8868;
continue;
} else {
var temp__5823__auto___8870 = cljs.core.seq(seq__6814_8857);
if(temp__5823__auto___8870){
var seq__6814_8871__$1 = temp__5823__auto___8870;
if(cljs.core.chunked_seq_QMARK_(seq__6814_8871__$1)){
var c__5673__auto___8872 = cljs.core.chunk_first(seq__6814_8871__$1);
var G__8873 = cljs.core.chunk_rest(seq__6814_8871__$1);
var G__8874 = c__5673__auto___8872;
var G__8875 = cljs.core.count(c__5673__auto___8872);
var G__8876 = (0);
seq__6814_8857 = G__8873;
chunk__6815_8858 = G__8874;
count__6816_8859 = G__8875;
i__6817_8860 = G__8876;
continue;
} else {
var assertion_8877 = cljs.core.first(seq__6814_8871__$1);
if(cljs.core.truth_(assertion_8877)){
var cond_type_8878 = nex.typechecker.check_expression(ctor_env,new cljs.core.Keyword(null,"condition","condition",1668437652).cljs$core$IFn$_invoke$arity$1(assertion_8877));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cond_type_8878,"Boolean")){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Postcondition must be Boolean in constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Postcondition must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cond_type_8878)))], null));
}
} else {
}


var G__8879 = cljs.core.next(seq__6814_8871__$1);
var G__8880 = null;
var G__8881 = (0);
var G__8882 = (0);
seq__6814_8857 = G__8879;
chunk__6815_8858 = G__8880;
count__6816_8859 = G__8881;
i__6817_8860 = G__8882;
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

var seq__6833 = cljs.core.seq(rescue);
var chunk__6834 = null;
var count__6835 = (0);
var i__6836 = (0);
while(true){
if((i__6836 < count__6835)){
var stmt = chunk__6834.cljs$core$IIndexed$_nth$arity$2(null,i__6836);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8884 = seq__6833;
var G__8885 = chunk__6834;
var G__8886 = count__6835;
var G__8887 = (i__6836 + (1));
seq__6833 = G__8884;
chunk__6834 = G__8885;
count__6835 = G__8886;
i__6836 = G__8887;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6833);
if(temp__5823__auto__){
var seq__6833__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6833__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6833__$1);
var G__8892 = cljs.core.chunk_rest(seq__6833__$1);
var G__8893 = c__5673__auto__;
var G__8894 = cljs.core.count(c__5673__auto__);
var G__8895 = (0);
seq__6833 = G__8892;
chunk__6834 = G__8893;
count__6835 = G__8894;
i__6836 = G__8895;
continue;
} else {
var stmt = cljs.core.first(seq__6833__$1);
nex.typechecker.check_statement(rescue_env,stmt);


var G__8896 = cljs.core.next(seq__6833__$1);
var G__8897 = null;
var G__8898 = (0);
var G__8899 = (0);
seq__6833 = G__8896;
chunk__6834 = G__8897;
count__6835 = G__8898;
i__6836 = G__8899;
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
nex.typechecker.collect_class_info = (function nex$typechecker$collect_class_info(env,p__6846){
var map__6847 = p__6846;
var map__6847__$1 = cljs.core.__destructure_map(map__6847);
var class_def = map__6847__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6847__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
nex.typechecker.env_add_class(env,name,class_def);

var updated_body_8906 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
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
var updated_class_def_8907 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(class_def,new cljs.core.Keyword(null,"body","body",-2049205669),updated_body_8906);
nex.typechecker.env_add_class(env,name,updated_class_def_8907);

var seq__6851 = cljs.core.seq(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nex.typechecker.env_lookup_class(env,name)));
var chunk__6852 = null;
var count__6853 = (0);
var i__6854 = (0);
while(true){
if((i__6854 < count__6853)){
var section = chunk__6852.cljs$core$IIndexed$_nth$arity$2(null,i__6854);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6910_8947 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6911_8948 = null;
var count__6912_8949 = (0);
var i__6913_8950 = (0);
while(true){
if((i__6913_8950 < count__6912_8949)){
var member_8953 = chunk__6911_8948.cljs$core$IIndexed$_nth$arity$2(null,i__6913_8950);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8953),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8953),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8953),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8953)], null));
} else {
}


var G__8958 = seq__6910_8947;
var G__8959 = chunk__6911_8948;
var G__8960 = count__6912_8949;
var G__8961 = (i__6913_8950 + (1));
seq__6910_8947 = G__8958;
chunk__6911_8948 = G__8959;
count__6912_8949 = G__8960;
i__6913_8950 = G__8961;
continue;
} else {
var temp__5823__auto___8963 = cljs.core.seq(seq__6910_8947);
if(temp__5823__auto___8963){
var seq__6910_8965__$1 = temp__5823__auto___8963;
if(cljs.core.chunked_seq_QMARK_(seq__6910_8965__$1)){
var c__5673__auto___8967 = cljs.core.chunk_first(seq__6910_8965__$1);
var G__8968 = cljs.core.chunk_rest(seq__6910_8965__$1);
var G__8969 = c__5673__auto___8967;
var G__8970 = cljs.core.count(c__5673__auto___8967);
var G__8971 = (0);
seq__6910_8947 = G__8968;
chunk__6911_8948 = G__8969;
count__6912_8949 = G__8970;
i__6913_8950 = G__8971;
continue;
} else {
var member_8973 = cljs.core.first(seq__6910_8965__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_8973),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_8973),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_8973),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_8973)], null));
} else {
}


var G__8979 = cljs.core.next(seq__6910_8965__$1);
var G__8980 = null;
var G__8981 = (0);
var G__8982 = (0);
seq__6910_8947 = G__8979;
chunk__6911_8948 = G__8980;
count__6912_8949 = G__8981;
i__6913_8950 = G__8982;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6916_8984 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6917_8985 = null;
var count__6918_8986 = (0);
var i__6919_8987 = (0);
while(true){
if((i__6919_8987 < count__6918_8986)){
var ctor_8990 = chunk__6917_8985.cljs$core$IIndexed$_nth$arity$2(null,i__6919_8987);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_8990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_8990),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__8995 = seq__6916_8984;
var G__8996 = chunk__6917_8985;
var G__8997 = count__6918_8986;
var G__8998 = (i__6919_8987 + (1));
seq__6916_8984 = G__8995;
chunk__6917_8985 = G__8996;
count__6918_8986 = G__8997;
i__6919_8987 = G__8998;
continue;
} else {
var temp__5823__auto___9001 = cljs.core.seq(seq__6916_8984);
if(temp__5823__auto___9001){
var seq__6916_9003__$1 = temp__5823__auto___9001;
if(cljs.core.chunked_seq_QMARK_(seq__6916_9003__$1)){
var c__5673__auto___9004 = cljs.core.chunk_first(seq__6916_9003__$1);
var G__9006 = cljs.core.chunk_rest(seq__6916_9003__$1);
var G__9007 = c__5673__auto___9004;
var G__9008 = cljs.core.count(c__5673__auto___9004);
var G__9009 = (0);
seq__6916_8984 = G__9006;
chunk__6917_8985 = G__9007;
count__6918_8986 = G__9008;
i__6919_8987 = G__9009;
continue;
} else {
var ctor_9011 = cljs.core.first(seq__6916_9003__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9011),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9015 = cljs.core.next(seq__6916_9003__$1);
var G__9016 = null;
var G__9017 = (0);
var G__9018 = (0);
seq__6916_8984 = G__9015;
chunk__6917_8985 = G__9016;
count__6918_8986 = G__9017;
i__6919_8987 = G__9018;
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


var G__9020 = seq__6851;
var G__9021 = chunk__6852;
var G__9022 = count__6853;
var G__9023 = (i__6854 + (1));
seq__6851 = G__9020;
chunk__6852 = G__9021;
count__6853 = G__9022;
i__6854 = G__9023;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6851);
if(temp__5823__auto__){
var seq__6851__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6851__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6851__$1);
var G__9027 = cljs.core.chunk_rest(seq__6851__$1);
var G__9028 = c__5673__auto__;
var G__9029 = cljs.core.count(c__5673__auto__);
var G__9030 = (0);
seq__6851 = G__9027;
chunk__6852 = G__9028;
count__6853 = G__9029;
i__6854 = G__9030;
continue;
} else {
var section = cljs.core.first(seq__6851__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__6922_9034 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6923_9035 = null;
var count__6924_9036 = (0);
var i__6925_9037 = (0);
while(true){
if((i__6925_9037 < count__6924_9036)){
var member_9040 = chunk__6923_9035.cljs$core$IIndexed$_nth$arity$2(null,i__6925_9037);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9040),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9040),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9040),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9040)], null));
} else {
}


var G__9046 = seq__6922_9034;
var G__9047 = chunk__6923_9035;
var G__9048 = count__6924_9036;
var G__9049 = (i__6925_9037 + (1));
seq__6922_9034 = G__9046;
chunk__6923_9035 = G__9047;
count__6924_9036 = G__9048;
i__6925_9037 = G__9049;
continue;
} else {
var temp__5823__auto___9052__$1 = cljs.core.seq(seq__6922_9034);
if(temp__5823__auto___9052__$1){
var seq__6922_9053__$1 = temp__5823__auto___9052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6922_9053__$1)){
var c__5673__auto___9055 = cljs.core.chunk_first(seq__6922_9053__$1);
var G__9057 = cljs.core.chunk_rest(seq__6922_9053__$1);
var G__9058 = c__5673__auto___9055;
var G__9059 = cljs.core.count(c__5673__auto___9055);
var G__9060 = (0);
seq__6922_9034 = G__9057;
chunk__6923_9035 = G__9058;
count__6924_9036 = G__9059;
i__6925_9037 = G__9060;
continue;
} else {
var member_9062 = cljs.core.first(seq__6922_9053__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9062),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member_9062),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(member_9062),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.Keyword(null,"return-type","return-type",1172480871).cljs$core$IFn$_invoke$arity$1(member_9062)], null));
} else {
}


var G__9066 = cljs.core.next(seq__6922_9053__$1);
var G__9067 = null;
var G__9068 = (0);
var G__9069 = (0);
seq__6922_9034 = G__9066;
chunk__6923_9035 = G__9067;
count__6924_9036 = G__9068;
i__6925_9037 = G__9069;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__6928_9073 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section));
var chunk__6929_9074 = null;
var count__6930_9075 = (0);
var i__6931_9076 = (0);
while(true){
if((i__6931_9076 < count__6930_9075)){
var ctor_9079 = chunk__6929_9074.cljs$core$IIndexed$_nth$arity$2(null,i__6931_9076);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9079),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9083 = seq__6928_9073;
var G__9084 = chunk__6929_9074;
var G__9085 = count__6930_9075;
var G__9086 = (i__6931_9076 + (1));
seq__6928_9073 = G__9083;
chunk__6929_9074 = G__9084;
count__6930_9075 = G__9085;
i__6931_9076 = G__9086;
continue;
} else {
var temp__5823__auto___9088__$1 = cljs.core.seq(seq__6928_9073);
if(temp__5823__auto___9088__$1){
var seq__6928_9089__$1 = temp__5823__auto___9088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6928_9089__$1)){
var c__5673__auto___9090 = cljs.core.chunk_first(seq__6928_9089__$1);
var G__9091 = cljs.core.chunk_rest(seq__6928_9089__$1);
var G__9092 = c__5673__auto___9090;
var G__9093 = cljs.core.count(c__5673__auto___9090);
var G__9094 = (0);
seq__6928_9073 = G__9091;
chunk__6929_9074 = G__9092;
count__6930_9075 = G__9093;
i__6931_9076 = G__9094;
continue;
} else {
var ctor_9095 = cljs.core.first(seq__6928_9089__$1);
nex.typechecker.env_add_method(env,name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ctor_9095),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctor_9095),new cljs.core.Keyword(null,"return-type","return-type",1172480871),name], null));


var G__9099 = cljs.core.next(seq__6928_9089__$1);
var G__9100 = null;
var G__9101 = (0);
var G__9102 = (0);
seq__6928_9073 = G__9099;
chunk__6929_9074 = G__9100;
count__6930_9075 = G__9101;
i__6931_9076 = G__9102;
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


var G__9103 = cljs.core.next(seq__6851__$1);
var G__9104 = null;
var G__9105 = (0);
var G__9106 = (0);
seq__6851 = G__9103;
chunk__6852 = G__9104;
count__6853 = G__9105;
i__6854 = G__9106;
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
var seq__6945 = cljs.core.seq(parents);
var chunk__6946 = null;
var count__6947 = (0);
var i__6948 = (0);
while(true){
if((i__6948 < count__6947)){
var map__6955 = chunk__6946.cljs$core$IIndexed$_nth$arity$2(null,i__6948);
var map__6955__$1 = cljs.core.__destructure_map(map__6955);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6955__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9117 = seq__6945;
var G__9118 = chunk__6946;
var G__9119 = count__6947;
var G__9120 = (i__6948 + (1));
seq__6945 = G__9117;
chunk__6946 = G__9118;
count__6947 = G__9119;
i__6948 = G__9120;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6945);
if(temp__5823__auto__){
var seq__6945__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6945__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6945__$1);
var G__9123 = cljs.core.chunk_rest(seq__6945__$1);
var G__9124 = c__5673__auto__;
var G__9125 = cljs.core.count(c__5673__auto__);
var G__9126 = (0);
seq__6945 = G__9123;
chunk__6946 = G__9124;
count__6947 = G__9125;
i__6948 = G__9126;
continue;
} else {
var map__6957 = cljs.core.first(seq__6945__$1);
var map__6957__$1 = cljs.core.__destructure_map(map__6957);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6957__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
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


var G__9140 = cljs.core.next(seq__6945__$1);
var G__9141 = null;
var G__9142 = (0);
var G__9143 = (0);
seq__6945 = G__9140;
chunk__6946 = G__9141;
count__6947 = G__9142;
i__6948 = G__9143;
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
nex.typechecker.check_class = (function nex$typechecker$check_class(env,p__6966){
var map__6967 = p__6966;
var map__6967__$1 = cljs.core.__destructure_map(map__6967);
var class_def = map__6967__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6967__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6967__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var invariant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6967__$1,new cljs.core.Keyword(null,"invariant","invariant",-1658446508));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6967__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891));
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

var seq__6970_9151 = cljs.core.seq(invariant__$1);
var chunk__6971_9152 = null;
var count__6972_9153 = (0);
var i__6973_9154 = (0);
while(true){
if((i__6973_9154 < count__6972_9153)){
var assertion_9157 = chunk__6971_9152.cljs$core$IIndexed$_nth$arity$2(null,i__6973_9154);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9157;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9157);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9158 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9157));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9158,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9158,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9158)))], null));
}
} else {
}


var G__9164 = seq__6970_9151;
var G__9165 = chunk__6971_9152;
var G__9166 = count__6972_9153;
var G__9167 = (i__6973_9154 + (1));
seq__6970_9151 = G__9164;
chunk__6971_9152 = G__9165;
count__6972_9153 = G__9166;
i__6973_9154 = G__9167;
continue;
} else {
var temp__5823__auto___9169 = cljs.core.seq(seq__6970_9151);
if(temp__5823__auto___9169){
var seq__6970_9171__$1 = temp__5823__auto___9169;
if(cljs.core.chunked_seq_QMARK_(seq__6970_9171__$1)){
var c__5673__auto___9173 = cljs.core.chunk_first(seq__6970_9171__$1);
var G__9175 = cljs.core.chunk_rest(seq__6970_9171__$1);
var G__9176 = c__5673__auto___9173;
var G__9177 = cljs.core.count(c__5673__auto___9173);
var G__9178 = (0);
seq__6970_9151 = G__9175;
chunk__6971_9152 = G__9176;
count__6972_9153 = G__9177;
i__6973_9154 = G__9178;
continue;
} else {
var assertion_9180 = cljs.core.first(seq__6970_9171__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = assertion_9180;
if(cljs.core.truth_(and__5140__auto__)){
return new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9180);
} else {
return and__5140__auto__;
}
})())){
var inv_type_9182 = nex.typechecker.check_expression(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(assertion_9180));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9182,"Boolean")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inv_type_9182,"Void")))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Invariant must be Boolean in class "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Invariant must be Boolean, got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inv_type_9182)))], null));
}
} else {
}


var G__9189 = cljs.core.next(seq__6970_9171__$1);
var G__9190 = null;
var G__9191 = (0);
var G__9192 = (0);
seq__6970_9151 = G__9189;
chunk__6971_9152 = G__9190;
count__6972_9153 = G__9191;
i__6973_9154 = G__9192;
continue;
}
} else {
}
}
break;
}

var seq__6980_9194 = cljs.core.seq(body__$1);
var chunk__6984_9195 = null;
var count__6986_9196 = (0);
var i__6987_9197 = (0);
while(true){
if((i__6987_9197 < count__6986_9196)){
var section_9201 = chunk__6984_9195.cljs$core$IIndexed$_nth$arity$2(null,i__6987_9197);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9201),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7024_9205 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9201));
var chunk__7025_9206 = null;
var count__7026_9207 = (0);
var i__7027_9208 = (0);
while(true){
if((i__7027_9208 < count__7026_9207)){
var member_9212 = chunk__7025_9206.cljs$core$IIndexed$_nth$arity$2(null,i__7027_9208);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9212),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9212);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9212),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9212))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9212));
}
} else {
}
}


var G__9222 = seq__7024_9205;
var G__9223 = chunk__7025_9206;
var G__9224 = count__7026_9207;
var G__9225 = (i__7027_9208 + (1));
seq__7024_9205 = G__9222;
chunk__7025_9206 = G__9223;
count__7026_9207 = G__9224;
i__7027_9208 = G__9225;
continue;
} else {
var temp__5823__auto___9228 = cljs.core.seq(seq__7024_9205);
if(temp__5823__auto___9228){
var seq__7024_9230__$1 = temp__5823__auto___9228;
if(cljs.core.chunked_seq_QMARK_(seq__7024_9230__$1)){
var c__5673__auto___9232 = cljs.core.chunk_first(seq__7024_9230__$1);
var G__9234 = cljs.core.chunk_rest(seq__7024_9230__$1);
var G__9235 = c__5673__auto___9232;
var G__9236 = cljs.core.count(c__5673__auto___9232);
var G__9237 = (0);
seq__7024_9205 = G__9234;
chunk__7025_9206 = G__9235;
count__7026_9207 = G__9236;
i__7027_9208 = G__9237;
continue;
} else {
var member_9240 = cljs.core.first(seq__7024_9230__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9240),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9240);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9240),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9240))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9240));
}
} else {
}
}


var G__9245 = cljs.core.next(seq__7024_9230__$1);
var G__9246 = null;
var G__9247 = (0);
var G__9248 = (0);
seq__7024_9205 = G__9245;
chunk__7025_9206 = G__9246;
count__7026_9207 = G__9247;
i__7027_9208 = G__9248;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9201),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7034_9252 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9201));
var chunk__7035_9253 = null;
var count__7036_9254 = (0);
var i__7037_9255 = (0);
while(true){
if((i__7037_9255 < count__7036_9254)){
var ctor_9259 = chunk__7035_9253.cljs$core$IIndexed$_nth$arity$2(null,i__7037_9255);
nex.typechecker.check_constructor(env,name,ctor_9259);


var G__9261 = seq__7034_9252;
var G__9262 = chunk__7035_9253;
var G__9263 = count__7036_9254;
var G__9264 = (i__7037_9255 + (1));
seq__7034_9252 = G__9261;
chunk__7035_9253 = G__9262;
count__7036_9254 = G__9263;
i__7037_9255 = G__9264;
continue;
} else {
var temp__5823__auto___9266 = cljs.core.seq(seq__7034_9252);
if(temp__5823__auto___9266){
var seq__7034_9269__$1 = temp__5823__auto___9266;
if(cljs.core.chunked_seq_QMARK_(seq__7034_9269__$1)){
var c__5673__auto___9271 = cljs.core.chunk_first(seq__7034_9269__$1);
var G__9273 = cljs.core.chunk_rest(seq__7034_9269__$1);
var G__9274 = c__5673__auto___9271;
var G__9275 = cljs.core.count(c__5673__auto___9271);
var G__9276 = (0);
seq__7034_9252 = G__9273;
chunk__7035_9253 = G__9274;
count__7036_9254 = G__9275;
i__7037_9255 = G__9276;
continue;
} else {
var ctor_9278 = cljs.core.first(seq__7034_9269__$1);
nex.typechecker.check_constructor(env,name,ctor_9278);


var G__9280 = cljs.core.next(seq__7034_9269__$1);
var G__9281 = null;
var G__9282 = (0);
var G__9283 = (0);
seq__7034_9252 = G__9280;
chunk__7035_9253 = G__9281;
count__7036_9254 = G__9282;
i__7037_9255 = G__9283;
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


var G__9289 = seq__6980_9194;
var G__9290 = chunk__6984_9195;
var G__9291 = count__6986_9196;
var G__9292 = (i__6987_9197 + (1));
seq__6980_9194 = G__9289;
chunk__6984_9195 = G__9290;
count__6986_9196 = G__9291;
i__6987_9197 = G__9292;
continue;
} else {
var temp__5823__auto___9294 = cljs.core.seq(seq__6980_9194);
if(temp__5823__auto___9294){
var seq__6980_9296__$1 = temp__5823__auto___9294;
if(cljs.core.chunked_seq_QMARK_(seq__6980_9296__$1)){
var c__5673__auto___9297 = cljs.core.chunk_first(seq__6980_9296__$1);
var G__9299 = cljs.core.chunk_rest(seq__6980_9296__$1);
var G__9300 = c__5673__auto___9297;
var G__9301 = cljs.core.count(c__5673__auto___9297);
var G__9302 = (0);
seq__6980_9194 = G__9299;
chunk__6984_9195 = G__9300;
count__6986_9196 = G__9301;
i__6987_9197 = G__9302;
continue;
} else {
var section_9304 = cljs.core.first(seq__6980_9296__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9304),new cljs.core.Keyword(null,"feature-section","feature-section",-630050418))){
var seq__7048_9306 = cljs.core.seq(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(section_9304));
var chunk__7049_9307 = null;
var count__7050_9308 = (0);
var i__7051_9309 = (0);
while(true){
if((i__7051_9309 < count__7050_9308)){
var member_9311 = chunk__7049_9307.cljs$core$IIndexed$_nth$arity$2(null,i__7051_9309);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9311),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9311);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9311),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9311))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9311));
}
} else {
}
}


var G__9316 = seq__7048_9306;
var G__9317 = chunk__7049_9307;
var G__9318 = count__7050_9308;
var G__9319 = (i__7051_9309 + (1));
seq__7048_9306 = G__9316;
chunk__7049_9307 = G__9317;
count__7050_9308 = G__9318;
i__7051_9309 = G__9319;
continue;
} else {
var temp__5823__auto___9321__$1 = cljs.core.seq(seq__7048_9306);
if(temp__5823__auto___9321__$1){
var seq__7048_9323__$1 = temp__5823__auto___9321__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7048_9323__$1)){
var c__5673__auto___9325 = cljs.core.chunk_first(seq__7048_9323__$1);
var G__9326 = cljs.core.chunk_rest(seq__7048_9323__$1);
var G__9327 = c__5673__auto___9325;
var G__9328 = cljs.core.count(c__5673__auto___9325);
var G__9329 = (0);
seq__7048_9306 = G__9326;
chunk__7049_9307 = G__9327;
count__7050_9308 = G__9328;
i__7051_9309 = G__9329;
continue;
} else {
var member_9331 = cljs.core.first(seq__7048_9323__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9331),new cljs.core.Keyword(null,"method","method",55703592))){
nex.typechecker.check_method(env,name,member_9331);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(member_9331),new cljs.core.Keyword(null,"field","field",-1302436500))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(member_9331))){
} else {
nex.typechecker.validate_type_annotation(env,new cljs.core.Keyword(null,"field-type","field-type",2075623493).cljs$core$IFn$_invoke$arity$1(member_9331));
}
} else {
}
}


var G__9336 = cljs.core.next(seq__7048_9323__$1);
var G__9337 = null;
var G__9338 = (0);
var G__9339 = (0);
seq__7048_9306 = G__9336;
chunk__7049_9307 = G__9337;
count__7050_9308 = G__9338;
i__7051_9309 = G__9339;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(section_9304),new cljs.core.Keyword(null,"constructors","constructors",1994499075))){
var seq__7052_9342 = cljs.core.seq(new cljs.core.Keyword(null,"constructors","constructors",1994499075).cljs$core$IFn$_invoke$arity$1(section_9304));
var chunk__7053_9343 = null;
var count__7054_9344 = (0);
var i__7055_9345 = (0);
while(true){
if((i__7055_9345 < count__7054_9344)){
var ctor_9347 = chunk__7053_9343.cljs$core$IIndexed$_nth$arity$2(null,i__7055_9345);
nex.typechecker.check_constructor(env,name,ctor_9347);


var G__9350 = seq__7052_9342;
var G__9351 = chunk__7053_9343;
var G__9352 = count__7054_9344;
var G__9353 = (i__7055_9345 + (1));
seq__7052_9342 = G__9350;
chunk__7053_9343 = G__9351;
count__7054_9344 = G__9352;
i__7055_9345 = G__9353;
continue;
} else {
var temp__5823__auto___9355__$1 = cljs.core.seq(seq__7052_9342);
if(temp__5823__auto___9355__$1){
var seq__7052_9357__$1 = temp__5823__auto___9355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7052_9357__$1)){
var c__5673__auto___9359 = cljs.core.chunk_first(seq__7052_9357__$1);
var G__9361 = cljs.core.chunk_rest(seq__7052_9357__$1);
var G__9362 = c__5673__auto___9359;
var G__9363 = cljs.core.count(c__5673__auto___9359);
var G__9364 = (0);
seq__7052_9342 = G__9361;
chunk__7053_9343 = G__9362;
count__7054_9344 = G__9363;
i__7055_9345 = G__9364;
continue;
} else {
var ctor_9365 = cljs.core.first(seq__7052_9357__$1);
nex.typechecker.check_constructor(env,name,ctor_9365);


var G__9366 = cljs.core.next(seq__7052_9357__$1);
var G__9367 = null;
var G__9368 = (0);
var G__9369 = (0);
seq__7052_9342 = G__9366;
chunk__7053_9343 = G__9367;
count__7054_9344 = G__9368;
i__7055_9345 = G__9369;
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


var G__9371 = cljs.core.next(seq__6980_9296__$1);
var G__9372 = null;
var G__9373 = (0);
var G__9374 = (0);
seq__6980_9194 = G__9371;
chunk__6984_9195 = G__9372;
count__6986_9196 = G__9373;
i__6987_9197 = G__9374;
continue;
}
} else {
}
}
break;
}

var fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6961_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6961_SHARP_))) && (cljs.core.not(new cljs.core.Keyword(null,"constant?","constant?",116434182).cljs$core$IFn$_invoke$arity$1(p1__6961_SHARP_))));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"members","members",159001018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6960_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-section","feature-section",-630050418),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6960_SHARP_));
}),body__$1)], 0)));
var constructors = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"constructors","constructors",1994499075),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constructors","constructors",1994499075),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__6962_SHARP_));
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
var G__7066 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt);
var G__7066__$1 = (((G__7066 instanceof cljs.core.Keyword))?G__7066.fqn:null);
switch (G__7066__$1) {
case "assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "member-assign":
return cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(stmt)]);

break;
case "if":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(stmt)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__6963_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex$typechecker$check_class_$_collect_assigned,new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(p1__6963_SHARP_));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6964_SHARP_){
return nex$typechecker$check_class_$_collect_assigned(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__6964_SHARP_));
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

var seq__7076 = cljs.core.seq(constructors);
var chunk__7078 = null;
var count__7079 = (0);
var i__7080 = (0);
while(true){
if((i__7080 < count__7079)){
var map__7094 = chunk__7078.cljs$core$IIndexed$_nth$arity$2(null,i__7080);
var map__7094__$1 = cljs.core.__destructure_map(map__7094);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7094__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9417 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9418 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9417)));
if(cljs.core.seq(missing_9418)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9418))))], null));
} else {
}


var G__9427 = seq__7076;
var G__9428 = chunk__7078;
var G__9429 = count__7079;
var G__9430 = (i__7080 + (1));
seq__7076 = G__9427;
chunk__7078 = G__9428;
count__7079 = G__9429;
i__7080 = G__9430;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7076);
if(temp__5823__auto__){
var seq__7076__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7076__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7076__$1);
var G__9434 = cljs.core.chunk_rest(seq__7076__$1);
var G__9435 = c__5673__auto__;
var G__9436 = cljs.core.count(c__5673__auto__);
var G__9437 = (0);
seq__7076 = G__9434;
chunk__7078 = G__9435;
count__7079 = G__9436;
i__7080 = G__9437;
continue;
} else {
var map__7095 = cljs.core.first(seq__7076__$1);
var map__7095__$1 = cljs.core.__destructure_map(map__7095);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var body__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7095__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var assigned_9441 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(collect_assigned,body__$2));
var missing_9442 = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required_fields,assigned_9441)));
if(cljs.core.seq(missing_9442)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" does not initialize all attachable fields"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Constructor "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name__$1)+" must initialize attachable fields: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",missing_9442))))], null));
} else {
}


var G__9448 = cljs.core.next(seq__7076__$1);
var G__9449 = null;
var G__9450 = (0);
var G__9451 = (0);
seq__7076 = G__9448;
chunk__7078 = G__9449;
count__7079 = G__9450;
i__7080 = G__9451;
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

var seq__7105_9463 = cljs.core.seq(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String","Integer","Integer64","Real","Decimal","Boolean","Char"], null));
var chunk__7106_9464 = null;
var count__7107_9465 = (0);
var i__7108_9466 = (0);
while(true){
if((i__7108_9466 < count__7107_9465)){
var scalar_9470 = chunk__7106_9464.cljs$core$IIndexed$_nth$arity$2(null,i__7108_9466);
nex.typechecker.env_add_class(env,scalar_9470,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9470,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9470,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9470,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9475 = seq__7105_9463;
var G__9476 = chunk__7106_9464;
var G__9477 = count__7107_9465;
var G__9478 = (i__7108_9466 + (1));
seq__7105_9463 = G__9475;
chunk__7106_9464 = G__9476;
count__7107_9465 = G__9477;
i__7108_9466 = G__9478;
continue;
} else {
var temp__5823__auto___9479 = cljs.core.seq(seq__7105_9463);
if(temp__5823__auto___9479){
var seq__7105_9481__$1 = temp__5823__auto___9479;
if(cljs.core.chunked_seq_QMARK_(seq__7105_9481__$1)){
var c__5673__auto___9483 = cljs.core.chunk_first(seq__7105_9481__$1);
var G__9485 = cljs.core.chunk_rest(seq__7105_9481__$1);
var G__9486 = c__5673__auto___9483;
var G__9487 = cljs.core.count(c__5673__auto___9483);
var G__9488 = (0);
seq__7105_9463 = G__9485;
chunk__7106_9464 = G__9486;
count__7107_9465 = G__9487;
i__7108_9466 = G__9488;
continue;
} else {
var scalar_9489 = cljs.core.first(seq__7105_9481__$1);
nex.typechecker.env_add_class(env,scalar_9489,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),scalar_9489,new cljs.core.Keyword(null,"deferred?","deferred?",716798715),false,new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),null,new cljs.core.Keyword(null,"parents","parents",-2027538891),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Comparable"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",-878878779),"Hashable"], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY], null));

nex.typechecker.env_add_method(env,scalar_9489,"compare",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));

nex.typechecker.env_add_method(env,scalar_9489,"hash",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null));


var G__9497 = cljs.core.next(seq__7105_9481__$1);
var G__9498 = null;
var G__9499 = (0);
var G__9500 = (0);
seq__7105_9463 = G__9497;
chunk__7106_9464 = G__9498;
count__7107_9465 = G__9499;
i__7108_9466 = G__9500;
continue;
}
} else {
}
}
break;
}

var seq__7117_9502 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["bitwise_set","bitwise_or","bitwise_logical_right_shift","bitwise_unset","bitwise_and","bitwise_right_shift","bitwise_rotate_right","bitwise_not","bitwise_left_shift","bitwise_is_set","bitwise_rotate_left","bitwise_xor"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"n",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)]));
var chunk__7118_9503 = null;
var count__7119_9504 = (0);
var i__7120_9505 = (0);
while(true){
if((i__7120_9505 < count__7119_9504)){
var vec__7130_9525 = chunk__7118_9503.cljs$core$IIndexed$_nth$arity$2(null,i__7120_9505);
var method_name_9526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7130_9525,(0),null);
var sig_9527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7130_9525,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9526,sig_9527);


var G__9531 = seq__7117_9502;
var G__9532 = chunk__7118_9503;
var G__9533 = count__7119_9504;
var G__9534 = (i__7120_9505 + (1));
seq__7117_9502 = G__9531;
chunk__7118_9503 = G__9532;
count__7119_9504 = G__9533;
i__7120_9505 = G__9534;
continue;
} else {
var temp__5823__auto___9536 = cljs.core.seq(seq__7117_9502);
if(temp__5823__auto___9536){
var seq__7117_9538__$1 = temp__5823__auto___9536;
if(cljs.core.chunked_seq_QMARK_(seq__7117_9538__$1)){
var c__5673__auto___9540 = cljs.core.chunk_first(seq__7117_9538__$1);
var G__9541 = cljs.core.chunk_rest(seq__7117_9538__$1);
var G__9542 = c__5673__auto___9540;
var G__9543 = cljs.core.count(c__5673__auto___9540);
var G__9544 = (0);
seq__7117_9502 = G__9541;
chunk__7118_9503 = G__9542;
count__7119_9504 = G__9543;
i__7120_9505 = G__9544;
continue;
} else {
var vec__7133_9546 = cljs.core.first(seq__7117_9538__$1);
var method_name_9547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_9546,(0),null);
var sig_9548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7133_9546,(1),null);
nex.typechecker.env_add_method(env,"Integer",method_name_9547,sig_9548);


var G__9551 = cljs.core.next(seq__7117_9538__$1);
var G__9552 = null;
var G__9553 = (0);
var G__9554 = (0);
seq__7117_9502 = G__9551;
chunk__7118_9503 = G__9552;
count__7119_9504 = G__9553;
i__7120_9505 = G__9554;
continue;
}
} else {
}
}
break;
}

var seq__7136_9556 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["compare","to_decimal","trim","starts_with","to_lower","hash","contains","to_real","to_integer","to_upper","substring","char_at","replace","split","length","to_integer64","index_of","ends_with"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"a",new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Decimal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"prefix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Char"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"old",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"new",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"delimiter",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer64"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"substr",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"suffix",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)]));
var chunk__7137_9557 = null;
var count__7138_9558 = (0);
var i__7139_9559 = (0);
while(true){
if((i__7139_9559 < count__7138_9558)){
var vec__7146_9579 = chunk__7137_9557.cljs$core$IIndexed$_nth$arity$2(null,i__7139_9559);
var method_name_9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7146_9579,(0),null);
var sig_9581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7146_9579,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9580,sig_9581);


var G__9585 = seq__7136_9556;
var G__9586 = chunk__7137_9557;
var G__9587 = count__7138_9558;
var G__9588 = (i__7139_9559 + (1));
seq__7136_9556 = G__9585;
chunk__7137_9557 = G__9586;
count__7138_9558 = G__9587;
i__7139_9559 = G__9588;
continue;
} else {
var temp__5823__auto___9590 = cljs.core.seq(seq__7136_9556);
if(temp__5823__auto___9590){
var seq__7136_9591__$1 = temp__5823__auto___9590;
if(cljs.core.chunked_seq_QMARK_(seq__7136_9591__$1)){
var c__5673__auto___9593 = cljs.core.chunk_first(seq__7136_9591__$1);
var G__9595 = cljs.core.chunk_rest(seq__7136_9591__$1);
var G__9596 = c__5673__auto___9593;
var G__9597 = cljs.core.count(c__5673__auto___9593);
var G__9598 = (0);
seq__7136_9556 = G__9595;
chunk__7137_9557 = G__9596;
count__7138_9558 = G__9597;
i__7139_9559 = G__9598;
continue;
} else {
var vec__7149_9600 = cljs.core.first(seq__7136_9591__$1);
var method_name_9601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7149_9600,(0),null);
var sig_9602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7149_9600,(1),null);
nex.typechecker.env_add_method(env,"String",method_name_9601,sig_9602);


var G__9609 = cljs.core.next(seq__7136_9591__$1);
var G__9610 = null;
var G__9611 = (0);
var G__9612 = (0);
seq__7136_9556 = G__9609;
chunk__7137_9557 = G__9610;
count__7138_9558 = G__9611;
i__7139_9559 = G__9612;
continue;
}
} else {
}
}
break;
}

var seq__7156_9614 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["print",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"print_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"error",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"msg",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"new_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"read_integer",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"read_real",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Real"], null)], null));
var chunk__7157_9615 = null;
var count__7158_9616 = (0);
var i__7159_9617 = (0);
while(true){
if((i__7159_9617 < count__7158_9616)){
var vec__7175_9626 = chunk__7157_9615.cljs$core$IIndexed$_nth$arity$2(null,i__7159_9617);
var method_name_9627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7175_9626,(0),null);
var sig_9628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7175_9626,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9627,sig_9628);


var G__9631 = seq__7156_9614;
var G__9632 = chunk__7157_9615;
var G__9633 = count__7158_9616;
var G__9634 = (i__7159_9617 + (1));
seq__7156_9614 = G__9631;
chunk__7157_9615 = G__9632;
count__7158_9616 = G__9633;
i__7159_9617 = G__9634;
continue;
} else {
var temp__5823__auto___9636 = cljs.core.seq(seq__7156_9614);
if(temp__5823__auto___9636){
var seq__7156_9638__$1 = temp__5823__auto___9636;
if(cljs.core.chunked_seq_QMARK_(seq__7156_9638__$1)){
var c__5673__auto___9639 = cljs.core.chunk_first(seq__7156_9638__$1);
var G__9641 = cljs.core.chunk_rest(seq__7156_9638__$1);
var G__9642 = c__5673__auto___9639;
var G__9643 = cljs.core.count(c__5673__auto___9639);
var G__9644 = (0);
seq__7156_9614 = G__9641;
chunk__7157_9615 = G__9642;
count__7158_9616 = G__9643;
i__7159_9617 = G__9644;
continue;
} else {
var vec__7181_9646 = cljs.core.first(seq__7156_9638__$1);
var method_name_9647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7181_9646,(0),null);
var sig_9648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7181_9646,(1),null);
nex.typechecker.env_add_method(env,"Console",method_name_9647,sig_9648);


var G__9650 = cljs.core.next(seq__7156_9638__$1);
var G__9651 = null;
var G__9652 = (0);
var G__9653 = (0);
seq__7156_9614 = G__9650;
chunk__7157_9615 = G__9651;
count__7158_9616 = G__9652;
i__7159_9617 = G__9653;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Task",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Task",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7184_9657 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 4, ["await",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"cancel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_done",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"is_cancelled",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null)], null));
var chunk__7185_9658 = null;
var count__7186_9659 = (0);
var i__7187_9660 = (0);
while(true){
if((i__7187_9660 < count__7186_9659)){
var vec__7207_9661 = chunk__7185_9658.cljs$core$IIndexed$_nth$arity$2(null,i__7187_9660);
var method_name_9662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7207_9661,(0),null);
var sig_9663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7207_9661,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_9662,sig_9663);


var G__9665 = seq__7184_9657;
var G__9666 = chunk__7185_9658;
var G__9667 = count__7186_9659;
var G__9668 = (i__7187_9660 + (1));
seq__7184_9657 = G__9665;
chunk__7185_9658 = G__9666;
count__7186_9659 = G__9667;
i__7187_9660 = G__9668;
continue;
} else {
var temp__5823__auto___9670 = cljs.core.seq(seq__7184_9657);
if(temp__5823__auto___9670){
var seq__7184_9672__$1 = temp__5823__auto___9670;
if(cljs.core.chunked_seq_QMARK_(seq__7184_9672__$1)){
var c__5673__auto___9673 = cljs.core.chunk_first(seq__7184_9672__$1);
var G__9674 = cljs.core.chunk_rest(seq__7184_9672__$1);
var G__9675 = c__5673__auto___9673;
var G__9676 = cljs.core.count(c__5673__auto___9673);
var G__9677 = (0);
seq__7184_9657 = G__9674;
chunk__7185_9658 = G__9675;
count__7186_9659 = G__9676;
i__7187_9660 = G__9677;
continue;
} else {
var vec__7210_9678 = cljs.core.first(seq__7184_9672__$1);
var method_name_9679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7210_9678,(0),null);
var sig_9680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7210_9678,(1),null);
nex.typechecker.env_add_method(env,"Task",method_name_9679,sig_9680);


var G__9683 = cljs.core.next(seq__7184_9672__$1);
var G__9684 = null;
var G__9685 = (0);
var G__9686 = (0);
seq__7184_9657 = G__9683;
chunk__7185_9658 = G__9684;
count__7186_9659 = G__9685;
i__7187_9660 = G__9686;
continue;
}
} else {
}
}
break;
}

var seq__7216_9688 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 7, ["read",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"write",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"append",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"content",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"delete",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"lines",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)], null));
var chunk__7217_9689 = null;
var count__7218_9690 = (0);
var i__7219_9691 = (0);
while(true){
if((i__7219_9691 < count__7218_9690)){
var vec__7226_9701 = chunk__7217_9689.cljs$core$IIndexed$_nth$arity$2(null,i__7219_9691);
var method_name_9702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7226_9701,(0),null);
var sig_9703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7226_9701,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9702,sig_9703);


var G__9706 = seq__7216_9688;
var G__9707 = chunk__7217_9689;
var G__9708 = count__7218_9690;
var G__9709 = (i__7219_9691 + (1));
seq__7216_9688 = G__9706;
chunk__7217_9689 = G__9707;
count__7218_9690 = G__9708;
i__7219_9691 = G__9709;
continue;
} else {
var temp__5823__auto___9711 = cljs.core.seq(seq__7216_9688);
if(temp__5823__auto___9711){
var seq__7216_9713__$1 = temp__5823__auto___9711;
if(cljs.core.chunked_seq_QMARK_(seq__7216_9713__$1)){
var c__5673__auto___9715 = cljs.core.chunk_first(seq__7216_9713__$1);
var G__9716 = cljs.core.chunk_rest(seq__7216_9713__$1);
var G__9717 = c__5673__auto___9715;
var G__9718 = cljs.core.count(c__5673__auto___9715);
var G__9719 = (0);
seq__7216_9688 = G__9716;
chunk__7217_9689 = G__9717;
count__7218_9690 = G__9718;
i__7219_9691 = G__9719;
continue;
} else {
var vec__7233_9721 = cljs.core.first(seq__7216_9713__$1);
var method_name_9722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7233_9721,(0),null);
var sig_9723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7233_9721,(1),null);
nex.typechecker.env_add_method(env,"File",method_name_9722,sig_9723);


var G__9727 = cljs.core.next(seq__7216_9713__$1);
var G__9728 = null;
var G__9729 = (0);
var G__9730 = (0);
seq__7216_9688 = G__9727;
chunk__7217_9689 = G__9728;
count__7218_9690 = G__9729;
i__7219_9691 = G__9730;
continue;
}
} else {
}
}
break;
}

var seq__7236_9733 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 3, ["getenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),"setenv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"name",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"command_line",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["String"], null)], null)], null)], null));
var chunk__7237_9734 = null;
var count__7238_9735 = (0);
var i__7239_9736 = (0);
while(true){
if((i__7239_9736 < count__7238_9735)){
var vec__7247_9746 = chunk__7237_9734.cljs$core$IIndexed$_nth$arity$2(null,i__7239_9736);
var method_name_9747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247_9746,(0),null);
var sig_9748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7247_9746,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9747,sig_9748);


var G__9751 = seq__7236_9733;
var G__9752 = chunk__7237_9734;
var G__9753 = count__7238_9735;
var G__9754 = (i__7239_9736 + (1));
seq__7236_9733 = G__9751;
chunk__7237_9734 = G__9752;
count__7238_9735 = G__9753;
i__7239_9736 = G__9754;
continue;
} else {
var temp__5823__auto___9756 = cljs.core.seq(seq__7236_9733);
if(temp__5823__auto___9756){
var seq__7236_9758__$1 = temp__5823__auto___9756;
if(cljs.core.chunked_seq_QMARK_(seq__7236_9758__$1)){
var c__5673__auto___9759 = cljs.core.chunk_first(seq__7236_9758__$1);
var G__9761 = cljs.core.chunk_rest(seq__7236_9758__$1);
var G__9762 = c__5673__auto___9759;
var G__9763 = cljs.core.count(c__5673__auto___9759);
var G__9764 = (0);
seq__7236_9733 = G__9761;
chunk__7237_9734 = G__9762;
count__7238_9735 = G__9763;
i__7239_9736 = G__9764;
continue;
} else {
var vec__7257_9767 = cljs.core.first(seq__7236_9758__$1);
var method_name_9768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257_9767,(0),null);
var sig_9769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257_9767,(1),null);
nex.typechecker.env_add_method(env,"Process",method_name_9768,sig_9769);


var G__9772 = cljs.core.next(seq__7236_9758__$1);
var G__9773 = null;
var G__9774 = (0);
var G__9775 = (0);
seq__7236_9733 = G__9772;
chunk__7237_9734 = G__9773;
count__7238_9735 = G__9774;
i__7239_9736 = G__9775;
continue;
}
} else {
}
}
break;
}

var seq__7260_9777 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["draw_text","set_font_size","draw_image_scaled","refresh","draw_image","sleep","draw_line","show","draw_circle","fill_rect","draw_image_rotated","set_color","draw_rect","close","fill_circle","bgcolor","clear"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"text",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ms",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y1",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y2",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"img",new cljs.core.Keyword(null,"type","type",1174270348),"Image"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"r",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7261_9778 = null;
var count__7262_9779 = (0);
var i__7263_9780 = (0);
while(true){
if((i__7263_9780 < count__7262_9779)){
var vec__7279_9816 = chunk__7261_9778.cljs$core$IIndexed$_nth$arity$2(null,i__7263_9780);
var method_name_9817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7279_9816,(0),null);
var sig_9818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7279_9816,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9817,sig_9818);


var G__9819 = seq__7260_9777;
var G__9820 = chunk__7261_9778;
var G__9821 = count__7262_9779;
var G__9822 = (i__7263_9780 + (1));
seq__7260_9777 = G__9819;
chunk__7261_9778 = G__9820;
count__7262_9779 = G__9821;
i__7263_9780 = G__9822;
continue;
} else {
var temp__5823__auto___9824 = cljs.core.seq(seq__7260_9777);
if(temp__5823__auto___9824){
var seq__7260_9826__$1 = temp__5823__auto___9824;
if(cljs.core.chunked_seq_QMARK_(seq__7260_9826__$1)){
var c__5673__auto___9828 = cljs.core.chunk_first(seq__7260_9826__$1);
var G__9829 = cljs.core.chunk_rest(seq__7260_9826__$1);
var G__9830 = c__5673__auto___9828;
var G__9831 = cljs.core.count(c__5673__auto___9828);
var G__9832 = (0);
seq__7260_9777 = G__9829;
chunk__7261_9778 = G__9830;
count__7262_9779 = G__9831;
i__7263_9780 = G__9832;
continue;
} else {
var vec__7284_9834 = cljs.core.first(seq__7260_9826__$1);
var method_name_9835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7284_9834,(0),null);
var sig_9836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7284_9834,(1),null);
nex.typechecker.env_add_method(env,"Window",method_name_9835,sig_9836);


var G__9839 = cljs.core.next(seq__7260_9826__$1);
var G__9840 = null;
var G__9841 = (0);
var G__9842 = (0);
seq__7260_9777 = G__9839;
chunk__7261_9778 = G__9840;
count__7262_9779 = G__9841;
i__7263_9780 = G__9842;
continue;
}
} else {
}
}
break;
}

var seq__7287_9843 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 2, ["width",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"height",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7288_9844 = null;
var count__7289_9845 = (0);
var i__7290_9846 = (0);
while(true){
if((i__7290_9846 < count__7289_9845)){
var vec__7299_9850 = chunk__7288_9844.cljs$core$IIndexed$_nth$arity$2(null,i__7290_9846);
var method_name_9851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7299_9850,(0),null);
var sig_9852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7299_9850,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9851,sig_9852);


var G__9855 = seq__7287_9843;
var G__9856 = chunk__7288_9844;
var G__9857 = count__7289_9845;
var G__9858 = (i__7290_9846 + (1));
seq__7287_9843 = G__9855;
chunk__7288_9844 = G__9856;
count__7289_9845 = G__9857;
i__7290_9846 = G__9858;
continue;
} else {
var temp__5823__auto___9860 = cljs.core.seq(seq__7287_9843);
if(temp__5823__auto___9860){
var seq__7287_9861__$1 = temp__5823__auto___9860;
if(cljs.core.chunked_seq_QMARK_(seq__7287_9861__$1)){
var c__5673__auto___9862 = cljs.core.chunk_first(seq__7287_9861__$1);
var G__9864 = cljs.core.chunk_rest(seq__7287_9861__$1);
var G__9865 = c__5673__auto___9862;
var G__9866 = cljs.core.count(c__5673__auto___9862);
var G__9867 = (0);
seq__7287_9843 = G__9864;
chunk__7288_9844 = G__9865;
count__7289_9845 = G__9866;
i__7290_9846 = G__9867;
continue;
} else {
var vec__7309_9869 = cljs.core.first(seq__7287_9861__$1);
var method_name_9870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7309_9869,(0),null);
var sig_9871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7309_9869,(1),null);
nex.typechecker.env_add_method(env,"Image",method_name_9870,sig_9871);


var G__9874 = cljs.core.next(seq__7287_9861__$1);
var G__9875 = null;
var G__9876 = (0);
var G__9877 = (0);
seq__7287_9843 = G__9874;
chunk__7288_9844 = G__9875;
count__7289_9845 = G__9876;
i__7290_9846 = G__9877;
continue;
}
} else {
}
}
break;
}

var seq__7315_9879 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["right","hide","shape","pensize","end_fill","forward","begin_fill","show","pendown","penup","speed","circle","backward","color","goto","left"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"shape",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"speed",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"distance",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"color",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"x",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"y",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"angle",new cljs.core.Keyword(null,"type","type",1174270348),"Real"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7316_9880 = null;
var count__7317_9881 = (0);
var i__7318_9882 = (0);
while(true){
if((i__7318_9882 < count__7317_9881)){
var vec__7331_9899 = chunk__7316_9880.cljs$core$IIndexed$_nth$arity$2(null,i__7318_9882);
var method_name_9900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331_9899,(0),null);
var sig_9901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7331_9899,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9900,sig_9901);


var G__9905 = seq__7315_9879;
var G__9906 = chunk__7316_9880;
var G__9907 = count__7317_9881;
var G__9908 = (i__7318_9882 + (1));
seq__7315_9879 = G__9905;
chunk__7316_9880 = G__9906;
count__7317_9881 = G__9907;
i__7318_9882 = G__9908;
continue;
} else {
var temp__5823__auto___9909 = cljs.core.seq(seq__7315_9879);
if(temp__5823__auto___9909){
var seq__7315_9910__$1 = temp__5823__auto___9909;
if(cljs.core.chunked_seq_QMARK_(seq__7315_9910__$1)){
var c__5673__auto___9911 = cljs.core.chunk_first(seq__7315_9910__$1);
var G__9912 = cljs.core.chunk_rest(seq__7315_9910__$1);
var G__9913 = c__5673__auto___9911;
var G__9914 = cljs.core.count(c__5673__auto___9911);
var G__9915 = (0);
seq__7315_9879 = G__9912;
chunk__7316_9880 = G__9913;
count__7317_9881 = G__9914;
i__7318_9882 = G__9915;
continue;
} else {
var vec__7336_9917 = cljs.core.first(seq__7315_9910__$1);
var method_name_9918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7336_9917,(0),null);
var sig_9919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7336_9917,(1),null);
nex.typechecker.env_add_method(env,"Turtle",method_name_9918,sig_9919);


var G__9921 = cljs.core.next(seq__7315_9910__$1);
var G__9922 = null;
var G__9923 = (0);
var G__9924 = (0);
seq__7315_9879 = G__9921;
chunk__7316_9880 = G__9922;
count__7317_9881 = G__9923;
i__7318_9882 = G__9924;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Array",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7339_9928 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["is_empty","reverse","contains","push","sort","cursor","remove","length","last","join","slice","add","set","size","index_of","get","at","first"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sep",new cljs.core.Keyword(null,"type","type",1174270348),"String"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"start",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"end",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"elem",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"index",new cljs.core.Keyword(null,"type","type",1174270348),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null)]));
var chunk__7340_9929 = null;
var count__7341_9930 = (0);
var i__7342_9931 = (0);
while(true){
if((i__7342_9931 < count__7341_9930)){
var vec__7353_9949 = chunk__7340_9929.cljs$core$IIndexed$_nth$arity$2(null,i__7342_9931);
var method_name_9950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7353_9949,(0),null);
var sig_9951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7353_9949,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9950,sig_9951);


var G__9954 = seq__7339_9928;
var G__9955 = chunk__7340_9929;
var G__9956 = count__7341_9930;
var G__9957 = (i__7342_9931 + (1));
seq__7339_9928 = G__9954;
chunk__7340_9929 = G__9955;
count__7341_9930 = G__9956;
i__7342_9931 = G__9957;
continue;
} else {
var temp__5823__auto___9959 = cljs.core.seq(seq__7339_9928);
if(temp__5823__auto___9959){
var seq__7339_9960__$1 = temp__5823__auto___9959;
if(cljs.core.chunked_seq_QMARK_(seq__7339_9960__$1)){
var c__5673__auto___9961 = cljs.core.chunk_first(seq__7339_9960__$1);
var G__9963 = cljs.core.chunk_rest(seq__7339_9960__$1);
var G__9964 = c__5673__auto___9961;
var G__9965 = cljs.core.count(c__5673__auto___9961);
var G__9966 = (0);
seq__7339_9928 = G__9963;
chunk__7340_9929 = G__9964;
count__7341_9930 = G__9965;
i__7342_9931 = G__9966;
continue;
} else {
var vec__7356_9968 = cljs.core.first(seq__7339_9960__$1);
var method_name_9969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7356_9968,(0),null);
var sig_9970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7356_9968,(1),null);
nex.typechecker.env_add_method(env,"Array",method_name_9969,sig_9970);


var G__9972 = cljs.core.next(seq__7339_9960__$1);
var G__9973 = null;
var G__9974 = (0);
var G__9975 = (0);
seq__7339_9928 = G__9972;
chunk__7340_9929 = G__9973;
count__7341_9930 = G__9974;
i__7342_9931 = G__9975;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Map",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"K"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"V"], null)], null)], null));

var seq__7359_9979 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays(["values","keys","is_empty","try_get","cursor","remove","set","size","get","contains_key","at"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["V"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["K"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"V"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"key",new cljs.core.Keyword(null,"type","type",1174270348),"K"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"V"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null)]));
var chunk__7360_9980 = null;
var count__7361_9981 = (0);
var i__7362_9982 = (0);
while(true){
if((i__7362_9982 < count__7361_9981)){
var vec__7381_9996 = chunk__7360_9980.cljs$core$IIndexed$_nth$arity$2(null,i__7362_9982);
var method_name_9997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7381_9996,(0),null);
var sig_9998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7381_9996,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_9997,sig_9998);


var G__10002 = seq__7359_9979;
var G__10003 = chunk__7360_9980;
var G__10004 = count__7361_9981;
var G__10005 = (i__7362_9982 + (1));
seq__7359_9979 = G__10002;
chunk__7360_9980 = G__10003;
count__7361_9981 = G__10004;
i__7362_9982 = G__10005;
continue;
} else {
var temp__5823__auto___10007 = cljs.core.seq(seq__7359_9979);
if(temp__5823__auto___10007){
var seq__7359_10009__$1 = temp__5823__auto___10007;
if(cljs.core.chunked_seq_QMARK_(seq__7359_10009__$1)){
var c__5673__auto___10011 = cljs.core.chunk_first(seq__7359_10009__$1);
var G__10012 = cljs.core.chunk_rest(seq__7359_10009__$1);
var G__10013 = c__5673__auto___10011;
var G__10014 = cljs.core.count(c__5673__auto___10011);
var G__10015 = (0);
seq__7359_9979 = G__10012;
chunk__7360_9980 = G__10013;
count__7361_9981 = G__10014;
i__7362_9982 = G__10015;
continue;
} else {
var vec__7384_10016 = cljs.core.first(seq__7359_10009__$1);
var method_name_10017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7384_10016,(0),null);
var sig_10018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7384_10016,(1),null);
nex.typechecker.env_add_method(env,"Map",method_name_10017,sig_10018);


var G__10022 = cljs.core.next(seq__7359_10009__$1);
var G__10023 = null;
var G__10024 = (0);
var G__10025 = (0);
seq__7359_9979 = G__10022;
chunk__7360_9980 = G__10023;
count__7361_9981 = G__10024;
i__7362_9982 = G__10025;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Set",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

nex.typechecker.env_add_method(env,"Set","from_array",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"values",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Array",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null));

var seq__7390_10029 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["contains",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"union",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"intersection",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"symmetric_difference",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"other",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"Set",new cljs.core.Keyword(null,"type-params","type-params",894286499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["T"], null)], null)], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"is_empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"cursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Cursor"], null)], null));
var chunk__7391_10030 = null;
var count__7392_10031 = (0);
var i__7393_10032 = (0);
while(true){
if((i__7393_10032 < count__7392_10031)){
var vec__7413_10050 = chunk__7391_10030.cljs$core$IIndexed$_nth$arity$2(null,i__7393_10032);
var method_name_10051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7413_10050,(0),null);
var sig_10052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7413_10050,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_10051,sig_10052);


var G__10054 = seq__7390_10029;
var G__10055 = chunk__7391_10030;
var G__10056 = count__7392_10031;
var G__10057 = (i__7393_10032 + (1));
seq__7390_10029 = G__10054;
chunk__7391_10030 = G__10055;
count__7392_10031 = G__10056;
i__7393_10032 = G__10057;
continue;
} else {
var temp__5823__auto___10059 = cljs.core.seq(seq__7390_10029);
if(temp__5823__auto___10059){
var seq__7390_10061__$1 = temp__5823__auto___10059;
if(cljs.core.chunked_seq_QMARK_(seq__7390_10061__$1)){
var c__5673__auto___10063 = cljs.core.chunk_first(seq__7390_10061__$1);
var G__10065 = cljs.core.chunk_rest(seq__7390_10061__$1);
var G__10066 = c__5673__auto___10063;
var G__10067 = cljs.core.count(c__5673__auto___10063);
var G__10068 = (0);
seq__7390_10029 = G__10065;
chunk__7391_10030 = G__10066;
count__7392_10031 = G__10067;
i__7393_10032 = G__10068;
continue;
} else {
var vec__7416_10071 = cljs.core.first(seq__7390_10061__$1);
var method_name_10072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7416_10071,(0),null);
var sig_10073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7416_10071,(1),null);
nex.typechecker.env_add_method(env,"Set",method_name_10072,sig_10073);


var G__10078 = cljs.core.next(seq__7390_10061__$1);
var G__10079 = null;
var G__10080 = (0);
var G__10081 = (0);
seq__7390_10029 = G__10078;
chunk__7391_10030 = G__10079;
count__7392_10031 = G__10080;
i__7393_10032 = G__10081;
continue;
}
} else {
}
}
break;
}

nex.typechecker.env_add_class(env,"Channel",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Channel",new cljs.core.Keyword(null,"generic-params","generic-params",1918051168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"T"], null)], null)], null));

var seq__7419_10087 = cljs.core.seq(new cljs.core.PersistentArrayMap(null, 8, ["send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"try_send",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"value",new cljs.core.Keyword(null,"type","type",1174270348),"T"], null)], null),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"T"], null),"try_receive",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),"T",new cljs.core.Keyword(null,"detachable","detachable",715380987),true], null)], null),"close",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Void"], null),"is_closed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Boolean"], null),"capacity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null),"size",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Integer"], null)], null));
var chunk__7420_10088 = null;
var count__7421_10089 = (0);
var i__7422_10090 = (0);
while(true){
if((i__7422_10090 < count__7421_10089)){
var vec__7429_10103 = chunk__7420_10088.cljs$core$IIndexed$_nth$arity$2(null,i__7422_10090);
var method_name_10104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7429_10103,(0),null);
var sig_10105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7429_10103,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_10104,sig_10105);


var G__10109 = seq__7419_10087;
var G__10110 = chunk__7420_10088;
var G__10111 = count__7421_10089;
var G__10112 = (i__7422_10090 + (1));
seq__7419_10087 = G__10109;
chunk__7420_10088 = G__10110;
count__7421_10089 = G__10111;
i__7422_10090 = G__10112;
continue;
} else {
var temp__5823__auto___10114 = cljs.core.seq(seq__7419_10087);
if(temp__5823__auto___10114){
var seq__7419_10116__$1 = temp__5823__auto___10114;
if(cljs.core.chunked_seq_QMARK_(seq__7419_10116__$1)){
var c__5673__auto___10118 = cljs.core.chunk_first(seq__7419_10116__$1);
var G__10119 = cljs.core.chunk_rest(seq__7419_10116__$1);
var G__10120 = c__5673__auto___10118;
var G__10121 = cljs.core.count(c__5673__auto___10118);
var G__10122 = (0);
seq__7419_10087 = G__10119;
chunk__7420_10088 = G__10120;
count__7421_10089 = G__10121;
i__7422_10090 = G__10122;
continue;
} else {
var vec__7432_10125 = cljs.core.first(seq__7419_10116__$1);
var method_name_10126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7432_10125,(0),null);
var sig_10127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7432_10125,(1),null);
nex.typechecker.env_add_method(env,"Channel",method_name_10126,sig_10127);


var G__10130 = cljs.core.next(seq__7419_10116__$1);
var G__10131 = null;
var G__10132 = (0);
var G__10133 = (0);
seq__7419_10087 = G__10130;
chunk__7420_10088 = G__10131;
count__7421_10089 = G__10132;
i__7422_10090 = G__10133;
continue;
}
} else {
}
}
break;
}

var seq__7435 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(33)));
var chunk__7436 = null;
var count__7437 = (0);
var i__7438 = (0);
while(true){
if((i__7438 < count__7437)){
var n = chunk__7436.cljs$core$IIndexed$_nth$arity$2(null,i__7438);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7435,chunk__7436,count__7437,i__7438,n){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7435,chunk__7436,count__7437,i__7438,n))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10145 = seq__7435;
var G__10146 = chunk__7436;
var G__10147 = count__7437;
var G__10148 = (i__7438 + (1));
seq__7435 = G__10145;
chunk__7436 = G__10146;
count__7437 = G__10147;
i__7438 = G__10148;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7435);
if(temp__5823__auto__){
var seq__7435__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7435__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7435__$1);
var G__10151 = cljs.core.chunk_rest(seq__7435__$1);
var G__10152 = c__5673__auto__;
var G__10153 = cljs.core.count(c__5673__auto__);
var G__10154 = (0);
seq__7435 = G__10151;
chunk__7436 = G__10152;
count__7437 = G__10153;
i__7438 = G__10154;
continue;
} else {
var n = cljs.core.first(seq__7435__$1);
nex.typechecker.env_add_method(env,"Function",(""+"call"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (seq__7435,chunk__7436,count__7437,i__7438,n,seq__7435__$1,temp__5823__auto__){
return (function (i){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(""+"arg"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),new cljs.core.Keyword(null,"type","type",1174270348),"Any"], null);
});})(seq__7435,chunk__7436,count__7437,i__7438,n,seq__7435__$1,temp__5823__auto__))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1)))),new cljs.core.Keyword(null,"return-type","return-type",1172480871),"Any"], null));


var G__10159 = cljs.core.next(seq__7435__$1);
var G__10160 = null;
var G__10161 = (0);
var G__10162 = (0);
seq__7435 = G__10159;
chunk__7436 = G__10160;
count__7437 = G__10161;
i__7438 = G__10162;
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
var G__7444 = arguments.length;
switch (G__7444) {
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

(nex.typechecker.check_program.cljs$core$IFn$_invoke$arity$2 = (function (p__7451,opts){
var map__7452 = p__7451;
var map__7452__$1 = cljs.core.__destructure_map(map__7452);
var program = map__7452__$1;
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var calls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,new cljs.core.Keyword(null,"imports","imports",-1249933394));
var functions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7452__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var env = nex.typechecker.make_type_env.cljs$core$IFn$_invoke$arity$0();
try{var seq__7457_10178 = cljs.core.seq(imports);
var chunk__7458_10179 = null;
var count__7459_10180 = (0);
var i__7460_10181 = (0);
while(true){
if((i__7460_10181 < count__7459_10180)){
var map__7476_10183 = chunk__7458_10179.cljs$core$IIndexed$_nth$arity$2(null,i__7460_10181);
var map__7476_10184__$1 = cljs.core.__destructure_map(map__7476_10183);
var qualified_name_10185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7476_10184__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7476_10184__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10186 == null)){
var simple_name_10190 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10185,/\./));
nex.typechecker.env_add_class(env,simple_name_10190,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10190,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10185], null));
} else {
}


var G__10197 = seq__7457_10178;
var G__10198 = chunk__7458_10179;
var G__10199 = count__7459_10180;
var G__10200 = (i__7460_10181 + (1));
seq__7457_10178 = G__10197;
chunk__7458_10179 = G__10198;
count__7459_10180 = G__10199;
i__7460_10181 = G__10200;
continue;
} else {
var temp__5823__auto___10202 = cljs.core.seq(seq__7457_10178);
if(temp__5823__auto___10202){
var seq__7457_10204__$1 = temp__5823__auto___10202;
if(cljs.core.chunked_seq_QMARK_(seq__7457_10204__$1)){
var c__5673__auto___10206 = cljs.core.chunk_first(seq__7457_10204__$1);
var G__10207 = cljs.core.chunk_rest(seq__7457_10204__$1);
var G__10208 = c__5673__auto___10206;
var G__10209 = cljs.core.count(c__5673__auto___10206);
var G__10210 = (0);
seq__7457_10178 = G__10207;
chunk__7458_10179 = G__10208;
count__7459_10180 = G__10209;
i__7460_10181 = G__10210;
continue;
} else {
var map__7483_10213 = cljs.core.first(seq__7457_10204__$1);
var map__7483_10214__$1 = cljs.core.__destructure_map(map__7483_10213);
var qualified_name_10215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7483_10214__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7483_10214__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10216 == null)){
var simple_name_10220 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10215,/\./));
nex.typechecker.env_add_class(env,simple_name_10220,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10220,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10215], null));
} else {
}


var G__10224 = cljs.core.next(seq__7457_10204__$1);
var G__10225 = null;
var G__10226 = (0);
var G__10227 = (0);
seq__7457_10178 = G__10224;
chunk__7458_10179 = G__10225;
count__7459_10180 = G__10226;
i__7460_10181 = G__10227;
continue;
}
} else {
}
}
break;
}

var seq__7484_10229 = cljs.core.seq(classes);
var chunk__7485_10230 = null;
var count__7486_10231 = (0);
var i__7487_10232 = (0);
while(true){
if((i__7487_10232 < count__7486_10231)){
var class_def_10236 = chunk__7485_10230.cljs$core$IIndexed$_nth$arity$2(null,i__7487_10232);
nex.typechecker.collect_class_info(env,class_def_10236);


var G__10238 = seq__7484_10229;
var G__10239 = chunk__7485_10230;
var G__10240 = count__7486_10231;
var G__10241 = (i__7487_10232 + (1));
seq__7484_10229 = G__10238;
chunk__7485_10230 = G__10239;
count__7486_10231 = G__10240;
i__7487_10232 = G__10241;
continue;
} else {
var temp__5823__auto___10243 = cljs.core.seq(seq__7484_10229);
if(temp__5823__auto___10243){
var seq__7484_10245__$1 = temp__5823__auto___10243;
if(cljs.core.chunked_seq_QMARK_(seq__7484_10245__$1)){
var c__5673__auto___10246 = cljs.core.chunk_first(seq__7484_10245__$1);
var G__10248 = cljs.core.chunk_rest(seq__7484_10245__$1);
var G__10249 = c__5673__auto___10246;
var G__10250 = cljs.core.count(c__5673__auto___10246);
var G__10251 = (0);
seq__7484_10229 = G__10248;
chunk__7485_10230 = G__10249;
count__7486_10231 = G__10250;
i__7487_10232 = G__10251;
continue;
} else {
var class_def_10253 = cljs.core.first(seq__7484_10245__$1);
nex.typechecker.collect_class_info(env,class_def_10253);


var G__10255 = cljs.core.next(seq__7484_10245__$1);
var G__10256 = null;
var G__10257 = (0);
var G__10258 = (0);
seq__7484_10229 = G__10255;
chunk__7485_10230 = G__10256;
count__7486_10231 = G__10257;
i__7487_10232 = G__10258;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7489_10260 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7490_10262 = null;
var count__7491_10263 = (0);
var i__7492_10264 = (0);
while(true){
if((i__7492_10264 < count__7491_10263)){
var vec__7508_10266 = chunk__7490_10262.cljs$core$IIndexed$_nth$arity$2(null,i__7492_10264);
var var_name_10267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7508_10266,(0),null);
var var_type_10268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7508_10266,(1),null);
nex.typechecker.env_add_var(env,var_name_10267,var_type_10268);


var G__10271 = seq__7489_10260;
var G__10272 = chunk__7490_10262;
var G__10273 = count__7491_10263;
var G__10274 = (i__7492_10264 + (1));
seq__7489_10260 = G__10271;
chunk__7490_10262 = G__10272;
count__7491_10263 = G__10273;
i__7492_10264 = G__10274;
continue;
} else {
var temp__5823__auto___10276 = cljs.core.seq(seq__7489_10260);
if(temp__5823__auto___10276){
var seq__7489_10277__$1 = temp__5823__auto___10276;
if(cljs.core.chunked_seq_QMARK_(seq__7489_10277__$1)){
var c__5673__auto___10279 = cljs.core.chunk_first(seq__7489_10277__$1);
var G__10281 = cljs.core.chunk_rest(seq__7489_10277__$1);
var G__10282 = c__5673__auto___10279;
var G__10283 = cljs.core.count(c__5673__auto___10279);
var G__10284 = (0);
seq__7489_10260 = G__10281;
chunk__7490_10262 = G__10282;
count__7491_10263 = G__10283;
i__7492_10264 = G__10284;
continue;
} else {
var vec__7515_10286 = cljs.core.first(seq__7489_10277__$1);
var var_name_10287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7515_10286,(0),null);
var var_type_10288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7515_10286,(1),null);
nex.typechecker.env_add_var(env,var_name_10287,var_type_10288);


var G__10291 = cljs.core.next(seq__7489_10277__$1);
var G__10292 = null;
var G__10293 = (0);
var G__10294 = (0);
seq__7489_10260 = G__10291;
chunk__7490_10262 = G__10292;
count__7491_10263 = G__10293;
i__7492_10264 = G__10294;
continue;
}
} else {
}
}
break;
}

var seq__7521_10296 = cljs.core.seq(functions);
var chunk__7522_10297 = null;
var count__7523_10298 = (0);
var i__7524_10299 = (0);
while(true){
if((i__7524_10299 < count__7523_10298)){
var fn_def_10302 = chunk__7522_10297.cljs$core$IIndexed$_nth$arity$2(null,i__7524_10299);
var arity_10304 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10302));
if((arity_10304 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10302))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10302))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10302),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10302));


var G__10309 = seq__7521_10296;
var G__10310 = chunk__7522_10297;
var G__10311 = count__7523_10298;
var G__10312 = (i__7524_10299 + (1));
seq__7521_10296 = G__10309;
chunk__7522_10297 = G__10310;
count__7523_10298 = G__10311;
i__7524_10299 = G__10312;
continue;
} else {
var temp__5823__auto___10314 = cljs.core.seq(seq__7521_10296);
if(temp__5823__auto___10314){
var seq__7521_10316__$1 = temp__5823__auto___10314;
if(cljs.core.chunked_seq_QMARK_(seq__7521_10316__$1)){
var c__5673__auto___10321 = cljs.core.chunk_first(seq__7521_10316__$1);
var G__10323 = cljs.core.chunk_rest(seq__7521_10316__$1);
var G__10324 = c__5673__auto___10321;
var G__10325 = cljs.core.count(c__5673__auto___10321);
var G__10326 = (0);
seq__7521_10296 = G__10323;
chunk__7522_10297 = G__10324;
count__7523_10298 = G__10325;
i__7524_10299 = G__10326;
continue;
} else {
var fn_def_10328 = cljs.core.first(seq__7521_10316__$1);
var arity_10334 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fn_def_10328));
if((arity_10334 > (32))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10328))+" must have at most 32 parameters"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),nex.typechecker.type_error.cljs$core$IFn$_invoke$arity$1((""+"Function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10328))+" must have at most 32 parameters"))], null));
} else {
}

nex.typechecker.env_add_var(env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(fn_def_10328),new cljs.core.Keyword(null,"class-name","class-name",945142584).cljs$core$IFn$_invoke$arity$1(fn_def_10328));


var G__10339 = cljs.core.next(seq__7521_10316__$1);
var G__10340 = null;
var G__10342 = (0);
var G__10343 = (0);
seq__7521_10296 = G__10339;
chunk__7522_10297 = G__10340;
count__7523_10298 = G__10342;
i__7524_10299 = G__10343;
continue;
}
} else {
}
}
break;
}

var seq__7531_10348 = cljs.core.seq(classes);
var chunk__7532_10349 = null;
var count__7533_10350 = (0);
var i__7534_10351 = (0);
while(true){
if((i__7534_10351 < count__7533_10350)){
var class_def_10352 = chunk__7532_10349.cljs$core$IIndexed$_nth$arity$2(null,i__7534_10351);
nex.typechecker.check_class(env,class_def_10352);


var G__10353 = seq__7531_10348;
var G__10354 = chunk__7532_10349;
var G__10355 = count__7533_10350;
var G__10356 = (i__7534_10351 + (1));
seq__7531_10348 = G__10353;
chunk__7532_10349 = G__10354;
count__7533_10350 = G__10355;
i__7534_10351 = G__10356;
continue;
} else {
var temp__5823__auto___10357 = cljs.core.seq(seq__7531_10348);
if(temp__5823__auto___10357){
var seq__7531_10358__$1 = temp__5823__auto___10357;
if(cljs.core.chunked_seq_QMARK_(seq__7531_10358__$1)){
var c__5673__auto___10359 = cljs.core.chunk_first(seq__7531_10358__$1);
var G__10360 = cljs.core.chunk_rest(seq__7531_10358__$1);
var G__10361 = c__5673__auto___10359;
var G__10362 = cljs.core.count(c__5673__auto___10359);
var G__10363 = (0);
seq__7531_10348 = G__10360;
chunk__7532_10349 = G__10361;
count__7533_10350 = G__10362;
i__7534_10351 = G__10363;
continue;
} else {
var class_def_10364 = cljs.core.first(seq__7531_10358__$1);
nex.typechecker.check_class(env,class_def_10364);


var G__10365 = cljs.core.next(seq__7531_10358__$1);
var G__10366 = null;
var G__10367 = (0);
var G__10368 = (0);
seq__7531_10348 = G__10365;
chunk__7532_10349 = G__10366;
count__7533_10350 = G__10367;
i__7534_10351 = G__10368;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(statements)){
var seq__7536_10369 = cljs.core.seq(statements);
var chunk__7537_10370 = null;
var count__7538_10371 = (0);
var i__7539_10372 = (0);
while(true){
if((i__7539_10372 < count__7538_10371)){
var stmt_10373 = chunk__7537_10370.cljs$core$IIndexed$_nth$arity$2(null,i__7539_10372);
nex.typechecker.check_statement(env,stmt_10373);


var G__10374 = seq__7536_10369;
var G__10375 = chunk__7537_10370;
var G__10376 = count__7538_10371;
var G__10377 = (i__7539_10372 + (1));
seq__7536_10369 = G__10374;
chunk__7537_10370 = G__10375;
count__7538_10371 = G__10376;
i__7539_10372 = G__10377;
continue;
} else {
var temp__5823__auto___10378 = cljs.core.seq(seq__7536_10369);
if(temp__5823__auto___10378){
var seq__7536_10379__$1 = temp__5823__auto___10378;
if(cljs.core.chunked_seq_QMARK_(seq__7536_10379__$1)){
var c__5673__auto___10380 = cljs.core.chunk_first(seq__7536_10379__$1);
var G__10381 = cljs.core.chunk_rest(seq__7536_10379__$1);
var G__10382 = c__5673__auto___10380;
var G__10383 = cljs.core.count(c__5673__auto___10380);
var G__10384 = (0);
seq__7536_10369 = G__10381;
chunk__7537_10370 = G__10382;
count__7538_10371 = G__10383;
i__7539_10372 = G__10384;
continue;
} else {
var stmt_10385 = cljs.core.first(seq__7536_10379__$1);
nex.typechecker.check_statement(env,stmt_10385);


var G__10386 = cljs.core.next(seq__7536_10379__$1);
var G__10387 = null;
var G__10388 = (0);
var G__10389 = (0);
seq__7536_10369 = G__10386;
chunk__7537_10370 = G__10387;
count__7538_10371 = G__10388;
i__7539_10372 = G__10389;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7543_10390 = cljs.core.seq(calls);
var chunk__7544_10391 = null;
var count__7545_10392 = (0);
var i__7546_10393 = (0);
while(true){
if((i__7546_10393 < count__7545_10392)){
var call_10394 = chunk__7544_10391.cljs$core$IIndexed$_nth$arity$2(null,i__7546_10393);
nex.typechecker.check_expression(env,call_10394);


var G__10395 = seq__7543_10390;
var G__10396 = chunk__7544_10391;
var G__10397 = count__7545_10392;
var G__10398 = (i__7546_10393 + (1));
seq__7543_10390 = G__10395;
chunk__7544_10391 = G__10396;
count__7545_10392 = G__10397;
i__7546_10393 = G__10398;
continue;
} else {
var temp__5823__auto___10399 = cljs.core.seq(seq__7543_10390);
if(temp__5823__auto___10399){
var seq__7543_10400__$1 = temp__5823__auto___10399;
if(cljs.core.chunked_seq_QMARK_(seq__7543_10400__$1)){
var c__5673__auto___10401 = cljs.core.chunk_first(seq__7543_10400__$1);
var G__10402 = cljs.core.chunk_rest(seq__7543_10400__$1);
var G__10403 = c__5673__auto___10401;
var G__10404 = cljs.core.count(c__5673__auto___10401);
var G__10405 = (0);
seq__7543_10390 = G__10402;
chunk__7544_10391 = G__10403;
count__7545_10392 = G__10404;
i__7546_10393 = G__10405;
continue;
} else {
var call_10406 = cljs.core.first(seq__7543_10400__$1);
nex.typechecker.check_expression(env,call_10406);


var G__10407 = cljs.core.next(seq__7543_10400__$1);
var G__10408 = null;
var G__10409 = (0);
var G__10410 = (0);
seq__7543_10390 = G__10407;
chunk__7544_10391 = G__10408;
count__7545_10392 = G__10409;
i__7546_10393 = G__10410;
continue;
}
} else {
}
}
break;
}
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null);
}catch (e7456){var e = e7456;
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
var G__7551 = arguments.length;
switch (G__7551) {
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
var seq__7558_10412 = cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7559_10413 = null;
var count__7560_10414 = (0);
var i__7561_10415 = (0);
while(true){
if((i__7561_10415 < count__7560_10414)){
var map__7564_10416 = chunk__7559_10413.cljs$core$IIndexed$_nth$arity$2(null,i__7561_10415);
var map__7564_10417__$1 = cljs.core.__destructure_map(map__7564_10416);
var qualified_name_10418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7564_10417__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7564_10417__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10419 == null)){
var simple_name_10420 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10418,/\./));
nex.typechecker.env_add_class(env,simple_name_10420,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10420,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10418], null));
} else {
}


var G__10421 = seq__7558_10412;
var G__10422 = chunk__7559_10413;
var G__10423 = count__7560_10414;
var G__10424 = (i__7561_10415 + (1));
seq__7558_10412 = G__10421;
chunk__7559_10413 = G__10422;
count__7560_10414 = G__10423;
i__7561_10415 = G__10424;
continue;
} else {
var temp__5823__auto___10425 = cljs.core.seq(seq__7558_10412);
if(temp__5823__auto___10425){
var seq__7558_10426__$1 = temp__5823__auto___10425;
if(cljs.core.chunked_seq_QMARK_(seq__7558_10426__$1)){
var c__5673__auto___10427 = cljs.core.chunk_first(seq__7558_10426__$1);
var G__10428 = cljs.core.chunk_rest(seq__7558_10426__$1);
var G__10429 = c__5673__auto___10427;
var G__10430 = cljs.core.count(c__5673__auto___10427);
var G__10431 = (0);
seq__7558_10412 = G__10428;
chunk__7559_10413 = G__10429;
count__7560_10414 = G__10430;
i__7561_10415 = G__10431;
continue;
} else {
var map__7569_10436 = cljs.core.first(seq__7558_10426__$1);
var map__7569_10437__$1 = cljs.core.__destructure_map(map__7569_10436);
var qualified_name_10438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7569_10437__$1,new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846));
var source_10439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7569_10437__$1,new cljs.core.Keyword(null,"source","source",-433931539));
if((source_10439 == null)){
var simple_name_10441 = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(qualified_name_10438,/\./));
nex.typechecker.env_add_class(env,simple_name_10441,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),simple_name_10441,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"import","import",-1399500709),qualified_name_10438], null));
} else {
}


var G__10453 = cljs.core.next(seq__7558_10426__$1);
var G__10454 = null;
var G__10455 = (0);
var G__10456 = (0);
seq__7558_10412 = G__10453;
chunk__7559_10413 = G__10454;
count__7560_10414 = G__10455;
i__7561_10415 = G__10456;
continue;
}
} else {
}
}
break;
}

var seq__7570_10458 = cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7571_10459 = null;
var count__7572_10460 = (0);
var i__7573_10461 = (0);
while(true){
if((i__7573_10461 < count__7572_10460)){
var class_def_10466 = chunk__7571_10459.cljs$core$IIndexed$_nth$arity$2(null,i__7573_10461);
nex.typechecker.collect_class_info(env,class_def_10466);


var G__10471 = seq__7570_10458;
var G__10472 = chunk__7571_10459;
var G__10473 = count__7572_10460;
var G__10474 = (i__7573_10461 + (1));
seq__7570_10458 = G__10471;
chunk__7571_10459 = G__10472;
count__7572_10460 = G__10473;
i__7573_10461 = G__10474;
continue;
} else {
var temp__5823__auto___10475 = cljs.core.seq(seq__7570_10458);
if(temp__5823__auto___10475){
var seq__7570_10477__$1 = temp__5823__auto___10475;
if(cljs.core.chunked_seq_QMARK_(seq__7570_10477__$1)){
var c__5673__auto___10478 = cljs.core.chunk_first(seq__7570_10477__$1);
var G__10483 = cljs.core.chunk_rest(seq__7570_10477__$1);
var G__10484 = c__5673__auto___10478;
var G__10485 = cljs.core.count(c__5673__auto___10478);
var G__10486 = (0);
seq__7570_10458 = G__10483;
chunk__7571_10459 = G__10484;
count__7572_10460 = G__10485;
i__7573_10461 = G__10486;
continue;
} else {
var class_def_10488 = cljs.core.first(seq__7570_10477__$1);
nex.typechecker.collect_class_info(env,class_def_10488);


var G__10490 = cljs.core.next(seq__7570_10477__$1);
var G__10491 = null;
var G__10492 = (0);
var G__10493 = (0);
seq__7570_10458 = G__10490;
chunk__7571_10459 = G__10491;
count__7572_10460 = G__10492;
i__7573_10461 = G__10493;
continue;
}
} else {
}
}
break;
}

nex.typechecker.register_builtin_methods(env);

var seq__7578_10499 = cljs.core.seq(new cljs.core.Keyword(null,"var-types","var-types",1260023439).cljs$core$IFn$_invoke$arity$1(opts));
var chunk__7579_10500 = null;
var count__7580_10501 = (0);
var i__7581_10502 = (0);
while(true){
if((i__7581_10502 < count__7580_10501)){
var vec__7588_10504 = chunk__7579_10500.cljs$core$IIndexed$_nth$arity$2(null,i__7581_10502);
var var_name_10505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7588_10504,(0),null);
var var_type_10506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7588_10504,(1),null);
nex.typechecker.env_add_var(env,var_name_10505,var_type_10506);


var G__10516 = seq__7578_10499;
var G__10517 = chunk__7579_10500;
var G__10518 = count__7580_10501;
var G__10519 = (i__7581_10502 + (1));
seq__7578_10499 = G__10516;
chunk__7579_10500 = G__10517;
count__7580_10501 = G__10518;
i__7581_10502 = G__10519;
continue;
} else {
var temp__5823__auto___10524 = cljs.core.seq(seq__7578_10499);
if(temp__5823__auto___10524){
var seq__7578_10526__$1 = temp__5823__auto___10524;
if(cljs.core.chunked_seq_QMARK_(seq__7578_10526__$1)){
var c__5673__auto___10529 = cljs.core.chunk_first(seq__7578_10526__$1);
var G__10534 = cljs.core.chunk_rest(seq__7578_10526__$1);
var G__10535 = c__5673__auto___10529;
var G__10536 = cljs.core.count(c__5673__auto___10529);
var G__10537 = (0);
seq__7578_10499 = G__10534;
chunk__7579_10500 = G__10535;
count__7580_10501 = G__10536;
i__7581_10502 = G__10537;
continue;
} else {
var vec__7592_10539 = cljs.core.first(seq__7578_10526__$1);
var var_name_10540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7592_10539,(0),null);
var var_type_10541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7592_10539,(1),null);
nex.typechecker.env_add_var(env,var_name_10540,var_type_10541);


var G__10550 = cljs.core.next(seq__7578_10526__$1);
var G__10551 = null;
var G__10552 = (0);
var G__10553 = (0);
seq__7578_10499 = G__10550;
chunk__7579_10500 = G__10551;
count__7580_10501 = G__10552;
i__7581_10502 = G__10553;
continue;
}
} else {
}
}
break;
}

return nex.typechecker.check_expression(env,expr);
}catch (e7553){var _ = e7553;
return null;
}});

//# sourceMappingURL=nex.typechecker.js.map
