import * as Yup from "yup";

export const productSchema = Yup.object({
  title: Yup.string()
    .trim("Please enter correct title")
    .strict(true)
    .matches(/^[a-zA-Z ]+$/, "Title must contain only alphabets")
    .required("Name is required"),
  quantity: Yup.string()
    .matches(/^[0-9]+$/, "Quantity must contain only digits")
    .required("Quantity is required"),
  category: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Category must contain only alphabets")
    .required("Category is required"),
  image: Yup.string().matches(
    /^(ftp|http|https||Https||Http):\/\/[^ "]+$/,
    "  Invalid URL"
  ),
  price: Yup.string()
    .matches(/^[0-9]+$/, "Price must contain only digits")
    .required("Price is required"),
  offerPrice: Yup.string()
    .matches(/^[0-9]+$/, "Offer Price must contain only digits")
    .required("Offer Price is required"),
  color: Yup.string()
    .matches(/^[a-zA-Z ]+$/, "Color must contain only alphabets")
    .required("Color is required"),
});
