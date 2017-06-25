;; A persistent priority queue implemented with a leftist heap.
;; Copyright (C) 2017 Vijay Mathew Pandyalakal <vijay.the.lisper@gmail.com>
;; This code is in the public domain.

(ns lhpq)

(def empty-heap :E)

(defn empty-heap?
  [h]
  (= h empty-heap))

(defn node-rank
  [h]
  (if (empty-heap? h)
    0
    (first h)))

(defn make-node
  [obj subtree-a subtree-b]
  (let [ra (node-rank subtree-a)
        rb (node-rank subtree-b)]
    (if (>= ra rb)
      [(inc rb) obj subtree-a subtree-b]
      [(inc ra) obj subtree-b subtree-a])))

(defn heap-merge
  [h1 h2]
  (cond
    (empty-heap? h1) h2
    (empty-heap? h2) h1
    :else (let [[_ x a1 b1] h1
                [_ y a2 b2] h2]
            (if (<= x y)
              (make-node x a1 (heap-merge b1 h2))
              (make-node y a2 (heap-merge h1 b2))))))

(defn pq-insert
  [obj h]
  (heap-merge [1 obj empty-heap empty-heap] h))

(defn pq-find-min
  [h]
  (when-not (empty-heap? h)
    (let [[_ obj _ _] h] obj)))

(defn pq-delete-min
  [h]
  (if (empty-heap? h)
    h
    (let [[_ obj left right] h]
      (heap-merge left right))))

(defn pq-insert-all
  "Insert all elements from the sequence `xs` into the
   priority queue `pq`."
  [objs pq]
  (loop [xs objs, pq pq]
    (if (seq xs)
      (recur (rest xs) (pq-insert (first xs) pq))
      pq)))

(deftype LeftistHeapPriorityQueue [pq]
  clojure.lang.ISeq
  ;; return a seq of the rest of the elements,
  ;; return nil if no elements remain.
  (next [_] (let [pq-rest (pq-delete-min pq)]
              (when-not (empty-heap? pq-rest)
                (LeftistHeapPriorityQueue. pq-rest))))

  ;; return the first element.
  (first [_] (pq-find-min pq))

  ;; return the sequence with the first item removed,
  ;; or an empty sequence if no items remain.
  (more [this] (or (next this) '()))

  ;; return a new sequence with `obj` prefixed, called via the global `conj`.
  (cons [_ obj] (LeftistHeapPriorityQueue. (pq-insert obj pq)))

  clojure.lang.Seqable
  (seq [this] (when (.next this) this)))

(defn priority-queue
  ([objs]
   (LeftistHeapPriorityQueue. (pq-insert-all objs empty-heap)))
  ([]
   (priority-queue [])))

(defmethod print-method LeftistHeapPriorityQueue
  [tree ^java.io.Writer w]
  (.write w (str "#lhpq<" (.first tree) " ...>")))
