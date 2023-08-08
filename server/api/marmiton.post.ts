import { searchRecipes, MarmitonQueryBuilder, Recipe } from 'marmiton-api';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const qb = new MarmitonQueryBuilder();
  const body: { title: string, vegan: boolean, vegetarian: boolean, gluten: boolean } = await readBody(event);

  // A query builder is provided to make complex queries
  const query = qb
    .withTitleContaining(body.title)
    .build()

  // Fetch the recipes
  const recipes: Recipe[] = await searchRecipes(query, { limit: 8 })
  
  return recipes
});


