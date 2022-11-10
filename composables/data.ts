import gares from '../src/gares.json'

export const useGares = () => useState<Array<Object>>('gares', () => gares);

export const useMilkTypes = () => useState<Array<Object>>('milktypes', () => [
  {'nom': 'Vache'},
  {'nom': 'Chèvre'},
  {'nom': 'Brebis'},
  {'nom': 'Autre'}
]);

export const useCheeseTypes = () => useState<Array<Object>>('cheesetypes', () => [
  {'nom': 'Pâte molle croûte naturelle'},
  {'nom': 'Pâte molle croûte lavée'},
  {'nom': 'Pâte molle croûte fleurie'},
  {'nom': 'Pâte persillée'},
  {'nom': 'Pâte pressée non cuite'},
  {'nom': 'Pâte pressée cuite'},
  {'nom': 'Fromage frais'},
  {'nom': 'Fromage fondu'}
]);
