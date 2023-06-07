import styled from "styled-components";

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;
export const Ingredient = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: green;
  margin-bottom: 12px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
`;
export const SeeMore = styled.span`
  font-size: 18px;
  border: solid 1px red;
  color: red;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
`;
