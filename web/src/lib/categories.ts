import { Category } from "./types";

export interface CategoryConfig {
  value: Category;
  label: string;
  icon: string;
  iconicTaxa: string;
  perPage: number;
}

export const CATEGORIES: CategoryConfig[] = [
  { value: "tree", label: "Trees", icon: "🌲", iconicTaxa: "Plantae", perPage: 100 },
  { value: "plant", label: "Plants", icon: "🌸", iconicTaxa: "Plantae", perPage: 100 },
  { value: "fungus", label: "Fungi", icon: "🍄", iconicTaxa: "Fungi", perPage: 50 },
  { value: "bird", label: "Birds", icon: "🐦", iconicTaxa: "Aves", perPage: 80 },
  { value: "mammal", label: "Mammals", icon: "🦌", iconicTaxa: "Mammalia", perPage: 30 },
  { value: "insect", label: "Insects", icon: "🦋", iconicTaxa: "Insecta", perPage: 50 },
  { value: "reptile", label: "Reptiles", icon: "🦎", iconicTaxa: "Reptilia", perPage: 20 },
  { value: "amphibian", label: "Amphibians", icon: "🐸", iconicTaxa: "Amphibia", perPage: 20 },
];

export const CATEGORY_LABELS: Record<Category, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.label])
) as Record<Category, string>;

export const CATEGORY_ICONS: Record<Category, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.value, c.icon])
) as Record<Category, string>;

export const CATEGORY_ORDER: Record<Category, number> = Object.fromEntries(
  CATEGORIES.map((c, i) => [c.value, i])
) as Record<Category, number>;

/** Unique iconic taxa configs for API fetching (deduplicates Plantae). */
export const ICONIC_TAXA_CONFIGS = Array.from(
  new Map(
    CATEGORIES.filter((c) => c.value !== "tree" && c.value !== "plant")
      .concat([CATEGORIES[0]]) // keep one Plantae entry (tree, perPage 100)
      .map((c) => [c.iconicTaxa, { iconicTaxa: c.iconicTaxa, perPage: c.perPage }])
  ).values()
);
