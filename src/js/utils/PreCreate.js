export default class PreCreate {
  preCreateText(text) {
    if (text === null) {
      return text;
    }
    return text.replace(/<[A-z/][^>]*>/g, '');
  }

  preCreateImage(image) {
    if (image === null) {
      return 'https://image.shutterstock.com/z/stock-photo-question-mark-heap-on-table-concept-for-confusion-question-or-solution-264466154.jpg';
    }
    return image;
  }
}
