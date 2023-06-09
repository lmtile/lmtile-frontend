import _ from "lodash";

export const ProductColor = [
  { label: "Beige/ Tan", color: "#F5F5DC", value: "beige_tan" },
  { label: "Beiges", color: "#F5F5DC", value: "beige" },
  { label: "Blacks", color: "#000000", value: "black" },
  { label: "Blues", color: "#0000FF", value: "blue" },
  { label: "Browns", color: "#964B00", value: "brown" },
  { label: "Burgundy", color: "#800020", value: "burgundy" },
  { label: "Creams", color: "#FFFDD0", value: "cream" },
  { label: "Golds", color: "#FFD700", value: "gold" },
  { label: "Gray Darks", color: "#5A5A5A", value: "gray_dark" },
  { label: "Grays", color: "#808080", value: "gray" },
  { label: "Gray Lights", color: "#D3D3D3", value: "gray_light" },
  { label: "Greens", color: "#013220", value: "green" },
  { label: "Natural / Beige", color: "#F5F5DC", value: "natural_beige" },
  { label: "Naturals", color: "#ae4a60", value: "natural" },
  { label: "Navy", color: "#000080", value: "navy" },
  { label: "Olives", color: "#808000", value: "olive" },
  { label: "Oranges", color: "#FFA500", value: "orange" },
  { label: "Reds", color: "#FF0000", value: "red" },
  { label: "Sky", color: "#87CEEB", value: "sky" },
  { label: "Taupe", color: "#483C32", value: "taupe" },
  { label: "Terra Cottas", color: "#E2725B", value: "terra_cotta" },
  { label: "Violets", color: "#8F00FF", value: "violet" },
  { label: "Whites", color: "#FFFFFF", value: "white" },
  { label: "White Cools", color: "#FFFFFF", value: "white_cool" },
  { label: "White Warms", color: "#f3e7d3", value: "white_warm" },
  { label: "Yellows", color: "#FFFF00", value: "yellow" },
];

export const getFileExtension = (file) => {
  let regex = new RegExp("[^.]+$");
  return file.name.match(regex)[0].toLowerCase();
};

export const BUCKET_DOMAIN = "https://lmtile.s3.us-west-1.amazonaws.com/";

export const DATE_TIME_HELPER = {
  DATE_FORMAT: "MM-DD-YYYY",
  DATE_TIME_FORMAT: "MM-DD-YYYY hh:mm",
};

export const getColorDetails = (color) => {
  return _.find(ProductColor, ({ value }) => {
    return value === color;
  });
};

export const getSubCategoryDetails = (subcat, id) => {
  return _.find(subcat, ({ value }) => {
    return value === id;
  });
};
