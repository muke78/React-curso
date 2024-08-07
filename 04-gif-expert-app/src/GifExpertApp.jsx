import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Demon Slayer"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory
                onNewCategory={(event) => { onAddCategory(event) }}
            />
            {categories.map((cate) => (
                <GifGrid key={cate} category={cate} />
            ))}
        </>
    );
};

