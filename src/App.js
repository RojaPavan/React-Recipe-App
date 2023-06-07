import styled from "styled-components";
import Axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {
  Header,
  AppNameComponent,
  AppIcon,
  SearchComponent,
  SearchImg,
  SearchInput,
} from "./Components/Header";
import {
  RecipeContainer,
  RecipeListContainer,
  RecipeName,
  Ingredient,
  SeeMore,
  CoverImage,
} from "./Components/Recipe";
import { useState } from "react";

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj) => (
                <tr>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Ingredient onClick={() => window.open(recipeObj.url)}>
            SeeMore
          </Ingredient>
          <SeeMore onClick={() => setShow(false)}>Close</SeeMore>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <Ingredient onClick={() => setShow(true)}>Ingridents</Ingredient>
        <SeeMore onClick={() => window.open(recipeObj.url)}>
          Complete Recipe
        </SeeMore>
      </RecipeContainer>
    </>
  );
};
const APP_ID = "fe65e7e1";
const APP_KEY = "0ae64100116388d7862b9a4a7e754931";

const Container = styled.div`
  dispaly: flex;
  flex-direction: column;
`;
function App() {
  const [timeOutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    updateRecipeList(response.data.hits);
  };

  const onTextChange = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => fetchRecipe(e.target.value), 500);
    updateTimeOutId(timeOut);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="burger_logo.webp" />
          Recipe Book
        </AppNameComponent>
        <SearchComponent>
          <SearchImg src="search.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src="./burger_logo.webp" />
        )}
      </RecipeListContainer>
    </Container>
  );
}
export default App;
