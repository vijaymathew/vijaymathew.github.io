goog.provide('nex.core');
nex.core.repl_history_storage_key = "nex.browser.repl.history.v1";
nex.core.editor_files_storage_key = "nex.browser.editor.files.v1";
nex.core.editor_active_file_storage_key = "nex.browser.editor.active-file.v1";
nex.core.typecheck_storage_key = "nex.browser.repl.typecheck.v1";
nex.core.default_editor_source = (""+"-- Example program\n"+"let win := create Window.with_title(\"Nex Browser\", 640, 360)\n"+"win.show()\n"+"let t := create Turtle.on_window(win)\n"+"t.color(\"blue\")\n"+"t.forward(80.0)\n"+"t.right(120.0)\n"+"t.forward(80.0)\n"+"t.right(120.0)\n"+"t.forward(80.0)\n");
nex.core.nex_keywords = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 41, ["else",null,"retry",null,"of",null,"not",null,"class",null,"repeat",null,"elseif",null,"private",null,"ensure",null,"require",null,"fn",null,"note",null,"feature",null,"if",null,"let",null,"import",null,"select",null,"timeout",null,"spawn",null,"or",null,"case",null,"inherit",null,"old",null,"when",null,"until",null,"raise",null,"function",null,"and",null,"do",null,"intern",null,"from",null,"across",null,"create",null,"with",null,"then",null,"rescue",null,"invariant",null,"as",null,"deferred",null,"end",null,"variant",null], null), null);
nex.core.nex_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, ["Void",null,"Turtle",null,"Char",null,"Map",null,"Real",null,"Decimal",null,"Any",null,"Integer64",null,"Integer",null,"String",null,"Window",null,"Cursor",null,"Channel",null,"Function",null,"Image",null,"Array",null,"Task",null,"Set",null,"Boolean",null], null), null);
nex.core.nex_constants = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["false",null,"true",null,"nil",null], null), null);
nex.core.nex_builtins = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["exception",null,"println",null,"type_is",null,"print",null,"type_of",null,"result",null], null), null);
if((typeof nex !== 'undefined') && (typeof nex.core !== 'undefined') && (typeof nex.core.app_state !== 'undefined')){
} else {
nex.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"docs-page","docs-page",384100997),new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),new cljs.core.Keyword(null,"docs-mode","docs-mode",-1709618583),new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315),new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474),new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671),new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),new cljs.core.Keyword(null,"editor-file-handle","editor-file-handle",144237907),new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616),new cljs.core.Keyword(null,"web-ide-pages","web-ide-pages",-1227866951),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489)],[(0),cljs.core.PersistentArrayMap.EMPTY,false,new cljs.core.Keyword(null,"tutorial","tutorial",1017223195),false,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"<h3>1) First Program</h3>"+"<p>Start with a tiny program and comment syntax.</p>"+"<pre><code>print(\"Hello, Nex\")\n"+"-- This line is ignored by the compiler/interpreter\n"+"print(\"Hello again\")</code></pre>"+"<p>Use the REPL for short experiments and the editor for larger snippets.</p>"),(""+"<h3>2) Values, Variables, and Types</h3>"+"<p>Variables use <code>let</code> and assignment <code>:=</code>.</p>"+"<pre><code>let name: String := \"Ada\"\n"+"let age: Integer := 12\n"+"let height: Real := 1.52\n"+"let ok: Boolean := true\n\n"+"let x := 10\n"+"let y := x + 5\n"+"let maybe_name: ?String := nil</code></pre>"),(""+"<h3>3) Expressions and Control Flow</h3>"+"<pre><code>let a := 10 + 2 * 3\n"+"let b := (10 + 2) * 3\n"+"let same := a = b\n"+"let valid := (a &gt; 5) and not false</code></pre>"+"<p>Conditionals and expression-level choice:</p>"+"<pre><code>if age &gt;= 18 then\n"+"  print(\"adult\")\n"+"elseif age &gt;= 13 then\n"+"  print(\"teen\")\n"+"else\n"+"  print(\"child\")\n"+"end\n\n"+"let category := when age &gt;= 18 \"adult\" else \"minor\" end</code></pre>"+"<p><code>case/of</code> is also available for branch-by-value logic.</p>"),(""+"<h3>4) Repetition</h3>"+"<p>Nex loops from the tutorial: <code>from/until</code>, <code>repeat</code>, <code>across</code>.</p>"+"<pre><code>from\n"+"  let i: Integer := 1\n"+"until\n"+"  i &gt; 5\n"+"do\n"+"  print(i)\n"+"  i := i + 1\n"+"end</code></pre>"+"<pre><code>repeat 3 do\n"+"  print(\"tick\")\n"+"end\n\n"+"across [10, 20, 30] as x do\n"+"  print(x)\n"+"end</code></pre>"),(""+"<h3>5) Functions and Data Structures</h3>"+"<pre><code>function double(n: Integer): Integer\n"+"do\n"+"  result := n * 2\n"+"end\n\n"+"let inc := fn (n: Integer): Integer do\n"+"  result := n + 1\n"+"end</code></pre>"+"<p>Arrays and maps:</p>"+"<pre><code>let xs: Array [Integer] := [1, 2, 3]\n"+"print(xs.get(0))\n\n"+"let m: Map [String, String] := {\"name\": \"Nex\", \"kind\": \"language\"}\n"+"print(m.get(\"name\"))</code></pre>"),(""+"<h3>6) Classes, Generics, and Inheritance</h3>"+"<pre><code>class Counter\n"+"  create\n"+"    make(start: Integer) do\n"+"      this.value := start\n"+"    end\n\n"+"  feature\n"+"    value: Integer\n\n"+"    inc() do\n"+"      this.value := this.value + 1\n"+"    end\n"+"end\n\n"+"let c: Counter := create Counter.make(10)\n"+"c.inc</code></pre>"+"<p>Generics and inheritance are part of the core language and covered in detail in the full tutorial.</p>"),(""+"<h3>7) Contracts and Error Handling</h3>"+"<p>Nex supports Design by Contract with <code>require</code>, <code>ensure</code>, and <code>invariant</code>.</p>"+"<pre><code>spend(amount: Real)\n"+"  require\n"+"    enough: amount &lt;= money\n"+"  do\n"+"    money := money - amount\n"+"  ensure\n"+"    less: money = old money - amount\n"+"  end</code></pre>"+"<p>Error handling pattern:</p>"+"<pre><code>do\n"+"  raise \"not ready\"\n"+"rescue\n"+"  print(exception)\n"+"  retry\n"+"end</code></pre>"+"<p>In-app pages are synced to the flow in <code>docs/md/TUTORIAL.md</code>.</p>")], null),null,cljs.core.PersistentVector.EMPTY,null,new cljs.core.PersistentArrayMap(null, 1, ["scratch.nex",nex.core.default_editor_source], null),"",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"<h3>1) Web IDE Layout</h3>"+"<p>The browser IDE is split into three working areas:</p>"+"<ul><li><b>Editor</b>: write and run larger programs.</li>"+"<li><b>REPL</b>: test expressions quickly.</li>"+"<li><b>Canvas</b>: drawing output for Window/Turtle examples.</li></ul>"),(""+"<h3>2) File Workflow</h3>"+"<p>Use the <code>File</code> menu for project-style editing in the browser:</p>"+"<ul><li><b>New File</b>: create a new buffer.</li>"+"<li><b>Open File</b>: load a local <code>.nex</code> file.</li>"+"<li><b>Save File</b>: save to the filesystem (or download fallback).</li></ul>"+"<p>Keyboard shortcuts: <code>Ctrl/Cmd+N</code>, <code>Ctrl/Cmd+O</code>, <code>Ctrl/Cmd+S</code>.</p>"),(""+"<h3>3) Editor + REPL Usage</h3>"+"<p>Editor controls:</p>"+"<ul><li><b>Format</b>: auto-format the current buffer.</li>"+"<li><b>Run In REPL</b>: execute editor content through the REPL runtime.</li></ul>"+"<p>REPL tips:</p>"+"<ul><li>Press <code>Enter</code> in REPL input to evaluate.</li>"+"<li>Use <code>ArrowUp</code>/<code>ArrowDown</code> for REPL history.</li>"+"<li>Toggle <b>Typecheck</b> before evaluation if you want static checks.</li></ul>"),(""+"<h3>4) Productivity Shortcuts</h3>"+"<ul><li><code>Ctrl+Enter</code> in editor: run editor buffer.</li>"+"<li><code>Ctrl+Shift+F</code> in editor: format buffer.</li>"+"<li><code>Tab</code>/<code>Shift+Tab</code>: indent/outdent selection.</li>"+"<li><code>Esc</code>: close open menus and the help pane.</li></ul>"+"<p>Use the Tutorial and this guide together: tutorial teaches language features, this guide teaches IDE workflow.</p>")], null),nex.interpreter.make_context(),"scratch.nex"]));
}
nex.core.by_id = (function nex$core$by_id(id){
return document.getElementById(id);
});
nex.core.storage_get = (function nex$core$storage_get(k){
try{return localStorage.getItem(k);
}catch (e6966){var _ = e6966;
return null;
}});
nex.core.storage_set_BANG_ = (function nex$core$storage_set_BANG_(k,v){
try{return localStorage.setItem(k,v);
}catch (e6967){var _ = e6967;
return null;
}});
nex.core.storage_get_edn = (function nex$core$storage_get_edn(k,fallback){
var temp__5821__auto__ = nex.core.storage_get(k);
if(cljs.core.truth_(temp__5821__auto__)){
var raw = temp__5821__auto__;
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(raw);
}catch (e6968){var _ = e6968;
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
var map__6969 = cljs.core.deref(nex.core.app_state);
var map__6969__$1 = cljs.core.__destructure_map(map__6969);
var editor_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6969__$1,new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955));
var editor_active_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6969__$1,new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489));
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
var seq__6970 = cljs.core.seq(stmts);
var chunk__6971 = null;
var count__6972 = (0);
var i__6973 = (0);
while(true){
if((i__6973 < count__6972)){
var stmt = chunk__6971.cljs$core$IIndexed$_nth$arity$2(null,i__6973);
if(((cljs.core.map_QMARK_(stmt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt))))){
var remembered_type_7426 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.infer_expression_type(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(stmt),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.vals(cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"classes","classes",2037804510)], null)))),new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))),new cljs.core.Keyword(null,"var-types","var-types",1260023439),new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state))], null));
}
})();
if(cljs.core.truth_(remembered_type_7426)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt)], null),remembered_type_7426);
} else {
}
} else {
}


var G__7432 = seq__6970;
var G__7433 = chunk__6971;
var G__7434 = count__6972;
var G__7435 = (i__6973 + (1));
seq__6970 = G__7432;
chunk__6971 = G__7433;
count__6972 = G__7434;
i__6973 = G__7435;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6970);
if(temp__5823__auto__){
var seq__6970__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6970__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6970__$1);
var G__7438 = cljs.core.chunk_rest(seq__6970__$1);
var G__7439 = c__5673__auto__;
var G__7440 = cljs.core.count(c__5673__auto__);
var G__7441 = (0);
seq__6970 = G__7438;
chunk__6971 = G__7439;
count__6972 = G__7440;
i__6973 = G__7441;
continue;
} else {
var stmt = cljs.core.first(seq__6970__$1);
if(((cljs.core.map_QMARK_(stmt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt))))){
var remembered_type_7444 = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"var-type","var-type",-1876390632).cljs$core$IFn$_invoke$arity$1(stmt);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return nex.typechecker.infer_expression_type(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(stmt),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.vals(cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"classes","classes",2037804510)], null)))),new cljs.core.Keyword(null,"imports","imports",-1249933394),cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))),new cljs.core.Keyword(null,"var-types","var-types",1260023439),new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state))], null));
}
})();
if(cljs.core.truth_(remembered_type_7444)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-var-types","repl-var-types",-509579547),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt)], null),remembered_type_7444);
} else {
}
} else {
}


var G__7449 = cljs.core.next(seq__6970__$1);
var G__7450 = null;
var G__7451 = (0);
var G__7452 = (0);
seq__6970 = G__7449;
chunk__6971 = G__7450;
count__6972 = G__7451;
i__6973 = G__7452;
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
if(cljs.core.truth_((function (){var fexpr__6974 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["->",null,":=",null], null), null);
return (fexpr__6974.cljs$core$IFn$_invoke$arity$1 ? fexpr__6974.cljs$core$IFn$_invoke$arity$1(tok) : fexpr__6974.call(null,tok));
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
}catch (e6975){var e = e6975;
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
}catch (e6976){var _ = e6976;
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
var map__6977 = cljs.core.deref(nex.core.app_state);
var map__6977__$1 = cljs.core.__destructure_map(map__6977);
var repl_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6977__$1,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534));
var repl_history_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6977__$1,new cljs.core.Keyword(null,"repl-history-index","repl-history-index",-1565006671));
var repl_history_draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6977__$1,new cljs.core.Keyword(null,"repl-history-draft","repl-history-draft",-994272616));
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
var map__6982 = nex.core.snapshot_active_editor_BANG_();
var map__6982__$1 = cljs.core.__destructure_map(map__6982);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6982__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6982__$1,new cljs.core.Keyword(null,"content","content",15833224));
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
return cljs.core.some((function (p1__6984_SHARP_){
return clojure.string.ends_with_QMARK_(trimmed,p1__6984_SHARP_);
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
var G__7560 = cljs.core.rest(remaining);
var G__7561 = indent_level;
var G__7562 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,"");
remaining = G__7560;
indent_level = G__7561;
acc = G__7562;
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
var G__7567 = cljs.core.rest(remaining);
var G__7568 = after_level;
var G__7569 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,formatted);
remaining = G__7567;
indent_level = G__7568;
acc = G__7569;
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
var G__7579 = (i - (1));
i = G__7579;
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
var G__7584 = (i + (1));
i = G__7584;
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
var next_after_trim = (function (){var G__7018 = next_after_line;
var G__7018__$1 = (((G__7018 == null))?null:nex.core.line_without_comment(G__7018));
if((G__7018__$1 == null)){
return null;
} else {
return clojure.string.trim(G__7018__$1);
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
var G__7020 = direction;
var G__7020__$1 = (((G__7020 instanceof cljs.core.Keyword))?G__7020.fqn:null);
switch (G__7020__$1) {
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
try{return nex.interpreter.nex_format_value(v);
}catch (e7023){var _ = e7023;
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
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function nex$core$fmt_value_$_iter__7024(s__7025){
return (new cljs.core.LazySeq(null,(function (){
var s__7025__$1 = s__7025;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__7025__$1);
if(temp__5823__auto__){
var s__7025__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7025__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__7025__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__7028 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__7027 = (0);
while(true){
if((i__7027 < size__5627__auto__)){
var entry = cljs.core._nth(c__5626__auto__,i__7027);
cljs.core.chunk_append(b__7028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(entry[(0)]),(entry[(1)])], null));

var G__7638 = (i__7027 + (1));
i__7027 = G__7638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7028),nex$core$fmt_value_$_iter__7024(cljs.core.chunk_rest(s__7025__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7028),null);
}
} else {
var entry = cljs.core.first(s__7025__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(entry[(0)]),(entry[(1)])], null),nex$core$fmt_value_$_iter__7024(cljs.core.rest(s__7025__$2)));
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));

}
}
}
}
}});
nex.core.looks_like_definition_QMARK_ = (function nex$core$looks_like_definition_QMARK_(input){
return cljs.core.boolean$(cljs.core.re_find(/^\s*(class|function|import|intern)\b/,input));
});
nex.core.looks_like_statement_QMARK_ = (function nex$core$looks_like_statement_QMARK_(input){
return cljs.core.boolean$(cljs.core.re_find(/^\s*(let|if|from|repeat|across|select|raise|retry|case|convert|do|rescue)\b/,input));
});
nex.core.wrap_expression = (function nex$core$wrap_expression(input){
return (""+"class __BrowserRepl__\n"+"feature\n"+"  __eval__(): Any do\n"+"    result := "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)+"\n"+"  end\n"+"end");
});
nex.core.wrap_statement_block = (function nex$core$wrap_statement_block(input){
return (""+"class __BrowserRepl__\n"+"feature\n"+"  __eval__(): Any do\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)+"\n"+"  end\n"+"end");
});
nex.core.ensure_promise = (function nex$core$ensure_promise(v){
return Promise.resolve(v);
});
nex.core.simple_await_var = (function nex$core$simple_await_var(source){
return cljs.core.second(cljs.core.re_matches(/^\s*([A-Za-z_][A-Za-z0-9_]*)\.await\s*$/s,source));
});
nex.core.simple_print_await_var = (function nex$core$simple_print_await_var(source){
return cljs.core.second(cljs.core.re_matches(/^\s*print\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\.await\s*\)\s*$/s,source));
});
nex.core.source_needs_async_QMARK_ = (function nex$core$source_needs_async_QMARK_(source){
return cljs.core.boolean$(cljs.core.re_find(/\b(spawn|select|await_any|await_all|sleep)\b|\.await\b|\.send\b|\.receive\b|\.try_send\b|\.try_receive\b|\bTask\b|\bChannel\b/,source));
});
nex.core.eval_sync_program_BANG_ = (function nex$core$eval_sync_program_BANG_(ctx,ast){
return nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,ast);
});
nex.core.eval_statement_block_BANG_ = (function nex$core$eval_statement_block_BANG_(ctx,source){
var wrapped_code = nex.core.wrap_statement_block(source);
var ast = nex.parser.ast(wrapped_code);
var _ = nex.core.typecheck_ast_BANG_(ast);
var method_def = cljs.core.first(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ast))))));
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def);
if(nex.core.source_needs_async_QMARK_(source)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,stmt){
return acc.then((function (___$1){
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,stmt)).then((function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt),value);
} else {
}

return value;
}));
}));
}),nex.core.ensure_promise(null),body).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
nex.core.remember_typed_lets_BANG_(body);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
} else {
var result = cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (stmt){
var value = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,stmt);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"let","let",-1282412701),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt))){
nex.interpreter.env_define(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(stmt),value);
} else {
}

return value;
}),body));
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
nex.core.remember_typed_lets_BANG_(body);
} else {
}

return nex.core.ensure_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null));
}
});
nex.core.eval_async_expression_BANG_ = (function nex$core$eval_async_expression_BANG_(ctx,source){
var task_await_fn = cljs.core.deref(new cljs.core.Var(function(){return nex.interpreter.task_await;},new cljs.core.Symbol("nex.interpreter","task-await","nex.interpreter/task-await",-1134160088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"nex.interpreter","nex.interpreter",-1369534389,null),new cljs.core.Symbol(null,"task-await","task-await",798417221,null),"nex/interpreter.cljc",21,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),4,680,680,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"timeout","timeout",1321906209,null)], null)),null,(cljs.core.truth_(nex.interpreter.task_await)?nex.interpreter.task_await.cljs$lang$test:null)])));
var ast = nex.parser.ast(source);
var _ = nex.core.typecheck_ast_BANG_(ast);
var stmt_node = (function (){var or__5142__auto__ = cljs.core.first(new cljs.core.Keyword(null,"statements","statements",600349855).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"calls","calls",-433802344).cljs$core$IFn$_invoke$arity$1(ast));
}
})();
if(cljs.core.truth_(nex.core.simple_await_var(source))){
var task_name = nex.core.simple_await_var(source);
var task = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),task_name);
return nex.core.ensure_promise((task_await_fn.cljs$core$IFn$_invoke$arity$1 ? task_await_fn.cljs$core$IFn$_invoke$arity$1(task) : task_await_fn.call(null,task))).then((function (result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
} else {
if(cljs.core.truth_(nex.core.simple_print_await_var(source))){
var task_name = nex.core.simple_print_await_var(source);
var task = nex.interpreter.env_lookup(new cljs.core.Keyword(null,"current-env","current-env",-1321489691).cljs$core$IFn$_invoke$arity$1(ctx),task_name);
return nex.core.ensure_promise((task_await_fn.cljs$core$IFn$_invoke$arity$1 ? task_await_fn.cljs$core$IFn$_invoke$arity$1(task) : task_await_fn.call(null,task))).then((function (result){
nex.interpreter.add_output(ctx,nex.interpreter.nex_format_value(result));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stmt_node));
if(and__5140__auto__){
var and__5140__auto____$1 = (new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(stmt_node) == null);
if(and__5140__auto____$1){
var G__7048 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(stmt_node);
var fexpr__7047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["println",null,"print",null], null), null);
return (fexpr__7047.cljs$core$IFn$_invoke$arity$1 ? fexpr__7047.cljs$core$IFn$_invoke$arity$1(G__7048) : fexpr__7047.call(null,G__7048));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return Promise.all(cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7040_SHARP_){
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,p1__7040_SHARP_));
}),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(stmt_node)))).then((function (arg_array){
var arg_values = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(arg_array));
var output = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(nex.interpreter.nex_format_value,arg_values));
nex.interpreter.add_output(ctx,output);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
} else {
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,stmt_node)).then((function (result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));

}
}
}
});
nex.core.eval_wrapped_BANG_ = (function nex$core$eval_wrapped_BANG_(ctx,wrapped_code){
var ast = nex.parser.ast(wrapped_code);
var _ = nex.core.typecheck_ast_BANG_(ast);
var call_node = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"class-name","class-name",945142584),"__BrowserRepl__",new cljs.core.Keyword(null,"generic-args","generic-args",-1751842015),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"method","method",55703592),"__eval__",new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"has-parens","has-parens",454405713),true], null);
if(nex.core.source_needs_async_QMARK_(wrapped_code)){
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,ast)).then((function (___$1){
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,call_node)).then((function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
var temp__5823__auto___7691 = cljs.core.first(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ast))))));
if(cljs.core.truth_(temp__5823__auto___7691)){
var method_def_7694 = temp__5823__auto___7691;
nex.core.remember_typed_lets_BANG_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_7694));
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
}));
} else {
var ___$1 = nex.core.eval_sync_program_BANG_(ctx,ast);
var result = nex.interpreter.eval_node.cljs$core$IFn$_invoke$arity$2(ctx,call_node);
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
var temp__5823__auto___7699 = cljs.core.first(new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(ast))))));
if(cljs.core.truth_(temp__5823__auto___7699)){
var method_def_7701 = temp__5823__auto___7699;
nex.core.remember_typed_lets_BANG_(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(method_def_7701));
} else {
}
} else {
}

return nex.core.ensure_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null));
}
});
nex.core.run_program_BANG_ = (function nex$core$run_program_BANG_(ctx,source){
var ast = nex.parser.ast(source);
var _ = nex.core.typecheck_ast_BANG_(ast);
if(nex.core.source_needs_async_QMARK_(source)){
return nex.core.ensure_promise(nex.interpreter.eval_node_async(ctx,ast)).then((function (raw_result){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?null:raw_result),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null);
}));
} else {
var raw_result = nex.core.eval_sync_program_BANG_(ctx,ast);
return nex.core.ensure_promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"program","program",781564284),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?null:raw_result),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.deref(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx))], null));
}
});
nex.core.show_runtime_output_BANG_ = (function nex$core$show_runtime_output_BANG_(output,result){
var seq__7111_7709 = cljs.core.seq(output);
var chunk__7112_7710 = null;
var count__7113_7711 = (0);
var i__7114_7712 = (0);
while(true){
if((i__7114_7712 < count__7113_7711)){
var line_7714 = chunk__7112_7710.cljs$core$IIndexed$_nth$arity$2(null,i__7114_7712);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7714)));


var G__7717 = seq__7111_7709;
var G__7718 = chunk__7112_7710;
var G__7719 = count__7113_7711;
var G__7720 = (i__7114_7712 + (1));
seq__7111_7709 = G__7717;
chunk__7112_7710 = G__7718;
count__7113_7711 = G__7719;
i__7114_7712 = G__7720;
continue;
} else {
var temp__5823__auto___7721 = cljs.core.seq(seq__7111_7709);
if(temp__5823__auto___7721){
var seq__7111_7723__$1 = temp__5823__auto___7721;
if(cljs.core.chunked_seq_QMARK_(seq__7111_7723__$1)){
var c__5673__auto___7724 = cljs.core.chunk_first(seq__7111_7723__$1);
var G__7726 = cljs.core.chunk_rest(seq__7111_7723__$1);
var G__7727 = c__5673__auto___7724;
var G__7728 = cljs.core.count(c__5673__auto___7724);
var G__7729 = (0);
seq__7111_7709 = G__7726;
chunk__7112_7710 = G__7727;
count__7113_7711 = G__7728;
i__7114_7712 = G__7729;
continue;
} else {
var line_7731 = cljs.core.first(seq__7111_7723__$1);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7731)));


var G__7733 = cljs.core.next(seq__7111_7723__$1);
var G__7734 = null;
var G__7735 = (0);
var G__7736 = (0);
seq__7111_7709 = G__7733;
chunk__7112_7710 = G__7734;
count__7113_7711 = G__7735;
i__7114_7712 = G__7736;
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
nex.core.handle_repl_command_BANG_ = (function nex$core$handle_repl_command_BANG_(trimmed){
var G__7115 = trimmed;
switch (G__7115) {
case ":run editor":
(nex.core.run_editor_BANG_.cljs$core$IFn$_invoke$arity$0 ? nex.core.run_editor_BANG_.cljs$core$IFn$_invoke$arity$0() : nex.core.run_editor_BANG_.call(null));

return true;

break;
case ":clear":
nex.core.clear_repl_output_BANG_();

return true;

break;
case ":typecheck on":
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
} else {
nex.core.toggle_typecheck_BANG_();
}

return true;

break;
case ":typecheck off":
if(cljs.core.truth_(new cljs.core.Keyword(null,"typecheck-enabled","typecheck-enabled",-1119403315).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state)))){
nex.core.toggle_typecheck_BANG_();
} else {
}

return true;

break;
default:
return false;

}
});
/**
 * Evaluate one REPL input string against the shared browser REPL semantics.
 * Returns a Promise of {:kind kw :result v :output [...]} where :kind is
 * :definition, :statement, or :expression. Commands return {:kind :command}.
 */
nex.core.eval_repl_source_BANG_ = (function nex$core$eval_repl_source_BANG_(ctx,source){
var trimmed = clojure.string.trim(source);
if(clojure.string.blank_QMARK_(trimmed)){
return nex.core.ensure_promise(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentVector.EMPTY], null));
} else {
if(cljs.core.truth_(nex.core.handle_repl_command_BANG_(trimmed))){
return nex.core.ensure_promise(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentVector.EMPTY], null));
} else {
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.PersistentVector.EMPTY);

var run_promise = ((nex.core.looks_like_definition_QMARK_(trimmed))?nex.core.run_program_BANG_(ctx,trimmed):((nex.core.looks_like_statement_QMARK_(trimmed))?nex.core.eval_statement_block_BANG_(ctx,trimmed):((nex.core.source_needs_async_QMARK_(trimmed))?nex.core.eval_async_expression_BANG_(ctx,trimmed):(function (){try{return nex.core.eval_wrapped_BANG_(ctx,nex.core.wrap_expression(trimmed));
}catch (e7116){var e1 = e7116;
if(nex.core.typecheck_error_QMARK_(e1)){
throw e1;
} else {
try{return nex.core.eval_statement_block_BANG_(ctx,trimmed);
}catch (e7117){var _e2 = e7117;
throw e1;
}}
}})())));
return run_promise.then((function (p__7118){
var map__7119 = p__7118;
var map__7119__$1 = cljs.core.__destructure_map(map__7119);
var res = map__7119__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7119__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7119__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword(null,"kind","kind",-717265803),((nex.core.looks_like_definition_QMARK_(trimmed))?new cljs.core.Keyword(null,"definition","definition",-1198729982):((nex.core.looks_like_statement_QMARK_(trimmed))?new cljs.core.Keyword(null,"statement","statement",-32780863):new cljs.core.Keyword(null,"expression","expression",202311876)
)));
}));

}
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

try{var run_promise = nex.core.eval_repl_source_BANG_(ctx,trimmed);
run_promise.then((function (p__7135){
var map__7136 = p__7135;
var map__7136__$1 = cljs.core.__destructure_map(map__7136);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7136__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7136__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7136__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var G__7137 = kind;
var G__7137__$1 = (((G__7137 instanceof cljs.core.Keyword))?G__7137.fqn:null);
switch (G__7137__$1) {
case "definition":
var seq__7138_7769 = cljs.core.seq(output);
var chunk__7139_7770 = null;
var count__7140_7771 = (0);
var i__7141_7772 = (0);
while(true){
if((i__7141_7772 < count__7140_7771)){
var line_7776 = chunk__7139_7770.cljs$core$IIndexed$_nth$arity$2(null,i__7141_7772);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7776)));


var G__7778 = seq__7138_7769;
var G__7779 = chunk__7139_7770;
var G__7780 = count__7140_7771;
var G__7782 = (i__7141_7772 + (1));
seq__7138_7769 = G__7778;
chunk__7139_7770 = G__7779;
count__7140_7771 = G__7780;
i__7141_7772 = G__7782;
continue;
} else {
var temp__5823__auto___7783 = cljs.core.seq(seq__7138_7769);
if(temp__5823__auto___7783){
var seq__7138_7784__$1 = temp__5823__auto___7783;
if(cljs.core.chunked_seq_QMARK_(seq__7138_7784__$1)){
var c__5673__auto___7786 = cljs.core.chunk_first(seq__7138_7784__$1);
var G__7787 = cljs.core.chunk_rest(seq__7138_7784__$1);
var G__7788 = c__5673__auto___7786;
var G__7789 = cljs.core.count(c__5673__auto___7786);
var G__7790 = (0);
seq__7138_7769 = G__7787;
chunk__7139_7770 = G__7788;
count__7140_7771 = G__7789;
i__7141_7772 = G__7790;
continue;
} else {
var line_7792 = cljs.core.first(seq__7138_7784__$1);
nex.core.append_line_BANG_("out",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_7792)));


var G__7794 = cljs.core.next(seq__7138_7784__$1);
var G__7795 = null;
var G__7796 = (0);
var G__7797 = (0);
seq__7138_7769 = G__7794;
chunk__7139_7770 = G__7795;
count__7140_7771 = G__7796;
i__7141_7772 = G__7797;
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

break;
case "command":
return null;

break;
default:
return nex.core.show_runtime_output_BANG_(output,result);

}
}));

return run_promise.catch((function (e){
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
}));
}catch (e7120){var e = e7120;
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
var run_promise = ((has_defs_QMARK_)?nex.core.run_program_BANG_(ctx,source):nex.core.eval_statement_block_BANG_(ctx,trimmed));
run_promise.then((function (p__7143){
var map__7144 = p__7143;
var map__7144__$1 = cljs.core.__destructure_map(map__7144);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7144__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7144__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
nex.core.show_runtime_output_BANG_(output,result);

if(((cljs.core.empty_QMARK_(output)) && ((result == null)))){
return nex.core.append_line_BANG_("info","Program loaded and executed.");
} else {
return null;
}
}));

return run_promise.catch((function (e){
return nex.core.append_line_BANG_("err",(""+"Error: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = e.message;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
}
})())));
}));
}catch (e7142){var e = e7142;
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
var map__7145 = cljs.core.deref(nex.core.app_state);
var map__7145__$1 = cljs.core.__destructure_map(map__7145);
var docs_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7145__$1,new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474));
var web_ide_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7145__$1,new cljs.core.Keyword(null,"web-ide-pages","web-ide-pages",-1227866951));
var docs_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7145__$1,new cljs.core.Keyword(null,"docs-page","docs-page",384100997));
var docs_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7145__$1,new cljs.core.Keyword(null,"docs-mode","docs-mode",-1709618583));
var pages = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(docs_mode,new cljs.core.Keyword(null,"web-ide","web-ide",1676910289)))?web_ide_pages:docs_pages);
var pane_title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(docs_mode,new cljs.core.Keyword(null,"web-ide","web-ide",1676910289)))?"Web IDE Guide":"Tutorial");
var max_page = (cljs.core.count(pages) - (1));
var prev_btn = nex.core.by_id("docs-prev");
var next_btn = nex.core.by_id("docs-next");
var pane_title_el = nex.core.by_id("docs-pane-title");
var title_el = nex.core.by_id("docs-title");
var body_el = nex.core.by_id("docs-body");
if(cljs.core.truth_((function (){var and__5140__auto__ = prev_btn;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = next_btn;
if(cljs.core.truth_(and__5140__auto____$1)){
var and__5140__auto____$2 = pane_title_el;
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = title_el;
if(cljs.core.truth_(and__5140__auto____$3)){
return body_el;
} else {
return and__5140__auto____$3;
}
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
(pane_title_el.textContent = pane_title);

(title_el.textContent = (""+"Page "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((docs_page + (1)))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pages))));

(body_el.innerHTML = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pages,docs_page));

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"docs-mode","docs-mode",-1709618583),new cljs.core.Keyword(null,"tutorial","tutorial",1017223195),new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(0)], 0));

nex.core.update_docs_BANG_();

return nex.core.update_tutorial_visibility_BANG_();
});
nex.core.open_web_ide_guide_BANG_ = (function nex$core$open_web_ide_guide_BANG_(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(nex.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"tutorial-visible","tutorial-visible",-1160851578),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"docs-mode","docs-mode",-1709618583),new cljs.core.Keyword(null,"web-ide","web-ide",1676910289),new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(0)], 0));

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
var seq__7159 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll(".menu[open]")));
var chunk__7160 = null;
var count__7161 = (0);
var i__7162 = (0);
while(true){
if((i__7162 < count__7161)){
var menu = chunk__7160.cljs$core$IIndexed$_nth$arity$2(null,i__7162);
menu.removeAttribute("open");


var G__7853 = seq__7159;
var G__7854 = chunk__7160;
var G__7855 = count__7161;
var G__7856 = (i__7162 + (1));
seq__7159 = G__7853;
chunk__7160 = G__7854;
count__7161 = G__7855;
i__7162 = G__7856;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7159);
if(temp__5823__auto__){
var seq__7159__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7159__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7159__$1);
var G__7860 = cljs.core.chunk_rest(seq__7159__$1);
var G__7861 = c__5673__auto__;
var G__7862 = cljs.core.count(c__5673__auto__);
var G__7863 = (0);
seq__7159 = G__7860;
chunk__7160 = G__7861;
count__7161 = G__7862;
i__7162 = G__7863;
continue;
} else {
var menu = cljs.core.first(seq__7159__$1);
menu.removeAttribute("open");


var G__7866 = cljs.core.next(seq__7159__$1);
var G__7867 = null;
var G__7868 = (0);
var G__7869 = (0);
seq__7159 = G__7866;
chunk__7160 = G__7867;
count__7161 = G__7868;
i__7162 = G__7869;
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
(root.innerHTML = (""+"<div class='shell'>"+"  <header class='topbar'><h1>Nex Browser IDE</h1><p>Editor-first workflow with REPL and Canvas.</p></header>"+"  <nav class='menu-bar'>"+"    <details class='menu'><summary>File</summary>"+"      <div class='menu-items'>"+"        <button id='menu-new' class='menu-item-btn' aria-label='New File'>\uFF0B <span>New File (Ctrl/Cmd+N)</span></button>"+"        <button id='menu-open' class='menu-item-btn' aria-label='Open File'>\u21EA <span>Open File (Ctrl/Cmd+O)</span></button>"+"        <button id='menu-save' class='menu-item-btn' aria-label='Save File'>\u2193 <span>Save File (Ctrl/Cmd+S)</span></button>"+"      </div>"+"    </details>"+"    <details class='menu'><summary>Help</summary>"+"      <div class='menu-items'>"+"        <button id='menu-tutorial' class='menu-item-btn' aria-label='Tutorial'>? <span>Tutorial</span></button>"+"        <button id='menu-webide-guide' class='menu-item-btn' aria-label='Web IDE Guide'>\u24D8 <span>Web IDE Guide</span></button>"+"      </div>"+"    </details>"+"    <span id='active-file-label' class='active-file-label'></span>"+"  </nav>"+"  <input id='open-file-input' type='file' accept='.nex,.txt,text/plain' style='display:none' />"+"  <main class='ide'>"+"    <section id='editor-main' class='panel editor-main without-tutorial'>"+"      <h2>Editor</h2>"+"      <div class='editor-workarea'>"+"        <div class='editor-code-wrap'>"+"          <pre id='editor-highlight' aria-hidden='true'></pre>"+"          <textarea id='editor-input' spellcheck='false'></textarea>"+"        </div>"+"        <aside id='tutorial-pane' class='tutorial-pane closed'>"+"          <div class='tutorial-head'>"+"            <h2 id='docs-pane-title'>Tutorial</h2>"+"            <button id='tutorial-close' class='icon-btn' title='Close' aria-label='Close'>\u2715</button>"+"          </div>"+"          <div class='docs-nav'>"+"            <button id='docs-prev' class='icon-btn' title='Previous' aria-label='Previous'>\u2190</button>"+"            <span id='docs-title'></span>"+"            <button id='docs-next' class='icon-btn' title='Next' aria-label='Next'>\u2192</button>"+"          </div>"+"          <article id='docs-body' class='docs-body'></article>"+"        </aside>"+"      </div>"+"      <div class='editor-controls'><button id='editor-format' class='icon-btn' title='Format' aria-label='Format'>\u2263</button><button id='editor-run' class='icon-btn' title='Run In REPL' aria-label='Run In REPL'>\u25B6</button></div>"+"    </section>"+"    <section class='bottom-split'>"+"      <section class='panel repl'>"+"        <h2>REPL</h2>"+"        <div id='repl-output' class='repl-output'></div>"+"        <div class='repl-controls'>"+"          <div class='repl-input-row'>"+"            <input id='repl-input' type='text' placeholder='Enter any Nex expression...' />"+"          </div>"+"          <div class='repl-actions'>"+"            <button id='repl-eval' class='icon-btn' title='Evaluate' aria-label='Evaluate'>\u25B6</button>"+"            <button id='repl-clear' class='icon-btn' title='Clear' aria-label='Clear'>\u232B</button>"+"            <button id='repl-typecheck' class='toggle off'>Typecheck: OFF</button>"+"          </div>"+"        </div>"+"      </section>"+"      <section class='panel canvas'>"+"        <h2>Canvas</h2>"+"        <div id='canvas-host' class='canvas-host'></div>"+"      </section>"+"    </section>"+"  </main>"+"</div>"+"<style>"+"  :root { --bg-0:#07161e; --bg-1:#0f2b3a; --card:#0d2230; --line:#2f5263; --text:#e8f4ff; --muted:#9fb9c8; --accent:#33d1b0; --accent-2:#ffd166; --code-bg:#041018; --code-line:#234150; --editor-bg:#f8fbff; --editor-ink:#102a3a; --editor-line:#c6d8e5; }"+"  * { box-sizing:border-box; }"+"  html, body { height:100%; }"+"  body { margin:0; font-family:'Space Grotesk', ui-sans-serif, system-ui, sans-serif; color:var(--text); background:radial-gradient(1200px 500px at 10% -10%, #1d5169 0%, transparent 60%), radial-gradient(900px 450px at 100% 0%, #174f44 0%, transparent 58%), linear-gradient(160deg, var(--bg-0), var(--bg-1)); }"+"  .shell { height:100vh; padding:10px; display:grid; grid-template-rows:auto auto minmax(0, 1fr); gap:10px; overflow:hidden; }"+"  .topbar h1 { margin:0; font-size:1.35rem; }"+"  .topbar p { margin:4px 0 10px 0; color:var(--muted); }"+"  .menu-bar { display:flex; align-items:center; gap:10px; margin-bottom:10px; }"+"  .menu { position:relative; }"+"  .menu > summary { list-style:none; cursor:pointer; padding:7px 10px; border:1px solid var(--line); border-radius:8px; background:color-mix(in srgb, var(--card) 88%, transparent); color:var(--text); user-select:none; }"+"  .menu > summary::-webkit-details-marker { display:none; }"+"  .menu-items { position:absolute; top:36px; left:0; z-index:20; min-width:150px; background:color-mix(in srgb, var(--card) 92%, transparent); border:1px solid var(--line); border-radius:8px; padding:6px; box-shadow:0 10px 22px rgba(0,0,0,0.25); display:grid; gap:6px; }"+"  .menu-items button { width:100%; background:color-mix(in srgb, var(--card) 82%, transparent); color:var(--text); border:1px solid var(--line); }"+"  .menu-item-btn { display:flex; align-items:center; gap:8px; text-align:left; font-weight:600; }"+"  .active-file-label { margin-left:auto; font-size:0.9rem; color:var(--muted); font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; }"+"  .ide { display:grid; grid-template-rows:minmax(0, 1fr) minmax(220px, 38vh); gap:12px; min-height:0; }"+"  .panel { background:color-mix(in srgb, var(--card) 90%, transparent); border:1px solid var(--line); border-radius:10px; padding:10px; backdrop-filter:blur(4px); }"+"  .panel h2 { margin:0 0 8px; font-size:1rem; color:var(--accent-2); }"+"  .editor-main { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; gap:8px; }"+"  .editor-workarea { min-height:0; display:grid; grid-template-columns:minmax(0, 1fr); gap:12px; }"+"  .editor-main.with-tutorial .editor-workarea { grid-template-columns:minmax(0, 1fr) minmax(300px, 40%); }"+"  .editor-code-wrap { position:relative; height:100%; min-height:0; border:1px solid var(--editor-line); border-radius:8px; overflow:auto; background:var(--editor-bg); }"+"  #editor-highlight { margin:0; padding:10px; min-height:100%; white-space:pre; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.92rem; line-height:1.4; pointer-events:none; color:var(--editor-ink); }"+"  textarea#editor-input { position:absolute; inset:0; width:100%; height:100%; resize:none; margin:0; padding:10px; border:0; outline:none; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.92rem; line-height:1.4; background:transparent; color:transparent; caret-color:var(--editor-ink); }"+"  textarea#editor-input::selection { background:rgba(51,209,176,0.25); color:transparent; }"+"  .tok-comment { color:#5e7384; font-style:italic; } .tok-kw { color:#5a1a86; font-weight:600; } .tok-type { color:#1e4ea1; font-weight:600; } .tok-const { color:#a61b3b; font-weight:600; } .tok-builtin { color:#0a6c67; } .tok-num { color:#8f1f73; } .tok-str { color:#1f6f42; } .tok-op { color:#9f3a15; font-weight:600; }"+"  .editor-controls { display:flex; justify-content:flex-start; gap:8px; }"+"  .bottom-split { display:grid; grid-template-columns:1fr 1fr; gap:12px; min-height:0; }"+"  .repl { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr) auto; }"+"  .repl-output { min-height:0; overflow:auto; background:var(--code-bg); color:#d4efff; border:1px solid var(--code-line); border-radius:8px; padding:8px; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.9rem; }"+"  .repl-line { margin-bottom:4px; white-space:pre-wrap; } .repl-line.input { color:#6ec6ff; } .repl-line.result { color:#8ee59e; } .repl-line.err { color:#ff8a8a; } .repl-line.info { color:#f7cf86; }"+"  .repl-controls { margin-top:8px; display:grid; row-gap:8px; }"+"  .repl-controls input { width:100%; min-width:0; padding:8px; border:1px solid var(--line); border-radius:8px; background:#102a3a; color:var(--text); }"+"  .repl-actions { display:flex; gap:8px; flex-wrap:wrap; }"+"  button { border:1px solid var(--accent); background:var(--accent); color:#fff; border-radius:8px; padding:8px 12px; cursor:pointer; }"+"  button.icon-btn { min-width:36px; min-height:36px; padding:6px 10px; font-size:1rem; line-height:1; font-weight:700; }"+"  button.toggle.off { background:#5e7282; border-color:#5e7282; } button.toggle.on { background:#2f7a34; border-color:#2f7a34; }"+"  button:disabled { opacity:0.5; cursor:default; }"+"  .canvas { min-height:0; display:grid; grid-template-rows:auto minmax(0, 1fr); }"+"  .canvas-host { min-height:0; height:100%; border:1px dashed var(--line); border-radius:8px; padding:8px; background:#0b1f2b; overflow:auto; }"+"  .tutorial-pane { min-height:0; border:1px solid var(--line); border-radius:8px; background:color-mix(in srgb, var(--card) 94%, transparent); padding:8px; display:grid; grid-template-rows:auto auto minmax(0, 1fr); gap:8px; }"+"  .tutorial-pane.closed { display:none; }"+"  .tutorial-pane.open { display:grid; }"+"  .tutorial-head { display:flex; align-items:center; justify-content:space-between; }"+"  .docs-nav { display:flex; align-items:center; justify-content:space-between; gap:8px; }"+"  .docs-body { min-height:0; border:1px solid var(--editor-line); border-radius:8px; padding:10px; color:var(--editor-ink); background:var(--editor-bg); overflow:auto; }"+"  .docs-body h3 { margin:0 0 8px; font-size:1rem; color:var(--editor-ink); } .docs-body p { margin:0 0 8px; color:#36546a; line-height:1.35; }"+"  .docs-body code { font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size:0.88rem; } .docs-body pre { margin:0 0 8px; padding:8px; border:1px solid var(--editor-line); border-radius:8px; background:#eef5fb; overflow:auto; } .docs-body pre code { color:var(--editor-ink); }"+"  @media (max-width: 1200px) { .editor-main.with-tutorial .editor-workarea { grid-template-columns:1fr; grid-template-rows:minmax(0, 1fr) minmax(220px, 40%); } }"+"  @media (max-width: 980px) { .shell { height:auto; min-height:100vh; overflow:visible; } .ide { grid-template-rows:minmax(0, 1fr) auto; } .bottom-split { grid-template-columns:1fr; } .canvas-host { min-height:220px; } }"+"</style>"));

nex.core.load_storage_state_BANG_();

nex.core.update_typecheck_ui_BANG_();

var active_file_7931 = new cljs.core.Keyword(null,"editor-active-file","editor-active-file",-970607489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(nex.core.app_state));
var active_content_7933 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(nex.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor-files","editor-files",-1923906955),active_file_7931], null),nex.core.default_editor_source);
(nex.core.by_id("editor-input").value = active_content_7933);

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

nex.core.by_id("menu-webide-guide").addEventListener("click",(function (_){
nex.core.open_web_ide_guide_BANG_();

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
var G__7239 = e.key;
switch (G__7239) {
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(function (p1__7200_SHARP_){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(p1__7200_SHARP_ - (1)));
}));

return nex.core.update_docs_BANG_();
}));

nex.core.by_id("docs-next").addEventListener("click",(function (_){
var map__7267_7986 = cljs.core.deref(nex.core.app_state);
var map__7267_7987__$1 = cljs.core.__destructure_map(map__7267_7986);
var docs_mode_7988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7267_7987__$1,new cljs.core.Keyword(null,"docs-mode","docs-mode",-1709618583));
var docs_pages_7989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7267_7987__$1,new cljs.core.Keyword(null,"docs-pages","docs-pages",-1391259474));
var web_ide_pages_7990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7267_7987__$1,new cljs.core.Keyword(null,"web-ide-pages","web-ide-pages",-1227866951));
var pages_7991 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(docs_mode_7988,new cljs.core.Keyword(null,"web-ide","web-ide",1676910289)))?web_ide_pages_7990:docs_pages_7989);
var last_page_7992 = (cljs.core.count(pages_7991) - (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nex.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"docs-page","docs-page",384100997),(function (p1__7201_SHARP_){
return cljs.core.min.cljs$core$IFn$_invoke$arity$2(last_page_7992,(p1__7201_SHARP_ + (1)));
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

return nex.core.append_line_BANG_("info","Browser IDE build: 2026-03-11z");
});
nex.core.init = (function nex$core$init(){
return nex.core.render_BANG_();
});

//# sourceMappingURL=nex.core.js.map
