export const ProductColor = [
  {
    label: "Beiges",
    color: "#F5F5DC",
    value: "beige",
  },
  {
    label: "Blues",
    color: "#0000FF",
    value: "blue",
  },
  {
    label: "Browns",
    color: "#964B00",
    value: "brown",
  },
  {
    label: "Golds",
    color: "#FFD700",
    value: "gold",
  },
  {
    label: "Grays",
    color: "#808080",
    value: "gray",
  },
  {
    label: "Greens",
    color: "#00FF00",
    value: "green",
  },
  {
    label: "Oranges",
    color: "#FFA500",
    value: "orange",
  },
  {
    label: "Reds",
    color: "#FF0000",
    value: "red",
  },
  {
    label: "Violets",
    color: "#8F00FF",
    value: "violet",
  },
];

export const getFileExtension = (file) => {
  let regex = new RegExp("[^.]+$");
  return file.name.match(regex)[0].toLowerCase();
};

export const BUCKET_DOMAIN = "https://lmtile.s3.us-west-1.amazonaws.com/";
