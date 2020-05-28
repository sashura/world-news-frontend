import './styles/index.css';

import Card from './js/components/Card';
import NewsList from './js/components/NewsList';
import ApiNews from './js/api/ApiNews';
import Initial from './js/components/Initial';
import PopupSignIn from './js/components/PopupSignIn';
import PopupRegistration from './js/components/PopupRegistration';
import {
  CONTAINER, HEADER_BLOCK, NEWS_LISTS, POPUP_SUCCESS,
} from './js/constants/elements';
import { errors } from './js/constants/errors';
import Form from './js/components/Form';
import ApiBackend from './js/api/ApiBackend';
import Header from './js/components/Header';
import Popup from './js/components/Popup';
import Auth from './js/components/Auth';
import { dateToFormat } from './js/utils/Date';

const authorization = require('./js/constants/authorization');
const backendData = require('./js/constants/backendData');

const form = new Form(errors);
const auth = new Auth();
const api = new ApiNews(authorization);

const header = new Header(HEADER_BLOCK);
const apiBackend = new ApiBackend(backendData);
const card = new Card(api, apiBackend, auth, dateToFormat);
const newsList = new NewsList(card, api, CONTAINER, NEWS_LISTS);
const popupSignIn = new PopupSignIn(document.querySelector('.popup__login'), form, apiBackend, auth, card, header, newsList);
const popupRegistration = new PopupRegistration(document.querySelector('.popup__createuser'), form, apiBackend, POPUP_SUCCESS);

const popup = new Popup(form, apiBackend);

const initial = new Initial(popupSignIn, popupRegistration, newsList, header);


initial.setHandlers();
