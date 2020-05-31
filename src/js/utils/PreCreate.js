export default class PreCreate {
  _preCreateTextSymbols(text) {
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

  preCreateText(text) {
    return this._cutText(this._preCreateTextSymbols(text));
  }

  _cutText(text) {
    const textLimit = text.slice(0, 100); // например макс 100 символов
    const textCut = textLimit.split(' ');
    textCut.splice(textCut.length - 1, 1);
    const finalText = textCut.join(' ');
    return (`${finalText} ...`);
  }
}
