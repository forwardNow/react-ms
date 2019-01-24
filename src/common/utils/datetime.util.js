import moment from 'moment';

function getCurrentDatetime(pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment().format(pattern);
}

export default { getCurrentDatetime };
