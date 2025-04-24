//  Job Queue / Microtask
// => ek queue hoti hai jisme Promises aur async/await ke callbacks store hote hain — jab unki turn aati hai, tab ye run hote hain

// Callback Queue - Task Queue
setTimeout(() => {
  console.log("1", "is the longliest number");
}, 0);
setTimeout(() => {
  console.log("2", "is the longliest number");
}, 1000);

// 2 Job Queue - Microtask Queue
Promise.resolve("hi").then((data) => console.log("2", data));

// 3 - synchronous code
console.log("3", "is a crowd");

// ------------------------------------------------------------------

// Sequence - Async tasks ek ke baad ek run karte hain — next task tabhi chalega jab pehla complete ho jaye.

// Parallel - Sab tasks ek sath start hote hain, aur sab apne-apne time pe complete hote hain. Wait nahi karte ek dusre ka.

// Race - Multiple async tasks start hote hain, jo pehle complete ho jaye, uska result milta hai — baaki ignore ho jaate hain.

// ------------------------------------------------------------------

// ES2020 allSettled()

// Promise.allSettled() ES2020 (ES11) ka feature hai — aur yeh real-life async handling mein bahaot useful hota hai, especially jab tum chahte ho ke saare Promises complete ho jaayein, chahe fail ho ya success.

//  Syntax:

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => {
    console.log(result.status); // 'fulfilled' or 'rejected'
    console.log(result.value || result.reason);
  });
});

// ------------------------------------------------------------------
