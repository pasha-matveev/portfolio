import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export const variants = ['a', 'b', 'c'] as const;
export type Variant = (typeof variants)[number];

export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort((x, y) => x.data.order - y.data.order);
}
