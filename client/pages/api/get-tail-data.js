export default async function (req, res) {
  const tailData = await fetch(process.env.JSON_URL)
  .then(res => res.json())

  res.send(tailData || []);
}
