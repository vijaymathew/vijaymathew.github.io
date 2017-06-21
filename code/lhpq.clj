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
  [x a b]
  (let [ra (node-rank a)
        rb (node-rank b)]
    (if (>= ra rb)
      [(inc rb) x a b]
      [(inc ra) x b a])))

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
  [x h]
  (heap-merge [1 x empty-heap empty-heap] h))

(defn pq-find-min
  [h]
  (when-not (empty-heap? h)
    (let [[_ x _ _] h] x)))

(defn pq-delete-min
  [h]
  (if (empty-heap? h)
    h
    (let [[_ x a b] h]
      (heap-merge a b))))

(defn pq-insert-all
  "Insert all elements from the sequence `xs` into the
   priority queue `pq`."
  [xs pq]
  (loop [xs xs, pq pq]
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
  (more [this] (if-let [n (next this)] n '()))

  ;;  construct a new sequence with the item prepended to this seq.
  (cons [_ xs] (LeftistHeapPriorityQueue. (pq-insert-all xs pq)))

  clojure.lang.Seqable
  (seq [this] (when (.next this) this)))

(defn priority-queue
  ([xs]
   (LeftistHeapPriorityQueue. (pq-insert-all xs empty-heap)))
  ([]
   (priority-queue [])))

(defmethod print-method LeftistHeapPriorityQueue
  [tree ^java.io.Writer w]
  (.write w (str "#LeftistHeapPriorityQueue:" (.first tree))))
