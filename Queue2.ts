class Queue<T>{

	private a:T[]
	private front:number=0;
	private rear:number=-1;


	public constructor(a:T[])
	{
		this.a=a;
	}
	
	public isFull():boolean 
	{
		return this.rear == this.a.length-1; 
	}
	
	public enqueue(e:T) : void
	{
		if(!this.isFull())
		{
			this.a[++this.rear] = e; 
		}
		else
		{
			console.log("Queue Overflow");
		}
	}

	public isEmpty():boolean
	{
		return this.front > this.rear;
	}
	
	public dequeue() : void
	{
		if(!this.isEmpty())
		{
			console.log(this.a[this.front++]); 
		}
		else
		{
			console.log("Queue Underflow");
		}
	}
}

let x = new Queue<number>(new Array(10));
for(var i=1; i<=10; i++){
   x.enqueue(i*10);
}

for(var i=1; i<=5; i++){
   x.dequeue();
}










