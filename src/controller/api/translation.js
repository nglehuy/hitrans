import api_config from '../../config/api_config';
import makeRequest from './api';

const translate = (q, config) => {
  let url =
    api_config.TRANS_URL +
    '?q=' +
    q +
    '&target=' +
    config.target_lang +
    '&format=' +
    config.format +
    '&model=' +
    config.model +
    '&key=' +
    config.api_key;
  if (config.source_lang !== 'auto') {
    url += '&source=' + config.source_lang;
  }
  return makeRequest(url, {
    method: 'POST',
  })
    .then(res => {
      if (res.data) {
        return res.data.translations[0].translatedText;
      } else return res;
    })
    .catch(e => {
      console.error(e);
    });
};

export default translate;
