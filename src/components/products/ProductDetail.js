import SelectInput from "@mui/material/Select/SelectInput";
import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h3>{product.id ? "Update" : "Add"}</h3>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.ProductName}
        onChange={onChange}
        error={errors.ProductName}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="UnitPrice"
        label="Unit Price"
        value={product.UnitPrice}
        onChange={onChange}
        error={errors.UnitPrice}
      />

      <TextInput
        name="QuantityPerUnit"
        label="Quantity Per Unit"
        value={product.QuantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />

      <TextInput
        name="UnitsInStock"
        label="Units In Stock"
        value={product.UnitsInStock}
        onChange={onChange}
        error={errors.UnitsInStock}

      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
