import { createReducer, on } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";
import { GetDataAction } from "../actions/get-data.action";

export const initialState: characters[] = [];

export const getDataReducer = createReducer(
  initialState,
  on(GetDataAction.retrievedCharacters, (_state, { characters }) => characters)
);