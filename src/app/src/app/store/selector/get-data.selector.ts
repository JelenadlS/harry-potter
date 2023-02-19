import { createFeatureSelector } from "@ngrx/store";
import { characters } from "../../services/hp-data.interface";

export const selectCharacters = createFeatureSelector<characters[]>('characters');