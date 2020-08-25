(ns url-shortner.spark
  (:require [clojure.string :as s])
  (:import [spark Spark Route Request Response]
           [org.slf4j Logger LoggerFactory]))

(def logger (LoggerFactory/getLogger "url_shortner.spark"))

(defn- headers->map
  [^Request request]
  (when-let [headers (seq (.headers request))]
    (into {}
      (map (fn [h] [(keyword h) (.headers request h)])
        headers))))

(defn- params->map
  [request]
  (when-let [params (seq (.params request))]
    (into {}
      (map (fn [[^String k v]]
             (let [k (if (.startsWith k ":")
                       (subs k 1)
                       k)]
               [(keyword k) v]))
        params))))

(defn- request->map
  [^Request request]
  {:body (.body request)
   :headers (headers->map request)
   :params (into {} (params->map request))})

(defn- update-response!
  [m ^Response response]
  (when-let [s (:status m)]
    (.status response s))
  (when-let [headers (:headers m)]
    (doseq [[k v] headers]
      (.header response (name k) v)))
  (if (= (:status m) 302)
    (.redirect response (:Location (:headers m)))
    (:body m)))

(defn- make-handler
  [f]
  (reify Route
    (handle [_ ^Request request ^Response response]
      (try
        (let [r (f (request->map request))]
          (update-response! r response))
        (catch Exception ex
          (.error logger (str "Failed to process request." (.getMessage ex)))
          (throw ex))))))

(defn port!
  [p]
  (Spark/port p))

(defn GET
  [resource handler]
  (Spark/get resource (make-handler handler)))

(defn POST
  [resource handler]
  (Spark/post resource (make-handler handler)))
