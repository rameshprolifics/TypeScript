var Queue = /** @class */ (function () {
    function Queue(a) {
        this.a = a;
        this.front = 0;
        this.rear = -1;
        this.a = a;
    }
    Queue.prototype.isFull = function () {
        return this.rear == this.a.length - 1; // taking max length of Queue;
    };
    Queue.prototype.enqueue = function (element) {
        if (!this.isFull()) {
            this.a[this.rear] = element; // appending the number in queue from rear  end;
            ++this.rear; // increasing the rear index;
        }
        else {
            console.log("Queue Overflow");
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.front > this.rear;
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            console.log(this.a[this.front]); // removing number from another end and printing on screen ;
            this.front++; // increasing front index;
        }
        else {
            console.log("Queue Underflow");
        }
    };
    return Queue;
}());
var s = new Queue(new Array(10)); // taking array of 10 elements
for (var i = 1; i <= 10; i++) {
    s.enqueue(i * 10);
}
for (var i = 1; i <= 10; i++) {
    s.dequeue();
}
