import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import createClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    createClient.fetch(
      `
      *[_type == 'category']
      `
    ).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    showsHorizontalScrollIndicator={false}
      horizontal
    >
      {/* category card */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          // id={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  )
}

export default Categories;