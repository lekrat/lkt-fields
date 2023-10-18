import { SimpleFieldConfig } from "./config/SimpleFieldConfig";
import { ChoiceFieldConfig } from "./config/ChoiceFieldConfig";
import { DateFieldConfig } from "./config/DateFieldConfig";
export type FieldConfig = SimpleFieldConfig | ChoiceFieldConfig | DateFieldConfig;
