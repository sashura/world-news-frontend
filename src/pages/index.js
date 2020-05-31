import './savednews.css';

import ApiBackend from '../js/api/ApiBackend';
import Card from '../js/components/Card';
import Auth from '../js/components/Auth';
import { dateToFormat } from '../js/utils/Date';
import {
  CONTAINER, HEADER_BLOCK, NEWS_LISTS, HEADER_BUTTON,
} from '../js/constants/elements';
import Header from '../js/components/Header';
import SavedNewsList from '../js/components/SavedNewsList';
import { helpMessages } from '../js/constants/textConstants';
import PreCreate from '../js/utils/PreCreate';


const backendData = require('../js/constants/backendData');

const preCreate = new PreCreate();
const auth = new Auth();
const apiBackend = new ApiBackend(backendData);
const header = new Header(HEADER_BLOCK, apiBackend, auth);
const card = new Card(apiBackend, auth, dateToFormat, helpMessages, preCreate);
const savedNewsList = new SavedNewsList(
  apiBackend, card, CONTAINER, NEWS_LISTS, HEADER_BUTTON, auth,
);

header.savedNewsHeader();

savedNewsList.checkLogin();
savedNewsList.unloginRedirect();
