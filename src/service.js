import { getMessages, getMembers } from './data';

export function getChatLog() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
}

export function showMembers() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  };
}

export function sortMessages() {
  return {
    type: 'SORT_MESSAGES',
    payload: getMessages()
  }
}