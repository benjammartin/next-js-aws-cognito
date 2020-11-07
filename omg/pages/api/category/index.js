const mockcats = [
  {
    id: 0,
    slug: "phone",
  },
  {
    id: 1,
    slug: "tablet",
  },
  {
    id: 2,
    slug: "ereader",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(mockcats);
};
