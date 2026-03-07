goog.provide('nex.core');
nex.core.repl_history_storage_key = "nex.browser.repl.history.v1";
nex.core.editor_files_storage_key = "nex.browser.editor.files.v1";
nex.core.editor_active_file_storage_key = "nex.browser.editor.active-file.v1";
nex.core.typecheck_storage_key = "nex.browser.repl.typecheck.v1";
nex.core.default_editor_source = (""+"-- Example program\n"+"let win := create Window.with_title(\"Nex Browser\", 640, 360)\n"+"win.show()\n"+"let t := create Turtle.on_window(win)\n"+"t.color(\"blue\")\n"+"t.forward(80.0)\n"+"t.right(120.0)\n"+"t.forward(80.0)\n"+"t.right(120.0)\n"+"t.forward(80.0)\n");
nex.core.nex_keywords = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 38, ["else",null,"retry",null,"of",null,"not",null,"class",null,"repeat",null,"elseif",null,"private",null,"ensure",null,"require",null,"fn",null,"note",null,"feature",null,"if",null,"let",null,"import",null,"or",null,"case",null,"inherit",null,"old",null,"when",null,"until",null,"raise",null,"function",null,"and",null,"do",null,"intern",null,"from",null,"across",null,"create",null,"with",null,"then",null,"rescue",null,"invariant",null,"as",null,"deferred",null,"end",null,"variant",null], null), null);
nex.core.nex_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, ["Void",null,"Turtle",null,"Char",null,"Map",null,"Real",null,"Decimal",null,"Any",null,"Integer64",null,"Integer",null,"String",null,"Window",null,"Cursor",null,"Function",null,"Image",null,"Array",null,"Boolean",null], null), null);
nex.core.nex_constants = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["false",null,"true",null,"nil",null], null), null);
nex.core.nex_builtins = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["exception",null,"println",null,"print",null,"result",null], null), null);
if((typeof nex !== 'undefined') && (typeof nex.core !== 'undefined') && (typeof nex.core.app_state !== 'undefined')){
} else {
nex.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"docs-page","docs-page",384100997),new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315),new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474),new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489)],[(0),cljs.core.PersistentArrayMap.EMPTY,false,false,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"<h3>1) First Program</h3>"+"<p>Start with a tiny program and comment syntax.</p>"+"<pre><code>print(\"Hello, Nex\")\n"+"-- This line is ignored by the compiler/interpreter\n"+"print(\"Hello again\")</code></pre>"+"<p>Use the REPL for short experiments and the editor for larger snippets.</p>"),(""+"<h3>2) Values, Variables, and Types</h3>"+"<p>Variables use <code>let</code> and assignment <code>:=</code>.</p>"+"<pre><code>let name: String := \"Ada\"\n"+"let age: Integer := 12\n"+"let height: Real := 1.52\n"+"let ok: Boolean := true\n\n"+"let x := 10\n"+"let y := x + 5\n"+"let maybe_name: ?String := nil</code></pre>"),(""+"<h3>3) Expressions and Control Flow</h3>"+"<pre><code>let a := 10 + 2 * 3\n"+"let b := (10 + 2) * 3\n"+"let same := a = b\n"+"let valid := (a &gt; 5) and not false</code></pre>"+"<p>Conditionals and expression-level choice:</p>"+"<pre><code>if age &gt;= 18 then\n"+"  print(\"adult\")\n"+"elseif age &gt;= 13 then\n"+"  print(\"teen\")\n"+"else\n"+"  print(\"child\")\n"+"end\n\n"+"let category := when age &gt;= 18 \"adult\" else \"minor\" end</code></pre>"+"<p><code>case/of</code> is also available for branch-by-value logic.</p>"),(""+"<h3>4) Repetition</h3>"+"<p>Nex loops from the tutorial: <code>from/until</code>, <code>repeat</code>, <code>across</code>.</p>"+"<pre><code>from\n"+"  let i: Integer := 1\n"+"until\n"+"  i &gt; 5\n"+"do\n"+"  print(i)\n"+"  i := i + 1\n"+"end</code></pre>"+"<pre><code>repeat 3 do\n"+"  print(\"tick\")\n"+"end\n\n"+"across [10, 20, 30] as x do\n"+"  print(x)\n"+"end</code></pre>"),(""+"<h3>5) Functions and Data Structures</h3>"+"<pre><code>function double(n: Integer): Integer\n"+"do\n"+"  result := n * 2\n"+"end\n\n"+"let inc := fn (n: Integer): Integer do\n"+"  result := n + 1\n"+"end</code></pre>"+"<p>Arrays and maps:</p>"+"<pre><code>let xs: Array [Integer] := [1, 2, 3]\n"+"print(xs.get(0))\n\n"+"let m: Map [String, String] := {\"name\": \"Nex\", \"kind\": \"language\"}\n"+"print(m.get(\"name\"))</code></pre>"),(""+"<h3>6) Classes, Generics, and Inheritance</h3>"+"<pre><code>class Counter\n"+"  create\n"+"    make(start: Integer) do\n"+"      this.value := start\n"+"    end\n\n"+"  feature\n"+"    value: Integer\n\n"+"    inc() do\n"+"      this.value := this.value + 1\n"+"    end\n"+"end\n\n"+"let c: Counter := create Counter.make(10)\n"+"c.inc</code></pre>"+"<p>Generics and inheritance are part of the core language and covered in detail in the full tutorial.</p>"),(""+"<h3>7) Contracts and Error Handling</h3>"+"<p>Nex supports Design by Contract with <code>require</code>, <code>ensure</code>, and <code>invariant</code>.</p>"+"<pre><code>spend(amount: Real)\n"+"  require\n"+"    enough: amount &lt;= money\n"+"  do\n"+"    money := money - amount\n"+"  ensure\n"+"    less: money = old money - amount\n"+"  end</code></pre>"+"<p>Error handling pattern:</p>"+"<pre><code>do\n"+"  raise \"not ready\"\n"+"rescue\n"+"  print(exception)\n"+"  retry\n"+"end</code></pre>"+"<p>In-app pages are synced to the flow in <code>docs/md/TUTORIAL.md</code>.</p>")], null),null,cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 1, ["scratch.nex",nex.core.default_editor_source], null),"",nex.interpreter.make_context(),"scratch.nex"]));
}
nex.core.by_id = (function nex$core$by_id(id){
return document.getElementById(id);
});
nex.core.storage_get = (function nex$core$storage_get(k){
try{return localStorage.getItem(k);
}catch (e7279){var _ = e7279;
return null;
}});
nex.core.storage_set_BANG_ = (function nex$core$storage_set_BANG_(k,v){
try{return localStorage.setItem(k,v);
}catch (e7280){var _ = e7280;
return null;
}});
nex.core.storage_get_edn = (function nex$core$storage_get_edn(k,fallback){
var temp__5821__auto__ = nex.core.storage_get(k);
if(cljs.core.truth_(temp__5821__auto__)){
var raw = temp__5821__auto__;
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(raw);
}catch (e7281){var _ = e7281;
return fallback;
}} else {
return fallback;
}
});
nex.core.persist_repl_history_BANG_ = (function nex$core$persist_repl_history_BANG_(){
var hist = new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
return nex.core.storage_set_BANG_(nex.core.repl_history_storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hist], 0)));
});
nex.core.persist_editor_state_BANG_ = (function nex$core$persist_editor_state_BANG_(){
var map__7283 = cljs.core.deref(nex.core.app_state);
var map__7283__$1 = cljs.core.__destructure_map(map__7283);
var editor_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7283__$1,new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955));
var editor_active_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7283__$1,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489));
nex.core.storage_set_BANG_(nex.core.editor_files_storage_key,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([editor_files], 0)));

return nex.core.storage_set_BANG_(nex.core.editor_active_file_storage_key,editor_active_file);
});
nex.core.persist_typecheck_state_BANG_ = (function nex$core$persist_typecheck_state_BANG_(){
return nex.core.storage_set_BANG_(nex.core.typecheck_storage_key,(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))?"on":"off"));
});
nex.core.load_storage_state_BANG_ = (function nex$core$load_storage_state_BANG_(){
var history__$1 = nex.core.storage_get_edn(nex.core.repl_history_storage_key,cljs.core.PersistentVector.EMPTY);
var files = nex.core.storage_get_edn(nex.core.editor_files_storage_key,null);
var active_file = (function (){var or__5142__auto__ = nex.core.storage_get(nex.core.editor_active_file_storage_key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "scratch.nex";
}
})();
var typecheck_raw = nex.core.storage_get(nex.core.typecheck_storage_key);
var typecheck_enabled_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("on",typecheck_raw);
var safe_history = ((cljs.core.vector_QMARK_(history__$1))?history__$1:cljs.core.PersistentVector.EMPTY);
var safe_files = ((((cljs.core.map_QMARK_(files)) && (cljs.core.seq(files))))?files:new cljs.core.PersistentArrayMap(null, 1, ["scratch.nex",nex.core.default_editor_source], null));
var safe_active = ((cljs.core.contains_QMARK_(safe_files,active_file))?active_file:cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(safe_files))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),safe_history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315),typecheck_enabled_QMARK_,new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),safe_files,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489),safe_active], 0));
});
nex.core.append_line_BANG_ = (function nex$core$append_line_BANG_(kind,text){
var out = nex.core.by_id("repl-output");
var line = document.createElement("div");
(line.className = (""+"repl-line "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)));

(line.textContent = text);

out.appendChild(line);

return (out.scrollTop = out.scrollHeight);
});
nex.core.update_typecheck_ui_BANG_ = (function nex$core$update_typecheck_ui_BANG_(){
var enabled_QMARK_ = new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
var btn = nex.core.by_id("repl-typecheck");
if(cljs.core.truth_(btn)){
(btn.textContent = (""+"Typecheck: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(enabled_QMARK_)?"ON":"OFF"))));

return (btn.className = (""+"toggle "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(enabled_QMARK_)?"on":"off"))));
} else {
return null;
}
});
nex.core.toggle_typecheck_BANG_ = (function nex$core$toggle_typecheck_BANG_(){
var enabled_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315),enabled_QMARK_);

nex.core.persist_typecheck_state_BANG_();

nex.core.update_typecheck_ui_BANG_();

return nex.core.append_line_BANG_("info",(""+"Type checking "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((enabled_QMARK_)?"enabled.":"disabled."))));
});
nex.core.throw_type_errors_BANG_ = (function nex$core$throw_type_errors_BANG_(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))){
return null;
} else {
var errors = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var msg = ((cljs.core.seq(errors))?(""+"Type check failed:\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.typechecker.format_type_error,errors)))):"Type check failed.");
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"typecheck","typecheck",1714186884),new cljs.core.Keyword(null,"errors","errors",-908790718),errors], null));
}
});
nex.core.typecheck_ast_BANG_ = (function nex$core$typecheck_ast_BANG_(ast){
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
return nex.core.throw_type_errors_BANG_(nex.typechecker.type_check.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-types","var-types",1260023439),new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state))], null)));
} else {
return null;
}
});
nex.core.typecheck_error_QMARK_ = (function nex$core$typecheck_error_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"typecheck","typecheck",1714186884),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)));
});
nex.core.remember_typed_lets_BANG_ = (function nex$core$remember_typed_lets_BANG_(stmts){
var seq__7297 = cljs.core.seq(stmts);
var chunk__7298 = null;
var count__7299 = (0);
var i__7300 = (0);
while(true){
if((i__7300 < count__7299)){
var stmt = chunk__7298.cljs$core$IIndexed$_nth$arity$2(null,i__7300);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(stmt);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt));
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt)], null),new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt));
} else {
}


var G__9552 = seq__7297;
var G__9553 = chunk__7298;
var G__9554 = count__7299;
var G__9555 = (i__7300 + (1));
seq__7297 = G__9552;
chunk__7298 = G__9553;
count__7299 = G__9554;
i__7300 = G__9555;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7297);
if(temp__5823__auto__){
var seq__7297__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7297__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7297__$1);
var G__9560 = cljs.core.chunk_rest(seq__7297__$1);
var G__9561 = c__5673__auto__;
var G__9562 = cljs.core.count(c__5673__auto__);
var G__9563 = (0);
seq__7297 = G__9560;
chunk__7298 = G__9561;
count__7299 = G__9562;
i__7300 = G__9563;
continue;
} else {
var stmt = cljs.core.first(seq__7297__$1);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(stmt);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt));
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt)], null),new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt));
} else {
}


var G__9574 = cljs.core.next(seq__7297__$1);
var G__9575 = null;
var G__9576 = (0);
var G__9577 = (0);
seq__7297 = G__9574;
chunk__7298 = G__9575;
count__7299 = G__9576;
i__7300 = G__9577;
continue;
}
} else {
return null;
}
}
break;
}
});
nex.core.escape_html = (function nex$core$escape_html(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(s,"&","&amp;"),"<","&lt;"),">","&gt;");
});
nex.core.token_html = (function nex$core$token_html(tok){
var esc = nex.core.escape_html(tok);
if(clojure.string.starts_with_QMARK_(tok,"\"")){
return (""+"<span class='tok-str'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9]+(\.[0-9]+)?$/,tok))){
return (""+"<span class='tok-num'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.truth_((function (){var fexpr__7390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["->",null,":=",null], null), null);
return (fexpr__7390.cljs$core$IFn$_invoke$arity$1 ? fexpr__7390.cljs$core$IFn$_invoke$arity$1(tok) : fexpr__7390.call(null,tok));
})())){
return (""+"<span class='tok-op'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.truth_(cljs.core.re_matches(/^[A-Za-z_][A-Za-z0-9_]*$/,tok))){
if(cljs.core.contains_QMARK_(nex.core.nex_keywords,tok)){
return (""+"<span class='tok-kw'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.contains_QMARK_(nex.core.nex_types,tok)){
return (""+"<span class='tok-type'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.contains_QMARK_(nex.core.nex_constants,tok)){
return (""+"<span class='tok-const'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
if(cljs.core.contains_QMARK_(nex.core.nex_builtins,tok)){
return (""+"<span class='tok-builtin'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc)+"</span>");
} else {
return esc;

}
}
}
}
} else {
return esc;

}
}
}
}
});
nex.core.highlight_code_html = (function nex$core$highlight_code_html(source){
var source_STAR_ = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source));
var line_html = (function (line){
var comment_idx = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(line,"--");
var code_part = (((!((comment_idx == null))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,(0),comment_idx):line);
var comment_part = (((!((comment_idx == null))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,comment_idx):null);
var parts = cljs.core.re_seq(/(?:\"(?:[^\"\\]|\\.)*\"|->|:=|[A-Za-z_][A-Za-z0-9_]*|[0-9]+(?:\.[0-9]+)?|\s+|.)/,code_part);
var code_html = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.core.token_html,parts));
var comment_html = (cljs.core.truth_(comment_part)?(""+"<span class='tok-comment'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(nex.core.escape_html(comment_part))+"</span>"):null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_html)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = comment_html;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()));
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(line_html,clojure.string.split.cljs$core$IFn$_invoke$arity$3(source_STAR_,/\n/,(-1))));
});
nex.core.update_editor_highlight_BANG_ = (function nex$core$update_editor_highlight_BANG_(){
try{var editor = nex.core.by_id("editor-input");
var hl = nex.core.by_id("editor-highlight");
if(cljs.core.truth_((function (){var and__5140__auto__ = editor;
if(cljs.core.truth_(and__5140__auto__)){
return hl;
} else {
return and__5140__auto__;
}
})())){
return (hl.innerHTML = nex.core.highlight_code_html(editor.value));
} else {
return null;
}
}catch (e7440){var e = e7440;
return console.error("Highlight error:",e);
}});
nex.core.parser_debug_info = (function nex$core$parser_debug_info(){
var cljs_mods = (function (){var or__5142__auto__ = $CLJS;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return ({});
}
})();
var shadow_js = shadow.js;
var shadow_require = (function (module_id){
try{if(cljs.core.truth_(shadow_js)){
return shadow_js.require(module_id,({}));
} else {
return null;
}
}catch (e7465){var _ = e7465;
return null;
}});
return (""+"parser-debug: "+"global-lexer="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(typeof module$nex$parser_js$grammar$nexlangLexer !== 'undefined'))+", global-parser="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(typeof module$nex$parser_js$grammar$nexlangParser !== 'undefined'))+", cljs-lexer="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$((cljs_mods["module$nex$parser_js$grammar$nexlangLexer"])))+", cljs-parser="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$((cljs_mods["module$nex$parser_js$grammar$nexlangParser"])))+", require-antlr="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(shadow_require("module$node_modules$antlr4$dist$antlr4_web_cjs")))+", require-lexer="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$((function (){var or__5142__auto__ = shadow_require("module$nex$parser_js$grammar$nexlangLexer");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return shadow_require("module$nex$parser_js$grammar$nexlangLexer.js");
}
})()))+", require-parser="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$((function (){var or__5142__auto__ = shadow_require("module$nex$parser_js$grammar$nexlangParser");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return shadow_require("module$nex$parser_js$grammar$nexlangParser.js");
}
})()))+", tag-listener-loaded="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_listener_loaded))+", tag-lexer-loaded="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_lexer_loaded))+", tag-parser-loaded="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_parser_loaded))+", tag-listener-error="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_listener_error))+", tag-lexer-error="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_lexer_error))+", tag-parser-error="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_parser_error))+", tag-listener-ex="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_listener_exception;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", tag-lexer-ex="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_lexer_exception;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", tag-parser-ex="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_parser_exception;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", tag-listener-status="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_listener_status;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", tag-lexer-status="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_lexer_status;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", tag-parser-status="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = window.__nex_parser_status;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "none";
}
})())+", antlr-ready="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_antlr_ready))+", bootstrap-timeout="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nex_parser_bootstrap_timeout))+", win-lexer="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nexlangLexer))+", win-parser="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(window.__nexlangParser)));
});
nex.core.clear_repl_output_BANG_ = (function nex$core$clear_repl_output_BANG_(){
return (nex.core.by_id("repl-output").innerHTML = "");
});
nex.core.clamp_history_index = (function nex$core$clamp_history_index(idx,hist){
var max_idx = (cljs.core.count(hist) - (1));
if((max_idx < (0))){
return null;
} else {
if((idx < (0))){
return (0);
} else {
if((idx > max_idx)){
return max_idx;
} else {
return idx;

}
}
}
});
nex.core.push_repl_history_BANG_ = (function nex$core$push_repl_history_BANG_(entry){
var trimmed = clojure.string.trim(entry);
if(clojure.string.blank_QMARK_(trimmed)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nex.core.app_state,(function (s){
var old = new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534).cljs$core$IFn$_invoke$arity$1(s);
var no_dupe = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed,cljs.core.last(old)))?old:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old,trimmed));
var capped = (((cljs.core.count(no_dupe) > (200)))?cljs.core.vec(cljs.core.take_last((200),no_dupe)):no_dupe);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),capped,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),null,new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616),""], 0));
}));

return nex.core.persist_repl_history_BANG_();
}
});
nex.core.set_repl_input_value_BANG_ = (function nex$core$set_repl_input_value_BANG_(v){
var input_el = nex.core.by_id("repl-input");
(input_el.value = v);

var pos = cljs.core.count(v);
return input_el.setSelectionRange(pos,pos);
});
nex.core.navigate_repl_history_BANG_ = (function nex$core$navigate_repl_history_BANG_(direction){
var map__7637 = cljs.core.deref(nex.core.app_state);
var map__7637__$1 = cljs.core.__destructure_map(map__7637);
var repl_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7637__$1,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534));
var repl_history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7637__$1,new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671));
var repl_history_draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7637__$1,new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616));
var input_el = nex.core.by_id("repl-input");
var current_input = input_el.value;
var n = cljs.core.count(repl_history);
if((n > (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"up","up",-269712113))){
var base_idx = (((repl_history_index == null))?n:repl_history_index);
var next_idx = nex.core.clamp_history_index((base_idx - (1)),repl_history);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),next_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616),(((repl_history_index == null))?current_input:repl_history_draft)], 0));

return nex.core.set_repl_input_value_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(repl_history,next_idx));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"down","down",1565245570))){
if((repl_history_index == null)){
return null;
} else {
var next_idx = (repl_history_index + (1));
if((next_idx >= n)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),null);

return nex.core.set_repl_input_value_BANG_(repl_history_draft);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),next_idx);

return nex.core.set_repl_input_value_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(repl_history,next_idx));
}
}
} else {
return null;
}
}
} else {
return null;
}
});
nex.core.set_active_editor_file_BANG_ = (function nex$core$set_active_editor_file_BANG_(filename){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),filename], null));
if(cljs.core.truth_(temp__5823__auto__)){
var content = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489),filename,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),null], 0));

(nex.core.by_id("editor-input").value = content);

nex.core.update_editor_highlight_BANG_();

nex.core.persist_editor_state_BANG_();

return (nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0 ? nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0() : nex.core.update_active_file_label_BANG_.call(null));
} else {
return null;
}
});
nex.core.sanitize_filename = (function nex$core$sanitize_filename(s){
var trimmed = clojure.string.trim(s);
if(clojure.string.blank_QMARK_(trimmed)){
return "scratch.nex";
} else {
return trimmed;
}
});
nex.core.fs_access_supported_QMARK_ = (function nex$core$fs_access_supported_QMARK_(){
return ((cljs.core.fn_QMARK_(window.showOpenFilePicker)) && (cljs.core.fn_QMARK_(window.showSaveFilePicker)));
});
nex.core.nex_picker_types = (function nex$core$nex_picker_types(){
return cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Nex source files",new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 1, ["text/plain",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".nex",".txt"], null)], null)], null)], null));
});
nex.core.snapshot_active_editor_BANG_ = (function nex$core$snapshot_active_editor_BANG_(){
var active = nex.core.sanitize_filename(new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)));
var content = nex.core.by_id("editor-input").value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),active], null),content);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489),active);

nex.core.persist_editor_state_BANG_();

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),active,new cljs.core.Keyword(null,"content","content",15833224),content], null);
});
nex.core.apply_opened_file_BANG_ = (function nex$core$apply_opened_file_BANG_(filename,content,handle){
var safe_name = nex.core.sanitize_filename(filename);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),safe_name], null),content);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489),safe_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),handle], 0));

nex.core.persist_editor_state_BANG_();

(nex.core.by_id("editor-input").value = content);

nex.core.update_editor_highlight_BANG_();

(nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0 ? nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0() : nex.core.update_active_file_label_BANG_.call(null));

return nex.core.append_line_BANG_("info",(""+"Loaded '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(safe_name)+"' from filesystem."));
});
nex.core.report_file_error_BANG_ = (function nex$core$report_file_error_BANG_(prefix,err){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("AbortError",err.name)){
return null;
} else {
return nex.core.append_line_BANG_("err",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = err.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return err;
}
})())));
}
});
nex.core.open_file_with_handle_BANG_ = (function nex$core$open_file_with_handle_BANG_(handle){
return handle.getFile().then((function (file){
return file.text().then((function (text){
return nex.core.apply_opened_file_BANG_((function (){var or__5142__auto__ = file.name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "scratch.nex";
}
})(),text,handle);
})).catch((function (err){
return nex.core.report_file_error_BANG_("Open failed",err);
}));
})).catch((function (err){
return nex.core.report_file_error_BANG_("Open failed",err);
}));
});
nex.core.open_file_via_input_BANG_ = (function nex$core$open_file_via_input_BANG_(){
var temp__5821__auto__ = nex.core.by_id("open-file-input");
if(cljs.core.truth_(temp__5821__auto__)){
var input = temp__5821__auto__;
(input.value = "");

return input.click();
} else {
return nex.core.append_line_BANG_("err","Open failed: file input not available.");
}
});
nex.core.choose_file_to_open = (function nex$core$choose_file_to_open(){
if(nex.core.fs_access_supported_QMARK_()){
return window.showOpenFilePicker(({"multiple": false, "types": nex.core.nex_picker_types()})).then((function (handles){
var temp__5823__auto__ = (handles[(0)]);
if(cljs.core.truth_(temp__5823__auto__)){
var handle = temp__5823__auto__;
return nex.core.open_file_with_handle_BANG_(handle);
} else {
return null;
}
})).catch((function (err){
return nex.core.report_file_error_BANG_("Open failed",err);
}));
} else {
return nex.core.open_file_via_input_BANG_();
}
});
nex.core.trigger_download_BANG_ = (function nex$core$trigger_download_BANG_(filename,content){
var blob = (new Blob([content],({"type": "text/plain;charset=utf-8"})));
var url = URL.createObjectURL(blob);
var a = document.createElement("a");
(a.href = url);

(a.download = filename);

(a.style.display = "none");

document.body.appendChild(a);

a.click();

a.remove();

return URL.revokeObjectURL(url);
});
nex.core.finalize_file_save_BANG_ = (function nex$core$finalize_file_save_BANG_(filename,chosen_name,content,handle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(nex.core.app_state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),(function (files){
var files_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5140__auto__ = filename;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(filename,chosen_name);
} else {
return and__5140__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(files,filename):files);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(files_SINGLEQUOTE_,chosen_name,content);
})),new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489),chosen_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),handle], 0));
}));

nex.core.persist_editor_state_BANG_();

(nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0 ? nex.core.update_active_file_label_BANG_.cljs$core$IFn$_invoke$arity$0() : nex.core.update_active_file_label_BANG_.call(null));

return nex.core.append_line_BANG_("info",(""+"Saved '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chosen_name)+"' to filesystem."));
});
nex.core.write_file_handle_BANG_ = (function nex$core$write_file_handle_BANG_(handle,filename,content){
var chosen_name = nex.core.sanitize_filename((function (){var or__5142__auto__ = handle.name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return filename;
}
})());
return handle.createWritable().then((function (writable){
return writable.write(content).then((function (_){
return writable.close().then((function (___$1){
return nex.core.finalize_file_save_BANG_(filename,chosen_name,content,handle);
}));
})).catch((function (err){
return nex.core.report_file_error_BANG_("Save failed",err);
}));
})).catch((function (err){
return nex.core.report_file_error_BANG_("Save failed",err);
}));
});
nex.core.save_current_file_BANG_ = (function nex$core$save_current_file_BANG_(){
var map__8051 = nex.core.snapshot_active_editor_BANG_();
var map__8051__$1 = cljs.core.__destructure_map(map__8051);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8051__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8051__$1,new cljs.core.Keyword(null,"content","content",15833224));
var existing_handle = new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
if(nex.core.fs_access_supported_QMARK_()){
if(cljs.core.truth_(existing_handle)){
return nex.core.write_file_handle_BANG_(existing_handle,filename,content);
} else {
return window.showSaveFilePicker(({"suggestedName": filename, "types": nex.core.nex_picker_types()})).then((function (handle){
if(cljs.core.truth_(handle)){
return nex.core.write_file_handle_BANG_(handle,filename,content);
} else {
return null;
}
})).catch((function (err){
return nex.core.report_file_error_BANG_("Save failed",err);
}));
}
} else {
nex.core.trigger_download_BANG_(filename,content);

return nex.core.append_line_BANG_("info",(""+"Downloaded '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)+"' (browser fallback)."));
}
});
nex.core.create_new_file_BANG_ = (function nex$core$create_new_file_BANG_(){
var suggested = (""+"file"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state))) + (1)))+".nex");
var input = prompt("New file name:",suggested);
if((!((input == null)))){
var filename = nex.core.sanitize_filename(input);
var exists_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)),filename);
var overwrite_QMARK_ = (function (){var or__5142__auto__ = (!(exists_QMARK_));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return confirm((""+"File '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)+"' already exists. Overwrite?"));
}
})();
if(cljs.core.truth_(overwrite_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),filename], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),null);

nex.core.set_active_editor_file_BANG_(filename);

nex.core.persist_editor_state_BANG_();

return nex.core.append_line_BANG_("info",(""+"Created '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)+"'."));
} else {
return null;
}
} else {
return null;
}
});
nex.core.line_opens_block_QMARK_ = (function nex$core$line_opens_block_QMARK_(trimmed){
var or__5142__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed,"feature");
if(or__5142__auto__){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed,"create");
if(or__5142__auto____$1){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trimmed,"private feature");
if(or__5142__auto____$2){
return or__5142__auto____$2;
} else {
return cljs.core.some((function (p1__8100_SHARP_){
return clojure.string.ends_with_QMARK_(trimmed,p1__8100_SHARP_);
}),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, ["class","do","then","else","elseif","require","ensure","from","until","inherit","invariant","variant","rescue","of"], null));
}
}
}
});
nex.core.line_closes_block_QMARK_ = (function nex$core$line_closes_block_QMARK_(trimmed){
return ((clojure.string.starts_with_QMARK_(trimmed,"end")) || (((clojure.string.starts_with_QMARK_(trimmed,"else")) || (((clojure.string.starts_with_QMARK_(trimmed,"elseif")) || (clojure.string.starts_with_QMARK_(trimmed,"rescue")))))));
});
nex.core.auto_format_source = (function nex$core$auto_format_source(source){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source)),/\n/,(-1));
var remaining = lines;
var indent_level = (0);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",acc);
} else {
var line = cljs.core.first(remaining);
var trimmed = clojure.string.trim(line);
if(clojure.string.blank_QMARK_(trimmed)){
var G__9776 = cljs.core.rest(remaining);
var G__9777 = indent_level;
var G__9778 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,"");
remaining = G__9776;
indent_level = G__9777;
acc = G__9778;
continue;
} else {
var before_level = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),((nex.core.line_closes_block_QMARK_(trimmed))?(indent_level - (1)):indent_level));
var formatted = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((2) * before_level)," ")))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed));
var after_level = (cljs.core.truth_((function (){var and__5140__auto__ = nex.core.line_opens_block_QMARK_(trimmed);
if(cljs.core.truth_(and__5140__auto__)){
return (!(clojure.string.starts_with_QMARK_(trimmed,"end")));
} else {
return and__5140__auto__;
}
})())?(before_level + (1)):before_level);
var G__9789 = cljs.core.rest(remaining);
var G__9790 = after_level;
var G__9791 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,formatted);
remaining = G__9789;
indent_level = G__9790;
acc = G__9791;
continue;
}
}
break;
}
});
nex.core.format_editor_BANG_ = (function nex$core$format_editor_BANG_(){
var editor = nex.core.by_id("editor-input");
var formatted = nex.core.auto_format_source(editor.value);
(editor.value = formatted);

nex.core.update_editor_highlight_BANG_();

return nex.core.append_line_BANG_("info","Formatted editor buffer.");
});
nex.core.count_leading_spaces = (function nex$core$count_leading_spaces(s){
return cljs.core.count(cljs.core.re_find(/^ */,s));
});
nex.core.previous_non_empty_line = (function nex$core$previous_non_empty_line(lines,idx){
var i = (idx - (1));
while(true){
if((i >= (0))){
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,i);
var t = clojure.string.trim(line);
if(clojure.string.blank_QMARK_(t)){
var G__9806 = (i - (1));
i = G__9806;
continue;
} else {
return line;
}
} else {
return null;
}
break;
}
});
nex.core.next_non_empty_line = (function nex$core$next_non_empty_line(lines,idx){
var i = idx;
while(true){
if((i < cljs.core.count(lines))){
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,i);
var t = clojure.string.trim(line);
if(clojure.string.blank_QMARK_(t)){
var G__9818 = (i + (1));
i = G__9818;
continue;
} else {
return line;
}
} else {
return null;
}
break;
}
});
nex.core.line_without_comment = (function nex$core$line_without_comment(line){
var temp__5821__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(line,"--");
if(cljs.core.truth_(temp__5821__auto__)){
var idx = temp__5821__auto__;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,(0),idx);
} else {
return line;
}
});
nex.core.do_opener_line_QMARK_ = (function nex$core$do_opener_line_QMARK_(trimmed){
return cljs.core.boolean$(cljs.core.re_find(/\bdo$/,trimmed));
});
nex.core.if_opener_line_QMARK_ = (function nex$core$if_opener_line_QMARK_(trimmed){
return cljs.core.boolean$(cljs.core.re_find(/^if\b.*\bthen$/,trimmed));
});
nex.core.else_opener_line_QMARK_ = (function nex$core$else_opener_line_QMARK_(trimmed){
return ((clojure.string.starts_with_QMARK_(trimmed,"else")) || (clojure.string.starts_with_QMARK_(trimmed,"elseif")));
});
nex.core.should_auto_scaffold_end_QMARK_ = (function nex$core$should_auto_scaffold_end_QMARK_(source_trim,current_line_suffix,has_end_below_QMARK_){
return ((clojure.string.blank_QMARK_(current_line_suffix)) && (((cljs.core.not(has_end_below_QMARK_)) && (((nex.core.do_opener_line_QMARK_(source_trim)) || (((nex.core.if_opener_line_QMARK_(source_trim)) || (nex.core.else_opener_line_QMARK_(source_trim)))))))));
});
nex.core.editor_auto_indent_enter_BANG_ = (function nex$core$editor_auto_indent_enter_BANG_(){
var editor = nex.core.by_id("editor-input");
var value = editor.value;
var caret = editor.selectionStart;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),caret);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,caret);
var lines_before = clojure.string.split.cljs$core$IFn$_invoke$arity$3(before,/\n/,(-1));
var lines_after = clojure.string.split.cljs$core$IFn$_invoke$arity$3(after,/\n/,(-1));
var current_line_suffix = cljs.core.first(lines_after);
var next_after_line = nex.core.next_non_empty_line(lines_after,(1));
var current_line = (function (){var or__5142__auto__ = cljs.core.last(lines_before);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var prev_line = (function (){var or__5142__auto__ = nex.core.previous_non_empty_line(lines_before,cljs.core.count(lines_before));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var current_code_trim = clojure.string.trim(nex.core.line_without_comment(current_line));
var next_after_trim = (function (){var G__8476 = next_after_line;
var G__8476__$1 = (((G__8476 == null))?null:nex.core.line_without_comment(G__8476));
if((G__8476__$1 == null)){
return null;
} else {
return clojure.string.trim(G__8476__$1);
}
})();
var prev_code_trim = clojure.string.trim(nex.core.line_without_comment(prev_line));
var current_indent = nex.core.count_leading_spaces(current_line);
var prev_indent = nex.core.count_leading_spaces(prev_line);
var source_trim = ((clojure.string.blank_QMARK_(current_code_trim))?prev_code_trim:current_code_trim);
var source_indent = ((clojure.string.blank_QMARK_(current_code_trim))?prev_indent:current_indent);
var has_end_below_QMARK_ = (((!((next_after_trim == null)))) && (clojure.string.starts_with_QMARK_(next_after_trim,"end")));
var next_indent = ((((clojure.string.starts_with_QMARK_(source_trim,"else")) || (((clojure.string.starts_with_QMARK_(source_trim,"elseif")) || (clojure.string.starts_with_QMARK_(source_trim,"rescue"))))))?(source_indent + (2)):((clojure.string.starts_with_QMARK_(source_trim,"end"))?cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(source_indent - (2))):(cljs.core.truth_(nex.core.line_opens_block_QMARK_(source_trim))?(source_indent + (2)):source_indent
)));
var scaffold_end_QMARK_ = nex.core.should_auto_scaffold_end_QMARK_(source_trim,current_line_suffix,has_end_below_QMARK_);
var indent_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(next_indent," "));
var end_indent_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(source_indent," "));
var inserted = ((scaffold_end_QMARK_)?(""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent_str)+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_indent_str)+"end"):(""+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(indent_str)));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(before)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inserted)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(after));
var new_caret = ((caret + (1)) + cljs.core.count(indent_str));
(editor.value = new_value);

editor.setSelectionRange(new_caret,new_caret);

return nex.core.update_editor_highlight_BANG_();
});
nex.core.editor_indent_selection_BANG_ = (function nex$core$editor_indent_selection_BANG_(direction){
var editor = nex.core.by_id("editor-input");
var value = editor.value;
var start = editor.selectionStart;
var end = editor.selectionEnd;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var selected = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,start,end);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(selected,/\n/,(-1));
var shifted = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
var G__8516 = direction;
var G__8516__$1 = (((G__8516 instanceof cljs.core.Keyword))?G__8516.fqn:null);
switch (G__8516__$1) {
case "right":
return (""+"  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line));

break;
case "left":
if(clojure.string.starts_with_QMARK_(line,"  ")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(2));
} else {
if(clojure.string.starts_with_QMARK_(line," ")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(1));
} else {
return line;
}
}

break;
default:
return line;

}
}),lines);
var new_selected = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",shifted);
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(before)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_selected)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(after));
var delta = (((new_selected).length) - ((selected).length));
(editor.value = new_value);

editor.setSelectionRange(start,(end + delta));

return nex.core.update_editor_highlight_BANG_();
});
nex.core.editor_maybe_dedent_control_line_BANG_ = (function nex$core$editor_maybe_dedent_control_line_BANG_(){
var editor = nex.core.by_id("editor-input");
var value = editor.value;
var caret = editor.selectionStart;
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),caret);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,caret);
var lines_before = clojure.string.split.cljs$core$IFn$_invoke$arity$3(before,/\n/,(-1));
var current_fragment = (function (){var or__5142__auto__ = cljs.core.last(lines_before);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var current_line_full = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_fragment)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$3(after,/\n/,(-1)))));
var current_trim = clojure.string.trim(nex.core.line_without_comment(current_line_full));
if(cljs.core.truth_(cljs.core.re_find(/^(else|elseif|rescue|end)\b/,current_trim))){
var line_idx = (cljs.core.count(lines_before) - (1));
var all_lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(value,/\n/,(-1));
var prev_line = (function (){var or__5142__auto__ = nex.core.previous_non_empty_line(all_lines,line_idx);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})();
var prev_indent = nex.core.count_leading_spaces(prev_line);
var target_indent = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(prev_indent - (2)));
var desired_prefix = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(target_indent," "));
var desired_line = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_trim));
var current_leading = nex.core.count_leading_spaces(current_line_full);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_line_full,desired_line)){
var line_start = (caret - cljs.core.count(current_fragment));
var line_end = (line_start + ((current_line_full).length));
var new_value = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),line_start))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(desired_line)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,line_end)));
var caret_delta = (target_indent - current_leading);
var new_caret = cljs.core.max.cljs$core$IFn$_invoke$arity$2(line_start,(caret + caret_delta));
(editor.value = new_value);

editor.setSelectionRange(new_caret,new_caret);

return nex.core.update_editor_highlight_BANG_();
} else {
return null;
}
} else {
return null;
}
});
nex.core.fmt_value = (function nex$core$fmt_value(v){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(v);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v);
} else {
return and__5140__auto__;
}
})())){
return (""+"#<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258).cljs$core$IFn$_invoke$arity$1(v)))+">");
} else {
if(cljs.core.truth_(cljs.core.array_QMARK_(v))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(v)], 0));
} else {
if((v instanceof Map)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function nex$core$fmt_value_$_iter__8688(s__8689){
return (new cljs.core.LazySeq(null,(function (){
var s__8689__$1 = s__8689;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__8689__$1);
if(temp__5823__auto__){
var s__8689__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8689__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__8689__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__8696 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__8694 = (0);
while(true){
if((i__8694 < size__5627__auto__)){
var entry = cljs.core._nth(c__5626__auto__,i__8694);
cljs.core.chunk_append(b__8696,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(entry[(0)]),(entry[(1)])], null));

var G__9845 = (i__8694 + (1));
i__8694 = G__9845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8696),nex$core$fmt_value_$_iter__8688(cljs.core.chunk_rest(s__8689__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8696),null);
}
} else {
var entry = cljs.core.first(s__8689__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(entry[(0)]),(entry[(1)])], null),nex$core$fmt_value_$_iter__8688(cljs.core.rest(s__8689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(Array.from(v.entries()));
})())], 0));
} else {
if(typeof v === 'string'){
return v;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));

}
}
}
}
});
nex.core.looks_like_definition_QMARK_ = (function nex$core$looks_like_definition_QMARK_(input){
return cljs.core.boolean$(cljs.core.re_find(/^\s*(class|function|import|intern)\b/,input));
});
nex.core.wrap_expression = (function nex$core$wrap_expression(input){
return (""+"class __BrowserRepl__\n"+"feature\n"+"  __eval__() do\n"+"    "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)+"\n"+"  end\n"+"end");
});
nex.core.wrap_statement_block = (function nex$core$wrap_statement_block(input){
return (""+"class __BrowserRepl__\n"+"feature\n"+"  __eval__() do\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)+"\n"+"  end\n"+"end");
});
nex.core.eval_wrapped_BANG_ = (function nex$core$eval_wrapped_BANG_(ctx,wrapped_code){
var ast = nex.parser.ast(wrapped_code);
var _ = nex.core.typecheck_ast_BANG_(ast);
var method_def = cljs.core.first(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ast))))));
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
var result = cljs.core.last(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8818_SHARP_){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,p1__8818_SHARP_);
}),body));
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
nex.core.remember_typed_lets_BANG_(body);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
});
nex.core.run_program_BANG_ = (function nex$core$run_program_BANG_(ctx,source){
var ast = nex.parser.ast(source);
var _ = nex.core.typecheck_ast_BANG_(ast);
var raw_result = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,ast);
var result = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?null:raw_result);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
});
nex.core.show_runtime_output_BANG_ = (function nex$core$show_runtime_output_BANG_(output,result){
var seq__8865_9846 = cljs.core.seq(output);
var chunk__8866_9847 = null;
var count__8867_9848 = (0);
var i__8868_9849 = (0);
while(true){
if((i__8868_9849 < count__8867_9848)){
var line_9850 = chunk__8866_9847.cljs$core$IIndexed$_nth$arity$2(null,i__8868_9849);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_9850)));


var G__9851 = seq__8865_9846;
var G__9852 = chunk__8866_9847;
var G__9853 = count__8867_9848;
var G__9854 = (i__8868_9849 + (1));
seq__8865_9846 = G__9851;
chunk__8866_9847 = G__9852;
count__8867_9848 = G__9853;
i__8868_9849 = G__9854;
continue;
} else {
var temp__5823__auto___9855 = cljs.core.seq(seq__8865_9846);
if(temp__5823__auto___9855){
var seq__8865_9856__$1 = temp__5823__auto___9855;
if(cljs.core.chunked_seq_QMARK_(seq__8865_9856__$1)){
var c__5673__auto___9857 = cljs.core.chunk_first(seq__8865_9856__$1);
var G__9858 = cljs.core.chunk_rest(seq__8865_9856__$1);
var G__9859 = c__5673__auto___9857;
var G__9860 = cljs.core.count(c__5673__auto___9857);
var G__9861 = (0);
seq__8865_9846 = G__9858;
chunk__8866_9847 = G__9859;
count__8867_9848 = G__9860;
i__8868_9849 = G__9861;
continue;
} else {
var line_9862 = cljs.core.first(seq__8865_9856__$1);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_9862)));


var G__9863 = cljs.core.next(seq__8865_9856__$1);
var G__9864 = null;
var G__9865 = (0);
var G__9866 = (0);
seq__8865_9846 = G__9863;
chunk__8866_9847 = G__9864;
count__8867_9848 = G__9865;
i__8868_9849 = G__9866;
continue;
}
} else {
}
}
break;
}

if((((!((result == null)))) && (cljs.core.empty_QMARK_(output)))){
return nex.core.append_line_BANG_("result",nex.core.fmt_value(result));
} else {
return null;
}
});
nex.core.eval_repl_input_BANG_ = (function nex$core$eval_repl_input_BANG_(){
var input_el = nex.core.by_id("repl-input");
var source = input_el.value;
var trimmed = clojure.string.trim(source);
var ctx = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
if(clojure.string.blank_QMARK_(trimmed)){
return null;
} else {
nex.core.push_repl_history_BANG_(trimmed);

nex.core.append_line_BANG_("input",(""+"nex> "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed)));

(input_el.value = "");

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.PersistentVector.EMPTY);

try{if(nex.core.looks_like_definition_QMARK_(trimmed)){
var map__9004 = nex.core.run_program_BANG_(ctx,trimmed);
var map__9004__$1 = cljs.core.__destructure_map(map__9004);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9004__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9004__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var seq__9015_9867 = cljs.core.seq(output);
var chunk__9016_9868 = null;
var count__9017_9869 = (0);
var i__9018_9870 = (0);
while(true){
if((i__9018_9870 < count__9017_9869)){
var line_9871 = chunk__9016_9868.cljs$core$IIndexed$_nth$arity$2(null,i__9018_9870);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_9871)));


var G__9872 = seq__9015_9867;
var G__9873 = chunk__9016_9868;
var G__9874 = count__9017_9869;
var G__9875 = (i__9018_9870 + (1));
seq__9015_9867 = G__9872;
chunk__9016_9868 = G__9873;
count__9017_9869 = G__9874;
i__9018_9870 = G__9875;
continue;
} else {
var temp__5823__auto___9876 = cljs.core.seq(seq__9015_9867);
if(temp__5823__auto___9876){
var seq__9015_9877__$1 = temp__5823__auto___9876;
if(cljs.core.chunked_seq_QMARK_(seq__9015_9877__$1)){
var c__5673__auto___9878 = cljs.core.chunk_first(seq__9015_9877__$1);
var G__9879 = cljs.core.chunk_rest(seq__9015_9877__$1);
var G__9880 = c__5673__auto___9878;
var G__9881 = cljs.core.count(c__5673__auto___9878);
var G__9882 = (0);
seq__9015_9867 = G__9879;
chunk__9016_9868 = G__9880;
count__9017_9869 = G__9881;
i__9018_9870 = G__9882;
continue;
} else {
var line_9883 = cljs.core.first(seq__9015_9877__$1);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_9883)));


var G__9884 = cljs.core.next(seq__9015_9877__$1);
var G__9885 = null;
var G__9886 = (0);
var G__9887 = (0);
seq__9015_9867 = G__9884;
chunk__9016_9868 = G__9885;
count__9017_9869 = G__9886;
i__9018_9870 = G__9887;
continue;
}
} else {
}
}
break;
}

if(cljs.core.empty_QMARK_(output)){
return nex.core.append_line_BANG_("info","Loaded definition.");
} else {
return null;
}
} else {
var map__9058 = (function (){try{return nex.core.eval_wrapped_BANG_(ctx,nex.core.wrap_expression(trimmed));
}catch (e9059){var e1 = e9059;
if(nex.core.typecheck_error_QMARK_(e1)){
throw e1;
} else {
try{return nex.core.eval_wrapped_BANG_(ctx,nex.core.wrap_statement_block(trimmed));
}catch (e9060){var _e2 = e9060;
throw e1;
}}
}})();
var map__9058__$1 = cljs.core.__destructure_map(map__9058);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9058__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9058__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return nex.core.show_runtime_output_BANG_(output,result);
}
}catch (e8971){var e = e8971;
var msg = (""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = e.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}
})()));
nex.core.append_line_BANG_("err",msg);

if(clojure.string.includes_QMARK_(msg,"Parser module missing")){
return nex.core.append_line_BANG_("err",nex.core.parser_debug_info());
} else {
return null;
}
}}
});
nex.core.run_editor_BANG_ = (function nex$core$run_editor_BANG_(){
var editor = nex.core.by_id("editor-input");
var source = editor.value;
var trimmed = clojure.string.trim(source);
var ctx = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
if(clojure.string.blank_QMARK_(trimmed)){
return nex.core.append_line_BANG_("info","Editor is empty.");
} else {
nex.core.append_line_BANG_("input","nex> :run editor");

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.PersistentVector.EMPTY);

try{var ast = nex.parser.ast(source);
var has_defs_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast))) && (((cljs.core.seq(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ast))) || (((cljs.core.seq(new cljs.core.Keyword(null,"functions","functions",184951466).cljs$core$IFn$_invoke$arity$1(ast))) || (((cljs.core.seq(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(ast))) || (cljs.core.seq(new cljs.core.Keyword(null,"interns","interns",693699831).cljs$core$IFn$_invoke$arity$1(ast))))))))));
var map__9097 = ((has_defs_QMARK_)?(function (){
nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,ast);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
})()
:nex.core.eval_wrapped_BANG_(ctx,nex.core.wrap_statement_block(trimmed)));
var map__9097__$1 = cljs.core.__destructure_map(map__9097);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9097__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9097__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
nex.core.show_runtime_output_BANG_(output,result);

if(((cljs.core.empty_QMARK_(output)) && ((result == null)))){
return nex.core.append_line_BANG_("info","Program loaded and executed.");
} else {
return null;
}
}catch (e9078){var e = e9078;
return nex.core.append_line_BANG_("err",(""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = e.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}
})())));
}}
});
nex.core.update_docs_BANG_ = (function nex$core$update_docs_BANG_(){
var map__9136 = cljs.core.deref(nex.core.app_state);
var map__9136__$1 = cljs.core.__destructure_map(map__9136);
var docs_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9136__$1,new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474));
var docs_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9136__$1,new cljs.core.Keyword(null,"docs-page","docs-page",384100997));
var max_page = (cljs.core.count(docs_pages) - (1));
var prev_btn = nex.core.by_id("docs-prev");
var next_btn = nex.core.by_id("docs-next");
var title_el = nex.core.by_id("docs-title");
var body_el = nex.core.by_id("docs-body");
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_btn;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = next_btn;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = title_el;
if(cljs.core.truth_(and__5140__auto____$2)){
return body_el;
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
(title_el.textContent = (""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((docs_page + (1)))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(docs_pages))));

(body_el.innerHTML = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(docs_pages,docs_page));

(prev_btn.disabled = (docs_page === (0)));

return (next_btn.disabled = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(docs_page,max_page));
} else {
return null;
}
});
nex.core.update_tutorial_visibility_BANG_ = (function nex$core$update_tutorial_visibility_BANG_(){
var editor_main = nex.core.by_id("editor-main");
var pane = nex.core.by_id("tutorial-pane");
var visible_QMARK_ = new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
if(cljs.core.truth_(editor_main)){
(editor_main.className = (""+"panel editor-main "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible_QMARK_)?"with-tutorial":"without-tutorial"))));
} else {
}

if(cljs.core.truth_(pane)){
return (pane.className = (""+"tutorial-pane "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(visible_QMARK_)?"open":"closed"))));
} else {
return null;
}
});
nex.core.open_tutorial_BANG_ = (function nex$core$open_tutorial_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(0)], 0));

nex.core.update_docs_BANG_();

return nex.core.update_tutorial_visibility_BANG_();
});
nex.core.close_tutorial_BANG_ = (function nex$core$close_tutorial_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),false);

return nex.core.update_tutorial_visibility_BANG_();
});
nex.core.update_active_file_label_BANG_ = (function nex$core$update_active_file_label_BANG_(){
var label = nex.core.by_id("active-file-label");
var active = new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
if(cljs.core.truth_(label)){
return (label.textContent = (""+"Active: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(active)));
} else {
return null;
}
});
nex.core.close_all_menus_BANG_ = (function nex$core$close_all_menus_BANG_(){
var seq__9237 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(".menu[open]")));
var chunk__9238 = null;
var count__9239 = (0);
var i__9240 = (0);
while(true){
if((i__9240 < count__9239)){
var menu = chunk__9238.cljs$core$IIndexed$_nth$arity$2(null,i__9240);
menu.removeAttribute("open");


var G__9888 = seq__9237;
var G__9889 = chunk__9238;
var G__9890 = count__9239;
var G__9891 = (i__9240 + (1));
seq__9237 = G__9888;
chunk__9238 = G__9889;
count__9239 = G__9890;
i__9240 = G__9891;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__9237);
if(temp__5823__auto__){
var seq__9237__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9237__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__9237__$1);
var G__9892 = cljs.core.chunk_rest(seq__9237__$1);
var G__9893 = c__5673__auto__;
var G__9894 = cljs.core.count(c__5673__auto__);
var G__9895 = (0);
seq__9237 = G__9892;
chunk__9238 = G__9893;
count__9239 = G__9894;
i__9240 = G__9895;
continue;
} else {
var menu = cljs.core.first(seq__9237__$1);
menu.removeAttribute("open");


var G__9896 = cljs.core.next(seq__9237__$1);
var G__9897 = null;
var G__9898 = (0);
var G__9899 = (0);
seq__9237 = G__9896;
chunk__9238 = G__9897;
count__9239 = G__9898;
i__9240 = G__9899;
continue;
}
} else {
return null;
}
}
break;
}
});
nex.core.render_BANG_ = (function nex$core$render_BANG_(){
var root = (function (){var or__5142__auto__ = nex.core.by_id("app");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var el = document.createElement("div");
(el.id = "app");

document.body.appendChild(el);

return el;
}
})();
(root.innerHTML = (""+"<div class='shell'>"+"  <header class='topbar'><h1>Nex Browser IDE</h1><p>Editor-first workflow with REPL and Canvas.</p></header>"+"  <nav class='menu-bar'>"+"    <details class='menu'><summary>File</summary>"+"      <div class='menu-items'>"+"        <button id='menu-new'>New File (Ctrl/Cmd+N)</button>"+"        <button id='menu-open'>Open File (Ctrl/Cmd+O)</button>"+"        <button id='menu-save'>Save File (Ctrl/Cmd+S)</button>"+"      </div>"+"    </details>"+"    <details class='menu'><summary>Help</summary>"+"      <div class='menu-items'>"+"        <button id='menu-tutorial'>Tutorial</button>"+"      </div>"+"    </details>"+"    <span id='active-file-label' class='active-file-label'></span>"+"  </nav>"+"  <input id='open-file-input' type='file' accept='.nex,.txt,text/plain' style='display:none' />"+"  <main class='ide'>"+"    <section id='editor-main' class='panel editor-main without-tutorial'>"+"      <h2>Editor</h2>"+"      <div class='editor-workarea'>"+"        <div class='editor-code-wrap'>"+"          <pre id='editor-highlight' aria-hidden='true'></pre>"+"          <textarea id='editor-input' spellcheck='false'></textarea>"+"        </div>"+"        <aside id='tutorial-pane' class='tutorial-pane closed'>"+"          <div class='tutorial-head'>"+"            <h2>Tutorial</h2>"+"            <button id='tutorial-close'>Close</button>"+"          </div>"+"          <div class='docs-nav'>"+"            <button id='docs-prev'>Previous</button>"+"            <span id='docs-title'></span>"+"            <button id='docs-next'>Next</button>"+"          </div>"+"          <article id='docs-body' class='docs-body'></article>"+"        </aside>"+"      </div>"+"      <div class='editor-controls'><button id='editor-format'>Format</button><button id='editor-run'>Run In REPL</button></div>"+"    </section>"+"    <section class='bottom-split'>"+"      <section class='panel repl'>"+"        <h2>REPL</h2>"+"        <div id='repl-output' class='repl-output'></div>"+"        <div class='repl-controls'>"+"          <div class='repl-input-row'>"+"            <input id='repl-input' type='text' placeholder='Enter any Nex expression...' />"+"          </div>"+"          <div class='repl-actions'>"+"            <button id='repl-typecheck' class='toggle off'>Typecheck: OFF</button>"+"            <button id='repl-eval'>Evaluate</button>"+"            <button id='repl-clear'>Clear</button>"+"          </div>"+"        </div>"+"      </section>"+"      <section class='panel canvas'>"+"        <h2>Canvas</h2>"+"        <div id='canvas-host' class='canvas-host'></div>"+"      </section>"+"    </section>"+"  </main>"+"</div>"+"<style>"+"  :root { --bg:#f3efe8; --card:#fffdf9; --ink:#18130b; --muted:#7a6a58; --accent:#165d5a; --line:#d9cdbf; }"+"  * { box-sizing:border-box; }"+"  html, body { height:100%; }"+"  body { margin:0; font-family:'IBM Plex Sans', ui-sans-serif, system-ui, sans-serif; color:var(--ink); background:radial-gradient(circle at 0% 0%, #efe5d7, #f3efe8 45%); }"+"  .shell { height:100vh; padding:10px; display:grid; grid-template-rows:auto auto minmax(0, 1fr); gap:10px; overflow:hidden; }"+"  .topbar h1 { margin:0; font-size:1.35rem; }"+"  .topbar p { margin:4px 0 10px 0; color:var(--muted); }"+"  .menu-bar { display:flex; align-items:center; gap:10px; margin-bottom:10px; }"+"  .menu { position:relative; }"+"  .menu > summary { list-style:none; cursor:pointer; padding:7px 10px; border:1px solid var(--line); border-radius:8px; background:#fff; user-select:none; }"+"  .menu > summary::-webkit-details-marker { display:none; }"+"  .menu-items { position:absolute; top:36px; left:0; z-index:20; min-width:150px; background:#fff; border:1px solid var(--line); border-radius:8px; padding:6px; box-shadow:0 10px 22px rgba(0,0,0,0.08); display:grid; gap:6px; }"+"  .menu-items button { width:100%; text-align:left; background:#f8f4ed; color:var(--ink); border:1px solid #e2d8ca; }"+"  .active-file-label { margin-left:auto; font-size:0.9rem; color:var(--muted); font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; }"+"  .ide { display:grid; grid-template-rows:minmax(0, 1fr) minmax(220px, 38vh); gap:12px; min-height:0; }"+"  .panel { background:var(--card); border:1px solid var(--line); border-radius:10px; padding:10px; }"+"  .panel h2 { margin:0 0 8px; font-size:1rem; }"+"  .editor-main { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; gap:8px; }"+"  .editor-workarea { min-height:0; display:grid; grid-template-columns:minmax(0, 1fr); gap:12px; }"+"  .editor-main.with-tutorial .editor-workarea { grid-template-columns:minmax(0, 1fr) minmax(300px, 40%); }"+"  .editor-code-wrap { position:relative; height:100%; min-height:0; border:1px solid var(--line); border-radius:8px; overflow:auto; background:#fff; }"+"  #editor-highlight { margin:0; padding:10px; min-height:100%; white-space:pre; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.92rem; line-height:1.4; pointer-events:none; }"+"  textarea#editor-input { position:absolute; inset:0; width:100%; height:100%; resize:none; margin:0; padding:10px; border:0; outline:none; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.92rem; line-height:1.4; background:transparent; color:transparent; caret-color:#111; }"+"  textarea#editor-input::selection { background:rgba(22,93,90,0.2); color:transparent; }"+"  .tok-comment { color:#7a6a58; font-style:italic; } .tok-kw { color:#6a1b9a; font-weight:600; } .tok-type { color:#1e4ea1; font-weight:600; } .tok-const { color:#b71c1c; font-weight:600; } .tok-builtin { color:#00796b; } .tok-num { color:#ad1457; } .tok-str { color:#2e7d32; } .tok-op { color:#bf360c; font-weight:600; }"+"  .editor-controls { display:flex; justify-content:flex-end; gap:8px; }"+"  .bottom-split { display:grid; grid-template-columns:1fr 1fr; gap:12px; min-height:0; }"+"  .repl { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; }"+"  .repl-output { min-height:0; overflow:auto; background:#18130b; color:#f8f2e8; border-radius:8px; padding:8px; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.9rem; }"+"  .repl-line { margin-bottom:4px; white-space:pre-wrap; } .repl-line.input { color:#6ec6ff; } .repl-line.result { color:#8ee59e; } .repl-line.err { color:#ff8a8a; } .repl-line.info { color:#f7cf86; }"+"  .repl-controls { margin-top:8px; display:grid; row-gap:8px; }"+"  .repl-controls input { width:100%; min-width:0; padding:8px; border:1px solid var(--line); border-radius:8px; }"+"  .repl-actions { display:flex; gap:8px; flex-wrap:wrap; }"+"  button { border:1px solid var(--accent); background:var(--accent); color:#fff; border-radius:8px; padding:8px 12px; cursor:pointer; }"+"  button.toggle.off { background:#8a7f70; border-color:#8a7f70; } button.toggle.on { background:#2f7a34; border-color:#2f7a34; }"+"  button:disabled { opacity:0.5; cursor:default; }"+"  .canvas { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr); }"+"  .canvas-host { min-height:0; height:100%; border:1px dashed var(--line); border-radius:8px; padding:8px; background:#fff; overflow:auto; }"+"  .tutorial-pane { min-height:0; border:1px solid var(--line); border-radius:8px; background:#fcfaf5; padding:8px; display:grid; grid-template-rows:auto auto minmax(0, 1fr); gap:8px; }"+"  .tutorial-pane.closed { display:none; }"+"  .tutorial-pane.open { display:grid; }"+"  .tutorial-head { display:flex; align-items:center; justify-content:space-between; }"+"  .docs-nav { display:flex; align-items:center; justify-content:space-between; gap:8px; }"+"  .docs-body { min-height:0; border:1px solid var(--line); border-radius:8px; padding:10px; color:var(--ink); background:#fff; overflow:auto; }"+"  .docs-body h3 { margin:0 0 8px; font-size:1rem; color:var(--ink); } .docs-body p { margin:0 0 8px; color:var(--muted); line-height:1.35; }"+"  .docs-body code { font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.88rem; } .docs-body pre { margin:0 0 8px; padding:8px; border:1px solid var(--line); border-radius:8px; background:#faf7f1; overflow:auto; } .docs-body pre code { color:var(--ink); }"+"  @media (max-width: 1200px) { .editor-main.with-tutorial .editor-workarea { grid-template-columns:1fr; grid-template-rows:minmax(0, 1fr) minmax(220px, 40%); } }"+"  @media (max-width: 980px) { .shell { height:auto; min-height:100vh; overflow:visible; } .ide { grid-template-rows:minmax(0, 1fr) auto; } .bottom-split { grid-template-columns:1fr; } .canvas-host { min-height:220px; } }"+"</style>"));

nex.core.load_storage_state_BANG_();

nex.core.update_typecheck_ui_BANG_();

var active_file_9900 = new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
var active_content_9901 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),active_file_9900], null),nex.core.default_editor_source);
(nex.core.by_id("editor-input").value = active_content_9901);

nex.core.update_editor_highlight_BANG_();

nex.core.update_active_file_label_BANG_();

nex.turtle_browser.set_window_host_BANG_(nex.core.by_id("canvas-host"));

nex.core.update_docs_BANG_();

nex.core.update_tutorial_visibility_BANG_();

nex.core.by_id("repl-eval").addEventListener("click",(function (_){
return nex.core.eval_repl_input_BANG_();
}));

nex.core.by_id("repl-typecheck").addEventListener("click",(function (_){
return nex.core.toggle_typecheck_BANG_();
}));

nex.core.by_id("repl-clear").addEventListener("click",(function (_){
return nex.core.clear_repl_output_BANG_();
}));

nex.core.by_id("menu-new").addEventListener("click",(function (_){
nex.core.create_new_file_BANG_();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
}));

nex.core.by_id("menu-open").addEventListener("click",(function (_){
nex.core.choose_file_to_open();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
}));

nex.core.by_id("menu-save").addEventListener("click",(function (_){
nex.core.save_current_file_BANG_();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
}));

nex.core.by_id("menu-tutorial").addEventListener("click",(function (_){
nex.core.open_tutorial_BANG_();

return nex.core.close_all_menus_BANG_();
}));

nex.core.by_id("tutorial-close").addEventListener("click",(function (_){
return nex.core.close_tutorial_BANG_();
}));

nex.core.by_id("editor-format").addEventListener("click",(function (_){
return nex.core.format_editor_BANG_();
}));

nex.core.by_id("editor-run").addEventListener("click",(function (_){
return nex.core.run_editor_BANG_();
}));

nex.core.by_id("editor-input").addEventListener("input",(function (_){
nex.core.editor_maybe_dedent_control_line_BANG_();

return nex.core.update_editor_highlight_BANG_();
}));

nex.core.by_id("editor-input").addEventListener("scroll",(function (e){
var input = e.target;
var hl = nex.core.by_id("editor-highlight");
(hl.scrollTop = input.scrollTop);

return (hl.scrollLeft = input.scrollLeft);
}));

nex.core.by_id("open-file-input").addEventListener("change",(function (e){
var input = e.target;
var files = input.files;
var file = (cljs.core.truth_((function (){var and__5140__auto__ = files;
if(cljs.core.truth_(and__5140__auto__)){
return (files.length > (0));
} else {
return and__5140__auto__;
}
})())?(files[(0)]):null);
if(cljs.core.truth_(file)){
return file.text().then((function (text){
return nex.core.apply_opened_file_BANG_((function (){var or__5142__auto__ = file.name;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "scratch.nex";
}
})(),text,null);
})).catch((function (err){
return nex.core.report_file_error_BANG_("Open failed",err);
}));
} else {
return null;
}
}));

nex.core.by_id("repl-input").addEventListener("keydown",(function (e){
var G__9361 = e.key;
switch (G__9361) {
case "Enter":
e.preventDefault();

return nex.core.eval_repl_input_BANG_();

break;
case "ArrowUp":
e.preventDefault();

return nex.core.navigate_repl_history_BANG_(new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "ArrowDown":
e.preventDefault();

return nex.core.navigate_repl_history_BANG_(new cljs.core.Keyword(null,"down","down",1565245570));

break;
default:
return null;

}
}));

nex.core.by_id("editor-input").addEventListener("keydown",(function (e){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key);
if(and__5140__auto__){
return e.ctrlKey;
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

return nex.core.run_editor_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("F",e.key);
if(and__5140__auto__){
var and__5140__auto____$1 = e.ctrlKey;
if(cljs.core.truth_(and__5140__auto____$1)){
return e.shiftKey;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

return nex.core.format_editor_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tab",e.key);
if(and__5140__auto__){
return e.shiftKey;
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

return nex.core.editor_indent_selection_BANG_(new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tab",e.key)){
e.preventDefault();

return nex.core.editor_indent_selection_BANG_(new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
e.preventDefault();

return nex.core.editor_auto_indent_enter_BANG_();
} else {
return null;

}
}
}
}
}
}));

nex.core.by_id("docs-prev").addEventListener("click",(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(function (p1__9258_SHARP_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(p1__9258_SHARP_ - (1)));
}));

return nex.core.update_docs_BANG_();
}));

nex.core.by_id("docs-next").addEventListener("click",(function (_){
var last_page_9903 = (cljs.core.count(new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state))) - (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(function (p1__9259_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(last_page_9903,(p1__9259_SHARP_ + (1)));
}));

return nex.core.update_docs_BANG_();
}));

document.addEventListener("click",(function (e){
var target = e.target;
var in_menu_QMARK_ = (cljs.core.truth_((function (){var and__5140__auto__ = target;
if(cljs.core.truth_(and__5140__auto__)){
return target.closest;
} else {
return and__5140__auto__;
}
})())?target.closest(".menu"):null);
if(cljs.core.truth_(in_menu_QMARK_)){
return null;
} else {
return nex.core.close_all_menus_BANG_();
}
}));

window.addEventListener("keydown",(function (e){
var k = clojure.string.lower_case(e.key);
var mod_QMARK_ = (function (){var or__5142__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return e.metaKey;
}
})();
if(cljs.core.truth_((function (){var and__5140__auto__ = mod_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"s");
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

nex.core.save_current_file_BANG_();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = mod_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"o");
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

nex.core.choose_file_to_open();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = mod_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"n");
} else {
return and__5140__auto__;
}
})())){
e.preventDefault();

nex.core.create_new_file_BANG_();

nex.core.update_active_file_label_BANG_();

return nex.core.close_all_menus_BANG_();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,"escape")){
nex.core.close_all_menus_BANG_();

if(cljs.core.truth_(new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
return nex.core.close_tutorial_BANG_();
} else {
return null;
}
} else {
return null;

}
}
}
}
}));

return nex.core.append_line_BANG_("info","Browser IDE build: 2026-03-03q");
});
nex.core.init = (function nex$core$init(){
return nex.core.render_BANG_();
});

//# sourceMappingURL=nex.core.js.map
