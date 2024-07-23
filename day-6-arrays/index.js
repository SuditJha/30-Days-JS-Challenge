const a = [1, 2, 3, 4, 5]
console.log(a);

console.log(a[0], a[a.length - 1]);

a.push(6)
console.log(a);
a.pop()
console.log(a);
a.unshift(0)
console.log(a);
a.shift()
console.log(a);

const b = a.map((item) => item * 2)
console.log(b);

const c = a.filter((item) => item % 2 === 0)
console.log(c);

const d = a.reduce((acc, item) => acc + item, 0)
console.log(d);

for (const item of a) {
    console.log(item);
}

a.forEach((item) => {
    console.log(item);
});


const e = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(e);
console.log(e[0][0], e[1][1], e[2][2]);