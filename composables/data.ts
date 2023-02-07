export const useMilkTypes = () => useState < Array < Object >> ('milktypes', () => [{
    'label': 'Vache',
    'value': 'Vache'
  },
  {
    'label': 'Chèvre',
    'value': 'Chèvre'
  },
  {
    'label': 'Brebis',
    'value': 'Brebis'
  },
  {
    'label': 'Autre',
    'value': 'Autre'
  }
]);

export const useCheeseTypes = () => useState < Array < Object >> ('cheesetypes', () => [{
    'label': 'Pâte molle croûte naturelle',
    'value': 'Pâte molle croûte naturelle',
    'disabled': true
  },
  {
    'label': 'Pâte molle croûte lavée',
    'value': 'Pâte molle croûte lavée'
  },
  {
    'label': 'Pâte molle croûte fleurie',
    'value': 'Pâte molle croûte fleurie'
  },
  {
    'label': 'Pâte persillée',
    'value': 'Pâte persillée'
  },
  {
    'label': 'Pâte pressée non cuite',
    'value': 'Pâte pressée non cuite'
  },
  {
    'label': 'Pâte pressée cuite',
    'value': 'Pâte pressée cuite',
  },
  {
    'label': 'Fromage frais',
    'value': 'Fromage frais'
  },
  {
    'label': 'Fromage fondu',
    'value': 'Fromage fondu',
    'disabled': true
  }
]);

export const useEventTypes = () => useState < Array < Object >> ('eventtypes', () =>[
  {
    "label": "Dîner",
    "value": 250,
  },
  {
    "label": "Dégustation",
    "value": 150,
  }
]);