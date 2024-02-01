import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
	id: String;
	name: String;
}

const categorySchema = new Schema({
	name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
