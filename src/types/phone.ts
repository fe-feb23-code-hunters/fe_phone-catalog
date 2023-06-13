export interface Phone {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  description: Array<{ title: string; text: string[] }>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}
