const arr1 = [{ id: "x" }, { id: "y" }, { id: "a" }, { id: "s" }, { id: "d" }, { id: "f" }, { id: "g" }]
const arr2 = [{ id: "z" }, { id: "x" }, { id: "c" }, { id: "v" }, { id: "a" }, { id: "b" }, { id: "n" }]


arr2.forEach((e2) => {
    if (arr1.some(e1 => e1.id === e2.id)) e2.match = true;
    else e2.match = false;
})

console.log(arr2)