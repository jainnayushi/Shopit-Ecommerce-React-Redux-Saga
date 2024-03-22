import React from "react";
import InputField from "../components/InputField";
import { useFormik } from "formik";
import { productSchema } from "../utils/productSchema";
import "../styles/Form.css";
const ProductForm = ({ product, handleAddProduct, handleUpdateProduct }) => {
  const initialValues = product
    ? { ...product }
    : {
        title: "",
        quantity: "",
        category: "",
        image: "",
        price: "",
        offerPrice: "",
        color: "",
      };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: productSchema,
      onSubmit: (values, action) => {
        product
          ? handleUpdateProduct({ ...values, id: product.id })
          : handleAddProduct(values);

        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="header-form ">
            <h1>Add New Products</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <InputField
                label="Title"
                name="title"
                type="text"
                value={values.title}
                handleChange={handleChange}
                error={errors.title}
                handleBlur={handleBlur}
                touched={touched.title}
              />
              <InputField
                label="Quantity"
                name="quantity"
                type="text"
                value={values.quantity}
                handleChange={handleChange}
                error={errors.quantity}
                handleBlur={handleBlur}
                touched={touched.quantity}
              />
              <InputField
                label="Category"
                name="category"
                type="text"
                value={values.category}
                handleChange={handleChange}
                error={errors.category}
                handleBlur={handleBlur}
                touched={touched.category}
              />
              <InputField
                label="Image URL"
                name="image"
                type="text"
                value={values.image}
                handleChange={handleChange}
                error={errors.image}
                handleBlur={handleBlur}
                touched={touched.image}
              />
              <InputField
                label="Price"
                name="price"
                type="text"
                value={values.price}
                handleChange={handleChange}
                error={errors.price}
                handleBlur={handleBlur}
                touched={touched.price}
              />
              <InputField
                label="Offer Price"
                name="offerPrice"
                type="text"
                value={values.offerPrice}
                handleChange={handleChange}
                error={errors.offerPrice}
                handleBlur={handleBlur}
                touched={touched.offerPrice}
              />
              <InputField
                label="Color"
                name="color"
                type="text"
                value={values.color}
                handleChange={handleChange}
                error={errors.color}
                handleBlur={handleBlur}
                touched={touched.color}
              />
            </div>
            <button type="submit" className="form-btn ">
              {product ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
