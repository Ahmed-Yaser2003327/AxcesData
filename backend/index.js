const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// بيانات عشوائية محفوظة في الذاكرة
const data = [
  {
    name: "mohamed",
    age: "24",
    id: Math.floor(Math.random() * 800),
  },
  {
    name: "nour",
    age: "20",
    id: Math.floor(Math.random() * 800),
  },
  {
    name: "nada",
    age: "21",
    id: Math.floor(Math.random() * 800),
  },
  {
    name: "Ahmed",
    age: "21",
    id: Math.floor(Math.random() * 800),
  },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/getusers", (req, res) => {
  res.json(data);
});

app.post("/adduser", (req, res) => {
  const newUser = req.body;
  newUser.id = Math.floor(Math.random() * 800);
  console.log(newUser);

  data.push(newUser);

  res.status(201).json({ message: "تمت إضافة المستخدم بنجاح", user: newUser });
});

app.post("/deleteUser", (req, res) => {
  const { id } = req.body;

  // ابحث عن المستخدم واحذفه من المصفوفة
  const index = data.findIndex((user) => user.id === id);
  if (index !== -1) {
    data.splice(index, 1); // احذف المستخدم من المصفوفة
    res.status(200).json({ message: "تم حذف المستخدم بنجاح" });
  } else {
    res.status(404).json({ message: "المستخدم غير موجود" });
  }
});

// تشغيل السيرفر
app.listen(3004, () => {
  console.log(" 3004");
});
