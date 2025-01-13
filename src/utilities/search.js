import { flattenedCategoriesAndSubjects } from 'src/constants';

export function createSearchUrl({ subject = '', search = '', location = '' }) {
  let url = new URL(`/search`, window.location.origin);

  if (subject !== '') {
    for (const i in flattenedCategoriesAndSubjects) {
      if (flattenedCategoriesAndSubjects[i].slug === subject) {
        url = new URL(`/search/${subject}`, window.location.origin);
      }
    }
  }

  if (search !== '') {
    url.searchParams.append('search', search);
  }

  if (location !== '') {
    url.searchParams.append('location', location);
  }

  return url.href;
}
