import Level from './quizpages/Level';
import Description from './quizpages/Description';
import Dedication from './quizpages/Dedication';
import Info from './quizpages/Info';

export const emptyFormData = {
  stretchingLevel: '',
  personType: '',
  timeDedicated: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  agreeToTerms: false
};

export const schema = {
  description: {
    previous: null,
    form: Description,
    next: 'level'
  },
  level: {
    previous: 'description',
    form: Level,
    next: 'dedication'
  },
  dedication: {
    previous: 'level',
    form: Dedication,
    next: 'info'
  },
  info: {
    previous: 'dedication',
    form: Info,
    next: null
  }
};
