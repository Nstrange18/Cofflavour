export const coffeeLoader = async() => {
  const res = await fetch("http://localhost:4000/coffee");

  return res.json()
}