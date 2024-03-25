// Object Literal
// collection of object type. Objects are collection of properties.
// used to store keyed collections & complex entities.

// property is in key -> value pair.

const student = {
    name: "asmita",
    age: 24,
    marks: 76,
    city: "Tansen"
};

console.log(student);

let student2 = ["subash", 25, 80, "Tansen"]; //array

// student = ["asbita", 20];  //assignmant to constant variable error

const item = {
    price: 199,
    discount: 50,
    colors: ["red", "pink"] 
};

// Thread/Twitter Post

const post = {
    username: "@asmita",
    content: "lorem lorem lorem this is my #firstpost",
    likes: 10,
    reposts: 2,
    tags: ["@subash", "@nepal", "@apple"]
};

console.log(post);

// Get values -> obj.key

console.log(post["username"]);
console.log(post.username);

console.log(post.content);
console.log(post.likes);
console.log(post.reposts);
console.log(post.tags);

console.log(post.tags[0]);

let prop = "reposts";
console.log(post[prop]);    //this case, we use [] brackets

// JS automatically converts objects keys to string

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d", //null, true, undefined is converted to "string"
    undefined: "e"
};

// all these keys are converted to "string"
console.log(obj[1]); //in obj[1], 1 is not index/number, it is a string
// obj.1 -> unexpected number error
// obj.null -> "d"

// add/update value

student.city = "australia"; //update
student.gender = "female"; //add
student.marks = "A"; //update num -> "str"
console.log(student);

student.marks = [73, 76, 83]; 

delete student.age;  //delete key: value pair
console.log(student);


// Objects of Objects

const classInfo = {
    asmita : {
        grade: "B+",
        city: "tansen"
    },
    subash : {
        grade: "A",
        city: "tansen"
    },
    anup : {
        grade: "B+",
        city: "butwal"
    }
};

console.log(classInfo);

console.log(classInfo.asmita);
console.log(classInfo.asmita.grade); //B+

classInfo.asmita.city = "jhapa";
console.log(classInfo.asmita.city); //jhapa


// Array of Objects

const clInfo = [
    {
        name: "asmita",
        grade: "B+",
        city: "tansen"
    },
    {
        name: "subash",
        grade: "A",
        city: "tansen"
    },
    {
        name: "anup",
        grade: "B+",
        city: "butwal"
    }
];

console.log(clInfo);
console.log(clInfo[0]); //first obj asmita
console.log(clInfo[0].name); //asmita

clInfo[0].city = "aus";
console.log(clInfo[0].city); //aus

clInfo[0].gender = "female";
console.log(clInfo[0]); //{obj asmita}

