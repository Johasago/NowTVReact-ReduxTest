import { getMessages, getMembers } from './data';

export default function getChatLog() {
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