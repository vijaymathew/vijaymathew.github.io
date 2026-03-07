goog.provide('nex.turtle_browser');
nex.turtle_browser.named_colors = cljs.core.PersistentHashMap.fromArrays(["blue","cyan","white","purple","magenta","grey","orange","gray","yellow","pink","green","red","brown","black"],["#0000ff","#00ffff","#ffffff","#800080","#ff00ff","#808080","#ffa500","#808080","#ffff00","#ffc0cb","#008000","#ff0000","#8b4513","#000000"]);
if((typeof nex !== 'undefined') && (typeof nex.turtle_browser !== 'undefined') && (typeof nex.turtle_browser.window_host !== 'undefined')){
} else {
nex.turtle_browser.window_host = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Set DOM element where Window.show() mounts canvases.
 * When nil, defaults to document.body.
 */
nex.turtle_browser.set_window_host_BANG_ = (function nex$turtle_browser$set_window_host_BANG_(el){
cljs.core.reset_BANG_(nex.turtle_browser.window_host,el);

return null;
});
nex.turtle_browser.ensure_dom_BANG_ = (function nex$turtle_browser$ensure_dom_BANG_(){
if((typeof document !== 'undefined')){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Window/Turtle requires a browser DOM environment",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Parse a color string. Accepts named colors or CSS color strings.
 */
nex.turtle_browser.parse_color = (function nex$turtle_browser$parse_color(s){
var k = clojure.string.lower_case(clojure.string.trim((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.named_colors,k);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
/**
 * Convert a speed value (0-10) to a delay in ms.
 */
nex.turtle_browser.speed_delay = (function nex$turtle_browser$speed_delay(speed){
if((speed <= (0))){
return (0);
} else {
if((speed >= (10))){
return (5);
} else {
return cljs.core.long$(((200) / speed));

}
}
});
nex.turtle_browser.now_ms = (function nex$turtle_browser$now_ms(){
if((typeof performance !== 'undefined')){
return performance.now();
} else {
return Date.now();
}
});
nex.turtle_browser.draw_turtle_cursor = (function nex$turtle_browser$draw_turtle_cursor(ctx,x,y,heading,color,shape){
ctx.save();

ctx.translate(x,y);

ctx.rotate(((-1) * ((heading * Math.PI) / 180.0)));

(ctx.fillStyle = color);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"circle","circle",1903212362))){
ctx.beginPath();

ctx.arc((0),(0),(6),(0),((2) * Math.PI));

ctx.fill();
} else {
ctx.beginPath();

ctx.moveTo((12),(0));

ctx.lineTo((-6),(-7));

ctx.lineTo((-6),(7));

ctx.closePath();

ctx.fill();
}

return ctx.restore();
});
nex.turtle_browser.canvas_coords = (function nex$turtle_browser$canvas_coords(win_state,turtle_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(win_state) / 2.0) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(turtle_state)),((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(win_state) / 2.0) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(turtle_state))], null);
});
nex.turtle_browser.repaint_overlay_BANG_ = (function nex$turtle_browser$repaint_overlay_BANG_(win){
var s = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx = new cljs.core.Keyword(null,"overlay-ctx","overlay-ctx",-1070944149).cljs$core$IFn$_invoke$arity$1(s);
var turtles = new cljs.core.Keyword(null,"turtles","turtles",808471899).cljs$core$IFn$_invoke$arity$1(s);
ctx.clearRect((0),(0),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(s));

var seq__6042 = cljs.core.seq(turtles);
var chunk__6043 = null;
var count__6044 = (0);
var i__6045 = (0);
while(true){
if((i__6045 < count__6044)){
var t = chunk__6043.cljs$core$IIndexed$_nth$arity$2(null,i__6045);
var ts_6278 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(ts_6278))){
var vec__6060_6280 = nex.turtle_browser.canvas_coords(s,ts_6278);
var cx_6281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6060_6280,(0),null);
var cy_6282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6060_6280,(1),null);
nex.turtle_browser.draw_turtle_cursor(ctx,cx_6281,cy_6282,new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(ts_6278),nex.turtle_browser.parse_color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(ts_6278)),new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(ts_6278));
} else {
}


var G__6283 = seq__6042;
var G__6284 = chunk__6043;
var G__6285 = count__6044;
var G__6286 = (i__6045 + (1));
seq__6042 = G__6283;
chunk__6043 = G__6284;
count__6044 = G__6285;
i__6045 = G__6286;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6042);
if(temp__5823__auto__){
var seq__6042__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6042__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6042__$1);
var G__6287 = cljs.core.chunk_rest(seq__6042__$1);
var G__6288 = c__5673__auto__;
var G__6289 = cljs.core.count(c__5673__auto__);
var G__6290 = (0);
seq__6042 = G__6287;
chunk__6043 = G__6288;
count__6044 = G__6289;
i__6045 = G__6290;
continue;
} else {
var t = cljs.core.first(seq__6042__$1);
var ts_6291 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(ts_6291))){
var vec__6064_6292 = nex.turtle_browser.canvas_coords(s,ts_6291);
var cx_6293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064_6292,(0),null);
var cy_6294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6064_6292,(1),null);
nex.turtle_browser.draw_turtle_cursor(ctx,cx_6293,cy_6294,new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(ts_6291),nex.turtle_browser.parse_color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(ts_6291)),new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(ts_6291));
} else {
}


var G__6295 = cljs.core.next(seq__6042__$1);
var G__6296 = null;
var G__6297 = (0);
var G__6298 = (0);
seq__6042 = G__6295;
chunk__6043 = G__6296;
count__6044 = G__6297;
i__6045 = G__6298;
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
 * Create a browser window backed by HTML canvas.
 */
nex.turtle_browser.create_window = (function nex$turtle_browser$create_window(var_args){
var G__6071 = arguments.length;
switch (G__6071) {
case 0:
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$0 = (function (){
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3("Nex Turtle Graphics",(800),(600));
}));

(nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$1 = (function (title){
return nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3(title,(800),(600));
}));

(nex.turtle_browser.create_window.cljs$core$IFn$_invoke$arity$3 = (function (title,w,h){
nex.turtle_browser.ensure_dom_BANG_();

var draw_canvas = document.createElement("canvas");
var overlay_canvas = document.createElement("canvas");
var container = document.createElement("div");
var draw_ctx = draw_canvas.getContext("2d");
var overlay_ctx = overlay_canvas.getContext("2d");
var width = (w | 0);
var height = (h | 0);
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928),new cljs.core.Keyword(null,"overlay-ctx","overlay-ctx",-1070944149),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"bg-color","bg-color",455102491),new cljs.core.Keyword(null,"turtles","turtles",808471899),new cljs.core.Keyword(null,"height","height",1025178622)],[(14),"#000000",overlay_ctx,width,draw_canvas,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)),overlay_canvas,container,draw_ctx,"#ffffff",cljs.core.PersistentVector.EMPTY,height]));
(draw_canvas.width = width);

(draw_canvas.height = height);

(overlay_canvas.width = width);

(overlay_canvas.height = height);

(container.style.position = "relative");

(container.style.width = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)+"px"));

(container.style.height = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)+"px"));

(container.style.border = "1px solid #d0d0d0");

(container.style.margin = "8px 0");

(draw_canvas.style.position = "absolute");

(draw_canvas.style.left = "0");

(draw_canvas.style.top = "0");

(overlay_canvas.style.position = "absolute");

(overlay_canvas.style.left = "0");

(overlay_canvas.style.top = "0");

(overlay_canvas.style.pointerEvents = "none");

container.appendChild(draw_canvas);

container.appendChild(overlay_canvas);

(draw_ctx.fillStyle = "#ffffff");

draw_ctx.fillRect((0),(0),width,height);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Window","Window",-1779391782),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
}));

(nex.turtle_browser.create_window.cljs$lang$maxFixedArity = 3);

nex.turtle_browser.window_state = (function nex$turtle_browser$window_state(state_key,win){
var G__6096 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
return (state_key.cljs$core$IFn$_invoke$arity$1 ? state_key.cljs$core$IFn$_invoke$arity$1(G__6096) : state_key.call(null,G__6096));
});
nex.turtle_browser.window_height = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.window_state,new cljs.core.Keyword(null,"height","height",1025178622));
nex.turtle_browser.window_width = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.window_state,new cljs.core.Keyword(null,"width","width",-384071477));
nex.turtle_browser.show_window = (function nex$turtle_browser$show_window(win){
nex.turtle_browser.ensure_dom_BANG_();

var map__6104_6317 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var map__6104_6318__$1 = cljs.core.__destructure_map(map__6104_6317);
var container_6319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6104_6318__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
var title_6320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6104_6318__$1,new cljs.core.Keyword(null,"title","title",636505583));
var host_6321 = (function (){var or__5142__auto__ = cljs.core.deref(nex.turtle_browser.window_host);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return document.body;
}
})();
if(cljs.core.truth_(container_6319.isConnected)){
} else {
host_6321.appendChild(container_6319);
}

(document.title = title_6320);

nex.turtle_browser.repaint_overlay_BANG_(win);

return null;
});
nex.turtle_browser.close_window = (function nex$turtle_browser$close_window(win){
var map__6124_6325 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var map__6124_6326__$1 = cljs.core.__destructure_map(map__6124_6325);
var container_6327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6124_6326__$1,new cljs.core.Keyword(null,"container","container",-1736937707));
if(cljs.core.truth_(container_6327.isConnected)){
container_6327.remove();
} else {
}

return null;
});
nex.turtle_browser.repaint_window = (function nex$turtle_browser$repaint_window(win){
nex.turtle_browser.repaint_overlay_BANG_(win);

return null;
});
nex.turtle_browser.clear_window = (function nex$turtle_browser$clear_window(win){
var s_6332 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6333 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6332);
(ctx_6333.fillStyle = new cljs.core.Keyword(null,"bg-color","bg-color",455102491).cljs$core$IFn$_invoke$arity$1(s_6332));

ctx_6333.fillRect((0),(0),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(s_6332),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(s_6332));

nex.turtle_browser.repaint_window(win);

return null;
});
nex.turtle_browser.set_bgcolor = (function nex$turtle_browser$set_bgcolor(win,color_str){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win),cljs.core.assoc,new cljs.core.Keyword(null,"bg-color","bg-color",455102491),nex.turtle_browser.parse_color(color_str));

return nex.turtle_browser.clear_window(win);
});
nex.turtle_browser.set_draw_color = (function nex$turtle_browser$set_draw_color(win,color_str){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win),cljs.core.assoc,new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928),nex.turtle_browser.parse_color(color_str));

return null;
});
nex.turtle_browser.set_font_size = (function nex$turtle_browser$set_font_size(win,size){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win),cljs.core.assoc,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(size | 0));

return null;
});
nex.turtle_browser.draw_line = (function nex$turtle_browser$draw_line(win,x1,y1,x2,y2){
var s_6341 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6342 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6341);
(ctx_6342.strokeStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6341));

ctx_6342.beginPath();

ctx_6342.moveTo(x1,y1);

ctx_6342.lineTo(x2,y2);

ctx_6342.stroke();

return null;
});
nex.turtle_browser.draw_rect = (function nex$turtle_browser$draw_rect(win,x,y,w,h){
var s_6344 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6345 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6344);
(ctx_6345.strokeStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6344));

ctx_6345.strokeRect(x,y,w,h);

return null;
});
nex.turtle_browser.fill_rect = (function nex$turtle_browser$fill_rect(win,x,y,w,h){
var s_6348 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6349 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6348);
(ctx_6349.fillStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6348));

ctx_6349.fillRect(x,y,w,h);

return null;
});
nex.turtle_browser.draw_circle = (function nex$turtle_browser$draw_circle(win,x,y,r){
var s_6350 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6351 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6350);
(ctx_6351.strokeStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6350));

ctx_6351.beginPath();

ctx_6351.arc(x,y,r,(0),((2) * Math.PI));

ctx_6351.stroke();

return null;
});
nex.turtle_browser.fill_circle = (function nex$turtle_browser$fill_circle(win,x,y,r){
var s_6354 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6355 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6354);
(ctx_6355.fillStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6354));

ctx_6355.beginPath();

ctx_6355.arc(x,y,r,(0),((2) * Math.PI));

ctx_6355.fill();

return null;
});
nex.turtle_browser.draw_text = (function nex$turtle_browser$draw_text(win,text,x,y){
var s_6357 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var ctx_6358 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6357);
(ctx_6358.fillStyle = new cljs.core.Keyword(null,"draw-color","draw-color",-1946271928).cljs$core$IFn$_invoke$arity$1(s_6357));

(ctx_6358.font = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(s_6357))+"px sans-serif"));

ctx_6358.fillText((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)),x,y);

return null;
});
nex.turtle_browser.window_sleep = (function nex$turtle_browser$window_sleep(_win,ms){
var end_6363 = (nex.turtle_browser.now_ms() + ms);
while(true){
if((nex.turtle_browser.now_ms() < end_6363)){

continue;
} else {
}
break;
}

return null;
});
nex.turtle_browser.create_image = (function nex$turtle_browser$create_image(path){
nex.turtle_browser.ensure_dom_BANG_();

var img = (new Image());
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"image","image",-58725096),img,new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false], null));
(img.onload = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),img.naturalWidth,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),img.naturalHeight,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true], 0));
}));

(img.src = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Image","Image",-1429161147),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});
nex.turtle_browser.image_width = (function nex$turtle_browser$image_width(img){
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(img)));
});
nex.turtle_browser.image_height = (function nex$turtle_browser$image_height(img){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(img)));
});
nex.turtle_browser.draw_image = (function nex$turtle_browser$draw_image(win,img,x,y){
var s_6372 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var is_6373 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(img));
var ctx_6374 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6372);
ctx_6374.drawImage(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(is_6373),x,y);

return null;
});
nex.turtle_browser.draw_image_scaled = (function nex$turtle_browser$draw_image_scaled(win,img,x,y,w,h){
var s_6375 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var is_6376 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(img));
var ctx_6377 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6375);
ctx_6377.drawImage(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(is_6376),x,y,w,h);

return null;
});
nex.turtle_browser.draw_image_rotated = (function nex$turtle_browser$draw_image_rotated(win,img,x,y,angle){
var s_6379 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win));
var is_6380 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(img));
var ctx_6381 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(s_6379);
var iw_6382 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(is_6380);
var ih_6383 = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(is_6380);
var cx_6384 = (x + (iw_6382 / 2.0));
var cy_6385 = (y + (ih_6383 / 2.0));
ctx_6381.save();

ctx_6381.translate(cx_6384,cy_6385);

ctx_6381.rotate(((angle * Math.PI) / 180.0));

ctx_6381.drawImage(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(is_6380),(- (iw_6382 / 2.0)),(- (ih_6383 / 2.0)));

ctx_6381.restore();

return null;
});
nex.turtle_browser.create_turtle = (function nex$turtle_browser$create_turtle(win){
var turtle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nex-builtin-type","nex-builtin-type",378923258),new cljs.core.Keyword(null,"Turtle","Turtle",572208937),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pen-size","pen-size",-745234368),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"fill-points","fill-points",619110309),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.Keyword(null,"filling?","filling?",1240783572),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522),new cljs.core.Keyword(null,"heading","heading",-1312171873)],[(1),0.0,"black",true,"black",cljs.core.PersistentVector.EMPTY,(6),win,false,new cljs.core.Keyword(null,"classic","classic",-599706370),0.0,true,90.0]))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win),cljs.core.update,new cljs.core.Keyword(null,"turtles","turtles",808471899),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([turtle], 0));

nex.turtle_browser.repaint_window(win);

return turtle;
});
nex.turtle_browser.turtle_state = (function nex$turtle_browser$turtle_state(state_key,turtle){
var G__6161 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
return (state_key.cljs$core$IFn$_invoke$arity$1 ? state_key.cljs$core$IFn$_invoke$arity$1(G__6161) : state_key.call(null,G__6161));
});
nex.turtle_browser.turtle_window = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.turtle_state,new cljs.core.Keyword(null,"window","window",724519534));
nex.turtle_browser.turtle_x = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.turtle_state,new cljs.core.Keyword(null,"x","x",2099068185));
nex.turtle_browser.turtle_y = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(nex.turtle_browser.turtle_state,new cljs.core.Keyword(null,"y","y",-1757859776));
nex.turtle_browser.stroke_segment_BANG_ = (function nex$turtle_browser$stroke_segment_BANG_(ctx,s,sx,sy,ex,ey){
(ctx.strokeStyle = nex.turtle_browser.parse_color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(s)));

(ctx.lineWidth = new cljs.core.Keyword(null,"pen-size","pen-size",-745234368).cljs$core$IFn$_invoke$arity$1(s));

(ctx.lineCap = "round");

(ctx.lineJoin = "round");

ctx.beginPath();

ctx.moveTo(sx,sy);

ctx.lineTo(ex,ey);

return ctx.stroke();
});
nex.turtle_browser.turtle_forward = (function nex$turtle_browser$turtle_forward(turtle,dist){
var ts_6402 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
var win_6403 = new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(ts_6402);
var ws_6404 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win_6403));
var ctx_6405 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(ws_6404);
var rad_6406 = ((new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(ts_6402) * Math.PI) / 180.0);
var dx_6407 = (dist * Math.cos(rad_6406));
var dy_6408 = (dist * Math.sin(rad_6406));
var new_x_6409 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ts_6402) + dx_6407);
var new_y_6410 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ts_6402) + dy_6408);
var next_ts_6411 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ts_6402,new cljs.core.Keyword(null,"x","x",2099068185),new_x_6409,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new_y_6410], 0));
var vec__6167_6412 = nex.turtle_browser.canvas_coords(ws_6404,ts_6402);
var sx_6413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6167_6412,(0),null);
var sy_6414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6167_6412,(1),null);
var vec__6170_6415 = nex.turtle_browser.canvas_coords(ws_6404,next_ts_6411);
var ex_6416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6170_6415,(0),null);
var ey_6417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6170_6415,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522).cljs$core$IFn$_invoke$arity$1(ts_6402))){
nex.turtle_browser.stroke_segment_BANG_(ctx_6405,ts_6402,sx_6413,sy_6414,ex_6416,ey_6417);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),new_x_6409,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new_y_6410], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"filling?","filling?",1240783572).cljs$core$IFn$_invoke$arity$1(ts_6402))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.update,new cljs.core.Keyword(null,"fill-points","fill-points",619110309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x_6409,new_y_6410], null)], 0));
} else {
}

nex.turtle_browser.repaint_window(win_6403);

var delay_6426 = nex.turtle_browser.speed_delay(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(ts_6402));
if((delay_6426 > (0))){
nex.turtle_browser.window_sleep(win_6403,delay_6426);
} else {
}

return null;
});
nex.turtle_browser.turtle_backward = (function nex$turtle_browser$turtle_backward(turtle,dist){
return nex.turtle_browser.turtle_forward(turtle,(- dist));
});
nex.turtle_browser.turtle_right = (function nex$turtle_browser$turtle_right(turtle,angle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.update,new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (p1__6182_SHARP_){
return (p1__6182_SHARP_ - angle);
}));

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});
nex.turtle_browser.turtle_left = (function nex$turtle_browser$turtle_left(turtle,angle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.update,new cljs.core.Keyword(null,"heading","heading",-1312171873),(function (p1__6186_SHARP_){
return (p1__6186_SHARP_ + angle);
}));

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});
nex.turtle_browser.turtle_penup = (function nex$turtle_browser$turtle_penup(turtle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522),false);

return null;
});
nex.turtle_browser.turtle_pendown = (function nex$turtle_browser$turtle_pendown(turtle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522),true);

return null;
});
nex.turtle_browser.turtle_color = (function nex$turtle_browser$turtle_color(turtle,color_str){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_str)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_str))], 0));

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});
nex.turtle_browser.turtle_pensize = (function nex$turtle_browser$turtle_pensize(turtle,size){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"pen-size","pen-size",-745234368),size);

return null;
});
nex.turtle_browser.turtle_speed = (function nex$turtle_browser$turtle_speed(turtle,spd){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"speed","speed",1257663751),spd);

return null;
});
nex.turtle_browser.turtle_shape = (function nex$turtle_browser$turtle_shape(turtle,shape_str){
var s_6437 = clojure.string.lower_case((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_str)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (){var G__6199 = s_6437;
switch (G__6199) {
case "circle":
return new cljs.core.Keyword(null,"circle","circle",1903212362);

break;
default:
return new cljs.core.Keyword(null,"classic","classic",-599706370);

}
})());

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});
nex.turtle_browser.turtle_goto = (function nex$turtle_browser$turtle_goto(turtle,x,y){
var ts_6439 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
var win_6440 = new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(ts_6439);
var ws_6441 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win_6440));
var ctx_6442 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(ws_6441);
var nx_6443 = x;
var ny_6444 = y;
var next_ts_6445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ts_6439,new cljs.core.Keyword(null,"x","x",2099068185),nx_6443,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),ny_6444], 0));
var vec__6200_6446 = nex.turtle_browser.canvas_coords(ws_6441,ts_6439);
var sx_6447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200_6446,(0),null);
var sy_6448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6200_6446,(1),null);
var vec__6203_6449 = nex.turtle_browser.canvas_coords(ws_6441,next_ts_6445);
var ex_6450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6203_6449,(0),null);
var ey_6451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6203_6449,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522).cljs$core$IFn$_invoke$arity$1(ts_6439))){
nex.turtle_browser.stroke_segment_BANG_(ctx_6442,ts_6439,sx_6447,sy_6448,ex_6450,ey_6451);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),nx_6443,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),ny_6444], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"filling?","filling?",1240783572).cljs$core$IFn$_invoke$arity$1(ts_6439))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.update,new cljs.core.Keyword(null,"fill-points","fill-points",619110309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx_6443,ny_6444], null)], 0));
} else {
}

nex.turtle_browser.repaint_window(win_6440);

var delay_6456 = nex.turtle_browser.speed_delay(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(ts_6439));
if((delay_6456 > (0))){
nex.turtle_browser.window_sleep(win_6440,delay_6456);
} else {
}

return null;
});
nex.turtle_browser.turtle_circle = (function nex$turtle_browser$turtle_circle(turtle,radius){
var ts_6457 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
var win_6458 = new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(ts_6457);
var ws_6459 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win_6458));
var ctx_6460 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(ws_6459);
var vec__6214_6461 = nex.turtle_browser.canvas_coords(ws_6459,ts_6457);
var cx_6462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6214_6461,(0),null);
var cy_6463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6214_6461,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pen-down?","pen-down?",538530522).cljs$core$IFn$_invoke$arity$1(ts_6457))){
(ctx_6460.strokeStyle = nex.turtle_browser.parse_color(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(ts_6457)));

(ctx_6460.lineWidth = new cljs.core.Keyword(null,"pen-size","pen-size",-745234368).cljs$core$IFn$_invoke$arity$1(ts_6457));

ctx_6460.beginPath();

ctx_6460.arc(cx_6462,cy_6463,Math.abs(radius),(0),((2) * Math.PI));

ctx_6460.stroke();
} else {
}

nex.turtle_browser.repaint_window(win_6458);

var delay_6468 = nex.turtle_browser.speed_delay(new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(ts_6457));
if((delay_6468 > (0))){
nex.turtle_browser.window_sleep(win_6458,delay_6468);
} else {
}

return null;
});
nex.turtle_browser.turtle_begin_fill = (function nex$turtle_browser$turtle_begin_fill(turtle){
var ts_6469 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"filling?","filling?",1240783572),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-points","fill-points",619110309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(ts_6469),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(ts_6469)], null)], null),new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(ts_6469)], 0));

return null;
});
nex.turtle_browser.turtle_end_fill = (function nex$turtle_browser$turtle_end_fill(turtle){
var ts_6474 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle));
var win_6475 = new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(ts_6474);
var ws_6476 = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(win_6475));
var ctx_6477 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(ws_6476);
var points_6478 = new cljs.core.Keyword(null,"fill-points","fill-points",619110309).cljs$core$IFn$_invoke$arity$1(ts_6474);
if(cljs.core.truth_((function (){var and__5140__auto__ = new cljs.core.Keyword(null,"filling?","filling?",1240783572).cljs$core$IFn$_invoke$arity$1(ts_6474);
if(cljs.core.truth_(and__5140__auto__)){
return (cljs.core.count(points_6478) >= (3));
} else {
return and__5140__auto__;
}
})())){
var vec__6226_6480 = cljs.core.first(points_6478);
var fx_6481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6226_6480,(0),null);
var fy_6482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6226_6480,(1),null);
var vec__6229_6483 = nex.turtle_browser.canvas_coords(ws_6476,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),fx_6481,new cljs.core.Keyword(null,"y","y",-1757859776),fy_6482], null));
var sx_6484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6229_6483,(0),null);
var sy_6485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6229_6483,(1),null);
(ctx_6477.fillStyle = nex.turtle_browser.parse_color(new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903).cljs$core$IFn$_invoke$arity$1(ts_6474)));

ctx_6477.beginPath();

ctx_6477.moveTo(sx_6484,sy_6485);

var seq__6233_6489 = cljs.core.seq(cljs.core.rest(points_6478));
var chunk__6234_6490 = null;
var count__6235_6491 = (0);
var i__6236_6492 = (0);
while(true){
if((i__6236_6492 < count__6235_6491)){
var vec__6249_6497 = chunk__6234_6490.cljs$core$IIndexed$_nth$arity$2(null,i__6236_6492);
var px_6498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6249_6497,(0),null);
var py_6499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6249_6497,(1),null);
var vec__6252_6500 = nex.turtle_browser.canvas_coords(ws_6476,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),px_6498,new cljs.core.Keyword(null,"y","y",-1757859776),py_6499], null));
var cx_6501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6252_6500,(0),null);
var cy_6502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6252_6500,(1),null);
ctx_6477.lineTo(cx_6501,cy_6502);


var G__6506 = seq__6233_6489;
var G__6507 = chunk__6234_6490;
var G__6508 = count__6235_6491;
var G__6509 = (i__6236_6492 + (1));
seq__6233_6489 = G__6506;
chunk__6234_6490 = G__6507;
count__6235_6491 = G__6508;
i__6236_6492 = G__6509;
continue;
} else {
var temp__5823__auto___6510 = cljs.core.seq(seq__6233_6489);
if(temp__5823__auto___6510){
var seq__6233_6511__$1 = temp__5823__auto___6510;
if(cljs.core.chunked_seq_QMARK_(seq__6233_6511__$1)){
var c__5673__auto___6512 = cljs.core.chunk_first(seq__6233_6511__$1);
var G__6514 = cljs.core.chunk_rest(seq__6233_6511__$1);
var G__6515 = c__5673__auto___6512;
var G__6516 = cljs.core.count(c__5673__auto___6512);
var G__6517 = (0);
seq__6233_6489 = G__6514;
chunk__6234_6490 = G__6515;
count__6235_6491 = G__6516;
i__6236_6492 = G__6517;
continue;
} else {
var vec__6255_6518 = cljs.core.first(seq__6233_6511__$1);
var px_6519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255_6518,(0),null);
var py_6520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6255_6518,(1),null);
var vec__6258_6522 = nex.turtle_browser.canvas_coords(ws_6476,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),px_6519,new cljs.core.Keyword(null,"y","y",-1757859776),py_6520], null));
var cx_6523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6258_6522,(0),null);
var cy_6524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6258_6522,(1),null);
ctx_6477.lineTo(cx_6523,cy_6524);


var G__6525 = cljs.core.next(seq__6233_6511__$1);
var G__6526 = null;
var G__6527 = (0);
var G__6528 = (0);
seq__6233_6489 = G__6525;
chunk__6234_6490 = G__6526;
count__6235_6491 = G__6527;
i__6236_6492 = G__6528;
continue;
}
} else {
}
}
break;
}

ctx_6477.closePath();

ctx_6477.fill();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"filling?","filling?",1240783572),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-points","fill-points",619110309),cljs.core.PersistentVector.EMPTY], 0));

nex.turtle_browser.repaint_window(win_6475);

return null;
});
nex.turtle_browser.turtle_hide = (function nex$turtle_browser$turtle_hide(turtle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false);

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});
nex.turtle_browser.turtle_show = (function nex$turtle_browser$turtle_show(turtle){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle),cljs.core.assoc,new cljs.core.Keyword(null,"visible?","visible?",2129863715),true);

nex.turtle_browser.repaint_window(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(turtle))));

return null;
});

//# sourceMappingURL=nex.turtle_browser.js.map
