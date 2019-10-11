import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {
    
    prototype?;                                 //atributo opcional
    associate?(models: ModelsInterface): void;  //método opcional

}