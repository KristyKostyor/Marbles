const cats = () => {
  const nickName = ["Shreda", "Whiskas", "Tom", "Jimmy", "Charles"];
  const cuteOftheCats = () => {
    return [nickName = Math.floor(Math.random() * nickName.length)];
  };
  return cuteOftheCats;
};
const cutyCat = cats();
console.log(cutyCat());
