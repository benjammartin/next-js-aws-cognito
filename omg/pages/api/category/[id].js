const mockcats = [
  {
    id: 0,
    slug: "phone",
    title: "Smartphone comparison",
    nb: 3278,
  },
  {
    id: 1,
    slug: "tablet",
    title: "Tablet comparison",
    nb: 675,
  },
  {
    id: 2,
    slug: "ereader",
    title: "E-reader comparison",
    nb: 52,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  console.log(req.query);
  const cat = mockcats.find((cat) => cat.slug === req.query.id);
  res.json(cat);
};
