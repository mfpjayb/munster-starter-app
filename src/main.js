import './style.css';
import Props from 'munster-props';
import { Global } from 'munster-modules';
import { SERVER_URL } from './constants';
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';
import AuthService from './services/auth.service';
import Router from 'munster-router';
import Store from 'munster-store';
import Root from './Root.html';
import Login from './components/login.html';
import LoginForm from './components/login-form.html';
import Auth from './components/auth.html';
import Navbar from './components/navbar.html';
import Home from './components/home.html';
import Sidebar from './components/sidebar.html';
import Settings from './components/settings.html';
import CreateCategoryModal from './components/create-category-modal.html';
import Training from './components/training.html';
import Documents from './components/documents.html';
import Files from './components/files.html';
import Folders from './components/folders.html';
import FolderRenameModal from './components/folder-rename-modal.html';
import Upload from './components/upload.html';
import PDFViewer from './components/pdf-viewer.html';
import Report from './components/report.html';
import RegistrationTokens from './components/registration-tokens.html';
import UserReport from './components/user-report.html';
import SearchFile from './components/search-file.html';

const routes = [
  { path: '/', component: Login, exact: true, middleware: [GuestGuard] },
  {
    path: '/auth', component: Auth, middleware: [AuthGuard],
    children: [
      { path: '/auth', component: Home, exact: true },
      { path: '/auth/settings', component: Settings },
      { path: '/auth/training/:categoryKey', component: Training },
      { path: '/auth/documents', component: Documents, exact: true },
      { path: '/auth/documents/:parentId', component: Documents },
      { path: '/auth/upload', component: Upload },
      { path: '/auth/pdf-viewer/:filename', component: PDFViewer },
      { path: '/auth/pdf-viewer-page/:filename/:pageNumber', component: PDFViewer },
      { path: '/auth/report/:categoryKey', component: Report },
      { path: '/auth/registration-tokens', component: RegistrationTokens },
      { path: '/auth/users-reports', component: UserReport },
      { path: '/auth/search', component: SearchFile }
    ]
  },
]

const store = {
  state: {
    isAdminLogin: false,
    authUser: {},
    category: {
      list: []
    },
    files: [],
    folders: []
  }
};

new Global({
  components: [
    Root,
    Login,
    LoginForm,
    Auth,
    Navbar,
    Sidebar,
    Home,
    Report,
    SearchFile,
    Settings,
    Training,
    Documents,
    Files,
    Folders,
    Upload,
    UserReport,
    PDFViewer,
    FolderRenameModal,
    RegistrationTokens,
    CreateCategoryModal
  ],
  plugins: [
    Router.routes(routes),
    Store.config(store),
    Props
  ]
});

const authService = new AuthService();
function requestInterceptor({ open = () => { }, send = () => { } }) {
  const request = XMLHttpRequest.prototype;
  const openRequest = request.open;
  const sendRequest = request.send;
  request.open = function (method, url, async, user, password) {
    open({ method, url, async, user, password }, ({ method, url, async, user, password }) => {
      return openRequest.call(this, method, url, async, user, password);
    })
  };
  request.send = function (data) {
    const config = {
      xmlHttpRequest: this,
      data
    };
    send(config, function (newConfig) {
      sendRequest.call(newConfig.xmlHttpRequest, newConfig.data);
    });
  };
}

requestInterceptor({
  open: (config, next) => {
    if (config.url.indexOf(`${location.origin}/sockjs-node/`) !== 0) {
      config.url = config.url.indexOf('/') === 0
        ? `${SERVER_URL}${config.url}`
        : `${SERVER_URL}/${config.url}`;
    }
    next(config);
  },
  send: (config, next) => {
    const token = authService.getToken();
    if (token) {
      config.xmlHttpRequest.setRequestHeader('Authorization', `Bearer ${token.token}`);
    }
    next(config)
  }
});