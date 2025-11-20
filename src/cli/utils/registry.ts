import registryData from "../registry.json";

export interface RegistryFile {
  path: string;
  content: string;
  type: string;
}

export interface RegistryItem {
  name: string;
  files: RegistryFile[];
  dependencies: string[];
  registryDependencies: string[];
  type: string;
}

export interface Registry {
  [key: string]: RegistryItem;
}

export function getRegistry(): Registry {
  return registryData as Registry;
}

export function getComponent(name: string): RegistryItem | null {
  const registry = getRegistry();
  return registry[name] || null;
}

export function getAllComponents(): string[] {
  const registry = getRegistry();
  return Object.keys(registry);
}

export function getComponentWithDependencies(name: string): string[] {
  const registry = getRegistry();
  const component = registry[name];

  if (!component) {
    return [];
  }

  const components = [name];

  for (const dep of component.registryDependencies) {
    if (!components.includes(dep)) {
      components.push(...getComponentWithDependencies(dep));
    }
  }

  return [...new Set(components)];
}
