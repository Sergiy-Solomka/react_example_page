import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.scss'
import App from 'src/App'
import reportWebVitals from 'src/reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import i18next from 'i18next'
import { getLanguageFromCookie, getBrowserLanguage, getResources } from 'src/services/setlenguage'
import { store } from 'src/redux/store/store'

i18next.init({
  interpolation: { escapeValue: false },
  lng: getLanguageFromCookie() || getBrowserLanguage(),
  resources: getResources() as any,
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </BrowserRouter>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
